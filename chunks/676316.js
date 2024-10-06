n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(470079),
    s = n(661869),
    a = n(876215),
    l = n(442837),
    r = n(592125),
    o = n(994752);
let c = '1221458499993600000',
    u = {
        content_type: a.s.LEADERBOARD,
        extra: { type: 'leaderboard_extra' },
        id: c,
        author_id: c,
        author_type: s.i.USER,
        participants: [],
        traits: []
    };
function d(e) {
    let { entries: t, channelId: n } = e,
        s = (0, l.e7)([r.Z], () => r.Z.getChannel(n)),
        a = null == s ? void 0 : s.guild_id,
        c = (0, l.e7)([o.Z], () => null != a && null != o.Z.getLeaderboards(a), [a]);
    return {
        entriesWithLeaderboard: i.useMemo(() => (c ? [u, ...(null != t ? t : [])] : t), [c, t]),
        hasLeaderboardEntry: c
    };
}
