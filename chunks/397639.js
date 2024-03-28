"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  },
  useIsVoiceChannelLocked: function() {
    return d
  }
});
var l = n("442837"),
  u = n("430824"),
  a = n("496675"),
  i = n("979651"),
  r = n("934415"),
  s = n("231338");

function d(e) {
  return (0, l.useStateFromStores)([a.default], () => null == e || !a.default.can(s.Permissions.CONNECT, e), [e])
}

function o(e) {
  return (0, l.useStateFromStores)([i.default, u.default], () => (0, r.isChannelFull)(e, i.default, u.default))
}