"use strict";
n.d(t, {
  Z: function() {
    return f
  }
}), n(47120), n(411104);
var i = n(264344),
  r = n.n(i),
  s = n(259443),
  o = n(47770),
  a = n(46973),
  l = n(734298),
  u = n(997545),
  _ = n(501950),
  d = n(801334),
  c = n(992774),
  E = n(656795),
  I = n(650886),
  T = n(149396);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function S(e) {
  return (null != e ? e : T.Qx) / T.Qx
}
class f extends o.Z {
  destroy() {
    this.eachConnection(e => e.destroy()), this.emit(a.aB.Destroy), this.removeAllListeners()
  }
  interact() {}
  static supported() {
    return (0, c.Zh)()
  }
  supported() {
    return !0
  }
  supports(e) {
    var t, n;
    switch (e) {
      case T.AN.LEGACY_AUDIO_SUBSYSTEM:
        return (0, c.eJ)(T.eR.VOICE_LEGACY_SUBSYSTEM);
      case T.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
        return (0, c.eJ)(T.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
      case T.AN.DEBUG_LOGGING:
        return (0, c.eJ)(T.eR.DEBUG_LOGGING);
      case T.AN.SOUNDSHARE:
        return (0, c.eJ)(T.eR.SOUNDSHARE);
      case T.AN.SCREEN_SOUNDSHARE:
        return (0, c.eJ)(T.eR.SCREEN_SOUNDSHARE);
      case T.AN.ELEVATED_HOOK:
        return (0, c.eJ)(T.eR.ELEVATED_HOOK);
      case T.AN.LOOPBACK:
        return (0, c.eJ)(T.eR.LOOPBACK);
      case T.AN.WUMPUS_VIDEO:
        return (0, c.eJ)(T.eR.WUMPUS_VIDEO);
      case T.AN.HYBRID_VIDEO:
        return (0, c.eJ)(T.eR.HYBRID_VIDEO);
      case T.AN.ATTENUATION:
      case T.AN.VIDEO_HOOK:
        return (null === r() || void 0 === r() ? void 0 : null === (t = r().os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(r().os.family);
      case T.AN.EXPERIMENTAL_SOUNDSHARE:
        return (0, c.eJ)(T.eR.SOUNDSHARE_LOOPBACK);
      case T.AN.OPEN_H264:
        return (null === r() || void 0 === r() ? void 0 : null === (n = r().os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(r().os.family);
      case T.AN.EXPERIMENTAL_ENCODERS:
        return (0, c.eJ)(T.eR.EXPERIMENTAL_ENCODERS);
      case T.AN.REMOTE_LOCUS_NETWORK_CONTROL:
        return (0, c.eJ)(T.eR.REMOTE_LOCUS_NETWORK_CONTROL);
      case T.AN.SCREEN_PREVIEWS:
        return (0, c.eJ)(T.eR.SCREEN_PREVIEWS);
      case T.AN.CLIPS:
        return (0, c.eJ)(T.eR.CLIPS);
      case T.AN.WINDOW_PREVIEWS:
        return (0, c.eJ)(T.eR.WINDOW_PREVIEWS);
      case T.AN.AUDIO_DEBUG_STATE:
        return (0, c.eJ)(T.eR.AUDIO_DEBUG_STATE);
      case T.AN.CONNECTION_REPLAY:
        return (0, c.eJ)(T.eR.CONNECTION_REPLAY);
      case T.AN.SIMULCAST:
        return (0, c.eJ)(T.eR.SIMULCAST) && (0, c.eJ)(T.eR.SIMULCAST_BUGFIX);
      case T.AN.RTC_REGION_RANKING:
        return (0, c.eJ)(T.eR.RTC_REGION_RANKING);
      case T.AN.DIRECT_VIDEO:
        return (0, c.eJ)(T.eR.DIRECT_VIDEO) && null != window.createDiscordStream;
      case T.AN.ELECTRON_VIDEO:
        return (0, c.eJ)(T.eR.ELECTRON_VIDEO);
      case T.AN.MEDIAPIPE:
        return (0, c.eJ)(T.eR.MEDIAPIPE);
      case T.AN.FIXED_KEYFRAME_INTERVAL:
        return (0, c.eJ)(T.eR.FIXED_KEYFRAME_INTERVAL);
      case T.AN.FIRST_FRAME_CALLBACK:
        return (0, c.eJ)(T.eR.FIRST_FRAME_CALLBACK);
      case T.AN.REMOTE_USER_MULTI_STREAM:
        return (0, c.eJ)(T.eR.REMOTE_USER_MULTI_STREAM);
      case T.AN.SPEED_TEST:
        return (0, c.eJ)(T.eR.SPEED_TEST);
      case T.AN.IMAGE_QUALITY_MEASUREMENT:
        return (0, c.eJ)(T.eR.IMAGE_QUALITY_MEASUREMENT);
      case T.AN.AMD_EXPERIMENTAL_RATE_CONTROL:
        return (0, c.eJ)(T.eR.AMD_EXPERIMENTAL_RATE_CONTROL);
      case T.AN.GO_LIVE_HARDWARE:
        return (0, c.eJ)(T.eR.GO_LIVE_HARDWARE);
      case T.AN.SCREEN_CAPTURE_KIT:
        return (0, c.eJ)(T.eR.SCREEN_CAPTURE_KIT);
      case T.AN.CAPTURE_TIMEOUT_EXPERIMENTS:
        return (0, c.eJ)(T.eR.CAPTURE_TIMEOUT_EXPERIMENTS);
      case T.AN.DIAGNOSTICS:
      case T.AN.NATIVE_PING:
      case T.AN.AUTOMATIC_VAD:
      case T.AN.AUDIO_INPUT_DEVICE:
      case T.AN.AUDIO_OUTPUT_DEVICE:
      case T.AN.QOS:
      case T.AN.VOICE_PROCESSING:
      case T.AN.AUTO_ENABLE:
      case T.AN.VIDEO:
      case T.AN.DESKTOP_CAPTURE:
      case T.AN.DESKTOP_CAPTURE_FORMAT:
      case T.AN.DESKTOP_CAPTURE_APPLICATIONS:
      case T.AN.VOICE_PANNING:
      case T.AN.AEC_DUMP:
      case T.AN.DISABLE_VIDEO:
      case T.AN.SAMPLE_PLAYBACK:
      case T.AN.NOISE_SUPPRESSION:
      case T.AN.AUTOMATIC_GAIN_CONTROL:
        return !0;
      default:
        return !1
    }
  }
  connect(e, t, n) {
    !(0, c.eJ)(T.eR.EXPERIMENT_CONFIG) && (n.experiments = void 0);
    let i = u.Z.create(e, t, n);
    return i.on(a.Sh.Destroy, e => {
      this.connections.delete(e), this.connectionsEmpty() && (0, c.p8)(T.uJ.NORMAL)
    }), i.on(a.Sh.Connected, () => {
      i.setVideoBroadcast(this.shouldConnectionBroadcastVideo(i))
    }), i.on(a.Sh.Silence, e => {
      this.emit(a.aB.Silence, e)
    }), this.connections.add(i), (0, c.p8)(T.uJ.HIGH), this.emit(a.aB.Connection, i), i
  }
  shouldConnectionBroadcastVideo(e) {
    return e.context === T.Yn.DEFAULT && this.videoInputDeviceId !== T.Av || e.hasDesktopSource()
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
    (0, c.zS)().setInputVolume(S(e))
  }
  setOutputVolume(e) {
    (0, c.zS)().setOutputVolume(S(e))
  }
  getAudioInputDevices() {
    return (0, _.Hg)()
  }
  setAudioInputDevice(e) {
    (0, c.eJ)(T.eR.SET_AUDIO_DEVICE_BY_ID) ? (0, c.zS)().setInputDevice(e): (0, _.Hg)().then(t => {
      var n;
      let i = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
      null != i && (0, c.zS)().setInputDevice(i.index)
    })
  }
  getAudioOutputDevices() {
    return (0, _.HS)()
  }
  setAudioOutputDevice(e) {
    (0, c.eJ)(T.eR.SET_AUDIO_DEVICE_BY_ID) ? (0, c.zS)().setOutputDevice(e): (0, _.HS)().then(t => {
      var n;
      let i = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
      null != i && (0, c.zS)().setOutputDevice(i.index)
    })
  }
  getVideoInputDevices() {
    return (0, _.l0)()
  }
  async setVideoInputDevice(e) {
    let t = (await this.getVideoInputDevices()).find(t => t.id === e),
      n = null != t ? t.id : T.Av;
    if (n !== this.videoInputDeviceId) {
      if (this.videoInputDeviceId = n, (0, c.eJ)(T.eR.SET_VIDEO_DEVICE_BY_ID)) {
        let e = null != t ? null != t.originalId && "" !== t.originalId ? t.originalId : t.id : T.Av;
        (0, c.zS)().setVideoInputDevice(e)
      } else(0, c.zS)().setVideoInputDevice(null != t ? t.index : -1);
      this.connections.forEach(e => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)))
    }
  }
  getSupportedVideoCodecs(e) {
    (0, c.zS)().getSupportedVideoCodecs(e)
  }
  getCodecCapabilities(e) {
    (0, c.zS)().getCodecCapabilities(e)
  }
  setGoLiveSource(e, t) {
    if (null == e) {
      this.eachConnection(e => {
        e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e))
      }, t);
      return
    }
    this.eachConnection(n => {
      if (t !== T.Yn.STREAM || n.streamUserId === n.userId) n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n))
    }, t)
  }
  setClipsSource(e) {
    if (null == (0, c.zS)().setClipsSource || null == (0, c.zS)().setOnClipsRecordingEvent || null == (0, c.zS)().applyClipsSettings) return;
    if (null == e) {
      (0, c.zS)().setClipsSource({
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
      soundshareId: r,
      useLoopback: s,
      useVideoHook: o,
      useGraphicsCapture: l,
      useQuartzCapturer: u,
      allowScreenCaptureKit: _,
      hdrCaptureMode: d
    } = e.desktopDescription;
    (0, c.zS)().setOnClipsRecordingEvent(t => {
      this.logger.info("Clips recording event: ".concat(T.Pf[t], " received for stream ").concat(i, " and sound ").concat(r, ".")), t === T.Pf.GoLiveEnded ? this.emit(a.aB.ClipsRecordingRestartNeeded) : t === T.Pf.Error ? this.emit(a.aB.ClipsInitFailure, "Failed to set clips source in media engine", e.applicationName) : (t === T.Pf.Ended || t === T.Pf.StoppedByGoLive) && this.emit(a.aB.ClipsRecordingEnded, i, r)
    }), (0, c.zS)().applyClipsSettings({
      useVideoHook: o,
      useGraphicsCapture: l,
      useQuartzCapturer: u,
      allowScreenCaptureKit: _,
      hdrCaptureMode: d,
      soundshareLoopback: s,
      frameRate: t,
      width: n <= 480 ? n / 3 * 4 : n / 9 * 16,
      height: n
    });
    let [E, I] = null != i ? i.split(":") : ["", ""];
    (0, c.zS)().setClipsSource({
      id: I,
      soundshareId: null != r ? r : 0
    })
  }
  setClipsQualitySettings(e, t, n) {
    let i = (0, c.zS)();
    return null != i.applyClipsQualitySettings && (i.applyClipsQualitySettings(e, t, n), !0)
  }
  setSoundshareSource(e, t, n) {
    this.eachConnection(i => {
      if (n !== T.Yn.STREAM || i.streamUserId === i.userId) i.setSoundshareSource(e, t)
    }, n)
  }
  getDesktopSource() {
    return Promise.reject(Error("NO_STREAM"))
  }
  getDesktopSources() {
    return new Promise(e => {
      null != (0, c.zS)().getDesktopSources ? (0, c.zS)().getDesktopSources(t => e(t)) : e([])
    })
  }
  getScreenPreviews(e, t) {
    return new Promise(n => {
      null != (0, c.zS)().getScreenPreviews ? (0, c.zS)().getScreenPreviews(e, t, e => {
        n(e.map((e, t) => ({
          ...e,
          name: "Screen " + (t + 1)
        })))
      }) : n([])
    })
  }
  setClipBufferLength(e) {
    var t, n;
    null === (t = (n = (0, c.zS)()).setClipBufferLength) || void 0 === t || t.call(n, e)
  }
  saveClip(e, t) {
    let n = (0, c.zS)();
    return null == n.setClipBufferLength || null == n.saveClip ? Promise.reject("unsupported") : new Promise((i, r) => {
      n.saveClip(e, t, (e, t, n) => i({
        duration: e,
        clipStats: JSON.parse(n)
      }), e => r(JSON.parse(e)))
    })
  }
  saveClipForUser(e, t, n) {
    let i = (0, c.zS)();
    return null == i.saveClipForUser ? Promise.reject("unsupported") : new Promise((r, s) => {
      i.saveClipForUser(e, t, n, (e, t, n) => r({
        duration: e,
        clipStats: JSON.parse(n)
      }), e => s(JSON.parse(e)))
    })
  }
  updateClipMetadata(e, t) {
    let n = (0, c.zS)();
    return null == n.updateClipMetadata ? Promise.reject("unsupported") : new Promise((i, r) => {
      n.updateClipMetadata(e, t, i, r)
    })
  }
  exportClip(e, t) {
    let n = (0, c.zS)();
    return null == n.exportClip ? Promise.reject("unsupported") : new Promise((i, r) => {
      n.exportClip(e, t, e => i(new Blob([e])), r)
    })
  }
  getWindowPreviews(e, t) {
    return new Promise(n => {
      null != (0, c.zS)().getWindowPreviews ? (0, c.zS)().getWindowPreviews(e, t, e => {
        n(e)
      }) : n([])
    })
  }
  setAudioSubsystem(e) {
    null != (0, c.zS)().setAudioSubsystem ? (0, c.zS)().setAudioSubsystem(e) : (0, c.zS)().setUseLegacyAudioDevice(e === T.iA.LEGACY)
  }
  getAudioSubsystem() {
    return this.audioSubsystem
  }
  getAudioLayer() {
    return this.audioLayer
  }
  getDebugLogging() {
    return !!this.supports(T.AN.DEBUG_LOGGING) && (0, c.zS)().getDebugLogging()
  }
  setDebugLogging(e) {
    this.supports(T.AN.DEBUG_LOGGING) && (0, c.zS)().setDebugLogging(e)
  }
  setExperimentalAdm(e) {
    let {
      setExperimentalAdm: t,
      getAudioSubsystem: n
    } = (0, c.zS)();
    null == t || t(e), null == n || n(e => {
      this.audioSubsystem = e
    })
  }
  setLoopback(e, t) {
    null != (0, c.zS)().setLoopback && (0, c.zS)().setLoopback(e, {
      echoCancellation: t.echoCancellation,
      noiseSuppression: t.noiseSuppression,
      automaticGainControl: t.automaticGainControl,
      noiseCancellation: t.noiseCancellation
    }), null != (0, c.zS)().setEmitVADLevel2 ? (0, c.zS)().setEmitVADLevel2(e || this.listenerCount(a.aB.VoiceActivity) > 0) : (0, c.zS)().setEmitVADLevel(e || this.listenerCount(a.aB.VoiceActivity) > 0, e, {
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
    (0, c.zS)().setTransportOptions({
      h264Enabled: e
    })
  }
  setAv1Enabled(e) {
    (0, c.zS)().setTransportOptions({
      av1Enabled: e
    })
  }
  setH265Enabled(e) {
    (0, c.zS)().setTransportOptions({
      h265Enabled: e
    })
  }
  getCodecSurvey() {
    return null != this.codecSurvey ? Promise.resolve(this.codecSurvey) : new Promise((e, t) => {
      let n = (0, c.zS)();
      null != n.getCodecSurvey ? n.getCodecSurvey(t => {
        this.codecSurvey = t, e(t)
      }) : t(Error("getCodecSurvey is not implemented."))
    })
  }
  writeAudioDebugState() {
    return new Promise((e, t) => {
      let {
        writeAudioDebugState: n
      } = (0, c.zS)();
      null != n ? (n(), e()) : t(Error("Audio debug state is not supported."))
    })
  }
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {
    var t, n;
    null === (t = (n = (0, c.zS)()).setAecDump) || void 0 === t || t.call(n, e)
  }
  rankRtcRegions(e) {
    return new Promise((t, n) => {
      let {
        rankRtcRegions: i
      } = (0, c.zS)();
      null != i ? i(e, e => t(e)) : n(Error("RTC region latency test is not supported."))
    })
  }
  createReplayConnection(e, t) {
    let n = u.Z.createReplay(e, t);
    return null == n ? null : (n.on(a.Sh.Destroy, e => {
      this.connections.delete(e), this.connectionsEmpty() && (0, c.p8)(T.uJ.NORMAL)
    }), this.connections.add(n), (0, c.p8)(T.uJ.HIGH), this.emit(a.aB.Connection, n), n)
  }
  setUseDirectVideo(e) {
    I.Z.useDirectVideo = e
  }
  setMaxSyncDelayOverride(e) {
    let {
      setMaxSyncDelayOverride: t
    } = (0, c.zS)();
    null != t && t(e)
  }
  applyMediaFilterSettings(e) {
    let {
      applyMediaFilterSettings: t,
      applyMediaFilterSettingsWithCallback: n
    } = (0, c.zS)();
    return null != n ? new Promise((t, i) => {
      n(e, t)
    }) : (null != t && t(e), Promise.resolve())
  }
  startLocalAudioRecording(e) {
    return new Promise((t, n) => {
      let {
        startLocalAudioRecording: i
      } = (0, c.zS)();
      null != i ? i(e, e => {
        e ? t() : n(Error("Failed to start local audio recording."))
      }) : n(Error("startLocalAudioRecording is not supported."))
    })
  }
  stopLocalAudioRecording(e) {
    var t, n;
    null === (t = (n = (0, c.zS)()).stopLocalAudioRecording) || void 0 === t || t.call(n, (t, n) => {
      e(t, n)
    }), this.listenerCount(a.aB.VoiceActivity) > 0 && null != (0, c.zS)().setEmitVADLevel2 && (0, c.zS)().setEmitVADLevel2(!0)
  }
  speedTester(e, t) {
    if (!this.supports(T.AN.SPEED_TEST)) throw Error("speedTester is not supported.");
    let n = d.Z.create(e, t);
    return n.on(a.aj.Destroy, e => {
      this.speedTesters.delete(e), this.connectionsEmpty() && (0, c.p8)(T.uJ.NORMAL)
    }), this.speedTesters.add(n), (0, c.p8)(T.uJ.HIGH), n
  }
  setHasFullbandPerformance(e) {
    null != (0, c.zS)().setHasFullbandPerformance && (0, c.zS)().setHasFullbandPerformance(e)
  }
  getSupportedSecureFramesProtocolVersion() {
    var e;
    return null !== (e = (0, c.zS)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0
  }
  getSupportedBandwidthEstimationExperiments(e) {
    null != (0, c.zS)().getSupportedBandwidthEstimationExperiments && (0, c.zS)().getSupportedBandwidthEstimationExperiments(e)
  }
  watchdogTick() {
    let e = !1;
    (0, c.zS)().pingVoiceThread(() => {
      e = !0, this.consecutiveWatchdogFailures = 0
    }), setTimeout(() => {
      !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(a.aB.WatchdogTimeout) : this.watchdogTick()
    }, T.H0)
  }
  connectionsEmpty() {
    return 0 === this.connections.size && 0 === this.speedTesters.size
  }
  constructor() {
    var e, t;
    super(), e = this, h(this, "Video", I.Z), h(this, "Camera", E.Z), h(this, "videoInputDeviceId", T.Av), h(this, "connections", new Set), h(this, "speedTesters", new Set), h(this, "lastVoiceActivity", -1), h(this, "audioSubsystem", "standard"), h(this, "audioLayer", ""), h(this, "deviceChangeGeneration", 0), h(this, "consecutiveWatchdogFailures", 0), h(this, "codecSurvey", null), h(this, "logger", new s.Y("MediaEngineNative")), h(this, "handleDeviceChange", function() {
      let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
      e.deviceChangeGeneration++, e.emit(a.aB.DeviceChange, (0, _.C1)(T.h7.AUDIO_INPUT, t), (0, _.C1)(T.h7.AUDIO_OUTPUT, n), (0, _.C1)(T.h7.VIDEO_INPUT, i))
    }), h(this, "handleVolumeChange", (e, t) => {
      this.emit(a.aB.VolumeChange, e * T.Qx, t * T.Qx)
    }), h(this, "handleVoiceActivity", (e, t) => {
      let n = Date.now();
      this.listenerCount(a.aB.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && (this.lastVoiceActivity = n, this.emit(a.aB.VoiceActivity, e, t))
    }), h(this, "handleActiveSinksChange", (e, t) => {
      this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t))
    }), h(this, "handleNewListener", e => {
      switch (e) {
        case a.aB.VoiceActivity:
          null != (0, c.zS)().setEmitVADLevel2 ? (0, c.zS)().setEmitVADLevel2(!0) : (0, c.zS)().setEmitVADLevel(!0, !1, {});
          break;
        case a.aB.DeviceChange:
          let t = this.deviceChangeGeneration;
          Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then(e => {
            let [n, i, r] = e;
            t === this.deviceChangeGeneration && this.emit(a.aB.DeviceChange, n, i, r)
          })
      }
    }), h(this, "handleRemoveListener", e => {
      e === a.aB.VoiceActivity && (null != (0, c.zS)().setEmitVADLevel2 ? (0, c.zS)().setEmitVADLevel2(this.listenerCount(a.aB.VoiceActivity) > 0) : (0, c.zS)().setEmitVADLevel(this.listenerCount(a.aB.VoiceActivity) > 0, !1, {}))
    }), h(this, "handleVideoInputInitialization", e => {
      this.emit(a.aB.VideoInputInitialized, e)
    });
    let n = (0, c.zS)();
    if (n.setDeviceChangeCallback(this.handleDeviceChange), n.setVolumeChangeCallback(this.handleVolumeChange), n.setOnVoiceCallback(this.handleVoiceActivity), null === (t = n.setVideoInputInitializationCallback) || void 0 === t || t.call(n, this.handleVideoInputInitialization), n.setTransportOptions({
        idleJitterBufferFlush: !0,
        ducking: !1
      }), this.on("removeListener", this.handleRemoveListener), this.on("newListener", this.handleNewListener), null != (0, c.zS)().getAudioSubsystem ? (0, c.zS)().getAudioSubsystem((e, t) => {
        this.audioSubsystem = e, this.audioLayer = t
      }) : null != (0, c.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, c.zS)().getUseLegacyAudioDevice() ? T.iA.LEGACY : T.iA.STANDARD), null != n.pingVoiceThread && "undefined" != typeof window && "canary" === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(), this.getDebugLogging() && !f.installedLogHooks)
      for (let e of (f.installedLogHooks = !0, ["trace", "debug", "info", "warn", "error", "log"])) {
        let t = console,
          n = t[e];
        null != n && (t[e] = function() {
          n.apply(this, arguments);
          try {
            let t = Array.from(arguments).map(e => null != e ? e.toString() : e).filter(e => "string" != typeof e || "\nfont-weight: bold;\ncolor: purple;\n" !== e);
            (0, c.zS)().consoleLog(e, JSON.stringify(t))
          } catch (e) {}
        })
      }
    null != n.setActiveSinksChangeCallback && n.setActiveSinksChangeCallback(this.handleActiveSinksChange), (0, l.Z)(this)
  }
}
h(f, "installedLogHooks", !1)