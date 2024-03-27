"use strict";
E.r(t), E.d(t, {
  useShouldShowHelplineLink: function() {
    return r
  }
}), E("222007");
var _ = E("884691"),
  T = E("65597"),
  n = E("16108"),
  I = E("915639"),
  s = E("822825"),
  a = E("775032");
let A = new Set(["US"]),
  i = new Set(["en-US", "es-ES"]),
  r = () => {
    let e = (0, a.default)(),
      t = (0, T.useStateFromStores)([s.default], () => s.default.getUserCountry()),
      E = (0, T.useStateFromStores)([I.default], () => I.default.locale);
    return _.useEffect(() => {
      null == t && (0, n.fetchUserCountryCode)()
    }, [t]), !e && null != t && A.has(t.alpha2) && i.has(E)
  }