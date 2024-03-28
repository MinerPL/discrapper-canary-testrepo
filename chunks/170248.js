"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("442837"),
  l = n("451478"),
  s = n("351780");

function i(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.isFocused());
  return (0, a.useStateFromStores)([s.default], () => s.default.isEnabled({
    shakeLocation: e
  }) && t ? s.default.shakeIntensity : 0)
}