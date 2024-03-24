"use strict";
n.r(t), n("222007");
var a, s = n("446674"),
  l = n("95410"),
  i = n("862337"),
  r = n("913144"),
  o = n("260365"),
  u = n("963990"),
  d = n("161454"),
  c = n("374363"),
  f = n("718517"),
  E = n("964889"),
  h = n("546463"),
  _ = n("686470"),
  C = n("49111");
let S = "ActivityTrackingStore",
  I = 30 * f.default.Millis.MINUTE,
  m = 5 * f.default.Millis.MINUTE,
  p = null !== (a = l.default.get(S)) && void 0 !== a ? a : {},
  T = {},
  g = !1;

function A(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && N(e, !0);
  let n = T[e.applicationId];
  null != n && (n.stop(), delete T[e.applicationId]), delete p[e.applicationId], l.default.set(S, p)
}

function N(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    a = null != e.updatedAt ? n - e.updatedAt : 0;
  a > I + m && (a = 0), o.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? C.Distributors.DISCORD : e.distributor,
    shareActivity: (0, E.shouldShareApplicationActivity)(e.applicationId, _.default),
    token: e.token,
    duration: Math.floor(a / 1e3),
    closed: t,
    exePath: e.exePath
  }), e.updatedAt = n;
  let s = T[e.applicationId];
  null == s && (s = T[e.applicationId] = new i.Interval).start(I, () => N(e)), !t && (p[e.applicationId] = e, l.default.set(S, p))
}

function R() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = d.default.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: a,
      exePath: s
    }
    of t) {
    let t = h.default.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in p) && N({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: a,
      exePath: (0, u.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(p)) !n.has(t) && A(p[t], e)
}

function O() {
  for (let e of Object.keys(p)) A(p[e]);
  g = !1
}
class v extends s.default.Store {
  initialize() {
    this.waitFor(d.default, c.default, _.default), this.syncWith([c.default], R)
  }
  getActivities() {
    return p
  }
}
v.displayName = "ActivityTrackingStore", new v(r.default, {
  RUNNING_GAMES_CHANGE: () => R(),
  CONNECTION_OPEN: function() {
    if (g) return !1;
    for (let e of Object.keys(p)) N(p[e]);
    R(!1), g = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && O()
  },
  LOGOUT: O,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, a = p[t];
    if (null == a) return !1;
    a.token = n, l.default.set(S, p)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = p[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, l.default.set(S, p)
  }
})