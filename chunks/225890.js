n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(305325),
    l = n(281956),
    o = n(922482),
    c = n(592125),
    u = n(271383),
    d = n(430824),
    _ = n(594174),
    E = n(897285),
    I = n(924301),
    m = n(482241),
    T = n(11868),
    h = n(231338);
function N(e) {
    let { code: t } = e,
        [n, N, f] = t.split('-'),
        {
            guildScheduledEvent: C,
            guild: p,
            channel: g,
            isMember: S
        } = (0, s.cj)(
            [I.ZP, d.Z, c.Z, u.ZP, _.default],
            () => {
                var e, t;
                let i = null !== (t = I.ZP.getGuildScheduledEvent(N)) && void 0 !== t ? t : void 0,
                    a = d.Z.getGuild(n),
                    s = c.Z.getChannel(null == i ? void 0 : i.channel_id);
                return {
                    guildScheduledEvent: i,
                    guild: a,
                    channel: s,
                    isMember: u.ZP.isMember(n, null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
                };
            },
            [n, N]
        );
    return (
        a.useEffect(() => {
            (null == C ? void 0 : C.id) == null && m.Z.fetchGuildEvent(n, N), E.Z.getGuildEventUserCounts(n, N, null != f ? [f] : []), E.Z.getGuildEventsForCurrentUser(n);
        }, [N, n, null == C ? void 0 : C.id, f]),
        (0, i.jsx)(T.ZP, {
            guild: p,
            channel: g,
            guildScheduledEvent: C,
            isMember: S,
            onAcceptInstantInvite: h.dG,
            onTransitionToInviteChannel: function () {
                if ((0, l.n)(n)) {
                    (0, r.hk)(n);
                    return;
                }
                (null == g ? void 0 : g.isGuildStageVoice()) ? (0, o.Cq)(g) : (null == g ? void 0 : g.isGuildVoice()) && m.Z.joinVoiceEvent(g.guild_id, g.id);
            },
            recurrenceId: f
        })
    );
}
