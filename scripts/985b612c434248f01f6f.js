(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28110"], {
        689223: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0678b217e47589207930.mp4"
        },
        429777: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3d23b8d31086b7901261.png"
        },
        430857: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d3456e390fa9fdbbc0c4.webm"
        },
        743506: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007");
            var u, r, a = n("37983"),
                l = n("884691"),
                o = n("77078"),
                s = n("851387"),
                i = n("130037"),
                c = n("772280"),
                d = n("58608"),
                f = n("387111"),
                _ = n("49111"),
                E = n("782340"),
                A = n("676702");
            (r = u || (u = {}))[r.INITIAL = 0] = "INITIAL", r[r.OTHER_REASON = 1] = "OTHER_REASON";

            function M() {
                return [{
                    value: 0,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_NONE
                }, {
                    value: 1 * _.Durations.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_1HR
                }, {
                    value: 6 * _.Durations.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_6HR
                }, {
                    value: 12 * _.Durations.HOUR,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_12HR
                }, {
                    value: 1 * _.Durations.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_24HR
                }, {
                    value: 3 * _.Durations.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_3D
                }, {
                    value: 7 * _.Durations.DAY,
                    label: E.default.Messages.DELETE_MESSAGE_HISTORY_OPTION_7D
                }]
            }
            let S = M()[1].value;

            function N(e) {
                let {
                    guildId: t,
                    user: u,
                    location: r,
                    userIds: N,
                    onBanMultiple: T,
                    transitionState: O,
                    onClose: I,
                    canBulkBan: R = !1
                } = e, [m, g] = l.useState(S), [p, C] = l.useState(""), [v, h] = l.useState(0), [L, D] = l.useState(!1), b = (0, i.useTrackModerationAction)(t, {
                    location: r,
                    targetUserId: null == u ? void 0 : u.id,
                    targets: N
                }), k = l.useCallback(() => {
                    if (null != T) {
                        let e = null != N && (null == N ? void 0 : N.size) > 0 && R;
                        if (!e || L) return;
                        if ("" === p.trim() && !L) {
                            D(!0);
                            return
                        }
                        T(t, [...N], m, p)
                    } else {
                        if (null == u) return;
                        s.default.banUser(t, null == u ? void 0 : u.id, m, p)
                    }
                    b(i.ModerationActionType.BAN), I()
                }, [T, b, I, N, R, L, p, t, m, u]), y = l.useCallback(e => {
                    g(e)
                }, []), B = l.useCallback(e => {
                    let {
                        value: t
                    } = e;
                    C(t), D(!1)
                }, []), x = l.useCallback(e => {
                    C(e), L && D(!1)
                }, [L]), H = l.useCallback(() => {
                    C(""), h(1)
                }, []), U = l.useCallback(() => {
                    h(0)
                }, []), P = [{
                    name: E.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT,
                    value: E.default.Messages.BAN_REASON_OPTION_SPAM_ACCOUNT
                }, {
                    name: E.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT,
                    value: E.default.Messages.BAN_REASON_OPTION_HACKED_ACCOUNT
                }, {
                    name: E.default.Messages.BAN_REASON_OPTION_BREAKING_RULES,
                    value: E.default.Messages.BAN_REASON_OPTION_BREAKING_RULES
                }], F = null != T && null != N ? E.default.Messages.BAN_MULTIPLE_CONFIRM_TITLE.format({
                    count: null == N ? void 0 : N.size
                }) : null == u ? "" : E.default.Messages.BAN_CONFIRM_TITLE.format({
                    username: "@".concat(f.default.getName(t, null, u))
                });
                return (0, a.jsxs)(o.ModalRoot, {
                    transitionState: O,
                    children: [(0, a.jsx)(o.ModalHeader, {
                        separator: !1,
                        children: (0, a.jsx)(o.Heading, {
                            variant: "heading-md/semibold",
                            children: F
                        })
                    }), (0, a.jsxs)(o.ModalContent, {
                        className: A.modalContent,
                        children: [(0, a.jsxs)(d.default, {
                            autoPlay: !0,
                            loop: !0,
                            className: A.spacing,
                            width: 400,
                            children: [(0, a.jsx)("source", {
                                src: n("430857"),
                                type: "video/webm"
                            }), (0, a.jsx)("source", {
                                src: n("689223"),
                                type: "video/mp4"
                            }), (0, a.jsx)("img", {
                                alt: "",
                                src: n("429777")
                            })]
                        }), (0, a.jsxs)(o.FormItem, {
                            title: E.default.Messages.FORM_LABEL_REASON_BAN,
                            className: A.spacing,
                            children: [L && (0, a.jsx)(o.FormErrorBlock, {
                                className: A.error,
                                children: E.default.Messages.BAN_REASON_REQUIRED_ERROR
                            }), (0, a.jsx)(o.Sequencer, {
                                steps: [0, 1],
                                step: v,
                                children: (e => {
                                    switch (v) {
                                        case 0:
                                            return (0, a.jsxs)(a.Fragment, {
                                                children: [(0, a.jsx)(o.RadioGroup, {
                                                    value: p,
                                                    options: e,
                                                    onChange: B,
                                                    radioItemClassName: A.radioItemStyles
                                                }), (0, a.jsxs)(o.Clickable, {
                                                    onClick: H,
                                                    className: A.banReasonOtherClickable,
                                                    children: [(0, a.jsx)(o.Text, {
                                                        variant: "text-md/medium",
                                                        color: "none",
                                                        children: E.default.Messages.OTHER
                                                    }), (0, a.jsx)(c.default, {
                                                        width: "16",
                                                        height: "16"
                                                    })]
                                                })]
                                            });
                                        case 1:
                                            return (0, a.jsx)(o.TextArea, {
                                                maxLength: _.MAX_REASON_LENGTH,
                                                onChange: x,
                                                value: p,
                                                rows: 5,
                                                autoFocus: !0
                                            })
                                    }
                                })(P)
                            })]
                        }), (0, a.jsx)(o.FormItem, {
                            title: E.default.Messages.FORM_LABEL_DELETE_MESSAGE_HISTORY,
                            className: A.spacing,
                            children: (0, a.jsx)(o.SingleSelect, {
                                options: M(),
                                value: m,
                                onChange: y
                            })
                        })]
                    }), (() => {
                        switch (v) {
                            case 0:
                                return (0, a.jsxs)(o.ModalFooter, {
                                    className: A.footer,
                                    children: [(0, a.jsx)(o.Button, {
                                        type: "button",
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        onClick: I,
                                        children: E.default.Messages.CANCEL
                                    }), (0, a.jsx)(o.Button, {
                                        type: "submit",
                                        color: o.Button.Colors.RED,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: k,
                                        children: E.default.Messages.BAN
                                    })]
                                });
                            case 1:
                                return (0, a.jsxs)(o.ModalFooter, {
                                    className: A.footerStepped,
                                    children: [(0, a.jsx)(o.Button, {
                                        className: A.cancel,
                                        innerClassName: A.cancel,
                                        type: "button",
                                        look: o.Button.Looks.LINK,
                                        color: o.Button.Colors.PRIMARY,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: U,
                                        children: E.default.Messages.BACK
                                    }), (0, a.jsx)(o.Button, {
                                        type: "submit",
                                        color: o.Button.Colors.RED,
                                        size: o.Button.Sizes.SMALL,
                                        onClick: k,
                                        children: E.default.Messages.BAN
                                    })]
                                })
                        }
                    })()]
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var u, r = n("872717"),
                a = n("49111"),
                l = n("782340");
            u = class extends r.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? l.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: a.Links.STATUS,
                        details: "".concat(t)
                    }) : l.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: a.Links.STATUS
                    }))
                }
            }
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return E
                },
                useTrackMemberFilterRolesUsed: function() {
                    return A
                },
                MemberSafetyFlagType: function() {
                    return a
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return M
                },
                ModerationActionType: function() {
                    return l
                },
                useTrackModerationAction: function() {
                    return S
                },
                trackMembersPageViewed: function() {
                    return N
                }
            });
            var u, r, a, l, o = n("884691"),
                s = n("812204"),
                i = n("716241"),
                c = n("271938"),
                d = n("599110"),
                f = n("49111");

            function _(e, t, n) {
                var u;
                let r = {
                    ...t,
                    ...(0, i.collectGuildAnalyticsMetadata)(null !== (u = t.guild_id) && void 0 !== u ? u : n)
                };
                d.default.track(e, r)
            }

            function E(e) {
                let t = o.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        _(f.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function A(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        _(f.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(u = a || (a = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", u.COMMUNICATION_DISABLED = "communication_disabled", u.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", u.USERNAME_QUARANTINED = "username_quarantined";

            function M(e) {
                let t = o.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: s.default.MEMBER_SAFETY_PAGE
                        };
                        _(f.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function S(e, t) {
                let {
                    location: n,
                    targetUserId: u,
                    targets: r
                } = t, a = o.useCallback(t => {
                    let a = {
                        action_type: t,
                        mod_user_id: c.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != u ? u : void 0,
                        targets: null != r ? r : void 0
                    };
                    _(f.AnalyticEvents.MODERATION_ACTION, a)
                }, [e, n, u, r]);
                return a
            }

            function N(e, t) {
                _(f.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(r = l || (l = {})).BAN = "ban", r.KICK = "kick", r.MUTE = "mute", r.TIMEOUT = "timeout", r.ADD_ROLE = "add_role", r.REMOVE_ROLE = "remove_role", r.COPY_ID = "copy_id", r.CHANGE_NICKNAME = "change_nickname"
        },
        153498: function(e, t, n) {
            "use strict";

            function u(e) {
                let {} = e;
                return !1
            }

            function r(e, t) {
                return !1
            }

            function a(e) {
                return !1
            }

            function l() {
                return !1
            }

            function o() {
                return !1
            }

            function s(e) {
                let {} = e;
                return !1
            }

            function i(e, t) {
                return !1
            }

            function c() {
                return !1
            }

            function d(e) {}

            function f(e) {}

            function _(e) {}

            function E(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return u
                },
                navigateToMemberVerification: function() {
                    return r
                },
                navigateToRootTab: function() {
                    return a
                },
                resetToAuthRoute: function() {
                    return l
                },
                resetToPanelsUI: function() {
                    return o
                },
                pushModal: function() {
                    return s
                },
                popModal: function() {
                    return i
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
                    return _
                },
                useIsModalOpen: function() {
                    return E
                }
            })
        },
        719347: function(e, t, n) {
            "use strict";
            var u, r;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return a
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return l
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return o
                },
                MediaLayoutType: function() {
                    return u
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return s
                }
            });
            let a = 550,
                l = 350,
                o = 40;
            (r = u || (u = {})).STATIC = "STATIC", r.RESPONSIVE = "RESPONSIVE", r.MOSAIC = "MOSAIC";
            let s = 20
        },
        58608: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var u = n("37983"),
                r = n("884691"),
                a = n("118810"),
                l = n("446674"),
                o = n("206230"),
                s = n("719347");
            let i = e => {
                let {
                    externalRef: t,
                    autoPlay: n,
                    playOnHover: i,
                    responsive: c,
                    mediaLayoutType: d,
                    ...f
                } = e, _ = (0, l.useStateFromStores)([o.default], () => o.default.useReducedMotion), E = r.useRef(null);

                function A() {
                    var e;
                    i && (null == E || null === (e = E.current) || void 0 === e || e.play())
                }

                function M() {
                    var e;
                    i && (null == E || null === (e = E.current) || void 0 === e || e.pause())
                }
                return r.useLayoutEffect(() => () => {
                    let {
                        current: e
                    } = E;
                    null != e && function(e) {
                        e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                            (0, a.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, a.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                        });
                        try {
                            e.load()
                        } catch (e) {}
                    }(e)
                }, []), r.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(E.current)) : null != t && (t.current = E.current), () => {
                    "function" == typeof t ? t(null) : null != t && (t.current = null)
                }), [t, E]), (0, u.jsx)("video", {
                    ref: E,
                    autoPlay: !_ && !i && n,
                    onMouseEnter: A,
                    onMouseLeave: M,
                    onFocus: A,
                    onBlur: M,
                    style: d === s.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : c ? function() {
                        return {
                            maxWidth: f.width,
                            maxHeight: f.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...f
                })
            };
            var c = r.forwardRef((e, t) => (0, u.jsx)(i, {
                ...e,
                externalRef: t
            }))
        },
        387111: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getNickname: function() {
                    return i
                },
                useName: function() {
                    return d
                },
                default: function() {
                    return f
                }
            });
            var u = n("446674"),
                r = n("42203"),
                a = n("26989"),
                l = n("27618"),
                o = n("158998"),
                s = n("782340");

            function i(e, t, n) {
                if (null == n) return null;
                if (null != e) return a.default.getNick(e, n.id);
                if (null != t) {
                    let e = r.default.getChannel(t);
                    if (null == e ? void 0 : e.isPrivate()) return l.default.getNickname(n.id)
                }
                return null
            }

            function c(e, t, n) {
                var u;
                return null == n ? s.default.Messages.UNKNOWN_USER : null !== (u = i(e, t, n)) && void 0 !== u ? u : o.default.getName(n)
            }

            function d(e, t, n) {
                return (0, u.useStateFromStores)([a.default, r.default, l.default], () => c(e, t, n))
            }
            var f = {
                getNickname: i,
                getName: c,
                useName: d
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("872717"),
                r = n("599110");

            function a(e, t, n) {
                let {
                    trackedActionData: u,
                    ...a
                } = t, l = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = u.properties;
                        "function" == typeof u.properties && (n = u.properties(e)), (0, r.trackNetworkAction)(u.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let o = u.properties;
                        "function" == typeof u.properties && (o = u.properties(e)), (0, r.trackNetworkAction)(u.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...l,
                            ...o
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return a(u.default.get, e, "get")
                },
                post: function(e) {
                    return a(u.default.post, e, "post")
                },
                put: function(e) {
                    return a(u.default.put, e, "put")
                },
                patch: function(e) {
                    return a(u.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(u.default.delete, e, "del")
                }
            }
        }
    }
]);