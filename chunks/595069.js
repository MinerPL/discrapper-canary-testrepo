"use strict";
var r = n("668530"),
  a = n("821819"),
  o = n("96403"),
  i = n("342545"),
  l = n("625014").trim,
  u = n("219479"),
  s = r.parseInt,
  c = r.Symbol,
  d = c && c.iterator,
  f = /^[+-]?0x/i,
  p = o(f.exec),
  h = 8 !== s(u + "08") || 22 !== s(u + "0x16") || d && !a(function() {
    s(Object(d))
  });
e.exports = h ? function(e, t) {
  var n = l(i(e));
  return s(n, t >>> 0 || (p(f, n) ? 16 : 10))
} : s