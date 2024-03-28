"use strict";
n.r(t), n("653041");
var a, s = n("442837"),
  l = n("570140"),
  i = n("381496"),
  r = n("430824");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {},
  d = () => {
    u = {
      guildAffinitiesByGuildId: {},
      guildAffinities: [],
      lastFetched: 0
    }
  };
d();
class c extends(a = s.default.PersistedStore) {
  initialize(e) {
    null != e && (u = e), this.waitFor(r.default)
  }
  getState() {
    return u
  }
  getGuildAffinity(e) {
    return u.guildAffinitiesByGuildId[e]
  }
  get affinities() {
    return u.guildAffinities
  }
  get hasRequestResolved() {
    return 0 !== u.lastFetched
  }
}
o(c, "displayName", "GuildAffinitiesStore"), o(c, "persistKey", "GuildAffinitiesStore"), t.default = new c(l.default, {
  CONNECTION_OPEN: function() {
    return Date.now() - u.lastFetched > 864e5 && (0, i.fetchGuildAffinities)(), !1
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function(e) {
    let {
      guildAffinities: t
    } = e;
    u.guildAffinities = [], u.guildAffinitiesByGuildId = {}, u.lastFetched = Date.now(), t.forEach((e, t) => {
      let {
        affinity: n,
        guild_id: a
      } = e, s = {
        score: n,
        guildId: a,
        index: t
      };
      u.guildAffinitiesByGuildId[a] = s, u.guildAffinities.push(s)
    })
  },
  LOGOUT: function() {
    d()
  }
})