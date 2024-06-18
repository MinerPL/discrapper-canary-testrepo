"use strict";
n.d(t, {
  jK: function() {
    return a
  },
  tS: function() {
    return l
  }
}), n(47120), n(411104), n(653041);
var i, r, s, o, a, l, u, _, d = n(512722),
  c = n.n(d),
  E = n(719711),
  I = n(544891),
  T = n(433517),
  h = n(593472),
  S = n(358085),
  f = n(591759),
  N = n(981631),
  A = n(413135).Buffer;
let m = window.DiscordNative,
  O = ["jpg", "jpeg", "png"],
  R = null,
  C = null,
  p = null,
  g = {};
null != m && (R = m.remoteApp.getVersion().split(".").map(e => parseInt(e)), p = null === (i = (r = m.remoteApp).getModuleVersions) || void 0 === i ? void 0 : i.call(r), C = null === (s = (o = m.remoteApp).getBuildNumber) || void 0 === s ? void 0 : s.call(o));
let L = new Set(["discord_erlpack", "discord_game_utils", "discord_rpc", "discord_spellcheck", "discord_utils", "discord_voice"]),
  v = !1;
async function D(e) {
  let t = await fetch(new Request(e, {
    method: "GET",
    mode: "cors"
  }));
  c()(200 === t.status, "Data fetch unsuccessful");
  let n = await t.arrayBuffer();
  return c()(null != n, "Data is null"), n
}

function M(e) {
  return D(e)
}

