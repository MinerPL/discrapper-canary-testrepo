"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  },
  openBurstReactionsUpsellModal: function() {
    return p
  }
});
var n = i("37983");
i("884691");
var a = i("77078"),
  l = i("79112"),
  o = i("154889"),
  s = i("917247"),
  r = i("789946"),
  u = i("646718"),
  c = i("49111"),
  d = i("782340"),
  h = i("618080"),
  m = i("277064");

function f(e) {
  var t, i;
  let {
    onClose: a,
    analyticsSource: f,
    ...p
  } = e, T = d.default.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
    onClick: () => {
      l.default.open(c.UserSettingsSections.PREMIUM), a()
    }
  }), R = (0, s.usePremiumTrialOffer)(), g = (0, o.usePremiumDiscountOffer)();
  return (0, n.jsx)(r.default, {
    artURL: m,
    artContainerClassName: h.artContainer,
    modalClassName: h.modalContainer,
    bodyClassName: h.bodyContainer,
    type: u.PremiumUpsellTypes.BURST_REACTION_UPSELL,
    title: d.default.Messages.SUPER_REACTIONS_UPSELL_TITLE,
    body: T,
    glowUp: T,
    analyticsSource: f,
    analyticsLocation: {
      page: c.AnalyticsPages.PREMIUM_UPSELL_BURST_REACTIONS,
      object: c.AnalyticsObjects.BUTTON_CTA
    },
    onClose: a,
    subscribeButtonText: null != R || null != g ? void 0 : d.default.Messages.PREMIUM_SETTINGS_GET,
    subscriptionTier: null !== (i = null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== i ? i : u.PremiumSubscriptionSKUs.TIER_2,
    backButtonText: d.default.Messages.NO_THANKS,
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
    } = await i.el("85589").then(i.bind(i, "85589"));
    return i => (0, n.jsx)(e, {
      analyticsSource: t,
      ...i
    })
  })
}