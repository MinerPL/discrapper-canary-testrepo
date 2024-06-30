n.r(t), n.d(t, {
    default: function () {
        return y;
    }
}), n(47120);
var s = n(735250), o = n(470079), a = n(120356), r = n.n(a), l = n(887024), i = n(442837), d = n(692547), u = n(780384), c = n(481060), p = n(484614), m = n(410030), C = n(607070), E = n(530618), _ = n(454585), S = n(246946), T = n(572004), g = n(302221), x = n(617136), h = n(272008), R = n(569984), f = n(497505), I = n(918701), b = n(566078), v = n(617889), j = n(644646), N = n(78826), M = n(46140), O = n(675654), A = n(689938), D = n(391454);
function w(e) {
    var t;
    let {
            quest: n,
            rewardCode: o,
            hasTieredRewardCodes: a
        } = e, l = (0, u.wj)((0, m.ZP)()), i = {
            border: '1px solid '.concat(n.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '.concat((0, g.aD)(n.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ').concat((0, g.aD)(n.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ').concat(l ? 'var(--black)' : 'var(--white)', '\n    ')
        }, p = (0, v.B)(n, !1), C = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != o, {
            header: E,
            subHeader: _
        } = function (e) {
            var t, n, s, o;
            let {
                    quest: a,
                    rewardCode: r,
                    hasTieredRewardCodes: l
                } = e, i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != r, d = l ? '' : A.Z.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER, u = l ? (0, I.o9)({
                    quest: a,
                    idx: null !== (s = null == r ? void 0 : r.tier) && void 0 !== s ? s : null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedTier
                }) : null, c = b.r.build(a.config), p = null != u && null !== (o = u.messages.name) && void 0 !== o ? o : c.defaultReward.messages.name, m = l ? A.Z.Messages.QUESTS_CLAIM_REWARD : c.defaultReward.messages.name;
            return {
                subHeader: i ? A.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : d,
                header: i ? p : m
            };
        }({
            quest: n,
            rewardCode: o,
            hasTieredRewardCodes: a
        }), {
            hasError: S,
            isLoading: T
        } = (0, N.d7)();
    return (0, s.jsxs)('div', {
        style: i,
        className: D.rewardTile,
        children: [
            (0, s.jsxs)('div', {
                className: D.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': n.config.colors.primary },
                children: [
                    T && !S && (0, s.jsx)(c.Spinner, {
                        className: D.rewardTileAssetStatusIcon,
                        type: c.SpinnerTypes.SPINNING_CIRCLE
                    }),
                    S && (0, s.jsx)(c.ImageWarningIcon, { className: D.rewardTileAssetStatusIcon }),
                    (0, s.jsx)(j.Z, {
                        className: r()(D.rewardTileAsset, { [D.rewardTileAssetLoading]: T || S }),
                        quest: n,
                        questContent: p.trackingCtx.content
                    })
                ]
            }),
            (0, s.jsxs)('div', {
                className: D.rewardSubheading,
                children: [
                    C && (0, s.jsx)(c.CheckmarkSmallIcon, {
                        size: 'xs',
                        color: d.Z.colors.TEXT_MUTED,
                        className: D.rewardSubheadingIcon
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: D.rewardSubheadingText,
                        children: _
                    })
                ]
            }),
            (0, s.jsx)(c.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: D.rewardHeading,
                children: E
            })
        ]
    });
}
function y(e) {
    let t = (0, i.e7)([R.Z], () => R.Z.getQuest(e.questId));
    return null != t ? (0, s.jsx)(Z, {
        ...e,
        quest: t
    }) : null;
}
function Z(e) {
    var t;
    let {
            transitionState: n,
            onClose: a,
            quest: r,
            location: d,
            questContentPosition: u
        } = e, m = o.useMemo(() => {
            var e;
            return (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }, []), g = b.r.build(r.config).rewardPlatforms, v = g.length > 1, [j, y] = o.useState(v ? null : g[0]), Z = o.useRef(new l.qA()), L = o.useRef(null), [q, B] = o.useState(null), U = (0, i.e7)([C.Z], () => C.Z.useReducedMotion), P = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation), {
            rewardCode: W,
            isFetchingRewardCode: Q,
            isClaimingRewardCode: k
        } = (0, i.cj)([R.Z], () => ({
            rewardCode: R.Z.getRewardCode(r.id),
            isFetchingRewardCode: R.Z.isFetchingRewardCode(r.id),
            isClaimingRewardCode: R.Z.isClaimingRewardCode(r.id) || R.Z.isClaimingReward(r.id)
        })), F = (0, I.oo)({ quest: r }), [G, H] = o.useState(!1), z = v && (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == W, X = o.useCallback((e, t, n) => {
            H(!1), F || 2 === r.config.configVersion ? (0, h.QB)(e, t, n).catch(() => H(!0)) : (0, h.Tj)(e, t, n).catch(() => H(!0));
        }, [
            F,
            r.config.configVersion
        ]), K = o.useCallback(e => {
            H(!1), (0, h.pf)(e).catch(() => H(!0));
        }, []);
    o.useEffect(() => {
        var e, t;
        if (null == W && !G && !k && !Q && !z)
            (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) == null && null != j ? X(r.id, j, d) : (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null && K(r.id);
    }, [
        r,
        W,
        k,
        Q,
        G,
        z,
        j,
        d,
        X,
        K
    ]);
    let V = null;
    m && null != W ? V = A.Z.Messages.QUESTS_REWARD_CODE_HEADER : null != W ? V = A.Z.Messages.QUESTS_REWARD_CODE_CONGRATS : z && (V = A.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
    let Y = null != V ? (0, s.jsx)(c.Heading, {
            variant: 'heading-xl/semibold',
            color: 'header-primary',
            className: D.heading,
            children: V
        }) : null, $ = function (e) {
            var t, n, o, a;
            let {
                    quest: r,
                    selectedPlatform: l,
                    needsToConfirmPlatform: i,
                    rewardCode: d,
                    hasTieredRewardCodes: u
                } = e, p = b.r.build(r.config);
            if (i)
                return (0, s.jsx)(c.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: D.bodyCopy,
                    children: u ? A.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : A.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({ rewardName: p.defaultReward.messages.name })
                });
            let m = null != l ? l : null == d ? void 0 : d.platform, C = u ? (0, I.o9)({
                    quest: r,
                    idx: null !== (o = null == d ? void 0 : d.tier) && void 0 !== o ? o : null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedTier
                }) : null, E = null !== (a = null == C ? void 0 : null === (n = C.messages) || void 0 === n ? void 0 : n.redemptionInstructionsByPlatform) && void 0 !== a ? a : p.defaultRewardRedemptionInstructionsByPlatform, S = null != m ? E[m] : void 0;
            return null != d && null != S ? (0, s.jsx)(c.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: D.bodyCopy,
                children: _.Z.parse(S, !1, { allowLinks: !0 })
            }) : null;
        }({
            quest: r,
            selectedPlatform: j,
            needsToConfirmPlatform: z,
            rewardCode: W,
            hasTieredRewardCodes: F
        }), J = o.useMemo(() => g.map(e => ({
            label: (0, I.t2)(e),
            value: e
        })), [g]), ee = null;
    z && (ee = (0, s.jsxs)(c.FormItem, {
        title: A.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
        children: [
            (0, s.jsx)(c.Select, {
                placeholder: A.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                options: J,
                select: e => {
                    H(!1), y(e);
                },
                isSelected: e => e === j,
                serialize: e => (0, I.t2)(e),
                className: G ? D.errorInput : '',
                isDisabled: k,
                renderOptionLabel: e => {
                    let t = function (e) {
                        switch (e) {
                        case f.y$.CROSS_PLATFORM:
                            return (0, s.jsx)(c.ScienceIcon, { className: D.platformSelectionOptionIcon });
                        case f.y$.PC:
                            return (0, s.jsx)(c.ScreenIcon, { className: D.platformSelectionOptionIcon });
                        case f.y$.PLAYSTATION:
                            return (0, s.jsx)(c.PlaystationIcon, { className: D.platformSelectionOptionIcon });
                        case f.y$.SWITCH:
                            return (0, s.jsx)(c.NintendoSwitchNeutralIcon, { className: D.platformSelectionOptionIcon });
                        case f.y$.XBOX:
                            return (0, s.jsx)(c.XboxIcon, { className: D.platformSelectionOptionIcon });
                        }
                    }(e.value);
                    return (0, s.jsxs)('div', {
                        className: D.platformSelectionOptionLabelContainer,
                        children: [
                            t,
                            e.label
                        ]
                    });
                }
            }),
            G ? (0, s.jsx)(c.InputError, { error: A.Z.Messages.QUESTS_REWARD_CODE_ERROR }) : null
        ]
    }));
    let et = null == W && (Q || k), en = et && !z ? (0, s.jsx)(c.Spinner, {}) : null, es = null;
    null != W ? es = (0, s.jsx)(c.FormItem, {
        title: A.Z.Messages.QUESTS_REWARD_CODE_HEADER,
        children: (0, s.jsx)(p.Z, {
            value: P ? A.Z.Messages.QUEST_REWARD_CODE_HIDDEN : W.code,
            delay: 1000,
            buttonColor: c.Button.Colors.BRAND,
            onCopy: () => {
                P && (0, T.JG)(W.code), (0, x._3)({
                    questId: r.id,
                    questContent: d,
                    questContentPosition: u,
                    questContentCTA: x.jZ.COPY_REWARD_CODE
                });
            }
        })
    }) : G && !z && (es = (0, s.jsx)(c.FormItem, {
        title: A.Z.Messages.QUESTS_REWARD_CODE_HEADER,
        children: (0, s.jsx)(c.TextInput, {
            disabled: !0,
            error: A.Z.Messages.QUESTS_REWARD_CODE_ERROR,
            inputClassName: D.errorInput
        })
    }));
    let eo = () => {
            var e;
            z && null != j ? (X(r.id, j, d), (0, x._3)({
                questId: r.id,
                questContent: d,
                questContentCTA: x.jZ.GET_REWARD_CODE,
                questContentPosition: u
            })) : G ? (null === (e = r.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null ? K(r.id) : null != j && (X(r.id, j, d), (0, x._3)({
                questId: r.id,
                questContent: d,
                questContentCTA: x.jZ.GET_REWARD_CODE,
                questContentPosition: u
            })) : a();
        }, ea = z && k, er = !ea && (z && null == j || et), el = A.Z.Messages.QUESTS_REWARD_CODE_DONE;
    z ? el = A.Z.Messages.QUESTS_REWARD_CODE_GET_CODE : !z && G && (el = A.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
    let ei = !U && null != W && !m && !G, ed = (0, s.jsx)(c.Button, {
            onClick: () => eo(),
            submitting: ea,
            disabled: er,
            children: el
        }), eu = null != en && F;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(l.O_, {
                ref: B,
                className: D.confettiCanvas,
                environment: Z.current
            }),
            (0, s.jsx)('div', {
                ref: L,
                children: (0, s.jsxs)(c.ModalRoot, {
                    transitionState: n,
                    size: c.ModalSize.DYNAMIC,
                    children: [
                        (0, s.jsxs)('div', {
                            className: D.modalBody,
                            children: [
                                (0, s.jsx)(c.ModalCloseButton, {
                                    className: D.closeButton,
                                    onClick: () => a()
                                }),
                                !eu && (0, s.jsx)(N.p, {
                                    sentrySource: M.dr.REWARD_CODE_MODAL,
                                    children: (0, s.jsx)(w, {
                                        quest: r,
                                        rewardCode: W,
                                        hasTieredRewardCodes: F
                                    })
                                }),
                                (0, s.jsxs)('div', {
                                    className: D.modalContent,
                                    children: [
                                        Y,
                                        $,
                                        ee,
                                        en,
                                        es
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsx)(c.ModalFooter, { children: ed })
                    ]
                })
            }),
            ei && (0, s.jsx)(E.Z, {
                confettiTarget: L.current,
                confettiCanvas: q,
                sprites: O.CA,
                colors: O.Br
            })
        ]
    });
}
