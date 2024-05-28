FROM otomi/tools:v2.0.0 as ci

ENV APP_HOME=/home/app/stack

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

ARG SKIP_TESTS='false'
ENV NODE_ENV='test'
ENV CI=true
ENV ENV_DIR=$APP_HOME/env
ENV VERBOSITY='2'
ENV DISABLE_SYNC='1'
ENV NODE_PATH='dist'

COPY --chown=app . .

RUN npm config set update-notifier false
RUN npm ci --ignore-scripts && npm run compile

RUN if [ "$SKIP_TESTS" = 'false' ]; then ln -s $APP_HOME/tests/fixtures env && npm test && rm env; fi

# --------------- Cleanup
FROM ci as clean

# below command removes the packages specified in devDependencies and set NODE_ENV to production
RUN npm prune --production

#-----------------------------
FROM otomi/tools:v2.0.0 as prod

ENV APP_HOME=/home/app/stack
ENV ENV_DIR=/home/app/stack/env
ENV VERBOSITY='0'
ENV NODE_NO_WARNINGS='1'
ENV NODE_PATH='dist'

RUN npm config set update-notifier false

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY --from=ci /home/app/stack/dist /home/app/stack/dist
COPY --from=clean /home/app/stack/node_modules /home/app/stack/node_modules
COPY --chown=app . .

CMD ["dist/src/otomi.js"]