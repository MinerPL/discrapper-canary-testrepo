var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(481060),
  o = n(826298),
  c = n(911537);
t.Z = a.memo(function(e) {
  var t;
  let {
className: n,
channel: a,
section: s
  } = e, u = null != s ? (0, o.ky)(s) : null;
  return (0, i.jsx)('div', {
className: l()(n, c.wrapper),
children: (0, i.jsx)('div', {
  className: c.icon,
  children: null != u ? (0, i.jsx)(r.Tooltip, {
    text: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : '',
    position: 'top',
    children: e => (0, i.jsx)(u, {
      ...e,
      channel: a,
      section: s,
      width: 24,
      height: 24
    })
  }) : null
})
  });
});