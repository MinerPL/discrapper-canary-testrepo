"use strict";
var n = Number.isNaN || function(e) {
  return "number" == typeof e && e != e
};

function o(e, t) {
  if (e.length !== t.length) return !1;
  for (var o, i, r = 0; r < e.length; r++) {
    ;
    if (o = e[r], !(o === (i = t[r]) || n(o) && n(i))) return !1
  }
  return !0
}
t.Z = function(e, t) {
  void 0 === t && (t = o);
  var n, i, r = [],
    a = !1;
  return function() {
    for (var o = [], u = 0; u < arguments.length; u++) o[u] = arguments[u];
    return a && n === this && t(o, r) ? i : (i = e.apply(this, o), a = !0, n = this, r = o, i)
  }
}