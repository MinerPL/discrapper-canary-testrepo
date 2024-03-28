"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
});
var s = i("735250");
i("470079");
var n = i("442837"),
  a = i("481060"),
  l = i("132871"),
  u = i("147890"),
  o = i("434404"),
  d = i("956324"),
  r = i("994763"),
  c = i("984933"),
  S = i("981631"),
  E = i("689938");

function f(e) {
  function t(t) {
    o.default.open(e.id, t)
  }
  let i = (0, n.useStateFromStoresArray)([c.default], () => c.default.getChannels(e.id).SELECTABLE, [e]),
    f = (0, d.default)(e);
  return __OVERLAY__ || !f ? null : (0, s.jsx)(a.MenuItem, {
    id: "guild-settings",
    label: E.default.Messages.SERVER_SETTINGS,
    action: () => t(),
    children: (0, r.getGuildSettingsSections)(e, i).map(i => {
      let {
        section: n,
        label: o
      } = i;
      if (null == o) return null;
      switch (n) {
        case S.GuildSettingsSections.DELETE:
          return null;
        case S.GuildSettingsSections.COMMUNITY:
          return (0, s.jsx)(a.MenuItem, {
            id: n,
            action: () => t(n),
            label: E.default.Messages.GUILD_SETTINGS_COMMUNITY
          }, n);
        case S.GuildSettingsSections.APP_DIRECTORY:
          return (0, s.jsx)(a.MenuItem, {
            id: n,
            action: () => {
              (0, u.goToAppDirectory)({
                guildId: e.id,
                entrypoint: {
                  name: l.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU
                }
              })
            },
            label: o
          }, n);
        default:
          return (0, s.jsx)(a.MenuItem, {
            id: n,
            action: () => t(n),
            label: o
          }, n)
      }
    })
  })
}