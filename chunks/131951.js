let r, i, a, s;
n(47120), n(724458), n(773603), n(653041), n(337869);
var o, l, u, c = n(512722),
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
  H = n(998594),
  Z = n(529558),
  Y = n(111672),
  j = n(874785),
  W = n(636458),
  K = n(441167),
  z = n(338336),
  q = n(751571),
  Q = n(815016),
  X = n(725380),
  $ = n(581883),
  J = n(626135),
  ee = n(12647),
  et = n(70956),
  en = n(358085),
  er = n(960048),
  ei = n(998502),
  ea = n(13140),
  es = n(314897),
  eo = n(967368),
  el = n(463395),
  eu = n(592125),
  ec = n(858340),
  ed = n(19780),
  e_ = n(704806),
  eE = n(631768),
  ef = n(981631),
  eh = n(70722),
  ep = n(761274),
  em = n(526761),
  eI = n(65154),
  eT = n(689938);

function eg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let eS = new C.Z('MediaEngineStore');
(u = o || (o = {}))[u.DETACHED = 0] = 'DETACHED', u[u.WAITING = 1] = 'WAITING', u[u.ATTACHED = 2] = 'ATTACHED', u[u.STARTED = 3] = 'STARTED', u[u.PLAYING = 4] = 'PLAYING', u[u.SILENCE = 5] = 'SILENCE';
let eA = 'MediaEngineStore',
  eN = {
left: 1,
right: 1
  },
  ev = 5 * et.Z.Millis.SECOND;

function eO() {
  return {
mode: ef.pM4.VOICE_ACTIVITY,
modeOptions: {
  threshold: -60,
  autoThreshold: en.isPlatformEmbedded || __OVERLAY__,
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
inputVolume: eI.Qx,
outputVolume: eI.Qx,
inputDeviceId: eI.w5,
outputDeviceId: eI.w5,
videoDeviceId: eI.w5,
qos: !1,
qosMigrated: !1,
videoHook: eR.supports(eI.AN.VIDEO_HOOK),
experimentalSoundshare2: null,
openH264: !0,
h265Enabled: !0,
vadThrehsoldMigrated: !1,
aecDumpEnabled: !1,
sidechainCompression: !1
  };
}
let eR = (0, m.Mt)((0, m.jj)()),
  eC = {},
  ey = new Set([eI.Yn.DEFAULT]),
  eD = eR.supports(eI.AN.AUTO_ENABLE),
  eL = !1,
  eb = eI.Yn.STREAM,
  eM = {
[eI.w5]: td(eT.Z.Messages.NO_INPUT_DEVICES)
  },
  eP = {
[eI.w5]: td(eT.Z.Messages.NO_OUTPUT_DEVICES)
  },
  eU = {
[eI.w5]: td(eT.Z.Messages.NO_VIDEO_DEVICES)
  },
  ew = !1,
  ex = !1,
  eG = !1,
  ek = !1,
  eB = !1,
  eF = eI.Av,
  eV = !1,
  eH = !1,
  eZ = !1,
  eY = !1,
  ej = null,
  eW = !1,
  eK = !1,
  ez = !1,
  eq = !1,
  eQ = !1,
  eX = null,
  e$ = !1,
  eJ = !1,
  e0 = !1;
q.Z.hasPermission(ep.Eu.AUDIO, {
  showAuthorizationError: !1
}), q.Z.hasPermission(ep.Eu.CAMERA, {
  showAuthorizationError: !1
});
let e1 = new Set(),
  e2 = !1,
  e3 = !1,
  e4 = {},
  e5 = null,
  e6 = {},
  e7 = 5 * et.Z.Millis.SECOND;

function e8() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
t = eC[e];
  return null == t && (t = eO(), eC[e] = t), t;
}

function e9(e) {
  let t = e8(e.context);
  e.setInputMode(t.mode, {
vadThreshold: t.modeOptions.threshold,
vadAutoThreshold: t.modeOptions.autoThreshold,
vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
  return eQ || !1;
}(),
vadLeading: t.modeOptions.vadLeading,
vadTrailing: t.modeOptions.vadTrailing,
pttReleaseDelay: t.modeOptions.delay
  });
}

function te(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Qx;
  return E().clamp(e, 0, t);
}

function tt(e) {
  let t = e8(e.context),
n = !eD || t.mute || t.deaf;
  e.context === eI.Yn.DEFAULT ? n = n || ew || ex || eG || !q.Z.didHavePermission(ep.Eu.AUDIO) : e.context === eI.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eI.Yn.DEFAULT && N.Z.updateNativeMute();
}

function tn() {
  var e, t, n;
  let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eB,
s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
o = a;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, en.isWindows)() && A.pn(o.desktopSource.soundshareId), eR.setGoLiveSource(null, eb)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eR.setGoLiveSource(null, eb), (eB || i) && (eF = (eB = i) ? tE(eU, e8().videoDeviceId) : eI.Av, eR.setVideoInputDevice(eF)), a = s, null != s) {
let e = {
  resolution: s.quality.resolution,
  frameRate: s.quality.frameRate
};
if (null != s.desktopSource) {
  let {
    hdrCaptureMode: t
  } = B.Z.getCurrentConfig({
    location: 'f627ab_2'
  }, {
    autoTrackExposure: !1
  }), n = e8().videoHook;
  eR.setGoLiveSource({
    desktopDescription: {
      id: s.desktopSource.id,
      soundshareId: s.desktopSource.soundshareId,
      useVideoHook: n,
      useGraphicsCapture: ta(),
      useLoopback: r.getExperimentalSoundshare(),
      useQuartzCapturer: !0,
      allowScreenCaptureKit: ts(),
      videoHookStaleFrameTimeoutMs: 500,
      graphicsCaptureStaleFrameTimeoutMs: ev,
      hdrCaptureMode: t
    },
    quality: e
  }, eb);
}
null != s.cameraSource && eR.setGoLiveSource({
  cameraDescription: {
    videoDeviceGuid: s.cameraSource.videoDeviceGuid,
    audioDeviceGuid: s.cameraSource.audioDeviceGuid
  },
  quality: e
}, eb);
  }
}

function tr(e, t, n, r) {
  var i;
  let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
  null == e6[a] && (e6[a] = new Set());
  let s = null != t && !e6[a].has(t);
  s && e6[a].add(t), (null == t || s) && J.default.track(ef.rMx.SOUNDSHARE_FAILED, {
soundshare_failure_code: t,
soundshare_failure_reason: n,
soundshare_failure_will_retry: r,
...(0, M.Z)(e)
  });
}

