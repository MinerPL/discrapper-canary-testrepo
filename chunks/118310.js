"use strict";
var r = n("875604"),
  a = n("537828"),
  o = Function.prototype;
e.exports = function(e) {
  var t = e.bind;
  return e === o || r(o, e) && t === o.bind ? a : t
}