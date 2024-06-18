"use strict";
n(47120);
var i, r = n(906280),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(276444),
  u = n(937579),
  _ = n(594174),
  d = n(74538),
  c = n(78839),
  E = n(474936);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = {
    userOffersLastFetchedAtDate: void 0,
    userAnnualOfferLastFetchedAtDate: void 0,
    userTrialOffers: {},
    userDiscountOffers: {},
    userDiscounts: void 0
  },
  h = T;

function S() {
  h.userTrialOffers = {}, h.userDiscountOffers = {}, h.userOffersLastFetchedAtDate = void 0, h.userAnnualOfferLastFetchedAtDate = void 0
}
let f = () => !0;

function N() {
  if (null != c.ZP.getPremiumTypeSubscription()) {
    let e = s()(h.userDiscountOffers[E.gW]),
      t = s()(h.userDiscountOffers[E.Nl]);
    return h.userDiscountOffers = {}, null != e ? h.userDiscountOffers[E.gW] = e : null != t && (h.userDiscountOffers[E.Nl] = t), h.userTrialOffers = {}, !0
  }
  return !1
}

function A() {
  let e = _.default.getCurrentUser();
  !(0, d.I5)(e) && Object.keys(h.userDiscountOffers).length > 0 && (0, u.Tf)(!0)
}

function m() {
  var e;
  let t = null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
  if (null == t) return !1;
  let n = Object.entries(l.Z.getRelevantReferralTrialOffers()).map(e => {
    let [t, n] = e;
    return n
  }).filter(e => e.user_id === t);
  if (n.length > 0) {
    let e = n[0];
    return h.userTrialOffers[e.trial_id] = e, !0
  }
  return !1
}
class O extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    h = null != e ? e : T, this.waitFor(_.default), this.syncWith([_.default], f), this.syncWith([c.ZP], N), this.syncWith([l.Z], m)
  }
  getUserTrialOffer(e) {
    if (null !== e) return h.userTrialOffers[e]
  }
  getUserDiscountOffer(e) {
    if (null !== e) return h.userDiscountOffers[e]
  }
  getAnyOfUserTrialOfferId(e) {
    for (let t of e)
      if (null != h.userTrialOffers[t]) return t;
    return null
  }
  hasFetchedOffer() {
    return null != h.userOffersLastFetchedAtDate
  }
  shouldFetchOffer() {
    let e = h.userOffersLastFetchedAtDate;
    return null == e || Date.now() - 1728e5 > e
  }
  shouldFetchAnnualOffer() {
    let e = h.userAnnualOfferLastFetchedAtDate;
    return null == e || Date.now() - 1728e5 > e
  }
  getAlmostExpiringTrialOffers(e) {
    let t = Object.values(E.nG).map(e => e.id),
      n = _.default.getCurrentUser();
    return (0, d.I5)(n) ? [] : Object.values(h.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + E.ff)
  }
  getAcknowledgedOffers(e) {
    let t = _.default.getCurrentUser();
    return (0, d.I5)(t) ? [] : Object.values(h.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
  }
  getUnacknowledgedDiscountOffers() {
    var e;
    let t = _.default.getCurrentUser();
    return (0, d.I5)(t) ? [] : Object.values(null !== (e = h.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at && !E.ee.includes(e.discount_id))
  }
  getUnacknowledgedOffers(e) {
    let t = _.default.getCurrentUser();
    return (0, d.I5)(t) ? [] : Object.values(h.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
  }
  hasAnyUnexpiredOffer() {
    return Object.values(h.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
  }
  getReferrer(e) {
    var t;
    return null == e ? null : null === (t = h.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer
  }
  getState() {
    return h
  }
  forceReset() {
    S()
  }
}
I(O, "displayName", "UserOfferStore"), I(O, "persistKey", "UserOfferStore"), I(O, "migrations", [e => {
  let t = null == e ? void 0 : e.userDiscounts;
  if (null != t) return {
    ...e,
    userDiscountOffers: t
  }
}, e => {
  if (null != e) return (null == e ? void 0 : e.userAnnualOfferLastFetchedAtDate) == null ? {
    ...e,
    userAnnualOfferLastFetchedAtDate: void 0
  } : e
}]), t.Z = new O(a.Z, {
  BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t ? h.userTrialOffers[t.trial_id] = t : S(), h.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
    let {
      userTrialOffer: t
    } = e;
    null != t ? h.userTrialOffers[t.trial_id] = t : h.userTrialOffers = {}, h.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
    let {
      userTrialOffer: t,
      userDiscount: n,
      userDiscountOffer: i
    } = e;
    null == t && null == n && null == i && S(), null != t ? (h.userTrialOffers[t.trial_id] = t, h.userDiscountOffers = {}) : null != n ? (h.userDiscountOffers[n.discount_id] = n, h.userTrialOffers = {}) : null != i && (h.userDiscountOffers[i.discount_id] = i, h.userTrialOffers = {}), h.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_ANNUAL_USER_OFFER_FETCH_SUCCESS: function(e) {
    let {
      userDiscountOffer: t
    } = e;
    delete h.userDiscountOffers[E.gW], delete h.userDiscountOffers[E.Nl], null != t && (h.userDiscountOffers[t.discount_id] = t), h.userAnnualOfferLastFetchedAtDate = Date.now()
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
    let {
      userTrialOffer: t,
      userDiscount: n,
      userDiscountOffer: i
    } = e;
    null != t ? h.userTrialOffers[t.trial_id] = t : h.userTrialOffers = {}, null != n ? h.userDiscountOffers[n.discount_id] = n : null != i ? h.userDiscountOffers[i.discount_id] = i : h.userDiscountOffers = {}, h.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_USER_OFFER_FETCH_FAIL: function() {
    S(), h.userOffersLastFetchedAtDate = Date.now()
  },
  BILLING_ANNUAL_USER_OFFER_FETCH_FAIL: function() {
    delete h.userDiscountOffers[E.gW], delete h.userDiscountOffers[E.Nl], h.userAnnualOfferLastFetchedAtDate = Date.now()
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: A,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: A,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: A,
  LOGOUT: S
})