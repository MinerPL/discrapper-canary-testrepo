s.d(t, {
    r: function () {
        return c;
    }
});
var n = s(470079), a = s(442837), i = s(430824), r = s(594174), o = s(645896), l = s(353093);
function c(e) {
    var t, s;
    let {userId: c} = e, d = (0, a.e7)([r.default], () => {
            var e;
            return null === (e = r.default.getUser(c)) || void 0 === e ? void 0 : e.clan;
        }), {
            tag: _,
            badge: E,
            guildId: u
        } = (0, l.vh)(d);
    n.useEffect(() => {
        (0, o._S)(u);
    }, [u]);
    let T = (0, o.Cc)(null == d ? void 0 : d.identityGuildId), I = (0, a.e7)([i.Z], () => i.Z.getGuild(null == d ? void 0 : d.identityGuildId));
    return {
        userClanTag: _,
        userClanBadge: E,
        guildId: u,
        guildName: null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : null == T ? void 0 : T.name,
        guildIcon: null !== (s = null == I ? void 0 : I.icon) && void 0 !== s ? s : null == T ? void 0 : T.icon,
        clan: T
    };
}
