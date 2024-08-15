n.d(t, {
	y: function () {
		return _;
	}
}),
	n(47120);
var r,
	i,
	a = n(735250);
n(470079);
var s = n(120356),
	o = n.n(s),
	l = n(392711),
	u = n.n(l),
	c = n(692547),
	d = n(911404);
function _(e) {
	let {
			className: t,
			percents: n,
			size: r = 'small',
			foregroundColors: i = [c.Z.unsafe_rawColors.BRAND_500.css],
			backgroundColor: s = 'var(--background-modifier-active)',
			animate: l = !0
		} = e,
		_ = u()
			.zip(n, i)
			.map((e, t) => {
				let n,
					[i, s] = e;
				return (
					(n = Array.isArray(s)
						? { background: 'linear-gradient(to right, '.concat(s[0], ', ').concat(s[1], ')') }
						: { backgroundColor: s }),
					(0, a.jsx)(
						'div',
						{
							className: o()(d.progressBar, d[r], { [d.animating]: l }),
							style: {
								transform: 'translate3d('.concat(Math.min(Math.max(0, i), 100) - 100, '%, 0, 0)'),
								...n
							}
						},
						t
					)
				);
			})
			.reverse();
	return (0, a.jsx)('div', {
		className: o()(t, d.progress, d[r]),
		style: { backgroundColor: s },
		children: _
	});
}
((i = r || (r = {})).XSMALL = 'xsmall'), (i.SMALL = 'small'), (i.LARGE = 'large'), (_.Sizes = r);
