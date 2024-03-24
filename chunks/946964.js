"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var s = a("37983");
a("884691");
var r = a("748820"),
  l = a("77078"),
  n = a("112679"),
  i = a("55689"),
  o = a("21526"),
  c = a("599110"),
  u = a("49111");

function d(e) {
  let {
    skuId: t,
    isGift: d = !1,
    giftMessage: f,
    onClose: m,
    onComplete: p,
    analyticsLocations: g,
    analyticsObject: C
  } = e, h = !1, E = (0, r.v4)();
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("894742").then(a.bind(a, "894742"));
    return a => {
      let {
        onClose: r,
        returnRef: l,
        ...n
      } = a;
      return (0, s.jsx)(e, {
        ...n,
        loadId: E,
        skuId: t,
        isGift: d,
        giftMessage: f,
        analyticsLocations: g,
        onClose: e => {
          r(), null == m || m(e)
        },
        onComplete: () => {
          h = !0, null == p || p()
        },
        returnRef: l
      })
    }
  }, {
    onCloseCallback: () => {
      !h && c.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: E,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        location: C,
        is_gift: d,
        location_stack: g
      }), (0, n.clearError)(), (0, i.clearPurchaseTokenAuthState)(), null == m || m(h), h && (0, o.fetchCollectiblesPurchases)()
    },
    onCloseRequest: u.NOOP
  })
}