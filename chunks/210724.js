n.d(t, {
    P: function () {
        return b;
    }
}),
    n(47120);
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(212433),
    i = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(113434),
    _ = n(569984),
    C = n(497505),
    g = n(918701),
    f = n(302245),
    E = n(977156),
    h = n(5881),
    S = n(602667),
    T = n(78826),
    v = n(693900),
    N = n(617889),
    j = n(46140),
    A = n(981631),
    R = n(604330);
function b(e) {
    var t, n, r;
    let { quest: _ } = e,
        b = (0, h.T)({
            quest: _,
            location: j.dr.QUESTS_BAR
        }),
        B = (0, E.Zy)({ location: j.dr.QUESTS_BAR }),
        I = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
        M = (0, i.e7)([p.Z], () => p.Z.hasLayers()),
        O = (null === (t = _.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        y = (0, d.Z)(O),
        L = (null === (n = _.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        w = (0, d.Z)(L),
        k = (null === (r = _.userStatus) || void 0 === r ? void 0 : r.claimedAt) != null,
        U = null != _.userStatus && (0, g.zE)(_.userStatus, C.jn.QUEST_BAR),
        Z = (0, x.tP)(_),
        { hasError: q, isLoading: P } = (0, T.d7)(),
        Q = B && !U && !k && !Z && !P,
        D = o.useRef(Q),
        W = (0, N.B)(_, Q && !q),
        H = (0, f.vI)(_, j.dr.QUESTS_BAR) ? f.WV : W.collapsedHeight,
        V = o.useRef(-1),
        z = o.useRef(!1),
        [G, F] = o.useState(!1),
        [K, Y] = o.useState(!1),
        [X, J] = o.useState(!0),
        [$, ee] = o.useState(!0),
        [et, en] = o.useState(W.preEnrollmentExpandedHeight),
        es = o.useRef(null),
        eo = o.useCallback((e) => {
            J(!1), Y(e);
        }, []),
        er = o.useCallback(() => {
            var e, t;
            en((null !== (t = null === (e = es.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * W.paddingVertical);
        }, [W.paddingVertical]),
        ea = o.useCallback(() => {
            er(), eo(!0);
        }, [er, eo]),
        el = o.useCallback(() => {
            F(!0);
        }, []),
        ei = o.useCallback(() => {
            F(!1), !z.current && !L && eo(!1);
        }, [L, eo]),
        ec = o.useCallback(() => {
            F(!1), !L && eo(!1), (z.current = !1);
        }, [L, eo]),
        ed = o.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (K) return;
                let { withDelay: t = !1 } = e;
                t ? (V.current = window.setTimeout(ea, 75)) : ea();
            },
            [ea, K]
        ),
        eu = o.useCallback(() => {
            ed();
        }, [ed]),
        ep = o.useCallback(() => {
            if ((window.clearTimeout(V.current), !!W.canCollapseOnBlur && !G)) !z.current && eo(!1);
        }, [G, W, eo]),
        em = o.useCallback(() => {
            (0, m.dA)({
                questId: _.id,
                event: A.rMx.QUEST_HOVER,
                properties: (0, m.mH)(C.jn.QUEST_BAR)
            }),
                (z.current = !0),
                ed({ withDelay: !0 });
        }, [ed, _]),
        ex = o.useCallback(() => {
            (z.current = !1), ep();
        }, [ep]);
    o.useLayoutEffect(() => {
        L && W.shouldExpandOnQuestComplete && ea();
    }, [ea, L, W.shouldExpandOnQuestComplete]),
        o.useLayoutEffect(() => {
            O && !y && z.current && ea();
        }, [ea, O, y]),
        o.useLayoutEffect(() => {
            !L && O && !y && !z.current && eo(!1);
        }, [O, L, y, eo]),
        o.useLayoutEffect(() => {
            Q !== D.current && ee(!1), (D.current = Q);
        }, [Q]);
    let e_ = O ? j.XZ : j.R4,
        [{ expansionSpring: eC }, eg] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: e_,
            onRest: () => {
                J(!0);
            },
            onStart: () => {
                J(!1);
            }
        }));
    o.useEffect(() => {
        eg({
            expansionSpring: K ? 1 : 0,
            immediate: I
        });
    }, [K, eg, I]);
    let { visibilitySpring: ef } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: Q ? 1 : 0 },
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
    return (o.useLayoutEffect(() => {
        L && !w && W.canCollapseOnBlur && er();
    }, [L, ea, W.canCollapseOnBlur, er, w]),
    o.useEffect(() => {
        q &&
            (0, m.dA)({
                questId: _.id,
                event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(C.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !B &&
                (0, m.dA)({
                    questId: _.id,
                    event: A.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(C.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [q, B, _.id]),
    B && (Q || !$ || P) && !q)
        ? (0, s.jsx)(S.A, {
              questOrQuests: _,
              questContent: W.trackingCtx.content,
              overrideVisibility: !M && Q,
              children: () => {
                  let e = W.component;
                  return (0, s.jsx)('div', {
                      className: R.mask,
                      children: (0, s.jsx)(l.animated.div, {
                          'aria-hidden': !Q,
                          onMouseLeave: ex,
                          onMouseEnter: em,
                          onFocus: eu,
                          onBlur: ep,
                          className: a()(R.wrapper, {
                              [R.wrapperInvisible]: !Q,
                              [R.wrapperVisible]: Q && $
                          }),
                          style: {
                              color: _.config.colors.secondary,
                              height: ef.to({
                                  range: [0, 1],
                                  output: [0, !W.canCollapseOnBlur && K ? et : H]
                              })
                          },
                          children: (0, s.jsx)(l.animated.div, {
                              className: a()(R.contentWrapper, {
                                  [R.contentWrapperExpanded]: K,
                                  [R.contentWrapperAccepted]: O
                              }),
                              style: {
                                  backgroundColor: W.preEnrollmentBackgroundColor,
                                  backgroundImage: O ? W.postEnrollmentBackgroundImage : void 0
                              },
                              children: (0, s.jsx)(v.t, {
                                  springConfig: e_,
                                  isExpanded: K,
                                  children: (0, s.jsx)(e, {
                                      expandedContentRef: es,
                                      expansionSpring: eC,
                                      isExpanded: K,
                                      isExpansionAnimationComplete: X,
                                      onCtxMenuClosed: ei,
                                      onCtxMenuOpened: el,
                                      onCtxMenuSelection: ec,
                                      quest: _,
                                      useReducedMotion: I,
                                      collapsedHeight: H
                                  })
                              })
                          })
                      })
                  });
              }
          })
        : (q ? b.log('Not rendered due to asset error') : !B && b.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, i.e7)([_.Z], () => {
                  var e, t;
                  return null !== (t = null !== (e = _.Z.questDeliveryOverride) && void 0 !== e ? e : (0, g.PM)(_.Z.quests, _.Z.questToDeliverForPlacement, C.Ok.DESKTOP_ACCOUNT_PANEL_AREA)) && void 0 !== t ? t : (0, g._)(_.Z.quests, C.jn.QUEST_BAR);
              });
              return null == e
                  ? null
                  : (0, s.jsx)(
                        T.p,
                        {
                            source: j.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, s.jsx)(b, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
