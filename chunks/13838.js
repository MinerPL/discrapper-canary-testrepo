n(47120);
var i = n(392711),
	a = n.n(i),
	s = n(243814),
	r = n(902704),
	l = n(812206),
	o = n(594190),
	c = n(199902),
	d = n(592125),
	u = n(271383),
	_ = n(430824),
	E = n(131951),
	h = n(19780),
	m = n(594174),
	I = n(979651),
	g = n(996106),
	p = n(914946),
	T = n(238679),
	S = n(452426),
	f = n(295424),
	C = n(222263),
	N = n(863141),
	A = n(186901),
	v = n(981631);
let Z = (e) => (0, S.Z)(e).required().keys({ channel_id: e.string().required() });
function L(e) {
	var t;
	let {
			args: { channel_id: n },
			socket: i
		} = e,
		a = d.Z.getChannel(n);
	if (null == a || !(0, p.zM)(a, i.application.id, i.authorization.scopes)) throw new g.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(n));
	if (a.isNSFW() && (null === (t = m.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) !== !0) throw new g.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid nsfw channel id: '.concat(a.id));
}
let O = (e) => (0, S.Z)(e).keys({ channel_id: e.string().allow(null) });
function R(e) {
	let {
		args: { channel_id: t }
	} = e;
	if (null != t && null == d.Z.getChannel(t)) throw new g.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
}
let x = {
	[v.zMe.GUILD_STATUS]: {
		scope: s.x.RPC,
		validation: (e) => (0, S.Z)(e).required().keys({ guild_id: e.string().required() }),
		handler(e) {
			let {
				args: { guild_id: t }
			} = e;
			if (null == _.Z.getGuild(t)) throw new g.Z({ errorCode: v.lTL.INVALID_GUILD }, 'Invalid guild id: '.concat(t));
			return (e) => {
				var n;
				let { prevState: i, dispatch: s } = e,
					r = _.Z.getGuild(t);
				if (null == r) return;
				let l = {
					guild: {
						id: r.id,
						name: r.name,
						icon_url: null !== (n = r.getIconURL(128)) && void 0 !== n ? n : null
					},
					online: 0
				};
				return !a().isEqual(i, l) && s(l), l;
			};
		}
	},
	[v.zMe.VOICE_STATE_CREATE]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ]
		},
		validation: (e) => (0, S.Z)(e).required().keys({ channel_id: e.string().required() }),
		handler(e) {
			let {
				args: { channel_id: t }
			} = e;
			if (null == d.Z.getChannel(t)) throw new g.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
			return (e) => {
				let { prevState: n, dispatch: i } = e,
					s = d.Z.getChannel(t);
				if (null == s) return;
				let r = s.getGuildId(),
					l = Object.values(I.Z.getVoiceStatesForChannel(s.id));
				return (
					n &&
						a()
							.differenceBy(l, n, (e) => {
								let { userId: t } = e;
								return t;
							})
							.forEach((e) => i((0, p.aE)(r, s.id, e))),
					l
				);
			};
		}
	},
	[v.zMe.VOICE_STATE_DELETE]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ]
		},
		validation: (e) => (0, S.Z)(e).required().keys({ channel_id: e.string().required() }),
		handler(e) {
			let {
				args: { channel_id: t }
			} = e;
			if (null == d.Z.getChannel(t)) throw new g.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
			return (e) => {
				let { prevState: n, dispatch: i } = e,
					s = d.Z.getChannel(t);
				if (null == s) return;
				let r = s.getGuildId(),
					l = Object.values(I.Z.getVoiceStatesForChannel(s.id));
				return (
					a()
						.differenceBy(n, l, (e) => {
							let { userId: t } = e;
							return t;
						})
						.forEach((e) => i((0, p.aE)(r, s.id, e))),
					l
				);
			};
		}
	},
	[v.zMe.VOICE_STATE_UPDATE]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ]
		},
		validation: (e) => (0, S.Z)(e).required().keys({ channel_id: e.string().required() }),
		handler(e) {
			let {
				args: { channel_id: t }
			} = e;
			if (null == d.Z.getChannel(t)) throw new g.Z({ errorCode: v.lTL.INVALID_CHANNEL }, 'Invalid channel id: '.concat(t));
			return (e) => {
				let { prevState: n, dispatch: i } = e,
					s = d.Z.getChannel(t);
				if (null == s) return;
				let r = s.getGuildId(),
					l = Object.values(I.Z.getVoiceStatesForChannel(s.id)).map((e) => (0, p.aE)(r, s.id, e));
				return (
					a()
						.differenceWith(l, n, a().isEqual)
						.forEach((e) => i(e)),
					l
				);
			};
		}
	},
	[v.zMe.VOICE_CONNECTION_STATUS]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ]
		},
		handler: () => (e) => {
			let { prevState: t, dispatch: n } = e,
				i = {
					state: (0, p.zy)(h.Z.getState()),
					hostname: h.Z.getHostname(),
					pings: h.Z.getPings(),
					average_ping: h.Z.getAveragePing(),
					last_ping: h.Z.getLastPing()
				};
			return !a().isEqual(i, t) && n(i), i;
		}
	},
	[v.zMe.MESSAGE_CREATE]: {
		scope: s.x.RPC,
		validation: Z,
		handler: L
	},
	[v.zMe.MESSAGE_UPDATE]: {
		scope: s.x.RPC,
		validation: Z,
		handler: L
	},
	[v.zMe.MESSAGE_DELETE]: {
		scope: s.x.RPC,
		validation: Z,
		handler: L
	},
	[v.zMe.SPEAKING_START]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ, A.lH]
		},
		validation: O,
		handler: R
	},
	[v.zMe.SPEAKING_STOP]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, s.x.RPC_VOICE_READ, A.lH]
		},
		validation: O,
		handler: R
	},
	[v.zMe.GUILD_CREATE]: {
		scope: s.x.RPC,
		handler() {}
	},
	[v.zMe.CHANNEL_CREATE]: {
		scope: s.x.RPC,
		handler() {}
	},
	[v.zMe.GAME_JOIN]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, A.lH]
		},
		handler() {}
	},
	[v.zMe.GAME_SPECTATE]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, A.lH]
		},
		handler() {}
	},
	[v.zMe.ACTIVITY_JOIN]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, A.wE, A.lH]
		},
		handler() {}
	},
	[v.zMe.ACTIVITY_JOIN_REQUEST]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, A.lH]
		},
		handler() {}
	},
	[v.zMe.ACTIVITY_SPECTATE]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, A.wE, A.lH]
		},
		handler() {}
	},
	[v.zMe.ACTIVITY_INVITE]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, A.lH]
		},
		handler() {}
	},
	[v.zMe.ACTIVITY_PIP_MODE_UPDATE]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, A.wE, A.lH]
		},
		handler() {}
	},
	[v.zMe.ACTIVITY_LAYOUT_MODE_UPDATE]: {
		scope: {
			[A.Gp.ANY]: [s.x.RPC, A.wE, A.lH]
		},
		handler() {}
	},
	[v.zMe.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: T.gQ,
	[v.zMe.THERMAL_STATE_UPDATE]: {
		scope: { [A.Gp.ANY]: [A.wE] },
		handler() {}
	},
	[v.zMe.ORIENTATION_UPDATE]: {
		scope: { [A.Gp.ANY]: [A.wE] },
		handler() {}
	},
	[v.zMe.VOICE_CHANNEL_SELECT]: {
		scope: s.x.RPC,
		handler() {}
	},
	[v.zMe.NOTIFICATION_CREATE]: {
		scope: {
			[A.Gp.ALL]: [s.x.RPC, s.x.RPC_NOTIFICATIONS_READ]
		},
		handler() {}
	},
	[v.zMe.RELATIONSHIP_UPDATE]: {
		scope: s.x.RELATIONSHIPS_READ,
		handler() {}
	},
	[v.zMe.CURRENT_USER_UPDATE]: {
		scope: {
			[A.Gp.ANY]: [A.lH, s.x.IDENTIFY]
		},
		handler: () => (e) => {
			let { prevState: t, dispatch: n } = e,
				i = { currentUser: m.default.getCurrentUser() };
			return null != i.currentUser && (null == t || !(0, r.Z)(i, t)) && n((0, N.Z)(i.currentUser)), i;
		}
	},
	[v.zMe.CURRENT_GUILD_MEMBER_UPDATE]: {
		scope: {
			[A.Gp.ALL]: [s.x.IDENTIFY, s.x.GUILDS_MEMBERS_READ]
		},
		handler(e) {
			let {
				args: { guild_id: t }
			} = e;
			return (e) => {
				let { prevState: n, dispatch: i } = e,
					a = { currentGuildMember: u.ZP.getSelfMember(t) };
				return null != a.currentGuildMember && (null == n || !(0, r.Z)(a, n)) && i((0, C.Z)(a.currentGuildMember)), a;
			};
		}
	},
	[v.zMe.ENTITLEMENT_CREATE]: {
		scope: {
			[A.Gp.ANY]: [A.lH, A.wE]
		},
		handler() {}
	},
	[v.zMe.ENTITLEMENT_DELETE]: {
		scope: {
			[A.Gp.ANY]: [A.lH, A.wE]
		},
		handler() {}
	},
	[v.zMe.USER_ACHIEVEMENT_UPDATE]: {
		scope: A.lH,
		handler() {}
	},
	[v.zMe.SCREENSHARE_STATE_UPDATE]: {
		scope: {
			[A.Gp.ALL]: [A.lH, s.x.RPC_SCREENSHARE_READ]
		},
		handler: () => (e) => {
			var t, n;
			let { prevState: i, dispatch: s } = e,
				r = c.Z.getStreamerActiveStreamMetadata(),
				d = (null == r ? void 0 : r.pid) != null ? o.ZP.getGameForPID(r.pid) : null,
				u = (null == d ? void 0 : d.id) != null ? l.Z.getApplication(d.id) : null,
				_ = null != u ? (0, f.Z)(u) : null,
				E = null == r ? void 0 : r.sourceName,
				h = {
					active: null != r,
					pid: null !== (t = null == r ? void 0 : r.pid) && void 0 !== t ? t : null,
					application: ((n = null != _), n) ? { name: E } : null
				};
			return !a().isEqual(h, i) && s(h), h;
		}
	},
	[v.zMe.VIDEO_STATE_UPDATE]: {
		scope: {
			[A.Gp.ALL]: [A.lH, s.x.RPC_VIDEO_READ]
		},
		handler: () => (e) => {
			let { prevState: t, dispatch: n } = e,
				i = { active: E.Z.isVideoEnabled() };
			return !a().isEqual(i, t) && n(i), i;
		}
	}
};
t.Z = x;
