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
    N = t(565138),
    A = t(404203),
    C = t(330181),
    m = t(374649),
    g = t(908951),
    h = t(255078),
    O = t(853872),
    p = t(171246),
    R = t(41959),
    x = t(650919),
    M = t(981631),
    f = t(689938),
    D = t(465553);
let L = (e) => {
        let { label: s, value: t, showInfoIcon: a, infoIconTooltipText: i } = e;
        return (0, n.jsxs)('div', {
            className: D.infoCard,
            children: [
                (0, n.jsxs)('div', {
                    className: D.infoCardLabelContainer,
                    children: [
                        (0, n.jsx)(_.Heading, {
                            variant: 'heading-deprecated-12/semibold',
                            className: D.infoCardLabel,
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
                                        className: D.infoCardIcon
                                    })
                            })
                    ]
                }),
                (0, n.jsx)(_.Heading, {
                    variant: 'heading-xl/semibold',
                    className: D.infoCardValue,
                    children: t
                })
            ]
        });
    },
    P = (e) => {
        let { subscription: s, disabled: t } = e,
            { analyticsLocations: a } = (0, T.ZP)(),
            [i] = (0, m.ED)({
                subscriptionId: s.id,
                renewal: !0,
                analyticsLocations: a,
                analyticsLocation: E.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
            });
        return (0, d.e7)([O.Z], () => O.Z.hasFetchedPaymentSources)
            ? null == i
                ? null
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(_.FormTitle, { children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL }),
                          (0, n.jsx)(g.Z, {
                              subscription: s,
                              currentInvoicePreview: i,
                              dropdownClassName: D.paymentSourceDropdown,
                              disabled: t
                          })
                      ]
                  })
            : (0, n.jsx)(_.Spinner, {});
    },
    b = (e) => {
        let { isCancelled: s, onCancelSubscriptionClick: t, isResubscribing: a, onResubscribeClick: i } = e;
        return (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(_.FormTitle, { children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_LABEL }),
                (0, n.jsx)('div', {
                    className: D.__invalid_rowButtons,
                    children: s
                        ? (0, n.jsx)(_.Button, {
                              onClick: i,
                              submitting: a,
                              children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_RESTART
                          })
                        : (0, n.jsx)(S.Z, {
                              label: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_MANAGE_OPTIONS_CANCEL,
                              onClick: t
                          })
                })
            ]
        });
    };
