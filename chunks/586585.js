t.d(n, {
	g: function () {
		return i;
	}
});
var r,
	i,
	l = t(735250);
t(470079);
var a = t(481060),
	s = t(600164),
	o = t(612853),
	c = t(689938),
	u = t(527926);
((r = i || (i = {}))[(r.CONTINUE = 0)] = 'CONTINUE'),
	(r[(r.UPGRADE = 1)] = 'UPGRADE'),
	(r[(r.PURCHASE = 2)] = 'PURCHASE');
let d = (e) => {
	let {
		onBack: n,
		backText: t,
		primaryIcon: r,
		primaryCTA: i,
		primaryType: d,
		primaryText: m,
		primaryTooltip: f,
		primaryDisabled: x,
		primarySubmitting: h,
		onPrimary: j,
		secondaryText: v,
		onSecondary: N
	} = e;
	return (0, l.jsxs)(a.ModalFooter, {
		justify: s.Z.Justify.BETWEEN,
		align: s.Z.Align.CENTER,
		children: [
			(() => {
				if (null == i || null == m) return null;
				let e = 2 === i ? a.ShinyButton : a.Button,
					n = {
						innerClassName: u.button,
						type: d,
						disabled: x,
						submitting: h,
						color: 0 === i ? a.Button.Colors.BRAND : a.Button.Colors.GREEN,
						onClick: j
					};
				return null != f
					? (0, l.jsx)(a.Tooltip, {
							text: f,
							children: (t) =>
								(0, l.jsxs)(e, {
									...t,
									...n,
									children: [
										null == r
											? null
											: (0, l.jsx)(r, {
													color: 'currentColor',
													className: u.primaryIcon
												}),
										m
									]
								})
						})
					: (0, l.jsxs)(e, {
							...n,
							children: [
								null == r
									? null
									: (0, l.jsx)(r, {
											color: 'currentColor',
											className: u.primaryIcon
										}),
								m
							]
						});
			})(),
			null == v
				? null
				: (0, l.jsx)(a.Button, {
						color: a.Button.Colors.PRIMARY,
						look: a.Button.Looks.LINK,
						onClick: N,
						children: v
					}),
			(0, l.jsx)(o.Z, {}),
			null == n
				? null
				: (0, l.jsx)(a.Button, {
						className: u.back,
						color: a.Button.Colors.PRIMARY,
						look: a.Button.Looks.LINK,
						onClick: n,
						children: null != t ? t : c.Z.Messages.BACK
					})
		]
	});
};
(d.CTAType = i), (n.Z = d);
