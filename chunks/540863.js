n.d(t, {
	x: function () {
		return o;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(15127),
	s = n(512983);
let o = i.forwardRef(function (e, t) {
	var n, o;
	let {
			children: l,
			disabled: u = !1,
			className: c,
			titleClassName: d,
			tag: _ = 'h5',
			required: E = !1,
			style: f,
			title: h,
			error: p,
			...I
		} = e,
		m = i.useId(),
		T = i.useId(),
		g = null !== (n = I.titleId) && void 0 !== n ? n : m,
		S = null != p ? (null !== (o = I.errorId) && void 0 !== o ? o : T) : void 0;
	return (0, r.jsxs)('div', {
		ref: t,
		className: null != c ? c : void 0,
		style: null != f ? f : void 0,
		children: [
			null != h || null != p
				? (0, r.jsx)(s.v, {
						tag: _,
						disabled: u,
						required: E,
						error: p,
						className: d,
						id: g,
						errorId: S,
						...I,
						children: h
					})
				: null,
			(0, r.jsx)(a.ol, {
				titleId: g,
				errorId: S,
				error: null != p ? p : void 0,
				children: l
			})
		]
	});
});
