s.d(n, {
    CP: function () {
        return $;
    },
    Gq: function () {
        return en;
    },
    R7: function () {
        return es;
    }
}),
    s(653041),
    s(47120),
    s(724458);
var i = s(735250),
    t = s(470079),
    l = s(120356),
    r = s.n(l),
    a = s(512722),
    c = s.n(a),
    o = s(742280),
    u = s(442837),
    I = s(692547),
    _ = s(481060),
    d = s(224550),
    S = s(490504),
    T = s(275850),
    E = s(672971),
    P = s(100527),
    m = s(906732),
    N = s(436774),
    p = s(374649),
    R = s(591548),
    U = s(847903),
    C = s(639119),
    L = s(53900),
    O = s(653798),
    x = s(110818),
    v = s(553797),
    A = s(741245),
    M = s(314182),
    g = s(42818),
    D = s(900683),
    f = s(706454),
    Z = s(430824),
    h = s(246946),
    y = s(594174),
    j = s(351402),
    G = s(853872),
    B = s(509545),
    b = s(78839),
    H = s(709586),
    w = s(267642),
    V = s(63063),
    W = s(930153),
    F = s(74538),
    k = s(937615),
    Y = s(588797),
    K = s(981631),
    q = s(474936),
    X = s(231338),
    J = s(689938),
    z = s(230721);
