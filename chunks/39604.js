n.d(t, {
	C1: function () {
		return V;
	},
	Gh: function () {
		return H;
	},
	N0: function () {
		return U;
	},
	T1: function () {
		return w;
	},
	Tm: function () {
		return Z;
	},
	UW: function () {
		return q;
	},
	_Q: function () {
		return P;
	},
	eL: function () {
		return Y;
	},
	eU: function () {
		return G;
	},
	em: function () {
		return M;
	},
	jv: function () {
		return W;
	},
	rO: function () {
		return z;
	},
	sS: function () {
		return K;
	},
	yg: function () {
		return b;
	},
	yi: function () {
		return x;
	},
	yl: function () {
		return k;
	},
	zq: function () {
		return j;
	}
}),
	n(47120),
	n(653041);
var r = n(46973),
	i = n(992774),
	a = n(381499),
	s = n(570140),
	o = n(579806),
	l = n(255914),
	u = n(594190),
	c = n(569545),
	d = n(836157),
	_ = n(441167),
	E = n(675478),
	f = n(361291),
	h = n(199902),
	p = n(314897),
	I = n(131951),
	m = n(959457),
	T = n(33039),
	g = n(626135),
	S = n(358085),
	A = n(557177),
	N = n(435064),
	v = n(61994),
	O = n(550351),
	R = n(659487),
	C = n(711644),
	y = n(259612),
	D = n(356659),
	L = n(981631);