function ti(e) {
  let t = e8(),
n = t.inputDeviceId;
  if (e.setEchoCancellation(el.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(el.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(el.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, en.isWeb)()) {
let n = t.noiseCancellation ? -150 : -100;
e.setSilenceThreshold(n);
  }
}

function ta() {
  return (0, en.isWindows)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eh.nz);
}

function ts() {
  return (0, en.isMac)() && eR.supports(eI.AN.SCREEN_CAPTURE_KIT) && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eh.C7);
}

function to() {
  var e;
  return (null === (e = eu.Z.getChannel(eX)) || void 0 === e ? void 0 : e.type) !== ef.d4z.GUILD_STAGE_VOICE && G.Z.supportsSimulcast();
}
let tl = new class {
  start() {
!this.started && (this.started = !0, eR.on(m.aB.Silence, this.handleSilence));
  }
  stop() {
this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eR.removeListener(m.aB.Silence, this.handleSilence), g.Z.dispatch({
  type: 'AUDIO_INPUT_DETECTED',
  inputDetected: null
}));
  }
  update() {
let e = e8();
!eW && ed.Z.getState() === ef.hes.RTC_CONNECTED && e.mode === ef.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop();
  }
  reset() {
this.stop(), this.update();
  }
  constructor() {
eg(this, 'stateChangeTimeout', void 0), eg(this, 'noVoiceTimeout', 5000), eg(this, 'voiceTimeout', 1500), eg(this, 'started', !1), eg(this, 'handleSilence', e => {
  let t = !e;
  null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
    this.stateChangeTimeout = null, this.started && (g.Z.dispatch({
      type: 'AUDIO_INPUT_DETECTED',
      inputDetected: t
    }), e && (eK = !0));
  }, t ? this.voiceTimeout : this.noVoiceTimeout);
});
  }
}();

function tu(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
r = e8(t);
  return Object.assign(r, e), !__OVERLAY__ && n && I.K.set(eA, eC), r;
}

function tc() {
  !eD && eR.enable().then(() => g.Z.dispatch({
type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
enabled: !0,
unmute: !1
  }));
}

function td(e) {
  return {
id: eI.w5,
index: 0,
name: e,
disabled: !0
  };
}

function t_(e, t) {
  if (0 === e.length) {
let e = td(t);
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

function tE(e, t) {
  var n;
  let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
  return null != r ? r.id : t;
}

function tf() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
r = null !== (e = $.Z.settings.audioContextSettings) && void 0 !== e ? e : {
  user: {},
  stream: {}
};
  for (let e of Object.keys(r)) {
let i = e === em.u0.USER ? eI.Yn.DEFAULT : eI.Yn.STREAM,
  a = i === eI.Yn.STREAM ? eI.Yh : eI.Qx,
  s = null !== (t = r[e]) && void 0 !== t ? t : {},
  {
    localMutes: o,
    localVolumes: l
  } = e8(i);
for (let [e, t] of Object.entries(s))
  null == (0, X.Ky)(i, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== a ? l[e] = t.volume : delete l[e], eR.eachConnection(n => {
    n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
  }, i));
if (n)
  for (let e of new Set([
      ...Object.keys(o),
      ...Object.keys(l)
    ]))
    null == s[e] && (delete o[e], delete l[e], eR.eachConnection(t => {
      t.setLocalVolume(e, a), t.setLocalMute(e, !1);
    }, i));
tu({
  localMutes: o,
  localVolumes: l
}, i);
  }
}

function th(e) {
  if (null == r)
return eS.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'), {
  soundshareId: null,
  soundshareSession: ''
};
  {
let t = r.getExperimentalSoundshare() ? e : ee.Z.getAudioPid(e),
  n = '';
return null != t && (n = ee.Z.generateSessionFromPid(t)), {
  soundshareId: t,
  soundshareSession: n
};
  }
}

