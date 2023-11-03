# syntax=docker/dockerfile:1.6
# The above is needed for the "--checksum" argument to work in the ADD instruction
FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

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
# https://github.com/instrumenta/kubeval/releases
ARG KUBEVAL_VERSION=0.16.1
# https://github.com/open-policy-agent/conftest/releases
ARG CONFTEST_VERSION=0.39.2
# https://github.com/plexsystems/konstraint/releases
ARG KONSTRAINT_VERSION=0.26.0
# https://nodejs.org/en/download/
ARG NODE_VERSION=16

ARG HELM_FILE_NAME=helm-v${HELM_VERSION}-linux-amd64.tar.gz

WORKDIR /

RUN apt-get update -qq \
  && apt install --reinstall coreutils \
  && apt install -qqy --no-install-recommends \
  apache2-utils \
  apt-transport-https \
  awscli \
  ca-certificates \
  curl \
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
  nano \
  groff \
  rsync \
  && rm -rf /var/lib/apt/lists/*

# set locale
RUN locale-gen en_US.UTF-8

# jq
RUN curl -L https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 --output /usr/bin/jq && \
  echo 'af986793a515d500ab2d35f8d2aecd656e764504b789b66d7e1a0b727a124c44  /usr/bin/jq' | sha256sum -c && \
  chmod +x /usr/bin/jq

# yq
COPY --from=mikefarah/yq:3 /usr/bin/yq /usr/bin/yq

RUN mkdir -p /home/app
RUN groupadd -r app &&\
  useradd -r -g app -d /home/app -s /sbin/nologin -c "Docker image user" app
ENV HOME=/home/app
ENV APP_HOME=/home/app/tools
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
ENV PATH $PATH:$APP_HOME

# kubectl
ADD --checksum=sha256:98ea4a13895e54ba24f57e0d369ff6be0d3906895305d5390197069b1da12ae2 https://dl.k8s.io/release/v$KUBECTL_VERSION/bin/linux/amd64/kubectl .
RUN chmod +x kubectl

# sops
ADD https://github.com/mozilla/sops/releases/download/v${SOPS_VERSION}/sops-v${SOPS_VERSION}.linux sops
RUN chmod +x sops

# helm
ADD https://get.helm.sh/${HELM_FILE_NAME} /tmp
RUN tar -zxvf /tmp/${HELM_FILE_NAME} -C /tmp && mv /tmp/linux-amd64/helm helm && rm -rf /tmp/*
RUN helm plugin install https://github.com/databus23/helm-diff --version ${HELM_DIFF_VERSION}
RUN echo "exec \$*" > /usr/bin/sudo && chmod +x /usr/bin/sudo
RUN helm plugin install https://github.com/jkroepke/helm-secrets --version ${HELM_SECRETS_VERSION}

# helmfile
ADD https://github.com/helmfile/helmfile/releases/download/v${HELMFILE_VERSION}/helmfile_${HELMFILE_VERSION}_linux_amd64.tar.gz /tmp
RUN tar -zxvf /tmp/helmfile_${HELMFILE_VERSION}_linux_amd64.tar.gz -C /tmp && mv /tmp/helmfile helmfile

# gucci
ADD https://github.com/noqcks/gucci/releases/download/${GUCCI_VERSION}/gucci-v${GUCCI_VERSION}-linux-amd64 gucci
RUN chmod +x gucci

# aws
RUN pip3 install --upgrade --no-cache-dir awscli

# aws-iam-authenticator
ADD https://s3.us-west-2.amazonaws.com/amazon-eks/1.21.2/2021-07-05/bin/linux/amd64/aws-iam-authenticator aws-iam-authenticator
RUN chmod +x aws-iam-authenticator

# opa
ADD https://github.com/open-policy-agent/opa/releases/download/v${OPA_VERSION}/opa_linux_amd64 opa
RUN chmod +x opa

# kubeval
ADD https://github.com/instrumenta/kubeval/releases/download/v${KUBEVAL_VERSION}/kubeval-linux-amd64.tar.gz /tmp
RUN tar -zxvf /tmp/kubeval-linux-amd64.tar.gz -C /tmp && mv /tmp/kubeval kubeval

# conftest
ADD https://github.com/open-policy-agent/conftest/releases/download/v$CONFTEST_VERSION/conftest_${CONFTEST_VERSION}_Linux_x86_64.tar.gz /tmp
RUN tar -zxvf /tmp/conftest_${CONFTEST_VERSION}_Linux_x86_64.tar.gz -C /tmp && mv /tmp/conftest conftest

# konstraint
ADD https://github.com/plexsystems/konstraint/releases/download/v${KONSTRAINT_VERSION}/konstraint-linux-amd64 /tmp
RUN mv /tmp/konstraint-linux-amd64 konstraint && chmod +x konstraint

# node
# https://github.com/nodesource/distributions
RUN set -uex && \
  mkdir -p /etc/apt/keyrings && \
  curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg && \
  NODE_MAJOR=${NODE_VERSION} && \
  echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" > /etc/apt/sources.list.d/nodesource.list && \
  apt-get update && \
  apt-get install nodejs -y && \
  npm install -g ajv-cli@v3.3.0 json-dereference-cli@0.1.2 zx

RUN chown -R app:app /home/app
USER app

CMD "/bin/bash"
