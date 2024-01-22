"use strict";
n("70102");
var r = n("37549"),
  i = n("648644"),
  o = r("%Promise.resolve%", !0),
  s = o && i(o);
e.exports = function(e, t) {
  if (!s) throw SyntaxError("This environment does not support Promises.");
  return s(e, t)
}