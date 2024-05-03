"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("735250");
n("470079");
var r = n("153832"),
  l = n("481060"),
  s = n("976255"),
  a = n("667"),
  o = n("626135"),
  d = n("981631");

function c(e) {
  let {
    applicationId: t,
    skuId: c,
    onClose: u,
    onComplete: f,
    analyticsLocations: m,
    analyticsLocationObject: p,
    contextKey: h
  } = e, S = !1, v = (0, r.v4)();
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("440"), n.e("6416"), n.e("63438"), n.e("62511"), n.e("58600"), n.e("32776"), n.e("95900"), n.e("32747")]).then(n.bind(n, "409600"));
    return n => {
      let {
        onClose: r,
        ...l
      } = n;
      return (0, i.jsx)(e, {
        ...l,
        loadId: v,
        applicationId: t,
        skuId: c,
        analyticsLocations: m,
        analyticsLocationObject: p,
        onClose: e => {
          r(), null == u || u(e)
        },
        onComplete: e => {
          S = !0, null == f || f(e)
        }
      })
    }
  }, {
    contextKey: h,
    onCloseCallback: () => {
      !S && o.default.track(d.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: v,
        payment_type: d.PurchaseTypeToAnalyticsPaymentType[d.PurchaseTypes.ONE_TIME],
        location: p,
        is_gift: !1,
        application_id: t,
        location_stack: m
      }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == u || u(S)
    },
    onCloseRequest: d.NOOP
  })
}