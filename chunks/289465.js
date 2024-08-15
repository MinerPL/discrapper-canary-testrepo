t.d(n, {
  Z: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var a = t(120356),
  s = t.n(a),
  l = t(481060),
  r = t(574768);

function o(e) {
  let {
bar: n,
children: t,
className: a,
inModal: o,
title: d
  } = e;
  return (0, i.jsxs)(l.Card, {
editable: !0,
className: s()(r.card, a, {
  [r.inModal]: o
}),
children: [
  (0, i.jsxs)('div', {
    className: s()(r.cardHeader, {
      [r.inModal]: o
    }),
    children: [
      (0, i.jsx)(l.Text, {
        variant: 'text-xs/semibold',
        className: r.title,
        children: d
      }),
      (0, i.jsx)('div', {
        children: n
      })
    ]
  }),
  o ? (0, i.jsx)(l.FormDivider, {}) : null,
  t
]
  });
}