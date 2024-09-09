var A = I(735250),
    O = I(470079),
    T = I(286379),
    S = I(692547),
    C = I(481060),
    N = I(442837),
    D = I(797614),
    R = I(706454),
    e = I(626135),
    V = I(219230),
    P = I(531441),
    i = I(788080),
    n = I(451284),
    t = I(613734),
    L = I(846488),
    a = I(384725),
    l = I(97568),
    s = I(800530),
    o = I(981631),
    M = I(689938),
    r = I(298198);
let U = (E) => {
        let { classificationTypeText: _, guildMetadata: I } = E,
            T = (0, V.B)('classification_detail'),
            S = O.useMemo(() => {
                let E = {
                    classification_type: _,
                    classificationHook: (E, _) => (0, A.jsx)('strong', { children: E }, _)
                };
                return T && null != I
                    ? (null == I ? void 0 : I.member_type) === P.wO.OWNER
                        ? M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
                              ...E,
                              guildName: null == I ? void 0 : I.name
                          })
                        : M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
                              ...E,
                              guildName: null == I ? void 0 : I.name
                          })
                    : M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format(E);
            }, [_, I, T]);
        return (0, A.jsx)('div', {
            className: r.classificationHeader,
            children: (0, A.jsx)(C.Heading, {
                variant: 'heading-xl/normal',
                children: S
            })
        });
    },
    Y = (E) => {
        let { actions: _, classificationExpiration: I } = E,
            O = (0, N.e7)([R.default], () => R.default.locale);
        return 0 === _.filter((E) => E.descriptions.length > 0).length && null == I
            ? null
            : (0, A.jsxs)('div', {
                  className: r.classificationActionsTakenContainer,
                  children: [
                      (0, A.jsx)(C.Text, {
                          variant: 'eyebrow',
                          color: 'text-muted',
                          children: M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
                      }),
                      (0, A.jsxs)('ul', {
                          className: r.classificationActionsTakenList,
                          children: [
                              _.map((E) => (0, A.jsx)(c, { action: E }, E.id)),
                              null != I
                                  ? (0, A.jsx)(
                                        'li',
                                        {
                                            className: r.classificationActionsTakenRow,
                                            children: (0, A.jsx)(C.Text, {
                                                tag: 'span',
                                                variant: 'heading-md/normal',
                                                color: 'text-normal',
                                                children: M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_VIOLATION_ACCOUNT_STATUS.format({ expirationDate: I.toLocaleDateString(O, { dateStyle: 'medium' }) })
                                            })
                                        },
                                        'expiration'
                                    )
                                  : null
                          ]
                      })
                  ]
              });
    },
    c = (E) => {
        let { action: _ } = E;
        return (0, A.jsx)(A.Fragment, {
            children: _.descriptions.map((E, _) =>
                (0, A.jsx)(
                    'li',
                    {
                        className: r.classificationActionsTakenRow,
                        children: (0, A.jsx)(C.Text, {
                            tag: 'span',
                            variant: 'heading-md/normal',
                            color: 'text-normal',
                            children: E
                        })
                    },
                    _
                )
            )
        });
    },
    G = (E) => {
        let { classificationTypeText: _, policyExplainerLink: I } = E;
        return (0, A.jsxs)(C.Anchor, {
            href: I,
            className: r.classificationPolicyCard,
            useDefaultUnderlineStyles: !1,
            children: [
                (0, A.jsx)('div', {
                    className: r.classificationPolicyCardIcon,
                    children: (0, A.jsx)(C.ShieldIcon, {
                        size: 'md',
                        color: S.Z.colors.FOCUS_PRIMARY
                    })
                }),
                (0, A.jsx)('div', {
                    className: r.classificationPolicyDescriptionContainer,
                    children: (0, A.jsx)(C.Text, {
                        variant: 'text-md/normal',
                        children: M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({ classificationDescription: _ })
                    })
                }),
                (0, A.jsx)('div', {
                    className: r.classificationPolicyLinkIcon,
                    children: (0, A.jsx)(C.ChevronSmallRightIcon, {
                        size: 'md',
                        color: S.Z.colors.INTERACTIVE_NORMAL
                    })
                })
            ]
        });
    },
    d = () =>
        (0, A.jsx)(C.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
        }),
    F = (E) =>
        (0, A.jsx)(C.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
                letUsKnowHook: (_, I) =>
                    (0, A.jsx)(
                        C.Anchor,
                        {
                            href: E.isAppealEligible ? void 0 : E.appealLink,
                            onClick: E.letUsKnowClick,
                            children: _
                        },
                        I
                    )
            })
        }),
    u = (E) =>
        (0, A.jsx)('div', {
            className: r.classificationLetUsKnowContainer,
            children: E.hasBeenAppealed
                ? (0, A.jsx)(d, {})
                : (0, A.jsx)(F, {
                      appealLink: s.sQ.APPEALS_LINK,
                      letUsKnowClick: E.onLetUsKnowClick,
                      isAppealEligible: E.isAppealEligible
                  })
        }),
    m = (E) => {
        let { tosLink: _, communityGuidelinesLink: I, classificationTypeText: O, policyExplainerLink: T, appealComponent: S } = E;
        return (0, A.jsxs)('div', {
            className: r.classificationActionExplanationContainer,
            children: [
                (0, A.jsx)(C.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
                }),
                (0, A.jsx)(C.Text, {
                    className: r.guidelinesExplanation,
                    variant: 'text-sm/normal',
                    children: M.Z.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
                        tosLink: _,
                        communityGuidelinesLink: I
                    })
                }),
                (0, A.jsx)(G, {
                    classificationTypeText: O,
                    policyExplainerLink: T
                }),
                S
            ]
        });
    };
