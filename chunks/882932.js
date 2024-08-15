n.d(t, {
	N4: function () {
		return s;
	},
	uZ: function () {
		return a;
	},
	zk: function () {
		return i;
	}
});
var r = n(470079);
function i(e, t, n) {
	let [i, a] = (0, r.useState)(e || t),
		s = (0, r.useRef)(void 0 !== e),
		o = void 0 !== e;
	(0, r.useEffect)(() => {
		let e = s.current;
		e !== o &&
			console.warn(
				`WARN: A component changed from ${e ? 'controlled' : 'uncontrolled'} to ${o ? 'controlled' : 'uncontrolled'}.`
			),
			(s.current = o);
	}, [o]);
	let l = o ? e : i,
		u = (0, r.useCallback)(
			(e, ...t) => {
				let r = (e, ...t) => {
					n && !Object.is(l, e) && n(e, ...t), !o && (l = e);
				};
				if ('function' == typeof e) {
					console.warn(
						'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320'
					);
					a((n, ...i) => {
						let a = e(o ? l : n, ...i);
						return (r(a, ...t), o) ? n : a;
					});
				} else !o && a(e), r(e, ...t);
			},
			[o, l, n]
		);
	return [l, u];
}
function a(e, t = -1 / 0, n = 1 / 0) {
	return Math.min(Math.max(e, t), n);
}
function s(e, t, n, r) {
	(t = Number(t)), (n = Number(n));
	let i = (e - (isNaN(t) ? 0 : t)) % r,
		a = 2 * Math.abs(i) >= r ? e + Math.sign(i) * (r - Math.abs(i)) : e - i;
	isNaN(t)
		? !isNaN(n) && a > n && (a = Math.floor(n / r) * r)
		: a < t
			? (a = t)
			: !isNaN(n) && a > n && (a = t + Math.floor((n - t) / r) * r);
	let s = r.toString(),
		o = s.indexOf('.'),
		l = o >= 0 ? s.length - o : 0;
	if (l > 0) {
		let e = Math.pow(10, l);
		a = Math.round(a * e) / e;
	}
	return a;
}
