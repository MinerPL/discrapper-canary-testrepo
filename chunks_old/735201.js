"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var s = n("446674"),
  r = n("913144");
let a = {},
  l = null,
  i = [],
  o = !1,
  u = null,
  d = null;

function c() {
  o = !0
}
class f extends s.default.Store {
  getAppliedGuildBoostsForGuild(e) {
    return null != a[e] ? a[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != a[e] ? a[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return i
  }
  getAppliedGuildBoost(e) {
    return i.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return o
  }
  get applyBoostError() {
    return u
  }
  get unapplyBoostError() {
    return d
  }
  get cooldownEndsAt() {
    return l
  }
}
f.displayName = "AppliedGuildBoostStore";
var m = new f(r.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    a[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    i = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    l = t
  },
  GUILD_UNAPPLY_BOOST_START: c,
  GUILD_APPLY_BOOST_START: c,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    i = [...t, ...i.filter(e => !n.has(e.id))], u = null, o = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    o = !1, u = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    i = i.filter(e => e.id !== t), o = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    o = !1, d = t
  }
})