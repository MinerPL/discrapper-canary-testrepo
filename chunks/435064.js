n(47120), n(789020);
var r,
	i = n(442837),
	a = n(570140),
	s = n(579806),
	o = n(594190),
	l = n(569545),
	u = n(314897),
	c = n(630388),
	d = n(894694),
	_ = n(356659),
	E = n(981631),
	f = n(37113);
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
let p = 'default',
	m = [],
	I = [],
	T = [],
	g = 0,
	S = null,
	A = null,
	N = {},
	v = null,
	O = null,
	R = {},
	C = {
		clipsEnabled: !1,
		storageLocation: p,
		clipsQuality: {
			resolution: f.LY.RESOLUTION_1080,
			frameRate: f.ws.FPS_30
		},
		clipsLength: _.OT.SECONDS_30,
		remindersEnabled: !0,
		decoupledClipsEnabled: !1,
		viewerClipsEnabled: !0,
		viewerConnectivity: _.dJ.ALL
	},
	y = {
		clipsSettings: C,
		hardwareClassification: null,
		hardwareClassificationForDecoupled: null,
		hardwareClassificationVersion: 0,
		newClipIds: [],
		hasClips: !1,
		hasTakenDecoupledClip: !1,
		clipsEducationState: {
			dismissedAt: null,
			numberOfGamesLaunchedSinceDismissal: 0,
			numberOfTimesDismissed: 0
		}
	};
async function D() {
	if (y.clipsSettings.storageLocation !== p || null == s.Z || null == s.Z.remoteApp) return;
	let e = await s.Z.remoteApp.getPath('documents');
	(y.clipsSettings.storageLocation = e), b.emitChange();
}
class L extends (r = i.ZP.DeviceSettingsStore) {
	initialize(e) {
		null != e && (y = e), D(), this.waitFor(o.ZP);
	}
	getClips() {
		return I;
	}
	getPendingClips() {
		return T;
	}
	getUserAgnosticState() {
		return y;
	}
	getSettings() {
		return y.clipsSettings;
	}
	getLastClipsSession() {
		return A;
	}
	getClipsWarningShown(e) {
		return S === e;
	}
	getActiveAnimation() {
		return O;
	}
	getStreamClipAnimations(e) {
		var t;
		return null !== (t = R[e]) && void 0 !== t ? t : m;
	}
	hasAnyClipAnimations() {
		return Object.values(R).some((e) => e.length > 0);
	}
	getHardwareClassification() {
		return y.hardwareClassification;
	}
	getHardwareClassificationForDecoupled() {
		return y.hardwareClassificationForDecoupled;
	}
	getHardwareClassificationVersion() {
		return y.hardwareClassificationVersion;
	}
	getIsAtMaxSaveClipOperations() {
		return g >= _.Kw;
	}
	getLastClipsError() {
		return v;
	}
	isClipsEnabledForUser(e) {
		var t, n;
		return null !== (n = null === (t = N[e]) || void 0 === t ? void 0 : t.clipsEnabled) && void 0 !== n && n;
	}
	isVoiceRecordingAllowedForUser(e) {
		var t, n;
		return null !== (n = null === (t = N[e]) || void 0 === t ? void 0 : t.allowVoiceRecording) && void 0 !== n && n;
	}
	isViewerClippingAllowedForUser(e) {
		var t, n;
		return null !== (n = null === (t = N[e]) || void 0 === t ? void 0 : t.allowAnyViewerClips) && void 0 !== n && n;
	}
	hasClips() {
		return y.hasClips;
	}
	hasTakenDecoupledClip() {
		return y.hasTakenDecoupledClip;
	}
	getNewClipIds() {
		return y.newClipIds;
	}
}
h(L, 'displayName', 'ClipsStore'),
	h(L, 'persistKey', 'ClipsStore'),
	h(L, 'migrations', [
		(e) => ({
			clipsSettings: null != e ? e : C,
			newClipsCount: 0
		}),
		(e) => {
			let t = {
				...C,
				...e.clipsSettings
			};
			return {
				...e,
				clipsSettings: t
			};
		},
		(e) => {
			var t;
			return {
				...e,
				newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : []
			};
		},
		(e) => {
			var t, n;
			return {
				...e,
				hardwareClassification: null !== (t = e.hardwareClassification) && void 0 !== t ? t : null,
				hardwareClassificationVersion: null !== (n = e.hardwareClassificationVersion) && void 0 !== n ? n : 0
			};
		},
		(e) => {
			var t;
			return {
				...e,
				hasClips: null !== (t = e.hasClips) && void 0 !== t && t
			};
		},
		(e) => ({
			...e,
			clipsSettings: {
				...e.clipsSettings,
				decoupledClipsEnabled: C.decoupledClipsEnabled
			}
		}),
		(e) => {
			var t;
			return {
				...e,
				hardwareClassificationForDecoupled: null !== (t = e.hardwareClassificationForDecoupled) && void 0 !== t ? t : null
			};
		},
		(e) => {
			var t;
			let r = null === (t = n(131951).Z) || void 0 === t ? void 0 : t.getHardwareEncoding();
			return {
				...e,
				clipsSettings: {
					...e.clipsSettings,
					clipsEnabled: !!r && e.clipsSettings.clipsEnabled,
					decoupledClipsEnabled: !!r && e.clipsSettings.decoupledClipsEnabled
				}
			};
		},
		(e) => {
			var t;
			return {
				...e,
				newClipIds: null !== (t = e.newClipIds) && void 0 !== t ? t : [],
				newClipIDs: void 0
			};
		},
		(e) => ({
			...e,
			clipsSettings: {
				...e.clipsSettings,
				clipsQuality: 'number' == typeof e.clipsSettings.clipsQuality || null == e.clipsSettings.clipsQuality ? C.clipsQuality : e.clipsSettings.clipsQuality
			}
		}),
		(e) => {
			var t;
			return {
				...e,
				clipsSettings: {
					...e.clipsSettings,
					remindersEnabled: null !== (t = e.clipsSettings.remindersEnabled) && void 0 !== t ? t : C.remindersEnabled
				}
			};
		},
		(e) => ({
			...e,
			hasTakenDecoupledClip: !1,
			clipsEducationState: {
				dismissedAt: null,
				numberOfGamesLaunchedSinceDismissal: 0,
				numberOfTimesDismissed: 0
			}
		})
	]);
