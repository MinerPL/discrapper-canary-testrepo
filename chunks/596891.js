n(47120);
var r = n(735250),
  i = n(470079),
  a = n(442837),
  s = n(481060),
  o = n(92114),
  l = n(194359),
  u = n(367907),
  c = n(592125),
  d = n(699516),
  _ = n(9156),
  E = n(594174),
  f = n(621600),
  h = n(82554),
  p = n(981631),
  m = n(689938),
  I = n(797319);
t.Z = e => {
  let {
userId: t,
reportId: n,
reportName: T,
showBlock: g,
showMute: S
  } = e, A = c.Z.getDMFromUserId(t), N = (0, a.e7)([_.ZP], () => null == A ? null : _.ZP.isChannelMuted(null, A)), [v, O] = i.useState(null != N && N), [R, C] = i.useState(!1), y = (0, a.e7)([E.default], () => E.default.getUser(t), [t]), D = (0, a.e7)([d.Z], () => d.Z.getRelationshipType(t), [t]) === p.OGo.BLOCKED;
  i.useEffect(() => {
C(D);
  }, [D]);
  let L = i.useCallback(() => {
  C(!0), u.ZP.trackWithMetadata(p.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
    other_user_id: t,
    report_id: n
  }), l.Z.addRelationship({
    userId: t,
    context: {
      location: 'ReportMenuBlockUser-iOS'
    },
    type: p.OGo.BLOCKED
  });
}, [
  t,
  n
]),
b = i.useCallback(() => {
  null != A && (O(!0), u.ZP.trackWithMetadata(p.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
    other_user_id: t,
    report_id: n
  }), o.Z.updateChannelOverrideSettings(null, A, {
    muted: !0
  }, f.ZB.Muted));
}, [
  A,
  t,
  n
]),
M = T === h.b.USER,
P = M ? m.Z.Messages.REPORTS_MUTE_USER_ELEMENT_DESCRIPTION : m.Z.Messages.MOBILE_REPORTS_MUTE_ELEMENT_DESCRIPTION,
U = M ? m.Z.Messages.REPORTS_BLOCK_USER_ELEMENT_DESCRIPTION : m.Z.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_DESCRIPTION,
w = M ? m.Z.Messages.REPORTS_BLOCK_AND_MUTE_USER_ELEMENT_DESCRIPTION : m.Z.Messages.MOBILE_REPORTS_BLOCK_AND_MUTE_ELEMENT_DESCRIPTION,
x = S || g;
  return null != y && x ? (0, r.jsxs)('div', {
className: I.container,
children: [
  (0, r.jsx)(s.Text, {
    className: I.description,
    variant: 'text-sm/normal',
    children: g && S ? w : g ? U : P
  }),
  (0, r.jsxs)('div', {
    className: I.userContainer,
    children: [
      (0, r.jsxs)('div', {
        className: I.userInfo,
        children: [
          (0, r.jsx)(s.Avatar, {
            size: s.AvatarSizes.SIZE_32,
            src: y.getAvatarURL(void 0, 32),
            className: I.avatar,
            'aria-label': y.username
          }),
          (0, r.jsx)(s.Text, {
            className: I.userName,
            variant: 'text-sm/semibold',
            children: y.username
          }),
          !y.isPomelo() && (0, r.jsxs)(s.Text, {
            variant: 'text-sm/normal',
            children: [
              '#',
              y.discriminator
            ]
          })
        ]
      }),
      (0, r.jsxs)('div', {
        className: I.actionButtonsContainer,
        children: [
          S && (0, r.jsx)(s.Button, {
            onClick: b,
            disabled: v,
            size: s.Button.Sizes.SMALL,
            color: s.Button.Colors.PRIMARY,
            children: v ? m.Z.Messages.MUTED : m.Z.Messages.MUTE
          }),
          g && (0, r.jsx)(s.Button, {
            onClick: L,
            disabled: R,
            size: s.Button.Sizes.SMALL,
            color: s.Button.Colors.RED,
            children: R ? m.Z.Messages.BLOCKED : m.Z.Messages.BLOCK
          })
        ]
      })
    ]
  })
]
  }) : null;
};