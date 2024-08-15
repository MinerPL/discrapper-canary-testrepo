n.d(t, {
	b: function () {
		return C;
	}
});
var i,
	a,
	s = n(735250),
	l = n(470079),
	r = n(120356),
	o = n.n(r),
	c = n(500923),
	u = n.n(c),
	d = n(442837),
	h = n(607070),
	m = n(484334),
	p = n(158877),
	_ = n(178408);
function f(e) {
	let t = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
		n = l.useRef(null);
	return (
		l.useEffect(() => {
			let i;
			return (
				null != n.current &&
					(i = u().loadAnimation({
						container: n.current,
						renderer: 'svg',
						loop: !0,
						autoplay: !t,
						animationData: JSON.parse(JSON.stringify(e))
					})),
				() => {
					null == i || i.destroy();
				}
			);
		}, [n, t, e]),
		n
	);
}
function E(e) {
	let { className: t } = e;
	return (0, s.jsx)('div', {
		ref: f(i || (i = n.t(m, 2))),
		className: o()(_.glow, t)
	});
}
function g(e) {
	let { className: t } = e;
	return (0, s.jsx)('div', {
		ref: f(a || (a = n.t(p, 2))),
		className: o()(_.trinkets, t)
	});
}
let C = (e) => {
	let { children: t, animationContainerClassName: n, glowClassName: i, trinketsClassName: a, onMount: r } = e;
	return (
		l.useEffect(() => {
			r();
		}, [r]),
		(0, s.jsxs)('div', {
			className: n,
			children: [
				(0, s.jsx)(E, { className: i }),
				(0, s.jsx)('div', { className: _.circleLayer }),
				(0, s.jsx)('div', {
					className: _.entrypoint,
					children: t
				}),
				(0, s.jsx)(g, { className: a })
			]
		})
	);
};
