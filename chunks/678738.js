n.d(t, {
	Z: function () {
		return d;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(442837),
	l = n(481060),
	u = n(607070),
	c = n(971865);
function d(e) {
	let { children: t, heading: n, className: a, scrollIntoView: d = !1, headingColor: _ = 'header-secondary' } = e,
		E = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
		f = i.useRef(null);
	return (
		i.useEffect(() => {
			let e = f.current;
			if (null == e) return;
			let t = requestAnimationFrame(() => {
				e.scrollIntoView({ behavior: E ? 'auto' : 'smooth' });
			});
			return () => cancelAnimationFrame(t);
		}, [E]),
		(0, r.jsxs)('section', {
			ref: d ? f : void 0,
			className: s()(c.section, a),
			children: [
				null != n &&
					(0, r.jsx)(l.Heading, {
						variant: 'text-xs/semibold',
						color: _,
						className: c.heading,
						children: n
					}),
				t
			]
		})
	);
}
