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
var r = n("884691"),
  u = n("627445"),
  i = n.n(u),
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
  let r, u = [],
    a = [],
    o = {
      purchaseType: n ? d.PriceSetAssignmentPurchaseTypes.GIFT : d.PriceSetAssignmentPurchaseTypes.DEFAULT
    };
  return i(r = "string" == typeof e ? c.default.get(e) : e, "subscription plan not loaded"), null != t && c.default.hasPaymentSourceForSKUId(t, r.skuId) && (o.paymentSourceId = t), (u = (a = (0, l.experimentalGetPrices)(r.id, o)).map(e => e.currency)).length < 1 && (u = [d.CurrencyCodes.USD]), u
}

function S(e, t, n) {
  let r = c.default.get(e);
  i(null != r, "plan is undefined");
  let u = _(r, n, !1);
  return u.includes(t)
}

function I(e, t, n, u, i) {
  let [a, o] = r.useReducer((e, t) => ({
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
  r.useEffect(() => {
    let e = async () => {
      await E(n, i);
      let e = [];
      null != t && null != c.default.get(t) && (e = _(t, n, u)), e.length > 0 ? o({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : o({
        paymentSourceId: n,
        loaded: !1
      })
    };
    e()
  }, [n, JSON.stringify(i), t, u, l]);
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