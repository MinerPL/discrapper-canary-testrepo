a.d(s, {
	w: function () {
		return d;
	}
}),
	a(47120);
var n = a(470079),
	l = a(688619),
	r = a.n(l),
	t = a(979590),
	i = a.n(t),
	o = a(442837),
	E = a(866442),
	c = a(607070),
	_ = a(220082),
	I = a(981631);
let u = (e, s) => {
		let a = c.Z.desaturateUserColors ? c.Z.saturation : 1,
			n = _.SR.getState().palette[e],
			l =
				null == n
					? void 0
					: n.map((e) => {
							let [s, n, l] = e,
								{
									h: r,
									s: t,
									l: o
								} = i()({
									r: s,
									g: n,
									b: l
								}).toHsl();
							return i()({
								h: r,
								s: t * a,
								l: o
							}).toHexString();
						});
		return null != l ? l : [s, s];
	},
	d = (e) => {
		var s, n, l, t, i, o;
		let _;
		_ = a(481060).tokens;
		let d = c.Z.saturation,
			[A, R] = u(
				e,
				null !==
					(o =
						null == _
							? void 0
							: null === (i = _.colors) || void 0 === i
								? void 0
								: null === (t = i.BACKGROUND_FLOATING) || void 0 === t
									? void 0
									: null === (l = t.resolve) || void 0 === l
										? void 0
										: null ===
													(n = l.call(t, {
														theme: I.BRd.DARK,
														saturation: d
													})) || void 0 === n
											? void 0
											: null === (s = n.hex) || void 0 === s
												? void 0
												: s.call(n)) && void 0 !== o
					? o
					: '#000'
			),
			N = (0, E._i)(A),
			O = (0, E._i)(R);
		for (let e = 1; e < 8 && !((0, E.Bd)(N) >= 0.725); e++) {
			N = r()(N).darken(0.5).num();
		}
		for (let e = 1; e < 8 && !((0, E.Bd)(O) >= 0.725); e++) {
			O = r()(O).darken(0.5).num();
		}
		let T = (0, E.Rf)(N);
		return {
			primaryColor: T,
			secondaryColor: (0, E.Rf)(O)
		};
	};
s.Z = (e) => {
	var s, l, t, i, u, d;
	let A;
	A = a(481060).tokens;
	let R = (0, o.e7)([c.Z], () => c.Z.saturation),
		[N, O] = (0, _.Cf)(
			e,
			null !==
				(d =
					null == A
						? void 0
						: null === (u = A.colors) || void 0 === u
							? void 0
							: null === (i = u.BACKGROUND_FLOATING) || void 0 === i
								? void 0
								: null === (t = i.resolve) || void 0 === t
									? void 0
									: null ===
												(l = t.call(i, {
													theme: I.BRd.DARK,
													saturation: R
												})) || void 0 === l
										? void 0
										: null === (s = l.hex) || void 0 === s
											? void 0
											: s.call(l)) && void 0 !== d
				? d
				: '#000'
		);
	return n.useMemo(() => {
		let e = (0, E._i)(N),
			s = (0, E._i)(O);
		for (let s = 1; s < 8 && !((0, E.Bd)(e) >= 0.725); s++) {
			e = r()(e).darken(0.5).num();
		}
		for (let e = 1; e < 8 && !((0, E.Bd)(s) >= 0.725); e++) {
			s = r()(s).darken(0.5).num();
		}
		let a = (0, E.Rf)(e);
		return {
			primaryColor: a,
			secondaryColor: (0, E.Rf)(s)
		};
	}, [N, O]);
};
