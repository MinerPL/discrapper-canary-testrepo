"use strict";
n.r(t), n.d(t, {
  OneTimePaymentPredicateStep: function() {
    return P
  }
}), n("222007");
var r = n("37983"),
  u = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("245187"),
  s = n("635357"),
  o = n("642906"),
  d = n("85336"),
  c = n("628738"),
  f = n("49111");

function P(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    blockedPayments: a,
    hasFetchedSkus: P,
    paymentSources: S,
    hasFetchedPaymentSources: p,
    application: h,
    skusById: x,
    selectedSkuId: C
  } = (0, o.usePaymentContext)(), {
    isGift: m
  } = (0, s.useGiftContext)(), [v, T] = u.useState(!0);
  return (u.useEffect(() => {
    let e = null != h;
    P && p && e && T(!1)
  }, [P, p, h]), u.useEffect(() => {
    if (v || a) return;
    i(null != C, "Expected selectedSkuId");
    let e = x[C];
    if (m && (null == e ? void 0 : e.productLine) === f.SKUProductLines.COLLECTIBLES) {
      t(d.Step.GIFT_CUSTOMIZATION);
      return
    }
    if (0 === Object.keys(S).length) {
      t(d.Step.ADD_PAYMENT_STEPS);
      return
    }
    t(d.Step.REVIEW)
  }, [v, a, t, S, m, x, C]), v) ? (0, r.jsx)(c.default, {}) : a ? (0, r.jsx)(l.BlockedPaymentsContentModal, {
    onClose: n
  }) : null
}