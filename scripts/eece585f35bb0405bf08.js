(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64823"], {
        57155: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ee
                }
            }), n("222007"), n("424973"), n("860677"), n("70102");
            var a = n("37983"),
                l = n("884691"),
                r = n("414456"),
                i = n.n(r),
                o = n("627445"),
                s = n.n(o),
                u = n("917351"),
                c = n.n(u),
                d = n("509043"),
                f = n("446674"),
                R = n("819855"),
                m = n("77078"),
                E = n("430568"),
                h = n("145079"),
                A = n("87657"),
                T = n("206230"),
                g = n("867805"),
                _ = n("584375"),
                S = n("430475"),
                O = n("390236"),
                p = n("185014"),
                I = n("875978"),
                M = n("512306"),
                N = n("941723"),
                C = n("166257"),
                y = n("432173"),
                v = n("300322"),
                b = n("161778"),
                j = n("42203"),
                U = n("26989"),
                x = n("486996"),
                D = n("377253"),
                w = n("957255"),
                B = n("27618"),
                L = n("697218"),
                F = n("145131"),
                k = n("945330"),
                P = n("315102"),
                Y = n("402671"),
                G = n("387111"),
                H = n("441823"),
                V = n("49111"),
                z = n("782340"),
                J = n("324673"),
                q = n("926622");

            function K(e) {
                return null == e.id ? g.default.convertSurrogateToName(e.name) : ":".concat(e.name, ":")
            }
            let W = e => {
                let {
                    emoji: t,
                    channelId: n,
                    messageId: r
                } = e, [o, s] = l.useState(!0), [u, c] = l.useState([]), d = l.useMemo(() => {
                    if (null == u || u.length < 1) return;
                    let e = (0, N.buildEffect)(t, u[0], n, {
                        emojiSize: M.BurstReactionSize.LARGE,
                        messageId: r
                    });
                    return (0, a.jsx)(M.default, {
                        className: J.effect,
                        effect: e,
                        emojiSize: M.BurstReactionSize.LARGE,
                        onComplete: () => s(!1)
                    })
                }, [u, t, n, r]);
                return l.useEffect(() => {
                    let e = !1;
                    return s(!0), !async function() {
                        let n = await (0, Y.getEmojiColors)(t);
                        Array.isArray(n) && n.length > 0 && !e && c(n)
                    }(), () => {
                        e = !0
                    }
                }, [t]), (0, a.jsxs)("div", {
                    className: J.burstEmojiSection,
                    children: [d, (0, a.jsx)(E.default, {
                        className: i(J.burstEmoji, {
                            [J.hideEmoji]: o
                        }),
                        emojiId: t.id,
                        emojiName: t.name,
                        animated: t.animated,
                        size: "reaction"
                    }), (0, a.jsx)(m.Text, {
                        variant: "text-md/medium",
                        children: K(t)
                    })]
                })
            };
            class X extends l.PureComponent {
                render() {
                    let {
                        emoji: e,
                        count: t,
                        isSelected: n,
                        setSelected: l,
                        reactionType: r,
                        colors: o
                    } = this.props, s = K(e), u = function(e, t, n, l) {
                        let r = null == e.id ? Y.default.getURL(e.name) : P.default.getEmojiURL({
                            id: e.id,
                            animated: e.animated,
                            size: 24
                        });
                        return null != r && "" !== r ? (0, a.jsx)("img", {
                            className: n,
                            src: r,
                            alt: e.name
                        }) : (0, a.jsx)("span", {
                            className: l,
                            children: e.name
                        })
                    }(e, 24, J.emoji, i(J.emoji, J.emojiText)), c = r === I.ReactionTypes.BURST, f = c ? z.default.Messages.BURST_REACTION_REACTORS_A11Y : z.default.Messages.REACTION_REACTORS_A11Y, R = f.format({
                        name: s,
                        n: t
                    }), E = {}, h = {};
                    if (c) {
                        let {
                            backgroundColor: e = "",
                            opacity: t = 1,
                            accentColor: a = ""
                        } = null != o ? o : {};
                        if (h.color = a, n) {
                            var A;
                            E.background = null !== (A = (0, d.hex2rgb)(e, t)) && void 0 !== A ? A : ""
                        }
                    }
                    return (0, a.jsx)(m.Tooltip, {
                        position: "left",
                        text: s,
                        children: o => {
                            let {
                                onMouseEnter: s,
                                onMouseLeave: c
                            } = o;
                            return (0, a.jsxs)(m.Clickable, {
                                className: i({
                                    [J.reactionDefault]: !n,
                                    [J.reactionSelected]: n
                                }),
                                "aria-label": R,
                                onClick: () => l({
                                    emoji: e,
                                    reactionType: r
                                }),
                                onMouseEnter: s,
                                onMouseLeave: c,
                                style: E,
                                children: [u, (0, a.jsx)(m.Text, {
                                    variant: "text-sm/bold",
                                    style: h,
                                    children: t
                                })]
                            })
                        }
                    })
                }
            }

            function Z(e) {
                let {
                    emoji: t,
                    user: n,
                    message: l,
                    channel: r,
                    guildId: i,
                    reactionType: o,
                    onRemoveReactor: u,
                    disableManage: c = !1
                } = e, d = L.default.getCurrentUser(), R = (0, f.useStateFromStores)([L.default], () => L.default.getUser(n.id), [n]);
                s(null != d, "Reactor: currentUser cannot be undefined");
                let E = (0, v.useIsActiveChannelOrUnarchivableThread)(r),
                    T = (0, f.useStateFromStores)([w.default], () => w.default.can(V.Permissions.MANAGE_MESSAGES, r) && E),
                    g = T || d.id === n.id,
                    _ = (0, f.useStateFromStores)([U.default, j.default, B.default], () => G.default.getName(i, r.id, n));
                return (0, a.jsxs)(F.default, {
                    className: J.reactorDefault,
                    onContextMenu: e => (0, H.openUserContextMenu)(e, n, r),
                    align: F.default.Align.CENTER,
                    children: [(0, a.jsx)(F.default.Child, {
                        wrap: !0,
                        grow: 0,
                        shrink: 0,
                        className: q.marginReset,
                        children: (0, a.jsx)(A.default, {
                            user: null != R ? R : n,
                            size: m.AvatarSizes.SIZE_24
                        })
                    }), (0, a.jsx)(F.default.Child, {
                        children: (0, a.jsxs)(m.Text, {
                            tag: "strong",
                            variant: "text-md/normal",
                            className: J.name,
                            children: [null != _ && "" !== _ && (0, a.jsx)("span", {
                                className: n.isPomelo() ? "" : J.nickname,
                                children: _
                            }), (0, a.jsx)(h.default, {
                                user: n,
                                className: null != _ && "" !== _ ? J.tagFaded : null,
                                usernameClass: J.username,
                                discriminatorClass: J.discriminator,
                                forceUsername: !0
                            })]
                        })
                    }), !c && g && (0, a.jsx)(m.Clickable, {
                        onClick: function() {
                            C.removeReactionWithConfirmation({
                                emoji: t,
                                userId: n.id,
                                channelId: r.id,
                                messageId: l.id,
                                reactionType: o,
                                isMe: (null == d ? void 0 : d.id) === n.id
                            }), null == u || u()
                        },
                        children: (0, a.jsx)(k.default, {
                            width: 16,
                            height: 16,
                            className: J.remove
                        })
                    })]
                })
            }
            class Q extends l.PureComponent {
                componentDidMount() {
                    this.loadMore()
                }
                componentDidUpdate(e) {
                    (!c.isEqual(this.props.reaction, e.reaction) || this.props.reactionType !== e.reactionType) && this.setState({
                        lastId: null,
                        loadingMore: !1
                    }, () => this.loadMore())
                }
                loadMore() {
                    let {
                        message: e,
                        reaction: t,
                        reactionType: n
                    } = this.props, {
                        lastId: a
                    } = this.state;
                    this.setState({
                        loadingMore: !0
                    }), C.getReactors({
                        channelId: e.getChannelId(),
                        messageId: e.id,
                        emoji: t.emoji,
                        limit: V.DEFAULT_NUM_REACTION_USERS,
                        after: a,
                        type: n
                    }).then(e => {
                        var t;
                        return this.setState({
                            loadingMore: !1,
                            lastId: null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.id
                        })
                    })
                }
                renderSection() {
                    return null
                }
                render() {
                    let {
                        hasMore: e,
                        reactors: t,
                        reaction: n,
                        message: l,
                        reactionType: r
                    } = this.props, i = [];
                    return 0 === t.length && this.state.loadingMore ? i.push(length) : (i.push(t.length), e && i.push(1)), (0, a.jsxs)("div", {
                        className: J.reactorsContainer,
                        children: [r === I.ReactionTypes.BURST && (0, a.jsx)(W, {
                            emoji: n.emoji,
                            channelId: l.getChannelId(),
                            messageId: l.id
                        }), (0, a.jsx)(m.List, {
                            className: J.reactors,
                            fade: !0,
                            ref: this.scrollerRef,
                            sections: i,
                            sectionHeight: 0,
                            rowHeight: this.getRowHeight,
                            renderRow: this.renderRow,
                            renderSection: this.renderSection,
                            onScroll: e ? this.handleScroll : void 0
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.scrollerRef = l.createRef(), this.state = {
                        lastId: null,
                        loadingMore: !1
                    }, this.handleScroll = () => {
                        let {
                            current: e
                        } = this.scrollerRef;
                        if (null == e) return;
                        let t = e.getScrollerState();
                        t.scrollTop + t.offsetHeight >= t.scrollHeight - 44 && this.props.hasMore && !this.state.loadingMore && this.loadMore()
                    }, this.getRowHeight = (e, t) => {
                        let {
                            reactors: n
                        } = this.props;
                        if (1 === e) return 0 === t ? 44 : 0;
                        if (0 === e) {
                            if (0 === t && 0 === n.length) return 440;
                            if (null != this.props.reactors[t]) return 44
                        }
                        return 0
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e, {
                            message: l,
                            guildId: r,
                            channel: i,
                            reaction: o,
                            reactors: s,
                            reactionType: u,
                            disableManage: c
                        } = this.props, d = s[n];
                        if (1 === t) return 0 === n ? (0, a.jsx)(m.Spinner, {
                            className: J.spinnerMore
                        }, "hasMore") : null;
                        return 0 === s.length && this.state.loadingMore ? (0, a.jsx)(m.Spinner, {
                            className: J.spinner
                        }, "loadingMore") : null != d && (0, a.jsx)(Z, {
                            message: l,
                            emoji: o.emoji,
                            guildId: r,
                            channel: i,
                            user: d,
                            reaction: o,
                            reactionType: u,
                            disableManage: c
                        }, d.id)
                    }
                }
            }
            let $ = f.default.connectStores([x.default], e => {
                let {
                    message: t,
                    reaction: n,
                    reactionType: a
                } = e, l = x.default.getReactions(t.getChannelId(), t.id, n.emoji, V.DEFAULT_NUM_REACTION_USERS, a);
                if (null == l) return {
                    reactors: [],
                    hasMore: !1
                };
                let r = Object.values(l),
                    i = a === I.ReactionTypes.BURST ? n.burst_count : n.count,
                    o = i > r.length;
                return {
                    reactors: r,
                    hasMore: o
                }
            })(Q);

            function ee(e) {
                var t;
                let {
                    message: n,
                    selectedReaction: r,
                    disableManage: i = !1,
                    disableTabs: o = !1,
                    onClose: s,
                    transitionState: u,
                    "aria-label": c = z.default.Messages.REACTIONS
                } = e, d = (0, f.useStateFromStores)([j.default], () => j.default.getChannel(n.getChannelId())), E = null == d ? void 0 : d.getGuildId(), h = (0, f.useStateFromStores)([D.default, S.default, p.default], () => {
                    var e, t, a;
                    let l = null !== (a = null !== (t = D.default.getMessage(n.getChannelId(), n.id)) && void 0 !== t ? t : null === (e = S.default.getMessage(n.id)) || void 0 === e ? void 0 : e.firstMessage) && void 0 !== a ? a : null != E ? p.default.getCachedMessage(E, n.getChannelId(), n.id) : void 0;
                    return null != l ? l.reactions : []
                }, [n, E]);
                let A = (t = h, l.useMemo(() => {
                        let e = [];
                        return t.forEach(t => {
                            t.burst_count > 0 && e.push({
                                ...t,
                                count: 0
                            }), t.count > 0 && e.push({
                                ...t,
                                burst_count: 0
                            })
                        }), e.sort((e, t) => {
                            let n = e.burst_count > 0 ? e.burst_count : e.count,
                                a = t.burst_count > 0 ? t.burst_count : t.count;
                            return a - n
                        }), e
                    }, [t])),
                    g = A[0],
                    M = null != g ? {
                        emoji: g.emoji,
                        reactionType: g.burst_count > 0 ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL
                    } : null,
                    [N, C] = function(e, t, n) {
                        let [a, r] = l.useState(null != e ? e : t);
                        return l.useEffect(() => {
                            if (null != a) {
                                let e = n.find(e => {
                                    let t = null != e.me_vote ? I.ReactionTypes.VOTE : e.burst_count > 0 ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL;
                                    return (0, y.emojiEquals)(e.emoji, a.emoji) && t === a.reactionType
                                });
                                null == e && r(t)
                            }
                        }, [a, r, n, t]), [a, r]
                    }(r, M, h),
                    v = l.useMemo(() => {
                        var e;
                        return null == N ? null : null !== (e = h.find(e => (0, y.emojiEquals)(e.emoji, N.emoji))) && void 0 !== e ? e : null
                    }, [h, N]),
                    U = (0, f.useStateFromStores)([T.default], () => T.default.saturation),
                    x = (0, f.useStateFromStores)([b.default], () => (0, R.isThemeDark)(b.default.theme));
                if (l.useEffect(() => {
                        (0 === h.length || null == N && null == v) && setImmediate(s)
                    }, [s, h.length, v, N]), null == N || null == v) return (0, a.jsx)(m.Spinner, {});
                if (null == d) throw Error("MessageReactions.render: Message does not have a channelId");
                return (0, a.jsx)(O.default.Provider, {
                    value: null != E ? E : void 0,
                    children: (0, a.jsxs)(m.ModalRoot, {
                        "aria-label": c,
                        transitionState: u,
                        size: m.ModalSize.DYNAMIC,
                        className: J.container,
                        children: [o ? null : (0, a.jsx)(m.Scroller, {
                            className: J.scroller,
                            fade: !0,
                            children: A.map(e => {
                                var t;
                                let n = e.burst_count > 0;
                                return (0, a.jsx)(X, {
                                    isSelected: et(N, e, n ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL),
                                    setSelected: C,
                                    reactionType: n ? I.ReactionTypes.BURST : I.ReactionTypes.NORMAL,
                                    emoji: e.emoji,
                                    count: n ? e.burst_count : e.count,
                                    colors: null != e.burst_colors ? (0, _.buildEmojiColorPalette)(e.burst_colors, U, x) : void 0
                                }, "".concat(n ? "burst-" : "normal-").concat(null !== (t = e.emoji.id) && void 0 !== t ? t : "", ":").concat(e.emoji.name))
                            })
                        }), (0, a.jsx)($, {
                            message: n,
                            reaction: v,
                            guildId: E,
                            channel: d,
                            reactionType: N.reactionType,
                            disableManage: i
                        })]
                    })
                })
            }
            let et = (e, t, n) => c.isEqual(e.emoji, t.emoji) && e.reactionType === n
        },
        15935: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BurstReactionEffectSource: function() {
                    return a
                },
                default: function() {
                    return R
                }
            }), n("222007");
            var a, l, r = n("446674"),
                i = n("913144");
            (l = a || (a = {})).HOVER = "HOVER", l.EXTERNAL = "EXTERNAL", l.RANDOM = "RANDOM";
            let o = {},
                s = {},
                u = {},
                c = (e, t) => {
                    let n = null != t.id ? t.id : t.name;
                    return "".concat(e, ":").concat(n)
                },
                d = (e, t) => {
                    var n;
                    let a;
                    switch (e) {
                        case "HOVER":
                            a = "HOVER";
                            break;
                        case "RANDOM":
                            a = "RANDOM";
                            break;
                        default:
                            a = "EXTERNAL"
                    }
                    let l = Object.entries(null !== (n = s[t]) && void 0 !== n ? n : {}),
                        r = l.filter(e => {
                            let [, t] = e;
                            return t === a
                        }),
                        i = Object.fromEntries(r);
                    if (Object.keys(i).length >= 5 && "EXTERNAL" === e) {
                        for (let e in i)
                            if (null == u[t] || null == u[t][e]) {
                                delete s[t][e], delete i[e];
                                break
                            }
                    }
                    return Object.keys(i).length
                };
            class f extends r.default.Store {
                getReactionPickerAnimation(e, t, n) {
                    return o["".concat(e, ":").concat(t, ":").concat(null != n ? n : "")]
                }
                getEffectForEmojiId(e, t, n) {
                    var a;
                    let l = c(t, n);
                    return null === (a = s[e]) || void 0 === a ? void 0 : a[l]
                }
            }
            f.displayName = "BurstReactionEffectsStore";
            var R = new f(i.default, {
                BURST_REACTION_EFFECT_CLEAR: e => {
                    var t;
                    let {
                        channelId: n,
                        messageId: a,
                        emoji: l
                    } = e, r = c(a, l);
                    null === (t = s[n]) || void 0 === t || delete t[r]
                },
                BURST_REACTION_EFFECT_PLAY: e => {
                    var t, n, a;
                    let {
                        channelId: l,
                        messageId: r,
                        emoji: i,
                        key: o
                    } = e, f = c(r, i);
                    if (d(o, l) >= 5) return;
                    let R = null !== (t = s[l]) && void 0 !== t ? t : {},
                        m = null !== (n = u[l]) && void 0 !== n ? n : {},
                        E = m[f],
                        h = R[f];
                    if ("HOVER" !== o || null == h) {
                        "HOVER" === h && "EXTERNAL" === o && null != E && ("function" == typeof E.destroy && E.destroy(), null === (a = u[l]) || void 0 === a || delete a[f], h = void 0);
                        null == h && (null != s[l] ? s[l][f] = o : s[l] = {
                            [f]: o
                        })
                    }
                },
                BURST_REACTION_ANIMATION_ADD: e => {
                    let {
                        channelId: t,
                        messageId: n,
                        emoji: a,
                        animation: l
                    } = e, r = c(n, a);
                    null == u[t] && (u[t] = {}), u[t][r] = l
                },
                BURST_REACTION_PICKER_ANIMATION_ADD: e => {
                    let {
                        messageId: t,
                        emojiName: n,
                        emojiId: a,
                        startPosition: l
                    } = e;
                    o["".concat(t, ":").concat(n, ":").concat(null != a ? a : "")] = l
                },
                BURST_REACTION_PICKER_ANIMATION_CLEAR: e => {
                    let {
                        messageId: t,
                        emojiName: n,
                        emojiId: a
                    } = e;
                    delete o["".concat(t, ":").concat(n, ":").concat(null != a ? a : "")]
                }
            })
        },
        103475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                replaceAnimationColors: function() {
                    return i
                },
                getBurstAnimationHash: function() {
                    return o
                }
            }), n("781738");
            var a, l = n("917351"),
                r = n("284679");
            (a || (a = {})).OUT_OF_BURSTS = "out of burst reactions modal";
            let i = (e, t) => {
                    let n = (0, r.getComplimentaryPaletteForColor)([t.r, t.g, t.b], 2);
                    return e = (e = e.replace(/(\[1,0,0,)/g, "[".concat(n[0][0] / 255, ",").concat(n[0][1] / 255, ",").concat(n[0][2] / 255, ","))).replace(/\[0,0,1,/g, "[".concat(n[1][0] / 255, ",").concat(n[1][1] / 255, ",").concat(n[1][2] / 255, ","))
                },
                o = (0, l.memoize)(e => {
                    let t = 0;
                    for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n);
                    return Math.abs(t)
                })
        },
        569512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getBurstAnimation: function() {
                    return r
                }
            });
            var a = n("103475");
            let l = [{
                    load: () => n.el("448779").then(n.t.bind(n, "448779", 19))
                }, {
                    load: () => n.el("734436").then(n.t.bind(n, "734436", 19))
                }, {
                    load: () => n.el("494925").then(n.t.bind(n, "494925", 19))
                }, {
                    load: () => n.el("199777").then(n.t.bind(n, "199777", 19))
                }, {
                    load: () => n.el("942466").then(n.t.bind(n, "942466", 19))
                }, {
                    load: () => n.el("56957").then(n.t.bind(n, "56957", 19))
                }, {
                    load: () => n.el("547173").then(n.t.bind(n, "547173", 19))
                }, {
                    load: () => n.el("485996").then(n.t.bind(n, "485996", 19))
                }, {
                    load: () => n.el("871996").then(n.t.bind(n, "871996", 19))
                }, {
                    load: () => n.el("584037").then(n.t.bind(n, "584037", 19))
                }, {
                    load: () => n.el("320512").then(n.t.bind(n, "320512", 19))
                }, {
                    load: () => n.el("925536").then(n.t.bind(n, "925536", 19))
                }, {
                    load: () => n.el("522373").then(n.t.bind(n, "522373", 19))
                }, {
                    load: () => n.el("837366").then(n.t.bind(n, "837366", 19))
                }, {
                    load: () => n.el("42949").then(n.t.bind(n, "42949", 19))
                }, {
                    load: () => n.el("294705").then(n.t.bind(n, "294705", 19))
                }, {
                    load: () => n.el("454599").then(n.t.bind(n, "454599", 19))
                }, {
                    load: () => n.el("814738").then(n.t.bind(n, "814738", 19))
                }],
                r = async function(e, t, n) {
                    arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    let r = (0, a.getBurstAnimationHash)("".concat(e).concat(t).concat(n)),
                        i = l[r % l.length];
                    return await i.load()
                }
        },
        512306: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BurstReactionSize: function() {
                    return l
                },
                default: function() {
                    return A
                }
            });
            var a, l, r = n("37983"),
                i = n("884691"),
                o = n("414456"),
                s = n.n(o),
                u = n("245749"),
                c = n.n(u),
                d = n("913144"),
                f = n("15935"),
                R = n("569512"),
                m = n("941723"),
                E = n("256346");
            (a = l || (l = {}))[a.NORMAL = 16] = "NORMAL", a[a.LARGE = 32] = "LARGE";
            let h = async e => {
                var t;
                let {
                    effect: n
                } = e, a = await (0, R.getBurstAnimation)(n.channelId, null !== (t = n.messageId) && void 0 !== t ? t : "", n.emoji.name), l = await (0, m.getResizedAnimation)("".concat(n.channelId, ":").concat(n.messageId, ":").concat(n.emoji.name), n.url, a, n.color);
                return l.assets[0].p = n.url, l
            };

            function A(e) {
                let {
                    className: t,
                    effect: n,
                    onComplete: a,
                    emojiSize: l = 16
                } = e, o = i.useRef(null), u = l * m.ANIMATION_TO_EMOJI_RATIO, R = (u + l) / 2;
                return i.useEffect(() => {
                    let e;
                    if (null != n) return !async function() {
                        if (null != o.current) {
                            let t = await h({
                                effect: n
                            });
                            (e = c.loadAnimation({
                                container: o.current,
                                renderer: "svg",
                                loop: !1,
                                autoplay: !0,
                                animationData: t
                            })).addEventListener("complete", () => {
                                null == a || a(), e.destroy()
                            }), null != n.channelId && null != n.messageId && null != n.emoji && n.key === f.BurstReactionEffectSource.HOVER && d.default.dispatch({
                                type: "BURST_REACTION_ANIMATION_ADD",
                                channelId: n.channelId,
                                messageId: n.messageId,
                                emoji: n.emoji,
                                animation: e
                            })
                        }
                    }(), () => {
                        null != e && e.destroy()
                    }
                }, [a, n, l]), (0, r.jsx)("div", {
                    className: E.effectsWrapper,
                    children: (0, r.jsx)("div", {
                        className: s(E.effect, t),
                        style: {
                            transform: "translateY(".concat(R, "px)"),
                            height: u,
                            width: u
                        },
                        ref: o
                    })
                })
            }
        },
        941723: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ANIMATION_TO_EMOJI_RATIO: function() {
                    return u
                },
                getResizedAnimation: function() {
                    return c
                },
                buildEffect: function() {
                    return d
                }
            }), n("781738");
            var a = n("917351"),
                l = n("748820"),
                r = n("407063"),
                i = n("397485"),
                o = n("284679"),
                s = n("103475");
            let u = 7.5,
                c = (0, a.memoize)((e, t, n, a) => new Promise(e => {
                    let l = new Image;
                    l.src = t, l.crossOrigin = "Anonymous", l.onload = () => {
                        let t = 32 * (0, r.getDevicePixelRatio)(),
                            i = JSON.stringify(n);
                        if (null != a && (i = (0, s.replaceAnimationColors)(i, (0, o.hexToRgb)(a))), l.width === t && l.height === t || 0 === l.width && 0 === l.height) e(JSON.parse(i));
                        else {
                            let t = 128 / l.width * l.height;
                            e(JSON.parse(i = (i = i.replace(/"w":128,"h":128/, '"w":128,"h":'.concat(t))).replace(/"a":{"a":0,"k":\[64,64/, '"a":{"a":0,"k":[64,'.concat(t / 2))))
                        }
                    }
                }));

            function d(e, t, n, a) {
                let {
                    emojiSize: r,
                    key: o,
                    messageId: s
                } = null != a ? a : {}, u = (0, i.getEffectUrl)(e, null != r ? 2 * r : void 0);
                return {
                    channelId: n,
                    messageId: s,
                    emoji: e,
                    animationId: (0, l.v4)(),
                    url: u,
                    key: o,
                    color: t
                }
            }
        },
        166257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ReactionLocations: function() {
                    return l
                },
                getReactors: function() {
                    return S
                },
                addReaction: function() {
                    return O
                },
                playBurstReaction: function() {
                    return p
                },
                removeAllReactions: function() {
                    return I
                },
                removeEmojiReactions: function() {
                    return M
                },
                removeReaction: function() {
                    return N
                },
                removeReactionWithConfirmation: function() {
                    return y
                }
            });
            var a, l, r = n("872717"),
                i = n("819855"),
                o = n("913144"),
                s = n("404118"),
                u = n("875978"),
                c = n("263024"),
                d = n("271938"),
                f = n("377253"),
                R = n("659500"),
                m = n("402671"),
                E = n("61069"),
                h = n("49111"),
                A = n("782340");

            function T(e, t, n) {
                let {
                    status: a,
                    body: l
                } = e;
                if (429 === a) return setTimeout(t, 1e3 * e.body.retry_after), !1;
                if (403 === a) switch (l && l.code) {
                    case h.AbortCodes.TOO_MANY_REACTIONS:
                        s.default.show({
                            title: A.default.Messages.TOO_MANY_REACTIONS_ALERT_HEADER,
                            body: A.default.Messages.TOO_MANY_REACTIONS_ALERT_BODY,
                            confirmText: A.default.Messages.OKAY
                        });
                        break;
                    case h.AbortCodes.REACTION_BLOCKED:
                        R.ComponentDispatch.dispatch(h.ComponentActions.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        })
                } else if (!n.isRetry) return t(), !1;
                return !0
            }

            function g(e, t, n, a, l) {
                var r, i, s;
                o.default.dispatch({
                    type: e,
                    channelId: t,
                    messageId: n,
                    userId: null !== (r = null == l ? void 0 : l.userId) && void 0 !== r ? r : d.default.getId(),
                    emoji: a,
                    optimistic: !0,
                    burst: null !== (i = null == l ? void 0 : l.burst) && void 0 !== i && i,
                    colors: null !== (s = null == l ? void 0 : l.colors) && void 0 !== s ? s : []
                })
            }

            function _(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    userId: l,
                    useTypeEndpoint: r = !1,
                    type: i = u.ReactionTypes.NORMAL
                } = e, o = null != a.id ? "".concat(a.name, ":").concat(a.id) : a.name;
                return null == l ? h.Endpoints.REACTIONS(t, n, o) : r ? h.Endpoints.REACTION_WITH_TYPE(t, n, o, l, i) : h.Endpoints.REACTION(t, n, o, l)
            }
            async function S(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    limit: l,
                    after: i,
                    type: s
                } = e, u = await r.default.get({
                    url: _({
                        channelId: t,
                        messageId: n,
                        emoji: a
                    }),
                    query: {
                        limit: l,
                        after: i,
                        type: s
                    },
                    oldFormErrors: !0
                });
                return o.default.dispatch({
                    type: "MESSAGE_REACTION_ADD_USERS",
                    channelId: t,
                    messageId: n,
                    users: u.body,
                    emoji: a,
                    reactionType: s
                }), u.body
            }
            async function O(e, t, n) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "Message",
                    l = arguments.length > 4 ? arguments[4] : void 0,
                    o = null != l && !!l.burst,
                    d = null != l && !!l.isRetry;
                if (!d && function(e, t, n, a) {
                        let l = f.default.getMessage(e, t);
                        return null != l && l.userHasReactedWithEmoji(n, a)
                    }(e, t, n, o)) {
                    s.default.show({
                        title: A.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_TITLE,
                        body: A.default.Messages.EMOJI_PICKER_DOUBLE_REACTION_SUPER_ERROR_BODY,
                        confirmText: A.default.Messages.GOT_IT
                    });
                    return
                }
                let R = await C(n, o);
                g("MESSAGE_REACTION_ADD", e, t, n, {
                    burst: o,
                    colors: R
                }), await c.default.unarchiveThreadIfNecessary(e), r.default.put({
                    url: _({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: "@me"
                    }),
                    query: {
                        location: a,
                        type: o ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL
                    },
                    oldFormErrors: !0
                }).then(() => {
                    o ? (i.AccessibilityAnnouncer.announce(A.default.Messages.BURST_REACTION_ADD_UNLIMITED_SUCCESS_A11Y.format({
                        name: n.name
                    })), E.default.triggerFullscreenAnimation({
                        channelId: e,
                        messageId: t,
                        emoji: {
                            ...n,
                            animated: !1
                        }
                    })) : i.AccessibilityAnnouncer.announce(A.default.Messages.REACTION_ADD_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(l => {
                    T(l, () => O(e, t, n, a, {
                        burst: o,
                        isRetry: !0
                    }), {
                        isRetry: d
                    }) && (g("MESSAGE_REACTION_REMOVE", e, t, n, {
                        burst: o
                    }), o ? i.AccessibilityAnnouncer.announce(A.default.Messages.BURST_REACTION_ADD_UNLIMITED_ERROR_A11Y.format({
                        name: n.name
                    })) : i.AccessibilityAnnouncer.announce(A.default.Messages.REACTION_ADD_ERROR_A11Y.format({
                        name: n.name
                    })))
                })
            }

            function p(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    key: l
                } = e;
                o.default.dispatch({
                    type: "BURST_REACTION_EFFECT_PLAY",
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    key: l
                })
            }
            async function I(e, t, n) {
                let a = null != n && !!n.isRetry;
                await c.default.unarchiveThreadIfNecessary(e), r.default.delete({
                    url: h.Endpoints.REMOVE_REACTIONS(e, t),
                    oldFormErrors: !0
                }).catch(n => {
                    T(n, () => I(e, t, {
                        isRetry: !0
                    }), {
                        isRetry: a
                    })
                })
            }
            async function M(e, t, n, a) {
                let l = null != a && !!a.isRetry;
                await c.default.unarchiveThreadIfNecessary(e);
                let i = null === n.id ? n.name : "".concat(n.name, ":").concat(n.id);
                r.default.delete({
                    url: h.Endpoints.REMOVE_EMOJI_REACTIONS(e, t, i),
                    oldFormErrors: !0
                }).catch(a => {
                    T(a, () => M(e, t, n, {
                        isRetry: !0
                    }), {
                        isRetry: l
                    })
                })
            }
            async function N(e, t, n, a) {
                let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Message",
                    o = arguments.length > 5 ? arguments[5] : void 0,
                    s = null != o && !!o.burst,
                    d = null != o && !!o.isRetry;
                g("MESSAGE_REACTION_REMOVE", e, t, n, {
                    userId: a,
                    burst: s
                }), await c.default.unarchiveThreadIfNecessary(e), r.default.delete({
                    url: _({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        userId: null != a ? a : "@me",
                        type: s ? u.ReactionTypes.BURST : u.ReactionTypes.NORMAL,
                        useTypeEndpoint: !0
                    }),
                    query: {
                        location: l,
                        burst: s
                    },
                    oldFormErrors: !0
                }).then(() => {
                    (null == o ? void 0 : o.burst) ? i.AccessibilityAnnouncer.announce(A.default.Messages.BURST_REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    })): i.AccessibilityAnnouncer.announce(A.default.Messages.REACTION_REMOVE_SUCCESS_A11Y.format({
                        name: n.name
                    }))
                }).catch(async r => {
                    if (T(r, () => N(e, t, n, a, l, {
                            burst: s,
                            isRetry: !0
                        }), {
                            isRetry: d
                        })) {
                        let l = await C(n, s);
                        g("MESSAGE_REACTION_ADD", e, t, n, {
                            userId: a,
                            burst: s,
                            colors: l
                        }), (null == o ? void 0 : o.burst) ? i.AccessibilityAnnouncer.announce(A.default.Messages.BURST_REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        })) : i.AccessibilityAnnouncer.announce(A.default.Messages.REACTION_REMOVE_ERROR_A11Y.format({
                            name: n.name
                        }))
                    }
                })
            }
            async function C(e, t) {
                let n = [];
                if (t) try {
                    n = await (0, m.getEmojiColors)(e)
                } catch {}
                return n
            }(a = l || (l = {})).MESSAGE = "Message", a.FORUM_TOOLBAR = "Forum Toolbar", a.MOBILE_MEDIA_VIEWER = "Mobile Media Viewer";

            function y(e) {
                let {
                    channelId: t,
                    messageId: n,
                    emoji: a,
                    reactionType: l,
                    userId: r,
                    location: i
                } = e, o = l === u.ReactionTypes.BURST;
                N(t, n, a, r, i, {
                    burst: o
                })
            }
        },
        486996: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("446674"),
                l = n("913144"),
                r = n("267567"),
                i = n("875978"),
                o = n("166257"),
                s = n("766274"),
                u = n("42203"),
                c = n("697218");
            let d = {};
            class f {
                static ensure(e, t, n) {
                    var a, l;
                    let r = "".concat(e, ":").concat(t.name, ":").concat(null !== (a = t.id) && void 0 !== a ? a : "", ":").concat(n);
                    return d[r] = null !== (l = d[r]) && void 0 !== l ? l : new f
                }
                constructor() {
                    this.fetched = !1, this.users = {}
                }
            }

            function R(e) {
                let {
                    type: t,
                    messageId: n,
                    userId: a,
                    emoji: l,
                    burst: r,
                    reactionType: o
                } = e, s = null != o ? o : r ? i.ReactionTypes.BURST : i.ReactionTypes.NORMAL, u = f.ensure(n, l, s);
                if ("MESSAGE_REACTION_ADD" === t) {
                    let e = c.default.getUser(a);
                    null != e && (u.users[a] = e)
                } else delete u.users[a]
            }
            class m extends a.default.Store {
                getReactions(e, t, n, a, l) {
                    let i = f.ensure(t, n, l);
                    if (!i.fetched) {
                        let s = u.default.getChannel(e),
                            c = null != s ? s.getGuildId() : null;
                        if (null != c && r.default.isLurking(c)) return;
                        o.getReactors({
                            channelId: e,
                            messageId: t,
                            emoji: n,
                            limit: a,
                            type: l
                        }), i.fetched = !0
                    }
                    return i.users
                }
            }
            m.displayName = "MessageReactionsStore";
            var E = new m(l.default, {
                CONNECTION_OPEN: function() {
                    d = {}
                },
                MESSAGE_REACTION_ADD: R,
                MESSAGE_REACTION_REMOVE: R,
                MESSAGE_REACTION_ADD_USERS: function(e) {
                    let {
                        messageId: t,
                        users: n,
                        emoji: a,
                        reactionType: l
                    } = e, r = f.ensure(t, a, l);
                    n.forEach(e => r.users[e.id] = new s.default(e))
                }
            })
        }
    }
]);