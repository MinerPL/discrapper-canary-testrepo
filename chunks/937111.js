n.d(t, {
	j: function () {
		return p;
	}
});
var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140),
	u = n(601964),
	c = n(594174),
	d = n(881952);
let _ = !1,
	E = {},
	f = !1,
	h = {};
function p(e) {
	return {
		joinRequestId: e.join_request_id,
		guildId: e.guild_id,
		userId: e.user_id,
		user: e.user,
		createdAt: e.created_at,
		formResponses: e.form_responses,
		rejectionReason: e.rejection_reason,
		applicationStatus: e.application_status,
		actionedAt: e.actioned_at,
		actionedByUser: e.actioned_by_user,
		lastSeen: e.last_seen,
		interviewChannelId: e.interview_channel_id
	};
}
function m(e) {
	let { guildId: t, request: n } = e;
	if (null == n) return;
	let r = p(n),
		i = c.default.getCurrentUser();
	if (null != i && r.userId !== i.id) return !1;
	(0, d.d3)(r) ? delete E[t] : (E[t] = r);
}
class I extends (s = o.ZP.Store) {
	getRequest(e) {
		return E[e];
	}
	computeGuildIds() {
		return Object.values(E)
			.map((e) => (null == e ? void 0 : e.guildId))
			.filter((e) => null != e);
	}
	getJoinRequestGuild(e) {
		return null != h[e] ? new u.ZP(h[e]) : null;
	}
	get hasFetchedRequestToJoinGuilds() {
		return f;
	}
	hasJoinRequestCoackmark() {
		return _;
	}
}
(a = 'UserGuildJoinRequestStore'),
	(i = 'displayName') in (r = I)
		? Object.defineProperty(r, i, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (r[i] = a),
	(t.Z = new I(l.Z, {
		CONNECTION_OPEN: function (e) {
			let { guildJoinRequests: t } = e;
			(f = !1),
				(h = {}),
				(E = {}),
				t.forEach((e) => {
					let { guild_id: t } = e;
					null != t && (E[t] = p(e));
				});
		},
		GUILD_JOIN_REQUEST_UPDATE: m,
		GUILD_JOIN_REQUEST_CREATE: m,
		USER_GUILD_JOIN_REQUEST_UPDATE: function (e) {
			let { request: t, guildId: n } = e;
			if (null == t) {
				delete E[n];
				return;
			}
			let r = p(t);
			(0, d.d3)(r) ? delete E[n] : (E[n] = r);
		},
		GUILD_DELETE: function (e) {
			let { guild: t } = e;
			delete E[t.id];
		},
		USER_JOIN_REQUEST_GUILDS_FETCH: function (e) {
			let { guilds: t } = e;
			(f = !0),
				t.forEach((e) => {
					let { id: t, name: n, features: r, icon: i } = e;
					h[t] = {
						id: t,
						name: n,
						features: r,
						icon: i
					};
				});
		},
		MEMBER_VERIFICATION_FORM_UPDATE: function (e) {
			let { form: t, guildId: n } = e;
			if ((null == t ? void 0 : t.guild) != null) {
				let { id: e, name: r, icon: i, features: a } = t.guild;
				h[n] = {
					id: e,
					name: r,
					icon: i,
					features: null != a ? a : []
				};
			}
		},
		INVITE_ACCEPT_SUCCESS: function (e) {
			let { invite: t } = e,
				{ guild: n, join_request: r } = t;
			if (null != n && null != r) {
				let { guild_id: e } = r;
				E[e] = p(r);
				let { id: t, name: i, icon: a, features: s } = n;
				h[t] = {
					id: t,
					name: i,
					icon: a,
					features: null != s ? s : []
				};
			}
		},
		ACK_APPROVED_GUILD_JOIN_REQUEST: function (e) {
			let { guildId: t } = e;
			delete E[t];
		},
		USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function () {
			_ = !0;
		},
		USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function () {
			_ = !1;
		}
	}));
