n(653041);
var r = n(269054),
	i = n(217209),
	a = n.n(i),
	s = n(78650),
	o = n.n(s),
	l = n(505444),
	u = n.n(l);
function c(e) {
	let t = Object.keys(e)[0];
	return ''.concat(t, '(').concat(e[t], ')');
}
let d = /rgba\(([\d.]+), ([\d.]+), ([\d.]+), ([\d.]+)\)/;
function _(e) {
	let t = e.match(d);
	return (
		null != t &&
			(e = 'rgba('
				.concat(0 | t[1], ', ')
				.concat(0 | t[2], ', ')
				.concat(0 | t[3], ', ')
				.concat(t[4], ')')),
		e
	);
}
r.inject.ApplyAnimatedValues(
	function (e, t, n) {
		if (e.setNativeProps) e.setNativeProps(t);
		else {
			if (!e.nodeType || void 0 === e.setAttribute) return !1;
			var r;
			u().setValueForStyles(
				e,
				((r = t.style) &&
					(r.transform && (r.transform = r.WebkitTransform = r.MozTransform = r.transform.map(c).join(' ')),
					r.color && (r.color = _(r.color)),
					r.backgroundColor && (r.backgroundColor = _(r.backgroundColor))),
				r),
				n._reactInternalInstance
			);
		}
	},
	(e) => e
);
function E(e, t, n) {
	return void 0 !== t && void 0 != n ? o()(t, n) : e;
}
t.Z = {
	...r,
	Easing: a(),
	accelerate: function (e) {
		return (e.transform = e.transform || []), e.transform.push({ translateZ: 0 }), e;
	},
	animate: function e(t, n) {
		let i;
		let {
				toValueMin: a,
				toValueMax: s,
				tension: o = 0,
				friction: l = 0,
				loop: u,
				reverse: c,
				invert: d,
				callback: _,
				type: f = 'spring',
				shouldLoop: h,
				durationMin: p,
				durationMax: I,
				...m
			} = n,
			T = t._value,
			g = E(n.duration, p, I),
			S = E(n.toValue, a, s),
			A = r[f](t, {
				...m,
				toValue: S,
				tension: o,
				friction: l,
				duration: g
			}),
			N = A;
		if (c || d) {
			let e = E(n.duration, p, I);
			(i = r[f](t, {
				...m,
				toValue: c ? T : -S,
				tension: o,
				friction: l,
				duration: e
			})),
				(N = r.sequence([A, i]));
		}
		u
			? N.start(() => {
					(!h || (h && h())) && (_ ? _(e.bind(null, t, n)) : e(t, n));
				})
			: N.start(_);
	},
	interpolate: function (e) {
		for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		return e.interpolate({
			inputRange: [0, 1],
			outputRange: n
		});
	},
	Extrapolate: { CLAMP: 'clamp' },
	div: r.createAnimatedComponent('div'),
	span: r.createAnimatedComponent('span'),
	img: r.createAnimatedComponent('img'),
	a: r.createAnimatedComponent('a'),
	form: r.createAnimatedComponent('form'),
	ul: r.createAnimatedComponent('ul'),
	li: r.createAnimatedComponent('li'),
	g: r.createAnimatedComponent('g'),
	use: r.createAnimatedComponent('use'),
	path: r.createAnimatedComponent('path'),
	section: r.createAnimatedComponent('section'),
	video: r.createAnimatedComponent('video')
};
