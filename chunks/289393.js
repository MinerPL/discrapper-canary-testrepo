"use strict";
n.d(t, {
  M: function() {
    return i
  }
}), n(47120);
var i, r, s, o, a, l, u = n(512722),
  _ = n.n(u),
  d = n(442837),
  c = n(759174),
  E = n(570140),
  I = n(308636);

function T(e) {
  return "guild:".concat(e)
}

function h(e) {
  return "subscription_listing:".concat(e)
}

function S(e) {
  return "application:".concat(e)
}

function f(e) {
  return "plan:".concat(e)
}(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
let N = new c.h(e => [T(e.guild_id), ...e.subscription_listings_ids.map(h)], e => e.id),
  A = new c.h(e => [S(e.application_id), f(e.subscription_plans[0].id)], e => e.id),
  m = {},
  O = new Set,
  R = {},
  C = {},
  p = {},
  g = {},
  L = new Map;

function v(e) {
  return N.values(T(e))
}

function D(e) {
  var t;
  for (let n of (N.set(e.id, e), L.set(e.guild_id, e.application_id), null !== (t = e.subscription_listings) && void 0 !== t ? t : [])) M(n)
}

function M(e) {
  A.set(e.id, e)
}
let P = [];
class y extends(r = d.ZP.Store) {
  getSubscriptionGroupListingsForGuildFetchState(e) {
    var t;
    return null !== (t = m[e]) && void 0 !== t ? t : 0
  }
  getDidFetchListingForSubscriptionPlanId(e) {
    return O.has(e)
  }
  getSubscriptionGroupListing(e) {
    return N.get(e)
  }
  getSubscriptionGroupListingsForGuild(e) {
    return v(e)
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
    let t = N.values(h(e));
    return _()(t.length <= 1, "Found multiple group listings for listing"), t[0]
  }
  getSubscriptionListing(e) {
    return A.get(e)
  }
  getSubscriptionListingsForGuild(e) {
    var t;
    let n = null === (t = this.getSubscriptionGroupListingsForGuild(e)[0]) || void 0 === t ? void 0 : t.application_id;
    return null != n ? A.values(S(n)) : P
  }
  getSubscriptionListingForPlan(e) {
    let t = A.values(f(e));
    return _()(t.length <= 1, "Found multiple listings for plan"), t[0]
  }
  getSubscriptionSettings(e) {
    return R[e]
  }
  getSubscriptionTrial(e) {
    return C[e]
  }
  getMonetizationRestrictions(e) {
    return p[e]
  }
  getMonetizationRestrictionsFetchState(e) {
    var t;
    return null !== (t = g[e]) && void 0 !== t ? t : 0
  }
  getApplicationIdForGuild(e) {
    return L.get(e)
  }
}
l = "GuildRoleSubscriptionsStore", (a = "displayName") in(o = y) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new y(E.Z, {
  CONNECTION_OPEN: function() {
    N.clear(), A.clear(), m = {}, O.clear(), R = {}, C = {}, p = {}, g = {}, L.clear()
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTIONS_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    R[t.guild_id] = t
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
    let {
      guildId: t
    } = e;
    for (let e of (m[t] = 1, v(t)))
      for (let t of (N.delete(e.id), e.subscription_listings_ids)) A.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
    let {
      guildId: t,
      groupListings: n,
      settings: i,
      subscriptionTrials: r
    } = e;
    for (let e of (m[t] = 2, n)) D(e);
    for (let e of (R[t] = i, r)) C[e.id] = e
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    m[t] = 2
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_GROUP_LISTING: function(e) {
    let {
      listing: t
    } = e;
    D(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_GROUP_LISTING: function(e) {
    let {
      groupListingId: t
    } = e;
    N.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN: function(e) {
    let {
      planId: t
    } = e;
    O.add(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
    let {
      groupListing: t
    } = e;
    D(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_CREATE_LISTING: function(e) {
    let {
      listing: t,
      groupListing: n
    } = e;
    M(t), D(n)
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_LISTING: function(e) {
    let {
      listing: t
    } = e;
    M(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_DELETE_LISTING: function(e) {
    let {
      listingId: t
    } = e;
    return A.delete(t)
  },
  GUILD_ROLE_SUBSCRIPTIONS_UPDATE_SUBSCRIPTION_TRIAL: function(e) {
    let {
      subscriptionTrial: t
    } = e;
    C[t.id] = t
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS: function(e) {
    let {
      guildId: t
    } = e;
    g[t] = 1
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function(e) {
    let {
      guildId: t,
      restrictions: n
    } = e;
    p[t] = n, g[t] = 2
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function(e) {
    let {
      guildId: t
    } = e;
    g[t] = 2, p[t] = I.m
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_ABORTED: function(e) {
    let {
      guildId: t
    } = e;
    g[t] = 0
  }
})