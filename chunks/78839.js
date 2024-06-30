n.d(t, {
    sE: function () {
        return y;
    }
}), n(653041), n(47120);
var r, i, a, o, s = n(442837), l = n(570140), u = n(710845), c = n(301766), d = n(255078), _ = n(314897), E = n(122289), f = n(981631);
let h = null, p = null, m = null, I = null, T = null, g = !1, S = !1, A = null, N = !1, v = new u.Z('SubscriptionStore');
function O(e) {
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
        return C(n) && n.status !== f.O0b.ENDED ? e[r] = n : e.splice(r, 1), e;
    }
}
function R() {
    h = null, p = null, m = null, I = null, T = null, g = !1, S = !1, A = null, N = !1;
}
function C(e) {
    return e.status !== f.O0b.UNPAID;
}
function y(e) {
    let t = _.default.getId();
    return e.userId === t;
}
function D(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], r = n ? p : h;
    if (null == r)
        return null;
    for (let n in r) {
        let i = r[n];
        if (!y(i)) {
            if (!S) {
                let e = _.default.getId();
                v.log('user id mismatch between logged in user and SubscriptionStore user'), (0, E.g9)('user id mismatch between logged in user and SubscriptionStore user', {
                    extra: {
                        authUserId: e,
                        subscriptionId: i.id,
                        subscriptionUserId: i.userId
                    }
                }), S = !0;
            }
            break;
        }
        if (i.type === e && (null == t || t(i)))
            return i;
    }
    return null;
}
class L extends (r = s.ZP.Store) {
    hasFetchedSubscriptions() {
        return null != h;
    }
    hasFetchedMostRecentPremiumTypeSubscription() {
        return g;
    }
    hasFetchedPreviousPremiumTypeSubscription() {
        return N;
    }
    getPremiumSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return D(f.NYc.PREMIUM, e => !(0, c.Q0)(e.planId), e);
    }
    getPremiumTypeSubscription() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return D(f.NYc.PREMIUM, void 0, e);
    }
    getSubscriptions() {
        let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        return e ? p : h;
    }
    getSubscriptionById(e) {
        var t;
        return null !== (t = null == h ? void 0 : h[e]) && void 0 !== t ? t : void 0;
    }
    getActiveGuildSubscriptions() {
        return I;
    }
    getActiveApplicationSubscriptions() {
        return T;
    }
    getSubscriptionForPlanIds(e) {
        var t;
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1], r = new Set(e), i = n ? p : h;
        return null == i ? null : null !== (t = Object.values(i).find(e => e.items.some(e => r.has(e.planId)))) && void 0 !== t ? t : null;
    }
    getMostRecentPremiumTypeSubscription() {
        return m;
    }
    getPreviousPremiumTypeSubscription() {
        return A;
    }
}
o = 'SubscriptionStore', (a = 'displayName') in (i = L) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.ZP = new L(l.Z, {
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let {subscriptions: t} = e, n = {}, r = {}, i = [], a = [], o = _.default.getId();
        t.forEach(e => {
            if (e.user_id !== o && !S) {
                v.log('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'), (0, E.g9)('[handleSubscriptionsFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: o,
                        subscriptionId: e.id,
                        subscriptionUserId: e.user_id
                    }
                }), S = !0;
                return;
            }
            let t = d.Q.createFromServer(e);
            n[t.id] = t, C(t) && (r[t.id] = t, t.type === f.NYc.GUILD && t.status !== f.O0b.ENDED && i.push(t), t.type === f.NYc.APPLICATION && t.status !== f.O0b.ENDED && a.push(t));
        }), h = n, p = r, I = i, T = a;
    },
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: function (e) {
        let {subscription: t} = e, n = d.Q.createFromServer(t);
        h = {
            ...h,
            [n.id]: n
        }, C(n) && (p = {
            ...p,
            [n.id]: n
        }), null != I && n.type === f.NYc.GUILD && (I = O({
            activeSubscriptions: I,
            record: n
        })), null != T && n.type === f.NYc.APPLICATION && (I = O({
            activeSubscriptions: T,
            record: n
        }));
    },
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let {subscription: t} = e;
        if (g = !0, null != t) {
            let e = _.default.getId();
            if (t.user_id !== e && !S) {
                v.log('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'), (0, E.g9)('[handleMostRecentSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }), g = !1, S = !0;
                return;
            }
            m = d.Q.createFromServer(t);
        }
    },
    BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS: function (e) {
        let {subscription: t} = e;
        if (N = !0, null != t) {
            let e = _.default.getId();
            if (t.user_id !== e && !S) {
                v.log('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch'), (0, E.g9)('[handlePreviousSubscriptionFetch] Skipping adding Subscription into SubscriptionStore because of userId mismatch', {
                    extra: {
                        authUserId: e,
                        subscriptionId: t.id,
                        subscriptionUserId: t.user_id
                    }
                }), N = !1, S = !0;
                return;
            }
            A = d.Q.createFromServer(t);
        }
    },
    BILLING_SUBSCRIPTION_RESET: R,
    LOGOUT: R
});
