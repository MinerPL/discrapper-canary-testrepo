"use strict";
var a, n, i, l, r, u;
s.r(t), s.d(t, {
  RefundReason: function() {
    return a
  },
  PremiumRefundDisqualificationReason: function() {
    return n
  },
  AdyenResultCodes: function() {
    return i
  }
}), (l = a || (a = {}))[l.OTHER = 0] = "OTHER", l[l.GIFTING_REFUND = 1] = "GIFTING_REFUND", l[l.BUYERS_REMORSE = 2] = "BUYERS_REMORSE", l[l.WRONG_PURCHASE = 3] = "WRONG_PURCHASE", l[l.FORGOT_TO_CANCEL = 4] = "FORGOT_TO_CANCEL", l[l.SERVER_BOOSTING_COOLDOWN = 5] = "SERVER_BOOSTING_COOLDOWN", l[l.USER_CONFUSION = 6] = "USER_CONFUSION", l[l.WANT_TO_SWITCH_TIERS = 7] = "WANT_TO_SWITCH_TIERS", l[l.DONT_NEED = 8] = "DONT_NEED", (r = n || (n = {}))[r.OTHER = 0] = "OTHER", r[r.ALREADY_REFUNDED = 1] = "ALREADY_REFUNDED", r[r.NOT_USER_REFUNDABLE_TYPE = 2] = "NOT_USER_REFUNDABLE_TYPE", r[r.PAST_REFUNDABLE_DATE = 3] = "PAST_REFUNDABLE_DATE", r[r.ENTITLEMENT_ALREADY_CONSUMED = 4] = "ENTITLEMENT_ALREADY_CONSUMED", r[r.ALREADY_REFUNDED_PREMIUM = 5] = "ALREADY_REFUNDED_PREMIUM", r[r.ALREADY_REFUNDED_PREMIUM_GUILD = 6] = "ALREADY_REFUNDED_PREMIUM_GUILD", (u = i || (i = {})).Authorised = "Authorised", u.Error = "Error"