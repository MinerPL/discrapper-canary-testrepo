n.d(t, {
  l: function() {
return o;
  }
}), n(47120);
var a = n(399606),
  r = n(597688),
  s = n(267097);

function o(e) {
  (0, s.Z)();
  let [t, n] = (0, a.Wu)([r.Z], () => [
r.Z.isFetchingCategories,
r.Z.getCategoryForProduct(e)
  ]);
  return {
isFetching: t,
category: n
  };
}