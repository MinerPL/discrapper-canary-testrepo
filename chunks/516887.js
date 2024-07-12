var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(481060),
  o = n(826298),
  c = n(911537);
t.Z = a.memo(function(e) {
  var t;
  let {
className: n,
channel: a,
section: l
  } = e, d = null != l ? (0, o.ky)(l) : null;
  return (0, i.jsx)('div', {
className: s()(n, c.wrapper),
children: (0, i.jsx)('div', {
  className: c.icon,
  children: null != d ? (0, i.jsx)(r.Tooltip, {
    text: null !== (t = null == l ? void 0 : l.name) && void 0 !== t ? t : '',
    position: 'top',
    children: e => (0, i.jsx)(d, {
      ...e,
      channel: a,
      section: l,
      width: 24,
      height: 24
    })
  }) : null
})
  });
});