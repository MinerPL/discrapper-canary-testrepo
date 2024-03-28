"use strict";
n.r(t), n.d(t, {
  default: function() {
    return W
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("512722"),
  l = n.n(a),
  r = n("742280"),
  u = n("442837"),
  o = n("692547"),
  c = n("481060"),
  d = n("190947"),
  m = n("224550"),
  f = n("275850"),
  p = n("672971"),
  S = n("128069"),
  _ = n("987209"),
  I = n("598"),
  E = n("45572"),
  P = n("919778"),
  T = n("614223"),
  N = n("246946"),
  h = n("351402"),
  x = n("509545"),
  v = n("41542"),
  A = n("669079"),
  C = n("74538"),
  g = n("937615"),
  y = n("479446"),
  M = n("374649"),
  b = n("104494"),
  O = n("653798"),
  R = n("314182"),
  L = n("981632"),
  j = n("314404"),
  G = n("42818"),
  D = n("459965"),
  F = n("251660"),
  U = n("474936"),
  w = n("981631"),
  B = n("231338"),
  k = n("689938"),
  H = n("422449");

function W(e) {
  var t, n, a;
  let W, Y, {
      selectedPlanId: K,
      paymentSources: V,
      priceOptions: Z,
      currencies: z,
      onCurrencyChange: J,
      onPaymentSourceChange: X,
      handlePaymentSourceAdd: q,
      setHasAcceptedTerms: Q,
      legalTermsNodeRef: $,
      hasLegalTermsFlash: ee,
      trialId: et,
      trialFooterMessageOverride: en,
      reviewWarningMessage: ei,
      metadata: es,
      purchaseState: ea,
      hideSubscriptionDetails: el,
      referralTrialOfferId: er,
      isTrial: eu = !1,
      isDiscount: eo = !1,
      handleClose: ec
    } = e,
    {
      isEmbeddedIAP: ed,
      activeSubscription: em,
      selectedSkuId: ef,
      defaultPlanId: ep,
      isPremium: eS,
      startedPaymentFlowWithPaymentSourcesRef: e_
    } = (0, I.usePaymentContext)(),
    {
      isGift: eI,
      giftRecipient: eE,
      selectedGiftStyle: eP
    } = (0, _.useGiftContext)(),
    eT = (0, b.usePremiumDiscountOffer)(),
    eN = null == eT ? void 0 : null === (t = eT.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => U.SubscriptionPlanInfo[e].skuId === ef),
    eh = !eI && null != eT && null != ef && eN,
    ex = (0, u.useStateFromStores)([x.default], () => x.default.get(K));
  l()(null != ex, "Missing plan");
  let ev = [{
      planId: ex.id,
      quantity: 1
    }],
    eA = ea === E.PurchaseState.PURCHASING || ea === E.PurchaseState.COMPLETED,
    eC = eI || eA,
    [eg, ey] = (0, M.useSubscriptionInvoicePreview)({
      items: ev,
      renewal: !1,
      preventFetch: eC,
      applyEntitlements: !0,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      trialId: et,
      metadata: es
    }),
    [eM, eb] = (0, M.useSubscriptionInvoicePreview)({
      items: ev,
      renewal: !0,
      preventFetch: eC,
      trialId: et,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      metadata: es
    }),
    [eO, eR] = (0, M.useSubscriptionInvoicePreview)({
      items: [{
        planId: U.SubscriptionPlans.PREMIUM_MONTH_TIER_2,
        quantity: 1
      }],
      renewal: !0,
      preventFetch: !eh,
      trialId: et,
      paymentSourceId: Z.paymentSourceId,
      currency: Z.currency,
      metadata: es
    }),
    [eL, ej] = (0, M.useOneTimePurchaseInvoicePreview)({
      paymentSourceId: Z.paymentSourceId,
      skuId: ef,
      subscriptionPlanId: K,
      preventFetch: !eI || eA
    }),
    eG = eI && (0, A.shouldShowCustomGiftExperience)(eE),
    eD = null !== (a = null != ey ? ey : eb) && void 0 !== a ? a : eR,
    eF = (0, u.useStateFromStores)([N.default], () => N.default.enabled),
    eU = Z.paymentSourceId,
    {
      hasEntitlements: ew,
      entitlements: eB
    } = (0, D.useSubscriptionEntitlements)(ex.id, eI),
    ek = (0, C.isPrepaidPaymentSource)(Z.paymentSourceId),
    eH = (0, P.checkNoPaymentTrialEnabled)(et, eU, K),
    eW = (0, T.inOneStepSubscriptionCheckout)({
      isTrial: eu,
      isGift: eI,
      selectedSkuId: ef,
      startedPaymentFlowWithPaymentSources: e_.current
    }),
    [eY, eK] = s.useState(null == eg ? void 0 : eg.subscriptionPeriodEnd);
  s.useEffect(() => {
    null == eY && eK(null == eg ? void 0 : eg.subscriptionPeriodEnd)
  }, [null == eg ? void 0 : eg.subscriptionPeriodEnd, eY]);
  let eV = s.useMemo(() => (0, C.getPremiumPlanOptions)({
      skuId: ef,
      isPremium: eS,
      multiMonthPlans: [],
      currentSubscription: em,
      isGift: eI,
      isEligibleForTrial: eu,
      defaultPlanId: ep,
      defaultToMonthlyPlan: !1
    }), [ef, em, eI, ep, eS, eu]),
    eZ = (0, T.planSwitchLoadingShowSpinner)(eW, eg, ex);
  if (null != eD) {
    let e = eD.message;
    return eD.code === S.ErrorCodes.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.default.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), (0, i.jsx)(c.FormErrorBlock, {
      children: e
    })
  }
  if (eI) Y = (0, i.jsx)(G.SubscriptionInvoiceGift, {
    plan: ex,
    className: H.invoice,
    isPrepaidPaymentSource: ek,
    isCustomGift: eG,
    invoicePreview: eL,
    priceOptions: Z
  });
  else if (eu && null != eg) Y = (0, i.jsxs)("div", {
    children: [(0, i.jsx)(O.PremiumInvoiceTableDivider, {
      negativeMarginTop: !0
    }), (0, i.jsxs)(O.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, i.jsxs)("div", {
        className: H.trialPriceLine,
        children: [(0, i.jsx)(c.Text, {
          variant: "text-md/bold",
          children: k.default.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
        }), (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: k.default.Messages.BILLING_TRIAL_PRICE_NOW.format({
            price: (0, g.formatPrice)(0, eg.currency, {
              maximumFractionDigits: 0
            })
          })
        })]
      }), (0, i.jsx)("div", {
        className: H.afterTrialPriceLine,
        children: (0, i.jsx)(G.PremiumTrialInvoiceTableRow, {
          invoice: eg,
          plan: ex
        })
      })]
    })]
  });
  else {
    if (null == eg || null == eM || eZ) return (0, i.jsx)("div", {
      className: H.spinnerWrapper,
      children: (0, i.jsx)(c.Spinner, {})
    });
    eu && eg.subscriptionPeriodEnd !== eM.subscriptionPeriodEnd && (W = eg.subscriptionPeriodEnd), Y = (0, i.jsxs)(O.PremiumInvoiceTable, {
      className: H.invoice,
      children: [(0, i.jsx)(O.PremiumInvoiceTableHeader, {
        children: k.default.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
      }), (0, i.jsx)(G.PremiumSubscriptionChangePlanInvoiceRows, {
        invoice: eg,
        newPlan: ex,
        isPrepaidPaymentSource: ek,
        referralTrialOfferId: er
      }), ek ? null : (0, i.jsx)(G.SubscriptionInvoiceFooter, {
        renewalInvoice: eM,
        isTrial: eu,
        priceOptions: Z,
        overrideRenewalDate: W,
        trialFooterMessageOverride: en,
        hideSubscriptionDetails: el
      })]
    })
  }
  let ez = r.CountryCodesSets.EEA_COUNTRIES.has(h.default.ipCountryCodeWithFallback),
    {
      checkboxLabel: eJ,
      checkboxClassname: eX,
      checkboxLabelClassname: eq
    } = function(e, t, n) {
      let i = null,
        s = null,
        a = null;
      if (e && null != t) {
        let {
          intervalType: e,
          intervalCount: l
        } = C.default.getIntervalForInvoice(t), r = (0, g.formatRate)((0, g.formatPrice)(t.total, t.currency), e, l), u = null != n ? n : t.subscriptionPeriodEnd;
        i = k.default.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
          termsURL: w.MarketingURLs.TERMS,
          paidURL: w.MarketingURLs.PAID_TERMS,
          rate: r,
          renewalDate: u
        }), s = H.trialCheckbox, a = H.trialCheckboxLabel
      }
      return {
        checkboxLabel: i,
        checkboxClassname: s,
        checkboxLabelClassname: a
      }
    }(null != eu && eu, eM, W),
    eQ = k.default.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
      planName: ex.name
    });
  return eI && !eG ? eQ = k.default.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eI && eG ? eQ = "" : (0, C.isPremiumSubscriptionPlan)(ex.id) && (eQ = C.default.getBillingReviewSubheader(null, ex)), eH ? null : (0, i.jsxs)("div", {
    className: H.stepBody,
    children: [null != ei && (0, i.jsxs)("div", {
      className: H.reviewWarningMessageContainer,
      children: [(0, i.jsx)(v.default, {
        color: o.default.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }), (0, i.jsx)(c.Text, {
        className: H.reviewWarningMessage,
        variant: "text-sm/normal",
        children: ei
      })]
    }), eW && (0, i.jsxs)("div", {
      children: [(0, i.jsx)(O.PremiumInvoiceTableDivider, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }), (0, i.jsx)(j.PremiumSwitchPlanSelectBody, {
        planOptions: eV,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: K,
        subscriptionPeriodEnd: eY,
        showTotal: !1,
        discountInvoiceItems: eh ? null == eO ? void 0 : eO.invoiceItems : void 0,
        handleClose: ec
      }), (0, i.jsx)(O.PremiumInvoiceTableDivider, {})]
    }), !eu && (0, i.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H5,
      children: eQ
    }), eG && null != eP && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(L.default, {
        defaultAnimationState: y.AnimationState.LOOP,
        giftStyle: eP,
        shouldAnimate: !0,
        className: H.__invalid_giftMainAnimation
      }), (0, i.jsx)(F.SendGiftToUser, {
        giftRecipient: eE
      })]
    }), Y, (0, i.jsxs)("div", {
      className: H.paymentSourceWrapper,
      children: [eu ? (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        className: H.formTitle,
        children: k.default.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, i.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H5,
        children: k.default.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }), (0, i.jsx)(f.default, {
        paymentSources: Object.values(V),
        selectedPaymentSourceId: eU,
        prependOption: ew && !eu ? {
          label: k.default.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: X,
        onPaymentSourceAdd: q,
        hidePersonalInformation: eF,
        isTrial: eu
      }), ew && null == eU ? (0, i.jsx)("div", {
        className: H.paymentSourceOptionalWarning,
        children: k.default.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eB.length
        })
      }) : null, eo ? null : (0, i.jsxs)(d.CurrencyWrapper, {
        currencies: z,
        className: H.currencyWrapper,
        children: [(0, i.jsx)(c.FormTitle, {
          tag: c.FormTitleTags.H5,
          children: k.default.Messages.PAYMENT_CURRENCY
        }), (0, i.jsx)(d.default, {
          selectedCurrency: Z.currency,
          currencies: z,
          onChange: J
        })]
      })]
    }), (0, i.jsx)(R.default, {
      isActive: ee,
      ref: $,
      children: (0, i.jsx)(p.default, {
        onChange: Q,
        forceShow: !0,
        checkboxLabel: eJ,
        checkboxClassname: eX,
        checkboxLabelClassname: eq,
        finePrint: null != en ? en : (0, i.jsx)(m.default, {
          hide: eu || eo,
          subscriptionPlan: ex,
          renewalInvoice: eM,
          isGift: eI,
          paymentSourceType: null === (n = V[null != eU ? eU : ""]) || void 0 === n ? void 0 : n.type,
          isEmbeddedIAP: ed,
          basePrice: (0, C.getPrice)(ex.id, !1, eI, Z)
        }),
        showPricingLink: ex.currency !== B.CurrencyCodes.USD,
        showWithdrawalWaiver: ez,
        disabled: eA,
        isTrial: eu && null == en,
        isDiscount: eo,
        subscriptionPlan: ex,
        isGift: eI
      })
    })]
  })
}