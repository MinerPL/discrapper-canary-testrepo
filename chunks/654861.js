t = e.nmd(t);
var n = function(t) {
  "use strict";
  var r = s(9007199254740992),
    e = "0123456789abcdefghijklmnopqrstuvwxyz",
    o = "function" == typeof BigInt;

  function i(t, r, e, n) {
    return void 0 === t ? i[0] : void 0 !== r ? 10 != +r || e ? C(t, r, e, n) : $(t) : $(t)
  }

  function a(t, r) {
    this.value = t, this.sign = r, this.isSmall = !1
  }

  function u(t) {
    this.value = t, this.sign = t < 0, this.isSmall = !0
  }

  function f(t) {
    this.value = t
  }

  function c(t) {
    return -9007199254740992 < t && t < 9007199254740992
  }

  function s(t) {
    return t < 1e7 ? [t] : t < 1e14 ? [t % 1e7, Math.floor(t / 1e7)] : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)]
  }

  function p(t) {
    l(t);
    var e = t.length;
    if (e < 4 && 0 > E(t, r)) switch (e) {
      case 0:
        return 0;
      case 1:
        return t[0];
      case 2:
        return t[0] + 1e7 * t[1];
      default:
        return t[0] + (t[1] + 1e7 * t[2]) * 1e7
    }
    return t
  }

  function l(t) {
    for (var r = t.length; 0 === t[--r];);
    t.length = r + 1
  }

  function h(t) {
    for (var r = Array(t), e = -1; ++e < t;) r[e] = 0;
    return r
  }

  function v(t) {
    return t > 0 ? Math.floor(t) : Math.ceil(t)
  }

  function d(t, r) {
    var e, n, o = t.length,
      i = r.length,
      a = Array(o),
      u = 0;
    for (n = 0; n < i; n++) u = (e = t[n] + r[n] + u) >= 1e7 ? 1 : 0, a[n] = e - 1e7 * u;
    for (; n < o;) u = 1e7 === (e = t[n] + u) ? 1 : 0, a[n++] = e - 1e7 * u;
    return u > 0 && a.push(u), a
  }

  function b(t, r) {
    return t.length >= r.length ? d(t, r) : d(r, t)
  }

  function g(t, r) {
    var e, n, o = t.length,
      i = Array(o);
    for (n = 0; n < o; n++) r = Math.floor((e = t[n] - 1e7 + r) / 1e7), i[n] = e - 1e7 * r, r += 1;
    for (; r > 0;) i[n++] = r % 1e7, r = Math.floor(r / 1e7);
    return i
  }

  function y(t, r) {
    var e, n, o = t.length,
      i = r.length,
      a = Array(o),
      u = 0;
    for (e = 0; e < i; e++)(n = t[e] - u - r[e]) < 0 ? (n += 1e7, u = 1) : u = 0, a[e] = n;
    for (e = i; e < o; e++) {
      if ((n = t[e] - u) < 0) n += 1e7;
      else {
        a[e++] = n;
        break
      }
      a[e] = n
    }
    for (; e < o; e++) a[e] = t[e];
    return l(a), a
  }
  a.prototype = Object.create(i.prototype), u.prototype = Object.create(i.prototype), f.prototype = Object.create(i.prototype), a.prototype.add = function(t) {
    var r = $(t);
    if (this.sign !== r.sign) return this.subtract(r.negate());
    var e = this.value,
      n = r.value;
    return r.isSmall ? new a(g(e, Math.abs(n)), this.sign) : new a(b(e, n), this.sign)
  }, a.prototype.plus = a.prototype.add, u.prototype.add = function(t) {
    var r = $(t),
      e = this.value;
    if (e < 0 !== r.sign) return this.subtract(r.negate());
    var n = r.value;
    if (r.isSmall) {
      if (c(e + n)) return new u(e + n);
      n = s(Math.abs(n))
    }
    return new a(g(n, Math.abs(e)), e < 0)
  }, u.prototype.plus = u.prototype.add, f.prototype.add = function(t) {
    return new f(this.value + $(t).value)
  }, f.prototype.plus = f.prototype.add;

  function m(t, r, e) {
    var n, o, i = t.length,
      f = Array(i),
      c = -r;
    for (n = 0; n < i; n++) c = Math.floor((o = t[n] + c) / 1e7), o %= 1e7, f[n] = o < 0 ? o + 1e7 : o;
    return "number" == typeof(f = p(f)) ? (e && (f = -f), new u(f)) : new a(f, e)
  }

  function w(t, r) {
    var e, n, o, i, a = t.length,
      u = r.length,
      f = h(a + u);
    for (o = 0; o < a; ++o) {
      i = t[o];
      for (var c = 0; c < u; ++c) n = Math.floor((e = i * r[c] + f[o + c]) / 1e7), f[o + c] = e - 1e7 * n, f[o + c + 1] += n
    }
    return l(f), f
  }

  function _(t, r) {
    var e, n, o = t.length,
      i = Array(o),
      a = 0;
    for (n = 0; n < o; n++) a = Math.floor((e = t[n] * r + a) / 1e7), i[n] = e - 1e7 * a;
    for (; a > 0;) i[n++] = a % 1e7, a = Math.floor(a / 1e7);
    return i
  }

  function x(t, r) {
    for (var e = []; r-- > 0;) e.push(0);
    return e.concat(t)
  }
  a.prototype.subtract = function(t) {
    var r, e, n, o, i = $(t);
    if (this.sign !== i.sign) return this.add(i.negate());
    var f = this.value,
      c = i.value;
    if (i.isSmall) return m(f, Math.abs(c), this.sign);
    return r = f, e = c, n = this.sign, (E(r, e) >= 0 ? o = y(r, e) : (o = y(e, r), n = !n), "number" == typeof(o = p(o))) ? (n && (o = -o), new u(o)) : new a(o, n)
  }, a.prototype.minus = a.prototype.subtract, u.prototype.subtract = function(t) {
    var r = $(t),
      e = this.value;
    if (e < 0 !== r.sign) return this.add(r.negate());
    var n = r.value;
    return r.isSmall ? new u(e - n) : m(n, Math.abs(e), e >= 0)
  }, u.prototype.minus = u.prototype.subtract, f.prototype.subtract = function(t) {
    return new f(this.value - $(t).value)
  }, f.prototype.minus = f.prototype.subtract, a.prototype.negate = function() {
    return new a(this.value, !this.sign)
  }, u.prototype.negate = function() {
    var t = this.sign,
      r = new u(-this.value);
    return r.sign = !t, r
  }, f.prototype.negate = function() {
    return new f(-this.value)
  }, a.prototype.abs = function() {
    return new a(this.value, !1)
  }, u.prototype.abs = function() {
    return new u(Math.abs(this.value))
  }, f.prototype.abs = function() {
    return new f(this.value >= 0 ? this.value : -this.value)
  };

  function k(t, r, e) {
    return t < 1e7 ? new a(_(r, t), e) : new a(w(r, s(t)), e)
  }

  function M(t) {
    var r, e, n, o, i = t.length,
      a = h(i + i);
    for (n = 0; n < i; n++) {
      e = 0 - (o = t[n]) * o;
      for (var u = n; u < i; u++) e = Math.floor((r = o * t[u] * 2 + a[n + u] + e) / 1e7), a[n + u] = r - 1e7 * e;
      a[n + i] = e
    }
    return l(a), a
  }
  a.prototype.multiply = function(t) {
    var r, e, n, o = $(t),
      u = this.value,
      f = o.value,
      c = this.sign !== o.sign;
    if (o.isSmall) {
      if (0 === f) return i[0];
      if (1 === f) return this;
      if (-1 === f) return this.negate();
      if ((n = Math.abs(f)) < 1e7) return new a(_(u, n), c);
      f = s(n)
    }
    return (r = u.length, -.012 * r - .012 * (e = f.length) + 15e-6 * r * e > 0) ? new a(function t(r, e) {
      var n = Math.max(r.length, e.length);
      if (n <= 30) return w(r, e);
      n = Math.ceil(n / 2);
      var o = r.slice(n),
        i = r.slice(0, n),
        a = e.slice(n),
        u = e.slice(0, n),
        f = t(i, u),
        c = t(o, a),
        s = t(b(i, o), b(u, a)),
        p = b(b(f, x(y(y(s, f), c), n)), x(c, 2 * n));
      return l(p), p
    }(u, f), c) : new a(w(u, f), c)
  }, a.prototype.times = a.prototype.multiply, u.prototype._multiplyBySmall = function(t) {
    return c(t.value * this.value) ? new u(t.value * this.value) : k(Math.abs(t.value), s(Math.abs(this.value)), this.sign !== t.sign)
  }, a.prototype._multiplyBySmall = function(t) {
    return 0 === t.value ? i[0] : 1 === t.value ? this : -1 === t.value ? this.negate() : k(Math.abs(t.value), this.value, this.sign !== t.sign)
  }, u.prototype.multiply = function(t) {
    return $(t)._multiplyBySmall(this)
  }, u.prototype.times = u.prototype.multiply, f.prototype.multiply = function(t) {
    return new f(this.value * $(t).value)
  }, f.prototype.times = f.prototype.multiply, a.prototype.square = function() {
    return new a(M(this.value), !1)
  }, u.prototype.square = function() {
    var t = this.value * this.value;
    return c(t) ? new u(t) : new a(M(s(Math.abs(this.value))), !1)
  }, f.prototype.square = function(t) {
    return new f(this.value * this.value)
  };

  function j(t, r) {
    var e, n, o, i, a = t.length,
      u = h(a);
    for (o = 0, e = a - 1; e >= 0; --e) n = v((i = 1e7 * o + t[e]) / r), o = i - n * r, u[e] = 0 | n;
    return [u, 0 | o]
  }

  function O(t, r) {
    var e, n, c = $(r);
    if (o) return [new f(t.value / c.value), new f(t.value % c.value)];
    var d = t.value,
      b = c.value;
    if (0 === b) throw Error("Cannot divide by zero");
    if (t.isSmall) return c.isSmall ? [new u(v(d / b)), new u(d % b)] : [i[0], t];
    if (c.isSmall) {
      if (1 === b) return [t, i[0]];
      if (-1 == b) return [t.negate(), i[0]];
      var g = Math.abs(b);
      if (g < 1e7) {
        e = p((n = j(d, g))[0]);
        var m = n[1];
        return (t.sign && (m = -m), "number" == typeof e) ? (t.sign !== c.sign && (e = -e), [new u(e), new u(m)]) : [new a(e, t.sign !== c.sign), new u(m)]
      }
      b = s(g)
    }
    var w = E(d, b);
    if (-1 === w) return [i[0], t];
    if (0 === w) return [i[t.sign === c.sign ? 1 : -1], i[0]];
    e = (n = d.length + b.length <= 200 ? function(t, r) {
      var e, n, o, i, a, u, f, c = t.length,
        s = r.length,
        l = h(r.length),
        v = r[s - 1],
        d = Math.ceil(1e7 / (2 * v)),
        b = _(t, d),
        g = _(r, d);
      for (b.length <= c && b.push(0), g.push(0), v = g[s - 1], n = c - s; n >= 0; n--) {
        for (e = 1e7 - 1, b[n + s] !== v && (e = Math.floor((1e7 * b[n + s] + b[n + s - 1]) / v)), o = 0, i = 0, u = g.length, a = 0; a < u; a++) o += e * g[a], f = Math.floor(o / 1e7), i += b[n + a] - (o - 1e7 * f), o = f, i < 0 ? (b[n + a] = i + 1e7, i = -1) : (b[n + a] = i, i = 0);
        for (; 0 !== i;) {
          for (e -= 1, o = 0, a = 0; a < u; a++)(o += b[n + a] - 1e7 + g[a]) < 0 ? (b[n + a] = o + 1e7, o = 0) : (b[n + a] = o, o = 1);
          i += o
        }
        l[n] = e
      }
      return b = j(b, d)[0], [p(l), p(b)]
    }(d, b) : function(t, r) {
      for (var e, n, o, i, a, u = t.length, f = r.length, c = [], s = []; u;) {
        if (s.unshift(t[--u]), l(s), 0 > E(s, r)) {
          c.push(0);
          continue
        }
        n = s.length, o = 1e7 * s[n - 1] + s[n - 2], i = 1e7 * r[f - 1] + r[f - 2], n > f && (o = (o + 1) * 1e7), e = Math.ceil(o / i);
        do {
          if (0 >= E(a = _(r, e), s)) break;
          e--
        } while (e);
        c.push(e), s = y(s, a)
      }
      return c.reverse(), [p(c), p(s)]
    }(d, b))[0];
    var x = t.sign !== c.sign,
      k = n[1],
      M = t.sign;
    return "number" == typeof e ? (x && (e = -e), e = new u(e)) : e = new a(e, x), "number" == typeof k ? (M && (k = -k), k = new u(k)) : k = new a(k, M), [e, k]
  }

  function E(t, r) {
    if (t.length !== r.length) return t.length > r.length ? 1 : -1;
    for (var e = t.length - 1; e >= 0; e--)
      if (t[e] !== r[e]) return t[e] > r[e] ? 1 : -1;
    return 0
  }

  function N(t) {
    var r = t.abs();
    return !r.isUnit() && (!!(r.equals(2) || r.equals(3) || r.equals(5)) || !(r.isEven() || r.isDivisibleBy(3) || r.isDivisibleBy(5)) && (!!r.lesser(49) || void 0))
  }

  function A(t, r) {
    for (var e, o, i, a = t.prev(), u = a, f = 0; u.isEven();) u = u.divide(2), f++;
    t: for (o = 0; o < r.length; o++) {
      if (!t.lesser(r[o])) {
        if (!((i = n(r[o]).modPow(u, t)).isUnit() || i.equals(a))) {
          for (e = f - 1; 0 != e && !(i = i.square().mod(t)).isUnit(); e--) {
            ;
            if (i.equals(a)) continue t
          }
          return !1
        }
      }
    }
    return !0
  }
  a.prototype.divmod = function(t) {
    var r = O(this, t);
    return {
      quotient: r[0],
      remainder: r[1]
    }
  }, f.prototype.divmod = u.prototype.divmod = a.prototype.divmod, a.prototype.divide = function(t) {
    return O(this, t)[0]
  }, f.prototype.over = f.prototype.divide = function(t) {
    return new f(this.value / $(t).value)
  }, u.prototype.over = u.prototype.divide = a.prototype.over = a.prototype.divide, a.prototype.mod = function(t) {
    return O(this, t)[1]
  }, f.prototype.mod = f.prototype.remainder = function(t) {
    return new f(this.value % $(t).value)
  }, u.prototype.remainder = u.prototype.mod = a.prototype.remainder = a.prototype.mod, a.prototype.pow = function(t) {
    var r, e, n, o = $(t),
      a = this.value,
      f = o.value;
    if (0 === f) return i[1];
    if (0 === a) return i[0];
    if (1 === a) return i[1];
    if (-1 === a) return o.isEven() ? i[1] : i[-1];
    if (o.sign) return i[0];
    if (!o.isSmall) throw Error("The exponent " + o.toString() + " is too large.");
    if (this.isSmall && c(r = Math.pow(a, f))) return new u(v(r));
    for (e = this, n = i[1]; !0 & f && (n = n.times(e), --f), 0 !== f;) {
      ;
      f /= 2, e = e.square()
    }
    return n
  }, u.prototype.pow = a.prototype.pow, f.prototype.pow = function(t) {
    var r = $(t),
      e = this.value,
      n = r.value,
      o = BigInt(0),
      a = BigInt(1),
      u = BigInt(2);
    if (n === o) return i[1];
    if (e === o) return i[0];
    if (e === a) return i[1];
    if (e === BigInt(-1)) return r.isEven() ? i[1] : i[-1];
    if (r.isNegative()) return new f(o);
    for (var c = this, s = i[1];
      (n & a) === a && (s = s.times(c), --n), n !== o;) {
      ;
      n /= u, c = c.square()
    }
    return s
  }, a.prototype.modPow = function(t, r) {
    if (t = $(t), (r = $(r)).isZero()) throw Error("Cannot take modPow with modulus 0");
    var e = i[1],
      n = this.mod(r);
    for (t.isNegative() && (t = t.multiply(i[-1]), n = n.modInv(r)); t.isPositive();) {
      if (n.isZero()) return i[0];
      t.isOdd() && (e = e.multiply(n).mod(r)), t = t.divide(2), n = n.square().mod(r)
    }
    return e
  }, f.prototype.modPow = u.prototype.modPow = a.prototype.modPow, a.prototype.compareAbs = function(t) {
    var r = $(t),
      e = this.value,
      n = r.value;
    return r.isSmall ? 1 : E(e, n)
  }, u.prototype.compareAbs = function(t) {
    var r = $(t),
      e = Math.abs(this.value),
      n = r.value;
    return r.isSmall ? e === (n = Math.abs(n)) ? 0 : e > n ? 1 : -1 : -1
  }, f.prototype.compareAbs = function(t) {
    var r = this.value,
      e = $(t).value;
    return (r = r >= 0 ? r : -r) === (e = e >= 0 ? e : -e) ? 0 : r > e ? 1 : -1
  }, a.prototype.compare = function(t) {
    if (t === 1 / 0) return -1;
    if (t === -1 / 0) return 1;
    var r = $(t),
      e = this.value,
      n = r.value;
    return this.sign !== r.sign ? r.sign ? 1 : -1 : r.isSmall ? this.sign ? -1 : 1 : E(e, n) * (this.sign ? -1 : 1)
  }, a.prototype.compareTo = a.prototype.compare, u.prototype.compare = function(t) {
    if (t === 1 / 0) return -1;
    if (t === -1 / 0) return 1;
    var r = $(t),
      e = this.value,
      n = r.value;
    return r.isSmall ? e == n ? 0 : e > n ? 1 : -1 : e < 0 !== r.sign ? e < 0 ? -1 : 1 : e < 0 ? 1 : -1
  }, u.prototype.compareTo = u.prototype.compare, f.prototype.compare = function(t) {
    if (t === 1 / 0) return -1;
    if (t === -1 / 0) return 1;
    var r = this.value,
      e = $(t).value;
    return r === e ? 0 : r > e ? 1 : -1
  }, f.prototype.compareTo = f.prototype.compare, a.prototype.equals = function(t) {
    return 0 === this.compare(t)
  }, f.prototype.eq = f.prototype.equals = u.prototype.eq = u.prototype.equals = a.prototype.eq = a.prototype.equals, a.prototype.notEquals = function(t) {
    return 0 !== this.compare(t)
  }, f.prototype.neq = f.prototype.notEquals = u.prototype.neq = u.prototype.notEquals = a.prototype.neq = a.prototype.notEquals, a.prototype.greater = function(t) {
    return this.compare(t) > 0
  }, f.prototype.gt = f.prototype.greater = u.prototype.gt = u.prototype.greater = a.prototype.gt = a.prototype.greater, a.prototype.lesser = function(t) {
    return 0 > this.compare(t)
  }, f.prototype.lt = f.prototype.lesser = u.prototype.lt = u.prototype.lesser = a.prototype.lt = a.prototype.lesser, a.prototype.greaterOrEquals = function(t) {
    return this.compare(t) >= 0
  }, f.prototype.geq = f.prototype.greaterOrEquals = u.prototype.geq = u.prototype.greaterOrEquals = a.prototype.geq = a.prototype.greaterOrEquals, a.prototype.lesserOrEquals = function(t) {
    return 0 >= this.compare(t)
  }, f.prototype.leq = f.prototype.lesserOrEquals = u.prototype.leq = u.prototype.lesserOrEquals = a.prototype.leq = a.prototype.lesserOrEquals, a.prototype.isEven = function() {
    return (1 & this.value[0]) == 0
  }, u.prototype.isEven = function() {
    return (1 & this.value) == 0
  }, f.prototype.isEven = function() {
    return (this.value & BigInt(1)) === BigInt(0)
  }, a.prototype.isOdd = function() {
    return (1 & this.value[0]) == 1
  }, u.prototype.isOdd = function() {
    return (1 & this.value) == 1
  }, f.prototype.isOdd = function() {
    return (this.value & BigInt(1)) === BigInt(1)
  }, a.prototype.isPositive = function() {
    return !this.sign
  }, u.prototype.isPositive = function() {
    return this.value > 0
  }, f.prototype.isPositive = u.prototype.isPositive, a.prototype.isNegative = function() {
    return this.sign
  }, u.prototype.isNegative = function() {
    return this.value < 0
  }, f.prototype.isNegative = u.prototype.isNegative, a.prototype.isUnit = function() {
    return !1
  }, u.prototype.isUnit = function() {
    return 1 === Math.abs(this.value)
  }, f.prototype.isUnit = function() {
    return this.abs().value === BigInt(1)
  }, a.prototype.isZero = function() {
    return !1
  }, u.prototype.isZero = function() {
    return 0 === this.value
  }, f.prototype.isZero = function() {
    return this.value === BigInt(0)
  }, a.prototype.isDivisibleBy = function(t) {
    var r = $(t);
    return !r.isZero() && (!!r.isUnit() || (0 === r.compareAbs(2) ? this.isEven() : this.mod(r).isZero()))
  }, f.prototype.isDivisibleBy = u.prototype.isDivisibleBy = a.prototype.isDivisibleBy, a.prototype.isPrime = function(t) {
    var r = N(this);
    if (void 0 !== r) return r;
    var e = this.abs(),
      o = e.bitLength();
    if (o <= 64) return A(e, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
    for (var i = Math.log(2) * o.toJSNumber(), a = Math.ceil(!0 === t ? 2 * Math.pow(i, 2) : i), u = [], f = 0; f < a; f++) u.push(n(f + 2));
    return A(e, u)
  }, f.prototype.isPrime = u.prototype.isPrime = a.prototype.isPrime, a.prototype.isProbablePrime = function(r, e) {
    var o = N(this);
    if (t !== o) return o;
    for (var i = this.abs(), a = t === r ? 5 : r, u = [], f = 0; f < a; f++) u.push(n.randBetween(2, i.minus(2), e));
    return A(i, u)
  }, f.prototype.isProbablePrime = u.prototype.isProbablePrime = a.prototype.isProbablePrime, a.prototype.modInv = function(t) {
    for (var r, e, o, i = n.zero, a = n.one, u = $(t), f = this.abs(); !f.isZero();) r = u.divide(f), e = i, o = u, i = a, u = f, a = e.subtract(r.multiply(a)), f = o.subtract(r.multiply(f));
    if (!u.isUnit()) throw Error(this.toString() + " and " + t.toString() + " are not co-prime");
    return (-1 === i.compare(0) && (i = i.add(t)), this.isNegative()) ? i.negate() : i
  }, f.prototype.modInv = u.prototype.modInv = a.prototype.modInv, a.prototype.next = function() {
    var t = this.value;
    return this.sign ? m(t, 1, this.sign) : new a(g(t, 1), this.sign)
  }, u.prototype.next = function() {
    var t = this.value;
    return t + 1 < 9007199254740992 ? new u(t + 1) : new a(r, !1)
  }, f.prototype.next = function() {
    return new f(this.value + BigInt(1))
  }, a.prototype.prev = function() {
    var t = this.value;
    return this.sign ? new a(g(t, 1), !0) : m(t, 1, this.sign)
  }, u.prototype.prev = function() {
    var t = this.value;
    return t - 1 > -9007199254740992 ? new u(t - 1) : new a(r, !0)
  }, f.prototype.prev = function() {
    return new f(this.value - BigInt(1))
  };
  for (var S = [1]; 2 * S[S.length - 1] <= 1e7;) S.push(2 * S[S.length - 1]);
  var q = S.length,
    P = S[q - 1];

  function I(t) {
    return 1e7 >= Math.abs(t)
  }

  function B(t, r, e) {
    r = $(r);
    for (var o = t.isNegative(), i = r.isNegative(), a = o ? t.not() : t, u = i ? r.not() : r, f = 0, c = 0, s = null, p = null, l = []; !a.isZero() || !u.isZero();) f = (s = O(a, P))[1].toJSNumber(), o && (f = P - 1 - f), c = (p = O(u, P))[1].toJSNumber(), i && (c = P - 1 - c), a = s[0], u = p[0], l.push(e(f, c));
    for (var h = 0 !== e(o ? 1 : 0, i ? 1 : 0) ? n(-1) : n(0), v = l.length - 1; v >= 0; v -= 1) h = h.multiply(P).add(n(l[v]));
    return h
  }
  a.prototype.shiftLeft = function(t) {
    var r = $(t).toJSNumber();
    if (!I(r)) throw Error(String(r) + " is too large for shifting.");
    if (r < 0) return this.shiftRight(-r);
    var e = this;
    if (e.isZero()) return e;
    for (; r >= q;) e = e.multiply(P), r -= q - 1;
    return e.multiply(S[r])
  }, f.prototype.shiftLeft = u.prototype.shiftLeft = a.prototype.shiftLeft, a.prototype.shiftRight = function(t) {
    var r, e = $(t).toJSNumber();
    if (!I(e)) throw Error(String(e) + " is too large for shifting.");
    if (e < 0) return this.shiftLeft(-e);
    for (var n = this; e >= q;) {
      if (n.isZero() || n.isNegative() && n.isUnit()) return n;
      n = (r = O(n, P))[1].isNegative() ? r[0].prev() : r[0], e -= q - 1
    }
    return (r = O(n, S[e]))[1].isNegative() ? r[0].prev() : r[0]
  }, f.prototype.shiftRight = u.prototype.shiftRight = a.prototype.shiftRight, a.prototype.not = function() {
    return this.negate().prev()
  }, f.prototype.not = u.prototype.not = a.prototype.not, a.prototype.and = function(t) {
    return B(this, t, function(t, r) {
      return t & r
    })
  }, f.prototype.and = u.prototype.and = a.prototype.and, a.prototype.or = function(t) {
    return B(this, t, function(t, r) {
      return t | r
    })
  }, f.prototype.or = u.prototype.or = a.prototype.or, a.prototype.xor = function(t) {
    return B(this, t, function(t, r) {
      return t ^ r
    })
  }, f.prototype.xor = u.prototype.xor = a.prototype.xor;
  var T = 1073758208;

  function L(t) {
    var r = t.value,
      e = "number" == typeof r ? 1073741824 | r : "bigint" == typeof r ? r | BigInt(1073741824) : r[0] + 1e7 * r[1] | T;
    return e & -e
  }

  function z(t, r) {
    return t = $(t), r = $(r), t.greater(r) ? t : r
  }

  function R(t, r) {
    return t = $(t), r = $(r), t.lesser(r) ? t : r
  }

  function F(t, r) {
    if (t = $(t).abs(), r = $(r).abs(), t.equals(r)) return t;
    if (t.isZero()) return r;
    if (r.isZero()) return t;
    for (var e, n, o = i[1]; t.isEven() && r.isEven();) e = R(L(t), L(r)), t = t.divide(e), r = r.divide(e), o = o.multiply(e);
    for (; t.isEven();) t = t.divide(L(t));
    do {
      for (; r.isEven();) r = r.divide(L(r));
      t.greater(r) && (n = r, r = t, t = n), r = r.subtract(t)
    } while (!r.isZero());
    return o.isUnit() ? t : t.multiply(o)
  }
  a.prototype.bitLength = function() {
    var t = this;
    return (0 > t.compareTo(n(0)) && (t = t.negate().subtract(n(1))), 0 === t.compareTo(n(0))) ? n(0) : n(function t(r, e) {
      if (0 >= e.compareTo(r)) {
        var o = t(r, e.square(e)),
          i = o.p,
          a = o.e,
          u = i.multiply(e);
        return 0 >= u.compareTo(r) ? {
          p: u,
          e: 2 * a + 1
        } : {
          p: i,
          e: 2 * a
        }
      }
      return {
        p: n(1),
        e: 0
      }
    }(t, n(2)).e).add(n(1))
  }, f.prototype.bitLength = u.prototype.bitLength = a.prototype.bitLength;
  var C = function(t, r, n, o) {
    n = n || e, t = String(t), !o && (t = t.toLowerCase(), n = n.toLowerCase());
    var i, a = t.length,
      u = Math.abs(r),
      f = {};
    for (i = 0; i < n.length; i++) f[n[i]] = i;
    for (i = 0; i < a; i++) {
      var c = t[i];
      if ("-" !== c && c in f && f[c] >= u) {
        if ("1" === c && 1 === u) continue;
        throw Error(c + " is not a valid digit in base " + r + ".")
      }
    }
    r = $(r);
    var s = [],
      p = "-" === t[0];
    for (i = p ? 1 : 0; i < t.length; i++) {
      var c = t[i];
      if (c in f) s.push($(f[c]));
      else if ("<" === c) {
        var l = i;
        do i++; while (">" !== t[i] && i < t.length);
        s.push($(t.slice(l + 1, i)))
      } else throw Error(c + " is not a valid character")
    }
    return D(s, r, p)
  };

  function D(t, r, e) {
    var n, o = i[0],
      a = i[1];
    for (n = t.length - 1; n >= 0; n--) o = o.add(t[n].times(a)), a = a.times(r);
    return e ? o.negate() : o
  }

  function U(t, r) {
    if ((r = n(r)).isZero()) {
      if (t.isZero()) return {
        value: [0],
        isNegative: !1
      };
      throw Error("Cannot convert nonzero numbers to base 0.")
    }
    if (r.equals(-1)) {
      if (t.isZero()) return {
        value: [0],
        isNegative: !1
      };
      if (t.isNegative()) return {
        value: [].concat.apply([], Array.apply(null, Array(-t.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
        isNegative: !1
      };
      var e = Array.apply(null, Array(t.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
      return e.unshift([1]), {
        value: [].concat.apply([], e),
        isNegative: !1
      }
    }
    var o = !1;
    if (t.isNegative() && r.isPositive() && (o = !0, t = t.abs()), r.isUnit()) return t.isZero() ? {
      value: [0],
      isNegative: !1
    } : {
      value: Array.apply(null, Array(t.toJSNumber())).map(Number.prototype.valueOf, 1),
      isNegative: o
    };
    for (var i = [], a, u = t; u.isNegative() || u.compareAbs(r) >= 0;) {
      u = (a = u.divmod(r)).quotient;
      var f = a.remainder;
      f.isNegative() && (f = r.minus(f).abs(), u = u.next()), i.push(f.toJSNumber())
    }
    return i.push(u.toJSNumber()), {
      value: i.reverse(),
      isNegative: o
    }
  }

  function Z(t, r, n) {
    var o = U(t, r);
    return (o.isNegative ? "-" : "") + o.value.map(function(t) {
      var r, o;
      return (r = t) < (o = (o = n) || e).length ? o[r] : "<" + r + ">"
    }).join("")
  }

  function G(t) {
    if (c(+t)) {
      var r = +t;
      if (r === v(r)) return o ? new f(BigInt(r)) : new u(r);
      throw Error("Invalid integer: " + t)
    }
    var e = "-" === t[0];
    e && (t = t.slice(1));
    var n = t.split(/e/i);
    if (n.length > 2) throw Error("Invalid integer: " + n.join("e"));
    if (2 === n.length) {
      var i = n[1];
      if ("+" === i[0] && (i = i.slice(1)), (i = +i) !== v(i) || !c(i)) throw Error("Invalid integer: " + i + " is not a valid exponent.");
      var s = n[0],
        p = s.indexOf(".");
      if (p >= 0 && (i -= s.length - p - 1, s = s.slice(0, p) + s.slice(p + 1)), i < 0) throw Error("Cannot include negative exponent part for integers");
      s += Array(i + 1).join("0"), t = s
    }
    if (!/^([0-9][0-9]*)$/.test(t)) throw Error("Invalid integer: " + t);
    if (o) return new f(BigInt(e ? "-" + t : t));
    for (var h = [], d = t.length, b = d - 7; d > 0;) h.push(+t.slice(b, d)), (b -= 7) < 0 && (b = 0), d -= 7;
    return l(h), new a(h, e)
  }
  a.prototype.toArray = function(t) {
    return U(this, t)
  }, u.prototype.toArray = function(t) {
    return U(this, t)
  }, f.prototype.toArray = function(t) {
    return U(this, t)
  }, a.prototype.toString = function(r, e) {
    if (t === r && (r = 10), 10 !== r) return Z(this, r, e);
    for (var n, o = this.value, i = o.length, a = String(o[--i]); --i >= 0;) n = String(o[i]), a += "0000000".slice(n.length) + n;
    return (this.sign ? "-" : "") + a
  }, u.prototype.toString = function(r, e) {
    return (t === r && (r = 10), 10 != r) ? Z(this, r, e) : String(this.value)
  }, f.prototype.toString = u.prototype.toString, f.prototype.toJSON = a.prototype.toJSON = u.prototype.toJSON = function() {
    return this.toString()
  }, a.prototype.valueOf = function() {
    return parseInt(this.toString(), 10)
  }, a.prototype.toJSNumber = a.prototype.valueOf, u.prototype.valueOf = function() {
    return this.value
  }, u.prototype.toJSNumber = u.prototype.valueOf, f.prototype.valueOf = f.prototype.toJSNumber = function() {
    return parseInt(this.toString(), 10)
  };

  function $(t) {
    return "number" == typeof t ? function(t) {
      if (o) return new f(BigInt(t));
      if (c(t)) {
        if (t !== v(t)) throw Error(t + " is not an integer.");
        return new u(t)
      }
      return G(t.toString())
    }(t) : "string" == typeof t ? G(t) : "bigint" == typeof t ? new f(t) : t
  }
  for (var J = 0; J < 1e3; J++) i[J] = $(J), J > 0 && (i[-J] = $(-J));
  return i.one = i[1], i.zero = i[0], i.minusOne = i[-1], i.max = z, i.min = R, i.gcd = F, i.lcm = function(t, r) {
    return t = $(t).abs(), r = $(r).abs(), t.divide(F(t, r)).multiply(r)
  }, i.isInstance = function(t) {
    return t instanceof a || t instanceof u || t instanceof f
  }, i.randBetween = function(t, r, e) {
    t = $(t), r = $(r);
    var n = e || Math.random,
      o = R(t, r),
      a = z(t, r).subtract(o).add(1);
    if (a.isSmall) return o.add(Math.floor(n() * a));
    for (var u = U(a, 1e7).value, f = [], c = !0, s = 0; s < u.length; s++) {
      var p = c ? u[s] : 1e7,
        l = v(n() * p);
      f.push(l), l < p && (c = !1)
    }
    return o.add(i.fromArray(f, 1e7, !1))
  }, i.fromArray = function(t, r, e) {
    return D(t.map($), $(r || 10), e)
  }, i
}();
t.hasOwnProperty("exports") && (t.exports = n), "function" == typeof define && define.amd && define(function() {
  return n
})