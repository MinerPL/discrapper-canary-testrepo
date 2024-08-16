n(47120), n(627341);
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(338545),
    i = n(278074),
    c = n(442837),
    d = n(481060),
    u = n(70097),
    p = n(358085),
    x = n(617136),
    m = n(272008),
    g = n(113434),
    _ = n(569984),
    C = n(497505),
    f = n(918701),
    h = n(988303),
    E = n(302245),
    T = n(665430),
    S = n(585500),
    v = n(644646),
    A = n(78826),
    N = n(670638),
    j = n(693900),
    B = n(776263),
    b = n(759853),
    R = n(205511),
    y = n(95985),
    I = n(50476),
    k = n(658590),
    M = n(740697),
    O = n(46140),
    U = n(743294),
    L = n(689938),
    q = n(159296);
let w = o.forwardRef(function (e, t) {
    var n, r;
    let { children: w, className: Z, collapsedHeight: P, isExpanded: Q, isExpansionAnimationComplete: W, expansionSpring: D, onCtxMenuOpen: H, onCtxMenuClose: V, onCtxMenuSelect: z, overlayRef: G, quest: F, useReducedMotion: Y, taskDetails: K } = e,
        X = o.useRef(null),
        J = (0, c.e7)([_.Z], () => _.Z.isEnrolling(F.id), [F]),
        $ = (0, g.B6)(F.config.expiresAt),
        ee = o.useMemo(() => (0, f.nP)(F.config.assets.questBarHero), [F]),
        et = o.useCallback(() => {
            (0, m.AH)(F.id, {
                questContent: C.jn.QUEST_BAR_V2,
                questContentCTA: x.jZ.ACCEPT_QUEST
            });
        }, [F]),
        en = (0, T.p)({ location: O.dr.QUESTS_BAR }),
        { primaryVariant: es } = h.u.useExperiment({ location: O.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        eo = (null === (n = F.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        er = (null === (r = F.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        ea = Q && W,
        el = (0, g._s)({ quest: F }),
        ei = K.percentComplete > 0,
        ec = (0, g.z)(F),
        [ed, eu, ep] = (0, g.me)(F, K),
        ex = (0, f.ph)(F),
        em = (0, S.D)({
            quest: F,
            location: O.dr.QUESTS_BAR,
            questContent: C.jn.QUEST_BAR_V2,
            taskDetails: K,
            useV2Variants: es === h.P.V2 || (0, k.a)(F)
        }),
        eg = (0, E.vI)(F, O.dr.QUESTS_BAR, !0);
    return (0, s.jsxs)(l.animated.div, {
        'aria-hidden': !ea,
        className: a()(Z, q.contentExpanded, {
            [q.contentInteractable]: ea,
            [q.contentExpandedAccepted]: eo
        }),
        style: {
            transform: (0, l.to)(
                [
                    D.to({
                        range: [0, 1],
                        output: [0, -100]
                    }),
                    D.to({
                        range: [0, 1],
                        output: [0, P]
                    })
                ],
                (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
            )
        },
        children: [
            eo &&
                (0, s.jsx)(l.animated.div, {
                    className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundCollapsed),
                    style: {
                        backgroundImage: 'linear-gradient(90deg, '.concat(U.aY, ', ').concat(U.v6, ')'),
                        opacity: D.to({
                            range: [0, 1],
                            output: [1, 0]
                        })
                    }
                }),
            w,
            (0, s.jsx)(l.animated.div, {
                style: { opacity: 1 },
                children: eo
                    ? (0, s.jsxs)('div', {
                          className: q.questAcceptedContent,
                          ref: t,
                          children: [
                              (0, s.jsxs)('div', {
                                  className: q.questAcceptedHeader,
                                  children: [
                                      (0, s.jsx)(d.Text, {
                                          variant: 'text-xxs/medium',
                                          className: a()(q.flex, q.headerText),
                                          children: L.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: $ })
                                      }),
                                      (0, s.jsx)(N.r, {
                                          onOpen: H,
                                          onClose: V,
                                          onSelect: z,
                                          questContent: C.jn.QUEST_BAR_V2,
                                          quest: F,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, s.jsx)(d.Clickable, {
                                                  ...e,
                                                  className: q.submenuWrapper,
                                                  'aria-label': L.Z.Messages.ACTIONS,
                                                  children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                                      size: 'md',
                                                      color: 'currentColor',
                                                      className: a()(q.submenuIcon, q.interactiveNormal)
                                                  })
                                              })
                                      })
                                  ]
                              }),
                              (0, s.jsx)('div', { className: q.divider }),
                              (0, s.jsx)(b.Z, {
                                  expansionSpring: D,
                                  overlayRef: G,
                                  progressBarRef: X,
                                  quest: F,
                                  isExpanded: Q
                              }),
                              (0, s.jsx)(y.Z, {
                                  contentLocation: 'expanded',
                                  quest: F,
                                  progressBarRef: X,
                                  isExpanded: !0,
                                  taskDetails: K,
                                  activeScreen: ed
                              }),
                              (0, s.jsx)(j.n, {
                                  children:
                                      !er &&
                                      (0, i.EQ)(ed)
                                          .with(C.LI.SELECT, () =>
                                              (0, s.jsx)(I.Z, {
                                                  onConsole: () => ep(O.cd.CONSOLE),
                                                  onDesktop: () => ep(O.cd.DESKTOP)
                                              })
                                          )
                                          .with(C.LI.DESKTOP, () => (0, p.isWeb)() && en && (0, s.jsx)(M.Z, {}))
                                          .with(C.LI.CONSOLE, () =>
                                              (0, s.jsx)(R.Z, {
                                                  quest: F,
                                                  taskDetails: K
                                              })
                                          )
                                          .exhaustive()
                              }),
                              (0, s.jsx)(j.n, {
                                  children: (0, s.jsx)(B.y, {
                                      quest: F,
                                      useReducedMotion: Y,
                                      isExpanded: Q,
                                      awaitingConsoleConnections: el,
                                      hasMadeProgress: ei,
                                      isProgressing: ec,
                                      activeScreen: ed,
                                      showBackButton: ed !== C.LI.SELECT && eu.length > 1 && !ei && !ec && en,
                                      onBack: () => ep(null)
                                  })
                              })
                          ]
                      })
                    : (0, s.jsx)('div', {
                          children: (0, s.jsxs)('div', {
                              className: q.questPromoContent,
                              ref: t,
                              children: [
                                  (0, s.jsxs)('div', {
                                      className: q.details,
                                      children: [
                                          (0, s.jsx)(v.Z, {
                                              className: a()(q.rewardTile, { [q.hiddenRewardTile]: eg }),
                                              learnMoreStyle: 'text',
                                              quest: F,
                                              questContent: C.jn.QUEST_BAR_V2,
                                              location: O.dr.QUESTS_BAR
                                          }),
                                          (0, s.jsx)(d.Heading, {
                                              className: q.title,
                                              variant: 'heading-md/medium',
                                              children: L.Z.Messages.QUESTS_TITLE.format({ questName: F.config.messages.questName })
                                          }),
                                          (0, s.jsx)(d.Text, {
                                              className: q.description,
                                              variant: 'text-xs/normal',
                                              children: em
                                          })
                                      ]
                                  }),
                                  (0, s.jsx)(d.Button, {
                                      className: q.cta,
                                      color: d.Button.Colors.BRAND,
                                      fullWidth: !0,
                                      onClick: ea ? et : void 0,
                                      size: d.Button.Sizes.SMALL,
                                      submitting: J,
                                      children: L.Z.Messages.QUESTS_ACCEPT_QUEST
                                  })
                              ]
                          })
                      })
            }),
            eo
                ? (0, s.jsx)('div', {
                      className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundExpanded),
                      style: { backgroundImage: 'linear-gradient(90deg, '.concat(U.aY, ', ').concat(U.v6, ')') }
                  })
                : (0, s.jsxs)(l.animated.div, {
                      className: q.heroAssetWrapper,
                      style: {
                          backdropFilter: D.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                          filter: D.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')')),
                          borderRadius: eg ? '12px 12px 0 0' : '8px 8px 0 0'
                      },
                      children: [
                          (0, s.jsx)(l.animated.div, {
                              className: q.heroAssetDarken,
                              style: {
                                  opacity: D.to([0, 1], [1, 0])
                              }
                          }),
                          (0, s.jsx)(l.animated.div, {
                              className: q.heroAssetTint,
                              style: {
                                  backgroundColor: F.config.colors.primary,
                                  opacity: D.to([0, 1], [1, 0])
                              }
                          }),
                          ee
                              ? (0, s.jsx)(A.Fl, {
                                    id: 'QuestBarV2ContentExpanded_heroAnimated',
                                    children: (e) =>
                                        (0, s.jsx)(u.Z, {
                                            ref: e,
                                            autoPlay: !Y,
                                            loop: !0,
                                            muted: !0,
                                            playsInline: !0,
                                            className: q.heroAsset,
                                            controls: !1,
                                            children: (0, s.jsx)('source', {
                                                src: ex,
                                                type: (0, f.mN)(ex)
                                            })
                                        })
                                })
                              : (0, s.jsx)(A.Fl, {
                                    id: 'QuestBarV2ContentExpanded_heroStatic',
                                    children: (e) =>
                                        (0, s.jsx)('img', {
                                            ref: e,
                                            alt: '',
                                            className: q.heroAsset,
                                            src: ex
                                        })
                                }),
                          (0, s.jsx)(l.animated.div, {
                              className: q.legibilityGradient,
                              style: {
                                  opacity: D.to({
                                      range: [0, 1],
                                      output: [0, 1]
                                  })
                              }
                          })
                      ]
                  })
        ]
    });
});
t.Z = w;
