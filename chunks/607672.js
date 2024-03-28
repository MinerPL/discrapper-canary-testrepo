"use strict";
var r = n("28886"),
  a = n("982665"),
  o = n("653457");
e.exports = function(e, t) {
  if (r(e), a(t) && t.constructor === e) return t;
  var n = o.f(e);
  return (0, n.resolve)(t), n.promise
}