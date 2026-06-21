"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var u=s(function(p,t){
var v=require('@stdlib/math-base-assert-is-nan/dist'),i=require('@stdlib/math-base-special-asin/dist'),q=require('@stdlib/math-base-special-sqrt/dist'),a=require('@stdlib/constants-float64-fourth-pi/dist'),c=6123233995736766e-32;function f(e){var r;return v(e)?NaN:e<-1||e>1?NaN:e>.5?2*i(q(.5-.5*e)):(r=a-i(e),r+=c,r+=a,r)}t.exports=f
});var o=u();module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
