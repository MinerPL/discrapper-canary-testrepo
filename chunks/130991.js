n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(561537),
    l = n(269210),
    a = n(442837),
    o = n(481060),
    c = n(355467),
    d = n(100527),
    u = n(906732),
    m = n(601911),
    h = n(283836),
    g = n(887818),
    p = n(728345),
    x = n(565138),
    S = n(374649),
    T = n(908951),
    C = n(255078),
    _ = n(430824),
    E = n(509545),
    f = n(55563),
    I = n(551428),
    N = n(937615),
    A = n(171246),
    b = n(889989),
    v = n(547283),
    j = n(981631),
    O = n(388032),
    R = n(73282);
function P(e) {
    var t, n, l, c, h;
    let { subscription: g, navigateToSwitchPlan: C } = e,
        b = null === (t = g.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        {
            appId: v,
            plan: P,
            storeListing: F,
            price: M,
            isGuildSubscription: k,
            subscriptionForGuild: w,
            sku: U
        } = (0, a.cj)(
            [E.Z, f.Z, I.Z, _.Z],
            () => {
                let e = g.planId,
                    t = E.Z.get(e),
                    n = null != t ? f.Z.get(t.skuId) : null,
                    i = null == n ? void 0 : n.applicationId,
                    s = null != t ? I.Z.getForSKU(t.skuId) : null,
                    r = null != t ? (0, N.og)((0, N.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
                    l = null != s && (0, A.KK)(s.skuFlags),
                    a = l && null != b ? _.Z.getGuild(b) : void 0;
                return {
                    appId: i,
                    isGuildSubscription: l,
                    plan: t,
                    price: r,
                    sku: null != n ? n : void 0,
                    storeListing: s,
                    subscriptionForGuild: a
                };
            },
            [b, g.planId]
        ),
        { data: V } = (0, p.IX)(v),
        G = s.useMemo(() => (null != V ? (0, m.y)(V, 100) : null), [V]),
        Y = null !== (n = null == U ? void 0 : U.deleted) && void 0 !== n && n,
        H = null != U && (0, A.OL)(U),
        z = (0, A.Jf)(g, U),
        W = g.status === j.O0b.PAST_DUE,
        { analyticsLocations: K } = (0, u.ZP)(),
        [q] = (0, S.ED)({
            subscriptionId: g.id,
            renewal: !0,
            analyticsLocations: K,
            analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        Q = y(g.currentPeriodEnd);
    return (0, i.jsxs)(r.l, {
        header: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: R.headerContent,
                    children: [
                        null != G &&
                            (0, i.jsx)(o.Image, {
                                src: G.href,
                                imageClassName: R.appIcon,
                                width: 40,
                                height: 40
                            }),
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: null !== (l = null == V ? void 0 : V.name) && void 0 !== l ? l : O.intl.string(O.t['7kqy7e'])
                                }),
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'header-secondary',
                                    children: null !== (c = null == P ? void 0 : P.name) && void 0 !== c ? c : O.intl.string(O.t.sqkbMD)
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: R.headerButtons,
                    children:
                        null != V &&
                        null != F &&
                        null != U &&
                        (0, i.jsx)(L, {
                            subscription: g,
                            app: V,
                            sku: U,
                            storeListing: F,
                            isCancelled: z,
                            navigateToSwitchPlan: C
                        })
                })
            ]
        }),
        children: [
            z &&
                (0, i.jsx)(B, {
                    type: 'warning',
                    title: H ? O.intl.formatToPlainString(O.t.QOnM19, { subscriptionPeriodEnd: Q }) : O.intl.formatToPlainString(O.t.HOaZu7, { subscriptionPeriodEnd: Q })
                }),
            W &&
                (0, i.jsx)(B, {
                    type: 'danger',
                    title: O.intl.string(O.t.fvOqBg)
                }),
            (0, i.jsxs)('div', {
                className: R.details,
                children: [
                    (0, i.jsx)(D, {
                        title: O.intl.string(O.t['5D/KEB']),
                        content: k
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsxs)('span', {
                                          className: R.subscriptionTypeRow,
                                          children: [(0, i.jsx)(o.ServerIcon, { size: 'xs' }), O.intl.string(O.t.QjL3vr)]
                                      }),
                                      null != w &&
                                          (0, i.jsxs)('span', {
                                              className: R.guildSubscriptionContentRow,
                                              children: [
                                                  (0, i.jsx)(o.Text, {
                                                      variant: 'text-sm/normal',
                                                      color: 'text-muted',
                                                      children: O.intl.format(O.t['7ZD8p6'], { guildName: w.name })
                                                  }),
                                                  (0, i.jsx)(x.Z, {
                                                      guild: w,
                                                      size: x.Z.Sizes.MINI
                                                  })
                                              ]
                                          })
                                  ]
                              })
                            : (0, i.jsxs)('span', {
                                  className: R.subscriptionTypeRow,
                                  children: [(0, i.jsx)(o.UserIcon, { size: 'xs' }), O.intl.string(O.t['6anEVl'])]
                              })
                    }),
                    null != M &&
                        (0, i.jsx)(D, {
                            title: O.intl.string(O.t.KI7ER0),
                            content: M
                        }),
                    (0, i.jsx)(D, {
                        title: O.intl.string(O.t.dnUzb2),
                        content: y(null !== (h = g.createdAt) && void 0 !== h ? h : g.currentPeriodStart)
                    }),
                    (0, i.jsx)(D, {
                        title: z ? O.intl.string(O.t.enxcAg) : O.intl.string(O.t['Ms+6Zm']),
                        content: Q
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: R.payment,
                children: [
                    (0, i.jsx)(o.FormTitle, { children: O.intl.string(O.t.azZaZW) }),
                    null != q &&
                        (0, i.jsx)(T.Z, {
                            subscription: g,
                            currentInvoicePreview: q,
                            disabled: Y || z
                        })
                ]
            }),
            null != V &&
                (null == F ? void 0 : F.benefits) != null &&
                F.benefits.length > 0 &&
                (0, i.jsx)(Z, {
                    appId: V.id,
                    listingBenefits: F.benefits
                })
        ]
    });
}
function D(e) {
    let { title: t, content: n } = e;
    return (0, i.jsxs)('div', {
        className: R.row,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                children: t
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: R.rowContent,
                children: n
            })
        ]
    });
}
function y(e) {
    return e.toLocaleDateString(void 0, { dateStyle: 'long' });
}
function B(e) {
    let { type: t, title: n } = e;
    return (0, i.jsx)(o.HelpMessage, {
        messageType: 'warning' === t ? o.HelpMessageTypes.WARNING : o.HelpMessageTypes.ERROR,
        className: R.noticeBanner,
        children: (0, i.jsx)(o.Text, {
            variant: 'text-sm/normal',
            children: n
        })
    });
}
function L(e) {
    let { app: t, storeListing: r, sku: l, subscription: d, isCancelled: m, guild: g, navigateToSwitchPlan: p } = e,
        x = (0, A.OL)(l),
        { analyticsLocations: S } = (0, u.ZP)(),
        [T, _] = s.useState(!1),
        E = (0, h.q)(t.id),
        I = (0, a.e7)([f.Z], () => f.Z.getParentSKU(r.skuId), [r.skuId]),
        N = s.useMemo(() => (null == I ? [] : (0, v.$)(r.id, I, E.subscriptions)), [r.id, E, I]),
        b = 0 !== N.length,
        j = async () => {
            try {
                _(!0);
                let { subscription: e } = await (0, c.pl)(d, S);
                if (null == e) return;
                (0, o.openModalLazy)(async () => {
                    let { default: t } = await n.e('18879').then(n.bind(n, 535278));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            storeListing: r,
                            subscription: C.Z.createFromServer(e)
                        });
                });
            } finally {
                _(!1);
            }
        };
    return (0, i.jsxs)('div', {
        className: R.managementBtns,
        children: [
            x
                ? null
                : m
                  ? (0, i.jsx)(o.Button, {
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        onClick: j,
                        submitting: T,
                        children: O.intl.string(O.t.QtMnkZ)
                    })
                  : (0, i.jsx)(o.Button, {
                        color: o.Button.Colors.CUSTOM,
                        size: o.Button.Sizes.SMALL,
                        className: R.secondaryBtn,
                        onClick: () => {
                            (0, o.openModalLazy)(async () => {
                                let { default: e } = await n.e('6284').then(n.bind(n, 257514));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        application: t,
                                        storeListing: r,
                                        subscription: d,
                                        guild: g
                                    });
                            });
                        },
                        children: O.intl.string(O.t['E8G/tr'])
                    }),
            b &&
                null != I &&
                (0, i.jsx)(o.Button, {
                    color: o.Button.Colors.BRAND,
                    size: o.Button.Sizes.SMALL,
                    onClick: () => {
                        p({
                            currentSubscription: d,
                            alternativeListings: N,
                            app: t,
                            bundleSku: I,
                            currentListing: r
                        });
                    },
                    children: O.intl.string(O.t.R74ZBQ)
                })
        ]
    });
}
function Z(e) {
    let { appId: t, listingBenefits: n } = e;
    return (0, i.jsx)(g.Z, {
        children: (e) =>
            (0, i.jsxs)('div', {
                className: R.benefits,
                children: [
                    (0, i.jsxs)('div', {
                        className: R.benefitsHeader,
                        children: [
                            e &&
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-sm/semibold',
                                    children: O.intl.string(O.t['mORL6+'])
                                }),
                            (0, i.jsx)(g.Z.Toggle, {
                                className: R.benefitsBtn,
                                text: e ? O.intl.string(O.t.gsbFAw) : O.intl.string(O.t.Iwjfxc)
                            })
                        ]
                    }),
                    e
                        ? n.map((e) => {
                              let { id: n, name: s, description: r, icon: a } = e;
                              return (0, i.jsx)(
                                  l.G,
                                  {
                                      name: s,
                                      icon: (0, b.n)(t, a),
                                      description: r
                                  },
                                  n
                              );
                          })
                        : null
                ]
            })
    });
}
