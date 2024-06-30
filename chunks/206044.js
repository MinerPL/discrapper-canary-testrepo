n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(920906), o = n(722770), c = n(442837), d = n(846519), u = n(481060), _ = n(393238), E = n(607070), m = n(210887), I = n(810090), T = n(572004), h = n(617136), N = n(113434), f = n(497505), p = n(918701), C = n(566078), g = n(685613), S = n(611855), A = n(644646), x = n(670638), O = n(87894), R = n(46140), M = n(689938), v = n(491829);
let L = (0, r.animated)(u.ChevronSmallDownIcon), Z = (0, r.animated)(I.Z), P = e => {
        let {
                quest: t,
                location: n,
                questContentPosition: s,
                ...l
            } = e, [r, o] = a.useState(!1), c = a.useRef(new d.V7());
        a.useEffect(() => {
            let e = c.current;
            return function () {
                e.stop();
            };
        }, []);
        let _ = () => {
            (0, h._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: h.jZ.COPY_QUEST_URL,
                questContentPosition: s
            }), (0, T.JG)((0, p.Rs)(t.id)), o(!0), c.current.start(1000, () => o(!1));
        };
        return (0, i.jsx)(u.Tooltip, {
            forceOpen: r,
            shouldShow: r,
            color: u.Tooltip.Colors.GREEN,
            text: M.Z.Messages.COPY_SUCCESS_1,
            children: () => (0, i.jsx)(u.Button, {
                ...l,
                className: v.shareButton,
                color: u.Button.Colors.PRIMARY,
                size: u.Button.Sizes.SMALL,
                onClick: _,
                children: M.Z.Messages.QUESTS_SHARE_QUEST
            })
        });
    };
