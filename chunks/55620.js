"use strict";
n.r(t), n.d(t, {
  fetchAllStoreListingsForApplication: function() {
    return d
  },
  fetchStoreListingForSku: function() {
    return f
  },
  fetchStoreListingById: function() {
    return p
  },
  fetchStoreListingForApplication: function() {
    return h
  },
  matureAgree: function() {
    return S
  },
  matureDisagree: function() {
    return m
  },
  joinPublishedStoreListingSkuGuild: function() {
    return _
  },
  goToSKUStoreListing: function() {
    return I
  },
  goToApplicationStoreListing: function() {
    return E
  }
});
var i = n("872717"),
  r = n("913144"),
  l = n("84460");
n("299285");
var a = n("393414"),
  s = n("552712");
n("698041");
var o = n("167726"),
  u = n("271560"),
  c = n("49111");

function d(e) {
  return (0, u.httpGetWithCountryCodeQuery)({
    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKUS,
    query: {
      application_id: e
    },
    oldFormErrors: !0
  }).then(e => (r.default.dispatch({
    type: "STORE_LISTINGS_FETCH_SUCCESS",
    storeListings: e.body
  }), e.body))
}

function f(e) {
  let t = s.default.get(e),
    n = null != t && (o.default.inTestModeForApplication(t.applicationId) || l.default.inDevModeForApplication(t.applicationId));
  return (0, u.httpGetWithCountryCodeQuery)(n ? c.Endpoints.STORE_LISTINGS_SKU(e) : c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU(e)).then(e => {
    n ? r.default.dispatch({
      type: "STORE_LISTINGS_FETCH_SUCCESS",
      storeListings: e.body
    }) : r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function p(e) {
  return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_LISTING(e)).then(e => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function h(e) {
  return (0, u.httpGetWithCountryCodeQuery)(c.Endpoints.STORE_PUBLISHED_LISTINGS_APPLICATION(e)).then(e => {
    r.default.dispatch({
      type: "STORE_LISTING_FETCH_SUCCESS",
      storeListing: e.body
    })
  })
}

function S() {
  r.default.dispatch({
    type: "APPLICATION_STORE_MATURE_AGREE"
  })
}

function m() {
  (0, a.transitionTo)(c.Routes.APPLICATION_STORE)
}

function _(e) {
  return i.default.post({
    url: c.Endpoints.STORE_PUBLISHED_LISTINGS_SKU_JOIN_GUILD(e),
    oldFormErrors: !0
  })
}

function I(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, u.getStoreListingLocation)(e, t);
  (0, a.transitionTo)(n, i)
}

function E(e, t) {
  let {
    pathname: n,
    ...i
  } = (0, u.getApplicationStoreListingLocation)(e, t);
  (0, a.transitionTo)(n, i)
}