"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var l = n("446674"),
  s = n("913144");
let i = {},
  r = null,
  a = [],
  o = !1,
  u = null,
  d = null;

function c() {
  o = !0
}
class f extends l.default.Store {
  getAppliedGuildBoostsForGuild(e) {
    return null != i[e] ? i[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != i[e] ? i[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return a
  }
  getAppliedGuildBoost(e) {
    return a.find(t => t.id === e)
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
    return r
  }
}
f.displayName = "AppliedGuildBoostStore";
var p = new f(s.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    i[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    a = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    r = t
  },
  GUILD_UNAPPLY_BOOST_START: c,
  GUILD_APPLY_BOOST_START: c,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    a = [...t, ...a.filter(e => !n.has(e.id))], u = null, o = !1
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
    a = a.filter(e => e.id !== t), o = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    o = !1, d = t
  }
})