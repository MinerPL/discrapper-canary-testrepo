"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007"), n("70102");
var i, s, r = n("383536"),
  a = n.n(r),
  o = n("811022"),
  l = n("595275"),
  u = n("773364"),
  d = n("953161"),
  c = n("784343"),
  f = n("446497"),
  _ = n("785347"),
  h = n("784063"),
  g = n("710584"),
  m = n("595432"),
  E = n("149416");

function p(e) {
  return (null != e ? e : E.DEFAULT_VOLUME) / E.DEFAULT_VOLUME
}(i = class e extends l.default {
  destroy() {
    this.eachConnection(e => e.destroy()), this.emit(u.MediaEngineEvent.Destroy), this.removeAllListeners()
  }
  interact() {}
  static supported() {
    return (0, h.supported)()
  }
  supported() {
    return !0
  }
  supports(e) {
    var t, n;
    switch (e) {
      case E.Features.LEGACY_AUDIO_SUBSYSTEM:
        return (0, h.supportsFeature)(E.NativeFeatures.VOICE_LEGACY_SUBSYSTEM);
      case E.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM:
        return (0, h.supportsFeature)(E.NativeFeatures.VOICE_EXPERIMENTAL_SUBSYSTEM);
      case E.Features.DEBUG_LOGGING:
        return (0, h.supportsFeature)(E.NativeFeatures.DEBUG_LOGGING);
      case E.Features.SOUNDSHARE:
        return (0, h.supportsFeature)(E.NativeFeatures.SOUNDSHARE);
      case E.Features.SCREEN_SOUNDSHARE:
        return (0, h.supportsFeature)(E.NativeFeatures.SCREEN_SOUNDSHARE);
      case E.Features.ELEVATED_HOOK:
        return (0, h.supportsFeature)(E.NativeFeatures.ELEVATED_HOOK);
      case E.Features.LOOPBACK:
        return (0, h.supportsFeature)(E.NativeFeatures.LOOPBACK);
      case E.Features.WUMPUS_VIDEO:
        return (0, h.supportsFeature)(E.NativeFeatures.WUMPUS_VIDEO);
      case E.Features.HYBRID_VIDEO:
        return (0, h.supportsFeature)(E.NativeFeatures.HYBRID_VIDEO);
      case E.Features.ATTENUATION:
      case E.Features.VIDEO_HOOK:
        return (null == a ? void 0 : null === (t = a.os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(a.os.family);
      case E.Features.EXPERIMENTAL_SOUNDSHARE:
        return (0, h.supportsFeature)(E.NativeFeatures.SOUNDSHARE_LOOPBACK);
      case E.Features.OPEN_H264:
        return (null == a ? void 0 : null === (n = a.os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(a.os.family);
      case E.Features.EXPERIMENTAL_ENCODERS:
        return (0, h.supportsFeature)(E.NativeFeatures.EXPERIMENTAL_ENCODERS);
      case E.Features.REMOTE_LOCUS_NETWORK_CONTROL:
        return (0, h.supportsFeature)(E.NativeFeatures.REMOTE_LOCUS_NETWORK_CONTROL);
      case E.Features.SCREEN_PREVIEWS:
        return (0, h.supportsFeature)(E.NativeFeatures.SCREEN_PREVIEWS);
      case E.Features.CLIPS:
        return (0, h.supportsFeature)(E.NativeFeatures.CLIPS);
      case E.Features.WINDOW_PREVIEWS:
        return (0, h.supportsFeature)(E.NativeFeatures.WINDOW_PREVIEWS);
      case E.Features.AUDIO_DEBUG_STATE:
        return (0, h.supportsFeature)(E.NativeFeatures.AUDIO_DEBUG_STATE);
      case E.Features.CONNECTION_REPLAY:
        return (0, h.supportsFeature)(E.NativeFeatures.CONNECTION_REPLAY);
      case E.Features.SIMULCAST:
        return (0, h.supportsFeature)(E.NativeFeatures.SIMULCAST) && (0, h.supportsFeature)(E.NativeFeatures.SIMULCAST_BUGFIX);
      case E.Features.RTC_REGION_RANKING:
        return (0, h.supportsFeature)(E.NativeFeatures.RTC_REGION_RANKING);
      case E.Features.DIRECT_VIDEO:
        return (0, h.supportsFeature)(E.NativeFeatures.DIRECT_VIDEO) && null != window.createDiscordStream;
      case E.Features.ELECTRON_VIDEO:
        return (0, h.supportsFeature)(E.NativeFeatures.ELECTRON_VIDEO);
      case E.Features.MEDIAPIPE:
        return (0, h.supportsFeature)(E.NativeFeatures.MEDIAPIPE);
      case E.Features.FIXED_KEYFRAME_INTERVAL:
        return (0, h.supportsFeature)(E.NativeFeatures.FIXED_KEYFRAME_INTERVAL);
      case E.Features.FIRST_FRAME_CALLBACK:
        return (0, h.supportsFeature)(E.NativeFeatures.FIRST_FRAME_CALLBACK);
      case E.Features.REMOTE_USER_MULTI_STREAM:
        return (0, h.supportsFeature)(E.NativeFeatures.REMOTE_USER_MULTI_STREAM);
      case E.Features.SPEED_TEST:
        return (0, h.supportsFeature)(E.NativeFeatures.SPEED_TEST);
      case E.Features.IMAGE_QUALITY_MEASUREMENT:
        return (0, h.supportsFeature)(E.NativeFeatures.IMAGE_QUALITY_MEASUREMENT);
      case E.Features.AMD_EXPERIMENTAL_RATE_CONTROL:
        return (0, h.supportsFeature)(E.NativeFeatures.AMD_EXPERIMENTAL_RATE_CONTROL);
      case E.Features.GO_LIVE_HARDWARE:
        return (0, h.supportsFeature)(E.NativeFeatures.GO_LIVE_HARDWARE);
      case E.Features.SCREEN_CAPTURE_KIT:
        return (0, h.supportsFeature)(E.NativeFeatures.SCREEN_CAPTURE_KIT);
      case E.Features.CAPTURE_TIMEOUT_EXPERIMENTS:
        return (0, h.supportsFeature)(E.NativeFeatures.CAPTURE_TIMEOUT_EXPERIMENTS);
      case E.Features.DIAGNOSTICS:
      case E.Features.NATIVE_PING:
      case E.Features.AUTOMATIC_VAD:
      case E.Features.AUDIO_INPUT_DEVICE:
      case E.Features.AUDIO_OUTPUT_DEVICE:
      case E.Features.QOS:
      case E.Features.VOICE_PROCESSING:
      case E.Features.AUTO_ENABLE:
      case E.Features.VIDEO:
      case E.Features.DESKTOP_CAPTURE:
      case E.Features.DESKTOP_CAPTURE_FORMAT:
      case E.Features.DESKTOP_CAPTURE_APPLICATIONS:
      case E.Features.VOICE_PANNING:
      case E.Features.AEC_DUMP:
      case E.Features.DISABLE_VIDEO:
      case E.Features.SAMPLE_PLAYBACK:
      case E.Features.NOISE_SUPPRESSION:
      case E.Features.AUTOMATIC_GAIN_CONTROL:
        return !0;
      default:
        return !1
    }
  }
  connect(e, t, n) {
    let i = (0, h.supportsFeature)(E.NativeFeatures.EXPERIMENT_CONFIG);
    !i && (n.experiments = void 0);
    let s = c.default.create(e, t, n);
    return s.on(u.BaseConnectionEvent.Destroy, e => {
      this.connections.delete(e), this.connectionsEmpty() && (0, h.setProcessPriority)(E.ProcessPriority.NORMAL)
    }), s.on(u.BaseConnectionEvent.Connected, () => {
      s.setVideoBroadcast(this.shouldConnectionBroadcastVideo(s))
    }), s.on(u.BaseConnectionEvent.Silence, e => {
      this.emit(u.MediaEngineEvent.Silence, e)
    }), this.connections.add(s), (0, h.setProcessPriority)(E.ProcessPriority.HIGH), this.emit(u.MediaEngineEvent.Connection, s), s
  }
  shouldConnectionBroadcastVideo(e) {
    return e.context === E.MediaEngineContextTypes.DEFAULT && this.videoInputDeviceId !== E.DISABLED_DEVICE_ID || e.hasDesktopSource()
  }
  eachConnection(e, t) {
    this.connections.forEach(n => {
      (null == t || n.context === t) && e(n)
    })
  }
  enable() {
    return Promise.resolve()
  }
  setInputVolume(e) {
    (0, h.getVoiceEngine)().setInputVolume(p(e))
  }
  setOutputVolume(e) {
    (0, h.getVoiceEngine)().setOutputVolume(p(e))
  }
  getAudioInputDevices() {
    return (0, f.getAudioInputDevices)()
  }
  setAudioInputDevice(e) {
    (0, h.supportsFeature)(E.NativeFeatures.SET_AUDIO_DEVICE_BY_ID) ? (0, h.getVoiceEngine)().setInputDevice(e): (0, f.getAudioInputDevices)().then(t => {
      var n;
      let i = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
      null != i && (0, h.getVoiceEngine)().setInputDevice(i.index)
    })
  }
  getAudioOutputDevices() {
    return (0, f.getAudioOutputDevices)()
  }
  setAudioOutputDevice(e) {
    (0, h.supportsFeature)(E.NativeFeatures.SET_AUDIO_DEVICE_BY_ID) ? (0, h.getVoiceEngine)().setOutputDevice(e): (0, f.getAudioOutputDevices)().then(t => {
      var n;
      let i = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
      null != i && (0, h.getVoiceEngine)().setOutputDevice(i.index)
    })
  }
  getVideoInputDevices() {
    return (0, f.getVideoInputDevices)()
  }
  async setVideoInputDevice(e) {
    let t = await this.getVideoInputDevices(),
      n = t.find(t => t.id === e),
      i = null != n ? n.id : E.DISABLED_DEVICE_ID;
    if (i !== this.videoInputDeviceId) {
      if (this.videoInputDeviceId = i, (0, h.supportsFeature)(E.NativeFeatures.SET_VIDEO_DEVICE_BY_ID)) {
        let e = null != n ? null != n.originalId && "" !== n.originalId ? n.originalId : n.id : E.DISABLED_DEVICE_ID;
        (0, h.getVoiceEngine)().setVideoInputDevice(e)
      } else(0, h.getVoiceEngine)().setVideoInputDevice(null != n ? n.index : -1);
      this.connections.forEach(e => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)))
    }
  }
  getSupportedVideoCodecs(e) {
    (0, h.getVoiceEngine)().getSupportedVideoCodecs(e)
  }
  getCodecCapabilities(e) {
    (0, h.getVoiceEngine)().getCodecCapabilities(e)
  }
  setGoLiveSource(e, t) {
    if (null == e) {
      this.eachConnection(e => {
        e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e))
      }, t);
      return
    }
    this.eachConnection(n => {
      (t !== E.MediaEngineContextTypes.STREAM || n.streamUserId === n.ids.userId) && (n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n)))
    }, t)
  }
  setClipsSource(e) {
    if (null == (0, h.getVoiceEngine)().setClipsSource || null == (0, h.getVoiceEngine)().setOnClipsRecordingEvent || null == (0, h.getVoiceEngine)().applyClipsSettings) return;
    if (null == e) {
      (0, h.getVoiceEngine)().setClipsSource({
        id: "",
        soundshareId: 0
      });
      return
    }
    let {
      frameRate: t,
      resolution: n
    } = e.quality, {
      id: i,
      soundshareId: s,
      useLoopback: r,
      useVideoHook: a,
      useGraphicsCapture: o,
      useQuartzCapturer: l,
      allowScreenCaptureKit: d,
      hdrCaptureMode: c
    } = e.desktopDescription;
    (0, h.getVoiceEngine)().setOnClipsRecordingEvent(t => {
      this.logger.info("Clips recording event: ".concat(E.ClipsRecordingEvent[t], " received for stream ").concat(i, " and sound ").concat(s, ".")), t === E.ClipsRecordingEvent.GoLiveEnded ? this.emit(u.MediaEngineEvent.ClipsRecordingRestartNeeded) : t === E.ClipsRecordingEvent.Error ? this.emit(u.MediaEngineEvent.ClipsInitFailure, "Failed to set clips source in media engine", e.applicationName) : (t === E.ClipsRecordingEvent.Ended || t === E.ClipsRecordingEvent.StoppedByGoLive) && this.emit(u.MediaEngineEvent.ClipsRecordingEnded, i, s)
    }), (0, h.getVoiceEngine)().applyClipsSettings({
      useVideoHook: a,
      useGraphicsCapture: o,
      useQuartzCapturer: l,
      allowScreenCaptureKit: d,
      hdrCaptureMode: c,
      soundshareLoopback: r,
      frameRate: t,
      width: n <= 480 ? n / 3 * 4 : n / 9 * 16,
      height: n
    });
    let [f, _] = null != i ? i.split(":") : ["", ""];
    (0, h.getVoiceEngine)().setClipsSource({
      id: _,
      soundshareId: null != s ? s : 0
    })
  }
  setClipsQualitySettings(e, t, n) {
    let i = (0, h.getVoiceEngine)();
    return null != i.applyClipsQualitySettings && (i.applyClipsQualitySettings(e, t, n), !0)
  }
  setSoundshareSource(e, t, n) {
    this.eachConnection(i => {
      (n !== E.MediaEngineContextTypes.STREAM || i.streamUserId === i.ids.userId) && i.setSoundshareSource(e, t)
    }, n)
  }
  getDesktopSource() {
    return Promise.reject(Error("NO_STREAM"))
  }
  getDesktopSources() {
    return new Promise(e => {
      null != (0, h.getVoiceEngine)().getDesktopSources ? (0, h.getVoiceEngine)().getDesktopSources(t => e(t)) : e([])
    })
  }
  getScreenPreviews(e, t) {
    return new Promise(n => {
      null != (0, h.getVoiceEngine)().getScreenPreviews ? (0, h.getVoiceEngine)().getScreenPreviews(e, t, e => {
        n(e.map((e, t) => ({
          ...e,
          name: "Screen " + (t + 1)
        })))
      }) : n([])
    })
  }
  setClipBufferLength(e) {
    var t, n;
    null === (t = (n = (0, h.getVoiceEngine)()).setClipBufferLength) || void 0 === t || t.call(n, e)
  }
  saveClip(e, t) {
    let n = (0, h.getVoiceEngine)();
    return null == n.setClipBufferLength || null == n.saveClip ? Promise.reject("unsupported") : new Promise((i, s) => {
      n.saveClip(e, t, (e, t, n) => {
        let s = JSON.parse(n);
        return i({
          duration: e,
          thumbnail: t,
          clipStats: s
        })
      }, e => {
        let t = JSON.parse(e);
        return s(t)
      })
    })
  }
  saveClipForUser(e, t, n) {
    let i = (0, h.getVoiceEngine)();
    return null == i.saveClipForUser ? Promise.reject("unsupported") : new Promise((s, r) => {
      i.saveClipForUser(e, t, n, (e, t, n) => {
        let i = JSON.parse(n);
        return s({
          duration: e,
          thumbnail: t,
          clipStats: i
        })
      }, e => {
        let t = JSON.parse(e);
        return r(t)
      })
    })
  }
  updateClipMetadata(e, t) {
    let n = (0, h.getVoiceEngine)();
    return null == n.updateClipMetadata ? Promise.reject("unsupported") : new Promise((i, s) => {
      n.updateClipMetadata(e, t, i, s)
    })
  }
  exportClip(e, t) {
    let n = (0, h.getVoiceEngine)();
    return null == n.exportClip ? Promise.reject("unsupported") : new Promise((i, s) => {
      n.exportClip(e, t, e => i(new Blob([e])), s)
    })
  }
  getWindowPreviews(e, t) {
    return new Promise(n => {
      null != (0, h.getVoiceEngine)().getWindowPreviews ? (0, h.getVoiceEngine)().getWindowPreviews(e, t, e => {
        n(e)
      }) : n([])
    })
  }
  setAudioSubsystem(e) {
    null != (0, h.getVoiceEngine)().setAudioSubsystem ? (0, h.getVoiceEngine)().setAudioSubsystem(e) : (0, h.getVoiceEngine)().setUseLegacyAudioDevice(e === E.AudioSubsystems.LEGACY)
  }
  getAudioSubsystem() {
    return this.audioSubsystem
  }
  getAudioLayer() {
    return this.audioLayer
  }
  getDebugLogging() {
    return !!this.supports(E.Features.DEBUG_LOGGING) && (0, h.getVoiceEngine)().getDebugLogging()
  }
  setDebugLogging(e) {
    this.supports(E.Features.DEBUG_LOGGING) && (0, h.getVoiceEngine)().setDebugLogging(e)
  }
  setExperimentalAdm(e) {
    let {
      setExperimentalAdm: t,
      getAudioSubsystem: n
    } = (0, h.getVoiceEngine)();
    null == t || t(e), null == n || n(e => {
      this.audioSubsystem = e
    })
  }
  setLoopback(e, t) {
    null != (0, h.getVoiceEngine)().setLoopback && (0, h.getVoiceEngine)().setLoopback(e, {
      echoCancellation: t.echoCancellation,
      noiseSuppression: t.noiseSuppression,
      automaticGainControl: t.automaticGainControl,
      noiseCancellation: t.noiseCancellation
    }), null != (0, h.getVoiceEngine)().setEmitVADLevel2 ? (0, h.getVoiceEngine)().setEmitVADLevel2(e || this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0) : (0, h.getVoiceEngine)().setEmitVADLevel(e || this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0, e, {
      echoCancellation: t.echoCancellation,
      noiseSuppression: t.noiseSuppression,
      automaticGainControl: t.automaticGainControl,
      noiseCancellation: t.noiseCancellation
    })
  }
  getLoopback() {
    return !1
  }
  setH264Enabled(e) {
    let t = (0, h.getVoiceEngine)();
    t.setTransportOptions({
      h264Enabled: e
    })
  }
  setAv1Enabled(e) {
    let t = (0, h.getVoiceEngine)();
    t.setTransportOptions({
      av1Enabled: e
    })
  }
  setH265Enabled(e) {
    let t = (0, h.getVoiceEngine)();
    t.setTransportOptions({
      h265Enabled: e
    })
  }
  getCodecSurvey() {
    return null != this.codecSurvey ? Promise.resolve(this.codecSurvey) : new Promise((e, t) => {
      let n = (0, h.getVoiceEngine)();
      null != n.getCodecSurvey ? n.getCodecSurvey(t => {
        this.codecSurvey = t, e(t)
      }) : t(Error("getCodecSurvey is not implemented."))
    })
  }
  writeAudioDebugState() {
    return new Promise((e, t) => {
      let {
        writeAudioDebugState: n
      } = (0, h.getVoiceEngine)();
      null != n ? (n(), e()) : t(Error("Audio debug state is not supported."))
    })
  }
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {
    var t, n;
    null === (t = (n = (0, h.getVoiceEngine)()).setAecDump) || void 0 === t || t.call(n, e)
  }
  rankRtcRegions(e) {
    return new Promise((t, n) => {
      let {
        rankRtcRegions: i
      } = (0, h.getVoiceEngine)();
      null != i ? i(e, e => t(e)) : n(Error("RTC region latency test is not supported."))
    })
  }
  getSoundshareStatus() {
    return new Promise((e, t) => {
      let {
        getSoundshareStatus: n
      } = (0, h.getVoiceEngine)();
      null != n ? n(t => e(t)) : t(Error("getSoundshareStatus is not supported."))
    })
  }
  enableSoundshare() {
    return new Promise((e, t) => {
      let {
        enableSoundshare: n
      } = (0, h.getVoiceEngine)();
      null != n ? n((t, n) => e({
        code: t,
        message: n,
        willRetry: !1
      })) : t(Error("enableSoundshare is not supported."))
    })
  }
  createReplayConnection(e, t) {
    let n = c.default.createReplay(e, t);
    return null == n ? null : (n.on(u.BaseConnectionEvent.Destroy, e => {
      this.connections.delete(e), this.connectionsEmpty() && (0, h.setProcessPriority)(E.ProcessPriority.NORMAL)
    }), this.connections.add(n), (0, h.setProcessPriority)(E.ProcessPriority.HIGH), this.emit(u.MediaEngineEvent.Connection, n), n)
  }
  setUseDirectVideo(e) {
    m.default.useDirectVideo = e
  }
  setMaxSyncDelayOverride(e) {
    let {
      setMaxSyncDelayOverride: t
    } = (0, h.getVoiceEngine)();
    null != t && t(e)
  }
  applyMediaFilterSettings(e) {
    let {
      applyMediaFilterSettings: t,
      applyMediaFilterSettingsWithCallback: n
    } = (0, h.getVoiceEngine)();
    return null != n ? new Promise((t, i) => {
      n(e, t)
    }) : (null != t && t(e), Promise.resolve())
  }
  startLocalAudioRecording(e) {
    return new Promise((t, n) => {
      let {
        startLocalAudioRecording: i
      } = (0, h.getVoiceEngine)();
      null != i ? i(e, e => {
        e ? t() : n(Error("Failed to start local audio recording."))
      }) : n(Error("startLocalAudioRecording is not supported."))
    })
  }
  stopLocalAudioRecording(e) {
    var t, n;
    null === (t = (n = (0, h.getVoiceEngine)()).stopLocalAudioRecording) || void 0 === t || t.call(n, (t, n) => {
      e(t, n)
    }), this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0 && null != (0, h.getVoiceEngine)().setEmitVADLevel2 && (0, h.getVoiceEngine)().setEmitVADLevel2(!0)
  }
  speedTester(e, t) {
    if (!this.supports(E.Features.SPEED_TEST)) throw Error("speedTester is not supported.");
    let n = _.default.create(e, t);
    return n.on(u.BaseSpeedTesterEvent.Destroy, e => {
      this.speedTesters.delete(e), this.connectionsEmpty() && (0, h.setProcessPriority)(E.ProcessPriority.NORMAL)
    }), this.speedTesters.add(n), (0, h.setProcessPriority)(E.ProcessPriority.HIGH), n
  }
  setHasFullbandPerformance(e) {
    null != (0, h.getVoiceEngine)().setHasFullbandPerformance && (0, h.getVoiceEngine)().setHasFullbandPerformance(e)
  }
  getSupportedSecureFramesProtocolVersion() {
    var e;
    return null !== (e = (0, h.getVoiceEngine)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0
  }
  getSupportedBandwidthEstimationExperiments(e) {
    null != (0, h.getVoiceEngine)().getSupportedBandwidthEstimationExperiments && (0, h.getVoiceEngine)().getSupportedBandwidthEstimationExperiments(e)
  }
  watchdogTick() {
    let e = !1;
    (0, h.getVoiceEngine)().pingVoiceThread(() => {
      e = !0, this.consecutiveWatchdogFailures = 0
    }), setTimeout(() => {
      !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(u.MediaEngineEvent.WatchdogTimeout) : this.watchdogTick()
    }, E.WATCHDOG_TIMEOUT_MS)
  }
  connectionsEmpty() {
    return 0 === this.connections.size && 0 === this.speedTesters.size
  }
  constructor() {
    var t, n;
    super(), t = this, this.Video = m.default, this.Camera = g.default, this.videoInputDeviceId = E.DISABLED_DEVICE_ID, this.connections = new Set, this.speedTesters = new Set, this.lastVoiceActivity = -1, this.audioSubsystem = "standard", this.audioLayer = "", this.deviceChangeGeneration = 0, this.consecutiveWatchdogFailures = 0, this.codecSurvey = null, this.logger = new o.default("MediaEngineNative"), this.handleDeviceChange = function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      t.deviceChangeGeneration++, t.emit(u.MediaEngineEvent.DeviceChange, (0, f.sanitizeDevices)(E.DeviceTypes.AUDIO_INPUT, e), (0, f.sanitizeDevices)(E.DeviceTypes.AUDIO_OUTPUT, n), (0, f.sanitizeDevices)(E.DeviceTypes.VIDEO_INPUT, i))
    }, this.handleVolumeChange = (e, t) => {
      this.emit(u.MediaEngineEvent.VolumeChange, e * E.DEFAULT_VOLUME, t * E.DEFAULT_VOLUME)
    }, this.handleVoiceActivity = (e, t) => {
      let n = Date.now();
      this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && (this.lastVoiceActivity = n, this.emit(u.MediaEngineEvent.VoiceActivity, e, t))
    }, this.handleActiveSinksChange = (e, t) => {
      this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t))
    }, this.handleNewListener = e => {
      switch (e) {
        case u.MediaEngineEvent.VoiceActivity:
          null != (0, h.getVoiceEngine)().setEmitVADLevel2 ? (0, h.getVoiceEngine)().setEmitVADLevel2(!0) : (0, h.getVoiceEngine)().setEmitVADLevel(!0, !1, {});
          break;
        case u.MediaEngineEvent.DeviceChange:
          let t = this.deviceChangeGeneration;
          Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then(e => {
            let [n, i, s] = e;
            t === this.deviceChangeGeneration && this.emit(u.MediaEngineEvent.DeviceChange, n, i, s)
          })
      }
    }, this.handleRemoveListener = e => {
      e === u.MediaEngineEvent.VoiceActivity && (null != (0, h.getVoiceEngine)().setEmitVADLevel2 ? (0, h.getVoiceEngine)().setEmitVADLevel2(this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0) : (0, h.getVoiceEngine)().setEmitVADLevel(this.listenerCount(u.MediaEngineEvent.VoiceActivity) > 0, !1, {}))
    }, this.handleVideoInputInitialization = e => {
      this.emit(u.MediaEngineEvent.VideoInputInitialized, e)
    };
    let i = (0, h.getVoiceEngine)();
    if (i.setDeviceChangeCallback(this.handleDeviceChange), i.setVolumeChangeCallback(this.handleVolumeChange), i.setOnVoiceCallback(this.handleVoiceActivity), null === (n = i.setVideoInputInitializationCallback) || void 0 === n || n.call(i, this.handleVideoInputInitialization), i.setTransportOptions({
        idleJitterBufferFlush: !0,
        ducking: !1
      }), this.on("removeListener", this.handleRemoveListener), this.on("newListener", this.handleNewListener), null != (0, h.getVoiceEngine)().getAudioSubsystem ? (0, h.getVoiceEngine)().getAudioSubsystem((e, t) => {
        this.audioSubsystem = e, this.audioLayer = t
      }) : null != (0, h.getVoiceEngine)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, h.getVoiceEngine)().getUseLegacyAudioDevice() ? E.AudioSubsystems.LEGACY : E.AudioSubsystems.STANDARD), null != i.pingVoiceThread && "undefined" != typeof window && "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(), this.getDebugLogging() && !e.installedLogHooks)
      for (let t of (e.installedLogHooks = !0, ["trace", "debug", "info", "warn", "error", "log"])) {
        let e = console,
          n = e[t];
        null != n && (e[t] = function() {
          n.apply(this, arguments);
          try {
            let e = Array.from(arguments).map(e => null != e ? e.toString() : e).filter(e => "string" != typeof e || "\nfont-weight: bold;\ncolor: purple;\n" !== e);
            (0, h.getVoiceEngine)().consoleLog(t, JSON.stringify(e))
          } catch (e) {}
        })
      }
    null != i.setActiveSinksChangeCallback && i.setActiveSinksChangeCallback(this.handleActiveSinksChange), (0, d.default)(this)
  }
}).installedLogHooks = !1, s = i