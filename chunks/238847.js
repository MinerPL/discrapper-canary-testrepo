t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(722770),
    d = t(442837),
    _ = t(481060),
    u = t(355467),
    E = t(100527),
    T = t(906732),
    S = t(878596),
    I = t(313201),
    N = t(218946),
    m = t(565138),
    C = t(404203),
    A = t(330181),
    g = t(374649),
    h = t(908951),
    O = t(255078),
    p = t(853872),
    R = t(171246),
    x = t(41959),
    f = t(650919),
    M = t(981631),
    D = t(689938),
    P = t(933361);
let L = (e) => {
        let { label: s, value: t, showInfoIcon: a, infoIconTooltipText: i } = e;
        return (0, n.jsxs)('div', {
            className: P.infoCard,
            children: [
                (0, n.jsxs)('div', {
                    className: P.infoCardLabelContainer,
                    children: [
                        (0, n.jsx)(_.Heading, {
                            variant: 'heading-deprecated-12/semibold',
                            className: P.infoCardLabel,
                            children: s
                        }),
                        a &&
                            (0, n.jsx)(_.Tooltip, {
                                text: i,
                                children: (e) =>
                                    (0, n.jsx)(_.CircleInformationIcon, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        ...e,
                                        className: P.infoCardIcon
                                    })
                            })
                    ]
                }),
                (0, n.jsx)(_.Heading, {
                    variant: 'heading-xl/semibold',
                    className: P.infoCardValue,
                    children: t
                })
            ]
        });
    },
    b = (e) => {
        let { subscription: s, disabled: t } = e,
            { analyticsLocations: a } = (0, T.ZP)(),
            [i] = (0, g.ED)({
                subscriptionId: s.id,
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: E.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            });
        return (0, d.e7)([p.Z], () => p.Z.hasFetchedPaymentSources)
            ? null == i
                ? null
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(_.FormTitle, { children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL }),
                          (0, n.jsx)(h.Z, {
                              subscription: s,
                              currentInvoicePreview: i,
                              dropdownClassName: P.paymentSourceDropdown,
                              disabled: t
                          })
                      ]
                  })
            : (0, n.jsx)(_.Spinner, {});
    },
    Z = (e) => {
        let { isCancelled: s, onCancelSubscriptionClick: t, isResubscribing: a, onResubscribeClick: i } = e;
        return (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(_.FormTitle, { children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL }),
                (0, n.jsx)('div', {
                    className: P.__invalid_rowButtons,
                    children: s
                        ? (0, n.jsx)(_.Button, {
                              onClick: i,
                              submitting: a,
                              children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
                          })
                        : (0, n.jsx)(S.Z, {
                              label: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
                              onClick: t
                          })
                })
            ]
        });
    };
