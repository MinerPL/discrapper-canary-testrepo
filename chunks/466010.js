"use strict";
n.r(t), n.d(t, {
  June2024MarketingMoment: function() {
    return l
  }
});
let l = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-05_june_2024_marketing_moment",
  label: "June 2024 Marketing Moment",
  defaultConfig: {
    shouldShowCards: !1,
    canFlipReferralProgramCard: !1,
    canFlipAppStylesCard: !1,
    canFlipCustomNotificationSoundsCard: !1
  },
  treatments: [{
    id: 1,
    label: "Can only see cards",
    config: {
      shouldShowCards: !0,
      canFlipReferralProgramCard: !1,
      canFlipAppStylesCard: !1,
      canFlipCustomNotificationSoundsCard: !1
    }
  }, {
    id: 2,
    label: "Can only flip first card",
    config: {
      shouldShowCards: !0,
      canFlipReferralProgramCard: !0,
      canFlipAppStylesCard: !1,
      canFlipCustomNotificationSoundsCard: !1
    }
  }, {
    id: 3,
    label: "Can only flip first and second cards",
    config: {
      shouldShowCards: !0,
      canFlipReferralProgramCard: !0,
      canFlipAppStylesCard: !0,
      canFlipCustomNotificationSoundsCard: !1
    }
  }, {
    id: 4,
    label: "Can flip all cards",
    config: {
      shouldShowCards: !0,
      canFlipReferralProgramCard: !0,
      canFlipAppStylesCard: !0,
      canFlipCustomNotificationSoundsCard: !0
    }
  }]
})