t.Z = e => {
    var t;
    let {
            isFocused: n,
            isQuestExpired: s,
            quest: d,
            location: I,
            size: T,
            expansionSpring: b,
            isAnimating: D,
            isExpanded: j,
            isInConcurrentQuestExperiment: U,
            contentPosition: y,
            toggleExpanded: B
        } = e, {
            ref: k,
            height: G
        } = (0, _.Z)(), {
            ref: F,
            width: w,
            scrollWidth: V
        } = (0, _.Z)(), H = (0, c.e7)([m.Z], () => m.Z.getState().theme), Y = (0, c.e7)([E.Z], () => E.Z.useReducedMotion), W = a.useMemo(() => (0, p.nP)(d.config.assets.hero), [d]), z = a.useRef(null), K = (0, O.uq)(I), Q = I === f.jn.QUESTS_EMBED, q = (0, N.t5)(d, R.dr.QUESTS_CARD, I), X = (null === (t = d.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, J = (0, N.B6)(d.config.expiresAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }), $ = (0, N.B6)(C.r.build(d.config).rewardsExpireAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }), ee = e => {
            e.stopPropagation(), e.currentTarget.blur(), B(), (0, h._3)({
                questId: d.id,
                questContent: I,
                questContentCTA: j ? h.jZ.COLLAPSE : h.jZ.EXPAND,
                questContentPosition: y
            });
        };
    a.useEffect(() => {
        W && null != z.current && (n ? z.current.play() : !n && (z.current.pause(), z.current.currentTime = 0));
    }, [
        n,
        W
    ]);
    let et = (0, p.j8)(d);
    return (0, i.jsxs)('div', {
        className: l()(v.outerContainer, {
            [v.outerContainerGiftInventory]: K,
            [v.outerContainerEmbed]: Q,
            [v.outerContainerXs]: 'xs' === T
        }),
        'aria-label': M.Z.Messages.EXPAND,
        style: { height: K ? G : void 0 },
        children: [
            (0, i.jsx)(Z, {
                style: {
                    opacity: b.to({
                        range: [
                            0,
                            1
                        ],
                        output: [
                            0.25,
                            1
                        ]
                    })
                },
                autoPlay: !1,
                loop: !1,
                muted: !0,
                playsInline: !0,
                className: v.questSplash,
                controls: !1,
                poster: et,
                ref: z,
                children: !Y && W && (0, i.jsx)('source', {
                    src: et,
                    type: (0, p.mN)(et)
                })
            }),
            (0, i.jsxs)('div', {
                className: v.header,
                'aria-expanded': j,
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: l()(v.headerContent, { [v.headerContentEmbed]: Q }),
                        style: {
                            y: K ? b.to({
                                range: [
                                    0,
                                    1
                                ],
                                output: [
                                    O.DJ,
                                    0
                                ]
                            }) : void 0
                        },
                        children: [
                            K && (0, i.jsx)(r.animated.div, {
                                className: v.headerCollapsedContent,
                                style: {
                                    opacity: b.to({
                                        range: [
                                            0,
                                            1
                                        ],
                                        output: [
                                            1,
                                            0
                                        ]
                                    }),
                                    visibility: D || !j ? 'visible' : 'hidden'
                                },
                                'aria-hidden': !D && j,
                                children: (0, i.jsxs)(u.ClickableContainer, {
                                    'aria-label': M.Z.Messages.EXPAND,
                                    onClick: ee,
                                    className: v.headerCollapsedClickableContainer,
                                    children: [
                                        (0, i.jsx)('div', {
                                            className: v.headerCollapsedContentRewardWrapper,
                                            children: (0, i.jsx)(A.Z, {
                                                quest: d,
                                                questContent: I,
                                                className: v.headerCollapsedRewardTile
                                            })
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: v.headerCollapsedContentCopyWrapper,
                                            children: [
                                                (0, i.jsxs)('div', {
                                                    className: v.headerCollapsedContentCopyLogos,
                                                    children: [
                                                        (0, i.jsx)(g.Z, {
                                                            className: v.partnerBranding,
                                                            gameTileSize: g.f.MEDIUM,
                                                            quest: d,
                                                            theme: H
                                                        }),
                                                        (0, i.jsx)(S.Z, { color: 'always-white' })
                                                    ]
                                                }),
                                                (0, i.jsx)(u.Text, {
                                                    variant: 'text-xs/medium',
                                                    children: q
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsxs)(r.animated.div, {
                                ref: e => {
                                    k.current = e;
                                },
                                className: l()(v.headerExpandedContent, {
                                    [v.outerContainerGiftInventory]: K,
                                    [v.outerContainerEmbed]: Q
                                }),
                                style: {
                                    opacity: b.to({
                                        range: [
                                            0,
                                            1
                                        ],
                                        output: [
                                            0,
                                            1
                                        ]
                                    }),
                                    visibility: D || j ? 'visible' : 'hidden'
                                },
                                'aria-hidden': !D && !j,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: v.headerExpandedWrapper,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: v.iconLogotypeContainer,
                                                children: [
                                                    (0, i.jsx)(g.Z, {
                                                        className: v.partnerBranding,
                                                        gameTileSize: g.f.MEDIUM,
                                                        quest: d,
                                                        theme: H
                                                    }),
                                                    Q ? null : (0, i.jsx)(S.Z, { color: 'always-white' })
                                                ]
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: v.questInfo,
                                                children: [
                                                    (0, i.jsx)(u.Tooltip, {
                                                        text: d.config.messages.questName,
                                                        shouldShow: null != w && null != V && w < V,
                                                        children: e => (0, i.jsx)(u.Heading, {
                                                            ref: F,
                                                            variant: 'lg' === T ? 'heading-xxl/bold' : 'sm' === T ? 'heading-xl/bold' : 'heading-lg/bold',
                                                            className: v.heading,
                                                            ...e,
                                                            children: M.Z.Messages.QUEST.format({ questName: d.config.messages.questName })
                                                        })
                                                    }),
                                                    (0, i.jsx)(u.Text, {
                                                        variant: 'text-xs/normal',
                                                        children: X ? M.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: $ }) : s ? M.Z.Messages.QUESTS_EXPIRED_ON.format({ expirationDate: J }) : M.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: J })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    !s && K && (0, i.jsx)(P, {
                                        quest: d,
                                        location: I,
                                        questContentPosition: y
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(r.animated.div, {
                        className: v.iconsContainer,
                        style: {
                            top: K ? b.to({
                                range: [
                                    0,
                                    1
                                ],
                                output: [
                                    O.DJ / 2 - O.Z$ / 2,
                                    O.jc
                                ]
                            }) : O.jc
                        },
                        children: [
                            (0, i.jsx)(x.r, {
                                questContent: I,
                                quest: d,
                                questContentPosition: y,
                                shouldShowDisclosure: !0,
                                hideLearnMore: K,
                                showShareLink: !s && Q,
                                children: e => (0, i.jsx)(r.animated.div, {
                                    style: {
                                        opacity: b,
                                        visibility: D || j ? 'visible' : 'hidden'
                                    },
                                    'aria-hidden': !D && !j,
                                    children: (0, i.jsx)(u.Clickable, {
                                        ...e,
                                        className: v.iconWrapper,
                                        'aria-label': M.Z.Messages.ACTIONS,
                                        children: (0, i.jsx)(u.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: o.Z.WHITE
                                        })
                                    })
                                })
                            }),
                            U && !(0, O.W_)(I) && (0, i.jsx)(u.Clickable, {
                                onClick: ee,
                                className: v.iconWrapper,
                                'aria-label': j ? M.Z.Messages.COLLAPSE : M.Z.Messages.EXPAND,
                                children: (0, i.jsx)(L, {
                                    style: {
                                        rotate: b.to({
                                            range: [
                                                0,
                                                1
                                            ],
                                            output: [
                                                0,
                                                180
                                            ]
                                        })
                                    },
                                    color: o.Z.WHITE
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
