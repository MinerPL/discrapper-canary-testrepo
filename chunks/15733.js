"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var u = n("884691"),
  r = n("446674"),
  i = n("913144"),
  a = n("850068"),
  o = n("271938"),
  s = n("160299"),
  c = n("357957");

function l() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.getDefaultBillingCountryCode()),
    t = (0, r.useStateFromStores)([s.default], () => s.default.ipCountryCode),
    n = (0, r.useStateFromStores)([o.default], () => o.default.isAuthenticated());
  return u.useEffect(() => {
    i.default.wait(() => {
      n && !s.default.isPaymentSourceFetching && !c.default.hasFetchedPaymentSources && a.fetchPaymentSources()
    })
  }, [n]), u.useEffect(() => {
    n && !s.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}