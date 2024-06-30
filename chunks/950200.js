if (!t)
    var t = {
        map: function (e, t) {
            var n = {};
            return t ? e.map(function (e, r) {
                return n.index = r, t.call(n, e);
            }) : e.slice();
        },
        naturalOrder: function (e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
        },
        sum: function (e, t) {
            var n = {};
            return e.reduce(t ? function (e, r, i) {
                return n.index = i, e + t.call(n, r);
            } : function (e, t) {
                return e + t;
            }, 0);
        },
        max: function (e, n) {
            return Math.max.apply(null, n ? t.map(e, n) : e);
        }
    };
var n = function () {
    var e = 3;
    function n(e, t, n) {
        return (e << 10) + (t << 5) + n;
    }
    function r(e) {
        var t = [], n = !1;
        function r() {
            t.sort(e), n = !0;
        }
        return {
            push: function (e) {
                t.push(e), n = !1;
            },
            peek: function (e) {
                return !n && r(), void 0 === e && (e = t.length - 1), t[e];
            },
            pop: function () {
                return !n && r(), t.pop();
            },
            size: function () {
                return t.length;
            },
            map: function (e) {
                return t.map(e);
            },
            debug: function () {
                return !n && r(), t;
            }
        };
    }
    function i(e, t, n, r, i, a, o) {
        this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = r, this.b1 = i, this.b2 = a, this.histo = o;
    }
    function a() {
        this.vboxes = new r(function (e, n) {
            return t.naturalOrder(e.vbox.count() * e.vbox.volume(), n.vbox.count() * n.vbox.volume());
        });
    }
    return i.prototype = {
        volume: function (e) {
            return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume;
        },
        count: function (e) {
            var t = this.histo;
            if (!this._count_set || e) {
                var r, i, a, o = 0;
                for (r = this.r1; r <= this.r2; r++)
                    for (i = this.g1; i <= this.g2; i++)
                        for (a = this.b1; a <= this.b2; a++)
                            o += t[n(r, i, a)] || 0;
                this._count = o, this._count_set = !0;
            }
            return this._count;
        },
        copy: function () {
            return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo);
        },
        avg: function (e) {
            var t = this.histo;
            if (!this._avg || e) {
                var r, i, a, o, s = 0, l = 8, u = 0, c = 0, d = 0;
                for (i = this.r1; i <= this.r2; i++)
                    for (a = this.g1; a <= this.g2; a++)
                        for (o = this.b1; o <= this.b2; o++)
                            s += r = t[n(i, a, o)] || 0, u += r * (i + 0.5) * l, c += r * (a + 0.5) * l, d += r * (o + 0.5) * l;
                s ? this._avg = [
                    ~~(u / s),
                    ~~(c / s),
                    ~~(d / s)
                ] : this._avg = [
                    ~~(l * (this.r1 + this.r2 + 1) / 2),
                    ~~(l * (this.g1 + this.g2 + 1) / 2),
                    ~~(l * (this.b1 + this.b2 + 1) / 2)
                ];
            }
            return this._avg;
        },
        contains: function (t) {
            var n = t[0] >> e;
            return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2;
        }
    }, a.prototype = {
        push: function (e) {
            this.vboxes.push({
                vbox: e,
                color: e.avg()
            });
        },
        palette: function () {
            return this.vboxes.map(function (e) {
                return e.color;
            });
        },
        size: function () {
            return this.vboxes.size();
        },
        map: function (e) {
            for (var t = this.vboxes, n = 0; n < t.size(); n++)
                if (t.peek(n).vbox.contains(e))
                    return t.peek(n).color;
            return this.nearest(e);
        },
        nearest: function (e) {
            for (var t, n, r, i = this.vboxes, a = 0; a < i.size(); a++)
                ((n = Math.sqrt(Math.pow(e[0] - i.peek(a).color[0], 2) + Math.pow(e[1] - i.peek(a).color[1], 2) + Math.pow(e[2] - i.peek(a).color[2], 2))) < t || void 0 === t) && (t = n, r = i.peek(a).color);
            return r;
        },
        forcebw: function () {
            var e = this.vboxes;
            e.sort(function (e, n) {
                return t.naturalOrder(t.sum(e.color), t.sum(n.color));
            });
            var n = e[0].color;
            n[0] < 5 && n[1] < 5 && n[2] < 5 && (e[0].color = [
                0,
                0,
                0
            ]);
            var r = e.length - 1, i = e[r].color;
            i[0] > 251 && i[1] > 251 && i[2] > 251 && (e[r].color = [
                255,
                255,
                255
            ]);
        }
    }, {
        quantize: function (o, s) {
            if (!o.length || s < 2 || s > 256)
                return !1;
            var l, u, c, d, _, E, f, h, p, m, I, T, g, S, A, N, v = (l = o, _ = Array(32768), l.forEach(function (t) {
                    c = t[0] >> e, d = t[1] >> e, _[u = n(c, d, t[2] >> e)] = (_[u] || 0) + 1;
                }), _), O = 0;
            v.forEach(function () {
                O++;
            });
            var R = (E = o, f = v, I = 1000000, T = 0, g = 1000000, S = 0, A = 1000000, N = 0, E.forEach(function (t) {
                    h = t[0] >> e, p = t[1] >> e, m = t[2] >> e, h < I ? I = h : h > T && (T = h), p < g ? g = p : p > S && (S = p), m < A ? A = m : m > N && (N = m);
                }), new i(I, T, g, S, A, N, f)), C = new r(function (e, n) {
                    return t.naturalOrder(e.count(), n.count());
                });
            function y(e, r) {
                for (var i, a = 1, o = 0; o < 1000;) {
                    if (!(i = e.pop()).count()) {
                        e.push(i), o++;
                        continue;
                    }
                    var s = function (e, r) {
                            if (r.count()) {
                                var i = r.r2 - r.r1 + 1, a = r.g2 - r.g1 + 1, o = r.b2 - r.b1 + 1, s = t.max([
                                        i,
                                        a,
                                        o
                                    ]);
                                if (1 == r.count())
                                    return [r.copy()];
                                var l, u, c, d, _, E = 0, f = [], h = [];
                                if (s == i)
                                    for (l = r.r1; l <= r.r2; l++) {
                                        for (d = 0, u = r.g1; u <= r.g2; u++)
                                            for (c = r.b1; c <= r.b2; c++)
                                                d += e[_ = n(l, u, c)] || 0;
                                        E += d, f[l] = E;
                                    }
                                else if (s == a)
                                    for (l = r.g1; l <= r.g2; l++) {
                                        for (d = 0, u = r.r1; u <= r.r2; u++)
                                            for (c = r.b1; c <= r.b2; c++)
                                                d += e[_ = n(u, l, c)] || 0;
                                        E += d, f[l] = E;
                                    }
                                else
                                    for (l = r.b1; l <= r.b2; l++) {
                                        for (d = 0, u = r.r1; u <= r.r2; u++)
                                            for (c = r.g1; c <= r.g2; c++)
                                                d += e[_ = n(u, c, l)] || 0;
                                        E += d, f[l] = E;
                                    }
                                return f.forEach(function (e, t) {
                                    h[t] = E - e;
                                }), p(s == i ? 'r' : s == a ? 'g' : 'b');
                            }
                            function p(e) {
                                var t, n, i, a, o, s = e + '1', u = e + '2', c = 0;
                                for (l = r[s]; l <= r[u]; l++)
                                    if (f[l] > E / 2) {
                                        for (i = r.copy(), a = r.copy(), t = l - r[s], o = t <= (n = r[u] - l) ? Math.min(r[u] - 1, ~~(l + n / 2)) : Math.max(r[s], ~~(l - 1 - t / 2)); !f[o];)
                                            o++;
                                        for (c = h[o]; !c && f[o - 1];)
                                            c = h[--o];
                                        return i[u] = o, a[s] = i[u] + 1, [
                                            i,
                                            a
                                        ];
                                    }
                            }
                        }(v, i), l = s[0], u = s[1];
                    if (!l)
                        return;
                    if (e.push(l), u && (e.push(u), a++), a >= r || o++ > 1000)
                        return;
                }
            }
            C.push(R), y(C, 0.75 * s);
            for (var D = new r(function (e, n) {
                    return t.naturalOrder(e.count() * e.volume(), n.count() * n.volume());
                }); C.size();)
                D.push(C.pop());
            y(D, s - D.size());
            for (var L = new a(); D.size();)
                L.push(D.pop());
            return L;
        }
    };
}();
e.exports = n.quantize;
