"use strict";

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n.d(t, {
  Z: function() {
    return r
  }
});
class r {
  constructor(e, t) {
    i(this, "skuId", void 0), i(this, "skuFeatures", void 0), this.skuId = e, this.skuFeatures = t
  }
}