var s = n(735250);
n(470079);
var a = n(442837),
  i = n(481060),
  r = n(98278),
  l = n(823188),
  o = n(594174),
  c = n(74538),
  d = n(474936),
  u = n(689938),
  _ = n(285343);
let I = e => {
  let {
onOpenPremiumClick: t
  } = e, n = (0, s.jsx)(i.Button, {
className: _.tier0Button,
color: i.Button.Colors.BRAND_INVERTED,
onClick: () => {
  (0, r.z)(), null != t && t();
},
children: u.Z.Messages.LEARN_MORE
  });
  return (0, s.jsxs)('div', {
className: _.tier0Container,
children: [
  (0, s.jsx)(i.Heading, {
    className: _.tier0Heading,
    variant: 'heading-xxl/extrabold',
    children: u.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_SECONDARY
  }),
  (0, s.jsx)(l.wp, {
    className: _.tier0Card,
    ctaButton: n,
    featureSet: l.uZ.BOOSTING,
    showWumpus: !0,
    showYearlyPrice: !0
  })
]
  });
};
t.Z = e => {
  let {
onOpenPremiumClick: t
  } = e, n = (0, a.e7)([o.default], () => o.default.getCurrentUser());
  return c.ZP.isPremium(n, d.p9.TIER_2) ? null : (0, s.jsx)(I, {
onOpenPremiumClick: t
  });
};