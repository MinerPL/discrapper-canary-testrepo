"use strict";
var n, i, l, a, r = t(392711),
  o = t.n(r),
  c = t(442837),
  d = t(570140),
  u = t(314897),
  E = t(823379),
  _ = t(891864);
let I = {},
  T = 0;
class N extends(a = c.ZP.Store) {
  initialize() {
    this.waitFor(u.default)
  }
  isFetching() {
    return T > 0
  }
  getGuild(e) {
    return I[e]
  }
  getGuilds(e) {
    return e.map(e => I[e]).filter(E.lm)
  }
}
l = "DiscoverGuildsStore", (i = "displayName") in(n = N) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, s.Z = new N(d.Z, {
  DISCOVER_GUILDS_FETCH_START: function(e) {
    T += 1
  },
  DISCOVER_GUILDS_FETCH_SUCCESS: function(e) {
    let {
      guilds: s
    } = e;
    T -= 1, o().map(s, _.Z).forEach(e => I[e.id] = e)
  },
  DISCOVER_GUILDS_FETCH_FAILURE: function(e) {
    T -= 1
  }
})