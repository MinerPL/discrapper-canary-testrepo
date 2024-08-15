n.d(t, {
	F: function () {
		return u;
	}
}),
	n(757143);
var s = n(735250);
n(470079);
var r = n(120356),
	a = n.n(r),
	i = n(481060),
	o = n(937615),
	c = n(884697),
	l = n(222541);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
	u = (e) => {
		var t;
		let {
				price: { amount: n, currency: r },
				renderPrice: u,
				icon: f,
				className: p,
				discount: g = c.f_,
				variant: C = 'heading-md/semibold'
			} = e,
			_ = d((0, o.T4)(n, r)),
			m =
				g !== c.f_ && g.discountPercentage >= 5
					? (0, s.jsxs)(s.Fragment, {
							children: [
								_,
								(0, s.jsx)(i.Heading, {
									variant: C,
									color: 'text-positive',
									className: l.discount,
									children: ' (-'.concat(g.discountPercentage, '%)')
								})
							]
						})
					: _;
		return (0, s.jsx)(s.Fragment, {
			children: (0, s.jsxs)(i.Heading, {
				variant: C,
				className: a()(l.container, p),
				children: [f, null !== (t = null == u ? void 0 : u(m)) && void 0 !== t ? t : m]
			})
		});
	};
