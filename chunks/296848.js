a.d(n, {
  AT: function() {
return y;
  },
  GY: function() {
return b;
  },
  R4: function() {
return _;
  },
  oE: function() {
return g;
  },
  yb: function() {
return f;
  }
}), a(47120), a(653041), a(470079);
var t = a(512722),
  o = a.n(t),
  r = a(913527),
  i = a.n(r),
  c = a(99945);
a(442837);
var s = a(821849),
  l = a(509545),
  d = a(74538),
  u = a(981631),
  p = a(474936);

function f(e) {
  return e.items.map(e => {
let n = l.Z.get(e.planId);
return o()(null != n, 'Unable to fetch plan'), n;
  }).map(e => e.skuId);
}

function _(e, n, a) {
  let t = e.getCurrentSubscriptionPlanIdForGroup(a);
  return e.type === u.NYc.PREMIUM && null == t || (o()(null != t, 'Current subscription has no plan in group'), o()(!(t === p.Xh.PREMIUM_YEAR_TIER_1 && n === p.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), a.indexOf(t) < a.indexOf(n));
}

function b(e, n, a) {
  return !_(e, n, a);
}

function g(e, n) {
  let a = l.Z.get(e);
  if (null == a) {
let a = p.GP[e];
o()(null != a, 'Missing hardcoded subscriptionPlan: '.concat(e));
let t = (0, d.Wz)(a.skuId);
!l.Z.isFetchingForSKU(t) && (0, s.GZ)(t, n);
  }
  return a;
}

function y(e) {
  let n = Object.keys(c.T).filter(e => isNaN(Number(e)));
  if (e.status !== u.O0b.PAUSED)
return {
  durations: n,
  currentDaysPaused: 0
};
  if (null == e.pauseEndsAt)
return {
  durations: [],
  currentDaysPaused: 0
};
  {
let a = i()(e.currentPeriodStart),
  t = Math.round(i()(e.pauseEndsAt).diff(a, 'days', !0)),
  o = [];
for (let e of n)
  c.T[e] > t && o.push(e);
return {
  durations: o,
  currentDaysPaused: t
};
  }
}