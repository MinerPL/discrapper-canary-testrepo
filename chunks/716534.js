s.d(n, {
    Z: function () {
        return W;
    }
}), s(47120);
var l = s(735250), i = s(470079), t = s(512722), r = s.n(t), a = s(742280), c = s(442837), o = s(692547), u = s(481060), d = s(190947), _ = s(224550), m = s(275850), I = s(672971), E = s(128069), p = s(987209), N = s(598), T = s(45572), S = s(919778), x = s(614223), h = s(246946), P = s(351402), A = s(509545), v = s(669079), f = s(74538), M = s(937615), g = s(479446), C = s(374649), R = s(424082), O = s(104494), L = s(639119), j = s(653798), y = s(314182), Z = s(981632), b = s(314404), D = s(42818), G = s(459965), U = s(251660), F = s(474936), w = s(981631), B = s(231338), H = s(689938), k = s(473571);
function W(e) {
    var n, s, t, W;
    let Y, K, V, {
            selectedPlanId: z,
            paymentSources: X,
            priceOptions: J,
            currencies: q,
            onCurrencyChange: Q,
            onPaymentSourceChange: $,
            handlePaymentSourceAdd: ee,
            setHasAcceptedTerms: en,
            legalTermsNodeRef: es,
            hasLegalTermsFlash: el,
            trialId: ei,
            trialFooterMessageOverride: et,
            reviewWarningMessage: er,
            metadata: ea,
            purchaseState: ec,
            hideSubscriptionDetails: eo,
            referralTrialOfferId: eu,
            isTrial: ed = !1,
            isDiscount: e_ = !1,
            handleClose: em
        } = e, {
            isEmbeddedIAP: eI,
            activeSubscription: eE,
            selectedSkuId: ep,
            defaultPlanId: eN,
            isPremium: eT,
            startedPaymentFlowWithPaymentSourcesRef: eS,
            setInvoicePreview: ex,
            contextMetadata: eh
        } = (0, N.usePaymentContext)(), {
            isGift: eP,
            giftRecipient: eA,
            selectedGiftStyle: ev
        } = (0, p.wD)(), ef = (0, O.Ng)(), eM = (0, L.N)(eu);
    (0, R.Uh)('PremiumSubscriptionReview', null == eM);
    let eg = null == ef ? void 0 : null === (n = ef.discount) || void 0 === n ? void 0 : n.plan_ids.some(e => F.GP[e].skuId === ep), eC = !eP && null != ef && null != ep && eg, eR = (0, c.e7)([A.Z], () => A.Z.get(z));
    r()(null != eR, 'Missing plan');
    let eO = [{
                planId: eR.id,
                quantity: 1
            }], eL = ec === T.A.PURCHASING || ec === T.A.COMPLETED, ej = eP || eL, [ey, eZ] = (0, C.ED)({
            items: eO,
            renewal: !1,
            preventFetch: ej,
            applyEntitlements: !0,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            trialId: ei,
            metadata: ea
        }), [eb, eD] = (0, C.ED)({
            items: eO,
            renewal: !0,
            preventFetch: ej,
            trialId: ei,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            metadata: ea
        }), [eG, eU] = (0, C.ED)({
            items: [{
                    planId: F.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }],
            renewal: !0,
            preventFetch: !eC,
            trialId: ei,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            metadata: ea
        }), [eF, ew] = (0, C.o5)({
            paymentSourceId: J.paymentSourceId,
            skuId: ep,
            subscriptionPlanId: z,
            currency: J.currency,
            preventFetch: !eP || eL,
            loadId: eh.loadId
        });
    i.useEffect(() => {
        ex(eF);
    }, [
        ex,
        eF
    ]);
    let eB = eP && (0, v.pO)(eA), eH = null !== (W = null !== (t = null != eZ ? eZ : eD) && void 0 !== t ? t : eU) && void 0 !== W ? W : ew, ek = (0, c.e7)([h.Z], () => h.Z.enabled), eW = J.paymentSourceId, {
            hasEntitlements: eY,
            entitlements: eK
        } = (0, G.H)(eR.id, eP), eV = (0, f.Ap)(J.paymentSourceId), ez = (0, S.sE)(ei, eW, z), eX = (0, x.Kp)({
            isTrial: ed,
            isGift: eP,
            selectedSkuId: ep,
            startedPaymentFlowWithPaymentSources: eS.current
        }), [eJ, eq] = i.useState(null == ey ? void 0 : ey.subscriptionPeriodEnd);
    i.useEffect(() => {
        null == eJ && eq(null == ey ? void 0 : ey.subscriptionPeriodEnd);
    }, [
        null == ey ? void 0 : ey.subscriptionPeriodEnd,
        eJ
    ]);
    let eQ = i.useMemo(() => (0, f.V7)({
            skuId: ep,
            isPremium: eT,
            multiMonthPlans: [],
            currentSubscription: eE,
            isGift: eP,
            isEligibleForTrial: ed,
            defaultPlanId: eN,
            defaultToMonthlyPlan: !1
        }), [
            ep,
            eE,
            eP,
            eN,
            eT,
            ed
        ]), e$ = (0, x.$g)(eX, ey, eR);
    if (null != eH) {
        let e = eH.message;
        eH.code === E.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = H.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), K = (0, l.jsx)(u.FormErrorBlock, { children: e });
    } else if (eP && null != eF)
        V = (0, l.jsx)(D.e9, {
            plan: eR,
            className: k.invoice,
            isPrepaidPaymentSource: eV,
            isCustomGift: eB,
            invoicePreview: eF
        });
    else if (ed && null != ey)
        V = (0, l.jsxs)('div', {
            children: [
                (0, l.jsx)(j.KU, { negativeMarginTop: !0 }),
                (0, l.jsxs)(j.PO, {
                    className: k.invoice,
                    children: [
                        (0, l.jsxs)('div', {
                            className: k.trialPriceLine,
                            children: [
                                (0, l.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: H.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                                }),
                                (0, l.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: H.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({ price: (0, M.T4)(0, ey.currency, { maximumFractionDigits: 0 }) })
                                })
                            ]
                        }),
                        (0, l.jsx)('div', {
                            className: k.afterTrialPriceLine,
                            children: (0, l.jsx)(D.yT, {
                                invoice: ey,
                                plan: eR
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == ey || null == eb || e$)
            return (0, l.jsx)('div', {
                className: k.spinnerWrapper,
                children: (0, l.jsx)(u.Spinner, {})
            });
        ed && ey.subscriptionPeriodEnd !== eb.subscriptionPeriodEnd && (Y = ey.subscriptionPeriodEnd), V = (0, l.jsxs)(j.PO, {
            className: k.invoice,
            children: [
                (0, l.jsx)(j.q9, { children: H.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                (0, l.jsx)(D.Lu, {
                    invoice: ey,
                    newPlan: eR,
                    isPrepaidPaymentSource: eV,
                    referralTrialOfferId: eu
                }),
                eV ? null : (0, l.jsx)(D.nd, {
                    renewalInvoice: eb,
                    isTrial: ed,
                    priceOptions: J,
                    overrideRenewalDate: Y,
                    trialFooterMessageOverride: et,
                    hideSubscriptionDetails: eo
                })
            ]
        });
    }
    let e0 = a.M.EEA_COUNTRIES.has(P.Z.ipCountryCodeWithFallback), {
            checkboxLabel: e1,
            checkboxClassname: e9,
            checkboxLabelClassname: e4
        } = function (e, n, s) {
            let l = null, i = null, t = null;
            if (e && null != n) {
                let {
                        intervalType: e,
                        intervalCount: r
                    } = f.ZP.getIntervalForInvoice(n), a = (0, M.og)((0, M.T4)(n.total, n.currency), e, r), c = null != s ? s : n.subscriptionPeriodEnd;
                l = H.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                    termsURL: w.EYA.TERMS,
                    paidURL: w.EYA.PAID_TERMS,
                    rate: a,
                    renewalDate: c
                }), i = k.trialCheckbox, t = k.trialCheckboxLabel;
            }
            return {
                checkboxLabel: l,
                checkboxClassname: i,
                checkboxLabelClassname: t
            };
        }(null != ed && ed, eb, Y), e7 = H.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({ planName: eR.name });
    return eP && !eB ? e7 = H.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eP && eB ? e7 = '' : (0, f.PV)(eR.id) && (e7 = f.ZP.getBillingReviewSubheader(null, eR)), ez ? null : (0, l.jsxs)('div', {
        className: k.stepBody,
        children: [
            null != er && (0, l.jsxs)('div', {
                className: k.reviewWarningMessageContainer,
                children: [
                    (0, l.jsx)(u.CircleInformationIcon, {
                        size: 'custom',
                        color: o.Z.unsafe_rawColors.YELLOW_300.css,
                        width: 20,
                        height: 20
                    }),
                    (0, l.jsx)(u.Text, {
                        className: k.reviewWarningMessage,
                        variant: 'text-sm/normal',
                        children: er
                    })
                ]
            }),
            K,
            eX && (0, l.jsxs)('div', {
                children: [
                    (0, l.jsx)(j.KU, {
                        negativeMarginTop: !0,
                        negativeMarginBottom: !0
                    }),
                    (0, l.jsx)(b.O, {
                        planOptions: eQ,
                        eligibleForMultiMonthPlans: !1,
                        referralTrialOfferId: void 0,
                        selectedPlanId: z,
                        subscriptionPeriodEnd: eJ,
                        showTotal: !1,
                        discountInvoiceItems: eC ? null == eG ? void 0 : eG.invoiceItems : void 0,
                        handleClose: em
                    }),
                    (0, l.jsx)(j.KU, {})
                ]
            }),
            !ed && (0, l.jsx)(u.FormTitle, {
                tag: u.FormTitleTags.H5,
                children: e7
            }),
            eB && null != ev && (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(Z.Z, {
                        defaultAnimationState: g.S.LOOP,
                        giftStyle: ev,
                        shouldAnimate: !0,
                        className: k.__invalid_giftMainAnimation
                    }),
                    (0, l.jsx)(U.s, { giftRecipient: eA })
                ]
            }),
            V,
            (0, l.jsxs)('div', {
                className: k.paymentSourceWrapper,
                children: [
                    ed ? (0, l.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        className: k.formTitle,
                        children: H.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                    }) : (0, l.jsx)(u.FormTitle, {
                        tag: u.FormTitleTags.H5,
                        children: H.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                    }),
                    (0, l.jsx)(m.Z, {
                        paymentSources: Object.values(X),
                        selectedPaymentSourceId: eW,
                        prependOption: eY && !ed ? {
                            label: H.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                            value: null
                        } : null,
                        onChange: $,
                        onPaymentSourceAdd: ee,
                        hidePersonalInformation: ek,
                        isTrial: ed
                    }),
                    eY && null == eW ? (0, l.jsx)('div', {
                        className: k.paymentSourceOptionalWarning,
                        children: H.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({ months: eK.length })
                    }) : null,
                    e_ ? null : (0, l.jsxs)(d.b, {
                        currencies: q,
                        className: k.currencyWrapper,
                        children: [
                            (0, l.jsx)(u.FormTitle, {
                                tag: u.FormTitleTags.H5,
                                children: H.Z.Messages.PAYMENT_CURRENCY
                            }),
                            (0, l.jsx)(d.Z, {
                                selectedCurrency: J.currency,
                                currencies: q,
                                onChange: Q
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(y.Z, {
                isActive: el,
                ref: es,
                children: (0, l.jsx)(I.Z, {
                    onChange: en,
                    forceShow: !0,
                    checkboxLabel: e1,
                    checkboxClassname: e9,
                    checkboxLabelClassname: e4,
                    finePrint: null != et ? et : (0, l.jsx)(_.Z, {
                        hide: ed || e_,
                        subscriptionPlan: eR,
                        renewalInvoice: eb,
                        isGift: eP,
                        paymentSourceType: null === (s = X[null != eW ? eW : '']) || void 0 === s ? void 0 : s.type,
                        isEmbeddedIAP: eI,
                        basePrice: (0, f.aS)(eR.id, !1, eP, J)
                    }),
                    showPricingLink: eR.currency !== B.pK.USD,
                    showWithdrawalWaiver: e0,
                    disabled: eL,
                    isTrial: ed && null == et,
                    isDiscount: e_,
                    subscriptionPlan: eR,
                    isGift: eP
                })
            })
        ]
    });
}
