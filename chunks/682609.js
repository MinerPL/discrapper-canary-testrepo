"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var s = a("98278"),
  i = a("790527"),
  l = a("474936"),
  c = a("981631"),
  o = a("689938");

function u(e) {
  var t;
  let {
    channel: u,
    onClose: r,
    ...E
  } = e, L = o.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_BODY.format({
    onLearnMore: function() {
      r(), (0, s.navigateToPremiumMarketingPage)(!0)
    }
  });
  return (0, n.jsx)(i.default, {
    artURL: a("990158"),
    type: l.PremiumUpsellTypes.MESSAGE_LENGTH_UPSELL,
    title: o.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_MODAL_HEADER,
    body: L,
    glowUp: L,
    analyticsSource: {
      page: (null == (t = u) ? void 0 : t.getGuildId()) != null ? c.AnalyticsPages.GUILD_CHANNEL : (null == t ? void 0 : t.isGroupDM()) || (null == t ? void 0 : t.isPrivate()) ? c.AnalyticsPages.DM_CHANNEL : null
    },
    analyticsLocation: {
      section: c.AnalyticsSections.MESSAGE_LENGTH_UPSELL_MODAL,
      object: c.AnalyticsObjects.BUTTON_CTA
    },
    onClose: r,
    ...E
  })
}