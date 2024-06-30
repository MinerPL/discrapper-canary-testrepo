n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(906732), s = n(189432), l = n(189357), u = n(434404), c = n(314897), d = n(944486), _ = n(785717), E = n(993409), f = n(176505), h = n(50493), p = n(689938);
function m(e) {
    let {
            user: t,
            guildId: n,
            channelId: m,
            onClose: I
        } = e, {trackUserProfileAction: T} = (0, _.KZ)(), {newestAnalyticsLocation: g} = (0, o.ZP)(), S = (0, i.e7)([c.default], () => c.default.getId() === (null == t ? void 0 : t.id)), A = (0, l.ms)(null != n ? n : null, !0), N = (0, i.e7)([d.Z], () => null != m ? m : d.Z.getChannelId(n, !0), [
            m,
            n
        ]);
    return null == n || !A || S ? null : (0, r.jsx)(E.Z, {
        variant: 'banner',
        icon: a.ModerationIcon,
        text: p.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE,
        onClick: () => {
            u.Z.close(), T({ action: 'PRESS_MOD_VIEW' }), (0, s.r)(n, t.id, null != N ? N : f.oC.MEMBER_SAFETY, {
                modViewPanel: h.k.INFO,
                sourceLocation: g
            }), null == I || I();
        }
    });
}
