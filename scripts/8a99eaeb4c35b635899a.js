(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["83449"], {
        665718: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5420f8fd9d89897c6448.svg"
        },
        897327: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d8197d45ef3e7289594d.svg"
        },
        283383: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a3ae1eb336230b986e2b.jpg"
        },
        681388: function(e, t, n) {
            "use strict";
            e.exports = n.p + "352ac6facb491ccbade2.jpg"
        },
        249705: function(e, t, n) {
            "use strict";
            e.exports = n.p + "251f0ec86481f9cab3cf.png"
        },
        518533: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b9b0d61c8ad8b4c67ccf.png"
        },
        505406: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0a01c3f1e9a1905a85c0.svg"
        },
        92440: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6bc72dbd78c0bc7d199b.svg"
        },
        608108: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7c8ce8acfec8f0df3ac3.svg"
        },
        794027: function(e, t, n) {
            "use strict";
            e.exports = n.p + "55b7a354cc2c75dc4b11.svg"
        },
        804621: function(e, t, n) {
            "use strict";
            e.exports = n.p + "54ca580fd4d4f935fd11.svg"
        },
        578299: function(e, t, n) {
            "use strict";
            e.exports = n.p + "06f557de76d06b1db825.svg"
        },
        522420: function(e, t, n) {
            "use strict";
            e.exports = n.p + "71d0243ce6c49e0112ea.svg"
        },
        371031: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bacb0a99c70cc58ce8a6.svg"
        },
        674517: function(e, t, n) {
            "use strict";
            e.exports = n.p + "9d882ede81ee084f2929.svg"
        },
        989306: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c563b974fd62dace82e2.svg"
        },
        786948: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7d255b13622dffefb7f7.svg"
        },
        780810: function(e, t, n) {
            "use strict";
            e.exports = n.p + "33b84f5cd47bb4206c9a.svg"
        },
        695449: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f22c6fd558a43f47d7e4.svg"
        },
        816428: function(e, t, n) {
            "use strict";
            e.exports = n.p + "16a2344f855adec72e1e.svg"
        },
        710672: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a1d7e3a6eaf0f8585fca.svg"
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("913144"),
                a = {
                    toggleMembersSection() {
                        l.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        l.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        l.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        789207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("872717"),
                a = n("913144"),
                s = n("49111"),
                i = {
                    setGuildFilter(e) {
                        let {
                            guildFilter: t,
                            roleFilter: n,
                            everyoneFilter: l
                        } = e;
                        a.default.dispatch({
                            type: "SET_RECENT_MENTIONS_FILTER",
                            guildFilter: t,
                            roleFilter: n,
                            everyoneFilter: l
                        })
                    },
                    clearMentions() {
                        a.default.dispatch({
                            type: "CLEAR_MENTIONS"
                        })
                    },
                    truncateMentions(e) {
                        a.default.dispatch({
                            type: "TRUNCATE_MENTIONS",
                            size: e
                        })
                    },
                    fetchRecentMentions(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MAX_MENTIONS_PER_FETCH,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                            r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                        a.default.dispatch({
                            type: "LOAD_RECENT_MENTIONS",
                            guildId: n
                        }), l.default.get({
                            url: s.Endpoints.MENTIONS,
                            query: {
                                before: e,
                                limit: t,
                                guild_id: n,
                                roles: i,
                                everyone: r
                            },
                            retries: 2,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: n
                            } = t;
                            a.default.dispatch({
                                type: "LOAD_RECENT_MENTIONS_SUCCESS",
                                messages: n,
                                isAfter: null != e,
                                hasMoreAfter: n.length >= s.MAX_MENTIONS_PER_FETCH
                            })
                        }, () => {
                            a.default.dispatch({
                                type: "LOAD_RECENT_MENTIONS_FAILURE"
                            })
                        })
                    },
                    deleteRecentMention(e) {
                        l.default.delete({
                            url: s.Endpoints.MENTIONS_MESSAGE_ID(e),
                            retries: 2,
                            oldFormErrors: !0
                        }), a.default.dispatch({
                            type: "RECENT_MENTION_DELETE",
                            id: e
                        })
                    },
                    setRecentMentionsStale() {
                        a.default.dispatch({
                            type: "SET_RECENT_MENTIONS_STALE"
                        })
                    }
                }
        },
        378438: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                search: function() {
                    return o
                },
                searchByMode: function() {
                    return u
                },
                searchNextPage: function() {
                    return d
                },
                searchPreviousPage: function() {
                    return c
                },
                changePage: function() {
                    return f
                },
                clearHistory: function() {
                    return h
                },
                setSearchState: function() {
                    return S
                },
                clearSearchState: function() {
                    return T
                },
                updateAutocompleteQuery: function() {
                    return p
                },
                setShowBlockedResults: function() {
                    return N
                }
            }), n("808653");
            var l = n("913144"),
                a = n("716241"),
                s = n("744983"),
                i = n("751520"),
                r = n("49111");

            function o(e, t, n) {
                (0, i.setIncludeNSFW)(t, e);
                let o = Object.keys(t);
                a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_STARTED, {
                    search_type: s.default.getSearchType(),
                    prev_search_id: s.default.getAnalyticsId(e),
                    num_modifiers: o.length,
                    modifiers: o.reduce((e, n) => {
                        let l = t[n];
                        return e[n] = Array.isArray(l) ? l.length : 1, e
                    }, {})
                }), l.default.dispatch({
                    type: "SEARCH_START",
                    query: t,
                    searchId: e,
                    queryString: n
                })
            }

            function u(e, t) {
                let n = s.default.getQuery(e),
                    l = function(e) {
                        switch (e) {
                            case r.SearchModes.MOST_RELEVANT:
                                return {
                                    sort_by: "relevance", sort_order: "desc"
                                };
                            case r.SearchModes.OLDEST:
                                return {
                                    sort_by: "timestamp", sort_order: "asc"
                                };
                            case r.SearchModes.NEWEST:
                            default:
                                return {
                                    sort_by: "timestamp", sort_order: "desc"
                                }
                        }
                    }(t);
                return o(e, {
                    ...n,
                    ...l,
                    offset: 0
                })
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
                return E(e, t)
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.SEARCH_PAGE_SIZE;
                return E(e, -t)
            }

            function f(e, t) {
                return _(e, t * r.SEARCH_PAGE_SIZE)
            }

            function E(e, t) {
                let n = s.default.getOffset(e);
                return _(e, n + t)
            }

            function _(e, t) {
                let n = s.default.getQuery(e),
                    l = s.default.getTotalResults(e);
                if (!(t < 0) && !(t > l)) return o(e, {
                    ...n,
                    offset: t
                })
            }

            function h(e) {
                l.default.dispatch({
                    type: "SEARCH_CLEAR_HISTORY",
                    searchId: e
                })
            }

            function S(e, t) {
                null != e && l.default.dispatch({
                    type: "SEARCH_EDITOR_STATE_CHANGE",
                    searchId: e,
                    editorState: t
                })
            }

            function T(e) {
                a.default.trackWithMetadata(r.AnalyticEvents.SEARCH_CLOSED, {
                    search_id: s.default.getAnalyticsId(e)
                }), l.default.wait(() => l.default.dispatch({
                    type: "SEARCH_EDITOR_STATE_CLEAR",
                    searchId: e
                }))
            }

            function p(e, t, n) {
                null != e && l.default.dispatch({
                    type: "SEARCH_AUTOCOMPLETE_QUERY_UPDATE",
                    searchId: e,
                    tokens: t,
                    cursorScope: n
                })
            }

            function N(e, t) {
                l.default.dispatch({
                    type: "SEARCH_SET_SHOW_BLOCKED_RESULTS",
                    searchId: e,
                    showBlocked: t
                })
            }
        },
        167359: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var l = n("872717"),
                a = n("913144"),
                s = n("49111");
            let i = "".concat(s.STATUS_PAGE_ENDPOINT, "/api/v2/scheduled-maintenances"),
                r = "".concat(s.STATUS_PAGE_ENDPOINT, "/api/v2/incidents/unresolved.json");
            var o = {
                checkIncidents() {
                    Promise.all([l.default.get("".concat(i, "/active.json")), l.default.get(r)]).then(e => {
                        let [t, n] = e, [l] = t.body.scheduled_maintenances, [s] = n.body.incidents;
                        a.default.dispatch({
                            type: "STATUS_PAGE_INCIDENT",
                            incident: s || l
                        })
                    })
                },
                checkScheduledMaintenances() {
                    l.default.get("".concat(i, "/upcoming.json")).then(e => {
                        let [t] = e.body.scheduled_maintenances;
                        a.default.dispatch({
                            type: "STATUS_PAGE_SCHEDULED_MAINTENANCE",
                            maintenance: t
                        })
                    })
                },
                ackScheduledMaintenance() {
                    a.default.dispatch({
                        type: "STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK"
                    })
                }
            }
        },
        518888: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                overrideSurvey: function() {
                    return u
                },
                surveyHide: function() {
                    return d
                },
                surveyFetch: function() {
                    return c
                }
            });
            var l = n("759843"),
                a = n("627929"),
                s = n("913144"),
                i = n("599110"),
                r = n("840707"),
                o = n("49111");

            function u(e) {
                s.default.dispatch({
                    type: "SURVEY_OVERRIDE",
                    id: e
                })
            }

            function d(e, t) {
                s.default.dispatch({
                    type: "SURVEY_HIDE",
                    key: e
                }), t ? i.default.track(o.AnalyticEvents.APP_NOTICE_CLOSED, {
                    notice_type: o.NoticeTypes.SURVEY,
                    survey_id: e,
                    dismissed: t
                }) : i.default.track(o.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
                    notice_type: o.NoticeTypes.SURVEY
                })
            }

            function c(e) {
                var t = {};
                return null != e && (t.survey_override = e), r.default.get({
                    url: o.Endpoints.USER_SURVEY,
                    query: t,
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_SURVEY_FETCH,
                        properties: e => {
                            var t;
                            let n = null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey;
                            return (0, a.exact)({
                                key: null == n ? void 0 : n.key
                            })
                        }
                    }
                }).then(e => {
                    var t;
                    s.default.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.survey
                    })
                }, () => {
                    s.default.dispatch({
                        type: "SURVEY_FETCHED",
                        survey: null
                    })
                })
            }
        },
        590514: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Header: function() {
                    return y
                },
                EmptyStateCenter: function() {
                    return P
                },
                ItemsPopout: function() {
                    return b
                },
                default: function() {
                    return F
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("974667"),
                d = n("446674"),
                c = n("77078"),
                f = n("404118"),
                E = n("819689"),
                _ = n("510889"),
                h = n("699473"),
                S = n("393414"),
                T = n("161778"),
                p = n("42203"),
                N = n("377253"),
                I = n("957255"),
                m = n("600133"),
                A = n("471671"),
                g = n("822332"),
                C = n("945330"),
                R = n("599110"),
                M = n("659500"),
                O = n("49111"),
                L = n("782340"),
                v = n("466908");

            function D(e) {
                e.stopPropagation()
            }
            let y = e => {
                    let {
                        title: t,
                        children: n,
                        className: a
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: i(a, v.header),
                        children: [null == t ? null : (0, l.jsx)(c.Heading, {
                            variant: "heading-md/medium",
                            children: t
                        }), n]
                    })
                },
                P = e => {
                    let {
                        msg: t,
                        image: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: v.emptyPlaceholder,
                        children: [(0, l.jsx)("div", {
                            className: v.image,
                            style: {
                                backgroundImage: "url(".concat(n, ")")
                            }
                        }), (0, l.jsx)("div", {
                            className: v.body,
                            children: t
                        })]
                    })
                };
            class x extends a.PureComponent {
                renderJumpButton() {
                    let {
                        jumping: e
                    } = this.props;
                    return (0, l.jsxs)(c.Clickable, {
                        className: v.jumpButton,
                        onClick: this.handleClickJump,
                        children: [(0, l.jsx)("div", {
                            className: i(v.text, {
                                hidden: e
                            }),
                            children: L.default.Messages.JUMP
                        }), (0, l.jsx)(c.Spinner, {
                            type: c.Spinner.Type.PULSING_ELLIPSIS,
                            className: i(v.loading, {
                                [v.visible]: e
                            })
                        })]
                    })
                }
                renderCloseButton() {
                    let {
                        onCloseMessage: e,
                        canCloseAllMessages: t,
                        canManageMessages: n,
                        channel: a
                    } = this.props;
                    if (null == e) return null;
                    let s = t || n || null != a && a.isPrivate();
                    return s ? (0, l.jsx)(c.Button, {
                        look: c.Button.Looks.BLANK,
                        size: c.Button.Sizes.NONE,
                        onClick: this.handleClickClose,
                        children: (0, l.jsx)(C.default, {
                            className: v.closeIcon
                        })
                    }) : null
                }
                render() {
                    return (0, l.jsxs)("div", {
                        className: v.actionButtons,
                        children: [this.renderJumpButton(), this.renderCloseButton()]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClickJump = e => {
                        let {
                            jumpTo: t,
                            message: n
                        } = this.props;
                        t(n, e)
                    }, this.handleClickClose = e => {
                        let {
                            onCloseMessage: t,
                            message: n
                        } = this.props;
                        null != t && t(n, e)
                    }
                }
            }
            let U = d.default.connectStores([I.default], e => {
                let {
                    channel: t
                } = e;
                return {
                    canManageMessages: null != t && I.default.can(O.Permissions.MANAGE_MESSAGES, t)
                }
            })(x);

            function b(e) {
                let {
                    analyticsName: t,
                    items: n,
                    hasMore: s,
                    loading: r,
                    loadMore: f,
                    renderHeader: E,
                    renderEmptyState: h,
                    renderItem: S,
                    getProTip: p,
                    scrollerClassName: N,
                    className: I,
                    listName: C
                } = e, y = a.useRef(null), P = (0, _.default)(C, y), x = (0, d.useStateFromStores)([m.default], () => m.default.hasNotice()), U = (0, d.useStateFromStores)([A.default], () => A.default.windowSize());
                a.useEffect(() => {
                    R.default.track(O.AnalyticEvents.OPEN_POPOUT, {
                        type: t
                    })
                }, [t]), a.useEffect(() => {
                    function e() {
                        var e;
                        null === (e = y.current) || void 0 === e || e.scrollPageUp({
                            animate: !0
                        })
                    }

                    function t() {
                        var e;
                        null === (e = y.current) || void 0 === e || e.scrollPageDown({
                            animate: !0
                        })
                    }
                    return M.ComponentDispatch.subscribe(O.ComponentActions.SCROLL_PAGE_DOWN, t), M.ComponentDispatch.subscribe(O.ComponentActions.SCROLL_PAGE_UP, e), () => {
                        M.ComponentDispatch.unsubscribe(O.ComponentActions.SCROLL_PAGE_DOWN, t), M.ComponentDispatch.unsubscribe(O.ComponentActions.SCROLL_PAGE_UP, e)
                    }
                }, []);
                let b = a.useCallback(() => {
                        var e;
                        let t = null === (e = y.current) || void 0 === e ? void 0 : e.getScrollerState();
                        null != t && t.scrollHeight === t.scrollTop + t.offsetHeight && s && !r && (null == f || f())
                    }, [s, f, r]),
                    F = [],
                    j = !0;
                null == n ? F = [(0, l.jsx)("div", {
                    className: i(v.emptyPlaceholder, v.loadingPlaceholder),
                    children: (0, l.jsx)(c.Spinner, {})
                }, "spinner")] : 0 === n.length ? F.push((0, l.jsx)(a.Fragment, {
                    children: h(T.default.theme)
                }, "empty-state")) : (j = !1, F = [], o.each(n, e => {
                    F.push(...S(e))
                }));
                let G = null;
                null != n && n.length > 0 && null != f && (G = r ? (0, l.jsx)("div", {
                    className: v.loadingMore,
                    children: (0, l.jsx)(c.Spinner, {})
                }, "loading-more-after") : s ? (0, l.jsx)("div", {
                    className: v.hasMore,
                    children: (0, l.jsx)(c.Button, {
                        look: c.Button.Looks.FILLED,
                        color: c.Button.Colors.PRIMARY,
                        size: c.Button.Sizes.MAX,
                        onClick: f,
                        children: L.default.Messages.LOAD_MORE_MESSAGES
                    })
                }) : (0, l.jsx)("div", {
                    className: v.scrollingFooterWrap,
                    children: h(T.default.theme)
                }));
                let k = null == p ? void 0 : p(),
                    w = j && null != k ? (0, l.jsx)("div", {
                        className: v.footer,
                        children: (0, l.jsx)(g.default, {
                            style: {
                                width: "100%",
                                paddingTop: 10
                            },
                            children: k
                        })
                    }) : null,
                    B = {
                        maxHeight: U.height - 43 - 25
                    };
                x && (B.maxHeight -= 40);
                let H = null != f && s;
                return (0, l.jsx)("div", {
                    className: i(I, v.messagesPopoutWrap),
                    style: B,
                    onClick: D,
                    onDoubleClick: D,
                    "aria-label": e["aria-label"],
                    children: (0, l.jsxs)(c.HeadingLevel, {
                        component: E(),
                        children: [(0, l.jsxs)(c.AdvancedScroller, {
                            className: i(v.messagesPopout, N),
                            onScroll: H ? b : void 0,
                            ref: y,
                            children: [(0, l.jsx)(u.ListNavigatorProvider, {
                                navigator: P,
                                children: (0, l.jsx)(u.ListNavigatorContainer, {
                                    children: e => {
                                        let {
                                            ref: t,
                                            ...n
                                        } = e;
                                        return (0, l.jsx)("div", {
                                            ref: t,
                                            ...n,
                                            children: F
                                        })
                                    }
                                })
                            }), G]
                        }), w]
                    })
                })
            }

            function F(e) {
                let {
                    analyticsName: t,
                    onFetch: n,
                    channel: s,
                    messages: i,
                    hasMore: r,
                    loading: o,
                    loadMore: u,
                    onJump: c,
                    canCloseAllMessages: _ = !1,
                    renderHeader: T,
                    renderEmptyState: I,
                    renderMessage: m,
                    getProTip: A,
                    scrollerClassName: g,
                    className: C,
                    onCloseMessage: R,
                    listName: M
                } = e, D = (0, d.useStateFromStores)([N.default], () => {
                    let e = null != s ? N.default.getMessages(s.id) : null;
                    return null != e && null != e.jumpTargetId && e.loadingMore && null == e.get(e.jumpTargetId)
                });

                function y(e, n) {
                    let {
                        id: l,
                        blocked: a,
                        author: s,
                        channel_id: i
                    } = e;
                    if (a) f.default.show({
                        title: L.default.Messages.UNBLOCK_TO_JUMP_TITLE,
                        body: L.default.Messages.UNBLOCK_TO_JUMP_BODY.format({
                            name: s.username
                        }),
                        confirmText: L.default.Messages.OKAY
                    });
                    else if (!D) {
                        let e = p.default.getChannel(i);
                        null != e && (E.default.trackJump(i, l, t), (0, S.transitionTo)(O.Routes.CHANNEL(e.getGuildId(), i, l))), null == c || c(n)
                    }
                }
                a.useEffect(() => {
                    n(s)
                }, [s, n]);
                let P = a.useMemo(() => null == i ? void 0 : i.map(e => ({
                    message: e,
                    channel: s
                })), [i, s]);
                return (0, l.jsx)(b, {
                    className: C,
                    scrollerClassName: g,
                    items: P,
                    loading: o,
                    analyticsName: t,
                    renderEmptyState: I,
                    renderHeader: T,
                    hasMore: r,
                    loadMore: u,
                    getProTip: A,
                    renderItem: function(e) {
                        let {
                            message: t,
                            channel: n
                        } = e;
                        if (null == t) return [];
                        if (null != m) return m(t, e => y(t, e));
                        let a = [];
                        return null == n ? [] : (a.push((0, l.jsxs)("div", {
                            className: v.messageGroupWrapper,
                            children: [(0, l.jsx)(h.default, {
                                className: v.messageGroupCozy,
                                message: t,
                                channel: n
                            }), (0, l.jsx)(U, {
                                channel: s,
                                message: t,
                                jumping: D,
                                canCloseAllMessages: _,
                                jumpTo: y,
                                onCloseMessage: R
                            })]
                        }, t.id)), a)
                    },
                    listName: M,
                    "aria-label": e["aria-label"]
                })
            }
        },
        425773: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getListboxOptionProps: function() {
                    return c
                },
                default: function() {
                    return E
                }
            }), n("70102");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("782340"),
                u = n("544635");

            function d(e) {
                e.stopPropagation(), e.preventDefault()
            }

            function c(e, t, n) {
                return {
                    id: "".concat(e, "-").concat(t),
                    role: "option",
                    tabIndex: -1,
                    "aria-selected": n
                }
            }
            class f extends a.PureComponent {
                renderQuery(e) {
                    let {
                        query: t,
                        navId: n,
                        focusedIndex: a,
                        onSelectQuery: s,
                        onHighlightQuery: d,
                        hideQuery: f
                    } = this.props;
                    if (e || f) return null;
                    let E = -1 === a;
                    return (0, l.jsxs)(r.Clickable, {
                        className: i(u.queryContainer, {
                            [u.focused]: E
                        }),
                        ...c(n, -1, E),
                        onMouseEnter: d,
                        onClick: s,
                        children: [(0, l.jsx)("div", {
                            className: u.queryText,
                            children: o.default.Messages.SEARCH_FOR_VALUE.format({
                                value: t
                            })
                        }), (0, l.jsx)("div", {
                            className: u.queryShortcut,
                            "aria-hidden": !0,
                            children: (0, l.jsx)(r.KeyCombo, {
                                shortcut: "return",
                                dim: !0,
                                className: u.keyCombo
                            })
                        })]
                    })
                }
                renderResults(e) {
                    let {
                        numResults: t,
                        renderNoResults: n,
                        renderInitialState: l,
                        renderResult: a,
                        renderCustomResults: s
                    } = this.props;
                    if (e) return l();
                    if (0 === t) return n();
                    if (null != a) return Array.from({
                        length: t
                    }).map((e, t) => a(t));
                    if (null != s) return s();
                    throw Error("SearchResultsPopout.renderResults: Flow should never allow this...")
                }
                render() {
                    let {
                        query: e,
                        focusedIndex: t,
                        navId: n,
                        width: a
                    } = this.props, s = "" === e.trim();
                    return (0, l.jsxs)("div", {
                        className: u.container,
                        style: {
                            width: a
                        },
                        onMouseDown: d,
                        role: "listbox",
                        id: n,
                        tabIndex: -1,
                        "aria-activedescendant": "".concat(n, "-").concat(t),
                        children: [this.renderQuery(s), this.renderResults(s)]
                    })
                }
            }
            f.defaultProps = {
                renderInitialState: () => null,
                hideQuery: !1,
                width: 320
            };
            var E = f
        },
        954172: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Filter: function() {
                    return i
                },
                Answer: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("423149");

            function s(e, t) {
                let {
                    children: n
                } = e;
                return (0, l.jsx)("span", {
                    className: t,
                    children: n
                })
            }
            let i = e => s(e, a.searchFilter),
                r = e => s(e, a.searchAnswer)
        },
        904575: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BugIcon: function() {
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
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M9.54 3.28a3 3 0 0 0-.37.74c-.19.52.28.98.83.98h4c.55 0 1.02-.46.83-.98a2.96 2.96 0 0 0-.37-.74c.23-.16.56-.28.99-.28a1 1 0 1 0 0-2c-1 0-2.01.4-2.68 1.1a3 3 0 0 0-1.54 0A3.76 3.76 0 0 0 8.55 1a1 1 0 0 0 0 2c.43 0 .76.12 1 .28ZM18.01 18.85c-.04.1-.03.22.05.3l1.51 1.5a1 1 0 0 1-1.41 1.42l-1.18-1.18a.26.26 0 0 0-.37 0 6.7 6.7 0 0 1-2.8 1.82c-.42.14-.83-.2-.86-.64l-.42-8.57a.53.53 0 0 0-1.05 0l-.43 8.57c-.03.45-.44.78-.87.64A6.7 6.7 0 0 1 7.4 20.9a.26.26 0 0 0-.37-.01l-1.18 1.18a1 1 0 0 1-1.41-1.41l1.51-1.51c.08-.08.1-.2.05-.3-.47-.94-.78-2-.92-3.12a.25.25 0 0 0-.25-.23H3a1 1 0 1 1 0-2h1.82c.13 0 .24-.1.25-.23.14-1.13.45-2.18.92-3.12a.25.25 0 0 0-.05-.3l-1.51-1.5a1 1 0 1 1 1.41-1.42L7.02 8.1c.1.1.27.1.37 0a6.66 6.66 0 0 1 2.95-1.87c.38-.11.75.14.85.52l.57 2.27c.06.25.42.25.48 0l.57-2.27c.1-.38.47-.63.85-.52 1.1.33 2.11.98 2.95 1.86.1.1.26.11.37.01l1.18-1.18a1 1 0 1 1 1.41 1.41l-1.51 1.51c-.08.08-.1.2-.05.3.47.94.78 2 .92 3.12.01.13.12.23.25.23H21a1 1 0 1 1 0 2h-1.82c-.13 0-.24.1-.25.23a9.68 9.68 0 0 1-.92 3.12Z",
                        className: r
                    })
                })
            }
        },
        763377: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleQuestionIcon: function() {
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
                    secondaryColor: i = "transparent",
                    secondaryColorClass: r = "",
                    color: o = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof i ? i : i.css,
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        54549: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DoubleCheckmarkLargeIcon: function() {
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
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M16.7 8.7a1 1 0 0 0-1.4-1.4l-3.26 3.24a1 1 0 0 0 1.42 1.42L16.7 8.7ZM3.7 11.3a1 1 0 0 0-1.4 1.4l4.5 4.5a1 1 0 0 0 1.4-1.4l-4.5-4.5Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M21.7 9.7a1 1 0 0 0-1.4-1.4L13 15.58l-3.3-3.3a1 1 0 0 0-1.4 1.42l4 4a1 1 0 0 0 1.4 0l8-8Z",
                        className: r
                    })]
                })
            }
        },
        945863: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DpadIcon: function() {
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
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14.41 8.09A2 2 0 0 0 15 6.67V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2.67a2 2 0 0 0 .59 1.42l1.7 1.7a1 1 0 0 0 1.42 0l1.7-1.7ZM8.1 9.59A2 2 0 0 0 6.67 9H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h2.67a2 2 0 0 0 1.42-.59l1.7-1.7a1 1 0 0 0 0-1.42L8.1 9.6Zm1.5 6.32A2 2 0 0 0 9 17.33V20c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-2.67a2 2 0 0 0-.59-1.42l-1.7-1.7a1 1 0 0 0-1.42 0l-1.7 1.7ZM17.33 9a2 2 0 0 0-1.42.59l-1.7 1.7a1 1 0 0 0 0 1.42l1.7 1.7a2 2 0 0 0 1.42.59H20a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-2.67Z",
                        className: r
                    })
                })
            }
        },
        440275: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FileIcon: function() {
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
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M18 22H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h7.5c.28 0 .5.22.5.5V5a5 5 0 0 0 5 5h2.5c.28 0 .5.22.5.5V18a4 4 0 0 1-4 4Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M21.7 7.94c.01.03 0 .06-.04.06H19a3 3 0 0 1-3-3V2.34c0-.03.03-.05.06-.04a3 3 0 0 1 .82.58l4.24 4.24a3 3 0 0 1 .58.82Z",
                        className: r
                    })]
                })
            }
        },
        342072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InboxIcon: function() {
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
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        756166: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("884691"),
                a = () => {
                    let e = l.useRef(!0);
                    l.useEffect(() => () => {
                        e.current = !1
                    }, []);
                    let t = l.useCallback(() => e.current, []);
                    return t
                }
        },
        363996: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ESLatamLaunchExperiment: function() {
                    return a
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-12_eslatam_launch",
                label: "ES LATAM Launch",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable ES-LATAM",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        976789: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("424973");
            var l, a = n("872717"),
                s = n("95410"),
                i = n("913144"),
                r = n("355025"),
                o = n("605250"),
                u = n("773336"),
                d = n("286235"),
                c = n("50885");
            let f = s.default.get("lastNonRequiredUpdateShown", Date.now()),
                E = new o.default("AutoUpdateManager");
            l = class {
                destroy() {
                    clearInterval(this._checkInterval)
                }
                quitAndInstall() {
                    this.updateAvailable && (this.hasNativeUpdate ? null != this._bootstrapper ? this._bootstrapper.finishBootstrap() : c.default.send("QUIT_AND_INSTALL") : location.reload(!0))
                }
                async _requestNewUpdaterBootstrap() {
                    let e;
                    E.log("Bootstrapping new updater host...");
                    try {
                        await c.default.ensureModule("discord_updater_bootstrap"), e = c.default.requireModule("discord_updater_bootstrap"), this._bootstrapper = e
                    } catch (e) {
                        this._handleNativeUpdateNotAvailable();
                        return
                    }
                    try {
                        this._handleCheckingForUpdates(), await e.bootstrap(c.default.releaseChannel, "win"), this.updateAvailable = !0, this.hasNativeUpdate = !0, this._handleUpdateDownloaded(!0)
                    } catch (e) {
                        E.log("Failed to bootstrap new updater:", e), this._handleNativeUpdateNotAvailable(), d.default.captureException(e)
                    }
                }
                _emitCallbacks() {
                    this._callbacks.forEach(e => e(this.updateAvailable)), this._callbacks = []
                }
                constructor(e = 36e5) {
                    var t = this;
                    this.updateAvailable = !1, this.hasNativeUpdate = !1, this._callbacks = [], this._bootstrapper = null, this.checkForUpdates = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (e || !t.hasNativeUpdate) {
                            if (u.isPlatformEmbedded) {
                                let e = "win32" === (0, u.getPlatformName)() && c.default.canBootstrapNewUpdater;
                                e ? t._requestNewUpdaterBootstrap() : c.default.send("CHECK_FOR_UPDATES")
                            } else t._handleNativeUpdateNotAvailable()
                        }
                        return new Promise(e => {
                            t.updateAvailable ? e(!0) : t._callbacks.push(e)
                        })
                    }, this._handleCheckingForUpdates = () => {
                        i.default.dispatch({
                            type: "CHECKING_FOR_UPDATES"
                        })
                    }, this._handleNativeUpdateNotAvailable = () => {
                        this._handleCheckingForUpdates(), a.default.get({
                            url: "".concat(location.protocol, "//").concat(location.host).concat("/assets/", "version.").concat(window.GLOBAL_ENV.RELEASE_CHANNEL, ".json"),
                            query: {
                                _: Date.now() / 1e3 / 60 / 5 | 0
                            },
                            oldFormErrors: !0
                        }).then(e => {
                            if (null == e.body || "f0c9a0bf3bcfaba24d6b7315bedf6702169d3fe7" === e.body.hash) return this._handleUpdateNotAvailable();
                            if (e.body.required || (0, r.probablyHasBuildOverride)()) return this._handleUpdateDownloaded(!1);
                            let t = "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL ? 6048e5 : 864e5;
                            if (Date.now() - f > t) return s.default.set("lastNonRequiredUpdateShown", Date.now()), this._handleUpdateDownloaded(!1)
                        }, () => this._handleUpdateError())
                    }, this._handleUpdateNotAvailable = () => {
                        i.default.dispatch({
                            type: "UPDATE_NOT_AVAILABLE"
                        }), this._emitCallbacks()
                    }, this._handleUpdateAvailable = e => {
                        this.updateAvailable = !0, this.hasNativeUpdate = e, i.default.dispatch({
                            type: "UPDATE_AVAILABLE"
                        })
                    }, this._handleUpdateManually = () => {
                        this.updateAvailable = !0, this.hasNativeUpdate = !0, i.default.dispatch({
                            type: "UPDATE_MANUALLY"
                        })
                    }, this._handleUpdateError = e => {
                        this.updateAvailable = !1, i.default.dispatch({
                            type: "UPDATE_ERROR",
                            message: e
                        })
                    }, this._handleUpdateDownloaded = (e, t, n, l, a) => {
                        this._handleUpdateAvailable(e), i.default.dispatch({
                            type: "UPDATE_DOWNLOADED",
                            releaseNotes: t,
                            releaseName: n,
                            releaseDate: l,
                            updateURL: a
                        }), this._emitCallbacks()
                    }, u.isPlatformEmbedded && (c.default.on("CHECKING_FOR_UPDATES", this._handleCheckingForUpdates), c.default.on("UPDATE_NOT_AVAILABLE", this._handleNativeUpdateNotAvailable), c.default.on("UPDATE_AVAILABLE", () => this._handleUpdateAvailable(!0)), c.default.on("UPDATE_ERROR", this._handleUpdateError), c.default.on("UPDATE_DOWNLOADED", () => this._handleUpdateDownloaded(!0)), c.default.on("UPDATE_MANUALLY", this._handleUpdateManually)), i.default.wait(() => {
                        this.checkForUpdates()
                    }), this._checkInterval = setInterval(this.checkForUpdates, e)
                }
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return T
                },
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("820542"),
                u = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("34676"),
                E = n("679653"),
                _ = n("49111"),
                h = n("468200"),
                S = n("782340");
            let T = () => [{
                    value: h.MuteUntilSeconds.MINUTES_15,
                    label: S.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: h.MuteUntilSeconds.HOURS_1,
                    label: S.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: h.MuteUntilSeconds.HOURS_3,
                    label: S.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: h.MuteUntilSeconds.HOURS_8,
                    label: S.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: h.MuteUntilSeconds.HOURS_24,
                    label: S.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: h.MuteUntilSeconds.ALWAYS,
                    label: S.default.Messages.MUTE_DURATION_ALWAYS
                }],
                p = e => {
                    let t = e > 0 ? s().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function N(e, t) {
                let [n, a] = (0, i.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), s = (0, d.useMutedUntilText)(a), h = (0, E.default)(e, !0);

                function N(t) {
                    t && e.type === _.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), u.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let I = S.default.Messages.MUTE_CHANNEL_GENERIC,
                    m = S.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case _.ChannelTypes.GUILD_CATEGORY:
                        I = S.default.Messages.MUTE_CATEGORY, m = S.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case _.ChannelTypes.GROUP_DM:
                        I = S.default.Messages.MUTE_CONVERSATION, m = S.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case _.ChannelTypes.DM:
                        I = S.default.Messages.MUTE_CHANNEL.format({
                            name: h
                        }), m = S.default.Messages.UNMUTE_CHANNEL.format({
                            name: h
                        });
                        break;
                    default:
                        I = S.default.Messages.MUTE_CHANNEL_GENERIC, m = S.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, l.jsx)(r.MenuItem, {
                    id: "unmute-channel",
                    label: m,
                    subtext: s,
                    action: () => N(!1)
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-channel",
                    label: I,
                    action: () => N(!0),
                    children: T().map(n => {
                        let {
                            value: a,
                            label: s
                        } = n;
                        return (0, l.jsx)(r.MenuItem, {
                            id: "".concat(a),
                            label: s,
                            action: () => (function(n) {
                                e.type === _.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
                                let l = p(n);
                                u.default.updateChannelOverrideSettings(e.guild_id, e.id, l, f.NotificationLabels.Muted, t)
                            })(a)
                        }, a)
                    })
                })
            }
        },
        619436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useChannelNotificationRadioItems: function() {
                    return E
                },
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("519705"),
                r = n("721281"),
                o = n("282109"),
                u = n("34676"),
                d = n("49111"),
                c = n("782340");

            function f(e) {
                var t, n, l;
                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                switch (e.type) {
                    case d.ChannelTypes.GUILD_VOICE:
                        ;
                        return a ? (t = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]) : null;
                    case d.ChannelTypes.GUILD_STAGE_VOICE:
                        ;
                        return n = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }];
                    default:
                        ;
                        return l = e, [{
                            setting: d.UserNotificationSettings.NULL,
                            label: null != l.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
                        }, {
                            setting: d.UserNotificationSettings.ALL_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
                        }, {
                            setting: d.UserNotificationSettings.ONLY_MENTIONS,
                            label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
                        }, {
                            setting: d.UserNotificationSettings.NO_MESSAGES,
                            label: c.default.Messages.FORM_LABEL_NOTHING
                        }]
                }
            }

            function E(e) {
                let t = e.getGuildId(),
                    n = e.id,
                    E = (0, a.useStateFromStores)([o.default], () => {
                        let n = d.UserNotificationSettings.NULL;
                        return null != e.parent_id && (n = o.default.getChannelMessageNotifications(t, e.parent_id)), n !== d.UserNotificationSettings.NULL ? n : o.default.getMessageNotifications(t)
                    }, [t, e.parent_id]),
                    _ = (0, a.useStateFromStores)([o.default], () => o.default.getNewForumThreadsCreated(e)),
                    h = (0, a.useStateFromStores)([o.default], () => o.default.getChannelOverrides(t)[n], [t, n]),
                    S = null == h ? d.UserNotificationSettings.NULL : h.message_notifications,
                    T = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
                    p = f(e, T);
                return null == p ? null : (0, l.jsxs)(l.Fragment, {
                    children: [e.isForumLikeChannel() ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(s.MenuCheckboxItem, {
                            id: "new-forum-threads-created",
                            label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
                            checked: _,
                            action: () => i.default.setForumThreadsCreated(e, !_)
                        }), (0, l.jsx)(s.MenuSeparator, {})]
                    }) : null, p.map(a => {
                        let {
                            setting: r,
                            label: o
                        } = a;
                        return (0, l.jsx)(s.MenuRadioItem, {
                            group: "channel-notifications",
                            id: "".concat(r),
                            label: o,
                            subtext: r === d.UserNotificationSettings.NULL ? function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                switch (e) {
                                    case d.UserNotificationSettings.ALL_MESSAGES:
                                        return t.type === d.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
                                    case d.UserNotificationSettings.ONLY_MENTIONS:
                                        return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
                                    case d.UserNotificationSettings.NO_MESSAGES:
                                        return c.default.Messages.FORM_LABEL_NOTHING;
                                    case d.UserNotificationSettings.NULL:
                                    default:
                                        return
                                }
                            }(E, e, T) : void 0,
                            action: () => {
                                var e;
                                return e = r, void(null != t && i.default.updateChannelOverrideSettings(t, n, {
                                    message_notifications: e
                                }, u.NotificationLabel.notifications(e)))
                            },
                            checked: r === S
                        }, r)
                    })]
                })
            }

            function _(e) {
                var t, n;
                let i = E(e),
                    u = (0, a.useStateFromStores)([o.default], () => o.default.resolvedMessageNotifications(e), [e]),
                    _ = (0, a.useStateFromStores)([o.default], () => o.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
                    h = null == _ ? d.UserNotificationSettings.NULL : _.message_notifications,
                    S = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
                    T = h === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, S)) || void 0 === n ? void 0 : null === (t = n.find(e => {
                        let {
                            setting: t
                        } = e;
                        return t === u
                    })) || void 0 === t ? void 0 : t.label;
                return null != i ? (0, l.jsx)(s.MenuItem, {
                    id: "channel-notifications",
                    label: c.default.Messages.NOTIFICATION_SETTINGS,
                    subtext: T,
                    children: i
                }) : null
            }
        },
        64016: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("755624"),
                r = n("263024"),
                o = n("782340");

            function u(e, t) {
                let n = (0, a.useStateFromStores)([i.default], () => i.default.hasJoined(e.id));
                return n ? (0, l.jsx)(s.MenuItem, {
                    id: "leave-thread",
                    label: e.isForumPost() ? o.default.Messages.LEAVE_FORUM_POST : o.default.Messages.LEAVE_THREAD,
                    action: () => r.default.leaveThread(e, t)
                }) : (0, l.jsx)(s.MenuItem, {
                    id: "join-thread",
                    label: e.isForumPost() ? o.default.Messages.JOIN_FORUM_POST : o.default.Messages.JOIN_THREAD,
                    action: () => r.default.joinThread(e, t)
                })
            }
        },
        255228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("319165"),
                u = n("755624"),
                d = n("263024"),
                c = n("531674"),
                f = n("782340");

            function E(e) {
                let [t, n, a] = (0, i.useStateFromStoresArray)([u.default], () => [u.default.isMuted(e.id), u.default.getMuteConfig(e.id), u.default.hasJoined(e.id)]), E = (0, o.useMutedUntilText)(n);

                function _(t) {
                    d.default.setNotificationSettings(e, {
                        muted: t
                    })
                }
                return a ? t ? (0, l.jsx)(r.MenuItem, {
                    id: "unmute-channel",
                    label: e.isForumPost() ? f.default.Messages.UNMUTE_FORUM_POST : f.default.Messages.UNMUTE_THREAD,
                    subtext: E,
                    action: () => _(!1)
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-channel",
                    label: e.isForumPost() ? f.default.Messages.MUTE_FORUM_POST : f.default.Messages.MUTE_THREAD,
                    action: () => _(!0),
                    children: (0, c.getMuteTimes)().map(t => {
                        let {
                            value: n,
                            label: a
                        } = t;
                        return (0, l.jsx)(r.MenuItem, {
                            id: "".concat(n),
                            label: a,
                            action: () => (function(t) {
                                let n = t > 0 ? s().add(t, "second").toISOString() : null;
                                d.default.setNotificationSettings(e, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: t,
                                        end_time: n
                                    }
                                })
                            })(n)
                        }, n)
                    })
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-disabled",
                    label: e.isForumPost() ? f.default.Messages.MUTE_FORUM_POST : f.default.Messages.MUTE_THREAD,
                    disabled: !0
                })
            }
        },
        76813: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("522049"),
                r = n("664336"),
                o = n("386045"),
                u = n("80028"),
                d = n("782340");

            function c(e) {
                let {
                    className: t
                } = e, {
                    hasClips: c,
                    hasNewClips: f
                } = (0, a.useStateFromStoresObject)([o.default], () => ({
                    hasClips: o.default.hasClips(),
                    hasNewClips: o.default.getNewClipIds().length > 0
                }));
                return c ? (0, l.jsx)(r.Icon, {
                    className: t,
                    icon: i.default,
                    showBadge: f,
                    tooltip: d.default.Messages.CLIPS_GALLERY_TOOLTIP,
                    onClick: function() {
                        (0, s.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("167573").then(n.bind(n, "167573"));
                            return t => (0, l.jsx)(e, {
                                ...t
                            })
                        }, {
                            modalKey: u.CLIPS_GALLERY_MODAL_KEY
                        })
                    }
                }) : null
            }
        },
        889293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = [];
            class i extends l.default.Store {
                getEligibleGuildsForNagActivate() {
                    return s
                }
            }
            i.displayName = "CreatorMonetizationMarketingStore";
            var r = new i(a.default, {
                CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: function(e) {
                    let {
                        eligibleGuilds: t
                    } = e;
                    s = t
                }
            })
        },
        336696: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2021-12_inferno_spam_redaction",
                label: "Inferno Spam Redaction",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Allow guild channel messages from spammers to be collapsed",
                    config: {
                        enabled: !0
                    }
                }]
            })
        },
        376152: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchDropsEligibility: function() {
                    return r
                },
                fetchCodePlatformAvailability: function() {
                    return o
                },
                claimDropsRewardCode: function() {
                    return u
                },
                fetchDropsUserStatus: function() {
                    return d
                },
                unenrollDropsUser: function() {
                    return c
                },
                fetchEnrolledUser: function() {
                    return f
                },
                enrollDropsUser: function() {
                    return E
                },
                sendHeartbeat: function() {
                    return _
                },
                fetchProgress: function() {
                    return h
                }
            });
            var l = n("872717"),
                a = n("913144"),
                s = n("373469"),
                i = n("49111");
            let r = async e => {
                let t = !1;
                try {
                    let n = await l.default.get({
                        url: i.Endpoints.DROPS_ELIGIBILITY,
                        query: {
                            drops_quest_id: e
                        }
                    });
                    t = n.body.eligible
                } catch (e) {
                    t = !1
                }
                a.default.dispatch({
                    type: "DROPS_ELIGIBILITY_FETCH_SUCCESS",
                    isEligible: t,
                    dropsQuestId: e
                })
            }, o = async e => {
                let t = [];
                try {
                    let n = await l.default.get({
                        url: i.Endpoints.DROPS_PLATFORM_AVAILABILITY,
                        query: {
                            drops_quest_id: e
                        }
                    });
                    t = n.body.available_platforms
                } catch (e) {
                    t = []
                }
                a.default.dispatch({
                    type: "DROPS_PLATFORM_AVAILABILITY_SUCCESS",
                    availablePlatforms: t
                })
            }, u = async (e, t) => {
                try {
                    let n = await l.default.post({
                        url: i.Endpoints.DROPS_CLAIM_REWARD_CODE,
                        query: {
                            drops_quest_id: e,
                            platform: t
                        }
                    });
                    return a.default.dispatch({
                        type: "DROPS_REWARD_CODE_CLAIM_SUCCESS",
                        rewardCode: n.body.code
                    }), n.body.code
                } catch (e) {
                    throw e
                }
            }, d = async () => {
                try {
                    let e = await l.default.get({
                        url: i.Endpoints.DROPS_USER_STATUS
                    });
                    a.default.dispatch({
                        type: "DROPS_USER_STATUS_FETCH_SUCCESS",
                        codes: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "DROPS_USER_STATUS_FETCH_FAILURE"
                    })
                }
            }, c = async e => {
                await l.default.delete({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                }), a.default.dispatch({
                    type: "DROPS_UNENROLL_USER",
                    dropsQuestId: e
                }), await d()
            }, f = async e => {
                let t = await l.default.get({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                });
                await a.default.dispatch({
                    type: "DROPS_ENROLLED_USER_FETCH_SUCCESS",
                    enrolledUser: t.body.user,
                    isEnrolled: t.body.enrolled,
                    dropsQuestId: e
                })
            }, E = async e => {
                await l.default.post({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                }), a.default.dispatch({
                    type: "DROPS_ENROLL_SUCCESS"
                })
            }, _ = async (e, t, n) => {
                let r = s.default.getViewerIds(t);
                try {
                    let s = await l.default.post({
                        url: i.Endpoints.DROPS_HEARTBEAT(e),
                        query: {
                            stream_key: t,
                            application_id: n,
                            viewer_count: r.length
                        },
                        retries: 2
                    });
                    a.default.dispatch({
                        type: "DROPS_HEARTBEAT_SUCCESS",
                        dropsQuestId: e,
                        completed: s.body.completed,
                        progress: s.body.progress
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "DROPS_HEARTBEAT_FAILURE",
                        dropsQuestId: e,
                        statusCode: null == t ? void 0 : t.status
                    })
                }
            }, h = async e => {
                try {
                    let t = await l.default.get({
                        url: i.Endpoints.DROPS_PROGRESS(e)
                    });
                    a.default.dispatch({
                        type: "DROPS_FETCH_PROGRESS_SUCCESS",
                        dropsQuestId: e,
                        completed: t.body.completed,
                        progress: t.body.progress
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "DROPS_FETCH_PROGRESS_FAILURE",
                        dropsQuestId: e
                    })
                }
            }
        },
        411511: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DROPS_PLATFORMS: function() {
                    return a
                },
                DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS: function() {
                    return s
                },
                DropsFaqUrl: function() {
                    return i
                },
                PartnerGame: function() {
                    return r
                },
                TooltipActions: function() {
                    return o
                },
                PartnerGameNameToSearchTermMapping: function() {
                    return u
                },
                noticeBannerDateFormat: function() {
                    return d
                },
                FORTNITE_QUEST_ID: function() {
                    return c
                },
                DROPS_GAMES: function() {
                    return f
                }
            });
            var l = n("782340");
            let a = ["XBOX", "PLAYSTATION", "SWITCH", "PC"],
                s = 2592e4,
                i = "https://support.discord.com/hc/en-us/articles/9146392276375",
                r = {
                    FORTNITE: "FORTNITE"
                },
                o = {
                    STREAM_CTA: "STREAM_CTA",
                    LOADING_INITIAL_PROGRESS: "LOADING_INITIAL_PROGRESS",
                    TRACK_PROGRESS: "TRACK_PROGRESS",
                    QUEST_COMPLETION: "QUEST_COMPLETION"
                },
                u = {
                    FORTNITE: ["Fortnite"]
                },
                d = "YYYY-MM-DD HH:mm",
                c = "1022633972510752774",
                f = {
                    [r.FORTNITE]: {
                        title: "Fortnite",
                        gameSearchTerm: u[r.FORTNITE],
                        assets: {
                            iconSrc: n("681388"),
                            tooltipSrc: n("249705"),
                            rewardSrc: n("283383")
                        },
                        dropsQuestId: c,
                        dropsGameId: "432980957394370572",
                        endDate: "2023-05-22 23:59",
                        finalClaimDate: "2023-5-29 08:00",
                        dropsNoticeBannerDurationDays: 3,
                        articleUrl: i,
                        messages: {
                            claimTip: () => l.default.Messages.FORTNITE_REDEMPTION_TIP.format({
                                learnMoreUrl: "https://discord.com/blog/fortnite-quest"
                            }),
                            giftInfo: () => l.default.Messages.FORTNITE_GIFT_INVENTORY_INFO.format({
                                guardOutfitName: l.default.Messages.FORNITE_GUARD_OUTPUT,
                                rewardName: l.default.Messages.FORTNITE_REWARD_NAME
                            }),
                            enrollmentTooltip: e => l.default.Messages.FORTNITE_DROPS_ELIGIBILITY_ENROLLMENT_TOOLTIP.format({
                                rewardName: l.default.Messages.FORTNITE_REWARD_NAME,
                                streamLengthRequirement: e
                            }),
                            completionTooltip: e => l.default.Messages.FORTNITE_DROPS_COMPLETION_TOOLTIP.format({
                                rewardName: l.default.Messages.FORTNITE_REWARD_NAME,
                                streamLengthRequirement: e
                            })
                        }
                    }
                }
        },
        931115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DropsForGoLiveFortniteExperiment: function() {
                    return a
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-05_go_live_quest_fortnite",
                label: "Fortnite: Go Live Quest",
                defaultConfig: {
                    dropsEnabled: !1,
                    streamLengthRequirement: 0,
                    viewerCountRequirement: 0,
                    autoEnrollment: !1,
                    showUnenroll: !1
                },
                treatments: [{
                    id: 1,
                    label: "15 min stream req + auto enrollment",
                    config: {
                        dropsEnabled: !0,
                        streamLengthRequirement: 15,
                        viewerCountRequirement: 1,
                        autoEnrollment: !0,
                        showUnenroll: !1
                    }
                }, {
                    id: 99,
                    label: "2 minute stream req + auto enrollment",
                    config: {
                        dropsEnabled: !0,
                        streamLengthRequirement: 2,
                        viewerCountRequirement: 1,
                        autoEnrollment: !0,
                        showUnenroll: !0
                    }
                }]
            })
        },
        180273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("446674"),
                i = n("862337"),
                r = n("913144"),
                o = n("374014"),
                u = n("271938"),
                d = n("568307"),
                c = n("376152"),
                f = n("579565"),
                E = n("411511");
            let _ = null,
                h = null,
                S = {},
                T = {},
                p = E.TooltipActions.LOADING_INITIAL_PROGRESS,
                N = new i.Timeout,
                I = {
                    completed: !1,
                    initialProgressFetched: !1,
                    interrupted: !1,
                    retries: 0
                },
                m = e => {
                    let {
                        dropsQuestId: t,
                        streamKey: n,
                        game: l,
                        completed: a,
                        gameTitle: s
                    } = I;
                    !(null == t || null == s || a || null == l || null == n || N.isStarted()) && (e ? (0, c.sendHeartbeat)(t, n, l.pid) : N.start(6e4, () => {
                        (0, c.sendHeartbeat)(t, n, l.pid)
                    }))
                },
                A = e => {
                    I.retries = 0, I.completed = e.completed, I.initialProgressFetched = !0, I.progress = e.progress, I.lastCheckedAt = a.now(), p = I.completed ? E.TooltipActions.QUEST_COMPLETION : E.TooltipActions.TRACK_PROGRESS
                },
                g = (e, t, n) => {
                    (!I.completed || e.dropsQuestId !== I.dropsQuestId) && (I.game = t, I.dropsQuestId = e.dropsQuestId, I.gameTitle = e.title, I.completed = !1, I.interrupted = !1, I.streamKey = n, I.retries = 0, I.lastCheckedAt = a.now(), N.start(5e3, () => m(!0)))
                };
            class C extends s.default.Store {
                initialize() {
                    this.waitFor(d.default)
                }
                getActivityPanelTooltipAction() {
                    return p
                }
                getIsPartnerGameQuestComplete(e) {
                    var t;
                    let n = (0, f.getDrop)(e);
                    if (null == n || null == h) return !1;
                    let l = !!(null === (t = h[n.dropsQuestId]) || void 0 === t ? void 0 : t.completed_at),
                        a = I.completed && I.gameTitle === n.title || l;
                    return a
                }
                get serverEligibleByQuestIds() {
                    return S
                }
                get platformAvailability() {
                    return _
                }
                get userStatus() {
                    return h
                }
                get activityPanelTooltipAction() {
                    return p
                }
                get enrolledDropsByQuestId() {
                    return T
                }
                get hasInitialProgressFetched() {
                    return I.initialProgressFetched
                }
                get isCurrentQuestCompleted() {
                    return I.completed
                }
                get isCurrentQuestInterrupted() {
                    return I.interrupted
                }
                get currentDropQuestGameTitle() {
                    return I.gameTitle
                }
                get currentDropQuestStreamProgress() {
                    let e = I.progress;
                    if (null == e || null == e.steps || 0 === e.steps.length) return 0;
                    let t = e.steps.find(e => "stream_length" === e.name);
                    return null == t ? 0 : t.percent
                }
            }
            C.displayName = "DropsStore";
            var R = new C(r.default, {
                DROPS_ELIGIBILITY_FETCH_SUCCESS: e => {
                    S[e.dropsQuestId] = e.isEligible
                },
                DROPS_PLATFORM_AVAILABILITY_SUCCESS: e => {
                    _ = e.availablePlatforms.filter(e => E.DROPS_PLATFORMS.includes(e))
                },
                DROPS_USER_STATUS_FETCH_SUCCESS: e => {
                    var t;
                    h = null !== (t = e.codes) && void 0 !== t ? t : {}
                },
                DROPS_USER_STATUS_FETCH_FAILURE: e => {
                    h = {}
                },
                DROPS_ENROLLED_USER_FETCH_SUCCESS: e => {
                    T[e.dropsQuestId] = {
                        isEnrolled: e.isEnrolled,
                        enrolledUser: e.enrolledUser
                    }
                },
                DROPS_FETCH_PROGRESS_SUCCESS: A,
                DROPS_FETCH_PROGRESS_FAILURE: e => {
                    !I.initialProgressFetched && (I.initialProgressFetched = !0, p = E.TooltipActions.STREAM_CTA)
                },
                DROPS_HEARTBEAT_SUCCESS: e => {
                    A(e), S[e.dropsQuestId] = !0, m()
                },
                DROPS_HEARTBEAT_FAILURE: e => {
                    let {
                        dropsQuestId: t,
                        statusCode: n
                    } = e;
                    if (I.completed = !1, I.initialProgressFetched = !0, I.lastCheckedAt = a.now(), 429 === n && 0 === I.retries) {
                        I.retries = I.retries + 1, m();
                        return
                    }
                    p = E.TooltipActions.STREAM_CTA, 403 === n ? S[t] = !1 : I.interrupted = !0
                },
                DROPS_UNENROLL_USER: e => {
                    h = null, S = {
                        ...S
                    }, delete S[e.dropsQuestId], T = {
                        ...T
                    }, delete T[e.dropsQuestId], I.dropsQuestId === e.dropsQuestId && (I = {
                        completed: !1,
                        initialProgressFetched: !1,
                        interrupted: !1,
                        retries: 0
                    })
                },
                STREAM_CLOSE: () => {
                    I.completed && (p = E.TooltipActions.QUEST_COMPLETION), I.interrupted = !1, I.retries = 0, N.stop()
                },
                STREAM_START: function(e) {
                    var t;
                    let {
                        streamType: n,
                        guildId: l,
                        channelId: a,
                        pid: s
                    } = e, i = (0, o.encodeStreamKey)({
                        streamType: n,
                        guildId: l,
                        channelId: a,
                        ownerId: u.default.getId()
                    });
                    if (null == s) return;
                    let _ = d.default.getGameForPID(s);
                    if (null == _) return;
                    let h = Object.values(E.DROPS_GAMES).find(e => e.gameSearchTerm.find(e => {
                        var t;
                        return e.toLowerCase() === (null === (t = _.name) || void 0 === t ? void 0 : t.toLowerCase())
                    }));
                    if (null == h || (0, f.getDropExpired)(h)) return;
                    let S = null === (t = (0, f.getDropsExperimentForDrop)(h)) || void 0 === t ? void 0 : t.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    });
                    if (null == S || !S.dropsEnabled) return;
                    let p = S.autoEnrollment;
                    null != T[h.dropsQuestId] && T[h.dropsQuestId].isEnrolled || p ? g(h, _, i) : r.default.wait(async () => {
                        var e;
                        await (0, c.fetchEnrolledUser)(h.dropsQuestId), (null === (e = T[h.dropsQuestId]) || void 0 === e ? void 0 : e.isEnrolled) && g(h, _, i)
                    })
                },
                LOGOUT: function() {
                    S = {}, T = {}, h = {}, N.stop()
                }
            })
        },
        579565: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDropsExperiment: function() {
                    return c
                },
                getDropsExperimentForDrop: function() {
                    return f
                },
                doesGameTitleMatchList: function() {
                    return E
                },
                getEligibleGameLastSeenStartTimeSeconds: function() {
                    return _
                },
                isDropGameDetected: function() {
                    return h
                },
                getEligibilityByRunningGameDetection: function() {
                    return S
                },
                getShowDropsNoticeBanner: function() {
                    return p
                },
                getShowDropsEndedIncompleteBanner: function() {
                    return N
                },
                getDropExpired: function() {
                    return I
                },
                getDrop: function() {
                    return m
                },
                getDropByQuestId: function() {
                    return A
                },
                getDropsPartnerGameNameByQuestId: function() {
                    return g
                },
                getPlatformLabel: function() {
                    return C
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("845579"),
                i = n("546463"),
                r = n("568307"),
                o = n("931115"),
                u = n("411511"),
                d = n("782340");

            function c(e) {
                let t = m(e);
                return null == t ? null : f(t)
            }

            function f(e) {
                if (e.dropsQuestId === u.FORTNITE_QUEST_ID) return o.DropsForGoLiveFortniteExperiment;
                return null
            }

            function E(e, t) {
                if (null == e) return !1;
                let n = i.default.getGameByName(e);
                return !!(null != n && t.some(e => {
                    var t;
                    return e.toLowerCase() === (null == n ? void 0 : null === (t = n.name) || void 0 === t ? void 0 : t.toLowerCase())
                })) || !1
            }

            function _() {
                return Math.floor(Date.now() / 1e3) - u.DROPS_ELIGIBILITY_SEEN_GAMES_LOOKBACK_SECONDS
            }

            function h(e, t, n) {
                var l, a, s, i;
                let r = m(e);
                if (null == r) return !1;
                let o = (l = t, a = u.PartnerGameNameToSearchTermMapping[e], null !== (s = l.find(e => E(e.name, a))) && void 0 !== s ? s : null);
                if (null != o) {
                    ;
                    let e = null !== (i = null == o ? void 0 : o.lastLaunched) && void 0 !== i ? i : 0;
                    return n <= o.lastFocused || 1e3 * n <= e
                }
                return !1
            }

            function S(e) {
                let t = r.default.getGamesSeen(!1);
                return h(e, t, _())
            }

            function T(e, t) {
                let {
                    endDate: n
                } = e, l = a(), s = a(n, u.noticeBannerDateFormat), i = a(l.clone().add(e.dropsNoticeBannerDurationDays, "days").format(u.noticeBannerDateFormat)), r = s.isSameOrBefore(i), o = s.isBefore(l, "minute");
                return r && (t && !o || !t && o)
            }

            function p(e) {
                var t;
                let n = m(e);
                if (null == n || !(null === (t = c(e)) || void 0 === t ? void 0 : t.getCurrentConfig({
                        location: "1"
                    }, {
                        autoTrackExposure: !1
                    }).dropsEnabled)) return !1;
                let l = s.DropsOptedOut.getSetting(),
                    a = T(n, !0);
                return !l && a
            }

            function N(e) {
                var t, n;
                let l = m(e);
                if (null == l || !(null === (n = c(e)) || void 0 === n ? void 0 : null === (t = n.getCurrentConfig({
                        location: "2"
                    }, {
                        autoTrackExposure: !1
                    })) || void 0 === t ? void 0 : t.dropsEnabled)) return !1;
                let a = s.DropsOptedOut.getSetting(),
                    i = T(l, !1);
                return I(l) && !a && i
            }

            function I(e) {
                let {
                    endDate: t
                } = e, n = a(t, "YYYY-MM-DD HH:mm"), l = a();
                return l > n
            }

            function m(e) {
                let t = u.DROPS_GAMES[e];
                return t
            }

            function A(e) {
                let t = Object.values(u.DROPS_GAMES).find(t => t.dropsQuestId === e);
                return t
            }

            function g(e) {
                let t = Object.keys(u.DROPS_GAMES).find(t => u.DROPS_GAMES[t].dropsQuestId === e);
                return t
            }

            function C(e) {
                switch (e) {
                    case "SWITCH":
                        return d.default.Messages.DROPS_PLATFORM_SWITCH;
                    case "PC":
                        return d.default.Messages.DROPS_PLATFORM_PC;
                    case "PLAYSTATION":
                        return d.default.Messages.DROPS_PLATFORM_PLAYSTATION;
                    case "XBOX":
                        return d.default.Messages.DROPS_PLATFORM_XBOX;
                    default:
                        return ""
                }
            }
        },
        954732: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144"),
                s = n("449008"),
                i = n("49111");
            let r = [],
                o = {},
                u = null,
                d = 0;

            function c(e) {
                let t = null;
                try {
                    t = JSON.parse(e.launch_parameters)
                } catch {
                    return null
                }
                if (e.platform_type === i.PlatformTypes.XBOX) {
                    let n = null == t ? void 0 : t.titleId,
                        l = null == t ? void 0 : t.inviteToken;
                    return null == n || null == l ? null : {
                        ...e,
                        parsed_launch_parameters: {
                            titleId: n,
                            inviteToken: l
                        }
                    }
                }
                return null
            }
            class f extends l.default.Store {
                getInvites() {
                    return r
                }
                isInviteGameInstalled(e) {
                    var t, n;
                    return null !== (n = null === (t = o[e.invite_id]) || void 0 === t ? void 0 : t.installed) && void 0 !== n && n
                }
                isInviteJoinable(e) {
                    var t, n;
                    return null !== (n = null === (t = o[e.invite_id]) || void 0 === t ? void 0 : t.joinable) && void 0 !== n && n
                }
                getLastUnseenInvite() {
                    return u
                }
                getUnseenInviteCount() {
                    return d
                }
            }
            f.displayName = "GameInviteStore";
            var E = new f(a.default, {
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        gameInvites: t
                    } = e;
                    r = t.map(c).filter(s.isNotNullish)
                },
                GAME_INVITE_CREATE: function(e) {
                    let {
                        gameInvite: t
                    } = e, n = c(t);
                    null != n && (r = [...r, n], u = t, d += 1)
                },
                GAME_INVITE_DELETE: function(e) {
                    let {
                        inviteId: t
                    } = e;
                    r = r.filter(e => e.invite_id !== t)
                },
                GAME_INVITE_DELETE_MANY: function(e) {
                    let {
                        inviteIds: t
                    } = e;
                    r = r.filter(e => !t.includes(e.invite_id))
                },
                GAME_INVITE_UPDATE_STATUS: function(e) {
                    o[e.inviteId] = {
                        installed: e.installed,
                        joinable: e.joinable
                    }
                },
                GAME_INVITE_CLEAR_UNSEEN: function(e) {
                    u = null, d = 0
                }
            })
        },
        22082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-11_xbox_game_invites",
                label: "Xbox Game Invites Experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Xbox Game Invites UI Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = a
        },
        362189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateInviteStatus: function() {
                    return o
                },
                launchInviteGame: function() {
                    return u
                },
                acceptInvite: function() {
                    return d
                },
                clearUnseenInvites: function() {
                    return c
                },
                deleteInvite: function() {
                    return f
                },
                deleteAllInvites: function() {
                    return E
                }
            }), n("70102");
            var l = n("872717"),
                a = n("913144"),
                s = n("760850"),
                i = n("773336"),
                r = n("49111");
            async function o(e) {
                if (e.platform_type === r.PlatformTypes.XBOX) {
                    let t = e.parsed_launch_parameters.titleId,
                        n = e.parsed_launch_parameters.inviteToken;
                    if (!(0, i.isWindows)() || null == t || null == n) return;
                    let l = await _(t, !1),
                        s = await S(n);
                    a.default.dispatch({
                        type: "GAME_INVITE_UPDATE_STATUS",
                        inviteId: e.invite_id,
                        installed: l,
                        joinable: s
                    })
                } else throw Error("Unsupported invite platform " + e.platform_type)
            }
            async function u(e) {
                if (e.platform_type === r.PlatformTypes.XBOX) {
                    let t = e.parsed_launch_parameters.titleId;
                    return !!(0, i.isWindows)() && null != t && await h(t)
                }
                throw Error("Unsupported invite platform " + e.platform_type)
            }
            async function d(e) {
                if (e.platform_type === r.PlatformTypes.XBOX) {
                    let t = e.parsed_launch_parameters.inviteToken;
                    return !!(0, i.isWindows)() && null != t && await T(t)
                }
                throw Error("Unsupported invite platform " + e.platform_type)
            }

            function c() {
                a.default.dispatch({
                    type: "GAME_INVITE_CLEAR_UNSEEN"
                })
            }
            async function f(e) {
                await l.default.delete({
                    url: r.Endpoints.GAME_INVITE(e.invite_id)
                })
            }
            async function E() {
                await l.default.delete({
                    url: r.Endpoints.GAME_INVITES
                })
            }
            async function _(e, t) {
                if (!(0, i.isWindows)()) return !1;
                let n = await (0, s.default)();
                return new Promise((l, a) => {
                    if ((null == n ? void 0 : n.xboxIsApplicationInstalled) == null) {
                        a(Error("Game utils module not loaded"));
                        return
                    }
                    n.xboxIsApplicationInstalled(e, t, e => {
                        l(e)
                    })
                })
            }
            async function h(e) {
                if (!(0, i.isWindows)()) return !1;
                let t = await (0, s.default)();
                return new Promise((n, l) => {
                    if ((null == t ? void 0 : t.xboxLaunchGame) == null) {
                        l(Error("Game utils module not loaded"));
                        return
                    }
                    t.xboxLaunchGame(e, e => {
                        n(e)
                    })
                })
            }
            async function S(e) {
                if (!(0, i.isWindows)()) return !1;
                let t = await (0, s.default)();
                return new Promise((n, l) => {
                    if ((null == t ? void 0 : t.xboxIsInviteTokenValid) == null) {
                        l(Error("Game utils module not loaded"));
                        return
                    }
                    t.xboxIsInviteTokenValid(e, e => {
                        n(e)
                    })
                })
            }
            async function T(e) {
                if (!(0, i.isWindows)()) return !1;
                let t = await (0, s.default)();
                return new Promise((n, l) => {
                    if ((null == t ? void 0 : t.xboxAcceptGameInvite) == null) {
                        l(Error("Game utils module not loaded"));
                        return
                    }
                    t.xboxAcceptGameInvite(e, e => {
                        n(e)
                    })
                })
            }
        },
        875037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-08_guild_usage_survey",
                label: "Guild Usage Survey",
                defaultConfig: {
                    showSurvey: !1
                },
                treatments: [{
                    id: 1,
                    label: "show survey nag bar",
                    config: {
                        showSurvey: !0
                    }
                }]
            });
            var s = a
        },
        513472: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("866227"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("519705"),
                u = n("531674"),
                d = n("319165"),
                c = n("282109"),
                f = n("34676"),
                E = n("782340");

            function _(e, t) {
                let n = null == e ? void 0 : e.id,
                    {
                        muted: a,
                        muteConfig: _
                    } = (0, i.useStateFromStoresObject)([c.default], () => ({
                        muted: null != n ? c.default.isMuted(n) : void 0,
                        muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
                    }), [n]),
                    h = (0, d.useMutedUntilText)(_);
                return null == n ? null : a ? (0, l.jsx)(r.MenuItem, {
                    id: "unmute-guild",
                    label: E.default.Messages.UNMUTE_SERVER,
                    subtext: h,
                    action: () => o.default.updateGuildNotificationSettings(n, {
                        muted: !1
                    }, f.NotificationLabels.Unmuted)
                }) : (0, l.jsx)(r.MenuItem, {
                    id: "mute-guild",
                    label: E.default.Messages.MUTE_SERVER,
                    action: () => o.default.updateGuildNotificationSettings(n, {
                        muted: !0
                    }, f.NotificationLabels.Muted),
                    children: (0, u.getMuteTimes)().map(e => {
                        let {
                            value: a,
                            label: i
                        } = e;
                        return (0, l.jsx)(r.MenuItem, {
                            id: "".concat(a),
                            label: i,
                            action: () => (function(e) {
                                if (null == n) return;
                                let l = e > 0 ? s().add(e, "second").toISOString() : null;
                                o.default.updateGuildNotificationSettings(n, {
                                    muted: !0,
                                    mute_config: {
                                        selected_time_window: e,
                                        end_time: l
                                    }
                                }, f.NotificationLabels.Muted, t)
                            })(a)
                        }, a)
                    })
                })
            }
        },
        957825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("531674"),
                r = n("619436"),
                o = n("513472"),
                u = n("305961");

            function d(e) {
                let {
                    channel: t,
                    closePopout: n,
                    onSelect: d,
                    navId: c,
                    label: f,
                    location: E,
                    includeGuildMute: _
                } = e, h = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(t.guild_id)), S = (0, o.default)(h);
                return (0, l.jsxs)(s.Menu, {
                    navId: c,
                    onClose: n,
                    "aria-label": f,
                    onSelect: d,
                    children: [(0, l.jsx)(s.MenuGroup, {
                        children: (0, i.default)(t, E)
                    }), _ ? (0, l.jsx)(s.MenuGroup, {
                        children: S
                    }) : null, (0, l.jsx)(s.MenuGroup, {
                        children: (0, r.useChannelNotificationRadioItems)(t)
                    })]
                })
            }
        },
        539938: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handleDoubleClick: function() {
                    return C
                },
                default: function() {
                    return L
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("394846"),
                r = n("446674"),
                o = n("812204"),
                u = n("685665"),
                d = n("56947"),
                c = n("76813"),
                f = n("311197"),
                E = n("92790"),
                _ = n("697218"),
                h = n("664336"),
                S = n("773336"),
                T = n("50885"),
                p = n("836056"),
                N = n("922953"),
                I = n("879035"),
                m = n("49111"),
                A = n("724210"),
                g = n("122693");
            async function C() {
                if ((0, S.isMac)() && S.isPlatformEmbedded) {
                    var e, t, n;
                    let l = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
                    "Minimize" === l ? T.default.minimize() : "Maximize" === l && T.default.maximize()
                }
            }

            function R(e) {
                let {
                    children: t,
                    className: n,
                    channelId: a,
                    guildId: s,
                    innerClassname: o,
                    transparent: u = !1,
                    toolbar: S,
                    mobileToolbar: T,
                    "aria-label": m,
                    "aria-labelledby": A,
                    scrollable: R,
                    role: M,
                    hideSearch: O
                } = e, L = (0, r.useStateFromStores)([_.default], () => _.default.getCurrentUser()), v = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1, {
                    showClipsHeaderEntrypoint: D
                } = d.ClipsExperiment.useExperiment({
                    location: "HeaderBarLoggedIn"
                }, {
                    autoTrackExposure: !1
                });
                return (0, l.jsx)(h.default, {
                    className: n,
                    innerClassName: o,
                    toolbar: function() {
                        if (null == S) return null;
                        let e = null != a && !O;
                        return i.isMobile ? T : (0, l.jsxs)(l.Fragment, {
                            children: [S, e ? (0, l.jsx)(E.default, {
                                className: g.search
                            }, null != s ? s : a) : null, (0, l.jsx)(I.default, {}), D && (0, l.jsx)(c.default, {}), (0, l.jsx)(f.default, {}), v ? (0, l.jsx)(N.default, {}) : (0, l.jsx)(p.default, {})]
                        })
                    }(),
                    transparent: u,
                    onDoubleClick: C,
                    "aria-label": m,
                    "aria-labelledby": A,
                    role: M,
                    scrollable: R,
                    children: t
                })
            }

            function M(e) {
                let {
                    children: t,
                    className: n,
                    "aria-label": a,
                    "aria-labelledby": s,
                    role: i
                } = e;
                return (0, l.jsx)(h.default, {
                    className: n,
                    onDoubleClick: C,
                    "aria-label": a,
                    "aria-labelledby": s,
                    role: i,
                    children: t
                })
            }

            function O(e) {
                let {
                    isAuthenticated: t = !0,
                    ...n
                } = e, {
                    AnalyticsLocationProvider: a
                } = (0, u.default)(o.default.HEADER_BAR), i = s(n.className, {
                    [g.forumOrHome]: null != n.channelType && m.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === A.StaticChannelRoute.GUILD_HOME
                });
                return (0, l.jsx)(a, {
                    children: t ? (0, l.jsx)(R, {
                        ...n,
                        className: i
                    }) : (0, l.jsx)(M, {
                        ...n,
                        className: i
                    })
                })
            }
            O.Title = h.default.Title, O.Icon = h.default.Icon, O.Divider = h.default.Divider, O.Caret = h.default.Caret;
            var L = O
        },
        836056: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("669491"),
                i = n("77078"),
                r = n("915639"),
                o = n("697218"),
                u = n("834179"),
                d = n("664336"),
                c = n("599110"),
                f = n("701909"),
                E = n("158998"),
                _ = n("49111"),
                h = n("782340");
            let S = new Set(["ko", "ja"]);

            function T() {
                let e = (0, a.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    t = (0, a.useStateFromStores)([r.default], () => r.default.locale),
                    n = (0, E.isNewUser)(e);
                return (0, l.jsx)(i.Anchor, {
                    href: f.SUPPORT_LOCATION,
                    target: "_blank",
                    tabIndex: -1,
                    children: (0, l.jsx)(d.Icon, {
                        color: n ? s.default.unsafe_rawColors.GREEN_360.css : "currentColor",
                        onClick: () => c.default.track(_.AnalyticEvents.HELP_CLICKED, {
                            highlighted: n
                        }),
                        icon: u.default,
                        tooltipPosition: S.has(t) ? "left" : void 0,
                        tooltip: h.default.Messages.HELP
                    })
                })
            }
        },
        922953: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("545158"),
                o = n("370492"),
                u = n("584369"),
                d = n("471654"),
                c = n("496657"),
                f = n("758710"),
                E = n("664336"),
                _ = n("701909"),
                h = n("782340");

            function S() {
                let e = (0, s.useStateFromStores)([u.default], () => u.default.devToolsEnabled),
                    [t, S] = a.useState(!1),
                    [T, p] = a.useState(0),
                    N = e => {
                        clearTimeout(T), p(setTimeout(() => {
                            S(e)
                        }, 100))
                    };
                return (0, l.jsx)("div", {
                    onMouseEnter: () => N(!0),
                    onMouseLeave: () => N(!1),
                    children: (0, l.jsx)(i.Popout, {
                        shouldShow: t,
                        animation: i.Popout.Animation.NONE,
                        position: "bottom",
                        align: "right",
                        autoInvert: !1,
                        onRequestOpen: () => S(!0),
                        onRequestClose: () => S(!1),
                        renderPopout: () => (function(e) {
                            let {
                                onClose: t,
                                devToolsEnabled: a
                            } = e;
                            return (0, l.jsx)(i.Menu, {
                                onSelect: () => {},
                                navId: "staff-help-popout",
                                variant: "fixed",
                                onClose: t,
                                "aria-label": h.default.Messages.GUILD_ACTIONS_MENU_LABEL,
                                children: (0, l.jsxs)(i.MenuGroup, {
                                    children: [(0, l.jsx)(i.MenuItem, {
                                        id: "staff-help-bug-reporter",
                                        label: h.default.Messages.BUG_REPORT_TITLE,
                                        icon: d.default,
                                        action: () => (0, i.openModalLazy)(async () => {
                                            let {
                                                default: e
                                            } = await n.el("323518").then(n.bind(n, "323518"));
                                            return t => (0, l.jsx)(e, {
                                                ...t
                                            })
                                        })
                                    }), a && (0, l.jsx)(i.MenuItem, {
                                        id: "staff-devtools",
                                        label: "Toggle DevTools",
                                        icon: c.default,
                                        action: () => (0, o.toggleDisplayDevTools)()
                                    }), (0, l.jsx)(i.MenuItem, {
                                        id: "staff-help-center",
                                        label: "Go to Help Center",
                                        icon: f.default,
                                        action: () => (0, r.default)(_.SUPPORT_LOCATION)
                                    })]
                                })
                            })
                        })({
                            onClose: () => S(!1),
                            devToolsEnabled: e
                        }),
                        children: (e, t) => {
                            let {
                                isShown: n
                            } = t;
                            return (0, l.jsx)(E.Icon, {
                                ...e,
                                icon: d.default,
                                "aria-label": h.default.Messages.HELP,
                                selected: n
                            })
                        }
                    })
                })
            }
        },
        879035: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("404118"),
                o = n("649486"),
                u = n("236717"),
                d = n("945956"),
                c = n("195812"),
                f = n("733350"),
                E = n("664336"),
                _ = n("868308"),
                h = n("782340"),
                S = n("122693");
            class T extends a.PureComponent {
                static getDerivedStateFromProps(e, t) {
                    return e.mode !== t.memoizedMode ? {
                        memoizedMode: e.mode,
                        clicked: !1
                    } : null
                }
                handleDownloadApps() {
                    (0, i.openModal)(e => (0, l.jsx)(o.default, {
                        source: "Links",
                        ...e
                    }))
                }
                render() {
                    switch (this.props.mode) {
                        case "UPDATE_AVAILABLE":
                            return (0, l.jsx)(E.Icon, {
                                hideOnClick: !1,
                                tooltip: h.default.Messages.UPDATE_AVAILABLE,
                                foreground: S.downloadArrow,
                                background: S.cloud,
                                icon: f.default
                            });
                        case "UPDATE_MANUALLY":
                        case "UPDATE_DOWNLOADED":
                            return (0, l.jsx)(E.Icon, {
                                tooltip: h.default.Messages.UPDATE_DOWNLOADED,
                                foreground: S.updateIconForeground,
                                onClick: this.handleInstallDownload,
                                icon: c.default
                            });
                        default:
                            return null
                    }
                }
                constructor(...e) {
                    super(...e), this.state = {
                        memoizedMode: this.props.mode,
                        clicked: !1
                    }, this.handleInstallDownload = () => {
                        d.default.isConnected() ? r.default.show({
                            title: h.default.Messages.UPDATE_DURING_CALL_TITLE,
                            body: h.default.Messages.UPDATE_DURING_CALL_BODY,
                            onConfirm: this.doUpdate,
                            cancelText: h.default.Messages.CANCEL,
                            confirmText: h.default.Messages.UPDATE_DURING_CALL_CONTINUE
                        }) : this.doUpdate()
                    }, this.doUpdate = () => {
                        !this.state.clicked && (this.setState({
                            clicked: !0
                        }), (0, _.quitAndInstall)())
                    }
                }
            }
            var p = s.default.connectStores([u.default], () => ({
                mode: u.default.getState()
            }))(T)
        },
        960808: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRemindersLoader: function() {
                    return u
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("819689"),
                i = n("42203"),
                r = n("377253"),
                o = n("931318");

            function u(e) {
                let t = (0, a.useStateFromStoresArray)([i.default, r.default], () => e.filter(e => null != i.default.getChannel(e.channelId)).map(e => r.default.getMessage(e.channelId, e.messageId)).filter(e => null != e)),
                    n = e.filter(e => null == r.default.getMessage(e.channelId, e.messageId)),
                    [u, d] = l.useState(0 === n.length);
                return l.useEffect(() => {
                    (0, o.fetchAndUpdateSavedMessages)()
                }, []), l.useEffect(() => {
                    !u && (n.forEach(e => {
                        try {
                            s.default.fetchMessages({
                                channelId: e.channelId,
                                limit: 1,
                                jump: {
                                    messageId: e.messageId,
                                    flash: !1,
                                    offset: 1
                                }
                            })
                        } catch {}
                    }), d(!0))
                }, [n, u]), t
            }
        },
        45835: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getSavedMessageAndChannel: function() {
                    return d
                }
            });
            var l = n("298386"),
                a = n("233069"),
                s = n("719926"),
                i = n("766274"),
                r = n("42203"),
                o = n("377253"),
                u = n("697218");

            function d(e) {
                var t, n, d;
                let c = o.default.getMessage(e.channelId, e.messageId),
                    f = u.default.getUser(e.authorId),
                    E = r.default.getChannel(e.channelId),
                    _ = null != f ? f : new i.default({
                        id: e.authorId,
                        username: e.authorSummary
                    }),
                    h = new s.default({
                        id: e.messageId,
                        channel_id: e.channelId,
                        author: _,
                        content: e.messageSummary
                    }),
                    S = null == e.guildId ? new a.DMChannelRecord({
                        id: e.channelId,
                        type: l.ChannelTypes.DM,
                        name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
                        guild_id: "",
                        recipients: [null !== (n = e.authorId) && void 0 !== n ? n : ""]
                    }) : new a.GuildTextualChannelRecord({
                        id: e.channelId,
                        type: null == e.guildId ? l.ChannelTypes.DM : l.ChannelTypes.GUILD_TEXT,
                        name: null !== (d = e.channelSummary) && void 0 !== d ? d : "",
                        guild_id: e.guildId
                    });
                return {
                    channel: null != E ? E : S,
                    message: null != c ? c : h
                }
            }
        },
        459776: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isNewGroupItem: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var l = n("888400"),
                a = n("500858"),
                s = n("913491"),
                i = n("49111");

            function r(e, t, n) {
                return null == t || t.type === i.ChannelStreamTypes.MESSAGE && t.content.id === t.content.channel_id || t.type !== i.ChannelStreamTypes.MESSAGE && t.type !== i.ChannelStreamTypes.THREAD_STARTER_MESSAGE || o(e, t.content, n)
            }

            function o(e, t, n) {
                if (n.hasFlag(i.MessageFlags.HAS_THREAD) || n.isCommandType()) return !0;
                if (n.type > i.MessageTypes.DEFAULT) return !(0, s.default)(t) || n.type === i.MessageTypes.REPLY || !1;
                return !!((0, s.default)(t) || t.author.id !== n.author.id || t.hasFlag(i.MessageFlags.EPHEMERAL) !== n.hasFlag(i.MessageFlags.EPHEMERAL) || null != n.webhookId && t.author.username !== n.author.username || (null == e ? void 0 : e.isForumPost()) && t.id === e.id || !(0, l.isWithinInterval)(t.timestamp, n.timestamp, 42e4) || n.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) || t.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(i.MessageFlags.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone) || (0, a.default)(n)) || !1
            }
        },
        603531: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("702976");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                o = n("193865"),
                u = n("963119"),
                d = n("467475"),
                c = n("256572"),
                f = n("845579"),
                E = n("42203"),
                _ = n("27618"),
                h = n("945330"),
                S = n("780571"),
                T = n("304198"),
                p = n("568734"),
                N = n("654017"),
                I = n("913491"),
                m = n("574073"),
                A = n("359132"),
                g = n("723931"),
                C = n("39331"),
                R = n("68480"),
                M = n("596368"),
                O = n("227439"),
                L = n("862451"),
                v = n("611792"),
                D = n("554372"),
                y = n("49111"),
                P = n("782340"),
                x = n("555821"),
                U = n("877671"),
                b = a.memo(function e(t) {
                    var n, a, s;
                    let h;
                    let {
                        channel: T,
                        message: x,
                        compact: b = !1,
                        className: j,
                        onContextMenu: G,
                        onClick: k,
                        disableInteraction: w = !1,
                        hasThread: B,
                        treatSpam: H
                    } = t, V = y.MessageTypesWithLazyLoadedReferences.has(x.type) ? x.messageReference : void 0, Y = (0, r.useStateFromStores)([c.default], () => c.default.getMessageByReference(V)), K = (0, r.useStateFromStores)([E.default], () => x.type === y.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === c.ReferencedMessageState.LOADED ? E.default.getChannel(Y.message.channel_id) : null), Q = f.InlineAttachmentMedia.useSetting(), z = f.InlineEmbedMedia.useSetting(), W = f.RenderEmbeds.useSetting() && !x.author.isClyde(), q = f.GifAutoPlay.useSetting(), X = (0, o.useShowImprovedMarkdownUserExperimentConfig)((null !== (n = x.editedTimestamp) && void 0 !== n ? n : x.timestamp).valueOf()), Z = (0, o.useShowImprovedMarkdownGuildExperimentConfig)(null !== (a = null == T ? void 0 : T.guild_id) && void 0 !== a ? a : "", (null !== (s = x.editedTimestamp) && void 0 !== s ? s : x.timestamp).valueOf()), J = (0, d.default)(null == T ? void 0 : T.id), {
                        disableReactionCreates: $
                    } = (0, A.default)(T), {
                        content: ee,
                        hasSpoilerEmbeds: et
                    } = (0, C.default)(x, {
                        hideSimpleEmbedContent: z && W,
                        allowList: X.showListsAndHeaders || Z.showListsAndHeaders,
                        allowHeading: X.showListsAndHeaders || Z.showListsAndHeaders,
                        allowLinks: X.showMaskedLinks || Z.showMaskedLinks,
                        previewLinkTarget: X.showMaskedLinks || Z.showMaskedLinks
                    }), en = (0, m.default)(x), el = (0, r.useStateFromStores)([E.default], () => x.hasFlag(y.MessageFlags.HAS_THREAD) && E.default.getChannel(x.id)), ea = x.type === y.MessageTypes.THREAD_STARTER_MESSAGE && Y.state === c.ReferencedMessageState.LOADED && null != K, es = !ea && void 0 === h, ei = (0, R.default)({
                        message: x,
                        channel: T,
                        enabled: es
                    }), er = (0, u.useShouldRedactExplicitContent)(T.id, x.author.id);
                    return ea ? (0, l.jsx)(e, {
                        ...t,
                        message: Y.message,
                        channel: K,
                        hasThread: !1
                    }) : (_.default.isBlocked(x.author.id) ? h = P.default.Messages.BLOCKED_MESSAGE_COUNT : (0, N.isSpam)(x) && H && (h = P.default.Messages.HIDDEN_SPAM_MESSAGE_COUNT), void 0 !== h) ? (0, l.jsx)(F, {
                        className: j,
                        compact: b,
                        count: 1,
                        collapsedReason: h
                    }) : (0, l.jsx)(S.default, {
                        compact: b,
                        className: i(j, {
                            [U.ephemeral]: (0, p.hasFlag)(x.flags, y.MessageFlags.EPHEMERAL),
                            [U.disableInteraction]: w,
                            [U.groupStart]: t.isGroupStart
                        }),
                        childrenRepliedMessage: (0, D.default)(x, T, V, Y, b),
                        childrenHeader: (0, O.default)({
                            ...t,
                            author: en,
                            guildId: T.guild_id
                        }),
                        childrenAccessories: (0, l.jsx)(g.MessageAccessories, {
                            channel: T,
                            message: x,
                            hasSpoilerEmbeds: et,
                            compact: b,
                            canSuppressEmbeds: !1,
                            canDeleteAttachments: !1,
                            disableReactionReads: !1,
                            disableReactionCreates: $,
                            disableReactionUpdates: !1,
                            renderThreadAccessory: B,
                            renderComponentAccessory: !1,
                            inlineAttachmentMedia: Q,
                            inlineEmbedMedia: z,
                            renderEmbeds: W,
                            gifAutoPlay: q,
                            showListsAndHeaders: X.showListsAndHeaders || Z.showListsAndHeaders,
                            showMaskedLinks: X.showMaskedLinks || Z.showMaskedLinks,
                            shouldHideMediaOptions: J,
                            showClydeAiEmbeds: !1,
                            shouldRedactExplicitContent: er
                        }),
                        childrenExecutedCommand: (0, v.default)(x, T, b),
                        childrenMessageContent: (0, M.default)(t, ee),
                        childrenSystemMessage: (0, L.default)(t),
                        onContextMenu: G,
                        onClick: k,
                        hasThread: !1 !== B && null != el && x.hasFlag(y.MessageFlags.HAS_THREAD),
                        hasReply: x.type === y.MessageTypes.REPLY,
                        isSystemMessage: (0, I.default)(x),
                        messageRef: ei
                    })
                });

            function F(e) {
                let {
                    className: t,
                    count: n,
                    compact: a,
                    collapsedReason: s
                } = e;
                return (0, l.jsx)(S.default, {
                    className: t,
                    compact: a,
                    role: "group",
                    childrenMessageContent: (0, l.jsx)(T.default, {
                        compact: a,
                        className: x.blockedSystemMessage,
                        iconNode: (0, l.jsx)(h.default, {
                            className: x.blockedIcon
                        }),
                        children: (0, l.jsx)("div", {
                            className: x.blockedMessageText,
                            children: s.format({
                                count: n
                            })
                        })
                    })
                })
            }
        },
        739034: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var l = n("884691");
            let a = !1,
                s = new Set;

            function i(e) {
                e !== a && (a = e, s.forEach(e => e(a)))
            }

            function r() {
                let [e, t] = l.useState(a);
                return l.useEffect(() => {
                    let e = e => {
                        t(e)
                    };
                    return s.add(e), () => {
                        s.delete(e)
                    }
                }, []), e
            }
            window.addEventListener("keydown", e => {
                i(e.shiftKey)
            }), window.addEventListener("keyup", e => {
                i(e.shiftKey)
            }), window.addEventListener("mousemove", e => {
                i(e.shiftKey)
            }), window.addEventListener("blur", () => {
                i(!1)
            })
        },
        777204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PROFILE_BACKGROUND: function() {
                    return l
                },
                FRIEND_BACKGROUND: function() {
                    return a
                },
                MESSAGE_BACKGROUND: function() {
                    return s
                }
            });
            let l = "#83DDC5",
                a = "#F47FFF",
                s = "#FFDE4D"
        },
        352273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setNotificationCenterActive: function() {
                    return f
                },
                resetNotificationCenter: function() {
                    return E
                },
                fetchNotificationCenterItems: function() {
                    return _
                },
                markNotificationCenterItemAcked: function() {
                    return h
                },
                deleteNotificationCenterItem: function() {
                    return T
                }
            });
            var l = n("759843"),
                a = n("872717"),
                s = n("627929"),
                i = n("913144"),
                r = n("845579"),
                o = n("840707"),
                u = n("136511"),
                d = n("342176"),
                c = n("49111");

            function f(e) {
                i.default.dispatch({
                    type: "NOTIFICATION_CENTER_SET_ACTIVE",
                    active: e
                })
            }

            function E() {
                i.default.dispatch({
                    type: "RESET_NOTIFICATION_CENTER"
                })
            }
            async function _(e, t) {
                if (u.default.loading) return;
                await i.default.dispatch({
                    type: "LOAD_NOTIFICATION_CENTER_ITEMS"
                });
                let n = Math.ceil(u.default.items.length / e.limit);
                try {
                    let a = await o.default.get({
                        url: c.Endpoints.NOTIF_CENTER_ITEMS(),
                        trackedActionData: {
                            event: l.NetworkActionNames.NOTIFICATION_CENTER_PAGE_FETCH,
                            properties: e => {
                                var t;
                                let l = ((null === (t = e.body) || void 0 === t ? void 0 : t.items) || []).map(e => e.type);
                                return (0, s.exact)({
                                    page: n,
                                    items: l,
                                    item_count: l.length
                                })
                            }
                        },
                        query: {
                            ...e
                        }
                    });
                    null == t || t(), await i.default.dispatch({
                        type: "LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS",
                        items: a.body.items,
                        cursor: a.body.cursor,
                        hasMore: a.body.has_more
                    })
                } catch (e) {
                    null == t || t(), await i.default.dispatch({
                        type: "LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE"
                    })
                }
            }

            function h(e) {
                null != e.local_id ? function(e) {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEMS_LOCAL_ACK",
                        localIds: e
                    })
                }([e.local_id]) : (0, d.isMentionItem)(e) ? function(e) {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEMS_ACK",
                        optimistic: !0,
                        ids: [e]
                    })
                }(e.id) : S(e.id)
            }
            async function S(e) {
                try {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEMS_ACK",
                        optimistic: !0,
                        ids: [e]
                    }), await a.default.post({
                        url: c.Endpoints.NOTIF_CENTER_ITEMS_ACK(e)
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEMS_ACK_FAILURE",
                        ids: [e]
                    })
                }
            }
            async function T(e) {
                let t = r.NotificationCenterAckedBeforeId.getSetting();
                try {
                    i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEM_DELETE",
                        id: e.id
                    }), await o.default.delete({
                        url: c.Endpoints.NOTIF_CENTER_ITEMS(e.id),
                        body: {
                            item_type: (0, d.isMentionItem)(e) ? "mention" : "regular"
                        },
                        trackedActionData: {
                            event: l.NetworkActionNames.NOTIFICATION_CENTER_ITEM_DELETE,
                            properties: {
                                notification_center_id: e.id,
                                acked: (0, d.isRemoteAcked)(e, t),
                                item_type: e.type
                            }
                        }
                    })
                } catch (t) {
                    throw i.default.dispatch({
                        type: "NOTIFICATION_CENTER_ITEM_DELETE_FAILURE",
                        item: e
                    }), t
                }
            }
        },
        204116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var l = n("446674"),
                a = n("913144");
            n("21121");
            var s = n("138217"),
                i = n("299039"),
                r = n("360191");
            let o = {
                tab: null,
                localItemAcks: {},
                hasNewMentions: !1,
                isDataStale: !1,
                isRefreshing: !1
            };
            class u extends l.default.PersistedStore {
                initialize(e) {
                    if (this.waitFor(s.default), null != e) {
                        var t;
                        (o = e).localItemAcks = function(e) {
                            let t = {};
                            for (let [n, l] of Object.entries(e)) Date.now() - l < 7776e6 && (t[n] = l);
                            return t
                        }(null !== (t = o.localItemAcks) && void 0 !== t ? t : {}), o.isDataStale = !0
                    }
                }
                getState() {
                    return o
                }
                getTab() {
                    var e;
                    return null !== (e = o.tab) && void 0 !== e ? e : r.NotificationCenterTabs.ForYou
                }
                isLocalItemAcked(e) {
                    return null != e.local_id && (null != o.localItemAcks[e.local_id] || i.default.age(e.id) > 7776e6)
                }
                hasNewMentions() {
                    return o.hasNewMentions
                }
                isDataStale() {
                    return o.isDataStale
                }
                isRefreshing() {
                    return o.isRefreshing
                }
                shouldReload() {
                    return o.hasNewMentions || o.isDataStale || o.isRefreshing
                }
            }
            u.displayName = "NotificationCenterStore", u.persistKey = "NotificationCenterStore";

            function d() {
                o.hasNewMentions = !1, o.isDataStale = !1, o.isRefreshing = !1
            }
            var c = new u(a.default, {
                MESSAGE_CREATE: function(e) {
                    let {
                        message: t
                    } = e
                },
                NOTIFICATION_CENTER_SET_TAB: function(e) {
                    o = {
                        ...o,
                        tab: e.tab
                    }
                },
                NOTIFICATION_CENTER_ITEMS_LOCAL_ACK: function(e) {
                    let {
                        localIds: t
                    } = e;
                    t.forEach(e => {
                        o = {
                            ...o,
                            localItemAcks: {
                                ...o.localItemAcks,
                                [e]: Date.now()
                            }
                        }
                    })
                },
                NOTIFICATION_CENTER_REFRESH: function() {
                    o.isRefreshing = !0
                },
                LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE: d,
                LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: d
            })
        },
        183030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useNotificationCenterItemAcked: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("204116"),
                s = n("342176");
            let i = (e, t) => {
                let n = (0, l.useStateFromStores)([a.default], () => a.default.isLocalItemAcked(e));
                return !e.forceUnacked && (n || (0, s.isRemoteAcked)(e, t))
            }
        },
        396539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useDesktopNotificationCenterItemsLoader: function() {
                    return E
                }
            }), n("222007");
            var l = n("884691"),
                a = n("446674"),
                s = n("267363"),
                i = n("756166"),
                r = n("138217"),
                o = n("352273"),
                u = n("136511"),
                d = n("204116"),
                c = n("133335");
            let f = e => {
                    let {
                        isFocused: t,
                        navigatedAway: n,
                        isDesktop: f,
                        withMentions: E = !1,
                        initialPageSize: _
                    } = e, h = (0, a.useStateFromStores)([d.default], () => d.default.shouldReload()), S = l.useRef(!1), [T, p] = l.useState(!1), {
                        initialized: N,
                        loading: I,
                        items: m,
                        hasMore: A,
                        cursor: g,
                        errored: C
                    } = (0, a.useStateFromStoresObject)([u.default], () => ({
                        initialized: u.default.initialized,
                        loading: u.default.loading,
                        items: u.default.items,
                        hasMore: u.default.hasMore,
                        cursor: u.default.cursor,
                        errored: u.default.errored
                    })), {
                        roleFilter: R,
                        everyoneFilter: M
                    } = (0, a.useStateFromStoresObject)([r.default], () => ({
                        everyoneFilter: r.default.everyoneFilter,
                        roleFilter: r.default.roleFilter
                    }));
                    l.useEffect(() => ((0, o.setNotificationCenterActive)(!0), () => (0, o.setNotificationCenterActive)(!1)), []), l.useEffect(() => {
                        N && t && (0, s.ackUserFeature)(c.ReadStateTypes.NOTIFICATION_CENTER)
                    }, [t, N]);
                    let O = (0, i.default)();
                    l.useEffect(() => () => {
                        f ? !O() && (C || m.length > 100) && (0, o.resetNotificationCenter)() : n && m.length > 100 && (0, o.resetNotificationCenter)()
                    }, [n, m, f, O, C]), l.useEffect(() => {
                        let e = h && t;
                        (!N || e) && (0, o.fetchNotificationCenterItems)({
                            limit: null != _ ? _ : E ? 8 : 20,
                            with_mentions: E,
                            roles_filter: R,
                            everyone_filter: M
                        })
                    }, [N, h, t, E, R, M, _]);
                    let L = l.useCallback(async e => {
                        !S.current && N && A && null != g && (e || !C) && (S.current = !0, p(!0), await (0, o.fetchNotificationCenterItems)({
                            after: g,
                            with_mentions: E,
                            roles_filter: R,
                            everyone_filter: M,
                            limit: E ? 8 : 20
                        }, () => {
                            S.current = !1
                        }), p(!1))
                    }, [N, A, g, C, E, R, M]);
                    return {
                        initialized: N,
                        loading: I,
                        items: m,
                        hasMore: A,
                        loadMore: L,
                        loadingMore: T,
                        setReadNotifItemToAcked: e => {
                            !e.acked && (e.acked = !0)
                        },
                        errored: C
                    }
                },
                E = () => {
                    let {
                        initialized: e,
                        loading: t,
                        items: n,
                        hasMore: l,
                        loadMore: a
                    } = f({
                        isFocused: !0,
                        isDesktop: !0
                    });
                    return {
                        initialized: e,
                        loading: t,
                        items: n.filter(e => "notification-center-item" === e.kind),
                        hasMore: l,
                        loadMore: a
                    }
                }
        },
        839743: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ForYouEmptyState: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("782340"),
                s = n("210423"),
                i = n("794027");
            let r = () => (0, l.jsxs)("div", {
                className: s.container,
                children: [(0, l.jsx)("img", {
                    className: s.image,
                    alt: "",
                    src: i
                }), (0, l.jsx)("div", {
                    className: s.title,
                    children: a.default.Messages.FOR_YOU_EMPTY_TITLE
                }), (0, l.jsx)("div", {
                    className: s.body,
                    children: a.default.Messages.FOR_YOU_EMPTY_BODY
                })]
            })
        },
        108367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FOR_YOU_ICONS: function() {
                    return g
                },
                getIcon: function() {
                    return R
                },
                getIconByName: function() {
                    return M
                },
                getMask: function() {
                    return O
                },
                getBackground: function() {
                    return L
                }
            });
            var l, a, s, i, r = n("669491"),
                o = n("360191"),
                u = n("777204"),
                d = n("505406"),
                c = n("92440"),
                f = n("608108"),
                E = n("804621"),
                _ = n("578299"),
                h = n("522420"),
                S = n("371031"),
                T = n("674517"),
                p = n("989306"),
                N = n("695449"),
                I = n("816428"),
                m = n("710672");
            (l = s || (s = {})).CHECKED = "CHECKED", l.FRIENDS = "FRIENDS", l.SHARE_SCREEN = "SHARE_SCREEN", l.NEW_MESSAGE = "NEW_MESSAGE";
            let A = {
                CHECKED: f,
                FRIENDS: _,
                SHARE_SCREEN: I,
                NEW_MESSAGE: p
            };
            (a = i || (i = {})).MISSED_MESSAGES = "MISSED_MESSAGES", a.FRIEND_REQUEST_REMINDER = "FRIEND_REQUEST_REMINDER", a.SCHEDULED_GUILD_EVENT = "SCHEDULED_GUILD_EVENT", a.TOP_MESSAGES = "TOP_MESSAGES", a.NOTIFICATION_CENTER = "NOTIFICATION_CENTER", a.UPDATE_PROFILE = "UPDATE_PROFILE", a.FIND_FRIENDS = "FIND_FRIENDS", a.ADD_FRIEND = "ADD_FRIEND", a.FIRST_MESSAGE = "FIRST_MESSAGE";
            let g = {
                    MISSED_MESSAGES: T,
                    FRIEND_REQUEST_REMINDER: h,
                    SCHEDULED_GUILD_EVENT: E,
                    TOP_MESSAGES: S,
                    NOTIFICATION_CENTER: c,
                    UPDATE_PROFILE: m,
                    FIND_FRIENDS: d,
                    ADD_FRIEND: d,
                    FIRST_MESSAGE: N
                },
                C = e => {
                    switch (e.item_enum) {
                        case o.ItemEnum.ADD_FRIEND:
                            return "ADD_FRIEND";
                        case o.ItemEnum.FIND_FRIENDS:
                            return "FIND_FRIENDS";
                        case o.ItemEnum.FIRST_MESSAGE:
                            return "FIRST_MESSAGE";
                        case o.ItemEnum.UPDATE_PROFILE:
                            return "UPDATE_PROFILE";
                        default:
                            return "NOTIFICATION_CENTER"
                    }
                },
                R = e => {
                    switch (e.type) {
                        case "lifecycle_item":
                            return C(e);
                        case "missed_messages":
                            return "MISSED_MESSAGES";
                        case "friend_request_reminder":
                            return "FRIEND_REQUEST_REMINDER";
                        case "scheduled_guild_event_started":
                            return "SCHEDULED_GUILD_EVENT";
                        case "top_messages":
                            return "TOP_MESSAGES";
                        default:
                            return "NOTIFICATION_CENTER"
                    }
                },
                M = e => {
                    if ("icHighlight" === e) return "TOP_MESSAGES";
                    return "NOTIFICATION_CENTER"
                },
                O = e => {
                    switch (e) {
                        case o.NotificationCenterItems.GO_LIVE_PUSH:
                            return {
                                icon: A.SHARE_SCREEN, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterItems.FRIEND_REQUEST_ACCEPTED:
                            return {
                                icon: A.CHECKED, color: r.default.colors.STATUS_POSITIVE_BACKGROUND
                            };
                        case o.NotificationCenterItems.FRIEND_REQUEST_PENDING:
                        case o.NotificationCenterItems.FRIEND_SUGGESTION_CREATED:
                            return {
                                icon: A.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterItems.DM_FRIEND_NUDGE:
                            return {
                                icon: A.NEW_MESSAGE, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS:
                        case o.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS_ACCEPTED:
                            return {
                                icon: A.FRIENDS, color: r.default.colors.BACKGROUND_ACCENT
                            };
                        default:
                            return null
                    }
                },
                L = e => {
                    switch (e.item_enum) {
                        case o.ItemEnum.UPDATE_PROFILE:
                            return u.PROFILE_BACKGROUND;
                        case o.ItemEnum.ADD_FRIEND:
                        case o.ItemEnum.FIND_FRIENDS:
                            return u.FRIEND_BACKGROUND;
                        case o.ItemEnum.FIRST_MESSAGE:
                            return u.MESSAGE_BACKGROUND;
                        default:
                            return r.default.unsafe_rawColors.BRAND_500.css
                    }
                }
        },
        899779: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ForYouItemImage: function() {
                    return d
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("766274"),
                i = n("587974"),
                r = n("108367"),
                o = n("457201");
            let u = e => {
                    let {
                        mask: t
                    } = e;
                    return null == t ? null : (0, l.jsx)("div", {
                        className: o.maskBackground,
                        style: {
                            backgroundColor: t.color.css
                        },
                        children: (0, l.jsx)("img", {
                            className: o.maskIcon,
                            alt: "",
                            src: t.icon
                        })
                    })
                },
                d = a.memo(function(e) {
                    let {
                        item: t
                    } = e, n = null, a = !1;
                    if (null != t.icon_name) n = (0, l.jsx)("img", {
                        alt: "",
                        src: r.FOR_YOU_ICONS[(0, r.getIconByName)(t.icon_name)]
                    });
                    else if (null != t.other_user) {
                        let e = t.other_user instanceof s.default ? t.other_user : new s.default(t.other_user);
                        n = (0, l.jsx)("img", {
                            alt: "",
                            className: o.avatar,
                            src: e.getAvatarURL(void 0, 40)
                        }), a = !0
                    } else n = null != t.icon_url ? (0, l.jsx)("img", {
                        alt: "",
                        src: t.icon_url
                    }) : (0, l.jsx)("img", {
                        alt: "",
                        src: r.FOR_YOU_ICONS[(0, r.getIcon)(t)]
                    });
                    let d = (0, r.getMask)(t.type);
                    return (0, l.jsxs)(i.default, {
                        mask: null == d ? i.MaskIDs.AVATAR_DEFAULT : i.MaskIDs.AVATAR_STATUS_ROUND_16,
                        width: 40,
                        height: 40,
                        rightOverhang: 3,
                        bottomOverhang: 3,
                        className: o.mask,
                        children: [(0, l.jsx)("div", {
                            className: o.container,
                            style: a ? void 0 : {
                                backgroundColor: (0, r.getBackground)(t)
                            },
                            children: n
                        }), (0, l.jsx)(u, {
                            mask: d
                        })]
                    })
                })
        },
        322964: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ForYouItems: function() {
                    return P
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("249654"),
                i = n("77078"),
                r = n("308289"),
                o = n("537325"),
                u = n("367376"),
                d = n("401642"),
                c = n("845579"),
                f = n("766274"),
                E = n("697218"),
                _ = n("599110"),
                h = n("253981"),
                S = n("352273"),
                T = n("360191"),
                p = n("342176"),
                N = n("183030"),
                I = n("899779"),
                m = n("778597"),
                A = n("960082"),
                g = n("49111"),
                C = n("782340"),
                R = n("183419"),
                M = n("786948"),
                O = n("780810");

            function L(e) {
                var t, n, a;
                let {
                    item: s
                } = e, o = null === (t = s.message) || void 0 === t ? void 0 : t.content;
                if (null == o) return (0, l.jsx)("div", {
                    children: " "
                });
                let d = null !== (a = E.default.getUser(null === (n = s.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== a ? a : new f.default(s.other_user),
                    c = u.default.parse(o);
                return (0, l.jsxs)("div", {
                    className: R.messagePreviewContainer,
                    children: [(0, l.jsx)(r.default, {
                        user: d,
                        size: i.AvatarSizes.SIZE_24
                    }), (0, l.jsx)(i.Text, {
                        className: R.messagePreviewText,
                        variant: "text-sm/normal",
                        lineClamp: 2,
                        children: c
                    })]
                })
            }

            function v(e) {
                let {
                    item: {
                        callout: t
                    }
                } = e;
                if (null == t) return null;
                let n = u.default.parse(t);
                return (0, l.jsx)("div", {
                    className: R.calloutContainer,
                    children: (0, l.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        lineClamp: 2,
                        children: n
                    })
                })
            }

            function D(e) {
                let {
                    item: t
                } = e, n = O, a = C.default.Messages.NOTIFICATION_CENTER_TODO;
                return t.completed && (n = M, a = C.default.Messages.NOTIFICATION_CENTER_DONE), (0, l.jsxs)("div", {
                    className: R.lifecycleContainer,
                    children: [(0, l.jsx)("img", {
                        className: R.checkbox,
                        alt: "",
                        src: n
                    }), (0, l.jsx)(i.Text, {
                        className: R.lifecycleText,
                        variant: "text-xs/bold",
                        color: "header-secondary",
                        children: a
                    })]
                })
            }
            let y = a.memo(function(e) {
                    var t;
                    let {
                        item: r,
                        ackedBeforeId: c
                    } = e, f = (0, N.useNotificationCenterItemAcked)(r, c), E = a.useCallback(async () => {
                        if (!f && (0, S.markNotificationCenterItemAcked)(r), null != r.item_enum && r.item_enum === T.ItemEnum.FIND_FRIENDS) {
                            (0, i.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("927960").then(n.bind(n, "927960"));
                                return t => (0, l.jsx)(e, {
                                    source: "Notification Center",
                                    ...t
                                })
                            });
                            return
                        }
                        if (null != r.deeplink) {
                            let e = h.default.safeParseWithQuery(r.deeplink);
                            if (null == e) return;
                            let t = e.hostname,
                                n = e.path;
                            if (null == t || null == n) return;
                            if (h.default.isDiscordHostname(t)) {
                                let e = n.match("^/users/(\\d+)");
                                null != e && 2 === e.length ? (0, d.openUserProfileModal)({
                                    userId: e[1],
                                    analyticsLocation: {
                                        section: g.AnalyticsSections.NOTIFICATION_CENTER
                                    }
                                }) : await (0, o.default)(n)
                            }
                            _.default.track(g.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
                                action_type: T.NotificationCenterActionTypes.CLICKED,
                                notification_center_id: r.id,
                                item_type: r.type,
                                acked: f
                            })
                        }
                    }, [r, f]), C = null;
                    r.type === T.NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS && null != r.other_user && (C = (0, l.jsx)(m.default, {
                        userId: r.other_user.id
                    }));
                    let M = null != r.local_id;
                    return (0, l.jsxs)("div", {
                        className: R.row,
                        children: [(0, l.jsxs)(i.ClickableContainer, {
                            className: R.rowContent,
                            focusProps: {
                                offset: 4
                            },
                            "aria-label": r.body,
                            onClick: E,
                            children: [f ? null : (0, l.jsx)("div", {
                                className: R.unread
                            }), (0, l.jsx)(I.ForYouItemImage, {
                                item: r
                            }), (0, l.jsxs)("div", {
                                className: R.body,
                                children: ["lifecycle_item" === r.type && null != r.item_enum && (0, l.jsx)(D, {
                                    item: r
                                }), (0, l.jsx)(i.Text, {
                                    variant: "text-md/normal",
                                    color: f ? "text-muted" : "text-normal",
                                    children: u.default.parse(r.body)
                                }), (null === (t = r.message) || void 0 === t ? void 0 : t.content) != null ? (0, l.jsx)(L, {
                                    item: r
                                }) : null, null != r.callout ? (0, l.jsx)(v, {
                                    item: r
                                }) : null, (0, l.jsx)(i.Text, {
                                    variant: "text-xs/medium",
                                    color: f ? "text-muted" : "header-secondary",
                                    children: (0, p.getRelativeTimestamp)(s.default.extractTimestamp(r.id))
                                }), C]
                            })]
                        }), M ? null : (0, l.jsx)(A.MoreButton, {
                            item: r
                        })]
                    })
                }),
                P = a.memo(function(e) {
                    let {
                        items: t
                    } = e, n = c.NotificationCenterAckedBeforeId.useSetting();
                    return (0, l.jsx)(l.Fragment, {
                        children: t.map(e => (0, l.jsx)(y, {
                            item: e,
                            ackedBeforeId: n
                        }, e.id))
                    })
                })
        },
        778597: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("736964"),
                r = n("782340"),
                o = n("183419");

            function u(e) {
                let {
                    userId: t
                } = e, n = a.useCallback(e => {
                    e.stopPropagation(), i.default.cancelFriendRequest(t)
                }, [t]), u = a.useCallback(e => {
                    e.stopPropagation(), i.default.addRelationship({
                        userId: t
                    })
                }, [t]);
                return (0, l.jsxs)("div", {
                    className: o.friendRequestContainer,
                    children: [(0, l.jsx)(s.Button, {
                        className: o.acceptButton,
                        look: s.Button.Looks.FILLED,
                        color: s.Button.Colors.GREEN,
                        size: s.Button.Sizes.NONE,
                        onClick: u,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: r.default.Messages.FRIEND_REQUEST_ACCEPT
                        })
                    }), (0, l.jsx)(s.Button, {
                        className: o.ignoreButton,
                        look: s.Button.Looks.FILLED,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.NONE,
                        onClick: n,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: r.default.Messages.FRIEND_REQUEST_IGNORE
                        })
                    })]
                })
            }
        },
        960082: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreButton: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("211248"),
                r = n("433487"),
                o = n("228220"),
                u = n("352273"),
                d = n("782340");
            let c = e => {
                    let {
                        item: t,
                        closePopout: n
                    } = e;
                    return (0, l.jsx)(s.Menu, {
                        navId: "notification-actions",
                        onClose: n,
                        onSelect: n,
                        "aria-label": d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                        children: (0, l.jsx)(s.MenuItem, {
                            id: "delete",
                            label: d.default.Messages.DELETE,
                            icon: o.default,
                            action: async () => {
                                await (0, u.deleteNotificationCenterItem)(t)
                            }
                        })
                    })
                },
                f = a.memo(function(e) {
                    let {
                        item: t
                    } = e;
                    return (0, l.jsx)(s.Popout, {
                        renderPopout: e => (0, l.jsx)(c, {
                            ...e,
                            item: t
                        }),
                        position: "bottom",
                        align: "right",
                        animation: s.Popout.Animation.NONE,
                        children: e => {
                            let {
                                onClick: t
                            } = e;
                            return (0, l.jsx)(i.default, {
                                tooltip: d.default.Messages.MORE,
                                color: i.CircleIconButtonColors.TERTIARY,
                                icon: (0, l.jsx)(r.default, {
                                    height: 16,
                                    width: 16
                                }),
                                onClick: e => {
                                    e.stopPropagation(), t(e)
                                },
                                "aria-haspopup": "menu"
                            })
                        }
                    })
                })
        },
        673699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("759843"),
                i = n("974667"),
                r = n("77078"),
                o = n("510889"),
                u = n("428958"),
                d = n("839743"),
                c = n("322964"),
                f = n("954416");

            function E(e) {
                let {
                    initialized: t,
                    items: n,
                    loading: E,
                    loadMore: _
                } = e, h = a.useRef(null), S = (0, o.default)("for-you", h);
                (0, u.default)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.NOTIFICATION_CENTER_LANDING,
                    properties: {
                        empty: 0 === n.length
                    }
                }, {
                    disableTrack: !t
                }, [t]);
                let T = () => {
                    var e;
                    let t = null === (e = h.current) || void 0 === e ? void 0 : e.getScrollerState();
                    if (null == t) return;
                    let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
                    n < 1500 && _()
                };
                return t ? 0 === n.length ? (0, l.jsx)(d.ForYouEmptyState, {}) : (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(i.ListNavigatorProvider, {
                        navigator: S,
                        children: (0, l.jsx)(i.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...a
                                } = e;
                                return (0, l.jsxs)(r.AdvancedScroller, {
                                    className: f.container,
                                    ref: e => {
                                        var n;
                                        h.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    },
                                    ...a,
                                    onScroll: T,
                                    children: [(0, l.jsx)(c.ForYouItems, {
                                        items: n
                                    }), E ? (0, l.jsx)(r.Spinner, {
                                        className: f.spinner
                                    }) : null]
                                })
                            }
                        })
                    })
                }) : (0, l.jsx)(r.Spinner, {
                    className: f.loadingPlaceholder
                })
            }
        },
        167209: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForPomelo: function() {
                    return i
                },
                useIsEligibleForPomelo: function() {
                    return r
                }
            });
            var l = n("65597"),
                a = n("697218"),
                s = n("553257");
            let i = () => o(a.default.getCurrentUser(), (0, s.getPomeloEligibility)()),
                r = () => o((0, l.default)([a.default], () => a.default.getCurrentUser()), (0, s.usePomeloEligibility)());

            function o(e, t) {
                return !(null == e || e.isPomelo()) && !!e.hasVerifiedEmailOrPhone() && !!t && !0
            }
        },
        104032: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("446674"),
                i = n("913144"),
                r = n("388290"),
                o = n("697218"),
                u = n("719923");
            let d = !1;
            class c extends s.default.Store {
                shouldShowReactivateNotice() {
                    let e = o.default.getCurrentUser();
                    return !(0, u.isPremium)(e) && d
                }
            }
            c.displayName = "SubscriptionRemindersStore";
            var f = new c(i.default, {
                BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
                    let {
                        subscription: t
                    } = e;
                    if (null != t) {
                        var n;
                        let e = r.default.createFromServer(t),
                            l = (0, u.getPremiumPlanItem)(e);
                        if (null == l || (null === (n = e.metadata) || void 0 === n ? void 0 : n.ended_at) == null) return;
                        let s = a(e.metadata.ended_at);
                        a().isBetween(s.clone().add(4, "days"), s.clone().add(11, "days")) && (d = !0)
                    }
                }
            })
        },
        897107: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-09_window_32_deprecation_message",
                label: "show deprecation message for 32-bit Windows",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "show message",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var s = a
        },
        840895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-09_proxy_block_notice",
                label: "Proxy Block Experiment",
                defaultConfig: {
                    eligibleForNotice: !1
                },
                treatments: [{
                    id: 1,
                    label: "Show nag bar when proxy blocks an API request",
                    config: {
                        eligibleForNotice: !0
                    }
                }]
            });
            var s = a
        },
        143573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = !1;
            class i extends l.default.Store {
                get blockedByProxy() {
                    return s
                }
            }
            i.displayName = "ProxyBlockStore";
            var r = new i(a.default, {
                PROXY_BLOCKED_REQUEST: function(e) {
                    s = !0
                }
            })
        },
        138217: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            }), n("843762"), n("424973");
            var l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                i = n("95410"),
                r = n("398183"),
                o = n("913144"),
                u = n("692038"),
                d = n("406297"),
                c = n("913491"),
                f = n("915639"),
                E = n("719926"),
                _ = n("271938"),
                h = n("42203"),
                S = n("377253"),
                T = n("660478"),
                p = n("27618"),
                N = n("162771"),
                I = n("282109"),
                m = n("697218"),
                A = n("49111");
            let g = "recentMentionFilterSettings",
                C = [],
                R = {},
                M = !1,
                O = !0,
                L = i.default.get(g, {
                    guildFilter: A.RecentMentionsFilters.ALL_SERVERS,
                    everyoneFilter: !0,
                    roleFilter: !0
                }),
                v = !1,
                D = 0,
                y = !1,
                P = !1;

            function x(e) {
                if (e instanceof E.default) return e;
                let t = S.default.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, u.createMessageRecord)(e)
            }

            function U(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((0, c.default)(e)) return null;
                null == n && (n = e.channel_id);
                let l = h.default.getChannel(n);
                if (null == l || l.type === A.ChannelTypes.DM || L.guildFilter === A.RecentMentionsFilters.THIS_SERVER && l.getGuildId() !== N.default.getGuildId()) return null;
                let a = null === (t = e.author) || void 0 === t ? void 0 : t.id,
                    s = _.default.getId();
                if (null != a && p.default.isBlocked(a) || a === s) return null;
                e = x(e);
                let i = !L.everyoneFilter,
                    r = !L.roleFilter;
                return (0, d.default)({
                    message: e,
                    userId: s,
                    suppressEveryone: i,
                    suppressRoles: r
                }) ? (P && T.default.ackMessageId(l.id) !== e.id && (0, d.default)({
                    message: e,
                    userId: s,
                    suppressEveryone: I.default.isSuppressEveryoneEnabled(l.getGuildId()),
                    suppressRoles: I.default.isSuppressRolesEnabled(l.getGuildId())
                }) && (P = !1), e) : null
            }

            function b(e) {
                if (null == R[e]) return !1;
                delete R[e], C = a.filter(C, t => {
                    let {
                        id: n
                    } = t;
                    return n !== e
                })
            }

            function F(e) {
                let {
                    id: t
                } = e;
                return b(t)
            }

            function j(e) {
                let t = {
                    ...L
                };
                L = a.defaults(a.pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), L), i.default.set(g, L);
                let n = (e, n) => t[e] !== L[e] && L[e] === n,
                    l = n("guildFilter", A.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
                R = {};
                let s = [];
                l && C.forEach(e => {
                    let t = U(e);
                    null != t && (s.push(t), R[t.id] = !0)
                }), 0 === (C = s).length && (v = !1)
            }

            function G() {
                C = [], R = {}, v = !1, P = !1
            }

            function k() {
                a.forEach(C, e => {
                    e.timestamp.locale(f.default.locale)
                })
            }

            function w() {
                C = C.filter(e => !p.default.isBlocked(e.author.id))
            }

            function B(e) {
                let {
                    channel: t
                } = e;
                C = a.filter(C, e => e.channel_id !== t.id || (delete R[e.id], !1))
            }
            class H extends s.default.Store {
                initialize() {
                    this.waitFor(m.default, h.default, S.default, T.default)
                }
                isOpen() {
                    return y
                }
                get hasLoadedEver() {
                    return v
                }
                get lastLoaded() {
                    return D
                }
                getMentions() {
                    return v || C.length > 0 ? C : null
                }
                hasMention(e) {
                    return R[e]
                }
                get loading() {
                    return M
                }
                get hasMore() {
                    return O
                }
                get guildFilter() {
                    return L.guildFilter
                }
                get everyoneFilter() {
                    return L.everyoneFilter
                }
                get roleFilter() {
                    return L.roleFilter
                }
                get mentionsAreStale() {
                    return P
                }
            }
            H.displayName = "RecentMentionsStore";
            var V = new H(o.default, {
                LOAD_RECENT_MENTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    M = !0, null == t && L.guildFilter === A.RecentMentionsFilters.THIS_SERVER && j({
                        guildFilter: A.RecentMentionsFilters.ALL_SERVERS
                    })
                },
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    let {
                        hasMoreAfter: t,
                        messages: n,
                        isAfter: l
                    } = e, s = a.map(n, x);
                    l ? C = C.concat(s) : (C = s, R = {}), a.forEach(s, e => {
                        R[e.id] = !0
                    }), M = !1, O = t, D = (0, r.now)(), v = !0
                },
                LOAD_RECENT_MENTIONS_FAILURE: function() {
                    M = !1
                },
                SET_RECENT_MENTIONS_FILTER: j,
                CLEAR_MENTIONS: function(e) {
                    G()
                },
                TRUNCATE_MENTIONS: function(e) {
                    let {
                        size: t
                    } = e;
                    for (let e = t; e < C.length; ++e) delete R[C[e].id];
                    let n = C.length;
                    n > (C = C.slice(0, t)).length && (O = !0)
                },
                CHANNEL_SELECT: function() {
                    if (L.guildFilter !== A.RecentMentionsFilters.THIS_SERVER) return !1;
                    v = !1
                },
                CONNECTION_OPEN: G,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    C = a.filter(C, e => {
                        let n = h.default.getChannel(e.channel_id);
                        return null != n && n.getGuildId() !== t.id || (delete R[e.id], !1)
                    })
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e, l = m.default.getCurrentUser();
                    if (null == l || !(0, d.isRawMessageMentioned)({
                            rawMessage: n,
                            userId: l.id,
                            suppressRoles: !1,
                            suppressEveryone: !1
                        })) return !1;
                    let a = U(n, t);
                    if (null == a) return !1;
                    (C = C.slice()).unshift(a), R[a.id] = !0
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id;
                    if (null == R[String(t)]) return !1;
                    let n = a.findIndex(C, e => {
                        let {
                            id: n
                        } = e;
                        return n === t
                    });
                    C = C.slice();
                    let l = C[n];
                    null != l && (C[n] = (0, u.updateMessageRecord)(l, e.message))
                },
                MESSAGE_DELETE: F,
                RECENT_MENTION_DELETE: F,
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t
                    } = e;
                    a.forEach(t, b)
                },
                USER_SETTINGS_PROTO_UPDATE: k,
                I18N_LOAD_SUCCESS: k,
                CHANNEL_DELETE: B,
                THREAD_DELETE: B,
                RELATIONSHIP_ADD: w,
                RELATIONSHIP_REMOVE: w,
                MENTION_MODAL_OPEN: function() {
                    y = !0
                },
                MENTION_MODAL_CLOSE: function() {
                    y = !1
                },
                SET_RECENT_MENTIONS_STALE: function(e) {
                    P = !0
                }
            })
        },
        440612: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FloatingActionButton: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("102253");
            let i = e => {
                let {
                    text: t,
                    icon: n,
                    onClick: i
                } = e;
                return (0, l.jsxs)(a.Button, {
                    className: s.button,
                    innerClassName: s.buttonInner,
                    onClick: i,
                    children: [(0, l.jsx)(n, {}), (0, l.jsx)(a.Text, {
                        variant: "text-md/semibold",
                        color: "none",
                        children: t
                    })]
                })
            }
        },
        981024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("249654"),
                i = n("446674"),
                r = n("151426"),
                o = n("136511"),
                u = n("360191"),
                d = n("342176"),
                c = n("396539"),
                f = n("673699"),
                E = n("845579"),
                _ = n("211248"),
                h = n("11539"),
                S = n("599110"),
                T = n("64318"),
                p = n("49111"),
                N = n("782340"),
                I = n("358468");

            function m(e) {
                let {
                    onClick: t
                } = e;
                return (0, l.jsx)(_.default, {
                    tooltip: N.default.Messages.MARK_ALL_AS_READ,
                    color: _.CircleIconButtonColors.SECONDARY,
                    icon: (0, l.jsx)(h.default, {}),
                    onClick: t
                })
            }

            function A(e) {
                let {
                    setTab: t,
                    badgeState: n,
                    closePopout: _
                } = e, {
                    initialized: h,
                    items: N,
                    loading: A,
                    loadMore: g
                } = (0, c.useDesktopNotificationCenterItemsLoader)(), C = (0, i.useStateFromStores)([o.default], () => o.default.localItems), R = a.useMemo(() => [...[...N, ...C].sort((e, t) => -1 * s.default.compare(e.id, t.id))], [N, C]), M = N.length > 0 ? N[0] : null, O = E.NotificationCenterAckedBeforeId.useSetting(), L = a.useMemo(() => {
                    let e = null != M && 0 >= s.default.compare(M.id, O);
                    if (e) return !1;
                    for (let e of R) {
                        if (0 >= s.default.compare(e.id, O)) break;
                        if (!(0, d.isRemoteAcked)(e, O)) return !0
                    }
                    return !1
                }, [M, O, R]);
                return (0, l.jsxs)("div", {
                    className: I.container,
                    children: [(0, l.jsx)(T.default, {
                        tab: r.InboxTab.FOR_YOU,
                        setTab: t,
                        badgeState: n,
                        closePopout: _,
                        children: L ? (0, l.jsx)(m, {
                            onClick: () => {
                                null != M && (E.NotificationCenterAckedBeforeId.updateSetting(M.id), S.default.track(p.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
                                    action_type: u.NotificationCenterActionTypes.MARK_ALL_READ
                                }))
                            }
                        }) : null
                    }), (0, l.jsx)(f.default, {
                        initialized: h,
                        items: R,
                        loading: A,
                        loadMore: g
                    })]
                })
            }
        },
        124031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("630086"),
                r = n("20606"),
                o = n("360191"),
                u = n("393414"),
                d = n("27618"),
                c = n("564875"),
                f = n("956089"),
                E = n("599110"),
                _ = n("49111"),
                h = n("782340"),
                S = n("805122");

            function T(e) {
                let {
                    closePopout: t
                } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getPendingCount());
                return (0, l.jsx)(s.TooltipContainer, {
                    text: h.default.Messages.VIEW_FRIEND_REQUESTS,
                    children: (0, l.jsxs)(s.Clickable, {
                        className: S.friendRequestsButton,
                        onClick: () => {
                            E.default.track(_.AnalyticEvents.NOTIFICATION_CENTER_ACTION, {
                                action_type: o.NotificationCenterActionTypes.FRIEND_REQUESTS_BUTTON_CLICK
                            }), (0, u.transitionTo)(_.Routes.FRIENDS), i.default.setSection(_.FriendsSections.PENDING), t()
                        },
                        children: [(0, l.jsx)(c.default, {}), (0, l.jsx)(f.NumberBadge, {
                            count: n,
                            color: r.default.BACKGROUND_ACCENT
                        })]
                    })
                })
            }
        },
        530686: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("782340"),
                u = n("909550");

            function d(e) {
                let {
                    className: t,
                    onJump: n
                } = e, [s, d] = a.useState(!1);
                return (0, l.jsx)(r.Clickable, {
                    className: i(u.jumpButton, t),
                    onClick: e => {
                        d(!0), n(e)
                    },
                    children: s ? (0, l.jsx)(r.Spinner, {
                        type: r.Spinner.Type.PULSING_ELLIPSIS
                    }) : (0, l.jsx)(r.Text, {
                        variant: "text-xs/normal",
                        className: u.text,
                        children: o.default.Messages.JUMP
                    })
                })
            }
        },
        150938: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("913796"),
                r = n("211248"),
                o = n("11539"),
                u = n("599110"),
                d = n("440612"),
                c = n("49111"),
                f = n("782340");

            function E(e) {
                let {
                    type: t,
                    onClick: n
                } = e, [s, E] = a.useState(!1), h = (0, i.useInDesktopNotificationCenterExperiment)(), S = () => {
                    n(), u.default.track(c.AnalyticEvents.INBOX_CHANNEL_ACKED, {
                        marked_all_channels_as_read: !0,
                        num_unread_channels_remaining: 0
                    })
                }, T = e => {
                    e.shiftKey ? S() : E(!0)
                };
                return (0, l.jsxs)(l.Fragment, {
                    children: [s ? (0, l.jsx)(_, {
                        confirm: S,
                        cancel: () => E(!1)
                    }) : null, "bottom-floating" === t ? (0, l.jsx)(d.FloatingActionButton, {
                        text: f.default.Messages.MARK_ALL_AS_READ,
                        icon: o.default,
                        onClick: T
                    }) : (0, l.jsx)(r.default, {
                        tooltip: h ? f.default.Messages.MARK_ALL_AS_READ : f.default.Messages.UNREADS_MARK_READ,
                        color: r.CircleIconButtonColors.SECONDARY,
                        icon: (0, l.jsx)(o.default, {}),
                        onClick: T
                    })]
                })
            }

            function _(e) {
                let {
                    cancel: t,
                    confirm: n
                } = e;
                return (0, l.jsx)(s.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_HEADER,
                    confirmText: f.default.Messages.MARK_AS_READ,
                    cancelText: f.default.Messages.CANCEL,
                    confirmButtonColor: s.Button.Colors.BRAND,
                    onCancel: t,
                    onConfirm: n,
                    children: (0, l.jsx)(s.Text, {
                        color: "text-normal",
                        variant: "text-sm/normal",
                        children: f.default.Messages.UNREADS_CONFIRM_MARK_ALL_READ_DESCRIPTION
                    })
                })
            }
        },
        519540: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return w
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("866227"),
                d = n.n(u),
                c = n("446674"),
                f = n("151426"),
                E = n("77078"),
                _ = n("272030"),
                h = n("819689"),
                S = n("843962"),
                T = n("679653"),
                p = n("931318"),
                N = n("520899"),
                I = n("988864"),
                m = n("960808"),
                A = n("45835"),
                g = n("699473"),
                C = n("393414"),
                R = n("845579"),
                M = n("42203"),
                O = n("305961"),
                L = n("377253"),
                v = n("476263"),
                D = n("93393"),
                y = n("11539"),
                P = n("672571"),
                x = n("805614"),
                U = n("64318"),
                b = n("49111"),
                F = n("782340"),
                j = n("533370"),
                G = n("228146");
            let k = {
                offset: {
                    left: 4,
                    right: -12
                }
            };

            function w(e) {
                let {
                    setTab: t,
                    closePopout: n
                } = e, s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders());
                a.useEffect(() => () => {
                    (0, p.cleanupMessageReminders)()
                }, []);
                let [i, r] = a.useState(!1), o = a.useMemo(() => s.filter(e => null == e.dueAt || e.dueAt < new Date), [s]), u = i ? s : o, d = u.filter(e => !(0, I.savedMessageHasMetadata)(e));
                return (0, m.useMessageRemindersLoader)(d), (0, l.jsxs)("div", {
                    className: j.container,
                    children: [(0, l.jsx)(U.default, {
                        tab: f.InboxTab.TODOS,
                        setTab: t,
                        closePopout: n
                    }), (0, l.jsxs)("div", {
                        className: j.headerText,
                        children: [(0, l.jsx)(E.Heading, {
                            variant: "heading-lg/bold",
                            children: i ? F.default.Messages.MESSAGE_REMINDERS_HEADER_ALL : F.default.Messages.MESSAGE_REMINDERS_HEADER_OVERDUE
                        }), (0, l.jsx)(E.Anchor, {
                            onClick: () => r(!i),
                            children: (0, l.jsx)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: i ? F.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_OVERDUE.format({
                                    count: o.length
                                }) : F.default.Messages.MESSAGE_REMINDERS_HEADER_SHOW_ALL.format({
                                    count: s.length
                                })
                            })
                        })]
                    }), 0 === u.length ? (0, l.jsx)(H, {}) : null, (0, l.jsx)(E.AdvancedScrollerThin, {
                        children: u.map(e => (function(e) {
                            return [(0, l.jsx)(B, {
                                messageId: e.messageId
                            }, e.messageId)]
                        })(e))
                    })]
                })
            }

            function B(e) {
                let t, {
                        messageId: a
                    } = e,
                    s = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().find(e => e.messageId === a));
                o(null != s, "should not be rendering a to-do message without a to-do message");
                let r = s.complete,
                    u = (0, c.useStateFromStores)([L.default], () => L.default.getMessage(s.channelId, s.messageId)),
                    {
                        message: f,
                        channel: I
                    } = (0, A.getSavedMessageAndChannel)(s),
                    m = M.default.getChannel(I.id),
                    y = (0, T.default)(m, !0),
                    x = null != y ? y : I.name,
                    U = (0, c.useStateFromStores)([O.default], () => O.default.getGuild(null == I ? void 0 : I.guild_id)),
                    w = null != I ? (0, S.getChannelIconURL)(I) : null,
                    B = null;
                return null != s.dueAt && (s.dueAt > new Date ? (t = "text-muted", B = F.default.Messages.MESSAGE_REMINDERS_DUE_IN.format({
                    duration: d.duration(s.dueAt.getTime() - Date.now(), "millisecond").humanize()
                })) : (t = "text-danger", B = F.default.Messages.MESSAGE_REMINDERS_OVERDUE.format({
                    duration: d.duration(Date.now() - s.dueAt.getTime(), "millisecond").humanize()
                }))), (0, l.jsxs)("div", {
                    className: G.container,
                    children: [(0, l.jsxs)("div", {
                        className: j.messageHeader,
                        children: [(0, l.jsxs)("div", {
                            children: [(0, l.jsxs)("div", {
                                className: j.messageInfo,
                                children: [null != U ? (0, l.jsx)(v.default, {
                                    className: j.guildIcon,
                                    guild: U,
                                    size: v.default.Sizes.SMALL,
                                    active: !0
                                }) : (0, l.jsx)(E.Avatar, {
                                    "aria-hidden": !0,
                                    src: null != w ? w : n("518533"),
                                    size: E.AvatarSizes.SIZE_32
                                }), (0, l.jsx)(E.Text, {
                                    variant: "text-md/medium",
                                    color: "header-primary",
                                    selectable: !0,
                                    children: x
                                })]
                            }), null != s.notes && s.notes.length > 0 ? (0, l.jsxs)(E.Text, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                className: j.notes,
                                selectable: !0,
                                children: [(0, l.jsx)(P.default, {
                                    width: 12,
                                    height: 12
                                }), s.notes]
                            }) : null, null != B ? (0, l.jsx)(E.Text, {
                                variant: "text-sm/medium",
                                color: t,
                                style: {
                                    marginTop: 4
                                },
                                children: B
                            }) : null]
                        }), (0, l.jsxs)("div", {
                            className: j.reminderActions,
                            children: [(0, l.jsx)(E.TooltipContainer, {
                                text: F.default.Messages.MESSAGE_REMINDERS_SNOOZE,
                                children: (0, l.jsx)(E.Clickable, {
                                    onClick: e => (0, _.openContextMenuLazy)(e, async () => {
                                        let {
                                            default: e
                                        } = await n.el("763582").then(n.bind(n, "763582"));
                                        return t => (0, l.jsx)(e, {
                                            ...t,
                                            message: f
                                        })
                                    }),
                                    className: j.clock,
                                    children: (0, l.jsx)(D.default, {})
                                })
                            }), (0, l.jsx)(E.Checkbox, {
                                type: E.Checkbox.Types.INVERTED,
                                value: r,
                                onChange: (e, t) => {
                                    (0, p.toggleMessageReminders)(s.messageId, t)
                                }
                            })]
                        })]
                    }), (0, l.jsxs)("div", {
                        className: i(G.messageContainer, j.unloadedMessage, {
                            [j.disabledMessage]: r
                        }),
                        children: [(0, l.jsx)(g.default, {
                            message: f,
                            channel: I,
                            className: G.message,
                            compact: R.MessageDisplayCompact.getSetting(),
                            animateAvatar: !1,
                            focusProps: k,
                            trackAnnouncementViews: !0
                        }, f.id), (0, l.jsxs)("div", {
                            className: j.actions,
                            children: [null == u ? (0, l.jsx)(E.Button, {
                                onClick: () => {
                                    h.default.fetchMessages({
                                        channelId: s.channelId,
                                        limit: 1,
                                        jump: {
                                            messageId: s.messageId,
                                            flash: !1,
                                            offset: 1
                                        }
                                    })
                                },
                                size: E.Button.Sizes.MIN,
                                color: E.Button.Colors.TRANSPARENT,
                                className: j.loadButton,
                                children: (0, l.jsx)(E.Text, {
                                    variant: "text-xs/normal",
                                    children: "Load"
                                })
                            }) : null, (0, l.jsx)(E.Button, {
                                onClick: () => {
                                    (0, C.transitionTo)(b.Routes.CHANNEL(null == I ? void 0 : I.getGuildId(), s.channelId, s.messageId))
                                },
                                size: E.Button.Sizes.MIN,
                                color: E.Button.Colors.TRANSPARENT,
                                className: j.loadButton,
                                children: (0, l.jsx)(E.Text, {
                                    variant: "text-xs/normal",
                                    children: F.default.Messages.JUMP
                                })
                            })]
                        })]
                    })]
                })
            }

            function H() {
                let e = (0, c.useStateFromStores)([N.default], () => N.default.getMessageReminders().length > 0);
                return e ? null : (0, l.jsx)(x.default, {
                    Icon: y.default,
                    header: F.default.Messages.MESSAGE_REMINDERS_EMPTY,
                    tip: F.default.Messages.MESSAGE_REMINDERS_EMPTY_TIP
                })
            }
        },
        333491: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("458960"),
                o = n("65597"),
                u = n("206230"),
                d = n("979268"),
                c = n("520899"),
                f = n("954038");
            class E extends a.PureComponent {
                componentDidUpdate(e) {
                    e.count < this.props.count && !this.props.reducedMotion && r.default.sequence([r.default.timing(this.animationScale, {
                        toValue: 1.8,
                        duration: 300
                    }), r.default.timing(this.animationScale, {
                        toValue: 1,
                        duration: 200
                    })]).start()
                }
                render() {
                    let {
                        count: e,
                        className: t
                    } = this.props;
                    return 0 === e ? null : (0, l.jsx)(r.default.div, {
                        className: i(f.badge, t),
                        style: {
                            transform: [{
                                scale: this.animationScale
                            }]
                        },
                        children: e
                    })
                }
                constructor(...e) {
                    super(...e), this.animationScale = new r.default.Value(1)
                }
            }

            function _(e) {
                let {
                    className: t
                } = e, {
                    showReminders: n
                } = d.default.useExperiment({
                    location: "f79435_1"
                }, {
                    autoTrackExposure: !1
                }), a = (0, o.default)([c.default], () => n ? c.default.getOverdueMessageReminderCount() : 0, [n]), s = (0, o.default)([u.default], () => u.default.useReducedMotion);
                return n ? (0, l.jsx)(E, {
                    count: a,
                    className: t,
                    reducedMotion: s
                }) : null
            }
        },
        815978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("957825"),
                i = n("547772"),
                r = n("211248"),
                o = n("660279"),
                u = n("49111"),
                d = n("782340");

            function c(e) {
                let {
                    channel: t
                } = e;
                return (0, l.jsx)(a.Popout, {
                    align: "right",
                    animation: a.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: e => t.isThread() ? (0, l.jsx)(i.default, {
                        ...e,
                        channel: t,
                        navId: "recents-thread-notifications",
                        label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL
                    }) : (0, l.jsx)(s.default, {
                        ...e,
                        channel: t,
                        navId: "recents-notifications",
                        label: d.default.Messages.RECENTS_NOTIFICATIONS_MENU_LABEL,
                        location: {
                            section: u.AnalyticsSections.INBOX
                        },
                        includeGuildMute: !0
                    }),
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, l.jsx)(r.default, {
                            tooltip: d.default.Messages.NOTIFICATION_SETTINGS,
                            color: r.CircleIconButtonColors.TERTIARY,
                            icon: (0, l.jsx)(o.default, {
                                width: 16,
                                height: 16
                            }),
                            onClick: t
                        })
                    }
                })
            }
        },
        80649: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("151426"),
                r = n("789207"),
                o = n("590514"),
                u = n("84339"),
                d = n("519841"),
                c = n("787336"),
                f = n("699473"),
                E = n("845579"),
                _ = n("42203"),
                h = n("247013"),
                S = n("18494"),
                T = n("211248"),
                p = n("116320"),
                N = n("945330"),
                I = n("138217"),
                m = n("530686"),
                A = n("998530"),
                g = n("814744"),
                C = n("805614"),
                R = n("64318"),
                M = n("49111"),
                O = n("782340"),
                L = n("228146");
            let v = {
                offset: {
                    left: 4,
                    right: -12
                }
            };

            function D(e, t, n) {
                let l = t ? I.default.guildFilter : null,
                    a = t ? I.default.roleFilter : null,
                    s = t ? I.default.everyoneFilter : null,
                    i = null;
                null != e && null != l && (i = l === M.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), r.default.fetchRecentMentions(n, M.MAX_MENTIONS_PER_FETCH, i, a, s)
            }

            function y(e) {
                let {
                    setTab: t,
                    onJump: n,
                    badgeState: f,
                    closePopout: E
                } = e, h = (0, s.useStateFromStores)([_.default, S.default], () => _.default.getChannel(S.default.getChannelId())), {
                    messages: T,
                    hasMore: p,
                    loading: N,
                    guildFilter: m,
                    roleFilter: g,
                    everyoneFilter: C
                } = (0, s.useStateFromStoresObject)([I.default], () => ({
                    messages: I.default.getMentions(),
                    hasMore: I.default.hasMore,
                    loading: I.default.loading,
                    guildFilter: I.default.guildFilter,
                    roleFilter: I.default.roleFilter,
                    everyoneFilter: I.default.everyoneFilter
                })), v = (0, u.default)(m), y = (0, u.default)(g), P = (0, u.default)(C);
                a.useEffect(() => {
                    if (!I.default.hasLoadedEver) {
                        D(h, !0);
                        return
                    }(null != v && m !== v || null != y && g !== y || null != P && C !== P) && D(h, !0)
                }, [v, m, y, g, P, C, h, !0]);
                a.useEffect(() => {
                    d.AttachmentLinkRefreshExperiment.getCurrentConfig({
                        location: "mentions"
                    }).enabled && (null == T ? void 0 : T.some(c.messageHasExpiredAttachmentUrl)) && (r.default.clearMentions(), D(h, !0))
                }, []), a.useEffect(() => () => {
                    r.default.truncateMentions(M.MAX_MENTIONS_PER_FETCH)
                }, []);
                let U = a.useCallback(() => (0, l.jsx)(R.default, {
                    tab: i.InboxTab.MENTIONS,
                    setTab: t,
                    badgeState: f,
                    closePopout: E,
                    children: (0, l.jsx)(A.default, {})
                }), [!0, t, f, E]);
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(o.default, {
                        className: L.recentMentionsPopout,
                        scrollerClassName: L.scroller,
                        onFetch: () => null,
                        onJump: n,
                        onCloseMessage: function(e) {
                            r.default.deleteRecentMention(e.id)
                        },
                        channel: h,
                        messages: T,
                        loading: N,
                        hasMore: p,
                        analyticsName: "Recent Mentions",
                        loadMore: function() {
                            let e = null != T && T.length > 0 ? T[T.length - 1].id : null;
                            D(h, !0, e)
                        },
                        canCloseAllMessages: !0,
                        renderHeader: U,
                        renderEmptyState: b,
                        renderMessage: x,
                        "aria-label": O.default.Messages.RECENT_MENTIONS,
                        listName: "recents"
                    })
                })
            }

            function P(e, t) {
                return [(0, l.jsx)(U, {
                    message: e,
                    gotoMessage: t
                }, e.id)]
            }

            function x(e, t) {
                return [(0, l.jsx)(U, {
                    message: e,
                    gotoMessage: t,
                    dismissible: !0
                }, e.id)]
            }

            function U(e) {
                let {
                    message: t,
                    gotoMessage: n,
                    dismissible: a
                } = e;
                if (null == t) return null;
                let s = _.default.getChannel(t.channel_id);
                if (null == s) return null;
                let i = h.default.didAgree(s.getGuildId()),
                    o = !!s.isNSFW() && !i;
                return (0, l.jsxs)("div", {
                    className: L.container,
                    children: [(0, l.jsx)(g.default, {
                        channel: s,
                        gotoChannel: n,
                        children: null != a ? (0, l.jsx)(T.default, {
                            className: L.closeButton,
                            tooltip: O.default.Messages.CLOSE,
                            color: T.CircleIconButtonColors.TERTIARY,
                            icon: (0, l.jsx)(N.default, {
                                width: 16,
                                height: 16
                            }),
                            onClick: () => r.default.deleteRecentMention(t.id)
                        }) : null
                    }), (0, l.jsxs)("div", {
                        className: L.messageContainer,
                        children: [(0, l.jsx)(m.default, {
                            className: L.jumpButton,
                            onJump: n
                        }), (0, l.jsx)(f.default, {
                            message: t,
                            channel: s,
                            className: L.message,
                            hideAccessories: o,
                            compact: E.MessageDisplayCompact.getSetting(),
                            animateAvatar: !1,
                            focusProps: v,
                            trackAnnouncementViews: !0
                        }, t.id)]
                    })]
                })
            }

            function b(e) {
                return (0, l.jsx)(C.default, {
                    Icon: p.default,
                    header: O.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
                    tip: O.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
                })
            }
        },
        998530: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                s = n("77078"),
                i = n("789207"),
                r = n("42203"),
                o = n("18494"),
                u = n("211248"),
                d = n("118530"),
                c = n("138217");
            n("440612");
            var f = n("49111"),
                E = n("782340");

            function _(e) {
                let {
                    closePopout: t,
                    onSelect: n
                } = e, u = (0, a.useStateFromStores)([r.default, o.default], () => r.default.getChannel(o.default.getChannelId())), {
                    everyoneFilter: d,
                    roleFilter: _,
                    guildFilter: h
                } = (0, a.useStateFromStoresObject)([c.default], () => {
                    let {
                        everyoneFilter: e,
                        roleFilter: t,
                        guildFilter: n
                    } = c.default;
                    return {
                        everyoneFilter: e,
                        roleFilter: t,
                        guildFilter: n
                    }
                });
                return (0, l.jsxs)(s.Menu, {
                    navId: "mentions-filter",
                    "aria-label": E.default.Messages.FILTER,
                    onClose: t,
                    onSelect: n,
                    children: [(0, l.jsx)(s.MenuCheckboxItem, {
                        id: "Everyone",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_EVERYONE,
                        action: function() {
                            i.default.setGuildFilter({
                                everyoneFilter: !d
                            })
                        },
                        checked: d
                    }), (0, l.jsx)(s.MenuCheckboxItem, {
                        id: "Roles",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_ROLES,
                        action: function() {
                            i.default.setGuildFilter({
                                roleFilter: !_
                            })
                        },
                        checked: _
                    }), null == u || u.isPrivate() ? null : (0, l.jsx)(s.MenuCheckboxItem, {
                        id: "All Servers",
                        label: E.default.Messages.RECENT_MENTIONS_FILTER_ALL_SERVERS,
                        action: function() {
                            i.default.setGuildFilter({
                                guildFilter: h === f.RecentMentionsFilters.THIS_SERVER ? f.RecentMentionsFilters.ALL_SERVERS : f.RecentMentionsFilters.THIS_SERVER
                            })
                        },
                        checked: h === f.RecentMentionsFilters.ALL_SERVERS
                    })]
                })
            }

            function h() {
                return (0, l.jsx)(s.Popout, {
                    align: "right",
                    animation: s.Popout.Animation.NONE,
                    position: "bottom",
                    renderPopout: e => {
                        let {
                            closePopout: t
                        } = e;
                        return (0, l.jsx)(_, {
                            closePopout: t
                        })
                    },
                    children: e => {
                        let {
                            onClick: t
                        } = e;
                        return (0, l.jsx)(u.default, {
                            tooltip: E.default.Messages.FILTER,
                            color: u.CircleIconButtonColors.SECONDARY,
                            icon: (0, l.jsx)(d.default, {}),
                            onClick: t
                        })
                    }
                })
            }
        },
        311197: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("954732"),
                r = n("22082"),
                o = n("913796"),
                u = n("660478"),
                d = n("697218"),
                c = n("826267"),
                f = n("664336"),
                E = n("333491"),
                _ = n("263362"),
                h = n("470965"),
                S = n("133335"),
                T = n("782340"),
                p = n("759956");

            function N(e) {
                let {
                    onOpen: t,
                    onClose: n,
                    className: N
                } = e, I = (0, o.useInDesktopNotificationCenterExperiment)(), m = (0, s.useStateFromStores)([d.default], () => d.default.getCurrentUser()), A = a.useRef(null), g = (0, s.useStateFromStores)([u.default], () => !!I && (null == m ? void 0 : m.id) != null && u.default.getMentionCount(m.id, S.ReadStateTypes.NOTIFICATION_CENTER) > 0), {
                    enabled: C
                } = r.default.useExperiment({
                    location: "RecentsButton"
                }, {
                    autoTrackExposure: !1
                }), R = (0, s.useStateFromStores)([i.default], () => C && i.default.getUnseenInviteCount() > 0);
                return (0, l.jsx)(_.RecentsPopout, {
                    onOpen: t,
                    onClose: n,
                    badgeState: {
                        badgeForYou: g
                    },
                    popoutPosition: "bottom",
                    popoutAlign: "right",
                    children: (e, t, n) => (0, l.jsxs)("div", {
                        ref: A,
                        className: p.recentsIcon,
                        children: [C && (0, l.jsx)(h.default, {
                            inboxIconRef: A,
                            recentsPopoutShown: t
                        }), (0, l.jsx)(f.Icon, {
                            ...n,
                            className: N,
                            onClick: e,
                            icon: c.default,
                            "aria-label": T.default.Messages.INBOX,
                            tooltip: t ? null : T.default.Messages.INBOX,
                            selected: t,
                            showBadge: g || R,
                            children: (0, l.jsx)(E.default, {
                                className: p.todoBadge
                            })
                        })]
                    })
                })
            }
        },
        814744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("974667"),
                r = n("446674"),
                o = n("77078"),
                u = n("943722"),
                d = n("843962"),
                c = n("679653"),
                f = n("419830"),
                E = n("373469"),
                _ = n("42203"),
                h = n("305961"),
                S = n("824563"),
                T = n("697218"),
                p = n("220677"),
                N = n("476263"),
                I = n("476765"),
                m = n("782340"),
                A = n("636431");
            let g = {
                top: 8,
                bottom: 8,
                left: -4,
                right: -4
            };

            function C(e) {
                let {
                    channel: t,
                    children: n,
                    gotoChannel: a,
                    mentionCount: s,
                    channelState: r,
                    toggleCollapsed: u
                } = e, d = (0, i.useListItem)("recents-header-".concat(t.id, "-").concat((0, I.useUID)()));
                return (0, l.jsx)(o.FocusRing, {
                    offset: g,
                    children: (0, l.jsxs)("div", {
                        className: A.channelHeader,
                        ...d,
                        tabIndex: 0,
                        "data-recents-channel": t.id,
                        onKeyDown: function(e) {
                            null != u && null != r && ("ArrowRight" === e.key && r.collapsed || "ArrowLeft" === e.key && !r.collapsed) && (null == u || u(r))
                        },
                        children: [(0, l.jsx)(R, {
                            channel: t,
                            gotoChannel: a
                        }), (0, l.jsx)(L, {
                            channel: t,
                            gotoChannel: a,
                            mentionCount: s
                        }), n]
                    })
                })
            }

            function R(e) {
                let {
                    channel: t,
                    gotoChannel: n
                } = e;
                return t.isPrivate() ? (0, l.jsx)(M, {
                    channel: t,
                    gotoChannel: n
                }) : (0, l.jsx)(O, {
                    channel: t,
                    gotoChannel: n
                })
            }

            function M(e) {
                let {
                    channel: t,
                    gotoChannel: n
                } = e, a = (0, r.useStateFromStores)([T.default], () => t.isDM() ? T.default.getUser(t.getRecipientId()) : null), s = null == a ? (0, d.getChannelIconURL)(t) : a.getAvatarURL(void 0, 40);
                return (0, l.jsx)(o.Clickable, {
                    onClick: n,
                    tabIndex: -1,
                    children: (0, l.jsx)("img", {
                        className: A.dmIcon,
                        src: s,
                        alt: "",
                        "aria-hidden": !0
                    })
                })
            }

            function O(e) {
                let {
                    channel: t,
                    gotoChannel: n
                } = e, a = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(t.guild_id));
                return null == a ? null : (0, l.jsx)(N.default, {
                    "aria-hidden": !0,
                    className: A.guildIcon,
                    guild: a,
                    size: N.default.Sizes.MEDIUM,
                    active: !0,
                    onClick: n,
                    tabIndex: -1
                })
            }

            function L(e) {
                let {
                    channel: t,
                    gotoChannel: n,
                    mentionCount: a
                } = e, i = (0, r.useStateFromStores)([h.default], () => h.default.getGuild(t.guild_id)), u = (0, r.useStateFromStores)([_.default], () => _.default.getChannel(t.parent_id)), d = (0, f.getChannelIconComponent)(t, i), E = (0, c.default)(t, !1), S = null == u ? null == i ? void 0 : i.name : "".concat(null == i ? void 0 : i.name, " › ").concat(u.name), T = t.isMultiUserDM() ? m.default.Messages.MEMBERS_HEADER.format({
                    members: t.recipients.length + 1
                }) : t.isPrivate() ? (0, l.jsx)(v, {
                    channel: t
                }) : (0, l.jsx)(o.Clickable, {
                    className: s(A.subtext, A.guildName),
                    onClick: n,
                    children: S
                });
                return (0, l.jsxs)("div", {
                    className: A.channelNameSection,
                    children: [(0, l.jsx)(o.Heading, {
                        variant: "heading-md/semibold",
                        className: A.channelNameHeader,
                        children: (0, l.jsxs)(o.Clickable, {
                            className: A.channelName,
                            onClick: n,
                            children: [t.isThread() || t.isGroupDM() || null == d ? null : (0, l.jsx)(d, {
                                className: t.isForumLikeChannel() ? A.forumIcon : void 0,
                                width: 18,
                                height: 18
                            }), (0, l.jsx)("span", {
                                className: A.channelNameSpan,
                                children: E
                            }), null != a && a > 0 ? (0, l.jsx)(p.default, {
                                value: a,
                                className: A.badge
                            }) : null]
                        })
                    }), (0, l.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        className: A.subtextContainer,
                        children: T
                    })]
                })
            }

            function v(e) {
                let {
                    channel: t
                } = e, {
                    user: n,
                    activities: a,
                    applicationStream: s
                } = (0, r.useStateFromStoresObject)([T.default, S.default, E.default], () => {
                    let e = T.default.getUser(t.getRecipientId());
                    return {
                        user: e,
                        activities: null != e ? S.default.getActivities(e.id) : null,
                        applicationStream: null != e ? E.default.getAnyStreamForUser(e.id) : null
                    }
                });
                return null == a ? null : (0, l.jsx)(u.default, {
                    className: A.activityStatus,
                    emojiClassName: A.activityEmoji,
                    activities: a,
                    applicationStream: s,
                    hideTooltip: !0,
                    user: n
                })
            }
        },
        805614: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("543289"),
                i = n("782340"),
                r = n("651245");

            function o(e) {
                let {
                    Icon: t,
                    header: n,
                    tip: o,
                    disableStars: u
                } = e;
                return (0, l.jsxs)("div", {
                    className: r.container,
                    children: [(0, l.jsxs)("div", {
                        className: r.iconContainer,
                        children: [(0, l.jsx)(t, {
                            className: r.icon,
                            width: 36,
                            height: 36
                        }), u ? null : (0, l.jsx)(s.default, {
                            className: r.stars
                        })]
                    }), (0, l.jsx)(a.Heading, {
                        className: r.header,
                        variant: "heading-xl/semibold",
                        children: n
                    }), (0, l.jsxs)(a.Text, {
                        color: "header-secondary",
                        variant: "text-xs/normal",
                        children: [u ? null : (0, l.jsxs)(a.Text, {
                            tag: "span",
                            className: r.protip,
                            variant: "text-xs/bold",
                            color: "text-positive",
                            children: [i.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":", " "]
                        }), o]
                    })]
                })
            }
        },
        64318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("65597"),
                r = n("151426"),
                o = n("77078"),
                u = n("590514"),
                d = n("20606"),
                c = n("954732"),
                f = n("22082"),
                E = n("979268"),
                _ = n("520899"),
                h = n("913796"),
                S = n("826267"),
                T = n("956089"),
                p = n("124031"),
                N = n("782340"),
                I = n("804220");

            function m(e) {
                let t = (0, h.useInDesktopNotificationCenterExperiment)();
                return t ? (0, l.jsx)(A, {
                    ...e
                }) : (0, l.jsx)(g, {
                    ...e
                })
            }

            function A(e) {
                let {
                    tab: t,
                    setTab: n,
                    children: a,
                    badgeState: h,
                    closePopout: m
                } = e, {
                    showReminders: A
                } = E.default.useExperiment({
                    location: "RecentsHeader"
                }, {
                    autoTrackExposure: !1
                }), {
                    enabled: g
                } = f.default.useExperiment({
                    location: "RecentsHeader"
                }), C = (0, i.default)([c.default], () => c.default.getUnseenInviteCount()), R = (0, i.default)([_.default], () => _.default.getMessageReminders()), M = R.length;
                return (0, l.jsxs)(u.Header, {
                    className: s(I.header, I.expanded),
                    children: [(0, l.jsxs)("div", {
                        className: s(I.expandedInboxHeader),
                        children: [(0, l.jsx)(S.default, {
                            className: I.inboxIcon
                        }), (0, l.jsx)(o.Text, {
                            className: I.inboxTitle,
                            variant: "text-lg/semibold",
                            children: N.default.Messages.INBOX
                        }), (0, l.jsx)(p.default, {
                            closePopout: m
                        })]
                    }), (0, l.jsxs)("div", {
                        className: s(I.expandedTabSection),
                        children: [(0, l.jsxs)(o.TabBar, {
                            selectedItem: t,
                            type: "top-pill",
                            onItemSelect: n,
                            children: [(0, l.jsxs)(o.TabBar.Item, {
                                id: r.InboxTab.FOR_YOU,
                                "aria-label": N.default.Messages.FOR_YOU,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.FOR_YOU
                                }),
                                children: [N.default.Messages.FOR_YOU, (null == h ? void 0 : h.badgeForYou) ? (0, l.jsx)(T.CircleBadge, {
                                    color: d.default.STATUS_DANGER,
                                    className: s(I.iconBadge)
                                }) : null]
                            }), (0, l.jsx)(o.TabBar.Item, {
                                id: r.InboxTab.UNREADS,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.UNREADS
                                }),
                                children: N.default.Messages.UNREADS_TAB_LABEL
                            }), (0, l.jsx)(o.TabBar.Item, {
                                "aria-label": N.default.Messages.MENTIONS,
                                id: r.InboxTab.MENTIONS,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.MENTIONS
                                }),
                                children: N.default.Messages.MENTIONS
                            }), g ? (0, l.jsxs)(o.TabBar.Item, {
                                "aria-label": "game_invites",
                                id: r.InboxTab.GAME_INVITES,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.GAME_INVITES
                                }),
                                children: [N.default.Messages.GAME_INVITES, C > 0 ? (0, l.jsx)(T.CircleBadge, {
                                    color: d.default.STATUS_DANGER,
                                    className: s(I.iconBadge)
                                }) : null]
                            }) : null, A ? (0, l.jsxs)(o.TabBar.Item, {
                                "aria-label": "todos",
                                id: r.InboxTab.TODOS,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.TODOS
                                }),
                                children: [N.default.Messages.MESSAGE_REMINDERS_HEADER, M > 0 ? (0, l.jsx)(T.CircleBadge, {
                                    color: d.default.STATUS_DANGER,
                                    className: s(I.iconBadge)
                                }) : null]
                            }) : null]
                        }), (0, l.jsx)("div", {
                            className: I.controls,
                            children: a
                        })]
                    })]
                })
            }

            function g(e) {
                let {
                    tab: t,
                    setTab: n,
                    children: a
                } = e, {
                    showReminders: i
                } = E.default.useExperiment({
                    location: "489e3f_2"
                }, {
                    autoTrackExposure: !1
                }), d = (0, h.useInDesktopNotificationCenterExperiment)(), {
                    enabled: c
                } = f.default.useExperiment({
                    location: "RecentsHeader"
                });
                return (0, l.jsxs)(u.Header, {
                    className: I.header,
                    children: [(0, l.jsxs)(o.TabBar, {
                        selectedItem: t,
                        type: "top-pill",
                        onItemSelect: n,
                        className: I.tabBar,
                        children: [d ? (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.FOR_YOU,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.FOR_YOU
                            }),
                            children: N.default.Messages.FOR_YOU
                        }) : null, (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.MENTIONS,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.MENTIONS
                            }),
                            children: N.default.Messages.MENTIONS
                        }), (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.UNREADS,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.UNREADS
                            }),
                            children: N.default.Messages.UNREADS_TAB_LABEL
                        }), c ? (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.GAME_INVITES,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.GAME_INVITES
                            }),
                            children: N.default.Messages.GAME_INVITES
                        }) : null, i ? (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.TODOS,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.TODOS
                            }),
                            children: N.default.Messages.MESSAGE_REMINDERS_HEADER
                        }) : null]
                    }), (0, l.jsx)("div", {
                        className: I.controls,
                        children: a
                    })]
                })
            }
        },
        263362: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RecentsPopout: function() {
                    return A
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("397613"),
                i = n("446674"),
                r = n("151426"),
                o = n("77078"),
                u = n("22082"),
                d = n("979268"),
                c = n("913796"),
                f = n("872173"),
                E = n("374363"),
                _ = n("659500"),
                h = n("981024"),
                S = n("519540"),
                T = n("80649"),
                p = n("385730"),
                N = n("788072"),
                I = n("49111"),
                m = n("782340");

            function A(e) {
                let {
                    onOpen: t,
                    onClose: n,
                    children: A,
                    badgeState: g,
                    popoutPosition: C,
                    popoutAlign: R
                } = e, [M, O] = a.useState(!1), [L, v] = function() {
                    let e = (0, i.useStateFromStores)([E.default], () => {
                            var e, t;
                            return null !== (t = null === (e = E.default.settings.inbox) || void 0 === e ? void 0 : e.currentTab) && void 0 !== t ? t : r.InboxTab.UNREADS
                        }),
                        t = a.useCallback(e => {
                            f.PreloadedUserSettingsActionCreators.updateAsync("inbox", t => {
                                if (t.currentTab === e) return !1;
                                t.currentTab = e
                            }, f.UserSettingsDelay.FREQUENT_USER_ACTION)
                        }, []);
                    return [e, t]
                }(), {
                    showTutorial: D,
                    setSeenTutorial: y
                } = function(e) {
                    let t = (0, i.useStateFromStores)([E.default], () => {
                            var e, t;
                            return null !== (t = null === (e = E.default.settings.inbox) || void 0 === e ? void 0 : e.viewedTutorial) && void 0 !== t && t
                        }),
                        n = a.useCallback(() => {
                            f.PreloadedUserSettingsActionCreators.updateAsync("inbox", e => {
                                e.viewedTutorial = !0
                            }, f.UserSettingsDelay.INFREQUENT_USER_ACTION)
                        }, []),
                        l = !t && e === r.InboxTab.UNREADS;
                    return {
                        showTutorial: l,
                        setSeenTutorial: n
                    }
                }(L), P = a.useCallback(() => {
                    O(!1), M && (null == n || n())
                }, [n, M]), x = a.useCallback(() => {
                    O(!M), M ? null == n || n() : null == t || t()
                }, [n, t, M]), U = a.useCallback(() => {
                    x(), v(r.InboxTab.UNREADS)
                }, [v, x]);
                a.useEffect(() => (_.ComponentDispatch.subscribe(I.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, U), () => void _.ComponentDispatch.unsubscribe(I.ComponentActions.TOGGLE_INBOX_UNREADS_TAB, U)), [U]);
                let {
                    showReminders: b
                } = d.default.useExperiment({
                    location: "RecentsPopout"
                }, {
                    autoTrackExposure: !1
                }), F = (0, c.useInDesktopNotificationCenterExperiment)(), {
                    enabled: j
                } = u.default.useExperiment({
                    location: "RecentsPopout"
                });
                a.useEffect(() => {
                    !b && L === r.InboxTab.TODOS && v(r.InboxTab.MENTIONS)
                });
                let G = a.useCallback(e => {
                    !e.shiftKey && P()
                }, [P]);
                return (0, l.jsx)(o.Popout, {
                    animation: o.Popout.Animation.NONE,
                    position: C,
                    align: R,
                    autoInvert: !1,
                    shouldShow: M,
                    onRequestClose: P,
                    renderPopout: function() {
                        return (0, l.jsx)(o.Dialog, {
                            "aria-label": m.default.Messages.INBOX,
                            children: L === r.InboxTab.FOR_YOU && F ? (0, l.jsx)(h.default, {
                                setTab: v,
                                badgeState: g,
                                closePopout: P
                            }) : L === r.InboxTab.MENTIONS ? (0, l.jsx)(T.default, {
                                setTab: v,
                                onJump: G,
                                badgeState: g,
                                closePopout: P
                            }) : j && L === r.InboxTab.GAME_INVITES ? (0, l.jsx)(N.default, {
                                setTab: v,
                                badgeState: g,
                                closePopout: P
                            }) : b && L === r.InboxTab.TODOS ? (0, l.jsx)(S.default, {
                                setTab: v,
                                onJump: G,
                                closePopout: P
                            }) : (0, l.jsx)(s.ErrorBoundary, {
                                fallback: (0, l.jsx)(p.UnreadsCrashed, {
                                    setTab: v,
                                    closePopout: P,
                                    badgeState: g
                                }),
                                children: (0, l.jsx)(p.default, {
                                    setTab: v,
                                    onJump: G,
                                    showTutorial: D,
                                    setSeenTutorial: y,
                                    closePopout: P,
                                    badgeState: g
                                })
                            })
                        })
                    },
                    ignoreModalClicks: !0,
                    children: (e, t) => {
                        let {
                            isShown: n
                        } = t;
                        return A(x, n, e)
                    }
                })
            }
        },
        660407: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("907002"),
                o = n("446674"),
                u = n("77078"),
                d = n("913144"),
                c = n("267363"),
                f = n("716241"),
                E = n("739034"),
                _ = n("393414"),
                h = n("42203"),
                S = n("10802"),
                T = n("211248"),
                p = n("461380"),
                N = n("36694"),
                I = n("11539"),
                m = n("815978"),
                A = n("814744"),
                g = n("879165"),
                C = n("609023"),
                R = n("49111"),
                M = n("782340"),
                O = n("951244");
            let L = a.memo(function(e) {
                let {
                    channel: t,
                    deleteChannel: n
                } = e, s = a.useRef(null), [
                    [i, o], u
                ] = a.useState([0, 0]), d = t.deleted && i > 0;
                if (t.deleted && 0 === i && null != s.current) {
                    let e = s.current.offsetHeight,
                        t = s.current.offsetTop,
                        n = s.current.parentElement.scrollTop,
                        l = n > t ? e - (n - t) : e;
                    u([e, e - l])
                }
                let {
                    opacity: c,
                    size: f
                } = (0, r.useSpring)({
                    config: {
                        clamp: !0,
                        friction: 18,
                        tension: 200
                    },
                    opacity: d ? 0 : 1,
                    size: d ? 0 : 1,
                    onRest: () => {
                        n(t.channelId)
                    }
                }), E = {
                    opacity: c,
                    height: f.to(e => d ? function(e, t, n) {
                        return t + (e - t) * n
                    }(i, o, e) : "auto")
                };
                return (0, l.jsx)(r.animated.div, {
                    ref: s,
                    style: E,
                    children: (0, l.jsx)(D, {
                        ...e
                    })
                })
            });
            var v = L;
            let D = a.memo(function(e) {
                let {
                    channel: t,
                    onJump: n,
                    deleteChannel: s,
                    toggle: i
                } = e, r = (0, o.useStateFromStores)([h.default], () => h.default.getChannel(t.channelId)), E = (0, o.useStateFromStores)([S.default], () => null == t.guildId || S.default.isSubscribedToThreads(t.guildId));
                if (a.useEffect(() => {
                        null != r && t.isFullyLoaded && !t.hasError && !t.collapsed && "messages" === t.type && 0 === t.messages.length && d.default.wait(() => {
                            (0, c.ack)(t.channelId, !0), s(t.channelId)
                        })
                    }), a.useEffect(() => {
                        t.hasLoadedAnything && null != t.guildId && !E && d.default.dispatch({
                            type: "GUILD_SUBSCRIPTIONS",
                            guildId: t.guildId
                        })
                    }, [t.hasLoadedAnything, t.guildId, E]), null == r || !t.hasLoadedAnything) return null;
                let T = (e, l) => {
                    (0, f.trackWithMetadata)(R.AnalyticEvents.INBOX_CHANNEL_CLICKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId
                    });
                    let a = null != l ? l : t.oldestUnreadMessageId;
                    (0, _.transitionTo)(R.Routes.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : a)), n(e)
                };
                return (0, l.jsx)("div", {
                    className: O.channel,
                    children: (0, l.jsx)(u.HeadingLevel, {
                        component: (0, l.jsxs)(A.default, {
                            channel: r,
                            gotoChannel: T,
                            mentionCount: t.mentionCount,
                            toggleCollapsed: i,
                            channelState: t,
                            children: [(0, l.jsx)(m.default, {
                                channel: r
                            }), (0, l.jsx)(y, {
                                ...e
                            }), "nsfw" === t.type ? null : (0, l.jsx)(P, {
                                ...e
                            })]
                        }),
                        children: t.collapsed ? null : "messages" === t.type ? (0, l.jsx)(C.default, {
                            channel: t,
                            channelRecord: r,
                            gotoChannel: T
                        }) : "forum" === t.type ? (0, l.jsx)(g.default, {
                            channel: t,
                            channelRecord: r,
                            deleteChannel: s
                        }) : null
                    })
                })
            });

            function y(e) {
                let {
                    channel: t,
                    markChannelRead: n,
                    markGuildRead: a,
                    getNumUnreadChannels: s
                } = e, i = (0, E.default)(), r = i && null != t.guildId;
                return (0, l.jsx)(T.default, {
                    className: O.markReadButton,
                    tooltip: r ? M.default.Messages.MARK_GUILD_AS_READ : M.default.Messages.MARK_AS_READ,
                    color: T.CircleIconButtonColors.TERTIARY,
                    icon: r ? (0, l.jsx)(I.default, {
                        width: 16,
                        height: 16
                    }) : (0, l.jsx)(N.default, {
                        width: 16,
                        height: 16
                    }),
                    onClick: function() {
                        r && null != t.guildId ? a(t.guildId) : n(t), (0, f.trackWithMetadata)(R.AnalyticEvents.INBOX_CHANNEL_ACKED, {
                            channel_id: t.channelId,
                            guild_id: t.guildId,
                            marked_all_channels_as_read: !1,
                            num_unread_channels_remaining: s() - 1
                        })
                    }
                })
            }

            function P(e) {
                let {
                    channel: t,
                    toggle: n,
                    getNumUnreadChannels: a
                } = e;

                function s() {
                    n(t), (0, f.trackWithMetadata)(R.AnalyticEvents.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: a(),
                        is_now_collapsed: !t.collapsed
                    })
                }
                return (0, l.jsx)(u.Tooltip, {
                    text: M.default.Messages.COLLAPSE,
                    children: e => (0, l.jsx)(u.Clickable, {
                        ...e,
                        className: i(O.collapseButton, {
                            [O.collapsed]: t.collapsed
                        }),
                        onClick: s,
                        children: (0, l.jsx)(p.default, {
                            width: 16,
                            height: 16
                        })
                    })
                })
            }
        },
        879165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("249654"),
                o = n("446674"),
                u = n("913144"),
                d = n("267363"),
                c = n("152637"),
                f = n("578198"),
                E = n("689275"),
                _ = n("967241"),
                h = n("42203"),
                S = n("449008"),
                T = n("648564"),
                p = n("419309");

            function N(e) {
                let {
                    channel: t,
                    channelRecord: n,
                    deleteChannel: s
                } = e, N = (0, o.useStateFromStoresArray)([E.default, h.default], () => i(E.default.getThreadsForParent(n.guild_id, n.id)).values().filter(e => {
                    let {
                        id: n
                    } = e;
                    return r.default.compare(n, t.oldestReadMessageId) > 0
                }).map(e => {
                    let {
                        id: t
                    } = e;
                    return h.default.getChannel(t)
                }).filter(S.isNotNullish).sort((e, t) => r.default.compare(e.id, t.id)).value(), [t.oldestReadMessageId, n.guild_id, n.id]), I = a.useCallback((e, t) => {
                    (0, _.openThreadSidebarForViewing)(e, t, T.OpenThreadAnalyticsLocations.INBOX)
                }, []);
                return a.useEffect(() => {
                    null != n && t.isFullyLoaded && !t.hasError && !t.collapsed && 0 === N.length && u.default.wait(() => {
                        (0, d.ack)(t.channelId, !0), s(t.channelId)
                    })
                }), (0, l.jsx)("div", {
                    className: p.container,
                    children: N.map(e => (0, l.jsx)(f.ForumPostComposerStoreProvider, {
                        createStore: () => (0, f.createForumPostComposerStore)(n),
                        children: (0, l.jsx)(c.default, {
                            className: p.forumPost,
                            threadId: e.id,
                            goToThread: I
                        })
                    }, e.id))
                })
            }
        },
        609023: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("866227"),
                i = n.n(s),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("336696"),
                c = n("383667"),
                f = n("459776"),
                E = n("654017"),
                _ = n("603531"),
                h = n("845579"),
                S = n("271938"),
                T = n("957255"),
                p = n("697218"),
                N = n("898260"),
                I = n("888400"),
                m = n("530686"),
                A = n("970268"),
                g = n("49111"),
                C = n("782340"),
                R = n("145568");
            let M = {
                left: 4,
                right: -12
            };

            function O(e) {
                var t;
                let {
                    channel: n,
                    message: s,
                    compact: i,
                    isGroupStart: o,
                    treatSpam: d,
                    gotoChannel: c
                } = e, f = (0, r.useListItem)(null !== (t = s.id) && void 0 !== t ? t : ""), E = a.useCallback(e => {
                    if ("ArrowLeft" === e.key) {
                        var t;
                        null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus()
                    }
                }, [n.id]);
                return (0, l.jsx)(u.FocusRing, {
                    offset: M,
                    children: (0, l.jsxs)("div", {
                        className: R.messageContainer,
                        onKeyDown: E,
                        ...f,
                        children: [(0, l.jsx)(m.default, {
                            className: R.jumpButton,
                            onJump: e => c(e, s.id)
                        }), (0, l.jsx)(_.default, {
                            id: s.id,
                            message: s,
                            channel: n,
                            className: R.message,
                            compact: i,
                            animateAvatar: !1,
                            isGroupStart: o,
                            onKeyDown: E,
                            treatSpam: d
                        })]
                    }, s.id)
                })
            }

            function L(e) {
                var t, n;
                let {
                    channel: a,
                    channelRecord: s,
                    gotoChannel: r
                } = e, {
                    enabled: _
                } = d.default.useExperiment({
                    location: "20e3b0_1"
                }, {
                    autoTrackExposure: !1
                }), m = h.MessageDisplayCompact.useSetting(), M = (0, o.useStateFromStores)([T.default], () => T.default.can(g.Permissions.CREATE_INSTANT_INVITE, s)), L = (0, E.isSpamSupported)(s), v = !1, D = 0 === a.messages.length || a.messages[0].timestamp.isSame(i(), "day"), y = null !== (n = null === (t = p.default.getUser(S.default.getId())) || void 0 === t ? void 0 : t.hasFlag(g.UserFlags.SPAMMER)) && void 0 !== n && n, P = [];
                if (!a.collapsed) {
                    let e = null,
                        t = null,
                        n = a.messages.slice(0, A.MAX_SHOWN_MESSAGES);
                    n.forEach(n => {
                        if (!(0, c.default)(n, M)) {
                            if (!D && (null == e || !e.isSame(n.timestamp, "day"))) {
                                let t = (0, I.dateFormat)(n.timestamp, "LL");
                                P.push((0, l.jsx)(N.default, {
                                    className: R.divider,
                                    children: t
                                }, t)), e = n.timestamp
                            }
                            let a = null == t || (0, f.default)(s, t, n);
                            t = n, v = v || (0, E.isSpam)(n), P.push((0, l.jsx)(O, {
                                channel: s,
                                message: n,
                                compact: m,
                                isGroupStart: a,
                                treatSpam: !y && _ && (0, E.isSpam)(n) && L,
                                gotoChannel: r
                            }, n.id))
                        }
                    }), a.messages.length >= A.MAX_SHOWN_MESSAGES && P.push((0, l.jsxs)(u.Button, {
                        color: u.Button.Colors.LINK,
                        look: u.Button.Looks.LINK,
                        onClick: e => r(e, n[n.length - 1].id),
                        children: [C.default.Messages.UNREADS_VIEW_CHANNEL, " ›"]
                    }, "view-all")), 0 === P.length && (P = [(0, l.jsx)(u.Spinner, {}, "spinner")])
                }
                return v && L && d.default.trackExposure({
                    location: "20e3b0_2"
                }), (0, l.jsx)("div", {
                    className: R.messages,
                    children: P
                })
            }
        },
        474282: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("881410"), n("424973");
            var l = n("37983");
            n("884691");
            var a = n("917351"),
                s = n.n(a),
                i = n("898260"),
                r = n("660407"),
                o = n("970268"),
                u = n("782340"),
                d = n("962087");

            function c(e, t, n) {
                let {
                    markChannelRead: a,
                    markGuildRead: c,
                    deleteChannel: f,
                    toggle: E,
                    getNumUnreadChannels: _
                } = t, h = null;
                return s.flatMap(e, e => {
                    let t = e.sortOrder !== h;
                    h = e.sortOrder;
                    let s = [];
                    return t && (e.hasLoadedAnything && e.sortOrder === o.SortOrder.ReallyOldChannel ? s.push((0, l.jsx)(i.default, {
                        className: d.divider,
                        contentClassName: d.dividerContent,
                        children: u.default.Messages.UNREADS_OLD_CHANNELS_DIVIDER
                    }, "old-divider")) : e.hasLoadedAnything && e.sortOrder === o.SortOrder.NoNotifications && s.push((0, l.jsx)(i.default, {
                        className: d.divider,
                        contentClassName: d.dividerContent,
                        children: u.default.Messages.UNREADS_NO_NOTIFICATIONS_DIVIDER
                    }, "disabled-divider"))), s.push((0, l.jsx)(r.default, {
                        channel: e,
                        markChannelRead: a,
                        markGuildRead: c,
                        toggle: E,
                        deleteChannel: f,
                        onJump: n,
                        getNumUnreadChannels: _
                    }, e.channelId)), s
                })
            }
        },
        385730: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                },
                UnreadsCrashed: function() {
                    return v
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("597755"),
                o = n.n(r),
                u = n("974667"),
                d = n("446674"),
                c = n("151426"),
                f = n("77078"),
                E = n("913144"),
                _ = n("206230"),
                h = n("510889"),
                S = n("826267"),
                T = n("599110"),
                p = n("659500"),
                N = n("150938"),
                I = n("805614"),
                m = n("64318"),
                A = n("474282"),
                g = n("970268"),
                C = n("49111"),
                R = n("782340"),
                M = n("930391");

            function O(e) {
                let {
                    setTab: t,
                    onJump: n,
                    showTutorial: s,
                    setSeenTutorial: r,
                    closePopout: O,
                    badgeState: v
                } = e, D = a.useRef(null), [y, P] = (0, g.default)(D), {
                    loadState: x,
                    channels: U
                } = y, {
                    maybeLoadMore: b,
                    markAllRead: F
                } = P;
                (function(e, t, n) {
                    a.useLayoutEffect(() => {
                        var l;
                        let {
                            scrollToChannelIndex: a
                        } = t;
                        n.clearScrollToChannelIndex();
                        let {
                            current: s
                        } = e;
                        if (null == s || null == a) return;
                        let i = null === (l = s.getScrollerNode()) || void 0 === l ? void 0 : l.children;
                        if (null == i) return;
                        let r = i[a];
                        if (null == r) return;
                        let {
                            scrollTop: o,
                            scrollHeight: u
                        } = s.getScrollerState();
                        (r.offsetTop < o || r.offsetTop > o + u) && s.scrollTo({
                            to: r.offsetTop
                        })
                    })
                })(D, y, P),
                function(e, t) {
                    a.useEffect(() => {
                        let n = () => {
                            let n = e.channels.find(e => !e.collapsed);
                            null != n && t.markChannelRead(n)
                        };
                        return p.ComponentDispatch.subscribe(C.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n), () => {
                            p.ComponentDispatch.unsubscribe(C.ComponentActions.MARK_TOP_INBOX_CHANNEL_READ, n)
                        }
                    }, [t, e.channels])
                }(y, P), a.useEffect(() => {
                    T.default.track(C.AnalyticEvents.OPEN_POPOUT, {
                        type: "Inbox"
                    })
                }, []), a.useEffect(() => (E.default.subscribe("CONNECTION_OPEN", O), () => {
                    E.default.unsubscribe("CONNECTION_OPEN", O)
                }), [O]);
                let j = (0, d.useStateFromStores)([_.default], () => _.default.messageGroupSpacing),
                    G = (0, h.default)("unreads", D);
                if (0 === U.length) {
                    var k;
                    return (0, l.jsxs)("div", {
                        className: M.container,
                        children: [(0, l.jsx)(m.default, {
                            tab: c.InboxTab.UNREADS,
                            setTab: t,
                            badgeState: v,
                            closePopout: O
                        }), (0, l.jsx)(I.default, {
                            Icon: S.default,
                            header: R.default.Messages.UNREADS_EMPTY_STATE_HEADER,
                            tip: (null === (k = o.os) || void 0 === k ? void 0 : k.family) === "OS X" ? R.default.Messages.UNREADS_EMPTY_STATE_TIP_MAC : R.default.Messages.UNREADS_EMPTY_STATE_TIP
                        })]
                    })
                }
                return (0, l.jsxs)("div", {
                    className: i(M.container, "group-spacing-".concat(j)),
                    "aria-label": R.default.Messages.UNREADS_TAB_LABEL,
                    children: [(0, l.jsx)(m.default, {
                        tab: c.InboxTab.UNREADS,
                        setTab: t,
                        badgeState: v,
                        closePopout: O,
                        children: (0, l.jsx)(N.default, {
                            type: "top-header",
                            onClick: F
                        })
                    }), (0, l.jsx)(u.ListNavigatorProvider, {
                        navigator: G,
                        children: (0, l.jsx)(u.ListNavigatorContainer, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...a
                                } = e;
                                return (0, l.jsxs)(f.AdvancedScrollerThin, {
                                    ref: e => {
                                        var n;
                                        D.current = e, t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null
                                    },
                                    ...a,
                                    onScroll: x === g.LoadState.Done ? void 0 : b,
                                    className: M.scroller,
                                    children: [s ? (0, l.jsx)(L, {
                                        setSeenTutorial: r
                                    }) : null, (0, A.default)(U, P, n), x === g.LoadState.Done ? null : (0, l.jsx)(f.Spinner, {
                                        className: M.spinner
                                    })]
                                })
                            }
                        })
                    })]
                })
            }

            function L(e) {
                let {
                    setSeenTutorial: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: M.tutorial,
                    children: [(0, l.jsx)("div", {
                        className: M.tutorialIcon,
                        children: (0, l.jsx)(S.default, {
                            width: 24,
                            height: 24
                        })
                    }), (0, l.jsxs)("div", {
                        children: [(0, l.jsx)(f.Heading, {
                            className: M.tutorialHeader,
                            variant: "heading-md/semibold",
                            children: R.default.Messages.UNREADS_TUTORIAL_HEADER
                        }), (0, l.jsx)(f.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: R.default.Messages.UNREADS_TUTORIAL_BODY
                        }), (0, l.jsx)(f.Button, {
                            className: M.tutorialButton,
                            onClick: t,
                            size: f.Button.Sizes.SMALL,
                            children: R.default.Messages.TUTORIAL_CLOSE
                        })]
                    })]
                })
            }

            function v(e) {
                let {
                    setTab: t,
                    badgeState: n,
                    closePopout: a
                } = e;
                return (0, l.jsxs)("div", {
                    className: M.container,
                    children: [(0, l.jsx)(m.default, {
                        tab: c.InboxTab.UNREADS,
                        setTab: t,
                        badgeState: n,
                        closePopout: a
                    }), (0, l.jsx)(I.default, {
                        Icon: S.default,
                        disableStars: !0,
                        header: R.default.Messages.UNREADS_EMPTY_STATE_ERROR_HEADER,
                        tip: R.default.Messages.UNREADS_EMPTY_STATE_ERROR_SUBTITLE
                    })]
                })
            }
        },
        970268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SortOrder: function() {
                    return l
                },
                LoadState: function() {
                    return a
                },
                MAX_SHOWN_MESSAGES: function() {
                    return w
                },
                default: function() {
                    return K
                }
            }), n("424973"), n("222007");
            var l, a, s, i, r = n("884691"),
                o = n("44170"),
                u = n("627445"),
                d = n.n(u),
                c = n("917351"),
                f = n.n(c),
                E = n("913144"),
                _ = n("819689"),
                h = n("267363"),
                S = n("206230"),
                T = n("379881"),
                p = n("542827"),
                N = n("615387"),
                I = n("401690"),
                m = n("689275"),
                A = n("755624"),
                g = n("414833"),
                C = n("872173"),
                R = n("374363"),
                M = n("233069"),
                O = n("42203"),
                L = n("923959"),
                v = n("247013"),
                D = n("305961"),
                y = n("377253"),
                P = n("957255"),
                x = n("660478"),
                U = n("677099"),
                b = n("282109"),
                F = n("449008"),
                j = n("299039"),
                G = n("49111"),
                k = n("648564");
            (s = l || (l = {}))[s.Favorite = 0] = "Favorite", s[s.PrivateChannel = 1] = "PrivateChannel", s[s.Mentioned = 2] = "Mentioned", s[s.AllMessagesNotifications = 3] = "AllMessagesNotifications", s[s.GuildChannel = 4] = "GuildChannel", s[s.OldChannel = 5] = "OldChannel", s[s.NoNotifications = 6] = "NoNotifications", s[s.ReallyOldChannel = 7] = "ReallyOldChannel", (i = a || (a = {})).Loading = "loading", i.Loaded = "loaded", i.Done = "done";
            let w = 25;
            class B extends o.EventEmitter {
                loadMore() {
                    let {
                        loadState: e,
                        channels: t
                    } = this.state;
                    if ("loaded" !== e) return;
                    let n = !1,
                        l = t.map(e => {
                            if (e.isFullyLoaded || e.deleted || n) return e;
                            if (e.collapsed) return e.hasLoadedAnything ? e : {
                                ...e,
                                hasLoadedAnything: !0
                            };
                            return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (d("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = !0), e)
                        });
                    (!n || l.some((e, n) => e !== t[n])) && this.setState({
                        channels: l,
                        loadState: n ? this.state.loadState : "done"
                    })
                }
                populateInitialStateFromStore(e) {
                    if ("messages" === e.type) return H(e, !1);
                    if ("nsfw" === e.type) return {
                        ...e,
                        isFullyLoaded: !0,
                        hasLoadedAnything: !0
                    };
                    if ("forum" === e.type) {
                        let t = m.default.hasLoaded(e.guildId);
                        return {
                            ...e,
                            isFullyLoaded: t,
                            hasLoadedAnything: t
                        }
                    } else(0, F.assertNever)(e)
                }
                clearScrollToChannelIndex() {
                    this.setState({
                        scrollToChannelIndex: null
                    })
                }
                loadChannelMessages(e) {
                    _.default.clearChannel(e.channelId);
                    let t = _.default.fetchMessages({
                        channelId: e.channelId,
                        limit: G.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: e.oldestReadMessageId,
                            flash: !0
                        }
                    });
                    return null != t && !1 !== t && (this.setState({
                        loadState: "loading"
                    }), t.then(t => {
                        this.setState({
                            loadState: "loaded",
                            channels: this.updateChannel(e.channelId, e => {
                                d("messages" === e.type, "channel cannot change type");
                                let n = H(e, !0);
                                return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = {
                                    ...n,
                                    hasLoadedAnything: !0,
                                    isFullyLoaded: !0,
                                    hasError: !t
                                }), n
                            })
                        })
                    }, () => {
                        this.setState({
                            loadState: "loaded",
                            channels: this.updateChannel(e.channelId, e => {
                                var t;
                                d("messages" === e.type, "channel cannot change type");
                                let n = H(e, !0);
                                return {
                                    ...n,
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
                                }
                            })
                        })
                    }), !0)
                }
                updateChannel(e, t) {
                    return this.state.channels.map(n => n.channelId === e ? t(n) : n)
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
                constructor(e, t) {
                    super(), this.state = e, this.scrollerRef = t, this.maybeLoadMore = () => {
                        var e;
                        let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
                        if (null == t) return;
                        let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
                        n < 2e3 && this.loadMore()
                    }, this.reloadMessages = () => {
                        this.setState({
                            channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? H(e, !1, !0) : e)
                        })
                    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
                        let {
                            channelId: t,
                            newestUnreadMessageId: n
                        } = e;
                        if (E.default.wait(() => h.ack(t, !0, void 0, n, {
                                section: G.AnalyticsSections.INBOX
                            })), 1 === this.state.channels.length) {
                            this.deleteChannel(t);
                            return
                        }
                        this.setState({
                            channels: this.updateChannel(t, e => ({
                                ...e,
                                deleted: !0
                            }))
                        }), S.default.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
                    }, this.markGuildRead = e => {
                        E.default.wait(() => (0, p.default)([e], G.AnalyticsSections.INBOX)), this.setState({
                            channels: this.state.channels.filter(t => t.guildId !== e)
                        }), this.maybeLoadMore()
                    }, this.deleteChannel = e => {
                        this.setState({
                            scrollToChannelIndex: f.findIndex(this.state.channels, t => t.channelId === e),
                            channels: this.state.channels.filter(t => t.channelId !== e)
                        }), this.maybeLoadMore()
                    }, this.markAllRead = () => {
                        h.bulkAck(this.state.channels.map(e => ({
                            channelId: e.channelId,
                            messageId: e.newestUnreadMessageId
                        }))), this.setState({
                            channels: []
                        })
                    }, this.toggle = e => {
                        let {
                            channelId: t,
                            guildId: n
                        } = e, {
                            channels: l,
                            collapsedChannels: a,
                            loadState: s
                        } = this.state, i = f.findIndex(l, e => e.channelId === t), r = l[i], o = !r.collapsed;
                        a[t] = o, (0, C.updateUserChannelSettings)(n, t, e => {
                            e.collapsedInInbox = o
                        }, C.UserSettingsDelay.FREQUENT_USER_ACTION), this.setState({
                            scrollToChannelIndex: i,
                            collapsedChannels: a,
                            loadState: "done" !== s || o || r.isFullyLoaded ? s : "loaded",
                            channels: this.updateChannel(t, e => ({
                                ...e,
                                collapsed: o
                            }))
                        }), r.collapsed ? !r.isFullyLoaded && this.loadMore() : this.maybeLoadMore()
                    }, this.handleUserGuildSettingsStoreChange = () => {
                        let e = this.state.channels.filter(e => !b.default.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
                        e.length !== this.state.channels.length && this.setState({
                            channels: e
                        })
                    }, this.handleJoinedThreadsStoreChange = () => {
                        let e = this.state.channels.filter(e => !A.default.isMuted(e.channelId));
                        e.length !== this.state.channels.length && this.setState({
                            channels: e
                        })
                    }, this.handleActiveThreadsStoreChange = () => {
                        let e = this.state.channels.map(e => {
                            if ("forum" !== e.type) return e;
                            {
                                let t = m.default.hasLoaded(e.guildId);
                                return {
                                    ...e,
                                    isFullyLoaded: t,
                                    hasLoadedAnything: t
                                }
                            }
                        });
                        this.setState({
                            channels: e
                        })
                    }
                }
            }

            function H(e, t) {
                var n;
                let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = y.default.getMessages(e.channelId),
                    s = a.toArray().filter(t => j.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= j.default.compare(t.id, e.newestUnreadMessageId)),
                    i = s.length === e.messages.length && s.every((t, n) => e.messages[n] === t);
                if (i && l) return e;
                let r = null != a.getAfter(e.oldestReadMessageId) || (null === (n = s[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
                    o = s[s.length - 1],
                    u = j.default.compare(null == o ? void 0 : o.id, e.newestUnreadMessageId) >= 0 || s.length >= w;
                return {
                    ...e,
                    messages: s,
                    hasLoadedAnything: e.hasLoadedAnything || r || t,
                    hasLoadedFirst: e.hasLoadedFirst || r || t,
                    isFullyLoaded: e.isFullyLoaded || r && u || t && !a.hasMoreAfter
                }
            }

            function V() {
                let e = function() {
                        var e, t;
                        let n = {},
                            l = null !== (t = null === (e = R.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
                        for (let e in l)
                            for (let t in l[e].channels) {
                                let a = O.default.getChannel(t);
                                (!(t in n) || (null == a ? void 0 : a.guild_id) === e) && (n[t] = l[e].channels[t].collapsedInInbox)
                            }
                        return n
                    }(),
                    t = function(e) {
                        let t = [];
                        O.default.getSortedPrivateChannels().forEach(n => Y(e, t, null, n.id));
                        let n = U.default.getFlattenedGuildIds();
                        return n.forEach(n => {
                            if (null == n) return;
                            let l = L.default.getSelectableChannelIds(n),
                                a = I.default.getActiveJoinedUnreadThreadsForGuild(n);
                            l.forEach(l => {
                                var s;
                                Y(e, t, n, l);
                                let i = null !== (s = a[l]) && void 0 !== s ? s : {};
                                for (let l in i) Y(e, t, n, l)
                            })
                        }), f.sortBy(t, e => e.sortOrder)
                    }(e);
                return {
                    collapsedChannels: e,
                    loadState: "loaded",
                    channels: t,
                    scrollToChannelIndex: null
                }
            }

            function Y(e, t, n, l) {
                if (null == l) return;
                let a = O.default.getChannel(l);
                if (null == a) return;
                let s = M.THREAD_CHANNEL_TYPES.has(a.type);
                if (!s && b.default.isGuildOrCategoryOrChannelMuted(n, a.id)) return;
                if (a.isPrivate()) {
                    if (0 === x.default.getMentionCount(l)) return
                } else if (!(0, N.getHasImportantUnread)(a) && 0 === x.default.getMentionCount(l)) return;
                if (!a.isPrivate() && !P.default.can(G.Permissions.READ_MESSAGE_HISTORY, a)) return;
                let i = x.default.ackMessageId(l);
                if (null == i) {
                    let e = D.default.getGuild(a.guild_id);
                    if (null == e || null == e.joinedAt) return;
                    i = j.default.fromTimestamp(e.joinedAt.getTime())
                }
                let r = x.default.getOldestUnreadMessageId(l),
                    o = x.default.lastMessageId(l),
                    u = x.default.getMentionCount(l),
                    d = u > 0 || a.isPrivate();
                if (null == o || j.default.compare(i, o) >= 0) return;
                let c = {
                    guildId: n,
                    channelId: l,
                    oldestReadMessageId: i,
                    oldestUnreadMessageId: r,
                    newestUnreadMessageId: o,
                    collapsed: !0 === e[l],
                    hasLoadedAnything: !1,
                    hasLoadedFirst: !1,
                    isFullyLoaded: !1,
                    hasError: !1,
                    hasMentionsOrUnreads: d,
                    mentionCount: u,
                    sortOrder: function(e, t, n) {
                        let l = O.default.getChannel(t);
                        if (T.default.isFavorite(t)) return 0;
                        if (l.isPrivate()) return 1;
                        if (x.default.getMentionCount(t) > 0) return 2;
                        if (null != n) {
                            let e = j.default.extractTimestamp(n);
                            if (Date.now() - e > 864e6) return 7;
                            if (Date.now() - e > 1728e5) return 5
                        }
                        if (l.isThread()) {
                            let e = (0, g.computeThreadNotificationSetting)(l);
                            return e === k.ThreadMemberFlags.ALL_MESSAGES ? 3 : e === k.ThreadMemberFlags.NO_MESSAGES ? 6 : 4
                        } {
                            let n = b.default.getChannelMessageNotifications(e, t),
                                l = n === G.UserNotificationSettings.NULL ? b.default.getMessageNotifications(e) : n;
                            return l === G.UserNotificationSettings.ALL_MESSAGES ? 3 : l === G.UserNotificationSettings.NO_MESSAGES ? 6 : 4
                        }
                    }(n, l, o)
                };
                a.isNSFW() && !v.default.didAgree(a.guild_id) ? t.push({
                    ...c,
                    type: "nsfw"
                }) : a.isForumLikeChannel() ? t.push({
                    ...c,
                    type: "forum"
                }) : t.push({
                    ...c,
                    type: "messages",
                    messages: []
                })
            }

            function K(e) {
                let [t, n] = r.useState(() => new B(V(), e)), [l, a] = r.useState(!1), s = r.useRef(Date.now()), [i, o] = r.useState(() => V());
                return r.useEffect(() => {
                    let e = e => o(e);
                    return t.on("change", e), o(t.state), () => {
                        t.off("change", e)
                    }
                }, [t]), r.useEffect(() => {
                    if (null == i || i.channels.length > 0 || l) return;
                    let t = Date.now(),
                        r = V();
                    0 === r.channels.length || t - s.current < 1e4 ? a(!0) : (s.current = Date.now(), n(new B(r, e)))
                }, [i, l, e]), r.useLayoutEffect(t.maybeLoadMore, [null == i ? void 0 : i.channels, null == i ? void 0 : i.loadState]), r.useEffect(() => (y.default.addChangeListener(t.reloadMessages), () => y.default.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), r.useEffect(() => (b.default.addChangeListener(t.handleUserGuildSettingsStoreChange), () => b.default.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), r.useEffect(() => (A.default.addChangeListener(t.handleJoinedThreadsStoreChange), () => A.default.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), r.useEffect(() => (m.default.addChangeListener(t.handleActiveThreadsStoreChange), () => m.default.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [i, t]
            }
        },
        833150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("866227"),
                i = n.n(s),
                r = n("304983"),
                o = n("77078"),
                u = n("446674"),
                d = n("252744"),
                c = n("545158"),
                f = n("954732"),
                E = n("362189"),
                _ = n("697218"),
                h = n("211248"),
                S = n("228220"),
                T = n("888400"),
                p = n("782340"),
                N = n("72317");

            function I(e) {
                let {
                    invite: t,
                    expired: n
                } = e, s = (0, u.useStateFromStores)([_.default], () => {
                    var e, n;
                    return null !== (n = null === (e = _.default.getUser(t.inviter_id)) || void 0 === e ? void 0 : e.username) && void 0 !== n ? n : ""
                }), c = (0, T.dateFormat)(i(t.created_at), "LT"), f = a.useRef(null), S = (0, d.default)(f);
                return a.useEffect(() => {
                    !n && (0, E.updateInviteStatus)(t)
                }, [t, n]), (0, l.jsxs)("div", {
                    className: N.container,
                    ref: f,
                    children: [(0, l.jsxs)("div", {
                        className: N.primaryRow,
                        children: [(0, l.jsx)("img", {
                            className: N.inviteImage,
                            src: t.application_asset,
                            alt: "Game Invite"
                        }), (0, l.jsx)(o.Text, {
                            className: N.title,
                            variant: "text-md/semibold",
                            color: "interactive-active",
                            children: p.default.Messages.GAME_INVITES_SENT_YOU_AN_INVITE.format({
                                username: s
                            })
                        }), S && !n && (0, l.jsx)(m, {
                            invite: t
                        }), (0, l.jsx)(o.Popout, {
                            renderPopout: e => (0, l.jsx)(A, {
                                ...e,
                                invite: t
                            }),
                            position: "bottom",
                            align: "right",
                            animation: o.Popout.Animation.NONE,
                            children: e => {
                                let {
                                    onClick: t
                                } = e;
                                return (0, l.jsx)(h.default, {
                                    className: N.secondaryButton,
                                    tooltip: p.default.Messages.MORE,
                                    color: h.CircleIconButtonColors.TERTIARY,
                                    icon: (0, l.jsx)(r.MoreHorizontalIcon, {
                                        width: 16,
                                        height: 16
                                    }),
                                    onClick: e => {
                                        e.stopPropagation(), t(e)
                                    }
                                })
                            }
                        })]
                    }), (0, l.jsx)("div", {
                        className: N.divider
                    }), (0, l.jsx)("div", {
                        className: N.secondaryRow,
                        children: (0, l.jsxs)(o.Text, {
                            variant: "text-xs/medium",
                            className: N.subtitle,
                            color: "text-muted",
                            children: [t.application_name, " \xb7 ", c]
                        })
                    })]
                })
            }

            function m(e) {
                let {
                    invite: t
                } = e, n = (0, u.useStateFromStores)([f.default], () => f.default.isInviteGameInstalled(t)), s = (0, u.useStateFromStores)([f.default], () => f.default.isInviteJoinable(t)), [i, r] = a.useState(!1), d = a.useCallback(async () => {
                    r(!0);
                    try {
                        await (0, E.launchInviteGame)(t)
                    } catch {}
                    r(!1)
                }, [t]), _ = a.useCallback(async () => {
                    r(!0);
                    try {
                        await (0, E.acceptInvite)(t)
                    } catch {}
                    r(!1)
                }, [t]);
                if (n) {
                    if (!s) return (0, l.jsx)(o.Button, {
                        className: N.primaryButton,
                        disabled: i,
                        size: o.ButtonSizes.SMALL,
                        onClick: d,
                        children: p.default.Messages.GAME_INVITES_LAUNCH_GAME
                    });
                    else return (0, l.jsx)(o.Button, {
                        className: N.primaryButton,
                        disabled: i,
                        size: o.ButtonSizes.SMALL,
                        onClick: _,
                        children: p.default.Messages.GAME_INVITES_JOIN_GAME
                    })
                }
                return null == t.fallback_url ? (0, l.jsx)("div", {
                    className: N.infoBox,
                    children: (0, l.jsx)(o.Text, {
                        variant: "text-xxs/medium",
                        color: "text-muted",
                        children: p.default.Messages.GAME_INVITES_LAUNCH_GAME_OUTSIDE_OF_DISCORD
                    })
                }) : (0, l.jsx)(o.Button, {
                    className: N.primaryButton,
                    disabled: i,
                    size: o.ButtonSizes.SMALL,
                    color: o.ButtonColors.TRANSPARENT,
                    onClick: () => (0, c.default)(t.fallback_url),
                    children: p.default.Messages.GAME_INVITES_INSTALL_GAME
                })
            }

            function A(e) {
                let {
                    invite: t,
                    closePopout: n
                } = e;
                return (0, l.jsx)(o.Menu, {
                    navId: "game-invite-context-menu",
                    onClose: n,
                    onSelect: n,
                    "aria-label": p.default.Messages.GAME_INVITE_ACTIONS_MENU_LABEL,
                    children: (0, l.jsx)(o.MenuGroup, {
                        children: (0, l.jsx)(o.MenuItem, {
                            id: "invite-actions-delete",
                            label: p.default.Messages.DELETE,
                            action: async () => {
                                await (0, E.deleteInvite)(t)
                            },
                            icon: S.default,
                            showIconFirst: !0
                        }, "invite-actions-delete")
                    }, "invite-actions")
                })
            }
        },
        788072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("151426"),
                u = n("47693"),
                d = n("77078"),
                c = n("954732"),
                f = n("362189"),
                E = n("211248"),
                _ = n("64318"),
                h = n("833150"),
                S = n("782340"),
                T = n("643000");

            function p(e) {
                let {
                    setTab: t,
                    badgeState: n,
                    closePopout: s
                } = e, p = (0, r.useStateFromStores)([c.default], () => c.default.getInvites()), [I, m] = a.useState(!1), [A, g] = a.useMemo(() => i.partition(p, e => {
                    let t = (Date.now() - new Date(e.created_at).getTime()) / 1e3;
                    return t < e.ttl
                }), [p]);
                a.useEffect(() => {
                    (0, f.clearUnseenInvites)()
                });
                let C = a.useCallback(async () => {
                    m(!0), await (0, f.deleteAllInvites)(), m(!1)
                }, []);
                return (0, l.jsxs)("div", {
                    className: T.container,
                    children: [(0, l.jsx)(_.default, {
                        tab: o.InboxTab.GAME_INVITES,
                        setTab: t,
                        badgeState: n,
                        closePopout: s,
                        children: (0, l.jsx)(E.default, {
                            className: T.deleteButton,
                            tooltip: S.default.Messages.GAME_INVITES_DELETE_ALL,
                            disabled: I,
                            color: E.CircleIconButtonColors.TERTIARY,
                            icon: (0, l.jsx)(u.TrashIcon, {
                                width: 16,
                                height: 16
                            }),
                            onClick: C
                        })
                    }), (0, l.jsx)(d.AdvancedScrollerThin, {
                        children: (0, l.jsxs)("div", {
                            className: T.invitesContainer,
                            children: [A.length > 0 && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(N, {
                                    title: S.default.Messages.GAME_INVITES_RECENT_HEADER
                                }), (0, l.jsx)(l.Fragment, {
                                    children: A.map(e => (0, l.jsx)(h.default, {
                                        invite: e,
                                        expired: !1
                                    }, e.invite_id))
                                })]
                            }), g.length > 0 && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(N, {
                                    title: S.default.Messages.GAME_INVITES_EXPIRED_HEADER
                                }), (0, l.jsx)(l.Fragment, {
                                    children: g.map(e => (0, l.jsx)(h.default, {
                                        invite: e,
                                        expired: !0
                                    }, e.invite_id))
                                })]
                            })]
                        })
                    })]
                })
            }

            function N(e) {
                let {
                    title: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: T.headerContainer,
                    children: [(0, l.jsx)(d.Text, {
                        className: T.headerTitle,
                        variant: "text-xs/semibold",
                        color: "interactive-normal",
                        children: t
                    }), (0, l.jsx)("div", {
                        className: T.headerDivider
                    })]
                })
            }
        },
        470965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("65597"),
                i = n("862337"),
                r = n("77078"),
                o = n("954732"),
                u = n("362189"),
                d = n("697218"),
                c = n("782340"),
                f = n("400004");

            function E(e) {
                let {
                    inboxIconRef: t,
                    recentsPopoutShown: n
                } = e, [E, _] = a.useState(!1), h = (0, s.default)([o.default], () => o.default.getLastUnseenInvite()), S = (0, s.default)([d.default], () => null != h ? d.default.getUser(h.inviter_id) : null);
                return (a.useEffect(() => {
                    n && _(!1)
                }, [n]), a.useEffect(() => {
                    if (null == h) {
                        _(!1);
                        return
                    }(0, u.updateInviteStatus)(h), _(!0);
                    let e = new i.Timeout;
                    return e.start(5e3, () => {
                        _(!1)
                    }), () => {
                        e.stop()
                    }
                }, [h]), E && null != h && null != S) ? (0, l.jsxs)(r.TooltipLayer, {
                    tooltipClassName: f.tooltip,
                    tooltipContentClassName: f.tooltipContent,
                    targetElementRef: t,
                    position: "bottom",
                    color: r.TooltipColors.BLACK,
                    children: [(0, l.jsxs)("div", {
                        className: f.iconContainer,
                        children: [(0, l.jsx)("img", {
                            className: f.inviteImage,
                            src: h.application_asset,
                            alt: "Game Invite"
                        }), (0, l.jsx)("div", {
                            className: f.offsetAvatarContainer,
                            children: (0, l.jsx)(r.Avatar, {
                                "aria-label": "Inviter",
                                className: f.inviterImage,
                                src: S.getAvatarURL(null, 24),
                                size: r.AvatarSizes.SIZE_24
                            })
                        })]
                    }), (0, l.jsxs)("div", {
                        className: f.titleContainer,
                        children: [(0, l.jsx)(r.Text, {
                            className: f.title,
                            variant: "text-xs/semibold",
                            children: c.default.Messages.GAME_INVITES_INVITE_FROM.format({
                                username: S.username
                            })
                        }), (0, l.jsx)(r.Text, {
                            className: f.subtitle,
                            variant: "text-xxs/medium",
                            children: h.application_name
                        })]
                    })]
                }) : null
            }
        },
        93015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyUserSentimentExperiment: function() {
                    return a
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "user",
                id: "2023-05_safety_user_sentiment",
                label: "Safety User Sentiment Feedback Eligible",
                defaultConfig: {
                    isEligible: !1
                },
                treatments: [{
                    id: 1,
                    label: "Eligible",
                    config: {
                        isEligible: !0
                    }
                }]
            })
        },
        703537: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForNotice: function() {
                    return u
                },
                markNoticeDismissed: function() {
                    return c
                }
            });
            var l = n("866227"),
                a = n.n(l),
                s = n("801340"),
                i = n("872173"),
                r = n("374363"),
                o = n("93015");
            let u = e => {
                    var t;
                    if (!d(e)) return !1;
                    let n = null === (t = r.default.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
                        l = null != n ? s.Timestamp.toDate(n) : void 0,
                        i = null != l ? a().diff(l, "days") : null,
                        u = null != n;
                    if (u && !(null != i && i > 30)) return !1;
                    let {
                        isEligible: c
                    } = o.SafetyUserSentimentExperiment.getCurrentConfig({
                        location: "657a81_1"
                    }, {
                        autoTrackExposure: !0
                    });
                    return c
                },
                d = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
                c = () => {
                    let e = s.Timestamp.now();
                    i.PreloadedUserSettingsActionCreators.updateAsync("userContent", t => {
                        t.safetyUserSentimentNoticeDismissedAt = e
                    }, i.UserSettingsDelay.INFREQUENT_USER_ACTION)
                }
        },
        92790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("781738");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("98159"),
                o = n("369470"),
                u = n.n(o),
                d = n("446674"),
                c = n("77078"),
                f = n("378438"),
                E = n("137223"),
                _ = n("76385"),
                h = n("955513"),
                S = n("180748"),
                T = n("206230"),
                p = n("716241"),
                N = n("42203"),
                I = n("923959"),
                m = n("744983"),
                A = n("18494"),
                g = n("476765"),
                C = n("659500"),
                R = n("202752"),
                M = n("751520"),
                O = n("313483"),
                L = n("653291"),
                v = n("49111"),
                D = n("782340"),
                y = n("84691");
            n("525840");
            let P = (0, g.uid)(),
                x = u(f.search, 500);
            class U extends a.PureComponent {
                componentDidMount() {
                    var e, t;
                    C.ComponentDispatch.subscribe(v.ComponentActions.PERFORM_SEARCH, this.search), C.ComponentDispatch.subscribe(v.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), C.ComponentDispatch.subscribe(v.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch), null === (t = this._editorRef) || void 0 === t || null === (e = t.editor) || void 0 === e || e.setAttribute("aria-haspopup", "listbox")
                }
                componentDidUpdate(e) {
                    let {
                        editorState: t,
                        searchId: n
                    } = this.props;
                    if (t !== e.editorState) {
                        let e = M.tokenizeQuery(R.getFirstTextBlock(t)),
                            l = O.getSelectionScope(e, t);
                        f.updateAutocompleteQuery(n, e, l), null != this._editorRef && R.scrollCursorIntoView(this._editorRef.editor)
                    }
                }
                componentWillUnmount() {
                    C.ComponentDispatch.unsubscribe(v.ComponentActions.PERFORM_SEARCH, this.search), C.ComponentDispatch.unsubscribe(v.ComponentActions.SET_SEARCH_QUERY, this.handleSetSearchQuery), C.ComponentDispatch.unsubscribe(v.ComponentActions.FOCUS_SEARCH, this.handleFocusSearch)
                }
                tokenize(e) {
                    let t = M.tokenizeQuery(R.getFirstTextBlock(e)).filter(e => e.type !== _.default.NON_TOKEN_TYPE);
                    return R.applyTokensAsEntities(t, e, h.default)
                }
                clearSearch() {
                    let {
                        searchId: e
                    } = this.props;
                    null != e && f.clearSearchState(e)
                }
                handlePastedFiles() {
                    return !0
                }
                handleDroppedFiles() {
                    return !0
                }
                handleDrop() {
                    return !0
                }
                renderInput(e) {
                    let {
                        editorState: t
                    } = this.props;
                    return (0, l.jsx)(r.Editor, {
                        autoCorrect: "off",
                        ref: this.setEditorRef,
                        onBlur: this.onBlur,
                        onFocus: this.onFocus,
                        handleReturn: this.handleReturn,
                        handleBeforeInput: this.handleBeforeInput,
                        handleKeyCommand: this.handleKeyCommand,
                        handlePastedText: this.handlePastedText,
                        handlePastedFiles: this.handlePastedFiles,
                        handleDroppedFiles: this.handleDroppedFiles,
                        handleDrop: this.handleDrop,
                        keyBindingFn: this.handleKeyBind,
                        placeholder: D.default.Messages.SEARCH,
                        editorState: t,
                        onChange: this.setEditorState,
                        role: "combobox",
                        ariaExpanded: e,
                        ariaControls: e ? P : void 0,
                        ariaLabel: D.default.Messages.SEARCH,
                        ariaAutocomplete: "list"
                    })
                }
                render() {
                    let {
                        searchId: e,
                        editorState: t,
                        hasResults: n,
                        className: a
                    } = this.props, {
                        focused: s
                    } = this.state, r = R.getFirstTextBlock(t).length > 0;
                    return null == e ? null : (0, l.jsx)(c.Popout, {
                        renderPopout: this.renderPopout,
                        position: "bottom",
                        animation: c.Popout.Animation.NONE,
                        shouldShow: s,
                        autoInvert: !1,
                        children: (t, o) => {
                            var u;
                            let {
                                isShown: d
                            } = o;
                            return (0, l.jsx)("div", {
                                className: a,
                                children: (0, l.jsx)("div", {
                                    className: i(y.search, {
                                        [y.open]: r || s,
                                        [y.focused]: s
                                    }),
                                    children: (0, l.jsx)(c.FocusRing, {
                                        focusTarget: {
                                            current: null === (u = this._editorRef) || void 0 === u ? void 0 : u.editor
                                        },
                                        ringTarget: this._searchBarRef,
                                        children: (0, l.jsxs)("div", {
                                            className: y.searchBar,
                                            ref: this._searchBarRef,
                                            children: [this.renderInput(d), (0, l.jsx)(E.SearchBarIcon, {
                                                onClear: this.handleClearSearch,
                                                hasContent: r || n,
                                                className: y.icon
                                            })]
                                        }, e)
                                    })
                                })
                            })
                        }
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        focused: !1,
                        selectedIndex: void 0
                    }, this._searchBarRef = a.createRef(), this._searchPopoutRef = a.createRef(), this.handleSetSearchQuery = e => {
                        let {
                            query: t,
                            anchor: n,
                            focus: l,
                            performSearch: a,
                            replace: s
                        } = e, {
                            editorState: i
                        } = this.props, r = R.getFirstTextBlock(i);
                        " " !== t.charAt(t.length - 1) && (t += " "), null != n && 0 !== n && " " !== r.charAt(n - 1) && " " !== t.charAt(0) && (t = " " + t), s ? (i = R.replaceAllContent(t, i), n = 0) : i = R.updateContent(t, i, n, l), i = R.truncateContent(i, 512), i = this.tokenize(i);
                        let o = Number(n) + t.length;
                        i = R.setCollapsedSelection(o, i), this.setEditorState(i), a && this.search(R.getFirstTextBlock(i))
                    }, this.handleSelectedIndexChanged = e => {
                        var t, n;
                        null === (n = this._editorRef) || void 0 === n || null === (t = n.editor) || void 0 === t || t.setAttribute("aria-activedescendant", null != e ? "".concat(P, "-").concat(e) : void 0), this.setState({
                            selectedIndex: e
                        })
                    }, this.renderPopout = () => (0, l.jsx)(L.default, {
                        ref: this._searchPopoutRef,
                        navId: P,
                        onSelectedIndexChanged: this.handleSelectedIndexChanged
                    }), this.search = e => {
                        let {
                            searchId: t,
                            isSearching: n
                        } = this.props;
                        if (null == e || "" === e) {
                            let {
                                editorState: t
                            } = this.props;
                            e = R.getFirstTextBlock(t)
                        }
                        if (null != t && !n) {
                            let n = M.tokenizeQuery(e),
                                l = M.getSearchQueryFromTokens(n);
                            for (let t = 0; t < n.length; t++) !M.filterHasAnswer(n[t], n[t + 1]) && (e = e.substring(0, n[t].start) + e.substring(n[t].end));
                            if (0 === n.length || 0 === Object.keys(l).length) return !1;
                            x(t, l, e), this.onBlur()
                        }
                        return !0
                    }, this.handleClearSearch = e => {
                        let {
                            editorState: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        e.preventDefault(), e.stopPropagation();
                        let l = R.getFirstTextBlock(t);
                        if ("" === l) {
                            this.focusEditor();
                            return
                        }
                        t = R.truncateContent(t, 0), this.setEditorState(t), !n && Promise.resolve().then(() => this.blurEditor())
                    }, this.handleFocusSearch = e => {
                        let {
                            prefillCurrentChannel: t
                        } = e;
                        if (!t) {
                            this.focusEditor();
                            return
                        }
                        let n = A.default.getChannelId(),
                            l = N.default.getChannel(n);
                        if ((null == l ? void 0 : l.isThread()) && (l = N.default.getChannel(null == l ? void 0 : l.parent_id)), null == l || l.isPrivate()) {
                            this.focusEditor();
                            return
                        }
                        let a = I.default.getTextChannelNameDisambiguations(l.getGuildId()),
                            s = a[l.id],
                            i = null != s ? s.name : l.name;
                        this.handleSetSearchQuery({
                            query: h.default[v.SearchTokenTypes.FILTER_IN].key + "#".concat(i, " "),
                            replace: !0
                        })
                    }, this.focusEditor = () => {
                        let {
                            _editorRef: e
                        } = this;
                        null != e && Promise.resolve().then(() => e.focus())
                    }, this.blurEditor = () => {
                        var e;
                        null === (e = this._editorRef) || void 0 === e || e.blur()
                    }, this.setEditorRef = e => {
                        this._editorRef = e
                    }, this.onFocus = () => {
                        let {
                            searchType: e
                        } = this.props;
                        p.default.trackWithMetadata(v.AnalyticEvents.SEARCH_OPENED, {
                            search_type: e
                        }), this.setState({
                            focused: !0
                        })
                    }, this.onBlur = () => {
                        this.setState({
                            focused: !1
                        }, () => {
                            R.isEmpty(this.props.editorState) && this.clearSearch()
                        })
                    }, this.handleReturn = e => {
                        e.preventDefault();
                        let {
                            current: t
                        } = this._searchPopoutRef, n = null != t && t.selectOption();
                        return !n && this.search(), !0
                    }, this.handleBeforeInput = e => {
                        let {
                            editorState: t
                        } = this.props, {
                            focused: n
                        } = this.state, l = R.getFirstTextBlock(t);
                        return !!(l.length >= 512) || (t = R.updateContent(e, t), t = R.truncateContent(t, 512), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
                            focused: !0
                        }), !0)
                    }, this.handleKeyCommand = e => {
                        let {
                            editorState: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        switch (e) {
                            case "backspace":
                            case "backspace-word":
                            case "backspace-to-start-of-line":
                            case "delete":
                            case "delete-word":
                                return t = R.deleteContent(e, t), t = this.tokenize(t), this.setEditorState(t), !n && this.setState({
                                    focused: !0
                                }), !0;
                            case "transpose-characters":
                            case "move-selection-to-start-of-block":
                            case "move-selection-to-end-of-block":
                                return t = R.miscCommand(e, t), t = this.tokenize(t), this.setEditorState(t), !0;
                            case "split-block":
                            case "underline":
                            case "bold":
                            case "italic":
                                return !0
                        }
                    }, this.handlePastedText = e => {
                        let {
                            editorState: t
                        } = this.props, {
                            focused: n
                        } = this.state;
                        return e = null != e ? e.replace(/\n/g, "") : "", t = R.updateContent(e, t), t = R.truncateContent(t, 512), t = this.tokenize(t), !n && this.setState({
                            focused: !0
                        }), this.setEditorState(t), !0
                    }, this.setEditorState = e => {
                        let {
                            searchId: t
                        } = this.props;
                        f.setSearchState(t, e)
                    }, this.handleKeyBind = e => {
                        let {
                            key: t,
                            metaKey: n,
                            shiftKey: l
                        } = e, {
                            editorState: a,
                            searchId: s,
                            keyboardModeEnabled: i
                        } = this.props;
                        if (e.stopPropagation(), "Escape" === t) {
                            if (e.preventDefault(), R.isEmpty(a)) this.blurEditor();
                            else {
                                let e = R.clearContent(a);
                                f.setSearchState(s, e), this.setState({
                                    focused: !0
                                })
                            }
                            return !0
                        }
                        if ("ArrowUp" === t) {
                            e.preventDefault();
                            let {
                                current: t
                            } = this._searchPopoutRef;
                            return null != t && t.focusPreviousOption(), !0
                        }
                        if ("ArrowDown" === t) {
                            e.preventDefault();
                            let {
                                current: t
                            } = this._searchPopoutRef;
                            return null != t && t.focusNextOption(), !0
                        }
                        if ("Tab" === t) {
                            if (i) return;
                            return (0, S.enableKeyboardMode)(), !0
                        }
                        if ("Home" === t || "ArrowLeft" === t && n) return e.preventDefault(), a = l ? R.setToStartSelection(a) : R.setCollapsedStartSelection(a), this.setEditorState(a), !0;
                        if ("End" === t || "ArrowRight" === t && n) return e.preventDefault(), a = l ? R.setToEndSelection(a) : R.setCollapsedEndSelection(a), this.setEditorState(a), !0;
                        if (("Delete" === t || "Backspace" === t) && n) {
                            let e = R.clearContent(a);
                            return this.setEditorState(e), !0
                        }
                        return R.getDefaultKeyBinding(e)
                    }, M.clearTokenCache()
                }
            }
            var b = d.default.connectStores([T.default, m.default], () => {
                var e;
                let t = m.default.getCurrentSearchId(),
                    n = m.default.getSearchType(),
                    l = null != t && m.default.isSearching(t),
                    a = null != t && null !== (e = m.default.getEditorState(t)) && void 0 !== e ? e : R.createEmptyEditorState(O.generateDecorators(h.default)),
                    s = T.default.keyboardModeEnabled;
                return {
                    searchId: t,
                    searchType: n,
                    isSearching: l,
                    editorState: a,
                    hasResults: m.default.hasResults(t),
                    keyboardModeEnabled: s
                }
            })(U)
        },
        653291: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("627445"),
                o = n.n(r),
                u = n("917351"),
                d = n.n(u),
                c = n("866227"),
                f = n.n(c),
                E = n("868233"),
                _ = n("446674"),
                h = n("77078"),
                S = n("378438"),
                T = n("425773"),
                p = n("76385"),
                N = n("955513"),
                I = n("679653"),
                m = n("419830"),
                A = n("42203"),
                g = n("26989"),
                C = n("27618"),
                R = n("712611"),
                M = n("18494"),
                O = n("162771"),
                L = n("102985"),
                v = n("697218"),
                D = n("834179"),
                y = n("689476"),
                P = n("228220"),
                x = n("659500"),
                U = n("701909"),
                b = n("751520"),
                F = n("158998"),
                j = n("49111"),
                G = n("782340"),
                k = n("813069");
            let w = f("2015-05-15").local(),
                B = (0, E.makeLazy)({
                    createPromise: () => n.el("201959").then(n.bind(n, "201959")),
                    webpackId: "201959"
                }),
                H = (e, t, n) => {
                    var a, s, i;
                    let {
                        user: r,
                        text: o
                    } = n;
                    if (null == r) return (0, l.jsx)("strong", {
                        children: o
                    });
                    let u = v.default.getUser(r.id),
                        d = A.default.getChannel(e),
                        c = (null == d ? void 0 : d.isPrivate()) ? C.default.getNickname(r.id) : null,
                        f = null !== (s = null !== (a = g.default.getNick(e, r.id)) && void 0 !== a ? a : c) && void 0 !== s ? s : F.default.getName(r),
                        E = null !== (i = null == u ? void 0 : u.getAvatarURL(e, 20)) && void 0 !== i ? i : r.getAvatarURL(null == d ? void 0 : d.guild_id, 20);
                    return [(0, l.jsx)("img", {
                        alt: "",
                        className: k.displayAvatar,
                        src: E
                    }, "avatar-".concat(t, "-").concat(r.id)), (0, l.jsx)("span", {
                        className: k.displayedNick,
                        children: f
                    }, "display-nick-".concat(t, "-").concat(r.id)), (0, l.jsx)("span", {
                        className: k.displayUsername,
                        children: F.default.getUserTag(r, {
                            identifiable: L.default.enabled && L.default.hidePersonalInformation ? "never" : "always"
                        })
                    }, "display-username-".concat(t, "-").concat(r.id))]
                },
                V = (e, t, n) => {
                    let {
                        channel: a,
                        text: s
                    } = n;
                    if (null == a) return (0, l.jsx)("strong", {
                        children: s
                    });
                    let i = A.default.getChannel(a.parent_id),
                        r = (0, m.getChannelIconComponent)(a);
                    return (0, l.jsxs)("div", {
                        className: k.resultChannel,
                        children: [null != r ? (0, l.jsx)(r, {
                            className: k.searchResultChannelIcon
                        }) : null, (0, l.jsx)("strong", {
                            children: (0, I.computeChannelName)(a, v.default, C.default)
                        }), null != i ? (0, l.jsx)("span", {
                            className: k.searchResultChannelCategory,
                            children: (0, I.computeChannelName)(i, v.default, C.default)
                        }) : null]
                    })
                },
                Y = e => {
                    let t, n, {
                        id: a,
                        searchId: s,
                        result: r,
                        group: o,
                        className: u,
                        role: d,
                        tabIndex: c,
                        "aria-selected": f,
                        onSelect: E,
                        onFocus: _,
                        showFilter: S,
                        renderResult: T
                    } = e;
                    if (S) {
                        var p, I;
                        t = (0, l.jsx)("span", {
                            className: k.filter,
                            children: null !== (I = null === (p = N.default[o]) || void 0 === p ? void 0 : p.key) && void 0 !== I ? I : "addme:"
                        })
                    }
                    return n = null != T ? T(s, o, r) : (0, l.jsx)("strong", {
                        children: r.text
                    }), (0, l.jsxs)(h.Clickable, {
                        tag: "li",
                        className: i(k.option, u),
                        onClick: E,
                        onFocus: _,
                        id: a,
                        role: d,
                        tabIndex: c,
                        "aria-selected": f,
                        children: [t, n, (0, l.jsx)(y.default, {
                            className: k.plusIcon
                        })]
                    })
                },
                K = e => (0, l.jsx)(Y, {
                    ...e,
                    className: k.user,
                    renderResult: H
                }),
                Q = {
                    [j.SearchTokenTypes.FILTER_FROM]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_FROM,
                        component: K
                    },
                    [j.SearchTokenTypes.FILTER_MENTIONS]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_MENTIONS,
                        component: K
                    },
                    [j.SearchTokenTypes.FILTER_HAS]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_HAS
                    },
                    [j.SearchTokenTypes.FILTER_FILE_TYPE]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_FILE_TYPE
                    },
                    [j.SearchTokenTypes.FILTER_IN]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_CHANNELS,
                        component: e => (0, l.jsx)(Y, {
                            ...e,
                            renderResult: V
                        })
                    },
                    [j.SearchAutocompleteGroups.DATES]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_DATES
                    },
                    [j.SearchAutocompleteGroups.HISTORY]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_HISTORY,
                        groupTip(e) {
                            let {
                                searchId: t
                            } = e;
                            return (0, l.jsx)(h.Tooltip, {
                                text: G.default.Messages.SEARCH_CLEAR_HISTORY,
                                position: "left",
                                children: e => {
                                    let {
                                        onMouseEnter: n,
                                        onMouseLeave: a
                                    } = e;
                                    return (0, l.jsx)(h.Clickable, {
                                        onClick: () => (0, S.clearHistory)(t),
                                        onMouseEnter: n,
                                        onMouseLeave: a,
                                        className: k.searchClearHistory,
                                        title: G.default.Messages.SEARCH_CLEAR_HISTORY,
                                        "aria-label": G.default.Messages.SEARCH_CLEAR_HISTORY,
                                        children: (0, l.jsx)(P.default, {})
                                    })
                                }
                            })
                        },
                        component: function(e) {
                            let {
                                onSelect: t,
                                onFocus: n,
                                result: s,
                                showFilter: r,
                                searchId: o,
                                renderResult: u,
                                group: d,
                                ...c
                            } = e, f = "", E = a.useMemo(() => (function(e) {
                                let t = b.tokenizeQuery(e).map((e, t, n) => b.filterHasAnswer(e, n[t + 1]) ? e : new p.Token(e.getFullMatch(), p.NON_TOKEN_TYPE));
                                return t
                            })(s.text), [s.text]), _ = E.map(e => {
                                let t = e.getFullMatch();
                                if ("" === t.trim()) return null;
                                let n = j.IS_SEARCH_FILTER_TOKEN.test(e.type),
                                    a = j.IS_SEARCH_ANSWER_TOKEN.test(e.type);
                                return f += t, (0, l.jsx)("span", {
                                    className: i({
                                        [k.filter]: n,
                                        [k.answer]: a,
                                        [k.nonText]: !n && !a
                                    }),
                                    children: t
                                }, e.type + t)
                            });
                            return (0, l.jsxs)(h.Clickable, {
                                className: i(k.option, k.history),
                                onClick: t,
                                onFocus: n,
                                ...c,
                                "aria-label": G.default.Messages.SEARCH_FROM_SUGGESTIONS.format({
                                    suggestion: f
                                }),
                                children: [_, (0, l.jsx)(y.default, {
                                    className: k.plusIcon
                                })]
                            })
                        }
                    },
                    [j.SearchAutocompleteGroups.SEARCH_OPTIONS]: {
                        titleText: () => G.default.Messages.SEARCH_GROUP_HEADER_SEARCH_OPTIONS,
                        groupTip: () => (0, l.jsx)(h.Tooltip, {
                            text: G.default.Messages.LEARN_MORE,
                            position: "left",
                            children: e => (0, l.jsx)("div", {
                                className: k.searchLearnMore,
                                ...e,
                                children: (0, l.jsx)(h.Anchor, {
                                    href: U.default.getArticleURL(j.HelpdeskArticles.USING_SEARCH),
                                    title: G.default.Messages.LEARN_MORE,
                                    children: (0, l.jsx)(D.default, {})
                                })
                            })
                        }),
                        component: function(e) {
                            var t;
                            let {
                                result: n,
                                onSelect: a,
                                onFocus: s,
                                showFilter: r,
                                searchId: o,
                                ...u
                            } = e, d = b.getSearchOptionAnswer(null !== (t = n.token) && void 0 !== t ? t : "");
                            return (0, l.jsxs)(h.Clickable, {
                                className: i(k.option, k.searchOption),
                                onClick: a,
                                onFocus: s,
                                ...u,
                                children: [(0, l.jsx)("span", {
                                    className: k.filter,
                                    children: n.text
                                }), (0, l.jsx)("span", {
                                    className: i({
                                        [k.answer]: d
                                    }),
                                    children: d
                                }), (0, l.jsx)(y.default, {
                                    className: k.plusIcon
                                })]
                            })
                        }
                    }
                };
            class z extends a.PureComponent {
                componentDidUpdate(e, t) {
                    let {
                        resultsState: n,
                        totalResults: l
                    } = this.props, {
                        mode: a
                    } = n, {
                        resultsState: s
                    } = e;
                    null != a.filter && null == s.mode.filter && l > 0 ? this.setSelectedIndex(0) : a.type === j.SearchPopoutModes.FILTER_ALL && s.mode.type !== a.type ? this.setSelectedIndex(-1) : this.keepCurrentOptionSelected(e, t)
                }
                setSelectedIndex(e) {
                    this.setState({
                        selectedIndex: e
                    }, () => this.props.onSelectedIndexChanged(e))
                }
                render() {
                    let {
                        selectedIndex: e
                    } = this.state, {
                        navId: t,
                        resultsState: n,
                        totalResults: a
                    } = this.props;
                    return (0, l.jsx)(T.default, {
                        numResults: a,
                        query: n.query,
                        navId: t,
                        hideQuery: !this.shouldShowSearchQuery(),
                        focusedIndex: e,
                        renderCustomResults: this.renderAutocompletes,
                        renderInitialState: this.renderAutocompletes,
                        onHighlightQuery: () => this.focusOption(-1),
                        onSelectQuery: this.performSearch,
                        renderNoResults: () => null
                    })
                }
                constructor(...e) {
                    var t;
                    super(...e), t = this, this.state = {
                        dateHint: (0, N.getRandomDateShortcut)(),
                        selectedIndex: -1
                    }, this.handleDateChange = e => {
                        this.setSearchQuery(e.format(j.SEARCH_DATE_FORMAT) + " ", !0)
                    }, this.keepCurrentOptionSelected = (e, t) => {
                        let {
                            selectedIndex: n
                        } = this.state, {
                            resultsState: l,
                            totalResults: a
                        } = this.props, {
                            mode: s,
                            autocompletes: i
                        } = l, {
                            resultsState: r
                        } = e;
                        if (s.type !== r.mode.type) this.setSelectedIndex(-1);
                        else if (t.selectedIndex >= 0 && (t.selectedIndex === n || r.autocompletes.length !== i.length)) {
                            let e = b.getFlattenedStringArray(r.autocompletes, r.mode.type),
                                n = e[t.selectedIndex - 1],
                                l = b.getFlattenedStringArray(i, s.type),
                                o = l.indexOf(n); - 1 !== o ? this.setSelectedIndex(o) : t.selectedIndex >= a && this.setSelectedIndex(a - 1)
                        }
                    }, this.focusNextOption = () => {
                        this.focusOtherOption(1)
                    }, this.focusPreviousOption = () => {
                        this.focusOtherOption(-1)
                    }, this.focusOtherOption = e => {
                        let {
                            selectedIndex: t
                        } = this.state, {
                            resultsState: n
                        } = this.props;
                        !b.showDatePicker(n.mode.filter) && this.focusOption(t + e)
                    }, this.focusOption = e => {
                        let t = e,
                            {
                                autocompletes: n
                            } = this.props.resultsState,
                            l = this.shouldShowSearchQuery();
                        t < -1 || !l && t < 0 ? t = b.getTotalResults(n) - 1 : l && t >= b.getTotalResults(n) ? t = -1 : !l && t >= b.getTotalResults(n) && (t = 0), this.setSelectedIndex(t)
                    }, this.selectOption = e => {
                        let t = e;
                        if (null == t && (t = this.state.selectedIndex), t < 0) return !1;
                        let {
                            autocompletes: n,
                            mode: l
                        } = this.props.resultsState;
                        if (b.showDatePicker(l.filter)) return;
                        let a = b.getFlattenedStringArray(n, l.type);
                        if (t >= a.length) return !1;
                        let s = a[t],
                            i = function(e) {
                                let t = !0,
                                    n = e.trim();
                                return d(N.default).forOwn(e => {
                                    "" !== e.key && null != e.key && n === e.key && (t = !1)
                                }), t
                            }(s);
                        return this.setSearchQuery(s, i), !0
                    }, this.setSearchQuery = function(e) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            {
                                mode: l,
                                cursorScope: a
                            } = t.props.resultsState,
                            s = 0;
                        null != l.token ? s = l.token.start : (null == a ? void 0 : a.currentToken) != null && (s = a.currentToken.end);
                        let i = null != l.token ? l.token.end : s;
                        x.ComponentDispatch.dispatch(j.ComponentActions.SET_SEARCH_QUERY, {
                            query: e,
                            anchor: s,
                            focus: i,
                            performSearch: n
                        }), t.setSelectedIndex(-1)
                    }, this.shouldShowSearchQuery = () => {
                        let {
                            mode: e
                        } = this.props.resultsState;
                        return e.type !== j.SearchPopoutModes.FILTER && e.type !== j.SearchPopoutModes.EMPTY && !b.showDatePicker(e.filter)
                    }, this.renderDatePicker = () => (0, l.jsxs)("div", {
                        className: k.datePicker,
                        children: [(0, l.jsx)(B, {
                            onSelect: this.handleDateChange,
                            maxDate: f().local(),
                            minDate: w
                        }), (0, l.jsxs)("div", {
                            className: k.datePickerHint,
                            children: [(0, l.jsxs)("span", {
                                className: k.hint,
                                children: [G.default.Messages.SEARCH_DATE_PICKER_HINT, "\xa0"]
                            }), (0, l.jsx)(h.Clickable, {
                                tag: "span",
                                className: k.hintValue,
                                onClick: this.handleHintClick,
                                children: this.state.dateHint
                            })]
                        })]
                    }), this.handleHintClick = () => {
                        this.setSearchQuery(this.state.dateHint, !0)
                    }, this.performSearch = () => {
                        x.ComponentDispatch.dispatch(j.ComponentActions.PERFORM_SEARCH)
                    }, this.renderAutocompletes = () => {
                        let {
                            selectedIndex: e
                        } = this.state, {
                            navId: t,
                            searchId: n
                        } = this.props, {
                            autocompletes: a,
                            mode: s
                        } = this.props.resultsState;
                        if (b.showDatePicker(s.filter)) return this.renderDatePicker();
                        let i = -1;
                        return a.map(a => {
                            var r, o, u;
                            let d, c;
                            if (null == a || 0 === a.results.length) return null;
                            let f = null !== (r = Q[a.group]) && void 0 !== r ? r : {};
                            null != f.titleText && (c = "".concat(a.group, "-header"), d = (0, l.jsx)("div", {
                                id: c,
                                className: k.header,
                                children: f.titleText()
                            }));
                            let E = null !== (o = f.groupTip) && void 0 !== o ? o : null,
                                _ = null != E ? (0, l.jsx)(E, {
                                    searchId: n
                                }) : null,
                                h = null !== (u = f.component) && void 0 !== u ? u : Y,
                                S = s.type === j.SearchPopoutModes.FILTER_ALL;
                            return (0, l.jsxs)("ul", {
                                role: "group",
                                "aria-labelledby": c,
                                className: k.resultsGroup,
                                children: [d, _, a.results.map(s => {
                                    var r, o;
                                    if (null == s || null == a) return null;
                                    i += 1;
                                    let u = e === i;
                                    return (0, l.jsx)(h, {
                                        searchId: n,
                                        group: null !== (r = s.group) && void 0 !== r ? r : a.group,
                                        result: s,
                                        showFilter: S,
                                        onSelect: this.selectOption.bind(null, i),
                                        onFocus: this.focusOption.bind(null, i),
                                        ...(0, T.getListboxOptionProps)(t, i, u)
                                    }, "".concat(a.group, "-").concat(s.text, "-").concat(null !== (o = s.key) && void 0 !== o ? o : ""))
                                })]
                            }, a.group)
                        })
                    }
                }
            }
            var W = a.forwardRef((e, t) => {
                let [n, a, s] = (0, _.useStateFromStoresArray)([O.default, M.default, R.default], () => {
                    let e = O.default.getGuildId(),
                        t = M.default.getChannelId(),
                        n = null != e ? e : t;
                    o(null != n, "SearchPopout.getStateFromStores - invalid searchId");
                    let l = R.default.getState(n),
                        a = b.getTotalResults(l.autocompletes);
                    return [n, l, a]
                });
                return (0, l.jsx)(z, {
                    ...e,
                    searchId: n,
                    resultsState: a,
                    totalResults: s,
                    ref: t
                })
            })
        },
        208021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("913144"),
                a = n("819689"),
                s = n("115718"),
                i = n("347895"),
                r = n("341329"),
                o = n("582713"),
                u = n("724210"),
                d = {
                    openPrivateChannelAsSidebar(e) {
                        let {
                            channelId: t,
                            messageId: n,
                            baseChannelId: s,
                            hasSingleMessageRequest: i
                        } = e;
                        l.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_MESSAGE_REQUEST,
                            baseChannelId: s,
                            channelId: t,
                            details: {
                                type: o.SidebarOpenDetailsType.MESSAGE_REQUEST,
                                hasSingleMessageRequest: i
                            }
                        }), null != n ? a.default.jumpToMessage({
                            channelId: t,
                            messageId: n,
                            flash: !0
                        }) : r.default.fetchMessages({
                            channelId: t
                        })
                    },
                    openChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n,
                            baseChannelId: i,
                            flash: u = !0,
                            details: d
                        } = e;
                        l.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: i,
                            channelId: n,
                            details: d
                        });
                        let c = null == d ? void 0 : d.initialMessageId;
                        null != c ? a.default.jumpToMessage({
                            channelId: n,
                            messageId: c,
                            flash: u,
                            jumpType: s.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: n
                        })
                    },
                    openResourceChannelAsSidebar(e) {
                        let {
                            guildId: t,
                            channelId: n
                        } = e;
                        null != t && ((0, i.selectHomeResourceChannel)(t, n, !1), l.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_CHANNEL,
                            guildId: t,
                            baseChannelId: u.StaticChannelRoute.GUILD_HOME,
                            channelId: n
                        }))
                    },
                    openThreadAsSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            channelId: i,
                            flash: u = !0,
                            details: d
                        } = e;
                        l.default.dispatch({
                            type: "SIDEBAR_VIEW_CHANNEL",
                            sidebarType: o.SidebarType.VIEW_THREAD,
                            baseChannelId: n,
                            channelId: i,
                            details: d
                        }), (null == d ? void 0 : d.initialMessageId) != null ? a.default.jumpToMessage({
                            channelId: i,
                            messageId: d.initialMessageId,
                            flash: u,
                            jumpType: s.JumpTypes.INSTANT
                        }) : r.default.fetchMessages({
                            guildId: t,
                            channelId: i
                        })
                    },
                    closeChannelSidebar(e) {
                        l.default.dispatch({
                            type: "SIDEBAR_CLOSE",
                            baseChannelId: e
                        })
                    },
                    openGuildSidebar(e) {
                        let {
                            guildId: t,
                            baseChannelId: n,
                            sidebarType: a,
                            details: s
                        } = e;
                        l.default.dispatch({
                            type: "SIDEBAR_VIEW_GUILD",
                            sidebarType: a,
                            baseChannelId: n,
                            guildId: t,
                            details: s
                        })
                    },
                    closeGuildSidebar(e) {
                        l.default.dispatch({
                            type: "SIDEBAR_CLOSE_GUILD",
                            guildId: e
                        })
                    }
                }
        },
        414833: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                computeThreadNotificationSetting: function() {
                    return d
                },
                useThreadNotificationSetting: function() {
                    return c
                }
            }), n("702976");
            var l = n("446674"),
                a = n("42203"),
                s = n("282109"),
                i = n("568734"),
                r = n("755624"),
                o = n("648564"),
                u = n("49111");

            function d(e) {
                let t = r.default.flags(e.id);
                if (null == t) return o.ThreadMemberFlags.NO_MESSAGES;
                if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ALL_MESSAGES)) return o.ThreadMemberFlags.ALL_MESSAGES;
                if ((0, i.hasFlag)(t, o.ThreadMemberFlags.ONLY_MENTIONS)) return o.ThreadMemberFlags.ONLY_MENTIONS;
                if ((0, i.hasFlag)(t, o.ThreadMemberFlags.NO_MESSAGES)) return o.ThreadMemberFlags.NO_MESSAGES;
                let n = a.default.getChannel(e.parent_id);
                if (null == n || s.default.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) return o.ThreadMemberFlags.NO_MESSAGES;
                let l = s.default.resolvedMessageNotifications(n);
                return l === u.UserNotificationSettings.NO_MESSAGES ? o.ThreadMemberFlags.NO_MESSAGES : l === u.UserNotificationSettings.ONLY_MENTIONS ? o.ThreadMemberFlags.ONLY_MENTIONS : o.ThreadMemberFlags.ALL_MESSAGES
            }

            function c(e) {
                return (0, l.useStateFromStores)([r.default, s.default, a.default], () => d(e), [e])
            }
        },
        547772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("77078"),
                s = n("64016"),
                i = n("255228"),
                r = n("263024"),
                o = n("414833"),
                u = n("648564");

            function d(e) {
                let {
                    channel: t,
                    closePopout: n,
                    onSelect: d,
                    navId: c,
                    label: f
                } = e, E = (0, s.default)(t, "Notifications Bell"), _ = (0, i.default)(t), h = (0, o.useThreadNotificationSetting)(t);
                return (0, l.jsxs)(a.Menu, {
                    navId: c,
                    onClose: n,
                    "aria-label": f,
                    onSelect: d,
                    children: [(0, l.jsxs)(a.MenuGroup, {
                        children: [t.isForumPost() ? E : null, _]
                    }), (0, l.jsx)(a.MenuGroup, {
                        children: (0, u.getThreadNotificationOptions)().map(e => {
                            let {
                                setting: n,
                                label: s
                            } = e;
                            return (0, l.jsx)(a.MenuRadioItem, {
                                group: "thread-notifications",
                                id: "".concat(n),
                                label: s,
                                action: () => r.default.setNotificationSettings(t, {
                                    flags: n
                                }),
                                checked: n === h
                            }, n)
                        })
                    })]
                })
            }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return o
                },
                trackProfilePanelToggled: function() {
                    return u
                }
            });
            var l = n("373469"),
                a = n("824563"),
                s = n("27618"),
                i = n("599110"),
                r = n("49111");
            let o = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: l,
                        activity: a,
                        customStatusActivity: s,
                        status: o
                    } = e;
                    i.default.track(r.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != a && (null == a ? void 0 : a.type) !== r.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == a ? void 0 : a.type) === r.ActivityTypes.PLAYING,
                        load_duration_ms: l,
                        profile_user_status: o,
                        has_custom_status: null != s,
                        has_profile_effect: null != t.profileEffectId,
                        ...d(t)
                    })
                },
                u = (e, t) => {
                    i.default.track(r.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        i = null != l.default.getAnyStreamForUser(n),
                        o = a.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return i ? t === r.ActivityTypes.PLAYING : t !== r.ActivityTypes.CUSTOM_STATUS
                        }),
                        u = null == o ? void 0 : o.assets,
                        d = s.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == u ? void 0 : u.large_image) && void 0 !== t ? t : null == u ? void 0 : u.small_image),
                        is_friend: d,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        250404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("42203"),
                i = n("86878"),
                r = n("377253");
            let o = null;
            class u extends l.default.Store {
                initialize() {
                    this.waitFor(s.default, i.default, r.default)
                }
                getApps() {
                    return o
                }
            }
            u.displayName = "AuthorizedAppsStore";
            var d = new u(a.default, {
                USER_AUTHORIZED_APPS_UPDATE: function(e) {
                    o = e.apps
                }
            })
        },
        236717: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = "UPDATE_NOT_AVAILABLE";

            function i(e) {
                s = e.type
            }
            class r extends l.default.Store {
                getState() {
                    return s
                }
            }
            r.displayName = "AutoUpdateStore";
            var o = new r(a.default, {
                CHECKING_FOR_UPDATES: i,
                UPDATE_NOT_AVAILABLE: i,
                UPDATE_AVAILABLE: i,
                UPDATE_MANUALLY: i,
                UPDATE_ERROR: i,
                UPDATE_DOWNLOADED: i
            })
        },
        320268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("424973");
            var l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                i = n("95410"),
                r = n("913144"),
                o = n("316718"),
                u = n("465527"),
                d = n("651057"),
                c = n("299285"),
                f = n("568307"),
                E = n("697218"),
                _ = n("437712"),
                h = n("552712"),
                S = n("49111");
            let T = "DetectedOffPlatformPremiumPerksStore",
                p = {},
                N = {},
                I = [];

            function m() {
                let e = !1;
                for (let {
                        skuId: t,
                        applicationId: n
                    }
                    of a.values(N)) {
                    if (I.includes(t)) continue;
                    let l = c.default.getApplication(n);
                    if (null == l) {
                        !c.default.isFetchingApplication(n) && !c.default.didFetchingApplicationFail(n) && d.default.fetchApplication(n);
                        continue
                    }
                    let a = h.default.get(t);
                    if (null == a) {
                        !h.default.isFetching(t) && !h.default.didFetchingSkuFail(t) && u.fetchSKU(l.id, t);
                        continue
                    }
                    _.default.applicationIdsFetching.has(l.id) || _.default.isEntitledToSku(E.default.getCurrentUser(), t, l.id, l.id) || !a.available ? null != p[t] && (delete p[t], e = !0) : (p[t] = {
                        skuId: t,
                        applicationId: n
                    }, e = !0)
                }
                return e
            }
            class A extends s.default.Store {
                initialize() {
                    var e;
                    this.waitFor(f.default, h.default, _.default), I = null !== (e = i.default.get(T)) && void 0 !== e ? e : I
                }
                getDetectedOffPlatformPremiumPerks() {
                    return a.values(p)
                }
            }
            A.displayName = "DetectedOffPlatformPremiumPerksStore";
            var g = new A(r.default, {
                LOGOUT: function() {
                    p = {}, N = {}
                },
                SKU_FETCH_SUCCESS: m,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: m,
                ENTITLEMENT_CREATE: m,
                APPLICATION_FETCH_SUCCESS: m,
                DETECTED_OFF_PLATFORM_PREMIUM_PERKS_DISMISS: function(e) {
                    let {
                        skuId: t
                    } = e;
                    if (delete p[t], I.includes(t)) return !1;
                    I.push(t), i.default.set(T, I)
                },
                RUNNING_GAMES_CHANGE: function() {
                    let e = !1;
                    for (let {
                            id: t,
                            distributor: n
                        }
                        of f.default.getRunningGames())
                        if (null != t && n !== S.Distributors.DISCORD)
                            for (let {
                                    skuId: n,
                                    applicationId: l
                                }
                                of S.OFF_PLATFORM_PREMIUM_PERKS) {
                                if (!(l !== t || I.includes(n))) null == N[n] && (!_.default.applicationIdsFetched.has(l) && !_.default.applicationIdsFetching.has(l) && null == _.default.getForSku(n) && o.fetchUserEntitlementsForApplication(l), N[n] = {
                                    skuId: n,
                                    applicationId: l
                                }, e = !0)
                            }
                    return e && m(), e
                }
            })
        },
        669280: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("299039"),
                i = n("271938"),
                r = n("27618");
            let o = !1;
            class u extends l.default.Store {
                initialize() {
                    this.waitFor(r.default, i.default)
                }
                isEligible() {
                    return o
                }
            }
            u.displayName = "PremiumPromoStore";
            var d = new u(a.default, {
                CONNECTION_OPEN: function() {
                    let e = o;
                    return e !== (o = r.default.getFriendIDs().length >= 10 && s.default.extractTimestamp(i.default.getId()) < Date.now() - 15552e6)
                }
            })
        },
        712611: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("424973"), n("808653");
            var l = n("446674"),
                a = n("913144"),
                s = n("955513"),
                i = n("447909"),
                r = n("21121"),
                o = n("25292"),
                u = n("651879"),
                d = n("751520"),
                c = n("158998"),
                f = n("26989"),
                E = n("744983"),
                _ = n("102985"),
                h = n("697218"),
                S = n("49111");
            let T = {},
                p = {};

            function N(e) {
                let {
                    searchId: t,
                    query: n,
                    mode: l,
                    tokens: a,
                    cursorScope: s,
                    autocompletes: r
                } = e, o = p[t];
                return null == o && (o = {
                    results: [],
                    context: i.default.getSearchContext(I.bind(null, t))
                }, p[t] = o), {
                    query: null != n ? n : "",
                    mode: null != l ? l : {
                        type: S.SearchPopoutModes.EMPTY,
                        filter: null,
                        token: null
                    },
                    tokens: null != a ? a : [],
                    cursorScope: null != s ? s : null,
                    autocompletes: null != r ? r : []
                }
            }

            function I(e, t) {
                let {
                    results: n
                } = t, l = p[e], a = T[e];
                if (null == l || null == a) return;
                let {
                    type: s,
                    filter: i
                } = a.mode;
                if (s === S.SearchPopoutModes.EMPTY || s === S.SearchPopoutModes.FILTER && i !== S.SearchTokenTypes.FILTER_FROM && i !== S.SearchTokenTypes.FILTER_MENTIONS) return;
                let r = 3;
                a.mode.type === S.SearchPopoutModes.FILTER && (r = 10), l.results = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                    return (e = e.reduce((e, t) => {
                        let n = h.default.getUser(t.id);
                        return null == n ? e : (e.push({
                            id: n.id,
                            text: c.default.getUserTag(n),
                            user: n
                        }), e)
                    }, [])).length > t && (e.length = t), e
                }(n, r);
                let {
                    query: o,
                    mode: u,
                    tokens: d,
                    cursorScope: f
                } = a, {
                    autocompletes: E
                } = a;
                E = g(e, u), T[e] = N({
                    searchId: e,
                    query: o,
                    mode: u,
                    tokens: d,
                    cursorScope: f,
                    autocompletes: E
                }), L.emitChange()
            }

            function m(e, t, n) {
                let l, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                if (null == e || "" === e) return null;
                let i = E.default.getSearchType(n);
                if (i === S.SearchTypes.GUILD && (e === S.SearchTokenTypes.FILTER_FROM || e === S.SearchTokenTypes.FILTER_MENTIONS)) {
                    let e = p[n];
                    null == e ? l = null : ((null == t || 0 === t.getFullMatch().trim().length) && (e.results = o.default.getRecentlyTalked(n, 10).map(e => {
                        let {
                            record: t
                        } = e;
                        return {
                            user: t,
                            text: c.default.getUserTag(t)
                        }
                    })), l = e.results)
                } else {
                    var r;
                    let i = null === (r = s.default[e]) || void 0 === r ? void 0 : r.getAutocompletions,
                        o = (null != t ? t.getFullMatch() : "").trim();
                    l = null != i ? i(o, n, null != a ? a : 10) : []
                }
                return null == l || 0 === l.length ? null : {
                    group: e,
                    results: l
                }
            }

            function A(e) {
                let t = (null != e ? e.getFullMatch() : "").trim(),
                    n = function() {
                        let e = (0, r.isInMainTabsExperiment)() && !1;
                        return {
                            [S.SearchTokenTypes.FILTER_FROM]: !_.default.hidePersonalInformation,
                            [S.SearchTokenTypes.FILTER_MENTIONS]: !_.default.hidePersonalInformation,
                            [S.SearchTokenTypes.FILTER_HAS]: !0,
                            [S.SearchTokenTypes.FILTER_BEFORE]: !0,
                            [S.SearchTokenTypes.FILTER_AFTER]: !0,
                            [S.SearchTokenTypes.FILTER_ON]: !0,
                            [S.SearchTokenTypes.FILTER_IN]: E.default.getSearchType() === S.SearchTypes.GUILD,
                            [S.SearchTokenTypes.FILTER_PINNED]: !e
                        }
                    }(),
                    l = (0, s.getFilterAutocompletions)(t).filter(e => n[e.token]);
                return {
                    group: S.SearchAutocompleteGroups.SEARCH_OPTIONS,
                    results: l
                }
            }

            function g(e, t) {
                let n = [];
                if (t.type === S.SearchPopoutModes.FILTER) n.push(m(t.filter, t.token, e, 10));
                else if (t.type === S.SearchPopoutModes.FILTER_ALL) n = function(e, t) {
                    let n = (null != e ? e.getFullMatch() : "").trim(),
                        l = [];
                    null != n && "" !== n && ((function(e) {
                        let t = E.default.getSearchType(e),
                            n = [S.SearchTokenTypes.FILTER_HAS];
                        return !_.default.hidePersonalInformation && (n.push(S.SearchTokenTypes.FILTER_FROM), n.push(S.SearchTokenTypes.FILTER_MENTIONS)), t === S.SearchTypes.GUILD && n.push(S.SearchTokenTypes.FILTER_IN), n
                    })(t).forEach(n => {
                        if (null == n) return;
                        let a = m(n, e, t, 3);
                        null != a && l.push(a)
                    }), l.push(function(e, t) {
                        let n = (null != e ? e.getFullMatch() : "").trim();
                        if (null != n && "" !== n) {
                            var l, a, i;
                            let e = null === (l = s.default[S.SearchTokenTypes.FILTER_BEFORE]) || void 0 === l ? void 0 : l.getAutocompletions(n, t, 1)[0],
                                r = null === (a = s.default[S.SearchTokenTypes.FILTER_ON]) || void 0 === a ? void 0 : a.getAutocompletions(n, t, 1)[0],
                                o = null === (i = s.default[S.SearchTokenTypes.FILTER_AFTER]) || void 0 === i ? void 0 : i.getAutocompletions(n, t, 1)[0];
                            return null == e ? null : {
                                group: S.SearchAutocompleteGroups.DATES,
                                results: [e, r, o]
                            }
                        }
                    }(e, t)));
                    let a = (0, d.getTotalResults)(l);
                    return a < 5 && l.push(A(e)), l
                }(t.token, e);
                else if (t.type === S.SearchPopoutModes.EMPTY) {
                    n.push(A(t.token));
                    let l = (0, r.isInMainTabsExperiment)() && !1;
                    !l && n.push(function(e) {
                        if (_.default.hidePersonalInformation) return null;
                        let t = E.default.getHistory(e);
                        return null == t ? null : {
                            group: S.SearchAutocompleteGroups.HISTORY,
                            results: t.map(e => ({
                                text: e
                            }))
                        }
                    }(e))
                }
                return n
            }

            function C() {
                (0, d.clearTokenCache)()
            }

            function R(e) {
                let t = T[e];
                if (null == t) return;
                let {
                    query: n,
                    mode: l,
                    tokens: a,
                    cursorScope: s,
                    autocompletes: i
                } = t;
                T[e] = N({
                    searchId: e,
                    query: n,
                    mode: l,
                    tokens: a,
                    cursorScope: s,
                    autocompletes: i.map(e => (null == e ? void 0 : e.group) === S.SearchAutocompleteGroups.HISTORY ? null : e)
                })
            }

            function M() {
                let e = E.default.getCurrentSearchId();
                if (null == e || null == T[e]) return;
                let {
                    query: t,
                    mode: n,
                    tokens: l,
                    cursorScope: a
                } = T[e];
                T[e] = N({
                    searchId: e,
                    query: t,
                    mode: n,
                    tokens: l,
                    cursorScope: a,
                    autocompletes: g(e, n)
                })
            }
            class O extends l.default.Store {
                initialize() {
                    this.waitFor(f.default, _.default)
                }
                getState(e) {
                    var t;
                    return null !== (t = T[e]) && void 0 !== t ? t : N({
                        searchId: e
                    })
                }
            }
            O.displayName = "SearchAutocompleteStore";
            let L = new O(a.default, {
                SEARCH_AUTOCOMPLETE_QUERY_UPDATE: function(e) {
                    var t;
                    let n, {
                            searchId: l,
                            tokens: a,
                            cursorScope: s
                        } = e,
                        i = (0, d.getQueryFromTokens)(a),
                        r = (0, d.getAutocompleteMode)(s, a),
                        o = null !== (t = T[l]) && void 0 !== t ? t : {},
                        c = p[l],
                        f = !0;
                    if (i === o.query && (null == o.mode || o.mode.filter === r.filter)) n = o.autocompletes, f = !1;
                    else if (r.type === S.SearchPopoutModes.EMPTY || r.type === S.SearchPopoutModes.FILTER && r.filter !== S.SearchTokenTypes.FILTER_FROM && r.filter !== S.SearchTokenTypes.FILTER_MENTIONS) null != c && (c.context.clearQuery(), c.results = []), n = g(l, r);
                    else if (null != c) {
                        let {
                            token: e
                        } = r;
                        null != e && e.getFullMatch().trim().length > 0 ? (u.default.requestMembers(l, e.getFullMatch(), 10), c.context.setQuery(e.getFullMatch().trim(), {
                            guild: l
                        }), n = o.autocompletes, f = !1) : (c.context.clearQuery(), n = g(l, r))
                    }
                    return T[l] = N({
                        searchId: l,
                        query: i,
                        mode: r,
                        tokens: a,
                        cursorScope: s,
                        autocompletes: n
                    }), f
                },
                SEARCH_EDITOR_STATE_CLEAR: function(e) {
                    let {
                        searchId: t
                    } = e, n = p[t];
                    null != n && (n.context.destroy(), n.results = [], delete p[t]), delete T[t]
                },
                CHANNEL_CREATE: C,
                CHANNEL_DELETE: C,
                STREAMER_MODE_UPDATE: M,
                SEARCH_MODAL_OPEN: M,
                SEARCH_SCREEN_OPEN: M,
                SEARCH_CLEAR_HISTORY: function(e) {
                    let {
                        searchId: t
                    } = e;
                    null != t ? R(t) : Object.keys(T).forEach(R)
                },
                LOGOUT: function() {
                    Object.keys(T).forEach(R)
                }
            });
            var v = L
        },
        168851: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("446674"),
                a = n("95410"),
                s = n("913144"),
                i = n("167359");
            let r = "MaintenanceStore",
                o = null,
                u = null,
                d = null;
            class c extends l.default.Store {
                initialize() {
                    d = a.default.get(r)
                }
                getIncident() {
                    return o
                }
                getScheduledMaintenance() {
                    return null != u && u.id !== d ? u : null
                }
            }
            c.displayName = "MaintenanceStore";
            var f = new c(s.default, {
                CONNECTION_OPEN: function() {
                    o = null, i.default.checkScheduledMaintenances()
                },
                STATUS_PAGE_INCIDENT: function(e) {
                    o = e.incident
                },
                STATUS_PAGE_SCHEDULED_MAINTENANCE: function(e) {
                    u = e.maintenance
                },
                STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: function() {
                    if (null == u) return !1;
                    d = u.id, a.default.set(r, d)
                }
            })
        },
        381684: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("222007"), n("866227");
            var l, a, s = n("316693"),
                i = n("446674");
            n("95410");
            var r = n("913144"),
                o = n("518888"),
                u = n("525065"),
                d = n("305961"),
                c = n("957255"),
                f = n("162771"),
                E = n("697218"),
                _ = n("49111");
            let h = {
                    hiddenSurveys: {},
                    surveyOverride: null,
                    lastFetched: null
                },
                S = h,
                T = {},
                p = null;
            (a = l || (l = {})).IS_OWNER = "is_owner", a.IS_ADMIN = "is_admin", a.IS_COMMUNITY = "is_community", a.GUILD_SIZE = "guild_size", a.IS_HUB = "is_hub", a.IS_VIEWING = "is_viewing", a.GUILD_PERMISSIONS = "guild_permissions", a.GUILD_SIZE_ALL = "guild_size_all";
            let N = new Set(Object.values(l));

            function I(e) {
                let {
                    guild_requirements: t = [],
                    guild_size: n = [null, null],
                    guild_permissions: l = []
                } = e;
                if (0 === t.length) return !0;
                for (let e of t)
                    if (!N.has(e)) return !1;
                let a = t.includes("guild_size_all"),
                    i = !0,
                    r = Object.values(d.default.getGuilds());
                for (let o of r) {
                    if (a || t.includes("guild_size")) {
                        let e = u.default.getMemberCount(o.id);
                        if (null == e || null != n[0] && e < n[0] || null != n[1] && e > n[1]) {
                            i = !1;
                            continue
                        }
                    }
                    if (t.includes("is_community") && !o.hasFeature(_.GuildFeatures.COMMUNITY) || t.includes("is_hub") && !o.hasFeature(_.GuildFeatures.HUB)) continue;
                    if (t.includes("guild_permissions")) {
                        if (0 === l.length) continue;
                        let e = !1;
                        for (let t of l) try {
                            let n = s.default.deserialize(t);
                            if (c.default.can(n, o)) {
                                e = !0;
                                break
                            }
                        } catch (e) {}
                        if (!e) continue
                    }
                    let r = E.default.getCurrentUser(),
                        d = (null == r ? void 0 : r.id) === o.ownerId,
                        h = c.default.can(_.Permissions.ADMINISTRATOR, o);
                    if (t.includes("is_owner") && !d || t.includes("is_admin") && !h) continue;
                    null == (T = null != T ? T : {})[e.key] && (T[e.key] = e);
                    let S = f.default.getGuildId(),
                        p = null != S && S === o.id;
                    if ((!t.includes("is_viewing") || p) && !a) return !0
                }
                return !!a && !!i || !1
            }

            function m(e) {
                let {
                    survey: t
                } = e;
                if (S.lastFetched = Date.now(), null != t && null == S.hiddenSurveys[t.key]) {
                    if (!I(t)) return;
                    p = t
                }
            }

            function A() {
                if (null != p && (I(p) || (p = null, 0))) return !1;
                ! function() {
                    T = null != T ? T : {};
                    let e = Object.values(T)[0];
                    if (null != e && I(e)) {
                        m({
                            type: "SURVEY_FETCHED",
                            survey: e
                        });
                        return
                    }
                    if (null == p) return;
                    p = null
                }()
            }
            class g extends i.default.PersistedStore {
                initialize(e) {
                    S = null != e ? e : h, this.syncWith([f.default], A)
                }
                getState() {
                    return S
                }
                getCurrentSurvey() {
                    return p
                }
                getSurveyOverride() {
                    return S.surveyOverride
                }
            }
            g.displayName = "SurveyStore", g.persistKey = "SurveyStore", g.migrations = [e => {
                let t = {
                    ...e
                };
                return delete t.validSurveys, delete t.currentSurvey, delete t.iosIsPushNotificationClicked, delete t.iosIsInviteShown, delete t.iosFirstRunDate, t
            }];
            var C = new g(r.default, {
                CONNECTION_OPEN: function() {
                    var e;
                    if (!(null != S.lastFetched && Date.now() - (null !== (e = S.lastFetched) && void 0 !== e ? e : 0) < 864e5) || null != S.surveyOverride)(0, o.surveyFetch)(S.surveyOverride)
                },
                SURVEY_FETCHED: m,
                SURVEY_HIDE: function(e) {
                    let {
                        key: t
                    } = e;
                    S.hiddenSurveys[t] = !0, p = null, T = null != T ? T : {}, delete T[t]
                },
                SURVEY_OVERRIDE: function(e) {
                    let {
                        id: t
                    } = e;
                    S.surveyOverride = t, null != t && delete S.hiddenSurveys[t], (0, o.surveyFetch)(S.surveyOverride)
                },
                PUSH_NOTIFICATION_CLICK: function() {},
                DISPLAYED_INVITE_SHOW: function() {},
                LOGOUT: function() {
                    S.hiddenSurveys = {}
                }
            })
        },
        330387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("446674"),
                a = n("913144");
            let s = null;
            class i extends l.default.Store {
                hasAction() {
                    return null != s
                }
                getAction() {
                    return s
                }
            }

            function r(e) {
                s = e.requiredAction
            }
            i.displayName = "UserRequiredActionStore";
            var o = new i(a.default, {
                CONNECTION_OPEN: r,
                USER_REQUIRED_ACTION_UPDATE: r
            })
        },
        189459: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("446674"),
                a = n("913144"),
                s = n("492249");
            let i = null,
                r = [s.DispatchErrorCodes.REDISTRIBUTABLE_INSTALL_FAILED, s.DispatchErrorCodes.POST_INSTALL_FAILED, s.DispatchErrorCodes.POST_INSTALL_CANCELLED],
                o = [s.DispatchErrorCodes.APPLICATION_NOT_FOUND, s.DispatchErrorCodes.APPLICATION_LOAD_FAILED, s.DispatchErrorCodes.INTERRUPTED, s.DispatchErrorCodes.DESERIALIZATION_FAILED];
            class u extends l.default.Store {
                getLastError() {
                    return i
                }
            }
            u.displayName = "DispatchApplicationErrorStore";
            var d = new u(a.default, {
                DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
                    null != i && null != i.code && r.includes(i.code) && (i = null)
                },
                DISPATCH_APPLICATION_ERROR: function(e) {
                    let {
                        error: t
                    } = e;
                    i = null != t.code && o.includes(t.code) ? null : t
                }
            })
        },
        600133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                typeToDismissibleContent: function() {
                    return eR
                },
                default: function() {
                    return ew
                }
            }), n("222007");
            var l = n("866227"),
                a = n.n(l),
                s = n("446674"),
                i = n("741397"),
                r = n("151426"),
                o = n("95410"),
                u = n("913144"),
                d = n("363996"),
                c = n("49671"),
                f = n("376556"),
                E = n("299285"),
                _ = n("7331"),
                h = n("889293"),
                S = n("10641"),
                T = n("180273"),
                p = n("579565"),
                N = n("789563"),
                I = n("619443"),
                m = n("875037"),
                A = n("398654"),
                g = n("54346"),
                C = n("681937"),
                R = n("619259"),
                M = n("179803"),
                O = n("38654"),
                L = n("267567"),
                v = n("167209"),
                D = n("104032"),
                y = n("897107"),
                P = n("44678"),
                x = n("807345"),
                U = n("840895"),
                b = n("143573"),
                F = n("703537"),
                j = n("662285"),
                G = n("808422"),
                k = n("374363"),
                w = n("271938"),
                B = n("250404"),
                H = n("533222"),
                V = n("42203"),
                Y = n("47319"),
                K = n("320268"),
                Q = n("26989"),
                z = n("305961"),
                W = n("42887"),
                q = n("385649"),
                X = n("957255"),
                Z = n("669280"),
                J = n("945956"),
                $ = n("568307"),
                ee = n("18494"),
                et = n("162771"),
                en = n("168851"),
                el = n("102985"),
                ea = n("381684"),
                es = n("330387"),
                ei = n("697218"),
                er = n("800762"),
                eo = n("160299"),
                eu = n("357957"),
                ed = n("521012"),
                ec = n("340412"),
                ef = n("437712"),
                eE = n("167726"),
                e_ = n("773336"),
                eh = n("719923"),
                eS = n("189459"),
                eT = n("316661"),
                ep = n("352326"),
                eN = n("49111"),
                eI = n("492397"),
                em = n("411511"),
                eA = n("646718"),
                eg = n("843455"),
                eC = n("353927");
            let eR = {
                    [eN.NoticeTypes.LOCALIZED_PRICING]: r.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
                    [eN.NoticeTypes.DOWNLOAD_NAG]: r.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
                    [eN.NoticeTypes.CONNECT_SPOTIFY]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
                    [eN.NoticeTypes.CONNECT_PLAYSTATION]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
                    [eN.NoticeTypes.MFA_SMS_BACKUP]: r.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
                    [eN.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
                    [eN.NoticeTypes.PREMIUM_REACTIVATE]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
                    [eN.NoticeTypes.DROPS_GO_LIVE_BANNER]: r.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
                    [eN.NoticeTypes.DROPS_ENDED_INCOMPLETE]: r.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
                    [eN.NoticeTypes.BOUNCED_EMAIL_DETECTED]: r.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
                    [eN.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: r.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
                    [eN.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
                    [eN.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
                    [eN.NoticeTypes.POMELO_ELIGIBLE]: r.DismissibleContent.NAGBAR_NOTICE_POMELO
                },
                eM = {
                    [eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
                    [eN.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
                    [eN.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
                    [eN.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
                    [eN.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
                    [eN.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
                    [eN.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
                    [eN.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
                    [eN.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
                    [eN.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
                    [eN.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: "hideEslatamLanguageLaunchNotice"
                },
                eO = new Set([eN.NoticeTypes.NO_INPUT_DETECTED, eN.NoticeTypes.STREAMER_MODE, eN.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eN.NoticeTypes.SPOTIFY_AUTO_PAUSED, eN.NoticeTypes.DISPATCH_ERROR, eN.NoticeTypes.DISPATCH_ERROR, eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.NoticeTypes.BLOCKED_BY_PROXY]),
                eL = {},
                ev = Object.freeze({
                    id: null,
                    message: null,
                    buttonText: null,
                    callback: void 0,
                    metadata: null
                }),
                eD = null;

            function ey(e) {
                return eM[e] + "-untilAtLeast"
            }

            function eP(e, t, n) {
                var l, a, s;
                if (null == e) return;
                let i = eM[e];
                if (null != i && !t && o.default.set(i, !0), eO.has(e) && (eL[e] = !0), null != n && null != i) {
                    ;
                    l = e, a = n, o.default.set(ey(l), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
                } else {
                    ;
                    s = e, o.default.remove(ey(s))
                }
            }

            function ex(e) {
                if (null == e) return !1;
                let t = eR[e];
                if (null != t) return (0, S.isDismissibleContentDismissed)(t);
                let n = eM[e];
                if (null != n) {
                    let t = function(e) {
                        let t = o.default.get(ey(e));
                        return null != t ? a(t) : null
                    }(e);
                    if (null != t) return null == t ? void 0 : t.isAfter(a())
                }
                let l = eL[e];
                return !!l || (null != n && "" !== n ? o.default.get(n) : !!eO.has(e) && l)
            }
            let eU = [eN.NoticeTypes.QUARANTINED, eN.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eN.NoticeTypes.VIEWING_ROLES, eN.NoticeTypes.INVITED_TO_SPEAK, eN.NoticeTypes.LURKING_GUILD, eN.NoticeTypes.VOICE_DISABLED, eN.NoticeTypes.NO_INPUT_DETECTED, eN.NoticeTypes.HARDWARE_MUTE, eN.NoticeTypes.H264_DISABLED, eN.NoticeTypes.DISPATCH_ERROR, eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.NoticeTypes.SPOTIFY_AUTO_PAUSED, eN.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eN.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eN.NoticeTypes.BLOCKED_BY_PROXY, eN.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eN.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eN.NoticeTypes.GUILD_RAID_NOTIFICATION, eN.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH, eN.NoticeTypes.UNCLAIMED_ACCOUNT, eN.NoticeTypes.POMELO_ELIGIBLE, eN.NoticeTypes.PENDING_MEMBER, eN.NoticeTypes.OUTBOUND_PROMOTION, eN.NoticeTypes.CORRUPT_INSTALLATION, eN.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eN.NoticeTypes.STREAMER_MODE, eN.NoticeTypes.SCHEDULED_MAINTENANCE, eN.NoticeTypes.BOUNCED_EMAIL_DETECTED, eN.NoticeTypes.UNVERIFIED_ACCOUNT, eN.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eN.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eN.NoticeTypes.PREMIUM_UNCANCEL, eN.NoticeTypes.PREMIUM_MISSING_PAYMENT, eN.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eN.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eN.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eN.NoticeTypes.PREMIUM_REACTIVATE, eN.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eN.NoticeTypes.MFA_SMS_BACKUP, eN.NoticeTypes.APPLICATION_TEST_MODE, eN.NoticeTypes.LOCALIZED_PRICING, eN.NoticeTypes.DOWNLOAD_NAG, eN.NoticeTypes.CONNECT_SPOTIFY, eN.NoticeTypes.CONNECT_PLAYSTATION, eN.NoticeTypes.SURVEY, eN.NoticeTypes.SERVER_USAGE_SURVEY, eN.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eN.NoticeTypes.DROPS_GO_LIVE_BANNER, eN.NoticeTypes.DROPS_ENDED_INCOMPLETE, eN.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR],
                eb = [eN.NoticeTypes.QUARANTINED, eN.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eN.NoticeTypes.VIEWING_ROLES, eN.NoticeTypes.INVITED_TO_SPEAK, eN.NoticeTypes.LURKING_GUILD, eN.NoticeTypes.VOICE_DISABLED, eN.NoticeTypes.NO_INPUT_DETECTED, eN.NoticeTypes.HARDWARE_MUTE, eN.NoticeTypes.H264_DISABLED, eN.NoticeTypes.DISPATCH_ERROR, eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eN.NoticeTypes.SPOTIFY_AUTO_PAUSED, eN.NoticeTypes.BLOCKED_BY_PROXY, eN.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eN.NoticeTypes.PENDING_MEMBER, eN.NoticeTypes.STREAMER_MODE, eN.NoticeTypes.SCHEDULED_MAINTENANCE],
                eF = {
                    [eN.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
                        predicate: () => (0, A.shouldShowRaidNotificationNagbar)().show && !ex(eN.NoticeTypes.GUILD_RAID_NOTIFICATION),
                        metadata: () => {
                            let e = {
                                dismissUntil: a().add(3, "hours").toDate()
                            };
                            return e
                        }
                    },
                    [eN.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
                        predicate: e => {
                            let {
                                currentUser: t,
                                selectedGuildId: n
                            } = e;
                            if (null == n) return !1;
                            let l = Q.default.getMember(n, t.id);
                            return null != l && !l.isPending && (0, C.hasAutomodQuarantinedProfile)(l)
                        }
                    },
                    [eN.NoticeTypes.QUARANTINED]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return t.hasFlag(eN.UserFlags.QUARANTINED)
                        }
                    },
                    [eN.NoticeTypes.VIEWING_ROLES]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return O.default.isViewingRoles(t)
                        }
                    },
                    [eN.NoticeTypes.INVITED_TO_SPEAK]: {
                        predicate: e => {
                            let {
                                voiceState: t
                            } = e;
                            return (0, G.getAudienceRequestToSpeakState)(t) === G.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
                        }
                    },
                    [eN.NoticeTypes.LURKING_GUILD]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return null != t && L.default.isLurking(t)
                        }
                    },
                    [eN.NoticeTypes.VOICE_DISABLED]: {
                        predicate: () => null != J.default.getRemoteDisconnectVoiceChannelId()
                    },
                    [eN.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
                        predicate: () => null != J.default.getLastSessionVoiceChannelId()
                    },
                    [eN.NoticeTypes.NO_INPUT_DETECTED]: {
                        predicate: e => {
                            let {
                                voiceChannelId: t,
                                voiceState: n
                            } = e, l = V.default.getChannel(t), a = (null == l ? void 0 : l.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                            return !1 === W.default.getInputDetected() && !a
                        }
                    },
                    [eN.NoticeTypes.H264_DISABLED]: {
                        predicate: e => {
                            let {
                                voiceChannelId: t
                            } = e, n = V.default.getChannel(t);
                            return !W.default.getOpenH264() && null != t && er.default.hasVideo(t) && null != n && n.isGuildStageVoice()
                        }
                    },
                    [eN.NoticeTypes.HARDWARE_MUTE]: {
                        predicate: () => J.default.isConnected() && W.default.isHardwareMute(),
                        metadata: () => {
                            let e = W.default.getInputDeviceId(),
                                t = H.default.getVendor(e),
                                n = H.default.getModel(e);
                            if (null != t && null != n) return {
                                vendor: t,
                                model: n
                            }
                        }
                    },
                    [eN.NoticeTypes.DISPATCH_ERROR]: {
                        predicate: () => null != eS.default.getLastError(),
                        metadata: () => ({
                            error: eS.default.getLastError()
                        })
                    },
                    [eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
                        predicate: () => null != eT.default.getLastProgress(),
                        metadata: () => eT.default.getLastProgress()
                    },
                    [eN.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
                        predicate: () => j.default.wasAutoPaused()
                    },
                    [eN.NoticeTypes.BLOCKED_BY_PROXY]: {
                        predicate: () => !ex(eN.NoticeTypes.BLOCKED_BY_PROXY) && b.default.blockedByProxy && U.default.getCurrentConfig({
                            location: "notice_store"
                        }).eligibleForNotice
                    },
                    [eN.NoticeTypes.UNCLAIMED_ACCOUNT]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return null != t && !t.isClaimed()
                        }
                    },
                    [eN.NoticeTypes.PENDING_MEMBER]: {
                        predicate: e => {
                            var t, n, l;
                            let {
                                selectedGuildId: a,
                                currentUser: s
                            } = e;
                            return null !== (l = null != a && null != s && !(null === (t = z.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eN.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = Q.default.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== l && l
                        }
                    },
                    [eN.NoticeTypes.OUTBOUND_PROMOTION]: {
                        predicate: () => (0, P.shouldShowOutboundPromotionNotice)()
                    },
                    [eN.NoticeTypes.CORRUPT_INSTALLATION]: {
                        predicate: () => e_.isPlatformEmbedded && (!i.default.supported() || ep.default.isCorruptInstallation())
                    },
                    [eN.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
                        predicate: e => {
                            let {
                                voiceChannelId: t
                            } = e;
                            return null != t && er.default.hasVideo(t) && !W.default.supports(eC.Features.VIDEO) && !ex(eN.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
                        }
                    },
                    [eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return eh.default.canRedeemPremiumPerks(t) && K.default.getDetectedOffPlatformPremiumPerks().length > 0
                        },
                        metadata: () => {
                            let e = K.default.getDetectedOffPlatformPremiumPerks();
                            return e[0]
                        }
                    },
                    [eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
                        predicate: () => !ex(eN.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && K.default.getDetectedOffPlatformPremiumPerks().length > 0,
                        metadata: () => {
                            let e = K.default.getDetectedOffPlatformPremiumPerks();
                            return e[0]
                        }
                    },
                    [eN.NoticeTypes.STREAMER_MODE]: {
                        predicate: () => el.default.enabled
                    },
                    [eN.NoticeTypes.DOWNLOAD_NAG]: {
                        predicate: () => !e_.isPlatformEmbedded && !ex(eN.NoticeTypes.DOWNLOAD_NAG)
                    },
                    [eN.NoticeTypes.SCHEDULED_MAINTENANCE]: {
                        predicate: () => null != en.default.getScheduledMaintenance(),
                        metadata: () => {
                            let e = en.default.getScheduledMaintenance();
                            if (null != e) return {
                                id: e.id,
                                start: new Date(e.scheduled_for),
                                end: new Date(e.scheduled_until)
                            }
                        }
                    },
                    [eN.NoticeTypes.SURVEY]: {
                        predicate: () => null != ea.default.getCurrentSurvey(),
                        metadata: () => ea.default.getCurrentSurvey()
                    },
                    [eN.NoticeTypes.SERVER_USAGE_SURVEY]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return null != t && m.default.getCurrentConfig({
                                location: "notice_store"
                            }).showSurvey && !ex(eN.NoticeTypes.SERVER_USAGE_SURVEY)
                        },
                        metadata: e => {
                            let {
                                selectedGuildId: t,
                                currentUser: n
                            } = e;
                            return {
                                selectedGuildId: t,
                                currentUser: n
                            }
                        }
                    },
                    [eN.NoticeTypes.UNVERIFIED_ACCOUNT]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return (null == t ? void 0 : t.email) != null && !t.verified
                        }
                    },
                    [eN.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return null == t ? void 0 : t.hasBouncedEmail
                        }
                    },
                    [eN.NoticeTypes.CONNECT_SPOTIFY]: {
                        predicate: () => !j.default.hasConnectedAccount() && $.default.isObservedAppRunning(f.default.get(eN.PlatformTypes.SPOTIFY).name) && !ex(eN.NoticeTypes.CONNECT_SPOTIFY)
                    },
                    [eN.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
                        predicate: () => {
                            let {
                                enabled: e
                            } = y.default.getCurrentConfig({
                                location: "window32_deprecation_message"
                            });
                            return e && (null === c.default || void 0 === c.default ? void 0 : c.default.os.arch) === "ia32" && (null === c.default || void 0 === c.default ? void 0 : c.default.process.platform) === "win32"
                        },
                        metadata: () => {
                            let e = {
                                dismissUntil: a().add(5, "days").toDate()
                            };
                            return e
                        }
                    },
                    [eN.NoticeTypes.CONNECT_PLAYSTATION]: {
                        predicate: () => Y.default.isSuggestedAccountType(eN.PlatformTypes.PLAYSTATION) && null == Y.default.getAccount(null, eN.PlatformTypes.PLAYSTATION) && !ex(eN.NoticeTypes.CONNECT_PLAYSTATION)
                    },
                    [eN.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
                        predicate: () => {
                            let e = ec.default.getAlmostExpiringTrialOffers([eA.PremiumSubscriptionSKUs.TIER_2]);
                            return e.length > 0 && !ex(eN.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
                        }
                    },
                    [eN.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
                        predicate: () => {
                            let e = ec.default.getAlmostExpiringTrialOffers([eA.PremiumSubscriptionSKUs.TIER_0]);
                            return e.length > 0 && !ex(eN.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
                        }
                    },
                    [eN.NoticeTypes.PREMIUM_UNCANCEL]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t ? a(t.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eN.SubscriptionStatusTypes.CANCELED && 1 >= a().diff(a(t.canceledAt), "days"), i = null != t && a(t.currentPeriodEnd).isBefore(a()), r = null != t && t.status === eN.SubscriptionStatusTypes.CANCELED && !i && l <= 7 && l >= 0 && (0, eh.isPremiumExactly)(n, eA.PremiumTypes.TIER_2) && !s && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(eN.NoticeTypes.PREMIUM_UNCANCEL) && r
                        },
                        metadata: e => {
                            var t;
                            let {
                                premiumSubscription: n
                            } = e, l = null != n ? a(n.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = null != n ? null === (t = (0, eh.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != s ? eh.default.getPremiumType(s) : null;
                            return {
                                daysLeft: l,
                                premiumType: i,
                                premiumSubscription: n
                            }
                        }
                    },
                    [eN.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t ? a(t.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = null != t ? a(t.currentPeriodEnd).diff(a(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && a(t.currentPeriodEnd).isBefore(a()), r = ef.default.applicationIdsFetched.has(eA.PREMIUM_SUBSCRIPTION_APPLICATION), o = ef.default.getForApplication(eA.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eh.getPremiumPlanItem)(t) : null, d = null != u ? eh.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
                                let {
                                    skuId: t,
                                    consumed: n
                                } = e;
                                return !n && t === d
                            }).length > 0, f = null != t && l <= (s > 14 ? 7 : 2) && l >= 0 && t.status !== eN.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(eN.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
                        },
                        metadata: e => {
                            var t;
                            let {
                                premiumSubscription: n
                            } = e, l = null != n ? a(n.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, s = null != n ? null === (t = (0, eh.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != s ? eh.default.getPremiumType(s) : null;
                            return {
                                daysLeft: l,
                                premiumType: i,
                                premiumSubscription: n
                            }
                        }
                    },
                    [eN.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t && null != t.paymentSourceId ? eu.default.getPaymentSource(t.paymentSourceId) : null, s = null != t && a(t.currentPeriodEnd).isBefore(a()), i = null != t && t.status === eN.SubscriptionStatusTypes.PAST_DUE && !s && null != l && l.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(eN.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
                        },
                        metadata: e => {
                            let {
                                premiumSubscription: t
                            } = e;
                            return {
                                premiumSubscription: t
                            }
                        }
                    },
                    [eN.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t && a(t.currentPeriodEnd).isBefore(a()), s = null != t && t.status === eN.SubscriptionStatusTypes.PAST_DUE && !l && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(eN.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && s
                        },
                        metadata: e => {
                            let {
                                premiumSubscription: t
                            } = e;
                            return {
                                premiumSubscription: t
                            }
                        }
                    },
                    [eN.NoticeTypes.MFA_SMS_BACKUP]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return null != t && t.mfaEnabled && !t.hasFlag(eN.UserFlags.MFA_SMS) && !t.hasFlag(eN.UserFlags.STAFF) && !t.hasFlag(eN.UserFlags.PARTNER) && !ex(eN.NoticeTypes.MFA_SMS_BACKUP)
                        }
                    },
                    [eN.NoticeTypes.APPLICATION_TEST_MODE]: {
                        predicate: () => null != eE.default.testModeApplicationId,
                        metadata: () => {
                            if (null == eE.default.testModeApplicationId) return {};
                            let e = eE.default.testModeApplicationId,
                                t = E.default.getApplication(e),
                                n = null != t ? t.name : e;
                            return {
                                applicationName: n,
                                applicationId: e
                            }
                        }
                    },
                    [eN.NoticeTypes.PREMIUM_REACTIVATE]: {
                        predicate: () => !ex(eN.NoticeTypes.PREMIUM_REACTIVATE) && D.default.shouldShowReactivateNotice()
                    },
                    [eN.NoticeTypes.LOCALIZED_PRICING]: {
                        predicate: e => {
                            let {
                                isLocalizedPromoEnabled: t
                            } = e;
                            return !ex(eN.NoticeTypes.LOCALIZED_PRICING) && t
                        },
                        metadata: e => {
                            let {
                                premiumSubscription: t
                            } = e;
                            return {
                                premiumSubscription: t
                            }
                        }
                    },
                    [eN.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
                        predicate: e => {
                            let {
                                premiumSubscription: t,
                                currentUser: n
                            } = e, l = null != t && a(t.currentPeriodEnd).isBefore(a()), s = null != t && null != t.paymentSourceId ? eu.default.getPaymentSource(t.paymentSourceId) : null, i = null != s && eg.PREPAID_PAYMENT_SOURCES.has(s.type), r = null != t && t.status === eN.SubscriptionStatusTypes.PAST_DUE && !l && i && !n.hasFreePremium() && !t.isPurchasedExternally;
                            return !ex(eN.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
                        },
                        metadata: e => {
                            let {
                                premiumSubscription: t
                            } = e, n = (null == t ? void 0 : t.status) === eN.SubscriptionStatusTypes.PAST_DUE ? a().diff(a(t.currentPeriodStart), "days") : 0, l = a(null == t ? void 0 : t.currentPeriodStart).add((0, eh.getBillingGracePeriodDays)(t), "days").toDate();
                            return {
                                daysPastDue: n,
                                dismissUntil: l
                            }
                        }
                    },
                    [eN.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
                        predicate: () => !ex(eN.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, p.getShowDropsNoticeBanner)(em.PartnerGame.FORTNITE),
                        metadata: () => ({
                            partnerGame: em.PartnerGame.FORTNITE
                        })
                    },
                    [eN.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
                        predicate: () => T.default.isCurrentQuestInterrupted && null != T.default.currentDropQuestGameTitle,
                        metadata: () => ({
                            gameTitle: T.default.currentDropQuestGameTitle,
                            reloadCallback: () => window.location.reload(!0)
                        })
                    },
                    [eN.NoticeTypes.POMELO_ELIGIBLE]: {
                        predicate: () => (0, v.isEligibleForPomelo)() && !ex(eN.NoticeTypes.POMELO_ELIGIBLE)
                    },
                    [eN.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
                        predicate: () => !ex(eN.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, S.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, p.getShowDropsEndedIncompleteBanner)(em.PartnerGame.FORTNITE),
                        metadata: () => ({
                            partnerGame: em.PartnerGame.FORTNITE
                        })
                    },
                    [eN.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e, n = null != t ? z.default.getGuild(t) : null;
                            return null != t && null != R.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eN.GuildFeatures.COMMUNITY)) && !ex(eN.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
                        },
                        metadata: e => {
                            let {
                                selectedGuildId: t
                            } = e, n = {
                                dismissUntil: a().add(2, "hours").toDate()
                            };
                            if (null != t) {
                                let e = R.default.getMentionRaidDetected(t);
                                null != e && (n.decisionId = e.decisionId)
                            }
                            return n
                        }
                    },
                    [eN.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
                        predicate: () => !ex(eN.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== h.default.getEligibleGuildsForNagActivate().length && (0, _.isCreatorMonetizationNagActivateEnabled)()
                    },
                    [eN.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
                        predicate: e => {
                            let {
                                selectedGuildId: t
                            } = e;
                            return !ex(eN.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, M.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
                        }
                    },
                    [eN.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
                        predicate: e => {
                            let {
                                currentUser: t
                            } = e;
                            return F.isEligibleForNotice(t)
                        }
                    },
                    [eN.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: {
                        predicate: () => d.ESLatamLaunchExperiment.getCurrentConfig({
                            location: "notice_store"
                        }).enabled && !ex(eN.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH)
                    }
                };

            function ej() {
                if (!I.default.isConnected()) return !1;
                eD = null;
                let e = ei.default.getCurrentUser();
                if (null == e) return !1;
                let t = ed.default.getPremiumSubscription(),
                    n = eo.default.isLocalizedPromoEnabled,
                    l = et.default.getGuildId(),
                    a = ee.default.getVoiceChannelId(),
                    s = null != a ? er.default.getVoiceStateForChannel(a) : null,
                    i = eI.CONFERENCE_MODE_ENABLED ? eb : eU;
                for (let u of i)
                    if (null != eF[u] && eF[u].predicate({
                            selectedGuildId: l,
                            voiceChannelId: a,
                            voiceState: s,
                            currentUser: e,
                            premiumSubscription: t,
                            isLocalizedPromoEnabled: n
                        })) {
                        var r, o;
                        let n = null === (r = (o = eF[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
                            currentUser: e,
                            premiumSubscription: t,
                            selectedGuildId: l
                        });
                        eD = {
                            ...ev,
                            type: u,
                            metadata: n
                        };
                        break
                    } null != eD && ex(eD.type) && (eD = null)
            }

            function eG() {
                return !el.default.enabled && delete eL[eN.NoticeTypes.STREAMER_MODE], ej()
            }
            class ek extends s.default.Store {
                initialize() {
                    this.syncWith([ea.default, Z.default, K.default, et.default, x.default, ec.default, B.default, Y.default, k.default, g.default], ej), this.waitFor(ei.default, en.default, z.default, Q.default, J.default, W.default, el.default, N.default, et.default, es.default, j.default, $.default, Z.default, eS.default, eT.default, eE.default, q.default, ed.default, ep.default, K.default, eu.default, X.default, x.default, ef.default, ec.default, Y.default, L.default, T.default, h.default, b.default)
                }
                hasNotice() {
                    return null != eD && null != eD.type
                }
                getNotice() {
                    return null == es.default.getAction() ? eD : null
                }
                isNoticeDismissed(e) {
                    return ex(e)
                }
            }
            ek.displayName = "NoticeStore";
            var ew = new ek(u.default, {
                CURRENT_USER_UPDATE: ej,
                MEDIA_ENGINE_SET_AUDIO_ENABLED: ej,
                CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ej,
                CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ej,
                STATUS_PAGE_SCHEDULED_MAINTENANCE: ej,
                STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ej,
                GUILD_CREATE: ej,
                GUILD_DELETE: ej,
                AUDIO_INPUT_DETECTED: ej,
                AUDIO_SET_DISPLAY_SILENCE_WARNING: ej,
                CERTIFIED_DEVICES_SET: ej,
                AUDIO_SET_INPUT_DEVICE: ej,
                AUDIO_SET_OUTPUT_DEVICE: ej,
                MEDIA_ENGINE_DEVICES: ej,
                RTC_CONNECTION_STATE: ej,
                RPC_APP_AUTHENTICATED: ej,
                RPC_APP_DISCONNECTED: ej,
                USER_CONNECTIONS_UPDATE: ej,
                WINDOW_FOCUS: ej,
                INSTANT_INVITE_CREATE: ej,
                INSTANT_INVITE_REVOKE_SUCCESS: ej,
                SPOTIFY_PLAYER_PAUSE: ej,
                RUNNING_GAMES_CHANGE: ej,
                EXPERIMENTS_FETCH_SUCCESS: ej,
                PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ej,
                DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ej,
                DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ej,
                DEVELOPER_TEST_MODE_RESET: ej,
                BILLING_SUBSCRIPTION_FETCH_SUCCESS: ej,
                DISPATCH_APPLICATION_INSTALL: ej,
                IMPERSONATE_STOP: ej,
                IMPERSONATE_UPDATE: ej,
                GUILD_MEMBER_ADD: function(e) {
                    return e.user.id === w.default.getId() && ej()
                },
                GUILD_MEMBER_UPDATE: ej,
                SURVEY_FETCHED: ej,
                ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ej,
                BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ej,
                BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ej,
                BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ej,
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.some(e => {
                        let {
                            userId: t
                        } = e;
                        return t !== w.default.getId()
                    }) && ej()
                },
                STREAMER_MODE_UPDATE: eG,
                RUNNING_STREAMER_TOOLS_CHANGE: eG,
                DISPATCH_APPLICATION_ERROR: function() {
                    return delete eL[eN.NoticeTypes.DISPATCH_ERROR], ej()
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
                    return delete eL[eN.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], ej()
                },
                DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
                    return ej()
                },
                DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
                    return ej()
                },
                NOTICE_SHOW: function(e) {
                    eD = e.notice
                },
                NOTICE_DISMISS: function(e) {
                    return null != eD && (null == e.id || e.id === eD.id) && (eP(eD.type, e.isTemporary, e.untilAtLeast), ej())
                },
                NOTICE_DISABLE: function(e) {
                    let {
                        noticeType: t
                    } = e;
                    return eP(t), ej()
                },
                LOGOUT: function() {
                    eL = {}, eD = null
                },
                SUBSCRIPTION_PLANS_FETCH_SUCCESS: ej,
                AUTO_MODERATION_MENTION_RAID_DETECTION: ej,
                CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ej,
                PROXY_BLOCKED_REQUEST: ej
            })
        },
        220677: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("584074"),
                r = e => {
                    let {
                        value: t = 0,
                        text: n,
                        className: a,
                        ...r
                    } = e;
                    return null != n ? (0, l.jsx)("div", {
                        className: s(i.wrapper, a),
                        ...r,
                        children: n
                    }) : t > 0 ? (0, l.jsx)("div", {
                        className: s(i.wrapper, a),
                        ...r,
                        children: t
                    }) : null
                }
        },
        440351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("145131"),
                u = n("296165"),
                d = n("926622");
            class c extends a.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: a,
                        onAgree: s,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, l.jsxs)(o.default, {
                        className: u.gatedContent,
                        justify: o.default.Justify.CENTER,
                        align: o.default.Align.CENTER,
                        direction: o.default.Direction.VERTICAL,
                        children: [(0, l.jsx)("div", {
                            className: i(u.image, f)
                        }), (0, l.jsx)("div", {
                            className: i(u.title, d.marginBottom8),
                            children: e
                        }), (0, l.jsx)("div", {
                            className: i(u.description, d.marginBottom20),
                            children: t
                        }), (0, l.jsxs)(o.default, {
                            justify: o.default.Justify.CENTER,
                            align: o.default.Align.CENTER,
                            grow: 0,
                            children: [null != a ? (0, l.jsx)(r.Button, {
                                className: u.action,
                                size: r.ButtonSizes.LARGE,
                                color: r.ButtonColors.PRIMARY,
                                onClick: c,
                                children: a
                            }) : null, null != n ? (0, l.jsx)(r.Button, {
                                className: u.action,
                                color: r.Button.Colors.RED,
                                size: r.ButtonSizes.LARGE,
                                onClick: s,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }
            var f = c
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("77078"),
                o = n("782340"),
                u = n("440318");
            let d = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends a.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: a = d.BLOCK,
                        style: s
                    } = this.props;
                    return (0, l.jsxs)("div", {
                        className: i(t, a),
                        style: s,
                        children: [(0, l.jsxs)(r.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [o.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, l.jsx)(r.Text, {
                            className: i(u.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = d;
            var f = c
        },
        471654: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("904575"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: a = "currentColor",
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: [(0, l.jsxs)("g", {
                            clipPath: "url(#clip0)",
                            children: [(0, l.jsx)("path", {
                                d: "M17.5053 1.76605C17.5053 1.76605 26.7154 8.05195 23.2155 16.8783C19.7157 25.7047 12.7544 23.2563 15.3562 20.6775C17.9581 18.0986 12.2862 16.3487 8.65588 13.0024L17.4976 1.76605",
                                fill: a,
                                fillOpacity: "0.6"
                            }), (0, l.jsx)("path", {
                                d: "M16.945 10.4082C15.0032 12.8796 12.2632 14.1153 10.1449 13.6701L2.75381 23.0875C2.62942 23.2463 2.47493 23.3791 2.29918 23.4782C2.12343 23.5774 1.92987 23.6408 1.72956 23.6651C1.52925 23.6893 1.32613 23.6738 1.13181 23.6195C0.937493 23.5652 0.755794 23.473 0.597107 23.3484C0.436561 23.2245 0.302154 23.0701 0.201652 22.8939C0.101149 22.7178 0.0365434 22.5235 0.011566 22.3222C-0.0134115 22.121 0.00173486 21.9168 0.0561299 21.7214C0.110525 21.5261 0.203091 21.3434 0.328479 21.184L7.68121 11.7821C6.70648 9.83259 7.24373 6.84698 9.21623 4.35258C11.6646 1.25185 15.3563 0.0929071 17.4977 1.76608C19.639 3.43925 19.378 7.30749 16.945 10.4082Z",
                                fill: a
                            })]
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0",
                                children: (0, l.jsx)("rect", {
                                    width: t,
                                    height: n,
                                    fill: a
                                })
                            })
                        })]
                    })
                }, s.BugIcon, void 0, {
                    size: 32
                })
        },
        11539: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("54549"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M12 4.66668L11.06 3.72668L6.83332 7.95335L7.77332 8.89335L12 4.66668ZM14.8266 3.72668L7.77332 10.78L4.98665 8.00002L4.04665 8.94002L7.77332 12.6667L15.7733 4.66668L14.8266 3.72668ZM0.273315 8.94002L3.99998 12.6667L4.93998 11.7267L1.21998 8.00002L0.273315 8.94002Z",
                            fill: a,
                            className: s
                        })
                    })
                }, s.DoubleCheckmarkLargeIcon, void 0, {
                    size: 16
                })
        },
        733350: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("691096"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        background: r,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13 0C16.5198 0 19.4422 2.61306 19.9288 6.00063C19.9525 6.00021 19.9762 6 20 6C22.2091 6 24 7.79086 24 10C24 10.7708 23.782 11.4907 23.4043 12.1013C21.9807 10.7964 20.0834 10 18 10C15.0389 10 12.4535 11.6088 11.0703 14H5C2.243 14 0 11.757 0 9C0 6.243 2.243 4 5 4C6.393 4 7.678 4.454 9.175 6.58L9.992 6.004C9.018 4.62 7.987 3.815 7.022 3.357C8.26 1.31 10.49 0 13 0Z"
                        }), (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M21.293 17.292L19 19.585V13.999H17V19.585L14.707 17.292L13.293 18.706L18 23.413L22.707 18.706L21.293 17.292Z"
                        })]
                    })
                }, s.DownloadIcon, void 0, {
                    size: 24
                })
        },
        824326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("945863"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z"
                        })
                    })
                }, s.DpadIcon, void 0, {
                    size: 16
                })
        },
        496657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("400033"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 22 23",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                className: s,
                                fill: a,
                                d: "M4.3231,4.4332 C4.3231,4.4332 4.5811,4.0472 4.6881,3.8762 C4.7951,3.7052 4.4111,3.3012 4.2621,3.1732 C4.1131,3.0452 3.8781,3.1092 3.8781,3.1092 C2.0031,3.9402 1.0651,5.6452 0.9371,5.9862 C0.8091,6.3272 1.2631,6.6992 1.5981,6.8812 C1.7521,6.9652 1.9971,6.7792 2.1481,6.6412 L2.1991,6.5892 L2.2781,6.5092 L2.2791,6.5082 L7.3801,11.5892 L8.0771,10.8922 L9.3581,9.6112 L4.3161,4.4402 L4.3231,4.4332 Z"
                            }), (0, l.jsx)("path", {
                                className: s,
                                fill: a,
                                d: "M16.3738,9.7931 L16.6428,9.5371 L19.0598,11.9311 C19.0768,11.9461 19.0948,11.9521 19.1108,11.9521 C19.1568,11.9521 19.1948,11.9101 19.1948,11.9101 C19.1948,11.9101 21.8708,9.2551 21.8798,9.2461 C21.9588,9.1681 21.8798,9.1251 21.8798,9.1251 L19.8158,7.0471 L19.8128,7.0501 L19.5298,6.7731 L19.6878,6.6211 L20.0258,6.6601 L19.9618,6.2121 L20.0468,6.1261 L19.9198,5.4801 C19.4788,4.8551 18.2708,3.8541 18.2708,3.8541 L17.6388,3.7401 L17.5748,3.8251 L17.0988,3.7541 L17.1448,4.1601 L17.1748,4.1901 L17.0338,4.3321 L16.2538,3.5691 C16.2538,3.5691 11.7278,1.1111 11.4868,0.9971 C11.3508,0.9341 11.2508,0.8921 11.1548,0.8921 C11.0808,0.8921 11.0088,0.9171 10.9258,0.9761 C10.7338,1.1111 10.8468,1.3831 10.8468,1.3831 L13.6608,6.5831 L14.2238,7.1411 L14.0478,7.3171 L14.0478,7.3171 L13.9828,7.3821 L13.5328,7.3201 L13.6018,7.7661 L13.4718,7.8961 L13.4488,7.8731 C13.4278,7.8521 13.3988,7.8411 13.3708,7.8411 C13.3428,7.8411 13.3148,7.8521 13.2928,7.8731 C13.2498,7.9161 13.2498,7.9861 13.2928,8.0291 L13.3158,8.0521 L13.2538,8.1151 L13.2378,8.0981 C13.2158,8.0771 13.1878,8.0661 13.1598,8.0661 C13.1308,8.0661 13.1028,8.0771 13.0818,8.0981 C13.0388,8.1411 13.0388,8.2111 13.0818,8.2541 L13.0988,8.2711 L11.9148,9.4611 L11.8878,9.4341 C11.8658,9.4131 11.8378,9.4021 11.8098,9.4021 C11.7818,9.4021 11.7538,9.4131 11.7318,9.4341 C11.6888,9.4771 11.6888,9.5471 11.7318,9.5901 L11.7598,9.6171 L11.6968,9.6801 L11.6758,9.6601 C11.6548,9.6381 11.6258,9.6271 11.5988,9.6271 C11.5698,9.6271 11.5418,9.6381 11.5198,9.6601 C11.4778,9.7031 11.4778,9.7721 11.5198,9.8151 L11.5408,9.8361 L11.3868,9.9921 L11.3658,10.1901 L11.4468,10.2731 L11.4448,10.2741 L11.3468,10.3741 L4.9578,16.7621 L4.8748,16.6931 L4.6098,16.7311 L4.4598,16.8831 L4.4498,16.8731 C4.4278,16.8511 4.3998,16.8401 4.3718,16.8401 C4.3438,16.8401 4.3148,16.8511 4.2938,16.8731 C4.2508,16.9161 4.2508,16.9851 4.2938,17.0281 L4.3058,17.0401 L4.2438,17.1041 L4.2378,17.0981 C4.2168,17.0761 4.1878,17.0651 4.1598,17.0651 C4.1318,17.0651 4.1038,17.0761 4.0818,17.0981 C4.0398,17.1411 4.0398,17.2101 4.0818,17.2531 L4.0888,17.2611 L2.9198,18.4501 L2.8958,18.4261 C2.8738,18.4041 2.8468,18.3941 2.8178,18.3941 C2.7898,18.3941 2.7618,18.4041 2.7398,18.4261 C2.6968,18.4691 2.6968,18.5391 2.7398,18.5821 L2.7658,18.6071 L2.7038,18.6701 L2.6848,18.6511 C2.6628,18.6301 2.6348,18.6191 2.6058,18.6191 C2.5788,18.6191 2.5498,18.6301 2.5288,18.6511 C2.4858,18.6941 2.4858,18.7641 2.5288,18.8071 L2.5488,18.8281 L2.4618,18.9171 L2.0088,18.8361 L2.0428,19.3421 L1.8998,19.4881 L2.0238,20.1701 C2.0238,20.1701 2.2138,20.7641 2.6048,21.1581 C2.9838,21.5401 3.5618,21.7231 3.5868,21.7421 L4.2398,21.8561 L4.4008,21.6981 L4.8508,21.7711 L4.7768,21.3261 L4.9138,21.1921 L4.9768,21.2551 C4.9978,21.2761 5.0258,21.2871 5.0538,21.2871 C5.0818,21.2871 5.1108,21.2761 5.1318,21.2551 C5.1748,21.2111 5.1748,21.1421 5.1318,21.0991 L5.0698,21.0371 L5.1338,20.9751 L5.1878,21.0291 C5.2088,21.0511 5.2378,21.0621 5.2658,21.0621 C5.2938,21.0621 5.3218,21.0511 5.3438,21.0291 C5.3868,20.9861 5.3868,20.9171 5.3438,20.8741 L5.2908,20.8201 L6.4778,19.6491 L6.5298,19.7011 C6.5508,19.7231 6.5798,19.7331 6.6078,19.7331 C6.6358,19.7331 6.6638,19.7231 6.6858,19.7011 C6.7278,19.6581 6.7278,19.5881 6.6858,19.5451 L6.6348,19.4951 L6.6978,19.4321 L6.7418,19.4761 C6.7628,19.4971 6.7908,19.5081 6.8188,19.5081 C6.8478,19.5081 6.8758,19.4971 6.8968,19.4761 C6.9398,19.4331 6.9398,19.3631 6.8968,19.3201 L6.8538,19.2771 L6.9868,19.1471 L7.0348,18.8621 L6.9638,18.7911 L6.9648,18.7901 L7.0938,18.6621 L13.4398,12.3141 L13.4368,12.3081 L13.5608,12.4361 L13.7598,12.4141 L13.9388,12.2341 L13.9678,12.2631 C13.9898,12.2841 14.0178,12.2951 14.0458,12.2951 C14.0738,12.2951 14.1028,12.2841 14.1238,12.2631 C14.1668,12.2201 14.1668,12.1501 14.1238,12.1071 L14.0948,12.0781 L14.1578,12.0161 L14.1798,12.0381 C14.2008,12.0591 14.2288,12.0701 14.2578,12.0701 C14.2858,12.0701 14.3138,12.0591 14.3348,12.0381 C14.3778,11.9951 14.3778,11.9251 14.3348,11.8821 L14.3128,11.8591 L15.4988,10.6711 L15.5298,10.7021 C15.5508,10.7231 15.5788,10.7341 15.6068,10.7341 C15.6358,10.7341 15.6638,10.7231 15.6848,10.7021 C15.7278,10.6591 15.7278,10.5891 15.6848,10.5461 L15.6538,10.5151 L15.7168,10.4521 L15.7408,10.4771 C15.7628,10.4981 15.7908,10.5091 15.8188,10.5091 C15.8468,10.5091 15.8748,10.4981 15.8968,10.4771 C15.9398,10.4331 15.9398,10.3641 15.8968,10.3211 L15.8728,10.2961 L16.0048,10.1641 L16.4458,10.2331 L16.3738,9.7931 Z"
                            }), (0, l.jsx)("polygon", {
                                className: s,
                                fill: a,
                                points: "17.255 16.968 14.442 14.836 13.941 14.32 12 16.261 12.488 16.727 14.321 19.476 16.793 22.183 19.642 19.525"
                            })]
                        })
                    })
                }, s.StaffBadgeIcon, void 0, {
                    size: 16
                })
        },
        834179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("763377"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
                        })
                    })
                }, s.CircleQuestionIcon, void 0, {
                    size: 24
                })
        },
        826267: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("342072"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            d: "M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z",
                            fill: a,
                            className: s
                        })
                    })
                }, s.InboxIcon, void 0, {
                    size: 24
                })
        },
        672571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("440275"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M6.11111111,3.88888889 L6.11111111,0.833333333 L9.16666667,3.88888889 L6.11111111,3.88888889 Z M1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,3.33333333 L6.66666667,0 L1.11111111,0 Z",
                            transform: "translate(3 3)"
                        })
                    })
                }, s.FileIcon, void 0, {
                    size: 16
                })
        },
        689476: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                s = n("424823"),
                i = n("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 18,
                        height: n = 18,
                        color: a = "currentColor",
                        foreground: s,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        children: (0, l.jsx)("polygon", {
                            fillRule: "nonzero",
                            className: s,
                            fill: a,
                            points: "15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
                        })
                    })
                }, s.PlusSmallIcon, void 0, {
                    size: 18
                })
        },
        430025: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function s(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: s = "currentColor",
                    foreground: i,
                    background: r,
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(o),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, l.jsxs)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: [(0, l.jsx)("path", {
                            className: r,
                            fill: s,
                            fillRule: "nonzero",
                            d: "M22.031 12.665c-.923-.4338-1.9384-.665-2.9778-.665-.695 0-1.3663.1013-2 .29V11h-4V7h-2v4h-4v2h4v4h1.29c-.1887.6337-.29 1.305-.29 2 0 1.0394.2312 2.055.665 2.978-.2207.0146-.4424.022-.665.022-2.6522 0-5.1957-1.0536-7.071-2.929C3.1067 17.1958 2.053 14.6523 2.053 12c0-5.5228 4.4772-10 10-10 2.6522 0 5.1957 1.0536 7.071 2.929 1.8754 1.8753 2.929 4.4188 2.929 7.071 0 .2225-.0074.4443-.022.665zM15.4457 13c-.9793.59-1.8023 1.413-2.3924 2.3924V13h2.3924z"
                        }), (0, l.jsx)("path", {
                            className: i,
                            fill: s,
                            d: "M19.0532 14c1.326 0 2.598.5268 3.5355 1.4645.9377.9376 1.4645 2.2094 1.4645 3.5355 0 1.326-.5268 2.598-1.4645 3.5355C21.651 23.4732 20.3793 24 19.0532 24c-1.326 0-2.5978-.5268-3.5355-1.4645C14.58 21.598 14.0532 20.326 14.0532 19c0-2.7614 2.2386-5 5-5zm-1 7l3-2-3-2v4z"
                        })]
                    })
                })
            }
        },
        868308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                quitAndInstall: function() {
                    return s
                }
            });
            var l = n("976789");
            let a = new l.default;

            function s() {
                a.quitAndInstall()
            }
        },
        313483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateDecorators: function() {
                    return r
                },
                getSelectionScope: function() {
                    return o
                }
            }), n("424973");
            var l = n("954172");
            n("76385");
            var a = n("955513");
            n("202752");
            var s = n("751520");
            n("49111");
            let i = {
                [a.ComponentTypes.FILTER]: l.Filter,
                [a.ComponentTypes.ANSWER]: l.Answer
            };

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = [];
                return Object.keys(e).forEach(n => {
                    let l = e[n];
                    t.push({
                        strategy: (e, t, l) => (function(e, t, n, l) {
                            t.findEntityRanges(t => {
                                let n = t.getEntity();
                                return null !== n && e.getEntity(n).getType() === l
                            }, n)
                        })(l, e, t, n),
                        component: i[l.componentType]
                    })
                }), t
            }

            function o(e, t) {
                let {
                    focusOffset: n,
                    anchorOffset: l
                } = t.getSelection();
                return (0, s.getSelectionScope)(e, n, l)
            }
        }
    }
]);