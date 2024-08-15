n.d(t, {
	Fe: function () {
		return S;
	},
	Ih: function () {
		return g;
	},
	Lz: function () {
		return A;
	}
}),
	n(47120);
var r = n(470079),
	i = n(442837),
	a = n(846519),
	s = n(110924),
	o = n(314897),
	l = n(70956),
	u = n(51144),
	c = n(768419),
	d = n(300020),
	_ = n(456190),
	E = n(239470),
	f = n(894344),
	h = n(203777),
	p = n(616922);
let I = 30 * l.Z.Millis.SECOND;
function m(e) {
	let { currentUserTrackId: t, syncingWithUser: n, syncingWithParty: i } = e,
		[o, l] = r.useState(!1),
		[u] = r.useState(() => new a.V7()),
		c = (0, s.Z)(t);
	r.useEffect(() => {
		o && (t !== c || n || i) && (l(!1), u.stop());
	}, [t, c, n, i, o, u]);
	let d = r.useCallback(() => {
			l(!0), u.start(I, () => l(!1));
		}, [u]),
		_ = r.useCallback(() => {
			l(!1), u.stop();
		}, [u]);
	return (
		r.useEffect(() => () => u.stop(), [u]),
		{
			loading: o,
			startLoading: d,
			clearLoading: _
		}
	);
}
function T(e, t) {
	return (0, i.cj)([c.Z, o.default], () => (0, E.Z)(c.Z, o.default, t, e), [e, t]);
}
function g(e, t, n) {
	let i = T(e, t),
		{ notPlayable: a, isCurrentUser: s, playingSameTrack: o } = i,
		{ loading: l, startLoading: u, clearLoading: c } = m(i),
		E = r.useCallback(() => {
			u(), (0, h.Z)(i, p.kG.USER_ACTIVITY_PLAY, n).catch(c);
		}, [i, n, u, c]);
	return {
		label: (0, d.Z)(i, p.kG.USER_ACTIVITY_PLAY),
		tooltip: (0, _.Z)(i, p.kG.USER_ACTIVITY_PLAY),
		disabled: !l && (s || a || o),
		loading: l,
		onClick: E,
		spotifyData: i
	};
}
function S(e, t, n, i) {
	let a = null != i ? i : u.ZP.getName(t),
		s = T(e, t),
		{ syncingWithUser: o, syncingWithParty: l, isCurrentUser: c } = s,
		{ loading: E, startLoading: h, clearLoading: I } = m(s),
		g = r.useCallback(() => {
			h(), (0, f.Z)(s, p.kG.USER_ACTIVITY_SYNC, n).catch(I);
		}, [s, n, h, I]);
	return {
		label: (0, d.Z)(s, p.kG.USER_ACTIVITY_SYNC),
		tooltip: (0, _.Z)(s, p.kG.USER_ACTIVITY_SYNC, a),
		disabled: !E && (c || o || l),
		loading: E,
		onClick: g,
		spotifyData: s
	};
}
function A(e, t, n) {
	let i = T(e, t),
		{ notPlayable: a, syncingWithUser: s, syncingWithParty: o, isCurrentUser: l } = i,
		{ loading: u, startLoading: c, clearLoading: E } = m(i),
		h = r.useCallback(() => {
			c(), (0, f.Z)(i, p.kG.EMBED_SYNC, n).catch(E);
		}, [i, n, c, E]);
	return {
		label: (0, d.Z)(i, p.kG.EMBED_SYNC),
		tooltip: (0, _.Z)(i, p.kG.EMBED_SYNC),
		disabled: !u && (l || s || o || a),
		loading: u,
		onClick: h,
		spotifyData: i
	};
}
