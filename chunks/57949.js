"use strict";
n.r(t), n.d(t, {
  openGuildProductPurchaseModal: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("153832"),
  l = n("481060"),
  i = n("976255"),
  r = n("667"),
  o = n("626135"),
  u = n("981631");

function d(e) {
  let {
    guildProductListing: t,
    guildId: d,
    sourceAnalyticsLocations: c
  } = e, f = !1, E = (0, a.v4)(), _ = () => {
    f = !0
  };
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("440"), n.e("6416"), n.e("63438"), n.e("62511"), n.e("58600"), n.e("32776"), n.e("95900"), n.e("57761")]).then(n.bind(n, "578780"));
    return n => (0, s.jsx)(e, {
      ...n,
      applicationId: t.application_id,
      skuId: t.id,
      sourceAnalyticsLocations: c,
      guildProductContext: {
        guildProductListingId: t.id,
        guildId: d
      },
      loadId: E,
      onComplete: _
    })
  }, {
    onCloseCallback: () => {
      !f && o.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: E,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        is_gift: !1,
        location_stack: Array.isArray(c) ? c : [c]
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)()
    },
    onCloseRequest: u.NOOP
  })
}