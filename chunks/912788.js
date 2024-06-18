"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(881052);
let _ = null,
  d = null,
  c = null;

function E(e) {
  let {
    error: t
  } = e;
  _ = t
}

function I() {
  _ = null
}
class T extends(o = a.ZP.Store) {
  get paymentError() {
    return _
  }
  getGiftCode(e) {
    return e === c ? d : null
  }
}
s = "PremiumPaymentModalStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new T(l.Z, {
  PREMIUM_PAYMENT_SUBSCRIBE_FAIL: E,
  PREMIUM_PAYMENT_UPDATE_FAIL: E,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: function() {
    I()
  },
  PREMIUM_PAYMENT_UPDATE_SUCCESS: I,
  PREMIUM_PAYMENT_ERROR_CLEAR: I,
  BRAINTREE_TOKENIZE_PAYPAL_FAIL: function(e) {
    let {
      message: t,
      code: n
    } = e;
    _ = new u.HF(t, n)
  },
  BRAINTREE_TOKENIZE_VENMO_FAIL: function(e) {
    let {
      message: t,
      code: n
    } = e;
    _ = new u.HF(t, n)
  },
  SKU_PURCHASE_SUCCESS: function(e) {
    d = e.giftCode, c = e.skuId
  },
  SKU_PURCHASE_FAIL: function(e) {
    _ = e.error
  },
  SKU_PURCHASE_AWAIT_CONFIRMATION: function(e) {
    e.isGift && (c = e.skuId)
  },
  GIFT_CODE_CREATE: function(e) {
    let {
      giftCode: t
    } = e;
    if (0 !== t.uses || t.sku_id !== c) return !1;
    d = t.code
  }
})