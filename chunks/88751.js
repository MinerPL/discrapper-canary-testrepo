n(47120), n(724458);
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(392711),
	c = n.n(u),
	d = n(442837),
	_ = n(570140),
	E = n(592125),
	f = n(984933),
	h = n(271383),
	p = n(430824),
	I = n(594174),
	m = n(979651),
	T = n(700785),
	g = n(146085),
	S = n(590415);
((a = r || (r = {})).SPEAKER = 'speaker'), (a.MODERATOR = 'moderator');
let A = {},
	N = {
		speaker: !1,
		moderator: !1
	};
function v(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	null == A[t] && (A[t] = {});
	let r = (function (e, t) {
		var n, r, i;
		let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
			s = E.Z.getChannel(t),
			o = null == s ? void 0 : s.getGuildId(),
			l = p.Z.getGuild(o);
		if (null == l || null == s || !s.isGuildStageVoice()) return N;
		return {
			speaker: (function (e, t) {
				let n = m.Z.getVoiceStateForChannel(t, e);
				return (0, S.gf)(n) === S.xO.ON_STAGE;
			})(e, t),
			moderator: a
				? ((n = e),
					(r = l),
					(i = s),
					T.BT({
						permission: g.yP,
						user: n,
						context: r,
						overwrites: i.permissionOverwrites,
						roles: p.Z.getRoles(r.id)
					}))
				: null
		};
	})(e, t, n);
	return (A[t][e] = r), r;
}
function O(e) {
	let t = f.ZP.getChannels(e)[f.Zb].filter((e) => {
		let { channel: t } = e;
		return t.isGuildStageVoice();
	});
	for (let { channel: e } of t) delete A[e.id];
	return t.length > 0;
}
function R(e) {
	let { guildId: t, user: n } = e;
	return (
		null != n &&
		null != t &&
		(function (e, t) {
			for (let n in A) {
				let r = E.Z.getBasicChannel(n);
				if (null != r && r.guild_id === t) delete A[n][e];
			}
			return !0;
		})(n.id, t)
	);
}
function C(e) {
	let { guild: t } = e;
	for (let e in A) {
		let n = E.Z.getBasicChannel(e);
		(null == n || n.guild_id === t.id) && delete A[e];
	}
}
class y extends (i = d.ZP.Store) {
	initialize() {
		this.waitFor(h.ZP, E.Z, p.Z, I.default, m.Z);
	}
	isSpeaker(e, t) {
		return this.getPermissionsForUser(e, t).speaker;
	}
	isModerator(e, t) {
		var n;
		return null !== (n = this.getPermissionsForUser(e, t, !0).moderator) && void 0 !== n && n;
	}
	isAudienceMember(e, t) {
		let n = this.getPermissionsForUser(e, t);
		return !n.speaker && !n.moderator;
	}
	getPermissionsForUser(e, t) {
		var n;
		let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
		if (null == e || null == t) return N;
		let i = null === (n = A[t]) || void 0 === n ? void 0 : n[e];
		if (null != i) return r && null == i.moderator ? v(e, t, !0) : i;
		return v(e, t, r);
	}
}
(l = 'StageChannelRoleStore'),
	(o = 'displayName') in (s = y)
		? Object.defineProperty(s, o, {
				value: l,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (s[o] = l),
	(t.ZP = new y(_.Z, {
		CHANNEL_UPDATES: function (e) {
			let { channels: t } = e;
			for (let e of t) delete A[e.id];
		},
		CONNECTION_OPEN: function () {
			A = {};
		},
		GUILD_MEMBER_REMOVE: R,
		GUILD_MEMBER_UPDATE: R,
		GUILD_ROLE_UPDATE: function (e) {
			let { guildId: t } = e;
			O(t);
		},
		PASSIVE_UPDATE_V2: function (e) {
			return O(e.guildId);
		},
		VOICE_STATE_UPDATES: function (e) {
			let { voiceStates: t } = e;
			return (
				!c().isEmpty(A) &&
				t.reduce((e, t) => {
					let { userId: n, channelId: r } = t;
					return (
						(function (e, t) {
							var n;
							if (null == t) return !1;
							let r = E.Z.getChannel(t);
							return !!(null != r && r.isGuildStageVoice()) && (null === (n = A[t]) || void 0 === n || delete n[e], !0);
						})(n, r) || e
					);
				}, !1)
			);
		},
		GUILD_CREATE: C,
		GUILD_DELETE: C
	}));
