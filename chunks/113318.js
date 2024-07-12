n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(442837),
  a = n(201895),
  s = n(557135),
  r = n(703656),
  l = n(592125),
  o = n(979651),
  c = n(66999),
  d = n(981631);

function u(e, t) {
  let n = (0, i.e7)([l.Z], () => l.Z.getChannel(t)),
{
  needSubscriptionToAccess: u
} = (0, c.Z)(null == n ? void 0 : n.id);
  if (null == n || u)
return null;
  let _ = n.isGuildVocal(),
E = (0, a.ZP)({
  channel: n
});
  return {
navigateToChannel: () => {
  _ ? s.Z.handleVoiceConnect({
    channel: n,
    connected: o.Z.isInChannel(n.id),
    needSubscriptionToAccess: !1,
    routeDirectlyToChannel: !0
  }) : (0, r.uL)(d.Z5c.CHANNEL(e, n.id));
},
ariaLabel: E
  };
}