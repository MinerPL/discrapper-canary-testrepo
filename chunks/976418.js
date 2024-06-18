"use strict";
var e = n(175440),
  o = Math.floor,
  i = function(t, r) {
    var n = t.length,
      f = o(n / 2);
    return n < 8 ? u(t, r) : c(t, i(e(t, 0, f), r), i(e(t, f), r), r)
  },
  u = function(t, r) {
    for (var n, e, o = t.length, i = 1; i < o;) {
      for (e = i, n = t[i]; e && r(t[e - 1], n) > 0;) t[e] = t[--e];
      e !== i++ && (t[e] = n)
    }
    return t
  },
  c = function(t, r, n, e) {
    for (var o = r.length, i = n.length, u = 0, c = 0; u < o || c < i;) t[u + c] = u < o && c < i ? 0 >= e(r[u], n[c]) ? r[u++] : n[c++] : u < o ? r[u++] : n[c++];
    return t
  };
t.exports = i