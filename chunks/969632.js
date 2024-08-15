n(47120);
var s,
	a = n(392711),
	i = n.n(a),
	r = n(442837),
	l = n(570140),
	o = n(563534),
	c = n(999382);
function d(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let u = { enabled: !1 },
	_ = null,
	I = Object.assign({}, u),
	E = !1,
	T = {};
function m() {
	(function () {
		(_ = null), (I = Object.assign({}, u)), (E = !1);
	})(),
		(_ = c.Z.getGuildId()),
		(I = i().cloneDeep(Object.assign({}, o.Z.getSettings(_))));
}
function N(e, t) {
	if (null == I.newMemberActions) return !1;
	let n = I.newMemberActions.findIndex((t) => t.channelId === e);
	if (n < 0) return !1;
	(I.newMemberActions[n] = { ...t }), (I.newMemberActions = [...I.newMemberActions]);
}
function S(e, t) {
	if (null == I.resourceChannels) return !1;
	let n = I.resourceChannels.findIndex((t) => t.channelId === e);
	if (n < 0) return !1;
	(I.resourceChannels[n] = { ...t }), (I.resourceChannels = [...I.resourceChannels]);
}
function h() {
	(E = !1), (I = i().cloneDeep(Object.assign({}, o.Z.getSettings(_))));
}
class g extends (s = r.ZP.PersistedStore) {
	initialize(e) {
		null != e && (T = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.Z, o.Z);
	}
	getState() {
		return { dismissedSuggestedChannelIdsByGuildId: T };
	}
	getSettings() {
		return null != I ? I : u;
	}
	hasChanges() {
		return null != _ && !i().isEqual(i().omit(I, 'newMemberActions'), i().omit(o.Z.getSettings(_), 'newMemberActions'));
	}
	getSubmitting() {
		return E;
	}
	getDismissedSuggestedChannelIds(e) {
		var t;
		return null == e ? [] : null !== (t = T[e]) && void 0 !== t ? t : [];
	}
	getResourceChannel(e) {
		var t;
		if (null == e) return null;
		let n = null === (t = I.resourceChannels) || void 0 === t ? void 0 : t.find((t) => t.channelId === e);
		return null == n ? null : n;
	}
	getNewMemberAction(e) {
		var t;
		if (null == e) return null;
		let n = null === (t = I.newMemberActions) || void 0 === t ? void 0 : t.find((t) => t.channelId === e);
		return null == n ? null : n;
	}
}
d(g, 'displayName', 'GuildSettingsOnboardingHomeSettingsStore'),
	d(g, 'persistKey', 'GuildSettingsOnboardingHomeSettingsStore'),
	(t.Z = new g(l.Z, {
		GUILD_SETTINGS_INIT: m,
		GUILD_SETTINGS_SET_SECTION: m,
		GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: m,
		GUILD_HOME_SETTINGS_FETCH_SUCCESS: function () {
			I = i().cloneDeep(Object.assign({}, o.Z.getSettings(_)));
		},
		GUILD_HOME_SETTINGS_UPDATE_START: function () {
			E = !0;
		},
		GUILD_HOME_SETTINGS_UPDATE_SUCCESS: h,
		GUILD_HOME_SETTINGS_UPDATE_FAIL: h,
		GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
			let { action: t } = e;
			return N(t.channelId, t);
		},
		GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
			let { resourceChannel: t } = e;
			S(t.channelId, t);
		},
		GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function (e) {
			let { welcomeMessage: t } = e;
			if (null == t) I.welcomeMessage = void 0;
			else {
				var n, s, a, i, r, l;
				I.welcomeMessage = {
					authorIds:
						null !==
							(i =
								null !== (a = t.authorIds) && void 0 !== a
									? a
									: null === (n = I.welcomeMessage) || void 0 === n
										? void 0
										: n.authorIds) && void 0 !== i
							? i
							: [],
					message:
						null !==
							(l =
								null !== (r = t.message) && void 0 !== r
									? r
									: null === (s = I.welcomeMessage) || void 0 === s
										? void 0
										: s.message) && void 0 !== l
							? l
							: ''
				};
			}
		},
		GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function (e) {
			let { channelId: t, action: n } = e;
			return N(t, n);
		},
		GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function (e) {
			var t;
			let { action: n } = e;
			(I.newMemberActions = null !== (t = I.newMemberActions) && void 0 !== t ? t : []),
				(I.newMemberActions = [...I.newMemberActions, n]);
		},
		GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function (e) {
			let { channelId: t } = e;
			if (null == I.newMemberActions) return !1;
			I.newMemberActions = [...I.newMemberActions.filter((e) => e.channelId !== t)];
		},
		GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function (e) {
			let { actions: t } = e;
			I.newMemberActions = t;
		},
		GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function (e) {
			let { channelId: t, resourceChannel: n } = e;
			S(t, n);
		},
		GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function (e) {
			var t;
			let { resourceChannel: n } = e;
			(I.resourceChannels = (null !== (t = I.resourceChannels) && void 0 !== t ? t : []).filter(
				(e) => e.channelId !== n.channelId
			)),
				(I.resourceChannels = [...I.resourceChannels, n]);
		},
		GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function (e) {
			let { resourceChannelId: t } = e;
			if (null == I.resourceChannels) return !1;
			I.resourceChannels = [...I.resourceChannels.filter((e) => e.channelId !== t)];
		},
		GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function (e) {
			let { resourceChannels: t } = e;
			I.resourceChannels = t;
		},
		GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function (e) {
			var t;
			let { guildId: n, channelIds: s } = e;
			T[n] = [...(null !== (t = T[n]) && void 0 !== t ? t : []), ...s];
		}
	}));
