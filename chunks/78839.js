"use strict";
n.d(t, {
  sE: function() {
    return v
  }
}), n(653041), n(47120);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(710845),
  _ = n(301766),
  d = n(255078),
  c = n(314897),
  E = n(122289),
  I = n(981631);
let T = null,
  h = null,
  S = null,
  f = null,
  N = null,
  A = !1,
  m = !1,
  O = null,
  R = !1,
  C = new u.Z("SubscriptionStore");

function p(e) {
  let {
    activeSubscriptions: t,
    record: n
  } = e, i = t.findIndex(e => e.id === n.id);
  if (-1 === i) return [n, ...t];
  {
    let e = [...t];
    return L(n) && n.status !== I.O0b.ENDED ? e[i] = n : e.splice(i, 1), e
  }
}

function g() {
  T = null, h = null, S = null, f = null, N = null, A = !1, m = !1, O = null, R = !1
}

function L(e) {
  return e.status !== I.O0b.UNPAID
}

function v(e) {
  let t = c.default.getId();
  return e.userId === t
}

function D(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = n ? h : T;
  if (null == i) return null;
  for (let n in i) {
    let r = i[n];
    if (!v(r)) {
      if (!m) {
        let e = c.default.getId();
        C.log("user id mismatch between logged in user and SubscriptionStore user"), (0, E.g9)("user id mismatch between logged in user and SubscriptionStore user", {
          extra: {
            authUserId: e,
            subscriptionId: r.id,
            subscriptionUserId: r.userId
          }
        }), m = !0
      }
      break
    }
    if (r.type === e && (null == t || t(r))) return r
  }
  return null
}
class M extends(i = a.ZP.Store) {
  hasFetchedSubscriptions() {
    return null != T
  }
  hasFetchedMostRecentPremiumTypeSubscription() {
    return A
  }
  hasFetchedPreviousPremiumTypeSubscription() {
    return R
  }
  getPremiumSubscription() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return D(I.NYc.PREMIUM, e => !(0, _.Q0)(e.planId), e)
  }
  getPremiumTypeSubscription() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return D(I.NYc.PREMIUM, void 0, e)
  }
  getSubscriptions() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return e ? h : T
  }
  getSubscriptionById(e) {
    var t;
    return null !== (t = null == T ? void 0 : T[e]) && void 0 !== t ? t : void 0
  }
  getActiveGuildSubscriptions() {
    return f
  }
  getActiveApplicationSubscriptions() {
    return N
  }
  getSubscriptionForPlanIds(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      i = new Set(e),
      r = n ? h : T;
    return null == r ? null : null !== (t = Object.values(r).find(e => e.items.some(e => i.has(e.planId)))) && void 0 !== t ? t : null
  }
  getMostRecentPremiumTypeSubscription() {
    return S
  }
  getPreviousPremiumTypeSubscription() {
    return O
  }
}
o = "SubscriptionStore", (s = "displayName") in(r = M) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.ZP = new M(l.Z, {
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscriptions: t
    } = e, n = {}, i = {}, r = [], s = [], o = c.default.getId();
    t.forEach(e => {
      if (e.user_id !== o && !m) {
        C.log("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.g9)("[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: o,
            subscriptionId: e.id,
            subscriptionUserId: e.user_id
          }
        }), m = !0;
        return
      }
      let t = d.Q.createFromServer(e);
      n[t.id] = t, L(t) && (i[t.id] = t, t.type === I.NYc.GUILD && t.status !== I.O0b.ENDED && r.push(t), t.type === I.NYc.APPLICATION && t.status !== I.O0b.ENDED && s.push(t))
    }), T = n, h = i, f = r, N = s
  },
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function(e) {
    let {
      subscription: t
    } = e, n = d.Q.createFromServer(t);
    T = {
      ...T,
      [n.id]: n
    }, L(n) && (h = {
      ...h,
      [n.id]: n
    }), null != f && n.type === I.NYc.GUILD && (f = p({
      activeSubscriptions: f,
      record: n
    })), null != N && n.type === I.NYc.APPLICATION && (f = p({
      activeSubscriptions: N,
      record: n
    }))
  },
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (A = !0, null != t) {
      let e = c.default.getId();
      if (t.user_id !== e && !m) {
        C.log("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.g9)("[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: e,
            subscriptionId: t.id,
            subscriptionUserId: t.user_id
          }
        }), A = !1, m = !0;
        return
      }
      S = d.Q.createFromServer(t)
    }
  },
  BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function(e) {
    let {
      subscription: t
    } = e;
    if (R = !0, null != t) {
      let e = c.default.getId();
      if (t.user_id !== e && !m) {
        C.log("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch"), (0, E.g9)("[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch", {
          extra: {
            authUserId: e,
            subscriptionId: t.id,
            subscriptionUserId: t.user_id
          }
        }), R = !1, m = !0;
        return
      }
      O = d.Q.createFromServer(t)
    }
  },
  BILLING_SUBSCRIPTION_RESET: g,
  LOGOUT: g
})