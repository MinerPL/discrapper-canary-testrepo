n.d(t, {
	Ar: function () {
		return L;
	},
	DO: function () {
		return I;
	},
	Fn: function () {
		return O;
	},
	Jq: function () {
		return N;
	},
	QO: function () {
		return M;
	},
	Vb: function () {
		return d;
	},
	YN: function () {
		return R;
	},
	ZF: function () {
		return f;
	},
	ep: function () {
		return S;
	},
	km: function () {
		return c;
	},
	nC: function () {
		return A;
	},
	vo: function () {
		return T;
	}
}),
	n(47120),
	n(411104);
var r = n(581364),
	a = n(314897),
	i = n(866830),
	E = n(539573),
	_ = n(727072),
	u = n(85960),
	l = n(273504),
	s = n(689938);
let o = (e, t) => ''.concat(e, '-').concat(t, '-new-rule'),
	I = (e) => (null == e ? void 0 : e.triggerType) === l.fX.KEYWORD,
	T = (e) => (null == e ? void 0 : e.triggerType) === l.fX.ML_SPAM,
	O = (e) => (null == e ? void 0 : e.triggerType) === l.fX.DEFAULT_KEYWORD_LIST,
	A = (e) => (null == e ? void 0 : e.triggerType) === l.fX.MENTION_SPAM,
	N = (e) => (null == e ? void 0 : e.triggerType) === l.fX.USER_PROFILE;
function S(e, t) {
	let n = u.I6[t],
		r = (0, u.jp)(t, e),
		E = {
			id: o(e, t),
			name: n.getDefaultRuleName(),
			guildId: e,
			eventType: n.eventType,
			triggerType: t,
			triggerMetadata: r,
			enabled: !0,
			creatorId: a.default.getId(),
			actions: (0, i.qR)(n),
			position: 0,
			exemptChannels: new Set(),
			exemptRoles: new Set()
		};
	if (d(E)) throw Error(s.Z.Messages.GUILD_AUTOMOD_NEW_RULE_ERROR);
	let l = (0, _.mY)(e, t);
	return l > 0 && (E.name += ' '.concat(l + 1)), E;
}
function c(e, t) {
	if (e.length > t) throw Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_KEYWORDS.format({ limit: t }));
	e.forEach((e) => {
		if (e.length > l.hu || e.length < l.Vk)
			throw new E.V6(
				s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_INVALID_KEYWORD_LENGTH.format({
					keyword: e,
					max: l.hu,
					min: l.Vk
				})
			);
	});
}
function M(e) {
	if (I(e)) {
		var t, n;
		let r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [],
			a = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
		if (0 === r.length && 0 === a.length) throw Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_NO_KEYWORDS_OR_REGEX);
		c(r, l.RH),
			!(function (e) {
				if (e.length > l.VW)
					throw Error(s.Z.Messages.GUILD_AUTOMOD_KEYWORD_ERROR_TOO_MANY_REGEX.format({ limit: l.VW }));
				e.forEach((e) => {
					if (e.length > l.aj || e.length < l.uE)
						throw new E.uS(
							s.Z.Messages.GUILD_AUTOMOD_REGEX_ERROR_INVALID_REGEX_LENGTH.format({
								regex: e,
								max: l.aj,
								min: l.uE
							})
						);
				});
			})(a);
	}
	if (0 === e.actions.length) throw Error(s.Z.Messages.GUILD_AUTOMOD_ERROR_NO_ACTIONS);
}
function d(e) {
	var t;
	return (0, r.BH)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : 'INVALID_SNOWFLAKE');
}
function R(e) {
	switch (e) {
		case l.q4.MESSAGE_SEND:
			return s.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_MESSAGE_SEND;
		case l.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
			return s.Z.Messages.GUILD_AUTOMOD_EVENT_TYPE_GUILD_MEMBER_JOIN_OR_UPDATE;
		default:
			return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
	}
}
function f(e) {
	switch (e) {
		case l.jj.BLOCK_MESSAGE:
			return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
		case l.jj.FLAG_TO_CHANNEL:
			return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
		case l.jj.USER_COMMUNICATION_DISABLED:
			return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_USER_COMMUNICATION_DISABLED;
		case l.jj.QUARANTINE_USER:
			return s.Z.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER;
		default:
			return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
	}
}
function L(e) {
	switch (e) {
		case l.fX.KEYWORD:
			return s.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
		case l.fX.ML_SPAM:
			return s.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_NAME;
		case l.fX.DEFAULT_KEYWORD_LIST:
			return s.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_FILTER_NAME;
		case l.fX.MENTION_SPAM:
			return s.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_NAME;
		case l.fX.USER_PROFILE:
			return s.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_NAME;
		default:
			return s.Z.Messages.GUILD_AUTOMOD_UNKNOWN;
	}
}
