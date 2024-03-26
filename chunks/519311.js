"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("70102");
var a, r, i, n, l, o, u, d, c = s("37983"),
  _ = s("884691");
(l = a || (a = {})).THING = "Thing", l.PERSON = "Person", l.PRODUCT = "Product", l.OFFER = "Offer", l.AGGREGATE_OFFER = "AggregateOffer", l.RATING = "Rating", l.AGGREGATE_RATING = "AggregateRating", l.ORGANIZATION = "Organization", l.ITEM_PAGE = "ItemPage", l.UNIT_PRICE_SPECIFICATION = "UnitPriceSpecification", l.QUANTITATIVE_VALUE = "QuantitativeValue";

function E(e, t) {
  return {
    "@type": e,
    ... function(e) {
      let t = function(e) {
        let t;
        try {
          t = JSON.parse(JSON.stringify(e))
        } catch (e) {
          throw Error("[JSONLD] Invalid object format")
        }
        return t
      }(e);
      return function e(t) {
        return Object.keys(t).forEach(s => {
          null == t[s] ? delete t[s] : "object" == typeof t[s] && (t[s] = e(t[s]))
        }), t
      }(t)
    }(t)
  }
}

function T(e) {
  return E("Thing", e)
}

function I(e) {
  return E("Product", e)
}
I.Image = function(e) {
  if (null == e) return null;
  let t = e.filter(e => null != e && "" !== e);
  return 0 === t.length ? null : 1 === t.length ? t[0] : t
};

function f(e) {
  return E("Offer", e)
}

function S(e) {
  return E("QuantitativeValue", e)
}(o = r || (r = {})).DAMAGED = "http://schema.org/DamagedCondition", o.NEW = "http://schema.org/NewCondition", o.REFURBISHED = "http://schema.org/RefurbishedCondition", o.USED = "http://schema.org/UsedCondition", (u = i || (i = {})).DISCONTINUED = "http://schema.org/Discontinued", u.IN_STOCK = "http://schema.org/InStock", u.IN_STORE_ONLY = "http://schema.org/InStoreOnly", u.LIMITED_AVAILABILITY = "http://schema.org/LimitedAvailability", u.ONLINE_ONLY = "http://schema.org/OnlineOnly", u.OUT_OF_STOCK = "http://schema.org/OutOfStock", u.PREORDER = "http://schema.org/PreOrder", u.PRESALE = "http://schema.org/PreSale", u.SOLD_OUT = "http://schema.org/SoldOut", f.ItemConditions = r, f.ItemAvailability = i, (d = n || (n = {})).YEARLY = "ANN", d.MONTHLY = "MON", S.UnitCodes = n;
class R extends _.Component {
  render() {
    let {
      debug: e,
      data: t
    } = this.props, s = JSON.stringify({
      "@context": "http://schema.org",
      ...t
    });
    return (0, c.jsx)("script", {
      type: "application/ld+json",
      children: s
    })
  }
}
R.Thing = T, R.Brand = T, R.Person = function(e) {
  return E("Person", e)
}, R.Organization = function(e) {
  return E("Organization", e)
}, R.ItemPage = function(e) {
  return E("ItemPage", e)
}, R.Product = I, R.Offer = f, R.Rating = function(e) {
  return E("Rating", e)
}, R.AggregateRating = function(e) {
  return E("AggregateRating", e)
}, R.AggregateOffer = function(e) {
  return E("AggregateOffer", e)
}, R.QuantitativeValue = S, R.UnitPriceSpecification = function(e) {
  return E("UnitPriceSpecification", e)
};
var m = R