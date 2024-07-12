n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var r = n(470079),
  i = n(442837),
  u = n(509545);

function l() {
  let [e, t] = r.useState(void 0), [n, l] = r.useState(void 0);
  return {
selectedSkuId: e,
selectedPlan: (0, i.e7)([u.Z], () => null != n ? u.Z.get(n) : null),
setSelectedSkuId: t,
setSelectedPlanId: l
  };
}