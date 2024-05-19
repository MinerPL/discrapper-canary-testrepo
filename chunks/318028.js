"use strict";
r.r(t), r.d(t, {
  useFetchCollectiblesProductCategory: function() {
    return l
  }
}), r("47120");
var o = r("399606"),
  n = r("597688"),
  a = r("223143");

function l(e) {
  (0, a.useMaybeFetchCollectiblesCategories)();
  let [t, r] = (0, o.useStateFromStoresArray)([n.default], () => [n.default.isFetchingCategories, n.default.getCategoryForProduct(e)]);
  return {
    isFetching: t,
    category: r
  }
}