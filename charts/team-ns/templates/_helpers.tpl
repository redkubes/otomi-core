{{- define "chart-labels" -}}
app.kubernetes.io/managed-by: {{ .Release.Service | quote }}
app.kubernetes.io/instance: {{ .Release.Name | quote }}
app.kubernetes.io/version: {{ .Chart.Version }}
helm.sh/chart: "{{ .Chart.Name }}-{{ .Chart.Version }}"
{{- end -}}

{{- define "helm-toolkit.utils.joinListWithComma" -}}
{{- $local := dict "first" true -}}
{{- range $k, $v := . -}}{{- if not $local.first -}},{{- end -}}{{- $v -}}{{- $_ := set $local "first" false -}}{{- end -}}
{{- end -}}

{{- define "helm-toolkit.utils.joinListWithPipe" -}}
{{- $local := dict "first" true -}}
{{- range $k, $v := . -}}{{- if not $local.first -}}|{{- end -}}{{- $v -}}{{- $_ := set $local "first" false -}}{{- end -}}
{{- end -}}

{{- define "flatten-name" -}}
{{- $res := regexReplaceAll "[()/]{1}" . "" -}}
{{- regexReplaceAll "[|.]{1}" $res "-" | trimAll "-" -}}
{{- end -}}

{{- define "ingress" -}}

{{- $appsDomain := printf "apps.%s" .domain }}
{{- $ := . }}
# collect unique host and service names
{{- $routes := dict }}
{{- $names := list }}
{{- range $s := .services }}
{{- $isShared := $s.isShared | default false }}
{{- $isApps := or .isApps (and $s.isCore (not (or $s.ownHost $s.isShared))) }}
{{- $domain := (index $s "domain" | default (printf "%s.%s" $s.name ($isShared | ternary $.cluster.domain $.domain))) }}
{{- if not $isApps }}
  {{- if (not (hasKey $routes $domain)) }}
    {{- $routes = (merge $routes (dict $domain (hasKey $s "paths" | ternary $s.paths list))) }}
  {{- else }}
    {{- if $s.paths }}
      {{- $paths := index $routes $domain }}
      {{- $paths = concat $paths $s.paths }}
      {{- $routes = (merge (dict $domain $paths) $routes) }}
    {{- end }}
  {{- end }}
{{- end }}
{{- if not (or (has $s.name $names) $s.ownHost $s.isShared) }}
  {{- $names = (append $names $s.name) }}
{{- end }}
{{- end }}
{{- $internetFacing := or (ne .provider "nginx") (and (not .cluster.hasCloudLB) (eq .provider "nginx")) }}
{{- if $internetFacing }}
  # also add apps on cloud lb
  {{- $routes = (merge $routes (dict $appsDomain list)) }}
{{- end }}
{{- if and (eq .teamId "admin") .cluster.hasCloudLB (not (eq .provider "nginx")) }}
  {{- $routes = (merge $routes (dict (printf "auth.%s" .cluster.domain) list)) }}
  {{- $routes = (merge $routes (dict (printf "proxy.%s" .domain) list)) }}
{{- end }}
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  annotations:
{{- if $internetFacing }}
    # register hosts when we are an outside facing ingress:
    externaldns: "true"
{{- end }}
{{- if eq .provider "aws" }}
    kubernetes.io/ingress.class: merge
    merge.ingress.kubernetes.io/config: merged-ingress
    alb.ingress.kubernetes.io/tags: "team=team-{{ .teamId }} {{ .ingress.tags }}"
    ingress.kubernetes.io/ssl-redirect: "true"
{{- end }}
{{- if eq .provider "azure" }}
    kubernetes.io/ingress.class: azure/application-gateway
    appgw.ingress.kubernetes.io/ssl-redirect: "true"
    appgw.ingress.kubernetes.io/backend-protocol: "http"
{{- end }}
{{- if eq .provider "nginx" }}
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/proxy-body-size: "0"
    # nginx.ingress.kubernetes.io/proxy-buffering: "off"
    # nginx.ingress.kubernetes.io/proxy-request-buffering: "off"
  {{- if not .hasCloudLB }}
    ingress.kubernetes.io/ssl-redirect: "true"
  {{- end }}
{{- end }}
{{- if .isApps }}
    nginx.ingress.kubernetes.io/upstream-vhost: $1.{{ .domain }}
  {{- if .hasForward }}
    nginx.ingress.kubernetes.io/rewrite-target: /$1/$2
    {{- else }}
    nginx.ingress.kubernetes.io/rewrite-target: /$2
  {{- end }}
{{- end }}
{{- if .hasAuth }}
    nginx.ingress.kubernetes.io/auth-url: "http://oauth2-proxy.istio-system.svc.cluster.local/oauth2/auth"
    nginx.ingress.kubernetes.io/auth-signin: "https://auth.{{ .cluster.domain }}/oauth2/start?rd=/oauth2/redirect/$http_host$escaped_request_uri"
{{- end }}
{{- if or .isApps .hasAuth }}
    nginx.ingress.kubernetes.io/configuration-snippet: |
  {{- if .isApps }}
      rewrite ^/$ /otomi/ permanent;
      rewrite ^(/tracing)$ $1/ permanent;
  {{- end }}
  {{- if .hasAuth }}
      # set team header
      # TODO: remove once we have groups support via oidc
      add_header Auth-Group "{{ .teamId }}";
      proxy_set_header Auth-Group "{{ .teamId }}";
      proxy_set_header Authorization $http_authorization;      
  {{- end }}
{{- end }}
  labels: {{- include "chart-labels" .dot | nindent 4 }}
  name: {{ $.provider }}-team-{{ .teamId }}-{{ .name }}
  namespace: {{ if ne .provider "nginx" }}ingress{{ else }}istio-system{{ end }}
