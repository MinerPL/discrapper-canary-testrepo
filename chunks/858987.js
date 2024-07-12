a.d(n, {
  K: function() {
return E;
  },
  Z: function() {
return A;
  }
});
var t = a(735250);
a(470079);
var s = a(512722),
  r = a.n(s),
  l = a(481060),
  i = a(598),
  o = a(74538),
  c = a(296848),
  u = a(231338),
  d = a(689938),
  _ = a(243205),
  I = a(74316);

function E(e) {
  let {
purchaseType: n,
plan: a,
premiumSubscription: t,
isGift: s,
planGroup: l,
isPrepaidPaymentSource: i
  } = e;
  if (n === u.GZ.ONE_TIME)
return s ? d.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT : d.Z.Messages.GUILD_PRODUCT_PURCHASE_MODAL_CTA;
  if (r()(null != a, 'Subscription plan must be selected to render SubscriptionReviewButton'), s)
return d.Z.Messages.PAYMENT_MODAL_BUTTON_PREMIUM_GIFT;
  if ((0, o.PV)(a.id)) {
if (i)
  return d.Z.Messages.BILLING_SELECT_PLAN;
if (null != t)
  return t.isPaused ? d.Z.Messages.RESUME : (0, c.R4)(t, a.id, l) ? d.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : d.Z.Messages.BILLING_SWITCH_PLAN_CHANGE;
return (0, o.W_)(null, a);
  }
  return d.Z.Messages.BILLING_SUBSCRIBE_TO_PLAN;
}

function T(e, n) {
  null != e.current && (e.current.scrollIntoView({
behavior: 'smooth'
  }), n());
}

function A(e) {
  let {
legalTermsNodeRef: n,
invoiceError: a,
planError: s,
disablePurchase: r,
flashLegalTerms: o,
isSubmitting: c,
premiumSubscription: u,
isGift: A,
planGroup: N,
isPrepaid: P,
isTrial: M,
makePurchase: p,
needsPaymentSource: R
  } = e, {
selectedPlan: L,
hasAcceptedTerms: f,
purchaseType: C
  } = (0, i.usePaymentContext)(), m = E({
purchaseType: C,
plan: L,
premiumSubscription: u,
isGift: A,
planGroup: N,
isPrepaidPaymentSource: P
  });
  if (null != a || null != s || r)
return (0, t.jsx)(l.Button, {
  color: l.Button.Colors.GREEN,
  disabled: !0,
  children: m
});
  if (R)
return (0, t.jsx)(l.Tooltip, {
  text: d.Z.Messages.BILLING_SELECT_PAYMENT_SOURCE_TOOLTIP,
  children: e => (0, t.jsx)(l.Button, {
    ...e,
    color: l.Button.Colors.GREEN,
    type: 'submit',
    'data-testid': 'submitButton',
    disabled: !0,
    children: m
  })
});
  if (M)
return (0, t.jsxs)(l.ShinyButton, {
  innerClassName: _.innerButton,
  'data-testid': f ? 'purchase' : 'submitButton',
  onClick: f ? p : () => T(n, o),
  color: l.Button.Colors.GREEN,
  submitting: c,
  children: [
    (0, t.jsx)('img', {
      alt: '',
      className: _.nitroIcon,
      src: I
    }),
    m
  ]
});
  else if (!f)
return (0, t.jsx)(l.Tooltip, {
  text: d.Z.Messages.BILLING_ACCEPT_TERMS_PAID_SERVICES_TOOLTIP,
  children: e => (0, t.jsx)(l.Button, {
    ...e,
    color: l.Button.Colors.GREEN,
    type: 'submit',
    onClick: () => T(n, o),
    'data-testid': 'submitButton',
    children: m
  })
});
  else
return (0, t.jsx)(l.Button, {
  'data-testid': 'purchase',
  onClick: p,
  color: l.Button.Colors.GREEN,
  submitting: c,
  children: m
});
}