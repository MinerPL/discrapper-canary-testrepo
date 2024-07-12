n.d(t, {
  Z: function() {
return er;
  }
}), n(411104), n(724458), n(653041), n(47120);
var r, i = n(654861),
  a = n.n(i),
  o = n(108131),
  s = n.n(o),
  l = n(729594),
  u = n(772848),
  c = n(261470),
  d = n(47770),
  _ = n(46973),
  E = n(379649),
  f = n(570140),
  h = n(668781),
  p = n(846027),
  m = n(304680),
  I = n(547727),
  T = n(710845),
  g = n(811660),
  S = n(42352),
  A = n(148959),
  N = n(227196),
  v = n(926951),
  O = n(868616),
  R = n(848886),
  C = n(583215),
  y = n(576574),
  D = n(307320),
  L = n(420363);
n(527702);
var b = n(214890),
  M = n(592125),
  P = n(131951),
  U = n(19780),
  w = n(226961),
  x = n(936349),
  G = n(594174),
  k = n(626135),
  B = n(931619),
  F = n(358085),
  V = n(579806),
  H = n(859401),
  Z = n(437263),
  Y = n(423343),
  j = n(685756),
  W = n(655306),
  K = n(583794),
  z = n(824096),
  q = n(53114),
  Q = n(174532),
  X = n(895066),
  $ = n(981631),
  J = n(65154);

