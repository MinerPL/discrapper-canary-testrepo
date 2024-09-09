n.d(t, {
    Z: function () {
        return _;
    }
});
var s = n(735250);
n(470079);
var a = n(399606),
    i = n(481060),
    r = n(725803),
    l = n(999382),
    o = n(352981),
    c = n(469351),
    d = n(981631),
    u = n(674563);
function _() {
    let e = (0, a.e7)([l.Z], () => l.Z.getGuild()),
        t = (0, o.y)(null == e ? void 0 : e.id, 'guild_product_settings'),
        { application: n, loading: _ } = (0, r.Z)(null == e ? void 0 : e.id, u.wW.GUILD_ROLE_SUBSCRIPTIONS),
        I = null != n && (null == e ? void 0 : e.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
    return (0, s.jsx)('main', {
        children:
            null == e || !t || _
                ? (0, s.jsx)(i.Spinner, {})
                : (0, s.jsx)(c.t, {
                      guildId: e.id,
                      hasValidApplication: I
                  })
    });
}
