t.d(n, {
  Z: function() {
return I;
  }
}), t(47120);
var i = t(735250),
  a = t(470079),
  r = t(120356),
  o = t.n(r),
  s = t(887024),
  l = t(100527),
  c = t(906732),
  d = t(987209),
  u = t(598),
  f = t(409813),
  p = t(791785),
  _ = t(961830),
  m = t(742956),
  b = t(346790),
  C = t(49308),
  g = t(117652),
  x = t(126982),
  v = t(981631),
  h = t(302800),
  E = t(231338),
  T = t(76328);

function I(e) {
  let {
onClose: n,
onComplete: t,
onStepChange: r,
transitionState: I,
loadId: S,
skuId: A,
isGift: N = !1,
giftRecipient: y,
giftMessage: P,
analyticsLocations: j,
returnRef: O
  } = e, {
analyticsLocations: B
  } = (0, c.ZP)([
...j,
l.Z.COLLECTIBLES_PAYMENT_MODAL
  ]), Z = a.useRef(new s.qA()), [k, w] = a.useState(null), [R, M] = a.useState(!1), L = a.useMemo(() => (0, h.UY)(A), [A]), D = a.useCallback(() => {
M(!0), null == t || t();
  }, [t]), G = a.useCallback(e => {
M(!1), n(e);
  }, [n]), H = a.useMemo(() => [
_.WA,
g.Dd,
b.n,
..._.yp,
_.wo,
{
  key: f.h8.CONFIRM,
  renderStep: e => (0, i.jsx)(C.x, {
    ...e,
    confettiCanvas: k,
    analyticsLocations: B,
    hideConfetti: null != L
  }),
  options: {
    bodyClassName: T.modalOverrideBody,
    sliderBodyClassName: T.modalOverrideSliderBody
  }
}
  ], [
B,
k,
L
  ]);
  return (0, i.jsxs)(c.Gt, {
value: B,
children: [
  (0, i.jsx)(s.O_, {
    ref: w,
    className: T.confettiCanvas,
    environment: Z.current
  }),
  null != L && (0, i.jsx)('img', {
    src: L.confettiAssetSrc,
    className: o()(T.customConfetti, {
      [T.hidden]: !R
    }),
    style: L.style,
    alt: '',
    'aria-hidden': !0
  }),
  (0, i.jsx)(u.PaymentContextProvider, {
    loadId: S,
    stepConfigs: H,
    applicationId: v.XAJ,
    skuIDs: [A],
    isGift: N,
    activeSubscription: null,
    purchaseType: E.GZ.ONE_TIME,
    children: (0, i.jsx)(d.KB, {
      isGift: N,
      giftRecipient: y,
      giftMessage: P,
      children: (0, i.jsx)(p.PaymentModal, {
        onClose: G,
        onComplete: D,
        applicationId: v.XAJ,
        skuId: A,
        initialPlanId: null,
        analyticsLocations: B,
        transitionState: I,
        renderHeader: (e, n, t) => N ? (0, i.jsx)(m.Z, {
          step: t,
          onClose: () => n(!1)
        }) : (0, i.jsx)(x.Z, {
          step: t,
          onClose: () => n(!1)
        }),
        returnRef: O,
        onStepChange: r,
        hideShadow: !0
      })
    })
  })
]
  });
}