"use strict";
n.r(t), n.d(t, {
  useFetchCollectiblesProduct: function() {
    return o
  }
}), n("47120");
var i = n("470079"),
  s = n("399606"),
  a = n("55563"),
  l = n("335131"),
  r = n("597688"),
  u = n("981631");

function o(e) {
  let t = (0, s.useStateFromStores)([a.default], () => null != e ? a.default.get(e) : null),
    n = null != t && t.productLine !== u.SKUProductLines.COLLECTIBLES,
    [o, c] = (0, s.useStateFromStoresArray)([r.default], () => [r.default.isFetching, r.default.getProduct(e)]);
  return (0, i.useEffect)(() => {
    null != e && null == c && !n && !o && (0, l.fetchCollectiblesProduct)(e)
  }, [e, c, n, o]), {
    product: c,
    isFetching: o
  }
}