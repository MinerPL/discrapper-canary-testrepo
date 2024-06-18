"use strict";
let i, r, s, o;
n(47120), n(724458), n(773603), n(653041), n(337869);
var a, l, u, _ = n(512722),
  d = n.n(_),
  c = n(392711),
  E = n.n(c),
  I = n(553813),
  T = n.n(I),
  h = n(442837),
  S = n(46973),
  f = n(433517),
  N = n(846519),
  A = n(570140),
  m = n(579806),
  O = n(887278),
  R = n(547727),
  C = n(565885),
  p = n(435064),
  g = n(779618),
  L = n(710845),
  v = n(811660),
  D = n(353926),
  M = n(646047),
  P = n(594190),
  y = n(502286),
  U = n(248062),
  b = n(227196),
  G = n(294473),
  w = n(706629),
  k = n(926951),
  B = n(836157),
  x = n(498600),
  V = n(631610),
  Z = n(951958),
  H = n(529558),
  F = n(874785),
  Y = n(636458),
  j = n(441167),
  W = n(338336),
  K = n(751571),
  z = n(815016),
  q = n(725380),
  X = n(581883),
  Q = n(626135),
  J = n(12647),
  $ = n(70956),
  ee = n(358085),
  et = n(960048),
  en = n(998502),
  ei = n(13140),
  er = n(314897),
  es = n(967368),
  eo = n(463395),
  ea = n(592125),
  el = n(858340),
  eu = n(19780),
  e_ = n(631768),
  ed = n(981631),
  ec = n(70722),
  eE = n(761274),
  eI = n(526761),
  eT = n(65154),
  eh = n(689938);

