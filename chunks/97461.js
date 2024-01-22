"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return j
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("627445"),
  r = n.n(l),
  i = n("65597"),
  u = n("77078"),
  o = n("856413"),
  d = n("916187"),
  c = n("809071"),
  _ = n("669073"),
  f = n("154889"),
  I = n("917247"),
  E = n("358821"),
  S = n("570727"),
  m = n("697218"),
  P = n("10514"),
  p = n("145131"),
  T = n("659632"),
  N = n("701909"),
  M = n("719923"),
  C = n("635357"),
  L = n("642906"),
  R = n("85336"),
  A = n("153727"),
  g = n("628738"),
  O = n("650484"),
  x = n("310093"),
  h = n("367767"),
  y = n("49111"),
  b = n("646718"),
  U = n("782340"),
  k = n("424650");

function j(e) {
  var t, n, l;
  let {
    handleStepChange: j,
    initialPlanId: v,
    subscriptionTier: D,
    trialId: G,
    referralTrialOfferId: B,
    handleClose: F
  } = e, {
    activeSubscription: H,
    hasFetchedSubscriptions: W,
    paymentSourceId: Y,
    paymentSources: w,
    selectedSkuId: K,
    selectedPlan: V,
    step: J,
    defaultPlanId: Z,
    priceOptions: q,
    isPremium: X
  } = (0, L.usePaymentContext)(), {
    isGift: z,
    giftRecipient: Q,
    giftMessage: $
  } = (0, C.useGiftContext)(), ee = null != Y ? w[Y] : null, {
    newPlans: et
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), en = (0, i.default)([m.default], () => m.default.getCurrentUser()), es = !z && null != K && K === b.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && W && null == H && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), ea = (0, I.usePremiumTrialOffer)(B), el = !z && null != ea && null != K && (0, b.SubscriptionTrials)[ea.trial_id].skus.includes(K), er = (0, f.usePremiumDiscountOffer)(), ei = null == er ? void 0 : null === (t = er.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => b.SubscriptionPlanInfo[e].skuId === K), eu = !z && null != er && null != K && ei, eo = null !== (n = el || eu) && void 0 !== n && n, {
    defaultToMonthlyPlan: ed
  } = _.TrialRedemptionDefaultPlanExperiment.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ec = a.useMemo(() => (0, M.getPremiumPlanOptions)({
    skuId: K,
    isPremium: X,
    multiMonthPlans: es ? et : [],
    currentSubscription: H,
    isGift: z,
    isEligibleForTrial: el,
    defaultPlanId: Z,
    defaultToMonthlyPlan: ed
  }), [K, X, et, H, es, z, el, Z, ed]), e_ = eu && ec.includes(b.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? b.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], ef = (0, i.default)([P.default], () => P.default.get(e_)), eI = [{
    planId: null == ef ? void 0 : ef.id,
    quantity: 1
  }], [eE, eS] = a.useState(eo), [em, eP] = (0, c.useSubscriptionInvoicePreview)({
    items: eI,
    renewal: !1,
    preventFetch: !eo,
    applyEntitlements: !0,
    trialId: G,
    paymentSourceId: q.paymentSourceId,
    currency: q.currency
  });
  a.useEffect(() => {
    eo && eS((null == em ? void 0 : em.subscriptionPeriodEnd) == null)
  }, [em, eo]), (0, o.default)("Payment Modal Plan Select Step", eE, 5, {
    proratedInvoicePreview: em,
    proratedInvoiceError: eP,
    isEligibleForOffer: eo
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ep = null !== (l = null == eP ? void 0 : eP.message) && void 0 !== l ? l : U.default.Messages.ERROR_GENERIC_TITLE,
    eT = eo && null == eP,
    eN = eo && null != eP;
  return eT && (null == em ? void 0 : em.subscriptionPeriodEnd) == null ? (0, s.jsx)(g.default, {}) : (r(null != J, "Step should be set"), r(ec.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(x.GiftNote, {
      giftMessage: $
    }), !(z && (0, T.shouldShowCustomGiftExperience)(Q, !0, "PremiumPaymentPlanSelectStep")) && (0, s.jsx)(A.default, {
      isEligibleForTrial: el
    }), (0, s.jsxs)(O.PaymentPortalBody, {
      children: [eT && (0, s.jsx)("hr", {
        className: k.planSelectSeparatorUpper
      }), (0, s.jsx)(E.default, {
        isGift: z,
        plan: V
      }), (0, s.jsx)(h.default, {}), eN ? (0, s.jsx)(u.FormErrorBlock, {
        children: ep
      }) : (0, s.jsx)(S.PremiumSwitchPlanSelectBody, {
        planOptions: ec,
        eligibleForMultiMonthPlans: es,
        referralTrialOfferId: B,
        selectedPlanId: null == V ? void 0 : V.id,
        subscriptionPeriodEnd: null == em ? void 0 : em.subscriptionPeriodEnd,
        discountInvoiceItems: eu ? null == em ? void 0 : em.invoiceItems : void 0,
        handleClose: F
      }), eT && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: k.planSelectSeparatorLower
        }), (0, s.jsx)(u.Text, {
          variant: "text-xs/normal",
          children: U.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: N.default.getArticleURL(y.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, s.jsx)(O.PaymentPortalFooter, {
      children: (0, s.jsx)(u.ModalFooter, {
        justify: p.default.Justify.BETWEEN,
        align: p.default.Align.CENTER,
        children: (0, s.jsx)(S.PremiumSwitchPlanSelectFooter, {
          onStepChange: j,
          onBackClick: () => j(R.Step.SKU_SELECT),
          showBackButton: null == v && null == D,
          planOptions: ec,
          shouldRenderUpdatedPaymentModal: eT,
          isTrial: el
        })
      })
    })]
  }))
}