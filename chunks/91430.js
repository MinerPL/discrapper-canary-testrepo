t.d(s, {
    MM: function () {
        return V;
    },
    Yn: function () {
        return k;
    },
    ZP: function () {
        return H;
    },
    eS: function () {
        return w;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(913527),
    d = t.n(c),
    _ = t(442837),
    u = t(692547),
    E = t(481060),
    T = t(230711),
    S = t(100527),
    I = t(906732),
    N = t(17894),
    m = t(600164),
    C = t(925329),
    A = t(963249),
    g = t(301766),
    h = t(594174),
    O = t(626135),
    p = t(63063),
    R = t(74538),
    x = t(212895),
    f = t(374649),
    M = t(160913),
    D = t(987997),
    P = t(393411),
    L = t(908951),
    b = t(592889),
    Z = t(981631),
    v = t(689938),
    j = t(653869);
function B(e) {
    let s,
        { subscription: t, renewalInvoicePreview: a, fromStandaloneBillingPage: i = !0, className: o } = e,
        c = (0, _.e7)([h.default], () => {
            let e = h.default.getCurrentUser();
            return l()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, R.uV)(t.additionalPlans)) return null;
    let { status: d } = t,
        u = (0, R.v6)(t);
    if (u) s = j.guildBoostingSubscriptionRowCanceled;
    else
        switch (d) {
            case Z.O0b.PAST_DUE:
            case Z.O0b.ACCOUNT_HOLD:
            case Z.O0b.BILLING_RETRY:
                s = j.guildBoostingSubscriptionRowFailedPayment;
                break;
            case Z.O0b.PAUSE_PENDING:
            case Z.O0b.PAUSED:
                s = j.guildBoostingSubscriptionRowPaused;
                break;
            default:
                s = j.guildBoostingSubscriptionRowActive;
        }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)('div', {
                className: r()(s, o),
                children: [
                    (0, n.jsx)('div', { className: j.guildBoostingSubscriptionRowBackground }),
                    (0, n.jsx)('div', { className: j.guildBoostingImage }),
                    (0, n.jsxs)('div', {
                        className: j.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, n.jsx)('div', { className: r()(j.guildBoostingWordmark, { [j.canceled]: u }) }),
                            (0, n.jsx)('div', {
                                children: (0, R.bt)({
                                    subscription: t,
                                    renewalInvoicePreview: a,
                                    user: c
                                })
                            })
                        ]
                    }),
                    i &&
                        (0, n.jsx)(D.Z, {
                            color: E.Button.Colors.BRAND,
                            onClick: () => T.Z.open(Z.oAB.GUILD_BOOSTING),
                            children: v.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_MANAGE_YOUR_SUBSCRIPTIONS
                        })
                ]
            }),
            !i &&
                (0, n.jsx)(E.Text, {
                    className: j.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: v.Z.Messages.GUILD_BOOSTING_MANAGEMENT_OPEN_DESKTOP_APP.format({ openAppHook: () => (0, N.Z)('app') })
                })
        ]
    });
}
function U() {
    return (
        a.useEffect(() => {
            O.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, n.jsxs)('div', {
            className: j.paymentBanner,
            children: [
                (0, n.jsx)(E.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: j.paymentBannerIcon,
                    color: u.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, n.jsx)(E.Text, {
                    className: j.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: v.Z.Messages.MISSING_PAYMENT_METHOD_BANNER
                })
            ]
        })
    );
}
function G() {
    return (
        a.useEffect(() => {
            O.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, n.jsxs)('div', {
            className: j.paymentBanner,
            children: [
                (0, n.jsx)(E.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: j.paymentBannerIcon,
                    color: u.Z.unsafe_rawColors.RED_360.css
                }),
                (0, n.jsx)(E.Text, {
                    className: j.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: v.Z.Messages.INVALID_PAYMENT_METHOD_BANNER
                })
            ]
        })
    );
}
function F(e) {
    let { daysPastDue: s, subscription: t, openInvoiceId: i } = e,
        { analyticsLocations: r } = (0, I.ZP)(S.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        a.useEffect(() => {
            O.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, n.jsxs)('div', {
            className: j.paymentBanner,
            children: [
                (0, n.jsx)(E.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: j.paymentBannerIcon,
                    color: u.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, n.jsx)(E.Text, {
                    className: j.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: v.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT.format({
                        daysPastDue: s,
                        paymentModalRedirect: () => {
                            (0, A.Z)({
                                initialPlanId: t.planIdFromItems,
                                openInvoiceId: i,
                                analyticsLocations: r
                            });
                        }
                    })
                })
            ]
        })
    );
}
function y(e) {
    let { subscription: s, renewalInvoicePreview: t, className: a } = e;
    return (0, n.jsxs)('div', {
        className: r()(j.billingInformation, a),
        children: [
            (0, n.jsx)(E.FormTitle, {
                tag: 'h3',
                className: j.detailBlockHeader,
                children: v.Z.Messages.PREMIUM_SETTINGS_BILLING_INFO
            }),
            (0, n.jsx)('div', { children: R.ZP.getBillingInformationString(s, t) })
        ]
    });
}
function V() {
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsx)(E.FormTitle, {
                className: j.sectionTitle,
                tag: 'h1',
                children: v.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
            }),
            (0, n.jsx)('p', {
                className: j.sectionDescription,
                children: v.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
            }),
            (0, n.jsx)(E.Card, {
                className: j.noItemsCard,
                type: E.Card.Types.CUSTOM,
                children: (0, n.jsxs)(m.Z, {
                    align: m.Z.Align.CENTER,
                    children: [
                        (0, n.jsx)(C.Z, {
                            game: null,
                            size: C.Z.Sizes.SMALL,
                            className: j.noItemsIcon
                        }),
                        (0, n.jsx)('span', {
                            className: j.cardText,
                            children: v.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTIONS
                        })
                    ]
                })
            })
        ]
    });
}
function Y(e) {
    let { subscription: s, analyticsLocation: t, paymentSource: a, busy: i, fromStandaloneBillingPage: o, showInvalidPaymentMethod: l, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: _ } = e,
        { analyticsLocations: u } = (0, I.ZP)(S.Z.SUBSCRIPTION_DETAILS),
        T =
            null != d
                ? {}
                : {
                      subscriptionId: s.id,
                      renewal: !0,
                      analyticsLocations: u,
                      analyticsLocation: t
                  },
        [N] = (0, f.ED)(T);
    N = null != d ? d : N;
    let m =
            null != _
                ? {}
                : {
                      subscriptionId: s.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: u,
                      analyticsLocation: t
                  },
        [C] = (0, f.ED)(m);
    return ((C = null != _ ? _ : C), null == N || null == C)
        ? (0, n.jsx)(E.Spinner, {})
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsxs)('div', {
                      className: j.subscriptionRows,
                      children: [
                          (0, n.jsx)(P.Z, {
                              subscription: s,
                              renewalInvoicePreview: N,
                              paymentSource: a,
                              busy: i,
                              analyticsLocation: t
                          }),
                          (0, n.jsx)(B, {
                              subscription: s,
                              renewalInvoicePreview: N,
                              fromStandaloneBillingPage: o,
                              className: j.guildSubscriptionRow
                          })
                      ]
                  }),
                  (0, n.jsx)('div', {
                      children: (0, n.jsx)(E.HeadingLevel, {
                          component: (0, n.jsx)(E.FormTitle, {
                              tag: 'h5',
                              children: v.Z.Messages.BILLING_STEP_PAYMENT
                          }),
                          children: (0, n.jsxs)('div', {
                              className: j.details,
                              children: [
                                  (0, n.jsx)(y, {
                                      subscription: s,
                                      renewalInvoicePreview: C,
                                      className: j.detailsBlock
                                  }),
                                  (0, n.jsxs)('div', {
                                      className: r()(j.detailsBlock, { [j.redBorder]: l }),
                                      children: [
                                          (0, n.jsx)(E.FormTitle, {
                                              tag: 'h3',
                                              className: j.detailBlockHeader,
                                              children: s.isPurchasedExternally && null != s.paymentGateway ? v.Z.Messages.BILLING_MANAGED_BY_PAYMENT_GATEWAY.format({ paymentGatewayName: Z.Vzj[s.paymentGateway] }) : v.Z.Messages.BILLING_PAY_FOR_IT_WITH
                                          }),
                                          (0, n.jsx)(L.Z, {
                                              subscription: s,
                                              onPaymentSourceAdded: x.i1,
                                              highlightAddPaymentMethodButton: c || l,
                                              analyticsLocation: t,
                                              currentInvoicePreview: N,
                                              dropdownClassName: j.paymentDropdown
                                          })
                                      ]
                                  })
                              ]
                          })
                      })
                  })
              ]
          });
}
let w = new Set([Z.O0b.ACTIVE, Z.O0b.PAST_DUE, Z.O0b.CANCELED, Z.O0b.PAUSE_PENDING, Z.O0b.PAUSED]);
function k() {
    return (
        a.useEffect(() => {
            O.default.track(Z.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, n.jsxs)('div', {
            className: j.duplicateSubscriptionsBanner,
            children: [
                (0, n.jsx)(E.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: u.Z.unsafe_rawColors.RED_360.css
                }),
                (0, n.jsx)(E.Text, {
                    className: j.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: v.Z.Messages.DUPLICATE_SUBSCRIPTIONS_BANNER.format({ helpCenterLink: p.Z.getArticleURL(Z.BhN.NITRO) })
                })
            ]
        })
    );
}
function H(e) {
    var s;
    let t,
        { subscription: a, subscriptions: i, paymentSource: r, busy: o, fromStandaloneBillingPage: l = !0, analyticsLocation: c } = e;
    null != i && null != i[0] && (a = i[0]);
    let { analyticsLocations: u } = (0, I.ZP)(S.Z.SUBSCRIPTION_DETAILS),
        T = null != i ? i.slice(1) : [],
        [N] = (0, f.ED)({
            subscriptionId: a.id,
            renewal: !0,
            analyticsLocations: u,
            analyticsLocation: c
        }),
        [m] = (0, f.ED)({
            subscriptionId: a.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: u,
            analyticsLocation: c
        }),
        C = (0, _.e7)([h.default], () => {
            var e;
            return null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium();
        }),
        A = d()(a.currentPeriodEnd),
        O = null != a.paymentSourceId,
        p = null !== (s = null == m ? void 0 : m.total) && void 0 !== s ? s : 0,
        R = null == r ? void 0 : r.invalid,
        x = !O && p > 0 && (7 >= A.diff(d()(), 'days') || a.status === Z.O0b.PAST_DUE) && !C && !a.isPurchasedExternally,
        D = R && a.status === Z.O0b.PAST_DUE && !C && !a.isPurchasedExternally,
        P = (0, M.U)(),
        L = !C && P,
        B = (null == a ? void 0 : a.status) === Z.O0b.PAST_DUE ? d()().diff(d()(a.currentPeriodStart), 'days') : 0,
        [y] = (0, f.Ox)({
            subscriptionId: a.id,
            preventFetch: !L
        });
    return null == N || null == m
        ? (0, n.jsx)(E.Spinner, {})
        : (null != a.renewalMutations &&
              ((a.renewalMutations.planId !== a.planId && !(0, g.Q0)(a.renewalMutations.planId)) || a.hasExternalPlanChange) &&
              (t = (0, n.jsx)(b.Z, {
                  subscription: a,
                  renewalMutations: a.renewalMutations,
                  className: j.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, n.jsx)('div', {
              children: (0, n.jsxs)(E.HeadingLevel, {
                  component: (0, n.jsx)(E.FormTitle, {
                      className: j.sectionTitle,
                      tag: 'h1',
                      children: v.Z.Messages.USER_SETTINGS_SUBSCRIPTIONS_HEADER
                  }),
                  children: [
                      x ? (0, n.jsx)(U, {}) : null,
                      D ? (0, n.jsx)(G, {}) : null,
                      L && null != y
                          ? (0, n.jsx)(F, {
                                daysPastDue: B,
                                subscription: a,
                                openInvoiceId: y.id
                            })
                          : null,
                      t,
                      (0, n.jsx)('div', {
                          children: (0, n.jsx)('p', {
                              className: j.sectionDescription,
                              children: v.Z.Messages.BILLING_PAYMENT_PREMIUM_DESCRIPTION
                          })
                      }),
                      (0, n.jsxs)('div', {
                          children: [
                              (0, n.jsx)('div', {
                                  className: T.length > 0 ? j.dupSubscriptionRow : j.__invalid_singleSubscription,
                                  children: (0, n.jsx)(Y, {
                                      subscription: a,
                                      analyticsLocation: c,
                                      paymentSource: r,
                                      busy: o,
                                      fromStandaloneBillingPage: l,
                                      showNoPaymentMethod: x,
                                      showInvalidPaymentMethod: D,
                                      fetchedCurrentInvoicePreview: N,
                                      fetchedRenewalInvoicePreview: m
                                  })
                              }),
                              T.map((e, s) =>
                                  (0, n.jsxs)(
                                      'div',
                                      {
                                          className: j.dupSubscriptionRow,
                                          children: [
                                              (0, n.jsx)(E.FormTitle, {
                                                  tag: 'h2',
                                                  className: j.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, n.jsx)(Y, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: r,
                                                  busy: o,
                                                  fromStandaloneBillingPage: l,
                                                  showNoPaymentMethod: x,
                                                  showInvalidPaymentMethod: D,
                                                  fetchedCurrentInvoicePreview: null,
                                                  fetchedRenewalInvoicePreview: null
                                              })
                                          ]
                                      },
                                      s
                                  )
                              )
                          ]
                      })
                  ]
              })
          }));
}
