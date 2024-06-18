"use strict";
var r = n(670097);
t.Z = function(e, t) {
  return function(n, i) {
    if (null == n) return n;
    if (!(0, r.Z)(n)) return e(n, i);
    for (var a = n.length, o = t ? a : -1, s = Object(n);
      (t ? o-- : ++o < a) && !1 !== i(s[o], o, s););
    return n
  }
}