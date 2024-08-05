t = r.nmd(t);
var n = function(t) {
  var e = c(9007199254740992),
r = '0123456789abcdefghijklmnopqrstuvwxyz',
_ = 'function' == typeof BigInt;

  function a(t, e, r, n) {
return void 0 === t ? a[0] : void 0 !== e ? 10 != +e || r ? K(t, e, r, n) : W(t) : W(t);
  }

  function i(t, e) {
this.value = t, this.sign = e, this.isSmall = !1;
  }

  function o(t) {
this.value = t, this.sign = t < 0, this.isSmall = !0;
  }

  function E(t) {
this.value = t;
  }

  function s(t) {
return -9007199254740992 < t && t < 9007199254740992;
  }

  function c(t) {
return t < 10000000 ? [t] : t < 100000000000000 ? [
  t % 10000000,
  Math.floor(t / 10000000)
] : [
  t % 10000000,
  Math.floor(t / 10000000) % 10000000,
  Math.floor(t / 100000000000000)
];
  }

  function I(t) {
R(t);
var r = t.length;
if (r < 4 && 0 > g(t, e))
  switch (r) {
    case 0:
      return 0;
    case 1:
      return t[0];
    case 2:
      return t[0] + 10000000 * t[1];
    default:
      return t[0] + (t[1] + 10000000 * t[2]) * 10000000;
  }
return t;
  }

  function R(t) {
for (var e = t.length; 0 === t[--e];);
t.length = e + 1;
  }

  function T(t) {
for (var e = Array(t), r = -1; ++r < t;)
  e[r] = 0;
return e;
  }

  function u(t) {
return t > 0 ? Math.floor(t) : Math.ceil(t);
  }

  function l(t, e) {
var r, n, _ = t.length,
  a = e.length,
  i = Array(_),
  o = 0;
for (n = 0; n < a; n++)
  o = (r = t[n] + e[n] + o) >= 10000000 ? 1 : 0, i[n] = r - 10000000 * o;
for (; n < _;)
  o = 10000000 === (r = t[n] + o) ? 1 : 0, i[n++] = r - 10000000 * o;
return o > 0 && i.push(o), i;
  }

  function A(t, e) {
return t.length >= e.length ? l(t, e) : l(e, t);
  }

  function N(t, e) {
var r, n, _ = t.length,
  a = Array(_);
for (n = 0; n < _; n++)
  e = Math.floor((r = t[n] - 10000000 + e) / 10000000), a[n] = r - 10000000 * e, e += 1;
for (; e > 0;)
  a[n++] = e % 10000000, e = Math.floor(e / 10000000);
return a;
  }

  function d(t, e) {
var r, n, _ = t.length,
  a = e.length,
  i = Array(_),
  o = 0;
for (r = 0; r < a; r++)
  (n = t[r] - o - e[r]) < 0 ? (n += 10000000, o = 1) : o = 0, i[r] = n;
for (r = a; r < _; r++) {
  if ((n = t[r] - o) < 0)
    n += 10000000;
  else {
    i[r++] = n;
    break;
  }
  i[r] = n;
}
for (; r < _; r++)
  i[r] = t[r];
return R(i), i;
  }
  i.prototype = Object.create(a.prototype), o.prototype = Object.create(a.prototype), E.prototype = Object.create(a.prototype), i.prototype.add = function(t) {
var e = W(t);
if (this.sign !== e.sign)
  return this.subtract(e.negate());
var r = this.value,
  n = e.value;
return e.isSmall ? new i(N(r, Math.abs(n)), this.sign) : new i(A(r, n), this.sign);
  }, i.prototype.plus = i.prototype.add, o.prototype.add = function(t) {
var e = W(t),
  r = this.value;
if (r < 0 !== e.sign)
  return this.subtract(e.negate());
var n = e.value;
if (e.isSmall) {
  if (s(r + n))
    return new o(r + n);
  n = c(Math.abs(n));
}
return new i(N(n, Math.abs(r)), r < 0);
  }, o.prototype.plus = o.prototype.add, E.prototype.add = function(t) {
return new E(this.value + W(t).value);
  }, E.prototype.plus = E.prototype.add;

  function O(t, e, r) {
var n, _, a = t.length,
  E = Array(a),
  s = -e;
for (n = 0; n < a; n++)
  s = Math.floor((_ = t[n] + s) / 10000000), _ %= 10000000, E[n] = _ < 0 ? _ + 10000000 : _;
return 'number' == typeof(E = I(E)) ? (r && (E = -E), new o(E)) : new i(E, r);
  }

  function S(t, e) {
var r, n, _, a, i = t.length,
  o = e.length,
  E = T(i + o);
for (_ = 0; _ < i; ++_) {
  a = t[_];
  for (var s = 0; s < o; ++s)
    n = Math.floor((r = a * e[s] + E[_ + s]) / 10000000), E[_ + s] = r - 10000000 * n, E[_ + s + 1] += n;
}
return R(E), E;
  }

  function p(t, e) {
var r, n, _ = t.length,
  a = Array(_),
  i = 0;
for (n = 0; n < _; n++)
  i = Math.floor((r = t[n] * e + i) / 10000000), a[n] = r - 10000000 * i;
for (; i > 0;)
  a[n++] = i % 10000000, i = Math.floor(i / 10000000);
return a;
  }

  function D(t, e) {
for (var r = []; e-- > 0;)
  r.push(0);
return r.concat(t);
  }
  i.prototype.subtract = function(t) {
var e, r, n, _, a = W(t);
if (this.sign !== a.sign)
  return this.add(a.negate());
var E = this.value,
  s = a.value;
if (a.isSmall)
  return O(E, Math.abs(s), this.sign);
return e = E, r = s, n = this.sign, (g(e, r) >= 0 ? _ = d(e, r) : (_ = d(r, e), n = !n), 'number' == typeof(_ = I(_))) ? (n && (_ = -_), new o(_)) : new i(_, n);
  }, i.prototype.minus = i.prototype.subtract, o.prototype.subtract = function(t) {
var e = W(t),
  r = this.value;
if (r < 0 !== e.sign)
  return this.add(e.negate());
var n = e.value;
return e.isSmall ? new o(r - n) : O(n, Math.abs(r), r >= 0);
  }, o.prototype.minus = o.prototype.subtract, E.prototype.subtract = function(t) {
return new E(this.value - W(t).value);
  }, E.prototype.minus = E.prototype.subtract, i.prototype.negate = function() {
return new i(this.value, !this.sign);
  }, o.prototype.negate = function() {
var t = this.sign,
  e = new o(-this.value);
return e.sign = !t, e;
  }, E.prototype.negate = function() {
return new E(-this.value);
  }, i.prototype.abs = function() {
return new i(this.value, !1);
  }, o.prototype.abs = function() {
return new o(Math.abs(this.value));
  }, E.prototype.abs = function() {
return new E(this.value >= 0 ? this.value : -this.value);
  };

  function f(t, e, r) {
return t < 10000000 ? new i(p(e, t), r) : new i(S(e, c(t)), r);
  }

  function L(t) {
var e, r, n, _, a = t.length,
  i = T(a + a);
for (n = 0; n < a; n++) {
  r = 0 - (_ = t[n]) * _;
  for (var o = n; o < a; o++)
    r = Math.floor((e = _ * t[o] * 2 + i[n + o] + r) / 10000000), i[n + o] = e - 10000000 * r;
  i[n + a] = r;
}
return R(i), i;
  }
  i.prototype.multiply = function(t) {
var e, r, n, _ = W(t),
  o = this.value,
  E = _.value,
  s = this.sign !== _.sign;
if (_.isSmall) {
  if (0 === E)
    return a[0];
  if (1 === E)
    return this;
  if (-1 === E)
    return this.negate();
  if ((n = Math.abs(E)) < 10000000)
    return new i(p(o, n), s);
  E = c(n);
}
return (e = o.length, -0.012 * e - 0.012 * (r = E.length) + 0.000015 * e * r > 0) ? new i(function t(e, r) {
  var n = Math.max(e.length, r.length);
  if (n <= 30)
    return S(e, r);
  n = Math.ceil(n / 2);
  var _ = e.slice(n),
    a = e.slice(0, n),
    i = r.slice(n),
    o = r.slice(0, n),
    E = t(a, o),
    s = t(_, i),
    c = t(A(a, _), A(o, i)),
    I = A(A(E, D(d(d(c, E), s), n)), D(s, 2 * n));
  return R(I), I;
}(o, E), s) : new i(S(o, E), s);
  }, i.prototype.times = i.prototype.multiply, o.prototype._multiplyBySmall = function(t) {
return s(t.value * this.value) ? new o(t.value * this.value) : f(Math.abs(t.value), c(Math.abs(this.value)), this.sign !== t.sign);
  }, i.prototype._multiplyBySmall = function(t) {
return 0 === t.value ? a[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : f(Math.abs(t.value), this.value, this.sign !== t.sign);
  }, o.prototype.multiply = function(t) {
return W(t)._multiplyBySmall(this);
  }, o.prototype.times = o.prototype.multiply, E.prototype.multiply = function(t) {
return new E(this.value * W(t).value);
  }, E.prototype.times = E.prototype.multiply, i.prototype.square = function() {
return new i(L(this.value), !1);
  }, o.prototype.square = function() {
var t = this.value * this.value;
return s(t) ? new o(t) : new i(L(c(Math.abs(this.value))), !1);
  }, E.prototype.square = function(t) {
return new E(this.value * this.value);
  };

  function h(t, e) {
var r, n, _, a, i = t.length,
  o = T(i);
for (_ = 0, r = i - 1; r >= 0; --r)
  n = u((a = 10000000 * _ + t[r]) / e), _ = a - n * e, o[r] = 0 | n;
return [
  o,
  0 | _
];
  }

  function C(t, e) {
var r, n, s = W(e);
if (_)
  return [
    new E(t.value / s.value),
    new E(t.value % s.value)
  ];
var l = t.value,
  A = s.value;
if (0 === A)
  throw Error('Cannot divide by zero');
if (t.isSmall)
  return s.isSmall ? [
    new o(u(l / A)),
    new o(l % A)
  ] : [
    a[0],
    t
  ];
if (s.isSmall) {
  if (1 === A)
    return [
      t,
      a[0]
    ];
  if (-1 == A)
    return [
      t.negate(),
      a[0]
    ];
  var N = Math.abs(A);
  if (N < 10000000) {
    r = I((n = h(l, N))[0]);
    var O = n[1];
    return (t.sign && (O = -O), 'number' == typeof r) ? (t.sign !== s.sign && (r = -r), [
      new o(r),
      new o(O)
    ]) : [
      new i(r, t.sign !== s.sign),
      new o(O)
    ];
  }
  A = c(N);
}
var S = g(l, A);
if (-1 === S)
  return [
    a[0],
    t
  ];
if (0 === S)
  return [
    a[t.sign === s.sign ? 1 : -1],
    a[0]
  ];
r = (n = l.length + A.length <= 200 ? function(t, e) {
  var r, n, _, a, i, o, E, s = t.length,
    c = e.length,
    R = T(e.length),
    u = e[c - 1],
    l = Math.ceil(10000000 / (2 * u)),
    A = p(t, l),
    N = p(e, l);
  for (A.length <= s && A.push(0), N.push(0), u = N[c - 1], n = s - c; n >= 0; n--) {
    for (r = 10000000 - 1, A[n + c] !== u && (r = Math.floor((10000000 * A[n + c] + A[n + c - 1]) / u)), _ = 0, a = 0, o = N.length, i = 0; i < o; i++)
      _ += r * N[i], E = Math.floor(_ / 10000000), a += A[n + i] - (_ - 10000000 * E), _ = E, a < 0 ? (A[n + i] = a + 10000000, a = -1) : (A[n + i] = a, a = 0);
    for (; 0 !== a;) {
      for (r -= 1, _ = 0, i = 0; i < o; i++)
        (_ += A[n + i] - 10000000 + N[i]) < 0 ? (A[n + i] = _ + 10000000, _ = 0) : (A[n + i] = _, _ = 1);
      a += _;
    }
    R[n] = r;
  }
  return A = h(A, l)[0], [
    I(R),
    I(A)
  ];
}(l, A) : function(t, e) {
  for (var r, n, _, a, i, o = t.length, E = e.length, s = [], c = []; o;) {
    if (c.unshift(t[--o]), R(c), 0 > g(c, e)) {
      s.push(0);
      continue;
    }
    n = c.length, _ = 10000000 * c[n - 1] + c[n - 2], a = 10000000 * e[E - 1] + e[E - 2], n > E && (_ = (_ + 1) * 10000000), r = Math.ceil(_ / a);
    do {
      if (0 >= g(i = p(e, r), c))
        break;
      r--;
    } while (r);
    s.push(r), c = d(c, i);
  }
  return s.reverse(), [
    I(s),
    I(c)
  ];
}(l, A))[0];
var D = t.sign !== s.sign,
  f = n[1],
  L = t.sign;
return 'number' == typeof r ? (D && (r = -r), r = new o(r)) : r = new i(r, D), 'number' == typeof f ? (L && (f = -f), f = new o(f)) : f = new i(f, L), [
  r,
  f
];
  }

  function g(t, e) {
if (t.length !== e.length)
  return t.length > e.length ? 1 : -1;
for (var r = t.length - 1; r >= 0; r--)
  if (t[r] !== e[r])
    return t[r] > e[r] ? 1 : -1;
return 0;
  }

  function P(t) {
var e = t.abs();
return !e.isUnit() && (!!(e.equals(2) || e.equals(3) || e.equals(5)) || !(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) && (!!e.lesser(49) || void 0));
  }

  function M(t, e) {
for (var r, _, a, i = t.prev(), o = i, E = 0; o.isEven();)
  o = o.divide(2), E++;
t:
  for (_ = 0; _ < e.length; _++) {
    if (!t.lesser(e[_])) {
      if (!((a = n(e[_]).modPow(o, t)).isUnit() || a.equals(i))) {
        for (r = E - 1; 0 != r && !(a = a.square().mod(t)).isUnit(); r--) {
          ;
          if (a.equals(i))
            continue t;
        }
        return !1;
      }
    }
  }
return !0;
  }
  i.prototype.divmod = function(t) {
var e = C(this, t);
return {
  quotient: e[0],
  remainder: e[1]
};
  }, E.prototype.divmod = o.prototype.divmod = i.prototype.divmod, i.prototype.divide = function(t) {
return C(this, t)[0];
  }, E.prototype.over = E.prototype.divide = function(t) {
return new E(this.value / W(t).value);
  }, o.prototype.over = o.prototype.divide = i.prototype.over = i.prototype.divide, i.prototype.mod = function(t) {
return C(this, t)[1];
  }, E.prototype.mod = E.prototype.remainder = function(t) {
return new E(this.value % W(t).value);
  }, o.prototype.remainder = o.prototype.mod = i.prototype.remainder = i.prototype.mod, i.prototype.pow = function(t) {
var e, r, n, _ = W(t),
  i = this.value,
  E = _.value;
if (0 === E)
  return a[1];
if (0 === i)
  return a[0];
if (1 === i)
  return a[1];
if (-1 === i)
  return _.isEven() ? a[1] : a[-1];
if (_.sign)
  return a[0];
if (!_.isSmall)
  throw Error('The exponent ' + _.toString() + ' is too large.');
if (this.isSmall && s(e = Math.pow(i, E)))
  return new o(u(e));
for (r = this, n = a[1]; !0 & E && (n = n.times(r), --E), 0 !== E;) {
  ;
  E /= 2, r = r.square();
}
return n;
  }, o.prototype.pow = i.prototype.pow, E.prototype.pow = function(t) {
var e = W(t),
  r = this.value,
  n = e.value,
  _ = BigInt(0),
  i = BigInt(1),
  o = BigInt(2);
if (n === _)
  return a[1];
if (r === _)
  return a[0];
if (r === i)
  return a[1];
if (r === BigInt(-1))
  return e.isEven() ? a[1] : a[-1];
if (e.isNegative())
  return new E(_);
for (var s = this, c = a[1];
  (n & i) === i && (c = c.times(s), --n), n !== _;) {
  ;
  n /= o, s = s.square();
}
return c;
  }, i.prototype.modPow = function(t, e) {
if (t = W(t), (e = W(e)).isZero())
  throw Error('Cannot take modPow with modulus 0');
var r = a[1],
  n = this.mod(e);
for (t.isNegative() && (t = t.multiply(a[-1]), n = n.modInv(e)); t.isPositive();) {
  if (n.isZero())
    return a[0];
  t.isOdd() && (r = r.multiply(n).mod(e)), t = t.divide(2), n = n.square().mod(e);
}
return r;
  }, E.prototype.modPow = o.prototype.modPow = i.prototype.modPow, i.prototype.compareAbs = function(t) {
var e = W(t),
  r = this.value,
  n = e.value;
return e.isSmall ? 1 : g(r, n);
  }, o.prototype.compareAbs = function(t) {
var e = W(t),
  r = Math.abs(this.value),
  n = e.value;
return e.isSmall ? r === (n = Math.abs(n)) ? 0 : r > n ? 1 : -1 : -1;
  }, E.prototype.compareAbs = function(t) {
var e = this.value,
  r = W(t).value;
return (e = e >= 0 ? e : -e) === (r = r >= 0 ? r : -r) ? 0 : e > r ? 1 : -1;
  }, i.prototype.compare = function(t) {
if (t === 1 / 0)
  return -1;
if (t === -1 / 0)
  return 1;
var e = W(t),
  r = this.value,
  n = e.value;
return this.sign !== e.sign ? e.sign ? 1 : -1 : e.isSmall ? this.sign ? -1 : 1 : g(r, n) * (this.sign ? -1 : 1);
  }, i.prototype.compareTo = i.prototype.compare, o.prototype.compare = function(t) {
if (t === 1 / 0)
  return -1;
if (t === -1 / 0)
  return 1;
var e = W(t),
  r = this.value,
  n = e.value;
return e.isSmall ? r == n ? 0 : r > n ? 1 : -1 : r < 0 !== e.sign ? r < 0 ? -1 : 1 : r < 0 ? 1 : -1;
  }, o.prototype.compareTo = o.prototype.compare, E.prototype.compare = function(t) {
if (t === 1 / 0)
  return -1;
if (t === -1 / 0)
  return 1;
var e = this.value,
  r = W(t).value;
return e === r ? 0 : e > r ? 1 : -1;
  }, E.prototype.compareTo = E.prototype.compare, i.prototype.equals = function(t) {
return 0 === this.compare(t);
  }, E.prototype.eq = E.prototype.equals = o.prototype.eq = o.prototype.equals = i.prototype.eq = i.prototype.equals, i.prototype.notEquals = function(t) {
return 0 !== this.compare(t);
  }, E.prototype.neq = E.prototype.notEquals = o.prototype.neq = o.prototype.notEquals = i.prototype.neq = i.prototype.notEquals, i.prototype.greater = function(t) {
return this.compare(t) > 0;
  }, E.prototype.gt = E.prototype.greater = o.prototype.gt = o.prototype.greater = i.prototype.gt = i.prototype.greater, i.prototype.lesser = function(t) {
return 0 > this.compare(t);
  }, E.prototype.lt = E.prototype.lesser = o.prototype.lt = o.prototype.lesser = i.prototype.lt = i.prototype.lesser, i.prototype.greaterOrEquals = function(t) {
return this.compare(t) >= 0;
  }, E.prototype.geq = E.prototype.greaterOrEquals = o.prototype.geq = o.prototype.greaterOrEquals = i.prototype.geq = i.prototype.greaterOrEquals, i.prototype.lesserOrEquals = function(t) {
return 0 >= this.compare(t);
  }, E.prototype.leq = E.prototype.lesserOrEquals = o.prototype.leq = o.prototype.lesserOrEquals = i.prototype.leq = i.prototype.lesserOrEquals, i.prototype.isEven = function() {
return (1 & this.value[0]) == 0;
  }, o.prototype.isEven = function() {
return (1 & this.value) == 0;
  }, E.prototype.isEven = function() {
return (this.value & BigInt(1)) === BigInt(0);
  }, i.prototype.isOdd = function() {
return (1 & this.value[0]) == 1;
  }, o.prototype.isOdd = function() {
return (1 & this.value) == 1;
  }, E.prototype.isOdd = function() {
return (this.value & BigInt(1)) === BigInt(1);
  }, i.prototype.isPositive = function() {
return !this.sign;
  }, o.prototype.isPositive = function() {
return this.value > 0;
  }, E.prototype.isPositive = o.prototype.isPositive, i.prototype.isNegative = function() {
return this.sign;
  }, o.prototype.isNegative = function() {
return this.value < 0;
  }, E.prototype.isNegative = o.prototype.isNegative, i.prototype.isUnit = function() {
return !1;
  }, o.prototype.isUnit = function() {
return 1 === Math.abs(this.value);
  }, E.prototype.isUnit = function() {
return this.abs().value === BigInt(1);
  }, i.prototype.isZero = function() {
return !1;
  }, o.prototype.isZero = function() {
return 0 === this.value;
  }, E.prototype.isZero = function() {
return this.value === BigInt(0);
  }, i.prototype.isDivisibleBy = function(t) {
var e = W(t);
return !e.isZero() && (!!e.isUnit() || (0 === e.compareAbs(2) ? this.isEven() : this.mod(e).isZero()));
  }, E.prototype.isDivisibleBy = o.prototype.isDivisibleBy = i.prototype.isDivisibleBy, i.prototype.isPrime = function(t) {
var e = P(this);
if (void 0 !== e)
  return e;
var r = this.abs(),
  _ = r.bitLength();
if (_ <= 64)
  return M(r, [
    2,
    3,
    5,
    7,
    11,
    13,
    17,
    19,
    23,
    29,
    31,
    37
  ]);
for (var a = Math.log(2) * _.toJSNumber(), i = Math.ceil(!0 === t ? 2 * Math.pow(a, 2) : a), o = [], E = 0; E < i; E++)
  o.push(n(E + 2));
return M(r, o);
  }, E.prototype.isPrime = o.prototype.isPrime = i.prototype.isPrime, i.prototype.isProbablePrime = function(e, r) {
var _ = P(this);
if (t !== _)
  return _;
for (var a = this.abs(), i = t === e ? 5 : e, o = [], E = 0; E < i; E++)
  o.push(n.randBetween(2, a.minus(2), r));
return M(a, o);
  }, E.prototype.isProbablePrime = o.prototype.isProbablePrime = i.prototype.isProbablePrime, i.prototype.modInv = function(t) {
for (var e, r, _, a = n.zero, i = n.one, o = W(t), E = this.abs(); !E.isZero();)
  e = o.divide(E), r = a, _ = o, a = i, o = E, i = r.subtract(e.multiply(i)), E = _.subtract(e.multiply(E));
if (!o.isUnit())
  throw Error(this.toString() + ' and ' + t.toString() + ' are not co-prime');
return (-1 === a.compare(0) && (a = a.add(t)), this.isNegative()) ? a.negate() : a;
  }, E.prototype.modInv = o.prototype.modInv = i.prototype.modInv, i.prototype.next = function() {
var t = this.value;
return this.sign ? O(t, 1, this.sign) : new i(N(t, 1), this.sign);
  }, o.prototype.next = function() {
var t = this.value;
return t + 1 < 9007199254740992 ? new o(t + 1) : new i(e, !1);
  }, E.prototype.next = function() {
return new E(this.value + BigInt(1));
  }, i.prototype.prev = function() {
var t = this.value;
return this.sign ? new i(N(t, 1), !0) : O(t, 1, this.sign);
  }, o.prototype.prev = function() {
var t = this.value;
return t - 1 > -9007199254740992 ? new o(t - 1) : new i(e, !0);
  }, E.prototype.prev = function() {
return new E(this.value - BigInt(1));
  };
  for (var U = [1]; 2 * U[U.length - 1] <= 10000000;)
U.push(2 * U[U.length - 1]);
  var G = U.length,
m = U[G - 1];

  function y(t) {
return 10000000 >= Math.abs(t);
  }

  function b(t, e, r) {
e = W(e);
for (var _ = t.isNegative(), a = e.isNegative(), i = _ ? t.not() : t, o = a ? e.not() : e, E = 0, s = 0, c = null, I = null, R = []; !i.isZero() || !o.isZero();)
  E = (c = C(i, m))[1].toJSNumber(), _ && (E = m - 1 - E), s = (I = C(o, m))[1].toJSNumber(), a && (s = m - 1 - s), i = c[0], o = I[0], R.push(r(E, s));
for (var T = 0 !== r(_ ? 1 : 0, a ? 1 : 0) ? n(-1) : n(0), u = R.length - 1; u >= 0; u -= 1)
  T = T.multiply(m).add(n(R[u]));
return T;
  }
  i.prototype.shiftLeft = function(t) {
var e = W(t).toJSNumber();
if (!y(e))
  throw Error(String(e) + ' is too large for shifting.');
if (e < 0)
  return this.shiftRight(-e);
var r = this;
if (r.isZero())
  return r;
for (; e >= G;)
  r = r.multiply(m), e -= G - 1;
return r.multiply(U[e]);
  }, E.prototype.shiftLeft = o.prototype.shiftLeft = i.prototype.shiftLeft, i.prototype.shiftRight = function(t) {
var e, r = W(t).toJSNumber();
if (!y(r))
  throw Error(String(r) + ' is too large for shifting.');
if (r < 0)
  return this.shiftLeft(-r);
for (var n = this; r >= G;) {
  if (n.isZero() || n.isNegative() && n.isUnit())
    return n;
  n = (e = C(n, m))[1].isNegative() ? e[0].prev() : e[0], r -= G - 1;
}
return (e = C(n, U[r]))[1].isNegative() ? e[0].prev() : e[0];
  }, E.prototype.shiftRight = o.prototype.shiftRight = i.prototype.shiftRight, i.prototype.not = function() {
return this.negate().prev();
  }, E.prototype.not = o.prototype.not = i.prototype.not, i.prototype.and = function(t) {
return b(this, t, function(t, e) {
  return t & e;
});
  }, E.prototype.and = o.prototype.and = i.prototype.and, i.prototype.or = function(t) {
return b(this, t, function(t, e) {
  return t | e;
});
  }, E.prototype.or = o.prototype.or = i.prototype.or, i.prototype.xor = function(t) {
return b(this, t, function(t, e) {
  return t ^ e;
});
  }, E.prototype.xor = o.prototype.xor = i.prototype.xor;
  var B = 1073758208;

  function v(t) {
var e = t.value,
  r = 'number' == typeof e ? 1073741824 | e : 'bigint' == typeof e ? e | BigInt(1073741824) : e[0] + 10000000 * e[1] | B;
return r & -r;
  }

  function w(t, e) {
return t = W(t), e = W(e), t.greater(e) ? t : e;
  }

  function H(t, e) {
return t = W(t), e = W(e), t.lesser(e) ? t : e;
  }

  function Y(t, e) {
if (t = W(t).abs(), e = W(e).abs(), t.equals(e))
  return t;
if (t.isZero())
  return e;
if (e.isZero())
  return t;
for (var r, n, _ = a[1]; t.isEven() && e.isEven();)
  r = H(v(t), v(e)), t = t.divide(r), e = e.divide(r), _ = _.multiply(r);
for (; t.isEven();)
  t = t.divide(v(t));
do {
  for (; e.isEven();)
    e = e.divide(v(e));
  t.greater(e) && (n = e, e = t, t = n), e = e.subtract(t);
} while (!e.isZero());
return _.isUnit() ? t : t.multiply(_);
  }
  i.prototype.bitLength = function() {
var t = this;
return (0 > t.compareTo(n(0)) && (t = t.negate().subtract(n(1))), 0 === t.compareTo(n(0))) ? n(0) : n(function t(e, r) {
  if (0 >= r.compareTo(e)) {
    var _ = t(e, r.square(r)),
      a = _.p,
      i = _.e,
      o = a.multiply(r);
    return 0 >= o.compareTo(e) ? {
      p: o,
      e: 2 * i + 1
    } : {
      p: a,
      e: 2 * i
    };
  }
  return {
    p: n(1),
    e: 0
  };
}(t, n(2)).e).add(n(1));
  }, E.prototype.bitLength = o.prototype.bitLength = i.prototype.bitLength;
  var K = function(t, e, n, _) {
n = n || r, t = String(t), !_ && (t = t.toLowerCase(), n = n.toLowerCase());
var a, i = t.length,
  o = Math.abs(e),
  E = {};
for (a = 0; a < n.length; a++)
  E[n[a]] = a;
for (a = 0; a < i; a++) {
  var s = t[a];
  if ('-' !== s && s in E && E[s] >= o) {
    if ('1' === s && 1 === o)
      continue;
    throw Error(s + ' is not a valid digit in base ' + e + '.');
  }
}
e = W(e);
var c = [],
  I = '-' === t[0];
for (a = I ? 1 : 0; a < t.length; a++) {
  var s = t[a];
  if (s in E)
    c.push(W(E[s]));
  else if ('<' === s) {
    var R = a;
    do
      a++;
    while ('>' !== t[a] && a < t.length);
    c.push(W(t.slice(R + 1, a)));
  } else
    throw Error(s + ' is not a valid character');
}
return k(c, e, I);
  };

  function k(t, e, r) {
var n, _ = a[0],
  i = a[1];
for (n = t.length - 1; n >= 0; n--)
  _ = _.add(t[n].times(i)), i = i.times(e);
return r ? _.negate() : _;
  }

  function V(t, e) {
if ((e = n(e)).isZero()) {
  if (t.isZero())
    return {
      value: [0],
      isNegative: !1
    };
  throw Error('Cannot convert nonzero numbers to base 0.');
}
if (e.equals(-1)) {
  if (t.isZero())
    return {
      value: [0],
      isNegative: !1
    };
  if (t.isNegative())
    return {
      value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [
        1,
        0
      ])),
      isNegative: !1
    };
  var r = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [
    0,
    1
  ]);
  return r.unshift([1]), {
    value: [].concat.apply([], r),
    isNegative: !1
  };
}
var _ = !1;
if (t.isNegative() && e.isPositive() && (_ = !0, t = t.abs()), e.isUnit())
  return t.isZero() ? {
    value: [0],
    isNegative: !1
  } : {
    value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
    isNegative: _
  };
