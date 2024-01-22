"use strict";
var r = n("37549"),
  i = r("%TypeError%"),
  o = r("%Number%"),
  s = n("121638"),
  a = n("732496"),
  c = n("534316");
e.exports = function(e) {
  var t = s(e) ? e : a(e, o);
  if ("symbol" == typeof t) throw new i("Cannot convert a Symbol value to a number");
  if ("bigint" == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
  return "string" == typeof t ? c(t) : o(t)
}