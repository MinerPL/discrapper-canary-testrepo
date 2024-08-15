Object.defineProperty(t, '__esModule', {
  value: !0
}), t.ReactCSS = t.loop = t.handleActive = t.handleHover = t.hover = void 0;
var r = u(n(914461)),
  i = u(n(4817)),
  a = u(n(685931)),
  s = u(n(319065)),
  o = u(n(455952)),
  l = u(n(53045));

function u(e) {
  return e && e.__esModule ? e : {
default: e
  };
}
t.hover = s.default, t.handleHover = s.default, t.handleActive = o.default, t.loop = l.default;
var c = t.ReactCSS = function(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
n[s - 1] = arguments[s];
  var o = (0, r.default)(n),
l = (0, i.default)(e, o);
  return (0, a.default)(l);
};
t.default = c;