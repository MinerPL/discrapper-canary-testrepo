n.d(t, {
    r: function () {
        return u;
    }
});
var r = n(100527), i = n(6025), a = n(897473), o = n(545408), s = n(189357), l = n(50493);
function u(e, t, n) {
    var u, c, d;
    let _ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { modViewPanel: l.k.INFO };
    if (!(0, s.By)(e))
        return Promise.resolve();
    let E = null !== (u = _.modViewPanel) && void 0 !== u ? u : l.k.INFO, f = null !== (c = _.sourceLocation) && void 0 !== c ? c : r.Z.MEMBER_SAFETY_PAGE;
    return (0, o.q)(e, t, E, f), i.Z.openGuildSidebar({
        guildId: e,
        baseChannelId: n,
        sidebarType: a.jL.GUILD_MEMBER_MOD_VIEW,
        details: {
            type: a.Ff.GUILD_MEMBER_MOD_VIEW,
            userId: t,
            guildId: e,
            ..._,
            modViewPanel: null !== (d = _.modViewPanel) && void 0 !== d ? d : l.k.INFO
        }
    });
}
