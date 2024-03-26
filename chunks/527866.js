"use strict";
n.r(t), n.d(t, {
  default: function() {
    return Y
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("976979"),
  u = n("446674"),
  o = n("669491"),
  c = n("77078"),
  d = n("335430"),
  m = n("703332"),
  f = n("740055"),
  p = n("545876"),
  _ = n("736978"),
  S = n("635357"),
  I = n("642906"),
  E = n("286350"),
  P = n("102492"),
  T = n("176108"),
  N = n("102985"),
  A = n("160299"),
  C = n("10514"),
  h = n("68238"),
  v = n("659632"),
  g = n("719923"),
  x = n("153160"),
  y = n("210721"),
  O = n("809071"),
  M = n("154889"),
  R = n("883662"),
  L = n("623003"),
  b = n("65324"),
  j = n("570727"),
  G = n("146163"),
  D = n("661128"),
  U = n("617223"),
  F = n("646718"),
  B = n("49111"),
  w = n("843455"),
  k = n("782340"),
  H = n("193692");

function Y(e) {
  var t, n, a;
  let Y, W, {
      selectedPlanId: Z,
      paymentSources: K,
      priceOptions: V,
      currencies: z,
      onCurrencyChange: J,
      onPaymentSourceChange: X,
      handlePaymentSourceAdd: q,
      setHasAcceptedTerms: Q,
      legalTermsNodeRef: $,
      hasLegalTermsFlash: ee,
      trialId: et,
      trialFooterMessageOverride: en,
      reviewWarningMessage: es,
      metadata: er,
      purchaseState: ea,
      hideSubscriptionDetails: ei,
      referralTrialOfferId: el,
      isTrial: eu = !1,
      isDiscount: eo = !1,
      handleClose: ec
    } = e,
    {
      isEmbeddedIAP: ed,
      activeSubscription: em,
      selectedSkuId: ef,
      defaultPlanId: ep,
      isPremium: e_,
      startedPaymentFlowWithPaymentSourcesRef: eS
    } = (0, I.usePaymentContext)(),
    {
      isGift: eI,
      giftRecipient: eE,
      selectedGiftStyle: eP
    } = (0, S.useGiftContext)(),
    eT = (0, M.usePremiumDiscountOffer)(),
    eN = null == eT ? void 0 : null === (t = eT.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => F.SubscriptionPlanInfo[e].skuId === ef),
    eA = !eI && null != eT && null != ef && eN,
    eC = (0, u.useStateFromStores)([C.default], () => C.default.get(Z));
  i(null != eC, "Missing plan");
  let eh = [{
      planId: eC.id,
      quantity: 1
    }],
    ev = ea === E.PurchaseState.PURCHASING || ea === E.PurchaseState.COMPLETED,
    eg = eI || ev,
    [ex, ey] = (0, O.useSubscriptionInvoicePreview)({
      items: eh,
      renewal: !1,
      preventFetch: eg,
      applyEntitlements: !0,
      paymentSourceId: V.paymentSourceId,
      currency: V.currency,
      trialId: et,
      metadata: er
    }),
    [eO, eM] = (0, O.useSubscriptionInvoicePreview)({
      items: eh,
      renewal: !0,
      preventFetch: eg,
      trialId: et,
      paymentSourceId: V.paymentSourceId,
      currency: V.currency,
      metadata: er
    }),
    [eR, eL] = (0, O.useSubscriptionInvoicePreview)({
      items: [{
        planId: F.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !eA,
      trialId: et,
      paymentSourceId: V.paymentSourceId,
      currency: V.currency,
      metadata: er
    }),
    [eb, ej] = (0, O.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: V.paymentSourceId,
      skuId: ef,
      subscriptionPlanId: Z,
      preventFetch: !eI || ev
    }),
    eG = eI && (0, v.shouldShowCustomGiftExperience)(eE),
    eD = null !== (a = null != ey ? ey : eM) && void 0 !== a ? a : eL,
    eU = (0, u.useStateFromStores)([N.default], () => N.default.enabled),
    eF = V.paymentSourceId,
    {
      hasEntitlements: eB,
      entitlements: ew
    } = (0, D.useSubscriptionEntitlements)(eC.id, eI),
    ek = (0, g.isPrepaidPaymentSource)(V.paymentSourceId),
    eH = (0, P.checkNoPaymentTrialEnabled)(et, eF, Z),
    eY = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: eu,
      isGift: eI,
      selectedSkuId: ef,
      startedPaymentFlowWithPaymentSources: eS.current
    }),
    [eW, eZ] = r.useState(null == ex ? void 0 : ex.subscriptionPeriodEnd);
  r.useEffect(() => {
    null == eW && eZ(null == ex ? void 0 : ex.subscriptionPeriodEnd)
  }, [null == ex ? void 0 : ex.subscriptionPeriodEnd, eW]);
  let eK = r.useMemo(() => (0, g.getPremiumPlanOptions)({
      skuId: ef,
      isPremium: e_,
      multiMonthPlans: [],
      currentSubscription: em,
      isGift: eI,
      isEligibleForTrial: eu,
      defaultPlanId: ep,
      defaultToMonthlyPlan: !1
    }), [ef, em, eI, ep, e_, eu]),
    eV = (0, T.planSwitchLoadingShowSpinner)(eY, ex, eC);
  if (null != eD) {
    let e = eD.message;
    return eD.code === _.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, s.jsx)(c.FormErrorBlock, {
      children: e
    })
  }
  if (eI) W = (0, s.jsx)(G.SubscriptionInvoiceGift, {
    plan: eC,
    className: H.invoice,
    isPrepaidPaymentSource: ek,
    isCustomGift: eG,
    invoicePreview: eb,
    priceOptions: V
  });
  else if (eu && null != ex) W = (0, s.jsxs)("div", {
    children: [(0, s.jsx)(R.PremiumInvoiceTableDivider, {
      negativeMarginTop: !0
    }), (0, s.jsxs)(R.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, s.jsxs)("div", {
        className: H.trialPriceLine,
        children: [(0, s.jsx)(c.Text, {
          variant: "text-md/bold",
          children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, s.jsx)(c.Text, {
          variant: "text-md/normal",
          children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, x.formatPrice)(0, ex.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, s.jsx)("div", {
        className: H.afterTrialPriceLine,
        children: (0, s.jsx)(G.PremiumTrialInvoiceTableRow, {
          invoice: ex,
          plan: eC
        })
      })]
    })]
  });
  else {
    if (null == ex || null == eO || eV) return (0, s.jsx)("div", {
      className: H.spinnerWrapper,
      children: (0, s.jsx)(c.Spinner, {})
    });
    eu && ex.subscriptionPeriodEnd !== eO.subscriptionPeriodEnd && (Y = ex.subscriptionPeriodEnd), W = (0, s.jsxs)(R.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, s.jsx)(R.PremiumInvoiceTableHeader, {
        children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, s.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: ex,
        newPlan: eC,
        isPrepaidPaymentSource: ek,
        referralTrialOfferId: el
      }), ek ? null : (0, s.jsx)(G.SubscriptionInvoiceFooter, {
        renewalInvoice: eO,
        isTrial: eu,
        priceOptions: V,
        overrideRenewalDate: Y,
        trialFooterMessageOverride: en,
        hideSubscriptionDetails: ei
      })]
    })
  }
  let ez = l.CountryCodesSets.EEA_COUNTRIES.has(A.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: eJ,
      checkboxClassname: eX,
      checkboxLabelClassname: eq
    } = function(e, t, n) {
      let s = null,
        r = null,
        a = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: i
        } = g.default.getIntervalForInvoice(t), l = (0, x.formatRate)((0, x.formatPrice)(t.total, t.currency), e, i), u = null != n ? n : t.subscriptionPeriodEnd;
        s = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: B.MarketingURLs.TERMS,
          paidURL: B.MarketingURLs.PAID_TERMS,
          rate: l,
          renewalDate: u
        }), r = H.trialCheckbox, a = H.trialCheckboxLabel
      }
      return {
        checkboxLabel: s,
        checkboxClassname: r,
        checkboxLabelClassname: a
      }
    }(null != eu && eu, eO, Y),
    eQ = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eC.name
    });
  return eI && !eG ? eQ = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eI && eG ? eQ = "" : (0, g.isPremiumSubscriptionPlan)(eC.id) && (eQ = g.default.getBillingReviewSubheader(null, eC)), eH ? null : (0, s.jsxs)("div", {
    className: H.stepBody,
    children: [null != es && (0, s.jsxs)("div", {
      className: H.reviewWarningMessageContainer,
      children: [(0, s.jsx)(h.default, {
        color: o.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, s.jsx)(c.Text, {
        className: H.reviewWarningMessage,
        variant: "text-sm/normal",
        children: es
      })]
    }), eY && (0, s.jsxs)("div", {
      children: [(0, s.jsx)(R.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, s.jsx)(j.PremiumSwitchPlanSelectBody, {
        planOptions: eK,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: Z,
        subscriptionPeriodEnd: eW,
        showTotal: !1,
        discountInvoiceItems: eA ? null == eR ? void 0 : eR.invoiceItems : void 0,
        handleClose: ec
      }), (0, s.jsx)(R.PremiumInvoiceTableDivider, {})]
    }), !eu && (0, s.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      children: eQ
    }), eG && null != eP && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(b.default, {
        defaultAnimationState: y.AnimationState.LOOP,
        giftStyle: eP,
        shouldAnimate: !0,
        className: H.giftMainAnimation
      }), (0, s.jsx)(U.SendGiftToUser, {
        giftRecipient: eE
      })]
    }), W, (0, s.jsxs)("div", {
      className: H.paymentSourceWrapper,
      children: [eu ? (0, s.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        className: H.formTitle,
        children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, s.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, s.jsx)(f.default, {
        paymentSources: Object.values(K),
        selectedPaymentSourceId: eF,
        prependOption: eB && !eu ? {
          label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: X,
        onPaymentSourceAdd: q,
        hidePersonalInformation: eU,
        isTrial: eu
      }), eB && null == eF ? (0, s.jsx)("div", {
        className: H.paymentSourceOptionalWarning,
        children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: ew.length
        })
      }) : null, eo ? null : (0, s.jsxs)(d.CurrencyWrapper, {
        currencies: z,
        className: H.currencyWrapper,
        children: [(0, s.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H5,
          children: k.default.Messages.PAYMENT_CURRENCY
        }), (0, s.jsx)(d.default, {
          selectedCurrency: V.currency,
          currencies: z,
          onChange: J
        })]
      })]
    }), (0, s.jsx)(L.default, {
      isActive: ee,
      ref: $,
      children: (0, s.jsx)(p.default, {
        onChange: Q,
        forceShow: !0,
        checkboxLabel: eJ,
        checkboxClassname: eX,
        checkboxLabelClassname: eq,
        finePrint: null != en ? en : (0, s.jsx)(m.default, {
          hide: eu || eo,
          subscriptionPlan: eC,
          renewalInvoice: eO,
          isGift: eI,
          paymentSourceType: null === (n = K[null != eF ? eF : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ed,
          basePrice: (0, g.getPrice)(eC.id, !1, eI, V)
        }),
        showPricingLink: eC.currency !== w.CurrencyCodes.USD,
        showWithdrawalWaiver: ez,
        disabled: ev,
        isTrial: eu && null == en,
        isDiscount: eo,
        subscriptionPlan: eC,
        isGift: eI
      })
    })]
  })
}