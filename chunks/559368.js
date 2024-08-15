var s,
	a,
	i,
	r,
	l = n(877921),
	o = n.n(l),
	c = n(442837),
	d = n(570140);
let u = ['pct_retained', 'new_members', 'visitors', 'communicators'],
	_ = {},
	I = {},
	E = null;
function T(e) {
	let { guildId: t, stats: n } = e;
	E = null;
	let s = {},
		a = {},
		i = n[0],
		r = n[1];
	null != i &&
		u.forEach((e) => {
			if (null != i[e]) {
				let t = o()(e);
				null != r && 0 !== r[e] && (s[''.concat(t, 'Change')] = ((i[e] - r[e]) * 100) / r[e]), (a[t] = i[e]);
			}
		}),
		(_[t] = {
			...a,
			...s,
			..._[t]
		});
}
function m(e) {
	let { error: t } = e;
	E = t.code;
}
class N extends (r = c.ZP.Store) {
	getOverviewAnalytics(e) {
		return _[e];
	}
	getMemberInsights(e) {
		var t;
		return null !== (t = I[e]) && void 0 !== t ? t : {};
	}
	shouldFetchMemberInsights(e) {
		var t;
		let n = null === (t = I[e]) || void 0 === t ? void 0 : t.fetchedAt;
		return null == n || Date.now() - n > 43200000;
	}
	getError() {
		return E;
	}
}
(i = 'GuildSettingsAnalyticsStore'),
	(a = 'displayName') in (s = N)
		? Object.defineProperty(s, a, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (s[a] = i),
	(t.Z = new N(d.Z, {
		GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: T,
		GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: T,
		GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: T,
		GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: m,
		GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: m,
		GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: m,
		GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS: function (e) {
			let { guildId: t, ...n } = e;
			I[t] = {
				...n,
				fetchedAt: Date.now()
			};
		}
	}));
