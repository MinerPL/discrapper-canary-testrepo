n(47120);
var i, s, a, r, l, o = n(442837), c = n(433517), d = n(846519), u = n(570140), _ = n(278323), E = n(581567), h = n(594190), I = n(581883), m = n(70956), p = n(780570), g = n(314897), T = n(77498), S = n(283595), C = n(19780), N = n(944486), f = n(981631);
let A = 'ActivityTrackingStore', Z = 30 * m.Z.Millis.MINUTE, L = 5 * m.Z.Millis.MINUTE, v = null !== (i = c.K.get(A)) && void 0 !== i ? i : {}, O = {}, R = !1;
function x(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    t && P(e, !0);
    let n = O[e.applicationId];
    null != n && (n.stop(), delete O[e.applicationId]), delete v[e.applicationId], c.K.set(A, v);
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = Date.now(), i = null != e.updatedAt ? n - e.updatedAt : 0;
    i > Z + L && (i = 0);
    let s = (0, p.OT)(e.applicationId, S.Z), a = N.Z.getVoiceChannelId(), r = g.default.getSessionId(), l = C.Z.getMediaSessionId();
    _.Z.updateActivity({
        applicationId: e.applicationId,
        distributor: e.isDiscordApplication ? f.GQo.DISCORD : e.distributor,
        shareActivity: s,
        token: e.token,
        duration: Math.floor(i / 1000),
        closed: t,
        exePath: e.exePath,
        voiceChannelId: a,
        sessionId: r,
        mediaSessionId: l
    }), e.updatedAt = n;
    let o = O[e.applicationId];
    null == o && (o = O[e.applicationId] = new d.Xp()).start(Z, () => P(e)), !t && (v[e.applicationId] = e, c.K.set(A, v));
}
function b() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], t = h.ZP.getVisibleRunningGames(), n = new Set();
    for (let {
                name: e,
                distributor: i,
                exePath: s
            } of t) {
        let t = T.Z.getGameByName(e);
        if (null != t)
            n.add(t.id), !(t.id in v) && P({
                applicationId: t.id,
                updatedAt: Date.now(),
                distributor: i,
                exePath: (0, E.N6)(null != s ? s : '')
            });
    }
    for (let t of Object.keys(v))
        !n.has(t) && x(v[t], e);
}
function M() {
    for (let e of Object.keys(v))
        x(v[e]);
    R = !1;
}
class D extends (s = o.ZP.Store) {
    initialize() {
        this.waitFor(h.ZP, I.Z, S.Z), this.syncWith([I.Z], b);
    }
    getActivities() {
        return v;
    }
}
l = 'ActivityTrackingStore', (r = 'displayName') in (a = D) ? Object.defineProperty(a, r, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[r] = l, new D(u.Z, {
    RUNNING_GAMES_CHANGE: () => b(),
    CONNECTION_OPEN: function () {
        if (R)
            return !1;
        for (let e of Object.keys(v))
            P(v[e]);
        b(!1), R = !0;
    },
    CONNECTION_CLOSED: function (e) {
        let {code: t} = e;
        4004 === t && M();
    },
    LOGOUT: M,
    ACTIVITY_UPDATE_SUCCESS: function (e) {
        let {
                applicationId: t,
                token: n
            } = e, i = v[t];
        if (null == i)
            return !1;
        i.token = n, c.K.set(A, v);
    },
    ACTIVITY_UPDATE_FAIL: function (e) {
        let {applicationId: t} = e, n = v[t];
        if (null == n)
            return !1;
        n.token = null, n.updatedAt = null, c.K.set(A, v);
    }
});
