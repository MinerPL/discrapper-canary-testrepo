var r,
	i,
	a,
	s,
	o,
	l,
	u = n(442837),
	c = n(570140);
((r = o || (o = {})).NOT_FETCHED = 'NOT_FETCHED'), (r.FETCHING = 'FETCHING'), (r.FETCHED = 'FETCHED');
let d = {},
	_ = 'NOT_FETCHED';
class E extends (l = u.ZP.Store) {
	getMarketingBySurface(e) {
		return d[e];
	}
	get fetchState() {
		return _;
	}
}
(s = 'CollectiblesMarketingsStore'),
	(a = 'displayName') in (i = E)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new E(c.Z, {
		COLLECTIBLES_MARKETING_FETCH: () => {
			_ = 'FETCHING';
		},
		COLLECTIBLES_MARKETING_FETCH_SUCCESS: (e) => {
			(d = e.marketings.marketingsBySurfaces), (_ = 'FETCHED');
		},
		LOGOUT: () => {
			(d = {}), (_ = 'NOT_FETCHED');
		}
	}));
