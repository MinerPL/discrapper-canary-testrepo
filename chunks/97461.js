"use strict";
n.r(t), n.d(t, {
  PremiumPaymentPlanSelectStep: function() {
    return R
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("627445"),
  l = n.n(s),
  u = n("65597"),
  a = n("77078"),
  o = n("856413"),
  d = n("916187"),
  c = n("809071"),
  p = n("669073"),
  f = n("154889"),
  m = n("917247"),
  S = n("358821"),
  P = n("570727"),
  E = n("697218"),
  _ = n("10514"),
  x = n("145131"),
  C = n("659632"),
  I = n("701909"),
  T = n("719923"),
  h = n("635357"),
  g = n("642906"),
  y = n("85336"),
  M = n("153727"),
  N = n("628738"),
  b = n("650484"),
  j = n("310093"),
  A = n("367767"),
  k = n("49111"),
  L = n("646718"),
  O = n("782340"),
  v = n("508233");

function R(e) {
  var t, n, s;
  let {
    handleStepChange: R,
    initialPlanId: B,
    subscriptionTier: U,
    trialId: G,
    referralTrialOfferId: w,
    handleClose: F
  } = e, {
    activeSubscription: D,
    hasFetchedSubscriptions: H,
    paymentSourceId: W,
    paymentSources: K,
    selectedSkuId: Y,
    selectedPlan: V,
    step: J,
    defaultPlanId: q,
    priceOptions: X,
    isPremium: z
  } = (0, g.usePaymentContext)(), {
    isGift: Q,
    giftRecipient: Z,
    giftMessage: $
  } = (0, h.useGiftContext)(), ee = null != W ? K[W] : null, {
    newPlans: et
  } = d.default.useExperiment({
    location: "d17fd6_3"
  }, {
    autoTrackExposure: !1
  }), en = (0, u.useStateFromStores)([E.default], () => E.default.getCurrentUser()), er = !Q && null != Y && Y === L.PremiumSubscriptionSKUs.TIER_2 && null != en && en.hasHadPremium() && H && null == D && (0, d.isPaymentSourceEligibleForMultiMonthPlans)(ee), ei = (0, m.usePremiumTrialOffer)(w), es = !Q && null != ei && null != Y && (0, L.SubscriptionTrials)[ei.trial_id].skus.includes(Y), el = (0, f.usePremiumDiscountOffer)(), eu = null == el ? void 0 : null === (t = el.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => L.SubscriptionPlanInfo[e].skuId === Y), ea = !Q && null != el && null != Y && eu, eo = null !== (n = es || ea) && void 0 !== n && n, {
    defaultToMonthlyPlan: ed
  } = p.TrialRedemptionDefaultPlanExperiment.useExperiment({
    location: "d17fd6_4"
  }, {
    autoTrackExposure: !1
  }), ec = i.useMemo(() => (0, T.getPremiumPlanOptions)({
    skuId: Y,
    isPremium: z,
    multiMonthPlans: er ? et : [],
    currentSubscription: D,
    isGift: Q,
    isEligibleForTrial: es,
    defaultPlanId: q,
    defaultToMonthlyPlan: ed
  }), [Y, z, et, D, er, Q, es, q, ed]), ep = ea && ec.includes(L.SubscriptionPlans.PREMIUM_MONTH_TIER_2) ? L.SubscriptionPlans.PREMIUM_MONTH_TIER_2 : ec[0], ef = (0, u.useStateFromStores)([_.default], () => _.default.get(ep)), em = [{
    planId: null == ef ? void 0 : ef.id,
    quantity: 1
  }], [eS, eP] = i.useState(eo), [eE, e_] = (0, c.useSubscriptionInvoicePreview)({
    items: em,
    renewal: !1,
    preventFetch: !eo,
    applyEntitlements: !0,
    trialId: G,
    paymentSourceId: X.paymentSourceId,
    currency: X.currency
  });
  i.useEffect(() => {
    eo && eP((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null)
  }, [eE, eo]), (0, o.default)("Payment Modal Plan Select Step", eS, 5, {
    proratedInvoicePreview: eE,
    proratedInvoiceError: e_,
    isEligibleForOffer: eo
  }, {
    tags: {
      app_context: "billing"
    }
  });
  let ex = null !== (s = null == e_ ? void 0 : e_.message) && void 0 !== s ? s : O.default.Messages.ERROR_GENERIC_TITLE,
    eC = eo && null == e_,
    eI = eo && null != e_;
  return eC && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null ? (0, r.jsx)(N.default, {}) : (l(null != J, "Step should be set"), l(ec.length > 0, "Premium plan options should be set"), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(j.GiftNote, {
      giftMessage: $
    }), !(Q && (0, C.shouldShowCustomGiftExperience)(Z)) && (0, r.jsx)(M.default, {
      isEligibleForTrial: es
    }), (0, r.jsxs)(b.PaymentPortalBody, {
      children: [eC && (0, r.jsx)("hr", {
        className: v.planSelectSeparatorUpper
      }), (0, r.jsx)(S.default, {
        isGift: Q,
        plan: V
      }), (0, r.jsx)(A.default, {}), eI ? (0, r.jsx)(a.FormErrorBlock, {
        children: ex
      }) : (0, r.jsx)(P.PremiumSwitchPlanSelectBody, {
        planOptions: ec,
        eligibleForMultiMonthPlans: er,
        referralTrialOfferId: w,
        selectedPlanId: null == V ? void 0 : V.id,
        subscriptionPeriodEnd: null == eE ? void 0 : eE.subscriptionPeriodEnd,
        discountInvoiceItems: ea ? null == eE ? void 0 : eE.invoiceItems : void 0,
        handleClose: F
      }), eC && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("hr", {
          className: v.planSelectSeparatorLower
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          children: O.default.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
            link: I.default.getArticleURL(k.HelpdeskArticles.PREMIUM_DETAILS_CANCEL_SUB)
          })
        })]
      })]
    }), (0, r.jsx)(b.PaymentPortalFooter, {
      children: (0, r.jsx)(a.ModalFooter, {
        justify: x.default.Justify.BETWEEN,
        align: x.default.Align.CENTER,
        children: (0, r.jsx)(P.PremiumSwitchPlanSelectFooter, {
          onStepChange: R,
          onBackClick: () => R(y.Step.SKU_SELECT),
          showBackButton: null == B && null == U,
          planOptions: ec,
          shouldRenderUpdatedPaymentModal: eC,
          isTrial: es
        })
      })
    })]
  }))
}