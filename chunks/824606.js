Object.defineProperty(t, '__esModule', {
  value: !0
}), t.Swatch = void 0;
var r = Object.assign || function(e) {
for (var t = 1; t < arguments.length; t++) {
  var n = arguments[t];
  for (var r in n)
    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
}
return e;
  },
  i = l(n(470079)),
  a = l(n(844303)),
  o = n(207545),
  s = l(n(263081));

function l(e) {
  return e && e.__esModule ? e : {
default: e
  };
}
var u = t.Swatch = function(e) {
  var t = e.color,
n = e.style,
o = e.onClick,
l = void 0 === o ? function() {} : o,
u = e.onHover,
c = e.title,
d = void 0 === c ? t : c,
_ = e.children,
E = e.focus,
f = e.focusStyle,
h = 'transparent' === t,
p = (0, a.default)({
  default: {
    swatch: r({
      background: t,
      height: '100%',
      width: '100%',
      cursor: 'pointer',
      position: 'relative',
      outline: 'none'
    }, n, E ? void 0 === f ? {} : f : {})
  }
}),
m = {};
  return u && (m.onMouseOver = function(e) {
return u(t, e);
  }), i.default.createElement('div', r({
style: p.swatch,
onClick: function(e) {
  return l(t, e);
},
title: d,
tabIndex: 0,
onKeyDown: function(e) {
  return 13 === e.keyCode && l(t, e);
}
  }, m), _, h && i.default.createElement(s.default, {
borderRadius: p.swatch.borderRadius,
boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
  }));
};
t.default = (0, o.handleFocus)(u);