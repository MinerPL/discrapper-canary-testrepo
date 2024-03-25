"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var r = n("37983");
n("884691");
var u = n("812204"),
  a = n("685665"),
  i = n("635357"),
  l = n("642906"),
  s = n("85336"),
  o = n("385179"),
  d = n("262683"),
  c = n("946359"),
  f = n("724269"),
  P = n("99836"),
  S = n("217796"),
  p = n("357957"),
  h = n("671183"),
  x = n("273093"),
  C = n("880531"),
  m = n("843455");
let v = [{
  key: null,
  renderStep: e => (0, r.jsx)(S.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: s.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, r.jsx)(d.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      let t = p.default.paymentSources;
      0 === Object.keys(t).length ? e.handleClose() : e.handleStepChange(s.Step.REVIEW, {
        trackedFromStep: s.Step.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: s.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, r.jsx)(f.default, {})
}, {
  key: s.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, r.jsx)(c.default, {})
}, {
  key: s.Step.REVIEW,
  renderStep: e => (0, r.jsx)(P.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: s.Step.CONFIRM,
  renderStep: e => (0, r.jsx)(h.default, {
    ...e
  })
}];

function T(e) {
  let {
    guildProductContext: t,
    sourceAnalyticsLocations: n,
    applicationId: s,
    ...d
  } = e, {
    analyticsLocations: c
  } = (0, a.default)(n, u.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, r.jsx)(x.GuildProductPurchaseContextProvider, {
    ...t,
    children: (0, r.jsx)(a.AnalyticsLocationProvider, {
      value: c,
      children: (0, r.jsx)(l.PaymentContextProvider, {
        stepConfigs: v,
        applicationId: s,
        skuIDs: [d.skuId],
        activeSubscription: null,
        purchaseType: m.PurchaseTypes.ONE_TIME,
        children: (0, r.jsx)(i.GiftContextProvider, {
          children: (0, r.jsx)(o.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: c,
            renderHeader: C.renderGuildProductPurchaseHeader,
            ...d
          })
        })
      })
    })
  })
}