"use strict";
t.r(n), t.d(n, {
  default: function() {
    return l
  }
});
var a = t("735250");
t("470079");
var u = t("906732");

function l(e, n) {
  return function(t) {
    let {
      analyticsLocations: l
    } = (0, u.default)(n);
    return (0, a.jsx)(u.AnalyticsLocationProvider, {
      value: l,
      children: (0, a.jsx)(e, {
        ...t
      })
    })
  }
}