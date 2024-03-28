"use strict";
n.r(t), n.d(t, {
  PremiumDiscountOfferTabBadge: function() {
    return m
  },
  PremiumTrialOfferTabBadge: function() {
    return T
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("803997"),
  a = n.n(s),
  l = n("481060"),
  o = n("774078"),
  u = n("855693"),
  c = n("55935"),
  d = n("74538"),
  f = n("639119"),
  p = n("474936"),
  _ = n("689938"),
  E = n("893943");

function I(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: s
  } = e, d = r.useMemo(() => Date.parse(n), [n]), f = (0, o.default)(d, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, i.jsx)(l.Tooltip, {
    text: (0, c.unitsAsStrings)(f, {
      days: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, i.jsxs)("div", {
      ...e,
      className: a()(E.premiumTrialBadge, E.premiumTrialAcknowledgedBadge, {
        [E.premiumTrialBadgeSelected]: t
      }),
      children: [(0, i.jsx)(u.default, {
        className: E.premiumTrialBadgeIcon
      }), s]
    })
  })
}

function T(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: r
  } = e, s = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, a = (0, d.formatTrialOfferIntervalDuration)({
    intervalType: null == s ? void 0 : s.interval,
    intervalCount: null == s ? void 0 : s.interval_count
  });
  return (0, i.jsx)(S, {
    isTabSelected: n,
    badgeCopy: a,
    offerExpiresAt: r.expires_at,
    className: (null == s ? void 0 : s.sku_id) === p.PremiumSubscriptionSKUs.TIER_2 ? E.premiumTrialTier2UnacknowledgedBadge : E.premiumTrialTier0UnacknowledgedBadge
  })
}

function m(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: r
  } = e, s = _.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: n.discount.amount
  });
  return (0, i.jsx)(S, {
    isTabSelected: t,
    badgeCopy: r ? s : _.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: n.expires_at,
    className: E.premiumDiscountUnacknowledgedBadge
  })
}

function S(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: r,
    className: s
  } = e;
  return null != r ? (0, i.jsx)(I, {
    expiresAt: r,
    isTabSelected: t,
    trialDuration: n
  }) : (0, i.jsx)("div", {
    className: a()(E.premiumTrialBadge, s),
    children: n
  })
}