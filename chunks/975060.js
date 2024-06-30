var r, i, u, l, o = n(442837), E = n(570140), a = n(622999);
let _ = '', S = null, s = '', A = null, c = !1, T = null, I = '', d = '', C = '', R = '', N = '', M = '', P = '', f = '', U = !1, L = null, O = null, h = null, p = null;
function m() {
    A = null, _ = '', S = null, s = '', c = !1, T = null, I = 'US', d = '', C = '', R = '', N = '', M = '', P = '', f = '', U = !1, L = null, O = null, h = null, p = null;
}
function Z(e) {
    d = e.name, I = e.country, R = e.line1, N = e.line2, M = e.city, P = e.postalCode, f = e.state, C = e.email;
}
function G() {
    L = null;
}
function D(e) {
    let {error: t} = e;
    L = t;
}
class B extends (l = o.ZP.Store) {
    get stripePaymentMethod() {
        return A;
    }
    get popupCallbackCalled() {
        return h;
    }
    get braintreeEmail() {
        return _;
    }
    get braintreeNonce() {
        return S;
    }
    get venmoUsername() {
        return s;
    }
    get redirectedPaymentId() {
        return O;
    }
    get adyenPaymentData() {
        return T;
    }
    get redirectedPaymentSourceId() {
        return p;
    }
    getCreditCardInfo() {
        return { name: d };
    }
    get isCardInfoValid() {
        return c;
    }
    getBillingAddressInfo() {
        return {
            name: d,
            email: C,
            country: I,
            line1: R,
            line2: N,
            city: M,
            postalCode: P,
            state: f
        };
    }
    get isBillingAddressInfoValid() {
        return U;
    }
    get error() {
        return L;
    }
}
u = 'NewPaymentSourceStore', (i = 'displayName') in (r = B) ? Object.defineProperty(r, i, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[i] = u, t.Z = new B(E.Z, {
    NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE: function (e) {
        let {stripePaymentMethod: t} = e;
        if (null == t) {
            m();
            return;
        }
        A = t;
        let {billingAddressInfo: n} = a.az(A);
        Z(n);
    },
    NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE: function (e) {
        let {
            info: t,
            isValid: n
        } = e;
        d = t.name, c = n;
    },
    NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE: function (e) {
        let {
            info: t,
            isValid: n
        } = e;
        null != t.name && '' !== t.name && (d = t.name), I = t.country, d = t.name, R = t.line1, N = t.line2, M = t.city, P = t.postalCode, f = t.state, C = t.email, U = n;
    },
    BRAINTREE_TOKENIZE_PAYPAL_START: function () {
        _ = '', S = null;
    },
    BRAINTREE_TOKENIZE_PAYPAL_SUCCESS: function (e) {
        let {
            email: t,
            nonce: n,
            billingAddress: r
        } = e;
        _ = t, S = n, Z(r), U = I.length > 0;
    },
    BRAINTREE_TOKENIZE_VENMO_START: function () {
        s = '', S = null;
    },
    BRAINTREE_TOKENIZE_VENMO_SUCCESS: function (e) {
        let {
            username: t,
            nonce: n
        } = e;
        s = t, S = n;
    },
    ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS: function (e) {
        let {data: t} = e;
        T = t;
    },
    BILLING_PAYMENT_SOURCE_CREATE_START: G,
    MODAL_POP: G,
    NEW_PAYMENT_SOURCE_CLEAR_ERROR: G,
    BILLING_PAYMENT_SOURCE_CREATE_FAIL: D,
    STRIPE_TOKEN_FAILURE: D,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: m,
    LOGOUT: m,
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let {query: t} = e;
        (null == t ? void 0 : t.payment_id) != null ? (h = !0, O = t.payment_id) : (null == t ? void 0 : t.payment_source_id) != null && (h = !0, p = t.payment_source_id);
    },
    RESET_PAYMENT_ID: function () {
        h = !1, O = null;
    }
});
