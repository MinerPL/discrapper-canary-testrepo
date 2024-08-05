n.d(t, {
  T: function() {
return d;
  }
});
var l = n(526120),
  r = n(563534),
  i = n(734893),
  u = n(931261);
async function d(e, t) {
  if (null == e || !(0, u.s)(e))
return;
  let n = r.Z.getSettings(e);
  return (n === r.P && (await (0, l.cP)(e), n = r.Z.getSettings(e)), n === r.P || null == n) ? void 0 : null != n.newMemberActions && null != n.newMemberActions.find(e => e.channelId === t) ? i.j.TODO : null != n.resourceChannels && null != n.resourceChannels.find(e => e.channelId === t) ? i.j.RESOURCE : void 0;
}