let i;
var s, a, r, l, o = n(442837),
  c = n(570140),
  d = n(900849);
let u = null,
  _ = !1,
  h = !1;
class E extends(l = o.ZP.Store) {
  getRecommendedGuilds() {
return u;
  }
  getLoadId() {
return i;
  }
  isFetching() {
return _;
  }
  failed() {
return h;
  }
}
r = 'GuildRecommendationsStore', (a = 'displayName') in(s = E) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r, t.Z = new E(c.Z, {
  GUILD_RECOMMENDATION_FETCH: function() {
_ = !0;
  },
  GUILD_RECOMMENDATION_FETCH_SUCCESS: function(e) {
u = e.recommendedGuilds.map(d.PP), i = e.loadId, _ = !1;
  },
  GUILD_RECOMMENDATION_FETCH_FAILURE: function() {
h = !0, _ = !1;
  }
});