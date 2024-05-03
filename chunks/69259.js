"use strict";
n.r(t), n.d(t, {
  trackInteraction: function() {
    return i
  }
});
var a = n("626135"),
  l = n("206583"),
  s = n("981631");
let i = (e, t) => {
  a.default.track(s.AnalyticEvents.RANKING_ITEM_INTERACTED, {
    request_id: t.requestId,
    item_id: t.entry.id,
    surface_type: l.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
    channel_id: t.channelId,
    guild_id: t.guildId,
    interaction_type: e,
    destination_channel_id: t.destinationChannelId,
    destination_guild_id: t.destinationGuildId
  })
}