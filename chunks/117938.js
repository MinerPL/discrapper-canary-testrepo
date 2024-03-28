"use strict";
s.r(t), s.d(t, {
  getBillingAddressLayout: function() {
    return i
  },
  getOverrideBillingAddressLayout: function() {
    return r
  }
});
var a = s("873546"),
  n = s("464179"),
  l = s("981631");
let i = e => [l.PaymentSourceTypes.CARD, l.PaymentSourceTypes.VENMO].includes(e.type) && "US" === e.country ? a.isMobile ? n.default.Layouts.SETTINGS_US_MOBILE : n.default.Layouts.SETTINGS_US : e.type === l.PaymentSourceTypes.CARD && "US" !== e.country ? a.isMobile ? n.default.Layouts.SETTINGS_INTL_MOBILE : n.default.Layouts.SETTINGS_INTL : a.isMobile ? n.default.Layouts.SETTINGS_INTL_NO_NAME_MOBILE : n.default.Layouts.SETTINGS_INTL_NO_NAME,
  r = a.isMobile ? n.default.Layouts.SETTINGS_US_MOBILE : n.default.Layouts.SETTINGS_US