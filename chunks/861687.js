n.d(t, {
    Z: function () {
        return es;
    }
}),
    n(411104),
    n(724458),
    n(653041),
    n(47120);
var r,
    i = n(654861),
    a = n.n(i),
    s = n(954955),
    o = n.n(s),
    l = n(108131),
    u = n.n(l),
    c = n(729594),
    d = n(772848),
    f = n(261470),
    _ = n(47770),
    h = n(46973),
    p = n(379649),
    m = n(570140),
    g = n(668781),
    E = n(846027),
    v = n(304680),
    I = n(547727),
    S = n(710845),
    T = n(811660),
    b = n(42352),
    y = n(148959),
    A = n(926951),
    N = n(868616),
    C = n(848886),
    R = n(583215),
    O = n(576574),
    D = n(307320);
n(527702);
var L = n(615830),
    x = n(314897),
    w = n(592125),
    M = n(131951),
    P = n(19780),
    k = n(226961),
    U = n(936349),
    G = n(594174),
    B = n(626135),
    Z = n(630388),
    F = n(931619),
    V = n(358085),
    j = n(579806),
    H = n(859401),
    Y = n(437263),
    W = n(423343),
    K = n(685756),
    z = n(655306),
    q = n(583794),
    Q = n(824096),
    X = n(53114),
    J = n(174532),
    $ = n(895066),
    ee = n(798681),
    et = n(981631),
    en = n(65154);
