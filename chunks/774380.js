"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("98278"),
  r = s("823188"),
  o = s("594174"),
  d = s("74538"),
  u = s("474936"),
  c = s("689938"),
  E = s("137762");
let _ = e => {
  let {
    onOpenPremiumClick: t
  } = e, s = (0, a.jsx)(n.Button, {
    className: E.tier0Button,
    color: n.Button.Colors.BRAND,
    look: n.Button.Looks.INVERTED,
    onClick: () => {
      (0, i.navigateToPremiumMarketingPage)(), null != t && t()
    },
    children: c.default.Messages.LEARN_MORE
  });
  return (0, a.jsxs)("div", {
    className: E.tier0Container,
    children: [(0, a.jsx)(n.Heading, {
      className: E.tier0Heading,
      variant: "heading-xxl/extrabold",
      children: c.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_SECONDARY
    }), (0, a.jsx)(r.Tier2Card, {
      className: E.tier0Card,
      ctaButton: s,
      featureSet: r.Tier2FeatureSet.BOOSTING,
      showWumpus: !0,
      showYearlyPrice: !0
    })]
  })
};
t.default = e => {
  let {
    onOpenPremiumClick: t
  } = e, s = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser());
  return d.default.isPremium(s, u.PremiumTypes.TIER_2) ? null : (0, a.jsx)(_, {
    onOpenPremiumClick: t
  })
}