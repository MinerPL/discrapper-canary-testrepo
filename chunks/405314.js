"use strict";
n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return f
  },
  default: function() {
    return h
  }
}), n("222007");
var i = n("37983");
n("884691");
var r = n("812204"),
  s = n("685665"),
  l = n("635357"),
  a = n("642906"),
  o = n("385179"),
  u = n("292215"),
  c = n("843455");

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: r,
    applicationId: l,
    analyticsLocationObject: u,
    skuId: c
  } = e, {} = (0, a.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, s.default)();
  return (0, i.jsx)(o.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: l,
    skuId: c,
    initialPlanId: null,
    analyticsObject: u,
    analyticsLocations: d,
    transitionState: r
  })
}
let f = [u.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, u.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...u.SHARED_STEP_CONFIGS, u.REVIEW_STEP_CONFIG, u.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

function h(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: o,
    analyticsLocations: u
  } = e, {
    AnalyticsLocationProvider: h
  } = (0, s.default)(u, r.default.PREMIUM_PAYMENT_MODAL);
  return (0, i.jsx)(h, {
    children: (0, i.jsx)(a.PaymentContextProvider, {
      loadId: t,
      stepConfigs: f,
      applicationId: n,
      skuIDs: [o],
      activeSubscription: null,
      purchaseType: c.PurchaseTypes.ONE_TIME,
      children: (0, i.jsx)(l.GiftContextProvider, {
        children: (0, i.jsx)(d, {
          ...e
        })
      })
    })
  })
}