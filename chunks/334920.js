var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(571540);
t.Z = (e) => {
	let { src: t, alt: n, size: a, 'aria-label': l, className: u } = e,
		c = i.useRef(null),
		d = i.useRef(!1),
		_ = d.current ? o.image : o.imageLoading;
	return (0, r.jsx)('img', {
		className: s()(_, u),
		alt: n,
		src: t,
		ref: c,
		'aria-label': l,
		style: {
			backgroundSize: a,
			height: a,
			width: a
		},
		onLoad: d.current
			? void 0
			: () => {
					window.requestAnimationFrame(() => {
						null != c.current &&
							((d.current = !0), c.current.classList.remove(o.imageLoading), c.current.classList.add(o.image));
					});
				}
	});
};
