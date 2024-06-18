"use strict";
let i;
n.d(t, {
  FZ: function() {
    return el
  },
  ik: function() {
    return es
  },
  jk: function() {
    return er
  },
  rH: function() {
    return ei
  }
}), n(47120), n(653041), n(724458), n(757143), n(733860);
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(913527),
  d = n.n(_),
  c = n(442837),
  E = n(433517),
  I = n(570140),
  T = n(593472),
  h = n(726542),
  S = n(710845),
  f = n(630699),
  N = n(855403),
  A = n(454991),
  m = n(77498),
  O = n(283595),
  R = n(417363),
  C = n(626135),
  p = n(70956),
  g = n(877481),
  L = n(823379),
  v = n(358085),
  D = n(998502),
  M = n(145597),
  P = n(370862),
  y = n(981631),
  U = n(987650);
let b = new S.Z("RunningGameStore"),
  G = "RunningGameStore",
  w = [{
    executables: [{
      os: "win32",
      name: "obs/obs.exe"
    }, {
      os: "win32",
      name: "obs32.exe"
    }, {
      os: "win32",
      name: "obs64.exe"
    }, {
      os: "darwin",
      name: "OBS.app"
    }, {
      os: "linux",
      name: "obs"
    }],
    name: "OBS",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "XSplit.Gamecaster.exe"
    }, {
      os: "win32",
      name: "XSplit.Core.exe"
    }, {
      os: "win32",
      name: "Gamecaster.exe"
    }],
    name: "XSplit",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "bebo.exe"
    }],
    name: "Bebo",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "Streamlabs OBS.exe"
    }, {
      os: "win32",
      name: "Streamlabs Desktop.exe"
    }, {
      os: "darwin",
      name: "Streamlabs Desktop.app"
    }],
    name: "Streamlabs Desktop",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "TwitchStudio.exe"
    }, {
      os: "darwin",
      name: "Twitch Studio.app"
    }],
    name: "Twitch Studio",
    streamerTool: !0
  }, {
    executables: [{
      os: "win32",
      name: "Spotify.exe"
    }, {
      os: "darwin",
      name: "Spotify.app"
    }, {
      os: "linux",
      name: "spotify"
    }],
    name: h.Z.get(y.ABu.SPOTIFY).name
  }],
  k = !0,
  B = new Set,
  x = [],
  V = [],
  Z = [],
  H = null,
  F = [],
  Y = {},
  j = {},
  W = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableDetection: {}
  },
  K = function() {},
  z = {},
  q = 0,
  X = null,
  Q = null,
  J = {};

function $(e, t, n) {
  let i = e[t];
  void 0 !== i && (delete e[t], e[n] = i)
}

function ee(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function et(e) {
  return w.some(t => t.name === e.name && !0 === t.streamerTool)
}

function en() {
  if (Z.length > 0) {
    let e = H;
    H = Z[0], null != e && H.pid === e.pid ? H.start = e.start : H.start = Date.now()
  } else H = null;
  let e = [];
  for (let t of Z) !(t.pid in J) && (J[t.pid] = t, e.push(t));
  let t = [];
  for (let e of Object.values(J)) !Z.some(t => t.pid === e.pid) && (t.push(e), delete J[e.pid]);
  b.info("games", {
    runningGames: Z,
    added: e,
    removed: t,
    previousGames: J
  }), I.Z.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: Z,
    added: e,
    removed: t
  })
}

function ei(e) {
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}

