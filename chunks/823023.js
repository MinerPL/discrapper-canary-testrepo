n.d(t, {
	N: function () {
		return f;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	a = n(338545),
	s = n(481060),
	o = n(450096),
	l = n(981631),
	u = n(235202);
let c = {
		from: { opacity: 1 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 200 }
	},
	d = {
		...c,
		config: { duration: 50 }
	},
	_ = {
		...c,
		config: (e, t) => (t ? { duration: 800 } : { duration: 200 })
	};
function E(e) {
	let { readyState: t, placeholderImg: n, placeholderStyle: o } = e,
		_ = t === l.zo9.LOADING,
		[E] = i.useState(() => Date.now()),
		f = t === l.zo9.READY && Date.now() - E < 200,
		h = (0, s.useTransition)(_ && null != n, f ? d : c);
	return (0, r.jsx)(r.Fragment, {
		children: h(
			(e, t) =>
				t &&
				(0, r.jsx)(a.animated.img, {
					style: {
						...o,
						...e
					},
					className: u.imagePlaceholder,
					src: n,
					alt: ''
				})
		)
	});
}
function f(e) {
	let { readyState: t, aspectRatio: n, placeholder: c, placeholderVersion: d, placeholderStyle: f, children: h } = e,
		p = t === l.zo9.LOADING,
		[I] = i.useState(p),
		[m, T] = i.useState(!1),
		g = (0, o.L)(c, d, I);
	i.useEffect(() => {
		let e = setTimeout(() => {
			T(!0);
		}, 2000);
		return () => {
			clearTimeout(e);
		};
	}, [I]);
	let S = (0, s.useTransition)(p && m, _);
	return (0, r.jsxs)('div', {
		className: u.loadingOverlay,
		style: { aspectRatio: n },
		children: [
			h,
			null != g &&
				(0, r.jsx)(E, {
					readyState: t,
					placeholderImg: g,
					placeholderStyle: f
				}),
			S(
				(e, t) =>
					t &&
					(0, r.jsx)(a.animated.div, {
						style: e,
						className: u.imageLoadingOverlay,
						children: (0, r.jsx)(s.Spinner, {
							type: s.SpinnerTypes.SPINNING_CIRCLE_SIMPLE,
							className: u.cornerLoadingSpinner
						})
					})
			)
		]
	});
}
