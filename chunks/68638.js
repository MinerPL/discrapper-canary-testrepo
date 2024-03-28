"use strict";
s.r(t);
var a, l, n, i, r = s("392711"),
  o = s.n(r),
  d = s("442837"),
  u = s("570140"),
  c = s("314897"),
  E = s("823379"),
  _ = s("891864");
let I = {},
  T = 0;
class S extends(i = d.default.Store) {
  initialize() {
    this.waitFor(c.default)
  }
  isFetching() {
    return T > 0
  }
  getGuild(e) {
    return I[e]
  }
  getGuilds(e) {
    return e.map(e => I[e]).filter(E.isNotNullish)
  }
}
n = "DiscoverGuildsStore", (l = "displayName") in(a = S) ? Object.defineProperty(a, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = n, t.default = new S(u.default, {
  DISCOVER_GUILDS_FETCH_START: function(e) {
    T += 1
  },
  DISCOVER_GUILDS_FETCH_SUCCESS: function(e) {
    let {
      guilds: t
    } = e;
    T -= 1, o().map(t, _.default).forEach(e => I[e.id] = e)
  },
  DISCOVER_GUILDS_FETCH_FAILURE: function(e) {
    T -= 1
  }
})