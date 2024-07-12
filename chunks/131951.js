let r, i, a, o;
n(47120), n(724458), n(773603), n(653041), n(337869);
var s, l, u, c = n(512722),
  d = n.n(c),
  _ = n(392711),
  E = n.n(_),
  f = n(553813),
  h = n.n(f),
  p = n(442837),
  m = n(46973),
  I = n(433517),
  T = n(846519),
  g = n(570140),
  S = n(579806),
  A = n(887278),
  N = n(547727),
  v = n(565885),
  O = n(435064),
  R = n(779618),
  C = n(710845),
  y = n(811660),
  D = n(353926),
  L = n(646047),
  b = n(594190),
  M = n(502286),
  P = n(227196),
  U = n(12898),
  w = n(294473),
  x = n(706629),
  G = n(926951),
  k = n(836157),
  B = n(498600),
  F = n(631610),
  V = n(951958),
  H = n(529558),
  Z = n(874785),
  Y = n(636458),
  j = n(441167),
  W = n(338336),
  K = n(751571),
  z = n(815016),
  q = n(725380),
  Q = n(581883),
  X = n(626135),
  $ = n(12647),
  J = n(70956),
  ee = n(358085),
  et = n(960048),
  en = n(998502),
  er = n(13140),
  ei = n(314897),
  ea = n(967368),
  eo = n(463395),
  es = n(592125),
  el = n(858340),
  eu = n(19780),
  ec = n(704806),
  ed = n(631768),
  e_ = n(981631),
  eE = n(70722),
  ef = n(761274),
  eh = n(526761),
  ep = n(65154),
  em = n(689938);

function eI(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let eT = new C.Z('MediaEngineStore');
(u = s || (s = {}))[u.DETACHED = 0] = 'DETACHED', u[u.WAITING = 1] = 'WAITING', u[u.ATTACHED = 2] = 'ATTACHED', u[u.STARTED = 3] = 'STARTED', u[u.PLAYING = 4] = 'PLAYING', u[u.SILENCE = 5] = 'SILENCE';
let eg = 'MediaEngineStore',
  eS = {
left: 1,
right: 1
  },
  eA = 5 * J.Z.Millis.SECOND;

function eN() {
  return {
mode: e_.pM4.VOICE_ACTIVITY,
modeOptions: {
  threshold: -60,
  autoThreshold: ee.isPlatformEmbedded || __OVERLAY__,
  vadUseKrisp: !0,
  vadLeading: 5,
  vadTrailing: 25,
  delay: 20,
  shortcut: []
},
vadUseKrispSettingVersion: 0,
ncUseKrispSettingVersion: 0,
ncUseKrispjsSettingVersion: 0,
mute: !1,
deaf: !1,
echoCancellation: !0,
noiseSuppression: !1,
automaticGainControl: !0,
noiseCancellation: !0,
experimentalEncoders: !1,
hardwareH264: !0,
hardwareEnabledVersion: 0,
hardwareEncoding: null,
silenceWarning: !0,
attenuation: 0,
attenuateWhileSpeakingSelf: !1,
attenuateWhileSpeakingOthers: !0,
localMutes: {},
disabledLocalVideos: {},
videoToggleStateMap: {},
localVolumes: {},
localPans: {},
inputVolume: ep.Qx,
outputVolume: ep.Qx,
inputDeviceId: ep.w5,
outputDeviceId: ep.w5,
videoDeviceId: ep.w5,
qos: !1,
qosMigrated: !1,
videoHook: ev.supports(ep.AN.VIDEO_HOOK),
experimentalSoundshare2: null,
openH264: !0,
h265Enabled: !0,
vadThrehsoldMigrated: !1,
aecDumpEnabled: !1
  };
}
let ev = (0, m.Mt)((0, m.jj)()),
  eO = {},
  eR = new Set([ep.Yn.DEFAULT]),
  eC = ev.supports(ep.AN.AUTO_ENABLE),
  ey = !1,
  eD = ep.Yn.STREAM,
  eL = {
[ep.w5]: tu(em.Z.Messages.NO_INPUT_DEVICES)
  },
  eb = {
[ep.w5]: tu(em.Z.Messages.NO_OUTPUT_DEVICES)
  },
  eM = {
[ep.w5]: tu(em.Z.Messages.NO_VIDEO_DEVICES)
  },
  eP = !1,
  eU = !1,
  ew = !1,
  ex = !1,
  eG = !1,
  ek = ep.Av,
  eB = !1,
  eF = !1,
  eV = !1,
  eH = !1,
  eZ = null,
  eY = !1,
  ej = !1,
  eW = !1,
  eK = !1,
  ez = !1,
  eq = null,
  eQ = !1,
  eX = !1,
  e$ = !1;
K.Z.hasPermission(ef.Eu.AUDIO, {
  showAuthorizationError: !1
}), K.Z.hasPermission(ef.Eu.CAMERA, {
  showAuthorizationError: !1
});
let eJ = new Set(),
  e0 = !1,
  e1 = !1,
  e2 = {},
  e3 = null,
  e4 = {},
  e5 = 5 * J.Z.Millis.SECOND;

function e6() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
t = eO[e];
  return null == t && (t = eN(), eO[e] = t), t;
}

function e7(e) {
  let t = e6(e.context);
  e.setInputMode(t.mode, {
vadThreshold: t.modeOptions.threshold,
vadAutoThreshold: t.modeOptions.autoThreshold,
vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
  return ez || !1;
}(),
vadLeading: t.modeOptions.vadLeading,
vadTrailing: t.modeOptions.vadTrailing,
pttReleaseDelay: t.modeOptions.delay
  });
}

function e8(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Qx;
  return E().clamp(e, 0, t);
}

function e9(e) {
  let t = e6(e.context),
n = !eC || t.mute || t.deaf;
  e.context === ep.Yn.DEFAULT ? n = n || eP || eU || ew || !K.Z.didHavePermission(ef.Eu.AUDIO) : e.context === ep.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === ep.Yn.DEFAULT && N.Z.updateNativeMute();
}

