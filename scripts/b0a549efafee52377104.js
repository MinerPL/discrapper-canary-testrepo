(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77619"], {
        78349: function(e, t, n) {
            "use strict";
            n("424973"), e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    i = [];
                t[2] && (n = (o = t[2].split("-")).shift(), i = o);
                var r = [];
                t[5] && (r = t[5].split("-")).shift();
                var s = [];
                if (t[6]) {
                    (o = t[6].split("-")).shift();
                    for (var o, u, a = []; o.length;) {
                        var l = o.shift();
                        1 === l.length ? u ? (s.push({
                            singleton: u,
                            extension: a
                        }), u = l, a = []) : u = l : a.push(l)
                    }
                    s.push({
                        singleton: u,
                        extension: a
                    })
                }
                var d = [];
                t[7] && ((d = t[7].split("-")).shift(), d.shift());
                var c = [];
                return t[8] && (c = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: i
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: r,
                        extension: s,
                        privateuse: d
                    },
                    privateuse: c,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        458389: function(e, t, n) {
            n("424973");
            var i = n("594140"),
                r = n("564414"),
                s = n("725502"),
                o = n("591350"),
                u = n("476540"),
                a = n("381178"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = s(e),
                    d = !n && r(e),
                    c = !n && !d && o(e),
                    _ = !n && !d && !c && a(e),
                    f = n || d || c || _,
                    E = f ? i(e.length, String) : [],
                    h = E.length;
                for (var g in e)(t || l.call(e, g)) && !(f && ("length" == g || c && ("offset" == g || "parent" == g) || _ && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || u(g, h))) && E.push(g);
                return E
            }
        },
        659382: function(e, t, n) {
            var i = n("33426"),
                r = n("136047"),
                s = n("270879"),
                o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return s(e) && r(e.length) && !!o[i(e)]
            }
        },
        205873: function(e, t, n) {
            n("424973");
            var i = n("733228"),
                r = n("541349"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!i(e)) return r(e);
                var t = [];
                for (var n in Object(e)) s.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, i = Array(e); ++n < e;) i[n] = t(n);
                return i
            }
        },
        492692: function(e, t, n) {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        733228: function(e, t, n) {
            var i = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || i)
            }
        },
        541349: function(e, t, n) {
            var i = n("761197")(Object.keys, Object);
            e.exports = i
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var i = n("447414"),
                r = "object" == typeof t && t && !t.nodeType && t,
                s = r && "object" == typeof e && e && !e.nodeType && e,
                o = s && s.exports === r && i.process,
                u = function() {
                    try {
                        var e = s && s.require && s.require("util").types;
                        if (e) return e;
                        return o && o.binding && o.binding("util")
                    } catch (e) {}
                }();
            e.exports = u
        },
        761197: function(e, t, n) {
            e.exports = function(e, t) {
                return function(n) {
                    return e(t(n))
                }
            }
        },
        591350: function(e, t, n) {
            e = n.nmd(e);
            var i = n("690516"),
                r = n("221386"),
                s = "object" == typeof t && t && !t.nodeType && t,
                o = s && "object" == typeof e && e && !e.nodeType && e,
                u = o && o.exports === s ? i.Buffer : void 0,
                a = u ? u.isBuffer : void 0;
            e.exports = a || r
        },
        381178: function(e, t, n) {
            var i = n("659382"),
                r = n("492692"),
                s = n("276440"),
                o = s && s.isTypedArray,
                u = o ? r(o) : i;
            e.exports = u
        },
        466731: function(e, t, n) {
            var i = n("458389"),
                r = n("205873"),
                s = n("603108");
            e.exports = function(e) {
                return s(e) ? i(e) : r(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        48648: function(e, t, n) {
            if (n("808653"), n("424973"), !i) var i = {
                map: function(e, t) {
                    var n = {};
                    return t ? e.map(function(e, i) {
                        return n.index = i, t.call(n, e)
                    }) : e.slice()
                },
                naturalOrder: function(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                },
                sum: function(e, t) {
                    var n = {};
                    return e.reduce(t ? function(e, i, r) {
                        return n.index = r, e + t.call(n, i)
                    } : function(e, t) {
                        return e + t
                    }, 0)
                },
                max: function(e, t) {
                    return Math.max.apply(null, t ? i.map(e, t) : e)
                }
            };
            var r = function() {
                var e = 3;

                function t(e, t, n) {
                    return (e << 10) + (t << 5) + n
                }

                function n(e) {
                    var t = [],
                        n = !1;

                    function i() {
                        t.sort(e), n = !0
                    }
                    return {
                        push: function(e) {
                            t.push(e), n = !1
                        },
                        peek: function(e) {
                            return !n && i(), void 0 === e && (e = t.length - 1), t[e]
                        },
                        pop: function() {
                            return !n && i(), t.pop()
                        },
                        size: function() {
                            return t.length
                        },
                        map: function(e) {
                            return t.map(e)
                        },
                        debug: function() {
                            return !n && i(), t
                        }
                    }
                }

                function r(e, t, n, i, r, s, o) {
                    this.r1 = e, this.r2 = t, this.g1 = n, this.g2 = i, this.b1 = r, this.b2 = s, this.histo = o
                }

                function s() {
                    this.vboxes = new n(function(e, t) {
                        return i.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume())
                    })
                }
                return r.prototype = {
                    volume: function(e) {
                        return (!this._volume || e) && (this._volume = (this.r2 - this.r1 + 1) * (this.g2 - this.g1 + 1) * (this.b2 - this.b1 + 1)), this._volume
                    },
                    count: function(e) {
                        var n = this.histo;
                        if (!this._count_set || e) {
                            var i, r, s, o = 0;
                            for (i = this.r1; i <= this.r2; i++)
                                for (r = this.g1; r <= this.g2; r++)
                                    for (s = this.b1; s <= this.b2; s++) o += n[t(i, r, s)] || 0;
                            this._count = o, this._count_set = !0
                        }
                        return this._count
                    },
                    copy: function() {
                        return new r(this.r1, this.r2, this.g1, this.g2, this.b1, this.b2, this.histo)
                    },
                    avg: function(e) {
                        var n = this.histo;
                        if (!this._avg || e) {
                            var i, r, s, o, u = 0,
                                a = 8,
                                l = 0,
                                d = 0,
                                c = 0;
                            for (r = this.r1; r <= this.r2; r++)
                                for (s = this.g1; s <= this.g2; s++)
                                    for (o = this.b1; o <= this.b2; o++) u += i = n[t(r, s, o)] || 0, l += i * (r + .5) * a, d += i * (s + .5) * a, c += i * (o + .5) * a;
                            u ? this._avg = [~~(l / u), ~~(d / u), ~~(c / u)] : this._avg = [~~(a * (this.r1 + this.r2 + 1) / 2), ~~(a * (this.g1 + this.g2 + 1) / 2), ~~(a * (this.b1 + this.b2 + 1) / 2)]
                        }
                        return this._avg
                    },
                    contains: function(t) {
                        var n = t[0] >> e;
                        return gval = t[1] >> e, bval = t[2] >> e, n >= this.r1 && n <= this.r2 && gval >= this.g1 && gval <= this.g2 && bval >= this.b1 && bval <= this.b2
                    }
                }, s.prototype = {
                    push: function(e) {
                        this.vboxes.push({
                            vbox: e,
                            color: e.avg()
                        })
                    },
                    palette: function() {
                        return this.vboxes.map(function(e) {
                            return e.color
                        })
                    },
                    size: function() {
                        return this.vboxes.size()
                    },
                    map: function(e) {
                        for (var t = this.vboxes, n = 0; n < t.size(); n++)
                            if (t.peek(n).vbox.contains(e)) return t.peek(n).color;
                        return this.nearest(e)
                    },
                    nearest: function(e) {
                        for (var t, n, i, r = this.vboxes, s = 0; s < r.size(); s++)((n = Math.sqrt(Math.pow(e[0] - r.peek(s).color[0], 2) + Math.pow(e[1] - r.peek(s).color[1], 2) + Math.pow(e[2] - r.peek(s).color[2], 2))) < t || void 0 === t) && (t = n, i = r.peek(s).color);
                        return i
                    },
                    forcebw: function() {
                        var e = this.vboxes;
                        e.sort(function(e, t) {
                            return i.naturalOrder(i.sum(e.color), i.sum(t.color))
                        });
                        var t = e[0].color;
                        t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [0, 0, 0]);
                        var n = e.length - 1,
                            r = e[n].color;
                        r[0] > 251 && r[1] > 251 && r[2] > 251 && (e[n].color = [255, 255, 255])
                    }
                }, {
                    quantize: function(o, u) {
                        if (!o.length || u < 2 || u > 256) return !1;
                        var a, l, d, c, _, f, E, h, g, p, I, A, N, m, v, R, S = (a = o, _ = Array(32768), a.forEach(function(n) {
                                d = n[0] >> e, c = n[1] >> e, _[l = t(d, c, n[2] >> e)] = (_[l] || 0) + 1
                            }), _),
                            T = 0;
                        S.forEach(function() {
                            T++
                        });
                        var C = (f = o, E = S, I = 1e6, A = 0, N = 1e6, m = 0, v = 1e6, R = 0, f.forEach(function(t) {
                                h = t[0] >> e, g = t[1] >> e, p = t[2] >> e, h < I ? I = h : h > A && (A = h), g < N ? N = g : g > m && (m = g), p < v ? v = p : p > R && (R = p)
                            }), new r(I, A, N, m, v, R, E)),
                            O = new n(function(e, t) {
                                return i.naturalOrder(e.count(), t.count())
                            });

                        function L(e, n) {
                            for (var r, s = 1, o = 0; o < 1e3;) {
                                if (!(r = e.pop()).count()) {
                                    e.push(r), o++;
                                    continue
                                }
                                var u = function(e, n) {
                                        if (n.count()) {
                                            var r = n.r2 - n.r1 + 1,
                                                s = n.g2 - n.g1 + 1,
                                                o = n.b2 - n.b1 + 1,
                                                u = i.max([r, s, o]);
                                            if (1 == n.count()) return [n.copy()];
                                            var a, l, d, c, _, f = 0,
                                                E = [],
                                                h = [];
                                            if (u == r)
                                                for (a = n.r1; a <= n.r2; a++) {
                                                    for (c = 0, l = n.g1; l <= n.g2; l++)
                                                        for (d = n.b1; d <= n.b2; d++) c += e[_ = t(a, l, d)] || 0;
                                                    f += c, E[a] = f
                                                } else if (u == s)
                                                    for (a = n.g1; a <= n.g2; a++) {
                                                        for (c = 0, l = n.r1; l <= n.r2; l++)
                                                            for (d = n.b1; d <= n.b2; d++) c += e[_ = t(l, a, d)] || 0;
                                                        f += c, E[a] = f
                                                    } else
                                                        for (a = n.b1; a <= n.b2; a++) {
                                                            for (c = 0, l = n.r1; l <= n.r2; l++)
                                                                for (d = n.g1; d <= n.g2; d++) c += e[_ = t(l, d, a)] || 0;
                                                            f += c, E[a] = f
                                                        }
                                            return E.forEach(function(e, t) {
                                                h[t] = f - e
                                            }), g(u == r ? "r" : u == s ? "g" : "b")
                                        }

                                        function g(e) {
                                            var t, i, r, s, o, u = e + "1",
                                                l = e + "2",
                                                d = 0;
                                            for (a = n[u]; a <= n[l]; a++)
                                                if (E[a] > f / 2) {
                                                    for (r = n.copy(), s = n.copy(), t = a - n[u], o = t <= (i = n[l] - a) ? Math.min(n[l] - 1, ~~(a + i / 2)) : Math.max(n[u], ~~(a - 1 - t / 2)); !E[o];) o++;
                                                    for (d = h[o]; !d && E[o - 1];) d = h[--o];
                                                    return r[l] = o, s[u] = r[l] + 1, [r, s]
                                                }
                                        }
                                    }(S, r),
                                    a = u[0],
                                    l = u[1];
                                if (!a) return;
                                if (e.push(a), l && (e.push(l), s++), s >= n || o++ > 1e3) return
                            }
                        }
                        O.push(C), L(O, .75 * u);
                        for (var D = new n(function(e, t) {
                                return i.naturalOrder(e.count() * e.volume(), t.count() * t.volume())
                            }); O.size();) D.push(O.pop());
                        L(D, u - D.size());
                        for (var M = new s; D.size();) M.push(D.pop());
                        return M
                    }
                }
            }();
            e.exports = r.quantize
        },
        48174: function(e, t, n) {
            "use strict";

            function i(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return i.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return s.default
                }
            });
            var i = n("14716"),
                r = n("745510"),
                s = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691");

            function r() {
                let [, e] = (0, i.useState)({});
                return (0, i.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691");
            let r = {};

            function s(e) {
                let t = (0, i.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("48174");
            let s = [];

            function o(e, t) {
                let n = (0, i.useRef)(),
                    o = (0, i.useRef)(s);
                return o.current === s ? (n.current = e(), o.current = t) : !(0, r.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return s
                },
                popAllLayers: function() {
                    return o
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function s() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        267363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return c
                },
                ackChannel: function() {
                    return _
                },
                bulkAck: function() {
                    return f
                },
                localAck: function() {
                    return E
                },
                enableAutomaticAck: function() {
                    return h
                },
                disableAutomaticAck: function() {
                    return g
                },
                ackGuildFeature: function() {
                    return p
                },
                ackUserFeature: function() {
                    return I
                }
            }), n("222007"), n("424973");
            var i = n("249654"),
                r = n("913144"),
                s = n("401690"),
                o = n("233069"),
                u = n("42203"),
                a = n("245997"),
                l = n("697218"),
                d = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    s = arguments.length > 4 ? arguments[4] : void 0;
                r.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: i,
                    immediate: t,
                    force: n,
                    context: d.CURRENT_APP_CONTEXT,
                    location: s
                })
            }

            function _(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = u.default.getChannel(e);
                    if (null == i || null == i.guild_id) return;
                    let r = a.default.getCategories(i.guild_id);
                    if (null == r[e]) return;
                    let l = r[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, o.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        d = [...l];
                    for (let e of (l.forEach(e => {
                            let t = s.default.getActiveJoinedThreadsForParent(i.guild_id, e);
                            for (let e in t) d.push(e)
                        }), d)) c(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, i.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
            }

            function f(e, t) {
                r.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: d.CURRENT_APP_CONTEXT,
                    onFinished: t
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function h(e, t) {
                r.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function g(e, t) {
                r.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function p(e, t, n) {
                r.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function I(e, t) {
                var n;
                let i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != i && r.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("77078"),
                a = n("782340"),
                l = n("347129");
            class d extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: s,
                        error: d,
                        isLoading: c,
                        maxLength: _,
                        transitionState: f,
                        helpMessage: E,
                        retryPrompt: h,
                        retrySuccessMessage: g
                    } = this.props, {
                        code: p,
                        errorMessage: I,
                        retrySuccess: A
                    } = this.state, N = r.Children.count(s) > 0 ? (0, i.jsx)(u.Card, {
                        type: u.Card.Types.WARNING,
                        className: l.card,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null, m = null != h ? (0, i.jsxs)(u.Text, {
                        className: o(l.submitText, l.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(u.Clickable, {
                            className: o(l.spacing, l.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(u.Anchor, {
                                children: h
                            })
                        })]
                    }) : null, v = A ? (0, i.jsx)(u.Card, {
                        type: u.Card.Types.SUCCESS,
                        className: l.card,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: g
                        })
                    }) : null;
                    return (0, i.jsx)(u.ModalRoot, {
                        transitionState: f,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(u.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(u.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(u.ModalContent, {
                                children: [null != E ? (0, i.jsx)(u.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: l.spacing,
                                    children: E
                                }) : null, N, v, (0, i.jsxs)(u.FormItem, {
                                    title: this.getLabelText(),
                                    className: l.spacing,
                                    children: [(0, i.jsx)(u.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: p,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(u.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: l.error,
                                        children: null != d ? d : I
                                    }) : null, m]
                                })]
                            }), (0, i.jsxs)(u.ModalFooter, {
                                children: [(0, i.jsx)(u.Button, {
                                    type: "submit",
                                    disabled: c || 0 === p.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, i.jsx)(u.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: u.Button.Looks.LINK,
                                    color: u.Button.Colors.PRIMARY,
                                    children: a.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, r = n("872717"),
                s = n("49111"),
                o = n("782340");
            i = class extends r.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: s.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: s.Links.STATUS
                    }))
                }
            }
        },
        79489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("888400"),
                r = n("333805"),
                s = n("782340");
            class o extends r.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, i.diffAsUnits)(0, 1e3 * t);
                    return (0, i.unitsAsStrings)(n, {
                        days: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var u = o
        },
        736978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return i
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return m
                },
                default: function() {
                    return R
                }
            }), n("222007");
            var i, r, s, o, u, a, l, d, c = n("486196"),
                _ = n("614247"),
                f = n("821879"),
                E = n("333805"),
                h = n("782340");
            (u = i || (i = {}))[u.UNKNOWN = 0] = "UNKNOWN", u[u.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", u[u.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", u[u.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", u[u.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", u[u.INVALID_PLAN = 100005] = "INVALID_PLAN", u[u.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", u[u.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", u[u.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", u[u.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", u[u.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", u[u.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", u[u.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", u[u.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", u[u.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", u[u.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", u[u.CARD_DECLINED = 100054] = "CARD_DECLINED", u[u.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", u[u.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", u[u.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", u[u.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", u[u.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", u[u.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", u[u.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", u[u.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", u[u.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", u[u.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", u[u.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (a = r || (r = {})).CARD_NUMBER = "cardNumber", a.CARD_CVC = "cvc", a.CARD_EXPIRATION_DATE = "expirationDate", a.CARD_NAME = "name", a.ADDRESS_NAME = "name", a.ADDRESS_LINE_1 = "line1", a.ADDRESS_LINE_2 = "line2", a.ADDRESS_CITY = "city", a.ADDRESS_STATE = "state", a.ADDRESS_POSTAL_CODE = "postalCode", a.ADDRESS_COUNTRY = "country", (l = s || (s = {})).ADDRESS_LINE_1 = "address_line1", l.ADDRESS_LINE_2 = "address_line2", l.ADDRESS_CITY = "address_city", l.ADDRESS_STATE = "address_state", l.ADDRESS_ZIP = "address_zip", l.ADDRESS_COUNTRY = "address_country", l.CARD_NUMBER = "number", l.CARD_EXPIRATION_DATE = "exp", l.CARD_EXPIRATION_MONTH = "exp_month", l.CARD_EXPIRATION_YEAR = "exp_year";
            let g = Object.freeze({
                    address_line1: "line1",
                    address_line2: "line2",
                    address_city: "city",
                    address_state: "state",
                    address_zip: "postalCode",
                    address_country: "country",
                    number: "cardNumber",
                    exp: "expirationDate",
                    exp_month: "expirationDate",
                    exp_year: "expirationDate"
                }),
                p = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (d = o || (o = {})).CARD = "card", d.ADDRESS = "address";
            let I = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                A = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                N = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function m(e) {
                var t, n, i, r, s;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : null === (i = r.errors) || void 0 === i ? void 0 : i.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (s = e.body) || void 0 === s ? void 0 : s.errors) != null && (e.body = (0, _.default)(e.body.errors))
                }
                return new v(e)
            }
            class v extends E.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, f.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(A) : this._isInFieldSet(I)
                }
                hasAddressError() {
                    return this._isInFieldSet(N)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = h.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = h.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = h.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = h.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = h.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = h.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = h.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = h.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = g[n] || p[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            v.ErrorCodes = i, v.Fields = r, v.Sections = o, v.CARD_ERRORS = I, v.ADDRESS_ERRORS = N;
            var R = v
        },
        852766: function(e, t, n) {
            "use strict";
            n.r(t), n("736978")
        },
        927367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadErrorCodes: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var i, r, s = n("782340");
            (i = r || (r = {}))[i.GENERAL = 0] = "GENERAL", i[i.NO_FILE = 1] = "NO_FILE", i[i.PROGRESS = 2] = "PROGRESS", i[i.UPLOAD = 3] = "UPLOAD", i[i.READ = 4] = "READ";
            var o = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return s.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }
        },
        448993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                V6OrEarlierAPIError: function() {
                    return i.default
                },
                APIError: function() {
                    return r.default
                },
                BillingError: function() {
                    return s.default
                },
                AppliedGuildBoostError: function() {
                    return o.default
                },
                UploadVoiceDebugLogsError: function() {
                    return u.default
                },
                UploadErrorCodes: function() {
                    return u.UploadErrorCodes
                }
            });
            var i = n("333805"),
                r = n("599417"),
                s = n("736978");
            n("852766"), n("846071");
            var o = n("79489"),
                u = n("927367")
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), s = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != s) s(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, s, o;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (s = i || (i = {}))[s.GAME = 1] = "GAME", s[s.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", s[s.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (o = r || (r = {}))[o.BOT = 0] = "BOT", o[o.SERVER = 1] = "SERVER", o[o.SYSTEM_DM = 2] = "SYSTEM_DM", o[o.OFFICIAL = 3] = "OFFICIAL", o[o.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", o[o.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", o[o.AI = 6] = "AI", o[o.REMIX = 7] = "REMIX"
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("917351"),
                r = n.n(i);

            function s(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return r(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
                openCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            openCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                },
                updateCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            updateCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                }
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var i = n("872717"),
                r = n("913144"),
                s = n("479756"),
                o = n("38654"),
                u = n("9294"),
                a = n("26989"),
                l = n("337543"),
                d = n("697218"),
                c = n("49111");
            let _ = async (e, t) => {
                let n = null != t ? t : l.default.getInviteKeyForGuildId(e),
                    s = d.default.getCurrentUser(),
                    o = !a.default.isMember(e, null == s ? void 0 : s.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, u.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: s
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: s.version,
                            description: s.description,
                            formFields: s.form_fields,
                            guild: s.guild
                        }
                    }), s
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, f = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, E = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, h = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, g = async (e, t) => {
                if (o.default.isFullServerPreview(e)) {
                    (0, s.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: s
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: s
                    }), s
                } catch (e) {
                    throw e
                }
            };
            var p = {
                fetchVerificationForm: _,
                updateVerificationForm: f,
                updateVerificationFormDescription: E,
                enableVerificationForm: h,
                submitVerificationForm: g
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MAX_FORM_ELEMENTS: function() {
                    return u
                },
                MAX_NUM_RULES: function() {
                    return a
                },
                MAX_RULE_LENGTH: function() {
                    return l
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return _
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return h
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return g
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return p
                }
            }), n("222007");
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let s = new Set([r.VerificationFormFieldTypes.TERMS]),
                o = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                u = 5,
                a = 16,
                l = 300,
                d = 300,
                c = 8,
                _ = 150,
                f = 150,
                E = 1e3,
                h = 300,
                g = "Membership Gating",
                p = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return u
                },
                setHasUnsubmittedChanges: function() {
                    return a
                },
                setShowWarning: function() {
                    return l
                }
            });
            var i = n("308503"),
                r = n("659500"),
                s = n("49111");
            let o = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                u = (0, i.default)(e => o),
                a = e => {
                    u.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                l = e => {
                    u.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(s.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                s = n("599110"),
                o = n("50926"),
                u = n("347977"),
                a = n("394294"),
                l = n("49111");
            let d = () => {
                    s.default.track(l.AnalyticEvents.MODAL_DISMISSED, {
                        type: a.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    s.default.track(l.AnalyticEvents.OPEN_MODAL, {
                        type: a.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var _ = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let s = async t => {
                        await o.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: s,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, u.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), u.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, u.setShowWarning)(!0) : (0, r.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return I
                },
                updateImpersonating: function() {
                    return A
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return v
                },
                updateImpersonatedRoles: function() {
                    return R
                },
                updateImpersonatedData: function() {
                    return S
                }
            }), n("222007");
            var i = n("913144"),
                r = n("716241"),
                s = n("393414"),
                o = n("42203"),
                u = n("923959"),
                a = n("26989"),
                l = n("305961"),
                d = n("957255"),
                c = n("18494"),
                _ = n("282109"),
                f = n("599110"),
                E = n("38654"),
                h = n("507950"),
                g = n("49111"),
                p = n("724210");

            function I(e, t) {
                f.default.track(g.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === h.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), m(e)
            }

            function A(e, t) {
                let n = E.default.getData(e);
                null != n && n.type === t.type && (f.default.track(g.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === h.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), m(e))
            }

            function N(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function m(e) {
                let t = c.default.getChannelId(e),
                    n = o.default.getChannel(t),
                    i = null != t && (0, p.isStaticChannelRoute)(t);
                if (!i && !d.default.can(g.Permissions.VIEW_CHANNEL, n)) {
                    let t = u.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(g.Routes.CHANNEL(e, t.id))
                }
            }

            function v(e, t, n) {
                let i = new Set(_.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), A(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function R(e, t) {
                let n = l.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    u.default.addConditionalChangeListener(() => {
                        let t = a.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...u.default.getSelectableChannelIds(e), ...u.default.getVocalChannelIds(e)],
                            s = r.filter(e => !n.includes(e));
                        return s.length > 0 && v(e, s, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), A(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function S(e, t) {
                A(e, {
                    type: h.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return o
                },
                generateInviteKeyFromExtraData: function() {
                    return u
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return l
                }
            }), n("222007");
            var i = n("522632"),
                r = n("833858");
            let s = "event";

            function o(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[s])
                    } catch (e) {
                        return
                    }
                }(t);
                return u({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function u(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(s, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let o = i.parse(n),
                    u = (0, r.getFirstQueryStringValue)(o[s]);
                return {
                    baseCode: t,
                    guildScheduledEventId: u
                }
            }

            function l(e) {
                let [t] = e.split("?");
                return t
            }
        },
        651693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return o
                },
                isAnimatedImageUrl: function() {
                    return a
                },
                isVideoUrl: function() {
                    return d
                },
                isVideoFile: function() {
                    return c
                }
            }), n("222007");
            var i = n("773336");
            let r = (e, t) => {
                    if (null == e) return !1;
                    let [n, i] = e.split(/\?/, 1);
                    return t.test(n)
                },
                s = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                o = e => null != e && s.test(e),
                u = /\.(webp|gif)$/i,
                a = e => r(e, u),
                l = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
                d = e => r(e, l),
                c = e => null != e && l.test(e)
        },
        155084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007"), n("424973");
            var i = n("615361"),
                r = n("872717"),
                s = n("773336"),
                o = n("827032"),
                u = n("49111");
            let a = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var l = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: r
                        } = e,
                        u = {
                            name: n,
                            tags: (0, o.getGlobalTagsArray)()
                        };
                    null != r && r.forEach(e => {
                        u.tags.push(e)
                    });
                    let l = function() {
                        if ((0, s.isWeb)()) return "web";
                        {
                            let e = (0, s.getPlatformName)();
                            return a.has(e) ? e : null
                        }
                    }();
                    null != l && u.tags.push("platform:".concat(l));
                    let d = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return i.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != d && u.tags.push("release_channel:".concat(d)), this._metrics.push(u), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        r.default.post({
                            url: u.Endpoints.METRICS,
                            body: {
                                metrics: e
                            },
                            retries: 1
                        }).catch(t => {
                            this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                        })
                    }
                    this._metrics = []
                }
                constructor() {
                    this._metrics = [], this._intervalId = setInterval(() => {
                        this._flush()
                    }, 12e4)
                }
            }
        },
        821879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return s
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                id: "2023-06_reduced_payment_method_address_info",
                label: "Reduced Payment Method Address Info",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Simplify address form",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Partial address in card form",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function s() {
                let {
                    autoTrackExposure: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    autoTrackExposure: !0
                }, t = r.getCurrentConfig({
                    location: "2b69fe_1"
                }, {
                    autoTrackExposure: e
                });
                return t
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return u
                }
            });
            var i, r, s = n("773336");
            let o = null;

            function u() {
                return (0, s.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("702976");
            var i, r = n("866227"),
                s = n.n(r),
                o = n("666038");
            i = class e extends o.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: s(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = s(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = s(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("424973"), n("222007"), n("808653");
            var i = n("446674"),
                r = n("913144"),
                s = n("320954"),
                o = n("379881"),
                u = n("271938"),
                a = n("42203"),
                l = n("923959"),
                d = n("305961"),
                c = n("49111");
            let _ = null,
                f = {},
                E = null;

            function h() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let g = h();

            function p(e, t) {
                e.index = t
            }

            function I(e) {
                let t = l.default.getChannels(e),
                    n = h(),
                    i = e => {
                        var t;
                        let {
                            channel: i
                        } = e, r = null !== (t = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        r.push({
                            channel: i,
                            index: -1
                        })
                    };
                return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, l.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), t[0, l.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, s.default)(n._categories, n).forEach(p), f[e] = n, n
            }

            function A() {
                f = {}, null != _ && I(_)
            }

            function N(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                f[t] = void 0, _ === t && I(t)
            }

            function m(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                f[t] = void 0, _ === t && I(t)
            }

            function v(e) {
                let {
                    guildId: t
                } = e;
                f[t] = void 0, t === _ && I(t)
            }

            function R(e, t) {
                if (E = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (f[n] = void 0, n === _ && I(n), !0)
            }

            function S() {
                I(c.FAVORITES)
            }
            class T extends i.default.Store {
                initialize() {
                    this.waitFor(l.default, d.default, u.default, a.default, o.default), this.syncWith([o.default], S)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = f[e];
                        return null != t ? t : I(e)
                    }(e) : g
                }
            }
            T.displayName = "GuildCategoryStore";
            var C = new T(r.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (_ = null != t ? t : null, null == t || null != f[t]) return !1;
                    I(t)
                },
                CONNECTION_OPEN: A,
                OVERLAY_INITIALIZE: A,
                CACHE_LOADED_LAZY: A,
                GUILD_CREATE: N,
                GUILD_UPDATE: N,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete f[t]
                },
                CHANNEL_CREATE: m,
                CHANNEL_DELETE: m,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (f[e] = void 0, n = !0, _ === e && I(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (u.default.getId() !== n.id) return !1;
                    f[t] = void 0, t === _ && I(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == _) return !1;
                    I(_)
                },
                GUILD_ROLE_CREATE: v,
                GUILD_ROLE_UPDATE: v,
                GUILD_ROLE_DELETE: v,
                IMPERSONATE_UPDATE: v,
                IMPERSONATE_STOP: v,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != E ? R(a.default.getChannel(E), null) : R(a.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: i
                        } = t;
                        return u.default.getSessionId() !== i ? e : R(a.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("702976");
            var i = n("446674"),
                r = n("913144"),
                s = n("9294"),
                o = n("49111");
            let u = {},
                a = {},
                l = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, s.parseExtraDataFromInviteKey)(e),
                    r = u[e],
                    a = null != r ? {
                        state: o.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(a), u = {
                    ...u,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (l = {
                    ...l,
                    [a.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class _ extends i.default.Store {
                getInvite(e) {
                    return u[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return u
                }
                getInviteKeyForGuildId(e) {
                    return l[e]
                }
            }
            _.displayName = "InviteStore";
            var f = new _(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, s.parseExtraDataFromInviteKey)(t);
                    u = {
                        ...u,
                        [t]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = o.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = o.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = o.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, d(e.code, e => {
                        e.state = o.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("627445"),
                r = n.n(i),
                s = n("446674"),
                o = n("913144"),
                u = n("816454");
            let a = new Map;

            function l(e) {
                let t = a.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends s.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return l(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return l(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, u.getMainWindowId)();
                    return l(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(o.default, {
                WINDOW_INIT: function(e) {
                    r(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: s
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: s
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = l(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = l(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = l(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (a.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return a.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var _ = c
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                s = n("276825"),
                o = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: r
                        })
                    })
                }, s.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return l
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return _
                },
                makeCssUrlString: function() {
                    return f
                },
                getPalette: function() {
                    return h
                },
                getPaletteForAvatar: function() {
                    return g
                },
                readFileAsBase64: function() {
                    return I
                },
                dataUriFileSize: function() {
                    return A
                },
                dataUrlToFile: function() {
                    return N
                },
                isPNGAnimated: function() {
                    return m
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var i = n("627445"),
                r = n.n(i),
                s = n("917351"),
                o = n.n(s),
                u = n("48648"),
                a = n.n(u);

            function l(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: s = 0,
                    minHeight: o = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), s), n = Math.max(Math.round(n * e), o);
                    let u = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * u), s), n = Math.max(Math.round(n * u), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return l({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, s = 1;
                t > i && (s = i / t), t = Math.round(t * s);
                let o = 1;
                return (n = Math.round(n * s)) > r && (o = r / n), Math.min(s * o, 1)
            }

            function _(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function f(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let E = [
                [0, 0, 0]
            ];

            function h(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return E;
                let s = i.width = 0 === e.width ? 128 : e.width,
                    o = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, s, o);
                let u = r.getImageData(0, 0, s, o).data,
                    l = function(e, t, n) {
                        let i = [];
                        for (let r = 0, s, o, u, a, l; r < t; r += n) o = e[(s = 4 * r) + 0], u = e[s + 1], a = e[s + 2], (void 0 === (l = e[s + 3]) || l >= 125) && !(o > 250 && u > 250 && a > 250) && i.push([o, u, a]);
                        return i
                    }(u, s * o, n),
                    d = a(l, t);
                return "boolean" == typeof d ? E : d.palette()
            }
            let g = e => "number" == typeof e ? null : p(e),
                p = o.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(h(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function I(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function A(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function N(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function m(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return s
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let s = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => s(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var s = n("697218"),
                o = n("615931");
            let u = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, u = e.updateModalProps, r = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: s,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: a
                    } = {}
                } = e;
                if (null == i) {
                    null == a || a();
                    return
                }
                let d = i(E, c, o);

                function c() {
                    null == a || a()
                }

                function _(e) {
                    r(d), n(e)
                }

                function f(e) {
                    r(d), s(e)
                }

                function E(e) {
                    return u(d, E, c, {
                        ...o,
                        isLoading: !0
                    }), l({
                        promiseFn: t,
                        resolve: _,
                        reject: f,
                        code: e,
                        mfaCodeHandler: h,
                        isModalOpen: !0
                    })
                }

                function h(e) {
                    let {
                        res: t
                    } = e;
                    u(d, E, c, {
                        ...o,
                        error: t.body.message
                    })
                }
            }

            function l(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: s = a,
                    isModalOpen: o = !1,
                    ...u
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, a;
                    if (r = e, a = o, r.body && 60008 === r.body.code || a && 429 === r.status) return s({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...u
                    });
                    i(e)
                })
            }

            function d(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...u
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, o.resolveThunk)(r) ? a : l)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...u
                    })
                })
            }
        },
        34676: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NotificationLabels: function() {
                    return r
                },
                NotificationLabel: function() {
                    return E
                },
                MessageNotificationSettings: function() {
                    return h
                },
                trackGuildNotificationSettingsUpdate: function() {
                    return g
                },
                muteConfigToTimestamp: function() {
                    return I
                },
                trackChannelNotificationSettingsUpdate: function() {
                    return A
                },
                getCurrentGuildSettings: function() {
                    return N
                },
                getManyCurrentGuildSettings: function() {
                    return m
                },
                getCurrentChannelSettings: function() {
                    return v
                },
                getManyCurrentChannelSettings: function() {
                    return R
                }
            }), n("702976"), n("222007");
            var i, r, s, o, u = n("716241"),
                a = n("42203"),
                l = n("282109"),
                d = n("568734"),
                c = n("49111"),
                _ = n("133335"),
                f = n("397336");
            (s = i || (i = {})).GUILD = "guild", s.CHANNEL = "channel", (o = r || (r = {})).ForumThreadsCreatedOn = "enabled forum thread created notifs", o.ForumThreadsCreatedOff = "disabled forum thread created notifs", o.SuppressEveryoneOn = "enabled suppress everyone", o.SuppressEveryoneOff = "disabled suppress everyone", o.SuppressRolesOn = "enabled suppress roles", o.SuppressRolesOff = "disabled suppress roles", o.HighlightsOn = "enabled highlights", o.HighlightsOff = "disabled highlights", o.MobilePushOn = "enabled mobile push notifications", o.MobilePushOff = "disabled mobile push notifications", o.UnreadsAll = "unreads set to all messages", o.UnreadsMentions = "unreads set to mentions", o.UnreadsDefault = "unreads set to the default", o.NotificationsAll = "notifications set to all messages", o.NotificationsMentions = "notifications set to mentions", o.NotificationsNothing = "notifications set to nothing", o.NotificationsDefault = "notifications set to the default", o.PresetAll = "notification preset set to all messages", o.PresetMentions = "notification preset set to mentions", o.PresetNothing = "notification preset set to nothing", o.PresetDefault = "notification preset set to the default", o.OptedIn = "opted in to entity", o.OptedOut = "opted out from entity", o.Favorited = "favorited", o.UnFavorited = "unfavorited", o.Muted = "muted", o.Unmuted = "unmuted", o.MutedScheduledEvents = "muted scheduled events", o.UnmutedScheduledEvents = "unmuted scheduled events", o.OverrideCreated = "channel override created", o.OverrideDeleted = "channel override deleted";
            let E = {
                    forumThreadsCreated: e => e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
                    suppressEveryone: e => e ? "enabled suppress everyone" : "disabled suppress everyone",
                    suppressRoles: e => e ? "enabled suppress roles" : "disabled suppress roles",
                    highlights: e => e ? "enabled highlights" : "disabled highlights",
                    mobilePush: e => e ? "enabled mobile push notifications" : "disabled mobile push notifications",
                    optedIn: e => e ? "opted in to entity" : "opted out from entity",
                    favorited: e => e ? "favorited" : "unfavorited",
                    muted: e => e ? "muted" : "unmuted",
                    mutedEvents: e => e ? "muted scheduled events" : "unmuted scheduled events",
                    unreads: e => e === _.UnreadSetting.ALL_MESSAGES ? "unreads set to all messages" : e === _.UnreadSetting.ONLY_MENTIONS ? "unreads set to mentions" : "unreads set to the default",
                    notifications: e => e === c.UserNotificationSettings.ALL_MESSAGES ? "notifications set to all messages" : e === c.UserNotificationSettings.ONLY_MENTIONS ? "notifications set to mentions" : e === c.UserNotificationSettings.NO_MESSAGES ? "notifications set to nothing" : "notifications set to the default"
                },
                h = Object.freeze({
                    [c.UserNotificationSettings.ALL_MESSAGES]: "All",
                    [c.UserNotificationSettings.ONLY_MENTIONS]: "Mentions",
                    [c.UserNotificationSettings.NO_MESSAGES]: "Nothing",
                    [c.UserNotificationSettings.NULL]: null
                });

            function g(e, t, n, i, r) {
                var s, o;
                let a = function(e) {
                        var t, n, i, r, s, o, u;
                        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            l = null != a.mute_config && null != a.mute_config.end_time ? new Date(a.mute_config.end_time).getTime() : e.guild_muted_until,
                            d = null != a.message_notifications ? h[a.message_notifications] : e.guild_message_notification_settings;
                        return {
                            guild_muted_until: l,
                            guild_flags: null !== (t = a.flags) && void 0 !== t ? t : e.guild_flags,
                            guild_is_muted: null !== (n = a.muted) && void 0 !== n ? n : e.guild_is_muted,
                            guild_message_notification_settings: d,
                            guild_suppress_roles: null !== (i = a.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                            guild_receive_mobile_push: null !== (r = a.mobile_push) && void 0 !== r ? r : e.guild_receive_mobile_push,
                            guild_notify_highlights: null !== (s = a.notify_highlights) && void 0 !== s ? s : e.guild_notify_highlights,
                            guild_suppress_everyone: null !== (o = a.suppress_everyone) && void 0 !== o ? o : e.guild_suppress_everyone,
                            guild_scheduled_events_muted: null !== (u = a.mute_scheduled_events) && void 0 !== u ? u : e.guild_scheduled_events_muted
                        }
                    },
                    l = a(n),
                    _ = a(N(e), t),
                    E = p(l, _, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    g = null !== (s = E("guild_flags")) && void 0 !== s ? s : 0,
                    I = (null !== (o = _.guild_flags) && void 0 !== o ? o : 0) ^ g,
                    A = 0 === (0, d.removeFlags)(I, f.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_OFF, f.GuildNotificationSettingsFlags.OPT_IN_CHANNELS_ON);
                u.default.trackWithMetadata(c.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ..._,
                    location: r,
                    guild_id: e,
                    update_type: "guild",
                    label: i,
                    guild_flags_old: E("guild_flags"),
                    guild_is_muted_old: E("guild_is_muted"),
                    guild_suppress_roles_old: E("guild_suppress_roles"),
                    guild_notify_highlights_old: E("guild_notify_highlights"),
                    guild_suppress_everyone_old: E("guild_suppress_everyone"),
                    guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
                    guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
                    guild_message_notification_settings_old: E("guild_message_notification_settings"),
                    is_opt_in_only_change: A
                })
            }

            function p(e, t, n) {
                return i => {
                    if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0
                }
            }

            function I(e) {
                return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null
            }

            function A(e, t, n, i, r, s) {
                var o, l;
                let _ = function(t) {
                        var n, i;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            s = null !== (n = r.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                            o = null != r.message_notifications ? h[r.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                            u = null == e ? null : !0 === s || null != o;
                        return {
                            channel_is_muted: s,
                            channel_is_overridden: u,
                            channel_flags: null !== (i = r.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                            channel_message_notification_settings: o,
                            channel_muted_until: I(r.mute_config)
                        }
                    },
                    E = _(i),
                    g = _(v(e, t), n),
                    A = p(E, g, "RETURN_PREVIOUS_WHEN_CHANGED"),
                    N = a.default.getChannel(t),
                    m = null !== (o = A("channel_flags")) && void 0 !== o ? o : 0,
                    R = (null !== (l = g.channel_flags) && void 0 !== l ? l : 0) ^ m,
                    S = 0 === (0, d.removeFlags)(R, f.ChannelNotificationSettingsFlags.FAVORITED, f.ChannelNotificationSettingsFlags.OPT_IN_ENABLED);
                u.default.trackWithMetadata(c.AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, {
                    ...g,
                    location: s,
                    guild_id: e,
                    channel_id: t,
                    update_type: "channel",
                    label: r,
                    parent_id: null != N ? N.parent_id : null,
                    channel_flags_old: A("channel_flags"),
                    channel_is_muted_old: A("channel_is_muted"),
                    channel_muted_until_old: A("channel_muted_until"),
                    channel_is_overridden_old: A("channel_is_overridden"),
                    channel_message_notification_settings_old: A("channel_message_notification_settings"),
                    is_opt_in_only_change: S
                })
            }

            function N(e) {
                let t = l.default.isMuted(e),
                    n = l.default.getMuteConfig(e);
                return {
                    guild_suppress_everyone: l.default.isSuppressEveryoneEnabled(e),
                    guild_suppress_roles: l.default.isSuppressRolesEnabled(e),
                    guild_scheduled_events_muted: l.default.isMuteScheduledEventsEnabled(e),
                    guild_is_muted: t,
                    guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
                    guild_receive_mobile_push: l.default.isMobilePushEnabled(e),
                    guild_message_notification_settings: h[l.default.getMessageNotifications(e)],
                    guild_notify_highlights: l.default.getNotifyHighlights(e),
                    guild_flags: l.default.getGuildFlags(e)
                }
            }

            function m(e) {
                let t = new Map;
                return e.forEach(e => t.set(e, N(e))), t
            }

            function v(e, t) {
                let n = l.default.isChannelMuted(e, t),
                    i = l.default.getChannelMuteConfig(e, t);
                return {
                    channel_is_muted: n,
                    channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
                    channel_message_notification_settings: h[l.default.getChannelMessageNotifications(e, t)],
                    channel_flags: l.default.getChannelIdFlags(e, t)
                }
            }

            function R(e, t) {
                let n = new Map;
                return t.forEach(t => n.set(t, v(e, t))), n
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("781738");
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return u
                },
                updateModalProps: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                s = n("920636");
            let o = (e, t, n) => function(r) {
                return (0, i.jsx)(s.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function u(e, t, n) {
                return (0, r.openModal)(o(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, i) {
                return (0, r.updateModal)(e, o(t, n, i))
            }
        },
        432710: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MetricEvents: function() {
                    return i
                }
            }), n("222007"), (r = i || (i = {})).APP_CRASHED = "app_crashed", r.SOCKET_CRASHED = "socket_crashed", r.MESSAGE_REQUEST_VIEW = "message_request_view", r.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", r.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", r.FAMILY_CENTER_VIEW = "family_center_view", r.SAFETY_HUB_VIEW = "safety_hub_view", r.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", r.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", r.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", r.AFK_NOT_IDLE = "afk_not_idle", r.CAPTCHA_EVENT = "captcha_event", r.SAFETY_WARNING_VIEW = "safety_warning_view", r.SAFETY_WARNING_MODAL_VIEW = "safety_warning_modal_view", r.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = "explicit_media_scan_client_timed_out", r.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING = "explicit_media_scan_client_timing", r.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", r.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", r.OTA_UPDATE_CHECK = "ota_update_check", r.OTA_ASSET_DOWNLOAD = "ota_asset_download", r.DEBUG_OTA_200_TIMEOUT = "debug_ota_200_timeout"
        },
        615361: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return s
                }
            }), n("222007"), (r = i || (i = {})).STABLE = "stable", r.BETA = "beta", r.ALPHA = "alpha", r.PTB = "ptb", r.CANARY = "canary", r.STAGING = "staging", r.DEVELOPMENT = "development";
            let s = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);