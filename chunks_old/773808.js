"use strict";
n.r(t), n.d(t, {
  trackInteraction: function() {
    return i
  }
});
var a = n("599110"),
  l = n("709377"),
  s = n("49111");
let i = (e, t) => {
  a.default.track(s.AnalyticEvents.RANKING_ITEM_INTERACTED, {
    request_id: t.requestId,
    item_id: t.entry.id,
    surface_type: l.ContentInventorySurfaceTypes.GUILD_MEMBER_LIST,
    channel_id: t.channelId,
    guild_id: t.guildId,
    interaction_type: e
  })
}