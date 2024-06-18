"use strict";
n.d(t, {
  Z: function() {
    return p
  }
}), n(773603), n(411104), n(47120), n(600040);
var i = n(264344),
  r = n.n(i),
  s = n(259443),
  o = n(47770),
  a = n(174498),
  l = n.n(a),
  u = n(839548),
  _ = n(46973),
  d = n(734298),
  c = n(970838),
  E = n(68721),
  I = n(997653),
  T = n(384136),
  h = n(740197),
  S = n(548820),
  f = n(579237),
  N = n(582168),
  A = n(825040),
  m = n(65154),
  O = n(436620);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = new s.Y("MediaEngineWebRTC");
class p extends o.Z {
  destroy() {
    null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null), this.eachConnection(e => e.destroy()), this.emit(_.aB.Destroy), this.removeAllListeners()
  }
  interact() {
    !this.interacted && (document.createElement("audio").play(), this.interacted = !0), this.eachConnection(e => e.interact())
  }
  static supported() {
    return !__OVERLAY__ && (O.fi && null != window.AudioContext && null != window.RTCPeerConnection ? (n(250678), !0) : (C.info("WebRTC is not supported on", r().name, r().version), !1))
  }
  supported() {
    return !0
  }
  supports(e) {
    switch (e) {
      case m.AN.AUDIO_INPUT_DEVICE:
        return h.S5;
      case m.AN.AUDIO_OUTPUT_DEVICE:
        return h.ZA;
      case m.AN.VIDEO:
        return O.U8;
      case m.AN.DESKTOP_CAPTURE:
        var t;
        return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
      case m.AN.VOICE_PROCESSING:
        return "Chrome" === r().name;
      case m.AN.NATIVE_PING:
      case m.AN.DIAGNOSTICS:
        return O.Fo;
      case m.AN.DESKTOP_CAPTURE_APPLICATIONS:
      case m.AN.LOOPBACK:
      case m.AN.NOISE_SUPPRESSION:
      case m.AN.AUTOMATIC_GAIN_CONTROL:
        return "Safari" !== r().name;
      case m.AN.NOISE_CANCELLATION:
        return l()();
      case m.AN.QOS:
      case m.AN.ATTENUATION:
      case m.AN.AUTOMATIC_VAD:
      case m.AN.LEGACY_AUDIO_SUBSYSTEM:
      case m.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
      case m.AN.DEBUG_LOGGING:
      case m.AN.VOICE_PANNING:
      case m.AN.AUTO_ENABLE:
      case m.AN.DESKTOP_CAPTURE_FORMAT:
      case m.AN.VIDEO_HOOK:
      case m.AN.OPEN_H264:
      case m.AN.AEC_DUMP:
      case m.AN.DISABLE_VIDEO:
      case m.AN.CONNECTION_REPLAY:
      case m.AN.SIMULCAST:
      case m.AN.SCREEN_CAPTURE_KIT:
      default:
        return !1
    }
  }
  getAudioContext() {
    return null == this._audioContext && (this._audioContext = new AudioContext), this._audioContext
  }
  connect(e, t, n) {
    let {
      ssrc: i,
      address: r,
      port: s,
      modes: o,
      streamUserId: a,
      streamParameters: l
    } = n, d = (0, I.Q)(e, t, this.getAudioContext(), l);
    return d.streamUserId = a, d.setOutputVolume(this.outputVolume), d.setSinkId(this.sinkId), d.once(u.S.Destroy, e => this.connections.delete(e)), d.on(u.S.Silence, e => this.emit(_.aB.Silence, e)), d.on(u.S.DesktopSourceEnd, this.handleDesktopSourceEnd), d.on(u.S.AudioPermission, this.handleAudioPermission), d.on(u.S.VideoPermission, this.handleVideoPermission), this.interacted && d.interact(), e === m.Yn.DEFAULT && (d.setAudioSource(this.sourceId), this.enabled && d.input.enableAudioInput()), this.connections.add(d), this.emit(_.aB.Connection, d), d
  }
  findConnection(e) {
    return Array.from(this.connections).find(t => null == e || t.context === e)
  }
  eachConnection(e, t) {
    this.connections.forEach(n => {
      (null == t || n.context === t) && e(n)
    })
  }
  enable() {
    return null == this.enablePromise && (this.enablePromise = this._enable().finally(() => {
      this.enablePromise = null
    })), this.enablePromise
  }
  async _enable() {
    if (this.enabled) return;
    await this.getAudioContext().audioWorklet.addModule(S);
    let e = new E.Z(this.getAudioContext());
    e.on("permission", this.handleAudioPermission);
    try {
      var t;
      await e.enable(), "Firefox" === r().name && await this.handleDeviceChange(), this.enabled = !0, this.eachConnection(e => e.input.enableAudioInput(), m.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.enable()
    } finally {
      e.destroy()
    }
  }
  setInputVolume(e) {}
  setOutputVolume(e) {
    this.outputVolume = e, this.connections.forEach(t => t.setOutputVolume(e))
  }
  getAudioInputDevices() {
    return (0, h.Hg)()
  }
  setAudioInputDevice(e) {
    var t, n;
    this.sourceId = e, this.eachConnection(t => t.setAudioSource(e), m.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e)
  }
  getAudioOutputDevices() {
    return (0, h.HS)()
  }
  setAudioOutputDevice(e) {
    var t;
    this.sinkId = e, this.connections.forEach(t => t.setSinkId(e)), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e)
  }
  getVideoInputDevices() {
    return (0, h.l0)()
  }
  setVideoInputDevice(e) {
    this.eachConnection(t => t.setVideoSource(e), m.Yn.DEFAULT)
  }
  getSupportedVideoCodecs(e) {
    e([])
  }
  getCodecCapabilities(e) {
    e("")
  }
  async getDesktopSource(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = await T.Z.get(e, t);
    return this.pendingDesktopInputs[n.id] = n, n.id
  }
  getDesktopSources() {
    return Promise.reject(Error("NO_STREAM"))
  }
  getScreenPreviews(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  getWindowPreviews(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  setClipBufferLength(e) {}
  saveClip(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  saveClipForUser(e, t, n) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  updateClipMetadata(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  exportClip(e, t) {
    return Promise.reject(Error("UNSUPPORTED"))
  }
  setGoLiveSource(e, t) {
    if (null == e) this.eachConnection(e => e.setDesktopInput(null), t);
    else if (null != e.desktopDescription && null != this.findConnection(t)) {
      let n = this.pendingDesktopInputs[e.desktopDescription.id];
      delete this.pendingDesktopInputs[e.desktopDescription.id], null != n && this.eachConnection(e => e.setDesktopInput(n), t)
    }
  }
  setClipsSource(e) {}
  setClipsQualitySettings(e, t, n) {
    return !1
  }
  setSoundshareSource(e, t, n) {}
  setAudioSubsystem(e) {}
  getAudioSubsystem() {
    return m.iA.STANDARD
  }
  getAudioLayer() {
    return ""
  }
  getDebugLogging() {
    return !1
  }
  setDebugLogging(e) {}
  writeAudioDebugState() {
    return Promise.reject(Error("Audio debug state is not supported."))
  }
  setExperimentalAdm(e) {}
  setLoopback(e, t) {
    e && null == this.loopback ? (this.enable(), this.loopback = new f.Z(this.getAudioContext(), this.sourceId, this.sinkId), this.loopback.setNoiseCancellation(t.noiseCancellation)) : !e && null != this.loopback && (this.loopback.stop(), this.loopback = null)
  }
  getLoopback() {
    return null != this.loopback
  }
  setH264Enabled(e) {}
  setAv1Enabled(e) {}
  setH265Enabled(e) {}
  getCodecSurvey() {
    return Promise.reject(Error("getCodecSurvey is not implemented on MediaEngine of browsers."))
  }
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {}
  createReplayConnection(e, t) {
    throw Error("Connection replay is not supported.")
  }
  setUseDirectVideo(e) {}
  setMaxSyncDelayOverride(e) {}
  rankRtcRegions(e) {
    return Promise.reject(Error("RTC region latency test is not supported."))
  }
  applyMediaFilterSettings(e) {
    return Promise.resolve()
  }
  startLocalAudioRecording() {
    return Promise.reject(Error("startLocalAudioRecording is not supported."))
  }
  stopLocalAudioRecording(e) {}
  speedTester(e, t) {
    throw Error("speedTester is not supported.")
  }
  setHasFullbandPerformance(e) {}
  getSupportedSecureFramesProtocolVersion() {
    return 0
  }
  getSupportedBandwidthEstimationExperiments(e) {
    e([])
  }
  constructor() {
    super(), R(this, "Video", A.Z), R(this, "Camera", N.Z), R(this, "_audioContext", null), R(this, "outputVolume", m.Qx), R(this, "sourceId", m.w5), R(this, "sinkId", m.w5), R(this, "enabled", !1), R(this, "connections", new Set), R(this, "interacted", !1), R(this, "loopback", null), R(this, "voiceActivityInput", null), R(this, "pendingDesktopInputs", {}), R(this, "enablePromise", null), R(this, "handleActiveSinksChange", (e, t) => {
      this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t))
    }), R(this, "handleNewListener", e => {
      switch (e) {
        case _.aB.DeviceChange:
          null != navigator.mediaDevices && null == navigator.mediaDevices.ondevicechange && (navigator.mediaDevices.ondevicechange = () => {
            this.handleDeviceChange()
          }, this.handleDeviceChange());
          break;
        case _.aB.VoiceActivity:
          null == this.voiceActivityInput && (this.voiceActivityInput = new E.Z(this.getAudioContext()), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on("voiceactivity", this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable())
      }
    }), R(this, "handleRemoveListener", e => {
      switch (e) {
        case _.aB.DeviceChange:
          var t;
          (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(_.aB.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
          break;
        case _.aB.VoiceActivity:
          null != this.voiceActivityInput && 0 === this.listenerCount(_.aB.VoiceActivity) && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null)
      }
    }), R(this, "handleDeviceChange", () => (0, h.PW)().then(e => {
      let [t, n, i] = e;
      return this.emit(_.aB.DeviceChange, t, n, i)
    })), R(this, "handleVoiceActivity", e => {
      this.emit(_.aB.VoiceActivity, e, 0)
    }), R(this, "handleDesktopSourceEnd", () => {
      this.emit(_.aB.DesktopSourceEnd)
    }), R(this, "handleAudioPermission", e => {
      this.emit(_.aB.AudioPermission, e)
    }), R(this, "handleVideoPermission", e => {
      this.emit(_.aB.VideoPermission, e)
    }), this.on("newListener", this.handleNewListener), this.on("removeListener", this.handleRemoveListener), (0, c.px)(this.handleActiveSinksChange), (0, d.Z)(this)
  }
}