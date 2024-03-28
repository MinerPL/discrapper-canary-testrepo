"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return R
  }
}), n("47120");
var s = n("735250"),
  r = n("470079"),
  i = n("512722"),
  l = n.n(i),
  a = n("399606"),
  o = n("481060"),
  u = n("975608"),
  d = n("711459"),
  c = n("374649"),
  p = n("439017"),
  f = n("104494"),
  m = n("639119"),
  S = n("642530"),
  E = n("314404"),
  P = n("594174"),
  x = n("509545"),
  h = n("285952"),
  C = n("669079"),
  _ = n("63063"),
  T = n("74538"),
  g = n("987209"),
  I = n("598"),
  N = n("409813"),
  y = n("51499"),
  j = n("456251"),
  M = n("614277"),
  b = n("809144"),
  A = n("698708"),
  k = n("981631"),
  v = n("474936"),
  L = n("689938"),
  O = n("457298");

function R(e) {
  var t, n, i;
  let {
    handleStepChange: R,
    initialPlanId: B,
    subscriptionTier: w,
    trialId: U,
    referralTrialOfferId: G,
    handleClose: D
  } = e, {
    activeSubscription: H,
    hasFetchedSubscriptions: F,
    paymentSourceId: W,
    paymentSources: Y,
    selectedSkuId: K,
    selectedPlan: V,
    step: J,
    defaultPlanId: Z,
    priceOptions: q,
    isPremium: X
  } = (0, I.usePaymentContext)(), {
    isGift: z,
    giftRecipient: Q,
    giftMessage: $
  } = (0, g.useGiftContext)(), ee = null != W ? Y[W] : null, {
    newPlans: et
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), en = (0, a.useStateFromStores)([P.default], () => P.default.getCurrentUser()), es = !z && null != K && K === v.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && F && null == H && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), er = (0, m.usePremiumTrialOffer)(G), ei = !z && null != er && null != K && (0, v.SubscriptionTrials)[er.trial_id].skus.includes(K), el = (0, f.usePremiumDiscountOffer)(), ea = null == el ? void 0 : null === (t = el.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => v.SubscriptionPlanInfo[e].skuId === K), eo = !z && null != el && null != K && ea, eu = null !== (n = ei || eo) && void 0 !== n && n, {
    defaultToMonthlyPlan: ed
  } = p.TrialRedemptionDefaultPlanExperiment.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ec = r.useMemo(() => (0, T.getPremiumPlanOptions)({
    skuId: K,
    isPremium: X,
    multiMonthPlans: es ? et : [],
    currentSubscription: H,
    isGift: z,
    isEligibleForTrial: ei,
    defaultPlanId: Z,
    defaultToMonthlyPlan: ed
  }), [K, X, et, H, es, z, ei, Z, ed]), ep = eo && ec.includes(v.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? v.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], ef = (0, a.useStateFromStores)([x.default], () => x.default.get(ep)), em = [{
    planId: null == ef ? void 0 : ef.id,
    quantity: 1
  }], [eS, eE] = r.useState(eu), [eP, ex] = (0, c.useSubscriptionInvoicePreview)({
    items: em,
    renewal: !1,
    preventFetch: !eu,
    applyEntitlements: !0,
    trialId: U,
    paymentSourceId: q.paymentSourceId,
    currency: q.currency
  });
  r.useEffect(() => {
    eu && eE((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null)
  }, [eP, eu]), (0, u.default)("Payment Modal Plan Select Step", eS, 5, {
    proratedInvoicePreview: eP,
    proratedInvoiceError: ex,
    isEligibleForOffer: eu
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let eh = null !== (i = null == ex ? void 0 : ex.message) && void 0 !== i ? i : L.default.Messages.ERROR_GENERIC_TITLE,
    eC = eu && null == ex,
    e_ = eu && null != ex;
  return eC && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null ? (0, s.jsx)(j.default, {}) : (l()(null != J, "Step should be set"), l()(ec.length > 0, "Premium plan options should be set"), (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(b.GiftNote, {
      giftMessage: $
    }), !(z && (0, C.shouldShowCustomGiftExperience)(Q)) && (0, s.jsx)(y.default, {
      isEligibleForTrial: ei
    }), (0, s.jsxs)(M.PaymentPortalBody, {
      children: [eC && (0, s.jsx)("hr", {
        className: O.planSelectSeparatorUpper
      }), (0, s.jsx)(S.default, {
        isGift: z,
        plan: V
      }), (0, s.jsx)(A.default, {}), e_ ? (0, s.jsx)(o.FormErrorBlock, {
        children: eh
      }) : (0, s.jsx)(E.PremiumSwitchPlanSelectBody, {
        planOptions: ec,
        eligibleForMultiMonthPlans: es,
        referralTrialOfferId: G,
        selectedPlanId: null == V ? void 0 : V.id,
        subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
        discountInvoiceItems: eo ? null == eP ? void 0 : eP.invoiceItems : void 0,
        handleClose: D
      }), eC && (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)("hr", {
          className: O.planSelectSeparatorLower
        }), (0, s.jsx)(o.Text, {
          variant: "text-xs/normal",
          children: L.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: _.default.getArticleURL(k.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, s.jsx)(M.PaymentPortalFooter, {
      children: (0, s.jsx)(o.ModalFooter, {
        justify: h.default.Justify.BETWEEN,
        align: h.default.Align.CENTER,
        children: (0, s.jsx)(E.PremiumSwitchPlanSelectFooter, {
          onStepChange: R,
          onBackClick: () => R(N.Step.SKU_SELECT),
          showBackButton: null == B && null == w,
          planOptions: ec,
          shouldRenderUpdatedPaymentModal: eC,
          isTrial: ei
        })
      })
    })]
  }))
}