"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("37983");
a("884691");
var r = a("748820"),
  s = a("77078"),
  n = a("112679"),
  o = a("55689"),
  i = a("21526"),
  u = a("599110"),
  c = a("49111");

function d(e) {
  let {
    skuId: t,
    isGift: d = !1,
    giftMessage: f,
    onClose: m,
    onComplete: C,
    analyticsLocations: p,
    analyticsObject: g
  } = e, h = !1, E = (0, r.v4)();
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("894742").then(a.bind(a, "894742"));
    return a => {
      let {
        onClose: r,
        returnRef: s,
        ...n
      } = a;
      return (0, l.jsx)(e, {
        ...n,
        loadId: E,
        skuId: t,
        isGift: d,
        giftMessage: f,
        analyticsLocations: p,
        onClose: e => {
          r(), null == m || m(e)
        },
        onComplete: () => {
          h = !0, null == C || C()
        },
        returnRef: s
      })
    }
  }, {
    onCloseCallback: () => {
      !h && u.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: E,
        payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.ONE_TIME],
        location: g,
        is_gift: d,
        location_stack: p
      }), (0, n.clearError)(), (0, o.clearPurchaseTokenAuthState)(), null == m || m(h), h && (0, i.fetchCollectiblesPurchases)()
    },
    onCloseRequest: c.NOOP
  })
}