t.d(n, {
  Z: function() {
return c;
  }
});
var a = t(735250);
t(470079);
var l = t(392711),
  i = t.n(l),
  s = t(442837),
  o = t(481060),
  r = t(344185),
  d = t(665906),
  u = t(689938);

function c(e) {
  let n = (0, d.Xb)(e),
l = (0, s.e7)([r.Z], () => !i().isEmpty(r.Z.getThreadsForGuild(e.id)));
  return n && l ? (0, a.jsx)(o.MenuItem, {
id: 'active-threads',
label: u.Z.Messages.ACTIVE_THREADS,
icon: o.ChatIcon,
action: () => {
  (0, o.openModalLazy)(async () => {
    let {
      default: n
    } = await t.e('22482').then(t.bind(t, 157743));
    return t => (0, a.jsx)(n, {
      guildId: e.id,
      ...t
    });
  });
}
  }) : null;
}