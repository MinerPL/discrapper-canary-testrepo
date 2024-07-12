t.d(n, {
  Z: function() {
return u;
  }
});
var E = t(442837),
  _ = t(592125),
  s = t(944486);

function u() {
  return (0, E.e7)([
s.Z,
_.Z
  ], () => {
let e = s.Z.getVoiceChannelId();
if (null != e) {
  let n = _.Z.getChannel(e);
  if (null == n ? void 0 : n.isGuildStageVoice())
    return n;
}
return null;
  });
}