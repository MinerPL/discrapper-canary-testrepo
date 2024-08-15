t.d(n, {
	TN: function () {
		return c;
	},
	WZ: function () {
		return d;
	}
});
var a,
	r,
	i,
	s,
	o = t(442837),
	l = t(570140);
let c = 1000,
	d = 200,
	u = {},
	m = !1;
class _ extends (s = o.ZP.Store) {
	isLoading() {
		return m;
	}
	passesChecklist(e) {
		var n;
		return !m && (null === (n = u[e]) || void 0 === n ? void 0 : n.sufficient);
	}
	isPendingSuccess(e) {
		let n = u[e];
		return (
			null != n &&
			!m &&
			n.healthScorePending &&
			n.safeEnvironment &&
			0 === Object.keys(n.nsfwProperties).length &&
			n.size &&
			n.protected
		);
	}
	getDiscoveryChecklist(e) {
		return u[e];
	}
}
(i = 'DiscoverGuildChecklistStore'),
	(r = 'displayName') in (a = _)
		? Object.defineProperty(a, r, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[r] = i),
	(n.ZP = new _(l.Z, {
		DISCOVER_CHECKLIST_FETCH_START: function (e) {
			m = !0;
		},
		DISCOVER_CHECKLIST_FETCH_FAILURE: function (e) {
			m = !1;
		},
		DISCOVER_CHECKLIST_FETCH_SUCCESS: function (e) {
			var n;
			let { checklist: t, guildId: a } = e;
			(m = !1),
				(u[a] = {
					guildId: t.guild_id,
					safeEnvironment: t.safe_environment,
					healthy: t.healthy,
					healthScorePending: t.health_score_pending,
					nsfwProperties: t.nsfw_properties,
					size: t.size,
					protected: t.protected,
					sufficient: t.sufficient,
					sufficientWithoutGracePeriod: t.sufficient_without_grace_period,
					gracePeriodEndDate: null != t.grace_period_end_date ? new Date(t.grace_period_end_date) : null,
					retentionHealthy: t.retention_healthy,
					engagementHealthy: t.engagement_healthy,
					minimumGuildSize: null != t.minimum_size ? t.minimum_size : c,
					healthScore: t.health_score,
					minimumGuildAge: null !== (n = t.minimum_age) && void 0 !== n ? n : 0,
					age: t.age
				});
		}
	}));
