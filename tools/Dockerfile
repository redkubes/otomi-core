# syntax=docker/dockerfile:1.6
FROM ubuntu:20.04 as builder

ARG DEBIAN_FRONTEND=noninteractive
ARG TARGETARCH
# https://github.com/kubernetes/kubernetes/releases
ARG KUBECTL_VERSION=1.26.9
# https://github.com/helm/helm/tags
ARG HELM_VERSION=3.12.3
# https://github.com/databus23/helm-diff/releases
ARG HELM_DIFF_VERSION=3.8.0
# https://github.com/jkroepke/helm-secrets/releases
ARG HELM_SECRETS_VERSION=3.15.0
# https://github.com/mozilla/sops/releases
ARG SOPS_VERSION=3.7.3
# https://github.com/noqcks/gucci/releases
ARG GUCCI_VERSION=1.6.6
# https://github.com/helmfile/helmfile/releases
ARG HELMFILE_VERSION=0.156.0
# https://github.com/open-policy-agent/opa/releases
ARG OPA_VERSION=0.50.1
# https://github.com/yannh/kubeconform/releases
ARG KUBECONFORM_VERSION="v0.6.4"
# https://github.com/open-policy-agent/conftest/releases
ARG CONFTEST_VERSION=0.39.2
# https://github.com/plexsystems/konstraint/releases
ARG KONSTRAINT_VERSION=0.26.0
# https://nodejs.org/en/download/
ARG NODE_VERSION=16

ARG HELM_FILE_NAME=helm-v${HELM_VERSION}-linux-${TARGETARCH}.tar.gz
WORKDIR /