function er(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let ei = /^https/.test(((r = 'https:'), 'https:')) ? 'wss:' : 'ws:';
function ea(e) {
    return e;
}
class es extends _.Z {
    get quality() {
        let e = this.getLastPing();
        if (this.state !== et.hes.RTC_CONNECTED || void 0 === e) return et.IE4.UNKNOWN;
        if (e > 500 || (null != this._outboundLossRate && this._outboundLossRate > 10)) return et.IE4.BAD;
        if (e > 250 || (null != this._outboundLossRate && this._outboundLossRate > 5)) return et.IE4.AVERAGE;
        else return et.IE4.FINE;
    }
    get endpoint() {
        return this._endpoint;
    }
    set endpoint(e) {
        if (null == e) (this._endpoint = null), (this.hostname = null);
        else {
            e = ''.concat(ei, '//').concat(e);
            let { hostname: t, port: n } = c.parse(e),
                r = null != n ? parseInt(n) : NaN;
            null != t && (80 === r || 443 === r) && (e = ''.concat(ei, '//').concat(t)), (this._endpoint = e + '/'), (this.hostname = t);
        }
    }
    connect(e, t) {
        if (this._destroyed) throw Error('RTCConnection.connect(...): Attempting to connect on destroyed instance.');
        this._backoff.cancel();
        let { endpoint: n, token: r } = this;
        if (
            ((this.endpoint = e),
            (this.token = t),
            (n !== this.endpoint || r !== t) &&
                (this._cleanupSocket(),
                (this._mediaSessionId = null),
                null != n &&
                    ((this._rtcConnectionId = (0, d.Z)()),
                    m.Z.dispatch({
                        type: 'RTC_CONNECTION_UPDATE_ID',
                        connection: this
                    }))),
            null == this.endpoint)
        ) {
            this.setState(et.hes.AWAITING_ENDPOINT);
            return;
        }
        let i = this._socket;
        null != i && this._cleanupSocket(), (i = this._socket = new K.Z(this.endpoint, this.context)).on(K.V.Connecting, this._handleConnecting.bind(this, i)), i.on(K.V.Connect, this._handleConnect.bind(this, i)), i.on(K.V.Disconnect, this._handleDisconnect.bind(this, i)), i.on(K.V.Resuming, this._handleResuming.bind(this, i)), i.on(K.V.Ready, this._handleReady.bind(this, i)), i.on(K.V.Speaking, this._handleSpeaking.bind(this, i)), i.on(K.V.Video, this._handleVideo.bind(this, i)), i.on(K.V.Ping, this._handleControlPing.bind(this)), i.on(K.V.ClientDisconnect, this._handleClientDisconnect.bind(this)), i.on(K.V.ClientConnect, this._handleClientConnect.bind(this)), i.on(K.V.Codecs, this._handleCodecs.bind(this)), i.on(K.V.MediaSessionId, this._handleMediaSessionId.bind(this)), i.on(K.V.MediaSinkWants, this._handleMediaSinkWants.bind(this)), i.on(K.V.VoiceBackendVersion, this._handleCodeVersion.bind(this)), i.on(K.V.KeyframeInterval, this._handleKeyframeInterval.bind(this)), i.on(K.V.Flags, this.handleFlags.bind(this)), i.on(K.V.Platform, this.handlePlatform.bind(this)), i.on(K.V.BandwidthEstimationExperiment, this._handleBandwidthEstimationExperiment.bind(this)), i.on(K.V.SecureFramesInit, this._handleSecureFramesInit.bind(this)), i.on(K.V.SecureFramesPrepareTransition, this._handleSecureFramesPrepareTransition.bind(this)), i.on(K.V.SecureFramesPrepareEpoch, this._handleSecureFramesPrepareEpoch.bind(this)), i.on(K.V.SecureFramesExecuteTransition, this._handleSecureFramesExecuteTransition.bind(this)), i.on(K.V.MLSExternalSenderPackage, this._handleMLSExternalSenderPackage.bind(this)), i.on(K.V.MLSProposals, this._handleMLSProposals.bind(this, i)), i.on(K.V.MLSPrepareCommitTransition, this._handleMLSPrepareCommitTransition.bind(this)), i.on(K.V.MLSWelcome, this._handleMLSWelcome.bind(this)), (this._connectStartTime = (0, p.zO)()), this._connectCount++, (this._connecting = !0), null != i && this._socket === i && (this._trackVoiceConnectionConnecting(), (this._encountered_socket_failure = !1), i.connect());
    }
    destroy() {
        var e, t, n, r, i;
        if ((this.logger.info('Destroy RTCConnection'), F.Z.removeOnlineCallback(this._handleNetworkOnline), F.Z.removeOfflineCallback(this._handleNetworkOffline), (0, V.isDesktop)() && (null === (i = this.powerMonitorListener) || void 0 === i || i.call(this)), ee.w.off(ee.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged), ee.w.off(ee.e.WindowVisibilityChanged, this.windowVisibilityChanged), this._backoff.cancel(), this._cleanupSocket(), null === (e = this._voiceQuality) || void 0 === e || e.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), null === (t = this._voiceDuration) || void 0 === t || t.stop(), (this._voiceDuration = null), null === (n = this._videoQuality) || void 0 === n || n.stop(), (this._videoQuality = null), (this._videoHealthManager = null), (this._secureFramesState = null), null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.reset(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.removeAllListeners(), (this._destroyed = !0);
    }
    shouldSendSpeaking(e, t) {
        if ((0, V.isWeb)()) return !0;
        let n = (0, Z.yE)(e, en.Dg.PRIORITY),
            r = (0, Z.yE)(this._lastSentSpeakingStatus, en.Dg.PRIORITY);
        if (this._lastSentSSRC === t && n === r) return !1;
        if (void 0 === this._lastSentSSRC && e === en.Dg.NONE) return !1;
        if (this._lastSentSSRC !== t && e === en.Dg.NONE) return !1;
        return (this._lastSentSpeakingStatus = e), (this._lastSentSSRC = t), !0;
    }
    sendSpeaking(e, t) {
        let n = this._socket;
        if (null == n || !this.shouldSendSpeaking(e, t)) return;
        let r = M.Z.getPacketDelay();
        n.speaking(e, r, t);
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
        let e = this._connectCompletedTime > 0 ? (0, p.zO)() - this._connectCompletedTime : 0;
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
    getIsUserConnected(e) {
        return this._userIds.has(e);
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
        this.logger.info('RTC connection state: '.concat(this.state, ' => ').concat(e)),
            (this.state = e),
            this.stateHistory.update(this.state),
            this.emit(
                Y.z.State,
                e,
                {
                    hostname: this.hostname,
                    channelId: this.trueChannelId,
                    context: this.context
                },
                t
            );
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
        if (t === this.context) t === en.Yn.DEFAULT ? null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setSimulcastDebugOverride(e, n) : null === (i = this._goLiveQualityManager) || void 0 === i || i.setSimulcastDebugOverride(n);
    }
    setVideoSize(e, t) {
        var n;
        if (this.context === en.Yn.DEFAULT) null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.setVideoSize(e, t);
    }
    set channelId(e) {
        (this._channelId = e), this.channelIds.add(e);
    }
    get channelId() {
        return this._channelId;
    }
    get trueChannelId() {
        return null != this.rtcServerId ? a()(this.rtcServerId).prev().toString() : this.channelId;
    }
    _cleanupSocket() {
        let e = this._socket;
        null != e && (e.close(), e.removeAllListeners(), (this._socket = null));
    }
    _chooseExperiments(e) {
        let t = [];
        if ((this._recordingEnabled && t.push('connection_log'), null != this.guildId)) {
            let { shouldOverrideKrisp: e, overrideKrispSetting: n } = N.Z.getCurrentConfig(
                {
                    guildId: this.guildId,
                    location: 'handleReady'
                },
                { autoTrackExposure: !0 }
            );
            e && (n ? t.push('force_krisp_enabled') : t.push('force_krisp_disabled'));
        }
        if ((M.Z.supports(en.AN.FIXED_KEYFRAME_INTERVAL) && t.push('fixed_keyframe_interval'), 0 !== this._supportedBandwidthEstimationExperiments.length)) {
            let { enabled: e, fullname: n } = A.Z.getConfig(!0, this._supportedBandwidthEstimationExperiments);
            e && t.push(n);
        }
        this._selectedExperiments = t;
    }
    _handleConnecting(e) {
        null != this.endpoint && this.logger.info('Connecting to RTC server '.concat(this.endpoint, ', rtc-connection-id: ').concat(this.getRTCConnectionId())), this.setState(et.hes.CONNECTING);
    }
    _handleConnect(e) {
        var t, n;
        let r = this.token;
        if (null == r) throw Error('RTCConnection._handleConnect(...): Token is missing.');
        this.logger.info('Connected to RTC server.'),
            e.identify({
                serverId: null !== (n = null !== (t = this.rtcServerId) && void 0 !== t ? t : this.guildId) && void 0 !== n ? n : this.channelId,
                userId: this.userId,
                sessionId: this.sessionId,
                token: r,
                maxDaveProtocolVersion: M.Z.getSupportedSecureFramesProtocolVersion(this.guildId),
                video: M.Z.supports(en.AN.VIDEO),
                streamParameters: M.Z.getVideoStreamParameters(this.context)
            }),
            this.setState(et.hes.AUTHENTICATING);
    }
    _handleDisconnect(e, t, n, r) {
        var i, a, s, o, l, u;
        this.logger.info('Disconnected from RTC server, clean: '.concat(t, ', code: ').concat(n, ', reason: ').concat(r, ', state: ').concat(this.state)),
            !t &&
                this._connecting &&
                !this._encountered_socket_failure &&
                (B.default.track(et.rMx.VOICE_CONNECTION_SOCKET_FAILURE, {
                    ...this._getAnalyticsProperties(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    code: n,
                    reason: r
                }),
                (this._encountered_socket_failure = !0)),
            P.Z.getRemoteDisconnectVoiceChannelId() === this.channelId && (null === (l = this._connection) || void 0 === l || l.wasRemoteDisconnected());
        let c = 'Force Close' !== r;
        if (c) {
            let e = this._backoff.fail(this.reconnect);
            this.logger.warn('Disconnect was not clean! reason='.concat(r, '. Reconnecting in ').concat((e / 1000).toFixed(2), ' seconds.'));
        }
        if (this.state !== et.hes.DISCONNECTED) {
            let e = this._videoQuality;
            null != e &&
                this.context === en.Yn.DEFAULT &&
                (e.stop(),
                this._sentVideo &&
                    e.getOutboundStats().forEach((t) => {
                        var n;
                        (null !== (n = t.num_frames) && void 0 !== n ? n : 0) > 0 &&
                            B.default.track(et.rMx.VIDEO_STREAM_ENDED, {
                                ...this._getAnalyticsProperties(),
                                media_session_id: this.getMediaSessionId(),
                                sender_user_id: this.userId,
                                reason: r,
                                participant_type: 'sender',
                                guild_region: U.Z.getRegion(this.hostname),
                                hostname: this.hostname,
                                hardware_enabled: M.Z.getHardwareEncoding(),
                                ...t,
                                ...e.getNetworkStats(),
                                ...e.getCodecUsageStats('sender', this.userId),
                                ...this._soundshareStats.getStats(),
                                device_performance_class: (0, T.R)()
                            });
                    }),
                e.getInboundParticipants().forEach((t) => {
                    var n;
                    let i = e.getInboundStats(t);
                    (null !== (n = null == i ? void 0 : i.num_frames) && void 0 !== n ? n : 0) > 0 &&
                        B.default.track(et.rMx.VIDEO_STREAM_ENDED, {
                            ...this._getAnalyticsProperties(),
                            media_session_id: this.getMediaSessionId(),
                            sender_user_id: t,
                            reason: r,
                            participant_type: 'receiver',
                            guild_region: U.Z.getRegion(this.hostname),
                            hostname: this.hostname,
                            hardware_enabled: M.Z.getHardwareEncoding(),
                            ...i,
                            ...e.getNetworkStats(),
                            ...e.getCodecUsageStats('receiver', t)
                        });
                }));
            let t = U.Z.shouldIncludePreferredRegion() ? U.Z.getPreferredRegion() : null,
                n = M.Z.getSettings(),
                i = w.Z.getChannel(this.channelId);
            B.default.track(et.rMx.VOICE_DISCONNECT, {
                ...this._getAnalyticsProperties(),
                hostname: this.hostname,
                port: this.port,
                protocol: this.protocol,
                reconnect: c,
                reason: r,
                duration: this.getDuration(),
                ...(null != this._voiceQuality ? this._voiceQuality.getMosStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getPacketStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getBytesStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getBufferStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getNetworkStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getSystemResourceStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getFrameOpStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getDurationStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getTransportStats() : null),
                ...(null != this._voiceQuality ? this._voiceQuality.getE2EEStats() : null),
                ...(null != this._voiceDuration ? this._voiceDuration.getDurationStats() : null),
                media_session_id: this.getMediaSessionId(),
                channel_bitrate: null != i ? i.bitrate : null,
                cloudflare_best_region: t,
                connect_count: this._connectCount,
                ping_average: Math.round(this.getAveragePing()),
                ping_bad_count: this._pingBadCount,
                ping_timeout: this._pingTimeouts.length,
                input_detected: this._inputDetected,
                no_input_detected_notice: M.Z.getNoInputDetectedNotice(),
                audio_input_mode: n.mode,
                automatic_audio_input_sensitivity_enabled: n.modeOptions.autoThreshold,
                audio_input_sensitivity: n.modeOptions.threshold,
                echo_cancellation_enabled: n.echoCancellation,
                sidechain_compression_enabled: n.sidechainCompression,
                noise_suppression_enabled: n.noiseSuppression,
                noise_cancellation_enabled: n.noiseCancellation,
                noise_canceller_error: this._noiseCancellationError,
                automatic_gain_control_enabled: n.automaticGainControl,
                voice_output_volume: n.outputVolume,
                encryption_mode: this._encryptionMode,
                channel_count: this.channelIds.size,
                input_device: this.getInputDeviceName(),
                input_device_count: Object.keys(M.Z.getInputDevices()).length,
                output_device: this.getOutputDeviceName(),
                output_device_count: Object.keys(M.Z.getOutputDevices()).length,
                device_performance_class: (0, T.R)(),
                num_fast_udp_reconnects: null != this._connection ? (null === (u = this._connection) || void 0 === u ? void 0 : u.getNumFastUdpReconnects()) : null,
                parent_media_session_id: this.parentMediaSessionId,
                audio_subsystem: M.Z.getMediaEngine().getAudioSubsystem(),
                audio_layer: M.Z.getMediaEngine().getAudioLayer(),
                automatic_audio_subsystem: n.automaticAudioSubsystem
            });
            let a = this.getMediaSessionId();
            M.Z.getMediaEngine()
                .getCodecSurvey()
                .then((e) => {
                    let t = JSON.parse(e);
                    if (null == t || null == t.available_video_encoders || null == t.available_video_decoders) throw Error('codec survey is not available');
                    B.default.track(et.rMx.VOICE_CODEC_DETECTED, {
                        ...t,
                        rtc_connection_id: this.getRTCConnectionId(),
                        media_session_id: a
                    });
                })
                .catch((e) => {
                    this.logger.warn(e);
                }),
                this._trackMLSFailures();
        }
        if (((this._pingTimeouts = []), (this._pings = []), (this._connectCompletedTime = 0), (this._pingBadCount = 0), (this._inputDetected = !1), (this._mediaSessionId = null), null === (i = this._voiceQuality) || void 0 === i || i.stop(), (this._voiceQuality = null), clearInterval(this._voiceQualityPeriodicStatsInterval), (this._voiceQualityPeriodicStatsInterval = null), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._noiseCancellationError = 0), null === (a = this._voiceDuration) || void 0 === a || a.stop(), (this._voiceDuration = null), null === (s = this._videoQuality) || void 0 === s || s.stop(), (this._videoQuality = null), (this._videoHealthManager = null), null === (o = this._localMediaSinkWantsManager) || void 0 === o || o.reset(), (this._secureFramesState = null), (this._userIds = new Set([this.userId])), this._secureFramesRosterMap.clear(), null != this._connection)) {
            let e = this._connection;
            (this._connection = null), e.destroy();
        }
        this.setState(et.hes.DISCONNECTED, { willReconnect: c });
    }
    _handleResuming(e) {
        var t, n;
        null === (t = this._connection) || void 0 === t || t.fastUdpReconnect(), null === (n = this._connection) || void 0 === n || n.clearAllSpeaking();
    }
    _handleReady(e, t, n, r, i, a, s) {
        var o;
        this.setState(et.hes.RTC_CONNECTING),
            (this.port = n),
            null != s && this._chooseExperiments(s),
            0 === a.length &&
                a.push({
                    type: en.Tr.VIDEO,
                    rid: '100',
                    ssrc: i + 1,
                    rtxSsrc: i + 2,
                    quality: 100,
                    active: !1
                });
        let l = M.Z.getMediaEngine(),
            u = L.Z.getPersistentCodesEnabled(),
            c = null !== (o = x.default.getStaticAuthSessionId()) && void 0 !== o ? o : void 0,
            d = l.connect(this.context, this.userId, {
                ssrc: i,
                address: t,
                port: n,
                modes: r,
                experiments: this._selectedExperiments,
                streamParameters: a,
                qosEnabled: M.Z.getQoS(),
                signingKeyId: u ? c : void 0,
                ...this._getExtraConnectionOptions()
            });
        d.setUseElectronVideo(l.supports(en.AN.ELECTRON_VIDEO)), M.Z.supports(en.AN.IMAGE_QUALITY_MEASUREMENT) && d.setVideoQualityMeasurement('imageQualityWebrtcPsnrDb:5000,imageQualityVmaf_v061:5000,hwdec');
        let f = ['unk'];
        if ((M.Z.supports(en.AN.AMD_EXPERIMENTAL_RATE_CONTROL) && f.push('amdRelaxRc'), this.context === en.Yn.STREAM)) {
            let { nvMediumVbvSizeMs: e } = O.Z.getCurrentConfig({ location: 'handleReady' }, { autoTrackExposure: !0 });
            if (e > 0) {
                f.push('nvRelaxRc=' + e);
                let { nvEnableNewPresets: t } = R.Z.getCurrentConfig({ location: 'handleReady' }, { autoTrackExposure: !0 });
                t && f.push('nvNewPresets');
            }
            if (null != this.guildId) {
                let { enableAdaptiveKeyFrame: e } = C.Z.getCurrentConfig(
                    {
                        guildId: this.guildId,
                        location: 'handleReady'
                    },
                    { autoTrackExposure: !0 }
                );
                e && f.push('nvencAdaptiveIDR');
            }
        }
        d.setVideoEncoderExperiments(f.join(',')),
            d.on(h.Sh.Speaking, (e, t, n) => {
                this.userId === e && this.sendSpeaking(t, n), this.emit(Y.z.Speaking, e, t);
            }),
            d.on(h.Sh.ToggleMuteFromNative, () => {
                this.context === en.Yn.DEFAULT && E.Z.toggleSelfMute({ playSoundEffect: !1 });
            }),
            d.on(h.Sh.NativeMuteChanged, (e) => {
                this.context === en.Yn.DEFAULT && I.Z.nativeMuteChanged(e);
            }),
            d.on(h.Sh.Video, (e, t, n, r, i, a) => {
                this._handleVideoStreamId({
                    userId: e,
                    streamId: t,
                    audioSsrc: n,
                    videoSsrc: null != r ? r : 0,
                    rtxSsrc: i,
                    videoStreamParameters: a
                }),
                    this.userId === e &&
                        (this.sendVideo(null != n ? n : 0, null != r ? r : 0, null != i ? i : 0, a),
                        null == a ||
                            a.forEach((t) => {
                                if (100 === t.quality) this.emit(Y.z.VideoSourceQualityChanged, this.guildId, this.channelId, e, t.maxResolution, t.maxFrameRate, this.context);
                            }));
            }),
            d.on(h.Sh.FirstFrame, (e, t, n) => {
                if (null != this._localMediaSinkWantsManager) this._localMediaSinkWantsManager.setFirstFrameReceived(t), this.emit(Y.z.Video, this.guildId, this.channelId, e, n, this.rtcServerId);
                if (null != this._goLiveQualityManager) this._goLiveQualityManager.setFirstFrameReceived(t), this.emit(Y.z.Video, this.guildId, this.channelId, e, n, this.rtcServerId);
            }),
            d.on(h.Sh.Silence, (e) => {
                this._inputDetected = this._inputDetected || !e;
            }),
            d.on(h.Sh.Connected, (r, i) => {
                if ((this.logger.info('RTC connected to media server: '.concat(t, ':').concat(n)), e !== this._socket)) {
                    this.logger.warn('Socket mismatch, disconnecting');
                    return;
                }
                switch (((this._voiceQuality = new $.Z(d)), this._voiceQuality.start(), (this._voiceQualityPeriodicStatsSequenceId = 0), (this._voiceQualityPeriodicStatsInterval = setInterval(this._handleVoiceQualityPeriodicsStats, 300000)), (this._noiseCancellationError = 0), (this._voiceDuration = new J.Z(this.userId, d)), this._voiceDuration.start(), (this.protocol = r), r)) {
                    case 'udp':
                        this.logger.info('Sending UDP info to RTC server.', i, this._selectedExperiments),
                            e.once(K.V.Encryption, (e, t) => {
                                d === this._connection && (d.setEncryption(e, t), (this._encryptionMode = e));
                            }),
                            e.selectProtocol(r, this.getRTCConnectionId(), i, this._selectedExperiments);
                        break;
                    case 'webrtc':
                        this.logger.info('Sending local SDP to RTC server.'), e.once(K.V.SDP, this._handleSDP.bind(this)), e.selectProtocol(r, this.getRTCConnectionId(), i);
                        break;
                    default:
                        this.logger.error('Unable to determine protocol.');
                        return;
                }
                this._backoff.succeed();
            }),
            d.on(h.Sh.VideoEncoderFallback, (t) => {
                let n = t
                    .filter((e) => 'video' === e.type)
                    .map((e) => e.name)
                    .join(',');
                this.logger.info('The originally selected video encoder is not working, fallback to the other available encoders: '.concat(n)), e.updateSession({ codecs: t });
            }),
            d.on(h.Sh.Error, (t) => {
                if (e !== this._socket) return;
                let n = U.Z.shouldIncludePreferredRegion() ? U.Z.getPreferredRegion() : null;
                this.logger.error('Error occurred while connecting to RTC server: '.concat(t)),
                    B.default.track(et.rMx.VOICE_CONNECTION_FAILURE, {
                        ...this._getAnalyticsProperties(),
                        hostname: this.hostname,
                        port: this.port,
                        protocol: this.protocol,
                        error: t,
                        cloudflare_best_region: n,
                        connect_count: this._connectCount
                    });
            }),
            d.on(h.Sh.ConnectionStateChange, (t) => {
                if ((this.logger.info('RTC media connection state change: '.concat(this.state, ' => ').concat(t)), e !== this._socket)) return;
                let n = this.state;
                switch (t) {
                    case en.$j.DISCONNECTED:
                        this.setState(et.hes.RTC_DISCONNECTED);
                        break;
                    case en.$j.CONNECTING:
                        this.setState(et.hes.RTC_CONNECTING);
                        break;
                    case en.$j.CONNECTED:
                        this.setState(et.hes.RTC_CONNECTED);
                        break;
                    case en.$j.NO_ROUTE:
                        this.setState(et.hes.NO_ROUTE);
                        break;
                    case en.$j.ICE_CHECKING:
                        this.setState(et.hes.ICE_CHECKING);
                        break;
                    case en.$j.DTLS_CONNECTING:
                        this.setState(et.hes.DTLS_CONNECTING);
                }
                if ((n === et.hes.RTC_CONNECTING && this.state === et.hes.RTC_DISCONNECTED ? this.reconnect() : this.state === et.hes.NO_ROUTE && (0 === this._backoff.fails && this._handleNoRoute(), this._backoff.fail(this.reconnect)), this.state === et.hes.RTC_CONNECTED)) {
                    var r, i;
                    let e = U.Z.shouldIncludePreferredRegion() ? U.Z.getPreferredRegion() : null;
                    this._connecting &&
                        B.default.track(et.rMx.VOICE_CONNECTION_SUCCESS, {
                            ...this._getAnalyticsProperties(),
                            hostname: this.hostname,
                            port: this.port,
                            protocol: this.protocol,
                            cloudflare_best_region: e,
                            connect_time: (0, p.zO)() - (this._connected ? this._connectStartTime : this._createdTime),
                            connect_count: this._connectCount,
                            audio_subsystem: M.Z.getMediaEngine().getAudioSubsystem(),
                            audio_layer: M.Z.getMediaEngine().getAudioLayer(),
                            media_session_id: this.getMediaSessionId(),
                            ...this.stateHistory.getVoiceConnectionSuccessStats()
                        }),
                        null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.setConnection(d),
                        null === (i = this._goLiveQualityManager) || void 0 === i || i.update(),
                        (this._connectCompletedTime = (0, p.zO)()),
                        (this._connected = !0),
                        (this._connecting = !1),
                        (this._encountered_socket_failure = !1);
                } else n === et.hes.RTC_CONNECTED && this.stateHistory.reset(this.state);
            }),
            d.on(h.Sh.SecureFramesUpdate, (e) => {
                (this._secureFramesState = e), this.emit(Y.z.SecureFramesUpdate);
            }),
            d.on(h.Sh.Ping, this._handlePing.bind(this)),
            d.on(h.Sh.PingTimeout, this._handlePingTimeout.bind(this)),
            d.on(h.Sh.OutboundLossRate, this._handleOutboundLossRate.bind(this)),
            d.on(h.Sh.SoundshareTrace, this._handleSoundshareTrace.bind(this)),
            d.on(h.Sh.LocalVideoDisabled, this._handleLocalVideoDisabled.bind(this)),
            d.on(h.Sh.Stats, H.Z.create()),
            d.on(h.Sh.RemoteStreamsReady, this._handleRemoteStreamsReady.bind(this)),
            d.on(h.Sh.NoiseCancellationError, (e) => {
                this._noiseCancellationError = e;
            }),
            d.on(h.Sh.MLSFailure, this._handleMLSFailure.bind(this)),
            d.setRemoteVideoSinkWants(this._remoteVideoSinkWants),
            (this._connection = d);
    }
    _handleSpeaking(e, t, n, r) {
        let i = this._connection;
        if (null != i && this.userId !== t) {
            var a;
            r !== en.Dg.NONE &&
                (i.createUser(t, n),
                m.Z.dispatch({
                    type: 'RTC_CONNECTION_USER_CREATE',
                    userId: t,
                    context: this.context
                })),
                null === (a = this._localMediaSinkWantsManager) || void 0 === a || a.setAudioSSRC(t, n);
        }
    }
    handleFlags(e, t) {
        this.emit(Y.z.Flags, e, t);
    }
    handlePlatform(e, t) {
        this.emit(Y.z.Platform, e, t, this.channelId);
    }
    getOrCreateVideoQuality() {
        if (null != this._connection && null == this._videoQuality) {
            (this._videoQuality = new X.S(this._connection)), this._videoQuality.start();
            let { featureEnabled: e, windowLength: t, allowedPoorFpsRatio: n, fpsThreshold: r, backoffTimeSec: i } = D.Z.getConfig(!0);
            if (e) {
                (this._videoHealthManager = new Q.y(t, n, r, i)), null != this._localMediaSinkWantsManager && (this._localMediaSinkWantsManager.videoHealthManager = this._videoHealthManager);
                this._videoQuality.on(X.d.FpsUpdate, (e, t, n) => {
                    var r, i;
                    (null === (r = this._localMediaSinkWantsManager) || void 0 === r ? void 0 : r.shouldReceiveFromUser(e)) && (null === (i = this._videoHealthManager) || void 0 === i || i.updateFps(e, t, n));
                });
            }
        }
        return this._videoQuality;
    }
    _handleVideoStreamId(e) {
        var t, n, r, i;
        let { userId: a, streamId: s, videoSsrc: o, videoStreamParameters: l } = e;
        if (
            (this.emit(Y.z.Video, this.guildId, this.channelId, a, s, this.rtcServerId),
            null != s && null == this.getOrCreateVideoQuality() && this.logger.error('_handleVideoStreamId: Unable to create videoQuality.'),
            null != this._videoQuality &&
                this.userId === a &&
                l.forEach((e) => {
                    var t, n;
                    let r = null !== (t = e.ssrc) && void 0 !== t ? t : 0;
                    r > 0 && !0 === e.active && (null === (n = this._videoQuality) || void 0 === n || n.setOutboundSsrc(r));
                }),
            this.userId !== a)
        ) {
            let e = 0 === o && null === s;
            (!e || (e && (null === (t = this._videoQuality) || void 0 === t ? void 0 : t.getInboundParticipants().includes(a)))) && (null === (n = this._videoQuality) || void 0 === n || n.setInboundUser(a, o), null === (r = this._videoHealthManager) || void 0 === r || r.createUser(a));
        }
        null != this._connection && this.userId !== a && (null === (i = this._localMediaSinkWantsManager) || void 0 === i || i.setStreamId(a, s));
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
        let t = (0, p.zO)() - this._connectStartTime;
        B.default.track(et.rMx.VOICE_CONNECTION_REMOTE_STREAMS_CREATED, {
            ...this._getAnalyticsProperties(),
            number_of_users: e,
            duration_ms: t
        });
    }
    _handleVideo(e, t, n, r, i) {
        if (null != this._connection && this.userId !== t) {
            if (null != this._localMediaSinkWantsManager) {
                this._localMediaSinkWantsManager.setAudioSSRC(t, n);
                let e = i.map((e) => ({
                    type: en.Tr.VIDEO,
                    rid: e.rid,
                    ssrc: e.ssrc,
                    rtxSsrc: e.rtxSsrc,
                    quality: e.quality,
                    active: r > 0
                }));
                0 === e.length &&
                    e.push({
                        type: en.Tr.VIDEO,
                        rid: '100',
                        ssrc: r,
                        rtxSsrc: r + 1,
                        quality: 100,
                        active: r > 0
                    }),
                    this._localMediaSinkWantsManager.setVideoSSRCs(t, e);
            } else {
                var a, s;
                let e = [];
                for (let t of i)
                    null != t.ssrc &&
                        null != t.quality &&
                        e.push({
                            ssrc: t.ssrc,
                            quality: t.quality
                        });
                null === (a = this._goLiveQualityManager) || void 0 === a || a.setUserID(t), null === (s = this._goLiveQualityManager) || void 0 === s || s.updateAudioAndVideoStreamInfo(n, e);
            }
            null == i ||
                i.forEach((e) => {
                    100 === e.quality && this.emit(Y.z.VideoSourceQualityChanged, this.guildId, this.channelId, t, e.maxResolution, e.maxFrameRate, this.context);
                });
        }
    }
    _handleControlPing(e) {
        !M.Z.supports(en.AN.NATIVE_PING) && this._handlePing(e);
    }
    _handlePing(e) {
        if (void 0 !== e) {
            for (
                this._pings.push({
                    time: Date.now(),
                    value: e
                });
                this._pings.length >= 200;

            )
                this._pings.shift();
            e > 500 && this._pingBadCount++, this.emit(Y.z.Ping, this._pings, this.quality);
        }
    }
    _handlePingTimeout(e, t) {
        this._pingTimeouts.push(e);
        let n = this._pingTimeouts.length;
        n >= 3 && this._pingTimeouts[n - 1] === this._pingTimeouts[n - 2] + 1 && this._pingTimeouts[n - 2] === this._pingTimeouts[n - 3] + 1 && this._handlePing(t);
    }
    _handleOutboundLossRate(e) {
        (this._outboundLossRate = e), this.emit(Y.z.OutboundLossRate, e);
    }
    _handleSoundshareTrace(e) {
        this._soundshareStats.traceEvent(void 0, e);
    }
    _getAnalyticsProperties() {
        let e = w.Z.getChannel(this.channelId),
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
        var t, n;
        e.forEach((e) => {
            var t;
            this._userIds.add(e), null === (t = this._connection) || void 0 === t || t.createUser(e, 0);
        }),
            this.emit(Y.z.ClientConnect, e),
            null === (t = this._goLiveQualityManager) || void 0 === t || t.updateCallUserIds(this._userIds),
            null === (n = this._localMediaSinkWantsManager) || void 0 === n || n.updateCallUserIds(this._userIds);
    }
    _handleClientDisconnect(e) {
        var t, n, r, i, a;
        let s = this._videoQuality;
        if (null != s && this.context === en.Yn.DEFAULT) {
            let t = s.getInboundStats(e),
                n = null !== (i = null == t ? void 0 : t.num_frames) && void 0 !== i ? i : 0;
            null != t &&
                n > 0 &&
                (B.default.track(et.rMx.VIDEO_STREAM_ENDED, {
                    ...this._getAnalyticsProperties(),
                    media_session_id: this.getMediaSessionId(),
                    sender_user_id: e,
                    reason: 'User disconnected',
                    participant_type: 'receiver',
                    guild_region: U.Z.getRegion(this.hostname),
                    hostname: this.hostname,
                    hardware_enabled: M.Z.getHardwareEncoding(),
                    ...t,
                    ...s.getNetworkStats(),
                    ...s.getCodecUsageStats('receiver', e)
                }),
                s.destroyUser(e),
                null === (a = this._videoHealthManager) || void 0 === a || a.deleteUser(e));
        }
        let o = this._connection;
        null != o && o.destroyUser(e), null === (t = this._localMediaSinkWantsManager) || void 0 === t || t.destroyUser(e), this._userIds.delete(e), this.emit(Y.z.ClientDisconnect, e), null === (n = this._goLiveQualityManager) || void 0 === n || n.updateCallUserIds(this._userIds), null === (r = this._localMediaSinkWantsManager) || void 0 === r || r.updateCallUserIds(this._userIds);
    }
    _handleCodecs(e, t) {
        let n = this._connection;
        null != n && null != this.protocol ? n.setCodecs(null != e && '' !== e ? e : en.ad.OPUS, null != t && '' !== t ? t : en.ad.H264, this.context) : this.logger.warn('Cannot set codecs on connection with protocol:', this.protocol);
    }
    _handleSDP(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setSDP(e) : this.logger.warn('Cannot set SDP on connection with protocol:', this.protocol);
    }
    async _handleMediaSessionId(e) {
        (this._mediaSessionId = e), this.logger.info('Setting media-session-id: '.concat(e, ' for rtc-connection-id: ').concat(this.getRTCConnectionId()));
        let t = await (0, b.Z)();
        B.default.track(et.rMx.MEDIA_SESSION_JOINED, {
            ...this._getAnalyticsProperties(),
            media_session_id: this.getMediaSessionId(),
            parent_media_session_id: this.parentMediaSessionId,
            raw_thermal_state: t
        }),
            m.Z.dispatch({
                type: 'MEDIA_SESSION_JOINED',
                mediaSessionId: this.getMediaSessionId(),
                context: this.context
            });
    }
    _handleMediaSinkWants(e) {
        let t = this._connection;
        this.logger.info('Remote media sink wants: '.concat(JSON.stringify(e))), (this._remoteVideoSinkWants = e), null == t || t.setRemoteVideoSinkWants(e);
    }
    _handleCodeVersion(e, t) {
        (this.voiceVersion = e), (this.rtcWorkerVersion = t);
    }
    _handleKeyframeInterval(e) {
        let t = this._connection;
        null != t && null != this.protocol ? t.setKeyframeInterval(e) : this.logger.warn('Cannot set keyframe interval on connection with protocol:', this.protocol);
    }
    _handleBandwidthEstimationExperiment(e) {
        this._bandwidthEstimationExperiment = e;
        let t = A.Z.getMediaEngineExperiments(e);
        if (null !== t && 0 !== t.length) {
            var n;
            null === (n = this._connection) || void 0 === n || n.setBandwidthEstimationExperiments(t);
        }
    }
    _trackSecureFrameTransition(e, t) {
        B.default.track(et.rMx.SECURE_FRAMES_TRANSITION, {
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
        e > 0
            ? (this.logger.info('DAVE protocol init with protocol version: '.concat(e)), null === (t = this._connection) || void 0 === t || t.prepareSecureFramesEpoch('1', e, this.trueChannelId), this._sendMLSKeyPackage())
            : null === (n = this._connection) ||
              void 0 === n ||
              n.prepareSecureFramesTransition(0, e, () => {
                  var t;
                  e > 0 && this._trackSecureFrameTransition(0, e), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(0);
              });
    }
    _handleSecureFramesRosterChange(e) {
        let t = [];
        Object.entries(e).forEach((e) => {
            let [n, r] = e;
            if ((t.push(n), null == r || 0 === r.byteLength)) this._secureFramesRosterMap.delete(n);
            else this._secureFramesRosterMap.set(n, r);
        }),
            this.emit(Y.z.RosterMapUpdate, t);
    }
    _handleSecureFramesPrepareTransition(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol transition: '.concat(e, ', protocol version: ').concat(t)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.prepareSecureFramesTransition(e, t, () => {
                    this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, t);
                });
    }
    _handleSecureFramesPrepareEpoch(e, t) {
        var n;
        this.logger.info('Preparing DAVE protocol epoch: '.concat(e, ', protocol version: ').concat(t));
        let r = e.toString();
        null === (n = this._connection) || void 0 === n || n.prepareSecureFramesEpoch(r, t, this.trueChannelId), '1' === r && this._sendMLSKeyPackage();
    }
    _sendMLSKeyPackage() {
        var e;
        null === (e = this._connection) ||
            void 0 === e ||
            e.getMLSKeyPackage((e) => {
                var t;
                this.logger.info('Got MLS key package, sending to RTC server'), null === (t = this._socket) || void 0 === t || t.sendMLSKeyPackage(e);
            });
    }
    _maybeSendSecureFramesTransitionReady(e) {
        if (0 !== e) {
            var t;
            this.logger.info('Sending DAVE protocol ready for transition ID '.concat(e)), null === (t = this._socket) || void 0 === t || t.secureFramesReadyForTransition(e);
        }
    }
    _handleSecureFramesExecuteTransition(e) {
        var t;
        this.logger.info('Executing DAVE protocol transition: '.concat(e)), null === (t = this._connection) || void 0 === t || t.executeSecureFramesTransition(e);
    }
    _handleMLSExternalSenderPackage(e) {
        var t;
        this.logger.info('Received MLS external sender package'), null === (t = this._connection) || void 0 === t || t.updateMLSExternalSender(e);
    }
    _handleMLSProposals(e, t) {
        var n;
        this.logger.info('Received MLS proposals'),
            null === (n = this._connection) ||
                void 0 === n ||
                n.processMLSProposals(t, (t) => {
                    this.logger.info('Sending MLS commit welcome message'), e.sendMLSCommitWelcome(t);
                });
    }
    _handleMLSPrepareCommitTransition(e, t) {
        var n;
        this.logger.info('Received MLS commit for transition ID '.concat(e)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.prepareMLSCommitTransition(e, t, (t, n, r) => {
                    t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n), this._recoverMLSFailures()) : (this.logger.warn('Failed to process MLS commit for transition ID '.concat(e)), this._flagMLSInvalidCommitWelcome(e), this._handleSecureFramesInit(n));
                });
    }
    _handleMLSWelcome(e, t) {
        var n;
        this.logger.info('Received MLS welcome for transition ID '.concat(e)),
            null === (n = this._connection) ||
                void 0 === n ||
                n.processMLSWelcome(e, t, (t, n, r) => {
                    t ? (this._handleSecureFramesRosterChange(r), this._maybeSendSecureFramesTransitionReady(e), this._trackSecureFrameTransition(e, n), this._recoverMLSFailures()) : (this._flagMLSInvalidCommitWelcome(e), this._sendMLSKeyPackage());
                });
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r;
        null === (r = this._connection) || void 0 === r || r.getMLSPairwiseFingerprint(e, t, n);
    }
    _flagMLSInvalidCommitWelcome(e) {
        var t;
        this.logger.info('Flagging invalid MLS commit/welcome for transition ID '.concat(e)), null === (t = this._socket) || void 0 === t || t.flagMLSInvalidCommitWelcome(e);
    }
    _handleMLSFailure(e, t) {
        let n = ''.concat(e, ':').concat(t),
            r = n in this._mlsFailures ? this._mlsFailures[n][2] : 0;
        (this._mlsFailures[n] = [e, t, r + 1]), this._alertMLSFailureDebouced(e, t);
    }
    _recoverMLSFailures() {
        for (let [e, [t, n, r]] of Object.entries(this._mlsFailures)) {
            let i = e in this._mlsFailuresRecovered ? this._mlsFailuresRecovered[e][2] : 0;
            this._mlsFailuresRecovered[e] = [t, n, i + r];
        }
    }
    _trackMLSFailures() {
        let e = [
                ...Object.values(this._mlsFailuresRecovered).map((e) => {
                    let [t, n, r] = e;
                    return [t, n, r, !0];
                }),
                ...Object.values(this._mlsFailures).map((e) => {
                    let [t, n, r] = e;
                    return [t, n, r, !1];
                })
            ],
            t = this.getMediaSessionId();
        for (let [n, r, i, a] of e)
            B.default.track(et.rMx.MLS_FAILURES, {
                ...this._getAnalyticsProperties(),
                media_session_id: t,
                parent_media_session_id: this.parentMediaSessionId,
                failure_source: n,
                failure_reason: r,
                failure_count: i,
                failure_was_recovered: a
            });
    }
    _alertMLSFailure(e, t) {
        let n = G.default.getCurrentUser();
        ((null == n ? void 0 : n.isStaff()) || (null == n ? void 0 : n.isStaffPersonal())) &&
            g.Z.show({
                title: 'MLS Error in '.concat(e),
                body: 'Error: '.concat(t, '! Please upload your logs in A/V settings and ask everyone in the call to do the same, and ping us in #av-e2ee in Core Tech!')
            });
    }
    _getExtraConnectionOptions() {
        return {};
    }
    shouldReportPeriodicStats(e) {
        if (e.length > 10) return !1;
        let t = this.getMediaSessionId();
        if (null == t) return !1;
        let n = u().v3(t);
        return !!(n % 100 <= 5) || !1;
    }
    getInputDeviceName() {
        var e;
        let t = M.Z.getInputDeviceId();
        return null === (e = M.Z.getInputDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getOutputDeviceName() {
        var e;
        let t = M.Z.getOutputDeviceId();
        return null === (e = M.Z.getOutputDevices()[t]) || void 0 === e ? void 0 : e.name;
    }
    getGoLiveSource() {
        return M.Z.getGoLiveSource();
    }
    constructor({ userId: e, sessionId: t, guildId: n, channelId: r, context: i = en.Yn.DEFAULT, rtcServerId: a, parentMediaSessionId: s }) {
        var l, u;
        super(),
            er(this, 'context', void 0),
            er(this, 'userId', void 0),
            er(this, 'sessionId', void 0),
            er(this, 'guildId', void 0),
            er(this, 'parentMediaSessionId', void 0),
            er(this, 'hostname', void 0),
            er(this, 'state', void 0),
            er(this, '_videoQuality', void 0),
            er(this, '_soundshareStats', void 0),
            er(this, 'logger', void 0),
            er(this, 'rtcServerId', void 0),
            er(this, '_channelId', void 0),
            er(this, 'channelIds', void 0),
            er(this, '_endpoint', void 0),
            er(this, 'port', void 0),
            er(this, 'token', void 0),
            er(this, 'protocol', void 0),
            er(this, 'voiceVersion', void 0),
            er(this, 'rtcWorkerVersion', void 0),
            er(this, '_socket', void 0),
            er(this, '_backoff', void 0),
            er(this, '_destroyed', void 0),
            er(this, '_pings', void 0),
            er(this, '_pingBadCount', void 0),
            er(this, '_pingTimeouts', void 0),
            er(this, '_mediaSessionId', void 0),
            er(this, '_voiceQuality', void 0),
            er(this, '_voiceQualityPeriodicStatsInterval', void 0),
            er(this, '_voiceQualityPeriodicStatsSequenceId', void 0),
            er(this, '_noiseCancellationError', void 0),
            er(this, '_voiceDuration', void 0),
            er(this, '_videoHealthManager', void 0),
            er(this, '_sentVideo', void 0),
            er(this, '_outboundLossRate', void 0),
            er(this, '_recordingEnabled', void 0),
            er(this, '_selectedExperiments', void 0),
            er(this, '_localMediaSinkWantsManager', void 0),
            er(this, '_goLiveQualityManager', void 0),
            er(this, '_remoteVideoSinkWants', void 0),
            er(this, '_connection', void 0),
            er(this, '_createdTime', void 0),
            er(this, '_connectStartTime', void 0),
            er(this, '_connectCompletedTime', void 0),
            er(this, '_rtcConnectionId', void 0),
            er(this, '_connectCount', void 0),
            er(this, '_connected', void 0),
            er(this, '_connecting', void 0),
            er(this, '_encountered_socket_failure', void 0),
            er(this, '_inputDetected', void 0),
            er(this, '_encryptionMode', void 0),
            er(this, 'stateHistory', void 0),
            er(this, '_supportedBandwidthEstimationExperiments', void 0),
            er(this, '_bandwidthEstimationExperiment', void 0),
            er(this, '_secureFramesState', void 0),
            er(this, '_userIds', void 0),
            er(this, '_secureFramesRosterMap', new Map()),
            er(this, '_mlsFailuresRecovered', void 0),
            er(this, '_mlsFailures', void 0),
            er(this, '_lastSentSpeakingStatus', void 0),
            er(this, '_lastSentSSRC', void 0),
            er(this, 'powerMonitorListener', void 0),
            er(this, 'reconnect', () => {
                let e = this._socket;
                null != e && (this._connected && (this._connectStartTime = (0, p.zO)()), !this._connecting && (this._trackVoiceConnectionConnecting(), (this._connecting = !0), (this._encountered_socket_failure = !1)), this._connectCount++, e.close(), e.connect());
            }),
            er(this, '_alertMLSFailureDebouced', o()(this._alertMLSFailure, 100)),
            er(this, '_handleNetworkOnline', () => {
                this.expeditedHeartbeat(5000, 'network detected online.');
            }),
            er(this, '_handleNetworkOffline', () => {
                this.expeditedHeartbeat(15000, 'network detected offline.', !1);
            }),
            er(this, '_handleNoRoute', () => {
                var e;
                null === (e = this._socket) || void 0 === e || e.noRoute();
            }),
            er(this, '_handlePowerResume', () => {
                this.expeditedHeartbeat(5000, 'power monitor resumed');
            }),
            er(this, '_handleVoiceQualityPeriodicsStats', () => {
                if (null != this._voiceQuality) {
                    let e = this._voiceQuality.getPeriodicStats();
                    if (this.shouldReportPeriodicStats(e))
                        for (let t of e)
                            B.default.track(et.rMx.VOICE_QUALITY_PERIODIC_STATS, {
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
            }),
            er(this, '_trackVoiceConnectionConnecting', () => {
                let e = w.Z.getChannel(this.channelId),
                    t = null != e ? e.type : null;
                B.default.track(et.rMx.VOICE_CONNECTION_CONNECTING, {
                    guild_id: this.guildId,
                    channel_id: this.channelId,
                    rtc_connection_id: this.getRTCConnectionId(),
                    hostname: this.hostname,
                    connect_count: this._connectCount,
                    context: this.context,
                    channel_type: t
                });
            }),
            er(this, 'incomingVideoEnabledChanged', (e) => {
                var t, n;
                null === (t = this._goLiveQualityManager) || void 0 === t || t.onIncomingVideoEnabled(e), null === (n = this.getOrCreateVideoQuality()) || void 0 === n || n.setOcclusionIncomingVideoEnabled(e);
            }),
            er(this, 'windowVisibilityChanged', (e) => {
                var t;
                null === (t = this.getOrCreateVideoQuality()) || void 0 === t || t.setWindowOcclusionState(!e);
            }),
            (this.context = i),
            (this.logger = new S.Z('RTCConnection('.concat(null !== (l = null != a ? a : n) && void 0 !== l ? l : r, ', ').concat(this.context, ')'))),
            (this.userId = e),
            (this.sessionId = t),
            (this.guildId = n),
            (this._channelId = r),
            (this.channelIds = new Set([r])),
            (this.rtcServerId = a),
            (this.parentMediaSessionId = s),
            (this._endpoint = null),
            (this.hostname = null),
            (this.port = null),
            (this.token = null),
            (this.voiceVersion = null),
            (this.rtcWorkerVersion = null),
            (this.state = et.hes.AWAITING_ENDPOINT),
            (this.stateHistory = new W.K(this.state)),
            (this._socket = null),
            (this._backoff = new f.Z(1000, 10000)),
            (this._destroyed = !1),
            (this._pings = []),
            (this._pingBadCount = 0),
            (this._pingTimeouts = []),
            (this._mediaSessionId = null),
            (this._voiceQuality = null),
            (this._voiceQualityPeriodicStatsInterval = null),
            (this._voiceQualityPeriodicStatsSequenceId = 0),
            (this._noiseCancellationError = 0),
            (this._voiceDuration = null),
            (this._videoQuality = null),
            (this._videoHealthManager = null),
            (this._sentVideo = !1),
            (this._outboundLossRate = null),
            (this._createdTime = (0, p.zO)()),
            (this._connectStartTime = 0),
            (this._connectCompletedTime = 0),
            (this._rtcConnectionId = (0, d.Z)()),
            (this._connectCount = 0),
            (this._connected = !1),
            (this._connecting = !1),
            (this._encountered_socket_failure = !1),
            (this._inputDetected = !1),
            (this._selectedExperiments = []),
            (this._secureFramesState = null),
            (this._userIds = new Set([e])),
            this._secureFramesRosterMap.clear(),
            (this._mlsFailuresRecovered = {}),
            (this._mlsFailures = {}),
            (this._lastSentSpeakingStatus = 0),
            (this._lastSentSSRC = void 0);
        let c = M.Z.supports(en.AN.FIRST_FRAME_CALLBACK) && M.Z.supports(en.AN.REMOTE_USER_MULTI_STREAM);
        if (i === en.Yn.DEFAULT) {
            let t = (null === (u = w.Z.getChannel(this.channelId)) || void 0 === u ? void 0 : u.type) === et.d4z.GUILD_STAGE_VOICE;
            (this._localMediaSinkWantsManager = new z.ZP(e, t, c)),
                this._localMediaSinkWantsManager.on(z.ai.Update, (e) => {
                    if (this.state === et.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
                    }
                }),
                this._localMediaSinkWantsManager.on(z.ai.UserSSRCUpdate, (e, t, n) => {
                    var r;
                    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
                });
        } else
            i === en.Yn.STREAM &&
                ((this._goLiveQualityManager = new y.Z(!1)),
                this._goLiveQualityManager.on(y.y.RequestedSSRCsUpdate, (e, t, n) => {
                    var r;
                    null === (r = this._connection) || void 0 === r || r.createUser(e, t, n);
                }),
                this._goLiveQualityManager.on(y.y.RequestedStreamsUpdate, (e) => {
                    if (this.state === et.hes.RTC_CONNECTED && null != this._socket) {
                        var t;
                        this.logger.info('Go Live Media sink wants: '.concat(JSON.stringify(e))), this._socket.mediaSinkWants(e), null === (t = this._connection) || void 0 === t || t.setLocalVideoSinkWants(e);
                    }
                }));
        (this._remoteVideoSinkWants = z.Yy),
            ee.w.on(ee.e.IncomingVideoEnabledChanged, this.incomingVideoEnabledChanged),
            ee.w.on(ee.e.WindowVisibilityChanged, this.windowVisibilityChanged),
            k.ZP.shouldRecordNextConnection() ? ((this._recordingEnabled = !0), v.TC(!1)) : (this._recordingEnabled = !1),
            (this._soundshareStats = new q.Z()),
            F.Z.addOnlineCallback(this._handleNetworkOnline),
            F.Z.addOfflineCallback(this._handleNetworkOffline),
            (0, V.isDesktop)() && (this.powerMonitorListener = j.Z.remotePowerMonitor.on('resume', this._handlePowerResume)),
            (this._supportedBandwidthEstimationExperiments = []),
            (this._bandwidthEstimationExperiment = null),
            M.Z.getMediaEngine().getSupportedBandwidthEstimationExperiments((e) => {
                this._supportedBandwidthEstimationExperiments = e;
            });
    }
}
