"use strict";
var r = n("875604"),
  a = n("752206"),
  o = n("638636"),
  i = Array.prototype,
  l = String.prototype;
e.exports = function(e) {
  var t = e.includes;
  return e === i || r(i, e) && t === i.includes ? a : "string" == typeof e || e === l || r(l, e) && t === l.includes ? o : t
}