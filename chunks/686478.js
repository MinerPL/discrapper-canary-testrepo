
function r(e) {
  var t;
  return {
type: e.type,
channel_id: e.channelId,
message_id: e.messageId,
saved_at: e.savedAt.toISOString(),
author_summary: e.authorSummary,
channel_summary: e.channelSummary,
message_summary: e.messageSummary,
guild_id: e.guildId,
author_id: e.authorId,
notes: e.notes,
due_at: null === (t = e.dueAt) || void 0 === t ? void 0 : t.toISOString()
  };
}

function i(e) {
  return {
type: e.type,
channelId: e.channel_id,
messageId: e.message_id,
savedAt: new Date(e.saved_at),
authorSummary: e.author_summary,
channelSummary: e.channel_summary,
messageSummary: e.message_summary,
guildId: 0 === e.guild_id ? void 0 : e.guild_id,
authorId: 0 === e.author_id ? void 0 : e.author_id,
notes: e.notes,
dueAt: null != e.due_at ? new Date(e.due_at) : void 0
  };
}
n.d(t, {
  cu: function() {
return r;
  },
  lY: function() {
return i;
  }
});