"use strict";
let i;
n.r(t), n.d(t, {
  gameInDatabase: function() {
    return et
  },
  getOverlayGameStatus: function() {
    return en
  },
  transformForGameSettings: function() {
    return er
  },
  default: function() {
    return ec
  }
}), n("222007"), n("424973"), n("808653"), n("781738"), n("843762");
var s, r, a = n("917351"),
  o = n.n(a),
  l = n("866227"),
  u = n.n(l),
  d = n("446674"),
  c = n("95410"),
  f = n("913144"),
  _ = n("115718"),
  h = n("376556"),
  g = n("605250"),
  m = n("630915"),
  E = n("756898"),
  p = n("32128"),
  v = n("599110"),
  S = n("718517"),
  T = n("269180"),
  I = n("449008"),
  C = n("773336"),
  A = n("50885"),
  y = n("819068"),
  N = n("546463"),
  R = n("686470"),
  O = n("535974"),
  D = n("49111"),
  P = n("6791");
let b = new g.default("RunningGameStore"),
  L = "RunningGameStore",
  M = [{
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
    name: h.default.get(D.PlatformTypes.SPOTIFY).name
  }],
  U = !0,
  k = new Set,
  w = [],
  V = [],
  G = [],
  F = null,
  x = [],
  B = {},
  H = {},
  Y = {
    gamesSeen: [],
    gameOverrides: {},
    enableOverlay: {},
    enableDetection: {}
  },
  j = function() {},
  W = {},
  K = 0,
  z = null,
  q = null,
  X = {};

function Q(e, t, n) {
  let i = e[t];
  void 0 !== i && (delete e[t], e[n] = i)
}

function Z(e, t) {
  null != t.lastLaunched ? e.lastLaunched = t.lastLaunched : null != t.start && (e.lastLaunched = t.start)
}

function J(e) {
  return M.some(t => t.name === e.name && !0 === t.streamerTool)
}

function $() {
  if (G.length > 0) {
    let e = F;
    F = G[0], null != e && F.pid === e.pid ? F.start = e.start : F.start = Date.now()
  } else F = null;
  let e = [];
  for (let t of G) !(t.pid in X) && (X[t.pid] = t, e.push(t));
  let t = [];
  for (let e of Object.values(X)) !G.some(t => t.pid === e.pid) && (t.push(e), delete X[e.pid]);
  b.info("games", {
    runningGames: G,
    added: e,
    removed: t,
    previousGames: X
  }), f.default.dispatch({
    type: "RUNNING_GAMES_CHANGE",
    games: G,
    added: e,
    removed: t
  })
}

function ee(e) {
  let t = null != e.name ? e.name : "";
  return "".concat(e.exePath, ":").concat(t)
}

function et(e) {
  let t = N.default.getGameByName(e.name);
  return null != t || void 0 !== e.nativeProcessObserverId && (2147483648 & e.nativeProcessObserverId) == 0
}

function en(e) {
  if (e.isLauncher) return {
    source: "LAUNCHER",
    enabled: !1,
    overlayMethod: P.OverlayMethod.Disabled
  };
  let t = N.default.getGameByName(e.name);
  if (null != t) {
    let e = R.default.getActiveLibraryApplication(t.id);
    if (null != e) return {
      source: "LIBRARY_APPLICATION",
      enabled: e.isOverlayEnabled(),
      overlayMethod: P.OverlayMethod.Disabled
    }
  }
  let n = m.isOOPExperimentEnabled() && (0, y.supportsOutOfProcess)(),
    i = null == e.id ? null : W[e.id],
    s = n && null != i && i.supportsOutOfProcessOverlay,
    r = s ? P.OverlayMethod.OutOfProcess : P.OverlayMethod.Hook,
    a = p.OverlayStoredSettings.methodOverride;
  if (null != a && a !== P.OverlayMethod.Disabled) {
    let t = P.OverlayMethod[r],
      n = P.OverlayMethod[a];
    b.info("getOverlayGameStatus: overlay method overriden ".concat(t, " -> ").concat(n, " (").concat(e.name, ")")), r = a
  }
  let o = Y.enableOverlay[ee(e)];
  return null != o ? {
    source: "USER_OVERRIDE",
    enabled: o,
    overlayMethod: r
  } : null != i ? {
    source: "DATABASE",
    enabled: i.enabled || s,
    overlayMethod: r
  } : {
    source: "DEFAULT",
    enabled: !1,
    overlayMethod: P.OverlayMethod.Hook
  }
}(r = s || (s = {})).LAUNCHER = "LAUNCHER", r.LIBRARY_APPLICATION = "LIBRARY_APPLICATION", r.USER_OVERRIDE = "USER_OVERRIDE", r.DATABASE = "DATABASE", r.DEFAULT = "DEFAULT";

