"use strict";
n(47120);
var i, r, s, o, a = n(106351),
  l = n(442837),
  u = n(570140),
  _ = n(38618);
let d = new Set,
  c = {};

function E() {
  d.clear()
}

function I(e) {
  d.delete(e.guild.id)
}
class T extends(i = l.ZP.Store) {
  getChannelStatus(e) {
    var t;
    if (null != e && null != e.guild_id) {
      if (e.type === a.d.GUILD_VOICE) return !d.has(e.guild_id) && (d.add(e.guild_id), _.Z.getSocket().requestChannelStatuses(e.guild_id)), null === (t = c[e.guild_id]) || void 0 === t ? void 0 : t[e.id]
    }
  }
}
o = "ChannelStatusStore", (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new T(u.Z, {
  GUILD_CREATE: I,
  GUILD_DELETE: I,
  CONNECTION_RESUMED: E,
  CONNECTION_OPEN: E,
  VOICE_CHANNEL_STATUS_UPDATE: function(e) {
    null == c[e.guildId] && (c[e.guildId] = {}), c[e.guildId][e.id] = e.status
  },
  CHANNEL_STATUSES: function(e) {
    for (let {
        id: t,
        status: n
      }
      of(c[e.guildId] = {}, e.channels)) c[e.guildId][t] = n
  }
})