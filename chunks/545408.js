"use strict";
n.r(t), n.d(t, {
  trackModViewOpened: function() {
    return s
  }
}), n("470079");
var l = n("100527"),
  i = n("367907"),
  a = n("626135"),
  d = n("50493"),
  u = n("981631");

function s(e, t, n) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.default.MEMBER_SAFETY_PAGE,
    r = {
      guild_id: e,
      target_user_id: t,
      subpanel_name: d.ModViewPanelNameMap[n],
      location: s,
      ...(0, i.collectGuildAnalyticsMetadata)(e)
    };
  return a.default.track(u.AnalyticEvents.GUILD_MOD_VIEW_OPENED, r)
}