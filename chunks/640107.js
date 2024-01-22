"use strict";
var r = n("37549")("%TypeError%"),
  i = n("897804"),
  o = n("300344"),
  s = n("865435");
e.exports = function(e, t) {
  if ("Object" !== s(e)) throw new r("Assertion failed: Type(O) is not Object");
  if (!o(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true, got " + i(t));
  return e[t]
}