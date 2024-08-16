t.d(n, {
    Z: function () {
        return H;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    r = t(512722),
    s = t.n(r),
    l = t(742280),
    o = t(442837),
    c = t(692547),
    u = t(481060),
    d = t(190947),
    _ = t(224550),
    p = t(275850),
    m = t(672971),
    I = t(128069),
    f = t(987209),
    E = t(598),
    x = t(45572),
    N = t(919778),
    S = t(614223),
    T = t(246946),
    h = t(351402),
    b = t(509545),
    g = t(669079),
    P = t(74538),
    v = t(937615),
    A = t(479446),
    y = t(374649),
    M = t(104494),
    C = t(642530),
    O = t(653798),
    R = t(314182),
    L = t(981632),
    j = t(314404),
    Z = t(42818),
    D = t(459965),
    w = t(251660),
    G = t(474936),
    B = t(981631),
    U = t(231338),
    k = t(689938),
    F = t(56035);
function H(e) {
    var n, t, r, H, W;
    let Y,
        K,
        V,
        { selectedPlanId: z, paymentSources: X, priceOptions: q, currencies: J, onCurrencyChange: Q, onPaymentSourceChange: $, handlePaymentSourceAdd: ee, setHasAcceptedTerms: en, legalTermsNodeRef: et, hasLegalTermsFlash: ei, trialId: ea, trialFooterMessageOverride: er, reviewWarningMessage: es, metadata: el, purchaseState: eo, hideSubscriptionDetails: ec, referralTrialOfferId: eu, isTrial: ed = !1, isDiscount: e_ = !1, handleClose: ep } = e,
        { isEmbeddedIAP: em, activeSubscription: eI, selectedSkuId: ef, defaultPlanId: eE, isPremium: ex, startedPaymentFlowWithPaymentSourcesRef: eN, setInvoicePreview: eS, contextMetadata: eT, inReverseTrial: eh } = (0, E.usePaymentContext)(),
        { isGift: eb, giftRecipient: eg, selectedGiftStyle: eP } = (0, f.wD)(),
        ev = (0, M.Ng)(),
        eA = null == ev ? void 0 : null === (n = ev.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => G.GP[e].skuId === ef),
        ey = !eb && null != ev && null != ef && eA,
        eM = (0, o.e7)([b.Z], () => b.Z.get(z));
    s()(null != eM, 'Missing plan');
    let eC = [
            {
                planId: eM.id,
                quantity: 1
            }
        ],
        eO = eo === x.A.PURCHASING || eo === x.A.COMPLETED,
        [eR, eL] = (0, y.ED)({
            items: eC,
            renewal: !1,
            preventFetch: eh || eb || eO,
            applyEntitlements: !0,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            trialId: ea,
            metadata: el
        }),
        [ej, eZ] = (0, y.ED)({
            subscriptionId: null == eI ? void 0 : eI.id,
            items: eC,
            renewal: !0,
            preventFetch: eb || eO,
            trialId: ea,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: el
        }),
        [eD, ew] = (0, y.ED)({
            items: [
                {
                    planId: G.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !ey,
            trialId: ea,
            paymentSourceId: q.paymentSourceId,
            currency: q.currency,
            metadata: el
        }),
        [eG, eB] = (0, y.o5)({
            paymentSourceId: q.paymentSourceId,
            skuId: ef,
            subscriptionPlanId: z,
            currency: q.currency,
            preventFetch: !eb || eO,
            loadId: eT.loadId
        });
    a.useEffect(() => {
        eS(eG);
    }, [eS, eG]);
    let eU = eb && (0, g.pO)(eg),
        ek = null !== (H = null !== (r = null != eL ? eL : eZ) && void 0 !== r ? r : ew) && void 0 !== H ? H : eB,
        eF = (0, o.e7)([T.Z], () => T.Z.enabled),
        eH = q.paymentSourceId,
        { hasEntitlements: eW, entitlements: eY } = (0, D.H)(eM.id, eb),
        eK = (0, P.Ap)(q.paymentSourceId),
        eV = (0, N.sE)(ea, eH, z),
        ez = (0, S.Kp)({
            isTrial: ed,
            isGift: eb,
            selectedSkuId: ef,
            startedPaymentFlowWithPaymentSources: eN.current,
            inReverseTrial: eh
        }),
        [eX, eq] = a.useState(null == eR ? void 0 : eR.subscriptionPeriodEnd);
    a.useEffect(() => {
        null == eX && eq(null == eR ? void 0 : eR.subscriptionPeriodEnd);
    }, [null == eR ? void 0 : eR.subscriptionPeriodEnd, eX]);
    let eJ = a.useMemo(
            () =>
                (0, P.V7)({
                    skuId: ef,
                    isPremium: ex,
                    multiMonthPlans: [],
                    currentSubscription: eI,
                    isGift: eb,
                    isEligibleForTrial: ed,
                    defaultPlanId: eE,
                    defaultToMonthlyPlan: !1
                }),
            [ef, eI, eb, eE, ex, ed]
        ),
        eQ = (0, S.$g)(ez, eR, eM),
        e$ = a.useMemo(() => (ed && null != eR ? eR : eh && null != ej ? ej : void 0), [eh, ed, eR, ej]);
    if (null != ek) {
        let e = ek.message;
        ek.code === I.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (K = (0, i.jsx)(u.FormErrorBlock, { children: e }));
    } else if (eb && null != eG)
        V = (0, i.jsx)(Z.e9, {
            plan: eM,
            className: F.invoice,
            isPrepaidPaymentSource: eK,
            isCustomGift: eU,
            invoicePreview: eG
        });
    else if (null != e$)
        V = (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(O.KU, { negativeMarginTop: !eh }),
                (0, i.jsxs)(O.PO, {
                    className: F.invoice,
                    children: [
                        (0, i.jsxs)('div', {
                            className: F.trialPriceLine,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: k.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: k.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({ price: (0, v.T4)(0, e$.currency, { maximumFractionDigits: 0 }) })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: F.afterTrialPriceLine,
                            children: (0, i.jsx)(Z.yT, {
                                invoice: e$,
                                plan: eM
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eR || null == ej || eQ)
            return (0, i.jsx)('div', {
                className: F.spinnerWrapper,
                children: (0, i.jsx)(u.Spinner, {})
            });
        ed && eR.subscriptionPeriodEnd !== ej.subscriptionPeriodEnd && (Y = eR.subscriptionPeriodEnd),
            (V = (0, i.jsxs)(O.PO, {
                className: F.invoice,
                children: [
                    (0, i.jsx)(O.q9, { children: k.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, i.jsx)(Z.Lu, {
                        invoice: eR,
                        newPlan: eM,
                        isPrepaidPaymentSource: eK,
                        referralTrialOfferId: eu
                    }),
                    eK
                        ? null
                        : (0, i.jsx)(Z.nd, {
                              renewalInvoice: ej,
                              isTrial: ed,
                              priceOptions: q,
                              overrideRenewalDate: Y,
                              trialFooterMessageOverride: er,
                              hideSubscriptionDetails: ec
                          })
                ]
            }));
    }
    let e0 = l.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
        {
            checkboxLabel: e1,
            checkboxClassname: e7,
            checkboxLabelClassname: e4
        } = (function (e, n, t) {
            let i = null,
                a = null,
                r = null;
            if (e && null != n) {
                let { intervalType: e, intervalCount: s } = P.ZP.getIntervalForInvoice(n),
                    l = (0, v.og)((0, v.T4)(n.total, n.currency), e, s),
                    o = null != t ? t : n.subscriptionPeriodEnd;
                (i = k.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                    termsURL: B.EYA.TERMS,
                    paidURL: B.EYA.PAID_TERMS,
                    rate: l,
                    renewalDate: o
                })),
                    (a = F.trialCheckbox),
                    (r = F.trialCheckboxLabel);
            }
            return {
                checkboxLabel: i,
                checkboxClassname: a,
                checkboxLabelClassname: r
            };
        })(null != ed && ed, ej, Y),
        e2 = k.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({ planName: eM.name });
    return (
        eb && !eU ? (e2 = k.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT) : eb && eU ? (e2 = '') : (0, P.PV)(eM.id) && (e2 = P.ZP.getBillingReviewSubheader(null, eM)),
        eV
            ? null
            : (0, i.jsxs)('div', {
                  className: F.stepBody,
                  children: [
                      null != es &&
                          (0, i.jsxs)('div', {
                              className: F.reviewWarningMessageContainer,
                              children: [
                                  (0, i.jsx)(u.CircleInformationIcon, {
                                      size: 'custom',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, i.jsx)(u.Text, {
                                      className: F.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: es
                                  })
                              ]
                          }),
                      K,
                      ez &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(O.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, i.jsx)(C.Z, {}),
                                  (0, i.jsx)(j.O, {
                                      planOptions: eJ,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: z,
                                      subscriptionPeriodEnd: eX,
                                      showTotal: !1,
                                      discountInvoiceItems: ey ? (null == eD ? void 0 : eD.invoiceItems) : void 0,
                                      handleClose: ep
                                  }),
                                  (0, i.jsx)(O.KU, {})
                              ]
                          }),
                      eh &&
                          (0, i.jsx)(u.Heading, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: F.trialHeader,
                              children: k.Z.Messages.REVERSE_TRIAL_PAYMENT_MODAL_INFO.format({ trialEnd: null == eI ? void 0 : eI.currentPeriodEnd })
                          }),
                      !ed &&
                          (0, i.jsx)(u.FormTitle, {
                              tag: u.FormTitleTags.H5,
                              children: e2
                          }),
                      eU &&
                          null != eP &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(L.Z, {
                                      defaultAnimationState: A.S.LOOP,
                                      giftStyle: eP,
                                      shouldAnimate: !0,
                                      className: F.__invalid_giftMainAnimation
                                  }),
                                  (0, i.jsx)(w.s, { giftRecipient: eg })
                              ]
                          }),
                      V,
                      (0, i.jsxs)('div', {
                          className: F.paymentSourceWrapper,
                          children: [
                              ed
                                  ? (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        className: F.formTitle,
                                        children: k.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                                    })
                                  : (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        children: k.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                                    }),
                              (0, i.jsx)(p.Z, {
                                  paymentSources: Object.values(X),
                                  selectedPaymentSourceId: eH,
                                  prependOption:
                                      eW && !ed
                                          ? {
                                                label: k.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                                value: null
                                            }
                                          : null,
                                  onChange: $,
                                  onPaymentSourceAdd: ee,
                                  hidePersonalInformation: eF,
                                  isTrial: ed
                              }),
                              eW && null == eH
                                  ? (0, i.jsx)('div', {
                                        className: F.paymentSourceOptionalWarning,
                                        children: k.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({ months: eY.length })
                                    })
                                  : null,
                              e_
                                  ? null
                                  : (0, i.jsxs)(d.b, {
                                        currencies: J,
                                        className: F.currencyWrapper,
                                        children: [
                                            (0, i.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H5,
                                                children: k.Z.Messages.PAYMENT_CURRENCY
                                            }),
                                            (0, i.jsx)(d.Z, {
                                                selectedCurrency: q.currency,
                                                currencies: J,
                                                onChange: Q
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, i.jsx)(R.Z, {
                          isActive: ei,
                          ref: et,
                          children: (0, i.jsx)(m.Z, {
                              onChange: en,
                              forceShow: !0,
                              checkboxLabel: e1,
                              checkboxClassname: e7,
                              checkboxLabelClassname: e4,
                              finePrint:
                                  null !== (W = !eh && er) && void 0 !== W
                                      ? W
                                      : (0, i.jsx)(_.Z, {
                                            hide: ed || e_,
                                            subscriptionPlan: eM,
                                            renewalInvoice: ej,
                                            isGift: eb,
                                            paymentSourceType: null === (t = X[null != eH ? eH : '']) || void 0 === t ? void 0 : t.type,
                                            isEmbeddedIAP: em,
                                            basePrice: (0, P.aS)(eM.id, !1, eb, q)
                                        }),
                              showPricingLink: eM.currency !== U.pK.USD,
                              showWithdrawalWaiver: e0,
                              disabled: eO,
                              isTrial: ed && null == er,
                              inReverseTrial: eh,
                              isDiscount: e_,
                              subscriptionPlan: eM,
                              isGift: eb
                          })
                      })
                  ]
              })
    );
}
