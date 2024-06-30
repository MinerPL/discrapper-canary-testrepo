!function (t) {
    var n, r = {
            precision: 20,
            rounding: 4,
            toExpNeg: -7,
            toExpPos: 21,
            LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
        }, i = !0, a = '[DecimalError] ', o = a + 'Invalid argument: ', s = a + 'Exponent out of range: ', l = Math.floor, u = Math.pow, c = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, d = l(1286742750677284.5), _ = {};
    function E(e, t) {
        var n, r, a, o, s, l, u, c, d = e.constructor, _ = d.precision;
        if (!e.s || !t.s)
            return !t.s && (t = new d(e)), i ? N(t, _) : t;
        if (u = e.d, c = t.d, s = e.e, a = t.e, u = u.slice(), o = s - a) {
            for (o < 0 ? (r = u, o = -o, l = c.length) : (r = c, a = s, l = u.length), o > (l = (s = Math.ceil(_ / 7)) > l ? s + 1 : l + 1) && (o = l, r.length = 1), r.reverse(); o--;)
                r.push(0);
            r.reverse();
        }
        for (l = u.length, l - (o = c.length) < 0 && (o = l, r = c, c = u, u = r), n = 0; o;)
            n = (u[--o] = u[o] + c[o] + n) / 10000000 | 0, u[o] %= 10000000;
        for (n && (u.unshift(n), ++a), l = u.length; 0 == u[--l];)
            u.pop();
        return t.d = u, t.e = a, i ? N(t, _) : t;
    }
    function f(e, t, n) {
        if (e !== ~~e || e < t || e > n)
            throw Error(o + e);
    }
    function h(e) {
        var t, n, r, i = e.length - 1, a = '', o = e[0];
        if (i > 0) {
            for (a += o, t = 1; t < i; t++)
                (n = 7 - (r = e[t] + '').length) && (a += g(n)), a += r;
            (n = 7 - (r = (o = e[t]) + '').length) && (a += g(n));
        } else if (0 === o)
            return '0';
        for (; o % 10 == 0;)
            o /= 10;
        return a + o;
    }
    _.absoluteValue = _.abs = function () {
        var e = new this.constructor(this);
        return e.s && (e.s = 1), e;
    }, _.comparedTo = _.cmp = function (e) {
        var t, n, r, i;
        if (e = new this.constructor(e), this.s !== e.s)
            return this.s || -e.s;
        if (this.e !== e.e)
            return this.e > e.e ^ this.s < 0 ? 1 : -1;
        for (t = 0, r = this.d.length, n = r < (i = e.d.length) ? r : i; t < n; ++t)
            if (this.d[t] !== e.d[t])
                return this.d[t] > e.d[t] ^ this.s < 0 ? 1 : -1;
        return r === i ? 0 : r > i ^ this.s < 0 ? 1 : -1;
    }, _.decimalPlaces = _.dp = function () {
        var e = this.d.length - 1, t = (e - this.e) * 7;
        if (e = this.d[e])
            for (; e % 10 == 0; e /= 10)
                t--;
        return t < 0 ? 0 : t;
    }, _.dividedBy = _.div = function (e) {
        return p(this, new this.constructor(e));
    }, _.dividedToIntegerBy = _.idiv = function (e) {
        var t = this.constructor;
        return N(p(this, new t(e), 0, 1), t.precision);
    }, _.equals = _.eq = function (e) {
        return !this.cmp(e);
    }, _.exponent = function () {
        return I(this);
    }, _.greaterThan = _.gt = function (e) {
        return this.cmp(e) > 0;
    }, _.greaterThanOrEqualTo = _.gte = function (e) {
        return this.cmp(e) >= 0;
    }, _.isInteger = _.isint = function () {
        return this.e > this.d.length - 2;
    }, _.isNegative = _.isneg = function () {
        return this.s < 0;
    }, _.isPositive = _.ispos = function () {
        return this.s > 0;
    }, _.isZero = function () {
        return 0 === this.s;
    }, _.lessThan = _.lt = function (e) {
        return 0 > this.cmp(e);
    }, _.lessThanOrEqualTo = _.lte = function (e) {
        return 1 > this.cmp(e);
    }, _.logarithm = _.log = function (e) {
        var t, r = this.constructor, o = r.precision, s = o + 5;
        if (void 0 === e)
            e = new r(10);
        else if ((e = new r(e)).s < 1 || e.eq(n))
            throw Error(a + 'NaN');
        if (this.s < 1)
            throw Error(a + (this.s ? 'NaN' : '-Infinity'));
        return this.eq(n) ? new r(0) : (i = !1, t = p(S(this, s), S(e, s), s), i = !0, N(t, o));
    }, _.minus = _.sub = function (e) {
        return e = new this.constructor(e), this.s == e.s ? v(this, e) : E(this, (e.s = -e.s, e));
    }, _.modulo = _.mod = function (e) {
        var t, n = this.constructor, r = n.precision;
        if (!(e = new n(e)).s)
            throw Error(a + 'NaN');
        return this.s ? (i = !1, t = p(this, e, 0, 1).times(e), i = !0, this.minus(t)) : N(new n(this), r);
    }, _.naturalExponential = _.exp = function () {
        return m(this);
    }, _.naturalLogarithm = _.ln = function () {
        return S(this);
    }, _.negated = _.neg = function () {
        var e = new this.constructor(this);
        return e.s = -e.s || 0, e;
    }, _.plus = _.add = function (e) {
        return e = new this.constructor(e), this.s == e.s ? E(this, e) : v(this, (e.s = -e.s, e));
    }, _.precision = _.sd = function (e) {
        var t, n, r;
        if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
            throw Error(o + e);
        if (t = I(this) + 1, n = 7 * (r = this.d.length - 1) + 1, r = this.d[r]) {
            for (; r % 10 == 0; r /= 10)
                n--;
            for (r = this.d[0]; r >= 10; r /= 10)
                n++;
        }
        return e && t > n ? t : n;
    }, _.squareRoot = _.sqrt = function () {
        var e, t, n, r, o, s, u, c = this.constructor;
        if (this.s < 1) {
            if (!this.s)
                return new c(0);
            throw Error(a + 'NaN');
        }
        for (e = I(this), i = !1, 0 == (o = Math.sqrt(+this)) || o == 1 / 0 ? (((t = h(this.d)).length + e) % 2 == 0 && (t += '0'), o = Math.sqrt(t), e = l((e + 1) / 2) - (e < 0 || e % 2), r = new c(t = o == 1 / 0 ? '1e' + e : (t = o.toExponential()).slice(0, t.indexOf('e') + 1) + e)) : r = new c(o.toString()), o = u = (n = c.precision) + 3;;)
            if (r = (s = r).plus(p(this, s, u + 2)).times(0.5), h(s.d).slice(0, u) === (t = h(r.d)).slice(0, u)) {
                if (t = t.slice(u - 3, u + 1), o == u && '4999' == t) {
                    if (N(s, n + 1, 0), s.times(s).eq(this)) {
                        r = s;
                        break;
                    }
                } else if ('9999' != t)
                    break;
                u += 4;
            }
        return i = !0, N(r, n);
    }, _.times = _.mul = function (e) {
        var t, n, r, a, o, s, l, u, c, d = this.constructor, _ = this.d, E = (e = new d(e)).d;
        if (!this.s || !e.s)
            return new d(0);
        for (e.s *= this.s, n = this.e + e.e, u = _.length, u < (c = E.length) && (o = _, _ = E, E = o, s = u, u = c, c = s), o = [], r = s = u + c; r--;)
            o.push(0);
        for (r = c; --r >= 0;) {
            for (t = 0, a = u + r; a > r;)
                l = o[a] + E[r] * _[a - r - 1] + t, o[a--] = l % 10000000 | 0, t = l / 10000000 | 0;
            o[a] = (o[a] + t) % 10000000 | 0;
        }
        for (; !o[--s];)
            o.pop();
        return t ? ++n : o.shift(), e.d = o, e.e = n, i ? N(e, d.precision) : e;
    }, _.toDecimalPlaces = _.todp = function (e, t) {
        var n = this, r = n.constructor;
        return (n = new r(n), void 0 === e) ? n : (f(e, 0, 1000000000), void 0 === t ? t = r.rounding : f(t, 0, 8), N(n, e + I(n) + 1, t));
    }, _.toExponential = function (e, t) {
        var n, r = this, i = r.constructor;
        return void 0 === e ? n = O(r, !0) : (f(e, 0, 1000000000), void 0 === t ? t = i.rounding : f(t, 0, 8), n = O(r = N(new i(r), e + 1, t), !0, e + 1)), n;
    }, _.toFixed = function (e, t) {
        var n, r, i = this.constructor;
        return void 0 === e ? O(this) : (f(e, 0, 1000000000), void 0 === t ? t = i.rounding : f(t, 0, 8), n = O((r = N(new i(this), e + I(this) + 1, t)).abs(), !1, e + I(r) + 1), this.isneg() && !this.isZero() ? '-' + n : n);
    }, _.toInteger = _.toint = function () {
        var e = this.constructor;
        return N(new e(this), I(this) + 1, e.rounding);
    }, _.toNumber = function () {
        return +this;
    }, _.toPower = _.pow = function (e) {
        var t, r, o, s, u, c, d = this, _ = d.constructor, E = +(e = new _(e));
        if (!e.s)
            return new _(n);
        if (!(d = new _(d)).s) {
            if (e.s < 1)
                throw Error(a + 'Infinity');
            return d;
        }
        if (d.eq(n))
            return d;
        if (o = _.precision, e.eq(n))
            return N(d, o);
        if (t = e.e, c = t >= (r = e.d.length - 1), u = d.s, c) {
            if ((r = E < 0 ? -E : E) <= 9007199254740991) {
                for (s = new _(n), t = Math.ceil(o / 7 + 4), i = !1; r % 2 && R((s = s.times(d)).d, t), 0 !== (r = l(r / 2));) {
                    ;
                    R((d = d.times(d)).d, t);
                }
                return i = !0, e.s < 0 ? new _(n).div(s) : N(s, o);
            }
        } else if (u < 0)
            throw Error(a + 'NaN');
        return u = u < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1, d.s = 1, i = !1, s = e.times(S(d, o + 12)), i = !0, (s = m(s)).s = u, s;
    }, _.toPrecision = function (e, t) {
        var n, r, i = this, a = i.constructor;
        return void 0 === e ? (n = I(i), r = O(i, n <= a.toExpNeg || n >= a.toExpPos)) : (f(e, 1, 1000000000), void 0 === t ? t = a.rounding : f(t, 0, 8), n = I(i = N(new a(i), e, t)), r = O(i, e <= n || n <= a.toExpNeg, e)), r;
    }, _.toSignificantDigits = _.tosd = function (e, t) {
        var n = this.constructor;
        return void 0 === e ? (e = n.precision, t = n.rounding) : (f(e, 1, 1000000000), void 0 === t ? t = n.rounding : f(t, 0, 8)), N(new n(this), e, t);
    }, _.toString = _.valueOf = _.val = _.toJSON = function () {
        var e = I(this), t = this.constructor;
        return O(this, e <= t.toExpNeg || e >= t.toExpPos);
    };
    var p = function () {
        function e(e, t) {
            var n, r = 0, i = e.length;
            for (e = e.slice(); i--;)
                n = e[i] * t + r, e[i] = n % 10000000 | 0, r = n / 10000000 | 0;
            return r && e.unshift(r), e;
        }
        function t(e, t, n, r) {
            var i, a;
            if (n != r)
                a = n > r ? 1 : -1;
            else
                for (i = a = 0; i < n; i++)
                    if (e[i] != t[i]) {
                        a = e[i] > t[i] ? 1 : -1;
                        break;
                    }
            return a;
        }
        function n(e, t, n) {
            for (var r = 0; n--;)
                e[n] -= r, r = e[n] < t[n] ? 1 : 0, e[n] = 10000000 * r + e[n] - t[n];
            for (; !e[0] && e.length > 1;)
                e.shift();
        }
        return function (r, i, o, s) {
            var l, u, c, d, _, E, f, h, p, m, T, g, S, A, v, O, R, C, y = r.constructor, D = r.s == i.s ? 1 : -1, L = r.d, b = i.d;
            if (!r.s)
                return new y(r);
            if (!i.s)
                throw Error(a + 'Division by zero');
            for (c = 0, u = r.e - i.e, R = b.length, v = L.length, h = (f = new y(D)).d = []; b[c] == (L[c] || 0);)
                ++c;
            if (b[c] > (L[c] || 0) && --u, (g = null == o ? o = y.precision : s ? o + (I(r) - I(i)) + 1 : o) < 0)
                return new y(0);
            if (g = g / 7 + 2 | 0, c = 0, 1 == R)
                for (d = 0, b = b[0], g++; (c < v || d) && g--; c++)
                    S = 10000000 * d + (L[c] || 0), h[c] = S / b | 0, d = S % b | 0;
            else {
                for ((d = 10000000 / (b[0] + 1) | 0) > 1 && (b = e(b, d), L = e(L, d), R = b.length, v = L.length), A = R, m = (p = L.slice(0, R)).length; m < R;)
                    p[m++] = 0;
                (C = b.slice()).unshift(0), O = b[0], b[1] >= 10000000 / 2 && ++O;
                do
                    d = 0, (l = t(b, p, R, m)) < 0 ? (T = p[0], R != m && (T = 10000000 * T + (p[1] || 0)), (d = T / O | 0) > 1 ? (d >= 10000000 && (d = 10000000 - 1), E = (_ = e(b, d)).length, m = p.length, 1 == (l = t(_, p, E, m)) && (d--, n(_, R < E ? C : b, E))) : (0 == d && (l = d = 1), _ = b.slice()), (E = _.length) < m && _.unshift(0), n(p, _, m), -1 == l && (m = p.length, (l = t(b, p, R, m)) < 1 && (d++, n(p, R < m ? C : b, m))), m = p.length) : 0 === l && (d++, p = [0]), h[c++] = d, l && p[0] ? p[m++] = L[A] || 0 : (p = [L[A]], m = 1);
                while ((A++ < v || void 0 !== p[0]) && g--);
            }
            return !h[0] && h.shift(), f.e = u, N(f, s ? o + I(f) + 1 : o);
        };
    }();
    function m(e, t) {
        var r, a, o, l, c, d = 0, _ = 0, E = e.constructor, f = E.precision;
        if (I(e) > 16)
            throw Error(s + I(e));
        if (!e.s)
            return new E(n);
        for (null == t ? (i = !1, c = f) : c = t, l = new E(0.03125); e.abs().gte(0.1);)
            e = e.times(l), _ += 5;
        for (c += Math.log(u(2, _)) / Math.LN10 * 2 + 5 | 0, r = a = o = new E(n), E.precision = c;;) {
            if (a = N(a.times(e), c), r = r.times(++d), h((l = o.plus(p(a, r, c))).d).slice(0, c) === h(o.d).slice(0, c)) {
                for (; _--;)
                    o = N(o.times(o), c);
                return E.precision = f, null == t ? (i = !0, N(o, f)) : o;
            }
            o = l;
        }
    }
    function I(e) {
        for (var t = 7 * e.e, n = e.d[0]; n >= 10; n /= 10)
            t++;
        return t;
    }
    function T(e, t, n) {
        if (t > e.LN10.sd())
            throw i = !0, n && (e.precision = n), Error(a + 'LN10 precision limit exceeded');
        return N(new e(e.LN10), t);
    }
    function g(e) {
        for (var t = ''; e--;)
            t += '0';
        return t;
    }
    function S(e, t) {
        var r, o, s, l, u, c, d, _, E, f = 1, m = e, g = m.d, A = m.constructor, v = A.precision;
        if (m.s < 1)
            throw Error(a + (m.s ? 'NaN' : '-Infinity'));
        if (m.eq(n))
            return new A(0);
        if (null == t ? (i = !1, _ = v) : _ = t, m.eq(10))
            return null == t && (i = !0), T(A, _);
        if (_ += 10, A.precision = _, o = (r = h(g)).charAt(0), !(1500000000000000 > Math.abs(l = I(m))))
            return d = T(A, _ + 2, v).times(l + ''), m = S(new A(o + '.' + r.slice(1)), _ - 10).plus(d), A.precision = v, null == t ? (i = !0, N(m, v)) : m;
        for (; o < 7 && 1 != o || 1 == o && r.charAt(1) > 3;)
            o = (r = h((m = m.times(e)).d)).charAt(0), f++;
        l = I(m), o > 1 ? (m = new A('0.' + r), l++) : m = new A(o + '.' + r.slice(1));
        for (c = u = m = p(m.minus(n), m.plus(n), _), E = N(m.times(m), _), s = 3;;) {
            if (u = N(u.times(E), _), h((d = c.plus(p(u, new A(s), _))).d).slice(0, _) === h(c.d).slice(0, _))
                return c = c.times(2), 0 !== l && (c = c.plus(T(A, _ + 2, v).times(l + ''))), c = p(c, new A(f), _), A.precision = v, null == t ? (i = !0, N(c, v)) : c;
            c = d, s += 2;
        }
    }
    function A(e, t) {
        var n, r, a;
        for ((n = t.indexOf('.')) > -1 && (t = t.replace('.', '')), (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length), r = 0; 48 === t.charCodeAt(r);)
            ++r;
        for (a = t.length; 48 === t.charCodeAt(a - 1);)
            --a;
        if (t = t.slice(r, a)) {
            if (a -= r, n = n - r - 1, e.e = l(n / 7), e.d = [], r = (n + 1) % 7, n < 0 && (r += 7), r < a) {
                for (r && e.d.push(+t.slice(0, r)), a -= 7; r < a;)
                    e.d.push(+t.slice(r, r += 7));
                r = 7 - (t = t.slice(r)).length;
            } else
                r -= a;
            for (; r--;)
                t += '0';
            if (e.d.push(+t), i && (e.e > d || e.e < -d))
                throw Error(s + n);
        } else
            e.s = 0, e.e = 0, e.d = [0];
        return e;
    }
    function N(e, t, n) {
        var r, a, o, c, _, E, f, h, p = e.d;
        for (c = 1, o = p[0]; o >= 10; o /= 10)
            c++;
        if ((r = t - c) < 0)
            r += 7, a = t, f = p[h = 0];
        else {
            if ((h = Math.ceil((r + 1) / 7)) >= (o = p.length))
                return e;
            for (c = 1, f = o = p[h]; o >= 10; o /= 10)
                c++;
            r %= 7, a = r - 7 + c;
        }
        if (void 0 !== n && (_ = f / (o = u(10, c - a - 1)) % 10 | 0, E = t < 0 || void 0 !== p[h + 1] || f % o, E = n < 4 ? (_ || E) && (0 == n || n == (e.s < 0 ? 3 : 2)) : _ > 5 || 5 == _ && (4 == n || E || 6 == n && (r > 0 ? a > 0 ? f / u(10, c - a) : 0 : p[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7))), t < 1 || !p[0])
            return E ? (o = I(e), p.length = 1, t = t - o - 1, p[0] = u(10, (7 - t % 7) % 7), e.e = l(-t / 7) || 0) : (p.length = 1, p[0] = e.e = e.s = 0), e;
        if (0 == r ? (p.length = h, o = 1, h--) : (p.length = h + 1, o = u(10, 7 - r), p[h] = a > 0 ? (f / u(10, c - a) % u(10, a) | 0) * o : 0), E)
            for (;;) {
                if (0 == h) {
                    10000000 == (p[0] += o) && (p[0] = 1, ++e.e);
                    break;
                }
                if (p[h] += o, 10000000 != p[h])
                    break;
                p[h--] = 0, o = 1;
            }
        for (r = p.length; 0 === p[--r];)
            p.pop();
        if (i && (e.e > d || e.e < -d))
            throw Error(s + I(e));
        return e;
    }
    function v(e, t) {
        var n, r, a, o, s, l, u, c, d, _, E = e.constructor, f = E.precision;
        if (!e.s || !t.s)
            return t.s ? t.s = -t.s : t = new E(e), i ? N(t, f) : t;
        if (u = e.d, _ = t.d, r = t.e, c = e.e, u = u.slice(), s = c - r) {
            for ((d = s < 0) ? (n = u, s = -s, l = _.length) : (n = _, r = c, l = u.length), s > (a = Math.max(Math.ceil(f / 7), l) + 2) && (s = a, n.length = 1), n.reverse(), a = s; a--;)
                n.push(0);
            n.reverse();
        } else {
            for (a = u.length, (d = a < (l = _.length)) && (l = a), a = 0; a < l; a++)
                if (u[a] != _[a]) {
                    d = u[a] < _[a];
                    break;
                }
            s = 0;
        }
        for (d && (n = u, u = _, _ = n, t.s = -t.s), l = u.length, a = _.length - l; a > 0; --a)
            u[l++] = 0;
        for (a = _.length; a > s;) {
            if (u[--a] < _[a]) {
                for (o = a; o && 0 === u[--o];)
                    u[o] = 10000000 - 1;
                --u[o], u[a] += 10000000;
            }
            u[a] -= _[a];
        }
        for (; 0 === u[--l];)
            u.pop();
        for (; 0 === u[0]; u.shift())
            --r;
        return u[0] ? (t.d = u, t.e = r, i ? N(t, f) : t) : new E(0);
    }
    function O(e, t, n) {
        var r, i = I(e), a = h(e.d), o = a.length;
        return t ? (n && (r = n - o) > 0 ? a = a.charAt(0) + '.' + a.slice(1) + g(r) : o > 1 && (a = a.charAt(0) + '.' + a.slice(1)), a = a + (i < 0 ? 'e' : 'e+') + i) : i < 0 ? (a = '0.' + g(-i - 1) + a, n && (r = n - o) > 0 && (a += g(r))) : i >= o ? (a += g(i + 1 - o), n && (r = n - i - 1) > 0 && (a = a + '.' + g(r))) : ((r = i + 1) < o && (a = a.slice(0, r) + '.' + a.slice(r)), n && (r = n - o) > 0 && (i + 1 === o && (a += '.'), a += g(r))), e.s < 0 ? '-' + a : a;
    }
    function R(e, t) {
        if (e.length > t)
            return e.length = t, !0;
    }
    function C(e) {
        if (!e || 'object' != typeof e)
            throw Error(a + 'Object expected');
        var t, n, r, i = [
                'precision',
                1,
                1000000000,
                'rounding',
                0,
                8,
                'toExpNeg',
                -Infinity,
                0,
                'toExpPos',
                0,
                1 / 0
            ];
        for (t = 0; t < i.length; t += 3)
            if (void 0 !== (r = e[n = i[t]])) {
                if (l(r) === r && r >= i[t + 1] && r <= i[t + 2])
                    this[n] = r;
                else
                    throw Error(o + n + ': ' + r);
            }
        if (void 0 !== (r = e[n = 'LN10'])) {
            if (r == Math.LN10)
                this[n] = new this(r);
            else
                throw Error(o + n + ': ' + r);
        }
        return this;
    }
    (r = function e(t) {
        var n, r, i;
        function a(e) {
            if (!(this instanceof a))
                return new a(e);
            if (this.constructor = a, e instanceof a) {
                this.s = e.s, this.e = e.e, this.d = (e = e.d) ? e.slice() : e;
                return;
            }
            if ('number' == typeof e) {
                if (0 * e != 0)
                    throw Error(o + e);
                if (e > 0)
                    this.s = 1;
                else if (e < 0)
                    e = -e, this.s = -1;
                else {
                    this.s = 0, this.e = 0, this.d = [0];
                    return;
                }
                if (e === ~~e && e < 10000000) {
                    this.e = 0, this.d = [e];
                    return;
                }
                return A(this, e.toString());
            }
            if ('string' != typeof e)
                throw Error(o + e);
            if (45 === e.charCodeAt(0) ? (e = e.slice(1), this.s = -1) : this.s = 1, c.test(e))
                A(this, e);
            else
                throw Error(o + e);
        }
        if (a.prototype = _, a.ROUND_UP = 0, a.ROUND_DOWN = 1, a.ROUND_CEIL = 2, a.ROUND_FLOOR = 3, a.ROUND_HALF_UP = 4, a.ROUND_HALF_DOWN = 5, a.ROUND_HALF_EVEN = 6, a.ROUND_HALF_CEIL = 7, a.ROUND_HALF_FLOOR = 8, a.clone = e, a.config = a.set = C, void 0 === t && (t = {}), t)
            for (n = 0, i = [
                    'precision',
                    'rounding',
                    'toExpNeg',
                    'toExpPos',
                    'LN10'
                ]; n < i.length;)
                !t.hasOwnProperty(r = i[n++]) && (t[r] = this[r]);
        return a.config(t), a;
    }(r)).default = r.Decimal = r, n = new r(1), 'function' == typeof define && define.amd ? define(function () {
        return r;
    }) : e.exports ? e.exports = r : (!t && (t = 'undefined' != typeof self && self && self.self == self ? self : Function('return this')()), t.Decimal = r);
}(this);
