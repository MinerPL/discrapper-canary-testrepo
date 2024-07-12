n.d(t, {
  Z: function() {
return o;
  }
}), n(47120);
var r = n(470079),
  i = n(742280),
  u = n(442837),
  l = n(351402);

function o() {
  let [e, t] = r.useState(!1), [n, o] = r.useState(!1), E = (0, u.e7)([l.Z], () => i.M.EEA_COUNTRIES.has(l.Z.ipCountryCodeWithFallback));
  return {
hasViewedPurchaseTerms: e,
setHasViewedPurchaseTerms: t,
showWithdrawalWaiver: E,
hasAcceptedWithdrawalWaiver: !E || n,
setHasAcceptedWithdrawalWaiver: o
  };
}