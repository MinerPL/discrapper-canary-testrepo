(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78995"], {
        46773: function(e, t, l) {
            "use strict";
            e.exports = l.p + "289b6053fc6a89d75452.svg"
        },
        888503: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                AVATAR_DECORATION_PADDING: function() {
                    return R
                },
                default: function() {
                    return T
                }
            }), l("222007");
            var a = l("37983"),
                n = l("884691"),
                r = l("414456"),
                i = l.n(r),
                u = l("769846"),
                s = l("77078"),
                o = l("502651"),
                d = l("390886"),
                c = l("357021"),
                f = l("106435"),
                m = l("79798"),
                h = l("982475"),
                p = l("928201"),
                E = l("118503"),
                v = l("11056"),
                _ = l("159885"),
                x = l("158998"),
                I = l("943722"),
                S = l("49111"),
                g = l("988268"),
                L = l("39141"),
                M = l("782340"),
                C = l("282730");
            let R = (0, _.cssValueToNumber)(u.default.MEMBER_LIST_ITEM_AVATAR_DECORATION_PADDING);
            var T = function(e) {
                let {
                    selected: t = !1,
                    colorString: l,
                    colorRoleName: r,
                    isOwner: u,
                    ownerTooltipText: _,
                    lostPermissionTooltipText: R,
                    isTyping: T = !1,
                    nick: N,
                    user: j,
                    currentUser: A,
                    activities: U,
                    applicationStream: y,
                    status: P,
                    shouldAnimateStatus: b = !1,
                    isMobile: F,
                    premiumSince: O,
                    channel: w,
                    guildId: D,
                    className: k,
                    onMouseDown: B,
                    onKeyDown: G,
                    onClick: H,
                    onContextMenu: V,
                    onClickPremiumGuildIcon: z,
                    onFocus: Z,
                    "aria-controls": W,
                    "aria-expanded": Y,
                    "aria-posinset": q,
                    "aria-setsize": K,
                    id: J,
                    tabIndex: X,
                    itemProps: Q
                } = e, $ = x.default.useName(j), [ee, et] = n.useState(!1), [el, ea] = n.useState(null), {
                    avatarDecorationSrc: en,
                    avatarSrc: er,
                    eventHandlers: ei
                } = (0, f.default)({
                    user: j,
                    size: s.AvatarSizes.SIZE_32,
                    animateOnHover: !(t || ee),
                    guildId: D
                }), eu = e => {
                    ea(e)
                }, es = () => null != u && u && null == R ? (0, a.jsx)(s.Tooltip, {
                    text: null != _ ? _ : M.default.Messages.GUILD_OWNER,
                    children: e => (0, a.jsx)(p.default, {
                        ...e,
                        className: C.ownerIcon
                    })
                }) : null, eo = () => null == O ? null : (0, a.jsx)(s.Tooltip, {
                    text: M.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP.format({
                        date: O
                    }),
                    children: e => (0, a.jsx)(s.Clickable, {
                        onClick: z,
                        tabIndex: -1,
                        children: (0, a.jsx)(E.default, {
                            ...e,
                            className: C.premiumIcon
                        })
                    })
                }), ed = () => {
                    let e = (null == j ? void 0 : j.isClyde()) ? g.BotTagTypes.AI : g.BotTagTypes.BOT;
                    return null != j && j.bot ? (0, a.jsx)(m.default, {
                        className: C.botTag,
                        type: e,
                        verified: j.isVerifiedBot()
                    }) : null
                }, ec = () => (0, a.jsx)(s.NameWithRole, {
                    roleName: r,
                    color: null != l ? l : void 0,
                    name: null != N ? N : $
                }), ef = P === S.StatusTypes.OFFLINE;
                return null == j ? (0, a.jsx)(h.default, {
                    avatarSize: s.AvatarSizes.SIZE_32,
                    className: C.placeholder
                }) : (0, a.jsx)(v.default, {
                    selected: t,
                    className: i(C.member, k, {
                        [C.offline]: ef && !t
                    }),
                    innerClassName: C.memberInner,
                    onClick: H,
                    onKeyDown: G,
                    onMouseDown: B,
                    onContextMenu: V,
                    onMouseEnter: () => {
                        et(!0)
                    },
                    onMouseLeave: () => {
                        et(!1)
                    },
                    name: null == R ? (0, a.jsx)("span", {
                        className: C.username,
                        children: ec()
                    }) : (0, a.jsx)(s.Tooltip, {
                        text: R,
                        children: e => (0, a.jsx)("span", {
                            ...e,
                            className: i(C.username, C.lostPermission),
                            children: ec()
                        })
                    }),
                    avatar: ((e, t) => {
                        let l = b ? s.AnimatedAvatar : s.Avatar,
                            n = (0, o.default)(U) ? S.StatusTypes.STREAMING : P;
                        return n = t ? void 0 : n, (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(l, {
                                ...ei,
                                size: s.AvatarSizes.SIZE_32,
                                src: er,
                                isMobile: F,
                                isTyping: T,
                                status: n,
                                "aria-label": e.username,
                                statusTooltip: !0,
                                avatarDecoration: en,
                                typingIndicatorRef: eu
                            }), (0, a.jsx)(c.default, {
                                confettiSpawnRef: el,
                                shouldFire: T && null != A && e.id !== A.id,
                                confettiLocation: L.ConfettiLocation.MEMBER_USER
                            })]
                        })
                    })(j, ef),
                    subText: (() => {
                        let e = null != U ? U.find(e => e.type === S.ActivityTypes.CUSTOM_STATUS) : null,
                            t = null != e && null != j && (0, d.default)(e, j, w);
                        return (0, a.jsx)(I.default, {
                            className: C.activity,
                            textClassName: C.activityText,
                            emojiClassName: C.activityEmoji,
                            activities: U,
                            applicationStream: y,
                            animate: ee,
                            hideEmoji: !t,
                            hideTooltip: !0,
                            user: j
                        })
                    })(),
                    decorators: (0, a.jsxs)(a.Fragment, {
                        children: [ed(), es(), eo()]
                    }),
                    "aria-controls": W,
                    "aria-expanded": Y,
                    "aria-setsize": K,
                    "aria-posinset": q,
                    id: J,
                    tabIndex: X,
                    onFocus: Z,
                    focusProps: {
                        offset: {
                            top: 4,
                            bottom: 4,
                            left: 4,
                            right: 4
                        }
                    },
                    ...Q
                })
            }
        },
        698644: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CrownIcon: function() {
                    return i
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("669491"),
                r = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M5 18a1 1 0 0 0-1 1 3 3 0 0 0 3 3h10a3 3 0 0 0 3-3 1 1 0 0 0-1-1H5ZM3.04 7.76a1 1 0 0 0-1.52 1.15l2.25 6.42a1 1 0 0 0 .94.67h14.55a1 1 0 0 0 .95-.71l1.94-6.45a1 1 0 0 0-1.55-1.1l-4.11 3-3.55-5.33.82-.82a.83.83 0 0 0 0-1.18l-1.17-1.17a.83.83 0 0 0-1.18 0l-1.17 1.17a.83.83 0 0 0 0 1.18l.82.82-3.61 5.42-4.41-3.07Z",
                        className: u
                    })
                })
            }
        },
        390886: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("385976"),
                n = l("233069"),
                r = l("402671"),
                i = l("991170"),
                u = l("49111");

            function s(e, t, l) {
                if (e.type !== u.ActivityTypes.CUSTOM_STATUS || null == e.emoji) return !1;
                let s = e.emoji;
                if (null == s.id || null == l || !(0, n.isGuildTextChannelType)(l.type)) return !0;
                let o = a.default.getUsableCustomEmojiById(s.id),
                    d = r.default.isInternalEmojiForGuildId(o, l.getGuildId()),
                    c = i.default.can({
                        permission: u.Permissions.USE_EXTERNAL_EMOJIS,
                        user: t,
                        context: l
                    });
                return !d || c
            }
        },
        895026: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                fetchMemberCounts: function() {
                    return c
                },
                requestMembersForRole: function() {
                    return m
                }
            });
            var a = l("693566"),
                n = l.n(a),
                r = l("872717"),
                i = l("913144"),
                u = l("851387"),
                s = l("36402"),
                o = l("49111");
            async function d(e) {
                try {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await r.default.get({
                            url: o.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        l = t.body;
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: l
                    })
                } catch (t) {
                    i.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function c(e) {
                s.default.shouldFetch(e) && await d(e)
            }
            let f = new n({
                maxAge: 1e4
            });

            function m(e, t) {
                let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    a = "".concat(e, "-").concat(t);
                if (!l || null == f.get(a)) {
                    var n, i;
                    return f.set(a, !0), n = e, i = t, r.default.get({
                        url: o.Endpoints.GUILD_ROLE_MEMBER_IDS(n, i)
                    }).then(e => (u.default.requestMembersById(n, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("446674"),
                n = l("913144");
            let r = {},
                i = {};
            class u extends a.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? r[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = i[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            u.displayName = "GuildRoleMemberCountStore";
            var s = new u(n.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: l
                    } = e;
                    r[t] = l, i[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: l,
                        count: a
                    } = e, n = r[t];
                    if (null == n) return !1;
                    n[l] = a
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: l,
                        added: a
                    } = e, n = r[t];
                    if (null == n || null == n[l]) return !1;
                    let i = Object.keys(a).length;
                    n[l] += i
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: l
                    } = e, a = r[t];
                    if (null == a || null == a[l]) return !1;
                    a[l] = a[l] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: l
                    } = e, a = r[t];
                    if (null == a || null == a[l]) return !1;
                    a[l] = Math.max(a[l] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: l
                    } = e;
                    null == r[t] && (r[t] = {}), r[t][l.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete r[t.id], delete i[t.id]
                }
            })
        },
        367376: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return M
                }
            }), l("222007");
            var a = l("917351"),
                n = l.n(a),
                r = l("933805"),
                i = l("52140"),
                u = l("888198"),
                s = l("788554");
            let o = null;

            function d(e, t) {
                let l = {};
                return null != e.mention && null != o && (l = {
                    mention: o
                }), (0, s.default)([e, ...t, l])
            }
            o = l("236180").default;
            let c = {
                    enableBuildOverrides: !1,
                    enableEmojiClick: !0
                },
                f = d(u.default.RULES, [(0, i.default)({
                    enableBuildOverrides: !0
                })]),
                m = n.omit(d(u.default.RULES, [(0, i.default)(c)]), "paragraph", "newline"),
                h = d(u.default.CHANNEL_TOPIC_RULES, [(0, i.default)({
                    ...c,
                    emojiTooltipPosition: "bottom"
                }), {
                    codeBlock: {
                        react: u.default.RULES.text.react
                    }
                }]),
                p = d(u.default.VOICE_CHANNEL_STATUS_RULES, [(0, i.default)({
                    ...c,
                    enableEmojiClick: !1
                })]),
                E = d(u.default.EMBED_TITLE_RULES, [(0, i.default)(c)]),
                v = d(u.default.INLINE_REPLY_RULES, [(0, i.default)(c)]),
                _ = d(u.default.GUILD_VERIFICATION_FORM_RULES, [(0, i.default)(c)]),
                x = d(u.default.GUILD_EVENT_RULES, [(0, i.default)(c)]),
                I = d(u.default.INLINE_REPLY_RULES, [(0, i.default)({
                    ...c,
                    emoji: {
                        height: 14,
                        width: 14,
                        lineHeight: 18
                    }
                })]),
                S = d(u.default.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, i.default)(c)]),
                g = n.omit(d(u.default.RULES, [(0, i.default)({
                    ...c,
                    emoji: {
                        height: 14,
                        width: 14
                    }
                })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading"),
                L = n.omit(u.default.RULES, "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading", "roleMention", "channelMention");
            var M = {
                combineAndInjectMentionRule: d,
                createReactRules: i.default,
                defaultReactRuleOptions: c,
                defaultRules: f,
                guildEventRules: x,
                notifCenterV2MessagePreviewRules: g,
                lockscreenWidgetMessageRules: L,
                astParserFor: r.astParserFor,
                reactParserFor: r.reactParserFor,
                parse: r.reactParserFor(f),
                parseTopic: r.reactParserFor(h),
                parseVoiceChannelStatus: r.reactParserFor(p),
                parseEmbedTitle: r.reactParserFor(E),
                parseInlineReply: r.reactParserFor(v),
                parseGuildVerificationFormRule: r.reactParserFor(_),
                parseGuildEventDescription: r.reactParserFor(x),
                parseAutoModerationSystemMessage: r.reactParserFor(S),
                parseForumPostGuidelines: r.reactParserFor(m),
                parseForumPostMostRecentMessage: r.reactParserFor(I),
                parseNotifCenterMessagePreview: r.reactParserFor(g),
                parseToAST: r.astParserFor(f),
                parseTopicToAST: r.astParserFor(h),
                parseEmbedTitleToAST: r.astParserFor(E),
                parseInlineReplyToAST: r.astParserFor(v),
                parseAutoModerationSystemMessageToAST: r.astParserFor(S)
            }
        },
        236180: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("272030"),
                r = l("643306"),
                i = l("470648"),
                u = l("42203"),
                s = {
                    handleUserContextMenu(e, t, r, i) {
                        let s = u.default.getChannel(t);
                        null != s && (0, n.openContextMenuLazy)(i, async () => {
                            let {
                                default: t
                            } = await l.el("834247").then(l.bind(l, "834247"));
                            return l => (0, a.jsx)(t, {
                                ...l,
                                user: e,
                                channel: s,
                                guildId: r
                            })
                        })
                    },
                    react(e, t, l) {
                        let {
                            userId: n,
                            channelId: u
                        } = e;
                        return null == n ? (0, a.jsx)(r.default, {
                            inlinePreview: l.formatInline,
                            ...e,
                            children: t(e.content, l)
                        }, l.key) : (0, a.jsx)(i.default, {
                            className: "mention",
                            userId: n,
                            channelId: u,
                            inlinePreview: l.noStyleAndInteraction
                        }, l.key)
                    }
                }
        },
        643306: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return j
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                r = l.n(n),
                i = l("917351"),
                u = l.n(i),
                s = l("509043"),
                o = l("446674"),
                d = l("77078"),
                c = l("272030"),
                f = l("888503"),
                m = l("206230"),
                h = l("862205"),
                p = l("895026"),
                E = l("506885"),
                v = l("981601"),
                _ = l("42203"),
                x = l("26989"),
                I = l("305961"),
                S = l("697218"),
                g = l("145131"),
                L = l("666897"),
                M = l("826684"),
                C = l("782340"),
                R = l("191213"),
                T = l("632215");
            let N = (0, h.createExperiment)({
                kind: "user",
                id: "2021-07_role_popout",
                label: "Role Popout",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable Popout",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function j(e) {
                let {
                    roleColor: t,
                    roleId: n,
                    channelId: i,
                    roleName: h,
                    guildId: j,
                    children: A,
                    inlinePreview: U = !1
                } = e, y = (0, o.useStateFromStores)([m.default], () => m.default.roleStyle), P = null != t && 0 !== t && !U, b = P && "dot" === y, F = e => (0, a.jsxs)(L.default, {
                    className: r(T.roleMention),
                    color: "username" === y && P ? t : null,
                    ...e,
                    children: [b && (0, a.jsx)(d.RoleDot, {
                        color: (0, s.int2hex)(t),
                        className: R.roleDot,
                        background: !1,
                        tooltip: !1
                    }), A]
                }), {
                    enabled: O
                } = N.getCurrentConfig({
                    location: "2ec235_1"
                }, {
                    autoTrackExposure: !1
                });
                return !O || U || null == i || null == j || null == n && "@everyone" !== h ? F() : (0, a.jsx)(d.Popout, {
                    preload: async () => {
                        null != n && await (0, p.requestMembersForRole)(j, n)
                    },
                    renderPopout: e => {
                        let t = _.default.getChannel(i),
                            r = I.default.getGuild(j),
                            s = x.default.getMembers(r.id),
                            o = null == n ? r.roles[r.id] : r.roles[n],
                            m = u(s).filter(e => {
                                if ("@everyone" === h || e.roles.includes(n)) {
                                    let t = S.default.getUser(e.userId);
                                    return null != t
                                }
                                return !1
                            }).sortBy(e => {
                                var t;
                                let l = S.default.getUser(e.userId);
                                return (null != l ? null !== (t = e.nick) && void 0 !== t ? t : l.username : "").toLocaleLowerCase()
                            }).map(e => {
                                let n = S.default.getUser(e.userId);
                                return (0, a.jsx)(d.Popout, {
                                    preload: () => (0, E.default)(n.id, n.getAvatarURL(t.guild_id, 80), {
                                        guildId: t.guild_id,
                                        channelId: t.id
                                    }),
                                    renderPopout: l => (0, a.jsx)(v.default, {
                                        ...l,
                                        userId: e.userId,
                                        guildId: r.id,
                                        channelId: t.id
                                    }),
                                    spacing: 14,
                                    children: (i, u) => {
                                        let {
                                            isShown: s
                                        } = u;
                                        return (0, a.jsx)(f.default, {
                                            selected: s,
                                            colorString: e.colorString,
                                            colorRoleName: o.name,
                                            user: n,
                                            isOwner: e.userId === r.ownerId,
                                            nick: e.nick,
                                            premiumSince: null == e.premiumSince ? null : new Date(e.premiumSince),
                                            channel: t,
                                            guildId: r.id,
                                            onContextMenu: e => {
                                                (0, c.openContextMenuLazy)(e, async () => {
                                                    let {
                                                        default: e
                                                    } = await l.el("834247").then(l.bind(l, "834247"));
                                                    return l => (0, a.jsx)(e, {
                                                        ...l,
                                                        user: n,
                                                        guildId: r.id,
                                                        channel: t,
                                                        showMediaItems: !0
                                                    })
                                                })
                                            },
                                            ...i
                                        }, e.userId)
                                    }
                                }, n.id)
                            }).value();
                        return (0, a.jsx)(g.default, {
                            className: T.rolePopout,
                            ...e,
                            children: (0, a.jsxs)(d.Scroller, {
                                className: T.roleScroller,
                                children: [(0, a.jsx)(M.default, {
                                    className: T.roleHeader,
                                    "aria-label": C.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
                                        title: o.name,
                                        count: m.length
                                    }),
                                    children: (0, a.jsxs)("span", {
                                        "aria-hidden": !0,
                                        children: [o.name, " — ", m.length]
                                    })
                                }), m]
                            })
                        })
                    },
                    position: "right",
                    children: F
                })
            }
        },
        470648: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return g
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("627445"),
                r = l.n(n),
                i = l("394846"),
                u = l("446674"),
                s = l("77078"),
                o = l("272030"),
                d = l("980215"),
                c = l("506885"),
                f = l("981601"),
                m = l("42203"),
                h = l("26989"),
                p = l("305961"),
                E = l("27618"),
                v = l("697218"),
                _ = l("666897"),
                x = l("387111"),
                I = l("158998"),
                S = l("680894");

            function g(e) {
                let {
                    className: t,
                    userId: n,
                    channelId: g,
                    inlinePreview: L = !1
                } = e, M = (0, u.useStateFromStores)([v.default], () => v.default.getUser(n)), C = (0, u.useStateFromStores)([m.default], () => m.default.getChannel(g)), R = null != C ? C.getGuildId() : null, T = L || null == M || null == R || null == g ? void 0 : e => {
                    null != C && (0, o.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("834247").then(l.bind(l, "834247"));
                        return t => (0, a.jsx)(e, {
                            ...t,
                            user: M,
                            channel: C,
                            guildId: R
                        })
                    })
                }, N = I.default.useName(M), j = (0, u.useStateFromStores)([m.default, h.default, E.default], () => x.default.getNickname(R, g, M)), A = p.default.getGuild(R), U = (0, d.useClydeEnabled)(A, C), y = U && n === S.CLYDE_AI_USER_ID ? S.CLYDE_AI_MENTION_COLOR : null, P = e => (0, a.jsx)(_.default, {
                    className: t,
                    onContextMenu: T,
                    color: y,
                    ...e,
                    children: "@".concat(null != j ? j : N)
                });
                return L ? P() : (0, a.jsx)(s.Popout, {
                    preload: null == M ? void 0 : () => (0, c.default)(M.id, M.getAvatarURL(R, 80), {
                        guildId: null != R ? R : void 0,
                        channelId: null != g ? g : void 0
                    }),
                    renderPopout: e => (r(null != M, "Unexpected missing user"), (0, a.jsx)(f.default, {
                        userId: M.id,
                        guildId: null != R ? R : void 0,
                        channelId: g,
                        ...e
                    })),
                    position: i.isMobile ? "top" : "right",
                    children: e => P(e)
                })
            }
        },
        357021: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("446674"),
                i = l("471671"),
                u = l("232268"),
                s = l("759432"),
                o = l("798592");

            function d(e) {
                let {
                    confettiSpawnRef: t,
                    shouldFire: l
                } = e, a = (0, r.useStateFromStores)([i.default], () => i.default.isFocused()), u = (0, o.default)(), d = (0, s.default)(t);
                return n.useEffect(() => {
                    a && l && null != d && u.fire(d.x, d.y)
                }, [u, a, d, l]), null
            }

            function c(e) {
                return (0, a.jsx)(u.default, {
                    confettiLocation: e.confettiLocation,
                    children: (0, a.jsx)(d, {
                        ...e
                    })
                })
            }
        },
        759432: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return n
                }
            });
            var a = l("884691");

            function n(e) {
                let t = null == e ? void 0 : e.getBoundingClientRect(),
                    l = null == t ? void 0 : t.left,
                    n = null == t ? void 0 : t.top,
                    r = (0, a.useMemo)(() => null != l && null != n ? {
                        x: l,
                        y: n
                    } : null, [l, n]);
                return r
            }
        },
        982475: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return h
                }
            }), l("222007");
            var a, n, r = l("37983"),
                i = l("884691"),
                u = l("414456"),
                s = l.n(u),
                o = l("77078"),
                d = l("145131"),
                c = l("618556");
            (n = a || (a = {})).SINGLE_AVATAR = "1", n.MULTIPLE_AVATAR = "2";
            let f = {
                [o.AvatarSizes.SIZE_32]: c.avatarSmall,
                [o.AvatarSizes.SIZE_40]: c.avatarLarge
            };
            class m extends i.Component {
                render() {
                    let {
                        type: e,
                        avatarSize: t,
                        className: l
                    } = this.props;
                    return "2" === e ? (0, r.jsxs)("div", {
                        className: s(c.multiplePlaceholder, l),
                        children: [(0, r.jsxs)(d.default, {
                            children: [(0, r.jsx)("div", {
                                className: s(c.placeholderAvatar, f[t], c.avatarMasked)
                            }), (0, r.jsx)("div", {
                                className: s(c.placeholderAvatar, f[t], c.avatarMasked)
                            }), (0, r.jsx)("div", {
                                className: s(c.placeholderAvatar, f[t])
                            })]
                        }), (0, r.jsx)(d.default, {
                            grow: 1,
                            className: c.mulitplePlaceholderUsername,
                            style: {
                                maxWidth: this.placeholderMaxWidth
                            }
                        })]
                    }) : (0, r.jsxs)(d.default, {
                        className: s(c.placeholder, l),
                        children: [(0, r.jsx)("div", {
                            className: s(c.placeholderAvatar, f[t])
                        }), (0, r.jsx)(d.default, {
                            grow: 1,
                            className: c.placeholderUsername,
                            style: {
                                maxWidth: this.placeholderMaxWidth
                            }
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.placeholderMaxWidth = "".concat(Math.floor(40 * Math.random()) + 40, "%")
                }
            }
            m.defaultProps = {
                type: "1"
            }, m.Types = a;
            var h = m
        },
        928201: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("469563"),
                r = l("698644"),
                i = l("75196"),
                u = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: n = "currentColor",
                        ...r
                    } = e;
                    return (0, a.jsx)("svg", {
                        ...(0, i.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 16 16",
                        children: (0, a.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M13.6572 5.42868C13.8879 5.29002 14.1806 5.30402 14.3973 5.46468C14.6133 5.62602 14.7119 5.90068 14.6473 6.16202L13.3139 11.4954C13.2393 11.7927 12.9726 12.0007 12.6666 12.0007H3.33325C3.02725 12.0007 2.76058 11.792 2.68592 11.4954L1.35258 6.16202C1.28792 5.90068 1.38658 5.62602 1.60258 5.46468C1.81992 5.30468 2.11192 5.29068 2.34325 5.42868L5.13192 7.10202L7.44592 3.63068C7.46173 3.60697 7.48377 3.5913 7.50588 3.57559C7.5192 3.56612 7.53255 3.55663 7.54458 3.54535L6.90258 2.90268C6.77325 2.77335 6.77325 2.56068 6.90258 2.43135L7.76458 1.56935C7.89392 1.44002 8.10658 1.44002 8.23592 1.56935L9.09792 2.43135C9.22725 2.56068 9.22725 2.77335 9.09792 2.90268L8.45592 3.54535C8.46794 3.55686 8.48154 3.56651 8.49516 3.57618C8.51703 3.5917 8.53897 3.60727 8.55458 3.63068L10.8686 7.10202L13.6572 5.42868ZM2.66667 12.6673H13.3333V14.0007H2.66667V12.6673Z",
                            fill: n,
                            "aria-hidden": !0
                        })
                    })
                }, r.CrownIcon, void 0, {
                    size: 24
                })
        },
        11056: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var a = l("37983"),
                n = l("884691"),
                r = l("414456"),
                i = l.n(r),
                u = l("90915"),
                s = l("77078"),
                o = l("726446");
            let d = n.forwardRef(function(e, t) {
                var l;
                let {
                    avatar: n,
                    name: r,
                    children: d,
                    subText: c,
                    decorators: f,
                    onClick: m,
                    selected: h,
                    muted: p,
                    to: E,
                    avatarClassName: v,
                    selectedClassName: _,
                    innerClassName: x,
                    wrapContent: I,
                    highlighted: S,
                    focusProps: g,
                    ...L
                } = e;
                L.className = i(L.className, o.container, {
                    [o.selected]: h,
                    [o.highlighted]: S,
                    [null != _ ? _ : ""]: h,
                    [o.clickable]: !h && (null != E || null != m)
                }), L["aria-selected"] = null !== (l = L["aria-selected"]) && void 0 !== l ? l : h;
                let M = (0, a.jsxs)("div", {
                    className: i(x, o.layout, {
                        [o.muted]: !h && p,
                        [o.wrappedLayout]: I
                    }),
                    children: [(0, a.jsx)("div", {
                        className: i(o.avatar, v),
                        children: n
                    }), (0, a.jsxs)("div", {
                        className: o.content,
                        children: [(0, a.jsxs)("div", {
                            className: o.nameAndDecorators,
                            children: [(0, a.jsx)("div", {
                                className: i(o.name, {
                                    [o.wrappedName]: I
                                }),
                                children: r
                            }), f]
                        }), null != c ? (0, a.jsx)("div", {
                            className: o.subText,
                            children: c
                        }) : null]
                    }), null != d ? (0, a.jsx)("div", {
                        className: o.children,
                        children: d
                    }) : null]
                });
                return null != E ? (0, a.jsx)(s.FocusRing, {
                    ...g,
                    children: (0, a.jsx)(u.Link, {
                        to: E,
                        onClick: m,
                        ...L,
                        role: "listitem",
                        ref: t,
                        children: M
                    })
                }) : null != m ? (0, a.jsx)(s.Clickable, {
                    onClick: m,
                    focusProps: g,
                    ...L,
                    role: "listitem",
                    innerRef: t,
                    children: M
                }) : (0, a.jsx)(s.FocusRing, {
                    ...g,
                    children: (0, a.jsx)("div", {
                        ...L,
                        role: "listitem",
                        ref: t,
                        children: M
                    })
                })
            });
            var c = d
        },
        826684: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("37983");
            l("884691");
            var n = l("414456"),
                r = l.n(n),
                i = l("77078"),
                u = l("75589"),
                s = e => {
                    let {
                        className: t,
                        children: l,
                        "aria-label": n,
                        id: s
                    } = e;
                    return (0, a.jsx)(i.H, {
                        className: r(t, u.container),
                        "aria-label": n,
                        id: s,
                        children: l
                    })
                }
        }
    }
]);