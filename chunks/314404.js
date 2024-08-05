t.d(n, {
  M: function() {
return k;
  },
  O: function() {
return U;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(512722),
  s = t.n(r),
  l = t(442837),
  o = t(481060),
  c = t(490504),
  u = t(911969),
  d = t(620037),
  _ = t(940824),
  p = t(987209),
  m = t(598),
  I = t(409813),
  f = t(509545),
  E = t(78839),
  x = t(669079),
  N = t(63063),
  S = t(74538),
  T = t(937615),
  h = t(711459),
  b = t(847903),
  g = t(104494),
  P = t(639119),
  v = t(55610),
  A = t(653798),
  C = t(553797),
  M = t(927699),
  y = t(987716),
  O = t(311821),
  R = t(459965),
  L = t(811616),
  j = t(251660),
  Z = t(474936),
  D = t(981631),
  w = t(231338),
  G = t(689938),
  B = t(197266);

function U(e) {
  var n, t, r, I;
  let {
premiumSubscription: E,
skuId: O,
selectedPlanId: R,
setSelectedPlanId: U,
priceOptions: k,
planOptions: F,
eligibleForMultiMonthPlans: W,
referralTrialOfferId: H,
subscriptionPeriodEnd: Y,
showTotal: K = !0,
discountInvoiceItems: V,
handleClose: z
  } = e, {
activeSubscription: X,
setSelectedPlanId: q,
selectedSkuId: J,
selectedPlan: Q,
priceOptions: $
  } = (0, m.usePaymentContext)(), {
isGift: ee,
giftRecipient: en,
selectedGiftStyle: et,
customGiftMessage: ei,
setCustomGiftMessage: ea
  } = (0, p.wD)(), er = (0, x.MY)(en), es = ee && (0, x.pO)(en), {
confirmUpsellEnabled: el
  } = (0, d.Z)({
location: 'PremiumSwitchPlanSelectBody'
  });
  O = null != O ? O : J, E = null != E ? E : X, s()(void 0 !== E, 'should not be undefined');
  let [eo, ec] = (0, l.Wu)([f.Z], () => [
null != E ? f.Z.get(E.planId) : null,
null != R ? f.Z.get(R) : null
  ]), eu = (0, P.N)(H), ed = null == eu ? void 0 : eu.subscription_trial, e_ = (0, g.Ng)(), ep = null == e_ ? void 0 : null === (n = e_.discount) || void 0 === n ? void 0 : n.plan_ids, em = null != ec ? ec : Q, eI = a.useCallback(e => {
null != U ? U(e) : q(e);
  }, [
U,
q
  ]), ef = null != k ? k : $;
  s()(null != ef, 'Price option has to be set');
  let eE = null != eu && Z.nG[eu.trial_id].skus.includes(O),
ex = null != e_ && F.some(e => null == ep ? void 0 : ep.includes(e)) && null != e_.discount,
eN = (0, S.aS)(Z.Xh.PREMIUM_MONTH_TIER_2, !1, ee, ef);
  a.useEffect(() => {
W && h.ZP.trackExposure({
  location: '5f89bb_1'
});
  }, [W]);
  let eS = (null == em ? void 0 : em.id) != null && F.includes(em.id);
  a.useEffect(() => {
if (!eS) {
  if (null == eo || ee)
    eI(F[0]);
  else if (null != eo) {
    let e = F.find(e => e !== eo.id);
    null != e && eI(e);
  }
}
  }, [
eS,
ee,
F,
eo,
eI
  ]);
  let eT = !es && (ee || !eE && !ex) && eS && K,
eh = (0, o.useRadioGroup)(),
eb = (null == em ? void 0 : em.id) != null ? (0, S.aS)(em.id, !1, ee, ef) : void 0,
{
  ipCountryCode: eg
} = (0, b.Z)(),
eP = 'HR' === eg && null != eb && eb.currency === w.pK.EUR,
ev = (0, S.Ap)(ef.paymentSourceId),
eA = (null == ed ? void 0 : ed.interval) === Z.rV.DAY ? G.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : G.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
eC = !ee && (ex || null != ed && eE && null != Y),
eM = null == V ? void 0 : null === (I = V.find(e => e.subscriptionPlanId === Z.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === I ? void 0 : null === (r = I.discounts) || void 0 === r ? void 0 : null === (t = r.find(e => e.type === u.eW.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount;
  return (0, i.jsx)(i.Fragment, {
children: (0, i.jsxs)('div', {
  className: es ? B.stepBodyCustomGift : B.stepBody,
  children: [
    (0, i.jsxs)('div', {
      className: es ? B.bodyColumnMiddle : void 0,
      children: [
        (0, i.jsx)(v.Z, {
          fromBoostCancelModal: !1,
          className: B.legacyPricingNotice
        }),
        es && null != et && (0, i.jsx)(y.q, {})
      ]
    }),
    (0, i.jsxs)('div', {
      className: es ? B.bodyColumnRight : void 0,
      children: [
        (0, i.jsx)(j.s, {
          giftRecipient: en
        }),
        (() => {
          if (er === x.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != ea)
            return (0, i.jsx)(M.Z, {
              sectionTitle: G.Z.Messages.GIFT_OPTIONAL_MESSAGE,
              onTextChange: e => ea(e),
              pendingText: ei,
              currentText: ei
            });
        })(),
        null != eo && !ee && (0, i.jsx)('div', {
          className: B.bodyText,
          children: function(e, n) {
            let t = G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              i = G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              a = (() => {
                switch (e.interval) {
                  case Z.rV.YEAR:
                    return t;
                  case Z.rV.MONTH:
                  default:
                    return i;
                }
              })(),
              r = e.skuId;
            switch (n) {
              case Z.Si.TIER_0:
                switch (r) {
                  case Z.Si.TIER_1:
                    return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case Z.Si.TIER_2:
                    return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return a;
                }
              case Z.Si.TIER_1:
                switch (r) {
                  case Z.Si.TIER_0:
                    return G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case Z.Si.TIER_2:
                    return G.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return a;
                }
              case Z.Si.TIER_2:
                switch (r) {
                  case Z.Si.TIER_0:
                  case Z.Si.TIER_1:
                    return G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case Z.Si.TIER_2:
                    return e.interval === Z.rV.MONTH ? G.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: Z.cb
                    }) : a;
                  default:
                    return a;
                }
              default:
                return a;
            }
          }(eo, O)
        }),
        ((e, n, t) => {
          if (es)
            return (0, i.jsx)(o.FormTitle, {
              children: G.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
            });
          if (!eC)
            return (0, i.jsx)('div', {
              className: B.selectPlanChooseTitle,
              children: G.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
            });
          if (n) {
            let n = (null == e ? void 0 : e.trial_id) === Z.a7;
            return (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  className: B.trialPlanSelectHeader,
                  children: n ? G.Z.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({
                    endDate: Y
                  }) : G.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                    trialEnd: Y,
                    trialPeriod: eA
                  })
                }),
                (0, i.jsx)('hr', {
                  className: B.planSelectSeparator
                })
              ]
            });
          }
          if (t && null != eM && null != eN && R === Z.Xh.PREMIUM_MONTH_TIER_2)
            return (0, i.jsxs)('div', {
              children: [
                (0, i.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  className: B.trialPlanSelectHeader,
                  children: G.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                    numMonths: null == e_ ? void 0 : e_.discount.user_usage_limit,
                    discountedPrice: (0, T.T4)(eN.amount - eM, eN.currency),
                    regularPrice: (0, T.T4)(eN.amount, eN.currency)
                  })
                }),
                (0, i.jsx)('hr', {
                  className: B.planSelectSeparator
                })
              ]
            });
        })(eu, eE, ex),
        (0, i.jsx)('div', {
          ...eh,
          children: F.map(e => (0, i.jsx)(L.Z, {
            planId: e,
            premiumSubscription: ee ? null : null != E ? E : null,
            selectPlan: eI,
            selected: (null == em ? void 0 : em.id) === e,
            priceOptions: ef,
            shouldShowUpdatedPaymentModal: eC,
            isEligibleForDiscount: ex,
            discountAmountOff: eM,
            isEligibleForTrial: eE
          }, e))
        }),
        (0, i.jsx)('div', {
          children: eT && null != em && null != eb ? (0, i.jsxs)('div', {
            children: [
              (0, i.jsx)('div', {
                className: B.selectPlanDivider
              }),
              (0, i.jsx)(A.Ji, {
                label: G.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                value: (0, i.jsx)(C.Z, {
                  price: eb.amount,
                  currency: eb.currency,
                  intervalType: ee ? null : em.interval,
                  intervalCount: em.intervalCount,
                  isPrepaidPaymentSource: ev
                }),
                className: B.selectPlanTotalRow
              })
            ]
          }) : null
        }),
        eP && (0, i.jsx)(c.Z, {
          message: G.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, T.T4)(7.5345 * eb.amount, w.pK.HRK)
          })
        }),
        !ee && !eC && K && (0, i.jsx)(c.Z, {
          message: G.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: N.Z.getArticleURL(D.BhN.LOCALIZED_PRICING)
          })
        }),
        el && ee && (0, i.jsx)(_.Z, {
          onClose: z
        })
      ]
    })
  ]
})
  });
}

