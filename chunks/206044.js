n(47120);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    o = n.n(i),
    r = n(212433),
    l = n(722770),
    u = n(442837),
    d = n(846519),
    c = n(481060),
    m = n(393238),
    E = n(607070),
    x = n(70097),
    C = n(210887),
    h = n(572004),
    _ = n(617136),
    g = n(113434),
    T = n(497505),
    p = n(918701),
    S = n(475595),
    j = n(566078),
    N = n(685613),
    f = n(611855),
    v = n(644646),
    M = n(670638),
    I = n(87894),
    q = n(46140),
    R = n(689938),
    A = n(128175);
let Z = (0, r.animated)(c.ChevronSmallDownIcon),
    O = (0, r.animated)(x.Z),
    b = (e) => {
        let { quest: t, location: n, questContentPosition: i, ...o } = e,
            [r, l] = a.useState(!1),
            u = a.useRef(new d.V7());
        if (
            (a.useEffect(() => {
                let e = u.current;
                return function () {
                    e.stop();
                };
            }, []),
            (0, p.zK)(t, q.S7.FRACTIONS_QUEST))
        )
            return null;
        let m = () => {
            (0, _._3)({
                questId: t.id,
                questContent: n,
                questContentCTA: _.jZ.COPY_QUEST_URL,
                questContentPosition: i
            }),
                (0, h.JG)((0, p.Rs)(t.id)),
                l(!0),
                u.current.start(1000, () => l(!1));
        };
        return (0, s.jsx)(c.Tooltip, {
            forceOpen: r,
            shouldShow: r,
            color: c.Tooltip.Colors.GREEN,
            text: R.Z.Messages.COPY_SUCCESS_1,
            children: () =>
                (0, s.jsx)(c.Button, {
                    ...o,
                    className: A.shareButton,
                    color: c.Button.Colors.PRIMARY,
                    size: c.Button.Sizes.SMALL,
                    onClick: m,
                    children: R.Z.Messages.QUESTS_SHARE_QUEST
                })
        });
    };
