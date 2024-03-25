"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("748820"),
  l = n("77078"),
  i = n("112679"),
  r = n("55689"),
  o = n("599110"),
  u = n("49111");

function d(e) {
  let {
    applicationId: t,
    skuId: d,
    onClose: c,
    onComplete: E,
    analyticsLocations: f,
    analyticsLocationObject: _,
    contextKey: T
  } = e, I = !1, m = (0, a.v4)();
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("405314").then(n.bind(n, "405314"));
    return n => {
      let {
        onClose: a,
        ...l
      } = n;
      return (0, s.jsx)(e, {
        ...l,
        loadId: m,
        applicationId: t,
        skuId: d,
        analyticsLocations: f,
        analyticsLocationObject: _,
        onClose: e => {
          a(), null == c || c(e)
        },
        onComplete: e => {
          I = !0, null == E || E(e)
        }
      })
    }
  }, {
    contextKey: T,
    onCloseCallback: () => {
      !I && o.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: m,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        location: _,
        is_gift: !1,
        application_id: t,
        location_stack: f
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == c || c(I)
    },
    onCloseRequest: u.NOOP
  })
}