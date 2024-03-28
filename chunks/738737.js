"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("987209"),
  i = n("981631");

function r(e) {
  let {
    initialPlanId: t,
    activeSubscription: r,
    trialId: o,
    trialFooterMessageOverride: u,
    onClose: d,
    analyticsObject: c,
    analyticsLocation: f,
    analyticsLocations: h,
    analyticsSubscriptionType: m,
    renderHeader: p,
    renderPurchaseConfirmation: E,
    planGroup: C,
    reviewWarningMessage: g,
    skuId: S
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      PaymentContextProvider: e
    } = await Promise.resolve().then(n.bind(n, "598")), {
      PaymentModal: l
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("15972"), n.e("6416"), n.e("32776"), n.e("23952")]).then(n.bind(n, "791785")), {
      STEPS: i
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("58625"), n.e("6416"), n.e("14720"), n.e("63438"), n.e("62511"), n.e("61247"), n.e("58600"), n.e("32776"), n.e("95900"), n.e("8016"), n.e("17938"), n.e("84992"), n.e("35240")]).then(n.bind(n, "7305"));
    return n => {
      let {
        onClose: _,
        ...T
      } = n;
      return (0, a.jsx)(e, {
        activeSubscription: r,
        stepConfigs: i,
        skuIDs: [S],
        children: (0, a.jsx)(s.GiftContextProvider, {
          children: (0, a.jsx)(l, {
            ...T,
            initialPlanId: t,
            onClose: e => {
              _(), null == d || d(e)
            },
            analyticsLocations: h,
            analyticsObject: c,
            analyticsLocation: f,
            analyticsSubscriptionType: m,
            skuId: S,
            renderHeader: p,
            renderPurchaseConfirmation: E,
            planGroup: C,
            trialId: o,
            trialFooterMessageOverride: u,
            reviewWarningMessage: g
          })
        })
      })
    }
  }, {
    onCloseCallback: () => {
      null == d || d(!1)
    },
    onCloseRequest: i.NOOP
  })
}