function te() {
  var e, t, n;
  let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG,
o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
s = a;
  if ((null == s ? void 0 : s.desktopSource) != null && s.desktopSource.id !== (null == o ? void 0 : null === (e = o.desktopSource) || void 0 === e ? void 0 : e.id) && (null != s.desktopSource.soundshareId && (0, ee.isWindows)() && A.pn(s.desktopSource.soundshareId), ev.setGoLiveSource(null, eD)), (null == s ? void 0 : s.cameraSource) != null && (s.cameraSource.videoDeviceGuid !== (null == o ? void 0 : null === (t = o.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || s.cameraSource.audioDeviceGuid !== (null == o ? void 0 : null === (n = o.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && ev.setGoLiveSource(null, eD), (eG || i) && (ek = (eG = i) ? td(eM, e6().videoDeviceId) : ep.Av, ev.setVideoInputDevice(ek)), a = o, null != o) {
let e = {
  resolution: o.quality.resolution,
  frameRate: o.quality.frameRate
};
if (null != o.desktopSource) {
  let {
    hdrCaptureMode: t
  } = B.Z.getCurrentConfig({
    location: 'f627ab_2'
  }, {
    autoTrackExposure: !1
  }), n = e6().videoHook;
  ev.setGoLiveSource({
    desktopDescription: {
      id: o.desktopSource.id,
      soundshareId: o.desktopSource.soundshareId,
      useVideoHook: n,
      useGraphicsCapture: tr(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: !0,
      allowScreenCaptureKit: ti(),
      videoHookStaleFrameTimeoutMs: 500,
      graphicsCaptureStaleFrameTimeoutMs: eA,
      hdrCaptureMode: t
    },
    quality: e
  }, eD);
}
null != o.cameraSource && ev.setGoLiveSource({
  cameraDescription: {
    videoDeviceGuid: o.cameraSource.videoDeviceGuid,
    audioDeviceGuid: o.cameraSource.audioDeviceGuid
  },
  quality: e
}, eD);
  }
}

function tt(e, t, n, r) {
  var i;
  let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
  null == e4[a] && (e4[a] = new Set());
  let o = null != t && !e4[a].has(t);
  o && e4[a].add(t), (null == t || o) && X.default.track(e_.rMx.SOUNDSHARE_FAILED, {
soundshare_failure_code: t,
soundshare_failure_reason: n,
soundshare_failure_will_retry: r,
...(0, M.Z)(e)
  });
}

function tn(e) {
  let t = e6(),
n = t.inputDeviceId;
  if (e.setEchoCancellation(eo.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)()) {
let n = t.noiseCancellation ? -150 : -100;
e.setSilenceThreshold(n);
  }
}

function tr() {
  return (0, ee.isWindows)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eE.nz);
}

function ti() {
  return (0, ee.isMac)() && ev.supports(ep.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eE.C7);
}

function ta() {
  var e;
  return (null === (e = es.Z.getChannel(eq)) || void 0 === e ? void 0 : e.type) !== e_.d4z.GUILD_STAGE_VOICE && G.Z.supportsSimulcast();
}
let to = new class {
  start() {
!this.started && (this.started = !0, ev.on(m.aB.Silence, this.handleSilence));
  }
  stop() {
this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), ev.removeListener(m.aB.Silence, this.handleSilence), g.Z.dispatch({
  type: 'AUDIO_INPUT_DETECTED',
  inputDetected: null
}));
  }
  update() {
let e = e6();
!eY && eu.Z.getState() === e_.hes.RTC_CONNECTED && e.mode === e_.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
  }
  reset() {
this.stop(), this.update();
  }
  constructor() {
eI(this, 'stateChangeTimeout', void 0), eI(this, 'noVoiceTimeout', 5000), eI(this, 'voiceTimeout', 1500), eI(this, 'started', !1), eI(this, 'handleSilence', e => {
  let t = !e;
  null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
    this.stateChangeTimeout = null, this.started && (g.Z.dispatch({
      type: 'AUDIO_INPUT_DETECTED',
      inputDetected: t
    }), e && (ej = !0));
  }, t ? this.voiceTimeout : this.noVoiceTimeout);
});
  }
}();

function ts(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
r = e6(t);
  return Object.assign(r, e), !__OVERLAY__ && n && I.K.set(eg, eO), r;
}

function tl() {
  !eC && ev.enable().then(() => g.Z.dispatch({
type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
enabled: !0,
unmute: !1
  }));
}

function tu(e) {
  return {
id: ep.w5,
index: 0,
name: e,
disabled: !0
  };
}

function tc(e, t) {
  if (0 === e.length) {
let e = tu(t);
return {
  [e.id]: e
};
  }
  return E()(e).map(e => ({
id: e.id,
index: e.index,
name: e.name,
disabled: !1
  })).keyBy('id').value();
}

function td(e, t) {
  var n;
  let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
  return null != r ? r.id : t;
}

function t_() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
r = null !== (e = Q.Z.settings.audioContextSettings) && void 0 !== e ? e : {
  user: {},
  stream: {}
};
  for (let e of Object.keys(r)) {
let i = e === eh.u0.USER ? ep.Yn.DEFAULT : ep.Yn.STREAM,
  a = i === ep.Yn.STREAM ? ep.Yh : ep.Qx,
  o = null !== (t = r[e]) && void 0 !== t ? t : {},
  {
    localMutes: s,
    localVolumes: l
  } = e6(i);
for (let [e, t] of Object.entries(o))
  null == (0, q.Ky)(i, e) && (t.muted ? s[e] = !0 : delete s[e], t.volume !== a ? l[e] = t.volume : delete l[e], ev.eachConnection(n => {
    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
  }, i));
if (n)
  for (let e of new Set([
      ...Object.keys(s),
      ...Object.keys(l)
    ]))
    null == o[e] && (delete s[e], delete l[e], ev.eachConnection(t => {
      t.setLocalVolume(e, a), t.setLocalMute(e, !1);
    }, i));
ts({
  localMutes: s,
  localVolumes: l
}, i);
  }
}

function tE(e) {
  if (null == r)
return eT.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'), {
  soundshareId: null,
  soundshareSession: ''
};
  {
let t = r.getExperimentalSoundshare() ? e : $.Z.getAudioPid(e),
  n = '';
return null != t && (n = $.Z.generateSessionFromPid(t)), {
  soundshareId: t,
  soundshareSession: n
};
  }
}

function tf(e, t) {
  (0, ee.isWindows)() && A.YT(e, {
soundshare_session: t
  }).then(t => {
null != t && !b.ZP.shouldContinueWithoutElevatedProcessForPID(e) && g.Z.wait(() => {
  g.Z.dispatch({
    type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
    errorMessage: t
  });
});
  });
}

function th() {
  let e = ep.Yn.DEFAULT,
{
  videoToggleStateMap: t
} = e6(e);
  for (let [e, n] of Object.entries(t))
n === e_.ZUi.AUTO_PROBING && delete t[e];
  ts({
videoToggleStateMap: t
  }, e, !1);
}

function tp(e) {
  let t = e6();
  X.default.track(e_.rMx.VOICE_PROCESSING, {
echo_cancellation: t.echoCancellation,
noise_cancellation: t.noiseCancellation,
noise_suppression: t.noiseSuppression,
automatic_gain_control: t.automaticGainControl,
location: e
  });
}

