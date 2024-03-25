"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.ReactCSS = t.loop = t.handleActive = t.handleHover = t.hover = void 0;
var n = s(r("25636")),
  a = s(r("88899")),
  o = s(r("294108")),
  i = s(r("114016")),
  u = s(r("297263")),
  l = s(r("249397"));

function s(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
t.hover = i.default, t.handleHover = i.default, t.handleActive = u.default, t.loop = l.default;
var f = t.ReactCSS = function(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  var u = (0, n.default)(r),
    l = (0, a.default)(e, u);
  return (0, o.default)(l)
};
t.default = f