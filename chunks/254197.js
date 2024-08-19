n(47120), n(627341);
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(567526),
    i = n(278074),
    c = n(442837),
    d = n(481060),
    u = n(70097),
    p = n(617136),
    x = n(272008),
    m = n(113434),
    g = n(569984),
    _ = n(497505),
    C = n(918701),
    f = n(988303),
    h = n(302245),
    E = n(665430),
    S = n(585500),
    T = n(644646),
    A = n(78826),
    v = n(670638),
    N = n(693900),
    j = n(776263),
    B = n(759853),
    R = n(205511),
    b = n(694802),
    y = n(95985),
    I = n(50476),
    M = n(658590),
    O = n(46140),
    k = n(743294),
    U = n(689938),
    q = n(159296);
let Z = o.forwardRef(function (e, t) {
    var n, r;
    let { children: Z, className: L, collapsedHeight: w, isExpanded: P, isExpansionAnimationComplete: Q, expansionSpring: W, onCtxMenuOpen: D, onCtxMenuClose: H, onCtxMenuSelect: V, overlayRef: z, quest: G, useReducedMotion: F, taskDetails: Y } = e,
        K = o.useRef(null),
        X = (0, c.e7)([g.Z], () => g.Z.isEnrolling(G.id), [G]),
        J = (0, m.B6)(G.config.expiresAt),
        $ = o.useMemo(() => (0, C.nP)(G.config.assets.questBarHero), [G]),
        ee = o.useCallback(() => {
            (0, x.AH)(G.id, {
                questContent: _.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.ACCEPT_QUEST
            });
        }, [G]),
        et = (0, E.p)({ location: O.dr.QUESTS_BAR }),
        { primaryVariant: en } = f.u.useExperiment({ location: O.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        es = (null === (n = G.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        eo = (null === (r = G.userStatus) || void 0 === r ? void 0 : r.completedAt) != null,
        er = P && Q,
        ea = (0, m._s)({ quest: G }),
        el = Y.percentComplete > 0,
        ei = (0, m.z)(G),
        [ec, ed, eu] = (0, m.me)(G, Y),
        ep = (0, C.ph)(G),
        ex = (0, S.D)({
            quest: G,
            location: O.dr.QUESTS_BAR,
            questContent: _.jn.QUEST_BAR_V2,
            taskDetails: Y,
            useV2Variants: en === f.P.V2 || (0, M.a)(G)
        }),
        em = (0, h.vI)(G, O.dr.QUESTS_BAR, !0);
    return (0, s.jsxs)(l.animated.div, {
        'aria-hidden': !er,
        className: a()(L, q.contentExpanded, {
            [q.contentInteractable]: er,
            [q.contentExpandedAccepted]: es
        }),
        style: {
            transform: (0, l.to)(
                [
                    W.to({
                        range: [0, 1],
                        output: [0, -100]
                    }),
                    W.to({
                        range: [0, 1],
                        output: [0, w]
                    })
                ],
                (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
            )
        },
        children: [
            es &&
                (0, s.jsx)(l.animated.div, {
                    className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundCollapsed),
                    style: {
                        backgroundImage: 'linear-gradient(90deg, '.concat(k.aY, ', ').concat(k.v6, ')'),
                        opacity: W.to({
                            range: [0, 1],
                            output: [1, 0]
                        })
                    }
                }),
            Z,
            (0, s.jsx)(l.animated.div, {
                style: { opacity: 1 },
                children: es
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
                                          children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: J })
                                      }),
                                      (0, s.jsx)(v.r, {
                                          onOpen: D,
                                          onClose: H,
                                          onSelect: V,
                                          questContent: _.jn.QUEST_BAR_V2,
                                          quest: G,
                                          shouldShowDisclosure: !1,
                                          showShareLink: !0,
                                          children: (e) =>
                                              (0, s.jsx)(d.Clickable, {
                                                  ...e,
                                                  className: q.submenuWrapper,
                                                  'aria-label': U.Z.Messages.ACTIONS,
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
                              (0, s.jsx)(B.Z, {
                                  expansionSpring: W,
                                  overlayRef: z,
                                  progressBarRef: K,
                                  quest: G,
                                  isExpanded: P
                              }),
                              (0, s.jsx)(y.Z, {
                                  contentLocation: 'expanded',
                                  quest: G,
                                  progressBarRef: K,
                                  isExpanded: !0,
                                  taskDetails: Y,
                                  activeScreen: ec
                              }),
                              (0, s.jsx)(N.n, {
                                  children:
                                      !eo &&
                                      (0, i.EQ)(ec)
                                          .with(_.LI.SELECT, () =>
                                              (0, s.jsx)(I.Z, {
                                                  onConsole: () => eu(O.cd.CONSOLE),
                                                  onDesktop: () => eu(O.cd.DESKTOP)
                                              })
                                          )
                                          .with(_.LI.DESKTOP, () => (0, s.jsx)(b.Z, { quest: G }))
                                          .with(_.LI.CONSOLE, () =>
                                              (0, s.jsx)(R.Z, {
                                                  quest: G,
                                                  taskDetails: Y
                                              })
                                          )
                                          .exhaustive()
                              }),
                              (0, s.jsx)(N.n, {
                                  children: (0, s.jsx)(j.y, {
                                      quest: G,
                                      useReducedMotion: F,
                                      isExpanded: P,
                                      awaitingConsoleConnections: ea,
                                      hasMadeProgress: el,
                                      isProgressing: ei,
                                      activeScreen: ec,
                                      showBackButton: ec !== _.LI.SELECT && ed.length > 1 && !el && !ei && et,
                                      onBack: () => eu(null)
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
                                          (0, s.jsx)(T.Z, {
                                              className: a()(q.rewardTile, { [q.hiddenRewardTile]: em }),
                                              learnMoreStyle: 'text',
                                              quest: G,
                                              questContent: _.jn.QUEST_BAR_V2,
                                              location: O.dr.QUESTS_BAR
                                          }),
                                          (0, s.jsx)(d.Heading, {
                                              className: q.title,
                                              variant: 'heading-md/medium',
                                              children: U.Z.Messages.QUESTS_TITLE.format({ questName: G.config.messages.questName })
                                          }),
                                          (0, s.jsx)(d.Text, {
                                              className: q.description,
                                              variant: 'text-xs/normal',
                                              children: ex
                                          })
                                      ]
                                  }),
                                  (0, s.jsx)(d.Button, {
                                      className: q.cta,
                                      color: d.Button.Colors.BRAND,
                                      fullWidth: !0,
                                      onClick: er ? ee : void 0,
                                      size: d.Button.Sizes.SMALL,
                                      submitting: X,
                                      children: U.Z.Messages.QUESTS_ACCEPT_QUEST
                                  })
                              ]
                          })
                      })
            }),
            es
                ? (0, s.jsx)('div', {
                      className: a()(q.postEnrollmentBackground, q.postEnrollmentBackgroundExpanded),
                      style: { backgroundImage: 'linear-gradient(90deg, '.concat(k.aY, ', ').concat(k.v6, ')') }
                  })
                : (0, s.jsxs)(l.animated.div, {
                      className: q.heroAssetWrapper,
                      style: {
                          backdropFilter: W.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                          filter: W.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')')),
                          borderRadius: em ? '12px 12px 0 0' : '8px 8px 0 0'
                      },
                      children: [
                          (0, s.jsx)(l.animated.div, {
                              className: q.heroAssetDarken,
                              style: {
                                  opacity: W.to([0, 1], [1, 0])
                              }
                          }),
                          (0, s.jsx)(l.animated.div, {
                              className: q.heroAssetTint,
                              style: {
                                  backgroundColor: G.config.colors.primary,
                                  opacity: W.to([0, 1], [1, 0])
                              }
                          }),
                          $
                              ? (0, s.jsx)(A.Fl, {
                                    id: 'QuestBarV2ContentExpanded_heroAnimated',
                                    children: (e) =>
                                        (0, s.jsx)(u.Z, {
                                            ref: e,
                                            autoPlay: !F,
                                            loop: !0,
                                            muted: !0,
                                            playsInline: !0,
                                            className: q.heroAsset,
                                            controls: !1,
                                            children: (0, s.jsx)('source', {
                                                src: ep,
                                                type: (0, C.mN)(ep)
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
                                            src: ep
                                        })
                                }),
                          (0, s.jsx)(l.animated.div, {
                              className: q.legibilityGradient,
                              style: {
                                  opacity: W.to({
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
t.Z = Z;
