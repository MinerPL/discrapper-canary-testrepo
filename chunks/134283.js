"use strict";
var r = n("875604"),
  a = n("578742"),
  o = String.prototype;
e.exports = function(e) {
  var t = e.repeat;
  return "string" == typeof e || e === o || r(o, e) && t === o.repeat ? a : t
}