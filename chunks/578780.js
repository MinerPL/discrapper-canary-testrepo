"use strict";
t.r(n), t.d(n, {
  default: function() {
    return A
  }
});
var a = t("735250");
t("470079");
var r = t("100527"),
  s = t("906732"),
  o = t("987209"),
  i = t("598"),
  u = t("409813"),
  l = t("791785"),
  c = t("276442"),
  d = t("793541"),
  f = t("380898"),
  p = t("710094"),
  y = t("865921"),
  b = t("853872"),
  m = t("806984"),
  P = t("464797"),
  g = t("946211"),
  C = t("231338");
let h = [{
  key: null,
  renderStep: e => (0, a.jsx)(y.OneTimePaymentPredicateStep, {
    ...e
  })
}, {
  key: u.Step.ADD_PAYMENT_STEPS,
  renderStep: e => (0, a.jsx)(c.PaymentModalAddPaymentStep, {
    ...e,
    onReturn: () => {
      0 === Object.keys(b.default.paymentSources).length ? e.handleClose() : e.handleStepChange(u.Step.REVIEW, {
        trackedFromStep: u.Step.ADD_PAYMENT_STEPS
      })
    }
  })
}, {
  key: u.Step.AWAITING_PURCHASE_TOKEN_AUTH,
  renderStep: () => (0, a.jsx)(f.default, {})
}, {
  key: u.Step.AWAITING_AUTHENTICATION,
  renderStep: () => (0, a.jsx)(d.default, {})
}, {
  key: u.Step.REVIEW,
  renderStep: e => (0, a.jsx)(p.PaymentModalReviewStep, {
    ...e
  })
}, {
  key: u.Step.CONFIRM,
  renderStep: e => (0, a.jsx)(m.default, {
    ...e
  })
}];

function A(e) {
  let {
    guildProductContext: n,
    sourceAnalyticsLocations: t,
    applicationId: u,
    ...c
  } = e, {
    analyticsLocations: d
  } = (0, s.default)(t, r.default.GUILD_PRODUCT_PAYMENT_MODAL);
  return (0, a.jsx)(P.GuildProductPurchaseContextProvider, {
    ...n,
    children: (0, a.jsx)(s.AnalyticsLocationProvider, {
      value: d,
      children: (0, a.jsx)(i.PaymentContextProvider, {
        stepConfigs: h,
        applicationId: u,
        skuIDs: [c.skuId],
        activeSubscription: null,
        purchaseType: C.PurchaseTypes.ONE_TIME,
        children: (0, a.jsx)(o.GiftContextProvider, {
          children: (0, a.jsx)(l.PaymentModal, {
            initialPlanId: null,
            analyticsLocations: d,
            renderHeader: g.renderGuildProductPurchaseHeader,
            ...c
          })
        })
      })
    })
  })
}