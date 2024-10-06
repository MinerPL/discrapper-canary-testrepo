n.d(t, {
    Cn: function () {
        return m;
    },
    R6: function () {
        return N;
    },
    Ue: function () {
        return T;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(942951),
    r = n(834129),
    o = n(703656),
    c = n(314897),
    d = n(271383),
    u = n(594174),
    _ = n(805519),
    E = n(689938);
let I = (e, t) => {
    let { joinRequest: n, joinRequestGuild: i } = (0, _.Z)(t.id),
        r = (0, s.e7)([u.default], () => u.default.getUser(null == n ? void 0 : n.userId)),
        E = (0, l.l)({
            user: r,
            channelId: t.id,
            guildId: t.guild_id,
            messageId: e.id
        }),
        I = (0, s.e7)([d.ZP, c.default], () => d.ZP.isMember(null == i ? void 0 : i.id, c.default.getId())),
        m = a.useCallback(() => {
            I && null != i && (0, o.XU)(i.id);
        }, [i, I]);
    return {
        guild: i,
        joinRequest: n,
        usernameHook: E,
        guildNameClick: m
    };
};
function m(e) {
    var t, a, s;
    let { message: l, channel: o, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: _, guildNameClick: m } = I(l, o);
    return (0, i.jsx)(r.Z, {
        icon: n(570111),
        timestamp: l.timestamp,
        compact: c,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_APPROVED_SYSTEM_MESSAGE.format({
            username: null !== (a = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== a ? a : '',
            usernameHook: _(),
            guildName: null !== (s = null == d ? void 0 : d.name) && void 0 !== s ? s : '',
            guildNameClick: m
        })
    });
}
function T(e) {
    var t, a, s;
    let { message: l, channel: o, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: _, guildNameClick: m } = I(l, o);
    return (0, i.jsx)(r.Z, {
        icon: n(474019),
        timestamp: l.timestamp,
        compact: c,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_REJECTED_SYSTEM_MESSAGE.format({
            username: null !== (a = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== a ? a : '',
            usernameHook: _(),
            guildName: null !== (s = null == d ? void 0 : d.name) && void 0 !== s ? s : '',
            guildNameClick: m
        })
    });
}
function N(e) {
    var t, a, s;
    let { message: l, channel: o, compact: c } = e,
        { guild: d, joinRequest: u, usernameHook: _, guildNameClick: m } = I(l, o);
    return (0, i.jsx)(r.Z, {
        icon: n(474019),
        timestamp: l.timestamp,
        compact: c,
        children: E.Z.Messages.GUILD_JOIN_REQUEST_WITHDRAWN_SYSTEM_MESSAGE.format({
            username: null !== (a = null == u ? void 0 : null === (t = u.user) || void 0 === t ? void 0 : t.username) && void 0 !== a ? a : '',
            usernameHook: _(),
            guildName: null !== (s = null == d ? void 0 : d.name) && void 0 !== s ? s : '',
            guildNameClick: m
        })
    });
}
