t.r(n), t.d(n, {
  GuildBoostPurchaseModal: function() {
return en;
  },
  default: function() {
return et;
  }
}), t(47120);
var r, o = t(735250),
  l = t(470079),
  s = t(512722),
  i = t.n(s),
  a = t(77866),
  c = t(792986),
  u = t(772848),
  d = t(442837),
  p = t(780384),
  _ = t(481060),
  E = t(355467),
  f = t(179360),
  I = t(723484),
  S = t(330726),
  C = t(100527),
  P = t(906732),
  h = t(15640),
  m = t(89057),
  N = t(598),
  A = t(409813),
  M = t(45572),
  g = t(98278),
  R = t(431369),
  T = t(176919),
  O = t(3409),
  L = t(185139),
  x = t(210887),
  y = t(430824),
  v = t(314884),
  b = t(975060),
  Z = t(853872),
  U = t(509545),
  k = t(78839),
  D = t(285952),
  B = t(626135),
  j = t(267642),
  G = t(74538),
  Y = t(212895),
  w = t(296848),
  H = t(518062),
  F = t(4434),
  W = t(333451),
  K = t(981631),
  Q = t(474936),
  V = t(231338),
  z = t(689938),
  X = t(17764);
(r || (r = {})).PREMIUM = 'discord://app/settings/nitro';
let q = Q.Xh.NONE_MONTH,
  J = [
A.h8.PLAN_SELECT,
A.h8.REVIEW,
A.h8.CONFIRM
  ],
  $ = [
A.h8.PLAN_SELECT,
A.h8.ADD_PAYMENT_STEPS,
A.h8.REVIEW,
A.h8.CONFIRM
  ];
async function ee(e) {
  await (0, f.X8)();
  let n = (0, j.vx)(v.Z.boostSlots);
  return (0, f.W3)(e, n.map(e => e.id));
}

