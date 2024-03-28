"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
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
  u = s("981631");

function c(e) {
  let {
    skuId: t,
    isGift: c = !1,
    giftMessage: S,
    onClose: E,
    onComplete: T,
    analyticsLocations: _,
    analyticsObject: f
  } = e, m = !1, g = (0, n.v4)();
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([s.e("49237"), s.e("99387"), s.e("66635"), s.e("40326"), s.e("23357"), s.e("15972"), s.e("58625"), s.e("6416"), s.e("14720"), s.e("63438"), s.e("62511"), s.e("61247"), s.e("58600"), s.e("32776"), s.e("95900"), s.e("65866"), s.e("87624"), s.e("69935")]).then(s.bind(s, "608579"));
    return s => {
      let {
        onClose: n,
        returnRef: l,
        ...i
      } = s;
      return (0, a.jsx)(e, {
        ...i,
        loadId: g,
        skuId: t,
        isGift: c,
        giftMessage: S,
        analyticsLocations: _,
        onClose: e => {
          n(), null == E || E(e)
        },
        onComplete: () => {
          m = !0, null == T || T()
        },
        returnRef: l
      })
    }
  }, {
    onCloseCallback: () => {
      !m && d.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: g,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        location: f,
        is_gift: c,
        location_stack: _
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == E || E(m), m && (0, o.fetchCollectiblesPurchases)()
    },
    onCloseRequest: u.NOOP
  })
}