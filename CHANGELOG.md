# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.2](https://github.com/redkubes/otomi-core/compare/v0.26.0...v1.0.2) (2023-10-12)


### Features

* add customised ingress for harbor ([#1265](https://github.com/redkubes/otomi-core/issues/1265)) ([1a85c23](https://github.com/redkubes/otomi-core/commit/1a85c234ccb4498e2ab8f12a9e78107df7caebc4))
* add support for k8s 1.27 ([#1305](https://github.com/redkubes/otomi-core/issues/1305)) ([16ffbbc](https://github.com/redkubes/otomi-core/commit/16ffbbc34b3f40ccbfa5ff32c2283d0d7c9aca50))
* added less to the tty console ([#1296](https://github.com/redkubes/otomi-core/issues/1296)) ([c4186f6](https://github.com/redkubes/otomi-core/commit/c4186f6275daacffead238e191ea5e8394d5dbde))
* auto image updater ([#1236](https://github.com/redkubes/otomi-core/issues/1236)) ([73e086d](https://github.com/redkubes/otomi-core/commit/73e086dd90156935e46c7ffa78ce97ea53d082fb))
* keycloak upgrade ([#1280](https://github.com/redkubes/otomi-core/issues/1280)) ([e9994d7](https://github.com/redkubes/otomi-core/commit/e9994d7bd9f377c646d515299de894d0502f9533))
* load database configurations ([#1270](https://github.com/redkubes/otomi-core/issues/1270)) ([cd73f9c](https://github.com/redkubes/otomi-core/commit/cd73f9cbbd829d79bb6a23b3c416b89664253b57))
* oidc gitea team groups mapping ([#1275](https://github.com/redkubes/otomi-core/issues/1275)) ([c1aed40](https://github.com/redkubes/otomi-core/commit/c1aed405a5a938307c4310de4fac850ae51d6c9c))
* prometheus with its own host ([#1273](https://github.com/redkubes/otomi-core/issues/1273)) ([b160f5f](https://github.com/redkubes/otomi-core/commit/b160f5f53da441881f6ef41dd9e5b3e10bf5b2fb))
* set holdApplicationUntilProxyStarts flag in Istio ([#1308](https://github.com/redkubes/otomi-core/issues/1308)) ([c5e0f85](https://github.com/redkubes/otomi-core/commit/c5e0f858f38075bf26d9c04335507ac5295c2d70))
* set ndots for gitea dns pod config ([#1264](https://github.com/redkubes/otomi-core/issues/1264)) ([40cd95e](https://github.com/redkubes/otomi-core/commit/40cd95ec05c5c42f5400a9c8a2db23483de34d89))
* set otomi chart verion 1.0 ([6054839](https://github.com/redkubes/otomi-core/commit/60548394c254a416b109f5617d39c7a81eb62b0c))
* Tekton dasboard for platform admins and teams ([#1279](https://github.com/redkubes/otomi-core/issues/1279)) ([8466326](https://github.com/redkubes/otomi-core/commit/84663266defdb32bc9981416544ba3394f7cb0c7))
* tekton triggers ([#1276](https://github.com/redkubes/otomi-core/issues/1276)) ([4a4a32c](https://github.com/redkubes/otomi-core/commit/4a4a32cdc51979c610492a1926d6b5b64de11b2d))
* tracing across platform with OpenTelemetry and Grafana Tempo ([#1229](https://github.com/redkubes/otomi-core/issues/1229)) ([5eae206](https://github.com/redkubes/otomi-core/commit/5eae20637afdbcfad2da687c519eabfcfa077139))
* uninstall admission controllers ([#1268](https://github.com/redkubes/otomi-core/issues/1268)) ([1f262c5](https://github.com/redkubes/otomi-core/commit/1f262c52f58a11573412730031baa57f8fb72a86))
* use ec2 role for loki s3 access ([#1282](https://github.com/redkubes/otomi-core/issues/1282)) ([31e41bc](https://github.com/redkubes/otomi-core/commit/31e41bc07f7e296e7e7df0a947338ea114c04eb3))


### Bug Fixes

* add pull secret to Tekton build ([#1267](https://github.com/redkubes/otomi-core/issues/1267)) ([47038f6](https://github.com/redkubes/otomi-core/commit/47038f6adad0619833e444097938c6c4b08d343d))
* deployment order for Tekton trigger app ([#1292](https://github.com/redkubes/otomi-core/issues/1292)) ([8e81c82](https://github.com/redkubes/otomi-core/commit/8e81c826dbde6e67d53d836d4fc6893b3698c95b))
* enhance OTEL app dependencies ([#1291](https://github.com/redkubes/otomi-core/issues/1291)) ([d8e974d](https://github.com/redkubes/otomi-core/commit/d8e974df2db7237553ece22c2fdbd9ccdaba57b1))
* harbor admin password ([#1285](https://github.com/redkubes/otomi-core/issues/1285)) ([c73e31b](https://github.com/redkubes/otomi-core/commit/c73e31b0513f49b7c5ddc1fd16317ae62dfc1212))
* hardcoded yq package version ([#1297](https://github.com/redkubes/otomi-core/issues/1297)) ([2f53784](https://github.com/redkubes/otomi-core/commit/2f537845186e58b0d555a9a6907349573ff5d24b))
* otomi-api credentials to access the values repo ([#1288](https://github.com/redkubes/otomi-core/issues/1288)) ([7188122](https://github.com/redkubes/otomi-core/commit/718812212c12d2014d305a4d73974fafe5b8306a))
* readme for 26.0 [ci skip] ([d2fd6bb](https://github.com/redkubes/otomi-core/commit/d2fd6bb8da89bd93cb3ac58a3194f6e254665431))
* trace2logs query ([#1303](https://github.com/redkubes/otomi-core/issues/1303)) ([1dd0a71](https://github.com/redkubes/otomi-core/commit/1dd0a71cb8c10802f962fd67eea6d8454820a805))
* update strategy in appset ([#1302](https://github.com/redkubes/otomi-core/issues/1302)) ([9100cea](https://github.com/redkubes/otomi-core/commit/9100ceaaf932769b8bcf664d7b9006f941d7c7b8))
* upgrade legacy datasource query ([#1281](https://github.com/redkubes/otomi-core/issues/1281)) ([7a3f7a1](https://github.com/redkubes/otomi-core/commit/7a3f7a1d0139e51fdfdc2a39e562787aedff955c))
* wrong uid ([#1301](https://github.com/redkubes/otomi-core/issues/1301)) ([6b8ccc2](https://github.com/redkubes/otomi-core/commit/6b8ccc25128972351a0eecb3d3fb3c432d06af4d))


### Others

* add opentelemetry-operator and tempo-distributed community charts  ([#1274](https://github.com/redkubes/otomi-core/issues/1274)) ([676f221](https://github.com/redkubes/otomi-core/commit/676f221d3fba445e2f9a8c227e2e2907176f3884))
* issue template for supporting new kubenetes version ([#1287](https://github.com/redkubes/otomi-core/issues/1287)) ([5e6c544](https://github.com/redkubes/otomi-core/commit/5e6c544d8f176190bc8d8c81247b5a90f2e7c837))
* release branch [ci skip] ([16e43a1](https://github.com/redkubes/otomi-core/commit/16e43a1392feb7ff3f54a9fb0495900cc60c8765))
* **release:** 0.26.0 ([5e944e8](https://github.com/redkubes/otomi-core/commit/5e944e82578716475cd3292962e52c535b7b42fd))
* **release:** 1.0.1 ([b087a06](https://github.com/redkubes/otomi-core/commit/b087a06a036a6a6f422e66301c0ef8756cfd2f9c))
* set versions ([#1309](https://github.com/redkubes/otomi-core/issues/1309)) ([c3682fb](https://github.com/redkubes/otomi-core/commit/c3682fb8a2bdcd0be4fc87ca503922ff8a44148c))
* update helm and kubectl [TOOLS][MINOR] ([#1300](https://github.com/redkubes/otomi-core/issues/1300)) ([05c0326](https://github.com/redkubes/otomi-core/commit/05c0326f7beea9129090bc064ff25a8a9b553f5f))
* versions ([c295675](https://github.com/redkubes/otomi-core/commit/c2956751f70e1d8089db887e13818bff0e78ee94))
* versions ([19fbb4b](https://github.com/redkubes/otomi-core/commit/19fbb4be305ee0448e6574701f0d2ecc6ec92814))

### [1.0.1](https://github.com/redkubes/otomi-core/compare/v0.26.0...v1.0.1) (2023-10-12)


### Features

* add customised ingress for harbor ([#1265](https://github.com/redkubes/otomi-core/issues/1265)) ([1a85c23](https://github.com/redkubes/otomi-core/commit/1a85c234ccb4498e2ab8f12a9e78107df7caebc4))
* add support for k8s 1.27 ([#1305](https://github.com/redkubes/otomi-core/issues/1305)) ([16ffbbc](https://github.com/redkubes/otomi-core/commit/16ffbbc34b3f40ccbfa5ff32c2283d0d7c9aca50))
* added less to the tty console ([#1296](https://github.com/redkubes/otomi-core/issues/1296)) ([c4186f6](https://github.com/redkubes/otomi-core/commit/c4186f6275daacffead238e191ea5e8394d5dbde))
* auto image updater ([#1236](https://github.com/redkubes/otomi-core/issues/1236)) ([73e086d](https://github.com/redkubes/otomi-core/commit/73e086dd90156935e46c7ffa78ce97ea53d082fb))
* keycloak upgrade ([#1280](https://github.com/redkubes/otomi-core/issues/1280)) ([e9994d7](https://github.com/redkubes/otomi-core/commit/e9994d7bd9f377c646d515299de894d0502f9533))
* load database configurations ([#1270](https://github.com/redkubes/otomi-core/issues/1270)) ([cd73f9c](https://github.com/redkubes/otomi-core/commit/cd73f9cbbd829d79bb6a23b3c416b89664253b57))
* oidc gitea team groups mapping ([#1275](https://github.com/redkubes/otomi-core/issues/1275)) ([c1aed40](https://github.com/redkubes/otomi-core/commit/c1aed405a5a938307c4310de4fac850ae51d6c9c))
* prometheus with its own host ([#1273](https://github.com/redkubes/otomi-core/issues/1273)) ([b160f5f](https://github.com/redkubes/otomi-core/commit/b160f5f53da441881f6ef41dd9e5b3e10bf5b2fb))
* set holdApplicationUntilProxyStarts flag in Istio ([#1308](https://github.com/redkubes/otomi-core/issues/1308)) ([c5e0f85](https://github.com/redkubes/otomi-core/commit/c5e0f858f38075bf26d9c04335507ac5295c2d70))
* set ndots for gitea dns pod config ([#1264](https://github.com/redkubes/otomi-core/issues/1264)) ([40cd95e](https://github.com/redkubes/otomi-core/commit/40cd95ec05c5c42f5400a9c8a2db23483de34d89))
* Tekton dasboard for platform admins and teams ([#1279](https://github.com/redkubes/otomi-core/issues/1279)) ([8466326](https://github.com/redkubes/otomi-core/commit/84663266defdb32bc9981416544ba3394f7cb0c7))
* tekton triggers ([#1276](https://github.com/redkubes/otomi-core/issues/1276)) ([4a4a32c](https://github.com/redkubes/otomi-core/commit/4a4a32cdc51979c610492a1926d6b5b64de11b2d))
* tracing across platform with OpenTelemetry and Grafana Tempo ([#1229](https://github.com/redkubes/otomi-core/issues/1229)) ([5eae206](https://github.com/redkubes/otomi-core/commit/5eae20637afdbcfad2da687c519eabfcfa077139))
* uninstall admission controllers ([#1268](https://github.com/redkubes/otomi-core/issues/1268)) ([1f262c5](https://github.com/redkubes/otomi-core/commit/1f262c52f58a11573412730031baa57f8fb72a86))
* use ec2 role for loki s3 access ([#1282](https://github.com/redkubes/otomi-core/issues/1282)) ([31e41bc](https://github.com/redkubes/otomi-core/commit/31e41bc07f7e296e7e7df0a947338ea114c04eb3))


### Bug Fixes

* add pull secret to Tekton build ([#1267](https://github.com/redkubes/otomi-core/issues/1267)) ([47038f6](https://github.com/redkubes/otomi-core/commit/47038f6adad0619833e444097938c6c4b08d343d))
* deployment order for Tekton trigger app ([#1292](https://github.com/redkubes/otomi-core/issues/1292)) ([8e81c82](https://github.com/redkubes/otomi-core/commit/8e81c826dbde6e67d53d836d4fc6893b3698c95b))
* enhance OTEL app dependencies ([#1291](https://github.com/redkubes/otomi-core/issues/1291)) ([d8e974d](https://github.com/redkubes/otomi-core/commit/d8e974df2db7237553ece22c2fdbd9ccdaba57b1))
* harbor admin password ([#1285](https://github.com/redkubes/otomi-core/issues/1285)) ([c73e31b](https://github.com/redkubes/otomi-core/commit/c73e31b0513f49b7c5ddc1fd16317ae62dfc1212))
* hardcoded yq package version ([#1297](https://github.com/redkubes/otomi-core/issues/1297)) ([2f53784](https://github.com/redkubes/otomi-core/commit/2f537845186e58b0d555a9a6907349573ff5d24b))
* otomi-api credentials to access the values repo ([#1288](https://github.com/redkubes/otomi-core/issues/1288)) ([7188122](https://github.com/redkubes/otomi-core/commit/718812212c12d2014d305a4d73974fafe5b8306a))
* readme for 26.0 [ci skip] ([d2fd6bb](https://github.com/redkubes/otomi-core/commit/d2fd6bb8da89bd93cb3ac58a3194f6e254665431))
* trace2logs query ([#1303](https://github.com/redkubes/otomi-core/issues/1303)) ([1dd0a71](https://github.com/redkubes/otomi-core/commit/1dd0a71cb8c10802f962fd67eea6d8454820a805))
* update strategy in appset ([#1302](https://github.com/redkubes/otomi-core/issues/1302)) ([9100cea](https://github.com/redkubes/otomi-core/commit/9100ceaaf932769b8bcf664d7b9006f941d7c7b8))
* upgrade legacy datasource query ([#1281](https://github.com/redkubes/otomi-core/issues/1281)) ([7a3f7a1](https://github.com/redkubes/otomi-core/commit/7a3f7a1d0139e51fdfdc2a39e562787aedff955c))
* wrong uid ([#1301](https://github.com/redkubes/otomi-core/issues/1301)) ([6b8ccc2](https://github.com/redkubes/otomi-core/commit/6b8ccc25128972351a0eecb3d3fb3c432d06af4d))


### Others

* add opentelemetry-operator and tempo-distributed community charts  ([#1274](https://github.com/redkubes/otomi-core/issues/1274)) ([676f221](https://github.com/redkubes/otomi-core/commit/676f221d3fba445e2f9a8c227e2e2907176f3884))
* issue template for supporting new kubenetes version ([#1287](https://github.com/redkubes/otomi-core/issues/1287)) ([5e6c544](https://github.com/redkubes/otomi-core/commit/5e6c544d8f176190bc8d8c81247b5a90f2e7c837))
* release branch [ci skip] ([16e43a1](https://github.com/redkubes/otomi-core/commit/16e43a1392feb7ff3f54a9fb0495900cc60c8765))
* **release:** 0.26.0 ([5e944e8](https://github.com/redkubes/otomi-core/commit/5e944e82578716475cd3292962e52c535b7b42fd))
* set versions ([#1309](https://github.com/redkubes/otomi-core/issues/1309)) ([c3682fb](https://github.com/redkubes/otomi-core/commit/c3682fb8a2bdcd0be4fc87ca503922ff8a44148c))
* update helm and kubectl [TOOLS][MINOR] ([#1300](https://github.com/redkubes/otomi-core/issues/1300)) ([05c0326](https://github.com/redkubes/otomi-core/commit/05c0326f7beea9129090bc064ff25a8a9b553f5f))
* versions ([c295675](https://github.com/redkubes/otomi-core/commit/c2956751f70e1d8089db887e13818bff0e78ee94))
* versions ([19fbb4b](https://github.com/redkubes/otomi-core/commit/19fbb4be305ee0448e6574701f0d2ecc6ec92814))

## [1.0.0](https://github.com/redkubes/otomi-core/compare/v0.26.0...v1.0.0) (2023-10-05)


### Features

* add customised ingress for harbor ([#1265](https://github.com/redkubes/otomi-core/issues/1265)) ([1a85c23](https://github.com/redkubes/otomi-core/commit/1a85c234ccb4498e2ab8f12a9e78107df7caebc4))
* add support for k8s 1.27 ([#1305](https://github.com/redkubes/otomi-core/issues/1305)) ([16ffbbc](https://github.com/redkubes/otomi-core/commit/16ffbbc34b3f40ccbfa5ff32c2283d0d7c9aca50))
* added less to the tty console ([#1296](https://github.com/redkubes/otomi-core/issues/1296)) ([c4186f6](https://github.com/redkubes/otomi-core/commit/c4186f6275daacffead238e191ea5e8394d5dbde))
* auto image updater ([#1236](https://github.com/redkubes/otomi-core/issues/1236)) ([73e086d](https://github.com/redkubes/otomi-core/commit/73e086dd90156935e46c7ffa78ce97ea53d082fb))
* keycloak upgrade ([#1280](https://github.com/redkubes/otomi-core/issues/1280)) ([e9994d7](https://github.com/redkubes/otomi-core/commit/e9994d7bd9f377c646d515299de894d0502f9533))
* load database configurations ([#1270](https://github.com/redkubes/otomi-core/issues/1270)) ([cd73f9c](https://github.com/redkubes/otomi-core/commit/cd73f9cbbd829d79bb6a23b3c416b89664253b57))
* oidc gitea team groups mapping ([#1275](https://github.com/redkubes/otomi-core/issues/1275)) ([c1aed40](https://github.com/redkubes/otomi-core/commit/c1aed405a5a938307c4310de4fac850ae51d6c9c))
* prometheus with its own host ([#1273](https://github.com/redkubes/otomi-core/issues/1273)) ([b160f5f](https://github.com/redkubes/otomi-core/commit/b160f5f53da441881f6ef41dd9e5b3e10bf5b2fb))
* set holdApplicationUntilProxyStarts flag in Istio ([#1308](https://github.com/redkubes/otomi-core/issues/1308)) ([c5e0f85](https://github.com/redkubes/otomi-core/commit/c5e0f858f38075bf26d9c04335507ac5295c2d70))
* set ndots for gitea dns pod config ([#1264](https://github.com/redkubes/otomi-core/issues/1264)) ([40cd95e](https://github.com/redkubes/otomi-core/commit/40cd95ec05c5c42f5400a9c8a2db23483de34d89))
* Tekton dasboard for platform admins and teams ([#1279](https://github.com/redkubes/otomi-core/issues/1279)) ([8466326](https://github.com/redkubes/otomi-core/commit/84663266defdb32bc9981416544ba3394f7cb0c7))
* tekton triggers ([#1276](https://github.com/redkubes/otomi-core/issues/1276)) ([4a4a32c](https://github.com/redkubes/otomi-core/commit/4a4a32cdc51979c610492a1926d6b5b64de11b2d))
* tracing across platform with OpenTelemetry and Grafana Tempo ([#1229](https://github.com/redkubes/otomi-core/issues/1229)) ([5eae206](https://github.com/redkubes/otomi-core/commit/5eae20637afdbcfad2da687c519eabfcfa077139))
* uninstall admission controllers ([#1268](https://github.com/redkubes/otomi-core/issues/1268)) ([1f262c5](https://github.com/redkubes/otomi-core/commit/1f262c52f58a11573412730031baa57f8fb72a86))
* use ec2 role for loki s3 access ([#1282](https://github.com/redkubes/otomi-core/issues/1282)) ([31e41bc](https://github.com/redkubes/otomi-core/commit/31e41bc07f7e296e7e7df0a947338ea114c04eb3))


### Bug Fixes

* add pull secret to Tekton build ([#1267](https://github.com/redkubes/otomi-core/issues/1267)) ([47038f6](https://github.com/redkubes/otomi-core/commit/47038f6adad0619833e444097938c6c4b08d343d))
* deployment order for Tekton trigger app ([#1292](https://github.com/redkubes/otomi-core/issues/1292)) ([8e81c82](https://github.com/redkubes/otomi-core/commit/8e81c826dbde6e67d53d836d4fc6893b3698c95b))
* enhance OTEL app dependencies ([#1291](https://github.com/redkubes/otomi-core/issues/1291)) ([d8e974d](https://github.com/redkubes/otomi-core/commit/d8e974df2db7237553ece22c2fdbd9ccdaba57b1))
* harbor admin password ([#1285](https://github.com/redkubes/otomi-core/issues/1285)) ([c73e31b](https://github.com/redkubes/otomi-core/commit/c73e31b0513f49b7c5ddc1fd16317ae62dfc1212))
* hardcoded yq package version ([#1297](https://github.com/redkubes/otomi-core/issues/1297)) ([2f53784](https://github.com/redkubes/otomi-core/commit/2f537845186e58b0d555a9a6907349573ff5d24b))
* otomi-api credentials to access the values repo ([#1288](https://github.com/redkubes/otomi-core/issues/1288)) ([7188122](https://github.com/redkubes/otomi-core/commit/718812212c12d2014d305a4d73974fafe5b8306a))
* readme for 26.0 [ci skip] ([d2fd6bb](https://github.com/redkubes/otomi-core/commit/d2fd6bb8da89bd93cb3ac58a3194f6e254665431))
* trace2logs query ([#1303](https://github.com/redkubes/otomi-core/issues/1303)) ([1dd0a71](https://github.com/redkubes/otomi-core/commit/1dd0a71cb8c10802f962fd67eea6d8454820a805))
* update strategy in appset ([#1302](https://github.com/redkubes/otomi-core/issues/1302)) ([9100cea](https://github.com/redkubes/otomi-core/commit/9100ceaaf932769b8bcf664d7b9006f941d7c7b8))
* upgrade legacy datasource query ([#1281](https://github.com/redkubes/otomi-core/issues/1281)) ([7a3f7a1](https://github.com/redkubes/otomi-core/commit/7a3f7a1d0139e51fdfdc2a39e562787aedff955c))
* wrong uid ([#1301](https://github.com/redkubes/otomi-core/issues/1301)) ([6b8ccc2](https://github.com/redkubes/otomi-core/commit/6b8ccc25128972351a0eecb3d3fb3c432d06af4d))


### Others

* add opentelemetry-operator and tempo-distributed community charts  ([#1274](https://github.com/redkubes/otomi-core/issues/1274)) ([676f221](https://github.com/redkubes/otomi-core/commit/676f221d3fba445e2f9a8c227e2e2907176f3884))
* issue template for supporting new kubenetes version ([#1287](https://github.com/redkubes/otomi-core/issues/1287)) ([5e6c544](https://github.com/redkubes/otomi-core/commit/5e6c544d8f176190bc8d8c81247b5a90f2e7c837))
* **release:** 0.26.0 ([5e944e8](https://github.com/redkubes/otomi-core/commit/5e944e82578716475cd3292962e52c535b7b42fd))
* set versions ([#1309](https://github.com/redkubes/otomi-core/issues/1309)) ([c3682fb](https://github.com/redkubes/otomi-core/commit/c3682fb8a2bdcd0be4fc87ca503922ff8a44148c))
* update helm and kubectl [TOOLS][MINOR] ([#1300](https://github.com/redkubes/otomi-core/issues/1300)) ([05c0326](https://github.com/redkubes/otomi-core/commit/05c0326f7beea9129090bc064ff25a8a9b553f5f))
* versions ([c295675](https://github.com/redkubes/otomi-core/commit/c2956751f70e1d8089db887e13818bff0e78ee94))
* versions ([19fbb4b](https://github.com/redkubes/otomi-core/commit/19fbb4be305ee0448e6574701f0d2ecc6ec92814))

## [0.26.0](https://github.com/redkubes/otomi-core/compare/v0.25.0...v0.26.0) (2023-09-05)


### Features

* added build and push pipeline for otomi-tools ([#1255](https://github.com/redkubes/otomi-core/issues/1255)) ([d430b82](https://github.com/redkubes/otomi-core/commit/d430b82cacac20a9a207fef9889a510e1234e4d6))
* adding CNAME support ([#1235](https://github.com/redkubes/otomi-core/issues/1235)) ([da20036](https://github.com/redkubes/otomi-core/commit/da20036729e681fd2522cb2270f5721693243c08))
* adjust loki wal backpressure ([#1240](https://github.com/redkubes/otomi-core/issues/1240)) ([e9ce3ae](https://github.com/redkubes/otomi-core/commit/e9ce3ae144cc091b3a65a771bf3ca9f264a1e937))
* scw auto remove clusters on dev ([#1247](https://github.com/redkubes/otomi-core/issues/1247)) ([4b787a4](https://github.com/redkubes/otomi-core/commit/4b787a4a9c57b762ce86df59f3d3faa3bdbb21c4))
* users do not have to provide k8sVersion anymore ([#1256](https://github.com/redkubes/otomi-core/issues/1256)) ([3eeae44](https://github.com/redkubes/otomi-core/commit/3eeae44fb8d191f8db8a7eecaa2403146c3eaa82))


### Bug Fixes

* fixed changelog generation ([#1250](https://github.com/redkubes/otomi-core/issues/1250)) ([b2644e6](https://github.com/redkubes/otomi-core/commit/b2644e6d5e0905568f5ed6e03dcae510fc94ee22))
* k8s 1.26 compatibility ([#1251](https://github.com/redkubes/otomi-core/issues/1251)) ([a9cffdf](https://github.com/redkubes/otomi-core/commit/a9cffdf176c083fc85fc5a94e3fead5f4b2f00b0))
* remove option for Gitea repo access for Builds ([#1239](https://github.com/redkubes/otomi-core/issues/1239)) ([4002208](https://github.com/redkubes/otomi-core/commit/4002208602dbcccd252abcf6d71f833343b78e38))
* team status dashboard ([#1262](https://github.com/redkubes/otomi-core/issues/1262)) ([8dcb483](https://github.com/redkubes/otomi-core/commit/8dcb48372a7208498abaa8b0d561c5472dd7e449))
* updated image tag for ghcr ([#1246](https://github.com/redkubes/otomi-core/issues/1246)) ([37ad1a1](https://github.com/redkubes/otomi-core/commit/37ad1a16704a9199c91f22f5d060a1f2a712d670))


### Tests

* add selfService flags to teams ([#1253](https://github.com/redkubes/otomi-core/issues/1253)) ([f37ed50](https://github.com/redkubes/otomi-core/commit/f37ed50e253c3e3920813bf999a3ec3111dc6c3c))
* enable more apps ([#1254](https://github.com/redkubes/otomi-core/issues/1254)) ([377a27a](https://github.com/redkubes/otomi-core/commit/377a27a55aadbba4fc459ba875c0392d04817042))
* upgrade test case ([#1242](https://github.com/redkubes/otomi-core/issues/1242)) ([4a297aa](https://github.com/redkubes/otomi-core/commit/4a297aa976155d819c2980d74315411a96744026))


### Others

* **release:** 0.26.0 ([6097aa6](https://github.com/redkubes/otomi-core/commit/6097aa602ac0d8bcf75679f77c11e86a1385d2bc))
* set versions ([bba35a4](https://github.com/redkubes/otomi-core/commit/bba35a4ea51391f0d594c99143fbef470987a8a1))

## [0.26.0](https://github.com/redkubes/otomi-core/compare/v0.25.0...v0.26.0) (2023-09-05)


### Features

* added build and push pipeline for otomi-tools ([#1255](https://github.com/redkubes/otomi-core/issues/1255)) ([d430b82](https://github.com/redkubes/otomi-core/commit/d430b82cacac20a9a207fef9889a510e1234e4d6))
* adding CNAME support ([#1235](https://github.com/redkubes/otomi-core/issues/1235)) ([da20036](https://github.com/redkubes/otomi-core/commit/da20036729e681fd2522cb2270f5721693243c08))
* adjust loki wal backpressure ([#1240](https://github.com/redkubes/otomi-core/issues/1240)) ([e9ce3ae](https://github.com/redkubes/otomi-core/commit/e9ce3ae144cc091b3a65a771bf3ca9f264a1e937))
* scw auto remove clusters on dev ([#1247](https://github.com/redkubes/otomi-core/issues/1247)) ([4b787a4](https://github.com/redkubes/otomi-core/commit/4b787a4a9c57b762ce86df59f3d3faa3bdbb21c4))
* users do not have to provide k8sVersion anymore ([#1256](https://github.com/redkubes/otomi-core/issues/1256)) ([3eeae44](https://github.com/redkubes/otomi-core/commit/3eeae44fb8d191f8db8a7eecaa2403146c3eaa82))


### Bug Fixes

* fixed changelog generation ([#1250](https://github.com/redkubes/otomi-core/issues/1250)) ([b2644e6](https://github.com/redkubes/otomi-core/commit/b2644e6d5e0905568f5ed6e03dcae510fc94ee22))
* k8s 1.26 compatibility ([#1251](https://github.com/redkubes/otomi-core/issues/1251)) ([a9cffdf](https://github.com/redkubes/otomi-core/commit/a9cffdf176c083fc85fc5a94e3fead5f4b2f00b0))
* remove option for Gitea repo access for Builds ([#1239](https://github.com/redkubes/otomi-core/issues/1239)) ([4002208](https://github.com/redkubes/otomi-core/commit/4002208602dbcccd252abcf6d71f833343b78e38))
* team status dashboard ([#1262](https://github.com/redkubes/otomi-core/issues/1262)) ([8dcb483](https://github.com/redkubes/otomi-core/commit/8dcb48372a7208498abaa8b0d561c5472dd7e449))
* updated image tag for ghcr ([#1246](https://github.com/redkubes/otomi-core/issues/1246)) ([37ad1a1](https://github.com/redkubes/otomi-core/commit/37ad1a16704a9199c91f22f5d060a1f2a712d670))


### Tests

* add selfService flags to teams ([#1253](https://github.com/redkubes/otomi-core/issues/1253)) ([f37ed50](https://github.com/redkubes/otomi-core/commit/f37ed50e253c3e3920813bf999a3ec3111dc6c3c))
* enable more apps ([#1254](https://github.com/redkubes/otomi-core/issues/1254)) ([377a27a](https://github.com/redkubes/otomi-core/commit/377a27a55aadbba4fc459ba875c0392d04817042))
* upgrade test case ([#1242](https://github.com/redkubes/otomi-core/issues/1242)) ([4a297aa](https://github.com/redkubes/otomi-core/commit/4a297aa976155d819c2980d74315411a96744026))


### Others

* set versions ([bba35a4](https://github.com/redkubes/otomi-core/commit/bba35a4ea51391f0d594c99143fbef470987a8a1))

## [0.25.0](https://github.com/redkubes/otomi-core/compare/v0.24.0...v0.25.0) (2023-08-21)


### ⚠ BREAKING CHANGES

* Since wildcard certificates are compatible with a single nested wildcard domain, we had to unify domain names in Otomi. 

The impact of this change is as follows: 
1) only single wildcard domain is supported '*.<domainSuffix>' 
2) all default public URLs for team services have been changed from <sname>.team-<team-name>.<domainSuffix> to <sname>-<team-name>.<domainSuffix>. 
3) Services that are using custom domians names and do not match (1) must obtain their own certificates.

### Features

* decouple keycloak database from the community Helm chart ([#1214](https://github.com/redkubes/otomi-core/issues/1214)) ([0c923cc](https://github.com/redkubes/otomi-core/commit/0c923cc21a4f529f4f22741d4a4998804da39d37))
* initialise databases at the very beginning ([#1224](https://github.com/redkubes/otomi-core/issues/1224)) ([76fda42](https://github.com/redkubes/otomi-core/commit/76fda422a70a8383f4a401ee858fc5385a168cea))
* support wildcard certificate ([#1226](https://github.com/redkubes/otomi-core/issues/1226)) ([9cacd43](https://github.com/redkubes/otomi-core/commit/9cacd43940b54421d0b4c106c8f140bda5cec40b))
* updated timezone for cluster-name generation ([#1208](https://github.com/redkubes/otomi-core/issues/1208)) ([792ee10](https://github.com/redkubes/otomi-core/commit/792ee102546adbf4dde630885bf5c799a05740f2))


### Bug Fixes

* drone-activation ([#1225](https://github.com/redkubes/otomi-core/issues/1225)) ([1bc9799](https://github.com/redkubes/otomi-core/commit/1bc97993539926eeab4d80c21af46afa4cd6c4f6))
* load license during otomi bootstrap ([#1228](https://github.com/redkubes/otomi-core/issues/1228)) ([ca111bc](https://github.com/redkubes/otomi-core/commit/ca111bc076fa404643be273b3e7e6061a01ec142))
* msteams receivers ([#1223](https://github.com/redkubes/otomi-core/issues/1223)) ([e0ea008](https://github.com/redkubes/otomi-core/commit/e0ea008e394cc0413af943e77e0a05a1fe40178e))


### Reverts

* Revert "chore: 0.25.0" ([acd6613](https://github.com/redkubes/otomi-core/commit/acd6613d3a8079ecc86a5c9eb7e509dc760737dd))
* Revert "chore: 0.26.0" ([807c361](https://github.com/redkubes/otomi-core/commit/807c3615afc7aca4690875a5ae63d9b66b377ae2))


### Tests

* add option to select production letsencrypt certificate ([#1227](https://github.com/redkubes/otomi-core/issues/1227)) ([a50ac57](https://github.com/redkubes/otomi-core/commit/a50ac5729a4e8a029596809f748134391a3dafcb))
* increase scw disk size ([#1232](https://github.com/redkubes/otomi-core/issues/1232)) ([71b07f4](https://github.com/redkubes/otomi-core/commit/71b07f46149f81b91b05e1627995cae618396ded))
* otomi upgrade test scenario ([#1221](https://github.com/redkubes/otomi-core/issues/1221)) ([563ed17](https://github.com/redkubes/otomi-core/commit/563ed174e24900a3f3b8878b0a565b1db1dc02c2))
* push release image to ghcr.io ([#1238](https://github.com/redkubes/otomi-core/issues/1238)) ([b65eca3](https://github.com/redkubes/otomi-core/commit/b65eca3d328ab2ba3461ac9f7d3dfbb79d3adec5))


### Others

* AWS Marketplace release automation ([#1216](https://github.com/redkubes/otomi-core/issues/1216)) ([7b5385b](https://github.com/redkubes/otomi-core/commit/7b5385b0cb1072d33ca2b4672825060f67c00c9a))
* **release:** 0.25.0 ([c790d17](https://github.com/redkubes/otomi-core/commit/c790d17de276d619828d011b80e1ba4472ebd1e8))
* **release:** 0.26.0 ([4d95c50](https://github.com/redkubes/otomi-core/commit/4d95c50cff8dc188bd2cafe5ee5c77e3cae00ba3))
* update deprecated actions ([#1234](https://github.com/redkubes/otomi-core/issues/1234)) ([305894a](https://github.com/redkubes/otomi-core/commit/305894a83a1cde4074b3fd87c06b1c77d52595c4))

## [0.24.0](https://github.com/redkubes/otomi-core/compare/v0.22.0-0...v0.24.0) (2023-08-03)


### Features

* add  the skip-cleanup argument while working in the development mode ([#1204](https://github.com/redkubes/otomi-core/issues/1204)) ([1a8c2da](https://github.com/redkubes/otomi-core/commit/1a8c2da7587c40dbc50cf293ed884b3b7d3bb55e))
* add authorization to the tty console ([#1202](https://github.com/redkubes/otomi-core/issues/1202)) ([a8c6930](https://github.com/redkubes/otomi-core/commit/a8c69307593b34ea71b711f864bf3ac3e62e3590))
* added helm to the tty console [MINOR] ([#1193](https://github.com/redkubes/otomi-core/issues/1193)) ([6466bbb](https://github.com/redkubes/otomi-core/commit/6466bbb23044cc3de7f7ee6a3a16a86862deea00))
* adjust loki defaults ([#1183](https://github.com/redkubes/otomi-core/issues/1183)) ([08fcdc4](https://github.com/redkubes/otomi-core/commit/08fcdc4fb73f38abae62ce2d99635331d66ccdda))
* drone activation and otomi version upgrade with cypress ([#1200](https://github.com/redkubes/otomi-core/issues/1200)) ([a2a622a](https://github.com/redkubes/otomi-core/commit/a2a622aa3c3ed83a133dec5c7815b5c93b969cac))
* enable use-proxy-protocol ([#1201](https://github.com/redkubes/otomi-core/issues/1201)) ([233a254](https://github.com/redkubes/otomi-core/commit/233a254ffe679a85edb297301975633600029e8f))
* external-dns upgrade ([#1178](https://github.com/redkubes/otomi-core/issues/1178)) ([c8d82e6](https://github.com/redkubes/otomi-core/commit/c8d82e62c147ea4b5e747df97c99bb3d7fce87dc))
* generate values with redacted secrets ([#1210](https://github.com/redkubes/otomi-core/issues/1210)) ([a2f39bc](https://github.com/redkubes/otomi-core/commit/a2f39bc87de03537fdbef9bef295e11eaf20c64d))
* nginx-ingress update ([#1176](https://github.com/redkubes/otomi-core/issues/1176)) ([8d5b922](https://github.com/redkubes/otomi-core/commit/8d5b922009aba3e173977e1b9b905760743ce6ca))
* update oauth2-proxy ([#1184](https://github.com/redkubes/otomi-core/issues/1184)) ([d0dea3e](https://github.com/redkubes/otomi-core/commit/d0dea3e9769c9efbffdca4713233c3b0ec49cc15))
* updated tty image [MAJOR] ([#1175](https://github.com/redkubes/otomi-core/issues/1175)) ([4cc4b8f](https://github.com/redkubes/otomi-core/commit/4cc4b8ff0d236a04afbe72108bcecf80f19f54ba))
* updating cluster name ([#1207](https://github.com/redkubes/otomi-core/issues/1207)) ([9ad9069](https://github.com/redkubes/otomi-core/commit/9ad906957ffa3567d52dd2e6cbffa2c91bd56680))
* upgrade cert-manager to 11.4 ([#1189](https://github.com/redkubes/otomi-core/issues/1189)) ([722bcbe](https://github.com/redkubes/otomi-core/commit/722bcbe5c911f22b29caf116b4480835483ee90e))
* upgrading istio-operator to 1.17.4 ([#1190](https://github.com/redkubes/otomi-core/issues/1190)) ([76107e6](https://github.com/redkubes/otomi-core/commit/76107e6895254d8e1a585cbf6f2ffe7f9588162a))


### Bug Fixes

* add missing k8s to knative mapping ([#1182](https://github.com/redkubes/otomi-core/issues/1182)) ([1351f43](https://github.com/redkubes/otomi-core/commit/1351f43edea6f7f30ebf2c2b23f35a339b8e8283))
* add missing migrations ([#1179](https://github.com/redkubes/otomi-core/issues/1179)) ([97f02ca](https://github.com/redkubes/otomi-core/commit/97f02cae93c9847cbd128fc4b3e812396629393d))
* added all apiGroups instead of only core ([#1191](https://github.com/redkubes/otomi-core/issues/1191)) ([6c21007](https://github.com/redkubes/otomi-core/commit/6c21007bc3d03cf2aca468b5b702b4b4839cf935))
* change back scheduled job time ([#1215](https://github.com/redkubes/otomi-core/issues/1215)) ([103450d](https://github.com/redkubes/otomi-core/commit/103450d787cc20f9574ca8cd4e3a5c875291c18a))
* changes spelling ([#1205](https://github.com/redkubes/otomi-core/issues/1205)) ([ab4221e](https://github.com/redkubes/otomi-core/commit/ab4221e67a69e6464cf40a79fb14ae3b1f3f5f6b))
* cron times changed for testing purposes ([#1211](https://github.com/redkubes/otomi-core/issues/1211)) ([c6ab05e](https://github.com/redkubes/otomi-core/commit/c6ab05e30b886d4ded3270a684377edb411077c0))
* cron times test 2 ([#1212](https://github.com/redkubes/otomi-core/issues/1212)) ([c0f1f5d](https://github.com/redkubes/otomi-core/commit/c0f1f5dc6d7f101f40ccffbcf4f788fd93dc768d))
* do not parse values as parameters for shell command ([#1192](https://github.com/redkubes/otomi-core/issues/1192)) ([7c586d3](https://github.com/redkubes/otomi-core/commit/7c586d36b31ebbae1039325dcf85f8b200cdba75))
* grafana dashboards ([#1203](https://github.com/redkubes/otomi-core/issues/1203)) ([2254b6d](https://github.com/redkubes/otomi-core/commit/2254b6dcea3a013ea4849ed98bdf2ed369372e90))
* improved tty pipeline  ([#1197](https://github.com/redkubes/otomi-core/issues/1197)) ([81a9d08](https://github.com/redkubes/otomi-core/commit/81a9d08d0f78a23958af9cb55fbf872349f93d60))
* readme [ci skip] ([1f72aef](https://github.com/redkubes/otomi-core/commit/1f72aefe11bc26f130b671d654b2d22a9566cc88))
* readme [ci skip] ([8ff1f26](https://github.com/redkubes/otomi-core/commit/8ff1f2691486f7253ab43d47fe0fc59c185ec7a3))
* scaleway default cloud provider ([#1209](https://github.com/redkubes/otomi-core/issues/1209)) ([7aa750d](https://github.com/redkubes/otomi-core/commit/7aa750d4d9ad284fc238d673d04f5942b03ad5bb))
* support Scaleway cloud provider ([#1188](https://github.com/redkubes/otomi-core/issues/1188)) ([f31d31e](https://github.com/redkubes/otomi-core/commit/f31d31e2295a39e2159c0d0dd413af942340e06a))
* thanos receive ingress path ([#1186](https://github.com/redkubes/otomi-core/issues/1186)) ([07f4b2c](https://github.com/redkubes/otomi-core/commit/07f4b2c9599e1ef6475ad5fb5fae9712e83111da))
* upgrade script for kube-prom stack ([#1173](https://github.com/redkubes/otomi-core/issues/1173)) ([32eee80](https://github.com/redkubes/otomi-core/commit/32eee806a66304b569093fbd1f0d06087860c89a))
* workflow remove cluster regions ([#1206](https://github.com/redkubes/otomi-core/issues/1206)) ([396eec3](https://github.com/redkubes/otomi-core/commit/396eec36ee4d84fa7915de46b3ff60092fa224d3))


### Tests

* do not set metrics-server ([#1219](https://github.com/redkubes/otomi-core/issues/1219)) ([18ea38a](https://github.com/redkubes/otomi-core/commit/18ea38a9f80edb1998db97a808d1fac3d73984e7))
* Github Actions to create Kubernetes cluster in Scaleway cloud provider ([#1196](https://github.com/redkubes/otomi-core/issues/1196)) ([e9eb4e5](https://github.com/redkubes/otomi-core/commit/e9eb4e50ff02e12ab7e3047efcced64edd2195ad))
* hourly run for only one ([#1213](https://github.com/redkubes/otomi-core/issues/1213)) ([5733c61](https://github.com/redkubes/otomi-core/commit/5733c61ca5538a802405a2adc9b50936148482c4))
* inject license ([#1199](https://github.com/redkubes/otomi-core/issues/1199)) ([ec5d257](https://github.com/redkubes/otomi-core/commit/ec5d2572ded54fd39e0154f9168c86df189bf513))
* scaleway setting ([#1198](https://github.com/redkubes/otomi-core/issues/1198)) ([16fe144](https://github.com/redkubes/otomi-core/commit/16fe1441b354304df7c6f37c11fe50a87d1ef623))


### Others

* add github issue template ([f561d87](https://github.com/redkubes/otomi-core/commit/f561d8715beb15f4a23c0b65f976282eb0f10903))
* allow to release from main ([7cd47d0](https://github.com/redkubes/otomi-core/commit/7cd47d033344383528b83060f5fe3ab07487c297))
* prepare for v0.23.0 ([#1187](https://github.com/redkubes/otomi-core/issues/1187)) ([2fcb0b6](https://github.com/redkubes/otomi-core/commit/2fcb0b61d47873f598ed306b0d9e627ccfc3c90a))
* update GitHub template ([8dc21d1](https://github.com/redkubes/otomi-core/commit/8dc21d17cd4bf53ce1cba7d8c050a02a004d6d4a))
* user story ([e1558d4](https://github.com/redkubes/otomi-core/commit/e1558d471a085a11ac9f7cf20b5a7deb993a58cc))
* version update ([e1428cd](https://github.com/redkubes/otomi-core/commit/e1428cd3a5f1e9775f68d25fb5205db83a9dda7b))

### [0.18.1](https://github.com/redkubes/otomi-core/compare/v0.18.0...v0.18.1) (2023-02-07)


### Features

* Falcosidekick UI ([#1021](https://github.com/redkubes/otomi-core/issues/1021)) ([373ab03](https://github.com/redkubes/otomi-core/commit/373ab0310574cbb6c1a8d3b850e0287851b37873))
* Falco for thread detection (new app) ([#999](https://github.com/redkubes/otomi-core/issues/999)) ([c2c3e3e](https://github.com/redkubes/otomi-core/commit/c2c3e3eaa2a59fc0e778be26c520bc55adfb00ef)), closes [#1001](https://github.com/redkubes/otomi-core/issues/1001)
* Kiali configurable resources ([#1014](https://github.com/redkubes/otomi-core/issues/1014)) ([8c14d45](https://github.com/redkubes/otomi-core/commit/8c14d459db6ef9020dc30643899ec0c886fd3f08))
* OLM upgrade ([#993](https://github.com/redkubes/otomi-core/issues/993)) ([8e30c72](https://github.com/redkubes/otomi-core/commit/8e30c72e7c6001fedef9222c546bc632573e2ea3))
* Velero independent cloud and storage configuration ([#971](https://github.com/redkubes/otomi-core/issues/971)) ([43e938e](https://github.com/redkubes/otomi-core/commit/43e938e972faa4c44b81108332d087b55dfbfa92))
* Thanos for multi cluster monitoring (new app) ([#996](https://github.com/redkubes/otomi-core/issues/996)) ([27665cb](https://github.com/redkubes/otomi-core/commit/27665cb654cda3c6415556874a03144c9f919f57))


### Bug Fixes

* certmanager secrets ([#1017](https://github.com/redkubes/otomi-core/issues/1017)) ([94863ed](https://github.com/redkubes/otomi-core/commit/94863ed9858485f4089536fcda5739e7ea189781))
* do not enable external-secrets by default ([#1008](https://github.com/redkubes/otomi-core/issues/1008)) ([a7fbb98](https://github.com/redkubes/otomi-core/commit/a7fbb98f992e92c6a9038eec8d5cf52cde8bbd40))
* do not upgrade on very first install ([#1020](https://github.com/redkubes/otomi-core/issues/1020)) ([288f05f](https://github.com/redkubes/otomi-core/commit/288f05f6949924799cce304d96160f93b84e82a9))
* detect Prometheus monitors for teams while multitenacy is disabled ([#1005](https://github.com/redkubes/otomi-core/issues/1005)) ([b7dca97](https://github.com/redkubes/otomi-core/commit/b7dca97b90b9d9daaa72da132df9d36ca5eb6c03)), closes [#1000](https://github.com/redkubes/otomi-core/issues/1000)
* external-secrets migration script ([#1015](https://github.com/redkubes/otomi-core/issues/1015)) ([73599ce](https://github.com/redkubes/otomi-core/commit/73599cea594bfa54614ac5f350f8447bb072830d))
* harbor registry htpasswd ([#1024](https://github.com/redkubes/otomi-core/issues/1024)) ([59db83b](https://github.com/redkubes/otomi-core/commit/59db83b59ba5ffd9fea40963b07863142428a6d1)), closes [#1019](https://github.com/redkubes/otomi-core/issues/1019)
* kiali deps ([#998](https://github.com/redkubes/otomi-core/issues/998)) ([d532f77](https://github.com/redkubes/otomi-core/commit/d532f779a2ac4f2d546f3fc5c3cee6532ff91f76))
* kiali resources ([#1028](https://github.com/redkubes/otomi-core/issues/1028)) ([c4e42a0](https://github.com/redkubes/otomi-core/commit/c4e42a0acc59b5298568d769550e6af277fbd374))
* save brand new secrets files ([#1009](https://github.com/redkubes/otomi-core/issues/1009)) ([a0e0571](https://github.com/redkubes/otomi-core/commit/a0e05716fd331760e27e4477b5946b44b665cbc7)), closes [#975](https://github.com/redkubes/otomi-core/issues/975)
* set olm target namespace ([#1026](https://github.com/redkubes/otomi-core/issues/1026)) ([a3869ed](https://github.com/redkubes/otomi-core/commit/a3869edcc5fa4b52e8e12449c1438b8051fab2ec))
* upgrade post routine ([#1030](https://github.com/redkubes/otomi-core/issues/1030)) ([9cc08c6](https://github.com/redkubes/otomi-core/commit/9cc08c6379ea4dcad5499091126e6e9ff41948f9))
* use olm namespace as it was before the olm char upgrade ([03dea37](https://github.com/redkubes/otomi-core/commit/03dea37ce7c16ca0f7af34aa00be5604a509a8e1))
* velero defaults ([#1022](https://github.com/redkubes/otomi-core/issues/1022)) ([c4ba59f](https://github.com/redkubes/otomi-core/commit/c4ba59ff3489aadf14165c5c85e45d62d7647236))


### Others

* interactive commitizen only if git commit message not delivered ([#1018](https://github.com/redkubes/otomi-core/issues/1018)) ([0bae198](https://github.com/redkubes/otomi-core/commit/0bae198d5167fe5682ab619c625034d729393d1a))

## [0.18.0](https://github.com/redkubes/otomi-core/compare/v0.17.1...v0.18.0) (2023-01-16)


### Features

* add default response headers ([#983](https://github.com/redkubes/otomi-core/issues/983)) ([6011f48](https://github.com/redkubes/otomi-core/commit/6011f4881d6bc6d4a21305424304c60992f12a26)), closes [#789](https://github.com/redkubes/otomi-core/issues/789)
* define ingress-nginx settings for each ingress class ([#953](https://github.com/redkubes/otomi-core/issues/953)) ([923bf06](https://github.com/redkubes/otomi-core/commit/923bf06214472d8d84be9684a39cb11ea76369d1))
* external-secrets upgrade plus cluster/team wide secrets ([#960](https://github.com/redkubes/otomi-core/issues/960)) ([5a10948](https://github.com/redkubes/otomi-core/commit/5a109485d94f377effb340257df48105b69a24b2))


### Bug Fixes

* make remote write custom config optional ([#990](https://github.com/redkubes/otomi-core/issues/990)) ([93aa930](https://github.com/redkubes/otomi-core/commit/93aa930cc60784dcf78c5c948ae26289f60a6a4d))
* upgrade only relevant versions ([#995](https://github.com/redkubes/otomi-core/issues/995)) ([11ad459](https://github.com/redkubes/otomi-core/commit/11ad45967a9b15a3b5ea8bde1c1e7ed4cd1ce488))


### Others

* node version lock ([#978](https://github.com/redkubes/otomi-core/issues/978)) ([756e203](https://github.com/redkubes/otomi-core/commit/756e2034fc0c0759048e569eec845b4930ba01f7))
* remove unsued configuration for kind ([#989](https://github.com/redkubes/otomi-core/issues/989)) ([491b260](https://github.com/redkubes/otomi-core/commit/491b2601899f92682314d666a156dbc48f0daeed))

### [0.17.1](https://github.com/redkubes/otomi-core/compare/v0.16.21...v0.17.1) (2022-12-19)


### Features

* harbor cronjob to backup ([#952](https://github.com/redkubes/otomi-core/issues/952)) ([195542c](https://github.com/redkubes/otomi-core/commit/195542c214638eba45c4fb41e918f182a758f7b9))
* upgrade harbor ([#945](https://github.com/redkubes/otomi-core/issues/945)) ([40975bd](https://github.com/redkubes/otomi-core/commit/40975bd3e34279e6eecf3384b90c7af1b627d78e))


### Bug Fixes

* do not pass remote write into team prometheus ([#984](https://github.com/redkubes/otomi-core/issues/984)) ([96dd604](https://github.com/redkubes/otomi-core/commit/96dd60488338a3bb10021193954b20a583dd95b0))
* ensure newly generated secrets stored in .dec file are encrypted ([b1b8265](https://github.com/redkubes/otomi-core/commit/b1b826545347e288fd7d2ab4cd4bb8f0aad30271))


### [0.16.21](https://github.com/redkubes/otomi-core/compare/v0.16.20...v0.16.21) (2022-12-06)


### Bug Fixes

* drone update strategy in wrong spec context ([#973](https://github.com/redkubes/otomi-core/issues/973)) ([af3e794](https://github.com/redkubes/otomi-core/commit/af3e7942da76dfd3b3498d256a4a34c2dac67298))
* get drone image tag ([c3a49d9](https://github.com/redkubes/otomi-core/commit/c3a49d92b7bde4d848f40f7bb7353e2ac8c31983))
* set drone recreate strategy, so existing Pod releases the PV ([bececb6](https://github.com/redkubes/otomi-core/commit/bececb6078605316929ee7e29a110b6390b5ef06))


### Reverts

* Revert "fix: do not redeploy drone on secret.yaml change" ([6e7d82f](https://github.com/redkubes/otomi-core/commit/6e7d82f23112663f19c14af9f49380601ef08b93))


### Others

* versions ([5c8c2ea](https://github.com/redkubes/otomi-core/commit/5c8c2ea0aca239a0f500262786aaf106508e0f47))
* versions ([9baaccf](https://github.com/redkubes/otomi-core/commit/9baaccf499ed5bf42a786478e1e7b2fa3c3627b6))

### [0.16.20](https://github.com/redkubes/otomi-core/compare/v0.16.19...v0.16.20) (2022-12-05)


### Features

* add a flag to disable monitoring stack for a specific team ([#946](https://github.com/redkubes/otomi-core/issues/946)) ([550295e](https://github.com/redkubes/otomi-core/commit/550295ec3f383057bd3b3adbbc7094bb0ed4c55c))
* add Jaeger to shared apps ([#944](https://github.com/redkubes/otomi-core/issues/944)) ([ebccd43](https://github.com/redkubes/otomi-core/commit/ebccd4315930c42fb1bfee382eff69db8dc58704))
* remove Keycloak from shared apps ([#944](https://github.com/redkubes/otomi-core/issues/944)) ([ebccd43](https://github.com/redkubes/otomi-core/commit/ebccd4315930c42fb1bfee382eff69db8dc58704))
* add minio core app ([#957](https://github.com/redkubes/otomi-core/issues/957)) ([ec5322e](https://github.com/redkubes/otomi-core/commit/ec5322e6d75416bec9624419b3138a142ce2ec7b))
* less promiscuous otomi validate-template output ([#955](https://github.com/redkubes/otomi-core/issues/955)) ([9d96a00](https://github.com/redkubes/otomi-core/commit/9d96a0022b3ac0a5180ed6cca04c6c61d6fa9a18))
* allow to define prometheus remote write ([#959](https://github.com/redkubes/otomi-core/issues/959)) ([3f81389](https://github.com/redkubes/otomi-core/commit/3f81389ffe78f8dc41f3ea60530e82901335f3b3))
* introduce new code editor based on Monaco (otomi-console)


### Bug Fixes

* do not enable gatekeeper when otomi.nodeSelector is empty ([#958](https://github.com/redkubes/otomi-core/issues/958)) ([bfe5287](https://github.com/redkubes/otomi-core/commit/bfe5287182f4a8998fa1bcec5006ba05ab716133))
* do not redeploy drone on secret.yaml change ([19126dc](https://github.com/redkubes/otomi-core/commit/19126dc503d32b6568d3d322e90ad4052a32bcee)), closes [#950](https://github.com/redkubes/otomi-core/issues/950)
* migrate values shall preserve teamConfig property ([#949](https://github.com/redkubes/otomi-core/issues/949)) ([2ea76fb](https://github.com/redkubes/otomi-core/commit/2ea76fbd75ec3666d2fa1d068132fe74b55ed1bf))
* prometheus resources ([#956](https://github.com/redkubes/otomi-core/issues/956)) ([ca862d2](https://github.com/redkubes/otomi-core/commit/ca862d2ae17455703697236cf15b9018a808686c))


### Tests

* add minio to test scenario [ci skip] ([#961](https://github.com/redkubes/otomi-core/issues/961)) ([8ac6a21](https://github.com/redkubes/otomi-core/commit/8ac6a21f69f5c4f6d021330f5d2c4d25dda62b17))
* digital ocean does not support k8s 1.22 anymore [ci skip] ([#951](https://github.com/redkubes/otomi-core/issues/951)) ([2372722](https://github.com/redkubes/otomi-core/commit/237272258035f95870661c597d8ae7d9725d9192))
* workflows select image registry [ci skip] ([#948](https://github.com/redkubes/otomi-core/issues/948)) ([b780e5c](https://github.com/redkubes/otomi-core/commit/b780e5c43db6d8b04ac6b243aa7f75e77ef9b939))


### Others

* versions ([13f64af](https://github.com/redkubes/otomi-core/commit/13f64af3feeb9bf30506ca81fd66e26e1a692adb))

### [0.16.19](https://github.com/redkubes/otomi-core/compare/v0.16.18...v0.16.19) (2022-11-21)


### Features

- detect git conflicts on multi-user values changes ([#925](https://github.com/redkubes/otomi-core/issues/925)) ([eefccc7](https://github.com/redkubes/otomi-core/commit/eefccc7ab1d8106a357dbad476071bf6c109f7e6))
- notify users about drone pipeline execution status ([#925](https://github.com/redkubes/otomi-core/issues/925))
- encrypt only those secrets that have been changed ([#925](https://github.com/redkubes/otomi-core/issues/925))

### Bug Fixes

* admin services should not be excluded from team-ns-admin ([#933](https://github.com/redkubes/otomi-core/issues/933)) ([c3e45d4](https://github.com/redkubes/otomi-core/commit/c3e45d4e288c8665543ea9933cc7bbae0feaac81))
* **component:** add certmanager resource quota to schema and gotmpl ([62de41a](https://github.com/redkubes/otomi-core/commit/62de41a87de2b3ccf1721ff5ed7e8a755bf20659))
* **component:** fix reference ([131bcf8](https://github.com/redkubes/otomi-core/commit/131bcf8e0bfa275e6aa00c60933b677670464db3))
* namespaceSelectors for team prometheus releases ([#942](https://github.com/redkubes/otomi-core/issues/942)) ([f05236e](https://github.com/redkubes/otomi-core/commit/f05236e192efa5e7eebb7c04eaeccbc74b4bbc36))
* rename default vault secret name ([#928](https://github.com/redkubes/otomi-core/issues/928)) ([8f4b5d0](https://github.com/redkubes/otomi-core/commit/8f4b5d0e5686a74f501af349dd7f7a9ea06f8784)), closes [#895](https://github.com/redkubes/otomi-core/issues/895)
* setting up NODE_ENV for lint:hf command ([#943](https://github.com/redkubes/otomi-core/issues/943)) ([0fcab9b](https://github.com/redkubes/otomi-core/commit/0fcab9bdd738fe0d1f57b7e05c963c931569d95e))


### Tests

* ensure cluster name uniqueness for jobs using matrix strategy ([#931](https://github.com/redkubes/otomi-core/issues/931)) ([5d1f2fb](https://github.com/redkubes/otomi-core/commit/5d1f2fb3652f107a4e6da27eb199d2a45ddec0dd))
* fix broken GitHub pipeline expression [ci skip] ([#932](https://github.com/redkubes/otomi-core/issues/932)) ([5f2b771](https://github.com/redkubes/otomi-core/commit/5f2b771882e746c28167bd66631a76aabcd80108))
* increase workflow timeout ([#940](https://github.com/redkubes/otomi-core/issues/940)) ([484a863](https://github.com/redkubes/otomi-core/commit/484a863821a441470098df4ef397f4c867d492fe))
* integration tests and tests on demand with optional settings for dns kms and oidc ([#927](https://github.com/redkubes/otomi-core/issues/927)) ([da5e087](https://github.com/redkubes/otomi-core/commit/da5e087cbed3377bd08b449ffdb8f2c9b1a1b9df))
* remove required fields as there are defaults ([#929](https://github.com/redkubes/otomi-core/issues/929)) ([361b86c](https://github.com/redkubes/otomi-core/commit/361b86c3808e4c501e95cb19439de6b125e2afa8))
* simplify cluster name ([#930](https://github.com/redkubes/otomi-core/issues/930)) ([4dff3f2](https://github.com/redkubes/otomi-core/commit/4dff3f2ffc695a554931dab861038968429034da))


### Others

* versions ([8e94ac5](https://github.com/redkubes/otomi-core/commit/8e94ac5a5f0969b342ce337e6aea438896338590))

### [0.16.18](https://github.com/redkubes/otomi-core/compare/v0.16.17...v0.16.18) (2022-09-30)


### Bug Fixes

* do not allow additional properites at dns provider ([#922](https://github.com/redkubes/otomi-core/issues/922)) ([e9383a5](https://github.com/redkubes/otomi-core/commit/e9383a5206ed7d7f417682f00997ba460a4c07f7))
* missing secret required by certificate issuer ([#923](https://github.com/redkubes/otomi-core/issues/923)) ([cdaa336](https://github.com/redkubes/otomi-core/commit/cdaa336d613e74077e5c191b93995cd21dcaf4b9))


### Tests

* add  workflow dispatch options and fix scheduled workflow ([#919](https://github.com/redkubes/otomi-core/issues/919)) ([8165f61](https://github.com/redkubes/otomi-core/commit/8165f61c17fb071d30ec8a17de39c6d020757f32))

### [0.16.17](https://github.com/redkubes/otomi-core/compare/v0.16.16...v0.16.17) (2022-09-27)


### Features

* raw values for ingress-nginx chart ([#915](https://github.com/redkubes/otomi-core/issues/915)) ([dd3cdec](https://github.com/redkubes/otomi-core/commit/dd3cdec8dbe0d8c1af9b7f1ec317befa71095e63))


### Bug Fixes

* otomi-api pod gets stuck during pod initialization ([#916](https://github.com/redkubes/otomi-core/issues/916)) ([68bb0a6](https://github.com/redkubes/otomi-core/commit/68bb0a6573033caaf3eacfd7ee337b69c6790b0a))

### Tests

- integration tests case for fully fledged deployment ([#914](https://github.com/redkubes/otomi-core/issues/914)) ([c345563](https://github.com/redkubes/otomi-core/commit/c345563bdea9177687a0435ebe27497f8f0753a2))

### [0.16.16](https://github.com/redkubes/otomi-core/compare/v0.16.15...v0.16.16) (2022-09-23)


### Others

* set otomi-api version ([#912](https://github.com/redkubes/otomi-core/issues/912)) ([4fb41b2](https://github.com/redkubes/otomi-core/commit/4fb41b223ef4c8db71421e5ec7f05028f049b1b5))

### [0.16.15](https://github.com/redkubes/otomi-core/compare/v0.16.14...v0.16.15) (2022-09-22)


### Features

* Velero added to Otomi apps to enable platform admin to schedule backups of all Otomi platform services and teams ([#903](https://github.com/redkubes/otomi-core/issues/903)) ([897bfba](https://github.com/redkubes/otomi-core/commit/897bfbaf0cc65436ae2e3e29337c7f68496b5858))
* More dns providers added, including 'other' to use any DNS provider that is not  ([#889](https://github.com/redkubes/otomi-core/issues/889)) ([10ed2f8](https://github.com/redkubes/otomi-core/commit/10ed2f8ab416eb9bb68bd8b7b440716d34aae80b))
* Otomi cli run as host user ([#890](https://github.com/redkubes/otomi-core/issues/890)) ([f72a497](https://github.com/redkubes/otomi-core/commit/f72a497c01bd903e6efca6d2f7202e2c57644545))
* Promtail upgrade with updated datasource configuration in grafana ([#910](https://github.com/redkubes/otomi-core/issues/910)) ([9ff1f3e](https://github.com/redkubes/otomi-core/commit/9ff1f3e166c5dbd6d4508a730a4c0913e9813f9e))
* Remove deprecated properties ([#899](https://github.com/redkubes/otomi-core/issues/899)) ([2868f2e](https://github.com/redkubes/otomi-core/commit/2868f2ea3c907f50fb28843514cb4ab632dd5964))


### Bug Fixes

* do not scrape kube metrics by default ([#904](https://github.com/redkubes/otomi-core/issues/904)) ([347afc1](https://github.com/redkubes/otomi-core/commit/347afc15033c9b10989d6fde583e25736014dc0b))
* values migration ([#908](https://github.com/redkubes/otomi-core/issues/908)) ([ba218be](https://github.com/redkubes/otomi-core/commit/ba218be17dac307a448d632455959cf165368eef))


### Tests

* scheduled integration test with minimal input values ([#884](https://github.com/redkubes/otomi-core/issues/884)) ([5eab10f](https://github.com/redkubes/otomi-core/commit/5eab10ffd11d7ac42e0e35f6446983dcb5854de9))
* integration tests with unique cluster names ([#896](https://github.com/redkubes/otomi-core/issues/896)) ([9be5557](https://github.com/redkubes/otomi-core/commit/9be5557bf81279459e2049c07446f57f42fb4ebc))

### [0.16.14](https://github.com/redkubes/otomi-core/compare/v0.16.13...v0.16.14) (2022-08-24)

### Features

* add OVHcloud provider ([#878](https://github.com/redkubes/otomi-core/issues/878)) ([563d084](https://github.com/redkubes/otomi-core/commit/563d08489b64603d3d87dee238a8ff6bbc348cc2))
* add vultr provider ([#877](https://github.com/redkubes/otomi-core/issues/877)) ([0f1cb03](https://github.com/redkubes/otomi-core/commit/0f1cb0381df86665831eaa3d5cff2fd9c3b05cc1))
* app descriptions in core ([#881](https://github.com/redkubes/otomi-core/issues/881)) ([f72ebd6](https://github.com/redkubes/otomi-core/commit/f72ebd683814ccdeb00f20ed1785ab912189e0c6))
* load apps.yaml and provided it to otomi-api ([c8b02c9](https://github.com/redkubes/otomi-core/commit/c8b02c99de2a8818f0da14c598f771c1c33a1f0b))
* move apps info to separate file ([285c963](https://github.com/redkubes/otomi-core/commit/285c9638ad0100d506127686bf64734aee66347f))
* move apps info to separate object ([2d7891e](https://github.com/redkubes/otomi-core/commit/2d7891e1efa3c64d8932b0979b7aaaa93f020267))
* schema and related logic grooming ([#879](https://github.com/redkubes/otomi-core/issues/879)) ([9f04eb3](https://github.com/redkubes/otomi-core/commit/9f04eb35960c06377fc759b592ab1ccfa5afb4f4)), closes [redkubes/unassigned-issues#442](https://github.com/redkubes/unassigned-issues/issues/442)
* new info tab showing the version of the app, the repo and other usefull information in Otomi Console (Platform/Apps)
* direct navigation to applications and settings in Otomi Console (Platform/Apps and Teams/Apps)

### Bug Fixes

* broken link in otomi CLI ([#875](https://github.com/redkubes/otomi-core/issues/875)) ([c2ce8f9](https://github.com/redkubes/otomi-core/commit/c2ce8f9f63f9e3fb588ec0ac1d409210ee1d7010))
* gitea postgres pv size ([#887](https://github.com/redkubes/otomi-core/issues/887)) ([cd08008](https://github.com/redkubes/otomi-core/commit/cd08008b0a74034a7cb0b15d3a9209e255e25b3d))
* missing appinfo, titles added ([#883](https://github.com/redkubes/otomi-core/issues/883)) ([99f4e76](https://github.com/redkubes/otomi-core/commit/99f4e768a1cec98c2e6077f457aced3da74adab9))


### Docs

* describe creating values repo ([#874](https://github.com/redkubes/otomi-core/issues/874)) ([bdd6022](https://github.com/redkubes/otomi-core/commit/bdd6022021476f9773aa0452d822d62e05aa0d51))
* using otomi cli in dev mode ([#872](https://github.com/redkubes/otomi-core/issues/872)) ([4ae9ac0](https://github.com/redkubes/otomi-core/commit/4ae9ac0bb578f4e16f84794d73934c55626f4c37))


### Others

* bump otomi versions and fix docs ([#885](https://github.com/redkubes/otomi-core/issues/885)) ([8dc91a9](https://github.com/redkubes/otomi-core/commit/8dc91a9f76956973bece098da505c81e8367e060))

### [0.16.13](https://github.com/redkubes/otomi-core/compare/v0.16.12...v0.16.13) (2022-08-11)


### Others

* bump package.json version ([386d353](https://github.com/redkubes/otomi-core/commit/386d353d466473d322eed3b1f5ef68bdf158c816))

### [0.16.11](https://github.com/redkubes/otomi-core/compare/v0.16.10...v0.16.11) (2022-07-27)


### Bug Fixes

* azure vault unseal ([#846](https://github.com/redkubes/otomi-core/issues/846)) ([fda2b6c](https://github.com/redkubes/otomi-core/commit/fda2b6cff1dbcc92bdd0b6e24496e71814698b50))
* chart version placeholder conformt with semver ([#851](https://github.com/redkubes/otomi-core/issues/851)) ([45a05f5](https://github.com/redkubes/otomi-core/commit/45a05f5e22f672480fe9daf59e8b35b71820060c))
* managed identity for dns ([6f52fa3](https://github.com/redkubes/otomi-core/commit/6f52fa3ba8bde6a85654390130b60087362dc39d))
* node affinity match now excluding daemonsets ([#847](https://github.com/redkubes/otomi-core/issues/847)) ([598f083](https://github.com/redkubes/otomi-core/commit/598f0838afaa02bfda89e33704d46cdf288b4209))
* node selector ([784c92f](https://github.com/redkubes/otomi-core/commit/784c92ffde741c4f5fe53aff43e0974b9e28b040))
* releases with needs that depend on crds must disable validation on install ([605d832](https://github.com/redkubes/otomi-core/commit/605d8329117cff8669859a192063ae3546763574))
* schema regexp for responders ([a389b2a](https://github.com/redkubes/otomi-core/commit/a389b2a5363491472ac90f008935334431a719ee))
* tools upgrade, kube-system excluded from gatekeeper audit, nginx policy restriction, kes fix ([ca09954](https://github.com/redkubes/otomi-core/commit/ca09954621bdc2265ef72fe2dd333412ac9af11e))


### Others

* bump otomi-api ([d14e1ed](https://github.com/redkubes/otomi-core/commit/d14e1edade33252caa1f7f157d14db823caea7dd))
* **release:** 0.16.10 ([d507e7f](https://github.com/redkubes/otomi-core/commit/d507e7fadebffde116ed10d41c3b093f13aa8d51))


### CI

* adding integration test to checks ([#850](https://github.com/redkubes/otomi-core/issues/850)) ([5ffb8e3](https://github.com/redkubes/otomi-core/commit/5ffb8e37977b6a7f394bbc62f4ab1f0569750f93))
* run integration test in GitHub actions ([#839](https://github.com/redkubes/otomi-core/issues/839)) ([473a4e3](https://github.com/redkubes/otomi-core/commit/473a4e3423d225e173c9003be25eca514b6e7a21))

### [0.16.10](https://github.com/redkubes/otomi-core/compare/v0.16.9...v0.16.10) (2022-07-04)

### Features

- **gatekeeper:** gatekeeper now forcing node affinity for platform if asked ([eaa7283](https://github.com/redkubes/otomi-core/commit/eaa7283a1cd7b5aa77f9fbc140018a6ca85f2073))

### Bug Fixes

- drone into own namespace, ingress regression ([e172a79](https://github.com/redkubes/otomi-core/commit/e172a79eb8a4f861db20c97f5f95d16b67d6fc43))
- istio cruft cleanup, kiali now using openid ([d7f6912](https://github.com/redkubes/otomi-core/commit/d7f691237c2f4e6c59c699947bd9e73a34f61ac9))
- kiali secret, upgrades exit code, team prom [ci skip] ([7982c78](https://github.com/redkubes/otomi-core/commit/7982c78b4fee9dd62bd4cf8c9034ab73a2cb5a3d))
- labelselectors prometheus, autoscaler updated ([7811e16](https://github.com/redkubes/otomi-core/commit/7811e16163a97eba4872fc762f4b35a303f4cb4c))
- prom crd install location, more service monitors ([c610977](https://github.com/redkubes/otomi-core/commit/c6109774581790c5e90cb368808bad508ccdd0fe))
- prometheus chart ([2715171](https://github.com/redkubes/otomi-core/commit/27151711e9d9a380b2c825127c557855e940e53d))
- prometheus configurables for scraping and replicas, harbor task bump ([607f910](https://github.com/redkubes/otomi-core/commit/607f910a48703acd483665e1fb01b157c4f9ff25))
- rawvalues for all crs, kiali resources ([d07078e](https://github.com/redkubes/otomi-core/commit/d07078ebd3a94c14bfc10d77f71c21a804966adf))
- updated gitea task with drone namespace, alphasorted policies to avoid diff ([f14605c](https://github.com/redkubes/otomi-core/commit/f14605cb07812e1033a4e1d2472548e84b58c63a))
- upgrades split in pre and post operations, added upgrades, kiali migration ([fd7caa3](https://github.com/redkubes/otomi-core/commit/fd7caa3894a891d8242aa706ef247a1ef9fe0193))
- values repo should not be init-ed ([#816](https://github.com/redkubes/otomi-core/issues/816)) ([a42cc2c](https://github.com/redkubes/otomi-core/commit/a42cc2c7c6989a6b192de55811015f4090a34e28))

### Code Refactoring

- removed unneeded helmfile [ci skip] ([320b5ab](https://github.com/redkubes/otomi-core/commit/320b5ab7ce2d950269fed64327b8f7c050d9c51b))
- supressing expected git error for regular verbosity ([145132c](https://github.com/redkubes/otomi-core/commit/145132c5b30c5944e6723b4327056e60a843aeb6))

### Others

- **deps:** pinned api + console [ci skip] ([6dcb56b](https://github.com/redkubes/otomi-core/commit/6dcb56b255a19c78c05c8fff1c95ac6572aa93b5))

### [0.16.9](https://github.com/redkubes/otomi-core/compare/v0.16.8...v0.16.9) (2022-06-27)

### Bug Fixes

- added types for retry as dep to async-retry to bypass version mismatch ([9f796b4](https://github.com/redkubes/otomi-core/commit/9f796b4acc40a8fda80bba3cf79192f5deec61cc))
- added types for retry as dep to async-retry to bypass version mismatch: [#2](https://github.com/redkubes/otomi-core/issues/2) ([9607634](https://github.com/redkubes/otomi-core/commit/960763429b3370e3d87f47508e103e7c81fee6eb))
- added types for retry as dep to async-retry to bypass version mismatch: [#3](https://github.com/redkubes/otomi-core/issues/3) ([578dcae](https://github.com/redkubes/otomi-core/commit/578dcae5e7c0fa1b503a6632c2a307802e3977ef))
- commit logic [ci skip] ([75f4a9d](https://github.com/redkubes/otomi-core/commit/75f4a9ddd64cf57a17e26dd9e10dc4e6a23df89e))
- commit on every apply if not isCli ([#817](https://github.com/redkubes/otomi-core/issues/817)) ([71dffc8](https://github.com/redkubes/otomi-core/commit/71dffc8c9402348b9ae8665c5f0d7bc1b4144c51))
- dashboards added and tuned [ci skip] ([0fff9e1](https://github.com/redkubes/otomi-core/commit/0fff9e17f2e071e42b2cdf734cb2f678c16c1afa))
- external secrets, missing team-admin values, some regression and small fixes ([ae4373f](https://github.com/redkubes/otomi-core/commit/ae4373f3aacbb2468963fb31a5f493123377c33d))
- gitea job env ([0fd6801](https://github.com/redkubes/otomi-core/commit/0fd680187e734e554c41b482c28673383c87cd55))
- istio cruft cleanup, kiali now using openid ([d7f6912](https://github.com/redkubes/otomi-core/commit/d7f691237c2f4e6c59c699947bd9e73a34f61ac9))
- knative versioning, istio peerauthentication with defaults removed ([#811](https://github.com/redkubes/otomi-core/issues/811)) ([e9e6301](https://github.com/redkubes/otomi-core/commit/e9e63014217a844709ecc98a30fd3689de2fe2a8))
- new customcatrust for azure ([e7f6aec](https://github.com/redkubes/otomi-core/commit/e7f6aecae271cd37edf2477661998bf0250cc88b))
- new customcatrust for azure ([6407b5b](https://github.com/redkubes/otomi-core/commit/6407b5b131e8fdace138be8c8a986506d5d0c198))
- resource logic, httpbin namespace [ci skip] ([5eda668](https://github.com/redkubes/otomi-core/commit/5eda66892cf0a074f6a9bd2a7cd0f9cfa83deb04))
- servicemonitor labels ([#822](https://github.com/redkubes/otomi-core/issues/822)) ([827539b](https://github.com/redkubes/otomi-core/commit/827539b4fa1f09181b594d93f8fe5de3666fbe3c))
- slack invite link [ci skip] ([0671541](https://github.com/redkubes/otomi-core/commit/0671541d924a865633d26cdd332949ffaf800078))
- values repo should not be init-ed ([#816](https://github.com/redkubes/otomi-core/issues/816)) ([a42cc2c](https://github.com/redkubes/otomi-core/commit/a42cc2c7c6989a6b192de55811015f4090a34e28))

### Code Refactoring

- supressing expected git error for regular verbosity ([145132c](https://github.com/redkubes/otomi-core/commit/145132c5b30c5944e6723b4327056e60a843aeb6))

### Docs

- code development ([#821](https://github.com/redkubes/otomi-core/issues/821)) ([2bdb636](https://github.com/redkubes/otomi-core/commit/2bdb636c18d05af4f3e9a872392c85b63193de9a))
- **readme.md:** added referral link to DO marketplace ([#812](https://github.com/redkubes/otomi-core/issues/812)) ([723f11d](https://github.com/redkubes/otomi-core/commit/723f11d5df810e9fcb74210eb70826de0c995300))

### Others

- **deps:** pinned api + console [ci skip] ([6dcb56b](https://github.com/redkubes/otomi-core/commit/6dcb56b255a19c78c05c8fff1c95ac6572aa93b5))
- **deps:** update all-npm ([cc8379a](https://github.com/redkubes/otomi-core/commit/cc8379a09609e5f9602f277c9c1c8b36619d6bde))
- **deps:** update all-npm ([ac98d1d](https://github.com/redkubes/otomi-core/commit/ac98d1d77d86bb1b028a87d8e233ac85e698ffd4))
- **deps:** update all-npm ([1613d93](https://github.com/redkubes/otomi-core/commit/1613d93333066ac710110dac27b7f10d974a7889))
- **deps:** update all-npm ([cf0a26e](https://github.com/redkubes/otomi-core/commit/cf0a26e60b5a569a420f37fc30b0e24d18622159))

### [0.16.8](https://github.com/redkubes/otomi-core/compare/v0.16.7...v0.16.8) (2022-06-17)

### Bug Fixes

- added types for retry as dep to async-retry to bypass version mismatch ([9f796b4](https://github.com/redkubes/otomi-core/commit/9f796b4acc40a8fda80bba3cf79192f5deec61cc))
- added types for retry as dep to async-retry to bypass version mismatch: [#2](https://github.com/redkubes/otomi-core/issues/2) ([9607634](https://github.com/redkubes/otomi-core/commit/960763429b3370e3d87f47508e103e7c81fee6eb))
- added types for retry as dep to async-retry to bypass version mismatch: [#3](https://github.com/redkubes/otomi-core/issues/3) ([578dcae](https://github.com/redkubes/otomi-core/commit/578dcae5e7c0fa1b503a6632c2a307802e3977ef))
- commit logic [ci skip] ([75f4a9d](https://github.com/redkubes/otomi-core/commit/75f4a9ddd64cf57a17e26dd9e10dc4e6a23df89e))
- commit on every apply if not isCli ([#817](https://github.com/redkubes/otomi-core/issues/817)) ([71dffc8](https://github.com/redkubes/otomi-core/commit/71dffc8c9402348b9ae8665c5f0d7bc1b4144c51))
- dashboards added and tuned [ci skip] ([0fff9e1](https://github.com/redkubes/otomi-core/commit/0fff9e17f2e071e42b2cdf734cb2f678c16c1afa))
- knative versioning, istio peerauthentication with defaults removed ([#811](https://github.com/redkubes/otomi-core/issues/811)) ([e9e6301](https://github.com/redkubes/otomi-core/commit/e9e63014217a844709ecc98a30fd3689de2fe2a8))
- resource logic, httpbin namespace [ci skip] ([5eda668](https://github.com/redkubes/otomi-core/commit/5eda66892cf0a074f6a9bd2a7cd0f9cfa83deb04))
- servicemonitor labels ([#822](https://github.com/redkubes/otomi-core/issues/822)) ([827539b](https://github.com/redkubes/otomi-core/commit/827539b4fa1f09181b594d93f8fe5de3666fbe3c))
- slack invite link [ci skip] ([0671541](https://github.com/redkubes/otomi-core/commit/0671541d924a865633d26cdd332949ffaf800078))
- values repo should not be init-ed ([#816](https://github.com/redkubes/otomi-core/issues/816)) ([a42cc2c](https://github.com/redkubes/otomi-core/commit/a42cc2c7c6989a6b192de55811015f4090a34e28))

### Code Refactoring

- supressing expected git error for regular verbosity ([145132c](https://github.com/redkubes/otomi-core/commit/145132c5b30c5944e6723b4327056e60a843aeb6))

### Others

- **deps:** pinned api + console [ci skip] ([6dcb56b](https://github.com/redkubes/otomi-core/commit/6dcb56b255a19c78c05c8fff1c95ac6572aa93b5))
- **deps:** update all-npm ([ac98d1d](https://github.com/redkubes/otomi-core/commit/ac98d1d77d86bb1b028a87d8e233ac85e698ffd4))
- **deps:** update all-npm ([1613d93](https://github.com/redkubes/otomi-core/commit/1613d93333066ac710110dac27b7f10d974a7889))
- **deps:** update all-npm ([cf0a26e](https://github.com/redkubes/otomi-core/commit/cf0a26e60b5a569a420f37fc30b0e24d18622159))

### Docs

- code development ([#821](https://github.com/redkubes/otomi-core/issues/821)) ([2bdb636](https://github.com/redkubes/otomi-core/commit/2bdb636c18d05af4f3e9a872392c85b63193de9a))
- **readme.md:** added referral link to DO marketplace ([#812](https://github.com/redkubes/otomi-core/issues/812)) ([723f11d](https://github.com/redkubes/otomi-core/commit/723f11d5df810e9fcb74210eb70826de0c995300))

### [0.16.7](https://github.com/redkubes/otomi-core/compare/v0.16.6...v0.16.7) (2022-06-14)

### Features

- ingress classes ([#810](https://github.com/redkubes/otomi-core/issues/810)) ([c1220d4](https://github.com/redkubes/otomi-core/commit/c1220d41797ab7188722745343724383977e8c72))
- kubeclarity app integration ([#800](https://github.com/redkubes/otomi-core/issues/800)) ([433099d](https://github.com/redkubes/otomi-core/commit/433099d84ad98cefe2e8cabb5d5a77c7df8c9552))

### Bug Fixes

- added types for retry as dep to async-retry to bypass version mismatch ([9f796b4](https://github.com/redkubes/otomi-core/commit/9f796b4acc40a8fda80bba3cf79192f5deec61cc))
- added types for retry as dep to async-retry to bypass version mismatch: [#2](https://github.com/redkubes/otomi-core/issues/2) ([9607634](https://github.com/redkubes/otomi-core/commit/960763429b3370e3d87f47508e103e7c81fee6eb))
- added types for retry as dep to async-retry to bypass version mismatch: [#3](https://github.com/redkubes/otomi-core/issues/3) ([578dcae](https://github.com/redkubes/otomi-core/commit/578dcae5e7c0fa1b503a6632c2a307802e3977ef))
- commit logic [ci skip] ([75f4a9d](https://github.com/redkubes/otomi-core/commit/75f4a9ddd64cf57a17e26dd9e10dc4e6a23df89e))
- commit on every apply if not isCli ([#817](https://github.com/redkubes/otomi-core/issues/817)) ([71dffc8](https://github.com/redkubes/otomi-core/commit/71dffc8c9402348b9ae8665c5f0d7bc1b4144c51))
- knative versioning, istio peerauthentication with defaults removed ([#811](https://github.com/redkubes/otomi-core/issues/811)) ([e9e6301](https://github.com/redkubes/otomi-core/commit/e9e63014217a844709ecc98a30fd3689de2fe2a8))
- values repo should not be init-ed ([#816](https://github.com/redkubes/otomi-core/issues/816)) ([a42cc2c](https://github.com/redkubes/otomi-core/commit/a42cc2c7c6989a6b192de55811015f4090a34e28))

### Docs

- **readme.md:** added referral link to DO marketplace ([#812](https://github.com/redkubes/otomi-core/issues/812)) ([723f11d](https://github.com/redkubes/otomi-core/commit/723f11d5df810e9fcb74210eb70826de0c995300))

### Code Refactoring

- supressing expected git error for regular verbosity ([145132c](https://github.com/redkubes/otomi-core/commit/145132c5b30c5944e6723b4327056e60a843aeb6))

### Others

- **deps:** pinned api + console [ci skip] ([6dcb56b](https://github.com/redkubes/otomi-core/commit/6dcb56b255a19c78c05c8fff1c95ac6572aa93b5))
- **deps:** update all-npm ([cf0a26e](https://github.com/redkubes/otomi-core/commit/cf0a26e60b5a569a420f37fc30b0e24d18622159))

### [0.16.6](https://github.com/redkubes/otomi-core/compare/v0.16.5...v0.16.6) (2022-05-27)

### Features

- chart destroy ([#798](https://github.com/redkubes/otomi-core/issues/798)) ([c66431d](https://github.com/redkubes/otomi-core/commit/c66431d2f86c869940590deaa20420e05a870bc9))
- **component:** add kubeclarity helm chart ([#804](https://github.com/redkubes/otomi-core/issues/804)) [ci-skip] ([cd5482b](https://github.com/redkubes/otomi-core/commit/cd5482b109de74af396976086bb1f385ce6cb720)), closes [redkubes/unassigned-issues#409](https://github.com/redkubes/unassigned-issues/issues/409)

### Bug Fixes

- add 1.23 support [ci skip] ([e244ad6](https://github.com/redkubes/otomi-core/commit/e244ad67275ce98cf5b8614c59a9d5ad627230ac))
- knative versioning + raw values, app namespaces, cert-manager upgrade for 1.23 ([#809](https://github.com/redkubes/otomi-core/issues/809)) ([ac722fd](https://github.com/redkubes/otomi-core/commit/ac722fd53a9bc0f20ba076785644eb31cbf62fea))
- supported versions [ci skip] ([fab9ccc](https://github.com/redkubes/otomi-core/commit/fab9cccc9e5be803d351ed05d54b9e6d4cbf0d59))

### [0.16.5](https://github.com/redkubes/otomi-core/compare/v0.16.4...v0.16.5) (2022-05-24)

### ⚠ BREAKING CHANGES

- **networkpolicies:** requires teams to change labels from 'app: <svc>' to 'otomi.io/app: <svc>'

### Bug Fixes

- **alerting:** prometheus metrics and alerts for teams ([#801](https://github.com/redkubes/otomi-core/issues/801)) ([90fdaa7](https://github.com/redkubes/otomi-core/commit/90fdaa7faa3f7c7e6d9eff0bfdb73b2c55364d5c)), closes [#797](https://github.com/redkubes/otomi-core/issues/797)
- knative operator manifest for 1.21 was empty ([417d2f0](https://github.com/redkubes/otomi-core/commit/417d2f0b44f65b8f0ed4f627a3909ee1d926796f))
- slack URL [ci skip] ([100fd9c](https://github.com/redkubes/otomi-core/commit/100fd9ca67aa2315ed46592b60b2c8987c3877a7))

### Code Refactoring

- **networkpolicies:** change Pod label requirement for network policies ([#802](https://github.com/redkubes/otomi-core/issues/802)) ([aaffee5](https://github.com/redkubes/otomi-core/commit/aaffee51b92d8618fea152e49b5c7f9115755157)), closes [#739](https://github.com/redkubes/otomi-core/issues/739)

### Others

- bump api and console ([6bbf43f](https://github.com/redkubes/otomi-core/commit/6bbf43fe14994580a265914ab273190e2931412b))

### [0.16.4](https://github.com/redkubes/otomi-core/compare/v0.16.3...v0.16.4) (2022-05-18)

### Bug Fixes

- add resource limits ([#796](https://github.com/redkubes/otomi-core/issues/796)) ([d847810](https://github.com/redkubes/otomi-core/commit/d847810b599b0db6e3514ca0db28678428db1711))
- api decryption regression, knative upgrade ([8b8f9e5](https://github.com/redkubes/otomi-core/commit/8b8f9e5b8d97224b92e8896924954ec8e21dc28a))
- **blackbox-exporter:** fix: [#792](https://github.com/redkubes/otomi-core/issues/792) ([#793](https://github.com/redkubes/otomi-core/issues/793)) ([2b0643c](https://github.com/redkubes/otomi-core/commit/2b0643c7961d5c194c522ff417563e23cd06f216))
- incorrect text [ci skip] ([9020390](https://github.com/redkubes/otomi-core/commit/90203900343fc265810bbc93dc2e69042bf89776))
- slack url [ci skip] ([30c8186](https://github.com/redkubes/otomi-core/commit/30c8186f88ff2de9587f7525c3e34db4027b14d4))

### Others

- **deps:** bumped api + console [ci skip] ([7a7f1fe](https://github.com/redkubes/otomi-core/commit/7a7f1feb8431786efb3bc5fa3f1c31b4db1b5c57))

### [0.16.3](https://github.com/redkubes/otomi-core/compare/v0.16.2...v0.16.3) (2022-05-06)

### Features

- argocd gitops for teams ([#788](https://github.com/redkubes/otomi-core/issues/788)) ([5e9a868](https://github.com/redkubes/otomi-core/commit/5e9a8688ac0ef90324e37f99077fa0e3292c5f30))
- pr lint action [ci skip] ([e921978](https://github.com/redkubes/otomi-core/commit/e92197803e079333b390cfe092744574a2c06cae))

### Bug Fixes

- chart placeholder [ci skip] ([744b090](https://github.com/redkubes/otomi-core/commit/744b090fcc8053636d0cf26f9087115a6cdbfd86))

### Docs

- adr index and template [ci skip] ([c252efe](https://github.com/redkubes/otomi-core/commit/c252efe22a64ac315be0f4484f7b4adc431a07a7))

### Others

- **deps:** update all-npm ([#784](https://github.com/redkubes/otomi-core/issues/784)) ([ebd5c51](https://github.com/redkubes/otomi-core/commit/ebd5c512e0bd62ae0ba2a819f8440be6af54c953))

### [0.16.2](https://github.com/redkubes/otomi-core/compare/v0.16.0...v0.16.2) (2022-05-02)

### Features

- add helmifile for uninstalling charts ([#759](https://github.com/redkubes/otomi-core/issues/759)) ([d38fba1](https://github.com/redkubes/otomi-core/commit/d38fba1add980b032e29dac89ae59da1da1a9c02))
- values migration step in Drone pipeline ([#783](https://github.com/redkubes/otomi-core/issues/783)) ([b7fb997](https://github.com/redkubes/otomi-core/commit/b7fb9977738e7f7abe2f45702c57fe609dd47de1)), closes [#403](https://github.com/redkubes/otomi-core/issues/403)

### Bug Fixes

- **deps:** pin dependencies ([#763](https://github.com/redkubes/otomi-core/issues/763)) ([eab11b8](https://github.com/redkubes/otomi-core/commit/eab11b809a55b86d9bb9420bc9bb71f448116583))
- **deps:** update dependency @kubernetes/client-node to v0.16.3 ([#774](https://github.com/redkubes/otomi-core/issues/774)) ([d0a81fb](https://github.com/redkubes/otomi-core/commit/d0a81fb8eeb24dd0513082c9f576e92b817e8362))
- **deps:** update dependency debug to v4.3.4 ([#773](https://github.com/redkubes/otomi-core/issues/773)) ([ef99f34](https://github.com/redkubes/otomi-core/commit/ef99f3444612f6e551c0466410fa1fbdeefd5d41))
- disable sync for kind ([e9acc5d](https://github.com/redkubes/otomi-core/commit/e9acc5db211d6cdf06716d1f1b017507efad68e7))
- handling of empty values ([#761](https://github.com/redkubes/otomi-core/issues/761)) ([850e0b3](https://github.com/redkubes/otomi-core/commit/850e0b36d4f70a46e2e4e9b728b37948ac56050b))
- supported k8s versions ([75bae47](https://github.com/redkubes/otomi-core/commit/75bae47c0f3d7ccfd79358e2f3ff556c331fea70))
- remove reference to the local provider ([30a8470](https://github.com/redkubes/otomi-core/commit/30a847096bc3654e94bcf021a2abb694d51565c9))
- olm chart ([c9f4fdb](https://github.com/redkubes/otomi-core/commit/c9f4fdbadfef99aee09631be4305bde16286ed91))
- **policies:** only skip policy enforcement for Istio-init container [#779](https://github.com/redkubes/otomi-core/issues/779) ([596d526](https://github.com/redkubes/otomi-core/commit/596d5269c852d6908133877f4e446daac4a375b8))
- remove team role that allows reading all k8s resources ([#745](https://github.com/redkubes/otomi-core/issues/745)) ([d29da03](https://github.com/redkubes/otomi-core/commit/d29da03ebdeced12d2dbe83be1bc5998049a5b22))
- upgrade api and console and fix minor issues ([#787](https://github.com/redkubes/otomi-core/issues/787)) ([140a8cd](https://github.com/redkubes/otomi-core/commit/140a8cdf27ec8cbd8c6139a28874e1a8586eb585))
- upgraded pkg vault for 1.22+ ([7e31f18](https://github.com/redkubes/otomi-core/commit/7e31f18c2c1fd4aaa8a6dcf632c610505669c3f1))
- cleanup otomi chart values.yaml ([eaa395e](https://github.com/redkubes/otomi-core/commit/eaa395e93855688147512a9eb91399b269a44565))

### Code Refactoring

- master refs to main ([80232bd](https://github.com/redkubes/otomi-core/commit/80232bd9c499d93dbc3b5f9a0884c08bd466520e))

### Docs

- missing master refs ([d94ae16](https://github.com/redkubes/otomi-core/commit/d94ae163638c3deecb8d14c8453db546b4437e38))

### Others

- **deps:** update all ([#775](https://github.com/redkubes/otomi-core/issues/775)) ([f2ff15b](https://github.com/redkubes/otomi-core/commit/f2ff15b36c88136220e53717dfcb33274dd32d9c))
- **deps:** update dependency @types/chai-as-promised to v7.1.5 ([#765](https://github.com/redkubes/otomi-core/issues/765)) ([f08d4d3](https://github.com/redkubes/otomi-core/commit/f08d4d3dbc938763161921bd6556621c7632b6ac))
- **deps:** update dependency @types/lodash to v4.14.181 ([#766](https://github.com/redkubes/otomi-core/issues/766)) ([27fc078](https://github.com/redkubes/otomi-core/commit/27fc0786c7103905d2dab20bb5c5ce40c27103e1))
- **deps:** update dependency @types/node to v16.11.27 ([#767](https://github.com/redkubes/otomi-core/issues/767)) ([b57446e](https://github.com/redkubes/otomi-core/commit/b57446e520a505151edd871ad2bd74ce49658559))
- **deps:** update dependency @types/sinon-chai to v3.2.8 ([#769](https://github.com/redkubes/otomi-core/issues/769)) ([deeaebd](https://github.com/redkubes/otomi-core/commit/deeaebde22abc424d526ca16ded54114e1ddb867))
- **deps:** update dependency @types/supertest to v2.0.12 ([#770](https://github.com/redkubes/otomi-core/issues/770)) [ci skip] ([27914b6](https://github.com/redkubes/otomi-core/commit/27914b649f8f0eddfeafc2d50b04752982d6215c))
- **deps:** update dependency @types/validator to v13.7.2 ([#772](https://github.com/redkubes/otomi-core/issues/772)) [ci skip] ([308682e](https://github.com/redkubes/otomi-core/commit/308682e5e1f49572908ae55717e8bb082b8cb963))
- **deps:** update dependency chai to v4.3.6 ([#768](https://github.com/redkubes/otomi-core/issues/768)) [ci skip] ([6c2eff2](https://github.com/redkubes/otomi-core/commit/6c2eff2b1be788e45d645414ec6fa7d019fe0d82))
- **deps:** update dependency typescript to v4.6.3 ([#771](https://github.com/redkubes/otomi-core/issues/771)) [ci skip] ([a670af5](https://github.com/redkubes/otomi-core/commit/a670af53430caf7089a44a9449d4ccde8750b3c2))
- **deps:** update helm/chart-releaser-action action to v1.4.0 ([#778](https://github.com/redkubes/otomi-core/issues/778)) ([6340d1b](https://github.com/redkubes/otomi-core/commit/6340d1baa81b32aefa0e625cefa84171e88c7191))
- **release:** 0.16.1 ([6638f31](https://github.com/redkubes/otomi-core/commit/6638f312a7d6bae3ca321c6d42b177c3b73acb03))
- **release:** 0.16.1 ([5263a25](https://github.com/redkubes/otomi-core/commit/5263a25eb4ead9d4268093fb3013c8a3063fa089))

### CI

- **codeowners:** and removed [ci skip] ([1e3c92b](https://github.com/redkubes/otomi-core/commit/1e3c92b338c7d0da61ddab605e8c23b21ed36982))
- **codeowners:** put back [ci skip] ([de77c80](https://github.com/redkubes/otomi-core/commit/de77c809cf9c984447caa7947bc8470d992f089b))
- **integration:** re-enabled integration as it should work correctly again ([2183161](https://github.com/redkubes/otomi-core/commit/21831611402ff8094a496646351ca78c22b5593c))
- **renovate:** add docker creds [ci skip] ([0f8a942](https://github.com/redkubes/otomi-core/commit/0f8a9426e61eb7f25ec087d9c4fd7a209169886a))
- **renovate:** add more docker creds hoping it helps [ci skip] ([585a470](https://github.com/redkubes/otomi-core/commit/585a47085e79b825b8c30238ca4e01c08c94f5e9))
- **renovate:** added app/renovate-approve-2 to codeowners for packages [ci skip] ([c583d2a](https://github.com/redkubes/otomi-core/commit/c583d2a1523258eaa5786ce592d73b3c788c9a0c))
- **renovate:** diabled docker for now [ci skip] ([8fdaec6](https://github.com/redkubes/otomi-core/commit/8fdaec6863e293a69eff58fc67c40afb8588ad66))
- **renovate:** diabled docker for now [ci skip] ([814bbc3](https://github.com/redkubes/otomi-core/commit/814bbc3257e3011c729726779e447b8ab72f654a))
- **renovate:** disable all docker related resources for now [ci skip] ([b451aae](https://github.com/redkubes/otomi-core/commit/b451aaeaa9c9d8a4ee1eda8b18c86fc0aa2e8470))
- **renovate:** disable docker for now [ci skip] ([e75f506](https://github.com/redkubes/otomi-core/commit/e75f50684caa6b181a7a13a90b2d33c3fef199f9))
- **renovate:** disable docker for now [ci skip] ([74b8e66](https://github.com/redkubes/otomi-core/commit/74b8e6650e81a3cce1b23c48baac0a874de8c43f))
- **renovate:** fixing resources [ci skip] ([2003a77](https://github.com/redkubes/otomi-core/commit/2003a77b3afd83df2b9f680ca758ed2783e96e30))
- **renovate:** group name [ci skip] ([b2413f1](https://github.com/redkubes/otomi-core/commit/b2413f128b2773a68983274aff89b0b479312ccd))
- **renovate:** re-enabled resources [ci skip] ([c2d9235](https://github.com/redkubes/otomi-core/commit/c2d923558956c46b13d21b8cb8194ae3a488adb2))
- **renovate:** re-enabled resources [ci skip] ([3169c8a](https://github.com/redkubes/otomi-core/commit/3169c8a013057179f1573a841928e4835df86fa1))
- **renovate:** removed redkubesbot from codeowners [ci skip] ([4b280da](https://github.com/redkubes/otomi-core/commit/4b280da3a3536a4b30e72ca5be569c3cd20e8cbc))

## [0.16.1](https://github.com/redkubes/otomi-core/compare/v0.15.5...v0.17.0) (2022-04-12)

### Bug Fixes

- local provider does not exist ([30a8470](https://github.com/redkubes/otomi-core/commit/30a847096bc3654e94bcf021a2abb694d51565c9))

### Docs

- update README.md ([30a8470](https://github.com/redkubes/otomi-core/commit/30a847096bc3654e94bcf021a2abb694d51565c9))

### [0.16.0](https://github.com/redkubes/otomi-core/compare/v0.15.5...v0.16.0) (2022-04-11)

### ⚠ BREAKING CHANGES

- upgraded app dbs, some namespaces changed

Co-authored-by: Jehoszafat Zimnowoda <jehoszafat.zimnowoda@redkubes.com>
Co-authored-by: srodenhuis <sander.rodenhuis@redkubes.com>

### Features

- admin services ([#753](https://github.com/redkubes/otomi-core/issues/753)) ([38ff678](https://github.com/redkubes/otomi-core/commit/38ff6783aa18ab6b2fda3c18482b1fa99698cab7))
- app store and shortcuts ([#722](https://github.com/redkubes/otomi-core/issues/722)) ([5bc23bc](https://github.com/redkubes/otomi-core/commit/5bc23bc41f882123514a24907c2ce0bb2d71bf4e))

### Bug Fixes

- disabled integration as it is not working anymore ([d694484](https://github.com/redkubes/otomi-core/commit/d6944846febcf6876b341718ed11ad021fa6c5d7))
- don't add harbor repo in kubeapps when it is not enabled ([9ab62d1](https://github.com/redkubes/otomi-core/commit/9ab62d1a1af8ce9d46910098fc1079a3fd6f611d))
- empty admin services ([0cb8d06](https://github.com/redkubes/otomi-core/commit/0cb8d063ec05599a9e1cd60a6b2942ebdb04f8bc))
- **gatekeeper:** psp-host-networking + psp-host-security + psp-priviliged issues ([#752](https://github.com/redkubes/otomi-core/issues/752)) ([eb34be0](https://github.com/redkubes/otomi-core/commit/eb34be0c523f2c54e6aa7d2227374647e967e6af)), closes [#402](https://github.com/redkubes/otomi-core/issues/402)
- gitea oidc login ([f601041](https://github.com/redkubes/otomi-core/commit/f601041bef89766c1d1e14ab8862d8273fe38271))
- grafana deps, provider local no host-mods by default ([9986c7f](https://github.com/redkubes/otomi-core/commit/9986c7f855efaf94ee7bfec091b5cf2bc0838171))
- integration input ([844d2b3](https://github.com/redkubes/otomi-core/commit/844d2b33b82c95b55a99ea783aed4364c5fa741b))
- keycloak address ([00d0160](https://github.com/redkubes/otomi-core/commit/00d01601a4f1a013c0f6be971c9f94ded776c53b))
- keycloak theme version tag ([98c2900](https://github.com/redkubes/otomi-core/commit/98c290055ac02a0e7d26a7bcd0000816f32d5faf))
- keycloak theme version ([a07ba34](https://github.com/redkubes/otomi-core/commit/a07ba3451a931af79d53f3ea47c9135a0b04a33b))
- link to documentation ([7b43f4b](https://github.com/redkubes/otomi-core/commit/7b43f4b85f750dfe191934600737177b902a5310))
- typo ([8ce1d58](https://github.com/redkubes/otomi-core/commit/8ce1d587aae3f454f69ee612379ddbec2b23754f))
- workflow ([169560c](https://github.com/redkubes/otomi-core/commit/169560cda9dc32215ad2390b635f4d9b3bf8e30c))

### Docs

- added local provider ([4ea92e9](https://github.com/redkubes/otomi-core/commit/4ea92e94fc20e7923b9928ceb482e45a92391b0b))
- change urls to point to master ([de5767a](https://github.com/redkubes/otomi-core/commit/de5767ae19789e528531d1b7fde7916fe85ba0b3))
- links to img in master ([767380d](https://github.com/redkubes/otomi-core/commit/767380d1d5432dac09ffd044f92e92b2a57a21eb))

### Others

- **deps:** bumped api and console ([87a9cc4](https://github.com/redkubes/otomi-core/commit/87a9cc4a61bf5fa88a722f8d3c4092bc445d90b5))

### [0.15.5](https://github.com/redkubes/otomi-core/compare/v0.15.4...v0.15.5) (2022-04-06)

### Features

- bump api and console versions ([#750](https://github.com/redkubes/otomi-core/issues/750)) ([3ec44f8](https://github.com/redkubes/otomi-core/commit/3ec44f876cd634fa41e05fb07d9a7b13fee9772e))
- upgrade kured ([#749](https://github.com/redkubes/otomi-core/issues/749)) ([f6d7488](https://github.com/redkubes/otomi-core/commit/f6d74884b4e3ad6de8d1f262d611dcd54b19acfb))

### Bug Fixes

- labels and duplicated ports ([#738](https://github.com/redkubes/otomi-core/issues/738)) ([9ae771f](https://github.com/redkubes/otomi-core/commit/9ae771f2142f3013f915669348e858c093d0f888))
- update schema regex for secrets ([#746](https://github.com/redkubes/otomi-core/issues/746)) ([e8ab4b0](https://github.com/redkubes/otomi-core/commit/e8ab4b03fe426125517db5d63661b9f3b717713e))

### Docs

- modify README [ci skip] ([e3abb6f](https://github.com/redkubes/otomi-core/commit/e3abb6f3fff7dd67a0af7206259cb8c53476d884))
- modify README [ci skip] ([59acb0c](https://github.com/redkubes/otomi-core/commit/59acb0cef5a88c1f23a3e8aa98e57ed7b89b4a8d))

### Others

- **deps:** bumped tasks ([febc499](https://github.com/redkubes/otomi-core/commit/febc49926b061c48575367744bfccf0c21d172f9))

### [0.15.4](https://github.com/redkubes/otomi-core/compare/v0.15.3...v0.15.4) (2022-02-28)

### Features

- network policies egress ([#732](https://github.com/redkubes/otomi-core/issues/732)) ([a740a87](https://github.com/redkubes/otomi-core/commit/a740a87bc55be1417105928857357189b5bd0ad1))

### Bug Fixes

- Kiali errors ([#731](https://github.com/redkubes/otomi-core/issues/731)) ([72c0db9](https://github.com/redkubes/otomi-core/commit/72c0db93e0521e7ceef54bb6b0122dc9b34e4ad8))
- **remove image attribute:** removing image atteibute in console and api ([#727](https://github.com/redkubes/otomi-core/issues/727)) ([97bc36f](https://github.com/redkubes/otomi-core/commit/97bc36f85183c9172823863cb6e600897c4a54d1))

### Docs

- added development setup section [ci skip] ([ccab31b](https://github.com/redkubes/otomi-core/commit/ccab31ba8ebe94df99b0ce776eec4de2bf5e3b61))
- **readme.md:** updating the main README.md to reflect the changes in the quickstart repo ([1a03e43](https://github.com/redkubes/otomi-core/commit/1a03e43621aeb73169e14eb6fe25a3e241bff629))

### Others

- **.cspell.json:** ignore renamings word - spell check ([08ac287](https://github.com/redkubes/otomi-core/commit/08ac287add5bcb41b943188c6f796b2ac505d65f))

### [0.15.3](https://github.com/redkubes/otomi-core/compare/v0.15.2...v0.15.3) (2022-02-02)

### Features

- updated community section ([1bf4022](https://github.com/redkubes/otomi-core/commit/1bf402255c1bd3bf79cb3e3dcec962efba9ac3f9))

### [0.15.2](https://github.com/redkubes/otomi-core/compare/v0.15.1...v0.15.2) (2022-01-27)

### Features

- network policies for team workloads ([777dcec](https://github.com/redkubes/otomi-core/commit/777dcec1816424ba1942aee61308ffb27d1f997d))

### [0.15.1](https://github.com/redkubes/otomi-core/compare/v0.15.0...v0.15.1) (2022-01-05)

### Features

- updated community section ([1bf4022](https://github.com/redkubes/otomi-core/commit/1bf402255c1bd3bf79cb3e3dcec962efba9ac3f9))

### [0.15.2](https://github.com/redkubes/otomi-core/compare/v0.15.1...v0.15.2) (2022-01-27)

### Features

- network policies for team workloads ([777dcec](https://github.com/redkubes/otomi-core/commit/777dcec1816424ba1942aee61308ffb27d1f997d))

### [0.15.1](https://github.com/redkubes/otomi-core/compare/v0.15.0...v0.15.1) (2022-01-05)

### Bug Fixes

- ca condition, fixes [#704](https://github.com/redkubes/otomi-core/issues/704) ([#705](https://github.com/redkubes/otomi-core/issues/705)) ([1e97cfb](https://github.com/redkubes/otomi-core/commit/1e97cfb046a4a49427479194a97bc38ad41f9ec3))
- missing ca conditions, google kms conf ([0a8ca8a](https://github.com/redkubes/otomi-core/commit/0a8ca8acadadbf994ed3a7475ee93fd2356f6706))

### Others

- **release:** 0.15.0 ([a22b67d](https://github.com/redkubes/otomi-core/commit/a22b67d11e1f72460f2334d1b359e07e75ae27ed))
- **release:** 0.15.0 ([99a09da](https://github.com/redkubes/otomi-core/commit/99a09da8a51106a2fcd65df795a69700b717e34c))

## [0.15.0](https://github.com/redkubes/otomi-core/compare/v0.14.56...v0.15.0) (2022-01-03)

### Features

- host mods ([#702](https://github.com/redkubes/otomi-core/issues/702)) ([59951b8](https://github.com/redkubes/otomi-core/commit/59951b8c135499044180786d09c4ef07f706dad8))

### Bug Fixes

- downgrade kes ([#703](https://github.com/redkubes/otomi-core/issues/703)) ([7209bbd](https://github.com/redkubes/otomi-core/commit/7209bbdf8a3574104327093e41019b9aaa7a3866))
- encryption ([#700](https://github.com/redkubes/otomi-core/issues/700)) ([f0a42bc](https://github.com/redkubes/otomi-core/commit/f0a42bcb6336a6bab04a87ea7f7980b75574af53))
- owner not required [ci skip] ([acd9e15](https://github.com/redkubes/otomi-core/commit/acd9e15b6d6f86345b412938894d2f4349bbf677))
- reverted versions [ci skip] ([3f1c75c](https://github.com/redkubes/otomi-core/commit/3f1c75c633c11e61cbd19c05d5bd9502722d78be))
- version not required ([17877e9](https://github.com/redkubes/otomi-core/commit/17877e9e95782141906c395a3b1a3069871391df))
- wait-for chart should actually wait, chart value for provider needed ([a72ef2d](https://github.com/redkubes/otomi-core/commit/a72ef2d8c6e2932026d921785a078576681e9872))

### Others

- **deps:** updated vulnerable images for bank vaults, jaeger ([6f5acd4](https://github.com/redkubes/otomi-core/commit/6f5acd4b4ef293953b5fe87846e3b7bcbb19618d))
-

### [0.14.54](https://github.com/redkubes/otomi-core/compare/v0.14.56...v0.14.54) (2021-12-24)

### Bug Fixes

- encryption ([#700](https://github.com/redkubes/otomi-core/issues/700)) ([f0a42bc](https://github.com/redkubes/otomi-core/commit/f0a42bcb6336a6bab04a87ea7f7980b75574af53))
- owner not required [ci skip] ([acd9e15](https://github.com/redkubes/otomi-core/commit/acd9e15b6d6f86345b412938894d2f4349bbf677))
- reverted versions [ci skip] ([3f1c75c](https://github.com/redkubes/otomi-core/commit/3f1c75c633c11e61cbd19c05d5bd9502722d78be))
- version not required ([17877e9](https://github.com/redkubes/otomi-core/commit/17877e9e95782141906c395a3b1a3069871391df))

- **release:** 0.14.53 ([52d0a5c](https://github.com/redkubes/otomi-core/commit/52d0a5ce333d4151534534587e56ddf77e7396cb))

### [0.14.53](https://github.com/redkubes/otomi-core/compare/v0.14.52...v0.14.53) (2021-12-22)

### Features

- values-schema mechanism to update values to conform to schema changes ([#684](https://github.com/redkubes/otomi-core/issues/684)) ([757039d](https://github.com/redkubes/otomi-core/commit/757039db515ef95b74920c2a932d193788f4413c))

### Bug Fixes

- version not required ([17877e9](https://github.com/redkubes/otomi-core/commit/17877e9e95782141906c395a3b1a3069871391df))
- bootstrap merge order ([#697](https://github.com/redkubes/otomi-core/issues/697)) ([2356ffc](https://github.com/redkubes/otomi-core/commit/2356ffc6167b9ad31b802bb9f19fc0974e56ad19))
- default env dir ([6b10ae4](https://github.com/redkubes/otomi-core/commit/6b10ae4c043b1a8661216a150005eb8afab8911c))
- **grafana:** grafana patch 8.0.3 to 8.0.7 for CVE-2021-43798 ([#694](https://github.com/redkubes/otomi-core/issues/694)) ([9e57423](https://github.com/redkubes/otomi-core/commit/9e574232a409808c1ccde551553b57e5e9f8291b))
- jobs ([#695](https://github.com/redkubes/otomi-core/issues/695)) ([c2b4580](https://github.com/redkubes/otomi-core/commit/c2b4580cdba9252d37919a1726c470fbea0055d2))
- bootstrap should only validate only input values [kind] ([#693](https://github.com/redkubes/otomi-core/issues/693)) ([288c7ec](https://github.com/redkubes/otomi-core/commit/288c7ec7400bf5ae325903bfb9fe09ec5237f72d))
- gatekeeper postinstall job securityContext ([#689](https://github.com/redkubes/otomi-core/issues/689)) ([07e3208](https://github.com/redkubes/otomi-core/commit/07e320855831abc97e79c76be17ca533334debc4)), closes [#688](https://github.com/redkubes/otomi-core/issues/688)
- secrets generation, more bootstrap tests ([#687](https://github.com/redkubes/otomi-core/issues/687)) ([86e7c31](https://github.com/redkubes/otomi-core/commit/86e7c3118635f9a9c290a6fb9b147cdc9ea5de09))
- ca made secret to not generate again, fixes [#681](https://github.com/redkubes/otomi-core/issues/681) ([a128bb1](https://github.com/redkubes/otomi-core/commit/a128bb168db734973bfe87147d92ae130fe468d7))
- chart install [ci skip] ([6c3a79f](https://github.com/redkubes/otomi-core/commit/6c3a79fb811f6289f304ca87039f03fc5c9f273f))
- export env ([#682](https://github.com/redkubes/otomi-core/issues/682)) ([cef235a](https://github.com/redkubes/otomi-core/commit/cef235a0f1eb297a450d03d3440426f2459e6c19))
- kind runner ([8c0694f](https://github.com/redkubes/otomi-core/commit/8c0694fac8f0d340db8ae0b6112089058ec52fb7))
- otomi tag check ([0218691](https://github.com/redkubes/otomi-core/commit/02186912a03152f0dfd279539726b8300be20a8a))
- wait for, chart value merge issues, clusterissuer ([#679](https://github.com/redkubes/otomi-core/issues/679)) ([a6cd524](https://github.com/redkubes/otomi-core/commit/a6cd52448ec422d48e46fadbf41b4e1f6e38389f))
- workflow changelog [ci skip] ([e4abd10](https://github.com/redkubes/otomi-core/commit/e4abd10da3c9347490cdae683b28e3749baaec6b))
- wrong usage of multitenant flag ([dbba831](https://github.com/redkubes/otomi-core/commit/dbba8314826f15778f6ec9937fabc203670d834f))
- removing authz header ([#674](https://github.com/redkubes/otomi-core/issues/674)) ([eefe171](https://github.com/redkubes/otomi-core/commit/eefe171833fda20df740eb2692a1a541548c230d))
- undesired error thrown ([54f6242](https://github.com/redkubes/otomi-core/commit/54f6242157948bc8588886318664f78387a81cce))

### Code Refactoring

- pulling api from docker hub ([#675](https://github.com/redkubes/otomi-core/issues/675)) ([9d8531f](https://github.com/redkubes/otomi-core/commit/9d8531f254ebb72b0bc48f9a166f7c619f3ec365))

### Tests

- **bootstrap:** initial test implementation with jest and dependency injection ([#676](https://github.com/redkubes/otomi-core/issues/676)) ([4c8a58b](https://github.com/redkubes/otomi-core/commit/4c8a58b3194bfca737f723a8ea37a1850a0150a7)), closes [#670](https://github.com/redkubes/otomi-core/issues/670)

### [0.14.52](https://github.com/redkubes/otomi-core/compare/v0.14.51...v0.14.52) (2021-12-01)

### Bug Fixes

- overwrite with input values ([#672](https://github.com/redkubes/otomi-core/issues/672)) ([1acf846](https://github.com/redkubes/otomi-core/commit/1acf8463391b3cbc04e1a391a38595022f36e06e))

### [0.14.51](https://github.com/redkubes/otomi-core/compare/v0.14.50...v0.14.51) (2021-11-30)

### Features

- expose values for knative serving replicas ([#669](https://github.com/redkubes/otomi-core/issues/669)) ([e833a39](https://github.com/redkubes/otomi-core/commit/e833a39cf429c5f3ffb7a76f600a6ec2b9dfa5e7))

### Bug Fixes

- api and console only need podsecuritycontext ([#671](https://github.com/redkubes/otomi-core/issues/671)) ([b6860e8](https://github.com/redkubes/otomi-core/commit/b6860e831dcea70276db2914684a36dc17ebbf77))

### [0.14.50](https://github.com/redkubes/otomi-core/compare/v0.14.49...v0.14.50) (2021-11-26)

### Features

- values for localhost deployment ([#662](https://github.com/redkubes/otomi-core/issues/662)) ([b7be95d](https://github.com/redkubes/otomi-core/commit/b7be95d085c190572cee92679d12c56eed50635a))

### Bug Fixes

- added ksvc, job, cronjob to policy scope ([#668](https://github.com/redkubes/otomi-core/issues/668)) ([62468d2](https://github.com/redkubes/otomi-core/commit/62468d244464189ed0c016490e7d8fec227404ac))
- allowed-users, api and console resources, values aligned ([dda5164](https://github.com/redkubes/otomi-core/commit/dda516440dd9cd317ef48ceb7ed1bc7ae791f428))
- always create password for registry ([#667](https://github.com/redkubes/otomi-core/issues/667)) ([eccf61a](https://github.com/redkubes/otomi-core/commit/eccf61a8e223c88f186dad4b1174da436f78b6c4))
- knative serving ([7e46eee](https://github.com/redkubes/otomi-core/commit/7e46eeeeb5bffbcc2b5bb6632470e8499ae864d3))
- satisfy knative pdb with min 5 containers (bleh) ([#663](https://github.com/redkubes/otomi-core/issues/663)) ([964b18f](https://github.com/redkubes/otomi-core/commit/964b18fa2bd7e4251ef62fff5f0f293407a351a8))

### [0.14.49](https://github.com/redkubes/otomi-core/compare/v0.14.48...v0.14.49) (2021-11-22)

### Bug Fixes

- wait for [ci skip] ([5c6e762](https://github.com/redkubes/otomi-core/commit/5c6e762a5a46043ab0d26a121659db810869f9f0))

### Others

- **release:** 0.14.48 ([ae4c647](https://github.com/redkubes/otomi-core/commit/ae4c647400c293da4812c1dfccac93f5fed1f87f))
- **release:** 0.14.48 ([11969f7](https://github.com/redkubes/otomi-core/commit/11969f70fc272c6cfa5f7accf742abf302eb75e7))
- **release:** 0.14.48 ([97d73a7](https://github.com/redkubes/otomi-core/commit/97d73a7106a9e821077fe3fe333d033756956951))

### [0.14.48](https://github.com/redkubes/otomi-core/compare/v0.14.47...v0.14.48) (2021-11-22)

### Features

- copy certs ([#660](https://github.com/redkubes/otomi-core/issues/660)) ([e201fbc](https://github.com/redkubes/otomi-core/commit/e201fbcca195ec7ddfbb8dc7bebb28f781dc665a))

### [0.14.47](https://github.com/redkubes/otomi-core/compare/v0.14.46...v0.14.47) (2021-11-22)

### Bug Fixes

- gatekeeper post job ([#664](https://github.com/redkubes/otomi-core/issues/664)) ([61a145b](https://github.com/redkubes/otomi-core/commit/61a145b0ec7eb194f6ab71b5eac3718a9cd3c427))
- harbor login ([#661](https://github.com/redkubes/otomi-core/issues/661)) ([d2af293](https://github.com/redkubes/otomi-core/commit/d2af293ba179964e45ac77aa158608aee1e2b977))
- revert harbor login ([#661](https://github.com/redkubes/otomi-core/issues/661)) ([#665](https://github.com/redkubes/otomi-core/issues/665)) ([1732fab](https://github.com/redkubes/otomi-core/commit/1732fabecf162e2e1762897f95352c1c8c7d4523))

### [0.14.46](https://github.com/redkubes/otomi-core/compare/v0.14.45...v0.14.46) (2021-11-18)

### Bug Fixes

- kube system ns excluded from patching as it is not allowed by some managed k8s providers ([c1f20f2](https://github.com/redkubes/otomi-core/commit/c1f20f260528f0f964ccb16e1a141aa31437c9f3))
- kube system ns excluded from patching as it is not allowed by some managed k8s providers ([adb50dc](https://github.com/redkubes/otomi-core/commit/adb50dcd95e4b168ac13ff995382ae8637adc51b))

### [0.14.45](https://github.com/redkubes/otomi-core/compare/v0.14.43...v0.14.45) (2021-11-16)

### Features

- kube context check ([#656](https://github.com/redkubes/otomi-core/issues/656)) ([d19288e](https://github.com/redkubes/otomi-core/commit/d19288e6f20a471ecf92d6cf28f863eca271adfa))

### Bug Fixes

- drone runner resources ([59a7501](https://github.com/redkubes/otomi-core/commit/59a7501b72ad41db96180c31b73fa282e0a54fe2))
- non existing ca is allowed ([5f2b4a0](https://github.com/redkubes/otomi-core/commit/5f2b4a013255befbf8a5df0801d4376d82093b71))
- now preserving source ip with external traffic policy local ([#657](https://github.com/redkubes/otomi-core/issues/657)) ([7ece91f](https://github.com/redkubes/otomi-core/commit/7ece91ff5070f407e4ab60253f4b32a178022e0b))
- vault selfsigned cert ([#659](https://github.com/redkubes/otomi-core/issues/659)) ([08af144](https://github.com/redkubes/otomi-core/commit/08af14460046aadb8fda4a5d7c326141870a1e80))
- wait for keycloak ([#658](https://github.com/redkubes/otomi-core/issues/658)) ([84988f4](https://github.com/redkubes/otomi-core/commit/84988f4e868734d4f6cbff8e4f8abe987caa5118))

### Code Refactoring

- **keycloak:** removed leftover logic related to disabling keycloak ([bd5a106](https://github.com/redkubes/otomi-core/commit/bd5a10672b27dfba3f118cd9049a3f21af42804f))

### Others

- add PR checklist ([#655](https://github.com/redkubes/otomi-core/issues/655)) ([73745bd](https://github.com/redkubes/otomi-core/commit/73745bdf0acb45c53abfb276df9de77918c005ea))
- **deps:** bumped api [ci skip] ([5aa2da1](https://github.com/redkubes/otomi-core/commit/5aa2da14e2163b3a9884564ca4655954f3c18414))
- **release:** 0.14.44 ([d153fe1](https://github.com/redkubes/otomi-core/commit/d153fe1c14500f5f8f1a2403db33e7682f310d10))

### [0.14.44](https://github.com/redkubes/otomi-core/compare/v0.14.43...v0.14.44) (2021-11-12)

### Features

- kube context check ([#656](https://github.com/redkubes/otomi-core/issues/656)) ([d19288e](https://github.com/redkubes/otomi-core/commit/d19288e6f20a471ecf92d6cf28f863eca271adfa))

### Bug Fixes

- drone runner resources ([59a7501](https://github.com/redkubes/otomi-core/commit/59a7501b72ad41db96180c31b73fa282e0a54fe2))

### Others

- add PR checklist ([#655](https://github.com/redkubes/otomi-core/issues/655)) ([73745bd](https://github.com/redkubes/otomi-core/commit/73745bdf0acb45c53abfb276df9de77918c005ea))

### [0.14.43](https://github.com/redkubes/otomi-core/compare/v0.14.42...v0.14.43) (2021-11-10)

### Bug Fixes

- missing schema items [ci skip] ([5702cfb](https://github.com/redkubes/otomi-core/commit/5702cfb3ef5c427701a8811f761d463085911921))

### [0.14.42](https://github.com/redkubes/otomi-core/compare/v0.14.41...v0.14.42) (2021-11-10)

### Others

- **deps:** bumped api [ci skip] ([49a9ef9](https://github.com/redkubes/otomi-core/commit/49a9ef93bb80a37b858d0677b21b070f64063b7d))

### [0.14.41](https://github.com/redkubes/otomi-core/compare/v0.14.40...v0.14.41) (2021-11-09)

### Bug Fixes

- bootstrap from final values [ci skip] ([4f2fff8](https://github.com/redkubes/otomi-core/commit/4f2fff83a732a9591c3df866deab5d607fa36db7))

### [0.14.40](https://github.com/redkubes/otomi-core/compare/v0.14.39...v0.14.40) (2021-11-09)

### Bug Fixes

- missing schema entries [ci skip] ([75dbe84](https://github.com/redkubes/otomi-core/commit/75dbe846cf85d005cac75899dbbfef0dcd732551))

### Others

- **deps:** bumped console and api [ci skip] ([ebec441](https://github.com/redkubes/otomi-core/commit/ebec44177b9e9c2e79333f137d5d07421e345efb))

### [0.14.39](https://github.com/redkubes/otomi-core/compare/v0.14.38...v0.14.39) (2021-11-08)

### Features

- add final message ([#653](https://github.com/redkubes/otomi-core/issues/653)) ([0bfed99](https://github.com/redkubes/otomi-core/commit/0bfed9976b696c3f400f86b4d3983a6fdd677b94))

### Bug Fixes

- ambiguous error on bootstrap ([#654](https://github.com/redkubes/otomi-core/issues/654)) ([2f223f6](https://github.com/redkubes/otomi-core/commit/2f223f60184945d785c4b971c8222ed5ceb75c3d))

### Build System

- fix integration uid ([da38726](https://github.com/redkubes/otomi-core/commit/da387261f3517c7f8e82fb7b78fb763c2b13fc53))

### [0.14.38](https://github.com/redkubes/otomi-core/compare/v0.14.37...v0.14.38) (2021-11-05)

### Others

- **deps:** bumped console [ci skip] ([947e161](https://github.com/redkubes/otomi-core/commit/947e161a874cad99d0ba6aec0715cf9c7989422a))

### [0.14.37](https://github.com/redkubes/otomi-core/compare/v0.14.36...v0.14.37) (2021-11-05)

### Bug Fixes

- kind invocation ([419dd72](https://github.com/redkubes/otomi-core/commit/419dd720d2ed92f504a260a55de875ade3053f39))
- moved ca data to api, bumped console, api [ci skip] ([8992ac6](https://github.com/redkubes/otomi-core/commit/8992ac60084f2b589e472bc01ca41f7411234144))
- validation, core detection ([e357dba](https://github.com/redkubes/otomi-core/commit/e357dba688bf039e190e51e48fa16ee3fae09d52))

### Others

- **deps:** bump validator from 13.6.0 to 13.7.0 ([#651](https://github.com/redkubes/otomi-core/issues/651)) ([e49842a](https://github.com/redkubes/otomi-core/commit/e49842ac0d8fe88dd39db144ba400dabc24ad9d5))

### [0.14.36](https://github.com/redkubes/otomi-core/compare/v0.14.35...v0.14.36) (2021-11-04)

### Features

- custom ca ([#648](https://github.com/redkubes/otomi-core/issues/648)) ([c04bb1d](https://github.com/redkubes/otomi-core/commit/c04bb1da1d01af6be516f65ff2f31b83c4d4e3fb))

### Others

- **deps:** bumped console [ci skip] ([afa071b](https://github.com/redkubes/otomi-core/commit/afa071be5f50dd9062f1f47f291e55868bc8d04d))

### [0.14.35](https://github.com/redkubes/otomi-core/compare/v0.14.34...v0.14.35) (2021-11-03)

### Others

- **deps:** bumped api [ci skip] ([c2ce98a](https://github.com/redkubes/otomi-core/commit/c2ce98a7e0334cb83c0c1aa09238377ef853d954))

### [0.14.34](https://github.com/redkubes/otomi-core/compare/v0.14.33...v0.14.34) (2021-11-03)

### Features

- added owasp and gatekeeper as apps for console, fixed dashboard links ([#645](https://github.com/redkubes/otomi-core/issues/645)) ([d9a0928](https://github.com/redkubes/otomi-core/commit/d9a0928982ec84d3e643ed1bd6661e04f110ef2c))
- upgrade vault-operator ([#644](https://github.com/redkubes/otomi-core/issues/644)) ([86ee9ab](https://github.com/redkubes/otomi-core/commit/86ee9aba657d1ced7faf6e6599f05dd3f0a191fa))

### Bug Fixes

- integration test is flaky and times out most of the time ([#647](https://github.com/redkubes/otomi-core/issues/647)) ([ca6cc47](https://github.com/redkubes/otomi-core/commit/ca6cc47b73671cbfe1e75359c04b57b2af92d59f))

### Others

- **deps:** bumped api [ci skip] ([6cb341a](https://github.com/redkubes/otomi-core/commit/6cb341a669d25a333ac5b5817eeef8c745825741))

### Code Refactoring

- **gatekeeper:** gatekeeper now by default nonblocking ([#646](https://github.com/redkubes/otomi-core/issues/646)) ([98e158a](https://github.com/redkubes/otomi-core/commit/98e158a915e720fd15900612698a877a70222a32))

### [0.14.33](https://github.com/redkubes/otomi-core/compare/v0.14.32...v0.14.33) (2021-11-01)

### Others

- **deps:** bumped api [ci skip] ([ed78043](https://github.com/redkubes/otomi-core/commit/ed78043a13783ef1956c06c79cba318b29c1652b))

### [0.14.32](https://github.com/redkubes/otomi-core/compare/v0.14.31...v0.14.32) (2021-10-31)

### Bug Fixes

- harbor pull secret ([903d6ba](https://github.com/redkubes/otomi-core/commit/903d6ba622d433b9033864316f677e928e74c460))

### [0.14.31](https://github.com/redkubes/otomi-core/compare/v0.14.30...v0.14.31) (2021-10-31)

### Others

- **deps:** bumped tasks [ci skip] ([7731a2c](https://github.com/redkubes/otomi-core/commit/7731a2cf5ddf26d0afe6a6c32343c668678710f6))

### [0.14.30](https://github.com/redkubes/otomi-core/compare/v0.14.29...v0.14.30) (2021-10-31)

### Bug Fixes

- extracted all gen files to tmp ([#642](https://github.com/redkubes/otomi-core/issues/642)) ([b829410](https://github.com/redkubes/otomi-core/commit/b829410b77ce3f785afa837a7db9868c50e4a753))
- gatekeeper artifacts ([4180b82](https://github.com/redkubes/otomi-core/commit/4180b82c47092e37264917a239644cc268e4af1b))
- gatekeeper artifacts ([488b21d](https://github.com/redkubes/otomi-core/commit/488b21d8ec75a7faf3fb5f6649458b8621e90303))
- missing files, cleaned templates ([f6334cc](https://github.com/redkubes/otomi-core/commit/f6334cc2be8f65064abbfeedd8a1f7e4c3691efb))
- re-enable integration ([bfac911](https://github.com/redkubes/otomi-core/commit/bfac911e82386dc667f003254cc7e44c4f0e9b7b))

### Others

- **deps:** bumped api [ci skip] ([61de1e1](https://github.com/redkubes/otomi-core/commit/61de1e1909565f14b066ce5d2dcf96e9c0451be6))

### [0.14.29](https://github.com/redkubes/otomi-core/compare/v0.14.28...v0.14.29) (2021-10-29)

### Bug Fixes

- missing trailing 'fi' ([1dc7611](https://github.com/redkubes/otomi-core/commit/1dc76119b23fff495f3dace03b2323d368d34a05))

### Others

- **deps:** upgrade harbor ([#639](https://github.com/redkubes/otomi-core/issues/639)) ([71d4d4f](https://github.com/redkubes/otomi-core/commit/71d4d4f1772d4640e7a8e67e3aeb7a75c33e1d3c))

### [0.14.28](https://github.com/redkubes/otomi-core/compare/v0.14.27...v0.14.28) (2021-10-29)

### Bug Fixes

- chart release logic ([d8e3f72](https://github.com/redkubes/otomi-core/commit/d8e3f72e81e45c98a17c9221ecfe401631a0cf6d))
- dockerfile entrypoint, harbor job regression ([5abf9e5](https://github.com/redkubes/otomi-core/commit/5abf9e50da437a2ed8f8b85b15a33dbbc9dada6c))
- dockerfile entrypoint, harbor job regression, part 2 ([e25b39d](https://github.com/redkubes/otomi-core/commit/e25b39d09e6f4165ec09dddb3ac3f76b62edd2c8))
- entrypoint back to cmd ([6e296c5](https://github.com/redkubes/otomi-core/commit/6e296c56434ebd5b5f36a5f5718be8a2287d3ec1))
- integration apply ([e20f1a6](https://github.com/redkubes/otomi-core/commit/e20f1a64b6690f7a254ac7fe0fcc16a90c297ee1))
- integration job disabled logic ([9dd5979](https://github.com/redkubes/otomi-core/commit/9dd597993b93b0dc6ef242f87eb6812faf3fc0eb))
- integration validate-values invocation ([b99a02c](https://github.com/redkubes/otomi-core/commit/b99a02c56c2976e1cbb119231f6ff33e1e416a23))
- integration validate-values invocation, [#2](https://github.com/redkubes/otomi-core/issues/2) ([4d11b8b](https://github.com/redkubes/otomi-core/commit/4d11b8be37faecb69db112429dc7a33f142b22a9))
- keycloak callback urls ([533836f](https://github.com/redkubes/otomi-core/commit/533836fa2edd9f5ddc685e01960e927ab62f6b89))
- keycloak callback urls now for all services ([5cb1087](https://github.com/redkubes/otomi-core/commit/5cb1087b8ce7acad6c20d2b0246cd275245414a3))
- local `kint` after refactor ([#640](https://github.com/redkubes/otomi-core/issues/640)) ([fb598a8](https://github.com/redkubes/otomi-core/commit/fb598a821d0abce84e47083fce346b51c44b4458))

### Others

- **release:** 0.14.27 ([e26af2e](https://github.com/redkubes/otomi-core/commit/e26af2e86023082898c781a173e1e290085a0e18))

### [0.14.27](https://github.com/redkubes/otomi-core/compare/v0.14.26...v0.14.27) (2021-10-28)

### Features

- automated integration tests [#195](https://github.com/redkubes/otomi-core/issues/195) ([#595](https://github.com/redkubes/otomi-core/issues/595)) ([cc2482b](https://github.com/redkubes/otomi-core/commit/cc2482bc19bf0a822789363d2727b59255c616d5))

### Bug Fixes

- github registry credentials ([2694145](https://github.com/redkubes/otomi-core/commit/269414545e4accb681e575aef015c522b8b5d276))
- github registry credentials, part 2 ([c9319c9](https://github.com/redkubes/otomi-core/commit/c9319c9b925320cdf79d8b6107b475f11ba3ee7a))
- github registry credentials, part 3 ([4999da7](https://github.com/redkubes/otomi-core/commit/4999da755b6a5ab40a1275eecb1cf05271ac9b7c))
- **integration:** old image from public repo was used instead of newly built ([7673fd7](https://github.com/redkubes/otomi-core/commit/7673fd75350e378c2b412743f2a99ee31697117a))
- **integration:** workflow now pushes image after succesful build and no integration is needed ([51d62a1](https://github.com/redkubes/otomi-core/commit/51d62a1957a921650b99343318329c3ed1f6490e))
- job name ([75eb7e4](https://github.com/redkubes/otomi-core/commit/75eb7e4920667be22e7bb85efba95b52daf24216))
- pipeline job ordering ([e6ae49c](https://github.com/redkubes/otomi-core/commit/e6ae49c127a7b4373e063248b321df9e5d2c58d0))
- pull before push ([eeb983a](https://github.com/redkubes/otomi-core/commit/eeb983a428f74e6b5dc52d1d13a1b002b33eea59))
- simplified chart release logic as it always needs to happen after release ([07439d8](https://github.com/redkubes/otomi-core/commit/07439d86a8ee00ddc26f651e22d627bfc25d5719))
- tag for push ([ffc7039](https://github.com/redkubes/otomi-core/commit/ffc7039b5d428f05e80d279a36ca252e9397c85e))

### [0.14.26](https://github.com/redkubes/otomi-core/compare/v0.14.25...v0.14.26) (2021-10-27)

### Bug Fixes

- faulty drone provider defaults [ci skip] ([dcb001c](https://github.com/redkubes/otomi-core/commit/dcb001c705994c1eb1fe0e7a2a161a54d7db315a))

### [0.14.25](https://github.com/redkubes/otomi-core/compare/v0.14.24...v0.14.25) (2021-10-27)

### Features

- **system:** enables snapshots on aws ([#629](https://github.com/redkubes/otomi-core/issues/629)) ([7054947](https://github.com/redkubes/otomi-core/commit/705494746caac1222f4553a56e6b584c7b4ba02f))

### Others

- **chart:** bump version ([dfeb45e](https://github.com/redkubes/otomi-core/commit/dfeb45ec70681f233d014f075008812d06666d93))

### Code Refactoring

- **env:** abstracting away CI ([#633](https://github.com/redkubes/otomi-core/issues/633)) ([a2a46cf](https://github.com/redkubes/otomi-core/commit/a2a46cf711350d2bc8fe35f0491211c2f251bb55))

### [0.14.24](https://github.com/redkubes/otomi-core/compare/v0.14.23...v0.14.24) (2021-10-22)

### [0.14.23](https://github.com/redkubes/otomi-core/compare/v0.14.22...v0.14.23) (2021-10-22)

### Bug Fixes

- Bug where tr can't parse /dev/urandom force UTF-8 chars ([#631](https://github.com/redkubes/otomi-core/issues/631)) ([bcf675e](https://github.com/redkubes/otomi-core/commit/bcf675e3e9b2c43e993b0abd74c79b72494a84e0))
- **schema:** allows empty array for alerts.receivers next to null ([#630](https://github.com/redkubes/otomi-core/issues/630)) ([4dc169d](https://github.com/redkubes/otomi-core/commit/4dc169d9be21e9a8d1542922b5f07a39d891e96a))

### [0.14.22](https://github.com/redkubes/otomi-core/compare/v0.14.21...v0.14.22) (2021-10-18)

### Features

- **cli:** sets kubecontext when known ([03a074f](https://github.com/redkubes/otomi-core/commit/03a074f203951865c9ce379d9022a77e3c42d619)), closes [#624](https://github.com/redkubes/otomi-core/issues/624)
- **defaults:** defaults and derivatives are now separated from file based values ([#627](https://github.com/redkubes/otomi-core/issues/627)) ([1fae313](https://github.com/redkubes/otomi-core/commit/1fae313b2a8611e7f63dcf9581318e796e45dca2))
- DNS Suffix fallback in CLI code ([#623](https://github.com/redkubes/otomi-core/issues/623)) ([59841eb](https://github.com/redkubes/otomi-core/commit/59841eb34b36d4e1c973c591b2235c64b25312e5))
- scan only istio-system namespace for Ingress configuration ([#619](https://github.com/redkubes/otomi-core/issues/619)) ([77fea30](https://github.com/redkubes/otomi-core/commit/77fea3093b7b838eb9a94f5207d73748a099a536))

### Bug Fixes

- caching issues, fixes [#559](https://github.com/redkubes/otomi-core/issues/559) ([967ae4e](https://github.com/redkubes/otomi-core/commit/967ae4eaf6b8d61cf3ab87c343dbe9779bf6b153))
- chart install, job-keycloak order (fixes [#559](https://github.com/redkubes/otomi-core/issues/559)) ([9d1065d](https://github.com/redkubes/otomi-core/commit/9d1065d11a14b21261f1a4f424c853e94c887250))
- nginx moved up, got label stage=prep ([6a968da](https://github.com/redkubes/otomi-core/commit/6a968da5258afa0d97c46c38e9e63375506daaf4))

### Others

- **deps:** bumped console to v0.4.61 ([6b3af3d](https://github.com/redkubes/otomi-core/commit/6b3af3d50d29ca3f5fa62e2a69ef666a3b8cdbe5))

### Docs

- **adr:** added adr concerning defaults and derived values [ci skip] ([f98b8cb](https://github.com/redkubes/otomi-core/commit/f98b8cb702064149331111ed5d2015a9b5f6ba9f))

### [0.14.21](https://github.com/redkubes/otomi-core/compare/v0.14.20...v0.14.21) (2021-10-15)

### Bug Fixes

- blocking default value [ci skip] ([700514d](https://github.com/redkubes/otomi-core/commit/700514d9e248ca3824ec9ca7c0797303323d1292))

### [0.14.20](https://github.com/redkubes/otomi-core/compare/v0.14.19...v0.14.20) (2021-10-14)

### Bug Fixes

- alertmanager disabled ([73ea345](https://github.com/redkubes/otomi-core/commit/73ea3455f5d9301ea419c20c0a56d7ed457c37ec))
- empty checks, bumped tasks ([625bbb7](https://github.com/redkubes/otomi-core/commit/625bbb7041d427aa2bfe31284225fe9bfa6c6698))
- node flag [ci skip] ([853f49b](https://github.com/redkubes/otomi-core/commit/853f49b871251e90e6b511f504e79adc1e718d04))
- parenthesis ([02c4f73](https://github.com/redkubes/otomi-core/commit/02c4f73082ca0ca8f306c906c5d5f1a3d934286c))
- revert versions [ci skip] ([47fa587](https://github.com/redkubes/otomi-core/commit/47fa587be75fefe4eca0bc4ff4e9bdb172ece153))
- reverted some defaults to avoid false validation errors ([905d78e](https://github.com/redkubes/otomi-core/commit/905d78e150236d9e44a9af232158f581ffdd8148))
- schema enabled flags ([f0d75d6](https://github.com/redkubes/otomi-core/commit/f0d75d62d4ac96307169161848817d0c736d2e1b))

### Others

- **deps:** bumped prom, alertmanager [ci skip] ([4d965c1](https://github.com/redkubes/otomi-core/commit/4d965c1830d89ff6672c88738b046e3c77af3fcf))
- **release:** 0.14.20 ([588f42a](https://github.com/redkubes/otomi-core/commit/588f42af6e418a7eb0e729199a066744f6beeb0a))

### [0.14.19](https://github.com/redkubes/otomi-core/compare/v0.14.18...v0.14.19) (2021-10-13)

### Bug Fixes

- v + otomi version [ci skip] ([bf66730](https://github.com/redkubes/otomi-core/commit/bf6673054a3aa7c2edebbbb6c41ee65b7edc6937))

### [0.14.18](https://github.com/redkubes/otomi-core/compare/v0.14.17...v0.14.18) (2021-10-13)

### Bug Fixes

- defaults for charts and some other config, round 1 ([db41125](https://github.com/redkubes/otomi-core/commit/db41125add1197f6d9338994644e2ce133c52a18))

### Tests

- **values:** removed unused values [ci skip] ([0dd2505](https://github.com/redkubes/otomi-core/commit/0dd2505e05597c373e1f47ac8b073d226d3dd699))

### [0.14.17](https://github.com/redkubes/otomi-core/compare/v0.14.16...v0.14.17) (2021-10-13)

### Others

- **deps:** bumped api and console ([f2e3abe](https://github.com/redkubes/otomi-core/commit/f2e3abe0a8f82edbb959e5f5515a65dc61144c7a))
- **release:** 0.14.17 ([20c93c2](https://github.com/redkubes/otomi-core/commit/20c93c24211911a8502d8e98e55d4e1ec83748f0))

### [0.14.16](https://github.com/redkubes/otomi-core/compare/v0.14.15...v0.14.16) (2021-10-13)

### Bug Fixes

- downgraded helm to avoid false lint errors ([a3718b2](https://github.com/redkubes/otomi-core/commit/a3718b27de362822cbd4f834c45e93c9a2dd215f))

### [0.14.15](https://github.com/redkubes/otomi-core/compare/v0.14.14...v0.14.15) (2021-10-12)

### Bug Fixes

- chart default version ([ba17214](https://github.com/redkubes/otomi-core/commit/ba172148520c0fc6623f053aa17d983c2a8f7516))
- letsencrypt expired intermediate, upgraded tools [ci skip] ([ea1ea07](https://github.com/redkubes/otomi-core/commit/ea1ea0735295f2cf53c04663d4363e56e36619a1))
- perform cryptography after all values in place ([#620](https://github.com/redkubes/otomi-core/issues/620)) ([d450255](https://github.com/redkubes/otomi-core/commit/d4502555b30c64a23046f6fc4ca1bfc5b6c56f45)), closes [#617](https://github.com/redkubes/otomi-core/issues/617)
- removed console output [ci skip] ([0340a63](https://github.com/redkubes/otomi-core/commit/0340a63a6b33d7f3474947d71c94779bde609e49))
- removed unneeded enforcement of .secrets file ([4cdc32b](https://github.com/redkubes/otomi-core/commit/4cdc32b7abb395ed3d350d6b42ad261859c43867))

### Others

- **chart:** bumped otomi version ([c7aaba5](https://github.com/redkubes/otomi-core/commit/c7aaba5f078913d63b57a27cbe4bf6b305681dd4))

### [0.14.14](https://github.com/redkubes/otomi-core/compare/v0.14.12...v0.14.14) (2021-10-11)

### Bug Fixes

- ksvc virtual service mapping, otomi has docker check ([e094134](https://github.com/redkubes/otomi-core/commit/e094134de6a2aa65120d0787041a81c96cc2ee61))
- sonar issue [ci skip] ([4054e95](https://github.com/redkubes/otomi-core/commit/4054e95730dfc0a81548905fa4f9a0b933f8e5e3))
- validate-templates fix ([0fad7f2](https://github.com/redkubes/otomi-core/commit/0fad7f2404ca1f53a6de87a36f930c9d78463dc4))
- yaml dump indent 4, bump api [ci skip] ([64c501e](https://github.com/redkubes/otomi-core/commit/64c501ef56511aa4e0caa97ae4c8ef68c5523039))

### Others

- **release:** 0.14.13 ([5c699a6](https://github.com/redkubes/otomi-core/commit/5c699a65d8dbd9b7bc913256fbf07f4c5b474e4c))

### Build System

- **chart:** fix slack logic [ci skip] ([2b2bca0](https://github.com/redkubes/otomi-core/commit/2b2bca0bf91cab8f64be3ca29b5d8e9eb59cd916))
- **chart:** fix version detection ([35784ca](https://github.com/redkubes/otomi-core/commit/35784ca26373ffa1f543dcdd149be2e72377b6cd))
- **chart:** version detection ([a82d432](https://github.com/redkubes/otomi-core/commit/a82d432aaa3a120b4cca934f3f10632f00cef91b))

### [0.14.13](https://github.com/redkubes/otomi-core/compare/v0.14.12...v0.14.13) (2021-10-09)

### Bug Fixes

- yaml dump indent 4, bump api [ci skip] ([64c501e](https://github.com/redkubes/otomi-core/commit/64c501ef56511aa4e0caa97ae4c8ef68c5523039))

### [0.14.12](https://github.com/redkubes/otomi-core/compare/v0.14.11...v0.14.12) (2021-10-09)

### Bug Fixes

- tools server always running [ci skip] ([bf3dbc1](https://github.com/redkubes/otomi-core/commit/bf3dbc12a8b99bdf8822d4a7c8dafe6405171fe3))

### Others

- **chart:** bump ([a305375](https://github.com/redkubes/otomi-core/commit/a3053753008cd443aa333f3aaaad89bdbd3a4186))

### [0.14.11](https://github.com/redkubes/otomi-core/compare/v0.14.10...v0.14.11) (2021-10-09)

### Features

- allow keycloak to act as idp ([#613](https://github.com/redkubes/otomi-core/issues/613)) ([a996ab6](https://github.com/redkubes/otomi-core/commit/a996ab6079550b4d0de63b71d9fd2dd254117e52))

### Bug Fixes

- added customRootCA to schema ([a45fd9b](https://github.com/redkubes/otomi-core/commit/a45fd9b4fbc574aaeab84b6f4eb566578d303e66))
- missing await in destroy, lint issues ([3c35126](https://github.com/redkubes/otomi-core/commit/3c35126833a4b3393828501f1e271a44265498f9))
- missing quotes around templated object ([#608](https://github.com/redkubes/otomi-core/issues/608)) ([37ca857](https://github.com/redkubes/otomi-core/commit/37ca857cc460d662db74ab2a521cbf53b7f6a971)), closes [#607](https://github.com/redkubes/otomi-core/issues/607)
- removed unused tenant from oidc, added home alerts to drone, channel names ([2b16fc3](https://github.com/redkubes/otomi-core/commit/2b16fc3d72343fdeeb3f9da4ed4969cc1cb72ae9))

### Build System

- **chart:** allow chart bump on master instead of only upon release ([17a2068](https://github.com/redkubes/otomi-core/commit/17a20680ce1fed36bad5e74f22cfb081c9aa567b))
- **commitizen:** updated commitizen and husky setup to start cz wizard upon invalid msg ([#609](https://github.com/redkubes/otomi-core/issues/609)) ([d821518](https://github.com/redkubes/otomi-core/commit/d821518dfdb5be22ab8771187d8a58c490f918a2))
- **readme:** readme now inserted into chart with values.md appended, small schema fix ([#610](https://github.com/redkubes/otomi-core/issues/610)) ([3e85a3d](https://github.com/redkubes/otomi-core/commit/3e85a3d345720b266c2b452ec3fc0464b3f9ec92))
- removing unused pkg [ci skip] ([a5baf37](https://github.com/redkubes/otomi-core/commit/a5baf3747eeca38c00d89b24209ebed11dd99383))

### Others

- **deps:** bumped tasks, api, console [ci skip] ([b0e31f8](https://github.com/redkubes/otomi-core/commit/b0e31f8e1206620a175caf51e8b40158ce32f1d2))

### [0.14.10](https://github.com/redkubes/otomi-core/compare/v0.14.9...v0.14.10) (2021-09-28)

### Bug Fixes

- restore gitea url with creds ([07d1611](https://github.com/redkubes/otomi-core/commit/07d161145a1209284c4552b03a8fe00f09907d5b))
- versions ([32c1ab5](https://github.com/redkubes/otomi-core/commit/32c1ab56dc0129f144a5a86a222ac603633c6dd3))

### Others

- **deps:** updated console ([89e5813](https://github.com/redkubes/otomi-core/commit/89e5813b9890583504e446043823a6b56294174d))
- **release:** 0.14.9 ([9c957ce](https://github.com/redkubes/otomi-core/commit/9c957ce9f0a9b44a0ea090dfab1ab182f4f999d3))

### [0.14.8](https://github.com/redkubes/otomi-core/compare/v0.14.7...v0.14.8) (2021-09-24)

### Bug Fixes

- [#516](https://github.com/redkubes/otomi-core/issues/516) - CLI Updating fails ([#593](https://github.com/redkubes/otomi-core/issues/593)) ([57acffd](https://github.com/redkubes/otomi-core/commit/57acffdab471aa62dbf288275565836992b599e0))
- add hasCert, certArn, certName to schema ([#599](https://github.com/redkubes/otomi-core/issues/599)) ([9044a44](https://github.com/redkubes/otomi-core/commit/9044a441f0b783f56548833b14f2c961e888305d))
- image config for core ([0a586d9](https://github.com/redkubes/otomi-core/commit/0a586d9573ae7db5a46c09c974685ec3c4ba7d87))
- imagePullPolicy..doh ([890af9f](https://github.com/redkubes/otomi-core/commit/890af9fa1351df70218912b3ae7fbe3b8ab250fb))
- otomi core check ([c87360d](https://github.com/redkubes/otomi-core/commit/c87360d7a14dff30af09877367c2b9380a84c7c9))
- pullpolicy always if non-semver for waitFor init ([3d47c0f](https://github.com/redkubes/otomi-core/commit/3d47c0f01955f2a6169211a7f299cb24a0e52ca7))
- schema props unrequired ([6f6765f](https://github.com/redkubes/otomi-core/commit/6f6765ff08b2f1327c846692a746edca2803f0f1))
- securityContext for waitForUrl ([6583375](https://github.com/redkubes/otomi-core/commit/658337545a928f7c45bb48fe976632630100f46a))
- team alerts, prom monitors for core apps ([#598](https://github.com/redkubes/otomi-core/issues/598)) ([4313f99](https://github.com/redkubes/otomi-core/commit/4313f99ed9e327a77501311f34ef0184ae2c513a))

### [0.14.7](https://github.com/redkubes/otomi-core/compare/v0.14.6...v0.14.7) (2021-09-23)

### Features

- create wait-for command, and implement as init cntr ([#581](https://github.com/redkubes/otomi-core/issues/581)) ([3df6f7f](https://github.com/redkubes/otomi-core/commit/3df6f7f018ccebfb1955517c0c0059b5d6cc4c27))

### Bug Fixes

- await for file generation ([#588](https://github.com/redkubes/otomi-core/issues/588)) ([ade0c71](https://github.com/redkubes/otomi-core/commit/ade0c71e54229cad86974557ef57d288689c389c))
- changes some secrets requirements. ([#579](https://github.com/redkubes/otomi-core/issues/579)) ([bc0dec5](https://github.com/redkubes/otomi-core/commit/bc0dec58061b87d9081355de5cd65b2750995897))
- chart publication logic ([#583](https://github.com/redkubes/otomi-core/issues/583)) ([751b000](https://github.com/redkubes/otomi-core/commit/751b000d354522473a68c2e1fc7ee818fc0052ff))
- commitOnFirstRun should only wait for gitea ([61249ce](https://github.com/redkubes/otomi-core/commit/61249ce7b2acde8b449a3b585c32ceb5158d6791))
- drone resources ([#597](https://github.com/redkubes/otomi-core/issues/597)) ([bddcd6c](https://github.com/redkubes/otomi-core/commit/bddcd6c2f915e1993bb0b9ef5fbdf297a6080206))
- initial cli commit cant happen as creds dont get mounted ([#589](https://github.com/redkubes/otomi-core/issues/589)) ([63d4326](https://github.com/redkubes/otomi-core/commit/63d4326dfa5c920c9ec7fad2f22c1e7332e8ed5c))
- schema for azure monitor ([237db52](https://github.com/redkubes/otomi-core/commit/237db52d72270082b587822494ea68c73ada06f4))
- show help when no command given (fixes: [#582](https://github.com/redkubes/otomi-core/issues/582)) ([14ec04b](https://github.com/redkubes/otomi-core/commit/14ec04b1b88e5adc9d26f22186d24381930d0aff))
- upload limit nginx ([49b03ec](https://github.com/redkubes/otomi-core/commit/49b03ecfcf3a7e44045e3214a01e4e3db330f6fc))

### Others

- **deps:** updated console and api ([5cef127](https://github.com/redkubes/otomi-core/commit/5cef127cd64dc3e264e0f3f0730212f15ff15464))
- Update README.md ([#584](https://github.com/redkubes/otomi-core/issues/584)) ([285d858](https://github.com/redkubes/otomi-core/commit/285d858db276f89044c7e70b6c2fd10df612513c))

### [0.14.6](https://github.com/redkubes/otomi-core/compare/v0.14.5...v0.14.6) (2021-09-03)

### Bug Fixes

- harbor enabled by default [ci skip] ([8b57522](https://github.com/redkubes/otomi-core/commit/8b57522be69dede420c107b4adb3dadb1938f8d8))

### Others

- **release:** 0.14.5 ([3f121bf](https://github.com/redkubes/otomi-core/commit/3f121bf64eaad564d76c658aa40a74160b9ddac7))

### [0.14.4](https://github.com/redkubes/otomi-core/compare/v0.14.2...v0.14.4) (2021-09-02)

### Bug Fixes

- ksvc sidecar annotations, drone without alerts ([db26520](https://github.com/redkubes/otomi-core/commit/db26520e998a4241e6318e82d83e92a634a737e4))
- otomi server create symlink ([#570](https://github.com/redkubes/otomi-core/issues/570)) ([b01d2d5](https://github.com/redkubes/otomi-core/commit/b01d2d545144aa033ca5424b7907e146d201bee2))
- server regression ([79eb51e](https://github.com/redkubes/otomi-core/commit/79eb51e4779dee2844b945fe10d7f5dca36fdf8e))

### Others

- **release:** 0.14.3 ([d9810ae](https://github.com/redkubes/otomi-core/commit/d9810ae5018a9825fa43fc99ffed6e9ac9478928))

### [0.14.3](https://github.com/redkubes/otomi-core/compare/v0.14.2...v0.14.3) (2021-09-02)

### Bug Fixes

- ksvc sidecar annotations, drone without alerts ([db26520](https://github.com/redkubes/otomi-core/commit/db26520e998a4241e6318e82d83e92a634a737e4))
- otomi server create symlink ([#570](https://github.com/redkubes/otomi-core/issues/570)) ([b01d2d5](https://github.com/redkubes/otomi-core/commit/b01d2d545144aa033ca5424b7907e146d201bee2))
- server regression ([79eb51e](https://github.com/redkubes/otomi-core/commit/79eb51e4779dee2844b945fe10d7f5dca36fdf8e))

### [0.14.2](https://github.com/redkubes/otomi-core/compare/v0.14.1...v0.14.2) (2021-09-02)

### Bug Fixes

- cli bootstrap, default for isMultitenant, pinned versions ([e1a3d44](https://github.com/redkubes/otomi-core/commit/e1a3d443737dbc866039312fc432c34a951d1572))

### [0.14.1](https://github.com/redkubes/otomi-core/compare/v0.14.0...v0.14.1) (2021-09-02)

## [0.14.0](https://github.com/redkubes/otomi-core/compare/v0.13.11...v0.14.0) (2021-09-02)

### ⚠ BREAKING CHANGES

- 🧨 New CLI Introduced

After too many painful dev cycles with bash scripting we decided to rewrite the CLI. Since we are a typescript oriented team and focusing mostly on configuration of 3rd party apps we decided to use typescript all the way.

Most notable features:

- built using github.com/google/zx: Google's zx approach offers us as a nice way to wrap our tooling.
- improved handling of input parameters using yargs
- granular colorized debug output: using familiar levels such as log (always printed to stdout), debug, info, warn, error (always printed to stderr)
- command autocompletion
- improved tracing of code
- friendly installer: will ask where to install, wether to install autocompletion scripts
- auto upgrade: the user will basked to upgrade if a new version exists
- improved readability, testability and maintainability

### Features

- add linux workaround ([#473](https://github.com/redkubes/otomi-core/issues/473)) ([660a6ab](https://github.com/redkubes/otomi-core/commit/660a6abe976e2cc450075f81379c0fb14913d14e))
- add team services env to otomi-console for ce mode ([#469](https://github.com/redkubes/otomi-core/issues/469)) ([1305406](https://github.com/redkubes/otomi-core/commit/130540664f40d4aab9e91936d0c73962f7fed1cd))
- adding json schema to chart ([#462](https://github.com/redkubes/otomi-core/issues/462)) ([e1e5486](https://github.com/redkubes/otomi-core/commit/e1e5486a866c4ca399e23ccd8a5c95236a155e20))
- automatic passwords generation ([#510](https://github.com/redkubes/otomi-core/issues/510)) ([493db2d](https://github.com/redkubes/otomi-core/commit/493db2da990120499f1b57a42f0c7cb6392f8502))
- bump chart version ([618fb36](https://github.com/redkubes/otomi-core/commit/618fb36f2c65b610ab4f2a2993778d991208fc96))
- global pull secret ([ab4d832](https://github.com/redkubes/otomi-core/commit/ab4d832c1eabc26f3f77d53ab6198374ffb34f25))
- in container debugging [ci skip] ([94a330a](https://github.com/redkubes/otomi-core/commit/94a330a9b3ca2a3612241f00e2aa274dd8b93853))
- podspec fsgroup ([#549](https://github.com/redkubes/otomi-core/issues/549)) ([e43d1c1](https://github.com/redkubes/otomi-core/commit/e43d1c10dafb292e720972025411d25ccd15d35e))
- rename customer.name to cluster.owner ([#480](https://github.com/redkubes/otomi-core/issues/480)) ([50b254b](https://github.com/redkubes/otomi-core/commit/50b254b44f1c449c3c693bd423f79e233a6c7410))
- the new CLI ([#451](https://github.com/redkubes/otomi-core/issues/451)) ([f2389de](https://github.com/redkubes/otomi-core/commit/f2389decddeef3a5d06effc20167f3a24c32cca3))

### Bug Fixes

- 🐛 [#529](https://github.com/redkubes/otomi-core/issues/529) - make domainSuffix required ([#543](https://github.com/redkubes/otomi-core/issues/543)) ([5c42aae](https://github.com/redkubes/otomi-core/commit/5c42aae303a40c05fab62aa6c417ba631ce73deb))
- 🐛 gitea-push, after refactor process exit wast ran ([#501](https://github.com/redkubes/otomi-core/issues/501)) ([c3d81da](https://github.com/redkubes/otomi-core/commit/c3d81da40a3017d1bc4c7170c4e730d2bec5542d))
- 🐛 redkubes/unassigned-issues[#253](https://github.com/redkubes/otomi-core/issues/253) make otomi x parse all ([#544](https://github.com/redkubes/otomi-core/issues/544)) ([33fe464](https://github.com/redkubes/otomi-core/commit/33fe4647fda8123c36ea92d12d1740e6a70f3879))
- added skipcache to bypass cached values for chart ([14a2ad9](https://github.com/redkubes/otomi-core/commit/14a2ad902d33d89b11b55dd0172de37019a27288))
- adding pullsecret to team ns (closes redkubes/unassigned-issues[#244](https://github.com/redkubes/otomi-core/issues/244) ([8ba6d6d](https://github.com/redkubes/otomi-core/commit/8ba6d6dcea4fe986664c72bd2a7b213c229591f4))
- alertmanager will be enabled only if alerts block is provided in values.yaml in chart ([#477](https://github.com/redkubes/otomi-core/issues/477)) ([4daa9b1](https://github.com/redkubes/otomi-core/commit/4daa9b1113deceaf3401c3eb4149d763ee89585e))
- app enabled flags, removed all ce refs, added custom ca placeholders ([#546](https://github.com/redkubes/otomi-core/issues/546)) ([65a3dbf](https://github.com/redkubes/otomi-core/commit/65a3dbf8dff9991ff1e729c4dcf21731b935359e))
- auto encrypting in vscode disabled as it also operates on .dec files ([#533](https://github.com/redkubes/otomi-core/issues/533)) ([c02c70c](https://github.com/redkubes/otomi-core/commit/c02c70c3543edad9d1eecc851316111dbeb386e0))
- bats [ci skip] ([bf03b12](https://github.com/redkubes/otomi-core/commit/bf03b1216e6d8e895797c2209cfc06c54df813d0))
- better rootdir for drone ([0f2362b](https://github.com/redkubes/otomi-core/commit/0f2362b54b771da20b297500803f335392fb0b32))
- bootstrap ([67712b3](https://github.com/redkubes/otomi-core/commit/67712b3d5580642f49081bb034e1ac79be1fc195))
- bootstrap, encryption ([3582453](https://github.com/redkubes/otomi-core/commit/358245383d6778760ca3ff1ddecf8083383a5052))
- bugs in cli ([#528](https://github.com/redkubes/otomi-core/issues/528)) ([ca67be4](https://github.com/redkubes/otomi-core/commit/ca67be4f2785e1faf6b71073b8118db38015e420))
- bump semver to 0.4.51 ([#474](https://github.com/redkubes/otomi-core/issues/474)) ([c2a5de8](https://github.com/redkubes/otomi-core/commit/c2a5de882305ae23ab6f591656f81f9223025d59))
- bumped other task images ([0424c07](https://github.com/redkubes/otomi-core/commit/0424c074ee49b333a0ccfff8d97199c497b35f57))
- cd issues, chart bump ([7525219](https://github.com/redkubes/otomi-core/commit/7525219606073e51ca1d443a9a83c7b389bcce92))
- cli values too early ([dd1145b](https://github.com/redkubes/otomi-core/commit/dd1145b11b927d4b34121e4f100e1ec9419b3e45))
- cli, defaults ([edf0f26](https://github.com/redkubes/otomi-core/commit/edf0f26bb357295a0890bc746fcababd3a5405ac))
- cluster provider typo ([#481](https://github.com/redkubes/otomi-core/issues/481)) ([eb7313a](https://github.com/redkubes/otomi-core/commit/eb7313ae712b6b611cb59d1fb6d7e41f03fcfa06))
- console non root port 8080, tools resources ([#541](https://github.com/redkubes/otomi-core/issues/541)) ([b890229](https://github.com/redkubes/otomi-core/commit/b890229af8f855ea1f7ca4a5edf3ba8b8fdab592))
- console run as user/group ([#534](https://github.com/redkubes/otomi-core/issues/534)) ([1255fb4](https://github.com/redkubes/otomi-core/commit/1255fb4f70806937c8e1806d17d23e73a590f10e))
- core image tag reading from otomi.version ([#479](https://github.com/redkubes/otomi-core/issues/479)) ([793a523](https://github.com/redkubes/otomi-core/commit/793a5232adbaf5a115a9410edb45898e67e14616))
- create symbolic link on request to server ([#564](https://github.com/redkubes/otomi-core/issues/564)) ([3688fb8](https://github.com/redkubes/otomi-core/commit/3688fb85a11aae7052f8c11f4f49d7ee7e85c240))
- crypt timestamp sync, .. in env dir guard ([#532](https://github.com/redkubes/otomi-core/issues/532)) ([8d9479c](https://github.com/redkubes/otomi-core/commit/8d9479cc5f862d4fdfda2363b72ecd4dce4d9fc7))
- debugger ([#536](https://github.com/redkubes/otomi-core/issues/536)) ([e9207ca](https://github.com/redkubes/otomi-core/commit/e9207cabea67f91e3962492815911c991d3873d1))
- default apps ([2d5f3ea](https://github.com/redkubes/otomi-core/commit/2d5f3ea28d86aff9e6172b80097987328012dc5c))
- drone root ca image for staging ([6cbc671](https://github.com/redkubes/otomi-core/commit/6cbc671b51473695fdfe2f156525f350127c7e2e))
- drone uid, commit ([f73165d](https://github.com/redkubes/otomi-core/commit/f73165d256087a45c15b1b5cdbbf71493114bf2c))
- duplicate sa bug ([8eb060e](https://github.com/redkubes/otomi-core/commit/8eb060eab17d3ee2980bd328747d20576c2064a6))
- extra root ca image for staging ([f218659](https://github.com/redkubes/otomi-core/commit/f2186591dbe6a8db0730ea1b221c93f5b2a38c0f))
- extract secrets path bug fixed ([#506](https://github.com/redkubes/otomi-core/issues/506)) ([e93c137](https://github.com/redkubes/otomi-core/commit/e93c1377ddcf17c5fdf9b20d345ad8a6a4840048))
- file refs, api version ([19d9333](https://github.com/redkubes/otomi-core/commit/19d933322e7838cddd02fcdeb18999bf13d0f0cd))
- fsgroup int ([#552](https://github.com/redkubes/otomi-core/issues/552)) ([f9cd999](https://github.com/redkubes/otomi-core/commit/f9cd9997299354e16a107f82649a15a98a23a6a9))
- gatekeeper run level ([b4466b1](https://github.com/redkubes/otomi-core/commit/b4466b124275d78ca77de0d9f2cd3fedb7e339bf))
- gen drone ([914b825](https://github.com/redkubes/otomi-core/commit/914b825de96034e975e79172fd09e54e571559be))
- git push ([#539](https://github.com/redkubes/otomi-core/issues/539)) ([0b4577a](https://github.com/redkubes/otomi-core/commit/0b4577a1766575351d9581667ccfa36586becd1e))
- gitea initcontainer ca volumeMount name fixed ([#470](https://github.com/redkubes/otomi-core/issues/470)) ([c037c24](https://github.com/redkubes/otomi-core/commit/c037c248f2de4ab5401651037cc2138edd61cb8e))
- harbor base url ([2135412](https://github.com/redkubes/otomi-core/commit/213541213c080298de81af9c92ca94b496c76dc5))
- in docker should not pull ([b086c87](https://github.com/redkubes/otomi-core/commit/b086c878e299bf30d614c83b690a0cc96b16c44e))
- job spec, workflow for chart publication ([16789ff](https://github.com/redkubes/otomi-core/commit/16789ff11f79c60f7465408bf4fcefd241708080))
- k8s tools server values symlinked for validation commands ([32504ba](https://github.com/redkubes/otomi-core/commit/32504ba5ea160c16704b9599726e16be9329570a))
- keycloak idp.clientID value now generated ([cd71691](https://github.com/redkubes/otomi-core/commit/cd71691e8429591cdd5596d886609ffd9490aa96))
- kiali & jaeger config ([#548](https://github.com/redkubes/otomi-core/issues/548)) ([6a7e45f](https://github.com/redkubes/otomi-core/commit/6a7e45fdef7176e334145fb6737759e725df0346))
- lazy debug, dev schema ([#530](https://github.com/redkubes/otomi-core/issues/530)) ([6b02304](https://github.com/redkubes/otomi-core/commit/6b023041411f8a637f052bfbb9ea0dd9bdd16901))
- lint error ([592e2c2](https://github.com/redkubes/otomi-core/commit/592e2c2504a14a60e1870f1458b134a1eb32124c))
- made teams optional ([#563](https://github.com/redkubes/otomi-core/issues/563)) ([262ee5c](https://github.com/redkubes/otomi-core/commit/262ee5c26001a0be070cebee7bcbe0826cfbcb27))
- missing bootstrap file [ci skip] ([7e013b5](https://github.com/redkubes/otomi-core/commit/7e013b5a55749f5c4dcd44691c3596aeca50e1ff))
- missing bootstrap fileS [ci skip] ([d73a580](https://github.com/redkubes/otomi-core/commit/d73a580a69cdbdc2342de833f96ce94aa7ca09bb))
- missing default for hasCloudLB isManaged ([cef222c](https://github.com/redkubes/otomi-core/commit/cef222cb723f9f2e47b83123354f6772cf10d354))
- missing file [ci skip] ([9425d03](https://github.com/redkubes/otomi-core/commit/9425d030127514e12f048fba16f086cbcc5881a2))
- missing test values ([e8cbebe](https://github.com/redkubes/otomi-core/commit/e8cbebea29b7c18ee2c85120218d2c352ab46820))
- only release the chart if it is pushed to master ([#482](https://github.com/redkubes/otomi-core/issues/482)) ([5e00436](https://github.com/redkubes/otomi-core/commit/5e00436564331652bd60eee5af9370d33f0ef46e))
- otomi server start ([#566](https://github.com/redkubes/otomi-core/issues/566)) ([47c72ac](https://github.com/redkubes/otomi-core/commit/47c72ac29e7245f76a4c1331b4c324cf46d56f3a))
- otomi test, pinned api ([9bb004c](https://github.com/redkubes/otomi-core/commit/9bb004c79f6b27ba3b22db52246bb2c0492480b0))
- parsed args bug in bootstrap [ci skip] ([11315e9](https://github.com/redkubes/otomi-core/commit/11315e937305719e7d3722a199c8f4fd660f9215))
- pull secrets back in sa, profiles removed ([7a2fde1](https://github.com/redkubes/otomi-core/commit/7a2fde1b04e1829359fd4d25cb878a93fb6a0292))
- regression in commands not decrypting ([121bf45](https://github.com/redkubes/otomi-core/commit/121bf455eacc33055bf5d5c1aece15021dfe9bb0))
- releasing a chart after adding cluster.owner ([#494](https://github.com/redkubes/otomi-core/issues/494)) ([6af71b4](https://github.com/redkubes/otomi-core/commit/6af71b4a3e85202956b0b96fadd65104409b19cd))
- removed policy exclusion ([#535](https://github.com/redkubes/otomi-core/issues/535)) ([5c52326](https://github.com/redkubes/otomi-core/commit/5c52326e7b70f982443f28be158ee303fe6aa6c6))
- removing empty keys from value skeleton ([#504](https://github.com/redkubes/otomi-core/issues/504)) ([71b700a](https://github.com/redkubes/otomi-core/commit/71b700aaecd78d92c334c23142d12ad0591ab41f))
- required sops values ([861691f](https://github.com/redkubes/otomi-core/commit/861691f637f01951f69b6f5f495dd2bc227f41e2))
- reverting cert gen step as it's dev oriented [ci skip] ([6150953](https://github.com/redkubes/otomi-core/commit/615095390764cad152599d8931acbe4f105d2626))
- rootdir for drone ([97d7694](https://github.com/redkubes/otomi-core/commit/97d7694a77c5109cd389507eb7c8db7b22a6c559))
- schema ([34010ac](https://github.com/redkubes/otomi-core/commit/34010ac49bc9fb24134f23b1f500159679cef56e))
- schema for additional clusters ([4824362](https://github.com/redkubes/otomi-core/commit/48243628390320ca884efb88606beb68aea6ed3e))
- schema valid for ksvc ([351cf16](https://github.com/redkubes/otomi-core/commit/351cf164b5b4ecd45990f7662ca13cc749c12c88))
- security context for ksvc, symlink creation for server ([9a7ad1e](https://github.com/redkubes/otomi-core/commit/9a7ad1ee557eae32bd9229e1da4e3f255f6634e5))
- securityContext for CA patch containers, gitea CA mount ([#466](https://github.com/redkubes/otomi-core/issues/466)) ([90bb5f0](https://github.com/redkubes/otomi-core/commit/90bb5f0463e44f9922697aff4505ce069311684f))
- server port, alertmanager deps, console services accumulation ([f71d561](https://github.com/redkubes/otomi-core/commit/f71d561c24c20d1048eee9e1d4877bb2676eb8df))
- server port, alertmanager deps, console services accumulation [#2](https://github.com/redkubes/otomi-core/issues/2) ([569d93b](https://github.com/redkubes/otomi-core/commit/569d93b9cff481f6fad7db9f61de75657aa96d46))
- show demo certs for tlspass [ci skip] ([91c0f9e](https://github.com/redkubes/otomi-core/commit/91c0f9e0e36d64c91d23148803b5d265fb42b483))
- tests ([b52e16f](https://github.com/redkubes/otomi-core/commit/b52e16fb0b6744a6db3daa1c8acc5656e2d6899a))
- tests ([be85f8e](https://github.com/redkubes/otomi-core/commit/be85f8ef5a81e74b2420a3d6d5a5697626660526))
- typo, env loader [ci skip] ([57e87d4](https://github.com/redkubes/otomi-core/commit/57e87d40967408b0553c89423add59fb7545ca77))
- validate-templates undefined var for zx ([c48072f](https://github.com/redkubes/otomi-core/commit/c48072faf1b05b97699a1e1f1c38d55a0f625c8f))
- waitTillAvailable, tasks image bump ([294bda5](https://github.com/redkubes/otomi-core/commit/294bda5c40d9d18f4b86fb1db127227d1cfb739d))
- workflow revert for chart [ci skip] ([7d2af77](https://github.com/redkubes/otomi-core/commit/7d2af773ce99b698b745a8ff1fc7fa1dacf75e1e))
- workflow simplification [ci skip] ([c9baa3d](https://github.com/redkubes/otomi-core/commit/c9baa3d73add81739a188959411193687902bc93))

### Others

- bump console and api versions ([fa4fda9](https://github.com/redkubes/otomi-core/commit/fa4fda9dddbc64cda0390e664f7bd6ed31d1291b))
- bump tasks image ([d0ea8b7](https://github.com/redkubes/otomi-core/commit/d0ea8b789d91bba63af16ccaf9814f4549c14a2a))
- bumping tasks image for all jobs ([773de4e](https://github.com/redkubes/otomi-core/commit/773de4e679f770601f1b22be0accc8df23b67205))
- overwrite test ([3221510](https://github.com/redkubes/otomi-core/commit/322151012dec76dc079dbe3e34c0768901756810))
- pinned console version for keycloak theme ([bd03644](https://github.com/redkubes/otomi-core/commit/bd03644ba5f424478105a6b18d01bb45979f6c03))
- removed old sops file [ci skip] ([271ea04](https://github.com/redkubes/otomi-core/commit/271ea04f5781ae2e19050779fc3e99f55a5014a5))

### Code Refactoring

- added owner to slack output, moved container-limits exception ([1875017](https://github.com/redkubes/otomi-core/commit/18750172ecabe259ec53113bf36bafd9d8772b16))
- camelcased var [ci skip] ([a2043f0](https://github.com/redkubes/otomi-core/commit/a2043f0d3d599fa60c86eb483b071270b26fda1f))
- cleaned up old pull secret locations ([caf8388](https://github.com/redkubes/otomi-core/commit/caf8388c00e6634d1d88e1b0cd37f18a5a157bbe))
- cleanup ([57d1ebf](https://github.com/redkubes/otomi-core/commit/57d1ebf6c775e5ac410212cab5ef115c4ae5efb6))
- cleanup [ci skip] ([ca7918d](https://github.com/redkubes/otomi-core/commit/ca7918da1b0f16761681073c99bb4f75bf3bc832))
- debugging output ([70e33c7](https://github.com/redkubes/otomi-core/commit/70e33c7fb2acdb67b86f0629a1e00b03b388557f))
- encryption routine simpler ([3289eb4](https://github.com/redkubes/otomi-core/commit/3289eb4cebb9fa59565d2a2c62b0d4b52c98780b))
- minor issue ([b93a44f](https://github.com/redkubes/otomi-core/commit/b93a44f0c4d2e9c4b88720ffcbadc7655d77bf4a))
- process.exit replace with throw, server 422 for validation error ([669e600](https://github.com/redkubes/otomi-core/commit/669e60095efa8e6136ee5c110556557a3f17f614))
- removed refs to pullSecret ([b2774c3](https://github.com/redkubes/otomi-core/commit/b2774c3b7bfebf822900945d27930f7797313aa8))
- unified and simplified chart with zx setup ([#505](https://github.com/redkubes/otomi-core/issues/505)) ([4ea7f94](https://github.com/redkubes/otomi-core/commit/4ea7f9457280d9d3567fca5d922f25e5f5398274))

### [0.13.11](https://github.com/redkubes/otomi-core/compare/v0.13.10...v0.13.11) (2021-07-05)

### Bug Fixes

- drone gen ([94ad6f7](https://github.com/redkubes/otomi-core/commit/94ad6f74a0d206bff72eb9a5a4cef7e6f3bc0afc))
- harbor regression due to new chart ([fe03f90](https://github.com/redkubes/otomi-core/commit/fe03f904f162e73d61e50729ab9e1adf9ed673f0))
- harbor tasks updated to new version ([4becbeb](https://github.com/redkubes/otomi-core/commit/4becbeb1ecde85816dc0a97add6c3d59acc5162e))
- kured resources ([9f6720b](https://github.com/redkubes/otomi-core/commit/9f6720b685f08b4ad64358d141e0f69a07550261))
- seemingly harmless comment not allowed ([055c580](https://github.com/redkubes/otomi-core/commit/055c580ba97654d4aea8a468600bbdacbbc2bc0d))

### [0.13.10](https://github.com/redkubes/otomi-core/compare/v0.13.9...v0.13.10) (2021-07-05)

### Bug Fixes

- core version not found in container ([8329a49](https://github.com/redkubes/otomi-core/commit/8329a4901f37c1185d5fcfc31752abf11bba69e9))
- harbor db perms again...grrrrmbl ([d2f2cb4](https://github.com/redkubes/otomi-core/commit/d2f2cb489979444bd747152f9d140bf575b19b3a))

### Others

- **release:** 0.13.9 ([6b746bb](https://github.com/redkubes/otomi-core/commit/6b746bb7751f7df7b5187060ce407abcae236852))

### [0.13.9](https://github.com/redkubes/otomi-core/compare/v0.13.8...v0.13.9) (2021-07-04)

### Bug Fixes

- regression [ci skip] ([20adace](https://github.com/redkubes/otomi-core/commit/20adace3f9ebae6d79b33315907dd4840c3bc679))

### [0.13.8](https://github.com/redkubes/otomi-core/compare/v0.13.7...v0.13.8) (2021-07-04)

### Features

- skip storage classes to circumvent patching errors ([7cd2973](https://github.com/redkubes/otomi-core/commit/7cd297342bc16e843133ea8e705db0896a70fbcf))

### Bug Fixes

- decrypt before values command ([da97ebb](https://github.com/redkubes/otomi-core/commit/da97ebb42b1aae76c3e28a17d0e97b49bfc6f96c))
- gitea push robustness ([13b648b](https://github.com/redkubes/otomi-core/commit/13b648b6b7d1f473b4187baa75e98604a0eab5f3))
- harbor chart, redis config, disk sizes ([a6df5a2](https://github.com/redkubes/otomi-core/commit/a6df5a29b84d20933f42d5c7dce488b273e01ef8))
- pre-commit ([3c2a85b](https://github.com/redkubes/otomi-core/commit/3c2a85bbfda5044605cd8975fae2e8dace3346b9))
- remove -x ([34263dd](https://github.com/redkubes/otomi-core/commit/34263dddcf56fe08680cc8f8c5e7af396803dbca))
- reverting back the readme file. ([#460](https://github.com/redkubes/otomi-core/issues/460)) ([72fadfd](https://github.com/redkubes/otomi-core/commit/72fadfdfac9e528b753373f77768d9323f6cc017))
- schema for redis [ci skip] ([76c15bd](https://github.com/redkubes/otomi-core/commit/76c15bd9cce54e24634ab64c818f0ec5fbc18116))
- schema required fields and decrypted file extension toggle ([eb5cf18](https://github.com/redkubes/otomi-core/commit/eb5cf1833a4bc313369defd0fd8ea9a2f9442420))
- set maxlength of dns ([#456](https://github.com/redkubes/otomi-core/issues/456)) ([9f1ecb1](https://github.com/redkubes/otomi-core/commit/9f1ecb18855e5db021c58ad8b45a693ac93eacd3))
- storageclass default not premium ([02edec9](https://github.com/redkubes/otomi-core/commit/02edec99a0c9e63179b82cfb4382049a9f8cd7a0))
- storageclass schema, k8s versions ([8390a24](https://github.com/redkubes/otomi-core/commit/8390a24ff195e7fc50c1efca25f48149beaa9b85))

### [0.13.7](https://github.com/redkubes/otomi-core/compare/v0.13.6...v0.13.7) (2021-06-30)

### Features

- adding encryption to the otomi helm chart ([17bf7a8](https://github.com/redkubes/otomi-core/commit/17bf7a869c90db17d072e69954373da593da4ac0))
- chart release pipeline ([7c81572](https://github.com/redkubes/otomi-core/commit/7c815726f6081c255b7744b75846adcb3e5eef17))
- chart release pipeline ([5744d1b](https://github.com/redkubes/otomi-core/commit/5744d1b83c1ed7dd56d71b17ba7f4c25a91190c2))
- chart release pipeline ([6bbb7b9](https://github.com/redkubes/otomi-core/commit/6bbb7b93dbd3dac4b332c8c470afc525122f09e4))
- moving to alpha4 ([0492b26](https://github.com/redkubes/otomi-core/commit/0492b26c01c2f8d4df49b5dc013d5819741553eb))
- ingress-nginx grafana dash [ci skip] ([8d1dbed](https://github.com/redkubes/otomi-core/commit/8d1dbed94770ae7be3c8856b6443bfac145abdb6))
- otomi install chart ([#431](https://github.com/redkubes/otomi-core/issues/431)) ([16152b1](https://github.com/redkubes/otomi-core/commit/16152b1a8c00a345a3531d7dabf0293d0a28eca9))
- user master tag for otomi/tasks image ([2b78538](https://github.com/redkubes/otomi-core/commit/2b78538f2187ca2a1b96f33fcb60e276ba79a553))

### Bug Fixes

- added type object to schema [ci skip] ([9a08c4f](https://github.com/redkubes/otomi-core/commit/9a08c4f91ca2bef9258a980e7a0ea0f5cb9399f7))
- chart mods ([#458](https://github.com/redkubes/otomi-core/issues/458)) ([acf82f7](https://github.com/redkubes/otomi-core/commit/acf82f7b482f4310b1fee9e5f9fdffe5aad19b98))
- chart release pipeline ([0302da0](https://github.com/redkubes/otomi-core/commit/0302da0140225f5bd203398a27064437b08d2844))
- chart release pipeline ([435a12a](https://github.com/redkubes/otomi-core/commit/435a12ac986dfd9283e36d4110d55cb5c120a661))
- chart release pipeline ([6d865e8](https://github.com/redkubes/otomi-core/commit/6d865e86384b19b887c86fa2f926650ab640c723))
- chart release version ([45e27fc](https://github.com/redkubes/otomi-core/commit/45e27fcb447c0bc970eb1d6a66a2115f4d54c3fd))
- chart version ([76cec33](https://github.com/redkubes/otomi-core/commit/76cec336ddb19136aa45fa131f95750e2dd4644a))
- disabling profiles ([e075ca6](https://github.com/redkubes/otomi-core/commit/e075ca6a3c18c1751de1de10686ac9f90dc29af9))
- first commit [ci skip] ([ba08847](https://github.com/redkubes/otomi-core/commit/ba088478371f1d88e1b1a7acc3294834b90cdab6))
- fix the bug for file permissions after chart task ([0f05878](https://github.com/redkubes/otomi-core/commit/0f0587840d5ae3654e68717d56081e0d0cf451dd))
- gen-drone dependent on otomi version change ([b5c90f9](https://github.com/redkubes/otomi-core/commit/b5c90f991a9d0609bd5b3e8cdf1d2ae03d9f6d52))
- missing files, initial values now read [ci skip] ([ab4b6e7](https://github.com/redkubes/otomi-core/commit/ab4b6e7dda103740a98d4e18fde4e9778d68737f))
- move sops gen to bootstrap [ci skip] ([13f6e96](https://github.com/redkubes/otomi-core/commit/13f6e961377078de579daed59dcdb20683f30a92))
- namespaces for better cleanup ([18e6828](https://github.com/redkubes/otomi-core/commit/18e682872d46c65d09f29c72d85adfa6bb806512))
- removing local test file ([09bfccf](https://github.com/redkubes/otomi-core/commit/09bfccf7ee445f9dc64ccd248ce674102be7d0b8))
- removing redundant function ([623a340](https://github.com/redkubes/otomi-core/commit/623a34017161b8b6c2d81dbc4d81f09c6e77029a))
- schema [ci skip] ([0620836](https://github.com/redkubes/otomi-core/commit/0620836faae68579ebca631e9541ff82e9f9dc61))
- sops env, otomi chart tags ([dd3122f](https://github.com/redkubes/otomi-core/commit/dd3122f383dd1ad9726bb31bac13698e3bc7e045))
- sops regex, serve handler output [ci skip] ([2469a07](https://github.com/redkubes/otomi-core/commit/2469a074483b3e5e5eca23d4cd70db88f1fa387e))
- sops template ([bb8e56b](https://github.com/redkubes/otomi-core/commit/bb8e56b34c84eaa07d7fd96135eea7bf095272b3))

### Others

- **chart:** 0.13.0 ([7baaec4](https://github.com/redkubes/otomi-core/commit/7baaec439a3dc13435b419206bb0b641849d0e7c))
- **chart:** 0.13.0 ([9872497](https://github.com/redkubes/otomi-core/commit/9872497d5c1e004e870e6a902886ba53b2c525f0))
- **chart:** 0.13.1 ([9da62ac](https://github.com/redkubes/otomi-core/commit/9da62ac0079d63b90ff511c4bcb217015cd3e30b))
- **chart:** 0.13.1 ([ae38658](https://github.com/redkubes/otomi-core/commit/ae38658c97a7bbb43b36b6d700c644a92207eb4d))
- **chart:** 0.13.1 ([78df5b7](https://github.com/redkubes/otomi-core/commit/78df5b77cefa369343a9c1d3fbf6c48a6a7c1511))
- **chart:** 0.13.1 ([4c53521](https://github.com/redkubes/otomi-core/commit/4c5352168613ef7609a01c00ede4c3c4eb6c56b6))
- **chart:** 0.13.1 ([1848c2c](https://github.com/redkubes/otomi-core/commit/1848c2c3c6c1c63eadff5571180791e570ff04c1))
- **chart:** 0.13.1 ([4a094bb](https://github.com/redkubes/otomi-core/commit/4a094bbcdde5c25ccedb3032ec1b13e87ab0a402))
- **chart:** 0.13.1 ([b75c10f](https://github.com/redkubes/otomi-core/commit/b75c10fa97d992e07c987f9e2b88a31e44c43e4c))
- **chart:** 0.13.1 ([b782425](https://github.com/redkubes/otomi-core/commit/b78242515db506508b0507e99ef5ecbe1d8d8f7e))
- **chart:** 0.13.1 ([d478838](https://github.com/redkubes/otomi-core/commit/d4788383c7c36e63baf3294ffeb0c58c690714e0))
- **chart:** 0.13.1 ([c04d36d](https://github.com/redkubes/otomi-core/commit/c04d36dfbd221677ef8873ded4d80dcc5b876584))
- **chart:** 0.13.1 ([9071aa9](https://github.com/redkubes/otomi-core/commit/9071aa996397c2fe763902bec8516f521ff71578))
- **chart:** 0.13.1 ([83138ab](https://github.com/redkubes/otomi-core/commit/83138ab46912c6fe41e68f99071d82d2cf7a72e9))
- **chart:** 0.13.1 ([e7e7edb](https://github.com/redkubes/otomi-core/commit/e7e7edbb598b27a3037946fb640199221a829847))
- **chart:** 0.13.1 ([0aa68d8](https://github.com/redkubes/otomi-core/commit/0aa68d8d4a686deba56ab68c510532edab7efce3))
- **chart:** 0.13.1 ([1890b91](https://github.com/redkubes/otomi-core/commit/1890b916861434d9b091f1a5f5af42354008579e))
- **chart:** 0.13.1 ([9d411ec](https://github.com/redkubes/otomi-core/commit/9d411eced6e475ff1772332d8180e7e484d69df9))
- **chart:** 0.13.1 ([4225d5c](https://github.com/redkubes/otomi-core/commit/4225d5c63876e69ab6b8c7f76478e5523f471229))
- **chart:** 0.13.1 ([2c49cce](https://github.com/redkubes/otomi-core/commit/2c49cceeb0d050320e9417de43640fc0716d527f))
- **chart:** 0.13.1 ([713c26f](https://github.com/redkubes/otomi-core/commit/713c26f8592c12a91813c9aea010c2cd96423b05))
- **chart:** 0.13.1 ([1b8ee20](https://github.com/redkubes/otomi-core/commit/1b8ee203e3dc254d579d7bd313ca04bc23f5be71))
- **chart:** 0.13.1 ([bffd9cd](https://github.com/redkubes/otomi-core/commit/bffd9cdfe1f18e81e73ef75b7e48e1b1f4a9da31))
- **chart:** 0.13.1 ([f62dc8e](https://github.com/redkubes/otomi-core/commit/f62dc8e38a43b99c237d4f7625b315ade537265b))
- **chart:** 0.13.1 ([b028253](https://github.com/redkubes/otomi-core/commit/b0282531e0efc67ccd35a2d0e022a4a89c7b8e5c))
- **chart:** 0.13.1 ([a84e002](https://github.com/redkubes/otomi-core/commit/a84e00269152027c444125d4713a6cdcd6167ce0))
- **chart:** 0.13.1 ([113b9fa](https://github.com/redkubes/otomi-core/commit/113b9fad4e9a08784d7939df1740a2b3d656f2e7))

### [0.13.6](https://github.com/redkubes/otomi-core/compare/v0.13.5...v0.13.6) (2021-06-29)

### Others

- **chart:** 0.13.5 ([7668f9b](https://github.com/redkubes/otomi-core/commit/7668f9b683a15f770701fbbd03a7b7b8f138ee30))

### [0.13.5](https://github.com/redkubes/otomi-core/compare/v0.13.4...v0.13.5) (2021-06-29)

### Bug Fixes

- sops detection [ci skip] ([91d8eed](https://github.com/redkubes/otomi-core/commit/91d8eed1efff5648311113b41c10b41e257533ee))

### [0.13.4](https://github.com/redkubes/otomi-core/compare/v0.13.3...v0.13.4) (2021-06-29)

### Bug Fixes

- sops detection [ci skip] ([2032a04](https://github.com/redkubes/otomi-core/commit/2032a048a6638a534465cb59d107b82bd6d21b39))

### [0.13.3](https://github.com/redkubes/otomi-core/compare/v0.13.2...v0.13.3) (2021-06-29)

### Bug Fixes

- don't gen drone when chart disabled ([113aaac](https://github.com/redkubes/otomi-core/commit/113aaaca5214b4a3b1bea03a327c6f73acac93ea))
- gitea url [ci skip] ([d05f08b](https://github.com/redkubes/otomi-core/commit/d05f08bf19a6c8c9f3a9c4367deaedd0834da4be))

### [0.13.2](https://github.com/redkubes/otomi-core/compare/v0.13.1...v0.13.2) (2021-06-29)

### ⚠ BREAKING CHANGES

- **istio + knative upgrade:** A new values configuration architecture together with a long awaited new istio +
  knative warrants a minor bump, so here we go!

### Features

- add GIT_SSL_NO_VERIFY to drone ([2c79ab4](https://github.com/redkubes/otomi-core/commit/2c79ab4c6ff5120ee9cba2a127a546988c1a9db6))
- always commit files if there are any ([#436](https://github.com/redkubes/otomi-core/issues/436)) ([7bbccf5](https://github.com/redkubes/otomi-core/commit/7bbccf592c20f91c680da51134af774cb1ab25ff))
- default branch is main ([cfbe790](https://github.com/redkubes/otomi-core/commit/cfbe7903654c140ddadd7a13e551bb01ab3294c9))
- drone extra root ca ([4879d93](https://github.com/redkubes/otomi-core/commit/4879d93ce3c9240b2051f06d6bdfa95cb28938ee))
- jaeger operator ([c84dace](https://github.com/redkubes/otomi-core/commit/c84dace9082036b98e862781ab8eb3991e997ba2))
- lots ([27dcdbc](https://github.com/redkubes/otomi-core/commit/27dcdbcfd9ab924581387bda2b252a4ed6d30875))
- pullsecret-patcher, gatekeeper splitup ([e012166](https://github.com/redkubes/otomi-core/commit/e012166c2958539f26424c9c154e4d77e16f626c))
- set storageClass ([#435](https://github.com/redkubes/otomi-core/issues/435)) ([dd23765](https://github.com/redkubes/otomi-core/commit/dd237650b47617e2a30d9239df81c93f84a090cd))
- tls passthrough ([#433](https://github.com/redkubes/otomi-core/issues/433)) ([74a5b09](https://github.com/redkubes/otomi-core/commit/74a5b09b76f1f750186451f6d8f335ac5f56d68b))

### Bug Fixes

- admin password for gitea and keycloak ([#442](https://github.com/redkubes/otomi-core/issues/442)) ([186917f](https://github.com/redkubes/otomi-core/commit/186917fa3e83d8baf8caed80d36e8a05730e2c87))
- admin password required ([#439](https://github.com/redkubes/otomi-core/issues/439)) ([20335b7](https://github.com/redkubes/otomi-core/commit/20335b76ea97b9383410affd874c9a1b9c2e4c93))
- banned image tag policy now checking for empty tag, knative containerPort added ([ba05296](https://github.com/redkubes/otomi-core/commit/ba05296ac909485f54d216fb5bc21d16ab8a280e))
- bootstrap postgresqlPassword ([#437](https://github.com/redkubes/otomi-core/issues/437)) ([91359cd](https://github.com/redkubes/otomi-core/commit/91359cd411b8018c48a81e90be03ff9061ec90ce))
- cluster apiName validation ([#446](https://github.com/redkubes/otomi-core/issues/446)) ([829509a](https://github.com/redkubes/otomi-core/commit/829509a95b48ce12aa8f97e774d642207b1b244e))
- disable istio sidecar for drone ([6be6cb4](https://github.com/redkubes/otomi-core/commit/6be6cb47c60fe980204fa917a969beab7f9cb449))
- drone policy [ci skip] ([3024cb7](https://github.com/redkubes/otomi-core/commit/3024cb7208654c3993c1242e4878904c64347684))
- excluding root ca for staging ([5ae1463](https://github.com/redkubes/otomi-core/commit/5ae146391f7018cfd8f41d98424c2d4408177df3))
- gitea push ([bd57ddc](https://github.com/redkubes/otomi-core/commit/bd57ddc95a3c88755a91780103beead2783873e2))
- gitea push script ([8a23767](https://github.com/redkubes/otomi-core/commit/8a237679f4a6485b04bbebd8fe5dd4366fb55505))
- gitea-push script ([#438](https://github.com/redkubes/otomi-core/issues/438)) ([317ca42](https://github.com/redkubes/otomi-core/commit/317ca421eec41fad353f673a42230fa957700d54))
- harbor fixed htpasswd, api skip ssl verify when staging ([a075186](https://github.com/redkubes/otomi-core/commit/a07518628beaa4757fbec9e00af8d468d8eea1ea))
- harbor perms, destroy script ([4cf1573](https://github.com/redkubes/otomi-core/commit/4cf15730cef92032e918a536b310d1841c627aa6))
- helm flag ([d617b08](https://github.com/redkubes/otomi-core/commit/d617b0893fff658656dd15d5da5626b7b67ea0e7))
- husky ([f108851](https://github.com/redkubes/otomi-core/commit/f108851edb90528311e12e82bad7a59b55284ff5))
- ingress design, schema, bugs ([c8d8ea8](https://github.com/redkubes/otomi-core/commit/c8d8ea8e1323d447b2117484620897c6202b205e))
- istio version tag ([075c60f](https://github.com/redkubes/otomi-core/commit/075c60f365dd047057fcbe79e9b49973ac64e56d))
- jobs, lint ([45892a9](https://github.com/redkubes/otomi-core/commit/45892a92d68d1e84866be29c634c9786cceacef4))
- knative gw ([597b0ad](https://github.com/redkubes/otomi-core/commit/597b0ad2eeedda40c55547a610a0cd5b0d51af55))
- knative schema, file mounts ([3390ca1](https://github.com/redkubes/otomi-core/commit/3390ca1e5ca9ae4aa6fc4c3e54b7ac1780ae0f79))
- lots ([48a6ccf](https://github.com/redkubes/otomi-core/commit/48a6ccf575c15d72b86ebcfb557be39ad426a8a8))
- missing colors ([14252f6](https://github.com/redkubes/otomi-core/commit/14252f6b3cc2de734151eabd72974bd34f80b0b1))
- missing container resources ([adf3418](https://github.com/redkubes/otomi-core/commit/adf34183028bf8edb2c2376ec2fe9647e433ebbe))
- missing files ([a06e2b0](https://github.com/redkubes/otomi-core/commit/a06e2b06006af782f0cee3e7b7981b562d558b53))
- moved gatekeeper constraints to later stage ([d85f239](https://github.com/redkubes/otomi-core/commit/d85f239a82826dade195c7a03679d9f914b58e51))
- moved gatekeeper constraints to later stage: missing file ([77a7b2c](https://github.com/redkubes/otomi-core/commit/77a7b2c725be71de521a95f35a03a9e727192cbf))
- nativeSecrets was missing from schema, added npm scripts ([13bd1d1](https://github.com/redkubes/otomi-core/commit/13bd1d1833fe6b5b8c11d33fea29736b5cdff747))
- opa wait job, drone needs istio ([e46ecdd](https://github.com/redkubes/otomi-core/commit/e46ecdd0ca61b1b14b4909d2f1298774e36f1daf))
- path to rendered values ([#444](https://github.com/redkubes/otomi-core/issues/444)) ([25fd4b7](https://github.com/redkubes/otomi-core/commit/25fd4b7ab79cbd071d75c64733fd6d5c56f57f00))
- policy exclusions for operators without schema: kiali, jaeger, istio ([c90f999](https://github.com/redkubes/otomi-core/commit/c90f999bbca9c9ea980c15e66a38352d06caa477))
- remove jobs from charts schema ([#441](https://github.com/redkubes/otomi-core/issues/441)) ([dd839d3](https://github.com/redkubes/otomi-core/commit/dd839d378156326d0f743c09d7a7d4b5da3141eb))
- schema additions from api ([08aafc0](https://github.com/redkubes/otomi-core/commit/08aafc03b4685ce46c5e27c4b170d678922ee4fc))
- schema description [ci skip] ([357ee08](https://github.com/redkubes/otomi-core/commit/357ee08cfaefc179556a120139e9e3b160211a38))
- schema unrequired props ([07c3108](https://github.com/redkubes/otomi-core/commit/07c3108d85e3156106a76f8c7212092ff2e8e009))
- schema, gitea push ([67b9b61](https://github.com/redkubes/otomi-core/commit/67b9b6136df4c52c2a92ba1604b25aad088f8f5a))
- secrets, job logic ([e91713e](https://github.com/redkubes/otomi-core/commit/e91713e14e0cbd1a7e4529404f3a173f1c4b836a))
- set upstream for local main branch ([#440](https://github.com/redkubes/otomi-core/issues/440)) ([4720365](https://github.com/redkubes/otomi-core/commit/472036537569879fc9461f2d2488045c8f9d5186))
- spelling ([d5df2bc](https://github.com/redkubes/otomi-core/commit/d5df2bce100a16d85d8c84e61d21a6605f965a64))
- variable expansion ([#434](https://github.com/redkubes/otomi-core/issues/434)) ([a4ac2dc](https://github.com/redkubes/otomi-core/commit/a4ac2dcfb7c41ec66bcedc4b74a0bbaf3f386850))

### Code Refactoring

- **istio:** moved dashboards into chart, configured kiali, jaeger ([2f47f7c](https://github.com/redkubes/otomi-core/commit/2f47f7c420bc32ff9c1427364eee1d00e33f1d12))
- added flag for auth svc, removed azure autoscaler config ([c833128](https://github.com/redkubes/otomi-core/commit/c83312815ccecc3529d3b71b2a07581b9593d8b3))
- removed unused team prefix ([a564009](https://github.com/redkubes/otomi-core/commit/a5640090c829ff9b3f211bd650019e82408c1e49))

### Others

- **chart:** 0.13.1 ([2e2bca6](https://github.com/redkubes/otomi-core/commit/2e2bca63386b9d9ec558f7d36053de5c2c67bd21))
- **istio + knative upgrade:** istio upgraded to 1.10.1 and Knative to 0.23.0 ([2599790](https://github.com/redkubes/otomi-core/commit/2599790ecdb54e4b51489e13892831b5a034b1f8))
- **release:** 0.13.0 ([cfbf94b](https://github.com/redkubes/otomi-core/commit/cfbf94bdaab634ea97a83117c417896daa580547))
- **release:** 0.13.1 ([4d23bca](https://github.com/redkubes/otomi-core/commit/4d23bca7569b784d747bc1504b6361509656e0eb))
- knative upgrade to 1.20 ([230d42d](https://github.com/redkubes/otomi-core/commit/230d42d894912047f8977f047c8437677fa01153))

## [0.13.0](https://github.com/redkubes/otomi-core/compare/v0.13.1...v0.13.0) (2021-06-21)

### ⚠ BREAKING CHANGES

- **istio + knative upgrade:** A new values configuration architecture together with a long awaited new istio +
  knative warrants a minor bump, so here we go!

### Features

- add GIT_SSL_NO_VERIFY to drone ([2c79ab4](https://github.com/redkubes/otomi-core/commit/2c79ab4c6ff5120ee9cba2a127a546988c1a9db6))
- always commit files if there are any ([#436](https://github.com/redkubes/otomi-core/issues/436)) ([7bbccf5](https://github.com/redkubes/otomi-core/commit/7bbccf592c20f91c680da51134af774cb1ab25ff))
- default branch is main ([cfbe790](https://github.com/redkubes/otomi-core/commit/cfbe7903654c140ddadd7a13e551bb01ab3294c9))
- drone extra root ca ([4879d93](https://github.com/redkubes/otomi-core/commit/4879d93ce3c9240b2051f06d6bdfa95cb28938ee))
- jaeger operator ([c84dace](https://github.com/redkubes/otomi-core/commit/c84dace9082036b98e862781ab8eb3991e997ba2))
- lots ([27dcdbc](https://github.com/redkubes/otomi-core/commit/27dcdbcfd9ab924581387bda2b252a4ed6d30875))
- pullsecret-patcher, gatekeeper splitup ([e012166](https://github.com/redkubes/otomi-core/commit/e012166c2958539f26424c9c154e4d77e16f626c))
- set storageClass ([#435](https://github.com/redkubes/otomi-core/issues/435)) ([dd23765](https://github.com/redkubes/otomi-core/commit/dd237650b47617e2a30d9239df81c93f84a090cd))
- tls passthrough ([#433](https://github.com/redkubes/otomi-core/issues/433)) ([74a5b09](https://github.com/redkubes/otomi-core/commit/74a5b09b76f1f750186451f6d8f335ac5f56d68b))

### Bug Fixes

- admin password for gitea and keycloak ([#442](https://github.com/redkubes/otomi-core/issues/442)) ([186917f](https://github.com/redkubes/otomi-core/commit/186917fa3e83d8baf8caed80d36e8a05730e2c87))
- admin password required ([#439](https://github.com/redkubes/otomi-core/issues/439)) ([20335b7](https://github.com/redkubes/otomi-core/commit/20335b76ea97b9383410affd874c9a1b9c2e4c93))
- bootstrap postgresqlPassword ([#437](https://github.com/redkubes/otomi-core/issues/437)) ([91359cd](https://github.com/redkubes/otomi-core/commit/91359cd411b8018c48a81e90be03ff9061ec90ce))
- disable istio sidecar for drone ([6be6cb4](https://github.com/redkubes/otomi-core/commit/6be6cb47c60fe980204fa917a969beab7f9cb449))
- excluding root ca for staging ([5ae1463](https://github.com/redkubes/otomi-core/commit/5ae146391f7018cfd8f41d98424c2d4408177df3))
- gitea push ([bd57ddc](https://github.com/redkubes/otomi-core/commit/bd57ddc95a3c88755a91780103beead2783873e2))
- gitea push script ([8a23767](https://github.com/redkubes/otomi-core/commit/8a237679f4a6485b04bbebd8fe5dd4366fb55505))
- gitea-push script ([#438](https://github.com/redkubes/otomi-core/issues/438)) ([317ca42](https://github.com/redkubes/otomi-core/commit/317ca421eec41fad353f673a42230fa957700d54))
- harbor fixed htpasswd, api skip ssl verify when staging ([a075186](https://github.com/redkubes/otomi-core/commit/a07518628beaa4757fbec9e00af8d468d8eea1ea))
- harbor perms, destroy script ([4cf1573](https://github.com/redkubes/otomi-core/commit/4cf15730cef92032e918a536b310d1841c627aa6))
- helm flag ([d617b08](https://github.com/redkubes/otomi-core/commit/d617b0893fff658656dd15d5da5626b7b67ea0e7))
- husky ([f108851](https://github.com/redkubes/otomi-core/commit/f108851edb90528311e12e82bad7a59b55284ff5))
- ingress design, schema, bugs ([c8d8ea8](https://github.com/redkubes/otomi-core/commit/c8d8ea8e1323d447b2117484620897c6202b205e))
- istio version tag ([075c60f](https://github.com/redkubes/otomi-core/commit/075c60f365dd047057fcbe79e9b49973ac64e56d))
- jobs, lint ([45892a9](https://github.com/redkubes/otomi-core/commit/45892a92d68d1e84866be29c634c9786cceacef4))
- knative gw ([597b0ad](https://github.com/redkubes/otomi-core/commit/597b0ad2eeedda40c55547a610a0cd5b0d51af55))
- knative schema, file mounts ([3390ca1](https://github.com/redkubes/otomi-core/commit/3390ca1e5ca9ae4aa6fc4c3e54b7ac1780ae0f79))
- lots ([48a6ccf](https://github.com/redkubes/otomi-core/commit/48a6ccf575c15d72b86ebcfb557be39ad426a8a8))
- missing colors ([14252f6](https://github.com/redkubes/otomi-core/commit/14252f6b3cc2de734151eabd72974bd34f80b0b1))
- missing container resources ([adf3418](https://github.com/redkubes/otomi-core/commit/adf34183028bf8edb2c2376ec2fe9647e433ebbe))
- missing files ([a06e2b0](https://github.com/redkubes/otomi-core/commit/a06e2b06006af782f0cee3e7b7981b562d558b53))
- moved gatekeeper constraints to later stage ([d85f239](https://github.com/redkubes/otomi-core/commit/d85f239a82826dade195c7a03679d9f914b58e51))
- moved gatekeeper constraints to later stage: missing file ([77a7b2c](https://github.com/redkubes/otomi-core/commit/77a7b2c725be71de521a95f35a03a9e727192cbf))
- nativeSecrets was missing from schema, added npm scripts ([13bd1d1](https://github.com/redkubes/otomi-core/commit/13bd1d1833fe6b5b8c11d33fea29736b5cdff747))
- opa wait job, drone needs istio ([e46ecdd](https://github.com/redkubes/otomi-core/commit/e46ecdd0ca61b1b14b4909d2f1298774e36f1daf))
- path to rendered values ([#444](https://github.com/redkubes/otomi-core/issues/444)) ([25fd4b7](https://github.com/redkubes/otomi-core/commit/25fd4b7ab79cbd071d75c64733fd6d5c56f57f00))
- policy exclusions for operators without schema: kiali, jaeger, istio ([c90f999](https://github.com/redkubes/otomi-core/commit/c90f999bbca9c9ea980c15e66a38352d06caa477))
- remove jobs from charts schema ([#441](https://github.com/redkubes/otomi-core/issues/441)) ([dd839d3](https://github.com/redkubes/otomi-core/commit/dd839d378156326d0f743c09d7a7d4b5da3141eb))
- schema additions from api ([08aafc0](https://github.com/redkubes/otomi-core/commit/08aafc03b4685ce46c5e27c4b170d678922ee4fc))
- schema unrequired props ([07c3108](https://github.com/redkubes/otomi-core/commit/07c3108d85e3156106a76f8c7212092ff2e8e009))
- schema, gitea push ([67b9b61](https://github.com/redkubes/otomi-core/commit/67b9b6136df4c52c2a92ba1604b25aad088f8f5a))
- secrets, job logic ([e91713e](https://github.com/redkubes/otomi-core/commit/e91713e14e0cbd1a7e4529404f3a173f1c4b836a))
- set upstream for local main branch ([#440](https://github.com/redkubes/otomi-core/issues/440)) ([4720365](https://github.com/redkubes/otomi-core/commit/472036537569879fc9461f2d2488045c8f9d5186))
- spelling ([d5df2bc](https://github.com/redkubes/otomi-core/commit/d5df2bce100a16d85d8c84e61d21a6605f965a64))
- variable expansion ([#434](https://github.com/redkubes/otomi-core/issues/434)) ([a4ac2dc](https://github.com/redkubes/otomi-core/commit/a4ac2dcfb7c41ec66bcedc4b74a0bbaf3f386850))

### Others

- **istio + knative upgrade:** istio upgraded to 1.10.1 and Knative to 0.23.0 ([2599790](https://github.com/redkubes/otomi-core/commit/2599790ecdb54e4b51489e13892831b5a034b1f8))
- knative upgrade to 1.20 ([230d42d](https://github.com/redkubes/otomi-core/commit/230d42d894912047f8977f047c8437677fa01153))

### Code Refactoring

- **istio:** moved dashboards into chart, configured kiali, jaeger ([2f47f7c](https://github.com/redkubes/otomi-core/commit/2f47f7c420bc32ff9c1427364eee1d00e33f1d12))
- added flag for auth svc, removed azure autoscaler config ([c833128](https://github.com/redkubes/otomi-core/commit/c83312815ccecc3529d3b71b2a07581b9593d8b3))
- removed unused team prefix ([a564009](https://github.com/redkubes/otomi-core/commit/a5640090c829ff9b3f211bd650019e82408c1e49))

### [0.12.10](https://github.com/redkubes/otomi-core/compare/v0.12.9...v0.12.10) (2021-04-14)

### Features

- **team-ns:** exposed resourceQuota and limitRange for teams ([6b8fb6e](https://github.com/redkubes/otomi-core/commit/6b8fb6e9acc0b94b6bf9f07d0b1f5d6354bbeea7)), closes [redkubes/unassigned-issues#155](https://github.com/redkubes/unassigned-issues/issues/155)

### Bug Fixes

- [#397](https://github.com/redkubes/otomi-core/issues/397) ([#402](https://github.com/redkubes/otomi-core/issues/402)) ([bd34257](https://github.com/redkubes/otomi-core/commit/bd342576118e4e6885b2dc66f05ab4c20707f680))
- team demo file ([fc33544](https://github.com/redkubes/otomi-core/commit/fc3354467d0d5b4630d399a49edaf91c6f01687a))

### Others

- added new format 2 for package json files [ci skip] ([6c43b93](https://github.com/redkubes/otomi-core/commit/6c43b93df095e5049f6acc6615599b056f4234f0))

### [0.12.9](https://github.com/redkubes/otomi-core/compare/v0.12.8...v0.12.9) (2021-04-09)

### Features

- docker pull before run ([#382](https://github.com/redkubes/otomi-core/issues/382)) ([e96abb0](https://github.com/redkubes/otomi-core/commit/e96abb0d9ac1c12e429a9a1b3d10a39f025fdb3c))
- storage classes added for Immediate binding, fixed harbor on azure not starting ([#401](https://github.com/redkubes/otomi-core/issues/401)) ([52b6f67](https://github.com/redkubes/otomi-core/commit/52b6f673d329076a46ca862fd41d693ed30c6745))

### Bug Fixes

- added istio-apps ns to fix istio-system injection problem ([#400](https://github.com/redkubes/otomi-core/issues/400)) ([ae442ea](https://github.com/redkubes/otomi-core/commit/ae442ea87002bb212c47b01c36969306ab4869c5))
- bin/otomi and bin/common.sh conditionals ([#392](https://github.com/redkubes/otomi-core/issues/392)) ([ae6711a](https://github.com/redkubes/otomi-core/commit/ae6711a6e937fb6d5bd6eec6bec82a83cdf64e45))
- fixes bug introduced by [#370](https://github.com/redkubes/otomi-core/issues/370)/[#382](https://github.com/redkubes/otomi-core/issues/382) ([#395](https://github.com/redkubes/otomi-core/issues/395)) ([88df926](https://github.com/redkubes/otomi-core/commit/88df9265eb78e7536a0fee5fdec8d6908d46ef56)), closes [#394](https://github.com/redkubes/otomi-core/issues/394)
- hf_templates function fix, scripts always exit on error ([bfb5761](https://github.com/redkubes/otomi-core/commit/bfb5761eecca5094ce07d8e0d685fac8403f01e7))
- smaller window for blackbox alert trigger ([b09d8ec](https://github.com/redkubes/otomi-core/commit/b09d8ecab97b4960ab1baf4b0fbc88ad1d755935))
- stderr diff between github pipeline runner and local docker runner ([c0b5443](https://github.com/redkubes/otomi-core/commit/c0b544357900af19dba8e9067bf2cf521b9d017f))
- team service without path now appears with slash in ingress ([19989e5](https://github.com/redkubes/otomi-core/commit/19989e58f71bcfcb8d06692ba026292ae4c7a5b4))
- tests now readable ([edd93e7](https://github.com/redkubes/otomi-core/commit/edd93e7e733cf1b0699000312bd6b2de0ed155ff))
- unset var ([9008621](https://github.com/redkubes/otomi-core/commit/90086214adf13d7a5ea11e0b550a9f9e6630e2cf))

### Others

- **deps:** bump y18n from 4.0.0 to 4.0.1 ([#387](https://github.com/redkubes/otomi-core/issues/387)) ([6717776](https://github.com/redkubes/otomi-core/commit/67177769cff315f279cb4ba37d38c369bea16a6d))

### [0.12.8](https://github.com/redkubes/otomi-core/compare/v0.12.7...v0.12.8) (2021-03-25)

### Features

- exposed maxBodySize for nginx ([db6d186](https://github.com/redkubes/otomi-core/commit/db6d18671ff62276841aa5e7b1f6723cb5d5e175))
- otomi regcred ([29d06c7](https://github.com/redkubes/otomi-core/commit/29d06c72d46e59bdadc27da2f129319c24dffcfe))
- support sub claim mapper ([#377](https://github.com/redkubes/otomi-core/issues/377)) ([a1fd9c5](https://github.com/redkubes/otomi-core/commit/a1fd9c5888ecdba3d84130dc154bfe3389ba92bf))

### Bug Fixes

- added conf for drone branch ([b43cdb8](https://github.com/redkubes/otomi-core/commit/b43cdb87881da4c7603bdcf98629bd41fd32a913))
- missing schema [ci skip] ([54263db](https://github.com/redkubes/otomi-core/commit/54263dbde6ff36df72a446474e5c2d1eb795615c))
- removed interfering CI flag from run-if-changed [ci skip] ([bfd16ae](https://github.com/redkubes/otomi-core/commit/bfd16aebb5aac1e82b79a398d993ef49286d48e6))
- service paths may have underscores...doh! ([e9a8e31](https://github.com/redkubes/otomi-core/commit/e9a8e312451dae0aa1d85479c64da666dccce7b3))

### Others

- **deps:** upgraded harbor to 2.2.0 ([96f0bb3](https://github.com/redkubes/otomi-core/commit/96f0bb35af5f5231b7027ff06b8fd025767ced5d))

### [0.12.7](https://github.com/redkubes/otomi-core/compare/v0.12.6...v0.12.7) (2021-03-19)

### Bug Fixes

- team url for vault [ci skip] ([430ba0b](https://github.com/redkubes/otomi-core/commit/430ba0b8bc9fdc34f1bf7fe32e15062f31021700))

### [0.12.6](https://github.com/redkubes/otomi-core/compare/v0.12.5...v0.12.6) (2021-03-19)

### Bug Fixes

- external secrets, err output [ci skip] ([ae21a70](https://github.com/redkubes/otomi-core/commit/ae21a70b97020f44887a4a1481476b753df8a75a))
- external secrets, err output [ci skip] ([9b762ac](https://github.com/redkubes/otomi-core/commit/9b762ac64a9b2355e1c7a46c11716a2b2c6c9311))
- locked console version for keycloak theme [ci skip] ([a34abc3](https://github.com/redkubes/otomi-core/commit/a34abc308c19cf819b2ad148caa11b6019998d48))

### [0.12.5](https://github.com/redkubes/otomi-core/compare/v0.12.4...v0.12.5) (2021-03-19)

### Features

- added enabled flag to core apps dynamically for console [ci skip] ([ca81dd9](https://github.com/redkubes/otomi-core/commit/ca81dd9b77a4b55bfd287c95e368ad4bb60b22af))

### Bug Fixes

- remove debug flag [ci skip] ([762c44c](https://github.com/redkubes/otomi-core/commit/762c44c9a8db4950f4fde0b69d63247373b5ca56))
- renamed scope for console [ci skip] ([d7a87b2](https://github.com/redkubes/otomi-core/commit/d7a87b20d5eeee1bbc32b7fc3fc9db82de3bec95))

### Others

- **release:** 0.12.4 ([29a4c56](https://github.com/redkubes/otomi-core/commit/29a4c56b83c0cdc10cf6cd8f6086ffa2da781699))

### [0.12.3](https://github.com/redkubes/otomi-core/compare/v0.12.2...v0.12.3) (2021-03-18)

### Bug Fixes

- tools version ([1a34807](https://github.com/redkubes/otomi-core/commit/1a348072e0b833199834a5e0246eaa1776006d7d))
- vault resource validation error ([#357](https://github.com/redkubes/otomi-core/issues/357)) ([#369](https://github.com/redkubes/otomi-core/issues/369)) ([4eb0a8c](https://github.com/redkubes/otomi-core/commit/4eb0a8cc232929512eb1c15fcad731aee43516ff))

### [0.12.2](https://github.com/redkubes/otomi-core/compare/v0.12.1...v0.12.2) (2021-03-18)

### Features

- added vault for external secrets
- add slack notify workflow ([#336](https://github.com/redkubes/otomi-core/issues/336)) ([7b8964d](https://github.com/redkubes/otomi-core/commit/7b8964da778f33f068681bd9329b92a212027146))
- Gitea to hold otomi values ([#358](https://github.com/redkubes/otomi-core/issues/358)) ([b462a22](https://github.com/redkubes/otomi-core/commit/b462a2223f98953fe2cff16af08a1fef15e0e15a))
- named parameters to limit output ([#330](https://github.com/redkubes/otomi-core/issues/330)) ([28758af](https://github.com/redkubes/otomi-core/commit/28758af02937dcd1c999652b9caa44175e9bbc3d))

### Bug Fixes

- add data keyword to policy paths ([58831ab](https://github.com/redkubes/otomi-core/commit/58831ab4a69c646c79373cc8af0ee0258de90cb5))
- adjust property names for TLS secret ([d44f1e4](https://github.com/redkubes/otomi-core/commit/d44f1e443c8e4ee056a9e53ff709f75b83ba9a7c))
- adjust schema defaults for TLS external-secret ([6290b95](https://github.com/redkubes/otomi-core/commit/6290b9594a7d26d841c450b767bcc165d456a3dd))
- ci slack hook ([89220aa](https://github.com/redkubes/otomi-core/commit/89220aa114eab90d8ccb2547fd1897376a83e926))
- ci slack hook ([2d35bf0](https://github.com/redkubes/otomi-core/commit/2d35bf0b22aeb737629df6b1cb1ecc08c48fea32))
- demo values ([b094ac4](https://github.com/redkubes/otomi-core/commit/b094ac45197e67fea257e4ae1d5661d23d430bad))
- drone job disabled ([d917e08](https://github.com/redkubes/otomi-core/commit/d917e089b45027d8b537a344d4d45f2ed1d961aa))
- empty secrets error ([#355](https://github.com/redkubes/otomi-core/issues/355)) ([ab82915](https://github.com/redkubes/otomi-core/commit/ab82915ad4930ed291940f9e890c7e15b2b66138))
- git postinstall should not change package-lock [ci skip] ([ee60a17](https://github.com/redkubes/otomi-core/commit/ee60a17f3c7227319a9cf59749365a14ca3dd164))
- git postinstall should not change package-lock [ci skip] ([937d550](https://github.com/redkubes/otomi-core/commit/937d5503cd5893415d69edaa059a60472924e459))
- github owner regex [ci skip] ([15a8174](https://github.com/redkubes/otomi-core/commit/15a81749da625eca085dba39c60ba2d83697b98b))
- invaluable and flaky test removed ([5205a00](https://github.com/redkubes/otomi-core/commit/5205a005887410e74dc8e6393fad9052dc84d791))
- missing kubeconfig volume ([288ee41](https://github.com/redkubes/otomi-core/commit/288ee41b240b02e209d47e63f7598755a8526952))
- port patch [ci skip] ([88a476c](https://github.com/redkubes/otomi-core/commit/88a476c1c9abf0dc72d746ab8b87636875135fcd))
- remove not used schema ([073836a](https://github.com/redkubes/otomi-core/commit/073836a16e1a4464481b3d7c9712526fa7a6165d))
- remove storage object ([cb5d738](https://github.com/redkubes/otomi-core/commit/cb5d7386159112cf8bfb68f04ee58fe978fa063d))
- rework schema ([bf754f4](https://github.com/redkubes/otomi-core/commit/bf754f40b8c93c193eb11376c7b62433da1aba3d))
- securityContext for kes ([ed0aa0f](https://github.com/redkubes/otomi-core/commit/ed0aa0f2da9837a1e873635687bff570e633f5ab))
- slack channel ([1489a9c](https://github.com/redkubes/otomi-core/commit/1489a9c67aea63e8219579d9d37dfb064c423f11))
- slack message for all ([aa4adcd](https://github.com/redkubes/otomi-core/commit/aa4adcdb0abbac9939de3ef6b68de5d8fe6a8363))
- slack notification moved to main workflow as step ([6c4e234](https://github.com/redkubes/otomi-core/commit/6c4e234efacd80455d0d1f837ac1c7c367aed818))
- slackmessage for slack notfication ([72cb24a](https://github.com/redkubes/otomi-core/commit/72cb24a091b5502f8cd53d54dc82c6042f785a56))
- slackmessage for slack notfication ([7f0e0a2](https://github.com/redkubes/otomi-core/commit/7f0e0a2d6a3a8e1796eb6dd9dcb5a37f8a6a9a6f))
- team name to match namespace regexp pattern ([79ecfdd](https://github.com/redkubes/otomi-core/commit/79ecfdd8dc01763ae311073f9b6ecaf27fb6c0af))
- team services may not exist ([51456a7](https://github.com/redkubes/otomi-core/commit/51456a77edbfdb233803bf05e75b0dfc989e2152))
- team-ns now deployed when no services exist yet ([a6505a3](https://github.com/redkubes/otomi-core/commit/a6505a33294c33a604b136c33254cd98d2eefe7d))
- template bug in hf 60 ([569a1eb](https://github.com/redkubes/otomi-core/commit/569a1eb94378342f65c1d3cc04427f690650edc1))
- template issues ([311f245](https://github.com/redkubes/otomi-core/commit/311f245229c9675c25571510f221016a8626c25b))
- validate-templates warnings ([ff50dc2](https://github.com/redkubes/otomi-core/commit/ff50dc2ac4da61c53000ecd0a1a2ce502edb0d7e))
- vault json schema and demo values ([5dd18e6](https://github.com/redkubes/otomi-core/commit/5dd18e67f6ef963547f0b08c7093b870d84ef711))
- workflow specified for slack notfication ([5f35432](https://github.com/redkubes/otomi-core/commit/5f35432a9385cd9732af0a9336a99ad92183c8f2))

### Others

- add not about unused operator parameter ([9b4ffa1](https://github.com/redkubes/otomi-core/commit/9b4ffa1ee826d283bb9d43cc3e82d0c968ad961f))

### Code Refactoring

- grouped vault as pkg [ci skip] ([ada228c](https://github.com/redkubes/otomi-core/commit/ada228cb18a9f343609037e5b9f42b5dc73e8a4a))
- remove redundant files ([5f8b7ca](https://github.com/redkubes/otomi-core/commit/5f8b7ca54770462a36f639c396d70718c30a4aae))
- removed promitor stuff [ci skip] ([4db8fff](https://github.com/redkubes/otomi-core/commit/4db8fff64c4b5deff3c78f227365182aa01acd97))
- removed unused jwksUri [ci skip] ([973a530](https://github.com/redkubes/otomi-core/commit/973a5305131f6fc2a99c29e7af07c2bb67593324))
- removed vault secrets webhook ([#361](https://github.com/redkubes/otomi-core/issues/361)) ([25d0b1b](https://github.com/redkubes/otomi-core/commit/25d0b1b157945ae0968ec8c7046104e84b119a0b))
- renamed function to match intent [ci skip] ([a2fe642](https://github.com/redkubes/otomi-core/commit/a2fe6422ca7589d5be4d45d68795141296c4297c))
- slack notification ([db67058](https://github.com/redkubes/otomi-core/commit/db670588affd268c515057af0c0311bc3cc46248))

### [0.12.1](https://github.com/redkubes/otomi-core/compare/v0.12.0...v0.12.1) (2021-03-02)

### Features

- allow adding new charts even if they are not defined in the schema sepc ([7bc2cc0](https://github.com/redkubes/otomi-core/commit/7bc2cc0ac17f5492c3349b4911b92866c659b46a))
- expert mode ([#232](https://github.com/redkubes/otomi-core/issues/232)) ([a847e58](https://github.com/redkubes/otomi-core/commit/a847e582c55b2dd10af266e7ab1e81cf87a2a914))

### Bug Fixes

- keycloak job excluding banned image check for entire pod ([6276176](https://github.com/redkubes/otomi-core/commit/6276176e2560407d969ddcdceefeac2cb010cda0))

## [0.12.0](https://github.com/redkubes/otomi-core/compare/v0.11.58...v0.12.0) (2021-03-01)

### Features

- job removal before redeploy ([#312](https://github.com/redkubes/otomi-core/issues/312)) ([4d54382](https://github.com/redkubes/otomi-core/commit/4d543828f863f0e6e568fc5fcc3842726feeab15))
- Kubeapps ([#315](https://github.com/redkubes/otomi-core/issues/315)) ([f60bc96](https://github.com/redkubes/otomi-core/commit/f60bc96cfc4282c00693f110ccce89f3f48cc621))
- kubeapps optional, google kms optional ([d9bc862](https://github.com/redkubes/otomi-core/commit/d9bc8623c2619c6c68794eafb33d6f5937903829))
- Team jobs ([#258](https://github.com/redkubes/otomi-core/issues/258)) ([a0eafe3](https://github.com/redkubes/otomi-core/commit/a0eafe3e1475874392a82005b9ddd90a35ac8bc9))

### Bug Fixes

- add demo values for gatekeeper chart ([#326](https://github.com/redkubes/otomi-core/issues/326)) ([ba0b716](https://github.com/redkubes/otomi-core/commit/ba0b71639db52105098d646626fa86a39b88bab4))
- exit code logic for validate-templates ([9c872ff](https://github.com/redkubes/otomi-core/commit/9c872ff020b1b43a03da77d9f9b43530e719faf8))
- its safe to be unset ([a98ca4a](https://github.com/redkubes/otomi-core/commit/a98ca4aa67a28aa0bc9683b45de2f9159839b090))
- otomi console version with keycloak theme, olm securityContext ([e1e9044](https://github.com/redkubes/otomi-core/commit/e1e9044c5ea450f4bf0ff4e5922dfcd614bc1ad7))
- performance issues yq [#261](https://github.com/redkubes/otomi-core/issues/261) ([#288](https://github.com/redkubes/otomi-core/issues/288)) ([a98e1c8](https://github.com/redkubes/otomi-core/commit/a98e1c8bcbfc91b9266ba010034cb2a034827e2a))
- refactored common trap logic for scripts ([e8523d9](https://github.com/redkubes/otomi-core/commit/e8523d928b58ab793cbfbf4b45d1ae949e4fd81d))
- remove harbor secret init job ([7c3ec6c](https://github.com/redkubes/otomi-core/commit/7c3ec6c1dc63a7a030b3d8a25a235265e259fa04))
- schema for core ([213dc89](https://github.com/redkubes/otomi-core/commit/213dc89891e025cea09d62cbfd1a529d6aea0469))
- script message [ci skip] ([fd177bf](https://github.com/redkubes/otomi-core/commit/fd177bfc195c067b9bea4a702923c46d51805ead))
- secrets split from validate_cluster_env ([278173b](https://github.com/redkubes/otomi-core/commit/278173b877dd5b6d03bfcf8c7967d6160a00b53c))
- setup ([1b5964f](https://github.com/redkubes/otomi-core/commit/1b5964f87efff0aaeac8b6a01e7aaf55f561a8d6))
- sops issue in check-policies ([e534140](https://github.com/redkubes/otomi-core/commit/e534140bf431c561606dba1bbbd0e9cf925f1213))
- token length in schema, keycloak username claim, oauth scope ([9a01013](https://github.com/redkubes/otomi-core/commit/9a010139a6d104739b9e9951332e4e6a35ffc137))
- tools image ([0384446](https://github.com/redkubes/otomi-core/commit/03844465cd6fc7ba59b84e39c28f6d9e1c56d118))
- tools image, removing old crd predeployment ([a2d55fa](https://github.com/redkubes/otomi-core/commit/a2d55fad08b1133529e0ff509846d228dd6e7857))
- tpl issue ([4660cbf](https://github.com/redkubes/otomi-core/commit/4660cbf938936c76ddb8fded6a72753126e2ef19))

### Docs

- updated default demo values [ci skip] ([6395834](https://github.com/redkubes/otomi-core/commit/6395834cfb412de61b23a3b7dad6b54f83f97ef6))
- updated demo settings [ci skip] ([08718d7](https://github.com/redkubes/otomi-core/commit/08718d7a30abb8343507d1fea7f268566d7053f1))

### Code Refactoring

- archive extraction and existence check ([e685b43](https://github.com/redkubes/otomi-core/commit/e685b438689f9199a70bc0635a65e56d41c691dc))
- cleaned up bash code ([73539ea](https://github.com/redkubes/otomi-core/commit/73539eaa080cf04bce6dee9caec699de079acc84))
- gatekeeper excluded namespaces in core yaml ([967626c](https://github.com/redkubes/otomi-core/commit/967626c975d9a2694530e3cba0f99cf13c15a763))
- istio resources, injection, now only for teams and public svcs ([f5354c1](https://github.com/redkubes/otomi-core/commit/f5354c10b7e638bde1e77b29e869fdde0c79629c))
- username mapper set to upn [ci skip] ([d2bc31f](https://github.com/redkubes/otomi-core/commit/d2bc31fe27576fd6e64f2fe7fd6e8cb1e7535ac8))

### [0.11.58](https://github.com/redkubes/otomi-core/compare/v0.11.57...v0.11.58) (2021-02-01)

### Bug Fixes

- crypt ([#304](https://github.com/redkubes/otomi-core/issues/304)) ([6699ddb](https://github.com/redkubes/otomi-core/commit/6699ddb811cd740505ebec40f2508eed8aa1c311))

### [0.11.57](https://github.com/redkubes/otomi-core/compare/v0.11.56...v0.11.57) (2021-02-01)

### Features

- drone job ([#298](https://github.com/redkubes/otomi-core/issues/298)) ([ab7402b](https://github.com/redkubes/otomi-core/commit/ab7402baeecb1c3fd0987c4c474f3afee2ad8594))

### [0.11.56](https://github.com/redkubes/otomi-core/compare/v0.11.55...v0.11.56) (2021-02-01)

### Features

- add configurable username claim mapper ([#278](https://github.com/redkubes/otomi-core/issues/278)) ([1d1eae8](https://github.com/redkubes/otomi-core/commit/1d1eae808977b8b7c0731cacf92d5f06648f61dd))
- upgrade helmfile ([#266](https://github.com/redkubes/otomi-core/issues/266)) ([c5667b3](https://github.com/redkubes/otomi-core/commit/c5667b3579c49d291e7b28a8313401da8f799fd4))

### Bug Fixes

- allow bootstrap without target cluster to install from master [ci skip] ([788ad5f](https://github.com/redkubes/otomi-core/commit/788ad5f72f0a35719c2ace03af85d57790b38564))
- ci flag ([4d8f026](https://github.com/redkubes/otomi-core/commit/4d8f026d83c7343ba93ea17332067fc2326d3f4c))
- ci logic drone ([0d619b4](https://github.com/redkubes/otomi-core/commit/0d619b491c945c3512baefef20aa5b640e412d34))
- docker check for pipeline, job name, added google kms key to drone ([9d1976b](https://github.com/redkubes/otomi-core/commit/9d1976bf4c68df877b9bdd6b49c8e61b5868d327))
- harbor issues ([#303](https://github.com/redkubes/otomi-core/issues/303)) ([da1956b](https://github.com/redkubes/otomi-core/commit/da1956b881fea1f5440177912179d9b97352dfba))
- pdb, added destroy subcommand ([21431b5](https://github.com/redkubes/otomi-core/commit/21431b54ca78862b23d4135bd54b430a1a63a42a))
- regexp pattern error - Lone quantifier brackets ([#283](https://github.com/redkubes/otomi-core/issues/283)) ([24a12e3](https://github.com/redkubes/otomi-core/commit/24a12e3bd6be8fcd57276abc34035bb81559a57e))
- removed kubeapps ([e7f714f](https://github.com/redkubes/otomi-core/commit/e7f714fb56ed63f0e8461cdfd6db6be1e3647b3f))
- validate-templates exit code (fixes [#284](https://github.com/redkubes/otomi-core/issues/284)) ([baa4e99](https://github.com/redkubes/otomi-core/commit/baa4e99fcb5828aed65604e8e360f7b50a0bf067))

### CI

- checking without caching ([c6566e7](https://github.com/redkubes/otomi-core/commit/c6566e7789721c0071ebdd15c40645b2bba9c9b0))

### Docs

- license renamed [ci skip] ([02f6b8a](https://github.com/redkubes/otomi-core/commit/02f6b8a554f53101ecbcb1ca3c54237315ab8d8c))
- updated docs, renamed community email address [ci skip] ([d66a86d](https://github.com/redkubes/otomi-core/commit/d66a86dca9420d647dddf3b6950b4b118ba17ab5))

### Code Refactoring

- accomodating managed appgw ([9676588](https://github.com/redkubes/otomi-core/commit/96765885fd9f3c9039e36e9107682aacd80f29e7))
- don't require ppa, but get yq from developer's docker image ([#273](https://github.com/redkubes/otomi-core/issues/273)) ([b7c8026](https://github.com/redkubes/otomi-core/commit/b7c8026ed8b7fd2d5fe189f86f5b9c8148581c8b)), closes [#272](https://github.com/redkubes/otomi-core/issues/272)
- Error echo's to STDERR ([#271](https://github.com/redkubes/otomi-core/issues/271)) ([38758b5](https://github.com/redkubes/otomi-core/commit/38758b5477849066acc965d6104eb1465a72794e))

### [0.11.55](https://github.com/redkubes/otomi-core/compare/v0.11.54...v0.11.55) (2021-01-05)

### Bug Fixes

- downgrade knative-serving ([1b0c684](https://github.com/redkubes/otomi-core/commit/1b0c6848d826c09e2e9114cff7339c18dcc7859c))

### [0.11.54](https://github.com/redkubes/otomi-core/compare/v0.11.53...v0.11.54) (2020-12-19)

### Features

- add bats documentation ([#236](https://github.com/redkubes/otomi-core/issues/236)) ([a11cacf](https://github.com/redkubes/otomi-core/commit/a11cacf473d9b5e80bd3807cfda0c7b5d777cc29))
- added documentation for schema validation ([#240](https://github.com/redkubes/otomi-core/issues/240)) ([4683d58](https://github.com/redkubes/otomi-core/commit/4683d58672e72c2b94c86d1c49892edc17205678))
- downgrade knative-serving ([#257](https://github.com/redkubes/otomi-core/issues/257)) ([ae2f3e9](https://github.com/redkubes/otomi-core/commit/ae2f3e9d7598cff162d852497c3f891e7b54a359))

### CI

- renamed build job name to conform to rest of our repos [ci skip] ([8735c8d](https://github.com/redkubes/otomi-core/commit/8735c8d4a8a8c474920a16abc21b4f9d5f0ead4e))

### [0.11.53](https://github.com/redkubes/otomi-core/compare/v0.11.52...v0.11.53) (2020-12-15)

### Features

- upgrade knative-serving version ([#230](https://github.com/redkubes/otomi-core/issues/230)) ([528eb07](https://github.com/redkubes/otomi-core/commit/528eb07d73a57ee373f661e1ee13c67fa5e5c626))

### Bug Fixes

- format & sort values-schema.yaml ([#242](https://github.com/redkubes/otomi-core/issues/242)) ([bdd6188](https://github.com/redkubes/otomi-core/commit/bdd61888f6a5a837c624d9e8da4353e478b7059b))
- modify check empty parameters ([#247](https://github.com/redkubes/otomi-core/issues/247)) ([02c1687](https://github.com/redkubes/otomi-core/commit/02c1687936c0e4355778c9dc0dcbe84dace4c503))
- removed 403 redirect ([83fffcc](https://github.com/redkubes/otomi-core/commit/83fffcc2110b0db3fbae574a227611c708ddc316))
- without export not available ([#229](https://github.com/redkubes/otomi-core/issues/229)) ([c231527](https://github.com/redkubes/otomi-core/commit/c231527b4fa384529c3a65e5dedb9d3f289146df))

### Others

- **deps:** bump ini from 1.3.5 to 1.3.8 ([#245](https://github.com/redkubes/otomi-core/issues/245)) ([50a877f](https://github.com/redkubes/otomi-core/commit/50a877ff00d6572787269f6f3352df85615fcead))

### [0.11.52](https://github.com/redkubes/otomi-core/compare/v0.11.50...v0.11.52) (2020-12-07)

### Features

- bats test framework ([#216](https://github.com/redkubes/otomi-core/issues/216)) ([19952a6](https://github.com/redkubes/otomi-core/commit/19952a6308806e95200656b3e2db917f4e3ad59b))
- bumped versions, both dockerfiles ([#227](https://github.com/redkubes/otomi-core/issues/227)) ([3ecc99b](https://github.com/redkubes/otomi-core/commit/3ecc99bdb4da5c80c24e7f58df62a3754e438e69))
- support for aws mfa exec ([#225](https://github.com/redkubes/otomi-core/issues/225)) ([bc12727](https://github.com/redkubes/otomi-core/commit/bc12727b369c49f162e6d8e8d81afcf2ced33c2f))

### Bug Fixes

- cluter overprovisioner [ci skip] ([00dfcc1](https://github.com/redkubes/otomi-core/commit/00dfcc12905e4c42c210f343082f55f894e97c14))
- demo values [ci skip] ([17e92ed](https://github.com/redkubes/otomi-core/commit/17e92edc64c95c1e065f111284e10adee37e594d))
- oauth2-proxy redis connect url ([9381c62](https://github.com/redkubes/otomi-core/commit/9381c62728b5ca9d1692c28c04364250ab2d2267))
- set istio sidecar imagepullpolicy to ifnotpresent ([#223](https://github.com/redkubes/otomi-core/issues/223)) ([4372cef](https://github.com/redkubes/otomi-core/commit/4372cef97004e599fadc61e2fdf6254252c46efc))

### Code Refactoring

- resources, egress, gotmpl dry up, fix for grafana istio ([262694c](https://github.com/redkubes/otomi-core/commit/262694c2cd06c8a5de3e60ead0376b7a9e5ec74e))

### Others

- **release:** 0.11.51 ([e54434e](https://github.com/redkubes/otomi-core/commit/e54434e3a8f8df9545ea5ec4c66e95c7eabd4596))

### [0.11.51](https://github.com/redkubes/otomi-core/compare/v0.11.50...v0.11.51) (2020-12-07)

### Features

- support for aws mfa exec ([#225](https://github.com/redkubes/otomi-core/issues/225)) ([bc12727](https://github.com/redkubes/otomi-core/commit/bc12727b369c49f162e6d8e8d81afcf2ced33c2f))

### Bug Fixes

- demo values [ci skip] ([17e92ed](https://github.com/redkubes/otomi-core/commit/17e92edc64c95c1e065f111284e10adee37e594d))
- oauth2-proxy redis connect url ([9381c62](https://github.com/redkubes/otomi-core/commit/9381c62728b5ca9d1692c28c04364250ab2d2267))
- set istio sidecar imagepullpolicy to ifnotpresent ([#223](https://github.com/redkubes/otomi-core/issues/223)) ([4372cef](https://github.com/redkubes/otomi-core/commit/4372cef97004e599fadc61e2fdf6254252c46efc))

### Code Refactoring

- resources, egress, gotmpl dry up, fix for grafana istio ([262694c](https://github.com/redkubes/otomi-core/commit/262694c2cd06c8a5de3e60ead0376b7a9e5ec74e))

### [0.11.50](https://github.com/redkubes/otomi-core/compare/v0.11.48...v0.11.50) (2020-11-30)

### Bug Fixes

- demo values [ci skip] ([5af6dc7](https://github.com/redkubes/otomi-core/commit/5af6dc7c9a733445cbed43926db3f4baa739e8d4))

### Code Refactoring

- smtp on its own [ci skip] ([f1b64b7](https://github.com/redkubes/otomi-core/commit/f1b64b7263a794e23ff2fa7eb6b4bd617e6e0cd0))

### Others

- **release:** 0.11.49 ([136e4be](https://github.com/redkubes/otomi-core/commit/136e4be8ad6671623082ef73a5e956deb159fa74))

### [0.11.49](https://github.com/redkubes/otomi-core/compare/v0.11.48...v0.11.49) (2020-11-30)

### Code Refactoring

- smtp on its own [ci skip] ([f1b64b7](https://github.com/redkubes/otomi-core/commit/f1b64b7263a794e23ff2fa7eb6b4bd617e6e0cd0))

### [0.11.48](https://github.com/redkubes/otomi-core/compare/v0.11.47...v0.11.48) (2020-11-30)

### Bug Fixes

- alertmanager template [ci skip] ([48a4169](https://github.com/redkubes/otomi-core/commit/48a41698dcbee89b621840ef28d1dbd81c870f76))

### [0.11.47](https://github.com/redkubes/otomi-core/compare/v0.11.46...v0.11.47) (2020-11-30)

### Bug Fixes

- alertmanager template [ci skip] ([62683af](https://github.com/redkubes/otomi-core/commit/62683af7e94fb16f89b0dab3a5867b9d5d48e618))

### [0.11.46](https://github.com/redkubes/otomi-core/compare/v0.11.45...v0.11.46) (2020-11-30)

### Features

- added email+home receiver, moved cloud settings to own props ([8392c47](https://github.com/redkubes/otomi-core/commit/8392c4749948330341c93519450a36f11c953427))
- multiple alert endpoints ([b5aa63c](https://github.com/redkubes/otomi-core/commit/b5aa63c86f379b7eb8b4ad078af3b6b3168d3066))

### Bug Fixes

- alertmanager email conf ([36f5558](https://github.com/redkubes/otomi-core/commit/36f5558ad64c9adef5fe396dc851d38a85b760ce))
- alertmanager email conf home fallback ([adbf699](https://github.com/redkubes/otomi-core/commit/adbf69915f5405efdcaf217b5fee333e497171cf))
- dns config, cli invocation for single cluster validation ([36e2a03](https://github.com/redkubes/otomi-core/commit/36e2a0349ccecdd28dc6264fb3beb808e5678fae))
- home email alert config ([85df7ee](https://github.com/redkubes/otomi-core/commit/85df7ee58a96ac496b9900d469ad9dca3ca10a9a))
- msteams pipeline [ci skip] ([f7c2640](https://github.com/redkubes/otomi-core/commit/f7c2640630bf9e097bbad155ceac14c215d7344d))
- non required props ([b6bac19](https://github.com/redkubes/otomi-core/commit/b6bac192b3e9c889ad21c8b0c808ce7061a8c10b))

### [0.11.45](https://github.com/redkubes/otomi-core/compare/v0.11.44...v0.11.45) (2020-11-20)

### Code Refactoring

- simplified oidc, overloading with keycloak if exists [ci skip] ([4519656](https://github.com/redkubes/otomi-core/commit/4519656b490a87d4fc77ce615e37877b2ef84596))

### [0.11.44](https://github.com/redkubes/otomi-core/compare/v0.11.43...v0.11.44) (2020-11-20)

### Code Refactoring

- grafana ini oidc [ci skip] ([165dd1a](https://github.com/redkubes/otomi-core/commit/165dd1a7c2b74fb5dace4cdb5a9b1b148f900b8a))

### [0.11.43](https://github.com/redkubes/otomi-core/compare/v0.11.42...v0.11.43) (2020-11-20)

### Bug Fixes

- azure exposure was missing apps domain [ci skip] ([410ca0f](https://github.com/redkubes/otomi-core/commit/410ca0f7d28ea102e3b2deb9c068330a532b780b))

### [0.11.42](https://github.com/redkubes/otomi-core/compare/v0.11.41...v0.11.42) (2020-11-20)

### Code Refactoring

- **oidc:** moved oidc.idp props to oidc, added home [ci skip] ([e6a2c64](https://github.com/redkubes/otomi-core/commit/e6a2c646d8a35f7e65b5fb0fb2373a36a458b12a))

### [0.11.41](https://github.com/redkubes/otomi-core/compare/v0.11.40...v0.11.41) (2020-11-20)

### Features

- email receiver for alertmanager ([b8b4198](https://github.com/redkubes/otomi-core/commit/b8b41981f2f39c2d751efb46de97f9fcde1ad6e9))

### Bug Fixes

- demo clusters enabled flag [ci skip] ([9276235](https://github.com/redkubes/otomi-core/commit/92762353dd76e11a10501490cd9a9dc93cd814c8))
- docker build tests can be skipped with build arg SKIP_TESTS [ci skip] ([edb31f7](https://github.com/redkubes/otomi-core/commit/edb31f70fe9936c42caa40a9a61f3ad3ea4ca142))

### Others

- **release:** 0.11.40 ([e74b235](https://github.com/redkubes/otomi-core/commit/e74b235346b5ac9f6e9d77b6f808cb82290c3996))

### [0.11.40](https://github.com/redkubes/otomi-core/compare/v0.11.39...v0.11.40) (2020-11-18)

### Bug Fixes

- console docker compose [ci skip] ([866038c](https://github.com/redkubes/otomi-core/commit/866038c533b707e587c5a89c2ffb0a9664f805cc))
- disabling -e for retrieving customer name ([98f3048](https://github.com/redkubes/otomi-core/commit/98f3048527af338db490e1c0c7617cbd7ffc5aff))
- otomi console command ([353bbbc](https://github.com/redkubes/otomi-core/commit/353bbbc550778966e49c5852e0677acde9547aa3))
- otomi script modifies .gitconfig ([#205](https://github.com/redkubes/otomi-core/issues/205)) ([58d98e3](https://github.com/redkubes/otomi-core/commit/58d98e319f9971255ebc21e6f0c9a902936baf7a))
- the README.md refers to dead links ([#206](https://github.com/redkubes/otomi-core/issues/206)) ([ee37ca3](https://github.com/redkubes/otomi-core/commit/ee37ca3efe6148e4df72c86c9e1dd5885b0d084b))

### [0.11.39](https://github.com/redkubes/otomi-core/compare/v0.11.38...v0.11.39) (2020-11-16)

### Bug Fixes

- bootstrap detecting secrets ([7b1f498](https://github.com/redkubes/otomi-core/commit/7b1f49877f453a959e06ac29e499c7d859e0c645))

### Others

- added theme to schema, demo files, silenced output ([90827a9](https://github.com/redkubes/otomi-core/commit/90827a95ffa361e8a369a0cee60cf98f8e180b48))

### [0.11.38](https://github.com/redkubes/otomi-core/compare/v0.11.37...v0.11.38) (2020-11-13)

### Bug Fixes

- bootstrap flag for demo files ([978eb0e](https://github.com/redkubes/otomi-core/commit/978eb0e5f859d74c07f8d7b69beae31124fdf0ff))
- drone gen [ci skip] ([ba29779](https://github.com/redkubes/otomi-core/commit/ba297795212ad0b6961948017721d6807a65384c))

### [0.11.37](https://github.com/redkubes/otomi-core/compare/v0.11.36...v0.11.37) (2020-11-13)

### Features

- otomi branding for Keycloak (PoC) ([#193](https://github.com/redkubes/otomi-core/issues/193)) ([5b25cf8](https://github.com/redkubes/otomi-core/commit/5b25cf8ff48a7600f10636813ddb83d9c728046a))

### Bug Fixes

- avoid unset var triggering -e ([1752385](https://github.com/redkubes/otomi-core/commit/1752385a65870764954e1a235a16d7d2bb5aabba))
- renaming validate-all ([f891d31](https://github.com/redkubes/otomi-core/commit/f891d314c77b6ccc9a56f575900a20506cd16d13))

### Reverts

- aws authenticator needed for kubectl ([ad5ffdf](https://github.com/redkubes/otomi-core/commit/ad5ffdf1a02325714e13f8a6baa9a9a7fb5bcb83))
- skip-cleanup not working as expected, drone re-enabled ([561b235](https://github.com/redkubes/otomi-core/commit/561b23541fce97e96e167123fc7f205b296a10b4))

### Code Refactoring

- common code, validate-templates now also for target cluster ([b858c1e](https://github.com/redkubes/otomi-core/commit/b858c1e46db24cab0ae63397d0202846887b17c3))
- invalid context now asks for implicit switch ([2a9ecb4](https://github.com/redkubes/otomi-core/commit/2a9ecb487bc3c59766edbaeae6d348ba4a8b9652))
- validate script, schema improved ([24d9659](https://github.com/redkubes/otomi-core/commit/24d9659d12fde9bf190160cc18ec3d16a784c481))

### [0.11.36](https://github.com/redkubes/otomi-core/compare/v0.11.35...v0.11.36) (2020-11-10)

### Features

- make drone optional ([#199](https://github.com/redkubes/otomi-core/issues/199)) ([5756c4c](https://github.com/redkubes/otomi-core/commit/5756c4c0c1888b8639bdefe15cf7ab5d51aed86f))
- require pullSecret only for enterprise edition ([#198](https://github.com/redkubes/otomi-core/issues/198)) ([beabc4e](https://github.com/redkubes/otomi-core/commit/beabc4e2c58c2af598b6860f4f801e97adb142f6))
- validate url ([8c9ed1d](https://github.com/redkubes/otomi-core/commit/8c9ed1d7eeaf943d8cddfd68a04a632005eb8195))

### Bug Fixes

- demo gitattributes for sops ([9bf2c6f](https://github.com/redkubes/otomi-core/commit/9bf2c6f28ae0139486f76ba3ccd6ecb005c565de))
- demo sops file to match online docs ([3f005cb](https://github.com/redkubes/otomi-core/commit/3f005cb083d24b38c7dcd1a1bde8c51f54e3546d))
- edge case template validation ([#202](https://github.com/redkubes/otomi-core/issues/202)) ([b3b51db](https://github.com/redkubes/otomi-core/commit/b3b51db10a0d960ebca9b82e299ed2f58e5e6c8c))
- prettier force enabled [ci skip] ([f75a878](https://github.com/redkubes/otomi-core/commit/f75a87893950bb6793fba663ecea0845297b569d))
- remove redundant harbor logLevel ([#182](https://github.com/redkubes/otomi-core/issues/182)) ([917a37d](https://github.com/redkubes/otomi-core/commit/917a37d1d527cfb82960814be0947a053a7d4e7e))

### Docs

- pruned and updated to link to external docs [ci skip] ([2a5e1f0](https://github.com/redkubes/otomi-core/commit/2a5e1f091804a7d47723af45666045be6f9187f6))

### Code Refactoring

- bad naming [ci skip] ([c1748ba](https://github.com/redkubes/otomi-core/commit/c1748bacf8eba48e5bde4dccd3849af49dc26125))

### Others

- **docs:** pruned values readme to link to online docs ([9d22da1](https://github.com/redkubes/otomi-core/commit/9d22da12ec7274df88854302a0923547998c4436))
- **release:** 0.11.35 ([f51a9f8](https://github.com/redkubes/otomi-core/commit/f51a9f8abe322b5f2cf662b9dfc2dc2e24472a14))

### Styling

- **bash:** added decision to start using bash style guide [ci skip] ([e43b4e3](https://github.com/redkubes/otomi-core/commit/e43b4e37d7e214fe9b93fd8e833f7a044357b3d7))

### CI

- release step fix [ci skip] ([8f5eb06](https://github.com/redkubes/otomi-core/commit/8f5eb061d9a3535e315115dc45ef2e3631633c2c))

### [0.11.35](https://github.com/redkubes/otomi-core/compare/v0.11.34...v0.11.35) (2020-10-30)

### Features

- **values:** added cluster.enabled toggle ([4cc3303](https://github.com/redkubes/otomi-core/commit/4cc3303ae076679bc83f053ee4475ea97f822d08))

### Bug Fixes

- **keycloak:** theme config needed for tasks ([6658359](https://github.com/redkubes/otomi-core/commit/665835939380d5553e6f4670ff23131f516d7cb6))
- charts to use new public images ([0b9f2d6](https://github.com/redkubes/otomi-core/commit/0b9f2d6e9bc7a0335665c9bf4cd0de36b4cece65))
- dependabot issues ([9cb9022](https://github.com/redkubes/otomi-core/commit/9cb9022069129f51d96aa5f4e1411d156872102b))
- gen drone for development [ci skip] ([2990c8a](https://github.com/redkubes/otomi-core/commit/2990c8aa952bc975b4dcbd2798be395d6957762c))
- grafana istio token removed, restarting api+web on push ([ddbc003](https://github.com/redkubes/otomi-core/commit/ddbc00348d53beb58aa0d581393923e818c75728))
- removed harbor-init ([f90980c](https://github.com/redkubes/otomi-core/commit/f90980c6704547abcb30ef83f2daa2e5326e5a52))
- workflow ([13b2934](https://github.com/redkubes/otomi-core/commit/13b29349cef1826cddaa7dc4d243dec8c3bf185c))

### [0.11.34](https://github.com/redkubes/otomi-core/compare/v0.11.33...v0.11.34) (2020-10-27)

### Bug Fixes

- exporting core version for api ([21023e5](https://github.com/redkubes/otomi-core/commit/21023e55d0af5ff84ca69d9964bdd2629fdfa931))

### [0.11.33](https://github.com/redkubes/otomi-core/compare/v0.11.32...v0.11.33) (2020-10-26)

### Bug Fixes

- show all errors ([#180](https://github.com/redkubes/otomi-core/issues/180)) ([2e0565e](https://github.com/redkubes/otomi-core/commit/2e0565eaa826885ffbc5c41557edeca271048725))
- weave-scope smaller resources ([56ecceb](https://github.com/redkubes/otomi-core/commit/56ecceb62dc8d3c8fd50eb46e51205c08b3fbc2d))

### Code Refactoring

- cluster id ([501c6fe](https://github.com/redkubes/otomi-core/commit/501c6fe27cd083440587f26f762f7761b0f7ff86))

### Feature Improvements

- exporting core version for web ([3b934a7](https://github.com/redkubes/otomi-core/commit/3b934a7236bda5f5bac270804c7b894b3cf424df))
- exposing all clusters to web ([bb79aa8](https://github.com/redkubes/otomi-core/commit/bb79aa825f4f186f776ca5d05dc7ff34bcee3d18))
- task can have init, used for keycloak to detect if it's up ([ee9d081](https://github.com/redkubes/otomi-core/commit/ee9d081c5a21fe4011841aeb95916aadbe5c81d3))

### [0.11.32](https://github.com/redkubes/otomi-core/compare/v0.11.31...v0.11.32) (2020-10-26)

### Bug Fixes

- hello in team-otomi [ci skip] ([e8ec144](https://github.com/redkubes/otomi-core/commit/e8ec14451df50b92c66d2939ed0fad87e193d008))

### Feature Improvements

- upgraded ca, ingress order for keycloak ([758692c](https://github.com/redkubes/otomi-core/commit/758692c0817b10c86767942b5ce426a4d1d8bfbc))

### [0.11.31](https://github.com/redkubes/otomi-core/compare/v0.11.30...v0.11.31) (2020-10-25)

### Features

- add overprovisioning chart ([#145](https://github.com/redkubes/otomi-core/issues/145)) ([193297f](https://github.com/redkubes/otomi-core/commit/193297f4d34da9a4e8af765e6d3ed9e49f61f382))
- linting of manifests ([#124](https://github.com/redkubes/otomi-core/issues/124)) ([e0434de](https://github.com/redkubes/otomi-core/commit/e0434def4393f27c95801f3b9847110ead478813))
- make otomi-console use public image [#175](https://github.com/redkubes/otomi-core/issues/175) ([1caafd4](https://github.com/redkubes/otomi-core/commit/1caafd44b2cea564f5f09eabd21e513ca3316891))
- upgrade harbor chart ([b23e934](https://github.com/redkubes/otomi-core/commit/b23e93439bd3940e8f99ab07b03540bdffe7978b))

### Bug Fixes

- change permission form postgress filesystem ([0ef05da](https://github.com/redkubes/otomi-core/commit/0ef05da3735c43dfd92047eb914a440fcc151443))
- cluster data, otomi encrypt ([d4debe4](https://github.com/redkubes/otomi-core/commit/d4debe42a563d2dcd46877ed6768f1d12258df4b))
- do not bypass harbor core service ([bbe5a79](https://github.com/redkubes/otomi-core/commit/bbe5a797a346c3f4fd61e57b50dead46c6b2386a))
- do not set relativeUrls ([f71a425](https://github.com/redkubes/otomi-core/commit/f71a4257bfa4f7254eb07553f0ec32f660563fd8))
- enable harbor relitveUrls ([16d0d68](https://github.com/redkubes/otomi-core/commit/16d0d682d2b0d8cebd0c393a7ae7a3c1655eb2d0))
- expose only /service/token from harbor and make internal /service/\* ([194591f](https://github.com/redkubes/otomi-core/commit/194591f8db9ebc8204b2125e6cd252e1def2908c))
- harbor issues ([#170](https://github.com/redkubes/otomi-core/issues/170)) ([f0d6115](https://github.com/redkubes/otomi-core/commit/f0d6115fae3074e105e7835f1879ab92122522f8))
- harbor push [#109](https://github.com/redkubes/otomi-core/issues/109) ([00adb03](https://github.com/redkubes/otomi-core/commit/00adb034a0071d1f1bb47ea949f806e8bba74c7e))
- harbor virtualservice ([3474d56](https://github.com/redkubes/otomi-core/commit/3474d568e1759a29c202f3c89a1e426073d6eb26))
- image tag ([14a7a3c](https://github.com/redkubes/otomi-core/commit/14a7a3cc459fc3bc7824e2da888676ce7423b408))
- make paths to harbor registry public ([d4d35ae](https://github.com/redkubes/otomi-core/commit/d4d35aed5ddb6bfb0a0bacaebb39b7f5486a4850))
- missing 0.17 folder ([049451f](https://github.com/redkubes/otomi-core/commit/049451f89f63e7de8885efe1bca791163767f483))
- missing 0.17 operator knative, output silence ([60c1516](https://github.com/redkubes/otomi-core/commit/60c15163423304a0fd553932d31ce5b3b7c0be9a))
- missing file, fixes [#168](https://github.com/redkubes/otomi-core/issues/168) ([15715be](https://github.com/redkubes/otomi-core/commit/15715be7dc31063e4cfdca9e60475968e36af0c1))
- moved precommit back to own line ([93dcef4](https://github.com/redkubes/otomi-core/commit/93dcef460110d904ba5c45fd5d44e6e1ba52c00e))
- named ports ([0594416](https://github.com/redkubes/otomi-core/commit/0594416150f6b45f50e0c16146a924519126c3d7))
- otomi crypt relative path for files given for terminal completion ([21cf091](https://github.com/redkubes/otomi-core/commit/21cf091ddf14500fbd248a1d2c7c7f86169216a5))
- regression: missing rewrite section, upgraded nginx ([eb3a942](https://github.com/redkubes/otomi-core/commit/eb3a942b080762922ef1a25cedf2037a2356dccb))
- reverting named ports ([459315f](https://github.com/redkubes/otomi-core/commit/459315f2c16a6bd885051263233a3b7d8744bd62))
- spec ([a6c8fa9](https://github.com/redkubes/otomi-core/commit/a6c8fa913af727287010114393ecdbfbf254cdd0))
- template validation issues ([#168](https://github.com/redkubes/otomi-core/issues/168)), overprovisioner defaults, docs ([21fa65b](https://github.com/redkubes/otomi-core/commit/21fa65bfa99324bb5d0418cddbdfc3368afd538a))
- temporary work around for otomi-tasks ([8f37ee5](https://github.com/redkubes/otomi-core/commit/8f37ee529e630f74ebb2cb625ef1501bbe00fceb))
- tools user, resources ([95d3f1e](https://github.com/redkubes/otomi-core/commit/95d3f1e7b5890596c8b519d25501143a812cb4a2))
- update harbor artifacts ([383a5d6](https://github.com/redkubes/otomi-core/commit/383a5d6be5588c12ac23baddf1e5bc488e9f5a18))
- use otomi-tasks beta release as a workaround ([fbda907](https://github.com/redkubes/otomi-core/commit/fbda907b641febe6e54e9436b614e9710bc9209b))
- workflow patch to limit release commands to master only ([3eadc7f](https://github.com/redkubes/otomi-core/commit/3eadc7fbf1a2194fa63569d42f997d59335b1b6b))

### Build System

- update outdated and insecure npm modules ([#159](https://github.com/redkubes/otomi-core/issues/159)) ([538d3e5](https://github.com/redkubes/otomi-core/commit/538d3e54d818335655eda9f33cda83f92c70f9ae))

### Code Refactoring

- change otomi-tasks docker image for jobs charts ([#148](https://github.com/redkubes/otomi-core/issues/148)) ([25e8055](https://github.com/redkubes/otomi-core/commit/25e8055982ddf86e1aeaed0187c0256fe916db0c))

### Tests

- **spellcheck:** spellcheck scope now including docs folder ([b3f55c8](https://github.com/redkubes/otomi-core/commit/b3f55c872c7138c3e810a50525e0e58912644a46))

### Docs

- add note about working with secrets.\*.yaml files ([#163](https://github.com/redkubes/otomi-core/issues/163)) ([bb6b9a3](https://github.com/redkubes/otomi-core/commit/bb6b9a367bdad28a578540a6fd43e9bf4839309f))
- add otomi SRE script ([a04d413](https://github.com/redkubes/otomi-core/commit/a04d4137493a9c9726ce43d26f952bad4d4bd198)), closes [#11](https://github.com/redkubes/otomi-core/issues/11)
- updated with workaround for gcloud refresh error ([672f6d7](https://github.com/redkubes/otomi-core/commit/672f6d769c6f34b8554d9d968b3767b6e2bcb609))

### Feature Improvements

- do not print ajv std output ([231ee8e](https://github.com/redkubes/otomi-core/commit/231ee8ed66f228ba73dbdaa803f74d7e95a9863c))
- expose image properties for each job ([e2a13be](https://github.com/redkubes/otomi-core/commit/e2a13be78027d21c562a566a221643e3cec9c1e9))
- knative version tied to k8s version ([a3e46ab](https://github.com/redkubes/otomi-core/commit/a3e46ab11a046d547bfe80e5804eca275092ad62))
- make explicit that harbors internalTLS is disabled ([ca1e470](https://github.com/redkubes/otomi-core/commit/ca1e470cfc0d63d871c144db19c98354f24bca02))
- make trivy automountServiceAccountToken configurable ([59f048a](https://github.com/redkubes/otomi-core/commit/59f048abfd8bcc857acb589571bfc6654cbf56fe))
- read cluster config from clusters.yaml ([#165](https://github.com/redkubes/otomi-core/issues/165)) ([2787a9a](https://github.com/redkubes/otomi-core/commit/2787a9a564671a5765000c482e2cd1fa747615e7))
- remove harbor .github dir ([c3b7c2e](https://github.com/redkubes/otomi-core/commit/c3b7c2e2c98ac532b5b5698f86740f098a01d03c))
- remove harbor artifacts ([ab84d7a](https://github.com/redkubes/otomi-core/commit/ab84d7adfaf2bb9a37847042d7b038131a4d6d2c))
- remove key-rotation job ([e663914](https://github.com/redkubes/otomi-core/commit/e663914ff45c64d3998cd3d2c1dd0585ebffc46b))

### [0.11.30](https://github.com/redkubes/otomi-core/compare/v0.11.28...v0.11.30) (2020-10-06)

### Bug Fixes

- fix indentation ([0939942](https://github.com/redkubes/otomi-core/commit/0939942d4ceda1320d538d2049b1620501028717))
- otomi-core tag ([6c95240](https://github.com/redkubes/otomi-core/commit/6c95240e11d7b762fff3be18e12264e7a3a4e0f0))
- remove adding v prefix ([81dacf6](https://github.com/redkubes/otomi-core/commit/81dacf659b0293f762cb0326402a308f294ab7e9))

### Docs

- added adr for github workflow [ci skip] ([aa01076](https://github.com/redkubes/otomi-core/commit/aa010764d95d4f9a604f211890fcdd43418b1aca))
- updated with guidelines for contribution and conduct [ci skip] ([82be702](https://github.com/redkubes/otomi-core/commit/82be70227559c4a108eccb8903200066f12ed7c4))

### Feature Improvements

- pipelines now always pulling, atomic always true [ci skip] ([960faff](https://github.com/redkubes/otomi-core/commit/960faff90e250213708640de37ddfbe57849b62c))

### Others

- **release:** 0.11.29 ([79abc32](https://github.com/redkubes/otomi-core/commit/79abc32fc9cc8eb82ce2b35d7748ec84a9fb36fa))

### [0.11.29](https://github.com/redkubes/otomi-core/compare/v0.11.28...v0.11.29) (2020-10-06)

### Bug Fixes

- fix indentation ([0939942](https://github.com/redkubes/otomi-core/commit/0939942d4ceda1320d538d2049b1620501028717))
- otomi-core tag ([6c95240](https://github.com/redkubes/otomi-core/commit/6c95240e11d7b762fff3be18e12264e7a3a4e0f0))

### Docs

- added adr for github workflow [ci skip] ([aa01076](https://github.com/redkubes/otomi-core/commit/aa010764d95d4f9a604f211890fcdd43418b1aca))
- updated with guidelines for contribution and conduct [ci skip] ([82be702](https://github.com/redkubes/otomi-core/commit/82be70227559c4a108eccb8903200066f12ed7c4))

### Feature Improvements

- pipelines now always pulling, atomic always true [ci skip] ([960faff](https://github.com/redkubes/otomi-core/commit/960faff90e250213708640de37ddfbe57849b62c))

### [0.11.28](https://github.com/redkubes/otomi-core/compare/v0.11.27...v0.11.28) (2020-10-03)

### Bug Fixes

- otomi commit [ci skip] ([3a8c0b9](https://github.com/redkubes/otomi-core/commit/3a8c0b9b26d3b6bf9705bbbe3327f2599194f544))

### [0.11.27](https://github.com/redkubes/otomi-core/compare/v0.11.26...v0.11.27) (2020-10-03)

### Bug Fixes

- crypt key for tools server [ci skip] ([fcc0712](https://github.com/redkubes/otomi-core/commit/fcc0712673b12b6c9dbaf40437020a950e29e45c))

### Others

- **release:** 0.11.26 ([655a919](https://github.com/redkubes/otomi-core/commit/655a919fd7714508fb587b227d2b87d40b5d7ab9))
- **release:** 0.11.26 ([1c71ae9](https://github.com/redkubes/otomi-core/commit/1c71ae9da968d044a04b6709f6744ddb83b0052e))
- **release:** 0.11.26 ([6b7ac6e](https://github.com/redkubes/otomi-core/commit/6b7ac6e6d6d6eeb44e84a62126f4816b09e1f5dd))
- **release:** 0.11.26 ([575d67a](https://github.com/redkubes/otomi-core/commit/575d67afa52e6b41c3ff5f6deebed71df6366d57))
- **release:** 0.11.26 ([993b05c](https://github.com/redkubes/otomi-core/commit/993b05c44a04e3e3a2bfd7be8f45ddf4d5558a77))
- **release:** 0.11.26 ([a69da7f](https://github.com/redkubes/otomi-core/commit/a69da7ff19e45f389b939cab056743f957470288))
- **release:** 0.11.26 ([6acc717](https://github.com/redkubes/otomi-core/commit/6acc71715841d5322cd7706b993a5f0ffe35e7fd))
- **release:** 0.11.26 ([47d3a64](https://github.com/redkubes/otomi-core/commit/47d3a64b07587361af3f528901ca1e4ddafeb31a))
- **release:** 0.11.26 ([98668a0](https://github.com/redkubes/otomi-core/commit/98668a035c0be81d3a70d18fe9d6a29dcf58247b))
- **release:** 0.11.26 ([fba9b20](https://github.com/redkubes/otomi-core/commit/fba9b202068b843867dff72d3d3f4c8c577a0167))

### [0.11.26](https://github.com/redkubes/otomi-core/compare/v0.11.25...v0.11.26) (2020-10-02)

### Bug Fixes

- crypt key [ci skip] ([edfd5e0](https://github.com/redkubes/otomi-core/commit/edfd5e074a173a424767f5f89108150b15ccd3b2))
- crypt mechanism [ci skip] ([2177615](https://github.com/redkubes/otomi-core/commit/2177615a31caa3c393e40982fccb3fc7f8a68e34))
- enhanced otomi en-/decrypt [ci skip] ([f8234dc](https://github.com/redkubes/otomi-core/commit/f8234dc0b1fa444b97f0fff4ed93f7fea33a88aa))
- forgot hooks, enhanced otomi en-/decrypt [ci skip] ([ac49c97](https://github.com/redkubes/otomi-core/commit/ac49c97e0ac7876274a85f44f97884bb151190a5))

### Others

- **release:** 0.11.25 ([abded08](https://github.com/redkubes/otomi-core/commit/abded085e8da4aaf1ecaf2e6485850465e07621d))
- **release:** 0.11.25 ([06ed385](https://github.com/redkubes/otomi-core/commit/06ed385d90903dc60bf555d5a503a09f15da716b))
- **release:** 0.11.25 ([a22b4b5](https://github.com/redkubes/otomi-core/commit/a22b4b51e4483812d816dbe629ee306d419434f9))
- **release:** 0.11.25 ([de31ad3](https://github.com/redkubes/otomi-core/commit/de31ad3494fcc12c79c7ed221c32be1cdde1f7f9))

### [0.11.25](https://github.com/redkubes/otomi-core/compare/v0.11.24...v0.11.25) (2020-10-02)

### Others

- **release:** 0.11.24 ([6eabd2b](https://github.com/redkubes/otomi-core/commit/6eabd2bbb4f96c487aac35547127dba458221f58))
- **release:** 0.11.24 ([825f7c7](https://github.com/redkubes/otomi-core/commit/825f7c79fb0e271fe777d4f215418e36c1b48c40))
- **release:** 0.11.24 ([1054c97](https://github.com/redkubes/otomi-core/commit/1054c9785b4169f3831382a34c67eff9fc7c4245))
- **release:** 0.11.24 ([f022e06](https://github.com/redkubes/otomi-core/commit/f022e067ddae973504de2c6960bc23e643981276))

### [0.11.24](https://github.com/redkubes/otomi-core/compare/v0.11.23...v0.11.24) (2020-10-02)

### Features

- docker lint stage, docker-compose for console ([#154](https://github.com/redkubes/otomi-core/issues/154)) ([bd3cbe8](https://github.com/redkubes/otomi-core/commit/bd3cbe8c9f0c15fffd597d4a195df4521162369e))

### Bug Fixes

- cspell.json missing [ci skip] ([c2ef684](https://github.com/redkubes/otomi-core/commit/c2ef6845f6f993e4fb4cdd1fe4f05bdecd8db05d))

### Docs

- added npm install section [ci skip] ([646ef96](https://github.com/redkubes/otomi-core/commit/646ef9669dd225d49307058843b0a443725cbc89))

### [0.11.23](https://github.com/redkubes/otomi-core/compare/v0.11.22...v0.11.23) (2020-09-30)

### Features

- spellcheck enabled, updated schema ([de9cb0d](https://github.com/redkubes/otomi-core/commit/de9cb0d57fd582ea1649f30c761b7406193e2a50))

### Bug Fixes

- ci image ([21ea4a4](https://github.com/redkubes/otomi-core/commit/21ea4a4ec943254cf3dfbf93f724114dc286f2ab))
- ci image ([4857bb6](https://github.com/redkubes/otomi-core/commit/4857bb6bda7822af8d7efade24d8a913f2dff134))
- lint:all ([d882880](https://github.com/redkubes/otomi-core/commit/d882880408fccfb5751ecad9cf58ce938abf8e7e))
- multistage dockerfile needed for tests ([e977bd8](https://github.com/redkubes/otomi-core/commit/e977bd86fb3374febacbabfe6443d51564ff1569))
- spellcheck disabled for now ([500d7f9](https://github.com/redkubes/otomi-core/commit/500d7f96bf79e5e7d17e45840de15b84f0c3cc3e))
- spellcheck disabled for now ([3af4a0f](https://github.com/redkubes/otomi-core/commit/3af4a0f2e23d878633d8e25c54ef3c0966c2d04c))

### Feature Improvements

- spellcheck added to pre-commit ([d7ad1e5](https://github.com/redkubes/otomi-core/commit/d7ad1e59e978360b920e0c5ddc0d968d89151a5a))

### [0.11.22](https://github.com/redkubes/otomi-core/compare/v0.11.21...v0.11.22) (2020-09-30)

### Bug Fixes

- downgrade keycloak replicas to one ([a7999fe](https://github.com/redkubes/otomi-core/commit/a7999fe2ebbf33e88d8f96eeb6b8d359cdba6984))
- remove unexisting command ([298b75f](https://github.com/redkubes/otomi-core/commit/298b75f9607703add4d156aec493bf0e0aecfff5))
- removed env output from drun [ci skip] ([5dd6151](https://github.com/redkubes/otomi-core/commit/5dd6151c0b02a08fe46a207335f74bc6fd57147e))
- vscode sops setting for decryption ([d0adf0b](https://github.com/redkubes/otomi-core/commit/d0adf0bcf4795f9c792ed6860d9900eb5e572a3f))

### [0.11.21](https://github.com/redkubes/otomi-core/compare/v0.11.20...v0.11.21) (2020-09-29)

### Bug Fixes

- incoming webhook to auth ingress [ci skip] ([3e252dc](https://github.com/redkubes/otomi-core/commit/3e252dc05a7eb180356d96010a33b81220f86ffd))

### [0.11.20](https://github.com/redkubes/otomi-core/compare/v0.11.19...v0.11.20) (2020-09-29)

### Features

- jsonschema for values ([#150](https://github.com/redkubes/otomi-core/issues/150)) ([1ea90b7](https://github.com/redkubes/otomi-core/commit/1ea90b72951c12bfc4b471486a484e70cb4bf22e)), closes [#137](https://github.com/redkubes/otomi-core/issues/137)

### Bug Fixes

- missing route ([#147](https://github.com/redkubes/otomi-core/issues/147)) ([df54c60](https://github.com/redkubes/otomi-core/commit/df54c6058d6f1968d3014a5343192dc55a7c8fce))
- sops settings for vscode [ci skip] ([2a76f75](https://github.com/redkubes/otomi-core/commit/2a76f759d87d13b22ed753c0ded1b761ef037a3e))

### [0.11.19](https://github.com/redkubes/otomi-core/compare/v0.11.18...v0.11.19) (2020-09-29)

### Features

- added drone-admit-members [ci skip] ([3131556](https://github.com/redkubes/otomi-core/commit/3131556b731790b0c9bb1806cb43da2b946c1cbc))

### Bug Fixes

- adding owners file [ci skip] ([f5d37d6](https://github.com/redkubes/otomi-core/commit/f5d37d65809ed62dc601464aadf3aceadca19d57))
- cleaned up old charts, fixes version flipping [ci skip] ([52a6680](https://github.com/redkubes/otomi-core/commit/52a6680f846ea6d1d21ec3a3dd3b2535abc76945))
- default to empty dict even if value is null ([ae4c742](https://github.com/redkubes/otomi-core/commit/ae4c7425992563c6a37b710f1baedf607ccc735f))
- deploy an existing k8s service to team-demo ([#136](https://github.com/redkubes/otomi-core/issues/136)) ([9e11c93](https://github.com/redkubes/otomi-core/commit/9e11c938a1ffb25ce7e8059849259344212afe67))
- limit drone concurency to one ([#149](https://github.com/redkubes/otomi-core/issues/149)) ([c6df454](https://github.com/redkubes/otomi-core/commit/c6df454526485d673b5c103db6d1664b74bea2e5))
- missing file coming from bootstrap [ci skip] ([3ff1711](https://github.com/redkubes/otomi-core/commit/3ff1711f6f495b3d7651c6e579a71daa13752d37))
- test output was too sensitive [ci skip] ([94b02ea](https://github.com/redkubes/otomi-core/commit/94b02ea49f4523d946f6022b40ae9e651bc5fc50))

### Reverts

- Revert "Fix to server (#139)" ([fa193fd](https://github.com/redkubes/otomi-core/commit/fa193fd5480673353d088215816e3c7674f05fcd)), closes [#139](https://github.com/redkubes/otomi-core/issues/139)

### Others

- **release:** 0.11.18 ([c1cac4d](https://github.com/redkubes/otomi-core/commit/c1cac4de1cb09ead0a7e36e4a3fb15680ee65069))
- **release:** 0.11.18 ([9e0ae1f](https://github.com/redkubes/otomi-core/commit/9e0ae1fa74ea88bc603319296184aae4323ef95d))

### Feature Improvements

- helmfile output filter [ci skip] ([9ea4dff](https://github.com/redkubes/otomi-core/commit/9ea4dff43b1a015384917a2d5c6af759b1dee5d9))

### Docs

- architecture - ingress overview added [ci skip] ([103b4f0](https://github.com/redkubes/otomi-core/commit/103b4f09734c1ff991ee0b80d1201f87c9a90db3))

### [0.11.18](https://github.com/redkubes/otomi-core/compare/v0.11.17...v0.11.18) (2020-09-22)

### Bug Fixes

- env [ci skip] ([f1e1aba](https://github.com/redkubes/otomi-core/commit/f1e1abaeeba1141519510b4cf5d2cfb44e63b0f5))

### [0.11.17](https://github.com/redkubes/otomi-core/compare/v0.11.16...v0.11.17) (2020-09-22)

### [0.11.16](https://github.com/redkubes/otomi-core/compare/v0.11.15...v0.11.16) (2020-09-22)

### Bug Fixes

- team secrets [ci skip] ([c670d0a](https://github.com/redkubes/otomi-core/commit/c670d0a0512e89b9a3d4750843aabd299f08c5f1))

### Others

- **release:** 0.11.15 ([b097c6d](https://github.com/redkubes/otomi-core/commit/b097c6dd038d152524acc15f2b1c54fc893f0642))
- **release:** 0.11.15 ([132b222](https://github.com/redkubes/otomi-core/commit/132b222a98c92862c8cc59ca281180e8328bbdf8))
- **release:** 0.11.15 ([4cc48f3](https://github.com/redkubes/otomi-core/commit/4cc48f3b1ab5d8ba2e2a70338c9ca023a8fcb9c6))
- **release:** 0.11.15 ([bb6d7bc](https://github.com/redkubes/otomi-core/commit/bb6d7bc53e3e5822fa7a3bbbbf5702cd9acc2514))
- **release:** 0.11.15 ([e015f55](https://github.com/redkubes/otomi-core/commit/e015f550d3d3e09c94272286a4b4f3f040c92390))

### [0.11.15](https://github.com/redkubes/otomi-core/compare/v0.11.14...v0.11.15) (2020-09-22)

### Bug Fixes

- pipeline ([7e73c94](https://github.com/redkubes/otomi-core/commit/7e73c94306605bef1f3119436eaa01634d0aecd7))

### [0.11.14](https://github.com/redkubes/otomi-core/compare/v0.11.13...v0.11.14) (2020-09-22)

### Others

- **release:** 0.11.12 ([4048224](https://github.com/redkubes/otomi-core/commit/404822467c0b76c736844c4f0a345abe166c86a6))
- **release:** 0.11.13 ([4c9fb25](https://github.com/redkubes/otomi-core/commit/4c9fb25ace340fc86cc12cc74ea2185f7d01b279))
- **release:** 0.11.13 ([d84418e](https://github.com/redkubes/otomi-core/commit/d84418e0086eb71ef65973aec192f4de48fcead1))
- **release:** 0.11.13 ([9393bbe](https://github.com/redkubes/otomi-core/commit/9393bbe80984b9334843ae521aa974cbf3c0e81d))
- **release:** 0.11.13 ([69c18a1](https://github.com/redkubes/otomi-core/commit/69c18a130e04fab8571d57b96b11c1372b79937a))
- **release:** 0.11.13 ([7431171](https://github.com/redkubes/otomi-core/commit/74311719b433fea8a8be61e297a07b4cbdeee915))

### [0.11.13](https://github.com/redkubes/otomi-core/compare/v0.11.12...v0.11.13) (2020-09-22)

### Others

- **release:** 0.11.12 ([de1078d](https://github.com/redkubes/otomi-core/commit/de1078d7e99d724bbf2feecfedc8f04ec116f2e4))

### [0.11.12](https://github.com/redkubes/otomi-core/compare/v0.11.11...v0.11.12) (2020-09-22)

### [0.11.11](https://github.com/redkubes/otomi-core/compare/v0.11.10...v0.11.11) (2020-09-22)

### Bug Fixes

- version [ci skip](<[02fe709](https://github.com/redkubes/otomi-core/commit/02fe70931c991493271fff163c639279e8426e16)>)

### [0.11.10](https://github.com/redkubes/otomi-core/compare/v0.11.9...v0.11.10) (2020-09-22)

### Features

- add redirect uri used for user logout ([be2fadd](https://github.com/redkubes/otomi-core/commit/be2fadd3021a18f2871694cfdc63c4022c1ed4f5))

### Bug Fixes

- crypt routine now using helm secrets ([2535a77](https://github.com/redkubes/otomi-core/commit/2535a77a64dd4faf060f06b16907cfef81f34d20))
- docs [ci skip](<[555cc6d](https://github.com/redkubes/otomi-core/commit/555cc6dbe14045cb032546631ee321fb7361cf0a)>)
- docs [ci skip](<[c6680a8](https://github.com/redkubes/otomi-core/commit/c6680a8cd8cc153d160bb1d2a0d3f3962d8bd77e)>)
- gcp key [ci skip](<[d2cfa9b](https://github.com/redkubes/otomi-core/commit/d2cfa9be926b4e41cb5d285bf5b4c53b2733e677)>)

### [0.11.9](https://github.com/redkubes/otomi-core/compare/v0.11.8...v0.11.9) (2020-09-17)

### Features

- enrich drone slack notification ([f8758fc](https://github.com/redkubes/otomi-core/commit/f8758fc87120095712aeb0345db07ca7673eb863))

### Bug Fixes

- drone pipeline ([a7e07d7](https://github.com/redkubes/otomi-core/commit/a7e07d70e01e288f11ddcaf893aca527e0ec5bf6))
- exist if any command in pipe fails ([5c5aeef](https://github.com/redkubes/otomi-core/commit/5c5aeef87bc2174fb0199a43df11bea422e71f38))
- exit with non-zero on test.sh failure ([d99e37b](https://github.com/redkubes/otomi-core/commit/d99e37b1c4e7aeac144f13b744fffb51ac975613))
- image tag for drone pipeline ([c9c71ec](https://github.com/redkubes/otomi-core/commit/c9c71eccd3a02fa8de3e5898b4b50918f6c393c7))
- pipeline regression [ci skip](<[a3713da](https://github.com/redkubes/otomi-core/commit/a3713dae41264b5aaf6442f2b97021af6b24d1c9)>)
- pipeline regression [ci skip](<[90a9ab4](https://github.com/redkubes/otomi-core/commit/90a9ab4519ab0ee3aaf2781c7479b63f9496304a)>)
- pullSecret and team secrets ([173d7eb](https://github.com/redkubes/otomi-core/commit/173d7eb9fb74abfccea3e5221f7f475640a21598))
- read otomi version from clusters.yaml ([bd1724f](https://github.com/redkubes/otomi-core/commit/bd1724f1c5e63c2e1d39c53647541cc90b274e11))
- regression deploy [ci skip](<[ccdc0f7](https://github.com/redkubes/otomi-core/commit/ccdc0f7ffc6224384434a8b5a4d03bb3be1005d4)>)
- regression deploy [ci skip](<[c7a6e62](https://github.com/redkubes/otomi-core/commit/c7a6e62085b6387bc5d1717a6b62758dff382e82)>)
- regression, sorry ([208027c](https://github.com/redkubes/otomi-core/commit/208027cb2f750e306e26d4bff9c18c9f721cccdc))
- remove unnecessary ownership change ([bd5b8e9](https://github.com/redkubes/otomi-core/commit/bd5b8e9708148065e5b0104f44de887e5c3e3924))
- removed refs to otomi in bin scripts [ci skip](<[49e51e5](https://github.com/redkubes/otomi-core/commit/49e51e53b1f1354927760d8e1ea38ee1a0fdf9a0)>)

### [0.11.8](https://github.com/redkubes/otomi-core/compare/v0.11.7...v0.11.8) (2020-09-16)

### Features

- test if helmfile can template provided values ([2ce8b9b](https://github.com/redkubes/otomi-core/commit/2ce8b9b8f668117fae34c4345bb41f5dc3b05996))

### Bug Fixes

- add team values to environments ([8568204](https://github.com/redkubes/otomi-core/commit/8568204231009b5ddf3914bd9ac825c1d6340882))

### [0.11.7](https://github.com/redkubes/otomi-core/compare/v0.11.5...v0.11.7) (2020-09-15)

### Bug Fixes

- failing otomi version check for new users [ci skip](<[8db5dc4](https://github.com/redkubes/otomi-core/commit/8db5dc433f37c44c8711d8c9136ef73588f750b7)>)
- image tag ([c505526](https://github.com/redkubes/otomi-core/commit/c505526b3a7ed9c061ab37ef19164d2911c602b6))
- no more need for docker check in bootstrap [ci skip](<[d2cb322](https://github.com/redkubes/otomi-core/commit/d2cb3224d8b782a1380c00b70e8cd72e2dd8c1e4)>)
- put back functions in aliases [ci skip](<[054ebf8](https://github.com/redkubes/otomi-core/commit/054ebf86dd51146d5c7e143bef0ca02a7aa7abc2)>)
- put back stack_volume to otomi drun [ci skip](<[e271ce8](https://github.com/redkubes/otomi-core/commit/e271ce8a5cde7716d5da6eeb70a547f83c61ce55)>)

### Others

- **release:** 0.11.6 ([92c9130](https://github.com/redkubes/otomi-core/commit/92c9130620664a174c585e0e6d804aeec96e9033))

### [0.11.6](https://github.com/redkubes/otomi-core/compare/v0.11.5...v0.11.6) (2020-09-15)

### Bug Fixes

- failing otomi version check for new users [ci skip](<[8db5dc4](https://github.com/redkubes/otomi-core/commit/8db5dc433f37c44c8711d8c9136ef73588f750b7)>)
- no more need for docker check in bootstrap [ci skip](<[d2cb322](https://github.com/redkubes/otomi-core/commit/d2cb3224d8b782a1380c00b70e8cd72e2dd8c1e4)>)
- put back functions in aliases [ci skip](<[054ebf8](https://github.com/redkubes/otomi-core/commit/054ebf86dd51146d5c7e143bef0ca02a7aa7abc2)>)
- put back stack_volume to otomi drun [ci skip](<[e271ce8](https://github.com/redkubes/otomi-core/commit/e271ce8a5cde7716d5da6eeb70a547f83c61ce55)>)

### [0.11.5](https://github.com/redkubes/otomi-core/compare/v0.11.4...v0.11.5) (2020-09-15)

### Bug Fixes

- working code, some env missing [ci skip](<[cfc64fa](https://github.com/redkubes/otomi-core/commit/cfc64fab328b1c1b522ca76e82e43ab24b732064)>)

### [0.11.4](https://github.com/redkubes/otomi-core/compare/v0.11.3...v0.11.4) (2020-09-15)

### Bug Fixes

- back to env [ci skip](<[940c5a9](https://github.com/redkubes/otomi-core/commit/940c5a98ba0fde67846ac45ec8c1f473cb26bd65)>)

### [0.11.3](https://github.com/redkubes/otomi-core/compare/v0.11.2...v0.11.3) (2020-09-15)

### Bug Fixes

- pipeline [ci skip](<[f4f5e5b](https://github.com/redkubes/otomi-core/commit/f4f5e5b17884a05654137220d16da17a9a5de36e)>)

### [0.11.2](https://github.com/redkubes/otomi-core/compare/v0.11.1...v0.11.2) (2020-09-15)

### [0.11.1](https://github.com/redkubes/otomi-core/compare/v0.11.0...v0.11.1) (2020-09-15)

### Features

- use otomi CLI in docker ([e2aa085](https://github.com/redkubes/otomi-core/commit/e2aa085d35a0d46d0b0100a1d8893b830ec9eea4))

### Bug Fixes

- adjust path to values env dir ([79b4b9d](https://github.com/redkubes/otomi-core/commit/79b4b9d1a4b3cd45e672a6132ce7a7a3a3168899))
- bugs [ci skip](<[3008576](https://github.com/redkubes/otomi-core/commit/3008576eb5aa5153322bc8823f1c14673210630c)>)
- bugs [ci skip](<[f98311f](https://github.com/redkubes/otomi-core/commit/f98311f4618ba874d3aa43196f95eeebf941e353)>)
- docker without -r option ([f0f1b55](https://github.com/redkubes/otomi-core/commit/f0f1b559413787857b9028e2d0257fd75cc6e031))
- gitignore for values [ci skip](<[d0dad19](https://github.com/redkubes/otomi-core/commit/d0dad19527bf76cb26ce1952942745b0e4611cea)>)
- obtain cloudDnsKey value ([c62c1af](https://github.com/redkubes/otomi-core/commit/c62c1af68dfed1487a0b58f9e0258c74c52035ed))
- otomi cli exists with error code on failure ([f979d0c](https://github.com/redkubes/otomi-core/commit/f979d0c7fdd9f21019cf1cb291512e1f76729552))
- otomi template command ([62ea049](https://github.com/redkubes/otomi-core/commit/62ea0496e91b0e5abf90b81188a57ce655cae9e5))
- remove container ([1660c12](https://github.com/redkubes/otomi-core/commit/1660c12b4066f935c49b7d870a9b0adfbca4f97d))
- rework [ci skip](<[2722be7](https://github.com/redkubes/otomi-core/commit/2722be76c46c59c938a30b3e76873e0cf791051c)>)

## [0.11.0](https://github.com/redkubes/otomi-core/compare/v0.10.110...v0.11.0) (2020-09-10)

### Bug Fixes

- evaluate .secrets file ([ede3b1b](https://github.com/redkubes/otomi-core/commit/ede3b1bd06b8208b033306591b96889c16daf040))
- git commit now outside of container [ci skip](<[7bbf067](https://github.com/redkubes/otomi-core/commit/7bbf0672a70450b56915f5b716730e220941f156)>)
- missing demo file [ci skip](<[3272dc3](https://github.com/redkubes/otomi-core/commit/3272dc34e373ef7946e62e2e516557e458c7a293)>)
- typo ([c185215](https://github.com/redkubes/otomi-core/commit/c18521503d225ee558e621cd94d46e9baae92b72))

### [0.10.111](https://github.com/redkubes/otomi-core/compare/v0.10.110...v0.10.111) (2020-09-09)

### Bug Fixes

- evaluate .secrets file ([ede3b1b](https://github.com/redkubes/otomi-core/commit/ede3b1bd06b8208b033306591b96889c16daf040))
- only encode secrets, jobs get rescheduled when changed [ci skip](<[c05c1c9](https://github.com/redkubes/otomi-core/commit/c05c1c9cd62c0fc4231e5a315611da3114974946)>)
- typo ([c185215](https://github.com/redkubes/otomi-core/commit/c18521503d225ee558e621cd94d46e9baae92b72))

### [0.10.110](https://github.com/redkubes/otomi-core/compare/v0.10.109...v0.10.110) (2020-09-01)

### Bug Fixes

- skip tls verify when cert=staging [ci skip](<[2077f06](https://github.com/redkubes/otomi-core/commit/2077f062be9b80846b8c67e7d3444531a60891ee)>)

### [0.10.109](https://github.com/redkubes/otomi-core/compare/v0.10.108...v0.10.109) (2020-09-01)

### Feature Improvements

- added certs-aws task to import letsencrypt certs [ci skip](<[e685c43](https://github.com/redkubes/otomi-core/commit/e685c43ea29135e1a03c26cfdccddaa0dc458f31)>)

### [0.10.108](https://github.com/redkubes/otomi-core/compare/v0.10.107...v0.10.108) (2020-08-27)

### Bug Fixes

- proxy target onprem [ci skip](<[c0b9f74](https://github.com/redkubes/otomi-core/commit/c0b9f7479f10f6fb576ce6d42e20b806d8158902)>)

### [0.10.107](https://github.com/redkubes/otomi-core/compare/v0.10.106...v0.10.107) (2020-08-27)

### Bug Fixes

- oauth-proxy target onprem [ci skip](<[8ad50ea](https://github.com/redkubes/otomi-core/commit/8ad50eaa18cad50c440d98bb2fe54eea79d4de05)>)

### [0.10.106](https://github.com/redkubes/otomi-core/compare/v0.10.105...v0.10.106) (2020-08-27)

### Bug Fixes

- metrics server in kube-system [ci skip](<[77a2cb1](https://github.com/redkubes/otomi-core/commit/77a2cb190da8923487bd6a5100939e8a1ae45b19)>)

### [0.10.105](https://github.com/redkubes/otomi-core/compare/v0.10.104...v0.10.105) (2020-08-27)

### Bug Fixes

- certs regression [ci skip](<[994b142](https://github.com/redkubes/otomi-core/commit/994b1429dc3e25960228e5b503c99d012d467c26)>)

### [0.10.104](https://github.com/redkubes/otomi-core/compare/v0.10.103...v0.10.104) (2020-08-27)

### Bug Fixes

- auth cert [ci skip]C ([74071a9](https://github.com/redkubes/otomi-core/commit/74071a97a4a5389e26f1be4b53b2f4e75e42ee60))

### [0.10.103](https://github.com/redkubes/otomi-core/compare/v0.10.102...v0.10.103) (2020-08-27)

### Bug Fixes

- no metrics server if not onprem [ci skip](<[57bfdf9](https://github.com/redkubes/otomi-core/commit/57bfdf9ee2f43bed9d4a508d089927f2743391da)>)

### [0.10.102](https://github.com/redkubes/otomi-core/compare/v0.10.101...v0.10.102) (2020-08-27)

### [0.10.101](https://github.com/redkubes/otomi-core/compare/v0.10.100...v0.10.101) (2020-08-27)

### Bug Fixes

- chart helper [ci skip](<[acc6f90](https://github.com/redkubes/otomi-core/commit/acc6f90ee1ff4a3cbe411fa69e4eae1b108f53e6)>)
- regression from merge perhaps [ci skip](<[563ea19](https://github.com/redkubes/otomi-core/commit/563ea195544af0a734a1a2df0af4a1ab79a5b0a1)>)

### [0.10.100](https://github.com/redkubes/otomi-core/compare/v0.10.99...v0.10.100) (2020-08-27)

### Bug Fixes

- certs [ci skip](<[c6f5215](https://github.com/redkubes/otomi-core/commit/c6f5215a88bdf18841f66a05f1f9f249442819ac)>)
- dnsprovider [ci skip](<[0b217e8](https://github.com/redkubes/otomi-core/commit/0b217e8fae22ad4d6badcb4066337426c77a9ede)>)

### [0.10.99](https://github.com/redkubes/otomi-core/compare/v0.10.98...v0.10.99) (2020-08-27)

### Bug Fixes

- alerts channel [ci skip](<[9bdff35](https://github.com/redkubes/otomi-core/commit/9bdff3501dcd4f83085d5fb4ce739bb7ebfa7bba)>)
- harbod charts permissions issue [ci skip](<[1435610](https://github.com/redkubes/otomi-core/commit/143561081f5b03082e7a93dcd7c6ccc43d664c58)>)
- labels gone [ci skip](<[2d5cb32](https://github.com/redkubes/otomi-core/commit/2d5cb32b8216bd290d8b0188cc23ab8ce5ab860e)>)
- labels gone [ci skip](<[f66cdf9](https://github.com/redkubes/otomi-core/commit/f66cdf90789cb90ea7d4439dca0d7e7f9713c6cf)>)

### Code Refactoring

- all certs now in artifacts [ci skip](<[41b84a9](https://github.com/redkubes/otomi-core/commit/41b84a97e8091e3279642c66249b784327a80fad)>)
- **oidc:** keycloak=no falls back to oidc idp ([fbc7aea](https://github.com/redkubes/otomi-core/commit/fbc7aea03341024670520ab536e03e092c251172))

### [0.10.98](https://github.com/redkubes/otomi-core/compare/v0.10.97...v0.10.98) (2020-08-24)

### Bug Fixes

- missing redirect url [ci skip](<[7ca53f0](https://github.com/redkubes/otomi-core/commit/7ca53f0adc4367a393f333215aac7822843cea15)>)

### [0.10.97](https://github.com/redkubes/otomi-core/compare/v0.10.96...v0.10.97) (2020-08-24)

### Bug Fixes

- missing team-admin value for keycloak [ci skip](<[2513b58](https://github.com/redkubes/otomi-core/commit/2513b58b5508ec7644241e3e3a7403f76d48624e)>)

### [0.10.96](https://github.com/redkubes/otomi-core/compare/v0.10.95...v0.10.96) (2020-08-23)

### Bug Fixes

- oidc groups, keycloak values, pullserets [ci skip](<[aef874e](https://github.com/redkubes/otomi-core/commit/aef874e4afc0ab5328d2a642037bc994924a6c87)>)

### Others

- **release:** 0.10.95 ([04fcde9](https://github.com/redkubes/otomi-core/commit/04fcde95a31ecf3ea26b5686e3c9115c3382f0d8))

### [0.10.95](https://github.com/redkubes/otomi-core/compare/v0.10.94...v0.10.95) (2020-08-23)

### Others

- **release:** 0.10.94 ([4bc7cdd](https://github.com/redkubes/otomi-core/commit/4bc7cdd9d1507af44e04d4c9c098474a9760eb15))

### [0.10.94](https://github.com/redkubes/otomi-core/compare/v0.10.93...v0.10.94) (2020-08-23)

### Bug Fixes

- oidc defaults [ci skip](<[6c665b7](https://github.com/redkubes/otomi-core/commit/6c665b70e4d49b50278f9458e656bafc3253bbcc)>)

### [0.10.93](https://github.com/redkubes/otomi-core/compare/v0.10.91...v0.10.93) (2020-08-23)

### Bug Fixes

- values ([564985f](https://github.com/redkubes/otomi-core/commit/564985f76c31feca914a5b051708910de323a163))

### Others

- **release:** 0.10.92 ([4bbb4a1](https://github.com/redkubes/otomi-core/commit/4bbb4a157348ae9a86e6ee2a4cdaef1d4322736d))

### [0.10.92](https://github.com/redkubes/otomi-core/compare/v0.10.91...v0.10.92) (2020-08-23)

### Bug Fixes

- values ([564985f](https://github.com/redkubes/otomi-core/commit/564985f76c31feca914a5b051708910de323a163))

### [0.10.91](https://github.com/redkubes/otomi-core/compare/v0.10.90...v0.10.91) (2020-08-22)

### Features

- **service:** knative service can have secretKeyRef [ci skip](<[e59f38c](https://github.com/redkubes/otomi-core/commit/e59f38cb7e2a26e944b7c264849900c3bacd729c)>)

### [0.10.90](https://github.com/redkubes/otomi-core/compare/v0.10.89...v0.10.90) (2020-08-19)

### Bug Fixes

- probes [ci skip](<[86a5f96](https://github.com/redkubes/otomi-core/commit/86a5f9657754cac921b62dbb72eef446f555f58c)>)

### [0.10.89](https://github.com/redkubes/otomi-core/compare/v0.10.88...v0.10.89) (2020-08-18)

### Bug Fixes

- team svc probes [ci skip](<[97c05d4](https://github.com/redkubes/otomi-core/commit/97c05d46ac4d385c516e7a2faf1c885542520dd4)>)

### [0.10.88](https://github.com/redkubes/otomi-core/compare/v0.10.87...v0.10.88) (2020-08-18)

### Bug Fixes

- docker secrets attached to sa [ci skip](<[66aab07](https://github.com/redkubes/otomi-core/commit/66aab075e3559ffe4288ad3f9c635df617a9cc12)>)

### [0.10.87](https://github.com/redkubes/otomi-core/compare/v0.10.86...v0.10.87) (2020-08-18)

### Bug Fixes

- docker secret [ci skip](<[4a27cd0](https://github.com/redkubes/otomi-core/commit/4a27cd00486e3cccd5d1424fead11cb7a8c13833)>)

### [0.10.86](https://github.com/redkubes/otomi-core/compare/v0.10.85...v0.10.86) (2020-08-18)

### Bug Fixes

- disabling probe for scaleToZero [ci skip](<[ff89dcf](https://github.com/redkubes/otomi-core/commit/ff89dcfee4c6d4fff30c374a66538a74b0edec3c)>)

### [0.10.85](https://github.com/redkubes/otomi-core/compare/v0.10.84...v0.10.85) (2020-08-18)

### Bug Fixes

- harbor team names ordering [ci skip](<[5e7c7af](https://github.com/redkubes/otomi-core/commit/5e7c7af00119efb2e661b002f2804def96f7b76d)>)

### [0.10.84](https://github.com/redkubes/otomi-core/compare/v0.10.83...v0.10.84) (2020-08-18)

### Bug Fixes

- generic secret entries [ci skip](<[95afbc9](https://github.com/redkubes/otomi-core/commit/95afbc972621f7f2d7c03cf3aec80f7f7bf3a6c3)>)

### Others

- **release:** 0.10.83 ([8ae0c0a](https://github.com/redkubes/otomi-core/commit/8ae0c0a227cf808c94952ebf28c824737be30b4a))

### [0.10.83](https://github.com/redkubes/otomi-core/compare/v0.10.82...v0.10.83) (2020-08-18)

### Bug Fixes

- create service account for jobs and cronjobs ([b481a3b](https://github.com/redkubes/otomi-core/commit/b481a3ba4d522cf7ce8a7f49ea8fb610ba7f5d9c))
- envoy crd, secrets [ci skip](<[f4634d2](https://github.com/redkubes/otomi-core/commit/f4634d2aa62f31b6d8f49e35273c881e0e4f883b)>)
- provide env to cronjob ([53a8315](https://github.com/redkubes/otomi-core/commit/53a831510522a409b7bda6882e468c66b027e287))
- typos and add spell checker config ([18f5f20](https://github.com/redkubes/otomi-core/commit/18f5f2099b6271b0d424c0bcb844e77c89e1ddf1))

### [0.10.82](https://github.com/redkubes/otomi-core/compare/v0.10.81...v0.10.82) (2020-08-18)

### Bug Fixes

- add condition for creating public ingress ([e33f871](https://github.com/redkubes/otomi-core/commit/e33f871d10bdd77b4bbecc2bf4a16ca4ae7d64e6))

### [0.10.81](https://github.com/redkubes/otomi-core/compare/v0.10.80...v0.10.81) (2020-08-16)

### Bug Fixes

- nginx hpa, prom metrics [ci skip](<[a148172](https://github.com/redkubes/otomi-core/commit/a148172211d42c085fca6339fb8f77367c7cba78)>)
- upgraded+fixed prom op, fixed nginx replicas ([5553329](https://github.com/redkubes/otomi-core/commit/555332938c470bc7baab9b0b0728be7a5a7d0488))

### [0.10.80](https://github.com/redkubes/otomi-core/compare/v0.10.79...v0.10.80) (2020-08-07)

### Bug Fixes

- blackbox exporter for teams [ci skip](<[4243a6c](https://github.com/redkubes/otomi-core/commit/4243a6ccdac02b956763b601b2746ac702ff9469)>)
- metrics for teams [ci skip](<[fed3992](https://github.com/redkubes/otomi-core/commit/fed39923a37f6eee4b6a63434af8ce009aa782b6)>)

### [0.10.79](https://github.com/redkubes/otomi-core/compare/v0.10.78...v0.10.79) (2020-08-07)

### Bug Fixes

- auth ingress [ci skip](<[553e262](https://github.com/redkubes/otomi-core/commit/553e2624659f15fcd6b65043baccf96987acb3c2)>)

### [0.10.78](https://github.com/redkubes/otomi-core/compare/v0.10.77...v0.10.78) (2020-08-07)

### Bug Fixes

- httpbin path [ci skip](<[0769236](https://github.com/redkubes/otomi-core/commit/076923670dd33bedc4a908c7bb31db4ceae502df)>)

### [0.10.77](https://github.com/redkubes/otomi-core/compare/v0.10.76...v0.10.77) (2020-08-07)

### Bug Fixes

- redirect to otomi [ci skip](<[edbfa72](https://github.com/redkubes/otomi-core/commit/edbfa726980633db4fc28073edb2957e662f017f)>)

### [0.10.76](https://github.com/redkubes/otomi-core/compare/v0.10.75...v0.10.76) (2020-08-07)

### Bug Fixes

- harbor logo for teams c[ skip](<[6b69a2f](https://github.com/redkubes/otomi-core/commit/6b69a2f996ec577af5ef91ae00d3977c06c6d99a)>)

### [0.10.75](https://github.com/redkubes/otomi-core/compare/v0.10.74...v0.10.75) (2020-08-07)

### Bug Fixes

- httpbin on own domain [ci skip](<[bf51d73](https://github.com/redkubes/otomi-core/commit/bf51d73c04f2ed2ee03cbe2ce4f492119b70e6a9)>)

### [0.10.74](https://github.com/redkubes/otomi-core/compare/v0.10.73...v0.10.74) (2020-08-07)

### Bug Fixes

- core apps on shared domain [ci skip](<[ce8fdf3](https://github.com/redkubes/otomi-core/commit/ce8fdf303683f43d4fbdaad6d3e84a2dc88b8881)>)

### [0.10.73](https://github.com/redkubes/otomi-core/compare/v0.10.72...v0.10.73) (2020-08-06)

### Bug Fixes

- harbor values [ci skip](<[a36204f](https://github.com/redkubes/otomi-core/commit/a36204ff20c78289a5495d54e482cf6d0aafb801)>)

### [0.10.72](https://github.com/redkubes/otomi-core/compare/v0.10.71...v0.10.72) (2020-07-29)

### Bug Fixes

- missing httpbin chart [ci skip](<[2b58a9c](https://github.com/redkubes/otomi-core/commit/2b58a9cc89d3760c9d2925696442858ab5eb1c44)>)
- missing httpbin chart [ci skip](<[c2a778b](https://github.com/redkubes/otomi-core/commit/c2a778b0120537230789845ff563655781b0891d)>)

### Feature Improvements

- added OIDC_CLIENT_SECRET for api [ci skip](<[25d932a](https://github.com/redkubes/otomi-core/commit/25d932a286f3fa858d42e21889f1097f36086cdc)>)

### [0.10.71](https://github.com/redkubes/otomi-core/compare/v0.10.70...v0.10.71) (2020-07-29)

### Bug Fixes

- team workloads [ci skip](<[c299ce5](https://github.com/redkubes/otomi-core/commit/c299ce57a121b9ce8f24faed95d6db342431e370)>)
- token forward for api [ci skip](<[98f709b](https://github.com/redkubes/otomi-core/commit/98f709b7e64ee58aafdda24a6943f404c84a0d17)>)

### [0.10.70](https://github.com/redkubes/otomi-core/compare/v0.10.69...v0.10.70) (2020-07-29)

### Bug Fixes

- gave admin group access to everything [ci skip](<[368cc77](https://github.com/redkubes/otomi-core/commit/368cc7761e686d01a232555d2609d5d892182727)>)

### [0.10.69](https://github.com/redkubes/otomi-core/compare/v0.10.68...v0.10.69) (2020-07-29)

### Bug Fixes

- logout link [ci skip](<[9558f7e](https://github.com/redkubes/otomi-core/commit/9558f7e52f9d6e6f586e4f9f5b0c564537148d23)>)

### [0.10.68](https://github.com/redkubes/otomi-core/compare/v0.10.67...v0.10.68) (2020-07-28)

### Bug Fixes

- logout link [ci skip](<[5600c20](https://github.com/redkubes/otomi-core/commit/5600c205e2459e39ca2e9d9ce1311a677af97249)>)

### [0.10.67](https://github.com/redkubes/otomi-core/compare/v0.10.65...v0.10.67) (2020-07-28)

### [0.10.66](https://github.com/redkubes/otomi-core/compare/v0.10.65...v0.10.66) (2020-07-28)

### Features

- **(add keycloak chart):** keycloak chart stack service ([7e4355b](https://github.com/redkubes/otomi-core/commit/7e4355bef7a00d2b7c411c5bb4dc80af8700b988))

### Bug Fixes

- auth proxy [ci skip](<[27e4828](https://github.com/redkubes/otomi-core/commit/27e4828874b964ff37e9de67f836757dffa7d120)>)
- gateway domains ([c57df11](https://github.com/redkubes/otomi-core/commit/c57df11e11fd53bd43aabc1242a17e25f684a59c))
- harbor secret ([a71d925](https://github.com/redkubes/otomi-core/commit/a71d925d4ddd79ac539851d07762efcf532933b6))
- keycloak, groups, logout [ci skip](<[61e4422](https://github.com/redkubes/otomi-core/commit/61e4422a5ae5702fd8c9c9098da989830f95d20e)>)
- oauth proxy ([d778198](https://github.com/redkubes/otomi-core/commit/d7781986b0e385cd009bd830a6eb843293dbae9f))

### Code Refactoring

- merge master ([3ea5f78](https://github.com/redkubes/otomi-core/commit/3ea5f78db51309b6fab5c465dd70bc607c8a54e0))
- **add kk alias:** add kk alias for keycloak ns commands ([ee50c44](https://github.com/redkubes/otomi-core/commit/ee50c445fedc27d12e0415569a18485006c99661))
- **expose keycloak through public ingress:** add isShared:true ([9b75288](https://github.com/redkubes/otomi-core/commit/9b75288c51cde58565afe161a3d53297f15238c7))
- **keycloak-http svc:** keycloak http service exposed on port 80 ([adeac7d](https://github.com/redkubes/otomi-core/commit/adeac7de235661954ea04f95f0fd57987ae7ecd8))

### Feature Improvements

- upgraded prometheus-operator, knative ([42a6feb](https://github.com/redkubes/otomi-core/commit/42a6feb420660601d891d1ff1b3ff04447ffe458))

### [0.10.65](https://github.com/redkubes/otomi-core/compare/v0.10.64...v0.10.65) (2020-07-22)

### Bug Fixes

- helmfile regression still exists [ci skip](<[795072d](https://github.com/redkubes/otomi-core/commit/795072dbb7ded3b3f6d4ffb5d2e96b75703b5503)>)

### [0.10.64](https://github.com/redkubes/otomi-core/compare/v0.10.61...v0.10.64) (2020-07-22)

### Bug Fixes

- istio-operator chart missing ns, worklfow latest only on release [ci skip](<[743af75](https://github.com/redkubes/otomi-core/commit/743af7511c6463ded83c6dd7471ec1d9453fd393)>)
- minAvailable now 2 for nginx [ci skip](<[f2ed6c4](https://github.com/redkubes/otomi-core/commit/f2ed6c4a227ec747c6bf879488cdd5295cc1e41d)>)
- missing files [ci skip](<[e07b7e7](https://github.com/redkubes/otomi-core/commit/e07b7e7416e0ef882b006e83ae56dd1d3cef0bd4)>)

### Others

- **release:** 0.10.62 ([8cde246](https://github.com/redkubes/otomi-core/commit/8cde246ce81214036bf8275ed9921f509fb14ca6))

### CI

- workflow simplification [ci skip](<[74e78b7](https://github.com/redkubes/otomi-core/commit/74e78b797bf88854213dab9bca0a7867e1f40bec)>)

### [0.10.62](https://github.com/redkubes/otomi-core/compare/v0.10.61...v0.10.62) (2020-07-20)

### Bug Fixes

- istio-operator chart missing ns, worklfow latest only on release [ci skip](<[743af75](https://github.com/redkubes/otomi-core/commit/743af7511c6463ded83c6dd7471ec1d9453fd393)>)

### [0.10.61](https://github.com/redkubes/otomi-core/compare/v0.10.60...v0.10.61) (2020-07-16)

### Bug Fixes

- maintenance error [ci skip](<[9309eb6](https://github.com/redkubes/otomi-core/commit/9309eb631818941720c82c2c32dca9cc614a612c)>)

### [0.10.60](https://github.com/redkubes/otomi-core/compare/v0.10.59...v0.10.60) (2020-07-16)

### Bug Fixes

- filtered out internal services from ingress [ci skip](<[773bfe4](https://github.com/redkubes/otomi-core/commit/773bfe4e548a45b7c8e1acba142af5f94588e028)>)
- upgrade issues, istio upgrade [ci skip](<[2e94275](https://github.com/redkubes/otomi-core/commit/2e94275ea52279ee9d58721d3f1bf91d15b462d3)>)

### [0.10.59](https://github.com/redkubes/otomi-core/compare/v0.10.58...v0.10.59) (2020-07-14)

### Bug Fixes

- proxy ingress bug [ci skip](<[057b81e](https://github.com/redkubes/otomi-core/commit/057b81e73fe19305d86d1ca40ca5bcf46196c8a0)>)

### [0.10.58](https://github.com/redkubes/otomi-core/compare/v0.10.57...v0.10.58) (2020-07-14)

### Bug Fixes

- exclusion for hasCloudLB [ci skip](<[5c6c32c](https://github.com/redkubes/otomi-core/commit/5c6c32c4cf54bfc15d80e59e3b3963bcfbd219ee)>)

### [0.10.57](https://github.com/redkubes/otomi-core/compare/v0.10.56...v0.10.57) (2020-07-14)

### Bug Fixes

- added dns label to proxy [ci skip](<[f7a30e3](https://github.com/redkubes/otomi-core/commit/f7a30e302ee56e228d9d97da12029a4ea8b95210)>)
- readme [ci skip](<[d1c2ba0](https://github.com/redkubes/otomi-core/commit/d1c2ba09fe04bbe344aa116516e62a256b5d66aa)>)
- service probes per team ([2db7f40](https://github.com/redkubes/otomi-core/commit/2db7f4027f32eddf4ad39de4b4e0bc40f3eecc4c))

### Feature Improvements

- upgraded prom operator [ci skip](<[976263a](https://github.com/redkubes/otomi-core/commit/976263af5afc733c1f93544d657c1b1a755027c6)>)

### [0.10.56](https://github.com/redkubes/otomi-core/compare/v0.10.55...v0.10.56) (2020-07-09)

### Bug Fixes

- harbor host [ci skip](<[ff8a0c0](https://github.com/redkubes/otomi-core/commit/ff8a0c0823452a33630b9af6ef7f2590998890e4)>)

### [0.10.55](https://github.com/redkubes/otomi-core/compare/v0.10.54...v0.10.55) (2020-07-09)

### Bug Fixes

- alias [ci skip](<[7470946](https://github.com/redkubes/otomi-core/commit/74709464c33a13139b778d851bd269e594b63e8f)>)
- charts upgraded for k8s 1.16 [ci skip](<[6018f60](https://github.com/redkubes/otomi-core/commit/6018f602e5f755ec94a3fbe6ea85bd4a3c68f375)>)

### [0.10.54](https://github.com/redkubes/otomi-core/compare/v0.10.53...v0.10.54) (2020-07-07)

### Bug Fixes

- paths [ci skip](<[b2be66c](https://github.com/redkubes/otomi-core/commit/b2be66c4e9ca354fa6f42847b39da367d77fd550)>)

### [0.10.53](https://github.com/redkubes/otomi-core/compare/v0.10.52...v0.10.53) (2020-07-07)

### Bug Fixes

- paths [ci skip](<[bbaab7f](https://github.com/redkubes/otomi-core/commit/bbaab7fc9df6399829b22c569e9eb755bdf3c49c)>)

### [0.10.52](https://github.com/redkubes/otomi-core/compare/v0.10.51...v0.10.52) (2020-07-07)

### Bug Fixes

- paths easier [ci skip](<[1321d47](https://github.com/redkubes/otomi-core/commit/1321d474729e693f15beb33eef1197aa375c5750)>)

### [0.10.51](https://github.com/redkubes/otomi-core/compare/v0.10.50...v0.10.51) (2020-07-07)

### Bug Fixes

- defaults for missing values [ci skip](<[6e5455b](https://github.com/redkubes/otomi-core/commit/6e5455b9d1ab7cbb9a483dcb0b756b895d2e4d08)>)

### [0.10.50](https://github.com/redkubes/otomi-core/compare/v0.10.49...v0.10.50) (2020-07-07)

### Bug Fixes

- core loki path [ci skip](<[5b10522](https://github.com/redkubes/otomi-core/commit/5b10522f5ca2ed2348162397e27d86898cc261fe)>)

### [0.10.49](https://github.com/redkubes/otomi-core/compare/v0.10.48...v0.10.49) (2020-07-07)

### Bug Fixes

- disablesync [ci skip](<[8d401c5](https://github.com/redkubes/otomi-core/commit/8d401c52145db90db9efc7413c56087f1134640e)>)
- health check ([9465e9e](https://github.com/redkubes/otomi-core/commit/9465e9e25d7ebdbcf2c3c2b42b3f0f7afb164d21))
- missing files ([e1ec9fb](https://github.com/redkubes/otomi-core/commit/e1ec9fb9b5fa47436a9bc5e73eb56fd06d6401a4))

### Feature Improvements

- added tools server for enc/dec ([3d55eff](https://github.com/redkubes/otomi-core/commit/3d55eff98101f4ebac5ffb7a632e956e1f7ba376))

### [0.10.48](https://github.com/redkubes/otomi-core/compare/v0.10.47...v0.10.48) (2020-07-01)

### Bug Fixes

- removed vs appendHeaders as it is deprecated [ci skip](<[827b48e](https://github.com/redkubes/otomi-core/commit/827b48e57a25932a00b4aa06c8a44b86f2744711)>)

### [0.10.47](https://github.com/redkubes/otomi-core/compare/v0.10.44...v0.10.47) (2020-06-30)

### Bug Fixes

- helmfile regression, removed crypt step [ci skip](<[b87c885](https://github.com/redkubes/otomi-core/commit/b87c885a4e4745259de3fa96829f6b8f54ae6d70)>)
- helmfile regression, removed crypt step [ci skip](<[a4c15de](https://github.com/redkubes/otomi-core/commit/a4c15de36934a025ecb45631fa8948b524255622)>)

### Others

- **release:** 0.10.46 ([39ad769](https://github.com/redkubes/otomi-core/commit/39ad769b99275dc63df9cc9f28fcad583e4984be))
- **release:** 0.10.46 ([b4c4b83](https://github.com/redkubes/otomi-core/commit/b4c4b8351e74dbfae42ff6fce06a3f61ca626eef))

### [0.10.46](https://github.com/redkubes/otomi-core/compare/v0.10.44...v0.10.46) (2020-06-30)

### Bug Fixes

- helmfile regression, removed crypt step [ci skip](<[b87c885](https://github.com/redkubes/otomi-core/commit/b87c885a4e4745259de3fa96829f6b8f54ae6d70)>)
- helmfile regression, removed crypt step [ci skip](<[a4c15de](https://github.com/redkubes/otomi-core/commit/a4c15de36934a025ecb45631fa8948b524255622)>)

### Others

- **release:** 0.10.46 ([b4c4b83](https://github.com/redkubes/otomi-core/commit/b4c4b8351e74dbfae42ff6fce06a3f61ca626eef))

### [0.10.46](https://github.com/redkubes/otomi-core/compare/v0.10.44...v0.10.46) (2020-06-30)

### Bug Fixes

- helmfile regression, removed crypt step [ci skip](<[a4c15de](https://github.com/redkubes/otomi-core/commit/a4c15de36934a025ecb45631fa8948b524255622)>)

### [0.10.44](https://github.com/redkubes/otomi-core/compare/v0.10.43...v0.10.44) (2020-06-29)

### Build System

- added sops [ci skip](<[4361598](https://github.com/redkubes/otomi-core/commit/4361598a2d3ca3f48807c00d6422c06da03ff7fb)>)

### [0.10.43](https://github.com/redkubes/otomi-core/compare/v0.10.42...v0.10.43) (2020-06-26)

### Bug Fixes

- redis chart ref [ci skip](<[ae8f7e7](https://github.com/redkubes/otomi-core/commit/ae8f7e7b9fad800bed9c438fbf5ae69640cd0eeb)>)

### [0.10.42](https://github.com/redkubes/otomi-core/compare/v0.10.41...v0.10.42) (2020-06-26)

### Bug Fixes

- added flags for harbor,redis,gatekeeper, revert harbor [ci skip](<[5005080](https://github.com/redkubes/otomi-core/commit/5005080bf5c33fe074cf9d548f459717a8751872)>)
- added redis for oauth2 sessions [ci skip](<[b9d0a0b](https://github.com/redkubes/otomi-core/commit/b9d0a0bed817e3289467058ad9d35089af9b2970)>)
- cleanup [ci skip](<[2951a53](https://github.com/redkubes/otomi-core/commit/2951a536e56688d2278c6348dd5cc986a3751c4c)>)
- external ingress [ci skip](<[db16e71](https://github.com/redkubes/otomi-core/commit/db16e71f45b274fbd02251350c02f13f9355825f)>)
- external ingress [ci skip](<[88ec1d0](https://github.com/redkubes/otomi-core/commit/88ec1d0976b72c5ccad36cd2567d138940b6aa9d)>)

### Others

- **release:** 0.10.41 ([3e0509e](https://github.com/redkubes/otomi-core/commit/3e0509e6c1374d90188830b5a2752d3026a2c096))

### [0.10.41](https://github.com/redkubes/otomi-core/compare/v0.10.40...v0.10.41) (2020-06-24)

### Bug Fixes

- notary port [ci skip](<[7653588](https://github.com/redkubes/otomi-core/commit/76535882c9ffdf936eaef103abd35ef82c2f20e4)>)
- scanning [ci skip](<[226048c](https://github.com/redkubes/otomi-core/commit/226048c1d40e0311c817e2869de1e609d704fb2e)>)

### [0.10.40](https://github.com/redkubes/otomi-core/compare/v0.10.39...v0.10.40) (2020-06-24)

### Bug Fixes

- teams path for api [ci skip](<[7023036](https://github.com/redkubes/otomi-core/commit/702303639a3d77e985d07bd9c4149780a48951ae)>)

### [0.10.39](https://github.com/redkubes/otomi-core/compare/v0.10.38...v0.10.39) (2020-06-24)

### Bug Fixes

- order of things, dns registration [ci skip](<[3e967d0](https://github.com/redkubes/otomi-core/commit/3e967d0e67eba77db625d688e7029cbd414795c2)>)

### [0.10.38](https://github.com/redkubes/otomi-core/compare/v0.10.37...v0.10.38) (2020-06-22)

### Bug Fixes

- missing proxy cert ([56578ef](https://github.com/redkubes/otomi-core/commit/56578efbbfa2c8d7f3ec2efdee086c8253a92066))

### [0.10.37](https://github.com/redkubes/otomi-core/compare/v0.10.36...v0.10.37) (2020-06-22)

### Features

- add harbor chart ([2dc4c3b](https://github.com/redkubes/otomi-core/commit/2dc4c3b487484317430fc56aae1ea877e7ba3943))
- add harbor raw template ([2d455e5](https://github.com/redkubes/otomi-core/commit/2d455e54df998d99126c1203492e919c1e5d05b2))
- expose harbor ([2166db7](https://github.com/redkubes/otomi-core/commit/2166db7ecb527ae1d252cdb5ebe2ba723c104a90))
- install harbor chart ([057362b](https://github.com/redkubes/otomi-core/commit/057362b5af91a317622ed2fe694d7657340f79f0))
- remove nginx form harbor chart ([2664dca](https://github.com/redkubes/otomi-core/commit/2664dca6b7cce91420625fb58d2efe63a2deefe6))
- use GCS bucket as a harbor registry stroge ([0c703c1](https://github.com/redkubes/otomi-core/commit/0c703c1bca272d36c534b966c9f3fdb4e57098b9))

### Bug Fixes

- certs, took harbor out of normal routing setup ([29e1090](https://github.com/redkubes/otomi-core/commit/29e1090de50d7269f5a65730301f16fb46f9900f))
- harbor now bypassing external LB, istio creates LB for harbor ([14227e8](https://github.com/redkubes/otomi-core/commit/14227e8c237fd36ef7c42a15fde715ad322722d0))
- harbor now on it's own [ci skip](<[50647c9](https://github.com/redkubes/otomi-core/commit/50647c9a5447d4bedd0bbaffb8ded14105c9d5a4)>)
- harbor vs ([ce8c6dd](https://github.com/redkubes/otomi-core/commit/ce8c6ddb729f85b6f915883c73b8656d91880881))
- put back commented code ([da7bf95](https://github.com/redkubes/otomi-core/commit/da7bf953b1f5e38e3fad730ac8e50e7fcb444922))
- remove old template ([b3b19de](https://github.com/redkubes/otomi-core/commit/b3b19de57d74eaa727a01979e11b821ef8e7e2fc))
- stashing [ci skip](<[cfaf1f4](https://github.com/redkubes/otomi-core/commit/cfaf1f46435309a0e47b45983d420f40ec6bbf9e)>)

### Code Refactoring

- **ingress:** rewrote the ingress, certs generation ([6b266e4](https://github.com/redkubes/otomi-core/commit/6b266e44a05f429c8fde06c0034319c4b1878c78))

### [0.10.36](https://github.com/redkubes/otomi-core/compare/v0.10.35...v0.10.36) (2020-06-21)

### Bug Fixes

- certs missing/overlap [ci skip](<[6e74e33](https://github.com/redkubes/otomi-core/commit/6e74e331720b44e92db575e94716e01a66bea686)>)

### [0.10.35](https://github.com/redkubes/otomi-core/compare/v0.10.34...v0.10.35) (2020-06-21)

### Bug Fixes

- harbor raw [ci skip](<[92173bc](https://github.com/redkubes/otomi-core/commit/92173bc3e52d1e7aac949faa976e47395c17cb68)>)

### [0.10.34](https://github.com/redkubes/otomi-core/compare/v0.10.33...v0.10.34) (2020-06-21)

### Bug Fixes

- proxy cert [ci skip](<[7616603](https://github.com/redkubes/otomi-core/commit/7616603abd49814a25d435b105d44c24c6ff15c0)>)

### [0.10.33](https://github.com/redkubes/otomi-core/compare/v0.10.32...v0.10.33) (2020-06-21)

### Bug Fixes

- proxy cert ([3a0b706](https://github.com/redkubes/otomi-core/commit/3a0b706d874bb4a50841de913242c7c6595f5e43))

### [0.10.32](https://github.com/redkubes/otomi-core/compare/v0.10.31...v0.10.32) (2020-06-20)

### [0.10.31](https://github.com/redkubes/otomi-core/compare/v0.10.30...v0.10.31) (2020-06-17)

### Bug Fixes

- removed missing chart release ref for team index [ci skip](<[8795adb](https://github.com/redkubes/otomi-core/commit/8795adb7110a80fd7d2f4730073d99aa17a30c60)>)

### [0.10.30](https://github.com/redkubes/otomi-core/compare/v0.10.29...v0.10.30) (2020-06-17)

### Bug Fixes

- removed missing chart release ref for dashboard + harbor [ci skip](<[cd389ff](https://github.com/redkubes/otomi-core/commit/cd389ff7480135cfd5a3e206bbae106d40168d20)>)

### [0.10.29](https://github.com/redkubes/otomi-core/compare/v0.10.28...v0.10.29) (2020-06-17)

### Bug Fixes

- removed missing chart release ref for index [ci skip](<[2ca0004](https://github.com/redkubes/otomi-core/commit/2ca0004f8913389c60dc205169013e283680f31f)>)

### [0.10.28](https://github.com/redkubes/otomi-core/compare/v0.10.27...v0.10.28) (2020-06-17)

### Bug Fixes

- change missingFileHandler name
  ([117e90a](https://github.com/redkubes/otomi-core/commit/117e90a76eb385fa928d9bb11bfbc12d1ede40f4))
- missing files ([c987497](https://github.com/redkubes/otomi-core/commit/c98749721736dd311b21ef9b9e51c5f1cd1b598b))

### Feature Improvements

- added helm secrets to tools, added missing file
  ([0c3ce44](https://github.com/redkubes/otomi-core/commit/0c3ce44b84f6bd248527cd4e4137cc4c6a4d9531))

### [0.10.27](https://github.com/redkubes/otomi-core/compare/v0.10.26...v0.10.27) (2020-06-15)

### Bug Fixes

- skipping tag building on release
  [ci skip](<[b0fdcb4](https://github.com/redkubes/otomi-core/commit/b0fdcb46b075a69299e07e64b8c85e951af54210)>)
- templating issues ([571b36d](https://github.com/redkubes/otomi-core/commit/571b36de9efb27c27767f240754ab85f906fe649))

### Code Refactoring

- moved alb ingress to raw
  ([f5b3e67](https://github.com/redkubes/otomi-core/commit/f5b3e677f59ca715816d5cbeeb41ed5e38e56cf2))

### [0.10.26](https://github.com/redkubes/otomi-core/compare/v0.10.25...v0.10.26) (2020-06-02)

### Features

- **prometheus:** added blackbox-exporter
  [ci skip](<[88e7bde](https://github.com/redkubes/otomi-core/commit/88e7bdef1b05f50d9d2faa3648b70150f8fa409b)>)

### [0.10.25](https://github.com/redkubes/otomi-core/compare/v0.10.24...v0.10.25) (2020-05-28)

### Feature Improvements

- added existing service hello
  [ci skip](<[3bdea4e](https://github.com/redkubes/otomi-core/commit/3bdea4ee7ef45009ec9571a62674a3859d3b799b)>)

### [0.10.24](https://github.com/redkubes/otomi-core/compare/v0.10.23...v0.10.24) (2020-05-28)

### Bug Fixes

- istio gw fix
  [ci skip](<[6f2cad8](https://github.com/redkubes/otomi-core/commit/6f2cad8f0ad364387161736e90d3740ccc8fc973)>)

### [0.10.23](https://github.com/redkubes/otomi-core/compare/v0.10.22...v0.10.23) (2020-05-28)

### Bug Fixes

- public domain certs now created outside of team charts
  [ci skip](<[c0a6845](https://github.com/redkubes/otomi-core/commit/c0a68458c80c6a61cd2bd81be7faf61dc4e81eaf)>)

### [0.10.21](https://github.com/redkubes/otomi-core/compare/v0.10.20...v0.10.21) (2020-05-27)

### [0.10.20](https://github.com/redkubes/otomi-core/compare/v0.10.19...v0.10.20) (2020-05-18)

### Bug Fixes

- tls secret naming ([bee81a8](https://github.com/redkubes/otomi-core/commit/bee81a852b14fd918391d74199f7930b1f654f01))

### [0.10.19](https://github.com/redkubes/otomi-core/compare/v0.10.18...v0.10.19) (2020-05-18)

### Bug Fixes

- cert name ([0cd3156](https://github.com/redkubes/otomi-core/commit/0cd3156d99483b2fa122e0f8ca39bbf908db2836))

### [0.10.18](https://github.com/redkubes/otomi-core/compare/v0.10.17...v0.10.18) (2020-05-18)

### Bug Fixes

- scaleToZero booolean check
  [ci skip](<[1a8d07f](https://github.com/redkubes/otomi-core/commit/1a8d07f8aa348ca2a63d143f64eb25665f643bb5)>)

### [0.10.17](https://github.com/redkubes/otomi-core/compare/v0.10.16...v0.10.17) (2020-05-18)

### Bug Fixes

- path fix for api
  [ci skip](<[56a5233](https://github.com/redkubes/otomi-core/commit/56a523377c7847b01930b827e70710c073d10c4c)>)

### [0.10.16](https://github.com/redkubes/otomi-core/compare/v0.10.15...v0.10.16) (2020-05-18)

### Feature Improvements

- scaleToZero, path validation, internal ksvc
  [ci skip](<[c74bce9](https://github.com/redkubes/otomi-core/commit/c74bce930dbd74e67f54c5e6187cff2668c2c421)>)

### [0.10.16](https://github.com/redkubes/otomi-core/compare/v0.10.15...v0.10.16) (2020-05-18)

### Bug Fixes

- downgraded istio to 1.5.4, added scaleToZero
  [ci skip](<[86ec011](https://github.com/redkubes/otomi-core/commit/86ec011da155893be80bda181e3a693ba17a4d2b)>)

### [0.10.15](https://github.com/redkubes/otomi-core/compare/v0.10.14...v0.10.15) (2020-05-17)

### Bug Fixes

- microsvc approach with path working
  [ci skip](<[8f3d3c8](https://github.com/redkubes/otomi-core/commit/8f3d3c8ed78e3e1d3ae3fd4842511a4073c4fbb4)>)

### [0.10.14](https://github.com/redkubes/otomi-core/compare/v0.10.13...v0.10.14) (2020-05-14)

### Bug Fixes

- gave team-admin clusterrole cluster-admin
  [ci skip](<[7e9daf8](https://github.com/redkubes/otomi-core/commit/7e9daf889b92f3869380a2d182ccaa8943a5dd9d)>)

### [0.10.13](https://github.com/redkubes/otomi-core/compare/v0.10.12...v0.10.13) (2020-05-14)

### Bug Fixes

- changed name to apiName [ci skip][#2](https://github.com/redkubes/otomi-core/issues/2)
  ([80667ba](https://github.com/redkubes/otomi-core/commit/80667ba450b75a6e711ca5c246c5e8cbfe497b46))

### [0.10.12](https://github.com/redkubes/otomi-core/compare/v0.10.11...v0.10.12) (2020-05-14)

### Bug Fixes

- changed name to apiName
  [ci skip](<[1b378d0](https://github.com/redkubes/otomi-core/commit/1b378d001fd0ef5658186ebecb93c6c297b25bce)>)

### [0.10.11](https://github.com/redkubes/otomi-core/compare/v0.10.10...v0.10.11) (2020-05-14)

### Bug Fixes

- added needed cluster info for kubecfg
  [ci skip](<[5db3cca](https://github.com/redkubes/otomi-core/commit/5db3cca3f6aa130bd47fa4bb02c1a5c6d440185a)>)

### [0.10.10](https://github.com/redkubes/otomi-core/compare/v0.10.9...v0.10.10) (2020-05-14)

### Bug Fixes

- apiserver ip added to api env
  [ci skip](<[172434c](https://github.com/redkubes/otomi-core/commit/172434c2f9761a2a61fe3f799fc88a84a15a5c54)>)

### [0.10.9](https://github.com/redkubes/otomi-core/compare/v0.10.8...v0.10.9) (2020-05-13)

### Bug Fixes

- redis-ha files added
  [ci skip](<[3201533](https://github.com/redkubes/otomi-core/commit/3201533e2920d0ab7c71a0cb15c1294b99aa0d83)>)

### [0.10.8](https://github.com/redkubes/otomi-core/compare/v0.10.7...v0.10.8) (2020-05-13)

### Bug Fixes

- redis-ha disabled
  [ci skip](<[ff2b054](https://github.com/redkubes/otomi-core/commit/ff2b054ff5ee4ffcfc7e91874858f193cef59766)>)

### [0.10.7](https://github.com/redkubes/otomi-core/compare/v0.10.6...v0.10.7) (2020-05-13)

### Bug Fixes

- added clusterrole admin for api
  [ci skip](<[712583d](https://github.com/redkubes/otomi-core/commit/712583d54e20fcb2acdb38e70cc92ffd0002e50e)>)

### [0.10.6](https://github.com/redkubes/otomi-core/compare/v0.10.5...v0.10.6) (2020-05-13)

### Bug Fixes

- api back to using image cmd
  [ci skip](<[fe61deb](https://github.com/redkubes/otomi-core/commit/fe61deb0e5d5513af6a1f54ba79ce9ed9f324bf4)>)
- loading order cert-manager
  [ci skip](<[a8d6dff](https://github.com/redkubes/otomi-core/commit/a8d6dff4cfddbe59c2bb2fe172c217b01d7f8e8f)>)

### [0.10.5](https://github.com/redkubes/otomi-core/compare/v0.10.4...v0.10.5) (2020-05-13)

### Bug Fixes

- gatekeeper setup
  [ci skip](<[42832c8](https://github.com/redkubes/otomi-core/commit/42832c8164e4b0c88b707217c779b044f507f8a8)>)

### [0.10.4](https://github.com/redkubes/otomi-core/compare/v0.10.3...v0.10.4) (2020-05-11)

### [0.10.3](https://github.com/redkubes/otomi-core/compare/v0.10.2...v0.10.3) (2020-05-11)

### Bug Fixes

- crd loading for cert-manager
  ([056ba2c](https://github.com/redkubes/otomi-core/commit/056ba2c542487dabaf4446614651731401d71ae3))
- many bugfixes and cleanups
  ([3bef9c7](https://github.com/redkubes/otomi-core/commit/3bef9c70416ef2fdaee0d150a18c69ab49801fbd))
- missing kubelet data, upgraded prometheus-operator
  ([ea98611](https://github.com/redkubes/otomi-core/commit/ea98611143d548b4711ab65f59ac78bb3ad58740))
- otomi-api value fix
  [ci skip](<[5c70827](https://github.com/redkubes/otomi-core/commit/5c708275847293ba844605b14b00454e8b376f63)>)

### Feature Improvements

- added disable sync flag for api
  [ci skip](<[95f4a8e](https://github.com/redkubes/otomi-core/commit/95f4a8efac45a0276e5814ea20c901b4f8ba80f8)>)

### [0.10.2](https://github.com/redkubes/otomi-core/compare/v0.10.1...v0.10.2) (2020-05-01)

### Bug Fixes

- made package private
  [ci skip](<[1275723](https://github.com/redkubes/otomi-core/commit/1275723175656296bf17a05f1c866d6e9e001782)>)
- removed faulty stack maintenance task
  [ci skip](<[ea05cea](https://github.com/redkubes/otomi-core/commit/ea05cea1dc69d92dd476b25d5e2916103542f24c)>)

### [0.10.1](https://github.com/redkubes/otomi-core/compare/v0.10.0...v0.10.1) (2020-05-01)

### Bug Fixes

- regression, completed upgrade script
  c[ skip](<[346e25f](https://github.com/redkubes/otomi-core/commit/346e25fa03b7ee808ad229be3367066ab8737cde)>)

## [0.10.0](https://github.com/redkubes/otomi-core/compare/v0.9.23...v0.10.0) (2020-05-01)

### ⚠ BREAKING CHANGES

- **moved wildcard domains under apps host:** istio upgraded, path mapping added

### Bug Fixes

- missing autoscaler
  ([7b9a936](https://github.com/redkubes/otomi-core/commit/7b9a936aa81d6a52b590db376377a7369966d346))
- tmp commit ([9ceddae](https://github.com/redkubes/otomi-core/commit/9ceddaed91d8c5d36670b84114d2c8b245eac3cd))

### Code Refactoring

- **moved wildcard domains under apps host:** apps behind paths
  ([faddf7a](https://github.com/redkubes/otomi-core/commit/faddf7ae107a3a36fc03523dbe4b91a2819fb910))

### Feature Improvements

- using new helm adoption feature
  ([a021714](https://github.com/redkubes/otomi-core/commit/a021714dfd6d5aa05652c4d004feb87df865a27f))

### [0.9.23](https://github.com/redkubes/otomi-core/compare/v0.9.22...v0.9.23) (2020-04-25)

### Bug Fixes

- internal ksvc that is not predeployed now gets deployed
  [ci skip](<[c1aeb01](https://github.com/redkubes/otomi-core/commit/c1aeb01a4d0a037f3a7f0d5b557bd8fe2e3da7cb)>)

### [0.9.22](https://github.com/redkubes/otomi-core/compare/v0.9.21...v0.9.22) (2020-04-24)

### Feature Improvements

- nginx upgrade
  [ci skip](<[501885c](https://github.com/redkubes/otomi-core/commit/501885c76f1cee8b3032808c7a027569c52a56da)>)

### [0.9.21](https://github.com/redkubes/otomi-core/compare/v0.9.20...v0.9.21) (2020-04-23)

### Bug Fixes

- teamId in team-ns [#3](https://github.com/redkubes/otomi-core/issues/3)
  [ci skip](<[922eeba](https://github.com/redkubes/otomi-core/commit/922eeba3f343744b070752abf28b47247cf3bdf3)>)

### [0.9.20](https://github.com/redkubes/otomi-core/compare/v0.9.19...v0.9.20) (2020-04-23)

### Bug Fixes

- teamId in team-ns [#2](https://github.com/redkubes/otomi-core/issues/2)
  [ci skip](<[a7f2c8e](https://github.com/redkubes/otomi-core/commit/a7f2c8ef1841421d6797a89edae6f54536c8c5e6)>)

### [0.9.19](https://github.com/redkubes/otomi-core/compare/v0.9.18...v0.9.19) (2020-04-23)

### Bug Fixes

- teamId in team-ns
  [ci skip](<[2b77e89](https://github.com/redkubes/otomi-core/commit/2b77e89f4e3b6d8167173fa5cf809cfa8fe7c94a)>)

### [0.9.18](https://github.com/redkubes/otomi-core/compare/v0.9.17...v0.9.18) (2020-04-23)

### Bug Fixes

- teamId now used instead of name
  [ci skip](<[aabd54d](https://github.com/redkubes/otomi-core/commit/aabd54db0d352976bfdc06f0190e40175831b199)>)

### Feature Improvements

- checksum on new config for api
  [ci skip](<[c5315c7](https://github.com/redkubes/otomi-core/commit/c5315c70f0fd84d2a8e9b10db7c3da9d01475ed8)>)

### [0.9.17](https://github.com/redkubes/otomi-core/compare/v0.9.16...v0.9.17) (2020-04-23)

### Bug Fixes

- missing teamconfig
  [ci skip](<[59528bd](https://github.com/redkubes/otomi-core/commit/59528bd9e1e3c08dc735001c806879adf5290db0)>)

### [0.9.16](https://github.com/redkubes/otomi-core/compare/v0.9.15...v0.9.16) (2020-04-23)

### Bug Fixes

- hiding auth app ([864a7fc](https://github.com/redkubes/otomi-core/commit/864a7fca69d53a35f2082146aee44691b85ba5f7))

### [0.9.15](https://github.com/redkubes/otomi-core/compare/v0.9.14...v0.9.15) (2020-04-20)

### Bug Fixes

- added hide flag to some services for api
  [ci skip](<[e1a16c8](https://github.com/redkubes/otomi-core/commit/e1a16c8b448c0fc8e5c4f3e6f642d91c93c96892)>)

### [0.9.14](https://github.com/redkubes/otomi-core/compare/v0.9.13...v0.9.14) (2020-04-20)

### Others

- added core.yaml as mount in api deployment
  ([d690cb8](https://github.com/redkubes/otomi-core/commit/d690cb8d76e6ac8029b0a12db21890170583fe76))
- added core.yaml as mount in api deployment: fix
  [ci skip](<[bdc91d2](https://github.com/redkubes/otomi-core/commit/bdc91d2cd1b4754518caa8489c54230deeda33a9)>)
- split up core values into secrets as well for api
  [ci skip](<[ee901a8](https://github.com/redkubes/otomi-core/commit/ee901a8eafbcdcc7afe97df8a4d500468a92b6c6)>)

### [0.9.13](https://github.com/redkubes/otomi-core/compare/v0.9.12...v0.9.13) (2020-04-19)

### Bug Fixes

- env fix
  [ci skip](<[2aeab5a](https://github.com/redkubes/otomi-core/commit/2aeab5af6c93edde4ec38835f48aa98d88b963eb)>)

### [0.9.12](https://github.com/redkubes/otomi-core/compare/v0.9.11...v0.9.12) (2020-04-19)

### Bug Fixes

- env fix for api
  [ci skip](<[a28b6b2](https://github.com/redkubes/otomi-core/commit/a28b6b25fec8860f7dfd9ed791cad48b12489cd4)>)

### [0.9.11](https://github.com/redkubes/otomi-core/compare/v0.9.9...v0.9.11) (2020-04-19)

### Bug Fixes

- put back svc name ([d8bca2f](https://github.com/redkubes/otomi-core/commit/d8bca2fdd7b15ba5feee6983927a59eac03cf85c))

### Code Refactoring

- removed unneeded 'svc' prop
  ([0e20233](https://github.com/redkubes/otomi-core/commit/0e20233d1627ca5a01fe718fbc7aec82a01e64f0))
- removed unneeded 'svc' prop
  ([584dacf](https://github.com/redkubes/otomi-core/commit/584dacf7a02ef4cc27e135ac4c2c6b7511188e10))

### [0.9.10](https://github.com/redkubes/otomi-core/compare/v0.9.9...v0.9.10) (2020-04-19)

### Code Refactoring

- removed unneeded 'svc' prop
  ([584dacf](https://github.com/redkubes/otomi-core/commit/584dacf7a02ef4cc27e135ac4c2c6b7511188e10))

### [0.9.9](https://github.com/redkubes/otomi-core/compare/v0.9.8...v0.9.9) (2020-04-14)

### Bug Fixes

- ports to default for api and web
  [ci skip](<[7989faf](https://github.com/redkubes/otomi-core/commit/7989faf82cf310845a14e633521f3c9052ddcef7)>)

### [0.9.8](https://github.com/redkubes/otomi-core/compare/v0.9.7...v0.9.8) (2020-04-14)

### Bug Fixes

- team ids
  [ci skip](<[35e749b](https://github.com/redkubes/otomi-core/commit/35e749b283d80d6222a1b21243b219fc96a8c507)>)

### [0.9.7](https://github.com/redkubes/otomi-core/compare/v0.9.6...v0.9.7) (2020-04-14)

### Bug Fixes

- corrected version grep
  [ci skip](<[b43f92c](https://github.com/redkubes/otomi-core/commit/b43f92c7aa316ed0c0af5e75378e4c8ed219132d)>)

### Code Refactoring

- removed teams files to favor default layering
  [ci skip](<[b46857d](https://github.com/redkubes/otomi-core/commit/b46857dc219a66fd535488656ed81f1b272c4538)>)

### [0.9.6](https://github.com/redkubes/otomi-core/compare/v0.9.5...v0.9.6) (2020-04-13)

### Features

- added hasKnative flag
  [ci skip](<[b78090f](https://github.com/redkubes/otomi-core/commit/b78090f4453d16ddbe5a58dbc065e64f555d628c)>)

### [0.9.5](https://github.com/redkubes/otomi-core/compare/v0.9.4...v0.9.5) (2020-04-10)

### Bug Fixes

- backwards compatibility for missing values
  [ci skip](<[8d720d4](https://github.com/redkubes/otomi-core/commit/8d720d441b93f0cab4b3ef61449ac19b30c253e3)>)

### Build System

- simplified release
  [ci skip](<[0c2cb8a](https://github.com/redkubes/otomi-core/commit/0c2cb8a9688404b51b4d97c0e6860f0b7ccaa204)>)

### [0.9.4](https://github.com/redkubes/otomi-core/compare/v0.9.3...v0.9.4) (2020-04-03)

### Bug Fixes

- azure config missing
  ([7ebcbf5](https://github.com/redkubes/otomi-core/commit/7ebcbf5e62f64e7109f919f02b8b44526c163969))

### [0.9.3](https://github.com/redkubes/otomi-core/compare/v0.9.2...v0.9.3) (2020-03-31)

### Bug Fixes

- azure monitor config fixes
  ([a554fdd](https://github.com/redkubes/otomi-core/commit/a554fdd65d860ea34f5f7d031460391a575720cd))

### [0.9.2](https://github.com/redkubes/otomi-core/compare/v0.9.1...v0.9.2) (2020-03-31)

### Bug Fixes

- corrected run-if-changed package
  [ci skip](<[eb94611](https://github.com/redkubes/otomi-core/commit/eb94611c1a9265f7cebd03fc19b683095249cca4)>)
- husky hook removed to avoid circular dep
  [ci skip](<[a4e6624](https://github.com/redkubes/otomi-core/commit/a4e6624ffe17a866fdadfa3466ea941d9e31f09a)>)
- lint-staged now without git add
  [ci skip](<[4afc276](https://github.com/redkubes/otomi-core/commit/4afc2769d5a5530c746aa3e5e18e7827c6876bb1)>)
- reenabled loki ([5a8d744](https://github.com/redkubes/otomi-core/commit/5a8d744f0852b155cc28bb1715cd758d0a976296))
- trying cz hook ([1fbca66](https://github.com/redkubes/otomi-core/commit/1fbca66e4113117ebfd851af8b5917134042fa70))

### Build System

- adding hook to force cz
  [ci skip](<[815e6ef](https://github.com/redkubes/otomi-core/commit/815e6ef36e7447dae47077f154f19eb1895e64bc)>)
- automatic prettier formatting
  ([35db7c2](https://github.com/redkubes/otomi-core/commit/35db7c232e14816bd8dd0b215936a882b79a60ba))
- split up npm run release to have :ok step
  [ci skip](<[842b2cf](https://github.com/redkubes/otomi-core/commit/842b2cf7c4236cf2a7a73acfb1d27249ef873949)>)

### Others

- removed suggested nginx extension
  [ci skip](<[9cdd56a](https://github.com/redkubes/otomi-core/commit/9cdd56a67fe0c73c48eb370e957d3d3ec34fdd14)>)

### [0.9.1](https://github.com/redkubes/otomi-core/compare/v0.9.0...v0.9.1) (2020-03-30)

### Bug Fixes

- added secrets props to azure monitor datasource
  ([5519a27](https://github.com/redkubes/otomi-core/commit/5519a271cb332b247a8b6d0d4c8bf7c6dd9bd0e8))
- missing react-redux after refactor, removed versions.ini
  ([856ed8c](https://github.com/redkubes/otomi-core/commit/856ed8c7c8bba46143d4d2e4c575793b62e13a49))

### Build System

- added settings for prettier auto save
  [ci-skip](<[c6f357b](https://github.com/redkubes/otomi-core/commit/c6f357b2d84938fdf7c9df2a6167b24740110d46)>)

### Others

- **release:** 0.9.1
  ([ba2827d](https://github.com/redkubes/otomi-core/commit/ba2827d988ab697a5c5098e1794798c4921b5ec5))

## [0.9.0](https://github.com/redkubes/otomi-core/compare/v0.8.36...v0.9.0) (2020-03-30)

### ⚠ BREAKING CHANGES

- new values structure

### Features

- added azure monitor support to prometheus
  ([8cdd17b](https://github.com/redkubes/otomi-core/commit/8cdd17b1fc964e84d0823a0fd9063df8051d672e)), closes
  [#73](https://github.com/redkubes/otomi-core/issues/73)

### Build System

- added settings for prettier auto save
  [ci-skip](<[c6f357b](https://github.com/redkubes/otomi-core/commit/c6f357b2d84938fdf7c9df2a6167b24740110d46)>)

### Bug Fixes

- added secrets props to azure monitor datasource
  ([5519a27](https://github.com/redkubes/otomi-core/commit/5519a271cb332b247a8b6d0d4c8bf7c6dd9bd0e8))
- missing react-redux after refactor, removed versions.ini
  ([856ed8c](https://github.com/redkubes/otomi-core/commit/856ed8c7c8bba46143d4d2e4c575793b62e13a49))
- otomi-console port 80 instead of 5000 since we moved to nginx
  ([4390c5d](https://github.com/redkubes/otomi-core/commit/4390c5dad3a77eb53058a002f3a35dab4df58df3))

### 0.8.36 (2020-03-25)

### Features

- automated release versioning
  ([65672da](https://github.com/redkubes/otomi-core/commit/65672da6788fcaa9efdf91e9a169d3d27d7467bd))
