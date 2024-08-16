n.d(t, {
    P: function () {
        return O;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(338545),
    o = n(442837),
    c = n(481060),
    d = n(110924),
    _ = n(607070),
    u = n(819640),
    E = n(617136),
    T = n(113434),
    I = n(569984),
    R = n(497505),
    C = n(918701),
    g = n(302245),
    p = n(977156),
    N = n(5881),
    A = n(602667),
    m = n(78826),
    f = n(693900),
    S = n(617889),
    h = n(46140),
    M = n(981631),
    x = n(670017);
function O(e) {
    var t, n, r;
    let { quest: I } = e,
        O = (0, N.T)({
            quest: I,
            location: h.dr.QUESTS_BAR
        }),
        b = (0, p.Zy)({ location: h.dr.QUESTS_BAR }),
        P = (0, o.e7)([_.Z], () => _.Z.useReducedMotion),
        v = (0, o.e7)([u.Z], () => u.Z.hasLayers()),
        L = (null === (t = I.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        Z = (0, d.Z)(L),
        D = (null === (n = I.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        B = (0, d.Z)(D),
        j = (null === (r = I.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        U = null != I.userStatus && (0, C.zE)(I.userStatus, R.jn.QUEST_BAR),
        G = (0, T.tP)(I),
        { hasError: y, isLoading: k } = (0, m.d7)(),
        H = b && !U && !j && !G && !k,
        w = a.useRef(H),
        F = (0, S.B)(I, H && !y),
        V = (0, g.vI)(I, h.dr.QUESTS_BAR) ? g.WV : F.collapsedHeight,
        W = a.useRef(-1),
        K = a.useRef(!1),
        [Y, z] = a.useState(!1),
        [Q, q] = a.useState(!1),
        [X, J] = a.useState(!0),
        [$, ee] = a.useState(!0),
        [et, en] = a.useState(F.preEnrollmentExpandedHeight),
        es = a.useRef(null),
        ea = a.useCallback((e) => {
            J(!1), q(e);
        }, []),
        er = a.useCallback(() => {
            var e, t;
            en((null !== (t = null === (e = es.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * F.paddingVertical);
        }, [F.paddingVertical]),
        ei = a.useCallback(() => {
            er(), ea(!0);
        }, [er, ea]),
        el = a.useCallback(() => {
            z(!0);
        }, []),
        eo = a.useCallback(() => {
            z(!1), !K.current && !D && ea(!1);
        }, [D, ea]),
        ec = a.useCallback(() => {
            z(!1), !D && ea(!1), (K.current = !1);
        }, [D, ea]),
        ed = a.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (Q) return;
                let { withDelay: t = !1 } = e;
                t ? (W.current = window.setTimeout(ei, 75)) : ei();
            },
            [ei, Q]
        ),
        e_ = a.useCallback(() => {
            ed();
        }, [ed]),
        eu = a.useCallback(() => {
            if ((window.clearTimeout(W.current), !!F.canCollapseOnBlur && !Y)) !K.current && ea(!1);
        }, [Y, F, ea]),
        eE = a.useCallback(() => {
            (0, E.dA)({
                questId: I.id,
                event: M.rMx.QUEST_HOVER,
                properties: (0, E.mH)(R.jn.QUEST_BAR)
            }),
                (K.current = !0),
                ed({ withDelay: !0 });
        }, [ed, I]),
        eT = a.useCallback(() => {
            (K.current = !1), eu();
        }, [eu]);
    a.useLayoutEffect(() => {
        D && F.shouldExpandOnQuestComplete && ei();
    }, [ei, D, F.shouldExpandOnQuestComplete]),
        a.useLayoutEffect(() => {
            L && !Z && K.current && ei();
        }, [ei, L, Z]),
        a.useLayoutEffect(() => {
            !D && L && !Z && !K.current && ea(!1);
        }, [L, D, Z, ea]),
        a.useLayoutEffect(() => {
            H !== w.current && ee(!1), (w.current = H);
        }, [H]);
    let eI = L ? h.XZ : h.R4,
        [{ expansionSpring: eR }, eC] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: eI,
            onRest: () => {
                J(!0);
            },
            onStart: () => {
                J(!1);
            }
        }));
    a.useEffect(() => {
        eC({
            expansionSpring: Q ? 1 : 0,
            immediate: P
        });
    }, [Q, eC, P]);
    let { visibilitySpring: eg } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: H ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            ee(!0);
        },
        onStart: () => {
            ee(!1);
        }
    });
    return (a.useLayoutEffect(() => {
        D && !B && F.canCollapseOnBlur && er();
    }, [D, ei, F.canCollapseOnBlur, er, B]),
    a.useEffect(() => {
        y &&
            (0, E.dA)({
                questId: I.id,
                event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, E.mH)(R.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !b &&
                (0, E.dA)({
                    questId: I.id,
                    event: M.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, E.mH)(R.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [y, b, I.id]),
    b && (H || !$ || k) && !y)
        ? (0, s.jsx)(A.A, {
              questOrQuests: I,
              questContent: F.trackingCtx.content,
              overrideVisibility: !v && H,
              children: () => {
                  let e = F.component;
                  return (0, s.jsx)('div', {
                      className: x.mask,
                      children: (0, s.jsx)(l.animated.div, {
                          'aria-hidden': !H,
                          onMouseLeave: eT,
                          onMouseEnter: eE,
                          onFocus: e_,
                          onBlur: eu,
                          className: i()(x.wrapper, {
                              [x.wrapperInvisible]: !H,
                              [x.wrapperVisible]: H && $
                          }),
                          style: {
                              color: I.config.colors.secondary,
                              height: eg.to({
                                  range: [0, 1],
                                  output: [0, !F.canCollapseOnBlur && Q ? et : V]
                              })
                          },
                          children: (0, s.jsx)(l.animated.div, {
                              className: i()(x.contentWrapper, {
                                  [x.contentWrapperExpanded]: Q,
                                  [x.contentWrapperAccepted]: L
                              }),
                              style: {
                                  backgroundColor: F.preEnrollmentBackgroundColor,
                                  backgroundImage: L ? F.postEnrollmentBackgroundImage : void 0
                              },
                              children: (0, s.jsx)(f.t, {
                                  springConfig: eI,
                                  isExpanded: Q,
                                  children: (0, s.jsx)(e, {
                                      expandedContentRef: es,
                                      expansionSpring: eR,
                                      isExpanded: Q,
                                      isExpansionAnimationComplete: X,
                                      onCtxMenuClosed: eo,
                                      onCtxMenuOpened: el,
                                      onCtxMenuSelection: ec,
                                      quest: I,
                                      useReducedMotion: P,
                                      collapsedHeight: V
                                  })
                              })
                          })
                      })
                  });
              }
          })
        : (y ? O.log('Not rendered due to asset error') : !b && O.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function (e) {
              let { overrideQuest: t } = e,
                  n = (0, o.e7)([I.Z], () => {
                      var e;
                      return null !== (e = null != t ? t : I.Z.questDeliveryOverride) && void 0 !== e ? e : (0, C._)(I.Z.quests, R.jn.QUEST_BAR);
                  });
              return null == n
                  ? null
                  : (0, s.jsx)(
                        m.p,
                        {
                            source: h.dr.QUESTS_BAR,
                            questId: n.id,
                            children: (0, s.jsx)(O, { quest: n })
                        },
                        n.id
                    );
          }
        : null;
