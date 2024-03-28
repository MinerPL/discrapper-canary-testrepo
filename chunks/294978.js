"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var i = a("392711"),
  l = a.n(i),
  s = a("442837"),
  u = a("481060"),
  d = a("344185"),
  r = a("665906"),
  o = a("974029"),
  c = a("689938");

function f(e) {
  let t = (0, r.useIsThreadModerator)(e),
    i = (0, s.useStateFromStores)([d.default], () => !l().isEmpty(d.default.getThreadsForGuild(e.id)));
  return t && i ? (0, n.jsx)(u.MenuItem, {
    id: "active-threads",
    label: c.default.Messages.ACTIVE_THREADS,
    icon: o.default,
    action: () => {
      (0, u.openModalLazy)(async () => {
        let {
          default: t
        } = await Promise.all([a.e("99387"), a.e("22482")]).then(a.bind(a, "157743"));
        return a => (0, n.jsx)(t, {
          guildId: e.id,
          ...a
        })
      })
    }
  }) : null
}