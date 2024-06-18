"use strict";
n.d(t, {
  P: function() {
    return r
  }
}), n(470079);
var i = n(392711);

function r(e, t, n, r) {
  var s, o;
  let a = e.getCurrentConfig(n, r),
    l = t.getCurrentConfig(n, r);
  return s = a, o = l, (0, i.mergeWith)({}, s, o, (e, t) => e || t)
}