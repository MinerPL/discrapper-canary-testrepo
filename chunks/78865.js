"use strict";
t.r(a), t.d(a, {
  default: function() {
    return u
  }
});
var n = t("735250");
t("470079");
var i = t("174609"),
  l = t("98278"),
  s = t("193878"),
  r = t("790527"),
  o = t("626135"),
  c = t("981631"),
  _ = t("474936"),
  d = t("689938");
let A = t("279360");

function u(e) {
  let {
    onClose: a,
    onCloseParent: t,
    analyticsSource: u,
    ...E
  } = e;

  function M() {
    (0, i.default)(), a(), null == t || t(), o.default.track(c.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_section: c.AnalyticsSections.STREAM_UPSELL_MODAL,
      location_object: c.AnalyticsObjects.NAVIGATION_LINK
    }), (0, l.navigateToPremiumMarketingPage)()
  }
  let {
    enabled: R,
    variant: f
  } = s.default.useExperiment({
    location: "StreamUpsellModal"
  }, {
    autoTrackExposure: !1
  }), T = R ? d.default.Messages.STREAM_PREMIUM_UPSELL_BODY_V2 : __OVERLAY__ ? d.default.Messages.STREAM_PREMIUM_UPSELL_BODY_NO_CTA : d.default.Messages.STREAM_PREMIUM_UPSELL_BODY.format({
    onPressMore: M
  }), S = R && s.GradientVariants.includes(f);
  return (0, n.jsx)(r.default, {
    title: R ? d.default.Messages.STREAM_PREMIUM_UPSELL_HEADER_V2 : d.default.Messages.STREAM_PREMIUM_UPSELL_HEADER,
    glowUp: T,
    body: T,
    artURL: A,
    type: _.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: c.AnalyticsSections.STREAM_UPSELL_MODAL,
      object: c.AnalyticsObjects.BUTTON_CTA
    },
    analyticsSource: u,
    onClose: a,
    onSubscribeClick: i.default,
    secondaryCTA: R ? d.default.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
    onSecondaryClick: R ? M : void 0,
    showEnhancedUpsell: S,
    enableArtBoxShadow: !1,
    ...E
  })
}