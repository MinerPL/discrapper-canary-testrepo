"use strict";
n.r(t), n.d(t, {
  PremiumTier2TrialOfferNoticeExperiment: function() {
    return l
  },
  default: function() {
    return a
  }
});
var s = n("862205");
let l = (0, s.createExperiment)({
  kind: "user",
  id: "2023-10_premium_tier_2_trial_offer_expiring_notice",
  label: "Premium Tier 2 Trial Offer Expiring Notice",
  defaultConfig: {
    enabled: !1
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: !0
    }
  }]
});
var a = function() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return l.useExperiment({
    location: "experiment_hook"
  }, {
    autoTrackExposure: e,
    disable: t
  })
}