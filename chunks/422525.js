t.d(n, {
    Z: function () {
        return S;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    a = t(481060),
    l = t(132871),
    u = t(147890),
    o = t(593128),
    r = t(434404),
    d = t(956324),
    c = t(994763),
    E = t(84615),
    _ = t(984933),
    M = t(981631),
    N = t(308083),
    I = t(689938);
function S(e) {
    function n(n) {
        r.Z.open(e.id, n);
    }
    let t = (0, i.Wu)([_.ZP], () => _.ZP.getChannels(e.id).SELECTABLE, [e]),
        S = (0, d.Z)(e);
    return __OVERLAY__ || !S
        ? null
        : (0, s.jsx)(a.MenuItem, {
              id: 'guild-settings',
              label: I.Z.Messages.SERVER_SETTINGS,
              action: () => n(),
              children: (0, c.getGuildSettingsSections)(e, t).map((t) => {
                  let { section: i, label: r } = t;
                  if (null == r) return null;
                  switch (i) {
                      case M.pNK.DELETE:
                          return null;
                      case M.pNK.COMMUNITY:
                          return (0, s.jsx)(
                              a.MenuItem,
                              {
                                  id: i,
                                  action: () => n(i),
                                  label: I.Z.Messages.GUILD_SETTINGS_COMMUNITY
                              },
                              i
                          );
                      case M.pNK.APP_DIRECTORY:
                          return (0, s.jsx)(
                              a.MenuItem,
                              {
                                  id: i,
                                  action: () => {
                                      (0, u.goToAppDirectory)({
                                          guildId: e.id,
                                          entrypoint: { name: l.ApplicationDirectoryEntrypointNames.GUILD_CONTEXT_MENU }
                                      });
                                  },
                                  label: r
                              },
                              i
                          );
                      case M.pNK.CLAN:
                          return (0, s.jsx)(a.MenuItem, {
                              id: 'guild-settings',
                              label: I.Z.Messages.CLAN_SETTINGS,
                              action: () =>
                                  (0, E.q4)(
                                      (n) => {
                                          let { closeLayer: t } = n;
                                          return (0, s.jsx)(o.Z, {
                                              onClose: t,
                                              guildId: e.id
                                          });
                                      },
                                      { layerKey: N.q2 }
                                  )
                          });
                      default:
                          return (0, s.jsx)(
                              a.MenuItem,
                              {
                                  id: i,
                                  action: () => n(i),
                                  label: r
                              },
                              i
                          );
                  }
              })
          });
}
