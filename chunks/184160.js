n.d(t, {
  x: function() {
return h;
  }
});
var i = n(735250);
n(470079);
var r = n(512722),
  o = n.n(r),
  a = n(780384),
  s = n(481060),
  l = n(410030),
  d = n(973159),
  c = n(74538),
  C = n(987209),
  u = n(598),
  _ = n(409813),
  p = n(614223),
  f = n(689938),
  x = n(194566);

function h(e) {
  let {
handleStepChange: t,
handleClose: n
  } = e, r = (0, l.ZP)(), {
activeSubscription: h,
selectedSkuId: b,
setSelectedPlanId: g,
startedPaymentFlowWithPaymentSourcesRef: m
  } = (0, u.usePaymentContext)(), {
isGift: L
  } = (0, C.wD)(), I = null != h ? (0, c.Af)(h) : null, E = null != I ? (0, c.gq)(I.planId) : null, T = null != I ? (0, c.Rd)(I.planId) : null, M = (0, p.Kp)({
isTrial: !1,
isGift: L,
selectedSkuId: b,
startedPaymentFlowWithPaymentSources: m.current
  });
  return o()(null != T, 'Expected premium type'), (0, i.jsx)(d.Z, {
premiumType: T,
titleText: f.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_TITLE,
subtitleText: f.Z.Messages.PREMIUM_DOWNGRADE_WHAT_YOU_LOSE_SUBTITLE.format({
  subscriptionName: E
}),
footer: (0, i.jsxs)('div', {
  className: x.whatYouLoseButtonContainer,
  children: [
    (0, i.jsx)(s.Button, {
      onClick: () => {
        M ? (g((0, p.nA)(b, h)), t(_.h8.REVIEW)) : t(_.h8.PLAN_SELECT);
      },
      children: f.Z.Messages.CONTINUE
    }),
    (0, i.jsx)(s.Button, {
      look: s.Button.Looks.LINK,
      color: (0, a.wj)(r) ? s.Button.Colors.WHITE : s.Button.Colors.PRIMARY,
      onClick: n,
      children: f.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
    })
  ]
}),
onClose: n,
isDowngrade: !0
  });
}