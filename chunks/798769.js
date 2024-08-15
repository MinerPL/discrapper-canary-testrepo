t.d(n, {
  Z: function() {
return h;
  }
});
var s = t(735250);
t(470079);
var r = t(120356),
  a = t.n(r),
  i = t(442837),
  c = t(481060),
  l = t(607070),
  L = t(409813),
  C = t(669079),
  o = t(170579),
  u = t(616030),
  d = t(474936),
  S = t(689938),
  f = t(614956);

function h(e) {
  let {
currentStep: n,
className: t,
purchaseState: r,
premiumType: h,
useWinterTheme: p = !1,
onClose: T,
hideCloseButton: N,
showTrialBadge: R,
showDiscountBadge: I,
isGift: E,
giftRecipient: m
  } = e, M = (0, i.e7)([l.Z], () => l.Z.useReducedMotion), _ = p ? d.nL.WINTER : d.nL.DEFAULT;
  return E && (0, C.pO)(m) && n !== L.h8.CONFIRM ? (0, s.jsxs)(c.ModalHeader, {
className: f.modalHeaderCustomGift,
separator: !1,
children: [
  (0, s.jsx)('div', {
    className: f.giftNitroInfo,
    children: (0, s.jsx)(c.Heading, {
      variant: 'heading-lg/semibold',
      children: (() => {
        switch (n) {
          case L.h8.PLAN_SELECT:
            return h === d.p9.TIER_0 ? S.Z.Messages.GIFT_NITRO_TIER_0 : S.Z.Messages.GIFT_NITRO_ACTION;
          case L.h8.ADD_PAYMENT_STEPS:
            return S.Z.Messages.PAYMENT_METHOD_SELECTION;
          case L.h8.REVIEW:
            return S.Z.Messages.GIFT_PURCHASE_REVIEW;
          default:
            return S.Z.Messages.GIFT_NITRO_ACTION;
        }
      })()
    })
  }),
  (0, s.jsx)(c.ModalCloseButton, {
    onClick: T,
    className: f.closeButton
  })
]
  }) : (0, s.jsx)(c.ModalHeader, {
className: a()(f.modalHeader, t),
separator: !1,
children: (0, s.jsx)(o.Z, {
  hideCloseOnFullScreen: !0,
  hideCloseButton: N,
  shouldShowPrice: !0,
  upgradeToPremiumType: h,
  renderAnimation: () => h === d.p9.TIER_0 ? (0, s.jsx)(u.zC, {
    className: f.headerAnimation,
    currentStep: n,
    purchaseState: r,
    pause: M
  }) : h === d.p9.TIER_1 ? (0, s.jsx)(u.tK, {
    className: f.headerAnimation,
    currentStep: n,
    purchaseState: r,
    pause: M
  }) : (0, s.jsx)(u.Bk, {
    className: f.headerAnimation,
    currentStep: n,
    purchaseState: r,
    pause: M
  }),
  plan: null,
  isGift: !1,
  className: f.header,
  onClose: T,
  headerTheme: _,
  showTrialBadge: R,
  showDiscountBadge: I
})
  });
}