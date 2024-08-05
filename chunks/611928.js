n.d(t, {
  ZP: function() {
return u;
  },
  aV: function() {
return d;
  },
  z6: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(338545),
  l = n(481060),
  o = n(453378);

function c(e) {
  let {
scrollPosition: t
  } = e;
  return (0, i.jsx)(r.animated.div, {
className: o.backdrop,
style: {
  opacity: null == t ? void 0 : t.to([
    0,
    100
  ], [
    0,
    1
  ])
}
  });
}

function d(e) {
  let {
onClick: t,
icon: n
  } = e;
  return null != t ? (0, i.jsx)(l.Clickable, {
className: s()(o.clickable, o.icon),
onClick: t,
children: (0, i.jsx)(n, {
  color: l.tokens.colors.HEADER_PRIMARY,
  size: 'md'
})
  }) : (0, i.jsx)(n, {
className: o.icon,
color: l.tokens.colors.HEADER_PRIMARY,
size: 'md'
  });
}

function u(e) {
  let {
className: t,
children: n
  } = e;
  return (0, i.jsx)('div', {
className: s()(o.headerBar, t),
children: n
  });
}