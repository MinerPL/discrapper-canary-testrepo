var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(314897),
	c = n(592125),
	d = n(131951),
	_ = n(496675),
	E = n(19780),
	f = n(979651),
	h = n(981631);
let p = !0,
	I = !0;
function m() {
	let e;
	let t = E.Z.getChannelId();
	if (null == t) e = !0;
	else {
		var n;
		let r = c.Z.getChannel(t),
			i = f.Z.getVoiceState(null == r ? void 0 : r.getGuildId(), u.default.getId());
		e =
			d.Z.getMode() !== h.pM4.VOICE_ACTIVITY ||
			null == r ||
			r.isPrivate() ||
			r.isGuildStageVoice() ||
			_.Z.can(h.Plq.USE_VAD, r) ||
			null == (n = i) ||
			!!n.suppress ||
			null != n.requestToSpeakTimestamp ||
			!1;
	}
	if (p === e) return !1;
	(I = e),
		(p = e),
		l.Z.dispatch({
			type: 'SET_VAD_PERMISSION',
			hasPermission: p
		});
}
class T extends (s = o.ZP.Store) {
	initialize() {
		this.waitFor(_.Z, d.Z, E.Z, f.Z);
	}
	shouldShowWarning() {
		return !I;
	}
	canUseVoiceActivity() {
		return p;
	}
}
(a = 'PermissionVADStore'),
	(i = 'displayName') in (r = T)
		? Object.defineProperty(r, i, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (r[i] = a),
	(t.Z = new T(l.Z, {
		RTC_CONNECTION_STATE: m,
		MEDIA_ENGINE_SET_AUDIO_ENABLED: m,
		AUDIO_SET_MODE: m,
		CHANNEL_UPDATES: m,
		THREAD_UPDATE: m,
		GUILD_ROLE_UPDATE: m,
		GUILD_MEMBER_UPDATE: m,
		IMPERSONATE_UPDATE: m,
		IMPERSONATE_STOP: m,
		VOICE_STATE_UPDATES: function (e) {
			let { voiceStates: t } = e;
			return t.some((e) => {
				let { userId: t } = e;
				return t === u.default.getId() && m();
			});
		},
		AUDIO_TOGGLE_SELF_MUTE: function () {
			I = p;
		},
		PERMISSION_CLEAR_VAD_WARNING: function () {
			I = !0;
		}
	}));
