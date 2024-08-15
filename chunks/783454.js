n.d(t, {
	Z: function () {
		return I;
	}
}),
	n(47120);
var s = n(735250),
	a = n(470079),
	i = n(120356),
	r = n.n(i),
	l = n(481060),
	o = n(313201),
	c = n(259580),
	d = n(404203),
	u = n(689938),
	_ = n(873712);
function I(e) {
	let { intiallyExpanded: t = !1, title: n, description: i, children: I } = e,
		[E, T] = a.useState(t),
		m = () => T((e) => !e),
		N = (0, o.Dt)();
	return (0, s.jsxs)('div', {
		className: _.container,
		children: [
			(0, s.jsx)(d.Z, {
				className: r()(_.header, { [_.headerWithDescription]: E && null != i }),
				onClick: m,
				children: (e) => {
					let { areaRef: t, handleStopPropagation: a } = e;
					return (0, s.jsxs)(s.Fragment, {
						children: [
							(0, s.jsx)(l.Heading, {
								variant: 'heading-md/semibold',
								children: n
							}),
							(0, s.jsx)(l.Clickable, {
								onClick: a(m),
								'aria-label': u.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TOGGLE_SECTION_LABEL,
								'aria-controls': N,
								'aria-expanded': E,
								focusProps: { ringTarget: t },
								children: (0, s.jsx)(c.Z, {
									className: _.caret,
									direction: E ? c.Z.Directions.UP : c.Z.Directions.DOWN
								})
							})
						]
					});
				}
			}),
			E &&
				(0, s.jsxs)('div', {
					id: N,
					children: [
						null != i &&
							(0, s.jsx)(l.FormText, {
								type: l.FormText.Types.DESCRIPTION,
								className: _.description,
								children: i
							}),
						(0, s.jsx)('div', { className: _.divider }),
						(0, s.jsx)('div', {
							className: _.content,
							children: I
						})
					]
				})
		]
	});
}
