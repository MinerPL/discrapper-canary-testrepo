"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var s = n("37983");
n("884691");
var a = n("759843"),
  l = n("65597"),
  i = n("812204"),
  r = n("428958"),
  o = n("162771"),
  u = n("442379"),
  d = n("858291"),
  c = n("660516");

function E(e) {
  let {
    code: t
  } = e, [n, E] = t.split("-"), f = (0, u.useFetchGuildProductListing)(n, E), _ = (0, l.useStateFromStores)([o.default], () => o.default.getGuildId());
  return ((0, r.default)({
    type: c.ImpressionTypes.VIEW,
    name: a.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: E,
      has_entitlement: (null == f ? void 0 : f.has_entitlement) === !0
    }
  }, {
    disableTrack: null == f
  }), null == f || _ !== n) ? null : (0, s.jsx)(d.GuildProductListingPublicCard, {
    guildProductListing: f,
    guildId: n,
    location: i.default.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}