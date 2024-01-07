(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["87935"], {
        305861: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ShieldUserIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M3.47 5.18c.27-.4.64-.74 1.1-.96l6.09-3.05a3 3 0 0 1 2.68 0l6.1 3.05A2.83 2.83 0 0 1 21 6.75v3.5a14.17 14.17 0 0 1-8.42 12.5c-.37.16-.79.16-1.16 0A14.18 14.18 0 0 1 3 9.77V6.75c0-.57.17-1.11.47-1.57Zm2.95 10.3A12.18 12.18 0 0 0 12 20.82a12.18 12.18 0 0 0 5.58-5.32A9.49 9.49 0 0 0 12.47 14h-.94c-1.88 0-3.63.55-5.11 1.49ZM12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        533806: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UserIcon: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("669491"),
                a = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...i
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(i),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M12 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM11.53 11A9.53 9.53 0 0 0 2 20.53c0 .81.66 1.47 1.47 1.47h.22c.24 0 .44-.17.5-.4.29-1.12.84-2.17 1.32-2.91.14-.21.43-.1.4.15l-.26 2.61c-.02.3.2.55.5.55h11.7a.5.5 0 0 0 .5-.55l-.27-2.6c-.02-.26.27-.37.41-.16.48.74 1.03 1.8 1.32 2.9.06.24.26.41.5.41h.22c.81 0 1.47-.66 1.47-1.47A9.53 9.53 0 0 0 12.47 11h-.94Z",
                        className: o
                    })
                })
            }
        },
        795228: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                u = n("446674"),
                a = n("895026"),
                r = n("36402");
            let o = {};

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = (0, u.useStateFromStores)([r.default], () => r.default.getRoleMemberCount(e));
                return l.useEffect(() => {
                    if (null == e) return;
                    let n = o[e],
                        l = null != n && t > 0 && Date.now() - n < t;
                    !l && (o[e] = Date.now(), a.fetchMemberCounts(e))
                }, [e, t]), n
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return I
                }
            });
            var l = n("693566"),
                u = n.n(l),
                a = n("872717"),
                r = n("913144"),
                o = n("851387"),
                i = n("36402"),
                s = n("49111");
            async function c(e) {
                try {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await a.default.get({
                            url: s.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                i.default.shouldFetch(e) && await c(e)
            }
            let f = new u({
                maxAge: 1e4
            });

            function I(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    l = "".concat(e, "-").concat(t);
                if (!n || null == f.get(l)) {
                    var u, r;
                    return f.set(l, !0), u = e, r = t, a.default.get({
                        url: s.Endpoints.GUILD_ROLE_MEMBER_IDS(u, r)
                    }).then(e => (o.default.requestMembersById(u, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                u = n("913144");
            let a = {},
                r = {};
            class o extends l.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? a[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = r[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            o.displayName = "GuildRoleMemberCountStore";
            var i = new o(u.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    a[t] = n, r[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: l
                    } = e, u = a[t];
                    if (null == u) return !1;
                    u[n] = l
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: l
                    } = e, u = a[t];
                    if (null == u || null == u[n]) return !1;
                    let r = Object.keys(l).length;
                    u[n] += r
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = l[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, l = a[t];
                    if (null == l || null == l[n]) return !1;
                    l[n] = Math.max(l[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == a[t] && (a[t] = {}), a[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete a[t.id], delete r[t.id]
                }
            })
        },
        470055: function(e, t, n) {
            "use strict";
            let l, u, a, r, o;
            n.r(t), n.d(t, {
                InteractionModalState: function() {
                    return s
                },
                default: function() {
                    return h
                }
            });
            var i, s, c = n("627445"),
                d = n.n(c),
                f = n("446674"),
                I = n("913144"),
                E = n("819689"),
                p = n("798609"),
                C = n("274800");
            (i = s || (s = {}))[i.IN_FLIGHT = 0] = "IN_FLIGHT", i[i.ERRORED = 1] = "ERRORED", i[i.SUCCEEDED = 2] = "SUCCEEDED";
            class _ extends f.default.Store {
                getModalState(e) {
                    return e !== l ? null : u
                }
            }
            _.displayName = "InteractionModalStore";
            var h = new _(I.default, {
                LOGOUT: function() {
                    return l = null, u = null, a = null, r = null, o = null, !0
                },
                INTERACTION_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === o && (E.default.deleteMessage(r, a, !0), a = null, r = null, o = null), !1
                },
                INTERACTION_IFRAME_MODAL_CREATE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return t === o && (E.default.deleteMessage(r, a, !0), a = null, r = null, o = null), !1
                },
                INTERACTION_QUEUE: function(e) {
                    let {
                        messageId: t,
                        nonce: n,
                        data: i
                    } = e;
                    switch (i.interactionType) {
                        case p.InteractionTypes.APPLICATION_COMMAND:
                            return a = t, r = i.channelId, o = n, !1;
                        case p.InteractionTypes.MODAL_SUBMIT:
                            return d(null == l || 1 === u || 2 === u, "cannot submit multiple modals at once"), l = n, u = 0, setTimeout(() => {
                                l === n && 0 === u && (0, C.setFailed)(n)
                            }, 1e4), !0;
                        default:
                            return !1
                    }
                },
                INTERACTION_SUCCESS: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (u = 2, !0)
                },
                INTERACTION_FAILURE: function(e) {
                    let {
                        nonce: t
                    } = e;
                    return null != t && t === l && (u = 1, !0)
                }
            })
        },
        732523: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useModalState: function() {
                    return g
                },
                useIframeModalState: function() {
                    return O
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660");
            var l = n("884691"),
                u = n("627445"),
                a = n.n(u),
                r = n("446674"),
                o = n("872717"),
                i = n("913144"),
                s = n("798609"),
                c = n("763898"),
                d = n("711562"),
                f = n("274800"),
                I = n("271938"),
                E = n("42203"),
                p = n("26989"),
                C = n("162771"),
                _ = n("315102"),
                h = n("299039"),
                M = n("812684"),
                R = n("470055"),
                m = n("524094"),
                T = n("49111"),
                v = n("782340");
            let S = e => {
                let t = !0;
                return e.forEach(e => {
                    !e() && (t = !1)
                }), t
            };

            function N(e) {
                return l.useMemo(() => {
                    let t = C.default.getGuildId(),
                        n = null != t && null != e.bot ? p.default.getMember(t, e.bot.id) : void 0,
                        l = _.default.getApplicationIconURL({
                            id: e.id,
                            icon: e.icon,
                            botIconFirst: !0,
                            bot: null != n ? e.bot : void 0
                        }),
                        u = null != n && null != e.bot ? e.bot.username : e.name,
                        a = (0, d.default)(e.id);
                    return {
                        applicationIconURL: l,
                        applicationName: u,
                        applicationBaseUrl: a
                    }
                }, [e.id, e.icon, e.name, e.bot])
            }

            function g(e, t) {
                var n;
                let {
                    application: u,
                    customId: d,
                    components: p,
                    channelId: C
                } = e, _ = null === (n = E.default.getChannel(C)) || void 0 === n ? void 0 : n.guild_id, m = (0, c.default)(), [g, O] = l.useState(null), [L, x] = l.useState(null), y = (0, r.useStateFromStores)([R.default], () => R.default.getModalState(L), [L]), D = l.useMemo(() => (0, M.createComponents)(p, u.id, _), [p, u.id, _]), U = l.useRef(new Set), w = l.useCallback(() => {
                    O(null), x(null), S(U.current) && x(function(e, t) {
                        let n = h.default.fromTimestamp(Date.now()),
                            l = e.channelId,
                            u = E.default.getChannel(l);
                        a(null != u, "expected channel");
                        let r = A(e.customId, e.components, []);
                        (0, f.addQueued)(n, {
                            data: {
                                interactionType: s.InteractionTypes.MODAL_SUBMIT
                            }
                        });
                        let i = () => {
                            (null == t || !t.aborted) && o.default.post({
                                url: T.Endpoints.INTERACTIONS,
                                body: {
                                    type: s.InteractionTypes.MODAL_SUBMIT,
                                    application_id: e.application.id,
                                    channel_id: u.id,
                                    guild_id: u.guild_id,
                                    data: {
                                        id: e.id,
                                        custom_id: e.customId,
                                        components: r
                                    },
                                    session_id: I.default.getSessionId(),
                                    nonce: n
                                },
                                signal: t
                            }).catch(e => {
                                429 === e.status ? setTimeout(i, 1e3 * e.body.retry_after) : (0, f.setFailed)(n)
                            })
                        };
                        return i(), n
                    }(e, m))
                }, [m, e]);
                l.useEffect(() => {
                    y === R.InteractionModalState.SUCCEEDED && (i.default.dispatch({
                        type: "CLEAR_INTERACTION_MODAL_STATE",
                        id: d
                    }), t()), y === R.InteractionModalState.ERRORED && O(v.default.Messages.INTERACTION_FORM_SUBMISSION_FAILED)
                }, [L, y, t, d]);
                let {
                    applicationIconURL: b,
                    applicationName: B
                } = N(u);
                return {
                    components: D,
                    applicationIconURL: b,
                    applicationName: B,
                    submissionState: y,
                    error: g,
                    validators: U.current,
                    onSubmit: w
                }
            }

            function O(e) {
                let {
                    application: t,
                    customId: n
                } = e, {
                    applicationIconURL: l,
                    applicationName: u,
                    applicationBaseUrl: r
                } = N(t), o = E.default.getChannel(e.channelId);
                a(null != o, "channel should not be null");
                let i = "".concat(e.channelId, ":").concat(t.id, ":").concat(n),
                    s = {
                        instance_id: i,
                        custom_id: n,
                        channel_id: e.channelId
                    };
                null != o.guild_id && "" !== o.guild_id && (s.guild_id = o.guild_id);
                let c = new URL(null != r ? r : "");
                c.pathname = e.iframePath;
                let d = c.toString();
                return {
                    applicationIconURL: l,
                    applicationName: u,
                    applicationBaseUrl: r,
                    queryParams: s,
                    iframeUrl: d
                }
            }
            let A = (e, t, n) => t.map((t, l) => {
                let u = [...n, l];
                switch (t.type) {
                    case s.ComponentType.ACTION_ROW:
                        var r;
                        return {
                            type: t.type, components: A(e, null !== (r = t.components) && void 0 !== r ? r : [], u)
                        };
                    case s.ComponentType.INPUT_TEXT: {
                        let n = m.default.getInteractionComponentState(e, u);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            value: (null == n ? void 0 : n.type) === t.type ? n.value : null
                        }
                    }
                    case s.ComponentType.STRING_SELECT: {
                        let n = m.default.getInteractionComponentState(e, u);
                        return {
                            type: t.type,
                            custom_id: t.custom_id,
                            values: (null == n ? void 0 : n.type) === t.type ? n.values : null
                        }
                    }
                    default:
                        a(!1, "unreachable")
                }
            })
        },
        394816: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                },
                openInteractionModal: function() {
                    return E
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                a = n("555158"),
                r = n("258078"),
                o = n("307311"),
                i = n("470055"),
                s = n("732523"),
                c = n("383247"),
                d = n("782340"),
                f = n("907926");

            function I(e) {
                let {
                    customId: t,
                    title: n,
                    onClose: I,
                    transitionState: E
                } = e, {
                    components: p,
                    applicationIconURL: C,
                    applicationName: _,
                    submissionState: h,
                    error: M,
                    validators: R,
                    onSubmit: m
                } = (0, s.useModalState)(e, I);
                return (0, l.jsx)("form", {
                    onSubmit: e => {
                        e.preventDefault(), m()
                    },
                    children: (0, l.jsxs)(u.ModalRoot, {
                        transitionState: E,
                        children: [(0, l.jsxs)(u.ModalHeader, {
                            separator: !1,
                            children: [(0, l.jsx)(u.Avatar, {
                                src: C,
                                size: u.AvatarSizes.SIZE_24,
                                "aria-label": _,
                                className: f.applicationIcon
                            }), (0, l.jsx)(r.default, {
                                color: r.default.Colors.HEADER_PRIMARY,
                                size: r.default.Sizes.SIZE_24,
                                children: n
                            }), (0, l.jsx)(u.ModalCloseButton, {
                                onClick: I,
                                className: f.closeButton
                            })]
                        }), (0, l.jsxs)(u.ModalContent, {
                            children: [null != M && "" !== M ? (0, l.jsx)(a.default, {
                                messageType: a.HelpMessageTypes.ERROR,
                                className: f.submissionWarning,
                                children: M
                            }) : null, (0, l.jsx)(a.default, {
                                messageType: a.HelpMessageTypes.WARNING,
                                className: f.submissionWarning,
                                children: d.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
                                    applicationName: _
                                })
                            }), (0, l.jsx)(u.FormSection, {
                                children: (0, l.jsx)(o.ComponentStateContextProvider, {
                                    modal: {
                                        customId: t
                                    },
                                    validators: R,
                                    children: (0, c.renderComponents)(p)
                                })
                            })]
                        }), (0, l.jsxs)(u.ModalFooter, {
                            children: [(0, l.jsx)(u.Button, {
                                type: "submit",
                                color: u.Button.Colors.BRAND,
                                size: u.Button.Sizes.MEDIUM,
                                submitting: h === i.InteractionModalState.IN_FLIGHT,
                                children: d.default.Messages.SUBMIT
                            }), (0, l.jsx)(u.Button, {
                                look: u.Button.Looks.LINK,
                                color: u.Button.Colors.PRIMARY,
                                onClick: I,
                                children: d.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }

            function E(e) {
                (0, u.openModal)(t => (0, l.jsx)(I, {
                    ...t,
                    ...e
                }))
            }
        },
        555158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HelpMessageTypes: function() {
                    return u
                },
                default: function() {
                    return E
                }
            });
            var l, u, a = n("37983");
            n("884691");
            var r = n("414456"),
                o = n.n(r),
                i = n("77078"),
                s = n("36694"),
                c = n("381546"),
                d = n("68238"),
                f = n("423487"),
                I = n("557296");
            (l = u || (u = {}))[l.WARNING = 0] = "WARNING", l[l.INFO = 1] = "INFO", l[l.ERROR = 2] = "ERROR", l[l.POSITIVE = 3] = "POSITIVE";
            var E = function(e) {
                let {
                    children: t,
                    messageType: n,
                    className: l,
                    textColor: u = "text-normal",
                    textVariant: r = "text-sm/medium"
                } = e, E = function(e) {
                    switch (e) {
                        case 0:
                            return f.default;
                        case 1:
                            return d.default;
                        case 2:
                            return c.default;
                        case 3:
                            return s.default
                    }
                }(n), p = function(e) {
                    switch (e) {
                        case 0:
                            return I.warning;
                        case 1:
                            return I.info;
                        case 2:
                            return I.error;
                        case 3:
                            return I.positive
                    }
                }(n);
                return (0, a.jsxs)("div", {
                    className: o(I.container, p, l),
                    children: [(0, a.jsx)("div", {
                        className: I.iconDiv,
                        children: (0, a.jsx)(E, {
                            className: I.icon
                        })
                    }), (0, a.jsx)(i.Text, {
                        className: I.text,
                        color: u,
                        variant: r,
                        children: t
                    })]
                })
            }
        },
        346955: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("509317"),
                r = n("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: u,
                            className: a,
                            d: "M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"
                        })
                    })
                }, a.FolderIcon, void 0, {
                    size: 24
                })
        },
        781896: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("533806"),
                r = n("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: a,
                            d: "M16.002 8.00598C16.002 10.211 14.208 12.006 12.002 12.006C9.79695 12.006 8.00195 10.211 8.00195 8.00598C8.00195 5.80098 9.79595 4.00598 12.002 4.00598C14.208 4.00598 16.002 5.80098 16.002 8.00598ZM4.00195 19.006C4.00195 15.473 7.29195 13.006 12.002 13.006C16.713 13.006 20.002 15.473 20.002 19.006V20.006H4.00195V19.006Z",
                            fill: u
                        })
                    })
                }, a.UserIcon, void 0, {
                    size: 24
                })
        },
        682344: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("469563"),
                a = n("305861"),
                r = n("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 23,
                        color: u = "currentColor",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 23",
                        children: (0, l.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, l.jsx)("path", {
                                className: a,
                                fill: u,
                                d: "M19.487 5.126L10.487 0.126C10.184 -0.042 9.81798 -0.042 9.51498 0.126L0.514977 5.126C0.197977 5.302 0.000976562 5.636 0.000976562 5.999C0.000976562 6.693 0.114977 22.999 10.001 22.999C19.887 22.999 20.001 6.693 20.001 5.999C20.001 5.636 19.804 5.302 19.487 5.126ZM10.001 5.999C11.382 5.999 12.501 7.118 12.501 8.499C12.501 9.88 11.382 10.999 10.001 10.999C8.61998 10.999 7.50098 9.88 7.50098 8.499C7.50098 7.118 8.61998 5.999 10.001 5.999ZM6.25098 16C6.25098 13.699 7.69998 12.25 10.001 12.25C12.302 12.25 13.751 13.699 13.751 16H6.25098Z"
                            })
                        })
                    })
                }, a.ShieldUserIcon, void 0, {
                    size: 23
                })
        }
    }
]);