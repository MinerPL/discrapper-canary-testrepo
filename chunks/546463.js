"use strict";
let i;
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var s, r = n("446674"),
  a = n("95410"),
  o = n("913144"),
  l = n("845579"),
  u = n("653047"),
  d = n("773336");
let c = "GameStoreReportedGames",
  f = {},
  _ = {},
  h = {},
  g = null !== (s = a.default.get(c)) && void 0 !== s ? s : {},
  m = "";
let E = null;

function p(e) {
  return {
    id: e.id,
    name: e.name,
    executables: e.executables,
    overlayWarn: e.overlayWarn,
    overlayCompatibilityHook: e.overlayCompatibilityHook,
    overlay: e.overlay,
    hook: e.hook,
    aliases: e.aliases,
    supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
  }
}

function v(e) {
  let t = e instanceof u.default ? p(e) : e;
  for (let n of (f[e.id] = t, _[e.name.toLowerCase()] = t, e.aliases)) _[n.toLowerCase()] = t;
  if ((0, d.isDesktop)())
    for (let n of e.executables) h[n.name] = t
}
class S extends r.default.PersistedStore {
  initialize(e) {
    var t;
    null != e && (null != e.detectableGamesEtag && (m = e.detectableGamesEtag), null === (t = e.detectableGames) || void 0 === t || t.forEach(e => v(e)))
  }
  getState() {
    return {
      detectableGamesEtag: m,
      detectableGames: Object.values(f)
    }
  }
  get games() {
    return Object.values(f)
  }
  getDetectableGame(e) {
    return f[e]
  }
  getGameByName(e) {
    if (null == e) return null;
    let t = e.toLowerCase();
    return Object.prototype.hasOwnProperty.call(_, t) ? _[t] : null
  }
  get fetching() {
    return !0 === i
  }
  get detectableGamesEtag() {
    return m
  }
  get lastFetched() {
    return E
  }
  getGameByExecutable(e) {
    return h[e]
  }
  getGameByGameData(e) {
    var t, n;
    let i;
    if (null == e.exePath) return null;
    let s = e.exePath.split("/").pop(),
      r = e.exePath.split("/").slice(-2).join("/");
    if (null != e.name) {
      if (null != (i = this.getGameByName(e.name)) && null != i.executables) {
        let e = i.executables.map(e => e.name);
        if (e.includes(s) || e.includes(r)) return i
      } else if (null != i) return null
    }
    return null !== (n = null !== (t = this.getGameByExecutable(s)) && void 0 !== t ? t : this.getGameByExecutable(r)) && void 0 !== n ? n : i
  }
  shouldReport(e) {
    let t = null != this.getGameByName(e),
      n = null != g[e];
    return l.ShowCurrentGame.getSetting() && !i && !(t || n)
  }
  markGameReported(e) {
    g[e] = !0, a.default.set(c, g)
  }
}
S.displayName = "GameStore", S.persistKey = "GameStore", S.migrations = [e => {
  var t, n;
  if (null == e) return {
    detectableGamesEtag: "",
    detectableGames: []
  };
  return {
    detectableGamesEtag: e.detectableGamesEtag,
    detectableGames: null !== (n = null === (t = e.detectableGames) || void 0 === t ? void 0 : t.map(e => p(new u.default(e)))) && void 0 !== n ? n : []
  }
}];
var T = new S(o.default, {
  OVERLAY_INITIALIZE: function(e) {
    let {
      detectableApplications: t
    } = e;
    for (let e of t) v(e)
  },
  GAMES_DATABASE_FETCH: function() {
    i = !0
  },
  GAMES_DATABASE_FETCH_FAIL: function() {
    i = !1
  },
  GAMES_DATABASE_UPDATE: function(e) {
    let {
      games: t,
      etag: n
    } = e;
    for (let e of (null != n && m !== n && (m = n), t)) v(function(e) {
      var t, n, i, s, r, a;
      return {
        id: e.id,
        name: e.name,
        executables: (null !== (t = e.executables) && void 0 !== t ? t : []).map(u.createExecutable),
        overlay: null !== (n = e.overlay) && void 0 !== n && n,
        overlayWarn: null !== (i = e.overlay_warn) && void 0 !== i && i,
        overlayCompatibilityHook: null !== (s = e.overlay_compatibility_hook) && void 0 !== s && s,
        hook: null === (r = e.hook) || void 0 === r || r,
        aliases: null !== (a = e.aliases) && void 0 !== a ? a : [],
        supportsOutOfProcessOverlay: u.default.supportsOutOfProcessOverlay(e.overlay_methods)
      }
    }(e));
    i = void 0, E = Date.now()
  }
})