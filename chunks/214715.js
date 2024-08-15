var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(481060),
	l = n(658198);
let u = i.memo(function (e) {
	let {
			text: t,
			variant: n = 'text-xs/medium',
			color: a = 'text-normal',
			icon: u,
			className: c,
			selected: d,
			onMouseEnter: _,
			onMouseLeave: E,
			onClick: f
		} = e,
		h = i.useMemo(() => {
			if (null != f) return () => f(t);
		}, [f, t]);
	return (0, r.jsxs)(o.Clickable, {
		className: s()(
			l.trait,
			{
				[l.selectable]: null != h && !d,
				[l.selected]: d,
				[l.clickable]: null != h
			},
			c
		),
		onMouseEnter: _,
		onMouseLeave: E,
		onClick: h,
		children: [
			null != u &&
				(0, r.jsx)(u, {
					size: 'xs',
					color: 'currentColor'
				}),
			(0, r.jsx)(o.Text, {
				variant: n,
				color: a,
				lineClamp: 1,
				children: t
			})
		]
	});
});
t.Z = u;
