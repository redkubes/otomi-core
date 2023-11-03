{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "civo-acme.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "civo-acme.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "civo-acme.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Common labels
*/}}
{{- define "civo-acme.labels" -}}
helm.sh/chart: {{ include "civo-acme.chart" . }}
{{ include "civo-acme.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}

{{/*
Selector labels
*/}}
{{- define "civo-acme.selectorLabels" -}}
app.kubernetes.io/name: {{ include "civo-acme.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}

{{/*
Create the name of the service account to use
*/}}
{{- define "civo-acme.serviceAccountName" -}}
{{- if .Values.serviceAccount.create -}}
    {{ default (include "civo-acme.fullname" .) .Values.serviceAccount.name }}
{{- else -}}
    {{ default "default" .Values.serviceAccount.name }}
{{- end -}}
{{- end -}}

{{- define "civo-acme.rootCAIssuer" -}}
{{ printf "%s-ca" (include "civo-acme.fullname" .) }}
{{- end -}}

{{- define "civo-acme.rootCACertificate" -}}
{{ printf "%s-ca" (include "civo-acme.fullname" .) }}
{{- end -}}

{{- define "civo-acme.servingCertificate" -}}
{{ printf "%s-webhook-tls" (include "civo-acme.fullname" .) }}
{{- end -}}

{{- define "civo-acme.selfSignedIssuer" -}}
{{ printf "%s-selfsign" (include "civo-acme.fullname" .) }}
{{- end -}}

