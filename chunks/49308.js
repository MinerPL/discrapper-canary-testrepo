"use strict";
s.r(t), s.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return m
  }
});
var l = s("735250"),
  n = s("470079"),
  a = s("512722"),
  i = s.n(a),
  r = s("399606"),
  u = s("607070"),
  d = s("597688"),
  o = s("624377"),
  c = s("530618"),
  f = s("331042"),
  S = s("372654"),
  E = s("987209"),
  I = s("563132"),
  C = s("179118"),
  _ = s("614277"),
  T = s("698708");

function p(e) {
  let {
    handleClose: t,
    confettiCanvas: s,
    hideConfetti: n = !1,
    analyticsLocations: a
  } = e, {
    skusById: u,
    selectedSkuId: o,
    application: c
  } = (0, I.usePaymentContext)(), S = (0, r.useStateFromStores)([d.default], () => d.default.getProduct(o));
  i()(null != o, "Expected selectedSkuId"), i()(null != c, "Expected application");
  let E = u[o];
  return (i()(null != E, "Expected sku"), null == S) ? null : (0, l.jsxs)(_.PaymentPortalBody, {
    children: [(0, l.jsx)(T.default, {}), (0, l.jsx)(f.CollectiblesCollectedModalInner, {
      product: S,
      onClose: t,
      confettiCanvas: s,
      analyticsLocations: a,
      hideConfetti: n
    })]
  })
}

function m(e) {
  let {
    isGift: t,
    giftCode: s,
    selectedGiftStyle: a,
    hasSentMessage: i,
    giftRecipient: f,
    giftMessageError: _,
    isSendingMessage: T
  } = (0, E.useGiftContext)(), m = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), N = n.useRef(null), {
    selectedSkuId: A
  } = (0, I.usePaymentContext)(), h = (0, r.useStateFromStores)([d.default], () => d.default.getProduct(A)), {
    confettiColors: g
  } = (0, o.default)(null == h ? void 0 : h.styles);
  return t ? (0, l.jsxs)("div", {
    ref: N,
    children: [(0, l.jsx)(C.default, {
      giftCode: s,
      onClose: e.handleClose,
      selectedGiftStyle: a,
      hasSentMessage: i,
      giftRecipient: f,
      giftMessageError: _,
      isSendingMessage: T
    }), !e.hideConfetti && !m && (0, l.jsx)(c.default, {
      confettiTarget: N.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, S.getConfettiSprites)(null == h ? void 0 : h.categorySkuId),
      colors: null == g ? void 0 : g.map(e => e.toHexString())
    })]
  }) : (0, l.jsx)(p, {
    ...e
  })
}