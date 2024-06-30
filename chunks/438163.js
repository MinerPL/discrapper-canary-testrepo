n.d(t, {
    Z: function () {
        return b;
    }
}), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(920906), l = n(442837), u = n(846519), c = n(955623), d = n(481060), _ = n(788307), E = n(727637), f = n(607070), h = n(100527), p = n(906732), m = n(676035), I = n(314897), T = n(158776), g = n(751009), S = n(785717), A = n(825801), N = n(228168), v = n(981631), O = n(689938), R = n(739550);
let C = 'text-sm/medium', y = 36, D = 144;
function L(e) {
    let {
            statusActivity: t,
            profileType: a,
            canModifyStatus: m = !1,
            hasEntered: I = !0,
            animate: T = !0,
            onClose: g
        } = e, {analyticsLocations: v} = (0, p.ZP)(h.Z.PROFILE_CUSTOM_STATUS), {trackUserProfileAction: L} = (0, S.KZ)(), b = (0, l.e7)([f.Z], () => f.Z.useReducedMotion), [M] = i.useState(() => new u.V7()), [P, U] = i.useState(!0), w = i.useRef(null), x = i.useRef(null), G = i.useRef(null), k = i.useRef(null), B = i.useRef(null), F = (0, E.Z)(B), {
            emoji: V,
            state: H
        } = null != t ? t : {}, Z = null != H && '' !== H ? H : null, Y = null != Z && Z.length > 0, j = null != V, W = j && !Y, K = j ? 1.25 : 0, z = 18 + K, q = D + K, Q = y + K, X = j || Y, $ = m && !X, J = m && X, [ee, et] = i.useState(W), [en, er] = i.useState(W);
    i.useLayoutEffect(() => {
        if (null == w.current || W)
            return;
        let e = w.current.getBoundingClientRect().height;
        if (et(W || e <= z), I) {
            var t, n, r, i;
            let e = null !== (r = null === (t = w.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : q, a = null !== (i = null === (n = G.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : Q;
            er(e > a), x.current = e, k.current = a;
        }
    }, [
        I,
        W,
        z,
        q,
        Q
    ]);
    let [{
            maxHeight: ei,
            editIconOpacity: ea
        }, eo] = (0, s.useSpring)(() => ({
        maxHeight: ''.concat(Q, 'px'),
        editIconOpacity: 0,
        config: {
            clamp: !0,
            immediate: b,
            duration: 150
        }
    }));
    if (i.useEffect(() => () => M.stop(), [M]), !X && !$)
        return null;
    let es = e => {
            var t, n;
            if (!!en) {
                if (e) {
                    let e = Math.min(null !== (t = x.current) && void 0 !== t ? t : q, q);
                    eo({
                        maxHeight: ''.concat(e, 'px'),
                        editIconOpacity: 1,
                        delay: 300
                    });
                } else {
                    let e = Math.min(null !== (n = k.current) && void 0 !== n ? n : Q, Q);
                    eo({
                        maxHeight: ''.concat(e, 'px'),
                        editIconOpacity: 0,
                        delay: 0
                    });
                }
                M.start(e ? 300 : 150, () => {
                    U(!e);
                });
            }
        }, el = () => J ? (0, r.jsxs)(s.animated.div, {
            style: en ? { opacity: ea } : void 0,
            className: o()(R.editIcon, { [R.expandable]: en }),
            children: [
                !W && (0, r.jsx)('div', { className: R.editGradient }),
                (0, r.jsx)(d.Clickable, {
                    className: o()(R.editClickable, W && R.editClickableEmojiOnly),
                    onClick: e_,
                    children: (0, r.jsx)(c.v, { size: 'xs' })
                })
            ]
        }) : null, eu = () => j ? (0, r.jsx)(_.I, {
            className: Y ? R.statusEmojiInline : R.statusEmojiOnly,
            emoji: V,
            animate: T,
            hideTooltip: !1,
            tooltipDelay: N.vB
        }) : null, ec = () => Y ? (0, r.jsx)(d.Text, {
            variant: C,
            className: R.statusText,
            children: Z
        }) : null, ed = () => (0, r.jsxs)('div', {
            className: R.content,
            children: [
                (0, r.jsx)(d.CirclePlusIcon, {
                    className: R.addStatusIcon,
                    colorClass: R.addStatusIconColor
                }),
                (0, r.jsx)(d.Text, {
                    variant: C,
                    className: R.addStatusPrompt,
                    children: O.Z.Messages.USER_SETTINGS_ADD_STATUS
                })
            ]
        }), e_ = () => {
            L({ action: 'PRESS_SET_CUSTOM_STATUS' }), null == g || g(), (0, d.openModalLazy)(async () => {
                let {default: e} = await n.e('51714').then(n.bind(n, 211065));
                return t => (0, r.jsx)(e, {
                    ...t,
                    sourceAnalyticsLocations: v
                });
            });
        }, eE = {
            [R.biteSize]: a === N.y0.BITE_SIZE,
            [R.fullSize]: a === N.y0.FULL_SIZE,
            [R.panel]: a === N.y0.PANEL
        }, ef = o()(R.statusBubbleOuter, eE, {
            [R.statusBubbleShape]: !Y && j || !ee,
            [R.statusBubbleSingleLineWithTextShape]: ee && Y || $,
            [R.statusBubbleOuterAddStatusCursor]: $
        }), eh = o()(R.statusBubble, {
            [R.statusBubbleShape]: !Y && j || !ee,
            [R.statusBubbleSingleLineWithTextShape]: ee && Y || $,
            [R.statusBubbleEmojiOnlyPadding]: W,
            [R.statusBubbleWithTextPadding]: Y || $,
            [R.statusBubbleWithTextMinWidth]: Y,
            [R.statusBubbleCopyStatusCursor]: X
        });
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)('div', {
                className: o()(R.invisibleContainer, eE),
                children: (0, r.jsx)('div', {
                    className: ef,
                    children: (0, r.jsxs)('span', {
                        className: eh,
                        children: [
                            $ && ed(),
                            X && (0, r.jsxs)('div', {
                                className: o()(R.content, R.clamp, R.placeholderWidth, { [R.panel]: a === N.y0.PANEL }),
                                ref: G,
                                children: [
                                    eu(),
                                    ec()
                                ]
                            }),
                            X && (0, r.jsxs)('div', {
                                className: o()(R.content, R.unclamp, R.placeholderWidth, R.incorporeal, { [R.panel]: a === N.y0.PANEL }),
                                ref: w,
                                children: [
                                    eu(),
                                    ec()
                                ]
                            })
                        ]
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: o()(R.visibleContainer, eE),
                ref: B,
                children: [
                    (0, r.jsx)(A.Z, {
                        isHovering: F,
                        location: 'UserProfileCustomStatusBubble',
                        className: R.reactReplyBar
                    }),
                    (0, r.jsx)(d.Clickable, {
                        tabIndex: 0,
                        className: ef,
                        onFocus: () => es(!0),
                        onBlur: e => {
                            !e.currentTarget.contains(e.relatedTarget) && es(!1);
                        },
                        onMouseEnter: () => es(!0),
                        onMouseLeave: () => es(!1),
                        onClick: $ ? e_ : void 0,
                        children: (0, r.jsxs)('span', {
                            className: eh,
                            children: [
                                $ && ed(),
                                X && (() => {
                                    let e = o()(R.content, {
                                        [R.clamp]: P,
                                        [R.unclamp]: !P,
                                        [R.singleLineAlign]: ee
                                    });
                                    return (0, r.jsxs)(s.animated.div, {
                                        style: { maxHeight: ei },
                                        className: e,
                                        children: [
                                            el(),
                                            eu(),
                                            ec()
                                        ]
                                    });
                                })()
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
function b(e) {
    let {
            user: t,
            ...n
        } = e, i = (0, l.e7)([I.default], () => I.default.getId() === t.id), a = (0, m.a)(), o = (0, l.e7)([T.Z], () => T.Z.findActivity(t.id, e => {
            let {type: t} = e;
            return t === v.IIU.CUSTOM_STATUS;
        })), {modifyStatusEnabled: s} = (0, g.K)({ location: 'UserProfileCustomStatusBubble' }), u = i && s;
    return (0, r.jsx)(L, {
        canModifyStatus: u,
        statusActivity: u ? a : o,
        ...n
    });
}
