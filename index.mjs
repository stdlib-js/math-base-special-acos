// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asin@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-fourth-pi@v0.2.1-esm/index.mjs";function n(n){var m;return s(n)||n<-1||n>1?NaN:n>.5?2*t(e(.5-.5*n)):(m=i-t(n),m+=6123233995736766e-32,m+=i)}export{n as default};
//# sourceMappingURL=index.mjs.map
