let r;
n(47120);
var i,
	s = n(442837),
	I = n(570140),
	u = n(699516),
	a = n(496232);
function _(e, t, n) {
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
let l = !1,
	o = Object.freeze({
		userAffinities: [],
		lastFetched: 0
	}),
	E = { ...o };
function S() {
	r = new Map(E.userAffinities.filter((e) => !u.Z.isBlocked(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class N extends (i = s.ZP.PersistedStore) {
	initialize(e) {
		this.waitFor(u.Z), null != e && ((E.userAffinities = e.userAffinities), (E.lastFetched = e.lastFetched), S()), this.syncWith([u.Z], S);
	}
	shouldFetch() {
		if (!l) return Date.now() - E.lastFetched > a.K;
	}
	isFetching() {
		return l;
	}
	getUserAffinities() {
		return E.userAffinities;
	}
	getUserAffinity(e) {
		return r.get(e);
	}
	getState() {
		return E;
	}
}
_(N, 'displayName', 'UserAffinitiesStoreV2'),
	_(N, 'persistKey', 'UserAffinitiesStoreV2'),
	(t.Z = new N(I.Z, {
		LOAD_USER_AFFINITIES_V2: function () {
			l = !0;
		},
		LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
			let { affineUsers: t } = e;
			(E.lastFetched = Date.now()), (l = !1), (E.userAffinities = t), S();
		},
		LOAD_USER_AFFINITIES_V2_FAILURE: function () {
			l = !1;
		},
		LOGOUT: function () {
			(E = { ...o }), (r = new Map()), (l = !1);
		}
	}));
