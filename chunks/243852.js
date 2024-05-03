"use strict";
n.r(t), n("47120");
var a, s, l, i, r, o = n("442837"),
  u = n("433517"),
  d = n("846519"),
  c = n("570140"),
  f = n("278323"),
  E = n("581567"),
  h = n("594190"),
  _ = n("454175"),
  C = n("619914"),
  S = n("581883"),
  m = n("70956"),
  p = n("780570"),
  I = n("314897"),
  T = n("77498"),
  g = n("283595"),
  A = n("19780"),
  N = n("944486"),
  v = n("981631");
let R = "ActivityTrackingStore",
  L = 30 * m.default.Millis.MINUTE,
  O = 5 * m.default.Millis.MINUTE,
  M = null !== (a = u.Storage.get(R)) && void 0 !== a ? a : {},
  P = {},
  y = !1;

function x(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  t && D(e, !0);
  let n = P[e.applicationId];
  null != n && (n.stop(), delete P[e.applicationId]), delete M[e.applicationId], u.Storage.set(R, M)
}

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = Date.now(),
    a = null != e.updatedAt ? n - e.updatedAt : 0;
  a > L + O && (a = 0);
  let s = (0, p.shouldShareApplicationActivity)(e.applicationId, g.default),
    l = N.default.getVoiceChannelId(),
    i = I.default.getSessionId(),
    r = A.default.getMediaSessionId();
  f.default.updateActivity({
    applicationId: e.applicationId,
    distributor: e.isDiscordApplication ? v.Distributors.DISCORD : e.distributor,
    shareActivity: s,
    token: e.token,
    duration: Math.floor(a / 1e3),
    closed: t,
    exePath: e.exePath,
    voiceChannelId: l,
    sessionId: i,
    mediaSessionId: r
  }), e.updatedAt = n;
  let o = (0, C.isUserRecentGamesExperimentEnabled)({
    location: "28tk0bf_6"
  });
  t && s && o && _.default.updateUserRecentGamesLocal(e.applicationId, Math.floor(a / 1e3));
  let c = P[e.applicationId];
  null == c && (c = P[e.applicationId] = new d.Interval).start(L, () => D(e)), !t && (M[e.applicationId] = e, u.Storage.set(R, M))
}

function b() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
    t = h.default.getVisibleRunningGames(),
    n = new Set;
  for (let {
      name: e,
      distributor: a,
      exePath: s
    }
    of t) {
    let t = T.default.getGameByName(e);
    if (null != t) n.add(t.id), !(t.id in M) && D({
      applicationId: t.id,
      updatedAt: Date.now(),
      distributor: a,
      exePath: (0, E.removeExecutablePathPrefix)(null != s ? s : "")
    })
  }
  for (let t of Object.keys(M)) !n.has(t) && x(M[t], e)
}

function U() {
  for (let e of Object.keys(M)) x(M[e]);
  y = !1
}
class j extends(s = o.default.Store) {
  initialize() {
    this.waitFor(h.default, S.default, g.default), this.syncWith([S.default], b)
  }
  getActivities() {
    return M
  }
}
r = "ActivityTrackingStore", (i = "displayName") in(l = j) ? Object.defineProperty(l, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[i] = r, new j(c.default, {
  RUNNING_GAMES_CHANGE: () => b(),
  CONNECTION_OPEN: function() {
    if (y) return !1;
    for (let e of Object.keys(M)) D(M[e]);
    b(!1), y = !0
  },
  CONNECTION_CLOSED: function(e) {
    let {
      code: t
    } = e;
    4004 === t && U()
  },
  LOGOUT: U,
  ACTIVITY_UPDATE_SUCCESS: function(e) {
    let {
      applicationId: t,
      token: n
    } = e, a = M[t];
    if (null == a) return !1;
    a.token = n, u.Storage.set(R, M)
  },
  ACTIVITY_UPDATE_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = M[t];
    if (null == n) return !1;
    n.token = null, n.updatedAt = null, u.Storage.set(R, M)
  }
})