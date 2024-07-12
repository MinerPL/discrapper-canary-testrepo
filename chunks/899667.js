n(47120);
var s, r, o, i, c = n(442837),
  a = n(570140);
let l = {},
  u = null,
  d = [],
  p = !1,
  f = !1,
  g = null,
  x = null;

function b() {
  f = !0;
}
class v extends(s = c.ZP.Store) {
  getAppliedGuildBoostsForGuild(e) {
return null != l[e] ? l[e].subscriptions : null;
  }
  getLastFetchedAtForGuild(e) {
return null != l[e] ? l[e].lastFetchedAt : null;
  }
  getCurrentUserAppliedBoosts() {
return d;
  }
  getAppliedGuildBoost(e) {
return d.find(t => t.id === e);
  }
  get isModifyingAppliedBoost() {
return f;
  }
  get applyBoostError() {
return g;
  }
  get unapplyBoostError() {
return x;
  }
  get cooldownEndsAt() {
return u;
  }
  get isFetchingCurrentUserAppliedBoosts() {
return p;
  }
}
i = 'AppliedGuildBoostStore', (o = 'displayName') in(r = v) ? Object.defineProperty(r, o, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[o] = i, t.Z = new v(a.Z, {
  GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
let {
  guildId: t,
  appliedBoosts: n
} = e;
l[t] = {
  subscriptions: n,
  lastFetchedAt: Date.now()
};
  },
  USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
let {
  appliedGuildBoosts: t
} = e;
p = !1, d = t;
  },
  APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
let {
  endsAt: t
} = e;
u = t;
  },
  GUILD_UNAPPLY_BOOST_START: b,
  GUILD_APPLY_BOOST_START: b,
  GUILD_APPLY_BOOST_SUCCESS: function(e) {
let {
  appliedGuildBoost: t
} = e, n = new Set(t.map(e => e.id));
d = [
  ...t,
  ...d.filter(e => !n.has(e.id))
], g = null, f = !1;
  },
  GUILD_APPLY_BOOST_FAIL: function(e) {
let {
  error: t
} = e;
f = !1, g = t;
  },
  GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
let {
  boostId: t
} = e;
d = d.filter(e => e.id !== t), f = !1;
  },
  GUILD_UNAPPLY_BOOST_FAIL: function(e) {
let {
  error: t
} = e;
f = !1, x = t;
  },
  USER_APPLIED_BOOSTS_FETCH_START: function() {
p = !0;
  }
});