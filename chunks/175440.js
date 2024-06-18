"use strict";
var e = n(980855),
  o = n(49693),
  i = n(182867),
  u = Array,
  c = Math.max;
t.exports = function(t, r, n) {
  for (var f = o(t), a = e(r, f), s = e(void 0 === n ? f : n, f), y = u(c(s - a, 0)), p = 0; a < s; a++, p++) i(y, p, t[a]);
  return y.length = p, y
}