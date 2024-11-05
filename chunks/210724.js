n.d(t, {
    P: function () {
        return y;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(100621),
    l = n(442837),
    c = n(481060),
    d = n(110924),
    u = n(607070),
    p = n(819640),
    m = n(617136),
    x = n(113434),
    g = n(497505),
    f = n(302245),
    h = n(977156),
    C = n(5881),
    v = n(602667),
    j = n(78826),
    _ = n(667105),
    E = n(693900),
    b = n(617889),
    N = n(130653),
    S = n(46140),
    T = n(981631),
    B = n(604330);
function A(e) {
    let { isExpanded: t, questId: n } = e;
    return (
        (0, x.qI)({
            mode: t ? S.NH.EXPANDED : S.NH.COLLAPSED,
            questContent: g.jn.QUEST_BAR_V2,
            questId: n
        }),
        null
    );
}
function y(e) {
    var t, n;
    let { quest: s } = e,
        x = (0, C.T)({
            quest: s,
            location: S.dr.QUESTS_BAR
        }),
        y = (0, h.Zy)({ location: S.dr.QUESTS_BAR }),
        R = (0, _.qN)({
            quest: s,
            location: S.dr.QUESTS_BAR
        }),
        w = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        I = (0, l.e7)([p.Z], () => p.Z.hasLayers()),
        k = (null === (t = s.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null,
        q = (0, d.Z)(k),
        P = (null === (n = s.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
        O = (0, d.Z)(P),
        { hasError: M, isLoading: W } = (0, j.d7)(),
        L = r.useContext(N.T) || (y && R && !W),
        Q = r.useRef(L),
        Z = (0, b.B)(s, L && !M),
        D = (0, f.vI)(s, S.dr.QUESTS_BAR) ? f.WV : Z.collapsedHeight,
        H = r.useRef(-1),
        U = r.useRef(!1),
        [V, z] = r.useState(!1),
        [F, G] = r.useState(!1),
        [K, Y] = r.useState(!0),
        [X, J] = r.useState(!0),
        [$, ee] = r.useState(Z.preEnrollmentExpandedHeight),
        et = r.useRef(null),
        en = r.useCallback((e) => {
            Y(!1), G(e);
        }, []),
        eo = r.useCallback(() => {
            var e, t;
            ee((null !== (t = null === (e = et.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 84) + 2 * Z.paddingVertical);
        }, [Z.paddingVertical]),
        er = r.useCallback(() => {
            eo(), en(!0);
        }, [eo, en]),
        es = r.useCallback(() => {
            z(!0);
        }, []),
        ea = r.useCallback(() => {
            z(!1), !U.current && !P && en(!1);
        }, [P, en]),
        ei = r.useCallback(() => {
            z(!1), !P && en(!1), (U.current = !1);
        }, [P, en]),
        el = r.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (F) return;
                let { withDelay: t = !1 } = e;
                t ? (H.current = window.setTimeout(er, 75)) : er();
            },
            [er, F]
        ),
        ec = r.useCallback(() => {
            el();
        }, [el]),
        ed = r.useCallback(() => {
            if ((window.clearTimeout(H.current), !!Z.canCollapseOnBlur && !V)) !U.current && en(!1);
        }, [V, Z, en]),
        eu = r.useCallback(() => {
            (0, m.dA)({
                questId: s.id,
                event: T.rMx.QUEST_HOVER,
                properties: (0, m.mH)(g.jn.QUEST_BAR)
            }),
                (U.current = !0),
                el({ withDelay: !0 });
        }, [el, s]),
        ep = r.useCallback(() => {
            (0, m.dA)({
                questId: s.id,
                event: T.rMx.QUEST_HOVER_OFF,
                properties: (0, m.mH)(g.jn.QUEST_BAR)
            }),
                (U.current = !1),
                ed();
        }, [ed, s]);
    r.useLayoutEffect(() => {
        P && Z.shouldExpandOnQuestComplete && er();
    }, [er, P, Z.shouldExpandOnQuestComplete]),
        r.useLayoutEffect(() => {
            k && !q && U.current && er();
        }, [er, k, q]),
        r.useLayoutEffect(() => {
            !P && k && !q && !U.current && en(!1);
        }, [k, P, q, en]),
        r.useLayoutEffect(() => {
            L !== Q.current && J(!1), (Q.current = L);
        }, [L]);
    let em = k ? S.XZ : S.R4,
        [{ expansionSpring: ex }, eg] = (0, c.useSpring)(() => ({
            from: { expansionSpring: 0 },
            config: em,
            onRest: () => {
                Y(!0);
            },
            onStart: () => {
                Y(!1);
            }
        }));
    r.useEffect(() => {
        eg({
            expansionSpring: F ? 1 : 0,
            immediate: w
        });
    }, [F, eg, w]);
    let { visibilitySpring: ef } = (0, c.useSpring)({
        from: { visibilitySpring: 0 },
        to: { visibilitySpring: L ? 1 : 0 },
        config: {
            tension: 250,
            friction: 10,
            clamp: !0
        },
        onRest: () => {
            J(!0);
        },
        onStart: () => {
            J(!1);
        }
    });
    return (r.useLayoutEffect(() => {
        P && !O && Z.canCollapseOnBlur && eo();
    }, [P, er, Z.canCollapseOnBlur, eo, O]),
    r.useEffect(() => {
        M &&
            (0, m.dA)({
                questId: s.id,
                event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                properties: {
                    ...(0, m.mH)(g.jn.QUEST_BAR),
                    reason: 'asset_loading_error'
                }
            }),
            !y &&
                (0, m.dA)({
                    questId: s.id,
                    event: T.rMx.QUEST_CONTENT_RENDERING_FAILURE,
                    properties: {
                        ...(0, m.mH)(g.jn.QUEST_BAR),
                        reason: 'not_eligible_for_quest'
                    }
                });
    }, [M, y, s.id]),
    y && (L || !X || W) && !M)
        ? (0, o.jsx)(v.A, {
              questOrQuests: s,
              questContent: Z.trackingCtx.content,
              overrideVisibility: !I && L,
              children: () => {
                  let e = Z.component;
                  return (0, o.jsxs)('div', {
                      className: B.mask,
                      children: [
                          L &&
                              (0, o.jsx)(A, {
                                  questId: s.id,
                                  isExpanded: F
                              }),
                          (0, o.jsx)(i.animated.div, {
                              'aria-hidden': !L,
                              onMouseLeave: ep,
                              onMouseEnter: eu,
                              onFocus: ec,
                              onBlur: ed,
                              className: a()(B.wrapper, {
                                  [B.wrapperInvisible]: !L,
                                  [B.wrapperVisible]: L && X
                              }),
                              style: {
                                  color: s.config.colors.secondary,
                                  height: ef.to({
                                      range: [0, 1],
                                      output: [0, !Z.canCollapseOnBlur && F ? $ : D]
                                  })
                              },
                              children: (0, o.jsx)(i.animated.div, {
                                  className: a()(B.contentWrapper, {
                                      [B.contentWrapperExpanded]: F,
                                      [B.contentWrapperAccepted]: k
                                  }),
                                  style: {
                                      backgroundColor: Z.preEnrollmentBackgroundColor,
                                      backgroundImage: k ? Z.postEnrollmentBackgroundImage : void 0
                                  },
                                  children: (0, o.jsx)(E.t, {
                                      springConfig: em,
                                      isExpanded: F,
                                      children: (0, o.jsx)(e, {
                                          expandedContentRef: et,
                                          expansionSpring: ex,
                                          isExpanded: F,
                                          isExpansionAnimationComplete: K,
                                          onCtxMenuClosed: ea,
                                          onCtxMenuOpened: es,
                                          onCtxMenuSelection: ei,
                                          quest: s,
                                          useReducedMotion: w,
                                          collapsedHeight: D
                                      })
                                  })
                              })
                          })
                      ]
                  });
              }
          })
        : (M ? x.log('Not rendered due to asset error') : !y && x.log('Not rendered due to ineligibility'), null);
}
t.Z =
    12633 == n.j
        ? function () {
              let e = (0, _.DH)();
              return null == e
                  ? null
                  : (0, o.jsx)(
                        j.p,
                        {
                            source: S.dr.QUESTS_BAR,
                            questId: e.id,
                            children: (0, o.jsx)(y, { quest: e })
                        },
                        e.id
                    );
          }
        : null;
