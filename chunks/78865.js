"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var s = a("735250");
a("470079");
var n = a("174609"),
  _ = a("98278"),
  o = a("193878"),
  c = a("790527"),
  l = a("626135"),
  i = a("981631"),
  E = a("474936"),
  M = a("689938");
let u = a("279360");

function r(e) {
  let {
    onClose: t,
    onCloseParent: a,
    analyticsSource: r,
    ...A
  } = e;

  function d() {
    (0, n.default)(), t(), null == a || a(), l.default.track(i.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_section: i.AnalyticsSections.STREAM_UPSELL_MODAL,
      location_object: i.AnalyticsObjects.NAVIGATION_LINK
    }), (0, _.navigateToPremiumMarketingPage)()
  }
  let {
    enabled: L
  } = o.default.useExperiment({
    location: "StreamUpsellModal"
  }, {
    autoTrackExposure: !1
  }), S = L ? M.default.Messages.STREAM_PREMIUM_UPSELL_BODY_V2 : __OVERLAY__ ? M.default.Messages.STREAM_PREMIUM_UPSELL_BODY_NO_CTA : M.default.Messages.STREAM_PREMIUM_UPSELL_BODY.format({
    onPressMore: d
  });
  return (0, s.jsx)(c.default, {
    title: L ? M.default.Messages.STREAM_PREMIUM_UPSELL_HEADER_V2 : M.default.Messages.STREAM_PREMIUM_UPSELL_HEADER,
    glowUp: S,
    body: S,
    artURL: u,
    type: E.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: i.AnalyticsSections.STREAM_UPSELL_MODAL,
      object: i.AnalyticsObjects.BUTTON_CTA
    },
    analyticsSource: r,
    onClose: t,
    onSubscribeClick: n.default,
    secondaryCTA: L ? M.default.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
    onSecondaryClick: L ? d : void 0,
    ...A
  })
}