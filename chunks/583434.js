"use strict";
n.d(t, {
  T: function() {
    return u
  }
}), n(47120);
var i = n(470079),
  r = n(399606),
  s = n(55563),
  o = n(335131),
  a = n(597688),
  l = n(981631);

function u(e) {
  let t = (0, r.e7)([s.Z], () => null != e ? s.Z.get(e) : null),
    n = null != t && t.productLine !== l.POd.COLLECTIBLES,
    [u, _] = (0, r.Wu)([a.Z], () => [a.Z.isFetchingProduct(e), a.Z.getProduct(e)]);
  return (0, i.useEffect)(() => {
    if (null != e && null == _ && !n && !u)(0, o.jr)(e)
  }, [e, _, n, u]), {
    product: _,
    isFetching: u
  }
}