n.d(t, {
    KF: function () {
        return f;
    },
    e4: function () {
        return E;
    },
    g5: function () {
        return h;
    },
    jy: function () {
        return i;
    }
});
var r,
    i,
    a = n(442837),
    s = n(592125),
    o = n(430824),
    l = n(496675),
    u = n(979651),
    c = n(782769),
    d = n(981631),
    _ = n(689938);
function E(e) {
    let { channelId: t, ChannelStore: n, GuildStore: r, PermissionStore: i, VoiceStateStore: a } = e,
        s = n.getChannel(t);
    if (null == s) return 3;
    if (!(0, c.a)(s)) return 6;
    if (!s.isPrivate()) {
        let e = s.getGuildId();
        if (null == e) return 4;
        let n = r.getGuild(e);
        if ((null == n ? void 0 : n.afkChannelId) === s.id) return 5;
        let o = i.can(d.Plq.CONNECT, s);
        if (!i.can(d.Plq.USE_EMBEDDED_ACTIVITIES, s)) return 1;
        let l = a.getCurrentClientVoiceChannelId(s.getGuildId()) === t;
        if (s.isVocal() && !l && !o) return 2;
    }
    return 0;
}
function f(e) {
    return (0, a.e7)(
        [s.Z, o.Z, l.Z, u.Z],
        () =>
            E({
                channelId: e,
                ChannelStore: s.Z,
                GuildStore: o.Z,
                PermissionStore: l.Z,
                VoiceStateStore: u.Z
            }),
        [e]
    );
}
function h(e) {
    switch (e) {
        case 0:
            return _.Z.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY;
        case 1:
            return _.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS;
        default:
            return _.Z.Messages.EMBEDDED_ACTIVITIES_INVALID_CHANNEL;
    }
}
((r = i || (i = {}))[(r.CAN_LAUNCH = 0)] = 'CAN_LAUNCH'), (r[(r.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION = 1)] = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'), (r[(r.NO_CHANNEL_CONNECT_PERMISSION = 2)] = 'NO_CHANNEL_CONNECT_PERMISSION'), (r[(r.NO_CHANNEL = 3)] = 'NO_CHANNEL'), (r[(r.NO_GUILD = 4)] = 'NO_GUILD'), (r[(r.IS_AFK_CHANNEL = 5)] = 'IS_AFK_CHANNEL'), (r[(r.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS = 6)] = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS');
