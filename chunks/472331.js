e = n.nmd(e), n("70102"), n("424973"), n("274635"), n("843762"), n("781738"), n("854508"), ! function(t) {
  "use strict";
  var n, r = {
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    },
    i = !0,
    o = "[DecimalError] ",
    s = o + "Invalid argument: ",
    a = o + "Exponent out of range: ",
    c = Math.floor,
    u = Math.pow,
    d = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    l = c(1286742750677284.5),
    f = {};

  function p(e, t) {
    var n, r, o, s, a, c, u, d, l = e.constructor,
      f = l.precision;
    if (!e.s || !t.s) return !t.s && (t = new l(e)), i ? k(t, f) : t;
    if (u = e.d, d = t.d, a = e.e, o = t.e, u = u.slice(), s = a - o) {
      for (s < 0 ? (r = u, s = -s, c = d.length) : (r = d, o = a, c = u.length), s > (c = (a = Math.ceil(f / 7)) > c ? a + 1 : c + 1) && (s = c, r.length = 1), r.reverse(); s--;) r.push(0);
      r.reverse()
    }
    for (c = u.length, c - (s = d.length) < 0 && (s = c, r = d, d = u, u = r), n = 0; s;) n = (u[--s] = u[s] + d[s] + n) / 1e7 | 0, u[s] %= 1e7;
    for (n && (u.unshift(n), ++o), c = u.length; 0 == u[--c];) u.pop();
    return t.d = u, t.e = o, i ? k(t, f) : t
  }

  function h(e, t, n) {
    if (e !== ~~e || e < t || e > n) throw Error(s + e)
  }

  function g(e) {
    var t, n, r, i = e.length - 1,
      o = "",
      s = e[0];
    if (i > 0) {
      for (o += s, t = 1; t < i; t++)(n = 7 - (r = e[t] + "").length) && (o += x(n)), o += r;
      (n = 7 - (r = (s = e[t]) + "").length) && (o += x(n))
    } else if (0 === s) return "0";
    for (; s % 10 == 0;) s /= 10;
    return o + s
  }
  f.absoluteValue = f.abs = function() {
    var e = new this.constructor(this);
    return e.s && (e.s = 1), e
  }, f.comparedTo = f.cmp = function(e) {
    var t, n, r, i;
    if (e = new this.constructor(e), this.s !== e.s) return this.s || -e.s;
    if (this.e !== e.e) return this.e > e.e ^ this.s < 0 ? 1 : -1;
    for (t = 0, r = this.d.length, n = r < (i = e.d.length) ? r : i; t < n; ++t)
      if (this.d[t] !== e.d[t]) return this.d[t] > e.d[t] ^ this.s < 0 ? 1 : -1;
    return r === i ? 0 : r > i ^ this.s < 0 ? 1 : -1
  }, f.decimalPlaces = f.dp = function() {
    var e = this.d.length - 1,
      t = (e - this.e) * 7;
    if (e = this.d[e])
      for (; e % 10 == 0; e /= 10) t--;
    return t < 0 ? 0 : t
  }, f.dividedBy = f.div = function(e) {
    return b(this, new this.constructor(e))
  }, f.dividedToIntegerBy = f.idiv = function(e) {
    var t = this.constructor;
    return k(b(this, new t(e), 0, 1), t.precision)
  }, f.equals = f.eq = function(e) {
    return !this.cmp(e)
  }, f.exponent = function() {
    return m(this)
  }, f.greaterThan = f.gt = function(e) {
    return this.cmp(e) > 0
  }, f.greaterThanOrEqualTo = f.gte = function(e) {
    return this.cmp(e) >= 0
  }, f.isInteger = f.isint = function() {
    return this.e > this.d.length - 2
  }, f.isNegative = f.isneg = function() {
    return this.s < 0
  }, f.isPositive = f.ispos = function() {
    return this.s > 0
  }, f.isZero = function() {
    return 0 === this.s
  }, f.lessThan = f.lt = function(e) {
    return 0 > this.cmp(e)
  }, f.lessThanOrEqualTo = f.lte = function(e) {
    return 1 > this.cmp(e)
  }, f.logarithm = f.log = function(e) {
    var t, r = this.constructor,
      s = r.precision,
      a = s + 5;
    if (void 0 === e) e = new r(10);
    else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(o + "NaN");
    if (this.s < 1) throw Error(o + (this.s ? "NaN" : "-Infinity"));
    return this.eq(n) ? new r(0) : (i = !1, t = b(w(this, a), w(e, a), a), i = !0, k(t, s))
  }, f.minus = f.sub = function(e) {
    return e = new this.constructor(e), this.s == e.s ? _(this, e) : p(this, (e.s = -e.s, e))
  }, f.modulo = f.mod = function(e) {
    var t, n = this.constructor,
      r = n.precision;
    if (!(e = new n(e)).s) throw Error(o + "NaN");
    return this.s ? (i = !1, t = b(this, e, 0, 1).times(e), i = !0, this.minus(t)) : k(new n(this), r)
  }, f.naturalExponential = f.exp = function() {
    return v(this)
  }, f.naturalLogarithm = f.ln = function() {
    return w(this)
  }, f.negated = f.neg = function() {
    var e = new this.constructor(this);
    return e.s = -e.s || 0, e
  }, f.plus = f.add = function(e) {
    return e = new this.constructor(e), this.s == e.s ? p(this, e) : _(this, (e.s = -e.s, e))
  }, f.precision = f.sd = function(e) {
    var t, n, r;
    if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e) throw Error(s + e);
    if (t = m(this) + 1, n = 7 * (r = this.d.length - 1) + 1, r = this.d[r]) {
      for (; r % 10 == 0; r /= 10) n--;
      for (r = this.d[0]; r >= 10; r /= 10) n++
    }
    return e && t > n ? t : n
  }, f.squareRoot = f.sqrt = function() {
    var e, t, n, r, s, a, u, d = this.constructor;
    if (this.s < 1) {
      if (!this.s) return new d(0);
      throw Error(o + "NaN")
    }
    for (e = m(this), i = !1, 0 == (s = Math.sqrt(+this)) || s == 1 / 0 ? (((t = g(this.d)).length + e) % 2 == 0 && (t += "0"), s = Math.sqrt(t), e = c((e + 1) / 2) - (e < 0 || e % 2), r = new d(t = s == 1 / 0 ? "1e" + e : (t = s.toExponential()).slice(0, t.indexOf("e") + 1) + e)) : r = new d(s.toString()), s = u = (n = d.precision) + 3;;)
      if (r = (a = r).plus(b(this, a, u + 2)).times(.5), g(a.d).slice(0, u) === (t = g(r.d)).slice(0, u)) {
        if (t = t.slice(u - 3, u + 1), s == u && "4999" == t) {
          if (k(a, n + 1, 0), a.times(a).eq(this)) {
            r = a;
            break
          }
        } else if ("9999" != t) break;
        u += 4
      } return i = !0, k(r, n)
  }, f.times = f.mul = function(e) {
    var t, n, r, o, s, a, c, u, d, l = this.constructor,
      f = this.d,
      p = (e = new l(e)).d;
    if (!this.s || !e.s) return new l(0);
    for (e.s *= this.s, n = this.e + e.e, u = f.length, u < (d = p.length) && (s = f, f = p, p = s, a = u, u = d, d = a), s = [], r = a = u + d; r--;) s.push(0);
    for (r = d; --r >= 0;) {
      for (t = 0, o = u + r; o > r;) c = s[o] + p[r] * f[o - r - 1] + t, s[o--] = c % 1e7 | 0, t = c / 1e7 | 0;
      s[o] = (s[o] + t) % 1e7 | 0
    }
    for (; !s[--a];) s.pop();
    return t ? ++n : s.shift(), e.d = s, e.e = n, i ? k(e, l.precision) : e
  }, f.toDecimalPlaces = f.todp = function(e, t) {
    var n = this,
      r = n.constructor;
    return (n = new r(n), void 0 === e) ? n : (h(e, 0, 1e9), void 0 === t ? t = r.rounding : h(t, 0, 8), k(n, e + m(n) + 1, t))
  }, f.toExponential = function(e, t) {
    var n, r = this,
      i = r.constructor;
    return void 0 === e ? n = E(r, !0) : (h(e, 0, 1e9), void 0 === t ? t = i.rounding : h(t, 0, 8), n = E(r = k(new i(r), e + 1, t), !0, e + 1)), n
  }, f.toFixed = function(e, t) {
    var n, r, i = this.constructor;
    return void 0 === e ? E(this) : (h(e, 0, 1e9), void 0 === t ? t = i.rounding : h(t, 0, 8), n = E((r = k(new i(this), e + m(this) + 1, t)).abs(), !1, e + m(r) + 1), this.isneg() && !this.isZero() ? "-" + n : n)
  }, f.toInteger = f.toint = function() {
    var e = this.constructor;
    return k(new e(this), m(this) + 1, e.rounding)
  }, f.toNumber = function() {
    return +this
  }, f.toPower = f.pow = function(e) {
    var t, r, s, a, u, d, l = this,
      f = l.constructor,
      p = +(e = new f(e));
    if (!e.s) return new f(n);
    if (!(l = new f(l)).s) {
      if (e.s < 1) throw Error(o + "Infinity");
      return l
    }
    if (l.eq(n)) return l;
    if (s = f.precision, e.eq(n)) return k(l, s);
    if (t = e.e, d = t >= (r = e.d.length - 1), u = l.s, d) {
      if ((r = p < 0 ? -p : p) <= 9007199254740991) {
        for (a = new f(n), t = Math.ceil(s / 7 + 4), i = !1; r % 2 && M((a = a.times(l)).d, t), 0 !== (r = c(r / 2));) {
          ;
          M((l = l.times(l)).d, t)
        }
        return i = !0, e.s < 0 ? new f(n).div(a) : k(a, s)
      }
    } else if (u < 0) throw Error(o + "NaN");
    return u = u < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1, l.s = 1, i = !1, a = e.times(w(l, s + 12)), i = !0, (a = v(a)).s = u, a
  }, f.toPrecision = function(e, t) {
    var n, r, i = this,
      o = i.constructor;
    return void 0 === e ? (n = m(i), r = E(i, n <= o.toExpNeg || n >= o.toExpPos)) : (h(e, 1, 1e9), void 0 === t ? t = o.rounding : h(t, 0, 8), n = m(i = k(new o(i), e, t)), r = E(i, e <= n || n <= o.toExpNeg, e)), r
  }, f.toSignificantDigits = f.tosd = function(e, t) {
    var n = this.constructor;
    return void 0 === e ? (e = n.precision, t = n.rounding) : (h(e, 1, 1e9), void 0 === t ? t = n.rounding : h(t, 0, 8)), k(new n(this), e, t)
  }, f.toString = f.valueOf = f.val = f.toJSON = function() {
    var e = m(this),
      t = this.constructor;
    return E(this, e <= t.toExpNeg || e >= t.toExpPos)
  };
  var b = function() {
    function e(e, t) {
      var n, r = 0,
        i = e.length;
      for (e = e.slice(); i--;) n = e[i] * t + r, e[i] = n % 1e7 | 0, r = n / 1e7 | 0;
      return r && e.unshift(r), e
    }

    function t(e, t, n, r) {
      var i, o;
      if (n != r) o = n > r ? 1 : -1;
      else
        for (i = o = 0; i < n; i++)
          if (e[i] != t[i]) {
            o = e[i] > t[i] ? 1 : -1;
            break
          } return o
    }

    function n(e, t, n) {
      for (var r = 0; n--;) e[n] -= r, r = e[n] < t[n] ? 1 : 0, e[n] = 1e7 * r + e[n] - t[n];
      for (; !e[0] && e.length > 1;) e.shift()
    }
    return function(r, i, s, a) {
      var c, u, d, l, f, p, h, g, b, v, y, x, w, S, _, E, M, D, C = r.constructor,
        P = r.s == i.s ? 1 : -1,
        T = r.d,
        A = i.d;
      if (!r.s) return new C(r);
      if (!i.s) throw Error(o + "Division by zero");
      for (d = 0, u = r.e - i.e, M = A.length, _ = T.length, g = (h = new C(P)).d = []; A[d] == (T[d] || 0);) ++d;
      if (A[d] > (T[d] || 0) && --u, (x = null == s ? s = C.precision : a ? s + (m(r) - m(i)) + 1 : s) < 0) return new C(0);
      if (x = x / 7 + 2 | 0, d = 0, 1 == M)
        for (l = 0, A = A[0], x++;
          (d < _ || l) && x--; d++) w = 1e7 * l + (T[d] || 0), g[d] = w / A | 0, l = w % A | 0;
      else {
        for ((l = 1e7 / (A[0] + 1) | 0) > 1 && (A = e(A, l), T = e(T, l), M = A.length, _ = T.length), S = M, v = (b = T.slice(0, M)).length; v < M;) b[v++] = 0;
        (D = A.slice()).unshift(0), E = A[0], A[1] >= 1e7 / 2 && ++E;
        do l = 0, (c = t(A, b, M, v)) < 0 ? (y = b[0], M != v && (y = 1e7 * y + (b[1] || 0)), (l = y / E | 0) > 1 ? (l >= 1e7 && (l = 1e7 - 1), p = (f = e(A, l)).length, v = b.length, 1 == (c = t(f, b, p, v)) && (l--, n(f, M < p ? D : A, p))) : (0 == l && (c = l = 1), f = A.slice()), (p = f.length) < v && f.unshift(0), n(b, f, v), -1 == c && (v = b.length, (c = t(A, b, M, v)) < 1 && (l++, n(b, M < v ? D : A, v))), v = b.length) : 0 === c && (l++, b = [0]), g[d++] = l, c && b[0] ? b[v++] = T[S] || 0 : (b = [T[S]], v = 1); while ((S++ < _ || void 0 !== b[0]) && x--)
      }
      return !g[0] && g.shift(), h.e = u, k(h, a ? s + m(h) + 1 : s)
    }
  }();

  function v(e, t) {
    var r, o, s, c, d, l = 0,
      f = 0,
      p = e.constructor,
      h = p.precision;
    if (m(e) > 16) throw Error(a + m(e));
    if (!e.s) return new p(n);
    for (null == t ? (i = !1, d = h) : d = t, c = new p(.03125); e.abs().gte(.1);) e = e.times(c), f += 5;
    for (d += Math.log(u(2, f)) / Math.LN10 * 2 + 5 | 0, r = o = s = new p(n), p.precision = d;;) {
      if (o = k(o.times(e), d), r = r.times(++l), g((c = s.plus(b(o, r, d))).d).slice(0, d) === g(s.d).slice(0, d)) {
        for (; f--;) s = k(s.times(s), d);
        return p.precision = h, null == t ? (i = !0, k(s, h)) : s
      }
      s = c
    }
  }

  function m(e) {
    for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10) t++;
    return t
  }

  function y(e, t, n) {
    if (t > e.LN10.sd()) throw i = !0, n && (e.precision = n), Error(o + "LN10 precision limit exceeded");
    return k(new e(e.LN10), t)
  }

  function x(e) {
    for (var t = ""; e--;) t += "0";
    return t
  }

  function w(e, t) {
    var r, s, a, c, u, d, l, f, p, h = 1,
      v = e,
      x = v.d,
      S = v.constructor,
      _ = S.precision;
    if (v.s < 1) throw Error(o + (v.s ? "NaN" : "-Infinity"));
    if (v.eq(n)) return new S(0);
    if (null == t ? (i = !1, f = _) : f = t, v.eq(10)) return null == t && (i = !0), y(S, f);
    if (f += 10, S.precision = f, s = (r = g(x)).charAt(0), !(15e14 > Math.abs(c = m(v)))) return l = y(S, f + 2, _).times(c + ""), v = w(new S(s + "." + r.slice(1)), f - 10).plus(l), S.precision = _, null == t ? (i = !0, k(v, _)) : v;
    for (; s < 7 && 1 != s || 1 == s && r.charAt(1) > 3;) s = (r = g((v = v.times(e)).d)).charAt(0), h++;
    c = m(v), s > 1 ? (v = new S("0." + r), c++) : v = new S(s + "." + r.slice(1));
    for (d = u = v = b(v.minus(n), v.plus(n), f), p = k(v.times(v), f), a = 3;;) {
      if (u = k(u.times(p), f), g((l = d.plus(b(u, new S(a), f))).d).slice(0, f) === g(d.d).slice(0, f)) return d = d.times(2), 0 !== c && (d = d.plus(y(S, f + 2, _).times(c + ""))), d = b(d, new S(h), f), S.precision = _, null == t ? (i = !0, k(d, _)) : d;
      d = l, a += 2
    }
  }

  function S(e, t) {
    var n, r, o;
    for ((n = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r);) ++r;
    for (o = t.length; 48 === t.charCodeAt(o - 1);) --o;
    if (t = t.slice(r, o)) {
      if (o -= r, n = n - r - 1, e.e = c(n / 7), e.d = [], r = (n + 1) % 7, n < 0 && (r += 7), r < o) {
        for (r && e.d.push(+t.slice(0, r)), o -= 7; r < o;) e.d.push(+t.slice(r, r += 7));
        r = 7 - (t = t.slice(r)).length
      } else r -= o;
      for (; r--;) t += "0";
      if (e.d.push(+t), i && (e.e > l || e.e < -l)) throw Error(a + n)
    } else e.s = 0, e.e = 0, e.d = [0];
    return e
  }

  function k(e, t, n) {
    var r, o, s, d, f, p, h, g, b = e.d;
    for (d = 1, s = b[0]; s >= 10; s /= 10) d++;
    if ((r = t - d) < 0) r += 7, o = t, h = b[g = 0];
    else {
      if ((g = Math.ceil((r + 1) / 7)) >= (s = b.length)) return e;
      for (d = 1, h = s = b[g]; s >= 10; s /= 10) d++;
      r %= 7, o = r - 7 + d
    }
    if (void 0 !== n && (f = h / (s = u(10, d - o - 1)) % 10 | 0, p = t < 0 || void 0 !== b[g + 1] || h % s, p = n < 4 ? (f || p) && (0 == n || n == (e.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == n || p || 6 == n && (r > 0 ? o > 0 ? h / u(10, d - o) : 0 : b[g - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !b[0]) return p ? (s = m(e), b.length = 1, t = t - s - 1, b[0] = u(10, (7 - t % 7) % 7), e.e = c(-t / 7) || 0) : (b.length = 1, b[0] = e.e = e.s = 0), e;
    if (0 == r ? (b.length = g, s = 1, g--) : (b.length = g + 1, s = u(10, 7 - r), b[g] = o > 0 ? (h / u(10, d - o) % u(10, o) | 0) * s : 0), p)
      for (;;)
        if (0 == g) {
          1e7 == (b[0] += s) && (b[0] = 1, ++e.e);
          break
        } else {
          if (b[g] += s, 1e7 != b[g]) break;
          b[g--] = 0, s = 1
        } for (r = b.length; 0 === b[--r];) b.pop();
    if (i && (e.e > l || e.e < -l)) throw Error(a + m(e));
    return e
  }

  function _(e, t) {
    var n, r, o, s, a, c, u, d, l, f, p = e.constructor,
      h = p.precision;
    if (!e.s || !t.s) return t.s ? t.s = -t.s : t = new p(e), i ? k(t, h) : t;
    if (u = e.d, f = t.d, r = t.e, d = e.e, u = u.slice(), a = d - r) {
      for ((l = a < 0) ? (n = u, a = -a, c = f.length) : (n = f, r = d, c = u.length), a > (o = Math.max(Math.ceil(h / 7), c) + 2) && (a = o, n.length = 1), n.reverse(), o = a; o--;) n.push(0);
      n.reverse()
    } else {
      for (o = u.length, (l = o < (c = f.length)) && (c = o), o = 0; o < c; o++)
        if (u[o] != f[o]) {
          l = u[o] < f[o];
          break
        } a = 0
    }
    for (l && (n = u, u = f, f = n, t.s = -t.s), c = u.length, o = f.length - c; o > 0; --o) u[c++] = 0;
    for (o = f.length; o > a;) {
      if (u[--o] < f[o]) {
        for (s = o; s && 0 === u[--s];) u[s] = 1e7 - 1;
        --u[s], u[o] += 1e7
      }
      u[o] -= f[o]
    }
    for (; 0 === u[--c];) u.pop();
    for (; 0 === u[0]; u.shift()) --r;
    return u[0] ? (t.d = u, t.e = r, i ? k(t, h) : t) : new p(0)
  }

  function E(e, t, n) {
    var r, i = m(e),
      o = g(e.d),
      s = o.length;
    return t ? (n && (r = n - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + x(r) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + x(-i - 1) + o, n && (r = n - s) > 0 && (o += x(r))) : i >= s ? (o += x(i + 1 - s), n && (r = n - i - 1) > 0 && (o = o + "." + x(r))) : ((r = i + 1) < s && (o = o.slice(0, r) + "." + o.slice(r)), n && (r = n - s) > 0 && (i + 1 === s && (o += "."), o += x(r))), e.s < 0 ? "-" + o : o
  }

  function M(e, t) {
    if (e.length > t) return e.length = t, !0
  }

  function D(e) {
    if (!e || "object" != typeof e) throw Error(o + "Object expected");
    var t, n, r, i = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -Infinity, 0, "toExpPos", 0, 1 / 0];
    for (t = 0; t < i.length; t += 3)
      if (void 0 !== (r = e[n = i[t]])) {
        if (c(r) === r && r >= i[t + 1] && r <= i[t + 2]) this[n] = r;
        else throw Error(s + n + ": " + r)
      } if (void 0 !== (r = e[n = "LN10"])) {
      if (r == Math.LN10) this[n] = new this(r);
      else throw Error(s + n + ": " + r)
    }
    return this
  }(r = function e(t) {
    var n, r, i;

    function o(e) {
      if (!(this instanceof o)) return new o(e);
      if (this.constructor = o, e instanceof o) {
        this.s = e.s, this.e = e.e, this.d = (e = e.d) ? e.slice() : e;
        return
      }
      if ("number" == typeof e) {
        if (0 * e != 0) throw Error(s + e);
        if (e > 0) this.s = 1;
        else if (e < 0) e = -e, this.s = -1;
        else {
          this.s = 0, this.e = 0, this.d = [0];
          return
        }
        if (e === ~~e && e < 1e7) {
          this.e = 0, this.d = [e];
          return
        }
        return S(this, e.toString())
      }
      if ("string" != typeof e) throw Error(s + e);
      if (45 === e.charCodeAt(0) ? (e = e.slice(1), this.s = -1) : this.s = 1, d.test(e)) S(this, e);
      else throw Error(s + e)
    }
    if (o.prototype = f, o.ROUND_UP = 0, o.ROUND_DOWN = 1, o.ROUND_CEIL = 2, o.ROUND_FLOOR = 3, o.ROUND_HALF_UP = 4, o.ROUND_HALF_DOWN = 5, o.ROUND_HALF_EVEN = 6, o.ROUND_HALF_CEIL = 7, o.ROUND_HALF_FLOOR = 8, o.clone = e, o.config = o.set = D, void 0 === t && (t = {}), t)
      for (n = 0, i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"]; n < i.length;) !t.hasOwnProperty(r = i[n++]) && (t[r] = this[r]);
    return o.config(t), o
  }(r)).default = r.Decimal = r, n = new r(1), "function" == typeof define && define.amd ? define(function() {
    return r
  }) : void 0 !== e && e.exports ? e.exports = r : (!t && (t = "undefined" != typeof self && self && self.self == self ? self : Function("return this")()), t.Decimal = r)
}(this)