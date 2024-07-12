n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(106351),
  i = n(314897),
  a = n(592125),
  o = n(944486),
  s = n(979651);

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.Z,
l = t.getChannel(e),
u = n.getVoiceChannelId();
  if (null == l)
return !1;
  if (l.type === r.d.GUILD_VOICE)
return !0;
  if (l.isPrivate())
return l.id === u || null != s.Z.getVoiceStatesForChannel(l.id)[i.default.getId()];
  return !1;
}