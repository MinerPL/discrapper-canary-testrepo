"use strict";
r.r(t);
var n = r("548015"),
  a = r("204188"),
  o = r("315162"),
  i = r("906024"),
  l = 1 / 0,
  u = n.default ? n.default.prototype : void 0,
  s = u ? u.toString : void 0;
t.default = function e(t) {
  if ("string" == typeof t) return t;
  if ((0, o.default)(t)) return (0, a.default)(t, e) + "";
  if ((0, i.default)(t)) return s ? s.call(t) : "";
  var r = t + "";
  return "0" == r && 1 / t == -l ? "-0" : r
}