"use strict";
s.r(t);
var a, l, n, i, r = s("877921"),
  o = s.n(r),
  d = s("442837"),
  u = s("570140");
let c = ["pct_retained", "new_members", "visitors", "communicators"],
  E = {},
  _ = {},
  I = null;

function T(e) {
  let {
    guildId: t,
    stats: s
  } = e;
  I = null;
  let a = {},
    l = {},
    n = s[0],
    i = s[1];
  null != n && c.forEach(e => {
    if (null != n[e]) {
      let t = o()(e);
      null != i && 0 !== i[e] && (a["".concat(t, "Change")] = (n[e] - i[e]) * 100 / i[e]), l[t] = n[e]
    }
  }), E[t] = {
    ...l,
    ...a,
    ...E[t]
  }
}

function S(e) {
  let {
    error: t
  } = e;
  I = t.code
}
class f extends(i = d.default.Store) {
  getOverviewAnalytics(e) {
    return E[e]
  }
  getMemberInsights(e) {
    var t;
    return null !== (t = _[e]) && void 0 !== t ? t : {}
  }
  shouldFetchMemberInsights(e) {
    var t;
    let s = null === (t = _[e]) || void 0 === t ? void 0 : t.fetchedAt;
    return null == s || Date.now() - s > 432e5
  }
  getError() {
    return I
  }
}
n = "GuildSettingsAnalyticsStore", (l = "displayName") in(a = f) ? Object.defineProperty(a, l, {
  value: n,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = n, t.default = new f(u.default, {
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_SUCCESS: T,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_SUCCESS: T,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_SUCCESS: T,
  GUILD_ANALYTICS_ENGAGEMENT_OVERVIEW_FETCH_FAILURE: S,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_OVERVIEW_FETCH_FAILURE: S,
  GUILD_ANALYTICS_GROWTH_ACTIVATION_RETENTION_FETCH_FAILURE: S,
  GUILD_ANALYTICS_MEMBER_INSIGHTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      ...s
    } = e;
    _[t] = {
      ...s,
      fetchedAt: Date.now()
    }
  }
})