n.d(t, {
  b: function() {
return c;
  }
});
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(481060),
  o = n(232489);

function c(e) {
  let {
chunks: t,
columns: n,
className: r
  } = e, c = l.useMemo(() => ({
'--secure-frames-columns': n
  }), [n]);
  return null == t ? (0, i.jsx)('div', {
className: o.loading,
children: (0, i.jsx)(s.Spinner, {})
  }) : (0, i.jsx)('div', {
style: c,
className: a()(o.code, r),
children: t.map((e, t) => (0, i.jsx)('div', {
  className: a()(o.chunk, {
    [o.divider]: t > n - 1
  }),
  children: (0, i.jsx)(s.Text, {
    className: o.codeText,
    variant: 'code',
    color: 'text-normal',
    children: e
  })
}, ''.concat(e, '-').concat(t)))
  });
}