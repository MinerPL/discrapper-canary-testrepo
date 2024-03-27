"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("446674"),
  a = n("357957"),
  u = n("521012");

function r() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription()),
    t = (0, l.useStateFromStores)([a.default], () => {
      var t;
      return (null == e ? void 0 : e.paymentSourceId) != null ? null === (t = a.default.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country : null
    });
  return t
}