"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.stringSimilarity = void 0;
t.stringSimilarity = function(e, t, l, a) {
  if (void 0 === l && (l = 2), void 0 === a && (a = !1), !a && (e = e.toLowerCase(), t = t.toLowerCase()), e.length < l || t.length < l) return 0;
  for (var s = new Map, n = 0; n < e.length - (l - 1); n++) {
    var i = e.substr(n, l);
    s.set(i, s.has(i) ? s.get(i) + 1 : 1)
  }
  for (var r = 0, u = 0; u < t.length - (l - 1); u++) {
    var o = t.substr(u, l),
      d = s.has(o) ? s.get(o) : 0;
    d > 0 && (s.set(o, d - 1), r++)
  }
  return 2 * r / (e.length + t.length - (l - 1) * 2)
}, t.default = t.stringSimilarity