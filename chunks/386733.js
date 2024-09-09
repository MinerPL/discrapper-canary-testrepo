var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(232567),
    d = n(100527),
    _ = n(906732),
    u = n(518950),
    E = n(598077),
    T = n(594174),
    I = n(626135),
    R = n(63063),
    g = n(281494),
    C = n(276444),
    N = n(520540),
    m = n(197115),
    p = n(119269),
    A = n(938736),
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
            c = (0, A.TW)('UserAvatarProgressBarUnit'),
            d = null != t,
            _ = d
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
            shouldShow: !d,
            tooltipContentClassName: h.unsentTooltipContent,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: i()({
                        [h.redeemedCircle]: c && (a === g.Fe.REDEEMED || a === g.Fe.CONVERTED),
                        [h.convertedCircleGlow]: c && a === g.Fe.CONVERTED,
                        [h.standardCircle]: c && (a === g.Fe.PENDING || null == a)
                    }),
                    children: (0, s.jsx)('div', {
                        className: c ? h.content : void 0,
                        children: (0, s.jsx)('div', {
                            className: h.userAvatarProgressBarUnit,
                            ...e,
                            children: _
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
    let t,
        r,
        { isInSettings: u = !1 } = e,
        x = (0, l.Wu)([C.Z], () => C.Z.getSentUserIds()),
        O = (0, l.e7)([C.Z], () => C.Z.getRecipientStatus()),
        P = (0, A.uv)('ReferralProgramProgressBar'),
        v = (0, A.TW)('ReferralProgramProgressBar'),
        L = (0, l.Wu)([T.default], () => x.map((e) => T.default.getUser(e)).filter((e) => null != e)),
        Z = a.useMemo(() => L.map((e) => new E.Z(e)), [L]),
        D = (0, l.e7)([C.Z], () => C.Z.getRefreshAt()),
        { subscriberHomeVariant: U } = N.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
        B = P === f.g2L.UNAPPLIED || P === f.g2L.QUALIFIED,
        j = U === N.p.VARIANT_2;
    a.useEffect(() => {
        x.forEach((e) => {
            (0, c.PR)(e);
        });
    }, [x]);
    let G = {
        redeemed: 0,
        converted: 0,
        sent: O.size
    };
    O.forEach((e) => {
        e === g.Fe.REDEEMED && G.redeemed++, e === g.Fe.CONVERTED && (G.redeemed++, G.converted++);
    });
    let y = G.sent === A.Q_,
        w = R.Z.getArticleURL(f.BhN.REFERRAL_PROGRAM),
        { analyticsLocations: H } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        k = a.useRef(null),
        F = (G.sent / A.Q_) * 100,
        V = !1;
    v && null != D && ((V = 0 < (t = Math.ceil((new Date(D).getTime() - new Date().getTime()) / 86400000)) && t < A.AV), (r = (100 * (A.AV - t)) / A.AV));
    let W = V && null != t,
        K = (0, s.jsxs)('div', {
            className: h.referralInfoContent,
            children: [
                (0, s.jsx)(p.Z, {
                    percentage: W ? 0 : F,
                    progressCircleVariation: p.Q.NITRO_LOGO,
                    iconClassName: i()({
                        [h.referralProgressBarIcon]: !u,
                        [h.referralProgressBarIconSettings]: u
                    })
                }),
                (0, s.jsxs)('div', {
                    className: h.expandedProgressBarContent,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            variant: u ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                            className: h.expandedProgressBarHeader,
                            children: (0, A.$s)({
                                referralIncentiveLifecycleState: P,
                                hasSentAll: y,
                                referralsStatuses: G
                            })
                        }),
                        W
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('div', {
                                          className: h.progressBar,
                                          children: (0, s.jsx)('div', {
                                              style: { width: ''.concat(r, '%') },
                                              className: h.fill
                                          })
                                      }),
                                      (0, s.jsx)(o.Heading, {
                                          variant: 'heading-sm/semibold',
                                          className: h.referralCountdownDays,
                                          children: S.Z.Messages.REFERRAL_INCENTIVE_COUNTDOWN_DAYS.format({ days: t })
                                      })
                                  ]
                              })
                            : (0, s.jsx)(b, {
                                  userRecords: Z,
                                  recipientStatus: O
                              }),
                        (0, s.jsx)(o.Text, {
                            variant: u ? 'text-sm/normal' : 'text-lg/medium',
                            children: (0, A.Hg)({
                                helpdeskArticle: w,
                                referralIncentiveLifecycleState: P,
                                referralsStatuses: G,
                                isWithinCountdownRange: V
                            })
                        }),
                        (0, s.jsxs)('div', {
                            className: i()(h.expandedProgressBarButtonContainer, { [h.expandedProgressBarButtonContainerLayout]: !u }),
                            children: [
                                !u &&
                                    !j &&
                                    (0, s.jsx)(m.Z, {
                                        color: o.ButtonColors.CUSTOM,
                                        buttonText: S.Z.Messages.GIFT_NITRO,
                                        className: i()(h.expandedProgressBarGiftingCTA, { [h.expandedProgressBarGiftingCTALayout]: !u }),
                                        look: o.ButtonLooks.OUTLINED,
                                        isGift: !0
                                    }),
                                !W &&
                                    (0, s.jsx)(o.ShinyButton, {
                                        className: h.expandedProgressBarSelectFriendsCTA,
                                        color: o.ButtonColors.CUSTOM,
                                        onClick: () => {
                                            I.default.track(f.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: H }),
                                                (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                    return (t) =>
                                                        (0, s.jsx)(e, {
                                                            ...t,
                                                            sourceAnalyticsLocations: H
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
                                                y ? S.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : S.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
                                            ]
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        }),
        Y = x.length === A.Q_,
        z = G.redeemed === A.Q_;
    return (0, s.jsx)(_.Gt, {
        value: H,
        children: (0, s.jsx)('div', {
            className: i()({
                [h.containerWithGlowWithoutBanner]: !W && z && !B,
                [h.containerWithGlowWithBanner]: !W && z && B,
                [h.containerWithoutGlow]: W || !z,
                [h.containerWithMargins]: !u,
                [h.marginWithBanner]: B,
                [h.containerWithGlowOnSettingsPage]: !W && z && u
            }),
            children: (0, s.jsxs)('div', {
                ref: k,
                className: i()({
                    [h.expandedProgressBarContainer]: !u,
                    [h.expandedProgressBarContainerSettingsPage]: u,
                    [h.expandedProgressBarContainerVariant1]: !j && !u,
                    [h.expandedProgressBarContainerVariant2]: j && !u,
                    [h.allReferralsSentBorder]: !W && z,
                    [h.containerWithBanner]: !W && B
                }),
                children: [
                    B &&
                        !W &&
                        (0, s.jsx)('div', {
                            className: i()(h.banner, {
                                [h.bannerWithContainerOutline]: Y,
                                [h.settingsBanner]: u && !Y,
                                [h.settingsBannerAllRedeemed]: u && Y
                            }),
                            children: (0, s.jsx)(o.Heading, {
                                color: 'always-white',
                                variant: 'heading-md/extrabold',
                                children: S.Z.Messages.REFERRAL_INCENTIVE_YOU_EARNED_DISCOUNT.format({
                                    discountRate: A.Nq,
                                    subscriptionInterval: S.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                                })
                            })
                        }),
                    K
                ]
            })
        })
    });
};
