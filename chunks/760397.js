n(411104);
var i, s, a, r, l, o, c, d, u, _ = n(735250), E = n(470079);
function h(e, t, n) {
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
        ...function e(t) {
            return Object.keys(t).forEach(n => {
                null == t[n] ? delete t[n] : 'object' == typeof t[n] && (t[n] = e(t[n]));
            }), t;
        }(function (e) {
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
function p(e) {
    return I('Product', e);
}
p.Image = function (e) {
    if (null == e)
        return null;
    let t = e.filter(e => null != e && '' !== e);
    return 0 === t.length ? null : 1 === t.length ? t[0] : t;
};
function g(e) {
    return I('Offer', e);
}
function T(e) {
    return I('QuantitativeValue', e);
}
(c = s || (s = {})).DAMAGED = 'http://schema.org/DamagedCondition', c.NEW = 'http://schema.org/NewCondition', c.REFURBISHED = 'http://schema.org/RefurbishedCondition', c.USED = 'http://schema.org/UsedCondition', (d = a || (a = {})).DISCONTINUED = 'http://schema.org/Discontinued', d.IN_STOCK = 'http://schema.org/InStock', d.IN_STORE_ONLY = 'http://schema.org/InStoreOnly', d.LIMITED_AVAILABILITY = 'http://schema.org/LimitedAvailability', d.ONLINE_ONLY = 'http://schema.org/OnlineOnly', d.OUT_OF_STOCK = 'http://schema.org/OutOfStock', d.PREORDER = 'http://schema.org/PreOrder', d.PRESALE = 'http://schema.org/PreSale', d.SOLD_OUT = 'http://schema.org/SoldOut', g.ItemConditions = s, g.ItemAvailability = a, (u = r || (r = {})).YEARLY = 'ANN', u.MONTHLY = 'MON', T.UnitCodes = r;
class S extends (l = E.Component) {
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
h(S, 'Thing', m), h(S, 'Brand', m), h(S, 'Person', function (e) {
    return I('Person', e);
}), h(S, 'Organization', function (e) {
    return I('Organization', e);
}), h(S, 'ItemPage', function (e) {
    return I('ItemPage', e);
}), h(S, 'Product', p), h(S, 'Offer', g), h(S, 'Rating', function (e) {
    return I('Rating', e);
}), h(S, 'AggregateRating', function (e) {
    return I('AggregateRating', e);
}), h(S, 'AggregateOffer', function (e) {
    return I('AggregateOffer', e);
}), h(S, 'QuantitativeValue', T), h(S, 'UnitPriceSpecification', function (e) {
    return I('UnitPriceSpecification', e);
}), t.Z = S;
