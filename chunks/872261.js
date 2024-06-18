"use strict";
n.d(t, {
  J: function() {
    return u
  }
}), n(47120);
var i = n(592125),
  r = n(771845),
  s = n(553245),
  o = n(814074),
  a = n(989263),
  l = n(981631);

function u(e, t) {
  if (e.totalLength >= t) return e;
  let n = new s.b(e.primaryCapacity, e.extendedCapacity),
    u = t - e.totalLength;
  for (let t of r.ZP.getGuildFolders())
    for (let r of t.guildIds)
      for (let t of Object.values(i.Z.getMutableBasicGuildChannelsForGuild(r)))
        if (function(e) {
            return e.type === l.d4z.DM || e.type === l.d4z.GROUP_DM || e.type === l.d4z.GUILD_TEXT
          }(t) && (0, a.v)(t) && !(0, o.Hr)(t) && function(e, t, n) {
            !n.hasExtended(t.id) && n.put(t.id, {
              guildId: e,
              channelId: t.id,
              channelType: t.type,
              fallback: !0
            })
          }(r, t, n), n.totalLength >= u) return _(n, e);
  return _(n, e)
}

function _(e, t) {
  for (let [n, i] of t.allEntries()) e.put(n, i);
  return e
}