function er(e) {
  if (e.isLauncher) return {
    source: P.d.LAUNCHER,
    enabled: !1,
    overlayMethod: U.gl.Disabled
  };
  let t = m.Z.getGameByName(e.name);
  if (null != t) {
    let e = O.Z.getActiveLibraryApplication(t.id);
    if (null != e) return {
      source: P.d.LIBRARY_APPLICATION,
      enabled: e.isOverlayEnabled(),
      overlayMethod: U.gl.Disabled
    }
  }
  let n = f.H() && (0, M.VS)() && !A.v.legacyEnabled,
    i = n ? U.gl.OutOfProcess : U.gl.Hook,
    r = W.enableOverlay[ei(e)];
  if (null != r) return {
    source: P.d.USER_OVERRIDE,
    enabled: r,
    overlayMethod: i
  };
  let s = null == e.id ? null : z[e.id];
  return null != s ? {
    source: P.d.DATABASE,
    enabled: s.enabled || n,
    overlayMethod: i
  } : {
    source: P.d.DEFAULT,
    enabled: !1,
    overlayMethod: U.gl.Hook
  }
}

function es(e) {
  let t = W.enableDetection[ei(e)];
  return null == t || t
}

function eo(e) {
  return !e.hidden && es(e)
}

function ea() {
  E.K.set(G, W)
}

function el(e) {
  var t, n;
  let i = {
    ...e,
    played: null != e.lastFocused && 0 !== e.lastFocused ? d()(new Date(e.lastFocused * p.Z.Millis.SECOND)).fromNow() : " ",
    overlay: (t = e, null !== (n = W.enableOverlay[ei(t)]) && void 0 !== n ? n : er(t).enabled),
    verified: m.Z.isGameInDatabase(e),
    detectable: es(e)
  };
  if (null != e.id && null != z[e.id]) {
    let t = z[e.id];
    i.overlayWarn = t.warn
  }
  return i
}

function eu() {
  let e = !1;
  return x = u().values(O.Z.libraryApplications).reduce((t, n) => {
    let i = m.Z.getDetectableGame(n.id);
    if (null == i) return t;
    for (let r of R.Z.getLaunchOptions(n.id, n.branchId)) {
      let s = "".concat(n.id, ":").concat(n.branchId);
      !B.has(s) && (e = !0, B.add(s));
      let {
        fullExecutablePath: o
      } = r, a = o.replace(/\\/g, "/").toLowerCase();
      Y[a] = i.id, t.push({
        id: i.id,
        name: i.name,
        exePath: a,
        cmdLine: "",
        lastFocused: 0,
        add: !0
      })
    }
    return t
  }, []), e && e_(), e
}

function e_() {
  if (!__OVERLAY__ && v.isPlatformEmbedded) {
    let e = [...x, ...u().values(W.gameOverrides)];
    D.ZP.setGameCandidateOverrides(e)
  }
}

function ed(e) {
  if (null != e && 0 !== e.length) e.forEach(e => {
    if (W.gamesSeen.some(t => {
        if (t.name === e.name) {
          if (e.lastFocused) {
            t.lastFocused = e.lastFocused;
            let n = W.gameOverrides[ei(e)];
            null != n && (n.lastFocused = e.lastFocused)
          }
          return ee(t, e), !0
        }
        return !1
      }));
    else {
      if (e.hidden) return;
      W.gamesSeen.unshift(function(e) {
        let t = {
          exePath: e.exePath,
          cmdLine: e.cmdLine,
          lastFocused: e.lastFocused
        };
        return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), ee(t, e), t
      }(e))
    }
  }), W.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), ea(), g.Z.setRecentGames(ec().map(e => el(e)))
}

