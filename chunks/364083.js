t.d(n, {
	P: function () {
		return d;
	}
});
var a = t(470079),
	r = t(392711),
	i = t.n(r),
	s = t(442837),
	o = t(77498),
	l = t(308083);
function c(e) {
	var n;
	return null !== (n = l.gQ.get(e)) && void 0 !== n ? n : 0;
}
function d() {
	let e = (0, s.e7)([o.Z], () => o.Z.games),
		n = a.useMemo(
			() =>
				i()(e)
					.map((e) => ({
						value: e.id,
						label: e.name
					}))
					.sortBy((e) => {
						let { value: n } = e;
						return c(n);
					})
					.reverse()
					.value(),
			[e]
		),
		t = a.useCallback((e, n) => c(n.item.value) - c(e.item.value), []);
	return {
		options: n,
		matchSorterOptions: a.useMemo(
			() => ({
				baseSort: t,
				keys: ['label']
			}),
			[t]
		)
	};
}