function tm() {
  let e = e6(),
t = e.inputDeviceId,
n = eo.Z.hasEchoCancellation(t) || e.echoCancellation,
r = eo.Z.hasNoiseSuppression(t) || e.noiseSuppression,
i = eo.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
a = e.noiseCancellation;
  ev.setLoopback(e1, {
echoCancellation: n,
noiseSuppression: r,
automaticGainControl: i,
noiseCancellation: a
  });
}

function tI() {
  return ez || !1;
}
async function tT() {
  try {
await en.ZP.ensureModule('discord_krisp'), en.ZP.requireModule('discord_krisp'), ez = !0, r.emitChange();
  } catch (t) {
eT.warn('Failed to load Krisp module: '.concat(t.message)), et.Z.captureException(t);
let e = ep.H3.INITIALIZED;
if (t.message.includes(': ')) {
  let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
  e = isNaN(n) || 0 === n ? ep.H3.INITIALIZED : n;
}
X.default.track(e_.rMx.VOICE_PROCESSING, {
  noise_canceller_error: e
}), ts({
  noiseCancellation: !1
});
  } finally {
eK = !1;
  }
}

function tg(e) {
  let {
section: t
  } = e;
  return t === e_.oAB.VOICE && tl(), !1;
}
class tS extends(l = p.ZP.Store) {
  initialize() {
ev.on(m.aB.Connection, e => {
  var t, n;
  let {
    maxSyncDelayOverride: i
  } = V.Z.getCurrentConfig({
    location: 'f627ab_3'
  }, {
    autoTrackExposure: !1
  });
  i > 0 && ev.setMaxSyncDelayOverride(i), e7(e), e9(e), tn(e);
  let o = e6();
  e.setAttenuation(o.attenuation, o.attenuateWhileSpeakingSelf, o.attenuateWhileSpeakingOthers), e.setQoS(o.qos), e.setExperimentalEncoders(o.experimentalEncoders), e.setHardwareH264(null === (t = o.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = o.openH264) || void 0 === n || n);
  let {
    useExperimentalRateControl: s
  } = Y.Z.getCurrentConfig({
    location: 'f627ab_4'
  }, {
    autoTrackExposure: !1
  });
  s && e.setExperimentFlag(ep.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
  let l = eu.Z.getGuildId(),
    {
      muteBeforeProcessing: u,
      pttBeforeProcessing: c,
      skipEncode: d
    } = (null != l ? x.Z : w.Z).getCurrentConfig({
      location: 'setupMediaEngine',
      ...null != l && {
        guildId: l
      }
    }, {
      autoTrackExposure: !0
    });
  u && e.setExperimentFlag(ep.V8.MUTE_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(ep.V8.PTT_BEFORE_PROCESSING, !0), d && e.setExperimentFlag(ep.V8.SKIP_ENCODE, !0);
  let {
    resetOnErrors: _,
    fallbackOnErrors: E,
    fallbackOnConsecutiveErrors: f
  } = Z.Z.getCurrentConfig({
    location: 'setupMediaEngine'
  }, {
    autoTrackExposure: !0
  });
  _ && e.setExperimentFlag(ep.V8.RESET_DECODER_ON_ERRORS, !0), E && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), f && e.setExperimentFlag(ep.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
  e.context === ep.Yn.STREAM && ta() && e.setExperimentFlag(ep.V8.GOLIVE_SIMULCAST, !0), (0, ee.isWindows)() ? (null == e3 ? void 0 : e3.startsWith('NVIDIA')) ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : (null == e3 ? void 0 : e3.startsWith('AMD')) && U.Z.getCurrentConfig({
    location: 'setupMediaEngine'
  }, {
    autoTrackExposure: !0
  }).signalAV1Support ? e.setExperimentFlag(ep.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0) : ((0, ee.isMac)() || (0, ee.isLinux)()) && e.setExperimentFlag(ep.V8.SIGNAL_AV1_DECODE, !0), (0, ee.isWindows)() && e.setExperimentFlag(ep.V8.SIGNAL_AV1_HARDWARE_DECODE, !0);
  let {
    allowSettingFullbandAndroid: h
  } = F.Z.getCurrentConfig({
    location: 'f627ab_14'
  }, {
    autoTrackExposure: !0
  });
  if (h && ev.setHasFullbandPerformance((0, y.b)()), e.setRemoteAudioHistory(0), (0, R.Z)(r)) {
    let t = O.Z.getSettings();
    e.setExperimentFlag(ep.V8.STREAMER_CLIP, t.clipsEnabled);
    let {
      enableViewerClipping: n
    } = j.Z.getCurrentConfig({
      location: 'f627ab_15'
    }, {
      autoTrackExposure: !1
    });
    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(ep.ux);
    let {
      allowQualityDecoupling: r
    } = v.Z.getCurrentConfig({
      location: 'MediaEngineStore_setupMediaEngine'
    }, {
      autoTrackExposure: !0
    });
    e.setQualityDecoupling(r);
  }
  for (let t of (o = e6(e.context), e.setPostponeDecodeLevel(100), Object.keys(o.localMutes)))
    t !== ei.default.getId() && e.setLocalMute(t, o.localMutes[t]);
  for (let t of Object.keys(o.localVolumes))
    t !== ei.default.getId() && e.setLocalVolume(t, o.localVolumes[t]);
  for (let t of Object.keys(o.localPans)) {
    let n = o.localPans[t];
    e.setLocalPan(t, n.left, n.right);
  }
  for (let t of Object.keys(o.disabledLocalVideos))
    e.setLocalVideoDisabled(t, o.disabledLocalVideos[t]);
  e.on(m.Sh.Speaking, (t, n) => {
    g.Z.dispatch({
      type: 'SPEAKING',
      context: e.context,
      userId: t,
      speakingFlags: n
    });
  }), e.context === ep.Yn.DEFAULT && (eF = !1, e.on(m.Sh.SpeakingWhileMuted, () => {
    eF = !0, r.emitChange();
  })), e.on(m.Sh.DesktopSourceEnd, () => {
    g.Z.dispatch({
      type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
      settings: {
        context: e.context
      }
    });
  }), e.on(m.Sh.SoundshareAttached, () => {
    (null == a ? void 0 : a.desktopSource) != null && X.default.track(e_.rMx.SOUNDSHARE_ATTACHED, (0, M.Z)(null == a ? void 0 : a.desktopSource));
  }), e.on(m.Sh.SoundshareFailed, e => {
    let {
      failureCode: t,
      failureReason: n,
      willRetry: r
    } = e;
    tt(null == a ? void 0 : a.desktopSource, t, n, r);
  }), e.on(m.Sh.SoundshareSpeaking, () => {
    (null == a ? void 0 : a.desktopSource) != null && (X.default.track(e_.rMx.SOUNDSHARE_TRANSMITTING, (0, M.Z)(null == a ? void 0 : a.desktopSource)), null != el.Z.getHookError(e_.K3D.SOUND) && g.Z.wait(() => g.Z.dispatch({
      type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING'
    })));
  });
  let p = new T.V7();
  e.on(m.Sh.SoundshareTrace, e => {
    switch (e.type) {
      case 'soundshare_attach_requested':
        p.start(e5, () => {
          g.Z.dispatch({
            type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
            errorMessage: 'Sound Hook Failed'
          });
        });
        break;
      case 'soundshare_recv_failed':
        let t = e.reason,
          n = e.code,
          r = e.retry;
        (null == a ? void 0 : a.desktopSource) != null && (tt(null == a ? void 0 : a.desktopSource, n, t, r), !r && (p.stop(), g.Z.wait(() => g.Z.dispatch({
          type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
          errorMessage: t,
          errorCode: n
        }))));
        break;
      case 'soundshare_state_transition':
        4 === e.newState && (p.stop(), g.Z.wait(() => g.Z.dispatch({
          type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING'
        })));
    }
  }), e.on(m.Sh.InteractionRequired, e => {
    g.Z.dispatch({
      type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
      required: e
    });
  }), e.on(m.Sh.VideoHookInitialize, (e, t, n, r, i, o) => {
    (null == a ? void 0 : a.desktopSource) != null && X.default.track(e_.rMx.VIDEOHOOK_INITIALIZED, {
      backend: e,
      format: t,
      framebuffer_format: n,
      sample_count: r,
      success: i,
      reinitialization: o,
      ...(0, M.Z)(null == a ? void 0 : a.desktopSource)
    });
  }), e.on(m.Sh.NoiseCancellationError, e => {
    eT.warn('noisecancellererror event: '.concat(e)), eQ = !0, X.default.track(e_.rMx.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), g.Z.dispatch({
      type: 'AUDIO_SET_NOISE_SUPPRESSION',
      enabled: !0
    }), g.Z.dispatch({
      type: 'AUDIO_SET_NOISE_CANCELLATION',
      enabled: !1
    }), g.Z.dispatch({
      type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
      code: e
    });
  }), e.on(m.Sh.VoiceActivityDetectorError, e => {
    eT.warn('voiceactivitydetectorerror event: '.concat(e)), X.default.track(e_.rMx.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), g.Z.dispatch({
      type: 'AUDIO_SET_MODE',
      context: ep.Yn.DEFAULT,
      mode: e_.pM4.VOICE_ACTIVITY,
      options: {
        ...e6(ep.Yn.DEFAULT).modeOptions,
        vadUseKrisp: !1
      }
    }), g.Z.dispatch({
      type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
      code: e
    });
  }), e.on(m.Sh.VideoState, t => {
    g.Z.dispatch({
      type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
      videoState: t,
      context: e.context
    });
  }), e.on(m.Sh.Destroy, () => {
    p.stop();
  }), e.setBitRate(ea.Z.bitrate), e.applyVideoQualityMode(ed.Z.mode);
}), ev.on(m.aB.DeviceChange, (e, t, n) => {
  g.Z.dispatch({
    type: 'MEDIA_ENGINE_DEVICES',
    inputDevices: e,
    outputDevices: t,
    videoDevices: n
  });
}), ev.on(m.aB.VolumeChange, (e, t) => {
  g.Z.dispatch({
    type: 'AUDIO_VOLUME_CHANGE',
    inputVolume: e,
    outputVolume: t
  });
}), ev.on(m.aB.DesktopSourceEnd, () => {
  g.Z.dispatch({
    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
    settings: null
  });
}), ev.on(m.aB.AudioPermission, e => {
  e$ = !0, g.Z.dispatch({
    type: 'MEDIA_ENGINE_PERMISSION',
    kind: 'audio',
    granted: e
  });
}), ev.on(m.aB.VideoPermission, e => {
  g.Z.dispatch({
    type: 'MEDIA_ENGINE_PERMISSION',
    kind: 'video',
    granted: e
  });
}), ev.on(m.aB.WatchdogTimeout, async () => {
  let e;
  try {
    await $.Z.submitLiveCrashReport({
      message: {
        message: 'Voice Watchdog Timeout'
      }
    });
  } catch (t) {
    'number' == typeof t.status && (e = t.status);
  }
  eT.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), X.default.track(e_.rMx.VOICE_WATCHDOG_TIMEOUT, {
    minidump_submission_error: e
  });
}), ev.on(m.aB.VideoInputInitialized, e => {
  X.default.track(e_.rMx.VIDEO_INPUT_INITIALIZED, {
    device_name: e.description.name,
    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * J.Z.Millis.SECOND),
    timed_out: e.initializationTimerExpired,
    activity: e.entropy
  });
}), ev.on(m.aB.ClipsRecordingRestartNeeded, () => {
  g.Z.dispatch({
    type: 'CLIPS_RESTART'
  });
}), ev.on(m.aB.ClipsInitFailure, (e, t) => {
  g.Z.wait(() => {
    g.Z.dispatch({
      type: 'CLIPS_INIT_FAILURE',
      errMsg: e,
      applicationName: t
    });
  });
}), ev.on(m.aB.ClipsRecordingEnded, (e, t) => {
  var n, r;
  (null == o ? void 0 : null === (n = o.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), o = null);
}), to.reset(), (0, ec.q)().then(e => {
  null != e && (e3 = e.gpu_brand);
}), ! function() {
  var e;
  let t = I.K.get('audio');
  null != t && (I.K.set(eg, {
      [ep.Yn.DEFAULT]: t
    }), I.K.remove('audio')), eO = null !== (e = I.K.get(eg)) && void 0 !== e ? e : {}, E().each(eO, e => {
      if (E().defaultsDeep(e, eN()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, er.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
        var t;
        e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
      }
      (0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
    }),
    function() {
      var e, t, n;
      let r = e6();
      ev.setAudioInputDevice(r.inputDeviceId), ev.setAudioOutputDevice(r.outputDeviceId), te(), ev.setInputVolume(r.inputVolume), ev.setOutputVolume(r.outputVolume), ev.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), ev.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), ev.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), ev.setAecDump(r.aecDumpEnabled);
    }();
}(), ((0, ee.isWindows)() || (0, ee.isLinux)() || (0, ee.isMac)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, '>=21.0.0')) && !__OVERLAY__ && !eK && !ez ? (eK = !0, tT()) : (0, ee.isWeb)() && ev.supports(ep.AN.NOISE_CANCELLATION) ? (ez = !0, r.emitChange()) : (0, ee.isWeb)() && ts({
  noiseCancellation: !1
}), th(), e2 = {
  [ep.AN.VIDEO]: ev.supports(ep.AN.VIDEO),
  [ep.AN.DESKTOP_CAPTURE]: ev.supports(ep.AN.DESKTOP_CAPTURE),
  [ep.AN.HYBRID_VIDEO]: ev.supports(ep.AN.HYBRID_VIDEO)
}, this.waitFor(ei.default, eo.Z, es.Z, el.Z, eu.Z, b.ZP, K.Z.storage, Q.Z, D.Z, O.Z);
  }
  supports(e) {
return ev.supports(e);
  }
  supportsInApp(e) {
return e2[e] || ev.supports(e);
  }
  isSupported() {
return ev.supported();
  }
  isExperimentalEncodersSupported() {
return ev.supports(ep.AN.EXPERIMENTAL_ENCODERS);
  }
  isNoiseSuppressionSupported() {
return ev.supports(ep.AN.NOISE_SUPPRESSION);
  }
  isNoiseCancellationSupported() {
return ez || !1;
  }
  isNoiseCancellationError() {
return eQ;
  }
  isAutomaticGainControlSupported() {
return ev.supports(ep.AN.AUTOMATIC_GAIN_CONTROL);
  }
  isAdvancedVoiceActivitySupported() {
return ez || !1;
  }
  isAecDumpSupported() {
return ev.supports(ep.AN.AEC_DUMP);
  }
  isSimulcastSupported() {
return ev.supports(ep.AN.VIDEO) && ev.supports(ep.AN.SIMULCAST);
  }
  getAecDump() {
return e6().aecDumpEnabled;
  }
  getMediaEngine() {
return ev;
  }
  getVideoComponent() {
return ev.supports(ep.AN.DIRECT_VIDEO) && ev.setUseDirectVideo(!0), ev.Video;
  }
  getCameraComponent() {
return ev.supports(ep.AN.DIRECT_VIDEO) && ev.setUseDirectVideo(!0), ev.Camera;
  }
  isEnabled() {
return eC;
  }
  isMute() {
return this.isSelfMute() || eP;
  }
  isDeaf() {
return this.isSelfDeaf() || ex;
  }
  hasContext(e) {
return null != eO[e];
  }
  isSelfMutedTemporarily() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
