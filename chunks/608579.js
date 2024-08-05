t.d(n, {
  Z: function() {
return S;
  }
}), t(47120);
var a = t(735250),
  s = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(887024),
  o = t(100527),
  d = t(906732),
  u = t(987209),
  c = t(598),
  E = t(409813),
  f = t(791785),
  h = t(961830),
  m = t(742956),
  v = t(346790),
  C = t(49308),
  p = t(117652),
  x = t(126982),
  I = t(981631),
  T = t(302800),
  g = t(231338),
  N = t(76328);

function S(e) {
  let {
onClose: n,
onComplete: t,
onStepChange: i,
transitionState: S,
loadId: A,
skuId: _,
isGift: j = !1,
giftRecipient: Z,
giftMessage: P,
analyticsLocations: y,
returnRef: O
  } = e, {
analyticsLocations: M
  } = (0, d.ZP)([
...y,
o.Z.COLLECTIBLES_PAYMENT_MODAL
  ]), R = s.useRef(new r.qA()), [L, k] = s.useState(null), [b, D] = s.useState(!1), w = s.useMemo(() => (0, T.UY)(_), [_]), B = s.useCallback(() => {
D(!0), null == t || t();
  }, [t]), F = s.useCallback(e => {
D(!1), n(e);
  }, [n]), G = s.useMemo(() => [
h.WA,
p.Dd,
v.n,
...h.yp,
h.wo,
{
  key: E.h8.CONFIRM,
  renderStep: e => (0, a.jsx)(C.x, {
    ...e,
    confettiCanvas: L,
    analyticsLocations: M,
    hideConfetti: null != w
  }),
  options: {
    bodyClassName: N.modalOverrideBody,
    sliderBodyClassName: N.modalOverrideSliderBody
  }
}
  ], [
M,
L,
w
  ]);
  return (0, a.jsxs)(d.Gt, {
value: M,
children: [
  (0, a.jsx)(r.O_, {
    ref: k,
    className: N.confettiCanvas,
    environment: R.current
  }),
  null != w && (0, a.jsx)('img', {
    src: w.imageSrc,
    className: l()(N.customConfetti, {
      [N.hidden]: !b
    }),
    style: w.style,
    alt: '',
    'aria-hidden': !0
  }),
  (0, a.jsx)(c.PaymentContextProvider, {
    loadId: A,
    stepConfigs: G,
    applicationId: I.XAJ,
    skuIDs: [_],
    isGift: j,
    activeSubscription: null,
    purchaseType: g.GZ.ONE_TIME,
    children: (0, a.jsx)(u.KB, {
      isGift: j,
      giftRecipient: Z,
      giftMessage: P,
      children: (0, a.jsx)(f.PaymentModal, {
        onClose: F,
        onComplete: B,
        applicationId: I.XAJ,
        skuId: _,
        initialPlanId: null,
        analyticsLocations: M,
        transitionState: S,
        renderHeader: (e, n, t) => j ? (0, a.jsx)(m.Z, {
          step: t,
          onClose: () => n(!1)
        }) : (0, a.jsx)(x.Z, {
          step: t,
          onClose: () => n(!1)
        }),
        returnRef: O,
        onStepChange: i,
        hideShadow: !0
      })
    })
  })
]
  });
}