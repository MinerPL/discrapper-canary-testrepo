var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(780384),
  l = n(481060),
  o = n(410030),
  c = n(197115),
  d = n(474936),
  _ = n(689938),
  u = n(997219);
t.Z = e => {
  let {
className: t,
forceWhite: n,
giftMessage: a,
subscriptionTier: E,
...T
  } = e, I = (0, o.ZP)(), R = (0, i.wj)(I) || n, C = R ? l.ButtonColors.WHITE : l.ButtonColors.BRAND, p = E === d.Si.TIER_0 ? _.Z.Messages.GIFT_NITRO_TIER_0 : _.Z.Messages.GIFT_NITRO;
  return (0, s.jsx)(c.Z, {
isGift: !0,
color: C,
look: l.ButtonLooks.OUTLINED,
buttonText: p,
giftMessage: a,
className: r()(t, u.giftButton, R ? u.buttonWhite : u.buttonBrand),
subscriptionTier: E,
...T
  });
};