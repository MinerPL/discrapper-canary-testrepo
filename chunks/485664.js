"use strict";
E.r(t), E.d(t, {
  useShouldShowHelplineLink: function() {
    return r
  }
}), E("47120");
var _ = E("470079"),
  T = E("399606"),
  n = E("823162"),
  I = E("706454"),
  s = E("914788"),
  a = E("880257");
let i = new Set(["US"]),
  A = new Set(["en-US", "es-ES"]),
  r = () => {
    let e = (0, a.default)(),
      t = (0, T.useStateFromStores)([s.default], () => s.default.getUserCountry()),
      E = (0, T.useStateFromStores)([I.default], () => I.default.locale);
    return _.useEffect(() => {
      null == t && (0, n.fetchUserCountryCode)()
    }, [t]), !e && null != t && i.has(t.alpha2) && A.has(E)
  }