"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var s = n("735250");
n("470079");
var a = n("990547"),
  l = n("399606"),
  i = n("100527"),
  r = n("213609"),
  o = n("914010"),
  u = n("267101"),
  d = n("675297"),
  c = n("20281");

function f(e) {
  let {
    code: t
  } = e, [n, f] = t.split("-"), E = (0, u.useFetchGuildProductListing)(n, f), _ = (0, l.useStateFromStores)([o.default], () => o.default.getGuildId());
  return ((0, r.default)({
    type: c.ImpressionTypes.VIEW,
    name: a.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
    properties: {
      guild_product_listing_id: f,
      has_entitlement: (null == E ? void 0 : E.has_entitlement) === !0
    }
  }, {
    disableTrack: null == E
  }), null == E || _ !== n) ? null : (0, s.jsx)(d.GuildProductListingPublicCard, {
    guildProductListing: E,
    guildId: n,
    location: i.default.GUILD_PRODUCT_EMBED_CARD,
    cardWidth: 390,
    thumbnailHeight: 219
  })
}