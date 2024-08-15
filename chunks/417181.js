var a,
	n,
	s,
	o = '__lodash_placeholder__',
	i = 1 / 0,
	c = 0 / 0,
	u = [
		['ary', 128],
		['bind', 1],
		['bindKey', 2],
		['curry', 8],
		['curryRight', 16],
		['flip', 512],
		['partial', 32],
		['partialRight', 64],
		['rearg', 256]
	],
	l = /^\s+|\s+$/g,
	b = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
	f = /\{\n\/\* \[wrapped with (.+)\] \*/,
	d = /,? & /,
	h = /^[-+]0x[0-9a-f]+$/i,
	p = /^0b[01]+$/i,
	y = /^\[object .+?Constructor\]$/,
	g = /^0o[0-7]+$/i,
	v = /^(?:0|[1-9]\d*)$/,
	m = parseInt,
	O = 'object' == typeof r.g && r.g && r.g.Object === Object && r.g,
	w = 'object' == typeof self && self && self.Object === Object && self,
	k = O || w || Function('return this')();
function E(e, t, r) {
	switch (r.length) {
		case 0:
			return e.call(t);
		case 1:
			return e.call(t, r[0]);
		case 2:
			return e.call(t, r[0], r[1]);
		case 3:
			return e.call(t, r[0], r[1], r[2]);
	}
	return e.apply(t, r);
}
function x(e) {
	return e != e;
}
function j(e, t) {
	for (var r = -1, a = e.length, n = 0, s = []; ++r < a; ) {
		var i = e[r];
		(i === t || i === o) && ((e[r] = o), (s[n++] = r));
	}
	return s;
}
var C = Function.prototype,
	M = Object.prototype,
	_ = k['__core-js_shared__'];
var A = (a = /[^.]+$/.exec((_ && _.keys && _.keys.IE_PROTO) || '')) ? 'Symbol(src)_1.' + a : '',
	Z = C.toString,
	R = M.hasOwnProperty,
	S = M.toString,
	D = RegExp(
		'^' +
			Z.call(R)
				.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
				.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
			'$'
	),
	P = Object.create,
	B = Math.max,
	T = Math.min;
var F = ((n = z(Object, 'defineProperty')), (s = z.name) && s.length > 2 ? n : void 0);
function N(e) {
	return function () {
		var t,
			r = arguments;
		switch (r.length) {
			case 0:
				return new e();
			case 1:
				return new e(r[0]);
			case 2:
				return new e(r[0], r[1]);
			case 3:
				return new e(r[0], r[1], r[2]);
			case 4:
				return new e(r[0], r[1], r[2], r[3]);
			case 5:
				return new e(r[0], r[1], r[2], r[3], r[4]);
			case 6:
				return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
			case 7:
				return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6]);
		}
		var a = G((t = e.prototype)) ? P(t) : {},
			n = e.apply(a, r);
		return G(n) ? n : a;
	};
}
function I(e, t, r, a, n, s, o, i, c, u) {
	var l = 128 & t,
		b = 1 & t,
		f = 2 & t,
		d = 24 & t,
		h = 512 & t,
		p = f ? void 0 : N(e);
	return function y() {
		for (var g = arguments.length, m = Array(g), O = g; O--; ) m[O] = arguments[O];
		if (d)
			var w = q(y),
				E = (function (e, t) {
					for (var r = e.length, a = 0; r--; ) e[r] === t && a++;
					return a;
				})(m, w);
		if (
			(a &&
				(m = (function (e, t, r, a) {
					for (var n = -1, s = e.length, o = r.length, i = -1, c = t.length, u = B(s - o, 0), l = Array(c + u), b = !a; ++i < c; ) l[i] = t[i];
					for (; ++n < o; ) (b || n < s) && (l[r[n]] = e[n]);
					for (; u--; ) l[i++] = e[n++];
					return l;
				})(m, a, n, d)),
			s &&
				(m = (function (e, t, r, a) {
					for (var n = -1, s = e.length, o = -1, i = r.length, c = -1, u = t.length, l = B(s - i, 0), b = Array(l + u), f = !a; ++n < l; ) b[n] = e[n];
					for (var d = n; ++c < u; ) b[d + c] = t[c];
					for (; ++o < i; ) (f || n < s) && (b[d + r[o]] = e[n++]);
					return b;
				})(m, s, o, d)),
			(g -= E),
			d && g < u)
		) {
			var x = j(m, w);
			return L(e, t, I, y.placeholder, r, m, x, i, c, u - g);
		}
		var C = b ? r : this,
			M = f ? C[e] : e;
		return (
			(g = m.length),
			i
				? (m = (function (e, t) {
						for (
							var r = e.length,
								a = T(t.length, r),
								n = (function (e, t) {
									var r = -1,
										a = e.length;
									for (t || (t = Array(a)); ++r < a; ) t[r] = e[r];
									return t;
								})(e);
							a--;

						) {
							var s,
								o,
								i = t[a];
							(s = i), (e[a] = (o = null == (o = r) ? 9007199254740991 : o) && ('number' == typeof s || v.test(s)) && s > -1 && s % 1 == 0 && s < o ? n[i] : void 0);
						}
						return e;
					})(m, i))
				: h && g > 1 && m.reverse(),
			l && c < g && (m.length = c),
			this && this !== k && this instanceof y && (M = p || N(M)),
			M.apply(C, m)
		);
	};
}
function L(e, t, r, a, n, s, o, i, c, u) {
	var l = 8 & t;
	(t |= l ? 32 : 64), !(4 & (t &= ~(l ? 64 : 32))) && (t &= -4);
	var b = r(e, t, n, l ? s : void 0, l ? o : void 0, l ? void 0 : s, l ? void 0 : o, i, c, u);
	return (b.placeholder = a), $(b, e, t);
}
function q(e) {
	return e.placeholder;
}
function z(e, t) {
	var r,
		a,
		n,
		s = ((r = e), (a = t), null == r ? void 0 : r[a]);
	return !(
		!G((n = s)) ||
		(function (e) {
			return !!A && A in e;
		})(n)
	) &&
		((function (e) {
			var t = G(e) ? S.call(e) : '';
			return '[object Function]' == t || '[object GeneratorFunction]' == t;
		})(n) ||
		(function (e) {
			var t = !1;
			if (null != e && 'function' != typeof e.toString)
				try {
					t = !!(e + '');
				} catch (e) {}
			return t;
		})(n)
			? D
			: y
		).test(
			(function (e) {
				if (null != e) {
					try {
						return Z.call(e);
					} catch (e) {}
					try {
						return e + '';
					} catch (e) {}
				}
				return '';
			})(n)
		)
		? s
		: void 0;
}
var $ = F
	? function (e, t, r) {
			var a,
				n,
				s,
				o,
				i,
				c = t + '';
			return F(e, 'toString', {
				configurable: !0,
				enumerable: !1,
				value: (function (e) {
					return function () {
						return e;
					};
				})(
					((n = c),
					(i =
						(o = (s = (function (e, t) {
							return (
								!(function (e, t) {
									for (var r = -1, a = e ? e.length : 0; ++r < a && !1 !== t(e[r], r, e); );
								})(u, function (r) {
									var a,
										n,
										s = '_.' + r[0];
									if (
										t & r[1] &&
										((a = e),
										(n = s),
										!(
											(a ? a.length : 0) &&
											(function (e, t, r) {
												if (t != t)
													return (function (e, t, r, a) {
														for (var n = e.length, s = r + -1; a ? s-- : ++s < n; ) if (t(e[s], s, e)) return s;
														return -1;
													})(e, x, r);
												for (var a = r - 1, n = e.length; ++a < n; ) if (e[a] === t) return a;
												return -1;
											})(a, n, 0) > -1
										))
									)
										e.push(s);
								}),
								e.sort()
							);
						})((a = c.match(f)) ? a[1].split(d) : [], r)).length) - 1),
					(s[i] = (o > 1 ? '& ' : '') + s[i]),
					(s = s.join(o > 2 ? ', ' : ' ')),
					n.replace(b, '{\n/* [wrapped with ' + s + '] */\n'))
				)
			});
		}
	: function (e) {
			return e;
		};
