s.d(n, {
  K: function() {
return T;
  },
  Z: function() {
return N;
  }
});
var t = s(735250);
s(470079);
var r = s(512722),
  l = s.n(r),
  a = s(481060),
  i = s(598),
  c = s(74538),
  o = s(296848),
  u = s(231338),
  I = s(689938),
  _ = s(243205),
  E = s(74316);

function T(e) {
  let {
purchaseType: n,
plan: s,
premiumSubscription: t,
isGift: r,
planGroup: a,
isPrepaidPaymentSource: i
  } = e;
  if (n === u.GZ.ONE_TIME)
return r ? I.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : I.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (l()(null != s, 'Subscription plan must be selected to render SubscriptionReviewButton'), r)
return I.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if ((0, c.PV)(s.id)) {
if (i)
  return I.Z.Messages.BILLING_SELECT_PLAN;
if (null != t)
  return t.isPaused ? I.Z.Messages.RESUME : (0, o.R4)(t, s.id, a) ? I.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : I.Z.Messages.BILLING_SWITCH_PLAN_CHANGE;
return (0, c.W_)(null, s);
  }
  return I.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN;
}

function d(e, n) {
  null != e.current && (e.current.scrollIntoView({
behavior: 'smooth'
  }), n());
}

function N(e) {
  let {
legalTermsNodeRef: n,
invoiceError: s,
planError: r,
disablePurchase: l,
flashLegalTerms: c,
isSubmitting: o,
premiumSubscription: u,
isGift: N,
planGroup: M,
isPrepaid: A,
isTrial: P,
makePurchase: L,
needsPaymentSource: R
  } = e, {
selectedPlan: S,
hasAcceptedTerms: m,
purchaseType: U
  } = (0, i.usePaymentContext)(), p = T({
purchaseType: U,
plan: S,
premiumSubscription: u,
isGift: N,
planGroup: M,
isPrepaidPaymentSource: A
  });
  if (null != s || null != r || l)
return (0, t.jsx)(a.Button, {
  color: a.Button.Colors.GREEN,
  disabled: !0,
  children: p
});
  if (R)
return (0, t.jsx)(a.Tooltip, {
  text: I.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
  children: e => (0, t.jsx)(a.Button, {
    ...e,
    color: a.Button.Colors.GREEN,
    type: 'submit',
    'data-testid': 'submitButton',
    disabled: !0,
    children: p
  })
});
  if (P)
return (0, t.jsxs)(a.ShinyButton, {
  innerClassName: _.innerButton,
  'data-testid': m ? 'purchase' : 'submitButton',
  onClick: m ? L : () => d(n, c),
  color: a.Button.Colors.GREEN,
  submitting: o,
  children: [
    (0, t.jsx)('img', {
      alt: '',
      className: _.nitroIcon,
      src: E
    }),
    p
  ]
});
  else if (!m)
return (0, t.jsx)(a.Tooltip, {
  text: I.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
  children: e => (0, t.jsx)(a.Button, {
    ...e,
    color: a.Button.Colors.GREEN,
    type: 'submit',
    onClick: () => d(n, c),
    'data-testid': 'submitButton',
    children: p
  })
});
  else
return (0, t.jsx)(a.Button, {
  'data-testid': 'purchase',
  onClick: L,
  color: a.Button.Colors.GREEN,
  submitting: o,
  children: p
});
}