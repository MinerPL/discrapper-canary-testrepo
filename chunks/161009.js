"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("446674"),
  r = n("845962"),
  l = n("501768"),
  s = n("235898");

function o() {
  let {
    isFetching: e,
    error: t,
    categories: n,
    purchases: o
  } = (0, s.default)(), [u, a, c] = (0, i.useStateFromStoresArray)([r.default], () => [r.default.isFetching, r.default.fetchError, r.default.profileEffects]);
  return (0, l.default)(!0), {
    isFetching: e || u,
    error: null != t ? t : a,
    profileEffects: c,
    categories: n,
    purchases: o
  }
}