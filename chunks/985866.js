n.r(t),
    n.d(t, {
        default: function () {
            return M;
        }
    }),
    n(47120);
var r = n(735250),
    s = n(470079),
    a = n(120356),
    o = n.n(a),
    l = n(887024),
    i = n(442837),
    d = n(692547),
    c = n(780384),
    u = n(481060),
    p = n(484614),
    _ = n(410030),
    m = n(607070),
    C = n(530618),
    E = n(454585),
    S = n(246946),
    R = n(572004),
    g = n(302221),
    T = n(617136),
    f = n(569984),
    h = n(497505),
    b = n(918701),
    D = n(804127),
    A = n(566078),
    x = n(617889),
    I = n(644646),
    O = n(78826),
    w = n(46140),
    y = n(675654),
    v = n(689938),
    N = n(880340);
function j(e) {
    var t;
    let { quest: n, rewardCode: s, hasTieredRewardCodes: a } = e,
        l = (0, c.wj)((0, _.ZP)()),
        i = {
            border: '1px solid '.concat(n.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, g.aD)(n.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, g.aD)(n.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(l ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, x.B)(n, !1),
        m = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s,
        { header: C, subHeader: E } = (function (e) {
            var t, n, r, s;
            let { quest: a, rewardCode: o, hasTieredRewardCodes: l } = e,
                i = (null === (t = a.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != o,
                d = l ? '' : v.Z.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
                c = l
                    ? (0, b.o9)({
                          quest: a,
                          idx: null !== (r = null == o ? void 0 : o.tier) && void 0 !== r ? r : null === (n = a.userStatus) || void 0 === n ? void 0 : n.claimedTier
                      })
                    : null,
                u = A.r.build(a.config),
                p = null != c && null !== (s = c.messages.name) && void 0 !== s ? s : u.defaultReward.messages.name,
                _ = l ? v.Z.Messages.QUESTS_CLAIM_REWARD : u.defaultReward.messages.name;
            return {
                subHeader: i ? v.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : d,
                header: i ? p : _
            };
        })({
            quest: n,
            rewardCode: s,
            hasTieredRewardCodes: a
        }),
        { hasError: S, isLoading: R } = (0, O.d7)();
    return (0, r.jsxs)('div', {
        style: i,
        className: N.rewardTile,
        children: [
            (0, r.jsxs)('div', {
                className: N.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': n.config.colors.primary },
                children: [
                    R &&
                        !S &&
                        (0, r.jsx)(u.Spinner, {
                            className: N.rewardTileAssetStatusIcon,
                            type: u.SpinnerTypes.SPINNING_CIRCLE
                        }),
                    S && (0, r.jsx)(u.ImageWarningIcon, { className: N.rewardTileAssetStatusIcon }),
                    (0, r.jsx)(I.Z, {
                        className: o()(N.rewardTileAsset, { [N.rewardTileAssetLoading]: R || S }),
                        quest: n,
                        questContent: p.trackingCtx.content,
                        location: w.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: N.rewardSubheading,
                children: [
                    m &&
                        (0, r.jsx)(u.CheckmarkSmallIcon, {
                            size: 'xs',
                            color: d.Z.colors.TEXT_MUTED,
                            className: N.rewardSubheadingIcon
                        }),
                    (0, r.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: N.rewardSubheadingText,
                        children: E
                    })
                ]
            }),
            (0, r.jsx)(u.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: N.rewardHeading,
                children: C
            })
        ]
    });
}
function M(e) {
    let t = (0, i.e7)([f.Z], () => f.Z.getQuest(e.questId));
    return null != t
        ? (0, r.jsx)(L, {
              ...e,
              quest: t
          })
        : null;
}
function L(e) {
    var t;
    let { transitionState: n, onClose: a, quest: o, location: d, questContentPosition: c } = e,
        _ = s.useMemo(() => {
            var e;
            return (null === (e = o.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }, []),
        g = A.r.build(o.config).rewardPlatforms,
        x = g.length > 1,
        [I, M] = s.useState(x ? null : g[0]),
        L = s.useRef(new l.qA()),
        B = s.useRef(null),
        [Z, W] = s.useState(null),
        U = (0, i.e7)([m.Z], () => m.Z.useReducedMotion),
        k = (0, i.e7)([S.Z], () => S.Z.hidePersonalInformation),
        {
            rewardCode: P,
            isFetchingRewardCode: Q,
            isClaimingReward: F
        } = (0, i.cj)([f.Z], () => ({
            rewardCode: f.Z.getRewardCode(o.id),
            isFetchingRewardCode: f.Z.isFetchingRewardCode(o.id),
            isClaimingReward: f.Z.isClaimingReward(o.id)
        })),
        H = (0, b.oo)({ quest: o }),
        q = x && (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == P,
        {
            claimCode: G,
            fetchCode: z,
            hasError: $,
            setHasError: V
        } = (0, D.u)({
            isClaimingReward: F,
            isFetchingRewardCode: Q,
            quest: o,
            questContent: d,
            requiresPlatformSelection: q,
            rewardCode: P,
            selectedPlatformType: I
        }),
        X = null;
    _ && null != P ? (X = v.Z.Messages.QUESTS_REWARD_CODE_HEADER) : null != P ? (X = v.Z.Messages.QUESTS_REWARD_CODE_CONGRATS) : q && (X = v.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
    let Y =
            null != X
                ? (0, r.jsx)(u.Heading, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: N.heading,
                      children: X
                  })
                : null,
        J = (function (e) {
            let { quest: t, selectedPlatform: n, requiresPlatformSelection: s, rewardCode: a, hasTieredRewardCodes: o } = e,
                l = A.r.build(t.config);
            if (s)
                return (0, r.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: N.bodyCopy,
                    children: o ? v.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : v.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({ rewardName: l.defaultReward.messages.name })
                });
            let i = (0, b.C1)({
                quest: t,
                rewardCode: a,
                selectedPlatformType: n,
                sharedQuestFields: l
            });
            return null != a && null != i
                ? (0, r.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: N.bodyCopy,
                      children: E.Z.parse(i, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: o,
            selectedPlatform: I,
            requiresPlatformSelection: q,
            rewardCode: P,
            hasTieredRewardCodes: H
        }),
        K = s.useMemo(
            () =>
                g.map((e) => ({
                    label: (0, b.t2)(e),
                    value: e
                })),
            [g]
        ),
        ee = null;
    q &&
        (ee = (0, r.jsxs)(u.FormItem, {
            title: v.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
                (0, r.jsx)(u.Select, {
                    placeholder: v.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                    options: K,
                    select: (e) => {
                        V(!1), M(e);
                    },
                    isSelected: (e) => e === I,
                    serialize: (e) => (0, b.t2)(e),
                    className: $ ? N.errorInput : '',
                    isDisabled: F,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case h.y$.CROSS_PLATFORM:
                                    return (0, r.jsx)(u.ScienceIcon, { className: N.platformSelectionOptionIcon });
                                case h.y$.PC:
                                    return (0, r.jsx)(u.ScreenIcon, { className: N.platformSelectionOptionIcon });
                                case h.y$.PLAYSTATION:
                                    return (0, r.jsx)(u.PlaystationNeutralIcon, { className: N.platformSelectionOptionIcon });
                                case h.y$.SWITCH:
                                    return (0, r.jsx)(u.NintendoSwitchNeutralIcon, { className: N.platformSelectionOptionIcon });
                                case h.y$.XBOX:
                                    return (0, r.jsx)(u.XboxNeutralIcon, { className: N.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, r.jsxs)('div', {
                            className: N.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                $ ? (0, r.jsx)(u.InputError, { error: v.Z.Messages.QUESTS_REWARD_CODE_ERROR }) : null
            ]
        }));
    let et = null == P && (Q || F),
        en = et && !q ? (0, r.jsx)(u.Spinner, {}) : null,
        er = null;
    null != P
        ? (er = (0, r.jsx)(u.FormItem, {
              title: v.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, r.jsx)(p.Z, {
                  value: k ? v.Z.Messages.QUEST_REWARD_CODE_HIDDEN : P.code,
                  delay: 1000,
                  buttonColor: u.Button.Colors.BRAND,
                  onCopy: () => {
                      k && (0, R.JG)(P.code),
                          (0, T._3)({
                              questId: o.id,
                              questContent: d,
                              questContentPosition: c,
                              questContentCTA: T.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : $ &&
          !q &&
          (er = (0, r.jsx)(u.FormItem, {
              title: v.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, r.jsx)(u.TextInput, {
                  disabled: !0,
                  error: v.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                  inputClassName: N.errorInput
              })
          }));
    let es = (0, D.G)({
            claimCode: G,
            fetchCode: z,
            hasError: $,
            onDismiss: a,
            quest: o,
            questContent: d,
            questContentPosition: c,
            requiresPlatformSelection: q,
            selectedPlatformType: I
        }),
        ea = q && F,
        eo = !ea && ((q && null == I) || et),
        el = v.Z.Messages.QUESTS_REWARD_CODE_DONE;
    q ? (el = v.Z.Messages.QUESTS_REWARD_CODE_GET_CODE) : !q && $ && (el = v.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
    let ei = !U && null != P && !_ && !$,
        ed = null != en && H;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.O_, {
                ref: W,
                className: N.confettiCanvas,
                environment: L.current
            }),
            (0, r.jsx)('div', {
                ref: B,
                children: (0, r.jsxs)(u.ModalRoot, {
                    transitionState: n,
                    size: u.ModalSize.DYNAMIC,
                    children: [
                        (0, r.jsxs)('div', {
                            className: N.modalBody,
                            children: [
                                (0, r.jsx)(u.ModalCloseButton, {
                                    className: N.closeButton,
                                    onClick: () => a()
                                }),
                                !ed &&
                                    (0, r.jsx)(O.p, {
                                        source: w.dr.REWARD_CODE_MODAL,
                                        questId: o.id,
                                        children: (0, r.jsx)(j, {
                                            quest: o,
                                            rewardCode: P,
                                            hasTieredRewardCodes: H
                                        })
                                    }),
                                (0, r.jsxs)('div', {
                                    className: N.modalContent,
                                    children: [Y, J, ee, en, er]
                                })
                            ]
                        }),
                        (0, r.jsx)(u.ModalFooter, {
                            children: (0, r.jsx)(u.Button, {
                                onClick: es,
                                submitting: ea,
                                disabled: eo,
                                children: el
                            })
                        })
                    ]
                })
            }),
            ei &&
                (0, r.jsx)(C.Z, {
                    confettiTarget: B.current,
                    confettiCanvas: Z,
                    sprites: y.CA,
                    colors: y.Br
                })
        ]
    });
}
