n.d(t, {
  Z: function() {
return p;
  }
}), n(789020);
var r = n(735250),
  a = n(470079),
  i = n(131388),
  l = n(607070),
  s = n(745510),
  o = n(171246),
  u = n(689011),
  c = n(931905),
  d = n(598),
  I = n(409813),
  _ = n(586585),
  f = n(456251),
  h = n(614277),
  E = n(698708),
  S = n(750143),
  m = n(689938);

function p(e) {
  var t, n;
  let p, T, {
  showBenefits: C,
  handleClose: N,
  onSubscriptionConfirmation: A
} = e,
{
  updatedSubscription: O,
  readySlideId: P,
  selectedSku: b,
  selectedStoreListing: g,
  application: v
} = (0, d.usePaymentContext)(),
L = (0, i.Z)(S.i),
{
  createMultipleConfettiAt: x
} = a.useContext(s.h),
R = null !== (t = null == b ? void 0 : b.name) && void 0 !== t ? t : '',
M = () => {
  N(), null == A || A();
},
k = P === I.h8.CONFIRM,
B = (0, o.KW)(null !== (n = null == b ? void 0 : b.flags) && void 0 !== n ? n : 0),
j = null != g && g.benefits.length > 0 ? m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
  benefitCount: g.benefits.length
}) : null;
  return C ? L ? p = (0, r.jsx)(c.h, {
title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
  tierName: R
}),
subtitle: null != g && g.benefits.length > 0 ? m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
  benefits: j
}) : null,
onConfirm: M,
confirmCta: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (p = null != g && null != v ? (0, r.jsx)(u.Oc, {
icon: g.thumbnail,
storeListingBenefits: g.benefits,
application: v,
title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
  tier: R
}),
subtitle: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
description: B ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
  applicationName: null == v ? void 0 : v.name
}) : m.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
  tier: R
})
  }) : (0, r.jsx)(f.Z, {}), T = (0, r.jsx)(_.Z, {
onPrimary: M,
primaryCTA: _.g.CONTINUE,
primaryText: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : p = L ? (0, r.jsx)(c.m, {
tierName: R,
onConfirm: M,
subscription: O
  }) : (0, r.jsx)(u.xe, {
tierName: R,
onConfirm: M,
subscription: O
  }), a.useEffect(() => {
l.Z.useReducedMotion && k && x(window.innerWidth / 2, window.innerHeight / 2);
  }, [
x,
k
  ]), (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsxs)(h.C3, {
    children: [
      (0, r.jsx)(E.Z, {}),
      p
    ]
  }),
  null != T && (0, r.jsx)(h.O3, {
    children: T
  })
]
  });
}