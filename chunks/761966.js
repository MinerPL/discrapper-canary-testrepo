n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(549631),
  l = n(270797);

function u(e) {
  let {
children: t,
className: n,
size: i = s.Button.Sizes.MEDIUM,
onlyShineOnHover: u = !1,
...c
  } = e;
  return (0, r.jsx)(s.ShinyButton, {
...c,
color: s.Button.Colors.CUSTOM,
size: i,
className: a()(l.button, n),
onlyShineOnHover: u,
children: (0, r.jsxs)('div', {
  className: l.buttonContents,
  children: [
    (0, r.jsx)(o.Z, {
      className: l.icon
    }),
    t
  ]
})
  });
}