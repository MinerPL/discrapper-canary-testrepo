n(47120);
var r, i = n(442837),
  a = n(570140),
  s = n(276444),
  o = n(937579),
  l = n(594174),
  u = n(74538),
  c = n(78839),
  d = n(474936);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let E = {
userOffersLastFetchedAtDate: void 0,
userAnnualOfferLastFetchedAtDate: void 0,
userTrialOffers: {},
userDiscountOffers: {},
userDiscounts: void 0,
isFetching: !1
  },
  f = E;

function h() {
  f.userTrialOffers = {}, f.userDiscountOffers = {}, f.userOffersLastFetchedAtDate = void 0, f.userAnnualOfferLastFetchedAtDate = void 0, f.isFetching = !1;
}
let p = () => !0;

function m() {
  return null != c.ZP.getPremiumTypeSubscription() && (f.userDiscountOffers = {}, f.userTrialOffers = {}, !0);
}

function I() {
  let e = l.default.getCurrentUser();
  !(0, u.I5)(e) && Object.keys(f.userDiscountOffers).length > 0 && (0, o.T)('UserOfferStore', !0);
}

function T() {
  var e;
  let t = null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id;
  if (null == t)
return !1;
  let n = Object.entries(s.Z.getRelevantReferralTrialOffers()).map(e => {
let [t, n] = e;
return n;
  }).filter(e => e.user_id === t);
  if (n.length > 0) {
let e = n[0];
return f.userTrialOffers[e.trial_id] = e, !0;
  }
  return !1;
}
class g extends(r = i.ZP.PersistedStore) {
  initialize(e) {
f = null != e ? e : E, this.waitFor(l.default), this.syncWith([l.default], p), this.syncWith([c.ZP], m), this.syncWith([s.Z], T);
  }
  getUserTrialOffer(e) {
if (null !== e)
  return f.userTrialOffers[e];
  }
  getUserDiscountOffer(e) {
if (null !== e)
  return f.userDiscountOffers[e];
  }
  getAnyOfUserTrialOfferId(e) {
for (let t of e)
  if (null != f.userTrialOffers[t])
    return t;
return null;
  }
  hasFetchedOffer() {
return null != f.userOffersLastFetchedAtDate;
  }
  shouldFetchOffer() {
var e;
let t = f.userOffersLastFetchedAtDate,
  n = null !== (e = f.isFetching) && void 0 !== e && e;
return null == t ? !n : !n && Date.now() - 172800000 > t;
  }
  shouldFetchAnnualOffer() {
let e = f.userAnnualOfferLastFetchedAtDate;
return null == e || Date.now() - 172800000 > e;
  }
  getAlmostExpiringTrialOffers(e) {
let t = Object.values(d.nG).map(e => e.id),
  n = l.default.getCurrentUser();
return (0, u.I5)(n) ? [] : Object.values(f.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + d.ff);
  }
  getAcknowledgedOffers(e) {
let t = l.default.getCurrentUser();
return (0, u.I5)(t) ? [] : Object.values(f.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at);
  }
  getUnacknowledgedDiscountOffers() {
var e;
let t = l.default.getCurrentUser();
return (0, u.I5)(t) ? [] : Object.values(null !== (e = f.userDiscountOffers) && void 0 !== e ? e : {}).filter(e => null == e.expires_at && !d.ee.includes(e.discount_id));
  }
  getUnacknowledgedOffers(e) {
let t = l.default.getCurrentUser();
return (0, u.I5)(t) ? [] : Object.values(f.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at);
  }
  hasAnyUnexpiredOffer() {
return Object.values(f.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
  }
  hasAnyUnexpiredDiscountOffer() {
return Object.values(f.userDiscountOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now());
  }
  getReferrer(e) {
var t;
return null == e ? null : null === (t = f.userTrialOffers[e]) || void 0 === t ? void 0 : t.referrer;
  }
  getState() {
return f;
  }
  forceReset() {
h();
  }
}
_(g, 'displayName', 'UserOfferStore'), _(g, 'persistKey', 'UserOfferStore'), _(g, 'migrations', [
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
  },
  e => {
if (null != e)
  return (null == e ? void 0 : e.isFetching) == null ? {
    ...e,
    isFetching: !1
  } : e;
  }
]), t.Z = new g(a.Z, {
  BILLING_USER_OFFER_FETCH_START: function() {
f.isFetching = !0;
  },
  BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: function(e) {
let {
  userTrialOffer: t
} = e;
null != t ? f.userTrialOffers[t.trial_id] = t : h(), f.userOffersLastFetchedAtDate = Date.now(), f.isFetching = !1;
  },
  BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
let {
  userTrialOffer: t
} = e;
null != t ? f.userTrialOffers[t.trial_id] = t : f.userTrialOffers = {}, f.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_SUCCESS: function(e) {
let {
  userTrialOffer: t,
  userDiscount: n,
  userDiscountOffer: r
} = e;
null == t && null == n && null == r && h(), null != t ? (f.userTrialOffers[t.trial_id] = t, f.userDiscountOffers = {}) : null != n ? (f.userDiscountOffers[n.discount_id] = n, f.userTrialOffers = {}) : null != r && (f.userDiscountOffers[r.discount_id] = r, f.userTrialOffers = {}), f.userOffersLastFetchedAtDate = Date.now(), f.isFetching = !1;
  },
  BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: function(e) {
let {
  userTrialOffer: t,
  userDiscount: n,
  userDiscountOffer: r
} = e;
null != t ? f.userTrialOffers[t.trial_id] = t : f.userTrialOffers = {}, null != n ? f.userDiscountOffers[n.discount_id] = n : null != r ? f.userDiscountOffers[r.discount_id] = r : f.userDiscountOffers = {}, f.userOffersLastFetchedAtDate = Date.now();
  },
  BILLING_USER_OFFER_FETCH_FAIL: function() {
h(), f.userOffersLastFetchedAtDate = Date.now(), f.isFetching = !1;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: I,
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: I,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: I,
  LOGOUT: h
});