function en(e) {
  let n, {
  transitionState: t,
  onClose: r,
  closeGuildPerksModal: s,
  analyticsLocations: f,
  analyticsLocation: en,
  analyticsSourceLocation: et,
  guildId: er,
  onSubscribeComplete: eo,
  totalNumberOfSlotsToAssign: el = 1,
  disablePremiumUpsell: es = !1,
  onSubscriptionConfirmation: ei,
  applicationId: ea
} = e,
{
  activeSubscription: ec,
  blockedPayments: eu
} = (0, N.usePaymentContext)(),
ed = (0, d.e7)([k.ZP], () => k.ZP.hasFetchedSubscriptions()),
ep = null != ec ? ec.paymentSourceId : null,
e_ = (0, d.e7)([U.Z], () => null != ec ? (0, w.oE)(ec.planId) : null),
eE = (0, d.e7)([U.Z], () => null == ec || null != U.Z.get(ec.planId)),
ef = (0, d.e7)([U.Z], () => null == e_ ? U.Z.get(q) : e_),
eI = (0, d.e7)([x.Z], () => x.Z.theme),
eS = l.useRef((0, j.vx)(v.Z.boostSlots)).current,
eC = (0, d.e7)([Z.Z], () => Z.Z.defaultPaymentSourceId),
eP = (0, O.fL)(null != ep ? ep : ed ? eC : null),
{
  paymentSources: eh,
  setPurchaseError: em,
  paymentSourceId: eN,
  setIsSubmittingCurrentStep: eA,
  paymentAuthenticationState: eM,
  setPaymentSourceId: eg,
  isSubmittingCurrentStep: eR,
  paymentError: eT,
  purchaseError: eO,
  purchaseErrorBlockRef: eL
} = eP,
ex = Object.keys(eh).length > 0,
[ey, ev] = l.useState(el - eS.length),
[eb, eZ] = l.useState(!1),
eU = (0, d.e7)([b.Z], () => b.Z.popupCallbackCalled),
ek = (0, h.V)(),
eD = l.useMemo(() => null != ec && eE && ek ? (0, R.g)(ec, ey) : [{
  planId: Q.Xh.PREMIUM_MONTH_GUILD,
  quantity: ey
}], [
  ec,
  eE,
  ey,
  ek
]),
[eB, ej] = (0, a.Z)(() => [
  (0, u.Z)(),
  Date.now()
]),
{
  analyticsLocations: eG
} = (0, P.ZP)(f, C.Z.GUILD_BOOST_PURCHASE_MODAL),
eY = l.useMemo(() => {
  var e, n;
  return {
    load_id: eB,
    payment_type: V.Zu[V.GZ.SUBSCRIPTION],
    sku_id: Q.Si.GUILD,
    subscription_type: K.NYc.PREMIUM,
    subscription_plan_id: null !== (n = null === (e = eD.find(e => {
      let {
        planId: n
      } = e;
      return Q.Z1.has(n);
    })) || void 0 === e ? void 0 : e.planId) && void 0 !== n ? n : Q.Xh.PREMIUM_MONTH_GUILD,
    quantity: ey,
    location: en,
    source: et,
    location_stack: eG
  };
}, [
  eB,
  en,
  eG,
  et,
  eD,
  ey
]);
  l.useEffect(() => {
(0, Y.i1)(eN);
  }, [eN]), l.useEffect(() => {
(async () => {
  if (!0 === eU)
    try {
      if (null == b.Z.redirectedPaymentId)
        return;
      await (0, E.OP)(b.Z.redirectedPaymentId), eq(A.h8.CONFIRM), eQ(M.A.COMPLETED), null != er && await ee(er), null != eo && eo();
    } catch (e) {
      eQ(M.A.FAIL), em(e), B.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
        ...eY,
        payment_error_code: null == e ? void 0 : e.code,
        payment_gateway: K.gg$.STRIPE,
        payment_source_id: eN,
        duration_ms: Date.now() - ej
      });
    } finally {
      eA(!1), (0, E.K2)();
    }
})();
  }, [eU]), l.useEffect(() => {
!k.ZP.hasFetchedSubscriptions() && (0, E.jg)(), B.default.track(K.rMx.PAYMENT_FLOW_STARTED, {
  ...eY,
  guild_id: er,
  application_id: ea
}), null != ec && null != ec.renewalMutations && B.default.track(K.rMx.PREMIUM_GUILD_PENDING_MODAL, {
  location: en,
  guild_id: er
});
  }, []);
  let [ew, eH] = l.useState(J), [eF, eW] = l.useState(A.h8.PLAN_SELECT), [eK, eQ] = l.useState(M.A.WAITING), [eV, ez] = l.useState(!0), eX = (0, c.Z)(() => Date.now(), [eF]), eq = l.useCallback((e, n) => {
eW(e), em(null);
let t = Date.now();
B.default.track(K.rMx.PAYMENT_FLOW_STEP, {
  ...eY,
  from_step: null != n ? n : eF,
  to_step: e === A.h8.ADD_PAYMENT_STEPS ? A.h8.PAYMENT_TYPE : e,
  step_duration_ms: t - eX,
  flow_duration_ms: t - ej,
  guild_id: er,
  application_id: ea
});
  }, [
em,
eY,
eF,
eX,
ej,
er,
ea
  ]), eJ = () => {
r(eK === M.A.COMPLETED);
  }, e$ = null != ec && ec.isPurchasedExternally;
  l.useEffect(() => {
eM !== T.wr.PENDING && eF !== A.h8.CONFIRM && null != ep && (ew !== J && eH(J), !J.includes(eF) && eF !== A.h8.PREMIUM_UPSELL && eq(A.h8.REVIEW)), eF === A.h8.ADD_PAYMENT_STEPS && ew !== $ && eH($), e$ && eF !== A.h8.PLAN_SELECT && eW(A.h8.PLAN_SELECT);
  }, [
eF,
eq,
e$,
eM,
ec,
ep,
ew
  ]), (0, T.bp)(eF, eM, eq, eQ), (0, A.dZ)(eF, eK, eQ);
  let e0 = l.useRef(null),
