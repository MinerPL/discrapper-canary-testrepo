s.r(t), s.d(t, {
  Steps: function() {
return n;
  },
  default: function() {
return X;
  }
}), s(47120), s(411104);
var n, a, i = s(735250),
  r = s(470079),
  o = s(120356),
  l = s.n(o),
  c = s(887024),
  d = s(512722),
  _ = s.n(d),
  E = s(442837),
  u = s(780384),
  T = s(481060),
  I = s(355467),
  S = s(410030),
  N = s(100527),
  C = s(906732),
  m = s(211242),
  A = s(509545),
  h = s(285952),
  g = s(626135),
  O = s(122289),
  p = s(63063),
  R = s(74538),
  x = s(937615),
  M = s(374649),
  D = s(140465),
  f = s(314684),
  P = s(653798),
  L = s(625881),
  Z = s(440984),
  b = s(398775),
  v = s(973159),
  j = s(311821),
  B = s(42818),
  U = s(798769),
  G = s(459965),
  F = s(119269),
  y = s(474936),
  V = s(981631),
  Y = s(689938),
  w = s(983746);
(a = n || (n = {}))[a.WHAT_YOU_LOSE = 1] = 'WHAT_YOU_LOSE', a[a.CONFIRM = 2] = 'CONFIRM', a[a.PREVIEW = 3] = 'PREVIEW', a[a.CONFIRM_DISCOUNT = 4] = 'CONFIRM_DISCOUNT', a[a.DISCOUNT_APPLIED = 5] = 'DISCOUNT_APPLIED', a[a.PAUSE_SELECT = 6] = 'PAUSE_SELECT', a[a.PAUSE_CONFIRM = 7] = 'PAUSE_CONFIRM';
async function k(e) {
  let {
premiumSubscription: t,
onClose: s,
setHasError: n,
setIsCancelling: a,
analyticsLocations: i,
analyticsLocation: r
  } = e;
  try {
if (a(!0), n(!1), [
    V.O0b.PAST_DUE,
    V.O0b.PAUSED,
    V.O0b.BILLING_RETRY
  ].includes(t.status))
  await (0, I.EO)(t.id, i, r);
else {
  var o, l;
  let e = null !== (l = null === (o = t.renewalMutations) || void 0 === o ? void 0 : o.items) && void 0 !== l ? l : t.items;
  await (0, I.Mg)(t, {
    items: (0, R.Ue)(e)
  }, i, r);
}
s();
  } catch {
n(!0), a(!1);
  }
}

