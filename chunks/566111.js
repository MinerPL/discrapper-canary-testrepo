"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
}), l("47120");
var s = l("470079"),
  a = l("442837"),
  n = l("365943"),
  r = l("25251"),
  i = l("223143");

function u() {
  let {
    isFetching: e,
    error: t,
    categories: l,
    purchases: u
  } = (0, i.default)(), [o, c, d] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.isFetching, r.default.fetchError, r.default.profileEffects]);
  return s.useEffect(() => {
    (0, n.fetchUserProfileEffects)(!0)
  }, []), {
    isFetching: e || o,
    error: null != t ? t : c,
    profileEffects: d,
    categories: l,
    purchases: u
  }
}