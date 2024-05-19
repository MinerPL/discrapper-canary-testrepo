"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("106351"),
  r = n("314897"),
  a = n("592125"),
  s = n("944486"),
  o = n("979651");

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.default,
    l = t.getChannel(e),
    u = n.getVoiceChannelId();
  if (null == l) return !1;
  if (l.type === i.ChannelTypes.GUILD_VOICE) return !0;
  if (l.isPrivate()) return l.id === u || null != o.default.getVoiceStatesForChannel(l.id)[r.default.getId()];
  return !1
}