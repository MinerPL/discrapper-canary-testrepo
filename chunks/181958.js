var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(432344);
let l = e => {
  let {
data: t,
disabled: n
  } = e, {
content: i,
className: l,
onClick: u,
disabled: c
  } = t;
  return (0, r.jsx)(o.FocusRing, {
children: (0, r.jsx)('button', {
  type: 'button',
  className: a()(s.item, l),
  onClick: u,
  disabled: n || c,
  children: i
})
  });
};
t.Z = e => {
  let {
buttons: t,
disabled: n,
className: i
  } = e;
  return (0, r.jsx)('div', {
role: 'group',
className: a()(s.group, i),
children: t.map((e, t) => (0, r.jsx)(l, {
  data: e,
  disabled: n
}, t))
  });
};