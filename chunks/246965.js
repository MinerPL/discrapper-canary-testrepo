"use strict";
n.r(t), n("411104");
var s = n("735250");
n("470079");
var a = n("774078"),
  l = n("100527"),
  i = n("906732"),
  r = n("963249"),
  o = n("466111"),
  u = n("644766"),
  d = n("639119"),
  c = n("474936"),
  f = n("981631"),
  E = n("689938"),
  _ = n("502786");
t.default = function(e) {
  var t;
  let {
    dismissCurrentNotice: n,
    subscriptionTier: T
  } = e, {
    analyticsLocations: m
  } = (0, i.default)(function(e) {
    switch (e) {
      case c.PremiumSubscriptionSKUs.TIER_0:
        return l.default.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
      case c.PremiumSubscriptionSKUs.TIER_2:
        return l.default.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
      default:
        throw Error("Unsupported subscription tier: ".concat(e))
    }
  }(T)), I = (0, d.usePremiumTrialOffer)(), p = (0, a.default)(null != I && null != I.expires_at ? Date.parse(I.expires_at) : 0);
  return null == I || (null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== T || null == I.expires_at || Object.values(p).every(e => 0 === e) ? null : (0, s.jsxs)(u.default, {
    color: function(e) {
      switch (e) {
        case c.PremiumSubscriptionSKUs.TIER_0:
          return u.NoticeColors.PREMIUM_TIER_0;
        case c.PremiumSubscriptionSKUs.TIER_2:
          return u.NoticeColors.PREMIUM_TIER_2;
        default:
          throw Error("Unsupported subscription tier: ".concat(e))
      }
    }(T),
    children: [(0, s.jsx)(u.NoticeCloseButton, {
      onClick: n
    }), (0, s.jsx)(o.default, {
      className: _.premiumIcon
    }), function(e, t) {
      switch (e) {
        case c.PremiumSubscriptionSKUs.TIER_0:
          return t.days > 0 ? E.default.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_DAYS_VARIANT.format({
            days: t.days
          }) : t.hours > 0 ? E.default.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_HOURS_VARIANT.format({
            hours: t.hours
          }) : E.default.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_MINUTES_VARIANT.format({
            minutes: Math.max(t.minutes, 1)
          });
        case c.PremiumSubscriptionSKUs.TIER_2:
          return t.days > 0 ? E.default.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_DAYS_VARIANT.format({
            days: t.days
          }) : t.hours > 0 ? E.default.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_HOURS_VARIANT.format({
            hours: t.hours
          }) : E.default.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_MINUTES_VARIANT.format({
            minutes: Math.max(t.minutes, 1)
          });
        default:
          throw Error("Unsupported subscription tier: ".concat(e))
      }
    }(T, p), (0, s.jsx)(u.NoticeButton, {
      onClick: () => {
        (0, r.default)({
          trialId: I.trial_id,
          subscriptionTier: T,
          analyticsLocations: m,
          analyticsObject: {
            page: f.AnalyticsPages.IN_APP,
            section: f.AnalyticsSections.NOTIFICATION_BAR,
            object: f.AnalyticsObjects.BUTTON_CTA
          }
        })
      },
      children: function(e) {
        switch (e) {
          case c.PremiumSubscriptionSKUs.TIER_0:
            return E.default.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_CTA_VARIANT;
          case c.PremiumSubscriptionSKUs.TIER_2:
            return E.default.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_CTA_VARIANT;
          default:
            throw Error("Unsupported subscription tier: ".concat(e))
        }
      }(T)
    })]
  })
}