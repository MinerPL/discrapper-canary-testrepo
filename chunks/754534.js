"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("37983");
s("884691");
var n = s("349171"),
  o = s("626301"),
  c = s("688771"),
  i = s("789946"),
  l = s("599110"),
  u = s("49111"),
  _ = s("646718"),
  E = s("782340");
let M = s("239381");

function r(e) {
  let {
    onClose: t,
    onCloseParent: s,
    analyticsSource: r,
    ...d
  } = e;

  function f() {
    (0, n.default)(), t(), null == s || s(), l.default.track(u.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
      location_section: u.AnalyticsSections.STREAM_UPSELL_MODAL,
      location_object: u.AnalyticsObjects.NAVIGATION_LINK
    }), (0, o.navigateToPremiumMarketingPage)()
  }
  let {
    enabled: A
  } = c.default.useExperiment({
    location: "StreamUpsellModal"
  }, {
    autoTrackExposure: !1
  }), L = A ? E.default.Messages.STREAM_PREMIUM_UPSELL_BODY_V2 : __OVERLAY__ ? E.default.Messages.STREAM_PREMIUM_UPSELL_BODY_NO_CTA : E.default.Messages.STREAM_PREMIUM_UPSELL_BODY.format({
    onPressMore: f
  });
  return (0, a.jsx)(i.default, {
    title: A ? E.default.Messages.STREAM_PREMIUM_UPSELL_HEADER_V2 : E.default.Messages.STREAM_PREMIUM_UPSELL_HEADER,
    glowUp: L,
    body: L,
    artURL: M,
    type: _.PremiumUpsellTypes.STREAM_QUALITY_UPSELL,
    analyticsLocation: {
      section: u.AnalyticsSections.STREAM_UPSELL_MODAL,
      object: u.AnalyticsObjects.BUTTON_CTA
    },
    analyticsSource: r,
    onClose: t,
    onSubscribeClick: n.default,
    secondaryCTA: A ? E.default.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
    onSecondaryClick: A ? f : void 0,
    ...d
  })
}