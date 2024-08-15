n.d(t, {
  _: function() {
return l;
  }
});
var r = n(258609),
  i = n(740492),
  a = n(314897),
  s = n(430824),
  o = n(979651);

function l(e) {
  if (i.ZP.disableVoiceChannelChangeAlert)
return !1;
  let t = r.Z.getRemoteSessionId();
  if (null != o.Z.getVoiceStateForSession(a.default.getId(), t) || !o.Z.isCurrentClientInVoiceChannel() || o.Z.isInChannel(e.id))
return !1;
  let n = s.Z.getGuild(e.getGuildId());
  return !((null == n ? void 0 : n.afkChannelId) != null && o.Z.isInChannel(n.afkChannelId)) && !0;
}