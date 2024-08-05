n.d(t, {
  b: function() {
return u;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  E = n(232489);

function u(e) {
  let {
chunks: t,
columns: n,
className: a
  } = e, u = i.useMemo(() => ({
'--secure-frames-columns': n
  }), [n]);
  return null == t ? (0, r.jsx)('div', {
className: E.loading,
children: (0, r.jsx)(o.Spinner, {})
  }) : (0, r.jsx)('div', {
style: u,
className: s()(E.code, a),
children: t.map((e, t) => (0, r.jsx)('div', {
  className: s()(E.chunk, {
    [E.divider]: t > n - 1
  }),
  children: (0, r.jsx)(o.Text, {
    className: E.codeText,
    variant: 'code',
    color: 'text-normal',
    children: e
  })
}, ''.concat(e, '-').concat(t)))
  });
}