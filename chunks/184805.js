"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("442837"),
  l = n("314897"),
  s = n("590415");

function i(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getId());
  return (0, s.default)(t, e) === s.RequestToSpeakStates.ON_STAGE
}