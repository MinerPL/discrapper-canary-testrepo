"use strict";
n.r(t), n.d(t, {
  getSavedMessageAndChannel: function() {
    return c
  }
});
var s = n("106351"),
  a = n("131704"),
  l = n("23750"),
  i = n("598077"),
  r = n("592125"),
  o = n("375954"),
  u = n("594174"),
  d = n("981631");

function c(e) {
  var t, n, c;
  let f = o.default.getMessage(e.channelId, e.messageId),
    E = u.default.getUser(e.authorId),
    _ = r.default.getChannel(e.channelId),
    T = null != E ? E : new i.default({
      id: e.authorId,
      username: e.authorSummary
    }),
    m = new l.default({
      id: e.messageId,
      channel_id: e.channelId,
      author: T,
      content: e.messageSummary
    }),
    I = null == e.guildId ? new a.DMChannelRecord({
      id: e.channelId,
      type: s.ChannelTypes.DM,
      name: null !== (t = e.channelSummary) && void 0 !== t ? t : "",
      guild_id: d.EMPTY_STRING_SNOWFLAKE_ID,
      recipients: [null !== (n = e.authorId) && void 0 !== n ? n : d.EMPTY_STRING_SNOWFLAKE_ID]
    }) : new a.GuildTextualChannelRecord({
      id: e.channelId,
      type: null == e.guildId ? s.ChannelTypes.DM : s.ChannelTypes.GUILD_TEXT,
      name: null !== (c = e.channelSummary) && void 0 !== c ? c : "",
      guild_id: e.guildId
    });
  return {
    channel: null != _ ? _ : I,
    message: null != f ? f : m
  }
}