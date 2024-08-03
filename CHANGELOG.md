# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-28)

<section class="features">

### Features

-   [`fe25386`](https://github.com/stdlib-js/stdlib/commit/fe25386fdcdbb684dc96990ba12171d5bf62df6d) - add C implementation for `math/base/special/floorsd` [(#2603)](https://github.com/stdlib-js/stdlib/pull/2603)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`691e774`](https://github.com/stdlib-js/stdlib/commit/691e774930ab3d983998e53ad16dbf4bd5eb0c76): make base parameter compulsory in `math/base/special/floorsd`
-   [`691e774`](https://github.com/stdlib-js/stdlib/commit/691e774930ab3d983998e53ad16dbf4bd5eb0c76): The base parameter must now be provided explicitly.  

    -   Previously, the base parameter had a default value of 10. Now it has to be supplied explicitly.
    Before:
    ```
    var v = floorsd( 3.141592653589793, 5 );
    // returns 3.1415
    ```
    After:
    ```
    var v = floorsd( 3.141592653589793, 5, 10 );
    // returns 3.1415
    ```

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`8de8d90`](https://github.com/stdlib-js/stdlib/commit/8de8d90b8a5d72f7c2e57ae21593be5f5f1eb8e7) - **refactor:** perform explicit cast [(#2642)](https://github.com/stdlib-js/stdlib/pull/2642) _(by Gunj Joshi)_
-   [`ead1c3b`](https://github.com/stdlib-js/stdlib/commit/ead1c3b780527d8068d9c076e85688be94d53775) - **chore:** update package meta data [(#2640)](https://github.com/stdlib-js/stdlib/pull/2640) _(by stdlib-bot, Athan Reines)_
-   [`b063947`](https://github.com/stdlib-js/stdlib/commit/b0639472175808254213fd35d2902e52b998b4cc) - **refactor:** reduce code complexity [(#2632)](https://github.com/stdlib-js/stdlib/pull/2632) _(by Gunj Joshi, Athan Reines)_
-   [`691e774`](https://github.com/stdlib-js/stdlib/commit/691e774930ab3d983998e53ad16dbf4bd5eb0c76) - **refactor:** make base parameter compulsory in `math/base/special/floorsd` [(#2617)](https://github.com/stdlib-js/stdlib/pull/2617) _(by Gunj Joshi)_
-   [`fe25386`](https://github.com/stdlib-js/stdlib/commit/fe25386fdcdbb684dc96990ba12171d5bf62df6d) - **feat:** add C implementation for `math/base/special/floorsd` [(#2603)](https://github.com/stdlib-js/stdlib/pull/2603) _(by Gunj Joshi)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1 

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

