"use strict";
n.d(t, {
  Z: function() {
    return a
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(355467),
  o = n(853872);

function a(e) {
  let {
    isGift: t,
    activeSubscription: n
  } = e, {
    defaultPaymentSourceId: a,
    paymentSources: l,
    hasFetchedPaymentSources: u
  } = (0, r.cj)([o.Z], () => ({
    defaultPaymentSourceId: o.Z.defaultPaymentSourceId,
    paymentSources: o.Z.paymentSources,
    hasFetchedPaymentSources: o.Z.hasFetchedPaymentSources
  })), _ = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, c] = i.useState(() => _(t, n, a));
  return i.useEffect(() => {
    u ? c(_(t, n, a)) : (0, s.tZ)()
  }, [u, t, n, a]), {
    paymentSources: l,
    hasPaymentSources: Object.keys(l).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: c,
    hasFetchedPaymentSources: u,
    defaultPaymentSource: null != a ? l[a] : null
  }
}