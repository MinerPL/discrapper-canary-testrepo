"use strict";
n.r(t), n.d(t, {
  STANDARD_ONE_TIME_PAYMENT_STEPS: function() {
    return f
  },
  default: function() {
    return p
  }
}), n("47120");
var a = n("735250");
n("470079");
var r = n("100527"),
  s = n("906732"),
  i = n("987209"),
  o = n("563132"),
  u = n("791785"),
  l = n("961830"),
  c = n("231338");

function d(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: r,
    applicationId: i,
    analyticsLocationObject: l,
    skuId: c
  } = e, {} = (0, o.usePaymentContext)(), {
    analyticsLocations: d
  } = (0, s.default)();
  return (0, a.jsx)(u.PaymentModal, {
    onClose: t,
    onComplete: n,
    applicationId: i,
    skuId: c,
    initialPlanId: null,
    analyticsObject: l,
    analyticsLocations: d,
    transitionState: r
  })
}
let f = [l.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, l.ONE_TIME_PAYMENT_ADD_PAYMENT_STEP_CONFIG, ...l.SHARED_STEP_CONFIGS, l.REVIEW_STEP_CONFIG, l.ONE_TIME_PAYMENT_CONFIRM_STEP_CONFIG];

function p(e) {
  let {
    loadId: t,
    applicationId: n,
    skuId: u,
    analyticsLocations: l
  } = e, {
    analyticsLocations: p
  } = (0, s.default)(l, r.default.PREMIUM_PAYMENT_MODAL);
  return (0, a.jsx)(s.AnalyticsLocationProvider, {
    value: p,
    children: (0, a.jsx)(o.PaymentContextProvider, {
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