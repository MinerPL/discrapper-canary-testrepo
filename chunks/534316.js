"use strict";
var r = n("37549"),
  i = r("%Number%"),
  o = r("%RegExp%"),
  s = r("%TypeError%"),
  a = r("%parseInt%"),
  c = n("812095"),
  u = n("998645"),
  d = c("String.prototype.slice"),
  l = u(/^0b[01]+$/i),
  f = u(/^0o[0-7]+$/i),
  p = u(/^[-+]0x[0-9a-f]+$/i),
  h = u(new o("[\x85​￾]", "g")),
  g = n("418348"),
  b = n("865435");
e.exports = function e(t) {
  if ("String" !== b(t)) throw new s("Assertion failed: `argument` is not a String");
  if (l(t)) return i(a(d(t, 2), 2));
  if (f(t)) return i(a(d(t, 2), 8));
  if (h(t) || p(t)) return NaN;
  var n = g(t);
  return n !== t ? e(n) : i(t)
}