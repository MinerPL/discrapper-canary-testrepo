var r, i, a, s, o = n(442837),
  l = n(570140);
let u = 0,
  c = {};
class d extends(s = o.ZP.Store) {
  getGuild(e) {
let t = c[e];
if (null != t) {
  if (!('type' in t))
    return t;
}
  }
  getGuildOrStatus(e) {
return c[e];
  }
  getVersion() {
return u;
  }
}
a = 'BasicGuildStore', (i = 'displayName') in(r = d) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new d(l.Z, {
  BASIC_GUILD_FETCH: function(e) {
return c[e.guildId] = {
  type: 'loading'
}, !1;
  },
  BASIC_GUILD_FETCH_SUCCESS: function(e) {
c[e.guildId] = e.guildInfo, u++;
  },
  BASIC_GUILD_FETCH_FAILURE: function(e) {
return c[e.guildId] = {
  type: 'failed'
}, !1;
  }
});