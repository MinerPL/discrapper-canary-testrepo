t(47120);
var a = t(735250),
	r = t(470079),
	i = t(120356),
	s = t.n(i),
	o = t(338545),
	l = t(481060),
	c = t(393238),
	d = t(689938),
	u = t(944455);
n.Z = r.memo(function (e) {
	let {
			renderHeader: n,
			children: t,
			isExpanded: i,
			isStuck: m,
			onExpand: _,
			disableAnimation: f,
			disableBackground: C
		} = e,
		[h, x] = r.useState(!0),
		[p, g] = r.useState(!1),
		{ ref: T, height: E = 0 } = (0, c.Z)(),
		{ ref: I, height: b = 0 } = (0, c.Z)(),
		[N, v] = r.useState(i),
		y = (0, l.useSpring)(
			{
				height: N ? b + E : E,
				config: {
					...o.config.stiff,
					clamp: !0
				},
				onStart: () => {
					g(!1);
				},
				onRest: () => {
					g(!0);
				}
			},
			h || f ? 'animate-never' : 'respect-motion-settings'
		);
	return (
		r.useLayoutEffect(() => {
			g(!1), v(i);
		}, [i]),
		r.useLayoutEffect(() => {
			let e = setTimeout(() => {
				x(!1);
			}, 100);
			return () => clearTimeout(e);
		}, []),
		(0, a.jsx)(l.Clickable, {
			className: s()(u.editCard, {
				[u.toggled]: i,
				[u.noBackground]: C
			}),
			children: (0, a.jsxs)(o.animated.div, {
				className: s()(u.contentExpandContainer, { [u.showOverflow]: i && p }),
				style: y,
				children: [
					(0, a.jsx)(l.Clickable, {
						innerRef: T,
						onClick: m ? void 0 : _,
						className: s()(u.innerHeader, { [u.toggled]: i && m }),
						'aria-label': d.Z.Messages.EXPAND,
						children: n
					}),
					(0, a.jsx)('div', {
						ref: I,
						children: t
					})
				]
			})
		})
	);
});
