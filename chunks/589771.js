"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("89057"),
  l = n("509545"),
  i = n("74538"),
  u = n("987209"),
  o = n("598"),
  d = n("456251");

function c(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: c,
    setAnalyticsData: f,
    handleClose: _
  } = e, {
    blockedPayments: P,
    setStep: S,
    hasFetchedSubscriptions: A,
    hasFetchedSubscriptionPlans: E,
    currencyLoading: p,
    selectedSkuId: C,
    setSelectedSkuId: I,
    setSelectedPlanId: m,
    priceOptions: T,
    setSubscriptionMetadataRequest: N
  } = (0, o.usePaymentContext)(), {
    isGift: O
  } = (0, u.useGiftContext)(), [y, R] = r.useState(!A || !E || p);
  return (r.useEffect(() => {
    R(!A || !E || p)
  }, [p, E, A]), r.useEffect(() => {
    null != c && N({
      guild_id: c
    })
  }, [c, N]), r.useEffect(() => {
    m(n);
    let e = null != n ? l.default.get(n) : null;
    !y && !P && (f(t => {
      let n = null != e ? (0, i.getPrice)(e.id, !1, O, T) : void 0;
      return {
        ...t,
        subscription_plan_id: null == e ? void 0 : e.id,
        price: null == n ? void 0 : n.amount,
        regular_price: null == e ? void 0 : e.price,
        currency: T.currency
      }
    }), null != e && (I(null == e ? void 0 : e.skuId), S(t)))
  }, [P, n, O, y, T, C, f, m, I, S, t]), y) ? (0, a.jsx)(d.default, {}) : P ? (0, a.jsx)(s.BlockedPaymentsContentModal, {
    onClose: _
  }) : null
}