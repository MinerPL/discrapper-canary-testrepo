n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(470079),
    a = n(442837),
    s = n(661111),
    l = n(706454),
    r = n(306680),
    o = n(626135),
    c = n(802098),
    u = n(193701),
    d = n(702321),
    h = n(981631);
function m(e) {
    let t = (0, u.Z)(e),
        n = (0, a.e7)([l.default], () => l.default.locale),
        m = (0, a.e7)([c.Z], () => c.Z.getChangelog(null != t ? t : '', n), [t, n]),
        p = (0, d.Z)(e),
        _ = i.useRef(p ? Date.now() : null),
        f = (0, a.e7)([r.ZP], () => r.ZP.getUnreadCount(e), [e]);
    i.useEffect(() => {
        _.current = Date.now();
    }, [p]),
        i.useEffect(() => {
            p && null != t && s.Z.fetchChangelog(t, n, !0);
        }, [t, n, p]),
        i.useEffect(() => {
            p &&
                null != m &&
                o.default.track(h.rMx.CHANGE_LOG_OPENED, {
                    change_log_id: ''.concat(m.date, ':').concat(m.revision),
                    unread_count: f
                });
        }, [p, m]),
        i.useEffect(() => {
            let e = _.current;
            return () => {
                p &&
                    null != m &&
                    null != e &&
                    (o.default.track(h.rMx.CHANGE_LOG_CLOSED, {
                        seconds_open: Math.round((Date.now() - e) / 1000),
                        change_log_id: ''.concat(m.date, ':').concat(m.revision),
                        unread_count: f
                    }),
                    (_.current = 0));
            };
        }, [p, m]);
}