[e8, e7] = (0, S.Z)(!1, 500),
[e9, e1] = l.useState(null),
[e4, e2] = l.useState([]),
[e5, e3] = l.useState(!1);
  l.useEffect(() => {
let e;
if (!!ek)
  null != U.Z.get(Q.Xh.PREMIUM_MONTH_GUILD) && e2(e = (0, Y.DE)(Q.Xh.PREMIUM_MONTH_GUILD, eN, !1)), null == eN && null != ec && null != ec.paymentSourceId ? e1(ec.currency) : null != e && e1(e[0]);
  }, [
eN,
ec,
ek,
JSON.stringify(e4)
  ]);
  let e6 = (0, O.vP)({
paymentModalArgs: eP,
initialStep: A.h8.PAYMENT_TYPE,
prependSteps: [A.h8.PLAN_SELECT],
appendSteps: [
  A.h8.REVIEW,
  A.h8.CONFIRM
],
breadcrumpSteps: ew,
currentBreadcrumpStep: eF,
onReturn: () => {
  eq(Object.values(eh).length < 1 ? A.h8.PLAN_SELECT : A.h8.REVIEW, A.h8.PAYMENT_TYPE);
},
onComplete: e => {
  eq(A.h8.REVIEW, e);
},
onStepChange: e => {
  let {
    currentStep: n,
    toStep: t
  } = e, r = Date.now();
  B.default.track(K.rMx.PAYMENT_FLOW_STEP, {
    ...eY,
    from_step: n,
    to_step: t,
    step_duration_ms: r - eX,
    flow_duration_ms: r - ej,
    guild_id: er
  });
}
  });
  if (eu)
