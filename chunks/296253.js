"use strict";
i.r(n), i.d(n, {
  default: function() {
    return a
  }
});
var t = i("446674"),
  l = i("357957"),
  r = i("521012");

function a() {
  let e = (0, t.useStateFromStores)([r.default], () => r.default.getPremiumTypeSubscription()),
    n = (0, t.useStateFromStores)([l.default], () => {
      var n;
      return (null == e ? void 0 : e.paymentSourceId) != null ? null === (n = l.default.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null
    });
  return n
}