t.d(n, {
  Z: function() {
return W;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(512722),
  s = t.n(r),
  l = t(742280),
  o = t(442837),
  c = t(692547),
  u = t(481060),
  d = t(190947),
  _ = t(224550),
  p = t(275850),
  m = t(672971),
  I = t(128069),
  f = t(987209),
  E = t(598),
  x = t(45572),
  N = t(919778),
  S = t(614223),
  T = t(246946),
  h = t(351402),
  b = t(509545),
  g = t(669079),
  P = t(74538),
  v = t(937615),
  A = t(479446),
  C = t(374649),
  M = t(104494),
  y = t(642530),
  O = t(653798),
  R = t(314182),
  L = t(981632),
  j = t(314404),
  Z = t(42818),
  D = t(459965),
  w = t(251660),
  G = t(474936),
  B = t(981631),
  U = t(231338),
  k = t(689938),
  F = t(711978);

function W(e) {
  var n, t, r, W;
  let H, Y, K, {
  selectedPlanId: V,
  paymentSources: z,
  priceOptions: X,
  currencies: q,
  onCurrencyChange: J,
  onPaymentSourceChange: Q,
  handlePaymentSourceAdd: $,
  setHasAcceptedTerms: ee,
  legalTermsNodeRef: en,
  hasLegalTermsFlash: et,
  trialId: ei,
  trialFooterMessageOverride: ea,
  reviewWarningMessage: er,
  metadata: es,
  purchaseState: el,
  hideSubscriptionDetails: eo,
  referralTrialOfferId: ec,
  isTrial: eu = !1,
  isDiscount: ed = !1,
  handleClose: e_
} = e,
{
  isEmbeddedIAP: ep,
  activeSubscription: em,
  selectedSkuId: eI,
  defaultPlanId: ef,
  isPremium: eE,
  startedPaymentFlowWithPaymentSourcesRef: ex,
  setInvoicePreview: eN,
  contextMetadata: eS
} = (0, E.usePaymentContext)(),
{
  isGift: eT,
  giftRecipient: eh,
  selectedGiftStyle: eb
} = (0, f.wD)(),
eg = (0, M.Ng)(),
eP = null == eg ? void 0 : null === (n = eg.discount) || void 0 === n ? void 0 : n.plan_ids.some(e => G.GP[e].skuId === eI),
ev = !eT && null != eg && null != eI && eP,
eA = (0, o.e7)([b.Z], () => b.Z.get(V));
  s()(null != eA, 'Missing plan');
  let eC = [{
  planId: eA.id,
  quantity: 1
}],
eM = el === x.A.PURCHASING || el === x.A.COMPLETED,
ey = eT || eM,
[eO, eR] = (0, C.ED)({
  items: eC,
  renewal: !1,
  preventFetch: ey,
  applyEntitlements: !0,
  paymentSourceId: X.paymentSourceId,
  currency: X.currency,
  trialId: ei,
  metadata: es
}),
[eL, ej] = (0, C.ED)({
  items: eC,
  renewal: !0,
  preventFetch: ey,
  trialId: ei,
  paymentSourceId: X.paymentSourceId,
  currency: X.currency,
  metadata: es
}),
[eZ, eD] = (0, C.ED)({
  items: [{
    planId: G.Xh.PREMIUM_MONTH_TIER_2,
    quantity: 1
  }],
  renewal: !0,
  preventFetch: !ev,
  trialId: ei,
  paymentSourceId: X.paymentSourceId,
  currency: X.currency,
  metadata: es
}),
[ew, eG] = (0, C.o5)({
  paymentSourceId: X.paymentSourceId,
  skuId: eI,
  subscriptionPlanId: V,
  currency: X.currency,
  preventFetch: !eT || eM,
  loadId: eS.loadId
});
  a.useEffect(() => {
eN(ew);
  }, [
eN,
ew
  ]);
  let eB = eT && (0, g.pO)(eh),
eU = null !== (W = null !== (r = null != eR ? eR : ej) && void 0 !== r ? r : eD) && void 0 !== W ? W : eG,
ek = (0, o.e7)([T.Z], () => T.Z.enabled),
eF = X.paymentSourceId,
{
  hasEntitlements: eW,
  entitlements: eH
} = (0, D.H)(eA.id, eT),
eY = (0, P.Ap)(X.paymentSourceId),
eK = (0, N.sE)(ei, eF, V),
eV = (0, S.Kp)({
  isTrial: eu,
  isGift: eT,
  selectedSkuId: eI,
  startedPaymentFlowWithPaymentSources: ex.current
}),
[ez, eX] = a.useState(null == eO ? void 0 : eO.subscriptionPeriodEnd);
  a.useEffect(() => {
null == ez && eX(null == eO ? void 0 : eO.subscriptionPeriodEnd);
  }, [
null == eO ? void 0 : eO.subscriptionPeriodEnd,
ez
  ]);
  let eq = a.useMemo(() => (0, P.V7)({
  skuId: eI,
  isPremium: eE,
  multiMonthPlans: [],
  currentSubscription: em,
  isGift: eT,
  isEligibleForTrial: eu,
  defaultPlanId: ef,
  defaultToMonthlyPlan: !1
}), [
  eI,
  em,
  eT,
  ef,
  eE,
  eu
]),
eJ = (0, S.$g)(eV, eO, eA);
  if (null != eU) {
let e = eU.message;
eU.code === I.SM.INVALID_CURRENCY_FOR_PAYMENT_SOURCE && (e = k.Z.Messages.BILLING_ERROR_UNSUPPORTED_CURRENCY), Y = (0, i.jsx)(u.FormErrorBlock, {
  children: e
});
  } else if (eT && null != ew)
K = (0, i.jsx)(Z.e9, {
  plan: eA,
  className: F.invoice,
  isPrepaidPaymentSource: eY,
  isCustomGift: eB,
  invoicePreview: ew
});
  else if (eu && null != eO)
K = (0, i.jsxs)('div', {
  children: [
    (0, i.jsx)(O.KU, {
      negativeMarginTop: !0
    }),
    (0, i.jsxs)(O.PO, {
      className: F.invoice,
      children: [
        (0, i.jsxs)('div', {
          className: F.trialPriceLine,
          children: [
            (0, i.jsx)(u.Text, {
              variant: 'text-md/bold',
              children: k.Z.Messages.BILLING_PAYMENT_BREAKDOWN_TOTAL
            }),
            (0, i.jsx)(u.Text, {
              variant: 'text-md/normal',
              children: k.Z.Messages.BILLING_TRIAL_PRICE_NOW.format({
                price: (0, v.T4)(0, eO.currency, {
                  maximumFractionDigits: 0
                })
              })
            })
          ]
        }),
        (0, i.jsx)('div', {
          className: F.afterTrialPriceLine,
          children: (0, i.jsx)(Z.yT, {
            invoice: eO,
            plan: eA
          })
        })
      ]
    })
  ]
});
  else {
if (null == eO || null == eL || eJ)
  return (0, i.jsx)('div', {
    className: F.spinnerWrapper,
    children: (0, i.jsx)(u.Spinner, {})
  });
eu && eO.subscriptionPeriodEnd !== eL.subscriptionPeriodEnd && (H = eO.subscriptionPeriodEnd), K = (0, i.jsxs)(O.PO, {
  className: F.invoice,
  children: [
    (0, i.jsx)(O.q9, {
      children: k.Z.Messages.BILLING_SWITCH_PLAN_PURCHASE_DETAILS
    }),
    (0, i.jsx)(Z.Lu, {
      invoice: eO,
      newPlan: eA,
      isPrepaidPaymentSource: eY,
      referralTrialOfferId: ec
    }),
    eY ? null : (0, i.jsx)(Z.nd, {
      renewalInvoice: eL,
      isTrial: eu,
      priceOptions: X,
      overrideRenewalDate: H,
      trialFooterMessageOverride: ea,
      hideSubscriptionDetails: eo
    })
  ]
});
  }
  let eQ = l.M.EEA_COUNTRIES.has(h.Z.ipCountryCodeWithFallback),
{
  checkboxLabel: e$,
  checkboxClassname: e0,
  checkboxLabelClassname: e1
} = function(e, n, t) {
  let i = null,
    a = null,
    r = null;
  if (e && null != n) {
    let {
      intervalType: e,
      intervalCount: s
    } = P.ZP.getIntervalForInvoice(n), l = (0, v.og)((0, v.T4)(n.total, n.currency), e, s), o = null != t ? t : n.subscriptionPeriodEnd;
    i = k.Z.Messages.BILLING_LEGAL_MUMBO_JUMBO_TRIAL_TERMS_LABEL.format({
      termsURL: B.EYA.TERMS,
      paidURL: B.EYA.PAID_TERMS,
      rate: l,
      renewalDate: o
    }), a = F.trialCheckbox, r = F.trialCheckboxLabel;
  }
  return {
    checkboxLabel: i,
    checkboxClassname: a,
    checkboxLabelClassname: r
  };
}(null != eu && eu, eL, H),
e7 = k.Z.Messages.BILLING_SELECT_PLAN_GUILD_SUBSCRIPTION.format({
  planName: eA.name
});
  return eT && !eB ? e7 = k.Z.Messages.PAYMENT_MODAL_SUBTITLE_PREMIUM_GIFT : eT && eB ? e7 = '' : (0, P.PV)(eA.id) && (e7 = P.ZP.getBillingReviewSubheader(null, eA)), eK ? null : (0, i.jsxs)('div', {
className: F.stepBody,
children: [
  null != er && (0, i.jsxs)('div', {
    className: F.reviewWarningMessageContainer,
    children: [
      (0, i.jsx)(u.CircleInformationIcon, {
        size: 'custom',
        color: c.Z.unsafe_rawColors.YELLOW_300.css,
        width: 20,
        height: 20
      }),
      (0, i.jsx)(u.Text, {
        className: F.reviewWarningMessage,
        variant: 'text-sm/normal',
        children: er
      })
    ]
  }),
  Y,
  eV && (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(O.KU, {
        negativeMarginTop: !0,
        negativeMarginBottom: !0
      }),
      (0, i.jsx)(y.Z, {}),
      (0, i.jsx)(j.O, {
        planOptions: eq,
        eligibleForMultiMonthPlans: !1,
        referralTrialOfferId: void 0,
        selectedPlanId: V,
        subscriptionPeriodEnd: ez,
        showTotal: !1,
        discountInvoiceItems: ev ? null == eZ ? void 0 : eZ.invoiceItems : void 0,
        handleClose: e_
      }),
      (0, i.jsx)(O.KU, {})
    ]
  }),
  !eu && (0, i.jsx)(u.FormTitle, {
    tag: u.FormTitleTags.H5,
    children: e7
  }),
  eB && null != eb && (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(L.Z, {
        defaultAnimationState: A.S.LOOP,
        giftStyle: eb,
        shouldAnimate: !0,
        className: F.__invalid_giftMainAnimation
      }),
      (0, i.jsx)(w.s, {
        giftRecipient: eh
      })
    ]
  }),
  K,
  (0, i.jsxs)('div', {
    className: F.paymentSourceWrapper,
    children: [
      eu ? (0, i.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        className: F.formTitle,
        children: k.Z.Messages.BILLING_STEP_PAYMENT_METHOD
      }) : (0, i.jsx)(u.FormTitle, {
        tag: u.FormTitleTags.H5,
        children: k.Z.Messages.PAYMENT_SOURCE_PAYMENT_REQUEST_INFO_TITLE
      }),
      (0, i.jsx)(p.Z, {
        paymentSources: Object.values(z),
        selectedPaymentSourceId: eF,
        prependOption: eW && !eu ? {
          label: k.Z.Messages.ATTACH_PAYMENT_SOURCE_PROMPT_OPTION_OPTIONAL,
          value: null
        } : null,
        onChange: Q,
        onPaymentSourceAdd: $,
        hidePersonalInformation: ek,
        isTrial: eu
      }),
      eW && null == eF ? (0, i.jsx)('div', {
        className: F.paymentSourceOptionalWarning,
        children: k.Z.Messages.ATTACH_PAYMENT_SOURCE_OPTIONAL_WITH_ENTITLEMENTS_WARNING.format({
          months: eH.length
        })
      }) : null,
      ed ? null : (0, i.jsxs)(d.b, {
        currencies: q,
        className: F.currencyWrapper,
        children: [
          (0, i.jsx)(u.FormTitle, {
            tag: u.FormTitleTags.H5,
            children: k.Z.Messages.PAYMENT_CURRENCY
          }),
          (0, i.jsx)(d.Z, {
            selectedCurrency: X.currency,
            currencies: q,
            onChange: J
          })
        ]
      })
    ]
  }),
  (0, i.jsx)(R.Z, {
    isActive: et,
    ref: en,
    children: (0, i.jsx)(m.Z, {
      onChange: ee,
      forceShow: !0,
      checkboxLabel: e$,
      checkboxClassname: e0,
      checkboxLabelClassname: e1,
      finePrint: null != ea ? ea : (0, i.jsx)(_.Z, {
        hide: eu || ed,
        subscriptionPlan: eA,
        renewalInvoice: eL,
        isGift: eT,
        paymentSourceType: null === (t = z[null != eF ? eF : '']) || void 0 === t ? void 0 : t.type,
        isEmbeddedIAP: ep,
        basePrice: (0, P.aS)(eA.id, !1, eT, X)
      }),
      showPricingLink: eA.currency !== U.pK.USD,
      showWithdrawalWaiver: eQ,
      disabled: eM,
      isTrial: eu && null == ea,
      isDiscount: ed,
      subscriptionPlan: eA,
      isGift: eT
    })
  })
]
  });
}