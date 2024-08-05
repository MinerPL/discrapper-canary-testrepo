n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(481060),
  l = n(30268);

function o(e) {
  let {
padded: t = !0,
inset: n = !1,
active: a = !1,
className: o,
children: c,
onClick: d,
...u
  } = e;
  return null != d ? (0, i.jsx)(r.Clickable, {
onClick: d,
tabIndex: null != d ? 0 : -1,
className: s()(o, {
  [l.outer]: !n,
  [l.inset]: n,
  [l.padded]: t,
  [l.active]: a,
  [l.interactive]: null != d
}),
...u,
children: c
  }) : (0, i.jsx)('div', {
className: s()(o, {
  [l.outer]: !n,
  [l.inset]: n,
  [l.padded]: t,
  [l.active]: a
}),
...u,
children: c
  });
}