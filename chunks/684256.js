t.d(n, {
	Z: function () {
		return C;
	}
});
var i = t(735250),
	a = t(470079),
	l = t(120356),
	o = t.n(l),
	r = t(481060),
	s = t(895924),
	c = t(424602),
	d = t(827498),
	u = t(98880),
	m = t(772606),
	p = t(689938),
	_ = t(622443);
function C(e) {
	let { channel: n, entrypoint: t, title: l, look: C, items: f, sectionName: h } = e,
		{ clickOnHomeActivityOpensAppDetail: A } = c.m1.getCurrentConfig(
			{ location: 'AppLauncherApplicationListViewScreen' },
			{ autoTrackExposure: !1 }
		),
		E = a.useMemo(() => (t === d._b.TEXT ? u.kA : u.qR), [t]);
	return (0, i.jsxs)('section', {
		className: _.container,
		'aria-label': p.Z.Messages.APP_LAUNCHER_SECTION_VIEW_MORE_ARIA_LABEL.format({ sectionTitle: l }),
		children: [
			(0, i.jsxs)('div', {
				className: _.header,
				children: [
					(0, i.jsx)(m.Z, { className: _.backButton }),
					(0, i.jsx)(r.Heading, {
						variant: 'heading-md/medium',
						color: 'header-primary',
						children: l
					})
				]
			}),
			(0, i.jsx)(r.Scroller, {
				children: (0, i.jsx)('div', {
					className: o()({
						[_.appGrid]: C !== u.U4.ROW,
						[_.rows]: C === u.U4.ROW
					}),
					children: f.map((e, t) => {
						let { application: a, isPartner: l, installOnDemand: o } = e;
						return (0, i.jsx)(
							E,
							{
								channel: n,
								application: a,
								look: C,
								isPartner: l,
								sectionName: h,
								resultsPosition: t,
								location: s.Vh.APP_LAUNCHER_LIST_VIEW_ALL,
								installOnDemand: o,
								isOneClickCTA: A
							},
							a.id
						);
					})
				})
			})
		]
	});
}
