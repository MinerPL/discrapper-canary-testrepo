n(47120);
var r = n(570140),
    i = n(661111),
    a = n(147913),
    s = n(706454),
    o = n(709054),
    l = n(802098),
    u = n(128014),
    c = n(163379);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class f extends a.Z {
    constructor(...e) {
        super(...e),
            d(this, 'actions', { POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e) }),
            d(this, 'handleConnectionOpen', async (e) => {
                let t = await i.Z.fetchChangelogConfig(),
                    n = t.body,
                    a = (function (e, t) {
                        let n = 0,
                            r = null;
                        for (var [i, { min_version: a }] of Object.entries(e)) a <= t && a > n && ((n = a), (r = i));
                        return r;
                    })(n, (0, u.b)());
                if (
                    (r.Z.dispatch({
                        type: 'CHANGE_LOG_SET_CONFIG',
                        config: t.body,
                        latestChangelogId: a
                    }),
                    null == a || !0 !== n[a].show_on_startup)
                )
                    return;
                let d = l.Z.lastSeenChangelogId(),
                    f = l.Z.lastSeenChangelogDate();
                if (null != d && 0 >= o.default.compare(a, d)) return;
                let _ = await i.Z.fetchChangelog(a, s.default.locale);
                if (null != _) {
                    if (null == f || null == l.Z.lastSeenChangelogDate()) {
                        i.Z.markChangelogAsSeen(a, _.date);
                        return;
                    }
                    !l.Z.isLocked() && new Date(_.date) > new Date(f) && (0, c.Z)();
                }
            });
    }
}
t.Z = new f();
