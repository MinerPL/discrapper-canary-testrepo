s.d(n, {
  M: function() {
return w;
  },
  O: function() {
return B;
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(512722),
  r = s.n(i),
  a = s(442837),
  c = s(481060),
  o = s(490504),
  u = s(911969),
  d = s(620037),
  _ = s(940824),
  m = s(987209),
  E = s(598),
  I = s(409813),
  p = s(509545),
  N = s(78839),
  T = s(669079),
  x = s(63063),
  S = s(74538),
  h = s(937615),
  P = s(711459),
  f = s(847903),
  A = s(104494),
  v = s(639119),
  M = s(55610),
  g = s(653798),
  C = s(553797),
  O = s(927699),
  R = s(987716),
  j = s(311821),
  L = s(459965),
  y = s(811616),
  Z = s(251660),
  b = s(474936),
  D = s(981631),
  G = s(231338),
  U = s(689938),
  F = s(197266);

function B(e) {
  var n, s, i, I;
  let {
premiumSubscription: N,
skuId: j,
selectedPlanId: L,
setSelectedPlanId: B,
priceOptions: w,
planOptions: H,
eligibleForMultiMonthPlans: k,
referralTrialOfferId: W,
subscriptionPeriodEnd: Y,
showTotal: K = !0,
discountInvoiceItems: V,
handleClose: z
  } = e, {
activeSubscription: X,
setSelectedPlanId: J,
selectedSkuId: q,
selectedPlan: Q,
priceOptions: $
  } = (0, E.usePaymentContext)(), {
isGift: ee,
giftRecipient: en,
selectedGiftStyle: es,
customGiftMessage: el,
setCustomGiftMessage: et
  } = (0, m.wD)(), ei = (0, T.MY)(en), er = ee && (0, T.pO)(en), {
confirmUpsellEnabled: ea
  } = (0, d.Z)({
location: 'PremiumSwitchPlanSelectBody'
  });
  j = null != j ? j : q, N = null != N ? N : X, r()(void 0 !== N, 'should not be undefined');
  let [ec, eo] = (0, a.Wu)([p.Z], () => [
null != N ? p.Z.get(N.planId) : null,
null != L ? p.Z.get(L) : null
  ]), eu = (0, v.N)(W), ed = null == eu ? void 0 : eu.subscription_trial, e_ = (0, A.Ng)(), em = null == e_ ? void 0 : null === (n = e_.discount) || void 0 === n ? void 0 : n.plan_ids, eE = null != eo ? eo : Q, eI = t.useCallback(e => {
null != B ? B(e) : J(e);
  }, [
B,
J
  ]), ep = null != w ? w : $;
  r()(null != ep, 'Price option has to be set');
  let eN = null != eu && b.nG[eu.trial_id].skus.includes(j),
eT = null != e_ && H.some(e => null == em ? void 0 : em.includes(e)) && null != e_.discount,
ex = (0, S.aS)(b.Xh.PREMIUM_MONTH_TIER_2, !1, ee, ep);
  t.useEffect(() => {
k && P.ZP.trackExposure({
  location: '5f89bb_1'
});
  }, [k]);
  let eS = (null == eE ? void 0 : eE.id) != null && H.includes(eE.id);
  t.useEffect(() => {
if (!eS) {
  if (null == ec || ee)
    eI(H[0]);
  else if (null != ec) {
    let e = H.find(e => e !== ec.id);
    null != e && eI(e);
  }
}
  }, [
eS,
ee,
H,
ec,
eI
  ]);
  let eh = !er && (ee || !eN && !eT) && eS && K,
eP = (0, c.useRadioGroup)(),
ef = (null == eE ? void 0 : eE.id) != null ? (0, S.aS)(eE.id, !1, ee, ep) : void 0,
{
  ipCountryCode: eA
} = (0, f.Z)(),
ev = 'HR' === eA && null != ef && ef.currency === G.pK.EUR,
eM = (0, S.Ap)(ep.paymentSourceId),
eg = (null == ed ? void 0 : ed.interval) === b.rV.DAY ? U.Z.Messages.BILLING_TRIAL_2_WEEK_PERIOD : U.Z.Messages.BILLING_TRIAL_30_DAY_PERIOD,
eC = !ee && (eT || null != ed && eN && null != Y),
eO = null == V ? void 0 : null === (I = V.find(e => e.subscriptionPlanId === b.Xh.PREMIUM_MONTH_TIER_2)) || void 0 === I ? void 0 : null === (i = I.discounts) || void 0 === i ? void 0 : null === (s = i.find(e => e.type === u.eW.SUBSCRIPTION_PLAN)) || void 0 === s ? void 0 : s.amount;
  return (0, l.jsx)(l.Fragment, {
children: (0, l.jsxs)('div', {
  className: er ? F.stepBodyCustomGift : F.stepBody,
  children: [
    (0, l.jsxs)('div', {
      className: er ? F.bodyColumnMiddle : void 0,
      children: [
        (0, l.jsx)(M.Z, {
          fromBoostCancelModal: !1,
          className: F.legacyPricingNotice
        }),
        er && null != es && (0, l.jsx)(R.q, {})
      ]
    }),
    (0, l.jsxs)('div', {
      className: er ? F.bodyColumnRight : void 0,
      children: [
        (0, l.jsx)(Z.s, {
          giftRecipient: en
        }),
        (() => {
          if (ei === T.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != et)
            return (0, l.jsx)(O.Z, {
              sectionTitle: U.Z.Messages.GIFT_OPTIONAL_MESSAGE,
              onTextChange: e => et(e),
              pendingText: el,
              currentText: el
            });
        })(),
        null != ec && !ee && (0, l.jsx)('div', {
          className: F.bodyText,
          children: function(e, n) {
            let s = U.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_MONTH,
              l = U.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1_YEAR,
              t = (() => {
                switch (e.interval) {
                  case b.rV.YEAR:
                    return s;
                  case b.rV.MONTH:
                  default:
                    return l;
                }
              })(),
              i = e.skuId;
            switch (n) {
              case b.Si.TIER_0:
                switch (i) {
                  case b.Si.TIER_1:
                    return U.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1_TO_TIER_0;
                  case b.Si.TIER_2:
                    return U.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_0;
                  default:
                    return t;
                }
              case b.Si.TIER_1:
                switch (i) {
                  case b.Si.TIER_0:
                    return U.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_1;
                  case b.Si.TIER_2:
                    return U.Z.Messages.BILLING_SWITCH_PLAN_DOWNGRADE_BODY_TIER_1;
                  default:
                    return t;
                }
              case b.Si.TIER_2:
                switch (i) {
                  case b.Si.TIER_0:
                  case b.Si.TIER_1:
                    return U.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2;
                  case b.Si.TIER_2:
                    return e.interval === b.rV.MONTH ? U.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE_BODY_TIER_2_YEAR.format({
                      numFreeGuildSubscriptions: b.cb
                    }) : t;
                  default:
                    return t;
                }
              default:
                return t;
            }
          }(ec, j)
        }),
        ((e, n, s) => {
          if (er)
            return (0, l.jsx)(c.FormTitle, {
              children: U.Z.Messages.GIFT_SUBSCRIPTION_SELECTION
            });
          if (!eC)
            return (0, l.jsx)('div', {
              className: F.selectPlanChooseTitle,
              children: U.Z.Messages.BILLING_SWITCH_PLAN_CHOOSE_ONE
            });
          if (n) {
            let n = (null == e ? void 0 : e.trial_id) === b.a7;
            return (0, l.jsxs)('div', {
              children: [
                (0, l.jsx)(c.Text, {
                  variant: 'text-sm/normal',
                  className: F.trialPlanSelectHeader,
                  children: n ? U.Z.Messages.REFERRAL_PROGRAM_PAYMENT_MODAL_COPY.format({
                    endDate: Y
                  }) : U.Z.Messages.BILLING_TRIAL_PAYMENT_MODAL_INFO.format({
                    trialEnd: Y,
                    trialPeriod: eg
                  })
                }),
                (0, l.jsx)('hr', {
                  className: F.planSelectSeparator
                })
              ]
            });
          }
          if (s && null != eO && null != ex && L === b.Xh.PREMIUM_MONTH_TIER_2)
            return (0, l.jsxs)('div', {
              children: [
                (0, l.jsx)(c.Text, {
                  variant: 'text-sm/normal',
                  className: F.trialPlanSelectHeader,
                  children: U.Z.Messages.BILLING_DISCOUNT_PAYMENT_MODAL_INFO_GENERIC.format({
                    numMonths: null == e_ ? void 0 : e_.discount.user_usage_limit,
                    discountedPrice: (0, h.T4)(ex.amount - eO, ex.currency),
                    regularPrice: (0, h.T4)(ex.amount, ex.currency)
                  })
                }),
                (0, l.jsx)('hr', {
                  className: F.planSelectSeparator
                })
              ]
            });
        })(eu, eN, eT),
        (0, l.jsx)('div', {
          ...eP,
          children: H.map(e => (0, l.jsx)(y.Z, {
            planId: e,
            premiumSubscription: ee ? null : null != N ? N : null,
            selectPlan: eI,
            selected: (null == eE ? void 0 : eE.id) === e,
            priceOptions: ep,
            shouldShowUpdatedPaymentModal: eC,
            isEligibleForDiscount: eT,
            discountAmountOff: eO,
            isEligibleForTrial: eN
          }, e))
        }),
        (0, l.jsx)('div', {
          children: eh && null != eE && null != ef ? (0, l.jsxs)('div', {
            children: [
              (0, l.jsx)('div', {
                className: F.selectPlanDivider
              }),
              (0, l.jsx)(g.Ji, {
                label: U.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL,
                value: (0, l.jsx)(C.Z, {
                  price: ef.amount,
                  currency: ef.currency,
                  intervalType: ee ? null : eE.interval,
                  intervalCount: eE.intervalCount,
                  isPrepaidPaymentSource: eM
                }),
                className: F.selectPlanTotalRow
              })
            ]
          }) : null
        }),
        ev && (0, l.jsx)(o.Z, {
          message: U.Z.Messages.LOCALIZED_PRICING_HRK_EURO_WARNING.format({
            kunaPriceWithCurrency: (0, h.T4)(7.5345 * ef.amount, G.pK.HRK)
          })
        }),
        !ee && !eC && K && (0, l.jsx)(o.Z, {
          message: U.Z.Messages.BILLING_FINAL_PRICE_MAY_CHANGE.format({
            documentationLink: x.Z.getArticleURL(D.BhN.LOCALIZED_PRICING)
          })
        }),
        ea && ee && (0, l.jsx)(_.Z, {
          onClose: z
        })
      ]
    })
  ]
})
  });
}

function w(e) {
  let {
onStepChange: n,
selectedPlanId: s,
paymentSources: t,
onBackClick: i,
showBackButton: r,
planOptions: a,
shouldRenderUpdatedPaymentModal: o = !1,
isTrial: u
  } = e, {
paymentSources: d,
selectedPlan: _
  } = (0, E.usePaymentContext)(), {
isGift: I
  } = (0, m.wD)();
  return t = null != t ? t : d, s = null != s ? s : null == _ ? void 0 : _.id, (0, l.jsxs)(l.Fragment, {
children: [
  null != s && a.includes(s) ? (0, l.jsx)(H, {
    paymentSources: t,
    onStepChange: n,
    selectedPlanId: s,
    isGift: I,
    shouldRenderUpdatedPaymentModal: o,
    isTrial: u
  }) : (0, l.jsx)(c.Button, {
    disabled: !0,
    children: U.Z.Messages.SELECT
  }),
  r ? (0, l.jsx)(j.Z, {
    onClick: i
  }) : null
]
  });
}

function H(e) {
  let {
onStepChange: n,
selectedPlanId: s,
isGift: t,
paymentSources: i,
shouldRenderUpdatedPaymentModal: r,
isTrial: o
  } = e, u = (0, a.e7)([N.ZP], () => N.ZP.getPremiumTypeSubscription()), {
hasEntitlements: d
  } = (0, L.H)(s, t), _ = null != u && null != u.paymentSourceId || Object.keys(i).length > 0 || d && !o;
  var m = r ? U.Z.Messages.NEXT : U.Z.Messages.SELECT,
E = I.h8.ADD_PAYMENT_STEPS;
  return _ && (E = I.h8.REVIEW), (0, l.jsx)(c.Button, {
onClick: () => n(E),
children: m
  });
}