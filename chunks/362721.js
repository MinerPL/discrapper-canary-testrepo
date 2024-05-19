"use strict";
n.r(t), n.d(t, {
  canSetVoiceChannelStatus: function() {
    return d
  },
  default: function() {
    return _
  }
});
var i = n("442837"),
  r = n("496675"),
  a = n("700785"),
  s = n("231338");
let o = [s.Permissions.SET_VOICE_CHANNEL_STATUS, s.Permissions.CONNECT, s.Permissions.VIEW_CHANNEL],
  l = [s.Permissions.SET_VOICE_CHANNEL_STATUS];

function u(e, t, n, i) {
  return (n ? l : o).every(n => null == i ? t.can(n, e) : a.can({
    permission: n,
    user: i,
    context: e
  }))
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return u(e, r.default, t, n)
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return (0, i.useStateFromStores)([r.default], () => u(e, r.default, t, n), [e, t, n])
}