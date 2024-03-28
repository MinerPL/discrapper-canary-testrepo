"use strict";
a.r(t), a.d(t, {
  NONE_ITEM: function() {
    return h
  },
  SHOP_ITEM: function() {
    return m
  },
  Section: function() {
    return s
  }
}), a("47120"), a("724458"), a("653041");
var s, r, l = a("470079"),
  i = a("399606"),
  n = a("597688"),
  o = a("1870"),
  u = a("884697"),
  c = a("594174"),
  d = a("74538"),
  f = a("689938");
(r = s || (s = {})).PURCHASE = "purchase", r.PREMIUM_PURCHASE = "premium_purchase", r.PREVIEW = "preview", r.PREMIUM_PREVIEW = "premium_preview";
let h = {
    id: "None"
  },
  m = {
    id: "Shop"
  };
t.default = () => {
  let e = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    t = d.default.canUseCollectibles(e),
    a = (0, i.useStateFromStores)([o.default], () => o.default.purchases),
    [s, r] = (0, i.useStateFromStoresArray)([n.default], () => [n.default.categories, n.default.products]);
  return (0, l.useMemo)(() => {
    let e = (0, u.getAvatarDecorations)(a, s).reduce((e, s) => {
      let l = a.get(s.skuId),
        i = (0, u.isPremiumCollectiblesPurchase)(l);
      return (i && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), i) ? (e.premium_purchase.push(s), e) : null != l ? (e.purchase.push(s), e) : !t && (0, u.isPremiumCollectiblesProduct)(r.get(s.skuId)) ? ((e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(s), e) : (e.preview.push(s), e)
    }, {
      purchase: [],
      premium_purchase: [],
      preview: [],
      premium_preview: []
    });
    return [{
      section: "purchase",
      items: [h, m, ...e.purchase],
      height: 12,
      header: f.default.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: e.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
      items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
      height: 12,
      header: f.default.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: e.preview,
      height: 12,
      header: f.default.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [s, r, a, t])
}