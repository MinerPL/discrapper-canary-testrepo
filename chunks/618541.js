"use strict";
let i, r;
n(411104);
var s, o, a, l, u = n(442837),
  _ = n(544891),
  d = n(570140),
  c = n(358085),
  E = n(981631);
let I = null,
  T = null,
  h = null;
(0, c.isDesktop)() && (window.popupBridge = {
  getReturnUrlPrefix: () => {
    if (null == i) throw Error("popupBridgeState is unset");
    return (0, _.K0)() + E.ANM.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(E.gg$.BRAINTREE, i)
  },
  open: e => {
    r = e, window.open(e), f.emitChange()
  }
});
class S extends(s = u.ZP.Store) {
  getClient() {
    return I
  }
  getPayPalClient() {
    return T
  }
  getVenmoClient() {
    return h
  }
  getLastURL() {
    return r
  }
}
l = "BraintreeStore", (a = "displayName") in(o = S) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l;
let f = new S(d.Z, {
  BRAINTREE_CREATE_CLIENT_SUCCESS: function(e) {
    let {
      client: t
    } = e;
    I = t
  },
  BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS: function(e) {
    let {
      paypalClient: t
    } = e;
    T = t
  },
  BILLING_POPUP_BRIDGE_CALLBACK: function(e) {
    let {
      paymentSourceType: t,
      state: n,
      path: r,
      query: s
    } = e;
    if (t !== E.HeQ.PAYPAL || n !== i) return;
    let o = window.popupBridge.onComplete;
    "function" == typeof o && o(null, {
      path: r,
      queryItems: s
    })
  },
  BILLING_POPUP_BRIDGE_STATE_UPDATE: function(e) {
    let {
      paymentSourceType: t,
      state: n
    } = e;
    t === E.HeQ.PAYPAL && (i = n)
  },
  BRAINTREE_TEARDOWN_PAYPAL_CLIENT: function() {
    T = null
  },
  BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS: function(e) {
    let {
      venmoClient: t
    } = e;
    h = t
  },
  BRAINTREE_TEARDOWN_VENMO_CLIENT: function() {
    h = null
  }
});
t.Z = f