"use strict";
n.r(t), n.d(t, {
  toggleContentInventoryReplyMode: function() {
    return c
  },
  toggleMemberListContentFeedHidden: function() {
    return d
  }
});
var a = n("570140"),
  l = n("944486"),
  s = n("914010"),
  i = n("626135"),
  r = n("71585"),
  o = n("146282"),
  u = n("981631");
let d = () => {
    a.default.dispatch({
      type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN"
    }), i.default.track(u.AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, {
      channel_id: l.default.getChannelId(),
      guild_id: s.default.getGuildId(),
      hidden: o.default.hidden
    })
  },
  c = () => {
    a.default.dispatch({
      type: "CONTENT_INVENTORY_TOGGLE_REPLY_MODE"
    }), i.default.track(u.AnalyticEvents.MEMBERLIST_POPOUT_SHARE_TO_CHANNEL_TOGGLED, {
      is_send_to_channel: r.default.isChannelReplyMode()
    })
  }