# Install all required packages in one layer
RUN apt-get update && apt-get install -y \
    curl \
    coreutils \
    apache2-utils \
    apt-transport-https \
    awscli \
    ca-certificates \
    gettext \
    git \
    gnupg \
    gnupg2 \
    groff \
    locales \
    nano \
    netcat \
    openssh-server \
    python3 \
    python3-pip \
    python3-setuptools \
    rlwrap \
    vim \
    rsync && \
    rm -rf /var/lib/apt/lists/* && \
    locale-gen en_US.UTF-8

# jq
RUN jq_download_url="https://github.com/jqlang/jq/releases/download/jq-1.7.1/jq-linux-${TARGETARCH}" && \
    if [ "${TARGETARCH}" = "amd64" ]; then \
        jq_expected_checksum="5942c9b0934e510ee61eb3e30273f1b3fe2590df93933a93d7c58b81d19c8ff5"; \
    elif [ "${TARGETARCH}" = "arm64" ]; then \
        jq_expected_checksum="4dd2d8a0661df0b22f1bb9a1f9830f06b6f3b8f7d91211a1ef5d7c4f06a8b4a5"; \
    else \
        echo "Unsupported TARGETARCH: ${TARGETARCH}" >&2; exit 1; \
    fi && \
    curl -L "${jq_download_url}" --output /usr/bin/jq && \
    echo "${jq_expected_checksum}  /usr/bin/jq" | sha256sum -c - && \
    chmod +x /usr/bin/jq

# yq
COPY --from=mikefarah/yq:4 /usr/bin/yq /usr/bin/yq

RUN mkdir -p /home/app
RUN groupadd -r app &&\
  useradd -r -g app -d /home/app -s /sbin/nologin -c "Docker image user" app
ENV HOME=/home/app
ENV APP_HOME=/home/app/tools
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
ENV PATH $PATH:$APP_HOME

# kubectl
RUN curl -LO "https://dl.k8s.io/release/v$KUBECTL_VERSION/bin/linux/$TARGETARCH/kubectl" && \
    curl -LO "https://dl.k8s.io/release/v$KUBECTL_VERSION/bin/linux/$TARGETARCH/kubectl.sha256" && \
    echo "$(cat kubectl.sha256)  kubectl" | sha256sum --check && \
    chmod +x kubectl

# sops
ADD https://github.com/mozilla/sops/releases/download/v${SOPS_VERSION}/sops-v${SOPS_VERSION}.linux sops
RUN chmod +x sops

# helm
ADD https://get.helm.sh/${HELM_FILE_NAME} /tmp
RUN tar -zxvf /tmp/${HELM_FILE_NAME} -C /tmp && mv /tmp/linux-${TARGETARCH}/helm helm && rm -rf /tmp/*
RUN helm plugin install https://github.com/databus23/helm-diff --version ${HELM_DIFF_VERSION}
RUN echo "exec \$*" > /usr/bin/sudo && chmod +x /usr/bin/sudo
RUN helm plugin install https://github.com/jkroepke/helm-secrets --version ${HELM_SECRETS_VERSION}

# helmfile
ADD https://github.com/helmfile/helmfile/releases/download/v${HELMFILE_VERSION}/helmfile_${HELMFILE_VERSION}_linux_${TARGETARCH}.tar.gz /tmp
RUN tar -zxvf /tmp/helmfile_${HELMFILE_VERSION}_linux_${TARGETARCH}.tar.gz -C /tmp && mv /tmp/helmfile helmfile

# gucci
ADD https://github.com/noqcks/gucci/releases/download/${GUCCI_VERSION}/gucci-v${GUCCI_VERSION}-linux-${TARGETARCH} gucci
RUN chmod +x gucci

# aws
RUN pip3 install --upgrade --no-cache-dir awscli

# aws-iam-authenticator
ADD https://s3.us-west-2.amazonaws.com/amazon-eks/1.21.2/2021-07-05/bin/linux/${TARGETARCH}/aws-iam-authenticator aws-iam-authenticator
RUN chmod +x aws-iam-authenticator

# kubeconform
ADD https://github.com/yannh/kubeconform/releases/download/v0.6.4/kubeconform-linux-${TARGETARCH}.tar.gz /tmp
RUN tar -zxvf /tmp/kubeconform-linux-${TARGETARCH}.tar.gz -C /tmp && mv /tmp/kubeconform kubeconform

# opa -> remove when kyverno pr is merged
ADD https://github.com/open-policy-agent/opa/releases/download/v${OPA_VERSION}/opa_linux_amd64 opa
RUN chmod +x opa

# conftest -> remove when kyverno pr is merged
ADD https://github.com/open-policy-agent/conftest/releases/download/v$CONFTEST_VERSION/conftest_${CONFTEST_VERSION}_Linux_x86_64.tar.gz /tmp
RUN tar -zxvf /tmp/conftest_${CONFTEST_VERSION}_Linux_x86_64.tar.gz -C /tmp && mv /tmp/conftest conftest

# konstraint -> remove when kyverno pr is merged
ADD https://github.com/plexsystems/konstraint/releases/download/v${KONSTRAINT_VERSION}/konstraint-linux-amd64 /tmp
RUN mv /tmp/konstraint-linux-amd64 konstraint && chmod +x konstraint

# node
# https://github.com/nodesource/distributions
RUN set -uex && \
  mkdir -p /etc/apt/keyrings && \
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
  NODE_MAJOR=${NODE_VERSION} && \
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_${NODE_MAJOR}.x focal main" | tee /etc/apt/sources.list.d/nodesource.list && \
  apt-get update && \
  apt-get install -y nodejs && \
  npm install -g ajv-cli@v3.3.0 json-dereference-cli@0.1.2 zx

FROM ubuntu:20.04 as final

RUN mkdir -p /home/app
RUN groupadd -r app &&\
  useradd -r -g app -d /home/app -s /sbin/nologin -c "Docker image user" app
ENV HOME=/home/app
ENV APP_HOME=/home/app/tools
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
ENV PATH $PATH:$APP_HOME
ENV PATH="/usr/local/bin:${PATH}"

# Copy over binaries
COPY --from=builder /usr/bin /usr/bin
# Copy over node_modules (npm)
COPY --from=builder /usr/lib /usr/lib
# Copy over tools
COPY --from=builder $APP_HOME $APP_HOME
COPY --from=builder $HOME/.local/share/helm/plugins $HOME/.local/share/helm/plugins

RUN chown -R app:app /home/app
USER app

CMD ["/bin/bash"]
