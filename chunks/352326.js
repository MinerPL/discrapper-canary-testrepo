"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("222007"), n("70102"), n("424973"), n("843762");
var i, s, r, a, o = n("917351"),
  l = n.n(o),
  u = n("446674"),
  d = n("95410"),
  c = n("913144"),
  f = n("190017"),
  _ = n("271938"),
  h = n("568307"),
  g = n("677225"),
  m = n("964889"),
  E = n("152723"),
  p = n("773336"),
  v = n("535974"),
  S = n("49111"),
  T = n("492249");
(r = i || (i = {})).INSTALL = "Install", r.REPAIR = "Repair", (a = s || (s = {})).PATCH = "Patch", a.REPAIR = "Repair";
let I = [T.DispatchErrorCodes.AUTHENTICATION_FAILED, T.DispatchErrorCodes.NOT_ENTITLED],
  C = "DispatchManagerStore",
  A = [],
  y = [],
  N = !1,
  R = null,
  O = null,
  D = !1,
  P = new Map,
  b = !1,
  L = null;

function M() {
  let e = {
    queue: A,
    paused: N,
    userActions: Array.from(P)
  };
  d.default.set(C, e)
}

function U() {
  let e = A[0];
  if (null != e) {
    var t, n;
    let {
      comboId: i,
      action: s
    } = e, {
      applicationId: r,
      branchId: a
    } = (0, m.convertComboId)(i);
    if (t = r, n = a, (null == R || R.applicationId !== t || R.branchId !== n) && (null == O || O.applicationId !== t || O.branchId !== n)) {
      let e = _.default.getToken(),
        t = _.default.getId();
      if (null == e) throw Error("missing user token");
      b = !E.default.setCurrentTask(r, a, s, t, e)
    }
  }
}

function k(e, t) {
  let n = (0, m.getComboId)(e, t);
  return A.findIndex(e => e.comboId === n)
}

function w(e, t, n, i) {
  let s = (0, m.getComboId)(e, t),
    r = {
      comboId: s,
      action: i
    },
    a = y.indexOf(s); - 1 !== a && y.splice(a, 1);
  let o = k(e, t);
  0 !== o && (n ? -1 === o && (A.push(r), U()) : (o > 0 && A.splice(o, 1), A.unshift(r), U())), !n && N && E.default.resume(), M()
}

function V(e, t) {
  let n = (0, m.getComboId)(e, t),
    i = y.indexOf(n); - 1 !== i && y.splice(i, 1);
  let s = k(e, t); - 1 !== s && (A.splice(s, 1), M()), U()
}

function G(e) {
  let {
    applicationId: t,
    branchId: n
  } = e;
  V(t, n)
}

function F(e) {
  let {
    applicationId: t,
    branchId: n
  } = e, i = (0, m.getComboId)(t, n), s = y.indexOf(i); - 1 !== s && y.splice(s, 1)
}

function x() {
  let e = _.default.getToken(),
    t = _.default.getId();
  null != e && E.default.setCredentials(t, e)
}

function B() {
  for (let e of h.default.getRunningDiscordApplicationIds()) f.cancel(e, e);
  let e = h.default.getVisibleGame();
  return !N && null != e && e.pid !== L && f.pause(), L = null == e ? null : e.pid, !1
}
class H extends u.default.Store {
  initialize() {
    var e;
    let t = null !== (e = d.default.get(C)) && void 0 !== e ? e : {
      queue: null,
      paused: null,
      userActions: null
    };
    if (null != t.queue) A = t.queue.map(e => "string" == typeof e ? {
      comboId: e,
      action: "Patch"
    } : e);
    null != t.paused && (N = t.paused), null != t.userActions && (P = new Map(Array.from(t.userActions))), this.waitFor(v.default, h.default), this.syncWith([h.default], B), this.waitFor(v.default)
  }
  get activeItems() {
    return A.map(e => {
      let {
        comboId: t
      } = e;
      return (0, m.convertComboId)(t)
    })
  }
  get finishedItems() {
    return y.map(m.convertComboId)
  }
  get paused() {
    return N
  }
  getQueuePosition(e, t) {
    return k(e, t)
  }
  isCorruptInstallation() {
    return b
  }
}
H.displayName = "DispatchManagerStore";
var Y = new H(c.default, {
  DISPATCH_APPLICATION_INSTALL: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    P.set((0, m.getComboId)(t, n), "Install"), w(t, n, !1, "Patch")
  },
  DISPATCH_APPLICATION_UPDATE: function(e) {
    let {
      applicationId: t,
      branchId: n,
      automatic: i
    } = e;
    w(t, n, i, "Patch")
  },
  DISPATCH_APPLICATION_UNINSTALL: function(e) {
    G(e), F(e)
  },
  DISPATCH_APPLICATION_CANCEL: G,
  DISPATCH_APPLICATION_REPAIR: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e;
    P.set((0, m.getComboId)(t, n), "Repair"), w(t, n, !1, "Repair")
  },
  DISPATCH_APPLICATION_MOVE_UP: function(e) {
    let {
      applicationId: t,
      branchId: n
    } = e, i = k(t, n);
    if (i < 1) return !1;
    A.splice(0, 0, A.splice(i, 1)[0]), U(), N && E.default.resume(), M()
  },
  DISPATCH_APPLICATION_REMOVE_FINISHED: F,
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    !D && (D = !0, U(), !N && E.default.resume());
    let n = N;
    N = t.paused, R = t.currentTask, O = t.nextTask;
    let i = !1;
    A = A.filter(e => {
      let {
        comboId: t
      } = e, {
        applicationId: n,
        branchId: s
      } = (0, m.convertComboId)(t), r = v.default.getState(n, s), a = g.default.getTargetBuildId(n, s), o = g.default.getTargetManifests(n, s);
      if (null != r && r.type === S.LocalDispatchApplicationStates.UP_TO_DATE && r.buildId === r.targetBuildId && r.buildId === a && l.isEqual(r.manifestIds, r.targetManifestIds) && l.isEqual(r.manifestIds, o)) {
        if (y.push(t), P.has(t)) {
          let e = P.get(t);
          switch (e) {
            case "Install":
              f.completeInstall(n, r);
              break;
            case "Repair":
              f.completeRepair(n, r)
          }
          P.delete(t)
        }
        return i = !0, !1
      }
      return !0
    }), U(), (i || n !== N) && M()
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
    let {
      error: t
    } = e, {
      code: n
    } = t;
    if (null != n) {
      if (I.includes(n)) x();
      else if (n === T.DispatchErrorCodes.APPLICATION_NOT_FOUND) {
        let {
          context: e
        } = t;
        if (null != e) {
          let {
            application_id: t,
            branch_id: n
          } = e;
          V(t, n)
        }
      }
    }
  },
  CONNECTION_OPEN: function() {
    (0, p.isDesktop)() && x()
  },
  LOGOUT: function() {
    d.default.remove(C), (0, p.isDesktop)() && E.default.pause()
  }
})