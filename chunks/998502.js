n.d(t, {
  jK: function() {
return s;
  },
  tS: function() {
return l;
  }
}), n(47120), n(411104), n(653041);
var r, i, a, o, s, l, u, c, d = n(512722),
  _ = n.n(d),
  E = n(719711),
  f = n(544891),
  h = n(433517),
  p = n(593472),
  m = n(189451),
  I = n(358085),
  T = n(591759),
  g = n(981631),
  S = n(413135).Buffer;
let A = window.DiscordNative,
  N = [
'jpg',
'jpeg',
'png'
  ],
  v = null,
  O = null,
  R = null,
  C = {};
null != A && (v = A.remoteApp.getVersion().split('.').map(e => parseInt(e)), R = null === (r = (i = A.remoteApp).getModuleVersions) || void 0 === r ? void 0 : r.call(i), O = null === (a = (o = A.remoteApp).getBuildNumber) || void 0 === a ? void 0 : a.call(o));
let y = new Set([
'discord_erlpack',
'discord_game_utils',
'discord_rpc',
'discord_spellcheck',
'discord_utils',
'discord_voice'
  ]),
  D = !1;
async function L(e) {
  let t = await fetch(new Request(e, {
method: 'GET',
mode: 'cors'
  }));
  _()(200 === t.status, 'Data fetch unsuccessful');
  let n = await t.arrayBuffer();
  return _()(null != n, 'Data is null'), n;
}

function b(e) {
  return L(e);
}

