n(47120);
var r = n(399606),
  i = n(597688),
  a = n(1870);
t.Z = e => {
  let [t, n] = (0, r.Wu)([i.Z], () => [
i.Z.getCategoryForProduct(e),
i.Z.getProduct(e)
  ]);
  return {
category: t,
product: n,
purchase: (0, r.e7)([a.Z], () => a.Z.getPurchase(e))
  };
};