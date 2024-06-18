"use strict";
n(47120), n(411104), n(653041), n(733860);
var i, r, s, o, a, l, u, _, d = n(392711),
  c = n.n(d),
  E = n(442837),
  I = n(433517),
  T = n(570140),
  h = n(51025),
  S = n(594190),
  f = n(314897),
  N = n(173747),
  A = n(780570),
  m = n(830168),
  O = n(358085),
  R = n(417363),
  C = n(981631),
  p = n(186901);
(o = i || (i = {})).INSTALL = "Install", o.REPAIR = "Repair", (a = r || (r = {})).PATCH = "Patch", a.REPAIR = "Repair";
let g = [p.ff.AUTHENTICATION_FAILED, p.ff.NOT_ENTITLED],
  L = "DispatchManagerStore",
  v = [],
  D = [],
  M = !1,
  P = null,
  y = null,
  U = !1,
  b = new Map,
  G = !1,
  w = null;

function k() {
  let e = {
    queue: v,
    paused: M,
    userActions: Array.from(b)
  };
  I.K.set(L, e)
}

function B() {
  let e = v[0];
  if (null != e) {
    var t, n;
    let {
      comboId: i,
      action: r
    } = e, {
      applicationId: s,
      branchId: o
    } = (0, A.CP)(i);
    if (t = s, n = o, (null == P || P.applicationId !== t || P.branchId !== n) && (null == y || y.applicationId !== t || y.branchId !== n)) {
      let e = f.default.getToken(),
        t = f.default.getId();
      if (null == e) throw Error("missing user token");
      G = !m.Z.setCurrentTask(s, o, r, t, e)
    }
  }
}

function x(e, t) {
  let n = (0, A.Tu)(e, t);
  return v.findIndex(e => e.comboId === n)
}

function V(e, t, n, i) {
  let r = (0, A.Tu)(e, t),
    s = {
      comboId: r,
      action: i
    },
    o = D.indexOf(r); - 1 !== o && D.splice(o, 1);
  let a = x(e, t);
  0 !== a && (n ? -1 === a && (v.push(s), B()) : (a > 0 && v.splice(a, 1), v.unshift(s), B())), !n && M && m.Z.resume(), k()
}

function Z(e, t) {
  let n = (0, A.Tu)(e, t),
    i = D.indexOf(n); - 1 !== i && D.splice(i, 1);
  let r = x(e, t); - 1 !== r && (v.splice(r, 1), k()), B()
}

function H(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  Z(t, n)
}

function F(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, i = (0, A.Tu)(t, n), r = D.indexOf(i); - 1 !== r && D.splice(r, 1)
}

function Y() {
  let e = f.default.getToken(),
    t = f.default.getId();
  if (null != e) m.Z.setCredentials(t, e)
}

function j() {
  for (let e of S.ZP.getRunningDiscordApplicationIds()) h.al(e, e);
  let e = S.ZP.getVisibleGame();
  return !M && null != e && e.pid !== w && h.wO(), w = null == e ? null : e.pid, !1
}
class W extends(s = E.ZP.Store) {
  initialize() {
    var e;
    let t = null !== (e = I.K.get(L)) && void 0 !== e ? e : {
      queue: null,
      paused: null,
      userActions: null
    };
    if (null != t.queue) v = t.queue.map(e => "string" == typeof e ? {
      comboId: e,
      action: "Patch"
    } : e);
    null != t.paused && (M = t.paused), null != t.userActions && (b = new Map(Array.from(t.userActions))), this.waitFor(R.Z, S.ZP), this.syncWith([S.ZP], j), this.waitFor(R.Z)
  }
  get activeItems() {
    return v.map(e => {
      let {
        comboId: t
      } = e;
      return (0, A.CP)(t)
    })
  }
  get finishedItems() {
    return D.map(A.CP)
  }
  get paused() {
    return M
  }
  getQueuePosition(e, t) {
    return x(e, t)
  }
  isCorruptInstallation() {
    return G
  }
}
_ = "DispatchManagerStore", (u = "displayName") in(l = W) ? Object.defineProperty(l, u, {
  value: _,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[u] = _, t.Z = new W(T.Z, {
  DISPATCH_APPLICATION_INSTALL: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    b.set((0, A.Tu)(t, n), "Install"), V(t, n, !1, "Patch")
  },
  DISPATCH_APPLICATION_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n,
      automatic: i
    } = e;
    V(t, n, i, "Patch")
  },
  DISPATCH_APPLICATION_UNINSTALL: function(e) {
    H(e), F(e)
  },
  DISPATCH_APPLICATION_CANCEL: H,
  DISPATCH_APPLICATION_REPAIR: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    b.set((0, A.Tu)(t, n), "Repair"), V(t, n, !1, "Repair")
  },
  DISPATCH_APPLICATION_MOVE_UP: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e, i = x(t, n);
    if (i < 1) return !1;
    v.splice(0, 0, v.splice(i, 1)[0]), B(), M && m.Z.resume(), k()
  },
  DISPATCH_APPLICATION_REMOVE_FINISHED: F,
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    !U && (U = !0, B(), !M && m.Z.resume());
    let n = M;
    M = t.paused, P = t.currentTask, y = t.nextTask;
    let i = !1;
    v = v.filter(e => {
      let {
        comboId: t
      } = e, {
        applicationId: n,
        branchId: r
      } = (0, A.CP)(t), s = R.Z.getState(n, r), o = N.Z.getTargetBuildId(n, r), a = N.Z.getTargetManifests(n, r);
      if (null != s && s.type === C.vxO.UP_TO_DATE && s.buildId === s.targetBuildId && s.buildId === o && c().isEqual(s.manifestIds, s.targetManifestIds) && c().isEqual(s.manifestIds, a)) {
        if (D.push(t), b.has(t)) {
          switch (b.get(t)) {
            case "Install":
              h.XT(n, s);
              break;
            case "Repair":
              h.Wx(n, s)
          }
          b.delete(t)
        }
        return i = !0, !1
      }
      return !0
    }), B(), (i || n !== M) && k()
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e, {
      code: n
    } = t;
    if (null != n) {
      if (g.includes(n)) Y();
      else if (n === p.ff.APPLICATION_NOT_FOUND) {
        let {
          context: e
        } = t;
        if (null != e) {
          let {
            application_id: t,
            branch_id: n
          } = e;
          Z(t, n)
        }
      }
    }
  },
  CONNECTION_OPEN: function() {
    (0, O.isDesktop)() && Y()
  },
  LOGOUT: function() {
    I.K.remove(L), (0, O.isDesktop)() && m.Z.pause()
  }
})