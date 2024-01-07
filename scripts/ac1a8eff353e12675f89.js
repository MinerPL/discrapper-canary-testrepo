(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82374"], {
        582247: function(t, e, n) {
            "use strict";
            n("70102"), n("854508"), n("781738"), Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n("884691")),
                s = n("315401"),
                Gamepad = function(t) {
                    function Gamepad(t, e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, Gamepad);
                        var n = function(t, e) {
                            if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e && ("object" == typeof e || "function" == typeof e) ? e : t
                        }(this, (Gamepad.__proto__ || Object.getPrototypeOf(Gamepad)).call(this, t, e));
                        return n.padState = {
                            connected: !1,
                            buttons: {
                                A: !1,
                                B: !1,
                                X: !1,
                                Y: !1,
                                LB: !1,
                                LT: !1,
                                LS: !1,
                                RB: !1,
                                RT: !1,
                                RS: !1,
                                Start: !1,
                                Back: !1,
                                DPadUp: !1,
                                DPadRight: !1,
                                DPadDown: !1,
                                DPadLeft: !1
                            },
                            axis: {
                                LeftStickX: 0,
                                LeftStickY: 0,
                                RightStickX: 0,
                                RightStickY: 0,
                                RightTrigger: 0,
                                LeftTrigger: 0
                            }
                        }, n
                    }
                    return ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(Gamepad, t), o(Gamepad, [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0, window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }, {
                        key: "updateGamepad",
                        value: function() {
                            if (this.mounted) {
                                var t = this.props.gamepadIndex,
                                    e = navigator.getGamepads();
                                if (e.length && e.length > t && e[t]) {
                                    var n = e[t];
                                    !this.padState.connected && (this.padState.connected = !0, this.props.onConnect(t)), this.updateAllButtons(n), this.updateAllAxis(n)
                                } else this.padState.connected && (this.padState.connected = !1, this.props.onDisconnect(t));
                                window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
                            }
                        }
                    }, {
                        key: "updateAllButtons",
                        value: function(t) {
                            for (var e = 0; e < t.buttons.length; ++e) {
                                var n = t.buttons[e].pressed,
                                    o = t.buttons[e].value,
                                    i = this.buttonIndexToButtonName(e);
                                this.updateButton(i, n);
                                var s = this.buttonIndexToAxisName(e);
                                this.updateAxis(s, o)
                            }
                        }
                    }, {
                        key: "updateButton",
                        value: function(t, e) {
                            void 0 === this.padState.buttons[t] ? console.error("Unknown button " + t) : this.padState.buttons[t] !== e && (this.padState.buttons[t] = e, this.props.onButtonChange(t, e), this.props["onButton" + (e ? "Down" : "Up")](t), e && this.props["on" + t.replace("DPad", "")]())
                        }
                    }, {
                        key: "updateAllAxis",
                        value: function(t) {
                            for (var e = 0; e < t.axes.length; ++e) {
                                var n = this.axisIndexToAxisName(e);
                                t.axes[e], this.updateAxis(n, t.axes[e])
                            }
                        }
                    }, {
                        key: "updateAxis",
                        value: function(t, e) {
                            if (t && null != e) {
                                var n = "-" === t[0],
                                    o = e * (n ? -1 : 1);
                                if (Math.abs(o) < this.props.deadZone && (o = 0), n && (t = t.substr(1)), this.padState.axis[t] !== o) {
                                    var i = this.padState.axis[t];
                                    this.padState.axis[t] = o, this.props.onAxisChange(t, o, i), "LeftStickX" === t && (i <= this.props.stickThreshold && o > this.props.stickThreshold && this.props.onRight(), i >= -this.props.stickThreshold && o < -this.props.stickThreshold && this.props.onLeft()), "LeftStickY" === t && (i <= this.props.stickThreshold && o > this.props.stickThreshold && this.props.onUp(), i >= -this.props.stickThreshold && o < -this.props.stickThreshold && this.props.onDown())
                                }
                            }
                        }
                    }, {
                        key: "buttonIndexToButtonName",
                        value: function(t) {
                            var e = this.props.layout;
                            return e.buttons && e.buttons.length >= t + 1 ? e.buttons[t] : null
                        }
                    }, {
                        key: "buttonIndexToAxisName",
                        value: function(t) {
                            var e = this.props.layout;
                            return e.buttonAxis && e.buttonAxis.length >= t + 1 ? e.buttonAxis[t] : null
                        }
                    }, {
                        key: "axisIndexToAxisName",
                        value: function(t) {
                            var e = this.props.layout;
                            return e.axis && e.axis.length >= t + 1 ? e.axis[t] : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return i.default.Children.only(this.props.children)
                        }
                    }]), Gamepad
                }(i.default.Component);
            Gamepad.defaultProps = {
                layout: s.XBOX,
                stickThreshold: .5,
                deadZone: .08,
                gamepadIndex: 0,
                onConnect: function() {},
                onDisconnect: function() {},
                onButtonDown: function() {},
                onButtonUp: function() {},
                onButtonChange: function() {},
                onAxisChange: function() {},
                onA: function() {},
                onB: function() {},
                onX: function() {},
                onY: function() {},
                onStart: function() {},
                onBack: function() {},
                onLT: function() {},
                onRT: function() {},
                onLB: function() {},
                onRB: function() {},
                onLS: function() {},
                onRS: function() {},
                onUp: function() {},
                onDown: function() {},
                onLeft: function() {},
                onRight: function() {}
            }, e.default = Gamepad
        },
        464934: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.layouts = e.Gamepad = void 0;
            var o = s(n("582247")),
                i = s(n("315401"));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            o.default.layouts = i.default, e.Gamepad = o.default, e.layouts = i.default, e.default = o.default
        },
        490780: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = {
                buttons: ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "Back", "Start", "LS", "RS", "DPadUp", "DPadDown", "DPadLeft", "DPadRight"],
                axis: ["LeftStickX", "-LeftStickY", "RightStickX", "-RightStickY"],
                buttonAxis: [null, null, null, null, null, null, "LeftTrigger", "RightTrigger"]
            }
        },
        315401: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.XBOX = void 0;
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n("490780"));
            e.XBOX = o.default, e.default = {
                XBOX: o.default
            }
        },
        265369: function(t, e, n) {
            "use strict";
            t.exports = n.p + "99c9ca7d01d903b18cad.svg"
        },
        799557: function(t, e, n) {
            "use strict";
            t.exports = n.p + "dfcd6ac84e97da5203b5.png"
        },
        992629: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            }), n("222007");
            var o = n("37983"),
                i = n("884691"),
                s = n("464934"),
                a = n("669491"),
                r = n("77078"),
                u = n("958638"),
                l = n("44930"),
                c = n("140014");
            let d = {
                A: {
                    Icon: u.default,
                    color: a.default.unsafe_rawColors.PRIMARY_400.css
                },
                B: {
                    Icon: l.default,
                    color: a.default.unsafe_rawColors.RED_360.css
                }
            };
            class GamepadButton extends i.Component {
                render() {
                    let {
                        type: t,
                        text: e,
                        style: n,
                        onClick: i
                    } = this.props, s = t.Icon;
                    return (0, o.jsxs)(r.Clickable, {
                        className: c.gamepadButtonContainer,
                        style: null != i ? {
                            cursor: "pointer"
                        } : void 0,
                        onClick: i,
                        children: [(0, o.jsx)(s, {
                            className: n,
                            color: t.color,
                            backgroundColor: a.default.unsafe_rawColors.PRIMARY_600.css
                        }), (0, o.jsx)("div", {
                            className: c.gamepadButtonText,
                            children: e
                        })]
                    })
                }
            }
            GamepadButton.A = d.A, GamepadButton.B = d.B;
            class Gamepad extends i.PureComponent {
                render() {
                    let {
                        onAPressed: t,
                        onBPressed: e,
                        children: n
                    } = this.props;
                    if (null == n) return null;
                    let a = i.cloneElement(i.Children.only(n), {
                        hasGamepad: this.state.gamepadConnected
                    });
                    return (0, o.jsx)(s.default, {
                        onA: t,
                        onB: e,
                        onConnect: this.setGamepadConnected,
                        onDisconnect: this.setGamepadDisconnected,
                        children: a
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        gamepadConnected: !1
                    }, this.setGamepadConnected = () => {
                        this.setState({
                            gamepadConnected: !0
                        })
                    }, this.setGamepadDisconnected = () => {
                        this.setState({
                            gamepadConnected: !1
                        })
                    }
                }
            }
            Gamepad.Button = GamepadButton;
            var f = Gamepad
        },
        923107: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M20.84 21.32a.5.5 0 0 1-.46.68h-1.52a1 1 0 0 1-.94-.66l-1.55-4.28H7.63l-1.56 4.28a1 1 0 0 1-.94.66H3.62a.5.5 0 0 1-.47-.68l7.09-18.6a1 1 0 0 1 .93-.64h1.63a1 1 0 0 1 .93.65l7.11 18.6ZM11.98 5.1l-3.43 9.43h6.87L11.98 5.1Z",
                        className: r
                    })
                })
            }
        },
        993469: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M6.46 22a1 1 0 0 1-1-1V3.08a1 1 0 0 1 1-1h7.05c1.58 0 2.84.47 3.78 1.39a4.9 4.9 0 0 1 1.42 3.67 4.7 4.7 0 0 1-.81 2.85 4.64 4.64 0 0 1-2.02 1.59c2.46.62 3.7 2.25 3.7 4.9 0 1.9-.56 3.29-1.65 4.2-1.1.88-2.65 1.32-4.65 1.32H6.46Zm6.16-11.43a3.8 3.8 0 0 0 2.5-.75c.6-.5.9-1.26.9-2.28 0-1.02-.3-1.78-.9-2.28a3.7 3.7 0 0 0-2.5-.78H8.17v6.09h4.45Zm.6 9.03c1.12 0 2-.27 2.63-.8.65-.56.98-1.4.98-2.52 0-1.11-.33-1.94-.98-2.48a3.93 3.93 0 0 0-2.63-.8H8.17v6.6h5.05Z",
                        className: r
                    })
                })
            }
        },
        779807: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WarningIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M10 3.1a2.37 2.37 0 0 1 4 0l8.71 14.75c.84 1.41-.26 3.15-2 3.15H3.29c-1.74 0-2.84-1.74-2-3.15L9.99 3.1Zm3.25 14.65a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.06 14l.37-5.94a1 1 0 0 0-1-1.06h-.87a1 1 0 0 0-1 1.06l.38 5.94a1.06 1.06 0 0 0 2.12 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        364719: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("779807"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, o.jsx)("path", {
                                className: s,
                                fill: i,
                                d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z"
                            })
                        })
                    })
                }, s.WarningIcon, void 0, {
                    size: 16
                })
        },
        958638: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("923107"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 30,
                        height: n = 30,
                        color: i = "currentColor",
                        foreground: s,
                        background: r,
                        backgroundColor: u,
                        ...l
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 30 30",
                        children: (0, o.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, o.jsx)("circle", {
                                cx: "15",
                                cy: "15",
                                r: "15",
                                fill: u,
                                className: r
                            }), (0, o.jsx)("path", {
                                d: "M22.1001 22H19.3946L18.2136 18.6522H11.9866L10.8056 22H8.1001L13.7259 7H16.4743L22.1001 22ZM15.1001 9.76087L12.8026 16.3261H17.3976L15.1001 9.76087Z",
                                fill: i,
                                className: s
                            })]
                        })
                    })
                }, s.AIcon, void 0, {
                    size: 30
                })
        },
        44930: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("993469"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 30,
                        height: n = 30,
                        color: i = "currentColor",
                        foreground: s,
                        background: r,
                        backgroundColor: u,
                        ...l
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 30 30",
                        children: (0, o.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, o.jsx)("circle", {
                                cx: "15",
                                cy: "15",
                                r: "15",
                                fill: u,
                                className: r
                            }), (0, o.jsx)("path", {
                                d: "M10.116 22.3089V7.12891H16.518C17.7206 7.12891 18.6886 7.48091 19.422 8.18491C20.17 8.88891 20.544 9.82024 20.544 10.9789C20.544 11.8882 20.3313 12.6216 19.906 13.1789C19.4953 13.7216 18.96 14.1176 18.3 14.3669C20.192 14.8216 21.138 16.0682 21.138 18.1069C21.138 19.5296 20.7126 20.5856 19.862 21.2749C19.026 21.9642 17.838 22.3089 16.298 22.3089H10.116ZM15.638 13.4209C17.2073 13.4209 17.992 12.7462 17.992 11.3969C17.992 10.7076 17.7866 10.1942 17.376 9.85691C16.9653 9.51957 16.386 9.35091 15.638 9.35091H12.668V13.4209H15.638ZM15.968 20.0869C16.76 20.0869 17.3906 19.9109 17.86 19.5589C18.344 19.2069 18.586 18.6422 18.586 17.8649C18.586 17.0876 18.344 16.5229 17.86 16.1709C17.3906 15.8189 16.76 15.6429 15.968 15.6429H12.668V20.0869H15.968Z",
                                fill: i,
                                className: s
                            })]
                        })
                    })
                }, s.BIcon, void 0, {
                    size: 30
                })
        }
    }
]);