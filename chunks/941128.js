n(47120), n(411104), n(653041), n(733860);
var r, i, a, s, o, l, u, c, d = n(392711),
  _ = n.n(d),
  E = n(442837),
  f = n(433517),
  h = n(570140),
  p = n(51025),
  m = n(594190),
  I = n(314897),
  T = n(173747),
  g = n(780570),
  S = n(830168),
  A = n(358085),
  N = n(417363),
  v = n(981631),
  O = n(186901);
(s = r || (r = {})).INSTALL = 'Install', s.REPAIR = 'Repair', (o = i || (i = {})).PATCH = 'Patch', o.REPAIR = 'Repair';
let R = [
O.ff.AUTHENTICATION_FAILED,
O.ff.NOT_ENTITLED
  ],
  C = 'DispatchManagerStore',
  y = [],
  D = [],
  L = !1,
  b = null,
  M = null,
  P = !1,
  U = new Map(),
  w = !1,
  x = null;

function G() {
  let e = {
queue: y,
paused: L,
userActions: Array.from(U)
  };
  f.K.set(C, e);
}

function k() {
  let e = y[0];
  if (null != e) {
var t, n;
let {
  comboId: r,
  action: i
} = e, {
  applicationId: a,
  branchId: s
} = (0, g.CP)(r);
if (t = a, n = s, (null == b || b.applicationId !== t || b.branchId !== n) && (null == M || M.applicationId !== t || M.branchId !== n)) {
  let e = I.default.getToken(),
    t = I.default.getId();
  if (null == e)
    throw Error('missing user token');
  w = !S.Z.setCurrentTask(a, s, i, t, e);
}
  }
}

function B(e, t) {
  let n = (0, g.Tu)(e, t);
  return y.findIndex(e => e.comboId === n);
}

function F(e, t, n, r) {
  let i = (0, g.Tu)(e, t),
a = {
  comboId: i,
  action: r
},
s = D.indexOf(i); -
  1 !== s && D.splice(s, 1);
  let o = B(e, t);
  0 !== o && (n ? -1 === o && (y.push(a), k()) : (o > 0 && y.splice(o, 1), y.unshift(a), k())), !n && L && S.Z.resume(), G();
}

function V(e, t) {
  let n = (0, g.Tu)(e, t),
r = D.indexOf(n); -
  1 !== r && D.splice(r, 1);
  let i = B(e, t); -
  1 !== i && (y.splice(i, 1), G()), k();
}

function H(e) {
  let {
applicationId: t,
branchId: n
  } = e;
  V(t, n);
}

function Z(e) {
  let {
applicationId: t,
branchId: n
  } = e, r = (0, g.Tu)(t, n), i = D.indexOf(r); -
  1 !== i && D.splice(i, 1);
}

function Y() {
  let e = I.default.getToken(),
t = I.default.getId();
  if (null != e)
S.Z.setCredentials(t, e);
}

function j() {
  for (let e of m.ZP.getRunningDiscordApplicationIds())
p.al(e, e);
  let e = m.ZP.getVisibleGame();
  return !L && null != e && e.pid !== x && p.wO(), x = null == e ? null : e.pid, !1;
}
class W extends(a = E.ZP.Store) {
  initialize() {
var e;
let t = null !== (e = f.K.get(C)) && void 0 !== e ? e : {
  queue: null,
  paused: null,
  userActions: null
};
if (null != t.queue)
  y = t.queue.map(e => 'string' == typeof e ? {
    comboId: e,
    action: 'Patch'
  } : e);
null != t.paused && (L = t.paused), null != t.userActions && (U = new Map(Array.from(t.userActions))), this.waitFor(N.Z, m.ZP), this.syncWith([m.ZP], j), this.waitFor(N.Z);
  }
  get activeItems() {
return y.map(e => {
  let {
    comboId: t
  } = e;
  return (0, g.CP)(t);
});
  }
  get finishedItems() {
return D.map(g.CP);
  }
  get paused() {
return L;
  }
  getQueuePosition(e, t) {
return B(e, t);
  }
  isCorruptInstallation() {
return w;
  }
}
c = 'DispatchManagerStore', (u = 'displayName') in(l = W) ? Object.defineProperty(l, u, {
  value: c,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[u] = c, t.Z = new W(h.Z, {
  DISPATCH_APPLICATION_INSTALL: function(e) {
let {
  applicationId: t,
  branchId: n
} = e;
U.set((0, g.Tu)(t, n), 'Install'), F(t, n, !1, 'Patch');
  },
  DISPATCH_APPLICATION_UPDATE: function(e) {
let {
  applicationId: t,
  branchId: n,
  automatic: r
} = e;
F(t, n, r, 'Patch');
  },
  DISPATCH_APPLICATION_UNINSTALL: function(e) {
H(e), Z(e);
  },
  DISPATCH_APPLICATION_CANCEL: H,
  DISPATCH_APPLICATION_REPAIR: function(e) {
let {
  applicationId: t,
  branchId: n
} = e;
U.set((0, g.Tu)(t, n), 'Repair'), F(t, n, !1, 'Repair');
  },
  DISPATCH_APPLICATION_MOVE_UP: function(e) {
let {
  applicationId: t,
  branchId: n
} = e, r = B(t, n);
if (r < 1)
  return !1;
y.splice(0, 0, y.splice(r, 1)[0]), k(), L && S.Z.resume(), G();
  },
  DISPATCH_APPLICATION_REMOVE_FINISHED: Z,
  DISPATCH_APPLICATION_STATE_UPDATE: function(e) {
let {
  state: t
} = e;
!P && (P = !0, k(), !L && S.Z.resume());
let n = L;
L = t.paused, b = t.currentTask, M = t.nextTask;
let r = !1;
y = y.filter(e => {
  let {
    comboId: t
  } = e, {
    applicationId: n,
    branchId: i
  } = (0, g.CP)(t), a = N.Z.getState(n, i), s = T.Z.getTargetBuildId(n, i), o = T.Z.getTargetManifests(n, i);
  if (null != a && a.type === v.vxO.UP_TO_DATE && a.buildId === a.targetBuildId && a.buildId === s && _().isEqual(a.manifestIds, a.targetManifestIds) && _().isEqual(a.manifestIds, o)) {
    if (D.push(t), U.has(t)) {
      switch (U.get(t)) {
        case 'Install':
          p.XT(n, a);
          break;
        case 'Repair':
          p.Wx(n, a);
      }
      U.delete(t);
    }
    return r = !0, !1;
  }
  return !0;
}), k(), (r || n !== L) && G();
  },
  DISPATCH_APPLICATION_ERROR: function(e) {
let {
  error: t
} = e, {
  code: n
} = t;
if (null != n) {
  if (R.includes(n))
    Y();
  else if (n === O.ff.APPLICATION_NOT_FOUND) {
    let {
      context: e
    } = t;
    if (null != e) {
      let {
        application_id: t,
        branch_id: n
      } = e;
      V(t, n);
    }
  }
}
  },
  CONNECTION_OPEN: function() {
(0, A.isDesktop)() && Y();
  },
  LOGOUT: function() {
f.K.remove(C), (0, A.isDesktop)() && S.Z.pause();
  }
});