_.Z = (E) => {
    var _;
    let { classificationId: I, source: S, onError: C } = E,
        { classification: N, classificationRequestState: R, isAppealEligible: V, isDsaEligible: M, violationType: c } = (0, t.YG)(I),
        G = (0, n.P)(),
        d = null != N && null != N.flagged_content && N.flagged_content.length > 0,
        F = (0, L.e)();
    return (O.useEffect(() => {
        F &&
            e.default.track(o.rMx.SAFETY_HUB_ACTION, {
                action: s.n0.ViewViolationDetail,
                account_standing: G.state,
                classification_ids: [Number(I)],
                source: S,
                is_violative_content_shown: d,
                is_dsa_eligible: M,
                violation_type: c
            });
    }, [F]),
    null == N && R === P.OY.FAILED)
        ? (C(), null)
        : null == N
          ? null
          : (0, A.jsxs)('div', {
                className: r.classificationContainer,
                children: [
                    (0, A.jsx)(U, {
                        classificationTypeText: N.description,
                        guildMetadata: null == N ? void 0 : N.guild_metadata
                    }),
                    (0, A.jsx)(l.s, { flaggedContent: null !== (_ = N.flagged_content) && void 0 !== _ ? _ : [] }),
                    (0, A.jsx)(Y, {
                        actions: N.actions,
                        classificationExpiration: (0, i.Pu)(N)
                    }),
                    (0, A.jsx)(m, {
                        classificationTypeText: N.description,
                        tosLink: s.sQ.TOS_LINK,
                        communityGuidelinesLink: s.sQ.COMMUNITY_GUIDELINES,
                        policyExplainerLink: N.explainer_link,
                        appealComponent: (0, A.jsx)(u, {
                            hasBeenAppealed: null != N.appeal_status,
                            onLetUsKnowClick: () => {
                                e.default.track(o.rMx.SAFETY_HUB_ACTION, {
                                    action: s.n0.ClickLetUsKnow,
                                    account_standing: G.state,
                                    classification_ids: [Number(I)],
                                    source: S,
                                    is_violative_content_shown: d,
                                    is_dsa_eligible: M,
                                    violation_type: c
                                }),
                                    V && (D.Z.increment({ name: T.V.APPEAL_INGESTION_VIEW }), a.Z.open(I));
                            },
                            isAppealEligible: V
                        })
                    })
                ]
            });
};
