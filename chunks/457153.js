var s = n(735250),
	o = n(470079),
	a = n(120356),
	r = n.n(a),
	l = n(338545),
	i = n(95985),
	c = n(596282);
let d = o.forwardRef(function (e, t) {
	var n;
	let {
			className: a,
			expansionSpring: d,
			isExpanded: u,
			isExpansionAnimationComplete: p,
			quest: x,
			taskDetails: m
		} = e,
		g = o.useRef(null),
		_ = (null === (n = x.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null;
	return (0, s.jsx)(l.animated.div, {
		ref: t,
		'aria-hidden': u && p,
		className: r()(a, c.contentCollapsed, {
			[c.contentCollapsedExpanded]: u,
			[c.contentCollapsedAccepted]: _
		}),
		style: {
			opacity: d.to({
				range: [0, 1],
				output: [1, 0]
			})
		},
		children: (0, s.jsx)('div', {
			className: c.contentCollapsedWrapper,
			children: _
				? (0, s.jsx)(i.Z, {
						contentLocation: 'collapsed',
						quest: x,
						progressBarRef: g,
						isExpanded: !1,
						taskDetails: m
					})
				: null
		})
	});
});
t.Z = d;