s.Z = (e) => {
    let { subscription: s } = e,
        { listing: i, groupListing: o, guild: d, expanded: E, handleToggleExpanded: S, subscriptionInfo: g, application: h } = (0, f.Z)(s),
        p = (0, I.Dt)(),
        [v, j] = a.useState(!1),
        { analyticsLocations: B } = (0, T.ZP)();
    if (null == o || null == i || null == g) return null;
    let U = () => {
            l()(null != h, 'Application cannot be null'),
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await t.e('6284').then(t.bind(t, 257514));
                    return (t) =>
                        (0, n.jsx)(e, {
                            application: h,
                            listing: i,
                            subscription: s,
                            guild: d,
                            ...t
                        });
                });
        },
        G = async () => {
            try {
                j(!0);
                let { subscription: e } = await u.pl(s, B);
                null != e &&
                    (0, _.openModalLazy)(async () => {
                        let { default: s } = await t.e('18879').then(t.bind(t, 535278));
                        return (t) =>
                            (0, n.jsx)(s, {
                                listing: i,
                                subscription: O.Z.createFromServer(e),
                                ...t
                            });
                    });
            } finally {
                j(!1);
            }
        },
        { isCancelled: F, isDeleted: y, isPastDue: V, subscriptionPlanPrice: Y, subscribedSinceDate: w, currentPeriodEndDate: k, currentPeriodEndLabel: H } = g,
        W = (0, R.KW)(i.sku_flags),
        K = (0, R.KK)(i.sku_flags),
        z = i.soft_deleted || null == h || ((!K || null == d) && !W),
        Q = () =>
            F || y
                ? (0, n.jsx)(_.TextBadge, { text: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED })
                : V
                  ? (0, n.jsx)(_.Tooltip, {
                        text: D.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
                        children: (e) =>
                            (0, n.jsx)('div', {
                                ...e,
                                children: (0, n.jsx)(_.TextBadge, {
                                    className: P.paymentDueBadge,
                                    text: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
                                    color: c.Z.YELLOW_300
                                })
                            })
                    })
                  : null,
        X = null;
    if (K) {
        var q;
        X = (0, n.jsxs)(_.Text, {
            variant: 'text-sm/normal',
            className: P.tierName,
            children: [
                D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({ guildName: null !== (q = null == d ? void 0 : d.name) && void 0 !== q ? q : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE }),
                null != d &&
                    (0, n.jsx)(m.Z, {
                        guild: d,
                        size: m.Z.Sizes.MINI,
                        className: P.guildIcon
                    })
            ]
        });
    } else
        W &&
            (X = (0, n.jsx)(_.Text, {
                variant: 'text-sm/normal',
                className: P.tierName,
                children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
            }));
    return (0, n.jsxs)('div', {
        className: P.container,
        children: [
            (0, n.jsx)(C.Z, {
                onClick: S,
                className: P.headerContainer,
                children: (e) => {
                    let { areaRef: s, handleStopPropagation: t } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            null != h &&
                                (0, n.jsx)(x.Z, {
                                    size: x.H.SMALL,
                                    className: P.applicationIcon,
                                    application: h,
                                    asset: null != i.image_asset ? (0, N.m)(i.image_asset) : null
                                }),
                            (0, n.jsxs)('div', {
                                className: P.headerTextContainer,
                                children: [
                                    (0, n.jsx)(_.Text, {
                                        variant: 'text-md/medium',
                                        className: P.applicationName,
                                        children: null != h ? h.name : D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: P.headerSubtitleContainer,
                                        children: [X, Q()]
                                    })
                                ]
                            }),
                            (0, n.jsx)(_.Clickable, {
                                onClick: t(S),
                                'aria-label': D.Z.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
                                'aria-controls': p,
                                'aria-expanded': E,
                                focusProps: { ringTarget: s },
                                children: (0, n.jsx)(_.ChevronSmallDownIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: r()(P.arrowIcon, { [P.arrowIconExpanded]: E })
                                })
                            })
                        ]
                    });
                }
            }),
            E
                ? (0, n.jsxs)('div', {
                      id: p,
                      children: [
                          (0, n.jsx)('div', { className: P.divider }),
                          y
                              ? (0, n.jsx)(_.HelpMessage, {
                                    messageType: _.HelpMessageTypes.WARNING,
                                    className: P.deletedHelpMessage,
                                    children: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
                                })
                              : null,
                          (0, n.jsx)(A.Z, {
                              groupListingId: o.id,
                              subscription: s,
                              className: P.changePlanNotice
                          }),
                          (0, n.jsxs)('div', {
                              className: P.subscriptionInfoCards,
                              children: [
                                  (0, n.jsx)(L, {
                                      label: H,
                                      value: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({ timestamp: k.getTime() })
                                  }),
                                  (0, n.jsx)(L, {
                                      label: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
                                      value: Y
                                  }),
                                  (0, n.jsx)(L, {
                                      label: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
                                      value: D.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({ timestamp: w.getTime() })
                                  })
                              ]
                          }),
                          (0, n.jsx)(_.Spacer, { size: 16 }),
                          s.status === M.O0b.ACTIVE &&
                              (0, n.jsx)(b, {
                                  subscription: s,
                                  disabled: y
                              }),
                          !z &&
                              (0, n.jsx)(Z, {
                                  isCancelled: F,
                                  onCancelSubscriptionClick: U,
                                  isResubscribing: v,
                                  onResubscribeClick: G
                              })
                      ]
                  })
                : null
        ]
    });
};
