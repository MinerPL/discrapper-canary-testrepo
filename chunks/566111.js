"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
}), l("47120");
var s = l("470079"),
  a = l("442837"),
  r = l("25251"),
  n = l("996678"),
  i = l("223143");

function o() {
  let {
    isFetching: e,
    error: t,
    categories: l,
    purchases: o
  } = (0, i.default)(), [u, c, d] = (0, a.useStateFromStoresArray)([r.default], () => [r.default.isFetching, r.default.fetchError, r.default.profileEffects]);
  return s.useEffect(() => {
    (0, n.getOrFetchProfileEffects)()
  }, []), {
    isFetching: e || u,
    error: null != t ? t : c,
    profileEffects: d,
    categories: l,
    purchases: o
  }
}