function tp(e, t) {
  (0, en.isWindows)() && A.YT(e, {
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

function tm() {
  let e = eI.Yn.DEFAULT,
{
  videoToggleStateMap: t
} = e8(e);
  for (let [e, n] of Object.entries(t))
n === ef.ZUi.AUTO_PROBING && delete t[e];
  tu({
videoToggleStateMap: t
  }, e, !1);
}

function tI(e) {
  let t = e8();
  J.default.track(ef.rMx.VOICE_PROCESSING, {
echo_cancellation: t.echoCancellation,
noise_cancellation: t.noiseCancellation,
noise_suppression: t.noiseSuppression,
automatic_gain_control: t.automaticGainControl,
location: e
  });
}

function tT(e) {
  let t = tu({
sidechainCompression: e
  });
  eR.setSidechainCompression(t.sidechainCompression);
}

function tg() {
  let e = e8(),
t = e.inputDeviceId,
n = el.Z.hasEchoCancellation(t) || e.echoCancellation,
r = el.Z.hasNoiseSuppression(t) || e.noiseSuppression,
i = el.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
a = e.noiseCancellation;
  eR.setLoopback(e3, {
echoCancellation: n,
noiseSuppression: r,
automaticGainControl: i,
noiseCancellation: a
  });
}

function tS() {
  return eQ || !1;
}
async function tA() {
  try {
await ei.ZP.ensureModule('discord_krisp'), ei.ZP.requireModule('discord_krisp'), eQ = !0, r.emitChange();
  } catch (t) {
eS.warn('Failed to load Krisp module: '.concat(t.message)), er.Z.captureException(t);
let e = eI.H3.INITIALIZED;
if (t.message.includes(': ')) {
  let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
  e = isNaN(n) || 0 === n ? eI.H3.INITIALIZED : n;
}
J.default.track(ef.rMx.VOICE_PROCESSING, {
  noise_canceller_error: e
}), tu({
  noiseCancellation: !1
});
  } finally {
eq = !1;
  }
}

function tN(e) {
  let {
section: t
  } = e;
  return t === ef.oAB.VOICE && tc(), !1;
}
class tv extends(l = p.ZP.Store) {
  initialize() {
eR.on(m.aB.Connection, e => {
  var t, n;
  let {
    maxSyncDelayOverride: i
  } = V.Z.getCurrentConfig({
    location: 'f627ab_3'
  }, {
    autoTrackExposure: !1
  });
  i > 0 && eR.setMaxSyncDelayOverride(i), e9(e), tt(e), ti(e);
  let s = e8();
  e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers), e.setQoS(s.qos), e.setExperimentalEncoders(s.experimentalEncoders), e.setHardwareH264(null === (t = s.hardwareEncoding) || void 0 === t || t), e.setSoftwareH264(null === (n = s.openH264) || void 0 === n || n);
  let {
    useExperimentalRateControl: o
  } = W.Z.getCurrentConfig({
    location: 'f627ab_4'
  }, {
    autoTrackExposure: !1
  });
  o && e.setExperimentFlag(eI.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
  let l = ed.Z.getGuildId(),
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
  u && e.setExperimentFlag(eI.V8.MUTE_BEFORE_PROCESSING, !0), c && e.setExperimentFlag(eI.V8.PTT_BEFORE_PROCESSING, !0), d && e.setExperimentFlag(eI.V8.SKIP_ENCODE, !0);
  let {
    resetOnErrors: _,
    fallbackOnErrors: E,
    fallbackOnConsecutiveErrors: f
  } = j.Z.getCurrentConfig({
    location: 'setupMediaEngine'
  }, {
    autoTrackExposure: !0
  });
  _ && e.setExperimentFlag(eI.V8.RESET_DECODER_ON_ERRORS, !0), E && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), f && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
  if (e.context === eI.Yn.STREAM && to()) {
    let t = G.Z.goliveSimulcastFlag();
    void 0 !== t && e.setExperimentFlag(t, !0);
  }
  (0, en.isWindows)() ? (null == e5 ? void 0 : e5.startsWith('NVIDIA')) ? e.setExperimentFlag(eI.V8.SIGNAL_AV1, !0): (null == e5 ? void 0 : e5.startsWith('AMD')) && U.Z.getCurrentConfig({
    location: 'setupMediaEngine'
  }, {
    autoTrackExposure: !0
  }).signalAV1Support ? e.setExperimentFlag(eI.V8.SIGNAL_AV1, !0) : e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0): ((0, en.isMac)() || (0, en.isLinux)()) && e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0), (0, en.isWindows)() && e.setExperimentFlag(eI.V8.SIGNAL_AV1_HARDWARE_DECODE, !0);
  let {
    allowSettingFullbandAndroid: h
  } = F.Z.getCurrentConfig({
    location: 'f627ab_14'
  }, {
    autoTrackExposure: !0
  });
  if (h && eR.setHasFullbandPerformance((0, y.b)()), e.setRemoteAudioHistory(0), (0, R.Z)(r)) {
    let t = O.Z.getSettings();
    e.setExperimentFlag(eI.V8.STREAMER_CLIP, t.clipsEnabled);
    let {
      enableViewerClipping: n
    } = K.Z.getCurrentConfig({
      location: 'f627ab_15'
    }, {
      autoTrackExposure: !1
    });
    e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eI.ux);
    let {
      allowQualityDecoupling: r
    } = v.Z.getCurrentConfig({
      location: 'MediaEngineStore_setupMediaEngine'
    }, {
      autoTrackExposure: !0
    });
    e.setQualityDecoupling(r);
  }
  for (let t of (s = e8(e.context), e.setPostponeDecodeLevel(100), Object.keys(s.localMutes)))
    t !== es.default.getId() && e.setLocalMute(t, s.localMutes[t]);
  for (let t of Object.keys(s.localVolumes))
    t !== es.default.getId() && e.setLocalVolume(t, s.localVolumes[t]);
  for (let t of Object.keys(s.localPans)) {
    let n = s.localPans[t];
    e.setLocalPan(t, n.left, n.right);
  }
  for (let t of Object.keys(s.disabledLocalVideos))
    e.setLocalVideoDisabled(t, s.disabledLocalVideos[t]);
  e.on(m.Sh.Speaking, (t, n) => {
    g.Z.dispatch({
      type: 'SPEAKING',
      context: e.context,
      userId: t,
      speakingFlags: n
    });
  }), e.context === eI.Yn.DEFAULT && (eH = !1, e.on(m.Sh.SpeakingWhileMuted, () => {
    eH = !0, r.emitChange();
  })), e.on(m.Sh.DesktopSourceEnd, () => {
    g.Z.dispatch({
      type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
      settings: {
        context: e.context
      }
    });
  }), e.on(m.Sh.SoundshareAttached, () => {
    (null == a ? void 0 : a.desktopSource) != null && J.default.track(ef.rMx.SOUNDSHARE_ATTACHED, (0, M.Z)(null == a ? void 0 : a.desktopSource));
  }), e.on(m.Sh.SoundshareFailed, e => {
    let {
      failureCode: t,
      failureReason: n,
      willRetry: r
    } = e;
    tr(null == a ? void 0 : a.desktopSource, t, n, r);
  }), e.on(m.Sh.SoundshareSpeaking, () => {
    (null == a ? void 0 : a.desktopSource) != null && (J.default.track(ef.rMx.SOUNDSHARE_TRANSMITTING, (0, M.Z)(null == a ? void 0 : a.desktopSource)), null != ec.Z.getHookError(ef.K3D.SOUND) && g.Z.wait(() => g.Z.dispatch({
      type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING'
    })));
  });
  let p = new T.V7();
  e.on(m.Sh.SoundshareTrace, e => {
    switch (e.type) {
      case 'soundshare_attach_requested':
        p.start(e7, () => {
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
        (null == a ? void 0 : a.desktopSource) != null && (tr(null == a ? void 0 : a.desktopSource, n, t, r), !r && (p.stop(), g.Z.wait(() => g.Z.dispatch({
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
  }), e.on(m.Sh.VideoHookInitialize, (e, t, n, r, i, s) => {
    (null == a ? void 0 : a.desktopSource) != null && J.default.track(ef.rMx.VIDEOHOOK_INITIALIZED, {
      backend: e,
      format: t,
      framebuffer_format: n,
      sample_count: r,
      success: i,
      reinitialization: s,
      ...(0, M.Z)(null == a ? void 0 : a.desktopSource)
    });
  }), e.on(m.Sh.NoiseCancellationError, e => {
    eS.warn('noisecancellererror event: '.concat(e)), e$ = !0, J.default.track(ef.rMx.VOICE_PROCESSING, {
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
    eS.warn('voiceactivitydetectorerror event: '.concat(e)), J.default.track(ef.rMx.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), g.Z.dispatch({
      type: 'AUDIO_SET_MODE',
      context: eI.Yn.DEFAULT,
      mode: ef.pM4.VOICE_ACTIVITY,
      options: {
        ...e8(eI.Yn.DEFAULT).modeOptions,
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
  }), e.setBitRate(eo.Z.bitrate), e.applyVideoQualityMode(eE.Z.mode);
}), eR.on(m.aB.DeviceChange, (e, t, n) => {
  g.Z.dispatch({
    type: 'MEDIA_ENGINE_DEVICES',
    inputDevices: e,
    outputDevices: t,
    videoDevices: n
  });
}), eR.on(m.aB.VolumeChange, (e, t) => {
  g.Z.dispatch({
    type: 'AUDIO_VOLUME_CHANGE',
    inputVolume: e,
    outputVolume: t
  });
}), eR.on(m.aB.DesktopSourceEnd, () => {
  g.Z.dispatch({
    type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
    settings: null
  });
}), eR.on(m.aB.AudioPermission, e => {
  e0 = !0, g.Z.dispatch({
    type: 'MEDIA_ENGINE_PERMISSION',
    kind: 'audio',
    granted: e
  });
}), eR.on(m.aB.VideoPermission, e => {
  g.Z.dispatch({
    type: 'MEDIA_ENGINE_PERMISSION',
    kind: 'video',
    granted: e
  });
}), eR.on(m.aB.WatchdogTimeout, async () => {
  let e;
  try {
    await ee.Z.submitLiveCrashReport({
      message: {
        message: 'Voice Watchdog Timeout'
      }
    });
  } catch (t) {
    'number' == typeof t.status && (e = t.status);
  }
  eS.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)), J.default.track(ef.rMx.VOICE_WATCHDOG_TIMEOUT, {
    minidump_submission_error: e
  });
}), eR.on(m.aB.VideoInputInitialized, e => {
  J.default.track(ef.rMx.VIDEO_INPUT_INITIALIZED, {
    device_name: e.description.name,
    time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * et.Z.Millis.SECOND),
    timed_out: e.initializationTimerExpired,
    activity: e.entropy
  });
}), eR.on(m.aB.ClipsRecordingRestartNeeded, () => {
  g.Z.dispatch({
    type: 'CLIPS_RESTART'
  });
}), eR.on(m.aB.ClipsInitFailure, (e, t) => {
  g.Z.wait(() => {
    g.Z.dispatch({
      type: 'CLIPS_INIT_FAILURE',
      errMsg: e,
      applicationName: t
    });
  });
}), eR.on(m.aB.ClipsRecordingEnded, (e, t) => {
  var n, r;
  (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t && A.pn(t), s = null);
}), eR.on(m.aB.NativeScreenSharePickerUpdate, e => {
  H.Z.trackExposure({
    location: 'MediaEngineStore_NativeScreenSharePickerUpdate'
  }), g.Z.dispatch({
    type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
    existing: e
  });
}), eR.on(m.aB.NativeScreenSharePickerCancel, e => {
  H.Z.trackExposure({
    location: 'MediaEngineStore_NativeScreenSharePickerCancel'
  }), g.Z.dispatch({
    type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
    existing: e
  });
}), eR.on(m.aB.NativeScreenSharePickerError, e => {
  H.Z.trackExposure({
    location: 'MediaEngineStore_NativeScreenSharePickerError'
  }), g.Z.dispatch({
    type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
    error: e
  });
}), tl.reset(), (0, e_.q)().then(e => {
  null != e && (e5 = e.gpu_brand);
}), ! function() {
  var e;
  let t = I.K.get('audio');
  null != t && (I.K.set(eA, {
      [eI.Yn.DEFAULT]: t
    }), I.K.remove('audio')), eC = null !== (e = I.K.get(eA)) && void 0 !== e ? e : {}, E().each(eC, e => {
      if (E().defaultsDeep(e, eO()), null != e.modeOptions && 'string' == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ea.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
        var t;
        e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60);
      }
      (0, en.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1), null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
    }),
    function() {
      var e, t, n;
      let r = e8();
      eR.setAudioInputDevice(r.inputDeviceId), eR.setAudioOutputDevice(r.outputDeviceId), tn(), eR.setInputVolume(r.inputVolume), eR.setOutputVolume(r.outputVolume), eR.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264), eR.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t), eR.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n), eR.setAecDump(r.aecDumpEnabled), eR.setSidechainCompression(r.sidechainCompression);
    }();
}(), ((0, en.isWindows)() || (0, en.isLinux)() || (0, en.isMac)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, '>=21.0.0')) && !__OVERLAY__ && !eq && !eQ ? (eq = !0, tA()) : (0, en.isWeb)() && eR.supports(eI.AN.NOISE_CANCELLATION) ? (eQ = !0, r.emitChange()) : (0, en.isWeb)() && tu({
  noiseCancellation: !1
}), tm(), e4 = {
  [eI.AN.VIDEO]: eR.supports(eI.AN.VIDEO),
  [eI.AN.DESKTOP_CAPTURE]: eR.supports(eI.AN.DESKTOP_CAPTURE),
  [eI.AN.HYBRID_VIDEO]: eR.supports(eI.AN.HYBRID_VIDEO)
}, this.waitFor(es.default, el.Z, eu.Z, ec.Z, ed.Z, b.ZP, q.Z.storage, $.Z, D.Z, O.Z);
  }
  supports(e) {
return eR.supports(e);
  }
  supportsInApp(e) {
return e4[e] || eR.supports(e);
  }
  isSupported() {
return eR.supported();
  }
  isExperimentalEncodersSupported() {
return eR.supports(eI.AN.EXPERIMENTAL_ENCODERS);
  }
  isNoiseSuppressionSupported() {
return eR.supports(eI.AN.NOISE_SUPPRESSION);
  }
  isNoiseCancellationSupported() {
return eQ || !1;
  }
  isNoiseCancellationError() {
return e$;
  }
  isAutomaticGainControlSupported() {
return eR.supports(eI.AN.AUTOMATIC_GAIN_CONTROL);
  }
  isAdvancedVoiceActivitySupported() {
return eQ || !1;
  }
  isAecDumpSupported() {
return eR.supports(eI.AN.AEC_DUMP);
  }
  isSimulcastSupported() {
return eR.supports(eI.AN.VIDEO) && eR.supports(eI.AN.SIMULCAST);
  }
  getAecDump() {
return e8().aecDumpEnabled;
  }
  getMediaEngine() {
return eR;
  }
  getVideoComponent() {
return eR.supports(eI.AN.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Video;
  }
  getCameraComponent() {
return eR.supports(eI.AN.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Camera;
  }
  isEnabled() {
return eD;
  }
  isMute() {
return this.isSelfMute() || ew;
  }
  isDeaf() {
return this.isSelfDeaf() || ek;
  }
  hasContext(e) {
return null != eC[e];
  }
  isSelfMutedTemporarily() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
return e === eI.Yn.DEFAULT && ex;
  }
  isSelfMute() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
return !this.isEnabled() || e8(e).mute || !q.Z.didHavePermission(ep.Eu.AUDIO) || this.isSelfDeaf(e) || e === eI.Yn.DEFAULT && eG;
  }
  shouldSkipMuteUnmuteSound() {
let {
  airpodsMuteSupported: e
} = P.Z.getCurrentConfig({
  location: 'shouldSkipMuteUnmuteSound'
}, {
  autoTrackExposure: !0
});
return !!e && eV;
  }
  notifyMuteUnmuteSoundWasSkipped() {
eV = !1;
  }
  isHardwareMute() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
return !this.isMute() && !this.isSelfMutedTemporarily(e) && el.Z.isHardwareMute(this.getInputDeviceId());
  }
  isSelfDeaf() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
return !this.isSupported() || e8(e).deaf;
  }
  isVideoEnabled() {
return eB && eY;
  }
  isVideoAvailable() {
return Object.values(eU).some(e => {
  let {
    disabled: t
  } = e;
  return !t;
});
  }
  isScreenSharing() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.STREAM;
return eb === e && null != a;
  }
  isSoundSharing() {
var e;
let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.STREAM;
return eb === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
  }
  isLocalMute(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
return e !== es.default.getId() && (e8(t).localMutes[e] || !1);
  }
  supportsDisableLocalVideo() {
return eR.supports(eI.AN.DISABLE_VIDEO);
  }
  isLocalVideoDisabled(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
return null !== (t = e8(n).disabledLocalVideos[e]) && void 0 !== t && t;
  }
  getVideoToggleState(e) {
var t;
let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
return null !== (t = e8(n).videoToggleStateMap[e]) && void 0 !== t ? t : ef.ZUi.NONE;
  }
  isLocalVideoAutoDisabled(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
return t === eI.Yn.DEFAULT && e1.has(e);
  }
  isAnyLocalVideoAutoDisabled() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
return e === eI.Yn.DEFAULT && e1.size > 0;
  }
  isMediaFilterSettingLoading() {
return eJ;
  }
  isNativeAudioPermissionReady() {
return e0;
  }
  getGoLiveSource() {
return a;
  }
  getGoLiveContext() {
return eb;
  }
  getLocalPan(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
  n = e8(t).localPans[e];
return null != n ? n : eN;
  }
  getLocalVolume(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
  n = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
  r = e8(t).localVolumes[e];
return null != r ? r : n;
  }
  getInputVolume() {
return e8().inputVolume;
  }
  getOutputVolume() {
return e8().outputVolume;
  }
  getMode() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
return e8(e).mode;
  }
  getModeOptions() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
