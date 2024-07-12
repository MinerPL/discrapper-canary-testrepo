t.d(n, {
  $g: function() {
return a;
  },
  Kp: function() {
return o;
  },
  nA: function() {
return s;
  }
});
var i = t(74538),
  r = t(474936);

function o(e) {
  let {
isTrial: n,
isGift: t,
selectedSkuId: i,
startedPaymentFlowWithPaymentSources: o
  } = e;
  return !n && !t && null != i && r.YQ.includes(i) && o;
}

function a(e, n, t) {
  let i = !1;
  return e && null != n && null == n.invoiceItems.find(e => e.subscriptionPlanId === t.id) && (i = !0), i;
}

function s(e, n, t) {
  let o = null != n ? (0, i.Af)(n) : null,
a = r.mn[e],
s = null != t ? t : a;
  return null != o ? s === o.planId && s === r.IW[e] ? s = r.mn[e] : s === o.planId && s === r.mn[e] ? s = r.IW[e] : (o.planId === r.Xh.PREMIUM_YEAR_TIER_0 || o.planId === r.Xh.PREMIUM_YEAR_TIER_1) && s === r.Xh.PREMIUM_MONTH_TIER_2 && (s = r.Xh.PREMIUM_YEAR_TIER_2) : s === r.Xh.PREMIUM_YEAR_TIER_1 && (s = r.Xh.PREMIUM_MONTH_TIER_1), s;
}