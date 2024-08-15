var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(468194),
  l = n(399606),
  o = n(481060),
  c = n(372769),
  d = n(914788),
  _ = n(981631),
  u = n(689938),
  E = n(335455);
let T = [
  18,
  18,
  16,
  16,
  14,
  12,
  10
];
t.Z = e => {
  let {
guildId: t
  } = e, n = (0, l.e7)([d.Z], () => d.Z.getGuild(t));
  if (void 0 === n)
return null;
  let a = n.hasFeature(_.oNc.VERIFIED) || n.hasFeature(_.oNc.PARTNERED),
I = n.toString(),
R = n.getIconURL(40, !0),
C = null,
g = T[T.length - 1];
  if (null == n.icon && null != I) {
var N;
g = null !== (N = T[(C = (0, i.Zg)(I)).length - 1]) && void 0 !== N ? N : T[T.length - 1];
  }
  return (0, s.jsxs)('div', {
className: E.container,
children: [
  (0, s.jsxs)('div', {
    style: {
      fontSize: g
    },
    children: [
      null != C ? (0, s.jsx)('div', {
        className: r()(E.childWrapper, E.acronym),
        'aria-hidden': !0,
        children: C
      }) : null,
      null != R ? (0, s.jsx)(o.Avatar, {
        src: n.getIconURL(40, !0),
        size: o.AvatarSizes.SIZE_40,
        'aria-hidden': !0
      }) : null
    ]
  }),
  (0, s.jsxs)('div', {
    className: E.descriptors,
    children: [
      (0, s.jsxs)('div', {
        className: E.header,
        children: [
          a ? (0, s.jsx)(c.Z, {
            guild: n,
            tooltipPosition: 'bottom',
            tooltipColor: o.Tooltip.Colors.PRIMARY,
            className: E.guildBadge
          }) : null,
          (0, s.jsx)(o.Text, {
            variant: 'text-md/semibold',
            children: n.toString()
          })
        ]
      }),
      void 0 !== n.approximateMemberCount ? (0, s.jsx)(o.Text, {
        variant: 'text-xs/medium',
        color: 'text-muted',
        children: u.Z.Messages.FAMILY_CENTER_ACTIVITY_GUILD_ROW_MEMBER_COUNT.format({
          members: n.approximateMemberCount
        })
      }) : null
    ]
  })
]
  });
};