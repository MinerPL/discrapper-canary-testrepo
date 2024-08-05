n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(990547),
  a = n(399606),
  r = n(100527),
  l = n(213609),
  o = n(914010),
  c = n(267101),
  u = n(675297),
  d = n(20281);

function _(e) {
  let {
code: t
  } = e, [n, _] = t.split('-'), E = (0, c.hO)(n, _), I = (0, a.e7)([o.Z], () => o.Z.getGuildId());
  return ((0, l.Z)({
type: d.n.VIEW,
name: s.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
properties: {
  guild_product_listing_id: _,
  has_entitlement: (null == E ? void 0 : E.has_entitlement) === !0
}
  }, {
disableTrack: null == E
  }), null == E || I !== n) ? null : (0, i.jsx)(u.H, {
guildProductListing: E,
guildId: n,
location: r.Z.GUILD_PRODUCT_EMBED_CARD,
cardWidth: 390,
thumbnailHeight: 219
  });
}