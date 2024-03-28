"use strict";
var r = n("875604"),
  a = n("865488"),
  o = String.prototype;
e.exports = function(e) {
  var t = e.trimStart;
  return "string" == typeof e || e === o || r(o, e) && t === o.trimStart ? a : t
}