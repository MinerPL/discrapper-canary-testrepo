let i, a, s;
n(47120);
var r,
	l,
	o,
	c,
	d = n(442837),
	u = n(570140);
function _() {
	(a = {}), (i = {}), (s = new Set());
}
_();
class E extends (r = d.ZP.Store) {
	getStatisticsForApplication(e) {
		return i[e];
	}
	shouldFetchStatisticsForApplication(e) {
		let t = a[e];
		return !s.has(e) && (null == t || Date.now() - t > 3600000);
	}
}
(c = 'ApplicationStatisticsStore'),
	(o = 'displayName') in (l = E)
		? Object.defineProperty(l, o, {
				value: c,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[o] = c),
	(t.Z = new E(u.Z, {
		APPLICATION_ACTIVITY_STATISTICS_FETCH_START: function (e) {
			let { applicationId: t } = e;
			s.add(t);
		},
		APPLICATION_ACTIVITY_STATISTICS_FETCH_FAIL: function (e) {
			let { applicationId: t } = e;
			s.delete(t);
		},
		APPLICATION_ACTIVITY_STATISTICS_FETCH_SUCCESS: function (e) {
			let { statistics: t, applicationId: n } = e;
			(a[n] = Date.now()), s.delete(n), (i[n] = t);
		},
		LOGOUT: _
	}));
