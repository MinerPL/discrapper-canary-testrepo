n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120),
    n(411104);
var r = n(264344),
    i = n.n(r),
    a = n(259443),
    s = n(47770),
    o = n(46973),
    l = n(734298),
    u = n(997545),
    c = n(501950),
    d = n(992774),
    f = n(656795),
    _ = n(650886),
    h = n(65154),
    p = n(149396);
function m(e, t, n) {
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
function g(e) {
    return (null != e ? e : p.Qx) / p.Qx;
}
function E(e, t, n) {
    return t + ((n - t) * e) / 100;
}
class v extends s.Z {
    destroy() {
        this.eachConnection((e) => e.destroy()), this.emit(o.aB.Destroy), this.removeAllListeners();
    }
    interact() {}
    static supported() {
        return (0, d.Zh)();
    }
    supported() {
        return !0;
    }
    supports(e) {
        var t, n;
        switch (e) {
            case p.AN.LEGACY_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(p.eR.VOICE_LEGACY_SUBSYSTEM);
            case p.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(p.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
            case p.AN.AUTOMATIC_AUDIO_SUBSYSTEM:
                return (0, d.eJ)(p.eR.VOICE_AUTOMATIC_SUBSYSTEM);
            case p.AN.DEBUG_LOGGING:
                return (0, d.eJ)(p.eR.DEBUG_LOGGING);
            case p.AN.SOUNDSHARE:
                return (0, d.eJ)(p.eR.SOUNDSHARE);
            case p.AN.SCREEN_SOUNDSHARE:
                return (0, d.eJ)(p.eR.SCREEN_SOUNDSHARE);
            case p.AN.ELEVATED_HOOK:
                return (0, d.eJ)(p.eR.ELEVATED_HOOK);
            case p.AN.LOOPBACK:
                return (0, d.eJ)(p.eR.LOOPBACK);
            case p.AN.WUMPUS_VIDEO:
                return (0, d.eJ)(p.eR.WUMPUS_VIDEO);
            case p.AN.HYBRID_VIDEO:
                return (0, d.eJ)(p.eR.HYBRID_VIDEO);
            case p.AN.ATTENUATION:
            case p.AN.VIDEO_HOOK:
                return (null === i() || void 0 === i() ? void 0 : null === (t = i().os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(i().os.family);
            case p.AN.EXPERIMENTAL_SOUNDSHARE:
                return (0, d.eJ)(p.eR.SOUNDSHARE_LOOPBACK);
            case p.AN.OPEN_H264:
                return (null === i() || void 0 === i() ? void 0 : null === (n = i().os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(i().os.family);
            case p.AN.EXPERIMENTAL_ENCODERS:
                return (0, d.eJ)(p.eR.EXPERIMENTAL_ENCODERS);
            case p.AN.REMOTE_LOCUS_NETWORK_CONTROL:
                return (0, d.eJ)(p.eR.REMOTE_LOCUS_NETWORK_CONTROL);
            case p.AN.SCREEN_PREVIEWS:
                return (0, d.eJ)(p.eR.SCREEN_PREVIEWS);
            case p.AN.CLIPS:
                return (0, d.eJ)(p.eR.CLIPS);
            case p.AN.WINDOW_PREVIEWS:
                return (0, d.eJ)(p.eR.WINDOW_PREVIEWS);
            case p.AN.AUDIO_DEBUG_STATE:
                return (0, d.eJ)(p.eR.AUDIO_DEBUG_STATE);
            case p.AN.CONNECTION_REPLAY:
                return (0, d.eJ)(p.eR.CONNECTION_REPLAY);
            case p.AN.SIMULCAST:
                return (0, d.eJ)(p.eR.SIMULCAST) && (0, d.eJ)(p.eR.SIMULCAST_BUGFIX);
            case p.AN.RTC_REGION_RANKING:
                return (0, d.eJ)(p.eR.RTC_REGION_RANKING);
            case p.AN.DIRECT_VIDEO:
                return (0, d.eJ)(p.eR.DIRECT_VIDEO) && null != window.createDiscordStream;
            case p.AN.ELECTRON_VIDEO:
                return (0, d.eJ)(p.eR.ELECTRON_VIDEO);
            case p.AN.MEDIAPIPE:
                return (0, d.eJ)(p.eR.MEDIAPIPE);
            case p.AN.FIXED_KEYFRAME_INTERVAL:
                return (0, d.eJ)(p.eR.FIXED_KEYFRAME_INTERVAL);
            case p.AN.FIRST_FRAME_CALLBACK:
                return (0, d.eJ)(p.eR.FIRST_FRAME_CALLBACK);
            case p.AN.REMOTE_USER_MULTI_STREAM:
                return (0, d.eJ)(p.eR.REMOTE_USER_MULTI_STREAM);
            case p.AN.IMAGE_QUALITY_MEASUREMENT:
                return (0, d.eJ)(p.eR.IMAGE_QUALITY_MEASUREMENT);
            case p.AN.AMD_EXPERIMENTAL_RATE_CONTROL:
                return (0, d.eJ)(p.eR.AMD_EXPERIMENTAL_RATE_CONTROL);
            case p.AN.GO_LIVE_HARDWARE:
                return (0, d.eJ)(p.eR.GO_LIVE_HARDWARE);
            case p.AN.SCREEN_CAPTURE_KIT:
                return (0, d.eJ)(p.eR.SCREEN_CAPTURE_KIT);
            case p.AN.CAPTURE_TIMEOUT_EXPERIMENTS:
                return (0, d.eJ)(p.eR.CAPTURE_TIMEOUT_EXPERIMENTS);
            case p.AN.NATIVE_SCREENSHARE_PICKER:
                return (0, d.eJ)(p.eR.NATIVE_SCREENSHARE_PICKER);
            case p.AN.MLS_PAIRWISE_FINGERPRINTS:
                return (0, d.eJ)(p.eR.MLS_PAIRWISE_FINGERPRINTS);
            case p.AN.DIAGNOSTICS:
            case p.AN.NATIVE_PING:
            case p.AN.AUTOMATIC_VAD:
            case p.AN.AUDIO_INPUT_DEVICE:
            case p.AN.AUDIO_OUTPUT_DEVICE:
            case p.AN.QOS:
            case p.AN.VOICE_PROCESSING:
            case p.AN.AUTO_ENABLE:
            case p.AN.VIDEO:
            case p.AN.DESKTOP_CAPTURE:
            case p.AN.DESKTOP_CAPTURE_FORMAT:
            case p.AN.DESKTOP_CAPTURE_APPLICATIONS:
            case p.AN.VOICE_PANNING:
            case p.AN.AEC_DUMP:
            case p.AN.DISABLE_VIDEO:
            case p.AN.SAMPLE_PLAYBACK:
            case p.AN.NOISE_SUPPRESSION:
            case p.AN.AUTOMATIC_GAIN_CONTROL:
                return !0;
            default:
                return !1;
        }
    }
    connect(e, t, n) {
        !(0, d.eJ)(p.eR.EXPERIMENT_CONFIG) && (n.experiments = void 0);
        let r = u.Z.create(e, t, n);
        return (
            r.on(o.Sh.Destroy, (e) => {
                this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(p.uJ.NORMAL);
            }),
            r.on(o.Sh.Connected, () => {
                r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r));
            }),
            r.on(o.Sh.Silence, (e) => {
                this.emit(o.aB.Silence, e);
            }),
            this.connections.add(r),
            (0, d.p8)(p.uJ.HIGH),
            this.emit(o.aB.Connection, r),
            r
        );
    }
    shouldConnectionBroadcastVideo(e) {
        return (e.context === p.Yn.DEFAULT && this.videoInputDeviceId !== p.Av) || e.hasDesktopSource();
    }
    eachConnection(e, t) {
        this.connections.forEach((n) => {
            (null == t || n.context === t) && e(n);
        });
    }
    enable() {
        return Promise.resolve();
    }
    setInputVolume(e) {
        (0, d.zS)().setInputVolume(g(e));
    }
    setOutputVolume(e) {
        (0, d.zS)().setOutputVolume(g(e));
    }
    getAudioInputDevices() {
        return (0, c.Hg)();
    }
    setAudioInputDevice(e) {
        (0, d.eJ)(p.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, d.zS)().setInputDevice(e)
            : (0, c.Hg)().then((t) => {
                  var n;
                  let r = null !== (n = t.find((t) => t.id === e)) && void 0 !== n ? n : t[0];
                  null != r && (0, d.zS)().setInputDevice(r.index);
              });
    }
    getAudioOutputDevices() {
        return (0, c.HS)();
    }
    setAudioOutputDevice(e) {
        (0, d.eJ)(p.eR.SET_AUDIO_DEVICE_BY_ID)
            ? (0, d.zS)().setOutputDevice(e)
            : (0, c.HS)().then((t) => {
                  var n;
                  let r = null !== (n = t.find((t) => t.id === e)) && void 0 !== n ? n : t[0];
                  null != r && (0, d.zS)().setOutputDevice(r.index);
              });
    }
    getVideoInputDevices() {
        return (0, c.l0)();
    }
    async setVideoInputDevice(e) {
        let t = (await this.getVideoInputDevices()).find((t) => t.id === e),
            n = null != t ? t.id : p.Av;
        if (n !== this.videoInputDeviceId) {
            if (((this.videoInputDeviceId = n), (0, d.eJ)(p.eR.SET_VIDEO_DEVICE_BY_ID))) {
                let e = null != t ? (null != t.originalId && '' !== t.originalId ? t.originalId : t.id) : p.Av;
                (0, d.zS)().setVideoInputDevice(e);
            } else (0, d.zS)().setVideoInputDevice(null != t ? t.index : -1);
            this.connections.forEach((e) => e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e)));
        }
    }
    getSupportedVideoCodecs(e) {
        (0, d.zS)().getSupportedVideoCodecs(e);
    }
    getCodecCapabilities(e) {
        (0, d.zS)().getCodecCapabilities(e);
    }
    setGoLiveSource(e, t) {
        if (null == e) {
            this.eachConnection((e) => {
                e.clearDesktopSource(), e.clearGoLiveDevices(), e.setSoundshareSource(0, !1), e.setVideoBroadcast(this.shouldConnectionBroadcastVideo(e));
            }, t);
            return;
        }
        this.eachConnection((n) => {
            if (t !== p.Yn.STREAM || n.streamUserId === n.userId) n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n));
        }, t);
    }
    setClipsSource(e) {
        var t;
        let n = (0, d.zS)();
        if (null == n.setClipsSource || null == n.setOnClipsRecordingEvent || null == n.applyClipsSettings) return;
        if (null == e) {
            n.setClipsSource({
                id: '',
                soundshareId: 0
            });
            return;
        }
        let { frameRate: r, resolution: i } = e.quality,
            { id: a, soundshareId: s, useLoopback: l, useVideoHook: u, useGraphicsCapture: c, useQuartzCapturer: f, allowScreenCaptureKit: _, hdrCaptureMode: h } = e.desktopDescription;
        n.setOnClipsRecordingEvent((t) => {
            this.logger.info('Clips recording event: '.concat(p.Pf[t], ' received for stream ').concat(a, ' and sound ').concat(s, '.')), t === p.Pf.GoLiveEnded ? this.emit(o.aB.ClipsRecordingRestartNeeded) : t === p.Pf.Error ? this.emit(o.aB.ClipsInitFailure, 'Failed to set clips source in media engine', e.applicationName) : (t === p.Pf.Ended || t === p.Pf.StoppedByGoLive) && this.emit(o.aB.ClipsRecordingEnded, a, s);
        }),
            null === (t = n.applyClipsSettings) ||
                void 0 === t ||
                t.call(n, {
                    useVideoHook: u,
                    useGraphicsCapture: c,
                    useQuartzCapturer: f,
                    allowScreenCaptureKit: _,
                    hdrCaptureMode: h,
                    soundshareLoopback: l,
                    frameRate: r,
                    width: i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
                    height: i
                });
        let [m, g] = null != a ? a.split(':') : ['', ''];
        n.setClipsSource({
            id: g,
            soundshareId: null != s ? s : 0
        });
    }
    setClipsQualitySettings(e, t, n) {
        let r = (0, d.zS)();
        return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), !0);
    }
    setSoundshareSource(e, t, n) {
        this.eachConnection((r) => {
            if (n !== p.Yn.STREAM || r.streamUserId === r.userId) r.setSoundshareSource(e, t);
        }, n);
    }
    getDesktopSource() {
        return Promise.reject(Error('NO_STREAM'));
    }
    getScreenPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.zS)().getScreenPreviews
                ? (0, d.zS)().getScreenPreviews(e, t, (e) => {
                      n(
                          e.map((e, t) => ({
                              ...e,
                              name: 'Screen ' + (t + 1)
                          }))
                      );
                  })
                : n([]);
        });
    }
    setClipBufferLength(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setClipBufferLength) || void 0 === t || t.call(n, e);
    }
    saveClip(e, t) {
        let n = (0, d.zS)();
        return null == n.setClipBufferLength || null == n.saveClip
            ? Promise.reject('unsupported')
            : new Promise((r, i) => {
                  n.saveClip(
                      e,
                      t,
                      (e, t, n) =>
                          r({
                              duration: e,
                              clipStats: JSON.parse(n)
                          }),
                      (e) => i(JSON.parse(e))
                  );
              });
    }
    saveClipForUser(e, t, n) {
        let r = (0, d.zS)();
        return null == r.saveClipForUser
            ? Promise.reject('unsupported')
            : new Promise((i, a) => {
                  r.saveClipForUser(
                      e,
                      t,
                      n,
                      (e, t, n) =>
                          i({
                              duration: e,
                              clipStats: JSON.parse(n)
                          }),
                      (e) => a(JSON.parse(e))
                  );
              });
    }
    updateClipMetadata(e, t) {
        let n = (0, d.zS)();
        return null == n.updateClipMetadata
            ? Promise.reject('unsupported')
            : new Promise((r, i) => {
                  n.updateClipMetadata(e, t, r, i);
              });
    }
    exportClip(e, t) {
        let n = (0, d.zS)();
        return null == n.exportClip
            ? Promise.reject('unsupported')
            : new Promise((r, i) => {
                  n.exportClip(e, t, (e) => r(new Blob([e])), i);
              });
    }
    getWindowPreviews(e, t) {
        return new Promise((n) => {
            null != (0, d.zS)().getWindowPreviews
                ? (0, d.zS)().getWindowPreviews(e, t, (e) => {
                      n(e);
                  })
                : n([]);
        });
    }
    setAudioSubsystem(e) {
        null != (0, d.zS)().setAudioSubsystem ? (0, d.zS)().setAudioSubsystem(e) : (0, d.zS)().setUseLegacyAudioDevice(e === p.iA.LEGACY);
    }
    getAudioSubsystem() {
        return this.audioSubsystem;
    }
    getAudioLayer() {
        return this.audioLayer;
    }
    getDebugLogging() {
        return !!this.supports(p.AN.DEBUG_LOGGING) && (0, d.zS)().getDebugLogging();
    }
    setDebugLogging(e) {
        this.supports(p.AN.DEBUG_LOGGING) && (0, d.zS)().setDebugLogging(e);
    }
    setExperimentalAdm(e) {
        let { setExperimentalAdm: t, getAudioSubsystem: n } = (0, d.zS)();
        null == t || t(e),
            null == n ||
                n((e) => {
                    this.audioSubsystem = e;
                });
    }
    setLoopback(e, t) {
        null != (0, d.zS)().setLoopback &&
            (0, d.zS)().setLoopback(e, {
                echoCancellation: t.echoCancellation,
                noiseSuppression: t.noiseSuppression,
                automaticGainControl: t.automaticGainControl,
                noiseCancellation: t.noiseCancellation
            }),
            null != (0, d.zS)().setEmitVADLevel2
                ? (0, d.zS)().setEmitVADLevel2(e || this.listenerCount(o.aB.VoiceActivity) > 0)
                : (0, d.zS)().setEmitVADLevel(e || this.listenerCount(o.aB.VoiceActivity) > 0, e, {
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
        (0, d.zS)().setTransportOptions({ h264Enabled: e });
    }
    setAv1Enabled(e) {
        (0, d.zS)().setTransportOptions({ av1Enabled: e });
    }
    setH265Enabled(e) {
        (0, d.zS)().setTransportOptions({ h265Enabled: e });
    }
    getCodecSurvey() {
        return null != this.codecSurvey
            ? Promise.resolve(this.codecSurvey)
            : new Promise((e, t) => {
                  let n = (0, d.zS)();
                  null != n.getCodecSurvey
                      ? n.getCodecSurvey((t) => {
                            (this.codecSurvey = t), e(t);
                        })
                      : t(Error('getCodecSurvey is not implemented.'));
              });
    }
    writeAudioDebugState() {
        return new Promise((e, t) => {
            let { writeAudioDebugState: n } = (0, d.zS)();
            null != n ? (n(), e()) : t(Error('Audio debug state is not supported.'));
        });
    }
    startAecDump() {}
    stopAecDump() {}
    setAecDump(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setAecDump) || void 0 === t || t.call(n, e);
    }
    rankRtcRegions(e) {
        return new Promise((t, n) => {
            let { rankRtcRegions: r } = (0, d.zS)();
            null != r ? r(e, (e) => t(e)) : n(Error('RTC region latency test is not supported.'));
        });
    }
    createReplayConnection(e, t) {
        let n = u.Z.createReplay(e, t);
        return null == n
            ? null
            : (n.on(o.Sh.Destroy, (e) => {
                  this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(p.uJ.NORMAL);
              }),
              this.connections.add(n),
              (0, d.p8)(p.uJ.HIGH),
              this.emit(o.aB.Connection, n),
              n);
    }
    setUseDirectVideo(e) {
        _.Z.useDirectVideo = e;
    }
    setOnVideoContainerResized(e) {
        _.Z.onContainerResized = e;
    }
    setMaxSyncDelayOverride(e) {
        let { setMaxSyncDelayOverride: t } = (0, d.zS)();
        null != t && t(e);
    }
    applyMediaFilterSettings(e) {
        let { applyMediaFilterSettings: t, applyMediaFilterSettingsWithCallback: n } = (0, d.zS)();
        return null != n
            ? new Promise((t, r) => {
                  n(e, t);
              })
            : (null != t && t(e), Promise.resolve());
    }
    startLocalAudioRecording(e) {
        return new Promise((t, n) => {
            let { startLocalAudioRecording: r } = (0, d.zS)();
            null != r
                ? r(e, (e) => {
                      e ? t() : n(Error('Failed to start local audio recording.'));
                  })
                : n(Error('startLocalAudioRecording is not supported.'));
        });
    }
    stopLocalAudioRecording(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).stopLocalAudioRecording) ||
            void 0 === t ||
            t.call(n, (t, n) => {
                e(t, n);
            }),
            this.listenerCount(o.aB.VoiceActivity) > 0 && null != (0, d.zS)().setEmitVADLevel2 && (0, d.zS)().setEmitVADLevel2(!0);
    }
    setHasFullbandPerformance(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setHasFullbandPerformance) || void 0 === t || t.call(n, e);
    }
    getSupportedSecureFramesProtocolVersion() {
        var e;
        return null !== (e = (0, d.zS)().SupportedSecureFramesProtocolVersion) && void 0 !== e ? e : 0;
    }
    getSupportedBandwidthEstimationExperiments(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).getSupportedBandwidthEstimationExperiments) || void 0 === t || t.call(n, e);
    }
    getMLSSigningKey(e, t) {
        return new Promise((n, r) => {
            let i = (0, d.zS)();
            null != i.getMLSSigningKey
                ? i.getMLSSigningKey(e, t, (e, t) =>
                      n({
                          key: e,
                          signature: t
                      })
                  )
                : r(Error('NOT_IMPLEMENTED'));
        });
    }
    setSidechainCompression(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setSidechainCompression) || void 0 === t || t.call(n, e);
    }
    setSidechainCompressionStrength(e) {
        var t, n, r, i, a, s;
        let o = 100 - e;
        let l = ((r = o), (i = h.Zq), i + ((h.WA - i) * r) / 100);
        let u = ((a = o), (s = h.QO), s + ((h.JA - s) * a) / 100);
        null === (t = (n = (0, d.zS)()).applySidechainCompressionSettings) ||
            void 0 === t ||
            t.call(n, {
                threshold: l,
                ratio: u
            });
    }
    setNativeDesktopVideoSourcePickerActive(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, e);
    }
    presentNativeScreenSharePicker(e) {
        var t, n;
        null === (t = (n = (0, d.zS)()).presentNativeScreenSharePicker) || void 0 === t || t.call(n, null != e ? e : '');
    }
    releaseNativeDesktopVideoSourcePickerStream() {
        var e, t;
        null === (e = (t = (0, d.zS)()).releaseNativeDesktopVideoSourcePickerStream) || void 0 === e || e.call(t);
    }
    watchdogTick() {
        let e = !1;
        (0, d.zS)().pingVoiceThread(() => {
            (e = !0), (this.consecutiveWatchdogFailures = 0);
        }),
            setTimeout(() => {
                !e && ++this.consecutiveWatchdogFailures > 1 ? this.emit(o.aB.WatchdogTimeout) : this.watchdogTick();
            }, p.H0);
    }
    connectionsEmpty() {
        return 0 === this.connections.size;
    }
    constructor() {
        var e, t, n, r;
        super(),
            (e = this),
            m(this, 'Video', _.Z),
            m(this, 'Camera', f.Z),
            m(this, 'videoInputDeviceId', p.Av),
            m(this, 'connections', new Set()),
            m(this, 'lastVoiceActivity', -1),
            m(this, 'audioSubsystem', 'standard'),
            m(this, 'audioLayer', ''),
            m(this, 'deviceChangeGeneration', 0),
            m(this, 'consecutiveWatchdogFailures', 0),
            m(this, 'codecSurvey', null),
            m(this, 'logger', new a.Y('MediaEngineNative')),
            m(this, 'handleDeviceChange', function () {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                e.deviceChangeGeneration++, e.emit(o.aB.DeviceChange, (0, c.C1)(p.h7.AUDIO_INPUT, t), (0, c.C1)(p.h7.AUDIO_OUTPUT, n), (0, c.C1)(p.h7.VIDEO_INPUT, r));
            }),
            m(this, 'handleVolumeChange', (e, t) => {
                this.emit(o.aB.VolumeChange, e * p.Qx, t * p.Qx);
            }),
            m(this, 'handleVoiceActivity', (e, t) => {
                let n = Date.now();
                this.listenerCount(o.aB.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && ((this.lastVoiceActivity = n), this.emit(o.aB.VoiceActivity, e, t));
            }),
            m(this, 'handleActiveSinksChange', (e, t) => {
                this.connections.forEach((n) => n.setHasActiveVideoOutputSink(e, t));
            }),
            m(this, 'handleNewListener', (e) => {
                switch (e) {
                    case o.aB.VoiceActivity:
                        null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(!0) : (0, d.zS)().setEmitVADLevel(!0, !1, {});
                        break;
                    case o.aB.DeviceChange:
                        let t = this.deviceChangeGeneration;
                        Promise.all([this.getAudioInputDevices(), this.getAudioOutputDevices(), this.getVideoInputDevices()]).then((e) => {
                            let [n, r, i] = e;
                            t === this.deviceChangeGeneration && this.emit(o.aB.DeviceChange, n, r, i);
                        });
                }
            }),
            m(this, 'handleRemoveListener', (e) => {
                e === o.aB.VoiceActivity && (null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(this.listenerCount(o.aB.VoiceActivity) > 0) : (0, d.zS)().setEmitVADLevel(this.listenerCount(o.aB.VoiceActivity) > 0, !1, {}));
            }),
            m(this, 'handleVideoInputInitialization', (e) => {
                this.emit(o.aB.VideoInputInitialized, e);
            }),
            m(this, 'handleNativeScreenSharePickerUpdate', (e) => {
                this.emit(o.aB.NativeScreenSharePickerUpdate, e);
            }),
            m(this, 'handleNativeScreenSharePickerCancel', (e) => {
                this.emit(o.aB.NativeScreenSharePickerCancel, e);
            }),
            m(this, 'handleNativeScreenSharePickerError', (e) => {
                this.emit(o.aB.NativeScreenSharePickerError, e);
            }),
            m(this, 'handleAudioDeviceModuleErrorCallback', (e, t) => {
                -100 !== e && this.emit(o.aB.AudioDeviceModuleError, 'RustAudioDeviceModule', e, t);
            });
        let i = (0, d.zS)();
        if (
            (i.setDeviceChangeCallback(this.handleDeviceChange),
            i.setVolumeChangeCallback(this.handleVolumeChange),
            i.setOnVoiceCallback(this.handleVoiceActivity),
            null === (t = i.setVideoInputInitializationCallback) || void 0 === t || t.call(i, this.handleVideoInputInitialization),
            i.setTransportOptions({
                idleJitterBufferFlush: !0,
                ducking: !1
            }),
            null === (n = i.setNativeScreenSharePickerCallbacks) || void 0 === n || n.call(i, this.handleNativeScreenSharePickerUpdate, this.handleNativeScreenSharePickerCancel, this.handleNativeScreenSharePickerError),
            null === (r = i.setAudioDeviceModuleErrorCallback) || void 0 === r || r.call(i, this.handleAudioDeviceModuleErrorCallback),
            this.on('removeListener', this.handleRemoveListener),
            this.on('newListener', this.handleNewListener),
            null != (0, d.zS)().getAudioSubsystem
                ? (0, d.zS)().getAudioSubsystem((e, t) => {
                      (this.audioSubsystem = e), (this.audioLayer = t);
                  })
                : null != (0, d.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, d.zS)().getUseLegacyAudioDevice() ? p.iA.LEGACY : p.iA.STANDARD),
            null != i.pingVoiceThread && 'undefined' != typeof window && 'canary' === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(),
            this.getDebugLogging() && !v.installedLogHooks)
        )
            for (let e of ((v.installedLogHooks = !0), ['trace', 'debug', 'info', 'warn', 'error', 'log'])) {
                let t = console,
                    n = t[e];
                null != n &&
                    (t[e] = function () {
                        n.apply(this, arguments);
                        try {
                            let t = Array.from(arguments)
                                .map((e) => (null != e ? e.toString() : e))
                                .filter((e) => 'string' != typeof e || '\nfont-weight: bold;\ncolor: purple;\n' !== e)
                                .map((e) => (e.startsWith('%c') ? e.slice(2) : e));
                            (0, d.zS)().consoleLog(e, t.join(' '));
                        } catch (e) {}
                    });
            }
        null != i.setActiveSinksChangeCallback && i.setActiveSinksChangeCallback(this.handleActiveSinksChange), (0, l.Z)(this);
    }
}
m(v, 'installedLogHooks', !1);
