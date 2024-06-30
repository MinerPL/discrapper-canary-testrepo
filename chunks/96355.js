var n;
n = 0, function (e) {
    function t(e) {
        return e >= 48 && e <= 57;
    }
    function n(e) {
        this.index = 0, this.path = e, this.max = e.length, this.result = [], this.param = 0, this.err = '', this.segmentStart = 0, this.data = [];
    }
    function r(e) {
        for (var t; e.index < e.max && (10 === (t = e.path.charCodeAt(e.index)) || 13 === t || 8232 === t || 8233 === t || 32 === t || 9 === t || 11 === t || 12 === t || 160 === t || t >= 5760 && ea.indexOf(t) >= 0);)
            e.index++;
    }
    function i(e) {
        n = (t = e.path[e.segmentStart]).toLowerCase();
        var t, n, r = e.data;
        if ('m' === n && r.length > 2 && (e.result.push([
                t,
                r[0],
                r[1]
            ]), r = r.slice(2), n = 'l', t = 'm' === t ? 'l' : 'L'), 'r' === n)
            e.result.push([t].concat(r));
        else
            for (; r.length >= ei[n] && (e.result.push([t].concat(r.splice(0, ei[n]))), ei[n]););
    }
    function a() {
        if (!(this instanceof a))
            return new a();
        this.queue = [], this.cache = null;
    }
    function o(e, t, n, r) {
        var i = Math.sqrt(e * e + t * t), a = Math.sqrt(e * e + t * t), o = (e * n + t * r) / (i * a);
        return o > 1 && (o = 1), o < -1 && (o = -1), (e * r - t * n < 0 ? -1 : 1) * Math.acos(o);
    }
    function s(e, t, n) {
        if (!(this instanceof s))
            return new s(e, t, n);
        this.rx = e, this.ry = t, this.ax = n;
    }
    function l(e) {
        if (!(this instanceof l))
            return new l(e);
        var t = eo(e);
        this.segments = t.segments, this.err = t.err, this.__stack = [];
    }
    function u(e, t, n, r, i, a, o, s) {
        this.a = {
            x: e,
            y: t
        }, this.b = {
            x: n,
            y: r
        }, this.c = {
            x: i,
            y: a
        }, this.d = {
            x: o,
            y: s
        }, null != o && null != s ? (this.getArcLength = m, this.getPoint = f, this.getDerivative = d) : (this.getArcLength = h, this.getPoint = E, this.getDerivative = c), this.init();
    }
    function c(e, t, n) {
        return {
            x: 2 * (1 - n) * (e[1] - e[0]) + 2 * n * (e[2] - e[1]),
            y: 2 * (1 - n) * (t[1] - t[0]) + 2 * n * (t[2] - t[1])
        };
    }
    function d(e, t, n) {
        return E([
            3 * (e[1] - e[0]),
            3 * (e[2] - e[1]),
            3 * (e[3] - e[2])
        ], [
            3 * (t[1] - t[0]),
            3 * (t[2] - t[1]),
            3 * (t[3] - t[2])
        ], n);
    }
    function _(e, t, n, r, i) {
        for (var a = 1, o = e / t, s = (e - n(r, i, o)) / t; a > 0.001;) {
            var l = n(r, i, o + s), u = n(r, i, o - s), c = Math.abs(e - l) / t, d = Math.abs(e - u) / t;
            c < a ? (a = c, o += s) : d < a ? (a = d, o -= s) : s /= 2;
        }
        return o;
    }
    function E(e, t, n) {
        return {
            x: (1 - n) * (1 - n) * e[0] + 2 * (1 - n) * n * e[1] + n * n * e[2],
            y: (1 - n) * (1 - n) * t[0] + 2 * (1 - n) * n * t[1] + n * n * t[2]
        };
    }
    function f(e, t, n) {
        return {
            x: (1 - n) * (1 - n) * (1 - n) * e[0] + 3 * (1 - n) * (1 - n) * n * e[1] + 3 * (1 - n) * n * n * e[2] + n * n * n * e[3],
            y: (1 - n) * (1 - n) * (1 - n) * t[0] + 3 * (1 - n) * (1 - n) * n * t[1] + 3 * (1 - n) * n * n * t[2] + n * n * n * t[3]
        };
    }
    function h(e, t, n) {
        void 0 === n && (n = 1);
        var r = e[0] - 2 * e[1] + e[2], i = t[0] - 2 * t[1] + t[2], a = 2 * e[1] - 2 * e[0], o = 2 * t[1] - 2 * t[0], s = 4 * (r * r + i * i);
        if (0 === s)
            return n * Math.sqrt(Math.pow(e[2] - e[0], 2) + Math.pow(t[2] - t[0], 2));
        var l = 4 * (r * a + i * o) / (2 * s), u = n + l, c = (a * a + o * o) / s - l * l;
        return Math.sqrt(s) / 2 * (u * Math.sqrt(u * u + c) - l * Math.sqrt(l * l + c) + c * Math.log(Math.abs((u + Math.sqrt(u * u + c)) / (l + Math.sqrt(l * l + c)))));
    }
    function p(e, t, n) {
        var r, i, a, o, s, l = n.length - 1;
        if (0 === l)
            return 0;
        if (0 === e) {
            for (o = 0, s = 0; s <= l; s++) {
                ;
                o += (r = l, i = s, eA[r][i] * Math.pow(1 - t, l - s) * Math.pow(t, s) * n[s]);
            }
            return o;
        }
        for (a = Array(l), s = 0; s < l; s++)
            a[s] = l * (n[s + 1] - n[s]);
        return p(e - 1, t, a);
    }
    function m(e, t, n) {
        var r, i, a, o;
        for (void 0 === n && (n = 1), r = n / 2, i = 0, a = 0; a < 20; a++)
            o = r * eg[20][a] + r, i += eS[20][a] * function (e, t, n) {
                var r = p(1, n, e), i = p(1, n, t);
                return Math.sqrt(r * r + i * i);
            }(e, t, o);
        return r * i;
    }
    function I(e, t, n, r) {
        var i = e * n + t * r;
        return i > 1 && (i = 1), i < -1 && (i = -1), (e * r - t * n < 0 ? -1 : 1) * Math.acos(i);
    }
    function T(e, t, n, r, i, a, o, s, l) {
        var u = 0, c = [], d = [];
        ev(e, t, n, r, i, a, o, s, l).forEach(function (e) {
            var t = new eT(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]), n = t.getTotalLength();
            u += n, c.push(n), d.push(t);
        }), this.length = u, this.partialLengths = c, this.curves = d;
    }
    function g(e, t, n, r) {
        this.x0 = e, this.x1 = t, this.y0 = n, this.y1 = r;
    }
    function S(e, t) {
        return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
    }
    function A(e, t, n) {
        return [
            e[0] + (t[0] - e[0]) * n,
            e[1] + (t[1] - e[1]) * n
        ];
    }
    function N(e, t, n) {
        var r = e.map(function (e, n) {
            return function (e, t) {
                return function (n) {
                    return e.map(function (e, r) {
                        return e + n * (t[r] - e);
                    });
                };
            }(e, t[n]);
        });
        return function (e) {
            var t = r.map(function (t) {
                return t(e);
            });
            return n ? y(t) : t;
        };
    }
    function v(e) {
        return 'number' == typeof e && isFinite(e);
    }
    function O(e) {
        return function (e) {
            for (var t = 0; t < e.length - 2; t++) {
                var n = e[t], r = e[t + 1], i = e[t + 2];
                if (n[0] * (r[1] - i[1]) + r[0] * (i[1] - n[1]) + i[0] * (n[1] - r[1]))
                    return !0;
            }
            return !1;
        }(e) ? en(e) : [
            (e[0][0] + e[e.length - 1][0]) / 2,
            (e[0][1] + e[e.length - 1][1]) / 2
        ];
    }
    function R(e) {
        return new ef(e).abs();
    }
    function C(e) {
        return e.toString().split('M').map(function (e, t) {
            return e = e.trim(), t && e ? 'M' + e : e;
        }).filter(function (e) {
            return e;
        });
    }
    function y(e) {
        return 'M' + e.join('L') + 'Z';
    }
    function D(e, t) {
        for (var n = e.length + t, r = er(e) / t, i = 0, a = 0, o = r / 2; e.length < n;) {
            var s = e[i], l = e[(i + 1) % e.length], u = S(s, l);
            o <= a + u ? (e.splice(i + 1, 0, u ? A(s, l, (o - a) / u) : s.slice(0)), o += r) : (a += u, i++);
        }
    }
    function L(e, t) {
        if ('string' == typeof e) {
            var n, r, i, a, o, s, l = (a = e, o = t, function (e) {
                    var t = e.segments || [], n = [];
                    if (!t.length || 'M' !== t[0][0])
                        return !1;
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r], a = i[0], o = i[1], s = i[2];
                        if ('M' === a && r || 'Z' === a)
                            break;
                        if ('M' === a || 'L' === a)
                            n.push([
                                o,
                                s
                            ]);
                        else if ('H' === a)
                            n.push([
                                o,
                                n[n.length - 1][1]
                            ]);
                        else {
                            if ('V' !== a)
                                return !1;
                            n.push([
                                n[n.length - 1][0],
                                o
                            ]);
                        }
                    }
                    return !!n.length && { ring: n };
                }(s = R(a)) || function (e, t) {
                    var n, r, i = C(e)[0], a = [], o = 3;
                    if (!i)
                        throw TypeError(ey);
                    n = (r = function (e) {
                        if ('undefined' != typeof window && window && window.document)
                            try {
                                var t = window.document.createElementNS('http://www.w3.org/2000/svg', 'path');
                                return t.setAttributeNS(null, 'd', e), t;
                            } catch (e) {
                            }
                        return eC(e);
                    }(i)).getTotalLength(), t && v(t) && t > 0 && (o = Math.max(o, Math.ceil(n / t)));
                    for (var s = 0; s < o; s++) {
                        var l = r.getPointAtLength(n * s / o);
                        a.push([
                            l.x,
                            l.y
                        ]);
                    }
                    return {
                        ring: a,
                        skipBisect: !0
                    };
                }(s, o));
            e = l.ring, i = l.skipBisect;
        } else if (!Array.isArray(e))
            throw TypeError(ey);
        if (!function (e) {
                return e.every(function (e) {
                    return Array.isArray(e) && e.length >= 2 && v(e[0]) && v(e[1]);
                });
            }(r = e.slice(0)))
            throw TypeError(ey);
        return r.length > 1 && (n = r[0], 1e-9 > S(n, r[r.length - 1])) && r.pop(), et(r) > 0 && r.reverse(), !i && t && v(t) && t > 0 && function (e, t) {
            void 0 === t && (t = 1 / 0);
            for (var n = 0; n < e.length; n++)
                for (var r = e[n], i = n === e.length - 1 ? e[0] : e[n + 1]; S(r, i) > t;)
                    i = A(r, i, 0.5), e.splice(n + 1, 0, i);
        }(r, t), r;
    }
    function b(e, t, n) {
        var r;
        return r = e.length - t.length, D(e, r < 0 ? -1 * r : 0), D(t, r > 0 ? r : 0), eL(e, t), N(e, t, n);
    }
    function M(e, t, n) {
        n = n || 2;
        var r, i, a, o, s, l, u, c = t && t.length, d = c ? t[0] * n : e.length, _ = P(e, 0, d, n, !0), E = [];
        if (!_)
            return E;
        if (c && (_ = function (e, t, n, r) {
                var i, a, o, s, l, u = [];
                for (i = 0, a = t.length; i < a; i++)
                    o = t[i] * r, s = i < a - 1 ? t[i + 1] * r : e.length, (l = P(e, o, s, r, !1)) === l.next && (l.steiner = !0), u.push(function (e) {
                        var t = e, n = e;
                        do
                            t.x < n.x && (n = t), t = t.next;
                        while (t !== e);
                        return n;
                    }(l));
                for (u.sort(x), i = 0; i < u.length; i++)
                    (function (e, t) {
                        if (t = function (e, t) {
                                var n, r = t, i = e.x, a = e.y, o = -Infinity;
                                do {
                                    if (a <= r.y && a >= r.next.y) {
                                        var s = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                                        if (s <= i && s > o) {
                                            if (o = s, s === i) {
                                                if (a === r.y)
                                                    return r;
                                                if (a === r.next.y)
                                                    return r.next;
                                            }
                                            n = r.x < r.next.x ? r : r.next;
                                        }
                                    }
                                    r = r.next;
                                } while (r !== t);
                                if (!n)
                                    return null;
                                if (i === o)
                                    return n.prev;
                                var l, u = n, c = n.x, d = n.y, _ = 1 / 0;
                                for (r = n.next; r !== u;)
                                    i >= r.x && r.x >= c && k(a < d ? i : o, a, c, d, a < d ? o : i, a, r.x, r.y) && ((l = Math.abs(a - r.y) / (i - r.x)) < _ || l === _ && r.x > n.x) && H(r, e) && (n = r, _ = l), r = r.next;
                                return n;
                            }(e, t)) {
                            var n = Z(t, e);
                            U(n, n.next);
                        }
                    }(u[i], n), n = U(n, n.next));
                return n;
            }(e, t, _, n)), e.length > 80 * n) {
            r = a = e[0], i = o = e[1];
            for (var f = n; f < d; f += n)
                s = e[f], l = e[f + 1], s < r && (r = s), l < i && (i = l), s > a && (a = s), l > o && (o = l);
            u = Math.max(a - r, o - i);
        }
        return w(_, E, n, r, i, u), E;
    }
    function P(e, t, n, r, i) {
        var a, o;
        if (i === K(e, t, n, r) > 0)
            for (a = t; a < n; a += r)
                o = Y(a, e[a], e[a + 1], o);
        else
            for (a = n - r; a >= t; a -= r)
                o = Y(a, e[a], e[a + 1], o);
        return o && F(o, o.next) && (j(o), o = o.next), o;
    }
    function U(e, t) {
        if (!e)
            return e;
        t || (t = e);
        var n, r = e;
        do
            if (n = !1, r.steiner || !F(r, r.next) && 0 !== B(r.prev, r, r.next))
                r = r.next;
            else {
                if (j(r), (r = t = r.prev) === r.next)
                    return null;
                n = !0;
            }
        while (n || r !== t);
        return t;
    }
    function w(e, t, n, r, i, a, o) {
        if (e) {
            !o && a && function (e, t, n, r) {
                var i = e;
                do
                    null === i.z && (i.z = G(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
                while (i !== e);
                i.prevZ.nextZ = null, i.prevZ = null, function (e) {
                    var t, n, r, i, a, o, s, l, u = 1;
                    do {
                        for (n = e, e = null, a = null, o = 0; n;) {
                            for (o++, r = n, s = 0, t = 0; t < u && (s++, r = r.nextZ); t++);
                            for (l = u; s > 0 || l > 0 && r;)
                                0 === s ? (i = r, r = r.nextZ, l--) : 0 !== l && r ? n.z <= r.z ? (i = n, n = n.nextZ, s--) : (i = r, r = r.nextZ, l--) : (i = n, n = n.nextZ, s--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
                            n = r;
                        }
                        a.nextZ = null, u *= 2;
                    } while (o > 1);
                }(i);
            }(e, r, i, a);
            for (var s, l, u = e; e.prev !== e.next;)
                if (s = e.prev, l = e.next, a ? function (e, t, n, r) {
                        var i = e.prev, a = e.next;
                        if (B(i, e, a) >= 0)
                            return !1;
                        for (var o = i.x < e.x ? i.x < a.x ? i.x : a.x : e.x < a.x ? e.x : a.x, s = i.y < e.y ? i.y < a.y ? i.y : a.y : e.y < a.y ? e.y : a.y, l = i.x > e.x ? i.x > a.x ? i.x : a.x : e.x > a.x ? e.x : a.x, u = i.y > e.y ? i.y > a.y ? i.y : a.y : e.y > a.y ? e.y : a.y, c = G(o, s, t, n, r), d = G(l, u, t, n, r), _ = e.nextZ; _ && _.z <= d;) {
                            if (_ !== e.prev && _ !== e.next && k(i.x, i.y, e.x, e.y, a.x, a.y, _.x, _.y) && B(_.prev, _, _.next) >= 0)
                                return !1;
                            _ = _.nextZ;
                        }
                        for (_ = e.prevZ; _ && _.z >= c;) {
                            if (_ !== e.prev && _ !== e.next && k(i.x, i.y, e.x, e.y, a.x, a.y, _.x, _.y) && B(_.prev, _, _.next) >= 0)
                                return !1;
                            _ = _.prevZ;
                        }
                        return !0;
                    }(e, r, i, a) : function (e) {
                        var t = e.prev, n = e.next;
                        if (B(t, e, n) >= 0)
                            return !1;
                        for (var r = e.next.next; r !== e.prev;) {
                            if (k(t.x, t.y, e.x, e.y, n.x, n.y, r.x, r.y) && B(r.prev, r, r.next) >= 0)
                                return !1;
                            r = r.next;
                        }
                        return !0;
                    }(e))
                    t.push(s.i / n), t.push(e.i / n), t.push(l.i / n), j(e), e = l.next, u = l.next;
                else if ((e = l) === u) {
                    o ? 1 === o ? w(e = function (e, t, n) {
                        var r = e;
                        do {
                            var i = r.prev, a = r.next.next;
                            !F(i, a) && V(i, r, r.next, a) && H(i, a) && H(a, i) && (t.push(i.i / n), t.push(r.i / n), t.push(a.i / n), j(r), j(r.next), r = e = a), r = r.next;
                        } while (r !== e);
                        return r;
                    }(e, t, n), t, n, r, i, a, 2) : 2 === o && function (e, t, n, r, i, a) {
                        var o = e;
                        do {
                            for (var s = o.next.next; s !== o.prev;) {
                                if (o.i !== s.i && function (e, t) {
                                        return e.next.i !== t.i && e.prev.i !== t.i && !function (e, t) {
                                            var n = e;
                                            do {
                                                if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && V(n, n.next, e, t))
                                                    return !0;
                                                n = n.next;
                                            } while (n !== e);
                                            return !1;
                                        }(e, t) && H(e, t) && H(t, e) && function (e, t) {
                                            var n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
                                            do
                                                n.y > a != n.next.y > a && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
                                            while (n !== e);
                                            return r;
                                        }(e, t);
                                    }(o, s)) {
                                    var l = Z(o, s);
                                    return o = U(o, o.next), l = U(l, l.next), w(o, t, n, r, i, a), void w(l, t, n, r, i, a);
                                }
                                s = s.next;
                            }
                            o = o.next;
                        } while (o !== e);
                    }(e, t, n, r, i, a) : w(U(e), t, n, r, i, a, 1);
                    break;
                }
        }
    }
    function x(e, t) {
        return e.x - t.x;
    }
    function G(e, t, n, r, i) {
        return e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) / i) | e << 8)) | e << 4)) | e << 2)) | e << 1), e | (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - r) / i) | t << 8)) | t << 4)) | t << 2)) | t << 1)) << 1;
    }
    function k(e, t, n, r, i, a, o, s) {
        return (i - o) * (t - s) - (e - o) * (a - s) >= 0 && (e - o) * (r - s) - (n - o) * (t - s) >= 0 && (n - o) * (a - s) - (i - o) * (r - s) >= 0;
    }
    function B(e, t, n) {
        return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
    }
    function F(e, t) {
        return e.x === t.x && e.y === t.y;
    }
    function V(e, t, n, r) {
        return !!(F(e, t) && F(n, r) || F(e, r) && F(n, t)) || B(e, t, n) > 0 != B(e, t, r) > 0 && B(n, r, e) > 0 != B(n, r, t) > 0;
    }
    function H(e, t) {
        return 0 > B(e.prev, e, e.next) ? B(e, t, e.next) >= 0 && B(e, e.prev, t) >= 0 : 0 > B(e, t, e.prev) || 0 > B(e, e.next, t);
    }
    function Z(e, t) {
        var n = new W(e.i, e.x, e.y), r = new W(t.i, t.x, t.y), i = e.next, a = t.prev;
        return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
    }
    function Y(e, t, n, r) {
        var i = new W(e, t, n);
        return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
    }
    function j(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
    }
    function W(e, t, n) {
        this.i = e, this.x = t, this.y = n, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
    }
    function K(e, t, n, r) {
        for (var i = 0, a = t, o = n - r; a < n; a += r)
            i += (e[o] - e[a]) * (e[a + 1] + e[o + 1]), o = a;
        return i;
    }
    function z(e, t) {
        var n = t.id, r = t.bbox, i = null == t.properties ? {} : t.properties, a = q(e, t);
        return null == n && null == r ? {
            type: 'Feature',
            properties: i,
            geometry: a
        } : null == r ? {
            type: 'Feature',
            id: n,
            properties: i,
            geometry: a
        } : {
            type: 'Feature',
            id: n,
            bbox: r,
            properties: i,
            geometry: a
        };
    }
    function q(e, t) {
        function n(e) {
            return o(e);
        }
        function r(e) {
            for (var t = [], n = 0, r = e.length; n < r; ++n)
                !function (e, t) {
                    t.length && t.pop();
                    for (var n = s[e < 0 ? ~e : e], r = 0, i = n.length; r < i; ++r)
                        t.push(o(n[r], r));
                    e < 0 && eU(t, i);
                }(e[n], t);
            return t.length < 2 && t.push(t[0]), t;
        }
        function i(e) {
            for (var t = r(e); t.length < 4;)
                t.push(t[0]);
            return t;
        }
        function a(e) {
            return e.map(i);
        }
        var o = eP(e.transform), s = e.arcs;
        return function e(t) {
            var i, o = t.type;
            switch (o) {
            case 'GeometryCollection':
                return {
                    type: o,
                    geometries: t.geometries.map(e)
                };
            case 'Point':
                i = n(t.coordinates);
                break;
            case 'MultiPoint':
                i = t.coordinates.map(n);
                break;
            case 'LineString':
                i = r(t.arcs);
                break;
            case 'MultiLineString':
                i = t.arcs.map(r);
                break;
            case 'Polygon':
                i = a(t.arcs);
                break;
            case 'MultiPolygon':
                i = t.arcs.map(a);
                break;
            default:
                return null;
            }
            return {
                type: o,
                coordinates: i
            };
        }(t);
    }
    function Q(e, t, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var a = n.single;
        void 0 === a && (a = !1);
        var o = L(e, r);
        o.length < t.length + 2 && D(o, t.length + 2 - o.length);
        var s, l = eV(o, t.length), u = t.map(function (e) {
                return L(e, r);
            }), c = 'string' == typeof e && e;
        return a && !t.every(function (e) {
            return 'string' == typeof e;
        }) || (s = t.slice(0)), X(l, u, {
            match: !0,
            string: i,
            single: a,
            t0: c,
            t1: s
        });
    }
    function X(e, t, n) {
        void 0 === n && (n = {});
        var r = n.string, i = n.single, a = n.t0, o = n.t1, s = n.match, l = s ? eH(e, t) : e.map(function (e, t) {
                return t;
            }), u = l.map(function (n, i) {
                return b(e[n], t[i], r);
            });
        if (s && Array.isArray(a) && (a = l.map(function (e) {
                return a[e];
            })), i && r && (Array.isArray(a) && (a = a.join(' ')), Array.isArray(o) && (o = o.join(' '))), i) {
            var c = r ? function (e) {
                return u.map(function (t) {
                    return t(e);
                }).join(' ');
            } : function (e) {
                return u.map(function (t) {
                    return t(e);
                });
            };
            return r && (a || o) ? function (e) {
                return e < 0.0001 && a || 1 - e < 0.0001 && o || c(e);
            } : c;
        }
        return r ? (a = Array.isArray(a) ? a.map(function (e) {
            return 'string' == typeof e && e;
        }) : [], o = Array.isArray(o) ? o.map(function (e) {
            return 'string' == typeof e && e;
        }) : [], u.map(function (e, t) {
            return a[t] || o[t] ? function (n) {
                return n < 0.0001 && a[t] || 1 - n < 0.0001 && o[t] || e(n);
            } : e;
        })) : u;
    }
    function $(e, t, n, r, i) {
        return ee(function (e, t, n) {
            return function (r) {
                var i = O(r), a = er(r.concat([r[0]])), o = Math.atan2(r[0][1] - i[1], r[0][0] - i[0]), s = 0;
                return r.map(function (i, l) {
                    var u;
                    return l && (s += S(i, r[l - 1])), [
                        Math.cos(u = o + 2 * Math.PI * (a ? s / a : l / r.length)) * n + e,
                        Math.sin(u) * n + t
                    ];
                });
            };
        }(e, t, n), r, function (e, t, n) {
            var r = e - n + ',' + t, i = 'A' + n + ',' + n + ',0,1,1,';
            return 'M' + r + i + (e + n + ',') + t + i + r + 'Z';
        }(e, t, n), 2 * Math.PI * n, i);
    }
    function J(e, t, n, r, i, a) {
        return ee(function (e, t, n, r) {
            return function (i) {
                var a = O(i), o = er(i.concat([i[0]])), s = Math.atan2(i[0][1] - a[1], i[0][0] - a[0]), l = 0;
                s < 0 && (s = 2 * Math.PI + s);
                var u = s / (2 * Math.PI);
                return i.map(function (a, s) {
                    s && (l += S(a, i[s - 1]));
                    var c = function (e) {
                        return e <= 1 / 8 ? [
                            1,
                            0.5 + 4 * e
                        ] : e <= 3 / 8 ? [
                            1.5 - 4 * e,
                            1
                        ] : e <= 5 / 8 ? [
                            0,
                            2.5 - 4 * e
                        ] : e <= 7 / 8 ? [
                            4 * e - 2.5,
                            0
                        ] : [
                            1,
                            4 * e - 3.5
                        ];
                    }((u + (o ? l / o : s / i.length)) % 1);
                    return [
                        e + c[0] * n,
                        t + c[1] * r
                    ];
                });
            };
        }(e, t, n, r), i, function (e, t, n, r) {
            var i = e + n, a = t + r;
            return 'M' + e + ',' + t + 'L' + i + ',' + t + 'L' + i + ',' + a + 'L' + e + ',' + a + 'Z';
        }(e, t, n, r), 2 * n + 2 * r, a);
    }
    function ee(e, t, n, r, i) {
        void 0 === i && (i = {});
        var a = i.maxSegmentLength;
        void 0 === a && (a = 10);
        var o = i.string;
        void 0 === o && (o = !0);
        var s, l = L(t, a);
        return v(r) && l.length < r / a && D(l, Math.ceil(r / a - l.length)), s = N(e(l), l, o), o ? function (e) {
            return e < 0.0001 ? n : s(e);
        } : s;
    }
    var et = function (e) {
            for (var t, n = -1, r = e.length, i = e[r - 1], a = 0; ++n < r;)
                t = i, i = e[n], a += t[1] * i[0] - t[0] * i[1];
            return a / 2;
        }, en = function (e) {
            for (var t, n, r = -1, i = e.length, a = 0, o = 0, s = e[i - 1], l = 0; ++r < i;)
                t = s, s = e[r], l += n = t[0] * s[1] - s[0] * t[1], a += (t[0] + s[0]) * n, o += (t[1] + s[1]) * n;
            return [
                a / (l *= 3),
                o / l
            ];
        }, er = function (e) {
            for (var t, n, r = -1, i = e.length, a = e[i - 1], o = a[0], s = a[1], l = 0; ++r < i;)
                t = o, n = s, o = (a = e[r])[0], s = a[1], t -= o, n -= s, l += Math.sqrt(t * t + n * n);
            return l;
        }, ei = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            r: 4,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, ea = [
            5760,
            6158,
            8192,
            8193,
            8194,
            8195,
            8196,
            8197,
            8198,
            8199,
            8200,
            8201,
            8202,
            8239,
            8287,
            12288,
            65279
        ], eo = function (e) {
            var a = new n(e), o = a.max;
            for (r(a); a.index < o && !a.err.length;)
                !function (e) {
                    var n, a, o, s, l = e.max;
                    if (e.segmentStart = e.index, !function (e) {
                            switch (32 | e) {
                            case 109:
                            case 122:
                            case 108:
                            case 104:
                            case 118:
                            case 99:
                            case 115:
                            case 113:
                            case 116:
                            case 97:
                            case 114:
                                return !0;
                            }
                            return !1;
                        }(e.path.charCodeAt(e.index)))
                        return void (e.err = 'SvgPath: bad command ' + e.path[e.index] + ' (at pos ' + e.index + ')');
                    if (o = ei[e.path[e.index].toLowerCase()], e.index++, r(e), e.data = [], !o)
                        return void i(e);
                    for (a = !1;;) {
                        for (s = o; s > 0; s--) {
                            if (function (e) {
                                    var n, r = e.index, i = r, a = e.max, o = !1, s = !1, l = !1, u = !1;
                                    if (i >= a)
                                        return void (e.err = 'SvgPath: missed param (at pos ' + i + ')');
                                    if (43 !== (n = e.path.charCodeAt(i)) && 45 !== n || (n = ++i < a ? e.path.charCodeAt(i) : 0), !t(n) && 46 !== n)
                                        return void (e.err = 'SvgPath: param should start with 0..9 or `.` (at pos ' + i + ')');
                                    if (46 !== n) {
                                        if (o = 48 === n, n = ++i < a ? e.path.charCodeAt(i) : 0, o && i < a && n && t(n))
                                            return void (e.err = 'SvgPath: numbers started with `0` such as `09` are ilegal (at pos ' + r + ')');
                                        for (; i < a && t(e.path.charCodeAt(i));)
                                            i++, s = !0;
                                        n = i < a ? e.path.charCodeAt(i) : 0;
                                    }
                                    if (46 === n) {
                                        for (u = !0, i++; t(e.path.charCodeAt(i));)
                                            i++, l = !0;
                                        n = i < a ? e.path.charCodeAt(i) : 0;
                                    }
                                    if (101 === n || 69 === n) {
                                        if (u && !s && !l || (43 !== (n = ++i < a ? e.path.charCodeAt(i) : 0) && 45 !== n || i++, !(i < a && t(e.path.charCodeAt(i)))))
                                            return void (e.err = 'SvgPath: invalid float exponent (at pos ' + i + ')');
                                        for (; i < a && t(e.path.charCodeAt(i));)
                                            i++;
                                    }
                                    e.index = i, e.param = parseFloat(e.path.slice(r, i)) + 0;
                                }(e), e.err.length)
                                return;
                            e.data.push(e.param), r(e), a = !1, e.index < l && 44 === e.path.charCodeAt(e.index) && (e.index++, r(e), a = !0);
                        }
                        if (!a) {
                            ;
                            if (e.index >= e.max)
                                break;
                            if (!((n = e.path.charCodeAt(e.index)) >= 48 && n <= 57 || 43 === n || 45 === n || 46 === n))
                                break;
                        }
                    }
                    i(e);
                }(a);
            return a.err.length ? a.result = [] : a.result.length && (0 > 'mM'.indexOf(a.result[0][0]) ? (a.err = 'SvgPath: string should start with `M` or `m`', a.result = []) : a.result[0][0] = 'M'), {
                err: a.err,
                segments: a.result
            };
        };
    a.prototype.matrix = function (e) {
        return 1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5] || (this.cache = null, this.queue.push(e)), this;
    }, a.prototype.translate = function (e, t) {
        return 0 === e && 0 === t || (this.cache = null, this.queue.push([
            1,
            0,
            0,
            1,
            e,
            t
        ])), this;
    }, a.prototype.scale = function (e, t) {
        return 1 === e && 1 === t || (this.cache = null, this.queue.push([
            e,
            0,
            0,
            t,
            0,
            0
        ])), this;
    }, a.prototype.rotate = function (e, t, n) {
        var r, i, a;
        return 0 !== e && (this.translate(t, n), i = Math.cos(r = e * Math.PI / 180), a = Math.sin(r), this.queue.push([
            i,
            a,
            -a,
            i,
            0,
            0
        ]), this.cache = null, this.translate(-t, -n)), this;
    }, a.prototype.skewX = function (e) {
        return 0 !== e && (this.cache = null, this.queue.push([
            1,
            0,
            Math.tan(e * Math.PI / 180),
            1,
            0,
            0
        ])), this;
    }, a.prototype.skewY = function (e) {
        return 0 !== e && (this.cache = null, this.queue.push([
            1,
            Math.tan(e * Math.PI / 180),
            0,
            1,
            0,
            0
        ])), this;
    }, a.prototype.toArray = function () {
        if (this.cache)
            return this.cache;
        if (!this.queue.length)
            return this.cache = [
                1,
                0,
                0,
                1,
                0,
                0
            ], this.cache;
        if (this.cache = this.queue[0], 1 === this.queue.length)
            return this.cache;
        for (var e, t, n = 1; n < this.queue.length; n++) {
            ;
            this.cache = (e = this.cache, t = this.queue[n], [
                e[0] * t[0] + e[2] * t[1],
                e[1] * t[0] + e[3] * t[1],
                e[0] * t[2] + e[2] * t[3],
                e[1] * t[2] + e[3] * t[3],
                e[0] * t[4] + e[2] * t[5] + e[4],
                e[1] * t[4] + e[3] * t[5] + e[5]
            ]);
        }
        return this.cache;
    }, a.prototype.calc = function (e, t, n) {
        var r;
        return this.queue.length ? (this.cache || (this.cache = this.toArray()), [
            e * (r = this.cache)[0] + t * r[2] + (n ? 0 : r[4]),
            e * r[1] + t * r[3] + (n ? 0 : r[5])
        ]) : [
            e,
            t
        ];
    };
    var es = {
            matrix: !0,
            scale: !0,
            rotate: !0,
            translate: !0,
            skewX: !0,
            skewY: !0
        }, el = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/, eu = /[\s,]+/, ec = function (e) {
            var t, n, r = new a();
            return e.split(el).forEach(function (e) {
                if (e.length) {
                    if (void 0 !== es[e])
                        return void (t = e);
                    switch (n = e.split(eu).map(function (e) {
                            return +e || 0;
                        }), t) {
                    case 'matrix':
                        return void (6 === n.length && r.matrix(n));
                    case 'scale':
                        return void (1 === n.length ? r.scale(n[0], n[0]) : 2 === n.length && r.scale(n[0], n[1]));
                    case 'rotate':
                        return void (1 === n.length ? r.rotate(n[0], 0, 0) : 3 === n.length && r.rotate(n[0], n[1], n[2]));
                    case 'translate':
                        return void (1 === n.length ? r.translate(n[0], 0) : 2 === n.length && r.translate(n[0], n[1]));
                    case 'skewX':
                        return void (1 === n.length && r.skewX(n[0]));
                    case 'skewY':
                        return void (1 === n.length && r.skewY(n[0]));
                    }
                }
            }), r;
        }, ed = 2 * Math.PI, e_ = function (e, t, n, r, i, a, s, l, u) {
            var c, d, _, E, f, h, p, m, I, T, g, S, A, N, v, O, R, C, y, D, L, b, M, P = Math.sin(u * ed / 360), U = Math.cos(u * ed / 360), w = U * (e - n) / 2 + P * (t - r) / 2, x = -P * (e - n) / 2 + U * (t - r) / 2;
            if (0 === w && 0 === x || 0 === s || 0 === l)
                return [];
            s = Math.abs(s);
            var G = w * w / (s * s) + x * x / ((l = Math.abs(l)) * l);
            G > 1 && (s *= Math.sqrt(G), l *= Math.sqrt(G));
            var k = (c = e, d = t, _ = n, E = r, f = i, h = a, p = s, m = l, I = P, g = (T = U) * (c - _) / 2 + I * (d - E) / 2, S = -I * (c - _) / 2 + T * (d - E) / 2, A = p * p, N = m * m, v = g * g, (R = A * N - A * (O = S * S) - N * v) < 0 && (R = 0), R /= A * O + N * v, C = (R = Math.sqrt(R) * (f === h ? -1 : 1)) * p / m * S, y = -(R * m) / p * g, b = o(1, 0, D = (g - C) / p, L = (S - y) / m), M = o(D, L, (-g - C) / p, (-S - y) / m), 0 === h && M > 0 && (M -= ed), 1 === h && M < 0 && (M += ed), [
                    T * C - I * y + (c + _) / 2,
                    I * C + T * y + (d + E) / 2,
                    b,
                    M
                ]), B = [], F = k[2], V = k[3], H = Math.max(Math.ceil(Math.abs(V) / (ed / 4)), 1);
            V /= H;
            for (var Z = 0; Z < H; Z++)
                B.push(function (e, t) {
                    var n = 4 / 3 * Math.tan(t / 4), r = Math.cos(e), i = Math.sin(e), a = Math.cos(e + t), o = Math.sin(e + t);
                    return [
                        r,
                        i,
                        r - i * n,
                        i + r * n,
                        a + o * n,
                        o - a * n,
                        a,
                        o
                    ];
                }(F, V)), F += V;
            return B.map(function (e) {
                for (var t = 0; t < e.length; t += 2) {
                    var n = e[t + 0], r = e[t + 1];
                    n *= s;
                    var i = U * n - P * (r *= l), a = P * n + U * r;
                    e[t + 0] = i + k[0], e[t + 1] = a + k[1];
                }
                return e;
            });
        }, eE = Math.PI / 180;
    s.prototype.transform = function (e) {
        var t = Math.cos(this.ax * eE), n = Math.sin(this.ax * eE), r = [
                this.rx * (e[0] * t + e[2] * n),
                this.rx * (e[1] * t + e[3] * n),
                this.ry * (-e[0] * n + e[2] * t),
                this.ry * (-e[1] * n + e[3] * t)
            ], i = r[0] * r[0] + r[2] * r[2], a = r[1] * r[1] + r[3] * r[3], o = ((r[0] - r[3]) * (r[0] - r[3]) + (r[2] + r[1]) * (r[2] + r[1])) * ((r[0] + r[3]) * (r[0] + r[3]) + (r[2] - r[1]) * (r[2] - r[1])), s = (i + a) / 2;
        if (o < 1e-10 * s)
            return this.rx = this.ry = Math.sqrt(s), this.ax = 0, this;
        var l = r[0] * r[1] + r[2] * r[3], u = s + (o = Math.sqrt(o)) / 2, c = s - o / 2;
        return this.ax = 1e-10 > Math.abs(l) && 1e-10 > Math.abs(u - a) ? 90 : 180 * Math.atan(Math.abs(l) > Math.abs(u - a) ? (u - i) / l : l / (u - a)) / Math.PI, this.ax >= 0 ? (this.rx = Math.sqrt(u), this.ry = Math.sqrt(c)) : (this.ax += 90, this.rx = Math.sqrt(c), this.ry = Math.sqrt(u)), this;
    }, s.prototype.isDegenerate = function () {
        return this.rx < 1e-10 * this.ry || this.ry < 1e-10 * this.rx;
    };
    l.prototype.__matrix = function (e) {
        var t, n = this;
        e.queue.length && this.iterate(function (r, i, a, o) {
            var l, u, c, d;
            switch (r[0]) {
            case 'v':
                u = 0 === (l = e.calc(0, r[1], !0))[0] ? [
                    'v',
                    l[1]
                ] : [
                    'l',
                    l[0],
                    l[1]
                ];
                break;
            case 'V':
                u = (l = e.calc(a, r[1], !1))[0] === e.calc(a, o, !1)[0] ? [
                    'V',
                    l[1]
                ] : [
                    'L',
                    l[0],
                    l[1]
                ];
                break;
            case 'h':
                u = 0 === (l = e.calc(r[1], 0, !0))[1] ? [
                    'h',
                    l[0]
                ] : [
                    'l',
                    l[0],
                    l[1]
                ];
                break;
            case 'H':
                u = (l = e.calc(r[1], o, !1))[1] === e.calc(a, o, !1)[1] ? [
                    'H',
                    l[0]
                ] : [
                    'L',
                    l[0],
                    l[1]
                ];
                break;
            case 'a':
            case 'A':
                var _ = e.toArray(), E = s(r[1], r[2], r[3]).transform(_);
                if (_[0] * _[3] - _[1] * _[2] < 0 && (r[5] = r[5] ? '0' : '1'), l = e.calc(r[6], r[7], 'a' === r[0]), 'A' === r[0] && r[6] === a && r[7] === o || 'a' === r[0] && 0 === r[6] && 0 === r[7]) {
                    u = [
                        'a' === r[0] ? 'l' : 'L',
                        l[0],
                        l[1]
                    ];
                    break;
                }
                u = E.isDegenerate() ? [
                    'a' === r[0] ? 'l' : 'L',
                    l[0],
                    l[1]
                ] : [
                    r[0],
                    E.rx,
                    E.ry,
                    E.ax,
                    r[4],
                    r[5],
                    l[0],
                    l[1]
                ];
                break;
            case 'm':
                d = i > 0, u = [
                    'm',
                    (l = e.calc(r[1], r[2], d))[0],
                    l[1]
                ];
                break;
            default:
                for (u = [c = r[0]], d = c.toLowerCase() === c, t = 1; t < r.length; t += 2)
                    l = e.calc(r[t], r[t + 1], d), u.push(l[0], l[1]);
            }
            n.segments[i] = u;
        }, !0);
    }, l.prototype.__evaluateStack = function () {
        var e, t;
        if (this.__stack.length) {
            if (1 === this.__stack.length)
                return this.__matrix(this.__stack[0]), void (this.__stack = []);
            for (e = a(), t = this.__stack.length; --t >= 0;)
                e.matrix(this.__stack[t].toArray());
            this.__matrix(e), this.__stack = [];
        }
    }, l.prototype.toString = function () {
        var e, t, n = [];
        this.__evaluateStack();
        for (var r = 0; r < this.segments.length; r++)
            t = this.segments[r][0], e = r > 0 && 'm' !== t && 'M' !== t && t === this.segments[r - 1][0], n = n.concat(e ? this.segments[r].slice(1) : this.segments[r]);
        return n.join(' ').replace(/ ?([achlmqrstvz]) ?/gi, '$1').replace(/ \-/g, '-').replace(/zm/g, 'z m');
    }, l.prototype.translate = function (e, t) {
        return this.__stack.push(a().translate(e, t || 0)), this;
    }, l.prototype.scale = function (e, t) {
        return this.__stack.push(a().scale(e, t || 0 === t ? t : e)), this;
    }, l.prototype.rotate = function (e, t, n) {
        return this.__stack.push(a().rotate(e, t || 0, n || 0)), this;
    }, l.prototype.skewX = function (e) {
        return this.__stack.push(a().skewX(e)), this;
    }, l.prototype.skewY = function (e) {
        return this.__stack.push(a().skewY(e)), this;
    }, l.prototype.matrix = function (e) {
        return this.__stack.push(a().matrix(e)), this;
    }, l.prototype.transform = function (e) {
        return e.trim() && this.__stack.push(ec(e)), this;
    }, l.prototype.round = function (e) {
        var t, n = 0, r = 0, i = 0, a = 0;
        return e = e || 0, this.__evaluateStack(), this.segments.forEach(function (o) {
            var s = o[0].toLowerCase() === o[0];
            switch (o[0]) {
            case 'H':
            case 'h':
                return s && (o[1] += i), i = o[1] - o[1].toFixed(e), void (o[1] = +o[1].toFixed(e));
            case 'V':
            case 'v':
                return s && (o[1] += a), a = o[1] - o[1].toFixed(e), void (o[1] = +o[1].toFixed(e));
            case 'Z':
            case 'z':
                return i = n, void (a = r);
            case 'M':
            case 'm':
                return s && (o[1] += i, o[2] += a), i = o[1] - o[1].toFixed(e), a = o[2] - o[2].toFixed(e), n = i, r = a, o[1] = +o[1].toFixed(e), void (o[2] = +o[2].toFixed(e));
            case 'A':
            case 'a':
                return s && (o[6] += i, o[7] += a), i = o[6] - o[6].toFixed(e), a = o[7] - o[7].toFixed(e), o[1] = +o[1].toFixed(e), o[2] = +o[2].toFixed(e), o[3] = +o[3].toFixed(e + 2), o[6] = +o[6].toFixed(e), void (o[7] = +o[7].toFixed(e));
            default:
                return t = o.length, s && (o[t - 2] += i, o[t - 1] += a), i = o[t - 2] - o[t - 2].toFixed(e), a = o[t - 1] - o[t - 1].toFixed(e), void o.forEach(function (t, n) {
                    n && (o[n] = +o[n].toFixed(e));
                });
            }
        }), this;
    }, l.prototype.iterate = function (e, t) {
        var n, r, i, a = this.segments, o = {}, s = !1, l = 0, u = 0, c = 0, d = 0;
        if (t || this.__evaluateStack(), a.forEach(function (t, n) {
                var r = e(t, n, l, u);
                Array.isArray(r) && (o[n] = r, s = !0);
                var i = t[0] === t[0].toLowerCase();
                switch (t[0]) {
                case 'm':
                case 'M':
                    return l = t[1] + (i ? l : 0), u = t[2] + (i ? u : 0), c = l, void (d = u);
                case 'h':
                case 'H':
                    return void (l = t[1] + (i ? l : 0));
                case 'v':
                case 'V':
                    return void (u = t[1] + (i ? u : 0));
                case 'z':
                case 'Z':
                    return l = c, void (u = d);
                default:
                    l = t[t.length - 2] + (i ? l : 0), u = t[t.length - 1] + (i ? u : 0);
                }
            }), !s)
            return this;
        for (i = [], n = 0; n < a.length; n++)
            if (void 0 !== o[n])
                for (r = 0; r < o[n].length; r++)
                    i.push(o[n][r]);
            else
                i.push(a[n]);
        return this.segments = i, this;
    }, l.prototype.abs = function () {
        return this.iterate(function (e, t, n, r) {
            var i, a = e[0], o = a.toUpperCase();
            if (a !== o)
                switch (e[0] = o, a) {
                case 'v':
                    return void (e[1] += r);
                case 'a':
                    return e[6] += n, void (e[7] += r);
                default:
                    for (i = 1; i < e.length; i++)
                        e[i] += i % 2 ? n : r;
                }
        }, !0), this;
    }, l.prototype.rel = function () {
        return this.iterate(function (e, t, n, r) {
            var i, a = e[0], o = a.toLowerCase();
            if (a !== o && (0 !== t || 'M' !== a))
                switch (e[0] = o, a) {
                case 'V':
                    return void (e[1] -= r);
                case 'A':
                    return e[6] -= n, void (e[7] -= r);
                default:
                    for (i = 1; i < e.length; i++)
                        e[i] -= i % 2 ? n : r;
                }
        }, !0), this;
    }, l.prototype.unarc = function () {
        return this.iterate(function (e, t, n, r) {
            var i, a, o, s = [], l = e[0];
            return 'A' !== l && 'a' !== l ? null : ('a' === l ? (a = n + e[6], o = r + e[7]) : (a = e[6], o = e[7]), 0 === (i = e_(n, r, a, o, e[4], e[5], e[1], e[2], e[3])).length ? [[
                    'a' === e[0] ? 'l' : 'L',
                    e[6],
                    e[7]
                ]] : (i.forEach(function (e) {
                s.push([
                    'C',
                    e[2],
                    e[3],
                    e[4],
                    e[5],
                    e[6],
                    e[7]
                ]);
            }), s));
        }), this;
    }, l.prototype.unshort = function () {
        var e, t, n, r, i, a = this.segments;
        return this.iterate(function (o, s, l, u) {
            var c, d = o[0], _ = d.toUpperCase();
            s && ('T' === _ ? (c = 't' === d, 'Q' === (n = a[s - 1])[0] ? (e = n[1] - l, t = n[2] - u) : 'q' === n[0] ? (e = n[1] - n[3], t = n[2] - n[4]) : (e = 0, t = 0), r = -e, i = -t, c || (r += l, i += u), a[s] = [
                c ? 'q' : 'Q',
                r,
                i,
                o[1],
                o[2]
            ]) : 'S' === _ && (c = 's' === d, 'C' === (n = a[s - 1])[0] ? (e = n[3] - l, t = n[4] - u) : 'c' === n[0] ? (e = n[3] - n[5], t = n[4] - n[6]) : (e = 0, t = 0), r = -e, i = -t, c || (r += l, i += u), a[s] = [
                c ? 'c' : 'C',
                r,
                i,
                o[1],
                o[2],
                o[3],
                o[4]
            ]));
        }), this;
    };
    var ef = l, eh = {
            a: 7,
            c: 6,
            h: 1,
            l: 2,
            m: 2,
            q: 4,
            s: 4,
            t: 2,
            v: 1,
            z: 0
        }, ep = /([astvzqmhlc])([^astvzqmhlc]*)/gi, em = function (e) {
            var t = [];
            return e.replace(ep, function (e, n, r) {
                var i, a = n.toLowerCase();
                for (r = (i = r.match(eI)) ? i.map(Number) : [], 'm' === a && r.length > 2 && (t.push([n].concat(r.splice(0, 2))), a = 'l', n = 'm' === n ? 'l' : 'L'); r.length >= 0;) {
                    if (r.length === eh[a])
                        return r.unshift(n), t.push(r);
                    if (r.length < eh[a])
                        throw Error('malformed path data');
                    t.push([n].concat(r.splice(0, eh[a])));
                }
            }), t;
        }, eI = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi, eT = function (e, t, n, r, i, a, o, s) {
            return new u(e, t, n, r, i, a, o, s);
        };
    u.prototype = {
        constructor: u,
        init: function () {
            this.length = this.getArcLength([
                this.a.x,
                this.b.x,
                this.c.x,
                this.d.x
            ], [
                this.a.y,
                this.b.y,
                this.c.y,
                this.d.y
            ]);
        },
        getTotalLength: function () {
            return this.length;
        },
        getPointAtLength: function (e) {
            var t = _(e, this.length, this.getArcLength, [
                this.a.x,
                this.b.x,
                this.c.x,
                this.d.x
            ], [
                this.a.y,
                this.b.y,
                this.c.y,
                this.d.y
            ]);
            return this.getPoint([
                this.a.x,
                this.b.x,
                this.c.x,
                this.d.x
            ], [
                this.a.y,
                this.b.y,
                this.c.y,
                this.d.y
            ], t);
        },
        getTangentAtLength: function (e) {
            var t = _(e, this.length, this.getArcLength, [
                    this.a.x,
                    this.b.x,
                    this.c.x,
                    this.d.x
                ], [
                    this.a.y,
                    this.b.y,
                    this.c.y,
                    this.d.y
                ]), n = this.getDerivative([
                    this.a.x,
                    this.b.x,
                    this.c.x,
                    this.d.x
                ], [
                    this.a.y,
                    this.b.y,
                    this.c.y,
                    this.d.y
                ], t), r = Math.sqrt(n.x * n.x + n.y * n.y);
            return r > 0 ? {
                x: n.x / r,
                y: n.y / r
            } : {
                x: 0,
                y: 0
            };
        },
        getPropertiesAtLength: function (e) {
            var t, n = _(e, this.length, this.getArcLength, [
                    this.a.x,
                    this.b.x,
                    this.c.x,
                    this.d.x
                ], [
                    this.a.y,
                    this.b.y,
                    this.c.y,
                    this.d.y
                ]), r = this.getDerivative([
                    this.a.x,
                    this.b.x,
                    this.c.x,
                    this.d.x
                ], [
                    this.a.y,
                    this.b.y,
                    this.c.y,
                    this.d.y
                ], n), i = Math.sqrt(r.x * r.x + r.y * r.y);
            t = i > 0 ? {
                x: r.x / i,
                y: r.y / i
            } : {
                x: 0,
                y: 0
            };
            var a = this.getPoint([
                this.a.x,
                this.b.x,
                this.c.x,
                this.d.x
            ], [
                this.a.y,
                this.b.y,
                this.c.y,
                this.d.y
            ], n);
            return {
                x: a.x,
                y: a.y,
                tangentX: t.x,
                tangentY: t.y
            };
        }
    };
    var eg = [
            [],
            [],
            [
                -0.5773502691896257,
                0.5773502691896257
            ],
            [
                0,
                -0.7745966692414834,
                0.7745966692414834
            ],
            [
                -0.33998104358485626,
                0.33998104358485626,
                -0.8611363115940526,
                0.8611363115940526
            ],
            [
                0,
                -0.5384693101056831,
                0.5384693101056831,
                -0.906179845938664,
                0.906179845938664
            ],
            [
                0.6612093864662645,
                -0.6612093864662645,
                -0.2386191860831969,
                0.2386191860831969,
                -0.932469514203152,
                0.932469514203152
            ],
            [
                0,
                0.4058451513773972,
                -0.4058451513773972,
                -0.7415311855993945,
                0.7415311855993945,
                -0.9491079123427585,
                0.9491079123427585
            ],
            [
                -0.1834346424956498,
                0.1834346424956498,
                -0.525532409916329,
                0.525532409916329,
                -0.7966664774136267,
                0.7966664774136267,
                -0.9602898564975363,
                0.9602898564975363
            ],
            [
                0,
                -0.8360311073266358,
                0.8360311073266358,
                -0.9681602395076261,
                0.9681602395076261,
                -0.3242534234038089,
                0.3242534234038089,
                -0.6133714327005904,
                0.6133714327005904
            ],
            [
                -0.14887433898163122,
                0.14887433898163122,
                -0.4333953941292472,
                0.4333953941292472,
                -0.6794095682990244,
                0.6794095682990244,
                -0.8650633666889845,
                0.8650633666889845,
                -0.9739065285171717,
                0.9739065285171717
            ],
            [
                0,
                -0.26954315595234496,
                0.26954315595234496,
                -0.5190961292068118,
                0.5190961292068118,
                -0.7301520055740494,
                0.7301520055740494,
                -0.8870625997680953,
                0.8870625997680953,
                -0.978228658146057,
                0.978228658146057
            ],
            [
                -0.1252334085114689,
                0.1252334085114689,
                -0.3678314989981802,
                0.3678314989981802,
                -0.5873179542866175,
                0.5873179542866175,
                -0.7699026741943047,
                0.7699026741943047,
                -0.9041172563704749,
                0.9041172563704749,
                -0.9815606342467192,
                0.9815606342467192
            ],
            [
                0,
                -0.2304583159551348,
                0.2304583159551348,
                -0.44849275103644687,
                0.44849275103644687,
                -0.6423493394403402,
                0.6423493394403402,
                -0.8015780907333099,
                0.8015780907333099,
                -0.9175983992229779,
                0.9175983992229779,
                -0.9841830547185881,
                0.9841830547185881
            ],
            [
                -0.10805494870734367,
                0.10805494870734367,
                -0.31911236892788974,
                0.31911236892788974,
                -0.5152486363581541,
                0.5152486363581541,
                -0.6872929048116855,
                0.6872929048116855,
                -0.827201315069765,
                0.827201315069765,
                -0.9284348836635735,
                0.9284348836635735,
                -0.9862838086968123,
                0.9862838086968123
            ],
            [
                0,
                -0.20119409399743451,
                0.20119409399743451,
                -0.3941513470775634,
                0.3941513470775634,
                -0.5709721726085388,
                0.5709721726085388,
                -0.7244177313601701,
                0.7244177313601701,
                -0.8482065834104272,
                0.8482065834104272,
                -0.937273392400706,
                0.937273392400706,
                -0.9879925180204854,
                0.9879925180204854
            ],
            [
                -0.09501250983763744,
                0.09501250983763744,
                -0.2816035507792589,
                0.2816035507792589,
                -0.45801677765722737,
                0.45801677765722737,
                -0.6178762444026438,
                0.6178762444026438,
                -0.755404408355003,
                0.755404408355003,
                -0.8656312023878318,
                0.8656312023878318,
                -0.9445750230732326,
                0.9445750230732326,
                -0.9894009349916499,
                0.9894009349916499
            ],
            [
                0,
                -0.17848418149584785,
                0.17848418149584785,
                -0.3512317634538763,
                0.3512317634538763,
                -0.5126905370864769,
                0.5126905370864769,
                -0.6576711592166907,
                0.6576711592166907,
                -0.7815140038968014,
                0.7815140038968014,
                -0.8802391537269859,
                0.8802391537269859,
                -0.9506755217687678,
                0.9506755217687678,
                -0.9905754753144174,
                0.9905754753144174
            ],
            [
                -0.0847750130417353,
                0.0847750130417353,
                -0.2518862256915055,
                0.2518862256915055,
                -0.41175116146284263,
                0.41175116146284263,
                -0.5597708310739475,
                0.5597708310739475,
                -0.6916870430603532,
                0.6916870430603532,
                -0.8037049589725231,
                0.8037049589725231,
                -0.8926024664975557,
                0.8926024664975557,
                -0.9558239495713977,
                0.9558239495713977,
                -0.9915651684209309,
                0.9915651684209309
            ],
            [
                0,
                -0.16035864564022537,
                0.16035864564022537,
                -0.31656409996362983,
                0.31656409996362983,
                -0.46457074137596094,
                0.46457074137596094,
                -0.600545304661681,
                0.600545304661681,
                -0.7209661773352294,
                0.7209661773352294,
                -0.8227146565371428,
                0.8227146565371428,
                -0.9031559036148179,
                0.9031559036148179,
                -0.96020815213483,
                0.96020815213483,
                -0.9924068438435844,
                0.9924068438435844
            ],
            [
                -0.07652652113349734,
                0.07652652113349734,
                -0.22778585114164507,
                0.22778585114164507,
                -0.37370608871541955,
                0.37370608871541955,
                -0.5108670019508271,
                0.5108670019508271,
                -0.636053680726515,
                0.636053680726515,
                -0.7463319064601508,
                0.7463319064601508,
                -0.8391169718222188,
                0.8391169718222188,
                -0.912234428251326,
                0.912234428251326,
                -0.9639719272779138,
                0.9639719272779138,
                -0.9931285991850949,
                0.9931285991850949
            ],
            [
                0,
                -0.1455618541608951,
                0.1455618541608951,
                -0.2880213168024011,
                0.2880213168024011,
                -0.4243421202074388,
                0.4243421202074388,
                -0.5516188358872198,
                0.5516188358872198,
                -0.6671388041974123,
                0.6671388041974123,
                -0.7684399634756779,
                0.7684399634756779,
                -0.8533633645833173,
                0.8533633645833173,
                -0.9200993341504008,
                0.9200993341504008,
                -0.9672268385663063,
                0.9672268385663063,
                -0.9937521706203895,
                0.9937521706203895
            ],
            [
                -0.06973927331972223,
                0.06973927331972223,
                -0.20786042668822127,
                0.20786042668822127,
                -0.34193582089208424,
                0.34193582089208424,
                -0.469355837986757,
                0.469355837986757,
                -0.5876404035069116,
                0.5876404035069116,
                -0.6944872631866827,
                0.6944872631866827,
                -0.7878168059792081,
                0.7878168059792081,
                -0.8658125777203002,
                0.8658125777203002,
                -0.926956772187174,
                0.926956772187174,
                -0.9700604978354287,
                0.9700604978354287,
                -0.9942945854823992,
                0.9942945854823992
            ],
            [
                0,
                -0.1332568242984661,
                0.1332568242984661,
                -0.26413568097034495,
                0.26413568097034495,
                -0.3903010380302908,
                0.3903010380302908,
                -0.5095014778460075,
                0.5095014778460075,
                -0.6196098757636461,
                0.6196098757636461,
                -0.7186613631319502,
                0.7186613631319502,
                -0.8048884016188399,
                0.8048884016188399,
                -0.8767523582704416,
                0.8767523582704416,
                -0.9329710868260161,
                0.9329710868260161,
                -0.9725424712181152,
                0.9725424712181152,
                -0.9947693349975522,
                0.9947693349975522
            ],
            [
                -0.06405689286260563,
                0.06405689286260563,
                -0.1911188674736163,
                0.1911188674736163,
                -0.3150426796961634,
                0.3150426796961634,
                -0.4337935076260451,
                0.4337935076260451,
                -0.5454214713888396,
                0.5454214713888396,
                -0.6480936519369755,
                0.6480936519369755,
                -0.7401241915785544,
                0.7401241915785544,
                -0.820001985973903,
                0.820001985973903,
                -0.8864155270044011,
                0.8864155270044011,
                -0.9382745520027328,
                0.9382745520027328,
                -0.9747285559713095,
                0.9747285559713095,
                -0.9951872199970213,
                0.9951872199970213
            ]
        ], eS = [
            [],
            [],
            [
                1,
                1
            ],
            [
                0.8888888888888888,
                0.5555555555555556,
                0.5555555555555556
            ],
            [
                0.6521451548625461,
                0.6521451548625461,
                0.34785484513745385,
                0.34785484513745385
            ],
            [
                0.5688888888888889,
                0.47862867049936647,
                0.47862867049936647,
                0.23692688505618908,
                0.23692688505618908
            ],
            [
                0.3607615730481386,
                0.3607615730481386,
                0.46791393457269104,
                0.46791393457269104,
                0.17132449237917036,
                0.17132449237917036
            ],
            [
                0.4179591836734694,
                0.3818300505051189,
                0.3818300505051189,
                0.27970539148927664,
                0.27970539148927664,
                0.1294849661688697,
                0.1294849661688697
            ],
            [
                0.362683783378362,
                0.362683783378362,
                0.31370664587788727,
                0.31370664587788727,
                0.22238103445337448,
                0.22238103445337448,
                0.10122853629037626,
                0.10122853629037626
            ],
            [
                0.3302393550012598,
                0.1806481606948574,
                0.1806481606948574,
                0.08127438836157441,
                0.08127438836157441,
                0.31234707704000286,
                0.31234707704000286,
                0.26061069640293544,
                0.26061069640293544
            ],
            [
                0.29552422471475287,
                0.29552422471475287,
                0.26926671930999635,
                0.26926671930999635,
                0.21908636251598204,
                0.21908636251598204,
                0.1494513491505806,
                0.1494513491505806,
                0.06667134430868814,
                0.06667134430868814
            ],
            [
                0.2729250867779006,
                0.26280454451024665,
                0.26280454451024665,
                0.23319376459199048,
                0.23319376459199048,
                0.18629021092773426,
                0.18629021092773426,
                0.1255803694649046,
                0.1255803694649046,
                0.05566856711617366,
                0.05566856711617366
            ],
            [
                0.24914704581340277,
                0.24914704581340277,
                0.2334925365383548,
                0.2334925365383548,
                0.20316742672306592,
                0.20316742672306592,
                0.16007832854334622,
                0.16007832854334622,
                0.10693932599531843,
                0.10693932599531843,
                0.04717533638651183,
                0.04717533638651183
            ],
            [
                0.2325515532308739,
                0.22628318026289723,
                0.22628318026289723,
                0.2078160475368885,
                0.2078160475368885,
                0.17814598076194574,
                0.17814598076194574,
                0.13887351021978725,
                0.13887351021978725,
                0.09212149983772845,
                0.09212149983772845,
                0.04048400476531588,
                0.04048400476531588
            ],
            [
                0.2152638534631578,
                0.2152638534631578,
                0.2051984637212956,
                0.2051984637212956,
                0.18553839747793782,
                0.18553839747793782,
                0.15720316715819355,
                0.15720316715819355,
                0.12151857068790319,
                0.12151857068790319,
                0.08015808715976021,
                0.08015808715976021,
                0.03511946033175186,
                0.03511946033175186
            ],
            [
                0.2025782419255613,
                0.19843148532711158,
                0.19843148532711158,
                0.1861610000155622,
                0.1861610000155622,
                0.16626920581699392,
                0.16626920581699392,
                0.13957067792615432,
                0.13957067792615432,
                0.10715922046717194,
                0.10715922046717194,
                0.07036604748810812,
                0.07036604748810812,
                0.03075324199611727,
                0.03075324199611727
            ],
            [
                0.1894506104550685,
                0.1894506104550685,
                0.18260341504492358,
                0.18260341504492358,
                0.16915651939500254,
                0.16915651939500254,
                0.14959598881657674,
                0.14959598881657674,
                0.12462897125553388,
                0.12462897125553388,
                0.09515851168249279,
                0.09515851168249279,
                0.062253523938647894,
                0.062253523938647894,
                0.027152459411754096,
                0.027152459411754096
            ],
            [
                0.17944647035620653,
                0.17656270536699264,
                0.17656270536699264,
                0.16800410215645004,
                0.16800410215645004,
                0.15404576107681028,
                0.15404576107681028,
                0.13513636846852548,
                0.13513636846852548,
                0.11188384719340397,
                0.11188384719340397,
                0.08503614831717918,
                0.08503614831717918,
                0.0554595293739872,
                0.0554595293739872,
                0.02414830286854793,
                0.02414830286854793
            ],
            [
                0.1691423829631436,
                0.1691423829631436,
                0.16427648374583273,
                0.16427648374583273,
                0.15468467512626524,
                0.15468467512626524,
                0.14064291467065065,
                0.14064291467065065,
                0.12255520671147846,
                0.12255520671147846,
                0.10094204410628717,
                0.10094204410628717,
                0.07642573025488905,
                0.07642573025488905,
                0.0497145488949698,
                0.0497145488949698,
                0.02161601352648331,
                0.02161601352648331
            ],
            [
                0.1610544498487837,
                0.15896884339395434,
                0.15896884339395434,
                0.15276604206585967,
                0.15276604206585967,
                0.1426067021736066,
                0.1426067021736066,
                0.12875396253933621,
                0.12875396253933621,
                0.11156664554733399,
                0.11156664554733399,
                0.09149002162245,
                0.09149002162245,
                0.06904454273764123,
                0.06904454273764123,
                0.0448142267656996,
                0.0448142267656996,
                0.019461788229726478,
                0.019461788229726478
            ],
            [
                0.15275338713072584,
                0.15275338713072584,
                0.14917298647260374,
                0.14917298647260374,
                0.14209610931838204,
                0.14209610931838204,
                0.13168863844917664,
                0.13168863844917664,
                0.11819453196151841,
                0.11819453196151841,
                0.10193011981724044,
                0.10193011981724044,
                0.08327674157670475,
                0.08327674157670475,
                0.06267204833410907,
                0.06267204833410907,
                0.04060142980038694,
                0.04060142980038694,
                0.017614007139152118,
                0.017614007139152118
            ],
            [
                0.14608113364969041,
                0.14452440398997005,
                0.14452440398997005,
                0.13988739479107315,
                0.13988739479107315,
                0.13226893863333747,
                0.13226893863333747,
                0.12183141605372853,
                0.12183141605372853,
                0.10879729916714838,
                0.10879729916714838,
                0.09344442345603386,
                0.09344442345603386,
                0.0761001136283793,
                0.0761001136283793,
                0.057134425426857205,
                0.057134425426857205,
                0.036953789770852494,
                0.036953789770852494,
                0.016017228257774335,
                0.016017228257774335
            ],
            [
                0.13925187285563198,
                0.13925187285563198,
                0.13654149834601517,
                0.13654149834601517,
                0.13117350478706238,
                0.13117350478706238,
                0.12325237681051242,
                0.12325237681051242,
                0.11293229608053922,
                0.11293229608053922,
                0.10041414444288096,
                0.10041414444288096,
                0.08594160621706773,
                0.08594160621706773,
                0.06979646842452049,
                0.06979646842452049,
                0.052293335152683286,
                0.052293335152683286,
                0.03377490158481415,
                0.03377490158481415,
                0.0146279952982722,
                0.0146279952982722
            ],
            [
                0.13365457218610619,
                0.1324620394046966,
                0.1324620394046966,
                0.12890572218808216,
                0.12890572218808216,
                0.12304908430672953,
                0.12304908430672953,
                0.11499664022241136,
                0.11499664022241136,
                0.10489209146454141,
                0.10489209146454141,
                0.09291576606003515,
                0.09291576606003515,
                0.07928141177671895,
                0.07928141177671895,
                0.06423242140852585,
                0.06423242140852585,
                0.04803767173108467,
                0.04803767173108467,
                0.030988005856979445,
                0.030988005856979445,
                0.013411859487141771,
                0.013411859487141771
            ],
            [
                0.12793819534675216,
                0.12793819534675216,
                0.1258374563468283,
                0.1258374563468283,
                0.12167047292780339,
                0.12167047292780339,
                0.1155056680537256,
                0.1155056680537256,
                0.10744427011596563,
                0.10744427011596563,
                0.09761865210411388,
                0.09761865210411388,
                0.08619016153195327,
                0.08619016153195327,
                0.0733464814110803,
                0.0733464814110803,
                0.05929858491543678,
                0.05929858491543678,
                0.04427743881741981,
                0.04427743881741981,
                0.028531388628933663,
                0.028531388628933663,
                0.0123412297999872,
                0.0123412297999872
            ]
        ], eA = [
            [1],
            [
                1,
                1
            ],
            [
                1,
                2,
                1
            ],
            [
                1,
                3,
                3,
                1
            ]
        ], eN = 2 * Math.PI, ev = function (e, t, n, r, i, a, o, s, l) {
            var u, c, d, _, E, f, h, p, m, T, g, S, A, N, v, O, R, C, y, D, L, b, M, P = Math.sin(i * eN / 360), U = Math.cos(i * eN / 360), w = U * (e - s) / 2 + P * (t - l) / 2, x = -P * (e - s) / 2 + U * (t - l) / 2;
            if (0 === w && 0 === x || 0 === n || 0 === r)
                return [];
            n = Math.abs(n);
            var G = w * w / (n * n) + x * x / ((r = Math.abs(r)) * r);
            G > 1 && (n *= Math.sqrt(G), r *= Math.sqrt(G));
            var k = (u = e, c = t, d = s, _ = l, E = a, f = o, h = n, p = r, m = P, g = (T = U) * (u - d) / 2 + m * (c - _) / 2, S = -m * (u - d) / 2 + T * (c - _) / 2, A = h * h, N = p * p, v = g * g, (R = A * N - A * (O = S * S) - N * v) < 0 && (R = 0), R /= A * O + N * v, C = (R = Math.sqrt(R) * (E === f ? -1 : 1)) * h / p * S, y = -(R * p) / h * g, b = I(1, 0, D = (g - C) / h, L = (S - y) / p), M = I(D, L, (-g - C) / h, (-S - y) / p), 0 === f && M > 0 && (M -= eN), 1 === f && M < 0 && (M += eN), [
                    T * C - m * y + (u + d) / 2,
                    m * C + T * y + (c + _) / 2,
                    b,
                    M
                ]), B = [], F = k[2], V = k[3], H = Math.max(Math.ceil(Math.abs(V) / (eN / 4)), 1);
            V /= H;
            for (var Z = 0; Z < H; Z++)
                B.push(function (e, t) {
                    var n = 4 / 3 * Math.tan(t / 4), r = Math.cos(e), i = Math.sin(e), a = Math.cos(e + t), o = Math.sin(e + t);
                    return [
                        r,
                        i,
                        r - i * n,
                        i + r * n,
                        a + o * n,
                        o - a * n,
                        a,
                        o
                    ];
                }(F, V)), F += V;
            return B.map(function (e) {
                for (var t = 0; t < e.length; t += 2) {
                    var i = e[t + 0], a = e[t + 1];
                    i *= n;
                    var o = U * i - P * (a *= r), s = P * i + U * a;
                    e[t + 0] = o + k[0], e[t + 1] = s + k[1];
                }
                return e;
            });
        }, eO = function (e, t, n, r, i, a, o, s, l) {
            return new T(e, t, n, r, i, a, o, s, l);
        };
    T.prototype = {
        constructor: T,
        init: function () {
        },
        getTotalLength: function () {
            return this.length;
        },
        getPointAtLength: function (e) {
            e < 0 ? e = 0 : e > this.length && (e = this.length);
            for (var t = this.partialLengths.length - 1; this.partialLengths[t] >= e && this.partialLengths[t] > 0;)
                t--;
            t < this.partialLengths.length - 1 && t++;
            for (var n = 0, r = 0; r < t; r++)
                n += this.partialLengths[r];
            return this.curves[t].getPointAtLength(e - n);
        },
        getTangentAtLength: function (e) {
            e < 0 ? e = 0 : e > this.length && (e = this.length);
            for (var t = this.partialLengths.length - 1; this.partialLengths[t] >= e && this.partialLengths[t] > 0;)
                t--;
            t < this.partialLengths.length - 1 && t++;
            for (var n = 0, r = 0; r < t; r++)
                n += this.partialLengths[r];
            return this.curves[t].getTangentAtLength(e - n);
        },
        getPropertiesAtLength: function (e) {
            var t = this.getTangentAtLength(e), n = this.getPointAtLength(e);
            return {
                x: n.x,
                y: n.y,
                tangentX: t.x,
                tangentY: t.y
            };
        }
    };
    var eR = function (e, t, n, r) {
        return new g(e, t, n, r);
    };
    g.prototype.getTotalLength = function () {
        return Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2));
    }, g.prototype.getPointAtLength = function (e) {
        var t = e / Math.sqrt(Math.pow(this.x0 - this.x1, 2) + Math.pow(this.y0 - this.y1, 2)), n = (this.x1 - this.x0) * t, r = (this.y1 - this.y0) * t;
        return {
            x: this.x0 + n,
            y: this.y0 + r
        };
    }, g.prototype.getTangentAtLength = function () {
        var e = Math.sqrt((this.x1 - this.x0) * (this.x1 - this.x0) + (this.y1 - this.y0) * (this.y1 - this.y0));
        return {
            x: (this.x1 - this.x0) / e,
            y: (this.y1 - this.y0) / e
        };
    }, g.prototype.getPropertiesAtLength = function (e) {
        var t = this.getPointAtLength(e), n = this.getTangentAtLength();
        return {
            x: t.x,
            y: t.y,
            tangentX: n.x,
            tangentY: n.y
        };
    };
    var eC = function (e) {
            function t(e) {
                if (!e)
                    return null;
                for (var a, o = em(e), s = [
                            0,
                            0
                        ], l = [
                            0,
                            0
                        ], u = 0; u < o.length; u++)
                    'M' === o[u][0] ? (s = [
                        o[u][1],
                        o[u][2]
                    ], i.push(null)) : 'm' === o[u][0] ? (s = [
                        o[u][1] + s[0],
                        o[u][2] + s[1]
                    ], i.push(null)) : 'L' === o[u][0] ? (n += Math.sqrt(Math.pow(s[0] - o[u][1], 2) + Math.pow(s[1] - o[u][2], 2)), i.push(new eR(s[0], o[u][1], s[1], o[u][2])), s = [
                        o[u][1],
                        o[u][2]
                    ]) : 'l' === o[u][0] ? (n += Math.sqrt(Math.pow(o[u][1], 2) + Math.pow(o[u][2], 2)), i.push(new eR(s[0], o[u][1] + s[0], s[1], o[u][2] + s[1])), s = [
                        o[u][1] + s[0],
                        o[u][2] + s[1]
                    ]) : 'H' === o[u][0] ? (n += Math.abs(s[0] - o[u][1]), i.push(new eR(s[0], o[u][1], s[1], s[1])), s[0] = o[u][1]) : 'h' === o[u][0] ? (n += Math.abs(o[u][1]), i.push(new eR(s[0], s[0] + o[u][1], s[1], s[1])), s[0] = o[u][1] + s[0]) : 'V' === o[u][0] ? (n += Math.abs(s[1] - o[u][1]), i.push(new eR(s[0], s[0], s[1], o[u][1])), s[1] = o[u][1]) : 'v' === o[u][0] ? (n += Math.abs(o[u][1]), i.push(new eR(s[0], s[0], s[1], s[1] + o[u][1])), s[1] = o[u][1] + s[1]) : 'z' === o[u][0] || 'Z' === o[u][0] ? (n += Math.sqrt(Math.pow(o[0][1] - s[0], 2) + Math.pow(o[0][2] - s[1], 2)), i.push(new eR(s[0], o[0][1], s[1], o[0][2])), s = [
                        o[0][1],
                        o[0][2]
                    ]) : 'C' === o[u][0] ? (a = new eT(s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4], o[u][5], o[u][6]), n += a.getTotalLength(), s = [
                        o[u][5],
                        o[u][6]
                    ], i.push(a)) : 'c' === o[u][0] ? (a = new eT(s[0], s[1], s[0] + o[u][1], s[1] + o[u][2], s[0] + o[u][3], s[1] + o[u][4], s[0] + o[u][5], s[1] + o[u][6]), n += a.getTotalLength(), s = [
                        o[u][5] + s[0],
                        o[u][6] + s[1]
                    ], i.push(a)) : 'S' === o[u][0] ? (a = u > 0 && [
                        'C',
                        'c',
                        'S',
                        's'
                    ].indexOf(o[u - 1][0]) > -1 ? new eT(s[0], s[1], 2 * s[0] - o[u - 1][o[u - 1].length - 4], 2 * s[1] - o[u - 1][o[u - 1].length - 3], o[u][1], o[u][2], o[u][3], o[u][4]) : new eT(s[0], s[1], s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4]), n += a.getTotalLength(), s = [
                        o[u][3],
                        o[u][4]
                    ], i.push(a)) : 's' === o[u][0] ? (a = u > 0 && [
                        'C',
                        'c',
                        'S',
                        's'
                    ].indexOf(o[u - 1][0]) > -1 ? new eT(s[0], s[1], s[0] + a.d.x - a.c.x, s[1] + a.d.y - a.c.y, s[0] + o[u][1], s[1] + o[u][2], s[0] + o[u][3], s[1] + o[u][4]) : new eT(s[0], s[1], s[0], s[1], s[0] + o[u][1], s[1] + o[u][2], s[0] + o[u][3], s[1] + o[u][4]), n += a.getTotalLength(), s = [
                        o[u][3] + s[0],
                        o[u][4] + s[1]
                    ], i.push(a)) : 'Q' === o[u][0] ? (a = new eT(s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4]), n += a.getTotalLength(), i.push(a), s = [
                        o[u][3],
                        o[u][4]
                    ], l = [
                        o[u][1],
                        o[u][2]
                    ]) : 'q' === o[u][0] ? (a = new eT(s[0], s[1], s[0] + o[u][1], s[1] + o[u][2], s[0] + o[u][3], s[1] + o[u][4]), n += a.getTotalLength(), l = [
                        s[0] + o[u][1],
                        s[1] + o[u][2]
                    ], s = [
                        o[u][3] + s[0],
                        o[u][4] + s[1]
                    ], i.push(a)) : 'T' === o[u][0] ? (a = u > 0 && [
                        'Q',
                        'q',
                        'T',
                        't'
                    ].indexOf(o[u - 1][0]) > -1 ? new eT(s[0], s[1], 2 * s[0] - l[0], 2 * s[1] - l[1], o[u][1], o[u][2]) : new eR(s[0], o[u][1], s[1], o[u][2]), i.push(a), n += a.getTotalLength(), l = [
                        2 * s[0] - l[0],
                        2 * s[1] - l[1]
                    ], s = [
                        o[u][1],
                        o[u][2]
                    ]) : 't' === o[u][0] ? (a = u > 0 && [
                        'Q',
                        'q',
                        'T',
                        't'
                    ].indexOf(o[u - 1][0]) > -1 ? new eT(s[0], s[1], 2 * s[0] - l[0], 2 * s[1] - l[1], s[0] + o[u][1], s[1] + o[u][2]) : new eR(s[0], s[0] + o[u][1], s[1], s[1] + o[u][2]), n += a.getTotalLength(), l = [
                        2 * s[0] - l[0],
                        2 * s[1] - l[1]
                    ], s = [
                        o[u][1] + s[0],
                        o[u][2] + s[0]
                    ], i.push(a)) : 'A' === o[u][0] ? (a = new eO(s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4], o[u][5], o[u][6], o[u][7]), n += a.getTotalLength(), s = [
                        o[u][6],
                        o[u][7]
                    ], i.push(a)) : 'a' === o[u][0] && (a = new eO(s[0], s[1], o[u][1], o[u][2], o[u][3], o[u][4], o[u][5], s[0] + o[u][6], s[1] + o[u][7]), n += a.getTotalLength(), s = [
                        s[0] + o[u][6],
                        s[1] + o[u][7]
                    ], i.push(a)), r.push(n);
                return t;
            }
            var n = 0, r = [], i = [];
            t.getTotalLength = function () {
                return n;
            }, t.getPointAtLength = function (e) {
                var t = a(e);
                return i[t.i].getPointAtLength(t.fraction);
            }, t.getTangentAtLength = function (e) {
                var t = a(e);
                return i[t.i].getTangentAtLength(t.fraction);
            }, t.getPropertiesAtLength = function (e) {
                var t = a(e);
                return i[t.i].getPropertiesAtLength(t.fraction);
            };
            var a = function (e) {
                e < 0 ? e = 0 : e > n && (e = n);
                for (var t = r.length - 1; r[t] >= e && r[t] > 0;)
                    t--;
                return {
                    fraction: e - r[++t - 1],
                    i: t
                };
            };
            return t(e);
        }, ey = 'All shapes must be supplied as arrays of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).\nExample valid ways of supplying a shape would be:\n[[0, 0], [10, 0], [10, 10]]\n"M0,0 L10,0 L10,10Z"\n', eD = 'flubber.all() expects two arrays of equal length as arguments. Each element in both arrays should be an array of [x, y] points or an SVG path string (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d).', eL = function (e, t) {
            for (var n, r, i, a = e.length, o = 1 / 0, s = 0; s < a; s++)
                !function (i) {
                    r = 0, t.forEach(function (t, n) {
                        var o = S(e[(i + n) % a], t);
                        r += o * o;
                    }), r < o && (o = r, n = i);
                }(s);
            n && (i = e.splice(0, n), e.splice.apply(e, [
                e.length,
                0
            ].concat(i)));
        }, eb = M;
    M.deviation = function (e, t, n, r) {
        var i = t && t.length, a = i ? t[0] * n : e.length, o = Math.abs(K(e, 0, a, n));
        if (i)
            for (var s = 0, l = t.length; s < l; s++) {
                var u = t[s] * n, c = s < l - 1 ? t[s + 1] * n : e.length;
                o -= Math.abs(K(e, u, c, n));
            }
        var d = 0;
        for (s = 0; s < r.length; s += 3) {
            var _ = r[s] * n, E = r[s + 1] * n, f = r[s + 2] * n;
            d += Math.abs((e[_] - e[f]) * (e[E + 1] - e[_ + 1]) - (e[_] - e[E]) * (e[f + 1] - e[_ + 1]));
        }
        return 0 === o && 0 === d ? 0 : Math.abs((d - o) / o);
    }, M.flatten = function (e) {
        for (var t = e[0][0].length, n = {
                    vertices: [],
                    holes: [],
                    dimensions: t
                }, r = 0, i = 0; i < e.length; i++) {
            for (var a = 0; a < e[i].length; a++)
                for (var o = 0; o < t; o++)
                    n.vertices.push(e[i][a][o]);
            i > 0 && (r += e[i - 1].length, n.holes.push(r));
        }
        return n;
    };
    var eM = function (e) {
            return e;
        }, eP = function (e) {
            if (null == e)
                return eM;
            var t, n, r = e.scale[0], i = e.scale[1], a = e.translate[0], o = e.translate[1];
            return function (e, s) {
                s || (t = n = 0);
                var l = 2, u = e.length, c = Array(u);
                for (c[0] = (t += e[0]) * r + a, c[1] = (n += e[1]) * i + o; l < u;)
                    c[l] = e[l], ++l;
                return c;
            };
        }, eU = function (e, t) {
            for (var n, r = e.length, i = r - t; i < --r;)
                n = e[i], e[i++] = e[r], e[r] = n;
        }, ew = function (e, t) {
            return 'GeometryCollection' === t.type ? {
                type: 'FeatureCollection',
                features: t.geometries.map(function (t) {
                    return z(e, t);
                })
            } : z(e, t);
        }, ex = function (e, t) {
            function n(e, t) {
                for (var n in e) {
                    var i = e[n];
                    delete t[i.start], delete i.start, delete i.end, i.forEach(function (e) {
                        r[e < 0 ? ~e : e] = 1;
                    }), o.push(i);
                }
            }
            var r = {}, i = {}, a = {}, o = [], s = -1;
            return t.forEach(function (n, r) {
                var i, a = e.arcs[n < 0 ? ~n : n];
                !(a.length < 3) || a[1][0] || a[1][1] || (i = t[++s], t[s] = n, t[r] = i);
            }), t.forEach(function (t) {
                var n, r, o, s, l, u, c = (n = t, s = (o = e.arcs[n < 0 ? ~n : n])[0], e.transform ? (r = [
                        0,
                        0
                    ], o.forEach(function (e) {
                        r[0] += e[0], r[1] += e[1];
                    })) : r = o[o.length - 1], n < 0 ? [
                        r,
                        s
                    ] : [
                        s,
                        r
                    ]), d = c[0], _ = c[1];
                if (l = a[d]) {
                    if (delete a[l.end], l.push(t), l.end = _, u = i[_]) {
                        delete i[u.start];
                        var E = u === l ? l : l.concat(u);
                        i[E.start = l.start] = a[E.end = u.end] = E;
                    } else
                        i[l.start] = a[l.end] = l;
                } else if (l = i[_]) {
                    if (delete i[l.start], l.unshift(t), l.start = d, u = a[d]) {
                        delete a[u.end];
                        var f = u === l ? l : u.concat(l);
                        i[f.start = u.start] = a[f.end = l.end] = f;
                    } else
                        i[l.start] = a[l.end] = l;
                } else
                    i[(l = [t]).start = d] = a[l.end = _] = l;
            }), n(a, i), n(i, a), t.forEach(function (e) {
                r[e < 0 ? ~e : e] || o.push([e]);
            }), o;
        }, eG = function (e, t) {
            for (var n = 0, r = e.length; n < r;) {
                var i = n + r >>> 1;
                e[i] < t ? n = i + 1 : r = i;
            }
            return n;
        }, ek = function (e) {
            function t(e, t) {
                e.forEach(function (e) {
                    e < 0 && (e = ~e);
                    var n = r[e];
                    n ? n.push(t) : r[e] = [t];
                });
            }
            function n(e, n) {
                e.forEach(function (e) {
                    t(e, n);
                });
            }
            var r = {}, i = e.map(function () {
                    return [];
                }), a = {
                    LineString: t,
                    MultiLineString: n,
                    Polygon: n,
                    MultiPolygon: function (e, t) {
                        e.forEach(function (e) {
                            n(e, t);
                        });
                    }
                };
            for (var o in (e.forEach(function e(t, n) {
                    'GeometryCollection' === t.type ? t.geometries.forEach(function (t) {
                        e(t, n);
                    }) : t.type in a && a[t.type](t.arcs, n);
                }), r))
                for (var s = r[o], l = s.length, u = 0; u < l; ++u)
                    for (var c = u + 1; c < l; ++c) {
                        var d, _ = s[u], E = s[c];
                        (d = i[_])[o = eG(d, E)] !== E && d.splice(o, 0, E), (d = i[E])[o = eG(d, _)] !== _ && d.splice(o, 0, _);
                    }
            return i;
        }, eB = function (e, t) {
            return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
        }, eF = function (e) {
            var t;
            return 1 === e.length && (t = e, e = function (e, n) {
                return eB(t(e), n);
            }), {
                left: function (t, n, r, i) {
                    for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                        var a = r + i >>> 1;
                        0 > e(t[a], n) ? r = a + 1 : i = a;
                    }
                    return r;
                },
                right: function (t, n, r, i) {
                    for (null == r && (r = 0), null == i && (i = t.length); r < i;) {
                        var a = r + i >>> 1;
                        e(t[a], n) > 0 ? i = a : r = a + 1;
                    }
                    return r;
                }
            };
        }, eV = (eF(eB).right, function (e, t) {
            var n, r, i, a;
            return function (e, t) {
                for (var n = e.objects.triangles.geometries, r = eF(function (e) {
                            return e.area;
                        }).left; n.length > t;)
                    !function () {
                        var t = n[0], i = ek(n)[0][0], a = n[i], o = function (e, t) {
                                function n(e) {
                                    e.forEach(function (t) {
                                        t.forEach(function (t) {
                                            (i[t = t < 0 ? ~t : t] || (i[t] = [])).push(e);
                                        });
                                    }), a.push(e);
                                }
                                function r(t) {
                                    return function (e) {
                                        for (var t, n = -1, r = e.length, i = e[r - 1], a = 0; ++n < r;)
                                            t = i, i = e[n], a += t[0] * i[1] - t[1] * i[0];
                                        return Math.abs(a);
                                    }(q(e, {
                                        type: 'Polygon',
                                        arcs: [t]
                                    }).coordinates[0]);
                                }
                                var i = {}, a = [], o = [];
                                return t.forEach(function e(t) {
                                    switch (t.type) {
                                    case 'GeometryCollection':
                                        t.geometries.forEach(e);
                                        break;
                                    case 'Polygon':
                                        n(t.arcs);
                                        break;
                                    case 'MultiPolygon':
                                        t.arcs.forEach(n);
                                    }
                                }), a.forEach(function (e) {
                                    if (!e._) {
                                        var t = [], n = [e];
                                        for (e._ = 1, o.push(t); e = n.pop();)
                                            t.push(e), e.forEach(function (e) {
                                                e.forEach(function (e) {
                                                    i[e < 0 ? ~e : e].forEach(function (e) {
                                                        e._ || (e._ = 1, n.push(e));
                                                    });
                                                });
                                            });
                                    }
                                }), a.forEach(function (e) {
                                    delete e._;
                                }), {
                                    type: 'MultiPolygon',
                                    arcs: o.map(function (t) {
                                        var n, a = [];
                                        if (t.forEach(function (e) {
                                                e.forEach(function (e) {
                                                    e.forEach(function (e) {
                                                        i[e < 0 ? ~e : e].length < 2 && a.push(e);
                                                    });
                                                });
                                            }), (n = (a = ex(e, a)).length) > 1)
                                            for (var o, s, l = 1, u = r(a[0]); l < n; ++l)
                                                (o = r(a[l])) > u && (s = a[0], a[0] = a[l], a[l] = s, u = o);
                                        return a;
                                    })
                                };
                            }(e, [
                                t,
                                a
                            ]);
                        o.area = t.area + a.area, o.type = 'Polygon', o.arcs = o.arcs[0], n.splice(i, 1), n.shift(), n.splice(r(n, o.area), 0, o);
                    }();
                if (t > n.length)
                    throw RangeError('Can\'t collapse topology into ' + t + ' pieces.');
                return ew(e, e.objects.triangles).features.map(function (e) {
                    return e.geometry.coordinates[0].pop(), e.geometry.coordinates[0];
                });
            }((n = function (e) {
                for (var t = eb(e.reduce(function (e, t) {
                            return e.concat([t[0]], [t[1]]);
                        }, [])), n = [], r = 0, i = t.length; r < i; r += 3)
                    n.push([
                        [
                            t[r],
                            t[r + 1]
                        ],
                        [
                            t[r + 1],
                            t[r + 2]
                        ],
                        [
                            t[r + 2],
                            t[r]
                        ]
                    ]);
                return n;
            }(e), r = e, i = {}, a = {
                type: 'Topology',
                objects: {
                    triangles: {
                        type: 'GeometryCollection',
                        geometries: []
                    }
                },
                arcs: []
            }, n.forEach(function (e) {
                var t = [];
                e.forEach(function (e, n) {
                    var o = e[0] < e[1] ? e.join(',') : e[1] + ',' + e[0], s = e.map(function (e) {
                            return r[e];
                        });
                    o in i ? t.push(~i[o]) : (t.push(i[o] = a.arcs.length), a.arcs.push(s));
                }), a.objects.triangles.geometries.push({
                    type: 'Polygon',
                    area: Math.abs(et(e.map(function (e) {
                        return r[e[0]];
                    }))),
                    arcs: [t]
                });
            }), a.objects.triangles.geometries.sort(function (e, t) {
                return e.area - t.area;
            }), a), t);
        }), eH = function (e, t) {
            if (e.length > 8)
                return e.map(function (e, t) {
                    return t;
                });
            var n, r, i, a, o, s = e.map(function (e) {
                    return t.map(function (t) {
                        var n, r, i;
                        return n = e, r = t, (i = S(O(n), O(r))) * i;
                    });
                });
            return n = e, r = 0, i = s, a = 1 / 0, function e(t, n, r) {
                void 0 === n && (n = []), void 0 === r && (r = 0);
                for (var s = 0; s < t.length; s++) {
                    var l = t.splice(s, 1), u = i[l[0]][n.length];
                    r + u < a && (t.length ? e(t.slice(), n.concat(l), r + u) : (a = r + u, o = n.concat(l))), t.length && t.splice(s, 0, l[0]);
                }
            }(o = n.map(function (e, t) {
                return t;
            })), o;
        };
    e.interpolate = function (e, t, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var a = b(L(e, r), L(t, r), i);
        return i && ('string' == typeof e || 'string' == typeof t) ? function (n) {
            return n < 0.0001 && 'string' == typeof e ? e : 1 - n < 0.0001 && 'string' == typeof t ? t : a(n);
        } : a;
    }, e.separate = Q, e.combine = function (e, t, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var a = n.single;
        void 0 === a && (a = !1);
        var o = Q(t, e, {
            maxSegmentLength: r,
            string: i,
            single: a
        });
        return a ? function (e) {
            return o(1 - e);
        } : o.map(function (e) {
            return function (t) {
                return e(1 - t);
            };
        });
    }, e.interpolateAll = function (e, t, n) {
        void 0 === n && (n = {});
        var r = n.maxSegmentLength;
        void 0 === r && (r = 10);
        var i = n.string;
        void 0 === i && (i = !0);
        var a = n.single;
        if (void 0 === a && (a = !1), !Array.isArray(e) || !Array.isArray(t) || e.length !== t.length || !e.length)
            throw TypeError(eD);
        var o, s, l = function (e) {
                return L(e, r);
            }, u = e.map(l), c = t.map(l);
        return a ? (e.every(function (e) {
            return 'string' == typeof e;
        }) && (o = e.slice(0)), t.every(function (e) {
            return 'string' == typeof e;
        }) && (s = t.slice(0))) : (o = e.slice(0), s = t.slice(0)), X(u, c, {
            string: i,
            single: a,
            t0: o,
            t1: s,
            match: !1
        });
    }, e.splitPathString = function (e) {
        return C(R(e));
    }, e.toPathString = y, e.fromCircle = $, e.toCircle = function (e, t, n, r, i) {
        var a = $(t, n, r, e, i);
        return function (e) {
            return a(1 - e);
        };
    }, e.fromRect = J, e.toRect = function (e, t, n, r, i, a) {
        var o = J(t, n, r, i, e, a);
        return function (e) {
            return o(1 - e);
        };
    }, Object.defineProperty(e, '__esModule', { value: !0 });
}(t);
