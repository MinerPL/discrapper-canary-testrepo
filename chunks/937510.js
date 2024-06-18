"use strict";
t.d(s, {
  l: function() {
    return d
  }
}), t(47120), t(653041);
var n, a, i = t(470079),
  l = t(952639),
  r = t.n(l),
  o = t(399606),
  c = t(1870),
  u = t(724994);
(a = n || (n = {}))[a.NOT_PURCHASED = 0] = "NOT_PURCHASED", a[a.PARTIAL_PURCHASED = 1] = "PARTIAL_PURCHASED", a[a.PURCHASED = 2] = "PURCHASED";
let d = e => {
  let s = (0, o.e7)([c.Z], () => c.Z.purchases);
  return (0, i.useMemo)(() => {
    let s = [
      [],
      [],
      []
    ];
    for (let t of e.values()) {
      let {
        isPurchased: e,
        isPartiallyPurchased: n
      } = (0, u.U)(c.Z, t);
      s[n ? 1 : e ? 2 : 0].push(t)
    }
    return r()(s)
  }, [s, e])
}