n = (0, o.jsx)(m.Vq, {
  onClose: eJ
});
  else if (ed && eE && ek && null != e9 && '' !== e9) {
if (null == ec ? void 0 : ec.isPausedOrPausePending)
  n = (0, o.jsx)(_.ModalContent, {
    children: (0, o.jsx)('p', {
      className: X.copy,
      children: z.Z.Messages.GUILD_BOOSTING_DISABLED_FOR_PAUSED_SUBSCRIPTION
    })
  });
else if (null != ec && null != ec.renewalMutations)
  n = (0, o.jsx)(_.ModalContent, {
    children: (0, o.jsx)('p', {
      className: X.copy,
      children: z.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_PENDING_MUTATION
    })
  });
else if (eF === A.h8.PREMIUM_UPSELL) {
  i()(null != ef, 'Missing nextPremiumSubscriptionPlan'), i()(e9, 'Currency not defined');
  let e = null != eN ? {
    paymentSourceId: eN,
    currency: e9
  } : {
    currency: e9
  };
  n = (0, o.jsx)(W.Z, {
    premiumSubscriptionPlan: ef,
    analyticsLocation: en,
    analyticsSourceLocation: et,
    onClose: eJ,
    onBack: () => eq(A.h8.PLAN_SELECT),
    onSkip: () => eq(null != ep || ex ? A.h8.REVIEW : A.h8.ADD_PAYMENT_STEPS),
    onSubscriptionConfirmation: ei,
    priceOptions: e
  });
} else {
  let e, t, r, l;
  i()(e9, 'Currency not defined');
  let a = null != eN ? {
    paymentSourceId: eN,
    currency: e9
  } : {
    currency: e9
  };
  switch (eF) {
    case A.h8.PLAN_SELECT:
      i()(null != er, 'Missing guildId'), i()(null != ef, 'Missing nextPremiumSubscriptionPlan'), e = (0, o.jsx)(F.CP, {
        premiumSubscriptionPlan: ef,
        numGuildBoosts: ey,
        setNumGuildBoosts: ev,
        setForceDisableSubmitButton: ez,
        premiumSubscription: ec,
        existingAvailableSlots: eS,
        onClickPremiumSubscriptionLink: () => {
          if (__BILLING_STANDALONE__) {
            window.location.href = 'discord://app/settings/nitro';
            return;
          }
          eJ(), null != s && s(), (0, g.z)();
        },
        guildId: er,
        priceOptions: a
      }), e$ && null != ec && null != ec.paymentGateway && (e = (0, o.jsxs)(o.Fragment, {
        children: [
          (0, o.jsx)(_.FormErrorBlock, {
            className: X.externalErrorBlock,
            children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_EXTERNAL.format({
              paymentGatewayName: V.Vz[ec.paymentGateway]
            })
          }),
          e
        ]
      })), r = (0, o.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: (0, p.ap)(eI) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
        onClick: eJ,
        children: z.Z.Messages.NEVERMIND
      }), l = (0, o.jsx)(_.Button, {
        type: 'submit',
        disabled: eV || 0 === ey || e$,
        onClick: () => {
          if (!es && (null == e_ || e_.premiumSubscriptionType !== Q.p9.TIER_2)) {
            eq(A.h8.PREMIUM_UPSELL);
            return;
          }
          eq(null != ep || ex ? A.h8.REVIEW : A.h8.ADD_PAYMENT_STEPS);
        },
        children: z.Z.Messages.CONTINUE
      });
      break;
    case A.h8.ADD_PAYMENT_STEPS:
      break;
    case A.h8.AWAITING_AUTHENTICATION:
      e = (0, o.jsx)(I.F, {
        className: X.__invalid_body
      });
      break;
    case A.h8.REVIEW:
      i()(null != ef, 'Missing nextPremiumSubscriptionPlan'), e = (0, o.jsx)(F.Gq, {
        paymentSources: eh,
        priceOptions: a,
        currentPremiumSubscription: ec,
        premiumSubscriptionPaymentSourceId: ep,
        premiumSubscriptionPlan: ef,
        newAdditionalPlans: eD,
        onPaymentSourceChange: e => eg(null != e ? e.id : null),
        onPaymentSourceAdd: () => {
          eq(A.h8.ADD_PAYMENT_STEPS), eg(null);
        },
        onPurchaseTermsChange: eZ,
        legalTermsNodeRef: e0,
        hasLegalTermsFlash: e8
      }), t = A.h8.PLAN_SELECT, l = eb ? (0, o.jsx)(_.Button, {
        color: _.Button.Colors.GREEN,
        type: 'submit',
        submitting: eR,
        onClick: async () => {
          i()(null != eD, 'Missing newAdditionalPlans');
          let e = null != eN ? eh[eN] : null;
          em(null);
          try {
            if (eQ(M.A.PURCHASING), eA(!0), i()(null != eN, 'Missing paymentSourceId'), B.default.track(K.rMx.PAYMENT_FLOW_COMPLETED, {
                ...eY,
                duration_ms: Date.now() - ej,
                guild_id: er,
                application_id: ea
              }), e5)
              return;
            if (null == ec || null == e_) {
              i()(null != e, 'Missing paymentSource');
              let n = await (0, E.XW)({
                items: eD,
                paymentSource: e,
                currency: a.currency
              });
              if (n.redirectConfirmation) {
                e3(null != n.redirectURL);
                return;
              }
            } else {
              let n = {
                items: (0, G.MY)(ec, eD)
              };
              n.currency = ec.currency, null == n.currency && (n.currency = a.currency), n.paymentSource = null != ep ? eh[ep] : void 0, null == n.paymentSource && (i()(null != e, 'Missing paymentSource'), n.paymentSource = e, n.currency = a.currency);
              let t = await (0, E.Mg)(ec, n, eG);
              if (t.redirectConfirmation) {
                e3(null != t.redirectURL);
                return;
              }
            }
            eq(A.h8.CONFIRM), eQ(M.A.COMPLETED), null != er && await ee(er), null != eo && eo();
          } catch (n) {
            eQ(M.A.FAIL), em(n), B.default.track(K.rMx.PAYMENT_FLOW_FAILED, {
              ...eY,
              payment_error_code: null == n ? void 0 : n.code,
              payment_gateway: null != e ? e.type === K.HeQ.CARD ? K.gg$.STRIPE : K.gg$.BRAINTREE : null,
              payment_source_id: eN,
              duration_ms: Date.now() - ej
            });
          } finally {
            !e5 && eA(!1);
          }
        },
        children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
      }) : (0, o.jsx)(_.Tooltip, {
        text: z.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
        children: e => (0, o.jsx)(_.Button, {
          ...e,
          color: _.Button.Colors.GREEN,
          onClick: () => {
            null != e0.current && (e0.current.scrollIntoView({
              behavior: 'smooth'
            }), e7(!0));
          },
          type: 'submit',
          children: z.Z.Messages.GUILD_SUBSCRIPTION_PURCHASE_MODAL_SUBMIT
        })
      });
      break;
    case A.h8.CONFIRM:
      var ne;
      let c = y.Z.getGuild(er);
      e = (0, o.jsx)(F.R7, {
        guild: c,
        guildBoostQuantity: ey + eS.length,
        onClose: eJ,
        withAnimation: !1,
        paymentSourceType: null === (ne = eh[null != eN ? eN : '']) || void 0 === ne ? void 0 : ne.type
      });
  }
  let u = null != eT && null == (0, A.ly)(eT) ? eT : eO;
  n = eF === A.h8.ADD_PAYMENT_STEPS ? e6 : (0, o.jsx)(L.Z, {
    hideBreadcrumbs: eF === A.h8.CONFIRM,
    steps: ew,
    currentStep: eF,
    paymentError: u,
    purchaseErrorBlockRef: eL,
    hasCurrencies: e4.length > 1,
    body: e,
    footer: eF !== A.h8.CONFIRM ? (0, o.jsxs)(_.ModalFooter, {
      direction: D.Z.Direction.HORIZONTAL,
      align: D.Z.Align.CENTER,
      justify: D.Z.Justify.END,
      children: [
        null != t ? (0, o.jsx)('div', {
          className: X.backStep,
          children: (0, o.jsx)(_.Button, {
            color: (0, p.ap)(eI) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
            look: _.Button.Looks.LINK,
            size: _.Button.Sizes.NONE,
            onClick: () => {
              null != t && eq(t);
            },
            children: z.Z.Messages.BACK
          })
        }) : null,
        (0, o.jsxs)('div', {
          className: X.footerRight,
          children: [
            r,
            l
          ]
        })
      ]
    }) : null
  });
}
  } else
n = (0, o.jsx)('div', {
  className: X.loadingWrapper,
  children: (0, o.jsx)(_.Spinner, {})
});
  let nn = null;
  return !eu && eF !== A.h8.PREMIUM_UPSELL && (nn = (0, o.jsx)(H.Z, {
onClose: eJ,
currentStep: eF,
purchaseState: eK
  })), (0, o.jsxs)(_.ModalRoot, {
transitionState: t,
children: [
  nn,
  n
]
  });
}

function et(e) {
  let n = (0, d.e7)([k.ZP], () => k.ZP.getPremiumTypeSubscription()),
{
  analyticsLocations: t
} = (0, P.ZP)(C.Z.GUILD_BOOST_PURCHASE_MODAL);
  return (0, o.jsx)(P.Gt, {
value: t,
children: (0, o.jsx)(N.PaymentContextProvider, {
  activeSubscription: n,
  stepConfigs: [],
  skuIDs: [],
  children: (0, o.jsx)(en, {
    ...e
  })
})
  });
}