return e8(e).modeOptions;
  }
  getShortcuts() {
let e = {};
return E().each(eC, (t, n) => {
  let {
    mode: r,
    modeOptions: {
      shortcut: i
    }
  } = t;
  r === ef.pM4.PUSH_TO_TALK && ey.has(n) && (e[n] = i);
}), e;
  }
  getInputDeviceId() {
return tE(eM, e8().inputDeviceId);
  }
  getOutputDeviceId() {
return tE(eP, e8().outputDeviceId);
  }
  getVideoDeviceId() {
return tE(eU, e8().videoDeviceId);
  }
  getInputDevices() {
return eM;
  }
  getOutputDevices() {
return eP;
  }
  getVideoDevices() {
return eU;
  }
  getEchoCancellation() {
let e = e8();
return el.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
  }
  getSidechainCompression() {
return e8().sidechainCompression;
  }
  getH265Enabled() {
return e8().h265Enabled;
  }
  getLoopback() {
return eR.getLoopback();
  }
  getNoiseSuppression() {
let e = e8();
return el.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
  }
  getAutomaticGainControl() {
let e = e8();
return el.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
  }
  getNoiseCancellation() {
return e8().noiseCancellation;
  }
  getExperimentalEncoders() {
return e8().experimentalEncoders;
  }
  getHardwareEncoding() {
var e;
return null === (e = e8().hardwareEncoding) || void 0 === e || e;
  }
  getEnableSilenceWarning() {
return e8().silenceWarning;
  }
  getDebugLogging() {
return eR.getDebugLogging();
  }
  getQoS() {
return e8().qos;
  }
  getAttenuation() {
return e8().attenuation;
  }
  getAttenuateWhileSpeakingSelf() {
return e8().attenuateWhileSpeakingSelf;
  }
  getAttenuateWhileSpeakingOthers() {
return e8().attenuateWhileSpeakingOthers;
  }
  getAudioSubsystem() {
return eR.getAudioSubsystem();
  }
  getMLSSigningKey(e, t) {
return eR.getMLSSigningKey(e, t);
  }
  getSettings() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
