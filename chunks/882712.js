n.d(t, {
  I: function() {
return o;
  }
});
var r, i, u, l, o, E, a = n(442837),
  _ = n(570140),
  S = n(128069),
  s = n(38618);
(r = o || (o = {}))[r.UNKNOWN = 0] = 'UNKNOWN', r[r.PENDING = 1] = 'PENDING', r[r.SUCCESS = 2] = 'SUCCESS', r[r.ERROR = 3] = 'ERROR';
let A = 0,
  c = null,
  T = null;

function I(e) {
  let {
error: t
  } = e, n = t instanceof S.ZP ? t : new S.ZP(t);
  s.Z.isConnected() && n.code === S.ZP.ErrorCodes.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED && (A = 1);
}

function d() {
  A = 0, c = null, T = null;
}
class C extends(E = a.ZP.Store) {
  get purchaseTokenAuthState() {
return A;
  }
  get purchaseTokenHash() {
return c;
  }
  get expiresAt() {
return T;
  }
}
l = 'PurchaseTokenAuthStore', (u = 'displayName') in(i = C) ? Object.defineProperty(i, u, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[u] = l, t.Z = new C(_.Z, {
  SKU_PURCHASE_FAIL: I,
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: I,
  USER_PAYMENT_CLIENT_ADD: function(e) {
A = 2, c = e.purchaseTokenHash, T = e.expiresAt;
  },
  BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE: d,
  BILLING_SUBSCRIPTION_UPDATE_START: d,
  PAYMENT_AUTHENTICATION_CLEAR_ERROR: d,
  PREMIUM_PAYMENT_ERROR_CLEAR: d,
  PREMIUM_PAYMENT_MODAL_CLOSE: d,
  PREMIUM_PAYMENT_MODAL_OPEN: d,
  PREMIUM_PAYMENT_SUBSCRIBE_START: d,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: d,
  PREMIUM_PAYMENT_UPDATE_SUCCESS: d,
  SKU_PURCHASE_MODAL_CLOSE: d,
  SKU_PURCHASE_MODAL_OPEN: d,
  SKU_PURCHASE_START: d,
  SKU_PURCHASE_SUCCESS: d
});