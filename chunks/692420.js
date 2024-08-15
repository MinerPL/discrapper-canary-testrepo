n.d(t, {
	Z: function () {
		return h;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(143927),
	r = n(731965),
	l = n(442837),
	o = n(706454),
	c = n(540742),
	d = n(89182),
	u = n(72881),
	_ = n(731455),
	E = n(689938);
function h(e) {
	let { loadId: t } = e,
		n = (0, l.e7)([o.default], () => o.default.locale),
		h = (0, c.B)((e) => {
			let { searchLanguageCode: t } = e;
			return t;
		}, s.Z),
		m = null != h ? h : n,
		I = a.useCallback(
			(e) => {
				(0, r.j)(() => c.B.setState({ searchLanguageCode: e }));
				let n = c.B.getState();
				(0, u.y)({
					loadId: t,
					categoryId: n.searchCategoryId,
					offset: 0,
					searchQuery: n.searchQuery,
					languageCode: e
				});
			},
			[t]
		),
		g = a.useMemo(
			() =>
				_.dU.map((e) => ({
					id: e.code,
					label: e.name
				})),
			[]
		),
		p = a.useMemo(() => {
			var e;
			let t = _.dU.find((e) => e.code === m);
			return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : E.Z.Messages.en;
		}, [m]);
	return (0, i.jsx)(d.Z, {
		items: g,
		title: p,
		onSelect: I,
		selected: m,
		'aria-label': E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_LANGUAGE_FILTER
	});
}
