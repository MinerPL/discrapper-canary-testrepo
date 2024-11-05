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
    f = n(412788),
    _ = n(626135),
    h = n(360359),
    p = n(987338),
    m = n(981631);
function g(e, t, n) {
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
let E = 'scientist:triggered',
    v = 'exerimentOverrides',
    I = 'userExperimentOverrides',
    S = 'guildExperimentOverrides',
    T = new c.Z('ExperimentStore'),
    b = !1,
    y = {},
    A = {},
    N = {
        rawUserExperiments: [],
        rawGuildExperiments: []
    },
    C = {},
    R = {},
    O = {},
    D = {},
    L = {},
    x = 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL,
    w = {};
function M(e) {
    let t = w[e];
    if (void 0 !== t) return t;
    {
        let t = s().v3(e);
        return (w[e] = t), t;
    }
}
let P = p.qO.map((e) => M(e));
function k(e, t) {
    return e || P.includes(t);
}
function U(e) {
    var t;
    return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & m.xW$.STAFF) === m.xW$.STAFF || null != e.personal_connection_id || !1;
}
function G(e, t, n, r) {
    let i = ''.concat(t.type, '|').concat(e),
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === p.xY.USER) return a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
    if (t.type === p.xY.GUILD) return (i += '|'.concat(t.guildId)), a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
    throw Error();
}
function B(e) {
    if (e.type === p.xY.USER) return M(''.concat(e.bucket, '|').concat(e.revision));
    if (e.type === p.xY.GUILD) return M(''.concat(e.bucket, '|').concat(e.revision, '|').concat(e.guildId));
    throw Error();
}
let Z = Date.now();
function F(e, t, n, r) {
    let i = y[G(e, t, n, r)];
    return !(null == i || Date.now() - i.time > 604800000) && i.hash === B(t);
}
function V(e) {
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
    let c = l === p.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
    if (F(t, n, r, c)) return !1;
    if (n.type === p.xY.USER) {
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
        let f = c ? m.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : m.rMx.EXPERIMENT_USER_TRIGGERED;
        if (u) {
            let t = {
                ...e,
                assignment_fingerprint: n.fingerprint,
                current_session_id: d.default.getSessionId(),
                current_fingerprint: d.default.getFingerprint(),
                current_source: N.source
            };
            _.default.track(m.rMx.EXPERIMENT_USER_TRIGGERED_IGNORED, t, {
                flush: !1,
                fingerprint: s
            });
        } else
            _.default.track(f, e, {
                flush: !0,
                fingerprint: s
            });
    } else if (n.type === p.xY.GUILD) {
        let e = c ? m.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : m.rMx.EXPERIMENT_GUILD_TRIGGERED,
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
                current_source: N.source
            };
            _.default.track(m.rMx.EXPERIMENT_GUILD_TRIGGERED_IGNORED, e, {
                flush: !1,
                fingerprint: s
            });
        } else
            _.default.track(e, a, {
                flush: !0,
                fingerprint: s
            });
    }
    !u &&
        ((y[G(t, n, r, c)] = {
            time: Date.now(),
            hash: B(n)
        }),
        ee(y));
}
function j(e) {
    let [t, n] = e;
    return null != h.Z[t] ? h.Z[t](n) : null;
}
function H(e) {
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
        filters: n.map(j),
        rawFilterData: n
    };
}
function Y(e) {
    var t;
    !x && 'CONNECTION_OPEN' === e.type && U(e.user) && (x = !0),
        'EXPERIMENTS_FETCH_SUCCESS' === e.type &&
            b &&
            'ready_payload' === N.source &&
            _.default.track(m.rMx.EXPERIMENT_FETCH_IGNORED, {
                fingerprint: e.fingerprint,
                current_snapshot_source: N.source,
                current_snapshot_session_id: N.sessionId,
                current_snapshot_fingerprint: N.fingerprint
            }),
        (C = {}),
        (R = {}),
        (O = {});
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
        (b = !0);
}
function W(e) {
    let { rawUserExperiments: t, rawGuildExperiments: n, source: r, sessionId: i, fingerprint: a } = e,
        s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    (N = {
        rawUserExperiments: t,
        rawGuildExperiments: null != n ? n : [],
        source: r,
        sessionId: i,
        fingerprint: a
    }),
        t.forEach((e) => {
            let [t, n, o, l, u, c, d, f] = e;
            C[t] = {
                type: 'user',
                revision: n,
                population: u,
                bucket: o,
                override: 0 === l,
                hashResult: null != c ? c : -1,
                aaMode: 1 === d,
                triggerDebuggingEnabled: k(1 === f, t),
                assignmentSource: r,
                sessionId: i,
                loadedFromCache: s,
                fingerprint: a
            };
        }),
        null != n &&
            n.forEach((e) => {
                let [t, n, o, l, u, c, d, f, _, h] = e;
                R[t] = {
                    hashKey: n,
                    revision: o,
                    populations: l.map(H),
                    overrides: (function (e) {
                        let t = {};
                        if (null == e) return t;
                        for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
                        return t;
                    })(u),
                    overridesFormatted: (null != c ? c : []).map((e) => e.map(H)),
                    holdoutName: null != d ? d : null,
                    holdoutBucket: null != f ? f : null,
                    aaMode: 1 === _,
                    triggerDebuggingEnabled: k(1 === h, t),
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
        if ((r = null != t ? t.bucket : p.NZ.CONTROL) === p.NZ.NOT_ELIGIBLE) break;
        return r;
    }
    return null;
}
function z(e) {
    let t = {};
    for (let r in e) {
        var n;
        let i = e[r];
        for (let e of ((t[r] = { ...i }), t[r].populations)) e.filters = e.rawFilterData.map(j);
        for (let e of null !== (n = t[r].overridesFormatted) && void 0 !== n ? n : []) for (let t of e) t.filters = t.rawFilterData.map(j);
    }
    return t;
}
function q(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !x && U(n) && (x = !0),
        (b = t.hasLoadedExperiments),
        (y = t.trackedExposureExperiments),
        (C = t.loadedUserExperiments),
        (D = t.userExperimentOverrides),
        (L = t.guildExperimentOverrides),
        (N = {
            ...N,
            source: t.assignmentSource,
            sessionId: t.assignmentSessionId,
            fingerprint: t.assignmentFingerprint
        }),
        (R = z(t.loadedGuildExperiments)),
        (O = {});
}
function Q() {
    b = !0;
}
function X(e) {
    let { isSwitchingAccount: t } = e;
    o.K.remove(E),
        !t && (o.K.remove(v), o.K.remove(I), o.K.remove(S), (D = {}), (L = {})),
        (C = {}),
        (N = {
            ...N,
            rawUserExperiments: []
        }),
        (y = {}),
        (b = !1);
}
function J() {
    (b = !1), (y = {}), (R = {}), o.K.remove(E);
}
function $() {
    try {
        o.K.set(I, D);
    } catch (e) {
        T.error('Error saving user experiment overrides, unsaved data will be lost', e),
            _.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
    try {
        o.K.set(S, L);
    } catch (e) {
        T.error('Error saving guild experiment overrides, unsaved data will be lost', e),
            _.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
}
function ee(e) {
    try {
        o.K.set(E, {
            v: 1,
            e: e
        });
    } catch (e) {
        T.error('Error saving tracked exposure experiments, unsaved data will be lost', e),
            _.default.track(m.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveTrackedExposureExperiments'
            });
    }
}
function et(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: s } = e;
    A[t] = {
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
        s = null != i ? i : null === (t = A[n]) || void 0 === t ? void 0 : t.type;
    if (null == s) return !1;
    if (
        (null == r
            ? ((D = { ...D }), delete D[n], (L = { ...L }), delete L[n])
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
              : (L = {
                    ...L,
                    [n]: {
                        type: s,
                        revision: 1,
                        bucket: r,
                        override: !0
                    }
                }),
        !a)
    )
        for (let e of [D, L]) for (let t in e) null == A[t] && delete D[t];
    $();
}
function er(e) {
    let { guild: t } = e;
    for (let e in O) {
        let [n] = e.split(':');
        t.id === n && delete O[e];
    }
}
class ei extends f.Z {
    initialize() {
        (y = (function () {
            let e = o.K.get(E);
            if (null == e || 1 !== e.v) return {};
            let t = e.e,
                n = Date.now(),
                r = !1;
            for (let e in t) n - t[e].time > 604800000 && (delete t[e], (r = !0));
            return r && ee(t), t;
        })()),
            !(function () {
                var e, t, n;
                let r = [null !== (e = o.K.get(v)) && void 0 !== e ? e : {}, null !== (t = o.K.get(I)) && void 0 !== t ? t : {}, null !== (n = o.K.get(S)) && void 0 !== n ? n : {}];
                (D = {}), (L = {});
                let a = !i().isEmpty(r[0]);
                for (let e of r)
                    for (let t in e) {
                        let n = e[t];
                        null == n || (n.type !== p.xY.USER && n.type !== p.xY.GUILD) || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], (a = !0)) : n.type === p.xY.USER ? (D[t] = n) : (L[t] = n);
                    }
                let s = (0, u._S)();
                for (let e in s)
                    (D[e] = {
                        type: p.xY.USER,
                        revision: 1,
                        population: 0,
                        override: !0,
                        fromCookie: !0,
                        assignmentSource: 'override',
                        bucket: s[e]
                    }),
                        (L[e] = {
                            type: p.xY.GUILD,
                            revision: 1,
                            override: !0,
                            fromCookie: !0,
                            assignmentSource: 'override',
                            bucket: s[e]
                        }),
                        (a = !0);
                a && $();
            })(),
            this.waitFor(d.default),
            this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(ei.LATEST_SNAPSHOT_VERSION);
        null != e && ('loadedUserExperiments' in e ? ((C = e.loadedUserExperiments), (R = z(e.loadedGuildExperiments)), Object.values(C).forEach((e) => (e.loadedFromCache = !0)), Object.values(R).forEach((e) => (e.loadedFromCache = !0))) : W(e, !0));
    }
    takeSnapshot() {
        return {
            version: ei.LATEST_SNAPSHOT_VERSION,
            data: { ...N }
        };
    }
    get hasLoadedExperiments() {
        return b;
    }
    hasRegisteredExperiment(e) {
        return null != A[e];
    }
    getUserExperimentDescriptor(e) {
        if (x) {
            let t = D[e];
            if (null != t) return t;
        }
        let t = M(e);
        return C[''.concat(t)];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = null != t ? t : m.lds,
            r = L[e];
        if (x && null != r) return r;
        let i = ''.concat(n, ':').concat(e);
        if (i in O) return O[i];
        let a = (function e(t, n) {
            var r, i;
            let a = M(n),
                s = R[''.concat(a)];
            if (null == s) return null;
            let { revision: o, aaMode: l } = s,
                u = s.overrides[t],
                c = s.triggerDebuggingEnabled;
            if (null != u)
                return u === p.NZ.NOT_ELIGIBLE
                    ? null
                    : {
                          type: p.xY.GUILD,
                          guildId: t,
                          revision: o,
                          bucket: u,
                          override: !0,
                          hashResult: -1,
                          triggerDebuggingEnabled: c
                      };
            let d = M(''.concat(null !== (r = s.hashKey) && void 0 !== r ? r : n, ':').concat(t)) % 10000,
                f = null;
            for (let e of null !== (i = s.overridesFormatted) && void 0 !== i ? i : [])
                if (null !== (f = K(t, e, d)))
                    return {
                        type: p.xY.GUILD,
                        guildId: t,
                        revision: s.revision,
                        bucket: f,
                        override: !0,
                        hashResult: d,
                        triggerDebuggingEnabled: c,
                        assignmentSource: s.assignmentSource,
                        sessionId: s.sessionId,
                        loadedFromCache: s.loadedFromCache
                    };
            if (null == (f = K(t, s.populations, d))) return null;
            if (null != s.holdoutName && null != s.holdoutBucket && s.holdoutName !== n) {
                let n = e(t, s.holdoutName);
                if (
                    (null == n ? void 0 : n.bucket) != null &&
                    (!0 !== n.override &&
                        V({
                            experimentId: s.holdoutName,
                            descriptor: n
                        }),
                    (null == n ? void 0 : n.bucket) === s.holdoutBucket)
                )
                    return null;
            }
            return {
                type: p.xY.GUILD,
                guildId: t,
                revision: s.revision,
                bucket: f,
                hashResult: d,
                aaMode: l,
                triggerDebuggingEnabled: c,
                assignmentSource: s.assignmentSource,
                sessionId: s.sessionId,
                loadedFromCache: s.loadedFromCache
            };
        })(n, e);
        return (O[i] = a), a;
    }
    getUserExperimentBucket(e) {
        let t = this.getUserExperimentDescriptor(e);
        return null != t ? t.bucket : p.NZ.NOT_ELIGIBLE;
    }
    getGuildExperimentBucket(e, t) {
        let n = this.getGuildExperimentDescriptor(e, t);
        return null != n ? n.bucket : p.NZ.NOT_ELIGIBLE;
    }
    getAllUserExperimentDescriptors() {
        return C;
    }
    getGuildExperiments() {
        return R;
    }
    getLoadedUserExperiment(e) {
        return C[M(e)];
    }
    getLoadedGuildExperiment(e) {
        return R[M(e)];
    }
    getRecentExposures(e, t) {
        let n = ''.concat(e, '|').concat(t, '|');
        return Object.entries(y)
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
        return A;
    }
    getAllExperimentOverrideDescriptors() {
        return x
            ? {
                  ...D,
                  ...L
              }
            : {};
    }
    getExperimentOverrideDescriptor(e) {
        var t;
        return x ? (null !== (t = D[e]) && void 0 !== t ? t : L[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(A).forEach((e) => {
            t[M(''.concat(e))] = e;
        }),
        C)) {
            let r = t[n];
            null != r && (e[r] = C[n].bucket);
        }
        for (let t in O) {
            let n = O[t];
            null != n && (e[t] = n.bucket);
        }
        return e;
    }
    getSerializedState() {
        let e = {};
        for (let t in R) for (let n of ((e[t] = JSON.parse(JSON.stringify(R[t]))), e[t].populations)) n.filters = [];
        return {
            hasLoadedExperiments: b,
            trackedExposureExperiments: y,
            loadedUserExperiments: C,
            loadedGuildExperiments: e,
            userExperimentOverrides: D,
            guildExperimentOverrides: L,
            assignmentSource: N.source,
            assignmentSessionId: N.sessionId,
            assignmentFingerprint: N.fingerprint
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return F(e, t, n, r);
    }
    constructor() {
        super(
            {
                LOGOUT: X,
                LOGIN_SUCCESS: J,
                CONNECTION_OPEN: Y,
                EXPERIMENTS_FETCH_SUCCESS: Y,
                OVERLAY_INITIALIZE: q,
                EXPERIMENTS_FETCH_FAILURE: Q,
                EXPERIMENT_OVERRIDE_BUCKET: en,
                GUILD_CREATE: er,
                GUILD_UPDATE: er
            },
            l.c.Early
        ),
            g(this, 'trackExposure', V);
    }
}
g(ei, 'displayName', 'ExperimentStore'), g(ei, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new ei());
