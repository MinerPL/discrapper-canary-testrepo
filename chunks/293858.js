n.d(t, {
  b: function() {
return x;
  }
});
var i = n(735250),
  r = n(470079),
  o = n(512722),
  a = n.n(o),
  s = n(881602),
  l = n(317269),
  d = n(669079),
  c = n(296848),
  C = n(987209),
  u = n(598),
  _ = n(164513),
  p = n(614277),
  f = n(698708);

function x(e) {
  var t, n;
  let o, {
  handleClose: x,
  planGroup: h,
  onSubscriptionConfirmation: b,
  renderPurchaseConfirmation: g,
  postSuccessGuild: m,
  followupSKUInfo: L,
  continueSession: I
} = e,
{
  activeSubscription: E,
  paymentSources: T,
  paymentSourceId: M,
  selectedPlan: N,
  selectedSkuId: S,
  step: j,
  updatedSubscription: O,
  startingPremiumSubscriptionPlanIdRef: A
} = (0, u.usePaymentContext)(),
{
  isGift: P,
  giftRecipient: R,
  giftCode: y,
  hasSentMessage: v,
  isSendingMessage: B,
  sendGiftMessage: k
} = (0, C.wD)();
  a()(null != N, 'Expected plan to selected'), a()(null != S, 'Expected selectedSkuId'), a()(null != j, 'Step should be set');
  let Z = r.useCallback(() => {
x(), null == b || b();
  }, [
x,
b
  ]);
  return r.useEffect(() => {
if (!(!P || null == R || null == y || v || B || (0, d.pO)(R)))
  s.F.getCurrentConfig({
    location: '36b986_1'
  }).enabled && k({
    onSubscriptionConfirmation: b
  });
  }, [
k,
P,
R,
y,
v,
B,
b
  ]), o = null != g ? g(N, Z, O) : I ? (0, i.jsx)(l.VY, {}) : P ? (0, i.jsx)(l.TB, {
planId: N.id,
onClose: Z
  }) : A.current === N.id ? (0, i.jsx)(l.ZP, {
planId: N.id,
postSuccessGuild: m,
onClose: Z,
paymentSourceType: null === (t = T[null != M ? M : '']) || void 0 === t ? void 0 : t.type
  }) : (0, i.jsx)(l.ZP, {
followupSKUInfo: L,
startingPremiumSubscriptionPlanId: A.current,
planId: N.id,
onClose: Z,
isDowngrade: null != E && (0, c.GY)(E, N.id, h),
paymentSourceType: null === (n = T[null != M ? M : '']) || void 0 === n ? void 0 : n.type
  }), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(p.C3, {
    children: [
      (0, i.jsx)(f.Z, {}),
      o
    ]
  }),
  P && (0, i.jsx)(_.Z, {
    onClose: Z
  })
]
  });
}