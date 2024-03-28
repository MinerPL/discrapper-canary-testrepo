"use strict";
u.r(t), u.d(t, {
  useIsConnectedToVoiceChannel: function() {
    return s
  }
});
var a = u("442837"),
  n = u("314897"),
  l = u("979651");

function s(e) {
  return function(e) {
    return (0, a.useStateFromStores)([l.default, n.default], () => l.default.isInChannel(e, n.default.getId()))
  }(null == e ? void 0 : e.id)
}