(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92683"], {
        45299: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("907002"),
                i = n("669491"),
                u = n("77078"),
                r = n("659500"),
                o = n("49111"),
                d = n("782340"),
                c = n("317404"),
                f = function(e) {
                    var t;
                    let {
                        message: n,
                        errorMessage: f,
                        submitting: h,
                        onReset: C,
                        onSave: m,
                        onSaveText: g,
                        onResetText: x,
                        onSaveButtonColor: S,
                        disabled: E,
                        saveButtonTooltip: T
                    } = e, p = a.useRef(null), [{
                        spring: N
                    }, I] = (0, s.useSpring)(() => ({
                        spring: 0
                    }));
                    a.useEffect(() => {
                        function e() {
                            I({
                                spring: 1,
                                config: s.config.gentle
                            }), I({
                                spring: 0,
                                config: s.config.gentle,
                                delay: 1e3
                            })
                        }
                        return r.ComponentDispatch.subscribe(o.ComponentActions.EMPHASIZE_NOTICE, e), () => {
                            r.ComponentDispatch.unsubscribe(o.ComponentActions.EMPHASIZE_NOTICE, e)
                        }
                    }, [I]);
                    let A = N.to({
                            range: [0, 1],
                            output: [(0, u.useToken)(i.default.colors.TEXT_NORMAL).hex(), (0, u.useToken)(i.default.unsafe_rawColors.WHITE_500).hex()]
                        }),
                        j = N.to({
                            range: [0, 1],
                            output: [(0, u.useToken)(i.default.colors.BACKGROUND_FLOATING).hex(), (0, u.useToken)(i.default.colors.STATUS_DANGER).hex()]
                        }),
                        M = (0, u.useToken)(i.default.colors.TEXT_DANGER).hex();
                    return (0, l.jsx)(s.animated.div, {
                        className: c.container,
                        style: {
                            backgroundColor: j
                        },
                        children: (0, l.jsx)("div", {
                            className: c.flexContainer,
                            ref: p,
                            children: (0, l.jsxs)(u.FocusRingScope, {
                                containerRef: p,
                                children: [(0, l.jsx)("div", {
                                    className: c.shrinkingContainer,
                                    children: (0, l.jsx)(s.animated.div, {
                                        className: c.message,
                                        style: {
                                            color: null != f ? M : A
                                        },
                                        children: null !== (t = null != f ? f : n) && void 0 !== t ? t : d.default.Messages.SETTINGS_NOTICE_MESSAGE
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: c.actions,
                                    children: [null != C && (0, l.jsx)(u.Button, {
                                        className: c.resetButton,
                                        size: u.Button.Sizes.SMALL,
                                        color: u.Button.Colors.PRIMARY,
                                        look: u.Button.Looks.LINK,
                                        onClick: C,
                                        children: (0, l.jsx)(s.animated.span, {
                                            style: {
                                                color: A
                                            },
                                            children: null != x ? x : d.default.Messages.RESET
                                        })
                                    }), null != m ? (0, l.jsx)(u.Tooltip, {
                                        text: T,
                                        children: e => (0, l.jsx)(u.Button, {
                                            size: u.Button.Sizes.SMALL,
                                            color: null != S ? S : u.Button.Colors.GREEN,
                                            submitting: h,
                                            disabled: E,
                                            onClick: m,
                                            ...e,
                                            children: null != g ? g : d.default.Messages.SAVE_CHANGES
                                        })
                                    }) : null]
                                })]
                            })
                        })
                    })
                }
        },
        99637: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WebhookIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                s = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...r
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "m7.7 16.95 3.68-6.76a1 1 0 0 0-.5-1.4A3 3 0 1 1 15 6a1 1 0 1 0 2 0 5 5 0 1 0-7.85 4.1L5.95 16a2 2 0 1 0 1.78 3h8.54a2 2 0 1 0 0-2H7.73l-.02-.05Z",
                        className: u
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M13.8 6.86A2 2 0 1 0 12.16 8l4.53 6.58a1 1 0 0 0 .82.43h.5a3 3 0 1 1-1.98 5.25 1 1 0 0 0-.66-.25h-.01a1 1 0 0 0-.66 1.75A4.98 4.98 0 0 0 23 18a5 5 0 0 0-4.97-5L13.8 6.86ZM5.97 13.88a1 1 0 0 1-.72 1.21 3 3 0 1 0 2.73 5.16 1 1 0 1 1 1.33 1.5A4.98 4.98 0 0 1 1 18a5 5 0 0 1 3.75-4.84 1 1 0 0 1 1.22.72Z",
                        className: u
                    })]
                })
            }
        },
        714247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("812204"),
                u = n("685665"),
                r = n("744568"),
                o = n("208021"),
                d = n("982108"),
                c = n("305961"),
                f = n("49111"),
                h = n("973033");

            function C(e) {
                let {
                    guildId: t
                } = e, n = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(t)), {
                    AnalyticsLocationProvider: C
                } = (0, u.default)(i.default.MEMBER_SAFETY_PAGE), m = (0, s.useStateFromStores)([d.default], () => d.default.getGuildSidebarState(t), [t]), g = a.useCallback(() => {
                    o.default.closeGuildSidebar(t)
                }, [t]);
                return null != n && null != m && null != m ? (0, l.jsx)(C, {
                    children: (0, l.jsx)("div", {
                        className: h.sidebarContainer,
                        style: {
                            width: f.DEFAULT_CHAT_SIDEBAR_WIDTH
                        },
                        children: (0, l.jsx)(r.default, {
                            userId: m.details.userId,
                            guildId: m.details.guildId,
                            onClose: g
                        })
                    })
                }) : null
            }
        },
        112265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("446674"),
                r = n("77078"),
                o = n("812204"),
                d = n("685665"),
                c = n("69927"),
                f = n("994906"),
                h = n("459824"),
                C = n("41594"),
                m = n("539938"),
                g = n("393414"),
                x = n("401642"),
                S = n("982108"),
                E = n("42203"),
                T = n("923959"),
                p = n("305961"),
                N = n("18494"),
                I = n("98292"),
                A = n("155207"),
                j = n("466818"),
                M = n("914985"),
                v = n("714247"),
                R = n("565556"),
                _ = n("891222"),
                b = n("49111"),
                L = n("724210"),
                B = n("782340"),
                k = n("973033"),
                G = n("305794");

            function y(e) {
                let {
                    guild: t,
                    previousChannel: n
                } = e, s = B.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE, i = B.default.Messages.MEMBER_SAFETY_CHANNEL_TITLE;
                return (0, c.usePageTitle)({
                    location: t.name,
                    subsection: s
                }), (0, l.jsxs)(m.default, {
                    className: k.header,
                    innerClassname: k.innerHeader,
                    channelId: L.StaticChannelRoute.MEMBER_SAFETY,
                    guildId: t.id,
                    hideSearch: !0,
                    toolbar: null != n ? (0, l.jsx)(r.Button, {
                        className: k.returnButton,
                        size: r.Button.Sizes.SMALL,
                        look: r.Button.Looks.OUTLINED,
                        color: r.Button.Colors.PRIMARY,
                        onClick: () => {
                            null != n && (0, g.transitionToGuild)(t.id, n.id)
                        },
                        children: (0, l.jsx)(r.Text, {
                            className: k.returnButtonText,
                            variant: "text-xs/medium",
                            color: "none",
                            children: B.default.Messages.RETURN_TO_CHANNEL.format({
                                channelNameHook: () => null == n ? null : (0, l.jsxs)(a.Fragment, {
                                    children: [(0, l.jsx)(C.ChannelItemIcon, {
                                        className: k.returnIcon,
                                        guild: t,
                                        channel: n
                                    }), (0, l.jsx)(I.default, {
                                        children: (0, l.jsx)(r.Text, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            children: n.name
                                        })
                                    })]
                                }, n.id)
                            })
                        })
                    }) : (0, l.jsx)("div", {}),
                    children: [(0, l.jsx)(m.default.Icon, {
                        icon: A.default,
                        "aria-hidden": !0
                    }), (0, l.jsx)(m.default.Title, {
                        children: i
                    })]
                })
            }

            function F(e) {
                let {
                    guildId: t
                } = e, n = (0, u.useStateFromStores)([p.default], () => p.default.getGuild(t)), {
                    AnalyticsLocationProvider: s
                } = (0, d.default)(o.default.MEMBER_SAFETY_PAGE), c = (0, j.useCanAccessMemberSafetyPage)(t), C = (0, h.useCanAccessGuildMemberModView)(t), m = (0, u.useStateFromStores)([N.default], () => N.default.getLastSelectedChannelId(t)), I = (0, u.useStateFromStores)([E.default], () => E.default.getChannel(m)), A = a.useRef(null);
                a.useEffect(() => {
                    if (!c && null != n) {
                        var e;
                        let t = null === (e = T.default.getDefaultChannel(n.id)) || void 0 === e ? void 0 : e.id;
                        (0, g.transitionToGuild)(n.id, t)
                    }
                }, [n, c]);
                let B = (0, u.useStateFromStores)([S.default], () => null != S.default.getGuildSidebarState(t), [t]),
                    F = a.useCallback(e => {
                        C ? (0, f.openGuildMemberModViewSidebar)(e.guildId, e.userId, L.StaticChannelRoute.MEMBER_SAFETY) : (0, x.openUserProfileModal)({
                            userId: e.userId,
                            guildId: e.guildId,
                            analyticsLocation: {
                                section: b.AnalyticsSections.MEMBER_SAFETY_PAGE
                            }
                        })
                    }, [C]);
                return null != n && c ? (0, l.jsxs)(s, {
                    children: [(0, l.jsxs)("div", {
                        className: i(G.chat, k.page, {
                            [G.threadSidebarOpen]: B
                        }),
                        children: [(0, l.jsx)(y, {
                            guild: n,
                            previousChannel: I
                        }), (0, l.jsx)(r.AdvancedScroller, {
                            className: i(k.scroller),
                            ref: A,
                            children: (0, l.jsxs)("div", {
                                className: i(G.content, k.container),
                                children: [(0, l.jsx)(M.default, {
                                    guild: n
                                }), (0, l.jsx)(_.default, {
                                    guild: n,
                                    onMemberSelect: F
                                })]
                            })
                        }), (0, l.jsx)(R.default, {
                            guildId: n.id
                        })]
                    }), C && (0, l.jsx)(v.default, {
                        guildId: n.id
                    })]
                }) : null
            }
        },
        891222: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("907002"),
                r = n("65597"),
                o = n("804160"),
                d = n("178406"),
                c = n("553275"),
                f = n("691307"),
                h = n("314143"),
                C = n("721302"),
                m = n("888940");

            function g(e) {
                let {
                    guild: t
                } = e, n = (0, o.useIsMakingRequest)(t.id), a = (0, u.useSpring)({
                    height: n ? 3 : 0,
                    config: u.config.stiff
                });
                return (0, l.jsx)("div", {
                    className: m.loaderContainer,
                    children: (0, l.jsx)(u.animated.div, {
                        className: m.loaderBar,
                        style: a
                    })
                })
            }

            function x(e) {
                let {
                    guild: t,
                    className: n,
                    onPageChange: s,
                    onMemberSelect: u
                } = e, x = (0, r.default)([d.default], () => d.default.getEstimatedMemberSearchCountByGuildId(t.id), [t.id]), S = (0, o.useIsMakingRequest)(t.id), E = (0, o.useIsStillIndexing)(t.id), T = a.useCallback(e => {
                    null != e && (null == u || u(e))
                }, [u]), p = (0, c.getSearchState)(E, S, x), N = a.useRef(null), I = a.useCallback(() => {
                    var e;
                    null === (e = N.current) || void 0 === e || e.resetSearchText()
                }, []);
                return (0, l.jsxs)("div", {
                    className: i(m.mainTableContainer, n),
                    children: [(0, l.jsx)(C.default, {
                        guild: t,
                        ref: N
                    }), (0, l.jsx)(g, {
                        guild: t
                    }), (0, l.jsx)(f.default, {
                        guild: t,
                        onSelectRow: T,
                        searchState: p,
                        onResetForNewMembers: I
                    }), p !== c.SearchState.SUCCESS_STILL_INDEXING && (0, l.jsx)(h.default, {
                        guildId: t.id,
                        onPageChange: s
                    })]
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
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                u = n("458960"),
                r = n("77078"),
                o = n("866893");
            let d = {
                friction: 7,
                tension: 60
            };
            class c extends a.Component {
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
                    t.enabled ? this.animateTo(0).start(e) : u.default.stagger(250, [this.animateTo(1.3), this.animateTo(0)]).start(e)
                }
                animateTo(e) {
                    return u.default.spring(this.animation, {
                        ...d,
                        toValue: e
                    })
                }
                getAnimatedStyle() {
                    let {
                        reducedMotion: e
                    } = this.context;
                    return u.default.accelerate({
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
                    return (0, l.jsx)(u.default.div, {
                        className: i(e, o.slider),
                        style: this.getAnimatedStyle(),
                        children: t
                    })
                }
                constructor(...e) {
                    super(...e), this.animation = new u.default.Value(0)
                }
            }
            c.contextType = r.AccessibilityPreferencesContext;
            var f = c
        },
        741919: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("99637"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: s,
                        foreground: i
                    } = e;
                    return (0, l.jsxs)("svg", {
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        className: s,
                        children: [(0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M11 10.9C11 10.9 11 10.9 11 10.9V8.82929C9.83481 8.41746 9 7.30622 9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6H17C17 3.23858 14.7614 1 12 1C9.23858 1 7 3.23858 7 6C7 7.79499 7.94587 9.36906 9.36637 10.251L6.29491 16.0216C6.19867 16.0074 6.1002 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20C6.82012 20 7.52495 19.5064 7.83358 18.8H16.1664C16.475 19.5064 17.1799 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C17.1799 16 16.475 16.4936 16.1664 17.2H7.83359C7.82844 17.1882 7.82318 17.1765 7.81781 17.1648L11 10.9Z"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 6.43529 13.8609 6.8381 13.6248 7.16643L18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23C15.9497 23 14.1876 21.7659 13.416 20H15.7639C16.3132 20.6138 17.1115 21 18 21C19.6568 21 21 19.6569 21 18C21 16.3431 19.6568 15 18 15H17L12 8Z"
                        }), (0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M10.584 20C9.8124 21.7659 8.05032 23 6 23C3.23858 23 1 20.7614 1 18C1 15.2386 3.23858 13 6 13V15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C6.8885 21 7.68679 20.6138 8.23611 20H10.584Z"
                        })]
                    })
                }, s.WebhookIcon, void 0, {
                    size: 24
                })
        }
    }
]);