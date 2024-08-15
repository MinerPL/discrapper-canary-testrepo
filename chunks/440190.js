let i;
var a,
	s,
	r,
	l,
	o = n(442837),
	c = n(570140),
	d = n(900849);
let u = null,
	_ = !1,
	E = !1;
class h extends (l = o.ZP.Store) {
	getRecommendedGuilds() {
		return u;
	}
	getLoadId() {
		return i;
	}
	isFetching() {
		return _;
	}
	failed() {
		return E;
	}
}
(r = 'GuildRecommendationsStore'),
	(s = 'displayName') in (a = h)
		? Object.defineProperty(a, s, {
				value: r,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (a[s] = r),
	(t.Z = new h(c.Z, {
		GUILD_RECOMMENDATION_FETCH: function () {
			_ = !0;
		},
		GUILD_RECOMMENDATION_FETCH_SUCCESS: function (e) {
			(u = e.recommendedGuilds.map(d.PP)), (i = e.loadId), (_ = !1);
		},
		GUILD_RECOMMENDATION_FETCH_FAILURE: function () {
			(E = !0), (_ = !1);
		}
	}));