return e8(e);
  }
  getState() {
return {
  settingsByContext: eC,
  inputDevices: eM,
  outputDevices: eP,
  appSupported: e4,
  krispModuleLoaded: eQ,
  goLiveSource: a,
  goLiveContext: eb
};
  }
  getInputDetected() {
return ej;
  }
  getNoInputDetectedNotice() {
return eK;
  }
  getPacketDelay() {
return en.isPlatformEmbedded || this.getMode() !== ef.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
  }
  setCanHavePriority(e, t) {
eR.eachConnection(n => n.setCanHavePriority(e, t));
  }
  isInteractionRequired() {
return eL;
  }
  getVideoHook() {
return e8().videoHook;
  }
  supportsVideoHook() {
return eR.supports(eI.AN.VIDEO_HOOK);
  }
  getExperimentalSoundshare() {
let e = e8().experimentalSoundshare2;
return this.supportsExperimentalSoundshare() && (null == e || e);
  }
  supportsExperimentalSoundshare() {
return eR.supports(eI.AN.EXPERIMENTAL_SOUNDSHARE) && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eh.I9);
  }
  getOpenH264() {
return e8().openH264;
  }
  getEverSpeakingWhileMuted() {
return eH;
  }
  supportsScreenSoundshare() {
return (0, en.isMac)() && eR.supports(eI.AN.SOUNDSHARE) && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, eh.yG) && ts() || (0, en.isWindows)() && eR.supports(eI.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare();
  }
  getVideoStreamParameters() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
  t = this.supports(eI.AN.VIDEO) ? [{
    rid: '100',
    type: e === eI.Yn.DEFAULT ? eI.Tr.VIDEO : eI.Tr.SCREEN,
    quality: 100
  }] : [];
