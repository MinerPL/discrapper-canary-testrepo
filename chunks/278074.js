n.d(t, {
	EQ: function () {
		return Q;
	},
	P: function () {
		return z;
	}
});
let r = Symbol.for('@ts-pattern/matcher'),
	i = Symbol.for('@ts-pattern/isVariadic'),
	a = '@ts-pattern/anonymous-select-key',
	s = (e) => !!(e && 'object' == typeof e),
	o = (e) => e && !!e[r],
	l = (e, t, n) => {
		if (o(e)) {
			let { matched: i, selections: a } = e[r]().match(t);
			return i && a && Object.keys(a).forEach((e) => n(e, a[e])), i;
		}
		if (s(e)) {
			if (!s(t)) return !1;
			if (Array.isArray(e)) {
				if (!Array.isArray(t)) return !1;
				let r = [],
					a = [],
					s = [];
				for (let t of e.keys()) {
					let n = e[t];
					o(n) && n[i] ? s.push(n) : s.length ? a.push(n) : r.push(n);
				}
				if (s.length) {
					if (s.length > 1)
						throw Error('Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.');
					if (t.length < r.length + a.length) return !1;
					let e = t.slice(0, r.length),
						i = 0 === a.length ? [] : t.slice(-a.length),
						o = t.slice(r.length, 0 === a.length ? 1 / 0 : -a.length);
					return (
						r.every((t, r) => l(t, e[r], n)) && a.every((e, t) => l(e, i[t], n)) && (0 === s.length || l(s[0], o, n))
					);
				}
				return e.length === t.length && e.every((e, r) => l(e, t[r], n));
			}
			return Object.keys(e).every((i) => {
				let a = e[i];
				return (i in t || (o(a) && 'optional' === a[r]().matcherType)) && l(a, t[i], n);
			});
		}
		return Object.is(t, e);
	},
	u = (e) => {
		var t, n, i;
		return s(e)
			? o(e)
				? null != (t = null == (n = (i = e[r]()).getSelectionKeys) ? void 0 : n.call(i))
					? t
					: []
				: Array.isArray(e)
					? c(e, u)
					: c(Object.values(e), u)
			: [];
	},
	c = (e, t) => e.reduce((e, n) => e.concat(t(n)), []);
function d(e) {
	return Object.assign(e, {
		optional: () => _(e),
		and: (t) => h(e, t),
		or: (t) => p(e, t),
		select: (t) => (void 0 === t ? m(e) : m(t, e))
	});
}
function _(e) {
	return d({
		[r]: () => ({
			match: (t) => {
				let n = {},
					r = (e, t) => {
						n[e] = t;
					};
				return void 0 === t
					? (u(e).forEach((e) => r(e, void 0)),
						{
							matched: !0,
							selections: n
						})
					: {
							matched: l(e, t, r),
							selections: n
						};
			},
			getSelectionKeys: () => u(e),
			matcherType: 'optional'
		})
	});
}
let E = (e, t) => {
		for (let n of e) if (!t(n)) return !1;
		return !0;
	},
	f = (e, t) => {
		for (let [n, r] of e.entries()) if (!t(r, n)) return !1;
		return !0;
	};
