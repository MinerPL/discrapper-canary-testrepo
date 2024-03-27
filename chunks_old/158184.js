"use strict";
s.r(t), s.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return m
  }
});
var n = s("37983"),
  l = s("884691"),
  a = s("627445"),
  i = s.n(a),
  r = s("65597"),
  u = s("206230"),
  o = s("853987"),
  d = s("677257"),
  c = s("923702"),
  S = s("658756"),
  f = s("408381"),
  E = s("635357"),
  I = s("642906"),
  _ = s("891865"),
  p = s("650484"),
  T = s("367767");

function C(e) {
  let {
    handleClose: t,
    confettiCanvas: s,
    analyticsLocations: l
  } = e, {
    skusById: a,
    selectedSkuId: u,
    application: d
  } = (0, I.usePaymentContext)(), c = (0, r.useStateFromStores)([o.default], () => o.default.getProduct(u));
  i(null != u, "Expected selectedSkuId"), i(null != d, "Expected application");
  let f = a[u];
  return (i(null != f, "Expected sku"), null == c) ? null : (0, n.jsxs)(p.PaymentPortalBody, {
    children: [(0, n.jsx)(T.default, {}), (0, n.jsx)(S.CollectiblesCollectedModalInner, {
      product: c,
      onClose: t,
      confettiCanvas: s,
      analyticsLocations: l
    })]
  })
}

function m(e) {
  let {
    isGift: t,
    giftCode: s,
    selectedGiftStyle: a,
    hasSentMessage: i,
    giftRecipient: S,
    giftMessageError: p,
    isSendingMessage: T
  } = (0, E.useGiftContext)(), m = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), A = l.useRef(null), {
    selectedSkuId: N
  } = (0, I.usePaymentContext)(), h = (0, r.useStateFromStores)([o.default], () => o.default.getProduct(N)), {
    confettiColors: P
  } = (0, d.default)(null == h ? void 0 : h.styles);
  return t ? (0, n.jsxs)("div", {
    ref: A,
    children: [(0, n.jsx)(_.default, {
      giftCode: s,
      onClose: e.handleClose,
      selectedGiftStyle: a,
      hasSentMessage: i,
      giftRecipient: S,
      giftMessageError: p,
      isSendingMessage: T
    }), !m && (0, n.jsx)(c.default, {
      confettiTarget: A.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, f.getConfettiSprites)(null == h ? void 0 : h.categorySkuId),
      colors: null == P ? void 0 : P.map(e => e.toHexString())
    })]
  }) : (0, n.jsx)(C, {
    ...e
  })
}