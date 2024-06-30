n.d(t, {
    Z: function () {
        return _;
    }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(990547), s = n(399606), l = n(100527), r = n(213609), o = n(914010), c = n(267101), d = n(675297), u = n(20281);
function _(e) {
    let {code: t} = e, [n, _] = t.split('-'), E = (0, c.hO)(n, _), m = (0, s.e7)([o.Z], () => o.Z.getGuildId());
    return ((0, r.Z)({
        type: u.n.VIEW,
        name: a.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
        properties: {
            guild_product_listing_id: _,
            has_entitlement: (null == E ? void 0 : E.has_entitlement) === !0
        }
    }, { disableTrack: null == E }), null == E || m !== n) ? null : (0, i.jsx)(d.H, {
        guildProductListing: E,
        guildId: n,
        location: l.Z.GUILD_PRODUCT_EMBED_CARD,
        cardWidth: 390,
        thumbnailHeight: 219
    });
}
