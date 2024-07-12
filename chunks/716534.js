s.d(n, {
  Z: function() {
return k;
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(512722),
  r = s.n(i),
  a = s(742280),
  c = s(442837),
  o = s(692547),
  u = s(481060),
  d = s(190947),
  _ = s(224550),
  m = s(275850),
  E = s(672971),
  I = s(128069),
  p = s(987209),
  N = s(598),
  T = s(45572),
  x = s(919778),
  S = s(614223),
  h = s(246946),
  P = s(351402),
  f = s(509545),
  A = s(669079),
  v = s(74538),
  M = s(937615),
  g = s(479446),
  C = s(374649),
  O = s(104494),
  R = s(642530),
  j = s(653798),
  L = s(314182),
  y = s(981632),
  Z = s(314404),
  b = s(42818),
  D = s(459965),
  G = s(251660),
  U = s(474936),
  F = s(981631),
  B = s(231338),
  w = s(689938),
  H = s(711978);

function k(e) {
  var n, s, i, k;
  let W, Y, K, {
  selectedPlanId: V,
  paymentSources: z,
  priceOptions: X,
  currencies: J,
  onCurrencyChange: q,
  onPaymentSourceChange: Q,
  handlePaymentSourceAdd: $,
  setHasAcceptedTerms: ee,
  legalTermsNodeRef: en,
  hasLegalTermsFlash: es,
  trialId: el,
  trialFooterMessageOverride: et,
  reviewWarningMessage: ei,
  metadata: er,
  purchaseState: ea,
  hideSubscriptionDetails: ec,
  referralTrialOfferId: eo,
  isTrial: eu = !1,
  isDiscount: ed = !1,
  handleClose: e_
} = e,
{
  isEmbeddedIAP: em,
  activeSubscription: eE,
  selectedSkuId: eI,
  defaultPlanId: ep,
  isPremium: eN,
  startedPaymentFlowWithPaymentSourcesRef: eT,
  setInvoicePreview: ex,
  contextMetadata: eS
} = (0, N.usePaymentContext)(),
{
  isGift: eh,
  giftRecipient: eP,
  selectedGiftStyle: ef
} = (0, p.wD)(),
eA = (0, O.Ng)(),
ev = null == eA ? void 0 : null === (n = eA.discount) || void 0 === n ? void 0 : n.plan_ids.some(e => U.GP[e].skuId === eI),
eM = !eh && null != eA && null != eI && ev,
eg = (0, c.e7)([f.Z], () => f.Z.get(V));
  r()(null != eg, 'Missing plan');
  let eC = [{
  planId: eg.id,
  quantity: 1
}],
eO = ea === T.A.PURCHASING || ea === T.A.COMPLETED,
eR = eh || eO,
[ej, eL] = (0, C.ED)({
  items: eC,
  renewal: !1,
  preventFetch: eR,
  applyEntitlements: !0,
  paymentSourceId: X.paymentSourceId,
  currency: X.currency,
  trialId: el,
  metadata: er
}),
[ey, eZ] = (0, C.ED)({
  items: eC,
  renewal: !0,
  preventFetch: eR,
  trialId: el,
  paymentSourceId: X.paymentSourceId,
  currency: X.currency,
  metadata: er
}),
[eb, eD] = (0, C.ED)({
  items: [{
    planId: U.Xh.PREMIUM_MONTH_TIER_2,
    quantity: 1
  }],
  renewal: !0,
  preventFetch: !eM,
  trialId: el,
  paymentSourceId: X.paymentSourceId,
  currency: X.currency,
  metadata: er
}),
[eG, eU] = (0, C.o5)({
  paymentSourceId: X.paymentSourceId,
  skuId: eI,
  subscriptionPlanId: V,
  currency: X.currency,
  preventFetch: !eh || eO,
  loadId: eS.loadId
});
  t.useEffect(() => {
ex(eG);
  }, [
ex,
eG
  ]);
  let eF = eh && (0, A.pO)(eP),
eB = null !== (k = null !== (i = null != eL ? eL : eZ) && void 0 !== i ? i : eD) && void 0 !== k ? k : eU,
ew = (0, c.e7)([h.Z], () => h.Z.enabled),
eH = X.paymentSourceId,
{
  hasEntitlements: ek,
  entitlements: eW
} = (0, D.H)(eg.id, eh),
eY = (0, v.Ap)(X.paymentSourceId),
eK = (0, x.sE)(el, eH, V),
eV = (0, S.Kp)({
  isTrial: eu,
  isGift: eh,
  selectedSkuId: eI,
  startedPaymentFlowWithPaymentSources: eT.current
}),
[ez, eX] = t.useState(null == ej ? void 0 : ej.subscriptionPeriodEnd);
  t.useEffect(() => {
null == ez && eX(null == ej ? void 0 : ej.subscriptionPeriodEnd);
  }, [
null == ej ? void 0 : ej.subscriptionPeriodEnd,
ez
  ]);
  let eJ = t.useMemo(() => (0, v.V7)({
  skuId: eI,
  isPremium: eN,
  multiMonthPlans: [],
  currentSubscription: eE,
  isGift: eh,
  isEligibleForTrial: eu,
  defaultPlanId: ep,
  defaultToMonthlyPlan: !1
}), [
  eI,
  eE,
  eh,
  ep,
  eN,
  eu
]),
eq = (0, S.$g)(eV, ej, eg);
  if (null != eB) {
let e = eB.message;
eB.code === I.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = w.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), Y = (0, l.jsx)(u.FormErrorBlock, {
  children: e
});
  } else if (eh && null != eG)
K = (0, l.jsx)(b.e9, {
  plan: eg,
  className: H.invoice,
  isPrepaidPaymentSource: eY,
  isCustomGift: eF,
  invoicePreview: eG
});
  else if (eu && null != ej)
K = (0, l.jsxs)('div', {
  children: [
    (0, l.jsx)(j.KU, {
      negativeMarginTop: !0
    }),
    (0, l.jsxs)(j.PO, {
      className: H.invoice,
      children: [
        (0, l.jsxs)('div', {
          className: H.trialPriceLine,
          children: [
            (0, l.jsx)(u.Text, {
              variant: 'text-md/bold',
              children: w.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
            }),
            (0, l.jsx)(u.Text, {
              variant: 'text-md/normal',
              children: w.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                price: (0, M.T4)(0, ej.currency, {
                  maximumFractionDigits: 0
                })
              })
            })
          ]
        }),
        (0, l.jsx)('div', {
          className: H.afterTrialPriceLine,
          children: (0, l.jsx)(b.yT, {
            invoice: ej,
            plan: eg
          })
        })
      ]
    })
  ]
});
  else {
if (null == ej || null == ey || eq)
  return (0, l.jsx)('div', {
    className: H.spinnerWrapper,
    children: (0, l.jsx)(u.Spinner, {})
  });
eu && ej.subscriptionPeriodEnd !== ey.subscriptionPeriodEnd && (W = ej.subscriptionPeriodEnd), K = (0, l.jsxs)(j.PO, {
  className: H.invoice,
  children: [
    (0, l.jsx)(j.q9, {
      children: w.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
    }),
    (0, l.jsx)(b.Lu, {
      invoice: ej,
      newPlan: eg,
      isPrepaidPaymentSource: eY,
      referralTrialOfferId: eo
    }),
    eY ? null : (0, l.jsx)(b.nd, {
      renewalInvoice: ey,
      isTrial: eu,
      priceOptions: X,
      overrideRenewalDate: W,
      trialFooterMessageOverride: et,
      hideSubscriptionDetails: ec
    })
  ]
});
  }
  let eQ = a.M.EEA_COUNTRIES.has(P.Z.ipCountryCodeWithFallback),
{
  checkboxLabel: e$,
  checkboxClassname: e0,
  checkboxLabelClassname: e1
} = function(e, n, s) {
  let l = null,
    t = null,
    i = null;
  if (e && null != n) {
    let {
      intervalType: e,
      intervalCount: r
    } = v.ZP.getIntervalForInvoice(n), a = (0, M.og)((0, M.T4)(n.total, n.currency), e, r), c = null != s ? s : n.subscriptionPeriodEnd;
    l = w.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
      termsURL: F.EYA.TERMS,
      paidURL: F.EYA.PAID_TERMS,
      rate: a,
      renewalDate: c
    }), t = H.trialCheckbox, i = H.trialCheckboxLabel;
  }
  return {
    checkboxLabel: l,
    checkboxClassname: t,
    checkboxLabelClassname: i
  };
}(null != eu && eu, ey, W),
e9 = w.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
  planName: eg.name
});
  return eh && !eF ? e9 = w.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eh && eF ? e9 = '' : (0, v.PV)(eg.id) && (e9 = v.ZP.getBillingReviewSubheader(null, eg)), eK ? null : (0, l.jsxs)('div', {
className: H.stepBody,
children: [
  null != ei && (0, l.jsxs)('div', {
    className: H.reviewWarningMessageContainer,
    children: [
      (0, l.jsx)(u.CircleInformationIcon, {
        size: 'custom',
        color: o.Z.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }),
      (0, l.jsx)(u.Text, {
        className: H.reviewWarningMessage,
        variant: 'text-sm/normal',
        children: ei
      })
    ]
  }),
  Y,
  eV && (0, l.jsxs)('div', {
    children: [
      (0, l.jsx)(j.KU, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }),
      (0, l.jsx)(R.Z, {}),
      (0, l.jsx)(Z.O, {
        planOptions: eJ,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: V,
        subscriptionPeriodEnd: ez,
        showTotal: !1,
        discountInvoiceItems: eM ? null == eb ? void 0 : eb.invoiceItems : void 0,
        handleClose: e_
      }),
      (0, l.jsx)(j.KU, {})
    ]
  }),
  !eu && (0, l.jsx)(u.FormTitle, {
    tag: u.FormTitleTags.H5,
    children: e9
  }),
  eF && null != ef && (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsx)(y.Z, {
        defaultAnimationState: g.S.LOOP,
        giftStyle: ef,
        shouldAnimate: !0,
        className: H.__invalid_giftMainAnimation
      }),
      (0, l.jsx)(G.s, {
        giftRecipient: eP
      })
    ]
  }),
  K,
  (0, l.jsxs)('div', {
    className: H.paymentSourceWrapper,
    children: [
      eu ? (0, l.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        className: H.formTitle,
        children: w.Z.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, l.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        children: w.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }),
      (0, l.jsx)(m.Z, {
        paymentSources: Object.values(z),
        selectedPaymentSourceId: eH,
        prependOption: ek && !eu ? {
          label: w.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: Q,
        onPaymentSourceAdd: $,
        hidePersonalInformation: ew,
        isTrial: eu
      }),
      ek && null == eH ? (0, l.jsx)('div', {
        className: H.paymentSourceOptionalWarning,
        children: w.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eW.length
        })
      }) : null,
      ed ? null : (0, l.jsxs)(d.b, {
        currencies: J,
        className: H.currencyWrapper,
        children: [
          (0, l.jsx)(u.FormTitle, {
            tag: u.FormTitleTags.H5,
            children: w.Z.Messages.PAYMENT_CURRENCY
          }),
          (0, l.jsx)(d.Z, {
            selectedCurrency: X.currency,
            currencies: J,
            onChange: q
          })
        ]
      })
    ]
  }),
  (0, l.jsx)(L.Z, {
    isActive: es,
    ref: en,
    children: (0, l.jsx)(E.Z, {
      onChange: ee,
      forceShow: !0,
      checkboxLabel: e$,
      checkboxClassname: e0,
      checkboxLabelClassname: e1,
      finePrint: null != et ? et : (0, l.jsx)(_.Z, {
        hide: eu || ed,
        subscriptionPlan: eg,
        renewalInvoice: ey,
        isGift: eh,
        paymentSourceType: null === (s = z[null != eH ? eH : '']) || void 0 === s ? void 0 : s.type,
        isEmbeddedIAP: em,
        basePrice: (0, v.aS)(eg.id, !1, eh, X)
      }),
      showPricingLink: eg.currency !== B.pK.USD,
      showWithdrawalWaiver: eQ,
      disabled: eO,
      isTrial: eu && null == et,
      isDiscount: ed,
      subscriptionPlan: eg,
      isGift: eh
    })
  })
]
  });
}