"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(979590),
  r = n.n(i),
  s = n(866442),
  o = n(81825);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = e => null == e ? e : {
  backgroundColors: e.background_colors.map(e => r()((0, s.Rf)(e))),
  buttonColors: e.button_colors.map(e => r()((0, s.Rf)(e))),
  confettiColors: e.confetti_colors.map(e => r()((0, s.Rf)(e)))
};
class u extends o.Z {
  static fromServer(e) {
    let {
      store_listing_id: t,
      sku_id: n,
      unpublished_at: i,
      styles: r,
      ...s
    } = e, o = null != i ? new Date(i) : null;
    return new u({
      ...s,
      storeListingId: t,
      skuId: n,
      unpublishedAt: o,
      styles: l(r)
    })
  }
  constructor(e) {
    super(), a(this, "storeListingId", void 0), a(this, "skuId", void 0), a(this, "name", void 0), a(this, "summary", void 0), a(this, "banner", void 0), a(this, "unpublishedAt", void 0), a(this, "styles", void 0), this.storeListingId = e.storeListingId, this.skuId = e.skuId, this.name = e.name, this.summary = e.summary, this.banner = e.banner, this.unpublishedAt = e.unpublishedAt, this.styles = e.styles
  }
}