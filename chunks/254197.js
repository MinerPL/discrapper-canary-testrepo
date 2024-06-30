var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), i = n(920906), l = n(442837), c = n(481060), d = n(810090), u = n(617136), p = n(272008), x = n(113434), m = n(569984), g = n(497505), C = n(918701), f = n(988303), h = n(644646), _ = n(78826), E = n(670638), S = n(330039), T = n(693900), N = n(524824), v = n(164495), j = n(759853), A = n(205511), B = n(95985), b = n(658590), R = n(46140), O = n(689938), y = n(308596);
let I = o.forwardRef(function (e, t) {
    var n;
    let {
            className: r,
            isExpanded: I,
            isExpansionAnimationComplete: M,
            expansionSpring: q,
            onCtxMenuOpen: U,
            onCtxMenuClose: Z,
            onCtxMenuSelect: P,
            quest: k,
            useReducedMotion: L
        } = e, w = o.useRef(null), Q = (0, l.e7)([m.Z], () => m.Z.isEnrolling(k.id), [k]), W = (0, x.B6)(k.config.expiresAt), H = o.useMemo(() => (0, C.nP)(k.config.assets.questBarHero), [k]), D = o.useCallback(() => {
            (0, p.AH)(k.id, {
                questContent: g.jn.QUEST_BAR_V2,
                questContentCTA: u.jZ.ACCEPT_QUEST
            });
        }, [k]), {primaryVariant: V} = f.u.useExperiment({ location: R.dr.QUESTS_BAR }, { autoTrackExposure: !1 }), z = (null === (n = k.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, G = (0, x.Rf)(k), F = G.percentComplete > 0, K = I && M, Y = o.useMemo(() => (0, C.$J)(k), [k]), X = (0, C.ph)(k), $ = (0, C.pG)({
            quest: k,
            useV2Variants: V === f.P.V2 || (0, b.a)(k),
            taskDetails: G
        });
    return (0, s.jsx)('div', {
        'aria-hidden': !K,
        className: a()(r, y.contentExpanded, {
            [y.contentInteractable]: K,
            [y.contentExpandedAccepted]: z
        }),
        children: z ? (0, s.jsxs)('div', {
            className: y.questAcceptedContent,
            ref: t,
            children: [
                (0, s.jsxs)('div', {
                    className: y.questAcceptedHeader,
                    children: [
                        (0, s.jsx)(c.Text, {
                            variant: 'text-xxs/medium',
                            className: a()(y.flex, y.headerText),
                            children: O.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: W })
                        }),
                        (0, s.jsx)(E.r, {
                            onOpen: U,
                            onClose: Z,
                            onSelect: P,
                            questContent: g.jn.QUEST_BAR_V2,
                            quest: k,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: e => (0, s.jsx)(c.Clickable, {
                                ...e,
                                className: y.submenuWrapper,
                                'aria-label': O.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(c.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: a()(y.submenuIcon, y.interactiveNormal)
                                })
                            })
                        })
                    ]
                }),
                (0, s.jsx)('div', { className: y.divider }),
                (0, s.jsx)(j.Z, {
                    progressBarRef: w,
                    quest: k,
                    isExpanded: I
                }),
                (0, s.jsx)(B.Z, {
                    quest: k,
                    progressBarRef: w,
                    isExpanded: !0
                }),
                (0, N.r)(k) && (0, s.jsx)(S.Z, { style: { marginTop: 8 } }),
                Y && (0, s.jsx)(A.Z, { quest: k }),
                (0, s.jsx)(T.n, {
                    children: (0, s.jsx)(v.y, {
                        quest: k,
                        useReducedMotion: L,
                        isExpanded: I,
                        hasMadeProgress: F
                    })
                })
            ]
        }) : (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: y.questPromoContent,
                    ref: t,
                    children: [
                        (0, s.jsxs)('div', {
                            className: y.details,
                            children: [
                                (0, s.jsx)(h.Z, {
                                    className: y.rewardTile,
                                    learnMoreStyle: 'text',
                                    quest: k,
                                    questContent: g.jn.QUEST_BAR_V2
                                }),
                                (0, s.jsx)(c.Heading, {
                                    className: y.title,
                                    variant: 'heading-md/medium',
                                    children: O.Z.Messages.QUESTS_TITLE.format({ questName: k.config.messages.questName })
                                }),
                                (0, s.jsx)(c.Text, {
                                    className: y.description,
                                    variant: 'text-xs/normal',
                                    children: $
                                })
                            ]
                        }),
                        (0, s.jsx)(c.Button, {
                            className: y.cta,
                            color: c.Button.Colors.BRAND,
                            fullWidth: !0,
                            onClick: K ? D : void 0,
                            size: c.Button.Sizes.SMALL,
                            submitting: Q,
                            children: O.Z.Messages.QUESTS_ACCEPT_QUEST
                        })
                    ]
                }),
                (0, s.jsxs)(i.animated.div, {
                    className: y.heroAssetWrapper,
                    style: {
                        backdropFilter: q.to([
                            0,
                            1
                        ], [
                            5,
                            0
                        ]).to(e => 'blur('.concat(e, 'px)')),
                        filter: q.to([
                            0,
                            1
                        ], [
                            0.8,
                            1
                        ]).to(e => 'brightness('.concat(e, ')'))
                    },
                    children: [
                        (0, s.jsx)(i.animated.div, {
                            className: y.heroAssetDarken,
                            style: {
                                opacity: q.to([
                                    0,
                                    1
                                ], [
                                    1,
                                    0
                                ])
                            }
                        }),
                        (0, s.jsx)(i.animated.div, {
                            className: y.heroAssetTint,
                            style: {
                                backgroundColor: k.config.colors.primary,
                                opacity: q.to([
                                    0,
                                    1
                                ], [
                                    1,
                                    0
                                ])
                            }
                        }),
                        H ? (0, s.jsx)(_.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroAnimated',
                            children: e => (0, s.jsx)(d.Z, {
                                ref: e,
                                autoPlay: !L,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                className: y.heroAsset,
                                controls: !1,
                                children: (0, s.jsx)('source', {
                                    src: X,
                                    type: (0, C.mN)(X)
                                })
                            })
                        }) : (0, s.jsx)(_.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroStatic',
                            children: e => (0, s.jsx)('img', {
                                ref: e,
                                alt: '',
                                className: y.heroAsset,
                                src: X
                            })
                        }),
                        (0, s.jsx)(i.animated.div, {
                            className: y.legibilityGradient,
                            style: {
                                opacity: q.to({
                                    range: [
                                        0,
                                        1
                                    ],
                                    output: [
                                        0,
                                        1
                                    ]
                                })
                            }
                        })
                    ]
                })
            ]
        })
    });
});
t.Z = I;
