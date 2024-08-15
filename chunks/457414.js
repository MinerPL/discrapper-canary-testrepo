n.d(t, {
	S: function () {
		return c;
	},
	w: function () {
		return m;
	}
});
var s = n(481060),
	a = n(925221),
	i = n(236413),
	r = n(85960),
	l = n(273504),
	o = n(689938);
let c = (e) => {
		switch (e) {
			case l.fX.KEYWORD:
			case l.fX.USER_PROFILE:
				return !0;
			default:
				return !1;
		}
	},
	d = (e) => {
		switch (e) {
			case l.fX.KEYWORD:
			case l.fX.ML_SPAM:
			case l.fX.DEFAULT_KEYWORD_LIST:
			case l.fX.MENTION_SPAM:
			case l.fX.SERVER_POLICY:
			case l.fX.USER_PROFILE:
				return !0;
			default:
				return !1;
		}
	},
	u = (e, t) => {
		var n;
		return null !== (n = null == t ? void 0 : t.name) && void 0 !== n ? n : r.I6[e].getDefaultRuleName();
	},
	_ = (e, t) => {
		if (!!(0, i.Vb)(t)) {
			if ((0, i.DO)(t))
				return t.triggerMetadata.regexPatterns.length > 0
					? o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_HEADER_WORD_AND_REGEX_COUNT.format({
							keywordCount: t.triggerMetadata.keywordFilter.length,
							regexPatternCount: t.triggerMetadata.regexPatterns.length
						})
					: o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_HEADER_WORD_COUNT.format({
							keywordCount: t.triggerMetadata.keywordFilter.length
						});
		}
	},
	I = (e) => {
		switch (e) {
			case l.fX.KEYWORD:
				return o.Z.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_DESCRIPTION;
			case l.fX.ML_SPAM:
				return o.Z.Messages.GUILD_AUTOMOD_ML_SPAM_FILTER_DESCRIPTION;
			case l.fX.DEFAULT_KEYWORD_LIST:
				return o.Z.Messages.GUILD_AUTOMOD_DEFAULT_KEYWORD_LIST_DESCRIPTION_TEXT;
			case l.fX.MENTION_SPAM:
				return o.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_FILTER_DESCRIPTION;
			case l.fX.USER_PROFILE:
				return o.Z.Messages.GUILD_AUTOMOD_USER_PROFILE_FILTER_DESCRIPTION;
			default:
				return null;
		}
	},
	E = (e) => {
		if (e === l.fX.KEYWORD) return o.Z.Messages.GUILD_AUTOMOD_LINK_FILTER_MATCHING_STRATEGY_DESCRIPTION.format();
	},
	T = (e) => {
		switch (e) {
			case l.fX.MENTION_SPAM:
				return s.AtIcon;
			case l.fX.KEYWORD:
				return s.ChannelListPlusIcon;
			case l.fX.ML_SPAM:
			case l.fX.USER_PROFILE:
				return (0, s.makeIconCompat)(a.Z);
			case l.fX.DEFAULT_KEYWORD_LIST:
				return s.MenuIcon;
		}
	};
function m(e, t) {
	var n, a, i, r, l;
	return null != e && d(e)
		? {
				headerText: null !== (n = u(e, t)) && void 0 !== n ? n : '',
				headerSubtext: null !== (a = _(e, t)) && void 0 !== a ? a : '',
				descriptionText: null !== (i = I(e)) && void 0 !== i ? i : '',
				descriptionSubtext: null !== (r = E(e)) && void 0 !== r ? r : '',
				icon: null !== (l = T(e)) && void 0 !== l ? l : s.LinkIcon
			}
		: null;
}
