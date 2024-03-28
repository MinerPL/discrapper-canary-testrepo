"use strict";
r.r(t);
var n = r("176338"),
  a = r("754401"),
  o = r("370873"),
  i = Object.prototype,
  l = Function.prototype.toString,
  u = i.hasOwnProperty,
  s = l.call(Object);
t.default = function(e) {
  if (!(0, o.default)(e) || "[object Object]" != (0, n.default)(e)) return !1;
  var t = (0, a.default)(e);
  if (null === t) return !0;
  var r = u.call(t, "constructor") && t.constructor;
  return "function" == typeof r && r instanceof r && l.call(r) == s
}