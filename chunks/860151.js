var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(585500),
  o = n(644646),
  c = n(268167);
t.Z = function(e) {
  let {
className: t,
autoplay: n,
quest: s,
questContent: u,
taskDetails: d,
location: _
  } = e, E = (0, l.D)({
quest: s,
taskDetails: d,
location: _,
questContent: u
  });
  return (0, i.jsxs)('div', {
className: a()(c.wrapper, t),
style: {
  color: s.config.colors.primary
},
children: [
  (0, i.jsx)(o.Z, {
    autoplay: n,
    className: c.rewardTile,
    quest: s,
    questContent: u,
    location: _
  }),
  (0, i.jsx)(r.Text, {
    className: c.instructions,
    variant: 'text-sm/normal',
    color: 'text-normal',
    children: E
  })
]
  });
};