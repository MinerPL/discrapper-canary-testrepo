n(47120);
var r,
    i,
    a,
    s,
    o = n(106351),
    l = n(442837),
    u = n(570140),
    c = n(38618);
let d = new Set(),
    _ = {};
function E() {
    d.clear();
}
function f(e) {
    d.delete(e.guild.id);
}
class h extends (r = l.ZP.Store) {
    getChannelStatus(e) {
        var t;
        if (null != e && null != e.guild_id) {
            if (e.type === o.d.GUILD_VOICE) return !d.has(e.guild_id) && (d.add(e.guild_id), c.Z.getSocket().requestChannelStatuses(e.guild_id)), null === (t = _[e.guild_id]) || void 0 === t ? void 0 : t[e.id];
        }
    }
}
(s = 'ChannelStatusStore'),
    (a = 'displayName') in (i = h)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new h(u.Z, {
        GUILD_CREATE: f,
        GUILD_DELETE: f,
        CONNECTION_RESUMED: E,
        CONNECTION_OPEN: E,
        VOICE_CHANNEL_STATUS_UPDATE: function (e) {
            null == _[e.guildId] && (_[e.guildId] = {}), (_[e.guildId][e.id] = e.status);
        },
        CHANNEL_STATUSES: function (e) {
            for (let { id: t, status: n } of ((_[e.guildId] = {}), e.channels)) _[e.guildId][t] = n;
        }
    }));
