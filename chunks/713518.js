"use strict";
n.r(t), n.d(t, {
  fetchSubscriptionPlansOnNewPaymentSource: function() {
    return E
  },
  getCurrencies: function() {
    return _
  },
  planHasCurrency: function() {
    return S
  },
  useCurrencyWithPaymentSourceChange: function() {
    return I
  }
}), n("222007");
var u = n("884691"),
  r = n("627445"),
  i = n.n(r),
  a = n("913144"),
  o = n("775433"),
  s = n("308592"),
  c = n("10514"),
  l = n("719923"),
  d = n("49111"),
  f = n("646718");

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...f.ACTIVE_PREMIUM_SKUS];
  return null == e || c.default.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    a.default.wait(async () => {
      await (0, o.fetchSubscriptionPlansBySKUs)(t), e()
    })
  })
}

function _(e, t, n) {
  let u, r = [],
    a = [],
    o = {
      purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return i(u = "string" == typeof e ? c.default.get(e) : e, "subscription plan not loaded"), null != t && c.default.hasPaymentSourceForSKUId(t, u.skuId) && (o.paymentSourceId = t), (r = (a = (0, l.experimentalGetPrices)(u.id, o)).map(e => e.currency)).length < 1 && (r = [d.CurrencyCodes.USD]), r
}

function S(e, t, n) {
  let u = c.default.get(e);
  i(null != u, "plan is undefined");
  let r = _(u, n, !1);
  return r.includes(t)
}

function I(e, t, n, r, i) {
  let [a, o] = u.useReducer((e, t) => ({
    ...e,
    ...t
  }), null != n ? {
    paymentSourceId: n,
    currency: e,
    loaded: !1
  } : {
    currency: e,
    loaded: !1
  }), l = (0, s.useSubscriptionPlansLoaded)(i);
  u.useEffect(() => {
    let e = async () => {
      await E(n, i);
      let e = [];
      null != t && null != c.default.get(t) && (e = _(t, n, r)), e.length > 0 ? o({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : o({
        paymentSourceId: n,
        loaded: !1
      })
    };
    e()
  }, [n, JSON.stringify(i), t, r, l]);
  let d = a.paymentSourceId !== n || null == t || !l || !0 !== a.loaded;
  return {
    hasFetchedSubscriptionPlans: l,
    priceOptions: a,
    setCurrency: e => {
      o({
        currency: e
      })
    },
    currencyLoading: d
  }
}