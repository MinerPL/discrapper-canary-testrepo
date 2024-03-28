"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("442837"),
  l = n("314897"),
  s = n("111583"),
  i = n("351780"),
  r = n("843693"),
  o = n("170248"),
  u = n("524484");

function d(e) {
  let t = (0, o.default)(u.ShakeLocation.CHAT_INPUT),
    n = (0, a.useStateFromStores)([i.default], () => i.default.isEnabled({
      shakeLocation: u.ShakeLocation.CHAT_INPUT
    }));
  return (0, a.useStateFromStores)([s.default, r.default, l.default], () => n && s.default.isTyping(e, l.default.getId()) ? r.default.getUserComboShakeIntensity(l.default.getId(), e, t) : 0)
}