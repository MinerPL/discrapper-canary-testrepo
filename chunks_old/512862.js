"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
}), r("781738");
var n = r("658542"),
  a = r("658335"),
  o = r("794666"),
  i = r("138600"),
  u = /^\[object .+?Constructor\]$/,
  l = Object.prototype,
  s = Function.prototype.toString,
  f = l.hasOwnProperty,
  c = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
  d = function(e) {
    return !(!(0, o.default)(e) || (0, a.default)(e)) && ((0, n.default)(e) ? c : u).test((0, i.default)(e))
  }