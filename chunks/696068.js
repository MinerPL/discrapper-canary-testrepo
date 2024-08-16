a.d(n, {
    F: function () {
        return f;
    },
    d: function () {
        return x;
    }
}),
    a(653041),
    a(47120);
var t = a(442837),
    s = a(592125),
    i = a(324067),
    l = a(430824),
    r = a(496675),
    o = a(944486),
    c = a(979651),
    u = a(938475),
    d = a(823379),
    g = a(374065),
    m = a(981631);
function p(e, n, a, t, s) {
    let i = (0, g.e4)({
        channelId: e.id,
        ChannelStore: n,
        GuildStore: a,
        PermissionStore: t,
        VoiceStateStore: s
    });
    return (e.type === m.d4z.GUILD_VOICE && i === g.jy.CAN_LAUNCH) || !1;
}
function x(e) {
    var n, a, t;
    let { guildId: g, allowGdmActivityChannelSuggestion: m = !1 } = e;
    if (null == g && !m) return null;
    let x = o.Z.getVoiceChannelId(),
        v = s.Z.getChannel(x);
    if (null != v && (null != v.guild_id || m)) return v.id;
    let f = [];
    for (let e of Object.values(i.Z.getCategories(g)))
        for (let n of e)
            p(n.channel, s.Z, l.Z, r.Z, c.Z) &&
                f.push({
                    channel: n.channel,
                    users: u.ZP.getVoiceStatesForChannel(n.channel).filter(d.lm)
                });
    return null !== (t = null === (a = f.sort((e, n) => (e.users.length > n.users.length ? -1 : 1))[0]) || void 0 === a ? void 0 : null === (n = a.channel) || void 0 === n ? void 0 : n.id) && void 0 !== t ? t : null;
}
function v(e, n) {
    if (e.length !== n.length) return !1;
    for (let a = 0; a < e.length; a++) if (e[a].value.channel.id !== n[a].value.channel.id) return !1;
    return !0;
}
function f(e) {
    return (0, t.e7)(
        [i.Z, s.Z, l.Z, r.Z, c.Z, u.ZP],
        () => {
            if (null == e) return [];
            let n = [];
            return (
                Object.values(i.Z.getCategories(e)).forEach((e) => {
                    e.forEach((e) => {
                        let { channel: a } = e;
                        p(a, s.Z, l.Z, r.Z, c.Z) && n.push(a);
                    });
                }),
                n
                    .map((e) => {
                        let n = u.ZP.getVoiceStatesForChannel(e).filter(d.lm);
                        return {
                            value: {
                                channel: e,
                                users: n
                            },
                            label: e.name
                        };
                    })
                    .sort((e, n) => (e.value.users.length > n.value.users.length ? -1 : 1))
            );
        },
        [e],
        v
    );
}