let b = new L(a.Z, {
	CLIPS_SETTINGS_UPDATE: function (e) {
		let { settings: t } = e;
		y = {
			...y,
			clipsSettings: {
				...y.clipsSettings,
				...t
			}
		};
	},
	CLIPS_SAVE_CLIP: function (e) {
		var t, n;
		let { clip: r } = e;
		(g = Math.max(g - 1, 0)),
			(A = {
				applicationName: r.applicationName,
				ended: !1,
				...A,
				newClipIds: [...(null !== (t = null == A ? void 0 : A.newClipIds) && void 0 !== t ? t : []), r.id]
			}),
			(y = {
				...y,
				newClipIds: [...(null !== (n = y.newClipIds) && void 0 !== n ? n : []), r.id]
			}),
			(T = T.filter((e) => {
				let { id: t } = e;
				return t !== r.id;
			})),
			(I = [r, ...I]),
			(y.hasClips = !0);
	},
	CLIPS_SAVE_CLIP_PLACEHOLDER: function (e) {
		let { clip: t } = e;
		T = [t, ...T];
	},
	CLIPS_SAVE_CLIP_PLACEHOLDER_ERROR: function (e) {
		let { clipId: t } = e;
		T = T.filter((e) => {
			let { id: n } = e;
			return n !== t;
		});
	},
	CLIPS_SAVE_CLIP_START: function (e) {
		let { clipType: t, streamKey: n, thumbnail: r } = e;
		if (((g += 1), (y.hasTakenDecoupledClip = y.hasTakenDecoupledClip || t === _.X9.DECOUPLED), null != n && null != r)) {
			var i;
			let e = Date.now();
			(O = null != O ? O : e),
				(R[n] = [
					...(null !== (i = R[n]) && void 0 !== i ? i : []),
					{
						timestamp: e,
						thumbnail: r
					}
				]);
		}
	},
	CLIPS_SAVE_CLIP_ERROR: function () {
		g = Math.max(g - 1, 0);
	},
	CLIPS_SAVE_ANIMATION_END: function (e) {
		let { streamKey: t, timestamp: n } = e;
		O === n && (O = null), null == n ? (R[t] = []) : (R[t] = R[t].filter((e) => e.timestamp !== n));
	},
	STREAM_START: function (e) {
		let { sourceName: t, pid: n } = e;
		if (!y.clipsSettings.clipsEnabled) return !1;
		let r = t;
		if (null != n) {
			var i;
			let e = o.ZP.getGameForPID(n);
			r = null !== (i = null == e ? void 0 : e.name) && void 0 !== i ? i : r;
		}
		if (null == r || '' === r) return !1;
		A = {
			applicationName: r,
			newClipIds: [],
			ended: !1
		};
	},
	STREAM_STOP: function (e) {
		let { streamKey: t } = e;
		if (((O = null), (R[t] = []), null == A || (0, l.my)(t).ownerId !== u.default.getId())) return !1;
		A =
			0 === A.newClipIds.length
				? null
				: {
						...A,
						ended: !0
					};
	},
	CLIPS_CLEAR_CLIPS_SESSION: function () {
		if (null == A) return !1;
		A = null;
	},
	CLIPS_CLEAR_NEW_CLIP_IDS: function () {
		y.newClipIds = [];
	},
	CLIPS_LOAD_DIRECTORY_SUCCESS: function (e) {
		(y.hasClips = e.clips.length > 0), (I = e.clips);
	},
	CLIPS_DELETE_CLIP: function (e) {
		0 ===
			(I = I.filter((t) => {
				let { filepath: n } = t;
				return n !== e.filepath;
			})).length && (y.hasClips = !1);
	},
	CLIPS_UPDATE_METADATA: function (e) {
		let { clip: t } = e;
		for (let [e, n] of I.entries())
			if (n.id === t.id) {
				(I[e] = t), (I = [...I]);
				return;
			}
	},
	RTC_CONNECTION_FLAGS: function (e) {
		N[e.userId] = {
			clipsEnabled: (0, c.yE)(e.flags, E.BVn.CLIPS_ENABLED),
			allowVoiceRecording: (0, c.yE)(e.flags, E.BVn.ALLOW_VOICE_RECORDING),
			allowAnyViewerClips: (0, c.yE)(e.flags, E.BVn.ALLOW_ANY_VIEWER_CLIPS)
		};
	},
	CLIPS_SHOW_CALL_WARNING: function (e) {
		let { channelId: t } = e;
		S = t;
	},
	VOICE_CHANNEL_SELECT: function (e) {
		let { channelId: t } = e;
		t !== S && (S = null);
	},
	CLIPS_CLASSIFY_HARDWARE: function (e) {
		let { classification: t } = e,
			n = y.hardwareClassification;
		(y.hardwareClassificationVersion = _.WM), (y.hardwareClassification = t), y.hardwareClassification === d.x.MEETS_AUTO_ENABLE && n !== d.x.MEETS_AUTO_ENABLE && (y.clipsSettings.clipsEnabled = !0);
		let r = y.hardwareClassificationForDecoupled;
		(y.hardwareClassificationForDecoupled = t), y.hardwareClassificationForDecoupled === d.x.MEETS_AUTO_ENABLE && r !== d.x.MEETS_AUTO_ENABLE && y.clipsSettings.clipsEnabled && (y.clipsSettings.decoupledClipsEnabled = !0);
	},
	CLIPS_INIT: function (e) {
		let { applicationName: t } = e;
		if (((v = null), !y.clipsSettings.clipsEnabled)) return !1;
		A = {
			applicationName: t,
			newClipIds: [],
			ended: !1
		};
	},
	CLIPS_INIT_FAILURE: function (e) {
		let { errMsg: t } = e;
		v = t;
	},
	CLIPS_DISMISS_EDUCATION: function (e) {
		let { educationType: t } = e;
		switch (t) {
			case _.D5.Error:
				v = null;
				break;
			case _.D5.Disabled:
			case _.D5.Enabled:
				(y.clipsEducationState.dismissedAt = Date.now()), (y.clipsEducationState.numberOfGamesLaunchedSinceDismissal = 0), (y.clipsEducationState.numberOfTimesDismissed += 1);
		}
	},
	RUNNING_GAMES_CHANGE: function (e) {
		let { added: t } = e;
		t.length > 0 && (y.clipsEducationState.numberOfGamesLaunchedSinceDismissal += 1);
	}
});
t.Z = b;
