n.d(t, {
	M: function () {
		return o;
	}
});
var r,
	i,
	a,
	s,
	o,
	l,
	u = n(31775),
	c = n.n(u),
	d = n(442837),
	_ = n(570140);
function E(e) {
	let { applicationId: t, guildId: n, page: r } = e;
	return 'applicationId:'.concat(t, ' guildId:').concat(n, ' page:').concat(r);
}
((r = o || (o = {}))[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), (r[(r.ERROR = 3)] = 'ERROR');
let f = new (c())({ max: 20 }),
	h = {};
class p extends (l = d.ZP.Store) {
	getSimilarApplications(e) {
		let { applicationId: t, guildId: n, page: r } = e;
		if (null == t) return;
		let i = E({
			applicationId: t,
			guildId: n,
			page: r
		});
		return f.get(i);
	}
	getFetchState(e) {
		let { applicationId: t, guildId: n, page: r } = e;
		if (null != t)
			return h[
				E({
					applicationId: t,
					guildId: n,
					page: r
				})
			];
	}
}
(s = 'ApplicationDirectorySimilarApplicationsStore'),
	(a = 'displayName') in (i = p)
		? Object.defineProperty(i, a, {
				value: s,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (i[a] = s),
	(t.Z = new p(_.Z, {
		APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS: function (e) {
			let { applicationId: t, guildId: n, page: r } = e,
				i = E({
					applicationId: t,
					guildId: n,
					page: r
				});
			h = {
				...h,
				[i]: 1
			};
		},
		APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS: function (e) {
			let { applicationId: t, guildId: n, similarApplications: r, loadId: i, page: a, totalPages: s } = e,
				o = E({
					applicationId: t,
					guildId: n,
					page: a
				});
			f.set(o, {
				lastFetchTimeMs: Date.now(),
				applications: r,
				loadId: i,
				page: a,
				totalPages: s
			}),
				(h = {
					...h,
					[o]: 2
				});
		},
		APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE: function (e) {
			let { applicationId: t, guildId: n, page: r } = e,
				i = E({
					applicationId: t,
					guildId: n,
					page: r
				});
			h = {
				...h,
				[i]: 3
			};
		}
	}));
