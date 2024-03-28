"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("399606"),
  r = n("481060"),
  o = n("607070"),
  u = n("430824"),
  d = n("976644"),
  c = n("506071"),
  f = n("267101"),
  E = n("240864"),
  _ = n("57949"),
  T = n("400916"),
  m = n("689938");

function I(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: a
  } = e, I = (0, i.useStateFromStores)([E.default], () => E.default.getGuildProduct(n)), p = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), h = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), N = (0, c.useIsWindowFocused)();
  if (l()(null != p, "guild cannot be null"), l()(null != I, "guildProductListing cannot be null"), (0, f.useCanManageGuildProduct)(p)) return (0, s.jsx)(r.Tooltip, {
    text: m.default.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
    children: e => (0, s.jsx)(r.Button, {
      ...e,
      color: r.Button.Colors.BRAND,
      disabled: !0,
      children: m.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
    })
  });
  if (!I.has_entitlement) return (0, s.jsx)(d.default, {
    shineSize: d.default.ShineSizes.SMALL,
    pauseAnimation: h || !N,
    onClick: () => (0, _.openGuildProductPurchaseModal)({
      guildProductListing: I,
      guildId: p.id,
      sourceAnalyticsLocations: a
    }),
    children: m.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  });
  return null != I.attachments ? (0, s.jsx)(T.default, {
    guildId: p.id,
    productId: I.id
  }) : (0, s.jsx)(r.Button, {
    color: r.Button.Colors.PRIMARY,
    disabled: !0,
    children: m.default.Messages.GUILD_PRODUCT_CARD_PURCHASED
  })
}