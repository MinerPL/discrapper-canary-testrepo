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
  I = n(959546),
  T = n(55563);

function h(e) {
  return "subscription_listing:".concat(e)
}

function S(e) {
  return "application:".concat(e)
}

function f(e) {
  return "plan:".concat(e)
}

function N(e, t, n) {
  return "entitlement:".concat(e, ":").concat(n, ":").concat(t)
}

function A(e, t) {
  return "entitlement:".concat(t, ":").concat(e)
}(s = i || (i = {}))[s.NOT_FETCHED = 0] = "NOT_FETCHED", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED";
let m = new c.h(e => [S(e.application_id), ...e.subscription_listings_ids.map(h)], e => e.id),
  O = new c.h(e => [S(e.application_id), f(e.subscription_plans[0].id)], e => e.id),
  R = new c.h(e => [N(e.applicationId, e.isValid(null, T.Z), e.guildId), A(e.isValid(null, T.Z), e.guildId)], e => e.id),
  C = {},
  p = {};

function g(e) {
  let t = m.values(S(e));
  return _()(t.length <= 1, "Found multiple group listings for application"), t[0]
}

function L(e) {
  var t;
  for (let n of (m.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : []))(function(e) {
    O.set(e.id, e)
  })(n)
}
class v extends(r = d.yh) {
  getSubscriptionGroupListingsForApplicationFetchState(e) {
    var t;
    return null !== (t = C[e]) && void 0 !== t ? t : 0
  }
  getSubscriptionGroupListing(e) {
    return m.get(e)
  }
  getSubscriptionGroupListingForApplication(e) {
    return g(e)
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
    let t = m.values(h(e));
    return _()(t.length <= 1, "Found multiple group listings for listing"), t[0]
  }
  getSubscriptionListing(e) {
    return O.get(e)
  }
  getSubscriptionListingsForApplication(e) {
    return O.values(S(e))
  }
  getEntitlementsForGuildFetchState(e) {
    var t;
    return null !== (t = p[e]) && void 0 !== t ? t : 0
  }
  getSubscriptionListingForPlan(e) {
    let t = O.values(f(e));
    return _()(t.length <= 1, "Found multiple listings for plan"), t[0]
  }
  getApplicationEntitlementsForGuild(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    return R.values(N(e, n, t))
  }
  getEntitlementsForGuild(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return R.values(A(t, e))
  }
}
l = "ApplicationSubscriptionStore", (a = "displayName") in(o = v) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new v(E.Z, {
  LOGOUT: function() {
    m.clear(), O.clear(), R.clear(), C = {}, p = {}
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
    let {
      applicationId: t
    } = e;
    C[t] = 1;
    let n = g(t);
    if (null != n)
      for (let e of n.subscription_listings_ids) O.delete(e)
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
    let {
      applicationId: t,
      groupListing: n
    } = e;
    C[t] = 2, L(n)
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
    let {
      applicationId: t
    } = e;
    C[t] = 2
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
    let {
      guildId: t
    } = e;
    p[t] = 1
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
    let {
      guildId: t,
      entitlements: n
    } = e;
    p[t] = 2, n.forEach(e => {
      let t = I.Z.createFromServer(e);
      R.set(t.id, t)
    })
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
    let {
      guildId: t
    } = e;
    p[t] = 0
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
    let {
      groupListing: t
    } = e;
    L(t)
  }
})