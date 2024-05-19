"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("724458"), n("627341"), n("653041");
var i = n("278074"),
  r = n("979554"),
  a = n("922347"),
  s = n("587177"),
  o = n("311850"),
  l = n("803358"),
  u = n("212161"),
  d = n("981631");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class c extends l.default {
  static fromServer(e) {
    let {
      type: t,
      premium_type: n,
      category_sku_id: l,
      prices: _,
      bundled_products: E,
      ...I
    } = e;
    return new c({
      ...super.fromServer(I),
      type: t,
      premiumType: n === d.PREMIUM_TYPE_NONE ? null : n,
      categorySkuId: l,
      prices: (0, o.getPricesFromServer)(_),
      items: I.items.reduce((e, t) => (0, i.match)(t).with({
        type: r.CollectiblesItemType.AVATAR_DECORATION
      }, t => (e.push(a.default.fromServer(t)), e)).with({
        type: r.CollectiblesItemType.PROFILE_EFFECT
      }, t => (e.push(u.default.fromServer(t)), e)).otherwise(() => e), []),
      bundledProducts: null == E ? void 0 : E.map(s.default.fromServer)
    })
  }
  constructor(e) {
    super(e), _(this, "prices", void 0), _(this, "type", void 0), _(this, "premiumType", void 0), _(this, "items", void 0), _(this, "categorySkuId", void 0), _(this, "bundledProducts", void 0), this.summary = e.summary, this.type = e.type, this.premiumType = e.premiumType, this.items = e.items, this.categorySkuId = e.categorySkuId, this.prices = e.prices, this.bundledProducts = e.bundledProducts
  }
}