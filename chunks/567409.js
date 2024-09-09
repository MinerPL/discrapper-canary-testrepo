a.d(s, {
    Z: function () {
        return d;
    }
}),
    a(47120);
var n = a(470079),
    r = a(392711),
    l = a.n(r),
    t = a(876215),
    i = a(442837),
    o = a(146282),
    E = a(897674),
    c = a(709054),
    _ = a(206583);
let u = new Set([t.s.PLAYED_GAME]),
    I = (e) => u.has(e.content_type);
function d() {
    let e = (0, E.Z)(_.YN.GAME_PROFILE_FEED),
        s = (0, E.Z)(_.YN.GLOBAL_FEED),
        a = n.useMemo(
            () =>
                l()(s)
                    .unionBy(e, (e) => e.id)
                    .filter(I)
                    .orderBy((e) => c.default.extractTimestamp(e.id), 'desc')
                    .uniqWith((e, s) => e.author_id === s.author_id && e.extra.application_id === s.extra.application_id)
                    .value(),
            [e, s]
        );
    return {
        requestId: (0, i.e7)([o.Z], () => o.Z.getFeedRequestId(_.YN.GAME_PROFILE_FEED)),
        entries: a
    };
}
