var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  o = n(689938),
  u = n(665567);
t.Z = function(e) {
  let {
className: t,
color: n = 'header-primary',
textOpacity: a = 0.9,
bgOpacity: _ = 0.4
  } = e;
  return (0, s.jsxs)(i.Text, {
variant: 'text-xxs/medium',
color: n,
className: r()(u.promotedTag, t),
children: [
  (0, s.jsx)('span', {
    className: u.promotedTagBackground,
    style: {
      opacity: _
    }
  }),
  (0, s.jsx)('span', {
    style: {
      opacity: a
    },
    children: o.Z.Messages.QUESTS_PROMOTED
  })
]
  });
};