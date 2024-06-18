"use strict";
var n;
t.stringSimilarity = void 0, t.stringSimilarity = function(e, t, n, l) {
  if (void 0 === n && (n = 2), void 0 === l && (l = !1), !l && (e = e.toLowerCase(), t = t.toLowerCase()), e.length < n || t.length < n) return 0;
  for (var s = new Map, a = 0; a < e.length - (n - 1); a++) {
    var i = e.substr(a, n);
    s.set(i, s.has(i) ? s.get(i) + 1 : 1)
  }
  for (var r = 0, o = 0; o < t.length - (n - 1); o++) {
    var u = t.substr(o, n),
      c = s.has(u) ? s.get(u) : 0;
    c > 0 && (s.set(u, c - 1), r++)
  }
  return 2 * r / (e.length + t.length - (n - 1) * 2)
}, t.stringSimilarity