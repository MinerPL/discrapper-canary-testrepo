s.d(t, {
    h: function () {
        return d;
    },
    p: function () {
        return _;
    }
}), s(47120);
var n = s(470079), a = s(913527), i = s.n(a), r = s(442837), o = s(314897), l = s(673096), c = s(689938);
function d() {
    let e = (0, r.cj)([l.Z], () => l.Z.getSessions());
    return n.useMemo(() => {
        let t = [...e], s = null, n = o.default.getAuthSessionIdHash();
        if (null != n) {
            let e = t.findIndex(e => e.id_hash === n);
            e >= 0 && (s = t.splice(e, 1)[0]);
        }
        return t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
            currentSession: s,
            otherSessions: t
        };
    }, [e]);
}
function _(e) {
    return (Date.now() - e.valueOf()) / 1000 / 60 / 60 < 1 ? c.Z.Messages.AUTH_SESSIONS_ACTIVE_RECENTLY : i()(e).fromNow();
}
