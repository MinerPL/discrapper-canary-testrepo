t.d(n, {
  Z: function() {
return r;
  }
});
var i = t(735250);
t(470079);
var a = t(120356),
  s = t.n(a),
  l = t(481060),
  o = t(308218);

function r(e) {
  let {
bar: n,
children: t,
className: a,
inModal: r,
title: d
  } = e;
  return (0, i.jsxs)(l.Card, {
editable: !0,
className: s()(o.card, a, {
  [o.inModal]: r
}),
children: [
  (0, i.jsxs)('div', {
    className: s()(o.cardHeader, {
      [o.inModal]: r
    }),
    children: [
      (0, i.jsx)(l.Text, {
        variant: 'text-xs/semibold',
        className: o.title,
        children: d
      }),
      (0, i.jsx)('div', {
        children: n
      })
    ]
  }),
  r ? (0, i.jsx)(l.FormDivider, {}) : null,
  t
]
  });
}