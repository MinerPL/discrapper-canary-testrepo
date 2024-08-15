n.d(s, {
  x: function() {
return h;
  }
});
var t = n(735250);
n(470079);
var r = n(512722),
  i = n.n(r),
  l = n(780384),
  a = n(481060),
  o = n(410030),
  C = n(973159),
  d = n(74538),
  u = n(987209),
  c = n(598),
  _ = n(409813),
  p = n(614223),
  x = n(689938),
  L = n(746136);

function h(e) {
  let {
handleStepChange: s,
handleClose: n
  } = e, r = (0, o.ZP)(), {
activeSubscription: h,
selectedSkuId: f,
setSelectedPlanId: I,
startedPaymentFlowWithPaymentSourcesRef: E
  } = (0, c.usePaymentContext)(), {
isGift: M
  } = (0, u.wD)(), N = null != h ? (0, d.Af)(h) : null, j = null != N ? (0, d.gq)(N.planId) : null, T = null != N ? (0, d.Rd)(N.planId) : null, g = (0, p.Kp)({
isTrial: !1,
isGift: M,
selectedSkuId: f,
startedPaymentFlowWithPaymentSources: E.current
  });
  return i()(null != T, 'Expected premium type'), (0, t.jsx)(C.Z, {
premiumType: T,
titleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
subtitleText: x.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
  subscriptionName: j
}),
footer: (0, t.jsxs)('div', {
  className: L.whatYouLoseButtonContainer,
  children: [
    (0, t.jsx)(a.Button, {
      onClick: () => {
        g ? (I((0, p.nA)(f, h)), s(_.h8.REVIEW)) : s(_.h8.PLAN_SELECT);
      },
      children: x.Z.Messages.CONTINUE
    }),
    (0, t.jsx)(a.Button, {
      look: a.Button.Looks.LINK,
      color: (0, l.wj)(r) ? a.Button.Colors.WHITE : a.Button.Colors.PRIMARY,
      onClick: n,
      children: x.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
    })
  ]
}),
onClose: n,
isDowngrade: !0
  });
}