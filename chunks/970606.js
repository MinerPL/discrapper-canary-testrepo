n.d(t, {
	Af: function () {
		return T;
	},
	B3: function () {
		return S;
	},
	EK: function () {
		return y;
	},
	GO: function () {
		return m;
	},
	GS: function () {
		return O;
	},
	Lp: function () {
		return I;
	},
	Oe: function () {
		return A;
	},
	Pq: function () {
		return D;
	},
	Q2: function () {
		return b;
	},
	Qh: function () {
		return N;
	},
	TE: function () {
		return R;
	},
	Vr: function () {
		return h;
	},
	_9: function () {
		return C;
	},
	aC: function () {
		return L;
	},
	bH: function () {
		return P;
	},
	dx: function () {
		return g;
	},
	hx: function () {
		return p;
	},
	pl: function () {
		return U;
	},
	r: function () {
		return w;
	},
	r2: function () {
		return M;
	},
	tv: function () {
		return v;
	},
	u0: function () {
		return f;
	}
});
var r = n(704215),
	i = n(229893),
	a = n(605236),
	s = n(831565),
	o = n(314897),
	l = n(271383),
	u = n(626135),
	c = n(308083),
	d = n(981631),
	_ = n(976757),
	E = n(921944);
function f(e) {
	let { guildId: t, hasJoinRequest: n, source: r, messageId: i, tagUserId: a, location: s } = e,
		c = o.default.getId(),
		_ = l.ZP.getMember(t, o.default.getId()),
		E = (null == _ ? void 0 : _.joinedAt) != null;
	u.default.track(d.rMx.CLAN_PROFILE_VIEWED, {
		guild_id: t,
		is_member: E,
		has_join_request: n,
		source: r,
		location: s,
		viewing_user_id: c,
		tag_owner_user_id: a,
		message_id: i
	});
}
function h(e) {
	let { guildId: t, source: n, location: r, messageId: i, tagUserId: a } = e,
		s = o.default.getId();
	u.default.track(d.rMx.CLAN_APPLY_TO_JOIN_VIEWED, {
		guild_id: t,
		source: n,
		location: r,
		viewing_user_id: s,
		tag_owner_user_id: a,
		message_id: i
	});
}
function p(e) {
	let { guildId: t, userId: n, source: r } = e;
	u.default.track(d.rMx.CLAN_ADOPT_IDENTITY, {
		guild_id: t,
		user_id: n,
		source: r
	});
}
function I(e, t) {
	u.default.track(d.rMx.CLAN_CONVERT_STEP_VIEWED, {
		guild_id: e,
		step: t
	});
}
function m(e, t) {
	u.default.track(d.rMx.CLAN_SETTINGS_VIEWED, {
		guild_id: e,
		page: t
	});
}
function T(e) {
	u.default.track(d.rMx.CLAN_SETTINGS_SAVED, { guild_id: e });
}
function g(e) {
	u.default.track(d.rMx.CLAN_CONVERT_SUCCESS_MODAL_VIEWED, { guild_id: e });
}
function S(e, t) {
	u.default.track(d.rMx.CLAN_CONVERT_SUCCESS_MODAL_CONFIRM, {
		guild_id: e,
		enable_tag: t
	});
}
function A(e, t, n) {
	u.default.track(d.rMx.CLAN_DISCOVERY_VIEWED, {
		guild_ids: e,
		section: t,
		application_ids: n.games,
		playstyle: n.playstyle,
		traits: n.traits
	});
}
function N(e) {
	switch (e) {
		case c.Wy.GAMES:
			return 'games';
		case c.Wy.PLAYSTYLE:
			return 'playstyle';
		case c.Wy.UTILITY_TRAITS:
			return 'utility_traits';
		case c.Wy.INTERESTS:
			return 'interests';
		case c.Wy.DESCRIPTION:
			return 'description';
		case c.Wy.CUSTOMIZE_TAG_BADGE:
			return 'tag';
		case c.Wy.CUSTOMIZE_BANNER:
			return 'banner';
		case c.Wy.MEMBER_APPLICATION:
			return 'member_application';
		default:
			return e;
	}
}
function v(e) {
	let { location: t } = e;
	u.default.track(d.rMx.CLAN_USER_INVITE_VIEWED, { location: t });
}
function O(e) {
	let { location: t } = e;
	u.default.track(d.rMx.CLAN_USER_INVITE_CLICKED, { location: t });
}
function R(e) {
	let { guildId: t, location: n } = e;
	u.default.track(d.rMx.CLAN_ADMIN_INVITE_VIEWED, {
		guild_id: t,
		location: n
	});
}
function C(e) {
	let { guildId: t, location: n } = e;
	u.default.track(d.rMx.CLAN_ADMIN_INVITE_CLICKED, {
		guild_id: t,
		location: n
	});
}
function y(e) {
	let { guildId: t, isMember: n, hasJoinRequest: r, affinity: i, index: a } = e;
	u.default.track(d.rMx.CLAN_DISCOVERY_CARD_CLICKED, {
		guild_id: t,
		is_member: n,
		has_join_request: r,
		affinity: i,
		index: a
	});
}
function D(e) {
	u.default.track(d.rMx.MEMBER_VERIFICATION_APPLICATION_VIEWED, { guild_id: e });
}
function L(e) {
	var t;
	let { guildId: n, messageId: r, channelId: i, joinRequestStatus: a, joinRequestUserId: s } = e,
		c = o.default.getId(),
		_ = (null === (t = l.ZP.getMember(n, c)) || void 0 === t ? void 0 : t.joinedAt) != null;
	u.default.track(d.rMx.CLAN_SEND_INTERVIEW_MESSAGE, {
		guild_id: n,
		channel_id: i,
		message_id: r,
		message_user_id: c,
		is_member: _,
		join_request_status: a,
		join_request_user_id: s
	});
}
function b(e) {
	let { guildId: t, source: n, tab: r } = e;
	u.default.track(d.rMx.CLAN_APPLICATION_NAVIGATION, {
		guild_id: t,
		source: n,
		tab: r
	});
}
function M(e) {
	let { guildId: t, actionType: n, applicationUserId: r } = e;
	u.default.track(d.rMx.CLAN_APPLICATION_ACTION, {
		guild_id: t,
		action_type: n,
		application_user_id: r,
		viewing_user_id: o.default.getId()
	});
}
function P(e) {
	let { guildId: t, applicationUserId: n, applicationStatus: r } = e;
	u.default.track(d.rMx.CLAN_APPLICATION_VIEWED, {
		guild_id: t,
		viewing_user_id: o.default.getId(),
		application_user_id: n,
		application_status: r
	});
}
function U(e) {
	let { originGuildId: t, tagGuildId: n, tagUserId: i, messageId: s, location: l } = e;
	if (!(0, a.un)(r.z.CLAN_TAG_WAITLIST))
		u.default.track(d.rMx.CLAN_APPLY_WAITLIST, {
			user_id: o.default.getId(),
			origin_guild_id: t,
			tag_guild_id: n,
			tag_user_id: i,
			message_id: s,
			location: l
		}),
			(0, a.EW)(r.z.CLAN_TAG_WAITLIST, {
				dismissAction: E.L.TAKE_ACTION,
				forceTrack: !0
			});
}
function w(e) {
	let { guildId: t, position: n } = e,
		r = (0, s.a)({
			location: 'guild_application_intends_to_join',
			autoTrackExposure: !1
		}),
		a = i.Z.getCurrentRecommendationId(),
		o = r ? _.Br.GLOBAL_DISCOVERY_TOP_PICKS : _.Br.TOP_PICKS;
	u.default.track(d.rMx.GUILD_APPLICATION_INTENDS_TO_JOIN, {
		recommendation_id: a,
		recommendation_context: o,
		recommendation_outcome: _.qz.HIT,
		guild_id: t,
		position: n
	});
}
