t.d(n, {
  Z: function() {
return u;
  }
}), t(47120);
var i = t(735250),
  r = t(470079),
  o = t(89057),
  a = t(509545),
  s = t(74538),
  l = t(987209),
  c = t(598),
  d = t(456251);

function u(e) {
  let {
initialStep: n,
initialPlanId: t,
guildId: u,
setAnalyticsData: _,
handleClose: p
  } = e, {
blockedPayments: f,
setStep: I,
hasFetchedSubscriptions: m,
hasFetchedSubscriptionPlans: C,
currencyLoading: S,
selectedSkuId: T,
setSelectedSkuId: b,
setSelectedPlanId: h,
priceOptions: g,
setSubscriptionMetadataRequest: E
  } = (0, c.usePaymentContext)(), {
isGift: N
  } = (0, l.wD)(), [P, O] = r.useState(!m || !C || S);
  return (r.useEffect(() => {
O(!m || !C || S);
  }, [
S,
C,
m
  ]), r.useEffect(() => {
null != u && E({
  guild_id: u
});
  }, [
u,
E
  ]), r.useEffect(() => {
h(t);
let e = null != t ? a.Z.get(t) : null;
if (!P && !f)
  _(n => {
    let t = null != e ? (0, s.aS)(e.id, !1, N, g) : void 0;
    return {
      ...n,
      subscription_plan_id: null == e ? void 0 : e.id,
      price: null == t ? void 0 : t.amount,
      regular_price: null == e ? void 0 : e.price,
      currency: g.currency
    };
  }), null != e && (b(null == e ? void 0 : e.skuId), I(n));
  }, [
f,
t,
N,
P,
g,
T,
_,
h,
b,
I,
n
  ]), P) ? (0, i.jsx)(d.Z, {}) : f ? (0, i.jsx)(o.Vq, {
onClose: p
  }) : null;
}