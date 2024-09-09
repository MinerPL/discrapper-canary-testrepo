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
    P = t(63063),
    v = t(74538),
    A = t(937615),
    M = t(479446),
    y = t(374649),
    C = t(104494),
    O = t(642530),
    R = t(653798),
    L = t(314182),
    j = t(981632),
    Z = t(314404),
    D = t(42818),
    w = t(459965),
    G = t(251660),
    B = t(474936),
    U = t(981631),
    k = t(231338),
    F = t(689938),
    W = t(56035);
function H(e) {
    var n, t, r, H, Y;
    let V,
        K,
        z,
        { selectedPlanId: X, paymentSources: q, priceOptions: J, currencies: Q, onCurrencyChange: $, onPaymentSourceChange: ee, handlePaymentSourceAdd: en, setHasAcceptedTerms: et, legalTermsNodeRef: ei, hasLegalTermsFlash: ea, trialId: er, trialFooterMessageOverride: es, reviewWarningMessage: el, metadata: eo, purchaseState: ec, hideSubscriptionDetails: eu, referralTrialOfferId: ed, isTrial: e_ = !1, isDiscount: ep = !1, handleClose: em } = e,
        { isEmbeddedIAP: eI, activeSubscription: ef, selectedSkuId: eE, defaultPlanId: ex, isPremium: eN, startedPaymentFlowWithPaymentSourcesRef: eS, setInvoicePreview: eT, contextMetadata: eh, inReverseTrial: eb } = (0, E.usePaymentContext)(),
        { isGift: eg, giftRecipient: eP, selectedGiftStyle: ev } = (0, f.wD)(),
        eA = (0, C.Ng)(),
        eM = null == eA ? void 0 : null === (n = eA.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => B.GP[e].skuId === eE),
        ey = !eg && null != eA && null != eE && eM,
        eC = (0, o.e7)([b.Z], () => b.Z.get(X));
    s()(null != eC, 'Missing plan');
    let eO = [
            {
                planId: eC.id,
                quantity: 1
            }
        ],
        eR = ec === x.A.PURCHASING || ec === x.A.COMPLETED,
        [eL, ej] = (0, y.ED)({
            items: eO,
            renewal: !1,
            preventFetch: eb || eg || eR,
            applyEntitlements: !0,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            trialId: er,
            metadata: eo
        }),
        [eZ, eD] = (0, y.ED)({
            subscriptionId: null == ef ? void 0 : ef.id,
            items: eO,
            renewal: !0,
            preventFetch: eg || eR,
            trialId: er,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            metadata: eo
        }),
        [ew, eG] = (0, y.ED)({
            items: [
                {
                    planId: B.Xh.PREMIUM_MONTH_TIER_2,
                    quantity: 1
                }
            ],
            renewal: !0,
            preventFetch: !ey,
            trialId: er,
            paymentSourceId: J.paymentSourceId,
            currency: J.currency,
            metadata: eo
        }),
        [eB, eU] = (0, y.o5)({
            paymentSourceId: J.paymentSourceId,
            skuId: eE,
            subscriptionPlanId: X,
            currency: J.currency,
            preventFetch: !eg || eR,
            loadId: eh.loadId
        });
    a.useEffect(() => {
        eT(eB);
    }, [eT, eB]);
    let ek = eg && (0, g.pO)(eP),
        eF = null !== (H = null !== (r = null != ej ? ej : eD) && void 0 !== r ? r : eG) && void 0 !== H ? H : eU,
        eW = (0, o.e7)([T.Z], () => T.Z.enabled),
        eH = J.paymentSourceId,
        { hasEntitlements: eY, entitlements: eV } = (0, w.H)(eC.id, eg),
        eK = (0, v.Ap)(J.paymentSourceId),
        ez = (0, N.sE)(er, eH, X),
        eX = (0, S.Kp)({
            isTrial: e_,
            isGift: eg,
            selectedSkuId: eE,
            startedPaymentFlowWithPaymentSources: eS.current,
            inReverseTrial: eb
        }),
        [eq, eJ] = a.useState(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    a.useEffect(() => {
        null == eq && eJ(null == eL ? void 0 : eL.subscriptionPeriodEnd);
    }, [null == eL ? void 0 : eL.subscriptionPeriodEnd, eq]);
    let eQ = a.useMemo(
            () =>
                (0, v.V7)({
                    skuId: eE,
                    isPremium: eN,
                    multiMonthPlans: [],
                    currentSubscription: ef,
                    isGift: eg,
                    isEligibleForTrial: e_,
                    defaultPlanId: ex,
                    defaultToMonthlyPlan: !1
                }),
            [eE, ef, eg, ex, eN, e_]
        ),
        e$ = (0, S.$g)(eX, eL, eC),
        e0 = a.useMemo(() => (e_ && null != eL ? eL : eb && null != eZ ? eZ : void 0), [eb, e_, eL, eZ]);
    if (null != eF) {
        let [e, n] = (function (e) {
            if (e.code === I.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE) return [F.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY, null];
            if (e.code !== I.SM.INVALID_BILLING_ADDRESS) return [e.message, null];
            {
                let e = F.Z.Messages.LEARN_MORE_LINK.format({ helpdeskArticle: P.Z.getArticleURL(U.BhN.BILLING).concat(U.Bjg.INVALID_BILLING_ADDRESS) });
                return [F.Z.Messages.BILLING_ERROR_INVALID_BILLING_ADDRESS, e];
            }
        })(eF);
        K = (0, i.jsxs)(u.FormErrorBlock, {
            children: [e, ' ', n]
        });
    } else if (eg && null != eB)
        z = (0, i.jsx)(D.e9, {
            plan: eC,
            className: W.invoice,
            isPrepaidPaymentSource: eK,
            isCustomGift: ek,
            invoicePreview: eB
        });
    else if (null != e0)
        z = (0, i.jsxs)('div', {
            children: [
                (0, i.jsx)(R.KU, { negativeMarginTop: !eb }),
                (0, i.jsxs)(R.PO, {
                    className: W.invoice,
                    children: [
                        (0, i.jsxs)('div', {
                            className: W.trialPriceLine,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/bold',
                                    children: F.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
                                }),
                                (0, i.jsx)(u.Text, {
                                    variant: 'text-md/normal',
                                    children: F.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({ price: (0, A.T4)(0, e0.currency, { maximumFractionDigits: 0 }) })
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: W.afterTrialPriceLine,
                            children: (0, i.jsx)(D.yT, {
                                invoice: e0,
                                plan: eC
                            })
                        })
                    ]
                })
            ]
        });
    else {
        if (null == eL || null == eZ || e$)
            return (0, i.jsx)('div', {
                className: W.spinnerWrapper,
                children: (0, i.jsx)(u.Spinner, {})
            });
        e_ && eL.subscriptionPeriodEnd !== eZ.subscriptionPeriodEnd && (V = eL.subscriptionPeriodEnd),
            (z = (0, i.jsxs)(R.PO, {
                className: W.invoice,
                children: [
                    (0, i.jsx)(R.q9, { children: F.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS }),
                    (0, i.jsx)(D.Lu, {
                        invoice: eL,
                        newPlan: eC,
                        isPrepaidPaymentSource: eK,
                        referralTrialOfferId: ed
                    }),
                    eK
                        ? null
                        : (0, i.jsx)(D.nd, {
                              renewalInvoice: eZ,
                              isTrial: e_,
                              priceOptions: J,
                              overrideRenewalDate: V,
                              trialFooterMessageOverride: es,
                              hideSubscriptionDetails: eu
                          })
                ]
            }));
    }
    let e1 = l.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
        {
            checkboxLabel: e7,
            checkboxClassname: e4,
            checkboxLabelClassname: e2
        } = (function (e, n, t) {
            let i = null,
                a = null,
                r = null;
            if (e && null != n) {
                let { intervalType: e, intervalCount: s } = v.ZP.getIntervalForInvoice(n),
                    l = (0, A.og)((0, A.T4)(n.total, n.currency), e, s),
                    o = null != t ? t : n.subscriptionPeriodEnd;
                (i = F.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
                    termsURL: U.EYA.TERMS,
                    paidURL: U.EYA.PAID_TERMS,
                    rate: l,
                    renewalDate: o
                })),
                    (a = W.trialCheckbox),
                    (r = W.trialCheckboxLabel);
            }
            return {
                checkboxLabel: i,
                checkboxClassname: a,
                checkboxLabelClassname: r
            };
        })(null != e_ && e_, eZ, V),
        e3 = F.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({ planName: eC.name });
    return (
        eg && !ek ? (e3 = F.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT) : eg && ek ? (e3 = '') : (0, v.PV)(eC.id) && (e3 = v.ZP.getBillingReviewSubheader(null, eC)),
        ez
            ? null
            : (0, i.jsxs)('div', {
                  className: W.stepBody,
                  children: [
                      null != el &&
                          (0, i.jsxs)('div', {
                              className: W.reviewWarningMessageContainer,
                              children: [
                                  (0, i.jsx)(u.CircleInformationIcon, {
                                      size: 'custom',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css,
                                      width: 20,
                                      height: 20
                                  }),
                                  (0, i.jsx)(u.Text, {
                                      className: W.reviewWarningMessage,
                                      variant: 'text-sm/normal',
                                      children: el
                                  })
                              ]
                          }),
                      K,
                      eX &&
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(R.KU, {
                                      negativeMarginTop: !0,
                                      negativeMarginBottom: !0
                                  }),
                                  (0, i.jsx)(O.Z, {}),
                                  (0, i.jsx)(Z.O, {
                                      planOptions: eQ,
                                      eligibleForMultiMonthPlans: !1,
                                      referralTrialOfferId: void 0,
                                      selectedPlanId: X,
                                      subscriptionPeriodEnd: eq,
                                      showTotal: !1,
                                      discountInvoiceItems: ey ? (null == ew ? void 0 : ew.invoiceItems) : void 0,
                                      handleClose: em
                                  }),
                                  (0, i.jsx)(R.KU, {})
                              ]
                          }),
                      eb &&
                          (0, i.jsx)(u.Heading, {
                              variant: 'heading-md/normal',
                              color: 'always-white',
                              className: W.trialHeader,
                              children: F.Z.Messages.REVERSE_TRIAL_PAYMENT_MODAL_INFO.format({ trialEnd: null == ef ? void 0 : ef.currentPeriodEnd })
                          }),
                      !e_ &&
                          (0, i.jsx)(u.FormTitle, {
                              tag: u.FormTitleTags.H5,
                              children: e3
                          }),
                      ek &&
                          null != ev &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(j.Z, {
                                      defaultAnimationState: M.SR.LOOP,
                                      giftStyle: ev,
                                      shouldAnimate: !0,
                                      className: W.__invalid_giftMainAnimation
                                  }),
                                  (0, i.jsx)(G.s, { giftRecipient: eP })
                              ]
                          }),
                      z,
                      (0, i.jsxs)('div', {
                          className: W.paymentSourceWrapper,
                          children: [
                              e_
                                  ? (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        className: W.formTitle,
                                        children: F.Z.Messages.BILLING_STEP_PAYMENT_METHOD
                                    })
                                  : (0, i.jsx)(u.FormTitle, {
                                        tag: u.FormTitleTags.H5,
                                        children: F.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
                                    }),
                              (0, i.jsx)(p.Z, {
                                  paymentSources: Object.values(q),
                                  selectedPaymentSourceId: eH,
                                  prependOption:
                                      eY && !e_
                                          ? {
                                                label: F.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
                                                value: null
                                            }
                                          : null,
                                  onChange: ee,
                                  onPaymentSourceAdd: en,
                                  hidePersonalInformation: eW,
                                  isTrial: e_
                              }),
                              eY && null == eH
                                  ? (0, i.jsx)('div', {
                                        className: W.paymentSourceOptionalWarning,
                                        children: F.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({ months: eV.length })
                                    })
                                  : null,
                              ep
                                  ? null
                                  : (0, i.jsxs)(d.b, {
                                        currencies: Q,
                                        className: W.currencyWrapper,
                                        children: [
                                            (0, i.jsx)(u.FormTitle, {
                                                tag: u.FormTitleTags.H5,
                                                children: F.Z.Messages.PAYMENT_CURRENCY
                                            }),
                                            (0, i.jsx)(d.Z, {
                                                selectedCurrency: J.currency,
                                                currencies: Q,
                                                onChange: $
                                            })
                                        ]
                                    })
                          ]
                      }),
                      (0, i.jsx)(L.Z, {
                          isActive: ea,
                          ref: ei,
                          children: (0, i.jsx)(m.Z, {
                              onChange: et,
                              forceShow: !0,
                              checkboxLabel: e7,
                              checkboxClassname: e4,
                              checkboxLabelClassname: e2,
                              finePrint:
                                  null !== (Y = !eb && es) && void 0 !== Y
                                      ? Y
                                      : (0, i.jsx)(_.Z, {
                                            hide: e_ || ep,
                                            subscriptionPlan: eC,
                                            renewalInvoice: eZ,
                                            isGift: eg,
                                            paymentSourceType: null === (t = q[null != eH ? eH : '']) || void 0 === t ? void 0 : t.type,
                                            isEmbeddedIAP: eI,
                                            basePrice: (0, v.aS)(eC.id, !1, eg, J)
                                        }),
                              showPricingLink: eC.currency !== k.pK.USD,
                              showWithdrawalWaiver: e1,
                              disabled: eR,
                              isTrial: e_ && null == es,
                              inReverseTrial: eb,
                              isDiscount: ep,
                              subscriptionPlan: eC,
                              isGift: eg
                          })
                      })
                  ]
              })
    );
}
