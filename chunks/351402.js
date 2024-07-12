let r, i, a, o;
var s, l, u, c, d = n(442837),
  _ = n(570140),
  E = n(542974),
  f = n(981631);
let h = !1,
  p = !1,
  m = !1,
  I = !1,
  T = !1,
  g = null,
  S = null,
  A = !1,
  N = !1;

function v() {
  h = !1;
}

function O() {
  r = void 0;
}

function R() {
  I = !1;
}

function C() {
  T = !0;
}

function y() {
  T = !1;
}
class D extends(c = d.ZP.Store) {
  get isBusy() {
return h || p || T || m;
  }
  get isUpdatingPaymentSource() {
return p;
  }
  get isRemovingPaymentSource() {
return m;
  }
  get isSyncing() {
return this.isPaymentSourceFetching || this.isSubscriptionFetching;
  }
  get isSubscriptionFetching() {
return I;
  }
  get isPaymentSourceFetching() {
return null != r;
  }
  get editSourceError() {
return g;
  }
  get removeSourceError() {
return S;
  }
  get ipCountryCodeLoaded() {
return void 0 !== i;
  }
  get ipCountryCode() {
return i;
  }
  get ipCountryCodeRequest() {
return a;
  }
  get ipCountryCodeWithFallback() {
return null != i ? i : f.OMz;
  }
  get ipCountryCodeHasError() {
return A;
  }
  get paymentSourcesFetchRequest() {
return r;
  }
  get localizedPricingPromo() {
return o;
  }
  get localizedPricingPromoHasError() {
return N;
  }
  get isLocalizedPromoEnabled() {
return null != o;
  }
}
u = 'BillingInfoStore', (l = 'displayName') in(s = D) ? Object.defineProperty(s, l, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = u, t.Z = new D(_.Z, {
  BILLING_PAYMENT_SOURCE_CREATE_START: function() {
h = !0;
  },
  BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: v,
  BILLING_PAYMENT_SOURCE_CREATE_FAIL: v,
  STRIPE_TOKEN_FAILURE: v,
  BILLING_PAYMENT_SOURCE_REMOVE_START: function() {
m = !0;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function() {
m = !1;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_FAIL: function(e) {
let {
  error: t
} = e;
m = !1, S = t;
  },
  BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR: function() {
S = null;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_START: function() {
p = !0;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: function() {
p = !1;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_FAIL: function(e) {
let {
  error: t
} = e;
p = !1, g = t;
  },
  BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR: function() {
g = null;
  },
  BILLING_PAYMENT_SOURCES_FETCH_START: function(e) {
let {
  request: t
} = e;
r = t;
  },
  BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: O,
  BILLING_PAYMENT_SOURCES_FETCH_FAIL: O,
  BILLING_SUBSCRIPTION_FETCH_START: function() {
I = !0;
  },
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: R,
  BILLING_SUBSCRIPTION_FETCH_FAIL: R,
  BILLING_SUBSCRIPTION_UPDATE_START: C,
  BILLING_SUBSCRIPTION_CANCEL_START: C,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: y,
  BILLING_SUBSCRIPTION_UPDATE_FAIL: y,
  BILLING_SUBSCRIPTION_CANCEL_FAIL: y,
  BILLING_SUBSCRIPTION_CANCEL_SUCCESS: y,
  BILLING_IP_COUNTRY_CODE_FETCH_START: function(e) {
let {
  request: t
} = e;
a = t;
  },
  BILLING_SET_IP_COUNTRY_CODE: function(e) {
let {
  countryCode: t
} = e;
i = t;
  },
  BILLING_IP_COUNTRY_CODE_FAILURE: function() {
i = null, A = !0;
  },
  BILLING_SET_LOCALIZED_PRICING_PROMO: function(e) {
let {
  localizedPricingPromo: t
} = e;
o = E.U.createFromServer(t);
  },
  BILLING_LOCALIZED_PRICING_PROMO_FAILURE: function() {
o = null, N = !0;
  },
  LOGOUT: function() {
r = void 0, a = void 0, i = void 0, A = !1, o = null, S = null, g = null;
  },
  CONNECTION_OPEN: e => {
let {
  countryCode: t
} = e;
null != t && (i = t);
  }
});