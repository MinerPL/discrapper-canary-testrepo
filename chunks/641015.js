"use strict";
n.d(t, {
  D: function() {
    return a
  },
  Z: function() {
    return l
  }
});
var i = n(592125),
  r = n(496675),
  s = n(944486),
  o = n(981631);

function a() {
  let e = s.Z.getVoiceChannelId();
  return l(i.Z.getChannel(e))
}

function l(e) {
  if (null == e) return !1;
  if (o.TPd.CALLABLE.has(e.type)) return !0;
  let t = r.Z.can(o.Plq.USE_SOUNDBOARD, e),
    n = r.Z.can(o.Plq.SPEAK, e);
  return e.type === o.d4z.GUILD_VOICE && t && n
}