"use strict";
n.d(t, {
  B1: function() {
    return A
  },
  DR: function() {
    return c
  },
  F$: function() {
    return h
  },
  K$: function() {
    return m
  },
  fK: function() {
    return N
  },
  jr: function() {
    return f
  },
  mK: function() {
    return d
  },
  oK: function() {
    return E
  },
  oc: function() {
    return T
  },
  qg: function() {
    return S
  }
});
var i = n(544891),
  r = n(570140),
  s = n(37234),
  o = n(881052);
n(777639);
var a = n(549616),
  l = n(778787),
  u = n(161226),
  _ = n(981631);
n(597688), n(574709), n(1870), n(328347);
let d = e => {
    let {
      openInLayer: t = !0,
      ...n
    } = e;
    r.Z.dispatch({
      type: "COLLECTIBLES_SHOP_OPEN",
      ...n
    });
    t && (0, s.jN)(_.S9g.COLLECTIBLES_SHOP)
  },
  c = () => {
    r.Z.dispatch({
      type: "COLLECTIBLES_SHOP_CLOSE"
    }), (0, s.xf)()
  },
  E = e => {
    r.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
      item: e
    })
  },
  I = (e, t) => !!e == !!t,
  T = (e, t) => I(null == e ? void 0 : e.noCache, null == t ? void 0 : t.noCache) && I(null == e ? void 0 : e.includeUnpublished, null == t ? void 0 : t.includeUnpublished) && I(null == e ? void 0 : e.includeBundles, null == t ? void 0 : t.includeBundles) && (null == e ? void 0 : e.countryCode) === (null == t ? void 0 : t.countryCode) && (null == e ? void 0 : e.paymentGateway) === (null == t ? void 0 : t.paymentGateway),
  h = async e => {
    r.Z.dispatch({
      type: "COLLECTIBLES_CATEGORIES_FETCH",
      options: null != e ? e : {}
    });
    let t = {};
    null != e && (!0 === e.noCache && (t.no_cache = !0), !0 === e.includeUnpublished && (t.include_unpublished = !0), !0 === e.includeBundles && (t.include_bundles = !0), null != e.countryCode && (t.country_code = e.countryCode), null !== e.paymentGateway && (t.payment_gateway = e.paymentGateway));
    try {
      let e = await i.tn.get({
        url: _.ANM.COLLECTIBLES_CATEGORIES,
        query: t
      });
      r.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
        categories: e.body.map(a.Z.fromServer)
      })
    } catch (e) {
      throw r.Z.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
        error: e
      }), new o.Hx(e)
    }
  }, S = async () => {
    r.Z.dispatch({
      type: "COLLECTIBLES_PURCHASES_FETCH"
    });
    try {
      let e = await i.tn.get(_.ANM.COLLECTIBLES_PURCHASES);
      r.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
        purchases: e.body.map(u.Z.fromServer)
      })
    } catch (e) {
      throw r.Z.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
        error: e
      }), new o.Hx(e)
    }
  }, f = async (e, t) => {
    r.Z.dispatch({
      type: "COLLECTIBLES_PRODUCT_FETCH",
      skuId: e
    });
    try {
      let n = {};
      (null == t ? void 0 : t.countryCode) !== null && (n.country_code = null == t ? void 0 : t.countryCode), (null == t ? void 0 : t.paymentGateway) !== null && (n.payment_gateway = null == t ? void 0 : t.paymentGateway);
      let s = await i.tn.get({
        url: _.ANM.COLLECTIBLES_PRODUCTS(e),
        query: n
      });
      r.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        skuId: e,
        product: l.Z.fromServer(s.body)
      })
    } catch (t) {
      throw r.Z.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
        skuId: e,
        error: t
      }), new o.Hx(t)
    }
  }, N = async e => {
    r.Z.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: e
    });
    try {
      var t;
      let n = await i.tn.put({
        url: _.ANM.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        }
      });
      r.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(u.Z.fromServer)
      })
    } catch (t) {
      throw r.Z.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), new o.Hx(t)
    }
  }, A = async (e, t) => {
    try {
      return (await i.tn.get({
        url: _.ANM.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        }
      })).body.valid
    } catch (e) {
      throw new o.Hx(e)
    }
  }, m = e => {
    r.Z.dispatch({
      type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
      ...e
    })
  }