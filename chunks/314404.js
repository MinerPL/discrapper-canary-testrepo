t.d(n, {
    M: function () {
        return H;
    },
    O: function () {
        return k;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    r = t(120356),
    s = t.n(r),
    l = t(512722),
    o = t.n(l),
    c = t(442837),
    u = t(481060),
    d = t(490504),
    _ = t(911969),
    p = t(940824),
    m = t(987209),
    I = t(598),
    f = t(409813),
    E = t(509545),
    x = t(78839),
    N = t(669079),
    S = t(63063),
    T = t(74538),
    h = t(937615),
    b = t(711459),
    g = t(857039),
    P = t(847903),
    v = t(104494),
    A = t(639119),
    M = t(55610),
    C = t(653798),
    y = t(553797),
    R = t(927699),
    O = t(987716),
    L = t(311821),
    j = t(459965),
    Z = t(811616),
    D = t(251660),
    w = t(474936),
    B = t(981631),
    G = t(231338),
    F = t(689938),
    U = t(133130);
function k(e) {
    var n, t, r, l;
    let { premiumSubscription: f, skuId: x, selectedPlanId: L, setSelectedPlanId: j, priceOptions: k, planOptions: H, eligibleForMultiMonthPlans: W, referralTrialOfferId: Y, subscriptionPeriodEnd: V, showTotal: K = !0, discountInvoiceItems: z, handleClose: X } = e,
        { activeSubscription: q, setSelectedPlanId: J, selectedSkuId: Q, selectedPlan: $, priceOptions: ee } = (0, I.usePaymentContext)(),
        { isGift: en, giftRecipient: et, selectedGiftStyle: ei, customGiftMessage: ea, setCustomGiftMessage: er } = (0, m.wD)(),
        es = (0, N.MY)(et),
        el = en && (0, N.pO)(et),
        eo = (0, g.Z)({ location: 'PremiumPlanSelectStep' });
    (x = null != x ? x : Q), (f = null != f ? f : q), o()(void 0 !== f, 'should not be undefined');
    let [ec, eu] = (0, c.Wu)([E.Z], () => [null != f ? E.Z.get(f.planId) : null, null != L ? E.Z.get(L) : null]),
        ed = (0, A.N)(Y),
        e_ = null == ed ? void 0 : ed.subscription_trial,
        ep = (0, v.Ng)(),
        em = null == ep ? void 0 : null === (n = ep.discount) || void 0 === n ? void 0 : n.plan_ids,
        eI = null != eu ? eu : $,
        ef = a.useCallback(
            (e) => {
                null != j ? j(e) : J(e);
            },
            [j, J]
        ),
        eE = null != k ? k : ee;
    o()(null != eE, 'Price option has to be set');
    let ex = null != ed && w.nG[ed.trial_id].skus.includes(x),
        eN = null != ep && H.some((e) => (null == em ? void 0 : em.includes(e))) && null != ep.discount,
        eS = (0, T.aS)(w.Xh.PREMIUM_MONTH_TIER_2, !1, en, eE);
    a.useEffect(() => {
        W && b.ZP.trackExposure({ location: '5f89bb_1' });
    }, [W]);
    let eT = (null == eI ? void 0 : eI.id) != null && H.includes(eI.id);
    a.useEffect(() => {
        if (!eT) {
            if (null == ec || en) ef(H[0]);
            else if (null != ec) {
                let e = H.find((e) => e !== ec.id);
                null != e && ef(e);
            }
        }
    }, [eT, en, H, ec, ef]);
    let eh = !el && (en || (!ex && !eN)) && eT && K,
        eb = (0, u.useRadioGroup)(),
        eg = (null == eI ? void 0 : eI.id) != null ? (0, T.aS)(eI.id, !1, en, eE) : void 0,
        { ipCountryCode: eP } = (0, P.Z)(),
        ev = 'HR' === eP && null != eg && eg.currency === G.pK.EUR,
        eA = (0, T.Ap)(eE.paymentSourceId),
        eM = a.useMemo(() => {
            if ((null == e_ ? void 0 : e_.interval) === w.rV.DAY) return (null == e_ ? void 0 : e_.interval_count) > 7 ? F.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : F.Z.Messages.BILLING_TRIAL_1_WEEK_PERIOD;
            return F.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD;
        }, [e_]),
        eC = !en && (eN || (null != e_ && ex && null != V)),
        ey = null == z ? void 0 : null === (l = z.find((e) => e.subscriptionPlanId === w.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === l ? void 0 : null === (r = l.discounts) || void 0 === r ? void 0 : null === (t = r.find((e) => e.type === _.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: s()(el ? U.stepBodyCustomGift : U.stepBody, { [U.paddingForHalloweenBanner]: eo }),
            children: [
                (0, i.jsxs)('div', {
                    className: el ? U.bodyColumnMiddle : void 0,
                    children: [
                        (0, i.jsx)(M.Z, {
                            fromBoostCancelModal: !1,
                            className: U.legacyPricingNotice
                        }),
                        el && null != ei && (0, i.jsx)(O.q, {})
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: el ? U.bodyColumnRight : void 0,
                    children: [
                        (0, i.jsx)(D.s, { giftRecipient: et }),
                        (() => {
                            if (es === N.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != er)
                                return (0, i.jsx)(R.Z, {
                                    sectionTitle: F.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: (e) => er(e),
                                    pendingText: ea,
                                    currentText: ea
                                });
                        })(),
                        null != ec &&
                            !en &&
                            (0, i.jsx)('div', {
                                className: U.bodyText,
                                children: (function (e, n) {
                                    let t = F.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
                                        i = F.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
                                        a = (() => {
                                            switch (e.interval) {
                                                case w.rV.YEAR:
                                                    return t;
                                                case w.rV.MONTH:
                                                default:
                                                    return i;
                                            }
                                        })(),
                                        r = e.skuId;
                                    switch (n) {
                                        case w.Si.TIER_0:
                                            switch (r) {
                                                case w.Si.TIER_1:
                                                    return F.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                                case w.Si.TIER_2:
                                                    return F.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                                default:
                                                    return a;
                                            }
                                        case w.Si.TIER_1:
                                            switch (r) {
                                                case w.Si.TIER_0:
                                                    return F.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                                case w.Si.TIER_2:
                                                    return F.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                                default:
                                                    return a;
                                            }
                                        case w.Si.TIER_2:
                                            switch (r) {
                                                case w.Si.TIER_0:
                                                case w.Si.TIER_1:
                                                    return F.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                                case w.Si.TIER_2:
                                                    return e.interval === w.rV.MONTH ? F.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({ numFreeGuildSubscriptions: w.cb }) : a;
                                                default:
                                                    return a;
                                            }
                                        default:
                                            return a;
                                    }
                                })(ec, x)
                            }),
                        ((e, n, t) => {
                            if (el) return (0, i.jsx)(u.FormTitle, { children: F.Z.Messages.GIFT_SUBSCRIPTION_SELECTION });
                            if (!eC)
                                return (0, i.jsx)('div', {
                                    className: U.selectPlanChooseTitle,
                                    children: F.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                });
                            if (n) {
                                let n = (null == e ? void 0 : e.trial_id) === w.a7;
                                return (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            className: U.trialPlanSelectHeader,
                                            children: n
                                                ? F.Z.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({ endDate: V })
                                                : F.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                                      trialEnd: V,
                                                      trialPeriod: eM
                                                  })
                                        }),
                                        (0, i.jsx)('hr', { className: U.planSelectSeparator })
                                    ]
                                });
                            }
                            if (t && null != ey && null != eS && L === w.Xh.PREMIUM_MONTH_TIER_2)
                                return (0, i.jsxs)('div', {
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-sm/normal',
                                            className: U.trialPlanSelectHeader,
                                            children: F.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                                                numMonths: null == ep ? void 0 : ep.discount.user_usage_limit,
                                                discountedPrice: (0, h.T4)(eS.amount - ey, eS.currency),
                                                regularPrice: (0, h.T4)(eS.amount, eS.currency)
                                            })
                                        }),
                                        (0, i.jsx)('hr', { className: U.planSelectSeparator })
                                    ]
                                });
                        })(ed, ex, eN),
                        (0, i.jsx)('div', {
                            ...eb,
                            children: H.map((e) =>
                                (0, i.jsx)(
                                    Z.Z,
                                    {
                                        planId: e,
                                        premiumSubscription: en ? null : null != f ? f : null,
                                        selectPlan: ef,
                                        selected: (null == eI ? void 0 : eI.id) === e,
                                        priceOptions: eE,
                                        shouldShowUpdatedPaymentModal: eC,
                                        isEligibleForDiscount: eN,
                                        discountAmountOff: ey,
                                        isEligibleForTrial: ex
                                    },
                                    e
                                )
                            )
                        }),
                        (0, i.jsx)('div', {
                            children:
                                eh && null != eI && null != eg
                                    ? (0, i.jsxs)('div', {
                                          children: [
                                              (0, i.jsx)('div', { className: U.selectPlanDivider }),
                                              (0, i.jsx)(C.Ji, {
                                                  label: F.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                                  value: (0, i.jsx)(y.Z, {
                                                      price: eg.amount,
                                                      currency: eg.currency,
                                                      intervalType: en ? null : eI.interval,
                                                      intervalCount: eI.intervalCount,
                                                      isPrepaidPaymentSource: eA
                                                  }),
                                                  className: U.selectPlanTotalRow
                                              })
                                          ]
                                      })
                                    : null
                        }),
                        ev && (0, i.jsx)(d.Z, { message: F.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({ kunaPriceWithCurrency: (0, h.T4)(7.5345 * eg.amount, G.pK.HRK) }) }),
                        !en && !eC && K && (0, i.jsx)(d.Z, { message: F.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({ documentationLink: S.Z.getArticleURL(B.BhN.LOCALIZED_PRICING) }) }),
                        en && (0, i.jsx)(p.Z, { onClose: X })
                    ]
                })
            ]
        })
    });
}
function H(e) {
    let { onStepChange: n, selectedPlanId: t, paymentSources: a, onBackClick: r, showBackButton: s, planOptions: l, shouldRenderUpdatedPaymentModal: o = !1, isTrial: c } = e,
        { paymentSources: d, selectedPlan: _ } = (0, I.usePaymentContext)(),
        { isGift: p } = (0, m.wD)();
    return (
        (a = null != a ? a : d),
        (t = null != t ? t : null == _ ? void 0 : _.id),
        (0, i.jsxs)(i.Fragment, {
            children: [
                null != t && l.includes(t)
                    ? (0, i.jsx)(W, {
                          paymentSources: a,
                          onStepChange: n,
                          selectedPlanId: t,
                          isGift: p,
                          shouldRenderUpdatedPaymentModal: o,
                          isTrial: c
                      })
                    : (0, i.jsx)(u.Button, {
                          disabled: !0,
                          children: F.Z.Messages.SELECT
                      }),
                s ? (0, i.jsx)(L.Z, { onClick: r }) : null
            ]
        })
    );
}
function W(e) {
    let { onStepChange: n, selectedPlanId: t, isGift: a, paymentSources: r, shouldRenderUpdatedPaymentModal: s, isTrial: l } = e,
        o = (0, c.e7)([x.ZP], () => x.ZP.getPremiumTypeSubscription()),
        { hasEntitlements: d } = (0, j.H)(t, a),
        _ = (null != o && null != o.paymentSourceId) || Object.keys(r).length > 0 || (d && !l);
    var p = s ? F.Z.Messages.NEXT : F.Z.Messages.SELECT,
        m = f.h8.ADD_PAYMENT_STEPS;
    return (
        _ && (m = f.h8.REVIEW),
        (0, i.jsx)(u.Button, {
            onClick: () => n(m),
            children: p
        })
    );
}
