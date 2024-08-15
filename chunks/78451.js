s.d(a, {
	IF: function () {
		return l;
	},
	LJ: function () {
		return I;
	},
	MF: function () {
		return i;
	},
	X7: function () {
		return u;
	},
	c7: function () {
		return c;
	}
});
var n = s(524437);
s(376345);
var t = s(692547),
	E = s(2150),
	_ = s(981631),
	r = s(973005),
	o = s(689938);
function I(e) {
	return e.map((e) => ({
		title: e.name,
		description: e.desc,
		highlightColor: (function (e) {
			switch (e) {
				case N('PRIMARY_400'):
					return E.q.ACCENT;
				case N('GREEN_360'):
					return E.q.GREEN;
				case N('YELLOW_360'):
					return E.q.YELLOW;
				case N('ORANGE_345'):
					return E.q.ORANGE;
				case N('RED_400'):
					return E.q.RED;
				default:
					return E.q.NONE;
			}
		})(e.color),
		value: e.value,
		disabled: e.disabled
	}));
}
function l() {
	let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
		a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
	return [
		{
			name: o.Z.Messages.VERIFICATION_LEVEL_NONE,
			desc: o.Z.Messages.VERIFICATION_LEVEL_NONE_CRITERIA,
			value: _.sFg.NONE,
			disabled: e,
			tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null
		},
		{
			name: o.Z.Messages.VERIFICATION_LEVEL_LOW,
			desc: o.Z.Messages.VERIFICATION_LEVEL_LOW_CRITERIA,
			value: _.sFg.LOW,
			color: a ? void 0 : N('GREEN_360')
		},
		{
			name: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM,
			desc: o.Z.Messages.VERIFICATION_LEVEL_MEDIUM_CRITERIA.format({ min: _.YeM.ACCOUNT_AGE }),
			value: _.sFg.MEDIUM,
			color: a ? void 0 : N('YELLOW_360')
		},
		{
			name: o.Z.Messages.VERIFICATION_LEVEL_HIGH,
			desc: o.Z.Messages.VERIFICATION_LEVEL_HIGH_CRITERIA.format({ min: _.YeM.MEMBER_AGE }),
			value: _.sFg.HIGH,
			color: a ? void 0 : N('ORANGE_345')
		},
		{
			name: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH,
			desc: o.Z.Messages.VERIFICATION_LEVEL_VERY_HIGH_CRITERIA,
			value: _.sFg.VERY_HIGH,
			color: a ? void 0 : N('RED_400')
		}
	];
}
function i() {
	let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
	return [
		{
			name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_V2,
			desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_HIGH_DESCRIPTION_V2,
			value: _.lxg.ALL_MEMBERS,
			color: N('RED_400')
		},
		{
			name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_V2,
			desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_MEDIUM_DESCRIPTION_V2,
			value: _.lxg.MEMBERS_WITHOUT_ROLES,
			disabled: e,
			tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
			color: N('YELLOW_360')
		},
		{
			name: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_V2,
			desc: o.Z.Messages.EXPLICIT_CONTENT_FILTER_DISABLED_DESCRIPTION_V2,
			value: _.lxg.DISABLED,
			disabled: e,
			tooltipText: e ? o.Z.Messages.TOOLTIP_COMMUNITY_FEATURE_DISABLED : null,
			color: N('PRIMARY_400')
		}
	];
}
function c() {
	return [
		{
			name: o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS,
			desc: o.Z.Messages.USER_DM_SPAM_FILTER_FRIENDS_AND_NON_FRIENDS_HELP,
			value: n.Xr.FRIENDS_AND_NON_FRIENDS,
			color: N('GREEN_360')
		},
		{
			name: o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS,
			desc: o.Z.Messages.USER_DM_SPAM_FILTER_NON_FRIENDS_HELP,
			value: n.Xr.NON_FRIENDS,
			color: N('YELLOW_360')
		},
		{
			name: o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED,
			desc: o.Z.Messages.USER_DM_SPAM_FILTER_DISABLED_HELP,
			value: n.Xr.DISABLED,
			color: N('RED_400')
		}
	];
}
function u() {
	return [
		{
			name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_V2,
			desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_FRIENDS_AND_NON_FRIENDS_HELP_V2,
			value: r.TI.FRIENDS_AND_NON_FRIENDS,
			color: N('GREEN_360')
		},
		{
			name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_V2,
			desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_NON_FRIENDS_HELP_V2,
			value: r.TI.NON_FRIENDS,
			color: N('YELLOW_360')
		},
		{
			name: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_V2,
			desc: o.Z.Messages.USER_EXPLICIT_CONTENT_FILTER_DISABLED_HELP_V2,
			value: r.TI.DISABLED,
			color: N('RED_400')
		}
	];
}
function N(e) {
	return t.Z.unsafe_rawColors[e].css;
}
