n.d(t, {
  l: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(766646),
  s = n(154921),
  l = n(689938),
  u = n(692877);

function c(e) {
  let {
children: t,
className: n,
disabled: i,
required: c = !1,
...d
  } = e;
  return (0, r.jsxs)(s.Z, {
tag: 'label',
color: s.Z.Colors.HEADER_SECONDARY,
className: a()(u.label, n, {
  [u.defaultMargin]: null == n,
  [u.disabled]: i
}),
...d,
children: [
  t,
  c && (0, r.jsxs)(r.Fragment, {
    children: [
      (0, r.jsx)('span', {
        className: u.required,
        'aria-hidden': !0,
        children: '*'
      }),
      (0, r.jsx)(o.n, {
        children: l.Z.Messages.REQUIRED
      })
    ]
  })
]
  });
}