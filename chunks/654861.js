e = r.nmd(e);
var n = (function (e) {
	var t = c(9007199254740992),
		r = '0123456789abcdefghijklmnopqrstuvwxyz',
		a = 'function' == typeof BigInt;
	function o(e, t, r, n) {
		return void 0 === e ? o[0] : void 0 !== t ? (10 != +t || r ? K(e, t, r, n) : W(e)) : W(e);
	}
	function i(e, t) {
		(this.value = e), (this.sign = t), (this.isSmall = !1);
	}
	function _(e) {
		(this.value = e), (this.sign = e < 0), (this.isSmall = !0);
	}
	function E(e) {
		this.value = e;
	}
	function s(e) {
		return -9007199254740992 < e && e < 9007199254740992;
	}
	function c(e) {
		return e < 10000000 ? [e] : e < 100000000000000 ? [e % 10000000, Math.floor(e / 10000000)] : [e % 10000000, Math.floor(e / 10000000) % 10000000, Math.floor(e / 100000000000000)];
	}
	function I(e) {
		u(e);
		var r = e.length;
		if (r < 4 && 0 > g(e, t))
			switch (r) {
				case 0:
					return 0;
				case 1:
					return e[0];
				case 2:
					return e[0] + 10000000 * e[1];
				default:
					return e[0] + (e[1] + 10000000 * e[2]) * 10000000;
			}
		return e;
	}
	function u(e) {
		for (var t = e.length; 0 === e[--t]; );
		e.length = t + 1;
	}
	function l(e) {
		for (var t = Array(e), r = -1; ++r < e; ) t[r] = 0;
		return t;
	}
	function R(e) {
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	function A(e, t) {
		var r,
			n,
			a = e.length,
			o = t.length,
			i = Array(a),
			_ = 0;
		for (n = 0; n < o; n++) (_ = (r = e[n] + t[n] + _) >= 10000000 ? 1 : 0), (i[n] = r - 10000000 * _);
		for (; n < a; ) (_ = 10000000 === (r = e[n] + _) ? 1 : 0), (i[n++] = r - 10000000 * _);
		return _ > 0 && i.push(_), i;
	}
	function T(e, t) {
		return e.length >= t.length ? A(e, t) : A(t, e);
	}
	function d(e, t) {
		var r,
			n,
			a = e.length,
			o = Array(a);
		for (n = 0; n < a; n++) (t = Math.floor((r = e[n] - 10000000 + t) / 10000000)), (o[n] = r - 10000000 * t), (t += 1);
		for (; t > 0; ) (o[n++] = t % 10000000), (t = Math.floor(t / 10000000));
		return o;
	}
	function N(e, t) {
		var r,
			n,
			a = e.length,
			o = t.length,
			i = Array(a),
			_ = 0;
		for (r = 0; r < o; r++) (n = e[r] - _ - t[r]) < 0 ? ((n += 10000000), (_ = 1)) : (_ = 0), (i[r] = n);
		for (r = o; r < a; r++) {
			if ((n = e[r] - _) < 0) n += 10000000;
			else {
				i[r++] = n;
				break;
			}
			i[r] = n;
		}
		for (; r < a; r++) i[r] = e[r];
		return u(i), i;
	}
	(i.prototype = Object.create(o.prototype)),
		(_.prototype = Object.create(o.prototype)),
		(E.prototype = Object.create(o.prototype)),
		(i.prototype.add = function (e) {
			var t = W(e);
			if (this.sign !== t.sign) return this.subtract(t.negate());
			var r = this.value,
				n = t.value;
			return t.isSmall ? new i(d(r, Math.abs(n)), this.sign) : new i(T(r, n), this.sign);
		}),
		(i.prototype.plus = i.prototype.add),
		(_.prototype.add = function (e) {
			var t = W(e),
				r = this.value;
			if (r < 0 !== t.sign) return this.subtract(t.negate());
			var n = t.value;
			if (t.isSmall) {
				if (s(r + n)) return new _(r + n);
				n = c(Math.abs(n));
			}
			return new i(d(n, Math.abs(r)), r < 0);
		}),
		(_.prototype.plus = _.prototype.add),
		(E.prototype.add = function (e) {
			return new E(this.value + W(e).value);
		}),
		(E.prototype.plus = E.prototype.add);
	function p(e, t, r) {
		var n,
			a,
			o = e.length,
			E = Array(o),
			s = -t;
		for (n = 0; n < o; n++) (s = Math.floor((a = e[n] + s) / 10000000)), (a %= 10000000), (E[n] = a < 0 ? a + 10000000 : a);
		return 'number' == typeof (E = I(E)) ? (r && (E = -E), new _(E)) : new i(E, r);
	}
	function O(e, t) {
		var r,
			n,
			a,
			o,
			i = e.length,
			_ = t.length,
			E = l(i + _);
		for (a = 0; a < i; ++a) {
			o = e[a];
			for (var s = 0; s < _; ++s) (n = Math.floor((r = o * t[s] + E[a + s]) / 10000000)), (E[a + s] = r - 10000000 * n), (E[a + s + 1] += n);
		}
		return u(E), E;
	}
	function f(e, t) {
		var r,
			n,
			a = e.length,
			o = Array(a),
			i = 0;
		for (n = 0; n < a; n++) (i = Math.floor((r = e[n] * t + i) / 10000000)), (o[n] = r - 10000000 * i);
		for (; i > 0; ) (o[n++] = i % 10000000), (i = Math.floor(i / 10000000));
		return o;
	}
	function S(e, t) {
		for (var r = []; t-- > 0; ) r.push(0);
		return r.concat(e);
	}
	(i.prototype.subtract = function (e) {
		var t,
			r,
			n,
			a,
			o = W(e);
		if (this.sign !== o.sign) return this.add(o.negate());
		var E = this.value,
			s = o.value;
		if (o.isSmall) return p(E, Math.abs(s), this.sign);
		return (t = E), (r = s), (n = this.sign), (g(t, r) >= 0 ? (a = N(t, r)) : ((a = N(r, t)), (n = !n)), 'number' == typeof (a = I(a))) ? (n && (a = -a), new _(a)) : new i(a, n);
	}),
		(i.prototype.minus = i.prototype.subtract),
		(_.prototype.subtract = function (e) {
			var t = W(e),
				r = this.value;
			if (r < 0 !== t.sign) return this.add(t.negate());
			var n = t.value;
			return t.isSmall ? new _(r - n) : p(n, Math.abs(r), r >= 0);
		}),
		(_.prototype.minus = _.prototype.subtract),
		(E.prototype.subtract = function (e) {
			return new E(this.value - W(e).value);
		}),
		(E.prototype.minus = E.prototype.subtract),
		(i.prototype.negate = function () {
			return new i(this.value, !this.sign);
		}),
		(_.prototype.negate = function () {
			var e = this.sign,
				t = new _(-this.value);
			return (t.sign = !e), t;
		}),
		(E.prototype.negate = function () {
			return new E(-this.value);
		}),
		(i.prototype.abs = function () {
			return new i(this.value, !1);
		}),
		(_.prototype.abs = function () {
			return new _(Math.abs(this.value));
		}),
		(E.prototype.abs = function () {
			return new E(this.value >= 0 ? this.value : -this.value);
		});
	function D(e, t, r) {
		return e < 10000000 ? new i(f(t, e), r) : new i(O(t, c(e)), r);
	}
	function L(e) {
		var t,
			r,
			n,
			a,
			o = e.length,
			i = l(o + o);
		for (n = 0; n < o; n++) {
			r = 0 - (a = e[n]) * a;
			for (var _ = n; _ < o; _++) (r = Math.floor((t = a * e[_] * 2 + i[n + _] + r) / 10000000)), (i[n + _] = t - 10000000 * r);
			i[n + o] = r;
		}
		return u(i), i;
	}
	(i.prototype.multiply = function (e) {
		var t,
			r,
			n,
			a = W(e),
			_ = this.value,
			E = a.value,
			s = this.sign !== a.sign;
		if (a.isSmall) {
			if (0 === E) return o[0];
			if (1 === E) return this;
			if (-1 === E) return this.negate();
			if ((n = Math.abs(E)) < 10000000) return new i(f(_, n), s);
			E = c(n);
		}
		return ((t = _.length), -0.012 * t - 0.012 * (r = E.length) + 0.000015 * t * r > 0)
			? new i(
					(function e(t, r) {
						var n = Math.max(t.length, r.length);
						if (n <= 30) return O(t, r);
						n = Math.ceil(n / 2);
						var a = t.slice(n),
							o = t.slice(0, n),
							i = r.slice(n),
							_ = r.slice(0, n),
							E = e(o, _),
							s = e(a, i),
							c = e(T(o, a), T(_, i)),
							I = T(T(E, S(N(N(c, E), s), n)), S(s, 2 * n));
						return u(I), I;
					})(_, E),
					s
				)
			: new i(O(_, E), s);
	}),
		(i.prototype.times = i.prototype.multiply),
		(_.prototype._multiplyBySmall = function (e) {
			return s(e.value * this.value) ? new _(e.value * this.value) : D(Math.abs(e.value), c(Math.abs(this.value)), this.sign !== e.sign);
		}),
		(i.prototype._multiplyBySmall = function (e) {
			return 0 === e.value ? o[0] : 1 === e.value ? this : -1 === e.value ? this.negate() : D(Math.abs(e.value), this.value, this.sign !== e.sign);
		}),
		(_.prototype.multiply = function (e) {
			return W(e)._multiplyBySmall(this);
		}),
		(_.prototype.times = _.prototype.multiply),
		(E.prototype.multiply = function (e) {
			return new E(this.value * W(e).value);
		}),
		(E.prototype.times = E.prototype.multiply),
		(i.prototype.square = function () {
			return new i(L(this.value), !1);
		}),
		(_.prototype.square = function () {
			var e = this.value * this.value;
			return s(e) ? new _(e) : new i(L(c(Math.abs(this.value))), !1);
		}),
		(E.prototype.square = function (e) {
			return new E(this.value * this.value);
		});
	function h(e, t) {
		var r,
			n,
			a,
			o,
			i = e.length,
			_ = l(i);
		for (a = 0, r = i - 1; r >= 0; --r) (n = R((o = 10000000 * a + e[r]) / t)), (a = o - n * t), (_[r] = 0 | n);
		return [_, 0 | a];
	}
	function C(e, t) {
		var r,
			n,
			s = W(t);
		if (a) return [new E(e.value / s.value), new E(e.value % s.value)];
		var A = e.value,
			T = s.value;
		if (0 === T) throw Error('Cannot divide by zero');
		if (e.isSmall) return s.isSmall ? [new _(R(A / T)), new _(A % T)] : [o[0], e];
		if (s.isSmall) {
			if (1 === T) return [e, o[0]];
			if (-1 == T) return [e.negate(), o[0]];
			var d = Math.abs(T);
			if (d < 10000000) {
				r = I((n = h(A, d))[0]);
				var p = n[1];
				return (e.sign && (p = -p), 'number' == typeof r) ? (e.sign !== s.sign && (r = -r), [new _(r), new _(p)]) : [new i(r, e.sign !== s.sign), new _(p)];
			}
			T = c(d);
		}
		var O = g(A, T);
		if (-1 === O) return [o[0], e];
		if (0 === O) return [o[e.sign === s.sign ? 1 : -1], o[0]];
		r = (n =
			A.length + T.length <= 200
				? (function (e, t) {
						var r,
							n,
							a,
							o,
							i,
							_,
							E,
							s = e.length,
							c = t.length,
							u = l(t.length),
							R = t[c - 1],
							A = Math.ceil(10000000 / (2 * R)),
							T = f(e, A),
							d = f(t, A);
						for (T.length <= s && T.push(0), d.push(0), R = d[c - 1], n = s - c; n >= 0; n--) {
							for (r = 10000000 - 1, T[n + c] !== R && (r = Math.floor((10000000 * T[n + c] + T[n + c - 1]) / R)), a = 0, o = 0, _ = d.length, i = 0; i < _; i++) (a += r * d[i]), (E = Math.floor(a / 10000000)), (o += T[n + i] - (a - 10000000 * E)), (a = E), o < 0 ? ((T[n + i] = o + 10000000), (o = -1)) : ((T[n + i] = o), (o = 0));
							for (; 0 !== o; ) {
								for (r -= 1, a = 0, i = 0; i < _; i++) (a += T[n + i] - 10000000 + d[i]) < 0 ? ((T[n + i] = a + 10000000), (a = 0)) : ((T[n + i] = a), (a = 1));
								o += a;
							}
							u[n] = r;
						}
						return (T = h(T, A)[0]), [I(u), I(T)];
					})(A, T)
				: (function (e, t) {
						for (var r, n, a, o, i, _ = e.length, E = t.length, s = [], c = []; _; ) {
							if ((c.unshift(e[--_]), u(c), 0 > g(c, t))) {
								s.push(0);
								continue;
							}
							(n = c.length), (a = 10000000 * c[n - 1] + c[n - 2]), (o = 10000000 * t[E - 1] + t[E - 2]), n > E && (a = (a + 1) * 10000000), (r = Math.ceil(a / o));
							do {
								if (0 >= g((i = f(t, r)), c)) break;
								r--;
							} while (r);
							s.push(r), (c = N(c, i));
						}
						return s.reverse(), [I(s), I(c)];
					})(A, T))[0];
		var S = e.sign !== s.sign,
			D = n[1],
			L = e.sign;
		return 'number' == typeof r ? (S && (r = -r), (r = new _(r))) : (r = new i(r, S)), 'number' == typeof D ? (L && (D = -D), (D = new _(D))) : (D = new i(D, L)), [r, D];
	}
	function g(e, t) {
		if (e.length !== t.length) return e.length > t.length ? 1 : -1;
		for (var r = e.length - 1; r >= 0; r--) if (e[r] !== t[r]) return e[r] > t[r] ? 1 : -1;
		return 0;
	}
	function M(e) {
		var t = e.abs();
		return !t.isUnit() && (!!(t.equals(2) || t.equals(3) || t.equals(5)) || (!(t.isEven() || t.isDivisibleBy(3) || t.isDivisibleBy(5)) && (!!t.lesser(49) || void 0)));
	}
	function P(e, t) {
		for (var r, a, o, i = e.prev(), _ = i, E = 0; _.isEven(); ) (_ = _.divide(2)), E++;
		e: for (a = 0; a < t.length; a++) {
			if (!e.lesser(t[a])) {
				if (!((o = n(t[a]).modPow(_, e)).isUnit() || o.equals(i))) {
					for (r = E - 1; 0 != r && !(o = o.square().mod(e)).isUnit(); r--) {
						if (o.equals(i)) continue e;
					}
					return !1;
				}
			}
		}
		return !0;
	}
	(i.prototype.divmod = function (e) {
		var t = C(this, e);
		return {
			quotient: t[0],
			remainder: t[1]
		};
	}),
		(E.prototype.divmod = _.prototype.divmod = i.prototype.divmod),
		(i.prototype.divide = function (e) {
			return C(this, e)[0];
		}),
		(E.prototype.over = E.prototype.divide =
			function (e) {
				return new E(this.value / W(e).value);
			}),
		(_.prototype.over = _.prototype.divide = i.prototype.over = i.prototype.divide),
		(i.prototype.mod = function (e) {
			return C(this, e)[1];
		}),
		(E.prototype.mod = E.prototype.remainder =
			function (e) {
				return new E(this.value % W(e).value);
			}),
		(_.prototype.remainder = _.prototype.mod = i.prototype.remainder = i.prototype.mod),
		(i.prototype.pow = function (e) {
			var t,
				r,
				n,
				a = W(e),
				i = this.value,
				E = a.value;
			if (0 === E) return o[1];
			if (0 === i) return o[0];
			if (1 === i) return o[1];
			if (-1 === i) return a.isEven() ? o[1] : o[-1];
			if (a.sign) return o[0];
			if (!a.isSmall) throw Error('The exponent ' + a.toString() + ' is too large.');
			if (this.isSmall && s((t = Math.pow(i, E)))) return new _(R(t));
			for (r = this, n = o[1]; !0 & E && ((n = n.times(r)), --E), 0 !== E; ) {
				(E /= 2), (r = r.square());
			}
			return n;
		}),
		(_.prototype.pow = i.prototype.pow),
		(E.prototype.pow = function (e) {
			var t = W(e),
				r = this.value,
				n = t.value,
				a = BigInt(0),
				i = BigInt(1),
				_ = BigInt(2);
			if (n === a) return o[1];
			if (r === a) return o[0];
			if (r === i) return o[1];
			if (r === BigInt(-1)) return t.isEven() ? o[1] : o[-1];
			if (t.isNegative()) return new E(a);
			for (var s = this, c = o[1]; (n & i) === i && ((c = c.times(s)), --n), n !== a; ) {
				(n /= _), (s = s.square());
			}
			return c;
		}),
		(i.prototype.modPow = function (e, t) {
			if (((e = W(e)), (t = W(t)).isZero())) throw Error('Cannot take modPow with modulus 0');
			var r = o[1],
				n = this.mod(t);
			for (e.isNegative() && ((e = e.multiply(o[-1])), (n = n.modInv(t))); e.isPositive(); ) {
				if (n.isZero()) return o[0];
				e.isOdd() && (r = r.multiply(n).mod(t)), (e = e.divide(2)), (n = n.square().mod(t));
			}
			return r;
		}),
		(E.prototype.modPow = _.prototype.modPow = i.prototype.modPow),
		(i.prototype.compareAbs = function (e) {
			var t = W(e),
				r = this.value,
				n = t.value;
			return t.isSmall ? 1 : g(r, n);
		}),
		(_.prototype.compareAbs = function (e) {
			var t = W(e),
				r = Math.abs(this.value),
				n = t.value;
			return t.isSmall ? (r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1) : -1;
		}),
		(E.prototype.compareAbs = function (e) {
			var t = this.value,
				r = W(e).value;
			return (t = t >= 0 ? t : -t) === (r = r >= 0 ? r : -r) ? 0 : t > r ? 1 : -1;
		}),
		(i.prototype.compare = function (e) {
			if (e === 1 / 0) return -1;
			if (e === -1 / 0) return 1;
			var t = W(e),
				r = this.value,
				n = t.value;
			return this.sign !== t.sign ? (t.sign ? 1 : -1) : t.isSmall ? (this.sign ? -1 : 1) : g(r, n) * (this.sign ? -1 : 1);
		}),
		(i.prototype.compareTo = i.prototype.compare),
		(_.prototype.compare = function (e) {
			if (e === 1 / 0) return -1;
			if (e === -1 / 0) return 1;
			var t = W(e),
				r = this.value,
				n = t.value;
			return t.isSmall ? (r == n ? 0 : r > n ? 1 : -1) : r < 0 !== t.sign ? (r < 0 ? -1 : 1) : r < 0 ? 1 : -1;
		}),
		(_.prototype.compareTo = _.prototype.compare),
		(E.prototype.compare = function (e) {
			if (e === 1 / 0) return -1;
			if (e === -1 / 0) return 1;
			var t = this.value,
				r = W(e).value;
			return t === r ? 0 : t > r ? 1 : -1;
		}),
		(E.prototype.compareTo = E.prototype.compare),
		(i.prototype.equals = function (e) {
			return 0 === this.compare(e);
		}),
		(E.prototype.eq = E.prototype.equals = _.prototype.eq = _.prototype.equals = i.prototype.eq = i.prototype.equals),
		(i.prototype.notEquals = function (e) {
			return 0 !== this.compare(e);
		}),
		(E.prototype.neq = E.prototype.notEquals = _.prototype.neq = _.prototype.notEquals = i.prototype.neq = i.prototype.notEquals),
		(i.prototype.greater = function (e) {
			return this.compare(e) > 0;
		}),
		(E.prototype.gt = E.prototype.greater = _.prototype.gt = _.prototype.greater = i.prototype.gt = i.prototype.greater),
		(i.prototype.lesser = function (e) {
			return 0 > this.compare(e);
		}),
		(E.prototype.lt = E.prototype.lesser = _.prototype.lt = _.prototype.lesser = i.prototype.lt = i.prototype.lesser),
		(i.prototype.greaterOrEquals = function (e) {
			return this.compare(e) >= 0;
		}),
		(E.prototype.geq = E.prototype.greaterOrEquals = _.prototype.geq = _.prototype.greaterOrEquals = i.prototype.geq = i.prototype.greaterOrEquals),
		(i.prototype.lesserOrEquals = function (e) {
			return 0 >= this.compare(e);
		}),
		(E.prototype.leq = E.prototype.lesserOrEquals = _.prototype.leq = _.prototype.lesserOrEquals = i.prototype.leq = i.prototype.lesserOrEquals),
		(i.prototype.isEven = function () {
			return (1 & this.value[0]) == 0;
		}),
		(_.prototype.isEven = function () {
			return (1 & this.value) == 0;
		}),
		(E.prototype.isEven = function () {
			return (this.value & BigInt(1)) === BigInt(0);
		}),
		(i.prototype.isOdd = function () {
			return (1 & this.value[0]) == 1;
		}),
		(_.prototype.isOdd = function () {
			return (1 & this.value) == 1;
		}),
		(E.prototype.isOdd = function () {
			return (this.value & BigInt(1)) === BigInt(1);
		}),
		(i.prototype.isPositive = function () {
			return !this.sign;
		}),
		(_.prototype.isPositive = function () {
			return this.value > 0;
		}),
		(E.prototype.isPositive = _.prototype.isPositive),
		(i.prototype.isNegative = function () {
			return this.sign;
		}),
		(_.prototype.isNegative = function () {
			return this.value < 0;
		}),
		(E.prototype.isNegative = _.prototype.isNegative),
		(i.prototype.isUnit = function () {
			return !1;
		}),
		(_.prototype.isUnit = function () {
			return 1 === Math.abs(this.value);
		}),
		(E.prototype.isUnit = function () {
			return this.abs().value === BigInt(1);
		}),
		(i.prototype.isZero = function () {
			return !1;
		}),
		(_.prototype.isZero = function () {
			return 0 === this.value;
		}),
		(E.prototype.isZero = function () {
			return this.value === BigInt(0);
		}),
		(i.prototype.isDivisibleBy = function (e) {
			var t = W(e);
			return !t.isZero() && (!!t.isUnit() || (0 === t.compareAbs(2) ? this.isEven() : this.mod(t).isZero()));
		}),
		(E.prototype.isDivisibleBy = _.prototype.isDivisibleBy = i.prototype.isDivisibleBy),
		(i.prototype.isPrime = function (e) {
			var t = M(this);
			if (void 0 !== t) return t;
			var r = this.abs(),
				a = r.bitLength();
			if (a <= 64) return P(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
			for (var o = Math.log(2) * a.toJSNumber(), i = Math.ceil(!0 === e ? 2 * Math.pow(o, 2) : o), _ = [], E = 0; E < i; E++) _.push(n(E + 2));
			return P(r, _);
		}),
		(E.prototype.isPrime = _.prototype.isPrime = i.prototype.isPrime),
		(i.prototype.isProbablePrime = function (t, r) {
			var a = M(this);
			if (e !== a) return a;
			for (var o = this.abs(), i = e === t ? 5 : t, _ = [], E = 0; E < i; E++) _.push(n.randBetween(2, o.minus(2), r));
			return P(o, _);
		}),
		(E.prototype.isProbablePrime = _.prototype.isProbablePrime = i.prototype.isProbablePrime),
		(i.prototype.modInv = function (e) {
			for (var t, r, a, o = n.zero, i = n.one, _ = W(e), E = this.abs(); !E.isZero(); ) (t = _.divide(E)), (r = o), (a = _), (o = i), (_ = E), (i = r.subtract(t.multiply(i))), (E = a.subtract(t.multiply(E)));
			if (!_.isUnit()) throw Error(this.toString() + ' and ' + e.toString() + ' are not co-prime');
			return (-1 === o.compare(0) && (o = o.add(e)), this.isNegative()) ? o.negate() : o;
		}),
		(E.prototype.modInv = _.prototype.modInv = i.prototype.modInv),
		(i.prototype.next = function () {
			var e = this.value;
			return this.sign ? p(e, 1, this.sign) : new i(d(e, 1), this.sign);
		}),
		(_.prototype.next = function () {
			var e = this.value;
			return e + 1 < 9007199254740992 ? new _(e + 1) : new i(t, !1);
		}),
		(E.prototype.next = function () {
			return new E(this.value + BigInt(1));
		}),
		(i.prototype.prev = function () {
			var e = this.value;
			return this.sign ? new i(d(e, 1), !0) : p(e, 1, this.sign);
		}),
		(_.prototype.prev = function () {
			var e = this.value;
			return e - 1 > -9007199254740992 ? new _(e - 1) : new i(t, !0);
		}),
		(E.prototype.prev = function () {
			return new E(this.value - BigInt(1));
		});
	for (var m = [1]; 2 * m[m.length - 1] <= 10000000; ) m.push(2 * m[m.length - 1]);
	var U = m.length,
		G = m[U - 1];
	function y(e) {
		return 10000000 >= Math.abs(e);
	}
	function v(e, t, r) {
		t = W(t);
		for (var a = e.isNegative(), o = t.isNegative(), i = a ? e.not() : e, _ = o ? t.not() : t, E = 0, s = 0, c = null, I = null, u = []; !i.isZero() || !_.isZero(); ) (E = (c = C(i, G))[1].toJSNumber()), a && (E = G - 1 - E), (s = (I = C(_, G))[1].toJSNumber()), o && (s = G - 1 - s), (i = c[0]), (_ = I[0]), u.push(r(E, s));
		for (var l = 0 !== r(a ? 1 : 0, o ? 1 : 0) ? n(-1) : n(0), R = u.length - 1; R >= 0; R -= 1) l = l.multiply(G).add(n(u[R]));
		return l;
	}
	(i.prototype.shiftLeft = function (e) {
		var t = W(e).toJSNumber();
		if (!y(t)) throw Error(String(t) + ' is too large for shifting.');
		if (t < 0) return this.shiftRight(-t);
		var r = this;
		if (r.isZero()) return r;
		for (; t >= U; ) (r = r.multiply(G)), (t -= U - 1);
		return r.multiply(m[t]);
	}),
		(E.prototype.shiftLeft = _.prototype.shiftLeft = i.prototype.shiftLeft),
		(i.prototype.shiftRight = function (e) {
			var t,
				r = W(e).toJSNumber();
			if (!y(r)) throw Error(String(r) + ' is too large for shifting.');
			if (r < 0) return this.shiftLeft(-r);
			for (var n = this; r >= U; ) {
				if (n.isZero() || (n.isNegative() && n.isUnit())) return n;
				(n = (t = C(n, G))[1].isNegative() ? t[0].prev() : t[0]), (r -= U - 1);
			}
			return (t = C(n, m[r]))[1].isNegative() ? t[0].prev() : t[0];
		}),
		(E.prototype.shiftRight = _.prototype.shiftRight = i.prototype.shiftRight),
		(i.prototype.not = function () {
			return this.negate().prev();
		}),
		(E.prototype.not = _.prototype.not = i.prototype.not),
		(i.prototype.and = function (e) {
			return v(this, e, function (e, t) {
				return e & t;
			});
		}),
		(E.prototype.and = _.prototype.and = i.prototype.and),
		(i.prototype.or = function (e) {
			return v(this, e, function (e, t) {
				return e | t;
			});
		}),
		(E.prototype.or = _.prototype.or = i.prototype.or),
		(i.prototype.xor = function (e) {
			return v(this, e, function (e, t) {
				return e ^ t;
			});
		}),
		(E.prototype.xor = _.prototype.xor = i.prototype.xor);
	var b = 1073758208;
	function B(e) {
		var t = e.value,
			r = 'number' == typeof t ? 1073741824 | t : 'bigint' == typeof t ? t | BigInt(1073741824) : (t[0] + 10000000 * t[1]) | b;
		return r & -r;
	}
	function w(e, t) {
		return (e = W(e)), (t = W(t)), e.greater(t) ? e : t;
	}
	function H(e, t) {
		return (e = W(e)), (t = W(t)), e.lesser(t) ? e : t;
	}
	function Y(e, t) {
		if (((e = W(e).abs()), (t = W(t).abs()), e.equals(t))) return e;
		if (e.isZero()) return t;
		if (t.isZero()) return e;
		for (var r, n, a = o[1]; e.isEven() && t.isEven(); ) (r = H(B(e), B(t))), (e = e.divide(r)), (t = t.divide(r)), (a = a.multiply(r));
		for (; e.isEven(); ) e = e.divide(B(e));
		do {
			for (; t.isEven(); ) t = t.divide(B(t));
			e.greater(t) && ((n = t), (t = e), (e = n)), (t = t.subtract(e));
		} while (!t.isZero());
		return a.isUnit() ? e : e.multiply(a);
	}
	(i.prototype.bitLength = function () {
		var e = this;
		return (0 > e.compareTo(n(0)) && (e = e.negate().subtract(n(1))), 0 === e.compareTo(n(0)))
			? n(0)
			: n(
					(function e(t, r) {
						if (0 >= r.compareTo(t)) {
							var a = e(t, r.square(r)),
								o = a.p,
								i = a.e,
								_ = o.multiply(r);
							return 0 >= _.compareTo(t)
								? {
										p: _,
										e: 2 * i + 1
									}
								: {
										p: o,
										e: 2 * i
									};
						}
						return {
							p: n(1),
							e: 0
						};
					})(e, n(2)).e
				).add(n(1));
	}),
		(E.prototype.bitLength = _.prototype.bitLength = i.prototype.bitLength);
	var K = function (e, t, n, a) {
		(n = n || r), (e = String(e)), !a && ((e = e.toLowerCase()), (n = n.toLowerCase()));
		var o,
			i = e.length,
			_ = Math.abs(t),
			E = {};
		for (o = 0; o < n.length; o++) E[n[o]] = o;
		for (o = 0; o < i; o++) {
			var s = e[o];
			if ('-' !== s && s in E && E[s] >= _) {
				if ('1' === s && 1 === _) continue;
				throw Error(s + ' is not a valid digit in base ' + t + '.');
			}
		}
		t = W(t);
		var c = [],
			I = '-' === e[0];
		for (o = I ? 1 : 0; o < e.length; o++) {
			var s = e[o];
			if (s in E) c.push(W(E[s]));
			else if ('<' === s) {
				var u = o;
				do o++;
				while ('>' !== e[o] && o < e.length);
				c.push(W(e.slice(u + 1, o)));
			} else throw Error(s + ' is not a valid character');
		}
		return k(c, t, I);
	};
	function k(e, t, r) {
		var n,
			a = o[0],
			i = o[1];
		for (n = e.length - 1; n >= 0; n--) (a = a.add(e[n].times(i))), (i = i.times(t));
		return r ? a.negate() : a;
	}
	function V(e, t) {
		if ((t = n(t)).isZero()) {
			if (e.isZero())
				return {
					value: [0],
					isNegative: !1
				};
			throw Error('Cannot convert nonzero numbers to base 0.');
		}
		if (t.equals(-1)) {
			if (e.isZero())
				return {
					value: [0],
					isNegative: !1
				};
			if (e.isNegative())
				return {
					value: [].concat.apply([], Array.apply(null, Array(-e.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
					isNegative: !1
				};
			var r = Array.apply(null, Array(e.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
			return (
				r.unshift([1]),
				{
					value: [].concat.apply([], r),
					isNegative: !1
				}
			);
		}
		var a = !1;
		if ((e.isNegative() && t.isPositive() && ((a = !0), (e = e.abs())), t.isUnit()))
			return e.isZero()
				? {
						value: [0],
						isNegative: !1
					}
				: {
						value: Array.apply(null, Array(e.toJSNumber())).map(Number.prototype.valueOf, 1),
						isNegative: a
					};
		for (var o = [], i, _ = e; _.isNegative() || _.compareAbs(t) >= 0; ) {
			_ = (i = _.divmod(t)).quotient;
			var E = i.remainder;
			E.isNegative() && ((E = t.minus(E).abs()), (_ = _.next())), o.push(E.toJSNumber());
		}
		return (
			o.push(_.toJSNumber()),
			{
				value: o.reverse(),
				isNegative: a
			}
		);
	}
	function x(e, t, n) {
		var a = V(e, t);
		return (
			(a.isNegative ? '-' : '') +
			a.value
				.map(function (e) {
					var t, a;
					return (t = e) < (a = (a = n) || r).length ? a[t] : '<' + t + '>';
				})
				.join('')
		);
	}
	function F(e) {
		if (s(+e)) {
			var t = +e;
			if (t === R(t)) return a ? new E(BigInt(t)) : new _(t);
			throw Error('Invalid integer: ' + e);
		}
		var r = '-' === e[0];
		r && (e = e.slice(1));
		var n = e.split(/e/i);
		if (n.length > 2) throw Error('Invalid integer: ' + n.join('e'));
		if (2 === n.length) {
			var o = n[1];
			if (('+' === o[0] && (o = o.slice(1)), (o = +o) !== R(o) || !s(o))) throw Error('Invalid integer: ' + o + ' is not a valid exponent.');
			var c = n[0],
				I = c.indexOf('.');
			if ((I >= 0 && ((o -= c.length - I - 1), (c = c.slice(0, I) + c.slice(I + 1))), o < 0)) throw Error('Cannot include negative exponent part for integers');
			(c += Array(o + 1).join('0')), (e = c);
		}
		if (!/^([0-9][0-9]*)$/.test(e)) throw Error('Invalid integer: ' + e);
		if (a) return new E(BigInt(r ? '-' + e : e));
		for (var l = [], A = e.length, T = A - 7; A > 0; ) l.push(+e.slice(T, A)), (T -= 7) < 0 && (T = 0), (A -= 7);
		return u(l), new i(l, r);
	}
	(i.prototype.toArray = function (e) {
		return V(this, e);
	}),
		(_.prototype.toArray = function (e) {
			return V(this, e);
		}),
		(E.prototype.toArray = function (e) {
			return V(this, e);
		}),
		(i.prototype.toString = function (t, r) {
			if ((e === t && (t = 10), 10 !== t)) return x(this, t, r);
			for (var n, a = this.value, o = a.length, i = String(a[--o]); --o >= 0; ) (n = String(a[o])), (i += '0000000'.slice(n.length) + n);
			return (this.sign ? '-' : '') + i;
		}),
		(_.prototype.toString = function (t, r) {
			return (e === t && (t = 10), 10 != t) ? x(this, t, r) : String(this.value);
		}),
		(E.prototype.toString = _.prototype.toString),
		(E.prototype.toJSON =
			i.prototype.toJSON =
			_.prototype.toJSON =
				function () {
					return this.toString();
				}),
		(i.prototype.valueOf = function () {
			return parseInt(this.toString(), 10);
		}),
		(i.prototype.toJSNumber = i.prototype.valueOf),
		(_.prototype.valueOf = function () {
			return this.value;
		}),
		(_.prototype.toJSNumber = _.prototype.valueOf),
		(E.prototype.valueOf = E.prototype.toJSNumber =
			function () {
				return parseInt(this.toString(), 10);
			});
	function W(e) {
		return 'number' == typeof e
			? (function (e) {
					if (a) return new E(BigInt(e));
					if (s(e)) {
						if (e !== R(e)) throw Error(e + ' is not an integer.');
						return new _(e);
					}
					return F(e.toString());
				})(e)
			: 'string' == typeof e
				? F(e)
				: 'bigint' == typeof e
					? new E(e)
					: e;
	}
	for (var X = 0; X < 1000; X++) (o[X] = W(X)), X > 0 && (o[-X] = W(-X));
	return (
		(o.one = o[1]),
		(o.zero = o[0]),
		(o.minusOne = o[-1]),
		(o.max = w),
		(o.min = H),
		(o.gcd = Y),
		(o.lcm = function (e, t) {
			return (e = W(e).abs()), (t = W(t).abs()), e.divide(Y(e, t)).multiply(t);
		}),
		(o.isInstance = function (e) {
			return e instanceof i || e instanceof _ || e instanceof E;
		}),
		(o.randBetween = function (e, t, r) {
			(e = W(e)), (t = W(t));
			var n = r || Math.random,
				a = H(e, t),
				i = w(e, t).subtract(a).add(1);
			if (i.isSmall) return a.add(Math.floor(n() * i));
			for (var _ = V(i, 10000000).value, E = [], s = !0, c = 0; c < _.length; c++) {
				var I = s ? _[c] : 10000000,
					u = R(n() * I);
				E.push(u), u < I && (s = !1);
			}
			return a.add(o.fromArray(E, 10000000, !1));
		}),
		(o.fromArray = function (e, t, r) {
			return k(e.map(W), W(t || 10), r);
		}),
		o
	);
})();
e.hasOwnProperty('exports') && (e.exports = n),
	'function' == typeof define &&
		define.amd &&
		define(function () {
			return n;
		});
