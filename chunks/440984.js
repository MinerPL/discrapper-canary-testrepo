s.d(t, {
  D: function() {
return A;
  }
}), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(442837),
  r = s(780384),
  o = s(481060),
  l = s(410030),
  c = s(607070),
  d = s(530618),
  _ = s(74538),
  E = s(937615),
  u = s(230916),
  T = s(798769),
  I = s(474936),
  S = s(689938),
  N = s(345555),
  C = s(982404),
  m = s(299156);

function A(e) {
  let {
premiumSubscription: t,
premiumType: s,
onClose: A,
confettiCanvas: g,
userWasChurned: h = !1,
userDiscountOffer: O
  } = e, p = (0, l.ZP)(), R = (0, r.wj)(p) ? C : m, x = a.useRef(null), [M, f] = a.useState(!1), D = (0, u._)(t, I.Xh.PREMIUM_MONTH_TIER_2, O), P = (0, _.aS)(I.Xh.PREMIUM_MONTH_TIER_2), L = (0, E.T4)(P.amount, P.currency), b = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
  if (a.useEffect(() => {
  null != x.current && null != D && f(!0);
}, [
  x,
  M,
  D
]), null == O || null == D)
return null;
  let Z = S.Z.Messages.PREMIUM_TIER_SUBSCRIPTION_DESCRIPTION_AFTER_REDEMPTION_WITH_ACTIVE_SUB.format({
  numMonths: O.discount.user_usage_limit,
  discountedPrice: D,
  regularPrice: L
}),
v = (0, n.jsx)('div', {
  className: N.whatYouLoseButtonContainer,
  children: (0, n.jsx)(o.Button, {
    color: o.Button.Colors.BRAND,
    onClick: A,
    children: S.Z.Messages.PREMIUM_DISCOUNT_SWEET
  })
});
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(T.Z, {
    premiumType: s,
    className: N.cancellationHeader,
    onClose: A
  }),
  (0, n.jsx)('div', {
    ref: x,
    children: (0, n.jsx)(o.ModalContent, {
      className: N.body,
      children: null != D ? (0, n.jsxs)(n.Fragment, {
        children: [
          (0, n.jsxs)('div', {
            className: N.discountAppliedBody,
            children: [
              (0, n.jsx)('img', {
                alt: '',
                src: R,
                className: N.nitroIcon
              }),
              (0, n.jsx)(o.Heading, {
                variant: 'heading-xl/bold',
                children: h ? S.Z.Messages.PREMIUM_TRIAL_TUTORIAL_WELCOME_BACK : S.Z.Messages.PREMIUM_TIER_CARD_DISCOUNT_APPLIED_PUNCTUATED
              })
            ]
          }),
          (0, n.jsx)('div', {
            className: N.bodyString,
            children: Z
          }),
          v
        ]
      }) : (0, n.jsx)(o.Spinner, {})
    })
  }),
  !b && M && (0, n.jsx)(d.Z, {
    confettiTarget: x.current,
    confettiCanvas: g,
    confettiVelocityMultiplier: 0.75
  })
]
  });
}