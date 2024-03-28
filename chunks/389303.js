"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var a = n("314897"),
  l = n("496675"),
  s = n("938475"),
  i = n("700785"),
  r = n("924301"),
  o = n("85243");

function u(e) {
  if (!e.isGuildVoice() || r.default.getGuildScheduledEventsByIndex(r.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e.id)).length < 1 || !l.default.can(o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS, e)) return !1;
  let t = new Set(s.default.getVoiceStatesForChannel(e).map(e => e.user.id)),
    n = a.default.getId();
  for (let a of t)
    if (a !== n && i.can({
        permission: o.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS,
        user: a,
        context: e
      })) return !1;
  return !0
}