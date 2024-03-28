"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var s = a("735250");
a("470079");
var i = a("98278"),
  r = a("911200"),
  n = a("348121"),
  o = a("790527"),
  u = a("474936"),
  c = a("981631"),
  _ = a("689938"),
  l = a("408866"),
  p = a("399103");

function d(e) {
  let {
    onClose: t,
    analyticsSource: a,
    onLearnMore: d,
    ...E
  } = e;

  function U() {
    null == d || d(), t(), (0, i.navigateToPremiumMarketingPage)()
  }
  let {
    isLoading: m,
    suggestedPremiumType: L
  } = (0, n.default)({
    autoTrackExposure: !0,
    experiment: r.default,
    location: "video_backgrounds_upsell"
  }), O = L === u.PremiumTypes.TIER_0 ? u.PremiumSubscriptionSKUs.TIER_0 : u.PremiumSubscriptionSKUs.TIER_2, T = O === u.PremiumSubscriptionSKUs.TIER_0 ? _.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
    onLearnMore: U
  }) : _.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
    onLearnMore: U
  });
  return (0, s.jsx)(o.default, {
    artURL: p,
    artContainerClassName: l.videoBackgroundArt,
    type: u.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
    title: _.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
    body: T,
    glowUp: T,
    analyticsSource: a,
    analyticsLocation: {
      page: c.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: c.AnalyticsObjects.BUTTON_CTA
    },
    onClose: t,
    subscriptionTier: O,
    isLoading: m,
    ...E
  })
}