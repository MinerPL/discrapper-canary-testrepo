n.d(t, {
	CP: function () {
		return I;
	},
	T4: function () {
		return T;
	},
	bG: function () {
		return S;
	},
	g5: function () {
		return A;
	},
	gZ: function () {
		return p;
	},
	i6: function () {
		return m;
	},
	yC: function () {
		return g;
	}
}),
	n(47120);
var r = n(261470),
	i = n(288385),
	a = n(544891),
	s = n(570140),
	o = n(706454),
	l = n(264043),
	u = n(894653),
	c = n(368862),
	d = n(809547),
	_ = n(303383),
	E = n(973001),
	f = n(981631);
let h = new Map();
async function p(e) {
	var t;
	let n = Date.now(),
		i = null !== (t = h.get(e)) && void 0 !== t ? t : 0;
	if (l.Z.getApplicationFetchState(e) === l.M.FETCHING || l.Z.isInvalidApplication(e) || n < i + 600000) return;
	h.set(e, n),
		s.Z.dispatch({
			type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
			applicationId: e
		});
	let o = new r.Z(1000, 5000),
		u = (e, t) =>
			429 === e.status &&
			!!(o.fails < 10) &&
			(o.fail(() => {
				t(void 0, u);
			}),
			!0);
	try {
		let t = (
			await a.tn.get({
				url: f.ANM.APPLICATION_DIRECTORY_EMBED_APPLICATION(e),
				backoff: o,
				retries: 10,
				interceptResponse: u
			})
		).body;
		s.Z.dispatch({
			type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
			application: t
		});
	} catch (t) {
		s.Z.dispatch({
			type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
			applicationId: e,
			isInvalidApplication: !0
		});
	}
}
async function m(e) {
	let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
		n = Date.now(),
		r = l.Z.getApplicationFetchState(e),
		i = l.Z.getApplicationLastFetchTime(e),
		{ dontRefetchMs: u } = t;
	if (r !== l.M.FETCHING && (null == i || !(i + (null != u ? u : 600000) > n))) {
		s.Z.dispatch({
			type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION',
			applicationId: e
		});
		try {
			let t = await a.tn.get({
				url: f.ANM.APPLICATION_DIRECTORY_APPLICATION(e),
				query: { locale: o.default.locale }
			});
			s.Z.dispatch({
				type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS',
				application: t.body
			});
		} catch (t) {
			s.Z.dispatch({
				type: 'APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE',
				applicationId: e,
				isInvalidApplication: !0
			});
		}
	}
}
async function I() {
	let e = Date.now(),
		t = u.Z.getLastFetchTimeMs();
	if (null != t && t + 600000 > e) return;
	let n = await a.tn.get({
		url: f.ANM.APPLICATION_DIRECTORY_CATEGORIES,
		query: { locale: o.default.locale }
	});
	s.Z.dispatch({
		type: 'APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS',
		categories: n.body
	});
}
async function T(e) {
	var t;
	let { applicationId: n, guildId: r, options: i } = e,
		{ page: l } = null != i ? i : {},
		u = Date.now(),
		c = _.Z.getFetchState({
			applicationId: n,
			guildId: r
		}),
		{ lastFetchTimeMs: d } =
			null !==
				(t = _.Z.getSimilarApplications({
					applicationId: n,
					guildId: r
				})) && void 0 !== t
				? t
				: {};
	if (c !== _.M.FETCHING && (null == d || !(d + 600000 > u))) {
		s.Z.dispatch({
			type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS',
			applicationId: n,
			guildId: r,
			page: l
		});
		try {
			let e = await a.tn.get({
				url: f.ANM.APPLICATION_DIRECTORY_SIMILAR(n),
				query: {
					guild_id: r,
					page: l,
					locale: o.default.locale
				}
			});
			s.Z.dispatch({
				type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_SUCCESS',
				applicationId: n,
				guildId: r,
				similarApplications: e.body.applications,
				loadId: e.body.load_id,
				page: l,
				totalPages: e.body.num_pages
			});
		} catch (e) {
			s.Z.dispatch({
				type: 'APPLICATION_DIRECTORY_FETCH_SIMILAR_APPLICATIONS_FAILURE',
				applicationId: n,
				guildId: r,
				page: l
			});
		}
	}
}
async function g(e) {
	var t;
	let { query: n, guildId: r, options: l, onSuccessCallback: u } = e,
		{ page: c, categoryId: _, integrationType: E, minUserInstallCommandCount: h, excludeAppsWithCustomInstallUrl: p, excludeNonEmbeddedApps: m, excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I, source: T = i.F.APP_DIRECTORY } = null != l ? l : {},
		g = Date.now(),
		S = d.Z.getFetchState({
			query: n,
			guildId: r,
			page: c,
			categoryId: _,
			integrationType: E
		}),
		{ lastFetchTimeMs: A } =
			null !==
				(t = d.Z.getSearchResults({
					query: n,
					guildId: r,
					page: c,
					categoryId: _,
					integrationType: E
				})) && void 0 !== t
				? t
				: {};
	if (S !== d.M.FETCHING && (null == A || !(A + 600000 > g))) {
		s.Z.dispatch({
			type: 'APPLICATION_DIRECTORY_FETCH_SEARCH',
			query: n,
			guildId: r,
			page: c,
			categoryId: _,
			integrationType: E,
			minUserInstallCommandCount: h,
			excludeAppsWithCustomInstallUrl: p,
			excludeNonEmbeddedApps: m,
			excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
			source: T
		});
		try {
			let e = await a.tn.get({
				url: f.ANM.APPLICATION_DIRECTORY_SEARCH,
				query: {
					query: n,
					guild_id: r,
					page: c,
					category_id: _,
					locale: o.default.locale,
					integration_type: E,
					min_user_install_command_count: h,
					exclude_apps_with_custom_install_url: p,
					exclude_non_embedded_apps: m,
					exclude_embedded_apps_without_primary_entry_point_app_command: I,
					source: T
				}
			});
			s.Z.dispatch({
				type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_SUCCESS',
				query: n,
				guildId: r,
				page: c,
				categoryId: _,
				integrationType: E,
				result: {
					results: e.body.results,
					countsByCategory: e.body.counts_by_category,
					totalCount: e.body.result_count,
					totalPages: e.body.num_pages,
					type: e.body.type,
					loadId: e.body.load_id
				},
				minUserInstallCommandCount: h,
				excludeAppsWithCustomInstallUrl: p,
				excludeNonEmbeddedApps: m,
				excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
				source: T
			}),
				null == u || u(e.body.result_count);
		} catch (e) {
			s.Z.dispatch({
				type: 'APPLICATION_DIRECTORY_FETCH_SEARCH_FAILURE',
				query: n,
				guildId: r,
				page: c,
				categoryId: _,
				integrationType: E,
				minUserInstallCommandCount: h,
				excludeAppsWithCustomInstallUrl: p,
				excludeNonEmbeddedApps: m,
				excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: I,
				source: T
			});
		}
	}
}
async function S() {
	let { includesInactive: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
		t = Date.now(),
		n = c.Z.getFetchState({ includesInactive: e }),
		r = c.Z.getLastFetchTimeMs({ includesInactive: e });
	if (n !== c.M.FETCHING && (null == r || !(r + 600000 > t))) {
		s.Z.dispatch({
			type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS',
			includesInactive: e
		});
		try {
			let t = await a.tn.get({
				url: f.ANM.APPLICATION_DIRECTORY_COLLECTIONS,
				query: {
					includes_inactive: e,
					locale: o.default.locale
				}
			});
			s.Z.dispatch({
				type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_SUCCESS',
				collections: t.body,
				includesInactive: e
			});
		} catch (t) {
			s.Z.dispatch({
				type: 'APPLICATION_DIRECTORY_FETCH_COLLECTIONS_FAILURE',
				includesInactive: e
			});
		}
	}
}
async function A() {
	let e = Date.now(),
		t = E.Z.getFetchState(),
		n = E.Z.getLastFetchTimeMs(),
		r = E.Z.getNextFetchRetryTimeMs();
	if (t !== E.M.FETCHING && (null == n || !(n + 86400000 > e)) && (null == r || !(e < r))) {
		s.Z.dispatch({ type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS' });
		try {
			let e = await a.tn.get({ url: f.ANM.INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS });
			s.Z.dispatch({
				type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS',
				guildIdToApplicationIds: e.body
			});
		} catch (t) {
			var i;
			let e = (null == t ? void 0 : t.status) === 429;
			s.Z.dispatch({
				type: 'FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE',
				retryAfterSeconds: e ? (null == t ? void 0 : null === (i = t.body) || void 0 === i ? void 0 : i.retry_after) : void 0
			});
		}
	}
}
