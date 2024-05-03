"use strict";
i.r(t), i.d(t, {
  default: function() {
    return g
  }
});
var s = i("735250");
i("470079");
var n = i("442837"),
  a = i("481060"),
  l = i("132871"),
  u = i("147890"),
  o = i("593128"),
  d = i("434404"),
  r = i("956324"),
  c = i("994763"),
  S = i("984933"),
  f = i("725568"),
  E = i("981631"),
  N = i("308083"),
  _ = i("689938");

function g(e) {
  function t(t) {
    d.default.open(e.id, t)
  }
  let i = (0, n.useStateFromStoresArray)([S.default], () => S.default.getChannels(e.id).SELECTABLE, [e]),
    g = (0, r.default)(e);
  return __OVERLAY__ || !g ? null : (0, s.jsx)(a.MenuItem, {
    id: "guild-settings",
    label: _.default.Messages.SERVER_SETTINGS,
    action: () => t(),
    children: (0, c.getGuildSettingsSections)(e, i).map(i => {
      let {
        section: n,
        label: d
      } = i;
      if (null == d) return null;
      switch (n) {
        case E.GuildSettingsSections.DELETE:
          return null;
        case E.GuildSettingsSections.COMMUNITY:
          return (0, s.jsx)(a.MenuItem, {
            id: n,
            action: () => t(n),
            label: _.default.Messages.GUILD_SETTINGS_COMMUNITY
          }, n);
        case E.GuildSettingsSections.APP_DIRECTORY:
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
            label: d
          }, n);
        case E.GuildSettingsSections.CLAN:
          return (0, s.jsx)(a.MenuItem, {
            id: "guild-settings",
            label: _.default.Messages.CLAN_SETTINGS,
            action: () => (0, f.openFullScreenLayer)(t => {
              let {
                closeLayer: i
              } = t;
              return (0, s.jsx)(o.default, {
                onClose: i,
                guildId: e.id
              })
            }, {
              layerKey: N.CLAN_SETTINGS_MODAL_LAYER_KEY
            })
          });
        default:
          return (0, s.jsx)(a.MenuItem, {
            id: n,
            action: () => t(n),
            label: d
          }, n)
      }
    })
  })
}