function M(e) {
  var t, n, r, i, a, o, s, l;
  return {
id: C[null !== (t = e.id) && void 0 !== t ? t : ''],
nativeProcessObserverId: parseInt(null !== (n = e.id) && void 0 !== n ? n : '', 10),
name: null !== (r = e.gameName) && void 0 !== r ? r : e.name,
processName: null !== (i = e.name) && void 0 !== i ? i : '',
hidden: e.hidden,
elevated: e.elevated,
sandboxed: null !== (a = e.sandboxed) && void 0 !== a && a,
lastFocused: e.lastFocused,
exePath: e.exePath,
exeName: e.exeName,
cmdLine: e.cmdLine,
distributor: e.distributor,
sku: e.sku,
pid: e.pid,
pidPath: null !== (o = e.pidPath) && void 0 !== o ? o : [],
windowHandle: null !== (s = e.windowHandle) && void 0 !== s ? s : null,
fullscreenType: null !== (l = e.fullscreenType) && void 0 !== l ? l : p.Jx.UNKNOWN
  };
}
(u = s || (s = {}))[u.Camera = 0] = 'Camera', u[u.Microphone = 1] = 'Microphone', u[u.Photo = 2] = 'Photo', u[u.InputMonitoring = 3] = 'InputMonitoring', u[u.ScreenRecording = 4] = 'ScreenRecording', (c = l || (l = {})).VIDEO = 'VIDEO', c.MUTE = 'MUTE', c.DEAFEN = 'DEAFEN', c.DISCONNECT = 'DISCONNECT', t.ZP = {
  requireModule: e => A.nativeModules.requireModule(e),
  ensureModule: e => I.isPlatformEmbedded ? __OVERLAY__ && y.has(e) ? Promise.resolve() : A.nativeModules.ensureModule(e) : Promise.reject(Error('not embedded')),
  get canBootstrapNewUpdater() {
return A.nativeModules.canBootstrapNewUpdater || !1;
  },
  getCrashReporterMetadata: () => A.crashReporter.getMetadata(),
  getSetting: async (e, t) => await A.settings.get(e, t),
  beforeUnload() {
var e, t;
let n;
try {
  n = this.requireModule('discord_overlay2');
} catch (e) {}
n && n.reset && n.reset(), n && n.disconnectAllProcesses && n.destroyHostProcess && (n.disconnectAllProcesses(), n.destroyHostProcess()), A.remotePowerMonitor.removeAllListeners(), window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN && !0 !== h.K.get(E.SV) && this.supportsFeature(g.eRX.USER_DATA_CACHE) && A.userDataCache.cacheUserData(h.K.stringify()), null == A || null === (t = A.window) || void 0 === t || t.close(null == A ? void 0 : null === (e = A.globalOverlay) || void 0 === e ? void 0 : e.WINDOW_KEY);
  },
  inputEventRegister(e, t, n, r) {
!Array.isArray(t) && (t = t.toJS()), this.getDiscordUtils().inputEventRegister(parseInt(e), t.map(e => {
  let [t, n, r] = e;
  return 'string' == typeof r ? [
    t,
    n,
    r
  ] : [
    t,
    n
  ];
}), n, r);
  },
  inputEventUnregister(e) {
this.getDiscordUtils().inputEventUnregister(parseInt(e));
  },
  setOnInputEventCallback(e) {
if (!!I.isPlatformEmbedded)
  this.getDiscordUtils().inputWatchAll(e);
  },
  setFocused(e) {
this.getDiscordUtils().inputSetFocused(e);
  },
  setObservedGamesCallback(e, t) {
try {
  C = {};
  let n = 0;
  this.getDiscordUtils().setObservedGamesCallback(e.map(e => {
    let t = ++n;
    return null != e.id && (C[t] = e.id), {
      ...e,
      cmdline: e.cmdLine,
      id: t
    };
  }), e => t(e.map(M)));
} catch (e) {}
  },
  setCandidateGamesCallback(e) {
this.getDiscordUtils().setCandidateGamesCallback(t => e(t.map(M)));
  },
  clearCandidateGamesCallback() {
this.getDiscordUtils().clearCandidateGamesCallback();
  },
  setGameCandidateOverrides(e) {
this.getDiscordUtils().setGameCandidateOverrides(e.map(e => ({
  ...e,
  gameId: e.id,
  gameName: e.name
})));
  },
  setObserverDebugCallback(e, t, n) {
this.getDiscordUtils().setObserverDebugCallback(t => e(t), t, n);
  },
  clearObserverDebugCallback() {
this.getDiscordUtils().setObserverDebugCallback(null, m.l.NONE, 0);
  },
  shouldDisplayNotifications() {
return this.getDiscordUtils().shouldDisplayNotifications();
  },
  getVoiceEngine() {
if (__OVERLAY__)
  throw Error('cannot require discord_voice in overlay');
return D = !0, this.requireModule('discord_voice');
  },
  getDiscordUtils() {
if (!D)
  try {
    this.getVoiceEngine();
  } catch (e) {}
return this.requireModule('discord_utils');
  },
  isSystemDarkMode() {
var e, t, n;
return !!(0, I.isWindows)() && (null === (n = null === (e = (t = this.getDiscordUtils()).isSystemDarkMode) || void 0 === e ? void 0 : e.call(t)) || void 0 === n || n);
  },
  getGameUtils() {
return this.requireModule('discord_game_utils');
  },
  getCloudSync() {
return this.requireModule('discord_cloudsync');
  },
  getDispatch() {
return this.requireModule('discord_dispatch');
  },
  setBadge(e) {
if ('darwin' === (0, I.getPlatformName)()) {
  let t = ''; -
  1 === e ? t = '\u2022' : e > 0 && (t = ''.concat(e)), A.remoteApp.dock.setBadge(t);
} else
  'win32' === (0, I.getPlatformName)() ? this.send('APP_BADGE_SET', e) : 'linux' === (0, I.getPlatformName)() && A.remoteApp.setBadgeCount(e >= 0 ? e : 0);
  },
  setSystemTrayIcon(e) {
if (!!I.isPlatformEmbedded)
  this.send('SYSTEM_TRAY_SET_ICON', e);
  },
  setThumbarButtons(e) {
var t, n;
if (!!I.isPlatformEmbedded)
  null === (n = A.thumbar) || void 0 === n || null === (t = n.setThumbarButtons) || void 0 === t || t.call(n, e, this.isSystemDarkMode());
  },
  bounceDock(e) {
if (I.isPlatformEmbedded) {
  let t = A.remoteApp;
  if (null != t.dock) {
    let n = t.dock.bounce(e);
    return async () => {
      let e = await n;
      t.dock.cancelBounce(e);
    };
  }
}
  },
  setSystemTrayApplications(e) {
if (!!I.isPlatformEmbedded)
  this.send('SYSTEM_TRAY_SET_APPLICATIONS', e);
  },
  get architecture() {
return I.isPlatformEmbedded ? A.process.arch : '';
  },
  get releaseChannel() {
if (!I.isPlatformEmbedded)
  return '';
let e = A.remoteApp.getReleaseChannel();
if (null != e)
  return e;
return '';
  },
  get version() {
return v;
  },
  get buildNumber() {
return O;
  },
  get moduleVersions() {
return R;
  },
  copy(e) {
I.isPlatformEmbedded && A.clipboard.copy(e);
  },
  async copyImage(e) {
_()(I.isPlatformEmbedded, 'Copy image method called outside native app'), _()('function' == typeof A.clipboard.copyImage, 'Copy image not supported');
let t = await L(e);
A.clipboard.copyImage(S.from(t), e);
  },
  async saveImage(e) {
var t;
_()(I.isPlatformEmbedded, 'Save image method called outside native app');
let n = T.Z.toURLSafe(e);
if (null == n)
  return;
let r = null !== (t = n.pathname.split('/').pop()) && void 0 !== t ? t : 'unknown',
  i = await L(e),
  a = S.from(i);
A.fileManager.saveWithDialog(a, r);
  },
  async saveFile(e, t) {
var n;
_()(I.isPlatformEmbedded, 'Save file method called outside native app');
let r = T.Z.toURLSafe(e);
if (null == r)
  return;
let i = null !== (n = null != t ? t : r.pathname.split('/').pop()) && void 0 !== n ? n : 'unknown',
  a = await L(e),
  o = S.from(a);
A.fileManager.saveWithDialog(o, i);
  },
  canCopyImage() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
if (null != e) {
  var t, n;
  let r = null === (t = T.Z.toURLSafe(e)) || void 0 === t ? void 0 : t.pathname;
  if (null == r)
    return !1;
  let i = null === (n = r.split('.').pop()) || void 0 === n ? void 0 : n.toLowerCase();
  if (null != i && !N.includes(i))
    return !1;
}
return 'function' == typeof A.clipboard.copyImage;
  },
  cut() {
I.isPlatformEmbedded && A.clipboard.cut();
  },
  paste() {
I.isPlatformEmbedded && A.clipboard.paste();
  },
  readClipboard: () => I.isPlatformEmbedded ? A.clipboard.read() : '',
  on(e, t) {
A.ipc.on(e, t);
  },
  invoke(e) {
for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
  n[r - 1] = arguments[r];
return A.ipc.invoke(e, ...n);
  },
  send(e) {
for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
  n[r - 1] = arguments[r];
A.ipc.send(e, ...n);
  },
  flashFrame(e) {
A.window.flashFrame(e);
  },
  webAuthnRegister: e => A.nativeModules.ensureModule('discord_webauthn').then(() => A.webAuthn.webAuthnRegister(e)),
  webAuthnAuthenticate: e => A.nativeModules.ensureModule('discord_webauthn').then(() => A.webAuthn.webAuthnAuthenticate(e)),
  minimize(e) {
A.window.minimize(e);
  },
  restore(e) {
A.window.restore(e);
  },
  maximize(e) {
A.window.maximize(e);
  },
  focus(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
t && (0, I.isWindows)() && this.minimize(null), A.window.focus(t, e);
  },
  blur() {
I.isPlatformEmbedded && null != A.window.blur ? A.window.blur() : window.blur();
  },
  fullscreen(e) {
A.window.fullscreen(e);
  },
  close(e) {
A.window.close(e);
  },
  setAlwaysOnTop(e, t) {
'function' == typeof A.window.setAlwaysOnTop && A.window.setAlwaysOnTop(e, t);
  },
  async isAlwaysOnTop(e) {
let t = !1;
return 'function' == typeof A.window.isAlwaysOnTop && (t = await A.window.isAlwaysOnTop(e)), t;
  },
  purgeMemory() {
if (!!I.isPlatformEmbedded)
  A.processUtils.purgeMemory();
  },
  updateCrashReporter(e) {
A.crashReporter.updateCrashReporter(e);
  },
  triggerJSException(e) {
A.crashReporter.triggerJSException(e);
  },
  flushDNSCache() {
I.isPlatformEmbedded && A.processUtils.flushDNSCache();
  },
  supportsFeature: e => A.features.supports(e),
  getEnableHardwareAcceleration: () => !I.isPlatformEmbedded || !__OVERLAY__ && A.gpuSettings.getEnableHardwareAcceleration(),
  setEnableHardwareAcceleration(e) {
A.gpuSettings.setEnableHardwareAcceleration(e);
  },
  setChromiumSwitches(e) {
A.gpuSettings.setChromiumSwitches(e);
  },
  getGPUDriverVersions() {
return (0, I.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions ? this.getDiscordUtils().getGPUDriverVersions() : Promise.resolve(Object.freeze({}));
  },
  setZoomFactor: e => !!I.isPlatformEmbedded && (A.window.setZoomFactor(e), !0),
  setBackgroundThrottling(e) {
null != A.window.setBackgroundThrottling ? A.window.setBackgroundThrottling(e) : A.window.webContents.setBackgroundThrottling(e);
  },
  pauseFrameEvictor() {
var e, t;
null === (e = (t = A.app).pauseFrameEvictor) || void 0 === e || e.call(t);
  },
  unpauseFrameEvictor() {
var e, t;
null === (e = (t = A.app).pauseFrameEvictor) || void 0 === e || e.call(t);
  },
  getPidFromDesktopSource(e) {
if (!((0, I.isWindows)() || (0, I.isMac)()) || null == this.getDiscordUtils().getPidFromWindowHandle)
  return null;
let t = null == e ? void 0 : e.split(':'),
  n = null == t ? void 0 : t[0];
if ('window' === n) {
  var r;
  let e = null !== (r = null == t ? void 0 : t[1]) && void 0 !== r ? r : '',
    n = this.getDiscordUtils().getPidFromWindowHandle(e);
  return null == n || 0 === n ? null : n;
}
if (n.startsWith('screen'))
  return 1;
return null;
  },
  getDesktopSourceFromPid(e) {
if (!(0, I.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e)
  return null;
let t = this.getDiscordUtils().getWindowHandleFromPid(e);
return null == t || 0 === t.length ? null : [
  'window',
  t,
  '0'
].join(':');
  },
  generateSessionFromPid(e) {
return this.getDiscordUtils().generateSessionFromPid(e);
  },
  getAudioPid(e) {
return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e);
  },
  setForegroundProcess(e) {
let {
  setForegroundProcess: t
} = this.getDiscordUtils();
return null != t && t(e);
  },
  getDiscordMemoryUsage() {
let {
  getDiscordMemoryUsage: e
} = this.getDiscordUtils();
return null != e ? e() : null;
  },
  getDiscordMemoryUsageElectronRenderer() {
let {
  getDiscordMemoryUsageElectronRenderer: e
} = this.getDiscordUtils();
return null == e ? void 0 : e();
  },
  showOpenDialog: e => A.fileManager.showOpenDialog({
properties: e
  }),
  flushStorageData: () => I.isPlatformEmbedded ? new Promise((e, t) => {
null != A.processUtils.flushStorageData ? A.processUtils.flushStorageData(n => null != n ? t(Error(n)) : e()) : e();
  }) : Promise.resolve(),
  flushCookies: () => I.isPlatformEmbedded ? new Promise((e, t) => {
null != A.processUtils.flushCookies ? A.processUtils.flushCookies(n => null != n ? t(Error(n)) : e()) : e();
  }) : Promise.resolve(),
  setCrashInformation(e, t) {
var n;
if (!!I.isPlatformEmbedded && (null == A ? void 0 : null === (n = A.processUtils) || void 0 === n ? void 0 : n.setCrashInformation) != null)
  A.processUtils.setCrashInformation(e, t);
  },
  blockDisplaySleep: () => I.isPlatformEmbedded && null != A.powerSaveBlocker ? A.powerSaveBlocker.blockDisplaySleep() : null,
  unblockDisplaySleep(e) {
if (!!I.isPlatformEmbedded && null != A.powerSaveBlocker)
  A.powerSaveBlocker.unblockDisplaySleep(e);
  },
  cleanupDisplaySleep() {
if (!!I.isPlatformEmbedded && null != A.powerSaveBlocker)
  A.powerSaveBlocker.cleanupDisplaySleep();
  },
  relaunch() {
if (!!I.isPlatformEmbedded)
  null != A.remoteApp.relaunch && A.remoteApp.relaunch();
  },
  makeChunkedRequest(e, t, n) {
let r = ''.concat((0, f.K0)()).concat(e);
if (!I.isPlatformEmbedded)
  return Promise.reject(Error('Not embedded!'));
if (null == A.http)
  return Promise.reject(Error('HTTP module not available'));
let {
  method: i,
  maxBps: a,
  token: o,
  chunkInterval: s,
  contentType: l
} = {
  maxBps: 8000,
  chunkInterval: 50,
  contentType: 'application/json',
  ...n
}, u = t;
'application/json' === l && (u = JSON.stringify(t));
let c = s / 1000 * a,
  d = Math.ceil(u.length / c),
  _ = Array(d);
for (let e = 0; e < d; e++) {
  let t = e * c;
  _[e] = u.substring(t, t + c);
}
return new Promise((e, t) => {
  null != A.http && A.http.makeChunkedRequest(r, _, {
    method: i,
    chunkInterval: s,
    contentType: l,
    token: o
  }, (n, r) => null != n ? t(n) : r.status >= 400 ? t(Error(r.body)) : void e(r));
});
  },
  submitLiveCrashReport(e) {
if (!(0, I.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport)
  return Promise.resolve();
let t = this.getCrashReporterMetadata(),
  n = A.app.getReleaseChannel(),
  r = null == t ? void 0 : t.sentry;
return this.getDiscordUtils().submitLiveCrashReport(n, {
  ...r,
  ...e
});
  },
  crash(e) {
let t = this.getDiscordUtils().crash;
return null != t && (t(e), !0);
  },
  setApplicationBackgroundColor(e) {
A.ipc.send('SETTINGS_UPDATE_BACKGROUND_COLOR', e);
  },
  initializeExitHook() {
let {
  initializeExitHook: e
} = this.getDiscordUtils();
null != e && e();
  },
  asyncify: e => new Promise((t, n) => {
e(t);
  }),
  IsGameDisplayModeUpdateSupported() {
let {
  gameDisplayModeUpdate: e
} = this.getDiscordUtils();
return null != e;
  },
  GameDisplayModeUpdate(e) {
let {
  gameDisplayModeUpdate: t
} = this.getDiscordUtils();
return null != t && null != e && t(e);
  },
  GameDisplayModeIsGameSupported(e) {
let {
  gameDisplayModeIsSupported: t
} = this.getDiscordUtils();
return null != t && null != e && t(e);
  },
  GetWindowFullscreenTypeByPid(e, t, n) {
var r;
let {
  getWindowFullscreenTypeByPid: i
} = this.getDiscordUtils(), a = 0 !== e && null != i && null != t ? i(e, t) : null;
return -1 === a && (a = null), null !== (r = null != a ? a : n) && void 0 !== r ? r : p.Jx.UNKNOWN;
  },
  isModuleVersionAtLeast(e, t) {
var n, r, i;
let a = [...null != v ? v : [
  0,
  0,
  0
]];
a.push(null !== (r = null === (n = this.moduleVersions) || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : 0);
let o = null !== (i = t[this.releaseChannel]) && void 0 !== i ? i : t.stable;
for (let [e, t] of a.entries()) {
  if (t > o[e])
    break;
  if (t < o[e])
    return !1;
}
return !0;
  }
};