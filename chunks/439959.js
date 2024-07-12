n.d(t, {
  $0: function() {
return r;
  },
  Tm: function() {
return E;
  },
  oT: function() {
return f;
  }
}), n(47120), n(724458), n(653041);
var r, i, a = n(470079),
  o = n(399606),
  s = n(597688),
  l = n(1870),
  u = n(884697),
  c = n(594174),
  d = n(74538),
  _ = n(689938);
(i = r || (r = {})).PURCHASE = 'purchase', i.PREMIUM_PURCHASE = 'premium_purchase', i.PREVIEW = 'preview', i.PREMIUM_PREVIEW = 'premium_preview';
let E = {
id: 'None'
  },
  f = {
id: 'Shop'
  };
t.ZP = () => {
  let e = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
t = d.ZP.canUseCollectibles(e),
n = (0, o.e7)([l.Z], () => l.Z.purchases),
[r, i] = (0, o.Wu)([s.Z], () => [
  s.Z.categories,
  s.Z.products
]);
  return (0, a.useMemo)(() => {
let e = (0, u.iC)(n, r).reduce((e, r) => {
  let a = n.get(r.skuId),
    o = (0, u.qS)(a);
  return (o && 0 === e.premium_purchase.length && (e.premium_purchase = e.premium_preview, e.premium_preview = []), o) ? (e.premium_purchase.push(r), e) : null != a ? (e.purchase.push(r), e) : !t && (0, u.G1)(i.get(r.skuId)) ? ((e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview).push(r), e) : (e.preview.push(r), e);
}, {
  purchase: [],
  premium_purchase: [],
  preview: [],
  premium_preview: []
});
return [{
    section: 'purchase',
    items: [
      E,
      f,
      ...e.purchase
    ],
    height: 12,
    header: _.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
  },
  {
    section: e.premium_purchase.length > 0 ? 'premium_purchase' : 'premium_preview',
    items: e.premium_purchase.length > 0 ? e.premium_purchase : e.premium_preview,
    height: 12,
    header: _.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
  },
  {
    section: 'preview',
    items: e.preview,
    height: 12,
    header: _.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
  }
].filter(e => {
  let {
    items: t
  } = e;
  return t.length > 0;
});
  }, [
r,
i,
n,
t
  ]);
};