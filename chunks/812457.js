n.d(t, {
	j: function () {
		return o;
	}
}),
	n(47120);
var r = n(470079),
	i = n(442837),
	a = n(607070),
	s = n(451478);
let o = (e, t) => {
	let n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
		o = (0, i.e7)([s.Z], () => s.Z.isFocused()),
		[l, u] = r.useState(!1),
		c = r.useRef(null);
	return (
		r.useEffect(() => {
			clearTimeout(c.current), (c.current = null);
			let r = !n && !t,
				i = o && (e || r);
			i && n
				? (c.current = window.setTimeout(() => {
						u(!0);
					}, 1000))
				: u(i);
		}, [o, e, n, t]),
		r.useEffect(() => () => clearTimeout(c.current), []),
		{ canAnimate: l }
	);
};
