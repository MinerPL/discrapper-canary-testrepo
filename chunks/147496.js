t.r(n), t.d(n, {
  ItemDetailsModal: function() {
return h;
  }
});
var i = t(735250);
t(470079);
var l = t(752843),
  r = t(442837),
  s = t(481060),
  o = t(55563),
  a = t(551428),
  c = t(73346),
  d = t(591759),
  u = t(110742),
  m = t(886253),
  S = t(680005),
  _ = t(938337),
  p = t(981631),
  f = t(689938);

function h(e) {
  var n, t, h, I;
  let {
onClose: x,
transitionState: v,
skuId: T,
appId: E,
onHeaderTitleClick: N
  } = e, g = (0, r.e7)([a.Z], () => a.Z.getForSKU(T), [T]), R = (0, r.e7)([o.Z], () => o.Z.get(T), [T]), j = (0, u.M)(T);
  if (null == R)
return null;
  let C = null !== (t = R.name) && void 0 !== t ? t : '',
L = null !== (h = null == g ? void 0 : null === (n = g.description) || void 0 === n ? void 0 : n.trim()) && void 0 !== h ? h : void 0,
O = (null == g ? void 0 : g.headerBackground) != null && null !== (I = d.Z.toURLSafe((0, c._W)(E, g.headerBackground, 256))) && void 0 !== I ? I : void 0,
A = R.type === p.epS.DURABLE && j,
b = R.type === p.epS.DURABLE ? A ? f.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : f.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
{
  price: Z
} = R;
  return null == Z ? null : (0, i.jsx)(m.A, {
appId: E,
skuId: R.id,
transitionState: v,
onHeaderTitleClick: null != N ? N : x,
onClose: x,
footer: (0, i.jsx)(S.Y, {
  appId: E,
  sku: R
}),
children: (0, i.jsx)(_.i, {
  appId: E,
  skuId: R.id,
  title: C,
  description: L,
  imgSrc: O,
  tag: null != b ? (0, i.jsx)(l.V, {
    text: b
  }) : void 0,
  FallbackIcon: s.TicketIcon
})
  });
}