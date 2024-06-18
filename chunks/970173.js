"use strict";
var e = n(192291),
  o = n(49693),
  i = n(959318),
  u = e.aTypedArray;
(0, e.exportTypedArrayMethod)("at", function(t) {
  var r = u(this),
    n = o(r),
    e = i(t),
    c = e >= 0 ? e : n + e;
  return c < 0 || c >= n ? void 0 : r[c]
})