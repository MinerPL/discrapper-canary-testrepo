"use strict";
a.r(t), a.d(t, {
  createClient: function() {
    return i
  },
  createPayPalClient: function() {
    return E
  },
  createVenmoClient: function() {
    return d
  },
  reopenPayPalWindow: function() {
    return N
  },
  reopenVenmoWindow: function() {
    return S
  },
  teardownClients: function() {
    return T
  },
  teardownPaypal: function() {
    return _
  },
  teardownVenmo: function() {
    return A
  },
  tokenizePayPal: function() {
    return p
  },
  tokenizeVenmo: function() {
    return f
  }
}), a("411104"), a("47120");
var n = a("544891"),
  s = a("570140"),
  r = a("618541"),
  l = a("751767"),
  o = a("358085"),
  u = a("355467"),
  c = a("981631");

function i() {
  (0, l.getBraintreeSDK)().then(e => {
    e.client.create({
      authorization: c.PaymentSettings.BRAINTREE.KEY
    }).then(e => {
      s.default.dispatch({
        type: "BRAINTREE_CREATE_CLIENT_SUCCESS",
        client: e
      }), E(), d()
    }).catch(() => s.default.dispatch({
      type: "BRAINTREE_CREATE_CLIENT_FAIL"
    }))
  })
}

function d() {
  let e = r.default.getClient();
  if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
  (0, l.getBraintreeSDK)().then(t => {
    t.venmo.create({
      client: e,
      allowDesktop: !0,
      paymentMethodUsage: "multi_use"
    }).then(e => {
      s.default.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS",
        venmoClient: e
      })
    }).catch(() => {
      s.default.dispatch({
        type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL"
      })
    })
  })
}

function E() {
  let e = r.default.getClient();
  if (null == e) throw Error("braintree client must be initialized before calling this");
  (0, l.getBraintreeSDK)().then(t => {
    t.paypal.create({
      client: e
    }).then(e => {
      if (null == e._navigateFrameToAuth) throw Error("braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?");
      e._navigateFrameToAuth = function(e) {
        let t = this._formatPaymentResourceData(e);
        return n.HTTP.post({
          url: c.Endpoints.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
          oldFormErrors: !0,
          body: {
            return_url: t.returnUrl,
            cancel_url: t.cancelUrl
          }
        }).then(e => {
          let {
            body: {
              token: t
            }
          } = e;
          this._frameService.redirect(function(e) {
            let t = c.PaymentSettings.BRAINTREE.KEY.startsWith("production_") ? "https://www.paypal.com" : "https://sandbox.paypal.com";
            return "".concat(t, "/agreements/approve?nolegacy=1&ba_token=").concat(e)
          }(t))
        }).catch(e => (this._frameService.close(), this._authorizationInProgress = !1, Promise.reject(Error(e.body && e.body.message))))
      }, s.default.dispatch({
        type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS",
        paypalClient: e
      })
    }).catch(() => s.default.dispatch({
      type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL"
    }))
  })
}

function p() {
  let e = r.default.getPayPalClient();
  if (null == e) throw Error("braintree paypal client must be initialized before calling this");
  s.default.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  });
  let t = Promise.resolve("");
  (0, o.isDesktop)() && (t = (0, u.popupBridgeState)(c.PaymentSourceTypes.PAYPAL)), t.then(() => e.tokenize({
    flow: "vault"
  })).then(e => {
    let {
      email: t,
      firstName: a,
      lastName: n,
      billingAddress: r
    } = e.details;
    s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
      nonce: e.nonce,
      email: t,
      billingAddress: {
        name: "".concat(a, " ").concat(n),
        line1: r.line1,
        line2: r.line2,
        city: r.city,
        state: r.state,
        country: r.countryCode,
        postalCode: r.postalCode
      }
    })
  }).catch(e => {
    let {
      message: t,
      code: a
    } = e;
    a === c.BraintreeErrors.PAYPAL_POPUP_CLOSED || null == a ? s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED"
    }) : s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL",
      message: t,
      code: a
    })
  })
}

function f() {
  let e = r.default.getVenmoClient();
  if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
  s.default.dispatch({
    type: "BRAINTREE_TOKENIZE_VENMO_START"
  }), e.tokenize().then(e => {
    let {
      username: t
    } = e.details;
    s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS",
      nonce: e.nonce,
      username: t
    })
  }).catch(e => {
    let {
      message: t,
      code: a
    } = e;
    a === c.BraintreeErrors.VENMO_APP_CANCELED || a === c.BraintreeErrors.VENMO_CANCELED ? s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED"
    }) : s.default.dispatch({
      type: "BRAINTREE_TOKENIZE_VENMO_FAIL",
      message: t,
      code: a
    })
  })
}

function m(e, t) {
  if (null == e) return Promise.resolve();
  s.default.dispatch(t);
  try {
    return Promise.resolve(e.teardown())
  } catch (e) {
    return Promise.resolve()
  }
}

function _() {
  return m(r.default.getPayPalClient(), {
    type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT"
  })
}

function A() {
  return m(r.default.getVenmoClient(), {
    type: "BRAINTREE_TEARDOWN_VENMO_CLIENT"
  })
}

function T() {
  return Promise.all([_(), A()])
}

function N() {
  let e = r.default.getLastURL();
  null == e ? p() : (s.default.dispatch({
    type: "BRAINTREE_TOKENIZE_PAYPAL_START"
  }), window.open(e))
}

function S() {
  f()
}