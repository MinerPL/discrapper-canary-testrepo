n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(442837),
  i = n(314897),
  a = n(317381),
  o = n(613611);

function s(e) {
  let t = i.default.getId(),
{
  userActivity: n,
  inActivity: s
} = (0, r.cj)([a.ZP], () => {
  let n = a.ZP.getSelfEmbeddedActivityForChannel(e),
    r = a.ZP.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === (null == n ? void 0 : n.applicationId)),
    i = !1;
  if ((null == r ? void 0 : r.participants) != null) {
    var s;
    i = (null == r ? void 0 : null === (s = r.participants) || void 0 === s ? void 0 : s.find(e => (0, o.J)(e))) != null;
  } else
    (null == r ? void 0 : r.userIds) != null && (i = r.userIds.has(t));
  return {
    userActivity: n,
    inActivity: null != i && i
  };
});
  return {
userActivity: n,
inActivity: s
  };
}