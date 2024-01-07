(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70077"], {
        855143: function(e, t, n) {
            "use strict";
            e.exports = n.p + "01864c39871ce619d855.svg"
        },
        934516: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a72746e7108167af95c8.svg"
        },
        267363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return c
                },
                ackChannel: function() {
                    return E
                },
                bulkAck: function() {
                    return C
                },
                localAck: function() {
                    return f
                },
                enableAutomaticAck: function() {
                    return _
                },
                disableAutomaticAck: function() {
                    return A
                },
                ackGuildFeature: function() {
                    return T
                },
                ackUserFeature: function() {
                    return S
                }
            }), n("222007"), n("424973");
            var l = n("249654"),
                i = n("913144"),
                a = n("401690"),
                u = n("233069"),
                r = n("42203"),
                d = n("245997"),
                o = n("697218"),
                s = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0;
                i.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: l,
                    immediate: t,
                    force: n,
                    context: s.CURRENT_APP_CONTEXT,
                    location: a
                })
            }

            function E(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = r.default.getChannel(e);
                    if (null == l || null == l.guild_id) return;
                    let i = d.default.getCategories(l.guild_id);
                    if (null == i[e]) return;
                    let o = i[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, u.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        s = [...o];
                    for (let e of (o.forEach(e => {
                            let t = a.default.getActiveJoinedThreadsForParent(l.guild_id, e);
                            for (let e in t) s.push(e)
                        }), s)) c(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, l.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
            }

            function C(e, t) {
                i.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: s.CURRENT_APP_CONTEXT,
                    onFinished: t
                })
            }

            function f(e) {
                i.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function _(e, t) {
                i.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function A(e, t) {
                i.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function T(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function S(e, t) {
                var n;
                let l = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != l && i.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        87657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983"),
                i = n("884691"),
                a = n("77078"),
                u = n("390236"),
                r = i.memo(function(e) {
                    var t, n, r, d;
                    let {
                        user: o,
                        size: s = a.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": E = !1,
                        ...C
                    } = e, f = i.useContext(u.default);
                    return (0, l.jsx)(a.Avatar, {
                        src: (t = o, n = (0, a.getAvatarSize)(s), r = c, d = f, t.getAvatarURL(d, n, r)),
                        size: s,
                        "aria-label": E ? void 0 : o.username,
                        "aria-hidden": E,
                        ...C
                    })
                })
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
                        className: r
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
                        className: r
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: r
                    })]
                })
            }
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("917351"),
                i = n.n(l);

            function a(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return i(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        143909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("424973"), n("222007");
            var l = n("37983"),
                i = n("884691"),
                a = n("414456"),
                u = n.n(a),
                r = n("446674"),
                d = n("551042"),
                o = n("77078"),
                s = n("450911"),
                c = n("87657"),
                E = n("812204"),
                C = n("685665"),
                f = n("679653"),
                _ = n("419830"),
                A = n("123561"),
                T = n("144491"),
                S = n("161778"),
                h = n("233069"),
                I = n("27618"),
                L = n("162771"),
                N = n("697218"),
                g = n("941886"),
                D = n("810567"),
                U = n("904276"),
                R = n("875436"),
                p = n("449008"),
                O = n("6468"),
                v = n("16002"),
                P = n("782340"),
                m = n("827916"),
                G = n("855143"),
                x = n("934516");

            function H(e) {
                let {
                    channel: t,
                    ChannelIcon: n,
                    selected: i,
                    onClick: a
                } = e, u = (0, f.default)(t);
                return (0, l.jsxs)(o.Clickable, {
                    className: m.channelRow,
                    onClick: () => a(t.id),
                    children: [i ? (0, l.jsx)(R.default, {
                        className: m.radioIcon
                    }) : (0, l.jsx)(U.default, {
                        className: m.radioIcon
                    }), (0, l.jsx)(n, {
                        className: m.icon,
                        width: 16,
                        height: 16
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "interactive-active",
                        children: u
                    })]
                })
            }

            function M(e) {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    onSelectChannelId: a
                } = e, {
                    guildChannels: d
                } = (0, r.useStateFromStoresObject)([A.default], () => A.default.getGuildWithoutChangingCommunityRows(t)), s = i.useMemo(() => {
                    let e = [];
                    return d.forEachChannel(t => {
                        !1 !== (0, O.canAttachClipsToChannel)(t.id) && ((0, h.isGuildSelectableChannelType)(t.type) || (0, h.isGuildVocalChannelType)(t.type)) && e.push(t)
                    }), e
                }, [d]);
                return 0 === s.length ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        className: u(m.divider, m.bottomDivider)
                    }), (0, l.jsx)(o.Text, {
                        variant: "eyebrow",
                        color: "interactive-normal",
                        className: m.contentPadding,
                        children: P.default.Messages.CLIP_SHARE_SELECT_CHANNEL
                    }), (0, l.jsx)(o.List, {
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: e => {
                            let {
                                section: t,
                                row: i
                            } = e;
                            if (t > 0) return null;
                            let u = s[i],
                                r = (0, _.getChannelIconComponent)(u);
                            return null == r ? null : (0, l.jsx)(H, {
                                channel: u,
                                ChannelIcon: r,
                                selected: n === u.id,
                                onClick: a
                            }, u.id)
                        },
                        rowHeight: (e, t) => {
                            if (e > 0) return 0;
                            let n = s[t];
                            return null != n ? 56 : 0
                        },
                        renderSection: () => null,
                        className: u(m.channelList, m.contentPadding),
                        fade: !0
                    })]
                })
            }

            function w(e) {
                let {
                    friends: t,
                    searchQuery: n,
                    disabled: a,
                    onShareClip: d
                } = e, s = i.useMemo(() => 0 === n.length ? t : t.filter(e => e.username.toLowerCase().includes(n.toLowerCase())), [t, n]), E = (0, r.useStateFromStores)([S.default], () => S.default.theme);
                return 0 === s.length ? (0, l.jsxs)(g.default, {
                    theme: E,
                    className: m.emptyStateContainer,
                    children: [(0, l.jsx)(g.default.Image, {
                        width: 415,
                        height: 75,
                        lightSrc: x,
                        darkSrc: G
                    }), (0, l.jsx)(g.default.Text, {
                        note: P.default.Messages.FRIEND_REQUEST_NO_RESULTS_FOUND
                    })]
                }) : (0, l.jsx)(o.List, {
                    sections: [s.length],
                    sectionHeight: 0,
                    renderRow: e => {
                        let {
                            section: t,
                            row: n
                        } = e;
                        if (t > 0) return null;
                        let i = s[n],
                            u = s[n].username;
                        return (0, l.jsxs)("div", {
                            className: m.userRow,
                            children: [(0, l.jsx)(c.default, {
                                user: i
                            }), (0, l.jsx)(o.Text, {
                                className: m.username,
                                variant: "text-md/normal",
                                children: u
                            }), (0, l.jsx)(o.Button, {
                                disabled: a,
                                onClick: () => d(i.id),
                                className: m.friendShareButton,
                                look: o.ButtonLooks.OUTLINED,
                                size: o.ButtonSizes.SMALL,
                                color: o.ButtonColors.BRAND,
                                children: (0, l.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: P.default.Messages.SHARE
                                })
                            })]
                        }, i.id)
                    },
                    rowHeight: (e, t) => {
                        if (e > 0) return 0;
                        let n = s[t];
                        return null != n ? 52 : 0
                    },
                    renderSection: () => null,
                    className: u(m.friendsList, m.contentPadding),
                    fade: !0
                })
            }

            function j(e) {
                let {
                    clip: t,
                    editMetadata: n,
                    transitionState: a,
                    onClose: c
                } = e, [f, _] = i.useState(""), [A, S] = i.useState(!1), [h, g] = i.useState(null), U = (0, r.useStateFromStoresArray)([I.default], () => I.default.getFriendIDs()), R = (0, r.useStateFromStoresArray)([N.default], () => U.map(e => N.default.getUser(e)).filter(p.isNotNullish), [U]), O = (0, r.useStateFromStores)([L.default], () => L.default.getGuildId()), {
                    analyticsLocations: G
                } = (0, C.default)(E.default.CLIPS_SHARE_MODAL);
                async function x(e) {
                    let l = null != e ? e : h;
                    if (null != l) {
                        S(!0);
                        try {
                            await (0, v.shareClip)(t, {
                                channelId: l,
                                editMetadata: n,
                                analyticsLocations: G
                            }), null == e && (0, T.transitionToChannel)(l), d.closeAllModals()
                        } catch (e) {} finally {
                            S(!1)
                        }
                    }
                }
                async function H(e) {
                    let t = await s.default.openPrivateChannel(e);
                    await x(t)
                }
                return (0, l.jsxs)(o.ModalRoot, {
                    size: o.ModalSize.SMALL,
                    transitionState: a,
                    children: [(0, l.jsx)(o.Heading, {
                        className: u(m.title, m.contentPadding),
                        variant: "heading-lg/semibold",
                        color: "interactive-active",
                        children: P.default.Messages.CLIP_SHARE_MODAL_TITLE
                    }), (0, l.jsx)(o.Text, {
                        variant: "text-md/normal",
                        color: "text-normal",
                        className: u(m.subtitle, m.contentPadding),
                        children: P.default.Messages.CLIP_SHARE_MODAL_SUBTITLE
                    }), (0, l.jsx)(D.default, {
                        className: m.searchBar,
                        query: f,
                        onChange: _,
                        size: D.default.Sizes.MEDIUM,
                        onClear: function() {
                            _("")
                        },
                        placeholder: P.default.Messages.INVITE_SEARCH_FOR_FRIENDS
                    }), (0, l.jsx)("div", {
                        className: u(m.divider, m.topDivider)
                    }), (0, l.jsx)(w, {
                        searchQuery: f,
                        friends: R,
                        onShareClip: H,
                        disabled: A
                    }), null != O && (0, l.jsx)(M, {
                        guildId: O,
                        selectedChannelId: h,
                        onSelectChannelId: g
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            disabled: null == h,
                            submitting: A,
                            color: o.Button.Colors.BRAND,
                            onClick: () => x(),
                            children: P.default.Messages.CLIPS_EDIT_SHARE_CLIP
                        }), (0, l.jsx)(o.Button, {
                            submitting: A,
                            look: o.ButtonLooks.LINK,
                            onClick: c,
                            color: o.ButtonColors.PRIMARY,
                            children: P.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        123561: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007");
            var l = n("917351"),
                i = n.n(l),
                a = n("446674"),
                u = n("913144"),
                r = n("191225"),
                d = n("848415"),
                o = n("203288"),
                s = n("398604"),
                c = n("401690"),
                E = n("755624"),
                C = n("374363"),
                f = n("271938"),
                _ = n("870691"),
                A = n("42203"),
                T = n("816092"),
                S = n("546463"),
                h = n("957255"),
                I = n("660478"),
                L = n("18494"),
                N = n("282109"),
                g = n("449008"),
                D = n("319839"),
                U = n("397336");
            let R = null,
                p = null,
                O = new D.default;

            function v() {
                let e = L.default.getChannelId(),
                    t = L.default.getVoiceChannelId();
                return R = e, p = t, O.clear()
            }

            function P(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                return O.clearGuildId(t)
            }

            function m(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                return O.clearGuildId(t)
            }

            function G(e) {
                let {
                    guildId: t
                } = e;
                return O.clearGuildId(t)
            }

            function x(e) {
                let {
                    channelId: t
                } = e;
                return O.nonPositionalChannelIdUpdate(t)
            }

            function H() {
                return null != R && O.nonPositionalChannelIdUpdate(R)
            }

            function M(e) {
                let {
                    channel: t
                } = e;
                return O.nonPositionalChannelIdUpdate(t.id)
            }

            function w(e) {
                let {
                    id: t
                } = e;
                return O.nonPositionalChannelIdUpdate(t)
            }

            function j() {
                let e = L.default.getChannelId(),
                    t = L.default.getVoiceChannelId(),
                    n = R !== e || p !== t;
                return !!n && (i([R, p, e, t]).uniq().forEach(e => {
                    null != e && O.nonPositionalChannelIdUpdate(e) && (n = !0)
                }), R = e, p = t, !0)
            }

            function y(e) {
                let {
                    id: t
                } = e, n = A.default.getChannel(t);
                return null == n ? O.clearGuildId(t) : O.clearGuildId(n.guild_id)
            }

            function V(e) {
                let {
                    guildId: t
                } = e;
                return O.clearGuildId(t)
            }

            function B() {
                return O.updateSubtitles()
            }

            function F(e) {
                let {
                    guildScheduledEvent: t
                } = e;
                return O.updateSubtitles(t.guild_id)
            }
            class b extends a.default.Store {
                initialize() {
                    this.waitFor(c.default, f.default, _.default, A.default, T.default, r.default, S.default, o.default, s.default, E.default, h.default, I.default, L.default, N.default, C.default, d.default)
                }
                getGuild(e, t) {
                    let n = O.getGuild(e, t);
                    return {
                        guildChannelsVersion: n.version,
                        guildChannels: n
                    }
                }
                getGuildWithoutChangingCommunityRows(e) {
                    let t = O.getGuildWithoutCommunityRows(e);
                    return {
                        guildChannelsVersion: t.version,
                        guildChannels: t
                    }
                }
                recentsChannelCount(e) {
                    if (null == e) return 0;
                    let t = O.getGuildWithoutCommunityRows(e),
                        n = t.getCategoryFromSection(t.recentsSectionNumber);
                    return n.getShownChannelIds().length
                }
            }
            b.displayName = "ChannelListStore";
            var k = new b(u.default, {
                APPLICATION_FETCH_FAIL: B,
                APPLICATION_FETCH_SUCCESS: B,
                APPLICATION_FETCH: B,
                APPLICATIONS_FETCH_FAIL: B,
                APPLICATIONS_FETCH_SUCCESS: B,
                APPLICATIONS_FETCH: B,
                ASSISTANT_COMPLETE_ACTION: function(e) {
                    let {
                        kind: t,
                        targetId: n
                    } = e;
                    if ("openTextChannel" === t || "joinVoiceChannel" === t) {
                        let e = A.default.getChannel(n);
                        return null != e && O.clearGuildId(e.guild_id)
                    }
                    return ("splashScreen" === t || "joinVoiceChannelMultitask" === t) && O.clear()
                },
                ASSISTANT_DISMISS: v,
                ASSISTANT_REBUILD_ACTION_STACK: v,
                BACKGROUND_SYNC: v,
                BULK_ACK: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => {
                        var t;
                        return null === (t = A.default.getChannel(e.channelId)) || void 0 === t ? void 0 : t.guild_id
                    }).filter(g.isNotNullish).uniq().forEach(e => {
                        O.clearGuildId(e) && (n = !0)
                    }), n
                },
                BULK_CLEAR_RECENTS: G,
                CACHE_LOADED_LAZY: v,
                CATEGORY_COLLAPSE_ALL: G,
                CATEGORY_COLLAPSE: y,
                CATEGORY_EXPAND_ALL: G,
                CATEGORY_EXPAND: y,
                CHANNEL_ACK: x,
                CHANNEL_COLLAPSE: function(e) {
                    var t;
                    let {
                        channelId: n
                    } = e;
                    return O.clearGuildId(null === (t = A.default.getChannel(n)) || void 0 === t ? void 0 : t.guild_id)
                },
                CHANNEL_CREATE: m,
                CHANNEL_DELETE: m,
                CHANNEL_LOCAL_ACK: x,
                CHANNEL_RTC_UPDATE_CHAT_OPEN: x,
                CHANNEL_SELECT: j,
                CHANNEL_STATUSES: function(e) {
                    return O.clearGuildId(e.guildId)
                },
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    return i(t).map(e => e.guild_id).uniq().forEach(e => {
                        O.clearGuildId(e) && (n = !0)
                    }), n
                },
                CONNECTION_OPEN_SUPPLEMENTAL: B,
                CONNECTION_OPEN: v,
                CURRENT_USER_UPDATE: v,
                DECAY_READ_STATES: v,
                DEV_TOOLS_DESIGN_TOGGLE_SET: v,
                DISABLE_AUTOMATIC_ACK: x,
                DISMISS_FAVORITE_SUGGESTION: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return O.nonPositionalChannelIdUpdate(t)
                },
                DRAWER_CLOSE: H,
                DRAWER_OPEN: H,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: function(e) {
                    let {
                        guildId: t,
                        channelId: n
                    } = e;
                    return O.updateSubtitles(t, n)
                },
                EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
                    B()
                },
                EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: B,
                ENABLE_AUTOMATIC_ACK: x,
                FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
                    let {
                        guildId: t
                    } = e;
                    return O.updateSubtitles(t)
                },
                GAMES_DATABASE_FETCH_FAIL: B,
                GAMES_DATABASE_FETCH: B,
                GAMES_DATABASE_UPDATE: B,
                GUILD_APPLICATIONS_FETCH_SUCCESS: B,
                GUILD_CREATE: P,
                GUILD_DELETE: P,
                GUILD_FEED_FETCH_SUCCESS: B,
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    return f.default.getId() === n.id && O.clearGuildId(t)
                },
                GUILD_ROLE_CREATE: G,
                GUILD_ROLE_DELETE: G,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: G,
                GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: G,
                GUILD_ROLE_UPDATE: G,
                GUILD_SCHEDULED_EVENT_CREATE: F,
                GUILD_SCHEDULED_EVENT_DELETE: F,
                GUILD_SCHEDULED_EVENT_UPDATE: F,
                GUILD_TOGGLE_COLLAPSE_MUTED: G,
                GUILD_UPDATE: P,
                IMPERSONATE_STOP: G,
                IMPERSONATE_UPDATE: G,
                LOAD_MESSAGES_SUCCESS: x,
                MESSAGE_ACK: x,
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return O.nonPositionalChannelIdUpdate(t)
                },
                MESSAGE_DELETE_BULK: x,
                MESSAGE_DELETE: x,
                NOTIFICATION_SETTINGS_UPDATE: v,
                OVERLAY_INITIALIZE: v,
                PASSIVE_UPDATE_V1: function(e) {
                    return null != e.channels && (O.clearGuildId(e.guildId), !0)
                },
                RECOMPUTE_READ_STATES: v,
                RESORT_THREADS: x,
                SET_RECENTLY_ACTIVE_COLLAPSED: v,
                THREAD_CREATE: M,
                THREAD_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return O.nonPositionalChannelUpdate(t)
                },
                THREAD_LIST_SYNC: G,
                THREAD_MEMBER_UPDATE: w,
                THREAD_MEMBERS_UPDATE: w,
                THREAD_UPDATE: M,
                UPDATE_CHANNEL_DIMENSIONS: x,
                UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
                    let {
                        guildId: t
                    } = e;
                    O.updateSubtitles(t)
                },
                USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
                USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guild_id: t
                        } = e;
                        return O.clearGuildId(t)
                    })
                },
                USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
                USER_GUILD_SETTINGS_GUILD_UPDATE: G,
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    var t;
                    let {
                        settings: n
                    } = e;
                    if (n.type !== U.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
                    let l = null === (t = n.proto.guilds) || void 0 === t ? void 0 : t.guilds,
                        i = !1;
                    return null != l && Object.keys(l).forEach(e => {
                        let t = l[e].guildRecentsDismissedAt;
                        null != t && (i = O.updateRecentsCategory(e) || i)
                    }), i
                },
                VOICE_CATEGORY_COLLAPSE: V,
                VOICE_CATEGORY_EXPAND: V,
                VOICE_CHANNEL_SELECT: j,
                VOICE_CHANNEL_STATUS_UPDATE: function(e) {
                    return O.nonPositionalChannelIdUpdate(e.id)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e, n = j(), l = new Set;
                    for (let {
                            channelId: e,
                            oldChannelId: i
                        }
                        of t) null != i && !l.has(i) && (O.nonPositionalChannelIdUpdate(i) && (n = !0), l.add(i)), null != e && !l.has(e) && (O.nonPositionalChannelIdUpdate(e) && (n = !0), l.add(e));
                    return n
                },
                WINDOW_FOCUS: H
            })
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var l = n("446674"),
                i = n("913144"),
                a = n("449008"),
                u = n("42203"),
                r = n("341542"),
                d = n("923959"),
                o = n("49111");
            let s = {},
                c = 0;

            function E() {
                c += 1
            }

            function C(e) {
                if (null == s[e]) return !1;
                delete s[e]
            }
            class f extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default, r.default), this.removeChangeListener(E), this.addChangeListener(E), s = null != e ? e : {}
                }
                getState() {
                    return s
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!s[e] && s[e]
                }
                getCollapsedCategories() {
                    return s
                }
                get version() {
                    return c
                }
            }
            f.displayName = "CategoryCollapseStore", f.persistKey = "collapsedCategories";
            var _ = new f(i.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (s = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? s[e.channel_id] = !0 : delete s[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
                    for (let e in s) {
                        let t = u.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete s[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (s[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (s[t]) return !1;
                    s[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return C(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (s[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    d.default.getChannels(t)[o.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete s[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return C(t)
                }
            })
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("424973"), n("222007"), n("808653");
            var l = n("446674"),
                i = n("913144"),
                a = n("320954"),
                u = n("379881"),
                r = n("271938"),
                d = n("42203"),
                o = n("923959"),
                s = n("305961"),
                c = n("49111");
            let E = null,
                C = {},
                f = null;

            function _() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let A = _();

            function T(e, t) {
                e.index = t
            }

            function S(e) {
                let t = o.default.getChannels(e),
                    n = _(),
                    l = e => {
                        var t;
                        let {
                            channel: l
                        } = e, i = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        i.push({
                            channel: l,
                            index: -1
                        })
                    };
                return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, o.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, o.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, a.default)(n._categories, n).forEach(T), C[e] = n, n
            }

            function h() {
                C = {}, null != E && S(E)
            }

            function I(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                C[t] = void 0, E === t && S(t)
            }

            function L(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                C[t] = void 0, E === t && S(t)
            }

            function N(e) {
                let {
                    guildId: t
                } = e;
                C[t] = void 0, t === E && S(t)
            }

            function g(e, t) {
                if (f = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (C[n] = void 0, n === E && S(n), !0)
            }

            function D() {
                S(c.FAVORITES)
            }
            class U extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, s.default, r.default, d.default, u.default), this.syncWith([u.default], D)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = C[e];
                        return null != t ? t : S(e)
                    }(e) : A
                }
            }
            U.displayName = "GuildCategoryStore";
            var R = new U(i.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (E = null != t ? t : null, null == t || null != C[t]) return !1;
                    S(t)
                },
                CONNECTION_OPEN: h,
                OVERLAY_INITIALIZE: h,
                CACHE_LOADED_LAZY: h,
                GUILD_CREATE: I,
                GUILD_UPDATE: I,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete C[t]
                },
                CHANNEL_CREATE: L,
                CHANNEL_DELETE: L,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (C[e] = void 0, n = !0, E === e && S(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (r.default.getId() !== n.id) return !1;
                    C[t] = void 0, t === E && S(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    S(E)
                },
                GUILD_ROLE_CREATE: N,
                GUILD_ROLE_UPDATE: N,
                GUILD_ROLE_DELETE: N,
                IMPERSONATE_UPDATE: N,
                IMPERSONATE_STOP: N,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != f ? g(d.default.getChannel(f), null) : g(d.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: l
                        } = t;
                        return r.default.getSessionId() !== l ? e : g(d.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        941886: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmptyStateImage: function() {
                    return T
                },
                EmptyStateText: function() {
                    return S
                },
                default: function() {
                    return i
                }
            });
            var l, i, a = n("37983"),
                u = n("884691"),
                r = n("414456"),
                d = n.n(r),
                o = n("819855"),
                s = n("77078"),
                c = n("145131"),
                E = n("49111"),
                C = n("430098"),
                f = n("926622");
            let {
                Provider: _,
                Consumer: A
            } = u.createContext(E.ThemeTypes.DARK);
            class T extends u.PureComponent {
                render() {
                    let {
                        lightSrc: e,
                        darkSrc: t,
                        width: n,
                        height: l,
                        offsetX: i,
                        offsetY: u,
                        style: r
                    } = this.props;
                    return (0, a.jsx)(A, {
                        children: s => (0, a.jsx)(c.default.Child, {
                            grow: 0,
                            className: d(C.image, f.marginBottom40),
                            style: {
                                ...r,
                                width: n,
                                height: l,
                                marginLeft: i,
                                marginTop: u,
                                backgroundImage: "url(".concat((0, o.isThemeDark)(s) ? t : e, ")")
                            }
                        })
                    })
                }
            }
            let S = e => {
                let {
                    children: t,
                    className: n,
                    noteClassName: l,
                    note: i,
                    style: u
                } = e;
                return (0, a.jsxs)(c.default.Child, {
                    grow: 0,
                    direction: c.default.Direction.VERTICAL,
                    style: u,
                    children: [null != t && (0, a.jsx)(s.H, {
                        className: d(n, C.title),
                        children: t
                    }), null != i ? (0, a.jsx)("div", {
                        className: d(l, C.text, f.marginTop8),
                        children: i
                    }) : null]
                })
            };
            (l = class extends u.PureComponent {
                render() {
                    let {
                        children: e,
                        theme: t,
                        className: n,
                        style: l
                    } = this.props;
                    return (0, a.jsx)(_, {
                        value: t,
                        children: (0, a.jsx)(c.default, {
                            direction: c.default.Direction.VERTICAL,
                            align: c.default.Align.CENTER,
                            justify: c.default.Justify.CENTER,
                            className: d(C.wrapper, n),
                            style: l,
                            children: e
                        })
                    })
                }
            }).Text = S, l.Image = T, i = l
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("733154"),
                u = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, a.ChatIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("390300"),
                u = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: a,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, a.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("469563"),
                a = n("287083"),
                u = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: i = "currentColor",
                        ...a
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: i
                        })
                    })
                }, a.StageIcon, void 0, {
                    size: 32
                })
        }
    }
]);