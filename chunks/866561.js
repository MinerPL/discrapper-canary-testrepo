"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("77078"),
  i = s("626301"),
  r = s("400307"),
  o = s("697218"),
  d = s("719923"),
  u = s("646718"),
  c = s("782340"),
  E = s("703278");
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
var I = e => {
  let {
    onOpenPremiumClick: t
  } = e, s = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser());
  return d.default.isPremium(s, u.PremiumTypes.TIER_2) ? null : (0, a.jsx)(_, {
    onOpenPremiumClick: t
  })
}