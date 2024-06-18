"use strict";
var e = n(717441),
  o = n(192291),
  i = n(536524),
  u = n(959318),
  c = n(165915),
  f = o.aTypedArray,
  a = o.getTypedArrayConstructor;
(0, o.exportTypedArrayMethod)("with", {
  with: function(t, r) {
    var n = f(this),
      o = u(t),
      s = i(n) ? c(r) : +r;
    return e(n, a(n), o, s)
  }
}.with, ! function() {
  try {
    new Int8Array(1).with(2, {
      valueOf: function() {
        throw 8
      }
    })
  } catch (t) {
    return 8 === t
  }
}())