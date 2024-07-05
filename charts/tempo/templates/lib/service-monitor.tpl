{{/*
Tempo common ServiceMonitor definition
Params:
  ctx = . context
  component = name of the component
  memberlist = true/false, whether component is part of memberlist
*/}}
{{- define "tempo.lib.serviceMonitor" -}}
{{- with .ctx.Values.metaMonitoring.serviceMonitor }}
{{- if .enabled }}
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: {{ include "tempo.resourceName" $ }}
  namespace: {{ .namespace | default $.ctx.Release.Namespace | quote }}
  labels:
    {{- include "tempo.labels" $ | nindent 4 }}
    {{- with .labels }}
    {{- toYaml . | nindent 4 }}
    {{- end }}
  {{- with .annotations }}
  annotations:
    {{- toYaml . | nindent 4 }}
  {{- end }}
spec:
  namespaceSelector:
  {{- if .namespaceSelector }}
    {{- toYaml .namespaceSelector | nindent 4 }}
  {{- else }}
    matchNames:
    - {{ $.ctx.Release.Namespace }}
  {{- end }}
  selector:
    matchLabels:
      {{- include "tempo.selectorLabels" $ | nindent 6 }}
    matchExpressions:
      - key: prometheus.io/service-monitor
        operator: NotIn
        values:
          - "false"
  endpoints:
    - port: http-metrics
      {{- with .interval }}
      interval: {{ . }}
      {{- end }}
      {{- with .scrapeTimeout }}
      scrapeTimeout: {{ . }}
      {{- end }}
      relabelings:
        - action: replace
          sourceLabels: [job]
          replacement: "{{ $.ctx.Release.Namespace }}/{{ $.component }}"
          targetLabel: job
        {{- if kindIs "string" .clusterLabel }}
        - replacement: "{{ .clusterLabel | default (include "tempo.clusterName" $.ctx) }}"
          targetLabel: cluster
        {{- end }}
        {{- with .relabelings }}
        {{- toYaml . | nindent 8 }}
        {{- end }}
      {{- with .scheme }}
      scheme: {{ . }}
      {{- end }}
      {{- with .tlsConfig }}
      tlsConfig:
        {{- toYaml . | nindent 8 }}
      {{- end }}
{{- end -}}
{{- end -}}
{{- end -}}
