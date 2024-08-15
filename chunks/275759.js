n.d(t, {
	FI: function () {
		return S;
	},
	O1: function () {
		return i;
	},
	SJ: function () {
		return p;
	},
	Ur: function () {
		return g;
	},
	kQ: function () {
		return T;
	},
	n_: function () {
		return I;
	},
	xp: function () {
		return m;
	}
});
var r,
	i,
	a = n(512722),
	s = n.n(a),
	o = n(392711),
	l = n.n(o),
	u = n(729594);
n(442837);
var c = n(627420);
n(704215);
var d = n(277800);
n(605236);
var _ = n(430824);
n(496675);
var E = n(856651),
	f = n(981631),
	h = n(689938);
let p = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
function m(e) {
	let { query: t } = u.parse(e, !0),
		{ code: n, state: r, error: i, error_description: a } = t;
	return (
		s()(!Array.isArray(n), 'Received multiple query param values for code'),
		s()(!Array.isArray(r), 'Received multiple query param values for state'),
		s()(!Array.isArray(i), 'Received multiple query param values for error'),
		s()(!Array.isArray(a), 'Received multiple query param values for error_description'),
		{
			code: n,
			state: r,
			error: i,
			errorDescription: a
		}
	);
}
function I(e) {
	let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: a } = e,
		s = null,
		o = Math.round(Number(a));
	switch (r) {
		case E.iO.EQUAL:
			(s = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE), t === f.ABu.PAYPAL && n === E.PC.PAYPAL_VERIFIED && (s = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
			break;
		case E.iO.NOT_EQUAL:
			s = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
			break;
		case E.iO.LESS_THAN:
			(s = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST), (o = Math.max(0, o - 1));
			break;
		case E.iO.GREATER_THAN:
			(s = h.Z.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST), (o = Math.max(0, o + 1));
			break;
		case void 0:
		case null:
			return null;
	}
	if ((null != i && (s = i), s instanceof c._H && null != r))
		switch (t) {
			case f.ABu.REDDIT:
				switch (n) {
					case E.PC.CREATED_AT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: o }) });
						break;
					case E.PC.REDDIT_TOTAL_KARMA:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({ karma: o }) });
						break;
					case E.PC.REDDIT_GOLD:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD });
						break;
					case E.PC.REDDIT_MOD:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR });
						break;
					default:
						return null;
				}
				break;
			case f.ABu.STEAM:
				switch (n) {
					case E.PC.CREATED_AT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: o }) });
						break;
					case E.PC.STEAM_GAME_COUNT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({ count: o }) });
						break;
					case E.PC.STEAM_ITEM_COUNT_TF2:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({ count: o }) });
						break;
					case E.PC.STEAM_ITEM_COUNT_DOTA2:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({ count: o }) });
						break;
					default:
						return null;
				}
				break;
			case f.ABu.TWITTER:
				switch (n) {
					case E.PC.CREATED_AT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: o }) });
						break;
					case E.PC.TWITTER_VERIFIED:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED });
						break;
					case E.PC.TWITTER_FOLLOWERS_COUNT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({ count: o }) });
						break;
					case E.PC.TWITTER_STATUSES_COUNT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({ count: o }) });
						break;
					default:
						return null;
				}
				break;
			case f.ABu.PAYPAL:
				switch (n) {
					case E.PC.CREATED_AT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: o }) });
						break;
					case E.PC.PAYPAL_VERIFIED:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED });
						break;
					default:
						return null;
				}
				break;
			case f.ABu.EBAY:
				switch (n) {
					case E.PC.CREATED_AT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({ days: o }) });
						break;
					case E.PC.EBAY_TOP_RATED_SELLER:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER });
						break;
					case E.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({ value: o }) });
						break;
					case E.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({ count: o }) });
						break;
					case E.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({ count: o }) });
						break;
					default:
						return null;
				}
				break;
			case f.ABu.TIKTOK:
				switch (n) {
					case E.PC.TIKTOK_VERIFIED:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED });
						break;
					case E.PC.TIKTOK_FOLLOWER_COUNT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({ count: o }) });
						break;
					case E.PC.TIKTOK_FOLLOWING_COUNT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({ count: o }) });
						break;
					case E.PC.TIKTOK_LIKES_COUNT:
						s = s.format({ platformQuantityHook: () => h.Z.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({ count: o }) });
						break;
					default:
						return null;
				}
				break;
			default:
				return null;
		}
	return s;
}
function T(e, t) {
	return Object.values(t).some((e) => {
		var t;
		return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
	});
}
function g(e) {
	var t, n;
	let { guildMember: r, guild: i, guildRoles: a, channel: o, onlyChannelConnectionRoles: u = !1 } = e;
	if (null == r) return null;
	if ((null == i && null != o && (i = _.Z.getGuild(o.getGuildId())), null == i)) return null;
	let { id: c } = i;
	null == a && (a = _.Z.getRoles(c));
	let E = r.roles
			.map((e) => a[e])
			.filter((e) => {
				var t;
				return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
			})
			.sort((e, t) => (s()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)),
		f = l().intersection(E, (0, d.Z)(o));
	return f.length > 0 ? (null !== (t = f[0]) && void 0 !== t ? t : null) : u ? null : null !== (n = E[0]) && void 0 !== n ? n : null;
}
function S(e, t) {
	if (null == e || '' === e) return null;
	let n = new Date(e);
	return !(n instanceof Date) || isNaN(n.getTime())
		? null
		: n.toLocaleDateString(t, {
				month: 'short',
				day: 'numeric',
				year: 'numeric'
			});
}
((r = i || (i = {}))[(r.AND = 0)] = 'AND'), (r[(r.OR = 1)] = 'OR');
