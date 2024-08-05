n.d(t, {
  sE: function() {
return D;
  }
}), n(653041), n(47120);
var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(710845),
  c = n(301766),
  d = n(255078),
  _ = n(314897),
  E = n(122289),
  f = n(981631),
  h = n(474936);
let p = null,
  m = null,
  I = null,
  T = null,
  g = null,
  S = !1,
  A = !1,
  N = null,
  v = !1,
  O = new u.Z('SubscriptionStore');

function R(e) {
  let {
activeSubscriptions: t,
record: n
  } = e, r = t.findIndex(e => e.id === n.id);
  if (-1 === r)
return [
  n,
  ...t
];
  {
let e = [...t];
return y(n) && n.status !== f.O0b.ENDED ? e[r] = n : e.splice(r, 1), e;
  }
}

function C() {
  p = null, m = null, I = null, T = null, g = null, S = !1, A = !1, N = null, v = !1;
}

function y(e) {
  return e.status !== f.O0b.UNPAID;
}

function D(e) {
  let t = _.default.getId();
  return e.userId === t;
}

function L(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
r = n ? m : p;
  if (null == r)
return null;
  for (let n in r) {
let i = r[n];
if (!D(i)) {
  if (!A) {
    let e = _.default.getId();
    O.log('user id mismatch between logged in user and SubscriptionStore user'), (0, E.g9)('user id mismatch between logged in user and SubscriptionStore user', {
      extra: {
        authUserId: e,
        subscriptionId: i.id,
        subscriptionUserId: i.userId
      }
    }), A = !0;
  }
  break;
}
if (i.type === e && (null == t || t(i)))
  return i;
  }
  return null;
}
class b extends(r = o.ZP.Store) {
  hasFetchedSubscriptions() {
return null != p;
  }
  hasFetchedMostRecentPremiumTypeSubscription() {
return S;
  }
  hasFetchedPreviousPremiumTypeSubscription() {
return v;
  }
  getPremiumSubscription() {
let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
return L(f.NYc.PREMIUM, e => !(0, c.Q0)(e.planId), e);
  }
  getPremiumTypeSubscription() {
let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
return L(f.NYc.PREMIUM, void 0, e);
  }
  inReverseTrial() {
let e = L(f.NYc.PREMIUM, void 0, !0);
return null != e && null != e.trialId && h.h8.includes(e.trialId);
  }
  getSubscriptions() {
let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
return e ? m : p;
  }
  getSubscriptionById(e) {
var t;
return null !== (t = null == p ? void 0 : p[e]) && void 0 !== t ? t : void 0;
  }
  getActiveGuildSubscriptions() {
return T;
  }
  getActiveApplicationSubscriptions() {
return g;
  }
  getSubscriptionForPlanIds(e) {
var t;
let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
  r = new Set(e),
  i = n ? m : p;
return null == i ? null : null !== (t = Object.values(i).find(e => e.items.some(e => r.has(e.planId)))) && void 0 !== t ? t : null;
  }
  getMostRecentPremiumTypeSubscription() {
return I;
  }
  getPreviousPremiumTypeSubscription() {
return N;
  }
}
s = 'SubscriptionStore', (a = 'displayName') in(i = b) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.ZP = new b(l.Z, {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
let {
  subscriptions: t
} = e, n = {}, r = {}, i = [], a = [], s = _.default.getId();
t.forEach(e => {
  if (e.user_id !== s && !A) {
    O.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'), (0, E.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
      extra: {
        authUserId: s,
        subscriptionId: e.id,
        subscriptionUserId: e.user_id
      }
    }), A = !0;
    return;
  }
  let t = d.Q.createFromServer(e);
  n[t.id] = t, y(t) && (r[t.id] = t, t.type === f.NYc.GUILD && t.status !== f.O0b.ENDED && i.push(t), t.type === f.NYc.APPLICATION && t.status !== f.O0b.ENDED && a.push(t));
}), p = n, m = r, T = i, g = a;
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function(e) {
let {
  subscription: t
} = e, n = d.Q.createFromServer(t);
p = {
  ...p,
  [n.id]: n
}, y(n) && (m = {
  ...m,
  [n.id]: n
}), null != T && n.type === f.NYc.GUILD && (T = R({
  activeSubscriptions: T,
  record: n
})), null != g && n.type === f.NYc.APPLICATION && (T = R({
  activeSubscriptions: g,
  record: n
}));
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
let {
  subscription: t
} = e;
if (S = !0, null != t) {
  let e = _.default.getId();
  if (t.user_id !== e && !A) {
    O.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'), (0, E.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
      extra: {
        authUserId: e,
        subscriptionId: t.id,
        subscriptionUserId: t.user_id
      }
    }), S = !1, A = !0;
    return;
  }
  I = d.Q.createFromServer(t);
}
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
let {
  subscription: t
} = e;
if (v = !0, null != t) {
  let e = _.default.getId();
  if (t.user_id !== e && !A) {
    O.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'), (0, E.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
      extra: {
        authUserId: e,
        subscriptionId: t.id,
        subscriptionUserId: t.user_id
      }
    }), v = !1, A = !0;
    return;
  }
  N = d.Q.createFromServer(t);
}
  },
  BILLING_SUBSCRIPTION_RESET: C,
  LOGOUT: C
});