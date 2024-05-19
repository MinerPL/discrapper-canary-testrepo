"use strict";
let i, r, a, s;
n.r(t), n("47120"), n("724458"), n("773603"), n("653041"), n("337869");
var o, l, u, d = n("512722"),
  _ = n.n(d),
  c = n("392711"),
  E = n.n(c),
  I = n("553813"),
  T = n.n(I),
  f = n("442837"),
  S = n("46973"),
  h = n("433517"),
  A = n("846519"),
  m = n("570140"),
  N = n("579806"),
  p = n("887278"),
  O = n("565885"),
  C = n("435064"),
  R = n("779618"),
  g = n("710845"),
  L = n("811660"),
  v = n("646047"),
  D = n("594190"),
  M = n("502286"),
  y = n("869185"),
  P = n("248062"),
  U = n("227196"),
  b = n("294473"),
  G = n("706629"),
  w = n("836157"),
  k = n("166884"),
  B = n("924371"),
  V = n("894180"),
  x = n("86614"),
  F = n("498600"),
  H = n("631610"),
  Y = n("951958"),
  j = n("529558"),
  W = n("874785"),
  K = n("636458"),
  z = n("441167"),
  Z = n("338336"),
  X = n("751571"),
  Q = n("815016"),
  q = n("725380"),
  J = n("581883"),
  $ = n("626135"),
  ee = n("12647"),
  et = n("70956"),
  en = n("358085"),
  ei = n("960048"),
  er = n("998502"),
  ea = n("13140"),
  es = n("314897"),
  eo = n("967368"),
  el = n("463395"),
  eu = n("592125"),
  ed = n("828695"),
  e_ = n("858340"),
  ec = n("19780"),
  eE = n("631768"),
  eI = n("981631"),
  eT = n("70722"),
  ef = n("761274"),
  eS = n("526761"),
  eh = n("65154"),
  eA = n("689938");

function em(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let eN = new g.default("MediaEngineStore");
(u = o || (o = {}))[u.DETACHED = 0] = "DETACHED", u[u.WAITING = 1] = "WAITING", u[u.ATTACHED = 2] = "ATTACHED", u[u.STARTED = 3] = "STARTED", u[u.PLAYING = 4] = "PLAYING", u[u.SILENCE = 5] = "SILENCE";
let ep = "MediaEngineStore",
  eO = {
    left: 1,
    right: 1
  },
  eC = 5 * et.default.Millis.SECOND;

function eR() {
  return {
    mode: eI.InputModes.VOICE_ACTIVITY,
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
    silenceWarning: !0,
    attenuation: 0,
    attenuateWhileSpeakingSelf: !1,
    attenuateWhileSpeakingOthers: !0,
    localMutes: {},
    disabledLocalVideos: {},
    videoToggleStateMap: {},
    localVolumes: {},
    localPans: {},
    inputVolume: eh.DEFAULT_VOLUME,
    outputVolume: eh.DEFAULT_VOLUME,
    inputDeviceId: eh.DEFAULT_DEVICE_ID,
    outputDeviceId: eh.DEFAULT_DEVICE_ID,
    videoDeviceId: eh.DEFAULT_DEVICE_ID,
    qos: !1,
    qosMigrated: !1,
    videoHook: eg.supports(eh.Features.VIDEO_HOOK),
    experimentalSoundshare2: null,
    openH264: !0,
    h265Enabled: !0,
    vadThrehsoldMigrated: !1,
    aecDumpEnabled: !1
  }
}
let eg = (0, S.initializeMediaEngine)((0, S.determineMediaEngine)()),
  eL = {},
  ev = new Set([eh.MediaEngineContextTypes.DEFAULT]),
  eD = eg.supports(eh.Features.AUTO_ENABLE),
  eM = !1,
  ey = eh.MediaEngineContextTypes.STREAM,
  eP = {
    [eh.DEFAULT_DEVICE_ID]: td(eA.default.Messages.NO_INPUT_DEVICES)
  },
  eU = {
    [eh.DEFAULT_DEVICE_ID]: td(eA.default.Messages.NO_OUTPUT_DEVICES)
  },
  eb = {
    [eh.DEFAULT_DEVICE_ID]: td(eA.default.Messages.NO_VIDEO_DEVICES)
  },
  eG = !1,
  ew = !1,
  ek = !1,
  eB = !1,
  eV = !1,
  ex = eh.DISABLED_DEVICE_ID,
  eF = !1,
  eH = !1,
  eY = !1,
  ej = !1,
  eW = null,
  eK = !1,
  ez = !1,
  eZ = !1,
  eX = !1,
  eQ = !1,
  eq = null,
  eJ = !1,
  e$ = !1,
  e0 = !1;
X.default.hasPermission(ef.NativePermissionTypes.AUDIO, {
  showAuthorizationError: !1
}), X.default.hasPermission(ef.NativePermissionTypes.CAMERA, {
  showAuthorizationError: !1
});
let e1 = new Set,
  e2 = !1,
  e3 = !1,
  e4 = {},
  e6 = {},
  e7 = 5 * et.default.Millis.SECOND;

function e5() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT,
    t = eL[e];
  return null == t && (t = eR(), eL[e] = t), t
}

function e8(e) {
  let t = e5(e.context);
  e.setInputMode(t.mode, {
    vadThreshold: t.modeOptions.threshold,
    vadAutoThreshold: t.modeOptions.autoThreshold,
    vadUseKrisp: t.modeOptions.vadUseKrisp && function() {
      return eQ || !1
    }(),
    vadLeading: t.modeOptions.vadLeading,
    vadTrailing: t.modeOptions.vadTrailing,
    pttReleaseDelay: t.modeOptions.delay
  })
}

function e9(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.DEFAULT_VOLUME;
  return E().clamp(e, 0, t)
}

function te(e) {
  let t = e5(e.context),
    i = !eD || t.mute || t.deaf;
  e.context === eh.MediaEngineContextTypes.DEFAULT ? i = i || eG || ew || ek || !X.default.didHavePermission(ef.NativePermissionTypes.AUDIO) : e.context === eh.MediaEngineContextTypes.STREAM && (i = !0), e.setSelfMute(i), e.setSelfDeaf(t.deaf),
    function(e) {
      Promise.resolve().then(n.bind(n, "44744")).then(t => {
        let {
          default: n
        } = t;
        n.updateNativeMute(e)
      })
    }(e.context)
}

function tt() {
  var e, t, n;
  let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV,
    s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
    o = a;
  if ((null == o ? void 0 : o.desktopSource) != null && o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) && (null != o.desktopSource.soundshareId && (0, en.isWindows)() && p.cancelAttachToProcess(o.desktopSource.soundshareId), eg.setGoLiveSource(null, ey)), (null == o ? void 0 : o.cameraSource) != null && (o.cameraSource.videoDeviceGuid !== (null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) || o.cameraSource.audioDeviceGuid !== (null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) && eg.setGoLiveSource(null, ey), (eV || r) && (ex = (eV = r) ? tc(eb, e5().videoDeviceId) : eh.DISABLED_DEVICE_ID, eg.setVideoInputDevice(ex)), a = s, null != s) {
    let e = {
      resolution: s.quality.resolution,
      frameRate: s.quality.frameRate
    };
    if (null != s.desktopSource) {
      let {
        hdrCaptureMode: t
      } = F.default.getCurrentConfig({
        location: "f627ab_2"
      }, {
        autoTrackExposure: !1
      }), n = e5().videoHook;
      eg.setGoLiveSource({
        desktopDescription: {
          id: s.desktopSource.id,
          soundshareId: s.desktopSource.soundshareId,
          useVideoHook: n,
          useGraphicsCapture: tr(),
          useLoopback: i.getExperimentalSoundshare(),
          useQuartzCapturer: !0,
          allowScreenCaptureKit: ta(),
          videoHookStaleFrameTimeoutMs: 500,
          graphicsCaptureStaleFrameTimeoutMs: eC,
          hdrCaptureMode: t
        },
        quality: e
      }, ey)
    }
    null != s.cameraSource && eg.setGoLiveSource({
      cameraDescription: {
        videoDeviceGuid: s.cameraSource.videoDeviceGuid,
        audioDeviceGuid: s.cameraSource.audioDeviceGuid
      },
      quality: e
    }, ey)
  }
}

