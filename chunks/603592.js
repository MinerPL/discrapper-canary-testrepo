n(47120);
var i = n(735250),
	l = n(470079),
	r = n(120356),
	a = n.n(r),
	s = n(91192),
	o = n(481060),
	c = n(276952),
	u = n(682662),
	d = n(662146),
	h = n(653890);
let p = l.forwardRef(function (e, t) {
	let { id: n, onClick: r, onContextMenu: p, icon: _, selected: f, tooltip: g, upperBadge: m, lowerBadge: C, lowerBadgeSize: I, showPill: E = !0, className: N, 'aria-label': x, children: S, onMouseEnter: v, onMouseLeave: Z, onMouseDown: T } = e,
		L = (0, s.Ie)(n),
		[A, b] = l.useState(!1),
		M = 'string' == typeof g && null == x ? g : x;
	return (0, i.jsxs)(u.H, {
		children: [
			E
				? (0, i.jsx)('div', {
						className: h.pill,
						children: (0, i.jsx)(c.Z, {
							hovered: A,
							selected: f
						})
					})
				: null,
			(0, i.jsx)(d.Z, {
				text: g,
				selected: f,
				children: (0, i.jsx)(o.BlobMask, {
					className: h.__invalid_circleButtonMask,
					selected: f || A,
					upperBadge: m,
					lowerBadge: C,
					lowerBadgeSize: I,
					children: (0, i.jsx)(o.Clickable, {
						innerRef: t,
						onMouseEnter: () => {
							null == v || v(), b(!0);
						},
						onMouseLeave: () => {
							null == Z || Z(), b(!1);
						},
						onMouseDown: T,
						className: a()(h.circleIconButton, N, { [h.selected]: f || A }),
						onClick: r,
						'aria-label': M,
						onContextMenu: p,
						focusProps: { enabled: !1 },
						...L,
						children:
							null != _ &&
							(0, i.jsx)(_, {
								className: h.circleIcon,
								color: 'currentColor'
							})
					})
				})
			}),
			S
		]
	});
});
t.Z = p;
