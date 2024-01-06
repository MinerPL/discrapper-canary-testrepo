(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["41490"], {
        327769: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d6e0ab2f94e516718aa7.svg"
        },
        278410: function(e, t, n) {
            "use strict";
            e.exports = n.p + "ca0c73b091af297f35d1.svg"
        },
        410957: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c16a806b7f3b5fc35ade.svg"
        },
        730708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "239fe09dcb288889fca7.svg"
        },
        754702: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5d2fef1f3542b417e129.svg"
        },
        602416: function(e, t, n) {
            "use strict";
            e.exports = n.p + "e06145e06880de9e47ee.svg"
        },
        822637: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("872717"),
                i = n("913144"),
                r = n("318981"),
                o = n("49111"),
                s = {
                    search(e, t) {
                        null == r.default.getResults(e, t) && (i.default.dispatch({
                            type: "INTEGRATION_QUERY",
                            integration: e,
                            query: t
                        }), l.default.get({
                            url: o.Endpoints.INTEGRATION_SEARCH("tenor"),
                            query: {
                                q: t
                            },
                            oldFormErrors: !0
                        }).then(n => {
                            i.default.dispatch({
                                type: "INTEGRATION_QUERY_SUCCESS",
                                integration: e,
                                query: t,
                                results: n.body
                            })
                        }, () => i.default.dispatch({
                            type: "INTEGRATION_QUERY_FAILURE",
                            integration: e,
                            query: t
                        })))
                    }
                }
        },
        450321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoldIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M5.42 22a.9.9 0 0 1-.91-.9V2.9c0-.5.4-.9.9-.9h7.94c1.62 0 2.93.46 3.91 1.4 1 .92 1.5 2.15 1.5 3.67 0 1.2-.28 2.17-.86 2.9a4.8 4.8 0 0 1-2.23 1.57c1.18.25 2.1.78 2.78 1.59.7.8 1.04 1.9 1.04 3.33 0 1.86-.56 3.25-1.68 4.18-1.12.9-2.7 1.36-4.75 1.36H5.42Zm6.42-12c1.84 0 2.75-.73 2.75-2.2 0-1.47-.91-2.2-2.75-2.2h-3.1V10h3.1Zm.2 8.4c2.15 0 3.22-.8 3.22-2.4 0-1.6-1.07-2.4-3.22-2.4h-3.3v4.8h3.3Z",
                        className: s
                    })
                })
            }
        },
        652397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ItalicIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M8.87 2.31A.5.5 0 0 1 9.34 2h10.92c.36 0 .6.36.47.69l-.6 1.5a.5.5 0 0 1-.47.31h-4.28l-4.17 15h4.05c.36 0 .6.36.47.69l-.6 1.5a.5.5 0 0 1-.47.31H3.74a.5.5 0 0 1-.47-.69l.6-1.5a.5.5 0 0 1 .47-.31h4.28l4.17-15H8.74a.5.5 0 0 1-.47-.69l.6-1.5Z",
                        className: s
                    })
                })
            }
        },
        429672: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QuoteIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M2.35 19.44A4.75 4.75 0 0 0 6.07 21c1.43 0 2.58-.43 3.44-1.3.9-.9 1.35-2.06 1.35-3.5 0-1.43-.43-2.58-1.3-3.45a4.63 4.63 0 0 0-3.5-1.34c.6-1.6 1.99-3.1 4.16-4.49a.8.8 0 0 0 .1-1.3l-2.68-2.2a.76.76 0 0 0-.98 0C2.89 6.78 1 10.64 1 15.02c0 1.9.45 3.38 1.35 4.42ZM14.16 19.44A4.75 4.75 0 0 0 17.88 21c1.43 0 2.58-.43 3.45-1.3.9-.9 1.34-2.06 1.34-3.5 0-1.43-.43-2.58-1.3-3.45a4.63 4.63 0 0 0-3.5-1.34c.6-1.6 1.99-3.1 4.16-4.49a.8.8 0 0 0 .1-1.3l-2.68-2.2a.76.76 0 0 0-.98 0c-3.77 3.36-5.66 7.22-5.66 11.6 0 1.9.45 3.38 1.35 4.42Z",
                        className: s
                    })
                })
            }
        },
        626625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StrikethroughIcon: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                r = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12.1 22.5c-1.8 0-3.3-.37-4.53-1.11A7.95 7.95 0 0 1 4.9 18.8a.46.46 0 0 1 .1-.6l1.38-1.16a.5.5 0 0 1 .73.12 7.44 7.44 0 0 0 1.92 2.04 5.8 5.8 0 0 0 3.22.81c1.36 0 2.42-.3 3.16-.9a3.13 3.13 0 0 0 1.14-2.6c0-1.02-.42-1.79-1.26-2.32a9.65 9.65 0 0 0-2.15-.94H2.5a.5.5 0 0 1-.5-.5v-1.5c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v1.5a.5.5 0 0 1-.5.5h-3.16l.1.15c.57.76.86 1.75.86 2.96a5.6 5.6 0 0 1-1.93 4.5c-1.29 1.1-3.04 1.64-5.27 1.64ZM5.7 8.36c.09.39.45.64.85.64h2.1c.18 0 .28-.25.15-.4a2.46 2.46 0 0 1-.56-1.66c0-.96.36-1.69 1.08-2.2a4.94 4.94 0 0 1 2.93-.78c1.11 0 2.03.22 2.75.67.62.38 1.24 1 1.86 1.82.17.23.49.28.7.1l1.22-1.02a.46.46 0 0 0 .1-.6 7.76 7.76 0 0 0-6.63-3.43c-1.23 0-2.35.22-3.36.67a5.03 5.03 0 0 0-3.3 4.86c-.01.47.03.92.12 1.33Z",
                        className: s
                    })
                })
            }
        },
        292655: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("206230"),
                d = n("491605"),
                c = n("782340"),
                f = n("491422");

            function p(e) {
                let {
                    hovered: t
                } = e, i = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                async function r() {
                    let {
                        default: e
                    } = await n.el("984138").then(n.t.bind(n, "984138", 19));
                    return e
                }
                return (0, l.jsx)(d.default, {
                    pauseAtFrame: t ? void 0 : 0,
                    importData: r,
                    shouldAnimate: t && !i,
                    className: o(f.rocket, {
                        [f.rocketHovered]: t
                    })
                })
            }

            function m(e) {
                let {
                    tabIndex: t,
                    className: n,
                    onClick: r,
                    "aria-expanded": s,
                    "aria-controls": u,
                    focusProps: d
                } = e, [m, h] = i.useState(!1);

                function E() {
                    h(!0)
                }

                function S() {
                    h(!1)
                }
                return (0, l.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.NONE,
                    tabIndex: t,
                    className: o(f.activityButton, n),
                    onMouseEnter: E,
                    onMouseOver: E,
                    onMouseLeave: S,
                    onFocus: E,
                    onBlur: S,
                    onClick: r,
                    "aria-label": c.default.Messages.SELECT_ACTIVITY,
                    "aria-expanded": s,
                    "aria-controls": u,
                    focusProps: d,
                    children: (0, l.jsx)(p, {
                        hovered: m
                    })
                })
            }
        },
        82372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showAppLauncherPopup: function() {
                    return i
                },
                dismissAppLauncherPopup: function() {
                    return r
                },
                showAppDetail: function() {
                    return o
                },
                dismissAppDetail: function() {
                    return s
                }
            });
            var l = n("913144");

            function i() {
                l.default.dispatch({
                    type: "APP_LAUNCHER_SHOW_POPUP"
                })
            }

            function r() {
                l.default.dispatch({
                    type: "APP_LAUNCHER_DISMISS_POPUP"
                })
            }

            function o(e) {
                l.default.dispatch({
                    type: "APP_LAUNCHER_SHOW_APP_DETAIL",
                    appDetail: e
                })
            }

            function s() {
                l.default.dispatch({
                    type: "APP_LAUNCHER_DISMISS_APP_DETAIL"
                })
            }
        },
        482626: function(e, t, n) {
            "use strict";
            var l, i;
            n.r(t), n.d(t, {
                CommandListSortOrder: function() {
                    return l
                }
            }), (i = l || (l = {}))[i.POPULAR = 0] = "POPULAR", i[i.ALPHABETICAL = 1] = "ALPHABETICAL"
        },
        996554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AppLauncherDesktopExperiment: function() {
                    return i
                }
            });
            var l = n("862205");
            (0, l.createExperiment)({
                kind: "user",
                id: "2023-06_app_launcher_mobile",
                label: "App Launcher - Mobile",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable the app launcher feature on mobile",
                    config: {
                        enabled: !0
                    }
                }]
            });
            let i = (0, l.createExperiment)({
                kind: "user",
                id: "2023-11_app_launcher_desktop",
                label: "App Launcher - Desktop",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable the app launcher feature on desktop",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        426969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("446674"),
                i = n("913144");
            let r = {
                showPopup: !1,
                appDetail: null
            };

            function o() {
                return r.showPopup = !1, r.appDetail = null, !0
            }
            class s extends l.default.Store {
                initialize() {}
                shouldShowPopup() {
                    return r.showPopup
                }
                getCurrentAppDetail() {
                    return r.appDetail
                }
            }
            s.displayName = "AppLauncherStore";
            var a = new s(i.default, {
                APP_LAUNCHER_SHOW_POPUP: function() {
                    return r.showPopup = !0, !0
                },
                APP_LAUNCHER_DISMISS_POPUP: o,
                APP_LAUNCHER_SHOW_APP_DETAIL: function(e) {
                    let {
                        appDetail: t
                    } = e;
                    return r.appDetail = t, !0
                },
                APP_LAUNCHER_DISMISS_APP_DETAIL: function() {
                    return r.appDetail = null, !0
                },
                CONNECTION_OPEN: o,
                LOGOUT: o,
                CHANNEL_SELECT: o,
                APPLICATION_COMMAND_SET_ACTIVE_COMMAND: o,
                APP_LAUNCHER_SET_ACTIVE_COMMAND: o
            })
        },
        381784: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("808653");
            var l = n("884691"),
                i = n("369010"),
                r = n("342564"),
                o = n("938767");

            function s(e) {
                let {
                    channel: t,
                    commands: n,
                    limit: s = n.length
                } = e, a = (0, o.useCommandContext)(t), u = (0, i.useTopCommands)(a), d = l.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]), c = l.useMemo(() => u.map(e => d[e]).filter(e => null != e).sort((e, t) => {
                    let n = r.default.getScoreWithoutLoadingLatest(a, e),
                        l = r.default.getScoreWithoutLoadingLatest(a, t);
                    return l - n
                }).slice(0, s), [u, d, a, s]);
                return c
            }
        },
        476606: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var l = n("884691"),
                i = n("446674"),
                r = n("721698"),
                o = n("349503"),
                s = n("482626"),
                a = n("49111");

            function u(e) {
                let {
                    section: t,
                    commandsByActiveSection: n
                } = e, [u, d] = l.useState(s.CommandListSortOrder.ALPHABETICAL), {
                    discoverableApplication: c,
                    fetching: f
                } = (0, i.useStateFromStoresObject)([o.default], () => {
                    let e = t.id,
                        n = o.default.getApplication(e),
                        l = !o.default.isInvalidApplication(e),
                        i = l && o.default.isFetching(e);
                    return {
                        discoverableApplication: n,
                        fetching: i
                    }
                }), p = l.useMemo(() => {
                    var e, l;
                    return null !== (l = null === (e = n.find(e => e.section.id === t.id)) || void 0 === e ? void 0 : e.data) && void 0 !== l ? l : []
                }, [n, t.id]), {
                    popularSortedCommands: m,
                    globalPopularCommandIds: h
                } = function(e) {
                    let {
                        discoverableApplication: t,
                        alphabeticalSortedCommands: n
                    } = e, i = l.useMemo(() => {
                        var e;
                        let n = null == t ? void 0 : null === (e = t.directory_entry) || void 0 === e ? void 0 : e.popular_application_command_ids;
                        return null != n ? new Set(n) : null
                    }, [t]), r = l.useMemo(() => {
                        let e = new Map;
                        return n.forEach(t => {
                            e.set(t.id, t)
                        }), e
                    }, [n]), o = l.useMemo(() => {
                        if (null == i) return n;
                        let e = [];
                        i.forEach(t => {
                            let n = r.get(t);
                            null != n && e.push(n)
                        });
                        let t = n.filter(e => !i.has(e.id));
                        return [...e, ...t]
                    }, [i, n, r]);
                    return {
                        globalPopularCommandIds: i,
                        popularSortedCommands: o
                    }
                }({
                    discoverableApplication: c,
                    alphabeticalSortedCommands: p
                }), E = null != h && h.size > 0;
                l.useEffect(() => {
                    let e = t.id;
                    r.getApplication(e, {
                        dontRefetchMs: a.TimeAsMS.DAY
                    })
                }, [t.id]), l.useEffect(() => {
                    null != h && d(s.CommandListSortOrder.POPULAR)
                }, [h]);
                let S = p;
                switch (u) {
                    case s.CommandListSortOrder.POPULAR:
                        S = m;
                        break;
                    case s.CommandListSortOrder.ALPHABETICAL:
                        S = p
                }
                return {
                    sortOrder: u,
                    setSortOrder: d,
                    commands: S,
                    canSort: E,
                    fetching: f
                }
            }
        },
        847352: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("118810"),
                a = n("446674"),
                u = n("551042"),
                d = n("77078"),
                c = n("901582"),
                f = n("244201"),
                p = n("983782"),
                m = n("659500"),
                h = n("791776"),
                E = n("82372"),
                S = n("426969"),
                g = n("105571"),
                C = n("634114"),
                T = n("49111"),
                v = n("13030"),
                y = n("652277"),
                x = i.memo(function(e) {
                    let {
                        positionTargetRef: t,
                        channel: n,
                        closeOnModalOuterClick: r = !1,
                        parentModalKey: x
                    } = e, I = i.useRef(null), N = i.useRef(null), {
                        renderWindow: _,
                        windowDispatch: A
                    } = i.useContext(f.default), R = null != x, O = (0, u.useIsModalAtTop)(null != x ? x : ""), M = () => {
                        E.dismissAppLauncherPopup()
                    }, k = i.useCallback(e => {
                        var t;
                        if (!R && (0, u.hasAnyModalOpen)() || R && !(O && r)) return;
                        let {
                            target: n
                        } = e;
                        if ((0, s.isElement)(n) && null != n.closest("." + v.CHAT_INPUT_BUTTON_CLASSNAME)) return;
                        for (;
                            (0, s.isElement)(n);) {
                            if (n === N.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                            n = n.parentNode
                        }
                        M();
                        let l = null === (t = (0, h.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                        (null == l || "BODY" === l.tagName) && m.ComponentDispatch.dispatchToLastSubscribed(T.ComponentActions.TEXTAREA_FOCUS)
                    }, [r, O, R]), b = i.useCallback(() => {
                        M()
                    }, []);
                    i.useLayoutEffect(() => (_.addEventListener("mousedown", k), _.addEventListener("contextmenu", k), A.subscribe(T.ComponentActions.POPOUT_CLOSE, b), () => {
                        _.removeEventListener("mousedown", k), _.removeEventListener("contextmenu", k), A.unsubscribe(T.ComponentActions.POPOUT_CLOSE, b)
                    }), [b, k, _, A]), (0, d.useFocusLock)(I), i.useEffect(() => {
                        (!R && (0, u.hasAnyModalOpen)() || R && !O) && M()
                    }, [O, R]);
                    let P = (0, a.useStateFromStores)([S.default], () => S.default.getCurrentAppDetail());
                    return (0, l.jsx)(c.default, {
                        section: T.AnalyticsSections.EXPRESSION_PICKER,
                        children: (0, l.jsx)(p.AppReferencePositionLayer, {
                            className: y.positionLayer,
                            reference: t,
                            position: "top",
                            align: "left",
                            spacing: 8,
                            autoInvert: !0,
                            children: e => {
                                let {
                                    isPositioned: t
                                } = e;
                                return (0, l.jsx)("section", {
                                    className: o(y.positionContainer),
                                    ref: I,
                                    role: "dialog",
                                    "aria-label": "Application Launcher",
                                    children: t ? (0, l.jsxs)("div", {
                                        className: y.drawerSizingWrapper,
                                        ref: N,
                                        children: [(0, l.jsx)("div", {
                                            className: y.resizeHandle
                                        }), (0, l.jsxs)("div", {
                                            className: y.contentWrapper,
                                            children: [(0, l.jsx)(C.default, {
                                                channel: n,
                                                isAppDetailPresent: null != P
                                            }), null != P ? (0, l.jsx)(g.default, {
                                                channel: n,
                                                appDetail: P
                                            }, P.id) : null]
                                        })]
                                    }) : null
                                })
                            }
                        })
                    })
                })
        },
        105571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("798609"),
                u = n("507217"),
                d = n("240249"),
                c = n("524768"),
                f = n("355263"),
                p = n("462274"),
                m = n("368639"),
                h = n("945330"),
                E = n("256170"),
                S = n("315102"),
                g = n("659500"),
                C = n("82372"),
                T = n("476606"),
                v = n("540843"),
                y = n("49111"),
                x = n("317041"),
                I = n("782340"),
                N = n("253072"),
                _ = n("632215");

            function A(e) {
                let {
                    channel: t,
                    command: n,
                    section: r
                } = e, o = i.useCallback(() => {
                    C.dismissAppLauncherPopup(), u.setActiveCommand({
                        channelId: t.id,
                        command: n,
                        section: r,
                        location: c.ApplicationCommandTriggerLocations.APP_LAUNCHER_COMMAND_LIST
                    }), g.ComponentDispatch.dispatch(y.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: t.id
                    })
                }, [t, n, r]);
                return (0, l.jsxs)("li", {
                    className: N.command,
                    onClick: o,
                    children: [(0, l.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        children: n.displayName
                    }), (0, l.jsx)(s.Text, {
                        variant: "text-xs/medium",
                        lineClamp: 1,
                        children: n.displayDescription
                    })]
                })
            }

            function R(e) {
                var t, n;
                let {
                    channel: r,
                    appDetail: u
                } = e, {
                    filterSection: c,
                    commandsByActiveSection: g
                } = d.useDiscovery(r, {
                    commandType: a.ApplicationCommandType.CHAT
                }, {
                    placeholderCount: 0,
                    limit: x.DISCOVERY_COMMANDS_QUERY_LIMIT,
                    includeFrecency: !0
                }), {
                    commands: y
                } = (0, T.default)({
                    section: u,
                    commandsByActiveSection: g
                });
                i.useEffect(() => {
                    c(u.id)
                }, [u.id, c]);
                let R = S.default.getApplicationIconSource({
                        id: u.id,
                        icon: u.icon,
                        bot: null === (t = u.application) || void 0 === t ? void 0 : t.bot,
                        botIconFirst: !0
                    }),
                    O = i.useCallback(() => {
                        C.dismissAppDetail()
                    }, []),
                    M = (0, s.useToken)(s.tokens.colors.BG_BASE_PRIMARY).hex(),
                    k = (0, p.default)("number" == typeof R ? "" : null == R ? void 0 : R.uri, null != M ? M : ""),
                    b = (0, f.getIconComponent)(u),
                    P = i.useMemo(() => {
                        var e, t;
                        return (0, m.parseBioReact)(null !== (t = null === (e = u.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
                    }, [null === (n = u.application) || void 0 === n ? void 0 : n.description]);
                return (0, l.jsxs)(s.ScrollerNone, {
                    className: N.container,
                    fade: !0,
                    children: [(0, l.jsx)("div", {
                        className: N.headerWhenSideCard,
                        style: {
                            backgroundColor: k
                        },
                        children: (0, l.jsx)(s.Clickable, {
                            "aria-label": I.default.Messages.CLOSE,
                            onClick: O,
                            className: N.headerCloseButton,
                            children: (0, l.jsx)(h.default, {})
                        })
                    }), (0, l.jsxs)("div", {
                        className: N.contentContainer,
                        children: [(0, l.jsxs)("div", {
                            className: N.appIcon,
                            children: [(0, l.jsx)(b, {
                                channel: r,
                                section: u,
                                width: 72,
                                height: 72
                            }), (0, l.jsx)("div", {
                                className: N.appIconBorderThingy
                            })]
                        }), (0, l.jsxs)("section", {
                            children: [(0, l.jsx)(s.Heading, {
                                className: N.appName,
                                variant: "heading-lg/bold",
                                children: u.name
                            }), (0, l.jsx)(s.Text, {
                                className: o(N.appDescription, _.markup),
                                variant: "text-sm/medium",
                                lineClamp: 3,
                                children: P
                            })]
                        }), (0, l.jsx)(v.default, {
                            commands: y,
                            channel: r
                        }), (0, l.jsxs)("div", {
                            className: N.commandListHeader,
                            children: [(0, l.jsx)(s.Heading, {
                                variant: "text-md/medium",
                                children: "All Commands"
                            }), (0, l.jsxs)(s.Text, {
                                className: N.sortSelector,
                                variant: "text-md/medium",
                                children: ["Popular", (0, l.jsx)(E.default, {})]
                            })]
                        }), (0, l.jsx)("ul", {
                            children: y.map(e => (0, l.jsx)(A, {
                                channel: r,
                                command: e,
                                section: u
                            }, e.id))
                        })]
                    })]
                })
            }
        },
        540843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("381784");

            function r(e) {
                let {
                    channel: t,
                    commands: n
                } = e, r = (0, i.default)({
                    channel: t,
                    commands: n,
                    limit: 5
                });
                return 0 === r.length ? null : (0, l.jsx)("li", {})
            }
        },
        634114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("798609"),
                u = n("240249"),
                d = n("776007"),
                c = n("810567"),
                f = n("113713"),
                p = n("968918"),
                m = n("317041"),
                h = n("440987");

            function E(e) {
                var t, n;
                let {
                    channel: r,
                    isAppDetailPresent: E
                } = e, [S, g] = i.useState(""), C = i.useCallback(() => g(""), [g]), {
                    commandsByActiveSection: T,
                    sectionDescriptors: v,
                    filterSection: y
                } = u.useDiscovery(r, {
                    commandType: a.ApplicationCommandType.CHAT
                }, {
                    placeholderCount: 0,
                    limit: m.DISCOVERY_COMMANDS_QUERY_LIMIT,
                    includeFrecency: !0
                });
                i.useEffect(() => {
                    y(m.BuiltInSectionId.FRECENCY)
                }, [y]);
                let x = null !== (n = null === (t = T[0]) || void 0 === t ? void 0 : t.data) && void 0 !== n ? n : [],
                    I = v.filter(e => e.id !== m.BuiltInSectionId.FRECENCY && e.id !== m.BuiltInSectionId.BUILT_IN),
                    N = (0, d.useSortApplicationsViaFrecency)(I);
                return (0, l.jsxs)("div", {
                    className: o(h.container, {
                        [h.appDetailVisible]: E
                    }),
                    children: [(0, l.jsx)("div", {
                        className: h.searchBarContainer,
                        children: (0, l.jsx)(c.default, {
                            placeholder: "Search Apps & Commands",
                            onChange: g,
                            query: S,
                            onClear: C,
                            size: c.default.Sizes.MEDIUM
                        })
                    }), (0, l.jsxs)(s.Scroller, {
                        className: h.scrollableContent,
                        fade: !0,
                        children: [(0, l.jsx)(f.default, {
                            channel: r,
                            commands: x,
                            sectionDescriptors: v
                        }), (0, l.jsx)(p.default, {
                            channel: r,
                            applications: N
                        })]
                    })]
                })
            }
        },
        113713: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                o = n("507217"),
                s = n("524768"),
                a = n("355263"),
                u = n("93393"),
                d = n("659500"),
                c = n("82372"),
                f = n("49111"),
                p = n("479931");

            function m(e) {
                let {
                    channel: t,
                    command: n,
                    applicationSection: u
                } = e, m = (0, a.getIconComponent)(u), h = i.useCallback(() => {
                    c.dismissAppLauncherPopup(), o.setActiveCommand({
                        channelId: t.id,
                        command: n,
                        section: u,
                        location: s.ApplicationCommandTriggerLocations.APP_LAUNCHER_DOCK
                    }), d.ComponentDispatch.dispatch(f.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                        channelId: t.id
                    })
                }, [t, n, u]);
                return (0, l.jsxs)("li", {
                    className: p.command,
                    onClick: h,
                    children: [(0, l.jsx)(m, {
                        className: p.applicationIcon,
                        channel: t,
                        section: u,
                        width: 36,
                        height: 36
                    }), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(r.Text, {
                            variant: "text-md/semibold",
                            children: n.name
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: u.name
                        })]
                    })]
                })
            }

            function h(e) {
                let {
                    channel: t,
                    commands: n,
                    sectionDescriptors: o
                } = e, s = i.useMemo(() => n.map(e => {
                    let n = o.find(t => t.id === e.applicationId);
                    return null == n ? null : (0, l.jsx)(m, {
                        channel: t,
                        command: e,
                        applicationSection: n
                    }, e.id)
                }), [t, n, o]);
                return 0 === n.length ? null : (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)(r.Text, {
                        className: p.commandListHeading,
                        variant: "text-sm/bold",
                        color: "text-muted",
                        children: [(0, l.jsx)(u.default, {
                            className: p.commandListHeadingIcon,
                            height: 16,
                            width: 16
                        }), "Recent slash commands"]
                    }), (0, l.jsx)("ul", {
                        className: p.commandList,
                        children: s
                    })]
                })
            }
        },
        968918: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                o = n("577776"),
                s = n("77078"),
                a = n("355263"),
                u = n("368639"),
                d = n("82372"),
                c = n("426969"),
                f = n("590144");

            function p(e) {
                var t;
                let {
                    channel: n,
                    applicationSection: p
                } = e, m = (0, a.getIconComponent)(p), h = i.useMemo(() => {
                    var e, t;
                    return (0, u.parseBioReactWithoutScrolling)(null !== (t = null === (e = p.application) || void 0 === e ? void 0 : e.description) && void 0 !== t ? t : "")
                }, [null === (t = p.application) || void 0 === t ? void 0 : t.description]), E = (0, r.useStateFromStores)([c.default], () => c.default.getCurrentAppDetail()), S = i.useCallback(e => {
                    e.stopPropagation(), (null == E ? void 0 : E.id) === p.id ? d.dismissAppDetail() : d.showAppDetail(p)
                }, [p, E]);
                return (0, l.jsxs)("li", {
                    className: f.application,
                    onClick: S,
                    children: [(0, l.jsx)(m, {
                        className: f.applicationIcon,
                        channel: n,
                        section: p,
                        width: 32,
                        height: 32
                    }), (0, l.jsxs)("div", {
                        className: f.applicationDetails,
                        children: [(0, l.jsx)(s.Heading, {
                            variant: "heading-md/medium",
                            children: p.name
                        }), (0, l.jsx)(o.Text, {
                            className: f.applicationDescription,
                            variant: "text-xs/medium",
                            color: "text-muted",
                            lineClamp: 1,
                            children: h
                        })]
                    })]
                })
            }

            function m(e) {
                let {
                    channel: t,
                    applications: n
                } = e, r = n.slice(0, 50), s = i.useMemo(() => r.map(e => (0, l.jsx)(p, {
                    channel: t,
                    applicationSection: e
                }, e.id)), [t, r]);
                return 0 === r.length ? null : (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(o.Text, {
                        className: f.listHeading,
                        variant: "text-sm/semibold",
                        children: "Server Apps"
                    }), (0, l.jsx)("ul", {
                        className: f.applicationList,
                        children: s
                    })]
                })
            }
        },
        343952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateOptionContent: function() {
                    return a
                }
            }), n("222007");
            var l = n("118200"),
                i = n("524768"),
                r = n("810065"),
                o = n("317041"),
                s = n("782340");

            function a(e) {
                let {
                    option: t,
                    content: n,
                    guildId: a,
                    channelId: u,
                    allowEmptyValues: d,
                    commandOrigin: c = i.CommandOrigin.CHAT
                } = e, f = null != n ? (0, l.getString)({
                    content: n
                }, "content").trim() : "", p = t.required, m = null != n, h = "" === f;
                if (!m) return p ? {
                    success: !1,
                    error: s.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
                } : {
                    success: !0
                };
                if (h) return d ? {
                    success: !0
                } : p ? {
                    success: !1,
                    error: s.default.Messages.COMMAND_VALIDATION_REQUIRED_ERROR
                } : {
                    success: !1,
                    error: (0, o.getValidationErrorText)(t)
                };
                let E = n.length > 1 ? {
                        type: "text",
                        text: f
                    } : n[0],
                    S = (0, r.default)[t.type](E, t, u, a, c);
                return !S.success && null == S.error && (S.error = (0, o.getValidationErrorText)(t)), S
            }
        },
        810065: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("798609"),
                i = n("118851"),
                r = n("915639"),
                o = n("585722"),
                s = n("246598"),
                a = n("118200"),
                u = n("389153"),
                d = n("317041"),
                c = n("782340");
            let f = {
                    [l.ApplicationCommandOptionType.SUB_COMMAND]: () => ({
                        success: !1
                    }),
                    [l.ApplicationCommandOptionType.SUB_COMMAND_GROUP]: () => ({
                        success: !1
                    }),
                    [l.ApplicationCommandOptionType.STRING]: (e, t, n) => {
                        var i, r, o;
                        let a = null === (i = function(e) {
                            switch (e.type) {
                                case "emoji":
                                    return e.surrogate;
                                case "text":
                                    return e.text
                            }
                        }(e)) || void 0 === i ? void 0 : i.trim();
                        if (t.autocomplete) {
                            let e = s.default.getAutocompleteLastChoices(n, t.name);
                            null != e && (a = String(null !== (o = null === (r = e.find(e => e.name === a)) || void 0 === r ? void 0 : r.value) && void 0 !== o ? o : a))
                        }
                        return null == t.choices || null != a && t.choices.map(e => e.displayName).includes(a) ? t.type === l.ApplicationCommandOptionType.STRING && (void 0 !== t.minLength || void 0 !== t.maxLength) ? void 0 !== a ? function(e, t, n) {
                            if (void 0 !== t.minLength && e.length < t.minLength || void 0 !== t.maxLength && e.length > t.maxLength) {
                                if (void 0 !== t.maxLength && void 0 !== t.minLength && t.minLength === t.maxLength) return {
                                    success: !1,
                                    error: n.exactRangeErrorMessage.format({
                                        value: h(t.minLength)
                                    })
                                };
                                if (void 0 !== t.maxLength && void 0 !== t.minLength) return {
                                    success: !1,
                                    error: n.rangeErrorMessage.format({
                                        minimum: h(t.minLength),
                                        maximum: h(t.maxLength)
                                    })
                                };
                                else if (void 0 !== t.minLength) return {
                                    success: !1,
                                    error: n.minErrorMessage.format({
                                        minimum: h(t.minLength)
                                    })
                                };
                                else if (void 0 !== t.maxLength) return {
                                    success: !1,
                                    error: n.maxErrorMessage.format({
                                        maximum: h(t.maxLength)
                                    })
                                }
                            }
                            return {
                                success: !0
                            }
                        }(a, t, {
                            exactRangeErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_EXACT_RANGE_ERROR,
                            rangeErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_RANGE_ERROR,
                            minErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_MINIMUM_ERROR,
                            maxErrorMessage: c.default.Messages.COMMAND_VALIDATION_STRING_MAXIMUM_ERROR
                        }) : {
                            success: !0
                        } : {
                            success: !0
                        } : {
                            success: !1
                        }
                    },
                    [l.ApplicationCommandOptionType.BOOLEAN]: e => {
                        if ("text" !== e.type) return {
                            success: !1
                        };
                        let t = e.text.trim();
                        return {
                            success: d.BOOLEAN_CHOICES.map(e => e.displayName.toLowerCase()).includes(t.toLowerCase())
                        }
                    },
                    [l.ApplicationCommandOptionType.INTEGER]: (e, t, n) => {
                        if ("text" !== e.type || t.type !== l.ApplicationCommandOptionType.INTEGER) return {
                            success: !1
                        };
                        let i = e.text.trim();
                        if (0 === i.length) return {
                            success: !1
                        };
                        if (null != t.choices) return t.choices.map(e => e.displayName).includes(i) ? {
                            success: !0
                        } : {
                            success: !1
                        };
                        let o = s.default.getAutocompleteLastChoices(n, t.name);
                        if (null != o && o.map(e => e.displayName).includes(i)) return {
                            success: !0
                        };
                        let u = Number(a.normalizeNumericString(r.default.locale, i));
                        return !isNaN(u) && Number.isInteger(u) && Number.isSafeInteger(u) ? m(u, t, c.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR) : {
                            success: !1
                        }
                    },
                    [l.ApplicationCommandOptionType.NUMBER]: (e, t, n) => {
                        if ("text" !== e.type || t.type !== l.ApplicationCommandOptionType.NUMBER) return {
                            success: !1
                        };
                        let i = e.text.trim();
                        if (0 === i.length) return {
                            success: !1
                        };
                        if (null != t.choices) return t.choices.map(e => e.displayName).includes(i) ? {
                            success: !0
                        } : {
                            success: !1
                        };
                        let o = s.default.getAutocompleteLastChoices(n, t.name);
                        if (null != o && o.map(e => e.displayName).includes(i)) return {
                            success: !0
                        };
                        let u = Number(a.normalizeNumericString(r.default.locale, i));
                        return isNaN(u) || u > Number.MAX_SAFE_INTEGER || u < Number.MIN_SAFE_INTEGER ? {
                            success: !1
                        } : m(u, t, c.default.Messages.COMMAND_VALIDATION_NUMBER_RANGE_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MINIMUM_ERROR, c.default.Messages.COMMAND_VALIDATION_NUMBER_MAXIMUM_ERROR)
                    },
                    [l.ApplicationCommandOptionType.USER]: (e, t, n, l) => {
                        if ("text" !== e.type) return {
                            success: "userMention" === e.type
                        };
                        {
                            if ((0, u.isSnowflake)(e.text)) return {
                                success: !0
                            };
                            let t = (0, i.resolveApplicationCommandOption)(e.text, l, n, {
                                allowRoles: !1
                            });
                            return {
                                success: (null == t ? void 0 : t.type) === "userMention"
                            }
                        }
                    },
                    [l.ApplicationCommandOptionType.CHANNEL]: (e, t, n, l) => {
                        if ("text" !== e.type) return {
                            success: "channelMention" === e.type
                        };
                        {
                            if ((0, u.isSnowflake)(e.text)) return {
                                success: !0
                            };
                            let t = (0, i.resolveApplicationCommandOption)(e.text, l, n);
                            return {
                                success: (null == t ? void 0 : t.type) === "channelMention"
                            }
                        }
                    },
                    [l.ApplicationCommandOptionType.ROLE]: (e, t, n, l) => {
                        if ("text" !== e.type) return {
                            success: p(e)
                        };
                        {
                            if ((0, u.isSnowflake)(e.text)) return {
                                success: !0
                            };
                            let t = (0, i.resolveApplicationCommandOption)(e.text, l, n, {
                                allowUsers: !1
                            });
                            return {
                                success: (null == t ? void 0 : t.type) === "roleMention"
                            }
                        }
                    },
                    [l.ApplicationCommandOptionType.MENTIONABLE]: (e, t, n, l) => {
                        if ("text" !== e.type) return {
                            success: "userMention" === e.type || p(e)
                        };
                        {
                            if ((0, u.isSnowflake)(e.text)) return {
                                success: !0
                            };
                            let t = (0, i.resolveApplicationCommandOption)(e.text, l, n);
                            return {
                                success: null != t && ("userMention" === t.type || p(t))
                            }
                        }
                    },
                    [l.ApplicationCommandOptionType.ATTACHMENT]: (e, t, n, l, i) => {
                        if ("text" !== e.type) return {
                            success: !1
                        };
                        let r = o.default.getUpload(n, t.name, (0, u.getCommandAttachmentDraftType)(i));
                        return {
                            success: null != r && r.filename === e.text
                        }
                    }
                },
                p = e => "roleMention" === e.type || "textMention" === e.type && "@everyone" === e.text;

            function m(e, t, n, l, i) {
                if (null != t.minValue && e < t.minValue || null != t.maxValue && e > t.maxValue) {
                    if (null != t.maxValue && null != t.minValue) return {
                        success: !1,
                        error: n.format({
                            minimum: h(t.minValue),
                            maximum: h(t.maxValue)
                        })
                    };
                    if (null != t.minValue) return {
                        success: !1,
                        error: l.format({
                            minimum: h(t.minValue)
                        })
                    };
                    else if (null != t.maxValue) return {
                        success: !1,
                        error: i.format({
                            maximum: h(t.maxValue)
                        })
                    }
                }
                return {
                    success: !0
                }
            }

            function h(e) {
                return e.toLocaleString(c.default.getLocale(), {
                    useGrouping: !1
                })
            }
            var E = f
        },
        228226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("272030"),
                a = n("406291"),
                u = n("782340"),
                d = n("755203");

            function c(e) {
                var t;
                let r, c, f, {
                        className: p,
                        activeCommand: m,
                        activeOption: h,
                        optionStates: E
                    } = e,
                    S = i.useCallback(e => {
                        var t;
                        let i = null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id;
                        if (null == i) {
                            e.preventDefault();
                            return
                        }(0, s.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("443070").then(n.bind(n, "443070"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                id: i,
                                label: u.default.Messages.COPY_ID_COMMAND
                            })
                        })
                    }, [null == m ? void 0 : null === (t = m.rootCommand) || void 0 === t ? void 0 : t.id]);
                if (null == m) return null;
                if (null != h) {
                    let e = E[h.name].lastValidationResult;
                    r = h.displayName, c = h.displayDescription, f = (null == e ? void 0 : e.success) ? null : null == e ? void 0 : e.error
                } else r = "".concat(a.COMMAND_SENTINEL).concat(m.displayName), c = m.displayDescription, f = null;
                return (0, l.jsxs)("div", {
                    className: o(p, d.bar),
                    onContextMenu: S,
                    children: [(0, l.jsx)("span", {
                        className: d.name,
                        children: r
                    }), null != f ? (0, l.jsx)("span", {
                        className: d.error,
                        children: f
                    }) : (0, l.jsx)("span", {
                        className: d.description,
                        children: c
                    })]
                })
            }
        },
        529190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ITEM_HEIGHT: function() {
                    return b
                },
                default: function() {
                    return U
                }
            }), n("222007"), n("808653");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n.n(s),
                u = n("96386"),
                d = n("798609"),
                c = n("716241"),
                f = n("296141"),
                p = n("986632"),
                m = n("45961"),
                h = n("515059"),
                E = n("501536"),
                S = n("124299"),
                g = n("476765"),
                C = n("507217"),
                T = n("240249"),
                v = n("972620"),
                y = n("524768"),
                x = n("389153"),
                I = n("586450"),
                N = n("41884"),
                _ = n("355263"),
                A = n("317041"),
                R = n("49111"),
                O = n("782340"),
                M = n("253184"),
                k = n("327769");
            let b = 56,
                P = [8, 8, 0, 8],
                L = a.debounce(() => {
                    (0, c.trackWithMetadata)(R.AnalyticEvents.APPLICATION_COMMAND_BROWSER_SCROLLED)
                }, 300);
            var U = i.forwardRef(function(e, t) {
                let {
                    channel: n,
                    canOnlyUseTextCommands: r
                } = e, s = i.useRef(!1), a = i.useRef(0), [U, D] = i.useState(0), w = i.useRef(null), [B, H] = i.useState(!1), F = p.ApplicationCommandDiscoveryPickerStore.useStore(e => e.activeCategoryIndex);
                i.useEffect(() => {
                    (0, c.trackWithMetadata)(R.AnalyticEvents.APPLICATION_COMMAND_BROWSER_OPENED)
                }, []);
                let {
                    sectionDescriptors: G,
                    activeSections: K,
                    commandsByActiveSection: V,
                    hasMoreAfter: W,
                    commands: Y,
                    filteredSectionId: q,
                    scrollDown: z,
                    filterSection: Q
                } = T.useDiscovery(n, {
                    commandType: d.ApplicationCommandType.CHAT,
                    builtIns: r ? v.BuiltInCommandFilter.ONLY_TEXT : v.BuiltInCommandFilter.ALLOW,
                    applicationCommands: !r
                }, {
                    placeholderCount: 7,
                    limit: A.DISCOVERY_COMMANDS_QUERY_LIMIT,
                    includeFrecency: !0
                }), X = (0, m.useSynchronizedActiveCategoryIndexForScrollPosition)({
                    activeCategoryIndex: F,
                    isScrolling: s,
                    listRef: w,
                    onActiveCategoryIndexChange: e => {
                        let t = K[e];
                        if (null != t) {
                            let e = G.findIndex(e => e.id === t.id);
                            p.ApplicationCommandDiscoveryPickerStore.setActiveCategoryIndex(e)
                        }
                    },
                    scrollOffset: 20,
                    searchQuery: ""
                }), Z = e => {
                    let t = K.length,
                        n = V.reduce((e, t) => e + t.data.length, 0) - (W ? 7 : 0),
                        l = 48 * t + n * b - 512;
                    W && e + 420 > l && z(), X(e), L(), a.current = e
                };
                i.useEffect(() => {
                    Z(a.current)
                }, [Y]);
                let J = i.useCallback(e => {
                        let t = e === K.length - 1;
                        return t && !W ? 0 : 16
                    }, [K.length, W]),
                    $ = V.map(e => e.data.length);
                i.useEffect(() => {
                    null != w.current && B && null != U && w.current.scrollRowIntoView(U)
                }, [B, U]), i.useLayoutEffect(() => {
                    if (null != q) {
                        var e;
                        null === (e = w.current) || void 0 === e || e.scrollToSectionTop(0)
                    }
                }, [Y, q]);
                let ee = i.useCallback(e => {
                        if (e.id === q || e.id === A.BuiltInSectionId.FRECENCY) {
                            var t;
                            Q(null), null === (t = w.current) || void 0 === t || t.scrollToSectionTop(0)
                        } else Q(e.id)
                    }, [Q, q]),
                    et = i.useCallback((e, t, l) => {
                        C.setActiveCommand({
                            channelId: n.id,
                            command: e,
                            section: t,
                            location: y.ApplicationCommandTriggerLocations.DISCOVERY,
                            triggerSection: l
                        })
                    }, [n.id]);
                i.useImperativeHandle(t, () => ({
                    onTabOrEnter: e => {
                        if (null == U) return !e && (D(0), !0);
                        if (null == U) return !1;
                        let t = 0,
                            n = 0;
                        for (let e of V)
                            if (t = n, U < (n += e.data.length)) {
                                let n = e.data[U - t],
                                    l = G.find(e => e.id === n.applicationId);
                                et(n, l, (0, x.getCommandTriggerSection)(e.section));
                                break
                            } return !0
                    },
                    onMoveSelection: e => {
                        if (0 === Y.length) return !0;
                        let t = W ? 7 : 0,
                            n = Y.length + t,
                            l = null == U ? 0 : U + e;
                        return l >= n ? l = n - 1 : l < 0 && (l = 0), D(l), H(!0), !0
                    }
                }), [Y.length, V, W, G, et, U]);
                let en = i.useCallback(e => {
                        let t = K[e];
                        if (null == t) return null;
                        let i = (0, _.getIconComponent)(t),
                            r = (0, l.jsx)(i, {
                                channel: n,
                                section: t,
                                width: 16,
                                height: 16,
                                padding: 0
                            });
                        return (0, l.jsx)(h.default, {
                            className: M.categoryHeader,
                            icon: r,
                            children: t.name
                        }, e)
                    }, [n, K]),
                    el = i.useCallback((e, t) => {
                        let n = e === K.length - 1,
                            i = K[e],
                            {
                                data: r
                            } = V[e];
                        return (0, l.jsxs)("ul", {
                            role: "group",
                            "aria-label": i.name,
                            className: o(M.categorySection, {
                                [M.categorySectionLast]: n
                            }),
                            children: [t, 0 === r.length && (0, l.jsx)(u.default, {
                                message: O.default.Messages.APPLICATION_COMMAND_NO_PERMISSIONS.format({
                                    applicationName: i.name
                                }),
                                noResultsImageURL: k,
                                className: M.noSearchResults
                            })]
                        }, e)
                    }, [K, V]),
                    ei = i.useCallback((e, t) => {
                        var i;
                        let r = V[t.sectionIndex],
                            o = r.data[t.sectionRowIndex],
                            s = "".concat(r.section.id, ":").concat(null !== (i = null == o ? void 0 : o.id) && void 0 !== i ? i : e);
                        if (null == o || r.section.id !== o.applicationId && r.section.id !== A.BuiltInSectionId.FRECENCY || o.inputType === y.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(N.default, {}, s);
                        let a = G.find(e => e.id === o.applicationId);
                        return (0, l.jsx)(E.default.NewCommand, {
                            index: e,
                            command: o,
                            channel: n,
                            className: M.itemWrapper,
                            selected: U === e,
                            showImage: r.section.id !== o.applicationId,
                            section: a,
                            onClick: () => et(o, a, (0, x.getCommandTriggerSection)(r.section)),
                            onHover: () => {
                                D(null), H(!1)
                            }
                        }, s)
                    }, [n, V, et, G, U]),
                    er = (0, g.useUID)();
                return (0, f.useChannelEditorPopup)(er, !0, (0, E.getAutocompleteRowId)(U)), i.useEffect(() => () => {
                    (0, f.dismissChannelEditorPopup)()
                }, []), (0, l.jsxs)(E.default, {
                    id: er,
                    className: M.outerWrapper,
                    innerClassName: M.wrapper,
                    onMouseDown: j,
                    children: [(0, l.jsx)(I.default, {
                        className: M.rail,
                        channel: n,
                        sections: G,
                        filteredSectionId: q,
                        activeCategoryIndex: F,
                        onSectionClick: ee,
                        applicationCommandListRef: w
                    }), (0, l.jsx)(S.default, {
                        role: "listbox",
                        className: M.list,
                        listPadding: P,
                        onScroll: Z,
                        renderRow: ei,
                        renderSection: el,
                        renderSectionHeader: en,
                        rowCount: K.length,
                        rowCountBySection: $,
                        rowHeight: b,
                        sectionHeaderHeight: 32,
                        sectionMarginBottom: J,
                        ref: w,
                        stickyHeaders: !0
                    })]
                })
            });

            function j(e) {
                e.preventDefault()
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("587974"),
                a = n("315102"),
                u = n("524768"),
                d = n("616674"),
                c = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: r,
                    height: f,
                    className: p,
                    selectable: m = !1,
                    onFocus: h,
                    onBlur: E,
                    onMouseOver: S,
                    onMouseLeave: g,
                    ...C
                } = e, [T, v] = i.useState(!1), y = i.useCallback(() => {
                    v(!0), null == h || h()
                }, [h]), x = i.useCallback(() => {
                    v(!1), null == E || E()
                }, [E]), I = i.useCallback(() => {
                    v(!0), null == S || S()
                }, [S]), N = i.useCallback(() => {
                    v(!1), null == g || g()
                }, [g]), _ = i.useMemo(() => {
                    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return a.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: r
                        })
                    }
                    return c
                }, [t, r]);
                return (0, l.jsx)("div", {
                    ...C,
                    className: o(d.wrapper, p, {
                        [d.selectable]: m,
                        [d.selected]: m && n
                    }),
                    onFocus: y,
                    onBlur: x,
                    onMouseOver: I,
                    onMouseLeave: N,
                    children: (0, l.jsx)(s.default, {
                        className: d.mask,
                        mask: m && (n || T) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                        width: r,
                        height: f,
                        children: (0, l.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: r,
                                height: f
                            },
                            src: _
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("83910"),
                s = n("93393"),
                a = n("317041"),
                u = n("749296");
            let d = e => {
                switch (e.id) {
                    case a.BuiltInSectionId.BUILT_IN:
                        return o.default;
                    case a.BuiltInSectionId.FRECENCY:
                        return s.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: i,
                    height: o,
                    padding: s,
                    isSelected: a,
                    selectable: c = !1,
                    ...f
                } = e, p = d(t);
                return (0, l.jsx)("div", {
                    className: r(u.wrapper, n, {
                        [u.selectable]: c,
                        [u.selected]: c && a
                    }),
                    style: {
                        width: i,
                        height: o,
                        padding: null != s ? s : 0
                    },
                    children: null != p ? (0, l.jsx)(p, {
                        className: u.icon,
                        width: i,
                        height: o,
                        ...f
                    }) : null
                })
            }
        },
        586450: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("986632"),
                u = n("405607"),
                d = n("524768"),
                c = n("355263"),
                f = n("65557");
            let p = [16, 12, 8, 12];

            function m(e) {
                let {
                    className: t,
                    channel: n,
                    sections: r,
                    activeCategoryIndex: m,
                    filteredSectionId: h,
                    onSectionClick: E,
                    applicationCommandListRef: S
                } = e, g = i.useRef(null), C = i.useCallback((e, t) => {
                    var n;
                    let l = 8;
                    return (null === (n = r[t + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN && (l += 8), 32 + l
                }, [r]), T = i.useCallback((e, t) => {
                    var n;
                    if (!t) return 0 === e ? 0 : 8;
                    return (null === (n = r[e + 1]) || void 0 === n ? void 0 : n.type) === d.ApplicationCommandSectionType.BUILT_IN ? 0 : 8
                }, [r]), v = i.useCallback((e, t) => {
                    let i = r[t];
                    if (null == i) return;
                    let o = (0, c.getIconComponent)(i),
                        a = i.type === d.ApplicationCommandSectionType.BUILT_IN ? 4 : 0,
                        u = 32 - 2 * a,
                        p = (0, l.jsx)(o, {
                            channel: n,
                            section: i,
                            isSelected: null != h ? i.id === h : m === t,
                            padding: a,
                            width: u,
                            height: u,
                            selectable: !0
                        }),
                        S = i.type !== d.ApplicationCommandSectionType.BUILT_IN && t < r.length - 1 && r[t + 1].type === d.ApplicationCommandSectionType.BUILT_IN;
                    return (0, l.jsxs)("div", {
                        className: f.section,
                        children: [(0, l.jsx)(s.Tooltip, {
                            text: i.name,
                            position: "right",
                            children: e => {
                                let {
                                    onClick: t,
                                    ...n
                                } = e;
                                return (0, l.jsx)(s.Clickable, {
                                    "aria-label": i.name,
                                    onClick: () => {
                                        E(i), null == t || t()
                                    },
                                    ...n,
                                    children: p
                                })
                            }
                        }), S ? (0, l.jsx)("hr", {
                            className: f.builtInSeparator
                        }) : null]
                    }, i.id)
                }, [m, n, E, r, h]);
                return 0 === r.length ? null : (0, l.jsx)("div", {
                    className: o(t, f.wrapper),
                    children: (0, l.jsx)(u.default, {
                        categoryListRef: g,
                        expressionsListRef: S,
                        store: a.ApplicationCommandDiscoveryPickerStore,
                        categories: r,
                        className: f.list,
                        renderCategoryListItem: v,
                        rowCount: r.length,
                        categoryHeight: C,
                        listPadding: p,
                        getScrollOffsetForIndex: T
                    })
                })
            }
        },
        596182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("563911"),
                u = n("258078"),
                d = n("286217"),
                c = n("355263"),
                f = n("406291"),
                p = n("782340"),
                m = n("333209");

            function h(e, t, n) {
                return (0, l.jsx)(d.default, {
                    className: m.option,
                    name: e.displayName,
                    state: t,
                    onClick: n
                }, e.name)
            }

            function E(e) {
                let {
                    command: t,
                    optionStates: n,
                    onOptionClick: r
                } = e, {
                    requiredOptions: o,
                    setOptionalOptions: a,
                    unsetOptionalOptions: d
                } = i.useMemo(() => {
                    var e, l, i, r;
                    let o = null !== (i = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== i ? i : [],
                        s = null !== (r = null === (l = t.options) || void 0 === l ? void 0 : l.filter(e => !e.required)) && void 0 !== r ? r : [],
                        a = s.filter(e => {
                            var t;
                            return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue
                        }),
                        u = s.filter(e => {
                            var t;
                            return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue)
                        });
                    return {
                        requiredOptions: o,
                        setOptionalOptions: a,
                        unsetOptionalOptions: u
                    }
                }, [t.options, n]), c = (0, l.jsx)("div", {
                    className: m.optionalNames,
                    children: d.map(e => (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        children: e.displayName
                    }, e.name))
                }), f = o.map(e => h(e, null == n ? void 0 : n[e.name], r)), E = a.length > 0 ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(s.Heading, {
                        className: m.optionalHeader,
                        variant: "heading-deprecated-12/semibold",
                        children: p.default.Messages.COMMANDS_OPTIONAL_HEADER
                    }), a.map(e => h(e, null == n ? void 0 : n[e.name], r))]
                }) : null, S = d.length > 0 ? (0, l.jsx)(s.Tooltip, {
                    text: c,
                    "aria-label": !1,
                    delay: 200,
                    children: e => (0, l.jsx)(u.default, {
                        className: m.optionalCount,
                        color: u.default.Colors.MUTED,
                        ...e,
                        children: 0 === a.length ? p.default.Messages.COMMANDS_OPTIONAL_COUNT.format({
                            count: d.length
                        }) : p.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                            count: d.length
                        })
                    })
                }) : null;
                return (0, l.jsxs)(l.Fragment, {
                    children: [f, null != E || null != S ? (0, l.jsxs)("div", {
                        className: m.optionals,
                        children: [E, S]
                    }) : null]
                })
            }

            function S(e) {
                var t, n, r;
                let s, {
                        command: u,
                        activeOptionName: d,
                        channel: p,
                        showOptions: h,
                        showImage: S,
                        optionStates: g,
                        onOptionClick: C,
                        section: T,
                        isSelectable: v = !0
                    } = e,
                    y = i.useMemo(() => {
                        var e;
                        return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === d)
                    }, [d, u]),
                    x = null != d ? null == g ? void 0 : g[d] : null;
                s = null != x && (null === (t = x.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = x.lastValidationResult.error) && void 0 !== n ? n : "" : null;
                let I = S && null != T ? (0, c.getIconComponent)(T) : null;
                return (0, l.jsxs)("div", {
                    className: o(m.wrapper, v ? null : m.disabled),
                    children: [null != I ? (0, l.jsx)(I, {
                        className: m.image,
                        channel: p,
                        section: T,
                        width: 32,
                        height: 32
                    }) : null, (0, l.jsxs)("div", {
                        className: m.infoWrapper,
                        children: [(0, l.jsxs)("div", {
                            className: m.usageWrapper,
                            children: [(0, l.jsx)(a.AutocompleteRowHeading, {
                                className: m.title,
                                children: f.COMMAND_SENTINEL + u.displayName
                            }), h ? (0, l.jsx)(E, {
                                command: u,
                                optionStates: g,
                                onOptionClick: C
                            }) : null]
                        }), (0, l.jsx)(a.AutocompleteRowSubheading, {
                            className: o(m.description, null != s ? m.error : null),
                            children: null !== (r = null != s ? s : null == y ? void 0 : y.displayDescription) && void 0 !== r ? r : u.displayDescription
                        })]
                    }), (0, l.jsx)(a.AutocompleteRowContentSecondary, {
                        className: m.source,
                        children: null == T ? void 0 : T.name
                    })]
                })
            }
        },
        286217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("77078"),
                s = n("258078"),
                a = n("504515");

            function u(e) {
                var t;
                let {
                    name: n,
                    className: i,
                    state: u,
                    isInline: d,
                    onClick: c
                } = e, f = null, p = s.default.Colors.HEADER_PRIMARY;
                (null == u ? void 0 : u.isActive) && !d ? f = a.active : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? f = a.error : (null == u ? void 0 : u.hasValue) && !d && (f = a.set);
                let m = (0, l.jsx)(s.default, {
                    size: d ? s.default.Sizes.SIZE_16 : s.default.Sizes.SIZE_14,
                    color: p,
                    className: r(a.option, {
                        [a.inline]: d
                    }, f, i),
                    children: n + (d ? ":" : "")
                });
                return null == c ? m : (0, l.jsx)(o.Clickable, {
                    className: a.clickable,
                    onClick: () => c(n),
                    children: m
                })
            }
        },
        41884: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("917351"),
                o = n.n(r),
                s = n("355263"),
                a = n("406122"),
                u = e => {
                    let {
                        showImage: t
                    } = e, {
                        usageWidth: n,
                        descriptionWidth: r,
                        sourceWidth: u
                    } = i.useMemo(() => ({
                        usageWidth: o.random(60, 120),
                        descriptionWidth: o.random(200, 600),
                        sourceWidth: o.random(45, 90)
                    }), []);
                    return (0, l.jsxs)("div", {
                        className: a.wrapper,
                        children: [t ? (0, l.jsx)("div", {
                            className: a.image
                        }) : null, (0, l.jsxs)("div", {
                            className: a.infoWrapper,
                            children: [(0, l.jsx)("div", {
                                style: {
                                    maxWidth: (0, s.pxToRem)(n)
                                },
                                className: a.usageWrapper
                            }), (0, l.jsx)("div", {
                                style: {
                                    maxWidth: (0, s.pxToRem)(r)
                                },
                                className: a.description
                            })]
                        }), (0, l.jsx)("div", {
                            style: {
                                width: (0, s.pxToRem)(u)
                            },
                            className: a.source
                        })]
                    })
                }
        },
        396465: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("798609"),
                o = n("200294"),
                s = n("851745"),
                a = n("501536"),
                u = n("124299"),
                d = n("240249"),
                c = n("972620"),
                f = n("524768"),
                p = n("529190"),
                m = n("41884"),
                h = n("406291"),
                E = n("782340"),
                S = n("253184");

            function g(e) {
                let {
                    query: t,
                    onHover: n,
                    onClick: g,
                    channel: C,
                    selectedIndex: T
                } = e, v = i.useRef(null), {
                    commands: y,
                    sections: x,
                    scrollDown: I
                } = d.useQuery(C, {
                    commandType: r.ApplicationCommandType.CHAT,
                    text: t
                }, {
                    limit: s.MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY,
                    placeholderCount: s.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                    scoreMethod: c.ScoreMethod.COMMAND_OR_APPLICATION
                }), N = i.useCallback(e => {
                    var t;
                    if (null == y) return null;
                    let i = y[e],
                        r = null !== (t = null == i ? void 0 : i.id) && void 0 !== t ? t : e;
                    if (null == i || i.inputType === f.ApplicationCommandInputType.PLACEHOLDER) return (0, l.jsx)(m.default, {}, r);
                    let o = x.find(e => e.id === i.applicationId);
                    return (0, l.jsx)(a.default.NewCommand, {
                        index: e,
                        command: i,
                        channel: C,
                        className: S.itemWrapper,
                        selected: T === e,
                        showImage: !0,
                        section: o,
                        onClick: g,
                        onHover: n
                    }, r)
                }, [C, y, x, g, n, T]);
                return null == y || 0 === y.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, o.renderHeader)({
                        titleWithQuery: E.default.Messages.COMMANDS_MATCHING,
                        titleWithoutQuery: E.default.Messages.COMMANDS,
                        query: t,
                        getQuery: e => "".concat(h.COMMAND_SENTINEL).concat(e)
                    }), (0, l.jsx)(u.default, {
                        ref: v,
                        role: "listbox",
                        className: S.list,
                        listPadding: [0, 8, 0, 8],
                        onScroll: e => {
                            if (null == y) return;
                            let t = y.length * p.ITEM_HEIGHT,
                                n = v.current.getListDimensions().height;
                            t - e - n < 9 * p.ITEM_HEIGHT && I()
                        },
                        renderRow: N,
                        rowCount: y.length,
                        rowHeight: p.ITEM_HEIGHT
                    })]
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return s
                },
                pxToRem: function() {
                    return a
                },
                getCommandQuery: function() {
                    return u
                }
            });
            var l = n("524768"),
                i = n("991630"),
                r = n("943161"),
                o = n("317041");
            let s = e => e.type === l.ApplicationCommandSectionType.BUILT_IN ? r.default : i.default;

            function a(e) {
                return "".concat(e / 16, "rem")
            }

            function u(e, t) {
                let n = t,
                    l = !1,
                    i = t.indexOf(":");
                if (i >= 0) {
                    let e = t.lastIndexOf(" ", i);
                    e >= 0 ? (t = t.substring(0, e), l = !0) : t = t.substring(0, i)
                } else t = t.substring(0, t.length);
                let r = t.split(" ", o.MAX_SUBCOMMAND_LEVEL + 1);
                return r.length > o.MAX_SUBCOMMAND_LEVEL && (l = !0, r.pop()), t = r.join(" "), (n.length > t.length || t.endsWith(" ")) && (l = !0, t = t.trimEnd()), {
                    text: t,
                    parts: r,
                    hasSpaceTerminator: l
                }
            }
        },
        776007: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSortApplicationsViaFrecency: function() {
                    return s
                }
            }), n("222007");
            var l = n("884691"),
                i = n("446674"),
                r = n("872173"),
                o = n("605393");

            function s(e) {
                l.useEffect(() => {
                    r.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []);
                let t = (0, i.useStateFromStores)([o.default], () => o.default.getApplicationFrecencyWithoutLoadingLatest()),
                    n = l.useMemo(() => {
                        let n = [...e];
                        return n.sort((e, n) => {
                            var l, i;
                            let r = (null !== (l = t.getScore(n.id)) && void 0 !== l ? l : 0) - (null !== (i = t.getScore(e.id)) && void 0 !== i ? i : 0);
                            return 0 !== r ? r : e.name.localeCompare(n.name)
                        }), n
                    }, [e, t]);
                return n
            }
        },
        829290: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useShouldShowPTONotice: function() {
                    return S
                },
                StaffPTOBar: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                o = n("913144"),
                s = n("42203"),
                a = n("26989"),
                u = n("18494"),
                d = n("697218"),
                c = n("381546"),
                f = n("782340"),
                p = n("387213");
            let m = new Set;
            class h extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (m = new Set(e))
                }
                hasId(e) {
                    return m.has(e)
                }
                getState() {
                    return [...m]
                }
            }
            h.displayName = "PTOStore", h.persistKey = "PTOStore";
            let E = new h(o.default, {}),
                S = e => (0, i.useStateFromStores)([a.default, d.default, E], () => {
                    let t = d.default.getCurrentUser();
                    if (null == t || !t.isStaff() || !e.isDM()) return !1;
                    let n = d.default.getUser(e.getRecipientId());
                    if (!(null == n ? void 0 : n.isStaff())) return !1;
                    let l = a.default.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
                    return l ? !E.hasId(n.id) && l : (m.delete(n.id) && E.emitChange(), !1)
                }),
                g = () => (0, l.jsxs)("div", {
                    className: p.bar,
                    children: [f.default.Messages.STAFF_PTO_NOTICE, (0, l.jsx)(r.Clickable, {
                        className: p.closeButton,
                        onClick: () => {
                            let e = u.default.getChannelId();
                            if (null == e) return;
                            let t = s.default.getChannel(e);
                            null != t && t.isPrivate() && !m.has(t.getRecipientId()) && (m.add(t.getRecipientId()), E.emitChange())
                        },
                        children: (0, l.jsx)(c.default, {
                            className: p.closeIcon
                        })
                    })]
                })
        },
        511104: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PREFIX_COMMAND_REGEX: function() {
                    return l
                },
                BOT_MENTION_COMMAND_REGEX: function() {
                    return i
                }
            });
            let l = /^(?:(?:(?:[A-Za-z!$%?;+.=\-~]{1,2})[@#>]{1,3})|(?:(?:[A-Za-z]{1,2})?(?:~|[!$%?;+.=-]{1,3})))[A-Za-z]/u,
                i = /^<@!?(\d+)>/u
        },
        418062: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2021-07_popout_autocomplete",
                label: "Popout Autocomplete experiment",
                defaultConfig: {
                    usePopoutAutocomplete: !1
                },
                treatments: [{
                    id: 1,
                    label: "New autocomplete style",
                    config: {
                        usePopoutAutocomplete: !0
                    }
                }]
            })
        },
        842343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("974667"),
                a = n("446674"),
                u = n("77078"),
                d = n("296141"),
                c = n("305961"),
                f = n("501536"),
                p = n("476765"),
                m = n("983782"),
                h = n("659186"),
                E = n("418062"),
                S = n("851745"),
                g = n("280214"),
                C = n("497858"),
                T = n("551221"),
                v = i.forwardRef(function(e, t) {
                    var n, r, v, y, x;
                    let {
                        channel: I,
                        type: N,
                        editorHeight: _,
                        onVisibilityChange: A
                    } = e, R = (0, p.useUID)(), O = (0, a.useStateFromStores)([c.default], () => {
                        var e;
                        return null !== (e = c.default.getGuild(I.guild_id)) && void 0 !== e ? e : null
                    }, [I.guild_id]), M = i.useRef(), [k, b, P] = (0, C.default)({
                        ...e,
                        guild: O
                    }, t, M), L = (null === (n = N.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? h.default : m.default, U = (0, f.getAutocompleteRowId)(k.selectedIndex);
                    (0, d.useChannelEditorPopup)(R, k.isVisible, U), E.default.trackExposure({
                        location: "6e9811_1"
                    });
                    let {
                        usePopoutAutocomplete: j
                    } = E.default.useExperiment({
                        location: "6e9811_2"
                    }, {
                        autoTrackExposure: !1
                    }), D = (0, g.useChannelAutocompleteLayerPosition)({
                        editorHeight: _,
                        type: N,
                        state: k,
                        isInPopoutExperiment: j
                    }), w = i.useMemo(() => null == D ? "" : String(Date.now()), [null == D ? void 0 : D.top, null == D ? void 0 : D.left, null == D ? void 0 : D.bottom, null == D ? void 0 : D.right]);
                    if (i.useEffect(() => {
                            A(k.isVisible)
                        }, [A, k.isVisible]), !k.isVisible || null == k.query || void 0 === D) return null;
                    let B = null !== (r = k.query.typeInfo.renderResults({
                        results: k.query.results,
                        selectedIndex: k.selectedIndex,
                        channel: I,
                        guild: O,
                        query: k.query.queryText,
                        options: k.query.options,
                        onHover: e => b.onResultHover(e),
                        onClick: e => b.onResultClick(e)
                    })) && void 0 !== r ? r : null;
                    if (null == B) return null;
                    let H = {
                            [T.autocompleteAttached]: null == D,
                            [T.autocompletePopout]: null != D,
                            [T.bottom]: null == D && "bottom" === e.position
                        },
                        F = 490;
                    null != D && (F = (null === (v = N.autocomplete) || void 0 === v ? void 0 : v.small) ? 200 : (null === (y = k.query) || void 0 === y ? void 0 : y.type) === S.AutocompleteOptionTypes.EMOJIS_AND_STICKERS ? 490 : 245), F = Math.min(window.innerHeight - 175, F);
                    let G = (0, l.jsx)(f.default, {
                        id: R,
                        className: o(T.autocomplete, H),
                        innerClassName: T.autocompleteInner,
                        onMouseDown: e => e.preventDefault(),
                        children: (0, l.jsx)(s.ListNavigatorProvider, {
                            navigator: P,
                            children: (0, l.jsx)(s.ListNavigatorContainer, {
                                children: e => {
                                    let {
                                        ref: t,
                                        ...n
                                    } = e;
                                    return (0, l.jsx)(u.AdvancedScrollerThin, {
                                        id: R,
                                        ref: e => {
                                            var n;
                                            t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, M.current = e
                                        },
                                        ...n,
                                        className: T.scroller,
                                        style: {
                                            maxHeight: F
                                        },
                                        role: "listbox",
                                        "aria-labelledby": (0, f.getAutocompleteTitleId)(R),
                                        children: B
                                    })
                                }
                            })
                        })
                    });
                    return null != D ? (0, l.jsx)(L, {
                        children: (0, l.jsx)(u.ReferencePositionLayer, {
                            reference: () => D,
                            positionKey: w,
                            position: null !== (x = e.position) && void 0 !== x ? x : "top",
                            align: "left",
                            spacing: 8,
                            autoInvert: !0,
                            nudgeAlignIntoViewport: !0,
                            children: () => G
                        })
                    }) : G
                })
        },
        234246: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                createInitialState: function() {
                    return f
                },
                default: function() {
                    return l
                }
            }), n("222007");
            var l, i = n("44170"),
                r = n("507217"),
                o = n("834725"),
                s = n("252931"),
                a = n("845579"),
                u = n("697218"),
                d = n("851745"),
                c = n("962254");

            function f() {
                return {
                    query: null,
                    selectedIndex: null,
                    isVisible: !1,
                    didInitialQuery: !1
                }
            }
            l = class extends i.EventEmitter {
                updateProps(e) {
                    let t = this.props.focused !== e.focused,
                        n = this.props.channel.id !== e.channel.id || this.props.activeCommandOption !== e.activeCommandOption,
                        l = !this.state.didInitialQuery || this.props.currentWord !== e.currentWord || this.props.currentWordIsAtStart !== e.currentWordIsAtStart || this.props.textValue !== e.textValue || this.props.optionText !== e.optionText;
                    if (this.props = e, n || l) this.updateResults(l, n), !this.state.didInitialQuery && (this.state = {
                        ...this.state,
                        didInitialQuery: !0
                    });
                    else if (t) {
                        let e = this.state.query;
                        this.setState({
                            isVisible: null != e && this.shouldShow(e.resultCount, e.isLoading, e.typeInfo)
                        })
                    }
                }
                setSelectedIndex(e) {
                    this.setState({
                        selectedIndex: e
                    })
                }
                onTabOrEnter(e) {
                    if (!this.state.isVisible) return !1;
                    if (null == this.state.selectedIndex) {
                        var t;
                        let n = null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo.focusMode;
                        return !e && (n === d.FocusMode.MANUAL || n === d.FocusMode.AUTO_WHEN_FILTERED) && (this.setSelectedIndex(0), !0)
                    }
                    return this.selectResult(this.state.selectedIndex, e, !0)
                }
                onMoveSelection(e) {
                    var t, n;
                    if (!this.state.isVisible) return !1;
                    if (e < 0 ? this.props.navigator.focusPreviousItem() : e > 0 && this.props.navigator.focusNextItem(), null != this.state.selectedIndex && (null === (t = this.state.query) || void 0 === t ? void 0 : t.type) === d.AutocompleteOptionTypes.COMMANDS) {
                        let e = null === (n = this.state.query.results.commands) || void 0 === n ? void 0 : n[this.state.selectedIndex];
                        null != e && r.setPreferredCommandId(this.props.channel.id, e.id)
                    }
                    return !0
                }
                onMaybeShowAutocomplete() {
                    this.emit("update")
                }
                onHideAutocomplete() {
                    let e = this.state.query;
                    null != e && this.setState({
                        isVisible: !1
                    })
                }
                onResultHover(e) {
                    this.props.navigator.setFocus(null), this.setSelectedIndex(null)
                }
                onResultClick(e) {
                    this.selectResult(e, !0)
                }
                clearQuery() {
                    this.setState({
                        query: null,
                        isVisible: !1,
                        selectedIndex: null
                    })
                }
                queryResults() {
                    this.updateResults()
                }
                isVisible() {
                    return this.state.isVisible
                }
                updateResults() {
                    var e, t;
                    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (null == this.props.editorRef.current) return;
                    let i = (0, c.getOptions)(this.props),
                        r = (0, c.findMatchingAutocompleteType)({
                            channel: this.props.channel,
                            guild: this.props.guild,
                            options: i,
                            currentWord: this.props.currentWord,
                            currentWordIsAtStart: this.props.currentWordIsAtStart,
                            textValue: this.props.textValue,
                            optionText: this.props.optionText
                        }),
                        f = i.commands !== d.CommandMode.DISABLED ? (0, c.findCommandOptionAutocompleteType)(this.props.activeCommandOption, this.props.currentWord) : null;
                    if (null == r && null != f) r = f;
                    else if (null == r || null != f && r.type !== f.type) {
                        this.clearQuery();
                        return
                    }
                    let {
                        type: p,
                        typeInfo: m,
                        query: h
                    } = r, E = l || n && ((null === (e = this.state.query) || void 0 === e ? void 0 : e.queryText) !== h || (null === (t = this.state.query) || void 0 === t ? void 0 : t.typeInfo) !== m), S = u.default.getCurrentUser(), g = (0, s.getInventoryGuildPacksUserExperimentConfig)({
                        user: S,
                        autoTrackExposure: !1
                    }).viewAndUseEnabled;
                    i.canViewAndUsePackEmoji = g;
                    let C = a.IncludeStickersInAutocomplete.getSetting();
                    i.allowStickers = i.allowStickers ? C : i.allowStickers;
                    let {
                        results: T,
                        metadata: v
                    } = m.queryResults(this.props.channel, this.props.guild, h, i, E), y = 0;
                    for (let e of Object.values(T)) Array.isArray(e) && (y += e.length);
                    let x = !0 === T.isLoading,
                        I = this.shouldShow(y, x, m),
                        N = this.state.selectedIndex;
                    !I || x ? N = null : null != N && N >= y && (N = y - 1), I && !this.state.isVisible && (0, o.trackAutocompleteOpen)(p, this.props.channel, v), this.setState({
                        query: {
                            type: p,
                            typeInfo: m,
                            queryText: h,
                            results: T,
                            resultCount: y,
                            options: i,
                            isLoading: x
                        },
                        isVisible: I,
                        selectedIndex: N
                    })
                }
                shouldShow(e, t, n) {
                    return this.props.focused && null == this.props.expressionPickerView && (e > 0 || t || n.showEmpty)
                }
                selectResult(e, t, n) {
                    var l, i, r;
                    if (!this.state.isVisible) return !1;
                    let {
                        type: s,
                        typeInfo: a,
                        results: u,
                        resultCount: c,
                        options: f
                    } = this.state.query;
                    if (e >= c) return !1;
                    let p = null === (i = a.onSelect) || void 0 === i ? void 0 : i.call(a, {
                        results: u,
                        index: e,
                        type: t ? d.SelectType.SEND : d.SelectType.INSERT,
                        options: f,
                        channel: this.props.channel,
                        tabOrEnter: n,
                        queryText: null === (l = this.state.query) || void 0 === l ? void 0 : l.queryText
                    });
                    return null != p && (0, o.trackAutocompleteSelect)(s, null !== (r = p.type) && void 0 !== r ? r : null, this.props.channel, p.metadata), !0
                }
                setState(e) {
                    for (let t in e)
                        if (e[t] !== this.state[t]) {
                            this.state = {
                                ...this.state,
                                ...e
                            }, this.emit("change", this.state);
                            return
                        }
                }
                constructor(e) {
                    super(), this.props = e, this.state = f()
                }
            }
        },
        237700: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOCOMPLETE_PRIORITY: function() {
                    return p
                },
                AUTOCOMPLETE_OPTIONS: function() {
                    return m
                }
            });
            var l = n("851745"),
                i = n("76942"),
                r = n("825871"),
                o = n("116189"),
                s = n("714343"),
                a = n("84872"),
                u = n("729079"),
                d = n("845247"),
                c = n("122270"),
                f = n("684396");
            let p = [l.AutocompleteOptionTypes.CHOICES, l.AutocompleteOptionTypes.GIFS, l.AutocompleteOptionTypes.COMMAND_OPTIONS, l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS, l.AutocompleteOptionTypes.REACTIONS, l.AutocompleteOptionTypes.CHANNELS, l.AutocompleteOptionTypes.MENTIONS, l.AutocompleteOptionTypes.COMMANDS, l.AutocompleteOptionTypes.LEGACY_COMMANDS],
                m = {
                    [l.AutocompleteOptionTypes.CHANNELS]: i.default,
                    [l.AutocompleteOptionTypes.COMMANDS]: r.default,
                    [l.AutocompleteOptionTypes.COMMAND_OPTIONS]: s.default,
                    [l.AutocompleteOptionTypes.CHOICES]: o.default,
                    [l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS]: a.default,
                    [l.AutocompleteOptionTypes.GIFS]: u.default,
                    [l.AutocompleteOptionTypes.LEGACY_COMMANDS]: d.default,
                    [l.AutocompleteOptionTypes.MENTIONS]: c.default,
                    [l.AutocompleteOptionTypes.REACTIONS]: f.default
                }
        },
        200294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderHeader: function() {
                    return o
                },
                renderAutocompleteGroup: function() {
                    return s
                }
            });
            var l = n("37983"),
                i = n("884691");
            n("41170");
            var r = n("501536");

            function o(e) {
                let {
                    titleWithQuery: t,
                    titleWithoutQuery: n,
                    query: i,
                    getQuery: o,
                    headerClassName: s,
                    headerTrailingContent: a
                } = e, u = i.length > 0 ? t.format({
                    prefix: o(i)
                }) : n;
                return (0, l.jsx)(r.default.Title, {
                    className: s,
                    title: u,
                    children: a
                }, "autocomplete-title-".concat(u))
            }

            function s(e) {
                let {
                    query: t,
                    selectedIndex: n,
                    autocompletes: r,
                    onHover: s,
                    onClick: a,
                    titleWithQuery: u,
                    titleWithoutQuery: d,
                    Component: c,
                    getProps: f,
                    getQuery: p,
                    key: m,
                    indexOffset: h = 0,
                    headerClassName: E,
                    headerTrailingContent: S,
                    footer: g
                } = e;
                if (null == g && (null == r || 0 === r.length)) return null;
                let C = null == r ? void 0 : r.map((e, t) => {
                    let l = t + h,
                        r = f(e, l);
                    return (0, i.createElement)(c, {
                        onClick: a,
                        onHover: s,
                        selected: n === l,
                        index: l,
                        ...r,
                        key: r.key
                    })
                });
                return (0, l.jsxs)(i.Fragment, {
                    children: [null != u && null != d ? o({
                        titleWithQuery: u,
                        titleWithoutQuery: d,
                        query: t,
                        getQuery: p,
                        headerClassName: E,
                        headerTrailingContent: S
                    }) : null, C, g]
                }, m)
            }
        },
        851745: function(e, t, n) {
            "use strict";
            var l, i, r, o, s, a, u, d, c, f, p, m, h, E, S, g, C, T, v, y;
            n.r(t), n.d(t, {
                MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS: function() {
                    return x
                },
                MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY: function() {
                    return I
                },
                MAX_COMMAND_AUTOCOMPLETE_RESULTS: function() {
                    return N
                },
                GlobalMentionMode: function() {
                    return l
                },
                UserMentionMode: function() {
                    return i
                },
                RoleMentionMode: function() {
                    return r
                },
                ChannelMentionMode: function() {
                    return o
                },
                ClydeMentionMode: function() {
                    return s
                },
                CommandMode: function() {
                    return a
                },
                SelectType: function() {
                    return u
                },
                AutocompleteOptionTypes: function() {
                    return d
                },
                AutocompleteSelectionTypes: function() {
                    return c
                },
                FocusMode: function() {
                    return f
                }
            });
            let x = 3,
                I = 7,
                N = 20;
            (p = l || (l = {}))[p.DENY = 0] = "DENY", p[p.ALLOW_EVERYONE = 1] = "ALLOW_EVERYONE", p[p.ALLOW_EVERYONE_OR_HERE = 2] = "ALLOW_EVERYONE_OR_HERE", (m = i || (i = {}))[m.DENY = 0] = "DENY", m[m.ALLOW_CHANNEL = 1] = "ALLOW_CHANNEL", m[m.ALLOW_GUILD = 2] = "ALLOW_GUILD", (h = r || (r = {}))[h.DENY = 0] = "DENY", h[h.ALLOW_MENTIONABLE = 1] = "ALLOW_MENTIONABLE", h[h.ALLOW_ALL = 2] = "ALLOW_ALL", (E = o || (o = {}))[E.DENY = 0] = "DENY", E[E.ALLOW_SELECTABLE = 1] = "ALLOW_SELECTABLE", (S = s || (s = {}))[S.DENY = 0] = "DENY", S[S.ALLOW = 1] = "ALLOW", (g = a || (a = {}))[g.DISABLED = 0] = "DISABLED", g[g.OLD_BUILT_INS = 1] = "OLD_BUILT_INS", g[g.NEW_TEXT_ONLY = 2] = "NEW_TEXT_ONLY", g[g.NEW = 3] = "NEW", (C = u || (u = {}))[C.INSERT = 0] = "INSERT", C[C.SEND = 1] = "SEND", (T = d || (d = {})).MENTIONS = "MENTIONS", T.CHANNELS = "CHANNELS", T.EMOJIS_AND_STICKERS = "EMOJIS_AND_STICKERS", T.REACTIONS = "REACTIONS", T.GIFS = "GIFS", T.LEGACY_COMMANDS = "LEGACY_COMMANDS", T.COMMANDS = "COMMANDS", T.COMMAND_OPTIONS = "COMMAND_OPTIONS", T.CHOICES = "CHOICES", (v = c || (c = {})).MENTION = "MENTION", v.CHANNEL = "CHANNEL", v.EMOJI = "EMOJI", v.STICKER = "STICKER", v.REACTION = "REACTION", v.GIF = "GIF", v.COMMAND = "COMMAND", v.COMMAND_OPTION = "COMMAND_OPTION", v.COMMAND_SUGGESTION = "COMMAND_SUGGESTION", v.CHOICE = "CHOICE", v.EMOJI_UPSELL = "EMOJI_UPSELL", (y = f || (f = {}))[y.AUTO = 0] = "AUTO", y[y.AUTO_WHEN_FILTERED = 1] = "AUTO_WHEN_FILTERED", y[y.MANUAL = 2] = "MANUAL"
        },
        962254: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getOptions: function() {
                    return d
                },
                findMatchingAutocompleteType: function() {
                    return f
                },
                findCommandOptionAutocompleteType: function() {
                    return p
                }
            }), n("222007"), n("70102");
            var l = n("913144"),
                i = n("798609"),
                r = n("389153"),
                o = n("149022"),
                s = n("237700"),
                a = n("851745"),
                u = n("958706");

            function d(e) {
                var t;
                let {
                    activeCommandOption: n,
                    canMentionUsers: l = !0,
                    canMentionRoles: s = !0,
                    canMentionChannels: u = !0,
                    canMentionEveryone: d,
                    canMentionClyde: c = !1,
                    useNewSlashCommands: f,
                    canOnlyUseTextCommands: p,
                    canSendStickers: m,
                    hideMentionDescription: h,
                    hidePersonalInformation: E,
                    type: S,
                    emojiIntention: g,
                    editorRef: C,
                    onSendMessage: T,
                    onSendSticker: v,
                    setValue: y
                } = e, x = {
                    mentions: {
                        channel: a.ChannelMentionMode.DENY,
                        global: a.GlobalMentionMode.DENY,
                        role: a.RoleMentionMode.DENY,
                        user: a.UserMentionMode.DENY,
                        clyde: a.ClydeMentionMode.DENY
                    },
                    commands: a.CommandMode.DISABLED,
                    allowStickers: !0 === m,
                    forNonStringCommandOption: null != n && n.type !== i.ApplicationCommandOptionType.STRING,
                    hideMentionDescription: !0 === h,
                    hidePersonalInformation: !0 === E,
                    chatInputType: S,
                    emojiIntention: g,
                    sendMessage: T,
                    sendSticker: v,
                    insertText: (e, t) => {
                        var n;
                        null === (n = C.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
                    },
                    replaceText: (e, t) => {
                        y(e, null != t ? t : (0, o.toRichValue)(e))
                    },
                    getCommandOptionValues: () => {
                        var e;
                        return null === (e = C.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
                    }
                };
                if (null != n) {
                    let e = (0, r.getApplicationCommandOptionQueryOptions)(n);
                    e.canMentionChannels && (x.mentions.channel = a.ChannelMentionMode.ALLOW_SELECTABLE), e.canMentionEveryone && (x.mentions.global = e.canMentionHere ? a.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE : a.GlobalMentionMode.ALLOW_EVERYONE), e.canMentionRoles && (x.mentions.role = e.canMentionNonMentionableRoles ? a.RoleMentionMode.ALLOW_ALL : a.RoleMentionMode.ALLOW_MENTIONABLE), e.canMentionUsers && (x.mentions.user = e.canMentionAnyGuildUser ? a.UserMentionMode.ALLOW_GUILD : a.UserMentionMode.ALLOW_CHANNEL), x.hideMentionDescription = !0
                } else u && (x.mentions.channel = a.ChannelMentionMode.ALLOW_SELECTABLE), s && (x.mentions.role = a.RoleMentionMode.ALLOW_MENTIONABLE), l && (x.mentions.user = a.UserMentionMode.ALLOW_CHANNEL), d && (x.mentions.global = a.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE), c && (x.mentions.clyde = a.ClydeMentionMode.ALLOW);
                return (null === (t = S.commands) || void 0 === t ? void 0 : t.enabled) && (f ? x.commands = p ? a.CommandMode.NEW_TEXT_ONLY : a.CommandMode.NEW : x.commands = a.CommandMode.OLD_BUILT_INS), null != n && null != n.channelTypes && (x.allowedChannelTypes = n.channelTypes), x
            }

            function c(e) {
                let {
                    type: t,
                    channel: n,
                    guild: l,
                    query: i,
                    isAtStart: r,
                    options: o
                } = e, a = s.AUTOCOMPLETE_OPTIONS[t];
                if (null != a.sentinel) {
                    if (!i.startsWith(a.sentinel)) return !1;
                    i = i.substring(a.sentinel.length)
                }
                return !!(null == a.matches || a.matches(n, l, i, r, o)) || !1
            }

            function f(e) {
                let {
                    channel: t,
                    guild: n,
                    options: i,
                    currentWord: r,
                    currentWordIsAtStart: o,
                    textValue: d,
                    optionText: f
                } = e, p = null;
                for (let e of s.AUTOCOMPLETE_PRIORITY) {
                    var m, h, E, S, g, C;
                    let T = s.AUTOCOMPLETE_OPTIONS[e];
                    if (e === a.AutocompleteOptionTypes.GIFS || e === a.AutocompleteOptionTypes.CHOICES) {
                        if (i.commands === a.CommandMode.OLD_BUILT_INS) {
                            if (c({
                                    type: e,
                                    channel: t,
                                    guild: n,
                                    query: d,
                                    isAtStart: !1,
                                    options: i
                                })) {
                                p = {
                                    type: e,
                                    typeInfo: T,
                                    query: d
                                };
                                break
                            }
                        } else if (c({
                                type: e,
                                channel: t,
                                guild: n,
                                query: f,
                                isAtStart: !1,
                                options: i
                            })) return {
                            type: e,
                            typeInfo: T,
                            query: f
                        }
                    } else if (e === a.AutocompleteOptionTypes.COMMANDS && i.commands !== a.CommandMode.OLD_BUILT_INS) {
                        if (c({
                                type: e,
                                channel: t,
                                guild: n,
                                query: d,
                                isAtStart: !0,
                                options: i
                            })) {
                            p = {
                                type: e,
                                typeInfo: T,
                                query: d.substring(null !== (h = null === (m = T.sentinel) || void 0 === m ? void 0 : m.length) && void 0 !== h ? h : 0)
                            };
                            break
                        }
                    } else if (e === a.AutocompleteOptionTypes.LEGACY_COMMANDS) {
                        if (c({
                                type: e,
                                channel: t,
                                guild: n,
                                query: d,
                                isAtStart: o,
                                options: i
                            })) {
                            p = {
                                type: e,
                                typeInfo: T,
                                query: d
                            };
                            break
                        }
                    } else if (e === a.AutocompleteOptionTypes.EMOJIS_AND_STICKERS) {
                        if (null != r && r.length > 0 && l.default.dispatch({
                                type: "EMOJI_INTERACTION_INITIATED",
                                interaction: u.EmojiInteractionPoint.AutocompleteTyped
                            }), null != r && c({
                                type: e,
                                channel: t,
                                guild: n,
                                query: r,
                                isAtStart: o,
                                options: i
                            })) {
                            p = {
                                type: e,
                                typeInfo: T,
                                query: r.substring(null !== (S = null === (E = T.sentinel) || void 0 === E ? void 0 : E.length) && void 0 !== S ? S : 0)
                            };
                            break
                        }
                    } else if (null != r && c({
                            type: e,
                            channel: t,
                            guild: n,
                            query: r,
                            isAtStart: o,
                            options: i
                        })) {
                        p = {
                            type: e,
                            typeInfo: T,
                            query: r.substring(null !== (C = null === (g = T.sentinel) || void 0 === g ? void 0 : g.length) && void 0 !== C ? C : 0)
                        };
                        break
                    }
                }
                return null == p ? null : (p.query = p.query.toLocaleLowerCase(), p)
            }

            function p(e, t) {
                let n;
                if (null == t || null == e) return null;
                if (null != e.choices || e.autocomplete) n = a.AutocompleteOptionTypes.CHOICES;
                else switch (e.type) {
                    case i.ApplicationCommandOptionType.BOOLEAN:
                        n = a.AutocompleteOptionTypes.CHOICES;
                        break;
                    case i.ApplicationCommandOptionType.CHANNEL:
                        n = a.AutocompleteOptionTypes.CHANNELS;
                        break;
                    case i.ApplicationCommandOptionType.ROLE:
                    case i.ApplicationCommandOptionType.USER:
                    case i.ApplicationCommandOptionType.MENTIONABLE:
                        n = a.AutocompleteOptionTypes.MENTIONS;
                        break;
                    default:
                        return null
                }
                let l = s.AUTOCOMPLETE_OPTIONS[n];
                return {
                    type: n,
                    typeInfo: l,
                    query: t
                }
            }
        },
        404345: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("685665"),
                o = n("563911"),
                s = n("587974"),
                a = n("599110"),
                u = n("49111"),
                d = n("646718"),
                c = n("782340"),
                f = n("104234"),
                p = e => {
                    let {
                        emojis: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, r.default)();
                    i.useEffect(() => {
                        a.default.track(u.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: d.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_INLINE,
                            location_stack: n
                        })
                    }, [n]);
                    let p = (0, l.jsx)("div", {
                        className: f.emojis,
                        children: t.slice(0, 3).map((e, t) => {
                            if ("" === e.url) return null;
                            let n = (0, l.jsx)("div", {
                                className: f.emojiBackground,
                                children: (0, l.jsx)("img", {
                                    alt: e.name,
                                    className: f.emoji,
                                    src: e.url
                                })
                            }, e.id);
                            return 2 === t ? n : (0, l.jsx)(s.default, {
                                className: f.emojiMask,
                                mask: s.default.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                                children: n
                            }, e.id)
                        })
                    });
                    return (0, l.jsxs)(o.AutocompleteRowContent, {
                        className: f.upsell,
                        children: [(0, l.jsx)(o.AutocompleteRowContentPrimary, {
                            children: (0, l.jsx)(o.AutocompleteRowHeading, {
                                children: c.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({
                                    count: t.length
                                })
                            })
                        }), (0, l.jsx)(o.AutocompleteRowContentSecondary, {
                            children: p
                        })]
                    })
                }
        },
        76942: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("843762"), n("222007");
            var l = n("298386"),
                i = n("123225"),
                r = n("679653"),
                o = n("42203"),
                s = n("923959"),
                a = n("501536"),
                u = n("25292"),
                d = n("200294"),
                c = n("851745"),
                f = n("406291"),
                p = n("724210"),
                m = n("782340");
            let h = {
                sentinel: f.CHANNEL_SENTINEL,
                matches: (e, t, n, l, i) => i.mentions.channel !== c.ChannelMentionMode.DENY && !e.isPrivate(),
                queryResults(e, t, n, l, r) {
                    let o, a, d = s.GUILD_SELECTABLE_CHANNELS_KEY;
                    return n.charAt(0) === i.AutocompleterQuerySymbols.VOICE_CHANNEL && (d = s.GUILD_VOCAL_CHANNELS_KEY, n = n.substring(1)), l.forNonStringCommandOption ? o = u.default.queryApplicationCommandChannelResults({
                        query: n,
                        channel: e,
                        channelTypes: l.allowedChannelTypes
                    }) : (o = u.default.queryChannelResults({
                        query: n,
                        channel: e,
                        type: d
                    }), null != t && (a = u.default.queryStaticRouteChannels({
                        query: n,
                        guild: t
                    }), o.channels.unshift(...a))), {
                        results: o,
                        staticRouteChannels: a
                    }
                },
                renderResults(e) {
                    let t, n, {
                            results: {
                                channels: l
                            },
                            selectedIndex: r,
                            query: s,
                            options: u,
                            onHover: c,
                            onClick: p
                        } = e,
                        h = s.charAt(0) === i.AutocompleterQuerySymbols.VOICE_CHANNEL;
                    return h ? (t = m.default.Messages.VOICE_CHANNELS_MATCHING, n = m.default.Messages.VOICE_CHANNELS, s = s.substring(1)) : u.forNonStringCommandOption ? (t = m.default.Messages.CHANNELS_MATCHING, n = m.default.Messages.CHANNELS) : (t = m.default.Messages.TEXT_CHANNELS_MATCHING, n = m.default.Messages.TEXT_CHANNELS), (0, d.renderAutocompleteGroup)({
                        query: s,
                        selectedIndex: r,
                        autocompletes: l,
                        onHover: c,
                        onClick: p,
                        titleWithQuery: t,
                        titleWithoutQuery: n,
                        Component: a.default.Channel,
                        getProps: e => ({
                            channel: e,
                            key: e.id,
                            category: o.default.getChannel(e.parent_id)
                        }),
                        getQuery: e => h ? "".concat(f.CHANNEL_SENTINEL).concat(i.AutocompleterQuerySymbols.VOICE_CHANNEL).concat(e) : "".concat(f.CHANNEL_SENTINEL).concat(e),
                        key: "channels"
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            channels: t
                        },
                        index: n,
                        options: i
                    } = e, o = t[n];
                    return i.insertText(function(e) {
                        switch (e.type) {
                            case l.ChannelTypes.PUBLIC_THREAD:
                            case l.ChannelTypes.PRIVATE_THREAD:
                            case l.ChannelTypes.ANNOUNCEMENT_THREAD:
                            case l.ChannelTypes.GUILD_VOICE:
                            case l.ChannelTypes.GUILD_STAGE_VOICE:
                            case l.ChannelTypes.GUILD_CATEGORY:
                                return '#"'.concat((0, r.escapeChannelName)(e.name), '"');
                            default:
                                let t = s.default.getTextChannelNameDisambiguations(e.guild_id)[e.id];
                                return "#".concat(null != t ? t.name : e.name)
                        }
                    }(o), function(e) {
                        return p.StaticChannelIds.has(e.id) ? "<id:".concat(e.id, ">") : "<#".concat(e.id, ">")
                    }(o)), {
                        type: c.AutocompleteSelectionTypes.CHANNEL
                    }
                }
            };
            var E = h
        },
        825871: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMPTY_RESULTS: function() {
                    return A
                },
                FakeFooter: function() {
                    return R
                },
                getLimit: function() {
                    return M
                },
                default: function() {
                    return b
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("271841"),
                r = n("551042"),
                o = n("798609"),
                s = n("507217"),
                a = n("589777"),
                u = n("988721"),
                d = n("240249"),
                c = n("972620"),
                f = n("166004"),
                p = n("383018"),
                m = n("524768"),
                h = n("389153"),
                E = n("396465"),
                S = n("355263"),
                g = n("957255"),
                C = n("501536"),
                T = n("655518"),
                v = n("200294"),
                y = n("851745"),
                x = n("406291"),
                I = n("317041"),
                N = n("782340"),
                _ = n("94885");
            let A = {
                results: {
                    entries: []
                }
            };

            function R() {
                return d.useSearchOpenState(), null
            }

            function O() {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("496896").then(n.bind(n, "496896"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }

            function M(e) {
                return d.isInIndexExperiment({
                    location: e
                }) ? y.MAX_COMMAND_AUTOCOMPLETE_RESULTS : y.MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY
            }
            let k = {
                sentinel: x.COMMAND_SENTINEL,
                stores: [p.default, f.default, u.default, g.default],
                matches: (e, t, n, l, i) => i.commands !== y.CommandMode.DISABLED && null == p.default.getActiveCommand(e.id) && (l || i.commands !== y.CommandMode.OLD_BUILT_INS),
                queryResults(e, t, n, l, i) {
                    if (0 === n.length && l.commands !== y.CommandMode.OLD_BUILT_INS) return A;
                    let r = M("CommandAutocompletes");
                    if (l.commands === y.CommandMode.OLD_BUILT_INS) {
                        let l = (0, a.getBuiltInCommands)(o.ApplicationCommandType.CHAT, !1, !1),
                            i = RegExp("^".concat(T.default.escape(n)), "i"),
                            s = (0, h.getMatchingGroupCommands)(l, i, {
                                channel: e,
                                guild: t
                            }, r),
                            u = a.BUILT_IN_SECTIONS[I.BuiltInSectionId.BUILT_IN];
                        return 0 === s.length ? A : {
                            results: {
                                entries: s.map(e => ({
                                    command: e,
                                    section: u
                                }))
                            }
                        }
                    }
                    let s = (0, S.getCommandQuery)(e, n),
                        {
                            commands: u,
                            sections: f
                        } = d.executeQuery(e, {
                            commandType: o.ApplicationCommandType.CHAT,
                            text: s.text
                        }, {
                            limit: r,
                            placeholderCount: y.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                            scoreMethod: c.ScoreMethod.COMMAND_OR_APPLICATION,
                            allowFetch: i
                        });
                    if (null == u) return A;
                    let p = u;
                    if (s.hasSpaceTerminator) {
                        let e = s.text.trim(),
                            t = e + " ";
                        p = p.filter(n => n.name === e || n.name.startsWith(t))
                    }
                    return 0 === p.length ? A : {
                        results: {
                            entries: p.slice(0, r).map(e => ({
                                command: e,
                                section: null == f ? void 0 : f.find(t => t.id === e.applicationId)
                            }))
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            entries: t
                        },
                        selectedIndex: n,
                        channel: r,
                        query: o,
                        options: s,
                        onHover: a,
                        onClick: u
                    } = e, c = (0, S.getCommandQuery)(r, o);
                    if (s.commands !== y.CommandMode.OLD_BUILT_INS && !d.isInIndexExperiment({
                            location: "CommandAutocompletes"
                        })) return (0, l.jsx)(E.default, {
                        channel: r,
                        query: c.text,
                        selectedIndex: n,
                        onHover: a,
                        onClick: u
                    });
                    let f = s.commands === y.CommandMode.OLD_BUILT_INS;
                    return (0, v.renderAutocompleteGroup)({
                        query: c.text,
                        selectedIndex: n,
                        autocompletes: t,
                        onHover: a,
                        onClick: u,
                        titleWithQuery: N.default.Messages.COMMANDS_MATCHING,
                        titleWithoutQuery: N.default.Messages.COMMANDS,
                        getQuery: e => "".concat(x.COMMAND_SENTINEL).concat(e),
                        Component: f ? C.default.Command : C.default.NewCommand,
                        getProps: e => {
                            let {
                                command: t,
                                section: n
                            } = e;
                            return {
                                key: t.id,
                                command: t,
                                channel: r,
                                guildId: r.guild_id,
                                showImage: !0,
                                section: n
                            }
                        },
                        key: "commands",
                        headerClassName: f ? _.legacyInputCommandHeader : null,
                        headerTrailingContent: f ? (0, l.jsx)(i.Button, {
                            type: "button",
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.BRAND,
                            size: i.Button.Sizes.MIN,
                            onClick: O,
                            children: N.default.Messages.LEGACY_CHAT_INPUT_SLASH_COMMAND_MISSING_HELP_MESSAGE
                        }) : null,
                        footer: (0, l.jsx)(R, {})
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            entries: t
                        },
                        index: n,
                        queryText: l,
                        options: i,
                        channel: r,
                        location: o,
                        tabOrEnter: a
                    } = e, {
                        command: u,
                        section: d
                    } = t[n];
                    if (u.inputType === m.ApplicationCommandInputType.PLACEHOLDER) return null;
                    if (i.commands === y.CommandMode.OLD_BUILT_INS) i.insertText(function(e) {
                        return "".concat(x.COMMAND_SENTINEL).concat(e.name)
                    }(u));
                    else {
                        let e = o;
                        null == e && (e = a ? m.ApplicationCommandTriggerLocations.QUERY : m.ApplicationCommandTriggerLocations.DISCOVERY), s.setActiveCommand({
                            channelId: r.id,
                            command: u,
                            section: null != d ? d : null,
                            location: e,
                            queryLength: null == l ? void 0 : l.length
                        })
                    }
                    return {
                        type: y.AutocompleteSelectionTypes.COMMAND
                    }
                }
            };
            var b = k
        },
        116189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("917351"),
                r = n.n(i),
                o = n("96386"),
                s = n("798609"),
                a = n("246598"),
                u = n("383018"),
                d = n("916565"),
                c = n("501536"),
                f = n("25292"),
                p = n("200294"),
                m = n("851745"),
                h = n("317041"),
                E = n("782340"),
                S = n("269175"),
                g = n("327769");
            let C = {
                    results: {
                        choices: []
                    }
                },
                T = {
                    results: {
                        choices: [],
                        isLoading: !0
                    }
                },
                v = Array.from({
                    length: 5
                }, () => ({
                    name: "",
                    displayName: "",
                    value: ""
                })),
                y = {
                    results: {
                        choices: [],
                        isError: !0
                    }
                },
                x = r.debounce(d.default, h.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
                    leading: !0,
                    trailing: !0
                }),
                I = {
                    stores: [u.default, a.default],
                    showEmpty: !0,
                    matches(e, t, n, l, i) {
                        let r = u.default.getActiveOption(e.id);
                        return i.commands !== m.CommandMode.DISABLED && null != r && (r.type === s.ApplicationCommandOptionType.BOOLEAN || !!(null == r ? void 0 : r.autocomplete) || (null == r ? void 0 : r.choices) != null && r.choices.length > 0)
                    },
                    queryResults(e, t, n, l, i) {
                        var r;
                        let o = u.default.getActiveOption(e.id);
                        if (null == o) return C;
                        if (o.autocomplete) {
                            if (i) {
                                let i = u.default.getActiveCommand(e.id),
                                    r = l.getCommandOptionValues();
                                x({
                                    command: i,
                                    optionValues: r,
                                    context: {
                                        channel: e,
                                        guild: t,
                                        autocomplete: {
                                            name: o.name,
                                            query: n
                                        }
                                    }
                                })
                            }
                            let r = a.default.getLastErrored(e.id);
                            if (r) return y;
                            let s = a.default.getAutocompleteChoices(e.id, o.name, n);
                            return null == s ? T : {
                                results: {
                                    choices: s
                                }
                            }
                        }
                        let d = f.default.queryChoiceResults({
                            query: n,
                            choices: o.type === s.ApplicationCommandOptionType.BOOLEAN ? h.BOOLEAN_CHOICES : null !== (r = o.choices) && void 0 !== r ? r : []
                        });
                        return {
                            results: d
                        }
                    },
                    renderResults(e) {
                        let {
                            results: {
                                choices: t,
                                isLoading: n,
                                isError: i
                            },
                            selectedIndex: r,
                            query: s,
                            onHover: a,
                            onClick: u
                        } = e;
                        return i ? (0, l.jsx)(o.default, {
                            message: E.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_FAILED,
                            noResultsImageURL: g,
                            className: S.noAutocompleteResults
                        }) : 0 !== t.length || n ? (0, p.renderAutocompleteGroup)({
                            query: s,
                            selectedIndex: r,
                            autocompletes: n ? v : t,
                            onHover: a,
                            onClick: u,
                            titleWithQuery: E.default.Messages.OPTIONS_MATCHING,
                            titleWithoutQuery: E.default.Messages.OPTIONS,
                            Component: n ? c.default.Loading : c.default.Generic,
                            getProps: (e, t) => ({
                                key: t.toString(),
                                text: e.displayName
                            }),
                            getQuery: e => e,
                            key: "choice"
                        }) : (0, l.jsx)(o.default, {
                            message: E.default.Messages.APPLICATION_COMMAND_AUTOCOMPLETE_NO_OPTIONS,
                            noResultsImageURL: g,
                            className: S.noAutocompleteResults
                        })
                    },
                    onSelect(e) {
                        let {
                            results: {
                                choices: t
                            },
                            index: n,
                            options: l
                        } = e, i = t[n];
                        return l.insertText(function(e) {
                            return e.displayName
                        }(i)), {
                            type: m.AutocompleteSelectionTypes.CHOICE
                        }
                    }
                };
            var N = I
        },
        714343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("424973");
            var l = n("37983");
            n("884691");
            var i = n("383018"),
                r = n("501536"),
                o = n("200294"),
                s = n("851745"),
                a = n("782340");
            let u = {
                    results: {
                        commandOptions: []
                    }
                },
                d = {
                    stores: [i.default],
                    focusMode: s.FocusMode.AUTO_WHEN_FILTERED,
                    matches: (e, t, n, l, r) => !(l || null == i.default.getActiveCommand(e.id) || null != i.default.getActiveOption(e.id)),
                    queryResults(e, t, n, l, r) {
                        let o = i.default.getActiveCommand(e.id);
                        if ((null == o ? void 0 : o.options) == null) return u;
                        let s = i.default.getOptionStates(e.id),
                            a = o.options.filter(e => {
                                var t;
                                return e.displayName.startsWith(n) && !(null === (t = s[e.name]) || void 0 === t ? void 0 : t.hasValue)
                            });
                        return 0 === a.length ? u : {
                            results: {
                                commandOptions: a
                            }
                        }
                    },
                    renderResults(e) {
                        let {
                            results: {
                                commandOptions: t
                            },
                            selectedIndex: n,
                            query: i,
                            onHover: s,
                            onClick: u
                        } = e, d = [], c = [];
                        t.forEach(e => {
                            (e.required ? d : c).push(e)
                        });
                        let f = d.length > 0 ? (0, o.renderAutocompleteGroup)({
                                query: i,
                                selectedIndex: n,
                                autocompletes: d,
                                onHover: s,
                                onClick: u,
                                titleWithQuery: a.default.Messages.REQUIRED_OPTIONS_MATCHING,
                                titleWithoutQuery: a.default.Messages.REQUIRED_OPTIONS,
                                Component: r.default.Generic,
                                getProps: (e, t) => ({
                                    key: t.toString(),
                                    text: e.displayName,
                                    description: e.displayDescription
                                }),
                                getQuery: e => e,
                                key: "required-options"
                            }) : null,
                            p = c.length > 0 ? (0, o.renderAutocompleteGroup)({
                                query: i,
                                selectedIndex: n,
                                autocompletes: c,
                                onHover: s,
                                onClick: u,
                                titleWithQuery: a.default.Messages.OPTIONS_MATCHING,
                                titleWithoutQuery: d.length > 0 ? a.default.Messages.OTHER_OPTIONS : a.default.Messages.OPTIONS,
                                Component: r.default.Generic,
                                getProps: (e, t) => ({
                                    key: t.toString(),
                                    text: e.displayName,
                                    description: e.displayDescription
                                }),
                                getQuery: e => e,
                                key: "optional-options",
                                indexOffset: d.length
                            }) : null;
                        return (0, l.jsxs)(l.Fragment, {
                            children: [f, p]
                        })
                    },
                    onSelect(e) {
                        let {
                            results: {
                                commandOptions: t
                            },
                            index: n,
                            options: l
                        } = e, i = t[n];
                        return l.insertText(function(e) {
                            return "".concat(e.displayName, ":")
                        }(i)), {
                            type: s.AutocompleteSelectionTypes.COMMAND_OPTION
                        }
                    }
                };
            var c = d
        },
        84872: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                r = n("166465"),
                o = n("866353"),
                s = n("467094"),
                a = n("364685"),
                u = n("161585"),
                d = n("41170"),
                c = n("305961"),
                f = n("501536"),
                p = n("25292"),
                m = n("200294"),
                h = n("851745"),
                E = n("406291"),
                S = n("49111"),
                g = n("782340"),
                C = n("106226");

            function T(e, t) {
                return (0, l.jsx)(d.default, {
                    sticker: e,
                    isInteracting: t,
                    size: 40
                })
            }
            let v = {
                sentinel: E.EMOJI_SENTINEL,
                stores: [a.default],
                matches: (e, t, n, l, i) => n.length > 1,
                queryResults(e, t, n, l, i) {
                    var r;
                    let a = l.allowStickers ? 0 : 40,
                        u = S.MAX_AUTOCOMPLETE_RESULTS + a,
                        {
                            emojis: {
                                unlocked: d
                            }
                        } = p.default.queryEmojiResults({
                            query: n,
                            channel: e,
                            intention: l.emojiIntention,
                            canViewAndUsePackEmoji: null !== (r = l.canViewAndUsePackEmoji) && void 0 !== r && r,
                            maxCount: u
                        });
                    "-" === n[0] && (d = d.filter(e => {
                        var t;
                        return null === (t = e.names) || void 0 === t ? void 0 : t.includes(n)
                    }));
                    let c = [];
                    if (l.allowStickers) {
                        (0, s.fetchStickerPacks)();
                        let t = p.default.queryStickers([n], !0, [e, (e, t) => t === o.StickerSendability.SENDABLE]),
                            l = Math.max(4, 8 - d.length);
                        c = t.slice(0, l), "-" === n[0] && (c = t.filter(e => e.sticker.name === n))
                    }
                    let f = d.slice(0, u - c.length);
                    return {
                        results: {
                            emojis: f,
                            emojisLocked: [],
                            stickers: c
                        },
                        metadata: {
                            numEmojiResults: f.length,
                            numStickerResults: c.length
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            emojis: t,
                            stickers: o,
                            emojisLocked: s
                        },
                        selectedIndex: a,
                        query: u,
                        onHover: d,
                        onClick: p
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, m.renderAutocompleteGroup)({
                            query: u,
                            selectedIndex: a,
                            autocompletes: t,
                            onHover: d,
                            onClick: p,
                            titleWithQuery: g.default.Messages.EMOJI_MATCHING,
                            titleWithoutQuery: g.default.Messages.EMOJI,
                            Component: f.default.Emoji,
                            getProps: e => ({
                                emoji: e,
                                key: e.id || e.uniqueName || e.name,
                                sentinel: E.EMOJI_SENTINEL,
                                guild: null != e.guildId ? c.default.getGuild(e.guildId) : null,
                                pack: null != e.packId ? r.default.getPackByPackId({
                                    packId: e.packId
                                }) : null
                            }),
                            getQuery: e => "".concat(E.EMOJI_SENTINEL).concat(e),
                            key: "emoji"
                        }), s.length > 0 ? (0, m.renderAutocompleteGroup)({
                            query: u,
                            selectedIndex: a,
                            autocompletes: s,
                            onHover: d,
                            onClick: () => {
                                (0, i.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("499237").then(n.bind(n, "499237"));
                                    return t => (0, l.jsx)(e, {
                                        ...t
                                    })
                                })
                            },
                            titleWithQuery: 0 === t.length ? g.default.Messages.EMOJI_MATCHING : null,
                            titleWithoutQuery: 0 === t.length ? g.default.Messages.EMOJI : null,
                            Component: f.default.EmojiUpsell,
                            getProps: e => {
                                let {
                                    emojis: t
                                } = e;
                                return {
                                    key: "emoji-upsell",
                                    emojis: t
                                }
                            },
                            getQuery: e => "".concat(E.EMOJI_SENTINEL).concat(e),
                            key: "emoji-upsell",
                            indexOffset: t.length
                        }) : null, (t.length > 0 || s.length > 0) && o.length > 0 && (0, l.jsx)(f.default.Divider, {
                            className: C.emojiStickersDivider
                        }), (0, m.renderAutocompleteGroup)({
                            query: u,
                            selectedIndex: a,
                            autocompletes: o,
                            onHover: d,
                            onClick: p,
                            titleWithQuery: g.default.Messages.STICKERS_MATCHING,
                            titleWithoutQuery: g.default.Messages.STICKER,
                            Component: f.default.Sticker,
                            getProps: e => {
                                let {
                                    comparator: t,
                                    sticker: n
                                } = e;
                                return {
                                    renderSticker: T,
                                    queryMatch: t !== n.name.toLocaleLowerCase() ? t : void 0,
                                    sticker: n,
                                    key: n.id
                                }
                            },
                            getQuery: e => e,
                            key: "stickers",
                            indexOffset: t.length + s.length,
                            headerClassName: t.length > 0 ? C.stickersHeaderWithEmojiResults : void 0
                        })]
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            emojis: t,
                            emojisLocked: n,
                            stickers: l
                        },
                        index: i,
                        options: r
                    } = e;
                    if (i < t.length) {
                        let e = t[i];
                        return r.insertText(function(e) {
                            return "".concat(E.EMOJI_SENTINEL).concat(e.name).concat(E.EMOJI_SENTINEL)
                        }(e), function(e) {
                            var t;
                            let n = e.animated ? "a" : "";
                            return e.managed || null == e.id ? "".concat(E.EMOJI_SENTINEL).concat(e.name).concat(E.EMOJI_SENTINEL) : "<".concat(n, ":").concat(null !== (t = e.originalName) && void 0 !== t ? t : e.name, ":").concat(e.id, ">")
                        }(e)), {
                            type: h.AutocompleteSelectionTypes.EMOJI,
                            metadata: {
                                emojiId: e.id,
                                numEmojiResults: t.length,
                                numStickerResults: l.length,
                                expressionName: e.name,
                                isCustom: null != e.id,
                                isAnimated: e.animated
                            }
                        }
                    }
                    if ((i -= t.length) < n.length) return {
                        type: null
                    };
                    if ((i -= n.length) < l.length) {
                        let e = l[i];
                        return r.insertText(""), r.sendSticker(e.sticker, u.StickerSelectLocation.AUTOCOMPLETE), {
                            type: h.AutocompleteSelectionTypes.STICKER,
                            metadata: {
                                numEmojiResults: t.length,
                                numStickerResults: l.length,
                                stickerId: e.sticker.id
                            }
                        }
                    }
                    return {
                        type: null
                    }
                }
            };
            var y = v
        },
        729079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("917351"),
                o = n.n(r),
                s = n("77078"),
                a = n("822637"),
                u = n("716241"),
                d = n("383018"),
                c = n("524768"),
                f = n("318981"),
                p = n("501536"),
                m = n("145131"),
                h = n("851745"),
                E = n("406291"),
                S = n("49111"),
                g = n("782340"),
                C = n("567484");
            let T = {
                results: {
                    command: null,
                    integrations: [],
                    isLoading: !1
                }
            };

            function v(e, t, n) {
                var l, i;
                let r;
                return n.commands === h.CommandMode.OLD_BUILT_INS ? (r = t.split(" ")[0].substring(E.COMMAND_SENTINEL.length), t = t.substring((null !== (l = r.length) && void 0 !== l ? l : 0) + E.COMMAND_SENTINEL.length)) : r = null === (i = d.default.getActiveCommand(e.id)) || void 0 === i ? void 0 : i.name, {
                    command: r,
                    query: t.trim()
                }
            }
            let y = {
                stores: [d.default, f.default],
                matches(e, t, n, l, i) {
                    var r;
                    return i.commands !== h.CommandMode.DISABLED && (i.commands === h.CommandMode.OLD_BUILT_INS ? n.startsWith(E.COMMAND_SENTINEL + "gif") || n.startsWith(E.COMMAND_SENTINEL + "tenor") : (null === (r = d.default.getActiveCommand(e.id)) || void 0 === r ? void 0 : r.integrationType) === S.ChannelTextAreaIntegrationTypes.GIF && d.default.getOptionStates(e.id).query.hasValue)
                },
                queryResults(e, t, n, l, i) {
                    let {
                        command: r,
                        query: s
                    } = v(e, n, l);
                    if (null == r) return T;
                    let u = o.findKey(S.ChannelTextAreaIntegrations, e => e.command === r);
                    i && null != u && s.length > 0 && a.default.search(u, s);
                    let d = f.default.getResults(u, s);
                    return null == d ? T : {
                        results: {
                            command: r,
                            integrations: d.results,
                            isLoading: d.loading
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            integrations: t,
                            isLoading: n
                        },
                        selectedIndex: r,
                        channel: o,
                        query: a,
                        options: u,
                        onHover: c,
                        onClick: f
                    } = e, {
                        command: E,
                        query: T
                    } = v(o, a, u);
                    if (null == E || 0 === T.length) return null;
                    if (n) return (0, l.jsx)(s.Spinner, {
                        className: C.spinner,
                        type: s.Spinner.Type.SPINNING_CIRCLE
                    });
                    if (null != t) {
                        var y, x;
                        let e = !1,
                            n = t.map((t, n) => {
                                if (t.type === S.ChannelTextAreaIntegrationTypes.GIF) {
                                    var i, o, s;
                                    return e = !0, (0, l.jsx)(p.default.GIFIntegration, {
                                        className: C.horizontalAutocomplete,
                                        onClick: f,
                                        onHover: c,
                                        selected: r === n,
                                        index: n,
                                        width: null !== (i = t.meta.width) && void 0 !== i ? i : 0,
                                        height: null !== (o = t.meta.height) && void 0 !== o ? o : 0,
                                        src: null !== (s = t.meta.src) && void 0 !== s ? s : "",
                                        url: t.meta.url
                                    }, "".concat(t.meta.url).concat(t.meta.src))
                                }
                            }),
                            s = u.commands === h.CommandMode.OLD_BUILT_INS ? E : null !== (x = null === (y = d.default.getActiveCommand(o.id)) || void 0 === y ? void 0 : y.integrationTitle) && void 0 !== x ? x : E,
                            a = T.length > 0 && null != s ? g.default.Messages.CONTENT_MATCHING.format({
                                query: T,
                                command: s
                            }) : null != s ? s : E;
                        return (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(p.default.Title, {
                                title: a
                            }), e ? (0, l.jsx)(m.default, {
                                className: C.horizontalAutocompletes,
                                children: n
                            }) : n]
                        }, "gifs")
                    }
                },
                onSelect(e) {
                    let {
                        results: {
                            command: t,
                            integrations: n
                        },
                        index: l,
                        type: i,
                        options: r,
                        channel: o
                    } = e;
                    if (null == t) return {
                        type: null
                    };
                    let s = n[l];
                    if (i === h.SelectType.INSERT ? r.replaceText(function(e) {
                            return e.meta.url
                        }(s)) : r.sendMessage(function(e) {
                            return e.meta.url
                        }(s)), u.default.trackWithMetadata(S.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                            search_type: S.SearchTypes.GIF,
                            index_num: l,
                            source_object: "/".concat(t)
                        }), r.commands !== h.CommandMode.OLD_BUILT_INS) {
                        let e = d.default.getActiveCommand(o.id);
                        (null == e ? void 0 : e.inputType) === c.ApplicationCommandInputType.BUILT_IN_INTEGRATION && u.default.trackWithMetadata(S.AnalyticEvents.APPLICATION_COMMAND_USED, {
                            command_id: e.id,
                            application_id: e.applicationId,
                            command_type: e.type
                        })
                    }
                    return {
                        type: h.AutocompleteSelectionTypes.GIF
                    }
                }
            };

            function x(e) {
                return e.meta.url
            }
            var I = y
        },
        845247: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("781738");
            var l = n("37983");
            n("884691");
            var i = n("798609"),
                r = n("240249"),
                o = n("972620"),
                s = n("524768"),
                a = n("355263"),
                u = n("845579"),
                d = n("697218"),
                c = n("501536"),
                f = n("387111"),
                p = n("511104"),
                m = n("200294"),
                h = n("851745"),
                E = n("825871"),
                S = n("782340");

            function g(e) {
                let t = p.PREFIX_COMMAND_REGEX.exec(e);
                if (null != t) return {
                    type: "prefix",
                    cleanedQuery: e.substring(t[0].length).trim()
                };
                let n = p.BOT_MENTION_COMMAND_REGEX.exec(e);
                if (null != n) {
                    let t = n[1],
                        l = d.default.getUser(t);
                    return null == l || !l.bot || l.isClyde() ? null : {
                        type: "mention",
                        cleanedQuery: e.substring(n[0].length).trim(),
                        user: l
                    }
                }
                return null
            }
            let C = {
                ...E.default,
                sentinel: void 0,
                focusMode: h.FocusMode.MANUAL,
                matches(e, t, n, l, i) {
                    if (i.commands === h.CommandMode.DISABLED || i.commands === h.CommandMode.OLD_BUILT_INS || n.length < 2 || !u.ShowCommandSuggestions.getSetting()) return !1;
                    let r = g(n);
                    return null != r && r.cleanedQuery.length > 0
                },
                queryResults(e, t, n, l, s) {
                    if (!u.ShowCommandSuggestions.getSetting()) return E.EMPTY_RESULTS;
                    let d = g(n);
                    if (null == d) return E.EMPTY_RESULTS;
                    let c = (0, E.getLimit)("LegacyCommandAutocompletes"),
                        f = (0, a.getCommandQuery)(e, d.cleanedQuery),
                        {
                            commands: p,
                            sections: m
                        } = r.executeQuery(e, {
                            commandType: i.ApplicationCommandType.CHAT,
                            text: f.text
                        }, {
                            limit: c,
                            placeholderCount: h.MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS,
                            scoreMethod: o.ScoreMethod.COMMAND_OR_APPLICATION,
                            allowFetch: s
                        });
                    if (null == p) return E.EMPTY_RESULTS;
                    let S = p;
                    if (f.hasSpaceTerminator) {
                        let e = f.text.trim(),
                            t = e + " ";
                        S = S.filter(n => n.name === e || n.name.startsWith(t))
                    }
                    return 0 === S.length ? E.EMPTY_RESULTS : {
                        results: {
                            entries: S.slice(0, c).map(e => ({
                                command: e,
                                section: null == m ? void 0 : m.find(t => t.id === e.applicationId)
                            }))
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            entries: t
                        },
                        selectedIndex: n,
                        guild: i,
                        channel: r,
                        query: o,
                        options: s,
                        onHover: a,
                        onClick: u
                    } = e;
                    return (0, m.renderAutocompleteGroup)({
                        query: o,
                        selectedIndex: n,
                        autocompletes: t,
                        onHover: a,
                        onClick: u,
                        titleWithQuery: S.default.Messages.COMMANDS_MATCHING,
                        titleWithoutQuery: S.default.Messages.COMMANDS,
                        Component: s.commands === h.CommandMode.OLD_BUILT_INS ? c.default.Command : c.default.NewCommand,
                        getProps: e => {
                            let {
                                command: t,
                                section: n
                            } = e;
                            return {
                                key: t.id,
                                command: t,
                                channel: r,
                                guildId: r.guild_id,
                                showImage: !0,
                                section: n
                            }
                        },
                        getQuery: e => {
                            let t = g(e);
                            if ("mention" !== t.type) return e;
                            let n = f.default.getName(null == i ? void 0 : i.id, r.id, t.user);
                            return e.replace(p.BOT_MENTION_COMMAND_REGEX, "@".concat(n))
                        },
                        key: "commands",
                        footer: (0, l.jsx)(E.FakeFooter, {})
                    })
                },
                onSelect(e) {
                    let {
                        results: t,
                        index: n,
                        type: l,
                        options: i,
                        channel: r
                    } = e, o = E.default.onSelect({
                        results: t,
                        index: n,
                        type: l,
                        options: i,
                        channel: r,
                        location: s.ApplicationCommandTriggerLocations.SUGGESTION
                    });
                    return null == o ? null : {
                        ...o,
                        type: h.AutocompleteSelectionTypes.COMMAND_SUGGESTION
                    }
                }
            };
            var T = C
        },
        122270: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("26989"),
                o = n("501536"),
                s = n("25292"),
                a = n("158998"),
                u = n("200294"),
                d = n("851745"),
                c = n("406291"),
                f = n("782340");
            let p = {
                sentinel: c.MENTION_SENTINEL,
                stores: [r.default],
                matches: (e, t, n, l, i) => (i.mentions.user !== d.UserMentionMode.DENY || i.mentions.role !== d.RoleMentionMode.DENY || i.mentions.global !== d.GlobalMentionMode.DENY) && !0,
                queryResults(e, t, n, l, i) {
                    let r = l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE || l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                        o = l.mentions.global === d.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE,
                        a = l.mentions.user !== d.UserMentionMode.DENY,
                        u = l.mentions.role !== d.RoleMentionMode.DENY,
                        c = l.mentions.clyde !== d.ClydeMentionMode.DENY,
                        f = l.mentions.user === d.UserMentionMode.ALLOW_GUILD,
                        p = l.mentions.role === d.RoleMentionMode.ALLOW_ALL,
                        m = s.default.queryMentionResults({
                            query: n,
                            channel: e,
                            canMentionEveryone: r,
                            canMentionHere: o,
                            canMentionUsers: a,
                            canMentionRoles: u,
                            canMentionClyde: c,
                            includeAllGuildUsers: f,
                            includeNonMentionableRoles: p,
                            request: i
                        });
                    return {
                        results: m
                    }
                },
                renderResults(e) {
                    let t, n, {
                            results: {
                                users: r,
                                globals: s,
                                roles: a
                            },
                            selectedIndex: p,
                            channel: m,
                            query: h,
                            options: E,
                            onHover: S,
                            onClick: g
                        } = e,
                        C = r.map((e, t) => (0, l.jsx)(o.default.User, {
                            guildId: m.guild_id,
                            onClick: g,
                            onHover: S,
                            selected: p === t,
                            index: t,
                            user: e.user,
                            nick: e.nick,
                            status: e.status,
                            hidePersonalInformation: E.hidePersonalInformation
                        }, e.user.id)),
                        T = s.map((e, t) => (0, l.jsx)(o.default.Generic, {
                            onClick: g,
                            onHover: S,
                            selected: p === t + r.length,
                            index: r.length + t,
                            text: e.text,
                            description: E.hideMentionDescription ? null : e.description,
                            "aria-label": e.text
                        }, e.text)),
                        v = a.map((e, t) => (0, l.jsx)(o.default.Role, {
                            onClick: g,
                            onHover: S,
                            selected: p === t + r.length + s.length,
                            index: r.length + s.length + t,
                            role: e,
                            hideDescription: E.hideMentionDescription
                        }, e.id)),
                        y = E.mentions.user === d.UserMentionMode.DENY;
                    return y ? (t = f.default.Messages.ROLES_MATCHING, n = f.default.Messages.ROLES) : (t = f.default.Messages.MEMBERS_MATCHING, n = f.default.Messages.MEMBERS), (0, l.jsxs)(i.Fragment, {
                        children: [(0, u.renderHeader)({
                            titleWithQuery: t,
                            titleWithoutQuery: n,
                            query: h,
                            getQuery: e => "".concat(c.MENTION_SENTINEL).concat(e)
                        }), C, r.length > 0 && s.length > 0 ? (0, l.jsx)(o.default.Divider, {}) : null, T, r.length > 0 && a.length > 0 || s.length > 0 && a.length > 0 ? (0, l.jsx)(o.default.Divider, {}) : null, v]
                    }, "mentions")
                },
                onSelect(e) {
                    let {
                        results: {
                            users: t,
                            globals: n,
                            roles: l
                        },
                        index: i,
                        options: r,
                        channel: o
                    } = e, u = t[i], f = n[i - t.length], p = l[i - t.length - n.length];
                    return null != u ? r.insertText(function(e, t, n) {
                        return s.default.hasSameRoleAsUsername(t, e) ? "".concat(c.MENTION_SENTINEL).concat(e.tag) : "".concat(c.MENTION_SENTINEL).concat(a.default.getUserTag(e, {
                            identifiable: n ? "never" : "always"
                        }))
                    }(u.user, o, r.hidePersonalInformation), function(e) {
                        return "<@".concat(e.id, ">")
                    }(u.user)) : null != f ? r.insertText(function(e) {
                        return e.text
                    }(f)) : null != p && r.insertText(function(e) {
                        return "".concat(c.MENTION_SENTINEL).concat(e.name)
                    }(p), function(e) {
                        return "<@&".concat(e.id, ">")
                    }(p)), {
                        type: d.AutocompleteSelectionTypes.MENTION
                    }
                }
            };
            var m = p
        },
        684396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("957255"),
                i = n("501536"),
                r = n("25292"),
                o = n("200294"),
                s = n("851745"),
                a = n("406291"),
                u = n("49111"),
                d = n("958706"),
                c = n("782340");
            let f = {
                sentinel: a.REACTION_START_SENTINEL,
                matches(e, t, n, i, r) {
                    var o, s;
                    return i && null !== (s = null === (o = r.chatInputType.autocomplete) || void 0 === o ? void 0 : o.addReactionShortcut) && void 0 !== s && s && (l.default.can(u.Permissions.ADD_REACTIONS, e) || e.isPrivate())
                },
                queryResults(e, t, n, l, i) {
                    var o;
                    let {
                        emojis: s
                    } = r.default.queryEmojiResults({
                        query: n,
                        channel: e,
                        intention: d.EmojiIntention.REACTION,
                        canViewAndUsePackEmoji: null !== (o = l.canViewAndUsePackEmoji) && void 0 !== o && o
                    });
                    return {
                        results: {
                            emojis: s.unlocked
                        }
                    }
                },
                renderResults(e) {
                    let {
                        results: {
                            emojis: t
                        },
                        selectedIndex: n,
                        query: l,
                        onHover: r,
                        onClick: s
                    } = e;
                    return (0, o.renderAutocompleteGroup)({
                        query: l,
                        selectedIndex: n,
                        autocompletes: t,
                        onHover: r,
                        onClick: s,
                        titleWithQuery: c.default.Messages.REACTIONS_MATCHING,
                        titleWithoutQuery: c.default.Messages.EMOJI,
                        Component: i.default.Emoji,
                        getProps: e => ({
                            emoji: e,
                            key: e.id || e.uniqueName || e.name,
                            sentinel: a.EMOJI_SENTINEL
                        }),
                        getQuery: e => "".concat(a.REACTION_START_SENTINEL).concat(e),
                        key: "reactions"
                    })
                },
                onSelect(e) {
                    let {
                        results: {
                            emojis: t
                        },
                        index: n,
                        options: l
                    } = e, i = t[n];
                    return l.sendMessage(function(e) {
                        return "".concat(a.REACTION_START_SENTINEL).concat(e.name).concat(a.REACTION_END_SENTINEL)
                    }(i)), {
                        type: s.AutocompleteSelectionTypes.REACTION
                    }
                }
            };
            var p = f
        },
        280214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelAutocompleteLayerPosition: function() {
                    return o
                }
            }), n("222007");
            var l = n("884691"),
                i = n("244201"),
                r = n("851745");

            function o(e) {
                let {
                    editorHeight: t,
                    type: n,
                    state: o,
                    isInPopoutExperiment: s = !1
                } = e, [a, u] = l.useState(void 0), d = null == o ? void 0 : o.query, c = null == o ? void 0 : o.isVisible, {
                    renderWindow: f
                } = l.useContext(i.default), p = l.useCallback(() => {
                    var e, t, l, i;
                    if (null != o && (null == d || !c)) {
                        u(void 0);
                        return
                    }
                    if ((null == d ? void 0 : d.type) === r.AutocompleteOptionTypes.GIFS || null != n && !s && !(null === (e = n.autocomplete) || void 0 === e ? void 0 : e.alwaysUseLayer)) {
                        u(null);
                        return
                    }
                    let a = f.document.getSelection(),
                        p = null != a && a.rangeCount > 0 ? a.getRangeAt(0) : null;
                    if (null == p) return;
                    let m = p.startContainer,
                        h = p.startOffset;
                    for (; null != m;) {
                        if (m.nodeType !== Node.TEXT_NODE || null == m.nodeValue) {
                            u(null);
                            return
                        }
                        if ((null === (t = m.nodeValue) || void 0 === t ? void 0 : t.length) === 0) {
                            h = null !== (i = null == (m = m.previousSibling) ? void 0 : null === (l = m.nodeValue) || void 0 === l ? void 0 : l.length) && void 0 !== i ? i : 0;
                            continue
                        }
                        null != d && (h >= d.queryText.length ? h -= d.queryText.length : h = 0);
                        break
                    }
                    if (null == m) return;
                    let E = f.document.createRange();
                    E.setStart(m, h), E.setEnd(m, h);
                    let S = E.getBoundingClientRect();
                    (null == S ? void 0 : S.height) !== 0 && u(null != S ? S : null)
                }, [s, f.document, o, c, d, n]);
                return l.useEffect(() => (f.document.addEventListener("selectionchange", p), () => f.document.removeEventListener("selectionchange", p)), [f.document, p]), l.useEffect(() => {
                    p()
                }, [p, t]), a
            }
        },
        689299: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("974667"),
                r = n("942367"),
                o = n("244201"),
                s = n("851745");

            function a(e) {
                var t, n, a;
                let {
                    navId: u,
                    scrollerRef: d,
                    state: c,
                    onFocus: f
                } = e, {
                    renderWindow: p
                } = l.useContext(o.default), m = (e, t) => {
                    var n;
                    if (null === (n = d.current) || void 0 === n || n.scrollToTop(), e && null != c.query) {
                        let e = c.query.typeInfo.focusMode,
                            n = !(e === s.FocusMode.MANUAL || e === s.FocusMode.AUTO_WHEN_FILTERED && 0 === c.query.queryText.length);
                        c.isVisible && (!0 !== t || !1 !== n) ? (E.setFocus("0"), null == f || f(0)) : (E.setFocus(null), null == f || f(null))
                    }
                }, h = e => {
                    var t;
                    if (null === (t = d.current) || void 0 === t || t.scrollToBottom(), e && null != c.query && c.query.resultCount > 0) {
                        let e = c.query.resultCount - 1;
                        E.setFocus(e.toString()), null == f || f(e)
                    }
                }, E = (0, i.default)({
                    id: u,
                    isEnabled: c.isVisible,
                    orientation: r.Orientations.VERTICAL,
                    useVirtualFocus: !0,
                    setFocus: (e, t) => {
                        let n = p.document.querySelector(e);
                        if (null != n) {
                            var l;
                            null === (l = d.current) || void 0 === l || l.scrollIntoViewNode({
                                node: n
                            })
                        }
                        null == f || f(+t)
                    },
                    onNavigateNextAtEnd: () => m(!0),
                    onNavigatePreviousAtStart: () => h(!0),
                    scrollToStart: () => (m(!1, !1), Promise.resolve()),
                    scrollToEnd: () => (h(!1), Promise.resolve())
                });
                return l.useEffect(() => {
                    m(!0, !0)
                }, [null === (t = c.query) || void 0 === t ? void 0 : t.type, null === (n = c.query) || void 0 === n ? void 0 : n.queryText, null === (a = c.query) || void 0 === a ? void 0 : a.isLoading, c.isVisible]), E
            }
        },
        497858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var l = n("884691"),
                i = n("775560"),
                r = n("446674"),
                o = n("118200"),
                s = n("383018"),
                a = n("850391"),
                u = n("980215"),
                d = n("26989"),
                c = n("957255"),
                f = n("102985"),
                p = n("697218"),
                m = n("234246"),
                h = n("689299"),
                E = n("49111"),
                S = n("680894"),
                g = n("958706");

            function C(e, t, n) {
                var C, T, v, y, x, I, N;
                let {
                    channel: _,
                    type: A
                } = e, [R, O] = l.useState(() => (0, m.createInitialState)()), M = (0, i.useForceUpdate)(), k = (0, r.useStateFromStores)([d.default], () => {
                    if (null != e.guild) {
                        var t;
                        return null != d.default.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, S.CLYDE_AI_USER_ID)
                    }
                    return !1
                }), b = (0, u.useClydeEnabled)(e.guild, e.channel) && !k && !(0, u.canUseCustomClydeProfiles)(e.guild), P = (0, r.useStateFromStores)([d.default, p.default], () => {
                    var e, t;
                    let n = p.default.getCurrentUser();
                    return null !== (t = null != _.guild_id && null != n ? null === (e = d.default.getMember(_.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
                }), {
                    canMentionEveryone: L,
                    hidePersonalInformation: U
                } = (0, r.useStateFromStoresObject)([c.default, f.default], () => {
                    let e = _.isPrivate();
                    return {
                        canMentionEveryone: e || P || A === a.ChatInputTypes.RULES_INPUT || c.default.can(E.Permissions.MENTION_EVERYONE, _),
                        hidePersonalInformation: f.default.hidePersonalInformation
                    }
                }, [_, A, P]), {
                    activeCommand: j,
                    activeCommandOption: D
                } = (0, r.useStateFromStoresObject)([s.default], () => ({
                    activeCommand: s.default.getActiveCommand(_.id),
                    activeCommandOption: s.default.getActiveOption(_.id)
                })), w = (0, h.default)({
                    navId: "channel-autocomplete",
                    scrollerRef: n,
                    state: R,
                    onFocus: e => F.setSelectedIndex(e)
                }), B = null === (C = e.editorRef.current) || void 0 === C ? void 0 : C.getCurrentWord(), H = {
                    ...e,
                    navigator: w,
                    activeCommand: j,
                    activeCommandOption: D,
                    canMentionUsers: null !== (x = null === (T = A.users) || void 0 === T ? void 0 : T.allowMentioning) && void 0 !== x && x,
                    canMentionEveryone: L,
                    canMentionClyde: b,
                    hidePersonalInformation: U,
                    hideMentionDescription: A === a.ChatInputTypes.RULES_INPUT,
                    emojiIntention: A === a.ChatInputTypes.RULES_INPUT ? g.EmojiIntention.COMMUNITY_CONTENT : g.EmojiIntention.CHAT,
                    currentWord: null !== (I = null == B ? void 0 : B.word) && void 0 !== I ? I : "",
                    currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
                    optionText: null != D ? (0, o.getString)({
                        [D.name]: null !== (N = null === (v = e.editorRef.current) || void 0 === v ? void 0 : v.getCurrentCommandOptionValue()) && void 0 !== N ? N : []
                    }, D.name) : ""
                }, [F] = l.useState(() => new m.default(H));
                return l.useEffect(() => {
                    F.updateProps(H)
                }), l.useImperativeHandle(t, () => F, [F]), l.useEffect(() => {
                    let e = e => O(e);
                    return F.on("change", e), F.on("update", M), () => {
                        F.off("change", e), F.off("update", M)
                    }
                }, [M, F]), l.useEffect(() => {
                    var e;
                    let t = null === (e = R.query) || void 0 === e ? void 0 : e.typeInfo.stores;
                    if (null != t) {
                        let e = () => F.queryResults();
                        for (let n of t) n.addChangeListener(e);
                        return () => {
                            for (let n of t) n.removeChangeListener(e)
                        }
                    }
                }, [F, null === (y = R.query) || void 0 === y ? void 0 : y.typeInfo]), [R, F, w]
            }
        },
        545054: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useHereMentionCallback: function() {
                    return f
                }
            }), n("222007");
            var l = n("884691"),
                i = n("917351"),
                r = n.n(i),
                o = n("666020"),
                s = n("696605"),
                a = n("217535"),
                u = n("19766");
            let d = "@here";

            function c(e) {
                return !!(e.length > 1) || !(1 === e.length && "GROUP" === e[0].type && "unknown" === e[0].id)
            }

            function f(e, t, n) {
                let i = (0, a.default)(),
                    [f, p] = l.useState(!1),
                    m = l.useMemo(() => r.debounce(e => {
                        (function(e, t, n, l) {
                            let i = u.default.getProps(n, l).groups;
                            return !!c(i) || !(e.length < d.length) && !(e.length > t) && -1 !== e.indexOf(d) && ((0, o.subscribeChannel)(n, l, s.DEFAULT_RANGES), !0)
                        })(e, i, t, n) && p(!0)
                    }, 200, {
                        maxWait: 500
                    }), [i, t, n]);
                l.useEffect(() => {
                    let l = u.default.getProps(t, n).groups;
                    if (null != t && !c(l) && !f) return e.addListener("text-changed", m), () => {
                        e.removeListener("text-changed", m), m.cancel()
                    }
                }, [f, m, e, t, n])
            }
        },
        23690: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                id: "2022-12_timestamp_tooltip",
                label: "Timestamp Tooltip",
                kind: "user",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        998206: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("151426"),
                u = n("77078"),
                d = n("244201"),
                c = n("206230"),
                f = n("427953"),
                p = n("550766"),
                m = n("292655"),
                h = n("478272"),
                E = n("685665"),
                S = n("509802"),
                g = n("128295"),
                C = n("414868"),
                T = n("49111"),
                v = n("994428"),
                y = n("13030"),
                x = n("782340"),
                I = n("851855");

            function N(e) {
                let {
                    disabled: t,
                    channel: n,
                    markAsDismissed: r,
                    visibleContent: S,
                    innerRef: N
                } = e, _ = (0, d.useAppContext)(), {
                    analyticsLocations: A
                } = (0, E.default)(), R = _ === T.AppContext.POPOUT, O = (0, s.useStateFromStores)([c.default], () => c.default.useReducedMotion), M = (0, f.useIsActivitiesInTextEnabled)(n.id, "ChannelActivityPickerButton"), k = i.useCallback(() => {
                    r(v.ContentDismissActionType.UNKNOWN), (0, h.default)({
                        channel: M ? n : void 0,
                        guildId: n.guild_id,
                        locationObject: {
                            page: T.AnalyticsPages.GUILD_CHANNEL,
                            section: T.AnalyticsSections.CHANNEL_TEXT_AREA,
                            object: T.AnalyticsObjects.BUTTON_ICON,
                            objectType: T.AnalyticsObjectTypes.ACTIVITY
                        },
                        openInPopout: R,
                        enableSelectedTextChannelInvite: !0,
                        analyticsLocations: A
                    }), (0, p.fetchShelf)({
                        guildId: n.guild_id
                    })
                }, [A, n, M, r, R]), b = () => {
                    if (S === a.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES) return (0, l.jsxs)("div", {
                        className: I.sparkleContainer,
                        children: [(0, l.jsx)(C.default, {
                            className: o(I.sparkleStar, {
                                [I.noAnimation]: O
                            })
                        }), (0, l.jsx)(g.default, {
                            className: o(I.sparklePlus, {
                                [I.noAnimation]: O
                            })
                        })]
                    });
                    return null
                };
                return t ? null : (0, l.jsx)(u.Tooltip, {
                    text: x.default.Messages.EMBEDDED_ACTIVITIES_START_AN_ACTIVITY,
                    children: e => (0, l.jsxs)("div", {
                        ...e,
                        className: o(y.CHAT_INPUT_BUTTON_CLASSNAME, I.buttonContainer),
                        ref: N,
                        children: [(0, l.jsx)(m.default, {
                            onClick: k,
                            tabIndex: 0,
                            focusProps: {
                                offset: {
                                    top: 4,
                                    bottom: 4,
                                    left: -4,
                                    right: -4
                                }
                            }
                        }), b()]
                    })
                })
            }
            let _ = [a.DismissibleContent.ACTIVITIES_TEXT_INPUT_BUTTON_SPARKLES];
            var A = i.memo(i.forwardRef(function(e, t) {
                return (0, l.jsx)(S.default, {
                    contentTypes: _,
                    children: n => {
                        let {
                            visibleContent: i,
                            markAsDismissed: r
                        } = n;
                        return (0, l.jsx)(N, {
                            ...e,
                            innerRef: t,
                            visibleContent: i,
                            markAsDismissed: () => r(v.ContentDismissActionType.UNKNOWN)
                        })
                    }
                })
            }))
        },
        743825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007"), n("424973");
            var l, i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                a = n("917351"),
                u = n.n(a),
                d = n("87682"),
                c = n.n(d),
                f = n("746379"),
                p = n.n(f),
                m = n("394846"),
                h = n("295426"),
                E = n("81594"),
                S = n("798609"),
                g = n("966724"),
                C = n("383018"),
                T = n("605250"),
                v = n("585722"),
                y = n("378765"),
                x = n("254490"),
                I = n("850391"),
                N = n("149022"),
                _ = n("296141"),
                A = n("606013"),
                R = n("32647"),
                O = n("970153"),
                M = n("49111"),
                k = n("782340"),
                b = n("537461");
            new T.default("ChannelEditor.tsx");
            let P = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]
                },
                L = {
                    12: b.fontSize12Padding,
                    14: b.fontSize14Padding,
                    15: b.fontSize15Padding,
                    16: b.fontSize16Padding,
                    18: b.fontSize18Padding,
                    20: b.fontSize20Padding,
                    24: b.fontSize24Padding
                };
            l = class extends r.Component {
                componentDidMount() {
                    this.props.focused && requestAnimationFrame(() => this.focus()), document.addEventListener("selectionchange", this.handleSelectionChange), window.addEventListener("beforeunload", this.handleBeforeUnload)
                }
                componentDidUpdate(e) {
                    if (this.fixFocus(e), this.props.useSlate !== e.useSlate) {
                        var t, n;
                        let e;
                        e = this.props.useSlate ? this.props.textValue : (0, O.toTextValue)(this.props.richValue, {
                            mode: "plain"
                        }), null === (t = (n = this.props).onChange) || void 0 === t || t.call(n, null, e, (0, N.toRichValue)(e))
                    } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled()
                }
                componentWillUnmount() {
                    var e;
                    this.saveCurrentText(), null === (e = this._unsubscribe) || void 0 === e || e.call(this), window.removeEventListener("beforeunload", this.handleBeforeUnload), document.removeEventListener("selectionchange", this.handleSelectionChange), this._focusBlurQueue = null, this._unsubscribe = null
                }
                blur() {
                    let e = this.ref.current;
                    null != e && e.blur()
                }
                submit(e) {
                    var t;
                    null === (t = this.ref.current) || void 0 === t || t.submit(e)
                }
                insertEmoji(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        {
                            textValue: l
                        } = this.props,
                        i = this.ref.current;
                    null != e && null != i && (n && !l.endsWith(" ") && i.insertText(" ", void 0, !1), i.insertEmoji(e, t), t && this.focus())
                }
                insertGIF(e) {
                    let {
                        textValue: t
                    } = this.props, n = this.ref.current;
                    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(e.url))
                }
                insertSound(e) {
                    let {
                        textValue: t
                    } = this.props, n = this.ref.current;
                    null != e && null != n && (!t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText("<sound:" + e.soundId + ">"))
                }
                handleOuterClick() {
                    this.focus()
                }
                clearValue() {
                    let {
                        channel: e,
                        type: t
                    } = this.props;
                    this.setState({
                        focused: !0,
                        submitting: !1
                    }), h.default.saveDraft(e.id, "", t.drafts.type)
                }
                getCurrentWord() {
                    var e;
                    let t = this.ref.current;
                    return null !== (e = null == t ? void 0 : t.getCurrentWord()) && void 0 !== e ? e : {
                        word: null,
                        isAtStart: !1
                    }
                }
                insertAutocomplete(e, t, n) {
                    let l = this.ref.current;
                    return null == l ? void 0 : l.insertAutocomplete(e, t, n)
                }
                getCurrentCommandOption() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOption) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
                }
                getCurrentCommandOptionValue() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCurrentCommandOptionValue) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : []
                }
                getCommandOptionValues() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getCommandOptionValues) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : {}
                }
                getFirstText() {
                    var e;
                    let t = this.ref.current;
                    return null !== (e = null == t ? void 0 : t.getFirstText()) && void 0 !== e ? e : null
                }
                getSlateEditor() {
                    var e, t;
                    let n = this.ref.current;
                    return null !== (t = null == n ? void 0 : null === (e = n.getSlateEditor) || void 0 === e ? void 0 : e.call(n)) && void 0 !== t ? t : null
                }
                fixFocus(e) {
                    e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus()
                }
                appendText(e, t) {
                    var n;
                    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    null === (n = this.ref.current) || void 0 === n || n.insertText(e, t, l)
                }
                getPlaceholder() {
                    let {
                        disabled: e,
                        placeholder: t,
                        isPreviewing: n
                    } = this.props;
                    return e && !n ? k.default.Messages.NO_SEND_MESSAGES_PERMISSION_PLACEHOLDER : t
                }
                render() {
                    var e, t, n, l, r, o;
                    let {
                        textValue: a,
                        richValue: u,
                        disabled: d,
                        onChange: c,
                        onKeyDown: f,
                        onResize: p,
                        onSubmit: h,
                        channel: E,
                        type: S,
                        fontSize: g,
                        useSlate: C,
                        spellcheckEnabled: T,
                        useNewSlashCommands: v,
                        canOnlyUseTextCommands: x,
                        className: _,
                        id: O,
                        required: k,
                        maxCharacterCount: P,
                        allowNewLines: U,
                        "aria-describedby": j,
                        "aria-labelledby": D,
                        accessibilityLabel: w
                    } = this.props, {
                        submitting: B,
                        popup: H
                    } = this.state, F = {
                        channel: E,
                        className: s(_, b.textArea, {
                            [b.textAreaSlate]: C,
                            [b.textAreaDisabled]: d || B
                        }),
                        id: O,
                        placeholder: this.getPlaceholder(),
                        required: k,
                        accessibilityLabel: w,
                        disabled: d || !1,
                        submitting: B,
                        isEdit: S === I.ChatInputTypes.EDIT,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onPaste: this.handlePaste,
                        onTab: this.handleTab,
                        onEnter: this.handleEnter,
                        moveSelection: this.handleMoveSelection,
                        maybeShowAutocomplete: this.maybeShowAutocomplete,
                        hideAutocomplete: this.hideAutocomplete,
                        allowNewLines: U,
                        onChange: c,
                        onResize: p,
                        onKeyDown: f,
                        onSubmit: h,
                        textAreaPaddingClassName: s(L[g], {
                            [b.textAreaWithoutAttachmentButton]: S !== I.ChatInputTypes.NORMAL && S !== I.ChatInputTypes.OVERLAY && S !== I.ChatInputTypes.THREAD_CREATION && S !== I.ChatInputTypes.SIDEBAR,
                            [b.textAreaForPostCreation]: S === I.ChatInputTypes.CREATE_FORUM_POST,
                            [b.textAreaCustomGift]: S === I.ChatInputTypes.CUSTOM_GIFT
                        }),
                        spellcheckEnabled: T,
                        useNewSlashCommands: v,
                        disableAutoFocus: m.isMobile || null !== (n = S.disableAutoFocus) && void 0 !== n && n,
                        disableEnterToSubmit: null !== (l = null === (e = S.submit) || void 0 === e ? void 0 : e.disableEnterToSubmit) && void 0 !== l && l,
                        "aria-controls": null !== (r = H.id) && void 0 !== r ? r : void 0,
                        "aria-haspopup": "listbox",
                        "aria-expanded": null !== H.id || void 0,
                        "aria-activedescendant": null !== (o = H.activeDescendant) && void 0 !== o ? o : void 0,
                        "aria-invalid": a.length > P,
                        "aria-describedby": j,
                        "aria-labelledby": D,
                        "aria-autocomplete": "list"
                    }, G = C ? (0, i.jsx)(R.default, {
                        ref: this.ref,
                        ...F,
                        type: S,
                        value: d ? (0, N.toRichValue)("") : u,
                        canUseCommands: null === (t = S.commands) || void 0 === t ? void 0 : t.enabled,
                        canOnlyUseTextCommands: x
                    }) : (0, i.jsx)(A.default, {
                        ref: this.ref,
                        ...F,
                        value: d ? "" : a
                    });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(y.ComponentAction, {
                            event: M.ComponentActions.INSERT_TEXT,
                            handler: this.handleInsertText
                        }), (0, i.jsx)(y.ComponentAction, {
                            event: M.ComponentActions.CLEAR_TEXT,
                            handler: this.handleClearText
                        }), G]
                    })
                }
                constructor(e) {
                    var t;
                    super(e), t = this, this.ref = r.createRef(), this._focusBlurQueue = Promise.resolve(), this.handleSelectionChange = () => {
                        if (this.props.focused) {
                            var e, t, n;
                            this.props.onSelectionChanged(null === (t = (n = document).getSelection) || void 0 === t ? void 0 : null === (e = t.call(n)) || void 0 === e ? void 0 : e.toString())
                        }
                    }, this.focus = () => {
                        var e;
                        null === (e = this._focusBlurQueue) || void 0 === e || e.then(() => {
                            this.setState({
                                focused: !0
                            }, () => {
                                let e = this.ref.current;
                                null != e && e.focus()
                            })
                        })
                    }, this.saveCurrentText = function() {
                        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                            {
                                type: n,
                                channel: l
                            } = t.props;
                        n.drafts.autoSave && (e && t.saveCurrentTextThrottled.cancel(), t.handleSaveCurrentText(l.id))
                    }, this.handleBeforeUnload = () => this.saveCurrentText(), this.saveCurrentTextThrottled = u.throttle(this.saveCurrentText.bind(this, !1), 500), this.handleEnter = e => {
                        var t, n;
                        return null === (t = (n = this.props).onEnter) || void 0 === t ? void 0 : t.call(n, e)
                    }, this.handleTab = () => {
                        var e, t;
                        return null === (e = (t = this.props).onTab) || void 0 === e ? void 0 : e.call(t)
                    }, this.handleMoveSelection = e => {
                        var t, n;
                        return null === (t = (n = this.props).onMoveSelection) || void 0 === t ? void 0 : t.call(n, e)
                    }, this.maybeShowAutocomplete = () => {
                        var e, t;
                        return null === (e = (t = this.props).onMaybeShowAutocomplete) || void 0 === e ? void 0 : e.call(t)
                    }, this.hideAutocomplete = () => {
                        var e, t;
                        return null === (e = (t = this.props).onHideAutocomplete) || void 0 === e ? void 0 : e.call(t)
                    }, this.handleSaveCurrentText = e => {
                        h.default.saveDraft(e, this.props.textValue, this.props.type.drafts.type)
                    }, this.handleClearText = () => {
                        var e, t;
                        null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, null, "", (0, N.toRichValue)(""))
                    }, this.handleInsertText = e => {
                        let {
                            plainText: t,
                            rawText: n,
                            addSpace: l = !1
                        } = e;
                        !this.props.disabled && (this.appendText(t, n, l), this.focus())
                    }, this.handleFocus = e => {
                        let {
                            onFocus: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        null == t || t(e), !n && this.setState({
                            focused: !0
                        })
                    }, this.handleBlur = e => {
                        let {
                            onBlur: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        null == t || t(e), n && this.setState({
                            focused: !1
                        })
                    }, this.handlePaste = e => {
                        let {
                            channel: t,
                            canPasteFiles: n,
                            uploadPromptCharacterCount: l,
                            promptToUpload: i,
                            maxCharacterCount: r,
                            type: o
                        } = this.props;
                        if (null == i || !t.isPrivate() && !n || t.isPrivate() && t.isManaged()) return !1;
                        let {
                            files: s
                        } = function(e, t) {
                            let n = [],
                                l = [],
                                i = null,
                                r = null;
                            for (let t of e.items)
                                if ("file" === t.kind) {
                                    let e = t.getAsFile();
                                    if (null == e) continue;
                                    null != e.path && e.path.length > 0 ? n.push(e) : l.push(e)
                                } else "string" === t.kind && ("text/plain" === t.type && null == i ? i = t : "text/html" === t.type && null == r && (r = t));
                            if (n.length > 0) return {
                                files: n
                            };
                            if (l.length > 0) {
                                if (1 === l.length && "image/png" === l[0].type && null != r) {
                                    var o;
                                    let t = l[0],
                                        n = e.getData(r.type),
                                        i = null !== (o = function(e) {
                                            let t = new DOMParser,
                                                n = t.parseFromString(e, "text/html"),
                                                l = n.querySelector("img");
                                            if (null != l) {
                                                let e;
                                                try {
                                                    let {
                                                        pathname: t
                                                    } = p.parse(l.src);
                                                    null != t && t.length > 0 && (e = c.basename(t).split(".")[0])
                                                } catch (e) {}
                                                if (null != e && e.length > 0) return "".concat(e, ".png")
                                            }
                                        }(n)) && void 0 !== o ? o : t.name;
                                    return {
                                        files: [(0, x.makeFile)(t, i, t.type)]
                                    }
                                }
                                return {
                                    files: l
                                }
                            }
                            if (null != i && null != t) {
                                let n = e.getData(i.type);
                                if (n.length > t) {
                                    let e = new Blob([n], {
                                        type: "text/plain"
                                    });
                                    return {
                                        files: [(0, x.makeFile)(e, "message.txt")],
                                        convertedStringToFile: !0
                                    }
                                }
                            }
                            return {
                                files: []
                            }
                        }(e.clipboardData, o.uploadLongMessages ? null != l ? l : r : null);
                        return P("onPaste", [...e.clipboardData.items].map(e => {
                            if ("file" !== e.kind) return {
                                kind: e.kind,
                                type: e.type
                            };
                            {
                                let t = e.getAsFile();
                                return {
                                    kind: e.kind,
                                    type: e.type,
                                    name: null == t ? void 0 : t.name,
                                    path: null == t ? void 0 : t.path
                                }
                            }
                        })), 0 !== s.length && (e.preventDefault(), e.stopPropagation(), this.saveCurrentText(), ((e, n) => {
                            var l;
                            let r = C.default.getActiveCommand(t.id);
                            if (null == r) return i(e, t, o.drafts.type, {
                                requireConfirm: !0,
                                showLargeMessageDialog: void 0
                            });
                            let s = null === (l = r.options) || void 0 === l ? void 0 : l.find(e => e.type === S.ApplicationCommandOptionType.ATTACHMENT && null == v.default.getUpload(t.id, e.name, o.drafts.type));
                            null != s && E.default.setFile({
                                channelId: t.id,
                                id: s.name,
                                draftType: o.drafts.type,
                                file: {
                                    id: s.name,
                                    platform: g.UploadPlatform.WEB,
                                    file: e[0]
                                }
                            })
                        })(s), this.focus(), !0)
                    }, this._unsubscribe = _.channelEditorPopupStore.subscribe(e => {
                        requestAnimationFrame(() => {
                            this.setState({
                                popup: e
                            })
                        })
                    }), this.state = {
                        focused: !1,
                        submitting: !1,
                        popup: _.channelEditorPopupStore.getState()
                    }
                }
            }
        },
        296141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                channelEditorPopupStore: function() {
                    return o
                },
                useChannelEditorPopup: function() {
                    return s
                },
                dismissChannelEditorPopup: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("308503");
            let r = Object.freeze({
                    id: null,
                    activeDescendant: null
                }),
                o = (0, i.default)(() => r);

            function s(e, t, n) {
                (0, l.useEffect)(() => {
                    t ? o.setState({
                        id: e,
                        activeDescendant: n
                    }) : o.setState({
                        id: null,
                        activeDescendant: null
                    })
                }, [e, t, n])
            }

            function a() {
                o.setState(() => r)
            }
        },
        35385: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("16470"),
                a = n("65597"),
                u = n("77078"),
                d = n("538282"),
                c = n("13162"),
                f = n("166465"),
                p = n("882641"),
                m = n("13030"),
                h = n("365058"),
                E = n("782340"),
                S = n("537461"),
                g = i.memo(i.forwardRef(function(e, t) {
                    let {
                        disabled: n,
                        type: r
                    } = e, g = (0, a.default)([f.default], () => f.default.getHasPackAddedNotification(), []);
                    i.useEffect(() => {
                        g && setTimeout(() => {
                            (0, c.dismissPackAddedNotification)()
                        }, h.INVENTORY_PACK_ADDED_NOTIFICATION_DURATION)
                    }, [g]);
                    let [C, T, v] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], s.default), y = i.useCallback(() => {
                        (0, d.toggleExpressionPicker)(m.ExpressionPickerViewType.EMOJI, r)
                    }, [r]);
                    return n ? null : (0, l.jsx)(u.Tooltip, {
                        color: u.TooltipColors.GREEN,
                        text: g ? E.default.Messages.INVENTORY_PACK_ADDED.format({
                            number: 1
                        }) : null,
                        forceOpen: !0,
                        children: e => (0, l.jsx)("div", {
                            className: o(m.CHAT_INPUT_BUTTON_CLASSNAME, S.buttonContainer),
                            ref: t,
                            ...e,
                            children: (0, l.jsx)(p.default, {
                                className: S.emojiButton,
                                onClick: y,
                                active: C === m.ExpressionPickerViewType.EMOJI && T === r,
                                "aria-controls": v,
                                tabIndex: 0,
                                focusProps: {
                                    offset: {
                                        top: 4,
                                        bottom: 4,
                                        left: -4,
                                        right: -4
                                    }
                                }
                            })
                        })
                    })
                }))
        },
        695369: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("16470"),
                a = n("446674"),
                u = n("77078"),
                d = n("538282"),
                c = n("374363"),
                f = n("551305"),
                p = n("110006"),
                m = n("378765"),
                h = n("49111"),
                E = n("13030"),
                S = n("782340"),
                g = n("537461"),
                C = i.memo(i.forwardRef(function(e, t) {
                    let {
                        disabled: n,
                        type: r
                    } = e, [C, T] = i.useState(!1), v = (0, a.useStateFromStores)([c.default], () => {
                        var e, t;
                        return C && Object.values(null !== (t = null === (e = c.default.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
                    }), [y, x, I] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], s.default), N = i.useRef(0), _ = i.useCallback(() => {
                        T(!0), clearTimeout(N.current), N.current = setTimeout(() => {
                            T(!1)
                        }, 1500)
                    }, []);
                    i.useEffect(() => () => {
                        clearTimeout(N.current)
                    }), (0, m.useComponentAction)({
                        event: h.ComponentActions.FAVORITE_GIF,
                        handler: _
                    });
                    let A = i.useCallback(() => {
                        (0, d.toggleExpressionPicker)(E.ExpressionPickerViewType.GIF, r)
                    }, [r]);
                    if (n) return null;
                    let R = y === E.ExpressionPickerViewType.GIF && x === r;
                    return (0, l.jsx)(u.Tooltip, {
                        text: v ? S.default.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
                        forceOpen: !0,
                        children: e => (0, l.jsx)("div", {
                            ref: t,
                            className: o(E.CHAT_INPUT_BUTTON_CLASSNAME, g.buttonContainer),
                            ...e,
                            children: (0, l.jsx)(f.default, {
                                innerClassName: g.button,
                                icon: p.default,
                                onClick: A,
                                isActive: R,
                                pulse: C,
                                "aria-label": S.default.Messages.GIF_BUTTON_LABEL,
                                "aria-expanded": R,
                                "aria-haspopup": "dialog",
                                "aria-controls": I
                            })
                        })
                    })
                }))
        },
        198: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                o = n("812204"),
                s = n("685665"),
                a = n("649844"),
                u = n("551305"),
                d = n("978679"),
                c = n("158998"),
                f = n("49111"),
                p = n("646718"),
                m = n("782340"),
                h = n("537461"),
                E = i.memo(function(e) {
                    let {
                        disabled: t,
                        channel: n
                    } = e, {
                        analyticsLocations: i
                    } = (0, s.default)(o.default.GIFT_BUTTON), E = (0, c.useDirectMessageRecipient)(n);
                    if (t) return null;
                    let S = () => (0, a.default)({
                        isGift: !0,
                        giftRecipient: null === E ? void 0 : E,
                        initialPlanId: null,
                        subscriptionTier: p.PremiumSubscriptionSKUs.TIER_2,
                        analyticsLocations: i,
                        analyticsObject: {
                            page: n.isPrivate() ? f.AnalyticsPages.DM_CHANNEL : f.AnalyticsPages.GUILD_CHANNEL,
                            section: f.AnalyticsSections.CHANNEL_TEXT_AREA,
                            object: f.AnalyticsObjects.BUTTON_ICON,
                            objectType: f.AnalyticsObjectTypes.GIFT
                        }
                    });
                    return (0, l.jsx)(r.Tooltip, {
                        text: m.default.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
                        children: e => (0, l.jsx)(u.default, {
                            ...e,
                            innerClassName: h.button,
                            isActive: !1,
                            "aria-label": m.default.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                            "aria-haspopup": "dialog",
                            onClick: S,
                            children: (0, l.jsx)(d.default, {})
                        })
                    })
                })
        },
        315814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414055"),
                o = n("819855"),
                s = n("206625"),
                a = n("841098"),
                u = n("812204"),
                d = n("685665"),
                c = n("166960"),
                f = n("488705"),
                p = n("551305"),
                m = n("433328"),
                h = n("599110"),
                E = n("49111"),
                S = n("646718"),
                g = n("782340"),
                C = n("537461"),
                T = i.memo(function(e) {
                    let {
                        disabled: t,
                        referralsRemaining: n,
                        channel: T,
                        isResending: v
                    } = e, {
                        enabled: y
                    } = c.default.useExperiment({
                        location: "ec41f5_1"
                    }, {
                        autoTrackExposure: !0
                    }), x = y ? g.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP.format() : v ? g.default.Messages.SHARE_NITRO_RESEND_TOOLTIP : g.default.Messages.SHARE_NITRO_TOOLTIP, I = y ? g.default.Messages.SHARE_NITRO_BIRTHDAY_TOOLTIP_UNFORMATTED : null, [N, _] = i.useState(!1), [A, R] = i.useState(!1), O = (0, s.default)(null, () => R(!1)), {
                        analyticsLocations: M
                    } = (0, d.default)(u.default.REFERRAL_TRIALS_COMPOSER_BUTTON), k = T.isDM() && void 0 !== T.recipients ? T.recipients[0] : null, b = (0, a.default)();
                    return t ? null : (0, l.jsxs)("div", {
                        ref: O,
                        className: C.buttonContainer,
                        children: [(0, l.jsx)(f.default, {
                            shouldShowPopout: A,
                            referralsRemaining: n,
                            channel: T,
                            onClose: () => R(!1),
                            isResending: v
                        }), (0, l.jsx)(r.Tooltip, {
                            text: x,
                            shouldShow: !A,
                            "aria-label": null != I ? I : x,
                            children: e => (0, l.jsx)("div", {
                                onMouseEnter: () => {
                                    !A && !N && (_(!0), h.default.track(E.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                        location_stack: M,
                                        step: S.ReferralTrialsAnalyticSteps.BADGE_TOOLTIP_VIEWED,
                                        other_user_id: Number(k)
                                    }))
                                },
                                onMouseLeave: () => {
                                    _(!1)
                                },
                                children: (0, l.jsx)(p.default, {
                                    ...e,
                                    innerClassName: C.button,
                                    isActive: A,
                                    "aria-label": null != I ? I : x,
                                    "aria-haspopup": "dialog",
                                    onClick: () => {
                                        R(e => !e), h.default.track(E.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                            location_stack: M,
                                            step: S.ReferralTrialsAnalyticSteps.BADGE_CLICKED,
                                            other_user_id: Number(k)
                                        })
                                    },
                                    children: (0, l.jsx)(m.default, {
                                        referralsRemaining: n,
                                        hovered: N,
                                        isResending: v,
                                        shouldShowBirthdayUX: y,
                                        isLightTheme: (0, o.isThemeLight)(b)
                                    })
                                })
                            })
                        })]
                    })
                })
        },
        503063: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("716241"),
                d = n("574073"),
                c = n("529805"),
                f = n("393414"),
                p = n("300322"),
                m = n("967241"),
                h = n("377253"),
                E = n("116320"),
                S = n("381546"),
                g = n("49111"),
                C = n("782340"),
                T = n("650593");

            function v(e) {
                let {
                    channel: t,
                    message: n,
                    replyChainLength: r
                } = e;
                return i.useEffect(() => {
                    (0, u.trackWithMetadata)(g.AnalyticEvents.THREAD_NUDGE_SHOWN, {
                        type: "Reply Chain (".concat(3, ")"),
                        reply_chain_length: r + 1,
                        channel_id: t.id,
                        guild_id: t.guild_id
                    })
                }, [t]), (0, l.jsxs)(a.Clickable, {
                    onClick: function() {
                        (0, c.deletePendingReply)(t.id), (0, m.openThreadSidebarForCreating)(t, n, "Reply Chain Nudge")
                    },
                    className: T.threadSuggestionBar,
                    focusProps: {
                        offset: {
                            right: -4,
                            left: -4
                        }
                    },
                    children: [(0, l.jsx)(a.Text, {
                        color: "header-secondary",
                        className: T.text,
                        variant: "text-sm/normal",
                        children: C.default.Messages.THREAD_REPLY_SUGGESTION.format({
                            count: Math.min(10, r + 1)
                        })
                    }), (0, l.jsx)(a.Text, {
                        color: "text-link",
                        className: T.createThreadButton,
                        variant: "text-sm/semibold",
                        children: C.default.Messages.CREATE_THREAD
                    })]
                })
            }

            function y(e) {
                let {
                    reply: t,
                    chatInputType: n
                } = e, {
                    channel: i,
                    message: r,
                    shouldMention: u,
                    showMentionToggle: m
                } = t, {
                    nick: y,
                    colorString: x,
                    colorRoleName: I
                } = (0, d.default)(r), N = function(e, t) {
                    let n = e.id,
                        l = t.id;
                    return (0, s.useStateFromStores)([h.default], () => {
                        let e = l;
                        for (let t = 0; t < 10; t++) {
                            let l = h.default.getMessage(n, e);
                            if ((null == l ? void 0 : l.type) !== g.MessageTypes.REPLY || null == l.messageReference) return t;
                            e = l.messageReference.message_id
                        }
                        return 10
                    }, [n, l])
                }(i, r), _ = (0, p.useCanStartPublicThread)(i, r), A = n.showThreadPromptOnReply && N >= 2 && _;

                function R(e) {
                    e.stopPropagation(), (0, c.setPendingReplyShouldMention)(i.id, !u)
                }
                return (0, l.jsx)("div", {
                    className: T.clipContainer,
                    children: (0, l.jsxs)("div", {
                        className: T.container,
                        children: [(0, l.jsxs)("div", {
                            className: T.replyBar,
                            children: [(0, l.jsx)(a.Clickable, {
                                onClick: () => (0, f.transitionTo)(g.Routes.CHANNEL(i.getGuildId(), i.id, r.id)),
                                focusProps: {
                                    offset: {
                                        top: -8,
                                        right: -4,
                                        bottom: -8,
                                        left: -4
                                    }
                                },
                                children: (0, l.jsx)(a.Text, {
                                    color: "header-secondary",
                                    className: o(T.text, T.replyLabel),
                                    variant: "text-sm/normal",
                                    children: C.default.Messages.REPLYING_TO.format({
                                        userHook: (e, t) => (0, l.jsx)(a.NameWithRole, {
                                            className: T.name,
                                            name: y,
                                            color: x,
                                            roleName: I
                                        }, t)
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: T.actions,
                                children: [m && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(a.Tooltip, {
                                        text: u ? C.default.Messages.REPLY_MENTION_ON_TOOLTIP : C.default.Messages.REPLY_MENTION_OFF_TOOLTIP,
                                        children: e => {
                                            let {
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                onFocus: i,
                                                onBlur: r
                                            } = e;
                                            return (0, l.jsx)(a.Clickable, {
                                                role: "switch",
                                                "aria-checked": u,
                                                onClick: R,
                                                onMouseEnter: t,
                                                onMouseLeave: n,
                                                onFocus: i,
                                                onBlur: r,
                                                children: (0, l.jsxs)(a.Text, {
                                                    variant: "text-sm/bold",
                                                    color: u ? "text-link" : "text-muted",
                                                    className: T.mentionButton,
                                                    children: [(0, l.jsx)(E.default, {
                                                        "aria-label": C.default.Messages.MENTION,
                                                        className: T.mentionIcon
                                                    }), u ? C.default.Messages.REPLY_MENTION_ON : C.default.Messages.REPLY_MENTION_OFF]
                                                })
                                            })
                                        }
                                    }), (0, l.jsx)("div", {
                                        className: T.separator,
                                        "aria-hidden": !0
                                    })]
                                }), (0, l.jsx)(a.Clickable, {
                                    className: T.closeButton,
                                    onClick: function(e) {
                                        e.stopPropagation(), (0, c.deletePendingReply)(i.id)
                                    },
                                    children: (0, l.jsx)(S.default, {
                                        className: T.closeIcon
                                    })
                                })]
                            })]
                        }), A && (0, l.jsx)(v, {
                            channel: i,
                            message: r,
                            replyChainLength: N
                        })]
                    })
                })
            }
        },
        923582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("551305"),
                a = n("164424"),
                u = n("782340"),
                d = n("67046"),
                c = i.memo(function(e) {
                    let {
                        onClick: t,
                        disabled: n = !1
                    } = e;
                    return (0, l.jsx)("div", {
                        className: d.separator,
                        children: (0, l.jsx)("div", {
                            className: d.buttonContainer,
                            children: (0, l.jsx)(s.default, {
                                className: d.button,
                                innerClassName: d.innerButton,
                                childClassName: o(d.buttonChild, {
                                    [d.disabled]: n,
                                    [d.activeButtonChild]: !n
                                }),
                                onClick: t,
                                disabled: n,
                                isActive: !1,
                                "aria-label": u.default.Messages.SEND_MESSAGE,
                                children: (0, l.jsx)(a.default, {
                                    className: d.sendIcon
                                })
                            })
                        })
                    })
                })
        },
        80921: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("16470"),
                a = n("77078"),
                u = n("200197"),
                d = n("538282"),
                c = n("551305"),
                f = n("595086"),
                p = n("88497"),
                m = n("13030"),
                h = n("782340"),
                E = n("537461"),
                S = i.memo(i.forwardRef(function(e, t) {
                    let n, {
                            disabled: r,
                            type: p
                        } = e,
                        [S, g] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.pickerId], s.default),
                        C = i.useContext(u.default),
                        [T, v] = i.useState(!1),
                        y = S === m.ExpressionPickerViewType.STICKER,
                        x = i.useCallback(() => {
                            (0, d.toggleExpressionPicker)(m.ExpressionPickerViewType.STICKER, p)
                        }, [p]);
                    i.useEffect(() => {
                        let e = () => {
                                requestAnimationFrame(() => {
                                    v(!0)
                                })
                            },
                            t = () => {
                                requestAnimationFrame(() => {
                                    v(!1)
                                })
                            };
                        return C.addListener("sticker-suggestions-shown", e), C.addListener("sticker-suggestions-hidden", t), () => {
                            C.removeListener("sticker-suggestions-shown", e), C.removeListener("sticker-suggestions-hidden", t)
                        }
                    }, [C]);
                    let I = (0, a.useRedesignIconContext)().enabled;
                    return r ? null : (n = (0, l.jsx)(f.default, {
                        className: I ? "" : E.stickerIcon,
                        winking: T,
                        color: "currentColor"
                    }), (0, l.jsx)("div", {
                        className: o(m.CHAT_INPUT_BUTTON_CLASSNAME, E.buttonContainer),
                        ref: t,
                        children: (0, l.jsx)(c.default, {
                            innerClassName: o(E.button, E.stickerButton, {
                                [E.stickerButtonWithNotification]: !1,
                                [E.stickerButtonTilted]: T && !y
                            }),
                            onClick: x,
                            isActive: y,
                            "aria-label": h.default.Messages.STICKER_BUTTON_LABEL,
                            "aria-expanded": y,
                            "aria-haspopup": "dialog",
                            "aria-controls": g,
                            sparkle: !1,
                            notification: null,
                            children: n
                        })
                    }))
                }))
        },
        231868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                o = n("77078"),
                s = n("328511"),
                a = n("467094"),
                u = n("41170"),
                d = n("381546"),
                c = n("898260"),
                f = n("782340"),
                p = n("108755"),
                m = i.memo(function(e) {
                    var t;
                    let {
                        channelId: n,
                        chatInputType: m
                    } = e, [h, E] = i.useState(null), S = (0, r.useStateFromStores)([s.default], () => s.default.getStickerPreview(n, m.drafts.type));
                    return (null === (t = m.stickers) || void 0 === t ? void 0 : t.allowSending) && null != S && 0 !== S.length ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: p.stickerPreviews,
                            children: S.map(e => (0, l.jsxs)("div", {
                                className: p.stickerPreviewContainer,
                                children: [(0, l.jsx)(o.Clickable, {
                                    onFocus: () => E(e.id),
                                    onBlur: () => E(null),
                                    className: p.closeButton,
                                    "aria-label": f.default.Messages.GUILD_STICKER_A11Y_REMOVE_STICKER.format({
                                        name: e.name
                                    }),
                                    onClick: () => (0, a.clearStickerPreview)(n, m.drafts.type),
                                    children: (0, l.jsx)("div", {
                                        className: p.closeIconContainer,
                                        children: (0, l.jsx)(d.default, {
                                            className: p.closeIcon
                                        })
                                    })
                                }), (0, l.jsx)(u.default, {
                                    isInteracting: h === e.id,
                                    className: p.stickerPreview,
                                    size: 48,
                                    sticker: e
                                })]
                            }, e.id))
                        }), (0, l.jsx)(c.default, {
                            className: p.stickerPreviewDivider
                        })]
                    }) : null
                })
        },
        834725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackAutocompleteOpen: function() {
                    return u
                },
                trackAutocompleteSelect: function() {
                    return d
                },
                trackStickerPreviewSelect: function() {
                    return c
                }
            });
            var l, i, r = n("716241"),
                o = n("161585"),
                s = n("599110"),
                a = n("49111");

            function u(e, t, n) {
                var l, i;
                s.default.track(a.AnalyticEvents.CHANNEL_AUTOCOMPLETE_OPEN, {
                    ...(0, r.collectChannelAnalyticsMetadata)(t),
                    ...(0, r.collectGuildAnalyticsMetadata)(t.guild_id),
                    autocomplete_type: e,
                    num_emoji_results: null !== (l = null == n ? void 0 : n.numEmojiResults) && void 0 !== l ? l : 0,
                    num_sticker_results: null !== (i = null == n ? void 0 : n.numStickerResults) && void 0 !== i ? i : 0
                })
            }

            function d(e, t, n, l) {
                var i, o, u, d, c;
                s.default.track(a.AnalyticEvents.CHANNEL_AUTOCOMPLETE_SELECTED, {
                    ...(0, r.collectChannelAnalyticsMetadata)(n),
                    ...(0, r.collectGuildAnalyticsMetadata)(n.guild_id),
                    autocomplete_type: e,
                    selection_type: t,
                    emoji_id: null == l ? void 0 : l.emojiId,
                    sticker_id: null == l ? void 0 : l.stickerId,
                    num_emoji_results: null !== (i = null == l ? void 0 : l.numEmojiResults) && void 0 !== i ? i : 0,
                    num_sticker_results: null !== (o = null == l ? void 0 : l.numStickerResults) && void 0 !== o ? o : 0,
                    emoji_name: null !== (u = null == l ? void 0 : l.expressionName) && void 0 !== u ? u : "",
                    is_custom: null !== (d = null == l ? void 0 : l.isCustom) && void 0 !== d && d,
                    is_animated: null !== (c = null == l ? void 0 : l.isAnimated) && void 0 !== c && c
                })
            }(l = i || (i = {})).AUTOCOMPLETE = "autocomplete", l.AUTOSUGGEST = "autosuggest", l.STICKER_PICKER = "picker";

            function c(e) {
                let {
                    sticker: t,
                    stickerSelectLocation: n,
                    isReplacement: l,
                    analyticsLocations: i
                } = e;
                s.default.track(a.AnalyticEvents.STICKER_ATTACHED, {
                    replaced: l,
                    source: function(e) {
                        switch (e) {
                            case o.StickerSelectLocation.AUTOCOMPLETE:
                                return "autocomplete";
                            case o.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                                return "autosuggest";
                            case o.StickerSelectLocation.STICKER_PICKER:
                                return "picker";
                            default:
                                return null
                        }
                    }(n),
                    sticker_id: t.id,
                    location_stack: i
                })
            }
        },
        537566: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("383018"),
                u = n("228226"),
                d = n("829290"),
                c = n("503063"),
                f = n("537461"),
                p = i.memo(e => {
                    let {
                        channel: t,
                        type: n,
                        activeCommand: i,
                        pendingReply: r
                    } = e, {
                        activeCommandOption: p,
                        activeCommandOptionStates: m
                    } = (0, s.useStateFromStoresObject)([a.default], () => ({
                        activeCommandOption: a.default.getActiveOption(t.id),
                        activeCommandOptionStates: a.default.getOptionStates(t.id)
                    })), h = (0, d.useShouldShowPTONotice)(t), E = [];
                    return (null != i && E.push((0, l.jsx)(u.default, {
                        activeCommand: i,
                        activeOption: null != p ? p : null,
                        optionStates: m
                    })), null != r && E.push((0, l.jsx)(c.default, {
                        reply: r,
                        chatInputType: n
                    })), h && E.push((0, l.jsx)(d.StaffPTOBar, {})), 0 === (E = E.map((e, t) => {
                        let n = t === E.length - 1;
                        return (0, l.jsx)("div", {
                            className: o({
                                [f.stackedAttachedBar]: !n
                            }),
                            children: e
                        }, t)
                    })).length) ? null : (0, l.jsx)("div", {
                        className: f.attachedBars,
                        children: E
                    })
                })
        },
        912823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("394846"),
                o = n("446674"),
                s = n("798609"),
                a = n("206230"),
                u = n("427953"),
                d = n("383018"),
                c = n("619935"),
                f = n("540692"),
                p = n("53253"),
                m = n("1607"),
                h = n("328511"),
                E = n("585722"),
                S = n("697218"),
                g = n("719923"),
                C = n("998206"),
                T = n("35385"),
                v = n("695369"),
                y = n("198"),
                x = n("315814"),
                I = n("108486"),
                N = n("923582"),
                _ = n("80921"),
                A = n("954016"),
                R = n("646718"),
                O = n("537461");

            function M(e) {
                let {
                    disabled: t,
                    channel: n
                } = e, {
                    enabled: r
                } = p.default.useExperiment({
                    location: "dc120b_1"
                }, {
                    autoTrackExposure: !1
                }), o = (0, p.useIsSeasonalGiftingActive)();
                i.useEffect(() => {
                    o && p.default.trackExposure({
                        location: "dc120b_2"
                    })
                }, [o]);
                let s = r && o;
                return s ? (0, l.jsx)(I.default, {
                    disabled: t,
                    channel: n
                }) : (0, l.jsx)(y.default, {
                    disabled: t,
                    channel: n
                })
            }
            var k = i.memo(function(e) {
                var t, n, i, p, y, I, k, b, P;
                let {
                    type: L,
                    disabled: U,
                    channel: j,
                    handleSubmit: D,
                    isEmpty: w
                } = e, B = (0, o.useStateFromStores)([a.default], () => a.default.isSubmitButtonEnabled), H = (0, o.useStateFromStores)([h.default], () => h.default.getStickerPreview(j.id, L.drafts.type)), F = null != H && H.length > 0, G = (0, o.useStateFromStores)([E.default], () => E.default.getUploads(j.id, L.drafts.type)), {
                    activeCommand: K,
                    activeCommandOption: V
                } = (0, o.useStateFromStoresObject)([d.default], () => ({
                    activeCommand: d.default.getActiveCommand(j.id),
                    activeCommandOption: d.default.getActiveOption(j.id)
                })), {
                    paymentsBlocked: W
                } = c.default.useExperiment({
                    location: "dc120b_3"
                }, {
                    autoTrackExposure: !1
                }), Y = [], {
                    enabled: q
                } = m.default.getCurrentConfig({
                    location: "dc120b_4"
                }, {
                    autoTrackExposure: !1
                }), z = S.default.getCurrentUser(), Q = null !== (p = (0, o.useStateFromStores)([f.default], () => q && g.default.isPremiumExactly(z, R.PremiumTypes.TIER_2) ? f.default.getReferralsRemaining() : 0)) && void 0 !== p ? p : 0, X = (0, o.useStateFromStores)([f.default], () => {
                    if (!j.isDM() || void 0 === j.recipients || j.recipients.length > 1 || !q) return !1;
                    let e = j.recipients[0],
                        t = f.default.getSentUserIds();
                    return t.includes(e)
                }), [Z, J] = (0, o.useStateFromStoresArray)([f.default, S.default], () => {
                    let e = [!1, !1];
                    if (!j.isDM() || void 0 === j.recipients || j.recipients.length > 1) return e;
                    let t = j.recipients[0],
                        n = S.default.getUser(t);
                    if (null == n) return e;
                    let l = n.bot;
                    if (l) return e;
                    let i = X || Q > 0,
                        r = f.default.getRecipientEligibility(t);
                    return [q && i && r, r]
                }), $ = (0, u.useIsActivitiesInTextEnabled)(j.id, "ChannelTextAreaButtons");
                return (!r.isMobile && (j.isDM() && (null === (y = L.gifts) || void 0 === y ? void 0 : y.button) != null && null == K && (g.default.isPremiumExactly(z, R.PremiumTypes.TIER_2) && J && m.default.trackExposure({
                    location: "dc120b_5"
                }), Z && Y.push((0, l.jsx)(x.default, {
                    disabled: U,
                    referralsRemaining: Q,
                    channel: j,
                    isResending: X
                }, "referral"))), $ && A.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES.includes(j.type) && null == K && (null === (I = L.commands) || void 0 === I ? void 0 : I.enabled) && Y.push((0, l.jsx)(C.default, {
                    disabled: U,
                    channel: j,
                    type: L
                }, "activity")), (null === (k = L.gifts) || void 0 === k ? void 0 : k.button) != null && null == K && !W && Y.push((0, l.jsx)(M, {
                    disabled: U,
                    channel: j
                }, "gift")), (null === (b = L.gifs) || void 0 === b ? void 0 : b.button) != null && null == K && Y.push((0, l.jsx)(v.default, {
                    disabled: U,
                    type: L
                }, "gif")), (null === (P = L.stickers) || void 0 === P ? void 0 : P.button) != null && null == K && Y.push((0, l.jsx)(_.default, {
                    disabled: U,
                    type: L
                }, "sticker"))), (null === (t = L.emojis) || void 0 === t ? void 0 : t.button) != null && (null == K || null != V && V.type !== s.ApplicationCommandOptionType.ATTACHMENT) && Y.push((0, l.jsx)(T.default, {
                    disabled: U,
                    type: L
                }, "emoji")), (null === (n = L.submit) || void 0 === n ? void 0 : n.button) != null && ((null === (i = L.submit) || void 0 === i ? void 0 : i.ignorePreference) || B) && Y.push((0, l.jsx)(N.default, {
                    onClick: D,
                    disabled: U || 0 === G.length && w && !F
                }, "submit")), 0 === Y.length) ? null : (0, l.jsx)("div", {
                    className: O.buttons,
                    children: Y
                })
            })
        },
        681060: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return eu
                }
            }), n("222007"), n("70102");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("44170"),
                a = n("627445"),
                u = n.n(a),
                d = n("16470"),
                c = n("394846"),
                f = n("316693"),
                p = n("446674"),
                m = n("77078"),
                h = n("295426"),
                E = n("206230"),
                S = n("812204"),
                g = n("685665"),
                C = n("996554"),
                T = n("426969"),
                v = n("847352"),
                y = n("383018"),
                x = n("529190"),
                I = n("829290"),
                N = n("842343"),
                _ = n("200197"),
                A = n("538282"),
                R = n("241488"),
                O = n("292936"),
                M = n("791234"),
                k = n("267567"),
                b = n("217535"),
                P = n("558901"),
                L = n("328511"),
                U = n("467094"),
                j = n("24373"),
                D = n("300322"),
                w = n("845579"),
                B = n("26989"),
                H = n("957255"),
                F = n("18494"),
                G = n("769264"),
                K = n("585722"),
                V = n("697218"),
                W = n("378765"),
                Y = n("991170"),
                q = n("773336"),
                z = n("545054"),
                Q = n("850391"),
                X = n("743825"),
                Z = n("231868"),
                J = n("834725"),
                $ = n("537566"),
                ee = n("912823"),
                et = n("376215"),
                en = n("830618"),
                el = n("848471"),
                ei = n("153213"),
                er = n("49111"),
                eo = n("406291"),
                es = n("13030"),
                ea = n("537461"),
                eu = i.memo(i.forwardRef(function(e, t) {
                    var r, a, eu, ed, ec, ef, ep, em, eh, eE, eS, eg, eC;
                    let {
                        textValue: eT,
                        richValue: ev,
                        className: ey,
                        innerClassName: ex,
                        editorClassName: eI,
                        id: eN,
                        required: e_,
                        disabled: eA,
                        placeholder: eR,
                        accessibilityLabel: eO,
                        channel: eM,
                        type: ek,
                        focused: eb,
                        renderAttachButton: eP,
                        renderAppLauncherButton: eL,
                        renderApplicationCommandIcon: eU,
                        pendingReply: ej,
                        onChange: eD,
                        onResize: ew,
                        onBlur: eB,
                        onFocus: eH,
                        onKeyDown: eF,
                        onSubmit: eG,
                        promptToUpload: eK,
                        highlighted: eV,
                        canMentionRoles: eW,
                        canMentionChannels: eY,
                        maxCharacterCount: eq,
                        showRemainingCharsAfterCount: ez,
                        allowNewLines: eQ = !0,
                        characterCountClassName: eX,
                        "aria-describedby": eZ,
                        "aria-labelledby": eJ,
                        setEditorRef: e$,
                        autoCompletePosition: e0,
                        children: e1,
                        disableThemedBackground: e2 = !1,
                        emojiPickerCloseOnModalOuterClick: e4,
                        parentModalKey: e8
                    } = e;
                    u(null != ek, "chat input type must be set");
                    let {
                        AnalyticsLocationProvider: e6
                    } = (0, g.default)(S.default.CHANNEL_TEXT_AREA), e3 = function(e) {
                        let t = i.useRef(null);
                        if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
                        return null == e ? t : e
                    }(t), e7 = i.useRef(null), e5 = i.useRef(null), e9 = i.useRef(null), te = i.useRef(null);
                    null == e$ || e$(e5.current);
                    let {
                        activeCommand: tt,
                        activeCommandSection: tn
                    } = (0, p.useStateFromStoresObject)([y.default], () => {
                        var e, t;
                        return {
                            activeCommand: (null === (e = ek.commands) || void 0 === e ? void 0 : e.enabled) ? y.default.getActiveCommand(eM.id) : null,
                            activeCommandSection: (null === (t = ek.commands) || void 0 === t ? void 0 : t.enabled) ? y.default.getActiveCommandSection(eM.id) : null
                        }
                    }), {
                        isLurking: tl,
                        isPendingMember: ti,
                        disabled: tr,
                        canAttachFiles: to,
                        canCreateThreads: ts,
                        canEveryoneSendMessages: ta
                    } = function(e, t, n, l) {
                        let i = e.getGuildId(),
                            r = (0, p.useStateFromStores)([k.default], () => null != i && k.default.isLurking(i), [i]),
                            o = (0, p.useStateFromStores)([B.default, V.default], () => {
                                var e, t;
                                let n = V.default.getCurrentUser();
                                return null !== (t = null != i && null != n ? null === (e = B.default.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
                            }),
                            s = (0, p.useStateFromStoresObject)([H.default], () => {
                                var i, r;
                                let s = e.isPrivate(),
                                    a = H.default.computePermissions(e),
                                    u = f.default.has(a, er.Permissions.CREATE_PUBLIC_THREADS) || f.default.has(a, er.Permissions.CREATE_PRIVATE_THREADS),
                                    d = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || u) && (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireSendMessages) || f.default.has(a, er.Permissions.SEND_MESSAGES)),
                                    c = d && f.default.has(a, er.Permissions.ATTACH_FILES),
                                    p = null != n,
                                    m = (0, D.computeIsReadOnlyThread)(e);
                                return {
                                    disabled: l || o || !s && !d || m,
                                    canAttachFiles: !0 === t.attachments && (s || o || c || p),
                                    canCreateThreads: u,
                                    canEveryoneSendMessages: Y.default.canEveryoneRole(er.Permissions.SEND_MESSAGES, e)
                                }
                            }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, l, o]);
                        return {
                            isLurking: r,
                            isPendingMember: o,
                            ...s
                        }
                    }(eM, ek, tt, eA), tu = ek.toolbarType === Q.SlateToolbarTypes.STATIC, td = !w.UseLegacyChatInput.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver, tc = !td || !(null === (r = ek.commands) || void 0 === r ? void 0 : r.enabled) || !eb || eT !== eo.COMMAND_SENTINEL, tf = (0, b.default)(), {
                        isSubmitButtonEnabled: tp,
                        fontSize: tm
                    } = (0, p.useStateFromStoresObject)([E.default], () => ({
                        fontSize: E.default.fontSize,
                        isSubmitButtonEnabled: E.default.isSubmitButtonEnabled
                    })), th = (0, p.useStateFromStores)([G.default], () => G.default.isEnabled());
                    ! function(e, t) {
                        let n = i.useCallback(() => {
                                !t && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.EMOJI, e)
                            }, [t, e]),
                            l = i.useCallback(() => {
                                var n;
                                !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.GIF, e)
                            }, [t, e]),
                            r = i.useCallback(() => {
                                var n;
                                !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, A.toggleExpressionPicker)(es.ExpressionPickerViewType.STICKER, e)
                            }, [t, e]);
                        (0, W.useComponentAction)({
                            event: er.ComponentActions.TOGGLE_EMOJI_POPOUT,
                            handler: n
                        }), (0, W.useComponentAction)({
                            event: er.ComponentActions.TOGGLE_GIF_PICKER,
                            handler: l
                        }), (0, W.useComponentAction)({
                            event: er.ComponentActions.TOGGLE_STICKER_PICKER,
                            handler: r
                        })
                    }(ek, tr);
                    let {
                        eventEmitter: tE,
                        handleEditorSelectionChanged: tS
                    } = function(e, t, n) {
                        let [l] = i.useState(() => new s.EventEmitter);
                        return i.useEffect(() => {
                            l.emit("text-changed", t, n)
                        }, [t, n, l]), {
                            eventEmitter: l,
                            handleEditorSelectionChanged: t => {
                                null != e.current && l.emit("selection-changed", t)
                            }
                        }
                    }(e5, eT, ev), {
                        submitting: tg,
                        submit: tC,
                        handleSubmit: tT
                    } = function(e, t, r, o) {
                        let [s, a] = i.useState(!1), u = i.useCallback((i, d, c, f, p) => {
                            var E, S, g;
                            if (s) return;
                            a(!0);
                            let C = null !== (S = null === (E = L.default.getStickerPreview(o, t.drafts.type)) || void 0 === E ? void 0 : E.map(e => e.id)) && void 0 !== S ? S : [],
                                T = null !== (g = K.default.getUploads(o, t.drafts.type)) && void 0 !== g ? g : [];
                            if (null == d && !f && !p && (0, M.shouldShowAddMediaToOriginalPostModal)(T, o)) {
                                a(!1), (0, m.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("67994").then(n.bind(n, "67994"));
                                    return t => (0, l.jsx)(e, {
                                        ...t,
                                        threadId: o,
                                        attachments: T,
                                        sendMessage: () => u(i, void 0, void 0, void 0, !0)
                                    })
                                });
                                return
                            }
                            e({
                                value: i,
                                uploads: T,
                                stickers: C,
                                command: d,
                                commandOptionValues: c,
                                isGif: f
                            }).then(e => {
                                var n, l, i, s;
                                let {
                                    shouldClear: u,
                                    shouldRefocus: d
                                } = e;
                                let c = (n = u, l = t, null !== (s = n && (null === (i = l.submit) || void 0 === i ? void 0 : i.clearOnSubmit)) && void 0 !== s && s),
                                    f = null != r.current;
                                if (c) {
                                    if (o !== F.default.getChannelId()) h.default.saveDraft(o, "", t.drafts.type);
                                    else f && r.current.clearValue()
                                }
                                f && (a(!1), (0, A.closeExpressionPicker)(), d && r.current.focus())
                            })
                        }, [r, e, s, t, o]), d = i.useCallback(e => {
                            var t;
                            null == r || null === (t = r.current) || void 0 === t || t.submit(e)
                        }, []);
                        return {
                            submitting: s,
                            submit: u,
                            handleSubmit: d
                        }
                    }(eG, ek, e5, eM.id), {
                        autocompleteRef: tv,
                        handleMaybeShowAutocomplete: ty,
                        handleHideAutocomplete: tx
                    } = function() {
                        let e = i.useRef(null),
                            t = i.useCallback(() => {
                                var t;
                                null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete()
                            }, []),
                            n = i.useCallback(() => {
                                var t;
                                null === (t = e.current) || void 0 === t || t.onHideAutocomplete()
                            }, []);
                        return {
                            autocompleteRef: e,
                            handleMaybeShowAutocomplete: t,
                            handleHideAutocomplete: n
                        }
                    }();
                    let tI = (eh = tC, eE = ek, eS = e5, i.useCallback(e => {
                        var t, n;
                        eE === Q.ChatInputTypes.CREATE_FORUM_POST ? null === (n = eS.current) || void 0 === n || n.insertGIF(e) : eh(e.url, void 0, void 0, !0), (0, A.closeExpressionPicker)(), null === (t = eS.current) || void 0 === t || t.focus()
                    }, [eS, eh, eE]));
                    let tN = (eg = e5, i.useCallback(function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                l = eg.current;
                            null != e && null != l && l.insertEmoji(e, t, n), t && (0, A.closeExpressionPicker)()
                        }, [eg])),
                        t_ = function(e) {
                            let {
                                editorRef: t,
                                disabled: n,
                                textValue: l,
                                channelId: r,
                                chatInputType: o,
                                submit: s
                            } = e, {
                                analyticsLocations: a
                            } = (0, g.default)();
                            return i.useCallback((e, i) => {
                                var u, d;
                                !n && ((0, j.shouldAttachSticker)(i, l, r, o.drafts.type) ? ((0, J.trackStickerPreviewSelect)({
                                    sticker: e,
                                    stickerSelectLocation: i,
                                    isReplacement: null != L.default.getStickerPreview(r, o.drafts.type),
                                    analyticsLocations: a
                                }), (0, U.addStickerPreview)(r, e, o.drafts.type)) : (s({
                                    value: "",
                                    uploads: void 0,
                                    stickers: [e.id]
                                }), null === (d = t.current) || void 0 === d || d.clearValue()), (0, A.closeExpressionPicker)(), null === (u = t.current) || void 0 === u || u.focus())
                            }, [n, l, r, o.drafts.type, t, a, s])
                        }({
                            editorRef: e5,
                            disabled: tr,
                            textValue: eT,
                            channelId: eM.id,
                            chatInputType: ek,
                            submit: eG
                        });
                    let tA = (eC = e5, i.useCallback(e => {
                            let t = eC.current;
                            null != e && null != t && t.insertSound(e), (0, A.closeExpressionPicker)()
                        }, [eC])),
                        tR = i.useCallback(() => {
                            var e;
                            return null == te ? void 0 : null === (e = te.current) || void 0 === e ? void 0 : e.hide()
                        }, []),
                        {
                            editorHeight: tO,
                            handleResize: tM
                        } = function(e) {
                            let [t, n] = i.useState(0), l = i.useCallback(t => {
                                n(null != t ? t : 0), null == e || e(t)
                            }, [e]);
                            return {
                                editorHeight: t,
                                handleResize: l
                            }
                        }(ew),
                        {
                            handleTab: tk,
                            handleEnter: tb,
                            handleMoveSelection: tP
                        } = function(e, t, n) {
                            let l = i.useCallback(() => {
                                    var l, i;
                                    return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1
                                }, [n]),
                                r = i.useCallback(() => {
                                    var l, i;
                                    return !!(!n && (null === (l = t.current) || void 0 === l ? void 0 : l.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1
                                }, [n]),
                                o = i.useCallback(l => {
                                    var i, r;
                                    return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(l))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onMoveSelection(l)) || !1
                                }, [n]);
                            return {
                                handleTab: l,
                                handleEnter: r,
                                handleMoveSelection: o
                            }
                        }(tv, e7, tc),
                        {
                            expressionPickerView: tL,
                            shouldHideExpressionPicker: tU,
                            handleAutocompleteVisibilityChange: tj,
                            handleOuterClick: tD
                        } = function(e, t, n) {
                            let [l, r] = (0, A.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], d.default);
                            i.useEffect(() => () => {
                                (0, A.closeExpressionPicker)(e)
                            }, [e]);
                            let o = i.useCallback(e => {
                                    t.emit("autocomplete-visibility-change", e), e && (0, A.closeExpressionPicker)()
                                }, [t]),
                                s = i.useCallback(() => {
                                    var e;
                                    null == l && (null === (e = n.current) || void 0 === e || e.handleOuterClick())
                                }, [l]),
                                a = null == l || null == r || r !== e;
                            return {
                                expressionPickerView: l,
                                shouldHideExpressionPicker: a,
                                handleAutocompleteVisibilityChange: o,
                                handleOuterClick: s
                            }
                        }(ek, tE, e5),
                        tw = C.AppLauncherDesktopExperiment.useExperiment({
                            location: "chat_input"
                        }, {
                            autoTrackExposure: !1
                        }).enabled,
                        tB = (0, p.useStateFromStores)([T.default], () => T.default.shouldShowPopup(), []);
                    (0, z.useHereMentionCallback)(tE, eM.guild_id, eM.id);
                    let tH = null != ej,
                        tF = tr && !((tl || ti) && ta) || tg && (null === (a = ek.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit),
                        tG = null,
                        tK = null;
                    null != tt ? tG = null == eU ? void 0 : eU(tt, tn, ea.attachButton) : (!tr || ts) && (tG = null == eP ? void 0 : eP(tH, ea.attachButton), tw && (tK = null == eL ? void 0 : eL()));
                    let tV = td && null != ev && !tr && ek.showCharacterCount && null == tt,
                        tW = td && !__OVERLAY__ && null != ev && null == tt,
                        tY = function(e, t, n, l) {
                            var i, r;
                            let o = w.ExpressionSuggestionsEnabled.useSetting(),
                                s = (0, p.useStateFromStores)([L.default], () => L.default.getStickerPreview(e.id, t.drafts.type)),
                                a = null != s && s.length > 0;
                            return o && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !a && (null === (r = l.current) || void 0 === r ? void 0 : r.isVisible()) !== !0 && !__OVERLAY__ && null != n
                        }(eM, ek, ev, tv),
                        tq = (0, I.useShouldShowPTONotice)(eM),
                        tz = null != tt || null != ej || tq;
                    return (0, l.jsx)(_.EventEmitterProvider, {
                        value: tE,
                        children: (0, l.jsxs)(e6, {
                            children: [tW && tu ? (0, l.jsx)(ei.default, {
                                editorRef: e5,
                                options: ek.markdown,
                                channel: eM
                            }) : tW ? (0, l.jsx)(el.default, {
                                ref: te,
                                editorRef: e5,
                                containerRef: e9,
                                options: ek.markdown
                            }) : null, (0, l.jsxs)("div", {
                                ref: e3,
                                className: o(ey, {
                                    [ea.channelTextArea]: !0,
                                    [ea.channelTextAreaDisabled]: tF,
                                    [ea.highlighted]: eV,
                                    [ea.textAreaMobileThemed]: c.isMobile
                                }),
                                onMouseDown: tD,
                                children: [(0, l.jsx)($.default, {
                                    type: ek,
                                    channel: eM,
                                    activeCommand: tt,
                                    pendingReply: ej
                                }), (0, l.jsxs)("div", {
                                    ref: e9,
                                    onScroll: tR,
                                    className: o(ex, {
                                        [ea.scrollableContainer]: !0,
                                        [ea.themedBackground]: !e2,
                                        [ea.webkit]: "Blink" === platform.layout,
                                        [ea.hasConnectedBar]: tz
                                    }),
                                    children: [(0, l.jsx)(Z.default, {
                                        channelId: eM.id,
                                        chatInputType: ek
                                    }), ek.hideAttachmentArea ? null : (0, l.jsx)(et.default, {
                                        channelId: eM.id,
                                        type: ek,
                                        canAttachFiles: to
                                    }), (0, l.jsxs)("div", {
                                        className: o(ea.inner, {
                                            [ea.innerDisabled]: tF,
                                            [ea.sansAttachButton]: ek !== Q.ChatInputTypes.EDIT && (null != tG || tF && null == tG || tl),
                                            [ea.sansAttachButtonCreateThread]: ek === Q.ChatInputTypes.THREAD_CREATION,
                                            [ea.sansAttachButtonCreatePost]: ek === Q.ChatInputTypes.CREATE_FORUM_POST
                                        }),
                                        children: [tG, tK, (0, l.jsx)(m.FocusRing, {
                                            ringTarget: e3,
                                            ringClassName: ea.focusRing,
                                            children: (0, l.jsx)(X.default, {
                                                ref: e5,
                                                id: eN,
                                                focused: eb,
                                                useSlate: td,
                                                textValue: eT,
                                                richValue: ev,
                                                disabled: tr,
                                                placeholder: eR,
                                                required: e_,
                                                accessibilityLabel: eO,
                                                isPreviewing: (tl || ti) && ta,
                                                channel: eM,
                                                type: ek,
                                                canPasteFiles: to,
                                                uploadPromptCharacterCount: er.MAX_MESSAGE_LENGTH_PREMIUM,
                                                maxCharacterCount: null != eq ? eq : tf,
                                                allowNewLines: eQ,
                                                "aria-describedby": eZ,
                                                onChange: eD,
                                                onResize: tM,
                                                onBlur: eB,
                                                onFocus: eH,
                                                onKeyDown: eF,
                                                onSubmit: tC,
                                                onTab: tk,
                                                onEnter: tb,
                                                onMoveSelection: tP,
                                                onSelectionChanged: tS,
                                                onMaybeShowAutocomplete: ty,
                                                onHideAutocomplete: tx,
                                                promptToUpload: eK,
                                                fontSize: tm,
                                                spellcheckEnabled: th,
                                                canOnlyUseTextCommands: tH,
                                                className: o({
                                                    [ea.textAreaThreadCreation]: ek === Q.ChatInputTypes.THREAD_CREATION,
                                                    [ea.profileBioInput]: ek === Q.ChatInputTypes.PROFILE_BIO_INPUT
                                                }, eI),
                                                "aria-labelledby": eJ
                                            })
                                        }), (0, l.jsx)(ee.default, {
                                            type: ek,
                                            disabled: tr,
                                            channel: eM,
                                            handleSubmit: tT,
                                            isEmpty: 0 === eT.trim().length
                                        })]
                                    })]
                                }), tc ? null : (0, l.jsx)(x.default, {
                                    ref: e7,
                                    channel: eM,
                                    canOnlyUseTextCommands: tH
                                }), (0, l.jsx)(N.default, {
                                    ref: tv,
                                    channel: eM,
                                    canMentionRoles: eW,
                                    canMentionChannels: eY,
                                    useNewSlashCommands: td,
                                    canOnlyUseTextCommands: tH,
                                    canSendStickers: null === (eu = ek.stickers) || void 0 === eu ? void 0 : eu.allowSending,
                                    textValue: eT,
                                    focused: eb,
                                    expressionPickerView: tL,
                                    type: ek,
                                    editorRef: e5,
                                    onSendMessage: tC,
                                    onSendSticker: t_,
                                    onVisibilityChange: tj,
                                    editorHeight: tO,
                                    setValue: (e, t) => null == eD ? void 0 : eD(null, e, t),
                                    position: e0
                                }), (0, l.jsx)(P.default, {
                                    textValue: eT,
                                    editorHeight: tO
                                }), tV ? (0, l.jsx)(en.default, {
                                    type: ek,
                                    textValue: eT,
                                    className: eX,
                                    maxCharacterCount: eq,
                                    showRemainingCharsAfterCount: ez
                                }) : null, tY ? (0, l.jsx)(O.default, {
                                    editorRef: e5,
                                    channel: eM,
                                    isEditorFocused: eb,
                                    onSelectSticker: t_,
                                    submitButtonVisible: (null === (ed = ek.submit) || void 0 === ed ? void 0 : ed.button) && (null !== (ep = null === (ec = ek.submit) || void 0 === ec ? void 0 : ec.ignorePreference) && void 0 !== ep ? ep : tp),
                                    stickerIconVisible: null !== (em = null === (ef = ek.stickers) || void 0 === ef ? void 0 : ef.button) && void 0 !== em && em
                                }) : null, e1]
                            }), tU ? null : (0, l.jsx)(R.default, {
                                positionTargetRef: e3,
                                type: ek,
                                onSelectGIF: tI,
                                onSelectEmoji: tN,
                                onSelectSticker: t_,
                                onSelectSound: tA,
                                channel: eM,
                                closeOnModalOuterClick: e4,
                                parentModalKey: e8,
                                position: "top",
                                align: "right",
                                positionLayerClassName: ea.expressionPickerPositionLayer
                            }), tB ? (0, l.jsx)(v.default, {
                                positionTargetRef: e3,
                                channel: eM,
                                closeOnModalOuterClick: e4,
                                parentModalKey: e8
                            }) : null]
                        })
                    })
                }))
        },
        186188: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Emoji: function() {
                    return N
                },
                CustomEmoji: function() {
                    return _
                },
                TextMention: function() {
                    return A
                },
                UserMention: function() {
                    return R
                },
                RoleMention: function() {
                    return O
                },
                ChannelMention: function() {
                    return M
                },
                SoundboardMention: function() {
                    return k
                },
                StaticRouteMention: function() {
                    return b
                },
                CommandMention: function() {
                    return P
                },
                Timestamp: function() {
                    return L
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("446674"),
                r = n("77078"),
                o = n("430568"),
                s = n("308289"),
                a = n("206230"),
                u = n("980215"),
                d = n("361572"),
                c = n("82300"),
                f = n("235004"),
                p = n("42203"),
                m = n("305961"),
                h = n("102985"),
                E = n("697218"),
                S = n("666897"),
                g = n("404008"),
                C = n("387111"),
                T = n("158998"),
                v = n("680894"),
                y = n("782340"),
                x = n("503241"),
                I = n("632215");

            function N(e) {
                let {
                    emoji: t
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: t.name,
                    delay: 750,
                    position: "top",
                    children: e => (0, l.jsx)(o.default, {
                        src: t.src,
                        emojiName: t.name,
                        animated: !1,
                        ...e
                    })
                })
            }

            function _(e) {
                let {
                    emoji: t
                } = e;
                return (0, l.jsx)(r.Tooltip, {
                    text: t.name,
                    delay: 750,
                    position: "top",
                    children: e => (0, l.jsx)(o.default, {
                        emojiId: t.emojiId,
                        emojiName: t.name,
                        animated: t.animated,
                        ...e
                    })
                })
            }

            function A(e) {
                let {
                    text: t,
                    channelId: n,
                    guildId: i
                } = e, r = m.default.getGuild(i), o = p.default.getChannel(n), s = (0, u.useClydeEnabled)(r, o), a = s && "@Clyde" === t ? v.CLYDE_AI_MENTION_COLOR : null;
                return (0, l.jsx)(S.default, {
                    color: a,
                    children: t
                })
            }

            function R(e) {
                let {
                    id: t,
                    guildId: n,
                    channelId: o
                } = e, a = (0, i.useStateFromStores)([E.default], () => E.default.getUser(t)), u = (0, i.useStateFromStores)([h.default], () => h.default.hidePersonalInformation), d = C.default.useName(n, o, a), c = (0, l.jsx)(S.default, {
                    children: null == d ? "<@".concat(t, ">") : "@".concat(d)
                });
                if (null != a) {
                    let e = u || a.isPomelo() ? null : "#".concat(a.discriminator);
                    return (0, l.jsx)(r.Tooltip, {
                        text: (0, l.jsxs)("div", {
                            className: x.userTooltip,
                            children: [(0, l.jsx)(s.default, {
                                user: a,
                                animate: !0,
                                size: r.AvatarSizes.SIZE_16,
                                className: x.avatar
                            }), T.default.getUserTag(a, {
                                mode: "username",
                                identifiable: u ? "never" : "always"
                            }), (0, l.jsx)("span", {
                                className: x.discriminator,
                                children: e
                            })]
                        }),
                        delay: 750,
                        position: "top",
                        "aria-label": T.default.getUserTag(a, {
                            decoration: "never"
                        }),
                        children: e => (0, l.jsx)(r.Clickable, {
                            tag: "span",
                            ...e,
                            children: c
                        })
                    })
                }
                return c
            }

            function O(e) {
                let {
                    id: t,
                    guildId: n
                } = e, o = (0, i.useStateFromStores)([m.default], () => {
                    let e = m.default.getGuild(n);
                    return null == e ? null : e.roles[t]
                }), s = (0, i.useStateFromStores)([a.default], () => a.default.roleStyle);
                if (null == o) return (0, l.jsx)("span", {
                    children: "@deleted-role"
                });
                let u = null != o.color && 0 !== o.color;
                return (0, l.jsxs)(S.default, {
                    color: "username" === s && u ? o.color : null,
                    children: ["dot" === s && (0, l.jsx)(r.RoleDot, {
                        color: o.colorString,
                        background: !1,
                        tooltip: !1
                    }), "@", o.name]
                })
            }

            function M(e) {
                let {
                    id: t
                } = e, n = (0, i.useStateFromStores)([p.default], () => p.default.getChannel(t)), r = y.default.Messages.UNKNOWN_CHANNEL, o = "text", s = !0;
                if (null != n) {
                    var a;
                    r = (0, d.canViewChannel)(n) ? n.name : y.default.Messages.NO_ACCESS, o = (0, d.canViewChannel)(n) ? null !== (a = (0, g.getMentionIconType)(n)) && void 0 !== a ? a : "text" : "locked", s = (0, c.isChannelTypeMentionable)(n.type)
                }
                return s ? (0, l.jsx)(S.default, {
                    iconType: o,
                    children: r
                }) : (0, l.jsx)("span", {
                    children: "#" + r
                })
            }

            function k(e) {
                var t;
                let {
                    id: n
                } = e, r = (0, i.useStateFromStores)([f.default], () => f.default.getSoundById(n));
                return (0, l.jsx)(S.default, {
                    children: null !== (t = null == r ? void 0 : r.name) && void 0 !== t ? t : "Sound"
                })
            }

            function b(e) {
                let {
                    id: t
                } = e, n = {
                    home: y.default.Messages.SERVER_GUIDE,
                    guide: y.default.Messages.SERVER_GUIDE,
                    browse: y.default.Messages.CHANNEL_BROWSER_TITLE,
                    customize: y.default.Messages.CHANNELS_AND_ROLES
                };
                return (0, l.jsx)(S.default, {
                    iconType: t,
                    children: n[t]
                })
            }

            function P(e) {
                let {
                    text: t,
                    id: n
                } = e;
                return (0, l.jsxs)(S.default, {
                    children: [t, "(", n, ")"]
                })
            }

            function L(e) {
                let {
                    timestamp: t
                } = e;
                return (0, l.jsx)("span", {
                    className: I.timestamp,
                    children: t.formatted
                })
            }
        },
        30278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("812204"),
                d = n("685665"),
                c = n("154889"),
                f = n("917247"),
                p = n("956597"),
                m = n("42203"),
                h = n("18494"),
                E = n("791106"),
                S = n("216422"),
                g = n("599110"),
                C = n("49111"),
                T = n("646718"),
                v = n("782340"),
                y = n("317478");

            function x() {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("532210").then(n.bind(n, "532210"));
                    return t => (0, l.jsx)(e, {
                        channel: null,
                        ...t
                    })
                })
            }

            function I(e) {
                var t;
                let {
                    className: n,
                    iconOnly: r,
                    remaining: I
                } = e, N = (0, s.useStateFromStores)([h.default, m.default], () => {
                    let e = m.default.getChannel(h.default.getChannelId());
                    return (null == e ? void 0 : e.isPrivate()) ? C.AnalyticsPages.DM_CHANNEL : C.AnalyticsPages.GUILD_CHANNEL
                }), {
                    analyticsLocations: _
                } = (0, d.default)(u.default.PREMIUM_UPSELL), A = (0, c.usePremiumDiscountOffer)(), R = (0, f.usePremiumTrialOffer)(), O = (0, c.discountOfferHasTier)(A, T.PremiumSubscriptionSKUs.TIER_2), M = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === T.PremiumSubscriptionSKUs.TIER_2;
                return (i.useEffect(() => {
                    g.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: "longer messages inline",
                        location: {
                            location_page: N,
                            location_section: C.AnalyticsSections.CHANNEL_TEXT_AREA
                        },
                        location_stack: _
                    })
                }, [N, _]), (M || O) && I < 0) ? (0, l.jsx)(p.default, {
                    type: T.PremiumUpsellTypes.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
                    subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
                    context: I,
                    discountOffer: A,
                    trialOffer: R,
                    children: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                        onLearnMore: x
                    })
                }) : r ? (0, l.jsx)(a.Clickable, {
                    className: y.iconOnly,
                    onClick: () => x(),
                    children: (0, l.jsx)(a.Tooltip, {
                        text: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
                        position: "top",
                        children: e => (0, l.jsx)(S.default, {
                            className: y.premium,
                            ...e
                        })
                    })
                }) : (0, l.jsxs)("div", {
                    className: o(y.root, n),
                    children: [(0, l.jsx)(S.default, {
                        className: y.premium,
                        color: E.GradientCssUrls.PREMIUM_TIER_2
                    }), (0, l.jsx)(a.Text, {
                        className: y.text,
                        variant: "text-sm/normal",
                        children: v.default.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
                            onLearnMore: x
                        })
                    })]
                })
            }
        },
        606013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("781738");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("272030"),
                u = n("507217"),
                d = n("383018"),
                c = n("378765"),
                f = n("773336"),
                p = n("573055"),
                m = n("149022"),
                h = n("49111");
            let E = /(\t|\s)/;
            class S extends i.PureComponent {
                componentDidMount() {
                    !this.props.disableAutoFocus && (Promise.resolve().then(() => {
                        var e;
                        let {
                            value: t
                        } = this.props;
                        null === (e = this._ref) || void 0 === e || e.setSelection(t.length, t.length)
                    }), this.focus()), null != d.default.getActiveCommand(this.props.channel.id) && u.setActiveCommand({
                        channelId: this.props.channel.id,
                        command: null,
                        section: null
                    })
                }
                componentDidUpdate(e, t) {
                    this.state.nextSelection !== t.nextSelection && null != this._ref && this._ref.setSelection(this.state.nextSelection, this.state.nextSelection)
                }
                getCurrentWord() {
                    let e = this._ref;
                    if (null == e) return {
                        word: null,
                        isAtStart: !1
                    };
                    let {
                        value: t
                    } = this.props;
                    if (0 === t.trim().length) return {
                        word: null,
                        isAtStart: !1
                    };
                    let n = e.selectionStart,
                        l = e.selectionEnd;
                    for (; n > 0;) {
                        let e = E.test(t[n - 1]);
                        if (e) break;
                        n--
                    }
                    return {
                        word: t.slice(n, l),
                        isAtStart: 0 === n
                    }
                }
                blur() {
                    let {
                        _ref: e
                    } = this;
                    null != e && e.blur()
                }
                submit(e) {
                    return e.preventDefault(), this.props.onSubmit(this.props.value)
                }
                insertAutocomplete(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        {
                            word: l
                        } = this.getCurrentWord();
                    if (null == l) this.insertText(e, t, n);
                    else {
                        let t = this._ref;
                        if (null == t) return;
                        let i = t.value.slice(0, t.selectionStart - l.length),
                            r = t.value.slice(t.selectionEnd);
                        this._insertText(e, i, r, n)
                    }
                }
                insertText(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        l = this._ref;
                    if (null == l) return;
                    let i = l.value.slice(0, l.selectionStart),
                        r = l.value.slice(l.selectionEnd);
                    this._insertText(e, i, r, n)
                }
                _insertText(e, t, n, l) {
                    let i = this._ref;
                    if (null == i) return;
                    l && (e += " ");
                    let r = t + e + n,
                        {
                            onChange: o
                        } = this.props;
                    null == o || o(null, r, (0, m.toRichValue)(r));
                    let s = t.length + e.length;
                    this.setState({
                        nextSelection: s
                    }, () => {
                        this.props.maybeShowAutocomplete()
                    })
                }
                hasOpenCodeBlock() {
                    let e = this._ref;
                    if (null == e) return !1;
                    let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
                    return null != t && t.length > 0 && t.length % 2 != 0
                }
                render() {
                    let {
                        value: e,
                        disabled: t,
                        placeholder: n,
                        required: i,
                        onResize: r,
                        className: a,
                        id: u,
                        submitting: d,
                        textAreaPaddingClassName: f,
                        spellcheckEnabled: p,
                        "aria-controls": m,
                        "aria-expanded": E,
                        "aria-activedescendant": S
                    } = this.props;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ComponentAction, {
                            event: h.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                            handler: this.handleGlobalPaste
                        }), (0, l.jsx)(s.TextAreaAutosize, {
                            ref: this.handleSetRef,
                            className: o(a, f),
                            id: u,
                            rows: 1,
                            fontWidthEstimate: 6,
                            placeholder: n,
                            disabled: t || d,
                            required: i,
                            onChange: this.handleOnChange,
                            onResize: r,
                            onKeyPress: this.handleKeyPress,
                            onKeyDown: this.handleKeyDown,
                            onKeyUp: this.handleKeyUp,
                            onFocus: this.props.onFocus,
                            onBlur: this.props.onBlur,
                            onPaste: this.handlePaste,
                            onClick: this.handleClick,
                            onContextMenu: this.handleContextMenu,
                            value: t ? "" : e,
                            tabIndex: 0,
                            spellCheck: p,
                            "aria-controls": m,
                            "aria-expanded": E,
                            "aria-activedescendant": S,
                            "aria-haspopup": "listbox",
                            "aria-autocomplete": "list",
                            "aria-multiline": !0
                        })]
                    })
                }
                handleTabOrEnterDown(e) {
                    e.which === h.KeyboardKeys.TAB && this.props.onTab() ? (e.preventDefault(), e.stopPropagation()) : e.which === h.KeyboardKeys.ENTER && this.props.onEnter(e) ? (e.preventDefault(), e.stopPropagation()) : e.which === h.KeyboardKeys.ESCAPE ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete()) : e.which === h.KeyboardKeys.TAB && this.hasOpenCodeBlock() && (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1))
                }
                insertEmoji(e, t) {
                    this.insertText("".concat(":").concat(e.name).concat(":"), void 0, t)
                }
                getFirstText() {
                    return this.props.value
                }
                constructor(...e) {
                    super(...e), this.state = {
                        nextSelection: -1
                    }, this.focus = () => {
                        let {
                            _ref: e
                        } = this;
                        null != e && e.focus()
                    }, this.handleSetRef = e => {
                        this._ref = e
                    }, this.handleKeyPress = e => {
                        if (e.which === h.KeyboardKeys.ENTER) {
                            if (!e.shiftKey && !this.hasOpenCodeBlock() && (!this.props.disableEnterToSubmit || e.ctrlKey)) return e.preventDefault(), this.props.onSubmit(this.props.value)
                        }
                    }, this.handleKeyDown = e => {
                        switch (e.which) {
                            case h.KeyboardKeys.ARROW_DOWN:
                                this.props.moveSelection(1) && e.preventDefault();
                                break;
                            case h.KeyboardKeys.N:
                                e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                                break;
                            case h.KeyboardKeys.ARROW_UP:
                                this.props.moveSelection(-1) && e.preventDefault();
                                break;
                            case h.KeyboardKeys.P:
                                e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                                break;
                            case h.KeyboardKeys.TAB:
                            case h.KeyboardKeys.ENTER:
                                this.handleTabOrEnterDown(e)
                        }
                        let {
                            onKeyDown: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleKeyUp = e => {
                        switch (e.which) {
                            case h.KeyboardKeys.ARROW_RIGHT:
                            case h.KeyboardKeys.ARROW_LEFT:
                            case h.KeyboardKeys.HOME:
                            case h.KeyboardKeys.END:
                                this.props.maybeShowAutocomplete()
                        }
                        let {
                            onKeyUp: t
                        } = this.props;
                        null == t || t(e)
                    }, this.handleGlobalPaste = e => {
                        let {
                            event: t
                        } = e, n = this.handlePaste(t);
                        !n && this.focus()
                    }, this.handlePaste = e => {
                        let t = this.props.onPaste(e);
                        return t && e.preventDefault(), t
                    }, this.handleClick = () => {
                        this.props.maybeShowAutocomplete()
                    }, this.handleContextMenu = e => {
                        f.isPlatformEmbedded && (0, a.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("188503").then(n.bind(n, "188503"));
                            return t => (0, l.jsx)(e, {
                                ...t,
                                isChannelTextArea: !0,
                                text: (0, p.getSelectionText)()
                            })
                        }, {
                            align: "bottom",
                            enableSpellCheck: !0
                        })
                    }, this.handleOnChange = e => {
                        let {
                            onChange: t,
                            allowNewLines: n
                        } = this.props, l = e.currentTarget.value, i = n ? l : l.replace("\n", "");
                        null == t || t(e, i, (0, m.toRichValue)(i))
                    }
                }
            }
            var g = S
        },
        32647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("798609"),
                a = n("716241"),
                u = n("383018"),
                d = n("585722"),
                c = n("378765"),
                f = n("659500"),
                p = n("640830"),
                m = n("83800"),
                h = n("776574"),
                E = n("970153"),
                S = n("939563"),
                g = n("385887"),
                C = n("755604"),
                T = n("664610"),
                v = n("688893"),
                y = n("684607"),
                x = n("803322"),
                I = n("127875"),
                N = n("169694"),
                _ = n("100576"),
                A = n("765446"),
                R = n("461593"),
                O = n("49111"),
                M = n("147320"),
                k = i.forwardRef(function(e, t) {
                    let {
                        value: n,
                        type: r,
                        channel: k,
                        className: b,
                        id: P,
                        disabled: L,
                        submitting: U,
                        placeholder: j,
                        required: D,
                        textAreaPaddingClassName: w,
                        onChange: B,
                        onPaste: H,
                        onResize: F,
                        onFocus: G,
                        onBlur: K,
                        onKeyDown: V,
                        onKeyUp: W,
                        onTab: Y,
                        onEnter: q,
                        onSubmit: z,
                        maybeShowAutocomplete: Q,
                        hideAutocomplete: X,
                        moveSelection: Z,
                        spellcheckEnabled: J,
                        canUseCommands: $,
                        canOnlyUseTextCommands: ee,
                        disableAutoFocus: et,
                        disableEnterToSubmit: en,
                        allowNewLines: el,
                        "aria-owns": ei,
                        "aria-expanded": er,
                        "aria-haspopup": eo,
                        "aria-activedescendant": es,
                        "aria-controls": ea,
                        "aria-invalid": eu,
                        "aria-describedby": ed,
                        "aria-labelledby": ec,
                        "aria-autocomplete": ef
                    } = e, ep = i.useRef(null), em = i.useRef(null), eh = i.useRef(!0), eE = i.useRef(!0), eS = L || U, eg = i.useCallback((e, t, n) => {
                        var l;
                        let {
                            value: i,
                            selection: r
                        } = n, o = g.EditorUtils.richValue(e), s = e.selection, a = !1;
                        if (void 0 !== i && i !== o) {
                            if (e.children = i, "parent" === t && !e.previewMarkdown) {
                                try {
                                    e.previewMarkdown = !0, (0, _.run)(e, k.guild_id, k.id)
                                } finally {
                                    e.previewMarkdown = !1
                                }(0, _.run)(e, k.guild_id, k.id), r = void 0
                            }
                            "undo" !== t && void 0 !== i && i !== o && m.HistoryUtils.insertEntry(e, "other", !1, o, s), a = !0
                        }
                        if (null != r && !g.SelectionUtils.isValid(e, r) && (r = void 0), (a || !g.SelectionUtils.isValid(e, s)) && void 0 === r) {
                            let t = g.EditorUtils.end(e, []);
                            r = {
                                anchor: t,
                                focus: t
                            }
                        }
                        if (null != r && !g.SelectionUtils.equals(r, s)) {
                            e.selection = r;
                            let t = m.HistoryUtils.currentEntry(e);
                            null != t && (t.selection = r), a = !0
                        }
                        let d = p.getCommandBlock(e);
                        if (null != d && d[0].command.id !== (null === (l = u.default.getActiveCommand(k.id)) || void 0 === l ? void 0 : l.id) && m.HistoryUtils.withMergedEntry(e, () => {
                                (0, N.unsetCommand)(e, k.id, null, !0)
                            }), a) {
                            if (!et && g.EditorUtils.focus(e), "parent" === t) try {
                                eE.current = !1, e.onChange()
                            } finally {
                                eE.current = !0
                            } else e.onChange()
                        }
                    }, [k.id, k.guild_id, et]), eC = i.useCallback(() => {
                        eh.current = !1
                    }, []), eT = i.useCallback(() => {
                        eh.current = !0
                    }, []), ev = (0, T.default)({
                        channel: k,
                        chatInputType: r,
                        canUseCommands: $,
                        canOnlyUseTextCommands: ee,
                        onChangeStart: eC,
                        onChangeEnd: eT,
                        updateState: eg
                    }), ey = i.useCallback((e, t) => {
                        let n = p.getOptionValues(ev, e),
                            l = p.validateOptionValues(e, k.guild_id, k.id, n, t);
                        return {
                            values: n,
                            results: l
                        }
                    }, [k.guild_id, k.id, ev]), ex = i.useCallback(() => {
                        let e;
                        let t = $ ? u.default.getActiveCommand(k.id) : null;
                        if (null != t && null != t.options) {
                            let i = ey(t, !1);
                            e = i.values;
                            let r = p.getOptionNames(ev),
                                o = r.filter(e => !i.results[e].success).map(e => {
                                    var n;
                                    return (null !== (n = t.options) && void 0 !== n ? n : []).find(t => t.name === e)
                                });
                            for (let e of t.options) e.required && !(e.name in i.values) && (S.SlateTransforms.insertCommandOption(ev, e), o.push(e));
                            if (o.length > 0) {
                                var n, l;
                                let e = o[0];
                                S.SlateTransforms.selectCommandOption(ev, e.name), f.ComponentDispatch.dispatch(O.ComponentActions.SHAKE_APP, {
                                    duration: 200,
                                    intensity: 2
                                }), (0, a.trackWithMetadata)(O.AnalyticEvents.APPLICATION_COMMAND_VALIDATION_FAILED, {
                                    application_id: null == t ? void 0 : t.applicationId,
                                    command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                                    argument_type: s.ApplicationCommandOptionType[null !== (l = null == e ? void 0 : e.type) && void 0 !== l ? l : 3],
                                    is_required: null == e ? void 0 : e.required
                                });
                                return
                            }
                        }
                        null == z || z((0, E.toTextValue)(g.EditorUtils.richValue(ev), {
                            mode: "raw",
                            ignoreTrailingEmptyNodes: !0
                        }), t, e)
                    }, [k.id, ev, z, ey, $]);
                    (0, v.default)(t, ev, k, ex), (0, I.default)(ev, ep, F);
                    let {
                        handleKeyDown: eI,
                        handleKeyUp: eN
                    } = (0, y.default)({
                        editor: ev,
                        channel: k,
                        disableEnterToSubmit: en,
                        onKeyDown: V,
                        onKeyUp: W,
                        onTab: Y,
                        onEnter: q,
                        allowNewLines: el,
                        submit: ex,
                        hideAutocomplete: X,
                        moveSelection: Z
                    }), {
                        handlePaste: e_,
                        handleGlobalPaste: eA
                    } = (0, x.default)(ev, eS, H), eR = i.useCallback(e => {
                        null == Q || Q()
                    }, [Q]), eO = i.useCallback(e => {
                        e !== em.current ? eE.current && (null == B || B(null, (0, E.toTextValue)(e, {
                            mode: "raw"
                        }), e)) : eE.current && Q()
                    }, [Q, B]);
                    i.useLayoutEffect(() => {
                        eh.current && (em.current = n, eg(ev, "parent", {
                            value: n
                        }))
                    }, [ev, n, eg]), i.useEffect(() => {
                        let e = () => {
                            var e;
                            let t = null !== (e = u.default.getActiveCommand(k.id)) && void 0 !== e ? e : null;
                            null !== t && null != t.options && ey(t, !0)
                        };
                        return d.default.addChangeListener(e), () => d.default.removeChangeListener(e)
                    }, [k, ev, ey]);
                    let eM = i.useCallback((e, t) => (0, C.default)(e, t), []),
                        ek = i.useCallback(e => (0, A.default)(ev, e, k.id), [k.id, ev]),
                        eb = i.useCallback(e => (0, R.default)(e), []);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(c.ComponentAction, {
                            event: O.ComponentActions.GLOBAL_CLIPBOARD_PASTE,
                            handler: eA
                        }), (0, l.jsx)("div", {
                            ref: ep,
                            className: o(b, M.slateContainer),
                            children: (0, l.jsx)(h.default, {
                                id: P,
                                editor: ev,
                                channelId: k.id,
                                guildId: k.guild_id,
                                className: o(M.slateTextArea, w),
                                placeholder: j,
                                readOnly: eS,
                                spellCheck: J,
                                autoFocus: !et,
                                canFocus: !L,
                                onChange: eO,
                                onFocus: G,
                                onBlur: K,
                                onClick: eR,
                                onPaste: e_,
                                onKeyDown: eI,
                                onKeyUp: eN,
                                decorateExtra: eM,
                                renderExtraElement: ek,
                                renderExtraLeaf: eb,
                                "aria-owns": ei,
                                "aria-haspopup": eo,
                                "aria-expanded": er,
                                "aria-activedescendant": es,
                                "aria-controls": ea,
                                "aria-labelledby": ec,
                                "aria-describedby": ed,
                                "aria-invalid": eu,
                                "aria-autocomplete": ef,
                                "aria-required": D
                            })
                        })]
                    })
                })
        },
        376215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("974667"),
                a = n("942367"),
                u = n("446674"),
                d = n("913144"),
                c = n("81594"),
                f = n("798609"),
                p = n("206230"),
                m = n("302437"),
                h = n("383018"),
                E = n("474643"),
                S = n("585722"),
                g = n("898260"),
                C = n("378765"),
                T = n("393377"),
                v = n("761354"),
                y = n("49111"),
                x = n("735189"),
                I = n("862839");
            let N = [];

            function _(e) {
                let {
                    channelId: t,
                    type: n
                } = e, r = (0, u.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled), _ = (0, m.default)("attachments", a.Orientations.HORIZONTAL), A = (0, u.useStateFromStores)([S.default], () => S.default.getUploads(t, n.drafts.type)), {
                    isApplicationCommand: R,
                    commandOptions: O,
                    commandOptionStates: M
                } = (0, u.useStateFromStoresObject)([h.default], () => {
                    let e = h.default.getActiveCommand(t);
                    if (null == e) return {
                        isApplicationCommand: !1,
                        commandOptions: N,
                        commandOptionStates: null
                    };
                    let n = h.default.getOptionStates(t);
                    return {
                        isApplicationCommand: !0,
                        commandOptions: e.options,
                        commandOptionStates: n
                    }
                }), k = i.useMemo(() => {
                    var e;
                    return null !== (e = null == O ? void 0 : O.filter(e => {
                        var t;
                        return e.type === f.ApplicationCommandOptionType.ATTACHMENT && (null == M ? void 0 : null === (t = M[e.name]) || void 0 === t ? void 0 : t.hasValue)
                    })) && void 0 !== e ? e : []
                }, [O, M]), [b, P] = i.useState([]);
                i.useEffect(() => {
                    let e = () => {
                        c.default.clearAll(t, n.drafts.type)
                    };
                    return d.default.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e), () => d.default.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
                }, [t, n]);
                let L = i.useCallback(() => {
                    _.focusFirstVisibleItem()
                }, [_]);
                return ((0, C.useComponentAction)({
                    event: y.ComponentActions.FOCUS_ATTACHMENT_AREA,
                    handler: L
                }), i.useEffect(() => {
                    if (R) {
                        let e = [];
                        b.forEach(t => {
                            !k.some(e => t.name === e.name) && e.push(t)
                        }), e.forEach(e => {
                            c.default.remove(t, e.name, n.drafts.type)
                        }), P(k)
                    }
                }, [t, k.length, n]), !R && 0 === A.length || R && 0 === k.length) ? null : (0, l.jsxs)(i.Fragment, {
                    children: [(0, l.jsx)(s.ListNavigatorProvider, {
                        navigator: _,
                        children: (0, l.jsx)(s.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: i,
                                    ...s
                                } = e;
                                return (0, l.jsx)("ul", {
                                    ref: i,
                                    ...s,
                                    className: o(x.channelAttachmentArea, I.scrollbarGhost),
                                    children: R ? k.map(e => (0, l.jsx)(T.default, {
                                        channelId: t,
                                        keyboardModeEnabled: r,
                                        option: e
                                    }, e.name)) : A.map(e => (0, l.jsx)(v.default, {
                                        channelId: t,
                                        draftType: n.drafts.type,
                                        upload: e,
                                        keyboardModeEnabled: r
                                    }, e.id))
                                })
                            }
                        })
                    }), n.drafts.type === E.DraftType.FirstThreadMessage ? null : (0, l.jsx)(g.default, {})]
                })
            }
            var A = i.memo(function(e) {
                let {
                    channelId: t,
                    type: n,
                    canAttachFiles: i
                } = e;
                return i ? (0, l.jsx)(_, {
                    channelId: t,
                    type: n
                }) : null
            })
        },
        393377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("81594"),
                u = n("371642"),
                d = n("966724"),
                c = n("474643"),
                f = n("585722"),
                p = n("271972"),
                m = n("761354"),
                h = n("49111"),
                E = n("91310"),
                S = n("602416");

            function g(e) {
                let {
                    channelId: t,
                    option: n,
                    keyboardModeEnabled: r
                } = e, g = i.useRef(null), [C, T] = i.useState(!1), v = f.default.getUpload(t, n.name, c.DraftType.SlashCommand), y = i.useRef(null), x = i.useCallback(() => {
                    T(!0)
                }, []), I = i.useCallback(() => {
                    T(!1)
                }, []), N = i.useCallback(e => {
                    var l;
                    T(!1);
                    let i = {
                        id: n.name,
                        file: null === (l = e.dataTransfer) || void 0 === l ? void 0 : l.files[0],
                        platform: d.UploadPlatform.WEB
                    };
                    a.default.setFile({
                        channelId: t,
                        id: n.name,
                        file: i,
                        draftType: c.DraftType.SlashCommand
                    })
                }, [t, n]);
                return (i.useEffect(() => {
                    let e = y.current;
                    return null == v && (null == e || e.addEventListener("dragover", x, !1), null == e || e.addEventListener("dragleave", I, !1), null == e || e.addEventListener("drop", N, !1)), () => {
                        null == e || e.removeEventListener("dragover", x, !1), null == e || e.removeEventListener("dragleave", I, !1), null == e || e.removeEventListener("drop", N, !1)
                    }
                }, [v, x, I, N]), null != v) ? (0, l.jsx)(m.default, {
                    channelId: t,
                    upload: v,
                    keyboardModeEnabled: r,
                    draftType: c.DraftType.SlashCommand,
                    label: (0, l.jsxs)(i.Fragment, {
                        children: [(0, l.jsxs)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            children: [n.name, ": "]
                        }), (0, l.jsx)(s.Text, {
                            tag: "span",
                            variant: "text-md/normal",
                            color: "text-brand",
                            children: v.filename
                        })]
                    }),
                    canEdit: !1
                }) : (0, l.jsxs)(p.default, {
                    id: n.name,
                    channelId: t,
                    keyboardModeEnabled: r,
                    onKeyDown: e => {
                        if (e.which === h.KeyboardKeys.ENTER) {
                            var t;
                            e.preventDefault(), null === (t = g.current) || void 0 === t || t.activateUploadDialogue()
                        }
                    },
                    className: o(E.emptyOption, {
                        [E.emptyOptionActive]: C
                    }),
                    draftType: c.DraftType.SlashCommand,
                    ref: y,
                    children: [(0, l.jsx)("span", {
                        className: o(E.optionName, {
                            [E.optionNameActive]: C
                        }),
                        children: n.name
                    }), (0, l.jsx)(s.Clickable, {
                        className: E.clickContainer,
                        onClick: () => {
                            var e;
                            return null === (e = g.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                        },
                        children: (0, l.jsxs)("div", {
                            className: E.commandOptionContainer,
                            children: [(0, l.jsx)("img", {
                                src: S,
                                className: E.optionIcon,
                                alt: ""
                            }), (0, l.jsx)(s.Text, {
                                className: E.optionHelp,
                                variant: "text-sm/normal",
                                children: "Drag and drop or click to upload file"
                            }), (0, l.jsx)(u.default, {
                                ref: g,
                                onChange: e => {
                                    var l, i;
                                    if (null != t && (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (l = i.files) || void 0 === l ? void 0 : l[0]) != null) {
                                        let l = {
                                            id: n.name,
                                            file: e.currentTarget.files[0],
                                            platform: d.UploadPlatform.WEB
                                        };
                                        a.default.setFile({
                                            channelId: t,
                                            id: n.name,
                                            file: l,
                                            draftType: c.DraftType.SlashCommand
                                        }), e.currentTarget.value = ""
                                    }
                                },
                                multiple: !1,
                                tabIndex: -1,
                                "aria-hidden": !0,
                                className: E.fileInput
                            })]
                        })
                    })]
                })
            }
        },
        640830: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getCommandBlock: function() {
                    return h
                },
                getCurrentCommandOption: function() {
                    return E
                },
                getOptionNames: function() {
                    return S
                },
                getOptionValues: function() {
                    return g
                },
                optionToValues: function() {
                    return C
                },
                validateOptionValues: function() {
                    return T
                },
                validateOption: function() {
                    return v
                },
                findTextOptions: function() {
                    return y
                }
            }), n("424973"), n("222007");
            var l = n("798609"),
                i = n("507217"),
                r = n("383018"),
                o = n("343952"),
                s = n("474643"),
                a = n("18494"),
                u = n("585722"),
                d = n("149022"),
                c = n("970153"),
                f = n("385887"),
                p = n("566819");
            let m = /([\p{L}\p{N}\p{sc=Deva}\p{sc=Thai}_-]+):/gu;

            function h(e) {
                let t = f.EditorUtils.richValue(e)[0];
                return null == t || "applicationCommand" !== t.type ? null : [t, p.FIRST_BLOCK_PATH]
            }

            function E(e) {
                var t, n;
                if (null == e.selection) return null;
                let l = null !== (t = f.EditorUtils.above(e, {
                    at: e.selection.focus,
                    match: e => f.NodeUtils.isType(e, "applicationCommandOption")
                })) && void 0 !== t ? t : null;
                if (null != l || f.RangeUtils.isCollapsed(e.selection)) return l;
                let i = null !== (n = f.EditorUtils.above(e, {
                    at: e.selection.anchor,
                    match: e => f.NodeUtils.isType(e, "applicationCommandOption")
                })) && void 0 !== n ? n : null;
                return i
            }

            function S(e) {
                let t = h(e),
                    n = [],
                    l = null == t ? void 0 : t[0].children;
                if (null != l)
                    for (let e of l) f.NodeUtils.isType(e, "applicationCommandOption") && n.push(e.optionName);
                return n
            }

            function g(e, t) {
                let n = {};
                if (null == t.options) return {};
                let l = h(e),
                    i = Object.fromEntries(t.options.map(e => [e.name, e])),
                    r = null == l ? void 0 : l[0].children;
                if (null != r) {
                    for (let t of r)
                        if (f.NodeUtils.isType(t, "applicationCommandOption")) {
                            let l = i[t.optionName];
                            null != l && (n[t.optionName] = C(e, l, t))
                        }
                }
                return n
            }

            function C(e, t, n) {
                let i = a.default.getCurrentlySelectedChannelId(),
                    r = n.children.map(n => {
                        if (t.type === l.ApplicationCommandOptionType.ATTACHMENT) {
                            let e = u.default.getUpload(i, t.name, s.DraftType.SlashCommand);
                            if (null != e) {
                                var r;
                                return {
                                    type: "text",
                                    text: null !== (r = e.filename) && void 0 !== r ? r : ""
                                }
                            }
                        }
                        if (f.TextUtils.isText(n)) return {
                            type: "text",
                            text: n.text
                        };
                        if (f.EditorUtils.isVoid(e, n)) {
                            let e = (0, d.voidToOptionValue)(n);
                            if (null != e) return e
                        }
                        return {
                            type: "text",
                            text: (0, c.serializeDescendant)(n, {
                                mode: "raw"
                            })
                        }
                    });
                if (t.type !== l.ApplicationCommandOptionType.STRING) {
                    for (; r.length > 0 && "text" === r[0].type && "" === r[0].text.trim();) r.shift();
                    for (; r.length > 0 && "text" === r[r.length - 1].type && "" === r[r.length - 1].text.trim();) r.pop()
                }
                return r
            }

            function T(e, t, n, l, r) {
                if (null == e.options) return {};
                let s = Object.fromEntries(e.options.map(e => {
                    var i;
                    return [e.name, o.validateOptionContent({
                        option: e,
                        content: null !== (i = l[e.name]) && void 0 !== i ? i : null,
                        guildId: t,
                        channelId: n,
                        allowEmptyValues: r
                    })]
                }));
                return i.updateOptionValidationStates(n, s), s
            }

            function v(e, t, n, l, s) {
                var a;
                let [u] = l, d = r.default.getActiveCommand(n), c = null == d ? void 0 : null === (a = d.options) || void 0 === a ? void 0 : a.find(e => e.name === u.optionName);
                if (null == c) return;
                let f = C(e, c, u),
                    p = o.validateOptionContent({
                        option: c,
                        content: f,
                        guildId: t,
                        channelId: n,
                        allowEmptyValues: s
                    });
                return i.updateOptionStates(n, {
                    [u.optionName]: {
                        lastValidationResult: p
                    }
                }), p
            }

            function y(e, t) {
                if (null == t.options || 0 === t.options.length) return [];
                let n = f.EditorUtils.richValue(e),
                    l = [],
                    i = new Set(S(e)),
                    r = {},
                    o = new Set;
                for (let e of t.options) r[e.displayName] = e, !i.has(e.name) && o.add(e.displayName);
                let s = null;
                for (let t = 0; t < n.length; t++) {
                    let i = n[t];
                    if ("line" === i.type || "applicationCommand" === i.type)
                        for (let u = 0; u < i.children.length; u++) {
                            let d;
                            let p = i.children[u],
                                h = [t, u];
                            if (f.NodeUtils.isType(p, "applicationCommandOption")) {
                                if (null != s) {
                                    var a;
                                    s.valueRange.focus = null !== (a = f.EditorUtils.before(e, h)) && void 0 !== a ? a : f.EditorUtils.start(e, []), s.text = (0, c.toTextValue)(n, {
                                        mode: "raw",
                                        range: s.valueRange
                                    }).trim(), l.push(s), s = null
                                }
                                continue
                            }
                            if (!!f.TextUtils.isText(p))
                                for (m.lastIndex = 0; null != (d = m.exec(p.text));) {
                                    if (0 !== d.index && null == p.text.charAt(d.index - 1).match(/(\t|\s)/)) continue;
                                    let e = d[1];
                                    if (!o.has(e)) continue;
                                    o.delete(e);
                                    let t = r[e];
                                    if (null == t) continue;
                                    let i = {
                                            path: h,
                                            offset: d.index
                                        },
                                        a = {
                                            path: h,
                                            offset: i.offset + d[0].length
                                        },
                                        u = {
                                            path: h,
                                            offset: a.offset
                                        },
                                        f = {
                                            name: t.name,
                                            displayName: t.displayName,
                                            type: t.type,
                                            keyRange: {
                                                anchor: i,
                                                focus: a
                                            },
                                            valueRange: {
                                                anchor: u,
                                                focus: u
                                            },
                                            text: ""
                                        };
                                    null != s && (s.valueRange.focus = f.keyRange.anchor, s.text = (0, c.toTextValue)(n, {
                                        mode: "raw",
                                        range: s.valueRange
                                    }).trim(), l.push(s)), s = f
                                }
                        }
                }
                return null != s && (s.valueRange.focus = f.EditorUtils.end(e, []), s.text = (0, c.toTextValue)(n, {
                    mode: "raw",
                    range: s.valueRange
                }).trim(), l.push(s)), l
            }
        },
        83800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HistoryUtils: function() {
                    return o
                }
            }), n("222007"), n("424973");
            var l = n("385887");
            let i = new WeakMap,
                r = new WeakMap,
                o = {
                    isMerging(e) {
                        var t;
                        return null === (t = r.get(e)) || void 0 === t || t
                    },
                    isSaving(e) {
                        var t;
                        return null === (t = i.get(e)) || void 0 === t || t
                    },
                    withoutMerging(e, t) {
                        let n = this.isMerging(e);
                        r.set(e, !1);
                        try {
                            t()
                        } finally {
                            r.set(e, n)
                        }
                    },
                    withoutSaving(e, t) {
                        let n = this.isSaving(e);
                        i.set(e, !1);
                        try {
                            t()
                        } finally {
                            i.set(e, n)
                        }
                    },
                    withSingleEntry: (e, t) => s(e, "other", !1, t),
                    withMergedEntry: (e, t) => s(e, "other", !0, t),
                    currentEntry: e => e.history.stack.length > 0 ? e.history.stack[e.history.index] : null,
                    insertOrMergeEntry(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            l = o.currentEntry(e);
                        o.isMerging(e) && (null == l ? void 0 : l.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n)
                    },
                    insertEntry(e, t) {
                        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                            i = arguments.length > 3 ? arguments[3] : void 0,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        r = null != r ? r : e.selection, i = null != i ? i : l.EditorUtils.richValue(e);
                        let {
                            history: s
                        } = e, a = o.currentEntry(e);
                        for (null != a && (a.mergeable = !1), s.stack.length > 0 && (s.stack.length = s.index + 1); s.stack.length >= 250;) s.stack.shift();
                        s.stack.push({
                            type: t,
                            mergeable: n,
                            createdAt: Date.now(),
                            value: i,
                            selection: r
                        }), s.index = s.stack.length - 1
                    },
                    mergeEntry(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            {
                                selection: n
                            } = e,
                            i = l.EditorUtils.richValue(e),
                            r = o.currentEntry(e);
                        null != r && (r.value = i, r.selection = n, !t && (r.mergeable = !1))
                    }
                };

            function s(e, t, n, r) {
                let s = e.children,
                    a = e.selection,
                    u = o.isSaving(e);
                i.set(e, !1);
                try {
                    let i = r();
                    return u && (n ? o.mergeEntry(e) : e.children !== s ? o.insertEntry(e, t, !1) : o.isMerging(e) && null != e.selection && (null == a || !l.RangeUtils.equals(e.selection, a)) && o.mergeEntry(e)), i
                } finally {
                    i.set(e, u)
                }
            }
        },
        96342: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                parse: function() {
                    return O
                }
            }), n("222007"), n("70102"), n("781738"), n("424973");
            var l = n("627445"),
                i = n.n(l),
                r = n("693566"),
                o = n.n(r),
                s = n("463928"),
                a = n("933805"),
                u = n("605250"),
                d = n("647374"),
                c = n("888198"),
                f = n("290689"),
                p = n("788554"),
                m = n("23690"),
                h = n("10680");
            let E = {
                    link: {
                        type: "skip"
                    },
                    highlight: {
                        type: "skip"
                    },
                    blockQuote: {
                        type: "skip"
                    },
                    codeBlock: {
                        type: "skip"
                    },
                    list: {
                        type: "skip"
                    },
                    heading: {
                        type: "skip"
                    },
                    channelOrMessageUrl: {
                        type: "skip"
                    },
                    mediaPostLink: {
                        type: "skip"
                    },
                    attachmentLink: {
                        type: "skip"
                    },
                    newline: {
                        type: "verbatim"
                    },
                    br: {
                        type: "verbatim"
                    },
                    paragraph: {
                        type: "verbatim"
                    },
                    text: {
                        type: "verbatim"
                    },
                    emoticon: {
                        type: "verbatim"
                    },
                    mention: {
                        type: "inlineObject"
                    },
                    roleMention: {
                        type: "inlineObject"
                    },
                    commandMention: {
                        type: "inlineObject"
                    },
                    channelMention: {
                        type: "inlineObject"
                    },
                    emoji: {
                        type: "inlineObject"
                    },
                    customEmoji: {
                        type: "inlineObject"
                    },
                    em: {
                        type: "inlineStyle",
                        before: "*",
                        after: "*"
                    },
                    looseEm: {
                        type: "inlineStyle",
                        before: "*",
                        after: " *"
                    },
                    autolink: {
                        type: "inlineStyle",
                        before: "<",
                        after: ">"
                    },
                    strong: {
                        type: "inlineStyle",
                        before: "**",
                        after: "**"
                    },
                    u: {
                        type: "inlineStyle",
                        before: "__",
                        after: "__"
                    },
                    s: {
                        type: "inlineStyle",
                        before: "~~",
                        after: "~~"
                    },
                    escape: {
                        type: "inlineStyle",
                        before: "\\",
                        after: ""
                    },
                    inlineCode: {
                        type: "inlineStyle",
                        before: "`",
                        after: "`"
                    },
                    staticRouteLink: {
                        type: "inlineStyle",
                        before: "<id:",
                        after: ">"
                    },
                    soundboard: {
                        type: "inlineStyle",
                        before: "<sound:",
                        after: ">"
                    },
                    spoiler: {
                        type: "inlineStyle",
                        before: "||",
                        after: "||"
                    },
                    url: {
                        type: "inlineStyle",
                        before: "",
                        after: ""
                    },
                    codeBlockText: {
                        type: "inlineStyle",
                        before: "",
                        after: ""
                    },
                    codeBlockSyntax: {
                        type: "inlineStyle",
                        before: "",
                        after: ""
                    },
                    codeBlockLang: {
                        type: "inlineStyle",
                        before: "",
                        after: ""
                    },
                    timestamp: {
                        type: "inlineObject"
                    }
                },
                S = new Set(["*", "_", "\\"]),
                g = {},
                C = {};
            for (let e in c.default.RULES) {
                if (!(e in E)) throw Error("Slate: Unknown markdown rule: ".concat(e, ".  If you have just added a new markdown rule ") + "then you probably need to add it to this file so that the rich chat box understands it.");
                let t = E[e];
                "skip" !== t.type && (g[e] = T(c.default.RULES[e])), "skip" !== t.type && "inlineObject" !== t.type && (C[e] = T("text" === e ? f.default : c.default.RULES[e]))
            }

            function T(e) {
                i(null != e.parse, "Slate: rule must have a parse function");
                let t = e.parse;
                return {
                    ...e,
                    parse(e, n, l) {
                        let i = t.call(this, e, n, l);
                        return !(i instanceof Array) && (i.originalMatch = e), i
                    }
                }
            }
            let v = {
                    url: {
                        parse: e => null == (0, d.punycodeLink)(e[1]) ? {
                            type: "text",
                            content: e[0],
                            originalMatch: e
                        } : {
                            type: "link",
                            content: e[1],
                            originalMatch: e
                        }
                    },
                    autolink: {
                        parse: e => null == (0, d.punycodeLink)(e[1]) ? {
                            type: "text",
                            content: e[0],
                            originalMatch: e
                        } : {
                            type: "autolink",
                            content: e[1],
                            originalMatch: e
                        }
                    },
                    codeBlockSyntax: {
                        order: s.defaultRules.inlineCode.order - .1,
                        match: e => /^(```)([a-z0-9_+\-.#]+$)?/.exec(e),
                        parse: e => null != e[2] && "" !== e[2] && h.isKnownLang(e[2]) ? [{
                            type: "codeBlockSyntax",
                            content: e[1],
                            originalMatch: e
                        }, {
                            type: "codeBlockLang",
                            content: e[2],
                            originalMatch: e
                        }] : {
                            type: "codeBlockSyntax",
                            content: e[0],
                            originalMatch: e
                        }
                    }
                },
                y = (0, p.default)([g, v]),
                x = (0, p.default)([C, v]),
                I = a.astParserFor(y),
                N = a.astParserFor(x),
                _ = {
                    max: 1 / 0,
                    maxAge: 6e4,
                    updateAgeOnGet: !0
                },
                A = new o(_),
                R = new o(_);

            function O(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = h.findBackticks(e);
                if (i.push(e.length), 1 === i.length && n) return [];
                let r = 0,
                    o = n,
                    s = [];
                for (let n of i) {
                    if (o) s.push({
                        text: e.substring(r, n),
                        start: r,
                        attributes: ["codeBlockText"],
                        data: void 0
                    });
                    else {
                        let o = n === i[i.length - 2],
                            a = o ? e.substring(n + 3) : "",
                            u = null != a.match(h.caseInsensitiveLangRegex),
                            d = u ? a : "";
                        n += 3 + d.length;
                        let c = e.substring(r, n);
                        if ("" !== c) {
                            let e = function(e, t, n) {
                                let l = [],
                                    i = n ? R : A,
                                    r = i.get(e);
                                if (null != r) return r;
                                let o = e.replace(/\r\n/g, " \n").replace(/[\r\f]/g, " ").replace(/\t/g, " ") + "\n\n",
                                    s = {
                                        originalMatch: {
                                            index: 0,
                                            0: ""
                                        },
                                        type: "paragraph",
                                        content: (n ? N : I)(o, !1, {
                                            returnMentionIds: !0,
                                            disableAutoBlockNewlines: !0,
                                            guildId: t
                                        })
                                    };
                                M(l, o, s, 0, []);
                                let a = function(e) {
                                    if (0 === (e = e.filter(e => e.text.length > 0)).length) return e;
                                    let t = [e[0]];
                                    for (let n = 1; n < e.length; n++) {
                                        let l = t[t.length - 1],
                                            i = l.start + l.text.length,
                                            r = e[n];
                                        r.start === i && null == l.data && null == r.data && l.attributes.join("-") === r.attributes.join("-") ? l.text += r.text : t.push(r)
                                    }
                                    return t
                                }(l);
                                return i.set(e, a), a
                            }(c, t, l);
                            e.forEach(e => {
                                s.push({
                                    ...e,
                                    start: e.start + r
                                })
                            })
                        }
                    }
                    o = !o, r = n
                }
                return s
            }

            function M(e, t, n, l, r) {
                let {
                    content: o,
                    type: s,
                    originalMatch: a
                } = n;
                switch (i(null != a, "Slate: originalMatch must be set " + JSON.stringify(n, void 0, 2)), s) {
                    case "newline":
                    case "br":
                    case "paragraph":
                    case "text":
                    case "emoticon":
                        return k(e, t, o || "", l, r);
                    case "emoji":
                    case "customEmoji": {
                        let i = t.substring(l);
                        if (!i.startsWith(a[0]) && (l = U(e, t, l, t.length), i = t.substring(l)), i.startsWith(a[0])) return P({
                            result: e,
                            sourceText: t,
                            text: a[0],
                            originalStart: l,
                            attributes: [s],
                            data: n
                        });
                        throw Error("Slate: Unable to find emoji: ".concat(a[0], " in ").concat(t, " at ").concat(l))
                    }
                    case "mention":
                    case "roleMention":
                    case "channelMention":
                    case "commandMention":
                    case "staticRouteLink":
                    case "soundboard":
                    case "channel": {
                        let {
                            text: r,
                            id: o
                        } = n;
                        if (null != r) return i(r === a[0], "Slate: text mentions must exactly match the regex match"), P({
                            result: e,
                            sourceText: t,
                            text: r,
                            originalStart: l,
                            attributes: ["textMention"],
                            data: {
                                text: r
                            }
                        });
                        return P({
                            result: e,
                            sourceText: t,
                            text: a[0],
                            originalStart: l,
                            attributes: [s],
                            data: {
                                id: o
                            }
                        })
                    }
                    case "timestamp":
                        if (m.default.getCurrentConfig({
                                location: "c70cbb_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled) return P({
                            result: e,
                            sourceText: t,
                            text: a[0],
                            originalStart: l,
                            attributes: [s],
                            data: n
                        });
                        return k(e, t, a[0], l, r);
                    case "em":
                    case "autolink":
                    case "strong":
                    case "u":
                    case "s":
                    case "escape":
                    case "inlineCode":
                    case "codeBlockSyntax":
                    case "codeBlockLang":
                    case "spoiler":
                    case "url":
                    case "link": {
                        l = L(t, l);
                        let {
                            before: n,
                            after: i
                        } = function(e, t, n, l) {
                            if ("inlineCode" === t) return {
                                before: l[1],
                                after: l[1]
                            };
                            if ("em" === t && "_" === e.substring(n, n + 1)) return {
                                before: "_",
                                after: "_"
                            };
                            let i = E["link" === t ? "url" : t];
                            if ("inlineStyle" === i.type) return i;
                            throw Error("Slate: rule must be an inlineStyle")
                        }(t, s, l, a);
                        return l = b(e, t, n, l, "syntaxBefore"), r.push(s), l = k(e, t, null != o ? o : "", l, r), r.pop(), l = b(e, t, i, l, "syntaxAfter"), L(t, l)
                    }
                    default:
                        throw Error("Slate: Unknown rule type: ".concat(s))
                }
            }

            function k(e, t, n, l, i) {
                return "string" == typeof n ? l = P({
                    result: e,
                    sourceText: t,
                    text: n,
                    originalStart: l,
                    attributes: i,
                    data: null
                }) : (!(n instanceof Array) && (n = [n]), n.forEach(n => {
                    l = M(e, t, n, l, i)
                })), L(t, l)
            }

            function b(e, t, n, l, r) {
                if (n.length > 0) {
                    let o = t.indexOf(n, l),
                        s = t.substring(l, o + n.length);
                    i(o >= 0, "Slate: Unable to find syntax characters"), e.push({
                        text: s,
                        attributes: [r],
                        start: l,
                        data: null
                    }), l = o + n.length
                }
                return l
            }

            function P(e) {
                let {
                    result: t,
                    sourceText: n,
                    text: l,
                    originalStart: i,
                    attributes: r,
                    data: o
                } = e, s = L(n, i);
                for (;
                    "\n" === l.charAt(0) || " " === l.charAt(0);) l = l.substring(1);
                let a = n.indexOf(l, s);
                if (a !== s ? s = i = U(t, n, s, a) : "\\" === l && "\\" === n.charAt(a + 1) && (a++, i = ++s), a !== s) throw new(0, u.default)("MarkdownToSlate").error(JSON.stringify({
                    sourceText: n,
                    searchText: l,
                    searchStartsAt: n.substring(s),
                    startPos: s
                })), Error("Slate: Unable to find content in source text!");
                let d = s + l.length,
                    c = n.substring(i, d);
                return t.push({
                    text: c,
                    attributes: r.slice(),
                    start: i,
                    data: o
                }), d
            }

            function L(e, t) {
                for (;
                    "\n" === e.charAt(t) || " " === e.charAt(t);) t++;
                return t
            }

            function U(e, t, n, l) {
                for (; n < l;)
                    if (S.has(t[n])) n = b(e, t, t[n], n, "syntaxBefore"), n = L(t, n);
                    else break;
                return n
            }
        },
        830618: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("446674"),
                s = n("77078"),
                a = n("812204"),
                u = n("685665"),
                d = n("217535"),
                c = n("917247"),
                f = n("697218"),
                p = n("216422"),
                m = n("719923"),
                h = n("30278"),
                E = n("49111"),
                S = n("646718"),
                g = n("782340"),
                C = n("789539");

            function T(e) {
                var t, n, i, T;
                let {
                    type: v,
                    textValue: y,
                    maxCharacterCount: x,
                    showRemainingCharsAfterCount: I,
                    className: N
                } = e, _ = (0, o.useStateFromStores)([f.default], () => m.default.canUseIncreasedMessageLength(f.default.getCurrentUser())), A = (0, d.default)(), R = null != x ? x : A, O = null !== (T = null != I ? I : x) && void 0 !== T ? T : A / 10, M = y.length, k = null != v.upsellLongMessages && (null != M ? M : 0) > E.MAX_MESSAGE_LENGTH && _, b = null != v.upsellLongMessages && !_, P = (null === (n = (0, c.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === S.PremiumSubscriptionSKUs.TIER_2, L = R - M, U = L > O, j = L < 0 && P, D = 0 === L ? g.default.Messages.CHARACTER_COUNT_AT_LIMIT : L > 0 ? g.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
                    count: L
                }) : g.default.Messages.CHARACTER_COUNT_OVER_LIMIT, {
                    AnalyticsLocationProvider: w
                } = (0, u.default)(a.default.CHARACTER_COUNT), B = k && L >= 0 || !U || b && !U;
                return B ? (0, l.jsx)(w, {
                    children: (0, l.jsxs)("div", {
                        className: r(N, C.characterCount, {
                            [C.error]: L < 0
                        }),
                        children: [(0, l.jsxs)("div", {
                            className: C.flairContainer,
                            children: [k && L >= 0 ? (0, l.jsx)(s.Tooltip, {
                                text: g.default.Messages.PREMIUM_MESSAGE_LENGTH_CHATBOX_FLAIR.format({
                                    maxLength: R
                                }),
                                position: "top",
                                children: e => (0, l.jsx)(p.default, {
                                    className: C.premiumFlair,
                                    ...e
                                })
                            }) : null, U || j ? null : (0, l.jsx)(s.Tooltip, {
                                text: D,
                                position: "top",
                                children: e => (0, l.jsx)("span", {
                                    "aria-hidden": !0,
                                    ...e,
                                    children: L
                                })
                            })]
                        }), (0, l.jsx)(s.HiddenVisually, {
                            children: g.default.Messages.CHARACTER_COUNT_CLOSE_TO_LIMIT.format({
                                count: L
                            })
                        }), b && !U ? (0, l.jsx)(h.default, {
                            className: C.upsell,
                            iconOnly: (null === (i = v.upsellLongMessages) || void 0 === i ? void 0 : i.iconOnly) || !1,
                            remaining: L
                        }) : null]
                    })
                }) : null
            }
        },
        10680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                caseInsensitiveLangRegex: function() {
                    return s
                },
                isKnownLang: function() {
                    return a
                },
                findBackticks: function() {
                    return u
                }
            }), n("222007"), n("70102"), n("424973");
            var l = n("436443");
            n("86256");
            let i = l.default.listLanguages(),
                r = {};
            for (let e of i) {
                e = e.toLowerCase();
                let t = l.default.getLanguage(e);
                if (null == t) continue;
                let n = t.aliases;
                if (r[e] = e, null != n)
                    for (let t of n) r[t.toLowerCase()] = e
            }
            let o = /^[a-z0-9_+\-.#]+$/,
                s = /^[a-z0-9_+\-.#]+$/i;
            for (let e in r)
                if (null == e.match(o)) throw Error("Language name does not match regex: ".concat(e));

            function a(e) {
                return e.toLowerCase() in r
            }

            function u(e) {
                let t;
                let n = [],
                    l = /\\|```/g;
                for (; null != (t = l.exec(e));) {
                    if ("\\" === t[0]) {
                        l.lastIndex += 1;
                        continue
                    }
                    n.push(t.index)
                }
                return n
            }
        },
        566819: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FIRST_BLOCK_PATH: function() {
                    return l
                },
                FIRST_TEXT_PATH: function() {
                    return i
                },
                FIRST_TEXT_POINT: function() {
                    return r
                },
                WHITESPACE_RE: function() {
                    return o
                },
                SELECTABLE_VOIDS: function() {
                    return s
                }
            });
            let l = [0],
                i = [0, 0],
                r = {
                    path: [0, 0],
                    offset: 0
                },
                o = /(\t|\s)/,
                s = ["applicationCommandOption"]
        },
        903782: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hasDomParent: function() {
                    return r
                },
                normalizeDOMPoint: function() {
                    return o
                }
            }), n("70102"), n("222007");
            var l = n("371621");
            let i = !1;
            {
                l.ReactEditor.toSlateRange = (e, t, n) => {
                    let i, r, o, s, a, {
                        exactMatch: u,
                        suppressThrow: c
                    } = n;
                    if (function(e) {
                            let t = e && e.anchorNode && d(e.anchorNode);
                            return null != t && e instanceof t.Selection
                        }(t) ? (i = t.anchorNode, r = t.anchorOffset, o = t.focusNode, s = t.focusOffset, a = t.isCollapsed) : (i = t.startContainer, r = t.startOffset, o = t.endContainer, s = t.endOffset, a = t.collapsed), null == i || null == o || null == r || null == s) {
                        if (c) return null;
                        throw Error("Cannot resolve a Slate range from DOM range")
                    }
                    let f = l.ReactEditor.toSlatePoint(e, [i, r], {
                            exactMatch: u,
                            suppressThrow: c
                        }),
                        p = a ? f : l.ReactEditor.toSlatePoint(e, [o, s], {
                            exactMatch: u,
                            suppressThrow: c
                        });
                    return null != f && null != p ? {
                        anchor: f,
                        focus: p
                    } : null
                };
                let e = l.ReactEditor.toSlatePoint;
                l.ReactEditor.toSlatePoint = (t, n, l) => {
                    let {
                        exactMatch: i,
                        suppressThrow: r,
                        direction: s = "forward"
                    } = l;
                    !i && (n = o(n, s));
                    try {
                        return e(t, n, {
                            exactMatch: !0,
                            suppressThrow: r
                        })
                    } catch (e) {
                        if (r) return null;
                        throw e
                    }
                }, i = !0
            }

            function r(e, t) {
                if (null == t) return !1;
                for (; null != e;) {
                    if (e === t) return !0;
                    e = e.parentNode
                }
                return !1
            }

            function o(e, t) {
                let n, [l, i] = e;
                if (!a(l) || 0 === l.childNodes.length) return e;
                for ("forward" === t && i === l.childNodes.length && (t = "backward"), "backward" === t && i--, [l, n] = s(l, i, t), "forward" === t && n < i ? t = "backward" : "backward" === t && n > i && (t = "forward"), i = n; a(l) && l.childNodes.length > 0;) {
                    let e = "backward" === t ? l.childNodes.length - 1 : 0;
                    l = s(l, e, t)[0]
                }
                let r = "backward" === t && null != l.textContent ? l.textContent.length : 0;
                return [l, r]
            }

            function s(e, t, n) {
                let {
                    childNodes: l
                } = e, i = l[t], r = t, o = !1, s = !1;
                for (;
                    (function(e) {
                        return u(e) && 8 === e.nodeType
                    }(i) || a(i) && 0 === i.childNodes.length || a(i) && "false" === i.getAttribute("contenteditable")) && (!o || !s);) {
                    ;
                    if (r >= l.length) {
                        o = !0, r = t - 1, n = "backward";
                        continue
                    }
                    if (r < 0) {
                        s = !0, r = t + 1, n = "forward";
                        continue
                    }
                    i = l[r], t = r, r += "forward" === n ? 1 : -1
                }
                return [i, t]
            }

            function a(e) {
                return u(e) && 1 === e.nodeType
            }

            function u(e) {
                let t = d(e);
                return null != t && e instanceof t.Node
            }

            function d(e) {
                return e && e.ownerDocument && e.ownerDocument.defaultView || null
            }
        },
        776574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            }), n("222007"), n("781738");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("371621"),
                a = n("272030"),
                u = n("773336"),
                d = n("286235"),
                c = n("149022"),
                f = n("83800"),
                p = n("903782"),
                m = n("939563"),
                h = n("385887"),
                E = n("368555"),
                S = n("30550"),
                g = n("760120"),
                C = n("632550"),
                T = n("783059"),
                v = n("632215");
            class y extends i.PureComponent {
                componentDidMount() {
                    this.props.editor.events.addListener("onChange", this.handleOnChange)
                }
                componentDidUpdate(e, t, n) {
                    e.editor !== this.props.editor && (e.editor.events.removeListener("onChange", this.handleOnChange), this.props.editor.events.addListener("onChange", this.handleOnChange))
                }
                componentWillUnmount() {
                    this.props.editor.events.removeListener("onChange", this.handleOnChange)
                }
                componentDidCatch(e, t) {
                    d.default.captureException(e, {
                        extra: t
                    }), this.setState({
                        initialValue: [...this.props.editor.children]
                    })
                }
                decorate(e) {
                    var t;
                    let {
                        editor: n,
                        guildId: l,
                        decorateExtra: i
                    } = this.props;
                    return [...(0, S.default)(n, e, l), ...(0, E.default)(n, e), ...null !== (t = null == i ? void 0 : i(n, e)) && void 0 !== t ? t : []]
                }
                renderElement(e) {
                    var t;
                    let {
                        guildId: n,
                        channelId: i,
                        renderExtraElement: r
                    } = this.props, {
                        attributes: o,
                        children: s
                    } = e;
                    "rtl" === o.dir && (o.style = {
                        ...o.style,
                        textAlign: "right"
                    });
                    let a = null !== (t = null == r ? void 0 : r(e)) && void 0 !== t ? t : (0, g.default)(e, n, i);
                    return null != a ? a : (0, l.jsx)("div", {
                        ...o,
                        children: s
                    })
                }
                renderLeaf(e) {
                    var t;
                    let {
                        editor: n,
                        renderExtraLeaf: i
                    } = this.props, {
                        attributes: r,
                        children: o
                    } = e, s = null !== (t = null == i ? void 0 : i(e)) && void 0 !== t ? t : (0, C.default)(n, e);
                    return null != s ? s : (0, l.jsx)("span", {
                        ...r,
                        children: o
                    })
                }
                handleOnChange() {
                    var e, t;
                    let {
                        editor: n
                    } = this.props, l = h.EditorUtils.isEditorEmpty(n) && null == n.composition;
                    if (l !== this.state.showPlaceholder && this.setState({
                            showPlaceholder: l
                        }), null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, h.EditorUtils.richValue(n)), !1 === this.props.canFocus) {
                        let e = s.ReactEditor.findDocumentOrShadowRoot(n),
                            t = e.getSelection();
                        null != t && this.isSelectionPartiallyInside(t) && (null == t || t.removeAllRanges())
                    }
                }
                handleKeyDown(e) {
                    var t, n;
                    if (null != this.props.editor.composition) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    null === (t = (n = this.props).onKeyDown) || void 0 === t || t.call(n, e)
                }
                handleKeyUp(e) {
                    var t, n;
                    if (null != this.props.editor.composition) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    null === (t = (n = this.props).onKeyUp) || void 0 === t || t.call(n, e)
                }
                handleBeforeInput(e) {
                    var t;
                    let {
                        editor: n
                    } = this.props, l = s.ReactEditor.findDocumentOrShadowRoot(n), i = l.getSelection(), r = null != i && i.rangeCount > 0 ? i.getRangeAt(0) : null, o = null !== (t = e.getTargetRanges()[0]) && void 0 !== t ? t : null;
                    if (null == n.composition) {
                        if (("insertText" === e.inputType || "insertReplacementText" === e.inputType) && (null == o && (o = r), null != o)) {
                            let t = h.EditorUtils.toSlateRange(n, o, {
                                exactMatch: !1,
                                suppressThrow: !0
                            });
                            null != t && null != e.data && (h.RangeUtils.isExpanded(t) ? f.HistoryUtils.withSingleEntry(n, () => {
                                n.selection = t, n.deleteFragment(), n.insertText(e.data), e.preventDefault()
                            }) : (n.insertText(e.data), e.preventDefault()))
                        }
                        if (e.inputType.startsWith("deleteContent") && null != r && !r.collapsed) {
                            let t = h.EditorUtils.toSlateRange(n, r, {
                                exactMatch: !0,
                                suppressThrow: !0
                            });
                            null != t && h.RangeUtils.isExpanded(t) && (n.selection = t, n.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"), e.preventDefault())
                        }
                    }
                }
                handleCompositionStart() {
                    var e, t;
                    let {
                        editor: n
                    } = this.props, l = {
                        insertedPrefix: !1,
                        startedInsideInline: !1
                    };
                    this.state.showPlaceholder && this.setState({
                        showPlaceholder: !1
                    });
                    let i = null != n.selection && h.RangeUtils.isCollapsed(n.selection) ? h.EditorUtils.leaf(n, n.selection.anchor.path) : null;
                    if (null == i) {
                        n.composition = l;
                        return
                    }
                    let r = null != n.selection && h.RangeUtils.isCollapsed(n.selection) ? h.EditorUtils.above(n, {
                        at: i[1],
                        match: e => h.EditorUtils.isInline(n, e),
                        mode: "lowest"
                    }) : null;
                    if (null != r && (l.startedInsideInline = !0), h.EditorUtils.isEditorEmpty(n)) {
                        m.SlateTransforms.insertNodes(n, {
                            text: "\uFEFF"
                        }, {
                            select: !0
                        }), l.insertedPrefix = !0, n.composition = l;
                        return
                    }
                    let o = s.ReactEditor.findDocumentOrShadowRoot(this.props.editor),
                        a = o.getSelection(),
                        u = (null !== (e = null == a ? void 0 : a.rangeCount) && void 0 !== e ? e : 0) > 0 ? null == a ? void 0 : a.getRangeAt(0) : null,
                        d = null != u ? h.EditorUtils.toSlateRange(n, u, {
                            exactMatch: !0,
                            suppressThrow: !0
                        }) : null;
                    if (null == d && null != u) {
                        let e = h.EditorUtils.toSlateRange(n, u, {
                            exactMatch: !1,
                            suppressThrow: !0
                        });
                        n.selection = null, null != e ? m.SlateTransforms.select(n, e) : m.SlateTransforms.select(n, null !== (t = n.selection) && void 0 !== t ? t : h.EditorUtils.end(n, []))
                    }
                    n.composition = l
                }
                handleCompositionEnd(e) {
                    let {
                        editor: t
                    } = this.props;
                    if (null == t.composition) return;
                    let {
                        insertedPrefix: n
                    } = t.composition;
                    if (n && null != t.selection && h.RangeUtils.isCollapsed(t.selection)) {
                        let e = t.selection.anchor.path,
                            n = h.NodeUtils.leaf(t, e);
                        h.EditorUtils.withoutNormalizing(t, () => {
                            let e = n.text.replace(/^\uFEFF/, "");
                            m.SlateTransforms.delete(t, {
                                unit: "offset",
                                distance: n.text.length,
                                reverse: !0
                            }), h.EditorUtils.insertText(t, e)
                        })
                    }
                    t.composition = null
                }
                handleFocusCapture(e) {
                    let {
                        onFocus: t
                    } = this.props;
                    null == t || t(e)
                }
                handleBlurCapture(e) {
                    let {
                        editor: t,
                        onBlur: n
                    } = this.props, l = e.relatedTarget, i = s.ReactEditor.findDocumentOrShadowRoot(this.props.editor), r = i.getElementById("textarea-context"), o = i.getElementById("slate-toolbar");
                    if (null != l && !(0, p.hasDomParent)(l, r) && !(0, p.hasDomParent)(l, o)) {
                        let e = s.ReactEditor.findDocumentOrShadowRoot(t),
                            n = e.getSelection();
                        null != n && this.isSelectionEscaping(n) && n.removeAllRanges()
                    }
                    null == n || n(e)
                }
                isSelectionPartiallyInside(e) {
                    let t = this.containerRef.current;
                    if (null != e && null != t)
                        for (let n = e.rangeCount - 1; n >= 0; n--) {
                            let l = e.getRangeAt(n);
                            if ((0, p.hasDomParent)(l.startContainer, t) || !l.collapsed && (0, p.hasDomParent)(l.endContainer, t)) return !0
                        }
                    return !1
                }
                isSelectionEscaping(e) {
                    let t = this.containerRef.current,
                        n = !1,
                        l = !1;
                    if (null != e && null != t)
                        for (let i = e.rangeCount - 1; i >= 0; i--) {
                            let r = e.getRangeAt(i);
                            if ((0, p.hasDomParent)(r.startContainer, t)) {
                                if (l) return !0;
                                n = !0
                            } else {
                                if (n) return !0;
                                l = !0
                            }
                            if (!r.collapsed) {
                                if ((0, p.hasDomParent)(r.startContainer, t)) {
                                    if (l) return !0;
                                    n = !0
                                } else {
                                    if (n) return !0;
                                    l = !0
                                }
                            }
                        }
                    return !1
                }
                handleContextMenu(e) {
                    let {
                        editor: t
                    } = this.props, i = e.pageY, r = window.innerHeight;
                    u.isPlatformEmbedded ? (0, a.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("875602").then(n.bind(n, "875602"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            editor: t,
                            text: h.EditorUtils.getSelectedText(t, !0)
                        })
                    }, {
                        align: null != i && null != r && i < r / 2 ? "top" : "bottom",
                        enableSpellCheck: !0
                    }) : blur()
                }
                render() {
                    let {
                        editor: e,
                        className: t,
                        containerClassName: n,
                        canFocus: i,
                        autoFocus: r,
                        placeholder: a,
                        onPaste: u,
                        channelId: d,
                        guildId: c,
                        onChange: f,
                        onFocus: p,
                        onBlur: m,
                        onKeyDown: h,
                        onKeyUp: E,
                        decorateExtra: S,
                        renderExtraElement: g,
                        renderExtraLeaf: C,
                        ...y
                    } = this.props;
                    return (0, l.jsxs)("div", {
                        ref: this.containerRef,
                        className: n,
                        children: [this.state.showPlaceholder ? (0, l.jsx)("div", {
                            className: o(T.placeholder, t),
                            "aria-hidden": !0,
                            children: a
                        }) : null, (0, l.jsx)(s.Slate, {
                            editor: e,
                            value: [...this.state.initialValue],
                            children: (0, l.jsx)(s.Editable, {
                                ...y,
                                className: o(v.markup, T.editor, t),
                                decorate: this.decorate,
                                renderElement: this.renderElement,
                                renderLeaf: this.renderLeaf,
                                onFocusCapture: this.handleFocusCapture,
                                onBlurCapture: this.handleBlurCapture,
                                onContextMenu: this.handleContextMenu,
                                onKeyDown: this.handleKeyDown,
                                onKeyUp: this.handleKeyUp,
                                onDOMBeforeInput: this.handleBeforeInput,
                                onCompositionStart: this.handleCompositionStart,
                                onCompositionEnd: this.handleCompositionEnd,
                                onPasteCapture: u,
                                autoFocus: r && !1 !== i,
                                autoCorrect: "off",
                                "data-can-focus": !1 !== i,
                                "aria-label": a,
                                "aria-multiline": !0
                            })
                        })]
                    })
                }
                constructor(e) {
                    super(e), this.containerRef = i.createRef(), this.decorate = this.decorate.bind(this), this.renderElement = this.renderElement.bind(this), this.renderLeaf = this.renderLeaf.bind(this), this.handleOnChange = this.handleOnChange.bind(this), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleKeyUp = this.handleKeyUp.bind(this), this.handleBeforeInput = this.handleBeforeInput.bind(this), this.handleCompositionStart = this.handleCompositionStart.bind(this), this.handleCompositionEnd = this.handleCompositionEnd.bind(this), this.handleFocusCapture = this.handleFocusCapture.bind(this), this.handleBlurCapture = this.handleBlurCapture.bind(this), this.handleContextMenu = this.handleContextMenu.bind(this), h.EditorUtils.isEditorEmpty(e.editor) ? this.state = {
                        initialValue: (0, c.createEmptyState)().richValue,
                        showPlaceholder: !0
                    } : this.state = {
                        initialValue: h.EditorUtils.richValue(e.editor),
                        showPlaceholder: !1
                    }
                }
            }
            var x = y
        },
        135038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPointFromPosition: function() {
                    return i
                }
            });
            var l = n("385887");

            function i(e, t, n, i) {
                var r, o;
                let s = 0;
                for (let r = 0; r < n.length; r++) {
                    let o = n[r];
                    if (null == o) continue;
                    let a = s + o.length;
                    if (i <= a) {
                        let n = l.PathUtils.child(t, r),
                            o = l.EditorUtils.node(e, n)[0];
                        if (l.TextUtils.isText(o)) return {
                            path: n,
                            offset: Math.min(Math.max(i - s, 0), o.text.length)
                        }
                    }
                    s = a
                }
                let a = n.length - 1;
                return {
                    path: l.PathUtils.child(t, a),
                    offset: null !== (o = null === (r = n[a]) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0
                }
            }
        },
        970153: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toTextValue: function() {
                    return h
                },
                serializeDescendant: function() {
                    return S
                }
            }), n("222007"), n("424973"), n("781738");
            var l = n("627445"),
                i = n.n(l),
                r = n("679653"),
                o = n("646630"),
                s = n("235004"),
                a = n("42203"),
                u = n("305961"),
                d = n("27618"),
                c = n("162771"),
                f = n("697218"),
                p = n("158998"),
                m = n("385887");

            function h(e, t) {
                let {
                    mode: n,
                    ignoreTrailingEmptyNodes: l,
                    preventEmojiSurrogates: i
                } = null != t ? t : {}, [r, o] = (null == t ? void 0 : t.range) != null ? m.RangeUtils.edges(t.range) : [void 0, void 0];
                return E(e, {
                    mode: n,
                    start: r,
                    end: o,
                    ignoreTrailingEmptyNodes: l,
                    preventEmojiSurrogates: i
                })
            }

            function E(e, t) {
                var n, l;
                let {
                    mode: i,
                    start: r,
                    end: o,
                    separator: s,
                    ignoreEmptyNodes: a,
                    ignoreTrailingEmptyNodes: u,
                    preventEmojiSurrogates: d
                } = null != t ? t : {}, c = e.length > 0 && !m.TextUtils.isText(e[0]);
                null == s && (s = c ? "\n" : "");
                let f = null !== (n = null == r ? void 0 : r.path[0]) && void 0 !== n ? n : 0,
                    p = null !== (l = null == o ? void 0 : o.path[0]) && void 0 !== l ? l : e.length - 1;
                if (u)
                    for (let t = p; t >= f; t--) {
                        let n = e[t];
                        if (m.TextUtils.isText(n)) {
                            if (n.text.length > 0) {
                                p = t;
                                break
                            }
                        } else if (!m.ElementUtils.isEmpty(n)) {
                            p = t;
                            break
                        }
                        if (t === f) return ""
                    }
                let h = f > 0 && m.NodeUtils.isType(e[f - 1], "blockQuote"),
                    E = m.NodeUtils.isType(e[f], "blockQuote"),
                    g = m.NodeUtils.isType(e[p], "blockQuote"),
                    C = [];
                for (let t = f; t <= p; t++) {
                    let n = e[t];
                    if (a && m.TextUtils.isText(n) && 0 === n.text.length) continue;
                    let l = null != r && t === f ? {
                            path: r.path.slice(1),
                            offset: r.offset
                        } : void 0,
                        s = null != o && t === p ? {
                            path: o.path.slice(1),
                            offset: o.offset
                        } : void 0,
                        u = null == r || null == o || !h && (!E || g),
                        c = S(n, {
                            mode: i,
                            start: l,
                            end: s,
                            allowBlockQuotePrefix: u,
                            preventEmojiSurrogates: d
                        });
                    (!a || c.length > 0) && C.push(c)
                }
                return C.join(s)
            }

            function S(e, t) {
                let {
                    mode: n,
                    start: l,
                    allowBlockQuotePrefix: h = !1,
                    preventEmojiSurrogates: S = !1
                } = null != t ? t : {};
                if (m.TextUtils.isText(e)) return function(e, t) {
                    var n, l;
                    let {
                        start: r,
                        end: o
                    } = null != t ? t : {};
                    return i(null == r || 0 === r.path.length, "Invalid start provided to serializeText"), i(null == o || 0 === o.path.length, "Invalid end provided to serializeText"), e.substring(null !== (n = null == r ? void 0 : r.offset) && void 0 !== n ? n : 0, null !== (l = null == o ? void 0 : o.offset) && void 0 !== l ? l : e.length)
                }(e.text, t);
                switch (e.type) {
                    case "line":
                    case "testInline":
                        return E(e.children, t);
                    case "testInlineVoid":
                        return "";
                    case "blockQuote": {
                        let n = E(e.children, t),
                            i = null != l && 1 === l.path.length && 0 === l.path[0] && 0 === l.offset;
                        if (h && (null == l || i)) return "> ".concat(n);
                        return n
                    }
                    case "emoji": {
                        let t = e.emoji;
                        if (!S && null != t.surrogate) return t.surrogate;
                        return t.name
                    }
                    case "customEmoji": {
                        let t = e.emoji;
                        if ("raw" === n) {
                            let e = t.animated ? "a" : "",
                                n = t.name.replace(/:/g, "").split("~")[0];
                            return "<".concat(e, ":").concat(n, ":").concat(t.emojiId, ">")
                        }
                        return t.name
                    }
                    case "textMention":
                        return e.name;
                    case "channelMention": {
                        let t = "<#".concat(e.channelId, ">");
                        if ("raw" === n) return t;
                        let l = a.default.getChannel(e.channelId);
                        if (null == l) return t;
                        return (0, r.computeChannelName)(l, f.default, d.default, !0, !0)
                    }
                    case "soundboard": {
                        let t = "<sound:".concat(e.soundId, ">");
                        if ("raw" === n) return t;
                        let l = s.default.getSoundById(e.soundId);
                        if (null == l) return t;
                        return l.name
                    }
                    case "staticRouteLink": {
                        let t = "<id:".concat(e.channelId, ">");
                        if ("raw" === n) return t;
                        let l = a.default.getChannel(e.channelId);
                        if (null == l) return t;
                        return (0, r.computeChannelName)(l, f.default, d.default, !0, !0)
                    }
                    case "roleMention": {
                        let t = "<@&".concat(e.roleId, ">");
                        if ("raw" === n) return t;
                        let l = u.default.getGuild(c.default.getGuildId()),
                            i = null == l ? void 0 : l.roles[e.roleId];
                        if (null == i) return t;
                        return "@".concat(i.name)
                    }
                    case "userMention": {
                        let t = "<@".concat(e.userId, ">");
                        if ("raw" === n) return t;
                        let l = f.default.getUser(e.userId);
                        if (null == l) return t;
                        return "@".concat(p.default.getUserTag(l, {
                            decoration: "never"
                        }))
                    }
                    case "commandMention":
                        return "</".concat(e.commandName, ":").concat(e.commandId, ">");
                    case "timestamp":
                        return (0, o.unparseTimestamp)(e.parsed.timestamp, e.parsed.format);
                    case "applicationCommand":
                        return E(e.children, {
                            ...t,
                            separator: " ",
                            ignoreEmptyNodes: !0
                        });
                    case "applicationCommandOption": {
                        let n = E(e.children, t);
                        if (null == l) return "".concat(e.optionDisplayName, ":").concat(n);
                        return n
                    }
                }
            }
        },
        916429: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                parseSelectedSyntax: function() {
                    return d
                },
                toggleMarkdownStyle: function() {
                    return h
                },
                toggleBlockStyle: function() {
                    return E
                }
            }), n("222007");
            var l = n("627445"),
                i = n.n(l),
                r = n("83800"),
                o = n("939563"),
                s = n("385887");
            let a = new Set(["*", "_", "~", "`", "|"]),
                u = {
                    bold: "**",
                    italics: "*",
                    underline: "__",
                    strikethrough: "~~",
                    inlineCode: "`",
                    spoiler: "||"
                };

            function d(e, t, n) {
                if (null == e.selection) return {
                    before: {},
                    after: {}
                };
                let l = c(e, t),
                    i = c(e, n);
                for (let e in l) !(e in i) && delete l[e];
                for (let e in i) !(e in l) && delete i[e];
                return {
                    before: l,
                    after: i
                }
            }

            function c(e, t) {
                let [n] = s.EditorUtils.node(e, t.path);
                if (!s.TextUtils.isText(n)) return {};
                let l = n.text,
                    i = t.offset;
                for (let e = i - 1; e >= 0 && a.has(l.charAt(e)); e--) i--;
                let r = t.offset;
                for (let e = r; e < l.length && a.has(l.charAt(e)); e++) r++;
                let o = l.substring(i, r),
                    u = {};
                return p({
                    result: u,
                    text: o,
                    startIndex: i,
                    syntax: "***",
                    type1: "italics",
                    type2: "bold"
                }), p({
                    result: u,
                    text: o,
                    startIndex: i,
                    syntax: "___",
                    type1: "italics",
                    type2: "underline"
                }), f(u, o, i, "**", "bold"), f(u, o, i, "*", "italics"), f(u, o, i, "_", "italics"), f(u, o, i, "__", "underline"), f(u, o, i, "`", "inlineCode"), f(u, o, i, "~~", "strikethrough"), f(u, o, i, "||", "spoiler"), u
            }

            function f(e, t, n, l, i) {
                let r = m(t, l);
                r >= 0 && (e[i] = {
                    chars: l,
                    location: n + r
                })
            }

            function p(e) {
                let {
                    result: t,
                    text: n,
                    startIndex: l,
                    syntax: i,
                    type1: r,
                    type2: o
                } = e, s = m(n, i);
                s >= 0 && (t[r] = {
                    chars: i.substring(0, 1),
                    location: s + l
                }, t[o] = {
                    chars: i.substring(1),
                    location: s + l + 1
                })
            }

            function m(e, t) {
                let n = e.indexOf(t);
                if (n >= 0) {
                    let l = t.charAt(0);
                    if (n > 0 && e.charAt(n - 1) === l || n < e.length - 1 && e.charAt(n + t.length) === l) return -1
                }
                return n
            }

            function h(e, t) {
                r.HistoryUtils.withSingleEntry(e, () => {
                    s.EditorUtils.withoutNormalizing(e, () => {
                        i(null != e.selection, "Editor has no selection");
                        let [n, l] = s.RangeUtils.edges(e.selection), r = d(e, n, l), a = r.before[t], c = r.after[t], f = s.EditorUtils.node(e, n.path), p = s.EditorUtils.node(e, l.path);
                        if (null == f || null == p || !s.TextUtils.isText(f[0]) || !s.TextUtils.isText(p[0])) return;
                        let m = s.PathUtils.equals(f[1], p[1]);
                        if (null != a && null != c) {
                            let t = {
                                    path: n.path,
                                    offset: a.location
                                },
                                i = {
                                    path: l.path,
                                    offset: c.location
                                };
                            o.SlateTransforms.delete(e, {
                                at: i,
                                distance: c.chars.length
                            }), o.SlateTransforms.delete(e, {
                                at: t,
                                distance: a.chars.length
                            });
                            let r = n.offset,
                                u = l.offset;
                            !s.PointUtils.isBefore(n, t) && (r -= a.chars.length), m && !s.PointUtils.isBefore(l, t) && (u -= a.chars.length), s.PointUtils.isAfter(l, i) && (u -= c.chars.length), o.SlateTransforms.select(e, {
                                anchor: {
                                    path: n.path,
                                    offset: Math.max(0, r)
                                },
                                focus: {
                                    path: l.path,
                                    offset: Math.max(0, u)
                                }
                            })
                        } else {
                            let i = u[t];
                            o.SlateTransforms.insertText(e, i, {
                                at: l
                            }), o.SlateTransforms.insertText(e, i, {
                                at: n
                            });
                            let r = f[0].text.length + i.length,
                                s = p[0].text.length + (m ? 2 * i.length : i.length);
                            o.SlateTransforms.select(e, {
                                anchor: {
                                    path: n.path,
                                    offset: Math.min(r, n.offset + i.length)
                                },
                                focus: {
                                    path: l.path,
                                    offset: Math.min(s, l.offset + (m ? i.length : 0))
                                }
                            })
                        }
                    })
                }), s.EditorUtils.focus(e)
            }

            function E(e, t) {
                let n = e.selection;
                if (null == n) return;
                let l = !0;
                for (let [i, r] of s.EditorUtils.blocks(e))("line" === i.type || i.type === t) && s.RangeUtils.includes(n, r) && (l = l && i.type === t);
                s.EditorUtils.withoutNormalizing(e, () => {
                    for (let [i, r] of s.EditorUtils.blocks(e)) s.RangeUtils.includes(n, r) && (l || "line" !== i.type ? l && i.type === t && o.SlateTransforms.setNodes(e, {
                        type: "line"
                    }, {
                        at: r
                    }) : o.SlateTransforms.setNodes(e, {
                        type: t
                    }, {
                        at: r
                    }))
                }), s.EditorUtils.focus(e)
            }
        },
        848471: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ToolbarButtons: function() {
                    return I
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("371621"),
                a = n("77078"),
                u = n("244201"),
                d = n("520089"),
                c = n("769215"),
                f = n("204591"),
                p = n("685020"),
                m = n("265363"),
                h = n("140567"),
                E = n("983782"),
                S = n("791776"),
                g = n("83800"),
                C = n("916429"),
                T = n("939563"),
                v = n("385887"),
                y = n("395364"),
                x = n("223797");

            function I(e) {
                var t;
                let {
                    editorRef: n,
                    options: i,
                    iconClassName: r,
                    dividerClassName: s
                } = e, a = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor();
                return null == a ? null : (0, l.jsxs)("div", {
                    className: x.buttons,
                    children: [(0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "bold",
                        children: (0, l.jsx)(c.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "italics",
                        children: (0, l.jsx)(p.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "strikethrough",
                        children: (0, l.jsx)(h.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)("div", {
                        className: o(x.divider, s)
                    }), !(null == i ? void 0 : i.disableBlockQuotes) && (0, l.jsx)(A, {
                        slateEditor: a,
                        blockType: "blockQuote",
                        children: (0, l.jsx)(d.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "inlineCode",
                        children: (0, l.jsx)(f.default, {
                            className: o(x.icon, r)
                        })
                    }), (0, l.jsx)(_, {
                        slateEditor: a,
                        markdownSyntax: "spoiler",
                        children: (0, l.jsx)(m.default, {
                            className: o(x.icon, r)
                        })
                    })]
                })
            }
            var N = i.forwardRef(function(e, t) {
                var n;
                let {
                    editorRef: r,
                    containerRef: o,
                    options: a
                } = e, d = i.useRef(null), [c, f] = i.useState(!1), p = i.useRef(), m = i.useContext(u.default), h = i.useCallback(() => {
                    f(!1), clearTimeout(p.current)
                }, []), g = i.useCallback(e => {
                    var t;
                    let n = m.renderWindow,
                        l = e.target instanceof n.Node && (null === (t = d.current) || void 0 === t ? void 0 : t.contains(e.target));
                    !l && h()
                }, [m, h]), C = i.useCallback(e => {
                    let t = m.renderWindow;
                    if (e.target instanceof t.Element) {
                        if (0 !== e.button) h();
                        else {
                            var n;
                            let l = e.target instanceof t.Node && (null === (n = d.current) || void 0 === n ? void 0 : n.contains(e.target));
                            clearTimeout(p.current), p.current = setTimeout(() => {
                                var t;
                                let n = null === (t = (0, S.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement,
                                    i = o.current;
                                f(l || null != n && null != i && i.contains(n))
                            }, 100)
                        }
                    } else h()
                }, [m, o, h]);
                i.useImperativeHandle(t, () => ({
                    hide: h
                }), [h]), i.useEffect(() => {
                    let e = m.renderWindow;
                    return e.document.addEventListener("keydown", h), e.document.addEventListener("mousedown", g), e.document.addEventListener("mouseup", C), e.addEventListener("focus", h), e.addEventListener("blur", h), () => {
                        e.document.removeEventListener("keydown", h), e.document.removeEventListener("mousedown", g), e.document.removeEventListener("mouseup", C), e.removeEventListener("focus", h), e.removeEventListener("blur", h), clearTimeout(p.current)
                    }
                }, [m, h, g, C]);
                let {
                    x: T,
                    y
                } = i.useMemo(() => {
                    var e, t, n, l;
                    let i = null === (e = r.current) || void 0 === e ? void 0 : e.getSlateEditor();
                    if ((null == i ? void 0 : i.selection) == null || v.RangeUtils.isCollapsed(i.selection) || !c) return {
                        x: null,
                        y: null
                    };
                    let a = s.ReactEditor.findDocumentOrShadowRoot(i),
                        u = a.getSelection();
                    if (null == u || null == u.focusNode || null == u.anchorNode || u.isCollapsed) return {
                        x: null,
                        y: null
                    };
                    let d = a.createRange();
                    d.setStart(u.focusNode, u.focusOffset), d.setEnd(u.focusNode, u.focusOffset);
                    let f = d.getBoundingClientRect(),
                        p = a.createRange();
                    p.setStart(u.anchorNode, u.anchorOffset), p.setEnd(u.anchorNode, u.anchorOffset);
                    let m = p.getBoundingClientRect(),
                        h = a.createRange();
                    h.setStart(u.anchorNode, u.anchorOffset), h.setEnd(u.focusNode, u.focusOffset);
                    let E = h.getBoundingClientRect(),
                        S = f.x === m.x,
                        g = S ? E.x : Math.min(f.x, m.x),
                        C = S ? E.x + E.width : Math.max(f.x, m.x),
                        T = null !== (l = null === (n = o.current) || void 0 === n ? void 0 : null === (t = n.getBoundingClientRect()) || void 0 === t ? void 0 : t.y) && void 0 !== l ? l : 0,
                        y = Math.max(T, Math.min(m.y, f.y));
                    return {
                        x: g + (C - g) / 2,
                        y
                    }
                }, [o, c, r]), [N, _] = i.useState(0), [A, O] = i.useState(0);
                if (i.useLayoutEffect(() => {
                        if (null == T || null == y || null == d.current) return;
                        let e = d.current.getBoundingClientRect();
                        O(e.width / 2), _(e.height + 12)
                    }, [T, y]), null == T || null == y) return null;
                let M = null === (n = r.current) || void 0 === n ? void 0 : n.getSlateEditor();
                return null == M ? null : (0, l.jsx)(E.default, {
                    children: (0, l.jsxs)("div", {
                        id: "slate-toolbar",
                        ref: d,
                        className: x.toolbar,
                        style: {
                            top: y - N,
                            left: T - A
                        },
                        onMouseDown: e => {
                            e.stopPropagation()
                        },
                        onMouseUp: e => {
                            e.stopPropagation()
                        },
                        children: [(0, l.jsx)(R, {
                            slateEditor: M
                        }), (0, l.jsx)(I, {
                            editorRef: r,
                            options: a
                        })]
                    })
                })
            });

            function _(e) {
                let {
                    slateEditor: t,
                    markdownSyntax: n,
                    children: i
                } = e, r = !1;
                if ((null == t ? void 0 : t.selection) != null) {
                    let [e, l] = v.RangeUtils.edges(t.selection);
                    r = null != (0, C.parseSelectedSyntax)(t, e, l).before[n]
                }
                return (0, l.jsx)(a.Button, {
                    className: x.button,
                    innerClassName: x.buttonInner,
                    color: r ? x.active : x.inactive,
                    hover: x.hover,
                    look: a.Button.Looks.FILLED,
                    size: a.Button.Sizes.NONE,
                    onClick: () => {
                        null != t && g.HistoryUtils.withSingleEntry(t, () => (0, C.toggleMarkdownStyle)(t, n))
                    },
                    children: i
                })
            }

            function A(e) {
                let {
                    blockType: t,
                    slateEditor: n,
                    children: i
                } = e, r = null != n ? v.EditorUtils.getCurrentBlock(n) : null, o = null != r && v.NodeUtils.isType(r[0], t);
                return (0, l.jsx)(a.Button, {
                    className: x.button,
                    innerClassName: x.buttonInner,
                    color: o ? x.active : x.inactive,
                    hover: x.hover,
                    look: a.Button.Looks.FILLED,
                    size: a.Button.Sizes.NONE,
                    onClick: () => {
                        null != n && g.HistoryUtils.withSingleEntry(n, () => (0, C.toggleBlockStyle)(n, t))
                    },
                    children: i
                })
            }

            function R(e) {
                var t;
                let {
                    slateEditor: n
                } = e, [l, r] = null !== (t = v.EditorUtils.getSelectedVoid(n)) && void 0 !== t ? t : [null, null], o = i.useCallback(e => {
                    if ((null == n ? void 0 : n.selection) == null || null == r) return;
                    let t = n.selection;
                    g.HistoryUtils.withSingleEntry(n, () => {
                        T.SlateTransforms.voidToText(n, e, r), T.SlateTransforms.select(n, t)
                    })
                }, [n, r]);
                return null == l ? null : (0, y.default)(l, {
                    replace: o
                })
            }
        },
        939563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlateTransforms: function() {
                    return s
                }
            }), n("106442"), n("175143"), n("222007");
            var l = n("987295"),
                i = n("640830"),
                r = n("385887"),
                o = n("566819");
            let s = {
                ...l.Transforms,
                resetSelectionToStart(e) {
                    l.Transforms.select(e, r.EditorUtils.start(e, []))
                },
                resetSelectionToEnd(e) {
                    l.Transforms.select(e, r.EditorUtils.end(e, []))
                },
                delete(e, t) {
                    let {
                        at: n,
                        distance: i,
                        unit: o,
                        reverse: s = !1,
                        select: a = !1,
                        bounds: u,
                        voids: d
                    } = t;
                    if (null == n) {
                        if (null == e.selection) return;
                        n = e.selection
                    }
                    let [c, f] = r.RangeUtils.isRange(n) ? r.RangeUtils.edges(n) : r.EditorUtils.edges(e, n);
                    if (null != i || null != o) {
                        var p, m, h;
                        if (s) {
                            let t = null !== (p = r.EditorUtils.before(e, c, {
                                distance: i,
                                unit: o
                            })) && void 0 !== p ? p : r.EditorUtils.start(e, []);
                            if ("character" === o && (null != i ? i : 1) === 1 && r.PathUtils.equals(c.path, f.path)) {
                                let n = r.EditorUtils.leaf(e, c.path),
                                    l = null != n ? n[0].text : "";
                                l.length > 0 && null != l[l.length - 1].match(/[\u0E00-\u0E7F]/) && (t = null !== (m = r.EditorUtils.before(e, c, {
                                    distance: i,
                                    unit: "offset"
                                })) && void 0 !== m ? m : r.EditorUtils.start(e, []))
                            }
                            c = t
                        } else f = null !== (h = r.EditorUtils.after(e, f, {
                            distance: i,
                            unit: o
                        })) && void 0 !== h ? h : r.EditorUtils.end(e, [])
                    }
                    if (null != u) {
                        let [e, t] = r.RangeUtils.edges(u);
                        r.PointUtils.isBefore(c, e) && (c = e), r.PointUtils.isAfter(f, t) && (f = t)
                    }!r.PointUtils.equals(c, f) && (l.Transforms.delete(e, {
                        at: {
                            anchor: c,
                            focus: f
                        },
                        hanging: !0,
                        voids: d
                    }), a && r.EditorUtils.hasPath(e, c.path) && l.Transforms.select(e, c))
                },
                textToText(e, t, n) {
                    var i;
                    let o = r.EditorUtils.getSelectionOverlap(e, n),
                        [s, a] = r.RangeUtils.edges(n),
                        d = null !== (i = r.EditorUtils.before(e, s)) && void 0 !== i ? i : r.EditorUtils.start(e, []),
                        c = r.EditorUtils.after(e, a);
                    r.RangeUtils.isExpanded(n) && l.Transforms.delete(e, {
                        at: n,
                        voids: !0
                    }), l.Transforms.insertText(e, t, {
                        at: d
                    }), d = null != d ? d : r.EditorUtils.start(e, []), c = null != c ? c : r.EditorUtils.end(e, []), u(e, o, d, c, c)
                },
                textToVoid(e, t, n) {
                    let i = r.EditorUtils.getSelectionOverlap(e, n),
                        o = r.RangeUtils.start(n),
                        s = r.PathUtils.next(o.path),
                        a = {
                            path: r.PathUtils.next(s),
                            offset: 0
                        };
                    l.Transforms.delete(e, {
                        at: n,
                        voids: !0
                    }), 0 === o.offset && l.Transforms.insertNodes(e, [{
                        text: ""
                    }], {
                        at: o.path
                    }), l.Transforms.insertNodes(e, [t], {
                        at: o
                    }), (!r.EditorUtils.hasPath(e, a.path) || !r.TextUtils.isText(r.EditorUtils.node(e, a.path)[0])) && l.Transforms.insertNodes(e, [{
                        text: ""
                    }], {
                        at: a.path
                    }), u(e, i, o, a, a)
                },
                textToInline(e, t, n) {
                    let i = r.EditorUtils.getSelectionOverlap(e, n),
                        o = t.children[t.children.length - 1],
                        s = r.RangeUtils.start(n),
                        a = r.PathUtils.next(s.path),
                        d = {
                            path: r.PathUtils.child(a, t.children.length - 1),
                            offset: r.TextUtils.isText(o) ? o.text.length : 0
                        };
                    l.Transforms.delete(e, {
                        at: n,
                        voids: !0
                    }), 0 === s.offset && l.Transforms.insertNodes(e, [{
                        text: ""
                    }], {
                        at: s.path
                    }), l.Transforms.insertNodes(e, [t], {
                        at: s
                    }), u(e, i, s, d, d)
                },
                voidToText(e, t, n) {
                    var i;
                    let o = r.EditorUtils.getSelectionOverlap(e, n),
                        s = null !== (i = r.EditorUtils.before(e, n)) && void 0 !== i ? i : r.EditorUtils.start(e, []),
                        a = {
                            path: s.path,
                            offset: s.offset + t.length
                        };
                    l.Transforms.delete(e, {
                        at: n,
                        voids: !0
                    }), l.Transforms.insertText(e, t, {
                        at: s
                    }), u(e, o, s, s, a)
                },
                removeInline(e, t) {
                    var n;
                    let i = r.EditorUtils.getSelectionOverlap(e, t),
                        o = null !== (n = r.EditorUtils.before(e, t)) && void 0 !== n ? n : r.EditorUtils.start(e, []);
                    l.Transforms.delete(e, {
                        at: t,
                        voids: !0
                    }), u(e, i, o, o, o)
                },
                removeInlineChildren(e, t) {
                    let [n, i] = t, o = r.EditorUtils.getSelectionOverlap(e, i), s = {
                        path: r.PathUtils.child(i, 0),
                        offset: 0
                    };
                    r.EditorUtils.withoutNormalizing(e, () => {
                        for (let t = n.children.length - 1; t >= 0; t--) l.Transforms.removeNodes(e, {
                            at: r.PathUtils.child(i, t),
                            voids: !0
                        })
                    }), u(e, o, null, s, null)
                },
                selectCommandOption(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        o = i.getCommandBlock(e);
                    if (null != o)
                        for (let i = 0; i < o[0].children.length; i++) {
                            let s = o[0].children[i];
                            if (r.NodeUtils.isType(s, "applicationCommandOption") && s.optionName === t) {
                                n ? l.Transforms.select(e, [0, i]) : l.Transforms.select(e, r.EditorUtils.end(e, [0, i]));
                                return
                            }
                        }
                },
                selectPreviousCommandOption(e) {
                    let t = i.getCommandBlock(e);
                    if (null == t) return;
                    let n = null != e.selection ? e.selection.focus.path : r.EditorUtils.end(e, o.FIRST_BLOCK_PATH).path,
                        s = i.getCurrentCommandOption(e),
                        a = r.EditorUtils.previous(e, {
                            at: n,
                            match: e => e !== (null == s ? void 0 : s[0]) && r.NodeUtils.isType(e, "applicationCommandOption")
                        });
                    null != a ? l.Transforms.select(e, a[1]) : r.PathUtils.isAfter(n, o.FIRST_TEXT_PATH) && l.Transforms.select(e, r.EditorUtils.end(e, o.FIRST_TEXT_PATH))
                },
                selectNextCommandOption(e) {
                    let t = i.getCommandBlock(e);
                    if (null == t) return;
                    let n = null != e.selection ? e.selection.focus.path : r.EditorUtils.start(e, o.FIRST_BLOCK_PATH).path,
                        a = i.getCurrentCommandOption(e),
                        u = r.EditorUtils.next(e, {
                            at: n,
                            match: e => e !== (null == a ? void 0 : a[0]) && r.NodeUtils.isType(e, "applicationCommandOption")
                        });
                    null != u ? l.Transforms.select(e, u[1]) : s.resetSelectionToEnd(e)
                },
                insertCommandOption(e, t) {
                    s.resetSelectionToEnd(e), s.insertNodes(e, [{
                        type: "applicationCommandOption",
                        optionName: t.name,
                        optionDisplayName: t.displayName,
                        optionType: t.type,
                        children: [{
                            text: ""
                        }]
                    }])
                },
                keyboardMove(e, t) {
                    let {
                        reverse: n = !1,
                        unit: i = "character",
                        edge: o
                    } = null != t ? t : {}, s = e.selection;
                    if (null == s) return;
                    if (void 0 === o && r.RangeUtils.isExpanded(s)) {
                        l.Transforms.collapse(e, {
                            edge: n ? "start" : "end"
                        });
                        return
                    }
                    let a = r.EditorUtils.leaf(e, s.anchor.path);
                    if (null == a) return;
                    let u = n ? r.EditorUtils.before : r.EditorUtils.after,
                        d = s.focus;
                    for (; null != d;) {
                        let t = i;
                        n || s.focus.offset !== a[0].text.length ? n && 0 === s.focus.offset && (t = "offset") : t = "offset";
                        let l = u(e, d, {
                            unit: t
                        });
                        if (null == l || r.PointUtils.equals(d, l)) {
                            d = void 0;
                            break
                        }
                        if (d = l, null == r.EditorUtils.getParentVoid(e, d)) break
                    }
                    null != d && ("focus" === o ? l.Transforms.setSelection(e, {
                        focus: d
                    }) : l.Transforms.setSelection(e, {
                        focus: d,
                        anchor: d
                    }))
                }
            };

            function a(e, t, n, l, i) {
                switch (t) {
                    case "start":
                        return n;
                    case "inside":
                        return l;
                    case "end":
                        return i
                }
                return e
            }

            function u(e, t, n, l, i) {
                var r, o;
                if (null == t.anchor && null == t.focus) return;
                let u = a(null === (r = e.selection) || void 0 === r ? void 0 : r.anchor, t.anchor, n, l, i),
                    d = a(null === (o = e.selection) || void 0 === o ? void 0 : o.focus, t.focus, n, l, i);
                if (null != u && null != d) s.select(e, {
                    anchor: u,
                    focus: d
                })
            }
        },
        385887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EditorUtils: function() {
                    return d
                },
                NodeUtils: function() {
                    return c
                },
                ElementUtils: function() {
                    return f
                },
                TextUtils: function() {
                    return p
                },
                PathUtils: function() {
                    return m
                },
                PointUtils: function() {
                    return h
                },
                RangeUtils: function() {
                    return E
                },
                SelectionUtils: function() {
                    return S
                },
                DOMUtils: function() {
                    return v
                }
            }), n("222007");
            var l = n("627445"),
                i = n.n(l),
                r = n("987295"),
                o = n("371621"),
                s = n("96342"),
                a = n("566819");
            n("903782");
            let u = !1;
            {
                let e = o.ReactEditor.findDocumentOrShadowRoot;
                o.ReactEditor.findDocumentOrShadowRoot = t => {
                    var n, l;
                    return null !== (l = null === (n = t.windowContext) || void 0 === n ? void 0 : n.renderWindow.document) && void 0 !== l ? l : e(t)
                }, u = !0
            }
            let d = {
                    ...r.Editor,
                    ...o.ReactEditor,
                    richValue: e => e.children,
                    blocks: e => d.richValue(e).map((e, t) => [e, [t]]),
                    isBlock: (e, t) => f.isElement(t) && r.Editor.isBlock(e, t),
                    isInline: (e, t) => f.isElement(t) && r.Editor.isInline(e, t),
                    isVoid: (e, t) => f.isElement(t) && r.Editor.isVoid(e, t),
                    isEditorEmpty(e) {
                        let t = d.richValue(e);
                        return !(t.length > 1) && (0 === t.length || "line" === t[0].type && f.isEmpty(t[0]))
                    },
                    getFirstText(e) {
                        let t = d.node(e, a.FIRST_TEXT_PATH);
                        return p.isText(t[0]) ? t[0] : null
                    },
                    getCurrentBlock(e) {
                        return null == e.selection ? null : this.getParentBlock(e, e.selection)
                    },
                    getCurrentElement(e) {
                        return null == e.selection ? null : this.getParentElement(e, e.selection)
                    },
                    getCurrentInline(e) {
                        return null == e.selection ? null : this.getParentInline(e, e.selection)
                    },
                    getCurrentVoid(e) {
                        return null == e.selection ? null : this.getParentVoid(e, e.selection)
                    },
                    getCurrentText(e) {
                        let t = null != e.selection ? E.toPoint(e.selection) : null;
                        return null == t ? null : d.node(e, t.path)
                    },
                    getParentBlock(e, t) {
                        var n;
                        return null !== (n = d.above(e, {
                            at: t,
                            match: t => f.isElement(t) && d.isBlock(e, t),
                            mode: "lowest"
                        })) && void 0 !== n ? n : null
                    },
                    getParentElement(e, t) {
                        var n;
                        return null !== (n = d.above(e, {
                            at: t,
                            match: e => f.isElement(e),
                            mode: "lowest"
                        })) && void 0 !== n ? n : null
                    },
                    getParentInline(e, t) {
                        var n;
                        return null !== (n = d.above(e, {
                            at: t,
                            match: t => d.isInline(e, t),
                            mode: "lowest"
                        })) && void 0 !== n ? n : null
                    },
                    getParentVoid(e, t) {
                        var n;
                        return null !== (n = d.above(e, {
                            at: t,
                            match: t => d.isVoid(e, t),
                            mode: "lowest"
                        })) && void 0 !== n ? n : null
                    },
                    getSelectedVoid(e) {
                        let t;
                        if (null == e.selection) return null;
                        if (E.isExpanded(e.selection)) {
                            let [n, l] = E.edges(e.selection), i = d.after(e, n, {
                                unit: "offset"
                            }), r = d.before(e, l, {
                                unit: "offset"
                            });
                            if (null == i || null == r || !h.equals(i, r)) return null;
                            t = i
                        } else t = e.selection.anchor;
                        return null == t ? null : d.getParentVoid(e, t)
                    },
                    getSelectedText(e, t) {
                        let n = null;
                        if (t) {
                            let t = o.ReactEditor.findDocumentOrShadowRoot(e),
                                l = t.getSelection();
                            if (null != l && l.rangeCount > 0) {
                                let t = l.getRangeAt(0);
                                null != t && (n = o.ReactEditor.toSlateRange(e, t, {
                                    exactMatch: !0,
                                    suppressThrow: !0
                                }))
                            }
                        } else n = e.selection;
                        return null == n ? "" : this.getTextFromRange(e, n)
                    },
                    getTextFromRange(e, t) {
                        let [n, l] = E.edges(t), i = d.nodes(e, {
                            at: t,
                            mode: "lowest",
                            match: e => p.isText(e)
                        }), r = "";
                        for (let [e, t] of i) {
                            let i = m.equals(t, n.path) ? n.offset : 0,
                                o = m.equals(t, l.path) ? l.offset : 0;
                            r += e.text.substring(i, o)
                        }
                        return r
                    },
                    withoutNormalizing(e, t) {
                        let n = d.isNormalizing(e);
                        d.setNormalizing(e, !1);
                        try {
                            t()
                        } finally {
                            d.setNormalizing(e, n)
                        }!1 !== n && d.normalize(e)
                    },
                    areStylesDisabled(e) {
                        var t;
                        if (!e.previewMarkdown) return !0;
                        let n = d.richValue(e),
                            l = n[0],
                            i = (null == l ? void 0 : l.type) === "line" ? l.children[0] : null;
                        if (null == i || !p.isText(i)) return !1;
                        let r = e.chatInputType,
                            o = i.text;
                        return 1 === n.length && 1 === l.children.length && (!0 === r.sedReplace && o.startsWith("s/") || (null === (t = r.autocomplete) || void 0 === t ? void 0 : t.reactions) === !0 && o.startsWith("+"))
                    },
                    focus(e) {
                        !o.ReactEditor.isFocused(e) && (o.ReactEditor.focus(e), o.ReactEditor.deselect(e))
                    },
                    getSelectionOverlap(e, t) {
                        if (null == e.selection) return {
                            anchor: null,
                            focus: null
                        };
                        if (m.isPath(t)) {
                            let n = d.range(e, t),
                                [l] = d.node(e, t);
                            if (f.isElement(l)) {
                                let l = d.before(e, t),
                                    i = d.after(e, t);
                                t = {
                                    anchor: null != l ? l : n.anchor,
                                    focus: null != i ? i : n.focus
                                }
                            } else t = n
                        }
                        let [n, l] = E.edges(t), i = null, r = null;
                        return h.equals(e.selection.anchor, n) ? i = "start" : h.equals(e.selection.anchor, l) ? i = "end" : E.includes(t, e.selection.anchor) && (i = "inside"), h.equals(e.selection.focus, n) ? r = "start" : h.equals(e.selection.focus, l) ? r = "end" : E.includes(t, e.selection.focus) && (r = "inside"), {
                            anchor: i,
                            focus: r
                        }
                    }
                },
                c = {
                    ...r.Node,
                    isType: (e, t) => r.Element.isElement(e) && e.type === t,
                    isInTypes: (e, t) => r.Element.isElement(e) && t.has(e.type)
                },
                f = {
                    ...r.Element,
                    updateElement(e, t) {
                        let n = d.node(e, t[1]);
                        return i(!d.isEditor(t[0]), "Element is the root node"), i(null != n, "Failed to find element"), i(f.isElement(n[0]), "Node at this path is no longer an element"), i(n[0].type === t[0].type, "Node at this path is a different type"), n
                    },
                    markdown(e, t, n) {
                        var l;
                        let i = "line" === e.type && (null === (l = e.codeBlockState) || void 0 === l ? void 0 : l.wasInCodeBlock) === !0,
                            r = e.children.map(e => p.isText(e) ? e.text : " "),
                            o = r.join(""),
                            a = s.parse(o, null != t ? t : null, i, n);
                        return {
                            entries: a,
                            serializedChildren: r
                        }
                    },
                    isEmpty(e) {
                        if (e.children.length > 1) return !1;
                        if (0 === e.children.length) return !0;
                        let t = e.children[0];
                        return p.isText(t) && 0 === t.text.length
                    }
                },
                p = {
                    ...r.Text
                },
                m = {
                    ...r.Path,
                    isFirstEditorBlock: e => m.equals(e, a.FIRST_BLOCK_PATH),
                    isFirstEditorText: e => m.equals(e, a.FIRST_TEXT_PATH),
                    isFirstChild: (e, t) => m.equals(t, m.child(e, 0)),
                    child: (e, t) => [...e, t]
                },
                h = {
                    ...r.Point,
                    start(e) {
                        let [, t] = e;
                        return {
                            path: m.child(t, 0),
                            offset: 0
                        }
                    },
                    end(e) {
                        let [t, n] = e, l = t.children[t.children.length - 1];
                        return {
                            path: m.child(n, t.children.length - 1),
                            offset: p.isText(l) ? l.text.length : 0
                        }
                    },
                    isAtStart(e, t) {
                        return h.equals(e, this.start(t))
                    },
                    isAtEnd(e, t) {
                        return h.equals(e, this.end(t))
                    },
                    clamp(e, t) {
                        let [n, l] = E.edges(t);
                        return h.isBefore(e, n) && (e = n), h.isAfter(e, l) && (e = l), e
                    }
                },
                E = {
                    ...r.Range,
                    toPoint: e => null == e || E.isExpanded(e) ? null : e.anchor,
                    children(e) {
                        let [t, n] = e, l = t.children[t.children.length - 1];
                        return {
                            anchor: {
                                path: m.child(n, 0),
                                offset: 0
                            },
                            focus: {
                                path: m.child(n, t.children.length - 1),
                                offset: p.isText(l) ? l.text.length : 0
                            }
                        }
                    },
                    clamp(e, t) {
                        let [n, l] = E.edges(e), [i, r] = E.edges(t);
                        return (h.isBefore(n, i) && (n = i), h.isAfter(l, r) && (l = r), E.isForward(e)) ? {
                            anchor: n,
                            focus: l
                        } : {
                            anchor: l,
                            focus: n
                        }
                    }
                },
                S = {
                    equals: (e, t) => null == e && null == t || null != e && null != t && E.equals(e, t),
                    isValid(e, t) {
                        if (null == t) return !1;
                        let {
                            anchor: n,
                            focus: l
                        } = t;
                        if (!d.hasPath(e, n.path) || !d.hasPath(e, l.path)) return !1;
                        let [i] = d.node(e, n.path), [r] = d.node(e, l.path);
                        return p.isText(i) && p.isText(r) && n.offset <= i.text.length && l.offset <= r.text.length
                    }
                },
                g = (e, t) => {
                    let n = (t.top + t.bottom) / 2;
                    return e.top <= n && e.bottom >= n
                },
                C = (e, t, n) => {
                    let l = d.toDOMRange(e, t).getBoundingClientRect(),
                        i = d.toDOMRange(e, n).getBoundingClientRect();
                    return g(l, i) && g(i, l)
                },
                T = (e, t, n, l) => {
                    let i = {
                            anchor: t,
                            focus: t
                        },
                        r = 0,
                        o = n.length,
                        s = Math.floor((r + o) / 2);
                    for (; s !== r;) {
                        let t = {
                            anchor: n[s],
                            focus: n[s]
                        };
                        if (C(e, t, i) ? l ? o = s : r = s : l ? r = s : o = s, s = Math.floor((r + o) / 2), !l && s === n.length - 2 && o === n.length - 1) {
                            let t = n[n.length - 1];
                            C(e, {
                                anchor: t,
                                focus: t
                            }, i) && (s = o)
                        }
                    }
                    return n[s]
                },
                v = {
                    getLineStart(e, t, n) {
                        let l;
                        let i = d.getParentElement(e, t);
                        if (null == i) return null;
                        let r = d.previous(e, {
                            at: t,
                            match: t => d.isInline(e, t) && !d.isVoid(e, t) && t !== i[0]
                        });
                        null != r && (l = d.after(e, r[1])), null == l && (l = d.start(e, i[1]));
                        let o = {
                                anchor: l,
                                focus: t
                            },
                            s = Array.from(d.positions(e, {
                                at: o
                            })),
                            a = T(e, t, s, !0);
                        if (n && h.equals(t, a) && !h.isAtEnd(t, i)) {
                            let n = d.after(e, t);
                            if (null == n) return a;
                            a = T(e, n, s, !0)
                        }
                        return a
                    },
                    getLineEnd(e, t, n) {
                        let l;
                        let i = d.getParentElement(e, t);
                        if (null == i) return null;
                        let r = d.next(e, {
                            at: t,
                            match: t => d.isInline(e, t) && !d.isVoid(e, t) && t !== i[0]
                        });
                        null != r && (l = d.before(e, r[1])), null == l && (l = d.end(e, i[1]));
                        let o = {
                                anchor: t,
                                focus: l
                            },
                            s = Array.from(d.positions(e, {
                                at: o
                            })),
                            a = T(e, t, s, !1);
                        if (n && h.equals(t, a) && !h.isAtEnd(t, i)) {
                            let n = d.after(e, t);
                            if (null == n) return a;
                            a = T(e, n, s, !1)
                        }
                        return a
                    },
                    getLineActionRange(e, t) {
                        let n = E.toPoint(e.selection);
                        if (null == n) return null;
                        if (t) {
                            let t = v.getLineStart(e, n, !1);
                            return null == t ? null : {
                                anchor: t,
                                focus: n
                            }
                        } {
                            let t = v.getLineEnd(e, n, !0);
                            return null == t ? null : {
                                anchor: n,
                                focus: t
                            }
                        }
                    }
                }
        },
        153213: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("77078"),
                o = n("86678"),
                s = n("538282"),
                a = n("882641"),
                u = n("848471"),
                d = n("958706"),
                c = n("223797");

            function f(e) {
                var t;
                let {
                    editorRef: n,
                    options: f,
                    channel: p
                } = e, m = null === (t = n.current) || void 0 === t ? void 0 : t.getSlateEditor(), h = i.useCallback((e, t) => {
                    let l = n.current;
                    null != e && null != l && l.insertEmoji(e, t, !1), t && (0, s.closeExpressionPicker)()
                }, [n]);
                return null == m ? null : (0, l.jsxs)("div", {
                    id: "slate-toolbar",
                    className: c.staticToolbar,
                    children: [(0, l.jsx)("div", {
                        className: c.staticButtons,
                        children: (0, l.jsx)(u.ToolbarButtons, {
                            editorRef: n,
                            options: f,
                            iconClassName: c.staticIcon,
                            dividerClassName: c.staticDivider
                        })
                    }), (0, l.jsx)(r.Popout, {
                        renderPopout: e => {
                            let {
                                closePopout: t
                            } = e;
                            return (0, l.jsx)(o.default, {
                                persistSearch: !0,
                                channel: p,
                                closePopout: t,
                                onSelectEmoji: (e, n) => {
                                    h(e, n), n && t()
                                },
                                pickerIntention: d.EmojiIntention.COMMUNITY_CONTENT
                            })
                        },
                        position: "bottom",
                        animation: r.Popout.Animation.NONE,
                        align: "left",
                        children: (e, t) => {
                            let {
                                isShown: n
                            } = t;
                            return (0, l.jsx)(a.default, {
                                ...e,
                                active: n,
                                className: c.emojiButton,
                                tabIndex: 0
                            })
                        }
                    })]
                })
            }
        },
        368555: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007"), n("424973");
            var l = n("135038"),
                i = n("385887");

            function r(e, t) {
                if (i.EditorUtils.areStylesDisabled(e)) return [];
                let [n, r] = t, o = [];
                if (!i.NodeUtils.isType(n, "line") || null == n.codeBlockState) return o;
                let {
                    hljsTypes: s,
                    isStyledCodeBlockLine: a
                } = n.codeBlockState;
                if (null == s || 0 === s.length || !a) return [];
                for (let t of s) {
                    let s = n.children.map(e => i.TextUtils.isText(e) ? e.text : null);
                    o.push({
                        hljsTypes: t.types,
                        anchor: (0, l.getPointFromPosition)(e, r, s, t.start),
                        focus: (0, l.getPointFromPosition)(e, r, s, t.end)
                    })
                }
                return o
            }
        },
        755604: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007"), n("424973");
            var l = n("385887");

            function i(e, t) {
                if (l.EditorUtils.areStylesDisabled(e)) return [];
                let [n, i] = t, r = [];
                if (!l.TextUtils.isText(n)) return r;
                let [o] = l.EditorUtils.node(e, l.PathUtils.parent(i));
                return l.NodeUtils.isType(o, "applicationCommand") ? (n === o.children[0] && r.push({
                    anchor: {
                        path: i,
                        offset: 0
                    },
                    focus: {
                        path: i,
                        offset: 0 + o.command.displayName.length + 1
                    },
                    commandName: !0
                }), r) : r
            }
        },
        30550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007"), n("424973");
            var l = n("135038"),
                i = n("385887");
            let r = new Set(["line", "blockQuote"]),
                o = [];

            function s(e, t, n) {
                if (i.EditorUtils.areStylesDisabled(e)) return [];
                let [s, a] = t;
                if (1 !== a.length || !i.NodeUtils.isInTypes(s, r)) return o;
                let {
                    entries: u,
                    serializedChildren: d
                } = i.ElementUtils.markdown(s, n, !0), c = [];
                for (let t = 0; t < u.length; t++) {
                    let n = u[t];
                    if (n.attributes.length > 0 && n.text.length > 0) {
                        let r = u[t - 1],
                            o = u[t + 1],
                            s = (0, l.getPointFromPosition)(e, a, d, n.start),
                            f = (0, l.getPointFromPosition)(e, a, d, n.start + n.text.length),
                            p = {
                                anchor: s,
                                focus: f
                            },
                            m = i.EditorUtils.nodes(e, {
                                at: p,
                                mode: "lowest",
                                voids: !1
                            }),
                            h = {};
                        for (let e of n.attributes)
                            if (h[e] = !0, "syntaxBefore" === e && null != o)
                                for (let e of o.attributes) h["before_".concat(e)] = !0;
                            else if ("syntaxAfter" === e && null != r)
                            for (let e of r.attributes) h["after_".concat(e)] = !0;
                        for (let [t, n] of m) {
                            if (i.EditorUtils.isVoid(e, t)) continue;
                            let l = {
                                anchor: i.EditorUtils.start(e, n),
                                focus: i.EditorUtils.end(e, n)
                            };
                            i.PointUtils.isBefore(l.anchor, p.anchor) && (l.anchor = p.anchor), i.PointUtils.isAfter(l.focus, p.focus) && (l.focus = p.focus), c.push({
                                ...h,
                                ...l
                            })
                        }
                    }
                }
                return c
            }
        },
        664610: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var l = n("884691"),
                i = n("44170"),
                r = n("987295"),
                o = n("244201"),
                s = n("988721"),
                a = n("166004"),
                u = n("383018"),
                d = n("845579"),
                c = n("149022"),
                f = n("169694"),
                p = n("646220"),
                m = n("467123"),
                h = n("506038"),
                E = n("663190"),
                S = n("93640"),
                g = n("100576"),
                C = n("665613");
            n("473752");
            var T = n("541926"),
                v = n("926970"),
                y = n("755107"),
                x = n("518542"),
                I = n("269149"),
                N = n("566819");

            function _(e) {
                let t = l.useContext(o.default),
                    n = d.UseRichChatInput.useSetting(),
                    [_] = l.useState(() => {
                        let l = (0, r.createEditor)();
                        return l.children = (0, c.toRichValue)(""), l.selection = {
                                anchor: N.FIRST_TEXT_POINT,
                                focus: N.FIRST_TEXT_POINT
                            },
                            function(e) {
                                var t, n, l;
                                let {
                                    editor: r,
                                    chatInputType: o,
                                    channel: s,
                                    canUseCommands: a,
                                    canOnlyUseTextCommands: u,
                                    windowContext: d,
                                    previewMarkdown: c,
                                    forTests: N,
                                    onChangeStart: _,
                                    onChangeEnd: A,
                                    updateState: R
                                } = e, O = r, {
                                    onChange: M
                                } = O;
                                O.chatInputType = o, O.windowContext = d, O.previewMarkdown = c, O.composition = null, O.events = new i.EventEmitter, O.isMac = "MacIntel" === navigator.platform, O.onChange = () => {
                                    O.events.emit("onChange"), M()
                                }, O = (0, v.withReact)(O, !0 === N), O = (0, T.default)(O), O = (0, C.default)(O), (null === (t = o.commands) || void 0 === t ? void 0 : t.enabled) && (O = (0, f.default)(O, s, !0 === a, !0 === u)), O = (0, g.default)(O, s.guild_id, s.id), !(null === (n = o.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (O = (0, p.default)(O)), !(null === (l = o.markdown) || void 0 === l ? void 0 : l.disableCodeBlocks) && (O = (0, m.default)(O)), N && (O = (0, x.default)(O)), O = (0, S.default)(O), O = (0, h.default)(O), O = (0, y.default)(O), O = (0, I.default)(O, _, A), O = (0, E.default)(O, e => {
                                    let {
                                        newValue: t,
                                        newSelection: n
                                    } = e;
                                    return R(O, "undo", {
                                        value: t,
                                        selection: n
                                    })
                                })
                            }({
                                ...e,
                                editor: l,
                                windowContext: t,
                                previewMarkdown: n
                            }), l
                    });
                return l.useEffect(() => {
                    let e = () => _.onChange();
                    return u.default.addChangeListener(e), a.default.addChangeListener(e), s.default.addChangeListener(e), () => {
                        u.default.removeChangeListener(e), a.default.removeChangeListener(e), s.default.removeChangeListener(e)
                    }
                }, [_]), l.useEffect(() => {
                    _.previewMarkdown !== n && (_.previewMarkdown = n, _.onChange())
                }, [_, n]), _
            }
        },
        688893: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007"), n("781738");
            var l = n("884691"),
                i = n("371621"),
                r = n("798609"),
                o = n("383018"),
                s = n("640830"),
                a = n("83800"),
                u = n("939563"),
                d = n("385887"),
                c = n("467123"),
                f = n("100576"),
                p = n("566819");
            let m = (e, t, n) => ({
                getSlateEditor: () => e,
                submit(e) {
                    e.preventDefault(), n()
                },
                focus() {
                    d.EditorUtils.focus(e)
                },
                blur() {
                    i.ReactEditor.blur(e)
                },
                getCurrentWord() {
                    let t = e.selection;
                    if (null == t || !d.SelectionUtils.isValid(e, t) || d.RangeUtils.isExpanded(t) || (0, c.hasOpenPlainTextCodeBlock)(e)) return {
                        word: null,
                        isAtStart: !1
                    };
                    let [n, l] = d.EditorUtils.node(e, d.PathUtils.parent(t.anchor.path)), [i, r] = d.EditorUtils.node(e, t.anchor.path), o = t.anchor.offset;
                    if (!d.PathUtils.hasPrevious(r) && d.TextUtils.isText(i)) {
                        let e = i.text.substring(0, o);
                        if (d.NodeUtils.isType(n, "applicationCommand") && o < n.command.displayName.length + 2) return {
                            word: e,
                            isAtStart: !0
                        }
                    }
                    let s = "",
                        a = !1;
                    for (;;) {
                        if (--o < 0) {
                            if (!d.PathUtils.hasPrevious(r)) {
                                a = !0;
                                break
                            } [i, r] = d.EditorUtils.node(e, d.PathUtils.previous(r))
                        }
                        if (!d.TextUtils.isText(i)) break;
                        let t = i.text[o];
                        if (p.WHITESPACE_RE.test(t)) break;
                        s = t + s
                    }
                    return {
                        word: s,
                        isAtStart: a && d.PathUtils.isFirstEditorBlock(l)
                    }
                },
                getFirstText() {
                    var t, n;
                    return null !== (n = null === (t = d.EditorUtils.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : ""
                },
                getCurrentCommandOption() {
                    let t = s.getCurrentCommandOption(e);
                    return null == t ? null : t[0].optionName
                },
                getCurrentCommandOptionValue() {
                    var n;
                    let l = s.getCurrentCommandOption(e);
                    if (null == l) return [];
                    let i = o.default.getActiveCommand(t.id),
                        r = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find(e => e.name === l[0].optionName);
                    return null == r ? [] : s.optionToValues(e, r, l[0])
                },
                getCommandOptionValues() {
                    let n = o.default.getActiveCommand(t.id);
                    return null == n ? {} : s.getOptionValues(e, n)
                },
                insertText(n) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    a.HistoryUtils.withSingleEntry(e, () => {
                        let r = s.getCurrentCommandOption(e),
                            o = null != r && h(t, r[0]);
                        if (null != l && o && (u.SlateTransforms.removeInlineChildren(e, r), i = !1), E(e, n, l, i), null != l && o) {
                            let n = s.getCommandBlock(e);
                            if (r = d.ElementUtils.updateElement(e, r), null != n) {
                                let l = d.ElementUtils.markdown(n[0], t.id);
                                (0, f.convertRawToInlineVoids)(e, r, t.id, l) && (r = d.ElementUtils.updateElement(e, r))
                            }
                            s.validateOption(e, t.guild_id, t.id, d.ElementUtils.updateElement(e, r), !1), u.SlateTransforms.selectNextCommandOption(e)
                        }
                    })
                },
                insertAutocomplete(n) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    a.HistoryUtils.withSingleEntry(e, () => {
                        let r = s.getCurrentCommandOption(e),
                            o = null != r && h(t, r[0]);
                        if (o) u.SlateTransforms.removeInlineChildren(e, r), i = !1;
                        else {
                            let {
                                word: t
                            } = this.getCurrentWord();
                            null != t && t.length > 0 && u.SlateTransforms.delete(e, {
                                distance: t.length,
                                unit: "character",
                                reverse: !0
                            })
                        }
                        E(e, n, l, i), o && u.SlateTransforms.selectNextCommandOption(e)
                    })
                },
                insertEmoji(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    a.HistoryUtils.withSingleEntry(e, () => {
                        var l, i;
                        let r = t.animated ? "a" : "",
                            o = null !== (i = null !== (l = t.originalName) && void 0 !== l ? l : t.name) && void 0 !== i ? i : "",
                            s = ":".concat(t.name, ":"),
                            a = null != t.id ? "<".concat(r, ":").concat(o.replace(/:/g, ""), ":").concat(t.id, ">") : null;
                        E(e, s, a, n)
                    })
                }
            });

            function h(e, t) {
                var n;
                let l = o.default.getActiveCommand(e.id),
                    i = null == l ? void 0 : null === (n = l.options) || void 0 === n ? void 0 : n.find(e => e.name === t.optionName);
                return null != i && (i.type !== r.ApplicationCommandOptionType.STRING || (null == i ? void 0 : i.choices) != null || (null == i ? void 0 : i.autocomplete))
            }

            function E(e, t, n, l) {
                let i = d.EditorUtils.areStylesDisabled(e) || null == n ? t : n;
                a.HistoryUtils.withSingleEntry(e, () => {
                    u.SlateTransforms.insertText(e, l ? i + " " : i)
                })
            }

            function S(e, t, n, i) {
                l.useImperativeHandle(e, () => m(t, n, i), [t, n, i])
            }
        },
        684607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("884691"),
                i = n("383018"),
                r = n("939563"),
                o = n("467123"),
                s = n("93640"),
                a = n("49111");

            function u(e) {
                let {
                    editor: t,
                    channel: n,
                    disableEnterToSubmit: u,
                    onKeyDown: d,
                    onKeyUp: c,
                    onTab: f,
                    onEnter: p,
                    allowNewLines: m,
                    submit: h,
                    hideAutocomplete: E,
                    moveSelection: S
                } = e, g = l.useCallback(e => {
                    var l;
                    switch (e.which) {
                        case a.KeyboardKeys.ARROW_UP:
                            if (S(-1)) {
                                e.preventDefault();
                                return
                            }
                            break;
                        case a.KeyboardKeys.ARROW_DOWN:
                            if (S(1)) {
                                e.preventDefault();
                                return
                            }
                            break;
                        case a.KeyboardKeys.P:
                            if ((0, s.checkModifiers)(e, {
                                    ctrl: !0
                                }) && S(-1)) {
                                e.preventDefault();
                                return
                            }
                            break;
                        case a.KeyboardKeys.N:
                            if ((0, s.checkModifiers)(e, {
                                    ctrl: !0
                                }) && S(1)) {
                                e.preventDefault();
                                return
                            }
                            break;
                        case a.KeyboardKeys.ESCAPE:
                            null == E || E();
                            break;
                        case a.KeyboardKeys.TAB:
                            if ((0, s.checkModifiers)(e, {}) && (null == f ? void 0 : f())) {
                                e.preventDefault(), e.stopPropagation();
                                return
                            }
                            let c = i.default.getActiveCommand(n.id);
                            if (null != c) {
                                e.preventDefault(), e.stopPropagation(), e.shiftKey ? r.SlateTransforms.selectPreviousCommandOption(t) : r.SlateTransforms.selectNextCommandOption(t);
                                return
                            }
                            break;
                        case a.KeyboardKeys.ENTER:
                            if ((0, s.checkModifiers)(e, {}) && (null == p ? void 0 : p(e))) {
                                e.preventDefault(), e.stopPropagation();
                                return
                            }
                    }
                    if ((null === (l = t.onKeyDown) || void 0 === l ? void 0 : l.call(t, e)) === !0) {
                        e.preventDefault(), e.stopPropagation();
                        return
                    }
                    e.which === a.KeyboardKeys.ENTER && (!e.altKey && !e.shiftKey && (!u || e.ctrlKey) && !(0, o.hasOpenPlainTextCodeBlock)(t) || !m) && (e.preventDefault(), e.stopPropagation(), h()), null == d || d(e)
                }, [m, n.id, u, t, E, S, p, d, f, h]), C = l.useCallback(e => {
                    null == c || c(e)
                }, [c]);
                return {
                    handleKeyDown: g,
                    handleKeyUp: C
                }
            }
        },
        803322: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("884691"),
                i = n("385887");

            function r(e, t, n) {
                let r = l.useCallback(e => {
                        if (t) return !0;
                        if (!0 === e.defaultPrevented) return !1;
                        let l = n(e);
                        return l && (e.preventDefault(), e.stopPropagation()), l
                    }, [t, n]),
                    o = l.useCallback(t => {
                        let {
                            event: n
                        } = t, l = r(n);
                        !l && (n.preventDefault(), n.stopPropagation(), null != n.clipboardData && (e.insertData(n.clipboardData), i.EditorUtils.focus(e)))
                    }, [e, r]);
                return {
                    handlePaste: r,
                    handleGlobalPaste: o
                }
            }
        },
        127875: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("884691"),
                i = n("371621"),
                r = n("385887");

            function o(e, t, n) {
                l.useEffect(() => {
                    let l = i.ReactEditor.findDocumentOrShadowRoot(e),
                        o = l.defaultView;
                    if ((null == o ? void 0 : o.ResizeObserver) == null) return;
                    let s = r.EditorUtils.toDOMNode(e, e),
                        a = s.offsetHeight,
                        u = new o.ResizeObserver(() => {
                            let l = r.EditorUtils.toDOMNode(e, e).offsetHeight;
                            a !== l && (null != t.current && (t.current.style.height = "".concat(l, "px")), a = l, null == n || n(l))
                        });
                    return u.observe(s), () => u.disconnect()
                }, [t, e, n])
            }
        },
        169694: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                unsetCommand: function() {
                    return A
                }
            }), n("222007"), n("424973"), n("781738"), n("843762");
            var l = n("798609"),
                i = n("507217"),
                r = n("118200"),
                o = n("240249"),
                s = n("383018"),
                a = n("524768"),
                u = n("389153"),
                d = n("343952"),
                c = n("355263"),
                f = n("511104"),
                p = n("42203"),
                m = n("305961"),
                h = n("697218"),
                E = n("640830"),
                S = n("83800"),
                g = n("970153"),
                C = n("939563"),
                T = n("385887"),
                v = n("566819"),
                y = n("406291");
            let x = new Set(["applicationCommandOption"]),
                I = new Set([l.ApplicationCommandOptionType.ATTACHMENT]),
                N = new Set(["line", "applicationCommand"]);

            function _(e, t, n, d) {
                let {
                    insertData: p,
                    isInline: m,
                    isVoid: h,
                    onChange: _,
                    deleteBackward: P,
                    deleteForward: L,
                    deleteFragment: U
                } = e;
                e.insertData = n => {
                    if (null != t && T.EditorUtils.isEditorEmpty(e) && n.types.includes("application/x-discord-interaction-data")) {
                        let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                            {
                                commandKey: d,
                                interactionOptions: c
                            } = (0, u.extractInteractionDataProps)(e),
                            {
                                application: f,
                                command: p
                            } = o.getCachedCommand(t, d);
                        if (null != p) {
                            var l, s;
                            let e = null != f ? {
                                type: a.ApplicationCommandSectionType.APPLICATION,
                                id: f.id,
                                icon: f.icon,
                                name: null !== (s = null === (l = f.bot) || void 0 === l ? void 0 : l.username) && void 0 !== s ? s : f.name,
                                application: f
                            } : null;
                            return i.setActiveCommand({
                                channelId: t.id,
                                command: p,
                                section: e,
                                location: a.ApplicationCommandTriggerLocations.PASTE,
                                initialValues: (0, r.getInitialValuesFromInteractionOptions)(p, null != c ? c : [])
                            }), null
                        }
                    }
                    return p(n)
                }, e.isInline = e => !!x.has(e.type) || m(e), e.isVoid = e => !!("applicationCommandOption" === e.type && I.has(e.optionType)) || h(e), e.deleteBackward = t => {
                    k(e, () => P(t))
                }, e.deleteForward = t => {
                    k(e, () => L(t))
                }, e.deleteFragment = t => {
                    k(e, () => U(t))
                };
                let j = null,
                    D = null,
                    w = null,
                    B = null,
                    H = null;
                return e.onChange = () => {
                    if (null != t) {
                        var r;
                        let u = s.default.getState(t.id),
                            p = T.EditorUtils.getFirstText(e),
                            m = (0, c.getCommandQuery)(t, null !== (r = null == p ? void 0 : p.text) && void 0 !== r ? r : ""),
                            h = o.getChangeKeys(t, l.ApplicationCommandType.CHAT, m.text);
                        if (T.EditorUtils.richValue(e) !== j || !T.SelectionUtils.equals(e.selection, D) || u.activeCommand !== w || null == H || h.some((e, t) => H[t] !== e)) {
                            let r = S.HistoryUtils.withMergedEntry(e, () => {
                                var r;
                                return function(e) {
                                    let {
                                        editor: t,
                                        storeCommandState: n,
                                        channel: r,
                                        canUseCommands: s,
                                        canOnlyUseTextCommands: u,
                                        commandChanged: d,
                                        previousOptionValues: p
                                    } = e, {
                                        command: m,
                                        commandText: h
                                    } = M(t), S = n.activeCommand;
                                    if (!s || u && (null == S ? void 0 : S.inputType) !== a.ApplicationCommandInputType.BUILT_IN_TEXT && (null == S ? void 0 : S.inputType) !== a.ApplicationCommandInputType.BUILT_IN_INTEGRATION) return null != m && A(t, r.id, S, !0), null;
                                    if (null != m) {
                                        if (T.EditorUtils.isEditorEmpty(t) || null == S) return A(t, r.id, S, !1), null;
                                        let e = "".concat(y.COMMAND_SENTINEL).concat(m.displayName);
                                        if (null == h || !h.startsWith(e) || 0 === E.getOptionNames(t).length && (h.length < e.length + 1 || " " !== h[e.length])) return A(t, r.id, S, !0), null
                                    } else {
                                        if (null != S && d) {
                                            let e = function(e, t, n) {
                                                    var l, i, r, o, s;
                                                    let a;
                                                    let {
                                                        initialValues: u,
                                                        activeCommand: d
                                                    } = n;
                                                    if (null == d) return null;
                                                    let c = (null !== (r = null === (l = d.options) || void 0 === l ? void 0 : l.length) && void 0 !== r ? r : 0) > 0 ? E.findTextOptions(e, d) : null,
                                                        p = (0, g.toTextValue)(T.EditorUtils.richValue(e), {
                                                            mode: "raw",
                                                            range: {
                                                                anchor: T.EditorUtils.start(e, []),
                                                                focus: null !== (o = null == c ? void 0 : null === (i = c[0]) || void 0 === i ? void 0 : i.keyRange.anchor) && void 0 !== o ? o : T.EditorUtils.end(e, [])
                                                            }
                                                        }),
                                                        m = "",
                                                        h = p.toLocaleLowerCase(),
                                                        S = f.PREFIX_COMMAND_REGEX.exec(h);
                                                    null != S && (h = y.COMMAND_SENTINEL + h.substring(S.length));
                                                    let x = "".concat(y.COMMAND_SENTINEL).concat(d.displayName).toLocaleLowerCase(),
                                                        N = "".concat(y.COMMAND_SENTINEL).concat(d.name).toLocaleLowerCase();
                                                    h.startsWith(x) && h.length > x.length ? m = p.substring(x.length).trim() : h.startsWith(N) && h.length > N.length && (m = p.substring(N.length).trim());
                                                    let _ = [],
                                                        A = null,
                                                        O = null;
                                                    if (null != d.options) {
                                                        let e = new Set;
                                                        if (null != c)
                                                            for (let l of c) {
                                                                e.add(l.name);
                                                                let i = null !== (s = b(n, t, l.name)) && void 0 !== s ? s : l.text,
                                                                    r = {
                                                                        type: "applicationCommandOption",
                                                                        optionName: l.name,
                                                                        optionDisplayName: l.displayName,
                                                                        optionType: l.type,
                                                                        children: [{
                                                                            text: i
                                                                        }]
                                                                    };
                                                                _.push(r), 0 === l.text.length && null == A && (A = r)
                                                            }
                                                        for (let l of d.options)
                                                            if (!e.has(l.name) && (l.required || null != u[l.name])) {
                                                                let e, i;
                                                                m.length > 0 && !I.has(l.type) ? (e = m, m = "") : e = null != (i = b(n, t, l.name)) ? i : "";
                                                                let r = {
                                                                    type: "applicationCommandOption",
                                                                    optionName: l.name,
                                                                    optionDisplayName: l.displayName,
                                                                    optionType: l.type,
                                                                    children: [{
                                                                        text: e
                                                                    }]
                                                                };
                                                                _.push(r), 0 === e.length && null == A && (A = r), null == i && (O = r)
                                                            }
                                                    }
                                                    a = m.length > 0 ? "".concat(y.COMMAND_SENTINEL).concat(d.displayName, " ").concat(m.replace(/\r|\n/g, " ")) : 0 === _.length ? "".concat(y.COMMAND_SENTINEL).concat(d.displayName, " ") : "".concat(y.COMMAND_SENTINEL).concat(d.displayName), _.unshift({
                                                        text: a
                                                    });
                                                    let M = {
                                                        type: "applicationCommand",
                                                        children: _,
                                                        command: {
                                                            id: d.id,
                                                            name: d.name,
                                                            displayName: d.displayName
                                                        }
                                                    };
                                                    T.EditorUtils.withoutNormalizing(e, () => {
                                                        for (let [, t] of(C.SlateTransforms.insertNodes(e, [M], {
                                                                at: v.FIRST_BLOCK_PATH
                                                            }), T.EditorUtils.blocks(e).reverse())) T.PathUtils.isAfter(t, v.FIRST_BLOCK_PATH) && C.SlateTransforms.removeNodes(e, {
                                                            at: t,
                                                            voids: !0
                                                        })
                                                    });
                                                    let k = null;
                                                    return null != A ? (C.SlateTransforms.selectCommandOption(e, A.optionName), k = A.optionName) : null != O ? (C.SlateTransforms.selectCommandOption(e, O.optionName, !1), k = O.optionName) : C.SlateTransforms.resetSelectionToEnd(e), null == O && R(e, d), k
                                                }(t, r, n),
                                                l = E.getOptionValues(t, S);
                                            return O({
                                                guildId: r.guild_id,
                                                channelId: r.id,
                                                command: S,
                                                activeOption: e,
                                                currentOptionValues: l,
                                                previousOptionValues: null,
                                                validateAll: !0,
                                                allowEmpty: !0
                                            }), {
                                                commandId: S.id,
                                                optionValues: l
                                            }
                                        }
                                        if (null != S && !d) return i.setActiveCommand({
                                            channelId: r.id,
                                            command: null,
                                            section: null
                                        }), null;
                                        let e = T.EditorUtils.richValue(t),
                                            s = e[0],
                                            u = s.children[0];
                                        if (N.has(s.type) && T.TextUtils.isText(u)) {
                                            let e = function(e, t) {
                                                if (!e.startsWith("/")) return null;
                                                let n = (0, c.getCommandQuery)(t, e.substring(1));
                                                if (!n.hasSpaceTerminator) return null;
                                                let {
                                                    commands: i,
                                                    sections: r
                                                } = o.getCachedResults(t, l.ApplicationCommandType.CHAT, n.text);
                                                if (0 === i.length) return null;
                                                let s = n.text.trim(),
                                                    u = s + " ",
                                                    d = i.filter(e => e.inputType !== a.ApplicationCommandInputType.PLACEHOLDER && (e.displayName === s || e.displayName.startsWith(u)));
                                                if (1 === d.length && d[0].displayName === s) {
                                                    let e = d[0],
                                                        t = r.find(t => {
                                                            var n;
                                                            return (null === (n = t.application) || void 0 === n ? void 0 : n.id) === e.applicationId
                                                        });
                                                    return {
                                                        command: e,
                                                        section: t
                                                    }
                                                }
                                                return null
                                            }(u.text, r);
                                            if (null != e) return i.setActiveCommand({
                                                channelId: r.id,
                                                command: e.command,
                                                section: e.section
                                            }), null
                                        }
                                    }
                                    if (null != S && null != m) {
                                        var x;
                                        ! function(e, t) {
                                            if (null == t.options || 0 === t.options.length) return !1;
                                            let n = E.findTextOptions(e, t);
                                            return 0 !== n.length && (T.EditorUtils.withoutNormalizing(e, () => {
                                                for (let t = n.length - 1; t >= 0; t--) {
                                                    let l = n[t];
                                                    C.SlateTransforms.textToInline(e, {
                                                        type: "applicationCommandOption",
                                                        optionName: l.name,
                                                        optionDisplayName: l.displayName,
                                                        optionType: l.type,
                                                        children: [{
                                                            text: l.text
                                                        }]
                                                    }, {
                                                        anchor: l.keyRange.anchor,
                                                        focus: l.valueRange.focus
                                                    })
                                                }
                                                let t = T.EditorUtils.getFirstText(e);
                                                if (null == t) return !1;
                                                let l = t.text.trim();
                                                t.text !== l && C.SlateTransforms.textToText(e, l, {
                                                    anchor: {
                                                        path: v.FIRST_TEXT_PATH,
                                                        offset: 0
                                                    },
                                                    focus: {
                                                        path: v.FIRST_TEXT_PATH,
                                                        offset: t.text.length
                                                    }
                                                })
                                            }), !0)
                                        }(t, S) && R(t, S);
                                        let e = E.getOptionValues(t, S),
                                            n = T.EditorUtils.above(t, {
                                                match: e => T.EditorUtils.isInline(t, e) && "applicationCommandOption" === e.type,
                                                mode: "lowest"
                                            }),
                                            l = null !== (x = null == n ? void 0 : n[0].optionName) && void 0 !== x ? x : null;
                                        return O({
                                            guildId: r.guild_id,
                                            channelId: r.id,
                                            command: S,
                                            activeOption: l,
                                            currentOptionValues: e,
                                            previousOptionValues: p,
                                            validateAll: !1,
                                            allowEmpty: !1
                                        }), {
                                            commandId: m.id,
                                            optionValues: e
                                        }
                                    }
                                    return null
                                }({
                                    editor: e,
                                    storeCommandState: u,
                                    channel: t,
                                    canUseCommands: n,
                                    canOnlyUseTextCommands: d,
                                    commandChanged: (null === (r = u.activeCommand) || void 0 === r ? void 0 : r.id) !== (null == w ? void 0 : w.id),
                                    previousOptionValues: B
                                })
                            });
                            if (null != r) {
                                let t = S.HistoryUtils.currentEntry(e);
                                null != t && (t.commandId = r.commandId), B = r.optionValues
                            } else B = null;
                            j = T.EditorUtils.richValue(e), D = e.selection, w = u.activeCommand, H = h
                        }
                    }
                    _()
                }, e
            }

            function A(e, t, n, l) {
                let [r] = T.EditorUtils.blocks(e)[0], o = l ? (0, g.serializeDescendant)(r, {
                    mode: "plain"
                }).trimEnd() : "", s = o.split("\n").map(e => ({
                    type: "line",
                    children: [{
                        text: e
                    }]
                })), a = [s.length - 1];
                for (let [, t] of(C.SlateTransforms.insertNodes(e, s, {
                        at: v.FIRST_BLOCK_PATH
                    }), T.EditorUtils.blocks(e).reverse())) T.PathUtils.isAfter(t, a) && C.SlateTransforms.removeNodes(e, {
                    at: t,
                    voids: !0
                });
                null != n && i.setActiveCommand({
                    channelId: t,
                    command: null,
                    section: null
                })
            }

            function R(e, t) {
                if (null == t.options || 1 !== t.options.length || !0 === t.options[0].required || I.has(t.options[0].type) || E.getOptionNames(e).length > 0) return !1;
                let n = E.getCommandBlock(e);
                if (null == n) return !1;
                let l = T.EditorUtils.getFirstText(e);
                if (null == l) return !1;
                let i = t.options[0],
                    r = {
                        path: v.FIRST_TEXT_PATH,
                        offset: t.displayName.length + 2
                    },
                    o = {
                        path: v.FIRST_TEXT_PATH,
                        offset: l.text.length
                    };
                return !(!l.text.startsWith("".concat(y.COMMAND_SENTINEL).concat(t.displayName, " ").toLocaleLowerCase()) || T.PointUtils.equals(r, o)) && (C.SlateTransforms.textToInline(e, {
                    type: "applicationCommandOption",
                    optionName: i.name,
                    optionDisplayName: i.displayName,
                    optionType: i.type,
                    children: [{
                        text: l.text.substring(t.displayName.length + 2)
                    }]
                }, {
                    anchor: r,
                    focus: o
                }), !0)
            }

            function O(e) {
                let {
                    guildId: t,
                    channelId: n,
                    command: l,
                    activeOption: r,
                    currentOptionValues: o,
                    previousOptionValues: a,
                    validateAll: u,
                    allowEmpty: c
                } = e;
                if (null == l.options) return !1;
                let f = u ? null : s.default.getActiveOptionName(n),
                    p = {},
                    m = s.default.getOptionStates(n),
                    h = !1;
                for (let e of l.options) {
                    var E, S, g;
                    let l = m[e.name],
                        i = u || e.name === f && f !== r || (null == l ? void 0 : null === (E = l.lastValidationResult) || void 0 === E ? void 0 : E.success) === !1 && (null == o ? void 0 : o[e.name]) !== (null == a ? void 0 : a[e.name]),
                        s = {
                            hasValue: null != o && e.name in o,
                            isActive: e.name === r,
                            lastValidationResult: i ? (0, d.validateOptionContent)({
                                option: e,
                                content: null !== (g = null == o ? void 0 : o[e.name]) && void 0 !== g ? g : null,
                                guildId: t,
                                channelId: n,
                                allowEmptyValues: c
                            }) : null == l ? void 0 : l.lastValidationResult
                        };
                    (null == l || l.hasValue !== s.hasValue || l.isActive !== s.isActive || i && (null === (S = l.lastValidationResult) || void 0 === S ? void 0 : S.success) === !1) && (p[e.name] = s, h = !0)
                }
                h && i.updateOptionStates(n, p)
            }

            function M(e) {
                let t = E.getCommandBlock(e);
                if (null == t) return {
                    command: null,
                    commandText: null
                };
                let [n] = t, l = n.children[0];
                return T.TextUtils.isText(l) ? {
                    command: n.command,
                    commandText: l.text
                } : {
                    command: n.command,
                    commandText: null
                }
            }

            function k(e, t) {
                let n = E.getOptionNames(e)[0];
                t();
                let l = T.RangeUtils.toPoint(e.selection);
                if (null == l || n === E.getOptionNames(e)[0]) return;
                let {
                    command: i,
                    commandText: r
                } = M(e);
                !(null == i || null == r || r.endsWith(" ")) && T.PointUtils.equals(l, {
                    path: v.FIRST_TEXT_PATH,
                    offset: i.displayName.length + 1
                }) && C.SlateTransforms.insertText(e, " ")
            }

            function b(e, t, n) {
                var i, r, o, s, a;
                let u = null === (r = e.activeCommand) || void 0 === r ? void 0 : null === (i = r.options) || void 0 === i ? void 0 : i.find(e => e.name === n),
                    d = e.initialValues[n];
                if (null == u || null == d) return null;
                if (null != u.choices) return null === (a = u.choices.find(e => e.value === d.value)) || void 0 === a ? void 0 : a.displayName;
                let c = null === (o = d.value) || void 0 === o ? void 0 : o.toString();
                return u.type === l.ApplicationCommandOptionType.CHANNEL || u.type === l.ApplicationCommandOptionType.MENTIONABLE && null != p.default.getChannel(c) ? "<#".concat(c, ">	") : u.type === l.ApplicationCommandOptionType.USER || u.type === l.ApplicationCommandOptionType.MENTIONABLE && null != h.default.getUser(c) ? "<@".concat(c, ">") : u.type === l.ApplicationCommandOptionType.ROLE || u.type === l.ApplicationCommandOptionType.MENTIONABLE && (null === (s = m.default.getGuild(t.guild_id)) || void 0 === s ? void 0 : s.getRole(null != c ? c : "")) != null ? "<@&".concat(c, ">") : c
            }
        },
        646220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var l = n("83800"),
                i = n("939563"),
                r = n("385887"),
                o = n("467123");
            let s = new Set(["line", "blockQuote"]);

            function a(e) {
                let {
                    deleteBackward: t,
                    deleteFragment: n,
                    insertBreak: a,
                    onChange: u
                } = e;
                e.deleteBackward = n => {
                    let l = r.EditorUtils.getCurrentBlock(e);
                    if ((null == l ? void 0 : l[0].type) === "blockQuote") {
                        let t = r.RangeUtils.toPoint(e.selection);
                        if (null != t && r.PathUtils.isFirstChild(l[1], t.path) && 0 === t.offset) {
                            i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: l[1]
                            });
                            return
                        }
                    }
                    t(n)
                }, e.deleteFragment = t => {
                    if (null != e.selection) {
                        let [o, s] = r.RangeUtils.edges(e.selection), a = [o.path[0]], u = r.EditorUtils.node(e, a), d = [s.path[0]], c = r.PathUtils.equals(a, d) ? null : r.EditorUtils.node(e, d);
                        l.HistoryUtils.withSingleEntry(e, () => {
                            (null == u ? void 0 : u[0].type) === "blockQuote" && r.PointUtils.isAtStart(o, u) && i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: a
                            }), (null == c ? void 0 : c[0].type) === "blockQuote" && r.PointUtils.isAtEnd(s, c) && i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: d
                            }), n(t)
                        });
                        return
                    }
                    n(t)
                }, e.insertBreak = () => {
                    let t = r.EditorUtils.getCurrentBlock(e);
                    if ((null == t ? void 0 : t[0].type) === "blockQuote") {
                        let n = r.RangeUtils.toPoint(e.selection);
                        if (null == n) return;
                        ! function(e, t, n) {
                            if (!r.EditorUtils.isEmpty(e, t[0])) return !1;
                            let l = r.EditorUtils.previous(e, {
                                at: t[1]
                            });
                            return !!(null != l && r.NodeUtils.isType(l[0], "blockQuote") && r.EditorUtils.isEmpty(e, l[0]) && r.PointUtils.isAtStart(n, t)) && (i.SlateTransforms.setNodes(e, {
                                type: "line"
                            }, {
                                at: t[1]
                            }), i.SlateTransforms.removeNodes(e, {
                                at: l[1]
                            }), !0)
                        }(e, t, n) && i.SlateTransforms.splitNodes(e, {
                            at: n,
                            always: !0
                        });
                        return
                    }
                    a()
                };
                let d = null,
                    c = !0;
                return e.onChange = () => {
                    let t = r.EditorUtils.richValue(e);
                    (t !== d || e.previewMarkdown !== c) && (l.HistoryUtils.withMergedEntry(e, () => {
                        r.EditorUtils.withoutNormalizing(e, () => (function(e) {
                            let t = !1;
                            for (let a of r.EditorUtils.blocks(e)) {
                                let [u, d] = a;
                                if (!s.has(u.type)) continue;
                                let c = {
                                    path: r.PathUtils.child(d, 0),
                                    offset: 0
                                };
                                if ((0, o.isPointInCodeBlock)(e, c)) {
                                    "blockQuote" === u.type && (i.SlateTransforms.setNodes(e, {
                                        type: "line"
                                    }, {
                                        at: d
                                    }), i.SlateTransforms.insertText(e, "> ", {
                                        at: c
                                    }));
                                    continue
                                }
                                if ("blockQuote" === u.type || r.EditorUtils.areStylesDisabled(e)) continue;
                                let f = u.children[0];
                                if (!r.TextUtils.isText(f)) continue;
                                let p = f.text.match(/^\s*>>> /),
                                    m = f.text.match(/^\s*> /);
                                if ((null != m || null != p || t) && (i.SlateTransforms.setNodes(e, {
                                        type: "blockQuote"
                                    }, {
                                        at: d
                                    }), !t)) {
                                    var n, l;
                                    let o = null !== (l = null !== (n = null == m ? void 0 : m[0].length) && void 0 !== n ? n : null == p ? void 0 : p[0].length) && void 0 !== l ? l : 0,
                                        s = r.PathUtils.child(d, 0);
                                    i.SlateTransforms.delete(e, {
                                        at: {
                                            anchor: {
                                                path: s,
                                                offset: 0
                                            },
                                            focus: {
                                                path: s,
                                                offset: o
                                            }
                                        }
                                    }), t = null != p
                                }
                            }
                        })(e))
                    }), d = t, c = e.previewMarkdown), u()
                }, e
            }
        },
        467123: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                isPointInCodeBlock: function() {
                    return T
                },
                hasOpenPlainTextCodeBlock: function() {
                    return v
                }
            }), n("222007"), n("70102"), n("424973"), n("781738");
            var l = n("436443"),
                i = n("693566"),
                r = n.n(i),
                o = n("86256"),
                s = n("83800"),
                a = n("970153"),
                u = n("939563"),
                d = n("385887"),
                c = n("566819");
            let f = new Set(["line"]),
                p = l.default.listLanguages(),
                m = {};
            for (let e of p) {
                e = e.toLowerCase();
                let t = l.default.getLanguage(e);
                if (null == t) continue;
                let n = t.aliases;
                if (m[e] = e, null != n)
                    for (let t of n) m[t.toLowerCase()] = e
            }
            let h = /^[a-z0-9_+\-.#]+$/,
                E = /^[a-z0-9_+\-.#]+$/i;
            for (let e in m)
                if (null == e.match(h)) throw Error("Language name does not match regex: ".concat(e));

            function S(e) {
                let {
                    onChange: t
                } = e, n = null;
                return e.onChange = () => {
                    d.EditorUtils.richValue(e) !== n && (s.HistoryUtils.withMergedEntry(e, () => {
                        d.EditorUtils.withoutNormalizing(e, () => (function(e) {
                            let t = function(e) {
                                let t = [],
                                    n = null;
                                for (let l of d.EditorUtils.blocks(e)) {
                                    let i = null != n && (n.isInCodeBlock || n.opensCodeBlock),
                                        r = null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                                        o = null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null;
                                    n = function(e, t, n, l, i) {
                                        var r;
                                        let o = function(e) {
                                                let t;
                                                let [n, l] = e;
                                                if (!f.has(n.type)) return [];
                                                let i = [],
                                                    r = /\\|```/g;
                                                for (let e = 0; e < n.children.length; e++) {
                                                    let o = n.children[e];
                                                    if (d.TextUtils.isText(o))
                                                        for (r.lastIndex = 0; null != (t = r.exec(o.text));) {
                                                            if ("\\" === t[0]) {
                                                                r.lastIndex += 1;
                                                                continue
                                                            }
                                                            i.push({
                                                                path: d.PathUtils.child(l, e),
                                                                offset: t.index
                                                            })
                                                        }
                                                }
                                                return i
                                            }(t),
                                            s = o[0],
                                            a = o[o.length - 1],
                                            u = null;
                                        if (null != a) {
                                            let [t] = d.EditorUtils.node(e, a.path);
                                            u = t.text.substring(a.offset + 3)
                                        }
                                        let c = n && null != s,
                                            p = n && 0 === o.length,
                                            h = l && 0 === o.length,
                                            S = c ? o.slice(1) : o,
                                            g = S.length % 2 == 1,
                                            C = g && (null == u || "" === u || null != u.match(E)),
                                            T = C && null != u && null !== (r = m[u.toLowerCase()]) && void 0 !== r ? r : null;
                                        return {
                                            blockEntry: t,
                                            wasInCodeBlock: n,
                                            isInCodeBlock: p,
                                            isStyledCodeBlockLine: h,
                                            lang: g || c ? T : i,
                                            hljsTypes: null,
                                            closesCodeBlock: c,
                                            opensCodeBlock: g,
                                            opensCodeBlockOnOwnLine: C
                                        }
                                    }(e, l, i, r, o), t.push(n)
                                }
                                return function(e) {
                                    let t = [],
                                        n = !1;
                                    for (let i of e) {
                                        let r = i === e[e.length - 1];
                                        if ((i.closesCodeBlock || r) && (n && r && !i.closesCodeBlock && t.push(i), n = !1, t.length > 0)) {
                                            let e = t.map(e => (0, a.serializeDescendant)(e.blockEntry[0])).join("\n"),
                                                n = t[0],
                                                i = n.lang;
                                            if (null != i && null != l.default.getLanguage(i)) {
                                                let n = function(e, t) {
                                                    let n = "".concat(e, "-").concat(t),
                                                        l = C.get(n);
                                                    if (null != l) return l;
                                                    let i = o.default.highlight(t, e, !1);
                                                    if (null == i || i.illegal) return null;
                                                    let r = i.value.split("\n");
                                                    return C.set(n, r), r
                                                }(e, i);
                                                if (null != n && n.length === t.length) {
                                                    let e = [];
                                                    for (let l = 0; l < t.length; l++) {
                                                        let i;
                                                        let r = n[l].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#x27;/g, "'"),
                                                            o = [],
                                                            s = 0,
                                                            a = 0;
                                                        for (; null != (i = g.exec(r));) {
                                                            let t = i.index + i[0].length,
                                                                n = i.index - a;
                                                            i.index > a && (e.length > 0 && o.push({
                                                                types: [...e],
                                                                start: s,
                                                                end: s + n
                                                            }), s += n), "</span>" === i[0] ? e.pop() : e.push(i[1]), a = t
                                                        }
                                                        if (e.length > 0) {
                                                            let t = r.length - a;
                                                            o.push({
                                                                types: [...e],
                                                                start: s,
                                                                end: s + t
                                                            })
                                                        }
                                                        t[l].hljsTypes = o
                                                    }
                                                } else
                                                    for (let e = 0; e < t.length; e++) t[e].hljsTypes = null
                                            }
                                            t = []
                                        }
                                        n && t.push(i), i.opensCodeBlock && (n = !0)
                                    }
                                }(t), t
                            }(e);
                            (function(e, t) {
                                for (let n of t) {
                                    let [t, l] = n.blockEntry, i = function(e) {
                                        return e.isStyledCodeBlockLine || e.wasInCodeBlock ? {
                                            lang: e.lang,
                                            wasInCodeBlock: e.wasInCodeBlock,
                                            isInCodeBlock: e.isInCodeBlock,
                                            isStyledCodeBlockLine: e.isStyledCodeBlockLine,
                                            hljsTypes: e.hljsTypes
                                        } : null
                                    }(n);
                                    (null == t ? void 0 : t.codeBlockState) != i && u.SlateTransforms.setNodes(e, {
                                        codeBlockState: i
                                    }, {
                                        at: l
                                    })
                                }
                            })(e, t)
                        })(e))
                    }), n = d.EditorUtils.richValue(e)), t()
                }, e
            }
            let g = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
                C = new r({
                    max: 1 / 0,
                    maxAge: 6e4,
                    updateAgeOnGet: !0
                });

            function T(e, t) {
                let n = 0;
                for (let i of d.EditorUtils.nodes(e, {
                        at: {
                            anchor: {
                                path: c.FIRST_TEXT_PATH,
                                offset: 0
                            },
                            focus: t
                        },
                        mode: "lowest",
                        match: e => d.TextUtils.isText(e)
                    })) {
                    var l;
                    let e = i[0].text;
                    d.PathUtils.equals(i[1], t.path) && (e = e.substring(0, t.offset));
                    let r = e.match(/```/g);
                    n += null !== (l = null == r ? void 0 : r.length) && void 0 !== l ? l : 0
                }
                return n % 2 != 0
            }

            function v(e) {
                if (null == e.selection) return !1;
                let t = d.RangeUtils.start(e.selection);
                return T(e, t)
            }
        },
        506038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("83800"),
                i = n("939563"),
                r = n("385887");
            let o = ["applicationCommand"];

            function s(e) {
                let {
                    insertBreak: t,
                    insertText: n
                } = e;
                return e.insertBreak = () => {
                    a(e) && t()
                }, e.insertSoftBreak = () => {
                    e.insertBreak()
                }, e.insertText = t => {
                    if (0 > t.indexOf("\r") && 0 > t.indexOf("\n")) {
                        n(t);
                        return
                    }
                    let r = t.split(/\r\n|\r|\n/);
                    if (!a(e)) {
                        n(r.join(" "));
                        return
                    }
                    l.HistoryUtils.withSingleEntry(e, () => {
                        let t = !1;
                        for (let l of r) t && i.SlateTransforms.splitNodes(e, {
                            always: !0
                        }), n(l), t = !0
                    })
                }, e
            }

            function a(e) {
                let t = r.EditorUtils.getCurrentBlock(e);
                return null != t && !o.includes(t[0].type)
            }
        },
        663190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("83800"),
                i = n("385887");

            function r(e, t) {
                let {
                    apply: n,
                    deleteBackward: r,
                    deleteForward: s,
                    deleteFragment: a,
                    insertData: u,
                    insertText: d,
                    onChange: c
                } = e;

                function f(n) {
                    let i = l.HistoryUtils.currentEntry(e);
                    if (null != i && (i.mergeable = !1), n >= e.history.stack.length) return;
                    e.history.index = n;
                    let r = l.HistoryUtils.currentEntry(e);
                    t({
                        newValue: r.value,
                        newSelection: r.selection
                    })
                }
                e.history = {
                    index: 0,
                    stack: []
                }, e.onChange = () => {
                    let {
                        history: t
                    } = e;
                    0 === t.stack.length && (t.stack = [o(e)], t.index = 0), null != e.selection && (l.HistoryUtils.currentEntry(e).selection = e.selection), m = null, c()
                }, e.undo = () => {
                    e.history.index > 0 && f(e.history.index - 1)
                }, e.redo = () => {
                    e.history.index < e.history.stack.length - 1 && f(e.history.index + 1)
                };
                let p = null,
                    m = null,
                    h = null;
                return e.apply = t => {
                    let {
                        history: r
                    } = e;
                    n(t);
                    let s = i.EditorUtils.richValue(e);
                    s !== h && (0 === r.stack.length && (r.stack = [o(e)], r.index = 0), l.HistoryUtils.isSaving(e) && (function(e, t, n) {
                        let i;
                        let {
                            selection: r
                        } = e, o = l.HistoryUtils.currentEntry(e), s = !0, a = !0;
                        if ("insert_text" === t.type && 1 === t.text.length ? (i = "insert", a = !(("" === t.text || t.text.endsWith(" ")) && (null == n ? void 0 : n.type) === "insert_text" && !("" === n.text && n.text.endsWith(" ")))) : "split_node" === t.type ? i = "insert" : "remove_text" === t.type && 1 === t.text.length ? i = "delete" : (i = "other", s = !1, a = !1), "set_selection" === t.type && null != o) {
                            o.selection = r;
                            return
                        }
                        s && function(e, t) {
                            return !((null == e ? void 0 : e.type) !== t || Date.now() - e.createdAt >= 4e3) && !0
                        }(o, i) ? l.HistoryUtils.insertOrMergeEntry(e, i, a) : l.HistoryUtils.insertEntry(e, i, a)
                    }(e, t, p), p = t), m = t, h = s)
                }, e.deleteBackward = t => {
                    l.HistoryUtils.withSingleEntry(e, () => r(t))
                }, e.deleteForward = t => {
                    l.HistoryUtils.withSingleEntry(e, () => s(t))
                }, e.deleteFragment = t => {
                    l.HistoryUtils.withSingleEntry(e, () => a(t))
                }, e.insertText = t => {
                    1 === t.length && (null == m ? void 0 : m.type) === "remove_text" ? l.HistoryUtils.withMergedEntry(e, () => d(t)) : null != e.selection && i.RangeUtils.isExpanded(e.selection) ? l.HistoryUtils.withSingleEntry(e, () => d(t)) : d(t)
                }, e.insertData = t => {
                    (null == m ? void 0 : m.type) === "remove_text" ? l.HistoryUtils.withMergedEntry(e, () => u(t)): l.HistoryUtils.withSingleEntry(e, () => u(t))
                }, e
            }

            function o(e) {
                return {
                    type: "other",
                    mergeable: !1,
                    createdAt: Date.now(),
                    value: i.EditorUtils.richValue(e),
                    selection: e.selection
                }
            }
        },
        93640: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                checkModifiers: function() {
                    return f
                },
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("717837"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                s = n("83800"),
                a = n("916429"),
                u = n("939563"),
                d = n("385887"),
                c = n("49111");

            function f(e, t) {
                let {
                    cmd: n = !1,
                    ctrl: l = !1,
                    alt: i = !1,
                    shift: r = !1
                } = t;
                return (null == n || e.metaKey === n) && (null == l || e.ctrlKey === l) && (null == i || e.altKey === i) && (null == r || e.shiftKey === r)
            }

            function p(e) {
                return e.onKeyDown = t => {
                    var n, l, r, p;
                    let m = e.isMac;
                    switch (t.which) {
                        case c.KeyboardKeys.B:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "bold"), !0;
                            break;
                        case c.KeyboardKeys.I:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "italics"), !0;
                            break;
                        case c.KeyboardKeys.U:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m
                                })) return (0, a.toggleMarkdownStyle)(e, "underline"), !0;
                            break;
                        case c.KeyboardKeys.S:
                            if (!d.EditorUtils.isEditorEmpty(e) && f(t, {
                                    ctrl: !m,
                                    cmd: m,
                                    shift: !0
                                })) return (0, a.toggleMarkdownStyle)(e, "strikethrough"), !0;
                            break;
                        case c.KeyboardKeys.TAB:
                            if (null != e.selection && f(t, {
                                    shift: null
                                })) {
                                let [l, i] = d.RangeUtils.edges(e.selection), r = d.EditorUtils.blocks(e).slice(l.path[0], i.path[0] + 1), o = !0;
                                for (let [e] of r)
                                    if ("line" !== e.type || !(null === (n = e.codeBlockState) || void 0 === n ? void 0 : n.isInCodeBlock)) {
                                        o = !1;
                                        break
                                    } if (o) {
                                    if (!t.shiftKey && d.RangeUtils.isCollapsed(e.selection)) return u.SlateTransforms.insertText(e, "  "), !0;
                                    let n = !t.shiftKey;
                                    return s.HistoryUtils.withSingleEntry(e, () => {
                                        var t, l, i, o;
                                        let s = null !== (i = null === (t = e.selection) || void 0 === t ? void 0 : t.anchor) && void 0 !== i ? i : d.EditorUtils.start(e, []),
                                            a = null !== (o = null === (l = e.selection) || void 0 === l ? void 0 : l.focus) && void 0 !== o ? o : d.EditorUtils.end(e, []);
                                        for (let [t, l] of r) {
                                            let i = t.children[0];
                                            if (!d.TextUtils.isText(t.children[0])) continue;
                                            let r = d.PathUtils.child(l, 0),
                                                o = {
                                                    path: r,
                                                    offset: 0
                                                };
                                            if (n) u.SlateTransforms.insertText(e, "  ", {
                                                at: o
                                            }), d.PathUtils.equals(s.path, r) && 0 !== s.offset && (s = {
                                                path: r,
                                                offset: s.offset + 2
                                            }), d.PathUtils.equals(a.path, r) && 0 !== a.offset && (a = {
                                                path: r,
                                                offset: a.offset + 2
                                            });
                                            else if (i.text.startsWith("  ")) {
                                                let t = {
                                                    path: d.PathUtils.child(l, 0),
                                                    offset: 2
                                                };
                                                u.SlateTransforms.delete(e, {
                                                    at: {
                                                        anchor: o,
                                                        focus: t
                                                    }
                                                }), d.PathUtils.equals(s.path, r) && (s = {
                                                    path: r,
                                                    offset: Math.max(0, s.offset - 2)
                                                }), d.PathUtils.equals(a.path, r) && (a = {
                                                    path: r,
                                                    offset: Math.max(0, a.offset - 2)
                                                })
                                            }
                                        }
                                        u.SlateTransforms.select(e, {
                                            anchor: s,
                                            focus: a
                                        })
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.ARROW_LEFT:
                        case c.KeyboardKeys.ARROW_RIGHT: {
                            let n, o;
                            if (f(t, {
                                    shift: null
                                })) n = "character";
                            else if (f(t, {
                                    ctrl: !m,
                                    alt: m,
                                    shift: null
                                })) n = "word";
                            else if (m && f(t, {
                                    cmd: !0,
                                    shift: null
                                })) return !1;
                            else return !1;
                            t.shiftKey && (o = "focus");
                            let s = e.children[null !== (p = null === (r = e.selection) || void 0 === r ? void 0 : null === (l = r.focus) || void 0 === l ? void 0 : l.path[0]) && void 0 !== p ? p : 0],
                                a = "rtl" === i(d.NodeUtils.string(s)),
                                h = t.which === c.KeyboardKeys.ARROW_LEFT == !a;
                            return u.SlateTransforms.keyboardMove(e, {
                                reverse: h,
                                unit: n,
                                edge: o
                            }), !0
                        }
                        case c.KeyboardKeys.A:
                            if (m && f(t, {
                                    ctrl: !0
                                })) {
                                let t = d.EditorUtils.getCurrentBlock(e);
                                if (null != t) {
                                    let [, n] = t, l = d.PathUtils.child(n, 0), i = {
                                        path: l,
                                        offset: 0
                                    };
                                    return u.SlateTransforms.select(e, {
                                        anchor: i,
                                        focus: i
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.E:
                            if (m && f(t, {
                                    ctrl: !0
                                })) {
                                let t = d.EditorUtils.getCurrentBlock(e);
                                if (null != t) {
                                    let [n, l] = t, i = d.PathUtils.child(l, n.children.length - 1), [r] = d.EditorUtils.node(e, i), o = {
                                        path: i,
                                        offset: r.text.length
                                    };
                                    return u.SlateTransforms.select(e, {
                                        anchor: o,
                                        focus: o
                                    }), !0
                                }
                            }
                            break;
                        case c.KeyboardKeys.BACKSPACE:
                        case c.KeyboardKeys.DELETE:
                        case c.KeyboardKeys.K:
                            let h = t.which === c.KeyboardKeys.BACKSPACE;
                            if ((!m && t.which !== c.KeyboardKeys.K && f(t, {
                                    ctrl: !0,
                                    shift: !0
                                }) || m && t.which !== c.KeyboardKeys.K && f(t, {
                                    cmd: !0
                                }) || m && t.which === c.KeyboardKeys.K && f(t, {
                                    ctrl: !0
                                })) && null != e.selection) {
                                let [t, n] = d.RangeUtils.edges(e.selection), [l, i] = d.EditorUtils.node(e, [h ? t.path[0] : n.path[0]]);
                                if (o(d.ElementUtils.isElement(l) && d.EditorUtils.isBlock(e, l), "Top-most node of selection is not a block"), h && !d.PointUtils.isAtStart(t, [l, i]) || !h && !d.PointUtils.isAtEnd(n, [l, i])) return h ? e.deleteBackward("line") : e.deleteForward("line"), !0
                            }
                    }
                    return !1
                }, e
            }
        },
        100576: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                run: function() {
                    return g
                },
                convertRawToInlineVoids: function() {
                    return v
                }
            }), n("222007"), n("424973");
            var l = n("627445"),
                i = n.n(l),
                r = n("798609"),
                o = n("383018"),
                s = n("118851"),
                a = n("83800"),
                u = n("135038"),
                d = n("970153"),
                c = n("939563"),
                f = n("385887");
            let p = /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
                m = new Set(["emoji", "customEmoji", "textMention", "userMention", "roleMention", "channelMention", "staticRouteLink", "soundboard", "timestamp"]),
                h = new Set(["line", "blockQuote"]),
                E = new Set(["applicationCommandOption"]);

            function S(e, t, n) {
                let {
                    isInline: l,
                    isVoid: i,
                    onChange: r
                } = e;
                e.isVoid = e => !!m.has(e.type) || i(e), e.isInline = e => !!m.has(e.type) || l(e);
                let o = null,
                    s = !0;
                return e.onChange = () => {
                    let l = f.EditorUtils.richValue(e);
                    (l !== o || e.previewMarkdown !== s) && (a.HistoryUtils.withMergedEntry(e, () => {
                        f.EditorUtils.withoutNormalizing(e, () => g(e, t, n))
                    }), o = l, s = e.previewMarkdown), r()
                }, e
            }

            function g(e, t, n) {
                let l = f.EditorUtils.areStylesDisabled(e),
                    i = f.EditorUtils.blocks(e);
                for (let r of i)
                    if (h.has(r[0].type)) l ? T(e, r, !0, null) : C(e, r, t, n);
                    else {
                        let [i, o] = r;
                        for (let r = i.children.length - 1; r >= 0; r--) {
                            let s = i.children[r];
                            if (E.has(s.type)) {
                                let i = [s, f.PathUtils.child(o, r)];
                                l ? T(e, i, !0, null) : C(e, i, t, n)
                            }
                        }
                    }
            }

            function C(e, t, n, l) {
                var r;
                let o = "line" === t[0].type && (null === (r = t[0].codeBlockState) || void 0 === r ? void 0 : r.isInCodeBlock) === !0,
                    a = f.ElementUtils.markdown(t[0], n);
                T(e, t, o, a) && (t = f.ElementUtils.updateElement(e, t), a = f.ElementUtils.markdown(t[0], n)), !o && (v(e, t, l, a) && (t = f.ElementUtils.updateElement(e, t), a = f.ElementUtils.markdown(t[0], n)), function(e, t, n, l, r) {
                    let [o, a] = t, u = !1;
                    for (let d = o.children.length - 1; d >= 0; d--) {
                        let m;
                        let h = o.children[d];
                        if (!f.TextUtils.isText(h)) continue;
                        let E = f.PathUtils.child(a, d),
                            S = [];
                        for (p.lastIndex = 0; null != (m = p.exec(h.text));) {
                            if (0 !== m.index && null == h.text.charAt(m.index - 1).match(/(\t|\s)/)) {
                                p.lastIndex = m.index + 1;
                                continue
                            }
                            let i = {
                                path: E,
                                offset: m.index
                            };
                            if (y(e, a, i, r)) continue;
                            let o = (0, s.resolvePlaintextInlineVoid)(m[0], n, l);
                            null != o && x(l, t[0], o) ? S.push({
                                index: m.index,
                                length: m[0].length,
                                node: o
                            }) : p.lastIndex = m.index + 1
                        }
                        for (let t of S.reverse()) {
                            let n = [h, f.PathUtils.child(a, d)];
                            (function(e, t, n, l, r) {
                                let [o, s] = t, a = {
                                    path: s,
                                    offset: n
                                }, u = {
                                    path: s,
                                    offset: n + l
                                };
                                i(a.offset >= 0 && a.offset <= o.text.length, "Failed to find valid start position for raw mention replace"), i(u.offset >= 0 && u.offset <= o.text.length, "Failed to find valid end position for raw mention replace"), c.SlateTransforms.textToVoid(e, r, {
                                    anchor: a,
                                    focus: u
                                })
                            })(e, n, t.index, t.length, t.node), u = !0
                        }
                    };
                }(e, t, n, l, a))
            }

            function T(e, t, n, l) {
                let [i, r] = t, o = !1;
                for (let t = i.children.length - 1; t >= 0; t--) {
                    let s = i.children[t],
                        a = t < i.children.length - 1 ? i.children[t + 1] : null;
                    if (f.TextUtils.isText(s) && !n) {
                        if (null == a || !e.isVoid(a)) continue;
                        let n = !1,
                            l = 0;
                        for (;;) {
                            let e = s.text.indexOf("\\", l);
                            if (-1 === e) break;
                            if (e === s.text.length - 1) {
                                n = !0;
                                break
                            }
                            l = e + 2
                        }
                        if (n) {
                            let n = f.PathUtils.child(r, t + 1);
                            c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(a, {
                                mode: "plain",
                                preventEmojiSurrogates: !0
                            }), n), o = !0
                        }
                    } else if (e.isVoid(s)) {
                        let i = f.PathUtils.child(r, t),
                            a = {
                                path: f.PathUtils.child(i, 0),
                                offset: 0
                            };
                        (n || null != l && y(e, r, a, l)) && (c.SlateTransforms.voidToText(e, (0, d.serializeDescendant)(s, {
                            mode: "plain",
                            preventEmojiSurrogates: !0
                        }), i), o = !0)
                    }
                }
                return o
            }

            function v(e, t, n, l) {
                let i = t[1],
                    r = !1,
                    o = [...l.entries].reverse();
                for (let s of o) {
                    let o;
                    switch (s.attributes[0]) {
                        case "emoji":
                            o = {
                                type: "emoji",
                                emoji: {
                                    name: s.data.name,
                                    src: s.data.src,
                                    surrogate: s.data.surrogate,
                                    jumboable: !0 === s.data.jumboable
                                },
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "customEmoji":
                            o = {
                                type: "customEmoji",
                                emoji: {
                                    emojiId: s.data.emojiId,
                                    name: s.data.name,
                                    animated: s.data.animated,
                                    jumboable: !0 === s.data.jumboable
                                },
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "textMention":
                            o = {
                                type: "textMention",
                                name: s.data.text,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "mention":
                            o = {
                                type: "userMention",
                                userId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "roleMention":
                            o = {
                                type: "roleMention",
                                roleId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "channelMention":
                            o = {
                                type: "channelMention",
                                channelId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "staticRouteLink":
                            o = {
                                type: "staticRouteLink",
                                channelId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "soundboard":
                            o = {
                                type: "soundboard",
                                soundId: s.data.id,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        case "timestamp":
                            o = {
                                type: "timestamp",
                                parsed: s.data,
                                children: [{
                                    text: ""
                                }]
                            };
                            break;
                        default:
                            continue
                    }
                    if (!x(n, t[0], o)) continue;
                    let a = (0, u.getPointFromPosition)(e, i, l.serializedChildren, s.start),
                        d = (0, u.getPointFromPosition)(e, i, l.serializedChildren, s.start + s.text.length);
                    c.SlateTransforms.textToVoid(e, o, {
                        anchor: a,
                        focus: d
                    }), r = !0
                }
                return r
            }

            function y(e, t, n, l) {
                let i = 0;
                for (let [l, r] of f.EditorUtils.nodes(e, {
                        at: {
                            anchor: f.EditorUtils.start(e, t),
                            focus: n
                        },
                        mode: "lowest"
                    })) f.TextUtils.isText(l) ? f.PathUtils.equals(r, n.path) ? i += n.offset : i += l.text.length : i += 1;
                for (let e of l.entries) {
                    if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
                    let t = e.start,
                        n = e.start + e.text.length;
                    if (t <= i && n >= i) return !0
                }
                return !1
            }

            function x(e, t, n) {
                if ("applicationCommandOption" !== t.type) return !0;
                switch (t.optionType) {
                    case r.ApplicationCommandOptionType.CHANNEL:
                        return "channelMention" === n.type;
                    case r.ApplicationCommandOptionType.ROLE:
                        return "roleMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
                    case r.ApplicationCommandOptionType.USER:
                        return "userMention" === n.type;
                    case r.ApplicationCommandOptionType.MENTIONABLE:
                        return "roleMention" === n.type || "userMention" === n.type || "textMention" === n.type && "@everyone" === n.name;
                    case r.ApplicationCommandOptionType.STRING: {
                        let n = null != e ? o.default.getOption(e, t.optionName) : null;
                        return (null == n ? void 0 : n.choices) == null && (null == n ? void 0 : n.autocomplete) !== !0
                    }
                    default:
                        return !1
                }
            }
        },
        665613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007"), n("106442"), n("175143");
            var l = n("987295"),
                i = n("939563"),
                r = n("385887");

            function o(e) {
                let {
                    apply: t,
                    deleteBackward: n,
                    deleteForward: o,
                    deleteFragment: a,
                    insertText: d
                } = e;
                return e.apply = n => {
                    var l;
                    if ("set_selection" === n.type && (null === (l = e.composition) || void 0 === l ? void 0 : l.startedInsideInline) && r.RangeUtils.isRange(n.properties) && r.RangeUtils.isRange(n.newProperties) && r.RangeUtils.isCollapsed(n.newProperties)) {
                        let t = r.EditorUtils.getParentInline(e, n.properties),
                            l = r.EditorUtils.getParentInline(e, n.newProperties);
                        if (null != t && (null == l || !r.PathUtils.equals(t[1], l[1]))) return
                    }
                    t(n)
                }, e.insertText = t => {
                    if (null != e.selection) {
                        let n = r.EditorUtils.getCurrentInline(e);
                        if (null != n) {
                            i.SlateTransforms.insertText(e, t);
                            return
                        }
                    }
                    d(t)
                }, e.deleteBackward = t => {
                    !s(e, t, !0) && n(t)
                }, e.deleteForward = t => {
                    !s(e, t, !1) && o(t)
                }, e.deleteFragment = t => {
                    if (null != e.selection && r.RangeUtils.isExpanded(e.selection)) {
                        var n, l, o, s;
                        let u = e.selection.anchor,
                            d = e.selection.focus,
                            c = r.EditorUtils.getParentInline(e, u),
                            f = r.EditorUtils.getParentInline(e, d);
                        if (null != c && null != f && r.PathUtils.equals(c[1], f[1])) {
                            a(t);
                            return
                        }
                        let p = r.RangeUtils.isForward(e.selection);
                        if (null != c) {
                            let [, t] = c, [i, o] = r.EditorUtils.edges(e, t);
                            p && r.PointUtils.equals(u, i) ? u = null !== (n = r.EditorUtils.before(e, i)) && void 0 !== n ? n : r.EditorUtils.start(e, []) : !p && r.PointUtils.equals(u, o) && (u = null !== (l = r.EditorUtils.after(e, o)) && void 0 !== l ? l : r.EditorUtils.end(e, []))
                        }
                        if (null != f) {
                            let [, t] = f, [n, l] = r.EditorUtils.edges(e, t);
                            !p && r.PointUtils.equals(d, n) ? d = null !== (o = r.EditorUtils.before(e, n)) && void 0 !== o ? o : r.EditorUtils.start(e, []) : p && r.PointUtils.equals(d, l) && (d = null !== (s = r.EditorUtils.after(e, l)) && void 0 !== s ? s : r.EditorUtils.end(e, []))
                        }
                        i.SlateTransforms.delete(e, {
                            at: {
                                anchor: u,
                                focus: d
                            },
                            reverse: "backward" === t,
                            select: !0
                        });
                        return
                    }
                    a(t)
                }, l.Editor.positions = u, e
            }

            function s(e, t, n) {
                let l = r.EditorUtils.getCurrentInline(e),
                    o = r.EditorUtils.getCurrentBlock(e),
                    s = r.RangeUtils.toPoint(e.selection);
                if (null == s || null == o || "block" === t) return !0;
                if ("line" === t && null == l) return !1;
                let a = l;
                if (null == a) {
                    let t = (n ? r.EditorUtils.before : r.EditorUtils.after)(e, s);
                    null != t && null != (a = r.EditorUtils.getParentInline(e, t)) && (s = t)
                }
                if (null != a) {
                    let [l, o] = a;
                    if (r.EditorUtils.isEmpty(e, l) || r.EditorUtils.isVoid(e, l)) i.SlateTransforms.removeInline(e, o);
                    else {
                        let [l, a] = r.EditorUtils.edges(e, o);
                        i.SlateTransforms.delete(e, {
                            at: s,
                            unit: t,
                            reverse: n,
                            select: !0,
                            bounds: {
                                anchor: l,
                                focus: a
                            }
                        })
                    }
                    return !0
                }
                let u = !1;
                if (null != o) {
                    let [, t] = o, [l, i] = r.EditorUtils.edges(e, t);
                    u = n && r.PointUtils.equals(s, l) || !n && r.PointUtils.equals(s, i)
                }
                if ("word" === t && !u) {
                    let l = r.EditorUtils.getCurrentText(e);
                    if (null != l) {
                        let [, o] = l, [a, u] = r.EditorUtils.edges(e, o);
                        return i.SlateTransforms.delete(e, {
                            at: s,
                            unit: t,
                            reverse: n,
                            select: !0,
                            bounds: {
                                anchor: a,
                                focus: u
                            }
                        }), !0
                    }
                }
                return i.SlateTransforms.delete(e, {
                    at: s,
                    unit: t,
                    reverse: n,
                    select: !0
                }), !0
            }
            let a = l.Editor.positions;

            function* u(e) {
                var t, n, l, i, o, s, u, d;
                let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    {
                        at: f = e.selection,
                        unit: p = "offset",
                        reverse: m = !1,
                        voids: h = !1
                    } = null != c ? c : {};
                if ("word" !== p) {
                    for (let t of a(e, {
                            ...c,
                            voids: h || "block" === p
                        })) yield t;
                    return
                }
                if (null == f) return;
                let E = r.EditorUtils.range(e, f),
                    [S, g] = r.RangeUtils.edges(E),
                    C = r.EditorUtils.richValue(e),
                    T = m ? -1 : 1,
                    v = null !== (l = null === (t = S.path) || void 0 === t ? void 0 : t[0]) && void 0 !== l ? l : 0,
                    y = null !== (i = null === (n = g.path) || void 0 === n ? void 0 : n[0]) && void 0 !== i ? i : C.length - 1,
                    x = m ? v : y,
                    I = m ? y : v;
                for (;;) {
                    let t = C[I],
                        n = null !== (u = I === v ? null === (o = S.path) || void 0 === o ? void 0 : o[1] : null) && void 0 !== u ? u : 0,
                        l = null !== (d = I === y ? null === (s = g.path) || void 0 === s ? void 0 : s[1] : null) && void 0 !== d ? d : t.children.length - 1,
                        i = m ? l : n,
                        f = m ? n : l,
                        p = i;
                    for (;;) {
                        let n, l;
                        let i = t.children[p],
                            o = [I, p];
                        if (n = r.PathUtils.equals(o, S.path) || r.PathUtils.isAncestor(o, S.path) ? !m && r.EditorUtils.isEnd(e, S, o) ? null : S : r.EditorUtils.start(e, o), l = r.PathUtils.equals(o, g.path) || r.PathUtils.isAncestor(o, g.path) ? m && r.EditorUtils.isStart(e, g, o) ? null : g : r.EditorUtils.end(e, o), null != n && null != l) {
                            if (r.TextUtils.isText(i) && 0 === i.text.length) {
                                let e = {
                                    path: o,
                                    offset: 0
                                };
                                yield e, yield e
                            } else if (r.EditorUtils.isInline(e, i) && r.TextUtils.isText(i.children[0]) && 0 === i.children[0].text.length) {
                                let e = {
                                    path: r.PathUtils.child(o, 0),
                                    offset: 0
                                };
                                yield e, yield e
                            } else {
                                let t = {
                                    anchor: n,
                                    focus: l
                                };
                                for (let n of a(e, {
                                        ...c,
                                        at: t
                                    })) yield n
                            }
                        }
                        if (p === f) break;
                        p += T
                    }
                    if (I === x) break;
                    I += T
                }
            }
        },
        473752: function(e, t, n) {
            "use strict";
            n.r(t)
        },
        541926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("970153"),
                i = n("939563"),
                r = n("385887");

            function o(e) {
                return e.setFragmentData = t => {
                    if (null != e.selection) {
                        let n = (0, l.toTextValue)(r.EditorUtils.richValue(e), {
                            mode: "plain",
                            range: e.selection,
                            preventEmojiSurrogates: !0
                        });
                        t.setData("text/plain", n)
                    }
                }, e.insertData = t => {
                    e.insertTextData(t)
                }, e.insertFragmentData = e => !1, e.insertTextData = t => {
                    let n = t.getData("text/plain");
                    return 0 !== n.length && (null != e.selection && r.RangeUtils.isExpanded(e.selection) && i.SlateTransforms.delete(e, {
                        at: e.selection
                    }), e.insertText(n), !0)
                }, e
            }
        },
        926970: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                withReact: function() {
                    return o
                }
            });
            var l = n("371621"),
                i = n("939563"),
                r = n("385887");
            let o = (e, t) => {
                let {
                    addMark: n,
                    removeMark: o,
                    deleteBackward: s,
                    deleteForward: a,
                    setFragmentData: u,
                    insertData: d,
                    insertFragmentData: c,
                    insertTextData: f
                } = e;
                return (e = (0, l.withReact)(e)).addMark = n, e.removeMark = o, e.setFragmentData = u, e.insertData = d, e.insertFragmentData = c, e.insertTextData = f, e.deleteBackward = n => {
                    if ("line" !== n || t) s(n);
                    else {
                        let t = r.DOMUtils.getLineActionRange(e, !0);
                        null != t && i.SlateTransforms.delete(e, {
                            at: t
                        })
                    }
                }, e.deleteForward = n => {
                    if ("line" !== n || t) a(n);
                    else {
                        let t = r.DOMUtils.getLineActionRange(e, !1);
                        null != t && i.SlateTransforms.delete(e, {
                            at: t
                        })
                    }
                }, e
            }
        },
        755107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("939563"),
                i = n("385887"),
                r = n("566819");

            function o(e) {
                let {
                    apply: t,
                    onChange: n
                } = e;
                return e.apply = n => {
                    t(n), i.SelectionUtils.isValid(e, e.selection) && (e.lastGoodSelection = e.selection)
                }, e.onChange = () => {
                    if (!i.SelectionUtils.isValid(e, e.selection) && (e.selection = function(e) {
                            let t;
                            if (i.SelectionUtils.isValid(e, e.lastGoodSelection)) t = e.lastGoodSelection;
                            else {
                                let n = i.EditorUtils.end(e, []);
                                t = {
                                    anchor: n,
                                    focus: n
                                }
                            }
                            return t
                        }(e)), null != e.selection) {
                        let t, n, [o, s] = i.RangeUtils.edges(e.selection),
                            a = !1;
                        for (; null != o && null != (t = i.EditorUtils.getParentVoid(e, o)) && !r.SELECTABLE_VOIDS.includes(t[0].type);) o = i.EditorUtils.before(e, o, {
                            unit: "offset"
                        }), a = !0;
                        for (; null != s && null != (n = i.EditorUtils.getParentVoid(e, s)) && !r.SELECTABLE_VOIDS.includes(n[0].type);) s = i.EditorUtils.after(e, s, {
                            unit: "offset"
                        }), a = !0;
                        a && null != o && null != s && (i.RangeUtils.isForward(e.selection) ? l.SlateTransforms.select(e, {
                            anchor: o,
                            focus: s
                        }) : l.SlateTransforms.select(e, {
                            anchor: s,
                            focus: o
                        }))
                    }
                    n()
                }, e
            }
        },
        518542: function(e, t, n) {
            "use strict";

            function l(e) {
                let {
                    isInline: t,
                    isVoid: n
                } = e;
                return e.isInline = e => "testInline" === e.type || "testInlineVoid" === e.type || t(e), e.isVoid = e => "testInlineVoid" === e.type || n(e), e
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        269149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });

            function l(e, t, n) {
                let {
                    onChange: l
                } = e, i = !1, r = !1;
                return e.onChange = () => {
                    if (i) {
                        r = !0;
                        return
                    }
                    i = !0;
                    try {
                        let e = 0;
                        do {
                            if (r = !1, e++ >= 5) break;
                            null == t || t();
                            try {
                                l()
                            } finally {
                                null == n || n()
                            }
                        } while (r)
                    } finally {
                        i = !1
                    }
                }, e
            }
        },
        765446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("371621"),
                a = n("446674"),
                u = n("798609"),
                d = n("383018"),
                c = n("474643"),
                f = n("585722"),
                p = n("640830"),
                m = n("939563"),
                h = n("385887"),
                E = n("782340"),
                S = n("835906");

            function g(e, t, n) {
                let {
                    attributes: i,
                    children: r,
                    element: o
                } = t;
                switch (o.type) {
                    case "applicationCommand":
                        let s = d.default.getActiveCommand(n),
                            a = 0,
                            u = 0;
                        if (null != s && s.id === o.command.id) {
                            var c;
                            let t = p.getOptionNames(e);
                            for (let e of null !== (c = s.options) && void 0 !== c ? c : []) t.includes(e.name) ? u++ : a++
                        }
                        let f = {};
                        if (a > 0) {
                            let e;
                            e = u > 0 ? E.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                                count: a
                            }) : E.default.Messages.COMMANDS_OPTION_COUNT.format({
                                count: a
                            }), f["data-trailing-placeholder"] = e
                        }
                        return (0, l.jsx)("div", {
                            className: S.applicationCommand,
                            ...i,
                            ...f,
                            children: r
                        });
                    case "applicationCommandOption":
                        return (0, l.jsx)(C, {
                            attributes: i,
                            channelId: n,
                            element: o,
                            children: r
                        });
                    default:
                        return null
                }
            }
            let C = e => {
                let t, {
                        channelId: n,
                        element: r,
                        attributes: p,
                        children: g
                    } = e,
                    C = (0, s.useSelected)(),
                    T = (0, s.useFocused)(),
                    v = (0, s.useSlateStatic)(),
                    {
                        optionType: y,
                        errored: x
                    } = (0, a.useStateFromStoresObject)([d.default], () => {
                        var e, t, l;
                        return {
                            optionType: null === (e = d.default.getOption(n, r.optionName)) || void 0 === e ? void 0 : e.type,
                            errored: (null === (l = d.default.getOptionState(n, r.optionName)) || void 0 === l ? void 0 : null === (t = l.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                        }
                    }, [n, r.optionName]),
                    I = (0, a.useStateFromStores)([f.default], () => f.default.getUpload(n, r.optionName, c.DraftType.SlashCommand), [n, r.optionName]),
                    N = r.children[r.children.length - 1],
                    _ = null != N && h.TextUtils.isText(N) && N.text.endsWith("\n"),
                    A = o(S.inlineElement, S.optionPill, {
                        [S.selectedPill]: T && C,
                        [S.erroredPill]: (!T || !C) && x
                    }),
                    R = i.useCallback(() => {
                        !h.EditorUtils.isVoid(v, r) && m.SlateTransforms.selectCommandOption(v, r.optionName, !0)
                    }, [v, r]);
                return t = y === u.ApplicationCommandOptionType.ATTACHMENT ? (null == I ? void 0 : I.filename) != null ? (0, l.jsxs)("span", {
                    className: o(S.optionPillValue, S.attachmentFilename),
                    contentEditable: !1,
                    children: [I.filename, g]
                }) : (0, l.jsxs)("span", {
                    className: o(S.optionPillValue, S.readonlyPillValue),
                    contentEditable: !1,
                    children: [E.default.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, g]
                }) : (0, l.jsxs)("span", {
                    className: S.optionPillValue,
                    children: [g, _ ? (0, l.jsx)("span", {
                        className: S.newLine,
                        contentEditable: !1
                    }) : null]
                }), (0, l.jsxs)("span", {
                    ...p,
                    className: A,
                    children: [(0, l.jsxs)("span", {
                        className: S.optionPillKey,
                        contentEditable: !1,
                        onClick: R,
                        children: [r.optionDisplayName, "​"]
                    }), t, (0, l.jsx)("span", {
                        contentEditable: !1,
                        children: "​"
                    })]
                })
            }
        },
        461593: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("835906");

            function s(e) {
                let {
                    attributes: t,
                    children: n,
                    leaf: i,
                    text: s
                } = e;
                if (i.commandName) {
                    let e = r(o.commandName, {
                        [o.emptyText]: "" === s.text
                    });
                    return (0, l.jsx)("span", {
                        ...t,
                        className: e,
                        spellCheck: !1,
                        children: n
                    })
                }
                return null
            }
        },
        760120: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("186188"),
                s = n("328634"),
                a = n("835906"),
                u = n("632215");

            function d(e, t, n) {
                let {
                    attributes: i,
                    children: a,
                    element: d
                } = e;
                switch (d.type) {
                    case "line":
                        var f;
                        if (null === (f = d.codeBlockState) || void 0 === f ? void 0 : f.isInCodeBlock) return (0, l.jsx)("div", {
                            className: s.codeLine,
                            spellCheck: null == d.codeBlockState || null == d.codeBlockState.lang,
                            ...i,
                            children: a
                        });
                        return (0, l.jsx)("div", {
                            ...i,
                            children: a
                        });
                    case "blockQuote": {
                        let e = r(u.blockquoteContainer, u.slateBlockquoteContainer);
                        return (0, l.jsxs)("div", {
                            ...i,
                            className: e,
                            children: [(0, l.jsx)("span", {
                                contentEditable: !1,
                                className: u.blockquoteDivider
                            }), (0, l.jsx)("blockquote", {
                                children: a
                            })]
                        })
                    }
                    case "emoji":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.Emoji, {
                                emoji: d.emoji
                            }), a]
                        });
                    case "customEmoji":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.CustomEmoji, {
                                emoji: d.emoji
                            }), a]
                        });
                    case "textMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.TextMention, {
                                text: d.name,
                                channelId: n,
                                guildId: t
                            }), a]
                        });
                    case "userMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.UserMention, {
                                id: d.userId,
                                channelId: n,
                                guildId: t
                            }), a]
                        });
                    case "roleMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.RoleMention, {
                                id: d.roleId,
                                guildId: t
                            }), a]
                        });
                    case "channelMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.ChannelMention, {
                                id: d.channelId
                            }), a]
                        });
                    case "staticRouteLink":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.StaticRouteMention, {
                                id: d.channelId
                            }), a]
                        });
                    case "soundboard":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.SoundboardMention, {
                                id: d.soundId
                            }), a]
                        });
                    case "commandMention":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.CommandMention, {
                                text: d.commandName,
                                id: d.commandId
                            }), a]
                        });
                    case "timestamp":
                        return (0, l.jsxs)(c, {
                            attributes: i,
                            children: [(0, l.jsx)(o.Timestamp, {
                                timestamp: d.parsed
                            }), a]
                        });
                    default:
                        return null
                }
            }
            let c = e => {
                let {
                    className: t,
                    attributes: n,
                    children: i
                } = e, o = r(a.inlineElement, a.inlineVoid, t);
                return (0, l.jsx)("span", {
                    ...n,
                    className: o,
                    contentEditable: !1,
                    children: i
                })
            }
        },
        632550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("881410"), n("70102");
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("385887"),
                s = n("328634"),
                a = n("835906"),
                u = n("145719");
            let d = {
                strong: s.bold,
                em: s.italics,
                u: s.underline,
                s: s.strikethrough,
                inlineCode: s.inlineCode,
                link: s.fakeLink,
                url: s.fakeLink,
                autolink: s.fakeLink,
                spoiler: r(u.spoilerContent, u.spoilerMarkdownContent, u.obscuredTextContent, s.spoiler),
                staticRouteLink: s.fakeLink,
                syntaxBefore: s.syntaxBefore,
                syntaxAfter: s.syntaxAfter,
                codeBlockText: s.codeBlockText,
                codeBlockSyntax: s.codeBlockSyntax,
                codeBlockLang: s.codeBlockLang
            };

            function c(e, t) {
                let n;
                let {
                    attributes: i,
                    children: u,
                    leaf: c,
                    text: f
                } = t, p = !1, [m] = o.EditorUtils.node(e, o.PathUtils.parent(o.EditorUtils.findPath(e, f))), h = o.EditorUtils.isEditor(m) ? "editor" : m.type;
                switch (h) {
                    case "line":
                    case "blockQuote": {
                        p = void 0;
                        let e = Object.entries(c).filter(e => {
                            let [t] = e;
                            return "text" !== t
                        }).flatMap(e => {
                            let [t, n] = e;
                            if ("hljsTypes" === t) return n;
                            if (!0 === n) {
                                if (("codeBlockLang" === t || "codeBlockSyntax" === t) && (p = !1), t.startsWith("before_") || t.startsWith("after_")) return [s[t]];
                                if (t in d) return [d[t]];
                                throw Error("Slate: Unknown decoration attribute: ".concat(t))
                            }
                        }).filter(e => null != e).join(" ");
                        n = r(e, {
                            [s.syntaxOverride]: "||" === c.text || "\\" === c.text
                        })
                    }
                }
                return n = r(n, {
                    [a.emptyText]: "" === f.text
                }), (0, l.jsx)("span", {
                    ...i,
                    className: n,
                    spellCheck: p,
                    children: u
                })
            }
        },
        395364: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("781738"), n("222007");
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("646630"),
                o = n("433417");

            function s(e, t) {
                if (!("type" in e)) return null;
                if ("timestamp" === e.type) return (0, l.jsx)(a, {
                    ...t,
                    timestamp: e.parsed
                });
                return null
            }

            function a(e) {
                var t;
                let {
                    timestamp: n,
                    replace: s
                } = e, a = e => {
                    let {
                        timestamp: t,
                        format: l
                    } = e, i = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp, o = null != l ? l : n.format, a = (0, r.unparseTimestamp)(i, o);
                    s(a)
                };
                return (0, l.jsxs)("div", {
                    className: o.container,
                    children: [(0, l.jsx)(i.DateInput, {
                        value: n.parsed,
                        onSelect: e => {
                            a({
                                timestamp: e.toDate()
                            })
                        }
                    }), (0, l.jsx)(i.TimeInput, {
                        value: n.parsed,
                        onChange: e => {
                            a({
                                timestamp: e.toDate()
                            })
                        }
                    }), (0, l.jsx)(i.RadioGroup, {
                        options: Object.entries(r.TIMESTAMP_FORMATS).map(e => {
                            let [t, l] = e;
                            return {
                                name: l(n.parsed),
                                value: t
                            }
                        }),
                        value: null !== (t = n.format) && void 0 !== t ? t : r.DEFAULT_TIMESTAMP_FORMAT,
                        size: i.RadioGroup.Sizes.SMALL,
                        onChange: e => {
                            let {
                                value: t
                            } = e;
                            a({
                                format: t
                            })
                        }
                    })]
                })
            }
        },
        200197: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EventEmitterProvider: function() {
                    return s
                },
                default: function() {
                    return u
                }
            }), n("70102");
            var l = n("884691"),
                i = n("44170");
            class r extends i.EventEmitter {
                on() {
                    return this
                }
                once() {
                    return this
                }
                addListener() {
                    return this
                }
                removeListener() {
                    return this
                }
                emit() {
                    return !1
                }
            }
            let o = l.createContext(new r),
                {
                    Provider: s,
                    Consumer: a
                } = o;
            var u = o
        },
        241488: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return F
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n.n(s),
                u = n("394846"),
                d = n("118810"),
                c = n("446674"),
                f = n("551042"),
                p = n("77078"),
                m = n("452804"),
                h = n("901582"),
                E = n("594203"),
                S = n("244201"),
                g = n("716241"),
                C = n("86678"),
                T = n("873622"),
                v = n("277855"),
                y = n("191191"),
                x = n("256860"),
                I = n("364685"),
                N = n("889701"),
                _ = n("168973"),
                A = n("983782"),
                R = n("659500"),
                O = n("791776"),
                M = n("538282"),
                k = n("13030"),
                b = n("49111"),
                P = n("115279"),
                L = n("958706"),
                U = n("560241"),
                j = n("782340"),
                D = n("300441");
            let w = k.MIN_EXPRESSION_PICKER_WIDTH + P.EmojiSize.MEDIUM,
                B = i.memo(function(e) {
                    let {
                        isActive: t,
                        className: n,
                        viewType: i,
                        autoFocus: r = !1,
                        "aria-controls": s,
                        ...a
                    } = e;
                    return (0, l.jsx)(p.Button, {
                        role: "tab",
                        autoFocus: r,
                        "aria-controls": t ? s : void 0,
                        ...a,
                        onClick: () => {
                            g.default.trackWithMetadata(b.AnalyticEvents.EXPRESSION_PICKER_TAB_CLICKED, {
                                tab: i,
                                badged: !1
                            }), (0, M.setExpressionPickerView)(i)
                        },
                        "aria-current": t ? "page" : void 0,
                        className: o(n, D.navButton, D.navItem, {
                            [D.navButtonActive]: t
                        }),
                        look: p.Button.Looks.BLANK,
                        size: p.Button.Sizes.NONE
                    })
                }),
                H = e => {
                    let {
                        positionContainerRef: t,
                        drawerRef: n,
                        orientation: l
                    } = e, r = (0, c.useStateFromStores)([_.default], () => _.default.expressionPickerWidth), [o, s] = i.useState(window.innerWidth), [u, d] = i.useState(null != r ? r : k.ExpressionPickerWidths.MIN), f = i.useMemo(() => {
                        switch (u) {
                            case k.ExpressionPickerWidths.MIN:
                                return k.MIN_EXPRESSION_PICKER_WIDTH;
                            case k.ExpressionPickerWidths.MAX:
                                return null;
                            default:
                                return u
                        }
                    }, [u]), p = i.useCallback(e => {
                        let t = e >= o ? k.ExpressionPickerWidths.MAX : e <= k.MIN_EXPRESSION_PICKER_WIDTH ? k.ExpressionPickerWidths.MIN : e;
                        null == t && null != n.current && (n.current.style.width = ""), m.default.updatedUnsyncedSettings({
                            expressionPickerWidth: t
                        }), d(t)
                    }, [n, o]), h = (0, E.default)({
                        initialElementDimension: f,
                        maxDimension: o,
                        minDimension: k.MIN_EXPRESSION_PICKER_WIDTH,
                        resizableDomNodeRef: n,
                        onElementResize: p,
                        orientation: l
                    });
                    i.useEffect(() => {
                        let e = a.debounce(() => {
                            null != t.current && s(t.current.offsetWidth)
                        }, 500);
                        return window.addEventListener("resize", e), () => {
                            window.removeEventListener("resize", e)
                        }
                    }, [t]), i.useLayoutEffect(() => {
                        null != t.current && s(t.current.offsetWidth)
                    }, [t]);
                    let S = i.useCallback(e => {
                        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), h(e)
                    }, [t, h]);
                    return {
                        drawerWidth: f,
                        handleDrawerResizeHandleMouseDown: S
                    }
                };
            var F = i.memo(function(e) {
                var t, n, r;
                let {
                    positionTargetRef: s,
                    hideGifFavorites: a,
                    includeCreateEmojiButton: m,
                    onSelectGIF: _,
                    onSelectEmoji: F,
                    onSelectSticker: G,
                    onSelectSound: K,
                    channel: V,
                    type: W,
                    position: Y,
                    align: q,
                    positionLayerClassName: z,
                    closeOnModalOuterClick: Q = !1,
                    parentModalKey: X
                } = e, Z = i.useRef(null), J = i.useRef(!1), $ = i.useRef(), ee = i.useRef(null), et = "left" === q ? E.ResizeOrientation.HORIZONTAL_RIGHT : E.ResizeOrientation.HORIZONTAL_LEFT, {
                    drawerWidth: en,
                    handleDrawerResizeHandleMouseDown: el
                } = H({
                    positionContainerRef: Z,
                    drawerRef: ee,
                    orientation: et
                }), ei = (0, M.useExpressionPickerStore)(e => e.activeView), er = (0, x.useHasSendableSticker)(V), {
                    renderWindow: eo,
                    windowDispatch: es
                } = i.useContext(S.default), ea = (0, c.useStateFromStores)([I.default], () => !I.default.hasLoadedStickerPacks), eu = (0, v.useSoundmojiExperiment)("expression_picker"), ed = null != X, ec = (0, f.useIsModalAtTop)(null != X ? X : ""), ef = i.useCallback(e => {
                    var t;
                    if (!ed && (0, f.hasAnyModalOpen)() || ed && !(ec && Q)) return;
                    let {
                        target: n
                    } = e;
                    if ((0, d.isElement)(n) && null != n.closest("." + k.CHAT_INPUT_BUTTON_CLASSNAME)) return;
                    for (;
                        (0, d.isElement)(n);) {
                        if (n === ee.current || "true" === n.getAttribute("data-menu-item") || "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") || "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")) return;
                        n = n.parentNode
                    }(0, M.closeExpressionPicker)();
                    let l = null === (t = (0, O.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                    (null == l || "BODY" === l.tagName) && R.ComponentDispatch.dispatchToLastSubscribed(b.ComponentActions.TEXTAREA_FOCUS)
                }, [Q, ec, ed]), ep = i.useCallback(() => {
                    (0, M.closeExpressionPicker)()
                }, []);
                i.useLayoutEffect(() => {
                    let e = () => {
                        ei === k.ExpressionPickerViewType.GIF && (0, M.closeExpressionPicker)()
                    };
                    return eo.addEventListener("mousedown", ef), eo.addEventListener("contextmenu", ef), es.subscribe(b.ComponentActions.POPOUT_CLOSE, ep), R.ComponentDispatch.subscribe(b.ComponentActions.CLOSE_GIF_PICKER, e), () => {
                        eo.removeEventListener("mousedown", ef), eo.removeEventListener("contextmenu", ef), es.unsubscribe(b.ComponentActions.POPOUT_CLOSE, ep), R.ComponentDispatch.unsubscribe(b.ComponentActions.CLOSE_GIF_PICKER, e)
                    }
                }, [ei, ep, ef, eo, es]), (0, p.useFocusLock)(Z), i.useEffect(() => {
                    (0, M.setSearchQuery)("")
                }, []), i.useEffect(() => {
                    (!ed && (0, f.hasAnyModalOpen)() || ed && !ec) && (0, M.closeExpressionPicker)()
                }, [ec, ed]), i.useEffect(() => {
                    if (null != ee.current && !J.current) {
                        var e, t, n, l;
                        ei === k.ExpressionPickerViewType.EMOJI ? (null == $ ? void 0 : null === (e = $.current) || void 0 === e ? void 0 : e.onPickerOpen) != null && (null == $ || null === (t = $.current) || void 0 === t || t.onPickerOpen(), J.current = !0) : ei === k.ExpressionPickerViewType.STICKER ? (null == $ ? void 0 : null === (n = $.current) || void 0 === n ? void 0 : n.onPickerOpen) != null && !ea && (null == $ || null === (l = $.current) || void 0 === l || l.onPickerOpen(), J.current = !0) : (g.default.trackWithMetadata(b.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                            width: ee.current.offsetWidth,
                            tab: ei,
                            badged: !1
                        }), J.current = !0)
                    }
                });
                let em = (null === (t = W.gifs) || void 0 === t ? void 0 : t.allowSending) && !u.isMobile,
                    eh = null === (n = W.stickers) || void 0 === n ? void 0 : n.allowSending,
                    eE = !(null === (r = W.expressionPicker) || void 0 === r ? void 0 : r.onlyEmojis) && (em || eh),
                    eS = "left" === q ? "right" : "left",
                    eg = null != z ? z : "left" === q ? D.positionLayerDefaultAlignLeft : D.positionLayerDefaultAlignRight;
                return (0, l.jsx)(h.default, {
                    section: b.AnalyticsSections.EXPRESSION_PICKER,
                    children: (0, l.jsx)(A.AppReferencePositionLayer, {
                        className: o(D.positionLayer, eg),
                        reference: s,
                        position: Y,
                        align: q,
                        spacing: 8,
                        autoInvert: !0,
                        children: e => {
                            let {
                                isPositioned: t
                            } = e;
                            return (0, l.jsx)("section", {
                                className: o(D.positionContainer, {
                                    [D.positionContainerOnlyEmoji]: !eE
                                }),
                                ref: Z,
                                role: "dialog",
                                "aria-label": j.default.Messages.EXPRESSION_PICKER,
                                children: t ? (0, l.jsxs)("div", {
                                    className: D.drawerSizingWrapper,
                                    style: {
                                        width: null == en ? void 0 : en,
                                        [q]: 0
                                    },
                                    ref: ee,
                                    children: [(0, l.jsx)("div", {
                                        className: D.resizeHandle,
                                        onMouseDown: el,
                                        style: {
                                            [eS]: -2
                                        }
                                    }), (0, l.jsxs)("div", {
                                        className: D.contentWrapper,
                                        children: [eE ? (0, l.jsx)("nav", {
                                            className: D.nav,
                                            children: (0, l.jsxs)("div", {
                                                className: D.navList,
                                                role: "tablist",
                                                "aria-label": j.default.Messages.EXPRESSION_PICKER_CATEGORIES_A11Y_LABEL,
                                                children: [em && (0, l.jsx)(B, {
                                                    id: P.GIF_PICKER_TAB_ID,
                                                    "aria-controls": P.GIF_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": ei === k.ExpressionPickerViewType.GIF,
                                                    isActive: ei === k.ExpressionPickerViewType.GIF,
                                                    viewType: k.ExpressionPickerViewType.GIF,
                                                    children: j.default.Messages.EXPRESSION_PICKER_GIF
                                                }), eh ? (0, l.jsx)(B, {
                                                    id: U.STICKER_PICKER_TAB_ID,
                                                    "aria-controls": U.STICKER_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": ei === k.ExpressionPickerViewType.STICKER,
                                                    isActive: ei === k.ExpressionPickerViewType.STICKER,
                                                    autoFocus: !er,
                                                    viewType: k.ExpressionPickerViewType.STICKER,
                                                    children: (0, l.jsx)("div", {
                                                        className: D.stickersNavItem,
                                                        children: j.default.Messages.EXPRESSION_PICKER_STICKER
                                                    })
                                                }) : null, (0, l.jsx)(B, {
                                                    id: P.EMOJI_PICKER_TAB_ID,
                                                    "aria-controls": P.EMOJI_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": ei === k.ExpressionPickerViewType.EMOJI,
                                                    isActive: ei === k.ExpressionPickerViewType.EMOJI,
                                                    viewType: k.ExpressionPickerViewType.EMOJI,
                                                    children: j.default.Messages.EXPRESSION_PICKER_EMOJI
                                                }), eu && null != K && (0, l.jsx)(B, {
                                                    id: P.SOUNDBOARD_PICKER_TAB_ID,
                                                    "aria-controls": P.SOUNDBOARD_PICKER_TAB_PANEL_ID,
                                                    "aria-selected": ei === k.ExpressionPickerViewType.SOUNDBOARD,
                                                    isActive: ei === k.ExpressionPickerViewType.SOUNDBOARD,
                                                    viewType: k.ExpressionPickerViewType.SOUNDBOARD,
                                                    children: "Sounds"
                                                })]
                                            })
                                        }) : null, ei === k.ExpressionPickerViewType.STICKER && eE ? (0, l.jsx)(N.default, {
                                            isLoading: ea,
                                            channel: V,
                                            containerWidth: en,
                                            onSelectSticker: G,
                                            closePopout: ep,
                                            ref: e => {
                                                $.current = e
                                            }
                                        }) : null, ei === k.ExpressionPickerViewType.GIF && eE ? (0, l.jsx)(T.default, {
                                            onSelectGIF: _,
                                            hideFavorites: a,
                                            persistSearch: !0
                                        }) : null, ei === k.ExpressionPickerViewType.EMOJI ? (0, l.jsx)(C.default, {
                                            hasTabWrapper: !0,
                                            persistSearch: !0,
                                            channel: V,
                                            containerWidth: en,
                                            includeCreateEmojiButton: m,
                                            emojiSize: null != en && en < w ? P.EmojiSize.MEDIUM : P.EmojiSize.LARGE,
                                            pickerIntention: L.EmojiIntention.CHAT,
                                            closePopout: ep,
                                            onSelectEmoji: F,
                                            ref: e => {
                                                $.current = e
                                            }
                                        }) : null, ei === k.ExpressionPickerViewType.SOUNDBOARD ? (0, l.jsx)("div", {
                                            className: D.soundboardContainer,
                                            children: (0, l.jsx)(y.default, {
                                                guildId: V.guild_id,
                                                channel: V,
                                                containerWidth: en,
                                                onClose: ep,
                                                onSelect: K,
                                                analyticsSource: "expression-picker",
                                                autoWidth: !0
                                            })
                                        }) : null]
                                    })]
                                }) : null
                            })
                        }
                    })
                })
            })
        },
        522096: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("538282"),
                o = n("45961"),
                s = n("794707"),
                a = n("195638"),
                u = n("44058");

            function d(e) {
                let {
                    categories: t,
                    collapsedCategories: n,
                    containerWidth: d,
                    store: c,
                    onSelectItem: f,
                    onSearchExpressions: p,
                    hasSearchResults: m,
                    defaultSearchPlaceholder: h,
                    emptySearchPlaceholder: E,
                    renderEmptyState: S,
                    renderRow: g,
                    renderSection: C,
                    renderSectionHeader: T,
                    renderSectionFooter: v,
                    renderInspector: y,
                    renderEmptySearchState: x,
                    renderCategoryList: I,
                    renderHeaderAccessories: N,
                    rowHeight: _,
                    sectionHeaderHeight: A,
                    sectionFooterHeight: R,
                    itemNodeWidth: O,
                    listPaddingRight: M,
                    itemNodeMargin: k,
                    listPadding: b,
                    gridNavigatorId: P,
                    gridNotice: L,
                    renderHeader: U
                } = e, j = i.useRef(null), D = i.useRef(null), w = i.useRef(null), B = 0 === t.length, H = (0, r.useExpressionPickerStore)(e => e.searchQuery), F = c.useStore(e => e.inspectedExpressionPosition), G = (0, o.useExpressionPickerGridWidth)({
                    gridWrapperRef: j,
                    containerWidth: d,
                    showingEmptyState: B
                }), {
                    expressionsGrid: K,
                    rowCount: V,
                    rowCountBySection: W,
                    columnCounts: Y,
                    gutterWidth: q
                } = (0, o.useExpressionGrid)({
                    categories: t,
                    collapsedCategories: n,
                    gridWidth: G,
                    listPaddingRight: M,
                    itemNodeWidth: O,
                    itemNodeMargin: k
                }), {
                    getItemProps: z,
                    getRowProps: Q,
                    gridContainerProps: X,
                    handleGridContainerKeyDown: Z,
                    isUsingKeyboardNavigation: J
                } = (0, o.useKeyboardNavigation)({
                    columnCounts: Y,
                    expressionsListRef: D,
                    expressionsGrid: K,
                    onSelectItem: f,
                    store: c,
                    gridNavigatorId: P
                }), $ = i.useCallback(e => {
                    let t = K[e];
                    return g(t, Q(e), {
                        isUsingKeyboardNavigation: J.current,
                        gutterWidth: q,
                        rowIndex: e
                    }, t => z(e, t), t => c.setInspectedExpressionPosition(t, e))
                }, [K, z, Q, q, J, g, c]), ee = i.useCallback(e => null == C ? void 0 : C(t[e]), [t, C]), et = i.useCallback(e => null == T ? void 0 : T(t[e], e), [t, T]), en = i.useCallback(e => null == v ? void 0 : v(t[e]), [t, v]), el = i.useCallback(() => {
                    var e;
                    return null == y ? void 0 : y(null == K ? void 0 : null === (e = K[F.rowIndex]) || void 0 === e ? void 0 : e[F.columnIndex])
                }, [K, F.columnIndex, F.rowIndex, y]);
                i.useEffect(() => {
                    p(H)
                }, [p, H]), i.useEffect(() => c.resetStoreState, [c.resetStoreState]), i.useLayoutEffect(() => {
                    var e;
                    null === (e = w.current) || void 0 === e || e.focus()
                }, []);
                let ei = (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(a.default, {
                        ref: w,
                        store: c,
                        hasSendableExpressions: !0,
                        onKeyDown: Z,
                        expressionsListRef: D,
                        gridNavigatorId: P,
                        defaultSearchPlaceholder: h,
                        emptySearchPlaceholder: E
                    }), null == N ? void 0 : N()]
                });
                return (0, l.jsxs)(l.Fragment, {
                    children: [null != U ? U(ei) : (0, l.jsxs)("div", {
                        className: u.header,
                        children: [" ", ei, " "]
                    }), B && null != S ? S(u.emptyState) : (0, l.jsxs)(l.Fragment, {
                        children: [I(D), null != L && (0, l.jsx)("div", {
                            className: u.gridNoticeWrapper,
                            children: L
                        }), (0, l.jsx)("div", {
                            ref: j,
                            className: u.listWrapper,
                            id: P,
                            ...X,
                            children: null != G ? (0, l.jsx)(s.default, {
                                ref: D,
                                store: c,
                                hasSearchResults: m,
                                listPadding: b,
                                renderRow: $,
                                renderSection: null != C ? ee : void 0,
                                renderSectionHeader: null != T ? et : void 0,
                                renderSectionFooter: null != v ? en : void 0,
                                renderInspector: null != y ? el : void 0,
                                renderEmptySearchState: x,
                                rowCount: V,
                                rowCountBySection: W,
                                rowHeight: _,
                                sectionHeaderHeight: A,
                                sectionFooterHeight: R
                            }) : null
                        })]
                    })]
                })
            }
        },
        794707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("124299"),
                o = n("538282"),
                s = n("45961"),
                a = n("594755");
            let u = i.forwardRef(function(e, t) {
                let {
                    store: n,
                    hasSearchResults: u,
                    listPadding: d,
                    renderRow: c,
                    renderSection: f,
                    renderSectionHeader: p,
                    renderSectionFooter: m,
                    renderInspector: h,
                    renderEmptySearchState: E,
                    rowCount: S,
                    rowCountBySection: g,
                    rowHeight: C,
                    sectionHeaderHeight: T,
                    sectionFooterHeight: v
                } = e, y = i.useRef(!1), x = i.useRef(null), I = (0, o.useExpressionPickerStore)(e => e.searchQuery), N = n.useStore(e => e.activeCategoryIndex), _ = (0, s.useSynchronizedActiveCategoryIndexForScrollPosition)({
                    activeCategoryIndex: N,
                    isScrolling: y,
                    listRef: x,
                    onActiveCategoryIndexChange: n.setActiveCategoryIndex,
                    scrollOffset: 20,
                    searchQuery: I
                });
                return (0, s.useSynchronizedScrollPositionForActiveCategoryIndex)({
                    searchQuery: I,
                    activeCategoryIndex: N,
                    listRef: x
                }), i.useImperativeHandle(t, () => ({
                    scrollTo: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                    },
                    getRowDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                    },
                    getSectionDescriptors: () => {
                        var e, t;
                        return null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                    },
                    scrollToSectionTop: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                    },
                    scrollRowIntoView: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                    },
                    getScrollerNode: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                    },
                    scrollIntoViewNode: function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        return null === (e = x.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                    },
                    getListDimensions: function() {
                        for (var e, t, n = arguments.length, l = Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                        return null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.getListDimensions(...l)) && void 0 !== t ? t : {
                            height: -1,
                            totalHeight: -1
                        }
                    }
                }), []), (0, l.jsxs)("div", {
                    className: a.wrapper,
                    children: [I.length > 0 && !u && null != E ? E() : (0, l.jsx)(r.default, {
                        role: "none presentation",
                        listPadding: d,
                        onScroll: _,
                        renderRow: c,
                        renderSection: f,
                        renderSectionHeader: p,
                        renderSectionFooter: m,
                        rowCount: S,
                        rowCountBySection: g,
                        rowHeight: C,
                        sectionHeaderHeight: T,
                        sectionFooterHeight: v,
                        stickyHeaders: !0,
                        ref: x
                    }), null == h ? void 0 : h()]
                })
            });
            var d = u
        },
        195638: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("16470"),
                o = n("74139"),
                s = n("137223"),
                a = n("986632"),
                u = n("538282"),
                d = n("595713");
            let c = i.forwardRef(function(e, t) {
                let {
                    store: n,
                    hasSendableExpressions: c,
                    onKeyDown: f,
                    gridNavigatorId: p,
                    expressionsListRef: m,
                    defaultSearchPlaceholder: h,
                    emptySearchPlaceholder: E
                } = e, S = i.useRef(null), [g, C] = (0, u.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], r.default), T = n.useStore(e => e.searchPlaceholder), v = n.useStore(e => e.inspectedExpressionPosition, r.default), y = i.useCallback(e => {
                    var t;
                    n.setActiveCategoryIndex("" === e ? 0 : a.INACTIVE_CATEGORY_INDEX), n.setInspectedExpressionPosition(0, 0), n.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
                }, [m, n]), x = i.useCallback(() => {
                    (0, u.setSearchQuery)("")
                }, []);
                return i.useImperativeHandle(t, () => ({
                    focus: () => {
                        var e;
                        return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
                    }
                })), i.useLayoutEffect(() => {
                    if (C) {
                        var e;
                        null === (e = S.current) || void 0 === e || e.focus()
                    }
                }, [C]), (0, l.jsx)("div", {
                    className: d.wrapper,
                    children: (0, l.jsx)(s.default, {
                        autoFocus: c,
                        disabled: !c,
                        query: g,
                        ref: S,
                        size: s.default.Sizes.MEDIUM,
                        placeholder: null != T ? T : c || null == E ? h : E,
                        onClear: x,
                        onKeyDown: f,
                        onQueryChange: y,
                        className: d.searchBar,
                        preventEscapePropagation: !1,
                        useKeyboardNavigation: !1,
                        inputProps: {
                            "aria-haspopup": "grid",
                            "aria-controls": p,
                            "aria-expanded": !0,
                            "aria-activedescendant": (0, o.makeGridId)(p, v.columnIndex, v.rowIndex)
                        }
                    })
                })
            });
            var f = c
        },
        510500: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStickerSuggestionResults: function() {
                    return S
                },
                useTextChangeHandler: function() {
                    return g
                }
            }), n("222007"), n("424973");
            var l = n("884691"),
                i = n("483366"),
                r = n.n(i),
                o = n("446674"),
                s = n("866353"),
                a = n("467094"),
                u = n("256860"),
                d = n("364685"),
                c = n("697218"),
                f = n("25292"),
                p = n("117362"),
                m = n("171209"),
                h = n("721423");
            let E = (0, p.promiseThrottle)(a.fetchStickerPacks, h.REQUEST_THROTTLE_DURATION_MS),
                S = (e, t, n) => {
                    let i = (0, u.useHasSendableSticker)(n),
                        r = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                        a = l.useMemo(() => {
                            let l = (0, m.getQueriesFromUserInput)(e);
                            if (t || null == e || "" === e || l.length > h.MAX_NUM_USER_INPUT_WORDS || !i) return [];
                            let o = [],
                                a = [],
                                u = (0, m.removePunctuation)(e),
                                d = u === l[0] ? l : [u, ...l],
                                c = f.default.queryStickers(d, !1);
                            c.forEach(e => {
                                let {
                                    sticker: t
                                } = e, l = (0, s.getStickerSendability)(t, r, n), i = {
                                    sticker: t,
                                    sendability: l
                                };
                                l === s.StickerSendability.SENDABLE ? o.push(i) : l === s.StickerSendability.SENDABLE_WITH_PREMIUM && a.push(i)
                            });
                            let p = [];
                            return o.length > 0 && (p = o.slice(0, h.MAX_NUM_SUGGESTED_STICKERS), 0 !== a.length && (p.length === h.MAX_NUM_SUGGESTED_STICKERS && p.pop(), p.push(a[0]))), p
                        }, [e, n, i, t, r]);
                    return a
                },
                g = e => {
                    let {
                        setTextInputValue: t,
                        setHasDismissed: n,
                        setHasSelection: i,
                        setFocusedSuggestionType: o,
                        delayBeforeSuggestions: s
                    } = e, a = l.useRef(null), u = l.useRef(!1), c = l.useRef(!1), f = l.useMemo(() => r(t, null != s ? s : h.DELAY_BEFORE_SUGGESTIONS_MS), [t, s]), p = async e => {
                        var l;
                        if (null == e || "" === e) f.cancel(), null == t || t(""), null == n || n(!1), null == i || i(!1), null == o || o(null), a.current = null, u.current = !1;
                        else if (!u.current && e.trim() !== (null === (l = a.current) || void 0 === l ? void 0 : l.trim())) {
                            if (a.current = e, (0, m.getQueriesFromUserInput)(e).length > h.MAX_NUM_USER_INPUT_WORDS) {
                                u.current = !0, f.cancel(), t("");
                                return
                            }
                            if (!0 === c.current) return;
                            !d.default.hasLoadedStickerPacks && (c.current = !0, await E(), c.current = !1), f(a.current)
                        }
                    };
                    return {
                        handleTextChange: p,
                        debouncedSetTextInputValue: f
                    }
                }
        },
        292936: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            }), n("222007");
            var l, i, r = n("37983"),
                o = n("884691"),
                s = n("414456"),
                a = n.n(s),
                u = n("974667"),
                d = n("942367"),
                c = n("617258"),
                f = n("769846"),
                p = n("77078"),
                m = n("812204"),
                h = n("685665"),
                E = n("200197"),
                S = n("538282"),
                g = n("866353"),
                C = n("364685"),
                T = n("161585"),
                v = n("24373"),
                y = n("41170"),
                x = n("591522"),
                I = n("209069"),
                N = n("845579"),
                _ = n("945330"),
                A = n("587974"),
                R = n("599110"),
                O = n("510500"),
                M = n("171209"),
                k = n("49111"),
                b = n("782340"),
                P = n("612729");
            let L = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_CONTAINER_PADDING),
                U = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_SIZE),
                j = (0, c.cssValueToNumber)(f.default.EXPRESSION_SUGGESTIONS_STICKER_SUGGESTION_MARGIN),
                D = 2 * U + j + 2 * L,
                w = () => Promise.resolve();

            function B(e) {
                let {
                    isFocused: t,
                    isHidden: n,
                    sendability: l,
                    listIndex: i,
                    sticker: o,
                    onMouseOver: s,
                    onSelectSticker: d
                } = e, {
                    tabIndex: c,
                    ...f
                } = (0, u.useListItem)("".concat(i));
                return (0, r.jsxs)(p.Clickable, {
                    ...f,
                    tabIndex: n ? -1 : c,
                    className: a(P.suggestedExpression, {
                        [P.suggestedExpressionFocused]: t
                    }),
                    focusProps: {
                        enabled: !1
                    },
                    onClick: () => d(o, l),
                    onMouseOver: s,
                    children: [(0, r.jsx)(A.default, {
                        mask: A.default.Masks.STICKER_ROUNDED_RECT,
                        width: U + 4,
                        height: U + 4,
                        className: P.mask,
                        children: (0, r.jsx)("div", {
                            className: P.maskBackground
                        })
                    }), (0, r.jsx)(y.default, {
                        maskAsset: !0,
                        size: U,
                        sticker: o,
                        className: P.sticker
                    }), l !== g.StickerSendability.SENDABLE && (0, r.jsx)(x.default, {
                        size: 14
                    })]
                })
            }(i = l || (l = {}))[i.STICKER = 0] = "STICKER";
            var H = o.memo(function(e) {
                var t;
                let {
                    editorRef: n,
                    channel: l,
                    isEditorFocused: i,
                    onSelectSticker: s,
                    stickerIconVisible: c = !1,
                    submitButtonVisible: f = !1
                } = e, y = o.useContext(E.default), [x, A] = o.useState(null), [L, U] = o.useState(!1), [j, H] = o.useState(null), F = (0, S.useExpressionPickerStore)(e => null != e.activeView), G = o.useRef(null), [K, V] = o.useState(""), [W, Y] = o.useState(""), [q, z] = o.useState(!1), [Q, X] = o.useState(!1), Z = (0, O.useStickerSuggestionResults)(K, L, l), {
                    analyticsLocations: J,
                    AnalyticsLocationProvider: $
                } = (0, h.default)(m.default.EXPRESSION_SUGGESTIONS), {
                    handleTextChange: ee,
                    debouncedSetTextInputValue: et
                } = (0, O.useTextChangeHandler)({
                    setTextInputValue: V,
                    setHasDismissed: U,
                    setHasSelection: X,
                    setFocusedSuggestionType: A
                });
                o.useEffect(() => {
                    let e = e => {
                            z(e)
                        },
                        t = e => {
                            let t = "" !== e && null != e;
                            if (X(t), t) {
                                var l;
                                A(null), null === (l = n.current) || void 0 === l || l.focus()
                            }
                        };
                    return y.addListener("text-changed", ee), y.addListener("autocomplete-visibility-change", e), y.addListener("selection-changed", t), () => {
                        y.removeListener("text-changed", ee), y.removeListener("autocomplete-visibility-change", e), y.removeListener("selection-changed", t)
                    }
                }, [ee, n, y]), o.useLayoutEffect(() => {
                    null == x && H(null)
                }, [x]);
                let [en, el] = o.useState(!1);
                o.useLayoutEffect(() => {
                    requestAnimationFrame(() => {
                        let e = G.current;
                        el(i || (null == e ? void 0 : e.contains(null == e ? void 0 : e.ownerDocument.activeElement)) === !0)
                    })
                }, [i]);
                let ei = Z.length > 0,
                    er = en && !F && !q && !L && !Q && ei,
                    {
                        stickersNavigator: eo
                    } = function(e) {
                        let {
                            editorRef: t,
                            hasStickerResults: n,
                            shouldRenderSuggestions: l,
                            focusedSuggestionType: i,
                            setFocusedStickerListItem: r,
                            setFocusedSuggestionType: s,
                            setHasDismissed: a,
                            setTextInputValue: c
                        } = e, f = o.useCallback((e, t) => {
                            r(t)
                        }, [r]), p = (0, u.default)({
                            id: "expression-suggestions-stickers",
                            isEnabled: !0,
                            scrollToStart: w,
                            scrollToEnd: w,
                            orientation: d.Orientations.HORIZONTAL,
                            setFocus: f,
                            useVirtualFocus: !0
                        });
                        return o.useEffect(() => {
                            let e = e => {
                                var r, o;
                                if (l && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
                                    switch (e.key) {
                                        case "ArrowUp":
                                            e.preventDefault(), null == i && n && (p.focusFirstVisibleItem(), s(0));
                                            break;
                                        case "ArrowDown":
                                            s(null), null === (r = t.current) || void 0 === r || r.focus();
                                            break;
                                        case "Escape":
                                            s(null), a(!0), c(""), null === (o = t.current) || void 0 === o || o.focus()
                                    }
                                    0 === i && p.containerProps.onKeyDown(e)
                                }
                            };
                            return window.addEventListener("keydown", e, {
                                capture: !0
                            }), () => window.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [p, l, i, s, n, t, a, r, c]), {
                            stickersNavigator: p
                        }
                    }({
                        editorRef: n,
                        hasStickerResults: ei,
                        shouldRenderSuggestions: er,
                        focusedSuggestionType: x,
                        setFocusedSuggestionType: A,
                        setHasDismissed: U,
                        setFocusedStickerListItem: H,
                        setTextInputValue: V
                    }),
                    es = (e, t) => {
                        if (er) {
                            if (R.default.track(k.AnalyticEvents.AUTO_SUGGEST_EXPRESSION_SELECTED, {
                                    sticker_id: e.id,
                                    suggestion_trigger: W
                                }), t === g.StickerSendability.SENDABLE) U(!0), s(e, T.StickerSelectLocation.EXPRESSION_SUGGESTIONS), et.cancel(), V("");
                            else if ((0, v.isStandardSticker)(e)) {
                                let t = C.default.getStickerPack(e.pack_id);
                                null != t && (0, I.default)({
                                    stickerPack: t,
                                    analyticsLocations: J
                                })
                            }
                            y.emit("sticker-suggestions-hidden")
                        }
                    },
                    ea = o.useRef([]),
                    eu = o.useRef(!1);
                o.useEffect(() => {
                    er && (ea.current = Z), er !== eu.current && (y.emit(er ? "sticker-suggestions-shown" : "sticker-suggestions-hidden"), er && ((0, M.throttledTrackExpressionSuggestionDisplayed)(K), Y(K))), eu.current = er
                }, [y, er, Z, K]);
                let ed = !er,
                    ec = er ? Z : ea.current;
                return (0, r.jsx)($, {
                    children: (0, r.jsxs)(p.Clickable, {
                        tabIndex: ed ? -1 : 0,
                        "aria-hidden": ed,
                        className: a(P.container, {
                            [P.hidden]: ed,
                            [P.submitButtonOffset]: f,
                            [P.stickerIconOffset]: c
                        }),
                        innerRef: G,
                        style: {
                            minWidth: D
                        },
                        onClick: () => {
                            var e;
                            return null === (e = n.current) || void 0 === e ? void 0 : e.focus()
                        },
                        children: [(0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(u.ListNavigatorProvider, {
                                navigator: eo,
                                children: (0, r.jsx)(u.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            tabIndex: n,
                                            ...l
                                        } = e;
                                        return (0, r.jsx)("div", {
                                            className: P.stickerResults,
                                            ref: e => {
                                                t.current = e
                                            },
                                            onMouseLeave: () => {
                                                null == x && H(null)
                                            },
                                            tabIndex: ed ? -1 : n,
                                            ...l,
                                            children: ec.map((e, t) => {
                                                let {
                                                    sticker: n,
                                                    sendability: l
                                                } = e;
                                                return (0, r.jsx)(B, {
                                                    isFocused: j === "".concat(t),
                                                    isHidden: ed,
                                                    sendability: l,
                                                    listIndex: t,
                                                    onMouseOver: () => {
                                                        eo.setFocus("".concat(t)), H("".concat(t))
                                                    },
                                                    onSelectSticker: es,
                                                    sticker: n
                                                }, n.id)
                                            })
                                        })
                                    }
                                })
                            }), (0, r.jsxs)("div", {
                                className: P.bottomInformationTextContainer,
                                children: [(0, r.jsx)("div", {
                                    className: P.textDivider
                                }), (0, r.jsxs)("div", {
                                    className: P.bottomInformationLayout,
                                    children: [(0, r.jsx)(p.Text, {
                                        className: P.descriptionText,
                                        style: {
                                            maxWidth: D
                                        },
                                        variant: "text-sm/normal",
                                        children: null != j ? b.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_NAME.format({
                                            stickerName: null === (t = Z[+j]) || void 0 === t ? void 0 : t.sticker.name
                                        }) : b.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_SHORT_NAV_PROMPT.format({
                                            upHook: (e, t) => (0, r.jsx)(p.KeyCombo, {
                                                shortcut: "up",
                                                className: P.keybind
                                            }, t)
                                        })
                                    }), (0, r.jsx)(p.Clickable, {
                                        onClick: () => {
                                            R.default.track(k.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                                                enabled: !1,
                                                location: {
                                                    section: k.AnalyticsSections.EXPRESSION_PICKER
                                                }
                                            }), N.ExpressionSuggestionsEnabled.updateSetting(!1)
                                        },
                                        children: (0, r.jsx)(p.Tooltip, {
                                            text: b.default.Messages.EXPRESSION_SUGGESTIONS_STICKER_DISABLE,
                                            children: e => (0, r.jsx)(_.default, {
                                                ...e,
                                                className: P.closeIcon
                                            })
                                        })
                                    })]
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            className: P.containerBackground
                        })]
                    })
                })
            })
        },
        558901: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("446674"),
                o = n("280214"),
                s = n("271938"),
                a = n("18494"),
                u = n("943551"),
                d = n("232268"),
                c = n("798592"),
                f = n("39141"),
                p = n("172858");

            function m(e) {
                var t, n;
                let {
                    editorHeight: l,
                    textValue: d
                } = e, f = i.useRef(d), m = (0, o.useChannelAutocompleteLayerPosition)({
                    editorHeight: l
                }), h = (0, c.default)(), E = (0, r.useStateFromStores)([u.default, s.default, a.default], () => {
                    var e;
                    return u.default.isComboing(s.default.getId(), null !== (e = a.default.getChannelId()) && void 0 !== e ? e : "")
                }), S = null !== (t = null == m ? void 0 : m.left) && void 0 !== t ? t : 0, g = (null !== (n = null == m ? void 0 : m.top) && void 0 !== n ? n : 0) - 16, C = i.useMemo(() => .05 > Math.random(), [0 === d.length]);
                return i.useEffect(() => {
                    0 !== d.length && d !== f.current && E && (h.fire(S, g, C ? {
                        sprite: p.DUCK_CONFETTI_SPRITE
                    } : null), f.current = d)
                }, [d, E, S, g, C, h]), null
            }

            function h(e) {
                return (0, l.jsx)(d.default, {
                    confettiLocation: f.ConfettiLocation.CHAT_INPUT,
                    children: (0, l.jsx)(m, {
                        ...e
                    })
                })
            }
        },
        488705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("506083"), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("866227"),
                a = n.n(s),
                u = n("442761"),
                d = n("77078"),
                c = n("54239"),
                f = n("812204"),
                p = n("685665"),
                m = n("599110"),
                h = n("888400"),
                E = n("701909"),
                S = n("179935"),
                g = n("166960"),
                C = n("646718"),
                T = n("49111"),
                v = n("782340"),
                y = n("503330"),
                x = n("278410"),
                I = n("410957"),
                N = n("730708"),
                _ = n("754702");
            let A = async (e, t, n) => {
                n(!0), await (0, S.createReferralTrial)(e).then(() => {
                    t(), (0, c.popAllLayers)()
                }).finally(() => {
                    n(!1)
                })
            }, R = e => {
                let {
                    onClose: t,
                    referralsRemaining: n,
                    recipient: r,
                    analyticsLocations: s,
                    shouldShowBirthdayUX: a
                } = e, [u, c] = i.useState(!1), f = n - 1;
                return (0, l.jsxs)("div", {
                    className: y.confirmationContainer,
                    children: [(0, l.jsxs)("div", {
                        className: o({
                            [y.confirmationBody]: !a,
                            [y.confirmationBirthdayBody]: a
                        }),
                        children: [(0, l.jsx)(d.ModalCloseButton, {
                            onClick: t,
                            className: y.closeButton
                        }), (0, l.jsx)("img", {
                            alt: "",
                            src: a ? I : N,
                            className: y.confirmationImage
                        }), (0, l.jsx)(d.Heading, {
                            variant: "heading-xl/bold",
                            color: "interactive-active",
                            className: y.confirmationHeading,
                            children: v.default.Messages.SAHRE_NITRO_MODAL_CONFIRMATION_HEADER
                        }), (0, l.jsx)(d.Text, {
                            className: y.confirmationBodyCopy,
                            variant: "text-md/medium",
                            color: "header-primary",
                            children: f > 0 ? v.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL.format({
                                count: f
                            }) : v.default.Messages.SHARE_NITRO_MODAL_CONFIRMATION_GENERAL_LAST_REFERRAL
                        }), (0, l.jsx)("hr", {
                            className: y.confirmationBodySeparator
                        })]
                    }), (0, l.jsxs)("div", {
                        className: y.confirmationButtonContainer,
                        children: [(0, l.jsx)(d.Button, {
                            className: y.confirmationShareButton,
                            submitting: u,
                            onClick: () => {
                                A(r, t, c), m.default.track(T.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                    location_stack: s,
                                    step: C.ReferralTrialsAnalyticSteps.FLOW_COMPLETED,
                                    other_user_id: Number(r)
                                })
                            },
                            children: v.default.Messages.SHAER_NITRO_CONFIRMATION_BUTTON_TEXT
                        }), (0, l.jsx)("div", {
                            className: y.confirmationCancelButtonContainer,
                            children: (0, l.jsx)(d.Clickable, {
                                onClick: t,
                                children: (0, l.jsx)(d.Text, {
                                    variant: "text-sm/medium",
                                    className: y.confirmationCancelCopy,
                                    children: v.default.Messages.CANCEL
                                })
                            })
                        })]
                    })]
                })
            };

            function O(e) {
                let {
                    referralsRemaining: t,
                    channel: n,
                    onClose: r,
                    isResending: s
                } = e, [u, c] = i.useState(!1), [S, N] = i.useState(!1), O = n.isDM() && void 0 !== n.recipients ? n.recipients[0] : null, {
                    analyticsLocations: M
                } = (0, p.default)(f.default.REFERRAL_TRIALS_POPOUT), {
                    enabled: k
                } = g.default.useExperiment({
                    location: "200c24_1"
                }, {
                    autoTrackExposure: !0
                }), b = new Date("2023-06-15T08:00:00-08:00");
                return null == O ? null : u ? (0, l.jsx)(R, {
                    onClose: r,
                    referralsRemaining: t,
                    recipient: O,
                    analyticsLocations: M,
                    shouldShowBirthdayUX: k
                }) : (0, l.jsxs)("div", {
                    className: y.generalContainer,
                    children: [(0, l.jsxs)("div", {
                        className: y.generalBodyContainer,
                        children: [(0, l.jsx)("img", {
                            alt: "",
                            src: k ? I : _,
                            className: y.generalBodyImage
                        }), (0, l.jsxs)("div", {
                            className: y.innerContent,
                            children: [(0, l.jsx)(d.ModalCloseButton, {
                                onClick: r,
                                className: y.closeButton
                            }), (0, l.jsx)(d.Heading, {
                                className: y.generalHeading,
                                variant: "heading-xl/bold",
                                children: s ? v.default.Messages.SHARE_NITRO_RESEND_TRIAL_HEADER : v.default.Messages.SHARE_NITRO_MODAL_HEADER
                            }), (0, l.jsxs)(d.Text, {
                                className: y.generalBodyCopy,
                                variant: "text-md/normal",
                                children: [(0, l.jsx)(d.Anchor, {
                                    className: o(y.learnMore, {
                                        [y.learnMoreResendUnderlinedText]: s
                                    }),
                                    href: E.default.getArticleURL(T.HelpdeskArticles.SHARE_NITRO_FAQ),
                                    children: s ? v.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY : v.default.Messages.SHARE_NITRO_MODAL_BODY_GENERAL.format({
                                        count: t
                                    })
                                }), s ? (0, l.jsx)("div", {
                                    className: y.shareNitroResendCopySuffix,
                                    children: v.default.Messages.SHARE_NITRO_RESEND_TRIAL_BODY_2
                                }) : (0, l.jsx)("div", {
                                    children: v.default.Messages.SHARE_NITRO_MODAL_BODY_SHARE_THEM_BY.format({
                                        date: (0, h.dateFormat)(a(b), "LL")
                                    })
                                })]
                            })]
                        }), k && (0, l.jsx)("img", {
                            alt: "",
                            src: x,
                            className: y.birthdayBackgroundImage
                        })]
                    }), (0, l.jsx)("div", {
                        className: y.generalButtonContainer,
                        children: (0, l.jsx)(d.Button, {
                            className: y.generalShareButton,
                            submitting: S,
                            onClick: () => {
                                s ? A(O, r, N) : (c(!0), m.default.track(T.AnalyticEvents.SHARE_NITRO_FLOW_STEPS, {
                                    location_stack: M,
                                    step: C.ReferralTrialsAnalyticSteps.FLOW_STARTED,
                                    other_user_id: Number(O)
                                }))
                            },
                            children: s ? v.default.Messages.SHARE_NITRO_RESEND_BUTTON_TEXT : v.default.Messages.SHARE_NITRO_BUTTON_TEXT
                        })
                    })]
                })
            }

            function M(e) {
                let {
                    shouldShowPopout: t,
                    referralsRemaining: n,
                    channel: i,
                    onClose: r,
                    isResending: o
                } = e;
                return t ? (0, l.jsx)("div", {
                    onMouseDown: e => e.stopPropagation(),
                    children: (0, l.jsx)(u.Popout, {
                        shouldShow: !0,
                        position: "top",
                        align: "center",
                        renderPopout: e => (0, l.jsx)(O, {
                            ...e,
                            referralsRemaining: n,
                            channel: i,
                            onClose: r,
                            isResending: o
                        }),
                        onRequestClose: () => void 0,
                        closeOnScroll: !1,
                        ignoreModalClicks: !0,
                        children: () => (0, l.jsx)("div", {
                            className: y.popoutTarget
                        })
                    })
                }) : null
            }
        },
        262439: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("808653"), n("424973"), n("222007");
            var l = n("448105"),
                i = n.n(l),
                r = n("385976"),
                o = n("867805"),
                s = n("389480"),
                a = n("78581");
            let u = [];

            function d(e, t, n, l) {
                if (0 === e.length) return u;
                let d = t.reduce((e, t) => {
                        for (let n of t.items) t.categoryInfo.type !== s.SoundboardSoundGridSectionType.FAVORITES && n.type === s.SoundboardSoundItemType.SOUND && e.push(n.sound);
                        return e
                    }, []),
                    c = d.reduce((t, s) => (t[s.soundId] = function(e, t, n, l) {
                        var s;
                        let u = 0,
                            d = t.name.toLocaleLowerCase(),
                            c = null != t.emojiId ? r.default.getCustomEmojiById(t.emojiId) : null,
                            f = null != t.emojiName ? o.default.convertSurrogateToName(t.emojiName, !1) : null,
                            p = null != f ? o.default.getByName(f) : null,
                            m = null != c ? [c.name] : null !== (s = null == p ? void 0 : p.names) && void 0 !== s ? s : [];
                        return e === d && (u += 8), m.includes(e) && (u += 7), d.startsWith(e) && (u += 6), m.some(t => t.startsWith(e)) && (u += 5), d.endsWith(e) && (u += 4), m.some(t => t.endsWith(e)) && (u += 3), i(e, t.name.toLocaleLowerCase()) && (u += 2), m.some(t => i(e, t)) && (u += 1), u > 0 && (0, a.canUseSoundboardSound)(n, t, l) && (u += 100), u
                    }(e.toLocaleLowerCase(), s, n, l), t), {}),
                    f = d.filter(e => c[e.soundId] > 0).sort((e, t) => c[t.soundId] - c[e.soundId]);
                return f
            }
        },
        774473: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSortedGuildIdsForSoundboard: function() {
                    return d
                }
            }), n("843762");
            var l = n("884691"),
                i = n("65597"),
                r = n("957255"),
                o = n("677099"),
                s = n("697218"),
                a = n("719923"),
                u = n("843455");

            function d(e, t) {
                var n;
                let d = (0, i.default)([s.default], () => s.default.getCurrentUser()),
                    c = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : "",
                    f = (0, i.default)([o.default], () => o.default.getFlattenedGuildIds()),
                    p = (0, i.default)([r.default], () => null == e || null == e.guild_id || r.default.can(u.Permissions.USE_EXTERNAL_SOUNDS, e)),
                    m = l.useMemo(() => {
                        if ((a.default.canUseSoundboardEverywhere(d) || !t) && p) {
                            let e = "" !== c,
                                t = e ? f.filter(e => e !== c) : f;
                            return e && t.unshift(c), t
                        }
                        return [c]
                    }, [d, t, c, f, p]);
                return m
            }
        },
        557585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                },
                useSearchCategories: function() {
                    return v
                }
            }), n("222007"), n("424973"), n("834022");
            var l = n("884691"),
                i = n("249654"),
                r = n("446674"),
                o = n("817963"),
                s = n("872173"),
                a = n("305961"),
                u = n("957255"),
                d = n("697218"),
                c = n("719923"),
                f = n("880342"),
                p = n("469607"),
                m = n("235004"),
                h = n("389480"),
                E = n("774473"),
                S = n("846325");

            function g(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = e.map(e => ({
                        type: h.SoundboardSoundItemType.SOUND,
                        sound: e
                    }));
                return t ? n.sort((e, t) => i.default.compare(e.sound.soundId, t.sound.soundId)) : n
            }

            function C(e, t) {
                var n;
                let l = null !== (n = t.get(S.DEFAULT_SOUND_GUILD_ID)) && void 0 !== n ? n : S.EMPTY_SOUND_LIST;
                e.push({
                    key: h.SoundboardSoundGridSectionType.DEFAULTS,
                    categoryInfo: {
                        type: h.SoundboardSoundGridSectionType.DEFAULTS
                    },
                    items: g(l)
                })
            }

            function T(e) {
                let {
                    filterOutEmptyCurrentGuild: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], i = (0, r.useStateFromStores)([d.default], () => d.default.getCurrentUser()), [T, v, y] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.getSounds(), m.default.getFavorites(), m.default.isFetching()]), x = (0, r.useStateFromStoresArray)([p.default], () => p.default.recentlyHeardSoundIds), {
                    canSeeRecentlyHeard: I,
                    canSeeFrequentlyPlayed: N
                } = (0, f.useRecentlyHeardExperiment)({
                    location: "soundboard-useSoundGrid",
                    autoTrackExposure: !0
                }), _ = function() {
                    l.useEffect(() => {
                        s.FrecencyUserSettingsActionCreators.loadIfNecessary()
                    }, []);
                    let e = (0, r.useStateFromStores)([p.default], () => p.default.frecentlyPlayedSounds);
                    return e
                }(), A = (0, E.useSortedGuildIdsForSoundboard)(e, !1), R = (0, r.useStateFromStoresArray)([a.default], () => {
                    let e = [];
                    return A.forEach(t => {
                        let n = a.default.getGuild(t);
                        null != n && e.push(n)
                    }), e
                }), O = c.default.canUseSoundboardEverywhere(i), M = (0, r.useStateFromStores)([a.default], () => a.default.getGuild(null == e ? void 0 : e.guild_id)), k = (0, r.useStateFromStores)([u.default], () => {
                    let {
                        canCreateExpressions: e
                    } = (0, o.getManageResourcePermissions)(M);
                    return e
                }, [M]);
                return l.useMemo(() => {
                    let e = [];
                    if (n) return C(e, T), {
                        categories: e,
                        isFetching: y
                    };
                    if (! function(e, t, n, l) {
                            let i = [],
                                r = [...t, S.DEFAULT_SOUND_GUILD_ID];
                            for (let e of r) {
                                var o;
                                let t = null !== (o = n.get(e)) && void 0 !== o ? o : [];
                                for (let e of t) l.has(e.soundId) && i.push(e)
                            }
                            let s = g(i);
                            s.length > 0 && e.push({
                                key: h.SoundboardSoundGridSectionType.FAVORITES,
                                categoryInfo: {
                                    type: h.SoundboardSoundGridSectionType.FAVORITES
                                },
                                items: s
                            })
                        }(e, A, T, v), I && ! function(e, t, n) {
                            let l = Array.from(t.values()).flat(),
                                i = [];
                            for (let e of n) {
                                let t = l.find(t => t.soundId.toString() === e);
                                null != t && i.push(t)
                            }
                            let r = g(i, !1);
                            r.length > 0 && e.push({
                                key: h.SoundboardSoundGridSectionType.RECENTLY_HEARD,
                                categoryInfo: {
                                    type: h.SoundboardSoundGridSectionType.RECENTLY_HEARD
                                },
                                items: r
                            })
                        }(e, T, x), N) {
                        var l, i;
                        l = e, (i = _).length > 0 && l.push({
                            key: h.SoundboardSoundGridSectionType.FREQUENTLY_USED,
                            categoryInfo: {
                                type: h.SoundboardSoundGridSectionType.FREQUENTLY_USED
                            },
                            items: g(i, !1)
                        })
                    }
                    return ! function(e, t, n, l, i) {
                        var r;
                        if (null == t) return;
                        let o = null !== (r = l.get(t.id)) && void 0 !== r ? r : [],
                            s = g(o),
                            a = o.length < t.getMaxSoundboardSlots() && n,
                            u = 0 === s.length;
                        (a || u) && !i && s.push({
                            type: h.SoundboardSoundItemType.ADD_SOUND,
                            guild: t
                        });
                        !(i && u) && e.push({
                            categoryInfo: {
                                type: h.SoundboardSoundGridSectionType.GUILD,
                                guild: t
                            },
                            key: t.id,
                            items: s
                        })
                    }(e, M, k, T, t), !O && C(e, T), ! function(e, t, n, l) {
                        for (let r of t) {
                            var i;
                            if (r.id === n) continue;
                            let t = null !== (i = l.get(r.id)) && void 0 !== i ? i : [],
                                o = g(t);
                            o.length > 0 && e.push({
                                categoryInfo: {
                                    type: h.SoundboardSoundGridSectionType.GUILD,
                                    guild: r
                                },
                                key: r.id,
                                items: o
                            })
                        }
                    }(e, R, null == M ? void 0 : M.id, T), O && C(e, T), {
                        categories: e,
                        isFetching: y
                    }
                }, [A, T, v, x, _, N, I, M, k, t, O, R, n, y])
            }

            function v(e, t, n) {
                return l.useMemo(() => n.length > 0 ? [{
                    key: h.SoundboardSoundGridSectionType.SEARCH,
                    categoryInfo: {
                        type: h.SoundboardSoundGridSectionType.SEARCH
                    },
                    items: g(t, !1)
                }] : e, [e, n.length, t])
            }
        },
        23106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("884691"),
                i = n("446674"),
                r = n("462550"),
                o = n("235004"),
                s = n("78581"),
                a = n("520497"),
                u = n("812809");

            function d(e, t) {
                let {
                    currentPreviewRef: n
                } = l.useContext(r.default), d = (0, i.useStateFromStores)([o.default], () => o.default.isPlayingSound(e.soundId), [e]), c = l.useCallback(l => {
                    null != n.current && n.current.pause(), null != t && (0, s.playSound)(e, t, l)
                }, [e, n, t]), f = l.useCallback(() => {
                    let t = new Audio((0, a.default)(e.soundId));
                    null != n.current && n.current.pause(), n.current = t, t.currentTime = 0, t.volume = (0, u.default)(e.volume), t.play()
                }, [e, n]);
                return l.useCallback(() => () => {
                    var e;
                    return null === (e = n.current) || void 0 === e ? void 0 : e.pause()
                }, [n]), {
                    playSoundboardSound: c,
                    isPlayingSound: d,
                    previewSound: f
                }
            }
        },
        553372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SecondaryActionButton: function() {
                    return M
                },
                default: function() {
                    return k
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("974667"),
                a = n("446674"),
                u = n("862337"),
                d = n("669491"),
                c = n("77078"),
                f = n("430568"),
                p = n("206230"),
                m = n("526887"),
                h = n("697218"),
                E = n("118849"),
                S = n("671434"),
                g = n("132755"),
                C = n("151185"),
                T = n("368121"),
                v = n("305122"),
                y = n("235004"),
                x = n("389480"),
                I = n("78581"),
                N = n("23106"),
                _ = n("796864"),
                A = n("172858"),
                R = n("782340"),
                O = n("955761");

            function M(e) {
                let {
                    disabled: t = !1,
                    onClick: n,
                    text: i,
                    children: r
                } = e;
                return (0, l.jsx)(c.Tooltip, {
                    text: i,
                    children: e => (0, l.jsx)(c.Clickable, {
                        ...e,
                        "aria-label": i,
                        className: o(O.secondaryButton, {
                            [O.buttonDisabled]: t
                        }),
                        onClick: n,
                        children: r
                    })
                })
            }
            var k = i.forwardRef(function(e, t) {
                var n, r, k;
                let {
                    sound: b,
                    channel: P,
                    className: L,
                    focused: U,
                    forceSecondaryActions: j = !1,
                    interactive: D = !0,
                    enableSecondaryActions: w = !1,
                    suppressPlaySound: B,
                    onMouseEnter: H,
                    onSelectItem: F,
                    analyticsLocations: G,
                    buttonOverlay: K = x.SoundButtonOverlay.PLAY,
                    ...V
                } = e, {
                    soundId: W,
                    name: Y,
                    emojiId: q,
                    emojiName: z
                } = b, Q = (0, a.useStateFromStores)([h.default], () => h.default.getCurrentUser()), X = (0, _.useSoundButtonContextMenu)(b, null == P ? void 0 : P.guild_id), {
                    playSoundboardSound: Z,
                    previewSound: J,
                    isPlayingSound: $
                } = (0, N.default)(b, null !== (n = null == P ? void 0 : P.id) && void 0 !== n ? n : null), {
                    createMultipleConfettiAt: ee
                } = i.useContext(m.ConfettiCannonContext), et = i.useRef(null);
                let en = (r = b.soundId, k = et.current, i.useMemo(() => {
                        if (null == k || "1" !== r) return {
                            x: 0,
                            y: 0
                        };
                        let e = k.getBoundingClientRect();
                        return {
                            x: e.left + e.width / 2,
                            y: e.top + e.height / 2
                        }
                    }, [k, r])),
                    el = (0, a.useStateFromStores)([p.default], () => p.default.useReducedMotion),
                    ei = i.useRef(.01),
                    er = i.useRef(new u.Interval),
                    eo = "1" === b.soundId,
                    es = (0, a.useStateFromStores)([y.default], () => y.default.isFavoriteSound(W), [W]),
                    ea = "sound-".concat(b.soundId),
                    eu = (0, s.useListItem)(ea),
                    ed = null != q || null != z,
                    ec = !(0, I.canUseSoundboardSound)(Q, b, P);

                function ef(e) {
                    e.stopPropagation(), e.currentTarget.blur(), es ? (0, v.removeFavoriteSound)(W) : (0, v.addFavoriteSound)(W)
                }

                function ep(e) {
                    e.stopPropagation(), e.currentTarget.blur(), J()
                }
                let em = j || w && !ec,
                    eh = () => (0, l.jsxs)("div", {
                        className: O.buttonOverlay,
                        children: [(0, l.jsx)("div", {
                            className: o({
                                [O.buttonOverlayBackground]: !B
                            })
                        }), (0, l.jsxs)("div", {
                            className: O.buttonOverlayActions,
                            children: [eS(), !B && (0, l.jsx)(g.default, {
                                className: O.playIcon
                            }), eE()]
                        })]
                    });

                function eE() {
                    return em ? (0, l.jsx)(M, {
                        disabled: !D && !j,
                        onClick: ef,
                        text: R.default.Messages.SOUNDBOARD_SOUND_FAVORITE_SOUND.format({
                            emojiName: b.emojiName,
                            soundName: b.name
                        }),
                        children: es ? (0, l.jsx)(S.default, {
                            className: o(O.secondaryIcon, O.favoriteIconFavorite),
                            color: d.default.unsafe_rawColors.GOLD.css
                        }) : (0, l.jsx)(E.default, {
                            className: O.secondaryIcon
                        })
                    }) : null
                }

                function eS() {
                    return em ? (0, l.jsx)(M, {
                        disabled: !D && !j,
                        onClick: ep,
                        text: R.default.Messages.SOUNDBOARD_SOUND_PREVIEW_SOUND.format({
                            emojiName: b.emojiName,
                            soundName: b.name
                        }),
                        children: (0, l.jsx)(T.default, {
                            className: O.secondaryIcon
                        })
                    }) : null
                }
                return i.useEffect(() => {
                    let e = er.current;
                    return eo && e.start(1e3, () => {
                        ei.current = Math.max(ei.current - .01, .01)
                    }), () => e.stop()
                }, [eo]), (0, l.jsxs)("li", {
                    ref: t,
                    className: O.soundButtonWrapper,
                    onMouseEnter: H,
                    children: [(0, l.jsxs)(c.ClickableContainer, {
                        ...V,
                        buttonProps: {
                            ...eu,
                            id: ea,
                            role: "button"
                        },
                        "aria-label": R.default.Messages.SOUNDBOARD_PLAY_SOUND.format({
                            emojiName: b.emojiName,
                            soundName: b.name
                        }),
                        className: o(L, O.soundButton, {
                            [O.playing]: $,
                            [O.hoverActiveBackground]: B,
                            [O.soundButtonInteractive]: D,
                            [O.buttonDisabled]: !D && !j,
                            [O.premiumDisabled]: ec && !j,
                            [O.buttonDisabledSecondaryActionsEnabled]: !D && j,
                            [O.focused]: D && U
                        }),
                        onClick: function() {
                            if (eo && !el && (ei.current = Math.min(ei.current + .01, .1), Math.random() < ei.current && ee(en.x, en.y, void 0, void 0, {
                                    sprite: A.DUCK_CONFETTI_SPRITE
                                })), null != F) {
                                F();
                                return
                            }
                            B || Z(G)
                        },
                        onContextMenu: w && !ec ? X : void 0,
                        children: [(0, l.jsxs)("div", {
                            className: O.soundInfo,
                            "aria-hidden": !0,
                            ref: et,
                            children: [ed && (0, l.jsx)(f.default, {
                                emojiId: q,
                                emojiName: z,
                                className: O.emoji
                            }), (0, l.jsx)(c.Text, {
                                variant: "text-xs/medium",
                                color: D ? "header-primary" : "text-muted",
                                className: o(O.soundName, {
                                    [O.hasEmoji]: ed
                                }),
                                children: Y
                            })]
                        }), function() {
                            switch (K) {
                                case x.SoundButtonOverlay.ADD:
                                    return (0, l.jsxs)("div", {
                                        className: O.addButtonOverlay,
                                        children: [(0, l.jsx)("div", {
                                            className: O.buttonOverlayBackground
                                        }), (0, l.jsxs)("div", {
                                            className: O.buttonOverlayActions,
                                            children: [eS(), (0, l.jsxs)("div", {
                                                className: O.addButton,
                                                children: [(0, l.jsx)(C.default, {
                                                    className: O.plusSign
                                                }), (0, l.jsx)(c.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "header-primary",
                                                    children: R.default.Messages.GIFT_SELECT_SOUNDBOARD_ADD
                                                })]
                                            }), eE()]
                                        })]
                                    });
                                case x.SoundButtonOverlay.PLAY:
                                default:
                                    return eh()
                            }
                        }()]
                    }), !b.available && (0, l.jsx)(c.Tooltip, {
                        text: R.default.Messages.SOUNDBOARD_SOUND_DISABLED_PREMIUM_TIER_LOST,
                        children: e => (0, l.jsx)("div", {
                            className: O.unavailableTooltip,
                            ...e
                        })
                    })]
                })
            })
        },
        122557: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("77078"),
                s = n("817963"),
                a = n("151185"),
                u = n("569717"),
                d = n("782340"),
                c = n("231641");

            function f(e) {
                let {
                    guild: t,
                    focused: n,
                    ...i
                } = e, {
                    canCreateExpressions: f
                } = (0, s.useManageResourcePermissions)(t);
                return (0, l.jsx)(o.Tooltip, {
                    text: d.default.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
                    shouldShow: !f,
                    children: e => (0, l.jsx)("li", {
                        className: c.soundButtonWrapper,
                        ...e,
                        children: (0, l.jsxs)(o.ClickableContainer, {
                            ...i,
                            "aria-label": d.default.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
                                guildName: t.name
                            }),
                            className: r(c.soundAddButton, {
                                [c.focused]: n,
                                [c.disabled]: !f
                            }),
                            onClick: () => (0, u.default)(t.id),
                            children: [(0, l.jsx)(a.default, {
                                className: c.soundAddIcon
                            }), (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: f ? "header-primary" : "text-muted",
                                children: d.default.Messages.SOUNDBOARD_SOUND_ADD_SOUND
                            })]
                        })
                    })
                })
            }
        },
        478477: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("308472"),
                a = n("77078"),
                u = n("917764"),
                d = n("986632"),
                c = n("405607"),
                f = n("423080"),
                p = n("93393"),
                m = n("153769"),
                h = n("671434"),
                E = n("389480"),
                S = n("782340"),
                g = n("510585");
            let C = [8, 8, 8, 8];

            function T(e) {
                let {
                    icon: t,
                    isSelected: n,
                    onClick: i,
                    ...r
                } = e;
                return (0, l.jsx)(a.Clickable, {
                    ...r,
                    onClick: i,
                    className: o(g.categoryIcon, {
                        [g.selected]: n
                    }),
                    children: (0, l.jsx)(t, {
                        className: g.categoryIconIcon
                    })
                })
            }

            function v(e, t, n, i) {
                return (0, l.jsx)(a.Tooltip, {
                    text: function(e) {
                        switch (e.categoryInfo.type) {
                            case E.SoundboardSoundGridSectionType.FAVORITES:
                                return S.default.Messages.FAVORITES;
                            case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                return S.default.Messages.RECENTLY_HEARD;
                            case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                return S.default.Messages.FREQUENTLY_USED;
                            case E.SoundboardSoundGridSectionType.GUILD:
                                return (0, l.jsx)(f.GuildTooltipText, {
                                    guild: e.categoryInfo.guild,
                                    includeActivity: !1
                                });
                            case E.SoundboardSoundGridSectionType.DEFAULTS:
                                return S.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                        }
                    }(e),
                    "aria-label": function(e) {
                        switch (e.categoryInfo.type) {
                            case E.SoundboardSoundGridSectionType.FAVORITES:
                                return S.default.Messages.FAVORITES;
                            case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                return S.default.Messages.RECENTLY_HEARD;
                            case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                return S.default.Messages.FREQUENTLY_USED;
                            case E.SoundboardSoundGridSectionType.GUILD:
                                return e.categoryInfo.guild.name;
                            case E.SoundboardSoundGridSectionType.DEFAULTS:
                                return S.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS
                        }
                    }(e),
                    position: "right",
                    children: t => (function(e, t, n, i) {
                        switch (e.categoryInfo.type) {
                            case E.SoundboardSoundGridSectionType.FAVORITES:
                                return (0, l.jsx)(T, {
                                    ...i,
                                    icon: h.default,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            case E.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                return (0, l.jsx)(T, {
                                    ...i,
                                    icon: p.default,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            case E.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                return (0, l.jsx)(T, {
                                    ...i,
                                    icon: s.AnalyticsIcon,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            case E.SoundboardSoundGridSectionType.GUILD:
                                return (0, l.jsx)(a.Clickable, {
                                    ...i,
                                    className: g.category,
                                    onClick: t,
                                    children: (0, l.jsx)(u.default, {
                                        guild: e.categoryInfo.guild,
                                        isSelected: n
                                    })
                                }, e.key);
                            case E.SoundboardSoundGridSectionType.DEFAULTS:
                                return (0, l.jsx)(T, {
                                    ...i,
                                    icon: m.default,
                                    onClick: t,
                                    isSelected: n
                                }, e.key);
                            default:
                                return null
                        }
                    })(e, n, i, t)
                })
            }

            function y(e) {
                let {
                    soundboardListRef: t,
                    categories: n,
                    listPadding: r = C
                } = e, o = i.useRef(null);
                return (0, l.jsx)(c.default, {
                    className: g.categoryList,
                    categoryListRef: o,
                    expressionsListRef: t,
                    store: d.SoundboardPickerStore,
                    categories: n,
                    listPadding: r,
                    renderCategoryListItem: v,
                    rowCount: n.length,
                    categoryHeight: 40
                })
            }
        },
        181021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("65597"),
                r = n("151426"),
                o = n("77078"),
                s = n("430568"),
                a = n("206230"),
                u = n("10641"),
                d = n("917764"),
                c = n("538282"),
                f = n("562323"),
                p = n("305961"),
                m = n("227602"),
                h = n("471671"),
                E = n("945330"),
                S = n("95689"),
                g = n("423487"),
                C = n("773336"),
                T = n("13798"),
                v = n("235004"),
                y = n("49111"),
                x = n("782340"),
                I = n("762484");

            function N(e) {
                let {
                    soundboardSound: t,
                    closePicker: N
                } = e, _ = (0, c.useExpressionPickerStore)(e => e.searchQuery), A = (0, i.default)([v.default], () => null != t && v.default.isFavoriteSound(t.soundId)), R = (0, i.default)([p.default], () => p.default.getGuild(null == t ? void 0 : t.guildId)), O = (0, i.default)([a.default], () => a.default.useReducedMotion, []), M = (0, i.default)([h.default], () => h.default.isFocused()), k = (0, i.default)([m.default], () => m.default.getKeybindForAction(y.GlobalKeybindActions.SOUNDBOARD_HOLD));
                if (null != t && _.length > 0) return (0, l.jsx)(f.default, {
                    graphicPrimary: null != t.emojiId || null != t.emojiName ? (0, l.jsx)(s.default, {
                        emojiId: t.emojiId,
                        emojiName: t.emojiName,
                        className: I.emoji
                    }) : (0, l.jsx)(S.default, {
                        className: I.emoji
                    }),
                    graphicSecondary: null != R ? (0, l.jsx)(d.default, {
                        guild: R,
                        shouldAnimate: !O && M
                    }) : null,
                    titlePrimary: t.name,
                    titleSecondary: null == R ? void 0 : R.name,
                    isFavorite: A
                });
                let b = () => {
                        N(), (0, o.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("644926").then(n.bind(n, "644926"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        })
                    },
                    P = (0, u.isDismissibleContentDismissed)(r.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
                    L = null != k && (0, C.isWindows)() && !P ? x.default.Messages.SOUNDBOARD_KEYBIND_HINT_NO_POPOUT_WHEEL_SUPPORT.format({
                        keybind: (0, T.toString)(k.shortcut, !0),
                        openSettingsHook: (e, t) => (0, l.jsx)(o.Anchor, {
                            onClick: b,
                            children: e
                        }, t)
                    }) : null;
                return null == L ? null : (0, l.jsxs)("div", {
                    className: I.keybindHint,
                    children: [(0, l.jsx)(g.default, {
                        className: I.warningIcon
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        color: "text-normal",
                        className: I.keybindHintText,
                        children: L
                    }), (0, l.jsx)(o.Clickable, {
                        className: I.closeButton,
                        onClick: () => (0, u.markDismissibleContentAsDismissed)(r.DismissibleContent.SOUNDBOARD_KEYBIND_TIP),
                        children: (0, l.jsx)(E.default, {
                            width: 16,
                            height: 16
                        })
                    })]
                })
            }
        },
        299069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("819855"),
                a = n("77078"),
                u = n("997289"),
                d = n("841098"),
                c = n("812204"),
                f = n("685665"),
                p = n("626301"),
                m = n("635956"),
                h = n("599110"),
                E = n("719923"),
                S = n("49111"),
                g = n("646718"),
                C = n("782340"),
                T = n("665946"),
                v = n("350028");

            function y(e) {
                let {
                    onClose: t,
                    closePopout: r
                } = e, y = (0, d.default)(), [x, I] = i.useState(!1), {
                    location: N
                } = (0, u.useAnalyticsContext)(), _ = i.useMemo(() => ({
                    ...N,
                    section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER
                }), [N]), {
                    analyticsLocations: A
                } = (0, f.default)(c.default.PREMIUM_UPSELL), R = (0, s.isThemeLight)(y) ? n("602291") : n("609708");
                i.useEffect(() => {
                    h.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: g.PremiumUpsellTypes.SOUND_PICKER_SOUND_CLICKED,
                        is_external: !0,
                        location: {
                            ..._,
                            object: S.AnalyticsObjects.SOUNDBOARD_SOUND
                        },
                        location_stack: A,
                        sku_id: E.default.getSkuIdForPremiumType(g.PremiumTypes.TIER_2)
                    })
                }, [A, _]);
                let O = i.useCallback(() => {
                    h.default.track(S.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                        location_section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER_UPSELL
                    }), (0, p.navigateToPremiumMarketingPage)(), r()
                }, [r]);
                return (0, l.jsxs)("div", {
                    className: o(v.premiumPromo, T.container),
                    children: [(0, l.jsx)(a.Clickable, {
                        className: v.premiumPromoClose,
                        onClick: t,
                        children: C.default.Messages.CLOSE
                    }), (0, l.jsx)("img", {
                        "aria-hidden": !0,
                        alt: "",
                        className: o(v.premiumPromoImage, v.premiumPromoImageSmaller, T.image),
                        src: R
                    }), (0, l.jsx)(a.Heading, {
                        variant: "heading-lg/normal",
                        color: "header-primary",
                        className: v.premiumPromoTitle,
                        children: C.default.Messages.SOUNDBOARD_NITRO_UPSELL_TITLE
                    }), (0, l.jsx)(a.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        className: v.premiumPromoDescription,
                        children: C.default.Messages.SOUNDBOARD_NITRO_UPSELL_BODY.format({
                            onClick: O
                        })
                    }), (0, l.jsx)(m.default, {
                        subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
                        submitting: x,
                        premiumModalAnalyticsLocation: {
                            section: S.AnalyticsSections.SOUNDBOARD_SOUND_PICKER,
                            object: S.AnalyticsObjects.BUTTON_CTA
                        },
                        size: a.Button.Sizes.SMALL,
                        color: a.Button.Colors.GREEN,
                        onClick: () => {
                            I(!0)
                        },
                        onSubscribeModalClose: e => {
                            I(!1), e && t()
                        }
                    })]
                })
            }
        },
        534108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("308472"),
                u = n("77078"),
                d = n("272030"),
                c = n("96386"),
                f = n("685665"),
                p = n("917764"),
                m = n("986632"),
                h = n("538282"),
                E = n("522096"),
                S = n("845579"),
                g = n("697218"),
                C = n("800762"),
                T = n("476765"),
                v = n("461380"),
                y = n("93393"),
                x = n("153769"),
                I = n("671434"),
                N = n("229915"),
                _ = n("368121"),
                A = n("719923"),
                R = n("389480"),
                O = n("78581"),
                M = n("262439"),
                k = n("557585"),
                b = n("553372"),
                P = n("122557"),
                L = n("478477"),
                U = n("181021"),
                j = n("299069"),
                D = n("569717"),
                w = n("782340"),
                B = n("872759");
            let H = [8, 0, 8, 8];

            function F(e) {
                return 0 === e ? 16 : 32
            }

            function G(e) {
                let {
                    categoryInfo: t,
                    collapsed: n,
                    toggleCollapsed: i,
                    index: r
                } = e;
                return (0, l.jsxs)(u.Clickable, {
                    className: o(B.sectionHeader, {
                        [B.notFirstSectionHeader]: 0 !== r
                    }),
                    onClick: i,
                    children: [function() {
                        switch (t.type) {
                            case R.SoundboardSoundGridSectionType.FAVORITES:
                                return (0, l.jsx)(I.default, {
                                    className: B.headerIcon
                                });
                            case R.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                return (0, l.jsx)(y.default, {
                                    className: B.headerIcon
                                });
                            case R.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                return (0, l.jsx)(a.AnalyticsIcon, {
                                    className: B.headerIcon
                                });
                            case R.SoundboardSoundGridSectionType.GUILD:
                                return (0, l.jsx)(p.default, {
                                    guild: t.guild,
                                    height: 16,
                                    width: 16
                                });
                            case R.SoundboardSoundGridSectionType.DEFAULTS:
                                return (0, l.jsx)(x.default, {
                                    className: B.headerIcon
                                });
                            case R.SoundboardSoundGridSectionType.SEARCH:
                                return (0, l.jsx)(N.default, {
                                    className: B.headerIcon
                                })
                        }
                    }(), (0, l.jsx)(u.Heading, {
                        variant: "eyebrow",
                        color: "none",
                        className: B.sectionTitle,
                        children: function() {
                            switch (t.type) {
                                case R.SoundboardSoundGridSectionType.FAVORITES:
                                    return w.default.Messages.FAVORITES;
                                case R.SoundboardSoundGridSectionType.RECENTLY_HEARD:
                                    return w.default.Messages.RECENTLY_HEARD;
                                case R.SoundboardSoundGridSectionType.FREQUENTLY_USED:
                                    return w.default.Messages.FREQUENTLY_USED;
                                case R.SoundboardSoundGridSectionType.GUILD:
                                    return t.guild.name;
                                case R.SoundboardSoundGridSectionType.DEFAULTS:
                                    return w.default.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
                                case R.SoundboardSoundGridSectionType.SEARCH:
                                    return w.default.Messages.SEARCH_RESULTS_SECTION_LABEL
                            }
                        }()
                    }), (0, l.jsx)(v.default, {
                        className: B.headerIcon,
                        direction: n ? v.default.Directions.RIGHT : v.default.Directions.DOWN
                    })]
                })
            }

            function K() {
                return (0, l.jsx)(c.default, {
                    message: w.default.Messages.SOUNDBOARD_SEARCH_EMPTY_STATE_BODY
                })
            }

            function V(e) {
                let {
                    descriptors: t,
                    soundButtonProps: n,
                    rowIndex: r,
                    isUsingKeyboardNavigation: o,
                    suppressPlaySound: s,
                    gridRowProps: a,
                    getItemProps: u,
                    onSelectItem: d,
                    onItemMouseEnter: c,
                    buttonOverlay: f
                } = e, p = m.SoundboardPickerStore.useStore(e => e.inspectedExpressionPosition);
                return (0, l.jsx)("ul", {
                    ...a,
                    className: B.soundRow,
                    children: t.map((e, t) => {
                        let l = "item-".concat(t),
                            a = o && p.rowIndex === r && p.columnIndex === t;
                        switch (e.item.type) {
                            case R.SoundboardSoundItemType.SOUND:
                                return (0, i.createElement)(b.default, {
                                    ...u(t),
                                    ...n,
                                    key: "".concat(l, "-").concat(e.item.sound.soundId),
                                    sound: e.item.sound,
                                    suppressPlaySound: s,
                                    focused: a,
                                    onMouseEnter: () => c(t),
                                    onSelectItem: () => d(e),
                                    enableSecondaryActions: !0,
                                    buttonOverlay: f
                                });
                            case R.SoundboardSoundItemType.ADD_SOUND:
                                return (0, i.createElement)(P.default, {
                                    ...u(t),
                                    key: l,
                                    guild: e.item.guild,
                                    focused: a
                                })
                        }
                    })
                })
            }

            function W(e) {
                let {
                    guildId: t,
                    channel: r,
                    containerWidth: o,
                    onClose: a,
                    onSelect: c,
                    suppressPlaySound: p = !1,
                    shouldShowUpsell: v = !0,
                    gridNotice: y,
                    soundButtonOverlay: x,
                    listPadding: I,
                    renderHeader: N,
                    defaultSoundsOnly: b = !1
                } = e, {
                    analyticsLocations: P
                } = (0, f.default)(), [W, Y] = i.useState(!1), q = (0, s.useStateFromStores)([g.default], () => g.default.getCurrentUser()), z = (0, s.useStateFromStores)([C.default], () => {
                    var e;
                    return C.default.getVoiceState(t, null !== (e = null == q ? void 0 : q.id) && void 0 !== e ? e : "")
                }), Q = (null == z ? void 0 : z.selfDeaf) || (null == z ? void 0 : z.mute) || (null == z ? void 0 : z.suppress), X = (0, h.useExpressionPickerStore)(e => e.searchQuery), Z = (0, T.useUID)(), {
                    categories: J
                } = (0, k.default)(r, void 0, b), [$, ee] = i.useState([]), et = (0, k.useSearchCategories)(J, $, X), en = S.SoundboardPickerCollapsedSections.useSetting(), el = i.useMemo(() => new Set(en), [en]), ei = null == r, er = A.default.canUseCustomCallSounds(q), eo = i.useCallback(e => {
                    let t = !el.has(e);
                    t ? el.add(e) : el.delete(e), S.SoundboardPickerCollapsedSections.updateSetting(Array.from(el))
                }, [el]), es = i.useCallback((e, t) => {
                    if (!p && (0, O.canUseSoundboardSound)(q, e, r, !1)) {
                        var n;
                        (0, O.playSound)(e, null !== (n = null == r ? void 0 : r.id) && void 0 !== n ? n : "", t)
                    } else {
                        if ((0, O.canUseSoundboardSound)(q, e, r)) return;
                        v && Y(!0)
                    }
                }, [p, q, r, v]), ea = i.useCallback(e => {
                    switch (e.item.type) {
                        case R.SoundboardSoundItemType.SOUND:
                            return null == c || c(e.item.sound), es(e.item.sound, P);
                        case R.SoundboardSoundItemType.ADD_SOUND:
                            return (0, D.default)(e.item.guild.id)
                    }
                }, [P, es, c]), eu = i.useCallback((e, t, n, i, o) => (0, l.jsx)(V, {
                    descriptors: e,
                    rowIndex: n.rowIndex,
                    isUsingKeyboardNavigation: n.isUsingKeyboardNavigation,
                    gridRowProps: t,
                    getItemProps: i,
                    onItemMouseEnter: o,
                    suppressPlaySound: p,
                    onSelectItem: ea,
                    soundButtonProps: {
                        channel: r,
                        interactive: ei ? er : !Q,
                        forceSecondaryActions: ei,
                        analyticsLocations: P
                    },
                    buttonOverlay: x
                }, "row-".concat(t["aria-rowindex"])), [ea, r, Q, p, P, ei, er, x]), ed = i.useCallback((e, t) => {
                    let n = "".concat(e.key);
                    return (0, l.jsx)(G, {
                        categoryInfo: e.categoryInfo,
                        toggleCollapsed: () => eo(n),
                        collapsed: el.has(n),
                        index: t
                    }, "header-".concat(n))
                }, [el, eo]), ec = i.useCallback(e => ee((0, M.default)(e, J, q, r)), [r, q, J]), ef = i.useCallback(e => {
                    (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("136137").then(n.bind(n, "136137"));
                        return t => (0, l.jsx)(e, {
                            ...t
                        })
                    })
                }, []), ep = i.useCallback(() => (0, l.jsx)(u.Clickable, {
                    tabIndex: 0,
                    className: B.settingsClickArea,
                    onClick: ef,
                    "aria-label": w.default.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
                    children: (0, l.jsx)(_.default, {
                        className: B.settingsIcon
                    })
                }), [ef]), em = i.useCallback(e => (0, l.jsx)(L.default, {
                    soundboardListRef: e,
                    categories: J,
                    listPadding: I
                }), [J, I]), eh = i.useCallback(e => {
                    if ((null == e ? void 0 : e.item.type) === R.SoundboardSoundItemType.SOUND) {
                        var t;
                        return (0, l.jsx)(U.default, {
                            closePicker: a,
                            soundboardSound: null !== (t = null == e ? void 0 : e.item.sound) && void 0 !== t ? t : null
                        })
                    }
                    return null
                }, [a]);
                return (0, l.jsxs)(l.Fragment, {
                    children: [W && (0, l.jsx)(j.default, {
                        onClose: () => Y(!1),
                        closePopout: a
                    }), (0, l.jsx)(E.default, {
                        categories: et,
                        collapsedCategories: el,
                        containerWidth: o,
                        store: m.SoundboardPickerStore,
                        onSelectItem: ea,
                        onSearchExpressions: ec,
                        hasSearchResults: $.length > 0,
                        defaultSearchPlaceholder: w.default.Messages.SOUNDBOARD_SEARCH_PLACEHOLDER,
                        renderRow: eu,
                        renderSectionHeader: ed,
                        renderCategoryList: em,
                        renderHeaderAccessories: ep,
                        rowHeight: 48,
                        sectionHeaderHeight: F,
                        listPadding: H,
                        itemNodeWidth: 150,
                        gridNavigatorId: Z,
                        renderEmptySearchState: K,
                        renderInspector: eh,
                        gridNotice: y,
                        renderHeader: N
                    })]
                })
            }
        },
        191191: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("759843"),
                a = n("446674"),
                u = n("77078"),
                d = n("812204"),
                c = n("685665"),
                f = n("428958"),
                p = n("538282"),
                m = n("872173"),
                h = n("945956"),
                E = n("305122"),
                S = n("235004"),
                g = n("534108"),
                C = n("808910");

            function T(e) {
                let {
                    guildId: t,
                    channel: n,
                    containerWidth: r,
                    onClose: T,
                    onSelect: v,
                    analyticsSource: y,
                    suppressPlaySound: x,
                    shouldShowUpsell: I = !0,
                    gridNotice: N,
                    autoWidth: _ = !1,
                    soundButtonOverlay: A,
                    listPadding: R,
                    renderHeader: O,
                    defaultSoundsOnly: M
                } = e, k = (0, a.useStateFromStores)([S.default], () => S.default.isFetchingSounds() || S.default.isFetchingDefaultSounds()), b = (0, a.useStateFromStores)([h.default], () => h.default.getMediaSessionId()), {
                    AnalyticsLocationProvider: P
                } = (0, c.default)(d.default.SOUNDBOARD_POPOUT);
                return (0, f.default)({
                    type: s.ImpressionTypes.POPOUT,
                    name: s.ImpressionNames.SOUNDBOARD_POPOUT,
                    properties: {
                        source: y,
                        guild_id: t,
                        media_session_id: b
                    }
                }), i.useEffect(() => {
                    E.maybeFetchSoundboardSounds(), m.FrecencyUserSettingsActionCreators.loadIfNecessary(), (0, p.setSearchQuery)("")
                }, []), (0, l.jsx)(P, {
                    children: (0, l.jsx)("div", {
                        className: o(C.picker, {
                            [C.fetching]: k,
                            [C.autoWidth]: _
                        }),
                        children: k ? (0, l.jsx)(u.Spinner, {}) : (0, l.jsx)(g.default, {
                            guildId: t,
                            channel: n,
                            onClose: T,
                            onSelect: v,
                            containerWidth: r,
                            suppressPlaySound: x,
                            shouldShowUpsell: I,
                            gridNotice: N,
                            soundButtonOverlay: A,
                            listPadding: R,
                            renderHeader: O,
                            defaultSoundsOnly: M
                        })
                    })
                })
            }
        },
        796864: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSoundButtonContextMenu: function() {
                    return u
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("272030"),
                o = n("305961"),
                s = n("697218"),
                a = n("719923");

            function u(e, t) {
                return i.useCallback(i => {
                    i.stopPropagation();
                    let u = o.default.getGuild(e.guildId),
                        d = s.default.getCurrentUser();
                    (null != u || a.default.canUseCustomCallSounds(d)) && ! function(e, t, i, o) {
                        let u = s.default.getCurrentUser();
                        (null != t || a.default.canUseCustomCallSounds(u)) && (0, r.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("632507").then(n.bind(n, "632507"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                soundGuild: t,
                                activeCallGuildId: o,
                                sound: i
                            })
                        })
                    }(i, u, e, t)
                }, [e, t])
            }
        },
        569717: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("592407"),
                o = n("49111");

            function s(e) {
                r.default.open(e, o.GuildSettingsSections.SOUNDBOARD), (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("823749").then(n.bind(n, "823749"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        guildId: e
                    })
                })
            }
        },
        570759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setShowPremiumUpsell: function() {
                    return o
                },
                useStickerPickerUpsellStore: function() {
                    return s
                }
            });
            var l = n("308503");
            let i = Object.freeze({
                    showPremiumUpsell: !1
                }),
                r = (0, l.default)(e => i),
                o = e => {
                    r.setState({
                        showPremiumUpsell: e
                    })
                },
                s = r
        },
        178207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackStickerPickerOpen: function() {
                    return u
                },
                trackStickerFavorited: function() {
                    return d
                },
                trackStickerSearchStart: function() {
                    return c
                },
                trackStickerSearchResultsViewed: function() {
                    return f
                },
                trackStickerSearchSelect: function() {
                    return p
                },
                trackStickerSelect: function() {
                    return m
                },
                trackStickerSearchEmpty: function() {
                    return h
                }
            });
            var l = n("716241"),
                i = n("599110"),
                r = n("161585"),
                o = n("49111"),
                s = n("13030"),
                a = n("646718");
            let u = e => {
                    let {
                        containerWidth: t,
                        favoriteStickers: n,
                        frequentlyUsedStickers: i,
                        guildStickers: a,
                        stickersTotal: u
                    } = e;
                    l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_PICKER_OPENED, {
                        width: t,
                        tab: s.ExpressionPickerViewType.STICKER,
                        badged: !1,
                        num_expressions_favorites: n.length,
                        num_animated_expressions_favorites: n.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
                        num_custom_expressions_favorites: n.filter(e => (0, r.isCustomSticker)(e.type)).length,
                        num_standard_expressions_favorites: n.filter(e => !(0, r.isCustomSticker)(e.type)).length,
                        num_expressions_frecent: i.length,
                        num_custom_expressions_frecent: i.filter(e => (0, r.isCustomSticker)(e.type)).length,
                        num_animated_expressions_frecent: i.filter(e => (0, r.isAnimatedSticker)(e.format_type)).length,
                        num_standard_expressions_frecent: i.filter(e => !(0, r.isCustomSticker)(e.type)).length,
                        num_current_guild_expressions: a.length,
                        num_custom_expressions_total: u
                    })
                },
                d = e => {
                    let t, {
                        sticker: n,
                        location: i
                    } = e;
                    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_FAVORITED, {
                        location: i,
                        expression_type: s.ExpressionPickerViewType.STICKER,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_guild_id: t,
                        is_animated: (0, r.isAnimatedSticker)(n.format_type),
                        is_custom: (0, r.isCustomSticker)(n.type)
                    })
                },
                c = () => {
                    i.default.track(o.AnalyticEvents.SEARCH_STARTED, {
                        search_type: o.SearchTypes.STICKER
                    })
                },
                f = (e, t, n) => {
                    l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                        search_type: o.SearchTypes.STICKER,
                        total_results: t,
                        query: e,
                        is_suggestion: n
                    })
                },
                p = (e, t, n) => {
                    let i;
                    let {
                        sticker: s
                    } = e;
                    s.type === r.MetaStickerType.GUILD && (i = s.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_SELECTED, {
                        load_id: s.id,
                        search_type: o.SearchTypes.STICKER,
                        source_object: "Sticker Picker",
                        total_results: n,
                        expression_guild_id: i,
                        sticker_id: s.id,
                        query: t
                    })
                },
                m = e => {
                    let t;
                    let {
                        sticker: n,
                        category: i
                    } = e;
                    n.type === r.MetaStickerType.GUILD && (t = n.guild_id), l.default.trackWithMetadata(o.AnalyticEvents.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                        type: a.PremiumUpsellTypes.EMOJI_PICKER_STICKER_CLICKED,
                        expression_id: n.id,
                        expression_name: n.name,
                        expression_picker_section: i,
                        expression_guild_id: t,
                        is_animated: (0, r.isAnimatedSticker)(n.format_type),
                        is_custom: (0, r.isCustomSticker)(n.type)
                    })
                },
                h = e => {
                    null != e && "" !== e && l.default.trackWithMetadata(o.AnalyticEvents.SEARCH_RESULT_EMPTY, {
                        query: e,
                        search_type: o.SearchTypes.STICKER,
                        source_object: "Sticker Picker"
                    })
                }
        },
        386543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                searchAllStickers: function() {
                    return i
                }
            });
            var l = n("25292");
            n("866353");
            let i = e => l.default.queryStickers([e], !0).map(e => {
                let {
                    sticker: t
                } = e;
                return t
            })
        },
        585948: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useKeyboardNavigation: function() {
                    return a
                }
            });
            var l = n("884691"),
                i = n("880317"),
                r = n("997289"),
                o = n("246511"),
                s = n("45961");
            let a = e => {
                let {
                    columnCounts: t,
                    stickersGrid: n,
                    stickersListRef: a,
                    store: u,
                    gridNavigatorId: d,
                    setInspectedStickerPosition: c,
                    onGridItemSelect: f
                } = e, p = (0, r.useAnalyticsContext)(), m = l.useCallback(e => {
                    f(e, p)
                }, [f, p]), h = l.useCallback((e, t) => {
                    c(e, t, o.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT)
                }, [c]), {
                    gridDispatch: E,
                    getItemProps: S,
                    getRowProps: g,
                    gridContainerProps: C,
                    handleGridContainerKeyDown: T,
                    isUsingKeyboardNavigation: v
                } = (0, s.useExpressionPickerGridKeyboardNavigation)({
                    columnCounts: t,
                    gridNavigatorId: d,
                    itemGrid: n,
                    itemList: a,
                    onGridNavigatorItemSelect: m,
                    onGridNavigatorPositionChange: h
                });
                return l.useEffect(() => u.useStore.subscribe(e => {
                    if (null == e) return;
                    let {
                        columnIndex: t,
                        rowIndex: n,
                        source: l
                    } = e;
                    l !== o.InspectedExpressionChangeSource.GRID_NAVIGATOR_EVENT && E({
                        type: i.GridActionType.SET_FOCUSED_POSITION,
                        x: t,
                        y: n
                    })
                }, e => e.inspectedExpressionPosition), [E, u]), {
                    getItemProps: S,
                    getRowProps: g,
                    gridContainerProps: C,
                    handleGridContainerKeyDown: T,
                    isUsingKeyboardNavigation: v
                }
            }
        },
        591522: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("45029"),
                r = n("826079"),
                o = e => {
                    let {
                        size: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: r.unownedStickerLockContainer,
                        style: {
                            width: t,
                            height: t
                        },
                        children: (0, l.jsx)(i.default, {
                            width: 12,
                            height: 12,
                            className: r.unownedStickerLockIcon
                        })
                    })
                }
        },
        889701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ee
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("483366"),
                o = n.n(r),
                s = n("16470"),
                a = n("446674"),
                u = n("769846"),
                d = n("77078"),
                c = n("997289"),
                f = n("812204"),
                p = n("685665"),
                m = n("986632"),
                h = n("538282"),
                E = n("45961"),
                S = n("626301"),
                g = n("716849"),
                C = n("552917"),
                T = n("917247"),
                v = n("845579"),
                y = n("697218"),
                x = n("599110"),
                I = n("159885"),
                N = n("570759"),
                _ = n("866353"),
                A = n("178207"),
                R = n("256860"),
                O = n("364685"),
                M = n("161585"),
                k = n("585948"),
                b = n("234175"),
                P = n("451300"),
                L = n("668333"),
                U = n("313790"),
                j = n("908408"),
                D = n("641680"),
                w = n("560241"),
                B = n("49111"),
                H = n("642358");
            let F = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
                G = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
                K = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
                V = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
                W = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN_SMALL),
                Y = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
                q = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
                z = (0, I.cssValueToNumber)(u.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
                Q = Y + 2 * z,
                X = q + 2 * z,
                Z = o(A.trackStickerSearchEmpty, 200),
                J = o(A.trackStickerSearchResultsViewed, 200),
                $ = i.forwardRef(function(e, t) {
                    var r;
                    let {
                        containerWidth: o,
                        channel: u,
                        onSelectSticker: I,
                        closePopout: Y
                    } = e, {
                        location: q
                    } = (0, c.useAnalyticsContext)(), {
                        AnalyticsLocationProvider: z
                    } = (0, p.default)(f.default.STICKER_PICKER);
                    (0, g.useMaybeFetchPremiumLikelihood)(C.default);
                    let $ = (null === (r = (0, T.usePremiumTrialOffer)()) || void 0 === r ? void 0 : r.subscription_trial) != null,
                        ee = i.useRef(null),
                        et = i.useRef(null),
                        en = i.useRef(null),
                        el = (0, N.useStickerPickerUpsellStore)(e => e.showPremiumUpsell),
                        [ei, er] = (0, h.useExpressionPickerStore)(e => [e.searchQuery, e.isSearchSuggestion], s.default),
                        eo = i.useRef("");
                    i.useImperativeHandle(t, () => ({
                        onPickerOpen: eP
                    }));
                    let es = (0, R.useFilteredStickerPackCategories)(u),
                        ea = 0 === es.filter(e => e.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL).length,
                        eu = (0, E.useExpressionPickerGridWidth)({
                            gridWrapperRef: ee,
                            containerWidth: o,
                            showingEmptyState: ea,
                            listPaddingLeft: G,
                            listScrollbarWidth: 8
                        }),
                        ed = v.StickerPickerCollapsedSections.useSetting(),
                        ec = i.useMemo(() => new Set(ed), [ed]),
                        ef = (0, a.useStateFromStores)([y.default], () => y.default.getCurrentUser()),
                        ep = i.useMemo(() => (0, D.getFilteredStickers)(ei, ef, u), [ei, ef, u]),
                        em = (0, R.useFavoriteStickers)(),
                        eh = (0, R.useLatestFrecentStickers)(),
                        eE = (0, a.useStateFromStoresObject)([O.default], () => O.default.getAllGuildStickers()),
                        {
                            sendable: eS = [],
                            sendableWithPremium: eg = []
                        } = null != ep ? ep : {},
                        eC = eS.length + eg.length,
                        eT = i.useCallback(e => {
                            "" === ei ? (0, A.trackStickerSelect)(e) : (0, A.trackStickerSearchSelect)(e, ei, eC), I(e.sticker, M.StickerSelectLocation.STICKER_PICKER)
                        }, [I, ei, eC]),
                        ev = null != eu && eu > F,
                        {
                            rowCount: ey,
                            rowCountBySection: ex,
                            stickersGrid: eI,
                            gutterWidth: eN,
                            columnCounts: e_
                        } = (0, R.useStickersGrid)({
                            filteredStickers: ep,
                            stickersCategories: es,
                            collapsedStickersCategories: ec,
                            listWidth: eu,
                            listPaddingRight: K,
                            stickerNodeMargin: ev ? V : W,
                            stickerNodeWidth: ev ? Q : X
                        }),
                        eA = i.useCallback((e, t) => {
                            let {
                                location: i
                            } = t;
                            switch (e.type) {
                                case M.StickerGridItemTypes.CREATE_STICKER:
                                    x.default.track(B.AnalyticEvents.OPEN_MODAL, {
                                        type: B.AnalyticsSections.CREATE_STICKER_MODAL,
                                        location: q
                                    }), (0, d.openModalLazy)(async () => {
                                        let {
                                            default: t
                                        } = await n.el("54666").then(n.bind(n, "54666"));
                                        return n => (0, l.jsx)(t, {
                                            guildId: e.guild_id,
                                            ...n
                                        })
                                    });
                                    break;
                                case M.StickerGridItemTypes.STICKER:
                                    null != e.sticker && (0, _.isSendableSticker)(e.sticker, ef, u) && eT(e)
                            }
                        }, [q, ef, u, eT]),
                        {
                            getItemProps: eR,
                            getRowProps: eO,
                            gridContainerProps: eM,
                            handleGridContainerKeyDown: ek,
                            isUsingKeyboardNavigation: eb
                        } = (0, k.useKeyboardNavigation)({
                            columnCounts: e_,
                            stickersListRef: et,
                            stickersGrid: eI,
                            onGridItemSelect: eA,
                            store: m.StickerPickerStore,
                            setInspectedStickerPosition: m.StickerPickerStore.setInspectedExpressionPosition,
                            gridNavigatorId: w.GRID_NAVIGATOR_ID
                        });
                    i.useEffect(() => m.StickerPickerStore.resetStoreState, []);
                    let eP = () => {
                        let e = u.getGuildId(),
                            t = [];
                        if (null !== e) {
                            var n;
                            t = null !== (n = O.default.getStickersByGuildId(e)) && void 0 !== n ? n : []
                        }
                        let l = 0;
                        null != eE && [...eE.values()].forEach(e => {
                            l += e.length
                        }), (0, A.trackStickerPickerOpen)({
                            containerWidth: o,
                            favoriteStickers: em,
                            frequentlyUsedStickers: eh,
                            guildStickers: t,
                            stickersTotal: l
                        })
                    };
                    i.useEffect(() => {
                        "" === eo.current && "" !== ei && (0, A.trackStickerSearchStart)(), eo.current = ei
                    }, [ei]), i.useEffect(() => {
                        0 === eC ? Z(ei) : J(ei, eC, er)
                    }, [ei, eC, er]), i.useLayoutEffect(() => {
                        var e;
                        null === (e = en.current) || void 0 === e || e.focus()
                    }, []);
                    let eL = i.useCallback(() => {
                        Y(), x.default.track(B.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                            location_section: B.AnalyticsSections.STICKER_PICKER_UPSELL
                        }), (0, S.navigateToPremiumMarketingPage)()
                    }, [Y]);
                    return (0, l.jsxs)(z, {
                        children: [!($ && ea) && (0, l.jsx)("div", {
                            className: H.header,
                            children: (0, l.jsx)(U.default, {
                                ref: en,
                                onKeyDown: ek,
                                stickersListRef: et,
                                channel: u
                            })
                        }), ea ? (0, l.jsx)(P.default, {
                            className: H.emptyState,
                            onClose: Y
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                ref: ee,
                                className: H.listWrapper,
                                id: w.GRID_NAVIGATOR_ID,
                                ...eM,
                                children: null != eu ? (0, l.jsx)(L.default, {
                                    ref: et,
                                    collapsedStickersCategories: ec,
                                    filteredStickers: ep,
                                    getStickerItemProps: eR,
                                    getStickerRowProps: eO,
                                    gridWidth: eu,
                                    gutterWidth: eN,
                                    isUsingKeyboardNavigation: eb,
                                    onSelectSticker: eT,
                                    rowCount: ey,
                                    rowCountBySection: ex,
                                    stickersCategories: es,
                                    stickersGrid: eI,
                                    channel: u
                                }) : null
                            }), (0, l.jsx)(b.default, {
                                stickersListRef: et,
                                channel: u
                            })]
                        }), el && (0, l.jsx)(j.StickersPremiumUpsell, {
                            onLearnMore: eL
                        })]
                    })
                });
            var ee = i.forwardRef((e, t) => ((0, R.useFetchStickerPacks)(), (0, l.jsx)("div", {
                className: H.wrapper,
                id: w.STICKER_PICKER_TAB_PANEL_ID,
                "aria-labelledby": w.STICKER_PICKER_TAB_ID,
                role: "tabpanel",
                children: e.isLoading ? (0, l.jsx)(d.Spinner, {
                    className: H.loadingIndicator
                }) : (0, l.jsx)($, {
                    ...e,
                    ref: t
                })
            })))
        },
        234175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return B
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("769846"),
                a = n("77078"),
                u = n("997289"),
                d = n("917764"),
                c = n("986632"),
                f = n("538282"),
                p = n("405607"),
                m = n("305961"),
                h = n("841811"),
                E = n("290581"),
                S = n("595086"),
                g = n("599110"),
                C = n("159885"),
                T = n("256860"),
                v = n("364685"),
                y = n("161585"),
                x = n("24373"),
                I = n("41170"),
                N = n("49111"),
                _ = n("13030"),
                A = n("782340"),
                R = n("75754");
            let O = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_LIST_PADDING),
                M = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_SIZE),
                k = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_ICON_MARGIN),
                b = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_CATEGORY_UNICODE_ICON_SIZE),
                P = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_SIZE),
                L = (0, C.cssValueToNumber)(s.default.STICKERS_CONSTANTS_CATEGORY_SEPARATOR_MARGIN_VERTICAL),
                U = [O, O, O, O],
                j = (M + k) * 2 + O,
                D = P + 2 * L,
                w = e => {
                    let {
                        activeIndex: t,
                        stickerPickerCategories: n,
                        categoryListRef: r,
                        firstStandardStickerCategoryOffsetTop: s,
                        setShouldRenderShortcut: c
                    } = e, p = (0, u.useAnalyticsContext)(), S = (0, f.useExpressionPickerStore)(e => "" !== e.searchQuery), C = i.useCallback((e, r, s) => {
                        var u, c;
                        let f;
                        let C = (null === (u = n[0]) || void 0 === u ? void 0 : u.type) === y.StickerCategoryTypes.FAVORITE,
                            T = C ? 1 : 0,
                            O = (null === (c = n[T]) || void 0 === c ? void 0 : c.type) === y.StickerCategoryTypes.RECENT,
                            k = n.length > 0,
                            P = n.length;
                        if (0 === r && C) return (0, l.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": P,
                            "aria-posinset": r,
                            children: (0, l.jsx)(a.Clickable, {
                                "aria-label": A.default.Messages.CATEGORY_FAVORITE,
                                className: o(R.stickerCategory, R.stickerCategoryGeneric, {
                                    [R.stickerCategoryGenericDisabled]: k && !C,
                                    [R.stickerCategoryGenericSelected]: !S && C && 0 === t
                                }),
                                onClick: s,
                                children: (0, l.jsx)(E.default, {
                                    className: R.stickerCategoryGenericIcon,
                                    height: b,
                                    width: b
                                })
                            })
                        }, "favorites");
                        if (r === T && O) return (0, l.jsx)("div", {
                            role: "listitem",
                            "aria-setsize": P,
                            "aria-posinset": r,
                            children: (0, l.jsx)(a.Clickable, {
                                "aria-label": A.default.Messages.STICKER_PICKER_CATEGORIES_RECENT,
                                className: o(R.stickerCategory, R.stickerCategoryGeneric, {
                                    [R.stickerCategoryGenericDisabled]: k && !O,
                                    [R.stickerCategoryGenericSelected]: !S && O && t === T
                                }),
                                onClick: s,
                                children: (0, l.jsx)(h.default, {
                                    className: R.stickerCategoryGenericIcon,
                                    height: b,
                                    width: b
                                })
                            })
                        }, "recent");
                        let L = t === r,
                            U = n[r],
                            j = n[r + 1],
                            D = null != j && U.type === y.StickerCategoryTypes.GUILD && j.type !== y.StickerCategoryTypes.GUILD,
                            w = U.type === y.StickerCategoryTypes.PACK,
                            B = "",
                            H = null;
                        if (U.type === y.StickerCategoryTypes.GUILD || U.type === y.StickerCategoryTypes.EMPTY_GUILD_UPSELL) {
                            let e = m.default.getGuild(U.id);
                            null != e && (f = e.id, B = e.name, H = (0, l.jsx)(d.default, {
                                guild: e,
                                isSelected: L
                            }))
                        } else if (w) {
                            let e = v.default.getStickerPack(U.id);
                            null != e && (B = e.name, H = (0, l.jsx)(I.default, {
                                disableAnimation: !L || S,
                                size: M,
                                sticker: (0, x.getStickerPackPreviewSticker)(e)
                            }))
                        }
                        return (0, l.jsxs)(i.Fragment, {
                            children: [(0, l.jsx)(a.Tooltip, {
                                position: "right",
                                text: B,
                                tooltipContentClassName: R.tooltip,
                                children: e => (0, l.jsx)("div", {
                                    role: "listitem",
                                    "aria-setsize": P,
                                    "aria-posinset": r,
                                    children: (0, l.jsx)(a.Clickable, {
                                        ...e,
                                        "aria-label": B,
                                        className: o(R.stickerCategory, {
                                            [R.firstPartyCategory]: w,
                                            [R.firstPartyCategorySelected]: !S && L && w
                                        }),
                                        onClick: () => {
                                            U.type === y.StickerCategoryTypes.PACK && g.default.track(N.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_SELECTED, {
                                                location: null == p ? void 0 : p.location,
                                                tab: _.ExpressionPickerViewType.STICKER,
                                                sticker_pack_id: U.id,
                                                guild_id: f
                                            }), s()
                                        },
                                        children: H
                                    })
                                })
                            }), D ? (0, l.jsx)("hr", {
                                className: R.guildCategorySeparator
                            }, "separator") : null]
                        }, U.id)
                    }, [t, p, S, n]), T = i.useCallback((e, t) => t ? j : 0, []), O = i.useCallback((e, t) => {
                        let l = n[t],
                            i = n[t + 1],
                            r = null != i && l.type === y.StickerCategoryTypes.GUILD && i.type !== y.StickerCategoryTypes.GUILD;
                        return M + (r ? D : k)
                    }, [n]), L = i.useCallback(e => {
                        var t;
                        let n = null === (t = r.current) || void 0 === t ? void 0 : t.getListDimensions();
                        if (null == n) return;
                        let l = e + n.height;
                        c(l - P < s)
                    }, [s]);
                    return {
                        getScrollOffsetForIndex: T,
                        renderCategoryListItem: C,
                        rowHeight: O,
                        onScroll: L
                    }
                };
            var B = e => {
                let {
                    stickersListRef: t,
                    channel: n
                } = e, r = i.useRef(null), [s, u] = i.useState(!0), d = c.StickerPickerStore.useStore(e => e.activeCategoryIndex), f = (0, T.useFilteredStickerPackCategories)(n), {
                    firstStandardStickerCategoryIndex: m,
                    firstStandardStickerCategoryOffsetTop: h,
                    guildCategoryCount: E,
                    hasFirstPartyStickerPacks: g
                } = i.useMemo(() => {
                    var e, t;
                    let n = f.filter(e => e.type === y.StickerCategoryTypes.GUILD).length,
                        l = (null === (e = f[0]) || void 0 === e ? void 0 : e.type) === y.StickerCategoryTypes.RECENT,
                        i = (null === (t = f[0]) || void 0 === t ? void 0 : t.type) === y.StickerCategoryTypes.FAVORITE,
                        r = n + (l ? 1 : 0) + (i ? 1 : 0),
                        o = r * (M + k) - k + D,
                        s = null != f.find(e => e.type === y.StickerCategoryTypes.PACK);
                    return {
                        firstStandardStickerCategoryIndex: r + 1,
                        firstStandardStickerCategoryOffsetTop: o,
                        guildCategoryCount: n,
                        hasFirstPartyStickerPacks: s
                    }
                }, [f]);
                i.useLayoutEffect(() => {
                    u(E >= 7)
                }, [E]);
                let {
                    renderCategoryListItem: C,
                    rowHeight: v,
                    onScroll: x
                } = w({
                    activeIndex: d,
                    stickerPickerCategories: f,
                    categoryListRef: r,
                    firstStandardStickerCategoryOffsetTop: h,
                    setShouldRenderShortcut: u
                }), I = i.useCallback(e => {
                    var t;
                    e(m), null === (t = r.current) || void 0 === t || t.scrollTo(h)
                }, [m, h]);
                return (0, l.jsx)(p.default, {
                    className: R.categoryList,
                    categoryListRef: r,
                    expressionsListRef: t,
                    store: c.StickerPickerStore,
                    listPadding: U,
                    onScroll: x,
                    renderCategoryListItem: C,
                    rowCount: f.length,
                    categories: f,
                    categoryHeight: v,
                    children: e => g && s && (0, l.jsx)(a.Clickable, {
                        className: o(R.standardStickerShortcut, {
                            [R.invisibleShortcut]: !s
                        }),
                        onClick: () => I(e),
                        children: (0, l.jsx)(S.default, {
                            height: 24,
                            width: 24
                        })
                    })
                })
            }
        },
        801396: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("997289"),
                d = n("716241"),
                c = n("685665"),
                f = n("538282"),
                p = n("379532"),
                m = n("592407"),
                h = n("817963"),
                E = n("305961"),
                S = n("326880"),
                g = n("595086"),
                C = n("427459"),
                T = n("49111"),
                v = n("944305"),
                y = n("782340"),
                x = n("12180"),
                I = e => {
                    let {
                        className: t,
                        guildId: n,
                        channel: r,
                        shouldTrackUpsellViewed: I,
                        setTrackedUpsellViewed: N
                    } = e, {
                        location: _
                    } = (0, u.useAnalyticsContext)(), {
                        analyticsLocations: A
                    } = (0, c.default)(), R = (0, s.useStateFromStores)([E.default], () => E.default.getGuild(n)), {
                        canManageAllExpressions: O
                    } = (0, h.useManageResourcePermissions)(R), M = null != R && 0 === (0, C.getTotalStickerCountForTier)(R.premiumTier) && !R.hasFeature(T.GuildFeatures.MORE_STICKERS);
                    return (i.useEffect(() => {
                        O && M && I && ((0, d.trackWithMetadata)(T.AnalyticEvents.PREMIUM_GUILD_UPSELL_VIEWED, {
                            location: _,
                            guild_id: null == R ? void 0 : R.id,
                            channel_id: null == r ? void 0 : r.id,
                            type: "Expression Picker Inline Sticker Upsell",
                            location_stack: A
                        }), N(!0))
                    }, [M, R, r, _, I, N, A, O]), null != R && O) ? M ? (0, l.jsxs)("div", {
                        className: o(x.upsell, t),
                        children: [(0, l.jsx)(S.default, {
                            className: x.icon,
                            width: 24,
                            height: 24
                        }), (0, l.jsx)(a.Text, {
                            color: "interactive-normal",
                            className: x.body,
                            variant: "text-sm/normal",
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({
                                count: (0, C.getTotalStickerCountForTier)(T.BoostedGuildTiers.TIER_1)
                            })
                        }), (0, l.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.LINK,
                            onClick: () => {
                                (0, p.default)({
                                    analyticsLocations: A,
                                    analyticsSourceLocation: _,
                                    guild: R,
                                    perks: (0, v.guildBoostingPerks)()
                                })
                            },
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
                        })]
                    }) : (0, l.jsxs)("div", {
                        className: o(x.upsell, t),
                        children: [(0, l.jsx)(g.default, {
                            className: x.icon,
                            width: 20,
                            height: 20
                        }), (0, l.jsx)(a.Text, {
                            color: "interactive-normal",
                            className: x.body,
                            variant: "text-sm/normal",
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
                        }), (0, l.jsx)(a.Button, {
                            look: a.Button.Looks.LINK,
                            color: a.Button.Colors.LINK,
                            onClick: () => {
                                (0, f.closeExpressionPicker)(), m.default.open(n, T.GuildSettingsSections.STICKERS, _)
                            },
                            children: y.default.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
                        })]
                    }) : null
                }
        },
        451300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("446674"),
                a = n("77078"),
                u = n("812204"),
                d = n("685665"),
                c = n("154889"),
                f = n("917247"),
                p = n("956597"),
                m = n("599110"),
                h = n("256860"),
                E = n("364685"),
                S = n("41170"),
                g = n("281072"),
                C = n("560241"),
                T = n("49111"),
                v = n("646718"),
                y = n("782340"),
                x = n("817028");

            function I(e) {
                var t, n, r;
                let {
                    className: I,
                    onClose: N
                } = e;
                (0, h.useFetchStickerPacks)();
                let {
                    analyticsLocations: _
                } = (0, d.default)(u.default.EMPTY_STATE), A = (0, s.useStateFromStoresArray)([E.default], () => C.EMPTY_STATE_STICKERS.map(e => E.default.getStickerById(e)));
                i.useEffect(() => {
                    m.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                        type: v.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                        source: {
                            section: T.AnalyticsSections.EMPTY_STICKER_PICKER_UPSELL
                        },
                        location_stack: _
                    })
                }, [_]);
                let R = (0, f.usePremiumTrialOffer)(),
                    O = (0, c.usePremiumDiscountOffer)(),
                    M = null != R || null != O,
                    k = (null == R ? void 0 : null === (t = R.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === v.PremiumSubscriptionSKUs.TIER_0;
                return (0, l.jsxs)("div", {
                    className: o(x.emptyState, I, {
                        [x.unifyTrialUpsell]: M
                    }),
                    children: [M ? (0, l.jsx)(p.default, {
                        discountOffer: O,
                        trialOffer: R,
                        onClose: N,
                        type: v.PremiumUpsellTypes.EMPTY_STICKER_PICKER_UPSELL,
                        subscriptionTier: null !== (r = null == R ? void 0 : null === (n = R.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : v.PremiumSubscriptionSKUs.TIER_2,
                        children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(a.Heading, {
                            className: x.header,
                            variant: "heading-xl/semibold",
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_TITLE
                        }), (0, l.jsx)(a.Text, {
                            className: x.subtitle,
                            color: "header-secondary",
                            variant: "text-md/normal",
                            children: y.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_SUBTITLE
                        }), (0, l.jsx)("div", {
                            className: x.stickersRow,
                            children: A.filter(e => null != e).map(e => (0, l.jsx)(S.default, {
                                sticker: e,
                                className: x.sticker,
                                size: 80
                            }, null == e ? void 0 : e.id))
                        })]
                    }), !M && (0, l.jsx)(g.default, {
                        analyticsSection: T.AnalyticsSections.EXPRESSION_PICKER,
                        buttonText: M ? k ? y.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                    })]
                })
            }
        },
        355494: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("769846"),
                o = n("917764"),
                s = n("986632"),
                a = n("562323"),
                u = n("305961"),
                d = n("151185"),
                c = n("159885"),
                f = n("364685"),
                p = n("161585"),
                m = n("24373"),
                h = n("41170"),
                E = n("782340"),
                S = n("13763");
            let g = (0, c.cssValueToNumber)(r.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_PRIMARY_DIMENSIONS),
                C = (0, c.cssValueToNumber)(r.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_INSPECTOR_BAR_GRAPHIC_SECONDARY_DIMENSIONS),
                T = e => {
                    let t = null,
                        n = null;
                    if (!(0, m.isStandardSticker)(e) && !(0, m.isGuildSticker)(e) || (0, m.isGuildSticker)(e)) {
                        let i = u.default.getGuild(e.guild_id);
                        null != i && (t = E.default.Messages.STICKER_FROM_SOURCE.format({
                            source: i.name
                        }), n = (0, l.jsx)(o.default, {
                            guild: i
                        }))
                    } else if ((0, m.isStandardSticker)(e)) {
                        let i = f.default.getStickerPack(e.pack_id);
                        null != i && (t = E.default.Messages.STICKER_FROM_SOURCE.format({
                            source: i.name
                        }), n = (0, l.jsx)(h.default, {
                            size: C,
                            sticker: (0, m.getStickerPackPreviewSticker)(i),
                            disableAnimation: !0
                        }))
                    }
                    return {
                        title: t,
                        graphic: n
                    }
                },
                v = i.memo(function(e) {
                    let {
                        stickersGrid: t
                    } = e, n = s.StickerPickerStore.useStore(e => e.inspectedExpressionPosition), r = i.useMemo(() => {
                        var e;
                        let {
                            rowIndex: l,
                            columnIndex: i
                        } = n, r = null === (e = t[l]) || void 0 === e ? void 0 : e[i];
                        return (null == r ? void 0 : r.type) === p.StickerGridItemTypes.CREATE_STICKER ? {
                            guild_id: r.guild_id,
                            name: r.name
                        } : (null == r ? void 0 : r.type) !== p.StickerGridItemTypes.STICKER ? null : r.sticker
                    }, [t, n]);
                    if (null == r) return null;
                    let {
                        graphic: o,
                        title: u
                    } = T(r), c = (0, m.isStandardSticker)(r) || (0, m.isGuildSticker)(r) ? (0, l.jsx)(h.default, {
                        isInteracting: !0,
                        size: g,
                        sticker: r,
                        disableAnimation: !0
                    }) : (0, l.jsx)("div", {
                        className: S.iconWrapper,
                        children: (0, l.jsx)(d.default, {
                            className: S.icon
                        })
                    });
                    return (0, l.jsx)(a.default, {
                        graphicPrimary: c,
                        graphicSecondary: o,
                        titlePrimary: r.name,
                        titleSecondary: (0, m.isStandardSticker)(r) || (0, m.isGuildSticker)(r) ? u : null
                    })
                });
            var y = v
        },
        668333: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ef
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("16470"),
                o = n("446674"),
                s = n("769846"),
                a = n("77078"),
                u = n("96386"),
                d = n("997289"),
                c = n("812204"),
                f = n("685665"),
                p = n("917764"),
                m = n("986632"),
                h = n("538282"),
                E = n("246511"),
                S = n("45961"),
                g = n("515059"),
                C = n("845579"),
                T = n("305961"),
                v = n("697218"),
                y = n("124299"),
                x = n("841811"),
                I = n("290581"),
                N = n("599110"),
                _ = n("159885"),
                A = n("570759"),
                R = n("866353"),
                O = n("364685"),
                M = n("161585"),
                k = n("24373"),
                b = n("41170"),
                P = n("801396"),
                L = n("355494"),
                U = n("77162"),
                j = n("209069"),
                D = n("49111"),
                w = n("13030"),
                B = n("782340"),
                H = n("327518"),
                F = n("327769");
            let G = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_SMALL),
                K = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_BREAKPOINT_MEDIUM),
                V = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP),
                W = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_TOP_SEARCH_RESULTS),
                Y = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_RIGHT),
                q = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_BOTTOM),
                z = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_PADDING_LEFT),
                Q = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_DIVIDER_HEIGHT),
                X = (0, _.cssValueToNumber)(s.default.EXPRESSION_PICKER_CONSTANTS_EXPRESSION_PICKER_LIST_SECTION_HEADING_HEIGHT),
                Z = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS),
                J = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_DIMENSIONS_SMALL),
                $ = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_PADDING),
                ee = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKER_PICKER_PREVIEW_MARGIN),
                et = Z + 2 * $,
                en = et + ee,
                el = J + 2 * $ + ee,
                ei = [V, Y, q, z],
                er = [W, Y, q, z],
                eo = (0, _.cssValueToNumber)(s.default.STICKERS_CONSTANTS_STICKERS_LIST_EMPTY_GUILD_UPSELL_HEIGHT),
                es = ["laugh", "wave", "yes", "dance", "sad", "no", "hi", "bye", "cry", "ok"],
                ea = e => {
                    let {
                        onSuggestionClick: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: H.searchSuggestions,
                        children: es.map(e => (0, l.jsx)(a.Clickable, {
                            className: H.searchSuggestion,
                            onClick: () => t(e),
                            children: (0, l.jsx)(a.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: e
                            })
                        }, e))
                    })
                },
                eu = e => {
                    let {
                        onSelectSticker: t,
                        channel: n,
                        currentUser: l
                    } = e, r = (0, d.useAnalyticsContext)(), {
                        analyticsLocations: o
                    } = (0, f.default)(), s = (0, h.useExpressionPickerStore)(e => e.searchQuery), a = i.useCallback(e => {
                        let {
                            visibleRowIndex: t,
                            columnIndex: n,
                            gridSectionIndex: l
                        } = e;
                        m.StickerPickerStore.setActiveCategoryIndex(l), m.StickerPickerStore.setInspectedExpressionPosition(n, t, E.InspectedExpressionChangeSource.MOUSE_EVENT), e.type === M.StickerGridItemTypes.STICKER && m.StickerPickerStore.setSearchPlaceholder(e.sticker.name)
                    }, []), u = i.useCallback(e => {
                        if (e.type !== M.StickerGridItemTypes.STICKER) return;
                        let {
                            packId: i,
                            sticker: a,
                            type: u
                        } = e, d = {
                            ...r.location,
                            object: "" === s ? D.AnalyticsObjects.STICKER_PICKER_VIEW_ALL : D.AnalyticsObjects.STICKER_SEARCH_VIEW_ALL
                        };
                        if (null != a && !(0, R.isSendableSticker)(a, l, n)) {
                            let e = O.default.getStickerPack(i);
                            null != e && (N.default.track(D.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                                sticker_id: a.id,
                                sticker_pack_id: i,
                                location: d,
                                location_stack: o
                            }), (0, j.default)({
                                stickerPack: e,
                                analyticsLocations: o
                            }));
                            let t = (0, k.isGuildSticker)(a),
                                r = (0, R.getStickerSendability)(a, l, n);
                            r === R.StickerSendability.SENDABLE_WITH_PREMIUM && (0, A.setShowPremiumUpsell)(!0), t && R.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
                            return
                        }
                        u === M.StickerGridItemTypes.STICKER && null != a && t(e)
                    }, [r.location, s, l, n, o, t]);
                    return {
                        handleStickerInspect: a,
                        handleSelect: u
                    }
                },
                ed = e => {
                    let {
                        collapsedStickersCategories: t,
                        gridWidth: n,
                        onSelectSticker: r,
                        getStickerItemProps: s,
                        getStickerRowProps: u,
                        gutterWidth: c,
                        inspectedStickerPosition: f,
                        isScrolling: m,
                        isUsingKeyboardNavigation: h,
                        stickersGrid: E,
                        stickersCategories: S,
                        filteredStickers: y,
                        ownedStickerPacks: _,
                        channel: A
                    } = e, R = (0, d.useAnalyticsContext)(), L = (0, o.useStateFromStores)([v.default], () => v.default.getCurrentUser()), {
                        handleStickerInspect: j,
                        handleSelect: F
                    } = eu({
                        onSelectSticker: r,
                        channel: A,
                        currentUser: L
                    }), [V, W] = i.useState(!1), Y = i.useCallback(e => {
                        C.StickerPickerCollapsedSections.updateSetting(Array.from(e))
                    }, []), q = i.useCallback(e => {
                        let t = E[e];
                        return null != t ? (0, l.jsx)(U.default, {
                            getStickerItemProps: s,
                            getStickerRowProps: u,
                            gutterWidth: c,
                            inspectedStickerPosition: f,
                            isScrolling: m,
                            isUsingKeyboardNavigation: h,
                            onInspect: j,
                            onSelect: F,
                            rowIndex: e,
                            stickerClassName: H.sticker,
                            stickerDescriptors: t,
                            stickerSize: n > G ? Z : J,
                            preferAnimation: n <= K,
                            ownedStickerPacks: _,
                            isDisplayingIndividualStickers: !0,
                            channel: A,
                            currentUser: L
                        }, e) : null
                    }, [E, s, u, c, f, m, h, j, F, n, _, A, L]), z = i.useCallback((e, t) => (0, l.jsx)("div", {
                        children: t
                    }, e), []), $ = i.useCallback(function(e) {
                        let {
                            isStickerPack: n = !0
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = new Set(t), i = t.has(e);
                        i ? l.delete(e) : l.add(e), N.default.track(D.AnalyticEvents.EXPRESSION_PICKER_CATEGORY_COLLAPSE_TOGGLED, {
                            location: null == R ? void 0 : R.location,
                            tab: w.ExpressionPickerViewType.STICKER,
                            collapsed: !i,
                            sticker_pack_id: n ? e : null
                        }), Y(l)
                    }, [R, t, Y]), ee = i.useCallback(e => {
                        let n = S[e];
                        if (null != y) {
                            let {
                                sendable: t,
                                sendableWithPremium: n
                            } = y;
                            if (0 === e && t.length > 0) return null;
                            let i = t.length > 0 && n.length > 0;
                            return (0, l.jsxs)(l.Fragment, {
                                children: [i ? (0, l.jsx)("div", {
                                    className: H.divider,
                                    children: (0, l.jsx)(a.FormDivider, {})
                                }) : null, (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKERS_YOU_MIGHT_LIKE_A11Y,
                                    children: B.default.Messages.STICKERS_YOU_MIGHT_LIKE
                                }, "stickers-you-might-like-header")]
                            })
                        }
                        switch (n.type) {
                            case M.StickerCategoryTypes.FAVORITE:
                                return (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: n.name
                                    }),
                                    icon: (0, l.jsx)(I.default, {
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => $(n.id, {
                                        isStickerPack: !1
                                    }),
                                    children: n.name
                                }, "header-".concat(n.id));
                            case M.StickerCategoryTypes.RECENT:
                                return (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: n.name
                                    }),
                                    icon: (0, l.jsx)(x.default, {}),
                                    isCollapsed: t.has(n.id),
                                    onClick: () => $(n.id, {
                                        isStickerPack: !1
                                    }),
                                    children: n.name
                                }, "header-".concat(n.id));
                            case M.StickerCategoryTypes.GUILD:
                            case M.StickerCategoryTypes.EMPTY_GUILD_UPSELL: {
                                let e = T.default.getGuild(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: e.name
                                    }),
                                    icon: (0, l.jsx)(p.default, {
                                        guild: e,
                                        height: 16,
                                        width: 16
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => $(e.id),
                                    children: e.name
                                }, "h".concat(e.id))
                            }
                            case M.StickerCategoryTypes.PACK: {
                                let e = O.default.getStickerPack(n.id);
                                if (null == e) return null;
                                return (0, l.jsx)(g.default, {
                                    className: H.packHeader,
                                    "aria-label": B.default.Messages.STICKER_CATEGORY_A11Y_LABEL.format({
                                        categoryName: e.name
                                    }),
                                    icon: (0, l.jsx)(b.default, {
                                        disableAnimation: !0,
                                        size: 12,
                                        sticker: (0, k.getStickerPackPreviewSticker)(e)
                                    }),
                                    isCollapsed: t.has(e.id),
                                    onClick: () => $(e.id),
                                    children: e.name
                                }, "h".concat(e.id))
                            }
                        }
                    }, [t, S, $, y]), et = i.useCallback(e => {
                        if (null != y) {
                            let {
                                sendable: t,
                                sendableWithPremium: n
                            } = y;
                            if (0 === e && t.length > 0) return 0;
                            let l = t.length > 0 && n.length > 0 ? Q : 0;
                            return X + l
                        }
                        return X
                    }, [y]), en = i.useCallback(e => {
                        let n = S[e],
                            i = t.has(n.id);
                        return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || null != y || i ? null : (0, l.jsx)(P.default, {
                            className: H.emptyGuildUpsell,
                            guildId: n.id,
                            channel: A,
                            shouldTrackUpsellViewed: !V,
                            setTrackedUpsellViewed: W
                        }, "sticker-picker-empty-guild-inline-upsell-".concat(n.id))
                    }, [S, t, y, A, V]), el = i.useCallback(e => {
                        let n = S[e],
                            l = t.has(n.id);
                        return n.type !== M.StickerCategoryTypes.EMPTY_GUILD_UPSELL || l ? 0 : eo
                    }, [S, t]);
                    return {
                        renderRow: q,
                        renderSection: z,
                        renderSectionHeader: ee,
                        sectionHeaderHeight: et,
                        renderSectionFooter: en,
                        sectionFooterHeight: el
                    }
                },
                ec = i.forwardRef(function(e, t) {
                    let {
                        collapsedStickersCategories: n,
                        gridWidth: s,
                        filteredStickers: a,
                        getStickerItemProps: d,
                        getStickerRowProps: p,
                        gutterWidth: E,
                        isUsingKeyboardNavigation: g,
                        onSelectSticker: C,
                        rowCount: T,
                        rowCountBySection: v,
                        stickersCategories: x,
                        stickersGrid: I,
                        channel: N
                    } = e, _ = i.useRef(!1), A = i.useRef(null), [R, M] = m.StickerPickerStore.useStore(e => [e.activeCategoryIndex, e.inspectedExpressionPosition], r.default), {
                        AnalyticsLocationProvider: k
                    } = (0, f.default)(c.default.STICKER_PICKER), b = (0, h.useExpressionPickerStore)(e => e.searchQuery), P = (0, o.useStateFromStores)([O.default], () => O.default.getPremiumPacks()), U = i.useMemo(() => new Set(P.map(e => e.id)), [P]), {
                        renderRow: j,
                        renderSection: D,
                        renderSectionFooter: w,
                        sectionFooterHeight: K,
                        renderSectionHeader: V,
                        sectionHeaderHeight: W
                    } = ed({
                        collapsedStickersCategories: n,
                        gridWidth: s,
                        stickersCategories: x,
                        stickersGrid: I,
                        isScrolling: _,
                        isUsingKeyboardNavigation: g,
                        onSelectSticker: C,
                        getStickerItemProps: d,
                        getStickerRowProps: p,
                        gutterWidth: E,
                        inspectedStickerPosition: M,
                        filteredStickers: a,
                        ownedStickerPacks: U,
                        channel: N
                    }), Y = (0, S.useSynchronizedActiveCategoryIndexForScrollPosition)({
                        activeCategoryIndex: R,
                        isScrolling: _,
                        listRef: A,
                        onActiveCategoryIndexChange: m.StickerPickerStore.setActiveCategoryIndex,
                        scrollOffset: 20,
                        searchQuery: b
                    });
                    return (0, S.useSynchronizedScrollPositionForActiveCategoryIndex)({
                        searchQuery: b,
                        activeCategoryIndex: R,
                        listRef: A
                    }), i.useImperativeHandle(t, () => ({
                        scrollTo: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.scrollTo(...n)
                        },
                        getRowDescriptors: () => {
                            var e, t;
                            return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getRowDescriptors()) && void 0 !== t ? t : []
                        },
                        getSectionDescriptors: () => {
                            var e, t;
                            return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getSectionDescriptors()) && void 0 !== t ? t : []
                        },
                        scrollToSectionTop: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.scrollToSectionTop(...n)
                        },
                        scrollRowIntoView: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.scrollRowIntoView(...n)
                        },
                        getScrollerNode: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.getScrollerNode(...n)
                        },
                        scrollIntoViewNode: function() {
                            for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                            return null === (e = A.current) || void 0 === e ? void 0 : e.scrollIntoViewNode(...n)
                        },
                        getListDimensions: function() {
                            for (var e, t, n = arguments.length, l = Array(n), i = 0; i < n; i++) l[i] = arguments[i];
                            return null !== (t = null === (e = A.current) || void 0 === e ? void 0 : e.getListDimensions(...l)) && void 0 !== t ? t : {
                                height: -1,
                                totalHeight: -1
                            }
                        }
                    }), []), (0, l.jsx)(k, {
                        children: (0, l.jsxs)("div", {
                            className: H.wrapper,
                            children: [null != a && 0 === a.sendable.length && 0 === a.sendableWithPremium.length ? (0, l.jsx)(u.default, {
                                message: B.default.Messages.NO_STICKER_SEARCH_RESULTS_WITH_SUGGESTIONS,
                                className: H.noSearchResultsContainer,
                                noResultsImageURL: F,
                                suggestions: (0, l.jsx)(ea, {
                                    onSuggestionClick: e => (0, h.setSearchQuery)(e, !0)
                                })
                            }) : (0, l.jsx)(y.default, {
                                role: "none presentation",
                                listPadding: null != a ? er : ei,
                                onScroll: Y,
                                renderRow: j,
                                renderSection: null == a ? D : void 0,
                                renderSectionHeader: V,
                                renderSectionFooter: w,
                                rowCount: T,
                                rowCountBySection: v,
                                rowHeight: s > G ? en : el,
                                sectionHeaderHeight: W,
                                sectionFooterHeight: K,
                                stickyHeaders: !0,
                                ref: A
                            }), (0, l.jsx)(L.default, {
                                stickersGrid: I
                            })]
                        })
                    })
                });
            var ef = ec
        },
        77162: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n("617258"),
                u = n("77078"),
                d = n("272030"),
                c = n("997289"),
                f = n("246511"),
                p = n("151185"),
                m = n("599110"),
                h = n("866353"),
                E = n("161585"),
                S = n("24373"),
                g = n("41170"),
                C = n("591522"),
                T = n("49111"),
                v = n("782340"),
                y = n("267005");
            let x = (0, a.cssValueToNumber)(y.stickerPickerPreviewDimensions),
                I = (0, a.cssValueToNumber)(y.stickerPickerPreviewPadding),
                N = i.memo(function(e) {
                    let {
                        isDisplayingIndividualStickers: t = !1,
                        preferAnimation: r = !0,
                        getStickerItemProps: a,
                        getStickerRowProps: N,
                        gutterWidth: _,
                        inspectedStickerPosition: A,
                        isScrolling: R,
                        isUsingKeyboardNavigation: O,
                        onInspect: M,
                        onSelect: k,
                        rowIndex: b,
                        stickerClassName: P,
                        stickerDescriptors: L,
                        stickerPadding: U = I,
                        stickerSize: j = x,
                        ownedStickerPacks: D,
                        enlargeOnInteraction: w = !1,
                        channel: B,
                        currentUser: H,
                        checkSendability: F = !0
                    } = e, {
                        location: G
                    } = (0, c.useAnalyticsContext)(), K = j + 2 * U, V = i.useMemo(() => ({
                        gridColumnGap: _,
                        gridTemplateColumns: "repeat(auto-fill, ".concat(K, "px)"),
                        height: K,
                        paddingRight: t ? void 0 : K
                    }), [t, _, K]), W = i.useMemo(() => ({
                        width: j,
                        height: j,
                        padding: U
                    }), [U, j]);
                    return (0, l.jsx)("div", {
                        className: y.row,
                        style: V,
                        ...null == N ? void 0 : N(b),
                        children: L.map(e => {
                            var c;
                            let x = e.visibleRowIndex === (null == A ? void 0 : A.rowIndex) && e.columnIndex === (null == A ? void 0 : A.columnIndex),
                                I = e.type === E.StickerGridItemTypes.STICKER && w && x,
                                N = (0, s.throttle)(() => {
                                    (null == R ? void 0 : R.current) !== !0 && (null == O ? void 0 : O.current) !== !0 && !x && (null == M || M(e))
                                }, 250),
                                {
                                    ref: _,
                                    tabIndex: L,
                                    onFocus: U,
                                    ...K
                                } = null !== (c = null == a ? void 0 : a(e.columnIndex, b)) && void 0 !== c ? c : {};
                            switch (e.type) {
                                case E.StickerGridItemTypes.CREATE_STICKER:
                                    return (0, l.jsx)("div", {
                                        ...K,
                                        children: (0, l.jsxs)(u.Clickable, {
                                            "aria-label": e.name,
                                            className: o(y.createSticker, P, {
                                                [y.createInspected]: x
                                            }),
                                            innerRef: _,
                                            tabIndex: L,
                                            onFocus: null != U ? U : N,
                                            onMouseMove: N,
                                            onClick: () => {
                                                e.type === E.StickerGridItemTypes.CREATE_STICKER && (m.default.track(T.AnalyticEvents.OPEN_MODAL, {
                                                    type: T.AnalyticsSections.CREATE_STICKER_MODAL,
                                                    location: G
                                                }), (0, u.openModalLazy)(async () => {
                                                    let {
                                                        default: t
                                                    } = await n.el("54666").then(n.bind(n, "54666"));
                                                    return n => (0, l.jsx)(t, {
                                                        guildId: e.guild_id,
                                                        ...n
                                                    })
                                                }))
                                            },
                                            style: W,
                                            children: [!w && (0, l.jsx)("div", {
                                                className: y.inspectedIndicator
                                            }), (0, l.jsx)("div", {
                                                className: y.iconWrapper,
                                                children: (0, l.jsx)(p.default, {
                                                    className: y.icon
                                                })
                                            }), (0, l.jsx)(u.Text, {
                                                color: "interactive-active",
                                                variant: "text-xs/normal",
                                                children: v.default.Messages.STICKER_PICKER_CREATE_STICKER
                                            })]
                                        })
                                    }, e.guild_id);
                                case E.StickerGridItemTypes.STICKER: {
                                    let s = t && null != D && (0, S.isStandardSticker)(e.sticker) && !D.has(e.sticker.pack_id);
                                    return (0, i.createElement)("div", {
                                        ...K,
                                        key: e.sticker.id
                                    }, (0, l.jsxs)(u.Clickable, {
                                        className: o(y.sticker, P, {
                                            [y.stickerInspected]: x
                                        }),
                                        innerRef: _,
                                        tabIndex: L,
                                        onFocus: null != U ? U : N,
                                        onMouseMove: N,
                                        onClick: t => {
                                            (null == R ? void 0 : R.current) !== !0 && (null == O ? void 0 : O.current) !== !0 && (null == k || k(e, t))
                                        },
                                        onContextMenu: e => {
                                            (0, d.openContextMenuLazy)(e, async () => {
                                                let {
                                                    default: e
                                                } = await n.el("367343").then(n.bind(n, "367343"));
                                                return t => (0, l.jsx)(e, {
                                                    ...t
                                                })
                                            })
                                        },
                                        style: W,
                                        "data-type": f.PickerContextMenuDataTypes.STICKER,
                                        "data-id": e.sticker.id,
                                        children: [(0, l.jsx)(u.HiddenVisually, {
                                            children: (0, g.getStickerAltText)(e.sticker)
                                        }), (0, l.jsxs)("div", {
                                            "aria-hidden": !0,
                                            children: [!w && (0, l.jsx)("div", {
                                                className: y.inspectedIndicator
                                            }), (0, l.jsx)(g.default, {
                                                className: o(y.stickerNode, {
                                                    [y.stickerNodeDimmed]: w && !x && null != A && -1 !== A.rowIndex && -1 !== A.columnIndex,
                                                    [y.stickerNodeHidden]: I,
                                                    [y.stickerUnsendable]: F && !(0, h.isSendableSticker)(e.sticker, H, B)
                                                }),
                                                disableAnimation: !x && !r,
                                                enlargeOnInteraction: w,
                                                isInteracting: x,
                                                maskAsset: x,
                                                sticker: e.sticker,
                                                size: j
                                            }), s ? (0, l.jsx)(C.default, {
                                                size: 20
                                            }) : null]
                                        })]
                                    }))
                                }
                            }
                        })
                    })
                });
            var _ = N
        },
        313790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("16470"),
                o = n("74139"),
                s = n("137223"),
                a = n("986632"),
                u = n("538282"),
                d = n("256860"),
                c = n("560241"),
                f = n("782340"),
                p = n("296937");
            let m = i.forwardRef(function(e, t) {
                let {
                    onKeyDown: n,
                    stickersListRef: m,
                    channel: h
                } = e, E = (0, d.useHasSendableSticker)(h), S = i.useRef(null), {
                    searchQuery: g,
                    isSearchSuggestion: C
                } = (0, u.useExpressionPickerStore)(e => ({
                    searchQuery: e.searchQuery,
                    isSearchSuggestion: e.isSearchSuggestion
                }), r.default), T = a.StickerPickerStore.useStore(e => e.searchPlaceholder), v = a.StickerPickerStore.useStore(e => e.inspectedExpressionPosition, r.default), y = i.useCallback(e => {
                    var t;
                    a.StickerPickerStore.setActiveCategoryIndex("" === e ? 0 : c.INACTIVE_CATEGORY_INDEX), a.StickerPickerStore.setInspectedExpressionPosition(0, 0), a.StickerPickerStore.setSearchPlaceholder(null), (0, u.setSearchQuery)(e), null === (t = m.current) || void 0 === t || t.scrollTo(0)
                }, [m]), x = i.useCallback(() => {
                    (0, u.setSearchQuery)("")
                }, []);
                return i.useImperativeHandle(t, () => ({
                    focus: () => {
                        var e;
                        return null === (e = S.current) || void 0 === e ? void 0 : e.focus()
                    }
                })), i.useLayoutEffect(() => {
                    if (C) {
                        var e;
                        null === (e = S.current) || void 0 === e || e.focus()
                    }
                }, [C]), (0, l.jsx)("div", {
                    className: p.wrapper,
                    children: (0, l.jsx)(s.default, {
                        autoFocus: E,
                        disabled: !E,
                        query: g,
                        ref: S,
                        size: s.default.Sizes.MEDIUM,
                        placeholder: null != T ? T : E ? f.default.Messages.SEARCH_FOR_STICKERS : f.default.Messages.NO_STICKERS_TO_SEARCH_THROUGH,
                        onClear: x,
                        onKeyDown: n,
                        onQueryChange: y,
                        className: p.searchBar,
                        preventEscapePropagation: !1,
                        useKeyboardNavigation: !1,
                        inputProps: {
                            "aria-haspopup": "grid",
                            "aria-controls": c.GRID_NAVIGATOR_ID,
                            "aria-expanded": !0,
                            "aria-activedescendant": (0, o.makeGridId)(c.GRID_NAVIGATOR_ID, v.columnIndex, v.rowIndex)
                        }
                    })
                })
            });
            var h = m
        },
        281072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("181114"),
                o = n("216422"),
                s = n("113270"),
                a = n("782340"),
                u = n("72270");

            function d(e) {
                let {
                    analyticsSection: t,
                    buttonText: n
                } = e;
                return (0, l.jsxs)(r.default, {
                    className: u.premiumButton,
                    innerClassName: u.premiumButtonInner,
                    color: i.Button.Colors.GREEN,
                    size: i.Button.Sizes.SMALL,
                    onClick: () => (0, s.default)({
                        section: t
                    }),
                    children: [(0, l.jsx)(o.default, {
                        className: u.premiumButtonNitroWheel
                    }), null != n ? n : a.default.Messages.STICKER_PICKER_PREMIUM_EMPTY_STATE_CTA]
                })
            }
        },
        908408: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickersPremiumUpsell: function() {
                    return I
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("77078"),
                a = n("812204"),
                u = n("685665"),
                d = n("154889"),
                c = n("917247"),
                f = n("956597"),
                p = n("945330"),
                m = n("599110"),
                h = n("719923"),
                E = n("570759"),
                S = n("281072"),
                g = n("49111"),
                C = n("646718"),
                T = n("782340"),
                v = n("416841"),
                y = n("481927");
            let x = () => (0, E.setShowPremiumUpsell)(!1),
                I = e => {
                    var t, n, r;
                    let {
                        onLearnMore: E
                    } = e, {
                        analyticsLocations: I
                    } = (0, u.default)(a.default.PREMIUM_UPSELL);
                    i.useEffect(() => {
                        m.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            location_section: g.AnalyticsSections.STICKER_PICKER_UPSELL,
                            type: C.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                            location_stack: I
                        })
                    }, [I]);
                    let N = (0, c.usePremiumTrialOffer)(),
                        _ = (0, d.usePremiumDiscountOffer)(),
                        A = (null == N ? void 0 : null === (t = N.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === C.PremiumSubscriptionSKUs.TIER_0,
                        R = null != N || null != _;
                    return (0, l.jsxs)("div", {
                        className: o(v.upsellWrapper, {
                            [v.unifyTrialUpsell]: R
                        }),
                        children: [R ? (0, l.jsx)(f.default, {
                            trialOffer: N,
                            discountOffer: _,
                            onClose: x,
                            type: C.PremiumUpsellTypes.STICKER_PICKER_UPSELL,
                            subscriptionTier: null !== (r = null == N ? void 0 : null === (n = N.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== r ? r : C.PremiumSubscriptionSKUs.TIER_2,
                            children: A ? T.default.Messages.STICKER_PICKER_PREMIUM_TIER_UPSELL_DESCRIPTION.format({
                                planName: (0, h.getTierDisplayName)(C.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                onClick: E
                            }) : T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                                onClick: E
                            })
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("img", {
                                className: v.upsellImage,
                                src: y,
                                alt: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_ALT
                            }), (0, l.jsx)(s.Text, {
                                className: v.upsellTitle,
                                color: "header-primary",
                                variant: "text-lg/semibold",
                                children: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_TITLE
                            }), (0, l.jsx)(s.Text, {
                                className: v.upsellDescription,
                                variant: "text-md/normal",
                                children: T.default.Messages.STICKER_PICKER_PREMIUM_UPSELL_DESCRIPTION.format({
                                    onClick: E
                                })
                            })]
                        }), !R && (0, l.jsx)(S.default, {
                            analyticsSection: g.AnalyticsSections.EXPRESSION_PICKER,
                            buttonText: R ? A ? T.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : T.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0
                        }), (0, l.jsx)(s.Clickable, {
                            className: v.upsellClose,
                            onClick: x,
                            children: (0, l.jsx)(p.default, {})
                        })]
                    })
                }
        },
        641680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFilteredStickers: function() {
                    return r
                }
            }), n("424973");
            var l = n("866353"),
                i = n("386543");
            let r = (e, t, n) => {
                if ("" === e) return null;
                let r = [],
                    o = [];
                return (0, i.searchAllStickers)(e).forEach(e => {
                    let i = (0, l.getStickerSendability)(e, t, n);
                    i === l.StickerSendability.SENDABLE ? r.push(e) : i === l.StickerSendability.SENDABLE_WITH_PREMIUM && o.push(e)
                }), {
                    sendable: r,
                    sendableWithPremium: o
                }
            }
        },
        113270: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("599110"),
                o = n("49111");

            function s(e) {
                r.default.track(o.AnalyticEvents.OPEN_MODAL, {
                    type: o.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL,
                    location: e
                }), (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("122846").then(n.bind(n, "122846"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }
        },
        209069: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("77078"),
                r = n("599110"),
                o = n("49111");

            function s(e) {
                let {
                    stickerPack: t,
                    sourceSticker: s,
                    analyticsLocations: a,
                    analyticsLocation: u
                } = e;
                return r.default.track(o.AnalyticEvents.STICKER_PACK_VIEW_ALL, {
                    sticker_id: null == s ? void 0 : s.id,
                    sticker_pack_id: t.id,
                    location: u,
                    location_stack: a
                }), r.default.track(o.AnalyticEvents.OPEN_MODAL, {
                    type: o.AnalyticsSections.STICKER_PACK_VIEW_ALL,
                    location: u
                }), (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("656137").then(n.bind(n, "656137"));
                    return n => (0, l.jsx)(e, {
                        stickerPack: t,
                        ...n
                    })
                })
            }
        },
        318981: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("446674"),
                i = n("913144"),
                r = n("49111");
            let o = {},
                s = {
                    integration: "",
                    query: ""
                };
            class a extends l.default.Store {
                getResults(e, t) {
                    if (null == e || null == t) return null;
                    let n = o[e];
                    return null != n && null != n[t] ? n[t] : null
                }
                getQuery() {
                    return s
                }
            }
            a.displayName = "IntegrationQueryStore";
            var u = new a(i.default, {
                INTEGRATION_QUERY: function(e) {
                    var t;
                    let {
                        integration: n,
                        query: l
                    } = e;
                    o[n] = null !== (t = o[n]) && void 0 !== t ? t : {}, o[n][l] = {
                        loading: !0,
                        results: []
                    }
                },
                INTEGRATION_QUERY_SUCCESS: function(e) {
                    let {
                        integration: t,
                        query: n,
                        results: l
                    } = e;
                    o[t][n] = {
                        loading: !1,
                        results: l.map(e => ({
                            type: r.ChannelTextAreaIntegrations[t].type,
                            meta: e
                        }))
                    }, s = {
                        query: n,
                        integration: t
                    }
                },
                INTEGRATION_QUERY_FAILURE: function(e) {
                    let {
                        integration: t,
                        query: n
                    } = e;
                    delete o[t][n]
                }
            })
        },
        769264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var l = n("446674"),
                i = n("95410"),
                r = n("913144"),
                o = n("749866");
            let s = "SpellcheckStore",
                a = !0,
                u = new Set;

            function d() {
                i.default.set(s, {
                    enabled: a,
                    learnedWords: u
                })
            }
            class c extends l.default.Store {
                initialize() {
                    let e = i.default.get(s);
                    null != e && (a = e.enabled, u = new Set(e.learnedWords), (0, o.setEnabled)(a), (0, o.setLearnedWords)(u))
                }
                isEnabled() {
                    return a
                }
                hasLearnedWord(e) {
                    return u.has(e.toLocaleLowerCase())
                }
            }
            c.displayName = "SpellcheckStore";
            var f = new c(r.default, {
                SPELLCHECK_TOGGLE() {
                    a = !a, (0, o.setEnabled)(a), d()
                },
                SPELLCHECK_LEARN_WORD(e) {
                    let {
                        word: t
                    } = e;
                    u.add(t.toLocaleLowerCase()), (0, o.setLearnedWords)(u), d()
                },
                SPELLCHECK_UNLEARN_WORD(e) {
                    let {
                        word: t
                    } = e;
                    u.delete(t.toLocaleLowerCase()), (0, o.setLearnedWords)(u), d()
                },
                I18N_LOAD_SUCCESS(e) {
                    let {
                        locale: t
                    } = e;
                    (0, o.setAppLocale)(t)
                }
            })
        },
        501536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getAutocompleteRowId: function() {
                    return M
                },
                getAutocompleteTitleId: function() {
                    return k
                },
                default: function() {
                    return U
                }
            }), n("70102"), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("414456"),
                o = n.n(r),
                s = n("917351"),
                a = n.n(s),
                u = n("974667"),
                d = n("77078"),
                c = n("206230"),
                f = n("524768"),
                p = n("596182"),
                m = n("41884"),
                h = n("679653"),
                E = n("419830"),
                S = n("404345"),
                g = n("364685"),
                C = n("24373"),
                T = n("305961"),
                v = n("27618"),
                y = n("697218"),
                x = n("158998"),
                I = n("563911"),
                N = n("346955"),
                _ = n("548775"),
                A = n("49111"),
                R = n("782340"),
                O = n("241970");

            function M(e) {
                return null != e ? "autocomplete-".concat(e) : null
            }

            function k(e) {
                return "autocomplete-".concat(e, "-title")
            }
            let b = i.createContext(null);
            class P extends i.PureComponent {
                isSelectable() {
                    return this.selectable
                }
                renderContent() {
                    throw Error("AutocompleteRow: renderContent must be extended")
                }
                renderClickable(e) {
                    var t;
                    let {
                        layoutClass: n,
                        props: {
                            className: i,
                            index: r,
                            selected: s
                        }
                    } = this, a = this.isSelectable();
                    return (0, l.jsx)(d.Clickable, {
                        ...e,
                        className: o(O.clickable, i, n),
                        id: null !== (t = M(r)) && void 0 !== t ? t : void 0,
                        onClick: a ? this.handleClick : void 0,
                        onMouseMove: a ? () => {
                            this.setState({
                                hovered: !0
                            }), this.handleMouseEnter()
                        } : void 0,
                        onMouseLeave: a ? () => this.setState({
                            hovered: !1
                        }) : void 0,
                        role: "option",
                        "aria-disabled": !a,
                        "aria-selected": a && s,
                        children: (0, l.jsx)("div", {
                            className: O.base,
                            children: this.renderContent()
                        })
                    })
                }
                render() {
                    let {
                        index: e
                    } = this.props, t = this.isSelectable();
                    return t ? (0, l.jsx)(u.ListNavigatorItem, {
                        id: "".concat(e),
                        children: e => this.renderClickable(e)
                    }) : this.renderClickable()
                }
                constructor(e) {
                    super(e), this.selectable = !0, this.layoutClass = O.autocompleteRowVertical, this.handleMouseEnter = () => {
                        let {
                            onHover: e,
                            index: t,
                            selected: n
                        } = this.props;
                        null == e || n || "number" != typeof t || e(t)
                    }, this.handleClick = e => {
                        let {
                            onClick: t,
                            index: n
                        } = this.props;
                        null != t && "number" == typeof n && t(n, e)
                    }, this.state = {
                        hovered: !1
                    }
                }
            }
            class L extends i.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        innerClassName: n,
                        id: r,
                        ...s
                    } = this.props;
                    return i.Children.count(e) > 0 ? (0, l.jsx)(b.Provider, {
                        value: {
                            id: null != r ? r : ""
                        },
                        children: (0, l.jsx)("div", {
                            className: o(O.autocomplete, t),
                            children: (0, l.jsx)("div", {
                                className: o(O.autocompleteInner, n),
                                ...s,
                                children: e
                            })
                        })
                    }) : null
                }
            }
            L.Generic = class e extends P {
                renderContent() {
                    let {
                        text: e,
                        description: t
                    } = this.props;
                    return (0, l.jsxs)(I.AutocompleteRowContent, {
                        children: [(0, l.jsx)(I.AutocompleteRowContentPrimary, {
                            children: (0, l.jsx)(I.AutocompleteRowHeading, {
                                children: e
                            })
                        }), null != t ? (0, l.jsx)(I.AutocompleteRowContentSecondary, {
                            children: t
                        }) : null]
                    })
                }
            }, L.Loading = function(e) {
                let t = i.useMemo(() => a.random(60, 120), []);
                return (0, l.jsx)("div", {
                    className: O.base,
                    "aria-busy": !0,
                    children: (0, l.jsx)(I.AutocompleteRowContent, {
                        children: (0, l.jsx)(I.AutocompleteRowContentPrimary, {
                            children: (0, l.jsx)(I.AutocompleteRowHeading, {
                                children: (0, l.jsx)("div", {
                                    className: O.autocompletePlaceholder,
                                    style: {
                                        width: t
                                    }
                                })
                            })
                        })
                    })
                })
            }, L.Title = function(e) {
                let {
                    title: t,
                    className: n,
                    children: r
                } = e, s = i.useContext(b);
                return (0, l.jsx)("div", {
                    className: O.base,
                    children: (0, l.jsxs)(d.Heading, {
                        id: k(s.id),
                        className: o(O.contentTitle, n),
                        variant: "heading-deprecated-12/semibold",
                        children: [t, r]
                    })
                })
            }, L.Divider = class e extends P {
                renderContent() {
                    let {
                        className: e
                    } = this.props;
                    return (0, l.jsx)("div", {
                        className: o(e, O.divider)
                    })
                }
                constructor(...e) {
                    super(...e), this.layoutClass = O.dividerContainer, this.selectable = !1
                }
            }, L.User = class e extends P {
                renderContent() {
                    let {
                        user: e,
                        nick: t,
                        status: n,
                        hidePersonalInformation: i,
                        guildId: r
                    } = this.props;
                    return (0, l.jsxs)(I.AutocompleteRowContent, {
                        children: [(0, l.jsx)(I.AutocompleteRowIcon, {
                            children: (0, l.jsx)(d.Avatar, {
                                size: d.AvatarSizes.SIZE_24,
                                src: e.getAvatarURL(r, 24),
                                "aria-hidden": !0,
                                status: n
                            })
                        }), (0, l.jsx)(I.AutocompleteRowContentPrimary, {
                            children: (0, l.jsx)(I.AutocompleteRowHeading, {
                                children: null != t ? t : x.default.getName(e)
                            })
                        }), (0, l.jsxs)(I.AutocompleteRowContentSecondary, {
                            children: [(0, l.jsx)("span", {
                                className: O.descriptionUsername,
                                children: x.default.getUserTag(e, {
                                    mode: "username",
                                    identifiable: i ? "never" : "always"
                                })
                            }), i || e.isPomelo() ? null : (0, l.jsxs)("span", {
                                className: O.descriptionDiscriminator,
                                children: ["#", e.discriminator]
                            })]
                        })]
                    })
                }
            }, L.Role = class e extends P {
                renderContent() {
                    let {
                        role: e,
                        hideDescription: t
                    } = this.props, {
                        colorString: n
                    } = e, i = "dot" === c.default.roleStyle, r = "username" === c.default.roleStyle && null != n, o = r ? {
                        color: n
                    } : void 0;
                    return (0, l.jsxs)(I.AutocompleteRowContent, {
                        children: [(0, l.jsx)(I.AutocompleteRowContentPrimary, {
                            children: (0, l.jsxs)(I.AutocompleteRowHeading, {
                                children: [i && (0, l.jsx)(d.RoleDot, {
                                    className: O.roleDot,
                                    color: n,
                                    tooltip: !1
                                }), (0, l.jsxs)("span", {
                                    style: o,
                                    children: ["@", e.name]
                                })]
                            })
                        }), t ? null : (0, l.jsx)(I.AutocompleteRowContentSecondary, {
                            children: R.default.Messages.MENTION_USERS_WITH_ROLE
                        })]
                    })
                }
            }, L.Channel = class e extends P {
                renderContent() {
                    let {
                        channel: e,
                        category: t
                    } = this.props, n = e.type === A.ChannelTypes.GUILD_CATEGORY ? N.default : (0, E.getChannelIconComponent)(e);
                    return (0, l.jsxs)(I.AutocompleteRowContent, {
                        children: [null != n && (0, l.jsx)(I.AutocompleteRowIcon, {
                            children: (0, l.jsx)(n, {
                                className: O.icon
                            })
                        }), (0, l.jsx)(I.AutocompleteRowContentPrimary, {
                            children: (0, l.jsx)(I.AutocompleteRowHeading, {
                                children: (0, h.computeChannelName)(e, y.default, v.default)
                            })
                        }), null != t ? (0, l.jsx)(I.AutocompleteRowContentSecondary, {
                            children: t.name
                        }) : null]
                    })
                }
            }, L.Command = class e extends P {
                renderContent() {
                    let {
                        command: e
                    } = this.props;
                    return (0, l.jsxs)(I.AutocompleteRowContent, {
                        children: [(0, l.jsx)(I.AutocompleteRowIcon, {
                            children: (0, l.jsx)(_.default, {
                                className: O.icon,
                                foreground: O.iconForeground
                            })
                        }), (0, l.jsx)(I.AutocompleteRowContentPrimary, {
                            children: (0, l.jsx)(I.AutocompleteRowHeading, {
                                children: e.name
                            })
                        }), (0, l.jsx)(I.AutocompleteRowContentSecondary, {
                            children: e.description
                        })]
                    })
                }
            }, L.NewCommand = class e extends P {
                isSelectable() {
                    return this.props.command.inputType !== f.ApplicationCommandInputType.PLACEHOLDER
                }
                renderContent() {
                    let {
                        command: e,
                        channel: t,
                        showImage: n,
                        section: i,
                        selected: r
                    } = this.props, {
                        hovered: o
                    } = this.state, s = this.isSelectable();
                    return e.inputType === f.ApplicationCommandInputType.PLACEHOLDER ? (0, l.jsx)(m.default, {}) : (0, l.jsx)(p.default, {
                        command: e,
                        channel: t,
                        showImage: n,
                        showOptions: o || s && r,
                        section: i,
                        isSelectable: s
                    })
                }
            }, L.Emoji = class e extends P {
                renderContent() {
                    let {
                        emoji: e,
                        sentinel: t,
                        guild: n,
                        pack: i
                    } = this.props, r = null != e.url && "" !== e.url ? (0, l.jsx)("img", {
                        alt: "",
                        className: O.emojiImage,
                        src: e.url
                    }) : (0, l.jsx)("span", {
                        className: O.emojiRaw,
                        children: e.surrogates
                    }), o = null != i ? (0, l.jsx)(I.AutocompleteRowContentSecondary, {
                        children: R.default.Messages.EMOJI_CATEGORY_PACK.format({
                            packName: i.name
                        })
                    }) : null != n ? (0, l.jsx)(I.AutocompleteRowContentSecondary, {
                        children: n.name
                    }) : null;
                    return (0, l.jsxs)(I.AutocompleteRowContent, {
                        children: [(0, l.jsx)(I.AutocompleteRowIcon, {
                            children: r
                        }), (0, l.jsx)(I.AutocompleteRowContentPrimary, {
                            children: (0, l.jsxs)(I.AutocompleteRowHeading, {
                                children: [t, e.name, t]
                            })
                        }), o]
                    })
                }
                constructor(...e) {
                    super(...e), this.layoutClass = o(O.autocompleteRowVertical, O.autocompleteRowVerticalSmall)
                }
            }, L.GIFIntegration = class e extends P {
                renderContent() {
                    let {
                        width: e,
                        height: t,
                        src: n
                    } = this.props;
                    return (0, l.jsx)("img", {
                        alt: "",
                        src: n,
                        width: e,
                        height: t
                    })
                }
                constructor(...e) {
                    super(...e), this.layoutClass = O.autocompleteRowHorizontal
                }
            }, L.Sticker = class e extends P {
                renderContent() {
                    var e, t;
                    let n;
                    let {
                        queryMatch: i,
                        renderSticker: r,
                        selected: o,
                        sticker: s
                    } = this.props, {
                        hovered: a
                    } = this.state;
                    return (0, C.isStandardSticker)(s) ? n = null === (e = g.default.getStickerPack(s.pack_id)) || void 0 === e ? void 0 : e.name : (0, C.isGuildSticker)(s) && (n = null === (t = T.default.getGuild(s.guild_id)) || void 0 === t ? void 0 : t.name), (0, l.jsxs)(I.AutocompleteRowContent, {
                        children: [(0, l.jsx)(I.AutocompleteRowIcon, {
                            children: r(s, a || !0 === o)
                        }), (0, l.jsxs)(I.AutocompleteRowContentPrimary, {
                            children: [(0, l.jsx)(I.AutocompleteRowHeading, {
                                className: O.stickerName,
                                children: s.name
                            }), null != i && (0, l.jsx)(I.AutocompleteRowSubheading, {
                                children: R.default.Messages.AUTOCOMPLETE_STICKERS_QUERY_MATCH.format({
                                    queryMatch: i
                                })
                            })]
                        }), null != n && (0, l.jsx)(I.AutocompleteRowContentSecondary, {
                            children: n
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.layoutClass = o(O.autocompleteRowVertical, O.autocompleteRowVerticalSmall)
                }
            }, L.EmojiUpsell = class e extends P {
                renderContent() {
                    return (0, l.jsx)(S.default, {
                        emojis: this.props.emojis
                    })
                }
            };
            var U = L
        },
        563911: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutocompleteRowContent: function() {
                    return a
                },
                AutocompleteRowContentPrimary: function() {
                    return u
                },
                AutocompleteRowIcon: function() {
                    return d
                },
                AutocompleteRowHeading: function() {
                    return c
                },
                AutocompleteRowSubheading: function() {
                    return f
                },
                AutocompleteRowContentSecondary: function() {
                    return p
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("77078"),
                s = n("241970");
            let a = e => {
                    let {
                        children: t,
                        className: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: r(s.autocompleteRowContent, n),
                        children: t
                    })
                },
                u = e => {
                    let {
                        children: t,
                        className: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: r(s.autocompleteRowContentPrimary, n),
                        children: t
                    })
                },
                d = e => {
                    let {
                        children: t,
                        className: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: r(s.autocompleteRowIcon, n),
                        children: t
                    })
                },
                c = e => {
                    let {
                        children: t,
                        className: n
                    } = e;
                    return (0, l.jsx)(o.Text, {
                        className: r(n, s.autocompleteRowHeading),
                        color: "interactive-active",
                        variant: "text-md/normal",
                        children: t
                    })
                },
                f = e => {
                    let {
                        children: t,
                        className: n
                    } = e;
                    return (0, l.jsx)(o.Text, {
                        className: r(n, s.autocompleteRowSubheading),
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: t
                    })
                },
                p = e => {
                    let {
                        children: t,
                        className: n
                    } = e;
                    return (0, l.jsx)(o.Text, {
                        className: r(n, s.autocompleteRowContentSecondary),
                        color: "interactive-normal",
                        variant: "text-xs/normal",
                        children: t
                    })
                }
        },
        520089: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("429672"),
                o = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            d: "M19.8401 5.39392C20.1229 4.73405 19.6389 4 18.921 4H17.1231C16.7417 4 16.3935 4.21695 16.2254 4.55933L13.3297 10.4581C13.195 10.7324 13.125 11.0339 13.125 11.3394V19C13.125 19.5523 13.5727 20 14.125 20H20C20.5523 20 21 19.5523 21 19V12.875C21 12.3227 20.5523 11.875 20 11.875H17.8208C17.4618 11.875 17.2198 11.508 17.3612 11.178L19.8401 5.39392ZM9.71511 5.39392C9.99791 4.73405 9.51388 4 8.79596 4H6.99809C6.61669 4 6.2685 4.21695 6.10042 4.55933L3.20466 10.4581C3.07001 10.7324 3 11.0339 3 11.3394V19C3 19.5523 3.44772 20 4 20H9.875C10.4273 20 10.875 19.5523 10.875 19V12.875C10.875 12.3227 10.4273 11.875 9.875 11.875H7.69577C7.33681 11.875 7.0948 11.508 7.2362 11.178L9.71511 5.39392Z"
                        })
                    })
                }, r.QuoteIcon, void 0, {
                    size: 24
                })
        },
        769215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("450321"),
                o = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M5.13525 22.0002V1.99023H13.5743C15.1596 1.99023 16.4356 2.45423 17.4023 3.38224C18.3883 4.31024 18.8813 5.5379 18.8813 7.06523C18.8813 8.2639 18.6009 9.23057 18.0403 9.96524C17.4989 10.6806 16.7933 11.2026 15.9233 11.5312C18.4173 12.1306 19.6643 13.7739 19.6643 16.4612C19.6643 18.3366 19.1036 19.7286 17.9823 20.6372C16.8803 21.5459 15.3143 22.0002 13.2843 22.0002H5.13525ZM12.4143 10.2842C14.4829 10.2842 15.5173 9.3949 15.5173 7.61624C15.5173 6.70757 15.2466 6.0309 14.7053 5.58623C14.1639 5.14157 13.4003 4.91923 12.4143 4.91923H8.49925V10.2842H12.4143ZM12.8493 19.0712C13.8933 19.0712 14.7246 18.8392 15.3433 18.3752C15.9813 17.9112 16.3003 17.1669 16.3003 16.1422C16.3003 15.1176 15.9813 14.3732 15.3433 13.9092C14.7246 13.4452 13.8933 13.2132 12.8493 13.2132H8.49925V19.0712H12.8493Z"
                        })
                    })
                }, r.BoldIcon, void 0, {
                    size: 24
                })
        },
        685020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("652397"),
                o = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M21 4V2H11V4H14.461L7.351 20H3V22H13V20H9.539L16.649 4H21Z"
                        })
                    })
                }, r.ItalicIcon, void 0, {
                    size: 24
                })
        },
        433328: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                r = n("669491"),
                o = n("75196");
            let s = "currentColor",
                a = new Map([
                    ["url(#birthday_gradient_1)", "url(#birthday_secondary_gradient_1)"],
                    ["url(#birthday_gradient_2)", "url(#birthday_secondary_gradient_2)"],
                    ["url(#birthday_gradient_3)", "url(#birthday_secondary_gradient_3)"]
                ]),
                u = new Map([
                    ["url(#birthday_gradient_1_light)", "url(#birthday_secondary_gradient_1_light)"],
                    ["url(#birthday_gradient_2_light)", "url(#birthday_secondary_gradient_2_light)"],
                    ["url(#birthday_gradient_3_light)", "url(#birthday_secondary_gradient_3_light)"]
                ]),
                d = e => {
                    let {
                        referralsRemaining: t,
                        fillColor: n,
                        secondaryFillColor: i
                    } = e;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M27.1899 15.6966C26.7297 16.7497 26.0852 17.7137 25.2855 18.5425C24.38 19.4811 23.2941 20.2272 22.0931 20.7358C19.704 21.7967 16.9967 21.8902 14.54 20.9969C12.0833 20.1036 10.0685 18.2928 8.91879 15.9452C8.46102 14.9636 8.16829 13.9132 8.05239 12.8363H6.06478C5.8034 12.8364 5.55253 12.7334 5.36652 12.5498C5.1805 12.3661 5.07432 12.1166 5.07097 11.8553C5.07263 11.7264 5.09966 11.5992 5.1505 11.4808C5.20135 11.3624 5.27502 11.2552 5.3673 11.1653C5.45959 11.0753 5.56868 11.0045 5.68836 10.9567C5.80803 10.909 5.93594 10.8853 6.06478 10.8869H8.91879C9.04763 10.8869 9.1752 10.8616 9.29423 10.8123C9.41326 10.763 9.52141 10.6907 9.61251 10.5996C9.70361 10.5085 9.77588 10.4003 9.82518 10.2813C9.87448 10.1623 9.89986 10.0347 9.89986 9.90587C9.89986 9.77704 9.87448 9.64946 9.82518 9.53043C9.77588 9.4114 9.70361 9.30325 9.61251 9.21215C9.52141 9.12105 9.41326 9.04879 9.29423 8.99948C9.1752 8.95018 9.04763 8.9248 8.91879 8.9248H4.34473C4.21589 8.92649 4.08798 8.90278 3.9683 8.85502C3.84863 8.80727 3.73954 8.73641 3.64725 8.64649C3.55496 8.55657 3.4813 8.44935 3.43045 8.33096C3.37961 8.21257 3.35258 8.08532 3.35092 7.95648C3.35427 7.69512 3.46045 7.4456 3.64646 7.26197C3.83248 7.07834 4.08334 6.97539 4.34473 6.97541H10.779C10.9164 6.99114 11.0555 6.97766 11.1873 6.93586C11.3191 6.89405 11.4405 6.82487 11.5437 6.73283C11.6469 6.6408 11.7294 6.528 11.7859 6.40183C11.8425 6.27566 11.8717 6.13897 11.8717 6.00071C11.8717 5.86246 11.8425 5.72577 11.7859 5.5996C11.7294 5.47342 11.6469 5.36063 11.5437 5.26859C11.4405 5.17656 11.3191 5.10738 11.1873 5.06557C11.0555 5.02377 10.9164 5.01029 10.779 5.02602H8.19255C7.98262 5.04532 7.77097 5.02064 7.57112 4.95354C7.37127 4.88644 7.1876 4.7784 7.03186 4.63632C6.87611 4.49424 6.75171 4.32124 6.66659 4.12838C6.58147 3.93551 6.53751 3.72701 6.53751 3.51619C6.53751 3.30538 6.58147 3.09688 6.66659 2.90401C6.75171 2.71115 6.87611 2.53815 7.03186 2.39607C7.1876 2.25399 7.37127 2.14595 7.57112 2.07885C7.77097 2.01175 7.98262 1.98707 8.19255 2.00637H18.3855C18.7845 2.02155 19.181 2.06039 19.573 2.12223C18.4001 3.20574 17.5522 4.63592 17.192 6.25005C16.658 6.32722 16.133 6.48003 15.6334 6.70785C14.9556 7.00255 14.3439 7.43011 13.8342 7.96527C13.3245 8.50042 12.9273 9.13232 12.666 9.82361C12.4047 10.5149 12.2846 11.2515 12.3128 11.99C12.341 12.7285 12.517 13.4539 12.8303 14.1232C13.4795 15.479 14.6341 16.5265 16.0465 17.041C17.4589 17.5554 19.0167 17.496 20.3858 16.8753C21.0624 16.5792 21.673 16.1508 22.1817 15.6154C22.2111 15.5845 22.2401 15.5532 22.2687 15.5216C23.121 15.8312 24.0408 16 25 16C25.7593 16 26.4939 15.8942 27.1899 15.6966ZM20.4791 14.601L20.1568 15.1419C20.1268 15.1966 20.0825 15.242 20.0286 15.2734C19.9748 15.3049 19.9134 15.3211 19.851 15.3203H16.1943C16.132 15.3211 16.0706 15.3049 16.0167 15.2734C15.9629 15.242 15.9185 15.1966 15.8885 15.1419L14.0156 12.0203C13.9844 11.9638 13.968 11.9002 13.968 11.8356C13.968 11.771 13.9844 11.7074 14.0156 11.6508L15.8885 8.59296C15.9211 8.54156 15.9664 8.49936 16.0199 8.47036C16.0734 8.44137 16.1335 8.42656 16.1943 8.42733H17.0112C17.1461 10.991 18.488 13.2347 20.4791 14.601ZM1.54168 8.9248C1.80309 8.92824 2.05533 8.82853 2.24374 8.64728C2.43215 8.46602 2.54155 8.21783 2.54823 7.95648C2.54165 7.69616 2.43445 7.44851 2.24913 7.26557C2.06381 7.08263 1.8148 6.97862 1.55442 6.97541H0.993808C0.733423 6.97862 0.484416 7.08263 0.299097 7.26557C0.113779 7.44851 0.00657271 7.69616 0 7.95648C0.0066466 8.21561 0.114278 8.46189 0.299938 8.64279C0.485597 8.82369 0.73459 8.92489 0.993808 8.9248H1.54168Z",
                            fill: n
                        }), (0, l.jsx)("path", {
                            d: "M31 8C31 11.3137 28.3137 14 25 14C21.6863 14 19 11.3137 19 8C19 4.68629 21.6863 2 25 2C28.3137 2 31 4.68629 31 8Z",
                            fill: null != i ? i : n,
                            mask: "url(#mask)"
                        }), (0, l.jsxs)("mask", {
                            id: "mask",
                            children: [(0, l.jsx)("path", {
                                d: "M31 8C31 11.3137 28.3137 14 25 14C21.6863 14 19 11.3137 19 8C19 4.68629 21.6863 2 25 2C28.3137 2 31 4.68629 31 8Z",
                                fill: "white"
                            }), (0, l.jsx)("text", {
                                fill: "black",
                                fontFamily: "gg sans",
                                fontSize: "12",
                                fontWeight: "600",
                                letterSpacing: "0em",
                                children: (0, l.jsx)("tspan", {
                                    x: "21.6367",
                                    y: "12.212",
                                    children: t
                                })
                            })]
                        })]
                    })
                },
                c = e => {
                    let {
                        fillColor: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.24374 8.64728C3.05533 8.82853 2.80309 8.92824 2.54168 8.9248H1.99381C1.73459 8.92489 1.4856 8.82369 1.29994 8.64279C1.11428 8.46189 1.00665 8.21561 1 7.95648C1.00657 7.69616 1.11378 7.44851 1.2991 7.26557C1.48442 7.08263 1.73342 6.97862 1.99381 6.97541H2.55442C2.8148 6.97862 3.06381 7.08263 3.24913 7.26557C3.43445 7.44851 3.54165 7.69616 3.54823 7.95648C3.54155 8.21783 3.43215 8.46602 3.24374 8.64728ZM26.2855 18.5425C25.38 19.4811 24.2941 20.2272 23.0931 20.7358C20.704 21.7967 17.9967 21.8902 15.54 20.9969C13.0833 20.1036 11.0685 18.2928 9.91879 15.9452C9.46102 14.9636 9.16829 13.9132 9.05239 12.8363H7.06478C6.8034 12.8364 6.55253 12.7334 6.36652 12.5498C6.1805 12.3661 6.07432 12.1166 6.07097 11.8553C6.07263 11.7264 6.09966 11.5992 6.1505 11.4808C6.20135 11.3624 6.27502 11.2552 6.3673 11.1653C6.45959 11.0753 6.56868 11.0045 6.68836 10.9567C6.80803 10.909 6.93594 10.8853 7.06478 10.8869H9.91879C10.0476 10.8869 10.1752 10.8616 10.2942 10.8123C10.4133 10.763 10.5214 10.6907 10.6125 10.5996C10.7036 10.5085 10.7759 10.4003 10.8252 10.2813C10.8745 10.1623 10.8999 10.0347 10.8999 9.90587C10.8999 9.77704 10.8745 9.64946 10.8252 9.53043C10.7759 9.4114 10.7036 9.30325 10.6125 9.21215C10.5214 9.12105 10.4133 9.04879 10.2942 8.99948C10.1752 8.95018 10.0476 8.9248 9.91879 8.9248H5.34473C5.21589 8.92649 5.08798 8.90278 4.9683 8.85502C4.84863 8.80727 4.73954 8.73641 4.64725 8.64649C4.55496 8.55657 4.4813 8.44935 4.43045 8.33096C4.37961 8.21257 4.35258 8.08532 4.35092 7.95648C4.35427 7.69512 4.46045 7.4456 4.64646 7.26197C4.83248 7.07834 5.08334 6.97539 5.34473 6.97541H11.779C11.9164 6.99114 12.0555 6.97766 12.1873 6.93586C12.3191 6.89405 12.4405 6.82487 12.5437 6.73283C12.6469 6.6408 12.7294 6.528 12.7859 6.40183C12.8425 6.27566 12.8717 6.13897 12.8717 6.00071C12.8717 5.86246 12.8425 5.72577 12.7859 5.5996C12.7294 5.47342 12.6469 5.36063 12.5437 5.26859C12.4405 5.17656 12.3191 5.10738 12.1873 5.06557C12.0555 5.02377 11.9164 5.01029 11.779 5.02602H9.19255C8.98262 5.04532 8.77097 5.02064 8.57112 4.95354C8.37127 4.88644 8.1876 4.7784 8.03186 4.63632C7.87611 4.49424 7.75171 4.32124 7.66659 4.12838C7.58147 3.93551 7.53751 3.72701 7.53751 3.51619C7.53751 3.30538 7.58147 3.09688 7.66659 2.90401C7.75171 2.71115 7.87611 2.53815 8.03186 2.39607C8.1876 2.25399 8.37127 2.14595 8.57112 2.07885C8.77097 2.01175 8.98262 1.98707 9.19255 2.00637H19.3855C21.2132 2.07591 22.9875 2.64152 24.5182 3.64258C26.049 4.64363 27.2785 6.04239 28.0749 7.68891C28.6312 8.86858 28.9435 10.1485 28.993 11.4518C29.0425 12.7551 28.8282 14.055 28.363 15.2735C27.8977 16.4919 27.1911 17.6039 26.2855 18.5425ZM13.3128 11.99C13.341 12.7285 13.517 13.4539 13.8303 14.1232C14.4795 15.479 15.6341 16.5265 17.0465 17.041C18.4589 17.5554 20.0167 17.496 21.3858 16.8753C22.0624 16.5792 22.673 16.1508 23.1817 15.6154C23.6904 15.08 24.0869 14.4484 24.3481 13.7576C24.6092 13.0667 24.7296 12.3307 24.7023 11.5927C24.6749 10.8547 24.5004 10.1295 24.1889 9.45993C23.5422 8.1018 22.3878 7.05217 20.9744 6.53736C19.5611 6.02254 18.002 6.08377 16.6334 6.70785C15.9556 7.00255 15.3439 7.43011 14.8342 7.96527C14.3245 8.50042 13.9273 9.13232 13.666 9.82361C13.4047 10.5149 13.2846 11.2515 13.3128 11.99ZM17.1943 8.42733H20.851C20.9185 8.43261 20.9831 8.45698 21.0372 8.49759C21.0914 8.5382 21.1328 8.59337 21.1568 8.65667L22.9788 11.7145C23.01 11.7711 23.0264 11.8347 23.0264 11.8993C23.0264 11.9639 23.01 12.0275 22.9788 12.084L21.1568 15.1419C21.1268 15.1966 21.0825 15.242 21.0286 15.2734C20.9748 15.3049 20.9134 15.3211 20.851 15.3203H17.1943C17.132 15.3211 17.0706 15.3049 17.0167 15.2734C16.9629 15.242 16.9185 15.1966 16.8885 15.1419L15.0156 12.0203C14.9844 11.9638 14.968 11.9002 14.968 11.8356C14.968 11.771 14.9844 11.7074 15.0156 11.6508L16.8885 8.59296C16.9211 8.54156 16.9664 8.49936 17.0199 8.47036C17.0734 8.44137 17.1335 8.42656 17.1943 8.42733Z",
                            fill: t
                        })
                    })
                },
                f = (e, t, n, l, i) => {
                    if (!t || l) return e ? "url(#nitro_hover)" : s;
                    let r = n ? [...u.keys()].filter(e => e !== i) : [...a.keys()].filter(e => e !== i),
                        o = Math.floor(Math.random() * r.length);
                    return r[o]
                };

            function p(e) {
                var t;
                let {
                    width: n = 31,
                    height: u = 22,
                    referralsRemaining: p,
                    isResending: m,
                    hovered: h,
                    shouldShowBirthdayUX: E,
                    isLightTheme: S,
                    ...g
                } = e, [C, T] = i.useState(s), v = null !== (t = a.get(C)) && void 0 !== t ? t : null;
                return i.useEffect(() => {
                    h ? T(e => f(h, E, S, m, e)) : m && T(s)
                }, [h, E, S, m]), (0, l.jsxs)("svg", {
                    width: n,
                    height: u,
                    ...(0, o.default)(g),
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [m ? (0, l.jsx)(c, {
                        fillColor: C
                    }) : (0, l.jsx)(d, {
                        referralsRemaining: p,
                        fillColor: h ? C : s,
                        secondaryFillColor: h ? v : null
                    }), (0, l.jsxs)("defs", {
                        children: [(0, l.jsxs)("linearGradient", {
                            id: "nitro_hover",
                            x1: "0",
                            y1: "11.8026",
                            x2: "27.1899",
                            y2: "11.8026",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                            }), (0, l.jsx)("stop", {
                                offset: "1",
                                stopColor: r.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_gradient_1",
                            x1: "0",
                            y1: "9.80261",
                            x2: "27.1899",
                            y2: "9.80261",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                "stop-color": "#FF52D2"
                            }), (0, l.jsx)("stop", {
                                offset: "1",
                                "stop-color": "#5665F9"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_secondary_gradient_1",
                            x1: "20",
                            y1: "8",
                            x2: "32",
                            y2: "8",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                "stop-color": "#FF52D2"
                            }), (0, l.jsx)("stop", {
                                offset: "1",
                                "stop-color": "#5665F9"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_gradient_2",
                            x1: "9.91249",
                            y1: "11.7943",
                            x2: "20.7838",
                            y2: "11.7943",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0.18",
                                "stop-color": "#A4EF00"
                            }), (0, l.jsx)("stop", {
                                offset: "0.24",
                                "stop-color": "#A2EB07"
                            }), (0, l.jsx)("stop", {
                                offset: "0.31",
                                "stop-color": "#9CE01B"
                            }), (0, l.jsx)("stop", {
                                offset: "0.41",
                                "stop-color": "#92CE3B"
                            }), (0, l.jsx)("stop", {
                                offset: "0.51",
                                "stop-color": "#83B568"
                            }), (0, l.jsx)("stop", {
                                offset: "0.62",
                                "stop-color": "#7196A1"
                            }), (0, l.jsx)("stop", {
                                offset: "0.74",
                                "stop-color": "#5C6FE6"
                            }), (0, l.jsx)("stop", {
                                offset: "0.77",
                                "stop-color": "#5665F9"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_secondary_gradient_2",
                            x1: "23.9334",
                            y1: "7.99494",
                            x2: "28.7314",
                            y2: "7.99494",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0.18",
                                "stop-color": "#A4EF00"
                            }), (0, l.jsx)("stop", {
                                offset: "0.24",
                                "stop-color": "#A2EB07"
                            }), (0, l.jsx)("stop", {
                                offset: "0.31",
                                "stop-color": "#9CE01B"
                            }), (0, l.jsx)("stop", {
                                offset: "0.41",
                                "stop-color": "#92CE3B"
                            }), (0, l.jsx)("stop", {
                                offset: "0.51",
                                "stop-color": "#83B568"
                            }), (0, l.jsx)("stop", {
                                offset: "0.62",
                                "stop-color": "#7196A1"
                            }), (0, l.jsx)("stop", {
                                offset: "0.74",
                                "stop-color": "#5C6FE6"
                            }), (0, l.jsx)("stop", {
                                offset: "0.77",
                                "stop-color": "#5665F9"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_gradient_3",
                            x1: "0.01376",
                            y1: "9.77244",
                            x2: "27.1954",
                            y2: "9.77244",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0.21",
                                "stop-color": "#A4EF00"
                            }), (0, l.jsx)("stop", {
                                offset: "0.95",
                                "stop-color": "#FF52D2"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_secondary_gradient_3",
                            x1: "19.0061",
                            y1: "5.98154",
                            x2: "31.0024",
                            y2: "5.98154",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0.21",
                                "stop-color": "#A4EF00"
                            }), (0, l.jsx)("stop", {
                                offset: "0.95",
                                "stop-color": "#FF52D2"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_gradient_1_light",
                            x1: "6.85923",
                            y1: "4.92266",
                            x2: "28.1595",
                            y2: "10.6567",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                "stop-color": "#8547C6"
                            }), (0, l.jsx)("stop", {
                                offset: "0.52899",
                                "stop-color": "#B845C1"
                            }), (0, l.jsx)("stop", {
                                offset: "1",
                                "stop-color": "#AB5D8A"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_secondary_gradient_1_light",
                            x1: "22.0273",
                            y1: "3.01307",
                            x2: "31.7431",
                            y2: "4.89899",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                "stop-color": "#8547C6"
                            }), (0, l.jsx)("stop", {
                                offset: "0.52899",
                                "stop-color": "#B845C1"
                            }), (0, l.jsx)("stop", {
                                offset: "1",
                                "stop-color": "#AB5D8A"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_gradient_2_light",
                            x1: "8.91249",
                            y1: "9.79433",
                            x2: "19.7838",
                            y2: "9.79433",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0.18",
                                "stop-color": "#9EE700"
                            }), (0, l.jsx)("stop", {
                                offset: "0.31",
                                "stop-color": "#9CE01B"
                            }), (0, l.jsx)("stop", {
                                offset: "0.41",
                                "stop-color": "#92CE3B"
                            }), (0, l.jsx)("stop", {
                                offset: "0.51",
                                "stop-color": "#83B568"
                            }), (0, l.jsx)("stop", {
                                offset: "0.62",
                                "stop-color": "#7196A1"
                            }), (0, l.jsx)("stop", {
                                offset: "0.74",
                                "stop-color": "#5C6FE6"
                            }), (0, l.jsx)("stop", {
                                offset: "0.77",
                                "stop-color": "#5665F9"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_secondary_gradient_2_light",
                            x1: "22.9334",
                            y1: "5.99494",
                            x2: "27.7314",
                            y2: "5.99494",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0.18",
                                "stop-color": "#9EE700"
                            }), (0, l.jsx)("stop", {
                                offset: "0.31",
                                "stop-color": "#9CE01B"
                            }), (0, l.jsx)("stop", {
                                offset: "0.41",
                                "stop-color": "#92CE3B"
                            }), (0, l.jsx)("stop", {
                                offset: "0.51",
                                "stop-color": "#83B568"
                            }), (0, l.jsx)("stop", {
                                offset: "0.62",
                                "stop-color": "#7196A1"
                            }), (0, l.jsx)("stop", {
                                offset: "0.74",
                                "stop-color": "#5C6FE6"
                            }), (0, l.jsx)("stop", {
                                offset: "0.77",
                                "stop-color": "#5665F9"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_gradient_3_light",
                            x1: "0.01376",
                            y1: "9.77244",
                            x2: "27.1954",
                            y2: "9.77244",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0.21",
                                "stop-color": "#9EE700"
                            }), (0, l.jsx)("stop", {
                                offset: "0.95",
                                "stop-color": "#FF52D2"
                            })]
                        }), (0, l.jsxs)("linearGradient", {
                            id: "birthday_secondary_gradient_3_light",
                            x1: "19.0061",
                            y1: "5.98154",
                            x2: "31.0024",
                            y2: "5.98154",
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, l.jsx)("stop", {
                                offset: "0.21",
                                "stop-color": "#9EE700"
                            }), (0, l.jsx)("stop", {
                                offset: "0.95",
                                "stop-color": "#FF52D2"
                            })]
                        })]
                    })]
                })
            }
        },
        265363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("736616"),
                o = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        children: [(0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                        }), (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                        })]
                    })
                }, r.EyeIcon, void 0, {
                    size: 24
                })
        },
        88497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("65969"),
                o = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, o.default)(s),
                        viewBox: "0 0 20 20",
                        children: (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10,5.42V.06H2a2,2,0,0,0-2,2V18a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V10H14.58A4.61,4.61,0,0,1,10,5.42Zm-6.64,9a1.11,1.11,0,1,1,1.12-1.11A1.11,1.11,0,0,1,3.33,14.44ZM10,15.55a3.33,3.33,0,0,1-3.33-3.33H8a2,2,0,0,0,4,0h1.33A3.33,3.33,0,0,1,10,15.55ZM12,5.4V.66A.65.65,0,0,1,13.12.2l6.69,6.68A.66.66,0,0,1,19.34,8H14.6A2.59,2.59,0,0,1,12,5.4Z"
                        })
                    })
                }, r.StickerIcon, void 0, {
                    size: 24
                })
        },
        140567: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                r = n("626625"),
                o = n("75196"),
                s = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        children: [(0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M22.004 10.8906H2V13.1133H12.002C13.8401 13.1133 15.336 14.6091 15.336 16.4473C15.336 18.2854 13.8401 19.7813 12.002 19.7813H8.668V18.67H6.44533V20.8926C6.44533 21.5061 6.94321 22.004 7.55667 22.004H12.002C15.0659 22.004 17.5587 19.5112 17.5587 16.4473C17.5587 15.1915 17.1241 14.0446 16.4196 13.1133H22.004V10.8906Z"
                        }), (0, l.jsx)("path", {
                            fill: i,
                            className: r,
                            d: "M8.87358 8.668C8.748 8.31904 8.66798 7.94786 8.66798 7.55667C8.66798 5.71852 10.1638 4.22267 12.002 4.22267H14.2246V5.334H16.4473V3.11133C16.4473 2.49788 15.9494 2 15.336 2H12.002C8.93803 2 6.44531 4.49272 6.44531 7.55667C6.44531 7.93674 6.48421 8.30904 6.55756 8.668H8.87358Z"
                        })]
                    })
                }, r.StrikethroughIcon, void 0, {
                    size: 24
                })
        },
        378765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ComponentDispatchGroupContext: function() {
                    return a
                },
                ComponentDispatchGroupProvider: function() {
                    return u
                },
                useComponentAction: function() {
                    return d
                },
                ComponentAction: function() {
                    return c
                }
            }), n("222007"), n("70102");
            var l = n("37983"),
                i = n("884691"),
                r = n("44170"),
                o = n("659500");
            class s {
                subscribe(e, t) {
                    o.ComponentDispatch.subscribe(e, t), this.emitter.on(e, t)
                }
                unsubscribe(e, t) {
                    o.ComponentDispatch.unsubscribe(e, t), this.emitter.off(e, t)
                }
                bumpDispatchPriority() {
                    for (let e of this.emitter.eventNames())
                        for (let t of this.emitter.listeners(e)) o.ComponentDispatch.resubscribe(e, t)
                }
                constructor() {
                    this.emitter = new r.EventEmitter
                }
            }
            let a = i.createContext(new class e {
                    subscribe(e, t) {
                        o.ComponentDispatch.subscribe(e, t)
                    }
                    unsubscribe(e, t) {
                        o.ComponentDispatch.unsubscribe(e, t)
                    }
                    bumpDispatchPriority() {}
                }),
                u = i.forwardRef(function(e, t) {
                    let {
                        children: n
                    } = e, r = i.useRef(null);

                    function o() {
                        return null === r.current && (r.current = new s), r.current
                    }
                    return i.useImperativeHandle(t, o), (0, l.jsx)(a.Provider, {
                        value: o(),
                        children: n
                    })
                });

            function d(e) {
                let {
                    event: t,
                    handler: n
                } = e, l = i.useContext(a), r = i.useRef(n);
                i.useEffect(() => {
                    r.current = n
                }, [n]);
                let o = null == n;
                return i.useEffect(() => {
                    if (o) return;
                    let e = function() {
                        for (var e, t = arguments.length, n = Array(t), l = 0; l < t; l++) n[l] = arguments[l];
                        null === (e = r.current) || void 0 === e || e.call(r, ...n)
                    };
                    return l.subscribe(t, e), () => {
                        l.unsubscribe(t, e)
                    }
                }, [l, t, o]), null
            }

            function c(e) {
                return d(e), null
            }
        },
        347647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007"), n("424973");
            let l = {
                    1: "bold",
                    4: "underline"
                },
                i = {
                    30: "black",
                    31: "red",
                    32: "green",
                    33: "yellow",
                    34: "blue",
                    35: "magenta",
                    36: "cyan",
                    37: "white"
                },
                r = {
                    40: "black",
                    41: "red",
                    42: "green",
                    43: "yellow",
                    44: "blue",
                    45: "magenta",
                    46: "cyan",
                    47: "white"
                },
                o = /\x1B\[(\d+(?:[:;]\d+)*)m/,
                s = new RegExp("(?=".concat(o.source, ")"));

            function a() {
                let e = [...u("foreground", i, ["38", "39"], !0), ...u("background", r, ["48", "49"], !0), ...u("style", l, [], !1), {
                    className: "ansi-control-sequence",
                    begin: o,
                    starts: {
                        end: s,
                        endsParent: !0
                    }
                }];
                return function(e) {
                    for (let t = 0; t < e.length; t++) e[t].contains = e.slice(t + 1)
                }(e), {
                    contains: [{
                        begin: s,
                        contains: e
                    }]
                }
            }

            function u(e, t, n, l) {
                let i = ["0", ...n];
                return l && i.push(...Object.keys(t)), Object.entries(t).map(t => {
                    var n, l, r, o;
                    let [a, u] = t;
                    return n = e, l = u, r = a, o = i, {
                        className: "ansi-".concat(n, "-").concat(l),
                        endsParent: !0,
                        begin: s,
                        "on:begin": (e, t) => {
                            let n = e[1].split(";");
                            for (let e of (void 0 === t.data.isOn && (t.data.isOn = !1), n)) e === r ? t.data.isOn = !0 : o.includes(e) && (t.data.isOn = !1);
                            !t.data.isOn && t.ignoreMatch()
                        }
                    }
                })
            }
        },
        86256: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var l = n("436443"),
                i = n("917351"),
                r = n.n(i),
                o = n("347647");
            l.default.registerLanguage("ansi", o.default);
            var s = {
                highlight(e, t, n) {
                    if (! function(e) {
                            if (e.indexOf(a) >= 0) return !1;
                            let t = 0,
                                n = e.split("\n");
                            for (let e of n) {
                                if (e.length > 1e3) return !1;
                                null == e.match(/^\s*[/][/]/) && null != e.match(/[^/]/) && (t = 0);
                                let n = e.match(/[/]/g);
                                if (null != n && (t += n.length) > 30) return !1
                            }
                            return !0
                        }(t)) return null;
                    Date.now();
                    let i = l.default.highlight(e, t, n);
                    return Date.now(), i
                },
                hasLanguage: e => null != l.default.getLanguage(e)
            };
            let a = r.repeat("/", 15)
        },
        573055: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSelectionText: function() {
                    return r
                },
                contextMenuCallbackNative: function() {
                    return o
                },
                contextMenuCallbackWeb: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("272030");

            function r() {
                let e;
                if (null != window.getSelection) {
                    var t;
                    e = null === (t = window.getSelection()) || void 0 === t ? void 0 : t.toString()
                } else null != document.selection && "Control" !== document.selection.type && (e = document.selection.createRange().text);
                return null != e ? e : ""
            }

            function o(e) {
                let t = r(),
                    o = e.target;
                if ((null == o ? void 0 : o.tagName) === "TEXTAREA" || (null == o ? void 0 : o.tagName) === "INPUT") {
                    if ((null == o ? void 0 : o.type) !== "checkbox") return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("188503").then(n.bind(n, "188503"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            text: t
                        })
                    }, {
                        enableSpellCheck: !0
                    })
                } else if ("none" === window.getComputedStyle(o).getPropertyValue("-webkit-user-select")) {
                    e.preventDefault();
                    return
                } else {
                    let r, o, s, a = e.target;
                    for (; null != a;) "src" in a && null != a.src && (o = a.src), "href" in a && null != a.href && (r = a.href, s = a.textContent), a = null == a ? void 0 : a.parentNode;
                    if (null != o) return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("467592").then(n.bind(n, "467592"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            src: null != o ? o : ""
                        })
                    });
                    if (null != r) return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("399758").then(n.bind(n, "399758"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            href: r,
                            textContent: s
                        })
                    });
                    else if (null != t && "" !== t) return (0, i.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("622618").then(n.bind(n, "622618"));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            text: t
                        })
                    })
                }
                return e.preventDefault(), null
            }

            function s(e) {
                let t = !1,
                    n = e.target;
                if ((null == n ? void 0 : n.tagName) === "INPUT" || (null == n ? void 0 : n.tagName) === "TEXTAREA") t = !0;
                else if ((null == n ? void 0 : n.closest) != null && (null == n ? void 0 : n.closest("[contenteditable=true]")) != null) t = !0;
                else if (null != r() && "" !== r()) t = !0;
                else {
                    let n, l, i = e.target;
                    for (; null != i;) "src" in i && null != i.src && (l = i.src), "href" in i && null != i.href && (n = i.href), i = null == i ? void 0 : i.parentNode;
                    (null != n || null != l) && (t = !0)
                }!t && e.preventDefault()
            }
        }
    }
]);