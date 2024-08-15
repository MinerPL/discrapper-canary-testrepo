n.d(t, {
	I: function () {
		return I;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(143927),
	o = n(731965),
	c = n(481060),
	d = n(706454),
	u = n(540742),
	_ = n(72881),
	E = n(907336),
	h = n(740474),
	m = n(636228);
function I(e) {
	var t;
	let { categoryId: n, loadId: i } = e;
	(0, o.j)(() => u.B.setState({ searchCategoryId: n }));
	let a = u.B.getState();
	(0, _.y)({
		loadId: i,
		categoryId: n,
		offset: 0,
		searchQuery: a.searchQuery,
		languageCode: null !== (t = a.searchLanguageCode) && void 0 !== t ? t : (0, _.X)()
	});
}
function g(e) {
	let { loadId: t, categoryId: n, count: s } = e,
		o = a.useCallback(() => {
			I({
				categoryId: n,
				loadId: t
			});
		}, [n, t]),
		_ =
			(0, u.B)((e) => {
				let { searchCategoryId: t } = e;
				return t;
			}, l.Z) === n,
		h = s.toLocaleString(d.default.locale),
		g = (0, E.E)({ categoryId: n });
	return (0, i.jsxs)(c.Clickable, {
		onClick: o,
		className: r()(m.category, { [m.selected]: _ }),
		children: [
			(0, i.jsx)(c.Text, {
				className: m.name,
				variant: 'text-sm/medium',
				color: 'header-primary',
				children: g
			}),
			(0, i.jsx)(c.Text, {
				className: m.count,
				variant: 'text-sm/normal',
				color: 'text-muted',
				children: h
			})
		]
	});
}
t.Z = function (e) {
	let { loadId: t } = e,
		n = (0, h.q)();
	return null == n
		? null
		: (0, i.jsx)('div', {
				className: m.categories,
				children: n.map((e) => {
					let [n, a] = e;
					return (0, i.jsx)(
						g,
						{
							loadId: t,
							categoryId: n,
							count: a
						},
						n
					);
				})
			});
};
