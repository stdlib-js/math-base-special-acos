// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asin@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-fourth-pi@esm/index.mjs";var r=s,n=t,a=e,m=i;var d=function(s){var t;return r(s)||s<-1||s>1?NaN:s>.5?2*n(a(.5-.5*s)):(t=m-n(s),t+=6123233995736766e-32,t+=m)};export{d as default};
//# sourceMappingURL=index.mjs.map
