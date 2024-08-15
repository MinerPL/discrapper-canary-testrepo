var r = n(570140),
	i = n(340332),
	a = n(672339),
	s = n(463395),
	o = n(131951),
	l = n(626135),
	u = n(557177),
	c = n(557457),
	d = n(981631),
	_ = n(65154);
function E() {
	(0, u.GN)('mention3');
}
function f(e, t, n, r, i) {
	if (t === n) return;
	let a = e[t],
		o = e[n];
	l.default.track(d.rMx.MEDIA_DEVICE_CHANGED, {
		device_from_name: s.Z.getCertifiedDeviceName(t, null != a ? a.name : ''),
		device_to_name: s.Z.getCertifiedDeviceName(n, null != o ? o.name : ''),
		device_type: r,
		device_is_certified: s.Z.isCertified(n),
		location: i
	});
}
let h = {
		isNotSupported: () => !1,
		enable: (e) => Promise.resolve(!0),
		trackToggleSelfMute(e) {}
	},
	{ enable: p, isNotSupported: I, trackToggleSelfMute: m } = (h = n(929782));
t.Z = {
	enable: p,
	toggleSelfMute() {
		let {
			context: e = _.Yn.DEFAULT,
			syncRemote: t = !0,
			usedKeybind: n = !1,
			playSoundEffect: i = !0
		} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
		return I()
			? Promise.resolve()
			: (m({ usedKeybind: n }), o.Z.isEnabled())
				? r.Z.dispatch({
						type: 'AUDIO_TOGGLE_SELF_MUTE',
						context: e,
						syncRemote: t,
						skipMuteUnmuteSoundEffect: !i
					})
				: this.enable(!0);
	},
	setSelfMute(e, t) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_SELF_MUTE',
				context: e,
				mute: t
			});
	},
	setTemporarySelfMute(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_TEMPORARY_SELF_MUTE',
				mute: e
			});
	},
	toggleSelfDeaf() {
		let { context: e = _.Yn.DEFAULT, syncRemote: t = !0 } =
			arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_TOGGLE_SELF_DEAF',
				context: e,
				syncRemote: t
			});
	},
	toggleLocalMute(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Yn.DEFAULT;
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_TOGGLE_LOCAL_MUTE',
				context: t,
				userId: e
			});
	},
	toggleLocalSoundboardMute(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _.Yn.DEFAULT;
		r.Z.dispatch({
			type: 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE',
			context: t,
			userId: e
		});
	},
	setDisableLocalVideo(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Yn.DEFAULT,
			i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
			a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_LOCAL_VIDEO_DISABLED',
				context: n,
				userId: e,
				videoToggleState: t,
				persist: i,
				isAutomatic: a
			});
	},
	setLocalVolume(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Yn.DEFAULT;
		r.Z.dispatch({
			type: 'AUDIO_SET_LOCAL_VOLUME',
			context: n,
			userId: e,
			volume: (0, i.r)(t, n)
		});
	},
	setLocalPan(e, t, n) {
		let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _.Yn.DEFAULT;
		r.Z.dispatch({
			type: 'AUDIO_SET_LOCAL_PAN',
			context: i,
			userId: e,
			left: t,
			right: n
		});
	},
	setMode(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : _.Yn.DEFAULT;
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_MODE',
				context: n,
				mode: e,
				options: {
					...o.Z.getModeOptions(n),
					...t
				}
			});
	},
	setInputVolume(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_INPUT_VOLUME',
				volume: e
			});
	},
	setOutputVolume(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_OUTPUT_VOLUME',
				volume: e
			});
	},
	setInputDevice(e, t) {
		if (!I()) {
			if (null != t) {
				let n = o.Z.getInputDevices();
				f(n, o.Z.getInputDeviceId(), e, 'Audio Input', t);
			}
			r.Z.dispatch({
				type: 'AUDIO_SET_INPUT_DEVICE',
				id: e
			}),
				E();
		}
	},
	setOutputDevice(e, t) {
		if (!I()) {
			if (null != t) {
				let n = o.Z.getOutputDevices();
				f(n, o.Z.getOutputDeviceId(), e, 'Audio Output', t);
			}
			r.Z.dispatch({
				type: 'AUDIO_SET_OUTPUT_DEVICE',
				id: e
			}),
				E();
		}
	},
	setVideoDevice(e, t) {
		if (!I()) {
			if (null != t) {
				let n = o.Z.getVideoDevices();
				f(n, o.Z.getVideoDeviceId(), e, 'Video', t);
			}
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_VIDEO_DEVICE',
				id: e
			});
		}
	},
	setEchoCancellation(e, t) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_ECHO_CANCELLATION',
				enabled: e,
				location: t
			});
	},
	setSidechainCompression(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_SIDECHAIN_COMPRESSION',
				enabled: e
			});
	},
	setLoopback(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_LOOPBACK',
				enabled: e
			});
	},
	setNoiseSuppression(e, t) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_NOISE_SUPPRESSION',
				enabled: e,
				location: t
			});
	},
	setNoiseCancellation(e, t) {
		!I() &&
			(r.Z.dispatch({
				type: 'AUDIO_SET_NOISE_CANCELLATION',
				enabled: e,
				location: t
			}),
			r.Z.dispatch({
				type: 'AUDIO_SET_NOISE_SUPPRESSION',
				enabled: !e,
				location: t
			}));
	},
	setAutomaticGainControl(e, t) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL',
				enabled: e,
				location: t
			});
	},
	setExperimentalEncoders(e) {
		!I() &&
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS',
				enabled: e
			});
	},
	setHardwareEncoding(e) {
		!I() &&
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_HARDWARE_ENCODING',
				enabled: e
			});
	},
	setAttenuation(e, t, n) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_ATTENUATION',
				attenuation: e,
				attenuateWhileSpeakingSelf: t,
				attenuateWhileSpeakingOthers: n
			});
	},
	setQoS(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_QOS',
				enabled: e
			});
	},
	reset() {
		!I() && r.Z.dispatch({ type: 'AUDIO_RESET' });
	},
	setSilenceWarning(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_DISPLAY_SILENCE_WARNING',
				enabled: e
			});
	},
	setDebugLogging(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_DEBUG_LOGGING',
				enabled: e
			});
	},
	setVideoHook(e) {
		!I() &&
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_VIDEO_HOOK',
				enabled: e
			});
	},
	setExperimentalSoundshare(e) {
		!I() &&
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE',
				enabled: e
			});
	},
	setAudioSubsystem(e) {
		!I() &&
			r.Z.dispatch({
				type: 'AUDIO_SET_SUBSYSTEM',
				subsystem: e
			});
	},
	setVideoEnabled(e) {
		(0, a.eH)(),
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_VIDEO_ENABLED',
				enabled: e
			});
	},
	setGoLiveSource(e) {
		(null == e ? void 0 : e.qualityOptions) != null &&
			(0, c.Ye)(e.qualityOptions.preset, e.qualityOptions.resolution, e.qualityOptions.frameRate),
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
				settings: e
			});
	},
	setOpenH264(e) {
		!I() &&
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_OPEN_H264',
				enabled: e
			});
	},
	setAecDump(e) {
		!I() &&
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_AEC_DUMP',
				enabled: e
			});
	},
	interact() {
		!I() &&
			r.Z.dispatch({
				type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
				required: !1
			});
	}
};