function Q(e) {
    let { endDate: n, className: s } = e;
    return (0, i.jsxs)('div', {
        className: s,
        children: [
            (0, i.jsx)('div', { className: z.reverseTrialContextInfoDivider }),
            (0, i.jsx)(_.Text, {
                variant: 'text-sm/normal',
                className: z.reverseTrialContextText,
                children: J.Z.Messages.BILLING_BOOST_PURCHASE_IN_REVERSE_TRIAL_CONTEXT.format({ endDate: n })
            }),
            (0, i.jsx)('div', { className: z.reverseTrialContextInfoDivider })
        ]
    });
}
function $(e) {
    var n, s;
    let { guildId: t, premiumSubscriptionPlan: l, numGuildBoosts: a, setNumGuildBoosts: o, setForceDisableSubmitButton: d, premiumSubscription: T, onClickPremiumSubscriptionLink: E, existingAvailableSlots: R = [], priceOptions: O } = e,
        x = (0, L.Z)(),
        A = l.interval,
        M = l.intervalCount,
        g = (0, u.e7)([B.Z], () => B.Z.getForSkuAndInterval((0, F.Wz)(q.Si.GUILD), A, M)),
        h = (0, u.e7)([y.default], () => y.default.getCurrentUser()),
        j = (0, u.e7)([Z.Z], () => Z.Z.getGuild(t), [t]);
    c()(null != g, 'Missing guildBoostingSubscriptionPlan'), c()(null != j, 'Unknown guild: '.concat(t));
    let G = [
            {
                planId: g.id,
                quantity: 1
            }
        ],
        $ = null == T ? void 0 : T.items.find((e) => e.planId === q.Xh.PREMIUM_MONTH_TIER_2 || e.planId === q.Xh.PREMIUM_YEAR_TIER_2);
    null != $ && G.push($);
    let ee = null == T ? void 0 : T.items.find((e) => e.planId === q.Xh.PREMIUM_MONTH_GUILD || e.planId === q.Xh.PREMIUM_YEAR_GUILD),
        { enabled: en } = Y.Z.useExperiment({ location: '32b64a_1' }),
        es = !en || null == x || !q.Tp.has(x) || null == ee,
        { analyticsLocations: ei } = (0, m.ZP)(),
        [et, el] = (0, p.ED)({
            subscriptionId: null == T ? void 0 : T.id,
            items: G,
            renewal: !0,
            paymentSourceId: null == T ? void 0 : T.paymentSourceId,
            currency: O.currency,
            preventFetch: es,
            analyticsLocations: ei,
            analyticsLocation: P.Z.GUILD_BOOSTING_PLAN_SELECT
        }),
        er = !es && null == et && null == el,
        ea = (null === (s = (0, C.N)()) || void 0 === s ? void 0 : null === (n = s.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === q.Si.TIER_2,
        ec = F.ZP.hasBoostDiscount(h) && null != g.premiumUserPrice,
        eo = null == et ? void 0 : et.invoiceItems.find((e) => e.subscriptionPlanId === g.id),
        eu =
            null != eo
                ? {
                      amount: eo.amount,
                      tax: 0,
                      taxInclusive: !0,
                      currency: O.currency
                  }
                : F.ZP.getPrice(g.id, ec, !1, O),
        eI = a * eu.amount,
        e_ = (0, u.e7)([b.ZP], () => b.ZP.inReverseTrial() && F.ZP.hasBoostDiscount(h) && null != T),
        ed =
            F.ZP.hasBoostDiscount(h) && null != T
                ? J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_DISCOUNT.format({ planName: F.ZP.getDisplayPremiumType(T.planId) })
                : (ea ? J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL_TRIAL_VARIANT : J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_FOOTER_UPSELL).format({
                      onPremiumSubscriptionClick: E,
                      discountPercentage: (0, W.T3)(f.default.locale, q.Rr / 100),
                      freeSubscriptionCount: q.cb
                  }),
        eS = R.filter((e) => (0, w.tl)(e)).length,
        eT = (0, F.Ap)(O.paymentSourceId),
        { ipCountryCode: eE } = (0, U.Z)(),
        eP = 'HR' === eE && eu.currency === X.pK.EUR;
    return (
        d(er),
        (0, i.jsxs)('div', {
            children: [
                e_ && null != T
                    ? (0, i.jsx)(Q, { endDate: T.currentPeriodEnd })
                    : (0, i.jsx)('div', {
                          className: r()(z.planSelectText, z.bodyText),
                          children: J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_STEP_SELECT_DESCRIPTION
                      }),
                R.length > 0
                    ? (0, i.jsxs)('div', {
                          className: z.existingSlotNotice,
                          children: [
                              (0, i.jsx)(H.Z, {
                                  className: z.existingSlotIcon,
                                  color: I.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                              }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_UNUSED_SLOT_NOTICE.format({ slotCount: R.length }),
                                      eS > 0 && null != T
                                          ? (0, i.jsx)(_.Tooltip, {
                                                text: J.Z.Messages.PREMIUM_GUILD_SUBSCRIBE_CONFIRM_CANCEL_WARNING.format({
                                                    canceledCount: eS,
                                                    date: T.currentPeriodEnd
                                                }),
                                                children: (e) =>
                                                    (0, i.jsx)(_.CircleWarningIcon, {
                                                        size: 'custom',
                                                        width: 20,
                                                        height: 20,
                                                        ...e,
                                                        className: z.existingSlotTooltipWarningIcon,
                                                        color: I.Z.unsafe_rawColors.YELLOW_300.css
                                                    })
                                            })
                                          : null
                                  ]
                              })
                          ]
                      })
                    : null,
                (0, i.jsxs)('div', {
                    className: z.planSelectRow,
                    children: [
                        (0, i.jsxs)('div', {
                            className: z.planSelectorWrapper,
                            children: [
                                (0, i.jsx)(_.NumberInputStepper, {
                                    value: a,
                                    onChange: (e) => o(e),
                                    className: z.__invalid_planSelector,
                                    minValue: 1,
                                    maxValue: 30
                                }),
                                (0, i.jsx)('div', {
                                    className: z.planSelectorLabel,
                                    children: eT
                                        ? (function (e) {
                                              let { intervalType: n, intervalCount: s = 1 } = e;
                                              return n === q.rV.YEAR ? J.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_YEAR : n === q.rV.MONTH && 1 === s ? J.Z.Messages.PREMIUM_GUILD_PLAN_SINGLE_MONTH : null;
                                          })({
                                              intervalType: A,
                                              intervalCount: M
                                          })
                                        : J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_COUNTER
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: r()(z.planSelectorPreviewPrice, { [z.loadingSpinner]: er }),
                            children: er
                                ? (0, i.jsx)(_.Spinner, {})
                                : eT
                                  ? (0, k.T4)(eu.amount, eu.currency)
                                  : (function (e) {
                                        let { amount: n, currency: s, intervalType: i, intervalCount: t = 1 } = e,
                                            l = (0, k.T4)(n, s);
                                        if (i === q.rV.YEAR) return J.Z.Messages.BILLING_PRICE_PER_YEAR_EACH.format({ price: l });
                                        if (i === q.rV.MONTH && 1 === t) return J.Z.Messages.BILLING_PRICE_PER_MONTH_EACH.format({ price: l });
                                        if (i === q.rV.MONTH && t > 1) return J.Z.Messages.BILLING_PRICE_PER_MULTI_MONTH_EACH.format({ price: l });
                                        return null;
                                    })({
                                        intervalType: A,
                                        intervalCount: M,
                                        amount: eu.amount,
                                        currency: eu.currency
                                    })
                        })
                    ]
                }),
                (0, i.jsx)('div', { className: z.planSelectDivider }),
                (0, i.jsxs)('div', {
                    className: z.planSelectRow,
                    children: [
                        (0, i.jsx)('div', {
                            className: z.planSelectorSubtotal,
                            children: J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBTOTAL
                        }),
                        (0, i.jsx)('div', {
                            className: r()(z.__invalid_planSelectorSubtotalPrice, { [z.loadingSpinner]: er }),
                            children: er
                                ? (0, i.jsx)(_.Spinner, {})
                                : (0, i.jsx)(v.Z, {
                                      price: eI,
                                      currency: eu.currency,
                                      intervalType: A,
                                      intervalCount: M,
                                      isPrepaidPaymentSource: eT
                                  })
                        })
                    ]
                }),
                eP && (0, i.jsx)(S.Z, { message: J.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({ kunaPriceWithCurrency: (0, k.T4)(7.5345 * eI, X.pK.HRK) }) }),
                (0, i.jsx)(S.Z, { message: J.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({ documentationLink: V.Z.getArticleURL(K.BhN.LOCALIZED_PRICING) }) }),
                e_
                    ? (0, i.jsx)(D.e, {})
                    : (0, i.jsx)(D.Z, {
                          text: ed,
                          color: N.JX.PREMIUM_TIER_2
                      })
            ]
        })
    );
}
function ee(e) {
    let { premiumSubscription: n, premiumSubscriptionPlan: s, proratedInvoicePreview: t, renewalInvoicePreview: l, priceOptions: r } = e,
        a = s.interval,
        o = s.intervalCount,
        I = (0, u.e7)([B.Z], () => B.Z.getForSkuAndInterval((0, F.Wz)(q.Si.GUILD), a, o));
    c()(null != I, 'Missing guildBoostingSubscriptionPlan');
    let _ = (e) => (0, R.j)(t.invoiceItems).find((n) => q.Z1.has(n.subscriptionPlanId) && e(n)),
        d = _((e) => e.amount >= 0);
    c()(null != d, 'Missing guild boosting invoice item');
    let S = _((e) => e.amount < 0),
        T = null != S ? d.quantity - S.quantity : d.quantity,
        E = t.invoiceItems.filter((e) => (0, F.uZ)(e.subscriptionPlanId)),
        P = E.reduce((e, n) => e + n.amount, 0),
        m = (0, p.pV)(d) * T,
        N = (0, k.T4)(m, t.currency),
        U = (0, k.og)(N, a, o),
        C = (0, k.T4)(t.total, t.currency) + (t.currency !== X.pK.USD ? '*' : ''),
        L = t.total - m - P,
        x = d.discounts.map((e) => {
            let n = e.amount / d.quantity;
            return {
                ...e,
                amount: n * T
            };
        }),
        v = (0, F.Ap)(r.paymentSourceId),
        A = (0, u.e7)([b.ZP], () => b.ZP.inReverseTrial());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            v
                ? null
                : A && null != n
                  ? (0, i.jsx)(Q, {
                        endDate: n.currentPeriodEnd,
                        className: z.reverseTrialContextMarginBottom
                    })
                  : (0, i.jsx)(g.hG, {
                        proratedInvoice: t,
                        renewalInvoice: l
                    }),
            (0, i.jsxs)(O.PO, {
                children: [
                    (0, i.jsx)(O.q9, { children: J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PURCHASE_DETAILS_HEADER }),
                    (0, i.jsx)(O.i$, {
                        label: J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_INVOICE_ROW_CONTENT.format({
                            numGuildSubscriptions: T,
                            planName: (0, F.Gf)(I.id, !1, v)
                        }),
                        value: v ? N : U,
                        discounts: x,
                        originalAmount: d.subscriptionPlanPrice * T,
                        currency: t.currency,
                        interval: I.interval,
                        intervalCount: I.intervalCount
                    }),
                    0 !== P
                        ? (0, i.jsx)(O.R$, {
                              label: (0, i.jsx)(g.As, {
                                  label: J.Z.Messages.PREMIUM_SUBSCRIPTION_PLAN_ADJUSTMENT.format({ planName: (0, F.aq)(E[0].subscriptionPlanId) }),
                                  tooltipText: J.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                              }),
                              value: (0, k.T4)(P, t.currency)
                          })
                        : null,
                    0 !== L
                        ? (0, i.jsx)(O.R$, {
                              label: (0, i.jsx)(g.As, {
                                  label: J.Z.Messages.PREMIUM_SUBSCRIPTION_GUILD_SUBSCRIPTION_ADJUSTMENT,
                                  tooltipText: J.Z.Messages.PREMIUM_SUBSCRIPTION_ADJUSTMENT_TOOLTIP
                              }),
                              value: (0, k.T4)(L, t.currency)
                          })
                        : null,
                    (0, i.jsx)(O.KU, {}),
                    (0, i.jsx)(O.Ji, {
                        label: (t.taxInclusive ? (v ? J.Z.Messages.BILLING_INVOICE_TOTAL_TAX_INCLUSIVE : J.Z.Messages.BILLING_INVOICE_TODAY_TOTAL_TAX_INCLUSIVE) : J.Z.Messages.BILLING_INVOICE_TODAY_TOTAL).format(),
                        value: C
                    }),
                    null != n
                        ? (0, i.jsx)(g.nd, {
                              premiumSubscription: n,
                              proratedInvoice: t,
                              renewalInvoice: l,
                              isUpdate: !0,
                              isPrepaidPaymentSource: v,
                              isTrial: A
                          })
                        : (0, i.jsx)(g.nd, {
                              renewalInvoice: l,
                              priceOptions: r,
                              isPrepaidPaymentSource: v
                          })
                ]
            })
        ]
    });
}
function en(e) {
    var n, s;
    let t,
        l,
        { paymentSources: r, priceOptions: a, currentPremiumSubscription: c, premiumSubscriptionPaymentSourceId: I, premiumSubscriptionPlan: S, newAdditionalPlans: N, onPaymentSourceChange: R, onPaymentSourceAdd: U, onPurchaseTermsChange: C, legalTermsNodeRef: L, hasLegalTermsFlash: O } = e,
        x = a.paymentSourceId,
        v = (0, u.e7)([G.Z], () => (null != I ? G.Z.getPaymentSource(I) : null)),
        A = (0, u.e7)([h.Z], () => h.Z.hidePersonalInformation);
    t = null != c ? (0, F.Zx)(c, N[0].quantity, N[0].planId) : N;
    let { analyticsLocations: g } = (0, m.ZP)(),
        [D] = (0, p.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: t,
            renewal: !1,
            applyEntitlements: !0,
            paymentSourceId: x,
            currency: a.currency,
            analyticsLocations: g,
            analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_PRORATED
        }),
        [f] = (0, p.ED)({
            subscriptionId: null == c ? void 0 : c.id,
            items: t,
            renewal: !0,
            paymentSourceId: x,
            currency: a.currency,
            analyticsLocations: g,
            analyticsLocation: P.Z.GUILD_BOOSTING_REVIEW_RENEWAL
        });
    null != f &&
        (l = {
            amount: f.total,
            currency: f.currency,
            tax: f.tax,
            taxInclusive: f.taxInclusive
        });
    let Z = o.M.EEA_COUNTRIES.has(j.Z.ipCountryCodeWithFallback);
    return (0, i.jsxs)('div', {
        children: [
            null != D && null != f
                ? (0, i.jsx)(ee, {
                      premiumSubscription: c,
                      premiumSubscriptionPlan: S,
                      proratedInvoicePreview: D,
                      renewalInvoicePreview: f,
                      priceOptions: a
                  })
                : null,
            (0, i.jsxs)('div', {
                className: z.paymentSourceWrapper,
                children: [
                    (0, i.jsx)(_.FormTitle, {
                        tag: _.FormTitleTags.H5,
                        children: J.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                    }),
                    null != I
                        ? null != v
                            ? (0, i.jsx)(_.TooltipContainer, {
                                  text: J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_PAYMENT_SOURCE_TOOLTIP,
                                  children: (0, i.jsx)(T.Z, {
                                      paymentSources: [v],
                                      selectedPaymentSourceId: v.id,
                                      hidePersonalInformation: A,
                                      disabled: !0
                                  })
                              })
                            : (0, i.jsx)('div', { children: (0, i.jsx)(_.Spinner, {}) })
                        : (0, i.jsx)(T.Z, {
                              paymentSources: Object.values(r),
                              selectedPaymentSourceId: x,
                              onChange: R,
                              onPaymentSourceAdd: U,
                              hidePersonalInformation: A
                          })
                ]
            }),
            (0, i.jsx)(M.Z, {
                isActive: O,
                ref: L,
                children:
                    null != l &&
                    (0, i.jsx)(E.Z, {
                        onChange: C,
                        forceShow: !0,
                        finePrint: (0, i.jsx)(d.Z, {
                            subscriptionPlan: S,
                            paymentSourceType: null === (n = r[null != x ? x : '']) || void 0 === n ? void 0 : n.type,
                            basePrice: l,
                            productLine: K.POd.BOOST
                        }),
                        showPricingLink: (null !== (s = null == D ? void 0 : D.currency) && void 0 !== s ? s : X.pK.USD) !== X.pK.USD,
                        showWithdrawalWaiver: Z,
                        subscriptionPlan: S
                    })
            })
        ]
    });
}
function es(e) {
    let n,
        { onClose: s, guild: l, guildBoostQuantity: r, isTransfer: a = !1, withAnimation: c = !0, paymentSourceType: o } = e,
        { theme: u } = (0, _.useThemeContext)(),
        [I, d] = t.useState(x.fe.Scenes.ENTRY),
        [S, T] = t.useState(!1);
    return (
        (n = a
            ? null == l
                ? J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION_GENERIC_GUILD.format()
                : J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_TRANSFERRED_DESCRIPTION.format({ guildName: l.name })
            : null == l
              ? J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION_GENERIC_GUILD.format({ guildSubscriptionQuantity: r })
              : J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_DESCRIPTION.format({
                    guildName: l.name,
                    guildSubscriptionQuantity: r
                })),
        (0, i.jsxs)('div', {
            className: z.confirmationContainer,
            children: [
                c
                    ? (0, i.jsx)(x.fe, {
                          className: z.confirmationAnimation,
                          nextScene: I,
                          onScenePlay: (e) => {
                              if (!S)
                                  switch (e) {
                                      case x.fe.Scenes.ENTRY:
                                          return d(x.fe.Scenes.IDLE);
                                      case x.fe.Scenes.IDLE:
                                          return d(x.fe.Scenes.SUCCESS);
                                      case x.fe.Scenes.SUCCESS:
                                          return T(!0), d(x.fe.Scenes.IDLE);
                                  }
                          },
                          pauseWhileUnfocused: !1
                      })
                    : null,
                (0, i.jsx)(A.C, {
                    className: z.confirmationUpgradedBanner,
                    theme: u,
                    premiumType: q.p9.TIER_2,
                    type: X.X7.has(null != o ? o : X.He.UNKNOWN) ? A.C.Types.PREMIUM_PAYMENT_STARTED : A.C.Types.GUILD_BOOST_APPLIED
                }),
                (0, i.jsx)('div', {
                    className: z.confirmationText,
                    children: n
                }),
                (0, i.jsx)(_.Button, {
                    onClick: s,
                    children: J.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_ACTIVATED_CLOSE_BUTTON
                })
            ]
        })
    );
}
