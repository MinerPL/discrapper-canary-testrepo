"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
});
var n = r("382356"),
  a = r("397202"),
  o = r("557916"),
  i = r("723347"),
  u = 1 / 0,
  l = n.default ? n.default.prototype : void 0,
  s = l ? l.toString : void 0,
  f = function e(t) {
    if ("string" == typeof t) return t;
    if ((0, o.default)(t)) return (0, a.default)(t, e) + "";
    if ((0, i.default)(t)) return s ? s.call(t) : "";
    var r = t + "";
    return "0" == r && 1 / t == -u ? "-0" : r
  }