t.d(e, {
  Z: function() {
return r;
  }
});
var i = t(442837),
  u = t(592125),
  l = t(944486);

function r() {
  return (0, i.e7)([
l.Z,
u.Z
  ], () => {
let n = l.Z.getVoiceChannelId();
if (null != n) {
  let e = u.Z.getChannel(n);
  if (null == e ? void 0 : e.isGuildStageVoice())
    return e;
}
return null;
  });
}