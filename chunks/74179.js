n.d(t, {
  Z: function() {
return s;
  }
}), n(47120);
var r = n(470079),
  i = n(442837),
  a = n(355467),
  o = n(853872);

function s(e) {
  let {
isGift: t,
activeSubscription: n
  } = e, {
defaultPaymentSourceId: s,
paymentSources: l,
hasFetchedPaymentSources: u
  } = (0, i.cj)([o.Z], () => ({
defaultPaymentSourceId: o.Z.defaultPaymentSourceId,
paymentSources: o.Z.paymentSources,
hasFetchedPaymentSources: o.Z.hasFetchedPaymentSources
  })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, _] = r.useState(() => c(t, n, s));
  return r.useEffect(() => {
u ? _(c(t, n, s)) : (0, a.tZ)();
  }, [
u,
t,
n,
s
  ]), {
paymentSources: l,
hasPaymentSources: Object.keys(l).length > 0,
paymentSourceId: d,
setPaymentSourceId: _,
hasFetchedPaymentSources: u,
defaultPaymentSource: null != s ? l[s] : null
  };
}