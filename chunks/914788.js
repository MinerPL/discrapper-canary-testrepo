_(724458), _(47120), _(653041);
var t = _(133080),
	T = _(412788),
	I = _(594174),
	n = _(709054),
	s = _(280570),
	A = _(735079),
	r = _(546791),
	a = _(292352);
function i(e, E, _) {
	return (
		E in e
			? Object.defineProperty(e, E, {
					value: _,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[E] = _),
		e
	);
}
let C = null,
	N = null,
	o = {},
	u = c(),
	S = O(),
	M = null,
	R = (function () {
		var e, E, _, t;
		return (null === (E = window) || void 0 === E ? void 0 : null === (e = E.location) || void 0 === e ? void 0 : e.pathname) === a.ix.FAMILY_CENTER_MY_FAMILY ? a.dG.REQUESTS : (null === (t = window) || void 0 === t ? void 0 : null === (_ = t.location) || void 0 === _ ? void 0 : _.pathname) === a.ix.FAMILY_CENTER_SETTINGS ? a.dG.SETTINGS : a.dG.ACTIVITY;
	})(),
	l = !1,
	d = !1,
	L = null,
	D = null,
	Y = {};
function c() {
	return {
		[a.MY.USER_ADD]: {},
		[a.MY.GUILD_ADD]: {},
		[a.MY.USER_INTERACTION]: {},
		[a.MY.GUILD_INTERACTION]: {},
		[a.MY.USER_CALLED]: {}
	};
}
function O() {
	return {
		[a.MY.USER_ADD]: 0,
		[a.MY.GUILD_ADD]: 0,
		[a.MY.USER_INTERACTION]: 0,
		[a.MY.GUILD_INTERACTION]: 0,
		[a.MY.USER_CALLED]: 0
	};
}
function f() {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
		E = arguments.length > 1 ? arguments[1] : void 0;
	return (o =
		e.length > 0
			? e.reduce(
					(e, E) => ({
						...e,
						[E.user_id]: E
					}),
					{}
				)
			: {});
}
function F(e) {
	void 0 !== e && (S = e);
}
function U(e, E) {
	let _ = E ? u : c();
	return (u = e.reduce((e, E) => {
		let t = E.display_type;
		return void 0 !== _[t] && void 0 === _[t][E.event_id] && (e[t][E.event_id] = E), e;
	}, _));
}
function g(e) {
	Y = e.reduce(
		(e, E) => ({
			...e,
			[E.id]: new A.J(E)
		}),
		Y
	);
}
function p() {
	d = !0;
}
function y(e) {
	let { linkedUsers: E, familyCenterTeenActivity: _ } = e,
		{ actions: t, guilds: T, totals: I, teenId: s, rangeStartId: A } = _;
	(C = s), (N = A), U(t), F(I), g(T), f(E), (d = !1), (L = n.default.fromTimestamp(Date.now())), (l = !0);
}
function P(e) {
	let { linkedUsers: E } = e;
	f(E);
}
function V(e) {
	let { linkedUsers: E } = e;
	f(E);
}
function Z(e) {
	let { familyCenterTeenActivity: E } = e;
	if (void 0 === E) return;
	let { actions: _, totals: t, guilds: T, teenId: I, rangeStartId: s } = E;
	(C = I), (N = s), U(_), F(t), g(T), (d = !1), (L = n.default.fromTimestamp(Date.now()));
}
function G(e) {
	let { familyCenterTeenActivity: E } = e,
		{ actions: _, guilds: t } = E;
	U(_, !0), g(t);
}
function h(e) {
	let { linkedUsers: E } = e;
	f(E);
}
function v(e) {
	let { linkedUsers: E } = e;
	f(E, !0);
}
function m(e) {
	let { linkCode: E } = e;
	M = E;
}
function H(e) {
	let { tab: E } = e;
	R = E;
}
function b(e) {
	let { user: E } = e;
	if (void 0 === E.linked_users) return;
	let _ = I.default.getUsers();
	E.linked_users.some((e) => {
		let { user_id: E } = e;
		return void 0 === _[E];
	}) && E.linked_users.length > Object.keys(o).length
		? s.ZP.fetchLinkedUsers()
		: f(E.linked_users);
}
function w(e) {
	var E;
	let { countryCode: _ } = e;
	if (null != _) D = null !== (E = (0, t.Zz)(_)) && void 0 !== E ? E : null;
}
function k() {
	(C = null), (N = null), (o = {}), (u = c()), (S = O()), (Y = {}), (d = !1), (L = null);
}
class Q extends T.Z {
	initialize() {
		this.waitFor(I.default);
	}
	loadCache() {
		let e = this.readSnapshot(Q.LATEST_SNAPSHOT_VERSION);
		if (null != e)
			f(e.linkedUsers),
				g(e.guilds),
				U(e.teenActivity),
				(S = e.teenActivityTotals.reduce((e, E) => {
					let [_, t] = E.split(':'),
						T = (0, r.jV)(_);
					return void 0 === T
						? e
						: {
								...e,
								[T]: parseInt(t, 10)
							};
				}, O()));
	}
	takeSnapshot() {
		return {
			version: Q.LATEST_SNAPSHOT_VERSION,
			data: {
				linkedUsers: Object.values(o),
				teenActivityTotals: Object.entries(S).map((e) => {
					let [E, _] = e;
					return ''.concat(E, ':').concat(_);
				}),
				teenActivity: (function () {
					let e = [];
					return (
						Object.entries(u).forEach((E) => {
							let [_, t] = E;
							e.push(...Object.values(t));
						}),
						e
					);
				})(),
				guilds: Object.values(Y)
			}
		};
	}
	getSelectedTeenId() {
		return C;
	}
	getLinkedUsers() {
		return o;
	}
	getLinkTimestamp(e) {
		var E;
		let _ = o[e];
		return null == _ ? null : null !== (E = _.updated_at) && void 0 !== E ? E : _.created_at;
	}
	getRangeStartTimestamp() {
		return null == N ? null : n.default.extractTimestamp(N);
	}
	getActionsForDisplayType(e) {
		return Object.values(u[e]);
	}
	getTotalForDisplayType(e) {
		return S[e];
	}
	getLinkCode() {
		return M;
	}
	getGuild(e) {
		return Y[e];
	}
	getSelectedTab() {
		return R;
	}
	getStartId() {
		return N;
	}
	getIsInitialized() {
		return l;
	}
	getUserCountry() {
		return D;
	}
	isLoading() {
		return d;
	}
	canRefetch() {
		return null === L || n.default.age(L) > a.Of;
	}
	constructor() {
		super({
			CURRENT_USER_UPDATE: b,
			CACHE_LOADED_LAZY: () => this.loadCache(),
			FAMILY_CENTER_INITIAL_LOAD: y,
			FAMILY_CENTER_FETCH_START: p,
			FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: P,
			FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: Z,
			FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: G,
			FAMILY_CENTER_REQUEST_LINK_SUCCESS: V,
			FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS: h,
			FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS: v,
			FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS: m,
			FAMILY_CENTER_HANDLE_TAB_SELECT: H,
			SET_LOCATION_METADATA: w,
			LOGOUT: k
		});
	}
}
i(Q, 'displayName', 'FamilyCenterStore'), i(Q, 'LATEST_SNAPSHOT_VERSION', 3), (E.Z = new Q());
