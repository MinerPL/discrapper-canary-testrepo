"use strict";
n.r(t), n.d(t, {
  useSubscriptionPlansLoaded: function() {
    return c
  },
  getSubscriptionPlansLoaded: function() {
    return d
  }
}), n("222007");
var i = n("446674"),
  r = n("605250"),
  u = n("357957"),
  o = n("10514"),
  l = n("521012"),
  a = n("646718");
new r.default("useSubscriptionPlansLoaded");
let s = e => {};

function c() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...a.ACTIVE_PREMIUM_SKUS];
  return (0, i.useStateFromStores)([u.default, o.default, l.default], () => d(e, [u.default, o.default, l.default]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...a.ACTIVE_PREMIUM_SKUS],
    [n, i, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, o.default, l.default],
    c = n.paymentSourceIds,
    d = n.defaultPaymentSourceId,
    f = i.isLoadedForSKUs(t),
    E = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != E && !i.hasPaymentSourceForSKUIds(E, t)) return s("subscription payment source ".concat(E, " not loaded for ").concat(t)), !1;
  if (null != d && !i.hasPaymentSourceForSKUIds(d, t)) return s("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
  for (let e of c)
    if (!i.hasPaymentSourceForSKUIds(e, t)) return s("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return s("isLoadedForSKUs ".concat(f)), f
}