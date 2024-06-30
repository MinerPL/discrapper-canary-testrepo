s.d(n, {
    M: function () {
        return B;
    },
    O: function () {
        return w;
    }
}), s(47120);
var l = s(735250), i = s(470079), t = s(512722), r = s.n(t), a = s(442837), c = s(481060), o = s(490504), u = s(911969), d = s(620037), _ = s(940824), m = s(987209), I = s(598), E = s(409813), p = s(509545), N = s(78839), T = s(669079), S = s(63063), x = s(74538), h = s(937615), P = s(711459), A = s(847903), v = s(104494), f = s(639119), M = s(55610), g = s(653798), C = s(553797), R = s(927699), O = s(987716), L = s(311821), j = s(459965), y = s(811616), Z = s(251660), b = s(474936), D = s(981631), G = s(231338), U = s(689938), F = s(988775);
function w(e) {
    var n, s, t, E, N, L, j, w;
    let {
            premiumSubscription: B,
            skuId: H,
            selectedPlanId: k,
            setSelectedPlanId: W,
            priceOptions: Y,
            planOptions: K,
            eligibleForMultiMonthPlans: V,
            referralTrialOfferId: z,
            subscriptionPeriodEnd: X,
            showTotal: J = !0,
            discountInvoiceItems: q,
            handleClose: Q
        } = e, {
            activeSubscription: $,
            setSelectedPlanId: ee,
            selectedSkuId: en,
            selectedPlan: es,
            priceOptions: el,
            annualDiscountInvoicePreview: ei
        } = (0, I.usePaymentContext)(), {
            isGift: et,
            giftRecipient: er,
            selectedGiftStyle: ea,
            customGiftMessage: ec,
            setCustomGiftMessage: eo
        } = (0, m.wD)(), eu = (0, T.MY)(er), ed = et && (0, T.pO)(er), {confirmUpsellEnabled: e_} = (0, d.Z)({ location: 'PremiumSwitchPlanSelectBody' });
    H = null != H ? H : en, B = null != B ? B : $, r()(void 0 !== B, 'should not be undefined');
    let [em, eI] = (0, a.Wu)([p.Z], () => [
            null != B ? p.Z.get(B.planId) : null,
            null != k ? p.Z.get(k) : null
        ]), eE = (0, f.N)(z), ep = null == eE ? void 0 : eE.subscription_trial, eN = (0, v.Ng)(), eT = (0, v.z1)(), eS = null == eN ? void 0 : null === (n = eN.discount) || void 0 === n ? void 0 : n.plan_ids, ex = null != eI ? eI : es, eh = i.useCallback(e => {
            null != W ? W(e) : ee(e);
        }, [
            W,
            ee
        ]), eP = null != Y ? Y : el;
    r()(null != eP, 'Price option has to be set');
    let eA = null != eE && b.nG[eE.trial_id].skus.includes(H), ev = null != eN && K.some(e => null == eS ? void 0 : eS.includes(e)) && null != eN.discount, ef = null == eE && (null == eT ? void 0 : eT.discount) != null && (null == ei ? void 0 : ei.invoiceItems) != null && K.some(e => {
            var n, s;
            return null == eT ? void 0 : null === (s = eT.discount) || void 0 === s ? void 0 : null === (n = s.plan_ids) || void 0 === n ? void 0 : n.includes(e);
        }), eM = (0, x.aS)(b.Xh.PREMIUM_MONTH_TIER_2, !1, et, eP), eg = (0, x.aS)(b.Xh.PREMIUM_YEAR_TIER_2, !1, et, eP);
    i.useEffect(() => {
        V && P.ZP.trackExposure({ location: '5f89bb_1' });
    }, [V]);
    let eC = (null == ex ? void 0 : ex.id) != null && K.includes(ex.id);
    i.useEffect(() => {
        if (!eC) {
            if (null == em || et)
                eh(K[0]);
            else if (null != em) {
                let e = K.find(e => e !== em.id);
                null != e && eh(e);
            }
        }
    }, [
        eC,
        et,
        K,
        em,
        eh
    ]);
    let eR = !ed && (et || !eA && !ev && !ef) && eC && J, eO = (0, c.useRadioGroup)(), eL = (null == ex ? void 0 : ex.id) != null ? (0, x.aS)(ex.id, !1, et, eP) : void 0, {ipCountryCode: ej} = (0, A.Z)(), ey = 'HR' === ej && null != eL && eL.currency === G.pK.EUR, eZ = (0, x.Ap)(eP.paymentSourceId), eb = (null == ep ? void 0 : ep.interval) === b.rV.DAY ? U.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : U.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD, eD = !et && (ev || ef || null != ep && eA && null != X), eG = null == q ? void 0 : null === (E = q.find(e => e.subscriptionPlanId === b.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === E ? void 0 : null === (t = E.discounts) || void 0 === t ? void 0 : null === (s = t.find(e => e.type === u.eW.SUBSCRIPTION_PLAN)) || void 0 === s ? void 0 : s.amount, eU = null == ei ? void 0 : null === (w = ei.invoiceItems) || void 0 === w ? void 0 : null === (j = w.find(e => e.subscriptionPlanId === b.Xh.PREMIUM_YEAR_TIER_2)) || void 0 === j ? void 0 : null === (L = j.discounts) || void 0 === L ? void 0 : null === (N = L.find(e => e.type === u.eW.SUBSCRIPTION_PLAN)) || void 0 === N ? void 0 : N.amount;
    return (0, l.jsx)(l.Fragment, {
        children: (0, l.jsxs)('div', {
            className: ed ? F.stepBodyCustomGift : F.stepBody,
            children: [
                (0, l.jsxs)('div', {
                    className: ed ? F.bodyColumnMiddle : void 0,
                    children: [
                        (0, l.jsx)(M.Z, {
                            fromBoostCancelModal: !1,
                            className: F.legacyPricingNotice
                        }),
                        ed && null != ea && (0, l.jsx)(O.q, {})
                    ]
                }),
                (0, l.jsxs)('div', {
                    className: ed ? F.bodyColumnRight : void 0,
                    children: [
                        (0, l.jsx)(Z.s, { giftRecipient: er }),
                        (() => {
                            if (eu === T.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != eo)
                                return (0, l.jsx)(R.Z, {
                                    sectionTitle: U.Z.Messages.GIFT_OPTIONAL_MESSAGE,
                                    onTextChange: e => eo(e),
                                    pendingText: ec,
                                    currentText: ec
                                });
                        })(),
                        null != em && !et && null == eU && (0, l.jsx)('div', {
                            className: F.bodyText,
                            children: function (e, n) {
                                let s = U.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH, l = U.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR, i = (() => {
                                        switch (e.interval) {
                                        case b.rV.YEAR:
                                            return s;
                                        case b.rV.MONTH:
                                        default:
                                            return l;
                                        }
                                    })(), t = e.skuId;
                                switch (n) {
                                case b.Si.TIER_0:
                                    switch (t) {
                                    case b.Si.TIER_1:
                                        return U.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                                    case b.Si.TIER_2:
                                        return U.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                                    default:
                                        return i;
                                    }
                                case b.Si.TIER_1:
                                    switch (t) {
                                    case b.Si.TIER_0:
                                        return U.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                                    case b.Si.TIER_2:
                                        return U.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                                    default:
                                        return i;
                                    }
                                case b.Si.TIER_2:
                                    switch (t) {
                                    case b.Si.TIER_0:
                                    case b.Si.TIER_1:
                                        return U.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                                    case b.Si.TIER_2:
                                        return e.interval === b.rV.MONTH ? U.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({ numFreeGuildSubscriptions: b.cb }) : i;
                                    default:
                                        return i;
                                    }
                                default:
                                    return i;
                                }
                            }(em, H)
                        }),
                        ((e, n, s, i) => {
                            if (ed)
                                return (0, l.jsx)(c.FormTitle, { children: U.Z.Messages.GIFT_SUBSCRIPTION_SELECTION });
                            if (!eD)
                                return (0, l.jsx)('div', {
                                    className: F.selectPlanChooseTitle,
                                    children: U.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
                                });
                            if (n) {
                                let n = (null == e ? void 0 : e.trial_id) === b.a7;
                                return (0, l.jsxs)('div', {
                                    children: [
                                        (0, l.jsx)(c.Text, {
                                            variant: 'text-sm/normal',
                                            className: F.trialPlanSelectHeader,
                                            children: n ? U.Z.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({ endDate: X }) : U.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                                                trialEnd: X,
                                                trialPeriod: eb
                                            })
                                        }),
                                        (0, l.jsx)('hr', { className: F.planSelectSeparator })
                                    ]
                                });
                            }
                            return s && null != eG && null != eM && k === b.Xh.PREMIUM_MONTH_TIER_2 ? (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        className: F.trialPlanSelectHeader,
                                        children: U.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                                            numMonths: null == eN ? void 0 : eN.discount.user_usage_limit,
                                            discountedPrice: (0, h.T4)(eM.amount - eG, eM.currency),
                                            regularPrice: (0, h.T4)(eM.amount, eM.currency)
                                        })
                                    }),
                                    (0, l.jsx)('hr', { className: F.planSelectSeparator })
                                ]
                            }) : i && null != eU && null != eg && k === b.Xh.PREMIUM_YEAR_TIER_2 ? (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)(c.Text, {
                                        variant: 'text-sm/normal',
                                        className: F.trialPlanSelectHeader,
                                        children: U.Z.Messages.BILLING_ANNUAL_DISCOUNT_PAYMENT_MODAL_INFO.format({
                                            discountedPrice: (0, h.T4)(eg.amount - eU, eg.currency),
                                            regularPrice: (0, h.T4)(eg.amount, eg.currency)
                                        })
                                    }),
                                    (0, l.jsx)('hr', { className: F.planSelectSeparator })
                                ]
                            }) : void 0;
                        })(eE, eA, ev, ef),
                        (0, l.jsx)('div', {
                            ...eO,
                            children: K.map(e => (0, l.jsx)(y.Z, {
                                planId: e,
                                premiumSubscription: et ? null : null != B ? B : null,
                                selectPlan: eh,
                                selected: (null == ex ? void 0 : ex.id) === e,
                                priceOptions: eP,
                                shouldShowUpdatedPaymentModal: eD,
                                isEligibleForDiscount: ev,
                                discountAmountOff: eG,
                                isEligibleForAnnualDiscount: ef,
                                annualDiscountAmountOff: eU,
                                isEligibleForTrial: eA
                            }, e))
                        }),
                        (0, l.jsx)('div', {
                            children: eR && null != ex && null != eL ? (0, l.jsxs)('div', {
                                children: [
                                    (0, l.jsx)('div', { className: F.selectPlanDivider }),
                                    (0, l.jsx)(g.Ji, {
                                        label: U.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                                        value: (0, l.jsx)(C.Z, {
                                            price: eL.amount,
                                            currency: eL.currency,
                                            intervalType: et ? null : ex.interval,
                                            intervalCount: ex.intervalCount,
                                            isPrepaidPaymentSource: eZ
                                        }),
                                        className: F.selectPlanTotalRow
                                    })
                                ]
                            }) : null
                        }),
                        ey && (0, l.jsx)(o.Z, { message: U.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({ kunaPriceWithCurrency: (0, h.T4)(7.5345 * eL.amount, G.pK.HRK) }) }),
                        !et && !eD && J && (0, l.jsx)(o.Z, { message: U.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({ documentationLink: S.Z.getArticleURL(D.BhN.LOCALIZED_PRICING) }) }),
                        e_ && et && (0, l.jsx)(_.Z, { onClose: Q })
                    ]
                })
            ]
        })
    });
}
function B(e) {
    let {
            onStepChange: n,
            selectedPlanId: s,
            paymentSources: i,
            onBackClick: t,
            showBackButton: r,
            planOptions: a,
            shouldRenderUpdatedPaymentModal: o = !1,
            isTrial: u
        } = e, {
            paymentSources: d,
            selectedPlan: _
        } = (0, I.usePaymentContext)(), {isGift: E} = (0, m.wD)();
    return i = null != i ? i : d, s = null != s ? s : null == _ ? void 0 : _.id, (0, l.jsxs)(l.Fragment, {
        children: [
            null != s && a.includes(s) ? (0, l.jsx)(H, {
                paymentSources: i,
                onStepChange: n,
                selectedPlanId: s,
                isGift: E,
                shouldRenderUpdatedPaymentModal: o,
                isTrial: u
            }) : (0, l.jsx)(c.Button, {
                disabled: !0,
                children: U.Z.Messages.SELECT
            }),
            r ? (0, l.jsx)(L.Z, { onClick: t }) : null
        ]
    });
}
function H(e) {
    let {
            onStepChange: n,
            selectedPlanId: s,
            isGift: i,
            paymentSources: t,
            shouldRenderUpdatedPaymentModal: r,
            isTrial: o
        } = e, u = (0, a.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()), {hasEntitlements: d} = (0, j.H)(s, i), _ = null != u && null != u.paymentSourceId || Object.keys(t).length > 0 || d && !o;
    var m = r ? U.Z.Messages.NEXT : U.Z.Messages.SELECT, I = E.h8.ADD_PAYMENT_STEPS;
    return _ && (I = E.h8.REVIEW), (0, l.jsx)(c.Button, {
        onClick: () => n(I),
        children: m
    });
}
