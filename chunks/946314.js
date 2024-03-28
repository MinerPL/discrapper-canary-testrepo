"use strict";
n.r(t), n.d(t, {
  DEFAULT_MINIMUM_SIZE: function() {
    return u
  },
  LOWERED_MINIMUM_SIZE: function() {
    return c
  }
});
var i, r, s, a, l = n("442837"),
  o = n("570140");
let u = 1e3,
  c = 200,
  d = {},
  f = !1;
class p extends(a = l.default.Store) {
  isLoading() {
    return f
  }
  passesChecklist(e) {
    var t;
    return !f && (null === (t = d[e]) || void 0 === t ? void 0 : t.sufficient)
  }
  isPendingSuccess(e) {
    let t = d[e];
    return null != t && !f && t.healthScorePending && t.safeEnvironment && 0 === Object.keys(t.nsfwProperties).length && t.size && t.protected
  }
  getDiscoveryChecklist(e) {
    return d[e]
  }
}
s = "DiscoverGuildChecklistStore", (r = "displayName") in(i = p) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.default = new p(o.default, {
  DISCOVER_CHECKLIST_FETCH_START: function(e) {
    f = !0
  },
  DISCOVER_CHECKLIST_FETCH_FAILURE: function(e) {
    f = !1
  },
  DISCOVER_CHECKLIST_FETCH_SUCCESS: function(e) {
    var t;
    let {
      checklist: n,
      guildId: i
    } = e;
    f = !1, d[i] = {
      guildId: n.guild_id,
      safeEnvironment: n.safe_environment,
      healthy: n.healthy,
      healthScorePending: n.health_score_pending,
      nsfwProperties: n.nsfw_properties,
      size: n.size,
      protected: n.protected,
      sufficient: n.sufficient,
      sufficientWithoutGracePeriod: n.sufficient_without_grace_period,
      gracePeriodEndDate: null != n.grace_period_end_date ? new Date(n.grace_period_end_date) : null,
      retentionHealthy: n.retention_healthy,
      engagementHealthy: n.engagement_healthy,
      minimumGuildSize: null != n.minimum_size ? n.minimum_size : u,
      healthScore: n.health_score,
      minimumGuildAge: null !== (t = n.minimum_age) && void 0 !== t ? t : 0,
      age: n.age
    }
  }
})