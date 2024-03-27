"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("222007");
var i = n("884691"),
  r = n("446674"),
  l = n("845962"),
  s = n("501768"),
  o = n("235898");

function u() {
  let {
    isFetching: e,
    error: t,
    categories: n,
    purchases: u
  } = (0, o.default)(), [a, c, d] = (0, r.useStateFromStoresArray)([l.default], () => [l.default.isFetching, l.default.fetchError, l.default.profileEffects]);
  return i.useEffect(() => {
    (0, s.getOrFetchProfileEffects)()
  }, []), {
    isFetching: e || a,
    error: null != t ? t : c,
    profileEffects: d,
    categories: n,
    purchases: u
  }
}