n.d(t, {
	Z: function () {
		return C;
	}
});
var i = n(735250);
n(470079);
var a = n(120356),
	s = n.n(a),
	l = n(338545),
	r = n(399606),
	o = n(481060),
	c = n(511010),
	u = n(446183),
	d = n(677281),
	h = n(765104),
	m = n(477291),
	p = n(531578),
	_ = n(959517),
	f = n(689938),
	E = n(774103);
function g(e) {
	let { summary: t, channel: n } = e,
		a = (0, r.e7)([h.Z], () => h.Z.summaryFeedback(t)),
		s = (e, i) => {
			e.stopPropagation(),
				(0, m.Z)({
					summary: t,
					channel: n,
					rating: i
				});
		},
		c = (0, o.useTransition)(
			null == a,
			{
				enter: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				leave: { opacity: 0 },
				config: {
					mass: 1,
					tension: 500,
					friction: 18,
					clamp: !0
				}
			},
			'animate-always'
		);
	return (0, i.jsx)(i.Fragment, {
		children: c((e, t) =>
			t
				? (0, i.jsx)('div', {
						className: E.summaryFeedbackWrapper,
						children: (0, i.jsxs)(l.animated.div, {
							style: e,
							className: E.summaryFeedback,
							children: [
								(0, i.jsx)(o.Text, {
									variant: 'text-xs/medium',
									color: 'interactive-normal',
									children: f.Z.Messages.SUMMARY_FEEDBACK
								}),
								(0, i.jsx)(o.Clickable, {
									onClick: (e) => s(e, p.aZ.GOOD),
									children: (0, i.jsx)(d.Z, {
										className: E.thumbIcon,
										width: 12,
										height: 12
									})
								}),
								(0, i.jsx)(o.Clickable, {
									onClick: (e) => s(e, p.aZ.BAD),
									children: (0, i.jsx)(u.Z, {
										className: E.thumbIcon,
										width: 12,
										height: 12
									})
								})
							]
						})
					})
				: null
		)
	});
}
function C(e) {
	var t, n;
	let a,
		{ item: l, channel: u, index: d } = e,
		m = (0, r.e7)([h.Z], () => h.Z.selectedSummary(u.id));
	if (null == m) return null;
	let p = null != l.unreadId,
		f = null != l.content;
	return (
		(a = f
			? (0, i.jsxs)(i.Fragment, {
					children: [
						(0, i.jsx)(o.TopicsIcon, {
							size: 'xs',
							color: 'currentColor',
							className: E.summaryStartIcon
						}),
						l.content
					]
				})
			: (0, i.jsxs)(i.Fragment, {
					children: [
						(0, i.jsx)(g, {
							summary: m,
							channel: u
						}),
						(0, i.jsx)(o.TopicsIcon, {
							size: 'xs',
							color: 'currentColor',
							className: E.summaryEndIcon
						})
					]
				})),
		(0, i.jsx)(
			c.Z,
			{
				className: s()(E.summaryDivider, f ? E.summaryDividerStart : E.summaryDividerEnd),
				contentClassName: f ? E.summaryStartContent : E.summaryEndContent,
				isUnread: p,
				id: p ? _.j1 : void 0,
				children: a
			},
			'divider-'.concat(
				null !== (n = null !== (t = l.contentKey) && void 0 !== t ? t : l.unreadId) && void 0 !== n ? n : d
			)
		)
	);
}
