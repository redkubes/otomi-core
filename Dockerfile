FROM node:14-slim as npm

ENV APP_HOME=/home/app/stack
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ARG SKIP_TESTS='false'
ENV CI=true

COPY . .
COPY ./.cspell.json .

RUN if [ "$SKIP_TESTS" = 'false' ]; then \
  npm install cspell && npm run spellcheck; fi

#-----------------------------
FROM otomi/tools:1.4.12 as test

ENV APP_HOME=/home/app/stack
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ARG SKIP_TESTS='false'
ENV CI=true

COPY . .

RUN if [ "$SKIP_TESTS" = 'false' ]; then \
  cp -r .demo/ env/ && \
  bin/validate-values.sh && \
  bin/validate-templates.sh && \
  bats bin/tests; fi

#-----------------------------
FROM otomi/tools:1.4.12 as prod

ENV APP_HOME=/home/app/stack
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY . .

CMD ["bin/otomi"]