# Setting up your development environment

We invite you to first look at the code and file structure. It also helps to have read the docs on using the CLI at [otomi.io](https://otomi.io/docs/cli/working-with).

You will notice that we use some tooling to enforce consistent commits and releases:

- [Commitizen](https://github.com/commitizen): We use their `cz-cli` and `cz-conventional-changelog`.
- [Standard Version](https://github.com/conventional-changelog/standard-version): Generates CHANGELOG, bumps & releases image (also as git tag).
- [Prettier](https://prettier.io): Almost all code is autoformatted when using vscode (except all the go templates, as these are unstructured by intent).

The bulk of the work in this repo consists of go templates. These are highlighted by the helm plugin, but not auto formatted (as they might contain any kind of code). In order to help you write consistent go templates we have written a [special section about go templating](./go-templating.md).

## The parts of core

### A valid values repo

A prefilled values repo with valid values can be generated quickly like this:

1. Create a yaml file with the [minimal chart values](https://github.com/linode/apl-core/blob/main/chart/apl/values.yaml) (Only the 3 in `otomi.*` are sufficient)
2. Point to a location for the repo: `export ENV_DIR=...`
3. Generate the repo: `VALUES_INPUT={location of chart values} chart/apl/localtest.sh`

### The CLI

The CLI is mostly used to work with external values repos and target clusters, but for local development we wish to target the following internal values repos: `.values`, `tests/fixtures` and `tests/kind`. The `npm run ...` scripts use the bundled `binzx/otomi` CLI but target only these internal repos.

It is possible to install the cli globally by following the instructions on otomi.io, but it suffices to point to the one from the repo:

```bash
export PATH=./binzx:$PATH
```

### The values schema

The [values-schema.yaml](../values-schema.yaml) file holds the schema used to validate the `otomi/otomi` chart values, as well as values repo input from `$ENV_DIR`. Running `otomi validate-values` demonstrates that. You don't need a valid values repo and can just validate the internal `.values` and `tests/fixtures` repos with `npm run validate-values`.

Now, whenever a breaking change is made in the schema, this needs to be reflected in [values-changes.yaml](../values-changes.yaml), by adding an entry describing what changed: a file got renamed, a property got deleted or relocated, or a value needs to be transformed by providing a go-template snippet that takes the old value as input.
Now, whenever `otomi.version` in the values is changed, and that version holds any schema changes, then `otomi bootstrap` will run the script found in `src/cmd/migrate.ts`, conforming the values to the latest spec. Notice that `npm run migrate-values` exists and is automatically ran to upgrade the internal values repos.

More in-depth docs are found in the [migrating values](./migrating-values.md) section.

## Tests

Please make sure to add all the artifacts from the Definition of Done, which includes possible tests and test data.

### 1. Static/unit tests

1. Spec validation of values happens automatically in the values repo when using `otomi commit`, or by running `otomi validate-values` directly.
2. Linting of k8s output (manifests) that are generated from the `.values/env/*` input is done (via `npm run validate-templates`).
   It tests k8s output from the stack for correct CRs based on their CRDs and OPA rules defined.
   Therefore it is very important to always add test data that generates all of your templates (to keep up coverage).
3. OPA policy checks are also done in the pipeline via `npm run check-policies`.
4. Coding is done in `typescript`, and the sources are found in `src/*`. We use the `jest` testing framework, and it can be started with `npm run test:ts`
5. All local tests (so except integration and e2e) can be started with `npm test`

### 2. Testing the otomi installer on kind

It is possible to trigger a deployment run on an ephemeral kind cluster by adding `[kind]` to a commit message. This will start the github workflow job called `integration`.

### 3. End-to-end tests

We have a rich suite of `cypress` tests in our `otomi-e2e` repo that also serves some post-install automation.
We will open source this soon as well!

### 4. Runtime tests targeting a live cluster

After values are pushed the cluster's drone will do a deployment run. A number of tests are run in `src/cmd/test.ts` (final templates are validated, dry runs are attempted) before the final deployment of the artifacts. This can be done directly by running `otomi test`.
