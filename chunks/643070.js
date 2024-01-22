"use strict";
r.r(t), r.d(t, {
  Section: function() {
    return n
  },
  NONE_ITEM: function() {
    return _
  },
  SHOP_ITEM: function() {
    return A
  },
  default: function() {
    return p
  }
}), r("222007"), r("808653"), r("424973");
var n, a, i = r("884691"),
  s = r("917351"),
  u = r("65597"),
  o = r("853987"),
  l = r("775416"),
  c = r("491232"),
  d = r("697218"),
  f = r("719923"),
  E = r("782340");
(a = n || (n = {})).PURCHASE = "purchase", a.PREMIUM_PURCHASE = "premium_purchase", a.PREVIEW = "preview", a.PREMIUM_PREVIEW = "premium_preview";
let _ = {
    id: "None"
  },
  A = {
    id: "Shop"
  };
var p = () => {
  let e = (0, u.default)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    r = (0, u.default)([l.default], () => l.default.purchases),
    [n, a] = (0, u.useStateFromStoresArray)([o.default], () => [o.default.categories, o.default.products]);
  return (0, i.useMemo)(() => {
    let e = (0, s.uniqBy)([...(0, c.getAvatarDecorationsFromPurchases)(r), ...(0, c.getAvatarDecorationsFromCategories)(n)], "id"),
      i = e.reduce((e, n) => {
        let i = r.get(n.skuId),
          s = (0, c.isPremiumCollectiblesPurchase)(i);
        if (s && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), s) return e.premium_purchase.push(n), e;
        if (null != i) return e.purchase.push(n), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(a.get(n.skuId))) {
          let t = e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview;
          return t.push(n), e
        }
        return e.preview.push(n), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: [],
        premium_preview: []
      });
    return [{
      section: "purchase",
      items: [_, A, ...i.purchase],
      height: 12,
      header: E.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: i.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
      items: i.premium_purchase.length > 0 ? i.premium_purchase : i.premium_preview,
      height: 12,
      header: E.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: i.preview,
      height: 12,
      header: E.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [n, a, r, t])
}