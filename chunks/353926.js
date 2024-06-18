"use strict";
n.d(t, {
  V: function() {
    return et
  }
}), n(789020), n(411104), n(47120), n(757143);
var i = n(392711),
  r = n.n(i),
  s = n(108131),
  o = n.n(s),
  a = n(433517),
  l = n(865427),
  u = n(710845),
  _ = n(314897),
  d = n(412788),
  c = n(626135),
  E = n(360359),
  I = n(987338),
  T = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = "scientist:triggered",
  f = "exerimentOverrides",
  N = "userExperimentOverrides",
  A = "guildExperimentOverrides",
  m = new u.Z("ExperimentStore"),
  O = !1,
  R = {},
  C = {},
  p = [],
  g = [],
  L = {},
  v = {},
  D = {},
  M = {},
  P = {},
  y = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL,
  U = {};

function b(e) {
  let t = U[e];
  if (void 0 !== t) return t;
  {
    let t = o().v3(e);
    return U[e] = t, t
  }
}
let G = I.qO.map(e => b(e));

function w(e, t) {
  return e || G.includes(t)
}

function k(e) {
  var t;
  return ((null !== (t = e.flags) && void 0 !== t ? t : 0) & T.xW$.STAFF) === T.xW$.STAFF || null != e.personal_connection_id || !1
}

function B(e, t, n, i) {
  let r = "".concat(t.type, "|").concat(e),
    s = t.triggerDebuggingEnabled && void 0 !== n && n.length > 0;
  if (t.type === I.xY.USER) return s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
  if (t.type === I.xY.GUILD) return r += "|".concat(t.guildId), s && (r += "|".concat(n), i && (r += "|triggerDebugging")), r;
  throw Error()
}

function x(e) {
  if (e.type === I.xY.USER) return b("".concat(e.bucket, "|").concat(e.revision));
  if (e.type === I.xY.GUILD) return b("".concat(e.bucket, "|").concat(e.revision, "|").concat(e.guildId));
  throw Error()
}
let V = Date.now();

function Z(e, t, n, i) {
  let r = R[B(e, t, n, i)];
  return !(null == r || Date.now() - r.time > 6048e5) && r.hash === x(t)
}

function H(e) {
  let {
    experimentId: t,
    descriptor: n,
    location: i,
    location_stack: r,
    context: s,
    fingerprint: o,
    excluded: a,
    exposureType: l
  } = e;
  if (n.override) return !1;
  let u = l === I.a0.AUTO_FALLBACK && !!n.triggerDebuggingEnabled;
  if (Z(t, n, i, u)) return !1;
  if (n.type === I.xY.USER) {
    let e = {
      name: t,
      revision: n.revision,
      population: n.population,
      bucket: n.bucket,
      location: i,
      location_stack: r,
      hash_result: n.hashResult,
      excluded: a,
      exposure_type: l
    };
    null != s && (e.context_guild_id = s.guildId);
    let _ = u ? T.rMx.EXPERIMENT_USER_TRIGGERED_FALLBACK : T.rMx.EXPERIMENT_USER_TRIGGERED;
    c.default.track(_, e, {
      flush: !0,
      fingerprint: o
    })
  } else if (n.type === I.xY.GUILD) {
    let e = u ? T.rMx.EXPERIMENT_GUILD_TRIGGERED_FALLBACK : T.rMx.EXPERIMENT_GUILD_TRIGGERED;
    c.default.track(e, {
      name: t,
      revision: n.revision,
      bucket: n.bucket,
      guild_id: n.guildId,
      location: i,
      location_stack: r,
      hash_result: n.hashResult,
      excluded: a,
      exposure_type: l
    }, {
      flush: !0,
      fingerprint: o
    })
  }
  R[B(t, n, i, u)] = {
    time: Date.now(),
    hash: x(n)
  }, ee(R)
}

function F(e) {
  let [t, n] = e;
  return null != E.Z[t] ? E.Z[t](n) : null
}

function Y(e) {
  let [t, n] = e;
  return {
    buckets: t.map(e => {
      let [t, n] = e;
      return {
        bucket: t,
        positions: n.map(e => {
          let {
            s: t,
            e: n
          } = e;
          return {
            start: t,
            end: n
          }
        })
      }
    }),
    filters: n.map(F),
    rawFilterData: n
  }
}

