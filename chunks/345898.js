var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(481060),
  l = n(717809);
t.Z = e => {
  let {
renderTitle: t,
renderTagline: n,
renderActions: a,
renderMedia: o,
className: c,
isHorizontal: u = !1
  } = e;
  return (0, i.jsxs)('div', {
className: s()(l.tile, {
  [l.tileHorizontal]: u
}, c),
children: [
  (0, i.jsx)('div', {
    className: s()(l.media, {
      [l.mediaHorizontal]: u
    }),
    children: null == o ? void 0 : o()
  }),
  (0, i.jsxs)('div', {
    className: l.description,
    children: [
      (0, i.jsx)(r.H, {
        className: l.title,
        children: null == t ? void 0 : t()
      }),
      (0, i.jsx)('div', {
        className: l.tagline,
        children: null == n ? void 0 : n()
      }),
      (0, i.jsx)('div', {
        className: l.actions,
        children: null == a ? void 0 : a()
      })
    ]
  })
]
  });
};