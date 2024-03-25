"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var u = n("884691"),
  r = n("446674"),
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
  } = (0, r.useStateFromStoresObject)([a.default], () => ({
    defaultPaymentSourceId: a.default.defaultPaymentSourceId,
    paymentSources: a.default.paymentSources,
    hasFetchedPaymentSources: a.default.hasFetchedPaymentSources
  })), l = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, f] = u.useState(() => l(t, n, o));
  return u.useEffect(() => {
    c ? f(l(t, n, o)) : (0, i.fetchPaymentSources)()
  }, [c, t, n, o]), {
    paymentSources: s,
    hasPaymentSources: Object.keys(s).length > 0,
    paymentSourceId: d,
    setPaymentSourceId: f,
    hasFetchedPaymentSources: c
  }
}