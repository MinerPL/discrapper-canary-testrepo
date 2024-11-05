n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(312677),
    n(47120),
    n(411104),
    n(653041);
var r = n(595182),
    i = n.n(r),
    a = n(117806),
    s = n.n(a),
    o = n(565925),
    l = n.n(o),
    u = n(971793),
    c = n.n(u),
    d = n(420994),
    f = n(259443),
    _ = n(839548),
    h = n(198274),
    p = n(701597),
    m = n(46973),
    g = n(829839),
    E = n(916057),
    v = n(992774),
    I = n(158466),
    S = n(650886),
    T = n(65154),
    b = n(149396);
function y(e, t, n) {
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
let A = 0;
function N(e) {
    return null != e && 0 !== e ? e + 1 : 0;
}
class C extends _.Z {
    static create(e, t, n) {
        let r = new C(e, t, !0);
        return r.initialize(n), r;
    }
    static createReplay(e, t) {
        let n = new C(e, '0', !0),
            r = (0, v.zS)();
        n.initializeStreamParameters([
            {
                type: T.Tr.VIDEO,
                rid: '100',
                ssrc: 0,
                rtxSsrc: 0,
                quality: 100,
                active: !1
            }
        ]);
        let i = r.createReplayConnection(
            'default',
            (t, i) => {
                let a = null != r.getCodecCapabilities ? r.getCodecCapabilities : r.getSupportedVideoCodecs;
                n.on(m.Sh.Stats, n.handleStats),
                    n.conn.setOnVideoCallback(n.handleVideo),
                    a((t) => {
                        let r = (0, g.DY)(n.experimentFlags);
                        (n.codecs = [
                            {
                                type: 'audio',
                                name: b.ad.OPUS,
                                priority: 1,
                                payloadType: 120
                            },
                            ...(0, g.yQ)(t, r).map((e, t) => {
                                let n = 101 + 2 * t;
                                return {
                                    type: 'video',
                                    name: e.name,
                                    priority: t + 1,
                                    payloadType: n,
                                    rtxPayloadType: n + 1,
                                    encode: e.encode,
                                    decode: e.decode
                                };
                            })
                        ]),
                            n.setCodecs(b.ad.OPUS, b.ad.H264, e),
                            n.conn.startReplay();
                    });
            },
            t
        );
        return null == i ? null : ((n.conn = i), n);
    }
    initialize(e) {
        let t;
        this.logger.info('Creating connection to '.concat(e.address, ':').concat(e.port, ' with audio ssrc: ').concat(e.ssrc)),
            (this.audioSSRC = e.ssrc),
            (this.streamUserId = e.streamUserId),
            this.initializeStreamParameters(e.streamParameters),
            (e.streamParameters = [
                {
                    type: T.Tr.AUDIO,
                    ssrc: this.audioSSRC,
                    rid: '',
                    maxBitrate: 64000,
                    soundshare: this.context === b.Yn.STREAM
                },
                ...this.videoStreamParameters
            ]);
        let n = (0, v.zS)(),
            r = null != n.getCodecCapabilities ? n.getCodecCapabilities : n.getSupportedVideoCodecs;
        if (null != n.createOwnStreamConnectionWithOptions) s = this.context === b.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnectionWithOptions : n.createVoiceConnectionWithOptions;
        else if (null != n.createOwnStreamConnection) {
            var i,
                a,
                s,
                o = this.context === b.Yn.STREAM && this.streamUserId === this.userId ? n.createOwnStreamConnection : n.createVoiceConnection;
            s = (e, t, n) => o(t.ssrc, this.userId, t.address, t.port, n, t.experiments, t.streamParameters);
        } else s = (e, t, r) => new n.VoiceConnection(t.ssrc, e, t.address, t.port, r, t.experiments, t.streamParameters);
        null ===
            (i = (t = this.conn =
                s(this.userId, e, (i, a) => {
                    if (this.destroyed) return;
                    if (null != i && '' !== i) {
                        this.setConnectionState(b.$j.NO_ROUTE), this.emit(m.Sh.Error, i);
                        return;
                    }
                    if (null == a) throw Error('Invalid transport info');
                    let { protocol: s, address: o, port: l } = a;
                    this.logger.info('Connected with local address '.concat(o, ':').concat(l, ' and protocol: ').concat(s)),
                        r((r) => {
                            this.logger.info('Available codecs: '.concat(JSON.stringify(r)));
                            let i = (0, g.DY)(this.experimentFlags);
                            this.logger.info('Experimental codecs: '.concat(JSON.stringify(i))),
                                (this.codecs = [
                                    {
                                        type: 'audio',
                                        name: b.ad.OPUS,
                                        priority: 1,
                                        payloadType: 120
                                    },
                                    ...(0, g.yQ)(r, i).map((e, t) => {
                                        let n = 101 + 2 * t;
                                        return {
                                            type: 'video',
                                            name: e.name,
                                            priority: t + 1,
                                            payloadType: n,
                                            rtxPayloadType: n + 1,
                                            encode: e.encode,
                                            decode: e.decode
                                        };
                                    })
                                ]),
                                this.logger.info('Audio codecs: '.concat(this.codecs.filter((e) => 'audio' === e.type).map((e) => e.name))),
                                this.logger.info('Video codecs: '.concat(this.codecs.filter((e) => 'video' === e.type).map((e) => e.name + '[encode: ' + e.encode + ', decode: ' + e.decode + ']'))),
                                t.getEncryptionModes((r) => {
                                    var i, a, u, c, d, f, _, h, p, g, E, v, I;
                                    this.logger.info('Encryption modes: '.concat(r)),
                                        t.setTransportOptions(this.getConnectionTransportOptions()),
                                        t.setSelfMute(this.selfMute || this.context === b.Yn.STREAM),
                                        t.setSelfDeafen(this.selfDeaf),
                                        t.setOnSpeakingCallback(this.handleSpeakingNative),
                                        null === (i = t.setOnNativeMuteToggleCallback) || void 0 === i || i.call(t, this.handleNativeMuteToggled),
                                        null === (a = t.setOnNativeMuteChangedCallback) || void 0 === a || a.call(t, this.handleNativeMuteChanged),
                                        null === (u = t.setOnSpeakingWhileMutedCallback) || void 0 === u || u.call(t, this.handleSpeakingWhileMuted),
                                        null === (c = t.setPingInterval) || void 0 === c || c.call(t, b.$B),
                                        t.setPingCallback(this.handlePing),
                                        null === (d = t.setPingTimeoutCallback) || void 0 === d || d.call(t, this.handlePingTimeout),
                                        null === (f = t.setOnVideoEncoderFallbackCallback) || void 0 === f || f.call(t, this.handleVideoEncoderFallback),
                                        null === (_ = t.setOnRtcpMessageCallback) || void 0 === _ || _.call(t, this.handleRTCPMessage),
                                        n.setTransportOptions({
                                            builtInEchoCancellation: !0,
                                            echoCancellation: this.echoCancellation,
                                            noiseSuppression: this.noiseSuppression,
                                            automaticGainControl: this.automaticGainControl,
                                            noiseCancellation: this.noiseCancellation
                                        }),
                                        n.setNoInputThreshold(-100),
                                        n.setNoInputCallback(this.handleNoInput),
                                        this.videoSupported && (t.setOnVideoCallback(this.handleVideo), null === (p = t.setOnFirstFrameCallback) || void 0 === p || p.call(t, this.handleFirstFrame), null === (g = t.setOnDesktopSourceEnded) || void 0 === g || g.call(t, this.handleDesktopSourceEnded), null === (E = t.setOnSoundshare) || void 0 === E || E.call(t, this.handleSoundshare), null === (v = t.setOnSoundshareEnded) || void 0 === v || v.call(t, this.handleSoundshareEnded), null === (I = t.setOnSoundshareFailed) || void 0 === I || I.call(t, this.handleSoundshareFailed)),
                                        null === (h = t.setOnMLSFailureCallback) || void 0 === h || h.call(t, this.handleMLSFailure),
                                        this.setConnectionState(b.$j.CONNECTED),
                                        this.emit(m.Sh.Connected, s, {
                                            address: o,
                                            port: l,
                                            mode: this.chooseEncryptionMode(e.modes, r),
                                            codecs: this.codecs
                                        }),
                                        this.on(m.Sh.Stats, this.handleStats);
                                    let S = this.getUserOptions();
                                    for (let e of (S.forEach((e) => {
                                        var t, n;
                                        return this.logger.info(
                                            'Creating user: '
                                                .concat(e.id, ' with audio SSRC: ')
                                                .concat(e.ssrc, ' and video SSRCs: ')
                                                .concat(null !== (n = null === (t = e.videoSsrcs) || void 0 === t ? void 0 : t.join(',')) && void 0 !== n ? n : 0)
                                        );
                                    }),
                                    t.mergeUsers(S),
                                    this.emit(m.Sh.RemoteStreamsReady, S.length),
                                    Object.keys(this.localSpeakingFlags)))
                                        e !== this.userId && this.setSpeakingFlags(e, this.localSpeakingFlags[e]);
                                });
                        });
                })).setSecureFramesStateUpdateCallback) ||
            void 0 === i ||
            i.call(t, (e) => {
                this.logger.info('DAVE protocol state update: '.concat(JSON.stringify(e))), this.emit(m.Sh.SecureFramesUpdate, e);
            }),
            null === (a = t.setDesktopSourceStatusCallback) ||
                void 0 === a ||
                a.call(t, (e) => {
                    if ('videohook_start' === e.type) this.emit(m.Sh.VideoHookStart);
                    else if ('videohook_stop' === e.type) this.emit(m.Sh.VideoHookStop);
                    else if ('videohook_initialize' === e.type) this.emit(m.Sh.VideoHookInitialize, e.backend, e.format, e.framebufferFormat, e.sampleCount, e.success, e.reinitialization);
                    else if ('screenshare_finish' === e.type) {
                        var t;
                        this.emit(m.Sh.ScreenshareFinish, e.screenshareFrames, e.videohookFrames, e.hybridDxgiFrames, e.hybridGdiFrames, e.hybridVideohookFrames, e.hybridGraphicsCaptureFrames, e.hybridCaptureMethodSwitches, e.hybridGdiBitBltFrames, e.hybridGdiPrintWindowFrames, e.quartzFrames, null !== (t = e.desktopCapturerType) && void 0 !== t ? t : e.desktop_capturer_type, e.screens, e.windows, e.activity, e.goLiveCameraFrames, e.screenCaptureKitFrames);
                    } else 'video_state' === e.type ? this.emit(m.Sh.VideoState, e.state) : e.type.startsWith('soundshare_') && this.emit(m.Sh.SoundshareTrace, e);
                }),
            this.on('newListener', this.handleNewListenerNative);
    }
    destroy() {
        this.conn.destroy(),
            Object.keys(this.localSpeakingFlags)
                .filter((e) => e !== this.userId)
                .forEach((e) => this.emit(m.Sh.Speaking, e, b.Dg.NONE, this.remoteAudioSSRCs[e])),
            this.setConnectionState(b.$j.DISCONNECTED),
            super.destroy();
    }
    setCodecs(e, t, n) {
        this.conn.setTransportOptions(this.getCodecOptions(e, t, n)), this.videoEncoderFallbackPending && (this.videoEncoderFallbackPending = !1);
    }
    getStats() {
        return this.connectionState === b.$j.DISCONNECTED
            ? Promise.resolve(null)
            : (0, d.timeout)(
                  new Promise((e) => {
                      null != this.conn.getFilteredStats ? this.conn.getFilteredStats(T.QP.ALL, (t) => e((0, I.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : null != this.conn.getStats ? this.conn.getStats((t) => e((0, I.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants))) : (0, v.zS)().getStats((t) => e((0, I.Z)(this.mediaEngineConnectionId, t, this.remoteVideoSinkWants, this.localVideoSinkWants)));
                  }),
                  h.T
              ).catch((e) => {
                  if (!(e instanceof d.TimeoutError)) throw e;
              });
    }
    createUser(e, t, n) {
        let r = this.remoteAudioSSRCs[e],
            i = this.remoteVideoSSRCs[e];
        if (null != r && 0 === t) {
            this.logger.info('Ignoring attempt to recreate user '.concat(e, ' with 0 audio SSRC'));
            return;
        }
        (i = void 0 !== i ? [...i].sort() : []), (n = void 0 === n ? (null != i ? i : []) : [...n].sort());
        let a = r !== t,
            s = !l()(i, n);
        if (((this.remoteAudioSSRCs[e] = t), (this.remoteVideoSSRCs[e] = null != n ? n : []), this.userId !== e && (a || s))) {
            let r = void 0 !== n && n.length > 0 ? n[0] : 0,
                i = {
                    id: e,
                    ssrc: t,
                    videoSsrc: r,
                    videoSsrcs: n,
                    rtxSsrc: N(r),
                    mute: this.getLocalMute(e),
                    volume: this.getLocalVolume(e)
                };
            if (this.connectionState === b.$j.CONNECTED) {
                var o;
                this.logger.info(
                    'Creating user: '
                        .concat(e, ' with audio SSRC: ')
                        .concat(t, ' and video SSRCs: ')
                        .concat(null !== (o = null == n ? void 0 : n.join(',')) && void 0 !== o ? o : 0)
                ),
                    this.conn.mergeUsers([i]);
            }
            let a = this.localPans[e];
            null != a && this.setLocalPan(e, a.left, a.right);
            let s = this.localSpeakingFlags[e];
            null != s && s !== b.Dg.NONE && this.setSpeakingFlags(e, s);
        }
    }
    destroyUser(e) {
        null != this.remoteAudioSSRCs[e] && (this.conn.destroyUser(e), delete this.remoteAudioSSRCs[e], delete this.remoteVideoSSRCs[e]);
    }
    setSelfMute(e) {
        (this.selfMute = e), this.conn.setSelfMute(e), this.emit(m.Sh.Mute, e);
    }
    setSelfDeaf(e) {
        (this.selfDeaf = e), this.conn.setSelfDeafen(e);
    }
    setSoundshareSource(e, t) {
        if ((this.soundshareId === e && this.soundshareSentSpeakingEvent) || this.context !== b.Yn.STREAM) return;
        (this.soundshareId = e), (this.soundshareSentSpeakingEvent = !1);
        let n = e;
        null === n && (n = 0),
            this.conn.setTransportOptions({
                soundsharePid: n,
                soundshareEventDriven: !0,
                soundshareLoopback: t
            });
    }
    setLocalMute(e, t) {
        (this.localMutes[e] = t), this.conn.setLocalMute(e, t), this.emit(m.Sh.LocalMute, e, t);
    }
    fastUdpReconnect() {
        null != this.conn.fastUdpReconnect && ((this.numFastUdpReconnects += 1), this.conn.fastUdpReconnect());
    }
    getNumFastUdpReconnects() {
        return null != this.conn.fastUdpReconnect ? this.numFastUdpReconnects : null;
    }
    wasRemoteDisconnected() {
        var e, t;
        null === (e = (t = this.conn).wasRemoteDisconnected) || void 0 === e || e.call(t);
    }
    setLocalVideoDisabled(e, t) {
        (this.disabledLocalVideos[e] = t), this.emit(m.Sh.LocalVideoDisabled, e, t);
    }
    setMinimumJitterBufferLevel(e) {
        this.minimumJitterBufferLevel = e;
    }
    setPostponeDecodeLevel(e) {
        this.postponeDecodeLevel = e;
    }
    setClipRecordUser(e, t, n) {
        if (!this.destroyed) {
            var r, i;
            null === (r = (i = this.conn).setClipRecordUser) || void 0 === r || r.call(i, e, (this.context === b.Yn.STREAM ? 'application' : 'user').concat('audio' === t ? 'Audio' : 'Video'), n);
        }
    }
    setClipsKeyFrameInterval(e) {
        this.context === b.Yn.STREAM &&
            ((this.clipsKeyFrameInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            }));
    }
    setViewerSideClip(e) {
        this.context === b.Yn.STREAM && this.conn.setTransportOptions({ enableViewerSideClip: e });
    }
    setRemoteAudioHistory(e) {
        this.conn.setTransportOptions({ remoteAudioHistoryMs: e });
    }
    setQualityDecoupling(e) {
        this.context === b.Yn.STREAM && this.conn.setTransportOptions({ enableQualityDecoupling: e });
    }
    getLocalVolume(e) {
        var t;
        let n = this.localVolumes[e];
        return null == n && (n = this.context === b.Yn.DEFAULT ? b.Qx : b.Yh), (null != (t = n) ? t : b.Qx) / b.Qx;
    }
    setLocalVolume(e, t) {
        this.localVolumes[e] = t;
        try {
            this.conn.setLocalVolume(e, this.getLocalVolume(e));
        } catch {
            this.logger.warn('Failed to set volume for user: '.concat(e, ': ').concat(t));
        }
    }
    setLocalPan(e, t, n) {
        (this.localPans[e] = {
            left: t,
            right: n
        }),
            this.conn.setLocalPan(e, t, n);
    }
    isAttenuating() {
        return this.attenuationFactor < 1;
    }
    setAttenuation(e, t, n) {
        (this.attenuationFactor = (100 - e) / 100), (this.attenuateWhileSpeakingSelf = t), (this.attenuateWhileSpeakingOthers = n), this.conn.setTransportOptions(this.getAttenuationOptions());
    }
    setCanHavePriority(e, t) {
        var n, r;
        null === (n = (r = this.conn).setRemoteUserCanHavePriority) || void 0 === n || n.call(r, e, t);
    }
    setBitRate(e) {
        this.setVoiceBitRate(e);
    }
    setVoiceBitRate(e) {
        if (this.voiceBitrate === e) return;
        this.voiceBitrate = e;
        let t = this.voiceBitrate;
        this.soundshareActive && (t = Math.max(b.ed, t)), this.conn.setTransportOptions({ encodingVoiceBitRate: t });
    }
    setCameraBitRate(e, t, n) {
        null != n || null != t
            ? this.videoQualityManager.setQualityOverwrite({
                  bitrateMin: null != n && n > 0 ? n : t,
                  bitrateMax: t
              })
            : this.videoQualityManager.setQualityOverwrite({}),
            !this.hasDesktopSource() &&
                this.conn.setTransportOptions({
                    encodingVideoBitRate: e,
                    encodingVideoMinBitRate: n,
                    encodingVideoMaxBitRate: t
                });
    }
    setEchoCancellation(e) {
        (this.echoCancellation = e), (0, v.zS)().setTransportOptions({ echoCancellation: this.echoCancellation });
    }
    setNoiseSuppression(e) {
        (this.noiseSuppression = e), (0, v.zS)().setTransportOptions({ noiseSuppression: this.noiseSuppression });
    }
    setAutomaticGainControl(e) {
        (this.automaticGainControl = e), (0, v.zS)().setTransportOptions({ automaticGainControl: this.automaticGainControl });
    }
    setNoiseCancellation(e) {
        (this.noiseCancellation = e), (0, v.zS)().setTransportOptions({ noiseCancellation: this.noiseCancellation });
    }
    setExperimentalEncoders(e) {
        (this.experimentalEncoders = e), this.conn.setTransportOptions({ experimentalEncoders: this.experimentalEncoders });
    }
    setHardwareH264(e) {
        (this.hardwareH264 = e), this.conn.setTransportOptions({ hardwareH264: this.hardwareH264 });
    }
    setSoftwareH264(e) {
        (this.softwareH264 = e), this.conn.setTransportOptions({ softwareH264: this.softwareH264 });
    }
    setQoS(e) {
        (this.qos = e), this.conn.setTransportOptions({ qos: this.qos });
    }
    setInputMode(e, t) {
        switch (((this.inputMode = e), e)) {
            case b.pM.PUSH_TO_TALK:
                this.pttReleaseDelay = t.pttReleaseDelay;
                break;
            case b.pM.VOICE_ACTIVITY:
                (this.vadThreshold = t.vadThreshold), (this.vadAutoThreshold = t.vadAutoThreshold), (this.vadUseKrisp = t.vadUseKrisp), (this.vadLeading = t.vadLeading), (this.vadTrailing = t.vadTrailing);
                break;
            default:
                throw Error('Unknown Input Mode: '.concat(e));
        }
        this.conn.setTransportOptions({
            inputMode: b.GO[this.inputMode],
            inputModeOptions: this.createInputModeOptions()
        });
    }
    setSilenceThreshold(e) {
        (0, v.zS)().setNoInputThreshold(e);
    }
    setForceAudioInput(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t ? (this.forceAudioPriority = e) : (this.forceAudioNormal = e), this.conn.setPTTActive(this.forceAudioPriority || this.forceAudioNormal, this.forceAudioPriority);
    }
    setSpeakingFlags(e, t) {
        null != this.conn.setRemoteUserSpeakingStatus ? this.conn.setRemoteUserSpeakingStatus(e, t) : null != this.conn.setRemoteUserSpeaking && this.conn.setRemoteUserSpeaking(e, (t & b.Dg.VOICE) === b.Dg.VOICE), this.handleSpeakingFlags(e, t);
    }
    clearAllSpeaking() {}
    setEncryption(e, t) {
        this.logger.info('Selected encryption mode: '.concat(e)),
            this.conn.setTransportOptions({
                encryptionSettings: {
                    mode: e,
                    secretKey: t
                }
            });
    }
    setReconnectInterval(e) {
        (this.reconnectInterval = e), this.conn.setTransportOptions({ reconnectInterval: this.reconnectInterval });
    }
    setKeyframeInterval(e) {
        (this.keyframeInterval = e),
            this.conn.setTransportOptions({
                keyframeInterval: this.getKeyFrameInterval(),
                alwaysSendVideo: this.keyframeInterval > 0
            });
    }
    setVideoQualityMeasurement(e) {
        (this.videoQualityMeasurement = e), this.conn.setTransportOptions({ videoQualityMeasurement: this.videoQualityMeasurement });
    }
    setVideoEncoderExperiments(e) {
        (this.videoEncoderExperiments = e), this.conn.setTransportOptions({ videoEncoderExperiments: this.videoEncoderExperiments });
    }
    setVideoBroadcast(e) {
        if (this.selfVideo !== e) (this.selfVideo = e), this.applyVideoTransportOptions();
    }
    setGoLiveSource(e) {
        let { resolution: t, frameRate: n } = e.quality,
            r = t <= 480 ? (t / 3) * 4 : (t / 9) * 16,
            i = null;
        if ((null != e.desktopDescription ? (i = e.desktopDescription.id) : null != e.cameraDescription && (i = ''.concat(e.cameraDescription.videoDeviceGuid, ':').concat(e.cameraDescription.audioDeviceGuid)), this.goLiveSourceIdentifier === i)) {
            if ((this.setDesktopEncodingOptions(r, t, n), null != e.desktopDescription)) {
                let { soundshareId: t, useLoopback: n } = e.desktopDescription;
                this.soundshareId !== t && this.setSoundshareSource(t, n);
            }
            return;
        }
        if (((this.goLiveSourceIdentifier = i), null != this.conn.setDesktopSource)) {
            if (null != e.desktopDescription) {
                let { id: t, soundshareId: n, useLoopback: r, useVideoHook: i, useGraphicsCapture: a, useQuartzCapturer: s, allowScreenCaptureKit: o, videoHookStaleFrameTimeoutMs: l, graphicsCaptureStaleFrameTimeoutMs: u, hdrCaptureMode: c } = e.desktopDescription;
                this.setSoundshareSource(n, r);
                let [d, f] = null != t ? t.split(':') : ['', ''];
                null != t
                    ? this.logger.info(
                          'capturing desktop (type: '
                              .concat(d, ', handle: ')
                              .concat(f, ', use-video-hook: ')
                              .concat(i.toString(), ', use-graphics-capture: ')
                              .concat(null == a ? void 0 : a.toString(), ').')
                      )
                    : this.logger.info('capturing desktop (type: <stop>).'),
                    null != this.conn.setDesktopSourceWithOptions
                        ? null != t
                            ? this.conn.setDesktopSourceWithOptions({
                                  type: d,
                                  sourceId: f,
                                  useVideoHook: i,
                                  useGraphicsCapture: a,
                                  useQuartzCapturer: s,
                                  allowScreenCaptureKit: o,
                                  videoHookStaleFrameTimeoutMs: l,
                                  graphicsCaptureStaleFrameTimeoutMs: u,
                                  hdrCaptureMode: c
                              })
                            : this.conn.clearDesktopSource()
                        : this.conn.setDesktopSource('wumpus-'.concat(f), i, d);
            } else if (null != e.cameraDescription) {
                let { videoDeviceGuid: t, audioDeviceGuid: n } = e.cameraDescription;
                this.conn.setGoLiveDevices({
                    videoInputDeviceId: t,
                    audioInputDeviceId: n
                });
            }
            this.setDesktopEncodingOptions(r, t, n);
        }
    }
    clearGoLiveDevices() {
        null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), null != this.conn.clearGoLiveDevices && this.conn.clearGoLiveDevices();
    }
    clearDesktopSource() {
        null != this.goLiveSourceIdentifier && this.setDesktopEncodingOptions(1280, 720, 30), (this.goLiveSourceIdentifier = null), null != this.conn.clearDesktopSource ? this.conn.clearDesktopSource() : this.conn.setDesktopSource('', !1, '');
    }
    setDesktopSourceStatusCallback(e) {
        var t, n;
        null === (t = (n = this.conn).setDesktopSourceStatusCallback) || void 0 === t || t.call(n, e);
    }
    hasDesktopSource() {
        return null != this.goLiveSourceIdentifier;
    }
    setDesktopEncodingOptions(e, t, n) {
        if (this.destroyed) return;
        let r = (0 === t && n >= 10) || t > 720 || n > 30 ? T.yf : T.YE,
            i = {
                width: e,
                height: t,
                framerate: n
            },
            a = this.videoQualityManager.getQuality();
        if (!p.SF.equals(i, a.capture) || a.bitrateMax !== r) {
            this.videoQualityManager.setGoliveQuality({
                capture: i,
                encode: i,
                bitrateMax: r
            });
            let a = this.videoStreamParameters.findIndex((e) => 100 === e.quality);
            -1 === a && (a = 0),
                this.videoStreamParameters.length > 0 &&
                    ((this.videoStreamParameters[a].maxResolution = {
                        type: 0 === e && 0 === t ? b.uA.SOURCE : b.uA.FIXED,
                        width: e,
                        height: t
                    }),
                    (this.videoStreamParameters[a].maxFrameRate = n),
                    (this.videoStreamParameters[a].maxBitrate = r)),
                this.emit(m.Sh.Video, this.userId, null, this.audioSSRC, this.videoStreamParameters[a].ssrc, N(this.videoStreamParameters[a].ssrc), this.videoStreamParameters),
                this.conn.setTransportOptions(this.applyQualityConstraints().constraints);
        }
    }
    setSDP(e) {}
    setRemoteVideoSinkWants(e) {
        (this.remoteVideoSinkWants = e), this.updateVideoQuality(T.XR);
    }
    setLocalVideoSinkWants(e) {
        let t = this.localVideoSinkWants;
        for (let [s, o] of Object.entries(this.remoteVideoSSRCs)) {
            var n, r, i, a;
            let l = 0,
                u = 0;
            for (let n of o) (l += null == t ? void 0 : t[n]), (u += null == e ? void 0 : e[n]);
            0 === l && 0 !== u && (null === (n = (r = this.conn).setDisableLocalVideo) || void 0 === n || n.call(r, s, !1)), 0 !== l && 0 === u && (null === (i = (a = this.conn).setDisableLocalVideo) || void 0 === i || i.call(a, s, !0));
        }
        this.localVideoSinkWants = e;
    }
    startSamplesLocalPlayback(e, t, n, r) {
        if (t.numberOfChannels > 2) {
            r(1, 'Too many channels');
            return;
        }
        for (var i = [], a = 0; a < t.numberOfChannels; a++) {
            var s = t.getChannelData(a);
            i.push(s);
        }
        this.conn.startSamplesLocalPlayback(
            e,
            {
                sampleRate: t.sampleRate,
                volume: n
            },
            i,
            r
        );
    }
    stopAllSamplesLocalPlayback() {
        this.conn.stopAllSamplesLocalPlayback();
    }
    stopSamplesLocalPlayback(e) {
        this.conn.stopSamplesLocalPlayback(e);
    }
    setBandwidthEstimationExperiments(e) {
        this.conn.setTransportOptions({ bandwidthEstimationExperiments: e });
    }
    updateVideoQualityCore(e, t) {
        this.videoSupported && !this.destroyed && this.conn.setTransportOptions(e);
    }
    setStreamParameters(e) {
        return new Promise((t, n) => {
            for (let t of this.videoStreamParameters) {
                let r = e.findIndex((e) => e.rid === t.rid);
                if (-1 === r) {
                    n(Error('Invalid rid'));
                    return;
                }
                let i = [];
                !l()(this.videoStreamParameters[r], e[r]) && ((this.videoStreamParameters[r] = { ...e[r] }), i.push({ ...e[r] })), this.conn.setTransportOptions({ streamParameters: i });
            }
            t();
        });
    }
    applyVideoTransportOptions() {
        if (!this.videoSupported) return;
        let e = !1;
        if (this.hasDesktopSource() && this.videoStreamParameters.length > 0) {
            var t;
            e = (null === (t = this.videoStreamParameters[0].maxResolution) || void 0 === t ? void 0 : t.type) === b.uA.SOURCE;
        }
        this.conn.setTransportOptions(this.applyQualityConstraints({ encodingVideoDegradationPreference: this.hasDesktopSource() ? (e ? this.sourceDesktopDegradationPreference : this.desktopDegradationPreference) : this.videoDegradationPreference }).constraints), this.conn.setVideoBroadcast(this.selfVideo);
    }
    chooseEncryptionMode(e, t) {
        for (let n of t) for (let t of e) if (n === t) return n;
        return 'xsalsa20_poly1305';
    }
    getUserOptions() {
        return Object.keys(this.remoteAudioSSRCs).map((e) => {
            let t = void 0 !== this.remoteVideoSSRCs[e] && this.remoteVideoSSRCs[e].length > 0 ? this.remoteVideoSSRCs[e][0] : 0;
            return {
                id: e,
                ssrc: this.remoteAudioSSRCs[e],
                videoSsrc: t,
                videoSsrcs: this.remoteVideoSSRCs[e],
                rtxSsrc: N(t),
                mute: this.getLocalMute(e),
                volume: this.getLocalVolume(e)
            };
        });
    }
    createInputModeOptions() {
        switch (this.inputMode) {
            case b.pM.VOICE_ACTIVITY:
                return {
                    vadThreshold: this.vadThreshold,
                    vadAutoThreshold: this.vadAutoThreshold ? E.a.VERY_AGGRESSIVE : E.a.DISABLED,
                    vadUseKrisp: this.vadUseKrisp,
                    vadLeading: this.vadLeading,
                    vadTrailing: this.vadTrailing
                };
            case b.pM.PUSH_TO_TALK:
                return { pttReleaseDelay: this.pttReleaseDelay };
            default:
                throw Error('Unknown Input Mode: '.concat(this.inputMode));
        }
    }
    getAttenuationOptions() {
        return {
            attenuation: this.isAttenuating(),
            attenuationFactor: this.attenuationFactor,
            attenuateWhileSpeakingSelf: this.attenuateWhileSpeakingSelf,
            attenuateWhileSpeakingOthers: this.attenuateWhileSpeakingOthers
        };
    }
    getCodecParams(e, t) {
        return e !== b.ad.H264
            ? {}
            : t
              ? {
                    'level-asymmetry-allowed': '1',
                    'packetization-mode': '1',
                    'profile-level-id': '42e034',
                    'hardware-h264': this.hardwareH264 && this.useElectronVideo && S.Z.useDirectVideo ? '1' : '0'
                }
              : {
                    'level-asymmetry-allowed': '1',
                    'packetization-mode': '1',
                    'profile-level-id': 'android' === (0, v.zS)().platform ? '42e01f' : '4d0033',
                    'hardware-h264': this.hardwareH264 && this.useElectronVideo && S.Z.useDirectVideo ? '1' : '0',
                    'software-h264': this.softwareH264 ? '1' : '0'
                };
    }
    getCodecOptions(e, t, n) {
        var r, i, a, s;
        let o;
        let l = {
                type: null !== (r = null == (o = this.codecs.find((t) => t.name === e)) ? void 0 : o.payloadType) && void 0 !== r ? r : 0,
                name: e,
                freq: 48000,
                pacsize: 960,
                channels: 1,
                rate: 64000
            },
            u = [
                {
                    type: null !== (i = null == o ? void 0 : o.payloadType) && void 0 !== i ? i : 0,
                    name: e,
                    freq: 48000,
                    channels: 2,
                    params: { stereo: '1' }
                }
            ];
        n === b.Yn.STREAM && (l.channels = 2);
        let c = [],
            d = {
                name: '',
                type: 0,
                rtxType: 0,
                params: {}
            };
        for (o of this.codecs) {
            if (o.name === e) continue;
            let n = {
                name: (0, g.AQ)(o.name),
                type: null !== (a = null == o ? void 0 : o.payloadType) && void 0 !== a ? a : 0,
                rtxType: null !== (s = null == o ? void 0 : o.rtxPayloadType) && void 0 !== s ? s : 0,
                params: this.getCodecParams(o.name, !0)
            };
            this.experimentFlags.has(T.V8.RESET_DECODER_ON_ERRORS) && (n.params['reset-on-errors'] = '1'),
                this.experimentFlags.has(T.V8.SOFTWARE_FALLBACK_ON_ERRORS) && (n.params['fallback-after-errors'] = '3'),
                this.experimentFlags.has(T.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS) && (n.params['fallback-on-consecutive-errors'] = '1'),
                this.experimentFlags.has(T.V8.SIGNAL_AV1_HARDWARE_DECODE) && (n.params['hardware-av1-decode'] = '1'),
                c.push(n),
                o.name === t &&
                    ((d = {
                        ...n,
                        params: this.getCodecParams(o.name, !1)
                    }),
                    this.experimentFlags.has(T.V8.VIDEOTOOLBOX_RATE_CONTROL) && (d.params['fixed-rate-presentation-timestamps'] = '1'));
        }
        return {
            videoEncoder: d,
            videoDecoders: c,
            audioEncoder: l,
            audioDecoders: u
        };
    }
    getKeyFrameInterval() {
        return this.keyframeInterval > 0 && this.clipsKeyFrameInterval > 0 ? Math.min(this.keyframeInterval, this.clipsKeyFrameInterval) : Math.max(this.keyframeInterval, this.clipsKeyFrameInterval);
    }
    getConnectionTransportOptions() {
        let e = {
            selfMute: this.selfMute,
            inputMode: b.GO[this.inputMode],
            inputModeOptions: this.createInputModeOptions(),
            minimumJitterBufferLevel: this.minimumJitterBufferLevel,
            postponeDecodeLevel: this.postponeDecodeLevel,
            ...this.getAttenuationOptions(),
            fec: !0,
            packetLossRate: 0.3,
            qos: this.qos,
            prioritySpeakerDucking: b.jg,
            encodingVoiceBitRate: this.voiceBitrate,
            callBitRate: b.$A,
            callMinBitRate: b.mN,
            callMaxBitRate: b.mC,
            encodingVideoDegradationPreference: this.videoDegradationPreference,
            experimentalEncoders: this.experimentalEncoders,
            hardwareH264: this.hardwareH264,
            softwareH264: this.softwareH264,
            reconnectInterval: this.reconnectInterval
        };
        return (0, v.eJ)(b.eR.VIDEO_EFFECTS) && this.context === b.Yn.STREAM && (e.enableVideoEffects = !0), this.experimentFlags.has(T.V8.MUTE_BEFORE_PROCESSING) && (e.muteBeforeProcessing = !0), this.experimentFlags.has(T.V8.PTT_BEFORE_PROCESSING) && (e.pttBeforeProcessing = !0), this.experimentFlags.has(T.V8.SKIP_ENCODE) && (e.skipEncode = !0), e;
    }
    setStream(e) {
        throw Error('Method not implemented.');
    }
    getUserIdBySsrc(e) {}
    prepareSecureFramesTransition(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).prepareSecureFramesTransition) || void 0 === r || r.call(i, e, t, n);
    }
    prepareSecureFramesEpoch(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).prepareSecureFramesEpoch) || void 0 === r || r.call(i, e, t, n);
    }
    executeSecureFramesTransition(e) {
        var t, n;
        null === (t = (n = this.conn).executeSecureFramesTransition) || void 0 === t || t.call(n, e);
    }
    getMLSKeyPackage(e) {
        var t, n;
        null === (t = (n = this.conn).getMLSKeyPackage) || void 0 === t || t.call(n, e);
    }
    updateMLSExternalSender(e) {
        var t, n;
        null === (t = (n = this.conn).updateMLSExternalSender) || void 0 === t || t.call(n, e);
    }
    processMLSProposals(e, t) {
        var n, r;
        null === (n = (r = this.conn).processMLSProposals) || void 0 === n || n.call(r, e, t);
    }
    prepareMLSCommitTransition(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).prepareMLSCommitTransition) || void 0 === r || r.call(i, e, t, n);
    }
    processMLSWelcome(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).processMLSWelcome) || void 0 === r || r.call(i, e, t, n);
    }
    getMLSPairwiseFingerprint(e, t, n) {
        var r, i;
        null === (r = (i = this.conn).getMLSPairwiseFingerprint) || void 0 === r || r.call(i, e, t, n);
    }
    presentDesktopSourcePicker(e) {
        var t, n;
        null === (t = (n = this.conn).presentDesktopSourcePicker) || void 0 === t || t.call(n, e);
    }
    constructor(e, t, n) {
        super(e, t),
            y(this, 'mediaEngineConnectionId', 'Native-'.concat(A++)),
            y(this, 'goLiveSourceIdentifier', void 0),
            y(this, 'selfMute', !1),
            y(this, 'selfVideo', !1),
            y(this, 'forceAudioNormal', !1),
            y(this, 'forceAudioPriority', !1),
            y(this, 'codecs', []),
            y(this, 'videoEncoderFallbackPending', !1),
            y(this, 'desktopDegradationPreference', (0, v.zS)().DegradationPreference.MAINTAIN_FRAMERATE),
            y(this, 'sourceDesktopDegradationPreference', (0, v.zS)().DegradationPreference.DISABLED),
            y(this, 'videoDegradationPreference', (0, v.zS)().DegradationPreference.BALANCED),
            y(this, 'localPans', {}),
            y(this, 'remoteAudioSSRCs', {}),
            y(this, 'remoteVideoSSRCs', {}),
            y(this, 'inputMode', b.pM.VOICE_ACTIVITY),
            y(this, 'vadThreshold', -40),
            y(this, 'vadAutoThreshold', !0),
            y(this, 'vadUseKrisp', !0),
            y(this, 'vadLeading', 5),
            y(this, 'vadTrailing', 25),
            y(this, 'pttReleaseDelay', 20),
            y(this, 'soundshareActive', !1),
            y(this, 'soundshareId', null),
            y(this, 'soundshareSentSpeakingEvent', !1),
            y(this, 'echoCancellation', !0),
            y(this, 'noiseSuppression', !0),
            y(this, 'automaticGainControl', !0),
            y(this, 'noiseCancellation', !1),
            y(this, 'experimentalEncoders', !1),
            y(this, 'hardwareH264', !0),
            y(this, 'softwareH264', !0),
            y(this, 'attenuationFactor', 0.5),
            y(this, 'attenuateWhileSpeakingSelf', !1),
            y(this, 'attenuateWhileSpeakingOthers', !0),
            y(this, 'qos', !0),
            y(this, 'conn', void 0),
            y(this, 'minimumJitterBufferLevel', 0),
            y(this, 'postponeDecodeLevel', 100),
            y(this, 'reconnectInterval', 60000),
            y(this, 'keyframeInterval', 0),
            y(this, 'clipsKeyFrameInterval', 0),
            y(this, 'videoQualityMeasurement', ''),
            y(this, 'videoEncoderExperiments', ''),
            y(this, 'numFastUdpReconnects', 0),
            y(this, 'logger', void 0),
            y(this, 'handleSpeakingNative', (e, t) => {
                let n = b.Dg.NONE;
                (n = 'boolean' == typeof t ? (t ? b.Dg.VOICE : b.Dg.NONE) : t), this.handleSpeakingFlags(e, n);
            }),
            y(this, 'handleNativeMuteToggled', () => {
                this.emit(m.Sh.ToggleMuteFromNative);
            }),
            y(this, 'handleNativeMuteChanged', (e) => {
                this.emit(m.Sh.NativeMuteChanged, e);
            }),
            y(this, 'handleSpeakingFlags', (e, t) => {
                this.localSpeakingFlags[e] = t;
                let n = e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e];
                this.emit(m.Sh.Speaking, e, t, n), (t & b.Dg.SOUNDSHARE) != 0 && !1 === this.soundshareSentSpeakingEvent && (this.emit(m.Sh.SoundshareSpeaking), (this.soundshareSentSpeakingEvent = !0));
            }),
            y(this, 'handleSpeakingWhileMuted', () => {
                this.emit(m.Sh.SpeakingWhileMuted);
            }),
            y(this, 'handlePing', (e, t, n) => {
                this.emit(m.Sh.Ping, e);
            }),
            y(this, 'handlePingTimeout', (e, t, n, r) => {
                this.emit(m.Sh.PingTimeout, n, r > 0 ? r : 4000);
            }),
            y(this, 'handleVideoEncoderFallback', (e) => {
                if (!this.videoEncoderFallbackPending) this.logger.info('Falling back from current video encoder: '.concat(e)), (this.codecs = this.codecs.map((t) => ((e === t.name || ('AV1' === t.name && 'AV1X' === e)) && (t.encode = !1), t)).filter((e) => !('video' === e.type && !1 === e.encode && !1 === e.decode))), this.emit(m.Sh.VideoEncoderFallback, this.codecs), (this.videoEncoderFallbackPending = !0);
            }),
            y(this, 'handleRTCPMessage', (e, t) => {
                if (e === T.ym.REMB && this.context === b.Yn.STREAM) {
                    let e = JSON.parse(t);
                    e.ssrcs.forEach((t) => {
                        var n, r, a, s;
                        let o = this.videoStreamParameters.find((e) => e.ssrc === t);
                        if (void 0 !== o && (null !== (n = o.quality) && void 0 !== n ? n : 0) < 100 && 'video' === o.type) {
                            let n = Math.floor(0.9 * e.bitrate);
                            n = i()(n, null !== (r = o.minBitrate) && void 0 !== r ? r : 0, null !== (a = o.maxBitrate) && void 0 !== a ? a : n);
                            let l = null !== (s = o.targetBitrate) && void 0 !== s ? s : 0;
                            (Math.abs(n - l) / ((n + l) / 2) > 0.1 || void 0 === o.targetBitrate) && (this.logger.info('Updating target bitrate for SSRC '.concat(t, ' from ').concat(o.targetBitrate, ' to ').concat(n)), this.videoQualityManager.setGoLiveSimulcastLQTargetBitrate(n), this.updateVideoQuality());
                        }
                    });
                }
            }),
            y(this, 'handleVideo', (e, t, n, r) => {
                let i = s()(this.videoStreamParameters);
                e === this.userId
                    ? null != r && Array.isArray(r) && r.length > 0
                        ? r.forEach((e) => {
                              i.forEach((t, n) => {
                                  t.rid === e.rid &&
                                      (i[n] = {
                                          ...t,
                                          ssrc: e.ssrc,
                                          rtxSsrc: e.rtxSsrc,
                                          active: e.active
                                      });
                              });
                          })
                        : t > 0
                          ? ((i[0].active = !0), (i[0].ssrc = t), (i[0].rtxSsrc = N(t)))
                          : (i[0].active = !1)
                    : t > 0 && (void 0 !== this.remoteVideoSSRCs[e] ? !this.remoteVideoSSRCs[e].includes(t) && (this.remoteVideoSSRCs[e] = [...this.remoteVideoSSRCs[e], t]) : (this.remoteVideoSSRCs[e] = [t])),
                    (this.videoStreamParameters = i),
                    this.emit(m.Sh.Video, e, null != n && '' !== n ? n : null, e === this.userId ? this.audioSSRC : this.remoteAudioSSRCs[e], t, N(t), this.videoStreamParameters);
            }),
            y(this, 'handleFirstFrame', (e, t, n) => {
                this.emit(m.Sh.FirstFrame, e, t, n);
            }),
            y(this, 'handleNoInput', (e) => {
                this.emit(m.Sh.Silence, !e);
            }),
            y(this, 'handleDesktopSourceEnded', () => {
                this.emit(m.Sh.DesktopSourceEnd);
            }),
            y(this, 'handleSoundshare', (e) => {
                e && ((this.soundshareActive = !0), this.conn.setTransportOptions({ encodingVoiceBitRate: Math.max(b.ed, this.voiceBitrate) }), this.emit(m.Sh.SoundshareAttached));
            }),
            y(this, 'handleSoundshareFailed', (e, t, n) => {
                this.emit(m.Sh.SoundshareFailed, {
                    failureCode: e,
                    failureReason: t,
                    willRetry: n
                });
            }),
            y(this, 'handleSoundshareEnded', () => {
                (this.soundshareActive = !1), !this.destroyed && this.conn.setTransportOptions({ encodingVoiceBitRate: this.voiceBitrate });
            }),
            y(this, 'handleNewListenerNative', (e) => {
                if (e === m.Sh.ConnectionStateChange) this.emit(e, this.connectionState);
            }),
            y(this, 'handleStats', (e) => {
                if (this.connectionState === b.$j.DISCONNECTED) {
                    this.off(m.Sh.Stats, this.handleStats);
                    return;
                }
                if (null != e) {
                    if (null != this.stats) {
                        let t = c()(
                                e.rtp.outbound,
                                (e, t) => {
                                    var n, r;
                                    return (e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0), (e.sent += null !== (r = t.packetsSent) && void 0 !== r ? r : 0), e;
                                },
                                {
                                    lost: 0,
                                    sent: 0
                                }
                            ),
                            n = c()(
                                this.stats.rtp.outbound,
                                (e, t) => {
                                    var n, r;
                                    return (e.lost += null !== (n = t.packetsLost) && void 0 !== n ? n : 0), (e.sent += null !== (r = t.packetsSent) && void 0 !== r ? r : 0), e;
                                },
                                {
                                    lost: 0,
                                    sent: 0
                                }
                            ),
                            r = t.sent - n.sent,
                            a = t.lost - n.lost;
                        if (0 === r) this.emit(m.Sh.OutboundLossRate, 0);
                        else if (r > 0 && a >= 0) {
                            let e = i()(a / (r + a), 0, 1);
                            this.emit(m.Sh.OutboundLossRate, 100 * e);
                        }
                        let s = e.rtp.outbound.filter((e) => 'audio' === e.type)[0],
                            o = this.stats.rtp.outbound.filter((e) => 'audio' === e.type)[0];
                        if (null != s && null != o && null != s.framesCaptured && null != o.framesCaptured) {
                            let e = s.framesCaptured - o.framesCaptured,
                                t = null != s.noiseCancellerFrames ? (null != o.noiseCancellerFrames ? s.noiseCancellerFrames - o.noiseCancellerFrames : 0) : e;
                            if (this.noiseCancellation && t > 50 && null != s.noiseCancellerProcessTime && null != o.noiseCancellerProcessTime) {
                                let e = s.noiseCancellerProcessTime - o.noiseCancellerProcessTime;
                                e / t > 8 ? this.emit(m.Sh.NoiseCancellationError, b.H3.CPU_OVERUSE) : 0 === e && this.emit(m.Sh.NoiseCancellationError, b.H3.FAILED);
                            }
                            this.inputMode === b.pM.VOICE_ACTIVITY && this.vadAutoThreshold && this.vadUseKrisp && e > 50 && null != s.voiceActivityDetectorProcessTime && null != o.voiceActivityDetectorProcessTime && (s.voiceActivityDetectorProcessTime - o.voiceActivityDetectorProcessTime) / e > 4 && this.emit(m.Sh.VoiceActivityDetectorError, b.H3.VAD_CPU_OVERUSE);
                        }
                    }
                    this.stats = e;
                }
            }),
            y(this, 'handleMLSFailure', (e, t) => {
                this.emit(m.Sh.MLSFailure, e, t);
            }),
            (this.logger = new f.Y('Connection('.concat(e, ')'))),
            (this.videoSupported = n);
    }
}
