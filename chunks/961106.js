i.d(t, {
	Z: function () {
		return C;
	}
}),
	i(47120),
	i(610138),
	i(216116),
	i(78328),
	i(815648);
var n = i(735250),
	a = i(470079),
	r = i(120356),
	o = i.n(r),
	s = i(399606),
	l = i(481060),
	c = i(626135),
	d = i(463571),
	u = i(894653),
	h = i(34674),
	_ = i(132871),
	p = i(147890),
	m = i(981631),
	g = i(689938),
	f = i(496783);
function C(e) {
	let { className: t } = e,
		i = (0, _.useApplicationDirectoryHistory)((e) => e.guildId),
		r = (0, s.e7)([u.Z], () => u.Z.getCategories()),
		C = a.useMemo(() => [(0, h.KQ)(), ...r], [r]),
		x = (0, _.getCurrentView)(),
		I = (e) => {
			let t = C.find((t) => t.id === e);
			c.default.track(m.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
				category: t.name,
				category_id: t.id,
				current_page: null == x ? void 0 : x.type,
				guild_id: i
			}),
				(0, p.goToCategory)({ categoryId: t.id });
		};
	return (0, n.jsx)('nav', {
		className: o()(f.container, t),
		children: C.map((e) => {
			let t = e.id,
				i = e.name,
				a = (0, h.tu)(e),
				r = new URLSearchParams();
			return (
				r.set('category_id', t.toString()),
				(0, n.jsx)(
					d.Z,
					{
						href: ''.concat(m.Z5c.APPLICATION_DIRECTORY_SEARCH, '?').concat(r),
						children: (0, n.jsxs)(l.Clickable, {
							className: f.category,
							'aria-label': g.Z.Messages.APP_DIRECTORY_CATEGORY_BUTTON_A11Y_LABEL.format({ categoryName: i }),
							onClick: () => I(t),
							children: [
								(0, n.jsx)(a, {
									className: f.icon,
									size: 'md',
									color: 'currentColor'
								}),
								(0, n.jsx)(l.Text, {
									variant: 'text-md/normal',
									children: i
								})
							]
						})
					},
					t
				)
			);
		})
	});
}
