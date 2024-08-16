n(47120), n(653041);
var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(392711),
    c = n.n(u),
    d = n(442837),
    _ = n(570140),
    E = n(122810),
    f = n(106301),
    h = n(709054),
    p = n(314897),
    m = n(594174),
    I = n(981631);
let T = Object.freeze([]),
    g = {},
    S = {},
    A = {},
    N = {},
    v = {};
function O(e, t) {
    let n = g[e];
    return null != n ? n[t] : null;
}
let R = (e) => {
        switch (e.type) {
            case I.IIU.CUSTOM_STATUS:
                return 4;
            case I.IIU.COMPETING:
                return 3;
            case I.IIU.STREAMING:
                return 2;
            case I.IIU.PLAYING:
                return 1;
            default:
                return 0;
        }
    },
    C = (e) => ((0, E.Z)(e) ? 1 : 0);
function y(e, t) {
    var n, r, i, a, s;
    return (n = e), R(t) - R(n) || ((r = e), C(t) - C(r)) || ((i = e), (null !== (a = t.created_at) && void 0 !== a ? a : 0) - (null !== (s = i.created_at) && void 0 !== s ? s : 0));
}
function D(e) {
    if ((delete S[e], delete A[e], delete N[e], null == g[e])) return;
    let [t] = c().sortBy(g[e], (e) => -e.timestamp);
    t.status !== I.Skl.OFFLINE ? ((S[e] = t.status), (A[e] = t.activities), null != t.clientStatus && (N[e] = t.clientStatus)) : c().every(g[e], (e) => e.status === I.Skl.OFFLINE) && delete g[e];
}
function L(e) {
    let t = g[e];
    if (null == t) return;
    let n = c().maxBy(Object.values(t), (e) => e.timestamp);
    n.status !== I.Skl.OFFLINE && ((S[e] = n.status), (A[e] = n.activities), null != n.clientStatus && (N[e] = n.clientStatus));
}
function b(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a } = e;
    if (n === p.default.getId()) return !1;
    let s = g[n];
    if (null == s) {
        if (r === I.Skl.OFFLINE) return !1;
        s = g[n] = {};
    }
    if (r === I.Skl.OFFLINE)
        s[t] = {
            status: r,
            clientStatus: i,
            activities: T,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(y) : a,
            n = s[t];
        (a = null != n && l()(n.activities, e) ? n.activities : e),
            (s[t] = {
                status: r,
                clientStatus: i,
                activities: a,
                timestamp: Date.now()
            });
    }
    return delete v[n], D(n), !0;
}
function M(e) {
    let { guildId: t, userId: n, status: r, clientStatus: i, activities: a, timestamp: s } = e;
    if (n === p.default.getId()) return;
    let o = g[n];
    if (null == o) {
        if (r === I.Skl.OFFLINE) return;
        o = g[n] = {};
    }
    if (r === I.Skl.OFFLINE)
        o[t] = {
            status: r,
            clientStatus: i,
            activities: T,
            timestamp: Date.now()
        };
    else {
        let e = a.length > 1 ? [...a].sort(y) : a;
        o[t] = {
            status: r,
            clientStatus: i,
            activities: e,
            timestamp: s
        };
    }
}
function P(e, t) {
    if (t === p.default.getId()) return !1;
    let n = g[t];
    if (null == n || null == n[e]) return !1;
    delete n[e], 0 === Object.keys(n).length && delete g[t], D(t);
}
function U(e) {
    for (let t of h.default.keys(g)) P(e, t);
}
class w extends (r = d.ZP.Store) {
    initialize() {
        this.waitFor(p.default, f.Z);
    }
    setCurrentUserOnConnectionOpen(e, t) {
        (S[p.default.getId()] = e), (A[p.default.getId()] = t);
    }
    getStatus(e) {
        var t, n;
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : I.Skl.OFFLINE,
            a = m.default.getUser(e);
        if ((null != a && a.hasFlag(I.xW$.BOT_HTTP_INTERACTIONS) && (i = I.Skl.UNKNOWN), null == a ? void 0 : a.isClyde())) return I.Skl.ONLINE;
        if (null == r) return null !== (t = S[e]) && void 0 !== t ? t : i;
        let s = O(e, r);
        return null !== (n = null == s ? void 0 : s.status) && void 0 !== n ? n : i;
    }
    getActivities(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (null == t) {
            var n;
            return null !== (n = A[e]) && void 0 !== n ? n : T;
        }
        let r = O(e, t);
        return null == r || null == r.activities ? T : r.activities;
    }
    getPrimaryActivity(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.getActivities(e, t).filter((e) => e.type !== I.IIU.HANG_STATUS)[0];
    }
    getAllApplicationActivities(e) {
        let t = [];
        for (let n of h.default.keys(A))
            for (let r of A[n])
                r.application_id === e &&
                    t.push({
                        userId: n,
                        activity: r
                    });
        return t;
    }
    getApplicationActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.findActivity(e, (e) => e.application_id === t, n);
    }
    findActivity(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this.getActivities(e, n).find(t);
    }
    getActivityMetadata(e) {
        return v[e];
    }
    getUserIds() {
        return h.default.keys(A);
    }
    isMobileOnline(e) {
        let t = N[e];
        return null != t && t[I.X5t.MOBILE] === I.Skl.ONLINE && t[I.X5t.DESKTOP] !== I.Skl.ONLINE;
    }
    getClientStatus(e) {
        return N[e];
    }
    getState() {
        return {
            presencesForGuilds: g,
            statuses: S,
            activities: A,
            activityMetadata: v,
            clientStatuses: N
        };
    }
}
(s = 'PresenceStore'),
    (a = 'displayName') in (i = w)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new w(_.Z, {
        CONNECTION_OPEN: function () {
            return !0;
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
                r = p.default.getId();
            (g = {}), (v = {}), (S = { [r]: S[r] }), (A = { [r]: A[r] }), (N = { [r]: {} });
            let i = new Set(),
                a = Date.now();
            t.forEach((e) => {
                e.presences.forEach((t) => {
                    let { user: n, status: r, clientStatus: s, activities: o } = t;
                    M({
                        guildId: e.id,
                        userId: n.id,
                        status: r,
                        clientStatus: s,
                        activities: o,
                        timestamp: a
                    }),
                        i.add(n.id);
                });
            }),
                n.forEach((e) => {
                    let { user: t, status: n, clientStatus: r, activities: s } = e;
                    null != t &&
                        (M({
                            guildId: I.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: s,
                            timestamp: a
                        }),
                        i.add(t.id));
                }),
                i.delete(r),
                i.forEach(L);
        },
        OVERLAY_INITIALIZE: function (e) {
            let { presences: t } = e;
            (g = t.presencesForGuilds), (S = t.statuses), (A = t.activities), (v = t.activityMetadata);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            t.presences.forEach((e) => {
                let { user: n, status: r, clientStatus: i, activities: a } = e;
                b({
                    guildId: t.id,
                    userId: n.id,
                    status: r,
                    clientStatus: i,
                    activities: a
                });
            });
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            U(t.id);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { guildId: t, user: n } = e;
            return P(t, n.id);
        },
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t
                .map((e) => {
                    let { guildId: t, user: n, status: r, clientStatus: i, activities: a } = e;
                    return b({
                        guildId: null != t ? t : I.ME,
                        userId: n.id,
                        status: r,
                        clientStatus: i,
                        activities: a
                    });
                })
                .some((e) => e);
        },
        PRESENCES_REPLACE: function (e) {
            let { presences: t } = e;
            U(I.ME),
                t.forEach((e) => {
                    let { user: t, status: n, clientStatus: r, activities: i } = e;
                    null != t &&
                        b({
                            guildId: I.ME,
                            userId: t.id,
                            status: n,
                            clientStatus: r,
                            activities: i
                        });
                });
        },
        ACTIVITY_METADATA_UPDATE: function (e) {
            let { userId: t, metadata: n } = e;
            return (v[t] = n), !1;
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, members: n } = e;
            n.forEach((e) => {
                null != e.presence &&
                    b({
                        guildId: t,
                        userId: e.user_id,
                        status: e.presence.status,
                        clientStatus: e.presence.clientStatus,
                        activities: e.presence.activities
                    });
            });
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            null == n ||
                n.forEach((e) => {
                    null != e.presence &&
                        b({
                            guildId: t,
                            userId: e.userId,
                            status: e.presence.status,
                            clientStatus: e.presence.clientStatus,
                            activities: e.presence.activities
                        });
                });
        },
        SELF_PRESENCE_STORE_UPDATE: function (e) {
            let t = p.default.getId();
            if (S[t] === e.status && A[t] === e.activities) return !1;
            (S[t] = e.status), (A[t] = e.activities), delete v[t];
        }
    }));
