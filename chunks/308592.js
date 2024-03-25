"use strict";
n.r(t), n.d(t, {
  useSubscriptionPlansLoaded: function() {
    return l
  },
  getSubscriptionPlansLoaded: function() {
    return d
  }
}), n("222007");
var u = n("446674"),
  r = n("605250"),
  i = n("357957"),
  a = n("10514"),
  o = n("521012"),
  s = n("646718");
new r.default("useSubscriptionPlansLoaded");
let c = e => {};

function l() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...s.ACTIVE_PREMIUM_SKUS];
  return (0, u.useStateFromStores)([i.default, a.default, o.default], () => d(e, [i.default, a.default, o.default]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...s.ACTIVE_PREMIUM_SKUS],
    [n, u, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, a.default, o.default],
    l = n.paymentSourceIds,
    d = n.defaultPaymentSourceId,
    f = u.isLoadedForSKUs(t),
    E = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != E && !u.hasPaymentSourceForSKUIds(E, t)) return c("subscription payment source ".concat(E, " not loaded for ").concat(t)), !1;
  if (null != d && !u.hasPaymentSourceForSKUIds(d, t)) return c("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
  for (let e of l)
    if (!u.hasPaymentSourceForSKUIds(e, t)) return c("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return c("isLoadedForSKUs ".concat(f)), f
}