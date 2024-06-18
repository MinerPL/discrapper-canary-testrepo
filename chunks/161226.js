"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(778787);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class s extends i.Z {
  static fromServer(e) {
    let {
      purchased_at: t,
      purchase_type: n,
      ...i
    } = e;
    return new s({
      ...super.fromServer(i),
      purchaseType: n,
      purchasedAt: null != t ? new Date(t) : t
    })
  }
  constructor(e) {
    super(e), r(this, "purchaseType", void 0), r(this, "purchasedAt", void 0), this.purchasedAt = e.purchasedAt, this.purchaseType = e.purchaseType
  }
}