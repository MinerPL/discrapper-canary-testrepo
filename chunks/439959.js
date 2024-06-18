"use strict";
n.d(t, {
  $0: function() {
    return i
  },
  Tm: function() {
    return E
  },
  oT: function() {
    return I
  }
}), n(47120), n(724458), n(653041);
var i, r, s = n(470079),
  o = n(399606),
  a = n(597688),
  l = n(1870),
  u = n(884697),
  _ = n(594174),
  d = n(74538),
  c = n(689938);
(r = i || (i = {})).PURCHASE = "purchase", r.PREMIUM_PURCHASE = "premium_purchase", r.PREVIEW = "preview", r.PREMIUM_PREVIEW = "premium_preview";
let E = {
    id: "None"
  },
  I = {
    id: "Shop"
  };
t.ZP = () => {
  let e = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
    t = d.ZP.canUseCollectibles(e),
    n = (0, o.e7)([l.Z], () => l.Z.purchases),
    [i, r] = (0, o.Wu)([a.Z], () => [a.Z.categories, a.Z.products]);
  return (0, s.useMemo)(() => {
    let e = (0, u.iC)(n, i).reduce((e, i) => {
      let s = n.get(i.skuId),
        o = (0, u.qS)(s);
      return (o && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), o) ? (e.premium_purchase.push(i), e) : null != s ? (e.purchase.push(i), e) : !t && (0, u.G1)(r.get(i.skuId)) ? ((e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(i), e) : (e.preview.push(i), e)
    }, {
      purchase: [],
      premium_purchase: [],
      preview: [],
      premium_preview: []
    });
    return [{
      section: "purchase",
      items: [E, I, ...e.purchase],
      height: 12,
      header: c.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: e.premium_purchase.length > 0 ? "premium_purchase" : "premium_preview",
      items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
      height: 12,
      header: c.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: e.preview,
      height: 12,
      header: c.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: t
      } = e;
      return t.length > 0
    })
  }, [i, r, n, t])
}