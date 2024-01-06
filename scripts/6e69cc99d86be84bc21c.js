(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13250"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), r.test(e)) ? "rtl" : i.test(e) ? "ltr" : "neutral"
            };
            var l = "֑-߿יִ-﷽ﹰ-ﻼ",
                a = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                r = RegExp("^[^" + a + "]*[" + l + "]"),
                i = RegExp("^[^" + l + "]*[" + a + "]")
        },
        766665: function(e, t, n) {
            var l = n("424498");
            e.exports = function(e, t, n) {
                "__proto__" == t && l ? l(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n
            }
        },
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                i = n.n(r),
                s = n("817736"),
                u = n.n(s),
                o = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                p = n("62843"),
                C = n("315102"),
                m = n("402671"),
                v = n("866190"),
                g = n("115279");
            class S extends a.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: l,
                            animated: a,
                            shouldAnimate: r,
                            isFocused: i,
                            isInteracting: s,
                            size: u = "default"
                        } = e,
                        {
                            hover: o
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = g.EMOJI_SIZE_MAP[u];
                        return C.default.getEmojiURL({
                            id: n,
                            animated: i && !0 === a && (!0 === r || o || !0 === s),
                            size: e
                        })
                    }
                    if (null != l) return m.default.getURL(l)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: r,
                        className: s,
                        size: u = "default",
                        alt: o,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: p,
                        ...C
                    } = this.props, m = this.getSrc();
                    return null == m || "" === m ? (0, l.jsx)("span", {
                        className: i("emoji", "emoji-text"),
                        children: n
                    }) : (r && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...C,
                        key: this.key,
                        src: m,
                        alt: null !== (e = null != o ? o : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: i("emoji", s, {
                            jumboable: "jumbo" === u
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            S.defaultProps = {
                isInteracting: !1
            };
            let E = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, l.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    r = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let l = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == l) return;
                            let a = l[1];
                            if (e.intersectionRatio >= .7) {
                                var r, i;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (r = e.rootBounds) || void 0 === r ? void 0 : r.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function i(e) {
                    let t = u.findDOMNode(e);
                    (0, o.isElement)(t) && (n.push([t, e]), r.observe(t))
                }

                function s(e) {
                    let l = u.findDOMNode(e);
                    r.unobserve(l);
                    let a = n.findIndex(t => {
                        let [n, l] = t;
                        return l === e
                    }); - 1 !== a && (n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends a.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && i(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? i(this) : s(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: r,
                                ...i
                            } = this.props;
                        return (0, l.jsx)(p.MessagesInteractionContext.Consumer, {
                            children: t => (0, l.jsx)(e, {
                                ...i,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && r
                            })
                        })
                    }
                }
            }(S);

            function I(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, v.useIsWindowFocused)();
                return (0, l.jsx)(E, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                i = n("446674"),
                s = n("77078"),
                u = n("102985"),
                o = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                h = n("892802");

            function p(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let C = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: a,
                    botVerified: i,
                    discriminatorClass: u,
                    className: d,
                    usernameClass: c,
                    color: p,
                    botClass: C,
                    showStreamerModeTooltip: m
                } = e;
                return (0, l.jsxs)("div", {
                    className: r(h.info, d),
                    children: [(0, l.jsx)(s.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: m,
                        children: e => (0, l.jsx)("span", {
                            ...e,
                            className: r(h.username, c),
                            style: null != p ? {
                                color: p
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, l.jsx)("span", {
                        className: r(h.infoSpacing, u),
                        children: n
                    }) : void 0, null != a && (0, l.jsx)(o.default, {
                        type: a,
                        className: r(h.infoSpacing, C),
                        verified: i
                    })]
                })
            };
            var m = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: a,
                    forceUsername: r,
                    showAccountIdentifier: s,
                    overrideDiscriminator: o,
                    forcePomelo: f,
                    ...h
                } = e, m = (0, i.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), v = m || t || n.isNonUserBot(), g = n.toString(), S = c.default.getName(n), E = r ? g : null != a ? a : S, I = n.isPomelo() || f;
                if (I || E !== g) {
                    let e = E === g && I && r ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : E,
                        t = s && e !== "@".concat(g) ? c.default.getUserTag(n) : void 0;
                    return (0, l.jsx)(C, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: p(n),
                        showStreamerModeTooltip: m && e !== S,
                        ...h
                    })
                }
                return (0, l.jsx)(d.default, {
                    name: E,
                    botType: p(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: v || E !== g ? null : null != o ? o : n.discriminator,
                    ...h
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
                        className: s
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
                        className: s
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
                        className: s
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: s
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                        className: s
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("599110");
            let r = () => l.useContext(a.AnalyticsContext)
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var l = n("872717"),
                a = n("913144"),
                r = n("568734"),
                i = n("299285"),
                s = n("49111"),
                u = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: r,
                            teamId: i
                        } = e, u = await l.default.post({
                            url: s.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: r,
                                guild_id: n,
                                team_id: i
                            }
                        }), o = u.body;
                        return null != n && null != r && a.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: o
                        }), o
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = await l.default.get({
                            url: s.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), i = r.body;
                        return a.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: i
                        }), i
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, r = await l.default.post({
                            url: s.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), i = r.body;
                        return a.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: i
                        }), i
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let l = i.default.getApplication(e),
                                    a = (0, r.hasFlag)(null !== (n = null == l ? void 0 : l.flags) && void 0 !== n ? n : 0, s.ApplicationFlags.EMBEDDED),
                                    u = a && (null == l ? void 0 : null === (t = l.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != l && !u) && !i.default.isFetchingApplication(e) && !i.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            a.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await l.default.get({
                                    url: s.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw a.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            a.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return a.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), l.default.get({
                            url: s.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (a.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (a.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        619335: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("274870"),
                a = n("116320"),
                r = n("617559"),
                i = n("213523"),
                s = n("593195"),
                u = n("361777"),
                o = n("497757"),
                d = n("774223"),
                c = n("991497"),
                f = n("393621"),
                h = n("905999"),
                p = n("660074"),
                C = n("990745"),
                m = n("190986"),
                v = n("721618"),
                g = n("733160"),
                S = n("990864"),
                E = n("274652"),
                I = n("922744"),
                _ = n("155207"),
                x = n("745183"),
                T = n("368121"),
                L = n("944633"),
                N = n("228427"),
                A = n("959097"),
                y = n("656038"),
                R = n("49111");

            function M(e, t) {
                switch (e.type) {
                    case R.ChannelTypes.DM:
                        return a.default;
                    case R.ChannelTypes.GROUP_DM:
                        let n = (0, l.getIsBroadcastingGDM)(e.id);
                        return n ? d.default : _.default;
                    case R.ChannelTypes.GUILD_ANNOUNCEMENT:
                        if (e.isNSFW()) return E.default;
                        if ((0, y.default)(e)) return S.default;
                        else return g.default;
                    case R.ChannelTypes.GUILD_TEXT:
                        if (e.id === (null == t ? void 0 : t.rulesChannelId)) return i.default;
                        if (e.isNSFW()) return o.default;
                        else if ((0, y.default)(e)) return u.default;
                        else return s.default;
                    case R.ChannelTypes.GUILD_FORUM:
                        let M = e.isMediaChannel();
                        if (e.isNSFW()) return M ? v.default : h.default;
                        if ((0, y.default)(e)) return M ? m.default : f.default;
                        else return M ? C.default : c.default;
                    case R.ChannelTypes.GUILD_MEDIA:
                        if (e.isNSFW()) return v.default;
                        if ((0, y.default)(e)) return m.default;
                        else return C.default;
                    case R.ChannelTypes.GUILD_STAGE_VOICE:
                        return N.default;
                    case R.ChannelTypes.GUILD_VOICE:
                        if ((0, y.default)(e)) return L.default;
                        return T.default;
                    case R.ChannelTypes.ANNOUNCEMENT_THREAD:
                    case R.ChannelTypes.PUBLIC_THREAD:
                        if (e.isNSFW()) return I.default;
                        if (e.isForumPost()) return p.default;
                        else return A.default;
                    case R.ChannelTypes.PRIVATE_THREAD:
                        if (e.isNSFW()) return I.default;
                        return x.default;
                    case R.ChannelTypes.GUILD_DIRECTORY:
                        return r.default;
                    default:
                        return null
                }
            }
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691");
            let a = l.createContext(void 0);
            var r = a
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return p
                },
                canGuildUseRoleIcons: function() {
                    return C
                }
            }), n("781738");
            var l = n("867805"),
                a = n("407063"),
                r = n("315102"),
                i = n("773336"),
                s = n("49111");
            let u = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                o = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, i.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? l.default.getByName(l.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()))),
                h = (e, t) => {
                    let {
                        id: n,
                        icon: l
                    } = e;
                    if (null == l) return;
                    if (l.startsWith("data:")) return l;
                    let i = r.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, a.getBestMediaProxySize)(t * (0, a.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(u, "/").concat(n, "/").concat(l, ".").concat(i, "?").concat(c).concat(f) : "".concat(o).concat(s.Endpoints.ROLE_ICON(n, l), "?").concat(c)
                },
                p = e => e.startsWith(u) || e.startsWith("".concat(o, "/roles")) && e.includes("/icons/"),
                C = (e, t) => {
                    var n;
                    let l = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return l || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                },
                PaymentPortalBody: function() {
                    return C
                },
                PaymentPortalFooter: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                i = n.n(r),
                s = n("627445"),
                u = n.n(s),
                o = n("817736"),
                d = n.n(o),
                c = n("77078"),
                f = n("642906"),
                h = n("990893");

            function p(e) {
                var t, n, r, s, o, d;
                let {
                    header: p,
                    isLargeModal: C,
                    stepProps: m
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...l
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: l
                    }
                }(e), {
                    step: v,
                    stepConfigs: g,
                    setBodyNode: S,
                    setFooterNode: E,
                    setModalOverlayNode: I,
                    setReadySlideId: _
                } = (0, f.usePaymentContext)(), x = g.find(e => e.key === v);
                a.useEffect(() => {
                    I(null)
                }, [v, I]), u(null != x, "Unknown step for current payment flow.");
                let T = null !== (o = null == x ? void 0 : null === (t = x.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    L = null == x ? void 0 : null === (n = x.options) || void 0 === n ? void 0 : n.bodyClassName,
                    N = void 0 !== C && C ? h.sliderBodyLarge : null == x ? void 0 : null === (r = x.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
                return (0, l.jsxs)(l.Fragment, {
                    children: [null === (d = null == x ? void 0 : null === (s = x.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? p : null, x.renderStep(m), null == v || T ? null : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ModalContent, {
                            className: i(h.body, L),
                            children: (0, l.jsx)(c.Slides, {
                                activeSlide: v,
                                centered: !1,
                                onSlideReady: e => _(e),
                                children: g.filter(e => null != e.key).map(e => (0, l.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, l.jsx)("form", {
                                        className: i(h.sliderBody, N),
                                        ref: e => S(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, l.jsx)("div", {
                            ref: e => E(e)
                        }), (0, l.jsx)("div", {
                            ref: e => I(e)
                        })]
                    })]
                })
            }

            function C(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function m(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                r = n("880731");

            function i(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, i = (0, a.default)([r.default], () => r.default.isEnabled({
                    confettiLocation: n
                }));
                return i ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("884691"),
                a = n("65597"),
                r = n("526887"),
                i = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(r.ConfettiCannonContext), t = (0, a.default)([i.default], () => i.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = l.useMemo(() => ({
                    fire: (l, a, r) => {
                        var i, s;
                        let u = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            o = n(u);
                        e(l, a, o, (null !== (i = null == r ? void 0 : r.count) && void 0 !== i ? i : u.confettiCount) * (null !== (s = null == r ? void 0 : r.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return p
                },
                maybeFetchPremiumLikelihood: function() {
                    return m
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return v
                }
            });
            var l = n("884691"),
                a = n("65597"),
                r = n("872717"),
                i = n("913144"),
                s = n("775433"),
                u = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                h = n("49111");
            let p = "nonSubscriber";
            async function C() {
                try {
                    i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await r.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [p]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : i.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), l = c.default.shouldFetchPremiumLikelihood(), a = u.default.getCurrentUser();
                g(a, l, t, n)
            }

            function v(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), r = (0, a.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), i = (0, a.default)([u.default], () => u.default.getCurrentUser());
                l.useEffect(() => {
                    g(i, r, t, n)
                }, [i, r, t, n])
            }

            function g(e, t, n, l) {
                null != e && !(0, d.isPremium)(e) && n && (t && C(), l && (!o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                a = n("913144");
            let r = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                i = r;
            class s extends l.default.Store {
                initialize() {
                    i = r
                }
                getState() {
                    return i
                }
                shouldFetchPremiumLikelihood() {
                    return !i.isFetching && !i.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var u = new s(a.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    i.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    i.premiumLikelihood = t, i.fetched = !0, i.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    i.isFetching = !1
                },
                LOGOUT: function() {
                    i.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
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
            var r = a
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("49111");

            function a(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(l.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(l.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        134947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackThreadBrowserTab: function() {
                    return S
                },
                useActiveThreads: function() {
                    return E
                },
                useActiveGuildThreads: function() {
                    return I
                },
                useArchivedThreads: function() {
                    return _
                }
            }), n("222007");
            var l = n("884691"),
                a = n("917351"),
                r = n.n(a),
                i = n("446674"),
                s = n("404607"),
                u = n("42203"),
                o = n("957255"),
                d = n("660478"),
                c = n("449008"),
                f = n("299039"),
                h = n("689275"),
                p = n("821343"),
                C = n("755624"),
                m = n("263024"),
                v = n("487269"),
                g = n("843455");

            function S() {
                l.useEffect(() => {
                    (0, v.trackThreadBrowserTab)()
                }, [])
            }

            function E(e) {
                let t = function(e) {
                        let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => r(h.default.getThreadsForParent(e.guild_id, e.id)).values().map(e => {
                            let {
                                id: t
                            } = e;
                            return u.default.getChannel(t)
                        }).filter(c.isNotNullish).filter(e => o.default.can(g.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e.guild_id, e.id]);
                        return l.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
                    }(e),
                    [n, a] = (0, i.useStateFromStores)([C.default], () => r.partition(t, e => C.default.hasJoined(e)), [t], i.statesWillNeverBeEqual);
                return {
                    joinedThreadIds: n,
                    unjoinedThreadIds: a
                }
            }

            function I(e) {
                let t = (0, i.useStateFromStoresArray)([o.default, h.default, u.default], () => r(h.default.getThreadsForGuild(e)).values().map(e => r.values(e)).flatten().map(e => {
                    let {
                        id: t
                    } = e;
                    return u.default.getChannel(t)
                }).filter(c.isNotNullish).filter(e => o.default.can(g.Permissions.VIEW_CHANNEL, e)).map(e => e.id).value(), [e]);
                return l.useMemo(() => r(t).sort((e, t) => f.default.compare(d.default.lastMessageId(e), d.default.lastMessageId(t))).reverse().value(), [t])
            }

            function _(e, t, n) {
                let {
                    canLoadMore: a,
                    loading: d,
                    nextOffset: c,
                    isInitialLoad: f
                } = (0, i.useStateFromStoresObject)([p.default], () => ({
                    loading: p.default.isLoading(e.id, t, n),
                    isInitialLoad: p.default.isInitialLoad,
                    canLoadMore: p.default.canLoadMore,
                    nextOffset: p.default.nextOffset
                })), h = l.useCallback(() => {
                    o.default.can(g.Permissions.READ_MESSAGE_HISTORY, e) && m.default.loadArchivedThreads(e.guild_id, e.id, t, n, c)
                }, [e, t, n, c]);
                l.useEffect(() => {
                    f && h()
                }, [e.id, t, n, f]), l.useEffect(() => {
                    s.default.resort(e.id)
                }, [e.id]);
                let C = (0, i.useStateFromStoresArray)([p.default, u.default, o.default], () => r(p.default.getThreads(e.id, t, n)).filter(e => {
                    let t = u.default.getChannel(e);
                    return null != t && o.default.can(g.Permissions.VIEW_CHANNEL, t)
                }).value());
                return {
                    threadIds: C,
                    canLoadMore: a,
                    loading: d || f,
                    loadMore: h
                }
            }
        },
        557872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                i = n.n(r),
                s = n("77078"),
                u = n("134947"),
                o = n("913979"),
                d = n("321797");

            function c(e) {
                let {
                    guildId: t,
                    goToThread: n
                } = e, r = (0, u.useActiveGuildThreads)(t), c = a.useCallback(e => {
                    let t = r[e.row];
                    return (0, l.jsx)(o.default, {
                        threadId: t,
                        goToThread: n,
                        showChannelName: !0
                    }, "".concat(e.section, "-").concat(e.row))
                }, [r, n]);
                return (0, l.jsx)(s.List, {
                    className: i(d.list, d.activeThreadsList),
                    fade: !0,
                    sections: [r.length],
                    renderSection: () => null,
                    sectionHeight: 0,
                    rowHeight: 80,
                    renderRow: c,
                    chunkSize: 20
                })
            }
        },
        469755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                r = n("945330"),
                i = n("959097"),
                s = n("557872"),
                u = n("967241"),
                o = n("648564"),
                d = n("782340"),
                c = n("728360");

            function f(e) {
                let {
                    guildId: t,
                    onClose: n,
                    transitionState: f
                } = e;
                return (0, l.jsx)(a.ModalRoot, {
                    className: c.modal,
                    transitionState: f,
                    "aria-label": d.default.Messages.THREADS,
                    size: a.ModalSize.DYNAMIC,
                    children: (0, l.jsxs)("div", {
                        className: c.container,
                        children: [(0, l.jsxs)("div", {
                            className: c.header,
                            children: [(0, l.jsx)(i.default, {
                                className: c.threadIcon
                            }), (0, l.jsx)(a.Heading, {
                                variant: "heading-md/semibold",
                                className: c.title,
                                children: d.default.Messages.ALL_ACTIVE_THREADS
                            }), (0, l.jsx)("div", {
                                className: c.spacer
                            }), (0, l.jsx)(a.Clickable, {
                                className: c.closeIcon,
                                onClick: n,
                                "aria-label": d.default.Messages.CLOSE,
                                children: (0, l.jsx)(r.default, {})
                            })]
                        }), (0, l.jsx)(s.default, {
                            guildId: t,
                            goToThread: (e, t) => {
                                n(), (0, u.openThreadSidebarForViewing)(e, !t, o.OpenThreadAnalyticsLocations.GUILD_ACTIVE_THREADS_MODAL)
                            }
                        })]
                    })
                })
            }
        },
        913979: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                i = n("77078"),
                s = n("272030"),
                u = n("42203"),
                o = n("124948"),
                d = n("697218"),
                c = n("811305"),
                f = n("800843"),
                h = n("442184"),
                p = n("648564"),
                C = n("140407"),
                m = a.memo(function(e) {
                    let {
                        threadId: t,
                        goToThread: a,
                        showChannelName: o
                    } = e, d = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(t)), c = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(d.parent_id));
                    return (0, l.jsxs)(i.Clickable, {
                        className: C.container,
                        onClick: e => a(d, e.shiftKey),
                        onContextMenu: e => (0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("994827").then(n.bind(n, "994827"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                channel: d
                            })
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: C.left,
                            children: [(0, l.jsxs)(i.Heading, {
                                className: C.threadNameLine,
                                variant: "heading-md/semibold",
                                children: [(0, l.jsx)("span", {
                                    className: C.threadName,
                                    children: d.name
                                }), o && null != c ? (0, l.jsx)("span", {
                                    className: C.parentName,
                                    children: "#".concat(c.name)
                                }) : null]
                            }), (0, h.default)(d)]
                        }), (0, l.jsx)(v, {
                            channel: d
                        })]
                    })
                });

            function v(e) {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberIdsPreview(t.id)) && void 0 !== e ? e : []
                }), i = (0, r.useStateFromStores)([f.default], () => {
                    var e;
                    return null !== (e = f.default.getMemberCount(t.id)) && void 0 !== e ? e : 0
                }), s = (0, r.useStateFromStoresArray)([d.default], () => n.map(e => d.default.getUser(e)));
                return (a.useEffect(() => {
                    n.filter((e, t) => null == s[t]).forEach(e => {
                        o.default.requestMember(t.guild_id, e)
                    })
                }, []), 0 === n.length) ? null : (0, l.jsx)(c.default, {
                    className: C.facepile,
                    showDefaultAvatarsForNullUsers: !0,
                    guildId: t.guild_id,
                    users: s,
                    count: i,
                    max: p.MAX_THREAD_MEMBERS_PREVIEW
                })
            }
        },
        442184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                i = n("77078"),
                s = n("308289"),
                u = n("750560"),
                o = n("619335"),
                d = n("95045"),
                c = n("574073"),
                f = n("26989"),
                h = n("660478"),
                p = n("27618"),
                C = n("697218"),
                m = n("959097"),
                v = n("93427"),
                g = n("299039"),
                S = n("158998"),
                E = n("610730"),
                I = n("487269"),
                _ = n("719347"),
                x = n("782340"),
                T = n("140407");

            function L(e) {
                return e.isActiveThread() ? (0, l.jsx)(N, {
                    channel: e
                }) : (0, l.jsx)(R, {
                    channel: e
                })
            }

            function N(e) {
                let {
                    channel: t
                } = e, n = (0, r.useStateFromStores)([E.default], () => E.default.getMostRecentMessage(t.id));
                return null == n ? (0, l.jsx)(A, {
                    channel: t
                }) : (0, l.jsx)(y, {
                    channel: t,
                    message: n
                })
            }

            function A(e) {
                let {
                    channel: t
                } = e, n = (0, I.useLastMessageTimestamp)(t);
                return (0, l.jsxs)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [x.default.Messages.THREAD_BROWSER_NO_RECENT_MESSAGES, "\xa0 • \xa0", (0, I.getTimestampString)(n)]
                })
            }

            function y(e) {
                let {
                    channel: t,
                    message: n
                } = e;
                (0, u.useSubscribeGuildMembers)({
                    [t.guild_id]: [n.author.id]
                });
                let o = (0, r.useStateFromStores)([C.default], () => {
                        var e;
                        return null !== (e = C.default.getUser(n.author.id)) && void 0 !== e ? e : n.author
                    }),
                    {
                        nick: f,
                        colorString: h
                    } = (0, c.default)(n),
                    m = (0, r.useStateFromStores)([p.default], () => p.default.isBlocked(n.author.id)),
                    S = a.useMemo(() => {
                        let e = null != n.content && "" !== n.content ? (0, d.default)(n, {
                                formatInline: !0
                            }).content : null,
                            {
                                contentPlaceholder: t,
                                renderedContent: a,
                                icon: r
                            } = (0, v.renderSingleLineMessage)(n, e, m, T.messageContent, {
                                iconClass: T.messageContentIcon,
                                iconSize: _.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                            });
                        return (0, l.jsxs)(l.Fragment, {
                            children: [null != a ? a : (0, l.jsx)("span", {
                                children: t
                            }), r]
                        })
                    }, [n, m]);
                return (0, l.jsxs)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: [(0, l.jsx)(s.default, {
                        className: T.avatar,
                        user: o,
                        size: i.AvatarSizes.SIZE_16
                    }), (0, l.jsx)(i.NameWithRole, {
                        name: f,
                        color: h,
                        className: T.authorName
                    }), ":\xa0", S, "\xa0 • \xa0", (0, I.getTimestampString)(g.default.extractTimestamp(n.id))]
                })
            }

            function R(e) {
                var t, n, a;
                let {
                    channel: d
                } = e, c = (0, r.useStateFromStores)([h.default], () => h.default.lastMessageId(d.id)), p = null == c ? new Date(null !== (n = null === (t = d.threadMetadata) || void 0 === t ? void 0 : t.archiveTimestamp) && void 0 !== n ? n : Date.now()).getTime() : g.default.extractTimestamp(c);
                (0, u.useSubscribeGuildMembers)({
                    [d.guild_id]: [d.ownerId]
                });
                let v = (0, r.useStateFromStores)([C.default], () => C.default.getUser(d.ownerId)),
                    E = (0, r.useStateFromStores)([f.default], () => f.default.getMember(d.guild_id, d.ownerId)),
                    _ = null !== (a = (0, o.default)(d)) && void 0 !== a ? a : m.default;
                return (0, l.jsx)(i.Text, {
                    className: T.subtext,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: null == v ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: T.noAvatarIcon,
                            children: (0, l.jsx)(_, {
                                width: 10,
                                height: 10
                            })
                        }), x.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, I.getTimestampString)(p)
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.default, {
                            className: T.avatar,
                            user: v,
                            size: i.AvatarSizes.SIZE_16
                        }), x.default.Messages.THREAD_BROWSER_STARTED_BY.format({
                            authorHook(e, t) {
                                var n, a;
                                return (0, l.jsx)(i.NameWithRole, {
                                    className: T.startedByName,
                                    color: null !== (n = null == E ? void 0 : E.colorString) && void 0 !== n ? n : void 0,
                                    name: null !== (a = null == E ? void 0 : E.nick) && void 0 !== a ? a : S.default.getName(v)
                                }, t)
                            }
                        }), (0, l.jsx)("span", {
                            className: T.bullet,
                            children: "•"
                        }), x.default.Messages.THREAD_BROWSER_LAST_ACTIVE_TIME.format({
                            time: (0, I.getTimestampString)(p)
                        })]
                    })
                })
            }
        },
        967241: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openThreadSidebarForViewing: function() {
                    return _
                },
                openThreadSidebarForCreating: function() {
                    return x
                },
                closeThreadSidebar: function() {
                    return T
                },
                closeAndClearThreadSidebar: function() {
                    return L
                }
            });
            var l = n("627445"),
                a = n.n(l),
                r = n("917351"),
                i = n.n(r),
                s = n("913144"),
                u = n("295426"),
                o = n("244201"),
                d = n("716241"),
                c = n("565298"),
                f = n("393414"),
                h = n("144491"),
                p = n("845579"),
                C = n("474643"),
                m = n("18494"),
                v = n("800762"),
                g = n("659500"),
                S = n("648564"),
                E = n("49111"),
                I = n("724210");

            function _(e, t, n) {
                o.MainWindowDispatch.dispatch(E.ComponentActions.POPOUT_CLOSE);
                let l = !i.isEmpty(v.default.getVoiceStatesForChannel(e.id));
                if (t || !p.UseThreadSidebar.getSetting() || __OVERLAY__ || l) {
                    s.default.dispatch({
                        type: "SIDEBAR_CLOSE",
                        baseChannelId: e.parent_id
                    }), null != n ? (0, h.transitionToThread)(e, n) : (0, h.transitionToChannel)(e.id);
                    return
                }
                a(null != e.parent_id, "all threads must have parents");
                let r = m.default.getChannelId();
                e.parent_id !== r && !(0, I.isGuildHomeChannel)(r) && (0, h.transitionToChannel)(e.parent_id), (0, f.transitionTo)(E.Routes.CHANNEL_THREAD_VIEW((0, c.getGuildIdForGenericRedirect)(e), (0, I.isGuildHomeChannel)(r) ? I.StaticChannelRoute.GUILD_HOME : e.parent_id, e.id), void 0, e.isForumPost() ? S.OpenThreadAnalyticsLocations.FORUM : void 0), setTimeout(() => {
                    g.ComponentDispatch.dispatch(E.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: e.id
                    })
                }, 0)
            }

            function x(e, t, n) {
                a(!e.isForumLikeChannel(), "cannot open thread creation sidebar in forums"), a(!__OVERLAY__, "Cannot create threads in the overlay."), (0, d.trackWithMetadata)(E.AnalyticEvents.THREAD_CREATION_STARTED, {
                    location: n,
                    channel_id: e.id,
                    guild_id: e.guild_id
                }), o.MainWindowDispatch.dispatch(E.ComponentActions.POPOUT_CLOSE), m.default.getChannelId() !== e.id && (0, h.transitionToChannel)(e.id);
                let l = C.default.getDraft(e.id, C.DraftType.FirstThreadMessage);
                if ("" === l) {
                    let t = C.default.getDraft(e.id, C.DraftType.ChannelMessage);
                    u.default.saveDraft(e.id, "", C.DraftType.ChannelMessage), u.default.saveDraft(e.id, t, C.DraftType.FirstThreadMessage)
                }
                setTimeout(() => {
                    s.default.dispatch({
                        type: "SIDEBAR_CREATE_THREAD",
                        parentChannelId: e.id,
                        parentMessageId: null == t ? void 0 : t.id,
                        location: n
                    })
                }, 0)
            }

            function T(e, t) {
                (0, f.transitionTo)(E.Routes.CHANNEL(e, (0, I.isGuildHomeChannel)(t) ? I.StaticChannelRoute.GUILD_HOME : t)), s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: t
                })
            }

            function L(e) {
                s.default.dispatch({
                    type: "SIDEBAR_CLOSE",
                    baseChannelId: e
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: C.DraftType.FirstThreadMessage
                }), s.default.dispatch({
                    type: "DRAFT_CLEAR",
                    channelId: e,
                    draftType: C.DraftType.ThreadSettings
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                a = n("884691"),
                r = n("77078"),
                i = n("393414"),
                s = n("49111"),
                u = a.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: u,
                        onClick: o,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, h = a.useCallback(e => {
                        !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, i.transitionTo)(n), null == o || o()), null == d || d(e))
                    }, [n, d, o]), p = a.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, i.transitionTo)(n), null == o || o())
                    }, [n, o]), C = (0, l.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: p,
                        onKeyPress: h,
                        ...f,
                        children: u
                    });
                    return (0, l.jsx)(r.FocusRing, {
                        ...c,
                        children: C
                    })
                })
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return s.BotTagTypes
                },
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                i = n("79798"),
                s = n("988268"),
                u = n("888770"),
                o = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: a,
                        nameColor: s,
                        className: o,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: h,
                        botVerified: p = !1,
                        style: C,
                        useRemSizes: m = !1,
                        usernameIcon: v
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: r(o, u.nameTag),
                        style: C,
                        children: [(0, l.jsxs)("span", {
                            className: r(u.username, c),
                            style: null != s ? {
                                color: s
                            } : void 0,
                            children: [v, t]
                        }), null != n ? (0, l.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, l.jsx)(i.default, {
                            type: d,
                            invertColor: a,
                            className: r(h, u.bot),
                            verified: p,
                            useRemSizes: m
                        }) : null]
                    })
                }
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("37983");

            function a(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, a = n ? t : 1, r = n ? 1 : t;
                return (0, l.jsx)("span", {
                    style: {
                        display: "block",
                        width: a,
                        minWidth: a,
                        height: r,
                        minHeight: r
                    }
                })
            }
            n("884691")
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return a
                }
            });
            var l = n("884691");
            let a = l.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("926001"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, r.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                r = n.n(a),
                i = n("384737"),
                s = n("448052"),
                u = n("748802"),
                o = n("260792"),
                d = n("77078"),
                c = n("75196"),
                f = n("4177");
            let h = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                p = e => {
                    let {
                        direction: t = h.DOWN,
                        width: n = 24,
                        height: a = 24,
                        color: p = "currentColor",
                        transition: C = f.transition,
                        className: m,
                        foreground: v,
                        expanded: g,
                        ...S
                    } = e, {
                        enabled: E
                    } = (0, d.useRedesignIconContext)(), I = t;
                    if (!0 === g ? I = h.DOWN : !1 === g && (I = h.RIGHT), E) {
                        let e = {
                            [h.UP]: o.ChevronSmallUpIcon,
                            [h.DOWN]: i.ChevronSmallDownIcon,
                            [h.LEFT]: s.ChevronSmallLeftIcon,
                            [h.RIGHT]: u.ChevronSmallRightIcon
                        } [I];
                        return (0, l.jsx)(e, {
                            ...S,
                            className: m,
                            width: n,
                            height: a,
                            color: p,
                            colorClass: v
                        })
                    }
                    return (0, l.jsx)("svg", {
                        className: r(m, C, I),
                        width: n,
                        height: a,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(S),
                        children: (0, l.jsx)("path", {
                            className: v,
                            fill: "none",
                            stroke: p,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            p.Directions = h;
            var C = p
        },
        774223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function r(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = "currentColor",
                    className: i,
                    foreground: s,
                    ...u
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(u),
                    className: i,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        className: s,
                        fill: r,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("469563"),
                i = n("163725"),
                s = n("75196"),
                u = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foregroundColor: i = a.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: o,
                        ...d
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("rect", {
                            fill: i,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, l.jsx)("path", {
                            fill: r,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, i.EyeSlashIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("578478"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: a
                        })
                    })
                }, r.ImageIcon, void 0, {
                    size: 24
                })
        },
        543289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function r(e) {
                let {
                    width: t = 104,
                    height: n = 80,
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 104 80",
                    fill: "none",
                    children: [(0, l.jsx)("path", {
                        d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
                        fill: "#ADF3FF"
                    }), (0, l.jsx)("path", {
                        d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                })
            }
        },
        922744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("782926"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M14.4 7C14.5326 7 14.64 7.10745 14.64 7.24V8.76C14.64 8.89255 14.5326 9 14.4 9H9.41045L8.35045 15H10.56V17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H14.4Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M12.48 13.92C12.48 13.3898 12.9098 12.96 13.44 12.96H22.56C23.0902 12.96 23.52 13.3898 23.52 13.92V20.2213C23.52 20.7515 23.0902 21.1813 22.56 21.1813H18.1294C17.8917 21.1813 17.6623 21.2695 17.4859 21.4289L15.0409 23.6378C14.8866 23.7773 14.64 23.6677 14.64 23.4597V21.4213C14.64 21.2887 14.5326 21.1813 14.4 21.1813H13.44C12.9098 21.1813 12.48 20.7515 12.48 20.2213V13.92Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.8093 8.55658L20.4681 3.80208C20.1036 3.06176 19.0536 3.05954 18.686 3.79833L16.3201 8.55283C15.9893 9.21773 16.4705 10 17.2103 10L21.9173 10C22.6553 10 23.1365 9.22122 22.8093 8.55658ZM20.0785 5.00004H19.0832L19.0833 7.50004H20.0785V5.00004ZM19.5808 9.00004C19.3061 9.00004 19.0832 8.77593 19.0832 8.49891C19.0832 8.22228 19.3061 7.99777 19.5808 7.99777C19.8555 7.99777 20.0785 8.22228 20.0785 8.49891C20.0785 8.77593 19.8555 9.00004 19.5808 9.00004Z"
                        })]
                    })
                }, r.ThreadIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("811513"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, r.GroupIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("876726"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: r,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: a
                        })
                    })
                }, r.PlayIcon, void 0, {
                    size: 16
                })
        },
        745183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("782926"),
                i = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M22.545 4.91992V3.91992C22.545 2.79992 21.57 1.91992 20.52 1.91992C19.47 1.91992 18.52 2.79992 18.52 3.91992V4.91992H17.76C17.6275 4.91992 17.52 5.02737 17.52 5.15992V9.67992C17.52 9.81247 17.6275 9.91992 17.76 9.91992H23.28C23.4126 9.91992 23.52 9.81247 23.52 9.67992V5.15992C23.52 5.02737 23.4126 4.91992 23.28 4.91992H22.545ZM21.52 4.91992H19.52V3.91992C19.52 3.34849 19.9867 2.91992 20.52 2.91992C21.0533 2.91992 21.52 3.34849 21.52 3.91992V4.91992Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M15.44 6.99992C15.5725 6.99992 15.68 7.10737 15.68 7.23992V8.75992C15.68 8.89247 15.5725 8.99992 15.44 8.99992H9.41045L8.35045 14.9999H10.56V16.9999H8.00001L7.36325 20.5873C7.32088 20.826 7.11337 20.9999 6.87094 20.9999H5.88657C5.57547 20.9999 5.3399 20.7189 5.39427 20.4125L6.00001 16.9999H2.59511C2.28449 16.9999 2.04905 16.7197 2.10259 16.4137L2.27759 15.4137C2.31946 15.1745 2.52722 14.9999 2.77011 14.9999H6.35001L7.41001 8.99992H4.00511C3.69449 8.99992 3.45905 8.71969 3.51259 8.41373L3.68759 7.41373C3.72946 7.17448 3.93722 6.99992 4.18011 6.99992H7.76001L8.39677 3.41254C8.43914 3.17384 8.64664 2.99992 8.88907 2.99992H9.87344C10.1845 2.99992 10.4201 3.28099 10.3657 3.58731L9.76001 6.99992H15.44Z"
                        }), (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M13.44 12.9599C12.9098 12.9599 12.48 13.3897 12.48 13.9199V20.2212C12.48 20.7514 12.9098 21.1812 13.44 21.1812H14.4C14.5326 21.1812 14.64 21.2886 14.64 21.4212V23.4597C14.64 23.6677 14.8866 23.7772 15.0409 23.6377L17.4859 21.4289C17.6623 21.2694 17.8917 21.1812 18.1294 21.1812H22.56C23.0902 21.1812 23.52 20.7514 23.52 20.2212V13.9199C23.52 13.3897 23.0902 12.9599 22.56 12.9599H13.44Z"
                        })]
                    })
                }, r.ThreadIcon, void 0, {
                    size: 24
                })
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return g
                },
                default: function() {
                    return I
                }
            }), n("424973"), n("222007");
            var l = n("37983"),
                a = n("884691"),
                r = n("414456"),
                i = n.n(r),
                s = n("627445"),
                u = n.n(s),
                o = n("77078"),
                d = n("506885"),
                c = n("981601"),
                f = n("766274"),
                h = n("697218"),
                p = n("368121"),
                C = n("523096"),
                m = n("587974"),
                v = n("494101");
            let g = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function S(e, t) {
                let n = e instanceof f.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class E extends a.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: a,
                        extraDetail: r
                    } = this.props, i = [], s = e.length === t ? e.length : t - 1, u = this.renderMoreUsers(s), o = 0;
                    for (; o < s && o < e.length;) {
                        var d;
                        let t = null == u && null == r && o === e.length - 1,
                            s = n(e[o], t, o);
                        i.push(t ? (0, l.jsx)("div", {
                            className: v.avatarContainer,
                            children: s
                        }, S(null !== (d = e[o]) && void 0 !== d ? d : null, o)) : (0, l.jsx)(m.default, {
                            className: v.avatarContainerMasked,
                            height: a,
                            width: a,
                            mask: m.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, S(e[o], o))), o++
                    }
                    return null != r ? i.push(r) : null != u && i.push(u), i
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: r,
                        renderMoreUsers: i,
                        users: s
                    } = this.props, u = Math.min(e, s.length);
                    if (!r) {
                        if (null != n) {
                            if (n >= t) return (0, l.jsx)(a.Fragment, {
                                children: i("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, l.jsx)(a.Fragment, {
                                    children: i("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (u < s.length) {
                            let e = Math.min(s.length - u, 99);
                            return (0, l.jsx)(a.Fragment, {
                                children: i("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, l.jsx)(p.default, {
                        foreground: v.foreground,
                        className: v.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: a,
                        showUserPopout: r,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, p = n.find(e => null != e && e.id === f), C = s && null == h.default.getUser(f);
                    return (0, l.jsx)(o.Popout, {
                        position: "right",
                        preload: null == p ? void 0 : () => (0, d.default)(p.id, p.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        shouldShow: !0 === r && null != f,
                        fixed: !0,
                        renderPopout: e => (u(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, l.jsx)(c.default, {
                            ...this.props,
                            user: C && null != p ? p : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, l.jsxs)("div", {
                            className: i(e, v.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g.SIZE_24;
                                switch (e) {
                                    case g.SIZE_16:
                                        return v.size16;
                                    case g.SIZE_24:
                                        return v.size24;
                                    case g.SIZE_32:
                                        return v.size32;
                                    case g.SIZE_56:
                                        return v.size56;
                                    default:
                                        return v.size24
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
                    }, this._ref = a.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: a,
                            guildId: r,
                            size: i
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, l.jsx)("div", {
                                className: v.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % C.default.DEFAULT_AVATARS.length,
                                    t = C.default.DEFAULT_AVATARS[e];
                                return (0, l.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: v.avatar
                                })
                            }
                        }
                        let s = (0, l.jsx)("img", {
                            src: e.getAvatarURL(r, i),
                            alt: e.username,
                            className: v.avatar
                        }, e.id);
                        return a ? (0, l.jsx)(o.Clickable, {
                            className: v.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            E.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, l.jsx)("div", {
                        className: v.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: g.SIZE_24
            };
            var I = E
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return i
                },
                copy: function() {
                    return s
                }
            }), n("70102");
            var l = n("281071"),
                a = n("773336"),
                r = n("50885");
            let i = (() => {
                if (a.isPlatformEmbedded) return null != r.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function s(e) {
                return !!i && (a.isPlatformEmbedded ? (r.default.copy(e), !0) : l.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var l = n("884691"),
                a = n("446674"),
                r = n("244201"),
                i = n("471671");

            function s() {
                let {
                    windowId: e
                } = l.useContext(r.default);
                return (0, a.useStateFromStores)([i.default], () => i.default.isFocused(e), [e])
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function l(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    l = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), n.selectNodeContents(a), null == l || l.removeAllRanges(), null == l || l.addRange(n), a.focus(), a.setSelectionRange(0, e.length);
                let r = document.execCommand("copy");
                return t.removeChild(a), r
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            }), n("70102")
        }
    }
]);