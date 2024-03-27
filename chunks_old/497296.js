"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var r = n("37983");
n("884691");
var u = n("626301"),
  a = n("552917"),
  o = n("843647"),
  i = n("789946"),
  l = n("646718"),
  s = n("49111"),
  c = n("782340"),
  d = n("965289"),
  f = n("431036");

function p(e) {
  let {
    onClose: t,
    analyticsSource: n,
    onLearnMore: p,
    ...E
  } = e;

  function S() {
    null == p || p(), t(), (0, u.navigateToPremiumMarketingPage)()
  }
  let {
    isLoading: T,
    suggestedPremiumType: _
  } = (0, o.default)({
    autoTrackExposure: !0,
    experiment: a.default,
    location: "video_backgrounds_upsell"
  }), y = _ === l.PremiumTypes.TIER_0 ? l.PremiumSubscriptionSKUs.TIER_0 : l.PremiumSubscriptionSKUs.TIER_2, m = y === l.PremiumSubscriptionSKUs.TIER_0 ? c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY_TIER_0.format({
    onLearnMore: S
  }) : c.default.Messages.VIDEO_BACKGROUND_UPSELL_BODY.format({
    onLearnMore: S
  });
  return (0, r.jsx)(i.default, {
    artURL: f,
    artContainerClassName: d.videoBackgroundArt,
    type: l.PremiumUpsellTypes.VIDEO_BACKGROUNDS_MODAL,
    title: c.default.Messages.VIDEO_BACKGROUND_UPSELL_TITLE,
    body: m,
    glowUp: m,
    analyticsSource: n,
    analyticsLocation: {
      page: s.AnalyticsPages.PREMIUM_UPSELL_MODAL_VIDEO_BACKGROUNDS,
      object: s.AnalyticsObjects.BUTTON_CTA
    },
    onClose: t,
    subscriptionTier: y,
    isLoading: T,
    ...E
  })
}