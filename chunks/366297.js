"use strict";
n.d(t, {
  _: function() {
    return l
  }
});
var i = n(258609),
  r = n(740492),
  s = n(314897),
  o = n(430824),
  a = n(979651);

function l(e) {
  if (r.ZP.disableVoiceChannelChangeAlert) return !1;
  let t = i.Z.getRemoteSessionId();
  if (null != a.Z.getVoiceStateForSession(s.default.getId(), t) || !a.Z.isCurrentClientInVoiceChannel() || a.Z.isInChannel(e.id)) return !1;
  let n = o.Z.getGuild(e.getGuildId());
  return !((null == n ? void 0 : n.afkChannelId) != null && a.Z.isInChannel(n.afkChannelId)) && !0
}