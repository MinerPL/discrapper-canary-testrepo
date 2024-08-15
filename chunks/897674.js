n.d(e, {
	Z: function () {
		return c;
	},
	g: function () {
		return o;
	}
}),
	n(47120);
var a = n(470079),
	r = n(442837),
	l = n(146282),
	u = n(327220),
	i = n(959580);
function o(t, e) {
	let { types: n } = t;
	return !!(null == n || n.has(e.content_type)) || !1;
}
function c(t) {
	let { feed: e, filters: n } = (0, r.cj)([l.Z], () => ({
			feed: l.Z.getFeed(t),
			filters: l.Z.getFilters()
		})),
		c = a.useMemo(() => {
			let t = null == e ? void 0 : e.entries.map((t) => t.content);
			return null != n ? (null == t ? void 0 : t.filter((t) => o(n, t))) : t;
		}, [e, n]);
	return (c = (0, u.Z)(c)), (c = (0, i.Z)(c));
}
