let r, i, a, s;
n(47120), n(724458), n(773603), n(653041), n(337869);
var o,
	l,
	u,
	c = n(512722),
	d = n.n(c),
	_ = n(392711),
	E = n.n(_),
	f = n(553813),
	h = n.n(f),
	p = n(442837),
	I = n(46973),
	m = n(433517),
	T = n(846519),
	g = n(570140),
	S = n(579806),
	A = n(887278),
	N = n(547727),
	v = n(565885),
	O = n(435064),
	R = n(779618),
	C = n(710845),
	y = n(811660),
	D = n(353926),
	L = n(646047),
	b = n(594190),
	M = n(502286),
	P = n(227196),
	U = n(12898),
	w = n(294473),
	x = n(706629),
	G = n(926951),
	k = n(836157),
	B = n(498600),
	F = n(631610),
	V = n(951958),
	H = n(998594),
	Z = n(529558),
	Y = n(111672),
	j = n(874785),
	W = n(636458),
	K = n(441167),
	z = n(338336),
	q = n(751571),
	Q = n(725380),
	X = n(581883),
	$ = n(626135),
	J = n(12647),
	ee = n(70956),
	et = n(358085),
	en = n(960048),
	er = n(998502),
	ei = n(13140),
	ea = n(314897),
	es = n(967368),
	eo = n(463395),
	el = n(592125),
	eu = n(858340),
	ec = n(19780),
	ed = n(704806),
	e_ = n(631768),
	eE = n(981631),
	ef = n(70722),
	eh = n(761274),
	ep = n(526761),
	eI = n(65154),
	em = n(689938);
