n.d(s, {
  x: function() {
return B;
  }
}), n(47120);
var t = n(735250),
  i = n(470079),
  r = n(512722),
  l = n.n(r),
  a = n(399606),
  o = n(481060),
  C = n(975608),
  d = n(711459),
  u = n(374649),
  c = n(650032),
  _ = n(439017),
  p = n(104494),
  x = n(639119),
  L = n(642530),
  h = n(381507),
  f = n(314404),
  I = n(594174),
  E = n(509545),
  M = n(285952),
  N = n(669079),
  j = n(63063),
  T = n(74538),
  g = n(987209),
  m = n(598),
  A = n(409813),
  O = n(51499),
  S = n(456251),
  R = n(614277),
  P = n(809144),
  Z = n(698708),
  v = n(981631),
  y = n(474936),
  b = n(689938),
  U = n(255784);

function B(e) {
  var s, n, r;
  let {
handleStepChange: B,
initialPlanId: H,
subscriptionTier: k,
trialId: G,
referralTrialOfferId: F,
handleClose: w
  } = e, {
activeSubscription: D,
hasFetchedSubscriptions: W,
paymentSourceId: Y,
paymentSources: K,
selectedSkuId: V,
selectedPlan: X,
step: Q,
defaultPlanId: q,
priceOptions: J,
isPremium: z
  } = (0, m.usePaymentContext)(), {
isGift: $,
giftRecipient: ee,
giftMessage: es
  } = (0, g.wD)(), en = null != Y ? K[Y] : null, {
newPlans: et
  } = d.ZP.useExperiment({
location: 'd17fd6_3'
  }, {
autoTrackExposure: !1
  }), ei = (0, a.e7)([I.default], () => I.default.getCurrentUser()), er = !$ && null != V && V === y.Si.TIER_2 && null != ei && ei.hasHadPremium() && W && null == D && (0, d.aQ)(en), el = (0, x.N)(F), ea = !$ && null != el && null != V && y.nG[el.trial_id].skus.includes(V), eo = (0, p.Ng)(), eC = null == eo ? void 0 : null === (s = eo.discount) || void 0 === s ? void 0 : s.plan_ids.some(e => y.GP[e].skuId === V), ed = !$ && null != eo && null != V && eC, eu = null !== (n = ea || ed) && void 0 !== n && n, {
defaultToMonthlyPlan: ec
  } = _.k.useExperiment({
location: 'd17fd6_4'
  }, {
autoTrackExposure: !1
  }), e_ = i.useMemo(() => (0, T.V7)({
skuId: V,
isPremium: z,
multiMonthPlans: er ? et : [],
currentSubscription: D,
isGift: $,
isEligibleForTrial: ea,
defaultPlanId: q,
defaultToMonthlyPlan: ec
  }), [
V,
z,
et,
D,
er,
$,
ea,
q,
ec
  ]), ep = ed && e_.includes(y.Xh.PREMIUM_MONTH_TIER_2) ? y.Xh.PREMIUM_MONTH_TIER_2 : e_[0], ex = (0, a.e7)([E.Z], () => E.Z.get(ep)), eL = [{
planId: null == ex ? void 0 : ex.id,
quantity: 1
  }], [eh, ef] = i.useState(eu), [eI, eE] = (0, u.ED)({
items: eL,
renewal: !1,
preventFetch: !eu,
applyEntitlements: !0,
trialId: G,
paymentSourceId: J.paymentSourceId,
currency: J.currency
  });
  i.useEffect(() => {
eu && ef((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
  }, [
eI,
eu
  ]), (0, C.Z)('Payment Modal Plan Select Step', eh, 5, {
proratedInvoicePreview: eI,
proratedInvoiceError: eE,
isEligibleForOffer: eu
  }, {
tags: {
  app_context: 'billing'
}
  });
  let eM = null !== (r = null == eE ? void 0 : eE.message) && void 0 !== r ? r : b.Z.Messages.ERROR_GENERIC_TITLE,
eN = eu && null == eE,
ej = eu && null != eE,
eT = eN && null == D && !!eu && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
{
  enabled: eg
} = c._.useExperiment({
  location: 'PremiumPaymentPlanSelectStep'
}, {
  autoTrackExposure: !1
}),
em = !$ && (null == ex ? void 0 : ex.skuId) === y.Si.TIER_2 && (null == el ? void 0 : el.referrer_id) != null && eg,
eA = null;
  return (eA = em ? (0, t.jsx)(h.Z, {}) : (0, t.jsx)(L.Z, {}), eT) ? (0, t.jsx)(S.Z, {}) : (l()(null != Q, 'Step should be set'), l()(e_.length > 0, 'Premium plan options should be set'), (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(P.P, {
    giftMessage: es
  }),
  !($ && (0, N.pO)(ee)) && (0, t.jsx)(O.Z, {
    isEligibleForTrial: ea
  }),
  (0, t.jsxs)(R.C3, {
    children: [
      eN && (0, t.jsx)('hr', {
        className: U.planSelectSeparatorUpper
      }),
      eA,
      (0, t.jsx)(Z.Z, {}),
      ej ? (0, t.jsx)(o.FormErrorBlock, {
        children: eM
      }) : (0, t.jsx)(f.O, {
        planOptions: e_,
        eligibleForMultiMonthPlans: er,
        referralTrialOfferId: F,
        selectedPlanId: null == X ? void 0 : X.id,
        subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
        discountInvoiceItems: ed ? null == eI ? void 0 : eI.invoiceItems : void 0,
        handleClose: w
      }),
      eN && (0, t.jsxs)(t.Fragment, {
        children: [
          (0, t.jsx)('hr', {
            className: U.planSelectSeparatorLower
          }),
          (0, t.jsx)(o.Text, {
            variant: 'text-xs/normal',
            children: b.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
              link: j.Z.getArticleURL(v.BhN.PREMIUM_DETAILS_CANCEL_SUB)
            })
          })
        ]
      })
    ]
  }),
  (0, t.jsx)(R.O3, {
    children: (0, t.jsx)(o.ModalFooter, {
      justify: M.Z.Justify.BETWEEN,
      align: M.Z.Align.CENTER,
      children: (0, t.jsx)(f.M, {
        onStepChange: B,
        onBackClick: () => B(A.h8.SKU_SELECT),
        showBackButton: null == H && null == k,
        planOptions: e_,
        shouldRenderUpdatedPaymentModal: eN,
        isTrial: ea
      })
    })
  })
]
  }));
}