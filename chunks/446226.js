"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("442837"),
  u = n("314897"),
  a = n("979651"),
  i = n("258609");

function r() {
  let e = (0, l.useStateFromStores)([u.default], () => u.default.getId()),
    t = (0, l.useStateFromStores)([i.default], () => i.default.getRemoteSessionId());
  return (0, l.useStateFromStores)([a.default], () => {
    var n;
    return null !== (n = a.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
  })
}