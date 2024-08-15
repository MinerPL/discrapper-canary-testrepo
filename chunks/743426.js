n.d(t, {
	Z: function () {
		return m;
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
	_ = n(656795),
	E = n(650886),
	f = n(149396);
function h(e, t, n) {
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
function p(e) {
	return (null != e ? e : f.Qx) / f.Qx;
}
class m extends s.Z {
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
			case f.AN.LEGACY_AUDIO_SUBSYSTEM:
				return (0, d.eJ)(f.eR.VOICE_LEGACY_SUBSYSTEM);
			case f.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM:
				return (0, d.eJ)(f.eR.VOICE_EXPERIMENTAL_SUBSYSTEM);
			case f.AN.DEBUG_LOGGING:
				return (0, d.eJ)(f.eR.DEBUG_LOGGING);
			case f.AN.SOUNDSHARE:
				return (0, d.eJ)(f.eR.SOUNDSHARE);
			case f.AN.SCREEN_SOUNDSHARE:
				return (0, d.eJ)(f.eR.SCREEN_SOUNDSHARE);
			case f.AN.ELEVATED_HOOK:
				return (0, d.eJ)(f.eR.ELEVATED_HOOK);
			case f.AN.LOOPBACK:
				return (0, d.eJ)(f.eR.LOOPBACK);
			case f.AN.WUMPUS_VIDEO:
				return (0, d.eJ)(f.eR.WUMPUS_VIDEO);
			case f.AN.HYBRID_VIDEO:
				return (0, d.eJ)(f.eR.HYBRID_VIDEO);
			case f.AN.ATTENUATION:
			case f.AN.VIDEO_HOOK:
				return (null === i() || void 0 === i() ? void 0 : null === (t = i().os) || void 0 === t ? void 0 : t.family) != null && /^win/i.test(i().os.family);
			case f.AN.EXPERIMENTAL_SOUNDSHARE:
				return (0, d.eJ)(f.eR.SOUNDSHARE_LOOPBACK);
			case f.AN.OPEN_H264:
				return (null === i() || void 0 === i() ? void 0 : null === (n = i().os) || void 0 === n ? void 0 : n.family) != null && /^win|linux|OS X/i.test(i().os.family);
			case f.AN.EXPERIMENTAL_ENCODERS:
				return (0, d.eJ)(f.eR.EXPERIMENTAL_ENCODERS);
			case f.AN.REMOTE_LOCUS_NETWORK_CONTROL:
				return (0, d.eJ)(f.eR.REMOTE_LOCUS_NETWORK_CONTROL);
			case f.AN.SCREEN_PREVIEWS:
				return (0, d.eJ)(f.eR.SCREEN_PREVIEWS);
			case f.AN.CLIPS:
				return (0, d.eJ)(f.eR.CLIPS);
			case f.AN.WINDOW_PREVIEWS:
				return (0, d.eJ)(f.eR.WINDOW_PREVIEWS);
			case f.AN.AUDIO_DEBUG_STATE:
				return (0, d.eJ)(f.eR.AUDIO_DEBUG_STATE);
			case f.AN.CONNECTION_REPLAY:
				return (0, d.eJ)(f.eR.CONNECTION_REPLAY);
			case f.AN.SIMULCAST:
				return (0, d.eJ)(f.eR.SIMULCAST) && (0, d.eJ)(f.eR.SIMULCAST_BUGFIX);
			case f.AN.RTC_REGION_RANKING:
				return (0, d.eJ)(f.eR.RTC_REGION_RANKING);
			case f.AN.DIRECT_VIDEO:
				return (0, d.eJ)(f.eR.DIRECT_VIDEO) && null != window.createDiscordStream;
			case f.AN.ELECTRON_VIDEO:
				return (0, d.eJ)(f.eR.ELECTRON_VIDEO);
			case f.AN.MEDIAPIPE:
				return (0, d.eJ)(f.eR.MEDIAPIPE);
			case f.AN.FIXED_KEYFRAME_INTERVAL:
				return (0, d.eJ)(f.eR.FIXED_KEYFRAME_INTERVAL);
			case f.AN.FIRST_FRAME_CALLBACK:
				return (0, d.eJ)(f.eR.FIRST_FRAME_CALLBACK);
			case f.AN.REMOTE_USER_MULTI_STREAM:
				return (0, d.eJ)(f.eR.REMOTE_USER_MULTI_STREAM);
			case f.AN.IMAGE_QUALITY_MEASUREMENT:
				return (0, d.eJ)(f.eR.IMAGE_QUALITY_MEASUREMENT);
			case f.AN.AMD_EXPERIMENTAL_RATE_CONTROL:
				return (0, d.eJ)(f.eR.AMD_EXPERIMENTAL_RATE_CONTROL);
			case f.AN.GO_LIVE_HARDWARE:
				return (0, d.eJ)(f.eR.GO_LIVE_HARDWARE);
			case f.AN.SCREEN_CAPTURE_KIT:
				return (0, d.eJ)(f.eR.SCREEN_CAPTURE_KIT);
			case f.AN.CAPTURE_TIMEOUT_EXPERIMENTS:
				return (0, d.eJ)(f.eR.CAPTURE_TIMEOUT_EXPERIMENTS);
			case f.AN.NATIVE_SCREENSHARE_PICKER:
				return (0, d.eJ)(f.eR.NATIVE_SCREENSHARE_PICKER);
			case f.AN.DIAGNOSTICS:
			case f.AN.NATIVE_PING:
			case f.AN.AUTOMATIC_VAD:
			case f.AN.AUDIO_INPUT_DEVICE:
			case f.AN.AUDIO_OUTPUT_DEVICE:
			case f.AN.QOS:
			case f.AN.VOICE_PROCESSING:
			case f.AN.AUTO_ENABLE:
			case f.AN.VIDEO:
			case f.AN.DESKTOP_CAPTURE:
			case f.AN.DESKTOP_CAPTURE_FORMAT:
			case f.AN.DESKTOP_CAPTURE_APPLICATIONS:
			case f.AN.VOICE_PANNING:
			case f.AN.AEC_DUMP:
			case f.AN.DISABLE_VIDEO:
			case f.AN.SAMPLE_PLAYBACK:
			case f.AN.NOISE_SUPPRESSION:
			case f.AN.AUTOMATIC_GAIN_CONTROL:
				return !0;
			default:
				return !1;
		}
	}
	connect(e, t, n) {
		!(0, d.eJ)(f.eR.EXPERIMENT_CONFIG) && (n.experiments = void 0);
		let r = u.Z.create(e, t, n);
		return (
			r.on(o.Sh.Destroy, (e) => {
				this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(f.uJ.NORMAL);
			}),
			r.on(o.Sh.Connected, () => {
				r.setVideoBroadcast(this.shouldConnectionBroadcastVideo(r));
			}),
			r.on(o.Sh.Silence, (e) => {
				this.emit(o.aB.Silence, e);
			}),
			this.connections.add(r),
			(0, d.p8)(f.uJ.HIGH),
			this.emit(o.aB.Connection, r),
			r
		);
	}
	shouldConnectionBroadcastVideo(e) {
		return (e.context === f.Yn.DEFAULT && this.videoInputDeviceId !== f.Av) || e.hasDesktopSource();
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
		(0, d.zS)().setInputVolume(p(e));
	}
	setOutputVolume(e) {
		(0, d.zS)().setOutputVolume(p(e));
	}
	getAudioInputDevices() {
		return (0, c.Hg)();
	}
	setAudioInputDevice(e) {
		(0, d.eJ)(f.eR.SET_AUDIO_DEVICE_BY_ID)
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
		(0, d.eJ)(f.eR.SET_AUDIO_DEVICE_BY_ID)
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
			n = null != t ? t.id : f.Av;
		if (n !== this.videoInputDeviceId) {
			if (((this.videoInputDeviceId = n), (0, d.eJ)(f.eR.SET_VIDEO_DEVICE_BY_ID))) {
				let e = null != t ? (null != t.originalId && '' !== t.originalId ? t.originalId : t.id) : f.Av;
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
			if (t !== f.Yn.STREAM || n.streamUserId === n.userId) n.setGoLiveSource(e), n.setVideoBroadcast(this.shouldConnectionBroadcastVideo(n));
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
			{ id: a, soundshareId: s, useLoopback: l, useVideoHook: u, useGraphicsCapture: c, useQuartzCapturer: _, allowScreenCaptureKit: E, hdrCaptureMode: h } = e.desktopDescription;
		n.setOnClipsRecordingEvent((t) => {
			this.logger.info('Clips recording event: '.concat(f.Pf[t], ' received for stream ').concat(a, ' and sound ').concat(s, '.')), t === f.Pf.GoLiveEnded ? this.emit(o.aB.ClipsRecordingRestartNeeded) : t === f.Pf.Error ? this.emit(o.aB.ClipsInitFailure, 'Failed to set clips source in media engine', e.applicationName) : (t === f.Pf.Ended || t === f.Pf.StoppedByGoLive) && this.emit(o.aB.ClipsRecordingEnded, a, s);
		}),
			null === (t = n.applyClipsSettings) ||
				void 0 === t ||
				t.call(n, {
					useVideoHook: u,
					useGraphicsCapture: c,
					useQuartzCapturer: _,
					allowScreenCaptureKit: E,
					hdrCaptureMode: h,
					soundshareLoopback: l,
					frameRate: r,
					width: i <= 480 ? (i / 3) * 4 : (i / 9) * 16,
					height: i
				});
		let [p, m] = null != a ? a.split(':') : ['', ''];
		n.setClipsSource({
			id: m,
			soundshareId: null != s ? s : 0
		});
	}
	setClipsQualitySettings(e, t, n) {
		let r = (0, d.zS)();
		return null != r.applyClipsQualitySettings && (r.applyClipsQualitySettings(e, t, n), !0);
	}
	setSoundshareSource(e, t, n) {
		this.eachConnection((r) => {
			if (n !== f.Yn.STREAM || r.streamUserId === r.userId) r.setSoundshareSource(e, t);
		}, n);
	}
	getDesktopSource() {
		return Promise.reject(Error('NO_STREAM'));
	}
	getDesktopSources() {
		return new Promise((e) => {
			null != (0, d.zS)().getDesktopSources ? (0, d.zS)().getDesktopSources((t) => e(t)) : e([]);
		});
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
		null != (0, d.zS)().setAudioSubsystem ? (0, d.zS)().setAudioSubsystem(e) : (0, d.zS)().setUseLegacyAudioDevice(e === f.iA.LEGACY);
	}
	getAudioSubsystem() {
		return this.audioSubsystem;
	}
	getAudioLayer() {
		return this.audioLayer;
	}
	getDebugLogging() {
		return !!this.supports(f.AN.DEBUG_LOGGING) && (0, d.zS)().getDebugLogging();
	}
	setDebugLogging(e) {
		this.supports(f.AN.DEBUG_LOGGING) && (0, d.zS)().setDebugLogging(e);
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
					this.connections.delete(e), this.connectionsEmpty() && (0, d.p8)(f.uJ.NORMAL);
				}),
				this.connections.add(n),
				(0, d.p8)(f.uJ.HIGH),
				this.emit(o.aB.Connection, n),
				n);
	}
	setUseDirectVideo(e) {
		E.Z.useDirectVideo = e;
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
	setNativeDesktopVideoSourcePickerActive(e) {
		var t, n;
		null === (t = (n = (0, d.zS)()).setNativeDesktopVideoSourcePickerActive) || void 0 === t || t.call(n, e);
	}
	presentNativeScreenSharePicker(e) {
		var t, n;
		null === (t = (n = (0, d.zS)()).presentNativeScreenSharePicker) || void 0 === t || t.call(n, e);
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
			}, f.H0);
	}
	connectionsEmpty() {
		return 0 === this.connections.size;
	}
	constructor() {
		var e, t, n;
		super(),
			(e = this),
			h(this, 'Video', E.Z),
			h(this, 'Camera', _.Z),
			h(this, 'videoInputDeviceId', f.Av),
			h(this, 'connections', new Set()),
			h(this, 'lastVoiceActivity', -1),
			h(this, 'audioSubsystem', 'standard'),
			h(this, 'audioLayer', ''),
			h(this, 'deviceChangeGeneration', 0),
			h(this, 'consecutiveWatchdogFailures', 0),
			h(this, 'codecSurvey', null),
			h(this, 'logger', new a.Y('MediaEngineNative')),
			h(this, 'handleDeviceChange', function () {
				let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
				e.deviceChangeGeneration++, e.emit(o.aB.DeviceChange, (0, c.C1)(f.h7.AUDIO_INPUT, t), (0, c.C1)(f.h7.AUDIO_OUTPUT, n), (0, c.C1)(f.h7.VIDEO_INPUT, r));
			}),
			h(this, 'handleVolumeChange', (e, t) => {
				this.emit(o.aB.VolumeChange, e * f.Qx, t * f.Qx);
			}),
			h(this, 'handleVoiceActivity', (e, t) => {
				let n = Date.now();
				this.listenerCount(o.aB.VoiceActivity) > 0 && (-1 === this.lastVoiceActivity || Date.now() - this.lastVoiceActivity > 20) && ((this.lastVoiceActivity = n), this.emit(o.aB.VoiceActivity, e, t));
			}),
			h(this, 'handleActiveSinksChange', (e, t) => {
				this.connections.forEach((n) => n.setHasActiveVideoOutputSink(e, t));
			}),
			h(this, 'handleNewListener', (e) => {
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
			h(this, 'handleRemoveListener', (e) => {
				e === o.aB.VoiceActivity && (null != (0, d.zS)().setEmitVADLevel2 ? (0, d.zS)().setEmitVADLevel2(this.listenerCount(o.aB.VoiceActivity) > 0) : (0, d.zS)().setEmitVADLevel(this.listenerCount(o.aB.VoiceActivity) > 0, !1, {}));
			}),
			h(this, 'handleVideoInputInitialization', (e) => {
				this.emit(o.aB.VideoInputInitialized, e);
			}),
			h(this, 'handleNativeScreenSharePickerUpdate', (e) => {
				this.emit(o.aB.NativeScreenSharePickerUpdate, e);
			}),
			h(this, 'handleNativeScreenSharePickerCancel', (e) => {
				this.emit(o.aB.NativeScreenSharePickerCancel, e);
			}),
			h(this, 'handleNativeScreenSharePickerError', (e) => {
				this.emit(o.aB.NativeScreenSharePickerError, e);
			});
		let r = (0, d.zS)();
		if (
			(r.setDeviceChangeCallback(this.handleDeviceChange),
			r.setVolumeChangeCallback(this.handleVolumeChange),
			r.setOnVoiceCallback(this.handleVoiceActivity),
			null === (t = r.setVideoInputInitializationCallback) || void 0 === t || t.call(r, this.handleVideoInputInitialization),
			r.setTransportOptions({
				idleJitterBufferFlush: !0,
				ducking: !1
			}),
			null === (n = r.setNativeScreenSharePickerCallbacks) || void 0 === n || n.call(r, this.handleNativeScreenSharePickerUpdate, this.handleNativeScreenSharePickerCancel, this.handleNativeScreenSharePickerError),
			this.on('removeListener', this.handleRemoveListener),
			this.on('newListener', this.handleNewListener),
			null != (0, d.zS)().getAudioSubsystem
				? (0, d.zS)().getAudioSubsystem((e, t) => {
						(this.audioSubsystem = e), (this.audioLayer = t);
					})
				: null != (0, d.zS)().getUseLegacyAudioDevice && (this.audioSubsystem = (0, d.zS)().getUseLegacyAudioDevice() ? f.iA.LEGACY : f.iA.STANDARD),
			null != r.pingVoiceThread && 'undefined' != typeof window && 'canary' === window.GLOBAL_ENV.RELEASE_CHANNEL && this.watchdogTick(),
			this.getDebugLogging() && !m.installedLogHooks)
		)
			for (let e of ((m.installedLogHooks = !0), ['trace', 'debug', 'info', 'warn', 'error', 'log'])) {
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
		null != r.setActiveSinksChangeCallback && r.setActiveSinksChangeCallback(this.handleActiveSinksChange), (0, l.Z)(this);
	}
}
h(m, 'installedLogHooks', !1);
