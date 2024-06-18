"use strict";
n.d(t, {
  V: function() {
    return _
  },
  a: function() {
    return d
  }
}), n(47120);
var i = n(442837),
  r = n(710845),
  s = n(853872),
  o = n(509545),
  a = n(78839),
  l = n(474936);
new r.Z("useSubscriptionPlansLoaded");
let u = e => {};

function _() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ];
  return (0, i.e7)([s.Z, o.Z, a.ZP], () => d(e, [s.Z, o.Z, a.ZP]), [e])
}

function d() {
  var e;
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.YQ],
    [n, i, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, o.Z, a.ZP],
    _ = n.paymentSourceIds,
    d = n.defaultPaymentSourceId,
    c = i.isLoadedForSKUs(t),
    E = null === (e = r.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.paymentSourceId;
  if (null != E && !i.hasPaymentSourceForSKUIds(E, t)) return u("subscription payment source ".concat(E, " not loaded for ").concat(t)), !1;
  if (null != d && !i.hasPaymentSourceForSKUIds(d, t)) return u("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
  for (let e of _)
    if (!i.hasPaymentSourceForSKUIds(e, t)) return u("payment source ".concat(e, " not loaded for ").concat(t)), !1;
  return u("isLoadedForSKUs ".concat(c)), c
}