"use strict";
let l;
n.r(t);
var a, s, i, r, o = n("442837"),
  u = n("570140"),
  d = n("900849");
let c = null,
  f = !1,
  h = !1;
class C extends(r = o.default.Store) {
  getRecommendedGuilds() {
    return c
  }
  getLoadId() {
    return l
  }
  isFetching() {
    return f
  }
  failed() {
    return h
  }
}
i = "GuildRecommendationsStore", (s = "displayName") in(a = C) ? Object.defineProperty(a, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = i, t.default = new C(u.default, {
  GUILD_RECOMMENDATION_FETCH: function() {
    f = !0
  },
  GUILD_RECOMMENDATION_FETCH_SUCCESS: function(e) {
    c = e.recommendedGuilds.map(d.makeDiscoverableGuild), l = e.loadId, f = !1
  },
  GUILD_RECOMMENDATION_FETCH_FAILURE: function() {
    h = !0, f = !1
  }
})