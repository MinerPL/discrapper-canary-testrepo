"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(106351),
  r = n(314897),
  s = n(592125),
  o = n(944486),
  a = n(979651);

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.Z,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
    l = t.getChannel(e),
    u = n.getVoiceChannelId();
  if (null == l) return !1;
  if (l.type === i.d.GUILD_VOICE) return !0;
  if (l.isPrivate()) return l.id === u || null != a.Z.getVoiceStatesForChannel(l.id)[r.default.getId()];
  return !1
}