function b(e) {
	let { allowVoiceRecording: t } = e;
	E.hW.updateAsync(
		'clips',
		(e) => {
			e.allowVoiceRecording = a.D5.create({ value: t });
		},
		E.fy.INFREQUENT_USER_ACTION
	),
		g.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { allow_voice_recording: t });
}
async function M(e) {
	let { clipsEnabled: t, guildId: n, trackAnalytics: r = !1 } = e;
	await s.Z.dispatch({
		type: 'CLIPS_SETTINGS_UPDATE',
		settings: {
			clipsEnabled: t,
			...(!t && { decoupledClipsEnabled: !1 })
		}
	}),
		r &&
			g.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, {
				clips_enabled: t,
				guild_id: n,
				...(!t && { decoupled_clips_enabled: !1 })
			});
}
function P(e) {
	let { enabled: t, trackAnalytics: n = !1 } = e;
	s.Z.dispatch({
		type: 'CLIPS_SETTINGS_UPDATE',
		settings: {
			...(t && { clipsEnabled: !0 }),
			decoupledClipsEnabled: t
		}
	}),
		n &&
			g.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, {
				...(t && { clips_enabled: !0 }),
				decoupled_clips_enabled: t
			});
}
function U(e) {
	s.Z.dispatch({
		type: 'CLIPS_SETTINGS_UPDATE',
		settings: { remindersEnabled: e }
	}),
		g.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { reminders_enabled: e });
}
function w(e) {
	s.Z.dispatch({
		type: 'CLIPS_SETTINGS_UPDATE',
		settings: { storageLocation: e }
	});
}
function x(e) {
	s.Z.dispatch({
		type: 'CLIPS_SETTINGS_UPDATE',
		settings: { clipsQuality: e }
	});
}
function G(e) {
	s.Z.dispatch({
		type: 'CLIPS_SETTINGS_UPDATE',
		settings: { clipsLength: e }
	});
}
function k(e) {
	let { enabled: t, trackAnalytics: n = !1 } = e;
	s.Z.dispatch({
		type: 'CLIPS_SETTINGS_UPDATE',
		settings: { viewerClipsEnabled: t }
	}),
		n && g.default.track(L.rMx.CLIPS_SETTINGS_UPDATED, { viewer_clips_enabled: t });
}
function B(e, t) {
	var n, r, i, a, s, o, u, c, d, _;
	let E = new Map();
	for (let e in t.framesEncodedByEncoder) {
		let r = t.framesEncodedByEncoder[e],
			i = (0, l.lG)(e),
			a = null !== (n = E.get(i)) && void 0 !== n ? n : 0;
		E.set(i, a + r);
	}
	return {
		...e,
		frames_encoded_nvidia_cuda: null !== (r = E.get(l.Su.NVIDIA_CUDA)) && void 0 !== r ? r : 0,
		frames_encoded_nvidia_direct3d: null !== (i = E.get(l.Su.NVIDIA_DIRECT_3D)) && void 0 !== i ? i : 0,
		frames_encoded_openh264: null !== (a = E.get(l.Su.OPENH264)) && void 0 !== a ? a : 0,
		frames_encoded_videotoolbox: null !== (s = E.get(l.Su.VIDEOTOOLBOX)) && void 0 !== s ? s : 0,
		frames_encoded_amd_direct3d: null !== (o = E.get(l.Su.AMD_DIRECT_3D)) && void 0 !== o ? o : 0,
		frames_encoded_intel: null !== (u = E.get(l.Su.INTEL)) && void 0 !== u ? u : 0,
		frames_encoded_intel_direct3d: null !== (c = E.get(l.Su.INTEL_DIRECT_3D)) && void 0 !== c ? c : 0,
		frames_encoded_uncategorized: null !== (d = E.get(l.Su.UNCATEGORIZED)) && void 0 !== d ? d : 0,
		frames_encoded_unknown: null !== (_ = E.get(l.Su.UNKNOWN)) && void 0 !== _ ? _ : 0,
		frames_submitted: t.framesSubmitted,
		frames_submitted_during_clip: t.framesSubmittedDuringClip,
		frames_encoded: t.framesEncoded,
		frames_encoded_during_clip: t.framesEncodedDuringClip,
		frames_dropped: t.framesDropped,
		frames_dropped_during_clip: t.framesDroppedDuringClip,
		clip_duration_setting: N.Z.getSettings().clipsLength,
		clip_duration: t.clipDuration,
		clip_resolution_width: t.clipResolutionWidth,
		clip_resolution_height: t.clipResolutionHeight,
		min_fps: t.minFps,
		max_fps: t.maxFps,
		submitted_fps: t.submittedFps,
		target_fps: f.Z.getState().fps,
		audio_track_count: t.audioTrackCount,
		saved_at: t.savedAt
	};
}
async function F(e) {
	let t = N.Z.getSettings().storageLocation,
		n = (0, O.Z)(e),
		r = ''.concat((0, v.Z)(n.applicationName.substring(0, 20)), '_').concat(n.id, '.mp4'),
		i = o.Z.fileManager.join(t, r),
		a = I.Z.getMediaEngine(),
		l = JSON.stringify(n),
		u = null != e ? (0, c.my)(e).ownerId : void 0,
		d = (function (e) {
			var t;
			let n, r, i;
			if (null != e) {
				n = null != e ? m.Z.getRTCConnection(e) : null;
				let t = (0, c.my)(e);
				(r = t.guildId), (i = t.channelId);
			} else {
				let e = p.default.getId(),
					t = h.Z.getActiveStreamForUser(e, null);
				(n = null != t ? m.Z.getRTCConnection((0, c.V9)(t)) : null),
					(r = null == t ? void 0 : t.guildId),
					(i = null == t ? void 0 : t.channelId);
			}
			let a = null == n ? void 0 : null === (t = n.analyticsContext) || void 0 === t ? void 0 : t.streamApplication;
			return {
				rtc_connection_id: null == n ? void 0 : n.getRTCConnectionId(),
				media_session_id: null == n ? void 0 : n.getMediaSessionId(),
				parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
				guild_id: r,
				channel_id: i,
				application_id: null == a ? void 0 : a.id,
				application_name: null == a ? void 0 : a.name
			};
		})(e);
	null != e &&
		s.Z.dispatch({
			type: 'CLIPS_SAVE_CLIP_PLACEHOLDER',
			clip: {
				...n,
				filepath: i
			}
		});
	try {
		var _;
		let { duration: e, clipStats: t } = await (null != u ? a.saveClipForUser(u, i, l) : a.saveClip(i, l)),
			r = B(d, t);
		(r.clip_save_time_ms = t.clipSaveTimeMs),
			(r.clip_size_bytes = t.clipSizeBytes),
			null != t.viewerDecodeFps &&
				((r.decode_fps_during_clip = t.viewerDecodeFps),
				(r.encode_fps_during_clip = t.viewerEncodeFps),
				(r.target_fps = null)),
			g.default.track(L.rMx.CLIP_SAVED, r);
		let s = await (0, y.R)(o.Z.clips.getClipProtocolURLFromPath(i), 0);
		return (
			(n.thumbnail = s),
			(n.length = e),
			D.jF.info(
				'Clip save succeeded with '
					.concat(e, 'ms and thumbnail ')
					.concat(null !== (_ = null == s ? void 0 : s.length) && void 0 !== _ ? _ : 0, ' bytes thumbnail.')
			),
			await a.updateClipMetadata(i, JSON.stringify(n)),
			{
				...n,
				filepath: i
			}
		);
	} catch (r) {
		if (
			(null != e &&
				s.Z.dispatch({
					type: 'CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR',
					clipId: n.id
				}),
			!('errorMessage' in r))
		)
			throw (g.default.track(L.rMx.CLIP_SAVE_FAILURE, d), r);
		let t = B(d, r);
		throw (
			((t.error_at = r.errorAt),
			(t.error_message = r.errorMessage),
			g.default.track(L.rMx.CLIP_SAVE_FAILURE, t),
			r.errorMessage)
		);
	}
}
async function V(e) {
	var t;
	let { enableDecoupledGameClipping: n } = d.Z.getCurrentConfig({ location: '8ac9d1_1' }, { autoTrackExposure: !1 }),
		{ enableViewerClipping: a } = _.Z.getCurrentConfig({ location: 'SaveClip' }, { autoTrackExposure: !1 });
	if (N.Z.getIsAtMaxSaveClipOperations()) return;
	let o = N.Z.getSettings().clipsEnabled && null != h.Z.getCurrentUserActiveStream(),
		l =
			n &&
			N.Z.getSettings().decoupledClipsEnabled &&
			(null === (t = u.ZP.getVisibleGame()) || void 0 === t ? void 0 : t.windowHandle) != null &&
			I.Z.hasClipsSource(),
		E = null != e && null != h.Z.getActiveStreamForStreamKey(e) && a;
	if (!o && !l && !E) return;
	let f = h.Z.getCurrentUserActiveStream(),
		m = null != f ? (0, c.V9)(f) : void 0,
		g = null != e ? e : m,
		S = (() => {
			let e = null != g ? (0, c.my)(g).ownerId : void 0;
			return e === p.default.getId() ? D.X9.STREAMER : null != e ? D.X9.VIEWER : D.X9.DECOUPLED;
		})(),
		v = await (async () => {
			if (null == g) return;
			let { ownerId: e, guildId: t } = (0, c.my)(g),
				n = T.Z.getStreamId(e, t, r.Yn.STREAM);
			if (null != n)
				try {
					let e = (0, i.zS)(),
						t = await e.getNextVideoOutputFrame(n);
					return (0, y.W)(t);
				} catch (e) {
					return;
				}
		})();
	s.Z.dispatch({
		type: 'CLIPS_SAVE_CLIP_START',
		clipType: S,
		streamKey: g,
		thumbnail: v
	});
	let O = (0, A.GN)('clip_save', 0.5),
		R = performance.now();
	try {
		let e = await F(g);
		s.Z.dispatch({
			type: 'CLIPS_SAVE_CLIP',
			clip: e
		});
	} catch (e) {
		D.jF.error('Clip Failed to Save', e),
			null == O || O.stop(),
			(0, A.GN)('clip_error', 0.5),
			s.Z.dispatch({ type: 'CLIPS_SAVE_CLIP_ERROR' });
	}
	D.jF.info(
		''.concat(N.Z.getSettings().clipsLength / 1000, 's clip save took ').concat(Math.round(performance.now() - R), 'ms')
	);
}
function H(e, t) {
	s.Z.dispatch({
		type: 'CLIPS_SAVE_ANIMATION_END',
		streamKey: e,
		timestamp: t
	});
}
async function Z(e, t) {
	let n = N.Z.getClips().find((t) => t.id === e);
	if (null == n) return;
	let r = {
		...n,
		...t
	};
	null != (await (0, R.w)(r)) &&
		(await I.Z.getMediaEngine().updateClipMetadata(r.filepath, JSON.stringify(r)),
		g.default.track(L.rMx.CLIP_EDITED, { clip_id: r.id }),
		s.Z.dispatch({
			type: 'CLIPS_UPDATE_METADATA',
			clip: r
		}));
}
function Y() {
	s.Z.dispatch({ type: 'CLIPS_CLEAR_CLIPS_SESSION' });
}
function j() {
	s.Z.dispatch({ type: 'CLIPS_CLEAR_NEW_CLIP_IDS' });
}
async function W(e) {
	var t;
	if (!(0, S.isDesktop)() || (null === (t = o.Z.clips) || void 0 === t ? void 0 : t.loadClipsDirectory) == null) return;
	let n = await o.Z.clips.loadClipsDirectory(e),
		r = [];
	for (let e of n) {
		let t = await (0, R.w)({
			...e.metadata,
			filepath: e.filepath
		});
		null != t && r.push(t);
	}
	s.Z.dispatch({
		type: 'CLIPS_LOAD_DIRECTORY_SUCCESS',
		clips: r
	});
}
async function K(e) {
	var t;
	if (!!(0, S.isDesktop)() && (null === (t = o.Z.clips) || void 0 === t ? void 0 : t.deleteClip) != null)
		await o.Z.clips.deleteClip(e),
			s.Z.dispatch({
				type: 'CLIPS_DELETE_CLIP',
				filepath: e
			});
}
async function z(e, t) {
	let n = I.Z.getMediaEngine(),
		r = await n.exportClip(e.filepath, t);
	return (0, C.Z)(r);
}
function q(e) {
	s.Z.dispatch({
		type: 'CLIPS_DISMISS_EDUCATION',
		educationType: e
	});
}
