n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(470079),
    s = n(876215),
    a = n(442837),
    l = n(676316),
    r = n(146282),
    o = n(442853),
    c = n(520951),
    u = n(897674),
    d = n(206583);
let h = new Set([s.s.PLAYED_GAME, s.s.WATCHED_MEDIA, s.s.TOP_GAME, s.s.TOP_ARTIST, s.s.LISTENED_SESSION, s.s.LAUNCHED_ACTIVITY]);
function p(e) {
    let t = (0, u.Z)(d.YN.GLOBAL_FEED);
    (t = (0, o.Z)({
        entries: t,
        channelId: e
    })),
        (t = i.useMemo(() => (null == t ? void 0 : t.filter((e) => h.has(e.content_type))), [t]));
    let { entries: n, filteredIds: s } = (0, c.Z)(t);
    t = n;
    let { entriesWithLeaderboard: p, hasLeaderboardEntry: m } = (0, l.Z)({
        entries: t,
        channelId: e
    });
    return (
        (t = p),
        {
            requestId: (0, a.e7)([r.Z], () => r.Z.getFeedRequestId(d.YN.GLOBAL_FEED)),
            entries: t,
            impressionCappedEntryIds: s,
            hasLeaderboardEntry: m
        }
    );
}