function U(e, t, r) {
	var a = (function (e, t, r, a, n, s, o, i) {
		var c = 2 & t;
		if (!c && 'function' != typeof e) throw TypeError('Expected a function');
		var u = a ? a.length : 0;
		if ((!u && ((t &= -97), (a = n = void 0)), (o = void 0 === o ? o : B(W(o), 0)), (i = void 0 === i ? i : W(i)), (u -= n ? n.length : 0), 64 & t)) {
			var l = a,
				b = n;
			a = n = void 0;
		}
		var f = [e, t, r, a, n, l, b, s, o, i];
		if (((e = f[0]), (t = f[1]), (r = f[2]), (a = f[3]), (n = f[4]), !(i = f[9] = null == f[9] ? (c ? 0 : e.length) : B(f[9] - u, 0)) && 24 & t && (t &= -25), t && 1 != t)) {
			if (8 == t || 16 == t) {
				(d = e),
					(h = t),
					(p = i),
					(y = N(d)),
					(R = function e() {
						for (var t = arguments.length, r = Array(t), a = t, n = q(e); a--; ) r[a] = arguments[a];
						var s = t < 3 && r[0] !== n && r[t - 1] !== n ? [] : j(r, n);
						return (t -= s.length) < p ? L(d, h, I, e.placeholder, void 0, r, s, void 0, void 0, p - t) : E(this && this !== k && this instanceof e ? y : d, this, r);
					});
			} else if ((32 != t && 33 != t) || n.length) R = I.apply(void 0, f);
			else {
				(g = e),
					(v = t),
					(m = r),
					(O = a),
					(w = 1 & v),
					(x = N(g)),
					(R = function e() {
						for (var t = -1, r = arguments.length, a = -1, n = O.length, s = Array(n + r), o = this && this !== k && this instanceof e ? x : g; ++a < n; ) s[a] = O[a];
						for (; r--; ) s[a++] = arguments[++t];
						return E(o, w ? m : this, s);
					});
			}
		} else {
			var d,
				h,
				p,
				y,
				g,
				v,
				m,
				O,
				w,
				x,
				C,
				M,
				_,
				A,
				Z,
				R =
					((C = e),
					(M = t),
					(_ = r),
					(A = 1 & M),
					(Z = N(C)),
					function e() {
						return (this && this !== k && this instanceof e ? Z : C).apply(A ? _ : this, arguments);
					});
		}
		return $(R, e, t);
	})(e, 8, void 0, void 0, void 0, void 0, void 0, (t = r ? void 0 : t));
	return (a.placeholder = U.placeholder), a;
}
function G(e) {
	var t = typeof e;
	return !!e && ('object' == t || 'function' == t);
}
function W(e) {
	var t,
		r = (t = e)
			? (t = (function (e) {
					if ('number' == typeof e) return e;
					if ('symbol' == typeof (t = e) || ((r = t) && 'object' == typeof r && '[object Symbol]' == S.call(t))) return c;
					if (G(e)) {
						var t,
							r,
							a = 'function' == typeof e.valueOf ? e.valueOf() : e;
						e = G(a) ? a + '' : a;
					}
					if ('string' != typeof e) return 0 === e ? e : +e;
					e = e.replace(l, '');
					var n = p.test(e);
					return n || g.test(e) ? m(e.slice(2), n ? 2 : 8) : h.test(e) ? c : +e;
				})(t)) === i || t === -i
				? (t < 0 ? -1 : 1) * 1.7976931348623157e308
				: t == t
					? t
					: 0
			: 0 === t
				? t
				: 0,
		a = r % 1;
	return r == r ? (a ? r - a : r) : 0;
}
(U.placeholder = {}), (e.exports = U);
