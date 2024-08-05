var n = s(735250);
s(470079);
var a = s(120356),
  i = s.n(a),
  r = s(399606),
  o = s(481060),
  l = s(565138),
  c = s(623624),
  d = s(678558),
  _ = s(430824),
  E = s(709586),
  u = s(267642),
  T = s(981631),
  I = s(689938),
  S = s(92965);
t.Z = function(e) {
  let {
className: t,
guildId: s,
boostingVariant: a
  } = e, N = (0, r.e7)([_.Z], () => _.Z.getGuild(s), [s]);
  return null == N ? (0, n.jsx)('div', {
className: i()(t, S.guildContainer),
children: (0, n.jsx)('div', {
  className: S.guildInfoContainer,
  children: (0, n.jsx)(o.Text, {
    variant: 'text-lg/bold',
    children: I.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
  })
})
  }) : (0, n.jsxs)('div', {
className: i()(t, S.guildContainer),
children: [
  (0, n.jsx)(l.Z, {
    className: S.__invalid_guildIcon,
    guild: N,
    size: l.Z.Sizes.LARGER
  }),
  (0, n.jsxs)('div', {
    className: S.guildInfoContainer,
    children: [
      (0, n.jsx)(o.Text, {
        variant: 'text-lg/bold',
        children: N.name
      }),
      (0, n.jsxs)('div', {
        className: S.guildBoostStatsContainer,
        children: [
          (0, n.jsx)(E.Z, {
            className: S.guildBoostBadge,
            width: 16,
            height: 16
          }),
          (0, n.jsx)(o.Text, {
            variant: 'text-sm/bold',
            color: 'text-muted',
            children: I.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
              subscriptions: N.premiumSubscriberCount
            })
          }),
          (0, n.jsx)('div', {
            className: S.separator
          }),
          (0, n.jsx)(o.Text, {
            variant: 'text-sm/bold',
            color: 'text-muted',
            children: (0, u.nW)(N.premiumTier, {
              useLevels: !1
            })
          })
        ]
      })
    ]
  }),
  a ? (0, n.jsx)(d.Z, {
    guild: N,
    analyticsLocation: {
      page: T.ZY5.GUILD_BOOSTING_USER_SETTINGS,
      section: T.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
      object: T.qAy.BUTTON_CTA,
      objectType: T.Qqv.BUY
    },
    pauseAnimation: !0,
    size: o.Button.Sizes.MEDIUM,
    color: o.Button.Colors.PRIMARY,
    buttonText: I.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER
  }) : (0, n.jsx)(o.Button, {
    color: o.Button.Colors.PRIMARY,
    onClick: () => {
      (0, c.f)({
        guildId: N.id,
        location: {
          section: T.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
        }
      });
    },
    size: o.Button.Sizes.MEDIUM,
    children: I.Z.Messages.NAVIGATE_TO_GUILD
  })
]
  });
};