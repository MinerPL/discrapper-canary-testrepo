"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.ReactCSS = t.loop = t.handleActive = t.handleHover = t.hover = void 0;
var n = s(r("914461")),
  a = s(r("4817")),
  o = s(r("685931")),
  i = s(r("319065")),
  l = s(r("455952")),
  u = s(r("53045"));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
t.hover = i.default, t.handleHover = i.default, t.handleActive = l.default, t.loop = u.default;
var f = t.ReactCSS = function(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  var l = (0, n.default)(r),
    u = (0, a.default)(e, l);
  return (0, o.default)(u)
};
t.default = f