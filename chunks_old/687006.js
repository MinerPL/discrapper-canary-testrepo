"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("845579"),
  r = s("476765"),
  o = s("570697"),
  d = s("782340");
let u = (0, r.uid)();
var c = n.memo(function() {
  let e = n.useCallback(e => {
      i.RecentGamesEnabled.updateSetting(e)
    }, []),
    t = i.RecentGamesEnabled.useSetting();
  return (0, a.jsx)(o.default, {
    title: d.default.Messages.USER_RECENT_GAMES,
    titleId: u,
    children: (0, a.jsx)(l.FormSwitch, {
      value: t,
      note: "Enabling this profile module will turn on activity data collection if it isn’t already. We won’t use    this data for anything except showing your recent activity. Check our Help Center for more information.",
      onChange: e,
      children: d.default.Messages.USER_RECENT_GAMES_ON_PROFILE
    })
  })
})