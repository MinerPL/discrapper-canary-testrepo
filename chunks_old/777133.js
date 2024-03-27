"use strict";
n.r(t), n.d(t, {
  openGuildProductPurchaseModal: function() {
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
    guildProductListing: t,
    guildId: d,
    sourceAnalyticsLocations: c
  } = e, E = !1, f = (0, a.v4)(), _ = () => {
    E = !0
  };
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.el("191131").then(n.bind(n, "191131"));
    return n => (0, s.jsx)(e, {
      ...n,
      applicationId: t.application_id,
      skuId: t.id,
      sourceAnalyticsLocations: c,
      guildProductContext: {
        guildProductListingId: t.id,
        guildId: d
      },
      loadId: f,
      onComplete: _
    })
  }, {
    onCloseCallback: () => {
      !E && o.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: f,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        is_gift: !1,
        location_stack: Array.isArray(c) ? c : [c]
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)()
    },
    onCloseRequest: u.NOOP
  })
}