"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("37983");
n("884691");
var a = n("627445"),
  l = n.n(a),
  i = n("65597"),
  r = n("77078"),
  o = n("206230"),
  u = n("305961"),
  d = n("181114"),
  c = n("866190"),
  E = n("442379"),
  f = n("565559"),
  _ = n("777133"),
  T = n("407417"),
  I = n("782340");

function m(e) {
  let {
    guildId: t,
    guildProductListingId: n,
    sourceAnalyticsLocations: a
  } = e, m = (0, i.useStateFromStores)([f.default], () => f.default.getGuildProduct(n)), N = (0, i.useStateFromStores)([u.default], () => u.default.getGuild(t), [t]), p = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), S = (0, c.useIsWindowFocused)();
  l(null != N, "guild cannot be null"), l(null != m, "guildProductListing cannot be null");
  let C = (0, E.useCanManageGuildProduct)(N);
  if (C) return (0, s.jsx)(r.Tooltip, {
    text: I.default.Messages.GUILD_PRODUCT_PURCHASE_DISABLED_TOOLTIP,
    children: e => (0, s.jsx)(r.Button, {
      ...e,
      color: r.Button.Colors.BRAND,
      disabled: !0,
      children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
    })
  });
  if (!m.has_entitlement) return (0, s.jsx)(d.default, {
    shineSize: d.default.ShineSizes.SMALL,
    pauseAnimation: p || !S,
    onClick: () => (0, _.openGuildProductPurchaseModal)({
      guildProductListing: m,
      guildId: N.id,
      sourceAnalyticsLocations: a
    }),
    children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASE_BUTTON
  });
  {
    let e = null != m.attachments;
    return e ? (0, s.jsx)(T.default, {
      guildId: N.id,
      productId: m.id
    }) : (0, s.jsx)(r.Button, {
      color: r.Button.Colors.PRIMARY,
      disabled: !0,
      children: I.default.Messages.GUILD_PRODUCT_CARD_PURCHASED
    })
  }
}