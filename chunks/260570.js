n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(338545),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(788307),
    _ = n(607070),
    E = n(100527),
    f = n(906732),
    h = n(676035),
    p = n(633302),
    m = n(314897),
    I = n(158776),
    T = n(785717),
    g = n(277085),
    S = n(825801),
    A = n(215105),
    N = n(429974),
    v = n(228168),
    O = n(981631),
    R = n(689938),
    C = n(209071);
let y = 'text-sm/medium',
    D = 36,
    L = 144;
function b(e) {
    let { statusActivity: t, user: a, displayProfile: h, guildId: m, channelId: I, profileType: O, hasEntered: b = !0, animate: M = !0, editEnabled: P, onInteraction: U, isInteractionSource: w, showReplyPopout: x = !1, onClose: G, setInteractionToastShown: k, setInteractionSent: B, setIsReplyInteraction: F } = e,
        { analyticsLocations: V } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: H } = (0, T.KZ)(),
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
        es = D + er,
        eo = et || ee,
        el = P && !eo,
        eu = P && eo,
        [ec, ed] = i.useState(en),
        [e_, eE] = i.useState(!en),
        [ef, eh] = i.useState(!1),
        ep = O === v.y0.FULL_SIZE ? (0, N.z)(a.id, null == h ? void 0 : h.guildId) : void 0;
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
    let [em, eI] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(es, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    if ((i.useEffect(() => () => Y.stop(), [Y]), !eo && !el)) return null;
    let eT = (e) => {
            var t, n;
            if (!!e_) {
                if (e) {
                    let e = Math.min(null !== (t = z.current) && void 0 !== t ? t : ea, ea);
                    eI({
                        maxHeight: ''.concat(e, 'px'),
                        delay: Z ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: Z ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = Q.current) && void 0 !== n ? n : es, es);
                    eI({
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
                      className: ee ? C.statusEmojiInline : C.statusEmojiOnly,
                      emoji: X,
                      animate: M,
                      hideTooltip: !1,
                      tooltipDelay: v.vB
                  })
                : null,
        eS = () =>
            ee
                ? (0, r.jsx)(c.Text, {
                      variant: y,
                      className: C.statusText,
                      children: J
                  })
                : null,
        eA = () => {
            let e = s()(C.content, {
                [C.clamp]: j,
                [C.unclamp]: !j,
                [C.singleLineAlign]: ec
            });
            return (0, r.jsxs)(o.animated.div, {
                style: em,
                className: e,
                children: [eg(), eS()]
            });
        },
        eN = () =>
            (0, r.jsxs)('div', {
                className: s()(C.content, C.clamp, C.placeholderWidth, { [C.panel]: O === v.y0.PANEL }),
                ref: q,
                children: [eg(), eS()]
            }),
        ev = () =>
            (0, r.jsxs)('div', {
                className: s()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, { [C.panel]: O === v.y0.PANEL }),
                ref: K,
                children: [eg(), eS()]
            }),
        eO = () =>
            (0, r.jsxs)('div', {
                className: C.content,
                children: [
                    (0, r.jsx)(c.CirclePlusIcon, {
                        className: C.addStatusIcon,
                        colorClass: C.addStatusIconColor
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: y,
                        className: C.addStatusPrompt,
                        children: R.Z.Messages.USER_SETTINGS_ADD_STATUS
                    })
                ]
            }),
        eR = () => {
            var e;
            return el
                ? R.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL
                : R.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                      emoji: null !== (e = null == X ? void 0 : X.name) && void 0 !== e ? e : '',
                      status: $
                  });
        },
        eC = () => {
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
        ey = {
            [C.biteSize]: O === v.y0.BITE_SIZE,
            [C.fullSize]: O === v.y0.FULL_SIZE,
            [C.panel]: O === v.y0.PANEL
        },
        eD = s()(C.background, { [C.editable]: eu }),
        eL = { [C.hoisted]: w },
        eb = s()({
            [C.statusBubbleShape]: (!ee && et) || !ec,
            [C.statusBubbleSingleLineWithTextShape]: (ec && ee) || el
        }),
        eM = s()(C.statusBubbleOuter, ey, eb, { [C.statusBubbleOuterAddStatusCursor]: el }),
        eP = s()(C.statusBubble, eb, {
            [C.statusBubbleEmojiOnlyPadding]: en,
            [C.statusBubbleWithTextPadding]: ee || el,
            [C.statusBubbleWithTextMinWidth]: ee,
            [C.statusBubbleCopyStatusCursor]: eo
        }),
        eU = () => {
            if (et) {
                let e = null != X.id ? '`' + ':'.concat(X.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(X.name);
                return en ? ''.concat(e) : ''.concat(e, ' ').concat($);
            }
            if (!en) return ''.concat($);
        },
        ew = () =>
            (0, r.jsxs)(c.ClickableContainer, {
                className: s()(C.visibleContainer, ey, eD, eL),
                'aria-label': eR(),
                focusProps: { ringClassName: eb },
                onClick: el ? eC : void 0,
                onFocus: () => {
                    eh(!0), eT(!0);
                },
                onBlur: (e) => {
                    !e.currentTarget.contains(e.relatedTarget) && (eh(!1), eT(!1));
                },
                onMouseOver: () => {
                    H({ action: 'HOVER_CUSTOM_STATUS' }), eh(!0), eT(!0);
                },
                onMouseLeave: () => {
                    eh(!1), eT(!1);
                },
                children: [
                    (0, r.jsx)('div', {
                        className: eM,
                        children: (0, r.jsxs)('span', {
                            className: eP,
                            children: [eo && eA(), el && eO()]
                        })
                    }),
                    eo &&
                        (0, r.jsx)(S.Z, {
                            user: a,
                            sourceDetails: eU(),
                            sourceType: v.n_.STATUS,
                            isVisible: ef,
                            isExpandable: e_,
                            onInteraction: U,
                            setInteractionToastShown: k,
                            setInteractionSent: B,
                            setIsReplyInteraction: F
                        }),
                    eu &&
                        (0, r.jsx)(g.Z, {
                            isVisible: ef,
                            isExpandable: e_,
                            onClose: G
                        })
                ]
            });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('div', {
                className: s()(C.invisibleContainer, ey),
                children: (0, r.jsx)('div', {
                    className: eM,
                    children: (0, r.jsxs)('span', {
                        className: eP,
                        children: [el && eO(), eo && eN(), eo && ev()]
                    })
                })
            }),
            (0, r.jsx)(c.Popout, {
                renderPopout: (e) => {
                    let { setPopoutRef: t } = e;
                    return (0, r.jsx)(A.Z, {
                        user: a,
                        guildId: m,
                        channelId: I,
                        profileType: O,
                        sourceDetails: eU(),
                        sourceType: v.n_.STATUS,
                        setPopoutRef: t,
                        modalKey: ep,
                        onInteraction: U,
                        setInteractionToastShown: k,
                        setInteractionSent: B,
                        setIsReplyInteraction: F
                    });
                },
                animationPosition: 'top',
                position: 'bottom',
                align: 'center',
                spacing: 6,
                shouldShow: x,
                children: () => ew()
            })
        ]
    });
}
function M(e) {
    let { user: t, editEnabled: n, ...i } = e,
        a = (0, l.e7)([m.default], () => m.default.getId() === t.id),
        s = (0, h.a)(),
        o = (0, l.e7)([I.Z], () =>
            I.Z.findActivity(t.id, (e) => {
                let { type: t } = e;
                return t === O.IIU.CUSTOM_STATUS;
            })
        ),
        { analyticsLocations: u } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS);
    return (0, r.jsx)(f.Gt, {
        value: u,
        children: (0, r.jsx)(b, {
            user: t,
            editEnabled: n && a,
            statusActivity: n && a ? s : o,
            ...i
        })
    });
}
