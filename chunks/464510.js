"use strict";
var r = n("37549"),
  i = r("%Symbol.species%", !0),
  o = r("%TypeError%"),
  s = n("900651"),
  a = n("640107"),
  c = n("81109"),
  u = n("749578"),
  d = n("865435"),
  l = n("778841");
e.exports = function(e, t) {
  if (!l(t) || t < 0) throw new o("Assertion failed: length must be an integer >= 0");
  if (!c(e)) return s(t);
  var n = a(e, "constructor");
  if (i && "Object" === d(n) && null === (n = a(n, i)) && (n = void 0), void 0 === n) return s(t);
  if (!u(n)) throw new o("C must be a constructor");
  return new n(t)
}