function ei(e) {
  let t = Y.enableDetection[ee(e)];
  return null == t || t
}

function es() {
  c.default.set(L, Y)
}

function er(e) {
  var t, n;
  let i = {
    ...e,
    played: null != e.lastFocused && 0 !== e.lastFocused ? u(new Date(e.lastFocused * S.default.Millis.SECOND)).fromNow() : " ",
    overlay: (t = e, null !== (n = Y.enableOverlay[ee(t)]) && void 0 !== n ? n : en(t).enabled),
    verified: et(e),
    detectable: ei(e)
  };
  if (null != e.id && null != W[e.id]) {
    let t = W[e.id];
    i.overlayWarn = t.warn
  }
  return i
}

function ea() {
  let e = !1;
  return w = o.values(R.default.libraryApplications).reduce((t, n) => {
    let i = N.default.getDetectableGame(n.id);
    if (null == i) return t;
    let s = O.default.getLaunchOptions(n.id, n.branchId);
    for (let r of s) {
      let s = "".concat(n.id, ":").concat(n.branchId);
      !k.has(s) && (e = !0, k.add(s));
      let {
        fullExecutablePath: a
      } = r, o = a.replace(/\\/g, "/").toLowerCase();
      B[o] = i.id, t.push({
        id: i.id,
        name: i.name,
        exePath: o,
        cmdLine: "",
        lastFocused: 0,
        add: !0
      })
    }
    return t
  }, []), e && eo(), e
}

function eo() {
  if (!__OVERLAY__ && C.isPlatformEmbedded) {
    let e = [...w, ...o.values(Y.gameOverrides)];
    A.default.setGameCandidateOverrides(e)
  }
}

function el(e) {
  null != e && 0 !== e.length && (e.forEach(e => {
    let t = Y.gamesSeen.some(t => {
      if (t.name === e.name) {
        if (e.lastFocused) {
          t.lastFocused = e.lastFocused;
          let n = Y.gameOverrides[ee(e)];
          null != n && (n.lastFocused = e.lastFocused)
        }
        return Z(t, e), !0
      }
      return !1
    });
    if (t);
    else {
      if (e.hidden) return;
      Y.gamesSeen.unshift(function(e) {
        let t = {
          exePath: e.exePath,
          cmdLine: e.cmdLine,
          lastFocused: e.lastFocused
        };
        return null != e.id && (t.id = e.id), null != e.nativeProcessObserverId && (t.nativeProcessObserverId = e.nativeProcessObserverId), null != e.name && (t.name = e.name), e.add && (t.add = !0), e.block && (t.block = !0), Z(t, e), t
      }(e))
    }
  }), Y.gamesSeen.sort((e, t) => t.lastFocused - e.lastFocused), es(), T.default.setRecentGames(eu().map(e => er(e))))
}

