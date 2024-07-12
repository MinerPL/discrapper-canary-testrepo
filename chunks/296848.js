n.d(t, {
  AT: function() {
return f;
  },
  GY: function() {
return g;
  },
  R4: function() {
return E;
  },
  oE: function() {
return p;
  },
  yb: function() {
return _;
  }
}), n(47120), n(653041), n(470079);
var s = n(512722),
  r = n.n(s),
  i = n(913527),
  a = n.n(i),
  l = n(99945);
n(442837);
var o = n(821849),
  c = n(509545),
  u = n(74538),
  d = n(981631),
  h = n(474936);

function _(e) {
  return e.items.map(e => {
let t = c.Z.get(e.planId);
return r()(null != t, 'Unable to fetch plan'), t;
  }).map(e => e.skuId);
}

function E(e, t, n) {
  let s = e.getCurrentSubscriptionPlanIdForGroup(n);
  return e.type === d.NYc.PREMIUM && null == s || (r()(null != s, 'Current subscription has no plan in group'), r()(!(s === h.Xh.PREMIUM_YEAR_TIER_1 && t === h.Xh.PREMIUM_MONTH_TIER_2), 'Unexpected plan switch'), n.indexOf(s) < n.indexOf(t));
}

function g(e, t, n) {
  return !E(e, t, n);
}

function p(e, t) {
  let n = c.Z.get(e);
  if (null == n) {
let n = h.GP[e];
r()(null != n, 'Missing hardcoded subscriptionPlan: '.concat(e));
let s = (0, u.Wz)(n.skuId);
!c.Z.isFetchingForSKU(s) && (0, o.GZ)(s, t);
  }
  return n;
}

function f(e) {
  let t = Object.keys(l.T).filter(e => isNaN(Number(e)));
  if (e.status !== d.O0b.PAUSED)
return {
  durations: t,
  currentDaysPaused: 0
};
  if (null == e.pauseEndsAt)
return {
  durations: [],
  currentDaysPaused: 0
};
  {
let n = a()(e.currentPeriodStart),
  s = Math.round(a()(e.pauseEndsAt).diff(n, 'days', !0)),
  r = [];
for (let e of t)
  l.T[e] > s && r.push(e);
return {
  durations: r,
  currentDaysPaused: s
};
  }
}