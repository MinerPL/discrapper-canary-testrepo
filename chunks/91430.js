n.d(t, {
    MM: function () {
        return G;
    },
    Yn: function () {
        return z;
    },
    ZP: function () {
        return W;
    },
    eS: function () {
        return H;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(913527),
    d = n.n(c),
    u = n(442837),
    m = n(692547),
    h = n(481060),
    g = n(230711),
    p = n(100527),
    x = n(906732),
    S = n(17894),
    T = n(975298),
    C = n(600164),
    _ = n(925329),
    E = n(963249),
    f = n(301766),
    I = n(594174),
    N = n(580130),
    A = n(626135),
    b = n(63063),
    v = n(74538),
    j = n(212895),
    O = n(374649),
    R = n(160913),
    P = n(987997),
    D = n(393411),
    y = n(908951),
    B = n(592889),
    L = n(981631),
    Z = n(388032),
    F = n(89216);
function M(e) {
    let t,
        { subscription: n, renewalInvoicePreview: s, fromStandaloneBillingPage: r = !0, className: a } = e,
        c = (0, u.e7)([I.default], () => {
            let e = I.default.getCurrentUser();
            return o()(null != e, 'GuildBoostingHeader: currentUser cannot be undefined'), e;
        });
    if (0 === (0, v.uV)(n.additionalPlans)) return null;
    let { status: d } = n,
        m = (0, v.v6)(n);
    if (m) t = F.guildBoostingSubscriptionRowCanceled;
    else
        switch (d) {
            case L.O0b.PAST_DUE:
            case L.O0b.ACCOUNT_HOLD:
            case L.O0b.BILLING_RETRY:
                t = F.guildBoostingSubscriptionRowFailedPayment;
                break;
            case L.O0b.PAUSE_PENDING:
            case L.O0b.PAUSED:
                t = F.guildBoostingSubscriptionRowPaused;
                break;
            default:
                t = F.guildBoostingSubscriptionRowActive;
        }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: l()(t, a),
                children: [
                    (0, i.jsx)('div', { className: F.guildBoostingSubscriptionRowBackground }),
                    (0, i.jsx)('div', { className: F.guildBoostingImage }),
                    (0, i.jsxs)('div', {
                        className: F.guildBoostingSubscriptionRowBody,
                        children: [
                            (0, i.jsx)('div', { className: l()(F.guildBoostingWordmark, { [F.canceled]: m }) }),
                            (0, i.jsx)('div', {
                                children: (0, v.bt)({
                                    subscription: n,
                                    renewalInvoicePreview: s,
                                    user: c
                                })
                            })
                        ]
                    }),
                    r &&
                        (0, i.jsx)(P.Z, {
                            color: h.Button.Colors.BRAND,
                            onClick: () => g.Z.open(L.oAB.GUILD_BOOSTING),
                            children: Z.intl.string(Z.t['NQ5g/f'])
                        })
                ]
            }),
            !r &&
                (0, i.jsx)(h.Text, {
                    className: F.boostingDesktopAppBlurb,
                    variant: 'text-sm/normal',
                    children: Z.intl.format(Z.t.k6haR0, { openAppHook: () => (0, S.Z)('app') })
                })
        ]
    });
}
function k() {
    return (
        s.useEffect(() => {
            A.default.track(L.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_missing_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: F.paymentBanner,
            children: [
                (0, i.jsx)(h.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(h.Text, {
                    className: F.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: Z.intl.string(Z.t.xFHEMT)
                })
            ]
        })
    );
}
function w() {
    return (
        s.useEffect(() => {
            A.default.track(L.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: F.paymentBanner,
            children: [
                (0, i.jsx)(h.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(h.Text, {
                    className: F.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: Z.intl.string(Z.t['j+nuQU'])
                })
            ]
        })
    );
}
function U(e) {
    let { daysPastDue: t, subscription: n, openInvoiceId: r } = e,
        { analyticsLocations: l } = (0, x.ZP)(p.Z.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER);
    return (
        s.useEffect(() => {
            A.default.track(L.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_invalid_payment_method' });
        }, []),
        (0, i.jsxs)('div', {
            className: F.paymentBanner,
            children: [
                (0, i.jsx)(h.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    className: F.paymentBannerIcon,
                    color: m.Z.unsafe_rawColors.YELLOW_260.css
                }),
                (0, i.jsx)(h.Text, {
                    className: F.paymentBannerText,
                    variant: 'text-sm/normal',
                    children: Z.intl.format(Z.t['0nbf/P'], {
                        daysPastDue: t,
                        paymentModalRedirect: () => {
                            (0, E.Z)({
                                initialPlanId: n.planIdFromItems,
                                openInvoiceId: r,
                                analyticsLocations: l
                            });
                        }
                    })
                })
            ]
        })
    );
}
function V(e) {
    let { subscription: t, renewalInvoicePreview: n, className: s, fractionalPremiumInfo: r } = e,
        a = (0, u.e7)([N.Z], () => N.Z.getUnactivatedFractionalPremiumUnits());
    return (0, i.jsxs)('div', {
        className: l()(F.billingInformation, s),
        children: [
            (0, i.jsx)(h.FormTitle, {
                tag: 'h3',
                className: F.detailBlockHeader,
                children: Z.intl.string(Z.t.KXQjfX)
            }),
            (0, i.jsx)('div', { children: v.ZP.getBillingInformationString(t, n, !1, null != a ? a : [], r) })
        ]
    });
}
function G() {
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(h.FormTitle, {
                className: F.sectionTitle,
                tag: 'h1',
                children: Z.intl.string(Z.t['/gs+Pz'])
            }),
            (0, i.jsx)('p', {
                className: F.sectionDescription,
                children: Z.intl.string(Z.t.D8UpUl)
            }),
            (0, i.jsx)(h.Card, {
                className: F.noItemsCard,
                type: h.Card.Types.CUSTOM,
                children: (0, i.jsxs)(C.Z, {
                    align: C.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)(_.Z, {
                            game: null,
                            size: _.Z.Sizes.SMALL,
                            className: F.noItemsIcon
                        }),
                        (0, i.jsx)('span', {
                            className: F.cardText,
                            children: Z.intl.string(Z.t.xCRgr6)
                        })
                    ]
                })
            })
        ]
    });
}
function Y(e) {
    let { subscription: t, analyticsLocation: n, paymentSource: s, busy: r, fromStandaloneBillingPage: a, showInvalidPaymentMethod: o, showNoPaymentMethod: c, fetchedCurrentInvoicePreview: d, fetchedRenewalInvoicePreview: u } = e,
        { analyticsLocations: m } = (0, x.ZP)(p.Z.SUBSCRIPTION_DETAILS),
        g =
            null != d
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [S] = (0, O.ED)(g);
    S = null != d ? d : S;
    let C =
            null != u
                ? {}
                : {
                      subscriptionId: t.id,
                      renewal: !0,
                      applyEntitlements: !0,
                      analyticsLocations: m,
                      analyticsLocation: n
                  },
        [_] = (0, O.ED)(C);
    _ = null != u ? u : _;
    let E = (0, T.Z)();
    return null == S || null == _
        ? (0, i.jsx)(h.Spinner, {})
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)('div', {
                      className: F.subscriptionRows,
                      children: [
                          (0, i.jsx)(D.Z, {
                              subscription: t,
                              renewalInvoicePreview: S,
                              paymentSource: s,
                              busy: r,
                              analyticsLocation: n
                          }),
                          (0, i.jsx)(M, {
                              subscription: t,
                              renewalInvoicePreview: S,
                              fromStandaloneBillingPage: a,
                              className: F.guildSubscriptionRow
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      children: (0, i.jsx)(h.HeadingLevel, {
                          component: (0, i.jsx)(h.FormTitle, {
                              tag: 'h5',
                              children: Z.intl.string(Z.t.Sb6wIy)
                          }),
                          children: (0, i.jsxs)('div', {
                              className: F.details,
                              children: [
                                  (0, i.jsx)(V, {
                                      subscription: t,
                                      renewalInvoicePreview: _,
                                      className: F.detailsBlock,
                                      fractionalPremiumInfo: E
                                  }),
                                  (0, i.jsxs)('div', {
                                      className: l()(F.detailsBlock, { [F.redBorder]: o }),
                                      children: [
                                          (0, i.jsx)(h.FormTitle, {
                                              tag: 'h3',
                                              className: F.detailBlockHeader,
                                              children: t.isPurchasedExternally && null != t.paymentGateway ? Z.intl.formatToPlainString(Z.t.rTk9v7, { paymentGatewayName: L.Vzj[t.paymentGateway] }) : Z.intl.string(Z.t.iRzXKS)
                                          }),
                                          (0, i.jsx)(y.Z, {
                                              subscription: t,
                                              onPaymentSourceAdded: j.i1,
                                              highlightAddPaymentMethodButton: c || o,
                                              analyticsLocation: n,
                                              currentInvoicePreview: S,
                                              dropdownClassName: F.paymentDropdown
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
let H = new Set([L.O0b.ACTIVE, L.O0b.PAST_DUE, L.O0b.CANCELED, L.O0b.PAUSE_PENDING, L.O0b.PAUSED]);
function z() {
    return (
        s.useEffect(() => {
            A.default.track(L.rMx.TOOLTIP_VIEWED, { type: 'subscription_settings_duplicate_subscriptions' });
        }, []),
        (0, i.jsxs)('div', {
            className: F.duplicateSubscriptionsBanner,
            children: [
                (0, i.jsx)(h.CircleWarningIcon, {
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: m.Z.unsafe_rawColors.RED_360.css
                }),
                (0, i.jsx)(h.Text, {
                    className: F.duplicateSubscriptionsBannerText,
                    variant: 'text-sm/normal',
                    children: Z.intl.format(Z.t['6eXiiI'], { helpCenterLink: b.Z.getArticleURL(L.BhN.NITRO) })
                })
            ]
        })
    );
}
function W(e) {
    var t;
    let n,
        { subscription: s, subscriptions: r, paymentSource: l, busy: a, fromStandaloneBillingPage: o = !0, analyticsLocation: c } = e;
    null != r && null != r[0] && (s = r[0]);
    let { analyticsLocations: m } = (0, x.ZP)(p.Z.SUBSCRIPTION_DETAILS),
        g = null != r ? r.slice(1) : [],
        [S] = (0, O.ED)({
            subscriptionId: s.id,
            renewal: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        [T] = (0, O.ED)({
            subscriptionId: s.id,
            renewal: !0,
            applyEntitlements: !0,
            analyticsLocations: m,
            analyticsLocation: c
        }),
        C = null == l ? void 0 : l.invalid,
        _ = (0, u.e7)([I.default], () => {
            var e;
            return null === (e = I.default.getCurrentUser()) || void 0 === e ? void 0 : e.hasFreePremium();
        }),
        E = d()(s.currentPeriodEnd),
        N = null != s.paymentSourceId,
        A = null !== (t = null == T ? void 0 : T.total) && void 0 !== t ? t : 0,
        b = !N && A > 0 && (7 >= E.diff(d()(), 'days') || s.status === L.O0b.PAST_DUE) && !_ && !s.isPurchasedExternally,
        v = C && s.status === L.O0b.PAST_DUE && !_ && !s.isPurchasedExternally,
        j = (0, R.U)(),
        P = !_ && j,
        D = (null == s ? void 0 : s.status) === L.O0b.PAST_DUE ? d()().diff(d()(s.currentPeriodStart), 'days') : 0,
        [y] = (0, O.Ox)({
            subscriptionId: s.id,
            preventFetch: !P
        });
    return null == S || null == T
        ? (0, i.jsx)(h.Spinner, {})
        : (null != s.renewalMutations &&
              ((s.renewalMutations.planId !== s.planId && !(0, f.Q0)(s.renewalMutations.planId)) || s.hasExternalPlanChange) &&
              (n = (0, i.jsx)(B.Z, {
                  subscription: s,
                  renewalMutations: s.renewalMutations,
                  className: F.renewalMutationNotice,
                  analyticsLocation: c
              })),
          (0, i.jsx)('div', {
              children: (0, i.jsxs)(h.HeadingLevel, {
                  component: (0, i.jsx)(h.FormTitle, {
                      className: F.sectionTitle,
                      tag: 'h1',
                      children: Z.intl.string(Z.t['/gs+Pz'])
                  }),
                  children: [
                      b ? (0, i.jsx)(k, {}) : null,
                      v ? (0, i.jsx)(w, {}) : null,
                      P && null != y
                          ? (0, i.jsx)(U, {
                                daysPastDue: D,
                                subscription: s,
                                openInvoiceId: y.id
                            })
                          : null,
                      n,
                      (0, i.jsx)('div', {
                          children: (0, i.jsx)('p', {
                              className: F.sectionDescription,
                              children: Z.intl.string(Z.t.D8UpUl)
                          })
                      }),
                      (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)('div', {
                                  className: g.length > 0 ? F.dupSubscriptionRow : F.__invalid_singleSubscription,
                                  children: (0, i.jsx)(Y, {
                                      subscription: s,
                                      analyticsLocation: c,
                                      paymentSource: l,
                                      busy: a,
                                      fromStandaloneBillingPage: o,
                                      showNoPaymentMethod: b,
                                      showInvalidPaymentMethod: v,
                                      fetchedCurrentInvoicePreview: S,
                                      fetchedRenewalInvoicePreview: T
                                  })
                              }),
                              g.map((e, t) =>
                                  (0, i.jsxs)(
                                      'div',
                                      {
                                          className: F.dupSubscriptionRow,
                                          children: [
                                              (0, i.jsx)(h.FormTitle, {
                                                  tag: 'h2',
                                                  className: F.duplicateHeader,
                                                  children: 'Duplicate Subscriptions'
                                              }),
                                              (0, i.jsx)(Y, {
                                                  subscription: e,
                                                  analyticsLocation: c,
                                                  paymentSource: l,
                                                  busy: a,
                                                  fromStandaloneBillingPage: o,
                                                  showNoPaymentMethod: b,
                                                  showInvalidPaymentMethod: v,
                                                  fetchedCurrentInvoicePreview: null,
                                                  fetchedRenewalInvoicePreview: null
                                              })
                                          ]
                                      },
                                      t
                                  )
                              )
                          ]
                      })
                  ]
              })
          }));
}
