n(411104);
var i,
    a,
    s,
    r,
    l,
    o,
    c,
    d,
    u,
    _ = n(735250),
    E = n(470079);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((o = i || (i = {})).THING = 'Thing'), (o.PERSON = 'Person'), (o.PRODUCT = 'Product'), (o.OFFER = 'Offer'), (o.AGGREGATE_OFFER = 'AggregateOffer'), (o.RATING = 'Rating'), (o.AGGREGATE_RATING = 'AggregateRating'), (o.ORGANIZATION = 'Organization'), (o.ITEM_PAGE = 'ItemPage'), (o.UNIT_PRICE_SPECIFICATION = 'UnitPriceSpecification'), (o.QUANTITATIVE_VALUE = 'QuantitativeValue');
function m(e, t) {
    return {
        '@type': e,
        ...(function e(t) {
            return (
                Object.keys(t).forEach((n) => {
                    null == t[n] ? delete t[n] : 'object' == typeof t[n] && (t[n] = e(t[n]));
                }),
                t
            );
        })(
            (function (e) {
                let t;
                try {
                    t = JSON.parse(JSON.stringify(e));
                } catch (e) {
                    throw Error('[JSONLD] Invalid object format');
                }
                return t;
            })(t)
        )
    };
}
function I(e) {
    return m('Thing', e);
}
function g(e) {
    return m('Product', e);
}
g.Image = function (e) {
    if (null == e) return null;
    let t = e.filter((e) => null != e && '' !== e);
    return 0 === t.length ? null : 1 === t.length ? t[0] : t;
};
function p(e) {
    return m('Offer', e);
}
function T(e) {
    return m('QuantitativeValue', e);
}
((c = a || (a = {})).DAMAGED = 'http://schema.org/DamagedCondition'), (c.NEW = 'http://schema.org/NewCondition'), (c.REFURBISHED = 'http://schema.org/RefurbishedCondition'), (c.USED = 'http://schema.org/UsedCondition'), ((d = s || (s = {})).DISCONTINUED = 'http://schema.org/Discontinued'), (d.IN_STOCK = 'http://schema.org/InStock'), (d.IN_STORE_ONLY = 'http://schema.org/InStoreOnly'), (d.LIMITED_AVAILABILITY = 'http://schema.org/LimitedAvailability'), (d.ONLINE_ONLY = 'http://schema.org/OnlineOnly'), (d.OUT_OF_STOCK = 'http://schema.org/OutOfStock'), (d.PREORDER = 'http://schema.org/PreOrder'), (d.PRESALE = 'http://schema.org/PreSale'), (d.SOLD_OUT = 'http://schema.org/SoldOut'), (p.ItemConditions = a), (p.ItemAvailability = s), ((u = r || (r = {})).YEARLY = 'ANN'), (u.MONTHLY = 'MON'), (T.UnitCodes = r);
class S extends (l = E.Component) {
    render() {
        let { debug: e, data: t } = this.props,
            n = JSON.stringify({
                '@context': 'http://schema.org',
                ...t
            });
        return (0, _.jsx)('script', {
            type: 'application/ld+json',
            children: n
        });
    }
}
h(S, 'Thing', I),
    h(S, 'Brand', I),
    h(S, 'Person', function (e) {
        return m('Person', e);
    }),
    h(S, 'Organization', function (e) {
        return m('Organization', e);
    }),
    h(S, 'ItemPage', function (e) {
        return m('ItemPage', e);
    }),
    h(S, 'Product', g),
    h(S, 'Offer', p),
    h(S, 'Rating', function (e) {
        return m('Rating', e);
    }),
    h(S, 'AggregateRating', function (e) {
        return m('AggregateRating', e);
    }),
    h(S, 'AggregateOffer', function (e) {
        return m('AggregateOffer', e);
    }),
    h(S, 'QuantitativeValue', T),
    h(S, 'UnitPriceSpecification', function (e) {
        return m('UnitPriceSpecification', e);
    }),
    (t.Z = S);
