"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(314897),
  r = n(592125),
  s = n(979651);

function o() {
  let e = s.Z.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
    t = null == e ? void 0 : e.channelId;
  return r.Z.getChannel(t)
}