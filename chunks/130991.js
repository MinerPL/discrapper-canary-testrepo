t.d(s, {
    Z: function () {
        return M;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(269210),
    r = t(442837),
    o = t(481060),
    l = t(355467),
    c = t(100527),
    d = t(906732),
    _ = t(601911),
    u = t(812206),
    E = t(565138),
    T = t(374649),
    S = t(908951),
    I = t(255078),
    N = t(430824),
    m = t(509545),
    C = t(580130),
    A = t(55563),
    g = t(937615),
    h = t(488915),
    O = t(171246),
    p = t(889989),
    R = t(981631),
    x = t(689938),
    f = t(280819);
function M(e) {
    var s, t, a, i, l;
    let { subscription: I } = e,
        {
            app: p,
            appIcon: M,
            plan: v,
            listing: j,
            price: B,
            isGuildSubscription: U,
            subscriptionForGuild: G,
            sku: F
        } = (0, r.cj)(
            [C.Z, m.Z, h.Z, u.Z, N.Z, A.Z],
            () => {
                let e = C.Z.getForSubscription(I.id),
                    s = null != e && e.size > 0 ? Array.from(e)[0] : null,
                    t = null == s ? void 0 : s.applicationId,
                    n = I.planId,
                    a = m.Z.get(n),
                    i = null != t ? u.Z.getApplication(t) : null,
                    r = null != i ? (0, _.y)(i, 100) : null,
                    o = h.Z.getSubscriptionListingForPlan(n),
                    l = null != a ? (0, g.og)((0, g.T4)(a.price, a.currency), a.interval, a.intervalCount) : null,
                    c = null != o && (0, O.KK)(o.sku_flags),
                    d = c && null != s ? N.Z.getGuild(s.guildId) : void 0,
                    E = null != o ? A.Z.get(o.id) : null;
                return {
                    app: i,
                    appIcon: r,
                    plan: a,
                    listing: o,
                    price: l,
                    isGuildSubscription: c,
                    subscriptionForGuild: d,
                    sku: null != E ? E : void 0
                };
            },
            [I]
        ),
        y = null !== (t = null !== (s = null == j ? void 0 : j.soft_deleted) && void 0 !== s ? s : null == F ? void 0 : F.deleted) && void 0 !== t && t,
        V = null != F && (0, O.OL)(F),
        Y = (0, O.Jf)(I, F),
        w = I.status === R.O0b.PAST_DUE,
        { analyticsLocations: k } = (0, d.ZP)(),
        [H] = (0, T.ED)({
            subscriptionId: I.id,
            renewal: !0,
            analyticsLocations: k,
            analyticsLocation: c.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
        }),
        W = P(I.currentPeriodEnd);
    return (0, n.jsxs)('div', {
        className: f.wrapper,
        children: [
            (0, n.jsxs)('div', {
                className: f.header,
                children: [
                    (0, n.jsxs)('div', {
                        className: f.headerContent,
                        children: [
                            null != M &&
                                (0, n.jsx)(o.Image, {
                                    src: M.href,
                                    imageClassName: f.appIcon,
                                    width: 40,
                                    height: 40
                                }),
                            (0, n.jsxs)('div', {
                                children: [
                                    (0, n.jsx)(o.Heading, {
                                        variant: 'heading-md/semibold',
                                        children: null !== (a = null == p ? void 0 : p.name) && void 0 !== a ? a : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_APPLICATION_NAME_UNAVAILABLE
                                    }),
                                    (0, n.jsx)(o.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'header-secondary',
                                        children: null !== (i = null == v ? void 0 : v.name) && void 0 !== i ? i : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PLAN_NAME_UNAVAILABLE
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, n.jsx)('div', {
                        className: f.headerButtons,
                        children:
                            null != p &&
                            null != j &&
                            null != F &&
                            (0, n.jsx)(b, {
                                subscription: I,
                                app: p,
                                listing: j,
                                sku: F,
                                isCancelled: Y
                            })
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: f.content,
                children: [
                    Y &&
                        (0, n.jsx)(L, {
                            type: 'warning',
                            title: V ? x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_APP_CANCELLED.format({ subscriptionPeriodEnd: W }) : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_USER_CANCELLED.format({ subscriptionPeriodEnd: W })
                        }),
                    w &&
                        (0, n.jsx)(L, {
                            type: 'danger',
                            title: x.Z.Messages.APPLICATION_SUBSCRIPTION_USER_SUBSCRIPTION_PAST_DUE_WARNING
                        }),
                    (0, n.jsxs)('div', {
                        className: f.details,
                        children: [
                            (0, n.jsx)(D, {
                                title: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_TYPE,
                                content: U
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsxs)('span', {
                                                  className: f.subscriptionTypeRow,
                                                  children: [(0, n.jsx)(o.ServerIcon, { size: 'xs' }), x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SERVER_SUBSCRIPTION]
                                              }),
                                              null != G &&
                                                  (0, n.jsxs)('span', {
                                                      className: f.guildSubscriptionContentRow,
                                                      children: [
                                                          (0, n.jsx)(o.Text, {
                                                              variant: 'text-sm/normal',
                                                              color: 'text-muted',
                                                              children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_USED_IN.format({ guildName: G.name })
                                                          }),
                                                          (0, n.jsx)(E.Z, {
                                                              guild: G,
                                                              size: E.Z.Sizes.MINI
                                                          })
                                                      ]
                                                  })
                                          ]
                                      })
                                    : (0, n.jsxs)('span', {
                                          className: f.subscriptionTypeRow,
                                          children: [(0, n.jsx)(o.UserIcon, { size: 'xs' }), x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CARD_PERSONAL_SUBSCRIPTION]
                                      })
                            }),
                            null != B &&
                                (0, n.jsx)(D, {
                                    title: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PRICE,
                                    content: B
                                }),
                            (0, n.jsx)(D, {
                                title: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_START_DATE,
                                content: P(null !== (l = I.createdAt) && void 0 !== l ? l : I.currentPeriodStart)
                            }),
                            (0, n.jsx)(D, {
                                title: Y ? x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_END_DATE : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RENEWAL_DATE,
                                content: W
                            })
                        ]
                    }),
                    (0, n.jsxs)('div', {
                        className: f.payment,
                        children: [
                            (0, n.jsx)(o.FormTitle, { children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAYMENT_METHOD_LABEL }),
                            null != H &&
                                (0, n.jsx)(S.Z, {
                                    subscription: I,
                                    currentInvoicePreview: H,
                                    disabled: y || Y
                                })
                        ]
                    }),
                    null != p &&
                        (null == j ? void 0 : j.store_listing_benefits) != null &&
                        (0, n.jsx)(Z, {
                            appId: p.id,
                            listingBenefits: j.store_listing_benefits
                        })
                ]
            })
        ]
    });
}
function D(e) {
    let { title: s, content: t } = e;
    return (0, n.jsxs)('div', {
        className: f.row,
        children: [
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/medium',
                children: s
            }),
            (0, n.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: f.rowContent,
                children: t
            })
        ]
    });
}
function P(e) {
    return e.toLocaleDateString(void 0, { dateStyle: 'long' });
}
function L(e) {
    let { type: s, title: t } = e;
    return (0, n.jsx)(o.HelpMessage, {
        messageType: 'warning' === s ? o.HelpMessageTypes.WARNING : o.HelpMessageTypes.ERROR,
        children: (0, n.jsx)(o.Text, {
            variant: 'text-sm/normal',
            children: t
        })
    });
}
function b(e) {
    let { app: s, listing: i, sku: r, subscription: c, isCancelled: _, guild: u } = e,
        E = (0, O.OL)(r),
        { analyticsLocations: T } = (0, d.ZP)(),
        [S, N] = a.useState(!1),
        m = async () => {
            try {
                N(!0);
                let { subscription: e } = await (0, l.pl)(c, T);
                if (null == e) return;
                (0, o.openModalLazy)(async () => {
                    let { default: s } = await t.e('18879').then(t.bind(t, 535278));
                    return (t) =>
                        (0, n.jsx)(s, {
                            ...t,
                            listing: i,
                            subscription: I.Z.createFromServer(e)
                        });
                });
            } finally {
                N(!1);
            }
        };
    return E
        ? null
        : _
          ? (0, n.jsx)(o.Button, {
                color: o.Button.Colors.PRIMARY,
                size: o.Button.Sizes.SMALL,
                onClick: m,
                submitting: S,
                children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_RESUME_PLAN
            })
          : (0, n.jsx)(o.Button, {
                color: o.Button.Colors.CUSTOM,
                size: o.Button.Sizes.SMALL,
                className: f.secondaryBtn,
                onClick: () => {
                    (0, o.openModalLazy)(async () => {
                        let { default: e } = await t.e('6284').then(t.bind(t, 257514));
                        return (t) =>
                            (0, n.jsx)(e, {
                                ...t,
                                application: s,
                                listing: i,
                                subscription: c,
                                guild: u
                            });
                    });
                },
                children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_CANCEL_PLAN
            });
}
function Z(e) {
    let { appId: s, listingBenefits: t } = e,
        [r, l] = a.useReducer((e) => !e, !1),
        c = a.useMemo(
            () =>
                t.map((e) => ({
                    id: e.id,
                    title: e.name,
                    description: e.description,
                    icon: (0, p.n)(s, e.icon)
                })),
            [s, t]
        ),
        d = r ? o.ChevronSmallUpIcon : o.ChevronSmallDownIcon;
    return (0, n.jsxs)('div', {
        className: f.benefits,
        children: [
            (0, n.jsxs)('div', {
                className: f.benefitsHeader,
                children: [
                    r &&
                        (0, n.jsx)(o.Text, {
                            variant: 'text-sm/semibold',
                            children: x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SUBSCRIPTION_BENEFITS
                        }),
                    (0, n.jsxs)(o.Clickable, {
                        className: f.benefitsBtn,
                        onClick: l,
                        children: [
                            (0, n.jsx)(o.Text, {
                                variant: 'heading-sm/semibold',
                                tag: 'div',
                                color: 'currentColor',
                                children: r ? x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_HIDE_BENEFITS : x.Z.Messages.APPLICATION_MANAGE_SUBSCRIPTION_SHOW_BENEFITS
                            }),
                            (0, n.jsx)(d, {
                                size: 'sm',
                                color: 'currentColor'
                            })
                        ]
                    })
                ]
            }),
            r
                ? c.map((e) =>
                      (0, n.jsx)(
                          i.G,
                          {
                              name: e.title,
                              icon: e.icon,
                              description: e.description
                          },
                          e.id
                      )
                  )
                : null
        ]
    });
}
