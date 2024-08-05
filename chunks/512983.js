n.d(t, {
  R: function() {
return i;
  },
  v: function() {
return c;
  }
});
var r, i, a = n(735250);
n(470079);
var s = n(120356),
  o = n.n(s),
  l = n(337033),
  u = n(399943);

function c(e) {
  let t, {
tag: n = 'h5',
children: r,
className: i,
faded: s,
disabled: c,
required: d = !1,
error: _,
errorId: E,
...f
  } = e;
  switch (n) {
case 'legend':
case 'label':
  t = n;
  break;
default:
  t = l.H;
  }
  return (0, a.jsxs)(t, {
className: o()(u[n], 'h5' !== n ? u.defaultColor : null, i, {
  [u['defaultMargin'.concat(n)]]: null == i,
  [u.faded]: s,
  [u.disabled]: c,
  [u.error]: null != _
}),
...f,
children: [
  r,
  d && null == _ ? (0, a.jsx)('span', {
    className: u.required,
    children: '*'
  }) : null,
  null != _ ? (0, a.jsxs)('span', {
    id: E,
    className: u.errorMessage,
    children: [
      null != r ? (0, a.jsx)('span', {
        className: u.errorSeparator,
        children: '-'
      }) : null,
      _
    ]
  }) : null
]
  });
}
(r = i || (i = {})).H1 = 'h1', r.H2 = 'h2', r.H3 = 'h3', r.H4 = 'h4', r.H5 = 'h5', r.LABEL = 'label', r.LEGEND = 'legend';