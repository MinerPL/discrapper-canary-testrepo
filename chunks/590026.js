n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(470079),
    s = n(876215),
    a = n(442837),
    l = n(146282),
    r = n(442853),
    o = n(520951),
    c = n(897674),
    u = n(206583);
let d = new Set([s.s.PLAYED_GAME, s.s.WATCHED_MEDIA, s.s.TOP_GAME, s.s.TOP_ARTIST, s.s.LISTENED_SESSION, s.s.LAUNCHED_ACTIVITY]);
function h(e) {
    let t = (0, c.Z)(u.YN.GLOBAL_FEED);
    (t = (0, r.Z)({
        entries: t,
        channelId: e
    })),
        (t = i.useMemo(() => (null == t ? void 0 : t.filter((e) => d.has(e.content_type))), [t]));
    let { entries: n, filteredIds: s } = (0, o.Z)(t);
    return (
        (t = n),
        {
            requestId: (0, a.e7)([l.Z], () => l.Z.getFeedRequestId(u.YN.GLOBAL_FEED)),
            entries: t,
            impressionCappedEntryIds: s
        }
    );
}
