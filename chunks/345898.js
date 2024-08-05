var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(299938);
t.Z = e => {
  let {
renderTitle: t,
renderTagline: n,
renderActions: s,
renderMedia: o,
className: c,
isHorizontal: u = !1
  } = e;
  return (0, i.jsxs)('div', {
className: a()(l.tile, {
  [l.tileHorizontal]: u
}, c),
children: [
  (0, i.jsx)('div', {
    className: a()(l.media, {
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
        children: null == s ? void 0 : s()
      })
    ]
  })
]
  });
};