"use strict";
n.r(t), n.d(t, {
  toggleMemberListContentFeedHidden: function() {
    return o
  }
});
var a = n("913144"),
  l = n("18494"),
  s = n("162771"),
  i = n("599110"),
  r = n("265596"),
  u = n("49111");
let o = () => {
  a.default.dispatch({
    type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN"
  }), i.default.track(u.AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, {
    channel_id: l.default.getChannelId(),
    guild_id: s.default.getGuildId(),
    hidden: r.default.hidden
  })
}