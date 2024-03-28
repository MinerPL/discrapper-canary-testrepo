"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("47120");
var a = n("735250"),
  r = n("470079"),
  s = n("89057"),
  l = n("509545"),
  i = n("626135"),
  u = n("74538"),
  o = n("987209"),
  d = n("598"),
  c = n("456251"),
  f = n("981631");

function _(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: _,
    setAnalyticsData: I,
    handleClose: E
  } = e, {
    blockedPayments: S,
    setStep: P,
    hasFetchedSubscriptions: A,
    hasFetchedSubscriptionPlans: C,
    currencyLoading: N,
    selectedSkuId: T,
    setSelectedSkuId: m,
    setSelectedPlanId: O,
    priceOptions: p,
    setSubscriptionMetadataRequest: R
  } = (0, d.usePaymentContext)(), {
    isGift: L
  } = (0, o.useGiftContext)(), [h, M] = r.useState(!A || !C || N);
  return (r.useEffect(() => {
    M(!A || !C || N)
  }, [N, C, A]), r.useEffect(() => {
    null != _ && R({
      guild_id: _
    })
  }, [_, R]), r.useEffect(() => {
    O(n);
    let e = null != n ? l.default.get(n) : null;
    !h && !S && (I(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, L, p) : void 0,
        a = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: p.currency
        };
      return i.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, a), a
    }), null != e && (m(null == e ? void 0 : e.skuId), P(t)))
  }, [S, n, L, h, p, T, I, O, m, P, t]), h) ? (0, a.jsx)(c.default, {}) : S ? (0, a.jsx)(s.BlockedPaymentsContentModal, {
    onClose: E
  }) : null
}