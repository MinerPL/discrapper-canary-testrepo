t.d(s, {
    Z: function () {
        return L;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(561537),
    r = t(269210),
    o = t(442837),
    l = t(481060),
    c = t(355467),
    d = t(100527),
    _ = t(906732),
    u = t(601911),
    E = t(283836),
    T = t(728345),
    S = t(565138),
    I = t(374649),
    N = t(908951),
    A = t(255078),
    C = t(430824),
    m = t(509545),
    g = t(55563),
    h = t(551428),
    O = t(937615),
    p = t(171246),
    R = t(889989),
    x = t(547283),
    M = t(981631),
    f = t(689938),
    D = t(73282);
function L(e) {
    var s, t, r, c, E;
    let { subscription: A, navigateToSwitchPlan: R } = e,
        x = null === (s = A.metadata) || void 0 === s ? void 0 : s.application_subscription_guild_id,
        {
            appId: L,
            plan: B,
            storeListing: U,
            price: G,
            isGuildSubscription: F,
            subscriptionForGuild: y,
            sku: V
        } = (0, o.cj)(
            [m.Z, g.Z, h.Z, C.Z],
            () => {
                let e = A.planId,
                    s = m.Z.get(e),
                    t = null != s ? g.Z.get(s.skuId) : null,
                    n = null == t ? void 0 : t.applicationId,
                    a = null != s ? h.Z.getForSKU(s.skuId) : null,
                    i = null != s ? (0, O.og)((0, O.T4)(s.price, s.currency), s.interval, s.intervalCount) : null,
                    r = null != a && (0, p.KK)(a.skuFlags),
                    o = r && null != x ? C.Z.getGuild(x) : void 0;
                return {
                    appId: n,
                    isGuildSubscription: r,
                    plan: s,
                    price: i,
                    sku: null != t ? t : void 0,
                    storeListing: a,
                    subscriptionForGuild: o
                };
            },
            [x, A.planId]
        ),
        { data: Y } = (0, T.IX)(L),
        k = a.useMemo(() => (null != Y ? (0, u.y)(Y, 100) : null), [Y]),
        w = null !== (t = null == V ? void 0 : V.deleted) && void 0 !== t && t,
        H = null != V && (0, p.OL)(V),
        W = (0, p.Jf)(A, V),
        K = A.status === M.O0b.PAST_DUE,
        { analyticsLocations: z } = (0, _.ZP)(),
        [Q] = (0, I.ED)({
            subscriptionId: A.id,
            renewal: !0,
            analyticsLocations: z,
            analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        X = b(A.currentPeriodEnd);
    return (0, n.jsxs)(i.l, {
        header: (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)('div', {
                    className: D.headerContent,
                    children: [
                        null != k &&
                            (0, n.jsx)(l.Image, {
                                src: k.href,
                                imageClassName: D.appIcon,
                                width: 40,
                                height: 40
                            }),
                        (0, n.jsxs)('div', {
                            children: [
                                (0, n.jsx)(l.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: null !== (r = null == Y ? void 0 : Y.name) && void 0 !== r ? r : f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
                                }),
                                (0, n.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: null !== (c = null == B ? void 0 : B.name) && void 0 !== c ? c : f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PLAN_NAME_UNAVAILABLE
                                })
                            ]
                        })
                    ]
                }),
                (0, n.jsx)('div', {
                    className: D.headerButtons,
                    children:
                        null != Y &&
                        null != U &&
                        null != V &&
                        (0, n.jsx)(v, {
                            subscription: A,
                            app: Y,
                            sku: V,
                            storeListing: U,
                            isCancelled: W,
                            navigateToSwitchPlan: R
                        })
                })
            ]
        }),
        children: [
            W &&
                (0, n.jsx)(Z, {
                    type: 'warning',
                    title: H ? f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_APP_CANCELLED.format({ subscriptionPeriodEnd: X }) : f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_USER_CANCELLED.format({ subscriptionPeriodEnd: X })
                }),
            K &&
                (0, n.jsx)(Z, {
                    type: 'danger',
                    title: f.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING
                }),
            (0, n.jsxs)('div', {
                className: D.details,
                children: [
                    (0, n.jsx)(P, {
                        title: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_TYPE,
                        content: F
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsxs)('span', {
                                          className: D.subscriptionTypeRow,
                                          children: [(0, n.jsx)(l.ServerIcon, { size: 'xs' }), f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SERVER_SUBSCRIPTION]
                                      }),
                                      null != y &&
                                          (0, n.jsxs)('span', {
                                              className: D.guildSubscriptionContentRow,
                                              children: [
                                                  (0, n.jsx)(l.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_USED_IN.format({ guildName: y.name })
                                                  }),
                                                  (0, n.jsx)(S.Z, {
                                                      guild: y,
                                                      size: S.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, n.jsxs)('span', {
                                  className: D.subscriptionTypeRow,
                                  children: [(0, n.jsx)(l.UserIcon, { size: 'xs' }), f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION]
                              })
                    }),
                    null != G &&
                        (0, n.jsx)(P, {
                            title: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PRICE,
                            content: G
                        }),
                    (0, n.jsx)(P, {
                        title: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_START_DATE,
                        content: b(null !== (E = A.createdAt) && void 0 !== E ? E : A.currentPeriodStart)
                    }),
                    (0, n.jsx)(P, {
                        title: W ? f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_END_DATE : f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RENEWAL_DATE,
                        content: X
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: D.payment,
                children: [
                    (0, n.jsx)(l.FormTitle, { children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL }),
                    null != Q &&
                        (0, n.jsx)(N.Z, {
                            subscription: A,
                            currentInvoicePreview: Q,
                            disabled: w || W
                        })
                ]
            }),
            null != Y &&
                (null == U ? void 0 : U.benefits) != null &&
                U.benefits.length > 0 &&
                (0, n.jsx)(j, {
                    appId: Y.id,
                    listingBenefits: U.benefits
                })
        ]
    });
}
function P(e) {
    let { title: s, content: t } = e;
    return (0, n.jsxs)('div', {
        className: D.row,
        children: [
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                children: s
            }),
            (0, n.jsx)(l.Text, {
                variant: 'text-sm/medium',
                className: D.rowContent,
                children: t
            })
        ]
    });
}
function b(e) {
    return e.toLocaleDateString(void 0, { dateStyle: 'long' });
}
function Z(e) {
    let { type: s, title: t } = e;
    return (0, n.jsx)(l.HelpMessage, {
        messageType: 'warning' === s ? l.HelpMessageTypes.WARNING : l.HelpMessageTypes.ERROR,
        className: D.noticeBanner,
        children: (0, n.jsx)(l.Text, {
            variant: 'text-sm/normal',
            children: t
        })
    });
}
function v(e) {
    let { app: s, storeListing: i, sku: r, subscription: d, isCancelled: u, guild: T, navigateToSwitchPlan: S } = e,
        I = (0, p.OL)(r),
        { analyticsLocations: N } = (0, _.ZP)(),
        [C, m] = a.useState(!1),
        h = (0, E.q)(s.id),
        O = (0, o.e7)([g.Z], () => g.Z.getParentSKU(i.skuId), [i.skuId]),
        R = a.useMemo(() => (null == O ? [] : (0, x.$)(i.id, O, h)), [i.id, h, O]),
        M = 0 !== R.length,
        L = async () => {
            try {
                m(!0);
                let { subscription: e } = await (0, c.pl)(d, N);
                if (null == e) return;
                (0, l.openModalLazy)(async () => {
                    let { default: s } = await t.e('18879').then(t.bind(t, 535278));
                    return (t) =>
                        (0, n.jsx)(s, {
                            ...t,
                            storeListing: i,
                            subscription: A.Z.createFromServer(e)
                        });
                });
            } finally {
                m(!1);
            }
        };
    return (0, n.jsxs)('div', {
        className: D.managementBtns,
        children: [
            I
                ? null
                : u
                  ? (0, n.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        size: l.Button.Sizes.SMALL,
                        onClick: L,
                        submitting: C,
                        children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RESUME_PLAN
                    })
                  : (0, n.jsx)(l.Button, {
                        color: l.Button.Colors.CUSTOM,
                        size: l.Button.Sizes.SMALL,
                        className: D.secondaryBtn,
                        onClick: () => {
                            (0, l.openModalLazy)(async () => {
                                let { default: e } = await t.e('6284').then(t.bind(t, 257514));
                                return (t) =>
                                    (0, n.jsx)(e, {
                                        ...t,
                                        application: s,
                                        storeListing: i,
                                        subscription: d,
                                        guild: T
                                    });
                            });
                        },
                        children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCEL_PLAN
                    }),
            M &&
                null != O &&
                (0, n.jsx)(l.Button, {
                    color: l.Button.Colors.BRAND,
                    size: l.Button.Sizes.SMALL,
                    onClick: () => {
                        S({
                            currentSubscription: d,
                            alternativeListings: R,
                            app: s,
                            bundleSku: O,
                            currentListing: i
                        });
                    },
                    children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SWITCH_PLAN
                })
        ]
    });
}
function j(e) {
    let { appId: s, listingBenefits: t } = e,
        [i, o] = a.useReducer((e) => !e, !1),
        c = i ? l.ChevronSmallUpIcon : l.ChevronSmallDownIcon;
    return (0, n.jsxs)('div', {
        className: D.benefits,
        children: [
            (0, n.jsxs)('div', {
                className: D.benefitsHeader,
                children: [
                    i &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-sm/semibold',
                            children: f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_BENEFITS
                        }),
                    (0, n.jsxs)(l.Clickable, {
                        className: D.benefitsBtn,
                        onClick: o,
                        children: [
                            (0, n.jsx)(l.Text, {
                                variant: 'heading-sm/semibold',
                                tag: 'div',
                                color: 'currentColor',
                                children: i ? f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_HIDE_BENEFITS : f.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SHOW_BENEFITS
                            }),
                            (0, n.jsx)(c, {
                                size: 'sm',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            }),
            i
                ? t.map((e) => {
                      let { id: t, name: a, description: i, icon: o } = e;
                      return (0, n.jsx)(
                          r.G,
                          {
                              name: a,
                              icon: (0, R.n)(s, o),
                              description: i
                          },
                          t
                      );
                  })
                : null
        ]
    });
}
