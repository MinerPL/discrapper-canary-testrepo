"use strict";
n.r(t), n.d(t, {
  Section: function() {
    return r
  },
  NONE_ITEM: function() {
    return E
  },
  SHOP_ITEM: function() {
    return v
  },
  default: function() {
    return m
  }
}), n("222007"), n("808653"), n("424973");
var r, i, s = n("884691"),
  l = n("917351"),
  a = n("65597"),
  o = n("853987"),
  u = n("775416"),
  c = n("491232"),
  d = n("697218"),
  f = n("719923"),
  h = n("782340");
(i = r || (r = {})).PURCHASE = "purchase", i.PREMIUM_PURCHASE = "premium_purchase", i.PREVIEW = "preview";
let E = {
    id: "None"
  },
  v = {
    id: "Shop"
  };
var m = () => {
  let e = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    n = (0, a.useStateFromStores)([u.default], () => u.default.purchases),
    [r, i] = (0, a.useStateFromStoresArray)([o.default], () => [o.default.categories, o.default.products]);
  return (0, s.useMemo)(() => {
    let e = (0, l.uniqBy)([...(0, c.getProfileEffectsFromPurchases)(n), ...(0, c.getProfileEffectsFromCategories)(r)], "id"),
      s = e.reduce((e, r) => {
        let s = n.get(r.skuId),
          l = (0, c.isPremiumCollectiblesPurchase)(s);
        if (l) return e.premium_purchase.push(r), e;
        if (null != s) return e.purchase.push(r), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(i.get(r.skuId))) {
          let t = e.premium_purchase;
          return t.push(r), e
        }
        return e.preview.push(r), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
    return [{
      section: "purchase",
      items: [E, v, ...s.purchase],
      height: 12,
      header: h.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: "premium_purchase",
      items: s.premium_purchase,
      height: 12,
      header: h.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: s.preview,
      height: 12,
      header: h.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [r, i, n, t])
}