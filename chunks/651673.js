"use strict";
var e = r(926515),
  i = r(24033),
  u = r(354848),
  c = r(332916),
  o = r(213265),
  s = TypeError;
t.exports = function(t, n) {
  var r = t.exec;
  if (u(r)) {
    var a = e(r, t, n);
    return null !== a && i(a), a
  }
  if ("RegExp" === c(t)) return e(o, t, n);
  throw s("RegExp#exec called on incompatible receiver")
}