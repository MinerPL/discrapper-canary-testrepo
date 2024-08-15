n.d(t, {
	j: function () {
		return s;
	}
});
var r = n(697898),
	i = n(881085),
	a = n(470079);
function s(e) {
	let {
			minValue: t,
			maxValue: n,
			step: s,
			formatOptions: l,
			value: u,
			defaultValue: c,
			onChange: d,
			locale: _,
			isDisabled: E,
			isReadOnly: f
		} = e,
		[h, p] = (0, r.zk)(u, isNaN(c) ? NaN : c, d),
		[I, m] = (0, a.useState)(() => (isNaN(h) ? '' : new (0, i.e)(_, l).format(h))),
		T = (0, a.useMemo)(() => new i.d(_, l), [_, l]),
		g = (0, a.useMemo)(() => T.getNumberingSystem(I), [T, I]),
		S = (0, a.useMemo)(
			() =>
				new i.e(_, {
					...l,
					numberingSystem: g
				}),
			[_, l, g]
		),
		A = (0, a.useMemo)(() => S.resolvedOptions(), [S]),
		N = (0, a.useCallback)((e) => (isNaN(e) || null === e ? '' : S.format(e)), [S]),
		v = isNaN(s) ? 1 : s;
	'percent' === A.style && isNaN(s) && (v = 0.01);
	let [O, R] = (0, a.useState)(h),
		[C, y] = (0, a.useState)(_),
		[D, L] = (0, a.useState)(l);
	(!Object.is(h, O) || _ !== C || l !== D) && (m(N(h)), R(h), y(_), L(l));
	let b = (0, a.useMemo)(() => T.parse(I), [T, I]),
		M = (e, i) => {
			if (isNaN(b)) {
				let e = isNaN(i) ? 0 : i;
				return (0, r.N4)(e, t, n, v);
			}
			{
				let i = (0, r.N4)(b, t, n, v);
				return ('+' === e && i > b) || ('-' === e && i < b) ? i : (0, r.N4)(o(e, b, v), t, n, v);
			}
		},
		P = (0, a.useMemo)(
			() => !E && !f && (isNaN(b) || isNaN(n) || (0, r.N4)(b, t, n, v) > b || o('+', b, v) <= n),
			[E, f, t, n, v, b]
		),
		U = (0, a.useMemo)(
			() => !E && !f && (isNaN(b) || isNaN(t) || (0, r.N4)(b, t, n, v) < b || o('-', b, v) >= t),
			[E, f, t, n, v, b]
		);
	return {
		validate: (e) => T.isValidPartialNumber(e, t, n),
		increment: () => {
			let e = M('+', t);
			e === h && m(N(e)), p(e);
		},
		incrementToMax: () => {
			null != n && p((0, r.N4)(n, t, n, v));
		},
		decrement: () => {
			let e = M('-', n);
			e === h && m(N(e)), p(e);
		},
		decrementToMin: () => {
			null != t && p(t);
		},
		canIncrement: P,
		canDecrement: U,
		minValue: t,
		maxValue: n,
		numberValue: b,
		setNumberValue: p,
		setInputValue: m,
		inputValue: I,
		commit: () => {
			let e;
			if (!I.length) {
				p(NaN), m(void 0 === u ? '' : N(h));
				return;
			}
			if (isNaN(b)) {
				m(N(h));
				return;
			}
			(e = isNaN(s) ? (0, r.uZ)(b, t, n) : (0, r.N4)(b, t, n, s)), p((e = T.parse(N(e)))), m(N(void 0 === u ? e : h));
		}
	};
}
function o(e, t, n) {
	let r = '+' === e ? t + n : t - n;
	if (t % 1 != 0 || n % 1 != 0) {
		let i = t.toString().split('.'),
			a = n.toString().split('.'),
			s = (i[1] && i[1].length) || 0,
			o = Math.pow(10, Math.max(s, (a[1] && a[1].length) || 0));
		(t = Math.round(t * o)), (n = Math.round(n * o)), (r = ('+' === e ? t + n : t - n) / o);
	}
	return r;
}
