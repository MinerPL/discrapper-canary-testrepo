"use strict";
n.r(t), n.d(t, {
  Section: function() {
    return i
  },
  NONE_ITEM: function() {
    return v
  },
  SHOP_ITEM: function() {
    return m
  },
  default: function() {
    return C
  }
}), n("222007"), n("808653"), n("424973");
var i, r, l = n("884691"),
  s = n("917351"),
  o = n("65597"),
  u = n("853987"),
  a = n("775416"),
  c = n("491232"),
  d = n("697218"),
  f = n("719923"),
  h = n("782340");
(r = i || (i = {})).PURCHASE = "purchase", r.PREMIUM_PURCHASE = "premium_purchase", r.PREVIEW = "preview";
let v = {
    id: "None"
  },
  m = {
    id: "Shop"
  };
var C = () => {
  let e = (0, o.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    t = f.default.canUseCollectibles(e),
    n = (0, o.useStateFromStores)([a.default], () => a.default.purchases),
    [i, r] = (0, o.useStateFromStoresArray)([u.default], () => [u.default.categories, u.default.products]);
  return (0, l.useMemo)(() => {
    let e = (0, s.uniqBy)([...(0, c.getProfileEffectsFromPurchases)(n), ...(0, c.getProfileEffectsFromCategories)(i)], "id"),
      l = e.reduce((e, i) => {
        let l = n.get(i.skuId),
          s = (0, c.isPremiumCollectiblesPurchase)(l);
        if (s) return e.premium_purchase.push(i), e;
        if (null != l) return e.purchase.push(i), e;
        if (!t && (0, c.isPremiumCollectiblesProduct)(r.get(i.skuId))) {
          let t = e.premium_purchase;
          return t.push(i), e
        }
        return e.preview.push(i), e
      }, {
        purchase: [],
        premium_purchase: [],
        preview: []
      });
    return [{
      section: "purchase",
      items: [v, m, ...l.purchase],
      height: 12,
      header: h.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: "premium_purchase",
      items: l.premium_purchase,
      height: 12,
      header: h.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: l.preview,
      height: 12,
      header: h.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [i, r, n, t])
}