return e === ep.Yn.DEFAULT && eU;
  }
  isSelfMute() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
return !this.isEnabled() || e6(e).mute || !K.Z.didHavePermission(ef.Eu.AUDIO) || this.isSelfDeaf(e) || e === ep.Yn.DEFAULT && ew;
  }
  shouldSkipMuteUnmuteSound() {
let {
  airpodsMuteSupported: e
} = P.Z.getCurrentConfig({
  location: 'shouldSkipMuteUnmuteSound'
}, {
  autoTrackExposure: !0
});
return !!e && eB;
  }
  notifyMuteUnmuteSoundWasSkipped() {
eB = !1;
  }
  isHardwareMute() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.Z.isHardwareMute(this.getInputDeviceId());
  }
  isSelfDeaf() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
return !this.isSupported() || e6(e).deaf;
  }
  isVideoEnabled() {
return eG && eH;
  }
  isVideoAvailable() {
return Object.values(eM).some(e => {
  let {
    disabled: t
  } = e;
  return !t;
});
  }
  isScreenSharing() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
return eD === e && null != a;
  }
  isSoundSharing() {
var e;
let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.STREAM;
return eD === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
  }
  isLocalMute(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
return e !== ei.default.getId() && (e6(t).localMutes[e] || !1);
  }
  supportsDisableLocalVideo() {
return ev.supports(ep.AN.DISABLE_VIDEO);
  }
  isLocalVideoDisabled(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
return null !== (t = e6(n).disabledLocalVideos[e]) && void 0 !== t && t;
  }
  getVideoToggleState(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
return null !== (t = e6(n).videoToggleStateMap[e]) && void 0 !== t ? t : e_.ZUi.NONE;
  }
  isLocalVideoAutoDisabled(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT;
return t === ep.Yn.DEFAULT && eJ.has(e);
  }
  isAnyLocalVideoAutoDisabled() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
