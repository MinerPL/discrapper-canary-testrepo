var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  l = n(51144),
  o = n(555956);
t.Z = e => {
  let {
user: t,
fill: n
  } = e, a = '\xA0(@'.concat(l.ZP.getUserTag(t, {
decoration: 'never'
  }), ')');
  return (0, s.jsxs)(i.Text, {
className: r()([
  o.text,
  {
    [o.fill]: n
  }
]),
variant: 'text-md/medium',
children: [
  (0, s.jsx)('span', {
    className: o.username,
    children: l.ZP.getName(t)
  }),
  (0, s.jsx)('span', {
    className: o.discriminator,
    children: a
  })
]
  });
};