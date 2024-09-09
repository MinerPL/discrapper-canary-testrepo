t.d(e, {
    Z: function () {
        return s;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(131951),
    d = t(689938);
function s(n) {
    return (0, a.e7)([r.Z], () => r.Z.hasContext(n.id), [n.id])
        ? (0, i.jsx)(l.MenuItem, {
              id: 'ingame-voice',
              label: d.Z.Messages.IN_GAME_VOICE_SETTINGS,
              action: () =>
                  (0, l.openModalLazy)(async () => {
                      let { default: e } = await t.e('66063').then(t.bind(t, 344516));
                      return (t) =>
                          (0, i.jsx)(e, {
                              ...t,
                              mediaEngineContext: n.id,
                              title: n.name
                          });
                  })
          })
        : null;
}
