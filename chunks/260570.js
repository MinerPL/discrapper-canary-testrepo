n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(180081),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(788307),
    _ = n(607070),
    E = n(100527),
    f = n(906732),
    h = n(8454),
    p = n(633302),
    I = n(314897),
    m = n(785717),
    T = n(481046),
    S = n(277085),
    g = n(825801),
    A = n(215105),
    N = n(429974),
    O = n(228168),
    R = n(689938),
    v = n(209071);
let C = 'text-sm/medium',
    y = 36,
    L = 144;
function D(e) {
    let { statusActivity: t, user: a, displayProfile: h, guildId: I, channelId: T, profileType: D, hasEntered: b = !0, animate: M = !0, editEnabled: P, onInteraction: U, isInteractionSource: w, showReplyPopout: x = !1, onClose: G, setInteractionToastShown: k, setInteractionSent: B, setIsReplyInteraction: F } = e,
        { analyticsLocations: V } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: H } = (0, m.KZ)(),
        Z = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [Y] = i.useState(() => new u.V7()),
        [j, W] = i.useState(!0),
        K = i.useRef(null),
        z = i.useRef(null),
        q = i.useRef(null),
        Q = i.useRef(null),
        { emoji: X, state: $ } = null != t ? t : {},
        J = null != $ && '' !== $ ? $ : null,
        ee = null != J && J.length > 0,
        et = null != X,
        en = et && !ee,
        er = et ? 1.25 : 0,
        ei = 18 + er,
        ea = L + er,
        es = y + er,
        eo = et || ee,
        el = P && !eo,
        eu = P && eo,
        [ec, ed] = i.useState(en),
        [e_, eE] = i.useState(!en),
        [ef, eh] = i.useState(!1),
        ep = D === O.y0.FULL_SIZE ? (0, N.z)(a.id, null == h ? void 0 : h.guildId) : void 0;
    i.useLayoutEffect(() => {
        if (null == K.current || en) return;
        let e = K.current.getBoundingClientRect().height;
        if ((ed(en || e <= ei), b)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = K.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : ea,
                a = null !== (i = null === (n = q.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : es;
            eE(!en && e > a), (z.current = e), (Q.current = a);
        }
    }, [b, en, ei, ea, es]);
    let [eI, em] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(es, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    i.useEffect(() => () => Y.stop(), [Y]);
    let eT = i.useRef(t);
    if (
        (i.useEffect(() => {
            w &&
                (null == t || eT.current !== t) &&
                (null == U ||
                    U({
                        interactionType: null,
                        interactionSourceType: null
                    })),
                (eT.current = t);
        }, [t, U, w]),
        !eo && !el)
    )
        return null;
    let eS = (e) => {
            var t, n;
            if (!!e_) {
                if (e) {
                    let e = Math.min(null !== (t = z.current) && void 0 !== t ? t : ea, ea);
                    em({
                        maxHeight: ''.concat(e, 'px'),
                        delay: Z ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: Z ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = Q.current) && void 0 !== n ? n : es, es);
                    em({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (Z) {
                    W(!e);
                    return;
                }
                Y.start(e ? 300 : 150, () => {
                    W(!e);
                });
            }
        },
        eg = () =>
            et
                ? (0, r.jsx)(d.I, {
                      className: ee ? v.statusEmojiInline : v.statusEmojiOnly,
                      emoji: X,
                      animate: M,
                      hideTooltip: !1,
                      tooltipDelay: O.vB
                  })
                : null,
        eA = () =>
            ee
                ? (0, r.jsx)(c.Text, {
                      variant: C,
                      className: v.statusText,
                      children: J
                  })
                : null,
        eN = () => {
            let e = s()(v.content, {
                [v.clamp]: j,
                [v.unclamp]: !j,
                [v.singleLineAlign]: ec
            });
            return (0, r.jsxs)(o.animated.div, {
                style: eI,
                className: e,
                children: [eg(), eA()]
            });
        },
        eO = () =>
            (0, r.jsxs)('div', {
                className: s()(v.content, v.clamp, v.placeholderWidth, { [v.panel]: D === O.y0.PANEL }),
                ref: q,
                children: [eg(), eA()]
            }),
        eR = () =>
            (0, r.jsxs)('div', {
                className: s()(v.content, v.unclamp, v.placeholderWidth, v.incorporeal, { [v.panel]: D === O.y0.PANEL }),
                ref: K,
                children: [eg(), eA()]
            }),
        ev = () =>
            (0, r.jsxs)('div', {
                className: v.content,
                children: [
                    (0, r.jsx)(c.CirclePlusIcon, {
                        className: v.addStatusIcon,
                        colorClass: v.addStatusIconColor
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: C,
                        className: v.addStatusPrompt,
                        children: R.Z.Messages.USER_SETTINGS_ADD_STATUS
                    })
                ]
            }),
        eC = () => {
            var e;
            return el
                ? R.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL
                : R.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                      emoji: null !== (e = null == X ? void 0 : X.name) && void 0 !== e ? e : '',
                      status: $
                  });
        },
        ey = () => {
            H({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == G || G(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: V
                        });
                });
        },
        eL = {
            [v.biteSize]: D === O.y0.BITE_SIZE,
            [v.fullSize]: D === O.y0.FULL_SIZE,
            [v.panel]: D === O.y0.PANEL
        },
        eD = s()(v.background, { [v.editable]: eu }),
        eb = { [v.hoisted]: w },
        eM = s()({
            [v.statusBubbleShape]: (!ee && et) || !ec,
            [v.statusBubbleSingleLineWithTextShape]: (ec && ee) || el
        }),
        eP = s()(v.statusBubbleOuter, eL, eM, { [v.statusBubbleOuterAddStatusCursor]: el }),
        eU = s()(v.statusBubble, eM, {
            [v.statusBubbleEmojiOnlyPadding]: en,
            [v.statusBubbleWithTextPadding]: ee || el,
            [v.statusBubbleWithTextMinWidth]: ee,
            [v.statusBubbleCopyStatusCursor]: eo
        }),
        ew = () => {
            if (et) {
                let e = null != X.id ? '`' + ':'.concat(X.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(X.name);
                return en ? ''.concat(e) : ''.concat(e, ' ').concat($);
            }
            if (!en) return ''.concat($);
        },
        ex = () =>
            (0, r.jsxs)(c.ClickableContainer, {
                className: s()(v.visibleContainer, eL, eD, eb),
                'aria-label': eC(),
                focusProps: { ringClassName: eM },
                onClick: el ? ey : void 0,
                onFocus: () => {
                    eh(!0), eS(!0);
                },
                onBlur: (e) => {
                    !e.currentTarget.contains(e.relatedTarget) && (eh(!1), eS(!1));
                },
                onMouseOver: () => {
                    H({ action: 'HOVER_CUSTOM_STATUS' }), eh(!0), eS(!0);
                },
                onMouseLeave: () => {
                    !x && (eh(!1), eS(!1));
                },
                children: [
                    (0, r.jsx)('div', {
                        className: eP,
                        children: (0, r.jsxs)('span', {
                            className: eU,
                            children: [eo && eN(), el && ev()]
                        })
                    }),
                    eo &&
                        !x &&
                        (0, r.jsx)(g.Z, {
                            user: a,
                            sourceDetails: ew(),
                            sourceType: O.n_.STATUS,
                            isVisible: ef,
                            isExpandable: e_,
                            onInteraction: U,
                            setInteractionToastShown: k,
                            setInteractionSent: B,
                            setIsReplyInteraction: F,
                            onClose: () => {
                                eh(!1), eS(!1);
                            }
                        }),
                    eu &&
                        (0, r.jsx)(S.Z, {
                            isVisible: ef,
                            isExpandable: e_,
                            onClose: G
                        })
                ]
            });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('div', {
                className: s()(v.invisibleContainer, eL),
                children: (0, r.jsx)('div', {
                    className: eP,
                    children: (0, r.jsxs)('span', {
                        className: eU,
                        children: [el && ev(), eo && eO(), eo && eR()]
                    })
                })
            }),
            (0, r.jsx)(c.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: t } = e;
                    return (0, r.jsx)(A.Z, {
                        user: a,
                        guildId: I,
                        channelId: T,
                        profileType: D,
                        sourceDetails: ew(),
                        sourceType: O.n_.STATUS,
                        setPopoutRef: t,
                        modalKey: ep,
                        onInteraction: U,
                        setInteractionToastShown: k,
                        setInteractionSent: B,
                        setIsReplyInteraction: F,
                        onClose: () => {
                            eh(!1), eS(!1);
                        }
                    });
                },
                animationPosition: 'top',
                position: 'bottom',
                align: D === O.y0.FULL_SIZE ? 'center' : 'left',
                spacing: 6,
                shouldShow: x,
                children: () => ex()
            })
        ]
    });
}
function b(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([I.default], () => I.default.getId() === t.id),
        a = (0, h.Z)(t.id),
        { analyticsLocations: s } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { customStatusBubbleEditEnabled: o } = (0, T.K)({ location: 'UserProfileCustomStatusBubbleWithReactReplyBar' });
    return (0, r.jsx)(f.Gt, {
        value: s,
        children: (0, r.jsx)(D, {
            user: t,
            editEnabled: o && i,
            statusActivity: a,
            ...n
        })
    });
}
