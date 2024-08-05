n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(442837),
  i = n(661869),
  a = n(543882),
  s = n(199902),
  o = n(592125),
  l = n(496675),
  u = n(158776),
  c = n(979651),
  d = n(561308),
  _ = n(231338);

function E(e) {
  let t = (0, r.e7)([
  c.Z,
  o.Z
], () => {
  if (!(0, d.kr)(e) || e.author_type !== i.i.USER)
    return null;
  let t = c.Z.getVoiceStateForUser(e.author_id);
  return o.Z.getChannel(null == t ? void 0 : t.channelId);
}, [e]),
n = (0, r.e7)([u.Z], () => u.Z.getPrimaryActivity(e.author_id, null == t ? void 0 : t.guild_id), [
  t,
  e
]),
{
  streamPreviewUrl: E,
  stream: f
} = (0, r.cj)([
  s.Z,
  l.Z,
  a.Z
], () => {
  let n;
  if (null == t)
    return {};
  let r = s.Z.getAnyStreamForUser(e.author_id);
  return null == r ? {} : (l.Z.canBasicChannel(_.S7.CONNECT, t) && (null == r ? void 0 : r.channelId) === t.id && (n = a.Z.getPreviewURL(r.guildId, r.channelId, r.ownerId)), {
    stream: r,
    streamPreviewUrl: n
  });
}, [
  t,
  e
]);
  return {
channel: t,
activity: n,
streamPreviewUrl: E,
stream: f
  };
}