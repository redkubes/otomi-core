# BATS testing framework

This document is relevant starting from [v0.11.52](https://github.com/redkubes/otomi-core/releases/tag/v0.11.52).

## Where can I find BATS?

The otomi/tools:1.4.12 includes the [bats framework](https://github.com/bats-core/bats-core), including libraries [bats-assert](https://github.com/ztombol/bats-assert), [bats-file](https://github.com/ztombol/bats-support) and [bats-support](https://github.com/ztombol/bats-support). These links include relevant documentation, such as syntax, which won't be discussed on this page.

Example of calling the binary:

`docker run --rm otomi/tools:1.4.12 bats bin/tests`

This example assumes tests exist in the container directory `otomi-core/bin/tests`. You can call bats with a directory as parameter and it will execute any `*.bats` file.

## How should I add tests?

Test files should have the .bats extension, otherwise they will not be executed.

## How should I name the test files?

Usually you will name the test file after the shell file holding the code you are testing, but with the `.bats` extension.

Example with a bootstrap.sh file:

`bootstrap.bats`

## How do I use the BATS libraries?

The tests will run in the otomi-core container, which has bats libs in `/usr/local/lib/bats-*`. The following snippet will include them in a test file:

```
lib_dir="/usr/local/lib"

load "$lib_dir/bats-support/load.bash"
load "$lib_dir/bats-assert/load.bash"
load "$lib_dir/bats-file/load.bash"
```
