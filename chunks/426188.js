"use strict";
s.r(e), s.d(e, {
  useFetchCollectiblesProduct: function() {
    return u
  }
}), s("222007");
var l = s("884691"),
  i = s("65597"),
  a = s("552712"),
  n = s("21526"),
  r = s("853987"),
  o = s("49111");

function u(t) {
  let e = (0, i.useStateFromStores)([a.default], () => null != t ? a.default.get(t) : null),
    s = null != e && e.productLine !== o.SKUProductLines.COLLECTIBLES,
    [u, d] = (0, i.useStateFromStoresArray)([r.default], () => [r.default.isFetching, r.default.getProduct(t)]);
  return (0, l.useEffect)(() => {
    null != t && null == d && !s && !u && (0, n.fetchCollectiblesProduct)(t)
  }, [t, d, s, u]), {
    product: d,
    isFetching: u
  }
}