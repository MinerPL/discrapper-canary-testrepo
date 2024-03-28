"use strict";
r.r(t);
var n = Function.prototype.toString;
t.default = function(e) {
  if (null != e) {
    try {
      return n.call(e)
    } catch (e) {}
    try {
      return e + ""
    } catch (e) {}
  }
  return ""
}