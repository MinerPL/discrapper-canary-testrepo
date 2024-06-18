"use strict";
var n, i, l, a, r = t(877921),
  o = t.n(r),
  c = t(442837),
  d = t(570140);
let u = ["pct_retained", "new_members", "visitors", "communicators"],
  E = {},
  _ = {},
  I = null;

function T(e) {
  let {
    guildId: s,
    stats: t
  } = e;
  I = null;
  let n = {},
    i = {},
    l = t[0],
    a = t[1];
  null != l && u.forEach(e => {
    if (null != l[e]) {
      let s = o()(e);
      null != a && 0 !== a[e] && (n["".concat(s, "Change")] = (l[e] - a[e]) * 100 / a[e]), i[s] = l[e]
    }
  }), E[s] = {
    ...i,
    ...n,
    ...E[s]
  }
}

function N(e) {
  let {
    error: s
  } = e;
  I = s.code
}
class m extends(a = c.ZP.Store) {
  getOverviewAnalytics(e) {
    return E[e]
  }
  getMemberInsights(e) {
    var s;
    return null !== (s = _[e]) && void 0 !== s ? s : {}
  }
  shouldFetchMemberInsights(e) {
    var s;
    let t = null === (s = _[e]) || void 0 === s ? void 0 : s.fetchedAt;
    return null == t || Date.now() - t > 432e5
  }
  getError() {
    return I
  }
}
l = "GuildSettingsAnalyticsStore", (i = "displayName") in(n = m) ? Object.defineProperty(n, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[i] = l, s.Z = new m(d.Z, {
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: T,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: T,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: T,
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: N,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: N,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: N,
  GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: s,
      ...t
    } = e;
    _[s] = {
      ...t,
      fetchedAt: Date.now()
    }
  }
})