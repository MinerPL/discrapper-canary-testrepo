"use strict";
o.r(a), o.d(a, {
  default: function() {
    return E
  }
});
var t = o("735250");
o("470079");
var n = o("174609"),
  l = o("98278"),
  i = o("193878"),
  s = o("223468"),
  r = o("790527"),
  c = o("703656"),
  d = o("626135"),
  u = o("981631"),
  _ = o("474936"),
  A = o("689938");
let p = o("279360");

function E(e) {
  let {
    onClose: a,
    onCloseParent: o,
    analyticsSource: E,
    ...R
  } = e, {
    enabled: w,
    variant: M
  } = i.default.useExperiment({
    location: "StreamUpsellModal"
  }, {
    autoTrackExposure: !1
  }), {
    showNewRoadblockCopy: b,
    showNewRoadblockRoute: f
  } = s.PremiumHDStreamingUpsellCopyExperiment.useExperiment({
    location: "StreamUpsellModal"
  }, {
    autoTrackExposure: !0
  });

  function S() {
    (0, n.default)(), a(), null == o || o(), d.default.track(u.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_section: u.AnalyticsSections.STREAM_UPSELL_MODAL,
      location_object: u.AnalyticsObjects.NAVIGATION_LINK
    }), f ? (0, c.transitionTo)(u.Routes.APPLICATION_STORE) : (0, l.navigateToPremiumMarketingPage)()
  }
  let N = w ? b ? A.default.Messages.STREAM_PREMIUM_UPSELL_BODY_V3 : A.default.Messages.STREAM_PREMIUM_UPSELL_BODY_V2 : __OVERLAY__ ? A.default.Messages.STREAM_PREMIUM_UPSELL_BODY_NO_CTA : A.default.Messages.STREAM_PREMIUM_UPSELL_BODY.format({
      onPressMore: S
    }),
    T = w && i.GradientVariants.includes(M);
  return (0, t.jsx)(r.default, {
    title: w ? A.default.Messages.STREAM_PREMIUM_UPSELL_HEADER_V2 : A.default.Messages.STREAM_PREMIUM_UPSELL_HEADER,
    glowUp: N,
    body: N,
    artURL: p,
    type: _.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: u.AnalyticsSections.STREAM_UPSELL_MODAL,
      object: u.AnalyticsObjects.BUTTON_CTA
    },
    analyticsSource: E,
    onClose: a,
    onSubscribeClick: n.default,
    secondaryCTA: w ? A.default.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
    onSecondaryClick: w ? S : void 0,
    showEnhancedUpsell: T,
    enableArtBoxShadow: !1,
    ...R
  })
}