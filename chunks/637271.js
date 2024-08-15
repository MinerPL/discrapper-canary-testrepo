var i,
	a = n(442837),
	s = n(570140),
	l = n(592125),
	r = n(176505);
function o(e, t, n) {
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
let c = {},
	u = {};
class d extends (i = a.ZP.PersistedStore) {
	initialize(e) {
		var t;
		c = null !== (t = null == e ? void 0 : e.selectedResourceChannelIdByGuildId) && void 0 !== t ? t : {};
	}
	getState() {
		return { selectedResourceChannelIdByGuildId: c };
	}
	getSelectedResourceChannelId(e) {
		return null == e ? null : c[e];
	}
	getHomeNavigationChannelId(e) {
		var t;
		return null == e ? null : null !== (t = c[e]) && void 0 !== t ? t : u[e];
	}
}
o(d, 'displayName', 'GuildOnboardingHomeNavigationStore'),
	o(d, 'persistKey', 'GuildOnboardingHomeNavigationStore'),
	(t.Z = new d(s.Z, {
		CHANNEL_SELECT: function (e) {
			let { channelId: t, guildId: n } = e;
			if (null == n || t === r.oC.GUILD_HOME) return;
			let i = l.Z.getChannel(t),
				a = c[n],
				s = u[n];
			if (
				!(
					(null == i ? void 0 : i.isThread()) &&
					(null == i ? void 0 : i.parent_id) != null &&
					[s, a].includes(null == i ? void 0 : i.parent_id)
				)
			)
				t !== a && delete c[n], t !== s && delete u[n];
		},
		SELECT_HOME_RESOURCE_CHANNEL: function (e) {
			let { channelId: t, guildId: n } = e;
			null == t ? delete u[n] : (c[n] = t), delete u[n];
		},
		SELECT_NEW_MEMBER_ACTION_CHANNEL: function (e) {
			let { channelId: t, guildId: n } = e;
			delete c[n], (u[n] = t);
		}
	}));
