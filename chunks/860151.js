var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(481060),
  l = n(585500),
  o = n(644646),
  c = n(268167);
t.Z = function(e) {
  let {
className: t,
autoplay: n,
quest: a,
questContent: d,
taskDetails: u,
location: _
  } = e, E = (0, l.D)({
quest: a,
taskDetails: u,
location: _,
questContent: d
  });
  return (0, i.jsxs)('div', {
className: s()(c.wrapper, t),
style: {
  color: a.config.colors.primary
},
children: [
  (0, i.jsx)(o.Z, {
    autoplay: n,
    className: c.rewardTile,
    quest: a,
    questContent: d
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