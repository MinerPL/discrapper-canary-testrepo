"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("512722"),
  a = n.n(l),
  r = n("742280"),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("190947"),
  m = n("224550"),
  f = n("275850"),
  p = n("672971"),
  _ = n("128069"),
  S = n("987209"),
  I = n("563132"),
  P = n("45572"),
  E = n("919778"),
  T = n("614223"),
  N = n("246946"),
  v = n("351402"),
  h = n("509545"),
  x = n("41542"),
  A = n("669079"),
  C = n("74538"),
  y = n("937615"),
  g = n("479446"),
  M = n("374649"),
  R = n("424082"),
  b = n("104494"),
  L = n("639119"),
  O = n("653798"),
  j = n("314182"),
  G = n("981632"),
  D = n("314404"),
  U = n("42818"),
  F = n("459965"),
  w = n("251660"),
  B = n("474936"),
  k = n("981631"),
  H = n("231338"),
  W = n("689938"),
  Y = n("634120");

function K(e) {
  var t, n, l;
  let K, V, {
      selectedPlanId: Z,
      paymentSources: z,
      priceOptions: X,
      currencies: J,
      onCurrencyChange: q,
      onPaymentSourceChange: Q,
      handlePaymentSourceAdd: $,
      setHasAcceptedTerms: ee,
      legalTermsNodeRef: et,
      hasLegalTermsFlash: en,
      trialId: ei,
      trialFooterMessageOverride: es,
      reviewWarningMessage: el,
      metadata: ea,
      purchaseState: er,
      hideSubscriptionDetails: eu,
      referralTrialOfferId: eo,
      isTrial: ec = !1,
      isDiscount: ed = !1,
      handleClose: em
    } = e,
    {
      isEmbeddedIAP: ef,
      activeSubscription: ep,
      selectedSkuId: e_,
      defaultPlanId: eS,
      isPremium: eI,
      startedPaymentFlowWithPaymentSourcesRef: eP,
      setInvoicePreview: eE,
      contextMetadata: eT
    } = (0, I.usePaymentContext)(),
    {
      isGift: eN,
      giftRecipient: ev,
      selectedGiftStyle: eh
    } = (0, S.useGiftContext)(),
    ex = (0, b.usePremiumDiscountOffer)(),
    eA = (0, L.usePremiumTrialOffer)(eo);
  (0, R.useAnnualDiscountExperiment)("PremiumSubscriptionReview", null == eA);
  let eC = null == ex ? void 0 : null === (t = ex.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => B.SubscriptionPlanInfo[e].skuId === e_),
    ey = !eN && null != ex && null != e_ && eC,
    eg = (0, u.useStateFromStores)([h.default], () => h.default.get(Z));
  a()(null != eg, "Missing plan");
  let eM = [{
      planId: eg.id,
      quantity: 1
    }],
    eR = er === P.PurchaseState.PURCHASING || er === P.PurchaseState.COMPLETED,
    eb = eN || eR,
    [eL, eO] = (0, M.useSubscriptionInvoicePreview)({
      items: eM,
      renewal: !1,
      preventFetch: eb,
      applyEntitlements: !0,
      paymentSourceId: X.paymentSourceId,
      currency: X.currency,
      trialId: ei,
      metadata: ea
    }),
    [ej, eG] = (0, M.useSubscriptionInvoicePreview)({
      items: eM,
      renewal: !0,
      preventFetch: eb,
      trialId: ei,
      paymentSourceId: X.paymentSourceId,
      currency: X.currency,
      metadata: ea
    }),
    [eD, eU] = (0, M.useSubscriptionInvoicePreview)({
      items: [{
        planId: B.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !ey,
      trialId: ei,
      paymentSourceId: X.paymentSourceId,
      currency: X.currency,
      metadata: ea
    }),
    [eF, ew] = (0, M.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: X.paymentSourceId,
      skuId: e_,
      subscriptionPlanId: Z,
      currency: X.currency,
      preventFetch: !eN || eR,
      loadId: eT.loadId
    });
  s.useEffect(() => {
    eE(eF)
  }, [eE, eF]);
  let eB = eN && (0, A.shouldShowCustomGiftExperience)(ev),
    ek = null !== (l = null != eO ? eO : eG) && void 0 !== l ? l : eU,
    eH = (0, u.useStateFromStores)([N.default], () => N.default.enabled),
    eW = X.paymentSourceId,
    {
      hasEntitlements: eY,
      entitlements: eK
    } = (0, F.useSubscriptionEntitlements)(eg.id, eN),
    eV = (0, C.isPrepaidPaymentSource)(X.paymentSourceId),
    eZ = (0, E.checkNoPaymentTrialEnabled)(ei, eW, Z),
    ez = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: ec,
      isGift: eN,
      selectedSkuId: e_,
      startedPaymentFlowWithPaymentSources: eP.current
    }),
    [eX, eJ] = s.useState(null == eL ? void 0 : eL.subscriptionPeriodEnd);
  s.useEffect(() => {
    null == eX && eJ(null == eL ? void 0 : eL.subscriptionPeriodEnd)
  }, [null == eL ? void 0 : eL.subscriptionPeriodEnd, eX]);
  let eq = s.useMemo(() => (0, C.getPremiumPlanOptions)({
      skuId: e_,
      isPremium: eI,
      multiMonthPlans: [],
      currentSubscription: ep,
      isGift: eN,
      isEligibleForTrial: ec,
      defaultPlanId: eS,
      defaultToMonthlyPlan: !1
    }), [e_, ep, eN, eS, eI, ec]),
    eQ = (0, T.planSwitchLoadingShowSpinner)(ez, eL, eg);
  if (null != ek) {
    let e = ek.message;
    return ek.code === _.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = W.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, i.jsx)(c.FormErrorBlock, {
      children: e
    })
  }
  if (eN && null != eF) V = (0, i.jsx)(U.SubscriptionInvoiceGift, {
    plan: eg,
    className: Y.invoice,
    isPrepaidPaymentSource: eV,
    isCustomGift: eB,
    invoicePreview: eF
  });
  else if (ec && null != eL) V = (0, i.jsxs)("div", {
    children: [(0, i.jsx)(O.PremiumInvoiceTableDivider, {
      negativeMarginTop: !0
    }), (0, i.jsxs)(O.PremiumInvoiceTable, {
      className: Y.invoice,
      children: [(0, i.jsxs)("div", {
        className: Y.trialPriceLine,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/bold",
          children: W.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: W.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, y.formatPrice)(0, eL.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: Y.afterTrialPriceLine,
        children: (0, i.jsx)(U.PremiumTrialInvoiceTableRow, {
          invoice: eL,
          plan: eg
        })
      })]
    })]
  });
  else {
    if (null == eL || null == ej || eQ) return (0, i.jsx)("div", {
      className: Y.spinnerWrapper,
      children: (0, i.jsx)(c.Spinner, {})
    });
    ec && eL.subscriptionPeriodEnd !== ej.subscriptionPeriodEnd && (K = eL.subscriptionPeriodEnd), V = (0, i.jsxs)(O.PremiumInvoiceTable, {
      className: Y.invoice,
      children: [(0, i.jsx)(O.PremiumInvoiceTableHeader, {
        children: W.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(U.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: eL,
        newPlan: eg,
        isPrepaidPaymentSource: eV,
        referralTrialOfferId: eo
      }), eV ? null : (0, i.jsx)(U.SubscriptionInvoiceFooter, {
        renewalInvoice: ej,
        isTrial: ec,
        priceOptions: X,
        overrideRenewalDate: K,
        trialFooterMessageOverride: es,
        hideSubscriptionDetails: eu
      })]
    })
  }
  let e$ = r.CountryCodesSets.EEA_COUNTRIES.has(v.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: e0,
      checkboxClassname: e1,
      checkboxLabelClassname: e2
    } = function(e, t, n) {
      let i = null,
        s = null,
        l = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: a
        } = C.default.getIntervalForInvoice(t), r = (0, y.formatRate)((0, y.formatPrice)(t.total, t.currency), e, a), u = null != n ? n : t.subscriptionPeriodEnd;
        i = W.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: k.MarketingURLs.TERMS,
          paidURL: k.MarketingURLs.PAID_TERMS,
          rate: r,
          renewalDate: u
        }), s = Y.trialCheckbox, l = Y.trialCheckboxLabel
      }
      return {
        checkboxLabel: i,
        checkboxClassname: s,
        checkboxLabelClassname: l
      }
    }(null != ec && ec, ej, K),
    e7 = W.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: eg.name
    });
  return eN && !eB ? e7 = W.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eN && eB ? e7 = "" : (0, C.isPremiumSubscriptionPlan)(eg.id) && (e7 = C.default.getBillingReviewSubheader(null, eg)), eZ ? null : (0, i.jsxs)("div", {
    className: Y.stepBody,
    children: [null != el && (0, i.jsxs)("div", {
      className: Y.reviewWarningMessageContainer,
      children: [(0, i.jsx)(x.default, {
        color: o.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, i.jsx)(c.Text, {
        className: Y.reviewWarningMessage,
        variant: "text-sm/normal",
        children: el
      })]
    }), ez && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(O.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, i.jsx)(D.PremiumSwitchPlanSelectBody, {
        planOptions: eq,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: Z,
        subscriptionPeriodEnd: eX,
        showTotal: !1,
        discountInvoiceItems: ey ? null == eD ? void 0 : eD.invoiceItems : void 0,
        handleClose: em
      }), (0, i.jsx)(O.PremiumInvoiceTableDivider, {})]
    }), !ec && (0, i.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      children: e7
    }), eB && null != eh && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(G.default, {
        defaultAnimationState: g.AnimationState.LOOP,
        giftStyle: eh,
        shouldAnimate: !0,
        className: Y.__invalid_giftMainAnimation
      }), (0, i.jsx)(w.SendGiftToUser, {
        giftRecipient: ev
      })]
    }), V, (0, i.jsxs)("div", {
      className: Y.paymentSourceWrapper,
      children: [ec ? (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        className: Y.formTitle,
        children: W.default.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: W.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(f.default, {
        paymentSources: Object.values(z),
        selectedPaymentSourceId: eW,
        prependOption: eY && !ec ? {
          label: W.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: Q,
        onPaymentSourceAdd: $,
        hidePersonalInformation: eH,
        isTrial: ec
      }), eY && null == eW ? (0, i.jsx)("div", {
        className: Y.paymentSourceOptionalWarning,
        children: W.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eK.length
        })
      }) : null, ed ? null : (0, i.jsxs)(d.CurrencyWrapper, {
        currencies: J,
        className: Y.currencyWrapper,
        children: [(0, i.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H5,
          children: W.default.Messages.PAYMENT_CURRENCY
        }), (0, i.jsx)(d.default, {
          selectedCurrency: X.currency,
          currencies: J,
          onChange: q
        })]
      })]
    }), (0, i.jsx)(j.default, {
      isActive: en,
      ref: et,
      children: (0, i.jsx)(p.default, {
        onChange: ee,
        forceShow: !0,
        checkboxLabel: e0,
        checkboxClassname: e1,
        checkboxLabelClassname: e2,
        finePrint: null != es ? es : (0, i.jsx)(m.default, {
          hide: ec || ed,
          subscriptionPlan: eg,
          renewalInvoice: ej,
          isGift: eN,
          paymentSourceType: null === (n = z[null != eW ? eW : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ef,
          basePrice: (0, C.getPrice)(eg.id, !1, eN, X)
        }),
        showPricingLink: eg.currency !== H.CurrencyCodes.USD,
        showWithdrawalWaiver: e$,
        disabled: eR,
        isTrial: ec && null == es,
        isDiscount: ed,
        subscriptionPlan: eg,
        isGift: eN
      })
    })]
  })
}