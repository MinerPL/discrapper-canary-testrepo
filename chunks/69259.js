n.d(t, {
  L: function() {
return s;
  }
});
var i = n(626135),
  a = n(206583),
  l = n(981631);
let s = (e, t) => {
  i.default.track(l.rMx.RANKING_ITEM_INTERACTED, {
request_id: t.requestId,
item_id: t.entry.id,
surface_type: a.Kd.GUILD_MEMBER_LIST,
channel_id: t.channelId,
guild_id: t.guildId,
interaction_type: e,
destination_channel_id: t.destinationChannelId,
destination_guild_id: t.destinationGuildId
  });
};