function tn(e, t, n, i) {
  var r;
  let a = null !== (r = null == e ? void 0 : e.soundshareSession) && void 0 !== r ? r : "";
  null == e6[a] && (e6[a] = new Set);
  let s = null != t && !e6[a].has(t);
  s && e6[a].add(t), (null == t || s) && $.default.track(eI.AnalyticEvents.SOUNDSHARE_FAILED, {
    soundshare_failure_code: t,
    soundshare_failure_reason: n,
    soundshare_failure_will_retry: i,
    ...(0, M.default)(e)
  })
}

function ti(e) {
  let t = e5(),
    n = t.inputDeviceId;
  if (e.setEchoCancellation(el.default.hasEchoCancellation(n) || t.echoCancellation), e.setNoiseSuppression(el.default.hasNoiseSuppression(n) || t.noiseSuppression), e.setAutomaticGainControl(el.default.hasAutomaticGainControl(n) || t.automaticGainControl), e.setNoiseCancellation(t.noiseCancellation), (0, en.isWeb)()) {
    let n = t.noiseCancellation ? -150 : -100;
    e.setSilenceThreshold(n)
  }
}

function tr() {
  return (0, en.isWindows)() && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eT.WINDOWS_GRAPHICS_CAPTURE_VERSION)
}

function ta() {
  return (0, en.isMac)() && eg.supports(eh.Features.SCREEN_CAPTURE_KIT) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eT.DARWIN_SCKIT_VERSION)
}

function ts(e) {
  return k.default.getCurrentConfig({
    location: "GoLiveSimulcastEnabled"
  }, {
    autoTrackExposure: e
  }).enableGoLiveSimulcast
}
let to = new class {
  start() {
    !this.started && (this.started = !0, eg.on(S.MediaEngineEvent.Silence, this.handleSilence))
  }
  stop() {
    this.started && (this.started = !1, null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = null), eg.removeListener(S.MediaEngineEvent.Silence, this.handleSilence), m.default.dispatch({
      type: "AUDIO_INPUT_DETECTED",
      inputDetected: null
    }))
  }
  update() {
    let e = e5();
    !eK && ec.default.getState() === eI.RTCConnectionStates.RTC_CONNECTED && e.mode === eI.InputModes.VOICE_ACTIVITY && e.silenceWarning ? this.start() : this.stop()
  }
  reset() {
    this.stop(), this.update()
  }
  constructor() {
    em(this, "stateChangeTimeout", void 0), em(this, "noVoiceTimeout", 5e3), em(this, "voiceTimeout", 1500), em(this, "started", !1), em(this, "handleSilence", e => {
      let t = !e;
      null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout), this.stateChangeTimeout = setTimeout(() => {
        this.stateChangeTimeout = null, this.started && (m.default.dispatch({
          type: "AUDIO_INPUT_DETECTED",
          inputDetected: t
        }), e && (ez = !0))
      }, t ? this.voiceTimeout : this.noVoiceTimeout)
    })
  }
};

function tl(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e5(t);
  return Object.assign(i, e), !__OVERLAY__ && n && h.Storage.set(ep, eL), i
}

function tu() {
  !eD && eg.enable().then(() => m.default.dispatch({
    type: "MEDIA_ENGINE_SET_AUDIO_ENABLED",
    enabled: !0,
    unmute: !1
  }))
}

function td(e) {
  return {
    id: eh.DEFAULT_DEVICE_ID,
    index: 0,
    name: e,
    disabled: !0
  }
}

