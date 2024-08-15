var n = t(735250);
t(470079);
var a = t(120356),
  i = t.n(a),
  r = t(399606),
  o = t(481060),
  l = t(565138),
  c = t(623624),
  d = t(678558),
  _ = t(430824),
  E = t(709586),
  u = t(267642),
  I = t(981631),
  T = t(689938),
  S = t(660847);
s.Z = function(e) {
  let {
className: s,
guildId: t,
boostingVariant: a
  } = e, N = (0, r.e7)([_.Z], () => _.Z.getGuild(t), [t]);
  return null == N ? (0, n.jsx)('div', {
className: i()(s, S.guildContainer),
children: (0, n.jsx)('div', {
  className: S.guildInfoContainer,
  children: (0, n.jsx)(o.Text, {
    variant: 'text-lg/bold',
    children: T.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_APPLIED_GUILD_BOOST_UNKNOWN_GUILD
  })
})
  }) : (0, n.jsxs)('div', {
className: i()(s, S.guildContainer),
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
            children: T.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
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
      page: I.ZY5.GUILD_BOOSTING_USER_SETTINGS,
      section: I.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_BOOST_THIS_SERVER_CTA,
      object: I.qAy.BUTTON_CTA,
      objectType: I.Qqv.BUY
    },
    pauseAnimation: !0,
    size: o.Button.Sizes.MEDIUM,
    color: o.Button.Colors.PRIMARY,
    buttonText: T.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_THIS_SERVER
  }) : (0, n.jsx)(o.Button, {
    color: o.Button.Colors.PRIMARY,
    onClick: () => {
      (0, c.f)({
        guildId: N.id,
        location: {
          section: I.jXE.GUILD_BOOSTING_RECOMMENDED_SERVER_GO_TO_SERVER_CTA
        }
      });
    },
    size: o.Button.Sizes.MEDIUM,
    children: T.Z.Messages.NAVIGATE_TO_GUILD
  })
]
  });
};