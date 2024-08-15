n.d(t, {
	I: function () {
		return u;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(803997),
	s = n.n(a),
	o = n(789978),
	l = n(780900);
function u(e, t, n) {
	let a = (0, l.G6)(e);
	return i.forwardRef(function (u, c) {
		let { children: d, className: _, dir: E = 'ltr', orientation: f = 'vertical', fade: h = !1, customTheme: p = !1, paddingFix: m = !0, style: I, ...T } = u,
			{ scrollerRef: g, getScrollerState: S } = (0, l.Ke)(),
			A = (0, l.t2)(g, f);
		i.useImperativeHandle(
			c,
			() => ({
				getScrollerNode: () => g.current,
				getScrollerState: S,
				...(0, l.Ue)(g, S, A, f)
			}),
			[g, S, f, A]
		);
		let N = (0, l.tT)({
			paddingFix: m,
			orientation: f,
			dir: E,
			className: _,
			scrollerRef: g,
			specs: a
		});
		return (0, r.jsx)('div', {
			ref: g,
			className: s()(_, {
				[e]: !0,
				[t]: h,
				[n]: p
			}),
			style: (0, l.uT)(I, f),
			dir: E,
			...T,
			children: (0, r.jsxs)(o.Jc, {
				containerRef: g,
				children: [d, N]
			})
		});
	});
}
