"use strict";
r.r(t);
var n = r("790215"),
  a = Array.prototype.splice;
t.default = function(e) {
  var t = this.__data__,
    r = (0, n.default)(t, e);
  return !(r < 0) && (r == t.length - 1 ? t.pop() : a.call(t, r, 1), --this.size, !0)
}