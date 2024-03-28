"use strict";
n.r(e), n.d(e, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("98278"),
  i = n("790527"),
  o = n("474936"),
  c = n("981631"),
  r = n("689938");

function u(t) {
  let {
    onClose: e,
    source: u,
    ..._
  } = t, L = r.default.Messages.GUILD_IDENTITY_UPSELL_MODAL_BODY.format({
    onAndMore: function() {
      e(), (0, a.navigateToPremiumMarketingPage)(!0)
    }
  });
  return (0, s.jsx)(i.default, {
    artURL: n("399604"),
    type: o.PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL,
    title: r.default.Messages.GUILD_IDENTITY_UPSELL_MODAL_TITLE,
    body: L,
    glowUp: L,
    analyticsSource: u,
    analyticsLocation: {
      section: c.AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE_UPSELL_MODAL,
      object: c.AnalyticsObjects.BUTTON_CTA
    },
    onClose: e,
    ..._
  })
}