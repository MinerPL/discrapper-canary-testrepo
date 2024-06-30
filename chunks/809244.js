n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(687516), a = n(5192), l = n(689938);
function s(e, t, n) {
    let s = (0, i.Cf)(n), r = a.ZP.getName(e.getGuildId(), e.id, t);
    return null == n ? r : (null == s ? void 0 : s.name) != null ? l.Z.Messages.GO_LIVE_USER_PLAYING.format({
        applicationName: null == s ? void 0 : s.name,
        username: r
    }) : l.Z.Messages.GO_LIVE_TILE_SCREEN.format({ username: r });
}
