n(47120);
var r = n(913527),
	i = n.n(r),
	a = n(570140),
	s = n(147913),
	o = n(959546),
	l = n(594174),
	u = n(580130),
	c = n(111361),
	d = n(470918),
	_ = n(595878),
	E = n(513785),
	f = n(106255),
	h = n(474936),
	p = n(735825);
let I = null,
	m = !1;
function T(e) {
	let t = o.Z.createFromServer(e.entitlement);
	(0, f._k)(t)
		? g({ forceRefresh: !0 })
		: (0, f.YE)(t) &&
			null != E.Z.getTenureRewardStatusForRewardId(t.skuId) &&
			a.Z.dispatch({
				type: 'USER_TENURE_REWARD_STATUS_DELETE',
				tenureRewardIds: [t.skuId]
			});
}
function g() {
	let { forceRefresh: e = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	A();
	let t = u.Z.getForApplication(h.RQ),
		n = (0, f.kG)(t),
		r = (0, f.MR)([p.Ft.FREE_GUILD_BOOST_1_MONTH, p.Ft.FREE_GUILD_BOOST_3_MONTHS], t),
		s = l.default.getCurrentUser();
	if (!(0, c.M5)(s, h.p9.TIER_2) && null == n) {
		null != s && a.Z.dispatch({ type: 'USER_TENURE_REWARD_STATUS_RESET' });
		return;
	}
	if (!!(0, _.d)({ location: 'tenure_reward_manager' }))
		if (
			(!0 === e ||
				(function (e) {
					if (E.Z.getFetchState() !== E.M.FETCHED) return !0;
					let t = (0, f.LA)();
					return (
						(null != t && null != e && e.id !== t.user_id) ||
						(function () {
							let e = E.Z.getState();
							return null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 1209600000;
						})() ||
						(function () {
							var e;
							let t =
								null !== (e = E.Z.getTenureRewardStatusForRewardId(p.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e
									? e
									: E.Z.getTenureRewardStatusForRewardId(p.Ft.FREE_GUILD_BOOST_3_MONTHS);
							return null != t && null != t.redeemable_at && 0 >= i()(t.redeemable_at).diff(i().utc(), 'seconds');
						})()
					);
				})(s)) &&
			null == r
		)
			S();
		else {
			let e = u.Z.getForApplication(h.RQ);
			if (null == e) return;
			let t = Array.from(e)
				.filter((e) => null != E.Z.getTenureRewardStatusForRewardId(e.skuId))
				.map((e) => e.skuId);
			t.length > 0 &&
				a.Z.dispatch({
					type: 'USER_TENURE_REWARD_STATUS_DELETE',
					tenureRewardIds: t
				});
		}
}
async function S() {
	if (!m)
		(m = !0),
			await d.V(),
			(m = !1),
			a.Z.wait(() =>
				(function () {
					var e;
					if ((A(), E.Z.getFetchState() !== E.M.FETCHED || m)) return;
					let t =
						null !== (e = E.Z.getTenureRewardStatusForRewardId(p.Ft.FREE_GUILD_BOOST_1_MONTH)) && void 0 !== e
							? e
							: E.Z.getTenureRewardStatusForRewardId(p.Ft.FREE_GUILD_BOOST_3_MONTHS);
					if ((null == t ? void 0 : t.redeemable_at) == null) return;
					let n =
						(null == t ? void 0 : t.redeemable_at) != null ? new Date(t.redeemable_at).getTime() - Date.now() : null;
					null != n && n > 0 && (I = setTimeout(g, n));
				})()
			);
}
function A() {
	clearTimeout(I), (I = null);
}
function N() {
	A();
}
function v() {
	g();
}
class O extends s.Z {
	forceRefreshIfOutdated() {
		let e = E.Z.getState();
		null != e.lastFetchTimeMs && Date.now() - e.lastFetchTimeMs > 86400000 && g({ forceRefresh: !0 });
	}
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = {
				POST_CONNECTION_OPEN: v,
				CONNECTION_CLOSED: N,
				ENTITLEMENT_FETCH_APPLICATION_SUCCESS: () => g(),
				ENTITLEMENT_CREATE: T,
				ENTITLEMENT_UPDATE: () => g(),
				ENTITLEMENT_DELETE: () => g(),
				LOGOUT: A
			}),
			n in t
				? Object.defineProperty(t, n, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					})
				: (t[n] = r);
	}
}
t.Z = new O();
