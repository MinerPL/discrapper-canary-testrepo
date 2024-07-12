n.d(t, {
  Z: function() {
return I;
  }
}), n(47120), n(411104);
var r = n(264344),
  i = n.n(r),
  a = n(259443),
  o = n(47770),
  s = n(46973),
  l = n(734298),
  u = n(997545),
  c = n(501950),
  d = n(801334),
  _ = n(992774),
  E = n(656795),
  f = n(650886),
  h = n(149396);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function m(e) {
  return (null != e ? e : h.Qx) / h.Qx;
}
class I extends o.Z {
  destroy() {
this.eachConnection(e => e.destroy()), this.emit(s.aB.Destroy), this.removeAllListeners();
  }
  interact() {}
  static supported() {
return (0, _.Zh)();
  }
  supported() {
return !0;
  }
  supports(e) {
var t, n;
switch (e) {
  case h.AN.LEGACY_AUDIO_SUBSYSTEM:
    return (0, _.eJ)(h.eR.VOICE_LEGACY_SUBSYSTEM);
  case h.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
    return (0, _.eJ)(h.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
  case h.AN.DEBUG_LOGGING:
    return (0, _.eJ)(h.eR.DEBUG_LOGGING);
  case h.AN.SOUNDSHARE:
    return (0, _.eJ)(h.eR.SOUNDSHARE);
  case h.AN.SCREEN_SOUNDSHARE:
    return (0, _.eJ)(h.eR.SCREEN_SOUNDSHARE);
  case h.AN.ELEVATED_HOOK:
    return (0, _.eJ)(h.eR.ELEVATED_HOOK);
  case h.AN.LOOPBACK:
    return (0, _.eJ)(h.eR.LOOPBACK);
  case h.AN.WUMPUS_VIDEO:
    return (0, _.eJ)(h.eR.WUMPUS_VIDEO);
  case h.AN.HYBRID_VIDEO:
    return (0, _.eJ)(h.eR.HYBRID_VIDEO);
  case h.AN.ATTENUATION:
  case h.AN.VIDEO_HOOK:
    return (null === i() || void 0 === i() ? void 0 : null === (t = i().os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(i().os.family);
  case h.AN.EXPERIMENTAL_SOUNDSHARE:
    return (0, _.eJ)(h.eR.SOUNDSHARE_LOOPBACK);
  case h.AN.OPEN_H264:
    return (null === i() || void 0 === i() ? void 0 : null === (n = i().os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(i().os.family);
  case h.AN.EXPERIMENTAL_ENCODERS:
    return (0, _.eJ)(h.eR.EXPERIMENTAL_ENCODERS);
  case h.AN.REMOTE_LOCUS_NETWORK_CONTROL:
    return (0, _.eJ)(h.eR.REMOTE_LOCUS_NETWORK_CONTROL);
  case h.AN.SCREEN_PREVIEWS:
    return (0, _.eJ)(h.eR.SCREEN_PREVIEWS);
  case h.AN.CLIPS:
    return (0, _.eJ)(h.eR.CLIPS);
  case h.AN.WINDOW_PREVIEWS:
    return (0, _.eJ)(h.eR.WINDOW_PREVIEWS);
  case h.AN.AUDIO_DEBUG_STATE:
    return (0, _.eJ)(h.eR.AUDIO_DEBUG_STATE);
  case h.AN.CONNECTION_REPLAY:
    return (0, _.eJ)(h.eR.CONNECTION_REPLAY);
  case h.AN.SIMULCAST:
    return (0, _.eJ)(h.eR.SIMULCAST) && (0, _.eJ)(h.eR.SIMULCAST_BUGFIX);
  case h.AN.RTC_REGION_RANKING:
    return (0, _.eJ)(h.eR.RTC_REGION_RANKING);
  case h.AN.DIRECT_VIDEO:
    return (0, _.eJ)(h.eR.DIRECT_VIDEO) && null != window.createDiscordStream;
  case h.AN.ELECTRON_VIDEO:
    return (0, _.eJ)(h.eR.ELECTRON_VIDEO);
  case h.AN.MEDIAPIPE:
    return (0, _.eJ)(h.eR.MEDIAPIPE);
  case h.AN.FIXED_KEYFRAME_INTERVAL:
    return (0, _.eJ)(h.eR.FIXED_KEYFRAME_INTERVAL);
  case h.AN.FIRST_FRAME_CALLBACK:
    return (0, _.eJ)(h.eR.FIRST_FRAME_CALLBACK);
  case h.AN.REMOTE_USER_MULTI_STREAM:
    return (0, _.eJ)(h.eR.REMOTE_USER_MULTI_STREAM);
  case h.AN.SPEED_TEST:
    return (0, _.eJ)(h.eR.SPEED_TEST);
  case h.AN.IMAGE_QUALITY_MEASUREMENT:
    return (0, _.eJ)(h.eR.IMAGE_QUALITY_MEASUREMENT);
  case h.AN.AMD_EXPERIMENTAL_RATE_CONTROL:
    return (0, _.eJ)(h.eR.AMD_EXPERIMENTAL_RATE_CONTROL);
  case h.AN.GO_LIVE_HARDWARE:
    return (0, _.eJ)(h.eR.GO_LIVE_HARDWARE);
  case h.AN.SCREEN_CAPTURE_KIT:
    return (0, _.eJ)(h.eR.SCREEN_CAPTURE_KIT);
  case h.AN.CAPTURE_TIMEOUT_EXPERIMENTS:
    return (0, _.eJ)(h.eR.CAPTURE_TIMEOUT_EXPERIMENTS);
  case h.AN.DIAGNOSTICS:
  case h.AN.NATIVE_PING:
  case h.AN.AUTOMATIC_VAD:
  case h.AN.AUDIO_INPUT_DEVICE:
  case h.AN.AUDIO_OUTPUT_DEVICE:
  case h.AN.QOS:
  case h.AN.VOICE_PROCESSING:
  case h.AN.AUTO_ENABLE:
  case h.AN.VIDEO:
  case h.AN.DESKTOP_CAPTURE:
  case h.AN.DESKTOP_CAPTURE_FORMAT:
  case h.AN.DESKTOP_CAPTURE_APPLICATIONS:
  case h.AN.VOICE_PANNING:
  case h.AN.AEC_DUMP:
  case h.AN.DISABLE_VIDEO:
  case h.AN.SAMPLE_PLAYBACK:
  case h.AN.NOISE_SUPPRESSION:
  case h.AN.AUTOMATIC_GAIN_CONTROL:
    return !0;
  default:
    return !1;
}
  }
  connect(e, t, n) {
!(0, _.eJ)(h.eR.EXPERIMENT_CONFIG) && (n.experiments = void 0);
let r = u.Z.create(e, t, n);
return r.on(s.Sh.Destroy, e => {
  this.connections.delete(e), this.connectionsEmpty() && (0, _.p8)(h.uJ.NORMAL);
}), r.on(s.Sh.Connected, () => {
  r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r));
}), r.on(s.Sh.Silence, e => {
  this.emit(s.aB.Silence, e);
}), this.connections.add(r), (0, _.p8)(h.uJ.HIGH), this.emit(s.aB.Connection, r), r;
  }
  shouldConnectionBroadcastVideo(e) {
return e.context === h.Yn.DEFAULT && this.videoInputDeviceId !== h.Av || e.hasDesktopSource();
  }
  eachConnection(e, t) {
this.connections.forEach(n => {
  (null == t || n.context === t) && e(n);
});
  }
  enable() {
return Promise.resolve();
  }
  setInputVolume(e) {
(0, _.zS)().setInputVolume(m(e));
  }
  setOutputVolume(e) {
(0, _.zS)().setOutputVolume(m(e));
  }
  getAudioInputDevices() {
return (0, c.Hg)();
  }
  setAudioInputDevice(e) {
(0, _.eJ)(h.eR.SET_AUDIO_DEVICE_BY_ID) ? (0, _.zS)().setInputDevice(e): (0, c.Hg)().then(t => {
  var n;
  let r = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
  null != r && (0, _.zS)().setInputDevice(r.index);
});
  }
  getAudioOutputDevices() {
return (0, c.HS)();
  }
  setAudioOutputDevice(e) {
(0, _.eJ)(h.eR.SET_AUDIO_DEVICE_BY_ID) ? (0, _.zS)().setOutputDevice(e): (0, c.HS)().then(t => {
  var n;
  let r = null !== (n = t.find(t => t.id === e)) && void 0 !== n ? n : t[0];
  null != r && (0, _.zS)().setOutputDevice(r.index);
});
  }
  getVideoInputDevices() {
return (0, c.l0)();
  }
  async setVideoInputDevice(e) {
let t = (await this.getVideoInputDevices()).find(t => t.id === e),
  n = null != t ? t.id : h.Av;
if (n !== this.videoInputDeviceId) {
  if (this.videoInputDeviceId = n, (0, _.eJ)(h.eR.SET_VIDEO_DEVICE_BY_ID)) {
    let e = null != t ? null != t.originalId && '' !== t.originalId ? t.originalId : t.id : h.Av;
    (0, _.zS)().setVideoInputDevice(e);
  } else
    (0, _.zS)().setVideoInputDevice(null != t ? t.index : -1);
  this.connections.forEach(e => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
}
  }
  getSupportedVideoCodecs(e) {
(0, _.zS)().getSupportedVideoCodecs(e);
  }
  getCodecCapabilities(e) {
(0, _.zS)().getCodecCapabilities(e);
  }
  setGoLiveSource(e, t) {
if (null == e) {
  this.eachConnection(e => {
    e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
  }, t);
  return;
}
this.eachConnection(n => {
  if (t !== h.Yn.STREAM || n.streamUserId === n.userId)
    n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n));
}, t);
  }
  setClipsSource(e) {
if (null == (0, _.zS)().setClipsSource || null == (0, _.zS)().setOnClipsRecordingEvent || null == (0, _.zS)().applyClipsSettings)
  return;
if (null == e) {
  (0, _.zS)().setClipsSource({
    id: '',
    soundshareId: 0
  });
  return;
}
let {
  frameRate: t,
  resolution: n
} = e.quality, {
  id: r,
  soundshareId: i,
  useLoopback: a,
  useVideoHook: o,
  useGraphicsCapture: l,
  useQuartzCapturer: u,
  allowScreenCaptureKit: c,
  hdrCaptureMode: d
} = e.desktopDescription;
(0, _.zS)().setOnClipsRecordingEvent(t => {
  this.logger.info('Clips recording event: '.concat(h.Pf[t], ' received for stream ').concat(r, ' and sound ').concat(i, '.')), t === h.Pf.GoLiveEnded ? this.emit(s.aB.ClipsRecordingRestartNeeded) : t === h.Pf.Error ? this.emit(s.aB.ClipsInitFailure, 'Failed to set clips source in media engine', e.applicationName) : (t === h.Pf.Ended || t === h.Pf.StoppedByGoLive) && this.emit(s.aB.ClipsRecordingEnded, r, i);
}), (0, _.zS)().applyClipsSettings({
  useVideoHook: o,
  useGraphicsCapture: l,
  useQuartzCapturer: u,
  allowScreenCaptureKit: c,
  hdrCaptureMode: d,
  soundshareLoopback: a,
  frameRate: t,
  width: n <= 480 ? n / 3 * 4 : n / 9 * 16,
  height: n
});
let [E, f] = null != r ? r.split(':') : [
  '',
  ''
];
(0, _.zS)().setClipsSource({
  id: f,
  soundshareId: null != i ? i : 0
});
  }
  setClipsQualitySettings(e, t, n) {
let r = (0, _.zS)();
return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), !0);
  }
  setSoundshareSource(e, t, n) {
this.eachConnection(r => {
  if (n !== h.Yn.STREAM || r.streamUserId === r.userId)
    r.setSoundshareSource(e, t);
}, n);
  }
  getDesktopSource() {
return Promise.reject(Error('NO_STREAM'));
  }
  getDesktopSources() {
return new Promise(e => {
  null != (0, _.zS)().getDesktopSources ? (0, _.zS)().getDesktopSources(t => e(t)) : e([]);
});
  }
  getScreenPreviews(e, t) {
return new Promise(n => {
  null != (0, _.zS)().getScreenPreviews ? (0, _.zS)().getScreenPreviews(e, t, e => {
    n(e.map((e, t) => ({
      ...e,
      name: 'Screen ' + (t + 1)
    })));
  }) : n([]);
});
  }
  setClipBufferLength(e) {
var t, n;
null === (t = (n = (0, _.zS)()).setClipBufferLength) || void 0 === t || t.call(n, e);
  }
  saveClip(e, t) {
let n = (0, _.zS)();
return null == n.setClipBufferLength || null == n.saveClip ? Promise.reject('unsupported') : new Promise((r, i) => {
  n.saveClip(e, t, (e, t, n) => r({
    duration: e,
    clipStats: JSON.parse(n)
  }), e => i(JSON.parse(e)));
});
  }
  saveClipForUser(e, t, n) {
let r = (0, _.zS)();
return null == r.saveClipForUser ? Promise.reject('unsupported') : new Promise((i, a) => {
  r.saveClipForUser(e, t, n, (e, t, n) => i({
    duration: e,
    clipStats: JSON.parse(n)
  }), e => a(JSON.parse(e)));
});
  }
  updateClipMetadata(e, t) {
let n = (0, _.zS)();
return null == n.updateClipMetadata ? Promise.reject('unsupported') : new Promise((r, i) => {
  n.updateClipMetadata(e, t, r, i);
});
  }
  exportClip(e, t) {
let n = (0, _.zS)();
return null == n.exportClip ? Promise.reject('unsupported') : new Promise((r, i) => {
  n.exportClip(e, t, e => r(new Blob([e])), i);
});
  }
  getWindowPreviews(e, t) {
return new Promise(n => {
  null != (0, _.zS)().getWindowPreviews ? (0, _.zS)().getWindowPreviews(e, t, e => {
    n(e);
  }) : n([]);
});
  }
  setAudioSubsystem(e) {
null != (0, _.zS)().setAudioSubsystem ? (0, _.zS)().setAudioSubsystem(e) : (0, _.zS)().setUseLegacyAudioDevice(e === h.iA.LEGACY);
  }
  getAudioSubsystem() {
return this.audioSubsystem;
  }
  getAudioLayer() {
return this.audioLayer;
  }
  getDebugLogging() {
return !!this.supports(h.AN.DEBUG_LOGGING) && (0, _.zS)().getDebugLogging();
  }
  setDebugLogging(e) {
this.supports(h.AN.DEBUG_LOGGING) && (0, _.zS)().setDebugLogging(e);
  }
  setExperimentalAdm(e) {
let {
  setExperimentalAdm: t,
  getAudioSubsystem: n
} = (0, _.zS)();
null == t || t(e), null == n || n(e => {
  this.audioSubsystem = e;
});
  }
  setLoopback(e, t) {
null != (0, _.zS)().setLoopback && (0, _.zS)().setLoopback(e, {
  echoCancellation: t.echoCancellation,
  noiseSuppression: t.noiseSuppression,
  automaticGainControl: t.automaticGainControl,
  noiseCancellation: t.noiseCancellation
}), null != (0, _.zS)().setEmitVADLevel2 ? (0, _.zS)().setEmitVADLevel2(e || this.listenerCount(s.aB.VoiceActivity) > 0) : (0, _.zS)().setEmitVADLevel(e || this.listenerCount(s.aB.VoiceActivity) > 0, e, {
  echoCancellation: t.echoCancellation,
  noiseSuppression: t.noiseSuppression,
  automaticGainControl: t.automaticGainControl,
  noiseCancellation: t.noiseCancellation
});
  }
  getLoopback() {
return !1;
  }
  setH264Enabled(e) {
(0, _.zS)().setTransportOptions({
  h264Enabled: e
});
  }
  setAv1Enabled(e) {
(0, _.zS)().setTransportOptions({
  av1Enabled: e
});
  }
  setH265Enabled(e) {
(0, _.zS)().setTransportOptions({
  h265Enabled: e
});
  }
  getCodecSurvey() {
return null != this.codecSurvey ? Promise.resolve(this.codecSurvey) : new Promise((e, t) => {
  let n = (0, _.zS)();
  null != n.getCodecSurvey ? n.getCodecSurvey(t => {
    this.codecSurvey = t, e(t);
  }) : t(Error('getCodecSurvey is not implemented.'));
});
  }
  writeAudioDebugState() {
return new Promise((e, t) => {
  let {
    writeAudioDebugState: n
  } = (0, _.zS)();
  null != n ? (n(), e()) : t(Error('Audio debug state is not supported.'));
});
  }
  startAecDump() {}
  stopAecDump() {}
  setAecDump(e) {
var t, n;
null === (t = (n = (0, _.zS)()).setAecDump) || void 0 === t || t.call(n, e);
  }
  rankRtcRegions(e) {
return new Promise((t, n) => {
  let {
    rankRtcRegions: r
  } = (0, _.zS)();
  null != r ? r(e, e => t(e)) : n(Error('RTC region latency test is not supported.'));
});
  }
  createReplayConnection(e, t) {
let n = u.Z.createReplay(e, t);
return null == n ? null : (n.on(s.Sh.Destroy, e => {
  this.connections.delete(e), this.connectionsEmpty() && (0, _.p8)(h.uJ.NORMAL);
}), this.connections.add(n), (0, _.p8)(h.uJ.HIGH), this.emit(s.aB.Connection, n), n);
  }
  setUseDirectVideo(e) {
f.Z.useDirectVideo = e;
  }
  setMaxSyncDelayOverride(e) {
let {
  setMaxSyncDelayOverride: t
} = (0, _.zS)();
null != t && t(e);
  }
  applyMediaFilterSettings(e) {
let {
  applyMediaFilterSettings: t,
  applyMediaFilterSettingsWithCallback: n
} = (0, _.zS)();
return null != n ? new Promise((t, r) => {
  n(e, t);
}) : (null != t && t(e), Promise.resolve());
  }
  startLocalAudioRecording(e) {
return new Promise((t, n) => {
  let {
    startLocalAudioRecording: r
  } = (0, _.zS)();
  null != r ? r(e, e => {
    e ? t() : n(Error('Failed to start local audio recording.'));
  }) : n(Error('startLocalAudioRecording is not supported.'));
});
  }
  stopLocalAudioRecording(e) {
var t, n;
null === (t = (n = (0, _.zS)()).stopLocalAudioRecording) || void 0 === t || t.call(n, (t, n) => {
  e(t, n);
}), this.listenerCount(s.aB.VoiceActivity) > 0 && null != (0, _.zS)().setEmitVADLevel2 && (0, _.zS)().setEmitVADLevel2(!0);
  }
  speedTester(e, t) {
if (!this.supports(h.AN.SPEED_TEST))
  throw Error('speedTester is not supported.');
let n = d.Z.create(e, t);
return n.on(s.aj.Destroy, e => {
  this.speedTesters.delete(e), this.connectionsEmpty() && (0, _.p8)(h.uJ.NORMAL);
}), this.speedTesters.add(n), (0, _.p8)(h.uJ.HIGH), n;
  }
  setHasFullbandPerformance(e) {
null != (0, _.zS)().setHasFullbandPerformance && (0, _.zS)().setHasFullbandPerformance(e);
  }
  getSupportedSecureFramesProtocolVersion() {
var e;
return null !== (e = (0, _.zS)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0;
  }
  getSupportedBandwidthEstimationExperiments(e) {
null != (0, _.zS)().getSupportedBandwidthEstimationExperiments && (0, _.zS)().getSupportedBandwidthEstimationExperiments(e);
  }
  getMLSSigningKey(e, t) {
return new Promise((n, r) => {
  null != (0, _.zS)().getMLSSigningKey ? (0, _.zS)().getMLSSigningKey(e, t, e => n(e)) : r(Error('NOT_IMPLEMENTED'));
});
  }
  watchdogTick() {
let e = !1;
(0, _.zS)().pingVoiceThread(() => {
  e = !0, this.consecutiveWatchdogFailures = 0;
}), setTimeout(() => {
  !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(s.aB.WatchdogTimeout) : this.watchdogTick();
}, h.H0);
  }
  connectionsEmpty() {
return 0 === this.connections.size && 0 === this.speedTesters.size;
  }
  constructor() {
var e, t;
super(), e = this, p(this, 'Video', f.Z), p(this, 'Camera', E.Z), p(this, 'videoInputDeviceId', h.Av), p(this, 'connections', new Set()), p(this, 'speedTesters', new Set()), p(this, 'lastVoiceActivity', -1), p(this, 'audioSubsystem', 'standard'), p(this, 'audioLayer', ''), p(this, 'deviceChangeGeneration', 0), p(this, 'consecutiveWatchdogFailures', 0), p(this, 'codecSurvey', null), p(this, 'logger', new a.Y('MediaEngineNative')), p(this, 'handleDeviceChange', function() {
  let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  e.deviceChangeGeneration++, e.emit(s.aB.DeviceChange, (0, c.C1)(h.h7.AUDIO_INPUT, t), (0, c.C1)(h.h7.AUDIO_OUTPUT, n), (0, c.C1)(h.h7.VIDEO_INPUT, r));
}), p(this, 'handleVolumeChange', (e, t) => {
  this.emit(s.aB.VolumeChange, e * h.Qx, t * h.Qx);
}), p(this, 'handleVoiceActivity', (e, t) => {
  let n = Date.now();
  this.listenerCount(s.aB.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && (this.lastVoiceActivity = n, this.emit(s.aB.VoiceActivity, e, t));
}), p(this, 'handleActiveSinksChange', (e, t) => {
  this.connections.forEach(n => n.setHasActiveVideoOutputSink(e, t));
}), p(this, 'handleNewListener', e => {
  switch (e) {
    case s.aB.VoiceActivity:
      null != (0, _.zS)().setEmitVADLevel2 ? (0, _.zS)().setEmitVADLevel2(!0) : (0, _.zS)().setEmitVADLevel(!0, !1, {});
      break;
    case s.aB.DeviceChange:
      let t = this.deviceChangeGeneration;
      Promise.all([
        this.getAudioInputDevices(),
        this.getAudioOutputDevices(),
        this.getVideoInputDevices()
      ]).then(e => {
        let [n, r, i] = e;
        t === this.deviceChangeGeneration && this.emit(s.aB.DeviceChange, n, r, i);
      });
  }
}), p(this, 'handleRemoveListener', e => {
  e === s.aB.VoiceActivity && (null != (0, _.zS)().setEmitVADLevel2 ? (0, _.zS)().setEmitVADLevel2(this.listenerCount(s.aB.VoiceActivity) > 0) : (0, _.zS)().setEmitVADLevel(this.listenerCount(s.aB.VoiceActivity) > 0, !1, {}));
}), p(this, 'handleVideoInputInitialization', e => {
  this.emit(s.aB.VideoInputInitialized, e);
});
let n = (0, _.zS)();
if (n.setDeviceChangeCallback(this.handleDeviceChange), n.setVolumeChangeCallback(this.handleVolumeChange), n.setOnVoiceCallback(this.handleVoiceActivity), null === (t = n.setVideoInputInitializationCallback) || void 0 === t || t.call(n, this.handleVideoInputInitialization), n.setTransportOptions({
    idleJitterBufferFlush: !0,
    ducking: !1
  }), this.on('removeListener', this.handleRemoveListener), this.on('newListener', this.handleNewListener), null != (0, _.zS)().getAudioSubsystem ? (0, _.zS)().getAudioSubsystem((e, t) => {
    this.audioSubsystem = e, this.audioLayer = t;
  }) : null != (0, _.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, _.zS)().getUseLegacyAudioDevice() ? h.iA.LEGACY : h.iA.STANDARD), null != n.pingVoiceThread && 'undefined' != typeof window && 'canary' === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(), this.getDebugLogging() && !I.installedLogHooks)
  for (let e of (I.installedLogHooks = !0, [
      'trace',
      'debug',
      'info',
      'warn',
      'error',
      'log'
    ])) {
    let t = console,
      n = t[e];
    null != n && (t[e] = function() {
      n.apply(this, arguments);
      try {
        let t = Array.from(arguments).map(e => null != e ? e.toString() : e).filter(e => 'string' != typeof e || '\nfont-weight: bold;\ncolor: purple;\n' !== e);
        (0, _.zS)().consoleLog(e, JSON.stringify(t));
      } catch (e) {}
    });
  }
null != n.setActiveSinksChangeCallback && n.setActiveSinksChangeCallback(this.handleActiveSinksChange), (0, l.Z)(this);
  }
}
p(I, 'installedLogHooks', !1);