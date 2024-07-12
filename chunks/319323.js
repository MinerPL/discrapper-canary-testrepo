n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(270144),
  l = n(488915),
  o = n(171246),
  c = n(696906),
  d = n(981631),
  u = n(689938),
  _ = n(40896);

function E(e) {
  let {
applicationId: t,
guildId: n
  } = e, E = (0, r.IX)(t), {
listingsLoaded: I
  } = (0, r.FE)(t, null == E ? void 0 : E.primarySkuId), m = (0, a.e7)([l.Z], () => l.Z.getSubscriptionGroupListingForApplication(t), [t]), T = null != m ? (0, o.Pw)(m) : null, {
openModal: h,
canOpenModal: N
  } = (0, c.Z)({
guildId: n,
groupListingId: null == m ? void 0 : m.id,
showBenefitsFirst: !0,
analyticsLocation: d.Sbl.INTERACTION_RESPONSE,
skuId: null == T ? void 0 : T.id
  });
  return (0, i.jsx)(s.Button, {
color: s.Button.Colors.BRAND,
size: s.Button.Sizes.SMALL,
onClick: () => h(),
disabled: !N || !I,
children: (0, i.jsxs)('div', {
  className: _.button,
  children: [
    (0, i.jsx)(s.ShopIcon, {
      size: 'xs',
      color: 'white'
    }),
    u.Z.Messages.INTERACTION_PREMIUM_UPSELL_CTA
  ]
})
  });
}