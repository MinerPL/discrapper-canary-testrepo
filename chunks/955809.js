"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  i = a("481060"),
  u = a("131951"),
  r = a("689938");

function d(e) {
  return (0, l.useStateFromStores)([u.default], () => u.default.hasContext(e.id), [e.id]) ? (0, n.jsx)(i.MenuItem, {
    id: "ingame-voice",
    label: r.default.Messages.IN_GAME_VOICE_SETTINGS,
    action: () => (0, i.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("49237"), a.e("99387"), a.e("84518")]).then(a.bind(a, "344516"));
      return a => (0, n.jsx)(t, {
        ...a,
        mediaEngineContext: e.id,
        title: e.name
      })
    })
  }) : null
}