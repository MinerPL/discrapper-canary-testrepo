"use strict";
s.r(t), s.d(t, {
  usePaymentModalAnimationScene: function() {
    return i
  }
}), s("47120");
var n = s("470079"),
  r = s("409813"),
  a = s("45572");

function i(e) {
  let {
    purchaseState: t,
    currentStep: s,
    initialScene: i,
    purchaseScene: l,
    errorScene: u,
    successScene: o
  } = e, [c, d] = (0, n.useState)(i);
  return (0, n.useEffect)(() => {
    t === a.PurchaseState.PURCHASING ? d(l) : t === a.PurchaseState.FAIL && d(u)
  }, [t, l, u]), (0, n.useEffect)(() => {
    s === r.Step.CONFIRM && d(o)
  }, [s, o]), [c, d]
}