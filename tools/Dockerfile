FROM ubuntu:18.04

ARG DEBIAN_FRONTEND=noninteractive

# https://github.com/kubernetes/kubernetes/releases
ARG KUBECTL_VERSION=v1.19.4
# https://github.com/helm/helm/tags
ARG HELM_VERSION=v3.4.1
# https://github.com/databus23/helm-diff/releases
ARG HELM_DIFF_VERSION=v3.1.3
# https://github.com/zendesk/helm-secrets/releases
ARG HELM_SECRETS_VERSION=v2.0.2
# https://github.com/mozilla/sops/releases
ARG SOPS_VERSION=v3.6.1
ARG HELMFILE_VERSION=v0.128.1
# https://github.com/instrumenta/kubeval/releases
ARG KUBEVAL_VERSION=0.15.0

ARG HELM_FILE_NAME=helm-${HELM_VERSION}-linux-amd64.tar.gz

# https://github.com/ztombol/bats-assert/releases https://github.com/ztombol/bats-support
ARG BATS_VERSION=1.2.1
ARG BATS_ASSERT_VERSION=0.3.0
ARG BATS_SUPPORT_VERSION=0.3.0
ARG BATS_FILE_VERSION=0.2.0

WORKDIR /

RUN apt-get update -qq \
  && apt install -qqy --no-install-recommends \
  apt-transport-https \
  ca-certificates \
  curl \
  coreutils \
  gettext \
  git \
  gnupg2 \
  netcat \
  openssh-server \
  rlwrap \
  vim \
  nano \
  groff \
  awscli \
  && rm -rf /var/lib/apt/lists/*

RUN curl -L https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 --output /usr/bin/jq && \
    echo 'af986793a515d500ab2d35f8d2aecd656e764504b789b66d7e1a0b727a124c44  /usr/bin/jq' | sha256sum -c && \
    chmod +x /usr/bin/jq

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
ADD https://storage.googleapis.com/kubernetes-release/release/${KUBECTL_VERSION}/bin/linux/amd64/kubectl kubectl
RUN chmod +x kubectl

# aws-iam-authenticator
ADD https://amazon-eks.s3-us-west-2.amazonaws.com/1.12.7/2019-03-27/bin/linux/amd64/aws-iam-authenticator aws-iam-authenticator
RUN chmod +x aws-iam-authenticator

# sops
ADD https://github.com/mozilla/sops/releases/download/${SOPS_VERSION}/sops-${SOPS_VERSION}.linux sops
RUN chmod +x sops

# helm
ADD https://get.helm.sh/${HELM_FILE_NAME} /tmp
RUN tar -zxvf /tmp/${HELM_FILE_NAME} -C /tmp && mv /tmp/linux-amd64/helm helm && rm -rf /tmp/*
RUN helm plugin install https://github.com/databus23/helm-diff --version ${HELM_DIFF_VERSION}
RUN echo "exec $*" > /usr/bin/sudo && chmod +x /usr/bin/sudo
RUN helm plugin install https://github.com/futuresimple/helm-secrets --version ${HELM_SECRETS_VERSION}

# helmfile
ADD https://github.com/roboll/helmfile/releases/download/${HELMFILE_VERSION}/helmfile_linux_amd64 helmfile
RUN chmod +x helmfile

# kubeval https://github.com/instrumenta/kubeval/releases/download/0.15.0/kubeval-linux-amd64.tar.gz
ADD https://github.com/instrumenta/kubeval/releases/download/${KUBEVAL_VERSION}/kubeval-linux-amd64.tar.gz /tmp
RUN tar -zxvf /tmp/kubeval-linux-amd64.tar.gz -C /tmp && mv /tmp/kubeval kubeval

# node 12 https://github.com/nodesource/distributions/blob/master/README.md
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs && \
  npm install -g ajv-cli

# bats
ADD https://codeload.github.com/bats-core/bats-core/tar.gz/v${BATS_VERSION} /tmp
RUN tar -zxvf /tmp/v${BATS_VERSION} -C /tmp && /tmp/bats-core-${BATS_VERSION}/install.sh /usr/local

# bats libs
ADD https://codeload.github.com/ztombol/bats-assert/tar.gz/v${BATS_ASSERT_VERSION} /tmp
RUN tar -zxvf /tmp/v${BATS_ASSERT_VERSION} -C /tmp && mv /tmp/bats-assert-${BATS_ASSERT_VERSION} /usr/local/lib/bats-assert

ADD https://codeload.github.com/ztombol/bats-support/tar.gz/v${BATS_SUPPORT_VERSION} /tmp
RUN tar -zxvf /tmp/v${BATS_SUPPORT_VERSION} -C /tmp && mv /tmp/bats-support-${BATS_SUPPORT_VERSION} /usr/local/lib/bats-support

ADD https://codeload.github.com/ztombol/bats-file/tar.gz/v${BATS_FILE_VERSION} /tmp
RUN tar -zxvf /tmp/v${BATS_FILE_VERSION} -C /tmp && mv /tmp/bats-file-${BATS_FILE_VERSION} /usr/local/lib/bats-file

RUN chown -R app:app /home/app
USER app

CMD "/bin/bash"
