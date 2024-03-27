"use strict";
n.r(t), n.d(t, {
  PremiumTrialOfferTabBadge: function() {
    return T
  },
  PremiumDiscountOfferTabBadge: function() {
    return I
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("414456"),
  a = n.n(s),
  l = n("77078"),
  o = n("174727"),
  u = n("93393"),
  c = n("888400"),
  d = n("719923"),
  f = n("917247"),
  p = n("646718"),
  _ = n("782340"),
  E = n("637356");

function m(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: s
  } = e, d = i.useMemo(() => Date.parse(n), [n]), f = (0, o.default)(d, 6e4);
  return Object.values(f).every(e => 0 === e) ? null : (0, r.jsx)(l.Tooltip, {
    text: (0, c.unitsAsStrings)(f, {
      days: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_DAYS,
      hours: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_HOURS,
      minutes: _.default.Messages.PREMIUM_TRIAL_REMAINING_AVAILABILITY_MINUTES
    }),
    children: e => (0, r.jsxs)("div", {
      ...e,
      className: a(E.premiumTrialBadge, E.premiumTrialAcknowledgedBadge, {
        [E.premiumTrialBadgeSelected]: t
      }),
      children: [(0, r.jsx)(u.default, {
        className: E.premiumTrialBadgeIcon
      }), s]
    })
  })
}

function T(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: i
  } = e, s = null === (t = (0, f.usePremiumTrialOffer)()) || void 0 === t ? void 0 : t.subscription_trial, a = (0, d.formatTrialOfferIntervalDuration)({
    intervalType: null == s ? void 0 : s.interval,
    intervalCount: null == s ? void 0 : s.interval_count
  });
  return (0, r.jsx)(h, {
    isTabSelected: n,
    badgeCopy: a,
    offerExpiresAt: i.expires_at,
    className: (null == s ? void 0 : s.sku_id) === p.PremiumSubscriptionSKUs.TIER_2 ? E.premiumTrialTier2UnacknowledgedBadge : E.premiumTrialTier0UnacknowledgedBadge
  })
}

function I(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: i
  } = e, s = _.default.Messages.PREMIUM_DISCOUNT_AMOUNT_OFF_BADGE.format({
    percent: n.discount.amount
  });
  return (0, r.jsx)(h, {
    isTabSelected: t,
    badgeCopy: i ? s : _.default.Messages.PREMIUM_DISCOUNT_BADGE,
    offerExpiresAt: n.expires_at,
    className: E.premiumDiscountUnacknowledgedBadge
  })
}

function h(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: i,
    className: s
  } = e;
  return null != i ? (0, r.jsx)(m, {
    expiresAt: i,
    isTabSelected: t,
    trialDuration: n
  }) : (0, r.jsx)("div", {
    className: a(E.premiumTrialBadge, s),
    children: n
  })
}