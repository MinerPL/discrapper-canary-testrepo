"use strict";
s.r(t), s("411104");
var a, i, r, n, l, o, u, d, c, _ = s("735250"),
  E = s("470079");

function T(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(o = a || (a = {})).THING = "Thing", o.PERSON = "Person", o.PRODUCT = "Product", o.OFFER = "Offer", o.AGGREGATE_OFFER = "AggregateOffer", o.RATING = "Rating", o.AGGREGATE_RATING = "AggregateRating", o.ORGANIZATION = "Organization", o.ITEM_PAGE = "ItemPage", o.UNIT_PRICE_SPECIFICATION = "UnitPriceSpecification", o.QUANTITATIVE_VALUE = "QuantitativeValue";

function I(e, t) {
  return {
    "@type": e,
    ... function e(t) {
      return Object.keys(t).forEach(s => {
        null == t[s] ? delete t[s] : "object" == typeof t[s] && (t[s] = e(t[s]))
      }), t
    }(function(e) {
      let t;
      try {
        t = JSON.parse(JSON.stringify(e))
      } catch (e) {
        throw Error("[JSONLD] Invalid object format")
      }
      return t
    }(t))
  }
}

function R(e) {
  return I("Thing", e)
}

function S(e) {
  return I("Product", e)
}
S.Image = function(e) {
  if (null == e) return null;
  let t = e.filter(e => null != e && "" !== e);
  return 0 === t.length ? null : 1 === t.length ? t[0] : t
};

function f(e) {
  return I("Offer", e)
}

function m(e) {
  return I("QuantitativeValue", e)
}(u = i || (i = {})).DAMAGED = "http://schema.org/DamagedCondition", u.NEW = "http://schema.org/NewCondition", u.REFURBISHED = "http://schema.org/RefurbishedCondition", u.USED = "http://schema.org/UsedCondition", (d = r || (r = {})).DISCONTINUED = "http://schema.org/Discontinued", d.IN_STOCK = "http://schema.org/InStock", d.IN_STORE_ONLY = "http://schema.org/InStoreOnly", d.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", d.ONLINE_ONLY = "http://schema.org/OnlineOnly", d.OUT_OF_STOCK = "http://schema.org/OutOfStock", d.PREORDER = "http://schema.org/PreOrder", d.PRESALE = "http://schema.org/PreSale", d.SOLD_OUT = "http://schema.org/SoldOut", f.ItemConditions = i, f.ItemAvailability = r, (c = n || (n = {})).YEARLY = "ANN", c.MONTHLY = "MON", m.UnitCodes = n;
class N extends(l = E.Component) {
  render() {
    let {
      debug: e,
      data: t
    } = this.props, s = JSON.stringify({
      "@context": "http://schema.org",
      ...t
    });
    return (0, _.jsx)("script", {
      type: "application/ld+json",
      children: s
    })
  }
}
T(N, "Thing", R), T(N, "Brand", R), T(N, "Person", function(e) {
  return I("Person", e)
}), T(N, "Organization", function(e) {
  return I("Organization", e)
}), T(N, "ItemPage", function(e) {
  return I("ItemPage", e)
}), T(N, "Product", S), T(N, "Offer", f), T(N, "Rating", function(e) {
  return I("Rating", e)
}), T(N, "AggregateRating", function(e) {
  return I("AggregateRating", e)
}), T(N, "AggregateOffer", function(e) {
  return I("AggregateOffer", e)
}), T(N, "QuantitativeValue", m), T(N, "UnitPriceSpecification", function(e) {
  return I("UnitPriceSpecification", e)
}), t.default = N