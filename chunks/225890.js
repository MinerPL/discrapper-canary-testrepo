n.d(t, {
    Z: function () {
        return N;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(442837), l = n(305325), r = n(281956), o = n(922482), c = n(592125), d = n(271383), u = n(430824), _ = n(594174), E = n(897285), m = n(924301), I = n(482241), T = n(11868), h = n(231338);
function N(e) {
    let {code: t} = e, [n, N, f] = t.split('-'), {
            guildScheduledEvent: p,
            guild: C,
            channel: g,
            isMember: S
        } = (0, s.cj)([
            m.ZP,
            u.Z,
            c.Z,
            d.ZP,
            _.default
        ], () => {
            var e, t;
            let i = null !== (t = m.ZP.getGuildScheduledEvent(N)) && void 0 !== t ? t : void 0, a = u.Z.getGuild(n), s = c.Z.getChannel(null == i ? void 0 : i.channel_id);
            return {
                guildScheduledEvent: i,
                guild: a,
                channel: s,
                isMember: d.ZP.isMember(n, null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id)
            };
        }, [
            n,
            N
        ]);
    return a.useEffect(() => {
        (null == p ? void 0 : p.id) == null && I.Z.fetchGuildEvent(n, N), E.Z.getGuildEventUserCounts(n, N, null != f ? [f] : []), E.Z.getGuildEventsForCurrentUser(n);
    }, [
        N,
        n,
        null == p ? void 0 : p.id,
        f
    ]), (0, i.jsx)(T.ZP, {
        guild: C,
        channel: g,
        guildScheduledEvent: p,
        isMember: S,
        onAcceptInstantInvite: h.dG,
        onTransitionToInviteChannel: function () {
            if ((0, r.n)(n)) {
                (0, l.hk)(n);
                return;
            }
            (null == g ? void 0 : g.isGuildStageVoice()) ? (0, o.Cq)(g) : (null == g ? void 0 : g.isGuildVoice()) && I.Z.joinVoiceEvent(g.guild_id, g.id);
        },
        recurrenceId: f
    });
}
