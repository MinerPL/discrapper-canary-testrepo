"use strict";
n.r(t), n.d(t, {
  isOnboardingDismissed: function() {
    return i
  }
});
var a = n("913527"),
  l = n.n(a),
  s = n("709054");
let i = e => {
  let t = s.default.extractTimestamp(e);
  return !l()().isBefore(l()(t).add(l().duration(15, "days")))
}