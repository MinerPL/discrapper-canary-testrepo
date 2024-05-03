"use strict";
r.r(t), r.d(t, {
  useFetchCollectiblesProductCategory: function() {
    return s
  }
}), r("47120");
var o = r("470079"),
  n = r("399606"),
  a = r("335131"),
  l = r("597688");

function s(e) {
  let [t, r, s, i] = (0, n.useStateFromStoresArray)([l.default], () => {
    var t;
    return [l.default.isFetchingCategories, l.default.error, null !== (t = l.default.lastFetched) && void 0 !== t ? t : 0, l.default.getCategoryForProduct(e)]
  });
  return (0, o.useEffect)(() => {
    !(null != i || t || r || Date.now() - s < 6e5) && (0, a.fetchCollectiblesCategories)()
  }, [i, t, s, r]), {
    isFetching: t,
    category: i
  }
}