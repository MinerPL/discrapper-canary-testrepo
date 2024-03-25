"use strict";
l.r(t), l.d(t, {
  trackModViewOpened: function() {
    return s
  }
}), l("884691");
var a = l("812204"),
  n = l("716241"),
  u = l("599110"),
  i = l("789150"),
  d = l("49111");

function s(e, t, l) {
  let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.default.MEMBER_SAFETY_PAGE,
    r = {
      guild_id: e,
      target_user_id: t,
      subpanel_name: i.ModViewPanelNameMap[l],
      location: s,
      ...(0, n.collectGuildAnalyticsMetadata)(e)
    };
  return u.default.track(d.AnalyticEvents.GUILD_MOD_VIEW_OPENED, r)
}