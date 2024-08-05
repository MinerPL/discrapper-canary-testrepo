n.d(t, {
  Z: function() {
return C;
  }
}), n(773603), n(411104), n(47120), n(600040);
var r = n(512722),
  i = n.n(r),
  a = n(264344),
  s = n.n(a),
  o = n(259443),
  l = n(47770),
  u = n(174498),
  c = n.n(u),
  d = n(839548),
  _ = n(46973),
  E = n(734298),
  f = n(970838),
  h = n(68721),
  p = n(997653),
  m = n(384136),
  I = n(740197),
  T = n(548820),
  g = n(579237),
  S = n(582168),
  A = n(825040),
  N = n(65154),
  v = n(436620);

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let R = new o.Y('MediaEngineWebRTC');
class C extends l.Z {
  destroy() {
null != this.voiceActivityInput && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null), this.eachConnection(e => e.destroy()), this.emit(_.aB.Destroy), this.removeAllListeners();
  }
  interact() {
!this.interacted && (document.createElement('audio').play(), this.interacted = !0), this.eachConnection(e => e.interact());
  }
  static supported() {
return !__OVERLAY__ && (v.fi && null != window.AudioContext && null != window.RTCPeerConnection ? (n(250678), !0) : (R.info('WebRTC is not supported on', s().name, s().version), !1));
  }
  supported() {
return !0;
  }
  supports(e) {
switch (e) {
  case N.AN.AUDIO_INPUT_DEVICE:
    return I.S5;
  case N.AN.AUDIO_OUTPUT_DEVICE:
    return I.ZA;
  case N.AN.VIDEO:
    return v.U8;
  case N.AN.DESKTOP_CAPTURE:
    var t;
    return (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.getDisplayMedia) != null;
  case N.AN.VOICE_PROCESSING:
    return 'Chrome' === s().name;
  case N.AN.NATIVE_PING:
  case N.AN.DIAGNOSTICS:
    return v.Fo;
  case N.AN.DESKTOP_CAPTURE_APPLICATIONS:
  case N.AN.LOOPBACK:
  case N.AN.NOISE_SUPPRESSION:
  case N.AN.AUTOMATIC_GAIN_CONTROL:
    return 'Safari' !== s().name;
  case N.AN.NOISE_CANCELLATION:
    return c()();
  case N.AN.QOS:
  case N.AN.ATTENUATION:
  case N.AN.AUTOMATIC_VAD:
  case N.AN.LEGACY_AUDIO_SUBSYSTEM:
  case N.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
  case N.AN.DEBUG_LOGGING:
  case N.AN.VOICE_PANNING:
  case N.AN.AUTO_ENABLE:
  case N.AN.DESKTOP_CAPTURE_FORMAT:
  case N.AN.VIDEO_HOOK:
  case N.AN.OPEN_H264:
  case N.AN.AEC_DUMP:
  case N.AN.DISABLE_VIDEO:
  case N.AN.CONNECTION_REPLAY:
  case N.AN.SIMULCAST:
  case N.AN.SCREEN_CAPTURE_KIT:
  default:
    return !1;
}
  }
  getAudioContext() {
return null == this._audioContext && (this._audioContext = new AudioContext()), this._audioContext;
  }
  connect(e, t, n) {
let {
  ssrc: r,
  address: i,
  port: a,
  modes: s,
  streamUserId: o,
  streamParameters: l
} = n, u = (0, p.Q)(e, t, this.getAudioContext(), l);
return u.streamUserId = o, u.setOutputVolume(this.outputVolume), u.setSinkId(this.sinkId), u.once(d.S.Destroy, e => this.connections.delete(e)), u.on(d.S.Silence, e => this.emit(_.aB.Silence, e)), u.on(d.S.DesktopSourceEnd, this.handleDesktopSourceEnd), u.on(d.S.AudioPermission, this.handleAudioPermission), u.on(d.S.VideoPermission, this.handleVideoPermission), this.interacted && u.interact(), e === N.Yn.DEFAULT && (u.setAudioSource(this.sourceId), this.enabled && u.input.enableAudioInput()), this.connections.add(u), this.emit(_.aB.Connection, u), u;
  }
  findConnection(e) {
return Array.from(this.connections).find(t => null == e || t.context === e);
  }
  eachConnection(e, t) {
this.connections.forEach(n => {
  (null == t || n.context === t) && e(n);
});
  }
  enable() {
return null == this.enablePromise && (this.enablePromise = this._enable().finally(() => {
  this.enablePromise = null;
})), this.enablePromise;
  }
  async _enable() {
if (this.enabled)
  return;
await this.getAudioContext().audioWorklet.addModule(T);
let e = new h.Z(this.getAudioContext());
e.on('permission', this.handleAudioPermission);
try {
  var t;
  await e.enable(), 'Firefox' === s().name && await this.handleDeviceChange(), this.enabled = !0, this.eachConnection(e => e.input.enableAudioInput(), N.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.enable();
} finally {
  e.destroy();
}
  }
  setInputVolume(e) {}
  setOutputVolume(e) {
this.outputVolume = e, this.connections.forEach(t => t.setOutputVolume(e));
  }
  getAudioInputDevices() {
return (0, I.Hg)();
  }
  setAudioInputDevice(e) {
var t, n;
this.sourceId = e, this.eachConnection(t => t.setAudioSource(e), N.Yn.DEFAULT), null === (t = this.voiceActivityInput) || void 0 === t || t.setSource(e), null === (n = this.loopback) || void 0 === n || n.setAudioSource(e);
  }
  getAudioOutputDevices() {
return (0, I.HS)();
  }
  setAudioOutputDevice(e) {
var t;
this.sinkId = e, this.connections.forEach(t => t.setSinkId(e)), null === (t = this.loopback) || void 0 === t || t.setAudioSink(e);
  }
  getVideoInputDevices() {
return (0, I.l0)();
  }
  setVideoInputDevice(e) {
this.eachConnection(t => t.setVideoSource(e), N.Yn.DEFAULT);
  }
  getSupportedVideoCodecs(e) {
e([]);
  }
  getCodecCapabilities(e) {
e('');
  }
  async getDesktopSource(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
  n = await m.Z.get(e, t);
return this.pendingDesktopInputs[n.id] = n, n.id;
  }
  getDesktopSources() {
return Promise.reject(Error('NO_STREAM'));
  }
  getScreenPreviews(e, t) {
return Promise.reject(Error('UNSUPPORTED'));
  }
  getWindowPreviews(e, t) {
return Promise.reject(Error('UNSUPPORTED'));
  }
  setClipBufferLength(e) {}
  saveClip(e, t) {
return Promise.reject(Error('UNSUPPORTED'));
  }
  saveClipForUser(e, t, n) {
return Promise.reject(Error('UNSUPPORTED'));
  }
  updateClipMetadata(e, t) {
return Promise.reject(Error('UNSUPPORTED'));
  }
  exportClip(e, t) {
return Promise.reject(Error('UNSUPPORTED'));
  }
  setGoLiveSource(e, t) {
if (null == e)
  this.eachConnection(e => e.setDesktopInput(null), t);
else if (null != e.desktopDescription && null != this.findConnection(t)) {
  i()(t === N.Yn.STREAM, 'Go live context is not STREAM');
  let n = !1,
    r = this.pendingDesktopInputs[e.desktopDescription.id];
  null != r && this.eachConnection(e => {
    e.streamUserId === e.userId && (n = !0, e.setDesktopInput(r));
  }, t), n && delete this.pendingDesktopInputs[e.desktopDescription.id];
}
  }
  setClipsSource(e) {}
  setClipsQualitySettings(e, t, n) {
return !1;
  }
  setSoundshareSource(e, t, n) {}
  setAudioSubsystem(e) {}
  getAudioSubsystem() {
return N.iA.STANDARD;
  }
  getAudioLayer() {
return '';
  }
  getDebugLogging() {
return !1;
  }
  setDebugLogging(e) {}
  writeAudioDebugState() {
return Promise.reject(Error('Audio debug state is not supported.'));
  }
  setExperimentalAdm(e) {}
  setLoopback(e, t) {
e && null == this.loopback ? (this.enable(), this.loopback = new g.Z(this.getAudioContext(), this.sourceId, this.sinkId), this.loopback.setNoiseCancellation(t.noiseCancellation)) : !e && null != this.loopback && (this.loopback.stop(), this.loopback = null);
  }
  getLoopback() {
return null != this.loopback;
  }
  setH264Enabled(e) {}
  setAv1Enabled(e) {}
  setH265Enabled(e) {}
  getCodecSurvey() {
return Promise.reject(Error('getCodecSurvey is not implemented on MediaEngine of browsers.'));
  }
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {}
  createReplayConnection(e, t) {
throw Error('Connection replay is not supported.');
  }
  setUseDirectVideo(e) {}
  setMaxSyncDelayOverride(e) {}
  rankRtcRegions(e) {
return Promise.reject(Error('RTC region latency test is not supported.'));
  }
  applyMediaFilterSettings(e) {
return Promise.resolve();
  }
  startLocalAudioRecording() {
return Promise.reject(Error('startLocalAudioRecording is not supported.'));
  }
  stopLocalAudioRecording(e) {}
  speedTester(e, t) {
throw Error('speedTester is not supported.');
  }
  setHasFullbandPerformance(e) {}
  getSupportedSecureFramesProtocolVersion() {
return 0;
  }
  getSupportedBandwidthEstimationExperiments(e) {
e([]);
  }
  getMLSSigningKey(e, t) {
return Promise.reject(Error('getMLSSigningKey is not supported.'));
  }
  setSidechainCompression(e) {}
  setNativeDesktopVideoSourcePickerActive(e) {}
  presentNativeScreenSharePicker(e) {}
  releaseNativeDesktopVideoSourcePickerStream() {}
  constructor() {
super(), O(this, 'Video', A.Z), O(this, 'Camera', S.Z), O(this, '_audioContext', null), O(this, 'outputVolume', N.Qx), O(this, 'sourceId', N.w5), O(this, 'sinkId', N.w5), O(this, 'enabled', !1), O(this, 'connections', new Set()), O(this, 'interacted', !1), O(this, 'loopback', null), O(this, 'voiceActivityInput', null), O(this, 'pendingDesktopInputs', {}), O(this, 'enablePromise', null), O(this, 'handleActiveSinksChange', (e, t) => {
  this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t));
}), O(this, 'handleNewListener', e => {
  switch (e) {
    case _.aB.DeviceChange:
      null != navigator.mediaDevices && null == navigator.mediaDevices.ondevicechange && (navigator.mediaDevices.ondevicechange = () => {
        this.handleDeviceChange();
      }, this.handleDeviceChange());
      break;
    case _.aB.VoiceActivity:
      null == this.voiceActivityInput && (this.voiceActivityInput = new h.Z(this.getAudioContext()), this.voiceActivityInput.setSource(this.sourceId), this.voiceActivityInput.on('voiceactivity', this.handleVoiceActivity), this.enabled && this.voiceActivityInput.enable());
  }
}), O(this, 'handleRemoveListener', e => {
  switch (e) {
    case _.aB.DeviceChange:
      var t;
      (null === (t = navigator.mediaDevices) || void 0 === t ? void 0 : t.ondevicechange) != null && 0 === this.listenerCount(_.aB.DeviceChange) && (navigator.mediaDevices.ondevicechange = null);
      break;
    case _.aB.VoiceActivity:
      null != this.voiceActivityInput && 0 === this.listenerCount(_.aB.VoiceActivity) && (this.voiceActivityInput.destroy(), this.voiceActivityInput = null);
  }
}), O(this, 'handleDeviceChange', () => (0, I.PW)().then(e => {
  let [t, n, r] = e;
  return this.emit(_.aB.DeviceChange, t, n, r);
})), O(this, 'handleVoiceActivity', e => {
  this.emit(_.aB.VoiceActivity, e, 0);
}), O(this, 'handleDesktopSourceEnd', () => {
  this.emit(_.aB.DesktopSourceEnd);
}), O(this, 'handleAudioPermission', e => {
  this.emit(_.aB.AudioPermission, e);
}), O(this, 'handleVideoPermission', e => {
  this.emit(_.aB.VideoPermission, e);
}), this.on('newListener', this.handleNewListener), this.on('removeListener', this.handleRemoveListener), (0, f.px)(this.handleActiveSinksChange), (0, E.Z)(this);
  }
}