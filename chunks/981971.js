"use strict";
var e = n(926515),
  o = n(526988),
  i = n(24033),
  u = n(938507),
  c = n(11697),
  f = TypeError;
t.exports = function(t, r) {
  var n = arguments.length < 2 ? c(t) : r;
  if (o(n)) return i(e(n, t));
  throw f(u(t) + " is not iterable")
}