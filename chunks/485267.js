"use strict";
n.r(t), n.d(t, {
  toggleMemberListContentFeedHidden: function() {
    return u
  }
});
var a = n("570140"),
  l = n("944486"),
  s = n("914010"),
  i = n("626135"),
  r = n("146282"),
  o = n("981631");
let u = () => {
  a.default.dispatch({
    type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN"
  }), i.default.track(o.AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, {
    channel_id: l.default.getChannelId(),
    guild_id: s.default.getGuildId(),
    hidden: r.default.hidden
  })
}