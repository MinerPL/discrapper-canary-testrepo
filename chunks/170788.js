"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("884691"),
  n = s("866227"),
  l = s.n(n),
  i = s("888400");
let r = l.duration(30, "days");

function o(e, t) {
  return a.useMemo(() => (0, i.dateFormat)(t ? null != e.outboundRedemptionEndDate ? l(e.outboundRedemptionEndDate) : l(e.endDate).add(r) : l(e.endDate), "LL"), [e, t])
}