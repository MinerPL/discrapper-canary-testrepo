a.d(l, {
    Z: function () {
        return x;
    }
}), a(47120);
var n = a(470079), t = a(392711), s = a.n(t), i = a(876215), r = a(442837), o = a(146282), c = a(897674), d = a(709054), u = a(206583);
let m = new Set([i.s.PLAYED_GAME]), h = e => m.has(e.content_type);
function x() {
    let e = (0, c.Z)(u.YN.GAME_PROFILE_FEED), l = (0, c.Z)(u.YN.GLOBAL_FEED), a = n.useMemo(() => s()(l).unionBy(e, e => e.id).filter(h).orderBy(e => d.default.extractTimestamp(e.id), 'desc').uniqWith((e, l) => e.author_id === l.author_id && e.extra.application_id === l.extra.application_id).value(), [
            e,
            l
        ]);
    return {
        requestId: (0, r.e7)([o.Z], () => o.Z.getFeedRequestId(u.YN.GAME_PROFILE_FEED)),
        entries: a
    };
}
