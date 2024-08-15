n.d(t, {
	P: function () {
		return u;
	}
}),
	n(47120);
var r,
	i,
	a,
	s,
	o = n(442837),
	l = n(570140);
let u = { enabled: !1 },
	c = [],
	d = {},
	_ = new Set(),
	E = {};
function f(e) {
	var t;
	let n = null === (t = d[e]) || void 0 === t ? void 0 : t.newMemberActions;
	return null == n ? null : ((E[e] = n), E[e]);
}
function h(e) {
	let { homeSettings: t, guildId: n } = e;
	null != n && (null == t && (d[n] = u), (d[n] = t), f(n), _.delete(n));
}
class p extends (r = o.ZP.Store) {
	getSettings(e) {
		var t;
		return null == e ? null : null !== (t = d[e]) && void 0 !== t ? t : u;
	}
	getNewMemberActions(e) {
		var t;
		return null == e || (null === (t = this.getSettings(e)) || void 0 === t ? void 0 : t.newMemberActions) == null ? null : null == E[e] ? f(e) : E[e];
	}
	getActionForChannel(e, t) {
		var n;
		let r = this.getSettings(e);
		return null == r ? null : (null !== (n = r.newMemberActions) && void 0 !== n ? n : []).find((e) => e.channelId === t);
	}
	hasMemberAction(e, t) {
		return null != this.getActionForChannel(e, t);
	}
	getResourceChannels(e) {
		var t, n;
		return null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.resourceChannels) && void 0 !== n ? n : c;
	}
	getResourceForChannel(e, t) {
		if (null == e) return null;
		let n = this.getResourceChannels(e);
		return n === c ? null : n.find((e) => e.channelId === t);
	}
	getIsLoading(e) {
		return null != e && _.has(e);
	}
	getWelcomeMessage(e) {
		var t;
		if (null != e) return null === (t = d[e]) || void 0 === t ? void 0 : t.welcomeMessage;
	}
	hasSettings(e) {
		return null != e && null != d[e];
	}
	getEnabled(e) {
		var t, n;
		return null != e && null !== (n = null === (t = d[e]) || void 0 === t ? void 0 : t.enabled) && void 0 !== n && n;
	}
	getNewMemberAction(e, t) {
		var n, r, i;
		return null == e || null == t ? null : null !== (i = null === (r = d[e]) || void 0 === r ? void 0 : null === (n = r.newMemberActions) || void 0 === n ? void 0 : n.find((e) => e.channelId === t)) && void 0 !== i ? i : null;
	}
}
(s = 'GuildOnboardingHomeSettingsStore'),
	(a = 'displayName') in (i = p)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new p(l.Z, {
		GUILD_HOME_SETTINGS_FETCH_START: function (e) {
			let { guildId: t } = e;
			_.add(t);
		},
		GUILD_HOME_SETTINGS_FETCH_SUCCESS: h,
		GUILD_HOME_SETTINGS_FETCH_FAIL: function (e) {
			let { guildId: t } = e;
			_.delete(t);
		},
		GUILD_HOME_SETTINGS_UPDATE_SUCCESS: h,
		GUILD_HOME_SETTINGS_TOGGLE_ENABLED: function (e) {
			let { guildId: t, enabled: n } = e,
				r = d[t];
			if (null == r) return !1;
			r.enabled = n;
		},
		GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function (e) {
			var t;
			let { guildId: n, resourceChannel: r } = e,
				i = d[n];
			if (null == i) return !1;
			i.resourceChannels = null !== (t = i.resourceChannels) && void 0 !== t ? t : [];
			let a = i.resourceChannels.findIndex((e) => e.channelId === r.channelId);
			return -1 !== a && ((i.resourceChannels[a] = { ...r }), !0);
		},
		GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function (e) {
			var t;
			let { guildId: n, action: r } = e,
				i = d[n];
			if (null == i) return !1;
			i.newMemberActions = null !== (t = i.newMemberActions) && void 0 !== t ? t : [];
			let a = i.newMemberActions.findIndex((e) => e.channelId === r.channelId);
			return -1 !== a && ((i.newMemberActions[a] = { ...r }), !0);
		},
		GUILD_DELETE: function (e) {
			let { guild: t } = e;
			if (null == d[t.id]) return !1;
			delete d[t.id], delete E[t.id];
		}
	}));
