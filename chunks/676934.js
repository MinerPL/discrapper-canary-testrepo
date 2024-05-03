"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  i = s("230711"),
  r = s("454175"),
  o = s("111510"),
  d = s("761174"),
  u = s("695346"),
  c = s("314897"),
  S = s("63063"),
  E = s("981631"),
  T = s("689938"),
  f = s("825972");

function m(e) {
  u.RecentGamesEnabled.updateSetting(e), e && r.default.fetchUserRecentGames(c.default.getId()), !e && (0, o.trackDisableRecentGamesSetting)()
}
t.default = n.memo(function() {
  let e = u.ShowCurrentGame.useSetting(),
    t = (0, d.useIsCurrentUserRecentGamesEnabled)({
      location: "28tk0bf_8"
    });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.FormSwitch, {
      className: f.recentGamesSwitch,
      disabled: !e,
      value: t,
      note: T.default.Messages.RECENT_GAMES_SETTING_NOTE.format({
        helpdeskArticle: S.default.getArticleURL(E.HelpdeskArticles.USER_PROFILE_RECENT_GAMES)
      }),
      onChange: m,
      hideBorder: !0,
      children: T.default.Messages.USER_RECENT_GAMES_ON_PROFILE
    }), (0, a.jsx)(l.FormText, {
      className: f.requirement,
      type: l.FormTextTypes.DESCRIPTION,
      children: T.default.Messages.RECENT_GAMES_SETTING_REQUIREMENT.format({
        onSettingClick: () => {
          i.default.setSection(E.AnalyticsSections.SETTINGS_ACTIVITY_PRIVACY)
        }
      })
    }), (0, a.jsx)(l.FormDivider, {
      className: f.dividerDefault
    })]
  })
})