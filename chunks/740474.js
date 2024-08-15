n.d(t, {
	q: function () {
		return c;
	}
}),
	n(47120),
	n(653041);
var i = n(470079),
	a = n(143927),
	s = n(442837),
	r = n(36867),
	l = n(683301),
	o = n(540742);
function c() {
	let e = (0, o.B)((e) => {
			let { searchResultsQuery: t } = e;
			return t;
		}, a.Z),
		t = (0, o.B)((e) => {
			let { initialSearchCategoryId: t } = e;
			return t;
		}, a.Z),
		n = (0, s.e7)([r.Z], () => {
			var n, i;
			return null != t && null !== (i = null === (n = r.Z.getResults(e, t)) || void 0 === n ? void 0 : n.total) && void 0 !== i ? i : 0;
		}),
		c = (0, s.e7)([l.ZP], () => l.ZP.getTopCategoryCounts(e));
	return i.useMemo(() => {
		if (null == c) return null;
		if (null == t) return c;
		let e = [],
			i = !0;
		for (let [n, a] of c) n === t && (i = !1), e.push([n, a]);
		return i ? (e.push([t, n]), e) : c;
	}, [c, t, n]);
}
