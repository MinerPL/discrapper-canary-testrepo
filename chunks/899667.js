"use strict";
n.r(t), n("47120");
var i, r, s, a, l = n("442837"),
  o = n("570140");
let u = {},
  c = null,
  d = [],
  f = !1,
  p = null,
  _ = null;

function E() {
  f = !0
}
class I extends(i = l.default.Store) {
  getAppliedGuildBoostsForGuild(e) {
    return null != u[e] ? u[e].subscriptions : null
  }
  getLastFetchedAtForGuild(e) {
    return null != u[e] ? u[e].lastFetchedAt : null
  }
  getCurrentUserAppliedBoosts() {
    return d
  }
  getAppliedGuildBoost(e) {
    return d.find(t => t.id === e)
  }
  get isModifyingAppliedBoost() {
    return f
  }
  get applyBoostError() {
    return p
  }
  get unapplyBoostError() {
    return _
  }
  get cooldownEndsAt() {
    return c
  }
}
a = "AppliedGuildBoostStore", (s = "displayName") in(r = I) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new I(o.default, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      appliedBoosts: n
    } = e;
    u[t] = {
      subscriptions: n,
      lastFetchedAt: Date.now()
    }
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
    let {
      appliedGuildBoosts: t
    } = e;
    d = t
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
    let {
      endsAt: t
    } = e;
    c = t
  },
  GUILD_UNAPPLY_BOOST_START: E,
  GUILD_APPLY_BOOST_START: E,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
    let {
      appliedGuildBoost: t
    } = e, n = new Set(t.map(e => e.id));
    d = [...t, ...d.filter(e => !n.has(e.id))], p = null, f = !1
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    f = !1, p = t
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
    let {
      boostId: t
    } = e;
    d = d.filter(e => e.id !== t), f = !1
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
    let {
      error: t
    } = e;
    f = !1, _ = t
  }
})