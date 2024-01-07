(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46670"], {
        78349: function(e, t, n) {
            "use strict";
            n("424973"), e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (s = t[2].split("-")).shift(), r = s);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var l = [];
                if (t[6]) {
                    (s = t[6].split("-")).shift();
                    for (var s, a, o = []; s.length;) {
                        var u = s.shift();
                        1 === u.length ? a ? (l.push({
                            singleton: a,
                            extension: o
                        }), a = u, o = []) : a = u : o.push(u)
                    }
                    l.push({
                        singleton: a,
                        extension: o
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: l,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, l = 0; i < r; i++) {
                    for (var s = e.charCodeAt(i); l < n;)
                        if (t.charCodeAt(l++) === s) continue e;
                    return !1
                }
                return !0
            }
        },
        310013: function(e, t, n) {
            "use strict";
            var r = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                l = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var s = Object.getOwnPropertyNames(t);
                    l && (s = s.concat(Object.getOwnPropertySymbols(t)));
                    for (var a = 0; a < s.length; ++a)
                        if (!r[s[a]] && !i[s[a]] && (!n || !n[s[a]])) try {
                            e[s[a]] = t[s[a]]
                        } catch (e) {}
                }
                return e
            }
        },
        458389: function(e, t, n) {
            n("424973");
            var r = n("594140"),
                i = n("564414"),
                l = n("725502"),
                s = n("591350"),
                a = n("476540"),
                o = n("381178"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = l(e),
                    c = !n && i(e),
                    d = !n && !c && s(e),
                    f = !n && !c && !d && o(e),
                    p = n || c || d || f,
                    E = p ? r(e.length, String) : [],
                    _ = E.length;
                for (var h in e)(t || u.call(e, h)) && !(p && ("length" == h || d && ("offset" == h || "parent" == h) || f && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || a(h, _))) && E.push(h);
                return E
            }
        },
        659382: function(e, t, n) {
            var r = n("33426"),
                i = n("136047"),
                l = n("270879"),
                s = {};
            s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return l(e) && i(e.length) && !!s[r(e)]
            }
        },
        205873: function(e, t, n) {
            n("424973");
            var r = n("733228"),
                i = n("541349"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) l.call(e, n) && "constructor" != n && t.push(n);
                return t
            }
        },
        594140: function(e, t, n) {
            e.exports = function(e, t) {
                for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                return r
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
            var r = Object.prototype;
            e.exports = function(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || r)
            }
        },
        541349: function(e, t, n) {
            var r = n("761197")(Object.keys, Object);
            e.exports = r
        },
        276440: function(e, t, n) {
            e = n.nmd(e);
            var r = n("447414"),
                i = "object" == typeof t && t && !t.nodeType && t,
                l = i && "object" == typeof e && e && !e.nodeType && e,
                s = l && l.exports === i && r.process,
                a = function() {
                    try {
                        var e = l && l.require && l.require("util").types;
                        if (e) return e;
                        return s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            e.exports = a
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
            var r = n("690516"),
                i = n("221386"),
                l = "object" == typeof t && t && !t.nodeType && t,
                s = l && "object" == typeof e && e && !e.nodeType && e,
                a = s && s.exports === l ? r.Buffer : void 0,
                o = a ? a.isBuffer : void 0;
            e.exports = o || i
        },
        381178: function(e, t, n) {
            var r = n("659382"),
                i = n("492692"),
                l = n("276440"),
                s = l && l.isTypedArray,
                a = s ? i(s) : r;
            e.exports = a
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                i = n("205873"),
                l = n("603108");
            e.exports = function(e) {
                return l(e) ? r(e) : i(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        144824: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        686570: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4cbb7212cd1c94d49cdf.svg"
        },
        669200: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a426a3ae492eb54ac0f0.svg"
        },
        479125: function(e, t, n) {
            "use strict";
            e.exports = n.p + "2d8dac1dbbc8278bfa86.svg"
        },
        945439: function(e, t, n) {
            "use strict";
            e.exports = n.p + "60e64ec1e28c734051d0.svg"
        },
        465312: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e5fb2c858f851f61c32e.svg"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return s
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function s() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        405932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("225389"),
                l = n("77078"),
                s = n("135898"),
                a = function(e) {
                    let {
                        message: t
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: s.container,
                        children: [(0, r.jsx)(i.CircleInformationIcon, {
                            className: s.icon,
                            width: 20,
                            height: 20,
                            color: l.tokens.colors.TEXT_WARNING
                        }), (0, r.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            color: "header-muted",
                            children: t
                        })]
                    })
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("782340"),
                u = n("347129");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: c,
                        isLoading: d,
                        maxLength: f,
                        transitionState: p,
                        helpMessage: E,
                        retryPrompt: _,
                        retrySuccessMessage: h
                    } = this.props, {
                        code: I,
                        errorMessage: m,
                        retrySuccess: g
                    } = this.state, S = i.Children.count(l) > 0 ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, C = null != _ ? (0, r.jsxs)(a.Text, {
                        className: s(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(a.Clickable, {
                            className: s(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(a.Anchor, {
                                children: _
                            })
                        })]
                    }) : null, v = g ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: h
                        })
                    }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: p,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [null != E ? (0, r.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: E
                                }) : null, S, v, (0, r.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != f ? f : 10,
                                        value: I,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != c ? c : m
                                    }) : null, C]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === I.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            }), n("424973");
            var r = n("37983"),
                i = n("884691"),
                l = n("310013"),
                s = n.n(l),
                a = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                u = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends i.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: r
                        } = this.state, {
                            style: i
                        } = this.props, l = null != i ? u(i.backgroundImage) : null;
                        null == l && l !== n ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : this.cachedURLs.indexOf(l) >= 0 ? this.setState({
                            loaded: !0,
                            cached: l
                        }) : null != l && l !== n && !0 === r && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(l))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...i
                        } = this.props, {
                            loaded: l,
                            cached: s
                        } = this.state;
                        if (!l && null != t) {
                            var a;
                            t = {
                                ...t,
                                backgroundImage: null == (a = s) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
                            }
                        }
                        return (0, r.jsx)(e, {
                            style: t,
                            ...i
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? u(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return s(t, e), t
            }
        },
        773785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoostTier1SimpleIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M13.05 1.4a1.59 1.59 0 0 0-2.1 0l-4.9 4A3.37 3.37 0 0 0 5 8v8c0 1.07.4 2.06 1.05 2.6l4.9 4c.65.53 1.45.53 2.1 0l4.9-4A3.37 3.37 0 0 0 19 16V8c0-1.07-.4-2.06-1.05-2.6l-4.9-4ZM12 3.12 7.32 6.95C7.25 7.01 7 7.35 7 8v8c0 .65.25 1 .32 1.05L12 20.88l4.68-3.83c.07-.06.32-.4.32-1.05V8c0-.65-.25-1-.32-1.05L12 3.12Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        470131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoostTier2SimpleIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
                        className: a
                    })
                })
            }
        },
        986845: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoostTier3SimpleIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M20.14.8a1.21 1.21 0 0 0-2.28 0l-.5 1.37a2 2 0 0 1-1.19 1.18l-1.38.51a1.21 1.21 0 0 0 0 2.28l1.38.5a2 2 0 0 1 1.18 1.19l.51 1.38c.13.34.37.57.65.7.6.24 1.36.01 1.63-.7l.5-1.38a2 2 0 0 1 1.19-1.18l1.38-.51a1.21 1.21 0 0 0 0-2.28l-1.38-.5a2 2 0 0 1-1.18-1.19L20.14.79Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13.25 1.56c.3.24.23.7-.06.93a3.22 3.22 0 0 0 .9 5.52l1.17.43a.5.5 0 0 1 .3.3l.43 1.16a3.14 3.14 0 0 0 2.51 2.06c.27.04.5.26.5.54V16c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4a1.59 1.59 0 0 1 2.1 0l.2.16Z",
                        className: a
                    })]
                })
            }
        },
        225389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleInformationIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: a = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: a = "",
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...c
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        457802: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MinusIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M22 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: a
                    })]
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: a
                    })
                })
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), l = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, l, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (l = r || (r = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = i || (i = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
        },
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = {
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
        903016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("808653"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("446674"),
                o = n("266491"),
                u = n("77078"),
                c = n("345116"),
                d = n("521012"),
                f = n("145131"),
                p = n("965397"),
                E = n("423487"),
                _ = n("782340"),
                h = n("47274");
            class I extends i.PureComponent {
                render() {
                    let {
                        onClose: e
                    } = this.props;
                    return (0, r.jsxs)(u.ModalHeader, {
                        separator: !1,
                        justify: f.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            children: this.props.text
                        }), null != e ? (0, r.jsx)(u.ModalCloseButton, {
                            onClick: e
                        }) : null]
                    })
                }
            }

            function m(e) {
                let {
                    imageClass: t,
                    children: n,
                    error: i,
                    onDismissError: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: h.content,
                    children: [(0, r.jsx)("div", {
                        className: s(h.image, t)
                    }), n, (0, r.jsx)(o.default, {
                        children: null != i ? (0, r.jsx)(p.default, {
                            className: h.error,
                            children: (0, r.jsx)(u.FormErrorBlock, {
                                onDismiss: l,
                                children: i.message
                            })
                        }) : null
                    })]
                })
            }
            let g = e => {
                let {
                    canceledCount: t
                } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPremiumTypeSubscription());
                return null == n ? null : (0, r.jsxs)("div", {
                    className: h.pendingCancellation,
                    children: [(0, r.jsx)(E.default, {
                        className: h.pendingCancellationIcon
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        className: h.pendingCancellationMessage,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                            date: n.currentPeriodEnd,
                            canceledCount: t
                        })
                    })]
                })
            };

            function S(e) {
                let {
                    imageClass: t,
                    blurb: n,
                    guild: i,
                    warning: l,
                    error: s,
                    onDismissError: a,
                    slotCount: o = 1,
                    canceledCount: d = 0
                } = e;
                return (0, r.jsxs)(m, {
                    imageClass: t,
                    error: s,
                    onDismissError: a,
                    children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: n
                    }), (0, r.jsx)(c.default, {
                        className: h.guildCard,
                        guild: i,
                        subscriptionChange: o
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: l
                    }), d > 0 ? (0, r.jsx)(g, {
                        canceledCount: d
                    }) : null]
                })
            }
            class C extends i.PureComponent {
                render() {
                    let {
                        confirmation: e,
                        confirmationLabel: t,
                        isModifyingSubscription: n,
                        onConfirm: i,
                        onCancel: l
                    } = this.props;
                    return (0, r.jsxs)(u.ModalFooter, {
                        children: [(0, r.jsx)(u.Button, {
                            onClick: i,
                            submitting: n,
                            "aria-label": t,
                            children: e
                        }), (0, r.jsx)(u.Button, {
                            look: u.Button.Looks.LINK,
                            color: u.Button.Colors.PRIMARY,
                            onClick: l,
                            disabled: n,
                            children: _.default.Messages.CANCEL
                        })]
                    })
                }
            }
            class v extends i.PureComponent {
                render() {
                    let {
                        guild: e,
                        header: t,
                        blurb: n,
                        warning: l,
                        confirmation: s,
                        confirmationLabel: a,
                        imageClass: o,
                        error: c,
                        isModifyingSubscription: d,
                        onConfirm: f,
                        onCancel: p,
                        onDismissError: E,
                        canceledCount: _
                    } = this.props;
                    return (0, r.jsxs)(i.Fragment, {
                        children: [(0, r.jsx)(I, {
                            text: t
                        }), (0, r.jsx)(u.ModalContent, {
                            children: (0, r.jsx)(S, {
                                guild: e,
                                blurb: n,
                                warning: l,
                                imageClass: o,
                                error: c,
                                onDismissError: E,
                                canceledCount: _
                            })
                        }), (0, r.jsx)(C, {
                            confirmation: s,
                            confirmationLabel: a,
                            isModifyingSubscription: d,
                            onConfirm: f,
                            onCancel: p
                        })]
                    })
                }
            }
            v.Header = I, v.ApplyBody = S, v.TransferBody = function(e) {
                var t, n;
                let {
                    imageClass: l,
                    blurb: s,
                    fromGuilds: a,
                    toGuild: o,
                    error: d,
                    onDismissError: f,
                    slotCount: p = 1,
                    canceledCount: E = 0
                } = e, I = i.useRef(a), S = null === (t = I.current) || void 0 === t ? void 0 : t.length, C = null === (n = I.current) || void 0 === n ? void 0 : n.reduce((e, t) => (!e.hasOwnProperty(t.id) && (e[t.id] = []), e[t.id].push(t), e), {});
                return (0, r.jsxs)(m, {
                    imageClass: l,
                    error: d,
                    onDismissError: f,
                    children: [(0, r.jsx)(u.Text, {
                        variant: "text-md/normal",
                        children: s
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-xs/bold",
                        className: h.transferGuildCardHeader,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_FROM_GUILD.format({
                            guildCount: S
                        })
                    }), null != C ? Object.keys(C).map(e => (0, r.jsx)(c.default, {
                        className: h.transferFromGuildCard,
                        guild: C[e][0],
                        subscriptionChange: -1 * C[e].length
                    }, e)) : null, (0, r.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: h.transferGuildCardHeader,
                        children: _.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_TO_GUILD.format({
                            slotCount: p
                        })
                    }), (0, r.jsx)("div", {
                        className: h.activeTransferGuildCardBorder,
                        children: (0, r.jsx)(c.default, {
                            className: h.transferToGuildCard,
                            guild: o,
                            subscriptionChange: null != a ? a.length : 1
                        })
                    }), E > 0 ? (0, r.jsx)(g, {
                        canceledCount: E
                    }) : null]
                })
            }, v.Footer = C;
            var T = v
        },
        247760: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Steps: function() {
                    return r
                },
                default: function() {
                    return A
                }
            }), n("222007");
            var r, i, l = n("37983"),
                s = n("884691"),
                a = n("627445"),
                o = n.n(a),
                u = n("446674"),
                c = n("77078"),
                d = n("583367"),
                f = n("735201"),
                p = n("305961"),
                E = n("625634"),
                _ = n("751433"),
                h = n("599110"),
                I = n("427459"),
                m = n("903016"),
                g = n("936992"),
                S = n("658206"),
                C = n("49111"),
                v = n("782340"),
                T = n("822841");
            (i = r || (r = {})).UNUSED_QUANTITY_SELECT = "UNUSED_QUANTITY_SELECT", i.GUILD_SELECT = "GUILD_SELECT", i.CONFIRM = "CONFIRM", i.SUCCESS = "SUCCESS";
            var A = e => {
                var t, n;
                let {
                    guildBoostSlots: r,
                    selectedGuild: i,
                    locationSection: a,
                    transitionState: A,
                    onClose: N
                } = e, R = (0, I.getAvailableGuildBoostSlots)(E.default.boostSlots);
                o(null != r || null != i, "Must either provide slots or an initial selected guild"), o(!(null == r ? void 0 : r.some(e => e.isOnCooldown())), "If slots are provided, they must not be on cooldown");
                let L = [null == r ? "UNUSED_QUANTITY_SELECT" : null, null == i ? "GUILD_SELECT" : null, "CONFIRM", "SUCCESS"].filter(e => null != e),
                    [M, O] = (0, u.useStateFromStoresArray)([f.default], () => [f.default.isModifyingAppliedBoost, f.default.applyBoostError]),
                    [x, y] = s.useState(""),
                    [U, P] = s.useState(L[0]),
                    [D, b] = s.useState(!1),
                    [w, B] = s.useState(i),
                    [j, G] = s.useState(null != r ? r : R.slice(0, 1)),
                    F = s.useMemo(() => null == j ? [] : j.map(e => {
                        let {
                            premiumGuildSubscription: t
                        } = e;
                        return p.default.getGuild(null == t ? void 0 : t.guildId)
                    }).filter(e => null != e), [j]),
                    V = s.useMemo(() => {
                        var e;
                        return (null == j ? void 0 : null === (e = j[0]) || void 0 === e ? void 0 : e.premiumGuildSubscription) != null
                    }, [j]),
                    k = () => {
                        N("SUCCESS" === U), h.default.track(C.AnalyticEvents.MODAL_DISMISSED, {
                            type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                            location_section: a
                        })
                    },
                    H = {
                        UNUSED_QUANTITY_SELECT: {
                            body: () => (o(!(null == r && 0 === R.length), "Cannot provide no slots if there are no other available slots"), (0, l.jsxs)("div", {
                                className: T.quantitySelectorBody,
                                children: [(0, l.jsx)(c.Heading, {
                                    variant: "heading-md/semibold",
                                    className: T.quantitySelectorHeader,
                                    children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_HEADER
                                }), (0, l.jsx)(c.Text, {
                                    variant: "text-md/normal",
                                    className: T.quantitySelectorDescription,
                                    children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_DESCRIPTION
                                }), (0, l.jsxs)("div", {
                                    className: T.quantitySelectorWrapper,
                                    children: [(0, l.jsx)(_.default, {
                                        value: j.length,
                                        onChange: e => G(R.slice(0, e)),
                                        minValue: 1,
                                        maxValue: R.length
                                    }), (0, l.jsx)(c.Text, {
                                        className: T.quantitySelectorLabel,
                                        variant: "text-md/normal",
                                        children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_COUNTER
                                    })]
                                })]
                            })),
                            footer: () => (0, l.jsxs)(c.ModalFooter, {
                                children: [(0, l.jsx)(c.Button, {
                                    onClick: () => P("CONFIRM"),
                                    children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_NEXT
                                }), (0, l.jsx)(c.Button, {
                                    look: c.Button.Looks.LINK,
                                    color: c.Button.Colors.PRIMARY,
                                    onClick: k,
                                    children: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_UNUSED_SLOTS_CANCEL
                                })]
                            })
                        },
                        GUILD_SELECT: {
                            header: () => (0, l.jsx)(g.GuildSelectModalHeader, {
                                isTransfer: V,
                                query: x,
                                setQuery: y
                            }),
                            bodyClass: T.selectContent,
                            body: () => (0, l.jsx)(g.GuildSelectModalBody, {
                                onClose: k,
                                onSelectGuild: e => {
                                    B(e), P("CONFIRM")
                                },
                                isTransfer: V,
                                selectedSlotGuilds: F,
                                query: x
                            })
                        },
                        CONFIRM: {
                            body() {
                                if (null == w) return null;
                                let e = j.filter(e => (0, I.isGuildBoostSlotCanceled)(e)).length,
                                    t = j.length,
                                    n = F.length;
                                return V ? (0, l.jsx)(m.default.TransferBody, {
                                    fromGuilds: F,
                                    toGuild: w,
                                    blurb: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_TRANSFER_BLURB.format({
                                        slotCount: t,
                                        guildCount: n
                                    }),
                                    imageClass: T.transferConfirmImage,
                                    error: D ? O : null,
                                    onDismissError: () => b(!1),
                                    slotCount: t,
                                    canceledCount: e
                                }) : (0, l.jsx)(m.default.ApplyBody, {
                                    guild: w,
                                    blurb: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_BLURB,
                                    warning: v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_COOLDOWN_WARNING.format({
                                        days: C.GUILD_BOOST_APPLY_COOLDOWN_DAYS,
                                        slotCount: t
                                    }),
                                    imageClass: T.confirmImage,
                                    error: D ? O : null,
                                    onDismissError: () => b(!1),
                                    slotCount: t,
                                    canceledCount: e
                                })
                            },
                            footer() {
                                let e = j.length,
                                    t = "CONFIRM" === L[0] ? k : () => P(L[L.indexOf(U) - 1]),
                                    n = async () => {
                                        if (null != w && (null == j ? void 0 : j.length) !== 0) {
                                            o(!j.some(e => e.isOnCooldown()), "Cannot use a premium guild subscription slot while on cooldown");
                                            try {
                                                await Promise.all(j.map(e => {
                                                    let {
                                                        premiumGuildSubscription: t
                                                    } = e;
                                                    return null != t ? (0, d.unapplyFromGuild)(t.guildId, t.id) : Promise.resolve()
                                                })), await (0, d.applyToGuild)(w.id, j.map(e => {
                                                    let {
                                                        id: t
                                                    } = e;
                                                    return t
                                                })), P("SUCCESS")
                                            } catch (e) {
                                                b(!0)
                                            }
                                        }
                                    };
                                return (0, l.jsx)(m.default.Footer, {
                                    confirmation: V ? v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }) : v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION.format({
                                        slotCount: e
                                    }),
                                    confirmationLabel: V ? v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_TRANSFER_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }) : v.default.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CONFIRMATION_LABEL.format({
                                        slotCount: e
                                    }),
                                    onConfirm: n,
                                    onCancel: t,
                                    isModifyingSubscription: M
                                })
                            }
                        },
                        SUCCESS: {
                            body: () => (0, l.jsx)(S.GuildBoostingConfirmation, {
                                guild: w,
                                isTransfer: V,
                                guildBoostQuantity: j.length,
                                onClose: k
                            })
                        }
                    };
                s.useEffect(() => {
                    h.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: C.AnalyticsSections.PREMIUM_GUILD_SUBSCRIBE_MODAL,
                        location_section: a
                    })
                }, [a]);
                let W = H[U];
                return (0, l.jsxs)(c.ModalRoot, {
                    transitionState: A,
                    className: T.modal,
                    size: c.ModalSize.SMALL,
                    children: [null === (t = W.header) || void 0 === t ? void 0 : t.call(W), (0, l.jsx)(c.ModalContent, {
                        className: W.bodyClass,
                        children: (0, l.jsx)(c.Sequencer, {
                            step: U,
                            steps: L,
                            children: W.body()
                        })
                    }), null === (n = W.footer) || void 0 === n ? void 0 : n.call(W), (0, l.jsx)(c.ModalCloseButton, {
                        className: T.modalCloseButton,
                        onClick: k
                    })]
                })
            }
        },
        936992: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildSelectModalHeader: function() {
                    return S
                },
                GuildSelectModalBody: function() {
                    return C
                },
                default: function() {
                    return v
                }
            }), n("808653"), n("424973"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("448105"),
                s = n.n(l),
                a = n("446674"),
                o = n("77078"),
                u = n("54239"),
                c = n("393414"),
                d = n("334811"),
                f = n("305961"),
                p = n("677099"),
                E = n("476263"),
                _ = n("810567"),
                h = n("427459"),
                I = n("49111"),
                m = n("782340"),
                g = n("109396");

            function S(e) {
                let {
                    isTransfer: t = !1,
                    setQuery: n,
                    query: i
                } = e;
                return (0, r.jsxs)(o.ModalHeader, {
                    className: g.selectHeaderContainer,
                    children: [(0, r.jsx)(o.Heading, {
                        className: g.selectHeader,
                        variant: "heading-md/semibold",
                        children: t ? m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_TRANSFER_HEADER : m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SELECT_GUILD_HEADER
                    }), (0, r.jsx)(_.default, {
                        size: _.default.Sizes.MEDIUM,
                        placeholder: m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        "aria-label": m.default.Messages.PREMIUM_GUILD_SUBSCRIBE_SEARCH_GUILD_PLACEHOLDER,
                        className: g.selectSearch,
                        query: i,
                        onChange: n,
                        onClear: () => n("")
                    })]
                })
            }

            function C(e) {
                let {
                    isTransfer: t = !1,
                    selectedSlotGuilds: n,
                    onClose: i,
                    onSelectGuild: l,
                    query: _
                } = e, S = (0, a.useStateFromStores)([p.default], () => p.default.getFlattenedGuildIds()), C = (0, a.useStateFromStoresArray)([f.default], () => S.reduce((e, t) => {
                    let r = f.default.getGuild(t);
                    return null == r || null != n && n.some(e => e.id === t) ? e : ((_.length <= 0 || s(_.toLowerCase(), null == r ? void 0 : r.name.toLowerCase())) && e.push(r), e)
                }, [])), {
                    enabled: v
                } = d.default.useExperiment({
                    location: "5f417c_1"
                }, {
                    autoTrackExposure: !0
                });

                function T() {
                    i(), (0, u.popLayer)(), (0, c.transitionTo)(I.Routes.GUILD_DISCOVERY)
                }
                return (0, r.jsxs)(r.Fragment, {
                    children: [0 === C.length && (0, r.jsx)("div", {
                        className: g.emptyStateWrapper,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: 0 === S.length ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_NON_GUILD_MEMBER.format({
                                publicGuildDirectoryHook: (e, t) => (0, r.jsx)(o.Clickable, {
                                    onClick: T,
                                    tag: "a",
                                    children: e
                                }, t)
                            }) : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_APPLY_GUILD_NOT_FOUND
                        })
                    }), C.map(e => (0, r.jsxs)(o.Clickable, {
                        className: g.selectGuild,
                        onClick: () => {
                            l(e)
                        },
                        children: [(0, r.jsx)(E.default, {
                            className: g.selectGuildIcon,
                            guild: e,
                            size: E.default.Sizes.SMALL
                        }), (0, r.jsxs)("div", {
                            className: g.selectGuildCopy,
                            children: [(0, r.jsx)(o.Text, {
                                className: g.selectGuildName,
                                variant: "text-md/normal",
                                children: e.name
                            }), v && (0, r.jsx)(o.Text, {
                                className: g.selectGuildLevel,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: (0, h.getTierName)(e.premiumTier)
                            })]
                        }), v && (0, r.jsx)(o.Text, {
                            className: g.selectGuildPseudoCta,
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: t ? m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TRANSFER_HERE : m.default.Messages.PREMIUM_GUILD_SUBSCRIPTION
                        })]
                    }, e.id))]
                })
            }

            function v(e) {
                let {
                    onClose: t,
                    onSelectGuild: n,
                    transitionState: l
                } = e, [s, a] = i.useState("");
                return (0, r.jsxs)(o.ModalRoot, {
                    transitionState: l,
                    className: g.modal,
                    size: o.ModalSize.SMALL,
                    children: [(0, r.jsx)(S, {
                        query: s,
                        setQuery: a
                    }), (0, r.jsx)(o.ModalContent, {
                        className: g.modalContent,
                        children: (0, r.jsx)(C, {
                            onClose: t,
                            onSelectGuild: n,
                            query: s
                        })
                    }), (0, r.jsx)(o.ModalCloseButton, {
                        className: g.modalCloseButton,
                        onClick: t
                    })]
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r = n("872717"),
                i = n("913144"),
                l = n("479756"),
                s = n("38654"),
                a = n("9294"),
                o = n("26989"),
                u = n("337543"),
                c = n("697218"),
                d = n("49111");
            let f = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = c.default.getCurrentUser(),
                    s = !o.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, a.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, p = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, _ = async (e, t) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, h = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var I = {
                fetchVerificationForm: f,
                updateVerificationForm: p,
                updateVerificationFormDescription: E,
                enableVerificationForm: _,
                submitVerificationForm: h
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return a
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return f
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return p
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return _
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return h
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return I
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([i.VerificationFormFieldTypes.TERMS]),
                s = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                a = 5,
                o = 16,
                u = 300,
                c = 300,
                d = 8,
                f = 150,
                p = 150,
                E = 1e3,
                _ = 300,
                h = "Membership Gating",
                I = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return a
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                i = n("659500"),
                l = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                a = (0, r.default)(e => s),
                o = e => {
                    a.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    a.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("599110"),
                s = n("50926"),
                a = n("347977"),
                o = n("394294"),
                u = n("49111");
            let c = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var f = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let l = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, a.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), a.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, a.setShowWarning)(!0) : (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return m
                },
                updateImpersonating: function() {
                    return g
                },
                stopImpersonating: function() {
                    return S
                },
                updateImpersonatedChannels: function() {
                    return v
                },
                updateImpersonatedRoles: function() {
                    return T
                },
                updateImpersonatedData: function() {
                    return A
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                l = n("393414"),
                s = n("42203"),
                a = n("923959"),
                o = n("26989"),
                u = n("305961"),
                c = n("957255"),
                d = n("18494"),
                f = n("282109"),
                p = n("599110"),
                E = n("38654"),
                _ = n("507950"),
                h = n("49111"),
                I = n("724210");

            function m(e, t) {
                p.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === _.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), C(e)
            }

            function g(e, t) {
                let n = E.default.getData(e);
                null != n && n.type === t.type && (p.default.track(h.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === _.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), C(e))
            }

            function S(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function C(e) {
                let t = d.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    r = null != t && (0, I.isStaticChannelRoute)(t);
                if (!r && !c.default.can(h.Permissions.VIEW_CHANNEL, n)) {
                    let t = a.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(h.Routes.CHANNEL(e, t.id))
                }
            }

            function v(e, t, n) {
                let r = new Set(f.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), g(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function T(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    a.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...a.default.getSelectableChannelIds(e), ...a.default.getVocalChannelIds(e)],
                            l = i.filter(e => !n.includes(e));
                        return l.length > 0 && v(e, l, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), g(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function A(e, t) {
                g(e, {
                    type: _.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return s
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let l = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[l])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = r.parse(n),
                    a = (0, i.getFirstQueryStringValue)(s[l]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return c
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return d
                },
                useInventoryGuildSettingsExperiment: function() {
                    return p
                }
            });
            var r = n("65597"),
                i = n("862205"),
                l = n("697218"),
                s = n("719923"),
                a = n("782340");
            let o = (0, i.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: r,
                        mobileViewAndUseEnabled: i,
                        mobileAndFreemiumCollectEnabled: l,
                        autoUnfurlReactionTooltip: a,
                        collectOffOverride: o
                    } = n, u = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: !o && (u ? r : l),
                        autoUnfurlReactionTooltip: a
                    }
                },
                c = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : u({
                        user: t,
                        config: o.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                d = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, r.default)([l.default], () => l.default.getCurrentUser()), s = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: c,
                        collectEnabled: d,
                        autoUnfurlReactionTooltip: f
                    } = u({
                        user: i,
                        config: s
                    }), p = a && d && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: p,
                        showTryPacksModalAndV2Copy: c,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescriptionLine1: () => null,
                        getNewSettingsDescriptionLine2: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 4,
                        label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => a.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => a.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                p = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
                        getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
                    }
                }
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function i(e, t) {
                return !1
            }

            function l(e) {
                return !1
            }

            function s() {
                return !1
            }

            function a() {
                return !1
            }

            function o(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function c() {
                return !1
            }

            function d(e) {}

            function f(e) {}

            function p(e) {}

            function E(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return i
                },
                navigateToRootTab: function() {
                    return l
                },
                resetToAuthRoute: function() {
                    return s
                },
                resetToPanelsUI: function() {
                    return a
                },
                pushModal: function() {
                    return o
                },
                popModal: function() {
                    return u
                },
                popAllModals: function() {
                    return c
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceGuildsRoute: function() {
                    return f
                },
                coerceModalRoute: function() {
                    return p
                },
                useIsModalOpen: function() {
                    return E
                }
            })
        },
        651693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return s
                },
                isAnimatedImageUrl: function() {
                    return o
                },
                isVideoUrl: function() {
                    return c
                },
                isVideoFile: function() {
                    return d
                }
            }), n("222007");
            var r = n("773336");
            let i = (e, t) => {
                    if (null == e) return !1;
                    let [n, r] = e.split(/\?/, 1);
                    return t.test(n)
                },
                l = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                s = e => null != e && l.test(e),
                a = /\.(webp|gif)$/i,
                o = e => i(e, a),
                u = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
                c = e => i(e, u),
                d = e => null != e && u.test(e)
        },
        155084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var r = n("615361"),
                i = n("872717"),
                l = n("773336"),
                s = n("827032"),
                a = n("49111");
            let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var u = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: i
                        } = e,
                        a = {
                            name: n,
                            tags: (0, s.getGlobalTagsArray)()
                        };
                    null != i && i.forEach(e => {
                        a.tags.push(e)
                    });
                    let u = function() {
                        if ((0, l.isWeb)()) return "web";
                        {
                            let e = (0, l.getPlatformName)();
                            return o.has(e) ? e : null
                        }
                    }();
                    null != u && a.tags.push("platform:".concat(u));
                    let c = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return r.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != c && a.tags.push("release_channel:".concat(c)), this._metrics.push(a), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        i.default.post({
                            url: a.Endpoints.METRICS,
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
        809071: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateSubscriptionInvoicePreview: function() {
                    return f
                },
                useSubscriptionInvoicePreview: function() {
                    return _
                },
                useGetSubscriptionInvoice: function() {
                    return h
                },
                getItemUnitPriceWithDiscount: function() {
                    return I
                }
            }), n("222007");
            var r = n("884691"),
                i = n("446674"),
                l = n("872717"),
                s = n("448993"),
                a = n("195358"),
                o = n("521012"),
                u = n("719923"),
                c = n("49111");
            async function d(e) {
                let {
                    items: t,
                    paymentSourceId: n,
                    trialId: r,
                    code: i,
                    applyEntitlements: o = !1,
                    currency: d,
                    renewal: f,
                    metadata: p
                } = e;
                t = (0, u.coerceExistingItemsToNewItemInterval)(t);
                let E = {
                    items: t.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: n,
                    trial_id: r,
                    code: i,
                    apply_entitlements: o,
                    currency: d,
                    renewal: f,
                    metadata: p
                };
                try {
                    let e = await l.default.post({
                        url: c.Endpoints.BILLING_SUBSCRIPTIONS_PREVIEW,
                        body: E,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new s.BillingError(e)
                }
            }
            async function f(e) {
                let {
                    subscriptionId: t,
                    items: n,
                    paymentSourceId: r,
                    renewal: i,
                    currency: o,
                    applyEntitlements: d = !1,
                    analyticsLocations: f,
                    analyticsLocation: p
                } = e;
                null != n && (n = (0, u.coerceExistingItemsToNewItemInterval)(n));
                let E = {
                    items: null == n ? void 0 : n.map(e => {
                        let {
                            planId: t,
                            ...n
                        } = e;
                        return {
                            ...n,
                            plan_id: t
                        }
                    }),
                    payment_source_id: r,
                    renewal: i,
                    apply_entitlements: d,
                    currency: o
                };
                try {
                    let e = await l.default.patch({
                        url: c.Endpoints.BILLING_SUBSCRIPTION_PREVIEW(t),
                        query: {
                            location: p,
                            location_stack: f
                        },
                        body: E,
                        oldFormErrors: !0
                    });
                    return a.default.createInvoiceFromServer(e.body)
                } catch (e) {
                    throw new s.BillingError(e)
                }
            }
            async function p(e) {
                let {
                    subscriptionId: t,
                    preventFetch: n
                } = e;
                if (n) return null;
                let r = await l.default.get({
                    url: c.Endpoints.BILLING_SUBSCRIPTION_INVOICE(t),
                    oldFormErrors: !0
                });
                return a.default.createInvoiceFromServer(r.body)
            }

            function E(e, t) {
                let {
                    preventFetch: n = !1
                } = e, [l, s] = (0, r.useState)(null), [a, u] = (0, r.useState)(null), c = (0, i.useStateFromStores)([o.default], () => o.default.getSubscriptions());
                return (0, r.useEffect)(() => {
                    let e = !1;
                    async function r() {
                        try {
                            u(null), s(null);
                            let n = await t();
                            !e && s(n)
                        } catch (t) {
                            !e && u(t)
                        }
                    }
                    return !n && r(), () => {
                        e = !0
                    }
                }, [n, t, c]), [l, a]
            }

            function _(e) {
                if ("subscriptionId" in e && null == e.subscriptionId) {
                    let {
                        subscriptionId: t,
                        ...n
                    } = e;
                    e = n
                }
                let t = (0, r.useCallback)(() => "subscriptionId" in e ? f(e) : "items" in e ? d(e) : null, [JSON.stringify(e)]);
                return E(e, t)
            }

            function h(e) {
                let t = (0, r.useCallback)(() => p(e), [JSON.stringify(e)]);
                return E(e, t)
            }

            function I(e) {
                let t = e.subscriptionPlanPrice;
                return e.discounts.forEach(n => {
                    let r = n.amount / e.quantity;
                    t -= r
                }), t
            }
        },
        345116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("37983"),
                l = n("884691"),
                s = n("414456"),
                a = n.n(s),
                o = n("931138"),
                u = n("476263"),
                c = n("206453"),
                d = n("811151"),
                f = n("427459"),
                p = n("804308");
            class E extends l.PureComponent {
                render() {
                    let {
                        tier: e
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: p.tierPill,
                        children: [(0, i.jsx)(o.default, {
                            className: p.tierPillStar,
                            children: (0, i.jsx)(c.default, {
                                tier: e,
                                className: p.tierPillGem
                            })
                        }), (0, f.getTierName)(e)]
                    })
                }
            }
            let _ = e => {
                let {
                    subscriptionChange: t,
                    guild: n
                } = e;
                if (0 === t) return null;
                let r = Math.max(n.premiumSubscriberCount + t, 0),
                    l = (0, f.getGuildTierFromAppliedBoostCount)(r, n.id),
                    s = l - (0, f.getGuildTierFromAppliedBoostCount)(n.premiumSubscriberCount, n.id);
                return 0 === s ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(d.default, {
                        className: s > 0 ? p.levelUpIcon : p.levelDownIcon
                    }), (0, i.jsx)(E, {
                        tier: l
                    })]
                })
            };
            r = class extends l.PureComponent {
                render() {
                    let {
                        guild: e,
                        className: t,
                        subscriptionChange: n
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: a(p.subscription, t),
                        children: [(0, i.jsx)(u.default, {
                            guild: e,
                            size: u.default.Sizes.LARGE
                        }), (0, i.jsxs)("div", {
                            className: p.subscriptionInfo,
                            children: [(0, i.jsx)("div", {
                                className: p.guildName,
                                children: e.name
                            }), (0, i.jsxs)("div", {
                                className: p.tierInfo,
                                children: [(0, i.jsx)(E, {
                                    tier: e.premiumTier
                                }), (0, i.jsx)(_, {
                                    guild: e,
                                    subscriptionChange: null != n ? n : 0
                                })]
                            })]
                        })]
                    })
                }
            }
        },
        824734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("153160"),
                a = n("646718"),
                o = n("782340"),
                u = n("552033");

            function c(e) {
                let {
                    price: t,
                    currency: n,
                    intervalType: i,
                    className: c,
                    intervalCount: d = 1,
                    isPrepaidPaymentSource: f = !1
                } = e, p = (0, s.formatPrice)(t, n), E = null;
                return i === a.SubscriptionIntervalTypes.YEAR ? E = o.default.Messages.BILLING_PRICE_PER_YEAR_BOLD.format({
                    price: p
                }) : i === a.SubscriptionIntervalTypes.MONTH && 1 === d ? E = o.default.Messages.BILLING_PRICE_PER_MONTH_BOLD.format({
                    price: p
                }) : i === a.SubscriptionIntervalTypes.MONTH && d > 1 && (E = o.default.Messages.BILLING_PRICE_PER_MULTI_MONTHS_BOLD.format({
                    price: p,
                    intervalCount: d
                })), (0, r.jsx)("div", {
                    className: l(u.pricePerInterval, c),
                    "data-testid": "PricePerInterval-".concat(n),
                    children: null == i || f ? (0, r.jsx)("strong", {
                        children: p
                    }) : E
                })
            }
        },
        623003: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("849085");
            let o = i.forwardRef(function(e, t) {
                let {
                    isActive: n,
                    children: i
                } = e;
                return (0, r.jsx)("div", {
                    className: s(a.wrapper, {
                        [a.wrapperActive]: n
                    }),
                    ref: t,
                    children: i
                })
            });
            var u = o
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return s
                },
                getDevicePushProvider: function() {
                    return a
                }
            });
            var r, i, l = n("773336");
            let s = null;

            function a() {
                return (0, l.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return u
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var r, i, l = n("991170"),
                s = n("719923"),
                a = n("24373"),
                o = n("49111");
            (r = i || (i = {}))[r.SENDABLE = 0] = "SENDABLE", r[r.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", r[r.NONSENDABLE = 2] = "NONSENDABLE", r[r.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let r = s.default.canUseCustomStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) return 0;
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || l.default.can({
                        permission: o.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? r ? 0 : 1 : 2 : 3;
                    return 2
                },
                c = (e, t, n) => 0 === u(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("424973");
            var r = n("917351"),
                i = n.n(r),
                l = n("446674"),
                s = n("913144"),
                a = n("80507"),
                o = n("374363"),
                u = n("364685"),
                c = n("49111"),
                d = n("397336");
            let f = {
                pendingUsages: []
            };
            c.Durations.DAY;
            let p = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                E = () => {
                    u.default.isLoaded && p.compute()
                },
                _ = () => {
                    E()
                };

            function h() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                p.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class I extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (f = e), this.syncWith([u.default], _), this.syncWith([o.default], h)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return p
                }
            }
            I.displayName = "StickersPersistedStore", I.persistKey = "StickersPersistedStoreV2";
            var m = new I(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        p.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), E()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        334811: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-04_guild_boosting_settings_redesign",
                label: "Guild Boosting Settings Redesign",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Variant 1",
                    config: {
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Variant 1 international",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var l = i
        },
        917219: function(e, t, n) {
            "use strict";
            var r, i, l, s;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return r
                },
                DefaultVideoBackground: function() {
                    return i
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return a
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return o
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return u
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return c
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return d
                }
            }), n("808653"), (l = r || (r = {}))[l.BACKGROUND = 0] = "BACKGROUND", (s = i || (i = {}))[s.OPTION_1 = 0] = "OPTION_1", s[s.OPTION_2 = 1] = "OPTION_2", s[s.OPTION_3 = 2] = "OPTION_3", s[s.OPTION_4 = 3] = "OPTION_4", s[s.OPTION_7 = 7] = "OPTION_7", s[s.OPTION_8 = 8] = "OPTION_8", s[s.OPTION_9 = 9] = "OPTION_9", s[s.OPTION_10 = 10] = "OPTION_10";
            let a = [7, 8, 9, 10],
                o = [7, 8, 9, 10, 0, 1, 2, 3].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                u = "blur",
                c = {
                    width: 1280,
                    height: 720
                },
                d = 10485760
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                l = n.n(i),
                s = n("666038");
            r = class e extends s.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: l(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = l(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = l(this.createdAt);
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
        735201: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144");
            let l = {},
                s = null,
                a = [],
                o = !1,
                u = null,
                c = null;

            function d() {
                o = !0
            }
            class f extends r.default.Store {
                getAppliedGuildBoostsForGuild(e) {
                    return null != l[e] ? l[e].subscriptions : null
                }
                getLastFetchedAtForGuild(e) {
                    return null != l[e] ? l[e].lastFetchedAt : null
                }
                getCurrentUserAppliedBoosts() {
                    return a
                }
                getAppliedGuildBoost(e) {
                    return a.find(t => t.id === e)
                }
                get isModifyingAppliedBoost() {
                    return o
                }
                get applyBoostError() {
                    return u
                }
                get unapplyBoostError() {
                    return c
                }
                get cooldownEndsAt() {
                    return s
                }
            }
            f.displayName = "AppliedGuildBoostStore";
            var p = new f(i.default, {
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        appliedBoosts: n
                    } = e;
                    l[t] = {
                        subscriptions: n,
                        lastFetchedAt: Date.now()
                    }
                },
                USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedGuildBoosts: t
                    } = e;
                    a = t
                },
                APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
                    let {
                        endsAt: t
                    } = e;
                    s = t
                },
                GUILD_UNAPPLY_BOOST_START: d,
                GUILD_APPLY_BOOST_START: d,
                GUILD_APPLY_BOOST_SUCCESS: function(e) {
                    let {
                        appliedGuildBoost: t
                    } = e, n = new Set(t.map(e => e.id));
                    a = [...t, ...a.filter(e => !n.has(e.id))], u = null, o = !1
                },
                GUILD_APPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, u = t
                },
                GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
                    let {
                        boostId: t
                    } = e;
                    a = a.filter(e => e.id !== t), o = !1
                },
                GUILD_UNAPPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, c = t
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                l = n("9294"),
                s = n("49111");
            let a = {},
                o = {},
                u = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, l.parseExtraDataFromInviteKey)(e),
                    i = a[e],
                    o = null != i ? {
                        state: s.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(o), a = {
                    ...a,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class f extends r.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            f.displayName = "InviteStore";
            var p = new f(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: s.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = s.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = s.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = s.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = s.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, c(e.code, e => {
                        e.state = s.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = s.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        971427: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("424973");
            var i = n("446674"),
                l = n("913144");
            let s = {
                hasAcceptedStoreTerms: !1,
                hasAcceptedEulaIds: []
            };
            class a extends i.default.PersistedStore {
                initialize(e) {
                    r = null != e ? e : s
                }
                getState() {
                    return r
                }
                get hasAcceptedStoreTerms() {
                    return r.hasAcceptedStoreTerms
                }
                hasAcceptedEULA(e) {
                    return r.hasAcceptedEulaIds.includes(e)
                }
            }
            a.displayName = "ApplicationStoreUserSettingsStore", a.persistKey = "ApplicationStoreUserSettingsStore", a.migrations = [e => null == e.hasAcceptedEulaIds ? {
                ...e,
                hasAcceptedEulaIds: []
            } : e];
            var o = new a(l.default, {
                APPLICATION_STORE_ACCEPT_STORE_TERMS: function() {
                    r.hasAcceptedStoreTerms = !0
                },
                APPLICATION_STORE_ACCEPT_EULA: function(e) {
                    let {
                        eulaId: t
                    } = e;
                    if (r.hasAcceptedEulaIds.includes(t)) return !1;
                    r.hasAcceptedEulaIds.push(t)
                }
            })
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("760607"),
                u = n("89976");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: c,
                    ...d
                } = e, f = i.Children.only(t), p = (0, a.useRedesignIconContext)().enabled;
                return (0, r.jsxs)("div", {
                    className: s(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, r.jsx)(o.default, {
                        ...d,
                        className: s(c, u.flowerStar)
                    }), (0, r.jsx)("div", {
                        className: s(u.childContainer, {
                            [u.redesignIconChildContainer]: p
                        }),
                        children: f
                    })]
                })
            }
        },
        791106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Gradients: function() {
                    return a
                },
                GradientCssUrls: function() {
                    return o
                },
                default: function() {
                    return _
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("748820"),
                s = n("669491");
            let a = Object.freeze({
                    PREMIUM_TIER_0: (0, l.v4)(),
                    PREMIUM_TIER_1: (0, l.v4)(),
                    PREMIUM_TIER_2: (0, l.v4)(),
                    PREMIUM_GUILD: (0, l.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, l.v4)()
                }),
                o = {
                    PREMIUM_TIER_0: "url(#".concat(a.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(a.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(a.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(a.PREMIUM_GUILD, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(a.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                u = () => (0, r.jsxs)("linearGradient", {
                    id: a.PREMIUM_TIER_0,
                    children: [(0, r.jsx)("stop", {
                        offset: ".1762",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                c = () => (0, r.jsxs)("linearGradient", {
                    id: a.PREMIUM_TIER_1,
                    children: [(0, r.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                d = () => (0, r.jsxs)("linearGradient", {
                    id: a.PREMIUM_TIER_2,
                    children: [(0, r.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, r.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                f = () => (0, r.jsxs)("linearGradient", {
                    id: a.PREMIUM_GUILD,
                    children: [(0, r.jsx)("stop", {
                        stopColor: s.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                p = () => (0, r.jsxs)("linearGradient", {
                    id: a.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, r.jsx)("stop", {
                        offset: "0",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, r.jsx)("stop", {
                        offset: "1",
                        stopColor: s.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                E = i.memo(function() {
                    return (0, r.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [u(), c(), d(), f(), p()]
                    })
                }, () => !0);
            var _ = E
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("90915"),
                o = n("446674"),
                u = n("669491"),
                c = n("77078"),
                d = n("80300"),
                f = n("471671"),
                p = n("103603"),
                E = n("474293"),
                _ = n("580357"),
                h = n("491088");
            let I = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                m = {
                    [I.SMOL]: 16,
                    [I.MINI]: 20,
                    [I.SMALLER]: 24,
                    [I.SMALL]: 30,
                    [I.MEDIUM]: 40,
                    [I.LARGE]: 50,
                    [I.LARGER]: 64,
                    [I.XLARGE]: 100
                },
                g = {
                    [I.SMOL]: [10, 10, 8, 6, 6, 4],
                    [I.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [I.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [I.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [I.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [I.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [I.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [I.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class S extends i.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, r.jsx)("div", {
                        className: h.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, r.jsx)(_.default, {
                        className: h.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: i,
                        showBadge: l,
                        active: a,
                        size: o,
                        style: u = {},
                        textScale: d,
                        showTooltip: f,
                        tooltipPosition: p,
                        onClick: _,
                        to: I,
                        badgeStrokeColor: m,
                        animate: S,
                        tabIndex: C,
                        iconSrc: v,
                        "aria-hidden": T,
                        ...A
                    } = this.props, N = g[o], R = null != _ ? c.Clickable : "div";
                    return (0, r.jsxs)(R, {
                        className: s(h.icon, i, (0, E.getClass)(h, "iconSize", o), {
                            [null !== (e = (0, E.getClass)(h, "iconActive", o)) && void 0 !== e ? e : ""]: a,
                            [h.iconInactive]: !a,
                            [h.noIcon]: null == n.icon
                        }),
                        "aria-hidden": T,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = N[n.acronym.length]) && void 0 !== t ? t : N[N.length - 1]) * d,
                            ...u
                        } : u,
                        onClick: null != I || null == _ ? void 0 : _,
                        tabIndex: C,
                        ...A,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, r.jsx)(c.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => i.cloneElement(i.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: i,
                        "aria-hidden": l
                    } = this.props;
                    return null != e ? (0, r.jsx)(a.Link, {
                        "aria-hidden": l,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: i,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let C = o.default.connectStores([f.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: r,
                    style: i,
                    size: l
                } = e;
                return {
                    style: {
                        ...i,
                        backgroundImage: (0, p.makeCssUrlString)(null != r ? r : t.getIconURL(m[l], n && f.default.isFocused()))
                    }
                }
            })((0, d.backgroundImagePreloader)(e => (0, r.jsx)(S, {
                ...e
            })));
            class v extends i.PureComponent {
                render() {
                    return (0, r.jsx)(C, {
                        ...this.props
                    })
                }
            }
            v.Sizes = I, v.defaultProps = {
                size: I.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: u.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var T = v
        },
        467831: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PremiumPaymentAnimationTier0: function() {
                    return S
                },
                PremiumPaymentAnimationTier1: function() {
                    return v
                },
                PremiumPaymentAnimationTier2: function() {
                    return R
                },
                PremiumPaymentGuildAnimation: function() {
                    return U
                }
            }), n("222007");
            var r, i, l, s, a, o, u, c, d = n("37983"),
                f = n("884691"),
                p = n("414456"),
                E = n.n(p),
                _ = n("907002"),
                h = n("458960"),
                I = n("273108"),
                m = n("635233");
            (a = r || (r = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
            let g = {
                normal: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                speed_start: {
                    BEG: 601,
                    END: 636
                },
                speed_loop: {
                    BEG: 637,
                    END: 668
                },
                finish: {
                    BEG: 669,
                    END: 870
                },
                idle: {
                    BEG: 871,
                    END: 878
                }
            };
            class S extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case S.Scenes.SPEED_START:
                            return S.Scenes.SPEED_LOOP;
                        case S.Scenes.FINISH:
                            return S.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pause: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsx)(I.default, {
                        className: E(m.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: g,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: l,
                        pause: i
                    })
                }
            }
            S.Scenes = r, (o = i || (i = {})).NORMAL = "normal", o.SPEED_START = "speed_start", o.SPEED_LOOP = "speed_loop", o.FINISH = "finish", o.IDLE = "idle";
            let C = {
                normal: {
                    BEG: 0,
                    END: 600,
                    shouldForcePlayAfter: !0
                },
                speed_start: {
                    BEG: 601,
                    END: 636
                },
                speed_loop: {
                    BEG: 637,
                    END: 668
                },
                finish: {
                    BEG: 669,
                    END: 870
                },
                idle: {
                    BEG: 871,
                    END: 878
                }
            };
            class v extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case v.Scenes.SPEED_START:
                            return v.Scenes.SPEED_LOOP;
                        case v.Scenes.FINISH:
                            return v.Scenes.IDLE;
                        default:
                            return e
                    }
                }
                importDefault() {
                    return n.el("73902").then(n.t.bind(n, "73902", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pause: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsx)(I.default, {
                        className: E(m.sequencedAnimation, e),
                        importData: this.importDefault,
                        nextScene: i ? "idle" : t,
                        sceneSegments: C,
                        onScenePlay: n,
                        onSceneComplete: r,
                        pauseWhileUnfocused: l,
                        pause: i
                    })
                }
            }
            v.Scenes = i, (u = l || (l = {})).IDLE_ENTRY = "idle_entry", u.IDLE_LOOP = "idle_loop", u.BOOST_START = "boost_start", u.BOOST_LOOP = "boost_loop", u.BOOST_END = "boost_end", u.VICTORY = "victory", u.ERROR = "error";
            let T = {
                idle_entry: {
                    BEG: 0,
                    END: 50
                },
                idle_loop: {
                    BEG: 50,
                    END: 230,
                    shouldForcePlayAfter: !0
                },
                boost_start: {
                    BEG: 230,
                    END: 275
                },
                boost_loop: {
                    BEG: 275,
                    END: 290
                },
                boost_end: {
                    BEG: 386,
                    END: 455
                },
                victory: {
                    BEG: 470,
                    END: 525
                },
                error: {
                    BEG: 290,
                    END: 375
                }
            };
            class A extends f.PureComponent {
                getStyle(e) {
                    let {
                        animation: t
                    } = this.props;
                    return {
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: [0, 1],
                                outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["100%", "0%"]
                            })
                        }]
                    }
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: m.panningAnimation,
                        children: [(0, d.jsx)(h.default.div, {
                            className: e,
                            style: this.getStyle(!1)
                        }), (0, d.jsx)(h.default.div, {
                            className: e,
                            style: this.getStyle(!0)
                        })]
                    })
                }
            }
            let N = Object.freeze({
                IDLE_ENTRY: {
                    toValue: 1,
                    duration: 1500
                },
                IDLE_LOOP: {
                    toValue: 1,
                    duration: 6e3,
                    easing: h.default.Easing.linear
                },
                BOOST_START: {
                    toValue: 0,
                    duration: 2e3,
                    delay: 500
                },
                ERROR: {
                    toValue: 1,
                    duration: 1500,
                    delay: 1e3
                }
            });
            class R extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case R.Scenes.IDLE_ENTRY:
                            return R.Scenes.IDLE_LOOP;
                        case R.Scenes.BOOST_START:
                            return R.Scenes.BOOST_LOOP;
                        case R.Scenes.BOOST_END:
                            return R.Scenes.VICTORY;
                        case R.Scenes.VICTORY:
                            return R.Scenes.IDLE_ENTRY;
                        case R.Scenes.ERROR:
                            return R.Scenes.IDLE_LOOP;
                        default:
                            return e
                    }
                }
                componentWillUnmount() {
                    this.didUnmount = !0
                }
                importData() {
                    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                animateEntry(e) {
                    h.default.parallel([h.default.timing(this.foregroundAnimation.y, {
                        toValue: e.toValue,
                        duration: e.duration,
                        delay: e.delay || 0
                    }), h.default.timing(this.backgroundAnimation.y, {
                        toValue: e.toValue,
                        duration: 1.2 * e.duration,
                        delay: e.delay || 0
                    })]).start()
                }
                animateIdleEntry() {
                    this.animateEntry(N.IDLE_ENTRY)
                }
                animateError() {
                    this.animateEntry(N.ERROR)
                }
                animateIdleLoop() {
                    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
                }
                animateBoostStart() {
                    h.default.parallel([h.default.timing(this.foregroundAnimation.y, {
                        toValue: N.BOOST_START.toValue,
                        duration: N.BOOST_START.duration,
                        delay: N.BOOST_START.delay
                    }), h.default.timing(this.backgroundAnimation.y, {
                        toValue: N.BOOST_START.toValue,
                        duration: 1.2 * N.BOOST_START.duration,
                        delay: N.BOOST_START.delay
                    })]).start()
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onSceneComplete: r
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: E(m.tier2Animation, e),
                        children: [n ? (0, d.jsx)(d.Fragment, {
                            children: (0, d.jsxs)("div", {
                                className: m.panningAnimation,
                                children: [(0, d.jsx)("div", {
                                    className: m.tier2Background
                                }), (0, d.jsx)("div", {
                                    className: m.tier2Foreground
                                })]
                            })
                        }) : (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(A, {
                                className: m.tier2Background,
                                animation: this.backgroundAnimation
                            }), (0, d.jsx)(A, {
                                className: m.tier2Foreground,
                                animation: this.foregroundAnimation
                            })]
                        }), (0, d.jsx)(I.default, {
                            className: m.sequencedAnimation,
                            importData: this.importData,
                            nextScene: n ? "idle_loop" : t,
                            sceneSegments: T,
                            onScenePlay: this.handleScenePlay,
                            onSceneComplete: r,
                            pauseWhileUnfocused: !1,
                            pause: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.backgroundAnimation = new h.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.foregroundAnimation = new h.default.ValueXY({
                        x: 0,
                        y: 0
                    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
                        !this.didUnmount && (this.backgroundAnimation.x.setValue(0), h.default.timing(this.backgroundAnimation.x, {
                            toValue: N.IDLE_LOOP.toValue,
                            duration: 1.2 * N.IDLE_LOOP.duration,
                            easing: h.default.Easing.linear
                        }).start(this.animateIdleLoopBackground))
                    }, this.animateIdleLoopForeground = () => {
                        !this.didUnmount && (this.foregroundAnimation.x.setValue(0), h.default.timing(this.foregroundAnimation.x, {
                            toValue: N.IDLE_LOOP.toValue,
                            duration: N.IDLE_LOOP.duration,
                            easing: N.IDLE_LOOP.easing
                        }).start(this.animateIdleLoopForeground))
                    }, this.handleScenePlay = e => {
                        switch (e) {
                            case "idle_entry":
                                this.animateIdleEntry(), this.animateIdleLoop();
                                break;
                            case "error":
                                this.animateError();
                                break;
                            case "boost_start":
                                this.animateBoostStart()
                        }
                        let {
                            onScenePlay: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            R.Scenes = l, (c = s || (s = {})).ENTRY = "entry", c.IDLE = "idle", c.STARS = "stars", c.ERROR = "error", c.SUCCESS = "success";
            let L = {
                    entry: {
                        BEG: 0,
                        END: 180
                    },
                    idle: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    stars: {
                        BEG: 180,
                        END: 360,
                        shouldForcePlayAfter: !0
                    },
                    error: {
                        BEG: 360,
                        END: 540
                    },
                    success: {
                        BEG: 540,
                        END: 778
                    }
                },
                M = Object.freeze({
                    WHITE: "#ebf0f7",
                    PINK: "#fa6ef6"
                }),
                O = [{
                    left: 29,
                    top: 100,
                    color: M.WHITE
                }, {
                    left: 245,
                    top: 11,
                    color: M.PINK
                }, {
                    left: 393,
                    top: 22,
                    color: M.WHITE
                }, {
                    left: 74,
                    top: 30,
                    color: M.PINK
                }, {
                    left: 188,
                    top: 9,
                    color: M.WHITE
                }, {
                    left: 379,
                    top: 97,
                    color: M.PINK
                }],
                x = Object.freeze({
                    SCALE_INITIAL: 0,
                    SCALE_MIDDLE: 1,
                    SCALE_END: 0,
                    ROTATE_INITIAL: 0,
                    ROTATE_MIDDLE: 180,
                    ROTATE_END: 360,
                    DELAY_MIN: 200,
                    DELAY_MAX: 500,
                    DELAY_STAGGER: 200,
                    DURATION_MIDDLE: 400,
                    DURATION_END: 250,
                    SIZE_MIN: 7,
                    SIZE_MAX: 15,
                    EASING_MIDDLE: h.default.Easing.bezier(.3, .01, 0, .99),
                    EASING_END: h.default.Easing.bezier(0, -.01, .99, 0)
                });

            function y(e) {
                let {
                    animate: t
                } = e, [n, r] = f.useState(0), i = (0, _.useSprings)(O.length, O.map((e, i) => {
                    let l = i > 0 ? x.DELAY_STAGGER * i + Math.random() * (x.DELAY_MAX - x.DELAY_MIN) + x.DELAY_MIN : 0,
                        s = Math.random() * (x.SIZE_MAX - x.SIZE_MIN) + x.SIZE_MIN;
                    return {
                        from: {
                            scale: x.SCALE_INITIAL,
                            rotate: x.ROTATE_INITIAL,
                            top: e.top,
                            left: e.left,
                            width: s,
                            height: s
                        },
                        to: async e => {
                            t ? (await e({
                                scale: x.SCALE_MIDDLE,
                                rotate: x.ROTATE_MIDDLE,
                                delay: l,
                                config: {
                                    duration: x.DURATION_MIDDLE,
                                    easing: x.EASING_MIDDLE
                                }
                            }), await e({
                                scale: x.SCALE_END,
                                rotate: x.ROTATE_END,
                                config: {
                                    duration: x.DURATION_END,
                                    easing: x.EASING_END
                                }
                            }), await e({
                                scale: x.SCALE_INITIAL,
                                rotate: x.ROTATE_INITIAL,
                                immediate: !0
                            }), i === O.length - 1 && r(n + 1)) : await e({
                                scale: x.SCALE_INITIAL,
                                rotate: x.ROTATE_INITIAL
                            })
                        }
                    }
                }));
                return (0, d.jsx)(d.Fragment, {
                    children: i.map((e, t) => {
                        let n = O[t];
                        return (0, d.jsx)(_.animated.svg, {
                            style: e,
                            className: m.guildStar,
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 12.14 12.24",
                            children: (0, d.jsx)("path", {
                                d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
                                fill: n.color
                            })
                        }, t)
                    })
                })
            }
            class U extends f.PureComponent {
                static getNextScene(e) {
                    switch (e) {
                        case "entry":
                        case "error":
                        case "success":
                            return "idle";
                        default:
                            return e
                    }
                }
                importData() {
                    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
                        let {
                            default: t
                        } = e;
                        return t
                    })
                }
                render() {
                    let {
                        className: e,
                        nextScene: t,
                        pause: n,
                        onScenePlay: r,
                        onSceneComplete: i,
                        pauseWhileUnfocused: l
                    } = this.props;
                    return (0, d.jsxs)("div", {
                        className: E(m.guildWrapper, e),
                        children: [(0, d.jsx)(I.default, {
                            className: m.guildBackground,
                            importData: this.importData,
                            nextScene: n ? "idle" : t,
                            sceneSegments: L,
                            onScenePlay: r,
                            onSceneComplete: i,
                            pauseWhileUnfocused: l,
                            pause: n
                        }), (0, d.jsx)(y, {
                            animate: !n && "stars" === t
                        })]
                    })
                }
            }
            U.Scenes = s
        },
        273108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("446674"),
                o = n("206230"),
                u = n("471671"),
                c = n("629758");
            class d extends i.PureComponent {
                async componentDidMount() {
                    let {
                        importData: e,
                        nextScene: t,
                        pauseWhileUnfocused: r,
                        pause: i,
                        isWindowFocused: l,
                        useReducedMotion: s
                    } = this.props, [a, {
                        default: o
                    }] = await Promise.all([e(), n.el("245749").then(n.t.bind(n, "245749", 23))]);
                    null != this.animationRef && (this.animation = o.loadAnimation({
                        container: this.animationRef,
                        renderer: "svg",
                        loop: !0,
                        autoplay: !0,
                        animationData: a
                    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (r && !l || i || s) && this.animation.pause())
                }
                componentWillUnmount() {
                    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
                }
                componentDidUpdate(e) {
                    var t, n, r;
                    let {
                        nextScene: i,
                        pauseWhileUnfocused: l,
                        pause: s,
                        isWindowFocused: a,
                        useReducedMotion: o
                    } = this.props;
                    i !== this.currentScene && this.shouldForcePlayAfter() && !s && this.playScene(i), null != this.animation && (l && !e.isWindowFocused && a && !o && !0 !== s ? this.animation.play() : (o || l && e.isWindowFocused && !a) && this.animation.pause()), !e.pause && s ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !s && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== i && s && (this.playScene(i), null === (r = this.animation) || void 0 === r || r.pause())
                }
                shouldForcePlayAfter() {
                    let {
                        sceneSegments: e
                    } = this.props, t = e[this.currentScene];
                    return !0 === t.shouldForcePlayAfter
                }
                playScene(e) {
                    if (this.isUnmounted) return;
                    let {
                        onScenePlay: t,
                        sceneSegments: n,
                        useReducedMotion: r
                    } = this.props, i = n[e], l = n[this.currentScene];
                    if (null != this.animation && (e === this.currentScene || i.BEG !== l.BEG || i.END !== l.END) && this.animation.playSegments([i.BEG, i.END], !0), this.currentScene = e, null != t && t(this.currentScene), r) {
                        var s;
                        null === (s = this.animation) || void 0 === s || s.pause()
                    }
                }
                render() {
                    return (0, r.jsx)("div", {
                        ref: this.handleSetRef,
                        className: s(this.props.className, c.wrapper)
                    })
                }
                constructor(...e) {
                    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
                        let {
                            onSceneComplete: e,
                            nextScene: t
                        } = this.props;
                        null != e && e(this.currentScene), this.playScene(t)
                    }, this.handleComplete = () => {
                        let {
                            onSceneComplete: e
                        } = this.props;
                        null != e && e(this.currentScene)
                    }, this.handleSetRef = e => {
                        this.animationRef = e;
                        let {
                            animationRef: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            d.defaultProps = {
                pauseWhileUnfocused: !0,
                pause: !1
            };
            var f = e => {
                let {
                    componentRef: t,
                    ...n
                } = e, i = (0, a.useStateFromStores)([u.default], () => u.default.isFocused()), l = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion);
                return (0, r.jsx)(d, {
                    ...n,
                    isWindowFocused: i,
                    useReducedMotion: l,
                    ref: t
                })
            }
        },
        965397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("458960"),
                o = n("77078"),
                u = n("866893");
            let c = {
                friction: 7,
                tension: 60
            };
            class d extends i.Component {
                componentWillAppear(e) {
                    this.animateTo(1).start(e)
                }
                componentWillEnter(e) {
                    this.animateTo(1).start(e)
                }
                componentWillLeave(e) {
                    let {
                        reducedMotion: t
                    } = this.context;
                    t.enabled ? this.animateTo(0).start(e) : a.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return a.default.spring(this.animation, {
                        ...c,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return a.default.accelerate({
                        opacity: this.animation,
                        transform: e.enabled ? void 0 : [{
                            translateY: this.animation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["150%", "0%"]
                            })
                        }]
                    })
                }
                render() {
                    let {
                        className: e,
                        children: t
                    } = this.props;
                    return (0, r.jsx)(a.default.div, {
                        className: s(e, u.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new a.default.Value(0)
                }
            }
            d.contextType = o.AccessibilityPreferencesContext;
            var f = d
        },
        784917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("773785"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 6,
                        height: n = 11,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 6 11",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M3 0.625244L0 3.62524V7.62524L3 10.6252L6 7.62524V3.62524L3 0.625244ZM5 7.24524L3 9.24524L1 7.24524V4.04524L3 2.04524L5 4.04524V7.24524Z"
                        })
                    })
                }, l.BoostTier1SimpleIcon, void 0, {
                    size: 11
                })
        },
        326880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("470131"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 6,
                        height: n = 11,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 6 11",
                        children: (0, r.jsxs)("g", {
                            fill: i,
                            fillRule: "evenodd",
                            className: l,
                            children: [(0, r.jsx)("path", {
                                d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"
                            }), (0, r.jsx)("path", {
                                d: "M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z"
                            })]
                        })
                    })
                }, l.BoostTier2SimpleIcon, void 0, {
                    size: 11
                })
        },
        131777: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("986845"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 6,
                        height: n = 11,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 6 11",
                        children: (0, r.jsxs)("g", {
                            fill: i,
                            fillRule: "evenodd",
                            className: l,
                            children: [(0, r.jsx)("path", {
                                d: "M3 0.625305L0 3.62531V7.62531L3 10.6253L6 7.62531V3.62531L3 0.625305ZM5 7.24531L3 9.24531L1 7.24531V4.04531L3 2.04531L5 4.04531V7.24531Z"
                            }), (0, r.jsx)("path", {
                                d: "M3.76 4.21526L3 3.45526L2 4.45526V5.97526L3.76 4.21526Z"
                            }), (0, r.jsx)("path", {
                                d: "M2.28003 7.11532L3.00003 7.83532L4.00003 6.83532V5.39532L2.28003 7.11532Z"
                            })]
                        })
                    })
                }, l.BoostTier3SimpleIcon, void 0, {
                    size: 11
                })
        },
        206453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("70102");
            var r = n("37983");
            n("884691");
            var i = n("784917"),
                l = n("326880"),
                s = n("131777"),
                a = n("49111");

            function o(e) {
                let {
                    tier: t,
                    ...n
                } = e;
                switch (t) {
                    case a.BoostedGuildTiers.NONE:
                    case a.BoostedGuildTiers.TIER_1:
                        return (0, r.jsx)(i.default, {
                            ...n
                        });
                    case a.BoostedGuildTiers.TIER_2:
                        return (0, r.jsx)(l.default, {
                            ...n
                        });
                    case a.BoostedGuildTiers.TIER_3:
                        return (0, r.jsx)(s.default, {
                            ...n
                        });
                    default:
                        throw Error("Not a valid tier type")
                }
            }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("384737"),
                a = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                f = n("4177");
            let p = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                E = e => {
                    let {
                        direction: t = p.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: E = "currentColor",
                        transition: _ = f.transition,
                        className: h,
                        foreground: I,
                        expanded: m,
                        ...g
                    } = e, {
                        enabled: S
                    } = (0, c.useRedesignIconContext)(), C = t;
                    if (!0 === m ? C = p.DOWN : !1 === m && (C = p.RIGHT), S) {
                        let e = {
                            [p.UP]: u.ChevronSmallUpIcon,
                            [p.DOWN]: s.ChevronSmallDownIcon,
                            [p.LEFT]: a.ChevronSmallLeftIcon,
                            [p.RIGHT]: o.ChevronSmallRightIcon
                        } [C];
                        return (0, r.jsx)(e, {
                            ...g,
                            className: h,
                            width: n,
                            height: i,
                            color: E,
                            colorClass: I
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: l(h, _, C),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(g),
                        children: (0, r.jsx)("path", {
                            className: I,
                            fill: "none",
                            stroke: E,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            E.Directions = p;
            var _ = E
        },
        811151: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = "currentColor",
                    ...s
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 16 16",
                    children: [(0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M8.45329 8.53891L3.26217 13.7844C2.95995 14.0719 2.49772 14.0719 2.21328 13.7844C1.92883 13.497 1.92883 13.0299 2.21328 12.7245L6.88884 7.99999L2.21328 3.27543C1.92883 2.988 1.92883 2.50297 2.21328 2.21555C2.49772 1.92812 2.95995 1.92812 3.26217 2.21555L8.45329 7.47903C8.73774 7.76645 8.73774 8.23352 8.45329 8.53891Z",
                        fill: l
                    }), (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M14.4533 8.53891L9.26217 13.7844C8.95995 14.0719 8.49772 14.0719 8.21328 13.7844C7.92883 13.497 7.92883 13.0299 8.21328 12.7245L12.8888 7.99999L8.21328 3.27543C7.92883 2.988 7.92883 2.50297 8.21328 2.21555C8.49772 1.92812 8.95995 1.92812 9.26217 2.21555L14.4533 7.47903C14.7377 7.76645 14.7377 8.23352 14.4533 8.53891Z",
                        fill: l
                    })]
                })
            }
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = "currentColor",
                    foreground: s,
                    ...a
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, r.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: l,
                        className: s
                    }), (0, r.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: l,
                        className: s
                    })]
                })
            }
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("763377"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, l.CircleQuestionIcon, void 0, {
                    size: 24
                })
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("202909"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, r.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("424823"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        342169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("457802"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            d: "M2.66663 7.40747H7.40737H8.59255H8.66663H13.3333V8.59266H8.59255H7.40737H2.66663V7.40747Z"
                        })
                    })
                }, l.MinusIcon, void 0, {
                    size: 24
                })
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let l = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("70102");
            var l = n("697218"),
                s = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, a = e.updateModalProps, i = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == r) {
                    null == o || o();
                    return
                }
                let c = r(E, d, s);

                function d() {
                    null == o || o()
                }

                function f(e) {
                    i(c), n(e)
                }

                function p(e) {
                    i(c), l(e)
                }

                function E(e) {
                    return a(c, E, d, {
                        ...s,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: f,
                        reject: p,
                        code: e,
                        mfaCodeHandler: _,
                        isModalOpen: !0
                    })
                }

                function _(e) {
                    let {
                        res: t
                    } = e;
                    a(c, E, d, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: l = o,
                    isModalOpen: s = !1,
                    ...a
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, o;
                    if (i = e, o = s, i.body && 60008 === i.body.code || o && 429 === i.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...a
                    });
                    r(e)
                })
            }

            function c(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(i) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return i
                }
            }), n("808653");
            var r = n("159885");

            function i(e, t) {
                for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) i[l - 2] = arguments[l];
                let s = i.reduce((e, t) => e + (0, r.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(s),
                    o = e[a];
                if (null != o) return o
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("872717"),
                i = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: r,
                    ...l
                } = t, s = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...s,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let a = r.properties;
                        "function" == typeof r.properties && (a = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...s,
                            ...a
                        }), n(e)
                    })
                })
            }
            var s = {
                get: function(e) {
                    return l(r.default.get, e, "get")
                },
                post: function(e) {
                    return l(r.default.post, e, "post")
                },
                put: function(e) {
                    return l(r.default.put, e, "put")
                },
                patch: function(e) {
                    return l(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                l = n("920636");
            let s = (e, t, n) => function(i) {
                return (0, r.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function a(e, t, n) {
                return (0, i.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, r) {
                return (0, i.updateModal)(e, s(t, n, r))
            }
        },
        432710: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MetricEvents: function() {
                    return r
                }
            }), n("222007"), (i = r || (r = {})).APP_CRASHED = "app_crashed", i.SOCKET_CRASHED = "socket_crashed", i.MESSAGE_REQUEST_VIEW = "message_request_view", i.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", i.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", i.FAMILY_CENTER_VIEW = "family_center_view", i.SAFETY_HUB_VIEW = "safety_hub_view", i.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", i.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", i.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", i.AFK_NOT_IDLE = "afk_not_idle", i.CAPTCHA_EVENT = "captcha_event", i.SAFETY_WARNING_VIEW = "safety_warning_view", i.SAFETY_WARNING_MODAL_VIEW = "safety_warning_modal_view", i.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = "explicit_media_scan_client_timed_out", i.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING = "explicit_media_scan_client_timing", i.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", i.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", i.OTA_UPDATE_CHECK = "ota_update_check", i.OTA_ASSET_DOWNLOAD = "ota_asset_download", i.DEBUG_OTA_200_TIMEOUT = "debug_ota_200_timeout"
        },
        615361: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return l
                }
            }), n("222007"), (i = r || (r = {})).STABLE = "stable", i.BETA = "beta", i.ALPHA = "alpha", i.PTB = "ptb", i.CANARY = "canary", i.STAGING = "staging", i.DEVELOPMENT = "development";
            let l = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);