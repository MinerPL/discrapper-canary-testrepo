n(411104);
var i,
	s,
	a = n(735250);
n(470079);
var o = n(120356),
	r = n.n(o),
	l = n(325767),
	c = n(24701);
((s = i || (i = {})).LEFT = 'LEFT'),
	(s.RIGHT = 'RIGHT'),
	(s.UP = 'UP'),
	(s.DOWN = 'DOWN'),
	(s.UP_LEFT = 'UP_LEFT'),
	(s.DOWN_RIGHT = 'DOWN_RIGHT');
let d = (e) => {
	let {
		width: t = 24,
		height: n = 24,
		color: i = 'currentColor',
		direction: s,
		foreground: o,
		className: d,
		title: m,
		...u
	} = e;
	return (0, a.jsxs)('svg', {
		...(0, l.Z)(u),
		width: t,
		height: n,
		className: r()(
			d,
			(function (e) {
				switch (e) {
					case 'LEFT':
						return c.left;
					case 'RIGHT':
						return c.right;
					case 'UP':
						return null;
					case 'DOWN':
						return c.down;
					case 'UP_LEFT':
						return c.upLeft;
					case 'DOWN_RIGHT':
						return c.downRight;
					default:
						throw Error('Invalid Direction '.concat(e));
				}
			})(s)
		),
		viewBox: '0 0 24 24',
		children: [
			null != m ? (0, a.jsx)('title', { children: m }) : null,
			(0, a.jsx)('polygon', {
				className: o,
				fill: i,
				fillRule: 'nonzero',
				points: '13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8'
			})
		]
	});
};
(d.Directions = i), (t.Z = d);
