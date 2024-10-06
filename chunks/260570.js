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
    o = n(212433),
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
    S = n(510659),
    g = n(277085),
    A = n(287954),
    N = n(825801),
    O = n(64621),
    R = n(228168),
    v = n(689938),
    C = n(249818);
let L = 'text-sm/medium',
    y = 36,
    D = 144;
function b(e) {
    let { statusActivity: t, user: a, guildId: h, channelId: I, profileType: T, hasEntered: b = !0, animate: M = !0, editEnabled: P, onCloseProfile: U } = e,
        { analyticsLocations: w } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { trackUserProfileAction: x } = (0, m.KZ)(),
        G = (0, l.e7)([_.Z], () => _.Z.useReducedMotion),
        [k] = i.useState(() => new u.V7()),
        [B, F] = i.useState(!0),
        V = i.useRef(null),
        H = i.useRef(null),
        Z = i.useRef(null),
        Y = i.useRef(null),
        { emoji: j, state: W } = null != t ? t : {},
        K = null != W && '' !== W ? W : null,
        z = null != K && K.length > 0,
        q = null != j,
        Q = q && !z,
        X = q ? 1.25 : 0,
        $ = 18 + X,
        J = D + X,
        ee = y + X,
        et = q || z,
        { interactionType: en, interactionSource: er, resetInteraction: ei } = (0, S.Xo)(),
        ea = er === R.n_.STATUS && en === R.P.REACT,
        es = er === R.n_.STATUS && en === R.P.REPLY,
        eo = ea || es,
        el = P && !et,
        eu = P && et,
        [ec, ed] = i.useState(Q),
        [e_, eE] = i.useState(!Q),
        [ef, eh] = i.useState(!1),
        ep = i.useRef(null);
    i.useLayoutEffect(() => {
        if (null == V.current || Q) return;
        let e = V.current.getBoundingClientRect().height;
        if ((ed(Q || e <= $), b)) {
            var t, n, r, i;
            let e = null !== (r = null === (t = V.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) && void 0 !== r ? r : J,
                a = null !== (i = null === (n = Z.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) && void 0 !== i ? i : ee;
            eE(!Q && e > a), (H.current = e), (Y.current = a);
        }
    }, [b, Q, $, J, ee]);
    let [eI, em] = (0, c.useSpring)(() => ({
        maxHeight: ''.concat(ee, 'px'),
        config: {
            clamp: !0,
            duration: 150
        }
    }));
    i.useEffect(() => () => k.stop(), [k]);
    let eT = i.useRef(t);
    if (
        (i.useEffect(() => {
            er === R.n_.STATUS && (null == t || eT.current !== t) && ei(), (eT.current = t);
        }, [t, er, ei]),
        !et && !el)
    )
        return null;
    let eS = (e) => {
            var t, n;
            if (!!e_) {
                if (e) {
                    let e = Math.min(null !== (t = H.current) && void 0 !== t ? t : J, J);
                    em({
                        maxHeight: ''.concat(e, 'px'),
                        delay: G ? 0 : 300,
                        config: {
                            clamp: !0,
                            duration: G ? 0 : 150
                        }
                    });
                } else {
                    let e = Math.min(null !== (n = Y.current) && void 0 !== n ? n : ee, ee);
                    em({
                        maxHeight: ''.concat(e, 'px'),
                        delay: 0
                    });
                }
                if (G) {
                    F(!e);
                    return;
                }
                k.start(e ? 300 : 150, () => {
                    F(!e);
                });
            }
        },
        eg = () =>
            q
                ? (0, r.jsx)(d.I, {
                      className: z ? C.statusEmojiInline : C.statusEmojiOnly,
                      emoji: j,
                      animate: M,
                      hideTooltip: !1,
                      tooltipDelay: R.vB
                  })
                : null,
        eA = () =>
            z
                ? (0, r.jsx)(c.Text, {
                      variant: L,
                      className: C.statusText,
                      children: K
                  })
                : null,
        eN = () => {
            let e = s()(C.content, {
                [C.clamp]: B,
                [C.unclamp]: !B,
                [C.singleLineAlign]: ec
            });
            return (0, r.jsxs)(o.animated.div, {
                style: eI,
                className: e,
                children: [eg(), eA()]
            });
        },
        eO = () =>
            (0, r.jsxs)('div', {
                className: s()(C.content, C.clamp, C.placeholderWidth, { [C.panel]: T === R.y0.PANEL }),
                ref: Z,
                children: [eg(), eA()]
            }),
        eR = () =>
            (0, r.jsxs)('div', {
                className: s()(C.content, C.unclamp, C.placeholderWidth, C.incorporeal, { [C.panel]: T === R.y0.PANEL }),
                ref: V,
                children: [eg(), eA()]
            }),
        ev = () => {
            x({ action: 'PRESS_ADD_CUSTOM_STATUS' }),
                null == U || U(),
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await n.e('51714').then(n.bind(n, 211065));
                    return (t) =>
                        (0, r.jsx)(e, {
                            ...t,
                            sourceAnalyticsLocations: w
                        });
                });
        },
        eC = {
            [C.biteSize]: T === R.y0.BITE_SIZE,
            [C.fullSize]: T === R.y0.FULL_SIZE,
            [C.panel]: T === R.y0.PANEL
        },
        eL = s()(C.background, { [C.editable]: eu }),
        ey = { [C.hoisted]: eo },
        eD = s()({
            [C.statusBubbleShape]: (!z && q) || !ec,
            [C.statusBubbleSingleLineWithTextShape]: (ec && z) || el
        }),
        eb = s()(C.statusBubbleOuter, eC, eD, { [C.statusBubbleOuterAddStatusCursor]: el }),
        eM = s()(C.statusBubble, eD, {
            [C.statusBubbleEmojiOnlyPadding]: Q,
            [C.statusBubbleWithTextPadding]: z || el,
            [C.statusBubbleWithTextMinWidth]: z,
            [C.statusBubbleCopyStatusCursor]: et
        }),
        eP = () => {
            var e;
            return (0, r.jsx)(c.FocusRing, {
                ringClassName: eD,
                children: (0, r.jsxs)('div', {
                    ref: ep,
                    className: s()(C.visibleContainer, eC, eL, ey),
                    role: 'tooltip',
                    'aria-label': v.Z.Messages.CUSTOM_STATUS_CUSTOM_STATUS_A11Y_LABEL.format({
                        emoji: null !== (e = null == j ? void 0 : j.name) && void 0 !== e ? e : '',
                        status: W
                    }),
                    tabIndex: 0,
                    onFocus: () => {
                        eh(!0), eS(!0);
                    },
                    onBlur: (e) => {
                        var t;
                        !(null === (t = ep.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && !eo && (eh(!1), eS(!1));
                    },
                    onMouseOver: () => {
                        x({ action: 'HOVER_CUSTOM_STATUS' }), eh(!0), eS(!0);
                    },
                    onMouseLeave: () => {
                        !eo && (eh(!1), eS(!1));
                    },
                    children: [
                        (0, r.jsx)('div', {
                            className: eb,
                            children: (0, r.jsx)('span', {
                                className: eM,
                                children: et && eN()
                            })
                        }),
                        eu
                            ? (0, r.jsx)(g.Z, {
                                  isVisible: ef,
                                  isExpandable: e_,
                                  onCloseProfile: U
                              })
                            : (0, r.jsx)(N.ZP, {
                                  user: a,
                                  sourceType: R.n_.STATUS,
                                  isVisible: ef && !eo,
                                  isExpandable: e_
                              })
                    ]
                })
            });
        };
    return (0, r.jsx)('div', {
        children: el
            ? (0, r.jsx)(c.Clickable, {
                  'aria-label': v.Z.Messages.CUSTOM_STATUS_ADD_CUSTOM_STATUS_A11Y_LABEL,
                  onClick: ev,
                  className: s()(C.visibleContainer, eC, eL),
                  focusProps: { ringClassName: eD },
                  children: (0, r.jsx)('div', {
                      className: eb,
                      children: (0, r.jsx)('span', {
                          className: eM,
                          children: (0, r.jsxs)('div', {
                              className: C.content,
                              children: [
                                  (0, r.jsx)(c.CirclePlusIcon, {
                                      className: C.addStatusIcon,
                                      colorClass: C.addStatusIconColor
                                  }),
                                  (0, r.jsx)(c.Text, {
                                      variant: L,
                                      className: C.addStatusPrompt,
                                      children: v.Z.Messages.USER_SETTINGS_ADD_STATUS
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
                              className: eM,
                              children: [et && eO(), et && eR()]
                          });
                          return (0, r.jsxs)('div', {
                              className: s()(C.invisibleContainer, eC, eb),
                              children: [
                                  (0, r.jsx)(O.Z, {
                                      sourceType: R.n_.STATUS,
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
                      (0, r.jsx)(A.Z, {
                          user: a,
                          guildId: h,
                          channelId: I,
                          profileType: T,
                          sourceDetails: (() => {
                              if (q) {
                                  let e = null != j.id ? '`' + ':'.concat(j.name, ':') + '`' : p.ZP.translateSurrogatesToInlineEmoji(j.name);
                                  return Q ? ''.concat(e) : ''.concat(e, ' ').concat(W);
                              }
                              if (!Q) return ''.concat(W);
                          })(),
                          sourceType: R.n_.STATUS,
                          onClose: () => {
                              eh(!1), eS(!1);
                          },
                          children: () => eP()
                      })
                  ]
              })
    });
}
function M(e) {
    let { user: t, ...n } = e,
        i = (0, l.e7)([I.default], () => I.default.getId() === t.id),
        a = (0, h.Z)(t.id),
        { analyticsLocations: s } = (0, f.ZP)(E.Z.PROFILE_CUSTOM_STATUS),
        { customStatusBubbleEditEnabled: o } = (0, T.K)({ location: 'UserProfileCustomStatusBubbleWithReactReplyBar' });
    return (0, r.jsx)(f.Gt, {
        value: s,
        children: (0, r.jsx)(b, {
            user: t,
            editEnabled: o && i,
            statusActivity: a,
            ...n
        })
    });
}
