n.d(t, {
    SM: function () {
        return r;
    },
    yD: function () {
        return T;
    }
}),
    n(47120);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(544891),
    _ = n(34756),
    E = n(689938);
function f(e, t, n) {
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
((o = r || (r = {}))[(o.UNKNOWN = 0)] = 'UNKNOWN'), (o[(o.UNKNOWN_BILLING_PROFILE = 100001)] = 'UNKNOWN_BILLING_PROFILE'), (o[(o.UNKNOWN_PAYMENT_SOURCE = 100002)] = 'UNKNOWN_PAYMENT_SOURCE'), (o[(o.UNKNOWN_SUBSCRIPTION = 100003)] = 'UNKNOWN_SUBSCRIPTION'), (o[(o.ALREADY_SUBSCRIBED = 100004)] = 'ALREADY_SUBSCRIBED'), (o[(o.INVALID_PLAN = 100005)] = 'INVALID_PLAN'), (o[(o.PAYMENT_SOURCE_REQUIRED = 100006)] = 'PAYMENT_SOURCE_REQUIRED'), (o[(o.ALREADY_CANCELED = 100007)] = 'ALREADY_CANCELED'), (o[(o.INVALID_PAYMENT = 100008)] = 'INVALID_PAYMENT'), (o[(o.ALREADY_REFUNDED = 100009)] = 'ALREADY_REFUNDED'), (o[(o.INVALID_BILLING_ADDRESS = 100010)] = 'INVALID_BILLING_ADDRESS'), (o[(o.ALREADY_PURCHASED = 100011)] = 'ALREADY_PURCHASED'), (o[(o.DUPLICATE_PURCHASE_ATTEMPT = 100012)] = 'DUPLICATE_PURCHASE_ATTEMPT'), (o[(o.BILLING_PURCHASE_REQUEST_INVALID = 100017)] = 'BILLING_PURCHASE_REQUEST_INVALID'), (o[(o.NEGATIVE_INVOICE_AMOUNT = 100027)] = 'NEGATIVE_INVOICE_AMOUNT'), (o[(o.AUTHENTICATION_REQUIRED = 100029)] = 'AUTHENTICATION_REQUIRED'), (o[(o.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042)] = 'SUBSCRIPTION_RENEWAL_IN_PROGRESS'), (o[(o.CONFIRMATION_REQUIRED = 100047)] = 'CONFIRMATION_REQUIRED'), (o[(o.CARD_DECLINED = 100054)] = 'CARD_DECLINED'), (o[(o.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097)] = 'INVALID_GIFT_REDEMPTION_FRAUD_REJECTED'), (o[(o.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056)] = 'PURCHASE_TOKEN_AUTHORIZATION_REQUIRED'), (o[(o.INVALID_PAYMENT_SOURCE = 50048)] = 'INVALID_PAYMENT_SOURCE'), (o[(o.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051)] = 'INVALID_CURRENCY_FOR_PAYMENT_SOURCE'), (o[(o.BILLING_APPLE_SERVER_API_ERROR = 100070)] = 'BILLING_APPLE_SERVER_API_ERROR'), (o[(o.BILLING_TRIAL_REDEMPTION_DISABLED = 100078)] = 'BILLING_TRIAL_REDEMPTION_DISABLED'), (o[(o.BILLING_PAUSE_DISABLED = 100079)] = 'BILLING_PAUSE_DISABLED'), (o[(o.BILLING_PAUSE_PENDING_ALREADY_SET = 100080)] = 'BILLING_PAUSE_PENDING_ALREADY_SET'), (o[(o.BILLING_PAUSE_NOT_ELIGIBLE = 100081)] = 'BILLING_PAUSE_NOT_ELIGIBLE'), (o[(o.BILLING_PAUSE_INVALID_INTERVAL = 100082)] = 'BILLING_PAUSE_INVALID_INTERVAL'), (o[(o.BILLING_ALREADY_PAUSED = 100083)] = 'BILLING_ALREADY_PAUSED'), (o[(o.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = 100084)] = 'BILLING_CANNOT_CHARGE_ZERO_AMOUNT'), (o[(o.BILLING_BUNDLE_ALREADY_PURCHASED = 100096)] = 'BILLING_BUNDLE_ALREADY_PURCHASED'), (o[(o.BILLING_BUNDLE_PARTIALLY_OWNED = 100097)] = 'BILLING_BUNDLE_PARTIALLY_OWNED'), ((l = i || (i = {})).CARD_NUMBER = 'cardNumber'), (l.CARD_CVC = 'cvc'), (l.CARD_EXPIRATION_DATE = 'expirationDate'), (l.CARD_NAME = 'name'), (l.ADDRESS_NAME = 'name'), (l.ADDRESS_LINE_1 = 'line1'), (l.ADDRESS_LINE_2 = 'line2'), (l.ADDRESS_CITY = 'city'), (l.ADDRESS_STATE = 'state'), (l.ADDRESS_POSTAL_CODE = 'postalCode'), (l.ADDRESS_COUNTRY = 'country'), ((u = a || (a = {})).ADDRESS_LINE_1 = 'address_line1'), (u.ADDRESS_LINE_2 = 'address_line2'), (u.ADDRESS_CITY = 'address_city'), (u.ADDRESS_STATE = 'address_state'), (u.ADDRESS_ZIP = 'address_zip'), (u.ADDRESS_COUNTRY = 'address_country'), (u.CARD_NUMBER = 'number'), (u.CARD_EXPIRATION_DATE = 'exp'), (u.CARD_EXPIRATION_MONTH = 'exp_month'), (u.CARD_EXPIRATION_YEAR = 'exp_year');
let h = Object.freeze({
        address_line1: 'line1',
        address_line2: 'line2',
        address_city: 'city',
        address_state: 'state',
        address_zip: 'postalCode',
        address_country: 'country',
        number: 'cardNumber',
        exp: 'expirationDate',
        exp_month: 'expirationDate',
        exp_year: 'expirationDate'
    }),
    p = Object.freeze({
        line_1: 'line1',
        line_2: 'line2',
        postal_code: 'postalCode'
    });
((c = s || (s = {})).CARD = 'card'), (c.ADDRESS = 'address');
let m = new Set(['cardNumber', 'cvc', 'expirationDate', 'name']),
    I = new Set(['name', 'line1', 'line2', 'city', 'state', 'postalCode', 'country']);
function T(e) {
    var t, n, r, i, a;
    if ('string' != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === d.f$) {
        if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : null === (r = i.errors) || void 0 === r ? void 0 : r.billing_address) != null) {
            for (let t in e.body.errors.billing_address) {
                let n = e.body.errors.billing_address[t];
                delete e.body.errors.billing_address[t], (e.body.errors[t] = n);
            }
            delete e.body.errors.billing_address;
        }
        (null === (a = e.body) || void 0 === a ? void 0 : a.errors) != null && (e.body = (0, d.J9)(e.body.errors));
    }
    return new g(e);
}
class g extends _.Z {
    _isInFieldSet(e) {
        for (let t in this.fields) if (e.has(t)) return !0;
    }
    hasCardError() {
        return this._isInFieldSet(m);
    }
    hasAddressError() {
        return this._isInFieldSet(I);
    }
    constructor(e, t) {
        for (let n in (super(e, t), f(this, 'paymentId', null), 100027 === this.code ? (this.message = E.Z.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT) : 50048 === this.code ? (this.message = E.Z.Messages.BILLING_PAYMENT_SOURCE_INVALID) : 100002 === this.code ? (this.message = E.Z.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE) : 100042 === this.code ? (this.message = E.Z.Messages.BILLING_ERROR_PENDING_PAYMENT) : 100078 === this.code ? (this.message = E.Z.Messages.BILLING_TRIAL_REDEMPTION_DISABLED) : 100096 === this.code ? (this.message = E.Z.Messages.BILLING_BUNDLE_ALREADY_PURCHASED) : 100097 === this.code ? (this.message = E.Z.Messages.BILLING_BUNDLE_PARTIALLY_OWNED) : 429 === this.status ? (this.message = E.Z.Messages.BILLING_ERROR_RATE_LIMIT) : 0 === this.code ? (this.message = E.Z.Messages.BILLING_ERROR_GENERIC) : 400 === this.status && null != this.fields.captcha_key && (this.message = E.Z.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields)) {
            let e = h[n] || p[n];
            if (null != e) {
                let t = this.fields[n];
                delete this.fields[n], (this.fields[e] = t);
            }
        }
        null != e.body && 'string' == typeof e.body.payment_id && (this.paymentId = e.body.payment_id);
    }
}
f(g, 'ErrorCodes', r), f(g, 'Fields', i), f(g, 'Sections', s), f(g, 'CARD_ERRORS', m), f(g, 'ADDRESS_ERRORS', I), (t.ZP = g);
