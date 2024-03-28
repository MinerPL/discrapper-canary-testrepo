"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  r = n("442837"),
  o = n("104494"),
  a = n("639119"),
  c = n("655525"),
  u = n("52188"),
  d = n("248042"),
  h = n("924540"),
  m = n("351402"),
  p = n("170671"),
  f = n("556973");

function S(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: S
    } = e,
    b = (0, a.usePremiumTrialOffer)(),
    g = (0, o.usePremiumDiscountOffer)(),
    v = (0, d.useIsEligibleForBogoPromotion)(),
    x = (0, r.useStateFromStores)([m.default], () => m.default.isLocalizedPromoEnabled) && null == b && null == n;
  return t = v ? (0, i.jsx)(c.default, {}) : null != g ? (0, i.jsx)(h.PremiumDiscountOfferTabBadge, {
    isTabSelected: S,
    userDiscount: g,
    includesAmountOff: !1
  }) : null != b ? (0, i.jsx)(h.PremiumTrialOfferTabBadge, {
    isTabSelected: S,
    trialOffer: b
  }) : null != n ? n : x ? (0, i.jsx)(u.LocalizedPricingBadgeIcon, {
    entryPoint: u.BadgeEntryPoint.SettingsMenu
  }) : (0, i.jsx)(p.default, {
    isSelected: S
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(f.premiumLabel, {
        [f.selected]: (S || x) && !v
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(f.background, {
        [f.auPromo]: x && !S,
        [f.auPromoSelected]: x && S,
        [f.selectedBackground]: !x && !v && S
      })
    })]
  })
}