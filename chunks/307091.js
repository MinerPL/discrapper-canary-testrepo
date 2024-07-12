n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(307643),
  i = n(973616),
  a = n(592125),
  o = n(566620),
  s = n(969345);
async function l(e, t) {
  var n;
  let l = null === (n = a.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id,
{
  activityConfigs: u,
  applications: c
} = await (0, o.w1)({
  guildId: l
}),
d = (0, s.Z)({
  applicationId: e,
  activityConfigs: u,
  applications: c
});
  if ((null == d ? void 0 : d.application) != null)
return null == d ? void 0 : d.application;
  {
let t = await (0, r.UM)(e);
return i.Z.createFromServer(t);
  }
}