function H(e) {
  var t;
  let {
premiumSubscription: s,
premiumType: n,
setStep: a,
onClose: o,
whatYouLoseExperienceEnabled: l,
analyticsLocation: c
  } = e, d = (0, m.Q)(), [_, E] = r.useState(!1), [I, N] = r.useState(!1), A = (0, S.ZP)(), {
analyticsLocations: g
  } = (0, C.ZP)(), O = null;
  switch (s.status) {
case V.O0b.PAST_DUE:
case V.O0b.PAUSED:
case V.O0b.BILLING_RETRY:
  O = Y.Z.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
  break;
default:
  switch (n) {
    case y.p9.TIER_0:
      O = d ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
        date: s.currentPeriodEnd,
        helpdeskArticle: p.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
      }) : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
        date: s.currentPeriodEnd
      });
      break;
    case y.p9.TIER_1:
      O = d ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
        date: s.currentPeriodEnd,
        helpdeskArticle: p.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
      }) : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
        date: s.currentPeriodEnd
      });
      break;
    default:
      O = d ? Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
        date: s.currentPeriodEnd,
        helpdeskArticle: p.Z.getArticleURL(V.BhN.BLOCKED_PAYMENTS)
      }) : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
        date: s.currentPeriodEnd
      });
  }
  }
  let x = s.items.some(e => {
  let {
    planId: t
  } = e;
  return !y.dJ.has(t);
}) && null == s.renewalMutations || (null === (t = s.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
  let {
    planId: t
  } = e;
  return !y.dJ.has(t);
})) != null,
M = x ? (0, i.jsx)(T.Button, {
  onClick: () => a(3),
  children: Y.Z.Messages.NEXT
}) : (0, i.jsx)(T.Button, {
  color: T.Button.Colors.RED,
  disabled: _,
  onClick: async () => {
    await k({
      setHasError: N,
      onClose: o,
      premiumSubscription: s,
      setIsCancelling: E,
      analyticsLocations: g,
      analyticsLocation: c
    });
  },
  children: l ? Y.Z.Messages.CONFIRM : Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
    planPremiumType: R.ZP.getDisplayPremiumType(s.planId)
  })
}),
D = (0, i.jsx)(T.Button, {
  look: T.Button.Looks.LINK,
  color: (0, u.ap)(A) ? T.Button.Colors.PRIMARY : T.Button.Colors.WHITE,
  onClick: o,
  children: l ? Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : Y.Z.Messages.CANCEL
});
  return (0, i.jsxs)(i.Fragment, {
children: [
  l ? (0, i.jsx)(U.Z, {
    premiumType: n,
    className: w.cancellationHeader,
    onClose: o
  }) : (0, i.jsxs)(T.ModalHeader, {
    separator: !1,
    children: [
      (0, i.jsx)(T.FormTitle, {
        tag: T.FormTitleTags.H4,
        children: Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: R.ZP.getDisplayPremiumType(s.planId)
        })
      }),
      (0, i.jsx)(T.ModalCloseButton, {
        onClick: o
      })
    ]
  }),
  (0, i.jsxs)(T.ModalContent, {
    className: w.body,
    children: [
      I ? (0, i.jsx)(T.FormErrorBlock, {
        className: w.errorBlock,
        children: Y.Z.Messages.BILLING_ERROR_GENERIC
      }) : null,
      (0, i.jsx)('div', {
        className: w.cancelImage
      }),
      (0, i.jsx)('div', {
        children: O
      })
    ]
  }),
  (0, i.jsxs)(T.ModalFooter, {
    justify: h.Z.Justify.START,
    children: [
      M,
      D
    ]
  })
]
  });
}

function W(e) {
  var t, s;
  let {
premiumSubscription: n
  } = e, {
analyticsLocations: a
  } = (0, C.ZP)(), [r] = (0, M.ED)({
subscriptionId: n.id,
items: (0, R.Ue)(null !== (s = null === (t = n.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== s ? s : n.items),
renewal: !0,
analyticsLocations: a,
analyticsLocation: N.Z.CANCEL_INVOICE_PREVIEW
  }), o = (0, E.e7)([A.Z], () => A.Z.get(n.planId));
  if (null == r || null == o)
return (0, i.jsx)(T.Spinner, {
  className: w.loading
});
  let {
intervalType: l,
intervalCount: c
  } = R.ZP.getIntervalForInvoice(r);
  return (0, i.jsxs)('div', {
className: w.__invalid_bodyText,
children: [
  (0, i.jsx)('div', {
    className: w.renewalInvoiceDate,
    children: 0 !== r.total ? Y.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
      renewalDate: r.subscriptionPeriodStart,
      rate: (0, x.og)((0, x.T4)(r.total, r.currency), l, c)
    }) : Y.Z.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
      renewalDate: r.subscriptionPeriodStart
    })
  }),
  (0, i.jsxs)(P.PO, {
    children: [
      (0, i.jsx)(P.q9, {
        children: Y.Z.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }),
      (0, i.jsx)(P.R$, {
        label: Y.Z.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: R.ZP.getDisplayName(o.id)
        }),
        value: (0, R.PK)(o),
        className: w.invoiceCancelRow
      }),
      (0, i.jsx)(P.KU, {}),
      (0, i.jsx)(B.nd, {
        premiumSubscription: n,
        renewalInvoice: r,
        isUpdate: !0
      })
    ]
  })
]
  });
}

