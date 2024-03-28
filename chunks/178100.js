"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("470079"),
  n = s("913527"),
  l = s.n(n),
  i = s("55935");
let r = l().duration(30, "days");

function o(e, t) {
  return a.useMemo(() => (0, i.dateFormat)(t ? null != e.outboundRedemptionEndDate ? l()(e.outboundRedemptionEndDate) : l()(e.endDate).add(r) : l()(e.endDate), "LL"), [e, t])
}