n.d(t, {
	M: function () {
		return c;
	},
	c: function () {
		return u;
	}
});
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(714338),
	o = n(642366);
function l(e) {
	let { direction: t = 'up' } = e;
	return (0, r.jsx)('svg', {
		width: '10',
		height: '10',
		xmlns: 'http://www.w3.org/2000/svg',
		className: a()(o.bindArrow, o[t]),
		children: (0, r.jsx)('g', {
			fill: '#FFFFFF',
			children: (0, r.jsx)('polygon', {
				transform: 'translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ',
				points: '4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10'
			})
		})
	});
}
let u = {
	mod: () => s.Z.modKey,
	alt: () => s.Z.altKey,
	up: () => (0, r.jsx)(l, { direction: 'up' }),
	down: () => (0, r.jsx)(l, { direction: 'down' }),
	left: () => (0, r.jsx)(l, { direction: 'left' }),
	right: () => (0, r.jsx)(l, { direction: 'right' }),
	pageup: () => 'page up',
	pagedown: () => 'page down',
	'any-character': () => 'any key',
	plus: () => '+',
	return: () => s.Z.returnKey
};
function c(e) {
	let { shortcut: t, dim: n = !1, className: i, keyClassName: s } = e,
		l = Array.isArray(t) ? t : t.split('+');
	return (0, r.jsx)('div', {
		className: a()(o.combo, i, { [o.dim]: n }),
		children: l
			.map((e) => (null != u[e] ? u[e]() : e))
			.map((e, t) =>
				(0, r.jsx)(
					'span',
					{
						className: a()(o.key, s),
						children: e
					},
					t
				)
			)
	});
}