for (var a = [], i, o = t; o.isNegative() || o.compareAbs(e) >= 0;) {
  o = (i = o.divmod(e)).quotient;
  var E = i.remainder;
  E.isNegative() && (E = e.minus(E).abs(), o = o.next()), a.push(E.toJSNumber());
}
return a.push(o.toJSNumber()), {
  value: a.reverse(),
  isNegative: _
};
  }

  function x(t, e, n) {
var _ = V(t, e);
return (_.isNegative ? '-' : '') + _.value.map(function(t) {
  var e, _;
  return (e = t) < (_ = (_ = n) || r).length ? _[e] : '<' + e + '>';
}).join('');
  }

  function F(t) {
if (s(+t)) {
  var e = +t;
  if (e === u(e))
    return _ ? new E(BigInt(e)) : new o(e);
  throw Error('Invalid integer: ' + t);
}
var r = '-' === t[0];
r && (t = t.slice(1));
var n = t.split(/e/i);
if (n.length > 2)
  throw Error('Invalid integer: ' + n.join('e'));
if (2 === n.length) {
  var a = n[1];
  if ('+' === a[0] && (a = a.slice(1)), (a = +a) !== u(a) || !s(a))
    throw Error('Invalid integer: ' + a + ' is not a valid exponent.');
  var c = n[0],
    I = c.indexOf('.');
  if (I >= 0 && (a -= c.length - I - 1, c = c.slice(0, I) + c.slice(I + 1)), a < 0)
    throw Error('Cannot include negative exponent part for integers');
  c += Array(a + 1).join('0'), t = c;
}
if (!/^([0-9][0-9]*)$/.test(t))
  throw Error('Invalid integer: ' + t);
if (_)
  return new E(BigInt(r ? '-' + t : t));
for (var T = [], l = t.length, A = l - 7; l > 0;)
  T.push(+t.slice(A, l)), (A -= 7) < 0 && (A = 0), l -= 7;
return R(T), new i(T, r);
  }
  i.prototype.toArray = function(t) {
return V(this, t);
  }, o.prototype.toArray = function(t) {
return V(this, t);
  }, E.prototype.toArray = function(t) {
return V(this, t);
  }, i.prototype.toString = function(e, r) {
if (t === e && (e = 10), 10 !== e)
  return x(this, e, r);
for (var n, _ = this.value, a = _.length, i = String(_[--a]); --a >= 0;)
  n = String(_[a]), i += '0000000'.slice(n.length) + n;
return (this.sign ? '-' : '') + i;
  }, o.prototype.toString = function(e, r) {
return (t === e && (e = 10), 10 != e) ? x(this, e, r) : String(this.value);
  }, E.prototype.toString = o.prototype.toString, E.prototype.toJSON = i.prototype.toJSON = o.prototype.toJSON = function() {
return this.toString();
  }, i.prototype.valueOf = function() {
return parseInt(this.toString(), 10);
  }, i.prototype.toJSNumber = i.prototype.valueOf, o.prototype.valueOf = function() {
return this.value;
  }, o.prototype.toJSNumber = o.prototype.valueOf, E.prototype.valueOf = E.prototype.toJSNumber = function() {
return parseInt(this.toString(), 10);
  };

  function W(t) {
return 'number' == typeof t ? function(t) {
  if (_)
    return new E(BigInt(t));
  if (s(t)) {
    if (t !== u(t))
      throw Error(t + ' is not an integer.');
    return new o(t);
  }
  return F(t.toString());
}(t) : 'string' == typeof t ? F(t) : 'bigint' == typeof t ? new E(t) : t;
  }
  for (var X = 0; X < 1000; X++)
a[X] = W(X), X > 0 && (a[-X] = W(-X));
  return a.one = a[1], a.zero = a[0], a.minusOne = a[-1], a.max = w, a.min = H, a.gcd = Y, a.lcm = function(t, e) {
return t = W(t).abs(), e = W(e).abs(), t.divide(Y(t, e)).multiply(e);
  }, a.isInstance = function(t) {
return t instanceof i || t instanceof o || t instanceof E;
  }, a.randBetween = function(t, e, r) {
t = W(t), e = W(e);
var n = r || Math.random,
  _ = H(t, e),
  i = w(t, e).subtract(_).add(1);
if (i.isSmall)
  return _.add(Math.floor(n() * i));
for (var o = V(i, 10000000).value, E = [], s = !0, c = 0; c < o.length; c++) {
  var I = s ? o[c] : 10000000,
    R = u(n() * I);
  E.push(R), R < I && (s = !1);
}
return _.add(a.fromArray(E, 10000000, !1));
  }, a.fromArray = function(t, e, r) {
return k(t.map(W), W(e || 10), r);
  }, a;
}();
t.hasOwnProperty('exports') && (t.exports = n), 'function' == typeof define && define.amd && define(function() {
  return n;
});