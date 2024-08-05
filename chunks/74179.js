n.d(t, {
  Z: function() {
return o;
  }
}), n(47120);
var r = n(470079),
  i = n(442837),
  a = n(355467),
  s = n(853872);

function o(e) {
  let {
isGift: t,
activeSubscription: n
  } = e, {
defaultPaymentSourceId: o,
paymentSources: l,
hasFetchedPaymentSources: u
  } = (0, i.cj)([s.Z], () => ({
defaultPaymentSourceId: s.Z.defaultPaymentSourceId,
paymentSources: s.Z.paymentSources,
hasFetchedPaymentSources: s.Z.hasFetchedPaymentSources
  })), c = (e, t, n) => e || (null == t ? void 0 : t.paymentSourceId) == null ? n : t.paymentSourceId, [d, _] = r.useState(() => c(t, n, o));
  return r.useEffect(() => {
u ? _(c(t, n, o)) : (0, a.tZ)();
  }, [
u,
t,
n,
o
  ]), {
paymentSources: l,
hasPaymentSources: Object.keys(l).length > 0,
paymentSourceId: d,
setPaymentSourceId: _,
hasFetchedPaymentSources: u,
defaultPaymentSource: null != o ? l[o] : null
  };
}