spec:
  rules:
{{- if .isApps }}
    - host: {{ $appsDomain }}
      http:
        paths:
        - backend:
            serviceName: istio-ingressgateway-auth
            servicePort: 80
          path: /
        - backend:
            serviceName: istio-ingressgateway-auth
            servicePort: 80
          path: /({{ range $i, $name := $names }}{{ if gt $i 0 }}|{{ end }}{{ $name }}{{ end }})/(.*)
        # fix for tracing not having a trailing slash:
        - backend:
            serviceName: istio-ingressgateway-auth
            servicePort: 80
          path: /tracing
{{- else }}
  {{- if and (not .hasAuth) (eq .provider "nginx") }}
    - host: {{ $appsDomain }}
      http:
        paths:
        - backend:
            serviceName: oauth2-proxy
            servicePort: 80
          path: /oauth2/userinfo
  {{- end }}
  {{- range $domain, $paths := $routes }}
    - host: {{ $domain }}
      http:
        paths:
    {{- if not (eq $.provider "nginx") }}
      {{- if eq $.provider "aws" }}
          - backend:
              - path: /*
                backend:
                  serviceName: ssl-redirect
                  servicePort: use-annotation
      {{- end }}
          - backend:
              serviceName: nginx-ingress-controller
              servicePort: 80
    {{- else }}
      {{- if gt (len $paths) 0 }}
        {{- range $path := $paths }}
          - backend:
              serviceName: istio-ingressgateway{{ if $.hasAuth }}-auth{{ end }}
              servicePort: 80
            path: {{ $path }}
        {{- end }}
      {{- else }}
          - backend:
              serviceName: istio-ingressgateway{{ if $.hasAuth }}-auth{{ end }}
              servicePort: 80
      {{- end }}
    {{- end }}
  {{- end }}
{{- end }}
{{- if $internetFacing }}
  tls:
  {{- range $domain, $paths := $routes }}
    - hosts:
        - {{ $domain }}
      secretName: {{ $domain | replace "." "-" }}
  {{- end }}
{{- end }}

{{- end }}
