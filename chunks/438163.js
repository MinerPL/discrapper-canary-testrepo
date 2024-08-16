n.d(t, {
    Z: function () {
        return y;
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
    p = n(314897),
    m = n(158776),
    I = n(785717),
    T = n(277085),
    g = n(228168),
    S = n(981631),
    A = n(689938),
    N = n(576062);
let v = 'text-sm/medium',
    O = 36,
    R = 144;
function C(e) {
    var t;
    let { statusActivity: a, profileType: h, editEnabled: p, hasEntered: m = !0, animate: S = !0, onClose: C } = e,
        { analyticsLocations: y } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: D } = (0, I.KZ)(),
        L = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [b] = i.useState(() => new u.V7()),
        [M, P] = i.useState(!0),
        U = i.useRef(null),
        w = i.useRef(null),
        x = i.useRef(null),
        G = i.useRef(null),
        { emoji: k, state: B } = null != a ? a : {},
        F = null != B && '' !== B ? B : null,
        V = null != F && F.length > 0,
        H = null != k,
        Z = H && !V,
        Y = H ? 1.25 : 0,
        j = 18 + Y,
        W = R + Y,
        K = O + Y,
        z = H || V,
        q = p && !z,
        Q = p && z,
        [X, $] = i.useState(Z),
        [J, ee] = i.useState(!Z),
        [et, en] = i.useState(!1);
    i.useLayoutEffect(() => {
        if (null == U.current || Z) return;
        let e = U.current.getBoundingClientRect().height;
        if (($(Z || e <= j), m)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = U.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : W,
                a = null !== (i = null === (n = x.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : K;
            ee(!Z && e > a), (w.current = e), (G.current = a);
        }
    }, [m, Z, j, W, K]);
    let [er, ei] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(K, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    if ((i.useEffect(() => () => b.stop(), [b]), !z && !q)) return null;
    let ea = (e) => {
            var t, n;
            if (!!J) {
                if (e) {
                    let e = Math.min(null !== (t = w.current) && void 0 !== t ? t : W, W);
                    ei({
                        maxHeight: ''.concat(e, 'px'),
                        delay: L ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: L ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = G.current) && void 0 !== n ? n : K, K);
                    ei({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (L) {
                    P(!e);
                    return;
                }
                b.start(e ? 300 : 150, () => {
                    P(!e);
                });
            }
        },
        es = () =>
            H
                ? (0, r.jsx)(d.I, {
                      className: V ? N.statusEmojiInline : N.statusEmojiOnly,
                      emoji: k,
                      animate: S,
                      hideTooltip: !1,
                      tooltipDelay: g.vB
                  })
                : null,
        eo = () =>
            V
                ? (0, r.jsx)(c.Text, {
                      variant: v,
                      className: N.statusText,
                      children: F
                  })
                : null,
        el = () =>
            (0, r.jsxs)('div', {
                className: N.content,
                children: [
                    (0, r.jsx)(c.CirclePlusIcon, {
                        className: N.addStatusIcon,
                        colorClass: N.addStatusIconColor
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: v,
                        className: N.addStatusPrompt,
                        children: A.Z.Messages.USER_SETTINGS_ADD_STATUS
                    })
                ]
            }),
        eu = {
            [N.biteSize]: h === g.y0.BITE_SIZE,
            [N.fullSize]: h === g.y0.FULL_SIZE,
            [N.panel]: h === g.y0.PANEL
        },
        ec = s()(N.background, { [N.editable]: Q }),
        ed = s()({
            [N.statusBubbleShape]: (!V && H) || !X,
            [N.statusBubbleSingleLineWithTextShape]: (X && V) || q
        }),
        e_ = s()(N.statusBubbleOuter, eu, ed, { [N.statusBubbleOuterAddStatusCursor]: q }),
        eE = s()(N.statusBubble, ed, {
            [N.statusBubbleEmojiOnlyPadding]: Z,
            [N.statusBubbleWithTextPadding]: V || q,
            [N.statusBubbleWithTextMinWidth]: V,
            [N.statusBubbleCopyStatusCursor]: z
        });
    return (0, r.jsx)(f.Gt, {
        value: y,
        children: (0, r.jsxs)('div', {
            children: [
                (0, r.jsx)('div', {
                    className: s()(N.invisibleContainer, eu),
                    children: (0, r.jsx)('div', {
                        className: e_,
                        children: (0, r.jsxs)('span', {
                            className: eE,
                            children: [
                                q && el(),
                                z &&
                                    (0, r.jsxs)('div', {
                                        className: s()(N.content, N.clamp, N.placeholderWidth, { [N.panel]: h === g.y0.PANEL }),
                                        ref: x,
                                        children: [es(), eo()]
                                    }),
                                z &&
                                    (0, r.jsxs)('div', {
                                        className: s()(N.content, N.unclamp, N.placeholderWidth, N.incorporeal, { [N.panel]: h === g.y0.PANEL }),
                                        ref: U,
                                        children: [es(), eo()]
                                    })
                            ]
                        })
                    })
                }),
                (0, r.jsxs)(c.ClickableContainer, {
                    className: s()(N.visibleContainer, eu, ec),
                    'aria-label': q
                        ? A.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL
                        : A.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                              emoji: null !== (t = null == k ? void 0 : k.name) && void 0 !== t ? t : '',
                              status: B
                          }),
                    focusProps: { ringClassName: ed },
                    onClick: q
                        ? () => {
                              D({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                                  null == C || C(),
                                  (0, c.openModalLazy)(async () => {
                                      let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                                      return (t) =>
                                          (0, r.jsx)(e, {
                                              ...t,
                                              sourceAnalyticsLocations: y
                                          });
                                  });
                          }
                        : void 0,
                    onFocus: () => {
                        en(!0), ea(!0);
                    },
                    onBlur: (e) => {
                        !e.currentTarget.contains(e.relatedTarget) && (en(!1), ea(!1));
                    },
                    onMouseOver: () => {
                        D({ action: 'HOVER_CUSTOM_STATUS' }), en(!0), ea(!0);
                    },
                    onMouseLeave: () => {
                        en(!1), ea(!1);
                    },
                    children: [
                        (0, r.jsx)('div', {
                            className: e_,
                            children: (0, r.jsxs)('span', {
                                className: eE,
                                children: [
                                    z &&
                                        (() => {
                                            let e = s()(N.content, {
                                                [N.clamp]: M,
                                                [N.unclamp]: !M,
                                                [N.singleLineAlign]: X
                                            });
                                            return (0, r.jsxs)(o.animated.div, {
                                                style: er,
                                                className: e,
                                                children: [es(), eo()]
                                            });
                                        })(),
                                    q && el()
                                ]
                            })
                        }),
                        Q &&
                            (0, r.jsx)(T.Z, {
                                isVisible: et,
                                isExpandable: J,
                                onClose: C
                            })
                    ]
                })
            ]
        })
    });
}
function y(e) {
    let { user: t, editEnabled: n, ...i } = e,
        a = (0, l.e7)([p.default], () => p.default.getId() === t.id),
        s = (0, h.a)(),
        o = (0, l.e7)([m.Z], () =>
            m.Z.findActivity(t.id, (e) => {
                let { type: t } = e;
                return t === S.IIU.CUSTOM_STATUS;
            })
        );
    return (0, r.jsx)(C, {
        editEnabled: n && a,
        statusActivity: n && a ? s : o,
        ...i
    });
}
