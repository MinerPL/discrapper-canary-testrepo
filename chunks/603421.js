"use strict";
a.r(t), a.d(t, {
  Steps: function() {
    return s
  },
  canGoBack: function() {
    return c
  },
  errorToStep: function() {
    return o
  },
  getCrumbLabels: function() {
    return l
  },
  getStepIndex: function() {
    return u
  }
});
var n, s, r = a("689938");

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  return ({
    payment_type: () => r.default.Messages.BILLING_STEP_PAYMENT_TYPE,
    payment_request_info: () => r.default.Messages.BILLING_STEP_PAYMENT_INFO,
    paypal: () => r.default.Messages.BILLING_STEP_PAYPAL,
    paypal_address: () => r.default.Messages.BILLING_STEP_ADDRESS,
    venmo: () => r.default.Messages.BILLING_STEP_VENMO,
    venmo_address: () => r.default.Messages.BILLING_STEP_ADDRESS,
    credit_card_information: () => r.default.Messages.BILLING_STEP_CREDIT_CARD_INFORMATION,
    address: () => r.default.Messages.BILLING_STEP_ADDRESS,
    review: () => r.default.Messages.BILLING_STEP_REVIEW,
    select_plan: () => r.default.Messages.BILLING_STEP_SELECT_PLAN,
    awaiting_authentication: () => r.default.Messages.BILLING_STEP_AWAITING_AUTHENTICATION,
    confirm: () => "",
    ...t
  })[e]()
}

function o(e) {
  if (null != e) {
    if (e.hasCardError()) return "credit_card_information";
    if (e.hasAddressError()) return "address"
  }
  return null
}

function u(e, t) {
  return t.findIndex(t => t === e)
}

function c(e, t) {
  return e > 0 || Object.keys(t).length > 0
}(n = s || (s = {})).SELECT_PLAN = "select_plan", n.PAYMENT_TYPE = "payment_type", n.PAYPAL = "paypal", n.PAYPAL_ADDRESS = "paypal_address", n.PAYMENT_REQUEST_INFO = "payment_request_info", n.CREDIT_CARD_INFORMATION = "credit_card_information", n.ADDRESS = "address", n.REVIEW = "review", n.CONFIRM = "confirm", n.AWAITING_AUTHENTICATION = "awaiting_authentication", n.VENMO = "venmo", n.VENMO_ADDRESS = "venmo_address"