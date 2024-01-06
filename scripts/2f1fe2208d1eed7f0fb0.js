(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73988"], {
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        584503: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55fda0412a4ff4072236.svg"
        },
        45656: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f4d8991602d4587f573e.svg"
        },
        606863: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return s
                },
                subscribeChannel: function() {
                    return a
                },
                subscribeChannelDimensions: function() {
                    return u
                }
            }), n("424973");
            var r = n("913144"),
                i = n("696605");

            function l(e, t) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function s(e, t) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t, n) {
                r.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function u(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: r,
                    height: l,
                    rowHeight: s
                } = e;

                function u(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / s)) + t)
                }
                let o = [];

                function c(e) {
                    let t = e + (i.MINIMUM_RANGE - 1);
                    return o.push([e, t]), t + 1
                }
                let d = u(.5 * l),
                    f = u(r, -d),
                    I = u(r + l, d);
                for (f > 0 && (f = Math.max(c(0), f)), f = Math.floor(f / i.MINIMUM_RANGE) * i.MINIMUM_RANGE; f <= I;) f = c(f);
                a(t, n, o)
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("446674"),
                a = n("77078"),
                u = n("102985"),
                o = n("79798"),
                c = n("754474"),
                d = n("158998"),
                f = n("782340"),
                I = n("892802");

            function _(e) {
                if (e.isSystemUser()) return c.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return c.BotTypes.AI;
                if (e.bot) return c.BotTypes.BOT;
                return null
            }
            let E = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: i,
                    botVerified: s,
                    discriminatorClass: u,
                    className: c,
                    usernameClass: d,
                    color: _,
                    botClass: E,
                    showStreamerModeTooltip: S
                } = e;
                return (0, r.jsxs)("div", {
                    className: l(I.info, c),
                    children: [(0, r.jsx)(a.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: S,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: l(I.username, d),
                            style: null != _ ? {
                                color: _
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: l(I.infoSpacing, u),
                        children: n
                    }) : void 0, null != i && (0, r.jsx)(o.default, {
                        type: i,
                        className: l(I.infoSpacing, E),
                        verified: s
                    })]
                })
            };
            var S = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: i,
                    forceUsername: l,
                    showAccountIdentifier: a,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...I
                } = e, S = (0, s.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), T = S || t || n.isNonUserBot(), N = n.toString(), p = d.default.getName(n), m = l ? N : null != i ? i : p, C = n.isPomelo() || f;
                if (C || m !== N) {
                    let e = m === N && C && l ? d.default.getUserTag(n, {
                            forcePomelo: f
                        }) : m,
                        t = a && e !== "@".concat(N) ? d.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(E, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: _(n),
                        showStreamerModeTooltip: S && e !== p,
                        ...I
                    })
                }
                return (0, r.jsx)(c.default, {
                    name: m,
                    botType: _(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: T || m !== N ? null : null != o ? o : n.discriminator,
                    ...I
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
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
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
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
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: o
                    })]
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
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
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
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
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
                        className: a
                    })
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
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
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
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
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
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: a
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
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
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
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
                    ...u
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var r = n("884691"),
                i = n("599110");
            let l = () => r.useContext(i.AnalyticsContext)
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("884691");

            function i(e, t) {
                let n = r.useRef(e);
                return r.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return a
                }
            }), n("37983");
            var r = n("884691"),
                i = n("917351"),
                l = n.n(i);
            n("233736");
            var s = n("666020");

            function a(e) {
                r.useEffect(() => (l.forEach(e, (e, t) => (0, s.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, s.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        547356: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BenefitsConfirmationLite: function() {
                    return u
                },
                PurchaseConfirmationLite: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("724038"),
                s = n("782340"),
                a = n("22019");
            let u = e => {
                let {
                    onConfirm: t,
                    onCancel: n,
                    title: u,
                    subtitle: o,
                    confirmCta: c,
                    showOpenDiscord: d = !0
                } = e;
                return (0, r.jsxs)("div", {
                    className: a.confirmationContainer,
                    children: [(0, r.jsx)(i.Heading, {
                        className: a.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: u
                    }), null != o ? (0, r.jsx)(i.Text, {
                        className: a.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: o
                    }) : null, (0, r.jsxs)("div", {
                        className: a.buttonContainer,
                        children: [d && (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
                            children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            onClick: t,
                            children: c
                        }), null != n && (0, r.jsx)(i.Button, {
                            fullWidth: !0,
                            color: i.Button.Colors.PRIMARY,
                            look: i.Button.Looks.LINK,
                            onClick: n,
                            children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CANCEL_BUTTON
                        })]
                    })]
                })
            };

            function o(e) {
                let {
                    onConfirm: t,
                    listing: n,
                    subscription: u
                } = e;
                return (0, r.jsxs)("div", {
                    className: a.confirmationContainer,
                    children: [(0, r.jsx)(i.Heading, {
                        className: a.confirmationHeader,
                        variant: "heading-lg/extrabold",
                        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
                            tier: n.name
                        })
                    }), (0, r.jsx)(i.Text, {
                        className: a.confirmationSubtitle,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
                            timestamp: null == u ? void 0 : u.currentPeriodEnd
                        })
                    }), (0, r.jsxs)("div", {
                        className: a.buttonContainer,
                        children: [(0, r.jsx)(i.Button, {
                            className: a.openDiscordButton,
                            onClick: () => (0, l.default)("application_sub_mweb_success_modal"),
                            children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
                        }), (0, r.jsx)(i.Button, {
                            className: a.doneButton,
                            look: i.Button.Looks.BLANK,
                            onClick: t,
                            children: s.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                        })]
                    })]
                })
            }
        },
        724038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("597755"),
                i = n.n(r),
                l = n("742270"),
                s = n("815157"),
                a = n("391679"),
                u = n("327037"),
                o = n("393414"),
                c = n("271938"),
                d = n("476108"),
                f = n("599110"),
                I = n("65300"),
                _ = n("49111");
            async function E(e) {
                var t, n;
                let r = null === (t = i.os) || void 0 === t ? void 0 : t.family;
                if ("Android" === r || "iOS" === r) {
                    let t = null !== (n = c.default.getFingerprint()) && void 0 !== n ? n : c.default.getId(),
                        r = (0, s.generateAttemptId)();
                    if (null == t && c.default.isAuthenticated()) try {
                        await (0, u.fetchCurrentUser)(), t = c.default.getId()
                    } catch {}
                    return (0, s.default)((0, l.getDefaultDynamicLinkTemplate)(), {
                        utmSource: e,
                        fingerprint: t,
                        attemptId: r
                    })
                }
                return "discord://"
            }
            async function S(e) {
                let t = await E(e),
                    n = (0, s.parseDynamicLink)(t);
                null != n && f.default.track(_.AnalyticEvents.DEEP_LINK_CLICKED, {
                    fingerprint: (0, a.maybeExtractId)(n.fingerprint),
                    attempt_id: n.attemptId,
                    source: n.utmSource
                }), I.default.launch(t, e => {
                    !e && (0, o.replaceWith)(d.default.fallbackRoute)
                })
            }
        },
        245187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BlockedPaymentsContentSettings: function() {
                    return m
                },
                BlockedPaymentsContentModal: function() {
                    return C
                },
                BlockedPaymentsWarning: function() {
                    return h
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("669491"),
                a = n("819855"),
                u = n("77078"),
                o = n("841098"),
                c = n("145131"),
                d = n("423487"),
                f = n("701909"),
                I = n("619935"),
                _ = n("49111"),
                E = n("782340"),
                S = n("653842"),
                T = n("584503"),
                N = n("45656");

            function p(e) {
                let {
                    className: t
                } = e, n = (0, o.default)(), i = (0, a.isThemeDark)(n) ? T : N;
                return (0, r.jsxs)("div", {
                    className: l(S.container, t),
                    children: [(0, r.jsx)(u.Heading, {
                        className: S.header,
                        variant: "heading-xl/semibold",
                        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
                    }), (0, r.jsxs)(u.Text, {
                        className: S.description,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: [(0, r.jsx)("p", {
                            children: E.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
                        }), (0, r.jsx)("p", {
                            children: E.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
                                helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
                            })
                        })]
                    }), (0, r.jsx)("img", {
                        src: i,
                        className: S.splashImage,
                        alt: "Blocked Payments"
                    })]
                })
            }

            function m() {
                return (0, r.jsx)(p, {
                    className: S.settings
                })
            }

            function C(e) {
                let {
                    onClose: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(u.ModalHeader, {
                        className: S.blockedPaymentsModalHeader,
                        justify: c.default.Justify.END,
                        children: (0, r.jsx)(u.ModalCloseButton, {
                            onClick: t
                        })
                    }), (0, r.jsx)(u.ModalContent, {
                        className: S.blockedPaymentsModalContent,
                        children: (0, r.jsx)(p, {
                            className: S.modal
                        })
                    })]
                })
            }

            function h(e) {
                let {
                    className: t
                } = e, n = (0, I.useBlockedPaymentsConfig)();
                return n ? (0, r.jsxs)(u.Card, {
                    className: l(S.blockedPaymentsWarning, t),
                    type: u.Card.Types.CUSTOM,
                    children: [(0, r.jsx)(d.default, {
                        className: S.blockedPaymentsWarningIcon,
                        color: s.default.unsafe_rawColors.YELLOW_300.css
                    }), (0, r.jsx)(u.Text, {
                        variant: "text-sm/normal",
                        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
                            helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
                        })
                    })]
                }) : null
            }
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return c
                },
                ConfettiCannonContextProvider: function() {
                    return d
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("516555"),
                s = n("65597"),
                a = n("206230"),
                u = n("49111");
            let o = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => u.NOOP,
                    removeClickListener: u.NOOP
                },
                c = i.createContext(o);

            function d(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: u,
                    baseConfig: d,
                    addClickListener: f,
                    removeClickListener: I
                } = e, _ = (0, l.useConfettiCannon)(n, u), E = (0, s.default)([a.default], () => a.default.useReducedMotion), S = i.useMemo(() => E ? o : {
                    confettiCanvas: n,
                    cannon: _,
                    createConfetti: (e, t) => _.createConfetti({
                        ...d,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, r) => _.createConfetti({
                        ...d,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, r),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        return _.createMultipleConfetti({
                            ...d,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, r, i)
                    },
                    addClickListener: f,
                    removeClickListener: I
                }, [f, d, _, n, E, I]);
                return (0, r.jsx)(c.Provider, {
                    value: S,
                    children: t
                })
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return l
                },
                COMMON_CONFETTI_COLORS: function() {
                    return s
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return a
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return u
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return o
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return c
                }
            });
            var r = n("516555"),
                i = n("839491");
            let l = i,
                s = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                a = [n("606863"), l, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                u = 28,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: u
                    }
                },
                c = new r.Environment
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("884691");
            let i = r.createContext(void 0);
            var l = i
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return d
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return _
                },
                canGuildUseRoleIcons: function() {
                    return E
                }
            }), n("781738");
            var r = n("867805"),
                i = n("407063"),
                l = n("315102"),
                s = n("773336"),
                a = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                c = (0, s.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? r.default.getByName(r.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: I(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()))),
                I = (e, t) => {
                    let {
                        id: n,
                        icon: r
                    } = e;
                    if (null == r) return;
                    if (r.startsWith("data:")) return r;
                    let s = l.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != t && (d = "size=" + (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()), f = c ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(r, ".").concat(s, "?").concat(d).concat(f) : "".concat(o).concat(a.Endpoints.ROLE_ICON(n, r), "?").concat(d)
                },
                _ = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                E = (e, t) => {
                    var n;
                    let r = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return r || e.features.has(a.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return a
                },
                setCurrentGuild: function() {
                    return u
                },
                initGuildIdentitySettings: function() {
                    return o
                },
                closeGuildIdentitySettings: function() {
                    return c
                },
                resetAndCloseGuildIdentityForm: function() {
                    return d
                },
                setPendingAvatar: function() {
                    return f
                },
                setPendingBanner: function() {
                    return I
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return E
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return T
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return m
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return h
                }
            }), n("70102");
            var r = n("872717"),
                i = n("913144"),
                l = n("54239"),
                s = n("49111");
            async function a(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await r.default.patch({
                        url: s.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), i.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), i.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function u(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function c() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function d() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function I(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function _(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function E(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function T(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function m() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function h(e) {
                i.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let r, i, l, s, a, u, o, c, d;
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var f = n("446674"),
                I = n("913144"),
                _ = n("49111");
            let E = _.FormStates.CLOSED,
                S = {},
                T = !1;

            function N() {
                E = _.FormStates.CLOSED, S = {}, o = null, c = void 0, d = []
            }

            function p() {
                m(), C(), S = {}, E = _.FormStates.OPEN
            }

            function m() {
                r = void 0, a = void 0
            }

            function C() {
                i = void 0, l = void 0, s = void 0, u = void 0
            }
            class h extends f.default.Store {
                getFormState() {
                    return E
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== r || void 0 !== i || void 0 !== l || void 0 !== s || void 0 !== a || void 0 !== u
                }
                getPendingAvatar() {
                    return r
                }
                getPendingBanner() {
                    return i
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return a
                }
                getPendingPronouns() {
                    return s
                }
                getPendingAccentColor() {
                    return a
                }
                getPendingThemeColors() {
                    return u
                }
                getAllPending() {
                    return {
                        pendingAvatar: r,
                        pendingBanner: i,
                        pendingBio: l,
                        pendingPronouns: s,
                        pendingNickname: a,
                        pendingThemeColors: u
                    }
                }
                getGuild() {
                    return o
                }
                getSource() {
                    return c
                }
                getAnalyticsLocations() {
                    return d
                }
                getIsDisableSubmit() {
                    return T
                }
            }
            h.displayName = "GuildIdentitySettingsStore";
            var P = new h(I.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    o = e.guild, E = _.FormStates.OPEN, S = {}, c = e.source, d = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    o = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    E = _.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (E !== _.FormStates.SUBMITTING) return !1;
                    E = _.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    E = _.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    u = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: m,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    T = t
                }
            })
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return s
                },
                setHotspotOverride: function() {
                    return a
                },
                clearHotspotOverride: function() {
                    return u
                }
            });
            var r = n("913144"),
                i = n("599110"),
                l = n("49111");

            function s(e) {
                i.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function a(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function u(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144"),
                l = n("197881"),
                s = n("492397");
            let a = new Set,
                u = {};
            class o extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (a = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (u = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && u[e];
                    return !(s.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !a.has(e))
                }
                hasHiddenHotspot(e) {
                    return a.has(e)
                }
                getHotspotOverride(e) {
                    return u[e]
                }
                getState() {
                    return {
                        hiddenHotspots: a,
                        hotspotOverrides: u
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new o(i.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    a = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (a.has(t)) return !1;
                    a.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    u[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == u[t]) return !1;
                    delete u[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var r = n("533613");
            n.es(r, t);
            var i = n("597517");
            n.es(i, t);
            var l = n("269596")
        },
        559362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("834897"),
                a = n("90592"),
                u = n("333955"),
                o = n("547356"),
                c = n("305961"),
                d = n("642906"),
                f = n("85336"),
                I = n("159149"),
                _ = n("650484"),
                E = n("425480"),
                S = n("782340");

            function T(e) {
                let {
                    application: t,
                    listing: n,
                    handleStepChange: T,
                    handleClose: N
                } = e, {
                    subscriptionMetadataRequest: p
                } = (0, d.usePaymentContext)(), m = (0, s.default)(E.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY), C = (0, a.isApplicationUserSubscription)(n.sku_flags), h = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(null == p ? void 0 : p.guild_id)), P = i.useCallback(() => T(f.Step.REVIEW), [T]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.PaymentPortalBody, {
                        children: m ? (0, r.jsx)(o.BenefitsConfirmationLite, {
                            confirmCta: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
                            onConfirm: P,
                            onCancel: N,
                            title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
                                guildName: null == h ? void 0 : h.name
                            }),
                            showOpenDiscord: !1
                        }) : (0, r.jsx)(u.BenefitsConfirmation, {
                            listing: n,
                            application: t,
                            title: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
                                tier: n.name
                            }),
                            subtitle: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
                            description: C ? S.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
                                applicationName: t.name
                            }) : S.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
                        })
                    }), !m && (0, r.jsx)(_.PaymentPortalFooter, {
                        children: (0, r.jsx)(I.default, {
                            onBack: N,
                            backText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
                            onPrimary: P,
                            primaryCTA: I.CTAType.CONTINUE,
                            primaryText: S.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
                        })
                    })]
                })
            }
        },
        671672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("424973");
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                s = n.n(l),
                a = n("252438"),
                u = n("834897"),
                o = n("206230"),
                c = n("90592"),
                d = n("333955"),
                f = n("547356"),
                I = n("526887"),
                _ = n("642906"),
                E = n("85336"),
                S = n("159149"),
                T = n("650484"),
                N = n("367767"),
                p = n("425480"),
                m = n("782340");

            function C(e) {
                let t, n, {
                        showBenefits: l,
                        application: C,
                        listing: h,
                        handleClose: P,
                        onSubscriptionConfirmation: L
                    } = e,
                    {
                        selectedPlan: A,
                        selectedSkuId: v,
                        step: R,
                        updatedSubscription: g,
                        readySlideId: O
                    } = (0, _.usePaymentContext)();
                s(null != A, "Expected plan to selected"), s(null != v, "Expected selectedSkuId"), s(null != R, "Step should be set");
                let M = (0, u.default)(p.RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY),
                    {
                        createMultipleConfettiAt: U
                    } = i.useContext(I.ConfettiCannonContext),
                    x = () => {
                        P(), null == L || L()
                    },
                    D = O === E.Step.CONFIRM,
                    y = (0, c.isApplicationUserSubscription)(h.sku_flags),
                    B = i.useMemo(() => {
                        let e = 0,
                            t = 0;
                        for (let n of h.sku_benefits.benefits) n.ref_type === a.SKUBenefitTypes.APPLICATION_PREMIUM_COMMAND ? e += 1 : n.ref_type === a.SKUBenefitTypes.INTANGIBLE && (t += 1);
                        let n = [];
                        return 0 !== e && n.push(m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_EXCLUSIVE_CHANNELS_SUBTITLE.format({
                            commandCount: e
                        })), 0 !== t && n.push(m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
                            benefitCount: t
                        })), n
                    }, [h]);
                return l ? M ? t = (0, r.jsx)(f.BenefitsConfirmationLite, {
                    title: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
                        tierName: h.name
                    }),
                    subtitle: B.length > 0 ? m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
                        benefits: new Intl.ListFormat(m.default.getLocale()).format(B)
                    }) : null,
                    onConfirm: x,
                    confirmCta: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
                }) : (t = (0, r.jsx)(d.BenefitsConfirmation, {
                    listing: h,
                    application: C,
                    title: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
                        tier: h.name
                    }),
                    subtitle: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
                    description: y ? m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                        applicationName: null == C ? void 0 : C.name
                    }) : m.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
                        tier: h.name
                    })
                }), n = (0, r.jsx)(S.default, {
                    onPrimary: x,
                    primaryCTA: S.CTAType.CONTINUE,
                    primaryText: m.default.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
                })) : t = M ? (0, r.jsx)(f.PurchaseConfirmationLite, {
                    listing: h,
                    onConfirm: x,
                    subscription: g
                }) : (0, r.jsx)(d.PurchaseConfirmation, {
                    listing: h,
                    onConfirm: x,
                    subscription: g
                }), i.useEffect(() => {
                    o.default.useReducedMotion && D && U(window.innerWidth / 2, window.innerHeight / 2)
                }, [U, D]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(T.PaymentPortalBody, {
                        children: [(0, r.jsx)(N.default, {}), t]
                    }), null != n && (0, r.jsx)(T.PaymentPortalFooter, {
                        children: n
                    })]
                })
            }
        },
        590749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getApplicationSubscriptionPaymentSteps: function() {
                    return I
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("85336"),
                l = n("262683"),
                s = n("946359"),
                a = n("724269"),
                u = n("559362"),
                o = n("671672"),
                c = n("101432"),
                d = n("458985"),
                f = n("782340");

            function I(e) {
                let {
                    guildId: t,
                    eligibleApplicationSubscriptionGuilds: n,
                    application: I,
                    listing: _,
                    showBenefitsFirst: E
                } = e, S = [{
                    key: null,
                    renderStep: e => (0, r.jsx)(c.default, {
                        initialStep: E ? i.Step.BENEFITS : i.Step.REVIEW,
                        guildId: t,
                        ...e
                    })
                }, {
                    key: i.Step.BENEFITS,
                    renderStep: e => (0, r.jsx)(u.default, {
                        application: I,
                        listing: _,
                        ...e
                    }),
                    options: {
                        useBreadcrumbLabel: () => f.default.Messages.APPLICATION_SUBSCRIPTION_BILLING_STEP_SUBSCRIPTION_DETAILS
                    }
                }, {
                    key: i.Step.ADD_PAYMENT_STEPS,
                    renderStep: e => (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(l.PaymentModalAddPaymentStep, {
                            ...e,
                            breadcrumbSteps: [i.Step.ADD_PAYMENT_STEPS, i.Step.REVIEW, i.Step.CONFIRM]
                        })
                    }),
                    options: {
                        renderHeader: !0
                    }
                }, {
                    key: i.Step.AWAITING_PURCHASE_TOKEN_AUTH,
                    renderStep: () => (0, r.jsx)(a.default, {})
                }, {
                    key: i.Step.AWAITING_AUTHENTICATION,
                    renderStep: () => (0, r.jsx)(s.default, {})
                }, {
                    key: i.Step.REVIEW,
                    renderStep: e => (0, r.jsx)(d.default, {
                        application: I,
                        backButtonEligible: !!E || void 0,
                        prevStep: E ? i.Step.BENEFITS : void 0,
                        listing: _,
                        showGuildPicker: null == t,
                        eligibleApplicationSubscriptionGuilds: n,
                        ...e
                    }),
                    options: {
                        renderHeader: !0,
                        useBreadcrumbLabel: () => f.default.Messages.BILLING_STEP_REVIEW
                    }
                }, {
                    key: i.Step.CONFIRM,
                    renderStep: e => (0, r.jsx)(o.default, {
                        application: I,
                        listing: _,
                        showBenefits: !E,
                        ...e
                    })
                }];
                return S
            }
        },
        101432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("245187"),
                s = n("10514"),
                a = n("599110"),
                u = n("719923"),
                o = n("635357"),
                c = n("642906"),
                d = n("628738"),
                f = n("49111");

            function I(e) {
                let {
                    initialStep: t,
                    initialPlanId: n,
                    guildId: I,
                    setAnalyticsData: _,
                    handleClose: E
                } = e, {
                    blockedPayments: S,
                    setStep: T,
                    hasFetchedSubscriptions: N,
                    hasFetchedSubscriptionPlans: p,
                    currencyLoading: m,
                    selectedSkuId: C,
                    setSelectedSkuId: h,
                    setSelectedPlanId: P,
                    priceOptions: L,
                    setSubscriptionMetadataRequest: A
                } = (0, c.usePaymentContext)(), {
                    isGift: v
                } = (0, o.useGiftContext)(), [R, g] = i.useState(!N || !p || m);
                return (i.useEffect(() => {
                    g(!N || !p || m)
                }, [m, p, N]), i.useEffect(() => {
                    null != I && A({
                        guild_id: I
                    })
                }, [I, A]), i.useEffect(() => {
                    P(n);
                    let e = null != n ? s.default.get(n) : null;
                    !R && !S && (_(t => {
                        let n = null != e ? (0, u.getPrice)(e.id, !1, v, L) : void 0,
                            r = {
                                ...t,
                                subscription_plan_id: null == e ? void 0 : e.id,
                                price: null == n ? void 0 : n.amount,
                                regular_price: null == e ? void 0 : e.price,
                                currency: L.currency
                            };
                        return a.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, r), r
                    }), null != e && (h(null == e ? void 0 : e.skuId), T(t)))
                }, [S, n, v, R, L, C, _, P, h, T, t]), R) ? (0, r.jsx)(d.default, {}) : S ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
                    onClose: E
                }) : null
            }
        },
        458985: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("627445"),
                s = n.n(l),
                a = n("77078"),
                u = n("612039"),
                o = n("90592"),
                c = n("527866"),
                d = n("642906"),
                f = n("85336"),
                I = n("286350"),
                _ = n("153727"),
                E = n("39065"),
                S = n("628738"),
                T = n("650484"),
                N = n("367767"),
                p = n("215774"),
                m = n("782340"),
                C = n("945598");

            function h(e) {
                let {
                    application: t,
                    backButtonEligible: n,
                    prevStep: l,
                    showGuildPicker: h,
                    handleStepChange: P,
                    trialFooterMessageOverride: L,
                    reviewWarningMessage: A,
                    planGroup: v,
                    openInvoiceId: R,
                    analyticsData: g,
                    analyticsLocation: O,
                    eligibleApplicationSubscriptionGuilds: M,
                    listing: U,
                    handleClose: x
                } = e, {
                    activeSubscription: D,
                    setUpdatedSubscription: y,
                    contextMetadata: B,
                    currencies: G,
                    paymentSources: b,
                    priceOptions: H,
                    purchaseError: F,
                    purchaseTokenAuthState: j,
                    selectedPlan: w,
                    setCurrency: V,
                    setPaymentSourceId: k,
                    setPurchaseState: Y,
                    setPurchaseError: K,
                    step: Z,
                    purchaseState: z,
                    subscriptionMetadataRequest: W,
                    setSubscriptionMetadataRequest: X,
                    setHasAcceptedTerms: q
                } = (0, d.usePaymentContext)();
                s(null != w, "Expected plan to be selected"), s(null != Z, "Step should be set");
                let Q = i.useRef(null),
                    [J, $] = (0, u.default)(!1, 500),
                    [ee, et] = i.useState(null == W ? void 0 : W.guild_id),
                    en = (0, o.isApplicationUserSubscription)(U.sku_flags);
                i.useEffect(() => {
                    null != F && null != Q.current && Q.current.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [F]);
                let er = i.useCallback(e => {
                        y(e), P(f.Step.CONFIRM)
                    }, [P, y]),
                    ei = i.useCallback(e => {
                        et(e), X({
                            ...W,
                            guild_id: e
                        })
                    }, [et, X, W]),
                    el = i.useRef(null);
                return z === I.PurchaseState.PURCHASING ? (0, r.jsx)(S.default, {}) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(_.default, {
                        className: C.breadcrumbs
                    }), (0, r.jsxs)(T.PaymentPortalBody, {
                        children: [(0, r.jsx)(N.default, {}), en && (0, r.jsxs)("div", {
                            className: C.userSubscriptionDetailsContainer,
                            children: [(0, r.jsx)(a.Text, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
                            }), (0, r.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                color: "interactive-normal",
                                children: m.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
                                    applicationName: t.name
                                })
                            })]
                        }), h && !en && (0, r.jsxs)("div", {
                            className: C.guildPickerContainer,
                            children: [(0, r.jsx)(a.FormTitle, {
                                tag: a.FormTitleTags.H5,
                                children: m.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
                            }), (0, r.jsx)(a.FormText, {
                                type: a.FormText.Types.DESCRIPTION,
                                className: C.guildPickerDescription,
                                children: m.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
                            }), (0, r.jsx)(p.GuildPickerDropdown, {
                                selectedGuildId: ee,
                                onGuildChange: ei,
                                eligibleApplicationSubscriptionGuilds: M
                            })]
                        }), (0, r.jsx)(c.default, {
                            selectedPlanId: w.id,
                            paymentSources: b,
                            onPaymentSourceChange: e => k(null != e ? e.id : null),
                            priceOptions: H,
                            currencies: G,
                            onCurrencyChange: e => V(e),
                            handlePaymentSourceAdd: () => P(f.Step.ADD_PAYMENT_STEPS),
                            setHasAcceptedTerms: q,
                            legalTermsNodeRef: el,
                            hasLegalTermsFlash: J,
                            trialFooterMessageOverride: L,
                            reviewWarningMessage: A,
                            metadata: h || en ? void 0 : W,
                            purchaseState: z,
                            hideSubscriptionDetails: !0,
                            handleClose: x
                        })]
                    }), (0, r.jsx)(T.PaymentPortalFooter, {
                        children: (0, r.jsx)(E.default, {
                            premiumSubscription: null != D ? D : null,
                            setPurchaseState: Y,
                            onBack: () => null != l && P(l),
                            onNext: er,
                            onPurchaseError: e => K(e),
                            legalTermsNodeRef: el,
                            flashLegalTerms: () => $(!0),
                            analyticsLocation: O,
                            baseAnalyticsData: g,
                            flowStartTime: B.startTime,
                            planGroup: v,
                            purchaseTokenAuthState: j,
                            openInvoiceId: R,
                            metadata: en ? void 0 : W,
                            backButtonEligible: n,
                            invoiceError: null,
                            disablePurchase: (null == W ? void 0 : W.guild_id) == null && !en
                        })
                    })]
                })
            }
        },
        215774: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildPickerDropdown: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("782340"),
                s = n("336859");

            function a(e) {
                let {
                    selectedGuildId: t,
                    onGuildChange: n,
                    eligibleApplicationSubscriptionGuilds: a
                } = e, u = a.map(e => ({
                    value: e.id,
                    label: e.name
                }));
                return (0, r.jsx)(i.SearchableSelect, {
                    className: s.select,
                    maxVisibleItems: 5,
                    value: t,
                    placeholder: l.default.Messages.APPLICATION_SUBSCRIPTION_GUILD_PICKER_PLACEHOLDER,
                    options: u,
                    onChange: e => {
                        n(e)
                    }
                })
            }
        },
        628738: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("77078"),
                l = n("840339");

            function s() {
                return (0, r.jsx)(i.Spinner, {
                    className: l.spinner
                })
            }
        },
        176108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                inOneStepSubscriptionCheckout: function() {
                    return l
                },
                planSwitchLoadingShowSpinner: function() {
                    return s
                },
                getDefaultPlanOneStepCheckout: function() {
                    return a
                }
            });
            var r = n("719923"),
                i = n("646718");

            function l(e) {
                let {
                    isTrial: t,
                    isGift: n,
                    selectedSkuId: r,
                    startedPaymentFlowWithPaymentSources: l
                } = e;
                return !t && !n && null != r && i.ACTIVE_PREMIUM_SKUS.includes(r) && l
            }

            function s(e, t, n) {
                let r = !1;
                if (e && null != t) {
                    let e = t.invoiceItems.find(e => e.subscriptionPlanId === n.id);
                    null == e && (r = !0)
                }
                return r
            }

            function a(e, t, n) {
                let l = null != t ? (0, r.getPremiumPlanItem)(t) : null,
                    s = i.PREMIUM_SKU_TO_YEARLY_PLAN[e],
                    a = null != n ? n : s;
                return null != l ? a === l.planId && a === i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] ? a = i.PREMIUM_SKU_TO_YEARLY_PLAN[e] : a === l.planId && a === i.PREMIUM_SKU_TO_YEARLY_PLAN[e] ? a = i.PREMIUM_SKU_TO_MONTHLY_PLAN[e] : (l.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_0 || l.planId === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1) && a === i.SubscriptionPlans.PREMIUM_MONTH_TIER_2 && (a = i.SubscriptionPlans.PREMIUM_YEAR_TIER_2) : a === i.SubscriptionPlans.PREMIUM_YEAR_TIER_1 && (a = i.SubscriptionPlans.PREMIUM_MONTH_TIER_1), a
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("65597"),
                l = n("880731");

            function s(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, s = (0, i.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return s ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                i = n("65597"),
                l = n("526887"),
                s = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = r.useContext(l.ConfettiCannonContext), t = (0, i.default)([s.default], () => s.default.getState()), n = r.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = r.useMemo(() => ({
                    fire: (r, i, l) => {
                        var s, a;
                        let u = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            o = n(u);
                        e(r, i, o, (null !== (s = null == l ? void 0 : l.count) && void 0 !== s ? s : u.confettiCount) * (null !== (a = null == l ? void 0 : l.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return a
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return _
                },
                maybeFetchPremiumLikelihood: function() {
                    return S
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return T
                }
            });
            var r = n("884691"),
                i = n("65597"),
                l = n("872717"),
                s = n("913144"),
                a = n("775433"),
                u = n("697218"),
                o = n("10514"),
                c = n("764364"),
                d = n("676572"),
                f = n("646718"),
                I = n("49111");
            let _ = "nonSubscriber";
            async function E() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: I.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [_]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = d.default.shouldFetchPremiumLikelihood(), i = u.default.getCurrentUser();
                N(i, r, t, n)
            }

            function T(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, i.default)([d.default], () => d.default.shouldFetchPremiumLikelihood()), s = (0, i.default)([u.default], () => u.default.getCurrentUser());
                r.useEffect(() => {
                    N(s, l, t, n)
                }, [s, l, t, n])
            }

            function N(e, t, n, r) {
                null != e && !(0, c.isPremium)(e) && n && (t && E(), r && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("446674"),
                i = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = l;
            class a extends r.default.Store {
                initialize() {
                    s = l
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var u = new a(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = i
        },
        65324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                i = n("884691"),
                l = n("446674"),
                s = n("206230"),
                a = n("491605"),
                u = n("210721"),
                o = n("78345");

            function c(e) {
                let {
                    giftStyle: t,
                    className: n,
                    shouldAnimate: c = !0,
                    defaultAnimationState: d,
                    idleAnimationState: f
                } = e, I = (0, l.useStateFromStores)([s.default], () => s.default.useReducedMotion), [_, E] = i.useState(d), S = i.useRef((0, u.getGiftAnimationData)(t, _)), [T, N] = i.useState(null == f), [p, m] = i.useState(!1), [C, h] = i.useState(-1), P = () => {
                    S.current = (0, u.getGiftAnimationData)(t, _), h(e => e + 1)
                }, L = () => {
                    N(!1), m(!0), h(-1), E(d)
                };
                i.useEffect(() => {
                    null == f && E(d)
                }, [f, d]), i.useEffect(() => {
                    if (null != f && C >= 0) {
                        L();
                        return
                    }
                    P()
                }, [t, f]), i.useEffect(() => {
                    (!p || null == f) && P()
                }, [_]), i.useEffect(() => {
                    p && (N(null == f), m(!1), P())
                }, [p]);
                if (!o.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, r.jsx)(a.default, {
                    importData: S.current,
                    shouldAnimate: !I && c,
                    className: n,
                    versionKey: C,
                    onComplete: null != f ? () => {
                        null != f && (E(f), N(!0))
                    } : void 0,
                    loop: T
                })
            }
        },
        661128: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUnsupportedExternalSubscriptionModalHandler: function() {
                    return d
                },
                useSubscriptionEntitlements: function() {
                    return I
                }
            });
            var r = n("884691"),
                i = n("446674"),
                l = n("404118"),
                s = n("10514"),
                a = n("437712"),
                u = n("719923"),
                o = n("843455"),
                c = n("782340");

            function d(e, t, n) {
                r.useEffect(() => {
                    null != e && e.isPurchasedExternally && null != e.paymentGateway && !n && (l.default.show({
                        title: c.default.Messages.BILLING_EXTERNAL_HEADER.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway]
                        }),
                        body: c.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                            paymentGatewayName: o.PaymentGatewayToFriendlyName[e.paymentGateway],
                            subscriptionManagementLink: (0, u.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
                        }),
                        confirmText: c.default.Messages.OKAY
                    }), t())
                }, [e])
            }
            let f = [];

            function I(e, t) {
                let n = (0, i.useStateFromStores)([s.default], () => null != e ? s.default.get(e) : null),
                    l = (0, i.useStateFromStores)([a.default], () => {
                        var e;
                        return null != n && null !== (e = a.default.getForSku(n.skuId)) && void 0 !== e ? e : f
                    }),
                    o = r.useMemo(() => Array.from(l).filter(e => {
                        let {
                            parentId: t,
                            consumed: n
                        } = e;
                        return null != t && !n
                    }), [l]),
                    c = !t && null != n && null != o && o.length >= u.default.getIntervalMonths(n.interval, n.intervalCount);
                return {
                    hasEntitlements: c,
                    entitlements: o
                }
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("884691"),
                i = n("79112"),
                l = n("685665"),
                s = n("929423");
            n("424562");
            var a = n("49111"),
                u = n("397336");

            function o(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: o,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: f
                } = (0, l.default)(), I = (0, r.useCallback)(() => {
                    null != t && (0, s.initGuildIdentitySettings)(t, null != c ? c : f), i.default.open(a.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? u.ProfileCustomizationSubsection.GUILD : u.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: o,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, o, c, d, f]);
                return I
            }
        },
        506885: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("913144"),
                i = n("327037"),
                l = n("462274"),
                s = n("535013"),
                a = n("42203"),
                u = n("26989"),
                o = n("713135"),
                c = n("386714");
            async function d(e, t) {
                var n, d, f;
                let I, {
                    withMutualGuilds: _ = !1,
                    withMutualFriendsCount: E = !1,
                    friendToken: S,
                    preloadUserBanner: T = !0,
                    dispatchWait: N = !1,
                    guildId: p,
                    channelId: m
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("" === e) return;
                null != t && (0, l.maybeFetchColors)(t), null != p && !_ && (_ = !0), null != p && (I = null !== (d = null === (n = (0, s.getVisibleConnectionsRole)({
                    guildMember: u.default.getMember(p, e),
                    channel: a.default.getChannel(m)
                })) || void 0 === n ? void 0 : n.id) && void 0 !== d ? d : void 0);
                let C = o.default.getUserProfile(e),
                    h = o.default.getMutualGuilds(e),
                    P = o.default.getMutualFriendsCount(e),
                    L = o.default.isFetchingProfile(e),
                    A = (null == C ? void 0 : C.profileFetchFailed) || !L && (!Array.isArray(h) && _ || null == P && E),
                    v = T ? c.default : void 0,
                    R = !1;
                if (null != p) {
                    let t = o.default.getGuildMemberProfile(e, p);
                    R = null == t
                }!(!A && !R && (L || Date.now() - (null !== (f = null == C ? void 0 : C.lastFetched) && void 0 !== f ? f : 0) < 6e4)) && (N ? await r.default.wait(() => (0, i.fetchProfile)(e, {
                    withMutualGuilds: _,
                    withMutualFriendsCount: E,
                    friendToken: S,
                    guildId: p,
                    connectionsRoleId: I
                }, v)) : await (0, i.fetchProfile)(e, {
                    withMutualGuilds: _,
                    withMutualFriendsCount: E,
                    friendToken: S,
                    guildId: p,
                    connectionsRoleId: I
                }, v))
            }
        },
        386714: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("845579"),
                i = n("217513");

            function l(e, t) {
                if ("undefined" == typeof Image) return;
                let n = (0, i.getDisplayProfile)(e.user.id, t);
                if (null == n) return;
                let l = r.GifAutoPlay.getSetting(),
                    s = n.getBannerURL({
                        canAnimate: l,
                        size: 480
                    });
                if (null == s) return;
                let a = new Image;
                a.src = s
            }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("446674"),
                i = n("95410"),
                l = n("913144"),
                s = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = a,
                o = "LAST_VIEWED_PATH";
            class c extends r.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                    u = null != e ? e : a
                }
                get defaultRoute() {
                    return s.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : s.Routes.ME
                }
                get fallbackRoute() {
                    return s.Routes.ME
                }
                getState() {
                    return u
                }
            }
            c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
                let e = i.default.get(o, null);
                return i.default.remove(o), {
                    lastViewedPath: e
                }
            }];
            var d = new c(l.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedNonVoicePath = t, !0
                }
            })
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983"),
                i = n("884691"),
                l = n("77078"),
                s = n("393414"),
                a = n("49111"),
                u = i.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: u,
                        onClick: o,
                        onKeyPress: c,
                        focusProps: d,
                        ...f
                    } = e, I = i.useCallback(e => {
                        !e.repeat && ((e.charCode === a.KeyboardKeys.SPACE || e.charCode === a.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, s.transitionTo)(n), null == o || o()), null == c || c(e))
                    }, [n, c, o]), _ = i.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, s.transitionTo)(n), null == o || o())
                    }, [n, o]), E = (0, r.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: _,
                        onKeyPress: I,
                        ...f,
                        children: u
                    });
                    return (0, r.jsx)(l.FocusRing, {
                        ...d,
                        children: E
                    })
                })
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return a.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                s = n("79798"),
                a = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: i,
                        nameColor: a,
                        className: o,
                        botType: c,
                        usernameClass: d,
                        discriminatorClass: f,
                        botClass: I,
                        botVerified: _ = !1,
                        style: E,
                        useRemSizes: S = !1,
                        usernameIcon: T
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: l(o, u.nameTag),
                        style: E,
                        children: [(0, r.jsxs)("span", {
                            className: l(u.username, d),
                            style: null != a ? {
                                color: a
                            } : void 0,
                            children: [T, t]
                        }), null != n ? (0, r.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != c ? (0, r.jsx)(s.default, {
                            type: c,
                            invertColor: i,
                            className: l(I, u.bot),
                            verified: _,
                            useRemSizes: S
                        }) : null]
                    })
                }
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");

            function i(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, i = n ? t : 1, l = n ? 1 : t;
                return (0, r.jsx)("span", {
                    style: {
                        display: "block",
                        width: i,
                        minWidth: i,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("926001"),
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
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, l.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("197801"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...a
                    } = e;
                    return 16 === t || 16 === n ? (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, r.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("578478"),
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
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: l,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: i
                        })
                    })
                }, l.ImageIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("504318"),
                s = n("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
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
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: i
                        })
                    })
                }, l.PencilIcon, void 0, {
                    size: 16
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
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("31745"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        className: l,
                        foreground: s
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: i,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        394832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("125094"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        className: l,
                        foreground: s
                    } = e;
                    return (0, r.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.jsx)("path", {
                            className: s,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                        })
                    })
                }, l.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        708169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullScreenLayers: function() {
                    return h
                },
                useFullScreenLayerStore: function() {
                    return N
                },
                openFullScreenLayer: function() {
                    return P
                },
                closeFullScreenLayer: function() {
                    return L
                }
            }), n("222007");
            var r, i, l = n("37983"),
                s = n("884691"),
                a = n("995008"),
                u = n.n(a),
                o = n("324134"),
                c = n("308503"),
                d = n("769846"),
                f = n("77078"),
                I = n("485328"),
                _ = n("159885"),
                E = n("983782"),
                S = n("275495");
            let T = (0, _.cssValueToNumber)(d.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (i = r || (r = {}))[i.ENTERING = 1] = "ENTERING", i[i.ENTERED = 2] = "ENTERED", i[i.EXITING = 3] = "EXITING", i[i.EXITED = 4] = "EXITED";
            let N = (0, c.default)(e => ({
                fullScreenLayers: [],
                addLayer: t => e(e => {
                    let {
                        fullScreenLayers: n
                    } = e;
                    return {
                        fullScreenLayers: [...n, t]
                    }
                })
            }));

            function p(e) {
                let {
                    item: t
                } = e, n = s.useRef(null);
                return (0, f.useFocusLock)(n), s.useEffect(() => (I.default.disable(), I.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                L(e)
                            }
                        }
                    }
                }(t.key)), () => {
                    I.default.disableTemp()
                }), [t.key]), (0, l.jsx)(t.LayerComponent, {
                    children: (0, l.jsxs)("div", {
                        className: S.root,
                        ref: n,
                        children: [(0, l.jsx)("div", {
                            className: S.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: () => L(t.key)
                        })]
                    })
                })
            }
            let m = {
                    enter: S.enter,
                    enterActive: S.enterActive,
                    enterDone: S.enterDone,
                    exit: S.exit,
                    exitActive: S.exitActive,
                    exitDone: S.exitDone
                },
                C = {
                    enter: S.enterReducedMotion,
                    enterActive: S.enterActiveReducedMotion,
                    enterDone: S.enterDoneReducedMotion,
                    exit: S.exitReducedMotion,
                    exitActive: S.exitActiveReducedMotion,
                    exitDone: S.exitDoneReducedMotion
                };

            function h() {
                let {
                    reducedMotion: e
                } = s.useContext(f.AccessibilityPreferencesContext), t = e.enabled, n = t ? C : m, r = N(e => e.fullScreenLayers);
                return (0, l.jsx)(o.TransitionGroup, {
                    children: r.map(e => (0, l.jsx)(o.CSSTransition, {
                        classNames: n,
                        timeout: T,
                        onEntered: () => {
                            N.setState({
                                fullScreenLayers: r.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: 2
                                } : t)
                            })
                        },
                        unmountOnExit: !0,
                        children: (0, l.jsx)(p, {
                            item: e
                        })
                    }, e.key))
                })
            }

            function P(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: n,
                        Layer: r
                    } = t,
                    i = null != n ? n : u();
                return N.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: i,
                        transitionState: 1,
                        LayerComponent: null != r ? r : E.default,
                        render: e
                    }]
                })), i
            }

            function L(e) {
                N.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return N
                },
                default: function() {
                    return C
                }
            }), n("424973"), n("222007");
            var r = n("37983"),
                i = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("627445"),
                u = n.n(a),
                o = n("77078"),
                c = n("506885"),
                d = n("981601"),
                f = n("766274"),
                I = n("697218"),
                _ = n("368121"),
                E = n("523096"),
                S = n("587974"),
                T = n("494101");
            let N = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function p(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class m extends i.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: i,
                        extraDetail: l
                    } = this.props, s = [], a = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(a), o = 0;
                    for (; o < a && o < e.length;) {
                        var c;
                        let t = null == u && null == l && o === e.length - 1,
                            a = n(e[o], t, o);
                        s.push(t ? (0, r.jsx)("div", {
                            className: T.avatarContainer,
                            children: a
                        }, p(null !== (c = e[o]) && void 0 !== c ? c : null, o)) : (0, r.jsx)(S.default, {
                            className: T.avatarContainerMasked,
                            height: i,
                            width: i,
                            mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: a
                        }, p(e[o], o))), o++
                    }
                    return null != l ? s.push(l) : null != u && s.push(u), s
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: s,
                        users: a
                    } = this.props, u = Math.min(e, a.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, r.jsx)(i.Fragment, {
                                children: s("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > a.length) {
                                let e = n - a.length;
                                return (0, r.jsx)(i.Fragment, {
                                    children: s("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < a.length) {
                            let e = Math.min(a.length - u, 99);
                            return (0, r.jsx)(i.Fragment, {
                                children: s("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, r.jsx)(_.default, {
                        foreground: T.foreground,
                        className: T.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: i,
                        showUserPopout: l,
                        useFallbackUserForPopout: a
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, _ = n.find(e => null != e && e.id === f), E = a && null == I.default.getUser(f);
                    return (0, r.jsx)(o.Popout, {
                        position: "right",
                        preload: null == _ ? void 0 : () => (0, c.default)(_.id, _.getAvatarURL(i, 80), {
                            guildId: i
                        }),
                        shouldShow: !0 === l && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, r.jsx)(d.default, {
                            ...this.props,
                            user: E && null != _ ? _ : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, r.jsxs)("div", {
                            className: s(e, T.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N.SIZE_24;
                                switch (e) {
                                    case N.SIZE_16:
                                        return T.size16;
                                    case N.SIZE_24:
                                        return T.size24;
                                    case N.SIZE_32:
                                        return T.size32;
                                    case N.SIZE_56:
                                        return T.size56;
                                    default:
                                        return T.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = i.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: i,
                            guildId: l,
                            size: s
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, r.jsx)("div", {
                                className: T.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % E.default.DEFAULT_AVATARS.length,
                                    t = E.default.DEFAULT_AVATARS[e];
                                return (0, r.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: T.avatar
                                })
                            }
                        }
                        let a = (0, r.jsx)("img", {
                            src: e.getAvatarURL(l, s),
                            alt: e.username,
                            className: T.avatar
                        }, e.id);
                        return i ? (0, r.jsx)(o.Clickable, {
                            className: T.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: a
                        }, e.id) : a
                    }
                }
            }
            m.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, r.jsx)("div", {
                        className: T.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: N.SIZE_24
            };
            var C = m
        },
        252438: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                SKUBenefitTypes: function() {
                    return r
                }
            }), n("222007"), (i = r || (r = {}))[i.INTANGIBLE = 1] = "INTANGIBLE", i[i.APPLICATION_PREMIUM_COMMAND = 2] = "APPLICATION_PREMIUM_COMMAND"
        }
    }
]);