n.d(t, {
  Br: function() {
return i;
  },
  Uj: function() {
return r;
  },
  j0: function() {
return a;
  }
}), n(47120);
var s = n(198139);
let a = e => {
  var t, n;
  let s = Object.values(null !== (n = null == e ? void 0 : e.ppgs) && void 0 !== n ? n : {})[0],
a = null == s ? void 0 : s.status,
i = null == s ? void 0 : null === (t = s.payout) || void 0 === t ? void 0 : t.status,
r = null == s ? void 0 : s.deferral_reasons;
  return {
ppgStatus: a,
payoutStatus: i,
ppgDeferralReasons: r,
periodEndDate: null == s ? void 0 : s.period_ending_at
  };
};

function i(e) {
  let t, n;
  let {
ppgStatus: i
  } = a(e[0]);
  return i === s.x_.OPEN ? [t, ...n] = e : n = e, {
currentPeriod: t,
previousPeriods: n
  };
}

function r(e, t) {
  let n, s, a, i;
  return null != e && (n = e.amount, a = e.paymentsCount, null != t && (s = e.amount / t.amount - 1, i = e.paymentsCount - t.paymentsCount)), {
revenue: n,
revenuePctChange: s,
paymentsCount: a,
paymentsCountChange: i
  };
}