var i,
    a,
    s,
    r,
    l = n(442837),
    o = n(570140),
    c = n(656063),
    d = n(814443),
    u = n(158776),
    _ = n(594174),
    E = n(981631);
let h = !1,
    m = {},
    I = {};
function g(e) {
    let t = !1;
    return (
        e.forEach((e) => {
            t = !1 !== T(e) || t;
        }),
        t
    );
}
function p(e) {
    let t = I[e];
    if (null == t) return !1;
    let n = t.gameId;
    return null != m[n] && ((m = { ...m }), delete m[n][e], 0 === Object.values(m[n]).length && delete m[n]), (I = { ...I }), delete I[e], !0;
}
function T(e) {
    let { user: t, activities: n } = e;
    if (null == t) return !1;
    let i = n.filter((e) => e.type !== E.IIU.CUSTOM_STATUS);
    if (0 === i.length) return p(t.id);
    let a = !1;
    return (
        i.forEach((e) => {
            (function (e, t) {
                var n, i, a, s;
                let r = (0, c.Z)(e);
                if (null == r) return p(t.id);
                let l = I[t.id];
                null != l && l.gameId !== r && p(t.id);
                let o = null !== (i = null === (n = e.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== i ? i : Date.now(),
                    d = {
                        userId: t.id,
                        activity: e,
                        startedPlaying: o
                    };
                return (
                    (a = r),
                    (s = d),
                    (m = {
                        ...m,
                        [a]: {
                            ...m[a],
                            [s.userId]: s
                        }
                    }),
                    (I = {
                        ...I,
                        [s.userId]: {
                            gameId: a,
                            startedPlaying: s.startedPlaying
                        }
                    }),
                    !0
                );
            })(e, t) && (a = !0);
        }),
        a
    );
}
function S() {
    let e = !1;
    if (!d.Z.needsRefresh() && !h) {
        let t;
        (m = {}),
            (I = {}),
            (t = !1),
            u.Z.getUserIds().forEach((e) => {
                let n = _.default.getUser(e);
                null != n &&
                    (t =
                        T({
                            user: n,
                            activities: u.Z.getActivities(e)
                        }) || t);
            }),
            (e = t);
    }
    return (h = !d.Z.needsRefresh()), e;
}
class f extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z), this.syncWith([d.Z], S);
    }
    get games() {
        return m;
    }
    get usersPlaying() {
        return I;
    }
    get gameIds() {
        return Object.keys(m);
    }
    getNowPlaying(e) {
        return m[e];
    }
    getUserGame(e) {
        return I[e];
    }
}
(s = 'NowPlayingStore'),
    (a = 'displayName') in (i = f)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new f(o.Z, {
        CONNECTION_OPEN: function () {
            (m = {}), (I = {});
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
                i = !1;
            return (
                t.forEach((e) => {
                    g(e.presences) && (i = !0);
                }),
                g(n) && (i = !0),
                i
            );
        },
        LOGOUT: function () {
            (m = {}), (I = {});
        },
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t.map((e) => T(e)).some((e) => e);
        },
        PRESENCES_REPLACE: function (e) {
            let { presences: t } = e;
            return g(t);
        }
    }));