return this.isSimulcastSupported() && (e === eI.Yn.DEFAULT || to()) && t.push({
  rid: '50',
  type: e === eI.Yn.DEFAULT ? eI.Tr.VIDEO : eI.Tr.SCREEN,
  quality: 50
}), t;
  }
  getSupportedSecureFramesProtocolVersion(e) {
var t;
let n = eR.getSupportedSecureFramesProtocolVersion(),
  r = Z.m.getCurrentConfig({
    location: 'MediaEngineStore'
  }),
  i = null != e ? Z.N.getCurrentConfig({
    guildId: e,
    location: 'MediaEngineStore'
  }) : null,
  a = r.canSupportSecureFrames || (null == i ? void 0 : i.canSupportSecureFrames),
  s = r.canSupportMls || (null == i ? void 0 : i.canSupportMls),
  o = Math.max(r.protocolVersionFloor, null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0);
return a && n % 100 >= o ? s ? n : n % 100 : 0;
  }
  hasClipsSource() {
return null != s;
  }
}
eg(tv, 'displayName', 'MediaEngineStore'), r = new tv(g.Z, {
  VOICE_CHANNEL_SELECT: function(e) {
let {
  guildId: t,
  channelId: n,
  currentVoiceChannelId: r,
  video: i
} = e;
if (r !== n && tn(i, null), null != t || null == n) {
  ez = !1;
  return;
}
if (ez)
  return;
ez = !0;
let a = e8();
(a.mute || a.deaf) && (tu({
  deaf: !1,
  mute: !1
}), eR.eachConnection(tt));
  },
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: t
} = e;
return t.reduce((e, t) => i === t.sessionId ? (ew = t.mute || t.suppress, ek = t.deaf, eR.eachConnection(tt), tn(!(null != t.guildId && null != t.channelId && null != eX && eX !== t.channelId) && eB), eX = t.channelId, !0) : (!__OVERLAY__ && t.userId === es.default.getId() && null == ed.Z.getChannelId() && tn(!1, null), e), !1);
  },
  CONNECTION_OPEN: function(e) {
i = e.sessionId, ew = !1, ek = !1, Y.Z.subscribe({
  location: 'handleConnectionOpen'
}, e => {
  !e.enableSidechainCompression && e8().sidechainCompression && tT(!1);
}), (0, Q.R)() && tf();
  },
  CONNECTION_CLOSED: function() {
i = null;
  },
  RTC_CONNECTION_STATE: function(e) {
switch (e.state) {
  case ef.hes.CONNECTING:
    tc();
    break;
  case ef.hes.RTC_CONNECTING:
    eW = !1, eK = !1;
    break;
  case ef.hes.RTC_CONNECTED:
    tn();
    break;
  case ef.hes.DISCONNECTED:
    (function() {
      if (0 === e1.size)
        return;
      let e = eI.Yn.DEFAULT,
        {
          disabledLocalVideos: t
        } = e8(e);
      e1.forEach(n => {
        d()(t[n], 'If you are auto-disabled, then you are also disabled.'), delete t[n], eR.eachConnection(e => e.setLocalVideoDisabled(n, !1), e);
      }), e1.clear(), tu({
        disabledLocalVideos: t
      }, e, !1);
    }(), tm());
}
tl.update();
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
let {
  mute: t
} = e;
ex = t, eR.eachConnection(tt);
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
let {
  context: t,
  skipMuteUnmuteSoundEffect: n
} = e, {
  mute: r,
  deaf: i
} = e8(t);
if (t === eI.Yn.DEFAULT && (q.Z.requestPermission(ep.Eu.AUDIO), eG))
  return !1;
!(r = !i && !r) && (i = !1), n && (eV = !0), tu({
  mute: r,
  deaf: i
}, t), eR.eachConnection(tt);
  },
  AUDIO_SET_SELF_MUTE: function(e) {
let {
  context: t,
  mute: n
} = e;
tu({
  mute: n
}, t), eR.eachConnection(tt);
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
let {
  context: t
} = e;
tu({
  deaf: !e8(t).deaf
}, t), eR.eachConnection(tt);
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
let {
  context: t,
  userId: n
} = e;
if (n === es.default.getId())
  return;
let {
  localMutes: r
} = e8(t);
r[n] ? delete r[n] : r[n] = !0, tu({
  localMutes: r
}, t), eR.eachConnection(e => e.setLocalMute(n, r[n] || !1), t);
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
var t, n, r, i, a, s, o;
let {
  context: l,
  userId: u,
  videoToggleState: c,
  persist: _,
  isAutomatic: E
} = e;
d()(!(_ && E), 'These are not allowed to both be true.');
let f = c === ef.ZUi.DISABLED,
  {
    disabledLocalVideos: h
  } = e8(l),
  p = null !== (t = h[u]) && void 0 !== t && t,
  m = e1.has(u),
  I = c === ef.ZUi.AUTO_ENABLED || c === ef.ZUi.MANUAL_ENABLED;
eS.info('disableVideo='.concat(f, ' currentlyDisabled=').concat(p, ' currentlyAutoDisabled=').concat(m, ', isVideoShown=').concat(I)), d()(!(m && !p), 'If you are auto-disabled, then you are also disabled.');
let T = f !== p,
  g = l === eI.Yn.DEFAULT,
  S = E && T && g,
  A = _ && T && g;
eS.info('changed='.concat(T, ' isDefaultContext=').concat(g, ' isUpdateCausedByVideoHealthManager=').concat(S, ' isManualToggleByUser=').concat(A));
let {
  videoToggleStateMap: N
} = e8(l);
if (N[u] === ef.ZUi.AUTO_PROBING && c === ef.ZUi.AUTO_ENABLED && (0, z.Z)(u, f ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, I), N[u] = c, tu({
    videoToggleStateMap: N
  }, l, _), c === ef.ZUi.AUTO_PROBING ? null === (n = ed.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (r = ed.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1), !e2 && (eS.info('isAutoDisableAllowed='.concat(e2, ' - disabling VideoHealthManager')), null === (a = ed.Z.getRTCConnection()) || void 0 === a || null === (i = a.getVideoHealthManager()) || void 0 === i || i.disable()), S) {
  if (!f && !m || f && !e2)
    return;
  (0, z.Z)(u, f ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, I), f ? e1.add(u) : e1.delete(u);
} else
  A && (m && !f ? (eS.info('disallowing auto-disable for this session because of manual override by user'), e2 = !1, null === (o = ed.Z.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, z.Z)(u, eI.fC.MANUAL_REENABLE, I)) : (0, z.Z)(u, f ? eI.fC.MANUAL_DISABLE : eI.fC.MANUAL_ENABLE, I));
g && !f && e1.delete(u), f ? h[u] = !0 : delete h[u], tu({
  disabledLocalVideos: h
}, l, _), eR.eachConnection(e => {
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
if (n === es.default.getId())
  return;
let i = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
  {
    localVolumes: a
  } = e8(t);
r === i ? delete a[n] : a[n] = r, tu({
  localVolumes: a
}, t), eR.eachConnection(e => e.setLocalVolume(n, r), t);
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
let {
  context: t,
  userId: n,
  left: r,
  right: i
} = e, {
  localPans: a
} = e8(t);
a[n] = {
  left: r,
  right: i
}, tu({
  localPans: a
}, t), eR.eachConnection(e => e.setLocalPan(n, r, i), t);
  },
  AUDIO_SET_MODE: function(e) {
let {
  context: t,
  mode: n,
  options: r
} = e;
tu({
  mode: n,
  modeOptions: r
}, t), eR.eachConnection(e9), tl.update();
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
let {
  volume: t
} = e;
tu({
  inputVolume: te(t)
}), eR.setInputVolume(t);
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
let {
  volume: t
} = e;
tu({
  outputVolume: t
}), eR.setOutputVolume(t);
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
let {
  id: t
} = e;
tu({
  inputDeviceId: t = tE(eM, t)
}), eR.setAudioInputDevice(t);
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
let {
  id: t
} = e;
tu({
  outputDeviceId: t = tE(eP, t)
}), eR.setAudioOutputDevice(t);
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
let t = tu({
  echoCancellation: e.enabled
});
eR.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tg(), tI(e.location);
  },
  AUDIO_SET_SIDECHAIN_COMPRESSION: function(e) {
tT(e.enabled);
  },
  AUDIO_SET_LOOPBACK: function(e) {
let {
  enabled: t
} = e;
return e3 = t, tg();
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
let t = tu({
  noiseSuppression: e.enabled
});
eR.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tg(), tI(e.location);
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
let t = tu({
  automaticGainControl: e.enabled
});
eR.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tg(), tI(e.location);
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
let t = tu({
  noiseCancellation: e.enabled
});
eR.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tg(), tI(e.location);
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
tu({
  silenceWarning: e.enabled
}), tl.update();
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
eR.setDebugLogging(e.enabled);
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
tu({
  videoHook: e.enabled
});
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
tu({
  experimentalSoundshare2: e.enabled
});
  },
  AUDIO_SET_ATTENUATION: function(e) {
let {
  attenuation: t,
  attenuateWhileSpeakingSelf: n,
  attenuateWhileSpeakingOthers: r
} = e, i = tu({
  attenuation: t,
  attenuateWhileSpeakingSelf: n,
  attenuateWhileSpeakingOthers: r
});
eR.eachConnection(e => e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers));
  },
  AUDIO_SET_QOS: function(e) {
let {
  enabled: t
} = e;
tu({
  qos: t
}), eR.eachConnection(e => e.setQoS(t));
  },
  MEDIA_ENGINE_DEVICES: function(e) {
let {
  inputDevices: t,
  outputDevices: n,
  videoDevices: r
} = e;
! function(e) {
  let t = eM;
  if (eM = t_(e, eT.Z.Messages.NO_INPUT_DEVICES), !E().isEqual(eM, t)) {
    let e = e8(),
      t = tE(eM, e.inputDeviceId);
    eR.setAudioInputDevice(t);
  }
}(t), ! function(e) {
  let t = eP;
  if (eP = t_(e, eT.Z.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eP, t)) {
    let e = e8(),
      t = tE(eP, e.outputDeviceId);
    eR.setAudioOutputDevice(t);
  }
}(n), ! function(e) {
  eY = e.length > 0;
  let t = eU;
  if (eU = t_(e, eT.Z.Messages.NO_VIDEO_DEVICES), eB && !E().isEqual(eU, t)) {
    var n;
    let e = void 0 !== eU[eF],
      r = eF === eI.w5 && (null === (n = t[eI.w5]) || void 0 === n ? void 0 : n.disabled);
    tn(e || r);
  }
}(r);
  },
  AUDIO_VOLUME_CHANGE: function(e) {
let {
  inputVolume: t,
  outputVolume: n
} = e;
tu({
  inputVolume: te(t),
  outputVolume: n
});
  },
  AUDIO_RESET: function() {
I.K.remove(eA), location.reload();
  },
  AUDIO_INPUT_DETECTED: function(e) {
let {
  inputDetected: t
} = e;
ej = t, !eW && ej && (eW = !0, tl.update());
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
eR.setAudioSubsystem(e.subsystem);
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
eD = e.enabled, e.unmute && tu({
  mute: !1,
  deaf: !1
}), eR.eachConnection(tt);
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
let {
  enabled: t
} = e;
q.Z.requestPermission(ep.Eu.CAMERA), tn(t);
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
let {
  kind: t,
  granted: n
} = e;
if (!n)
  switch (t) {
    case 'audio':
      eD = !1, eR.eachConnection(tt);
      break;
    case 'video':
      tn(!1);
  }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
var t, n, r, i;
let {
  settings: s
} = e;
if ((null == s ? void 0 : s.desktopSettings) != null) {
  let e = null,
    r = null,
    {
      sourceId: i,
      sound: o
    } = s.desktopSettings,
    l = null !== (t = s.context) && void 0 !== t ? t : eI.Yn.DEFAULT,
    u = null !== (n = s.qualityOptions) && void 0 !== n ? n : {
      resolution: 720,
      frameRate: 30
    },
    c = ee.Z.getPidFromDesktopSource(i);
  en.isPlatformEmbedded && !0 === o && ({
    soundshareId: e,
    soundshareSession: r
  } = th(c), null != e && tp(e, r)), ! function(e) {
    if (e !== eb)
      null != a && eR.setGoLiveSource(null, eb), eb = e;
  }(l), tn(l === eI.Yn.STREAM && eB, {
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
} else if ((null == s ? void 0 : s.cameraSettings) != null) {
  let e = null !== (r = s.context) && void 0 !== r ? r : eI.Yn.DEFAULT,
    {
      videoDeviceGuid: t,
      audioDeviceGuid: n
    } = s.cameraSettings,
    a = e === eI.Yn.STREAM && eB,
    o = null !== (i = s.qualityOptions) && void 0 !== i ? i : {
      resolution: 720,
      frameRate: 30
    };
  tn(a, {
    cameraSource: {
      videoDeviceGuid: t,
      audioDeviceGuid: n
    },
    quality: {
      resolution: o.resolution,
      frameRate: o.frameRate
    }
  });
} else
  tn(eB, null);
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
let {
  id: t
} = e;
tu({
  videoDeviceId: t = tE(eU, t)
}), tn();
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
let t = tu({
  experimentalEncoders: e.enabled
});
eR.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders));
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
return eL !== e.required && (eL = e.required, !e.required && eR.interact(), !0);
  },
  USER_SETTINGS_MODAL_INIT: tN,
  USER_SETTINGS_MODAL_SET_SECTION: tN,
  CERTIFIED_DEVICES_SET: function() {
return eR.eachConnection(ti), !1;
  },
  RPC_APP_CONNECTED: function(e) {
let {
  application: t
} = e;
ey.add(t.id);
  },
  RPC_APP_DISCONNECTED: function(e) {
let {
  application: t
} = e;
ey.delete(t.id);
  },
  OVERLAY_INITIALIZE: function(e) {
let {
  mediaEngineState: t
} = e;
eC = t.settingsByContext, eM = t.inputDevices, eP = t.outputDevices, e4 = t.appSupported, eQ = t.krispModuleLoaded, eb = t.goLiveContext;
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
let {
  enabled: t
} = e, n = tu({
  openH264: t
});
eR.setH264Enabled(n.hardwareEncoding || n.openH264), eR.eachConnection(e => {
  var t;
  return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
});
  },
  MEDIA_ENGINE_SET_HARDWARE_ENCODING: function(e) {
var t, n;
let {
  enabled: r
} = e, i = tu({
  hardwareEncoding: r
});
eR.eachConnection(e => {
  var t;
  return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
}), eR.setH264Enabled(i.hardwareEncoding || i.openH264), eR.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t), eR.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
  },
  APP_STATE_UPDATE: function(e) {
let {
  state: t
} = e, n = L.Z.isEnabled();
if (t === ef.$7l.BACKGROUND && eB && !n)
  eZ = !0, tn(!1);
else {
  if (t !== ef.$7l.ACTIVE || !eZ)
    return !1;
  eZ = !1, tn(!0);
}
return !0;
  },
  SET_CHANNEL_BITRATE: function(e) {
eR.eachConnection(t => t.setBitRate(e.bitrate));
  },
  SET_VAD_PERMISSION: function(e) {
let {
  hasPermission: t
} = e, n = !t;
if (n === eG)
  return !1;
eG = n, eR.eachConnection(tt);
  },
  SET_NATIVE_PERMISSION: function(e) {
let {
  state: t,
  permissionType: n
} = e, r = t === ep.PQ.ACCEPTED;
switch (n) {
  case ep.Eu.AUDIO:
    e0 = !0, eR.eachConnection(tt);
    break;
  case ep.Eu.CAMERA:
    !r && eB && tn(!1);
    break;
  default:
    return !1;
}
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
eR.eachConnection(t => t.applyVideoQualityMode(e.mode));
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
let {
  enabled: t
} = e, n = tu({
  aecDumpEnabled: t
});
eR.setAecDump(n.aecDumpEnabled);
  },
  CHANNEL_DELETE: function() {
if (!eB && null == a || null != ed.Z.getRTCConnectionId())
  return !1;
tn(!1, null);
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
return !!e$ && (e$ = !1, !0);
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
let {
  settings: t
} = e;
eR.applyMediaFilterSettings(t).finally(() => {
  eJ = !1, r.emitChange();
});
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
eJ = !0;
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
eJ = !1;
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
let {
  settings: {
    type: t
  },
  local: n,
  wasSaved: r
} = e;
if (!(0, Q.R)() || t !== em.yP.PRELOADED_USER_SETTINGS || n || null != r)
  return !1;
tf(!0);
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
}), o = O.Z.getSettings().decoupledClipsEnabled;
if (!a || !o || null == S.Z)
  return;
let l = null,
  u = null,
  c = ee.Z.getPidFromDesktopSource(t);
({
  soundshareId: l,
  soundshareSession: u
} = th(c));
let d = {
  desktopSource: {
    id: t,
    sourcePid: c,
    soundshareId: l,
    soundshareSession: u
  },
  quality: i
};
null != s && s.desktopSource.id !== d.desktopSource.id && (eR.setClipsSource(null), (0, en.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)), null != l && tp(l, u), s = d;
let {
  hdrCaptureMode: _
} = B.Z.getCurrentConfig({
  location: 'f627ab_12'
}, {
  autoTrackExposure: !1
}), E = e8().videoHook;
eR.setClipsSource({
  desktopDescription: {
    id: s.desktopSource.id,
    soundshareId: s.desktopSource.soundshareId,
    useVideoHook: E,
    useGraphicsCapture: ta(),
    useLoopback: r.getExperimentalSoundshare(),
    useQuartzCapturer: !0,
    allowScreenCaptureKit: ts(),
    videoHookStaleFrameTimeoutMs: 500,
    graphicsCaptureStaleFrameTimeoutMs: ev,
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
!1 === t.decoupledClipsEnabled && (s = null, eR.setClipsSource(null));
  }
}), t.Z = r;