function ee(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let et = /^https/.test((r = 'https:', 'https:')) ? 'wss:' : 'ws:';

function en(e) {
  return e;
}
class er extends d.Z {
  get quality() {
let e = this.getLastPing();
if (this.state !== $.hes.RTC_CONNECTED || void 0 === e)
  return $.IE4.UNKNOWN;
if (e > 500 || null != this._outboundLossRate && this._outboundLossRate > 10)
  return $.IE4.BAD;
if (e > 250 || null != this._outboundLossRate && this._outboundLossRate > 5)
  return $.IE4.AVERAGE;
else
  return $.IE4.FINE;
  }
  get endpoint() {
return this._endpoint;
  }
  set endpoint(e) {
if (null == e)
  this._endpoint = null, this.hostname = null;
else {
  e = ''.concat(et, '//').concat(e);
  let {
    hostname: t,
    port: n
  } = l.parse(e), r = null != n ? parseInt(n) : NaN;
  null != t && (80 === r || 443 === r) && (e = ''.concat(et, '//').concat(t)), this._endpoint = e + '/', this.hostname = t;
}
  }
  connect(e, t) {
if (this._destroyed)
  throw Error('RTCConnection.connect(...): Attempting to connect on destroyed instance.');
this._backoff.cancel();
let {
  endpoint: n,
  token: r
} = this;
if (this.endpoint = e, this.token = t, (n !== this.endpoint || r !== t) && (this._cleanupSocket(), this._mediaSessionId = null, null != n && (this._rtcConnectionId = (0, u.Z)(), f.Z.dispatch({
    type: 'RTC_CONNECTION_UPDATE_ID',
    connection: this
  }))), null == this.endpoint) {
  this.setState($.hes.AWAITING_ENDPOINT);
  return;
}
let i = this._socket;
null != i && this._cleanupSocket(), (i = this._socket = new j.Z(this.endpoint, this.context)).on(j.V.Connecting, this._handleConnecting.bind(this, i)), i.on(j.V.Connect, this._handleConnect.bind(this, i)), i.on(j.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on(j.V.Resuming, this._handleResuming.bind(this, i)), i.on(j.V.Ready, this._handleReady.bind(this, i)), i.on(j.V.Speaking, this._handleSpeaking.bind(this, i)), i.on(j.V.Video, this._handleVideo.bind(this, i)), i.on(j.V.Ping, this._handleControlPing.bind(this)), i.on(j.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(j.V.ClientConnect, this._handleClientConnect.bind(this)), i.on(j.V.Codecs, this._handleCodecs.bind(this)), i.on(j.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(j.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(j.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(j.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(j.V.Flags, this.handleFlags.bind(this)), i.on(j.V.Platform, this.handlePlatform.bind(this)), i.on(j.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(j.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(j.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(j.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(j.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(j.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(j.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(j.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(j.V.MLSWelcome, this._handleMLSWelcome.bind(this)), this._connectStartTime = (0, E.zO)(), this._connectCount++, this._connecting = !0, null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), this._encountered_socket_failure = !1, i.connect());
  }
  destroy() {
var e, t, n, r, i;
if (this.logger.info('Destroy RTCConnection'), B.Z.removeOnlineCallback(this._handleNetworkOnline), B.Z.removeOfflineCallback(this._handleNetworkOffline), (0, F.isDesktop)() && (null === (i = this.powerMonitorListener) || void 0 === i || i.call(this)), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, null === (t = this._voiceDuration) || void 0 === t || t.stop(), this._voiceDuration = null, null === (n = this._videoQuality) || void 0 === n || n.stop(), this._videoQuality = null, this._videoHealthManager = null, this._secureFramesState = null, null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.reset(), null != this._connection) {
  let e = this._connection;
  this._connection = null, e.destroy();
}
this.removeAllListeners(), this._destroyed = !0;
  }
  sendSpeaking(e, t) {
let n = this._socket;
if (null != n) {
  let r = P.Z.getPacketDelay();
  n.speaking(e, r, t);
}
  }
  sendVideo(e, t, n, r) {
let i = this._socket;
null != i && (0 !== t && (this._sentVideo = !0), this._sentVideo && i.video(e, t, n, r));
  }
  getPings() {
return this._pings;
  }
  getAveragePing() {
let e = this._pings.slice(0, Math.min(this._pings.length, 20));
return 0 === e.length || null == this._socket ? 0 : e.reduce((e, t) => e + t.value, 0) / e.length;
  }
  getLastPing() {
var e;
return null === (e = this._pings[this._pings.length - 1]) || void 0 === e ? void 0 : e.value;
  }
  getOutboundLossRate() {
return this._outboundLossRate;
  }
  getMediaSessionId() {
return this._mediaSessionId;
  }
  getRTCConnectionId() {
return this._rtcConnectionId;
  }
  getVoiceVersion() {
return this.voiceVersion;
  }
  getRtcWorkerVersion() {
return this.rtcWorkerVersion;
  }
  getDuration() {
let e = this._connectCompletedTime > 0 ? (0, E.zO)() - this._connectCompletedTime : 0;
return e > 0 ? e : 0;
  }
  getPacketStats() {
var e;
return null === (e = this._voiceQuality) || void 0 === e ? void 0 : e.getPacketStats();
  }
  getCreatedTime() {
return this._createdTime;
  }
  getSecureFramesState() {
return this._secureFramesState;
  }
  getSecureFramesRosterMap() {
return this._secureFramesRosterMap;
  }
  getUserIds() {
return this._userIds;
  }
  getVideoHealthManager() {
return this._videoHealthManager;
  }
  getBandwidthEstimationExperiment() {
return this._bandwidthEstimationExperiment;
  }
  pauseStatsCollectionForUser(e, t) {
let n = this.getOrCreateVideoQuality();
if (null == n) {
  this.logger.error('pauseStatsCollectionForUser: Unable to create videoQuality.');
  return;
}
t ? n.addUserToStatsCollectionPausedSet(e) : n.removeUserFromStatsCollectionPausedSet(e);
  }
  setState(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
this.logger.info('RTC connection state: '.concat(this.state, ' => ').concat(e)), this.state = e, this.stateHistory.update(this.state), this.emit(Z.z.State, e, {
  hostname: this.hostname,
  channelId: this.trueChannelId,
  context: this.context
}, t);
  }
  expeditedHeartbeat(e) {
let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
  n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
  r = this._socket;
null != r && r.expeditedHeartbeat(e, t, n) && this._backoff.cancel();
  }
  resetBackoff() {
let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
  t = this._socket;
null != t && t.resetBackoff(e) && this._backoff.cancel();
  }
  setAppBackgrounded(e, t) {
var n;
null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.setAppBackgrounded(e, t);
  }
  setSelectedParticipant(e) {
var t;
null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setSelectedParticipant(e);
  }
  setPipOpen(e) {
var t;
null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.setPipOpen(e);
  }
  setClipRecordUser(e, t, n) {
var r, i;
null === (i = this._connection) || void 0 === i || null === (r = i.setClipRecordUser) || void 0 === r || r.call(i, e, t, n);
  }
  setSimulcastDebugOverride(e, t, n) {
var r, i;
if (t === this.context)
  t === J.Yn.DEFAULT ? null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setSimulcastDebugOverride(e, n) : null === (i = this._goLiveQualityManager) || void 0 === i || i.setSimulcastDebugOverride(n);
  }
  set channelId(e) {
this._channelId = e, this.channelIds.add(e);
  }
  get channelId() {
return this._channelId;
  }
  get trueChannelId() {
return null != this.rtcServerId ? a()(this.rtcServerId).prev().toString() : this.channelId;
  }
  _cleanupSocket() {
let e = this._socket;
null != e && (e.close(), e.removeAllListeners(), this._socket = null);
  }
  _chooseExperiments(e) {
let t = [];
if (this._recordingEnabled && t.push('connection_log'), null != this.guildId) {
  let {
    shouldOverrideKrisp: e,
    overrideKrispSetting: n
  } = O.Z.getCurrentConfig({
    guildId: this.guildId,
    location: 'handleReady'
  }, {
    autoTrackExposure: !0
  });
  e && (n ? t.push('force_krisp_enabled') : t.push('force_krisp_disabled'));
}
if (P.Z.supports(J.AN.FIXED_KEYFRAME_INTERVAL) && t.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length) {
  let {
    enabled: e,
    fullname: n
  } = v.Z.getConfig(!0, this._supportedBandwidthEstimationExperiments);
  e && t.push(n);
}
this._selectedExperiments = t;
  }
  _handleConnecting(e) {
null != this.endpoint && this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId())), this.setState($.hes.CONNECTING);
  }
  _handleConnect(e) {
var t, n;
let r = this.token;
if (null == r)
  throw Error('RTCConnection._handleConnect(...): Token is missing.');
this.logger.info('Connected to RTC server.'), e.identify({
  serverId: null !== (n = null !== (t = this.rtcServerId) && void 0 !== t ? t : this.guildId) && void 0 !== n ? n : this.channelId,
  userId: this.userId,
  sessionId: this.sessionId,
  token: r,
  maxSecureFramesVersion: P.Z.getSupportedSecureFramesProtocolVersion(this.guildId),
  video: P.Z.supports(J.AN.VIDEO),
  streamParameters: P.Z.getVideoStreamParameters(this.context)
}), this.setState($.hes.AUTHENTICATING);
  }
  _handleDisconnect(e, t, n, r) {
var i, a, o, s, l, u;
this.logger.info('Disconnected from RTC server, clean: '.concat(t, ', code: ').concat(n, ', reason: ').concat(r, ', state: ').concat(this.state)), !t && this._connecting && !this._encountered_socket_failure && (k.default.track($.rMx.VOICE_CONNECTION_SOCKET_FAILURE, {
  ...this._getAnalyticsProperties(),
  hostname: this.hostname,
  connect_count: this._connectCount,
  code: n,
  reason: r
}), this._encountered_socket_failure = !0), U.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null === (l = this._connection) || void 0 === l || l.wasRemoteDisconnected());
let c = 'Force Close' !== r;
if (c) {
  let e = this._backoff.fail(this.reconnect);
  this.logger.warn('Disconnect was not clean! reason='.concat(r, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
}
if (this.state !== $.hes.DISCONNECTED) {
  let e = this._videoQuality;
  null != e && this.context === J.Yn.DEFAULT && (e.stop(), this._sentVideo && e.getOutboundStats().forEach(t => {
    var n;
    (null !== (n = t.num_frames) && void 0 !== n ? n : 0) > 0 && k.default.track($.rMx.VIDEO_STREAM_ENDED, {
      ...this._getAnalyticsProperties(),
      media_session_id: this.getMediaSessionId(),
      sender_user_id: this.userId,
      reason: r,
      participant_type: 'sender',
      guild_region: x.Z.getRegion(this.hostname),
      hostname: this.hostname,
      hardware_enabled: P.Z.getHardwareEncoding(),
      ...t,
      ...e.getNetworkStats(),
      ...e.getCodecUsageStats('sender', this.userId),
      ...this._soundshareStats.getStats(),
      device_performance_class: (0, g.R)()
    });
  }), e.getInboundParticipants().forEach(t => {
    var n;
    let i = e.getInboundStats(t);
    (null !== (n = null == i ? void 0 : i.num_frames) && void 0 !== n ? n : 0) > 0 && k.default.track($.rMx.VIDEO_STREAM_ENDED, {
      ...this._getAnalyticsProperties(),
      media_session_id: this.getMediaSessionId(),
      sender_user_id: t,
      reason: r,
      participant_type: 'receiver',
      guild_region: x.Z.getRegion(this.hostname),
      hostname: this.hostname,
      hardware_enabled: P.Z.getHardwareEncoding(),
      ...i,
      ...e.getNetworkStats(),
      ...e.getCodecUsageStats('receiver', t)
    });
  }));
  let t = x.Z.shouldIncludePreferredRegion() ? x.Z.getPreferredRegion() : null,
    n = P.Z.getSettings(),
    i = M.Z.getChannel(this.channelId);
  k.default.track($.rMx.VOICE_DISCONNECT, {
    ...this._getAnalyticsProperties(),
    hostname: this.hostname,
    port: this.port,
    protocol: this.protocol,
    reconnect: c,
    reason: r,
    duration: this.getDuration(),
    ...null != this._voiceQuality ? this._voiceQuality.getMosStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getPacketStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getBytesStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getBufferStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getNetworkStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getSystemResourceStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getFrameOpStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getDurationStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getTransportStats() : null,
    ...null != this._voiceQuality ? this._voiceQuality.getE2EEStats() : null,
    ...null != this._voiceDuration ? this._voiceDuration.getDurationStats() : null,
    media_session_id: this.getMediaSessionId(),
    channel_bitrate: null != i ? i.bitrate : null,
    cloudflare_best_region: t,
    connect_count: this._connectCount,
    ping_average: Math.round(this.getAveragePing()),
    ping_bad_count: this._pingBadCount,
    ping_timeout: this._pingTimeouts.length,
    input_detected: this._inputDetected,
    no_input_detected_notice: P.Z.getNoInputDetectedNotice(),
    audio_input_mode: n.mode,
    automatic_audio_input_sensitivity_enabled: n.modeOptions.autoThreshold,
    audio_input_sensitivity: n.modeOptions.threshold,
    echo_cancellation_enabled: n.echoCancellation,
    noise_suppression_enabled: n.noiseSuppression,
    noise_cancellation_enabled: n.noiseCancellation,
    noise_canceller_error: this._noiseCancellationError,
    automatic_gain_control_enabled: n.automaticGainControl,
    voice_output_volume: n.outputVolume,
    encryption_mode: this._encryptionMode,
    channel_count: this.channelIds.size,
    input_device: this.getInputDeviceName(),
    output_device: this.getOutputDeviceName(),
    device_performance_class: (0, g.R)(),
    num_fast_udp_reconnects: null != this._connection ? null === (u = this._connection) || void 0 === u ? void 0 : u.getNumFastUdpReconnects() : null,
    parent_media_session_id: this.parentMediaSessionId
  });
  let a = this.getMediaSessionId();
  for (let [e, t, n] of(P.Z.getMediaEngine().getCodecSurvey().then(e => {
      let t = JSON.parse(e);
      if (null == t || null == t.available_video_encoders || null == t.available_video_decoders)
        throw Error('codec survey is not available');
      k.default.track($.rMx.VOICE_CODEC_DETECTED, {
        ...t,
        rtc_connection_id: this.getRTCConnectionId(),
        media_session_id: a
      });
    }).catch(e => {
      this.logger.warn(e);
    }), Object.values(this._mlsFailures)))
    k.default.track($.rMx.MLS_FAILURES, {
      ...this._getAnalyticsProperties(),
      media_session_id: a,
      parent_media_session_id: this.parentMediaSessionId,
      failure_source: e,
      failure_reason: t,
      failure_count: n
    });
}
if (this._pingTimeouts = [], this._pings = [], this._connectCompletedTime = 0, this._pingBadCount = 0, this._inputDetected = !1, this._mediaSessionId = null, null === (i = this._voiceQuality) || void 0 === i || i.stop(), this._voiceQuality = null, clearInterval(this._voiceQualityPeriodicStatsInterval), this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, null === (a = this._voiceDuration) || void 0 === a || a.stop(), this._voiceDuration = null, null === (o = this._videoQuality) || void 0 === o || o.stop(), this._videoQuality = null, this._videoHealthManager = null, null === (s = this._localMediaSinkWantsManager) || void 0 === s || s.reset(), this._secureFramesState = null, this._userIds = new Set([this.userId]), this._secureFramesRosterMap.clear(), null != this._connection) {
  let e = this._connection;
  this._connection = null, e.destroy();
}
this.setState($.hes.DISCONNECTED, {
  willReconnect: c
});
  }
  _handleResuming(e) {
var t, n;
null === (t = this._connection) || void 0 === t || t.fastUdpReconnect(), null === (n = this._connection) || void 0 === n || n.clearAllSpeaking();
  }
  _handleReady(e, t, n, r, i, a, o) {
this.setState($.hes.RTC_CONNECTING), this.port = n, null != o && this._chooseExperiments(o), 0 === a.length && a.push({
  type: J.Tr.VIDEO,
  rid: '100',
  ssrc: i + 1,
  rtxSsrc: i + 2,
  quality: 100,
  active: !1
});
let s = P.Z.getMediaEngine(),
  l = s.connect(this.context, this.userId, {
    ssrc: i,
    address: t,
    port: n,
    modes: r,
    experiments: this._selectedExperiments,
    streamParameters: a,
    qosEnabled: P.Z.getQoS(),
    ...this._getExtraConnectionOptions()
  });
if (l.setUseElectronVideo(s.supports(J.AN.ELECTRON_VIDEO)), P.Z.supports(J.AN.IMAGE_QUALITY_MEASUREMENT)) {
  let {
    enabled: e,
    measurement: t
  } = L.Z.getConfig(!0);
  e && l.setVideoQualityMeasurement(t + ',hwdec');
}
let u = ['unk'];
if (P.Z.supports(J.AN.AMD_EXPERIMENTAL_RATE_CONTROL) && u.push('amdRelaxRc'), this.context === J.Yn.STREAM) {
  let {
    nvMediumVbvSizeMs: e
  } = y.Z.getCurrentConfig({
    location: 'handleReady'
  }, {
    autoTrackExposure: !0
  });
  if (e > 0) {
    u.push('nvRelaxRc=' + e);
    let {
      nvEnableNewPresets: t
    } = C.Z.getCurrentConfig({
      location: 'handleReady'
    }, {
      autoTrackExposure: !0
    });
    t && u.push('nvNewPresets');
  }
  if (null != this.guildId) {
    let {
      enableAdaptiveKeyFrame: e
    } = R.Z.getCurrentConfig({
      guildId: this.guildId,
      location: 'handleReady'
    }, {
      autoTrackExposure: !0
    });
    e && u.push('nvencAdaptiveIDR');
  }
}
l.setVideoEncoderExperiments(u.join(',')), l.on(_.Sh.Speaking, (e, t, n) => {
  this.userId === e && this.sendSpeaking(t, n), this.emit(Z.z.Speaking, e, t);
}), l.on(_.Sh.ToggleMuteFromNative, () => {
  let {
    airpodsMuteSupported: e
  } = N.Z.getCurrentConfig({
    location: 'RTCConnection ToggleMuteFromNative'
  }, {
    autoTrackExposure: !0
  });
  e && this.context === J.Yn.DEFAULT && p.Z.toggleSelfMute({
    playSoundEffect: !1
  });
}), l.on(_.Sh.NativeMuteChanged, e => {
  this.context === J.Yn.DEFAULT && I.Z.nativeMuteChanged(e);
}), l.on(_.Sh.Video, (e, t, n, r, i, a) => {
  this._handleVideoStreamId({
    userId: e,
    streamId: t,
    audioSsrc: n,
    videoSsrc: null != r ? r : 0,
    rtxSsrc: i,
    videoStreamParameters: a
  }), this.userId === e && (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, a), null == a || a.forEach(t => {
    if (100 === t.quality)
      this.emit(Z.z.VideoSourceQualityChanged, this.guildId, this.channelId, e, t.maxResolution, t.maxFrameRate, this.context);
  }));
}), l.on(_.Sh.FirstFrame, (e, t, n) => {
  if (null != this._localMediaSinkWantsManager)
    this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(Z.z.Video, this.guildId, this.channelId, e, n, this.rtcServerId);
  if (null != this._goLiveQualityManager)
    this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(Z.z.Video, this.guildId, this.channelId, e, n, this.rtcServerId);
}), l.on(_.Sh.Silence, e => {
  this._inputDetected = this._inputDetected || !e;
}), l.on(_.Sh.Connected, (r, i) => {
  if (this.logger.info('RTC connected to media server: '.concat(t, ':').concat(n)), e !== this._socket) {
    this.logger.warn('Socket mismatch, disconnecting');
    return;
  }
  switch (this._voiceQuality = new X.Z(l), this._voiceQuality.start(), this._voiceQualityPeriodicStatsSequenceId = 0, this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000), this._noiseCancellationError = 0, this._voiceDuration = new Q.Z(this.userId, l), this._voiceDuration.start(), this.protocol = r, r) {
    case 'udp':
      this.logger.info('Sending UDP info to RTC server.', i, this._selectedExperiments), e.once(j.V.Encryption, (e, t) => {
        l === this._connection && (l.setEncryption(e, t), this._encryptionMode = e);
      }), e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
      break;
    case 'webrtc':
      this.logger.info('Sending local SDP to RTC server.'), e.once(j.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
      break;
    default:
      this.logger.error('Unable to determine protocol.');
      return;
  }
  this._backoff.succeed();
}), l.on(_.Sh.VideoEncoderFallback, t => {
  let n = t.filter(e => 'video' === e.type).map(e => e.name).join(',');
  this.logger.info('The originally selected video encoder is not working, fallback to the other available encoders: '.concat(n)), e.updateSession({
    codecs: t
  });
}), l.on(_.Sh.Error, t => {
  if (e !== this._socket)
    return;
  let n = x.Z.shouldIncludePreferredRegion() ? x.Z.getPreferredRegion() : null;
  this.logger.error('Error occurred while connecting to RTC server: '.concat(t)), k.default.track($.rMx.VOICE_CONNECTION_FAILURE, {
    ...this._getAnalyticsProperties(),
    hostname: this.hostname,
    port: this.port,
    protocol: this.protocol,
    error: t,
    cloudflare_best_region: n,
    connect_count: this._connectCount
  });
}), l.on(_.Sh.ConnectionStateChange, t => {
  if (this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(t)), e !== this._socket)
    return;
  let n = this.state;
  switch (t) {
    case J.$j.DISCONNECTED:
      this.setState($.hes.RTC_DISCONNECTED);
      break;
    case J.$j.CONNECTING:
      this.setState($.hes.RTC_CONNECTING);
      break;
    case J.$j.CONNECTED:
      this.setState($.hes.RTC_CONNECTED);
      break;
    case J.$j.NO_ROUTE:
      this.setState($.hes.NO_ROUTE);
      break;
    case J.$j.ICE_CHECKING:
      this.setState($.hes.ICE_CHECKING);
      break;
    case J.$j.DTLS_CONNECTING:
      this.setState($.hes.DTLS_CONNECTING);
  }
  if (n === $.hes.RTC_CONNECTING && this.state === $.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === $.hes.NO_ROUTE && this._backoff.fail(this.reconnect), this.state === $.hes.RTC_CONNECTED) {
    var r, i;
    let e = x.Z.shouldIncludePreferredRegion() ? x.Z.getPreferredRegion() : null;
    this._connecting && k.default.track($.rMx.VOICE_CONNECTION_SUCCESS, {
      ...this._getAnalyticsProperties(),
      hostname: this.hostname,
      port: this.port,
      protocol: this.protocol,
      cloudflare_best_region: e,
      connect_time: (0, E.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
      connect_count: this._connectCount,
      audio_subsystem: P.Z.getMediaEngine().getAudioSubsystem(),
      audio_layer: P.Z.getMediaEngine().getAudioLayer(),
      media_session_id: this.getMediaSessionId(),
      ...this.stateHistory.getVoiceConnectionSuccessStats()
    }), null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setConnection(l), null === (i = this._goLiveQualityManager) || void 0 === i || i.update(), this._connectCompletedTime = (0, E.zO)(), this._connected = !0, this._connecting = !1, this._encountered_socket_failure = !1;
  } else
    n === $.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
}), l.on(_.Sh.SecureFramesUpdate, e => {
  this._secureFramesState = e, this.emit(Z.z.SecureFramesUpdate);
}), l.on(_.Sh.Ping, this._handlePing.bind(this)), l.on(_.Sh.PingTimeout, this._handlePingTimeout.bind(this)), l.on(_.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)), l.on(_.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)), l.on(_.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)), l.on(_.Sh.Stats, H.Z.create()), l.on(_.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)), l.on(_.Sh.NoiseCancellationError, e => {
  this._noiseCancellationError = e;
}), l.on(_.Sh.MLSFailure, (e, t) => {
  let n = ''.concat(e, ':').concat(t),
    r = n in this._mlsFailures ? this._mlsFailures[n][2] : 0;
  this._mlsFailures[n] = [
    e,
    t,
    r + 1
  ];
  let i = G.default.getCurrentUser();
  ((null == i ? void 0 : i.isStaff()) || (null == i ? void 0 : i.isStaffPersonal())) && h.Z.show({
    title: 'MLS Error in '.concat(e),
    body: 'Error: '.concat(t, '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!')
  });
}), l.setRemoteVideoSinkWants(this._remoteVideoSinkWants), this._connection = l;
  }
  _handleSpeaking(e, t, n, r) {
let i = this._connection;
if (null != i && this.userId !== t) {
  var a;
  r !== J.Dg.NONE && (i.createUser(t, n), f.Z.dispatch({
    type: 'RTC_CONNECTION_USER_CREATE',
    userId: t,
    context: this.context
  })), null === (a = this._localMediaSinkWantsManager) || void 0 === a || a.setAudioSSRC(t, n);
}
  }
  handleFlags(e, t) {
this.emit(Z.z.Flags, e, t);
  }
  handlePlatform(e, t) {
this.emit(Z.z.Platform, e, t, this.channelId);
  }
  getOrCreateVideoQuality() {
if (null != this._connection && null == this._videoQuality) {
  this._videoQuality = new q.S(this._connection), this._videoQuality.start();
  let {
    featureEnabled: e,
    windowLength: t,
    allowedPoorFpsRatio: n,
    fpsThreshold: r,
    backoffTimeSec: i
  } = D.Z.getConfig(!0);
  if (e) {
    this._videoHealthManager = new z.y(t, n, r, i), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
    this._videoQuality.on(q.d.FpsUpdate, (e, t, n) => {
      var r, i;
      (null === (r = this._localMediaSinkWantsManager) || void 0 === r ? void 0 : r.shouldReceiveFromUser(e)) && (null === (i = this._videoHealthManager) || void 0 === i || i.updateFps(e, t, n));
    });
  }
}
return this._videoQuality;
  }
  _handleVideoStreamId(e) {
var t, n, r, i;
let {
  userId: a,
  streamId: o,
  videoSsrc: s,
  videoStreamParameters: l
} = e;
if (this.emit(Z.z.Video, this.guildId, this.channelId, a, o, this.rtcServerId), null != o && null == this.getOrCreateVideoQuality() && this.logger.error('_handleVideoStreamId: Unable to create videoQuality.'), null != this._videoQuality && this.userId === a && l.forEach(e => {
    var t, n;
    let r = null !== (t = e.ssrc) && void 0 !== t ? t : 0;
    r > 0 && !0 === e.active && (null === (n = this._videoQuality) || void 0 === n || n.setOutboundSsrc(r));
  }), this.userId !== a) {
  let e = 0 === s && null === o;
  (!e || e && (null === (t = this._videoQuality) || void 0 === t ? void 0 : t.getInboundParticipants().includes(a))) && (null === (n = this._videoQuality) || void 0 === n || n.setInboundUser(a, s), null === (r = this._videoHealthManager) || void 0 === r || r.createUser(a));
}
null != this._connection && this.userId !== a && (null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.setStreamId(a, o));
  }
  _handleLocalVideoDisabled(e, t) {
if (this.userId !== e) {
  let n = this.getOrCreateVideoQuality();
  if (null == n) {
    this.logger.error('_handleLocalVideoDisabled: Unable to create videoQuality.');
    return;
  }
  n.setUserVideoDisabled(e, t);
}
  }
  _handleRemoteStreamsReady(e) {
let t = (0, E.zO)() - this._connectStartTime;
k.default.track($.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
  ...this._getAnalyticsProperties(),
  number_of_users: e,
  duration_ms: t
});
  }
  _handleVideo(e, t, n, r, i) {
if (null != this._connection && this.userId !== t) {
  if (null != this._localMediaSinkWantsManager) {
    this._localMediaSinkWantsManager.setAudioSSRC(t, n);
    let e = i.map(e => ({
      type: J.Tr.VIDEO,
      rid: e.rid,
      ssrc: e.ssrc,
      rtxSsrc: e.rtxSsrc,
      quality: e.quality,
      active: r > 0
    }));
    0 === e.length && e.push({
      type: J.Tr.VIDEO,
      rid: '100',
      ssrc: r,
      rtxSsrc: r + 1,
      quality: 100,
      active: r > 0
    }), this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
  } else {
    var a, o;
    let e = [];
    for (let t of i)
      null != t.ssrc && null != t.quality && e.push({
        ssrc: t.ssrc,
        quality: t.quality
      });
    null === (a = this._goLiveQualityManager) || void 0 === a || a.setUserID(t), null === (o = this._goLiveQualityManager) || void 0 === o || o.updateAudioAndVideoStreamInfo(n, e);
  }
  null == i || i.forEach(e => {
    100 === e.quality && this.emit(Z.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context);
  });
}
  }
  _handleControlPing(e) {
!P.Z.supports(J.AN.NATIVE_PING) && this._handlePing(e);
  }
  _handlePing(e) {
var t;
if (this.logger.info('Handling ping: '.concat(e)), null === (t = this._socket) || void 0 === t || t.sendHeartbeatIfOverdue(), void 0 !== e) {
  for (this._pings.push({
      time: Date.now(),
      value: e
    }); this._pings.length >= 200;)
    this._pings.shift();
  e > 500 && this._pingBadCount++, this.emit(Z.z.Ping, this._pings, this.quality);
}
  }
  _handlePingTimeout(e, t) {
this._pingTimeouts.push(e);
let n = this._pingTimeouts.length;
n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t);
  }
  _handleOutboundLossRate(e) {
this._outboundLossRate = e, this.emit(Z.z.OutboundLossRate, e);
  }
  _handleSoundshareTrace(e) {
this._soundshareStats.traceEvent(void 0, e);
  }
  _getAnalyticsProperties() {
let e = M.Z.getChannel(this.channelId),
  t = null != e ? e.type : null;
return {
  guild_id: this.guildId,
  channel_id: this.channelId,
  channel_type: t,
  rtc_connection_id: this.getRTCConnectionId(),
  context: this.context,
  voice_backend_version: this.voiceVersion,
  rtc_worker_backend_version: this.rtcWorkerVersion
};
  }
  _handleClientConnect(e) {
var t;
e.forEach(e => this._userIds.add(e)), this.emit(Z.z.ClientConnect, e), null === (t = this._goLiveQualityManager) || void 0 === t || t.onClientConnect(e);
  }
  _handleClientDisconnect(e) {
var t, n, r, i;
let a = this._videoQuality;
if (null != a && this.context === J.Yn.DEFAULT) {
  let t = a.getInboundStats(e),
    n = null !== (r = null == t ? void 0 : t.num_frames) && void 0 !== r ? r : 0;
  null != t && n > 0 && (k.default.track($.rMx.VIDEO_STREAM_ENDED, {
    ...this._getAnalyticsProperties(),
    media_session_id: this.getMediaSessionId(),
    sender_user_id: e,
    reason: 'User disconnected',
    participant_type: 'receiver',
    guild_region: x.Z.getRegion(this.hostname),
    hostname: this.hostname,
    hardware_enabled: P.Z.getHardwareEncoding(),
    ...t,
    ...a.getNetworkStats(),
    ...a.getCodecUsageStats('receiver', e)
  }), a.destroyUser(e), null === (i = this._videoHealthManager) || void 0 === i || i.deleteUser(e));
}
let o = this._connection;
null != o && o.destroyUser(e), null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.destroyUser(e), this._userIds.delete(e), this.emit(Z.z.ClientDisconnect, e), null === (n = this._goLiveQualityManager) || void 0 === n || n.onClientDisconnect(e);
  }
  _handleCodecs(e, t) {
let n = this._connection;
null != n && null != this.protocol ? n.setCodecs(null != e && '' !== e ? e : J.ad.OPUS, null != t && '' !== t ? t : J.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
  }
  _handleSDP(e) {
let t = this._connection;
null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
  }
  async _handleMediaSessionId(e) {
this._mediaSessionId = e, this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId()));
let t = await (0, S.Z)();
k.default.track($.rMx.MEDIA_SESSION_JOINED, {
  ...this._getAnalyticsProperties(),
  media_session_id: this.getMediaSessionId(),
  parent_media_session_id: this.parentMediaSessionId,
  raw_thermal_state: t
}), f.Z.dispatch({
  type: 'MEDIA_SESSION_JOINED',
  mediaSessionId: this.getMediaSessionId(),
  context: this.context
});
  }
  _handleMediaSinkWants(e) {
let t = this._connection;
this.logger.info('Remote media sink wants: '.concat(JSON.stringify(e))), this._remoteVideoSinkWants = e, null == t || t.setRemoteVideoSinkWants(e);
  }
  _handleCodeVersion(e, t) {
this.voiceVersion = e, this.rtcWorkerVersion = t;
  }
  _handleKeyframeInterval(e) {
let t = this._connection;
null != t && null != this.protocol ? t.setKeyframeInterval(e) : this.logger.warn('Cannot set keyframe interval on connection with protocol:', this.protocol);
  }
  _handleBandwidthEstimationExperiment(e) {
this._bandwidthEstimationExperiment = e;
let t = v.Z.getMediaEngineExperiments(e);
if (null !== t && 0 !== t.length) {
  var n;
  null === (n = this._connection) || void 0 === n || n.setBandwidthEstimationExperiments(t);
}
  }
  _trackSecureFrameTransition(e, t) {
k.default.track($.rMx.SECURE_FRAMES_TRANSITION, {
  ...this._getAnalyticsProperties(),
  media_session_id: this.getMediaSessionId(),
  parent_media_session_id: this.parentMediaSessionId,
  sender_user_id: this.userId,
  transition_id: e,
  protocol_version: t
});
  }
  _handleSecureFramesInit(e) {
var t, n;
e > 0 && this.logger.info('Secure frames init with protocol version: '.concat(e)), e >= 100 ? (null === (t = this._connection) || void 0 === t || t.prepareSecureFramesEpoch('1', e, this.trueChannelId), this._sendMLSKeyPackage()) : null === (n = this._connection) || void 0 === n || n.prepareSecureFramesTransition(0, e, () => {
  var t;
  e > 0 && this._trackSecureFrameTransition(0, e), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(0);
});
  }
  _handleSecureFramesRosterChange(e) {
Object.entries(e).forEach(e => {
  let [t, n] = e;
  if (null == n || 0 === n.byteLength)
    this._secureFramesRosterMap.delete(t);
  else
    this._secureFramesRosterMap.set(t, n);
}), this.emit(Z.z.SecureFramesUpdate);
  }
  _handleSecureFramesPrepareTransition(e, t) {
var n;
this.logger.info('Preparing secure frames transition: '.concat(e, ', protocol version: ').concat(t)), null === (n = this._connection) || void 0 === n || n.prepareSecureFramesTransition(e, t, () => {
  this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, t);
});
  }
  _handleSecureFramesPrepareEpoch(e, t) {
var n;
this.logger.info('Preparing secure frames epoch: '.concat(e, ', protocol version: ').concat(t));
let r = e.toString();
null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), '1' === r && this._sendMLSKeyPackage();
  }
  _sendMLSKeyPackage() {
var e;
null === (e = this._connection) || void 0 === e || e.getMLSKeyPackage(e => {
  var t;
  this.logger.info('Got MLS key package, sending to RTC server'), null === (t = this._socket) || void 0 === t || t.sendMLSKeyPackage(e);
});
  }
  _maybeSendSecureFramesTransitionReady(e) {
if (0 !== e) {
  var t;
  this.logger.info('Sending secure frames ready for transition ID '.concat(e)), null === (t = this._socket) || void 0 === t || t.secureFramesReadyForTransition(e);
}
  }
  _handleSecureFramesExecuteTransition(e) {
var t;
this.logger.info('Executing secure frames transition: '.concat(e)), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(e);
  }
  _handleMLSExternalSenderPackage(e) {
var t;
this.logger.info('Received MLS external sender package'), null === (t = this._connection) || void 0 === t || t.updateMLSExternalSender(e);
  }
  _handleMLSProposals(e, t) {
var n;
this.logger.info('Received MLS proposals'), null === (n = this._connection) || void 0 === n || n.processMLSProposals(t, t => {
  this.logger.info('Sending MLS commit welcome message'), e.sendMLSCommitWelcome(t);
});
  }
  _handleMLSPrepareCommitTransition(e, t) {
var n;
this.logger.info('Received MLS commit for transition ID '.concat(e)), null === (n = this._connection) || void 0 === n || n.prepareMLSCommitTransition(e, t, (t, n, r) => {
  t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n)) : (this.logger.warn('Failed to process MLS commit for transition ID '.concat(e)), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(n));
});
  }
  _handleMLSWelcome(e, t) {
var n;
this.logger.info('Received MLS welcome for transition ID '.concat(e)), null === (n = this._connection) || void 0 === n || n.processMLSWelcome(e, t, (t, n, r) => {
  t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n)) : (this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage());
});
  }
  _flagMLSInvalidCommitWelcome(e) {
var t;
this.logger.info('Flagging invalid MLS commit/welcome for transition ID '.concat(e)), null === (t = this._socket) || void 0 === t || t.flagMLSInvalidCommitWelcome(e);
  }
  _getExtraConnectionOptions() {
return {};
  }
  shouldReportPeriodicStats(e) {
if (e.length > 10)
  return !1;
let {
  enableSendingVoiceStats: t,
  percentageOfCalls: n
} = b.Z.getCurrentConfig({
  location: '104dee_3'
}, {
  autoTrackExposure: !1
});
if (!t)
  return !1;
let r = this.getMediaSessionId();
return null != r && (!!(s().v3(r) % 100 <= n) || !1);
  }
  getInputDeviceName() {
var e;
let t = P.Z.getInputDeviceId();
return null === (e = P.Z.getInputDevices()[t]) || void 0 === e ? void 0 : e.name;
  }
  getOutputDeviceName() {
var e;
let t = P.Z.getOutputDeviceId();
return null === (e = P.Z.getOutputDevices()[t]) || void 0 === e ? void 0 : e.name;
  }
  getGoLiveSource() {
return P.Z.getGoLiveSource();
  }
  constructor({
userId: e,
sessionId: t,
guildId: n,
channelId: r,
context: i = J.Yn.DEFAULT,
rtcServerId: a,
parentMediaSessionId: o
  }) {
var s, l;
super(), ee(this, 'context', void 0), ee(this, 'userId', void 0), ee(this, 'sessionId', void 0), ee(this, 'guildId', void 0), ee(this, 'parentMediaSessionId', void 0), ee(this, 'hostname', void 0), ee(this, 'state', void 0), ee(this, '_videoQuality', void 0), ee(this, '_soundshareStats', void 0), ee(this, 'logger', void 0), ee(this, 'rtcServerId', void 0), ee(this, '_channelId', void 0), ee(this, 'channelIds', void 0), ee(this, '_endpoint', void 0), ee(this, 'port', void 0), ee(this, 'token', void 0), ee(this, 'protocol', void 0), ee(this, 'voiceVersion', void 0), ee(this, 'rtcWorkerVersion', void 0), ee(this, '_socket', void 0), ee(this, '_backoff', void 0), ee(this, '_destroyed', void 0), ee(this, '_pings', void 0), ee(this, '_pingBadCount', void 0), ee(this, '_pingTimeouts', void 0), ee(this, '_mediaSessionId', void 0), ee(this, '_voiceQuality', void 0), ee(this, '_voiceQualityPeriodicStatsInterval', void 0), ee(this, '_voiceQualityPeriodicStatsSequenceId', void 0), ee(this, '_noiseCancellationError', void 0), ee(this, '_voiceDuration', void 0), ee(this, '_videoHealthManager', void 0), ee(this, '_sentVideo', void 0), ee(this, '_outboundLossRate', void 0), ee(this, '_recordingEnabled', void 0), ee(this, '_selectedExperiments', void 0), ee(this, '_localMediaSinkWantsManager', void 0), ee(this, '_goLiveQualityManager', void 0), ee(this, '_remoteVideoSinkWants', void 0), ee(this, '_connection', void 0), ee(this, '_createdTime', void 0), ee(this, '_connectStartTime', void 0), ee(this, '_connectCompletedTime', void 0), ee(this, '_rtcConnectionId', void 0), ee(this, '_connectCount', void 0), ee(this, '_connected', void 0), ee(this, '_connecting', void 0), ee(this, '_encountered_socket_failure', void 0), ee(this, '_inputDetected', void 0), ee(this, '_encryptionMode', void 0), ee(this, 'stateHistory', void 0), ee(this, '_supportedBandwidthEstimationExperiments', void 0), ee(this, '_bandwidthEstimationExperiment', void 0), ee(this, '_secureFramesState', void 0), ee(this, '_userIds', void 0), ee(this, '_secureFramesRosterMap', new Map()), ee(this, '_mlsFailures', void 0), ee(this, 'powerMonitorListener', void 0), ee(this, 'reconnect', () => {
  let e = this._socket;
  null != e && (this._connected && (this._connectStartTime = (0, E.zO)()), !this._connecting && (this._trackVoiceConnectionConnecting(), this._connecting = !0, this._encountered_socket_failure = !1), this._connectCount++, e.close(), e.connect());
}), ee(this, '_handleNetworkOnline', () => {
  this.expeditedHeartbeat(5000, 'network detected online.');
}), ee(this, '_handleNetworkOffline', () => {
  this.expeditedHeartbeat(15000, 'network detected offline.', !1);
}), ee(this, '_handlePowerResume', () => {
  this.expeditedHeartbeat(5000, 'power monitor resumed');
}), ee(this, '_handleVoiceQualityPeriodicsStats', () => {
  if (null != this._voiceQuality) {
    let e = this._voiceQuality.getPeriodicStats();
    if (this.shouldReportPeriodicStats(e))
      for (let t of e)
        k.default.track($.rMx.VOICE_QUALITY_PERIODIC_STATS, {
          ...this._getAnalyticsProperties(),
          media_session_id: this.getMediaSessionId(),
          sender_user_id: t.userId,
          hostname: this.hostname,
          frame_op_silent: t.silent,
          frame_op_normal: t.normal,
          frame_op_merged: t.merged,
          frame_op_expanded: t.expanded,
          frame_op_accelerated: t.accelerated,
          frame_op_preemptive_expanded: t.preemptiveExpanded,
          frame_op_cng: t.cng,
          accelerate_rate: t.accelerateRate,
          expand_rate: t.expandRate,
          preemptive_expand_rate: t.preemptiveExpandRate,
          speech_expand_rate: t.speechExpandRate,
          duration_ms: t.durationMs,
          sequence_id: this._voiceQualityPeriodicStatsSequenceId,
          input_device: this.getInputDeviceName(),
          output_device: this.getOutputDeviceName(),
          ping_average: Math.round(this.getAveragePing()),
          ping_bad_count: this._pingBadCount,
          parent_media_session_id: this.parentMediaSessionId
        });
    this._voiceQualityPeriodicStatsSequenceId++;
  }
}), ee(this, '_trackVoiceConnectionConnecting', () => {
  let e = M.Z.getChannel(this.channelId),
    t = null != e ? e.type : null;
  k.default.track($.rMx.VOICE_CONNECTION_CONNECTING, {
    guild_id: this.guildId,
    channel_id: this.channelId,
    rtc_connection_id: this.getRTCConnectionId(),
    hostname: this.hostname,
    connect_count: this._connectCount,
    context: this.context,
    channel_type: t
  });
}), this.context = i, this.logger = new T.Z('RTCConnection('.concat(null !== (s = null != a ? a : n) && void 0 !== s ? s : r, ', ').concat(this.context, ')')), this.userId = e, this.sessionId = t, this.guildId = n, this._channelId = r, this.channelIds = new Set([r]), this.rtcServerId = a, this.parentMediaSessionId = o, this._endpoint = null, this.hostname = null, this.port = null, this.token = null, this.voiceVersion = null, this.rtcWorkerVersion = null, this.state = $.hes.AWAITING_ENDPOINT, this.stateHistory = new Y.K(this.state), this._socket = null, this._backoff = new c.Z(1000, 10000), this._destroyed = !1, this._pings = [], this._pingBadCount = 0, this._pingTimeouts = [], this._mediaSessionId = null, this._voiceQuality = null, this._voiceQualityPeriodicStatsInterval = null, this._voiceQualityPeriodicStatsSequenceId = 0, this._noiseCancellationError = 0, this._voiceDuration = null, this._videoQuality = null, this._videoHealthManager = null, this._sentVideo = !1, this._outboundLossRate = null, this._createdTime = (0, E.zO)(), this._connectStartTime = 0, this._connectCompletedTime = 0, this._rtcConnectionId = (0, u.Z)(), this._connectCount = 0, this._connected = !1, this._connecting = !1, this._encountered_socket_failure = !1, this._inputDetected = !1, this._selectedExperiments = [], this._secureFramesState = null, this._userIds = new Set([e]), this._secureFramesRosterMap.clear();
let d = P.Z.supports(J.AN.FIRST_FRAME_CALLBACK) && P.Z.supports(J.AN.REMOTE_USER_MULTI_STREAM);
if (i === J.Yn.DEFAULT) {
  let t = (null === (l = M.Z.getChannel(this.channelId)) || void 0 === l ? void 0 : l.type) === $.d4z.GUILD_STAGE_VOICE;
  this._localMediaSinkWantsManager = new W.ZP(e, t, d), this._localMediaSinkWantsManager.on(W.ai.Update, e => {
    if (this.state === $.hes.RTC_CONNECTED && null != this._socket) {
      var t;
      this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
    }
  }), this._localMediaSinkWantsManager.on(W.ai.UserSSRCUpdate, (e, t, n) => {
    var r;
    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
  });
} else
  i === J.Yn.STREAM && (this._goLiveQualityManager = new A.Z(!1), this._goLiveQualityManager.on(A.y.RequestedSSRCsUpdate, (e, t, n) => {
    var r;
    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
  }), this._goLiveQualityManager.on(A.y.RequestedStreamsUpdate, e => {
    if (this.state === $.hes.RTC_CONNECTED && null != this._socket) {
      var t;
      this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
    }
  }));
this._remoteVideoSinkWants = W.Yy, w.ZP.shouldRecordNextConnection() ? (this._recordingEnabled = !0, m.TC(!1)) : this._recordingEnabled = !1, this._soundshareStats = new K.Z(), B.Z.addOnlineCallback(this._handleNetworkOnline), B.Z.addOfflineCallback(this._handleNetworkOffline), (0, F.isDesktop)() && (this.powerMonitorListener = V.Z.remotePowerMonitor.on('resume', this._handlePowerResume)), this._supportedBandwidthEstimationExperiments = [], this._bandwidthEstimationExperiment = null, P.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments(e => {
  this._supportedBandwidthEstimationExperiments = e;
}), this._mlsFailures = {};
  }
}