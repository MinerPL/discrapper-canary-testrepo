t.d(n, {
    Z: function () {
        return o;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(557239),
    s = t(689938);
function o(e) {
    let { guildFriendsEnabled: n } = l.Z.useExperiment({ location: 'useFriendsItem' }, { autoTrackExposure: !1 });
    return n
        ? (0, a.jsx)(i.MenuItem, {
              id: 'friends',
              label: s.Z.Messages.GUILD_FRIENDS,
              icon: i.FriendsIcon,
              action: () => {
                  (0, i.openModalLazy)(async () => {
                      let { default: n } = await t.e('62635').then(t.bind(t, 564232));
                      return (t) =>
                          (0, a.jsx)(n, {
                              guild: e,
                              ...t
                          });
                  });
              }
          })
        : null;
}
