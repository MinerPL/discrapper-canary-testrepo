n.d(t, {
	Ac: function () {
		return A;
	},
	NE: function () {
		return v;
	},
	QN: function () {
		return g;
	},
	Qf: function () {
		return O;
	},
	pQ: function () {
		return S;
	},
	z7: function () {
		return N;
	}
}),
	n(653041),
	n(47120);
var r = n(367907),
	i = n(814443),
	a = n(271383),
	s = n(158776),
	o = n(699516),
	l = n(594174),
	u = n(626135),
	c = n(768581),
	d = n(621853),
	_ = n(318661),
	E = n(228168),
	f = n(981631),
	h = n(231338);
let p = (e) => {
		let { user: t, userProfile: n, guildMember: r, guildMemberProfile: i } = e,
			a = null != n ? n : i,
			s = [];
		if (
			((null == r ? void 0 : r.nick) && s.push(E.cm.NICKNAME),
			(null == a ? void 0 : a.pronouns) && s.push(E.cm.PRONOUNS),
			null == t ? void 0 : t.avatar)
		) {
			let e = (0, c.xR)(null == t ? void 0 : t.avatar);
			s.push(e ? E.cm.ANIMATED_AVATAR : E.cm.AVATAR);
		}
		if (null == a ? void 0 : a.banner) {
			let e = (0, c.xR)(null == a ? void 0 : a.banner);
			s.push(e ? E.cm.ANIMATED_BANNER : E.cm.BANNER);
		}
		return (
			(null == a ? void 0 : a.bio) && s.push(E.cm.BIO),
			(null == a ? void 0 : a.themeColors) != null &&
				void 0 !== a.themeColors.find((e) => null !== e) &&
				s.push(E.cm.THEME),
			(null == t ? void 0 : t.avatarDecoration) != null && s.push(E.cm.AVATAR_DECORATION),
			(null == a ? void 0 : a.profileEffectId) != null && s.push(E.cm.PROFILE_EFFECT),
			s
		);
	},
	I = (e) => {
		let t = s.Z.getStatus(e),
			n = s.Z.isMobileOnline(e);
		return t === h.Sk.ONLINE && n ? ''.concat(t, '-mobile') : t === h.Sk.ONLINE ? ''.concat(t, '-desktop') : t;
	},
	m = (e) => (null == e ? e : Object.keys(f.IIU)[Object.values(f.IIU).indexOf(e)]),
	T = (e) => {
		var t, n;
		let { layout: r, userId: i, guildId: o, sessionId: u, sourceSessionId: c, showGuildProfile: d = !0 } = e,
			E = l.default.getUser(i);
		if (null == E) return {};
		let f = (0, _.Of)(null == E ? void 0 : E.id, d ? o : void 0),
			h = d && null != o ? a.ZP.getMember(o, null == E ? void 0 : E.id) : null;
		return {
			profile_layout: r,
			profile_session_id: u,
			source_profile_session_id: c,
			profile_properties: p({
				user: E,
				userProfile: null == f ? void 0 : f._userProfile
			}),
			guild_profile_properties: p({
				guildMember: h,
				guildMemberProfile: null == f ? void 0 : f._guildMemberProfile
			}),
			profile_activity_types: s.Z.getActivities(E.id)
				.map((e) => {
					let { type: t } = e;
					return t;
				})
				.filter((e) => void 0 !== e),
			profile_badges:
				null == f
					? void 0
					: null === (t = f.getBadges()) || void 0 === t
						? void 0
						: t.map((e) => {
								let { id: t } = e;
								return t;
							}),
			avatar_decoration_sku_id: null === (n = E.avatarDecoration) || void 0 === n ? void 0 : n.skuId,
			profile_effect_sku_id: null == f ? void 0 : f.profileEffectId,
			user_status: I(E.id),
			is_guild_profile: (null == f ? void 0 : f.guildId) != null,
			is_bot_profile: E.bot
		};
	},
	g = (e) => {
		var t, n;
		let { userId: r } = e;
		return null == r
			? {}
			: {
					related_user_id: r,
					relationship_type: o.Z.getRelationshipType(r),
					related_since: o.Z.getSince(r),
					num_mutual_friends: d.Z.getMutualFriendsCount(r),
					num_mutual_guilds: null === (t = d.Z.getMutualGuilds(r)) || void 0 === t ? void 0 : t.length,
					affinity: null === (n = i.Z.getUserAffinity(r)) || void 0 === n ? void 0 : n.affinity
				};
	},
	S = (e) => {
		let { guildId: t, channelId: n, messageId: i, roleId: a, analyticsLocations: s, action: o, section: l } = e;
		u.default.track(f.rMx.USER_PROFILE_ACTION, {
			...(0, r.hH)(t),
			...(0, r.JS)(n),
			...T(e),
			...g(e),
			location_stack: s,
			profile_action: o,
			profile_section: l,
			source_message_id: i,
			source_role_id: a
		});
	},
	A = (e) => {
		let {
			guildId: t,
			channelId: n,
			analyticsLocations: i,
			activityType: a,
			activityName: s,
			activityPlatform: o,
			activitySessionId: l,
			applicationId: c,
			voiceChannelId: d
		} = e;
		u.default.track(f.rMx.USER_PROFILE_ACTIVITY_JOINED, {
			...(0, r.hH)(t),
			...(0, r.JS)(n),
			...T(e),
			...g(e),
			location_stack: i,
			activity_type: null != d ? 'VOICE' : m(a),
			activity_name: s,
			activity_platform: o,
			activity_session_id: l,
			application_id: c,
			voice_channel_id: d
		});
	},
	N = (e) => {
		let {
			guildId: t,
			channelId: n,
			analyticsLocations: i,
			action: a,
			display: s,
			activity: o,
			stream: l,
			entry: c,
			outbox: d
		} = e;
		u.default.track(f.rMx.USER_PROFILE_ACTIVITY_ACTION, {
			...(0, r.hH)(t),
			...(0, r.JS)(n),
			...T(e),
			...g(e),
			location_stack: i,
			activity_action: a,
			activity_display: s,
			activity_type: m(null != l ? f.IIU.STREAMING : null == o ? void 0 : o.type),
			activity_name: null == o ? void 0 : o.name,
			activity_platform: null == o ? void 0 : o.platform,
			activity_session_id: null == o ? void 0 : o.session_id,
			activity_application_id: null == o ? void 0 : o.application_id,
			item_id: null == c ? void 0 : c.id,
			author_id: null == c ? void 0 : c.author_id,
			item_ids:
				null == d
					? void 0
					: d.entries.map((e) => {
							let { id: t } = e;
							return t;
						}),
			author_ids:
				null == d
					? void 0
					: d.entries.map((e) => {
							let { author_id: t } = e;
							return t;
						})
		});
	},
	v = (e) => {
		let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
		u.default.track(f.rMx.USER_PROFILE_BADGE_PRESSED, {
			...(0, r.hH)(t),
			...(0, r.JS)(n),
			...T(e),
			...g(e),
			location_stack: i,
			badge: a
		});
	},
	O = (e) => {
		let { guildId: t, channelId: n, analyticsLocations: i, badge: a } = e;
		u.default.track(f.rMx.USER_PROFILE_BADGE_HOVERED, {
			...(0, r.hH)(t),
			...(0, r.JS)(n),
			...T(e),
			...g(e),
			location_stack: i,
			badge: a
		});
	};
