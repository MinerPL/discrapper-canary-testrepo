n.d(t, {
  Z: function() {
return c;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(481060),
  l = n(603368),
  u = n(640275);

function c(e) {
  let {
themeColor: t,
color: n,
className: a,
...c
  } = e, d = (0, s.useToken)(s.tokens.colors.BG_SURFACE_OVERLAY), _ = i.useMemo(() => (0, l.j1)(t, d.hex()), [t]);
  return (0, r.jsx)(s.Button, {
...c,
style: _,
className: o()(a, {
  [u.customButton]: null != _
}),
color: null != _ ? s.Button.Colors.CUSTOM : n
  });
}