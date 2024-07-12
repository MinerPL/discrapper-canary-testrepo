r.d(t, {
  Z: function() {
return m;
  }
}), r(47120);
var a = r(735250),
  n = r(470079),
  i = r(120356),
  o = r.n(i),
  l = r(442837),
  c = r(481060),
  s = r(98357),
  d = r(432877),
  u = r(788548),
  h = r(979756);

function m(e) {
  let {
devSettingsCategory: t
  } = e, r = (0, l.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], l.pF), i = n.useMemo(() => r.map(e => {
let [t, r, {
  label: n
}] = e;
return (0, a.jsx)(c.FormSwitch, {
  value: r,
  onChange: e => (0, s.Z)(t, e),
  hideBorder: !0,
  className: u.switch,
  children: n
}, t);
  }), [r]);
  return (0, a.jsx)('div', {
className: o()(h.panel, u.panel),
children: i
  });
}