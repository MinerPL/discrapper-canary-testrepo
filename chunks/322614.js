n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(192379),
    l = n(392711),
    r = n(709054),
    a = n(26033),
    o = n(897674),
    s = n(561308),
    c = n(206583);
function u(e) {
    let t = (0, o.Z)(c.YN.GLOBAL_FEED),
        n = (0, o.Z)(c.YN.GAME_PROFILE_FEED);
    return (0, i.useMemo)(() => {
        let i = (0, l.unionBy)(t, n, (e) => e.id).filter((t) => !(0, s.kr)(t) && (0, a.LP)(t) && t.author_id === e);
        return (0, l.uniqWith)(i, (e, t) => 'application_id' in e.extra && 'application_id' in t.extra && e.extra.application_id === t.extra.application_id).sort((e, t) => r.default.extractTimestamp(t.id) - r.default.extractTimestamp(e.id));
    }, [t, n, e]);
}
