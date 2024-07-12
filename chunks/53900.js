a.d(n, {
  Z: function() {
return i;
  }
});
var t = a(442837),
  o = a(853872),
  r = a(78839);

function i() {
  let e = (0, t.e7)([r.ZP], () => r.ZP.getPremiumTypeSubscription());
  return (0, t.e7)([o.Z], () => {
var n;
return (null == e ? void 0 : e.paymentSourceId) != null ? null === (n = o.Z.getPaymentSource(e.paymentSourceId)) || void 0 === n ? void 0 : n.country : null;
  });
}