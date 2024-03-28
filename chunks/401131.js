"use strict";
n.r(t), n.d(t, {
  closePurchaseConfirmationModal: function() {
    return i
  },
  openPurchaseConfirmationModal: function() {
    return l
  }
});
var s = n("570140"),
  a = n("981631");

function l(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  return new Promise((i, r) => {
    s.default.dispatch({
      type: "PURCHASE_CONFIRMATION_MODAL_OPEN",
      applicationId: e,
      skuId: t,
      entitlements: n,
      context: null != l.context ? l.context : a.AppContext.APP,
      analyticsSource: l.analyticsSource,
      resolve: i,
      reject: r
    })
  })
}

function i() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
  s.default.dispatch({
    type: "PURCHASE_CONFIRMATION_MODAL_CLOSE",
    error: e
  })
}