function h(...e) {
	return d({
		[r]: () => ({
			match: (t) => {
				let n = {},
					r = (e, t) => {
						n[e] = t;
					};
				return {
					matched: e.every((e) => l(e, t, r)),
					selections: n
				};
			},
			getSelectionKeys: () => c(e, u),
			matcherType: 'and'
		})
	});
}
function p(...e) {
	return d({
		[r]: () => ({
			match: (t) => {
				let n = {},
					r = (e, t) => {
						n[e] = t;
					};
				return (
					c(e, u).forEach((e) => r(e, void 0)),
					{
						matched: e.some((e) => l(e, t, r)),
						selections: n
					}
				);
			},
			getSelectionKeys: () => c(e, u),
			matcherType: 'or'
		})
	});
}
function I(e) {
	return { [r]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function m(...e) {
	let t = 'string' == typeof e[0] ? e[0] : void 0,
		n = 2 === e.length ? e[1] : 'string' == typeof e[0] ? void 0 : e[0];
	return d({
		[r]: () => ({
			match: (e) => {
				let r = { [null != t ? t : a]: e };
				return {
					matched:
						void 0 === n ||
						l(n, e, (e, t) => {
							r[e] = t;
						}),
					selections: r
				};
			},
			getSelectionKeys: () => [null != t ? t : a].concat(void 0 === n ? [] : u(n))
		})
	});
}
function T(e) {
	return 'number' == typeof e;
}
function g(e) {
	return 'string' == typeof e;
}
function S(e) {
	return 'bigint' == typeof e;
}
let A = d(
		I(function (e) {
			return !0;
		})
	),
	N = (e) =>
		Object.assign(d(e), {
			startsWith: (t) =>
				N(
					h(
						e,
						I((e) => g(e) && e.startsWith(t))
					)
				),
			endsWith: (t) =>
				N(
					h(
						e,
						I((e) => g(e) && e.endsWith(t))
					)
				),
			minLength: (t) => {
				let n;
				return N(h(e, ((n = t), I((e) => g(e) && e.length >= n))));
			},
			maxLength: (t) => {
				let n;
				return N(h(e, ((n = t), I((e) => g(e) && e.length <= n))));
			},
			includes: (t) =>
				N(
					h(
						e,
						I((e) => g(e) && e.includes(t))
					)
				),
			regex: (t) =>
				N(
					h(
						e,
						I((e) => g(e) && !!e.match(t))
					)
				)
		}),
	v = N(I(g)),
	O = (e, t) => I((n) => T(n) && e <= n && t >= n),
	R = (e) => I((t) => T(t) && t < e),
	C = (e) => I((t) => T(t) && t > e),
	y = (e) => I((t) => T(t) && t <= e),
	D = (e) => I((t) => T(t) && t >= e),
	L = () => I((e) => T(e) && Number.isInteger(e)),
	b = () => I((e) => T(e) && Number.isFinite(e)),
	M = () => I((e) => T(e) && e > 0),
	P = () => I((e) => T(e) && e < 0),
	U = (e) =>
		Object.assign(d(e), {
			between: (t, n) => U(h(e, O(t, n))),
			lt: (t) => U(h(e, R(t))),
			gt: (t) => U(h(e, C(t))),
			lte: (t) => U(h(e, y(t))),
			gte: (t) => U(h(e, D(t))),
			int: () => U(h(e, L())),
			finite: () => U(h(e, b())),
			positive: () => U(h(e, M())),
			negative: () => U(h(e, P()))
		}),
	w = U(I(T)),
	x = (e, t) => I((n) => S(n) && e <= n && t >= n),
	G = (e) => I((t) => S(t) && t < e),
	k = (e) => I((t) => S(t) && t > e),
	B = (e) => I((t) => S(t) && t <= e),
	F = (e) => I((t) => S(t) && t >= e),
	V = () => I((e) => S(e) && e > 0),
	H = () => I((e) => S(e) && e < 0),
	Z = (e) =>
		Object.assign(d(e), {
			between: (t, n) => Z(h(e, x(t, n))),
			lt: (t) => Z(h(e, G(t))),
			gt: (t) => Z(h(e, k(t))),
			lte: (t) => Z(h(e, B(t))),
			gte: (t) => Z(h(e, F(t))),
			positive: () => Z(h(e, V())),
			negative: () => Z(h(e, H()))
		}),
	Y = Z(I(S)),
	j = d(
		I(function (e) {
			return 'boolean' == typeof e;
		})
	),
	W = d(
		I(function (e) {
			return 'symbol' == typeof e;
		})
	),
	K = d(
		I(function (e) {
			return null == e;
		})
	);
var z = {
	__proto__: null,
	matcher: r,
	optional: _,
	array: function (...e) {
		return (function e(t) {
			let n;
			return Object.assign(
				Object.assign((n = t), {
					*[Symbol.iterator]() {
						yield Object.assign(n, { [i]: !0 });
					}
				}),
				{
					optional: () => e(_(t)),
					select: (n) => e(void 0 === n ? m(t) : m(n, t))
				}
			);
		})({
			[r]: () => ({
				match: (t) => {
					if (!Array.isArray(t)) return { matched: !1 };
					if (0 === e.length) return { matched: !0 };
					let n = e[0],
						r = {};
					if (0 === t.length)
						return (
							u(n).forEach((e) => {
								r[e] = [];
							}),
							{
								matched: !0,
								selections: r
							}
						);
					let i = (e, t) => {
						r[e] = (r[e] || []).concat([t]);
					};
					return {
						matched: t.every((e) => l(n, e, i)),
						selections: r
					};
				},
				getSelectionKeys: () => (0 === e.length ? [] : u(e[0]))
			})
		});
	},
	set: function (...e) {
		return d({
			[r]: () => ({
				match: (t) => {
					if (!(t instanceof Set)) return { matched: !1 };
					let n = {};
					if (0 === t.size)
						return {
							matched: !0,
							selections: n
						};
					if (0 === e.length) return { matched: !0 };
					let r = (e, t) => {
							n[e] = (n[e] || []).concat([t]);
						},
						i = e[0];
					return {
						matched: E(t, (e) => l(i, e, r)),
						selections: n
					};
				},
				getSelectionKeys: () => (0 === e.length ? [] : u(e[0]))
			})
		});
	},
	map: function (...e) {
		return d({
			[r]: () => ({
				match: (t) => {
					var n;
					if (!(t instanceof Map)) return { matched: !1 };
					let r = {};
					if (0 === t.size)
						return {
							matched: !0,
							selections: r
						};
					let i = (e, t) => {
						r[e] = (r[e] || []).concat([t]);
					};
					if (0 === e.length) return { matched: !0 };
					if (1 === e.length)
						throw Error(
							`\`P.map\` wasn't given enough arguments. Expected (key, value), received ${null == (n = e[0]) ? void 0 : n.toString()}`
						);
					let [a, s] = e;
					return {
						matched: f(t, (e, t) => {
							let n = l(a, t, i),
								r = l(s, e, i);
							return n && r;
						}),
						selections: r
					};
				},
				getSelectionKeys: () => (0 === e.length ? [] : [...u(e[0]), ...u(e[1])])
			})
		});
	},
	intersection: h,
	union: p,
	not: function (e) {
		return d({
			[r]: () => ({
				match: (t) => ({
					matched: !l(e, t, () => {})
				}),
				getSelectionKeys: () => [],
				matcherType: 'not'
			})
		});
	},
	when: I,
	select: m,
	any: A,
	_: A,
	string: v,
	between: O,
	lt: R,
	gt: C,
	lte: y,
	gte: D,
	int: L,
	finite: b,
	positive: M,
	negative: P,
	number: w,
	betweenBigInt: x,
	ltBigInt: G,
	gtBigInt: k,
	lteBigInt: B,
	gteBigInt: F,
	positiveBigInt: V,
	negativeBigInt: H,
	bigint: Y,
	boolean: j,
	symbol: W,
	nullish: K,
	instanceOf: function (e) {
		var t;
		return d(I(((t = e), (e) => e instanceof t)));
	},
	shape: function (e) {
		return d(
			I(
				(function (...e) {
					if (1 === e.length) {
						let [t] = e;
						return (e) => l(t, e, () => {});
					}
					if (2 === e.length) {
						let [t, n] = e;
						return l(t, n, () => {});
					}
					throw Error(`isMatching wasn't given the right number of arguments: expected 1 or 2, received ${e.length}.`);
				})(e)
			)
		);
	}
};
let q = {
	matched: !1,
	value: void 0
};
function Q(e) {
	return new X(e, q);
}
class X {
	constructor(e, t) {
		(this.input = void 0), (this.state = void 0), (this.input = e), (this.state = t);
	}
	with(...e) {
		let t;
		if (this.state.matched) return this;
		let n = e[e.length - 1],
			r = [e[0]];
		3 === e.length && 'function' == typeof e[1]
			? (r.push(e[0]), (t = e[1]))
			: e.length > 2 && r.push(...e.slice(1, e.length - 1));
		let i = !1,
			s = {},
			o = (e, t) => {
				(i = !0), (s[e] = t);
			},
			u =
				r.some((e) => l(e, this.input, o)) && (!t || t(this.input))
					? {
							matched: !0,
							value: n(i ? (a in s ? s[a] : s) : this.input, this.input)
						}
					: q;
		return new X(this.input, u);
	}
	when(e, t) {
		if (this.state.matched) return this;
		let n = !!e(this.input);
		return new X(
			this.input,
			n
				? {
						matched: !0,
						value: t(this.input, this.input)
					}
				: q
		);
	}
	otherwise(e) {
		return this.state.matched ? this.state.value : e(this.input);
	}
	exhaustive() {
		return this.run();
	}
	run() {
		let e;
		if (this.state.matched) return this.state.value;
		try {
			e = JSON.stringify(this.input);
		} catch (t) {
			e = this.input;
		}
		throw Error(`Pattern matching error: no pattern matches value ${e}`);
	}
	returnType() {
		return this;
	}
}
