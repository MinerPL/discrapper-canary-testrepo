"use strict";
var r = n("37549")("%TypeError%"),
  i = n("969035"),
  o = n("300344"),
  s = n("865435");
e.exports = function(e, t, n) {
  if ("Object" !== s(e)) throw new r("Assertion failed: Type(O) is not Object");
  if (!o(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
  if (!i(e, t, n)) throw new r("unable to create data property")
}