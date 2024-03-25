"use strict";
s.r(t), s.d(t, {
  formatMetricTrend: function() {
    return n
  },
  formatNextPaymentDate: function() {
    return i
  }
});
var a = s("866227"),
  l = s.n(a);

function n(e, t) {
  let s = "",
    a = e >= 0;
  return a && (s += "+"), t ? s += "".concat(Math.floor(100 * e), "%") : s += e, {
    formattedValue: s,
    isPositive: a
  }
}

function i(e, t) {
  return null != e ? l(e).format(t) : "-"
}