"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
}), a("47120");
var l = a("470079"),
  n = a("601410"),
  s = a("276438"),
  i = a("642101"),
  d = a("313531"),
  r = a("369701");

function u(e, t) {
  let [a, u] = l.useState(!1);
  return [a, l.useCallback((a, l) => {
    a.stopPropagation(), u(!0), (0, s.trackFeedItemInteracted)({
      feed_item_type: (0, d.getFeedItemTypeFromId)(t),
      feed_item_id: t,
      load_id: i.default.getLoadId(e),
      action_type: r.FeedItemInteractionType.EXPANDED_ITEM,
      guild_id: e,
      channel_id: l.channel_id,
      message_id: l.id,
      home_session_id: n.default.getHomeSessionId(e)
    })
  }, [e, t])]
}