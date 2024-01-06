(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["18044"], {
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
                var a = [];
                if (t[6]) {
                    (s = t[6].split("-")).shift();
                    for (var s, o, u = []; s.length;) {
                        var l = s.shift();
                        1 === l.length ? o ? (a.push({
                            singleton: o,
                            extension: u
                        }), o = l, u = []) : o = l : u.push(l)
                    }
                    a.push({
                        singleton: o,
                        extension: u
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
                        extension: a,
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
        458389: function(e, t, n) {
            n("424973");
            var r = n("594140"),
                i = n("564414"),
                a = n("725502"),
                s = n("591350"),
                o = n("476540"),
                u = n("381178"),
                l = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = a(e),
                    c = !n && i(e),
                    d = !n && !c && s(e),
                    _ = !n && !c && !d && u(e),
                    E = n || c || d || _,
                    f = E ? r(e.length, String) : [],
                    I = f.length;
                for (var p in e)(t || l.call(e, p)) && !(E && ("length" == p || d && ("offset" == p || "parent" == p) || _ && ("buffer" == p || "byteLength" == p || "byteOffset" == p) || o(p, I))) && f.push(p);
                return f
            }
        },
        659382: function(e, t, n) {
            var r = n("33426"),
                i = n("136047"),
                a = n("270879"),
                s = {};
            s["[object Float32Array]"] = s["[object Float64Array]"] = s["[object Int8Array]"] = s["[object Int16Array]"] = s["[object Int32Array]"] = s["[object Uint8Array]"] = s["[object Uint8ClampedArray]"] = s["[object Uint16Array]"] = s["[object Uint32Array]"] = !0, s["[object Arguments]"] = s["[object Array]"] = s["[object ArrayBuffer]"] = s["[object Boolean]"] = s["[object DataView]"] = s["[object Date]"] = s["[object Error]"] = s["[object Function]"] = s["[object Map]"] = s["[object Number]"] = s["[object Object]"] = s["[object RegExp]"] = s["[object Set]"] = s["[object String]"] = s["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return a(e) && i(e.length) && !!s[r(e)]
            }
        },
        205873: function(e, t, n) {
            n("424973");
            var r = n("733228"),
                i = n("541349"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n);
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
                a = i && "object" == typeof e && e && !e.nodeType && e,
                s = a && a.exports === i && r.process,
                o = function() {
                    try {
                        var e = a && a.require && a.require("util").types;
                        if (e) return e;
                        return s && s.binding && s.binding("util")
                    } catch (e) {}
                }();
            e.exports = o
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
                a = "object" == typeof t && t && !t.nodeType && t,
                s = a && "object" == typeof e && e && !e.nodeType && e,
                o = s && s.exports === a ? r.Buffer : void 0,
                u = o ? o.isBuffer : void 0;
            e.exports = u || i
        },
        381178: function(e, t, n) {
            var r = n("659382"),
                i = n("492692"),
                a = n("276440"),
                s = a && a.isTypedArray,
                o = s ? i(s) : r;
            e.exports = o
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                i = n("205873"),
                a = n("603108");
            e.exports = function(e) {
                return a(e) ? r(e) : i(e)
            }
        },
        221386: function(e, t, n) {
            e.exports = function() {
                return !1
            }
        },
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return i.default
                },
                useLazyValue: function() {
                    return a.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                a = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var r = n("884691");

            function i() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691");
            let i = {};

            function a(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("48174");
            let a = [];

            function s(e, t) {
                let n = (0, r.useRef)(),
                    s = (0, r.useRef)(a);
                return s.current === a ? (n.current = e(), s.current = t) : !(0, i.default)(t, s.current) && (n.current = e(), s.current = t), n.current
            }
        },
        133457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchEULA: function() {
                    return s
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("49111");
            async function s(e) {
                let t = await r.default.get({
                    url: a.Endpoints.STORE_EULA(e),
                    oldFormErrors: !0
                });
                i.default.dispatch({
                    type: "EULA_FETCH_SUCCESS",
                    eula: t.body
                })
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return a
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

            function a() {
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
        523360: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("446674"),
                s = n("77078"),
                o = n("133457"),
                u = n("784736"),
                l = n("145131"),
                c = n("9074"),
                d = n("782340"),
                _ = n("639420");

            function E(e) {
                var t;
                let {
                    eulaId: n,
                    transitionState: E,
                    onClose: f
                } = e, I = (0, a.useStateFromStores)([u.default], () => u.default.getEULA(n));
                i.useEffect(() => {
                    (0, o.fetchEULA)(n)
                }, [n]);
                let p = null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : d.default.Messages.LOADING,
                    A = null != I ? (0, r.jsx)(c.default, {
                        children: I.content,
                        className: _.markdown
                    }) : (0, r.jsx)(s.Spinner, {
                        className: _.spinner
                    });
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: E,
                    size: s.ModalSize.SMALL,
                    "aria-label": p,
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        justify: l.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: p
                        }), (0, r.jsx)(s.ModalCloseButton, {
                            onClick: f
                        })]
                    }), (0, r.jsx)(s.ModalContent, {
                        children: A
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
                a = n("414456"),
                s = n.n(a),
                o = n("77078"),
                u = n("782340"),
                l = n("347129");
            class c extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: a,
                        error: c,
                        isLoading: d,
                        maxLength: _,
                        transitionState: E,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: p
                    } = this.props, {
                        code: A,
                        errorMessage: R,
                        retrySuccess: h
                    } = this.state, N = i.Children.count(a) > 0 ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.WARNING,
                        className: l.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: a
                        })
                    }) : null, g = null != I ? (0, r.jsxs)(o.Text, {
                        className: s(l.submitText, l.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(o.Clickable, {
                            className: s(l.spacing, l.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(o.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, S = h ? (0, r.jsx)(o.Card, {
                        type: o.Card.Types.SUCCESS,
                        className: l.card,
                        children: (0, r.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: p
                        })
                    }) : null;
                    return (0, r.jsx)(o.ModalRoot, {
                        transitionState: E,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(o.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(o.ModalContent, {
                                children: [null != f ? (0, r.jsx)(o.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: l.spacing,
                                    children: f
                                }) : null, N, S, (0, r.jsxs)(o.FormItem, {
                                    title: this.getLabelText(),
                                    className: l.spacing,
                                    children: [(0, r.jsx)(o.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: A,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(o.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: l.error,
                                        children: null != c ? c : R
                                    }) : null, g]
                                })]
                            }), (0, r.jsxs)(o.ModalFooter, {
                                children: [(0, r.jsx)(o.Button, {
                                    type: "submit",
                                    disabled: d || 0 === A.length,
                                    children: null != n ? n : u.default.Messages.CONFIRM
                                }), (0, r.jsx)(o.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: o.Button.Looks.LINK,
                                    color: o.Button.Colors.PRIMARY,
                                    children: u.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : u.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? u.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : u.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                a = n("49111"),
                s = n("782340");
            r = class extends i.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: a.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: a.Links.STATUS
                    }))
                }
            }
        },
        79489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("888400"),
                i = n("333805"),
                a = n("782340");
            class s extends i.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, r.diffAsUnits)(0, 1e3 * t);
                    return (0, r.unitsAsStrings)(n, {
                        days: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: a.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var o = s
        },
        736978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return r
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return g
                },
                default: function() {
                    return m
                }
            }), n("222007");
            var r, i, a, s, o, u, l, c, d = n("486196"),
                _ = n("614247"),
                E = n("821879"),
                f = n("333805"),
                I = n("782340");
            (o = r || (r = {}))[o.UNKNOWN = 0] = "UNKNOWN", o[o.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", o[o.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", o[o.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", o[o.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", o[o.INVALID_PLAN = 100005] = "INVALID_PLAN", o[o.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", o[o.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", o[o.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", o[o.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", o[o.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", o[o.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", o[o.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", o[o.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", o[o.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", o[o.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", o[o.CARD_DECLINED = 100054] = "CARD_DECLINED", o[o.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", o[o.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", o[o.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", o[o.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", o[o.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", o[o.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", o[o.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", o[o.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", o[o.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", o[o.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", o[o.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (u = i || (i = {})).CARD_NUMBER = "cardNumber", u.CARD_CVC = "cvc", u.CARD_EXPIRATION_DATE = "expirationDate", u.CARD_NAME = "name", u.ADDRESS_NAME = "name", u.ADDRESS_LINE_1 = "line1", u.ADDRESS_LINE_2 = "line2", u.ADDRESS_CITY = "city", u.ADDRESS_STATE = "state", u.ADDRESS_POSTAL_CODE = "postalCode", u.ADDRESS_COUNTRY = "country", (l = a || (a = {})).ADDRESS_LINE_1 = "address_line1", l.ADDRESS_LINE_2 = "address_line2", l.ADDRESS_CITY = "address_city", l.ADDRESS_STATE = "address_state", l.ADDRESS_ZIP = "address_zip", l.ADDRESS_COUNTRY = "address_country", l.CARD_NUMBER = "number", l.CARD_EXPIRATION_DATE = "exp", l.CARD_EXPIRATION_MONTH = "exp_month", l.CARD_EXPIRATION_YEAR = "exp_year";
            let p = Object.freeze({
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
                A = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (c = s || (s = {})).CARD = "card", c.ADDRESS = "address";
            let R = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                h = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                N = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function g(e) {
                var t, n, r, i, a;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === d.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : null === (r = i.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (a = e.body) || void 0 === a ? void 0 : a.errors) != null && (e.body = (0, _.default)(e.body.errors))
                }
                return new S(e)
            }
            class S extends f.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, E.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(h) : this._isInFieldSet(R)
                }
                hasAddressError() {
                    return this._isInFieldSet(N)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = I.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = I.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = I.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = I.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = I.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = I.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = I.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = I.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = p[n] || A[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            S.ErrorCodes = r, S.Fields = i, S.Sections = s, S.CARD_ERRORS = R, S.ADDRESS_ERRORS = N;
            var m = S
        },
        852766: function(e, t, n) {
            "use strict";
            n.r(t), n("736978")
        },
        927367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadErrorCodes: function() {
                    return i
                },
                default: function() {
                    return s
                }
            });
            var r, i, a = n("782340");
            (r = i || (i = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
            var s = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                a = n("49111"),
                s = n("782340");
            r = class extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? s.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: a.Links.STATUS,
                        details: "".concat(t)
                    }) : s.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: a.Links.STATUS
                    }))
                }
            }
        },
        448993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                V6OrEarlierAPIError: function() {
                    return r.default
                },
                APIError: function() {
                    return i.default
                },
                BillingError: function() {
                    return a.default
                },
                AppliedGuildBoostError: function() {
                    return s.default
                },
                UploadVoiceDebugLogsError: function() {
                    return o.default
                },
                UploadErrorCodes: function() {
                    return o.UploadErrorCodes
                }
            });
            var r = n("333805"),
                i = n("599417"),
                a = n("736978");
            n("852766"), n("846071");
            var s = n("79489"),
                o = n("927367")
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
                } = await n.el("572544").then(n.bind(n, "572544")), a = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != a) a(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, a, s;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (a = r || (r = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (s = i || (i = {}))[s.BOT = 0] = "BOT", s[s.SERVER = 1] = "SERVER", s[s.SYSTEM_DM = 2] = "SYSTEM_DM", s[s.OFFICIAL = 3] = "OFFICIAL", s[s.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", s[s.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", s[s.AI = 6] = "AI", s[s.REMIX = 7] = "REMIX"
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
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("479756"),
                s = n("38654"),
                o = n("9294"),
                u = n("26989"),
                l = n("337543"),
                c = n("697218"),
                d = n("49111");
            let _ = async (e, t) => {
                let n = null != t ? t : l.default.getInviteKeyForGuildId(e),
                    a = c.default.getCurrentUser(),
                    s = !u.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: s,
                            invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, f = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, I = async (e, t) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, p = async (e, t) => {
                if (s.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
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
                            body: a
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var A = {
                fetchVerificationForm: _,
                updateVerificationForm: E,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: p
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return s
                },
                MAX_FORM_ELEMENTS: function() {
                    return o
                },
                MAX_NUM_RULES: function() {
                    return u
                },
                MAX_RULE_LENGTH: function() {
                    return l
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return _
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return p
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return A
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([i.VerificationFormFieldTypes.TERMS]),
                s = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                o = 5,
                u = 16,
                l = 300,
                c = 300,
                d = 8,
                _ = 150,
                E = 150,
                f = 1e3,
                I = 300,
                p = "Membership Gating",
                A = "in-app-member-verification";
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
                    return o
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return l
                }
            });
            var r = n("308503"),
                i = n("659500"),
                a = n("49111");
            let s = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                o = (0, r.default)(e => s),
                u = e => {
                    o.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                l = e => {
                    o.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("599110"),
                s = n("50926"),
                o = n("347977"),
                u = n("394294"),
                l = n("49111");
            let c = () => {
                    a.default.track(l.AnalyticEvents.MODAL_DISMISSED, {
                        type: u.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    a.default.track(l.AnalyticEvents.OPEN_MODAL, {
                        type: u.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var _ = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let a = async t => {
                        await s.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, o.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), o.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, o.setShowWarning)(!0) : (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, i.closeModal)(u.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return R
                },
                updateImpersonating: function() {
                    return h
                },
                stopImpersonating: function() {
                    return N
                },
                updateImpersonatedChannels: function() {
                    return S
                },
                updateImpersonatedRoles: function() {
                    return m
                },
                updateImpersonatedData: function() {
                    return T
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                a = n("393414"),
                s = n("42203"),
                o = n("923959"),
                u = n("26989"),
                l = n("305961"),
                c = n("957255"),
                d = n("18494"),
                _ = n("282109"),
                E = n("599110"),
                f = n("38654"),
                I = n("507950"),
                p = n("49111"),
                A = n("724210");

            function R(e, t) {
                E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), g(e)
            }

            function h(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (E.default.track(p.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), g(e))
            }

            function N(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function g(e) {
                let t = d.default.getChannelId(e),
                    n = s.default.getChannel(t),
                    r = null != t && (0, A.isStaticChannelRoute)(t);
                if (!r && !c.default.can(p.Permissions.VIEW_CHANNEL, n)) {
                    let t = o.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(p.Routes.CHANNEL(e, t.id))
                }
            }

            function S(e, t, n) {
                let r = new Set(_.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function m(e, t) {
                let n = l.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    o.default.addConditionalChangeListener(() => {
                        let t = u.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...o.default.getSelectableChannelIds(e), ...o.default.getVocalChannelIds(e)],
                            a = i.filter(e => !n.includes(e));
                        return a.length > 0 && S(e, a, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function T(e, t) {
                h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
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
                    return o
                },
                parseExtraDataFromInviteKey: function() {
                    return u
                },
                parseInviteCodeFromInviteKey: function() {
                    return l
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let a = "event";

            function s(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[a])
                    } catch (e) {
                        return
                    }
                }(t);
                return o({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function o(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function u(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let s = r.parse(n),
                    o = (0, i.getFirstQueryStringValue)(s[a]);
                return {
                    baseCode: t,
                    guildScheduledEventId: o
                }
            }

            function l(e) {
                let [t] = e.split("?");
                return t
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

            function a(e) {
                return !1
            }

            function s() {
                return !1
            }

            function o() {
                return !1
            }

            function u(e) {
                let {} = e;
                return !1
            }

            function l(e, t) {
                return !1
            }

            function c() {
                return !1
            }

            function d(e) {}

            function _(e) {}

            function E(e) {}

            function f(e) {
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
                    return a
                },
                resetToAuthRoute: function() {
                    return s
                },
                resetToPanelsUI: function() {
                    return o
                },
                pushModal: function() {
                    return u
                },
                popModal: function() {
                    return l
                },
                popAllModals: function() {
                    return c
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceGuildsRoute: function() {
                    return _
                },
                coerceModalRoute: function() {
                    return E
                },
                useIsModalOpen: function() {
                    return f
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
                    return u
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
                a = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                s = e => null != e && a.test(e),
                o = /\.(webp|gif)$/i,
                u = e => i(e, o),
                l = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
                c = e => i(e, l),
                d = e => null != e && l.test(e)
        },
        155084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007"), n("424973");
            var r = n("615361"),
                i = n("872717"),
                a = n("773336"),
                s = n("827032"),
                o = n("49111");
            let u = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var l = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: i
                        } = e,
                        o = {
                            name: n,
                            tags: (0, s.getGlobalTagsArray)()
                        };
                    null != i && i.forEach(e => {
                        o.tags.push(e)
                    });
                    let l = function() {
                        if ((0, a.isWeb)()) return "web";
                        {
                            let e = (0, a.getPlatformName)();
                            return u.has(e) ? e : null
                        }
                    }();
                    null != l && o.tags.push("platform:".concat(l));
                    let c = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return r.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != c && o.tags.push("release_channel:".concat(c)), this._metrics.push(o), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        i.default.post({
                            url: o.Endpoints.METRICS,
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
                    return a
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
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

            function a() {
                let {
                    autoTrackExposure: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    autoTrackExposure: !0
                }, t = i.getCurrentConfig({
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
                    return s
                },
                getDevicePushProvider: function() {
                    return o
                }
            });
            var r, i, a = n("773336");
            let s = null;

            function o() {
                return (0, a.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                a = n.n(i),
                s = n("666038");
            r = class e extends s.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: a(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = a(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = a(this.createdAt);
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
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                a = n("9294"),
                s = n("49111");
            let o = {},
                u = {},
                l = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, a.parseExtraDataFromInviteKey)(e),
                    i = o[e],
                    u = null != i ? {
                        state: s.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: s.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(u), o = {
                    ...o,
                    [e]: u
                }, (null === (n = u.guild) || void 0 === n ? void 0 : n.id) != null && (l = {
                    ...l,
                    [u.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? s.InviteStates.BANNED : s.InviteStates.EXPIRED
                })
            }
            class _ extends r.default.Store {
                getInvite(e) {
                    return o[e]
                }
                getInviteError(e) {
                    return u[e]
                }
                getInvites() {
                    return o
                }
                getInviteKeyForGuildId(e) {
                    return l[e]
                }
            }
            _.displayName = "InviteStore";
            var E = new _(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, a.parseExtraDataFromInviteKey)(t);
                    o = {
                        ...o,
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
                    return u[e.code] = e.error, c(e.code, e => {
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
        784736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("446674"),
                i = n("913144");
            let a = {};
            class s extends r.default.Store {
                getEULA(e) {
                    return a[e]
                }
            }
            s.displayName = "EULAStore";
            var o = new s(i.default, {
                EULA_FETCH_SUCCESS: function(e) {
                    let {
                        eula: t
                    } = e;
                    a[t.id] = t
                }
            })
        },
        895530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                s = n("813986");

            function o(e) {
                let {
                    children: t,
                    tag: n,
                    className: i
                } = e;
                return n = null != n ? n : "h3", (0, r.jsx)(n, {
                    className: a(s.title, i),
                    children: t
                })
            }
        },
        9074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r, i = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
                u = n("463928"),
                l = n.n(u),
                c = n("269936"),
                d = n("647374"),
                _ = n("47677"),
                E = n("895530"),
                f = n("238165"),
                I = n("862839");
            let p = new RegExp("https?://".concat(null !== (r = window.GLOBAL_ENV.CDN_HOST) && void 0 !== r ? r : ""));

            function A(e) {
                return "string" == typeof e.content ? e.content : N(e.content)
            }
            let R = {
                    ...l.defaultRules,
                    heading: {
                        ...l.defaultRules.heading,
                        react(e, t, n) {
                            let r = "h".concat(e.level);
                            return (0, i.jsx)(E.default, {
                                tag: r,
                                children: t(e.content, n)
                            }, n.key)
                        }
                    },
                    paragraph: {
                        ...l.defaultRules.paragraph,
                        react: (e, t, n) => (0, i.jsx)("div", {
                            className: f.paragraph,
                            children: t(e.content, n)
                        }, n.key)
                    },
                    strong: {
                        ...l.defaultRules.strong,
                        order: 6
                    },
                    em: {
                        ...l.defaultRules.em,
                        order: 6
                    },
                    u: {
                        ...l.defaultRules.u,
                        order: 5
                    },
                    del: {
                        ...l.defaultRules.del,
                        order: 6
                    },
                    link: {
                        ...d.default,
                        ...(0, _.default)({
                            enableBuildOverrides: !1
                        }),
                        order: 6
                    },
                    blockQuote: {
                        ...l.defaultRules.blockQuote,
                        react: (e, t, n) => (0, i.jsx)("blockquote", {
                            className: f.blockquote,
                            children: A(e)
                        }, n.key)
                    },
                    image: {
                        ...l.defaultRules.image,
                        order: 6,
                        match(e, t, n) {
                            let r = l.defaultRules.image;
                            if (null == r || null == r.match) return !1;
                            let i = r.match(e, t, n);
                            if (null != i && Array.isArray(i) && i.length >= 3) {
                                let e = i[2];
                                if ("string" == typeof e) return null != e.match(p) ? i : null
                            }
                            return !1
                        }
                    },
                    inlineCode: {
                        ...l.defaultRules.inlineCode,
                        order: 6,
                        react: (e, t, n) => (0, i.jsx)("code", {
                            className: f.codeInline,
                            children: A(e)
                        }, n.key)
                    },
                    codeBlock: {
                        ...l.defaultRules.codeBlock,
                        react(e, t, r) {
                            let a = () => (0, i.jsx)("pre", {
                                children: (0, i.jsx)("code", {
                                    className: o(I.scrollbarGhostHairline, "hljs"),
                                    children: A(e)
                                })
                            }, r.key);
                            return (0, i.jsx)(c.LazyLibrary, {
                                createPromise: () => n.el("86256").then(n.bind(n, "86256")),
                                webpackId: "86256",
                                renderFallback: a,
                                render: t => {
                                    if (!(e.lang && t.hasLanguage(e.lang)) || "string" != typeof e.content) return a();
                                    {
                                        let n = t.highlight(e.lang, e.content, !0);
                                        return null == n ? a() : (0, i.jsx)("pre", {
                                            children: (0, i.jsx)("code", {
                                                className: o(I.scrollbarGhostHairline, "hljs", n.language),
                                                dangerouslySetInnerHTML: {
                                                    __html: n.value
                                                }
                                            })
                                        }, r.key)
                                    }
                                }
                            }, r.key)
                        }
                    }
                },
                h = l.parserFor(R),
                N = l.reactFor(l.ruleOutput(R, "react"));
            class g extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        children: t,
                        state: n,
                        parser: r,
                        output: a
                    } = this.props, s = r("".concat(t, "\n\n"), {
                        inline: !1,
                        ...n
                    }), u = a(s);
                    return (0, i.jsx)("div", {
                        className: o(f.markdown, e),
                        children: u
                    })
                }
            }
            g.rules = R, g.defaultProps = {
                parser: h,
                output: N
            };
            var S = g
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return s
                },
                copy: function() {
                    return o
                }
            }), n("70102");
            var r = n("281071"),
                i = n("773336"),
                a = n("50885");
            let s = (() => {
                if (i.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!s && (i.isPlatformEmbedded ? (a.default.copy(e), !0) : r.copy(e))
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return a
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let a = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => a(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("70102");
            var a = n("697218"),
                s = n("615931");
            let o = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, o = e.updateModalProps, i = n("551042").closeModal
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: a,
                    modalProps: s = {},
                    hooks: {
                        onEarlyClose: u
                    } = {}
                } = e;
                if (null == r) {
                    null == u || u();
                    return
                }
                let c = r(f, d, s);

                function d() {
                    null == u || u()
                }

                function _(e) {
                    i(c), n(e)
                }

                function E(e) {
                    i(c), a(e)
                }

                function f(e) {
                    return o(c, f, d, {
                        ...s,
                        isLoading: !0
                    }), l({
                        promiseFn: t,
                        resolve: _,
                        reject: E,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    o(c, f, d, {
                        ...s,
                        error: t.body.message
                    })
                }
            }

            function l(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    code: i,
                    mfaCodeHandler: a = u,
                    isModalOpen: s = !1,
                    ...o
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, u;
                    if (i = e, u = s, i.body && 60008 === i.body.code || u && 429 === i.status) return a({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...o
                    });
                    r(e)
                })
            }

            function c(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...o
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, s.resolveThunk)(i) ? u : l)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...o
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
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("781738");
            var r = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
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

            function a(e, t, n) {
                let {
                    trackedActionData: r,
                    ...a
                } = t, s = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...s,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let o = r.properties;
                        "function" == typeof r.properties && (o = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...s,
                            ...o
                        }), n(e)
                    })
                })
            }
            var s = {
                get: function(e) {
                    return a(r.default.get, e, "get")
                },
                post: function(e) {
                    return a(r.default.post, e, "post")
                },
                put: function(e) {
                    return a(r.default.put, e, "put")
                },
                patch: function(e) {
                    return a(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return o
                },
                updateModalProps: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("920636");
            let s = (e, t, n) => function(i) {
                return (0, r.jsx)(a.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function o(e, t, n) {
                return (0, i.openModal)(s(e, t, n), {
                    onCloseCallback: t
                })
            }

            function u(e, t, n, r) {
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
                    return a
                }
            }), n("222007"), (i = r || (r = {})).STABLE = "stable", i.BETA = "beta", i.ALPHA = "alpha", i.PTB = "ptb", i.CANARY = "canary", i.STAGING = "staging", i.DEVELOPMENT = "development";
            let a = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    i = document.createElement("textarea");
                i.value = e, i.contentEditable = "true", i.style.visibility = "none", t.appendChild(i), n.selectNodeContents(i), null == r || r.removeAllRanges(), null == r || r.addRange(n), i.focus(), i.setSelectionRange(0, e.length);
                let a = document.execCommand("copy");
                return t.removeChild(i), a
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            }), n("70102")
        }
    }
]);