return e === ep.Yn.DEFAULT && eJ.size > 0;
  }
  isMediaFilterSettingLoading() {
return eX;
  }
  isNativeAudioPermissionReady() {
return e$;
  }
  getGoLiveSource() {
return a;
  }
  getGoLiveContext() {
return eD;
  }
  getLocalPan(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
  n = e6(t).localPans[e];
return null != n ? n : eS;
  }
  getLocalVolume(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ep.Yn.DEFAULT,
  n = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
  r = e6(t).localVolumes[e];
return null != r ? r : n;
  }
  getInputVolume() {
return e6().inputVolume;
  }
  getOutputVolume() {
return e6().outputVolume;
  }
  getMode() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
return e6(e).mode;
  }
  getModeOptions() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
return e6(e).modeOptions;
  }
  getShortcuts() {
let e = {};
return E().each(eO, (t, n) => {
  let {
    mode: r,
    modeOptions: {
      shortcut: i
    }
  } = t;
  r === e_.pM4.PUSH_TO_TALK && eR.has(n) && (e[n] = i);
}), e;
  }
  getInputDeviceId() {
return td(eL, e6().inputDeviceId);
  }
  getOutputDeviceId() {
return td(eb, e6().outputDeviceId);
  }
  getVideoDeviceId() {
return td(eM, e6().videoDeviceId);
  }
  getInputDevices() {
return eL;
  }
  getOutputDevices() {
return eb;
  }
  getVideoDevices() {
return eM;
  }
  getEchoCancellation() {
let e = e6();
return eo.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
  }
  getH265Enabled() {
return e6().h265Enabled;
  }
  getLoopback() {
return ev.getLoopback();
  }
  getNoiseSuppression() {
let e = e6();
return eo.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
  }
  getAutomaticGainControl() {
let e = e6();
return eo.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
  }
  getNoiseCancellation() {
return e6().noiseCancellation;
  }
  getExperimentalEncoders() {
return e6().experimentalEncoders;
  }
  getHardwareEncoding() {
var e;
return null === (e = e6().hardwareEncoding) || void 0 === e || e;
  }
  getEnableSilenceWarning() {
return e6().silenceWarning;
  }
  getDebugLogging() {
return ev.getDebugLogging();
  }
  getQoS() {
return e6().qos;
  }
  getAttenuation() {
return e6().attenuation;
  }
  getAttenuateWhileSpeakingSelf() {
return e6().attenuateWhileSpeakingSelf;
  }
  getAttenuateWhileSpeakingOthers() {
return e6().attenuateWhileSpeakingOthers;
  }
  getAudioSubsystem() {
return ev.getAudioSubsystem();
  }
  getSettings() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT;
