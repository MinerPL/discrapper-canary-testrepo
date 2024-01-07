(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["22184"], {
        78349: function(t, n, r) {
            "use strict";
            r("424973"), t.exports.parse = function(t) {
                var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var r = null,
                    e = [];
                n[2] && (r = (o = n[2].split("-")).shift(), e = o);
                var i = [];
                n[5] && (i = n[5].split("-")).shift();
                var u = [];
                if (n[6]) {
                    (o = n[6].split("-")).shift();
                    for (var o, s, a = []; o.length;) {
                        var c = o.shift();
                        1 === c.length ? s ? (u.push({
                            singleton: s,
                            extension: a
                        }), s = c, a = []) : s = c : a.push(c)
                    }
                    u.push({
                        singleton: s,
                        extension: a
                    })
                }
                var f = [];
                n[7] && ((f = n[7].split("-")).shift(), f.shift());
                var h = [];
                return n[8] && (h = n[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: r,
                            extlang: e
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: i,
                        extension: u,
                        privateuse: f
                    },
                    privateuse: h,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        717837: function(t, n, r) {
            "use strict";
            t.exports = function(t) {
                return (t = String(t || ""), u.test(t)) ? "rtl" : o.test(t) ? "ltr" : "neutral"
            };
            var e = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                u = RegExp("^[^" + i + "]*[" + e + "]"),
                o = RegExp("^[^" + e + "]*[" + i + "]")
        },
        448105: function(t, n, r) {
            "use strict";
            t.exports = function(t, n) {
                var r = n.length,
                    e = t.length;
                if (e > r) return !1;
                if (e === r) return t === n;
                t: for (var i = 0, u = 0; i < e; i++) {
                    for (var o = t.charCodeAt(i); u < r;)
                        if (n.charCodeAt(u++) === o) continue t;
                    return !1
                }
                return !0
            }
        },
        60266: function(t, n, r) {
            t.exports = function(t, n, r, e) {
                for (var i = -1, u = null == t ? 0 : t.length; ++i < u;) {
                    var o = t[i];
                    n(e, o, r(o), t)
                }
                return e
            }
        },
        581628: function(t, n, r) {
            var e = r("978603");
            t.exports = function(t, n, r, i) {
                return e(t, function(t, e, u) {
                    n(i, t, r(t), u)
                }), i
            }
        },
        278296: function(t, n, r) {
            var e = r("60266"),
                i = r("581628"),
                u = r("698273"),
                o = r("725502");
            t.exports = function(t, n) {
                return function(r, s) {
                    var a = o(r) ? e : i,
                        c = n ? n() : {};
                    return a(r, t, u(s, 2), c)
                }
            }
        },
        816494: function(t, n, r) {
            var e = r("766665"),
                i = r("278296")(function(t, n, r) {
                    e(t, r, n)
                });
            t.exports = i
        },
        48648: function(t, n, r) {
            if (r("808653"), r("424973"), !e) var e = {
                map: function(t, n) {
                    var r = {};
                    return n ? t.map(function(t, e) {
                        return r.index = e, n.call(r, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, n) {
                    return t < n ? -1 : t > n ? 1 : 0
                },
                sum: function(t, n) {
                    var r = {};
                    return t.reduce(n ? function(t, e, i) {
                        return r.index = i, t + n.call(r, e)
                    } : function(t, n) {
                        return t + n
                    }, 0)
                },
                max: function(t, n) {
                    return Math.max.apply(null, n ? e.map(t, n) : t)
                }
            };
            var i = function() {
                var t = 3;

                function n(t, n, r) {
                    return (t << 10) + (n << 5) + r
                }

                function r(t) {
                    var n = [],
                        r = !1;

                    function e() {
                        n.sort(t), r = !0
                    }
                    return {
                        push: function(t) {
                            n.push(t), r = !1
                        },
                        peek: function(t) {
                            return !r && e(), void 0 === t && (t = n.length - 1), n[t]
                        },
                        pop: function() {
                            return !r && e(), n.pop()
                        },
                        size: function() {
                            return n.length
                        },
                        map: function(t) {
                            return n.map(t)
                        },
                        debug: function() {
                            return !r && e(), n
                        }
                    }
                }

                function i(t, n, r, e, i, u, o) {
                    this.r1 = t, this.r2 = n, this.g1 = r, this.g2 = e, this.b1 = i, this.b2 = u, this.histo = o
                }

                function u() {
                    this.vboxes = new r(function(t, n) {
                        return e.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    })
                }
                return i.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var r = this.histo;
                        if (!this._count_set || t) {
                            var e, i, u, o = 0;
                            for (e = this.r1; e <= this.r2; e++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) o += r[n(e, i, u)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new i(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var r = this.histo;
                        if (!this._avg || t) {
                            var e, i, u, o, s = 0,
                                a = 8,
                                c = 0,
                                f = 0,
                                h = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (u = this.g1; u <= this.g2; u++)
                                    for (o = this.b1; o <= this.b2; o++) s += e = r[n(i, u, o)] || 0, c += e * (i + .5) * a, f += e * (u + .5) * a, h += e * (o + .5) * a;
                            s ? this._avg = [~~(c / s), ~~(f / s), ~~(h / s)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(n) {
                        var r = n[0] >> t;
                        return gval = n[1] >> t, bval = n[2] >> t, r >= this.r1 && r <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, u.prototype = {
                    push: function(t) {
                        this.vboxes.push({
                            vbox: t,
                            color: t.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(t) {
                            return t.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(t) {
                        for (var n = this.vboxes, r = 0; r < n.size(); r++)
                            if (n.peek(r).vbox.contains(t)) return n.peek(r).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var n, r, e, i = this.vboxes, u = 0; u < i.size(); u++)((r = Math.sqrt(Math.pow(t[0] - i.peek(u).color[0], 2) + Math.pow(t[1] - i.peek(u).color[1], 2) + Math.pow(t[2] - i.peek(u).color[2], 2))) < n || void 0 === n) && (n = r, e = i.peek(u).color);
                        return e
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, n) {
                            return e.naturalOrder(e.sum(t.color), e.sum(n.color))
                        });
                        var n = t[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
                        var r = t.length - 1,
                            i = t[r].color;
                        i[0] > 251 && i[1] > 251 && i[2] > 251 && (t[r].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, s) {
                        if (!o.length || s < 2 || s > 256) return !1;
                        var a, c, f, h, l, v, p, g, b, d, x, z, m, k, _, w, y = (a = o, l = Array(32768), a.forEach(function(r) {
                                f = r[0] >> t, h = r[1] >> t, l[c = n(f, h, r[2] >> t)] = (l[c] || 0) + 1
                            }), l),
                            E = 0;
                        y.forEach(function() {
                            E++
                        });
                        var M = (v = o, p = y, x = 1e6, z = 0, m = 1e6, k = 0, _ = 1e6, w = 0, v.forEach(function(n) {
                                g = n[0] >> t, b = n[1] >> t, d = n[2] >> t, g < x ? x = g : g > z && (z = g), b < m ? m = b : b > k && (k = b), d < _ ? _ = d : d > w && (w = d)
                            }), new i(x, z, m, k, _, w, p)),
                            C = new r(function(t, n) {
                                return e.naturalOrder(t.count(), n.count())
                            });

                        function O(t, r) {
                            for (var i, u = 1, o = 0; o < 1e3;) {
                                if (!(i = t.pop()).count()) {
                                    t.push(i), o++;
                                    continue
                                }
                                var s = function(t, r) {
                                        if (r.count()) {
                                            var i = r.r2 - r.r1 + 1,
                                                u = r.g2 - r.g1 + 1,
                                                o = r.b2 - r.b1 + 1,
                                                s = e.max([i, u, o]);
                                            if (1 == r.count()) return [r.copy()];
                                            var a, c, f, h, l, v = 0,
                                                p = [],
                                                g = [];
                                            if (s == i)
                                                for (a = r.r1; a <= r.r2; a++) {
                                                    for (h = 0, c = r.g1; c <= r.g2; c++)
                                                        for (f = r.b1; f <= r.b2; f++) h += t[l = n(a, c, f)] || 0;
                                                    v += h, p[a] = v
                                                } else if (s == u)
                                                    for (a = r.g1; a <= r.g2; a++) {
                                                        for (h = 0, c = r.r1; c <= r.r2; c++)
                                                            for (f = r.b1; f <= r.b2; f++) h += t[l = n(c, a, f)] || 0;
                                                        v += h, p[a] = v
                                                    } else
                                                        for (a = r.b1; a <= r.b2; a++) {
                                                            for (h = 0, c = r.r1; c <= r.r2; c++)
                                                                for (f = r.g1; f <= r.g2; f++) h += t[l = n(c, f, a)] || 0;
                                                            v += h, p[a] = v
                                                        }
                                            return p.forEach(function(t, n) {
                                                g[n] = v - t
                                            }), b(s == i ? "r" : s == u ? "g" : "b")
                                        }

                                        function b(t) {
                                            var n, e, i, u, o, s = t + "1",
                                                c = t + "2",
                                                f = 0;
                                            for (a = r[s]; a <= r[c]; a++)
                                                if (p[a] > v / 2) {
                                                    for (i = r.copy(), u = r.copy(), n = a - r[s], o = n <= (e = r[c] - a) ? Math.min(r[c] - 1, ~~(a + e / 2)) : Math.max(r[s], ~~(a - 1 - n / 2)); !p[o];) o++;
                                                    for (f = g[o]; !f && p[o - 1];) f = g[--o];
                                                    return i[c] = o, u[s] = i[c] + 1, [i, u]
                                                }
                                        }
                                    }(y, i),
                                    a = s[0],
                                    c = s[1];
                                if (!a) return;
                                if (t.push(a), c && (t.push(c), u++), u >= r || o++ > 1e3) return
                            }
                        }
                        C.push(M), O(C, .75 * s);
                        for (var R = new r(function(t, n) {
                                return e.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
                            }); C.size();) R.push(C.pop());
                        O(R, s - R.size());
                        for (var A = new u; R.size();) A.push(R.pop());
                        return A
                    }
                }
            }();
            t.exports = i.quantize
        },
        48174: function(t, n, r) {
            "use strict";

            function e(t, n) {
                if (t.length !== n.length) return !1;
                for (let r = 0; r < n.length && r < t.length; r++)
                    if (!Object.is(t[r], n[r])) return !1;
                return !0
            }
            r.r(n), r.d(n, {
                default: function() {
                    return e
                }
            })
        },
        775560: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                useForceUpdate: function() {
                    return e.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var e = r("14716"),
                i = r("745510"),
                u = r("315378")
        },
        14716: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return i
                }
            }), r("222007");
            var e = r("884691");

            function i() {
                let [, t] = (0, e.useState)({});
                return (0, e.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return u
                }
            });
            var e = r("884691");
            let i = {};

            function u(t) {
                let n = (0, e.useRef)(i);
                return n.current === i && (n.current = t()), n.current
            }
        },
        745510: function(t, n, r) {
            "use strict";
            r.r(n), r.d(n, {
                default: function() {
                    return o
                }
            });
            var e = r("884691"),
                i = r("48174");
            let u = [];

            function o(t, n) {
                let r = (0, e.useRef)(),
                    o = (0, e.useRef)(u);
                return o.current === u ? (r.current = t(), o.current = n) : !(0, i.default)(n, o.current) && (r.current = t(), o.current = n), r.current
            }
        }
    }
]);