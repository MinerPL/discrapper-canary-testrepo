"use strict";
a.r(l);
var s, t, i, n, d, u, c = a("442837"),
  r = a("570140"),
  o = a("314897"),
  h = a("900849");
(s = d || (d = {})).UNSET = "unset", s.FETCHING = "fetching", s.FAILED = "failed", s.SUCCEEDED = "succeeded";
let m = {
  guilds: {}
};
class f extends(u = c.default.Store) {
  initialize() {
    this.waitFor(o.default)
  }
  isFetchingGuild(e) {
    let l = m.guilds[e];
    return null != l && "fetching" === l.fetchState
  }
  getGuild(e) {
    let l = m.guilds[e];
    return null != l ? l.guild : null
  }
  hasFetchFailed(e) {
    let l = m.guilds[e];
    return null != l && "failed" === l.fetchState
  }
}
n = "GuildPopoutStore", (i = "displayName") in(t = f) ? Object.defineProperty(t, i, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[i] = n, l.default = new f(r.default, {
  GUILD_POPOUT_FETCH_START: function(e) {
    let {
      guildId: l
    } = e;
    m.guilds[l] = {
      ...m.guilds[l],
      fetchState: "fetching"
    }
  },
  GUILD_POPOUT_FETCH_SUCCESS: function(e) {
    let {
      guildId: l,
      guild: a
    } = e, s = (0, h.makeDiscoverableGuild)(a);
    m.guilds[l] = {
      ...m.guilds[l],
      guild: s,
      fetchState: "succeeded"
    }
  },
  GUILD_POPOUT_FETCH_FAILURE: function(e) {
    let {
      guildId: l
    } = e;
    m.guilds[l] = {
      ...m.guilds[l],
      fetchState: "failed"
    }
  }
})