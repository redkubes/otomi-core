Chart customizations for Otomi:

## Required changes for using Civo DNS because it is not by default supported by external-dns

- Add to `values.yaml`:

```
civo:
  apiToken: ""
```

- Add to `_helpers.tmpl`:

```
{{- define "external-dns.civo-credentials" }}
{{ .Values.civo.apiToken }}
{{ end }}
```

- Add to `{{- define "external-dns.createSecret" -}}` in `_helpers.tmpl`:

```
{{- else if and (eq .Values.provider "civo") .Values.civo.apiToken -}}
    {{- true -}}
```


- Add to the `env:` in `dep-ds.yaml`:

```
            {{- if eq .Values.provider "civo" }}
            - name: CIVO_TOKEN
              valueFrom:
                secretTokenRef:
                  name: {{ template "external-dns.secretName" . }}
                  key: apiToken
            {{- end }}
```


- Add to `data:` in `secret.yaml`:

```
  {{- if eq .Values.provider "civo" }}
  apiToken: {{ include "external-dns.civo-credentials" . | b64enc | quote }}
  {{- end }}
```

PR submitted to bitnami/charts/external-dns: Yes