function j(e) {
  !y && "CONNECTION_OPEN" === e.type && k(e.user) && (y = !0), L = {}, v = {}, D = {};
  let t = "CONNECTION_OPEN" === e.type || null == e.fingerprint || e.fingerprint === _.default.getFingerprint(),
    {
      experiments: i,
      guildExperiments: r
    } = e;
  t && W(i, r), n(185745).Vx.trackExposure(), O = !0
}

function W(e, t) {
  p = e, g = null != t ? t : [], e.forEach(e => {
    let [t, n, i, r, s, o, a, l] = e;
    L[t] = {
      type: "user",
      revision: n,
      population: s,
      bucket: i,
      override: 0 === r,
      hashResult: null != o ? o : -1,
      aaMode: 1 === a,
      triggerDebuggingEnabled: w(1 === l, t)
    }
  }), null != t && t.forEach(e => {
    let [t, n, i, r, s, o, a, l, u, _] = e;
    v[t] = {
      hashKey: n,
      revision: i,
      populations: r.map(Y),
      overrides: function(e) {
        let t = {};
        if (null == e) return t;
        for (let {
            b: n,
            k: i
          }
          of e)
          for (let e of i) t[e] = n;
        return t
      }(s),
      overridesFormatted: (null != o ? o : []).map(e => e.map(Y)),
      holdoutName: null != a ? a : null,
      holdoutBucket: null != l ? l : null,
      aaMode: 1 === u,
      triggerDebuggingEnabled: w(1 === _, t)
    }
  })
}

function K(e, t, n) {
  let i = null;
  for (let {
      buckets: s,
      filters: o
    }
    of t) {
    var r = !0;
    if (null != o) {
      for (let t of o)
        if (null != t && !t(e)) {
          r = !1;
          break
        }
    }
    if (!r) continue;
    let t = s.find(e => {
      let {
        positions: t
      } = e;
      return t.some(e => {
        let {
          start: t,
          end: i
        } = e;
        return n >= t && n < i
      })
    });
    if ((i = null != t ? t.bucket : I.NZ.CONTROL) === I.NZ.NOT_ELIGIBLE) break;
    return i
  }
  return null
}

function z(e) {
  let t = {};
  for (let i in e) {
    var n;
    let r = e[i];
    for (let e of (t[i] = {
        ...r
      }, t[i].populations)) e.filters = e.rawFilterData.map(F);
    for (let e of null !== (n = t[i].overridesFormatted) && void 0 !== n ? n : [])
      for (let t of e) t.filters = t.rawFilterData.map(F)
  }
  return t
}

function q(e) {
  let {
    serializedExperimentStore: t,
    user: n
  } = e;
  !y && k(n) && (y = !0), O = t.hasLoadedExperiments, R = t.trackedExposureExperiments, L = t.loadedUserExperiments, M = t.userExperimentOverrides, P = t.guildExperimentOverrides, v = z(t.loadedGuildExperiments), D = {}
}

function X() {
  O = !0
}

function Q(e) {
  let {
    isSwitchingAccount: t
  } = e;
  a.K.remove(S), !t && (a.K.remove(f), a.K.remove(N), a.K.remove(A), M = {}, P = {}), L = {}, p = [], R = {}, O = !1
}

function J() {
  O = !1, R = {}, a.K.remove(S)
}

