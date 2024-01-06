(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["14913"], {
        160679: function(t, e, r) {
            r("70102"), r("424973"), e.parse = function(t, e) {
                if ("string" != typeof t) throw TypeError("argument str must be a string");
                var r = {},
                    i = t.split(u),
                    o = (e || {}).decode || n;
                return i.forEach(function(t) {
                    var e = t.indexOf("=");
                    if (!(e < 0)) {
                        var n = t.substr(0, e).trim(),
                            i = t.substr(++e, t.length).trim();
                        '"' == i[0] && (i = i.slice(1, -1)), void 0 == r[n] && (r[n] = function(t, e) {
                            try {
                                return e(t)
                            } catch (e) {
                                return t
                            }
                        }(i, o))
                    }
                }), r
            }, e.serialize = function(t, e, r) {
                var n = r || {},
                    u = n.encode || i;
                if (!o.test(t)) throw TypeError("argument name is invalid");
                var s = u(e);
                if (s && !o.test(s)) throw TypeError("argument val is invalid");
                var a = [t + "=" + s];
                if (null != n.maxAge) {
                    var c = n.maxAge - 0;
                    if (isNaN(c)) throw Error("maxAge should be a Number");
                    a.push("Max-Age=" + Math.floor(c))
                }
                if (n.domain) {
                    if (!o.test(n.domain)) throw TypeError("option domain is invalid");
                    a.push("Domain=" + n.domain)
                }
                if (n.path) {
                    if (!o.test(n.path)) throw TypeError("option path is invalid");
                    a.push("Path=" + n.path)
                }
                return n.expires && a.push("Expires=" + n.expires.toUTCString()), n.httpOnly && a.push("HttpOnly"), n.secure && a.push("Secure"), n.firstPartyOnly && a.push("First-Party-Only"), a.join("; ")
            };
            var n = decodeURIComponent,
                i = encodeURIComponent,
                u = /; */,
                o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
        },
        379792: function(t, e, r) {
            "use strict";
            var n = r("727204"),
                i = TypeError,
                u = function(t) {
                    var e, r;
                    this.promise = new t(function(t, n) {
                        if (void 0 !== e || void 0 !== r) throw i("Bad Promise constructor");
                        e = t, r = n
                    }), this.resolve = n(e), this.reject = n(r)
                };
            t.exports.f = function(t) {
                return new u(t)
            }
        },
        718530: function(t, e, r) {
            "use strict";
            var n = r("503486");
            t.exports = n.Promise
        },
        33270: function(t, e, r) {
            "use strict";
            var n = r("418855"),
                i = r("472960"),
                u = r("379792");
            t.exports = function(t, e) {
                if (n(t), i(e) && e.constructor === t) return e;
                var r = u.f(t);
                return (0, r.resolve)(e), r.promise
            }
        },
        499460: function(t, e, r) {
            "use strict";
            var n = r("418855"),
                i = r("338286"),
                u = r("551544"),
                o = r("174669")("species");
            t.exports = function(t, e) {
                var r, s = n(t).constructor;
                return void 0 === s || u(r = n(s)[o]) ? e : i(r)
            }
        },
        506083: function(t, e, r) {
            "use strict";
            var n = r("859514"),
                i = r("140925"),
                u = r("718530"),
                o = r("664144"),
                s = r("434978"),
                a = r("125359"),
                c = r("499460"),
                l = r("33270"),
                f = r("484784"),
                d = u && u.prototype;
            if (n({
                    target: "Promise",
                    proto: !0,
                    real: !0,
                    forced: !!u && o(function() {
                        d.finally.call({
                            then: function() {}
                        }, function() {})
                    })
                }, {
                    finally: function(t) {
                        var e = c(this, s("Promise")),
                            r = a(t);
                        return this.then(r ? function(r) {
                            return l(e, t()).then(function() {
                                return r
                            })
                        } : t, r ? function(r) {
                            return l(e, t()).then(function() {
                                throw r
                            })
                        } : t)
                    }
                }), !i && a(u)) {
                var h = s("Promise").prototype.finally;
                d.finally !== h && f(d, "finally", h, {
                    unsafe: !0
                })
            }
        },
        48174: function(t, e, r) {
            "use strict";

            function n(t, e) {
                if (t.length !== e.length) return !1;
                for (let r = 0; r < e.length && r < t.length; r++)
                    if (!Object.is(t[r], e[r])) return !1;
                return !0
            }
            r.r(e), r.d(e, {
                default: function() {
                    return n
                }
            })
        },
        775560: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                useForceUpdate: function() {
                    return n.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return u.default
                }
            });
            var n = r("14716"),
                i = r("745510"),
                u = r("315378")
        },
        14716: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return i
                }
            }), r("222007");
            var n = r("884691");

            function i() {
                let [, t] = (0, n.useState)({});
                return (0, n.useCallback)(() => t({}), [])
            }
        },
        315378: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return u
                }
            });
            var n = r("884691");
            let i = {};

            function u(t) {
                let e = (0, n.useRef)(i);
                return e.current === i && (e.current = t()), e.current
            }
        },
        745510: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return o
                }
            });
            var n = r("884691"),
                i = r("48174");
            let u = [];

            function o(t, e) {
                let r = (0, n.useRef)(),
                    o = (0, n.useRef)(u);
                return o.current === u ? (r.current = t(), o.current = e) : !(0, i.default)(e, o.current) && (r.current = t(), o.current = e), r.current
            }
        },
        285899: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                GUILD_LIMITED_ACCESS_HC_LINK: function() {
                    return n
                }
            });
            let n = "https://support.discord.com/hc/en-us/articles/6461420677527-Limited-Access-FAQ"
        },
        135722: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var i = r("77078"),
                u = r("305961"),
                o = r("476765"),
                s = r("285899"),
                a = r("782340"),
                c = r("334931"),
                l = t => {
                    let {
                        onClose: e,
                        guildId: r
                    } = t, l = (0, o.useUID)(), f = a.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION_FALLBACK.format({
                        helpdeskArticle: s.GUILD_LIMITED_ACCESS_HC_LINK
                    }), d = u.default.getGuild(r);
                    return null != d && (f = a.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_DESCRIPTION.format({
                        guildName: d.name,
                        helpdeskArticle: s.GUILD_LIMITED_ACCESS_HC_LINK
                    })), (0, n.jsxs)(i.ModalRoot, {
                        ...t,
                        "aria-labelledby": l,
                        children: [(0, n.jsxs)(i.ModalHeader, {
                            separator: !1,
                            className: c.modalHeader,
                            children: [(0, n.jsx)(i.Heading, {
                                id: l,
                                variant: "heading-xl/extrabold",
                                children: a.default.Messages.GUILD_LIMITED_ACCESS_INFO_MODAL_HEADING
                            }), (0, n.jsx)(i.ModalCloseButton, {
                                className: c.closeButton,
                                onClick: e
                            })]
                        }), (0, n.jsx)(i.ModalContent, {
                            className: c.modalContent,
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-md/normal",
                                className: c.contentText,
                                children: f
                            })
                        }), (0, n.jsx)(i.ModalFooter, {
                            children: (0, n.jsx)(i.Button, {
                                className: c.button,
                                size: i.Button.Sizes.MIN,
                                onClick: e,
                                children: a.default.Messages.OKAY
                            })
                        })]
                    })
                }
        }
    }
]);