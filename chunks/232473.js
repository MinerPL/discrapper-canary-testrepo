"use strict";
s.r(t), s.d(t, {
  getPaymentPayoutGroups: function() {
    return n
  }
});
var a = s("544891"),
  l = s("981631");
let n = async (e, t) => (await a.HTTP.get({
  url: l.Endpoints.PAYMENT_PAYOUT_GROUPS(e),
  query: t
})).body