function eS(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let ef = new L.Z("MediaEngineStore");
(u = a || (a = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE";
let eN = "MediaEngineStore",
  eA = {
    left: 1,
    right: 1
  },
  em = 5 * $.Z.Millis.SECOND;

function eO() {
  return {
    mode: ed.pM4.VOICE_ACTIVITY,
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
    silenceWarning: !0,
    attenuation: 0,
    attenuateWhileSpeakingSelf: !1,
    attenuateWhileSpeakingOthers: !0,
    localMutes: {},
    disabledLocalVideos: {},
    videoToggleStateMap: {},
    localVolumes: {},
    localPans: {},
    inputVolume: eT.Qx,
    outputVolume: eT.Qx,
    inputDeviceId: eT.w5,
    outputDeviceId: eT.w5,
    videoDeviceId: eT.w5,
    qos: !1,
    qosMigrated: !1,
    videoHook: eR.supports(eT.AN.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  }
}
let eR = (0, S.Mt)((0, S.jj)()),
  eC = {},
  ep = new Set([eT.Yn.DEFAULT]),
  eg = eR.supports(eT.AN.AUTO_ENABLE),
  eL = !1,
  ev = eT.Yn.STREAM,
  eD = {
    [eT.w5]: ta(eh.Z.Messages.NO_INPUT_DEVICES)
  },
  eM = {
    [eT.w5]: ta(eh.Z.Messages.NO_OUTPUT_DEVICES)
  },
  eP = {
    [eT.w5]: ta(eh.Z.Messages.NO_VIDEO_DEVICES)
  },
  ey = !1,
  eU = !1,
  eb = !1,
  eG = !1,
  ew = !1,
  ek = eT.Av,
  eB = !1,
  ex = !1,
  eV = !1,
  eZ = !1,
  eH = null,
  eF = !1,
  eY = !1,
  ej = !1,
  eW = !1,
  eK = !1,
  ez = null,
  eq = !1,
  eX = !1,
  eQ = !1;
K.Z.hasPermission(eE.Eu.AUDIO, {
  showAuthorizationError: !1
}), K.Z.hasPermission(eE.Eu.CAMERA, {
  showAuthorizationError: !1
});
let eJ = new Set,
  e$ = !1,
  e0 = !1,
  e1 = {},
  e2 = {},
  e3 = 5 * $.Z.Millis.SECOND;

function e4() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
    t = eC[e];
  return null == t && (t = eO(), eC[e] = t), t
}

function e7(e) {
  let t = e4(e.context);
  e.setInputMode(t.mode, {
    vadThreshold: t.modeOptions.threshold,
    vadAutoThreshold: t.modeOptions.autoThreshold,
    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
      return eK || !1
    }(),
    vadLeading: t.modeOptions.vadLeading,
    vadTrailing: t.modeOptions.vadTrailing,
    pttReleaseDelay: t.modeOptions.delay
  })
}

function e6(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Qx;
  return E().clamp(e, 0, t)
}

function e5(e) {
  let t = e4(e.context),
    n = !eg || t.mute || t.deaf;
  e.context === eT.Yn.DEFAULT ? n = n || ey || eU || eb || !K.Z.didHavePermission(eE.Eu.AUDIO) : e.context === eT.Yn.STREAM && (n = !0), e.setSelfMute(n), e.setSelfDeaf(t.deaf), e.context === eT.Yn.DEFAULT && R.Z.updateNativeMute()
}

function e8() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ew,
    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
    a = s;
  if ((null == a ? void 0 : a.desktopSource) != null && a.desktopSource.id !== (null == o ? void 0 : null === (e = o.desktopSource) || void 0 === e ? void 0 : e.id) && (null != a.desktopSource.soundshareId && (0, ee.isWindows)() && O.pn(a.desktopSource.soundshareId), eR.setGoLiveSource(null, ev)), (null == a ? void 0 : a.cameraSource) != null && (a.cameraSource.videoDeviceGuid !== (null == o ? void 0 : null === (t = o.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || a.cameraSource.audioDeviceGuid !== (null == o ? void 0 : null === (n = o.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eR.setGoLiveSource(null, ev), (ew || r) && (ek = (ew = r) ? tu(eP, e4().videoDeviceId) : eT.Av, eR.setVideoInputDevice(ek)), s = o, null != o) {
    let e = {
      resolution: o.quality.resolution,
      frameRate: o.quality.frameRate
    };
    if (null != o.desktopSource) {
      let {
        hdrCaptureMode: t
      } = x.Z.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), n = e4().videoHook;
      eR.setGoLiveSource({
        desktopDescription: {
          id: o.desktopSource.id,
          soundshareId: o.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: tt(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: !0,
          allowScreenCaptureKit: tn(),
          videoHookStaleFrameTimeoutMs: 500,
          graphicsCaptureStaleFrameTimeoutMs: em,
          hdrCaptureMode: t
        },
        quality: e
      }, ev)
    }
    null != o.cameraSource && eR.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: o.cameraSource.videoDeviceGuid,
        audioDeviceGuid: o.cameraSource.audioDeviceGuid
      },
      quality: e
    }, ev)
  }
}

function e9(e, t, n, i) {
  var r;
  let s = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e2[s] && (e2[s] = new Set);
  let o = null != t && !e2[s].has(t);
  o && e2[s].add(t), (null == t || o) && Q.default.track(ed.rMx.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, y.Z)(e)
  })
}

function te(e) {
  let t = e4(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(eo.Z.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(eo.Z.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(eo.Z.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, ee.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function tt() {
  return (0, ee.isWindows)() && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, ec.nz)
}

function tn() {
  return (0, ee.isMac)() && eR.supports(eT.AN.SCREEN_CAPTURE_KIT) && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, ec.C7)
}

function ti() {
  return k.Z.supportsSimulcast()
}
let tr = new class {
  start() {
    !this.started && (this.started = !0, eR.on(S.aB.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eR.removeListener(S.aB.Silence, this.handleSilence), A.Z.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e4();
    !eF && eu.Z.getState() === ed.hes.RTC_CONNECTED && e.mode === ed.pM4.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    eS(this, "stateChangeTimeout", void 0), eS(this, "noVoiceTimeout", 5e3), eS(this, "voiceTimeout", 1500), eS(this, "started", !1), eS(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (A.Z.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (eY = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function ts(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e4(t);
  return Object.assign(i, e), !__OVERLAY__ && n && f.K.set(eN, eC), i
}

function to() {
  !eg && eR.enable().then(() => A.Z.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function ta(e) {
  return {
    id: eT.w5,
    index: 0,
    name: e,
    disabled: !0
  }
}

function tl(e, t) {
  if (0 === e.length) {
    let e = ta(t);
    return {
      [e.id]: e
    }
  }
  return E()(e).map(e => ({
    id: e.id,
    index: e.index,
    name: e.name,
    disabled: !1
  })).keyBy("id").value()
}

function tu(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
  return null != i ? i.id : t
}

function t_() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = X.Z.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === eI.u0.USER ? eT.Yn.DEFAULT : eT.Yn.STREAM,
      s = r === eT.Yn.STREAM ? eT.Yh : eT.Qx,
      o = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: a,
        localVolumes: l
      } = e4(r);
    for (let [e, t] of Object.entries(o)) null == (0, q.Ky)(r, e) && (t.muted ? a[e] = !0 : delete a[e], t.volume !== s ? l[e] = t.volume : delete l[e], eR.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r));
    if (n)
      for (let e of new Set([...Object.keys(a), ...Object.keys(l)])) null == o[e] && (delete a[e], delete l[e], eR.eachConnection(t => {
        t.setLocalVolume(e, s), t.setLocalMute(e, !1)
      }, r));
    ts({
      localMutes: a,
      localVolumes: l
    }, r)
  }
}

function td(e) {
  if (null == i) return ef.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = i.getExperimentalSoundshare() ? e : J.Z.getAudioPid(e),
      n = "";
    return null != t && (n = J.Z.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function tc(e, t) {
  (0, ee.isWindows)() && O.YT(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !P.ZP.shouldContinueWithoutElevatedProcessForPID(e) && A.Z.wait(() => {
      A.Z.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tE() {
  let e = eT.Yn.DEFAULT,
    {
      videoToggleStateMap: t
    } = e4(e);
  for (let [e, n] of Object.entries(t)) n === ed.ZUi.AUTO_PROBING && delete t[e];
  ts({
    videoToggleStateMap: t
  }, e, !1)
}

function tI(e) {
  let t = e4();
  Q.default.track(ed.rMx.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function tT() {
  let e = e4(),
    t = e.inputDeviceId,
    n = eo.Z.hasEchoCancellation(t) || e.echoCancellation,
    i = eo.Z.hasNoiseSuppression(t) || e.noiseSuppression,
    r = eo.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
    s = e.noiseCancellation;
  eR.setLoopback(e0, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: s
  })
}

function th() {
  return eK || !1
}
async function tS() {
  try {
    await en.ZP.ensureModule("discord_krisp"), en.ZP.requireModule("discord_krisp"), eK = !0, i.emitChange()
  } catch (t) {
    ef.warn("Failed to load Krisp module: ".concat(t.message)), et.Z.captureException(t);
    let e = eT.H3.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eT.H3.INITIALIZED : n
    }
    Q.default.track(ed.rMx.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), ts({
      noiseCancellation: !1
    })
  } finally {
    eW = !1
  }
}

function tf(e) {
  let {
    section: t
  } = e;
  return t === ed.oAB.VOICE && to(), !1
}
class tN extends(l = h.ZP.Store) {
  initialize() {
    eR.on(S.aB.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = Z.Z.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && eR.setMaxSyncDelayOverride(t), e7(e), e5(e), te(e);
      let n = e4();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: r
      } = Y.Z.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      r && e.setExperimentFlag(eT.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
      let o = eu.Z.getGuildId(),
        {
          muteBeforeProcessing: a,
          pttBeforeProcessing: l,
          skipEncode: u
        } = (null != o ? w.Z : G.Z).getCurrentConfig({
          location: "setupMediaEngine",
          ...null != o && {
            guildId: o
          }
        }, {
          autoTrackExposure: !0
        });
      a && e.setExperimentFlag(eT.V8.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eT.V8.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eT.V8.SKIP_ENCODE, !0);
      let {
        resetOnErrors: _,
        fallbackOnErrors: d,
        fallbackOnConsecutiveErrors: c
      } = F.Z.getCurrentConfig({
        location: "setupMediaEngine"
      }, {
        autoTrackExposure: !0
      });
      _ && e.setExperimentFlag(eT.V8.RESET_DECODER_ON_ERRORS, !0), d && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0), c && e.setExperimentFlag(eT.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
      e.context === eT.Yn.STREAM && ti() && e.setExperimentFlag(eT.V8.GOLIVE_SIMULCAST, !0);
      let {
        signalAV1Support: E
      } = U.Z.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      E && e.setExperimentFlag(eT.V8.SIGNAL_AV1_SUPPORT, !0), (0, ee.isWindows)() && e.setExperimentFlag(eT.V8.SIGNAL_AV1_HARDWARE_DECODE, !0);
      let {
        allowSettingFullbandAndroid: I
      } = V.Z.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (I && eR.setHasFullbandPerformance((0, v.b)()), e.setRemoteAudioHistory(0), (0, g.Z)(i)) {
        let t = p.Z.getSettings();
        e.setExperimentFlag(eT.V8.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = j.Z.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eT.ux);
        let {
          allowQualityDecoupling: i
        } = C.Z.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        e.setQualityDecoupling(i)
      }
      for (let t of (n = e4(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== er.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== er.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
      for (let t of Object.keys(n.localPans)) {
        let i = n.localPans[t];
        e.setLocalPan(t, i.left, i.right)
      }
      for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
      e.on(S.Sh.Speaking, (t, n) => {
        A.Z.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === eT.Yn.DEFAULT && (ex = !1, e.on(S.Sh.SpeakingWhileMuted, () => {
        ex = !0, i.emitChange()
      })), e.on(S.Sh.DesktopSourceEnd, () => {
        A.Z.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(S.Sh.SoundshareAttached, () => {
        (null == s ? void 0 : s.desktopSource) != null && Q.default.track(ed.rMx.SOUNDSHARE_ATTACHED, (0, y.Z)(null == s ? void 0 : s.desktopSource))
      }), e.on(S.Sh.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        e9(null == s ? void 0 : s.desktopSource, t, n, i)
      }), e.on(S.Sh.SoundshareSpeaking, () => {
        (null == s ? void 0 : s.desktopSource) != null && (Q.default.track(ed.rMx.SOUNDSHARE_TRANSMITTING, (0, y.Z)(null == s ? void 0 : s.desktopSource)), null != el.Z.getHookError(ed.K3D.SOUND) && A.Z.wait(() => A.Z.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let T = new N.V7;
      e.on(S.Sh.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            T.start(e3, () => {
              A.Z.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed"
              })
            });
            break;
          case "soundshare_recv_failed":
            let t = e.reason,
              n = e.code,
              i = e.retry;
            (null == s ? void 0 : s.desktopSource) != null && (e9(null == s ? void 0 : s.desktopSource, n, t, i), !i && (T.stop(), A.Z.wait(() => A.Z.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
              errorMessage: t,
              errorCode: n
            }))));
            break;
          case "soundshare_state_transition":
            4 === e.newState && (T.stop(), A.Z.wait(() => A.Z.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
            })))
        }
      }), e.on(S.Sh.InteractionRequired, e => {
        A.Z.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(S.Sh.VideoHookInitialize, (e, t, n, i, r, o) => {
        (null == s ? void 0 : s.desktopSource) != null && Q.default.track(ed.rMx.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: o,
          ...(0, y.Z)(null == s ? void 0 : s.desktopSource)
        })
      }), e.on(S.Sh.NoiseCancellationError, e => {
        ef.warn("noisecancellererror event: ".concat(e)), eq = !0, Q.default.track(ed.rMx.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), A.Z.dispatch({
          type: "AUDIO_SET_NOISE_SUPPRESSION",
          enabled: !0
        }), A.Z.dispatch({
          type: "AUDIO_SET_NOISE_CANCELLATION",
          enabled: !1
        }), A.Z.dispatch({
          type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
          code: e
        })
      }), e.on(S.Sh.VoiceActivityDetectorError, e => {
        ef.warn("voiceactivitydetectorerror event: ".concat(e)), Q.default.track(ed.rMx.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), A.Z.dispatch({
          type: "AUDIO_SET_MODE",
          context: eT.Yn.DEFAULT,
          mode: ed.pM4.VOICE_ACTIVITY,
          options: {
            ...e4(eT.Yn.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), A.Z.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(S.Sh.VideoState, t => {
        A.Z.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(S.Sh.Destroy, () => {
        T.stop()
      }), e.setBitRate(es.Z.bitrate), e.applyVideoQualityMode(e_.Z.mode)
    }), eR.on(S.aB.DeviceChange, (e, t, n) => {
      A.Z.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eR.on(S.aB.VolumeChange, (e, t) => {
      A.Z.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eR.on(S.aB.DesktopSourceEnd, () => {
      A.Z.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eR.on(S.aB.AudioPermission, e => {
      eQ = !0, A.Z.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eR.on(S.aB.VideoPermission, e => {
      A.Z.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eR.on(S.aB.WatchdogTimeout, async () => {
      let e;
      try {
        await J.Z.submitLiveCrashReport({
          message: {
            message: "Voice Watchdog Timeout"
          }
        })
      } catch (t) {
        "number" == typeof t.status && (e = t.status)
      }
      ef.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), Q.default.track(ed.rMx.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eR.on(S.aB.VideoInputInitialized, e => {
      Q.default.track(ed.rMx.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * $.Z.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eR.on(S.aB.ClipsRecordingRestartNeeded, () => {
      A.Z.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eR.on(S.aB.ClipsInitFailure, (e, t) => {
      A.Z.wait(() => {
        A.Z.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eR.on(S.aB.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == o ? void 0 : null === (n = o.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == s ? void 0 : null === (i = s.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && O.pn(t), o = null)
    }), tr.reset(), ! function() {
      var e;
      let t = f.K.get("audio");
      null != t && (f.K.set(eN, {
          [eT.Yn.DEFAULT]: t
        }), f.K.remove("audio")), eC = null !== (e = f.K.get(eN)) && void 0 !== e ? e : {}, E().each(eC, e => {
          if (E().defaultsDeep(e, eO()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ei.Kd)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, ee.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
        }),
        function() {
          let e = e4();
          eR.setAudioInputDevice(e.inputDeviceId), eR.setAudioOutputDevice(e.outputDeviceId), e8(), eR.setInputVolume(e.inputVolume), eR.setOutputVolume(e.outputVolume), eR.setH264Enabled(e.openH264), eR.setAv1Enabled(e.hardwareH264), eR.setH265Enabled(e.hardwareH264), eR.setAecDump(e.aecDumpEnabled)
        }()
    }(), ((0, ee.isWindows)() || (0, ee.isLinux)() || (0, ee.isMac)() && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, ">=21.0.0")) && !__OVERLAY__ && !eW && !eK ? (eW = !0, tS()) : (0, ee.isWeb)() && eR.supports(eT.AN.NOISE_CANCELLATION) ? (eK = !0, i.emitChange()) : (0, ee.isWeb)() && ts({
      noiseCancellation: !1
    }), tE(), e1 = {
      [eT.AN.VIDEO]: eR.supports(eT.AN.VIDEO),
      [eT.AN.DESKTOP_CAPTURE]: eR.supports(eT.AN.DESKTOP_CAPTURE),
      [eT.AN.HYBRID_VIDEO]: eR.supports(eT.AN.HYBRID_VIDEO)
    }, this.waitFor(er.default, eo.Z, ea.Z, el.Z, eu.Z, P.ZP, K.Z.storage, X.Z, D.Z, p.Z)
  }
  supports(e) {
    return eR.supports(e)
  }
  supportsInApp(e) {
    return e1[e] || eR.supports(e)
  }
  isSupported() {
    return eR.supported()
  }
  isExperimentalEncodersSupported() {
    return eR.supports(eT.AN.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eR.supports(eT.AN.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return eK || !1
  }
  isNoiseCancellationError() {
    return eq
  }
  isAutomaticGainControlSupported() {
    return eR.supports(eT.AN.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return eK || !1
  }
  isAecDumpSupported() {
    return eR.supports(eT.AN.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eR.supports(eT.AN.VIDEO) && eR.supports(eT.AN.SIMULCAST)
  }
  getAecDump() {
    return e4().aecDumpEnabled
  }
  getMediaEngine() {
    return eR
  }
  getVideoComponent() {
    return eR.supports(eT.AN.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Video
  }
  getCameraComponent() {
    return eR.supports(eT.AN.DIRECT_VIDEO) && eR.setUseDirectVideo(!0), eR.Camera
  }
  isEnabled() {
    return eg
  }
  isMute() {
    return this.isSelfMute() || ey
  }
  isDeaf() {
    return this.isSelfDeaf() || eG
  }
  hasContext(e) {
    return null != eC[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
    return e === eT.Yn.DEFAULT && eU
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
    return !this.isEnabled() || e4(e).mute || !K.Z.didHavePermission(eE.Eu.AUDIO) || this.isSelfDeaf(e) || e === eT.Yn.DEFAULT && eb
  }
  shouldSkipMuteUnmuteSound() {
    let {
      airpodsMuteSupported: e
    } = b.Z.getCurrentConfig({
      location: "shouldSkipMuteUnmuteSound"
    }, {
      autoTrackExposure: !0
    });
    return !!e && eB
  }
  notifyMuteUnmuteSoundWasSkipped() {
    eB = !1
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.Z.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
    return !this.isSupported() || e4(e).deaf
  }
  isVideoEnabled() {
    return ew && eZ
  }
  isVideoAvailable() {
    return Object.values(eP).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.STREAM;
    return ev === e && null != s
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.STREAM;
    return ev === t && null != s && (null === (e = s.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return e !== er.default.getId() && (e4(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eR.supports(eT.AN.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return null !== (t = e4(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return null !== (t = e4(n).videoToggleStateMap[e]) && void 0 !== t ? t : ed.ZUi.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT;
    return t === eT.Yn.DEFAULT && eJ.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
    return e === eT.Yn.DEFAULT && eJ.size > 0
  }
  isMediaFilterSettingLoading() {
    return eX
  }
  isNativeAudioPermissionReady() {
    return eQ
  }
  getGoLiveSource() {
    return s
  }
  getGoLiveContext() {
    return ev
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
      n = e4(t).localPans[e];
    return null != n ? n : eA
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eT.Yn.DEFAULT,
      n = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
      i = e4(t).localVolumes[e];
    return null != i ? i : n
  }
  getInputVolume() {
    return e4().inputVolume
  }
  getOutputVolume() {
    return e4().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
    return e4(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
    return e4(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return E().each(eC, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === ed.pM4.PUSH_TO_TALK && ep.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return tu(eD, e4().inputDeviceId)
  }
  getOutputDeviceId() {
    return tu(eM, e4().outputDeviceId)
  }
  getVideoDeviceId() {
    return tu(eP, e4().videoDeviceId)
  }
  getInputDevices() {
    return eD
  }
  getOutputDevices() {
    return eM
  }
  getVideoDevices() {
    return eP
  }
  getEchoCancellation() {
    let e = e4();
    return eo.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e4().h265Enabled
  }
  getLoopback() {
    return eR.getLoopback()
  }
  getNoiseSuppression() {
    let e = e4();
    return eo.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e4();
    return eo.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getNoiseCancellation() {
    return e4().noiseCancellation
  }
  getExperimentalEncoders() {
    return e4().experimentalEncoders
  }
  getHardwareH264() {
    return e4().hardwareH264
  }
  getEnableSilenceWarning() {
    return e4().silenceWarning
  }
  getDebugLogging() {
    return eR.getDebugLogging()
  }
  getQoS() {
    return e4().qos
  }
  getAttenuation() {
    return e4().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return e4().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return e4().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return eR.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT;
    return e4(e)
  }
  getState() {
    return {
      settingsByContext: eC,
      inputDevices: eD,
      outputDevices: eM,
      appSupported: e1,
      krispModuleLoaded: eK,
      goLiveSource: s,
      goLiveContext: ev
    }
  }
  getInputDetected() {
    return eH
  }
  getNoInputDetectedNotice() {
    return eY
  }
  getPacketDelay() {
    return ee.isPlatformEmbedded || this.getMode() !== ed.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eR.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eL
  }
  getVideoHook() {
    return e4().videoHook
  }
  supportsVideoHook() {
    return eR.supports(eT.AN.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e4().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eR.supports(eT.AN.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, ec.I9)
  }
  getOpenH264() {
    return e4().openH264
  }
  getEverSpeakingWhileMuted() {
    return ex
  }
  supportsScreenSoundshare() {
    return (0, ee.isMac)() && eR.supports(eT.AN.SOUNDSHARE) && T().satisfies(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release, ec.yG) && tn() || (0, ee.isWindows)() && eR.supports(eT.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.Yn.DEFAULT,
      t = this.supports(eT.AN.VIDEO) ? [{
        rid: "100",
        type: e === eT.Yn.DEFAULT ? eT.Tr.VIDEO : eT.Tr.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && (e === eT.Yn.DEFAULT || ti()) && t.push({
      rid: "50",
      type: e === eT.Yn.DEFAULT ? eT.Tr.VIDEO : eT.Tr.SCREEN,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    var t;
    let n = eR.getSupportedSecureFramesProtocolVersion(),
      i = H.m.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      r = null != e ? H.N.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      s = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
      o = i.canSupportMls || (null == r ? void 0 : r.canSupportMls),
      a = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0);
    return s && n % 100 >= a ? o ? n : n % 100 : 0
  }
  hasClipsSource() {
    return null != o
  }
}
eS(tN, "displayName", "MediaEngineStore"), i = new tN(A.Z, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: r
    } = e;
    if (i !== n && e8(r, null), null != t || null == n) {
      ej = !1;
      return
    }
    if (ej) return;
    ej = !0;
    let s = e4();
    (s.mute || s.deaf) && (ts({
      deaf: !1,
      mute: !1
    }), eR.eachConnection(e5))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => r === t.sessionId ? (ey = t.mute || t.suppress, eG = t.deaf, eR.eachConnection(e5), e8(!(null != t.guildId && null != t.channelId && null != ez && ez !== t.channelId) && ew), ez = t.channelId, !0) : (!__OVERLAY__ && t.userId === er.default.getId() && null == eu.Z.getChannelId() && e8(!1, null), e), !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, ey = !1, eG = !1, (0, z.R)() && t_()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case ed.hes.CONNECTING:
        to();
        break;
      case ed.hes.RTC_CONNECTING:
        eF = !1, eY = !1;
        break;
      case ed.hes.RTC_CONNECTED:
        e8();
        break;
      case ed.hes.DISCONNECTED:
        (function() {
          if (0 === eJ.size) return;
          let e = eT.Yn.DEFAULT,
            {
              disabledLocalVideos: t
            } = e4(e);
          eJ.forEach(n => {
            d()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eR.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), eJ.clear(), ts({
            disabledLocalVideos: t
          }, e, !1)
        })(), tE()
    }
    tr.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    eU = t, eR.eachConnection(e5)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t,
      skipMuteUnmuteSoundEffect: n
    } = e, {
      mute: i,
      deaf: r
    } = e4(t);
    if (t === eT.Yn.DEFAULT && (K.Z.requestPermission(eE.Eu.AUDIO), eb)) return !1;
    !(i = !r && !i) && (r = !1), n && (eB = !0), ts({
      mute: i,
      deaf: r
    }, t), eR.eachConnection(e5)
  },
  AUDIO_SET_SELF_MUTE: function(e) {
    let {
      context: t,
      mute: n
    } = e;
    ts({
      mute: n
    }, t), eR.eachConnection(e5)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e;
    ts({
      deaf: !e4(t).deaf
    }, t), eR.eachConnection(e5)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === er.default.getId()) return;
    let {
      localMutes: i
    } = e4(t);
    i[n] ? delete i[n] : i[n] = !0, ts({
      localMutes: i
    }, t), eR.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    var t, n, i, r, s, o, a;
    let {
      context: l,
      userId: u,
      videoToggleState: _,
      persist: c,
      isAutomatic: E
    } = e;
    d()(!(c && E), "These are not allowed to both be true.");
    let I = _ === ed.ZUi.DISABLED,
      {
        disabledLocalVideos: T
      } = e4(l),
      h = null !== (t = T[u]) && void 0 !== t && t,
      S = eJ.has(u),
      f = _ === ed.ZUi.AUTO_ENABLED || _ === ed.ZUi.MANUAL_ENABLED;
    ef.info("disableVideo=".concat(I, " currentlyDisabled=").concat(h, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(f)), d()(!(S && !h), "If you are auto-disabled, then you are also disabled.");
    let N = I !== h,
      A = l === eT.Yn.DEFAULT,
      m = E && N && A,
      O = c && N && A;
    ef.info("changed=".concat(N, " isDefaultContext=").concat(A, " isUpdateCausedByVideoHealthManager=").concat(m, " isManualToggleByUser=").concat(O));
    let {
      videoToggleStateMap: R
    } = e4(l);
    if (R[u] === ed.ZUi.AUTO_PROBING && _ === ed.ZUi.AUTO_ENABLED && (0, W.Z)(u, I ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, f), R[u] = _, ts({
        videoToggleStateMap: R
      }, l, c), _ === ed.ZUi.AUTO_PROBING ? null === (n = eu.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = eu.Z.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e$ && (ef.info("isAutoDisableAllowed=".concat(e$, " - disabling VideoHealthManager")), null === (s = eu.Z.getRTCConnection()) || void 0 === s || null === (r = s.getVideoHealthManager()) || void 0 === r || r.disable()), m) {
      if (!I && !S || I && !e$) return;
      (0, W.Z)(u, I ? eT.fC.AUTO_DISABLE : eT.fC.AUTO_ENABLE, f), I ? eJ.add(u) : eJ.delete(u)
    } else O && (S && !I ? (ef.info("disallowing auto-disable for this session because of manual override by user"), e$ = !1, null === (a = eu.Z.getRTCConnection()) || void 0 === a || null === (o = a.getVideoHealthManager()) || void 0 === o || o.disable(), (0, W.Z)(u, eT.fC.MANUAL_REENABLE, f)) : (0, W.Z)(u, I ? eT.fC.MANUAL_DISABLE : eT.fC.MANUAL_ENABLE, f));
    A && !I && eJ.delete(u), I ? T[u] = !0 : delete T[u], ts({
      disabledLocalVideos: T
    }, l, c), eR.eachConnection(e => {
      var t;
      return e.setLocalVideoDisabled(u, null !== (t = T[u]) && void 0 !== t && t)
    }, l)
  },
  AUDIO_SET_LOCAL_VOLUME: function(e) {
    let {
      context: t,
      userId: n,
      volume: i
    } = e;
    if (n === er.default.getId()) return;
    let r = t === eT.Yn.STREAM ? eT.Yh : eT.Qx,
      {
        localVolumes: s
      } = e4(t);
    i === r ? delete s[n] : s[n] = i, ts({
      localVolumes: s
    }, t), eR.eachConnection(e => e.setLocalVolume(n, i), t)
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
    let {
      context: t,
      userId: n,
      left: i,
      right: r
    } = e, {
      localPans: s
    } = e4(t);
    s[n] = {
      left: i,
      right: r
    }, ts({
      localPans: s
    }, t), eR.eachConnection(e => e.setLocalPan(n, i, r), t)
  },
  AUDIO_SET_MODE: function(e) {
    let {
      context: t,
      mode: n,
      options: i
    } = e;
    ts({
      mode: n,
      modeOptions: i
    }, t), eR.eachConnection(e7), tr.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ts({
      inputVolume: e6(t)
    }), eR.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    ts({
      outputVolume: t
    }), eR.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      inputDeviceId: t = tu(eD, t)
    }), eR.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      outputDeviceId: t = tu(eM, t)
    }), eR.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = ts({
      echoCancellation: e.enabled
    });
    eR.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), tT(), tI(e.location)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e0 = t, tT()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = ts({
      noiseSuppression: e.enabled
    });
    eR.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), tT(), tI(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = ts({
      automaticGainControl: e.enabled
    });
    eR.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), tT(), tI(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = ts({
      noiseCancellation: e.enabled
    });
    eR.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), tT(), tI(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    ts({
      silenceWarning: e.enabled
    }), tr.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eR.setDebugLogging(e.enabled)
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
    ts({
      videoHook: e.enabled
    })
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
    ts({
      experimentalSoundshare2: e.enabled
    })
  },
  AUDIO_SET_ATTENUATION: function(e) {
    let {
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    } = e, r = ts({
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    });
    eR.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    ts({
      qos: t
    }), eR.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eD;
      if (eD = tl(e, eh.Z.Messages.NO_INPUT_DEVICES), !E().isEqual(eD, t)) {
        let e = e4(),
          t = tu(eD, e.inputDeviceId);
        eR.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eM;
      if (eM = tl(e, eh.Z.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eM, t)) {
        let e = e4(),
          t = tu(eM, e.outputDeviceId);
        eR.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      eZ = e.length > 0;
      let t = eP;
      if (eP = tl(e, eh.Z.Messages.NO_VIDEO_DEVICES), ew && !E().isEqual(eP, t)) {
        var n;
        let e = void 0 !== eP[ek],
          i = ek === eT.w5 && (null === (n = t[eT.w5]) || void 0 === n ? void 0 : n.disabled);
        e8(e || i)
      }
    }(i)
  },
  AUDIO_VOLUME_CHANGE: function(e) {
    let {
      inputVolume: t,
      outputVolume: n
    } = e;
    ts({
      inputVolume: e6(t),
      outputVolume: n
    })
  },
  AUDIO_RESET: function() {
    f.K.remove(eN), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eH = t, !eF && eH && (eF = !0, tr.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eR.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eg = e.enabled, e.unmute && ts({
      mute: !1,
      deaf: !1
    }), eR.eachConnection(e5)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    K.Z.requestPermission(eE.Eu.CAMERA), e8(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eg = !1, eR.eachConnection(e5);
        break;
      case "video":
        e8(!1)
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    var t, n, i, r;
    let {
      settings: o
    } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
      let e = null,
        i = null,
        {
          sourceId: r,
          sound: a
        } = o.desktopSettings,
        l = null !== (t = o.context) && void 0 !== t ? t : eT.Yn.DEFAULT,
        u = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        _ = J.Z.getPidFromDesktopSource(r);
      ee.isPlatformEmbedded && !0 === a && ({
        soundshareId: e,
        soundshareSession: i
      } = td(_), null != e && tc(e, i)), ! function(e) {
        if (e !== ev) null != s && eR.setGoLiveSource(null, ev), ev = e
      }(l), e8(l === eT.Yn.STREAM && ew, {
        desktopSource: {
          id: r,
          sourcePid: _,
          soundshareId: e,
          soundshareSession: i
        },
        quality: {
          resolution: u.resolution,
          frameRate: u.frameRate
        }
      })
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
      let e = null !== (i = o.context) && void 0 !== i ? i : eT.Yn.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        s = e === eT.Yn.STREAM && ew,
        a = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
          resolution: 720,
          frameRate: 30
        };
      e8(s, {
        cameraSource: {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        },
        quality: {
          resolution: a.resolution,
          frameRate: a.frameRate
        }
      })
    } else e8(ew, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    ts({
      videoDeviceId: t = tu(eP, t)
    }), e8()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = ts({
      experimentalEncoders: e.enabled
    });
    eR.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eL !== e.required && (eL = e.required, !e.required && eR.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: tf,
  USER_SETTINGS_MODAL_SET_SECTION: tf,
  CERTIFIED_DEVICES_SET: function() {
    return eR.eachConnection(te), !1
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    ep.add(t.id)
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    ep.delete(t.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      mediaEngineState: t
    } = e;
    eC = t.settingsByContext, eD = t.inputDevices, eM = t.outputDevices, e1 = t.appSupported, eK = t.krispModuleLoaded, ev = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      openH264: t
    });
    eR.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      hardwareH264: t
    });
    eR.eachConnection(e => e.setHardwareH264(n.hardwareH264)), eR.setAv1Enabled(n.hardwareH264), eR.setH265Enabled(n.hardwareH264)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = M.Z.isEnabled();
    if (t === ed.$7l.BACKGROUND && ew && !n) eV = !0, e8(!1);
    else {
      if (t !== ed.$7l.ACTIVE || !eV) return !1;
      eV = !1, e8(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eR.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === eb) return !1;
    eb = n, eR.eachConnection(e5)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === eE.PQ.ACCEPTED;
    switch (n) {
      case eE.Eu.AUDIO:
        eQ = !0, eR.eachConnection(e5);
        break;
      case eE.Eu.CAMERA:
        !i && ew && e8(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eR.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = ts({
      aecDumpEnabled: t
    });
    eR.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!ew && null == s || null != eu.Z.getRTCConnectionId()) return !1;
    e8(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!eq && (eq = !1, !0)
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eR.applyMediaFilterSettings(t).finally(() => {
      eX = !1, i.emitChange()
    })
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
    eX = !0
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
    eX = !1
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      local: n,
      wasSaved: i
    } = e;
    if (!(0, z.R)() || t !== eI.yP.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    t_(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: r
    } = e, {
      enableDecoupledGameClipping: s
    } = B.Z.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), a = p.Z.getSettings().decoupledClipsEnabled;
    if (!s || !a || null == m.Z) return;
    let l = null,
      u = null,
      _ = J.Z.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = td(_));
    let d = {
      desktopSource: {
        id: t,
        sourcePid: _,
        soundshareId: l,
        soundshareSession: u
      },
      quality: r
    };
    null != o && o.desktopSource.id !== d.desktopSource.id && (eR.setClipsSource(null), (0, ee.isWindows)() && null != o.desktopSource.soundshareId && O.pn(o.desktopSource.soundshareId)), null != l && tc(l, u), o = d;
    let {
      hdrCaptureMode: c
    } = x.Z.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), E = e4().videoHook;
    eR.setClipsSource({
      desktopDescription: {
        id: o.desktopSource.id,
        soundshareId: o.desktopSource.soundshareId,
        useVideoHook: E,
        useGraphicsCapture: tt(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: !0,
        allowScreenCaptureKit: tn(),
        videoHookStaleFrameTimeoutMs: 500,
        graphicsCaptureStaleFrameTimeoutMs: em,
        hdrCaptureMode: c
      },
      quality: r,
      applicationName: n
    })
  },
  CLIPS_SETTINGS_UPDATE: function(e) {
    let {
      settings: t
    } = e;
    !1 === t.decoupledClipsEnabled && (o = null, eR.setClipsSource(null))
  }
}), t.Z = i