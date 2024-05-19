"use strict";
a.r(t), a.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return C
  },
  PremiumTrialOfferTabBadge: function() {
    return T
  }
});
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("774078"),
  c = a("855693"),
  d = a("55935"),
  u = a("74538"),
  f = a("639119"),
  m = a("474936"),
  h = a("689938"),
  p = a("18330");

function E(e) {
  let {
    isTabSelected: t,
    expiresAt: a,
    trialDuration: s
  } = e, u = r.useMemo(() => Date.parse(a), [a]), f = (0, o.default)(u, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, n.jsx)(l.Tooltip, {
    text: (0, d.unitsAsStrings)(f, {
      days: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: h.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, n.jsxs)("div", {
      ...e,
      className: i()(p.premiumTrialBadge, p.premiumTrialAcknowledgedBadge, {
        [p.premiumTrialBadgeSelected]: t
      }),
      children: [(0, n.jsx)(c.default, {
        className: p.premiumTrialBadgeIcon
      }), s]
    })
  })
}

function T(e) {
  var t;
  let {
    isTabSelected: a,
    trialOffer: r
  } = e, s = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, i = (0, u.formatTrialOfferIntervalDuration)({
    intervalType: null == s ? void 0 : s.interval,
    intervalCount: null == s ? void 0 : s.interval_count
  });
  return (0, n.jsx)(x, {
    isTabSelected: a,
    badgeCopy: i,
    offerExpiresAt: r.expires_at,
    className: (null == s ? void 0 : s.sku_id) === m.PremiumSubscriptionSKUs.TIER_2 ? p.premiumTrialTier2UnacknowledgedBadge : p.premiumTrialTier0UnacknowledgedBadge
  })
}

function C(e) {
  let {
    isTabSelected: t,
    userDiscount: a,
    includesAmountOff: r
  } = e, s = h.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: a.discount.amount
  });
  return (0, n.jsx)(x, {
    isTabSelected: t,
    badgeCopy: r ? s : h.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: a.expires_at,
    className: p.premiumDiscountUnacknowledgedBadge
  })
}

function x(e) {
  let {
    isTabSelected: t,
    badgeCopy: a,
    offerExpiresAt: r,
    className: s
  } = e;
  return null != r ? (0, n.jsx)(E, {
    expiresAt: r,
    isTabSelected: t,
    trialDuration: a
  }) : (0, n.jsx)("div", {
    className: i()(p.premiumTrialBadge, s),
    children: a
  })
}