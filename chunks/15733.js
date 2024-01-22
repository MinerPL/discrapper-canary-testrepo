"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var i = n("884691"),
  r = n("446674"),
  u = n("913144"),
  o = n("850068"),
  l = n("271938"),
  a = n("160299"),
  s = n("357957");

function c() {
  let e = (0, r.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
    t = (0, r.useStateFromStores)([a.default], () => a.default.ipCountryCode),
    n = (0, r.useStateFromStores)([l.default], () => l.default.isAuthenticated());
  return i.useEffect(() => {
    u.default.wait(() => {
      n && !a.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && o.fetchPaymentSources()
    })
  }, [n]), i.useEffect(() => {
    n && !a.default.ipCountryCodeLoaded && o.fetchIpCountryCode()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}