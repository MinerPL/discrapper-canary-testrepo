"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var u = n("563132");

function l() {
  let {
    step: e,
    stepConfigs: t
  } = (0, u.usePaymentContext)(), n = t.find(t => t.key === e);
  return null == n ? void 0 : n.options
}