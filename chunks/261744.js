s.d(t, {
  Z: function() {
return r;
  }
}), s(47120);
var n = s(442837),
  a = s(687476),
  i = s(293810);

function r() {
  return (0, n.e7)([a.Z], () => function() {
let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [a.Z], t = e.getGuildIdsWithPurchasableRoles(), s = !1;
return (t.forEach(t => {
  e.getUserSubscriptionRoles(t).size > 0 && (s = !0);
}), s) ? i.PY.SUBSCRIBED : 0 === t.size ? i.PY.NONE : i.PY.IN_SUBSCRIPTION_SERVER;
  }([a.Z]));
}