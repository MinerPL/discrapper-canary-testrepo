"use strict";
n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return f
  },
  default: function() {
    return E
  }
}), n("47120");
var a = n("735250");
n("470079");
var r = n("100527"),
  s = n("906732"),
  i = n("987209"),
  l = n("598"),
  u = n("791785"),
  o = n("961830"),
  c = n("231338");

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: r,
    applicationId: i,
    analyticsLocationObject: o,
    skuId: c
  } = e, {} = (0, l.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, s.default)();
  return (0, a.jsx)(u.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: i,
    skuId: c,
    initialPlanId: null,
    analyticsObject: o,
    analyticsLocations: d,
    transitionState: r
  })
}
let f = [o.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, o.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...o.SHARED_STEP_CONFIGS, o.REVIEW_STEP_CONFIG, o.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

function E(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: u,
    analyticsLocations: o
  } = e, {
    analyticsLocations: E
  } = (0, s.default)(o, r.default.PREMIUM_PAYMENT_MODAL);
  return (0, a.jsx)(s.AnalyticsLocationProvider, {
    value: E,
    children: (0, a.jsx)(l.PaymentContextProvider, {
      loadId: t,
      stepConfigs: f,
      applicationId: n,
      skuIDs: [u],
      activeSubscription: null,
      purchaseType: c.PurchaseTypes.ONE_TIME,
      children: (0, a.jsx)(i.GiftContextProvider, {
        children: (0, a.jsx)(d, {
          ...e
        })
      })
    })
  })
}