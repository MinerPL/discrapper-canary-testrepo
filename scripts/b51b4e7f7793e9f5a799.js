(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["1938"], {
        78349: function(t, n, e) {
            "use strict";
            e("424973"), t.exports.parse = function(t) {
                var n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(t);
                if (!n) return null;
                n.shift();
                var e = null,
                    r = [];
                n[2] && (e = (u = n[2].split("-")).shift(), r = u);
                var o = [];
                n[5] && (o = n[5].split("-")).shift();
                var i = [];
                if (n[6]) {
                    (u = n[6].split("-")).shift();
                    for (var u, a, c = []; u.length;) {
                        var s = u.shift();
                        1 === s.length ? a ? (i.push({
                            singleton: a,
                            extension: c
                        }), a = s, c = []) : a = s : c.push(s)
                    }
                    i.push({
                        singleton: a,
                        extension: c
                    })
                }
                var f = [];
                n[7] && ((f = n[7].split("-")).shift(), f.shift());
                var l = [];
                return n[8] && (l = n[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: e,
                            extlang: r
                        },
                        script: n[3] || null,
                        region: n[4] || null,
                        variant: o,
                        extension: i,
                        privateuse: f
                    },
                    privateuse: l,
                    grandfathered: {
                        irregular: n[0] || null,
                        regular: n[1] || null
                    }
                }
            }
        },
        979897: function(t, n, e) {
            t = e.nmd(t), e("854508");
            var r = r || function(t) {
                "use strict";
                if (!("undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                    var n = t.document,
                        e = function() {
                            return t.URL || t.webkitURL || t
                        },
                        r = n.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                        o = "download" in r,
                        i = function(t) {
                            var n = new MouseEvent("click");
                            t.dispatchEvent(n)
                        },
                        u = /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                        a = t.webkitRequestFileSystem,
                        c = t.requestFileSystem || a || t.mozRequestFileSystem,
                        s = function(n) {
                            (t.setImmediate || t.setTimeout)(function() {
                                throw n
                            }, 0)
                        },
                        f = "application/octet-stream",
                        l = 0,
                        h = function(t) {
                            setTimeout(function() {
                                "string" == typeof t ? e().revokeObjectURL(t) : t.remove()
                            }, 4e4)
                        },
                        p = function(t, n, e) {
                            for (var r = (n = [].concat(n)).length; r--;) {
                                var o = t["on" + n[r]];
                                if ("function" == typeof o) try {
                                    o.call(t, e || t)
                                } catch (t) {
                                    s(t)
                                }
                            }
                        },
                        v = function(t) {
                            return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\xef\xbb\xbf", t], {
                                type: t.type
                            }) : t
                        },
                        d = function(n, s, d) {
                            !d && (n = v(n));
                            var b, g, y = this,
                                m = n.type,
                                x = !1,
                                w = function() {
                                    p(y, "writestart progress write writeend".split(" "))
                                },
                                j = function() {
                                    if (g && u && "undefined" != typeof FileReader) {
                                        var r = new FileReader;
                                        r.onloadend = function() {
                                            var t = r.result;
                                            g.location.href = "data:attachment/file" + t.slice(t.search(/[,;]/)), y.readyState = y.DONE, w()
                                        }, r.readAsDataURL(n), y.readyState = y.INIT;
                                        return
                                    }(x || !b) && (b = e().createObjectURL(n)), g ? g.location.href = b : void 0 === t.open(b, "_blank") && u && (t.location.href = b), y.readyState = y.DONE, w(), h(b)
                                },
                                O = function(t) {
                                    return function() {
                                        if (y.readyState !== y.DONE) return t.apply(this, arguments)
                                    }
                                },
                                z = {
                                    create: !0,
                                    exclusive: !1
                                };
                            if (y.readyState = y.INIT, !s && (s = "download"), o) {
                                b = e().createObjectURL(n), setTimeout(function() {
                                    r.href = b, r.download = s, i(r), w(), h(b), y.readyState = y.DONE
                                });
                                return
                            }
                            if (t.chrome && m && m !== f && (n = (n.slice || n.webkitSlice).call(n, 0, n.size, f), x = !0), a && "download" !== s && (s += ".download"), (m === f || a) && (g = t), !c) {
                                j();
                                return
                            }
                            l += n.size, c(t.TEMPORARY, l, O(function(t) {
                                t.root.getDirectory("saved", z, O(function(t) {
                                    var e = function() {
                                        t.getFile(s, z, O(function(t) {
                                            t.createWriter(O(function(e) {
                                                e.onwriteend = function(n) {
                                                    g.location.href = t.toURL(), y.readyState = y.DONE, p(y, "writeend", n), h(t)
                                                }, e.onerror = function() {
                                                    var t = e.error;
                                                    t.code !== t.ABORT_ERR && j()
                                                }, "writestart progress write abort".split(" ").forEach(function(t) {
                                                    e["on" + t] = y["on" + t]
                                                }), e.write(n), y.abort = function() {
                                                    e.abort(), y.readyState = y.DONE
                                                }, y.readyState = y.WRITING
                                            }), j)
                                        }), j)
                                    };
                                    t.getFile(s, {
                                        create: !1
                                    }, O(function(t) {
                                        t.remove(), e()
                                    }), O(function(t) {
                                        t.code === t.NOT_FOUND_ERR ? e() : j()
                                    }))
                                }), j)
                            }), j)
                        },
                        b = d.prototype;
                    return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t, n, e) {
                        return !e && (t = v(t)), navigator.msSaveOrOpenBlob(t, n || "download")
                    } : (b.abort = function() {
                        this.readyState = this.DONE, p(this, "abort")
                    }, b.readyState = b.INIT = 0, b.WRITING = 1, b.DONE = 2, b.error = b.onwritestart = b.onprogress = b.onwrite = b.onabort = b.onerror = b.onwriteend = null, function(t, n, e) {
                        return new d(t, n, e)
                    })
                }
            }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
            void 0 !== t && t.exports ? t.exports.saveAs = r : "undefined" != typeof define && null !== define && null !== define.amd && define([], function() {
                return r
            })
        },
        448105: function(t, n, e) {
            "use strict";
            t.exports = function(t, n) {
                var e = n.length,
                    r = t.length;
                if (r > e) return !1;
                if (r === e) return t === n;
                t: for (var o = 0, i = 0; o < r; o++) {
                    for (var u = t.charCodeAt(o); i < e;)
                        if (n.charCodeAt(i++) === u) continue t;
                    return !1
                }
                return !0
            }
        },
        458389: function(t, n, e) {
            e("424973");
            var r = e("594140"),
                o = e("564414"),
                i = e("725502"),
                u = e("591350"),
                a = e("476540"),
                c = e("381178"),
                s = Object.prototype.hasOwnProperty;
            t.exports = function(t, n) {
                var e = i(t),
                    f = !e && o(t),
                    l = !e && !f && u(t),
                    h = !e && !f && !l && c(t),
                    p = e || f || l || h,
                    v = p ? r(t.length, String) : [],
                    d = v.length;
                for (var b in t)(n || s.call(t, b)) && !(p && ("length" == b || l && ("offset" == b || "parent" == b) || h && ("buffer" == b || "byteLength" == b || "byteOffset" == b) || a(b, d))) && v.push(b);
                return v
            }
        },
        766665: function(t, n, e) {
            var r = e("424498");
            t.exports = function(t, n, e) {
                "__proto__" == n && r ? r(t, n, {
                    configurable: !0,
                    enumerable: !0,
                    value: e,
                    writable: !0
                }) : t[n] = e
            }
        },
        659382: function(t, n, e) {
            var r = e("33426"),
                o = e("136047"),
                i = e("270879"),
                u = {};
            u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1;
            t.exports = function(t) {
                return i(t) && o(t.length) && !!u[r(t)]
            }
        },
        205873: function(t, n, e) {
            e("424973");
            var r = e("733228"),
                o = e("541349"),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!r(t)) return o(t);
                var n = [];
                for (var e in Object(t)) i.call(t, e) && "constructor" != e && n.push(e);
                return n
            }
        },
        594140: function(t, n, e) {
            t.exports = function(t, n) {
                for (var e = -1, r = Array(t); ++e < t;) r[e] = n(e);
                return r
            }
        },
        492692: function(t, n, e) {
            t.exports = function(t) {
                return function(n) {
                    return t(n)
                }
            }
        },
        733228: function(t, n, e) {
            var r = Object.prototype;
            t.exports = function(t) {
                var n = t && t.constructor;
                return t === ("function" == typeof n && n.prototype || r)
            }
        },
        541349: function(t, n, e) {
            var r = e("761197")(Object.keys, Object);
            t.exports = r
        },
        276440: function(t, n, e) {
            t = e.nmd(t);
            var r = e("447414"),
                o = "object" == typeof n && n && !n.nodeType && n,
                i = o && "object" == typeof t && t && !t.nodeType && t,
                u = i && i.exports === o && r.process,
                a = function() {
                    try {
                        var t = i && i.require && i.require("util").types;
                        if (t) return t;
                        return u && u.binding && u.binding("util")
                    } catch (t) {}
                }();
            t.exports = a
        },
        761197: function(t, n, e) {
            t.exports = function(t, n) {
                return function(e) {
                    return t(n(e))
                }
            }
        },
        591350: function(t, n, e) {
            t = e.nmd(t);
            var r = e("690516"),
                o = e("221386"),
                i = "object" == typeof n && n && !n.nodeType && n,
                u = i && "object" == typeof t && t && !t.nodeType && t,
                a = u && u.exports === i ? r.Buffer : void 0,
                c = a ? a.isBuffer : void 0;
            t.exports = c || o
        },
        381178: function(t, n, e) {
            var r = e("659382"),
                o = e("492692"),
                i = e("276440"),
                u = i && i.isTypedArray,
                a = u ? o(u) : r;
            t.exports = a
        },
        466731: function(t, n, e) {
            var r = e("458389"),
                o = e("205873"),
                i = e("603108");
            t.exports = function(t) {
                return i(t) ? r(t) : o(t)
            }
        },
        221386: function(t, n, e) {
            t.exports = function() {
                return !1
            }
        },
        48648: function(t, n, e) {
            if (e("808653"), e("424973"), !r) var r = {
                map: function(t, n) {
                    var e = {};
                    return n ? t.map(function(t, r) {
                        return e.index = r, n.call(e, t)
                    }) : t.slice()
                },
                naturalOrder: function(t, n) {
                    return t < n ? -1 : t > n ? 1 : 0
                },
                sum: function(t, n) {
                    var e = {};
                    return t.reduce(n ? function(t, r, o) {
                        return e.index = o, t + n.call(e, r)
                    } : function(t, n) {
                        return t + n
                    }, 0)
                },
                max: function(t, n) {
                    return Math.max.apply(null, n ? r.map(t, n) : t)
                }
            };
            var o = function() {
                var t = 3;

                function n(t, n, e) {
                    return (t << 10) + (n << 5) + e
                }

                function e(t) {
                    var n = [],
                        e = !1;

                    function r() {
                        n.sort(t), e = !0
                    }
                    return {
                        push: function(t) {
                            n.push(t), e = !1
                        },
                        peek: function(t) {
                            return !e && r(), void 0 === t && (t = n.length - 1), n[t]
                        },
                        pop: function() {
                            return !e && r(), n.pop()
                        },
                        size: function() {
                            return n.length
                        },
                        map: function(t) {
                            return n.map(t)
                        },
                        debug: function() {
                            return !e && r(), n
                        }
                    }
                }

                function o(t, n, e, r, o, i, u) {
                    this.r1 = t, this.r2 = n, this.g1 = e, this.g2 = r, this.b1 = o, this.b2 = i, this.histo = u
                }

                function i() {
                    this.vboxes = new e(function(t, n) {
                        return r.naturalOrder(t.vbox.count() * t.vbox.volume(), n.vbox.count() * n.vbox.volume())
                    })
                }
                return o.prototype = {
                    volume: function(t) {
                        return (!this._volume || t) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(t) {
                        var e = this.histo;
                        if (!this._count_set || t) {
                            var r, o, i, u = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (o = this.g1; o <= this.g2; o++)
                                    for (i = this.b1; i <= this.b2; i++) u += e[n(r, o, i)] || 0;
                            this._count = u, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new o(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(t) {
                        var e = this.histo;
                        if (!this._avg || t) {
                            var r, o, i, u, a = 0,
                                c = 8,
                                s = 0,
                                f = 0,
                                l = 0;
                            for (o = this.r1; o <= this.r2; o++)
                                for (i = this.g1; i <= this.g2; i++)
                                    for (u = this.b1; u <= this.b2; u++) a += r = e[n(o, i, u)] || 0, s += r * (o + .5) * c, f += r * (i + .5) * c, l += r * (u + .5) * c;
                            a ? this._avg = [~~(s / a), ~~(f / a), ~~(l / a)] : this._avg = [~~(c * (this.r1 + this.r2 + 1) / 2), ~~(c * (this.g1 + this.g2 + 1) / 2), ~~(c * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(n) {
                        var e = n[0] >> t;
                        return gval = n[1] >> t, bval = n[2] >> t, e >= this.r1 && e <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, i.prototype = {
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
                        for (var n = this.vboxes, e = 0; e < n.size(); e++)
                            if (n.peek(e).vbox.contains(t)) return n.peek(e).color;
                        return this.nearest(t)
                    },
                    nearest: function(t) {
                        for (var n, e, r, o = this.vboxes, i = 0; i < o.size(); i++)((e = Math.sqrt(Math.pow(t[0] - o.peek(i).color[0], 2) + Math.pow(t[1] - o.peek(i).color[1], 2) + Math.pow(t[2] - o.peek(i).color[2], 2))) < n || void 0 === n) && (n = e, r = o.peek(i).color);
                        return r
                    },
                    forcebw: function() {
                        var t = this.vboxes;
                        t.sort(function(t, n) {
                            return r.naturalOrder(r.sum(t.color), r.sum(n.color))
                        });
                        var n = t[0].color;
                        n[0] < 5 && n[1] < 5 && n[2] < 5 && (t[0].color = [0, 0, 0]);
                        var e = t.length - 1,
                            o = t[e].color;
                        o[0] > 251 && o[1] > 251 && o[2] > 251 && (t[e].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(u, a) {
                        if (!u.length || a < 2 || a > 256) return !1;
                        var c, s, f, l, h, p, v, d, b, g, y, m, x, w, j, O, z = (c = u, h = Array(32768), c.forEach(function(e) {
                                f = e[0] >> t, l = e[1] >> t, h[s = n(f, l, e[2] >> t)] = (h[s] || 0) + 1
                            }), h),
                            S = 0;
                        z.forEach(function() {
                            S++
                        });
                        var k = (p = u, v = z, y = 1e6, m = 0, x = 1e6, w = 0, j = 1e6, O = 0, p.forEach(function(n) {
                                d = n[0] >> t, b = n[1] >> t, g = n[2] >> t, d < y ? y = d : d > m && (m = d), b < x ? x = b : b > w && (w = b), g < j ? j = g : g > O && (O = g)
                            }), new o(y, m, x, w, j, O, v)),
                            E = new e(function(t, n) {
                                return r.naturalOrder(t.count(), n.count())
                            });

                        function R(t, e) {
                            for (var o, i = 1, u = 0; u < 1e3;) {
                                if (!(o = t.pop()).count()) {
                                    t.push(o), u++;
                                    continue
                                }
                                var a = function(t, e) {
                                        if (e.count()) {
                                            var o = e.r2 - e.r1 + 1,
                                                i = e.g2 - e.g1 + 1,
                                                u = e.b2 - e.b1 + 1,
                                                a = r.max([o, i, u]);
                                            if (1 == e.count()) return [e.copy()];
                                            var c, s, f, l, h, p = 0,
                                                v = [],
                                                d = [];
                                            if (a == o)
                                                for (c = e.r1; c <= e.r2; c++) {
                                                    for (l = 0, s = e.g1; s <= e.g2; s++)
                                                        for (f = e.b1; f <= e.b2; f++) l += t[h = n(c, s, f)] || 0;
                                                    p += l, v[c] = p
                                                } else if (a == i)
                                                    for (c = e.g1; c <= e.g2; c++) {
                                                        for (l = 0, s = e.r1; s <= e.r2; s++)
                                                            for (f = e.b1; f <= e.b2; f++) l += t[h = n(s, c, f)] || 0;
                                                        p += l, v[c] = p
                                                    } else
                                                        for (c = e.b1; c <= e.b2; c++) {
                                                            for (l = 0, s = e.r1; s <= e.r2; s++)
                                                                for (f = e.g1; f <= e.g2; f++) l += t[h = n(s, f, c)] || 0;
                                                            p += l, v[c] = p
                                                        }
                                            return v.forEach(function(t, n) {
                                                d[n] = p - t
                                            }), b(a == o ? "r" : a == i ? "g" : "b")
                                        }

                                        function b(t) {
                                            var n, r, o, i, u, a = t + "1",
                                                s = t + "2",
                                                f = 0;
                                            for (c = e[a]; c <= e[s]; c++)
                                                if (v[c] > p / 2) {
                                                    for (o = e.copy(), i = e.copy(), n = c - e[a], u = n <= (r = e[s] - c) ? Math.min(e[s] - 1, ~~(c + r / 2)) : Math.max(e[a], ~~(c - 1 - n / 2)); !v[u];) u++;
                                                    for (f = d[u]; !f && v[u - 1];) f = d[--u];
                                                    return o[s] = u, i[a] = o[s] + 1, [o, i]
                                                }
                                        }
                                    }(z, o),
                                    c = a[0],
                                    s = a[1];
                                if (!c) return;
                                if (t.push(c), s && (t.push(s), i++), i >= e || u++ > 1e3) return
                            }
                        }
                        E.push(k), R(E, .75 * a);
                        for (var A = new e(function(t, n) {
                                return r.naturalOrder(t.count() * t.volume(), n.count() * n.volume())
                            }); E.size();) A.push(E.pop());
                        R(A, a - A.size());
                        for (var _ = new i; A.size();) _.push(A.pop());
                        return _
                    }
                }
            }();
            t.exports = o.quantize
        },
        48174: function(t, n, e) {
            "use strict";

            function r(t, n) {
                if (t.length !== n.length) return !1;
                for (let e = 0; e < n.length && e < t.length; e++)
                    if (!Object.is(t[e], n[e])) return !1;
                return !0
            }
            e.r(n), e.d(n, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return o.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var r = e("14716"),
                o = e("745510"),
                i = e("315378")
        },
        14716: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return o
                }
            }), e("222007");
            var r = e("884691");

            function o() {
                let [, t] = (0, r.useState)({});
                return (0, r.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return i
                }
            });
            var r = e("884691");
            let o = {};

            function i(t) {
                let n = (0, r.useRef)(o);
                return n.current === o && (n.current = t()), n.current
            }
        },
        745510: function(t, n, e) {
            "use strict";
            e.r(n), e.d(n, {
                default: function() {
                    return u
                }
            });
            var r = e("884691"),
                o = e("48174");
            let i = [];

            function u(t, n) {
                let e = (0, r.useRef)(),
                    u = (0, r.useRef)(i);
                return u.current === i ? (e.current = t(), u.current = n) : !(0, o.default)(n, u.current) && (e.current = t(), u.current = n), e.current
            }
        }
    }
]);