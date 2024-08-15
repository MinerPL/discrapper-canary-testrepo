n.d(t, {
	E: function () {
		return _;
	}
});
var r,
	i,
	a = n(735250),
	s = n(470079),
	o = n(120356),
	l = n.n(o),
	u = n(692547),
	c = n(833833);
((r = i || (i = {})).XSMALL = 'xsmall'), (r.SMALL = 'small'), (r.LARGE = 'large');
let d = 'indeterminate';
function _(e) {
	let t,
		{ className: n, percent: r, size: i = 'small', foregroundColor: o = u.Z.unsafe_rawColors.BRAND_500.css, backgroundColor: _ = 'var(--background-modifier-active)', foregroundGradientColor: E, animate: f = !0 } = e,
		h = null != r ? r : 0;
	return (
		(t = null != E ? { background: 'linear-gradient(to right, '.concat(E[0], ', ').concat(E[1], ')') } : { backgroundColor: o }),
		(0, a.jsx)('div', {
			className: l()(n, c.progress, c[i]),
			style: { backgroundColor: _ },
			children:
				h !== d && 'number' == typeof h
					? (0, a.jsx)('div', {
							className: l()(c.progressBar, c[i], { [c.animating]: f }),
							style: {
								transform: 'translate3d('.concat(Math.min(Math.max(0, h), 100) - 100, '%, 0, 0)'),
								...t
							}
						})
					: (0, a.jsxs)(s.Fragment, {
							children: [
								(0, a.jsx)('div', {
									className: l()(c.indeterminateBar1, c[i], { [c.animating]: f }),
									style: t
								}),
								(0, a.jsx)('div', {
									className: l()(c.indeterminateBar2, c[i], { [c.animating]: f }),
									style: t
								})
							]
						})
		})
	);
}
(_.Sizes = i), (_.INDETERMINATE = d);
