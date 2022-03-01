<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# floorsd

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round a numeric value to the nearest number toward negative infinity with N significant figures.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-floorsd
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var floorsd = require( '@stdlib/math-base-special-floorsd' );
```

#### floorsd( x, n\[, b] )

Rounds a `numeric` value to the nearest `number` toward negative infinity with `n` significant figures.

```javascript
var v = floorsd( 3.141592653589793, 5 );
// returns 3.1415

v = floorsd( 3.141592653589793, 1 );
// returns 3.0

v = floorsd( 12368.0, 2 );
// returns 12000.0
```

The default base is `10` (decimal). To round using a different base, provide a third argument.

```javascript
var v = floorsd( 0.0313, 2, 2 );
// returns 0.03125
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var floorsd = require( '@stdlib/math-base-special-floorsd' );

var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    x = (randu()*10000.0) - 5000.0;
    y = floorsd( x, 5 );
    console.log( 'x: %d. Rounded: %d.', x, y );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ceilsd`][@stdlib/math/base/special/ceilsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward positive infinity with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math/base/special/floor`][@stdlib/math/base/special/floor]</span><span class="delimiter">: </span><span class="description">round a double-precision floating-point number toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math/base/special/roundsd`][@stdlib/math/base/special/roundsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number with N significant figures.</span>
-   <span class="package-name">[`@stdlib/math/base/special/truncsd`][@stdlib/math/base/special/truncsd]</span><span class="delimiter">: </span><span class="description">round a numeric value to the nearest number toward zero with N significant figures.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-floorsd.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-floorsd

[test-image]: https://github.com/stdlib-js/math-base-special-floorsd/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-floorsd/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-floorsd/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-floorsd?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-floorsd.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-floorsd/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-floorsd/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-floorsd/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-floorsd/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-floorsd/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/ceilsd]: https://github.com/stdlib-js/math-base-special-ceilsd

[@stdlib/math/base/special/floor]: https://github.com/stdlib-js/math-base-special-floor

[@stdlib/math/base/special/roundsd]: https://github.com/stdlib-js/math-base-special-roundsd

[@stdlib/math/base/special/truncsd]: https://github.com/stdlib-js/math-base-special-truncsd

<!-- </related-links> -->

</section>

<!-- /.links -->
