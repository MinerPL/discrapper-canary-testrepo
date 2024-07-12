var n = s(470079),
  a = s(442837),
  i = s(78839),
  r = s(231338);
t.Z = function(e) {
  let {
subscriptionFilter: t
  } = e, s = (0, a.e7)([i.ZP], () => i.ZP.getSubscriptions(!0)), o = n.useMemo(() => null == s ? [] : Object.values(s).filter(e => !!(e.type === r.NY.PREMIUM && (null == t || t(e)) && (0, i.sE)(e)) || !1), [
s,
t
  ]);
  return o.sort((e, t) => {
var s, n;
let a = null !== (s = e.paymentGateway) && void 0 !== s ? s : 0,
  i = null !== (n = t.paymentGateway) && void 0 !== n ? n : 0;
return a < i ? -1 : a > i ? 1 : 0;
  }), o;
};