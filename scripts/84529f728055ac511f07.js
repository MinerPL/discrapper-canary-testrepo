(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["88081"], {
        929887: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b024d0fd63aa42ba8670.png"
        },
        167115: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PollsIcon: function() {
                    return r
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M2 5c0-1.1.9-2 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM2 12c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2ZM4 17a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Z",
                        className: l
                    })
                })
            }
        },
        25116: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("49111");

            function i(e) {
                return e.type === a.MessageTypes.DEFAULT && null != e.messageReference
            }
        },
        500858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("702976");
            var a = n("568734"),
                i = n("49111"),
                s = e => null != e && null != e.attachments && !(e.attachments.length < 1) && e.attachments.some(e => null != e.flags && (0, a.hasFlag)(e.flags, i.MessageAttachmentFlags.IS_REMIX))
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                renderAutomodMessageMarkup: function() {
                    return u
                }
            }), n("222007"), n("781738"), n("355025");
            var a = n("367376"),
                i = n("240873"),
                s = n("49111");
            let r = new Set([s.MessageEmbedTypes.IMAGE, s.MessageEmbedTypes.GIFV]),
                l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? a.default.parseInlineReply : a.default.parse;
                return function(e, t, n) {
                    var a, s;
                    let {
                        toAST: o = !1,
                        hideSimpleEmbedContent: u = !0,
                        formatInline: m = !1,
                        postProcessor: f
                    } = n, g = !1;
                    let p = e(t.content, !0, (a = t, s = n, {
                        allowLinks: null != a.webhookId || !!s.allowLinks,
                        allowEmojiLinks: null != a.webhookId,
                        channelId: a.channel_id,
                        messageId: a.id,
                        mentionChannels: a.mentionChannels,
                        isInteracting: !!s.isInteracting,
                        formatInline: !!s.formatInline,
                        noStyleAndInteraction: !!s.noStyleAndInteraction,
                        allowHeading: !!s.allowHeading,
                        allowList: !!s.allowList,
                        previewLinkTarget: !!s.previewLinkTarget,
                        disableAnimatedEmoji: !!s.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), u && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            a = t[0];
                        return ("link" === n.type || "attachmentLink" === n.type) && r.has(a.type) && (0, i.isEmbedInline)(a) ? [] : e
                    }(e, t.embeds)), !m && (e = function(e, t) {
                        return t ? c(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = c(e[0].content)), e)
                    }(e, n)), g = function(e, t) {
                        return t ? d(e) : "paragraph" === e[0].type && e[0].content instanceof Array && d(e[0].content)
                    }(e, n), m && (e = function e(t) {
                        return t.forEach(t => {
                            l.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != f && (e = f(e, n)), e));
                    return {
                        hasSpoilerEmbeds: g,
                        content: p
                    }
                }(n, e, t)
            }

            function u(e, t, n) {
                var i;
                return i = a.default.parseAutoModerationSystemMessage, i(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: n,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function c(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let n = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
                }), n > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function d(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
            }
        },
        865343: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMessageContentId: function() {
                    return r
                },
                getMessageReplyId: function() {
                    return l
                },
                getMessageUsernameId: function() {
                    return o
                },
                getMessageTimestampId: function() {
                    return u
                },
                getMessageReactionsId: function() {
                    return c
                },
                getMessageAccessoriesId: function() {
                    return d
                },
                getMessageAriaLabelledBy: function() {
                    return m
                },
                getMessageAriaDescribedBy: function() {
                    return f
                }
            });
            var a = n("862013"),
                i = n("913491"),
                s = n("49111");

            function r(e) {
                return "message-content-".concat(e.id)
            }

            function l(e) {
                return "message-reply-context-".concat(e.id)
            }

            function o(e, t) {
                let n = null != t ? t : e.id;
                return "message-username-".concat(n)
            }

            function u(e) {
                return "message-timestamp-".concat(e.id)
            }

            function c(e) {
                return "message-reactions-".concat(e.id)
            }

            function d(e) {
                return "message-accessories-".concat(e.id)
            }

            function m(e, t, n) {
                let c = e.type === s.MessageTypes.REPLY && null != e.messageReference,
                    m = e.embeds.length > 0,
                    f = e.attachments.length > 0,
                    g = e.stickerItems.length > 0,
                    p = e.codedLinks.length > 0,
                    E = e.hasFlag(s.MessageFlags.HAS_THREAD),
                    A = m || f || g || p || E || e.type === s.MessageTypes.THREAD_CREATED,
                    S = m && e.content === e.embeds[0].url && e.embeds[0].type === s.MessageEmbedTypes.GIFV,
                    h = e.type !== s.MessageTypes.DEFAULT || !S && "" !== e.content,
                    I = (0, i.default)(e),
                    T = !I && (null == n ? void 0 : n.hasTimestamp) !== !1,
                    y = o(e, t),
                    M = l(e),
                    v = I ? "" : "".concat(c ? M : y, " ").concat(a.MESSAGE_NICKNAME_PAUSE_LABEL_SEGMENT_ID);
                if (h) {
                    let t = r(e);
                    v += " ".concat(t)
                }
                if (A) {
                    let t = d(e);
                    v += " ".concat(t)
                }
                if (T) {
                    let t = u(e);
                    v += " ".concat(a.MESSAGE_PRE_TIMESTAMP_PAUSE_LABEL_SEGMENT_ID, " ").concat(t)
                }
                return v.trim()
            }

            function f(e) {
                if (0 === e.reactions.length) return;
                let t = c(e);
                return "".concat(a.MESSAGE_REACTIONS_LABEL_SEGMENT_ID, " ").concat(t)
            }
        },
        38600: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var a = n("741566");
            let i = {
                    LATIN12: a.latin12CompactTimeStamp,
                    LATIN24: a.latin24CompactTimeStamp,
                    ASIAN: a.asianCompactTimeStamp
                },
                s = /(AM|PM)$/;

            function r(e) {
                return null != e.match(s) ? i.LATIN24 : e.length <= 5 ? i.LATIN12 : i.ASIAN
            }
        },
        119001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                r = n("167115"),
                l = n("77078"),
                o = n("956089"),
                u = n("782340"),
                c = n("301893");

            function d(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsx)(o.TextBadge, {
                    className: s(t, c.badge),
                    disableColor: !0,
                    text: (0, a.jsxs)("div", {
                        className: c.innerBadge,
                        children: [(0, a.jsx)(r.PollsIcon, {
                            className: c.icon,
                            color: l.tokens.colors.INTERACTIVE_ACTIVE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-xs/semibold",
                            color: "interactive-active",
                            children: u.default.Messages.POLL
                        })]
                    })
                })
            }
        },
        730541: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isPublicSystemMessage: function() {
                    return u
                },
                getPublicSystemMessageAvatar: function() {
                    return c
                },
                trackEnableCommunityFlow: function() {
                    return d
                }
            });
            var a = n("716241"),
                i = n("25116"),
                s = n("599110"),
                r = n("69741"),
                l = n("49111"),
                o = n("929887");

            function u(e) {
                return (0, i.default)(e) && e.messageReference.guild_id === r.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID || null != e.author && e.author.id === r.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID
            }

            function c() {
                return o
            }
            let d = e => {
                s.default.track(l.AnalyticEvents.USER_FLOW_TRANSITION, {
                    flow_type: r.ENABLE_COMMUNITY_FLOW_MODAL_KEY,
                    from_step: e.fromStep,
                    to_step: e.toStep,
                    ...(0, a.collectGuildAnalyticsMetadata)(e.guildId)
                })
            }
        },
        238956: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanSeeRemixBadge: function() {
                    return s
                },
                useIsRemixANitroPerk: function() {
                    return r
                }
            }), n("685665");
            var a = n("862205");
            let i = (0, a.createExperiment)({
                kind: "user",
                id: "2023-08_remix_ga",
                label: "Remix General Available",
                defaultConfig: {
                    canSeeRemixBadge: !1,
                    canRemix: !1,
                    isNitroPerk: !1
                },
                treatments: [{
                    id: 1,
                    label: "Remix for Nitro Subscribers",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !0,
                        isNitroPerk: !0
                    }
                }, {
                    id: 3,
                    label: "Upsell Remix for Non-Nitro Users",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !1,
                        isNitroPerk: !0
                    }
                }, {
                    id: 5,
                    label: "Remix GA for everyone",
                    config: {
                        canSeeRemixBadge: !0,
                        canRemix: !0,
                        isNitroPerk: !1
                    }
                }]
            });

            function s() {
                return i.useExperiment({
                    location: "canSeeRemixBadge"
                }, {
                    autoTrackExposure: !0
                }).canSeeRemixBadge
            }

            function r() {
                return !!i.useExperiment({
                    location: "isRemixANitroPerkHook"
                }, {
                    autoTrackExposure: !0
                }).isNitroPerk
            }
        },
        497880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getContent: function() {
                    return E
                },
                memoizeMessageProps: function() {
                    return A
                },
                default: function() {
                    return S
                }
            });
            var a = n("37983"),
                i = n("884691"),
                s = n("414456"),
                r = n.n(s),
                l = n("717837"),
                o = n.n(l),
                u = n("233736"),
                c = n("865343"),
                d = n("587904"),
                m = n("49111"),
                f = n("782340"),
                g = n("632215"),
                p = n("741566");

            function E(e, t) {
                let {
                    asPartialPreview: n = !1
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (e.isPoll() && n) {
                    var a, i, s;
                    return null !== (s = null === (i = e.poll) || void 0 === i ? void 0 : null === (a = i.question) || void 0 === a ? void 0 : a.text) && void 0 !== s ? s : ""
                }
                if (e.isPoll()) return "";
                if (e.type === m.MessageTypes.VOICE_HANGOUT_INVITE) return "";
                return e.hasFlag(m.MessageFlags.SOURCE_MESSAGE_DELETED) ? f.default.Messages.SOURCE_MESSAGE_DELETED : t
            }

            function A(e, t) {
                var n, a;
                let {
                    message: i
                } = t, {
                    message: s
                } = e;
                return (0, u.default)(e, t, ["message"]) && i.content === s.content && i.state === s.state && (null === (n = i.editedTimestamp) || void 0 === n ? void 0 : n.toString()) === (null === (a = s.editedTimestamp) || void 0 === a ? void 0 : a.toString())
            }
            var S = i.memo(function(e) {
                var t;
                let {
                    className: n,
                    message: s,
                    children: l,
                    content: u,
                    onUpdate: A,
                    contentRef: S,
                    asPartialPreview: h
                } = e, I = s.isEdited(), T = s.state === m.MessageStates.SEND_FAILED, y = s.state === m.MessageStates.SENDING, M = s.isCommandType(), v = null === (t = s.editedTimestamp) || void 0 === t ? void 0 : t.toString(), _ = i.useRef(!1);
                return i.useLayoutEffect(() => {
                    _.current ? null != A && A() : _.current = !0
                }, [A, s.content, u, v, l]), (0, a.jsxs)("div", {
                    id: (0, c.getMessageContentId)(s),
                    ref: S,
                    className: r(n, g.markup, {
                        [p.messageContent]: !0,
                        [p.isSending]: y && !M,
                        [p.markupRtl]: "rtl" === o(s.content),
                        [p.isFailed]: T
                    }),
                    children: [null != l ? l : E(s, u, {
                        asPartialPreview: h
                    }), I && null != s.editedTimestamp && (0, a.jsxs)(a.Fragment, {
                        children: [" ", (0, a.jsx)(d.default, {
                            timestamp: s.editedTimestamp,
                            isEdited: !0,
                            isInline: !1,
                            children: (0, a.jsxs)("span", {
                                className: p.edited,
                                children: ["(", f.default.Messages.MESSAGE_EDITED, ")"]
                            })
                        })]
                    })]
                })
            }, A)
        },
        587904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                r = n("77078"),
                l = n("38600"),
                o = n("888400"),
                u = n("782340"),
                c = n("741566"),
                d = function(e) {
                    let {
                        children: t,
                        className: n,
                        compact: i = !1,
                        timestamp: d,
                        isVisibleOnlyOnHover: m = !1,
                        cozyAlt: f = !1,
                        isInline: g = !0,
                        id: p,
                        isEdited: E = !1
                    } = e, A = (0, o.accessibilityLabelCalendarFormat)(d), S = i ? (0, o.dateFormat)(d, "LT") : (0, o.calendarFormat)(d), h = i ? (0, l.default)(S) : null, I = E ? u.default.Messages.MESSAGE_EDITED_TIMESTAMP_A11Y_LABEL.format({
                        timeFormatted: A
                    }) : A;
                    return (0, a.jsx)("span", {
                        className: s(n, h, {
                            [c.timestamp]: !0,
                            [c.timestampVisibleOnHover]: m,
                            [c.timestampInline]: g,
                            [c.alt]: f
                        }),
                        children: (0, a.jsx)(r.Tooltip, {
                            text: (0, o.dateFormat)(d, "LLLL"),
                            "aria-label": I,
                            tooltipClassName: c.timestampTooltip,
                            delay: 750,
                            children: e => (0, a.jsx)("time", {
                                ...e,
                                id: p,
                                dateTime: d.toISOString(),
                                children: null != t ? t : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("i", {
                                        className: c.separator,
                                        "aria-hidden": !0,
                                        children: i ? "[" : " — "
                                    }), S, i && (0, a.jsxs)("i", {
                                        className: c.separator,
                                        "aria-hidden": !0,
                                        children: ["]", " "]
                                    })]
                                })
                            })
                        })
                    })
                }
        },
        473374: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                renderSystemTag: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var i = n("25116"),
                s = n("730541"),
                r = n("79798"),
                l = n("680894"),
                o = n("741566");

            function u(e) {
                let t, {
                    message: n,
                    channel: u,
                    user: c,
                    compact: d,
                    isRepliedMessage: m,
                    hideIcon: f = !1,
                    children: g
                } = e;
                return ((null == n ? void 0 : n.isSystemDM()) ? t = r.default.Types.SYSTEM_DM : null != n && (0, i.default)(n) ? t = (0, s.isPublicSystemMessage)(n) ? r.default.Types.OFFICIAL : r.default.Types.SERVER : (null == c ? void 0 : c.id) === l.CLYDE_AI_USER_ID ? t = r.default.Types.AI : (null == c ? void 0 : c.bot) ? t = r.default.Types.BOT : null != u && u.isForumPost() && u.ownerId === (null == c ? void 0 : c.id) && !m && (t = r.default.Types.ORIGINAL_POSTER), null == t) ? null : (0, a.jsx)(r.default, {
                    className: d ? o.botTagCompact : o.botTagCozy,
                    type: t,
                    verified: null == c ? void 0 : c.isVerifiedBot(),
                    hideIcon: f,
                    useRemSizes: !0,
                    children: g
                })
            }
        },
        195483: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UsernameDecorationTypes: function() {
                    return i
                },
                default: function() {
                    return T
                }
            });
            var a, i, s = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                u = n("394846"),
                c = n("446674"),
                d = n("77078"),
                m = n("206230"),
                f = n("390236"),
                g = n("500858"),
                p = n("238956"),
                E = n("506885"),
                A = n("79798"),
                S = n("315102"),
                h = n("741566");

            function I(e) {
                let {
                    compact: t
                } = e;
                return (0, s.jsx)(A.default, {
                    className: t ? h.botTagCompact : h.botTagCozy,
                    type: A.default.Types.REMIX,
                    useRemSizes: !0
                })
            }

            function T(e) {
                let t, {
                        author: n,
                        message: a,
                        userOverride: i,
                        compact: l = !1,
                        withMentionPrefix: A = !1,
                        showPopout: T = !1,
                        className: y,
                        onClick: M,
                        onContextMenu: v,
                        onPopoutRequestClose: _,
                        renderPopout: x,
                        renderRemixTag: N = !1,
                        decorations: L
                    } = e,
                    b = r.useContext(f.default),
                    {
                        nick: R,
                        colorString: C,
                        colorRoleName: k
                    } = n,
                    j = null != a.messageReference && null != a.webhookId,
                    D = (0, c.useStateFromStores)([m.default], () => m.default.roleStyle),
                    w = (0, p.useCanSeeRemixBadge)(),
                    P = {
                        className: h.username,
                        style: "username" === D && null != C ? {
                            color: C
                        } : void 0,
                        onClick: M,
                        onContextMenu: v,
                        children: (A ? "@" : "") + R
                    };
                t = null != x && null != T ? (0, s.jsx)(d.Popout, {
                    preload: j ? void 0 : function() {
                        let e = null != i ? i : a.author;
                        return (0, E.default)(e.id, null != n.guildMemberAvatar && null != b ? (0, S.getGuildMemberAvatarURLSimple)({
                            guildId: b,
                            userId: e.id,
                            avatar: n.guildMemberAvatar,
                            size: 80
                        }) : e.getAvatarURL(b, 80), {
                            guildId: b,
                            channelId: a.channel_id
                        })
                    },
                    renderPopout: x,
                    shouldShow: T,
                    position: u.isMobile ? "window_center" : "right",
                    onRequestClose: _,
                    children: e => {
                        let {
                            onClick: t,
                            ...n
                        } = e;
                        return (0, s.jsx)(d.Clickable, {
                            tag: "span",
                            ...n,
                            ...P,
                            className: o(P.className, h.clickable, y)
                        })
                    }
                }) : (0, s.jsx)(d.Clickable, {
                    ...P,
                    className: o(P.className, y)
                });
                let F = null != L ? L[0] : null,
                    B = null != L ? L[1] : null;
                return (0, s.jsxs)(s.Fragment, {
                    children: [null != F && l ? (0, s.jsxs)(s.Fragment, {
                        children: [" ", F, " "]
                    }) : null, "dot" === D ? (0, s.jsx)(d.RoleDot, {
                        color: C,
                        name: k,
                        className: h.roleDot
                    }) : null, t, null != B ? (0, s.jsx)(s.Fragment, {
                        children: B
                    }) : null, null == F || l ? null : F, null != a && (0, g.default)(a) && w && N ? (0, s.jsx)(I, {}) : null]
                })
            }(a = i || (i = {}))[a.SYSTEM_TAG = 0] = "SYSTEM_TAG", a[a.BADGES = 1] = "BADGES"
        }
    }
]);