return e6(e);
  }
  getState() {
return {
  settingsByContext: eO,
  inputDevices: eL,
  outputDevices: eb,
  appSupported: e2,
  krispModuleLoaded: ez,
  goLiveSource: a,
  goLiveContext: eD
};
  }
  getInputDetected() {
return eZ;
  }
  getNoInputDetectedNotice() {
return ej;
  }
  getPacketDelay() {
return ee.isPlatformEmbedded || this.getMode() !== e_.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
  }
  setCanHavePriority(e, t) {
ev.eachConnection(n => n.setCanHavePriority(e, t));
  }
  isInteractionRequired() {
return ey;
  }
  getVideoHook() {
return e6().videoHook;
  }
  supportsVideoHook() {
return ev.supports(ep.AN.VIDEO_HOOK);
  }
  getExperimentalSoundshare() {
let e = e6().experimentalSoundshare2;
return this.supportsExperimentalSoundshare() && (null == e || e);
  }
  supportsExperimentalSoundshare() {
return ev.supports(ep.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eE.I9);
  }
  getOpenH264() {
return e6().openH264;
  }
  getEverSpeakingWhileMuted() {
return eF;
  }
  supportsScreenSoundshare() {
return (0, ee.isMac)() && ev.supports(ep.AN.SOUNDSHARE) && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eE.yG) && ti() || (0, ee.isWindows)() && ev.supports(ep.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare();
  }
  getVideoStreamParameters() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ep.Yn.DEFAULT,
  t = this.supports(ep.AN.VIDEO) ? [{
    rid: '100',
    type: e === ep.Yn.DEFAULT ? ep.Tr.VIDEO : ep.Tr.SCREEN,
    quality: 100
  }] : [];
return this.isSimulcastSupported() && (e === ep.Yn.DEFAULT || ta()) && t.push({
  rid: '50',
  type: e === ep.Yn.DEFAULT ? ep.Tr.VIDEO : ep.Tr.SCREEN,
  quality: 50
}), t;
  }
  getSupportedSecureFramesProtocolVersion(e) {
var t;
let n = ev.getSupportedSecureFramesProtocolVersion(),
  r = H.m.getCurrentConfig({
    location: 'MediaEngineStore'
  }),
  i = null != e ? H.N.getCurrentConfig({
    guildId: e,
    location: 'MediaEngineStore'
  }) : null,
  a = r.canSupportSecureFrames || (null == i ? void 0 : i.canSupportSecureFrames),
  o = r.canSupportMls || (null == i ? void 0 : i.canSupportMls),
  s = Math.max(r.protocolVersionFloor, null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0);
return a && n % 100 >= s ? o ? n : n % 100 : 0;
  }
  hasClipsSource() {
return null != o;
  }
}
eI(tS, 'displayName', 'MediaEngineStore'), r = new tS(g.Z, {
  VOICE_CHANNEL_SELECT: function(e) {
let {
  guildId: t,
  channelId: n,
  currentVoiceChannelId: r,
  video: i
} = e;
if (r !== n && te(i, null), null != t || null == n) {
  eW = !1;
  return;
}
if (eW)
  return;
eW = !0;
let a = e6();
(a.mute || a.deaf) && (ts({
  deaf: !1,
  mute: !1
}), ev.eachConnection(e9));
  },
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: t
} = e;
return t.reduce((e, t) => i === t.sessionId ? (eP = t.mute || t.suppress, ex = t.deaf, ev.eachConnection(e9), te(!(null != t.guildId && null != t.channelId && null != eq && eq !== t.channelId) && eG), eq = t.channelId, !0) : (!__OVERLAY__ && t.userId === ei.default.getId() && null == eu.Z.getChannelId() && te(!1, null), e), !1);
  },
  CONNECTION_OPEN: function(e) {
i = e.sessionId, eP = !1, ex = !1, (0, z.R)() && t_();
  },
  CONNECTION_CLOSED: function() {
i = null;
  },
  RTC_CONNECTION_STATE: function(e) {
switch (e.state) {
  case e_.hes.CONNECTING:
    tl();
    break;
  case e_.hes.RTC_CONNECTING:
    eY = !1, ej = !1;
    break;
  case e_.hes.RTC_CONNECTED:
    te();
    break;
  case e_.hes.DISCONNECTED:
    (function() {
      if (0 === eJ.size)
        return;
      let e = ep.Yn.DEFAULT,
        {
          disabledLocalVideos: t
        } = e6(e);
      eJ.forEach(n => {
        d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], ev.eachConnection(e => e.setLocalVideoDisabled(n, !1), e);
      }), eJ.clear(), ts({
        disabledLocalVideos: t
      }, e, !1);
    }(), th());
}
to.update();
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
let {
  mute: t
} = e;
eU = t, ev.eachConnection(e9);
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
let {
  context: t,
  skipMuteUnmuteSoundEffect: n
} = e, {
  mute: r,
  deaf: i
} = e6(t);
if (t === ep.Yn.DEFAULT && (K.Z.requestPermission(ef.Eu.AUDIO), ew))
  return !1;
!(r = !i && !r) && (i = !1), n && (eB = !0), ts({
  mute: r,
  deaf: i
}, t), ev.eachConnection(e9);
  },
  AUDIO_SET_SELF_MUTE: function(e) {
let {
  context: t,
  mute: n
} = e;
ts({
  mute: n
}, t), ev.eachConnection(e9);
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
let {
  context: t
} = e;
ts({
  deaf: !e6(t).deaf
}, t), ev.eachConnection(e9);
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
let {
  context: t,
  userId: n
} = e;
if (n === ei.default.getId())
  return;
let {
  localMutes: r
} = e6(t);
r[n] ? delete r[n] : r[n] = !0, ts({
  localMutes: r
}, t), ev.eachConnection(e => e.setLocalMute(n, r[n] || !1), t);
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
var t, n, r, i, a, o, s;
let {
  context: l,
  userId: u,
  videoToggleState: c,
  persist: _,
  isAutomatic: E
} = e;
d()(!(_ && E), 'These are not allowed to both be true.');
let f = c === e_.ZUi.DISABLED,
  {
    disabledLocalVideos: h
  } = e6(l),
  p = null !== (t = h[u]) && void 0 !== t && t,
  m = eJ.has(u),
  I = c === e_.ZUi.AUTO_ENABLED || c === e_.ZUi.MANUAL_ENABLED;
eT.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(m, ', isVideoShown=').concat(I)), d()(!(m && !p), 'If you are auto-disabled, then you are also disabled.');
let T = f !== p,
  g = l === ep.Yn.DEFAULT,
  S = E && T && g,
  A = _ && T && g;
