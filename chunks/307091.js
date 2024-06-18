"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(307643),
  r = n(973616),
  s = n(592125),
  o = n(566620),
  a = n(969345);
async function l(e, t) {
  var n;
  let l = null === (n = s.Z.getChannel(t)) || void 0 === n ? void 0 : n.guild_id,
    {
      activityConfigs: u,
      applications: _
    } = await (0, o.w1)({
      guildId: l
    }),
    d = (0, a.Z)({
      applicationId: e,
      activityConfigs: u,
      applications: _
    });
  if ((null == d ? void 0 : d.application) != null) return null == d ? void 0 : d.application;
  {
    let t = await (0, i.UM)(e);
    return r.Z.createFromServer(t)
  }
}