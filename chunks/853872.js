n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(46141);
let c = {},
    d = null,
    _ = !1;
function E(e) {
    let { paymentSource: t } = e;
    (c = {
        ...c,
        [t.id]: t
    }),
        (t.isDefault || 1 === Object.keys(c).length) && (d = t.id);
}
class f extends (r = o.ZP.Store) {
    get paymentSources() {
        return c;
    }
    get paymentSourceIds() {
        return Object.keys(c);
    }
    get defaultPaymentSourceId() {
        return d;
    }
    get defaultPaymentSource() {
        return null != d ? c[d] : null;
    }
    get hasFetchedPaymentSources() {
        return _;
    }
    getDefaultBillingCountryCode() {
        let e = this.defaultPaymentSource;
        return null == e ? null : e.paymentMethodCountry;
    }
    getPaymentSource(e) {
        return c[e];
    }
}
(s = 'PaymentSourceStore'),
    (a = 'displayName') in (i = f)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new f(l.Z, {
        BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: E,
        BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: E,
        BILLING_PAYMENT_SOURCE_FETCH_SUCCESS: E,
        BILLING_PAYMENT_SOURCES_FETCH_SUCCESS: function (e) {
            let { paymentSources: t } = e;
            for (let e of ((c = {}), (d = null), t)) (c[e.id] = u.ZP.createFromServer(e)), e.default && (d = e.id);
            null == d && t.length > 0 && (d = t[0].id), (_ = !0);
        },
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: function (e) {
            let { id: t } = e;
            if (((c = { ...c }), delete c[t], d === t)) {
                let e = Object.keys(c);
                d = 0 === e.length ? null : e[0];
            }
        },
        LOGOUT: function () {
            (c = {}), (d = null), (_ = !1);
        }
    }));
