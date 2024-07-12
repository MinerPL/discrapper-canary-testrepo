n.d(t, {
  M: function() {
return r;
  }
}), n(47120);
var r, i, a, o, s, l, u = n(512722),
  c = n.n(u),
  d = n(442837),
  _ = n(759174),
  E = n(570140),
  f = n(959546),
  h = n(55563);

function p(e) {
  return 'subscription_listing:'.concat(e);
}

function m(e) {
  return 'application:'.concat(e);
}

function I(e) {
  return 'plan:'.concat(e);
}

function T(e, t, n) {
  return 'entitlement:'.concat(e, ':').concat(n, ':').concat(t);
}

function g(e, t) {
  return 'entitlement:'.concat(t, ':').concat(e);
}
(a = r || (r = {}))[a.NOT_FETCHED = 0] = 'NOT_FETCHED', a[a.FETCHING = 1] = 'FETCHING', a[a.FETCHED = 2] = 'FETCHED';
let S = new _.h(e => [
m(e.application_id),
...e.subscription_listings_ids.map(p)
  ], e => e.id),
  A = new _.h(e => [
m(e.application_id),
I(e.subscription_plans[0].id)
  ], e => e.id),
  N = new _.h(e => [
T(e.applicationId, e.isValid(null, h.Z), e.guildId),
g(e.isValid(null, h.Z), e.guildId)
  ], e => e.id),
  v = {},
  O = {};

function R(e) {
  let t = S.values(m(e));
  return c()(t.length <= 1, 'Found multiple group listings for application'), t[0];
}

function C(e) {
  var t;
  for (let n of (S.set(e.id, e), null !== (t = e.subscription_listings) && void 0 !== t ? t : []))
(function(e) {
  A.set(e.id, e);
}(n));
}
class y extends(i = d.yh) {
  getSubscriptionGroupListingsForApplicationFetchState(e) {
var t;
return null !== (t = v[e]) && void 0 !== t ? t : 0;
  }
  getSubscriptionGroupListing(e) {
return S.get(e);
  }
  getSubscriptionGroupListingForApplication(e) {
return R(e);
  }
  getSubscriptionGroupListingForSubscriptionListing(e) {
let t = S.values(p(e));
return c()(t.length <= 1, 'Found multiple group listings for listing'), t[0];
  }
  getSubscriptionListing(e) {
return A.get(e);
  }
  getSubscriptionListingsForApplication(e) {
return A.values(m(e));
  }
  getEntitlementsForGuildFetchState(e) {
var t;
return null !== (t = O[e]) && void 0 !== t ? t : 0;
  }
  getSubscriptionListingForPlan(e) {
let t = A.values(I(e));
return c()(t.length <= 1, 'Found multiple listings for plan'), t[0];
  }
  getApplicationEntitlementsForGuild(e, t) {
let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
return N.values(T(e, n, t));
  }
  getEntitlementsForGuild(e) {
let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
return N.values(g(t, e));
  }
}
l = 'ApplicationSubscriptionStore', (s = 'displayName') in(o = y) ? Object.defineProperty(o, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[s] = l, t.Z = new y(E.Z, {
  LOGOUT: function() {
S.clear(), A.clear(), N.clear(), v = {}, O = {};
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(e) {
let {
  applicationId: t
} = e;
v[t] = 1;
let n = R(t);
if (null != n)
  for (let e of n.subscription_listings_ids)
    A.delete(e);
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(e) {
let {
  applicationId: t,
  groupListing: n
} = e;
v[t] = 2, C(n);
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(e) {
let {
  applicationId: t
} = e;
v[t] = 2;
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(e) {
let {
  guildId: t
} = e;
O[t] = 1;
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(e) {
let {
  guildId: t,
  entitlements: n
} = e;
O[t] = 2, n.forEach(e => {
  let t = f.Z.createFromServer(e);
  N.set(t.id, t);
});
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(e) {
let {
  guildId: t
} = e;
O[t] = 0;
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(e) {
let {
  groupListing: t
} = e;
C(t);
  }
});