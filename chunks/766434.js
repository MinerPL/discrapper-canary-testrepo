"use strict";
t.d(s, {
  Br: function() {
    return l
  },
  Uj: function() {
    return a
  },
  j0: function() {
    return i
  }
}), t(47120);
var n = t(198139);
let i = e => {
  var s, t;
  let n = Object.values(null !== (t = null == e ? void 0 : e.ppgs) && void 0 !== t ? t : {})[0],
    i = null == n ? void 0 : n.status,
    l = null == n ? void 0 : null === (s = n.payout) || void 0 === s ? void 0 : s.status,
    a = null == n ? void 0 : n.deferral_reasons;
  return {
    ppgStatus: i,
    payoutStatus: l,
    ppgDeferralReasons: a,
    periodEndDate: null == n ? void 0 : n.period_ending_at
  }
};

function l(e) {
  let s, t;
  let {
    ppgStatus: l
  } = i(e[0]);
  return l === n.x_.OPEN ? [s, ...t] = e : t = e, {
    currentPeriod: s,
    previousPeriods: t
  }
}

function a(e, s) {
  let t, n, i, l;
  return null != e && (t = e.amount, i = e.paymentsCount, null != s && (n = e.amount / s.amount - 1, l = e.paymentsCount - s.paymentsCount)), {
    revenue: t,
    revenuePctChange: n,
    paymentsCount: i,
    paymentsCountChange: l
  }
}