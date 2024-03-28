"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  },
  openEffectsUpsellModal: function() {
    return p
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("174609"),
  i = n("98278"),
  r = n("790527"),
  o = n("810090"),
  u = n("626135"),
  d = n("981631"),
  c = n("689938"),
  f = n("855162"),
  h = n("626065");

function m(e) {
  let {
    onClose: t,
    analytics: n,
    ...l
  } = e, m = c.default.Messages.VOICE_CHANNEL_EFFECTS_UPSELL_BODY_2.format({
    onPressMore: function() {
      (0, s.default)(), t(), u.default.track(d.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
        location_section: d.AnalyticsSections.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
        location_object: d.AnalyticsObjects.NAVIGATION_LINK
      }), (0, i.navigateToPremiumMarketingPage)()
    }
  });
  return (0, a.jsx)(r.default, {
    title: c.default.Messages.VOICE_CHANNEL_EFFECTS_UPSELL_HEADER_2,
    glowUp: m,
    body: m,
    artContainerClassName: f.artContainer,
    enableArtBoxShadow: !1,
    type: n.type,
    analyticsLocation: {
      section: d.AnalyticsSections.VOICE_CHANNEL_EFFECTS_UPSELL_MODAL,
      object: n.object
    },
    analyticsSource: {
      page: d.AnalyticsPages.CHANNEL_CALL,
      section: n.section
    },
    onClose: t,
    onSubscribeClick: s.default,
    artElement: (0, a.jsx)(o.default, {
      className: f.video,
      src: h,
      loop: !0,
      autoPlay: !0
    }),
    ...l
  })
}

function p(e) {
  let {
    analytics: t
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, "310892"));
    return n => (0, a.jsx)(e, {
      analytics: t,
      ...n
    })
  })
}