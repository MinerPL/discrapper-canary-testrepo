(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["91434"], {
        2760: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            }), s("702976"), s("424973");
            var a = s("37983");
            s("884691");
            var l = s("77078"),
                r = s("291373"),
                i = s("782340"),
                o = s("210466");

            function n(e) {
                let {
                    content: t,
                    heading: s
                } = e;
                return (0, a.jsxs)("div", {
                    className: o.row,
                    children: [null != s ? (0, a.jsx)(l.Heading, {
                        className: o.heading,
                        variant: "text-sm/normal",
                        children: s
                    }) : null, (0, a.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: t
                    })]
                })
            }

            function u(e) {
                let {
                    flags: t,
                    listScrollerStyle: s
                } = e, {
                    hasMessageContent: u,
                    hasGuildPresences: d,
                    hasGuildMembers: c
                } = (0, r.useBotDataAccess)({
                    flags: t
                });
                if (null == t) return null;
                let f = [];
                return u && f.push((0, a.jsx)(n, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_MESSAGE_CONTENT_BODY
                })), d && f.push((0, a.jsx)(n, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_GUILD_PRESENCES_BODY
                })), c && f.push((0, a.jsx)(n, {
                    heading: i.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_HEADER,
                    content: i.default.Messages.BOTS_DATA_ACCESS_GUILD_MEMBERS_BODY
                })), f.length > 0 && f.push((0, a.jsx)("div", {
                    className: o.divider,
                    children: (0, a.jsx)(l.FormDivider, {})
                })), f.push((0, a.jsx)(n, {
                    content: i.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                        helpCenterUrl: "https://support.discord.com/hc/articles/7933951485975"
                    })
                })), (0, a.jsx)(l.ScrollerThin, {
                    className: s,
                    children: f
                })
            }
        },
        656416: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("77078"),
                o = s("463848"),
                n = s("373469"),
                u = s("824563"),
                d = s("765698"),
                c = s("453649"),
                f = s("49111"),
                S = s("260787"),
                m = s("568719");

            function x(e) {
                let {
                    user: t
                } = e, s = (0, r.useStateFromStores)([n.default], () => null != n.default.getAnyStreamForUser(t.id)), x = (0, r.useStateFromStores)([u.default], () => u.default.getActivities(t.id)), T = l.useMemo(() => x.filter(e => e.type !== f.ActivityTypes.CUSTOM_STATUS), [x]), p = l.useMemo(() => s ? T.find(e => e.type === f.ActivityTypes.PLAYING) : null, [T, s]), v = l.useMemo(() => T.filter(e => e !== p), [p, T]), h = (0, c.useGetVoiceChannelInfoForVoiceActivitySection)(t.id), A = null != h && !s, {
                    showVoiceActivityInProfile: E
                } = d.VoiceActivityProfileExperiment.useExperiment({
                    location: "user profile modal"
                }, {
                    autoTrackExposure: A
                });
                return (0, a.jsxs)(i.ScrollerThin, {
                    className: m.listScroller,
                    fade: !0,
                    children: [E && A ? (0, a.jsx)("div", {
                        className: S.voiceActivity,
                        children: (0, a.jsx)(c.default, {
                            ...h,
                            color: S.actionColor
                        })
                    }) : null, s ? (0, a.jsx)(o.default, {
                        type: o.UserActivityTypes.PROFILE_V2,
                        user: t,
                        source: "Profile Modal",
                        className: S.userProfileActivity,
                        activity: p,
                        actionColor: S.actionColor
                    }) : null, v.map(e => (0, a.jsx)(o.default, {
                        type: o.UserActivityTypes.PROFILE_V2,
                        activity: e,
                        user: t,
                        useStoreStream: !1,
                        source: "Profile Modal",
                        className: S.userProfileActivity,
                        actionColor: S.actionColor
                    }, "".concat(e.application_id, "-").concat(e.session_id, "-").concat(e.name)))]
                })
            }
        },
        821721: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return n
                }
            }), s("702976");
            var a = s("37983");
            s("884691");
            var l = s("446674"),
                r = s("2760"),
                i = s("713135"),
                o = s("568719");

            function n(e) {
                var t;
                let {
                    user: s
                } = e, n = null === (t = (0, l.useStateFromStores)([i.default], () => i.default.getUserProfile(s.id))) || void 0 === t ? void 0 : t.application;
                return (0, a.jsx)(r.default, {
                    flags: null == n ? void 0 : n.flags,
                    listScrollerStyle: o.listScroller
                })
            }
        },
        869250: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("77078"),
                o = s("910330"),
                n = s("376556"),
                u = s("572943"),
                d = s("915639"),
                c = s("102985"),
                f = s("713135"),
                S = s("906889"),
                m = s("485422"),
                x = s("213736"),
                T = s("880114"),
                p = s("824140"),
                v = s("751906"),
                h = s("782340"),
                A = s("974991");

            function E(e) {
                var t;
                let {
                    user: s,
                    displayProfile: E,
                    autoFocusNote: N = !1,
                    scrollToConnections: U = !1
                } = e, I = (0, u.usePlatformAllowed)({
                    forUserProfile: !0
                }), _ = (0, r.useStateFromStores)([f.default], () => {
                    var e, t;
                    return null !== (t = null === (e = f.default.getUserProfile(s.id)) || void 0 === e ? void 0 : e.connectedAccounts) && void 0 !== t ? t : []
                }), j = (0, r.useStateFromStores)([c.default], () => c.default.hidePersonalInformation), {
                    profileTheme: C
                } = (0, S.default)(s, E), y = (0, r.useStateFromStores)([d.default], () => d.default.locale), g = l.useMemo(() => _.filter(e => {
                    let t = n.default.get(e.type);
                    return null != t && I(t)
                }), [_, I]), M = l.useRef(null);
                return (l.useLayoutEffect(() => {
                    if (U) {
                        var e;
                        null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView()
                    }
                }, [U]), j) ? (0, a.jsx)(v.default, {}) : (0, a.jsxs)(i.ScrollerThin, {
                    fade: !0,
                    className: A.infoScroller,
                    children: [(0, a.jsxs)("div", {
                        className: A.userInfoSection,
                        children: [(null == E ? void 0 : E.bio) != null && (null == E ? void 0 : E.bio) !== "" && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(i.Heading, {
                                variant: "eyebrow",
                                className: A.userInfoSectionHeader,
                                children: h.default.Messages.USER_PROFILE_ABOUT_ME
                            }), (0, a.jsx)(m.default, {
                                className: A.userInfoText,
                                userBio: null !== (t = null == E ? void 0 : E.bio) && void 0 !== t ? t : ""
                            })]
                        }), s.isClyde() && (0, a.jsx)(x.default, {
                            className: A.userInfoText,
                            isExpanded: !0
                        }), (0, a.jsx)(T.default, {
                            userId: s.id,
                            headingClassName: A.userInfoSectionHeader,
                            textClassName: A.userInfoText
                        }), (0, a.jsx)(i.Heading, {
                            variant: "eyebrow",
                            className: A.userInfoSectionHeader,
                            children: h.default.Messages.NOTE
                        }), (0, a.jsx)(o.default, {
                            userId: s.id,
                            autoFocus: N,
                            className: A.note
                        })]
                    }), (0, a.jsx)(p.ConnectedUserAccounts, {
                        ref: M,
                        connectedAccounts: g,
                        theme: C,
                        locale: y,
                        className: A.userInfoSection,
                        userId: s.id
                    })]
                })
            }
        },
        279286: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return O
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("77078"),
                o = s("901582"),
                n = s("252744"),
                u = s("750560"),
                d = s("502651"),
                c = s("812204"),
                f = s("685665"),
                S = s("635471"),
                m = s("373469"),
                x = s("271938"),
                T = s("824563"),
                p = s("697218"),
                v = s("713135"),
                h = s("765698"),
                A = s("217513"),
                E = s("641055"),
                N = s("430312"),
                U = s("453649"),
                I = s("481923"),
                _ = s("759210"),
                j = s("347550"),
                C = s("590456"),
                y = s("49111"),
                g = s("782340"),
                M = s("890963");

            function P(e) {
                let {
                    user: t,
                    isCurrentUser: s,
                    section: l,
                    setSection: o,
                    hasActivity: n
                } = e, u = (0, r.useStateFromStores)([v.default], () => {
                    var e, s;
                    return (null === (s = v.default.getUserProfile(t.id)) || void 0 === s ? void 0 : null === (e = s.application) || void 0 === e ? void 0 : e.id) != null
                });
                return (0, a.jsx)("div", {
                    className: M.tabBarContainer,
                    children: (0, a.jsxs)(i.TabBar, {
                        selectedItem: l,
                        type: "top",
                        onItemSelect: o,
                        className: M.tabBar,
                        children: [!t.isNonUserBot() || t.isClyde() ? (0, a.jsx)(i.TabBar.Item, {
                            className: M.tabBarItem,
                            id: C.UserProfileSections.USER_INFO,
                            children: g.default.Messages.USER_INFO
                        }) : null, !t.bot && n ? (0, a.jsx)(i.TabBar.Item, {
                            className: M.tabBarItem,
                            id: C.UserProfileSections.ACTIVITY,
                            children: g.default.Messages.USER_PROFILE_ACTIVITY
                        }) : null, s || t.isClyde() ? null : (0, a.jsx)(i.TabBar.Item, {
                            className: M.tabBarItem,
                            id: C.UserProfileSections.MUTUAL_GUILDS,
                            children: g.default.Messages.MUTUAL_GUILDS
                        }), t.bot || s ? null : (0, a.jsx)(i.TabBar.Item, {
                            className: M.tabBarItem,
                            id: C.UserProfileSections.MUTUAL_FRIENDS,
                            children: g.default.Messages.MUTUAL_FRIENDS
                        }), t.bot && u ? (0, a.jsx)(i.TabBar.Item, {
                            className: M.tabBarItem,
                            id: C.UserProfileSections.BOT_DATA_ACCESS,
                            children: g.default.Messages.BOTS_DATA_ACCESS_TAB
                        }) : null]
                    })
                })
            }

            function O(e) {
                var t, s;
                let {
                    user: v,
                    guildId: O,
                    channelId: F,
                    friendToken: R,
                    autoFocusNote: B,
                    initialSection: D = C.UserProfileSections.USER_INFO,
                    transitionState: L,
                    onClose: b
                } = e, {
                    AnalyticsLocationProvider: k
                } = (0, f.default)(c.default.PROFILE_MODAL), G = null !== (t = (0, r.useStateFromStores)([p.default], () => p.default.getUser(v.id))) && void 0 !== t ? t : v, w = (0, A.default)(null !== (s = null == G ? void 0 : G.id) && void 0 !== s ? s : "");
                (0, u.useSubscribeGuildMembers)({
                    [O]: [G.id]
                });
                let V = (0, r.useStateFromStores)([m.default], () => null != m.default.getAnyStreamForUser(G.id)),
                    H = (0, r.useStateFromStores)([T.default], () => T.default.findActivity(G.id, e => e.type !== y.ActivityTypes.CUSTOM_STATUS)),
                    Y = (0, U.useGetVoiceChannelInfoForVoiceActivitySection)(G.id, O),
                    [z, Z] = l.useState(!1),
                    [K, W] = l.useState(G.isNonUserBot() && !G.isClyde() ? C.UserProfileSections.MUTUAL_GUILDS : D),
                    q = (0, r.useStateFromStores)([x.default], () => x.default.getId() === G.id),
                    {
                        showVoiceActivityInProfile: J
                    } = h.VoiceActivityProfileExperiment.useExperiment({
                        location: "user profile modal container"
                    }, {
                        autoTrackExposure: !1
                    }),
                    Q = null != H || V || null != Y && J,
                    X = !q || Q,
                    $ = l.createRef(),
                    ee = (0, n.default)($);
                !Q && K === C.UserProfileSections.ACTIVITY && W(C.UserProfileSections.USER_INFO);
                let et = l.useCallback(e => {
                        Z(!0), W(e)
                    }, []),
                    es = null == w ? void 0 : w.profileEffectId;
                return (0, a.jsx)(k, {
                    children: (0, a.jsx)(o.default, {
                        section: y.AnalyticsSections.PROFILE_MODAL,
                        children: (0, a.jsxs)(i.ModalRoot, {
                            transitionState: L,
                            className: M.root,
                            "aria-label": g.default.Messages.USER_PROFILE_MODAL,
                            children: [(0, a.jsx)("div", {
                                ref: $,
                                children: (0, a.jsxs)(N.default, {
                                    user: G,
                                    profileType: C.UserProfileTypes.MODAL,
                                    children: [(0, a.jsx)("div", {
                                        className: M.topSection,
                                        children: (0, a.jsx)(_.default, {
                                            displayProfile: w,
                                            user: G,
                                            friendToken: R,
                                            onClose: b,
                                            isStreaming: (0, d.default)(H),
                                            guildId: O,
                                            channelId: F,
                                            hasProfileEffect: null != es
                                        })
                                    }), (0, a.jsxs)(N.default.Inner, {
                                        children: [L === i.ModalTransitionState.ENTERED && (0, a.jsx)(E.default, {
                                            onTooltipClose: b
                                        }), (0, a.jsxs)("div", {
                                            className: M.body,
                                            children: [(0, a.jsx)(j.default, {
                                                user: G,
                                                displayProfile: w
                                            }), X ? (0, a.jsx)(P, {
                                                user: G,
                                                section: K === C.UserProfileSections.USER_INFO_CONNECTIONS ? C.UserProfileSections.USER_INFO : K,
                                                setSection: et,
                                                hasActivity: Q,
                                                isCurrentUser: q
                                            }) : (0, a.jsx)("div", {
                                                className: M.divider
                                            }), (0, a.jsx)(I.default, {
                                                displayProfile: w,
                                                user: G,
                                                autoFocusNote: B && !z,
                                                selectedSection: K,
                                                onClose: b
                                            })]
                                        })]
                                    })]
                                })
                            }), null != es && (0, a.jsx)(S.default, {
                                profileEffectId: es,
                                bannerAdjustment: 0,
                                isHovering: ee
                            })]
                        })
                    })
                })
            }
        },
        481923: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return d
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("656416"),
                r = s("821721"),
                i = s("869250"),
                o = s("69682"),
                n = s("446509"),
                u = s("590456");

            function d(e) {
                let {
                    displayProfile: t,
                    user: s,
                    selectedSection: d,
                    autoFocusNote: c,
                    onClose: f
                } = e;
                switch (d) {
                    case u.UserProfileSections.ACTIVITY:
                        return (0, a.jsx)(l.default, {
                            user: s
                        });
                    case u.UserProfileSections.MUTUAL_GUILDS:
                        return (0, a.jsx)(n.default, {
                            user: s,
                            onClose: f
                        });
                    case u.UserProfileSections.MUTUAL_FRIENDS:
                        return (0, a.jsx)(o.default, {
                            user: s,
                            onClose: f
                        });
                    case u.UserProfileSections.BOT_DATA_ACCESS:
                        return (0, a.jsx)(r.default, {
                            user: s
                        });
                    case u.UserProfileSections.USER_INFO_CONNECTIONS:
                    case u.UserProfileSections.USER_INFO:
                    default:
                        return (0, a.jsx)(i.default, {
                            displayProfile: t,
                            autoFocusNote: c,
                            user: s,
                            scrollToConnections: d === u.UserProfileSections.USER_INFO_CONNECTIONS
                        })
                }
            }
        },
        759210: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var a = s("37983"),
                l = s("884691"),
                r = s("446674"),
                i = s("669491"),
                o = s("77078"),
                n = s("450911"),
                u = s("272030"),
                d = s("54239"),
                c = s("736964"),
                f = s("377114"),
                S = s("824794"),
                m = s("271938"),
                x = s("824563"),
                T = s("27618"),
                p = s("663745"),
                v = s("423487"),
                h = s("50885"),
                A = s("713135"),
                E = s("106435"),
                N = s("906889"),
                U = s("289918"),
                I = s("609734"),
                _ = s("590006"),
                j = s("717226"),
                C = s("590456"),
                y = s("49111"),
                g = s("843455"),
                M = s("782340"),
                P = s("734675");
            let O = o.AvatarSizes.SIZE_120,
                F = h.default.getEnableHardwareAcceleration() ? o.AnimatedAvatar : o.Avatar;

            function R(e) {
                let {
                    displayProfile: t,
                    user: h,
                    guildId: R,
                    channelId: B,
                    friendToken: D,
                    isStreaming: L,
                    hasProfileEffect: b,
                    onClose: k
                } = e, G = (0, r.useStateFromStores)([T.default], () => T.default.getRelationshipType(h.id)), w = (0, r.useStateFromStores)([x.default], () => x.default.isMobileOnline(h.id)), V = (0, r.useStateFromStores)([x.default], () => x.default.getStatus(h.id)), H = (0, r.useStateFromStores)([A.default], () => A.default.getUserProfile(h.id)), Y = (0, r.useStateFromStores)([m.default], () => m.default.getId() === h.id), {
                    profileTheme: z
                } = (0, N.default)(h, t), {
                    avatarSrc: Z,
                    eventHandlers: K,
                    avatarDecorationSrc: W
                } = (0, E.default)({
                    user: h,
                    size: O
                }), q = l.useMemo(() => (0, S.shouldDisableUserPresenceInChannel)(h, B), [h, B]);

                function J() {
                    k(), (0, d.popLayer)()
                }

                function Q() {
                    c.default.removeFriend(h.id, {
                        location: "User Profile"
                    })
                }

                function X(e) {
                    n.default.openPrivateChannel(h.id, !1, !1, e), J()
                }

                function $() {
                    try {
                        c.default.addRelationship({
                            userId: h.id,
                            context: {
                                location: "User Profile"
                            },
                            type: y.RelationshipTypes.BLOCKED
                        })
                    } catch (e) {
                        J()
                    }
                }

                function ee() {
                    let e = "@me" === R ? void 0 : R;
                    (0, f.showReportModalForUser)(h, e)
                }
                return (0, a.jsxs)("header", {
                    children: [(0, a.jsx)(U.default, {
                        displayProfile: t,
                        onClose: J,
                        user: h,
                        profileType: C.UserProfileTypes.MODAL,
                        hasProfileEffect: b
                    }), (0, a.jsxs)("div", {
                        className: P.header,
                        children: [(0, a.jsx)("div", {
                            ...K,
                            children: (0, a.jsx)(F, {
                                src: Z,
                                avatarDecoration: W,
                                size: O,
                                className: P.avatar,
                                status: q ? g.StatusTypes.UNKNOWN : L ? g.StatusTypes.STREAMING : V,
                                statusBackdropColor: (0, o.getStatusBackdropColor)(z),
                                isMobile: w,
                                statusTooltip: !0,
                                "aria-label": h.username
                            })
                        }), (0, a.jsxs)("div", {
                            className: P.headerTop,
                            children: [(null == H ? void 0 : H.profileFetchFailed) && !h.isClyde() ? (0, a.jsx)(o.Tooltip, {
                                text: M.default.Messages.USER_PROFILE_LOAD_ERROR,
                                spacing: 20,
                                children: e => (0, a.jsx)(v.default, {
                                    ...e,
                                    className: P.warningCircleIcon,
                                    color: i.default.unsafe_rawColors.YELLOW_300.css
                                })
                            }) : (0, a.jsx)(_.default, {
                                user: h,
                                className: P.badgeList,
                                guildId: R,
                                size: _.BadgeSizes.SIZE_24,
                                shrinkAtCount: 8,
                                shrinkToSize: _.BadgeSizes.SIZE_18
                            }), (0, a.jsxs)("div", {
                                className: P.relationshipButtons,
                                children: [(0, a.jsx)(I.default, {
                                    className: P.applicationInstallButton,
                                    application: null == H ? void 0 : H.application
                                }), (0, a.jsx)(j.default, {
                                    user: h,
                                    isCurrentUser: Y,
                                    relationshipType: G,
                                    onAddFriend: function() {
                                        try {
                                            c.default.addRelationship({
                                                userId: h.id,
                                                context: {
                                                    location: "User Profile"
                                                },
                                                type: void 0,
                                                friendToken: D
                                            })
                                        } catch (e) {
                                            J()
                                        }
                                    },
                                    onIgnoreFriend: function() {
                                        c.default.cancelFriendRequest(h.id, {
                                            location: "User Profile"
                                        })
                                    },
                                    onSendMessage: () => X("User Profile Modal - Send Message Button")
                                }), Y || h.isNonUserBot() ? null : (0, a.jsx)(o.Clickable, {
                                    focusProps: {
                                        offset: {
                                            left: 8
                                        }
                                    },
                                    onClick: function(e) {
                                        (0, u.openContextMenuLazy)(e, async () => {
                                            let {
                                                default: e
                                            } = await s.el("487956").then(s.bind(s, "487956"));
                                            return t => (0, a.jsx)(e, {
                                                ...t,
                                                relationshipType: G,
                                                onRemoveFriend: Q,
                                                onBlock: $,
                                                onReport: ee,
                                                onMessage: () => X("User Profile Modal - Context Menu"),
                                                user: h
                                            })
                                        })
                                    },
                                    children: (0, a.jsx)(p.default, {
                                        className: P.additionalActionsIcon
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
        },
        347550: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("414456"),
                r = s.n(l),
                i = s("446674"),
                o = s("77078"),
                n = s("145079"),
                u = s("775377"),
                d = s("824563"),
                c = s("158998"),
                f = s("49111"),
                S = s("782340"),
                m = s("811136");

            function x(e) {
                let {
                    user: t,
                    displayProfile: s
                } = e, l = (0, i.useStateFromStores)([d.default], () => d.default.findActivity(t.id, e => e.type === f.ActivityTypes.CUSTOM_STATUS)), x = c.default.getName(t);
                return (0, a.jsxs)("div", {
                    className: m.container,
                    children: [null == x && (0, a.jsx)(n.default, {
                        user: t,
                        className: m.nameTag,
                        usernameClass: m.username,
                        discriminatorClass: m.discriminator
                    }), null != x && (0, a.jsxs)("div", {
                        children: [(0, a.jsx)(o.Text, {
                            variant: "text-lg/semibold",
                            style: {
                                marginRight: "12px"
                            },
                            children: x
                        }), (0, a.jsx)(n.default, {
                            user: t,
                            forceUsername: !0,
                            usernameClass: m.discriminator,
                            discriminatorClass: m.discriminator,
                            className: r(m.nameTag, m.nameTagSmall)
                        })]
                    }), (null == s ? void 0 : s.pronouns) != null && (null == s ? void 0 : s.pronouns) !== "" && (0, a.jsx)(o.Tooltip, {
                        text: S.default.Messages.USER_PROFILE_PRONOUNS,
                        children: e => (0, a.jsx)(o.Text, {
                            ...e,
                            variant: "text-sm/normal",
                            className: r(m.pronouns, m.nameTagSmall),
                            children: s.pronouns
                        })
                    }), null != l ? (0, a.jsx)("div", {
                        className: m.customStatusActivity,
                        children: (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: m.customStatusText,
                            children: (0, a.jsx)(u.default, {
                                activity: l,
                                className: m.customStatus,
                                emojiClassName: m.customStatusEmoji,
                                soloEmojiClassName: m.customStatusSoloEmoji
                            })
                        })
                    }) : null]
                })
            }
        },
        751906: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var a = s("37983");
            s("884691");
            var l = s("782340"),
                r = s("568719");

            function i() {
                return (0, a.jsxs)("div", {
                    className: r.empty,
                    children: [(0, a.jsx)("div", {
                        className: r.emptyIconStreamerMode
                    }), (0, a.jsx)("div", {
                        className: r.emptyText,
                        children: l.default.Messages.STREAMER_MODE_ENABLED
                    })]
                })
            }
        }
    }
]);