function K(e) {
  let {
premiumSubscription: t,
premiumType: s,
onBack: n,
onClose: a,
analyticsLocation: o
  } = e, [c, d] = r.useState(!1), [_, E] = r.useState(!1), {
analyticsLocations: u
  } = (0, C.ZP)();
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(U.Z, {
    premiumType: s,
    onClose: a
  }),
  (0, i.jsxs)(T.ModalContent, {
    className: l()(w.previewStep, w.body),
    children: [
      _ ? (0, i.jsx)(T.FormErrorBlock, {
        className: w.errorBlock,
        children: Y.Z.Messages.BILLING_ERROR_GENERIC
      }) : null,
      (0, i.jsx)(W, {
        premiumSubscription: t
      })
    ]
  }),
  (0, i.jsxs)(T.ModalFooter, {
    align: h.Z.Align.CENTER,
    justify: h.Z.Justify.BETWEEN,
    children: [
      (0, i.jsx)(T.Button, {
        color: T.Button.Colors.RED,
        disabled: c,
        onClick: async () => {
          await k({
            setHasError: E,
            onClose: a,
            premiumSubscription: t,
            setIsCancelling: d,
            analyticsLocations: u,
            analyticsLocation: o
          });
        },
        children: Y.Z.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: R.ZP.getDisplayPremiumType(t.planId)
        })
      }),
      (0, i.jsx)(j.Z, {
        onClick: n
      })
    ]
  })
]
  });
}

function z(e) {
  var t;
  return {
subscription_id: e.id,
subscription_type: e.type,
subscription_plan_id: null === (t = (0, R.Af)(e)) || void 0 === t ? void 0 : t.id,
subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
subscription_status: e.status
  };
}
let Q = {
  1: 'What You\'re Losing',
  2: 'Confirm Cancellation',
  3: 'Preview Updated Subscription',
  4: 'Redeem Churn Discount Started',
  5: 'Redeem Churn Discount Completed',
  6: 'Select Pause Duration',
  7: 'Confirm Pause Duration'
};

