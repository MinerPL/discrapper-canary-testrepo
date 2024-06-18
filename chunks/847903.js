"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(470079),
  r = n(442837),
  s = n(570140),
  o = n(355467),
  a = n(314897),
  l = n(351402),
  u = n(853872);

function _() {
  let e = (0, r.e7)([u.Z], () => u.Z.getDefaultBillingCountryCode()),
    t = (0, r.e7)([l.Z], () => l.Z.ipCountryCode),
    n = (0, r.e7)([a.default], () => a.default.isAuthenticated());
  return i.useEffect(() => {
    s.Z.wait(() => {
      n && !l.Z.isPaymentSourceFetching && !u.Z.hasFetchedPaymentSources && o.tZ()
    })
  }, [n]), i.useEffect(() => {
    n && !l.Z.ipCountryCodeLoaded && o.GE()
  }, [t, n]), {
    defaultBillingCountryCode: e,
    ipCountryCode: t
  }
}