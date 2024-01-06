(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["51937"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var i = 0, s = 0; i < r; i++) {
                    for (var o = e.charCodeAt(i); s < n;)
                        if (t.charCodeAt(s++) === o) continue e;
                    return !1
                }
                return !0
            }
        },
        458389: function(e, t, n) {
            n("424973");
            var r = n("594140"),
                i = n("564414"),
                s = n("725502"),
                o = n("591350"),
                l = n("476540"),
                a = n("381178"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = s(e),
                    d = !n && i(e),
                    c = !n && !d && o(e),
                    E = !n && !d && !c && a(e),
                    f = n || d || c || E,
                    _ = f ? r(e.length, String) : [],
                    p = _.length;
                for (var I in e)(t || u.call(e, I)) && !(f && ("length" == I || c && ("offset" == I || "parent" == I) || E && ("buffer" == I || "byteLength" == I || "byteOffset" == I) || l(I, p))) && _.push(I);
                return _
            }
        },
        659382: function(e, t, n) {
            var r = n("33426"),
                i = n("136047"),
                s = n("270879"),
                o = {};
            o["[object Float32Array]"] = o["[object Float64Array]"] = o["[object Int8Array]"] = o["[object Int16Array]"] = o["[object Int32Array]"] = o["[object Uint8Array]"] = o["[object Uint8ClampedArray]"] = o["[object Uint16Array]"] = o["[object Uint32Array]"] = !0, o["[object Arguments]"] = o["[object Array]"] = o["[object ArrayBuffer]"] = o["[object Boolean]"] = o["[object DataView]"] = o["[object Date]"] = o["[object Error]"] = o["[object Function]"] = o["[object Map]"] = o["[object Number]"] = o["[object Object]"] = o["[object RegExp]"] = o["[object Set]"] = o["[object String]"] = o["[object WeakMap]"] = !1;
            e.exports = function(e) {
                return s(e) && i(e.length) && !!o[r(e)]
            }
        },
        205873: function(e, t, n) {
            n("424973");
            var r = n("733228"),
                i = n("541349"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!r(e)) return i(e);
                var t = [];
                for (var n in Object(e)) s.call(e, n) && "constructor" != n && t.push(n);
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
                s = i && "object" == typeof e && e && !e.nodeType && e,
                o = s && s.exports === i && r.process,
                l = function() {
                    try {
                        var e = s && s.require && s.require("util").types;
                        if (e) return e;
                        return o && o.binding && o.binding("util")
                    } catch (e) {}
                }();
            e.exports = l
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
                s = "object" == typeof t && t && !t.nodeType && t,
                o = s && "object" == typeof e && e && !e.nodeType && e,
                l = o && o.exports === s ? r.Buffer : void 0,
                a = l ? l.isBuffer : void 0;
            e.exports = a || i
        },
        381178: function(e, t, n) {
            var r = n("659382"),
                i = n("492692"),
                s = n("276440"),
                o = s && s.isTypedArray,
                l = o ? i(o) : r;
            e.exports = l
        },
        466731: function(e, t, n) {
            var r = n("458389"),
                i = n("205873"),
                s = n("603108");
            e.exports = function(e) {
                return s(e) ? r(e) : i(e)
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
                    return s.default
                }
            });
            var r = n("14716"),
                i = n("745510"),
                s = n("315378")
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
                    return s
                }
            });
            var r = n("884691");
            let i = {};

            function s(e) {
                let t = (0, r.useRef)(i);
                return t.current === i && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("48174");
            let s = [];

            function o(e, t) {
                let n = (0, r.useRef)(),
                    o = (0, r.useRef)(s);
                return o.current === s ? (n.current = e(), o.current = t) : !(0, i.default)(t, o.current) && (n.current = e(), o.current = t), n.current
            }
        },
        288661: function(e, t, n) {
            "use strict";
            var r = n("817736");
            t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
        },
        748268: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c87be216431a35927431.svg"
        },
        913139: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("913144"),
                i = {
                    addKeybind(e) {
                        r.default.dispatch({
                            type: "KEYBINDS_ADD_KEYBIND",
                            keybind: e
                        })
                    },
                    setKeybind(e) {
                        r.default.dispatch({
                            type: "KEYBINDS_SET_KEYBIND",
                            keybind: e
                        })
                    },
                    deleteKeybind(e) {
                        r.default.dispatch({
                            type: "KEYBINDS_DELETE_KEYBIND",
                            id: e
                        })
                    },
                    enableAll(e) {
                        r.default.dispatch({
                            type: "KEYBINDS_ENABLE_ALL_KEYBINDS",
                            enable: e
                        })
                    }
                }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return i
                },
                popLayer: function() {
                    return s
                },
                popAllLayers: function() {
                    return o
                }
            });
            var r = n("913144");

            function i(e) {
                r.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function s() {
                r.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                r.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        278108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                s = n("499032"),
                o = n.n(s),
                l = n("312165"),
                a = n("3958"),
                u = n("773336"),
                d = n("50885"),
                c = n("49111");
            let E = u.isPlatformEmbedded && null != d.default.getDiscordUtils().inputCaptureRegisterElement;
            class f extends i.PureComponent {
                componentDidMount() {
                    this._mounted = !0
                }
                componentWillUnmount() {
                    this._mounted = !1, this.cleanUp()
                }
                componentDidUpdate(e) {
                    this.props.defaultValue !== e.defaultValue && this.setState({
                        codes: this.props.defaultValue
                    })
                }
                cleanUp() {
                    u.isPlatformEmbedded && null != this.gs && (this.gs.destroy(), this.gs = null)
                }
                handleComboChange(e) {
                    let {
                        mode: t
                    } = this.state, {
                        onChange: n
                    } = this.props;
                    t === a.RecordModes.RECORDING && (null != n && n(e), this.setState({
                        codes: e
                    }))
                }
                render() {
                    let e, t;
                    let {
                        codes: n,
                        mode: i
                    } = this.state, {
                        disabled: s
                    } = this.props;
                    return E ? (t = d.default.getDiscordUtils().inputCaptureRegisterElement, e = this.handleNativeChange) : !u.isPlatformEmbedded && (e = this.handleComboKeys), (0, r.jsx)(a.default, {
                        disabled: s,
                        value: n,
                        mode: i,
                        onClick: this.toggleRecordMode,
                        onChange: e,
                        registerNativeRecorder: t,
                        disableOnClickWhileRecording: E
                    })
                }
                constructor(e) {
                    super(e), this._mounted = !1, this.recordStart = () => {
                        u.isPlatformEmbedded && !E && (this.gs = new l.default, this.gs.on("change", this.handleGSChange)), this.setState({
                            mode: a.RecordModes.RECORDING
                        })
                    }, this.recordEnd = () => {
                        this.cleanUp(), this.setState({
                            mode: a.RecordModes.DEFAULT
                        })
                    }, this.toggleRecordMode = () => {
                        this.state.mode === a.RecordModes.DEFAULT ? this.recordStart() : this.recordEnd()
                    }, this.handleComboKeys = (e, t, n) => {
                        if (n.preventDefault(), "keydown" === n.type) {
                            let e = t.map(e => [c.KeyboardDeviceTypes.KEYBOARD_KEY, o(e), c.KeyboardEnvs.BROWSER]),
                                {
                                    keyCode: r
                                } = n;
                            null == e.find(e => {
                                let [, t] = e;
                                return r === t
                            }) && e.push([c.KeyboardDeviceTypes.KEYBOARD_KEY, r, c.KeyboardEnvs.BROWSER]), this.handleComboChange(e)
                        }
                    }, this.handleGSChange = e => {
                        if (!1 === this._mounted) return;
                        let t = [...e.combo];
                        this.handleComboChange(t)
                    }, this.handleNativeChange = e => {
                        e.length > 0 && this.handleComboChange(e), this.recordEnd()
                    };
                    let {
                        defaultValue: t
                    } = e;
                    this.state = {
                        codes: t,
                        mode: a.RecordModes.DEFAULT
                    }
                }
            }
            var _ = f
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("414456"),
                o = n.n(s),
                l = n("77078"),
                a = n("782340"),
                u = n("347129");
            class d extends i.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: s,
                        error: d,
                        isLoading: c,
                        maxLength: E,
                        transitionState: f,
                        helpMessage: _,
                        retryPrompt: p,
                        retrySuccessMessage: I
                    } = this.props, {
                        code: h,
                        errorMessage: A,
                        retrySuccess: R
                    } = this.state, g = i.Children.count(s) > 0 ? (0, r.jsx)(l.Card, {
                        type: l.Card.Types.WARNING,
                        className: u.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null, N = null != p ? (0, r.jsxs)(l.Text, {
                        className: o(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, r.jsx)("br", {}), (0, r.jsx)(l.Clickable, {
                            className: o(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, r.jsx)(l.Anchor, {
                                children: p
                            })
                        })]
                    }) : null, m = R ? (0, r.jsx)(l.Card, {
                        type: l.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, r.jsx)(l.Text, {
                            variant: "text-md/normal",
                            children: I
                        })
                    }) : null;
                    return (0, r.jsx)(l.ModalRoot, {
                        transitionState: f,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(l.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, r.jsxs)(l.ModalContent, {
                                children: [null != _ ? (0, r.jsx)(l.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: _
                                }) : null, g, m, (0, r.jsxs)(l.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, r.jsx)(l.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: h,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, r.jsx)(l.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : A
                                    }) : null, N]
                                })]
                            }), (0, r.jsxs)(l.ModalFooter, {
                                children: [(0, r.jsx)(l.Button, {
                                    type: "submit",
                                    disabled: c || 0 === h.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, r.jsx)(l.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: l.Button.Looks.LINK,
                                    color: l.Button.Colors.PRIMARY,
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
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, s.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: l
                    })
                })
            }
        },
        225389: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleInformationIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: l = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: l = "",
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: l
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        79489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("888400"),
                i = n("333805"),
                s = n("782340");
            class o extends i.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, r.diffAsUnits)(0, 1e3 * t);
                    return (0, r.unitsAsStrings)(n, {
                        days: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: s.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var l = o
        },
        736978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return r
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return N
                },
                default: function() {
                    return S
                }
            }), n("222007");
            var r, i, s, o, l, a, u, d, c = n("486196"),
                E = n("614247"),
                f = n("821879"),
                _ = n("333805"),
                p = n("782340");
            (l = r || (r = {}))[l.UNKNOWN = 0] = "UNKNOWN", l[l.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", l[l.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", l[l.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", l[l.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", l[l.INVALID_PLAN = 100005] = "INVALID_PLAN", l[l.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", l[l.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", l[l.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", l[l.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", l[l.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", l[l.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", l[l.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", l[l.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", l[l.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", l[l.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", l[l.CARD_DECLINED = 100054] = "CARD_DECLINED", l[l.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", l[l.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", l[l.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", l[l.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", l[l.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", l[l.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", l[l.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", l[l.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", l[l.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", l[l.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", l[l.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (a = i || (i = {})).CARD_NUMBER = "cardNumber", a.CARD_CVC = "cvc", a.CARD_EXPIRATION_DATE = "expirationDate", a.CARD_NAME = "name", a.ADDRESS_NAME = "name", a.ADDRESS_LINE_1 = "line1", a.ADDRESS_LINE_2 = "line2", a.ADDRESS_CITY = "city", a.ADDRESS_STATE = "state", a.ADDRESS_POSTAL_CODE = "postalCode", a.ADDRESS_COUNTRY = "country", (u = s || (s = {})).ADDRESS_LINE_1 = "address_line1", u.ADDRESS_LINE_2 = "address_line2", u.ADDRESS_CITY = "address_city", u.ADDRESS_STATE = "address_state", u.ADDRESS_ZIP = "address_zip", u.ADDRESS_COUNTRY = "address_country", u.CARD_NUMBER = "number", u.CARD_EXPIRATION_DATE = "exp", u.CARD_EXPIRATION_MONTH = "exp_month", u.CARD_EXPIRATION_YEAR = "exp_year";
            let I = Object.freeze({
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
                h = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (d = o || (o = {})).CARD = "card", d.ADDRESS = "address";
            let A = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                R = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                g = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function N(e) {
                var t, n, r, i, s;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : null === (r = i.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (s = e.body) || void 0 === s ? void 0 : s.errors) != null && (e.body = (0, E.default)(e.body.errors))
                }
                return new m(e)
            }
            class m extends _.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, f.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(R) : this._isInFieldSet(A)
                }
                hasAddressError() {
                    return this._isInFieldSet(g)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = p.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = p.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = p.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = p.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = p.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = p.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = p.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = p.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = I[n] || h[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            m.ErrorCodes = r, m.Fields = i, m.Sections = o, m.CARD_ERRORS = A, m.ADDRESS_ERRORS = g;
            var S = m
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
                    return o
                }
            });
            var r, i, s = n("782340");
            (r = i || (i = {}))[r.GENERAL = 0] = "GENERAL", r[r.NO_FILE = 1] = "NO_FILE", r[r.PROGRESS = 2] = "PROGRESS", r[r.UPLOAD = 3] = "UPLOAD", r[r.READ = 4] = "READ";
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
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r, i = n("872717"),
                s = n("49111"),
                o = n("782340");
            r = class extends i.default.V6OrEarlierAPIError {
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
                    return s.default
                },
                AppliedGuildBoostError: function() {
                    return o.default
                },
                UploadVoiceDebugLogsError: function() {
                    return l.default
                },
                UploadErrorCodes: function() {
                    return l.UploadErrorCodes
                }
            });
            var r = n("333805"),
                i = n("599417"),
                s = n("736978");
            n("852766"), n("846071");
            var o = n("79489"),
                l = n("927367")
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("70102"), n("222007"), n("704744");
            var r, i = n("913144");
            r = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        i.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        312165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007"), n("424973");
            var r, i = n("44170"),
                s = n("773336"),
                o = n("50885"),
                l = n("13798"),
                a = n("49111");
            let u = [],
                d = (e, t, n) => {
                    let r = (0, s.isWindows)() ? 0 : 1;
                    (e !== a.KeyboardDeviceTypes.MOUSE_BUTTON || n !== r) && u.forEach(r => r._handleEvent(e, t, n))
                };
            r = class extends i.EventEmitter {
                destroy() {
                    this.removeAllListeners(), 0 === (u = u.filter(e => e !== this)).length && o.default.setOnInputEventCallback(null)
                }
                toString() {
                    return (0, l.toString)(this.combo)
                }
                _handleEvent(e, t, n) {
                    0 === t ? this.combo = this.combo.filter(t => {
                        let [r, i] = t;
                        return !(r === e && i === n)
                    }) : (this.combo.push([e, n, (0, l.getEnv)()]), this.emit("change", this))
                }
                constructor() {
                    super(), this.combo = [], u.push(this), 1 === u.length && o.default.setOnInputEventCallback(d)
                }
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
                } = await n.el("572544").then(n.bind(n, "572544")), s = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != s) s(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, s, o;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (s = r || (r = {}))[s.GAME = 1] = "GAME", s[s.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", s[s.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (o = i || (i = {}))[o.BOT = 0] = "BOT", o[o.SERVER = 1] = "SERVER", o[o.SYSTEM_DM = 2] = "SYSTEM_DM", o[o.OFFICIAL = 3] = "OFFICIAL", o[o.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", o[o.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", o[o.AI = 6] = "AI", o[o.REMIX = 7] = "REMIX"
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
                    return h
                }
            });
            var r = n("872717"),
                i = n("913144"),
                s = n("479756"),
                o = n("38654"),
                l = n("9294"),
                a = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    s = d.default.getCurrentUser(),
                    o = !a.default.isMember(e, null == s ? void 0 : s.id);
                try {
                    let t = await r.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, l.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: s
                    } = t;
                    return i.default.dispatch({
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
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, f = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, _ = async (e, t) => {
                let n = await r.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: s
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: s.version,
                        description: s.description,
                        formFields: s.form_fields
                    }
                })
            }, p = async (e, t) => {
                await r.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, I = async (e, t) => {
                if (o.default.isFullServerPreview(e)) {
                    (0, s.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: s
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: s
                    }), s
                } catch (e) {
                    throw e
                }
            };
            var h = {
                fetchVerificationForm: E,
                updateVerificationForm: f,
                updateVerificationFormDescription: _,
                enableVerificationForm: p,
                submitVerificationForm: I
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
                    return l
                },
                MAX_NUM_RULES: function() {
                    return a
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return p
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return I
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return h
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let s = new Set([i.VerificationFormFieldTypes.TERMS]),
                o = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                l = 5,
                a = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                f = 150,
                _ = 1e3,
                p = 300,
                I = "Membership Gating",
                h = "in-app-member-verification";
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
                    return l
                },
                setHasUnsubmittedChanges: function() {
                    return a
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                i = n("659500"),
                s = n("49111");
            let o = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                l = (0, r.default)(e => o),
                a = e => {
                    l.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    l.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(s.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                s = n("599110"),
                o = n("50926"),
                l = n("347977"),
                a = n("394294"),
                u = n("49111");
            let d = () => {
                    s.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: a.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    s.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: a.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let s = async t => {
                        await o.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: s,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, l.setShowWarning)(!0);
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
                            d(), l.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, l.setShowWarning)(!0) : (0, i.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, i.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return A
                },
                updateImpersonating: function() {
                    return R
                },
                stopImpersonating: function() {
                    return g
                },
                updateImpersonatedChannels: function() {
                    return m
                },
                updateImpersonatedRoles: function() {
                    return S
                },
                updateImpersonatedData: function() {
                    return T
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                s = n("393414"),
                o = n("42203"),
                l = n("923959"),
                a = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                E = n("282109"),
                f = n("599110"),
                _ = n("38654"),
                p = n("507950"),
                I = n("49111"),
                h = n("724210");

            function A(e, t) {
                f.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === p.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), N(e)
            }

            function R(e, t) {
                let n = _.default.getData(e);
                null != n && n.type === t.type && (f.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === p.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), N(e))
            }

            function g(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function N(e) {
                let t = c.default.getChannelId(e),
                    n = o.default.getChannel(t),
                    r = null != t && (0, h.isStaticChannelRoute)(t);
                if (!r && !d.default.can(I.Permissions.VIEW_CHANNEL, n)) {
                    let t = l.default.getDefaultChannel(e);
                    null != t && (0, s.transitionTo)(I.Routes.CHANNEL(e, t.id))
                }
            }

            function m(e, t, n) {
                let r = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), R(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function S(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    l.default.addConditionalChangeListener(() => {
                        let t = a.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...l.default.getSelectableChannelIds(e), ...l.default.getVocalChannelIds(e)],
                            s = i.filter(e => !n.includes(e));
                        return s.length > 0 && m(e, s, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), R(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function T(e, t) {
                R(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
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
                    return l
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let s = "event";

            function o(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[s])
                    } catch (e) {
                        return
                    }
                }(t);
                return l({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function l(e) {
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
                let o = r.parse(n),
                    l = (0, i.getFirstQueryStringValue)(o[s]);
                return {
                    baseCode: t,
                    guildScheduledEventId: l
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
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return f
                }
            });
            var r = n("65597"),
                i = n("862205"),
                s = n("697218"),
                o = n("719923"),
                l = n("782340");
            let a = (0, i.createExperiment)({
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
                        mobileAndFreemiumCollectEnabled: s,
                        autoUnfurlReactionTooltip: l,
                        collectOffOverride: a
                    } = n, u = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: s,
                        collectEnabled: !a && (u ? r : s),
                        autoUnfurlReactionTooltip: l
                    }
                },
                d = e => {
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
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, i = (0, r.default)([s.default], () => s.default.getCurrentUser()), o = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: l,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: E
                    } = u({
                        user: i,
                        config: o
                    }), f = l && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: l,
                        collectEnabled: f,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: E
                    }
                },
                E = (0, i.createExperiment)({
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
                            getNewSettingsDescriptionLine1: () => l.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => l.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                f = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
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

            function s(e) {
                return !1
            }

            function o() {
                return !1
            }

            function l() {
                return !1
            }

            function a(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function d() {
                return !1
            }

            function c(e) {}

            function E(e) {}

            function f(e) {}

            function _(e) {
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
                    return s
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return l
                },
                pushModal: function() {
                    return a
                },
                popModal: function() {
                    return u
                },
                popAllModals: function() {
                    return d
                },
                coerceChannelRoute: function() {
                    return c
                },
                coerceGuildsRoute: function() {
                    return E
                },
                coerceModalRoute: function() {
                    return f
                },
                useIsModalOpen: function() {
                    return _
                }
            })
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
            var r = n("773336");
            let i = (e, t) => {
                    if (null == e) return !1;
                    let [n, r] = e.split(/\?/, 1);
                    return t.test(n)
                },
                s = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                o = e => null != e && s.test(e),
                l = /\.(webp|gif)$/i,
                a = e => i(e, l),
                u = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
                d = e => i(e, u),
                c = e => null != e && u.test(e)
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
                s = n("773336"),
                o = n("827032"),
                l = n("49111");
            let a = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var u = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: i
                        } = e,
                        l = {
                            name: n,
                            tags: (0, o.getGlobalTagsArray)()
                        };
                    null != i && i.forEach(e => {
                        l.tags.push(e)
                    });
                    let u = function() {
                        if ((0, s.isWeb)()) return "web";
                        {
                            let e = (0, s.getPlatformName)();
                            return a.has(e) ? e : null
                        }
                    }();
                    null != u && l.tags.push("platform:".concat(u));
                    let d = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return r.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != d && l.tags.push("release_channel:".concat(d)), this._metrics.push(l), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        i.default.post({
                            url: l.Endpoints.METRICS,
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

            function s() {
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
                    return o
                },
                getDevicePushProvider: function() {
                    return l
                }
            });
            var r, i, s = n("773336");
            let o = null;

            function l() {
                return (0, s.isAndroid)(), null
            }(r = i || (i = {})).REMINDER = "reminder", r.TOP_MESSAGE_PUSH = "top_messages_push", r.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        644926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("446674"),
                o = n("77078"),
                l = n("913139"),
                a = n("278108"),
                u = n("485328"),
                d = n("227602"),
                c = n("555158"),
                E = n("13798"),
                f = n("846325"),
                _ = n("49111"),
                p = n("782340"),
                I = n("304593");

            function h(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: h
                } = e, A = (0, s.useStateFromStores)([d.default], () => d.default.getKeybindForAction(_.GlobalKeybindActions.SOUNDBOARD_HOLD)), [R, g] = i.useState(null !== (t = null == A ? void 0 : A.shortcut) && void 0 !== t ? t : []);
                return i.useEffect(() => (u.default.disable(), () => {
                    u.default.enable()
                }), []), (0, r.jsxs)(o.ModalRoot, {
                    transitionState: n,
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)(o.Heading, {
                            className: I.header,
                            variant: "heading-xl/semibold",
                            children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, r.jsx)(o.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: h
                        })]
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: I.content,
                        children: [(0, r.jsx)(c.default, {
                            className: I.warning,
                            messageType: c.HelpMessageTypes.WARNING,
                            children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, r.jsx)(o.Heading, {
                            className: I.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: p.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, r.jsx)(o.Text, {
                            className: I.action,
                            variant: "text-md/normal",
                            children: p.default.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, r.jsx)(o.Text, {
                            className: I.actionDescription,
                            variant: "text-sm/normal",
                            children: p.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, r.jsx)(o.Heading, {
                            className: I.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: p.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, r.jsx)(a.default, {
                            defaultValue: R,
                            onChange: g
                        }), (0, r.jsx)(o.Anchor, {
                            className: I.resetButton,
                            onClick: () => g((0, E.toCombo)(f.DEFAULT_KEYBIND)),
                            children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, r.jsxs)(o.ModalFooter, {
                        children: [(0, r.jsx)(o.Button, {
                            onClick: function() {
                                if (0 === R.length) return null != A && l.default.deleteKeybind(A.id), h();
                                null == A ? l.default.addKeybind({
                                    action: _.GlobalKeybindActions.SOUNDBOARD_HOLD,
                                    shortcut: R,
                                    enabled: !0,
                                    params: {}
                                }) : l.default.setKeybind({
                                    ...A,
                                    shortcut: R
                                });
                                h()
                            },
                            children: p.default.Messages.SAVE
                        }), (0, r.jsx)(o.Button, {
                            onClick: h,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: p.default.Messages.CANCEL
                        })]
                    })]
                })
            }
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
                    return d
                }
            });
            var r, i, s = n("991170"),
                o = n("719923"),
                l = n("24373"),
                a = n("49111");
            (r = i || (i = {}))[r.SENDABLE = 0] = "SENDABLE", r[r.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", r[r.NONSENDABLE = 2] = "NONSENDABLE", r[r.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let r = o.default.canUseCustomStickersEverywhere(t);
                    if ((0, l.isStandardSticker)(e)) return 0;
                    if ((0, l.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || s.default.can({
                        permission: a.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? r ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === u(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("424973");
            var r = n("917351"),
                i = n.n(r),
                s = n("446674"),
                o = n("913144"),
                l = n("80507"),
                a = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let f = new l.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    u.default.isLoaded && f.compute()
                },
                p = () => {
                    _()
                };

            function I() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                f.overwriteHistory(i.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class h extends s.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (E = e), this.syncWith([u.default], p), this.syncWith([a.default], I)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return f
                }
            }
            h.displayName = "StickersPersistedStore", h.persistKey = "StickersPersistedStoreV2";
            var A = new h(o.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        f.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), _()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                s = n.n(i),
                o = n("666038");
            r = class e extends o.default {
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
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                s = n("9294"),
                o = n("49111");
            let l = {},
                a = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, s.parseExtraDataFromInviteKey)(e),
                    i = l[e],
                    a = null != i ? {
                        state: o.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(a), l = {
                    ...l,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [a.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class E extends r.default.Store {
                getInvite(e) {
                    return l[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return l
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var f = new E(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, s.parseExtraDataFromInviteKey)(t);
                    l = {
                        ...l,
                        [t]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, r;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
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
                        var n, r;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
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
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return i
                },
                default: function() {
                    return _
                }
            });
            var r, i, s = n("37983");
            n("884691");
            var o = n("414456"),
                l = n.n(o),
                a = n("77078"),
                u = n("36694"),
                d = n("381546"),
                c = n("68238"),
                E = n("423487"),
                f = n("557296");
            (r = i || (i = {}))[r.WARNING = 0] = "WARNING", r[r.INFO = 1] = "INFO", r[r.ERROR = 2] = "ERROR", r[r.POSITIVE = 3] = "POSITIVE";
            var _ = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: r,
                    textColor: i = "text-normal",
                    textVariant: o = "text-sm/medium"
                } = e, _ = function(e) {
                    switch (e) {
                        case 0:
                            return E.default;
                        case 1:
                            return c.default;
                        case 2:
                            return d.default;
                        case 3:
                            return u.default
                    }
                }(n), p = function(e) {
                    switch (e) {
                        case 0:
                            return f.warning;
                        case 1:
                            return f.info;
                        case 2:
                            return f.error;
                        case 3:
                            return f.positive
                    }
                }(n);
                return (0, s.jsxs)("div", {
                    className: l(f.container, p, r),
                    children: [(0, s.jsx)("div", {
                        className: f.iconDiv,
                        children: (0, s.jsx)(_, {
                            className: f.icon
                        })
                    }), (0, s.jsx)(a.Text, {
                        className: f.text,
                        color: i,
                        variant: o,
                        children: t
                    })]
                })
            }
        },
        3958: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecordModes: function() {
                    return r
                },
                default: function() {
                    return g
                }
            }), n("222007");
            var r, i, s = n("37983"),
                o = n("884691"),
                l = n("414456"),
                a = n.n(l),
                u = n("800648"),
                d = n.n(u),
                c = n("917351"),
                E = n.n(c),
                f = n("77078"),
                _ = n("13798"),
                p = n("145131"),
                I = n("782340"),
                h = n("523192");
            (i = r || (r = {})).DEFAULT = "DEFAULT", i.RECORDING = "RECORDING";
            let A = {
                DEFAULT: h.default,
                RECORDING: h.recording
            };
            class R extends o.PureComponent {
                componentWillUnmount() {
                    null != this._unregisterNativeRecorder && this._unregisterNativeRecorder()
                }
                componentDidUpdate(e) {
                    let {
                        mode: t
                    } = this.props, {
                        mode: n
                    } = e;
                    if (n === t) return;
                    let {
                        _inputRef: r
                    } = this;
                    if (null == r.current) return;
                    let {
                        activeElement: i
                    } = document;
                    "DEFAULT" === t && r.current === i && r.current.blur(), "RECORDING" === t && r.current !== i && r.current.focus()
                }
                render() {
                    let e;
                    let {
                        mode: t,
                        value: n,
                        disabled: r
                    } = this.props, i = (0, _.toString)(n, !0);
                    e = "RECORDING" === t ? I.default.Messages.SHORTCUT_RECORDER_BUTTON_RECORDING : 0 === n.length ? I.default.Messages.SHORTCUT_RECORDER_BUTTON : I.default.Messages.SHORTCUT_RECORDER_BUTTON_EDIT;
                    let o = "DEFAULT" === t && n.length > 0;
                    return (0, s.jsx)(f.FocusRing, {
                        focusTarget: this._inputRef,
                        ringTarget: this._containerRef,
                        children: (0, s.jsx)("div", {
                            onClick: this.handleClick,
                            onMouseDown: this.handleMouseDown,
                            ref: this._containerRef,
                            className: a(h.container, A[t], {
                                [h.hasValue]: o,
                                [h.disabled]: r
                            }),
                            children: (0, s.jsxs)(p.default, {
                                className: h.layout,
                                children: [(0, s.jsx)(p.default.Child, {
                                    className: h.input,
                                    children: (0, s.jsx)("input", {
                                        id: this._inputId,
                                        placeholder: I.default.Messages.SHORTCUT_RECORDER_NO_BIND,
                                        type: "text",
                                        ref: this.setInputRef,
                                        readOnly: !0,
                                        value: i,
                                        disabled: "RECORDING" !== this.props.mode || r
                                    })
                                }), (0, s.jsx)(p.default, {
                                    shrink: 1,
                                    grow: 0,
                                    style: {
                                        margin: 0
                                    },
                                    children: (0, s.jsxs)(f.Button, {
                                        className: h.button,
                                        disabled: r,
                                        onClick: e => {
                                            e.stopPropagation(), e.preventDefault(), this.handleClick(e)
                                        },
                                        size: f.Button.Sizes.MIN,
                                        color: f.ButtonColors.PRIMARY,
                                        children: [(0, s.jsx)("span", {
                                            className: h.text,
                                            children: e
                                        }), (0, s.jsx)("span", {
                                            className: h.editIcon
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._inputId = E.uniqueId("key-recorder-"), this._unregisterNativeRecorder = null, this._mousedownMode = null, this._inputRef = o.createRef(), this._containerRef = o.createRef(), this.setInputRef = e => {
                        var t;
                        let {
                            registerNativeRecorder: n,
                            onChange: r
                        } = this.props;
                        if (this._inputRef.current = e, null === (t = this._unregisterNativeRecorder) || void 0 === t || t.call(this), null != e) {
                            if (null != n && null != r) this._unregisterNativeRecorder = n(e.id, r);
                            else if (null != r) {
                                let t = new d(e);
                                t.handleKey = r
                            }
                        }
                    }, this.handleClick = e => {
                        e.stopPropagation(), e.preventDefault();
                        let {
                            onClick: t,
                            disableOnClickWhileRecording: n
                        } = this.props;
                        (!n || "RECORDING" !== this._mousedownMode) && t()
                    }, this.handleMouseDown = () => {
                        this._mousedownMode = this.props.mode
                    }
                }
            }
            var g = R
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("505088"),
                o = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: s,
                        backgroundColor: l,
                        ...a
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != l ? (0, r.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: l
                        }) : null, (0, r.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, s.CircleXIcon, void 0, {
                    size: 24
                })
        },
        68238: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("225389"),
                o = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: s,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 12 12",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: s,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, s.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("276825"),
                o = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, r.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: i
                        })
                    })
                }, s.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return s
                }
            });
            var r = n("917351"),
                i = n.n(r);
            let s = e => "function" == typeof e ? e() : e;
            i.curry((e, t, n) => s(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let r, i;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var s = n("697218"),
                o = n("615931");
            let l = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                r = e.showModal, l = e.updateModalProps, i = n("551042").closeModal
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
                if (null == r) {
                    null == a || a();
                    return
                }
                let d = r(_, c, o);

                function c() {
                    null == a || a()
                }

                function E(e) {
                    i(d), n(e)
                }

                function f(e) {
                    i(d), s(e)
                }

                function _(e) {
                    return l(d, _, c, {
                        ...o,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: f,
                        code: e,
                        mfaCodeHandler: p,
                        isModalOpen: !0
                    })
                }

                function p(e) {
                    let {
                        res: t
                    } = e;
                    l(d, _, c, {
                        ...o,
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
                    mfaCodeHandler: s = a,
                    isModalOpen: o = !1,
                    ...l
                } = e;
                return t(null != i ? {
                    code: i
                } : {}).then(n, e => {
                    var i, a;
                    if (i = e, a = o, i.body && 60008 === i.body.code || a && 429 === i.status) return s({
                        promiseFn: t,
                        resolve: n,
                        reject: r,
                        res: e,
                        ...l
                    });
                    r(e)
                })
            }

            function d(e, t) {
                var n, r;
                let {
                    checkEnabled: i = null !== (r = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== r && r,
                    ...l
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, o.resolveThunk)(i) ? a : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...l
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
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("872717"),
                i = n("599110");

            function s(e, t, n) {
                let {
                    trackedActionData: r,
                    ...s
                } = t, o = {
                    url: s.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(s).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...o,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, s;
                        let l = r.properties;
                        "function" == typeof r.properties && (l = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (s = e.body) || void 0 === s ? void 0 : s.message,
                            ...o,
                            ...l
                        }), n(e)
                    })
                })
            }
            var o = {
                get: function(e) {
                    return s(r.default.get, e, "get")
                },
                post: function(e) {
                    return s(r.default.post, e, "post")
                },
                put: function(e) {
                    return s(r.default.put, e, "put")
                },
                patch: function(e) {
                    return s(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return s(r.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return l
                },
                updateModalProps: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                s = n("920636");
            let o = (e, t, n) => function(i) {
                return (0, r.jsx)(s.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...i
                })
            };

            function l(e, t, n) {
                return (0, i.openModal)(o(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, r) {
                return (0, i.updateModal)(e, o(t, n, r))
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
                    return s
                }
            }), n("222007"), (i = r || (r = {})).STABLE = "stable", i.BETA = "beta", i.ALPHA = "alpha", i.PTB = "ptb", i.CANARY = "canary", i.STAGING = "staging", i.DEVELOPMENT = "development";
            let s = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);