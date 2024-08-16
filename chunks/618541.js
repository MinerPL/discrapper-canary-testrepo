let r, i;
n(411104);
var a,
    s,
    o,
    l,
    u = n(442837),
    c = n(544891),
    d = n(570140),
    _ = n(358085),
    E = n(981631);
let f = null,
    h = null,
    p = null;
(0, _.isDesktop)() &&
    (window.popupBridge = {
        getReturnUrlPrefix: () => {
            if (null == r) throw Error('popupBridgeState is unset');
            return (0, c.K0)() + E.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(E.gg$.BRAINTREE, r);
        },
        open: (e) => {
            (i = e), window.open(e), I.emitChange();
        }
    });
class m extends (a = u.ZP.Store) {
    getClient() {
        return f;
    }
    getPayPalClient() {
        return h;
    }
    getVenmoClient() {
        return p;
    }
    getLastURL() {
        return i;
    }
}
(l = 'BraintreeStore'),
    (o = 'displayName') in (s = m)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l);
let I = new m(d.Z, {
    BRAINTREE_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        f = t;
    },
    BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function (e) {
        let { paypalClient: t } = e;
        h = t;
    },
    BILLING_POPUP_BRIDGE_CALLBACK: function (e) {
        let { paymentSourceType: t, state: n, path: i, query: a } = e;
        if (t !== E.HeQ.PAYPAL || n !== r) return;
        let s = window.popupBridge.onComplete;
        'function' == typeof s &&
            s(null, {
                path: i,
                queryItems: a
            });
    },
    BILLING_POPUP_BRIDGE_STATE_UPDATE: function (e) {
        let { paymentSourceType: t, state: n } = e;
        t === E.HeQ.PAYPAL && (r = n);
    },
    BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function () {
        h = null;
    },
    BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function (e) {
        let { venmoClient: t } = e;
        p = t;
    },
    BRAINTREE_TEARDOWN_VENMO_CLIENT: function () {
        p = null;
    }
});
t.Z = I;
