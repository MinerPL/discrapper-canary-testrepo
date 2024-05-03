"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("153832"),
  l = s("481060"),
  i = s("976255"),
  r = s("667"),
  o = s("335131"),
  d = s("626135"),
  u = s("409813"),
  c = s("981631");
let S = "payment-modal";

function E(e) {
  let t;
  let {
    skuId: E,
    isGift: T = !1,
    giftMessage: f,
    onClose: m,
    onComplete: _,
    analyticsLocations: g,
    analyticsObject: h
  } = e, I = !1, N = (0, n.v4)(), p = e => {
    t = e
  };
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([s.e("49237"), s.e("99387"), s.e("66635"), s.e("40326"), s.e("23357"), s.e("15972"), s.e("440"), s.e("6416"), s.e("63438"), s.e("62511"), s.e("58600"), s.e("32776"), s.e("95900"), s.e("65866"), s.e("87624"), s.e("69935")]).then(s.bind(s, "608579"));
    return t => {
      let {
        onClose: s,
        returnRef: n,
        ...l
      } = t;
      return (0, a.jsx)(e, {
        ...l,
        loadId: N,
        skuId: E,
        isGift: T,
        giftMessage: f,
        analyticsLocations: g,
        onClose: e => {
          s(), null == m || m(e)
        },
        onComplete: () => {
          I = !0, null == _ || _()
        },
        returnRef: n,
        onStepChange: p
      })
    }
  }, {
    modalKey: S,
    onCloseCallback: () => {
      !I && d.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: N,
        payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.ONE_TIME],
        location: h,
        is_gift: T,
        location_stack: g
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == m || m(I), I && (0, o.fetchCollectiblesPurchases)()
    },
    onCloseRequest: () => {
      t === u.Step.REVIEW && (0, l.closeModal)(S)
    }
  })
}