"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  a = n("245187"),
  l = n("10514"),
  s = n("599110"),
  u = n("719923"),
  o = n("635357"),
  c = n("642906"),
  d = n("628738"),
  f = n("49111");

function E(e) {
  let {
    initialStep: t,
    initialPlanId: n,
    guildId: E,
    setAnalyticsData: S,
    handleClose: I
  } = e, {
    blockedPayments: _,
    setStep: h,
    hasFetchedSubscriptions: m,
    hasFetchedSubscriptionPlans: C,
    currencyLoading: T,
    selectedSkuId: N,
    setSelectedSkuId: A,
    setSelectedPlanId: p,
    priceOptions: P,
    setSubscriptionMetadataRequest: v
  } = (0, c.usePaymentContext)(), {
    isGift: O
  } = (0, o.useGiftContext)(), [g, R] = r.useState(!m || !C || T);
  return (r.useEffect(() => {
    R(!m || !C || T)
  }, [T, C, m]), r.useEffect(() => {
    null != E && v({
      guild_id: E
    })
  }, [E, v]), r.useEffect(() => {
    p(n);
    let e = null != n ? l.default.get(n) : null;
    !g && !_ && (S(t => {
      let n = null != e ? (0, u.getPrice)(e.id, !1, O, P) : void 0,
        i = {
          ...t,
          subscription_plan_id: null == e ? void 0 : e.id,
          price: null == n ? void 0 : n.amount,
          regular_price: null == e ? void 0 : e.price,
          currency: P.currency
        };
      return s.default.track(f.AnalyticEvents.PAYMENT_FLOW_STARTED, i), i
    }), null != e && (A(null == e ? void 0 : e.skuId), h(t)))
  }, [_, n, O, g, P, N, S, p, A, h, t]), g) ? (0, i.jsx)(d.default, {}) : _ ? (0, i.jsx)(a.BlockedPaymentsContentModal, {
    onClose: I
  }) : null
}