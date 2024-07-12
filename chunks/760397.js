n(411104);
var i, s, a, r, l, o, c, d, u, _ = n(735250),
  h = n(470079);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(o = i || (i = {})).THING = 'Thing', o.PERSON = 'Person', o.PRODUCT = 'Product', o.OFFER = 'Offer', o.AGGREGATE_OFFER = 'AggregateOffer', o.RATING = 'Rating', o.AGGREGATE_RATING = 'AggregateRating', o.ORGANIZATION = 'Organization', o.ITEM_PAGE = 'ItemPage', o.UNIT_PRICE_SPECIFICATION = 'UnitPriceSpecification', o.QUANTITATIVE_VALUE = 'QuantitativeValue';

function I(e, t) {
  return {
'@type': e,
... function e(t) {
  return Object.keys(t).forEach(n => {
    null == t[n] ? delete t[n] : 'object' == typeof t[n] && (t[n] = e(t[n]));
  }), t;
}(function(e) {
  let t;
  try {
    t = JSON.parse(JSON.stringify(e));
  } catch (e) {
    throw Error('[JSONLD] Invalid object format');
  }
  return t;
}(t))
  };
}

function m(e) {
  return I('Thing', e);
}

function g(e) {
  return I('Product', e);
}
g.Image = function(e) {
  if (null == e)
return null;
  let t = e.filter(e => null != e && '' !== e);
  return 0 === t.length ? null : 1 === t.length ? t[0] : t;
};

function p(e) {
  return I('Offer', e);
}

function T(e) {
  return I('QuantitativeValue', e);
}
(c = s || (s = {})).DAMAGED = 'http://schema.org/DamagedCondition', c.NEW = 'http://schema.org/NewCondition', c.REFURBISHED = 'http://schema.org/RefurbishedCondition', c.USED = 'http://schema.org/UsedCondition', (d = a || (a = {})).DISCONTINUED = 'http://schema.org/Discontinued', d.IN_STOCK = 'http://schema.org/InStock', d.IN_STORE_ONLY = 'http://schema.org/InStoreOnly', d.LIMITED_AVAILABILITY = 'http://schema.org/LimitedAvailability', d.ONLINE_ONLY = 'http://schema.org/OnlineOnly', d.OUT_OF_STOCK = 'http://schema.org/OutOfStock', d.PREORDER = 'http://schema.org/PreOrder', d.PRESALE = 'http://schema.org/PreSale', d.SOLD_OUT = 'http://schema.org/SoldOut', p.ItemConditions = s, p.ItemAvailability = a, (u = r || (r = {})).YEARLY = 'ANN', u.MONTHLY = 'MON', T.UnitCodes = r;
class S extends(l = h.Component) {
  render() {
let {
  debug: e,
  data: t
} = this.props, n = JSON.stringify({
  '@context': 'http://schema.org',
  ...t
});
return (0, _.jsx)('script', {
  type: 'application/ld+json',
  children: n
});
  }
}
E(S, 'Thing', m), E(S, 'Brand', m), E(S, 'Person', function(e) {
  return I('Person', e);
}), E(S, 'Organization', function(e) {
  return I('Organization', e);
}), E(S, 'ItemPage', function(e) {
  return I('ItemPage', e);
}), E(S, 'Product', g), E(S, 'Offer', p), E(S, 'Rating', function(e) {
  return I('Rating', e);
}), E(S, 'AggregateRating', function(e) {
  return I('AggregateRating', e);
}), E(S, 'AggregateOffer', function(e) {
  return I('AggregateOffer', e);
}), E(S, 'QuantitativeValue', T), E(S, 'UnitPriceSpecification', function(e) {
  return I('UnitPriceSpecification', e);
}), t.Z = S;