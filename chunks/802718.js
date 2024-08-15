n.d(t, {
	U: function () {
		return C;
	}
});
var i = n(735250),
	l = n(470079),
	r = n(91192),
	a = n(481060),
	s = n(442837),
	o = n(239091),
	c = n(410030),
	u = n(377171),
	d = n(682662),
	h = n(662146),
	p = n(678513),
	_ = n(981631),
	f = n(689938),
	g = n(497947);
function m(e) {
	let { target: t } = e,
		s = (0, r.Ie)('fakedoor'),
		p = l.useCallback(() => {
			(0, a.openModalLazy)(async () => {
				let { default: e } = await Promise.all([n.e('22862'), n.e('32912')]).then(n.bind(n, 646202));
				return (n) =>
					(0, i.jsx)(e, {
						...n,
						target: t
					});
			});
		}, [t]),
		m = l.useCallback(
			(e) => {
				(0, o.jW)(e, async () => {
					let { default: e } = await n.e('39612').then(n.bind(n, 761624));
					return (n) =>
						(0, i.jsx)(e, {
							...n,
							signupTarget: t
						});
				});
			},
			[t]
		),
		C = 'url('.concat(t.backgroundAssetUrl, ') black top / cover no-repeat'),
		I = (0, i.jsxs)('div', {
			className: g.tooltipContainer,
			children: [
				(0, i.jsx)('div', {
					className: g.tooltipBackground,
					style: { background: C }
				}),
				(0, i.jsx)(a.Heading, {
					variant: 'heading-sm/medium',
					children: t.tooltipHeader
				}),
				(0, i.jsx)(a.Text, {
					variant: 'text-xs/normal',
					children: f.Z.Messages.SIGNUP_BUTTON_TOOLTIP_CTA
				})
			]
		}),
		E = (0, c.Fg)();
	return (0, i.jsxs)(d.H, {
		children: [
			(0, i.jsx)(a.ThemeContextProvider, {
				theme: _.BRd.DARK,
				children: (0, i.jsx)(h.Z, {
					text: I,
					tooltipClass: g.tooltip,
					tooltipContentClass: g.tooltipContent,
					children: (0, i.jsx)(a.ThemeContextProvider, {
						theme: E,
						children: (0, i.jsx)(a.BlobMask, {
							lowerBadge: (0, i.jsx)(a.NumberBadge, {
								count: 1,
								color: u.Z.BG_BRAND
							}),
							children: (0, i.jsx)(a.NavItem, {
								...s,
								onClick: p,
								onContextMenu: m,
								children: (0, i.jsx)(a.BellIcon, { color: u.Z.TEXT_NORMAL })
							})
						})
					})
				})
			}),
			(0, i.jsx)('div', {
				style: {
					background: C,
					width: 0,
					height: 0
				}
			})
		]
	});
}
function C() {
	let e = (0, s.e7)([p.Z], () => p.Z.getActiveUserSignUp());
	return null == e ? null : (0, i.jsx)(m, { target: e });
}
