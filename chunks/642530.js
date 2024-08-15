var i = t(735250);
t(470079);
var a = t(987209),
  r = t(598),
  s = t(248042),
  l = t(196567),
  o = t(474936),
  c = t(689938),
  u = t(430597);
n.Z = () => {
  let e = (0, s.Vi)(),
{
  selectedSkuId: n
} = (0, r.usePaymentContext)(),
{
  isGift: t
} = (0, a.wD)();
  return t || n !== o.Si.TIER_2 || !e ? null : (0, i.jsx)(l.Z, {
copy: c.Z.Messages.BOGO_PAYMENT_MODAL_BANNER_2024,
bannerImage: u,
hideGiftIcon: !0
  });
};