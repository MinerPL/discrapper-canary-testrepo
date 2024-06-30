t.d(n, {
    x: function () {
        return F;
    }
}), t(47120);
var i = t(735250), r = t(470079), o = t(512722), a = t.n(o), s = t(399606), l = t(481060), d = t(975608), c = t(711459), C = t(374649), u = t(424082), _ = t(650032), p = t(439017), f = t(104494), x = t(639119), h = t(642530), b = t(248042), g = t(381507), m = t(314404), I = t(230927), L = t(594174), E = t(509545), M = t(285952), T = t(669079), N = t(63063), S = t(74538), j = t(987209), A = t(598), O = t(409813), R = t(51499), P = t(456251), y = t(614277), v = t(809144), B = t(698708), k = t(981631), Z = t(474936), H = t(689938), U = t(269306);
function F(e) {
    var n, t, o, F;
    let {
            handleStepChange: w,
            initialPlanId: G,
            subscriptionTier: W,
            trialId: D,
            referralTrialOfferId: Y,
            handleClose: K,
            planGroup: V
        } = e, {
            activeSubscription: X,
            hasFetchedSubscriptions: z,
            paymentSourceId: Q,
            paymentSources: q,
            selectedSkuId: J,
            selectedPlan: $,
            step: ee,
            defaultPlanId: en,
            priceOptions: et,
            isPremium: ei,
            setAnnualDiscountInvoicePreview: er
        } = (0, A.usePaymentContext)(), {
            isGift: eo,
            giftRecipient: ea,
            giftMessage: es
        } = (0, j.wD)(), el = null != Q ? q[Q] : null, {newPlans: ed} = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }), ec = (0, s.e7)([L.default], () => L.default.getCurrentUser()), eC = !eo && null != J && J === Z.Si.TIER_2 && null != ec && ec.hasHadPremium() && z && null == X && (0, c.aQ)(el), eu = (0, x.N)(Y);
    (0, u.Uh)('PremiumPaymentPlanSelectStep', null == eu);
    let e_ = !eo && null != eu && null != J && Z.nG[eu.trial_id].skus.includes(J), ep = (0, f.Ng)(), ef = null == ep ? void 0 : null === (n = ep.discount) || void 0 === n ? void 0 : n.plan_ids.some(e => Z.GP[e].skuId === J), ex = !eo && null != ep && null != J && ef, eh = null !== (t = e_ || ex) && void 0 !== t && t, {defaultToMonthlyPlan: eb} = p.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }), eg = r.useMemo(() => (0, S.V7)({
            skuId: J,
            isPremium: ei,
            multiMonthPlans: eC ? ed : [],
            currentSubscription: X,
            isGift: eo,
            isEligibleForTrial: e_,
            defaultPlanId: en,
            defaultToMonthlyPlan: eb
        }), [
            J,
            ei,
            ed,
            X,
            eC,
            eo,
            e_,
            en,
            eb
        ]), em = ex && eg.includes(Z.Xh.PREMIUM_MONTH_TIER_2) ? Z.Xh.PREMIUM_MONTH_TIER_2 : eg[0], eI = (0, s.e7)([E.Z], () => E.Z.get(em)), eL = [{
                planId: null == eI ? void 0 : eI.id,
                quantity: 1
            }], [eE, eM] = r.useState(eh), [eT, eN] = (0, C.ED)({
            items: eL,
            renewal: !1,
            preventFetch: !eh,
            applyEntitlements: !0,
            trialId: D,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency
        }), {
            annualInvoicePreview: eS,
            annualInvoicePreviewError: ej,
            isEligibleForAnnualDiscount: eA
        } = (0, I.g)({
            priceOptions: et,
            preventFetch: !eg.includes(Z.Xh.PREMIUM_YEAR_TIER_2),
            selectedSkuId: J,
            isGift: eo,
            planGroup: V,
            activeSubscription: X
        });
    null != eS && er(eS), r.useEffect(() => {
        eh && eM((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null);
    }, [
        eT,
        eh
    ]), (0, d.Z)('Payment Modal Plan Select Step', eE, 5, {
        proratedInvoicePreview: eT,
        annualInvoicePreview: eS,
        proratedInvoiceError: eN,
        annualInvoicePreviewError: ej,
        isEligibleForOffer: eh
    }, { tags: { app_context: 'billing' } });
    let eO = eA && null == ej, eR = null !== (F = null !== (o = null == eN ? void 0 : eN.message) && void 0 !== o ? o : null == ej ? void 0 : ej.message) && void 0 !== F ? F : H.Z.Messages.ERROR_GENERIC_TITLE, eP = eh && null == eN || eO, ey = eh && null != eN || eA && null != ej, ev = eP && null == X && !!eh && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null || eO && (null == eS ? void 0 : eS.subscriptionPeriodEnd) == null, {enabled: eB} = _._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }), ek = !eo && (null == eI ? void 0 : eI.skuId) === Z.Si.TIER_2 && (null == eu ? void 0 : eu.referrer_id) != null && eB, eZ = (0, b.Vi)() && !eo && (null == eI ? void 0 : eI.skuId) === Z.Si.TIER_2, eH = null;
    return (ek ? eH = (0, i.jsx)(g.Z, {}) : eZ && (eH = (0, i.jsx)(h.Z, {})), ev) ? (0, i.jsx)(P.Z, {}) : (a()(null != ee, 'Step should be set'), a()(eg.length > 0, 'Premium plan options should be set'), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.P, { giftMessage: es }),
            !(eo && (0, T.pO)(ea)) && (0, i.jsx)(R.Z, { isEligibleForTrial: e_ }),
            (0, i.jsxs)(y.C3, {
                children: [
                    eP && (0, i.jsx)('hr', { className: U.planSelectSeparatorUpper }),
                    eH,
                    (0, i.jsx)(B.Z, {}),
                    ey ? (0, i.jsx)(l.FormErrorBlock, { children: eR }) : (0, i.jsx)(m.O, {
                        planOptions: eg,
                        eligibleForMultiMonthPlans: eC,
                        referralTrialOfferId: Y,
                        selectedPlanId: null == $ ? void 0 : $.id,
                        subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                        discountInvoiceItems: ex ? null == eT ? void 0 : eT.invoiceItems : void 0,
                        handleClose: K
                    }),
                    eP && (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)('hr', { className: U.planSelectSeparatorLower }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                children: H.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({ link: N.Z.getArticleURL(k.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(y.O3, {
                children: (0, i.jsx)(l.ModalFooter, {
                    justify: M.Z.Justify.BETWEEN,
                    align: M.Z.Align.CENTER,
                    children: (0, i.jsx)(m.M, {
                        onStepChange: w,
                        onBackClick: () => w(O.h8.SKU_SELECT),
                        showBackButton: null == G && null == W,
                        planOptions: eg,
                        shouldRenderUpdatedPaymentModal: eP,
                        isTrial: e_
                    })
                })
            })
        ]
    }));
}
