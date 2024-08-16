var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(232567),
    d = n(100527),
    _ = n(906732),
    u = n(204197),
    E = n(598077),
    T = n(594174),
    I = n(626135),
    R = n(63063),
    C = n(281494),
    g = n(276444),
    p = n(520540),
    N = n(197115),
    A = n(119269),
    m = n(938736),
    f = n(981631),
    S = n(689938),
    h = n(484757),
    M = n(691766);
let x = (e) => {
        let { userRecord: t, placement: n, trialStatus: a } = e,
            { avatarSrc: r, eventHandlers: l } = (0, u.Z)({
                user: t,
                size: o.AvatarSizes.SIZE_32,
                animateOnHover: !0
            }),
            c = null != t,
            d = c
                ? (0, s.jsx)(o.Avatar, {
                      src: r,
                      'aria-label': t.username,
                      size: o.AvatarSizes.SIZE_32,
                      ...l
                  })
                : (0, s.jsx)(o.Heading, {
                      variant: 'heading-md/semibold',
                      className: h.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, s.jsx)(o.Tooltip, {
            text: S.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
            shouldShow: !c,
            tooltipContentClassName: h.unsentTooltipContent,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: i()({
                        [h.redeemedCircle]: !1,
                        [h.convertedCircleGlow]: !1,
                        [h.standardCircle]: !1
                    }),
                    children: (0, s.jsx)('div', {
                        className: void 0,
                        children: (0, s.jsx)('div', {
                            className: h.userAvatarProgressBarUnit,
                            ...e,
                            children: d
                        })
                    })
                })
        });
    },
    O = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, s.jsxs)('div', {
            className: h.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, s.jsx)('div', { className: h.avatarProgressBarUnitConnectorBase }),
                (0, s.jsx)('div', {
                    className: i()({
                        [h.fullHighlight]: t > n,
                        [h.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    b = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            a = t.length,
            r = a < 1 ? null : t[0],
            i = a < 2 ? null : t[1],
            l = a < 3 ? null : t[2];
        return (0, s.jsxs)('div', {
            className: h.userAvatarProgressBarContainer,
            children: [
                (0, s.jsx)(x, {
                    userRecord: r,
                    placement: 1,
                    trialStatus: (null == r ? void 0 : r.id) != null ? n.get(null == r ? void 0 : r.id) : void 0
                }),
                (0, s.jsx)(O, {
                    numSentReferrals: a,
                    placement: 1
                }),
                (0, s.jsx)(x, {
                    userRecord: i,
                    placement: 2,
                    trialStatus: (null == i ? void 0 : i.id) != null ? n.get(null == i ? void 0 : i.id) : void 0
                }),
                (0, s.jsx)(O, {
                    numSentReferrals: a,
                    placement: 2
                }),
                (0, s.jsx)(x, {
                    userRecord: l,
                    placement: 3,
                    trialStatus: (null == l ? void 0 : l.id) != null ? n.get(null == l ? void 0 : l.id) : void 0
                })
            ]
        });
    };
t.Z = (e) => {
    let { isInSettings: t = !1 } = e,
        r = (0, l.Wu)([g.Z], () => g.Z.getSentUserIds()),
        u = (0, l.e7)([g.Z], () => g.Z.getRecipientStatus()),
        x = (0, m.uv)('ReferralProgramProgressBar'),
        O = (0, l.Wu)([T.default], () => r.map((e) => T.default.getUser(e)).filter((e) => null != e)),
        P = a.useMemo(() => O.map((e) => new E.Z(e)), [O]),
        { subscriberHomeVariant: v } = p.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
        L = v === p.p.VARIANT_2;
    a.useEffect(() => {
        r.forEach((e) => {
            (0, c.PR)(e);
        });
    }, [r]);
    let Z = {
        redeemed: 0,
        converted: 0,
        sent: u.size
    };
    u.forEach((e) => {
        e === C.Fe.REDEEMED && Z.redeemed++, e === C.Fe.CONVERTED && (Z.redeemed++, Z.converted++);
    });
    let D = Z.sent === m.Q_,
        B = R.Z.getArticleURL(f.BhN.REFERRAL_PROGRAM),
        { analyticsLocations: j } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        U = a.useRef(null),
        G = (Z.sent / m.Q_) * 100,
        y = (0, s.jsxs)('div', {
            className: h.referralInfoContent,
            children: [
                (0, s.jsx)(A.Z, {
                    percentage: G,
                    progressCircleVariation: A.Q.NITRO_LOGO,
                    iconClassName: i()({
                        [h.referralProgressBarIcon]: !t,
                        [h.referralProgressBarIconSettings]: t
                    })
                }),
                (0, s.jsxs)('div', {
                    className: h.expandedProgressBarContent,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            variant: t ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                            className: h.expandedProgressBarHeader,
                            children: (0, m.$s)({
                                referralIncentiveLifecycleState: x,
                                hasSentAll: D,
                                referralsStatuses: Z
                            })
                        }),
                        (0, s.jsx)(b, {
                            userRecords: P,
                            recipientStatus: u
                        }),
                        (0, s.jsx)(o.Text, {
                            variant: t ? 'text-sm/normal' : 'text-lg/medium',
                            children: (0, m.Hg)({
                                helpdeskArticle: B,
                                referralIncentiveLifecycleState: x,
                                referralsStatuses: Z
                            })
                        }),
                        (0, s.jsxs)('div', {
                            className: i()(h.expandedProgressBarButtonContainer, { [h.expandedProgressBarButtonContainerLayout]: !t }),
                            children: [
                                !t &&
                                    !L &&
                                    (0, s.jsx)(N.Z, {
                                        color: o.ButtonColors.CUSTOM,
                                        buttonText: S.Z.Messages.GIFT_NITRO,
                                        className: i()(h.expandedProgressBarGiftingCTA, { [h.expandedProgressBarGiftingCTALayout]: !t }),
                                        look: o.ButtonLooks.OUTLINED,
                                        isGift: !0
                                    }),
                                (0, s.jsx)(o.ShinyButton, {
                                    className: h.expandedProgressBarSelectFriendsCTA,
                                    color: o.ButtonColors.CUSTOM,
                                    onClick: () => {
                                        I.default.track(f.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: j }),
                                            (0, o.openModalLazy)(async () => {
                                                let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                return (t) =>
                                                    (0, s.jsx)(e, {
                                                        ...t,
                                                        sourceAnalyticsLocations: j
                                                    });
                                            });
                                    },
                                    onlyShineOnHover: !0,
                                    children: (0, s.jsxs)('div', {
                                        className: h.expandedProgressBarSelectFriendsCTAInner,
                                        children: [
                                            (0, s.jsx)('img', {
                                                src: M,
                                                alt: '',
                                                className: h.expandedProgressBarSelectFriendsIcon
                                            }),
                                            D ? S.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : S.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        }),
        k = r.length === m.Q_;
    return (0, s.jsx)(_.Gt, {
        value: j,
        children: (0, s.jsxs)('div', {
            ref: U,
            className: i()({
                [h.expandedProgressBarContainer]: !t,
                [h.expandedProgressBarContainerSettingsPage]: t,
                [h.expandedProgressBarContainerVariant1]: !L && !t,
                [h.expandedProgressBarContainerVariant2]: L && !t,
                [h.allReferralsSentBorder]: k,
                [h.containerWithBanner]: !1
            }),
            children: [!1, y]
        })
    });
};
