t.d(a, {
  Dz: function() {
return E;
  },
  Nj: function() {
return A;
  },
  RS: function() {
return N;
  },
  by: function() {
return p;
  },
  eI: function() {
return u;
  },
  f6: function() {
return _;
  },
  gy: function() {
return h;
  },
  i0: function() {
return T;
  },
  ib: function() {
return d;
  },
  og: function() {
return I;
  }
}), t(411104), t(47120);
var n = t(544891),
  r = t(570140),
  s = t(618541),
  l = t(751767),
  o = t(358085),
  i = t(355467),
  c = t(981631);

function u() {
  (0, l.S)().then(e => {
e.client.create({
  authorization: c.Ai1.BRAINTREE.KEY
}).then(e => {
  r.Z.dispatch({
    type: 'BRAINTREE_CREATE_CLIENT_SUCCESS',
    client: e
  }), E(), d();
}).catch(() => r.Z.dispatch({
  type: 'BRAINTREE_CREATE_CLIENT_FAIL'
}));
  });
}

function d() {
  let e = s.Z.getClient();
  if (null == e)
throw Error('Braintree client must be initialized before creating Venmo client.');
  (0, l.S)().then(a => {
a.venmo.create({
  client: e,
  allowDesktop: !0,
  paymentMethodUsage: 'multi_use'
}).then(e => {
  r.Z.dispatch({
    type: 'BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS',
    venmoClient: e
  });
}).catch(() => {
  r.Z.dispatch({
    type: 'BRAINTREE_CREATE_VENMO_CLIENT_FAIL'
  });
});
  });
}

function E() {
  let e = s.Z.getClient();
  if (null == e)
throw Error('braintree client must be initialized before calling this');
  (0, l.S)().then(a => {
a.paypal.create({
  client: e
}).then(e => {
  if (null == e._navigateFrameToAuth)
    throw Error('braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?');
  e._navigateFrameToAuth = function(e) {
    let a = this._formatPaymentResourceData(e);
    return n.tn.post({
      url: c.ANM.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
      oldFormErrors: !0,
      body: {
        return_url: a.returnUrl,
        cancel_url: a.cancelUrl
      }
    }).then(e => {
      let {
        body: {
          token: a
        }
      } = e;
      this._frameService.redirect(function(e) {
        let a = c.Ai1.BRAINTREE.KEY.startsWith('production_') ? 'https://www.paypal.com' : 'https://sandbox.paypal.com';
        return ''.concat(a, '/agreements/approve?nolegacy=1&ba_token=').concat(e);
      }(a));
    }).catch(e => (this._frameService.close(), this._authorizationInProgress = !1, Promise.reject(Error(e.body && e.body.message))));
  }, r.Z.dispatch({
    type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS',
    paypalClient: e
  });
}).catch(() => r.Z.dispatch({
  type: 'BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL'
}));
  });
}

function _() {
  let e = s.Z.getPayPalClient();
  if (null == e)
throw Error('braintree paypal client must be initialized before calling this');
  r.Z.dispatch({
type: 'BRAINTREE_TOKENIZE_PAYPAL_START'
  });
  let a = Promise.resolve('');
  (0, o.isDesktop)() && (a = (0, i.EH)(c.HeQ.PAYPAL)), a.then(() => e.tokenize({
flow: 'vault'
  })).then(e => {
let {
  email: a,
  firstName: t,
  lastName: n,
  billingAddress: s
} = e.details;
r.Z.dispatch({
  type: 'BRAINTREE_TOKENIZE_PAYPAL_SUCCESS',
  nonce: e.nonce,
  email: a,
  billingAddress: {
    name: ''.concat(t, ' ').concat(n),
    line1: s.line1,
    line2: s.line2,
    city: s.city,
    state: s.state,
    country: s.countryCode,
    postalCode: s.postalCode
  }
});
  }).catch(e => {
let {
  message: a,
  code: t
} = e;
t === c.U66.PAYPAL_POPUP_CLOSED || null == t ? r.Z.dispatch({
  type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED'
}) : r.Z.dispatch({
  type: 'BRAINTREE_TOKENIZE_PAYPAL_FAIL',
  message: a,
  code: t
});
  });
}

function p() {
  let e = s.Z.getVenmoClient();
  if (null == e)
throw Error('Braintree Venmo client must be initialized before calling tokenize.');
  r.Z.dispatch({
type: 'BRAINTREE_TOKENIZE_VENMO_START'
  }), e.tokenize().then(e => {
let {
  username: a
} = e.details;
r.Z.dispatch({
  type: 'BRAINTREE_TOKENIZE_VENMO_SUCCESS',
  nonce: e.nonce,
  username: a
});
  }).catch(e => {
let {
  message: a,
  code: t
} = e;
t === c.U66.VENMO_APP_CANCELED || t === c.U66.VENMO_CANCELED ? r.Z.dispatch({
  type: 'BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED'
}) : r.Z.dispatch({
  type: 'BRAINTREE_TOKENIZE_VENMO_FAIL',
  message: a,
  code: t
});
  });
}

function m(e, a) {
  if (null == e)
return Promise.resolve();
  r.Z.dispatch(a);
  try {
return Promise.resolve(e.teardown());
  } catch (e) {
return Promise.resolve();
  }
}

function A() {
  return m(s.Z.getPayPalClient(), {
type: 'BRAINTREE_TEARDOWN_PAYPAL_CLIENT'
  });
}

function N() {
  return m(s.Z.getVenmoClient(), {
type: 'BRAINTREE_TEARDOWN_VENMO_CLIENT'
  });
}

function h() {
  return Promise.all([
A(),
N()
  ]);
}

function T() {
  let e = s.Z.getLastURL();
  null == e ? _() : (r.Z.dispatch({
type: 'BRAINTREE_TOKENIZE_PAYPAL_START'
  }), window.open(e));
}

function I() {
  p();
}