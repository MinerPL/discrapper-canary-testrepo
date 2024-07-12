n.d(t, {
  x: function() {
return Z;
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  o = n(512722),
  a = n.n(o),
  s = n(399606),
  l = n(481060),
  d = n(975608),
  c = n(711459),
  C = n(374649),
  u = n(650032),
  _ = n(439017),
  p = n(104494),
  f = n(639119),
  x = n(642530),
  h = n(381507),
  b = n(314404),
  g = n(594174),
  m = n(509545),
  L = n(285952),
  I = n(669079),
  E = n(63063),
  T = n(74538),
  M = n(987209),
  N = n(598),
  S = n(409813),
  j = n(51499),
  O = n(456251),
  A = n(614277),
  P = n(809144),
  R = n(698708),
  y = n(981631),
  v = n(474936),
  B = n(689938),
  k = n(255784);

function Z(e) {
  var t, n, o;
  let {
handleStepChange: Z,
initialPlanId: H,
subscriptionTier: U,
trialId: F,
referralTrialOfferId: G,
handleClose: w
  } = e, {
activeSubscription: W,
hasFetchedSubscriptions: D,
paymentSourceId: Y,
paymentSources: K,
selectedSkuId: V,
selectedPlan: X,
step: z,
defaultPlanId: q,
priceOptions: Q,
isPremium: J
  } = (0, N.usePaymentContext)(), {
isGift: $,
giftRecipient: ee,
giftMessage: et
  } = (0, M.wD)(), en = null != Y ? K[Y] : null, {
newPlans: ei
  } = c.ZP.useExperiment({
location: 'd17fd6_3'
  }, {
autoTrackExposure: !1
  }), er = (0, s.e7)([g.default], () => g.default.getCurrentUser()), eo = !$ && null != V && V === v.Si.TIER_2 && null != er && er.hasHadPremium() && D && null == W && (0, c.aQ)(en), ea = (0, f.N)(G), es = !$ && null != ea && null != V && v.nG[ea.trial_id].skus.includes(V), el = (0, p.Ng)(), ed = null == el ? void 0 : null === (t = el.discount) || void 0 === t ? void 0 : t.plan_ids.some(e => v.GP[e].skuId === V), ec = !$ && null != el && null != V && ed, eC = null !== (n = es || ec) && void 0 !== n && n, {
defaultToMonthlyPlan: eu
  } = _.k.useExperiment({
location: 'd17fd6_4'
  }, {
autoTrackExposure: !1
  }), e_ = r.useMemo(() => (0, T.V7)({
skuId: V,
isPremium: J,
multiMonthPlans: eo ? ei : [],
currentSubscription: W,
isGift: $,
isEligibleForTrial: es,
defaultPlanId: q,
defaultToMonthlyPlan: eu
  }), [
V,
J,
ei,
W,
eo,
$,
es,
q,
eu
  ]), ep = ec && e_.includes(v.Xh.PREMIUM_MONTH_TIER_2) ? v.Xh.PREMIUM_MONTH_TIER_2 : e_[0], ef = (0, s.e7)([m.Z], () => m.Z.get(ep)), ex = [{
planId: null == ef ? void 0 : ef.id,
quantity: 1
  }], [eh, eb] = r.useState(eC), [eg, em] = (0, C.ED)({
items: ex,
renewal: !1,
preventFetch: !eC,
applyEntitlements: !0,
trialId: F,
paymentSourceId: Q.paymentSourceId,
currency: Q.currency
  });
  r.useEffect(() => {
eC && eb((null == eg ? void 0 : eg.subscriptionPeriodEnd) == null);
  }, [
eg,
eC
  ]), (0, d.Z)('Payment Modal Plan Select Step', eh, 5, {
proratedInvoicePreview: eg,
proratedInvoiceError: em,
isEligibleForOffer: eC
  }, {
tags: {
  app_context: 'billing'
}
  });
  let eL = null !== (o = null == em ? void 0 : em.message) && void 0 !== o ? o : B.Z.Messages.ERROR_GENERIC_TITLE,
eI = eC && null == em,
eE = eC && null != em,
eT = eI && null == W && !!eC && (null == eg ? void 0 : eg.subscriptionPeriodEnd) == null,
{
  enabled: eM
} = u._.useExperiment({
  location: 'PremiumPaymentPlanSelectStep'
}, {
  autoTrackExposure: !1
}),
eN = !$ && (null == ef ? void 0 : ef.skuId) === v.Si.TIER_2 && (null == ea ? void 0 : ea.referrer_id) != null && eM,
eS = null;
  return (eS = eN ? (0, i.jsx)(h.Z, {}) : (0, i.jsx)(x.Z, {}), eT) ? (0, i.jsx)(O.Z, {}) : (a()(null != z, 'Step should be set'), a()(e_.length > 0, 'Premium plan options should be set'), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(P.P, {
    giftMessage: et
  }),
  !($ && (0, I.pO)(ee)) && (0, i.jsx)(j.Z, {
    isEligibleForTrial: es
  }),
  (0, i.jsxs)(A.C3, {
    children: [
      eI && (0, i.jsx)('hr', {
        className: k.planSelectSeparatorUpper
      }),
      eS,
      (0, i.jsx)(R.Z, {}),
      eE ? (0, i.jsx)(l.FormErrorBlock, {
        children: eL
      }) : (0, i.jsx)(b.O, {
        planOptions: e_,
        eligibleForMultiMonthPlans: eo,
        referralTrialOfferId: G,
        selectedPlanId: null == X ? void 0 : X.id,
        subscriptionPeriodEnd: null == eg ? void 0 : eg.subscriptionPeriodEnd,
        discountInvoiceItems: ec ? null == eg ? void 0 : eg.invoiceItems : void 0,
        handleClose: w
      }),
      eI && (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)('hr', {
            className: k.planSelectSeparatorLower
          }),
          (0, i.jsx)(l.Text, {
            variant: 'text-xs/normal',
            children: B.Z.Messages.BILLING_TRIAL_CANCEL_ANYTIME_LINK.format({
              link: E.Z.getArticleURL(y.BhN.PREMIUM_DETAILS_CANCEL_SUB)
            })
          })
        ]
      })
    ]
  }),
  (0, i.jsx)(A.O3, {
    children: (0, i.jsx)(l.ModalFooter, {
      justify: L.Z.Justify.BETWEEN,
      align: L.Z.Align.CENTER,
      children: (0, i.jsx)(b.M, {
        onStepChange: Z,
        onBackClick: () => Z(S.h8.SKU_SELECT),
        showBackButton: null == H && null == U,
        planOptions: e_,
        shouldRenderUpdatedPaymentModal: eI,
        isTrial: es
      })
    })
  })
]
  }));
}