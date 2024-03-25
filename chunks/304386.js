"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("37983");
n("884691");
var s = n("414456"),
  l = n.n(s),
  r = n("446674"),
  o = n("154889"),
  a = n("917247"),
  c = n("801388"),
  u = n("770469"),
  d = n("641078"),
  h = n("773367"),
  m = n("160299"),
  p = n("324929"),
  f = n("189405");

function S(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: S
    } = e,
    b = (0, a.usePremiumTrialOffer)(),
    g = (0, o.usePremiumDiscountOffer)(),
    v = (0, d.useIsEligibleForBogoPromotion)(),
    x = (0, r.useStateFromStores)([m.default], () => m.default.isLocalizedPromoEnabled),
    N = x && null == b && null == n;
  return t = v ? (0, i.jsx)(c.default, {}) : null != g ? (0, i.jsx)(h.PremiumDiscountOfferTabBadge, {
    isTabSelected: S,
    userDiscount: g,
    includesAmountOff: !1
  }) : null != b ? (0, i.jsx)(h.PremiumTrialOfferTabBadge, {
    isTabSelected: S,
    trialOffer: b
  }) : null != n ? n : N ? (0, i.jsx)(u.LocalizedPricingBadgeIcon, {
    entryPoint: u.BadgeEntryPoint.SettingsMenu
  }) : (0, i.jsx)(p.default, {
    isSelected: S
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l(f.premiumLabel, {
        [f.selected]: (S || N) && !v
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l(f.background, {
        [f.auPromo]: N && !S,
        [f.auPromoSelected]: N && S,
        [f.selectedBackground]: !N && !v && S
      })
    })]
  })
}