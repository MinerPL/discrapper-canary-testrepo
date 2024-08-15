n.d(t, {
	Z: function () {
		return d;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(481060),
	r = n(946314),
	l = n(921944),
	o = n(689938),
	c = n(960405);
function d(e) {
	let { onClick: t, onSecondaryClick: n, onComponentMount: d, markAsDismissed: u } = e;
	a.useEffect(() => {
		null == d || d();
	}, [d]);
	let _ = a.useCallback(
			(e) => {
				t(e), null == u || u(l.L.PRIMARY);
			},
			[t, u]
		),
		E = a.useCallback(() => {
			null == n || n(), null == u || u(l.L.SECONDARY);
		}, [n, u]);
	return (0, i.jsxs)('div', {
		className: c.tooltipWrapper,
		children: [
			(0, i.jsx)(s.Heading, {
				className: c.tooltipHeader,
				variant: 'heading-md/semibold',
				children: o.Z.Messages.SERVER_DISCOVERY_TOOLTIP_TITLE
			}),
			(0, i.jsx)(s.Text, {
				className: c.tooltipText,
				variant: 'text-sm/normal',
				children: o.Z.Messages.SERVER_DISCOVERY_TOOLTIP_DESCRIPTION.format({ count: r.WZ })
			}),
			(0, i.jsxs)('div', {
				className: c.buttonsContainer,
				children: [
					(0, i.jsx)(s.Button, {
						fullWidth: !0,
						size: s.Button.Sizes.SMALL,
						color: s.Button.Colors.BRAND,
						onClick: _,
						children: o.Z.Messages.LEARN_MORE
					}),
					(0, i.jsx)(s.Button, {
						fullWidth: !0,
						size: s.Button.Sizes.SMALL,
						look: s.Button.Looks.BLANK,
						onClick: E,
						children: o.Z.Messages.NO_THANKS
					})
				]
			})
		]
	});
}
