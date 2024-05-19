"use strict";
n.r(t), n.d(t, {
  openActivityApplicationPaymentModal: function() {
    return m
  },
  openApplicationPaymentModal: function() {
    return f
  }
}), n("789020");
var i = n("735250");
n("470079");
var l = n("512722"),
  r = n.n(l),
  a = n("481060"),
  o = n("496929"),
  s = n("171246"),
  u = n("509545"),
  d = n("55563"),
  c = n("987209"),
  p = n("981631");

function f(e) {
  let {
    initialPlanId: t,
    activeSubscription: l,
    analyticsObject: r,
    analyticsLocation: o,
    analyticsLocations: s,
    analyticsSubscriptionType: u,
    renderHeader: d,
    planGroup: f,
    skuId: h,
    guildId: m,
    reviewWarningMessage: g,
    applicationId: S,
    showBenefitsFirst: v,
    eligibleApplicationSubscriptionGuilds: I,
    onComplete: C,
    forcesTransitionToGuild: M
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, "598")), a = (await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("10993")]).then(n.bind(n, "405083"))).default, {
      getApplicationPaymentSteps: p
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("440"), n.e("63438"), n.e("62511"), n.e("58600"), n.e("95900"), n.e("62498")]).then(n.bind(n, "759386")), b = p({
      guildId: m,
      showBenefitsFirst: v,
      eligibleApplicationSubscriptionGuilds: I
    });
    return n => (0, i.jsx)(e, {
      applicationId: S,
      activeSubscription: l,
      stepConfigs: b,
      skuIDs: [h],
      children: (0, i.jsx)(c.GiftContextProvider, {
        children: (0, i.jsx)(a, {
          ...n,
          initialPlanId: t,
          skuId: h,
          analyticsLocations: s,
          analyticsObject: r,
          analyticsLocation: o,
          analyticsSubscriptionType: u,
          renderHeader: d,
          planGroup: f,
          reviewWarningMessage: g,
          applicationId: S,
          guildId: null != m ? m : void 0,
          onComplete: C,
          forcesTransitionToGuild: M
        })
      })
    })
  }, {
    onCloseRequest: p.NOOP
  })
}
let h = async (e, t) => {
  let n = (await (0, o.fetchUserEntitlementsForApplication)(e)).filter(e => null == e.ends_at || new Date(e.ends_at) > new Date).find(e => e.sku_id === t);
  r()(null == n, "User already has an active subscription to this SKU")
};
async function m(e) {
  var t;
  let {
    applicationId: n,
    skuId: i,
    initialPlanId: l,
    analyticsLocationObject: a,
    analyticsLocations: o,
    renderHeader: c
  } = e, m = d.default.get(i), g = u.default.getForSKU(i);
  r()(null != m, "Failed to find SKU");
  let S = (0, s.isApplicationUserSubscription)(m.flags);
  r()(S, "Guild application subscriptions unsupported!"), await h(n, i), f({
    initialPlanId: null != l ? l : null === (t = g[0]) || void 0 === t ? void 0 : t.id,
    activeSubscription: null,
    analyticsLocations: o,
    analyticsLocationObject: a,
    analyticsSubscriptionType: p.SubscriptionTypes.APPLICATION,
    renderHeader: c,
    planGroup: [],
    skuId: i,
    guildId: null,
    eligibleApplicationSubscriptionGuilds: [],
    showBenefitsFirst: !1,
    applicationId: n
  })
}