function ec() {
  let e = u().values(W.gameOverrides);
  return W.gamesSeen.filter(e => void 0 === W.gameOverrides[ei(e)]).concat(e)
}!__OVERLAY__ && (0, v.isDesktop)() && (K = function() {
  let e = [],
    t = new Set;
  i = {};
  let n = m.Z.games;
  for (let e of n) {
    var r, s, o, a;
    z[e.id] = {
      compatibilityHook: null !== (r = e.overlayCompatibilityHook) && void 0 !== r ? r : T.r.compatibilityHook,
      warn: null !== (s = e.overlayWarn) && void 0 !== s ? s : T.r.warn,
      enabled: null !== (o = e.overlay) && void 0 !== o ? o : T.r.enabled,
      allowHook: null !== (a = e.hook) && void 0 !== a ? a : T.r.allowHook,
      supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
    }
  } [...n, ...w].forEach(n => {
    var i;
    let r = null != n.executables ? null === (i = n.executables) || void 0 === i ? void 0 : i.filter(e => {
        let {
          os: t
        } = e;
        return t === (0, v.getPlatformName)()
      }) : [],
      s = {};
    r.forEach(e => {
      let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
      null == s[n] && (s[n] = []), s[n].push(e.name), e.isLauncher && t.add(e.name)
    }), Object.keys(s).forEach(t => e.push({
      name: n.name,
      id: n.id,
      executables: s[t],
      cmdLine: "null" !== t ? t : null
    }))
  }), e = e.filter(e => null != e.executables && e.executables.length > 0), D.ZP.setObservedGamesCallback(e, e => {
    let n = [],
      r = {};
    e = e.filter(e => (e.distributor = function(e) {
      if (null != Y[e.exePath]) return y.GQo.DISCORD;
      if (/steamapps/.test(e.cmdLine)) return y.GQo.STEAM;
      if (/-epicapp/.test(e.cmdLine)) return y.GQo.EPIC;
      return e.distributor
    }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (r[e.id] = e), e.windowHandle = function(e, t) {
      if (void 0 === t) {
        let t = D.ZP.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
          let n = t.getWindowHandleFromPid(e);
          return null != n && "0" !== n ? n : null
        }
        return null
      }
      return "0" === t ? null : t
    }(e.pid, e.windowHandle), null == w.find(t => {
      let {
        name: n
      } = t;
      return n === e.name
    }) || (n.push(e), !1)));
    let s = n.filter(et).length;
    s !== q && (q = s, I.Z.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: q
    })), Z = e, F = n, i = r, en()
  }), e_()
});
class eE extends(r = c.ZP.Store) {
  initialize() {
    var e, t, n, i;
    let r = null !== (e = E.K.get(G)) && void 0 !== e ? e : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableDetection: {}
    };
    W.gameOverrides = {};
    let s = !1;
    if (u().values(null !== (t = r.gameOverrides) && void 0 !== t ? t : {}).forEach(e => {
        let t = ei(e);
        W.gameOverrides[t] = e
      }), W.enableOverlay = null !== (n = r.enableOverlay) && void 0 !== n ? n : {}, W.enableDetection = null !== (i = r.enableDetection) && void 0 !== i ? i : {}, e_(), Array.isArray(r.gamesSeen))
      for (let e of r.gamesSeen) "number" == typeof e.id && (e.nativeProcessObserverId = e.id, delete e.id, s = !0);
    ed(r.gamesSeen), this.waitFor(m.Z), this.syncWith([O.Z, m.Z, R.Z], u().throttle(eu, 1e3)), s && ea()
  }
  getVisibleGame() {
    return null == H || eo(H) ? H : null
  }
  getCurrentGameForAnalytics() {
    return H
  }
  getVisibleRunningGames() {
    return Z.filter(eo)
  }
  getRunningGames() {
    return Z
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of Z) null != Y[t.exePath] && e.push(Y[t.exePath]);
    return e
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => m.Z.getGameByName(e.name)).filter(L.lm).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null !== (t = Z.find(t => t.pid === e)) && void 0 !== t ? t : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t ? null != t.id ? i[t.id] : null : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : {
      ...z[t.id]
    }
  }
  shouldElevateProcessForPID(e) {
    return null != X && X === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != Q && Q === e
  }
  getCandidateGames() {
    return V.filter(e => e.hidden || null == e.id).filter(e => void 0 === W.gameOverrides[ei(e)])
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = ec();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = ei(e);
        n = n.filter(e => ei(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return W.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return F.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(W.gameOverrides)
  }
  getOverrideForGame(e) {
    return W.gameOverrides[ei(e)]
  }
  getGameOverlayStatus(e) {
    if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return b.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = er(e);
    return t.enabled ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null !== (n = null === (t = F.find(t => (0, N.Z)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
  }
  get canShowAdminWarning() {
    return k
  }
  isDetectionEnabled(e) {
    return es(e)
  }
}
a = "RunningGameStore", (o = "displayName") in(s = eE) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.ZP = new eE(I.Z, {
  RUNNING_GAMES_CHANGE: function(e) {
    ed(Z)
  },
  CANDIDATE_GAMES_CHANGE: function(e) {
    V = e.games
  },
  PERMISSION_CLEAR_PTT_ADMIN_WARNING: function() {
    k = !1
  },
  PERMISSION_REQUEST_ELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    X = t, Q = null
  },
  PERMISSION_CLEAR_ELEVATED_PROCESS: function() {
    X = null
  },
  PERMISSION_CONTINUE_NONELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    Q = t, X = null
  },
  RUNNING_GAME_ADD_OVERRIDE: function(e) {
    let t;
    let n = e.pid,
      i = Z.find(e => e.pid === n);
    if (null == i) {
      let e = V.find(e => e.pid === n);
      if (null == e) return;
      (i = {
        ...e
      }).hidden = !1, Z.push(i), t = ei(i)
    } else t = ei(i), i.hidden && (j[t] = !0), i.hidden = !1;
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)), W.gameOverrides[t] = {
      ...i,
      add: !0
    }, ed(Z), e_(), ea(), en()
  },
  RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
    if (W.enableOverlay[ei(e.game)] = e.newEnabledValue, ea(), !__OVERLAY__) {
      let t = null != e.game.id ? m.Z.getDetectableGame(e.game.id) : null;
      null != t && C.default.track(y.rMx.OVERLAY_TOGGLED, {
        enabled: e.newEnabledValue,
        setting_type: "overlay toggled - game",
        application_id: t.id,
        application_name: t.name
      })
    }
  },
  RUNNING_GAME_TOGGLE_DETECTION: function(e) {
    let {
      game: t
    } = e, n = es(t);
    W.enableDetection[ei(t)] = !n, ea(), C.default.track(y.rMx.USER_SETTINGS_GAME_DETECTION_TOGGLE, {
      enabled: !n
    })
  },
  RUNNING_GAME_EDIT_NAME: function(e) {
    let t = ei(e.game),
      n = W.gameOverrides[t];
    if (null == n) {
      var i;
      (n = {
        name: (i = e.game).name,
        exePath: i.exePath,
        cmdLine: i.cmdLine,
        lastFocused: i.lastFocused
      }).add = !0
    }
    n.name = e.newName;
    let r = ei(n);
    delete W.gameOverrides[t], W.gameOverrides[r] = n, $(W.enableOverlay, t, r), $(W.enableDetection, t, r), $(j, t, r), W.gamesSeen.forEach(n => {
      ei(n) === t && (n.name = e.newName)
    });
    let s = !1;
    Z.forEach(n => {
      ei(n) === t && (n.name = e.newName, s = !0)
    }), e_(), ea(), s && en()
  },
  RUNNING_GAME_DELETE_ENTRY: function(e) {
    let t = ei(e.game);
    delete W.gameOverrides[t], delete W.enableOverlay[t], delete W.enableDetection[t], W.gamesSeen = W.gamesSeen.filter(e => ei(e) !== t), j[t] && (Z.forEach(e => {
      t === ei(e) && (e.hidden = !0)
    }), delete j[t], en()), e_(), ea()
  },
  GAMES_DATABASE_UPDATE: K,
  GAME_LAUNCH_SUCCESS: function(e) {
    var t;
    if (__OVERLAY__ || !v.isPlatformEmbedded) return;
    let n = D.ZP.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let i = m.Z.getDetectableGame(e.applicationId);
    if (null != i) n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : [])
  },
  GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function() {
    e_()
  }
})