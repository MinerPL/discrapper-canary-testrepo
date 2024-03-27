"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("446674"),
  u = n("913144");
let i = {
    premiumLikelihood: void 0,
    isFetching: !1,
    fetched: !1
  },
  a = i;
class o extends r.default.Store {
  initialize() {
    a = i
  }
  getState() {
    return a
  }
  shouldFetchPremiumLikelihood() {
    return !a.isFetching && !a.fetched
  }
}
o.displayName = "UserPremiumLikelihoodStore";
var s = new o(u.default, {
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
    a.isFetching = !0
  },
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
    let {
      premiumLikelihood: t
    } = e;
    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
  },
  BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
    a.isFetching = !1
  },
  LOGOUT: function() {
    a.premiumLikelihood = void 0
  }
})