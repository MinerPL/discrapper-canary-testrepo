var s = n(735250);
n(470079);
var a = n(399606),
  r = n(481060),
  i = n(594174),
  l = n(51144),
  o = n(546791),
  c = n(198952),
  d = n(643491);
t.Z = e => {
  let {
userId: t,
timestamp: n,
timestampFormatter: _
  } = e, u = (0, a.e7)([i.default], () => i.default.getUser(t));
  return void 0 === u ? null : (0, s.jsxs)('div', {
className: d.container,
children: [
  (0, s.jsx)(c.r, {
    user: u,
    avatarSize: r.AvatarSizes.SIZE_40
  }),
  (0, s.jsx)('div', {
    children: (0, s.jsxs)('div', {
      className: d.descriptors,
      children: [
        (0, s.jsx)(r.Text, {
          variant: 'text-md/semibold',
          children: l.ZP.getName(u)
        }),
        (0, s.jsx)(r.Text, {
          variant: 'text-xs/medium',
          color: 'text-muted',
          children: (0, o.LI)(new Date(n).getTime(), _)
        })
      ]
    })
  })
]
  });
};