eT.info('changed='.concat(T, ' isDefaultContext=').concat(g, ' isUpdateCausedByVideoHealthManager=').concat(S, ' isManualToggleByUser=').concat(A));
let {
  videoToggleStateMap: N
} = e6(l);
if (N[u] === e_.ZUi.AUTO_PROBING && c === e_.ZUi.AUTO_ENABLED && (0, W.Z)(u, f ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, I), N[u] = c, ts({
    videoToggleStateMap: N
  }, l, _), c === e_.ZUi.AUTO_PROBING ? null === (n = eu.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = eu.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !e0 && (eT.info('isAutoDisableAllowed='.concat(e0, ' - disabling VideoHealthManager')), null === (a = eu.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), S) {
  if (!f && !m || f && !e0)
    return;
  (0, W.Z)(u, f ? ep.fC.AUTO_DISABLE : ep.fC.AUTO_ENABLE, I), f ? eJ.add(u) : eJ.delete(u);
} else
  A && (m && !f ? (eT.info('disallowing auto-disable for this session because of manual override by user'), e0 = !1, null === (s = eu.Z.getRTCConnection()) || void 0 === s || null === (o = s.getVideoHealthManager()) || void 0 === o || o.disable(), (0, W.Z)(u, ep.fC.MANUAL_REENABLE, I)) : (0, W.Z)(u, f ? ep.fC.MANUAL_DISABLE : ep.fC.MANUAL_ENABLE, I));
g && !f && eJ.delete(u), f ? h[u] = !0 : delete h[u], ts({
  disabledLocalVideos: h
}, l, _), ev.eachConnection(e => {
  var t;
  return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
}, l);
  },
  AUDIO_SET_LOCAL_VOLUME: function(e) {
let {
  context: t,
  userId: n,
  volume: r
} = e;
if (n === ei.default.getId())
  return;
let i = t === ep.Yn.STREAM ? ep.Yh : ep.Qx,
  {
    localVolumes: a
  } = e6(t);
r === i ? delete a[n] : a[n] = r, ts({
  localVolumes: a
}, t), ev.eachConnection(e => e.setLocalVolume(n, r), t);
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
let {
  context: t,
  userId: n,
  left: r,
  right: i
} = e, {
  localPans: a
} = e6(t);
a[n] = {
  left: r,
  right: i
}, ts({
  localPans: a
}, t), ev.eachConnection(e => e.setLocalPan(n, r, i), t);
  },
  AUDIO_SET_MODE: function(e) {
let {
  context: t,
  mode: n,
  options: r
} = e;
ts({
  mode: n,
  modeOptions: r
}, t), ev.eachConnection(e7), to.update();
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
let {
  volume: t
} = e;
ts({
  inputVolume: e8(t)
}), ev.setInputVolume(t);
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
let {
  volume: t
} = e;
ts({
  outputVolume: t
}), ev.setOutputVolume(t);
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
let {
  id: t
} = e;
ts({
  inputDeviceId: t = td(eL, t)
}), ev.setAudioInputDevice(t);
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
let {
  id: t
} = e;
ts({
  outputDeviceId: t = td(eb, t)
}), ev.setAudioOutputDevice(t);
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
let t = ts({
  echoCancellation: e.enabled
});
ev.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tm(), tp(e.location);
  },
  AUDIO_SET_LOOPBACK: function(e) {
let {
  enabled: t
} = e;
return e1 = t, tm();
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
let t = ts({
  noiseSuppression: e.enabled
});
ev.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tm(), tp(e.location);
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
let t = ts({
  automaticGainControl: e.enabled
});
ev.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tm(), tp(e.location);
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
let t = ts({
  noiseCancellation: e.enabled
});
ev.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tm(), tp(e.location);
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
ts({
  silenceWarning: e.enabled
}), to.update();
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
ev.setDebugLogging(e.enabled);
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
ts({
  videoHook: e.enabled
});
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
ts({
  experimentalSoundshare2: e.enabled
});
  },
  AUDIO_SET_ATTENUATION: function(e) {
let {
  attenuation: t,
  attenuateWhileSpeakingSelf: n,
  attenuateWhileSpeakingOthers: r
} = e, i = ts({
  attenuation: t,
  attenuateWhileSpeakingSelf: n,
  attenuateWhileSpeakingOthers: r
});
ev.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
  },
  AUDIO_SET_QOS: function(e) {
let {
  enabled: t
} = e;
ts({
  qos: t
}), ev.eachConnection(e => e.setQoS(t));
  },
  MEDIA_ENGINE_DEVICES: function(e) {
let {
  inputDevices: t,
  outputDevices: n,
  videoDevices: r
} = e;
! function(e) {
  let t = eL;
  if (eL = tc(e, em.Z.Messages.NO_INPUT_DEVICES), !E().isEqual(eL, t)) {
    let e = e6(),
      t = td(eL, e.inputDeviceId);
    ev.setAudioInputDevice(t);
  }
}(t), ! function(e) {
  let t = eb;
  if (eb = tc(e, em.Z.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eb, t)) {
    let e = e6(),
      t = td(eb, e.outputDeviceId);
    ev.setAudioOutputDevice(t);
  }
}(n), ! function(e) {
  eH = e.length > 0;
  let t = eM;
  if (eM = tc(e, em.Z.Messages.NO_VIDEO_DEVICES), eG && !E().isEqual(eM, t)) {
    var n;
    let e = void 0 !== eM[ek],
      r = ek === ep.w5 && (null === (n = t[ep.w5]) || void 0 === n ? void 0 : n.disabled);
    te(e || r);
  }
}(r);
  },
  AUDIO_VOLUME_CHANGE: function(e) {
let {
  inputVolume: t,
  outputVolume: n
} = e;
ts({
  inputVolume: e8(t),
  outputVolume: n
});
  },
  AUDIO_RESET: function() {
I.K.remove(eg), location.reload();
  },
  AUDIO_INPUT_DETECTED: function(e) {
let {
  inputDetected: t
} = e;
eZ = t, !eY && eZ && (eY = !0, to.update());
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
ev.setAudioSubsystem(e.subsystem);
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
eC = e.enabled, e.unmute && ts({
  mute: !1,
  deaf: !1
}), ev.eachConnection(e9);
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
let {
  enabled: t
} = e;
K.Z.requestPermission(ef.Eu.CAMERA), te(t);
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
let {
  kind: t,
  granted: n
} = e;
if (!n)
  switch (t) {
    case 'audio':
      eC = !1, ev.eachConnection(e9);
      break;
    case 'video':
      te(!1);
  }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
var t, n, r, i;
let {
  settings: o
} = e;
if ((null == o ? void 0 : o.desktopSettings) != null) {
  let e = null,
    r = null,
    {
      sourceId: i,
      sound: s
    } = o.desktopSettings,
    l = null !== (t = o.context) && void 0 !== t ? t : ep.Yn.DEFAULT,
    u = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
      resolution: 720,
      frameRate: 30
    },
    c = $.Z.getPidFromDesktopSource(i);
  ee.isPlatformEmbedded && !0 === s && ({
    soundshareId: e,
    soundshareSession: r
  } = tE(c), null != e && tf(e, r)), ! function(e) {
    if (e !== eD)
      null != a && ev.setGoLiveSource(null, eD), eD = e;
  }(l), te(l === ep.Yn.STREAM && eG, {
    desktopSource: {
      id: i,
      sourcePid: c,
      soundshareId: e,
      soundshareSession: r
    },
    quality: {
      resolution: u.resolution,
      frameRate: u.frameRate
    }
  });
} else if ((null == o ? void 0 : o.cameraSettings) != null) {
  let e = null !== (r = o.context) && void 0 !== r ? r : ep.Yn.DEFAULT,
    {
      videoDeviceGuid: t,
      audioDeviceGuid: n
    } = o.cameraSettings,
    a = e === ep.Yn.STREAM && eG,
    s = null !== (i = o.qualityOptions) && void 0 !== i ? i : {
      resolution: 720,
      frameRate: 30
    };
  te(a, {
    cameraSource: {
      videoDeviceGuid: t,
      audioDeviceGuid: n
    },
    quality: {
      resolution: s.resolution,
      frameRate: s.frameRate
    }
  });
} else
  te(eG, null);
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
let {
  id: t
} = e;
ts({
  videoDeviceId: t = td(eM, t)
}), te();
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
let t = ts({
  experimentalEncoders: e.enabled
});
ev.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders));
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
return ey !== e.required && (ey = e.required, !e.required && ev.interact(), !0);
  },
  USER_SETTINGS_MODAL_INIT: tg,
  USER_SETTINGS_MODAL_SET_SECTION: tg,
  CERTIFIED_DEVICES_SET: function() {
return ev.eachConnection(tn), !1;
  },
  RPC_APP_CONNECTED: function(e) {
let {
  application: t
} = e;
eR.add(t.id);
  },
  RPC_APP_DISCONNECTED: function(e) {
let {
  application: t
} = e;
eR.delete(t.id);
  },
  OVERLAY_INITIALIZE: function(e) {
let {
  mediaEngineState: t
} = e;
eO = t.settingsByContext, eL = t.inputDevices, eb = t.outputDevices, e2 = t.appSupported, ez = t.krispModuleLoaded, eD = t.goLiveContext;
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
let {
  enabled: t
} = e, n = ts({
  openH264: t
});
ev.setH264Enabled(n.hardwareEncoding || n.openH264), ev.eachConnection(e => {
  var t;
  return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
});
  },
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: function(e) {
var t, n;
let {
  enabled: r
} = e, i = ts({
  hardwareEncoding: r
});
ev.eachConnection(e => {
  var t;
  return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
}), ev.setH264Enabled(i.hardwareEncoding || i.openH264), ev.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t), ev.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
  },
  APP_STATE_UPDATE: function(e) {
let {
  state: t
} = e, n = L.Z.isEnabled();
if (t === e_.$7l.BACKGROUND && eG && !n)
  eV = !0, te(!1);
else {
  if (t !== e_.$7l.ACTIVE || !eV)
    return !1;
  eV = !1, te(!0);
}
return !0;
  },
  SET_CHANNEL_BITRATE: function(e) {
ev.eachConnection(t => t.setBitRate(e.bitrate));
  },
  SET_VAD_PERMISSION: function(e) {
let {
  hasPermission: t
} = e, n = !t;
if (n === ew)
  return !1;
ew = n, ev.eachConnection(e9);
  },
  SET_NATIVE_PERMISSION: function(e) {
let {
  state: t,
  permissionType: n
} = e, r = t === ef.PQ.ACCEPTED;
switch (n) {
  case ef.Eu.AUDIO:
    e$ = !0, ev.eachConnection(e9);
    break;
  case ef.Eu.CAMERA:
    !r && eG && te(!1);
    break;
  default:
    return !1;
}
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
ev.eachConnection(t => t.applyVideoQualityMode(e.mode));
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
let {
  enabled: t
} = e, n = ts({
  aecDumpEnabled: t
});
ev.setAecDump(n.aecDumpEnabled);
  },
  CHANNEL_DELETE: function() {
if (!eG && null == a || null != eu.Z.getRTCConnectionId())
  return !1;
te(!1, null);
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
return !!eQ && (eQ = !1, !0);
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
let {
  settings: t
} = e;
ev.applyMediaFilterSettings(t).finally(() => {
  eX = !1, r.emitChange();
});
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
eX = !0;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
eX = !1;
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
let {
  settings: {
    type: t
  },
  local: n,
  wasSaved: r
} = e;
if (!(0, z.R)() || t !== eh.yP.PRELOADED_USER_SETTINGS || n || null != r)
  return !1;
t_(!0);
  },
  CLIPS_INIT: function(e) {
let {
  sourceId: t,
  applicationName: n,
  quality: i
} = e, {
  enableDecoupledGameClipping: a
} = k.Z.getCurrentConfig({
  location: 'handleClipsInit'
}, {
  autoTrackExposure: !0
}), s = O.Z.getSettings().decoupledClipsEnabled;
if (!a || !s || null == S.Z)
  return;
let l = null,
  u = null,
  c = $.Z.getPidFromDesktopSource(t);
({
  soundshareId: l,
  soundshareSession: u
} = tE(c));
let d = {
  desktopSource: {
    id: t,
    sourcePid: c,
    soundshareId: l,
    soundshareSession: u
  },
  quality: i
};
null != o && o.desktopSource.id !== d.desktopSource.id && (ev.setClipsSource(null), (0, ee.isWindows)() && null != o.desktopSource.soundshareId && A.pn(o.desktopSource.soundshareId)), null != l && tf(l, u), o = d;
let {
  hdrCaptureMode: _
} = B.Z.getCurrentConfig({
  location: 'f627ab_12'
}, {
  autoTrackExposure: !1
}), E = e6().videoHook;
ev.setClipsSource({
  desktopDescription: {
    id: o.desktopSource.id,
    soundshareId: o.desktopSource.soundshareId,
    useVideoHook: E,
    useGraphicsCapture: tr(),
    useLoopback: r.getExperimentalSoundshare(),
    useQuartzCapturer: !0,
    allowScreenCaptureKit: ti(),
    videoHookStaleFrameTimeoutMs: 500,
    graphicsCaptureStaleFrameTimeoutMs: eA,
    hdrCaptureMode: _
  },
  quality: i,
  applicationName: n
});
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
let {
  settings: t
} = e;
!1 === t.decoupledClipsEnabled && (o = null, ev.setClipsSource(null));
  }
}), t.Z = r;