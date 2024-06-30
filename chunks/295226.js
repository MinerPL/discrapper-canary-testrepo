n(47120);
var r, i = n(906280), a = n.n(i), o = n(442837), s = n(570140), l = n(276444), u = n(937579), c = n(594174), d = n(74538), _ = n(78839), E = n(474936);
function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let h = {
        userOffersLastFetchedAtDate: void 0,
        userAnnualOfferLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0
    }, p = h;
function m() {
    p.userTrialOffers = {}, p.userDiscountOffers = {}, p.userOffersLastFetchedAtDate = void 0, p.userAnnualOfferLastFetchedAtDate = void 0;
}
let I = () => !0;
function T() {
    if (null != _.ZP.getPremiumTypeSubscription()) {
        let e = a()(p.userDiscountOffers[E.gW]), t = a()(p.userDiscountOffers[E.Nl]);
        return p.userDiscountOffers = {}, null != e ? p.userDiscountOffers[E.gW] = e : null != t && (p.userDiscountOffers[E.Nl] = t), p.userTrialOffers = {}, !0;
    }
    return !1;
}
function g() {
    let e = c.default.getCurrentUser();
    !(0, d.I5)(e) && Object.keys(p.userDiscountOffers).length > 0 && (0, u.Tf)(!0);
}
function S() {
    var e;
    let t = null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
    if (null == t)
        return !1;
    let n = Object.entries(l.Z.getRelevantReferralTrialOffers()).map(e => {
        let [t, n] = e;
        return n;
    }).filter(e => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return p.userTrialOffers[e.trial_id] = e, !0;
    }
    return !1;
}
class A extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        p = null != e ? e : h, this.waitFor(c.default), this.syncWith([c.default], I), this.syncWith([_.ZP], T), this.syncWith([l.Z], S);
    }
    getUserTrialOffer(e) {
        if (null !== e)
            return p.userTrialOffers[e];
    }
    getUserDiscountOffer(e) {
        if (null !== e)
            return p.userDiscountOffers[e];
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e)
            if (null != p.userTrialOffers[t])
                return t;
        return null;
    }
    hasFetchedOffer() {
        return null != p.userOffersLastFetchedAtDate;
    }
    shouldFetchOffer() {
        let e = p.userOffersLastFetchedAtDate;
        return null == e || Date.now() - 172800000 > e;
    }
    shouldFetchAnnualOffer() {
        let e = p.userAnnualOfferLastFetchedAtDate;
        return null == e || Date.now() - 172800000 > e;
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(E.nG).map(e => e.id), n = c.default.getCurrentUser();
        return (0, d.I5)(n) ? [] : Object.values(p.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + E.ff);
    }
    getAcknowledgedOffers(e) {
        let t = c.default.getCurrentUser();
        return (0, d.I5)(t) ? [] : Object.values(p.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at);
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = c.default.getCurrentUser();
        return (0, d.I5)(t) ? [] : Object.values(null !== (e = p.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at && !E.ee.includes(e.discount_id));
    }
    getUnacknowledgedOffers(e) {
        let t = c.default.getCurrentUser();
        return (0, d.I5)(t) ? [] : Object.values(p.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at);
    }
    hasAnyUnexpiredOffer() {
        return Object.values(p.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null === (t = p.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer;
    }
    getState() {
        return p;
    }
    forceReset() {
        m();
    }
}
f(A, 'displayName', 'UserOfferStore'), f(A, 'persistKey', 'UserOfferStore'), f(A, 'migrations', [
    e => {
        let t = null == e ? void 0 : e.userDiscounts;
        if (null != t)
            return {
                ...e,
                userDiscountOffers: t
            };
    },
    e => {
        if (null != e)
            return (null == e ? void 0 : e.userAnnualOfferLastFetchedAtDate) == null ? {
                ...e,
                userAnnualOfferLastFetchedAtDate: void 0
            } : e;
    }
]), t.Z = new A(s.Z, {
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function (e) {
        let {userTrialOffer: t} = e;
        null != t ? p.userTrialOffers[t.trial_id] = t : m(), p.userOffersLastFetchedAtDate = Date.now();
    },
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let {userTrialOffer: t} = e;
        null != t ? p.userTrialOffers[t.trial_id] = t : p.userTrialOffers = {}, p.userOffersLastFetchedAtDate = Date.now();
    },
    BILLING_USER_OFFER_FETCH_SUCCESS: function (e) {
        let {
            userTrialOffer: t,
            userDiscount: n,
            userDiscountOffer: r
        } = e;
        null == t && null == n && null == r && m(), null != t ? (p.userTrialOffers[t.trial_id] = t, p.userDiscountOffers = {}) : null != n ? (p.userDiscountOffers[n.discount_id] = n, p.userTrialOffers = {}) : null != r && (p.userDiscountOffers[r.discount_id] = r, p.userTrialOffers = {}), p.userOffersLastFetchedAtDate = Date.now();
    },
    BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS: function (e) {
        let {userDiscountOffer: t} = e;
        delete p.userDiscountOffers[E.gW], delete p.userDiscountOffers[E.Nl], null != t && (p.userDiscountOffers[t.discount_id] = t), p.userAnnualOfferLastFetchedAtDate = Date.now();
    },
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function (e) {
        let {
            userTrialOffer: t,
            userDiscount: n,
            userDiscountOffer: r
        } = e;
        null != t ? p.userTrialOffers[t.trial_id] = t : p.userTrialOffers = {}, null != n ? p.userDiscountOffers[n.discount_id] = n : null != r ? p.userDiscountOffers[r.discount_id] = r : p.userDiscountOffers = {}, p.userOffersLastFetchedAtDate = Date.now();
    },
    BILLING_USER_OFFER_FETCH_FAIL: function () {
        m(), p.userOffersLastFetchedAtDate = Date.now();
    },
    BILLING_ANNUAL_USER_OFFER_FETCH_FAIL: function () {
        delete p.userDiscountOffers[E.gW], delete p.userDiscountOffers[E.Nl], p.userAnnualOfferLastFetchedAtDate = Date.now();
    },
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: g,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: g,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: g,
    LOGOUT: m
});
