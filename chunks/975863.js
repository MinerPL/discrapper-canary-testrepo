"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
});
var s = a("735250");
a("470079");
var n = a("442837"),
  o = a("654904"),
  r = a("594174"),
  u = a("74538"),
  c = a("98278"),
  i = a("790527"),
  l = a("474936"),
  _ = a("981631"),
  d = a("486324"),
  U = a("689938");

function T(e) {
  let {
    onClose: t,
    source: T,
    ...E
  } = e, O = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()), p = u.default.isPremium(O) ? U.default.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPGRADE_BODY : U.default.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_BODY, I = p.format({
    onLearnMore: function() {
      t(), (0, c.navigateToPremiumMarketingPage)(!0)
    }
  });
  return (0, s.jsx)(i.default, {
    artURL: a("440142"),
    type: l.PremiumUpsellTypes.CUSTOM_PROFILE_UPSELL,
    title: U.default.Messages.PREMIUM_PROFILE_CUSTOMIZATION_UPSELL_HEADER,
    body: I,
    glowUp: I,
    onSecondaryClick: () => {
      t(), (0, o.handleOpenSelectImageModal)(d.UploadTypes.BANNER)
    },
    secondaryCTA: U.default.Messages.USER_SETTINGS_TRY_IT_OUT,
    analyticsSource: T,
    analyticsLocation: {
      section: _.AnalyticsSections.USER_PROFILE,
      object: _.AnalyticsObjects.BUTTON_CTA
    },
    onClose: t,
    ...E
  })
}