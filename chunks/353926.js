n.d(t, {
    V: function () {
        return en;
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
    v = [],
    C = [],
    y = {},
    L = {},
    D = {},
    b = {},
    M = {},
    P = 'staging' === window.GLOBAL_ENV.RELEASE_CHANNEL,
    U = {};
function w(e) {
    let t = U[e];
    if (void 0 !== t) return t;
    {
        let t = s().v3(e);
        return (U[e] = t), t;
    }
}
let x = h.qO.map((e) => w(e));
function G(e, t) {
    return e || x.includes(t);
}
function k(e) {
    var t;
    return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & p.xW$.STAFF) === p.xW$.STAFF || null != e.personal_connection_id || !1;
}
function B(e, t, n, r) {
    let i = ''.concat(t.type, '|').concat(e),
        a = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
    if (t.type === h.xY.USER) return a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
    if (t.type === h.xY.GUILD) return (i += '|'.concat(t.guildId)), a && ((i += '|'.concat(n)), r && (i += '|triggerDebugging')), i;
    throw Error();
}
function F(e) {
    if (e.type === h.xY.USER) return w(''.concat(e.bucket, '|').concat(e.revision));
    if (e.type === h.xY.GUILD) return w(''.concat(e.bucket, '|').concat(e.revision, '|').concat(e.guildId));
    throw Error();
}
let V = Date.now();
function H(e, t, n, r) {
    let i = O[B(e, t, n, r)];
    return !(null == i || Date.now() - i.time > 604800000) && i.hash === F(t);
}
function Z(e) {
    let { experimentId: t, descriptor: n, location: r, location_stack: i, context: a, fingerprint: s, excluded: o, exposureType: l } = e;
    if (n.override) return !1;
    let u = l === h.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
    if (H(t, n, r, u)) return !1;
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
            exposure_type: l
        };
        null != a && (e.context_guild_id = a.guildId);
        let c = u ? p.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : p.rMx.EXPERIMENT_USER_TRIGGERED;
        E.default.track(c, e, {
            flush: !0,
            fingerprint: s
        });
    } else if (n.type === h.xY.GUILD) {
        let e = u ? p.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : p.rMx.EXPERIMENT_GUILD_TRIGGERED;
        E.default.track(
            e,
            {
                name: t,
                revision: n.revision,
                bucket: n.bucket,
                guild_id: n.guildId,
                location: r,
                location_stack: i,
                hash_result: n.hashResult,
                excluded: o,
                exposure_type: l
            },
            {
                flush: !0,
                fingerprint: s
            }
        );
    }
    (O[B(t, n, r, u)] = {
        time: Date.now(),
        hash: F(n)
    }),
        et(O);
}
function Y(e) {
    let [t, n] = e;
    return null != f.Z[t] ? f.Z[t](n) : null;
}
function j(e) {
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
        filters: n.map(Y),
        rawFilterData: n
    };
}
function W(e) {
    !P && 'CONNECTION_OPEN' === e.type && k(e.user) && (P = !0), (y = {}), (L = {}), (D = {});
    let t = 'CONNECTION_OPEN' === e.type || null == e.fingerprint || e.fingerprint === d.default.getFingerprint(),
        { experiments: r, guildExperiments: i } = e;
    t && K(r, i), n(598984).Vx.trackExposure(), (N = !0);
}
function K(e, t) {
    (v = e),
        (C = null != t ? t : []),
        e.forEach((e) => {
            let [t, n, r, i, a, s, o, l] = e;
            y[t] = {
                type: 'user',
                revision: n,
                population: a,
                bucket: r,
                override: 0 === i,
                hashResult: null != s ? s : -1,
                aaMode: 1 === o,
                triggerDebuggingEnabled: G(1 === l, t)
            };
        }),
        null != t &&
            t.forEach((e) => {
                let [t, n, r, i, a, s, o, l, u, c] = e;
                L[t] = {
                    hashKey: n,
                    revision: r,
                    populations: i.map(j),
                    overrides: (function (e) {
                        let t = {};
                        if (null == e) return t;
                        for (let { b: n, k: r } of e) for (let e of r) t[e] = n;
                        return t;
                    })(a),
                    overridesFormatted: (null != s ? s : []).map((e) => e.map(j)),
                    holdoutName: null != o ? o : null,
                    holdoutBucket: null != l ? l : null,
                    aaMode: 1 === u,
                    triggerDebuggingEnabled: G(1 === c, t)
                };
            });
}
function z(e, t, n) {
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
function q(e) {
    let t = {};
    for (let r in e) {
        var n;
        let i = e[r];
        for (let e of ((t[r] = { ...i }), t[r].populations)) e.filters = e.rawFilterData.map(Y);
        for (let e of null !== (n = t[r].overridesFormatted) && void 0 !== n ? n : []) for (let t of e) t.filters = t.rawFilterData.map(Y);
    }
    return t;
}
function Q(e) {
    let { serializedExperimentStore: t, user: n } = e;
    !P && k(n) && (P = !0), (N = t.hasLoadedExperiments), (O = t.trackedExposureExperiments), (y = t.loadedUserExperiments), (b = t.userExperimentOverrides), (M = t.guildExperimentOverrides), (L = q(t.loadedGuildExperiments)), (D = {});
}
function X() {
    N = !0;
}
function $(e) {
    let { isSwitchingAccount: t } = e;
    o.K.remove(m), !t && (o.K.remove(T), o.K.remove(S), o.K.remove(g), (b = {}), (M = {})), (y = {}), (v = []), (O = {}), (N = !1);
}
function J() {
    (N = !1), (O = {}), o.K.remove(m);
}
function ee() {
    try {
        o.K.set(S, b);
    } catch (e) {
        A.error('Error saving user experiment overrides, unsaved data will be lost', e),
            E.default.track(p.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
    try {
        o.K.set(g, M);
    } catch (e) {
        A.error('Error saving guild experiment overrides, unsaved data will be lost', e),
            E.default.track(p.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
                module: 'discord_app',
                call: 'ExperimentStore.saveExperimentOverrides'
            });
    }
}
function et(e) {
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
function en(e) {
    let { experimentId: t, experimentType: n, title: r, description: i, buckets: a, commonTriggerPoint: s } = e;
    R[t] = {
        type: n,
        title: r,
        description: i,
        buckets: a,
        commonTriggerPoint: s
    };
}
function er(e) {
    var t;
    let { experimentId: n, experimentBucket: r, experimentType: i, skipCleanup: a } = e,
        s = null != i ? i : null === (t = R[n]) || void 0 === t ? void 0 : t.type;
    if (null == s) return !1;
    if (
        (null == r
            ? ((b = { ...b }), delete b[n], (M = { ...M }), delete M[n])
            : 'user' === s
              ? (b = {
                    ...b,
                    [n]: {
                        type: s,
                        revision: 1,
                        population: 0,
                        bucket: r,
                        override: !0
                    }
                })
              : (M = {
                    ...M,
                    [n]: {
                        type: s,
                        revision: 1,
                        bucket: r,
                        override: !0
                    }
                }),
        !a)
    )
        for (let e of [b, M]) for (let t in e) null == R[t] && delete b[t];
    ee();
}
function ei(e) {
    let { guild: t } = e;
    for (let e in D) {
        let [n] = e.split(':');
        t.id === n && delete D[e];
    }
}
class ea extends _.Z {
    initialize() {
        (O = (function () {
            let e = o.K.get(m);
            if (null == e || 1 !== e.v) return {};
            let t = e.e,
                n = Date.now(),
                r = !1;
            for (let e in t) n - t[e].time > 604800000 && (delete t[e], (r = !0));
            return r && et(t), t;
        })()),
            !(function () {
                var e, t, n;
                let r = [null !== (e = o.K.get(T)) && void 0 !== e ? e : {}, null !== (t = o.K.get(S)) && void 0 !== t ? t : {}, null !== (n = o.K.get(g)) && void 0 !== n ? n : {}];
                (b = {}), (M = {});
                let a = !i().isEmpty(r[0]);
                for (let e of r)
                    for (let t in e) {
                        let n = e[t];
                        null == n || (n.type !== h.xY.USER && n.type !== h.xY.GUILD) || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], (a = !0)) : n.type === h.xY.USER ? (b[t] = n) : (M[t] = n);
                    }
                let s = (0, u._S)();
                for (let e in s)
                    (b[e] = {
                        type: h.xY.USER,
                        revision: 1,
                        population: 0,
                        override: !0,
                        fromCookie: !0,
                        bucket: s[e]
                    }),
                        (M[e] = {
                            type: h.xY.GUILD,
                            revision: 1,
                            override: !0,
                            fromCookie: !0,
                            bucket: s[e]
                        }),
                        (a = !0);
                a && ee();
            })(),
            this.waitFor(d.default),
            this.loadCache();
    }
    loadCache() {
        let e = this.readSnapshot(ea.LATEST_SNAPSHOT_VERSION);
        null != e && ('loadedUserExperiments' in e ? ((y = e.loadedUserExperiments), (L = q(e.loadedGuildExperiments))) : K(e.rawUserExperiments, e.rawGuildExperiments));
    }
    takeSnapshot() {
        return {
            version: ea.LATEST_SNAPSHOT_VERSION,
            data: {
                rawUserExperiments: v,
                rawGuildExperiments: C
            }
        };
    }
    get hasLoadedExperiments() {
        return N;
    }
    hasRegisteredExperiment(e) {
        return null != R[e];
    }
    getUserExperimentDescriptor(e) {
        if (P) {
            let t = b[e];
            if (null != t) return t;
        }
        let t = w(e);
        return y[''.concat(t)];
    }
    getGuildExperimentDescriptor(e, t) {
        let n = null != t ? t : p.lds,
            r = M[e];
        if (P && null != r) return r;
        let i = ''.concat(n, ':').concat(e);
        if (i in D) return D[i];
        let a = (function e(t, n) {
            var r, i;
            let a = w(n),
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
            let d = w(''.concat(null !== (r = s.hashKey) && void 0 !== r ? r : n, ':').concat(t)) % 10000,
                _ = null;
            for (let e of null !== (i = s.overridesFormatted) && void 0 !== i ? i : [])
                if (null !== (_ = z(t, e, d)))
                    return {
                        type: h.xY.GUILD,
                        guildId: t,
                        revision: s.revision,
                        bucket: _,
                        override: !0,
                        hashResult: d,
                        triggerDebuggingEnabled: c
                    };
            if (null == (_ = z(t, s.populations, d))) return null;
            if (null != s.holdoutName && null != s.holdoutBucket && s.holdoutName !== n) {
                let n = e(t, s.holdoutName);
                if (
                    (null == n ? void 0 : n.bucket) != null &&
                    (!0 !== n.override &&
                        Z({
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
        return (D[i] = a), a;
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
        return y;
    }
    getGuildExperiments() {
        return L;
    }
    getLoadedUserExperiment(e) {
        return y[w(e)];
    }
    getLoadedGuildExperiment(e) {
        return L[w(e)];
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
        return P
            ? {
                  ...b,
                  ...M
              }
            : {};
    }
    getExperimentOverrideDescriptor(e) {
        var t;
        return P ? (null !== (t = b[e]) && void 0 !== t ? t : M[e]) : null;
    }
    getAllExperimentAssignments() {
        let e = {},
            t = {};
        for (let n in (Object.keys(R).forEach((e) => {
            t[w(''.concat(e))] = e;
        }),
        y)) {
            let r = t[n];
            null != r && (e[r] = y[n].bucket);
        }
        for (let t in D) {
            let n = D[t];
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
            loadedUserExperiments: y,
            loadedGuildExperiments: e,
            userExperimentOverrides: b,
            guildExperimentOverrides: M
        };
    }
    hasExperimentTrackedExposure(e, t, n, r) {
        return H(e, t, n, r);
    }
    constructor() {
        super(
            {
                LOGOUT: $,
                LOGIN_SUCCESS: J,
                CONNECTION_OPEN: W,
                EXPERIMENTS_FETCH_SUCCESS: W,
                OVERLAY_INITIALIZE: Q,
                EXPERIMENTS_FETCH_FAILURE: X,
                EXPERIMENT_OVERRIDE_BUCKET: er,
                GUILD_CREATE: ei,
                GUILD_UPDATE: ei
            },
            l.c.Early
        ),
            I(this, 'trackExposure', Z);
    }
}
I(ea, 'displayName', 'ExperimentStore'), I(ea, 'LATEST_SNAPSHOT_VERSION', 1), (t.Z = new ea());
