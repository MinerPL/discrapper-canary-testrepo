n(47120), n(627341);
var s = n(735250),
    o = n(470079),
    r = n(120356),
    a = n.n(r),
    l = n(180081),
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
    L = n(159296);
function q(e) {
    let { quest: t, isHighlightedReward: n } = e;
    return (0, s.jsx)(T.Z, {
        className: a()(L.rewardTile, { [L.hiddenRewardTile]: n }),
        learnMoreStyle: 'text',
        quest: t,
        questContent: _.jn.QUEST_BAR_V2,
        location: O.dr.QUESTS_BAR
    });
}
function Z(e) {
    let { quest: t, taskDetails: n, expansionSpring: r, isInteractable: a, useReducedMotion: i, containerRef: p, isExpanded: x, onAcceptQuest: m } = e,
        E = (0, c.e7)([g.Z], () => g.Z.isEnrolling(t.id), [t]),
        T = (0, C.ph)(t),
        v = o.useMemo(() => (0, C.nP)(t.config.assets.questBarHero), [t]),
        N = (0, h.vI)(t, O.dr.QUESTS_BAR, !0),
        j = o.useRef(null),
        { primaryVariant: B } = f.u.useExperiment({ location: O.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        R = (0, S.D)({
            quest: t,
            location: O.dr.QUESTS_BAR,
            questContent: _.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: B === f.P.V2 || (0, M.a)(t)
        });
    return (
        o.useEffect(() => {
            null != j.current && (i && x ? (j.current.pause(), (j.current.currentTime = 0)) : !i && x && j.current.play());
        }, [i, x]),
        (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)('div', {
                    children: (0, s.jsxs)('div', {
                        className: L.questPromoContent,
                        ref: p,
                        children: [
                            (0, s.jsxs)('div', {
                                className: L.details,
                                children: [
                                    (0, s.jsx)(q, {
                                        quest: t,
                                        isHighlightedReward: N
                                    }),
                                    (0, s.jsx)(d.Heading, {
                                        className: L.title,
                                        variant: 'heading-md/medium',
                                        children: U.Z.Messages.QUESTS_TITLE.format({ questName: t.config.messages.questName })
                                    }),
                                    (0, s.jsx)(d.Text, {
                                        className: L.description,
                                        variant: 'text-xs/normal',
                                        children: R
                                    })
                                ]
                            }),
                            (0, s.jsx)(d.Button, {
                                className: L.cta,
                                color: d.Button.Colors.BRAND,
                                fullWidth: !0,
                                onClick: a ? m : void 0,
                                size: d.Button.Sizes.SMALL,
                                submitting: E,
                                children: U.Z.Messages.QUESTS_ACCEPT_QUEST
                            })
                        ]
                    })
                }),
                (0, s.jsxs)(l.animated.div, {
                    className: L.heroAssetWrapper,
                    style: {
                        backdropFilter: r.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                        filter: r.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')')),
                        borderRadius: N ? '12px 12px 0 0' : '8px 8px 0 0'
                    },
                    children: [
                        (0, s.jsx)(l.animated.div, {
                            className: L.heroAssetDarken,
                            style: {
                                opacity: r.to([0, 1], [1, 0])
                            }
                        }),
                        (0, s.jsx)(l.animated.div, {
                            className: L.heroAssetTint,
                            style: {
                                backgroundColor: t.config.colors.primary,
                                opacity: r.to([0, 1], [1, 0])
                            }
                        }),
                        v
                            ? (0, s.jsx)(A.Fl, {
                                  id: 'QuestBarV2ContentExpanded_heroAnimated',
                                  children: (e) => (
                                      null != e.current && (j.current = e.current),
                                      (0, s.jsx)(u.Z, {
                                          ref: e,
                                          autoPlay: !i && x,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: L.heroAsset,
                                          controls: !1,
                                          children: (0, s.jsx)('source', {
                                              src: T,
                                              type: (0, C.mN)(T)
                                          })
                                      })
                                  )
                              })
                            : (0, s.jsx)(A.Fl, {
                                  id: 'QuestBarV2ContentExpanded_heroStatic',
                                  children: (e) =>
                                      (0, s.jsx)('img', {
                                          ref: e,
                                          alt: '',
                                          className: L.heroAsset,
                                          src: T
                                      })
                              }),
                        (0, s.jsx)(l.animated.div, {
                            className: L.legibilityGradient,
                            style: {
                                opacity: r.to({
                                    range: [0, 1],
                                    output: [0, 1]
                                })
                            }
                        })
                    ]
                })
            ]
        })
    );
}
function P(e) {
    var t;
    let { quest: n, taskDetails: r, expansionSpring: c, overlayRef: u, isExpanded: p, useReducedMotion: x, containerRef: g, onCtxMenuOpen: C, onCtxMenuClose: f, onCtxMenuSelect: h } = e,
        S = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        T = r.percentComplete > 0,
        A = (0, m.z)(n),
        [M, q, Z] = (0, m.me)(n, r),
        P = (0, E.pF)({ location: O.dr.QUESTS_BAR }),
        w = o.useRef(null),
        Q = (0, m.B6)(n.config.expiresAt),
        W = (0, m._s)({ quest: n });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.animated.div, {
                className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(k.aY, ', ').concat(k.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, s.jsxs)('div', {
                className: L.questAcceptedContent,
                ref: g,
                children: [
                    (0, s.jsxs)('div', {
                        className: L.questAcceptedHeader,
                        children: [
                            (0, s.jsx)(d.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(L.flex, L.headerText),
                                children: U.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: Q })
                            }),
                            (0, s.jsx)(v.r, {
                                onOpen: C,
                                onClose: f,
                                onSelect: h,
                                questContent: _.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, s.jsx)(d.Clickable, {
                                        ...e,
                                        className: L.submenuWrapper,
                                        'aria-label': U.Z.Messages.ACTIONS,
                                        children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(L.submenuIcon, L.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, s.jsx)('div', { className: L.divider }),
                    (0, s.jsx)(B.Z, {
                        expansionSpring: c,
                        overlayRef: u,
                        progressBarRef: w,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, s.jsx)(y.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: w,
                        isExpanded: !0,
                        taskDetails: r,
                        activeScreen: M
                    }),
                    (0, s.jsx)(N.n, {
                        children:
                            !S &&
                            (0, i.EQ)(M)
                                .with(_.LI.SELECT, () =>
                                    (0, s.jsx)(I.Z, {
                                        onConsole: () => Z(O.cd.CONSOLE),
                                        onDesktop: () => Z(O.cd.DESKTOP)
                                    })
                                )
                                .with(_.LI.DESKTOP, () => (0, s.jsx)(b.Z, { quest: n }))
                                .with(_.LI.CONSOLE, () =>
                                    (0, s.jsx)(R.Z, {
                                        quest: n,
                                        taskDetails: r
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, s.jsx)(N.n, {
                        children: (0, s.jsx)(j.y, {
                            quest: n,
                            useReducedMotion: x,
                            isExpanded: p,
                            awaitingConsoleConnections: W,
                            hasMadeProgress: T,
                            isProgressing: A,
                            activeScreen: M,
                            showBackButton: M !== _.LI.SELECT && q.length > 1 && !T && !A && P,
                            onBack: () => Z(null)
                        })
                    })
                ]
            }),
            (0, s.jsx)('div', {
                className: a()(L.postEnrollmentBackground, L.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(k.aY, ', ').concat(k.v6, ')') }
            })
        ]
    });
}
let w = o.forwardRef(function (e, t) {
    var n;
    let { children: r, className: i, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: m, onCtxMenuOpen: g, onCtxMenuClose: C, onCtxMenuSelect: f, overlayRef: h, quest: E, useReducedMotion: S, taskDetails: T } = e,
        A = o.useCallback(() => {
            (0, x.AH)(E.id, {
                questContent: _.jn.QUEST_BAR_V2,
                questContentCTA: p.jZ.ACCEPT_QUEST
            });
        }, [E]),
        v = (null === (n = E.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        N = d && u;
    return (0, s.jsxs)(l.animated.div, {
        'aria-hidden': !N,
        className: a()(i, L.contentExpanded, {
            [L.contentInteractable]: N,
            [L.contentExpandedAccepted]: v
        }),
        style: {
            transform: (0, l.to)(
                [
                    m.to({
                        range: [0, 1],
                        output: [0, -100]
                    }),
                    m.to({
                        range: [0, 1],
                        output: [0, c]
                    })
                ],
                (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
            )
        },
        children: [
            r,
            (0, s.jsx)(l.animated.div, {
                style: { opacity: 1 },
                children: v
                    ? (0, s.jsx)(P, {
                          quest: E,
                          taskDetails: T,
                          expansionSpring: m,
                          overlayRef: h,
                          isExpanded: d,
                          useReducedMotion: S,
                          onCtxMenuOpen: g,
                          onCtxMenuClose: C,
                          onCtxMenuSelect: f,
                          containerRef: t
                      })
                    : (0, s.jsx)(Z, {
                          quest: E,
                          taskDetails: T,
                          expansionSpring: m,
                          isInteractable: N,
                          useReducedMotion: S,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: A
                      })
            })
        ]
    });
});
t.Z = w;
