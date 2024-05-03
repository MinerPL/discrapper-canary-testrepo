"use strict";
s.r(t), s.d(t, {
  trackDisableRecentGamesSetting: function() {
    return r
  }
}), s("653041");
var a = s("314897"),
  n = s("626135"),
  l = s("385845"),
  i = s("981631");

function r() {
  let e = a.default.getId(),
    t = l.default.getRecentGames(e);
  if (null == t) return;
  let s = [],
    r = [];
  null == t || t.forEach(e => {
    s.push(e.applicationId), e.isNew && r.push(e.applicationId)
  }), n.default.track(i.AnalyticEvents.USER_PROFILE_RECENT_GAMES_SETTING_DISABLED, {
    profile_application_ids: s,
    profile_new_applications_ids: r
  })
}