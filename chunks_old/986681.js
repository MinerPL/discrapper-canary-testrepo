"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var r = n("884691"),
  u = n("446674"),
  i = n("850068"),
  a = n("357957");

function o(e) {
  let {
    isGift: t,
    activeSubscription: n
  } = e, {
    defaultPaymentSourceId: o,
    paymentSources: s,
    hasFetchedPaymentSources: c
  } = (0, u.useStateFromStoresObject)([a.default], () => ({
    defaultPaymentSourceId: a.default.defaultPaymentSourceId,
    paymentSources: a.default.paymentSources,
    hasFetchedPaymentSources: a.default.hasFetchedPaymentSources
  })), l = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = r.useState(() => l(t, n, o));
  return r.useEffect(() => {
    c ? f(l(t, n, o)) : (0, i.fetchPaymentSources)()
  }, [c, t, n, o]), {
    paymentSources: s,
    hasPaymentSources: Object.keys(s).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: c
  }
}