function eT(e, t, n) {
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
let eg = new C.Z('MediaEngineStore');
((u = o || (o = {}))[(u.DETACHED = 0)] = 'DETACHED'),
	(u[(u.WAITING = 1)] = 'WAITING'),
	(u[(u.ATTACHED = 2)] = 'ATTACHED'),
	(u[(u.STARTED = 3)] = 'STARTED'),
	(u[(u.PLAYING = 4)] = 'PLAYING'),
	(u[(u.SILENCE = 5)] = 'SILENCE');
let eS = 'MediaEngineStore',
	eA = {
		left: 1,
		right: 1
	},
	eN = 5 * ee.Z.Millis.SECOND;
function ev() {
	return {
		mode: eE.pM4.VOICE_ACTIVITY,
		modeOptions: {
			threshold: -60,
			autoThreshold: et.isPlatformEmbedded || __OVERLAY__,
			vadUseKrisp: !0,
			vadLeading: 5,
			vadTrailing: 25,
			delay: 20,
			shortcut: []
		},
		vadUseKrispSettingVersion: 0,
		ncUseKrispSettingVersion: 0,
		ncUseKrispjsSettingVersion: 0,
		mute: !1,
		deaf: !1,
		echoCancellation: !0,
		noiseSuppression: !1,
		automaticGainControl: !0,
		noiseCancellation: !0,
		experimentalEncoders: !1,
		hardwareH264: !0,
		hardwareEnabledVersion: 0,
		hardwareEncoding: null,
		silenceWarning: !0,
		attenuation: 0,
		attenuateWhileSpeakingSelf: !1,
		attenuateWhileSpeakingOthers: !0,
		localMutes: {},
		disabledLocalVideos: {},
		videoToggleStateMap: {},
		localVolumes: {},
		localPans: {},
		inputVolume: eI.Qx,
		outputVolume: eI.Qx,
		inputDeviceId: eI.w5,
		outputDeviceId: eI.w5,
		videoDeviceId: eI.w5,
		qos: !1,
		qosMigrated: !1,
		videoHook: eO.supports(eI.AN.VIDEO_HOOK),
		experimentalSoundshare2: null,
		openH264: !0,
		h265Enabled: !0,
		vadThrehsoldMigrated: !1,
		aecDumpEnabled: !1,
		sidechainCompression: !1,
		sidechainCompressionSettingVersion: 0
	};
}
let eO = (0, I.Mt)((0, I.jj)()),
	eR = {},
	eC = new Set([eI.Yn.DEFAULT]),
	ey = eO.supports(eI.AN.AUTO_ENABLE),
	eD = !1,
	eL = eI.Yn.STREAM,
	eb = { [eI.w5]: tc(em.Z.Messages.NO_INPUT_DEVICES) },
	eM = { [eI.w5]: tc(em.Z.Messages.NO_OUTPUT_DEVICES) },
	eP = { [eI.w5]: tc(em.Z.Messages.NO_VIDEO_DEVICES) },
	eU = !1,
	ew = !1,
	ex = !1,
	eG = !1,
	ek = !1,
	eB = eI.Av,
	eF = !1,
	eV = !1,
	eH = !1,
	eZ = !1,
	eY = null,
	ej = !1,
	eW = !1,
	eK = !1,
	ez = !1,
	eq = !1,
	eQ = null,
	eX = !1,
	e$ = !1,
	eJ = !1;
q.Z.hasPermission(eh.Eu.AUDIO, { showAuthorizationError: !1 }),
	q.Z.hasPermission(eh.Eu.CAMERA, { showAuthorizationError: !1 });
let e0 = new Set(),
	e1 = !1,
	e2 = !1,
	e3 = {},
	e4 = null,
	e5 = {},
	e6 = 5 * ee.Z.Millis.SECOND;
function e7() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
		t = eR[e];
	return null == t && ((t = ev()), (eR[e] = t)), t;
}
function e8(e) {
	let t = e7(e.context);
	e.setInputMode(t.mode, {
		vadThreshold: t.modeOptions.threshold,
		vadAutoThreshold: t.modeOptions.autoThreshold,
		vadUseKrisp:
			t.modeOptions.vadUseKrisp &&
			(function () {
				return eq || !1;
			})(),
		vadLeading: t.modeOptions.vadLeading,
		vadTrailing: t.modeOptions.vadTrailing,
		pttReleaseDelay: t.modeOptions.delay
	});
}
function e9(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Qx;
	return E().clamp(e, 0, t);
}
function te(e) {
	let t = e7(e.context),
		n = !ey || t.mute || t.deaf;
	e.context === eI.Yn.DEFAULT
		? (n = n || eU || ew || ex || !q.Z.didHavePermission(eh.Eu.AUDIO))
		: e.context === eI.Yn.STREAM && (n = !0),
		e.setSelfMute(n),
		e.setSelfDeaf(t.deaf),
		e.context === eI.Yn.DEFAULT && N.Z.updateNativeMute();
}
function tt() {
	var e, t, n;
	let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek,
		s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
		o = a;
	if (
		((null == o ? void 0 : o.desktopSource) != null &&
			o.desktopSource.id !== (null == s ? void 0 : null === (e = s.desktopSource) || void 0 === e ? void 0 : e.id) &&
			(null != o.desktopSource.soundshareId && (0, et.isWindows)() && A.pn(o.desktopSource.soundshareId),
			eO.setGoLiveSource(null, eL)),
		(null == o ? void 0 : o.cameraSource) != null &&
			(o.cameraSource.videoDeviceGuid !==
				(null == s ? void 0 : null === (t = s.cameraSource) || void 0 === t ? void 0 : t.videoDeviceGuid) ||
				o.cameraSource.audioDeviceGuid !==
					(null == s ? void 0 : null === (n = s.cameraSource) || void 0 === n ? void 0 : n.audioDeviceGuid)) &&
			eO.setGoLiveSource(null, eL),
		(ek || i) && ((eB = (ek = i) ? t_(eP, e7().videoDeviceId) : eI.Av), eO.setVideoInputDevice(eB)),
		(a = s),
		null != s)
	) {
		let e = {
			resolution: s.quality.resolution,
			frameRate: s.quality.frameRate
		};
		if (null != s.desktopSource) {
			let { hdrCaptureMode: t } = B.Z.getCurrentConfig({ location: 'f627ab_2' }, { autoTrackExposure: !1 }),
				n = e7().videoHook;
			eO.setGoLiveSource(
				{
					desktopDescription: {
						id: s.desktopSource.id,
						soundshareId: s.desktopSource.soundshareId,
						useVideoHook: n,
						useGraphicsCapture: ti(),
						useLoopback: r.getExperimentalSoundshare(),
						useQuartzCapturer: !0,
						allowScreenCaptureKit: ta(),
						videoHookStaleFrameTimeoutMs: 500,
						graphicsCaptureStaleFrameTimeoutMs: eN,
						hdrCaptureMode: t
					},
					quality: e
				},
				eL
			);
		}
		null != s.cameraSource &&
			eO.setGoLiveSource(
				{
					cameraDescription: {
						videoDeviceGuid: s.cameraSource.videoDeviceGuid,
						audioDeviceGuid: s.cameraSource.audioDeviceGuid
					},
					quality: e
				},
				eL
			);
	}
}
function tn(e, t, n, r) {
	var i;
	let a = null !== (i = null == e ? void 0 : e.soundshareSession) && void 0 !== i ? i : '';
	null == e5[a] && (e5[a] = new Set());
	let s = null != t && !e5[a].has(t);
	s && e5[a].add(t),
		(null == t || s) &&
			$.default.track(eE.rMx.SOUNDSHARE_FAILED, {
				soundshare_failure_code: t,
				soundshare_failure_reason: n,
				soundshare_failure_will_retry: r,
				...(0, M.Z)(e)
			});
}
function tr(e) {
	let t = e7(),
		n = t.inputDeviceId;
	if (
		(e.setEchoCancellation(eo.Z.hasEchoCancellation(n) || t.echoCancellation),
		e.setNoiseSuppression(eo.Z.hasNoiseSuppression(n) || t.noiseSuppression),
		e.setAutomaticGainControl(eo.Z.hasAutomaticGainControl(n) || t.automaticGainControl),
		e.setNoiseCancellation(t.noiseCancellation),
		(0, et.isWeb)())
	) {
		let n = t.noiseCancellation ? -150 : -100;
		e.setSilenceThreshold(n);
	}
}
function ti() {
	return (0, et.isWindows)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, ef.nz);
}
function ta() {
	return (
		(0, et.isMac)() &&
		eO.supports(eI.AN.SCREEN_CAPTURE_KIT) &&
		h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, ef.C7)
	);
}
function ts() {
	var e;
	return (
		(null === (e = el.Z.getChannel(eQ)) || void 0 === e ? void 0 : e.type) !== eE.d4z.GUILD_STAGE_VOICE &&
		G.Z.supportsSimulcast()
	);
}
let to = new (class {
	start() {
		!this.started && ((this.started = !0), eO.on(I.aB.Silence, this.handleSilence));
	}
	stop() {
		this.started &&
			((this.started = !1),
			null != this.stateChangeTimeout && (clearTimeout(this.stateChangeTimeout), (this.stateChangeTimeout = null)),
			eO.removeListener(I.aB.Silence, this.handleSilence),
			g.Z.dispatch({
				type: 'AUDIO_INPUT_DETECTED',
				inputDetected: null
			}));
	}
	update() {
		let e = e7();
		!ej && ec.Z.getState() === eE.hes.RTC_CONNECTED && e.mode === eE.pM4.VOICE_ACTIVITY && e.silenceWarning
			? this.start()
			: this.stop();
	}
	reset() {
		this.stop(), this.update();
	}
	constructor() {
		eT(this, 'stateChangeTimeout', void 0),
			eT(this, 'noVoiceTimeout', 5000),
			eT(this, 'voiceTimeout', 1500),
			eT(this, 'started', !1),
			eT(this, 'handleSilence', (e) => {
				let t = !e;
				null != this.stateChangeTimeout && clearTimeout(this.stateChangeTimeout),
					(this.stateChangeTimeout = setTimeout(
						() => {
							(this.stateChangeTimeout = null),
								this.started &&
									(g.Z.dispatch({
										type: 'AUDIO_INPUT_DETECTED',
										inputDetected: t
									}),
									e && (eW = !0));
						},
						t ? this.voiceTimeout : this.noVoiceTimeout
					));
			});
	}
})();
function tl(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
		n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
		r = e7(t);
	return Object.assign(r, e), !__OVERLAY__ && n && m.K.set(eS, eR), r;
}
function tu() {
	!ey &&
		eO.enable().then(() =>
			g.Z.dispatch({
				type: 'MEDIA_ENGINE_SET_AUDIO_ENABLED',
				enabled: !0,
				unmute: !1
			})
		);
}
function tc(e) {
	return {
		id: eI.w5,
		index: 0,
		name: e,
		disabled: !0
	};
}
function td(e, t) {
	if (0 === e.length) {
		let e = tc(t);
		return { [e.id]: e };
	}
	return E()(e)
		.map((e) => ({
			id: e.id,
			index: e.index,
			name: e.name,
			disabled: !1
		}))
		.keyBy('id')
		.value();
}
function t_(e, t) {
	var n;
	let r = null !== (n = e[t]) && void 0 !== n ? n : E()(e).values().first();
	return null != r ? r.id : t;
}
function tE() {
	var e, t;
	let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
		r =
			null !== (e = X.Z.settings.audioContextSettings) && void 0 !== e
				? e
				: {
						user: {},
						stream: {}
					};
	for (let e of Object.keys(r)) {
		let i = e === ep.u0.USER ? eI.Yn.DEFAULT : eI.Yn.STREAM,
			a = i === eI.Yn.STREAM ? eI.Yh : eI.Qx,
			s = null !== (t = r[e]) && void 0 !== t ? t : {},
			{ localMutes: o, localVolumes: l } = e7(i);
		for (let [e, t] of Object.entries(s))
			null == (0, Q.Ky)(i, e) &&
				(t.muted ? (o[e] = !0) : delete o[e],
				t.volume !== a ? (l[e] = t.volume) : delete l[e],
				eO.eachConnection((n) => {
					n.setLocalVolume(e, t.volume), n.setLocalMute(e, t.muted);
				}, i));
		if (n)
			for (let e of new Set([...Object.keys(o), ...Object.keys(l)]))
				null == s[e] &&
					(delete o[e],
					delete l[e],
					eO.eachConnection((t) => {
						t.setLocalVolume(e, a), t.setLocalMute(e, !1);
					}, i));
		tl(
			{
				localMutes: o,
				localVolumes: l
			},
			i
		);
	}
}
function tf(e) {
	if (null == r)
		return (
			eg.info('Error: trying to get soundshare id before MediaEngineStore is instantiated.'),
			{
				soundshareId: null,
				soundshareSession: ''
			}
		);
	{
		let t = r.getExperimentalSoundshare() ? e : J.Z.getAudioPid(e),
			n = '';
		return (
			null != t && (n = J.Z.generateSessionFromPid(t)),
			{
				soundshareId: t,
				soundshareSession: n
			}
		);
	}
}
function th(e, t) {
	(0, et.isWindows)() &&
		A.YT(e, { soundshare_session: t }).then((t) => {
			null != t &&
				!b.ZP.shouldContinueWithoutElevatedProcessForPID(e) &&
				g.Z.wait(() => {
					g.Z.dispatch({
						type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
						errorMessage: t
					});
				});
		});
}
function tp() {
	let e = eI.Yn.DEFAULT,
		{ videoToggleStateMap: t } = e7(e);
	for (let [e, n] of Object.entries(t)) n === eE.ZUi.AUTO_PROBING && delete t[e];
	tl({ videoToggleStateMap: t }, e, !1);
}
function tI(e) {
	let t = e7();
	$.default.track(eE.rMx.VOICE_PROCESSING, {
		echo_cancellation: t.echoCancellation,
		noise_cancellation: t.noiseCancellation,
		noise_suppression: t.noiseSuppression,
		automatic_gain_control: t.automaticGainControl,
		location: e
	});
}
function tm(e) {
	let t = tl({ sidechainCompression: e });
	eO.setSidechainCompression(t.sidechainCompression);
}
function tT() {
	let e = e7(),
		t = e.inputDeviceId,
		n = eo.Z.hasEchoCancellation(t) || e.echoCancellation,
		r = eo.Z.hasNoiseSuppression(t) || e.noiseSuppression,
		i = eo.Z.hasAutomaticGainControl(t) || e.automaticGainControl,
		a = e.noiseCancellation;
	eO.setLoopback(e2, {
		echoCancellation: n,
		noiseSuppression: r,
		automaticGainControl: i,
		noiseCancellation: a
	});
}
function tg() {
	return eq || !1;
}
async function tS() {
	try {
		await er.ZP.ensureModule('discord_krisp'), er.ZP.requireModule('discord_krisp'), (eq = !0), r.emitChange();
	} catch (t) {
		eg.warn('Failed to load Krisp module: '.concat(t.message)), en.Z.captureException(t);
		let e = eI.H3.INITIALIZED;
		if (t.message.includes(': ')) {
			let n = parseInt(t.message.substring(t.message.indexOf(': ') + 1));
			e = isNaN(n) || 0 === n ? eI.H3.INITIALIZED : n;
		}
		$.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }), tl({ noiseCancellation: !1 });
	} finally {
		ez = !1;
	}
}
function tA(e) {
	let { section: t } = e;
	return t === eE.oAB.VOICE && tu(), !1;
}
class tN extends (l = p.ZP.Store) {
	initialize() {
		eO.on(I.aB.Connection, (e) => {
			var t, n;
			let { maxSyncDelayOverride: i } = V.Z.getCurrentConfig({ location: 'f627ab_3' }, { autoTrackExposure: !1 });
			i > 0 && eO.setMaxSyncDelayOverride(i), e8(e), te(e), tr(e);
			let s = e7();
			e.setAttenuation(s.attenuation, s.attenuateWhileSpeakingSelf, s.attenuateWhileSpeakingOthers),
				e.setQoS(s.qos),
				e.setExperimentalEncoders(s.experimentalEncoders),
				e.setHardwareH264(null === (t = s.hardwareEncoding) || void 0 === t || t),
				e.setSoftwareH264(null === (n = s.openH264) || void 0 === n || n);
			let { useExperimentalRateControl: o } = W.Z.getCurrentConfig({ location: 'f627ab_4' }, { autoTrackExposure: !1 });
			o && e.setExperimentFlag(eI.V8.VIDEOTOOLBOX_RATE_CONTROL, !0);
			let l = ec.Z.getGuildId(),
				{
					muteBeforeProcessing: u,
					pttBeforeProcessing: c,
					skipEncode: d
				} = (null != l ? x.Z : w.Z).getCurrentConfig(
					{
						location: 'setupMediaEngine',
						...(null != l && { guildId: l })
					},
					{ autoTrackExposure: !0 }
				);
			u && e.setExperimentFlag(eI.V8.MUTE_BEFORE_PROCESSING, !0),
				c && e.setExperimentFlag(eI.V8.PTT_BEFORE_PROCESSING, !0),
				d && e.setExperimentFlag(eI.V8.SKIP_ENCODE, !0);
			let {
				resetOnErrors: _,
				fallbackOnErrors: E,
				fallbackOnConsecutiveErrors: f
			} = j.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 });
			_ && e.setExperimentFlag(eI.V8.RESET_DECODER_ON_ERRORS, !0),
				E && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_ERRORS, !0),
				f && e.setExperimentFlag(eI.V8.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS, !0);
			if (e.context === eI.Yn.STREAM && ts()) {
				let t = G.Z.goliveSimulcastFlag();
				void 0 !== t && e.setExperimentFlag(t, !0);
			}
			(0, et.isWindows)()
				? (null == e4 ? void 0 : e4.startsWith('NVIDIA'))
					? e.setExperimentFlag(eI.V8.SIGNAL_AV1, !0)
					: (null == e4 ? void 0 : e4.startsWith('AMD')) &&
						  U.Z.getCurrentConfig({ location: 'setupMediaEngine' }, { autoTrackExposure: !0 }).signalAV1Support
						? e.setExperimentFlag(eI.V8.SIGNAL_AV1, !0)
						: e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0)
				: ((0, et.isMac)() || (0, et.isLinux)()) && e.setExperimentFlag(eI.V8.SIGNAL_AV1_DECODE, !0),
				(0, et.isWindows)() && e.setExperimentFlag(eI.V8.SIGNAL_AV1_HARDWARE_DECODE, !0);
			let { allowSettingFullbandAndroid: h } = F.Z.getCurrentConfig(
				{ location: 'f627ab_14' },
				{ autoTrackExposure: !0 }
			);
			if ((h && eO.setHasFullbandPerformance((0, y.b)()), e.setRemoteAudioHistory(0), (0, R.Z)(r))) {
				let t = O.Z.getSettings();
				e.setExperimentFlag(eI.V8.STREAMER_CLIP, t.clipsEnabled);
				let { enableViewerClipping: n } = K.Z.getCurrentConfig({ location: 'f627ab_15' }, { autoTrackExposure: !1 });
				e.setViewerSideClip(n), e.setClipsKeyFrameInterval(eI.ux);
				let { allowQualityDecoupling: r } = v.Z.getCurrentConfig(
					{ location: 'MediaEngineStore_setupMediaEngine' },
					{ autoTrackExposure: !0 }
				);
				e.setQualityDecoupling(r);
			}
			for (let t of ((s = e7(e.context)), e.setPostponeDecodeLevel(100), Object.keys(s.localMutes)))
				t !== ea.default.getId() && e.setLocalMute(t, s.localMutes[t]);
			for (let t of Object.keys(s.localVolumes)) t !== ea.default.getId() && e.setLocalVolume(t, s.localVolumes[t]);
			for (let t of Object.keys(s.localPans)) {
				let n = s.localPans[t];
				e.setLocalPan(t, n.left, n.right);
			}
			for (let t of Object.keys(s.disabledLocalVideos)) e.setLocalVideoDisabled(t, s.disabledLocalVideos[t]);
			e.on(I.Sh.Speaking, (t, n) => {
				g.Z.dispatch({
					type: 'SPEAKING',
					context: e.context,
					userId: t,
					speakingFlags: n
				});
			}),
				e.context === eI.Yn.DEFAULT &&
					((eV = !1),
					e.on(I.Sh.SpeakingWhileMuted, () => {
						(eV = !0), r.emitChange();
					})),
				e.on(I.Sh.DesktopSourceEnd, () => {
					g.Z.dispatch({
						type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
						settings: { context: e.context }
					});
				}),
				e.on(I.Sh.SoundshareAttached, () => {
					(null == a ? void 0 : a.desktopSource) != null &&
						$.default.track(eE.rMx.SOUNDSHARE_ATTACHED, (0, M.Z)(null == a ? void 0 : a.desktopSource));
				}),
				e.on(I.Sh.SoundshareFailed, (e) => {
					let { failureCode: t, failureReason: n, willRetry: r } = e;
					tn(null == a ? void 0 : a.desktopSource, t, n, r);
				}),
				e.on(I.Sh.SoundshareSpeaking, () => {
					(null == a ? void 0 : a.desktopSource) != null &&
						($.default.track(eE.rMx.SOUNDSHARE_TRANSMITTING, (0, M.Z)(null == a ? void 0 : a.desktopSource)),
						null != eu.Z.getHookError(eE.K3D.SOUND) &&
							g.Z.wait(() => g.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
				});
			let p = new T.V7();
			e.on(I.Sh.SoundshareTrace, (e) => {
				switch (e.type) {
					case 'soundshare_attach_requested':
						p.start(e6, () => {
							g.Z.dispatch({
								type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
								errorMessage: 'Sound Hook Failed'
							});
						});
						break;
					case 'soundshare_recv_failed':
						let t = e.reason,
							n = e.code,
							r = e.retry;
						(null == a ? void 0 : a.desktopSource) != null &&
							(tn(null == a ? void 0 : a.desktopSource, n, t, r),
							!r &&
								(p.stop(),
								g.Z.wait(() =>
									g.Z.dispatch({
										type: 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
										errorMessage: t,
										errorCode: n
									})
								)));
						break;
					case 'soundshare_state_transition':
						4 === e.newState &&
							(p.stop(), g.Z.wait(() => g.Z.dispatch({ type: 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING' })));
				}
			}),
				e.on(I.Sh.InteractionRequired, (e) => {
					g.Z.dispatch({
						type: 'MEDIA_ENGINE_INTERACTION_REQUIRED',
						required: e
					});
				}),
				e.on(I.Sh.VideoHookInitialize, (e, t, n, r, i, s) => {
					(null == a ? void 0 : a.desktopSource) != null &&
						$.default.track(eE.rMx.VIDEOHOOK_INITIALIZED, {
							backend: e,
							format: t,
							framebuffer_format: n,
							sample_count: r,
							success: i,
							reinitialization: s,
							...(0, M.Z)(null == a ? void 0 : a.desktopSource)
						});
				}),
				e.on(I.Sh.NoiseCancellationError, (e) => {
					eg.warn('noisecancellererror event: '.concat(e)),
						(eX = !0),
						$.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
						g.Z.dispatch({
							type: 'AUDIO_SET_NOISE_SUPPRESSION',
							enabled: !0
						}),
						g.Z.dispatch({
							type: 'AUDIO_SET_NOISE_CANCELLATION',
							enabled: !1
						}),
						g.Z.dispatch({
							type: 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR',
							code: e
						});
				}),
				e.on(I.Sh.VoiceActivityDetectorError, (e) => {
					eg.warn('voiceactivitydetectorerror event: '.concat(e)),
						$.default.track(eE.rMx.VOICE_PROCESSING, { noise_canceller_error: e }),
						g.Z.dispatch({
							type: 'AUDIO_SET_MODE',
							context: eI.Yn.DEFAULT,
							mode: eE.pM4.VOICE_ACTIVITY,
							options: {
								...e7(eI.Yn.DEFAULT).modeOptions,
								vadUseKrisp: !1
							}
						}),
						g.Z.dispatch({
							type: 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR',
							code: e
						});
				}),
				e.on(I.Sh.VideoState, (t) => {
					g.Z.dispatch({
						type: 'MEDIA_ENGINE_VIDEO_STATE_CHANGED',
						videoState: t,
						context: e.context
					});
				}),
				e.on(I.Sh.Destroy, () => {
					p.stop();
				}),
				e.setBitRate(es.Z.bitrate),
				e.applyVideoQualityMode(e_.Z.mode);
		}),
			eO.on(I.aB.DeviceChange, (e, t, n) => {
				g.Z.dispatch({
					type: 'MEDIA_ENGINE_DEVICES',
					inputDevices: e,
					outputDevices: t,
					videoDevices: n
				});
			}),
			eO.on(I.aB.VolumeChange, (e, t) => {
				g.Z.dispatch({
					type: 'AUDIO_VOLUME_CHANGE',
					inputVolume: e,
					outputVolume: t
				});
			}),
			eO.on(I.aB.DesktopSourceEnd, () => {
				g.Z.dispatch({
					type: 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE',
					settings: null
				});
			}),
			eO.on(I.aB.AudioPermission, (e) => {
				(eJ = !0),
					g.Z.dispatch({
						type: 'MEDIA_ENGINE_PERMISSION',
						kind: 'audio',
						granted: e
					});
			}),
			eO.on(I.aB.VideoPermission, (e) => {
				g.Z.dispatch({
					type: 'MEDIA_ENGINE_PERMISSION',
					kind: 'video',
					granted: e
				});
			}),
			eO.on(I.aB.WatchdogTimeout, async () => {
				let e;
				try {
					await J.Z.submitLiveCrashReport({ message: { message: 'Voice Watchdog Timeout' } });
				} catch (t) {
					'number' == typeof t.status && (e = t.status);
				}
				eg.warn('Watchdog timeout, report submission status: '.concat(null != e ? e : 200)),
					$.default.track(eE.rMx.VOICE_WATCHDOG_TIMEOUT, { minidump_submission_error: e });
			}),
			eO.on(I.aB.VideoInputInitialized, (e) => {
				$.default.track(eE.rMx.VIDEO_INPUT_INITIALIZED, {
					device_name: e.description.name,
					time_to_first_frame_ms: e.initializationTimerExpired
						? null
						: Math.round(e.timeToFirstFrame * ee.Z.Millis.SECOND),
					timed_out: e.initializationTimerExpired,
					activity: e.entropy
				});
			}),
			eO.on(I.aB.ClipsRecordingRestartNeeded, () => {
				g.Z.dispatch({ type: 'CLIPS_RESTART' });
			}),
			eO.on(I.aB.ClipsInitFailure, (e, t) => {
				g.Z.wait(() => {
					g.Z.dispatch({
						type: 'CLIPS_INIT_FAILURE',
						errMsg: e,
						applicationName: t
					});
				});
			}),
			eO.on(I.aB.ClipsRecordingEnded, (e, t) => {
				var n, r;
				(null == s ? void 0 : null === (n = s.desktopSource) || void 0 === n ? void 0 : n.id) === e &&
					(null != t &&
						(null == a ? void 0 : null === (r = a.desktopSource) || void 0 === r ? void 0 : r.soundshareId) !== t &&
						A.pn(t),
					(s = null));
			}),
			eO.on(I.aB.NativeScreenSharePickerUpdate, (e) => {
				H.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerUpdate' }),
					g.Z.dispatch({
						type: 'NATIVE_SCREEN_SHARE_PICKER_UPDATE',
						existing: e
					});
			}),
			eO.on(I.aB.NativeScreenSharePickerCancel, (e) => {
				H.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerCancel' }),
					g.Z.dispatch({
						type: 'NATIVE_SCREEN_SHARE_PICKER_CANCEL',
						existing: e
					});
			}),
			eO.on(I.aB.NativeScreenSharePickerError, (e) => {
				H.Z.trackExposure({ location: 'MediaEngineStore_NativeScreenSharePickerError' }),
					g.Z.dispatch({
						type: 'NATIVE_SCREEN_SHARE_PICKER_ERROR',
						error: e
					});
			}),
			to.reset(),
			(0, ed.q)().then((e) => {
				null != e && (e4 = e.gpu_brand);
			}),
			!(function () {
				var e;
				let t = m.K.get('audio');
				null != t && (m.K.set(eS, { [eI.Yn.DEFAULT]: t }), m.K.remove('audio')),
					(eR = null !== (e = m.K.get(eS)) && void 0 !== e ? e : {}),
					E().each(eR, (e) => {
						if (
							(E().defaultsDeep(e, ev()),
							null != e.modeOptions &&
								'string' == typeof e.modeOptions.shortcut &&
								(e.modeOptions.shortcut = (0, ei.Kd)(e.modeOptions.shortcut)),
							null != e.modeOptions &&
								4 !== e.vadUseKrispSettingVersion &&
								((e.vadUseKrispSettingVersion = 4), (e.modeOptions.vadUseKrisp = !0)),
							!e.qosMigrated && ((e.qosMigrated = !0), (e.qos = !1)),
							!e.vadThrehsoldMigrated)
						) {
							var t;
							(e.vadThrehsoldMigrated = !0),
								(null === (t = e.modeOptions) || void 0 === t ? void 0 : t.threshold) === -40 &&
									(e.modeOptions.threshold = -60);
						}
						(0, et.isWeb)()
							? 1 !== e.ncUseKrispjsSettingVersion &&
								((e.ncUseKrispjsSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0))
							: 1 !== e.ncUseKrispSettingVersion &&
								((e.ncUseKrispSettingVersion = 1), (e.noiseSuppression = !1), (e.noiseCancellation = !0)),
							1 !== e.hardwareEnabledVersion && ((e.hardwareH264 = !0), (e.hardwareEnabledVersion = 1)),
							null == e.hardwareEncoding && (e.hardwareEncoding = e.hardwareH264);
					}),
					(function () {
						var e, t, n;
						let r = e7();
						eO.setAudioInputDevice(r.inputDeviceId),
							eO.setAudioOutputDevice(r.outputDeviceId),
							tt(),
							eO.setInputVolume(r.inputVolume),
							eO.setOutputVolume(r.outputVolume),
							eO.setH264Enabled(null === (e = r.hardwareEncoding) || void 0 === e || e || r.openH264),
							eO.setAv1Enabled(null === (t = r.hardwareEncoding) || void 0 === t || t),
							eO.setH265Enabled(null === (n = r.hardwareEncoding) || void 0 === n || n),
							eO.setAecDump(r.aecDumpEnabled),
							eO.setSidechainCompression(r.sidechainCompression);
					})();
			})(),
			((0, et.isWindows)() ||
				(0, et.isLinux)() ||
				((0, et.isMac)() && h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, '>=21.0.0'))) &&
			!__OVERLAY__ &&
			!ez &&
			!eq
				? ((ez = !0), tS())
				: (0, et.isWeb)() && eO.supports(eI.AN.NOISE_CANCELLATION)
					? ((eq = !0), r.emitChange())
					: (0, et.isWeb)() && tl({ noiseCancellation: !1 }),
			tp(),
			(e3 = {
				[eI.AN.VIDEO]: eO.supports(eI.AN.VIDEO),
				[eI.AN.DESKTOP_CAPTURE]: eO.supports(eI.AN.DESKTOP_CAPTURE),
				[eI.AN.HYBRID_VIDEO]: eO.supports(eI.AN.HYBRID_VIDEO)
			}),
			this.waitFor(ea.default, eo.Z, el.Z, eu.Z, ec.Z, b.ZP, q.Z.storage, X.Z, D.Z, O.Z);
	}
	supports(e) {
		return eO.supports(e);
	}
	supportsInApp(e) {
		return e3[e] || eO.supports(e);
	}
	isSupported() {
		return eO.supported();
	}
	isExperimentalEncodersSupported() {
		return eO.supports(eI.AN.EXPERIMENTAL_ENCODERS);
	}
	isNoiseSuppressionSupported() {
		return eO.supports(eI.AN.NOISE_SUPPRESSION);
	}
	isNoiseCancellationSupported() {
		return eq || !1;
	}
	isNoiseCancellationError() {
		return eX;
	}
	isAutomaticGainControlSupported() {
		return eO.supports(eI.AN.AUTOMATIC_GAIN_CONTROL);
	}
	isAdvancedVoiceActivitySupported() {
		return eq || !1;
	}
	isAecDumpSupported() {
		return eO.supports(eI.AN.AEC_DUMP);
	}
	isSimulcastSupported() {
		return eO.supports(eI.AN.VIDEO) && eO.supports(eI.AN.SIMULCAST);
	}
	getAecDump() {
		return e7().aecDumpEnabled;
	}
	getMediaEngine() {
		return eO;
	}
	getVideoComponent() {
		return eO.supports(eI.AN.DIRECT_VIDEO) && eO.setUseDirectVideo(!0), eO.Video;
	}
	getCameraComponent() {
		return eO.supports(eI.AN.DIRECT_VIDEO) && eO.setUseDirectVideo(!0), eO.Camera;
	}
	isEnabled() {
		return ey;
	}
	isMute() {
		return this.isSelfMute() || eU;
	}
	isDeaf() {
		return this.isSelfDeaf() || eG;
	}
	hasContext(e) {
		return null != eR[e];
	}
	isSelfMutedTemporarily() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
		return e === eI.Yn.DEFAULT && ew;
	}
	isSelfMute() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
		return (
			!this.isEnabled() ||
			e7(e).mute ||
			!q.Z.didHavePermission(eh.Eu.AUDIO) ||
			this.isSelfDeaf(e) ||
			(e === eI.Yn.DEFAULT && ex)
		);
	}
	shouldSkipMuteUnmuteSound() {
		let { airpodsMuteSupported: e } = P.Z.getCurrentConfig(
			{ location: 'shouldSkipMuteUnmuteSound' },
			{ autoTrackExposure: !0 }
		);
		return !!e && eF;
	}
	notifyMuteUnmuteSoundWasSkipped() {
		eF = !1;
	}
	isHardwareMute() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
		return !this.isMute() && !this.isSelfMutedTemporarily(e) && eo.Z.isHardwareMute(this.getInputDeviceId());
	}
	isSelfDeaf() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
		return !this.isSupported() || e7(e).deaf;
	}
	isVideoEnabled() {
		return ek && eZ;
	}
	isVideoAvailable() {
		return Object.values(eP).some((e) => {
			let { disabled: t } = e;
			return !t;
		});
	}
	isScreenSharing() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.STREAM;
		return eL === e && null != a;
	}
	isSoundSharing() {
		var e;
		let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.STREAM;
		return eL === t && null != a && (null === (e = a.desktopSource) || void 0 === e ? void 0 : e.soundshareId) != null;
	}
	isLocalMute(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
		return e !== ea.default.getId() && (e7(t).localMutes[e] || !1);
	}
	supportsDisableLocalVideo() {
		return eO.supports(eI.AN.DISABLE_VIDEO);
	}
	isLocalVideoDisabled(e) {
		var t;
		let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
		return null !== (t = e7(n).disabledLocalVideos[e]) && void 0 !== t && t;
	}
	getVideoToggleState(e) {
		var t;
		let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
		return null !== (t = e7(n).videoToggleStateMap[e]) && void 0 !== t ? t : eE.ZUi.NONE;
	}
	isLocalVideoAutoDisabled(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT;
		return t === eI.Yn.DEFAULT && e0.has(e);
	}
	isAnyLocalVideoAutoDisabled() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
		return e === eI.Yn.DEFAULT && e0.size > 0;
	}
	isMediaFilterSettingLoading() {
		return e$;
	}
	isNativeAudioPermissionReady() {
		return eJ;
	}
	getGoLiveSource() {
		return a;
	}
	getGoLiveContext() {
		return eL;
	}
	getLocalPan(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
			n = e7(t).localPans[e];
		return null != n ? n : eA;
	}
	getLocalVolume(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eI.Yn.DEFAULT,
			n = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
			r = e7(t).localVolumes[e];
		return null != r ? r : n;
	}
	getInputVolume() {
		return e7().inputVolume;
	}
	getOutputVolume() {
		return e7().outputVolume;
	}
	getMode() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
		return e7(e).mode;
	}
	getModeOptions() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
		return e7(e).modeOptions;
	}
	getShortcuts() {
		let e = {};
		return (
			E().each(eR, (t, n) => {
				let {
					mode: r,
					modeOptions: { shortcut: i }
				} = t;
				r === eE.pM4.PUSH_TO_TALK && eC.has(n) && (e[n] = i);
			}),
			e
		);
	}
	getInputDeviceId() {
		return t_(eb, e7().inputDeviceId);
	}
	getOutputDeviceId() {
		return t_(eM, e7().outputDeviceId);
	}
	getVideoDeviceId() {
		return t_(eP, e7().videoDeviceId);
	}
	getInputDevices() {
		return eb;
	}
	getOutputDevices() {
		return eM;
	}
	getVideoDevices() {
		return eP;
	}
	getEchoCancellation() {
		let e = e7();
		return eo.Z.hasEchoCancellation(e.inputDeviceId) || e.echoCancellation;
	}
	getSidechainCompression() {
		return e7().sidechainCompression;
	}
	getH265Enabled() {
		return e7().h265Enabled;
	}
	getLoopback() {
		return eO.getLoopback();
	}
	getNoiseSuppression() {
		let e = e7();
		return eo.Z.hasNoiseSuppression(e.inputDeviceId) || e.noiseSuppression;
	}
	getAutomaticGainControl() {
		let e = e7();
		return eo.Z.hasAutomaticGainControl(e.inputDeviceId) || e.automaticGainControl;
	}
	getNoiseCancellation() {
		return e7().noiseCancellation;
	}
	getExperimentalEncoders() {
		return e7().experimentalEncoders;
	}
	getHardwareEncoding() {
		var e;
		return null === (e = e7().hardwareEncoding) || void 0 === e || e;
	}
	getEnableSilenceWarning() {
		return e7().silenceWarning;
	}
	getDebugLogging() {
		return eO.getDebugLogging();
	}
	getQoS() {
		return e7().qos;
	}
	getAttenuation() {
		return e7().attenuation;
	}
	getAttenuateWhileSpeakingSelf() {
		return e7().attenuateWhileSpeakingSelf;
	}
	getAttenuateWhileSpeakingOthers() {
		return e7().attenuateWhileSpeakingOthers;
	}
	getAudioSubsystem() {
		return eO.getAudioSubsystem();
	}
	getMLSSigningKey(e, t) {
		return eO.getMLSSigningKey(e, t);
	}
	getSettings() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT;
		return e7(e);
	}
	getState() {
		return {
			settingsByContext: eR,
			inputDevices: eb,
			outputDevices: eM,
			appSupported: e3,
			krispModuleLoaded: eq,
			goLiveSource: a,
			goLiveContext: eL
		};
	}
	getInputDetected() {
		return eY;
	}
	getNoInputDetectedNotice() {
		return eW;
	}
	getPacketDelay() {
		return et.isPlatformEmbedded || this.getMode() !== eE.pM4.VOICE_ACTIVITY ? 0 : this.getModeOptions().vadLeading;
	}
	setCanHavePriority(e, t) {
		eO.eachConnection((n) => n.setCanHavePriority(e, t));
	}
	isInteractionRequired() {
		return eD;
	}
	getVideoHook() {
		return e7().videoHook;
	}
	supportsVideoHook() {
		return eO.supports(eI.AN.VIDEO_HOOK);
	}
	getExperimentalSoundshare() {
		let e = e7().experimentalSoundshare2;
		return this.supportsExperimentalSoundshare() && (null == e || e);
	}
	supportsExperimentalSoundshare() {
		return (
			eO.supports(eI.AN.EXPERIMENTAL_SOUNDSHARE) &&
			h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, ef.I9)
		);
	}
	getOpenH264() {
		return e7().openH264;
	}
	getEverSpeakingWhileMuted() {
		return eV;
	}
	supportsScreenSoundshare() {
		return (
			((0, et.isMac)() &&
				eO.supports(eI.AN.SOUNDSHARE) &&
				h().satisfies(null === S.Z || void 0 === S.Z ? void 0 : S.Z.os.release, ef.yG) &&
				ta()) ||
			((0, et.isWindows)() && eO.supports(eI.AN.SCREEN_SOUNDSHARE) && this.getExperimentalSoundshare())
		);
	}
	getVideoStreamParameters() {
		let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eI.Yn.DEFAULT,
			t = this.supports(eI.AN.VIDEO)
				? [
						{
							rid: '100',
							type: e === eI.Yn.DEFAULT ? eI.Tr.VIDEO : eI.Tr.SCREEN,
							quality: 100
						}
					]
				: [];
		return (
			this.isSimulcastSupported() &&
				(e === eI.Yn.DEFAULT || ts()) &&
				t.push({
					rid: '50',
					type: e === eI.Yn.DEFAULT ? eI.Tr.VIDEO : eI.Tr.SCREEN,
					quality: 50
				}),
			t
		);
	}
	getSupportedSecureFramesProtocolVersion(e) {
		var t;
		let n = eO.getSupportedSecureFramesProtocolVersion(),
			r = Z.m.getCurrentConfig({ location: 'MediaEngineStore' }),
			i =
				null != e
					? Z.N.getCurrentConfig({
							guildId: e,
							location: 'MediaEngineStore'
						})
					: null,
			a = r.canSupportSecureFrames || (null == i ? void 0 : i.canSupportSecureFrames),
			s = r.canSupportMls || (null == i ? void 0 : i.canSupportMls),
			o = Math.max(
				r.protocolVersionFloor,
				null !== (t = null == i ? void 0 : i.protocolVersionFloor) && void 0 !== t ? t : 0
			);
		return a && n % 100 >= o ? (s ? n : n % 100) : 0;
	}
	hasClipsSource() {
		return null != s;
	}
}
eT(tN, 'displayName', 'MediaEngineStore'),
	(r = new tN(g.Z, {
		VOICE_CHANNEL_SELECT: function (e) {
			let { guildId: t, channelId: n, currentVoiceChannelId: r, video: i } = e;
			if ((r !== n && tt(i, null), null != t || null == n)) {
				eK = !1;
				return;
			}
			if (eK) return;
			eK = !0;
			let a = e7();
			(a.mute || a.deaf) &&
				(tl({
					deaf: !1,
					mute: !1
				}),
				eO.eachConnection(te));
		},
		VOICE_STATE_UPDATES: function (e) {
			let { voiceStates: t } = e;
			return t.reduce(
				(e, t) =>
					i === t.sessionId
						? ((eU = t.mute || t.suppress),
							(eG = t.deaf),
							eO.eachConnection(te),
							tt(!(null != t.guildId && null != t.channelId && null != eQ && eQ !== t.channelId) && ek),
							(eQ = t.channelId),
							!0)
						: (!__OVERLAY__ && t.userId === ea.default.getId() && null == ec.Z.getChannelId() && tt(!1, null), e),
				!1
			);
		},
		CONNECTION_OPEN: function (e) {
			(i = e.sessionId),
				(eU = !1),
				(eG = !1),
				Y.Z.subscribe({ location: 'handleConnectionOpen' }, (e) => {
					let t = e7();
					!e.sidechainAvailable && t.sidechainCompression
						? (tl({ sidechainCompressionSettingVersion: 0 }), tm(!1))
						: e.sidechainAvailable &&
							t.sidechainCompressionSettingVersion < 1 &&
							(tl({ sidechainCompressionSettingVersion: 1 }), tm(e.sidechainEnabled));
				}),
				tE();
		},
		CONNECTION_CLOSED: function () {
			i = null;
		},
		RTC_CONNECTION_STATE: function (e) {
			switch (e.state) {
				case eE.hes.CONNECTING:
					tu();
					break;
				case eE.hes.RTC_CONNECTING:
					(ej = !1), (eW = !1);
					break;
				case eE.hes.RTC_CONNECTED:
					tt();
					break;
				case eE.hes.DISCONNECTED:
					(function () {
						if (0 === e0.size) return;
						let e = eI.Yn.DEFAULT,
							{ disabledLocalVideos: t } = e7(e);
						e0.forEach((n) => {
							d()(t[n], 'If you are auto-disabled, then you are also disabled.'),
								delete t[n],
								eO.eachConnection((e) => e.setLocalVideoDisabled(n, !1), e);
						}),
							e0.clear(),
							tl({ disabledLocalVideos: t }, e, !1);
					})(),
						tp();
			}
			to.update();
		},
		AUDIO_SET_TEMPORARY_SELF_MUTE: function (e) {
			let { mute: t } = e;
			(ew = t), eO.eachConnection(te);
		},
		AUDIO_TOGGLE_SELF_MUTE: function (e) {
			let { context: t, skipMuteUnmuteSoundEffect: n } = e,
				{ mute: r, deaf: i } = e7(t);
			if (t === eI.Yn.DEFAULT && (q.Z.requestPermission(eh.Eu.AUDIO), ex)) return !1;
			!(r = !i && !r) && (i = !1),
				n && (eF = !0),
				tl(
					{
						mute: r,
						deaf: i
					},
					t
				),
				eO.eachConnection(te);
		},
		AUDIO_SET_SELF_MUTE: function (e) {
			let { context: t, mute: n } = e;
			tl({ mute: n }, t), eO.eachConnection(te);
		},
		AUDIO_TOGGLE_SELF_DEAF: function (e) {
			let { context: t } = e;
			tl({ deaf: !e7(t).deaf }, t), eO.eachConnection(te);
		},
		AUDIO_TOGGLE_LOCAL_MUTE: function (e) {
			let { context: t, userId: n } = e;
			if (n === ea.default.getId()) return;
			let { localMutes: r } = e7(t);
			r[n] ? delete r[n] : (r[n] = !0),
				tl({ localMutes: r }, t),
				eO.eachConnection((e) => e.setLocalMute(n, r[n] || !1), t);
		},
		AUDIO_SET_LOCAL_VIDEO_DISABLED: function (e) {
			var t, n, r, i, a, s, o;
			let { context: l, userId: u, videoToggleState: c, persist: _, isAutomatic: E } = e;
			d()(!(_ && E), 'These are not allowed to both be true.');
			let f = c === eE.ZUi.DISABLED,
				{ disabledLocalVideos: h } = e7(l),
				p = null !== (t = h[u]) && void 0 !== t && t,
				I = e0.has(u),
				m = c === eE.ZUi.AUTO_ENABLED || c === eE.ZUi.MANUAL_ENABLED;
			eg.info(
				'disableVideo='
					.concat(f, ' currentlyDisabled=')
					.concat(p, ' currentlyAutoDisabled=')
					.concat(I, ', isVideoShown=')
					.concat(m)
			),
				d()(!(I && !p), 'If you are auto-disabled, then you are also disabled.');
			let T = f !== p,
				g = l === eI.Yn.DEFAULT,
				S = E && T && g,
				A = _ && T && g;
			eg.info(
				'changed='
					.concat(T, ' isDefaultContext=')
					.concat(g, ' isUpdateCausedByVideoHealthManager=')
					.concat(S, ' isManualToggleByUser=')
					.concat(A)
			);
			let { videoToggleStateMap: N } = e7(l);
			if (
				(N[u] === eE.ZUi.AUTO_PROBING &&
					c === eE.ZUi.AUTO_ENABLED &&
					(0, z.Z)(u, f ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, m),
				(N[u] = c),
				tl({ videoToggleStateMap: N }, l, _),
				c === eE.ZUi.AUTO_PROBING
					? null === (n = ec.Z.getRTCConnection()) || void 0 === n || n.pauseStatsCollectionForUser(u, !0)
					: null === (r = ec.Z.getRTCConnection()) || void 0 === r || r.pauseStatsCollectionForUser(u, !1),
				!e1 &&
					(eg.info('isAutoDisableAllowed='.concat(e1, ' - disabling VideoHealthManager')),
					null === (a = ec.Z.getRTCConnection()) ||
						void 0 === a ||
						null === (i = a.getVideoHealthManager()) ||
						void 0 === i ||
						i.disable()),
				S)
			) {
				if ((!f && !I) || (f && !e1)) return;
				(0, z.Z)(u, f ? eI.fC.AUTO_DISABLE : eI.fC.AUTO_ENABLE, m), f ? e0.add(u) : e0.delete(u);
			} else
				A &&
					(I && !f
						? (eg.info('disallowing auto-disable for this session because of manual override by user'),
							(e1 = !1),
							null === (o = ec.Z.getRTCConnection()) ||
								void 0 === o ||
								null === (s = o.getVideoHealthManager()) ||
								void 0 === s ||
								s.disable(),
							(0, z.Z)(u, eI.fC.MANUAL_REENABLE, m))
						: (0, z.Z)(u, f ? eI.fC.MANUAL_DISABLE : eI.fC.MANUAL_ENABLE, m));
			g && !f && e0.delete(u),
				f ? (h[u] = !0) : delete h[u],
				tl({ disabledLocalVideos: h }, l, _),
				eO.eachConnection((e) => {
					var t;
					return e.setLocalVideoDisabled(u, null !== (t = h[u]) && void 0 !== t && t);
				}, l);
		},
		AUDIO_SET_LOCAL_VOLUME: function (e) {
			let { context: t, userId: n, volume: r } = e;
			if (n === ea.default.getId()) return;
			let i = t === eI.Yn.STREAM ? eI.Yh : eI.Qx,
				{ localVolumes: a } = e7(t);
			r === i ? delete a[n] : (a[n] = r),
				tl({ localVolumes: a }, t),
				eO.eachConnection((e) => e.setLocalVolume(n, r), t);
		},
		AUDIO_SET_LOCAL_PAN: function (e) {
			let { context: t, userId: n, left: r, right: i } = e,
				{ localPans: a } = e7(t);
			(a[n] = {
				left: r,
				right: i
			}),
				tl({ localPans: a }, t),
				eO.eachConnection((e) => e.setLocalPan(n, r, i), t);
		},
		AUDIO_SET_MODE: function (e) {
			let { context: t, mode: n, options: r } = e;
			tl(
				{
					mode: n,
					modeOptions: r
				},
				t
			),
				eO.eachConnection(e8),
				to.update();
		},
		AUDIO_SET_INPUT_VOLUME: function (e) {
			let { volume: t } = e;
			tl({ inputVolume: e9(t) }), eO.setInputVolume(t);
		},
		AUDIO_SET_OUTPUT_VOLUME: function (e) {
			let { volume: t } = e;
			tl({ outputVolume: t }), eO.setOutputVolume(t);
		},
		AUDIO_SET_INPUT_DEVICE: function (e) {
			let { id: t } = e;
			tl({ inputDeviceId: (t = t_(eb, t)) }), eO.setAudioInputDevice(t);
		},
		AUDIO_SET_OUTPUT_DEVICE: function (e) {
			let { id: t } = e;
			tl({ outputDeviceId: (t = t_(eM, t)) }), eO.setAudioOutputDevice(t);
		},
		AUDIO_SET_ECHO_CANCELLATION: function (e) {
			let t = tl({ echoCancellation: e.enabled });
			eO.eachConnection((e) => e.setEchoCancellation(t.echoCancellation)), tT(), tI(e.location);
		},
		AUDIO_SET_SIDECHAIN_COMPRESSION: function (e) {
			tm(e.enabled);
		},
		AUDIO_SET_LOOPBACK: function (e) {
			let { enabled: t } = e;
			return (e2 = t), tT();
		},
		AUDIO_SET_NOISE_SUPPRESSION: function (e) {
			let t = tl({ noiseSuppression: e.enabled });
			eO.eachConnection((e) => e.setNoiseSuppression(t.noiseSuppression)), tT(), tI(e.location);
		},
		AUDIO_SET_AUTOMATIC_GAIN_CONTROL: function (e) {
			let t = tl({ automaticGainControl: e.enabled });
			eO.eachConnection((e) => e.setAutomaticGainControl(t.automaticGainControl)), tT(), tI(e.location);
		},
		AUDIO_SET_NOISE_CANCELLATION: function (e) {
			let t = tl({ noiseCancellation: e.enabled });
			eO.eachConnection((e) => e.setNoiseCancellation(t.noiseCancellation)), tT(), tI(e.location);
		},
		AUDIO_SET_DISPLAY_SILENCE_WARNING: function (e) {
			tl({ silenceWarning: e.enabled }), to.update();
		},
		AUDIO_SET_DEBUG_LOGGING: function (e) {
			eO.setDebugLogging(e.enabled);
		},
		MEDIA_ENGINE_SET_VIDEO_HOOK: function (e) {
			tl({ videoHook: e.enabled });
		},
		MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE: function (e) {
			tl({ experimentalSoundshare2: e.enabled });
		},
		AUDIO_SET_ATTENUATION: function (e) {
			let { attenuation: t, attenuateWhileSpeakingSelf: n, attenuateWhileSpeakingOthers: r } = e,
				i = tl({
					attenuation: t,
					attenuateWhileSpeakingSelf: n,
					attenuateWhileSpeakingOthers: r
				});
			eO.eachConnection((e) =>
				e.setAttenuation(i.attenuation, i.attenuateWhileSpeakingSelf, i.attenuateWhileSpeakingOthers)
			);
		},
		AUDIO_SET_QOS: function (e) {
			let { enabled: t } = e;
			tl({ qos: t }), eO.eachConnection((e) => e.setQoS(t));
		},
		MEDIA_ENGINE_DEVICES: function (e) {
			let { inputDevices: t, outputDevices: n, videoDevices: r } = e;
			!(function (e) {
				let t = eb;
				if (((eb = td(e, em.Z.Messages.NO_INPUT_DEVICES)), !E().isEqual(eb, t))) {
					let e = e7(),
						t = t_(eb, e.inputDeviceId);
					eO.setAudioInputDevice(t);
				}
			})(t),
				!(function (e) {
					let t = eM;
					if (((eM = td(e, em.Z.Messages.NO_OUTPUT_DEVICES)), !E().isEqual(eM, t))) {
						let e = e7(),
							t = t_(eM, e.outputDeviceId);
						eO.setAudioOutputDevice(t);
					}
				})(n),
				!(function (e) {
					eZ = e.length > 0;
					let t = eP;
					if (((eP = td(e, em.Z.Messages.NO_VIDEO_DEVICES)), ek && !E().isEqual(eP, t))) {
						var n;
						let e = void 0 !== eP[eB],
							r = eB === eI.w5 && (null === (n = t[eI.w5]) || void 0 === n ? void 0 : n.disabled);
						tt(e || r);
					}
				})(r);
		},
		AUDIO_VOLUME_CHANGE: function (e) {
			let { inputVolume: t, outputVolume: n } = e;
			tl({
				inputVolume: e9(t),
				outputVolume: n
			});
		},
		AUDIO_RESET: function () {
			m.K.remove(eS), location.reload();
		},
		AUDIO_INPUT_DETECTED: function (e) {
			let { inputDetected: t } = e;
			(eY = t), !ej && eY && ((ej = !0), to.update());
		},
		AUDIO_SET_SUBSYSTEM: function (e) {
			eO.setAudioSubsystem(e.subsystem);
		},
		MEDIA_ENGINE_SET_AUDIO_ENABLED: function (e) {
			(ey = e.enabled),
				e.unmute &&
					tl({
						mute: !1,
						deaf: !1
					}),
				eO.eachConnection(te);
		},
		MEDIA_ENGINE_SET_VIDEO_ENABLED: function (e) {
			let { enabled: t } = e;
			q.Z.requestPermission(eh.Eu.CAMERA), tt(t);
		},
		MEDIA_ENGINE_PERMISSION: function (e) {
			let { kind: t, granted: n } = e;
			if (!n)
				switch (t) {
					case 'audio':
						(ey = !1), eO.eachConnection(te);
						break;
					case 'video':
						tt(!1);
				}
		},
		MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function (e) {
			var t, n, r, i;
			let { settings: s } = e;
			if ((null == s ? void 0 : s.desktopSettings) != null) {
				let e = null,
					r = null,
					{ sourceId: i, sound: o } = s.desktopSettings,
					l = null !== (t = s.context) && void 0 !== t ? t : eI.Yn.DEFAULT,
					u =
						null !== (n = s.qualityOptions) && void 0 !== n
							? n
							: {
									resolution: 720,
									frameRate: 30
								},
					c = J.Z.getPidFromDesktopSource(i);
				et.isPlatformEmbedded &&
					!0 === o &&
					(({ soundshareId: e, soundshareSession: r } = tf(c)), null != e && th(e, r)),
					!(function (e) {
						if (e !== eL) null != a && eO.setGoLiveSource(null, eL), (eL = e);
					})(l),
					tt(l === eI.Yn.STREAM && ek, {
						desktopSource: {
							id: i,
							sourcePid: c,
							soundshareId: e,
							soundshareSession: r
						},
						quality: {
							resolution: u.resolution,
							frameRate: u.frameRate
						}
					});
			} else if ((null == s ? void 0 : s.cameraSettings) != null) {
				let e = null !== (r = s.context) && void 0 !== r ? r : eI.Yn.DEFAULT,
					{ videoDeviceGuid: t, audioDeviceGuid: n } = s.cameraSettings,
					a = e === eI.Yn.STREAM && ek,
					o =
						null !== (i = s.qualityOptions) && void 0 !== i
							? i
							: {
									resolution: 720,
									frameRate: 30
								};
				tt(a, {
					cameraSource: {
						videoDeviceGuid: t,
						audioDeviceGuid: n
					},
					quality: {
						resolution: o.resolution,
						frameRate: o.frameRate
					}
				});
			} else tt(ek, null);
		},
		MEDIA_ENGINE_SET_VIDEO_DEVICE: function (e) {
			let { id: t } = e;
			tl({ videoDeviceId: (t = t_(eP, t)) }), tt();
		},
		MEDIA_ENGINE_SET_EXPERIMENTAL_ENCODERS: function (e) {
			let t = tl({ experimentalEncoders: e.enabled });
			eO.eachConnection((e) => e.setExperimentalEncoders(t.experimentalEncoders));
		},
		MEDIA_ENGINE_INTERACTION_REQUIRED: function (e) {
			return eD !== e.required && ((eD = e.required), !e.required && eO.interact(), !0);
		},
		USER_SETTINGS_MODAL_INIT: tA,
		USER_SETTINGS_MODAL_SET_SECTION: tA,
		CERTIFIED_DEVICES_SET: function () {
			return eO.eachConnection(tr), !1;
		},
		RPC_APP_CONNECTED: function (e) {
			let { application: t } = e;
			eC.add(t.id);
		},
		RPC_APP_DISCONNECTED: function (e) {
			let { application: t } = e;
			eC.delete(t.id);
		},
		OVERLAY_INITIALIZE: function (e) {
			let { mediaEngineState: t } = e;
			(eR = t.settingsByContext),
				(eb = t.inputDevices),
				(eM = t.outputDevices),
				(e3 = t.appSupported),
				(eq = t.krispModuleLoaded),
				(eL = t.goLiveContext);
		},
		MEDIA_ENGINE_SET_OPEN_H264: function (e) {
			let { enabled: t } = e,
				n = tl({ openH264: t });
			eO.setH264Enabled(n.hardwareEncoding || n.openH264),
				eO.eachConnection((e) => {
					var t;
					return e.setSoftwareH264(null === (t = n.openH264) || void 0 === t || t);
				});
		},
		MEDIA_ENGINE_SET_HARDWARE_ENCODING: function (e) {
			var t, n;
			let { enabled: r } = e,
				i = tl({ hardwareEncoding: r });
			eO.eachConnection((e) => {
				var t;
				return e.setHardwareH264(null === (t = i.hardwareEncoding) || void 0 === t || t);
			}),
				eO.setH264Enabled(i.hardwareEncoding || i.openH264),
				eO.setAv1Enabled(null === (t = i.hardwareEncoding) || void 0 === t || t),
				eO.setH265Enabled(null === (n = i.hardwareEncoding) || void 0 === n || n);
		},
		APP_STATE_UPDATE: function (e) {
			let { state: t } = e,
				n = L.Z.isEnabled();
			if (t === eE.$7l.BACKGROUND && ek && !n) (eH = !0), tt(!1);
			else {
				if (t !== eE.$7l.ACTIVE || !eH) return !1;
				(eH = !1), tt(!0);
			}
			return !0;
		},
		SET_CHANNEL_BITRATE: function (e) {
			eO.eachConnection((t) => t.setBitRate(e.bitrate));
		},
		SET_VAD_PERMISSION: function (e) {
			let { hasPermission: t } = e,
				n = !t;
			if (n === ex) return !1;
			(ex = n), eO.eachConnection(te);
		},
		SET_NATIVE_PERMISSION: function (e) {
			let { state: t, permissionType: n } = e,
				r = t === eh.PQ.ACCEPTED;
			switch (n) {
				case eh.Eu.AUDIO:
					(eJ = !0), eO.eachConnection(te);
					break;
				case eh.Eu.CAMERA:
					!r && ek && tt(!1);
					break;
				default:
					return !1;
			}
		},
		SET_CHANNEL_VIDEO_QUALITY_MODE: function (e) {
			eO.eachConnection((t) => t.applyVideoQualityMode(e.mode));
		},
		MEDIA_ENGINE_SET_AEC_DUMP: function (e) {
			let { enabled: t } = e,
				n = tl({ aecDumpEnabled: t });
			eO.setAecDump(n.aecDumpEnabled);
		},
		CHANNEL_DELETE: function () {
			if ((!ek && null == a) || null != ec.Z.getRTCConnectionId()) return !1;
			tt(!1, null);
		},
		MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET: function () {
			return !!eX && ((eX = !1), !0);
		},
		MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS: function (e) {
			let { settings: t } = e;
			eO.applyMediaFilterSettings(t).finally(() => {
				(e$ = !1), r.emitChange();
			});
		},
		MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START: function () {
			e$ = !0;
		},
		MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR: function () {
			e$ = !1;
		},
		USER_SETTINGS_PROTO_UPDATE: function (e) {
			let {
				settings: { type: t },
				local: n,
				wasSaved: r
			} = e;
			if (t !== ep.yP.PRELOADED_USER_SETTINGS || n || null != r) return !1;
			tE(!0);
		},
		CLIPS_INIT: function (e) {
			let { sourceId: t, applicationName: n, quality: i } = e,
				{ enableDecoupledGameClipping: a } = k.Z.getCurrentConfig(
					{ location: 'handleClipsInit' },
					{ autoTrackExposure: !0 }
				),
				o = O.Z.getSettings().decoupledClipsEnabled;
			if (!a || !o || null == S.Z) return;
			let l = null,
				u = null,
				c = J.Z.getPidFromDesktopSource(t);
			({ soundshareId: l, soundshareSession: u } = tf(c));
			let d = {
				desktopSource: {
					id: t,
					sourcePid: c,
					soundshareId: l,
					soundshareSession: u
				},
				quality: i
			};
			null != s &&
				s.desktopSource.id !== d.desktopSource.id &&
				(eO.setClipsSource(null),
				(0, et.isWindows)() && null != s.desktopSource.soundshareId && A.pn(s.desktopSource.soundshareId)),
				null != l && th(l, u),
				(s = d);
			let { hdrCaptureMode: _ } = B.Z.getCurrentConfig({ location: 'f627ab_12' }, { autoTrackExposure: !1 }),
				E = e7().videoHook;
			eO.setClipsSource({
				desktopDescription: {
					id: s.desktopSource.id,
					soundshareId: s.desktopSource.soundshareId,
					useVideoHook: E,
					useGraphicsCapture: ti(),
					useLoopback: r.getExperimentalSoundshare(),
					useQuartzCapturer: !0,
					allowScreenCaptureKit: ta(),
					videoHookStaleFrameTimeoutMs: 500,
					graphicsCaptureStaleFrameTimeoutMs: eN,
					hdrCaptureMode: _
				},
				quality: i,
				applicationName: n
			});
		},
		CLIPS_SETTINGS_UPDATE: function (e) {
			let { settings: t } = e;
			!1 === t.decoupledClipsEnabled && ((s = null), eO.setClipsSource(null));
		}
	})),
	(t.Z = r);
