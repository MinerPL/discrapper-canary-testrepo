"use strict";
var r = n("875604"),
  a = n("780618"),
  o = String.prototype;
e.exports = function(e) {
  var t = e.trim;
  return "string" == typeof e || e === o || r(o, e) && t === o.trim ? a : t
}