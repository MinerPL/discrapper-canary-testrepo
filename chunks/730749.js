"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250),
  r = n(470079),
  s = n(626135);

function o(e) {
  var t;
  let n = r.forwardRef((t, n) => (0, i.jsx)(s.AnalyticsContext.Consumer, {
    children: r => (0, i.jsx)(e, {
      ...t,
      ref: n,
      analyticsContext: r
    })
  }));
  return n.displayName = "withAnalyticsContext(".concat(null !== (t = e.displayName) && void 0 !== t ? t : e.name, ")"), n
}