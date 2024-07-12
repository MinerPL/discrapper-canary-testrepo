n.d(t, {
  p: function() {
return u;
  }
});
var i = n(106351),
  a = n(131704),
  s = n(23750),
  r = n(598077),
  l = n(592125),
  o = n(375954),
  c = n(594174),
  d = n(981631);

function u(e) {
  var t, n, u;
  let _ = o.Z.getMessage(e.channelId, e.messageId),
E = c.default.getUser(e.authorId),
I = l.Z.getChannel(e.channelId),
m = null != E ? E : new r.Z({
  id: e.authorId,
  username: e.authorSummary
}),
T = new s.ZP({
  id: e.messageId,
  channel_id: e.channelId,
  author: m,
  content: e.messageSummary
}),
h = null == e.guildId ? new a.cE({
  id: e.channelId,
  type: i.d.DM,
  name: null !== (t = e.channelSummary) && void 0 !== t ? t : '',
  guild_id: d.lds,
  recipients: [null !== (n = e.authorId) && void 0 !== n ? n : d.lds]
}) : new a.DA({
  id: e.channelId,
  type: null == e.guildId ? i.d.DM : i.d.GUILD_TEXT,
  name: null !== (u = e.channelSummary) && void 0 !== u ? u : '',
  guild_id: e.guildId
});
  return {
channel: null != I ? I : h,
message: null != _ ? _ : T
  };
}