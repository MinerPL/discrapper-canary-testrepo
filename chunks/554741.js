"use strict";
var r = n("37549")("%TypeError%"),
  i = n("300344"),
  o = n("865435");
e.exports = function(e, t) {
  if ("Object" !== o(e)) throw new r("Assertion failed: `O` must be an Object");
  if (!i(t)) throw new r("Assertion failed: `P` must be a Property Key");
  return t in e
}