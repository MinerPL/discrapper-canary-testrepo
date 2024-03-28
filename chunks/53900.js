"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("442837"),
  a = n("853872"),
  u = n("78839");

function s() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getPremiumTypeSubscription());
  return (0, l.useStateFromStores)([a.default], () => {
    var t;
    return (null == e ? void 0 : e.paymentSourceId) != null ? null === (t = a.default.getPaymentSource(e.paymentSourceId)) || void 0 === t ? void 0 : t.country : null
  })
}