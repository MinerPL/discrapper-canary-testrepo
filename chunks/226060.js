n.d(t, {
  Z: function() {
return T;
  }
});
var i = n(735250);
n(470079);
var a = n(512722),
  s = n.n(a),
  r = n(399606),
  l = n(481060),
  o = n(607070),
  c = n(430824),
  d = n(506071),
  u = n(267101),
  _ = n(240864),
  E = n(57949),
  I = n(400916),
  m = n(689938);

function T(e) {
  let {
guildId: t,
guildProductListingId: n,
sourceAnalyticsLocations: a
  } = e, T = (0, r.e7)([_.Z], () => _.Z.getGuildProduct(n)), h = (0, r.e7)([c.Z], () => c.Z.getGuild(t), [t]), N = (0, r.e7)([o.Z], () => o.Z.useReducedMotion), f = (0, d.n)();
  if (s()(null != h, 'guild cannot be null'), s()(null != T, 'guildProductListing cannot be null'), (0, u.SO)(h))
return (0, i.jsx)(l.Tooltip, {
  text: m.Z.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
  children: e => (0, i.jsx)(l.Button, {
    ...e,
    color: l.Button.Colors.BRAND,
    disabled: !0,
    children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  })
});
  if (!T.has_entitlement)
return (0, i.jsx)(l.ShinyButton, {
  shineSize: l.ShinyButton.ShineSizes.SMALL,
  pauseAnimation: N || !f,
  onClick: () => (0, E.z)({
    guildProductListing: T,
    guildId: h.id,
    sourceAnalyticsLocations: a
  }),
  children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
});
  return null != T.attachments ? (0, i.jsx)(I.Z, {
guildId: h.id,
productId: T.id
  }) : (0, i.jsx)(l.Button, {
color: l.Button.Colors.PRIMARY,
disabled: !0,
children: m.Z.Messages.GUILD_PRODUCT_CARD_PURCHASED
  });
}