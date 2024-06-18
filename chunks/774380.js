"use strict";
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(98278),
  r = t(823188),
  o = t(594174),
  c = t(74538),
  d = t(474936),
  u = t(689938),
  E = t(581463);
let _ = e => {
  let {
    onOpenPremiumClick: s
  } = e, t = (0, n.jsx)(l.Button, {
    className: E.tier0Button,
    color: l.Button.Colors.BRAND_INVERTED,
    onClick: () => {
      (0, a.z)(), null != s && s()
    },
    children: u.Z.Messages.LEARN_MORE
  });
  return (0, n.jsxs)("div", {
    className: E.tier0Container,
    children: [(0, n.jsx)(l.Heading, {
      className: E.tier0Heading,
      variant: "heading-xxl/extrabold",
      children: u.Z.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_SECONDARY
    }), (0, n.jsx)(r.wp, {
      className: E.tier0Card,
      ctaButton: t,
      featureSet: r.uZ.BOOSTING,
      showWumpus: !0,
      showYearlyPrice: !0
    })]
  })
};
s.Z = e => {
  let {
    onOpenPremiumClick: s
  } = e, t = (0, i.e7)([o.default], () => o.default.getCurrentUser());
  return c.ZP.isPremium(t, d.p9.TIER_2) ? null : (0, n.jsx)(_, {
    onOpenPremiumClick: s
  })
}