function $() {
  try {
    a.K.set(N, M)
  } catch (e) {
    m.error("Error saving user experiment overrides, unsaved data will be lost", e), c.default.track(T.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
  try {
    a.K.set(A, P)
  } catch (e) {
    m.error("Error saving guild experiment overrides, unsaved data will be lost", e), c.default.track(T.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveExperimentOverrides"
    })
  }
}

function ee(e) {
  try {
    a.K.set(S, {
      v: 1,
      e: e
    })
  } catch (e) {
    m.error("Error saving tracked exposure experiments, unsaved data will be lost", e), c.default.track(T.rMx.EXPERIMENT_SAVE_EXPOSURE_FAILED, {
      module: "discord_app",
      call: "ExperimentStore.saveTrackedExposureExperiments"
    })
  }
}

function et(e) {
  let {
    experimentId: t,
    experimentType: n,
    title: i,
    description: r,
    buckets: s,
    commonTriggerPoint: o
  } = e;
  C[t] = {
    type: n,
    title: i,
    description: r,
    buckets: s,
    commonTriggerPoint: o
  }
}

function en(e) {
  var t;
  let {
    experimentId: n,
    experimentBucket: i,
    experimentType: r,
    skipCleanup: s
  } = e, o = null != r ? r : null === (t = C[n]) || void 0 === t ? void 0 : t.type;
  if (null == o) return !1;
  if (null == i ? (M = {
      ...M
    }, delete M[n], P = {
      ...P
    }, delete P[n]) : "user" === o ? M = {
      ...M,
      [n]: {
        type: o,
        revision: 1,
        population: 0,
        bucket: i,
        override: !0
      }
    } : P = {
      ...P,
      [n]: {
        type: o,
        revision: 1,
        bucket: i,
        override: !0
      }
    }, !s)
    for (let e of [M, P])
      for (let t in e) null == C[t] && delete M[t];
  $()
}

function ei(e) {
  let {
    guild: t
  } = e;
  for (let e in D) {
    let [n] = e.split(":");
    t.id === n && delete D[e]
  }
}
class er extends d.Z {
  initialize() {
    R = function() {
      let e = a.K.get(S);
      if (null == e || 1 !== e.v) return {};
      let t = e.e,
        n = Date.now(),
        i = !1;
      for (let e in t) n - t[e].time > 6048e5 && (delete t[e], i = !0);
      return i && ee(t), t
    }(), ! function() {
      var e, t, n;
      let i = [null !== (e = a.K.get(f)) && void 0 !== e ? e : {}, null !== (t = a.K.get(N)) && void 0 !== t ? t : {}, null !== (n = a.K.get(A)) && void 0 !== n ? n : {}];
      M = {}, P = {};
      let s = !r().isEmpty(i[0]);
      for (let e of i)
        for (let t in e) {
          let n = e[t];
          null == n || n.type !== I.xY.USER && n.type !== I.xY.GUILD || null == n.bucket || !0 !== n.override || n.fromCookie ? (delete e[t], s = !0) : n.type === I.xY.USER ? M[t] = n : P[t] = n
        }
      let o = (0, l._S)();
      for (let e in o) M[e] = {
        type: I.xY.USER,
        revision: 1,
        population: 0,
        override: !0,
        fromCookie: !0,
        bucket: o[e]
      }, P[e] = {
        type: I.xY.GUILD,
        revision: 1,
        override: !0,
        fromCookie: !0,
        bucket: o[e]
      }, s = !0;
      s && $()
    }()
  }
  loadCache() {
    let e = this.readSnapshot(er.LATEST_SNAPSHOT_VERSION);
    null != e && ("loadedUserExperiments" in e ? (L = e.loadedUserExperiments, v = z(e.loadedGuildExperiments)) : W(e.rawUserExperiments, e.rawGuildExperiments))
  }
  takeSnapshot() {
    return {
      version: er.LATEST_SNAPSHOT_VERSION,
      data: {
        rawUserExperiments: p,
        rawGuildExperiments: g
      }
    }
  }
  get hasLoadedExperiments() {
    return O
  }
  hasRegisteredExperiment(e) {
    return null != C[e]
  }
  getUserExperimentDescriptor(e) {
    if (y) {
      let t = M[e];
      if (null != t) return t
    }
    let t = b(e);
    return L["".concat(t)]
  }
  getGuildExperimentDescriptor(e, t) {
    let n = null != t ? t : T.lds,
      i = P[e];
    if (y && null != i) return i;
    let r = "".concat(n, ":").concat(e);
    if (r in D) return D[r];
    let s = function e(t, n) {
      var i, r;
      let s = b(n),
        o = v["".concat(s)];
      if (null == o) return null;
      let {
        revision: a,
        aaMode: l
      } = o, u = o.overrides[t], _ = o.triggerDebuggingEnabled;
      if (null != u) return u === I.NZ.NOT_ELIGIBLE ? null : {
        type: I.xY.GUILD,
        guildId: t,
        revision: a,
        bucket: u,
        override: !0,
        hashResult: -1,
        triggerDebuggingEnabled: _
      };
      let d = b("".concat(null !== (i = o.hashKey) && void 0 !== i ? i : n, ":").concat(t)) % 1e4,
        c = null;
      for (let e of null !== (r = o.overridesFormatted) && void 0 !== r ? r : [])
        if (null !== (c = K(t, e, d))) return {
          type: I.xY.GUILD,
          guildId: t,
          revision: o.revision,
          bucket: c,
          override: !0,
          hashResult: d,
          triggerDebuggingEnabled: _
        };
      if (null == (c = K(t, o.populations, d))) return null;
      if (null != o.holdoutName && null != o.holdoutBucket && o.holdoutName !== n) {
        let n = e(t, o.holdoutName);
        if ((null == n ? void 0 : n.bucket) != null && (!0 !== n.override && H({
            experimentId: o.holdoutName,
            descriptor: n
          }), (null == n ? void 0 : n.bucket) === o.holdoutBucket)) return null
      }
      return {
        type: I.xY.GUILD,
        guildId: t,
        revision: o.revision,
        bucket: c,
        hashResult: d,
        aaMode: l,
        triggerDebuggingEnabled: _
      }
    }(n, e);
    return D[r] = s, s
  }
  getUserExperimentBucket(e) {
    let t = this.getUserExperimentDescriptor(e);
    return null != t ? t.bucket : I.NZ.NOT_ELIGIBLE
  }
  getGuildExperimentBucket(e, t) {
    let n = this.getGuildExperimentDescriptor(e, t);
    return null != n ? n.bucket : I.NZ.NOT_ELIGIBLE
  }
  getAllUserExperimentDescriptors() {
    return L
  }
  getGuildExperiments() {
    return v
  }
  getLoadedUserExperiment(e) {
    return L[b(e)]
  }
  getLoadedGuildExperiment(e) {
    return v[b(e)]
  }
  getRecentExposures(e, t) {
    let n = "".concat(e, "|").concat(t, "|");
    return Object.entries(R).filter(e => {
      let [t] = e;
      return t.startsWith(n)
    }).map(e => {
      let [t, {
        time: i
      }] = e;
      return [t.replace(n, ""), i]
    })
  }
  getRegisteredExperiments() {
    return C
  }
  getAllExperimentOverrideDescriptors() {
    return y ? {
      ...M,
      ...P
    } : {}
  }
  getExperimentOverrideDescriptor(e) {
    var t;
    return y ? null !== (t = M[e]) && void 0 !== t ? t : P[e] : null
  }
  getAllExperimentAssignments() {
    let e = {},
      t = {};
    for (let n in Object.keys(C).forEach(e => {
        t[b("".concat(e))] = e
      }), L) {
      let i = t[n];
      null != i && (e[i] = L[n].bucket)
    }
    for (let t in D) {
      let n = D[t];
      null != n && (e[t] = n.bucket)
    }
    return e
  }
  getSerializedState() {
    let e = {};
    for (let t in v)
      for (let n of (e[t] = JSON.parse(JSON.stringify(v[t])), e[t].populations)) n.filters = [];
    return {
      hasLoadedExperiments: O,
      trackedExposureExperiments: R,
      loadedUserExperiments: L,
      loadedGuildExperiments: e,
      userExperimentOverrides: M,
      guildExperimentOverrides: P
    }
  }
  hasExperimentTrackedExposure(e, t, n, i) {
    return Z(e, t, n, i)
  }
  constructor() {
    super({
      LOGOUT: Q,
      LOGIN_SUCCESS: J,
      CONNECTION_OPEN: j,
      EXPERIMENTS_FETCH_SUCCESS: j,
      OVERLAY_INITIALIZE: q,
      CACHE_LOADED: () => this.loadCache(),
      EXPERIMENTS_FETCH_FAILURE: X,
      EXPERIMENT_OVERRIDE_BUCKET: en,
      GUILD_CREATE: ei,
      GUILD_UPDATE: ei
    }), h(this, "trackExposure", H)
  }
}
h(er, "displayName", "ExperimentStore"), h(er, "LATEST_SNAPSHOT_VERSION", 1), t.Z = new er