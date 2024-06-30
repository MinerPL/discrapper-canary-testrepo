var i, a, s = n(735250), l = n(470079), r = n(120356), o = n.n(r), c = n(442837), d = n(481060), u = n(230711), _ = n(607070), E = n(706454), m = n(63063), I = n(930153), T = n(617136), h = n(272008), N = n(113434), f = n(569984), p = n(497505), C = n(918701), g = n(796111), S = n(566078), A = n(340100), x = n(644646), O = n(667105), R = n(87894), M = n(2660), v = n(46140), L = n(981631), Z = n(689938), P = n(504321), b = n(789002);
let D = (e, t, n) => (0, R.uq)(e) && !n && 'lg' === t ? 'text-lg/medium' : 'lg' === t ? 'text-md/medium' : 'sm' === t ? 'text-sm/medium' : 'text-xs/medium';
function j(e) {
    let {
        containerSize: t,
        onClick: n,
        children: i,
        tabIndex: a
    } = e;
    return 'xs' === t ? (0, s.jsx)(d.Clickable, {
        tabIndex: a,
        className: P.learnMoreLink,
        tag: 'span',
        onClick: n,
        children: (0, s.jsx)(d.Text, {
            variant: 'text-sm/medium',
            color: 'text-link',
            children: i
        })
    }) : (0, s.jsx)(d.Button, {
        tabIndex: a,
        wrapperClassName: P.ctaButtonWrapper,
        color: d.ButtonColors.PRIMARY,
        onClick: n,
        children: i
    });
}
(i = a || (a = {}))[i.UNACCEPTED = 0] = 'UNACCEPTED', i[i.ACCEPTED = 1] = 'ACCEPTED', i[i.IN_PROGRESS = 2] = 'IN_PROGRESS', i[i.COMPLETED = 3] = 'COMPLETED', i[i.CLAIMED = 4] = 'CLAIMED';
function U(e) {
    let {
            quest: t,
            useReducedMotion: n
        } = e, i = (0, O.g2)({
            useReducedMotion: n,
            className: P.refreshIcon
        }), {
            errorHints: a,
            startingConsoleQuest: r,
            startConsoleQuest: o
        } = (0, N.GI)({
            questId: t.id,
            beforeRequest: () => {
                (0, T._3)({
                    questId: t.id,
                    questContent: p.jn.GIFT_INVENTORY_FOR_YOU,
                    questContentCTA: T.jZ.DEFIBRILLATOR
                }), i.startAnimation();
            },
            afterRequest: i.stopAnimation
        }), {
            rawTooltipText: c,
            renderTooltipText: u,
            buttonText: _
        } = l.useMemo(() => {
            let e = S.r.build(t.config).application.name, n = (0, C.zK)(t, v.S7.IN_HOUSE_CONSOLE_QUEST), i = a.join('\n'), l = () => (0, s.jsx)(s.Fragment, {
                    children: a.map((e, t) => (0, s.jsx)(d.Text, {
                        className: t > 0 ? P.ctaTooltipErrorHint : void 0,
                        variant: 'text-xxs/normal',
                        children: e
                    }, t))
                });
            return n ? {
                rawTooltipText: a.length > 0 ? i : Z.Z.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
                renderTooltipText: a.length > 0 ? l : () => Z.Z.Messages.QUESTS_CHECK_FOR_ANY_GAME_LAUNCH_TOOLTIP,
                buttonText: a.length > 0 ? Z.Z.Messages.QUESTS_ANY_GAME_NOT_DETECTED : Z.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
            } : {
                rawTooltipText: a.length > 0 ? i : Z.Z.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({ gameTitle: e }),
                renderTooltipText: a.length > 0 ? l : () => Z.Z.Messages.QUESTS_CHECK_FOR_GAME_LAUNCH_TOOLTIP.format({ gameTitle: e }),
                buttonText: a.length > 0 ? Z.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({ gameTitle: e }) : Z.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
            };
        }, [
            t,
            a
        ]);
    return (0, s.jsx)(d.Tooltip, {
        'aria-label': c,
        text: r ? null : u(),
        tooltipContentClassName: a.length > 0 ? P.ctaTooltipErrorText : P.ctaTooltipText,
        children: e => (0, s.jsx)(d.Button, {
            ...e,
            wrapperClassName: P.ctaButtonWrapper,
            color: a.length > 0 ? d.ButtonColors.RED : d.ButtonColors.PRIMARY,
            disabled: r,
            onClick: () => o(),
            children: (0, s.jsxs)('div', {
                className: P.ctaButtonInner,
                children: [
                    _,
                    i.render()
                ]
            })
        })
    }, c);
}
function y(e) {
    let {
            quest: t,
            progressState: n,
            isCollectibleQuest: i,
            location: a,
            questContentPosition: r,
            inGiftInventory: o,
            hasConsoleTasks: u,
            hasConsoleConnection: E,
            waitingForConsoleConnection: m
        } = e, I = n >= 1, N = n >= 3, p = (0, C.Bz)(t), S = (0, c.e7)([_.Z], () => _.Z.useReducedMotion), A = (0, c.e7)([f.Z], () => f.Z.isEnrolling(t.id)), x = (0, C.zK)(t, v.S7.IN_HOUSE_CONSOLE_QUEST), R = function (e) {
            let {
                    quest: t,
                    progressState: n,
                    isCollectibleQuest: i,
                    location: a,
                    questContentPosition: s,
                    waitingForConsoleConnection: r,
                    isInHouseQuest: o,
                    inGiftInventory: c
                } = e, d = (0, O.hf)({
                    quest: t,
                    location: a,
                    questContentPosition: s
                });
            return l.useMemo(() => {
                switch (n) {
                case 0:
                    return {
                        text: Z.Z.Messages.QUESTS_ACCEPT,
                        tooltipText: Z.Z.Messages.QUESTS_ACCEPT_TOOLTIP,
                        onClick: () => (0, h.AH)(t.id, {
                            questContent: a,
                            questContentCTA: T.jZ.ACCEPT_QUEST,
                            questContentPosition: s
                        })
                    };
                case 1:
                case 2:
                    if (r && c)
                        return {
                            text: Z.Z.Messages.QUESTS_CONNECT_CONSOLE,
                            tooltipText: null,
                            onClick: () => (0, C.gI)({
                                quest: t,
                                showInline: (0, g.i)({ location: v.dr.QUESTS_CARD })
                            }, {
                                content: a,
                                ctaContent: T.jZ.CONNECT_CONSOLE
                            })
                        };
                    return {
                        text: Z.Z.Messages.QUESTS_CLAIM_REWARD,
                        tooltipText: Z.Z.Messages.QUESTS_IN_PROGRESS_TOOLTIP,
                        onClick: null
                    };
                case 3:
                    return {
                        text: Z.Z.Messages.QUESTS_CLAIM_REWARD,
                        tooltipText: o ? Z.Z.Messages.QUESTS_IN_HOUSE_REWARD_TOOLTIP : null,
                        onClick: d
                    };
                case 4:
                    let e = {
                        tooltipText: null,
                        onClick: d
                    };
                    if (o)
                        return {
                            ...e,
                            text: Z.Z.Messages.QUESTS_MOBILE_HOME_VIEW_REWARD
                        };
                    if (i)
                        return {
                            ...e,
                            text: Z.Z.Messages.COLLECTIBLES_USE_NOW
                        };
                    return {
                        ...e,
                        text: Z.Z.Messages.QUESTS_SEE_CODE
                    };
                }
            }, [
                t,
                i,
                o,
                a,
                d,
                n,
                s,
                r,
                c
            ]);
        }({
            progressState: n,
            quest: t,
            isInHouseQuest: x,
            location: a,
            isCollectibleQuest: i,
            waitingForConsoleConnection: m,
            questContentPosition: r,
            inGiftInventory: o
        });
    if (u && I && E && !p && !N && o)
        return (0, s.jsx)(U, {
            quest: t,
            useReducedMotion: S
        });
    let M = x && o && N, L = M ? P.inHouseButton : d.ButtonColors.BRAND, D = N && !S ? d.ShinyButton : d.Button;
    return (0, s.jsx)(d.Tooltip, {
        text: R.tooltipText,
        tooltipContentClassName: P.ctaTooltipText,
        children: e => {
            var t;
            return (0, s.jsx)(D, {
                ...e,
                wrapperClassName: P.ctaButtonWrapper,
                color: L,
                disabled: null == R.onClick,
                submitting: A,
                onClick: null !== (t = R.onClick) && void 0 !== t ? t : () => {
                },
                children: (0, s.jsxs)('div', {
                    className: P.ctaButtonInner,
                    children: [
                        M && (0, s.jsx)('img', {
                            src: b,
                            alt: '',
                            className: P.inHouseIcon
                        }),
                        R.text
                    ]
                })
            });
        }
    }, R.tooltipText);
}
t.Z = e => {
    let {
            quest: t,
            location: n,
            size: i,
            isFocused: a,
            isQuestExpired: l,
            isExpanded: r,
            isAnimating: _,
            contentPosition: h
        } = e, f = function (e) {
            var t, n, i;
            let a = (null === (t = e.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, s = (null === (n = e.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, l = (null === (i = e.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, r = (0, N.Rf)(e).percentComplete > 0;
            if (l)
                return 4;
            if (s)
                return 3;
            if (r)
                return 2;
            else if (a)
                return 1;
            else
                return 0;
        }(t), g = f >= 1, O = f >= 3, b = f >= 4, U = (0, C.Xv)(t.config), B = (0, R.uq)(n), k = n === p.jn.QUESTS_EMBED, G = r || _, {xboxAndPlaystationAccounts: F} = (0, N.z6)(), w = (0, C.$J)(t), V = g && !b && B, H = F.length > 0, Y = g && w && !H, W = (0, N.t5)(t, v.dr.QUESTS_CARD, n, Y), z = (0, c.e7)([E.default], () => E.default.locale), K = B && U, Q = l && !O, q = (0, s.jsx)(x.Z, {
            autoplay: a,
            className: o()(P.gridImg, {
                [P.questRewardGiftInventory]: B && 'lg' === i,
                [P.questRewardEmbed]: k && 'lg' === i,
                [P.questRewardEmbedSm]: 'sm' === i,
                [P.questRewardEmbedXs]: 'xs' === i
            }),
            learnMoreStyle: B ? null : 'text',
            quest: t,
            questContent: n,
            questContentPosition: h
        });
    return (0, s.jsxs)('div', {
        className: o()(P.outerContainer, {
            [P.outerContainerSm]: 'sm' === i,
            [P.outerContainerXs]: 'xs' === i,
            [P.outerContainerNoProgress]: !V
        }),
        style: { visibility: G ? 'visible' : 'hidden' },
        'aria-hidden': !G,
        children: [
            (0, s.jsx)(d.Tooltip, {
                text: Q ? Z.Z.Messages.QUESTS_REWARD_TILE_EXPIRED_QUEST : null,
                tooltipContentClassName: P.rewardTileExpirationTooltip,
                shouldShow: Q,
                children: e => (0, s.jsxs)('div', {
                    className: P.rewardTileWrapper,
                    ...e,
                    children: [
                        l && (0, s.jsx)('div', {
                            className: P.rewardTileExpired,
                            children: (0, s.jsx)(d.CircleExclamationPointIcon, { color: d.tokens.colors.WHITE })
                        }),
                        K ? (0, s.jsx)(M.Z, {
                            questConfig: t.config,
                            fallback: q,
                            isFocused: a
                        }) : q
                    ]
                })
            }),
            (0, s.jsxs)('div', {
                className: o()(P.gridText, P.taskDetails),
                children: [
                    (0, s.jsx)(d.Text, {
                        variant: D(n, i, g),
                        className: P.taskInstructions,
                        children: l ? Z.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_HEADING.format({ questName: t.config.messages.questName }) : W
                    }),
                    (0, s.jsx)(d.Text, {
                        variant: 'lg' === i ? 'text-sm/medium' : 'text-xs/medium',
                        color: 'text-muted',
                        children: function (e) {
                            var t, n, i, a, s, l, r;
                            let {
                                    quest: o,
                                    location: c,
                                    locale: d,
                                    isQuestExpired: _,
                                    hasConsoleConnection: E
                                } = e, T = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, h = (null === (n = o.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, f = h && (null === (i = o.userStatus) || void 0 === i ? void 0 : i.claimedAt) != null, p = (0, C.zK)(o, v.S7.IN_HOUSE_CONSOLE_QUEST), g = (0, C.zK)(o, v.S7.MOBILE_CONSOLE_QUEST), A = (0, R.uq)(c), x = (0, N.B6)(null === (a = o.userStatus) || void 0 === a ? void 0 : a.completedAt, {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                }), O = (0, C.oo)({ quest: o }), M = S.r.build(o.config).defaultReward.messages.nameWithArticle, P = (0, C.Kr)(o.config);
                            if (h && p && A)
                                return Z.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: x });
                            if (f) {
                                let e = O ? (0, C.o9)({
                                        quest: o,
                                        idx: null === (s = o.userStatus) || void 0 === s ? void 0 : s.claimedTier
                                    }) : null, t = null !== (l = null == e ? void 0 : e.messages.nameWithArticle) && void 0 !== l ? l : null;
                                return null != t ? Z.Z.Messages.QUEST_REWARD_COMPLETED_CLAIMED.format({
                                    reward: t,
                                    date: x
                                }) : Z.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                    reward: M,
                                    date: x
                                });
                            }
                            if (h)
                                return O ? Z.Z.Messages.QUEST_REWARD_COMPLETED_UNCLAIMED.format({ date: x }) : Z.Z.Messages.QUEST_REWARD_COMPLETED.format({
                                    reward: M,
                                    date: x
                                });
                            let b = O ? (0, C.o9)({
                                quest: o,
                                idx: 0
                            }) : null;
                            return _ ? Z.Z.Messages.QUESTS_EXPIRED_QUEST_CARD_SUBHEADING.format({ reward: null !== (r = null == b ? void 0 : b.messages.nameWithArticle) && void 0 !== r ? r : M }) : A && !T && !E && g ? null != P ? Z.Z.Messages.QUEST_REWARD_MULTIPLATFORM_WITH_EXPIRING_COLLECTIBLE_REWARD.format({
                                gameTitle: o.config.messages.gameTitle,
                                reward: M,
                                streamingDurationRequirement: (0, C.il)(o).targetMinutes,
                                onClick: () => {
                                    u.Z.open(L.oAB.CONNECTIONS);
                                },
                                duration: P
                            }) : Z.Z.Messages.QUEST_REWARD_MULTIPLATFORM.format({
                                gameTitle: o.config.messages.gameTitle,
                                reward: M,
                                streamingDurationRequirement: (0, C.il)(o).targetMinutes,
                                onClick: () => {
                                    u.Z.open(L.oAB.CONNECTIONS);
                                }
                            }) : null != b && null != b.approximateCount ? Z.Z.Messages.QUEST_REWARD_TIERED.format({
                                maxReward: b.messages.nameWithArticle,
                                maxRewardCount: (0, I.Bs)(b.approximateCount, d),
                                helpCenterLink: m.Z.getArticleURL(L.BhN.QUESTS_LEARN_MORE)
                            }) : null != P ? Z.Z.Messages.QUEST_REWARD_WITH_EXPIRATION.format({
                                reward: M,
                                duration: P
                            }) : Z.Z.Messages.QUEST_REWARD.format({ reward: M });
                        }({
                            quest: t,
                            location: n,
                            locale: z,
                            isQuestExpired: l,
                            hasConsoleConnection: H
                        })
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: o()(P.ctaButtonContainer, P.gridCtaButtons),
                children: [
                    !B && (0, s.jsx)(j, {
                        containerSize: i,
                        onClick: () => {
                            u.Z.open(L.oAB.INVENTORY), (0, T._3)({
                                questId: t.id,
                                questContent: n,
                                questContentPosition: h,
                                questContentCTA: T.jZ.LEARN_MORE
                            });
                        },
                        children: Z.Z.Messages.QUESTS_LEARN_MORE_V2
                    }),
                    l && !O ? null : (0, s.jsx)(y, {
                        quest: t,
                        progressState: f,
                        isCollectibleQuest: U,
                        location: n,
                        inGiftInventory: B,
                        hasConsoleTasks: w,
                        hasConsoleConnection: H,
                        waitingForConsoleConnection: Y
                    })
                ]
            }),
            V && (0, s.jsx)(A.Z, {
                className: P.gridProgressBar,
                color: O ? d.tokens.colors.TEXT_POSITIVE : d.tokens.colors.BG_BRAND,
                quest: t,
                isInventory: B
            })
        ]
    });
};
