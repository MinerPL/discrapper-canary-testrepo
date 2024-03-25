"use strict";
s.r(t), s.d(t, {
  getStatusForPeriod: function() {
    return l
  },
  splitCurrentPeriod: function() {
    return n
  },
  calculateMetrics: function() {
    return i
  }
}), s("222007");
var a = s("397056");
let l = e => {
  var t, s;
  let a = Object.values(null !== (s = null == e ? void 0 : e.ppgs) && void 0 !== s ? s : {})[0],
    l = null == a ? void 0 : a.status,
    n = null == a ? void 0 : null === (t = a.payout) || void 0 === t ? void 0 : t.status,
    i = null == a ? void 0 : a.deferral_reasons,
    r = null == a ? void 0 : a.period_ending_at;
  return {
    ppgStatus: l,
    payoutStatus: n,
    ppgDeferralReasons: i,
    periodEndDate: r
  }
};

function n(e) {
  let t, s;
  let {
    ppgStatus: n
  } = l(e[0]);
  return n === a.PaymentPayoutGroupStatuses.OPEN ? [t, ...s] = e : s = e, {
    currentPeriod: t,
    previousPeriods: s
  }
}

function i(e, t) {
  let s, a, l, n;
  return null != e && (s = e.amount, l = e.paymentsCount, null != t && (a = e.amount / t.amount - 1, n = e.paymentsCount - t.paymentsCount)), {
    revenue: s,
    revenuePctChange: a,
    paymentsCount: l,
    paymentsCountChange: n
  }
}