"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("230711"),
  r = s("454175"),
  o = s("695346"),
  d = s("314897"),
  u = s("981631"),
  c = s("231338"),
  S = s("689938");

function E(e) {
  o.RecentGamesEnabled.updateSetting(e), e && r.default.fetchUserRecentGames(d.default.getId())
}
t.default = n.memo(function() {
  let e = o.RecentGamesEnabled.useSetting(),
    t = o.ShowCurrentGame.useSetting(),
    s = n.useMemo(() => e || t ? S.default.Messages.RECENT_GAMES_SETTING_SUBLABEL.format({
      onClick: c.NOOP
    }) : S.default.Messages.RECENT_GAMES_SETTING_ACTIVITY_STATUS_DISABLED_SUBLABEL.format({
      onHelpArticleClick: c.NOOP,
      onSettingClick: () => {
        i.default.setSection(u.AnalyticsSections.SETTINGS_ACTIVITY_PRIVACY)
      }
    }), [e, t]);
  return (0, a.jsx)(l.FormSwitch, {
    disabled: !e && !t,
    value: e,
    note: s,
    onChange: E,
    children: S.default.Messages.USER_RECENT_GAMES_ON_PROFILE
  })
})