s.Z = (e) => {
    let { subscription: s } = e,
        { storeListing: i, groupListing: o, guild: d, expanded: E, handleToggleExpanded: S, subscriptionInfo: m, application: g } = (0, x.Z)(s),
        O = (0, I.Dt)(),
        [Z, v] = a.useState(!1),
        { analyticsLocations: j } = (0, T.ZP)();
    if (null == o || null == i || null == m) return null;
    let B = () => {
            l()(null != g, 'Application cannot be null'),
                (0, _.openModalLazy)(async () => {
                    let { default: e } = await t.e('6284').then(t.bind(t, 257514));
                    return (t) =>
                        (0, n.jsx)(e, {
                            application: g,
                            storeListing: i,
                            subscription: s,
                            guild: d,
                            ...t
                        });
                });
        },
        U = async () => {
            try {
                v(!0);
                let { subscription: e } = await u.pl(s, j);
                null != e &&
                    (0, _.openModalLazy)(async () => {
                        let { default: s } = await t.e('18879').then(t.bind(t, 535278));
                        return (t) =>
                            (0, n.jsx)(s, {
                                storeListing: i,
                                subscription: h.Z.createFromServer(e),
                                ...t
                            });
                    });
            } finally {
                v(!1);
            }
        },
        { isCancelled: G, isDeleted: F, isPastDue: y, subscriptionPlanPrice: V, subscribedSinceDate: Y, currentPeriodEndDate: k, currentPeriodEndLabel: w } = m,
        H = (0, p.KW)(i.skuFlags),
        W = (0, p.KK)(i.skuFlags),
        K = null == g || ((!W || null == d) && !H),
        z = () =>
            G || F
                ? (0, n.jsx)(_.TextBadge, { text: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCELED })
                : y
                  ? (0, n.jsx)(_.Tooltip, {
                        text: f.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING,
                        children: (e) =>
                            (0, n.jsx)('div', {
                                ...e,
                                children: (0, n.jsx)(_.TextBadge, {
                                    className: D.paymentDueBadge,
                                    text: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAST_DUE,
                                    color: c.Z.YELLOW_300
                                })
                            })
                    })
                  : null,
        Q = null;
    if (W) {
        var X;
        Q = (0, n.jsxs)(_.Text, {
            variant: 'text-sm/normal',
            className: D.tierName,
            children: [
                f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_IN_GUILD.format({ guildName: null !== (X = null == d ? void 0 : d.name) && void 0 !== X ? X : f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_GUILD_NAME_UNAVAILABLE }),
                null != d &&
                    (0, n.jsx)(N.Z, {
                        guild: d,
                        size: N.Z.Sizes.MINI,
                        className: D.guildIcon
                    })
            ]
        });
    } else
        H &&
            (Q = (0, n.jsx)(_.Text, {
                variant: 'text-sm/normal',
                className: D.tierName,
                children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION
            }));
    return (0, n.jsxs)('div', {
        className: D.container,
        children: [
            (0, n.jsx)(A.Z, {
                onClick: S,
                className: D.headerContainer,
                children: (e) => {
                    let { areaRef: s, handleStopPropagation: t } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            null != g &&
                                (0, n.jsx)(R.Z, {
                                    size: R.H.SMALL,
                                    className: D.applicationIcon,
                                    application: g,
                                    asset: i.thumbnail
                                }),
                            (0, n.jsxs)('div', {
                                className: D.headerTextContainer,
                                children: [
                                    (0, n.jsx)(_.Text, {
                                        variant: 'text-md/medium',
                                        className: D.applicationName,
                                        children: null != g ? g.name : f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
                                    }),
                                    (0, n.jsxs)('div', {
                                        className: D.headerSubtitleContainer,
                                        children: [Q, z()]
                                    })
                                ]
                            }),
                            (0, n.jsx)(_.Clickable, {
                                onClick: t(S),
                                'aria-label': f.Z.Messages.APPLICATION_SUBSCRIPTION_TOGGLE_SECTION_LABEL,
                                'aria-controls': O,
                                'aria-expanded': E,
                                focusProps: { ringTarget: s },
                                children: (0, n.jsx)(_.ChevronSmallDownIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: r()(D.arrowIcon, { [D.arrowIconExpanded]: E })
                                })
                            })
                        ]
                    });
                }
            }),
            E
                ? (0, n.jsxs)('div', {
                      id: O,
                      children: [
                          (0, n.jsx)('div', { className: D.divider }),
                          F
                              ? (0, n.jsx)(_.HelpMessage, {
                                    messageType: _.HelpMessageTypes.WARNING,
                                    className: D.deletedHelpMessage,
                                    children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_DELETED_WARNING
                                })
                              : null,
                          (0, n.jsx)(C.Z, {
                              groupListingId: o.id,
                              subscription: s,
                              className: D.changePlanNotice
                          }),
                          (0, n.jsxs)('div', {
                              className: D.subscriptionInfoCards,
                              children: [
                                  (0, n.jsx)(L, {
                                      label: w,
                                      value: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_CURRENT_PERIOD_END_DATE.format({ timestamp: k.getTime() })
                                  }),
                                  (0, n.jsx)(L, {
                                      label: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_PRICE,
                                      value: V
                                  }),
                                  (0, n.jsx)(L, {
                                      label: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE,
                                      value: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_INFO_SUBSCRIBED_SINCE_DATE.format({ timestamp: Y.getTime() })
                                  })
                              ]
                          }),
                          (0, n.jsx)(_.Spacer, { size: 16 }),
                          s.status === M.O0b.ACTIVE &&
                              (0, n.jsx)(P, {
                                  subscription: s,
                                  disabled: F
                              }),
                          !K &&
                              (0, n.jsx)(b, {
                                  isCancelled: G,
                                  onCancelSubscriptionClick: B,
                                  isResubscribing: Z,
                                  onResubscribeClick: U
                              })
                      ]
                  })
                : null
        ]
    });
};
