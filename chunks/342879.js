n(47120);
var r = n(392711),
	i = n(570140),
	a = n(147913),
	s = n(539746),
	o = n(38618),
	l = n(553795),
	u = n(517100),
	c = n(451478),
	d = n(162461),
	_ = n(564990),
	E = n(146282),
	f = n(206583),
	h = n(981631);
let p = f.YN.GLOBAL_FEED,
	m = new Map(),
	I = new Set(),
	T = new Map(),
	g = null,
	S = (0, r.debounce)(_.yK, 3000, { trailing: !0 });
function A(e, t) {
	i.Z.dispatch({
		type: 'CONTENT_INVENTORY_SET_FEED_STATE',
		feedId: e,
		state: t
	});
}
function N() {
	O(p);
}
function v(e) {
	if (I.has(e) || (e === f.YN.GAME_PROFILE_FEED && (!(0, s._J)('ContentInventoryManager') || void 0 !== E.Z.getFeed(e)))) return !1;
	if (e === p) {
		if (!(0, d.sA)('ContentInventoryManager') || E.Z.hidden || !c.Z.isFocused() || !o.Z.isConnected()) return !1;
		let e = u.Z.getIdleSince();
		if (null != e && Date.now() - e > 900000) return !1;
	}
	return !0;
}
function O(e) {
	A(e, { loading: !1 });
	let t = m.get(e);
	void 0 !== t && (clearTimeout(t), m.delete(e));
}
function R() {
	if ((O(p), !v(p))) return;
	let e = E.Z.getFeed(p);
	if ((null == e ? void 0 : e.refresh_stale_inbox_after_ms) != null && null == g) return;
	let t = (null == e ? void 0 : e.expired_at) == null ? 0 : new Date(e.expired_at).getTime() - Date.now(),
		n = Math.max(0, null == g ? 0 : new Date(g).getTime() - Date.now(), t);
	A(p, {
		loading: !1,
		nextFetchDate: new Date(Date.now() + n)
	}),
		m.set(
			p,
			setTimeout(() => C(p), n)
		);
}
async function C(e) {
	let { force: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
	if (!!(v(e) || t))
		try {
			let t = E.Z.getFeed(e);
			I.add(e), A(e, { loading: !0 });
			let n = await (0, _.mt)({
				token: null == t ? void 0 : t.refresh_token,
				feedId: e
			});
			i.Z.dispatch({
				type: 'CONTENT_INVENTORY_SET_FEED',
				feedId: e,
				feed: n
			}),
				T.set(e, 0),
				I.delete(e),
				A(e, { loading: !1 }),
				e === p && ((g = null), R());
		} catch (a) {
			var n;
			let r = null !== (n = T.get(e)) && void 0 !== n ? n : 0;
			if (r < 3) {
				let n = 1000 * Math.pow(5, r);
				m.set(
					e,
					setTimeout(() => C(e, { force: t }), n)
				),
					T.set(e, r + 1);
			} else
				i.Z.dispatch({
					type: 'CONTENT_INVENTORY_CLEAR_FEED',
					feedId: e
				});
			I.delete(e);
		}
}
function y() {
	R();
}
function D(e) {
	let { feedId: t } = e;
	O(t), C(t, { force: !0 });
}
function L(e) {
	let { refreshAfterMs: t } = e,
		n = E.Z.getFeed(p);
	if ((null == n ? void 0 : n.refresh_stale_inbox_after_ms) != null) (g = new Date(Date.now() + (null != t ? t : n.refresh_stale_inbox_after_ms)).toUTCString()), R();
}
function b(e) {
	var t;
	let { connectionId: n, track: r } = e;
	if (null != n && !!(0, d.Dy)('ContentInventoryManager.handleSpotifyNewTrack')) (null === (t = l.Z.getAccount(n, h.ABu.SPOTIFY)) || void 0 === t ? void 0 : t.showActivity) && S(n, r);
}
function M() {
	C(f.YN.GAME_PROFILE_FEED);
}
class P extends a.Z {
	constructor(...e) {
		var t, n, r;
		super(...e),
			(t = this),
			(n = 'actions'),
			(r = {
				POST_CONNECTION_OPEN: y,
				CONNECTION_CLOSED: N,
				WINDOW_FOCUS: y,
				IDLE: y,
				CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN: y,
				CONTENT_INVENTORY_MANUAL_REFRESH: D,
				CONTENT_INVENTORY_INBOX_STALE: L,
				SPOTIFY_NEW_TRACK: b,
				GAME_PROFILE_OPEN: M
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
t.Z = new P();
