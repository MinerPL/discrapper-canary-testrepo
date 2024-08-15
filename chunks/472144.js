var s = n(735250),
	o = n(470079),
	a = n(120356),
	r = n.n(a),
	l = n(338545),
	i = n(481060),
	c = n(569379),
	d = n(642145),
	u = n(416744);
t.Z = o.forwardRef((e, t) => {
	let {
			quest: n,
			percentComplete: o,
			size: a = 42,
			strokeWidth: p = 3,
			glowBlur: x = 0.4,
			percentCompleteText: m,
			children: g
		} = e,
		_ = (0, c.EK)(n, o > 0),
		C = a / 2,
		f = a / 2 - p / 2,
		h = 2 * Math.PI * f,
		E = h - o * h,
		T = {
			strokeDasharray: ''.concat(h, ' ').concat(h),
			strokeDashoffset: E
		},
		S = {
			strokeDasharray: ''.concat(h, ' ').concat(h),
			strokeDashoffset: -o * h
		},
		v = { boxShadow: '0 0 30px 0px '.concat(_.glow) },
		{ progressTextAnimation: A } = (0, i.useSpring)({
			progressTextAnimation: null != m && 1 !== o ? 1 : 0,
			config: d.Y
		});
	return (0, s.jsxs)('div', {
		className: u.outer,
		ref: t,
		children: [
			(0, s.jsxs)('div', {
				className: u.inner,
				style: v,
				children: [
					g,
					(0, s.jsxs)(l.animated.div, {
						style: { opacity: A },
						className: r()(u.coverContent, u.progressTextWrapper),
						children: [
							(0, s.jsx)('div', { className: r()(u.coverContent, u.progressTextOverlay) }),
							(0, s.jsx)(i.Text, {
								variant: 'text-lg/medium',
								color: 'text-primary',
								className: u.progressText,
								children: m
							})
						]
					})
				]
			}),
			(0, s.jsxs)('svg', {
				className: u.progressBar,
				height: a,
				width: a,
				children: [
					(0, s.jsxs)('defs', {
						children: [
							(0, s.jsxs)('filter', {
								id: 'glow',
								children: [
									(0, s.jsx)('feGaussianBlur', {
										result: 'coloredBlur',
										stdDeviation: x
									}),
									(0, s.jsxs)('feMerge', {
										children: [
											(0, s.jsx)('feMergeNode', { in: 'coloredBlur' }),
											(0, s.jsx)('feMergeNode', { in: 'coloredBlur' }),
											(0, s.jsx)('feMergeNode', { in: 'coloredBlur' }),
											(0, s.jsx)('feMergeNode', { in: 'SourceGraphic' })
										]
									})
								]
							}),
							(0, s.jsxs)('linearGradient', {
								id: 'linear',
								x1: '100%',
								y1: '0%',
								x2: '0%',
								y2: '0%',
								children: [
									(0, s.jsx)('stop', {
										offset: '0%',
										stopColor: _.backgroundTop
									}),
									(0, s.jsx)('stop', {
										offset: '100%',
										stopColor: _.backgroundBottom
									})
								]
							})
						]
					}),
					(0, s.jsx)('circle', {
						className: u.progress,
						strokeWidth: p,
						fill: 'transparent',
						r: f,
						cx: C,
						cy: C,
						stroke: 'url(#linear)',
						style: S
					}),
					(0, s.jsx)('circle', {
						className: u.progress,
						strokeWidth: p,
						fill: 'transparent',
						r: f,
						cx: C,
						cy: C,
						stroke: _.foreground,
						style: T
					})
				]
			})
		]
	});
});
