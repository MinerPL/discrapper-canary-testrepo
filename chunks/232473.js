"use strict";
t.d(s, {
  C: function() {
    return l
  }
});
var n = t(544891),
  i = t(981631);
let l = async (e, s) => (await n.tn.get({
  url: i.ANM.PAYMENT_PAYOUT_GROUPS(e),
  query: s
})).body