function P(e) {
  var t, n, i, r, s, o, a, l;
  return {
    id: g[null !== (t = e.id) && void 0 !== t ? t : ""],
    nativeProcessObserverId: parseInt(null !== (n = e.id) && void 0 !== n ? n : "", 10),
    name: null !== (i = e.gameName) && void 0 !== i ? i : e.name,
    processName: null !== (r = e.name) && void 0 !== r ? r : "",
    hidden: e.hidden,
    elevated: e.elevated,
    sandboxed: null !== (s = e.sandboxed) && void 0 !== s && s,
    lastFocused: e.lastFocused,
    exePath: e.exePath,
    exeName: e.exeName,
    cmdLine: e.cmdLine,
    distributor: e.distributor,
    sku: e.sku,
    pid: e.pid,
    pidPath: null !== (o = e.pidPath) && void 0 !== o ? o : [],
    windowHandle: null !== (a = e.windowHandle) && void 0 !== a ? a : null,
    fullscreenType: null !== (l = e.fullscreenType) && void 0 !== l ? l : h.Jx.UNKNOWN
  }
}(u = a || (a = {}))[u.Camera = 0] = "Camera", u[u.Microphone = 1] = "Microphone", u[u.Photo = 2] = "Photo", u[u.InputMonitoring = 3] = "InputMonitoring", u[u.ScreenRecording = 4] = "ScreenRecording", (_ = l || (l = {})).VIDEO = "VIDEO", _.MUTE = "MUTE", _.DEAFEN = "DEAFEN", _.DISCONNECT = "DISCONNECT", t.ZP = {
  requireModule: e => m.nativeModules.requireModule(e),
  ensureModule: e => S.isPlatformEmbedded ? __OVERLAY__ && L.has(e) ? Promise.resolve() : m.nativeModules.ensureModule(e) : Promise.reject(Error("not embedded")),
  get canBootstrapNewUpdater() {
    return m.nativeModules.canBootstrapNewUpdater || !1
  },
  getCrashReporterMetadata: () => m.crashReporter.getMetadata(),
  getSetting: async (e, t) => await m.settings.get(e, t),
  beforeUnload() {
    var e, t;
    let n;
    try {
      n = this.requireModule("discord_overlay2")
    } catch (e) {}
    n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), m.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== T.K.get(E.SV) && this.supportsFeature(N.eRX.USER_DATA_CACHE) && m.userDataCache.cacheUserData(T.K.stringify()), null == m || null === (t = m.window) || void 0 === t || t.close(null == m ? void 0 : null === (e = m.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY)
  },
  inputEventRegister(e, t, n, i) {
    !Array.isArray(t) && (t = t.toJS()), this.getDiscordUtils().inputEventRegister(parseInt(e), t.map(e => {
      let [t, n, i] = e;
      return "string" == typeof i ? [t, n, i] : [t, n]
    }), n, i)
  },
  inputEventUnregister(e) {
    this.getDiscordUtils().inputEventUnregister(parseInt(e))
  },
  setOnInputEventCallback(e) {
    if (!!S.isPlatformEmbedded) this.getDiscordUtils().inputWatchAll(e)
  },
  setFocused(e) {
    this.getDiscordUtils().inputSetFocused(e)
  },
  setObservedGamesCallback(e, t) {
    try {
      g = {};
      let n = 0;
      this.getDiscordUtils().setObservedGamesCallback(e.map(e => {
        let t = ++n;
        return null != e.id && (g[t] = e.id), {
          ...e,
          cmdline: e.cmdLine,
          id: t
        }
      }), e => t(e.map(P)))
    } catch (e) {}
  },
  setCandidateGamesCallback(e) {
    this.getDiscordUtils().setCandidateGamesCallback(t => e(t.map(P)))
  },
  clearCandidateGamesCallback() {
    this.getDiscordUtils().clearCandidateGamesCallback()
  },
  setGameCandidateOverrides(e) {
    this.getDiscordUtils().setGameCandidateOverrides(e.map(e => ({
      ...e,
      gameId: e.id,
      gameName: e.name
    })))
  },
  shouldDisplayNotifications() {
    return this.getDiscordUtils().shouldDisplayNotifications()
  },
  getVoiceEngine() {
    if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
    return v = !0, this.requireModule("discord_voice")
  },
  getDiscordUtils() {
    if (!v) try {
      this.getVoiceEngine()
    } catch (e) {}
    return this.requireModule("discord_utils")
  },
  isSystemDarkMode() {
    var e, t, n;
    return !!(0, S.isWindows)() && (null === (n = null === (e = (t = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(t)) || void 0 === n || n)
  },
  getGameUtils() {
    return this.requireModule("discord_game_utils")
  },
  getCloudSync() {
    return this.requireModule("discord_cloudsync")
  },
  getDispatch() {
    return this.requireModule("discord_dispatch")
  },
  setBadge(e) {
    if ("darwin" === (0, S.getPlatformName)()) {
      let t = ""; - 1 === e ? t = "•" : e > 0 && (t = "".concat(e)), m.remoteApp.dock.setBadge(t)
    } else "win32" === (0, S.getPlatformName)() ? this.send("APP_BADGE_SET", e) : "linux" === (0, S.getPlatformName)() && m.remoteApp.setBadgeCount(e >= 0 ? e : 0)
  },
  setSystemTrayIcon(e) {
    if (!!S.isPlatformEmbedded) this.send("SYSTEM_TRAY_SET_ICON", e)
  },
  setThumbarButtons(e) {
    var t, n;
    if (!!S.isPlatformEmbedded) null === (n = m.thumbar) || void 0 === n || null === (t = n.setThumbarButtons) || void 0 === t || t.call(n, e, this.isSystemDarkMode())
  },
  bounceDock(e) {
    if (S.isPlatformEmbedded) {
      let t = m.remoteApp;
      if (null != t.dock) {
        let n = t.dock.bounce(e);
        return async () => {
          let e = await n;
          t.dock.cancelBounce(e)
        }
      }
    }
  },
  setSystemTrayApplications(e) {
    if (!!S.isPlatformEmbedded) this.send("SYSTEM_TRAY_SET_APPLICATIONS", e)
  },
  get architecture() {
    return S.isPlatformEmbedded ? m.process.arch : ""
  },
  get releaseChannel() {
    if (!S.isPlatformEmbedded) return "";
    let e = m.remoteApp.getReleaseChannel();
    if (null != e) return e;
    return ""
  },
  get version() {
    return R
  },
  get buildNumber() {
    return C
  },
  get moduleVersions() {
    return p
  },
  copy(e) {
    S.isPlatformEmbedded && m.clipboard.copy(e)
  },
  async copyImage(e) {
    c()(S.isPlatformEmbedded, "Copy image method called outside native app"), c()("function" == typeof m.clipboard.copyImage, "Copy image not supported");
    let t = await D(e);
    m.clipboard.copyImage(A.from(t), e)
  },
  async saveImage(e) {
    var t;
    c()(S.isPlatformEmbedded, "Save image method called outside native app");
    let n = f.Z.toURLSafe(e);
    if (null == n) return;
    let i = null !== (t = n.pathname.split("/").pop()) && void 0 !== t ? t : "unknown",
      r = await D(e),
      s = A.from(r);
    m.fileManager.saveWithDialog(s, i)
  },
  async saveFile(e, t) {
    var n;
    c()(S.isPlatformEmbedded, "Save file method called outside native app");
    let i = f.Z.toURLSafe(e);
    if (null == i) return;
    let r = null !== (n = null != t ? t : i.pathname.split("/").pop()) && void 0 !== n ? n : "unknown",
      s = await D(e),
      o = A.from(s);
    m.fileManager.saveWithDialog(o, r)
  },
  canCopyImage() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
    if (null != e) {
      var t, n;
      let i = null === (t = f.Z.toURLSafe(e)) || void 0 === t ? void 0 : t.pathname;
      if (null == i) return !1;
      let r = null === (n = i.split(".").pop()) || void 0 === n ? void 0 : n.toLowerCase();
      if (null != r && !O.includes(r)) return !1
    }
    return "function" == typeof m.clipboard.copyImage
  },
  cut() {
    S.isPlatformEmbedded && m.clipboard.cut()
  },
  paste() {
    S.isPlatformEmbedded && m.clipboard.paste()
  },
  readClipboard: () => S.isPlatformEmbedded ? m.clipboard.read() : "",
  on(e, t) {
    m.ipc.on(e, t)
  },
  invoke(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return m.ipc.invoke(e, ...n)
  },
  send(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    m.ipc.send(e, ...n)
  },
  flashFrame(e) {
    m.window.flashFrame(e)
  },
  webAuthnRegister: e => m.nativeModules.ensureModule("discord_webauthn").then(() => m.webAuthn.webAuthnRegister(e)),
  webAuthnAuthenticate: e => m.nativeModules.ensureModule("discord_webauthn").then(() => m.webAuthn.webAuthnAuthenticate(e)),
  minimize(e) {
    m.window.minimize(e)
  },
  restore(e) {
    m.window.restore(e)
  },
  maximize(e) {
    m.window.maximize(e)
  },
  focus(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    t && (0, S.isWindows)() && this.minimize(null), m.window.focus(t, e)
  },
  blur() {
    S.isPlatformEmbedded && null != m.window.blur ? m.window.blur() : window.blur()
  },
  fullscreen(e) {
    m.window.fullscreen(e)
  },
  close(e) {
    m.window.close(e)
  },
  setAlwaysOnTop(e, t) {
    "function" == typeof m.window.setAlwaysOnTop && m.window.setAlwaysOnTop(e, t)
  },
  async isAlwaysOnTop(e) {
    let t = !1;
    return "function" == typeof m.window.isAlwaysOnTop && (t = await m.window.isAlwaysOnTop(e)), t
  },
  purgeMemory() {
    if (!!S.isPlatformEmbedded) m.processUtils.purgeMemory()
  },
  updateCrashReporter(e) {
    m.crashReporter.updateCrashReporter(e)
  },
  triggerJSException(e) {
    m.crashReporter.triggerJSException(e)
  },
  flushDNSCache() {
    S.isPlatformEmbedded && m.processUtils.flushDNSCache()
  },
  supportsFeature: e => m.features.supports(e),
  getEnableHardwareAcceleration: () => !S.isPlatformEmbedded || !__OVERLAY__ && m.gpuSettings.getEnableHardwareAcceleration(),
  setEnableHardwareAcceleration(e) {
    m.gpuSettings.setEnableHardwareAcceleration(e)
  },
  setChromiumSwitches(e) {
    m.gpuSettings.setChromiumSwitches(e)
  },
  getGPUDriverVersions() {
    return (0, S.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}))
  },
  setZoomFactor: e => !!S.isPlatformEmbedded && (m.window.setZoomFactor(e), !0),
  setBackgroundThrottling(e) {
    null != m.window.setBackgroundThrottling ? m.window.setBackgroundThrottling(e) : m.window.webContents.setBackgroundThrottling(e)
  },
  getPidFromDesktopSource(e) {
    if (!((0, S.isWindows)() || (0, S.isMac)()) || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
    let t = null == e ? void 0 : e.split(":"),
      n = null == t ? void 0 : t[0];
    if ("window" === n) {
      var i;
      let e = null !== (i = null == t ? void 0 : t[1]) && void 0 !== i ? i : "",
        n = this.getDiscordUtils().getPidFromWindowHandle(e);
      return null == n || 0 === n ? null : n
    }
    if (n.startsWith("screen")) return 1;
    return null
  },
  getDesktopSourceFromPid(e) {
    if (!(0, S.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
    let t = this.getDiscordUtils().getWindowHandleFromPid(e);
    return null == t || 0 === t.length ? null : ["window", t, "0"].join(":")
  },
  generateSessionFromPid(e) {
    return this.getDiscordUtils().generateSessionFromPid(e)
  },
  getAudioPid(e) {
    return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e)
  },
  setForegroundProcess(e) {
    let {
      setForegroundProcess: t
    } = this.getDiscordUtils();
    return null != t && t(e)
  },
  getDiscordMemoryUsage() {
    let {
      getDiscordMemoryUsage: e
    } = this.getDiscordUtils();
    return null != e ? e() : null
  },
  getDiscordMemoryUsageElectronRenderer() {
    let {
      getDiscordMemoryUsageElectronRenderer: e
    } = this.getDiscordUtils();
    return null == e ? void 0 : e()
  },
  showOpenDialog: e => m.fileManager.showOpenDialog({
    properties: e
  }),
  flushStorageData: () => S.isPlatformEmbedded ? new Promise((e, t) => {
    null != m.processUtils.flushStorageData ? m.processUtils.flushStorageData(n => null != n ? t(Error(n)) : e()) : e()
  }) : Promise.resolve(),
  flushCookies: () => S.isPlatformEmbedded ? new Promise((e, t) => {
    null != m.processUtils.flushCookies ? m.processUtils.flushCookies(n => null != n ? t(Error(n)) : e()) : e()
  }) : Promise.resolve(),
  setCrashInformation(e, t) {
    var n;
    if (!!S.isPlatformEmbedded && (null == m ? void 0 : null === (n = m.processUtils) || void 0 === n ? void 0 : n.setCrashInformation) != null) m.processUtils.setCrashInformation(e, t)
  },
  blockDisplaySleep: () => S.isPlatformEmbedded && null != m.powerSaveBlocker ? m.powerSaveBlocker.blockDisplaySleep() : null,
  unblockDisplaySleep(e) {
    if (!!S.isPlatformEmbedded && null != m.powerSaveBlocker) m.powerSaveBlocker.unblockDisplaySleep(e)
  },
  cleanupDisplaySleep() {
    if (!!S.isPlatformEmbedded && null != m.powerSaveBlocker) m.powerSaveBlocker.cleanupDisplaySleep()
  },
  relaunch() {
    if (!!S.isPlatformEmbedded) null != m.remoteApp.relaunch && m.remoteApp.relaunch()
  },
  makeChunkedRequest(e, t, n) {
    let i = "".concat((0, I.K0)()).concat(e);
    if (!S.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
    if (null == m.http) return Promise.reject(Error("HTTP module not available"));
    let {
      method: r,
      maxBps: s,
      token: o,
      chunkInterval: a,
      contentType: l
    } = {
      maxBps: 8e3,
      chunkInterval: 50,
      contentType: "application/json",
      ...n
    }, u = t;
    "application/json" === l && (u = JSON.stringify(t));
    let _ = a / 1e3 * s,
      d = Math.ceil(u.length / _),
      c = Array(d);
    for (let e = 0; e < d; e++) {
      let t = e * _;
      c[e] = u.substring(t, t + _)
    }
    return new Promise((e, t) => {
      null != m.http && m.http.makeChunkedRequest(i, c, {
        method: r,
        chunkInterval: a,
        contentType: l,
        token: o
      }, (n, i) => null != n ? t(n) : i.status >= 400 ? t(Error(i.body)) : void e(i))
    })
  },
  submitLiveCrashReport(e) {
    if (!(0, S.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
    let t = this.getCrashReporterMetadata(),
      n = m.app.getReleaseChannel(),
      i = null == t ? void 0 : t.sentry;
    return this.getDiscordUtils().submitLiveCrashReport(n, {
      ...i,
      ...e
    })
  },
  crash(e) {
    let t = this.getDiscordUtils().crash;
    return null != t && (t(e), !0)
  },
  setApplicationBackgroundColor(e) {
    m.ipc.send("SETTINGS_UPDATE_BACKGROUND_COLOR", e)
  },
  initializeExitHook() {
    let {
      initializeExitHook: e
    } = this.getDiscordUtils();
    null != e && e()
  },
  asyncify: e => new Promise((t, n) => {
    e(t)
  }),
  IsGameDisplayModeUpdateSupported() {
    let {
      gameDisplayModeUpdate: e
    } = this.getDiscordUtils();
    return null != e
  },
  GameDisplayModeUpdate(e) {
    let {
      gameDisplayModeUpdate: t
    } = this.getDiscordUtils();
    return null != t && null != e && t(e)
  },
  GameDisplayModeIsGameSupported(e) {
    let {
      gameDisplayModeIsSupported: t
    } = this.getDiscordUtils();
    return null != t && null != e && t(e)
  },
  GetWindowFullscreenTypeByPid(e, t, n) {
    var i;
    let {
      getWindowFullscreenTypeByPid: r
    } = this.getDiscordUtils(), s = 0 !== e && null != r && null != t ? r(e, t) : null;
    return -1 === s && (s = null), null !== (i = null != s ? s : n) && void 0 !== i ? i : h.Jx.UNKNOWN
  },
  isModuleVersionAtLeast(e, t) {
    var n, i, r;
    let s = [...null != R ? R : [0, 0, 0]];
    s.push(null !== (i = null === (n = this.moduleVersions) || void 0 === n ? void 0 : n[e]) && void 0 !== i ? i : 0);
    let o = null !== (r = t[this.releaseChannel]) && void 0 !== r ? r : t.stable;
    for (let [e, t] of s.entries()) {
      if (t > o[e]) break;
      if (t < o[e]) return !1
    }
    return !0
  }
}