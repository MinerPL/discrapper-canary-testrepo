"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("37983");
n("884691");
var l = n("685665");

function i(e, t) {
  return function(n) {
    let {
      analyticsLocations: i
    } = (0, l.default)(t);
    return (0, a.jsx)(l.AnalyticsLocationProvider, {
      value: i,
      children: (0, a.jsx)(e, {
        ...n
      })
    })
  }
}