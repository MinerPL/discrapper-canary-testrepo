n.d(t, {
    Ns: function () {
        return g;
    }
}),
    n(47120);
var i = n(192379),
    r = n(392711),
    s = n.n(r),
    a = n(876215),
    l = n(442837),
    o = n(146282),
    c = n(26033),
    d = n(897674),
    u = n(709054),
    h = n(206583);
let p = new Set([a.s.PLAYED_GAME]),
    f = (e) => p.has(e.content_type);
function g(e) {
    let { entries: t } = (function () {
        let e = (0, d.Z)(h.YN.GAME_PROFILE_FEED),
            t = (0, d.Z)(h.YN.GLOBAL_FEED),
            n = i.useMemo(
                () =>
                    s()(t)
                        .unionBy(e, (e) => e.id)
                        .filter(f)
                        .orderBy((e) => u.default.extractTimestamp(e.id), 'desc')
                        .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                        .value(),
                [e, t]
            );
        return {
            requestId: (0, l.e7)([o.Z], () => o.Z.getFeedRequestId(h.YN.GAME_PROFILE_FEED)),
            entries: n
        };
    })();
    return i.useMemo(() => (null == t ? void 0 : t.filter((t) => (0, c.dX)(t) && t.extra.application_id === e)), [t, e]);
}
