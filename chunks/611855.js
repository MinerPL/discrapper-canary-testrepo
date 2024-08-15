var s = n(735250);
n(470079);
var o = n(120356),
  i = n.n(o),
  a = n(481060),
  r = n(689938),
  l = n(608561);
t.Z = function(e) {
  let {
className: t,
color: n = 'header-primary',
textOpacity: o = 0.9,
bgOpacity: u = 0.4
  } = e;
  return (0, s.jsxs)(a.Text, {
variant: 'text-xxs/medium',
color: n,
className: i()(l.promotedTag, t),
children: [
  (0, s.jsx)('span', {
    className: l.promotedTagBackground,
    style: {
      opacity: u
    }
  }),
  (0, s.jsx)('span', {
    style: {
      opacity: o
    },
    children: r.Z.Messages.QUESTS_PROMOTED
  })
]
  });
};