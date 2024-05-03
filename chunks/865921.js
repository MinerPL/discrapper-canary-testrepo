"use strict";
s.r(t), s.d(t, {
  OneTimePaymentPredicateStep: function() {
    return S
  }
}), s("47120");
var l = s("735250"),
  n = s("470079"),
  a = s("512722"),
  i = s.n(a),
  r = s("89057"),
  u = s("987209"),
  d = s("563132"),
  o = s("409813"),
  c = s("456251"),
  f = s("981631");

function S(e) {
  let {
    handleStepChange: t,
    handleClose: s
  } = e, {
    blockedPayments: a,
    hasFetchedSkus: S,
    paymentSources: E,
    hasFetchedPaymentSources: I,
    application: C,
    skusById: _,
    selectedSkuId: T
  } = (0, d.usePaymentContext)(), {
    isGift: p
  } = (0, u.useGiftContext)(), [m, N] = n.useState(!0);
  return (n.useEffect(() => {
    let e = null != C;
    S && I && e && N(!1)
  }, [S, I, C]), n.useEffect(() => {
    if (m || a) return;
    i()(null != T, "Expected selectedSkuId");
    let e = _[T];
    if (p && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(o.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(E).length) {
      t(o.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(o.Step.REVIEW)
  }, [m, a, t, E, p, _, T]), m) ? (0, l.jsx)(c.default, {}) : a ? (0, l.jsx)(r.BlockedPaymentsContentModal, {
    onClose: s
  }) : null
}