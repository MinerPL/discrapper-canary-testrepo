t.d(n, {
  Z: function() {
return g;
  }
});
var l = t(735250),
  i = t(470079),
  a = t(442837),
  r = t(481060),
  u = t(58540),
  s = t(438536),
  d = t(346479),
  o = t(665906),
  c = t(592125),
  Z = t(430824),
  E = t(496675),
  M = t(594174),
  f = t(981631),
  _ = t(689938);

function g(e, n, g) {
  let I = i.useMemo(() => ({
[n]: [e.id]
  }), [
n,
e.id
  ]);
  (0, u.$)(I), (0, a.e7)([E.Z], () => E.Z.getGuildVersion(n), [n]);
  let m = (0, a.e7)([c.Z], () => c.Z.getChannel(g)),
R = (0, a.e7)([Z.Z], () => Z.Z.getGuild(n), [n]),
N = (0, a.e7)([M.default], () => M.default.getCurrentUser()),
C = (0, s.Z)(m, 'Context Menu'),
T = (0, o.Xb)(m);
  if ((null == N ? void 0 : N.id) === e.id)
return [C];
  if (null == R || null == m || null == N)
return [];
  let A = T || m.ownerId === N.id && m.type === f.d4z.PRIVATE_THREAD;
  return [
A ? (0, l.jsx)(r.MenuItem, {
  id: 'remove',
  label: m.isForumPost() ? _.Z.Messages.REMOVE_USER_FROM_FORUM_POST.format({
    user: e.username
  }) : _.Z.Messages.REMOVE_USER_FROM_THREAD.format({
    user: e.username
  }),
  color: 'danger',
  action: () => d.Z.removeMember(m, e.id, 'Context Menu')
}) : null,
E.Z.canManageUser(f.Plq.KICK_MEMBERS, e, R) ? (0, l.jsx)(r.MenuItem, {
  id: 'kick',
  label: A ? _.Z.Messages.KICK_USER_FROM_SERVER.format({
    user: e.username
  }) : _.Z.Messages.KICK_USER.format({
    user: e.username
  }),
  color: 'danger',
  action: () => (0, r.openModalLazy)(async () => {
    let {
      default: n
    } = await t.e('5454').then(t.bind(t, 854360));
    return t => (0, l.jsx)(n, {
      ...t,
      guildId: R.id,
      user: e
    });
  })
}) : null,
E.Z.canManageUser(f.Plq.BAN_MEMBERS, e, R) ? (0, l.jsx)(r.MenuItem, {
  id: 'ban',
  label: A ? _.Z.Messages.BAN_USER_FROM_SERVER.format({
    user: e.username
  }) : _.Z.Messages.BAN_USER.format({
    user: e.username
  }),
  color: 'danger',
  action: () => (0, r.openModalLazy)(async () => {
    let {
      default: n
    } = await t.e('43350').then(t.bind(t, 98746));
    return t => (0, l.jsx)(n, {
      ...t,
      guildId: R.id,
      user: e
    });
  })
}) : null
  ];
}