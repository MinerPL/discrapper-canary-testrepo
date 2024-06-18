"use strict";
n.d(t, {
  DE: function() {
    return I
  },
  gr: function() {
    return h
  },
  i1: function() {
    return E
  },
  tD: function() {
    return T
  }
}), n(47120);
var i = n(470079),
  r = n(512722),
  s = n.n(r),
  o = n(570140),
  a = n(821849),
  l = n(15640),
  u = n(509545),
  _ = n(74538),
  d = n(981631),
  c = n(474936);

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [...c.YQ];
  return null == e || u.Z.hasPaymentSourceForSKUIds(e, t) ? Promise.resolve() : new Promise(e => {
    o.Z.wait(async () => {
      await (0, a.Gn)(t), e()
    })
  })
}

function I(e, t, n) {
  let i, r = [],
    o = [],
    a = {
      purchaseType: n ? d.tuJ.GIFT : d.tuJ.DEFAULT
    };
  return i = "string" == typeof e ? u.Z.get(e) : e, s()(i, "subscription plan not loaded"), null != t && u.Z.hasPaymentSourceForSKUId(t, i.skuId) && (a.paymentSourceId = t), (r = (o = (0, _.T4)(i.id, a)).map(e => e.currency)).length < 1 && (r = [d.pKx.USD]), r
}

function T(e, t, n) {
  let i = u.Z.get(e);
  return s()(null != i, "plan is undefined"), I(i, n, !1).includes(t)
}

function h(e, t, n, r, s) {
  let [o, a] = i.useReducer((e, t) => ({
    ...e,
    ...t
  }), null != n ? {
    paymentSourceId: n,
    currency: e,
    loaded: !1
  } : {
    currency: e,
    loaded: !1
  }), _ = (0, l.V)(s);
  i.useEffect(() => {
    (async () => {
      await E(n, s);
      let e = [];
      null != t && null != u.Z.get(t) && (e = I(t, n, r)), e.length > 0 ? a({
        paymentSourceId: n,
        currency: e[0],
        loaded: !0
      }) : a({
        paymentSourceId: n,
        loaded: !1
      })
    })()
  }, [n, JSON.stringify(s), t, r, _]);
  let d = o.paymentSourceId !== n || null == t || !_ || !0 !== o.loaded;
  return {
    hasFetchedSubscriptionPlans: _,
    priceOptions: o,
    setCurrency: e => {
      a({
        currency: e
      })
    },
    currencyLoading: d
  }
}