(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["29988"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("817736"),
                o = n.n(r),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                p = n("901165"),
                E = n("62843"),
                h = n("315102"),
                I = n("402671"),
                C = n("866190"),
                m = n("115279");
            class A extends a.PureComponent {
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
                            shouldAnimate: s,
                            isFocused: i,
                            isInteracting: r,
                            size: o = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = m.EMOJI_SIZE_MAP[o];
                        return h.default.getEmojiURL({
                            id: n,
                            animated: i && !0 === a && (!0 === s || u || !0 === r),
                            size: e
                        })
                    }
                    if (null != l) return I.default.getURL(l)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: s,
                        className: r,
                        size: o = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: p,
                        isInteracting: E,
                        ...h
                    } = this.props, I = this.getSrc();
                    return null == I || "" === I ? (0, l.jsx)("span", {
                        className: i("emoji", "emoji-text"),
                        children: n
                    }) : (s && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...h,
                        key: this.key,
                        src: I,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: i("emoji", r, {
                            jumboable: "jumbo" === o
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
            A.defaultProps = {
                isInteracting: !1
            };
            let T = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, l.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    s = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let l = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == l) return;
                            let a = l[1];
                            if (e.intersectionRatio >= .7) {
                                var s, i;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function i(e) {
                    let t = o.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), s.observe(t))
                }

                function r(e) {
                    let l = o.findDOMNode(e);
                    s.unobserve(l);
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
                        n !== t && (n ? i(this) : r(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && r(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: s,
                                ...i
                            } = this.props;
                        return (0, l.jsx)(E.MessagesInteractionContext.Consumer, {
                            children: t => (0, l.jsx)(e, {
                                ...i,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && s
                            })
                        })
                    }
                }
            }(A);

            function _(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, d.useStateFromStores)([p.default], () => p.default.isInstanceFocused()) : (0, C.useIsWindowFocused)();
                return (0, l.jsx)(T, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var l = n("872717"),
                a = n("913144"),
                s = n("568734"),
                i = n("299285"),
                r = n("49111"),
                o = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: s,
                            teamId: i
                        } = e, o = await l.default.post({
                            url: r.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: s,
                                guild_id: n,
                                team_id: i
                            }
                        }), u = o.body;
                        return null != n && null != s && a.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = await l.default.get({
                            url: r.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), i = s.body;
                        return a.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: i
                        }), i
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, s = await l.default.post({
                            url: r.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), i = s.body;
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
                                    a = (0, s.hasFlag)(null !== (n = null == l ? void 0 : l.flags) && void 0 !== n ? n : 0, r.ApplicationFlags.EMBEDDED),
                                    o = a && (null == l ? void 0 : null === (t = l.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != l && !o) && !i.default.isFetchingApplication(e) && !i.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            a.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await l.default.get({
                                    url: r.Endpoints.APPLICATIONS_PUBLIC,
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
                            url: r.Endpoints.APPLICATION_PUBLIC(e),
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
        512027: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var l = (0, n("862205").createExperiment)({
                kind: "guild",
                id: "2022-11_default_to_server_vanity_v2",
                label: "Default To Server Vanity v2",
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
        652453: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RawInviteCopyInputConnected: function() {
                    return S
                },
                InviteCopyInput: function() {
                    return y
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("498574"),
                o = n("446674"),
                u = n("862337"),
                d = n("77078"),
                c = n("162771"),
                f = n("102985"),
                p = n("599110"),
                E = n("306160"),
                h = n("568734"),
                I = n("354023"),
                C = n("865699"),
                m = n("91366"),
                A = n("49111"),
                T = n("782340"),
                _ = n("435808"),
                g = n("905518"),
                v = n("173791"),
                N = n("926622");
            let S = o.default.connectStores([f.default], () => ({
                    hideValue: f.default.hideInstantInvites
                }))(e => {
                    let {
                        value: t,
                        autoFocus: n,
                        hideValue: s,
                        onCopy: r,
                        disabled: o
                    } = e, [c, f] = a.useState(!1), [p, h] = a.useState(!1), I = a.useMemo(() => new u.DelayedCall(1e3, () => h(!1)), [h]);
                    return a.useEffect(() => () => {
                        I.cancel()
                    }, [I]), (0, l.jsxs)("div", {
                        className: i(g.input, v.flexJustifyBetween, v.flexCenter, {
                            [g.success]: p,
                            [g.focused]: c
                        }),
                        children: [(0, l.jsx)(d.TextInput, {
                            className: _.copyInput,
                            name: "invite",
                            value: s ? T.default.Messages.INSTANT_INVITE_HIDDEN : t,
                            editable: !1,
                            inputClassName: _.noBorder,
                            autoFocus: n,
                            onFocus: () => n ? f(!0) : null,
                            onBlur: () => n ? f(!1) : null,
                            spellCheck: "false",
                            onClick: e => e.currentTarget.select(),
                            "aria-label": T.default.Messages.FORM_LABEL_INVITE_LINK,
                            disabled: o
                        }), E.SUPPORTS_COPY ? (0, l.jsx)(d.Button, {
                            size: d.Button.Sizes.SMALL,
                            color: p ? d.Button.Colors.GREEN : d.Button.Colors.BRAND,
                            className: _.copyButton,
                            onClick: () => {
                                h(!0), I.delay(), r(t)
                            },
                            disabled: o,
                            children: p ? T.default.Messages.INVITE_COPIED : T.default.Messages.COPY
                        }) : null]
                    })
                }),
                y = e => {
                    let {
                        guild: t,
                        noInvitesAvailable: n,
                        showFriends: s,
                        onClose: o,
                        modalState: u,
                        isGuestInviteCreationToggleEnabled: f,
                        inviteFlags: g,
                        setInviteFlags: v,
                        showGuestInviteToggleForCurrentVoiceChannel: y,
                        copyValue: P,
                        changePage: b,
                        inviteChannel: x,
                        source: M,
                        code: O,
                        guildScheduledEvent: L,
                        disabled: F
                    } = e, {
                        maxAge: R,
                        maxUses: U,
                        networkError: D,
                        showVanityURL: j
                    } = u, k = a.useCallback(() => {
                        (0, E.copy)(P), p.default.track(A.AnalyticEvents.COPY_INSTANT_INVITE, {
                            server: c.default.getGuildId(),
                            channel: null == x ? void 0 : x.id,
                            channel_type: null == x ? void 0 : x.type,
                            location: M,
                            code: O,
                            guild_scheduled_event_id: null == L ? void 0 : L.id
                        })
                    }, [P, x, M, O, L]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(S, {
                            value: P,
                            autoFocus: s,
                            onCopy: k,
                            disabled: F
                        }), f ? (0, l.jsx)("div", {
                            className: _.temporaryMembershipContainerBackground,
                            children: (0, l.jsx)(d.FormSwitch, {
                                className: _.temporaryMembershipContainer,
                                value: (0, h.hasFlag)(g, r.GuildInviteFlags.IS_GUEST_INVITE),
                                onChange: e => v((0, h.setFlag)(g, r.GuildInviteFlags.IS_GUEST_INVITE, e)),
                                note: T.default.Messages.GUEST_MEMBERSHIP_EXPLANATION,
                                disabled: F,
                                hideBorder: !0,
                                children: y ? T.default.Messages.GRANT_GUEST_MEMBERSHIP_VOICE_ONLY : T.default.Messages.GRANT_GUEST_MEMBERSHIP
                            })
                        }) : null, n || j ? null : (0, l.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: i(N.marginTop8, _.footerText),
                            children: [(0, I.maxAgeString)(R, U), " ", s ? (0, l.jsx)(d.Anchor, {
                                onClick: () => b(m.InstantInviteModalPages.SETTINGS),
                                children: T.default.Messages.INVITE_EDIT_LINK
                            }) : null]
                        }), !n && s && j ? (0, l.jsxs)(d.Text, {
                            variant: "text-xs/normal",
                            className: i(N.marginTop8, _.footerText),
                            children: [T.default.Messages.INVITE_VANITY_USED, " ", (0, l.jsx)(d.Anchor, {
                                onClick: () => b(m.InstantInviteModalPages.SETTINGS),
                                children: T.default.Messages.INVITE_EDIT_LINK
                            })]
                        }) : null, null != D ? (0, l.jsx)(C.InviteErrorMessage, {
                            guild: t,
                            error: D,
                            onClose: o
                        }) : null]
                    })
                }
        },
        865699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteErrorMessage: function() {
                    return c
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("592407"),
                r = n("957255"),
                o = n("49111"),
                u = n("782340"),
                d = n("435808");

            function c(e) {
                let {
                    guild: t,
                    error: n,
                    onClose: c
                } = e, f = t.id, p = a.useCallback(() => {
                    c(), i.default.open(f, o.GuildSettingsSections.INSTANT_INVITES)
                }, [f, c]), E = a.useCallback(e => (0, l.jsx)(s.Clickable, {
                    className: d.errorLink,
                    onClick: p,
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), [p]), h = a.useCallback(e => (0, l.jsx)(s.Anchor, {
                    href: o.MarketingURLs.INVITES_HELP,
                    target: "_blank",
                    children: (0, l.jsx)(s.Text, {
                        variant: "text-xs/normal",
                        color: "text-link",
                        tag: "span",
                        children: e
                    })
                }), []), I = n.code !== o.AbortCodes.TOO_MANY_INVITES ? n.getAnyErrorMessage() : r.default.can(o.Permissions.MANAGE_GUILD, t) ? u.default.Messages.TOO_MANY_INVITES_ERROR.format({
                    inviteListHook: E,
                    inviteHelpHook: h
                }) : u.default.Messages.TOO_MANY_INVITES_ERROR_MEMBER;
                return (0, l.jsx)(s.Text, {
                    className: d.errorMessage,
                    variant: "text-xs/normal",
                    color: "text-danger",
                    children: I
                })
            }
        },
        287850: function(e, t, n) {
            "use strict";
            let l, a, s;
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            }), n("222007"), n("424973");
            var i, r, o = n("866227"),
                u = n.n(o),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                p = n("21121"),
                E = n("934306"),
                h = n("288518"),
                I = n("486503"),
                C = n("233069"),
                m = n("42203"),
                A = n("305961"),
                T = n("660478"),
                _ = n("282109"),
                g = n("697218"),
                v = n("299039"),
                N = n("724210");
            (r = i || (i = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
            let S = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function y(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let l = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        a = e.isMessageRequestTimestamp;
                    if (null != a) {
                        let e = u(a).valueOf(),
                            t = v.default.fromTimestamp(e);
                        return v.default.compare(l, t) > 0 ? l : t
                    }
                    return l
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: _.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
                    isRequest: h.default.isMessageRequest(e.id) || I.default.isSpam(e.id)
                }
            }

            function P() {
                S.clear(), Object.values(m.default.getMutablePrivateChannels()).forEach(e => {
                    S.set(e.id, y(e))
                }), (0, p.isInMainTabsExperiment)() && (0, E.isSplitMessagesTab)() && _.default.getAddedToMessages().forEach(e => {
                    let t = m.default.getChannel(e);
                    null != t && (0, C.isGuildTextChannelType)(t.type) && S.set(t.id, y(t))
                })
            }

            function b() {
                let e = m.default.getMutablePrivateChannels();
                for (let t in e) S.set(t, y(e[t]))
            }
            let x = (l = [], a = [], s = [], () => {
                let e = S.values("FAVORITE"),
                    t = S.values("DEFAULT");
                return (l !== e || a !== t) && (s = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), l = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return s.push(t)
                }), a = t), s
            });
            class M extends d.default.Store {
                initialize() {
                    this.waitFor(m.default, A.default, g.default, h.default, _.default), this.syncWith([_.default, h.default], P)
                }
                getPrivateChannelIds() {
                    return x()
                }
                getSortedChannels() {
                    return [S.values("FAVORITE"), S.values("DEFAULT")]
                }
                serializeForOverlay() {
                    let e = {};
                    return S.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: l
                        } = t;
                        e[n] = l
                    }), e
                }
            }
            M.displayName = "PrivateChannelSortStore";
            var O = new M(f.default, {
                CONNECTION_OPEN: P,
                CONNECTION_OPEN_SUPPLEMENTAL: P,
                OVERLAY_INITIALIZE: P,
                CACHE_LOADED: b,
                CACHE_LOADED_LAZY: b,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, C.isPrivate)(e.type) || S.has(e.id)) && S.set(e.id, y(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, C.isPrivate)(t.type) || t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    S.set(t.id, y(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return S.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!S.has(t)) return !1;
                    let l = m.default.getChannel(t);
                    return null != l && S.set(t, y(l, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return S.delete(t)
                }
            })
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("77078"),
                i = n("393414"),
                r = n("49111"),
                o = a.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: o,
                        onClick: u,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, p = a.useCallback(e => {
                        !e.repeat && ((e.charCode === r.KeyboardKeys.SPACE || e.charCode === r.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, i.transitionTo)(n), null == u || u()), null == d || d(e))
                    }, [n, d, u]), E = a.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, i.transitionTo)(n), null == u || u())
                    }, [n, u]), h = (0, l.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: E,
                        onKeyPress: p,
                        ...f,
                        children: o
                    });
                    return (0, l.jsx)(s.FocusRing, {
                        ...c,
                        children: h
                    })
                })
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
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return i
                },
                copy: function() {
                    return r
                }
            }), n("70102");
            var l = n("281071"),
                a = n("773336"),
                s = n("50885");
            let i = (() => {
                if (a.isPlatformEmbedded) return null != s.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!i && (a.isPlatformEmbedded ? (s.default.copy(e), !0) : l.copy(e))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return r
                }
            });
            var l = n("884691"),
                a = n("446674"),
                s = n("244201"),
                i = n("471671");

            function r() {
                let {
                    windowId: e
                } = l.useContext(s.default);
                return (0, a.useStateFromStores)([i.default], () => i.default.isFocused(e), [e])
            }
        },
        498574: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                GuildInviteFlags: function() {
                    return l
                }
            }), n("222007"), (a = l || (l = {}))[a.IS_GUEST_INVITE = 1] = "IS_GUEST_INVITE", a[a.IS_VIEWED = 2] = "IS_VIEWED", a[a.IS_ENHANCED = 4] = "IS_ENHANCED"
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
                let s = document.execCommand("copy");
                return t.removeChild(a), s
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return l
                }
            }), n("70102")
        }
    }
]);