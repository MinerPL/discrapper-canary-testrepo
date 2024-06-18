"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(846519),
  d = n(570140),
  c = n(274616),
  E = n(57513),
  I = n(51025),
  T = n(812206),
  h = n(283595),
  S = n(417363),
  f = n(391690),
  N = n(70956),
  A = n(780570),
  m = n(804739);
let O = new Set,
  R = {},
  C = new Set,
  p = {},
  g = new Set,
  L = {},
  v = 10 * N.Z.Millis.MINUTE,
  D = 6 * N.Z.Millis.HOUR,
  M = 10 * N.Z.Millis.MINUTE,
  P = new _.V7;

function y(e) {
  P.start(e + Math.random() * v, c.o)
}

function U() {
  if (!(0, m.Q)()) return !1;
  let e = h.Z.entitledBranchIds,
    t = [];
  for (let n of e) !L.hasOwnProperty(n) && (L[n] = null, t.push(n));
  if (0 === t.length) return !1;
  d.Z.wait(() => c.o(t))
}

function b(e, t) {
  if (null != R[t] && f.Z.shouldBeInstalled(e, t)) {
    let n = R[t],
      i = n.manifestIds,
      r = S.Z.getState(e, t);
    null != r && r.shouldPatch && (r.buildId !== n.id || !l().isEqual(r.manifestIds, i)) && d.Z.wait(() => {
      let r = T.Z.getApplication(e);
      null != r ? (g.delete((0, A.Tu)(e, t)), (0, I.li)(r, t, n.id, i, !0)) : g.add((0, A.Tu)(e, t))
    })
  }
}

function G() {
  P.stop()
}
class w extends(i = u.ZP.Store) {
  initialize() {
    this.syncWith([h.Z], U), this.waitFor(S.Z, h.Z, T.Z)
  }
  getTargetBuildId(e, t) {
    return null == R[t] ? null : R[t].id
  }
  getTargetManifests(e, t) {
    return null == R[t] ? null : R[t].manifestIds
  }
  hasNoBuild(e, t) {
    return C.has(t)
  }
  isFetching(e, t) {
    return O.has(t)
  }
  needsToFetchBuildSize(e) {
    return !p.hasOwnProperty(e)
  }
  getBuildSize(e) {
    return p[e]
  }
}
o = "ApplicationBuildStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new w(d.Z, {
  CONNECTION_OPEN: function() {
    return y(D), U()
  },
  GAMES_DATABASE_UPDATE: function() {
    if (!(0, m.Q)()) return !1;
    for (let e of g) {
      let {
        applicationId: t,
        branchId: n
      } = (0, A.CP)(e);
      null != T.Z.getApplication(t) && (g.delete(e), b(t, n))
    }
  },
  APPLICATION_BUILD_FETCH_START: function(e) {
    let {
      branchId: t
    } = e;
    O.add(t)
  },
  APPLICATION_BUILD_FETCH_SUCCESS: function(e) {
    let {
      applicationId: t,
      branchId: n,
      locale: i,
      build: r
    } = e;
    O.delete(n);
    let s = r.manifests.map(e => {
        let {
          id: t
        } = e;
        return t
      }),
      o = r.id;
    C.delete(n), R[n] = {
      id: o,
      applicationId: t,
      branchId: n,
      locale: i,
      manifestIds: s
    }, b(t, n)
  },
  APPLICATION_BUILD_NOT_FOUND: function(e) {
    let {
      branchId: t
    } = e;
    O.delete(t), C.add(t)
  },
  APPLICATION_BUILD_SIZE_FETCH_START: function(e) {
    let {
      buildId: t
    } = e;
    !p.hasOwnProperty(t) && (p[t] = null)
  },
  APPLICATION_BUILD_SIZE_FETCH_SUCCESS: function(e) {
    let {
      buildId: t,
      sizeKB: n
    } = e;
    p[t] = n
  },
  APPLICATION_BUILD_SIZE_FETCH_FAIL: function(e) {
    let {
      buildId: t
    } = e;
    null == p[t] && delete p[t]
  },
  APPLICATION_BRANCHES_FETCH_SUCCESS: function(e) {
    let {
      branches: t
    } = e, n = {};
    for (let e in h.Z.libraryApplications) {
      let t = h.Z.libraryApplications[e];
      n[t.branchId] = t
    }
    for (let e of t) {
      let {
        id: t,
        liveBuildId: i
      } = e;
      if (i !== L[t]) {
        let e = n[t];
        null != e && d.Z.wait(() => E.l(e.id, e.branchId, !0))
      }
      L[t] = i
    }
    y(D)
  },
  APPLICATION_BRANCHES_FETCH_FAIL: function() {
    y(M)
  },
  CONNECTION_CLOSED: G,
  LOGOUT: G,
  SKU_PURCHASE_SUCCESS: function(e) {
    let {
      entitlements: t
    } = e;
    if (!(0, m.Q)()) return !1;
    let n = new Set;
    for (let e of t) n.add(e.application_id);
    for (let e in h.Z.libraryApplications) {
      let t = h.Z.libraryApplications[e];
      n.has(t.id) && (0, A.Je)(t) && d.Z.wait(() => E.l(t.id, t.branchId))
    }
  }
})