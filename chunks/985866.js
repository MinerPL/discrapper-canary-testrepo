r.r(t),
    r.d(t, {
        default: function () {
            return N;
        }
    }),
    r(47120);
var n = r(735250),
    a = r(470079),
    o = r(120356),
    s = r.n(o),
    i = r(887024),
    d = r(442837),
    l = r(692547),
    c = r(780384),
    u = r(481060),
    p = r(484614),
    _ = r(410030),
    C = r(607070),
    f = r(530618),
    m = r(454585),
    g = r(246946),
    h = r(572004),
    E = r(302221),
    b = r(617136),
    S = r(569984),
    T = r(497505),
    w = r(918701),
    R = r(804127),
    I = r(566078),
    x = r(617889),
    D = r(652380),
    A = r(644646),
    v = r(78826),
    y = r(46140),
    B = r(675654),
    O = r(689938),
    W = r(422446);
function M(e) {
    var t;
    let { quest: r, rewardCode: a, hasTieredRewardCodes: o } = e,
        i = (0, c.wj)((0, _.ZP)()),
        d = {
            border: '1px solid '.concat(r.config.colors.primary),
            background: '\n    linear-gradient(\n      150deg,\n      transparent 68%,\n      '
                .concat((0, E.aD)(r.config.colors.primary, 0.2), ' 85%,\n      transparent 100%\n    ),\n    linear-gradient(\n      150deg,\n      transparent 13%,\n      ')
                .concat((0, E.aD)(r.config.colors.primary, 0.6), ' 44%,\n      transparent 76%\n    ),\n    ')
                .concat(i ? 'var(--black)' : 'var(--white)', '\n    ')
        },
        p = (0, x.B)(r, !1),
        C = (null === (t = r.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != a,
        { header: f, subHeader: m } = (function (e) {
            var t, r, n, a;
            let { quest: o, rewardCode: s, hasTieredRewardCodes: i } = e,
                d = (null === (t = o.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null || null != s,
                l = i ? '' : O.Z.Messages.QUESTS_REWARD_CODE_UNCLAIMED_REWARD_TILE_SUBHEADER,
                c = i
                    ? (0, w.o9)({
                          quest: o,
                          idx: null !== (n = null == s ? void 0 : s.tier) && void 0 !== n ? n : null === (r = o.userStatus) || void 0 === r ? void 0 : r.claimedTier
                      })
                    : null,
                u = I.r.build(o.config),
                p = null != c && null !== (a = c.messages.name) && void 0 !== a ? a : u.defaultReward.messages.name,
                _ = i ? O.Z.Messages.QUESTS_CLAIM_REWARD : u.defaultReward.messages.name;
            return {
                subHeader: d ? O.Z.Messages.QUESTS_REWARD_CODE_CLAIMED_REWARD_TILE_SUBHEADER : l,
                header: d ? p : _
            };
        })({
            quest: r,
            rewardCode: a,
            hasTieredRewardCodes: o
        }),
        { hasError: g, isLoading: h } = (0, v.d7)();
    return (0, n.jsxs)('div', {
        style: d,
        className: W.rewardTile,
        children: [
            (0, n.jsxs)('div', {
                className: W.rewardTileWrapper,
                style: { '--custom-reward-tile-border-color': r.config.colors.primary },
                children: [
                    h &&
                        !g &&
                        (0, n.jsx)(u.Spinner, {
                            className: W.rewardTileAssetStatusIcon,
                            type: u.SpinnerTypes.SPINNING_CIRCLE
                        }),
                    g && (0, n.jsx)(u.ImageWarningIcon, { className: W.rewardTileAssetStatusIcon }),
                    (0, n.jsx)(A.Z, {
                        className: s()(W.rewardTileAsset, { [W.rewardTileAssetLoading]: h || g }),
                        quest: r,
                        questContent: p.trackingCtx.content,
                        location: y.dr.REWARD_CODE_MODAL
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: W.rewardSubheading,
                children: [
                    C &&
                        (0, n.jsx)(u.CheckmarkSmallIcon, {
                            size: 'xs',
                            color: l.Z.colors.TEXT_MUTED,
                            className: W.rewardSubheadingIcon
                        }),
                    (0, n.jsx)(u.Text, {
                        variant: 'eyebrow',
                        color: 'text-muted',
                        className: W.rewardSubheadingText,
                        children: m
                    })
                ]
            }),
            (0, n.jsx)(u.Heading, {
                variant: 'display-sm',
                color: 'header-primary',
                className: W.rewardHeading,
                children: f
            })
        ]
    });
}
function N(e) {
    let t = (0, d.e7)([S.Z], () => S.Z.getQuest(e.questId));
    return null != t
        ? (0, n.jsx)(L, {
              ...e,
              quest: t,
              preview: e.preview
          })
        : null;
}
function L(e) {
    var t;
    let { transitionState: r, onClose: o, quest: s, location: l, questContentPosition: c, preview: _ } = e,
        E = a.useMemo(() => {
            var e;
            return (null === (e = s.userStatus) || void 0 === e ? void 0 : e.claimedAt) != null;
        }, []),
        x = I.r.build(s.config).rewardPlatforms,
        A = x.length > 1,
        [N, L] = a.useState(A ? null : x[0]),
        j = a.useRef(new i.qA()),
        q = a.useRef(null),
        [P, Z] = a.useState(null),
        U = (0, d.e7)([C.Z], () => C.Z.useReducedMotion),
        k = (0, d.e7)([g.Z], () => g.Z.hidePersonalInformation),
        {
            questStoreRewardCode: H,
            isFetchingRewardCode: Q,
            isClaimingReward: F
        } = (0, d.cj)([S.Z], () => ({
            questStoreRewardCode: S.Z.getRewardCode(s.id),
            isFetchingRewardCode: S.Z.isFetchingRewardCode(s.id),
            isClaimingReward: S.Z.isClaimingReward(s.id)
        })),
        G = (0, w.oo)({ quest: s }),
        X = !0 === _ ? (0, D.b)(s) : H,
        z = A && (null === (t = s.userStatus) || void 0 === t ? void 0 : t.claimedAt) == null && null == X,
        {
            claimCode: $,
            fetchCode: V,
            hasError: Y,
            setHasError: J
        } = (0, R.u)({
            isClaimingReward: F,
            isFetchingRewardCode: Q,
            quest: s,
            questContent: l,
            requiresPlatformSelection: z,
            rewardCode: X,
            selectedPlatformType: N,
            preview: _
        }),
        K = null;
    E && null != X ? (K = O.Z.Messages.QUESTS_REWARD_CODE_HEADER) : null != X ? (K = O.Z.Messages.QUESTS_REWARD_CODE_CONGRATS) : z && (K = O.Z.Messages.QUESTS_REWARD_CODE_PLATFORM_SELECTION_HEADER);
    let ee =
            null != K
                ? (0, n.jsx)(u.Heading, {
                      variant: 'heading-xl/semibold',
                      color: 'header-primary',
                      className: W.heading,
                      children: K
                  })
                : null,
        et = (function (e) {
            let { quest: t, selectedPlatform: r, requiresPlatformSelection: a, rewardCode: o, hasTieredRewardCodes: s } = e,
                i = I.r.build(t.config);
            if (a)
                return (0, n.jsx)(u.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: W.bodyCopy,
                    children: s ? O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS_TIERED.format() : O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_INSTRUCTIONS.format({ rewardName: i.defaultReward.messages.name })
                });
            let d = (0, w.C1)({
                quest: t,
                rewardCode: o,
                selectedPlatformType: r,
                sharedQuestFields: i
            });
            return null != o && null != d
                ? (0, n.jsx)(u.Text, {
                      variant: 'text-sm/normal',
                      color: 'text-normal',
                      className: W.bodyCopy,
                      children: m.Z.parse(d, !1, { allowLinks: !0 })
                  })
                : null;
        })({
            quest: s,
            selectedPlatform: N,
            requiresPlatformSelection: z,
            rewardCode: X,
            hasTieredRewardCodes: G
        }),
        er = a.useMemo(
            () =>
                x.map((e) => ({
                    label: (0, w.t2)(e),
                    value: e
                })),
            [x]
        ),
        en = null;
    z &&
        (en = (0, n.jsxs)(u.FormItem, {
            title: O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_LABEL,
            children: [
                (0, n.jsx)(u.Select, {
                    placeholder: O.Z.Messages.QUESTS_REWARD_CODE_SELECT_PLATFORM_PLACEHOLDER,
                    options: er,
                    select: (e) => {
                        J(!1), L(e);
                    },
                    isSelected: (e) => e === N,
                    serialize: (e) => (0, w.t2)(e),
                    className: Y ? W.errorInput : '',
                    isDisabled: F,
                    renderOptionLabel: (e) => {
                        let t = (function (e) {
                            switch (e) {
                                case T.y$.CROSS_PLATFORM:
                                    return (0, n.jsx)(u.ScienceIcon, { className: W.platformSelectionOptionIcon });
                                case T.y$.PC:
                                    return (0, n.jsx)(u.ScreenIcon, { className: W.platformSelectionOptionIcon });
                                case T.y$.PLAYSTATION:
                                    return (0, n.jsx)(u.PlaystationNeutralIcon, { className: W.platformSelectionOptionIcon });
                                case T.y$.SWITCH:
                                    return (0, n.jsx)(u.NintendoSwitchNeutralIcon, { className: W.platformSelectionOptionIcon });
                                case T.y$.XBOX:
                                    return (0, n.jsx)(u.XboxNeutralIcon, { className: W.platformSelectionOptionIcon });
                            }
                        })(e.value);
                        return (0, n.jsxs)('div', {
                            className: W.platformSelectionOptionLabelContainer,
                            children: [t, e.label]
                        });
                    }
                }),
                Y ? (0, n.jsx)(u.InputError, { error: O.Z.Messages.QUESTS_REWARD_CODE_ERROR }) : null
            ]
        }));
    let ea = null == X && (Q || F),
        eo = ea && !z ? (0, n.jsx)(u.Spinner, {}) : null,
        es = null;
    null != X
        ? (es = (0, n.jsx)(u.FormItem, {
              title: O.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, n.jsx)(p.Z, {
                  value: k ? O.Z.Messages.QUEST_REWARD_CODE_HIDDEN : X.code,
                  delay: 1000,
                  buttonColor: u.Button.Colors.BRAND,
                  onCopy: () => {
                      k && (0, h.JG)(X.code),
                          (0, b._3)({
                              questId: s.id,
                              questContent: l,
                              questContentPosition: c,
                              questContentCTA: b.jZ.COPY_REWARD_CODE
                          });
                  }
              })
          }))
        : Y &&
          !z &&
          (es = (0, n.jsx)(u.FormItem, {
              title: O.Z.Messages.QUESTS_REWARD_CODE_HEADER,
              children: (0, n.jsx)(u.TextInput, {
                  disabled: !0,
                  error: O.Z.Messages.QUESTS_REWARD_CODE_ERROR,
                  inputClassName: W.errorInput
              })
          }));
    let ei = (0, R.G)({
            claimCode: $,
            fetchCode: V,
            hasError: Y,
            onDismiss: o,
            quest: s,
            questContent: l,
            questContentPosition: c,
            requiresPlatformSelection: z,
            selectedPlatformType: N
        }),
        ed = z && F,
        el = !ed && ((z && null == N) || ea),
        ec = O.Z.Messages.QUESTS_REWARD_CODE_DONE;
    z ? (ec = O.Z.Messages.QUESTS_REWARD_CODE_GET_CODE) : !z && Y && (ec = O.Z.Messages.QUESTS_REWARD_CODE_TRY_AGAIN);
    let eu = !U && null != X && !E && !Y,
        ep = null != eo && G;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(i.O_, {
                ref: Z,
                className: W.confettiCanvas,
                environment: j.current
            }),
            (0, n.jsx)('div', {
                ref: q,
                children: (0, n.jsxs)(u.ModalRoot, {
                    transitionState: r,
                    size: u.ModalSize.DYNAMIC,
                    children: [
                        (0, n.jsxs)('div', {
                            className: W.modalBody,
                            children: [
                                (0, n.jsx)(u.ModalCloseButton, {
                                    className: W.closeButton,
                                    onClick: () => o()
                                }),
                                !ep &&
                                    (0, n.jsx)(v.p, {
                                        source: y.dr.REWARD_CODE_MODAL,
                                        questId: s.id,
                                        children: (0, n.jsx)(M, {
                                            quest: s,
                                            rewardCode: X,
                                            hasTieredRewardCodes: G
                                        })
                                    }),
                                (0, n.jsxs)('div', {
                                    className: W.modalContent,
                                    children: [ee, et, en, eo, es]
                                })
                            ]
                        }),
                        (0, n.jsx)(u.ModalFooter, {
                            children: (0, n.jsx)(u.Button, {
                                onClick: ei,
                                submitting: ed,
                                disabled: el,
                                children: ec
                            })
                        })
                    ]
                })
            }),
            eu &&
                (0, n.jsx)(f.Z, {
                    confettiTarget: q.current,
                    confettiCanvas: P,
                    sprites: B.CA,
                    colors: B.Br
                })
        ]
    });
}
