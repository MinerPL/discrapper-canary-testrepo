"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.ReactCSS = t.loop = t.handleActive = t.handleHover = t.hover = void 0;
var r = c(n(914461)),
  i = c(n(4817)),
  a = c(n(685931)),
  o = c(n(319065)),
  s = c(n(455952)),
  u = c(n(53045));

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
t.hover = o.default, t.handleHover = o.default, t.handleActive = s.default, t.loop = u.default;
var l = t.ReactCSS = function(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
  var s = (0, r.default)(n),
    u = (0, i.default)(e, s);
  return (0, a.default)(u)
};
t.default = l