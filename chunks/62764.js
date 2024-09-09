n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(120356),
    l = n.n(a),
    r = n(852229),
    o = n(442837),
    c = n(52826),
    u = n(481060),
    d = n(904245),
    h = n(593472),
    m = n(393238),
    p = n(330726),
    _ = n(48929),
    f = n(333535),
    E = n(566006),
    g = n(443877),
    C = n(60174),
    I = n(216337),
    x = n(920888),
    T = n(287151),
    v = n(569471),
    S = n(346479),
    N = n(592125),
    A = n(934415),
    Z = n(456269),
    M = n(109590),
    b = n(228392),
    R = n(981631),
    L = n(689938),
    j = n(704119),
    P = n(952527);
function O(e) {
    let { postId: t, isFirstMessage: n, isLastItem: a = !1, parentChannelId: O } = e,
        { ref: y, width: D } = (0, m.Z)(),
        [k, U] = s.useState(3),
        [w, B] = s.useState(!n),
        [H, G] = (0, p.Z)(!1, 2000),
        V = (0, o.e7)([N.Z], () => N.Z.getChannel(t), [t]),
        { firstMessage: F } = (0, M.cl)(V),
        W = (0, o.e7)([v.Z], () => v.Z.hasJoined(t)),
        { disableReactionUpdates: z, disableReactionCreates: Y, isLurking: K, isGuest: q, isPendingMember: X } = (0, g.Z)(V),
        Q = (0, o.e7)([N.Z], () => N.Z.getChannel(O)),
        J = (0, Z.Bs)(Q),
        $ = (0, o.e7)([_.Z], () => _.Z.shouldDisplayPrompt(t) && !0 === n, [t, n]),
        ee = s.useCallback(
            (e) => {
                let t = e[0];
                if (null != t && n) {
                    let e = t.intersectionRect,
                        n = t.boundingClientRect;
                    B((e.bottom - e.top) / (n.bottom - n.top) < 1);
                }
            },
            [n]
        );
    s.useLayoutEffect(() => {
        let e = y.current;
        if (null == e || !n) return;
        let t = new IntersectionObserver(ee, { threshold: 1 });
        return (
            t.observe(e),
            () => {
                t.disconnect();
            }
        );
    });
    let [et, en] = s.useState(!0);
    if (
        (s.useEffect(() => {
            if (null != D) U(Math.floor((D - 280) / 58)), en(!1);
        }, [D]),
        null == V || null == F)
    )
        return null;
    let ei = F.reactions.length > 0,
        es = () => {
            W ? S.Z.leaveThread(V, 'Forum Toolbar') : S.Z.joinThread(V, 'Forum Toolbar');
        },
        ea = () => {
            (0, b.B)({
                postId: V.id,
                location: { section: R.jXE.CHANNEL_HEADER }
            }),
                (0, r.J)((0, A.EO)(V, Q)),
                G(!0);
        },
        el = () => {
            d.Z.jumpToMessage({
                channelId: V.id,
                messageId: V.id,
                flash: !0,
                jumpType: h.SR.INSTANT
            });
        },
        er = W ? u.CheckmarkLargeIcon : u.BellIcon;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(j.container, { [j.header]: w }),
                ref: y,
                children: [
                    (0, i.jsxs)('div', {
                        className: l()(j.reactButtons, { [j.loading]: et }),
                        children: [
                            !ei &&
                                !Y &&
                                null != J &&
                                (0, i.jsx)('div', {
                                    className: P.reactions,
                                    children: (0, i.jsx)(T.le, {
                                        message: F,
                                        readOnly: !1,
                                        useChatFontScaling: !1,
                                        isLurking: K,
                                        isGuest: q,
                                        isPendingMember: X,
                                        emoji: J,
                                        type: E.O.NORMAL,
                                        hideCount: !0,
                                        count: 0,
                                        me: !1,
                                        burst_count: 0,
                                        me_burst: !1
                                    })
                                }),
                            (0, i.jsx)(x.Z, {
                                message: F,
                                channel: V,
                                disableReactionCreates: !0,
                                disableReactionUpdates: z,
                                isLurking: K,
                                isGuest: q,
                                isPendingMember: X,
                                maxReactions: k,
                                className: j.reactions,
                                useChatFontScaling: !1,
                                isForumToolbar: !0,
                                forceHideReactionCreates: !0
                            }),
                            !Y &&
                                (0, i.jsx)(C.X, {
                                    type: E.O.NORMAL,
                                    message: F,
                                    channel: V,
                                    useChatFontScaling: !1,
                                    className: j.addReactButton,
                                    isForumToolbar: !0,
                                    children: !ei && L.Z.Messages.FORUM_REACT_TO_POST
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.buttons,
                        children: [
                            (0, i.jsx)(u.Tooltip, {
                                text: L.Z.Messages.FORUM_FOLLOW_TOOLTIP,
                                children: (e) =>
                                    (0, i.jsxs)(u.Button, {
                                        ...e,
                                        look: u.Button.Looks.BLANK,
                                        size: u.Button.Sizes.SMALL,
                                        onClick: es,
                                        className: j.button,
                                        innerClassName: l()(j.buttonInner, { [j.active]: W }),
                                        children: [
                                            (0, i.jsx)(er, {
                                                size: 'xs',
                                                color: 'currentColor'
                                            }),
                                            W ? L.Z.Messages.FORUM_FOLLOWING_POST : L.Z.Messages.FOLLOW
                                        ]
                                    })
                            }),
                            (0, i.jsx)(u.Tooltip, {
                                text: L.Z.Messages.COPY_LINK,
                                children: (e) =>
                                    (0, i.jsxs)(u.Button, {
                                        ...e,
                                        look: u.Button.Looks.BLANK,
                                        size: u.Button.Sizes.SMALL,
                                        onClick: ea,
                                        className: j.button,
                                        innerClassName: j.buttonInner,
                                        children: [
                                            H
                                                ? (0, i.jsx)(u.CheckmarkLargeIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 16,
                                                      height: 16
                                                  })
                                                : (0, i.jsx)(u.LinkIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 16,
                                                      height: 16
                                                  }),
                                            H ? L.Z.Messages.COPIED : null
                                        ]
                                    })
                            }),
                            !n &&
                                (0, i.jsx)(u.Tooltip, {
                                    text: L.Z.Messages.JUMP_TO_TOP,
                                    children: (e) =>
                                        (0, i.jsx)(u.Button, {
                                            ...e,
                                            look: u.Button.Looks.BLANK,
                                            size: u.Button.Sizes.SMALL,
                                            onClick: el,
                                            className: j.button,
                                            innerClassName: j.buttonInner,
                                            children: (0, i.jsx)(c.Z, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16
                                            })
                                        })
                                })
                        ]
                    })
                ]
            }),
            $ && (0, i.jsx)(f.Z, { threadId: t }),
            (0, i.jsx)(I.Z, {
                channel: V,
                isLastItem: a
            })
        ]
    });
}
