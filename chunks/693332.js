"use strict";
r.r(t);
var n = r("593007"),
  a = r("382855"),
  o = r("675717"),
  i = r("526389"),
  l = /^\[object .+?Constructor\]$/,
  u = Object.prototype,
  s = Function.prototype.toString,
  f = u.hasOwnProperty,
  c = RegExp("^" + s.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
t.default = function(e) {
  return !(!(0, o.default)(e) || (0, a.default)(e)) && ((0, n.default)(e) ? c : l).test((0, i.default)(e))
}