t.Z = (e) => {
    var t, n;
    let { isFocused: i, isQuestExpired: d, quest: x, location: h, size: p, expansionSpring: D, isAnimating: U, isExpanded: Q, isInConcurrentQuestExperiment: L, contentPosition: y, toggleExpanded: B } = e,
        { ref: P, height: w } = (0, m.Z)(),
        { ref: k, width: H, scrollWidth: W } = (0, m.Z)(),
        G = (0, u.e7)([C.Z], () => C.Z.getState().theme),
        F = (0, u.e7)([E.Z], () => E.Z.useReducedMotion),
        X = a.useMemo(() => (0, S.fh)(x, S.Bd.HERO), [x]),
        Y = a.useRef(null),
        z = (0, I.uq)(h),
        K = h === T.jn.QUESTS_EMBED,
        V = (0, g.t5)(x, q.dr.QUESTS_CARD, h),
        J = (null === (t = x.userStatus) || void 0 === t ? void 0 : t.completedAt) != null,
        $ = (0, g.B6)(x.config.expiresAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        ee = (0, g.B6)(j.r.build(x.config).rewardsExpireAt, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }),
        et = (e) => {
            e.stopPropagation(),
                e.currentTarget.blur(),
                B(),
                (0, _._3)({
                    questId: x.id,
                    questContent: h,
                    questContentCTA: Q ? _.jZ.COLLAPSE : _.jZ.EXPAND,
                    questContentPosition: y
                });
        };
    return (
        a.useEffect(() => {
            X.isAnimated && null != Y.current && (i ? Y.current.play() : !i && (Y.current.pause(), (Y.current.currentTime = 0)));
        }, [i, X]),
        (0, s.jsxs)('div', {
            className: o()(A.outerContainer, {
                [A.outerContainerGiftInventory]: z,
                [A.outerContainerEmbed]: K,
                [A.outerContainerXs]: 'xs' === p
            }),
            'aria-label': R.Z.Messages.EXPAND,
            style: { height: z ? w : void 0 },
            children: [
                (0, s.jsx)(O, {
                    style: {
                        opacity: D.to({
                            range: [0, 1],
                            output: [0.25, 1]
                        })
                    },
                    autoPlay: !1,
                    loop: !1,
                    muted: !0,
                    playsInline: !0,
                    className: A.questSplash,
                    controls: !1,
                    poster: X.url,
                    ref: Y,
                    children:
                        !F &&
                        X.isAnimated &&
                        (0, s.jsx)('source', {
                            src: X.url,
                            type: null !== (n = X.mimetype) && void 0 !== n ? n : void 0
                        })
                }),
                (0, s.jsxs)('div', {
                    className: A.header,
                    'aria-expanded': Q,
                    children: [
                        (0, s.jsxs)(r.animated.div, {
                            className: o()(A.headerContent, { [A.headerContentEmbed]: K }),
                            style: {
                                y: z
                                    ? D.to({
                                          range: [0, 1],
                                          output: [I.DJ, 0]
                                      })
                                    : void 0
                            },
                            children: [
                                z &&
                                    (0, s.jsx)(r.animated.div, {
                                        className: A.headerCollapsedContent,
                                        style: {
                                            opacity: D.to({
                                                range: [0, 1],
                                                output: [1, 0]
                                            }),
                                            visibility: U || !Q ? 'inherit' : 'hidden'
                                        },
                                        'aria-hidden': !U && Q,
                                        children: (0, s.jsxs)(c.ClickableContainer, {
                                            'aria-label': R.Z.Messages.EXPAND,
                                            onClick: et,
                                            className: A.headerCollapsedClickableContainer,
                                            children: [
                                                (0, s.jsx)('div', {
                                                    className: A.headerCollapsedContentRewardWrapper,
                                                    children: (0, s.jsx)(v.Z, {
                                                        quest: x,
                                                        questContent: h,
                                                        className: A.headerCollapsedRewardTile,
                                                        location: q.dr.QUESTS_CARD
                                                    })
                                                }),
                                                (0, s.jsxs)('div', {
                                                    className: A.headerCollapsedContentCopyWrapper,
                                                    children: [
                                                        (0, s.jsxs)('div', {
                                                            className: A.headerCollapsedContentCopyLogos,
                                                            children: [
                                                                (0, s.jsx)(N.Z, {
                                                                    className: A.partnerBranding,
                                                                    gameTileSize: N.f.MEDIUM,
                                                                    quest: x,
                                                                    theme: G
                                                                }),
                                                                (0, s.jsx)(f.Z, { color: 'always-white' })
                                                            ]
                                                        }),
                                                        (0, s.jsx)(c.Text, {
                                                            variant: 'text-xs/medium',
                                                            children: V
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                (0, s.jsxs)(r.animated.div, {
                                    ref: (e) => {
                                        P.current = e;
                                    },
                                    className: o()(A.headerExpandedContent, {
                                        [A.outerContainerGiftInventory]: z,
                                        [A.outerContainerEmbed]: K
                                    }),
                                    style: {
                                        opacity: D.to({
                                            range: [0, 1],
                                            output: [0, 1]
                                        }),
                                        visibility: U || Q ? 'inherit' : 'hidden'
                                    },
                                    'aria-hidden': !U && !Q,
                                    children: [
                                        (0, s.jsxs)('div', {
                                            className: A.headerExpandedWrapper,
                                            children: [
                                                (0, s.jsxs)('div', {
                                                    className: A.iconLogotypeContainer,
                                                    children: [
                                                        (0, s.jsx)(N.Z, {
                                                            className: A.partnerBranding,
                                                            gameTileSize: N.f.MEDIUM,
                                                            quest: x,
                                                            theme: G
                                                        }),
                                                        K ? null : (0, s.jsx)(f.Z, { color: 'always-white' })
                                                    ]
                                                }),
                                                (0, s.jsxs)('div', {
                                                    className: A.questInfo,
                                                    children: [
                                                        (0, s.jsx)(c.Tooltip, {
                                                            text: x.config.messages.questName,
                                                            shouldShow: null != H && null != W && H < W,
                                                            children: (e) =>
                                                                (0, s.jsx)(c.Heading, {
                                                                    ref: k,
                                                                    variant: 'lg' === p ? 'heading-xxl/bold' : 'sm' === p ? 'heading-xl/bold' : 'heading-lg/bold',
                                                                    className: A.heading,
                                                                    ...e,
                                                                    children: R.Z.Messages.QUEST.format({ questName: x.config.messages.questName })
                                                                })
                                                        }),
                                                        (0, s.jsx)(c.Text, {
                                                            variant: 'text-xs/normal',
                                                            children: J ? R.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: ee }) : d ? R.Z.Messages.QUESTS_EXPIRED_ON.format({ expirationDate: $ }) : R.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: $ })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        !d &&
                                            z &&
                                            (0, s.jsx)(b, {
                                                quest: x,
                                                location: h,
                                                questContentPosition: y
                                            })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)(r.animated.div, {
                            className: A.iconsContainer,
                            style: {
                                top: z
                                    ? D.to({
                                          range: [0, 1],
                                          output: [I.DJ / 2 - I.Z$ / 2, I.jc]
                                      })
                                    : I.jc
                            },
                            children: [
                                (0, s.jsx)(M.r, {
                                    questContent: h,
                                    quest: x,
                                    questContentPosition: y,
                                    shouldShowDisclosure: !0,
                                    hideLearnMore: z,
                                    showShareLink: !d && K,
                                    children: (e) =>
                                        (0, s.jsx)(r.animated.div, {
                                            style: {
                                                opacity: D,
                                                visibility: U || Q ? 'inherit' : 'hidden'
                                            },
                                            'aria-hidden': !U && !Q,
                                            children: (0, s.jsx)(c.Clickable, {
                                                ...e,
                                                className: A.iconWrapper,
                                                'aria-label': R.Z.Messages.ACTIONS,
                                                children: (0, s.jsx)(c.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: l.Z.WHITE
                                                })
                                            })
                                        })
                                }),
                                L &&
                                    !(0, I.W_)(h) &&
                                    (0, s.jsx)(c.Clickable, {
                                        onClick: et,
                                        className: A.iconWrapper,
                                        'aria-label': Q ? R.Z.Messages.COLLAPSE : R.Z.Messages.EXPAND,
                                        children: (0, s.jsx)(Z, {
                                            style: {
                                                rotate: D.to({
                                                    range: [0, 1],
                                                    output: [0, 180]
                                                })
                                            },
                                            color: l.Z.WHITE
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
