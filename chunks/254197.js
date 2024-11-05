n(47120), n(627341);
var o = n(200651),
    r = n(192379),
    s = n(120356),
    a = n.n(s),
    i = n(100621),
    l = n(278074),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    p = n(70097),
    m = n(617136),
    x = n(272008),
    g = n(113434),
    f = n(569984),
    h = n(497505),
    C = n(918701),
    v = n(184299),
    j = n(988303),
    _ = n(302245),
    E = n(665430),
    b = n(585500),
    N = n(475595),
    S = n(720293),
    T = n(644646),
    B = n(78826),
    A = n(670638),
    y = n(341907),
    R = n(693900),
    w = n(164495),
    I = n(759853),
    k = n(205511),
    q = n(694802),
    P = n(95985),
    O = n(50476),
    M = n(658590),
    W = n(46140),
    L = n(743294),
    Q = n(388032),
    Z = n(160443);
function D(e) {
    var t;
    let { quest: n, onClick: s, containerClassName: i, imgClassName: l, reducedMotion: c } = e,
        [m, x] = r.useState(!1),
        g = r.useRef(null),
        f = (0, S.z)(S.i.QUEST_BAR_PREVIEW_VIDEO, n),
        h = (0, S.z)(S.i.VIDEO_PLAYER_THUMBNAIL, n),
        C = (0, v.km)((e) => e.getVideoProgressState);
    r.useEffect(() => {
        null != g.current && (c && m && (g.current.currentTime = 0), g.current.play());
    }, [g, m, c]);
    let j = C(n.id),
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null && j === v.iw.COMPLETED,
        E = !_ && (!c || m);
    return (0, o.jsxs)(u.Clickable, {
        className: a()(Z.videoQuestPreviewCont, i),
        onClick: s,
        onMouseEnter: () => {
            c && !m && x(!0);
        },
        onMouseLeave: () => {
            c && m && x(!1);
        },
        children: [
            null != h &&
                (0, o.jsx)('img', {
                    alt: '',
                    src: h.url,
                    className: a()(Z.assetBodyVideoPreviewMedia, l)
                }),
            null != f
                ? (0, o.jsx)(p.Z, {
                      ref: g,
                      autoPlay: !0,
                      poster: null == h ? void 0 : h.url,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      className: a()(Z.assetBodyVideoPreviewMedia, Z.assetBodyVideoPreviewVideo, { [Z.assetBodyVideoPreviewVisible]: E }),
                      controls: !1,
                      children: (0, o.jsx)('source', {
                          src: f.url,
                          type: f.mimetype
                      })
                  })
                : null,
            (0, o.jsx)('div', {
                className: Z.previewPlayButtonCont,
                children: _
                    ? (0, o.jsx)(u.RetryIcon, {
                          color: d.Z.colors.WHITE,
                          className: Z.previewPlayButton
                      })
                    : (0, o.jsx)(u.PlayIcon, {
                          color: d.Z.colors.WHITE,
                          className: Z.previewPlayButton
                      })
            })
        ]
    });
}
function H(e) {
    let { quest: t, isHighlightedReward: n } = e;
    return (0, o.jsx)(T.Z, {
        className: a()(Z.rewardTile, { [Z.hiddenRewardTile]: n }),
        learnMoreStyle: 'text',
        quest: t,
        questContent: h.jn.QUEST_BAR_V2,
        location: W.dr.QUESTS_BAR
    });
}
function U(e) {
    let { quest: t, taskDetails: n, expansionSpring: s, isInteractable: a, reducedMotion: l, containerRef: d, isExpanded: m, onAcceptQuest: x } = e,
        g = (0, c.e7)([f.Z], () => f.Z.isEnrolling(t.id), [t]),
        v = r.useMemo(() => (0, N.fh)(t, N.eC.QUEST_BAR_HERO), [t]),
        E = (0, _.vI)(t, W.dr.QUESTS_BAR, !0),
        S = r.useRef(null),
        { primaryVariant: T } = j.u.useExperiment({ location: W.dr.QUESTS_BAR }, { autoTrackExposure: !1 }),
        A = (0, b.D)({
            quest: t,
            location: W.dr.QUESTS_BAR,
            questContent: h.jn.QUEST_BAR_V2,
            taskDetails: n,
            useV2Variants: T === j.P.V2 || (0, M.a)(t)
        });
    r.useEffect(() => {
        null != S.current && (l && m ? (S.current.pause(), (S.current.currentTime = 0)) : !l && m && S.current.play());
    }, [l, m]);
    let y = (0, C.cr)(t) ? Q.intl.string(Q.t.umdNio) : Q.intl.string(Q.t.l7E81t);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)('div', {
                children: (0, o.jsxs)('div', {
                    className: Z.questPromoContent,
                    ref: d,
                    children: [
                        (0, o.jsxs)('div', {
                            className: Z.details,
                            children: [
                                (0, o.jsx)(H, {
                                    quest: t,
                                    isHighlightedReward: E
                                }),
                                (0, o.jsx)(u.Heading, {
                                    className: Z.title,
                                    variant: 'heading-md/medium',
                                    children: Q.intl.format(Q.t.EQa7oq, { questName: t.config.messages.questName })
                                }),
                                (0, o.jsx)(u.Text, {
                                    className: Z.description,
                                    variant: 'text-xs/normal',
                                    children: A
                                })
                            ]
                        }),
                        (0, o.jsx)(u.Button, {
                            className: Z.cta,
                            color: u.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: a ? x : void 0,
                            size: u.Button.Sizes.SMALL,
                            submitting: g,
                            children: y
                        })
                    ]
                })
            }),
            (0, o.jsxs)(i.animated.div, {
                className: Z.heroAssetWrapper,
                style: {
                    backdropFilter: s.to([0, 1], [5, 0]).to((e) => 'blur('.concat(e, 'px)')),
                    filter: s.to([0, 1], [0.8, 1]).to((e) => 'brightness('.concat(e, ')')),
                    borderRadius: E ? '12px 12px 0 0' : '8px 8px 0 0'
                },
                children: [
                    (0, o.jsx)(i.animated.div, {
                        className: Z.heroAssetDarken,
                        style: {
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    (0, o.jsx)(i.animated.div, {
                        className: Z.heroAssetTint,
                        style: {
                            backgroundColor: t.config.colors.primary,
                            opacity: s.to([0, 1], [1, 0])
                        }
                    }),
                    v.isAnimated
                        ? (0, o.jsx)(B.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroAnimated',
                              children: (e) => {
                                  var t;
                                  return (
                                      null != e.current && (S.current = e.current),
                                      (0, o.jsx)(p.Z, {
                                          ref: e,
                                          autoPlay: !l && m,
                                          loop: !0,
                                          muted: !0,
                                          playsInline: !0,
                                          className: Z.heroAsset,
                                          controls: !1,
                                          children: (0, o.jsx)('source', {
                                              src: v.url,
                                              type: null !== (t = v.mimetype) && void 0 !== t ? t : void 0
                                          })
                                      })
                                  );
                              }
                          })
                        : (0, o.jsx)(B.Fl, {
                              id: 'QuestBarV2ContentExpanded_heroStatic',
                              children: (e) =>
                                  (0, o.jsx)('img', {
                                      ref: e,
                                      alt: '',
                                      className: Z.heroAsset,
                                      src: v.url
                                  })
                          }),
                    (0, o.jsx)(i.animated.div, {
                        className: Z.legibilityGradient,
                        style: {
                            opacity: s.to({
                                range: [0, 1],
                                output: [0, 1]
                            })
                        }
                    })
                ]
            })
        ]
    });
}
function V(e) {
    var t;
    let { quest: n, taskDetails: s, expansionSpring: c, overlayRef: d, isExpanded: p, reducedMotion: m, containerRef: x, onCtxMenuOpen: f, onCtxMenuClose: v, onCtxMenuSelect: j } = e,
        _ = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        b = s.percentComplete > 0,
        N = (0, g.z)(n),
        [S, T, B] = (0, g.me)(n, s),
        M = (0, E.pF)({ location: W.dr.QUESTS_BAR }),
        H = r.useRef(null),
        U = (0, g.B6)(n.config.expiresAt),
        V = (0, g._s)({ quest: n }),
        z = (0, C.cr)(n),
        F = r.useCallback(() => {
            (0, y.openVideoQuestModal)(n);
        }, [n]);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(i.animated.div, {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundCollapsed),
                style: {
                    backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')'),
                    opacity: c.to({
                        range: [0, 1],
                        output: [1, 0]
                    })
                }
            }),
            (0, o.jsxs)('div', {
                className: Z.questAcceptedContent,
                ref: x,
                children: [
                    (0, o.jsxs)('div', {
                        className: Z.questAcceptedHeader,
                        children: [
                            (0, o.jsx)(u.Text, {
                                variant: 'text-xxs/medium',
                                className: a()(Z.flex, Z.headerText),
                                children: Q.intl.format(Q.t['pX+fmp'], { expirationDate: U })
                            }),
                            (0, o.jsx)(A.r, {
                                onOpen: f,
                                onClose: v,
                                onSelect: j,
                                questContent: h.jn.QUEST_BAR_V2,
                                quest: n,
                                shouldShowDisclosure: !1,
                                showShareLink: !0,
                                children: (e) =>
                                    (0, o.jsx)(u.Clickable, {
                                        ...e,
                                        className: Z.submenuWrapper,
                                        'aria-label': Q.intl.string(Q.t.DEoVWV),
                                        children: (0, o.jsx)(u.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: a()(Z.submenuIcon, Z.interactiveNormal)
                                        })
                                    })
                            })
                        ]
                    }),
                    (0, o.jsx)('div', { className: Z.divider }),
                    (0, o.jsx)(I.Z, {
                        expansionSpring: c,
                        overlayRef: d,
                        progressBarRef: H,
                        quest: n,
                        isExpanded: p
                    }),
                    (0, o.jsx)(P.Z, {
                        contentLocation: 'expanded',
                        quest: n,
                        progressBarRef: H,
                        isExpanded: !0,
                        taskDetails: s,
                        activeScreen: S
                    }),
                    (0, o.jsx)(R.n, {
                        children:
                            !_ &&
                            !z &&
                            (0, l.EQ)(S)
                                .with(h.LI.SELECT, () =>
                                    (0, o.jsx)(O.Z, {
                                        onConsole: () => B(W.cd.CONSOLE),
                                        onDesktop: () => B(W.cd.DESKTOP)
                                    })
                                )
                                .with(h.LI.DESKTOP, () => (0, o.jsx)(q.Z, { quest: n }))
                                .with(h.LI.CONSOLE, () =>
                                    (0, o.jsx)(k.Z, {
                                        quest: n,
                                        taskDetails: s
                                    })
                                )
                                .exhaustive()
                    }),
                    (0, o.jsxs)(R.n, {
                        children: [
                            z &&
                                (0, o.jsx)(D, {
                                    quest: n,
                                    onClick: F,
                                    containerClassName: Z.enrolledVideoPreview,
                                    imgClassName: Z.enrolledVideoPreviewImg,
                                    reducedMotion: m
                                }),
                            (0, o.jsx)(w.yD, {
                                quest: n,
                                useReducedMotion: m,
                                isExpanded: p,
                                awaitingConsoleConnections: V,
                                hasMadeProgress: b,
                                isProgressing: N,
                                activeScreen: S,
                                showBackButton: S !== h.LI.SELECT && T.length > 1 && !b && !N && M,
                                onBack: () => B(null),
                                taskDetails: s
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: a()(Z.postEnrollmentBackground, Z.postEnrollmentBackgroundExpanded),
                style: { backgroundImage: 'linear-gradient(90deg, '.concat(L.aY, ', ').concat(L.v6, ')') }
            })
        ]
    });
}
let z = r.forwardRef(function (e, t) {
    var n;
    let { children: s, className: l, collapsedHeight: c, isExpanded: d, isExpansionAnimationComplete: u, expansionSpring: p, onCtxMenuOpen: g, onCtxMenuClose: f, onCtxMenuSelect: v, overlayRef: j, quest: _, useReducedMotion: E, taskDetails: b } = e,
        N = (0, C.cr)(_),
        S = r.useCallback(() => {
            (0, x.AH)(_.id, {
                questContent: h.jn.QUEST_BAR_V2,
                questContentCTA: m.jZ.ACCEPT_QUEST
            }),
                N && (0, y.openVideoQuestModal)(_);
        }, [_, N]),
        T = (null === (n = _.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null,
        B = d && u;
    return (0, o.jsxs)(i.animated.div, {
        'aria-hidden': !B,
        className: a()(l, Z.contentExpanded, {
            [Z.contentInteractable]: B,
            [Z.contentExpandedAccepted]: T
        }),
        style: {
            transform: (0, i.to)(
                [
                    p.to({
                        range: [0, 1],
                        output: [0, -100]
                    }),
                    p.to({
                        range: [0, 1],
                        output: [0, c]
                    })
                ],
                (e, t) => 'translateY(calc('.concat(e, '% + ').concat(t, 'px))')
            )
        },
        children: [
            s,
            (0, o.jsx)(i.animated.div, {
                style: { opacity: 1 },
                children: T
                    ? (0, o.jsx)(V, {
                          quest: _,
                          taskDetails: b,
                          expansionSpring: p,
                          overlayRef: j,
                          isExpanded: d,
                          reducedMotion: E,
                          onCtxMenuOpen: g,
                          onCtxMenuClose: f,
                          onCtxMenuSelect: v,
                          containerRef: t
                      })
                    : (0, o.jsx)(U, {
                          quest: _,
                          taskDetails: b,
                          expansionSpring: p,
                          isInteractable: B,
                          reducedMotion: E,
                          containerRef: t,
                          isExpanded: d,
                          onAcceptQuest: S
                      })
            })
        ]
    });
});
t.Z = z;
