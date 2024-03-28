"use strict";
a.r(t), a.d(t, {
  acceptEULA: function() {
    return n
  },
  acceptPurchaseTerms: function() {
    return l
  }
});
var s = a("570140");

function l() {
  s.default.dispatch({
    type: "APPLICATION_STORE_ACCEPT_STORE_TERMS"
  })
}

function n(e) {
  s.default.dispatch({
    type: "APPLICATION_STORE_ACCEPT_EULA",
    eulaId: e
  })
}