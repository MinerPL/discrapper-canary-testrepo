"use strict";
var r = n("865435"),
  i = Math.floor;
e.exports = function(e) {
  return "BigInt" === r(e) ? e : i(e)
}