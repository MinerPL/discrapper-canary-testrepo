"use strict";
n.r(t), n.d(t, {
  trackClanProfileViewed: function() {
    return o
  }
});
var i = n("314897"),
  r = n("271383"),
  a = n("626135"),
  s = n("981631");

function o(e, t, n) {
  let o = r.default.getMember(e, i.default.getId()),
    l = (null == o ? void 0 : o.joinedAt) != null;
  a.default.track(s.AnalyticEvents.CLAN_PROFILE_VIEWED, {
    guild_id: e,
    is_member: l,
    has_join_request: t,
    source: n
  })
}