"use strict";
e.exports = function(e, t) {
  var n = t.length,
    l = e.length;
  if (l > n) return !1;
  if (l === n) return e === t;
  e: for (var i = 0, a = 0; i < l; i++) {
    for (var u = e.charCodeAt(i); a < n;)
      if (t.charCodeAt(a++) === u) continue e;
    return !1
  }
  return !0
}