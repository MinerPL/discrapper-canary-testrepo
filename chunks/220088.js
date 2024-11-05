n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(100621),
    l = n(442837),
    u = n(846519),
    c = n(481060),
    d = n(788307),
    f = n(607070),
    _ = n(100527),
    h = n(906732),
    p = n(8454),
    m = n(633302),
    g = n(314897),
    E = n(785717),
    v = n(481046),
    I = n(510659),
    S = n(277085),
    T = n(287954),
    b = n(810097),
    y = n(64621),
    A = n(228168),
    N = n(388032),
    C = n(705236);
let R = 'text-sm/medium',
    O = 36,
    D = 144;
function L(e) {
    let { statusActivity: t, user: a, guildId: p, channelId: g, profileType: v, hasEntered: L = !0, animate: x = !0, editEnabled: w, onCloseProfile: M } = e,
        { analyticsLocations: P } = (0, h.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: k } = (0, E.KZ)(),
        U = (0, l.e7)([f.Z], () => f.Z.useReducedMotion),
        [G] = i.useState(() => new u.V7()),
        [B, Z] = i.useState(!0),
        F = i.useRef(null),
        V = i.useRef(null),
        j = i.useRef(null),
        H = i.useRef(null),
        { emoji: Y, state: W } = null != t ? t : {},
        K = null != W && '' !== W ? W : null,
        z = null != K && K.length > 0,
        q = null != Y,
        Q = q && !z,
        X = q ? 1.25 : 0,
        J = 18 + X,
        $ = D + X,
        ee = O + X,
        et = q || z,
        { interactionType: en, interactionSource: er, resetInteraction: ei } = (0, I.Xo)(),
        ea = er === A.n_.STATUS && en === A.P.REACT,
        es = er === A.n_.STATUS && en === A.P.REPLY,
        eo = ea || es,
        el = w && !et,
        eu = w && et,
        [ec, ed] = i.useState(Q),
        [ef, e_] = i.useState(!Q),
        [eh, ep] = i.useState(!1),
        em = i.useRef(null);
    i.useLayoutEffect(() => {
        if (null == F.current || Q) return;
        let e = F.current.getBoundingClientRect().height;
        if ((ed(Q || e <= J), L)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = F.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : $,
                a = null !== (i = null === (n = j.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : ee;
            e_(!Q && e > a), (V.current = e), (H.current = a);
        }
    }, [L, Q, J, $, ee]);
    let [eg, eE] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(ee, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    i.useEffect(() => () => G.stop(), [G]);
    let ev = i.useRef(t);
    if (
        (i.useEffect(() => {
            er === A.n_.STATUS && (null == t || ev.current !== t) && ei(), (ev.current = t);
        }, [t, er, ei]),
        !et && !el)
    )
        return null;
    let eI = (e) => {
            var t, n;
            if (!!ef) {
                if (e) {
                    let e = Math.min(null !== (t = V.current) && void 0 !== t ? t : $, $);
                    eE({
                        maxHeight: ''.concat(e, 'px'),
                        delay: U ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: U ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = H.current) && void 0 !== n ? n : ee, ee);
                    eE({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (U) {
                    Z(!e);
                    return;
                }
                G.start(e ? 300 : 150, () => {
                    Z(!e);
                });
            }
        },
        eS = () =>
            q
                ? (0, r.jsx)(d.Iv, {
                      className: z ? C.statusEmojiInline : C.statusEmojiOnly,
                      emoji: Y,
                      animate: x,
                      hideTooltip: !1,
                      tooltipDelay: A.vB
                  })
                : null,
        eT = () =>
            z
                ? (0, r.jsx)(c.Text, {
                      variant: R,
                      className: C.statusText,
                      children: K
                  })
                : null,
        eb = () => {
            let e = s()(C.content, {
                [C.clamp]: B,
                [C.unclamp]: !B,
                [C.singleLineAlign]: ec
            });
            return (0, r.jsxs)(o.animated.div, {
                style: eg,
                className: e,
                children: [eS(), eT()]
            });
        },
        ey = () =>
            (0, r.jsxs)('div', {
                className: s()(C.content, C.clamp, C.placeholderWidth, { [C.panel]: v === A.y0.PANEL }),
                ref: j,
                children: [eS(), eT()]
            }),
        eA = () =>
            (0, r.jsxs)('div', {
                className: s()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, { [C.panel]: v === A.y0.PANEL }),
                ref: F,
                children: [eS(), eT()]
            }),
        eN = () => {
            k({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == M || M(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: P
                        });
                });
        },
        eC = {
            [C.biteSize]: v === A.y0.BITE_SIZE,
            [C.fullSize]: v === A.y0.FULL_SIZE,
            [C.panel]: v === A.y0.PANEL
        },
        eR = s()(C.background, { [C.editable]: eu }),
        eO = { [C.hoisted]: eo },
        eD = s()({
            [C.statusBubbleShape]: (!z && q) || !ec,
            [C.statusBubbleSingleLineWithTextShape]: (ec && z) || el
        }),
        eL = s()(C.statusBubbleOuter, eC, eD, { [C.statusBubbleOuterAddStatusCursor]: el }),
        ex = s()(C.statusBubble, eD, {
            [C.statusBubbleEmojiOnlyPadding]: Q,
            [C.statusBubbleWithTextPadding]: z || el,
            [C.statusBubbleWithTextMinWidth]: z,
            [C.statusBubbleCopyStatusCursor]: et
        }),
        ew = () => {
            var e;
            return (0, r.jsx)(c.FocusRing, {
                ringClassName: eD,
                children: (0, r.jsxs)('div', {
                    ref: em,
                    className: s()(C.visibleContainer, eC, eR, eO),
                    role: 'tooltip',
                    'aria-label': N.intl.formatToPlainString(N.t.UpF5QU, {
                        emoji: null !== (e = null == Y ? void 0 : Y.name) && void 0 !== e ? e : '',
                        status: W
                    }),
                    tabIndex: 0,
                    onFocus: () => {
                        ep(!0), eI(!0);
                    },
                    onBlur: (e) => {
                        var t;
                        !(null === (t = em.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && !eo && (ep(!1), eI(!1));
                    },
                    onMouseOver: () => {
                        k({ action: 'HOVER_CUSTOM_STATUS' }), ep(!0), eI(!0);
                    },
                    onMouseLeave: () => {
                        !eo && (ep(!1), eI(!1));
                    },
                    children: [
                        (0, r.jsx)('div', {
                            className: eL,
                            children: (0, r.jsx)('span', {
                                className: ex,
                                children: et && eb()
                            })
                        }),
                        eu
                            ? (0, r.jsx)(S.Z, {
                                  isVisible: eh,
                                  isExpandable: ef,
                                  onCloseProfile: M
                              })
                            : (0, r.jsx)(b.ZP, {
                                  user: a,
                                  sourceType: A.n_.STATUS,
                                  isVisible: eh && !eo,
                                  isExpandable: ef
                              })
                    ]
                })
            });
        };
    return (0, r.jsx)('div', {
        children: el
            ? (0, r.jsx)(c.Clickable, {
                  'aria-label': N.intl.string(N.t['zrpF/f']),
                  onClick: eN,
                  className: s()(C.addCustomStatusButtonBubble, eC, eR),
                  focusProps: { ringClassName: eD },
                  children: (0, r.jsx)('div', {
                      className: eL,
                      children: (0, r.jsx)('span', {
                          className: ex,
                          children: (0, r.jsxs)('div', {
                              className: C.content,
                              children: [
                                  (0, r.jsx)(c.CirclePlusIcon, {
                                      className: C.addStatusIcon,
                                      colorClass: C.addStatusIconColor
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: R,
                                      className: C.addStatusPrompt,
                                      children: N.intl.string(N.t.evw0o6)
                                  })
                              ]
                          })
                      })
                  })
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (() => {
                          let e = (0, r.jsxs)('span', {
                              className: ex,
                              children: [et && ey(), et && eA()]
                          });
                          return (0, r.jsxs)('div', {
                              className: s()(C.invisibleContainer, eC, eL),
                              children: [
                                  (0, r.jsx)(y.Z, {
                                      sourceType: A.n_.STATUS,
                                      user: a,
                                      children: (0, r.jsx)('div', {
                                          className: C.coachmarkAnchor,
                                          children: e
                                      })
                                  }),
                                  e
                              ]
                          });
                      })(),
                      (0, r.jsx)(T.Z, {
                          user: a,
                          guildId: p,
                          channelId: g,
                          profileType: v,
                          sourceDetails: (() => {
                              if (q) {
                                  let e = null != Y.id ? '`' + ':'.concat(Y.name, ':') + '`' : m.ZP.translateSurrogatesToInlineEmoji(Y.name);
                                  return Q ? ''.concat(e) : ''.concat(e, ' ').concat(W);
                              }
                              if (!Q) return ''.concat(W);
                          })(),
                          sourceType: A.n_.STATUS,
                          onClose: () => {
                              ep(!1), eI(!1);
                          },
                          children: () => ew()
                      })
                  ]
              })
    });
}
function x(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([g.default], () => g.default.getId() === t.id),
        a = (0, p.Z)(t.id),
        { analyticsLocations: s } = (0, h.ZP)(_.Z.PROFILE_CUSTOM_STATUS),
        { customStatusBubbleEditEnabled: o } = (0, v.K)({ location: 'UserProfileCustomStatusBubbleWithInteractionToolbar' });
    return (0, r.jsx)(h.Gt, {
        value: s,
        children: (0, r.jsx)(L, {
            user: t,
            editEnabled: o && i,
            statusActivity: a,
            ...n
        })
    });
}
