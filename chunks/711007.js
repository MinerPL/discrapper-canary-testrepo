"use strict";
n.r(t), n.d(t, {
  usePurchaseTokenAuthStep: function() {
    return a
  }
});
var u = n("470079"),
  l = n("409813"),
  i = n("882712");

function a(e, t, n) {
  u.useEffect(() => {
    null != e && e !== l.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === i.PurchaseTokenAuthState.PENDING ? n(l.Step.AWAITING_PURCHASE_TOKEN_AUTH) : e === l.Step.AWAITING_PURCHASE_TOKEN_AUTH && t === i.PurchaseTokenAuthState.SUCCESS && n(l.Step.REVIEW)
  }, [e, t, n])
}