function X(e) {
  var t;
  let s, {
  premiumSubscription: n,
  transitionState: a,
  onClose: o,
  analyticsLocations: l,
  analyticsLocation: d,
  initialStep: E
} = e,
I = r.useRef(new c.qA()),
[m, A] = r.useState(null),
h = (0, f.yQ)(),
p = (null == h ? void 0 : h.showCard) === !0,
x = null === (t = (0, R.Af)(n)) || void 0 === t ? void 0 : t.planId,
M = null != x ? R.ZP.getPremiumType(x) : null;
  _()(null != M, 'Should not be cancelling Nitro without premiumType');
  let P = (0, S.ZP)();
  r.useEffect(() => {
g.default.track(V.rMx.CANCELLATION_FLOW_STARTED, z(n));
  }, [n]);
  let j = M === y.p9.TIER_0 || M === y.p9.TIER_1 || M === y.p9.TIER_2;
  null == E && (E = j ? 1 : 2);
  let {
analyticsLocations: B
  } = (0, C.ZP)(l, N.Z.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [U, k, W, X] = function(e, t, s) {
let [n, a] = r.useState(e), [i, o] = r.useState(Date.now()), [l] = r.useState(Date.now()), c = r.useCallback(e => {
  g.default.track(V.rMx.CANCELLATION_FLOW_STEP, {
    from_step: Q[n],
    to_step: Q[e],
    step_duration_ms: Date.now() - i,
    flow_duration_ms: Date.now() - l,
    location_stack: s,
    ...z(t)
  }), a(e), o(Date.now());
}, [
  s,
  l,
  i,
  n,
  t
]);
return [
  n,
  c,
  i,
  l
];
  }(E, n, l), [q, J] = r.useState(null);
  (0, G.w)(n, o, !1);
  let $ = e => {
  o(), g.default.track(V.rMx.CANCELLATION_FLOW_STEP, {
    from_step: Q[e],
    to_step: null,
    step_duration_ms: Date.now() - W,
    flow_duration_ms: Date.now() - X,
    location_stack: l,
    ...z(n)
  });
},
ee = (0, D.UV)(),
{
  churnUserDiscountOffer: et,
  isFetchingChurnDiscountOffer: es
} = (0, D.WR)(!ee || 1 !== U);
  switch (U) {
case 6:
  s = (0, i.jsx)(b.of, {
    premiumSubscription: n,
    premiumType: M,
    setStep: k,
    onClose: () => $(U),
    pauseDuration: q,
    setPauseDuration: J,
    footer: (0, i.jsxs)('div', {
      className: w.whatYouLoseButtonContainer,
      children: [
        (0, i.jsx)(T.Button, {
          disabled: null === q,
          onClick: () => {
            0 === q ? k(1) : k(7);
          },
          children: Y.Z.Messages.CONTINUE
        }),
        (0, i.jsx)(T.Button, {
          look: T.Button.Looks.LINK,
          color: (0, u.wj)(P) ? T.Button.Colors.WHITE : T.Button.Colors.PRIMARY,
          onClick: o,
          children: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
        })
      ]
    }),
    analyticsLocation: d
  });
  break;
case 7:
  if (null == q) {
    let e = Error('No pause duration to set');
    throw (0, O.q2)(e, {
      extra: {
        subscriptionId: n.id,
        status: n.status
      }
    }), e;
  }
  s = (0, i.jsx)(b.Sz, {
    premiumSubscription: n,
    premiumType: M,
    setStep: k,
    onClose: () => $(U),
    analyticsLocation: d,
    pauseDuration: q
  });
  break;
case 1:
  s = (0, i.jsx)(v.Z, {
    premiumType: M,
    titleText: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
    subtitleText: p ? Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE_TENURE_REWARD_V2 : Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
    subtitleClassName: p ? w.subtitleSection : void 0,
    subtitleIcon: p && (0, i.jsx)('div', {
      className: w.subtitleIcon,
      children: (0, i.jsx)(F.Z, {
        staticPercentage: 100,
        iconClassName: w.iconClassName,
        showAnimations: !1,
        innerCircleClassName: w.innerCircle,
        progressCircleStrokeSize: 5,
        backgroundCircleSize: '38%'
      })
    }),
    footer: (0, i.jsxs)('div', {
      className: w.whatYouLoseButtonContainer,
      children: [
        (0, i.jsx)(T.Button, {
          onClick: () => k(2),
          children: Y.Z.Messages.CONTINUE
        }),
        (0, i.jsx)(T.Button, {
          look: T.Button.Looks.LINK,
          color: (0, u.wj)(P) ? T.Button.Colors.WHITE : T.Button.Colors.PRIMARY,
          onClick: () => $(U),
          children: Y.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
        })
      ]
    }),
    onClose: () => $(U),
    onDiscountClaim: () => k(4),
    onContinue: () => k(2),
    isLoading: ee && es,
    churnUserDiscountOffer: et,
    analyticsLocations: B
  });
  break;
case 2:
  s = (0, i.jsx)(H, {
    premiumSubscription: n,
    premiumType: M,
    setStep: k,
    onClose: () => $(U),
    whatYouLoseExperienceEnabled: j,
    analyticsLocation: d
  });
  break;
case 3:
  s = (0, i.jsx)(K, {
    premiumSubscription: n,
    premiumType: M,
    onBack: () => k(2),
    onClose: () => $(U),
    analyticsLocation: d
  });
  break;
case 4:
  s = (0, i.jsx)(L.Z, {
    premiumSubscription: n,
    premiumType: M,
    onClose: () => $(U),
    onConfirm: () => k(5),
    userDiscountOffer: et
  });
  break;
case 5:
  s = (0, i.jsx)(Z.D, {
    premiumSubscription: n,
    premiumType: M,
    onClose: () => $(U),
    confettiCanvas: m,
    userDiscountOffer: et
  });
  break;
default:
  throw Error('Unexpected step: '.concat(U));
  }
  return (0, i.jsxs)(C.Gt, {
value: B,
children: [
  (0, i.jsx)(c.O_, {
    ref: A,
    className: w.confettiCanvas,
    environment: I.current
  }),
  (0, i.jsx)(T.ModalRoot, {
    transitionState: a,
    children: s
  })
]
  });
}