function t_(e, t) {
  if (0 === e.length) {
    let e = td(t);
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

function tc(e, t) {
  var n;
  let i = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
  return null != i ? i.id : t
}

function tE() {
  var e, t;
  let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
    i = null !== (e = J.default.settings.audioContextSettings) && void 0 !== e ? e : {
      user: {},
      stream: {}
    };
  for (let e of Object.keys(i)) {
    let r = e === eS.ProtoAudioSettingsContextTypes.USER ? eh.MediaEngineContextTypes.DEFAULT : eh.MediaEngineContextTypes.STREAM,
      a = r === eh.MediaEngineContextTypes.STREAM ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
      s = null !== (t = i[e]) && void 0 !== t ? t : {},
      {
        localMutes: o,
        localVolumes: l
      } = e5(r);
    for (let [e, t] of Object.entries(s)) null == (0, q.getPendingAudioSettings)(r, e) && (t.muted ? o[e] = !0 : delete o[e], t.volume !== a ? l[e] = t.volume : delete l[e], eg.eachConnection(n => {
      n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted)
    }, r));
    if (n)
      for (let e of new Set([...Object.keys(o), ...Object.keys(l)])) null == s[e] && (delete o[e], delete l[e], eg.eachConnection(t => {
        t.setLocalVolume(e, a), t.setLocalMute(e, !1)
      }, r));
    tl({
      localMutes: o,
      localVolumes: l
    }, r)
  }
}

function tI(e) {
  if (null == i) return eN.info("Error: trying to get soundshare id before MediaEngineStore is instantiated."), {
    soundshareId: null,
    soundshareSession: ""
  };
  {
    let t = i.getExperimentalSoundshare() ? e : ee.default.getAudioPid(e),
      n = "";
    return null != t && (n = ee.default.generateSessionFromPid(t)), {
      soundshareId: t,
      soundshareSession: n
    }
  }
}

function tT(e, t) {
  (0, en.isWindows)() && p.attachToProcess(e, {
    soundshare_session: t
  }).then(t => {
    null != t && !D.default.shouldContinueWithoutElevatedProcessForPID(e) && m.default.wait(() => {
      m.default.dispatch({
        type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
        errorMessage: t
      })
    })
  })
}

function tf() {
  let e = eh.MediaEngineContextTypes.DEFAULT,
    {
      videoToggleStateMap: t
    } = e5(e);
  for (let [e, n] of Object.entries(t)) n === eI.VideoToggleState.AUTO_PROBING && delete t[e];
  tl({
    videoToggleStateMap: t
  }, e, !1)
}

function tS(e) {
  let t = e5();
  $.default.track(eI.AnalyticEvents.VOICE_PROCESSING, {
    echo_cancellation: t.echoCancellation,
    noise_cancellation: t.noiseCancellation,
    noise_suppression: t.noiseSuppression,
    automatic_gain_control: t.automaticGainControl,
    location: e
  })
}

function th() {
  let e = e5(),
    t = e.inputDeviceId,
    n = el.default.hasEchoCancellation(t) || e.echoCancellation,
    i = el.default.hasNoiseSuppression(t) || e.noiseSuppression,
    r = el.default.hasAutomaticGainControl(t) || e.automaticGainControl,
    a = e.noiseCancellation;
  eg.setLoopback(e3, {
    echoCancellation: n,
    noiseSuppression: i,
    automaticGainControl: r,
    noiseCancellation: a
  })
}

function tA() {
  return eQ || !1
}
async function tm() {
  try {
    await er.default.ensureModule("discord_krisp"), er.default.requireModule("discord_krisp"), eQ = !0, i.emitChange()
  } catch (t) {
    eN.warn("Failed to load Krisp module: ".concat(t.message)), ei.default.captureException(t);
    let e = eh.NoiseCancellerError.INITIALIZED;
    if (t.message.includes(": ")) {
      let n = parseInt(t.message.substring(t.message.indexOf(": ") + 1));
      e = isNaN(n) || 0 === n ? eh.NoiseCancellerError.INITIALIZED : n
    }
    $.default.track(eI.AnalyticEvents.VOICE_PROCESSING, {
      noise_canceller_error: e
    }), tl({
      noiseCancellation: !1
    })
  } finally {
    eX = !1
  }
}

function tN(e) {
  let {
    section: t
  } = e;
  return t === eI.UserSettingsSections.VOICE && tu(), !1
}
class tp extends(l = f.default.Store) {
  initialize() {
    eg.on(S.MediaEngineEvent.Connection, e => {
      let {
        maxSyncDelayOverride: t
      } = Y.default.getCurrentConfig({
        location: "f627ab_3"
      }, {
        autoTrackExposure: !1
      });
      t > 0 && eg.setMaxSyncDelayOverride(t), e8(e), te(e), ti(e);
      let n = e5();
      e.setAttenuation(n.attenuation, n.attenuateWhileSpeakingSelf, n.attenuateWhileSpeakingOthers), e.setQoS(n.qos), e.setExperimentalEncoders(n.experimentalEncoders), e.setHardwareH264(n.hardwareH264);
      let {
        useExperimentalRateControl: r
      } = K.default.getCurrentConfig({
        location: "f627ab_4"
      }, {
        autoTrackExposure: !1
      });
      r && e.setExperimentFlag(eh.ExperimentFlags.VIDEOTOOLBOX_RATE_CONTROL, !0);
      let s = ec.default.getGuildId(),
        {
          muteBeforeProcessing: o,
          pttBeforeProcessing: l,
          skipEncode: u
        } = (null != s ? G.default : b.default).getCurrentConfig({
          location: "setupMediaEngine",
          ...null != s && {
            guildId: s
          }
        }, {
          autoTrackExposure: !0
        });
      o && e.setExperimentFlag(eh.ExperimentFlags.MUTE_BEFORE_PROCESSING, !0), l && e.setExperimentFlag(eh.ExperimentFlags.PTT_BEFORE_PROCESSING, !0), u && e.setExperimentFlag(eh.ExperimentFlags.SKIP_ENCODE, !0);
      let {
        resetOnErrors: d,
        fallbackOnErrors: _,
        fallbackOnConsecutiveErrors: c
      } = W.default.getCurrentConfig({
        location: "setupMediaEngine"
      }, {
        autoTrackExposure: !0
      });
      d && e.setExperimentFlag(eh.ExperimentFlags.RESET_DECODER_ON_ERRORS, !0), _ && e.setExperimentFlag(eh.ExperimentFlags.SOFTWARE_FALLBACK_ON_ERRORS, !0), c && e.setExperimentFlag(eh.ExperimentFlags.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
      {
        (0, en.isWindows)() && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0);
        let {
          signalH265SupportNvenc: t
        } = x.default.getCurrentConfig({
          location: "f627ab_9"
        }, {
          autoTrackExposure: !0
        });
        t && n.hardwareH264 && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
        let {
          signalH265SupportAMD: i
        } = V.default.getCurrentConfig({
          location: "f627ab_9"
        }, {
          autoTrackExposure: !0
        });
        i && n.hardwareH264 && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_SUPPORT, !0);
        let {
          signalH265SupportMacOS: r
        } = B.default.getCurrentConfig({
          location: "f627ab_8"
        }, {
          autoTrackExposure: !0
        });
        if (r) {
          var E;
          (0, en.isMac)() && (null === (E = window.DiscordNative) || void 0 === E ? void 0 : E.os.arch) === "arm64" && (n.hardwareH264 ? e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_SUPPORT, !0) : e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_H265_DECODE_SUPPORT, !0))
        }
      }
      e.context === eh.MediaEngineContextTypes.STREAM && ts(!0) && e.setExperimentFlag(eh.ExperimentFlags.GOLIVE_SIMULCAST, !0);
      let {
        signalAV1Support: I
      } = P.default.getCurrentConfig({
        location: "f627ab_10"
      }, {
        autoTrackExposure: !0
      });
      I && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_AV1_SUPPORT, !0);
      let {
        hardwareDecodeAV1: T
      } = y.default.getCurrentConfig({
        location: "setupMediaEngine"
      }, {
        autoTrackExposure: !0
      });
      T && e.setExperimentFlag(eh.ExperimentFlags.SIGNAL_AV1_HARDWARE_DECODE, !0);
      let {
        allowSettingFullbandAndroid: f
      } = H.default.getCurrentConfig({
        location: "f627ab_14"
      }, {
        autoTrackExposure: !0
      });
      if (f && eg.setHasFullbandPerformance((0, L.hasPerformanceForKrispFullband)()), e.setRemoteAudioHistory(0), (0, R.default)(i)) {
        let t = C.default.getSettings();
        e.setExperimentFlag(eh.ExperimentFlags.STREAMER_CLIP, t.clipsEnabled);
        let {
          enableViewerClipping: n
        } = z.default.getCurrentConfig({
          location: "f627ab_15"
        }, {
          autoTrackExposure: !1
        });
        e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eh.VIEWERSIDE_CLIP_KFI_MS);
        let {
          allowQualityDecoupling: i
        } = O.default.getCurrentConfig({
          location: "MediaEngineStore_setupMediaEngine"
        }, {
          autoTrackExposure: !0
        });
        e.setQualityDecoupling(i)
      }
      for (let t of (n = e5(e.context), e.setPostponeDecodeLevel(100), Object.keys(n.localMutes))) t !== es.default.getId() && e.setLocalMute(t, n.localMutes[t]);
      for (let t of Object.keys(n.localVolumes)) t !== es.default.getId() && e.setLocalVolume(t, n.localVolumes[t]);
      for (let t of Object.keys(n.localPans)) {
        let i = n.localPans[t];
        e.setLocalPan(t, i.left, i.right)
      }
      for (let t of Object.keys(n.disabledLocalVideos)) e.setLocalVideoDisabled(t, n.disabledLocalVideos[t]);
      e.on(S.BaseConnectionEvent.Speaking, (t, n) => {
        m.default.dispatch({
          type: "SPEAKING",
          context: e.context,
          userId: t,
          speakingFlags: n
        })
      }), e.context === eh.MediaEngineContextTypes.DEFAULT && (eH = !1, e.on(S.BaseConnectionEvent.SpeakingWhileMuted, () => {
        eH = !0, i.emitChange()
      })), e.on(S.BaseConnectionEvent.DesktopSourceEnd, () => {
        m.default.dispatch({
          type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
          settings: {
            context: e.context
          }
        })
      }), e.on(S.BaseConnectionEvent.SoundshareAttached, () => {
        (null == a ? void 0 : a.desktopSource) != null && $.default.track(eI.AnalyticEvents.SOUNDSHARE_ATTACHED, (0, M.default)(null == a ? void 0 : a.desktopSource))
      }), e.on(S.BaseConnectionEvent.SoundshareFailed, e => {
        let {
          failureCode: t,
          failureReason: n,
          willRetry: i
        } = e;
        tn(null == a ? void 0 : a.desktopSource, t, n, i)
      }), e.on(S.BaseConnectionEvent.SoundshareSpeaking, () => {
        (null == a ? void 0 : a.desktopSource) != null && ($.default.track(eI.AnalyticEvents.SOUNDSHARE_TRANSMITTING, (0, M.default)(null == a ? void 0 : a.desktopSource)), null != e_.default.getHookError(eI.MediaEngineHookTypes.SOUND) && m.default.wait(() => m.default.dispatch({
          type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
        })))
      });
      let h = new A.Timeout;
      e.on(S.BaseConnectionEvent.SoundshareTrace, e => {
        switch (e.type) {
          case "soundshare_attach_requested":
            h.start(e7, () => {
              m.default.dispatch({
                type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
                errorMessage: "Sound Hook Failed"
              })
            });
            break;
          case "soundshare_recv_failed":
            let t = e.reason,
              n = e.code,
              i = e.retry;
            (null == a ? void 0 : a.desktopSource) != null && (tn(null == a ? void 0 : a.desktopSource, n, t, i), !i && (h.stop(), m.default.wait(() => m.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_FAILED",
              errorMessage: t,
              errorCode: n
            }))));
            break;
          case "soundshare_state_transition":
            4 === e.newState && (h.stop(), m.default.wait(() => m.default.dispatch({
              type: "MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING"
            })))
        }
      }), e.on(S.BaseConnectionEvent.InteractionRequired, e => {
        m.default.dispatch({
          type: "MEDIA_ENGINE_INTERACTION_REQUIRED",
          required: e
        })
      }), e.on(S.BaseConnectionEvent.VideoHookInitialize, (e, t, n, i, r, s) => {
        (null == a ? void 0 : a.desktopSource) != null && $.default.track(eI.AnalyticEvents.VIDEOHOOK_INITIALIZED, {
          backend: e,
          format: t,
          framebuffer_format: n,
          sample_count: i,
          success: r,
          reinitialization: s,
          ...(0, M.default)(null == a ? void 0 : a.desktopSource)
        })
      }), e.on(S.BaseConnectionEvent.NoiseCancellationError, e => {
        eN.warn("noisecancellererror event: ".concat(e)), eJ = !0, $.default.track(eI.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), m.default.dispatch({
          type: "AUDIO_SET_NOISE_SUPPRESSION",
          enabled: !0
        }), m.default.dispatch({
          type: "AUDIO_SET_NOISE_CANCELLATION",
          enabled: !1
        }), m.default.dispatch({
          type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR",
          code: e
        })
      }), e.on(S.BaseConnectionEvent.VoiceActivityDetectorError, e => {
        eN.warn("voiceactivitydetectorerror event: ".concat(e)), $.default.track(eI.AnalyticEvents.VOICE_PROCESSING, {
          noise_canceller_error: e
        }), m.default.dispatch({
          type: "AUDIO_SET_MODE",
          context: eh.MediaEngineContextTypes.DEFAULT,
          mode: eI.InputModes.VOICE_ACTIVITY,
          options: {
            ...e5(eh.MediaEngineContextTypes.DEFAULT).modeOptions,
            vadUseKrisp: !1
          }
        }), m.default.dispatch({
          type: "MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR",
          code: e
        })
      }), e.on(S.BaseConnectionEvent.VideoState, t => {
        m.default.dispatch({
          type: "MEDIA_ENGINE_VIDEO_STATE_CHANGED",
          videoState: t,
          context: e.context
        })
      }), e.on(S.BaseConnectionEvent.Destroy, () => {
        h.stop()
      }), e.setBitRate(eo.default.bitrate), e.applyVideoQualityMode(eE.default.mode)
    }), eg.on(S.MediaEngineEvent.DeviceChange, (e, t, n) => {
      m.default.dispatch({
        type: "MEDIA_ENGINE_DEVICES",
        inputDevices: e,
        outputDevices: t,
        videoDevices: n
      })
    }), eg.on(S.MediaEngineEvent.VolumeChange, (e, t) => {
      m.default.dispatch({
        type: "AUDIO_VOLUME_CHANGE",
        inputVolume: e,
        outputVolume: t
      })
    }), eg.on(S.MediaEngineEvent.DesktopSourceEnd, () => {
      m.default.dispatch({
        type: "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        settings: null
      })
    }), eg.on(S.MediaEngineEvent.AudioPermission, e => {
      e0 = !0, m.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "audio",
        granted: e
      })
    }), eg.on(S.MediaEngineEvent.VideoPermission, e => {
      m.default.dispatch({
        type: "MEDIA_ENGINE_PERMISSION",
        kind: "video",
        granted: e
      })
    }), eg.on(S.MediaEngineEvent.WatchdogTimeout, async () => {
      let e;
      try {
        await ee.default.submitLiveCrashReport({
          message: {
            message: "Voice Watchdog Timeout"
          }
        })
      } catch (t) {
        "number" == typeof t.status && (e = t.status)
      }
      eN.warn("Watchdog timeout, report submission status: ".concat(null != e ? e : 200)), $.default.track(eI.AnalyticEvents.VOICE_WATCHDOG_TIMEOUT, {
        minidump_submission_error: e
      })
    }), eg.on(S.MediaEngineEvent.VideoInputInitialized, e => {
      $.default.track(eI.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        device_name: e.description.name,
        time_to_first_frame_ms: e.initializationTimerExpired ? null : Math.round(e.timeToFirstFrame * et.default.Millis.SECOND),
        timed_out: e.initializationTimerExpired,
        activity: e.entropy
      })
    }), eg.on(S.MediaEngineEvent.ClipsRecordingRestartNeeded, () => {
      m.default.dispatch({
        type: "CLIPS_RESTART"
      })
    }), eg.on(S.MediaEngineEvent.ClipsInitFailure, (e, t) => {
      m.default.wait(() => {
        m.default.dispatch({
          type: "CLIPS_INIT_FAILURE",
          errMsg: e,
          applicationName: t
        })
      })
    }), eg.on(S.MediaEngineEvent.ClipsRecordingEnded, (e, t) => {
      var n, i;
      (null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e && (null != t && (null == a ? void 0 : null === (i = a.desktopSource) || void 0 === i ? void 0 : i.soundshareId) !== t && p.cancelAttachToProcess(t), s = null)
    }), to.reset(), ! function() {
      var e;
      let t = h.Storage.get("audio");
      null != t && (h.Storage.set(ep, {
          [eh.MediaEngineContextTypes.DEFAULT]: t
        }), h.Storage.remove("audio")), eL = null !== (e = h.Storage.get(ep)) && void 0 !== e ? e : {}, E().each(eL, e => {
          if (E().defaultsDeep(e, eR()), null != e.modeOptions && "string" == typeof e.modeOptions.shortcut && (e.modeOptions.shortcut = (0, ea.toCombo)(e.modeOptions.shortcut)), null != e.modeOptions && 4 !== e.vadUseKrispSettingVersion && (e.vadUseKrispSettingVersion = 4, e.modeOptions.vadUseKrisp = !0), !e.qosMigrated && (e.qosMigrated = !0, e.qos = !1), !e.vadThrehsoldMigrated) {
            var t;
            e.vadThrehsoldMigrated = !0, (null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 && (e.modeOptions.threshold = -60)
          }(0, en.isWeb)() ? 1 !== e.ncUseKrispjsSettingVersion && (e.ncUseKrispjsSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0): 1 !== e.ncUseKrispSettingVersion && (e.ncUseKrispSettingVersion = 1, e.noiseSuppression = !1, e.noiseCancellation = !0), 1 !== e.hardwareEnabledVersion && (e.hardwareH264 = !0, e.hardwareEnabledVersion = 1)
        }),
        function() {
          let e = e5();
          eg.setAudioInputDevice(e.inputDeviceId), eg.setAudioOutputDevice(e.outputDeviceId), tt(), eg.setInputVolume(e.inputVolume), eg.setOutputVolume(e.outputVolume), eg.setH264Enabled(e.openH264), eg.setAv1Enabled(e.hardwareH264), eg.setH265Enabled(e.hardwareH264), eg.setAecDump(e.aecDumpEnabled)
        }()
    }(), !(0, en.isDesktop)() || __OVERLAY__ || eX || eQ ? (0, en.isWeb)() && eg.supports(eh.Features.NOISE_CANCELLATION) ? (eQ = !0, i.emitChange()) : (0, en.isWeb)() && tl({
      noiseCancellation: !1
    }) : (eX = !0, tm()), tf(), e4 = {
      [eh.Features.VIDEO]: eg.supports(eh.Features.VIDEO),
      [eh.Features.DESKTOP_CAPTURE]: eg.supports(eh.Features.DESKTOP_CAPTURE),
      [eh.Features.HYBRID_VIDEO]: eg.supports(eh.Features.HYBRID_VIDEO)
    }, this.waitFor(es.default, el.default, eu.default, e_.default, ec.default, D.default, X.default.storage, J.default, ed.default, C.default)
  }
  supports(e) {
    return eg.supports(e)
  }
  supportsInApp(e) {
    return e4[e] || eg.supports(e)
  }
  isSupported() {
    return eg.supported()
  }
  isExperimentalEncodersSupported() {
    return eg.supports(eh.Features.EXPERIMENTAL_ENCODERS)
  }
  isNoiseSuppressionSupported() {
    return eg.supports(eh.Features.NOISE_SUPPRESSION)
  }
  isNoiseCancellationSupported() {
    return eQ || !1
  }
  isNoiseCancellationError() {
    return eJ
  }
  isAutomaticGainControlSupported() {
    return eg.supports(eh.Features.AUTOMATIC_GAIN_CONTROL)
  }
  isAdvancedVoiceActivitySupported() {
    return eQ || !1
  }
  isAecDumpSupported() {
    return eg.supports(eh.Features.AEC_DUMP)
  }
  isSimulcastSupported() {
    return eg.supports(eh.Features.VIDEO) && eg.supports(eh.Features.SIMULCAST)
  }
  getAecDump() {
    return e5().aecDumpEnabled
  }
  getMediaEngine() {
    return eg
  }
  getVideoComponent() {
    return eg.supports(eh.Features.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Video
  }
  getCameraComponent() {
    return eg.supports(eh.Features.DIRECT_VIDEO) && eg.setUseDirectVideo(!0), eg.Camera
  }
  isEnabled() {
    return eD
  }
  isMute() {
    return this.isSelfMute() || eG
  }
  isDeaf() {
    return this.isSelfDeaf() || eB
  }
  hasContext(e) {
    return null != eL[e]
  }
  isSelfMutedTemporarily() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
    return e === eh.MediaEngineContextTypes.DEFAULT && ew
  }
  isSelfMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
    return !this.isEnabled() || e5(e).mute || !X.default.didHavePermission(ef.NativePermissionTypes.AUDIO) || this.isSelfDeaf(e) || e === eh.MediaEngineContextTypes.DEFAULT && ek
  }
  shouldSkipMuteUnmuteSound() {
    let {
      airpodsMuteSupported: e
    } = U.default.getCurrentConfig({
      location: "shouldSkipMuteUnmuteSound"
    }, {
      autoTrackExposure: !0
    });
    return !!e && eF
  }
  notifyMuteUnmuteSoundWasSkipped() {
    eF = !1
  }
  isHardwareMute() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
    return !this.isMute() && !this.isSelfMutedTemporarily(e) && el.default.isHardwareMute(this.getInputDeviceId())
  }
  isSelfDeaf() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
    return !this.isSupported() || e5(e).deaf
  }
  isVideoEnabled() {
    return eV && ej
  }
  isVideoAvailable() {
    return Object.values(eb).some(e => {
      let {
        disabled: t
      } = e;
      return !t
    })
  }
  isScreenSharing() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.STREAM;
    return ey === e && null != a
  }
  isSoundSharing() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.STREAM;
    return ey === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null
  }
  isLocalMute(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
    return e !== es.default.getId() && (e5(t).localMutes[e] || !1)
  }
  supportsDisableLocalVideo() {
    return eg.supports(eh.Features.DISABLE_VIDEO)
  }
  isLocalVideoDisabled(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e5(n).disabledLocalVideos[e]) && void 0 !== t && t
  }
  getVideoToggleState(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
    return null !== (t = e5(n).videoToggleStateMap[e]) && void 0 !== t ? t : eI.VideoToggleState.NONE
  }
  isLocalVideoAutoDisabled(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT;
    return t === eh.MediaEngineContextTypes.DEFAULT && e1.has(e)
  }
  isAnyLocalVideoAutoDisabled() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
    return e === eh.MediaEngineContextTypes.DEFAULT && e1.size > 0
  }
  isMediaFilterSettingLoading() {
    return e$
  }
  isNativeAudioPermissionReady() {
    return e0
  }
  getGoLiveSource() {
    return a
  }
  getGoLiveContext() {
    return ey
  }
  getLocalPan(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
      n = e5(t).localPans[e];
    return null != n ? n : eO
  }
  getLocalVolume(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eh.MediaEngineContextTypes.DEFAULT,
      n = t === eh.MediaEngineContextTypes.STREAM ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
      i = e5(t).localVolumes[e];
    return null != i ? i : n
  }
  getInputVolume() {
    return e5().inputVolume
  }
  getOutputVolume() {
    return e5().outputVolume
  }
  getMode() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
    return e5(e).mode
  }
  getModeOptions() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
    return e5(e).modeOptions
  }
  getShortcuts() {
    let e = {};
    return E().each(eL, (t, n) => {
      let {
        mode: i,
        modeOptions: {
          shortcut: r
        }
      } = t;
      i === eI.InputModes.PUSH_TO_TALK && ev.has(n) && (e[n] = r)
    }), e
  }
  getInputDeviceId() {
    return tc(eP, e5().inputDeviceId)
  }
  getOutputDeviceId() {
    return tc(eU, e5().outputDeviceId)
  }
  getVideoDeviceId() {
    return tc(eb, e5().videoDeviceId)
  }
  getInputDevices() {
    return eP
  }
  getOutputDevices() {
    return eU
  }
  getVideoDevices() {
    return eb
  }
  getEchoCancellation() {
    let e = e5();
    return el.default.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation
  }
  getH265Enabled() {
    return e5().h265Enabled
  }
  getLoopback() {
    return eg.getLoopback()
  }
  getNoiseSuppression() {
    let e = e5();
    return el.default.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression
  }
  getAutomaticGainControl() {
    let e = e5();
    return el.default.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl
  }
  getNoiseCancellation() {
    return e5().noiseCancellation
  }
  getExperimentalEncoders() {
    return e5().experimentalEncoders
  }
  getHardwareH264() {
    return e5().hardwareH264
  }
  getEnableSilenceWarning() {
    return e5().silenceWarning
  }
  getDebugLogging() {
    return eg.getDebugLogging()
  }
  getQoS() {
    return e5().qos
  }
  getAttenuation() {
    return e5().attenuation
  }
  getAttenuateWhileSpeakingSelf() {
    return e5().attenuateWhileSpeakingSelf
  }
  getAttenuateWhileSpeakingOthers() {
    return e5().attenuateWhileSpeakingOthers
  }
  getAudioSubsystem() {
    return eg.getAudioSubsystem()
  }
  getSettings() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT;
    return e5(e)
  }
  getState() {
    return {
      settingsByContext: eL,
      inputDevices: eP,
      outputDevices: eU,
      appSupported: e4,
      krispModuleLoaded: eQ,
      goLiveSource: a,
      goLiveContext: ey
    }
  }
  getInputDetected() {
    return eW
  }
  getNoInputDetectedNotice() {
    return ez
  }
  getPacketDelay() {
    return en.isPlatformEmbedded || this.getMode() !== eI.InputModes.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading
  }
  setCanHavePriority(e, t) {
    eg.eachConnection(n => n.setCanHavePriority(e, t))
  }
  isInteractionRequired() {
    return eM
  }
  getVideoHook() {
    return e5().videoHook
  }
  supportsVideoHook() {
    return eg.supports(eh.Features.VIDEO_HOOK)
  }
  getExperimentalSoundshare() {
    let e = e5().experimentalSoundshare2;
    return this.supportsExperimentalSoundshare() && (null == e || e)
  }
  supportsExperimentalSoundshare() {
    return eg.supports(eh.Features.EXPERIMENTAL_SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eT.WINDOWS_SOUNDSHARE_VERSION)
  }
  getOpenH264() {
    return e5().openH264
  }
  getEverSpeakingWhileMuted() {
    return eH
  }
  supportsScreenSoundshare() {
    return (0, en.isMac)() && eg.supports(eh.Features.SOUNDSHARE) && T().satisfies(null === N.default || void 0 === N.default ? void 0 : N.default.os.release, eT.DARWIN_SCKIT_AUDIO_VERSION) && ta() || (0, en.isWindows)() && eg.supports(eh.Features.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare()
  }
  getVideoStreamParameters() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eh.MediaEngineContextTypes.DEFAULT,
      t = this.supports(eh.Features.VIDEO) ? [{
        rid: "100",
        type: e === eh.MediaEngineContextTypes.DEFAULT ? eh.MediaTypes.VIDEO : eh.MediaTypes.SCREEN,
        quality: 100
      }] : [];
    return this.isSimulcastSupported() && (e === eh.MediaEngineContextTypes.DEFAULT || ts(!1)) && t.push({
      rid: "50",
      type: e === eh.MediaEngineContextTypes.DEFAULT ? eh.MediaTypes.VIDEO : eh.MediaTypes.SCREEN,
      quality: 50
    }), t
  }
  getSupportedSecureFramesProtocolVersion(e) {
    var t;
    let n = eg.getSupportedSecureFramesProtocolVersion(),
      i = j.SecureFramesUserExperiment.getCurrentConfig({
        location: "MediaEngineStore"
      }),
      r = null != e ? j.SecureFramesGuildExperiment.getCurrentConfig({
        guildId: e,
        location: "MediaEngineStore"
      }) : null,
      a = i.canSupportSecureFrames || (null == r ? void 0 : r.canSupportSecureFrames),
      s = i.canSupportMls || (null == r ? void 0 : r.canSupportMls),
      o = Math.max(i.protocolVersionFloor, null !== (t = null == r ? void 0 : r.protocolVersionFloor) && void 0 !== t ? t : 0);
    return a && n % 100 >= o ? s ? n : n % 100 : 0
  }
  hasClipsSource() {
    return null != s
  }
}
em(tp, "displayName", "MediaEngineStore"), i = new tp(m.default, {
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n,
      currentVoiceChannelId: i,
      video: r
    } = e;
    if (i !== n && tt(r, null), null != t || null == n) {
      eZ = !1;
      return
    }
    if (eZ) return;
    eZ = !0;
    let a = e5();
    (a.mute || a.deaf) && (tl({
      deaf: !1,
      mute: !1
    }), eg.eachConnection(te))
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => r === t.sessionId ? (eG = t.mute || t.suppress, eB = t.deaf, eg.eachConnection(te), tt(!(null != t.guildId && null != t.channelId && null != eq && eq !== t.channelId) && eV), eq = t.channelId, !0) : (!__OVERLAY__ && t.userId === es.default.getId() && null == ec.default.getChannelId() && tt(!1, null), e), !1)
  },
  CONNECTION_OPEN: function(e) {
    r = e.sessionId, eG = !1, eB = !1, (0, Q.shouldReadWriteAudioSettings)() && tE()
  },
  CONNECTION_CLOSED: function() {
    r = null
  },
  RTC_CONNECTION_STATE: function(e) {
    switch (e.state) {
      case eI.RTCConnectionStates.CONNECTING:
        tu();
        break;
      case eI.RTCConnectionStates.RTC_CONNECTING:
        eK = !1, ez = !1;
        break;
      case eI.RTCConnectionStates.RTC_CONNECTED:
        tt();
        break;
      case eI.RTCConnectionStates.DISCONNECTED:
        (function() {
          if (0 === e1.size) return;
          let e = eh.MediaEngineContextTypes.DEFAULT,
            {
              disabledLocalVideos: t
            } = e5(e);
          e1.forEach(n => {
            _()(t[n], "If you are auto-disabled, then you are also disabled."), delete t[n], eg.eachConnection(e => e.setLocalVideoDisabled(n, !1), e)
          }), e1.clear(), tl({
            disabledLocalVideos: t
          }, e, !1)
        })(), tf()
    }
    to.update()
  },
  AUDIO_SET_TEMPORARY_SELF_MUTE: function(e) {
    let {
      mute: t
    } = e;
    ew = t, eg.eachConnection(te)
  },
  AUDIO_TOGGLE_SELF_MUTE: function(e) {
    let {
      context: t,
      skipMuteUnmuteSoundEffect: n
    } = e, {
      mute: i,
      deaf: r
    } = e5(t);
    if (t === eh.MediaEngineContextTypes.DEFAULT && (X.default.requestPermission(ef.NativePermissionTypes.AUDIO), ek)) return !1;
    !(i = !r && !i) && (r = !1), n && (eF = !0), tl({
      mute: i,
      deaf: r
    }, t), eg.eachConnection(te)
  },
  AUDIO_SET_SELF_MUTE: function(e) {
    let {
      context: t,
      mute: n
    } = e;
    tl({
      mute: n
    }, t), eg.eachConnection(te)
  },
  AUDIO_TOGGLE_SELF_DEAF: function(e) {
    let {
      context: t
    } = e;
    tl({
      deaf: !e5(t).deaf
    }, t), eg.eachConnection(te)
  },
  AUDIO_TOGGLE_LOCAL_MUTE: function(e) {
    let {
      context: t,
      userId: n
    } = e;
    if (n === es.default.getId()) return;
    let {
      localMutes: i
    } = e5(t);
    i[n] ? delete i[n] : i[n] = !0, tl({
      localMutes: i
    }, t), eg.eachConnection(e => e.setLocalMute(n, i[n] || !1), t)
  },
  AUDIO_SET_LOCAL_VIDEO_DISABLED: function(e) {
    var t, n, i, r, a, s, o;
    let {
      context: l,
      userId: u,
      videoToggleState: d,
      persist: c,
      isAutomatic: E
    } = e;
    _()(!(c && E), "These are not allowed to both be true.");
    let I = d === eI.VideoToggleState.DISABLED,
      {
        disabledLocalVideos: T
      } = e5(l),
      f = null !== (t = T[u]) && void 0 !== t && t,
      S = e1.has(u),
      h = d === eI.VideoToggleState.AUTO_ENABLED || d === eI.VideoToggleState.MANUAL_ENABLED;
    eN.info("disableVideo=".concat(I, " currentlyDisabled=").concat(f, " currentlyAutoDisabled=").concat(S, ", isVideoShown=").concat(h)), _()(!(S && !f), "If you are auto-disabled, then you are also disabled.");
    let A = I !== f,
      m = l === eh.MediaEngineContextTypes.DEFAULT,
      N = E && A && m,
      p = c && A && m;
    eN.info("changed=".concat(A, " isDefaultContext=").concat(m, " isUpdateCausedByVideoHealthManager=").concat(N, " isManualToggleByUser=").concat(p));
    let {
      videoToggleStateMap: O
    } = e5(l);
    if (O[u] === eI.VideoToggleState.AUTO_PROBING && d === eI.VideoToggleState.AUTO_ENABLED && (0, Z.default)(u, I ? eh.VideoToggleReason.AUTO_DISABLE : eh.VideoToggleReason.AUTO_ENABLE, h), O[u] = d, tl({
        videoToggleStateMap: O
      }, l, c), d === eI.VideoToggleState.AUTO_PROBING ? null === (n = ec.default.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0) : null === (i = ec.default.getRTCConnection()) || void 0 === i || i.pauseStatsCollectionForUser(u, !1), !e2 && (eN.info("isAutoDisableAllowed=".concat(e2, " - disabling VideoHealthManager")), null === (a = ec.default.getRTCConnection()) || void 0 === a || null === (r = a.getVideoHealthManager()) || void 0 === r || r.disable()), N) {
      if (!I && !S || I && !e2) return;
      (0, Z.default)(u, I ? eh.VideoToggleReason.AUTO_DISABLE : eh.VideoToggleReason.AUTO_ENABLE, h), I ? e1.add(u) : e1.delete(u)
    } else p && (S && !I ? (eN.info("disallowing auto-disable for this session because of manual override by user"), e2 = !1, null === (o = ec.default.getRTCConnection()) || void 0 === o || null === (s = o.getVideoHealthManager()) || void 0 === s || s.disable(), (0, Z.default)(u, eh.VideoToggleReason.MANUAL_REENABLE, h)) : (0, Z.default)(u, I ? eh.VideoToggleReason.MANUAL_DISABLE : eh.VideoToggleReason.MANUAL_ENABLE, h));
    m && !I && e1.delete(u), I ? T[u] = !0 : delete T[u], tl({
      disabledLocalVideos: T
    }, l, c), eg.eachConnection(e => {
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
    if (n === es.default.getId()) return;
    let r = t === eh.MediaEngineContextTypes.STREAM ? eh.DEFAULT_STREAM_VOLUME : eh.DEFAULT_VOLUME,
      {
        localVolumes: a
      } = e5(t);
    i === r ? delete a[n] : a[n] = i, tl({
      localVolumes: a
    }, t), eg.eachConnection(e => e.setLocalVolume(n, i), t)
  },
  AUDIO_SET_LOCAL_PAN: function(e) {
    let {
      context: t,
      userId: n,
      left: i,
      right: r
    } = e, {
      localPans: a
    } = e5(t);
    a[n] = {
      left: i,
      right: r
    }, tl({
      localPans: a
    }, t), eg.eachConnection(e => e.setLocalPan(n, i, r), t)
  },
  AUDIO_SET_MODE: function(e) {
    let {
      context: t,
      mode: n,
      options: i
    } = e;
    tl({
      mode: n,
      modeOptions: i
    }, t), eg.eachConnection(e8), to.update()
  },
  AUDIO_SET_INPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    tl({
      inputVolume: e9(t)
    }), eg.setInputVolume(t)
  },
  AUDIO_SET_OUTPUT_VOLUME: function(e) {
    let {
      volume: t
    } = e;
    tl({
      outputVolume: t
    }), eg.setOutputVolume(t)
  },
  AUDIO_SET_INPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    tl({
      inputDeviceId: t = tc(eP, t)
    }), eg.setAudioInputDevice(t)
  },
  AUDIO_SET_OUTPUT_DEVICE: function(e) {
    let {
      id: t
    } = e;
    tl({
      outputDeviceId: t = tc(eU, t)
    }), eg.setAudioOutputDevice(t)
  },
  AUDIO_SET_ECHO_CANCELLATION: function(e) {
    let t = tl({
      echoCancellation: e.enabled
    });
    eg.eachConnection(e => e.setEchoCancellation(t.echoCancellation)), th(), tS(e.location)
  },
  AUDIO_SET_LOOPBACK: function(e) {
    let {
      enabled: t
    } = e;
    return e3 = t, th()
  },
  AUDIO_SET_NOISE_SUPPRESSION: function(e) {
    let t = tl({
      noiseSuppression: e.enabled
    });
    eg.eachConnection(e => e.setNoiseSuppression(t.noiseSuppression)), th(), tS(e.location)
  },
  AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function(e) {
    let t = tl({
      automaticGainControl: e.enabled
    });
    eg.eachConnection(e => e.setAutomaticGainControl(t.automaticGainControl)), th(), tS(e.location)
  },
  AUDIO_SET_NOISE_CANCELLATION: function(e) {
    let t = tl({
      noiseCancellation: e.enabled
    });
    eg.eachConnection(e => e.setNoiseCancellation(t.noiseCancellation)), th(), tS(e.location)
  },
  AUDIO_SET_DISPLAY_SILENCE_WARNING: function(e) {
    tl({
      silenceWarning: e.enabled
    }), to.update()
  },
  AUDIO_SET_DEBUG_LOGGING: function(e) {
    eg.setDebugLogging(e.enabled)
  },
  MEDIA_ENGINE_SET_VIDEO_HOOK: function(e) {
    tl({
      videoHook: e.enabled
    })
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function(e) {
    tl({
      experimentalSoundshare2: e.enabled
    })
  },
  AUDIO_SET_ATTENUATION: function(e) {
    let {
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    } = e, r = tl({
      attenuation: t,
      attenuateWhileSpeakingSelf: n,
      attenuateWhileSpeakingOthers: i
    });
    eg.eachConnection(e => e.setAttenuation(r.attenuation, r.attenuateWhileSpeakingSelf, r.attenuateWhileSpeakingOthers))
  },
  AUDIO_SET_QOS: function(e) {
    let {
      enabled: t
    } = e;
    tl({
      qos: t
    }), eg.eachConnection(e => e.setQoS(t))
  },
  MEDIA_ENGINE_DEVICES: function(e) {
    let {
      inputDevices: t,
      outputDevices: n,
      videoDevices: i
    } = e;
    ! function(e) {
      let t = eP;
      if (eP = t_(e, eA.default.Messages.NO_INPUT_DEVICES), !E().isEqual(eP, t)) {
        let e = e5(),
          t = tc(eP, e.inputDeviceId);
        eg.setAudioInputDevice(t)
      }
    }(t), ! function(e) {
      let t = eU;
      if (eU = t_(e, eA.default.Messages.NO_OUTPUT_DEVICES), !E().isEqual(eU, t)) {
        let e = e5(),
          t = tc(eU, e.outputDeviceId);
        eg.setAudioOutputDevice(t)
      }
    }(n), ! function(e) {
      ej = e.length > 0;
      let t = eb;
      if (eb = t_(e, eA.default.Messages.NO_VIDEO_DEVICES), eV && !E().isEqual(eb, t)) {
        var n;
        let e = void 0 !== eb[ex],
          i = ex === eh.DEFAULT_DEVICE_ID && (null === (n = t[eh.DEFAULT_DEVICE_ID]) || void 0 === n ? void 0 : n.disabled);
        tt(e || i)
      }
    }(i)
  },
  AUDIO_VOLUME_CHANGE: function(e) {
    let {
      inputVolume: t,
      outputVolume: n
    } = e;
    tl({
      inputVolume: e9(t),
      outputVolume: n
    })
  },
  AUDIO_RESET: function() {
    h.Storage.remove(ep), location.reload()
  },
  AUDIO_INPUT_DETECTED: function(e) {
    let {
      inputDetected: t
    } = e;
    eW = t, !eK && eW && (eK = !0, to.update())
  },
  AUDIO_SET_SUBSYSTEM: function(e) {
    eg.setAudioSubsystem(e.subsystem)
  },
  MEDIA_ENGINE_SET_AUDIO_ENABLED: function(e) {
    eD = e.enabled, e.unmute && tl({
      mute: !1,
      deaf: !1
    }), eg.eachConnection(te)
  },
  MEDIA_ENGINE_SET_VIDEO_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    X.default.requestPermission(ef.NativePermissionTypes.CAMERA), tt(t)
  },
  MEDIA_ENGINE_PERMISSION: function(e) {
    let {
      kind: t,
      granted: n
    } = e;
    if (!n) switch (t) {
      case "audio":
        eD = !1, eg.eachConnection(te);
        break;
      case "video":
        tt(!1)
    }
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function(e) {
    var t, n, i, r, s;
    let {
      settings: o
    } = e;
    if ((null == o ? void 0 : o.desktopSettings) != null) {
      ;
      let e = null,
        i = null,
        {
          sourceId: r,
          sound: l
        } = o.desktopSettings,
        u = null !== (t = o.context) && void 0 !== t ? t : eh.MediaEngineContextTypes.DEFAULT,
        d = null !== (n = o.qualityOptions) && void 0 !== n ? n : {
          resolution: 720,
          frameRate: 30
        },
        _ = ee.default.getPidFromDesktopSource(r);
      en.isPlatformEmbedded && !0 === l && ({
        soundshareId: e,
        soundshareSession: i
      } = tI(_), null != e && tT(e, i)), (s = u) !== ey && (null != a && eg.setGoLiveSource(null, ey), ey = s), tt(u === eh.MediaEngineContextTypes.STREAM && eV, {
        desktopSource: {
          id: r,
          sourcePid: _,
          soundshareId: e,
          soundshareSession: i
        },
        quality: {
          resolution: d.resolution,
          frameRate: d.frameRate
        }
      })
    } else if ((null == o ? void 0 : o.cameraSettings) != null) {
      let e = null !== (i = o.context) && void 0 !== i ? i : eh.MediaEngineContextTypes.DEFAULT,
        {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        } = o.cameraSettings,
        a = e === eh.MediaEngineContextTypes.STREAM && eV,
        s = null !== (r = o.qualityOptions) && void 0 !== r ? r : {
          resolution: 720,
          frameRate: 30
        };
      tt(a, {
        cameraSource: {
          videoDeviceGuid: t,
          audioDeviceGuid: n
        },
        quality: {
          resolution: s.resolution,
          frameRate: s.frameRate
        }
      })
    } else tt(eV, null)
  },
  MEDIA_ENGINE_SET_VIDEO_DEVICE: function(e) {
    let {
      id: t
    } = e;
    tl({
      videoDeviceId: t = tc(eb, t)
    }), tt()
  },
  MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function(e) {
    let t = tl({
      experimentalEncoders: e.enabled
    });
    eg.eachConnection(e => e.setExperimentalEncoders(t.experimentalEncoders))
  },
  MEDIA_ENGINE_INTERACTION_REQUIRED: function(e) {
    return eM !== e.required && (eM = e.required, !e.required && eg.interact(), !0)
  },
  USER_SETTINGS_MODAL_INIT: tN,
  USER_SETTINGS_MODAL_SET_SECTION: tN,
  CERTIFIED_DEVICES_SET: function() {
    return eg.eachConnection(ti), !1
  },
  RPC_APP_CONNECTED: function(e) {
    let {
      application: t
    } = e;
    ev.add(t.id)
  },
  RPC_APP_DISCONNECTED: function(e) {
    let {
      application: t
    } = e;
    ev.delete(t.id)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      mediaEngineState: t
    } = e;
    eL = t.settingsByContext, eP = t.inputDevices, eU = t.outputDevices, e4 = t.appSupported, eQ = t.krispModuleLoaded, ey = t.goLiveContext
  },
  MEDIA_ENGINE_SET_OPEN_H264: function(e) {
    let {
      enabled: t
    } = e, n = tl({
      openH264: t
    });
    eg.setH264Enabled(n.openH264)
  },
  MEDIA_ENGINE_SET_HARDWARE_H264: function(e) {
    let {
      enabled: t
    } = e, n = tl({
      hardwareH264: t
    });
    eg.eachConnection(e => e.setHardwareH264(n.hardwareH264)), eg.setAv1Enabled(n.hardwareH264), eg.setH265Enabled(n.hardwareH264)
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e, n = v.default.isEnabled();
    if (t === eI.AppStates.BACKGROUND && eV && !n) eY = !0, tt(!1);
    else {
      if (t !== eI.AppStates.ACTIVE || !eY) return !1;
      eY = !1, tt(!0)
    }
    return !0
  },
  SET_CHANNEL_BITRATE: function(e) {
    eg.eachConnection(t => t.setBitRate(e.bitrate))
  },
  SET_VAD_PERMISSION: function(e) {
    let {
      hasPermission: t
    } = e, n = !t;
    if (n === ek) return !1;
    ek = n, eg.eachConnection(te)
  },
  SET_NATIVE_PERMISSION: function(e) {
    let {
      state: t,
      permissionType: n
    } = e, i = t === ef.NativePermissionStates.ACCEPTED;
    switch (n) {
      case ef.NativePermissionTypes.AUDIO:
        e0 = !0, eg.eachConnection(te);
        break;
      case ef.NativePermissionTypes.CAMERA:
        !i && eV && tt(!1);
        break;
      default:
        return !1
    }
  },
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    eg.eachConnection(t => t.applyVideoQualityMode(e.mode))
  },
  MEDIA_ENGINE_SET_AEC_DUMP: function(e) {
    let {
      enabled: t
    } = e, n = tl({
      aecDumpEnabled: t
    });
    eg.setAecDump(n.aecDumpEnabled)
  },
  CHANNEL_DELETE: function() {
    if (!eV && null == a || null != ec.default.getRTCConnectionId()) return !1;
    tt(!1, null)
  },
  MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function() {
    return !!eJ && (eJ = !1, !0)
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    eg.applyMediaFilterSettings(t).finally(() => {
      e$ = !1, i.emitChange()
    })
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function() {
    e$ = !0
  },
  MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function() {
    e$ = !1
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      local: n,
      wasSaved: i
    } = e;
    if (!(0, Q.shouldReadWriteAudioSettings)() || t !== eS.UserSettingsTypes.PRELOADED_USER_SETTINGS || n || null != i) return !1;
    tE(!0)
  },
  CLIPS_INIT: function(e) {
    let {
      sourceId: t,
      applicationName: n,
      quality: r
    } = e, {
      enableDecoupledGameClipping: a
    } = w.default.getCurrentConfig({
      location: "handleClipsInit"
    }, {
      autoTrackExposure: !0
    }), o = C.default.getSettings().decoupledClipsEnabled;
    if (!a || !o || null == N.default) return;
    let l = null,
      u = null,
      d = ee.default.getPidFromDesktopSource(t);
    ({
      soundshareId: l,
      soundshareSession: u
    } = tI(d));
    let _ = {
      desktopSource: {
        id: t,
        sourcePid: d,
        soundshareId: l,
        soundshareSession: u
      },
      quality: r
    };
    null != s && s.desktopSource.id !== _.desktopSource.id && (eg.setClipsSource(null), (0, en.isWindows)() && null != s.desktopSource.soundshareId && p.cancelAttachToProcess(s.desktopSource.soundshareId)), null != l && tT(l, u), s = _;
    let {
      hdrCaptureMode: c
    } = F.default.getCurrentConfig({
      location: "f627ab_12"
    }, {
      autoTrackExposure: !1
    }), E = e5().videoHook;
    eg.setClipsSource({
      desktopDescription: {
        id: s.desktopSource.id,
        soundshareId: s.desktopSource.soundshareId,
        useVideoHook: E,
        useGraphicsCapture: tr(),
        useLoopback: i.getExperimentalSoundshare(),
        useQuartzCapturer: !0,
        allowScreenCaptureKit: ta(),
        videoHookStaleFrameTimeoutMs: 500,
        graphicsCaptureStaleFrameTimeoutMs: eC,
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
    !1 === t.decoupledClipsEnabled && (s = null, eg.setClipsSource(null))
  }
}), t.default = i