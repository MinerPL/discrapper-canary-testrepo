n.d(t, {
    V: function () {
        return et;
    }
}),
    n(789020),
    n(411104),
    n(47120),
    n(757143);
var r = n(392711),
    i = n.n(r),
    a = n(108131),
    s = n.n(a),
    o = n(433517),
    l = n(570140),
    u = n(865427),
    c = n(710845),
    d = n(314897),
    _ = n(412788),
    E = n(626135),
    f = n(360359),
    h = n(987338),
    p = n(981631);
function I(e, t, n) {
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
let m = 'scientist:triggered',
    T = 'exerimentOverrides',
    S = 'userExperimentOverrides',
    g = 'guildExperimentOverrides',
    A = new c.Z('ExperimentStore'),
    N = !1,
    O = {},
    R = {},
    v = {
        rawUserExperiments: [],
        rawGuildExperiments: []
    },
    C = {},
    L = {},
    y = {},
    D = {},
    b = {},
    M = 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL,
    P = {};
function U(e) {
    let t = P[e];
    if (void 0 !== t) return t;
    {
        let t = s().v3(e);
        return (P[e] = t), t;
    }
}
let w = h.qO.map((e) => U(e));
function x(e, t) {
    return e || w.includes(t);
}
function G(e) {
    var t;
    return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & p.xW$.STAFF) === p.xW$.STAFF || null != e.personal_connection_id || !1;
}
function k(e, t, n, r) {
    let i = ''.concat(t.type, '|').concat(e),
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === h.xY.USER) return a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
    if (t.type === h.xY.GUILD) return (i += '|'.concat(t.guildId)), a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
    throw Error();
}
function B(e) {
    if (e.type === h.xY.USER) return U(''.concat(e.bucket, '|').concat(e.revision));
    if (e.type === h.xY.GUILD) return U(''.concat(e.bucket, '|').concat(e.revision, '|').concat(e.guildId));
    throw Error();
}
let F = Date.now();
function V(e, t, n, r) {
    let i = O[k(e, t, n, r)];
    return !(null == i || Date.now() - i.time > 604800000) && i.hash === B(t);
}
function H(e) {
    let { experimentId: t, descriptor: n, location: r, location_stack: i, context: a, fingerprint: s, excluded: o, exposureType: l } = e,
        u = !1;
    switch (n.assignmentSource) {
        case 'override':
            return !1;
        case 'ready_payload':
            n.sessionId !== d.default.getSessionId() && (u = !0);
            break;
        case 'logged_out_api':
            n.fingerprint !== d.default.getFingerprint() && (u = !0);
            break;
        default:
            u = !0;
    }
    if (n.override) return !1;
    let c = l === h.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
    if (V(t, n, r, c)) return !1;
    if (n.type === h.xY.USER) {
        let e = {
            name: t,
            revision: n.revision,
            population: n.population,
            bucket: n.bucket,
            location: r,
            location_stack: i,
            hash_result: n.hashResult,
            excluded: o,
            exposure_type: l,
            assignment_source: n.assignmentSource,
            assignment_session_id: n.sessionId,
            assignment_loaded_from_cache: n.loadedFromCache
        };
        null != a && (e.context_guild_id = a.guildId);
        let _ = c ? p.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : p.rMx.EXPERIMENT_USER_TRIGGERED;
        if (u) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: v.source
            };
            E.default.track(p.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
                flush: !0,
                fingerprint: s
            });
        } else
            E.default.track(_, e, {
                flush: !0,
                fingerprint: s
            });
    } else if (n.type === h.xY.GUILD) {
        let e = c ? p.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : p.rMx.EXPERIMENT_GUILD_TRIGGERED,
            a = {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: r,
                location_stack: i,
                hash_result: n.hashResult,
                excluded: o,
                exposure_type: l,
                assignment_source: n.assignmentSource,
                assignment_session_id: n.sessionId,
                assignment_loaded_from_cache: n.loadedFromCache
            };
        if (u) {
            let e = {
                ...a,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: v.source
            };
            E.default.track(p.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
                flush: !0,
                fingerprint: s
            });
        } else
            E.default.track(e, a, {
                flush: !0,
                fingerprint: s
            });
    }
    !u &&
        ((O[k(t, n, r, c)] = {
            time: Date.now(),
            hash: B(n)
        }),
        ee(O));
}
function Z(e) {
    let [t, n] = e;
    return null != f.Z[t] ? f.Z[t](n) : null;
}
function Y(e) {
    let [t, n] = e;
    return {
        buckets: t.map((e) => {
            let [t, n] = e;
            return {
                bucket: t,
                positions: n.map((e) => {
                    let { s: t, e: n } = e;
                    return {
                        start: t,
                        end: n
                    };
                })
            };
        }),
        filters: n.map(Z),
        rawFilterData: n
    };
}
function j(e) {
    var t;
    !M && 'CONNECTION_OPEN' === e.type && G(e.user) && (M = !0),
        'EXPERIMENTS_FETCH_SUCCESS' === e.type &&
            N &&
            'ready_payload' === v.source &&
            E.default.track(p.rMx.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: v.source,
                current_snapshot_session_id: v.sessionId,
                current_snapshot_fingerprint: v.fingerprint
            }),
        (C = {}),
        (L = {}),
        (y = {});
    let r = 'CONNECTION_OPEN' === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: i, guildExperiments: a } = e,
        s = 'CONNECTION_OPEN' === e.type ? 'ready_payload' : 'logged_out_api',
        o = 'sessionId' in e ? e.sessionId : null !== (t = d.default.getSessionId()) && void 0 !== t ? t : '',
        l = d.default.getFingerprint();
    r &&
        W(
            {
                rawUserExperiments: i,
                rawGuildExperiments: null != a ? a : [],
                source: s,
                sessionId: o,
                fingerprint: l
            },
            !1
        ),
        n(598984).Vx.trackExposure(),
        (N = !0);
}
function W(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (v = {
        rawUserExperiments: t,
        rawGuildExperiments: null != n ? n : [],
        source: r,
        sessionId: i,
        fingerprint: a
    }),
        t.forEach((e) => {
            let [t, n, o, l, u, c, d, _] = e;
            C[t] = {
                type: 'user',
                revision: n,
                population: u,
                bucket: o,
                override: 0 === l,
                hashResult: null != c ? c : -1,
                aaMode: 1 === d,
                triggerDebuggingEnabled: x(1 === _, t),
                assignmentSource: r,
                sessionId: i,
                loadedFromCache: s,
                fingerprint: a
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, u, c, d, _, E, f] = e;
                L[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(Y),
                    overrides: (function (e) {
                        let t = {};
                        if (null == e) return t;
                        for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
                        return t;
                    })(u),
                    overridesFormatted: (null != c ? c : []).map((e) => e.map(Y)),
                    holdoutName: null != d ? d : null,
                    holdoutBucket: null != _ ? _ : null,
                    aaMode: 1 === E,
                    triggerDebuggingEnabled: x(1 === f, t),
                    assignmentSource: r,
                    sessionId: i,
                    loadedFromCache: s,
                    fingerprint: a
                };
            });
}
function K(e, t, n) {
    let r = null;
    for (let { buckets: a, filters: s } of t) {
        var i = !0;
        if (null != s) {
            for (let t of s)
                if (null != t && !t(e)) {
                    i = !1;
                    break;
                }
        }
        if (!i) continue;
        let t = a.find((e) => {
            let { positions: t } = e;
            return t.some((e) => {
                let { start: t, end: r } = e;
                return n >= t && n < r;
            });
        });
        if ((r = null != t ? t.bucket : h.NZ.CONTROL) === h.NZ.NOT_ELIGIBLE) break;
        return r;
    }
    return null;
}
function z(e) {
    let t = {};
    for (let r in e) {
        var n;
        let i = e[r];
        for (let e of ((t[r] = { ...i }), t[r].populations)) e.filters = e.rawFilterData.map(Z);
        for (let e of null !== (n = t[r].overridesFormatted) && void 0 !== n ? n : []) for (let t of e) t.filters = t.rawFilterData.map(Z);
    }
    return t;
}
function q(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !M && G(n) && (M = !0),
        (N = t.hasLoadedExperiments),
        (O = t.trackedExposureExperiments),
        (C = t.loadedUserExperiments),
        (D = t.userExperimentOverrides),
        (b = t.guildExperimentOverrides),
        (v = {
            ...v,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint
        }),
        (L = z(t.loadedGuildExperiments)),
        (y = {});
}
function Q() {
    N = !0;
}
function X(e) {
    let { isSwitchingAccount: t } = e;
    o.K.remove(m),
        !t && (o.K.remove(T), o.K.remove(S), o.K.remove(g), (D = {}), (b = {})),
        (C = {}),
        (v = {
            ...v,
            rawUserExperiments: []
        }),
        (O = {}),
        (N = !1);
}
function $() {
    (N = !1), (O = {}), (L = {}), o.K.remove(m);
}
function J() {
    try {
        o.K.set(S, D);
    } catch (e) {
        A.error('Error saving user experiment overrides, unsaved data will be lost', e),
            E.default.track(p.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
    try {
        o.K.set(g, b);
    } catch (e) {
        A.error('Error saving guild experiment overrides, unsaved data will be lost', e),
            E.default.track(p.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
}
function ee(e) {
    try {
        o.K.set(m, {
            v: 1,
            e: e
        });
    } catch (e) {
        A.error('Error saving tracked exposure experiments, unsaved data will be lost', e),
            E.default.track(p.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveTrackedExposureExperiments'
            });
    }
}
function et(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: s } = e;
    R[t] = {
        type: n,
        title: r,
        description: i,
        buckets: a,
        commonTriggerPoint: s
    };
}
function en(e) {
    var t;
    let { experimentId: n, experimentBucket: r, experimentType: i, skipCleanup: a } = e,
        s = null != i ? i : null === (t = R[n]) || void 0 === t ? void 0 : t.type;
    if (null == s) return !1;
    if (
        (null == r
            ? ((D = { ...D }), delete D[n], (b = { ...b }), delete b[n])
            : 'user' === s
              ? (D = {
                    ...D,
                    [n]: {
                        type: s,
                        revision: 1,
                        population: 0,
                        bucket: r,
                        override: !0
                    }
                })
              : (b = {
                    ...b,
                    [n]: {
                        type: s,
                        revision: 1,
                        bucket: r,
                        override: !0
                    }
                }),
        !a)
    )
        for (let e of [D, b]) for (let t in e) null == R[t] && delete D[t];
    J();
}
function er(e) {
    let { guild: t } = e;
    for (let e in y) {
        let [n] = e.split(':');
        t.id === n && delete y[e];
    }
}
class ei extends _.Z {
    initialize() {
        (O = (function () {
            let e = o.K.get(m);
            if (null == e || 1 !== e.v) return {};
            let t = e.e,
                n = Date.now(),
                r = !1;
            for (let e in t) n - t[e].time > 604800000 && (delete t[e], (r = !0));
            return r && ee(t), t;
        })()),
            !(function () {
                var e, t, n;
                let r = [null !== (e = o.K.get(T)) && void 0 !== e ? e : {}, null !== (t = o.K.get(S)) && void 0 !== t ? t : {}, null !== (n = o.K.get(g)) && void 0 !== n ? n : {}];
                (D = {}), (b = {});
                let a = !i().isEmpty(r[0]);
                for (let e of r)
                    for (let t in e) {
                        let n = e[t];
                        null == n || (n.type !== h.xY.USER && n.type !== h.xY.GUILD) || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], (a = !0)) : n.type === h.xY.USER ? (D[t] = n) : (b[t] = n);
                    }
                let s = (0, u._S)();
                for (let e in s)
                    (D[e] = {
                        type: h.xY.USER,
                        revision: 1,
                        population: 0,
                        override: !0,
                        fromCookie: !0,
                        assignmentSource: 'override',
                        bucket: s[e]
                    }),
                        (b[e] = {
                            type: h.xY.GUILD,
                            revision: 1,
                            override: !0,
                            fromCookie: !0,
                            assignmentSource: 'override',
                            bucket: s[e]
                        }),
                        (a = !0);
                a && J();
            })(),
            this.waitFor(d.default),
            this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(ei.LATEST_SNAPSHOT_VERSION);
        null != e && ('loadedUserExperiments' in e ? ((C = e.loadedUserExperiments), (L = z(e.loadedGuildExperiments)), Object.values(C).forEach((e) => (e.loadedFromCache = !0)), Object.values(L).forEach((e) => (e.loadedFromCache = !0))) : W(e, !0));
    }
    takeSnapshot() {
        return {
            version: ei.LATEST_SNAPSHOT_VERSION,
            data: { ...v }
        };
    }
    get hasLoadedExperiments() {
        return N;
    }
    hasRegisteredExperiment(e) {
        return null != R[e];
    }
    getUserExperimentDescriptor(e) {
        if (M) {
            let t = D[e];
            if (null != t) return t;
        }
        let t = U(e);
        return C[''.concat(t)];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = null != t ? t : p.lds,
            r = b[e];
        if (M && null != r) return r;
        let i = ''.concat(n, ':').concat(e);
        if (i in y) return y[i];
        let a = (function e(t, n) {
            var r, i;
            let a = U(n),
                s = L[''.concat(a)];
            if (null == s) return null;
            let { revision: o, aaMode: l } = s,
                u = s.overrides[t],
                c = s.triggerDebuggingEnabled;
            if (null != u)
                return u === h.NZ.NOT_ELIGIBLE
                    ? null
                    : {
                          type: h.xY.GUILD,
                          guildId: t,
                          revision: o,
                          bucket: u,
                          override: !0,
                          hashResult: -1,
                          triggerDebuggingEnabled: c
                      };
            let d = U(''.concat(null !== (r = s.hashKey) && void 0 !== r ? r : n, ':').concat(t)) % 10000,
                _ = null;
            for (let e of null !== (i = s.overridesFormatted) && void 0 !== i ? i : [])
                if (null !== (_ = K(t, e, d)))
                    return {
                        type: h.xY.GUILD,
                        guildId: t,
                        revision: s.revision,
                        bucket: _,
                        override: !0,
                        hashResult: d,
                        triggerDebuggingEnabled: c
                    };
            if (null == (_ = K(t, s.populations, d))) return null;
            if (null != s.holdoutName && null != s.holdoutBucket && s.holdoutName !== n) {
                let n = e(t, s.holdoutName);
                if (
                    (null == n ? void 0 : n.bucket) != null &&
                    (!0 !== n.override &&
                        H({
                            experimentId: s.holdoutName,
                            descriptor: n
                        }),
                    (null == n ? void 0 : n.bucket) === s.holdoutBucket)
                )
                    return null;
            }
            return {
                type: h.xY.GUILD,
                guildId: t,
                revision: s.revision,
                bucket: _,
                hashResult: d,
                aaMode: l,
                triggerDebuggingEnabled: c
            };
        })(n, e);
        return (y[i] = a), a;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : h.NZ.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : h.NZ.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return C;
    }
    getGuildExperiments() {
        return L;
    }
    getLoadedUserExperiment(e) {
        return C[U(e)];
    }
    getLoadedGuildExperiment(e) {
        return L[U(e)];
    }
    getRecentExposures(e, t) {
        let n = ''.concat(e, '|').concat(t, '|');
        return Object.entries(O)
            .filter((e) => {
                let [t] = e;
                return t.startsWith(n);
            })
            .map((e) => {
                let [t, { time: r }] = e;
                return [t.replace(n, ''), r];
            });
    }
    getRegisteredExperiments() {
        return R;
    }
    getAllExperimentOverrideDescriptors() {
        return M
            ? {
                  ...D,
                  ...b
              }
            : {};
    }
    getExperimentOverrideDescriptor(e) {
        var t;
        return M ? (null !== (t = D[e]) && void 0 !== t ? t : b[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(R).forEach((e) => {
            t[U(''.concat(e))] = e;
        }),
        C)) {
            let r = t[n];
            null != r && (e[r] = C[n].bucket);
        }
        for (let t in y) {
            let n = y[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in L) for (let n of ((e[t] = JSON.parse(JSON.stringify(L[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: N,
            trackedExposureExperiments: O,
            loadedUserExperiments: C,
            loadedGuildExperiments: e,
            userExperimentOverrides: D,
            guildExperimentOverrides: b,
            assignmentSource: v.source,
            assignmentSessionId: v.sessionId,
            assignmentFingerprint: v.fingerprint
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return V(e, t, n, r);
    }
    constructor() {
        super(
            {
                LOGOUT: X,
                LOGIN_SUCCESS: $,
                CONNECTION_OPEN: j,
                EXPERIMENTS_FETCH_SUCCESS: j,
                OVERLAY_INITIALIZE: q,
                EXPERIMENTS_FETCH_FAILURE: Q,
                EXPERIMENT_OVERRIDE_BUCKET: en,
                GUILD_CREATE: er,
                GUILD_UPDATE: er
            },
            l.c.Early
        ),
            I(this, 'trackExposure', H);
    }
}
I(ei, 'displayName', 'ExperimentStore'), I(ei, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new ei());