function eu() {
  let e = o.values(Y.gameOverrides),
    t = Y.gamesSeen.filter(e => void 0 === Y.gameOverrides[ee(e)]);
  return t.concat(e)
}!__OVERLAY__ && (0, C.isDesktop)() && (j = function() {
  let e = [],
    t = new Set;
  i = {};
  let n = N.default.games;
  for (let e of n) {
    var s, r, a, o;
    W[e.id] = {
      compatibilityHook: null !== (s = e.overlayCompatibilityHook) && void 0 !== s ? s : _.DEFAULT_OVERLAY_OPTIONS.compatibilityHook,
      warn: null !== (r = e.overlayWarn) && void 0 !== r ? r : _.DEFAULT_OVERLAY_OPTIONS.warn,
      enabled: null !== (a = e.overlay) && void 0 !== a ? a : _.DEFAULT_OVERLAY_OPTIONS.enabled,
      allowHook: null !== (o = e.hook) && void 0 !== o ? o : _.DEFAULT_OVERLAY_OPTIONS.allowHook,
      supportsOutOfProcessOverlay: e.supportsOutOfProcessOverlay
    }
  } [...n, ...M].forEach(n => {
    var i;
    let s = null != n.executables ? null === (i = n.executables) || void 0 === i ? void 0 : i.filter(e => {
        let {
          os: t
        } = e;
        return t === (0, C.getPlatformName)()
      }) : [],
      r = {};
    s.forEach(e => {
      let n = null != e.arguments && e.arguments.length > 0 ? e.arguments : "null";
      null == r[n] && (r[n] = []), r[n].push(e.name), e.isLauncher && t.add(e.name)
    }), Object.keys(r).forEach(t => e.push({
      name: n.name,
      id: n.id,
      executables: r[t],
      cmdLine: "null" !== t ? t : null
    }))
  }), e = e.filter(e => null != e.executables && e.executables.length > 0), A.default.setObservedGamesCallback(e, e => {
    let n = [],
      s = {};
    e = e.filter(e => (e.distributor = function(e) {
      if (null != B[e.exePath]) return D.Distributors.DISCORD;
      if (/steamapps/.test(e.cmdLine)) return D.Distributors.STEAM;
      if (/-epicapp/.test(e.cmdLine)) return D.Distributors.EPIC;
      return e.distributor
    }(e), e.isLauncher = t.has(e.exeName), e.isLauncher && null != e.id && (s[e.id] = e), e.windowHandle = function(e, t) {
      if (void 0 === t) {
        let t = A.default.getDiscordUtils();
        if (null != t && null != t.getWindowHandleFromPid) {
          let n = t.getWindowHandleFromPid(e);
          return null != n && "0" !== n ? n : null
        }
        return null
      }
      return "0" === t ? null : t
    }(e.pid, e.windowHandle), null == M.find(t => {
      let {
        name: n
      } = t;
      return n === e.name
    }) || (n.push(e), !1)));
    let r = n.filter(J).length;
    r !== K && (K = r, f.default.dispatch({
      type: "RUNNING_STREAMER_TOOLS_CHANGE",
      count: K
    })), G = e, x = n, i = s, $()
  }), eo()
});
class ed extends d.default.Store {
  initialize() {
    var e, t, n, i;
    let s = null !== (e = c.default.get(L)) && void 0 !== e ? e : {
      gamesSeen: [],
      gameOverrides: {},
      enableOverlay: {},
      enableDetection: {}
    };
    Y.gameOverrides = {};
    let r = !1;
    if (o.values(null !== (t = s.gameOverrides) && void 0 !== t ? t : {}).forEach(e => {
        let t = ee(e);
        Y.gameOverrides[t] = e
      }), Y.enableOverlay = null !== (n = s.enableOverlay) && void 0 !== n ? n : {}, Y.enableDetection = null !== (i = s.enableDetection) && void 0 !== i ? i : {}, eo(), Array.isArray(s.gamesSeen))
      for (let e of s.gamesSeen) "number" == typeof e.id && (e.nativeProcessObserverId = e.id, delete e.id, r = !0);
    el(s.gamesSeen), this.waitFor(N.default), this.syncWith([R.default, N.default, O.default], o.throttle(ea, 1e3)), r && es()
  }
  getVisibleGame() {
    return null != F && (F.hidden || !ei(F)) ? null : F
  }
  getCurrentGameForAnalytics() {
    return F
  }
  getRunningDiscordApplicationIds() {
    let e = [];
    for (let t of G) null != B[t.exePath] && e.push(B[t.exePath]);
    return e
  }
  getRunningVerifiedApplicationIds() {
    return this.getRunningGames().map(e => N.default.getGameByName(e.name)).filter(I.isNotNullish).map(e => e.id)
  }
  getGameForPID(e) {
    var t;
    return null !== (t = G.find(t => t.pid === e)) && void 0 !== t ? t : null
  }
  getLauncherForPID(e) {
    let t = this.getGameForPID(e);
    return null != t ? null != t.id ? i[t.id] : null : null
  }
  getOverlayOptionsForPID(e) {
    let t = this.getGameForPID(e);
    return null == t || t.isLauncher || null == t.id ? null : {
      ...W[t.id]
    }
  }
  shouldElevateProcessForPID(e) {
    return null != z && z === e
  }
  shouldContinueWithoutElevatedProcessForPID(e) {
    return null != q && q === e
  }
  getCandidateGames() {
    return V.filter(e => e.hidden || null == e.id).filter(e => void 0 === Y.gameOverrides[ee(e)])
  }
  getRunningGames() {
    return G
  }
  getGamesSeen(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = eu();
    if (e) {
      let e = this.getVisibleGame();
      if (null != e) {
        let t = ee(e);
        n = n.filter(e => ee(e) !== t)
      }
    }
    return t && n.sort((e, t) => t.lastFocused - e.lastFocused), n
  }
  getSeenGameByName(e) {
    return Y.gamesSeen.find(t => null != t.name && t.name.toLowerCase() === e.toLowerCase())
  }
  isObservedAppRunning(e) {
    return x.some(t => t.name === e)
  }
  getOverrides() {
    return Object.values(Y.gameOverrides)
  }
  getOverrideForGame(e) {
    return Y.gameOverrides[ee(e)]
  }
  getGameOverlayStatus(e) {
    if (e.hidden || e.isLauncher || e.elevated || e.sandboxed) return b.verbose("getGameOverlayStatus: Overlay not supported.", e), null;
    let t = en(e);
    return t.enabled ? t : null
  }
  getObservedAppNameForWindow(e) {
    var t, n;
    return null !== (n = null === (t = x.find(t => (0, E.default)(e, t.windowHandle))) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : null
  }
  get canShowAdminWarning() {
    return U
  }
}
ed.displayName = "RunningGameStore";
var ec = new ed(f.default, {
  RUNNING_GAMES_CHANGE: function(e) {
    el(G)
  },
  CANDIDATE_GAMES_CHANGE: function(e) {
    V = e.games
  },
  PERMISSION_CLEAR_PTT_ADMIN_WARNING: function() {
    U = !1
  },
  PERMISSION_REQUEST_ELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    z = t, q = null
  },
  PERMISSION_CLEAR_ELEVATED_PROCESS: function() {
    z = null
  },
  PERMISSION_CONTINUE_NONELEVATED_PROCESS: function(e) {
    let {
      pid: t
    } = e;
    q = t, z = null
  },
  RUNNING_GAME_ADD_OVERRIDE: function(e) {
    let t;
    let n = e.pid,
      i = G.find(e => e.pid === n);
    if (null == i) {
      let e = V.find(e => e.pid === n);
      if (null == e) return;
      (i = {
        ...e
      }).hidden = !1, G.push(i), t = ee(i)
    } else t = ee(i), i.hidden && (H[t] = !0), i.hidden = !1;
    (null == i.lastFocused || 0 === i.lastFocused) && (i.lastFocused = Math.floor(Date.now() / 1e3)), Y.gameOverrides[t] = {
      ...i,
      add: !0
    }, el(G), eo(), es(), $()
  },
  RUNNING_GAME_TOGGLE_OVERLAY: function(e) {
    if (Y.enableOverlay[ee(e.game)] = e.newEnabledValue, es(), !__OVERLAY__) {
      let t = null != e.game.id ? N.default.getDetectableGame(e.game.id) : null;
      null != t && v.default.track(D.AnalyticEvents.OVERLAY_TOGGLED, {
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
    } = e, n = ei(t);
    Y.enableDetection[ee(t)] = !n, es()
  },
  RUNNING_GAME_EDIT_NAME: function(e) {
    let t = ee(e.game),
      n = Y.gameOverrides[t];
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
    let s = ee(n);
    delete Y.gameOverrides[t], Y.gameOverrides[s] = n, Q(Y.enableOverlay, t, s), Q(Y.enableDetection, t, s), Q(H, t, s), Y.gamesSeen.forEach(n => {
      ee(n) === t && (n.name = e.newName)
    });
    let r = !1;
    G.forEach(n => {
      ee(n) === t && (n.name = e.newName, r = !0)
    }), eo(), es(), r && $()
  },
  RUNNING_GAME_DELETE_ENTRY: function(e) {
    let t = ee(e.game);
    delete Y.gameOverrides[t], delete Y.enableOverlay[t], delete Y.enableDetection[t], Y.gamesSeen = Y.gamesSeen.filter(e => ee(e) !== t), H[t] && (G.forEach(e => {
      t === ee(e) && (e.hidden = !0)
    }), delete H[t], $()), eo(), es()
  },
  GAMES_DATABASE_UPDATE: j,
  GAME_LAUNCH_SUCCESS: function(e) {
    var t;
    if (__OVERLAY__ || !C.isPlatformEmbedded) return;
    let n = A.default.getDiscordUtils().notifyGameLaunched;
    if (null == n) return;
    let i = N.default.getDetectableGame(e.applicationId);
    null != i && n(i.id, i.name, null !== (t = e.pids) && void 0 !== t ? t : [])
  },
  GAME_DETECTION_WATCH_CANDIDATE_GAMES_START: function() {
    eo()
  }
})