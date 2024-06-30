var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), i = n(442837), l = n(950104), c = n(780384), d = n(481060), u = n(810090), p = n(358085), x = n(617136), m = n(272008), g = n(113434), C = n(569984), f = n(497505), h = n(918701), _ = n(865364), E = n(566078), S = n(340100), T = n(611855), N = n(644646), v = n(78826), j = n(670638), A = n(667105), B = n(46140), b = n(689938), R = n(51283);
let O = o.forwardRef(function (e, t) {
    var n, r;
    let {
            className: _,
            isExpanded: O,
            isExpansionAnimationComplete: I,
            onCtxMenuOpen: M,
            onCtxMenuClose: q,
            onCtxMenuSelect: U,
            quest: Z,
            useReducedMotion: P
        } = e, k = (0, i.e7)([C.Z], () => C.Z.isEnrolling(Z.id), [Z]), L = (0, g.B6)(Z.config.expiresAt), w = E.r.build(Z.config), Q = (0, g.B6)(w.rewardsExpireAt), W = o.useMemo(() => (0, h.nP)(Z.config.assets.questBarHero), [Z]), H = (0, A.tP)(w.application.id), D = o.useCallback(() => {
            (0, m.AH)(Z.id, {
                questContent: f.jn.QUEST_BAR,
                questContentCTA: x.jZ.ACCEPT_QUEST
            });
        }, [Z]), V = (0, A.hf)({
            quest: Z,
            location: f.jn.QUEST_BAR
        }), z = o.useCallback(() => {
            (0, h.FE)(Z, {
                content: f.jn.QUEST_BAR,
                ctaContent: x.jZ.OPEN_GAME_LINK
            });
        }, [Z]), G = w.features.has(B.S7.POST_ENROLLMENT_CTA), F = (0, g.Rf)(Z), K = F.progressSeconds > 0, Y = (null === (n = Z.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null, X = (null === (r = Z.userStatus) || void 0 === r ? void 0 : r.completedAt) != null, $ = o.useMemo(() => (0, h.Xv)(Z.config), [Z.config]), J = O && I, ee = (0, h.ph)(Z), et = (0, h.pG)({
            quest: Z,
            taskDetails: F
        }), en = (0, p.isWeb)(), es = o.useMemo(() => {
            let e = (0, c.Qg)(Z.config.colors.primary, {
                base: '#ffffff',
                contrastRatio: c.S3.Text
            });
            return {
                '--custom-cta-color': e,
                '--custom-cta-color-hover': (0, l.r5)(e, 0.3),
                '--custom-cta-color-active': (0, l.r5)(e, 0.35)
            };
        }, [Z.config.colors.primary]);
    return (0, s.jsx)('div', {
        style: { backgroundColor: Z.config.colors.secondary },
        'aria-hidden': !J,
        className: a()(_, R.contentExpanded, { [R.contentInteractable]: J }),
        children: Y ? (0, s.jsxs)('div', {
            className: R.questAcceptedContent,
            ref: t,
            children: [
                (0, s.jsxs)('div', {
                    className: R.utils,
                    children: [
                        (0, s.jsxs)('div', {
                            className: R.questAcceptedContentHeading,
                            children: [
                                (0, s.jsx)(N.Z, {
                                    className: R.questProgressRewardTile,
                                    learnMoreStyle: 'icon',
                                    quest: Z,
                                    questContent: f.jn.QUEST_BAR
                                }),
                                (0, s.jsxs)('div', {
                                    children: [
                                        (0, s.jsx)(d.Heading, {
                                            color: 'always-white',
                                            variant: 'heading-sm/semibold',
                                            children: (0, h.AV)({
                                                quest: Z,
                                                taskDetails: F
                                            })
                                        }),
                                        (0, s.jsx)(d.Text, {
                                            className: R.questAcceptedContentCopySubheading,
                                            color: 'always-white',
                                            variant: 'text-xxs/normal',
                                            children: X ? b.Z.Messages.QUESTS_CLAIM_BY_DATE.format({ expirationDate: Q }) : b.Z.Messages.QUESTS_AVAILABLE_UNTIL_DATE.format({ expirationDate: L })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(j.r, {
                            onOpen: M,
                            onClose: q,
                            onSelect: U,
                            questContent: f.jn.QUEST_BAR,
                            quest: Z,
                            shouldShowDisclosure: !1,
                            showShareLink: !0,
                            children: e => (0, s.jsx)(d.Clickable, {
                                ...e,
                                className: R.submenuWrapper,
                                'aria-label': b.Z.Messages.ACTIONS,
                                children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: R.submenuIcon
                                })
                            })
                        })
                    ]
                }),
                X ? (0, s.jsx)(d.Button, {
                    className: a()(R.cta, R.ctaClaimReward),
                    style: $ ? es : void 0,
                    color: d.Button.Colors.CUSTOM,
                    fullWidth: !0,
                    onClick: V,
                    size: d.Button.Sizes.NONE,
                    children: b.Z.Messages.QUESTS_CLAIM_REWARD
                }) : (0, s.jsx)(d.Text, {
                    className: R.description,
                    color: 'always-white',
                    variant: 'text-xs/normal',
                    children: et
                }),
                (0, s.jsx)(S.Z, { quest: Z }),
                !en && !K && !H && G && (0, s.jsx)(y, { onClick: J ? z : void 0 })
            ]
        }) : (0, s.jsxs)('div', {
            children: [
                (0, s.jsxs)('div', {
                    className: R.questPromoContent,
                    ref: t,
                    children: [
                        (0, s.jsxs)('div', {
                            className: R.utils,
                            children: [
                                (0, s.jsx)(T.Z, { color: 'always-white' }),
                                (0, s.jsx)(j.r, {
                                    onOpen: M,
                                    onClose: q,
                                    onSelect: U,
                                    questContent: f.jn.QUEST_BAR,
                                    quest: Z,
                                    shouldShowDisclosure: !0,
                                    showShareLink: !0,
                                    children: e => (0, s.jsx)(d.Clickable, {
                                        ...e,
                                        className: R.submenuWrapper,
                                        'aria-label': b.Z.Messages.ACTIONS,
                                        children: (0, s.jsx)(d.MoreHorizontalIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: R.submenuIcon
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: R.details,
                            children: [
                                (0, s.jsx)(N.Z, {
                                    className: R.rewardTile,
                                    learnMoreStyle: 'text',
                                    quest: Z,
                                    questContent: f.jn.QUEST_BAR
                                }),
                                (0, s.jsx)(d.Heading, {
                                    className: R.title,
                                    color: 'always-white',
                                    variant: 'heading-md/medium',
                                    children: b.Z.Messages.QUESTS_TITLE.format({ questName: Z.config.messages.questName })
                                }),
                                (0, s.jsx)(d.Text, {
                                    className: R.description,
                                    color: 'always-white',
                                    variant: 'text-sm/normal',
                                    children: et
                                })
                            ]
                        }),
                        (0, s.jsx)(d.Button, {
                            className: R.cta,
                            style: '1232852290197655573' !== Z.id ? es : void 0,
                            color: d.Button.Colors.CUSTOM,
                            fullWidth: !0,
                            onClick: J ? D : void 0,
                            size: d.Button.Sizes.NONE,
                            submitting: k,
                            children: b.Z.Messages.QUESTS_ACCEPT_QUEST
                        })
                    ]
                }),
                (0, s.jsx)('div', {
                    className: R.heroAssetWrapper,
                    style: { color: Z.config.colors.secondary },
                    children: W ? (0, s.jsx)(v.Fl, {
                        id: 'QuestBarContentExpanded_heroAnimated',
                        children: e => (0, s.jsx)(u.Z, {
                            ref: e,
                            autoPlay: !P,
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            className: R.heroAsset,
                            controls: !1,
                            children: (0, s.jsx)('source', {
                                src: ee,
                                type: (0, h.mN)(ee)
                            })
                        })
                    }) : (0, s.jsx)(v.Fl, {
                        id: 'QuestBarContentExpanded_heroStatic',
                        children: e => (0, s.jsx)('img', {
                            ref: e,
                            alt: '',
                            className: R.heroAsset,
                            src: ee
                        })
                    })
                })
            ]
        })
    });
});
function y(e) {
    let {
        style: t,
        onClick: n
    } = e;
    return (0, _.O)({
        location: B.dr.QUESTS_BAR,
        autoTrackExposure: !0
    }) ? (0, s.jsx)(d.Button, {
        className: R.cta,
        style: t,
        color: d.Button.Colors.CUSTOM,
        fullWidth: !0,
        onClick: n,
        size: d.Button.Sizes.NONE,
        children: b.Z.Messages.QUESTS_GET_THIS_GAME
    }) : null;
}
t.Z = O;