function k(e) {
  let {
onStepChange: n,
selectedPlanId: t,
paymentSources: a,
onBackClick: r,
showBackButton: s,
planOptions: l,
shouldRenderUpdatedPaymentModal: c = !1,
isTrial: u
  } = e, {
paymentSources: d,
selectedPlan: _
  } = (0, m.usePaymentContext)(), {
isGift: I
  } = (0, p.wD)();
  return a = null != a ? a : d, t = null != t ? t : null == _ ? void 0 : _.id, (0, i.jsxs)(i.Fragment, {
children: [
  null != t && l.includes(t) ? (0, i.jsx)(F, {
    paymentSources: a,
    onStepChange: n,
    selectedPlanId: t,
    isGift: I,
    shouldRenderUpdatedPaymentModal: c,
    isTrial: u
  }) : (0, i.jsx)(o.Button, {
    disabled: !0,
    children: G.Z.Messages.SELECT
  }),
  s ? (0, i.jsx)(O.Z, {
    onClick: r
  }) : null
]
  });
}

function F(e) {
  let {
onStepChange: n,
selectedPlanId: t,
isGift: a,
paymentSources: r,
shouldRenderUpdatedPaymentModal: s,
isTrial: c
  } = e, u = (0, l.e7)([E.ZP], () => E.ZP.getPremiumTypeSubscription()), {
hasEntitlements: d
  } = (0, R.H)(t, a), _ = null != u && null != u.paymentSourceId || Object.keys(r).length > 0 || d && !c;
  var p = s ? G.Z.Messages.NEXT : G.Z.Messages.SELECT,
m = I.h8.ADD_PAYMENT_STEPS;
  return _ && (m = I.h8.REVIEW), (0, i.jsx)(o.Button, {
onClick: () => n(m),
children: p
  });
}