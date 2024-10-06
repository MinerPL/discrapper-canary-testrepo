n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var l = n(266067),
    r = n(442837),
    a = n(481060),
    s = n(893607),
    o = n(601964),
    c = n(701190),
    u = n(836040),
    d = n(603592),
    h = n(981631),
    p = n(689938);
function f(e) {
    var t;
    let { isOnHubVerificationRoute: n } = e,
        f = (0, l.LX)(null !== (t = window.location.pathname) && void 0 !== t ? t : '', { path: h.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(s.Hw.guildId(), ':inviteCode') }),
        _ = (0, r.e7)([c.Z], () => {
            if (null == f) return null;
            let { inviteCode: e } = f.params;
            return null != e ? c.Z.getInvite(e) : null;
        }),
        m = (null == _ ? void 0 : _.guild) != null ? new o.ZP(null == _ ? void 0 : _.guild) : null;
    return n
        ? null != m && null != _
            ? (0, i.jsx)(u.Z, {
                  guild: m,
                  invite: _
              })
            : (0, i.jsx)(d.Z, {
                  tooltip: p.Z.Messages.HUB_DISCORD_HUBS,
                  id: 'guild-hub-button',
                  icon: a.HubIcon
              })
        : null;
}
