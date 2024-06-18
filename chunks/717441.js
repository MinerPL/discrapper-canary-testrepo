"use strict";
var e = n(49693),
  o = n(959318),
  i = RangeError;
t.exports = function(t, r, n, u) {
  var c = e(t),
    f = o(n),
    a = f < 0 ? c + f : f;
  if (a >= c || a < 0) throw i("Incorrect index");
  for (var s = new r(c), y = 0; y < c; y++) s[y] = y === a ? u : t[y];
  return s
}