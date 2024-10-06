n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(91192),
    o = n(442837),
    c = n(481060),
    u = n(904245),
    d = n(902840),
    h = n(607070),
    p = n(835473),
    m = n(95398),
    _ = n(580747),
    f = n(135938),
    E = n(160404),
    g = n(765104),
    C = n(695346),
    I = n(314897),
    T = n(323873),
    x = n(607744),
    S = n(375954),
    v = n(496675),
    N = n(306680),
    A = n(62817),
    Z = n(594174),
    M = n(459273),
    b = n(255269),
    R = n(47481),
    L = n(977391),
    j = n(73274),
    P = n(419388),
    O = n(406534),
    y = n(981631),
    D = n(689938),
    U = n(381497);
let k = s.memo(
    function (e) {
        var t, n;
        let { className: a, messageGroupSpacing: d, scrollerClassName: p, channel: m, messages: _, unreadCount: f, showNewMessagesBar: g, messageDisplayCompact: C, channelStream: I, uploads: T, hasUnreads: x, editingMessageId: S, fontSize: N, keyboardModeEnabled: A, filterAfterTimestamp: Z, showingQuarantineBanner: b, hideSummaries: R = !1 } = e,
            [k, w] = s.useState(!1),
            B = s.useMemo(
                () =>
                    C
                        ? (0, L.aJ)({
                              compact: !0,
                              messageGroups: 30,
                              groupRange: 4,
                              attachments: 8,
                              fontSize: N,
                              groupSpacing: d
                          })
                        : (0, L.aJ)({
                              compact: !1,
                              messageGroups: 26,
                              groupRange: 4,
                              attachments: 8,
                              fontSize: N,
                              groupSpacing: d
                          }),
                [C, N, d]
            ),
            H = (0, P.ZP)({
                messages: _,
                channel: m,
                compact: C,
                hasUnreads: x,
                focusId: S,
                placeholderHeight: B.totalHeight,
                canLoadMore: null == Z,
                handleScrollToBottom: s.useCallback(() => w(!0), [w]),
                handleScrollFromBottom: s.useCallback(() => w(!1), [w])
            }),
            G = (0, j.Z)({
                scrollerRef: H.ref,
                isEditing: null != S,
                keyboardModeEnabled: A,
                hasMoreAfter: _.hasMoreAfter
            });
        let V = ((n = m), (0, o.e7)([E.Z], () => (v.Z.can(y.Plq.READ_MESSAGE_HISTORY, n) ? null : E.Z.getViewingRolesTimestamp(n.getGuildId())))),
            {
                channelStreamMarkup: F,
                newMessagesBar: W,
                jumpToPresentBar: z,
                forumPostActionBar: Y,
                safetyWarningBanner: K
            } = (0, O.Z)({
                channel: m,
                messages: _,
                unreadCount: f,
                showNewMessagesBar: g,
                messageDisplayCompact: C,
                channelStream: I,
                uploads: T,
                loadMore: H.loadMore,
                scrollManager: H,
                specs: B,
                filterAfterTimestamp: null != Z ? Z : V,
                showingQuarantineBanner: b,
                hideSummaries: R,
                isAtBottom: k,
                jumpToPresent: () => {
                    if (_.hasPresent()) {
                        var e;
                        null === (e = H.ref.current) || void 0 === e || e.scrollToBottom({ animate: !h.Z.useReducedMotion });
                    } else u.Z.jumpToPresent(m.id, y.AQB);
                }
            });
        !(function (e) {
            let t = s.useCallback(() => {
                    var t;
                    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollToBottom();
                }, [e]),
                n = s.useCallback(() => {
                    var t;
                    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageUp({ animate: !h.Z.useReducedMotion });
                }, [e]),
                i = s.useCallback(() => {
                    var t;
                    return null === (t = e.current) || void 0 === t ? void 0 : t.scrollPageDown({ animate: !h.Z.useReducedMotion });
                }, [e]);
            (0, M.yp)({
                event: y.CkL.SCROLLTO_PRESENT,
                handler: t
            }),
                (0, M.yp)({
                    event: y.CkL.SCROLL_PAGE_UP,
                    handler: n
                }),
                (0, M.yp)({
                    event: y.CkL.SCROLL_PAGE_DOWN,
                    handler: i
                });
        })(H.ref);
        let q = (0, c.useFocusJumpSection)(),
            { ref: X, ...J } = (0, r.l2)(G),
            Q = s.useCallback((e) => {
                var t;
                (H.ref.current = e), (X.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null);
            }, []);
        return (0, i.jsxs)(r.bG, {
            navigator: G,
            children: [
                null != K && K,
                (0, i.jsxs)('div', {
                    className: l()(U.messagesWrapper, a, 'group-spacing-'.concat(d)),
                    children: [
                        null == K && W,
                        (0, i.jsxs)(c.PinToBottomScrollerAuto, {
                            ref: Q,
                            customTheme: !0,
                            className: l()(p, U.scroller),
                            contentClassName: U.scrollerContent,
                            onResize: H.handleResize,
                            onScroll: H.handleScroll,
                            onMouseDown: H.handleMouseDown,
                            onMouseUp: H.handleMouseUp,
                            ...q,
                            tabIndex: -1,
                            role: 'group',
                            children: [
                                Y,
                                (0, i.jsxs)('ol', {
                                    className: U.scrollerInner,
                                    'aria-label': D.Z.Messages.CHANNEL_MESSAGES_A11Y_LABEL.format({ channelName: m.name }),
                                    ...J,
                                    children: [
                                        (0, i.jsx)('span', {
                                            className: U.navigationDescription,
                                            id: 'messagesNavigationDescription',
                                            'aria-hidden': !0,
                                            children: D.Z.Messages.CHANNEL_MESSAGES_A11Y_DESCRIPTION
                                        }),
                                        F,
                                        (0, i.jsx)('div', {
                                            className: l()({
                                                [U.scrollerSpacer]: !b,
                                                [U.empty]: 0 === _.length && !_.loadingMore,
                                                [U.emptyForum]: 1 === _.length && !_.loadingMore && m.isForumPost() && (null === (t = _.first()) || void 0 === t ? void 0 : t.isFirstMessageInForumPost(m))
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        z
                    ]
                })
            ]
        });
    },
    (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden
);
t.Z = s.memo(function (e) {
    let { channel: t, showingQuarantineBanner: n, hideSummaries: a = !1, forceCompact: l = !1, forceCozy: r = !1, ...c } = e,
        {
            canManageMessages: u,
            permissionVersion: E,
            canChat: M
        } = (function (e) {
            let t = e.getGuildId(),
                n = (0, o.e7)([x.Z], () => null == t || x.Z.canChatInGuild(t), [t]),
                { canManageMessages: i, permissionVersion: s } = (0, o.cj)(
                    [v.Z],
                    () => ({
                        canManageMessages: v.Z.can(y.Plq.MANAGE_MESSAGES, e),
                        permissionVersion: null != t ? v.Z.getGuildVersion(t) : null
                    }),
                    [e, t]
                );
            return {
                canChat: n,
                permissionVersion: s,
                canManageMessages: i
            };
        })(t),
        {
            messageGroupSpacing: L,
            fontSize: j,
            messageDisplayCompact: P,
            renderSpoilers: O,
            keyboardModeEnabled: D
        } = (function () {
            let e = C.jU.useSetting(),
                t = C.cC.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: i,
                    keyboardModeEnabled: s
                } = (0, o.cj)([h.Z], () => {
                    let { messageGroupSpacing: e, fontSize: t, keyboardModeEnabled: n } = h.Z;
                    return {
                        messageGroupSpacing: e,
                        fontSize: t,
                        keyboardModeEnabled: n
                    };
                });
            return {
                messageGroupSpacing: n,
                messageDisplayCompact: e,
                renderSpoilers: t,
                fontSize: i,
                keyboardModeEnabled: s
            };
        })(),
        {
            messages: U,
            channelStream: w,
            oldestUnreadMessageId: B,
            editingMessageId: H
        } = (function (e) {
            var t, n;
            let i = (0, o.e7)([S.Z], () => S.Z.getMessages(e.id), [e.id]),
                a = (0, o.e7)(
                    [N.ZP],
                    () => {
                        var t;
                        return null !== (t = N.ZP.getOldestUnreadMessageId(e.id)) && void 0 !== t ? t : null;
                    },
                    [e.id]
                ),
                { enabled: l } = f.Z.useExperiment({ location: '41de6d_1' }, { autoTrackExposure: !1 }),
                r = null !== (n = null === (t = Z.default.getUser(I.default.getId())) || void 0 === t ? void 0 : t.hasFlag(y.xW$.SPAMMER)) && void 0 !== n && n,
                c = (0, d.ts)(e),
                u = (0, _.Z)('use_topic_dividers_in_chat'),
                h = (0, o.Wu)(
                    [g.Z],
                    () => {
                        var t;
                        return c && u && null !== (t = g.Z.summaries(e.id)) && void 0 !== t ? t : [];
                    },
                    [c, e.id, u]
                ),
                m = (0, o.e7)([g.Z], () => (c ? g.Z.selectedSummary(e.id) : null), [c, e.id]),
                E = (function (e) {
                    let t = s.useMemo(() => {
                        let t = new Set();
                        return (
                            e.forEach((e) => {
                                null != e.applicationId && null == e.application && t.add(e.applicationId);
                            }),
                            Array.from(t)
                        );
                    }, [e]);
                    return (0, p.Z)(t);
                })(i),
                C = s.useMemo(
                    () =>
                        (0, R.Z)({
                            channel: e,
                            messages: i,
                            oldestUnreadMessageId: a,
                            treatSpam: l && !r,
                            summaries: h,
                            selectedSummary: m
                        }),
                    [i, e, a, l, h, m, E]
                );
            return {
                messages: i,
                channelStream: C,
                oldestUnreadMessageId: a,
                editingMessageId: (0, o.e7)([T.Z], () => {
                    var t;
                    return null === (t = T.Z.getEditingMessage(e.id)) || void 0 === t ? void 0 : t.id;
                })
            };
        })(t);
    return (0, i.jsx)(m.a.Provider, {
        value: (0, b.Z)(O, u),
        children: (0, i.jsx)(k, {
            ...c,
            messageGroupSpacing: L,
            showNewMessagesBar: !0,
            channel: t,
            messageDisplayCompact: !r && (l || P),
            messages: U,
            channelStream: w,
            permissionVersion: E,
            uploads: (0, o.e7)([A.Z], () => A.Z.getFiles(t.id), [t]),
            unreadCount: (0, o.e7)([N.ZP], () => N.ZP.getUnreadCount(t.id), [t]),
            hasUnreads: null != B,
            canChat: M,
            editingMessageId: H,
            fontSize: j,
            keyboardModeEnabled: D,
            showingQuarantineBanner: n,
            hideSummaries: a
        })
    });
});
