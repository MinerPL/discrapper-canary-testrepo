"use strict";
i.r(t), i.d(t, {
  default: function() {
    return m
  },
  openBurstReactionsUpsellModal: function() {
    return p
  }
});
var n = i("735250");
i("470079");
var a = i("481060"),
  s = i("230711"),
  l = i("104494"),
  o = i("639119"),
  r = i("790527"),
  u = i("474936"),
  d = i("981631"),
  c = i("689938"),
  h = i("547101"),
  f = i("784370");

function m(e) {
  var t, i;
  let {
    onClose: a,
    analyticsSource: m,
    ...p
  } = e, g = c.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
    onClick: () => {
      s.default.open(d.UserSettingsSections.PREMIUM), a()
    }
  }), T = (0, o.usePremiumTrialOffer)(), v = (0, l.usePremiumDiscountOffer)();
  return (0, n.jsx)(r.default, {
    artURL: f,
    artContainerClassName: h.artContainer,
    modalClassName: h.modalContainer,
    bodyClassName: h.bodyContainer,
    type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
    title: c.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
    body: g,
    glowUp: g,
    analyticsSource: m,
    analyticsLocation: {
      page: d.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
      object: d.AnalyticsObjects.BUTTON_CTA
    },
    onClose: a,
    subscribeButtonText: null != T || null != v ? void 0 : c.default.Messages.PREMIUM_SETTINGS_GET,
    subscriptionTier: null !== (i = null == T ? void 0 : null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : u.PremiumSubscriptionSKUs.TIER_2,
    backButtonText: c.default.Messages.NO_THANKS,
    ...p
  })
}

function p(e) {
  let {
    analytics: t
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(i.bind(i, "659215"));
    return i => (0, n.jsx)(e, {
      analyticsSource: t,
      ...i
    })
  })
}